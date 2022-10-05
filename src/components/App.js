import Header from "./Header";
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import IndexPage from "./IndexPage";
import SessoesPage from "./SessoesPage";
import AssentoPage from "./AssentoPage";
import FinalPage from "./FinalPage";



export default function App(){



    return(
        <BrowserRouter>
            <GlobalStyle/>
            <Header/>
            <Routes>
                <Route path="/" element={<IndexPage/>}/>
                <Route path="/sessoes/:idFilme" element={<SessoesPage/>}/>
                <Route path="/assentos/:idSessao" element={<AssentoPage/>}/>
                <Route path="/sucesso" element={<FinalPage/>}/>
            </Routes>
        </BrowserRouter>
       
    )
}


