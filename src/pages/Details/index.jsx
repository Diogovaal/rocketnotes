import { Container, Links, Content } from "./style.js"
import { Header } from "../../components/header"
import { Button } from "../../components/button"
import { ButtonText } from "../../components/buttontext/index.jsx"
import { Section } from "../../components/section"
import { Tag } from "../../components/tags/index.jsx"

export function Details(){

  return(
  <Container>
    <Header/>

    <main>
      <Content>

      
    <ButtonText title='Excluir nota'/>

    <h1>Introdução ao React</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit doloribus aspernatur officiis praesentium! Nam excepturi, laborum eveniet autem explicabo sed at sit velit, provident dolores impedit deserunt distinctio, ut quam?</p>

    <Section title="Links úteis">
      <Links>
        <li> <a href="#">rocketseat.com</a> </li>
        <li> <a href="#">rocketseat.com</a></li>
       
      </Links>
      </Section>

      <Section title = "Marcadores">
        <Tag title="express"/>
        <Tag title="node"/>
      </Section>

    <Button title='Voltar'/>

    </Content>
      </main>

  </Container>  
  )
}