import { Container, Links, Content } from "./style.js"
import { useParams, useNavigate} from "react-router-dom"
import { useState, useEffect } from "react"


import { Header } from "../../components/header"
import { Button } from "../../components/button"
import { ButtonText } from "../../components/buttontext/index.jsx"
import { Section } from "../../components/section"
import { Tag } from "../../components/tags/index.jsx"
import { api } from "../../services/api.js"

export function Details(){
  const [data, setData] = useState(null)

const params = useParams()
const navigate = useNavigate()

function handleBack(){
  navigate('/')
}

async function handleRemove(){
 const confirm = window.confirm('Deseja realmente excluir essa nota?')
 if(confirm) {
  await api.delete(`/notes/${params.id}`)
  navigate('/')
 }
 
}

useEffect(() => { 
  async function fetchNote(){
    const response = await api.get(`/notes/${params.id}`) 
    setData(response.data)
  }
  fetchNote()
}, [])

  return(
  <Container>
    <Header/>
{
  data &&
    <main>
      <Content>

      
    <ButtonText title='Excluir nota'
    onClick={handleRemove}  
    />

    <h1>{data.title}</h1>
    <p>{data.descriptions}</p>

    {

    data.Links && 
    <Section title="Links úteis">
      <Links>  
       {
        data.links.map(link => (
          <li key={String(link.id)}> 
            <a href={link.url}
            target="_blank">
            {link.url}
            </a>
             </li>
        ))
       }
       
      </Links>
      </Section>
}

{
      data.tags &&
      <Section title = "Marcadores">
        {
          data.tags.map(tag => (
          <Tag 
          key={String(tag.id)}
          title={tag.name}
          
          />
          ))
        }

        
      </Section>

}
    <Button
     title='Voltar'
     onClick={handleBack}
     />

    </Content>
      </main>

}


  </Container>  
  )
}