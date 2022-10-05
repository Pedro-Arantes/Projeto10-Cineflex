import styled from 'styled-components';
import axios from "axios";
import React from "react"
import Films from './Films';

export default function  IndexPage(){
    
    const [filmes, setFilmes] = React.useState([])

    React.useEffect(()=>{
        const  processarResposta = (resposta) => {
            //console.log(resposta.data);
            setFilmes(resposta.data)
        }
        const promessa = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies');
        promessa.then(processarResposta);
    },[])

    return(
            <IndexStyle>
                <h2>Selecione  o Filme</h2>
                <ListaFilmes>
                    {filmes.map((item,i)=><Films  ident = {item.id} key = {i}link={item.posterURL}/>)}
                </ListaFilmes>
            </IndexStyle>
    )
}

const IndexStyle = styled.section`

    background-color: rgb(86,86,96);

    margin-top: 80px;
    
    display: flex;
    flex-direction: column;
    
    justify-content: center;

    height: 100%;
    width: 100%;
    

    h2{
        display: flex;
        align-items: center;
        justify-content: center;

        color: white;
        height: 110px;
        font-size: 24px;
        font-weight: 600;
    }
`

const ListaFilmes = styled.div`

display: flex;
justify-content: center;
flex-wrap: wrap;

gap: 40px;

figure{
    cursor: pointer;
}

figure{

    width: 140px;
    height: 200px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgb(85,85,95);

    border-radius: 3px;

    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
}

img{
    width: 129px;
    height: 193px;
}

`