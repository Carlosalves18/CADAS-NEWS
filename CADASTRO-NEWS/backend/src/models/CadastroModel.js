import { DataTypes } from "sequelize"
import conn from "../config/conn.js"

const Cadastro = conn.define('cadastro', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        validate: {
            isUUID: 4,
        }
    }, 
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.TEXT
    },
    senha: {
        type: DataTypes.TEXT
    }
}, 
{
    tableName: "cadastro"
})

export default Cadastro