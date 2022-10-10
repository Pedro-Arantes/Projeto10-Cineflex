import styled from 'styled-components';
import React from "react"
import Footer from './Footer';
import axios from "axios";
import { useParams } from 'react-router-dom';
import Dias from './Dias';

export default function SessoesPage() {



const [days,setDay]= React.useState([])
const [data,setData]= React.useState([])

let p = useParams()
p = p.idFilme
React.useEffect(()=>{
    
    const  processarResposta = (resposta) => {
        
        setData(resposta.data)
        setDay(resposta.data.days)
    }
    const processaErro = (erro) =>{
        alert(erro.response.data)
    }
    const url = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${p}/showtimes`
    const promessa = axios.get(url);
    promessa.then(processarResposta);
    promessa.catch(processaErro);
},[p])

    return (
        <>
            <HorarioStyle>
                <h2>Selecione o Horário</h2>
                <ListaHorarios>
                    {days.map((item,i)=> <Dias key = {i} days={item}/> )}
                </ListaHorarios>
            </HorarioStyle>
            <Footer title={data.title} url={data.posterURL} dia={''} hora={''}/>
        </>

    )
}

const HorarioStyle = styled.section`
    height: 100%;
    width: 100%;
   
    background-color: rgb(86,86,96);

    margin-top: 80px;
    margin-bottom: 117px;
    
    display: flex;
    flex-direction: column;
    
  

    
    

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
const ListaHorarios = styled.div`

display: flex;
flex-direction: column;
margin-left: 20px;
`

