import { Container, Brand, Menu, Search, Content, NewNote } from "./styles"; 
import { FiPlus } from "react-icons/fi";

import { Input } from '../../components/input'
import { Header } from '../../components/header'
import { ButtonText } from '../../components/buttontext'

import { Section } from '../../components/section'
import { Note } from '../../components/note'

export function Home(){
    return(

        <Container>
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>
            <Header />

            <Menu>

               <li><ButtonText title ='Todos' isActive/></li> 
               <li><ButtonText title ='React'/></li> 
               <li><ButtonText title ='Node'/></li> 
              
            </Menu>

            <Search>
                <Input placeholder="Pesquisar pelo titulo"/>

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