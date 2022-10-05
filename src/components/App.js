import Header from "./Header";
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import IndexPage from "./IndexPage";
import SessoesPage from "./SessoesPage";
import AssentoPage from "./AssentoPage";
import FinalPage from "./FinalPage";
import React from "react"



export default function App(){

    const [dados,setDados] = React.useState('')
    


    return(
        <BrowserRouter>
            <GlobalStyle/>
            <Header/>
            <Routes>
                <Route path="/" element={<IndexPage/>}/>
                <Route path="/sessoes/:idFilme" element={<SessoesPage/>}/>
                <Route path="/assentos/:idSessao" element={<AssentoPage func={setDados}/>}/>
                <Route path="/sucesso" element={<FinalPage dados={dados}/>}/>
            </Routes>
        </BrowserRouter>
       
    )
}


