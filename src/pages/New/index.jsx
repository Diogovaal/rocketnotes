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

    function handleAddLink(){
        setLinks(prevState => [...prevState, newLink] )
        setNewLink("")
    }

    function handleRemoveLink(){
        
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
                        onClick={()=>{}}
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
                    <NoteItem value='react' />
                    <NoteItem isNew placeholder='Nova tags' />
                    </div>
                    </Section>

                    <Button title='Salvar'/>
                </Form>
            </main>
        </Container>
    )
}