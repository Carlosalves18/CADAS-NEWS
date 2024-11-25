import Cadastro from "../models/CadastroModel.js"
import { z } from "zod"
import { where } from "sequelize"

const Schema = z.object({
    nome: z.string({
        required_error: "O nome é obrigatorio"
    }),
    email: z.string({
        required_error: "O email é obrigatorio"
    }),
    senha: z.string({
        required_error: "A senha é obrigatorio"
    })
})

export const create = async (req, res) => {
    const Validacao = Schema.safeParse(req.body)
    
    if(!Validacao.success){
        res.status(400).json(Validacao.error)
        return
    }

    const {nome} = Validacao.data
    const {email} = Validacao.data
    const {senha} = Validacao.data

    const cadastro = {
        nome,
        email,
        senha
    }

    try {
        const criarCadastro = await Cadastro.create(cadastro)
        res.status(201).json(criarCadastro)
    } catch (error) {
        console.error(error)
        res.status(500).json({ Err: "Erro ao fazer cadastro" })
    }
}
