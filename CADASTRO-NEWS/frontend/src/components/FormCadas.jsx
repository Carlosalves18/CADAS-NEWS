import React from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'

const CadasForm = () => {

    const [nome, setnome] = React.useState("")
    const [email, setemail] = React.useState("")
    const [senha, setsenha] = React.useState("")
    const [message, setMessage] = React.useState("")
    const [loading, setLoading] = React.useState("")

    const handlePost = async (event) => {

      event.preventDefault();

        setLoading("Carregando...")

        try {
            await axios.post("http://localhost:3333/api/cadastro", {
                nome, 
                email,
                senha,

            })
            setMessage("Você esta Cadastrado!")
            setnome('')
            setemail('')
            setsenha('')
        } catch (error) {
            setMessage("Não foi possível se cadastra")
            console.error(error)
        }
    }

  return (
    <Form onSubmit={handlePost}>
      <Form.Group className="mb-3" controlId='nome'>
        <Form.Label>Nome</Form.Label>
        <Form.Control 
            type="text" 
            placeholder="Digite seu nome aqui" 
            value={nome}
            onChange={(e) => setnome(e.target.value)}
            required />
      </Form.Group>

      <Form.Group className="mb-3" controlId='email'>
        <Form.Label>Email:</Form.Label>
        <Form.Control 
            type="email" 
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            />
      </Form.Group>

      <Form.Group className="mb-3" controlId='senha'>
        <Form.Label>Senha:</Form.Label>
        <Form.Control 
            type="password" 
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setsenha(e.target.value)}
            />
      </Form.Group>

     <Button type="submit">
        CADASTRAR
      </Button>
      {message ? <p>{message}</p> : <p>{loading}</p>}
    </Form>
  )
}

export default CadasForm;