import {Header} from '../../components/header'
import {Input} from '../../components/input'
import {Textarea} from '../../components/textarea'
import {NoteItem} from '../../components/noteitem'
import {Section} from '../../components/section'
import {Button} from '../../components/button'
import{Link} from 'react-router-dom'
import{useState} from 'react'


import {Container, Form} from './styles'

export function New(){
    

    const[links, setLinks]= useState([])
    const[newLink, setNewLink]= useState("")

    const[tags, setTags]= useState([])
    const[newTag, setNewTag]= useState("")

    function handleAddLink(){
        setLinks(prevState => [...prevState, newLink] )
        setNewLink("")
    }

    function handleRemoveLink(deleted){
        setLinks(prevState => prevState.filter(link => link !== deleted))
    }

    function handleAddTag(){
        setTags(prevState =>[...prevState, newTag])/**prevState: prevenir os estados anteriores sem que precisa eliminar, e o "..." ele disfaz a lista anterior, despejando todas as informações numa nova lista */
        setNewTag("")

    }

    function handleRemoveTag(deleted){
        setTags(prevState => prevState.filter(tag => tag !== deleted))
    }

    return(

        <Container>
            <Header/>
            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to="/">Voltar</Link>
                    </header>

                    <Input placeholder='Título' />
                    <Textarea placeholder='Observações'/>

                    <Section title='Links úteis'>
                        
                    {
                        links.map((link, index)=>(
                     <NoteItem 
                        key={String(index)}
                        value={link}
                        onClick={()=>handleRemoveLink(link)}
                        />

                        ))
                    }

                        <NoteItem isNew 
                        placeholder='Novo Link'
                        value={newLink}
                        onChange ={e => setNewLink(e.target.value)}
                        onClick={handleAddLink}
                        />

                    </Section>

                    <Section title='Marcadores'>
                        <div className='tags'>
                            {
                              tags.map((tag, index)=>(
                                <NoteItem 
                                key={String(index)}
                                value={tag}
                                onClick={()=>handleRemoveTag(tag)}
                                
                                />

                              ))
                            }
                  

                    <NoteItem 
                    isNew 
                    placeholder='Nova tag' 
                    value={newTag}
                    onChange = {e => setNewTag(e.target.value)}
                    onClick={handleAddTag}
                    />
                    </div>
                    </Section>

                    <Button title='Salvar'/>
                </Form>
            </main>
        </Container>
    )
}