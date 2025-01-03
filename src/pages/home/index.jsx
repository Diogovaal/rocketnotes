import { Container, Brand, Menu, Search, Content, NewNote } from "./styles"; 
import { FiPlus } from "react-icons/fi";
import { useState, useEffect } from "react";

import { Input } from '../../components/input'
import { Header } from '../../components/header'
import { ButtonText } from '../../components/buttontext'

import { Section } from '../../components/section'
import { Note } from '../../components/note'
import { api } from "../../services/api";

export function Home(){
    const[tags, setTags]= useState([])
    const[tagsSelected, setTagsSelected]= useState([])
    const [search, setSearch] = useState('')


    function handleTagSelected(tagName){

        const alreadySelected = tagsSelected.includes(tagName)
        if(alreadySelected){
            const filteredTags = tagsSelected.filter(tag => tag !== tagName)
            setTagsSelected(filteredTags)
        }else{
            setTagsSelected(prevState => [...prevState, tagName])
            
        }
        
    }


    useEffect(()=>{
       
    async function fetchTags() {
        const response = await api.get("/tags")
        setTags(response.data)
    }

    fetchTags()
    }, [])

    useEffect(()=>{


    },[tagsSelected, search])

    return(

        <Container>
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>
            <Header />
 
            <Menu>
            <li>
                <ButtonText 
                title ='Todos'
                onClick ={()=> handleTagSelected('all')}
                isActive ={tagsSelected.length === 0} />
                </li > 
            {
                tags && tags.map(tag =>(
               <li key={String(tag.id)}>
                <ButtonText
                 title ={tag.name} 
                 onClick ={()=> handleTagSelected(tag.name)}
                 isActive ={tagsSelected.includes(tag.name)}
                 />
                 </li> 

                ))
            }
               
              
            </Menu>

            <Search>
                <Input 
                placeholder="Pesquisar pelo titulo"
                onChange={()=> setSearch(e.target.value)}
                />

            </Search>

            <Content>
                <Section title="Minhas notas"> 
                    <Note data={{
                        title: 'React',
                        tags:[
                            {id: '1', name:'react'},
                            {id: '2', name: 'rocketseat'}
                            
                            ]}}/>

                </Section>

            </Content>

            <NewNote to='/new'>
                <FiPlus/>
                Criar nota

            </NewNote>

        </Container>
        
    )
}