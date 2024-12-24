import { useState } from "react";
import { Container, Form, Background } from "./styles";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import {Link, useNavigate} from 'react-router-dom'

import {api} from "../../services/api"

import { Input } from '../../components/input'
import { Button } from '../../components/button'


export function SignUp(){
    const [name, setName ]= useState("")
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")

    const navigate = useNavigate()

    function handleSignup() {
        if(!name||!email||!password){
           return alert("Preencha todos os campos")
        }

        api.post("/users", {name, email, password})
        .then(()=>{alert("usuário cadastrado com sucesso")
            navigate("/")
        })
        .catch(error=>{
            if(error.response){
                alert(error.response.data.message)
            }else{
                alert("Não foi possível cadastrar")
            }
        })
    }

    return(

        <Container>

            <Background/>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar links</p>

                <h2>Crie a sua conta</h2>

                <Input 
                placeholder ="Nome"
                type="text"
                icon={FiUser}
                onChange={e => setName(e.target.value)}
                />

                <Input 
                placeholder ="email"
                type="text"
                icon={FiMail}
                onChange={e => setEmail(e.target.value)}
                />

                <Input 
                placeholder ="senha"
                type="password"
                icon={FiLock}
                onChange={e => setPassword(e.target.value)}
                />

                <Button title="Cadastrar" onClick ={handleSignup} />

                    <Link to='/'>Voltar para o Login</Link>
                    
                

                
            </Form>
            

        </Container>
    )
}