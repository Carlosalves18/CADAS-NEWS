import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cadas from "./Cadastro/Cadas"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cadas/>
  </StrictMode>,
)
