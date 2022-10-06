import styled from 'styled-components';
import Assentos from './Assentos';
import React from "react"
import Footer from './Footer';
import { useParams } from 'react-router-dom';
import axios from "axios";
import { Link,useNavigate } from 'react-router-dom';

export default function AssentoPage({func}) {
    const navigate = useNavigate();
    let p = useParams()
    p = p.idSessao
    const[assentos,setAssento] = React.useState([])
    const[assentSelec,setAssent] = React.useState([])
    const[assentId,setAssentId] = React.useState([])
    const[dataSeat,setDtSeat] = React.useState("")
    const[nome,setNome] = React.useState("")
    const[cpf,setCPF] = React.useState("")
    
    const selectSeat = (state,seat,id) =>{
        if (state) {
            const arr = [...assentSelec,seat]
            const arr2 = [...assentId,id]
            //console.log(arr)
            //console.log(arr2)
            setAssent(arr)
            setAssentId(arr2)
        }else{
            const arr = assentSelec.filter((item)=>item !== seat)
            const arr2 = assentId.filter((item)=>item !== id)
            //console.log(arr)
            //console.log(arr2)
            setAssent(arr)
            setAssentId(arr2)
        }
    }

    const FinalizaPedido = () =>{

        const tratarSucesso = (resposta) =>{
            console.log(resposta)
            
            
        }
        const obj = {
            ids: assentId,
            name: nome,
            cpf: cpf
        }
        const obj2 ={
            assent: assentSelec,
            name: nome,
            cpf: cpf,
            title: dataSeat.movie.title,
            dia: dataSeat.day.date,
            hora: dataSeat.day.weekday
        }
        func(obj2)
        
        console.log(obj)
        //React.useEffect(()=>{},[])
        const requisicao = axios.post('https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many', obj);
        requisicao.then(tratarSucesso)
    }

    React.useEffect(()=>{
    
        const  processarResposta = (resposta) => {
            console.log(resposta.data);
            //console.log(resposta.data.movie.title);
            setAssento(resposta.data.seats)
            setDtSeat(resposta.data)
        }
        const url = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${p}/seats`
        const promessa = axios.get(url);
        promessa.then(processarResposta);
    },[p])

    const submit = (e)=>{
        FinalizaPedido()
        e.preventDefault();
        navigate("/sucesso")
    }


return (
    <MainStyle>
        <AssentoStyle>
            <h2>Selecione o(s) assento(s)</h2>
            <div>
                <ListaBtnStyle>
                    {assentos.map((item, i) => <Assentos func = {selectSeat}key={i} item={item}num={item.name} />)}
                </ListaBtnStyle>
                <LegendaStyle>
                    <div>
                        <BtnSelec></BtnSelec>
                        <h5>Selecionado</h5>
                    </div>
                    <div>
                        <BtnDispo></BtnDispo>
                        <h5>Disponível</h5>
                    </div>
                    <div>
                        <BtnIndispo></BtnIndispo>
                        <h5>Indisponível</h5>
                    </div>
                </LegendaStyle>

                <FormStyle  onSubmit={submit} name="form">
                    <div>
                        <label>Nome do comprador:</label>
                        <input required value={nome} onChange={e=> setNome(e.target.value)} placeholder="Digite seu nome..." ></input>
                    </div>

                    <div>
                        <label>CPF do comprador:</label>
                        <input  pattern="\d{3}.?\d{3}.?\d{3}-?\d{2}"  required value={cpf} onChange={e => setCPF(e.target.value)} placeholder="Digite seu CPF..." ></input>
                    </div>
                    <BtnDivReser>
                        <button type="submit"     >Reservar assento(s)</button>
                </BtnDivReser>
                    
                </FormStyle>
                
                
            </div>

        </AssentoStyle>
        <Footer  title={dataSeat === "" ?  "": dataSeat.movie.title}  url={dataSeat === "" ?  "": dataSeat.movie.posterURL}dia={dataSeat === "" ?  "": dataSeat.day.weekday } hora={dataSeat === "" ?  "": dataSeat.name }/>
    </MainStyle>

)
}

const MainStyle = styled.main`
display: flex;

width: 100%;
height: 100%;
`

const AssentoStyle = styled.section`
height: 680px;
width: 100%;

background-color: rgb(86,86,96);

margin-top: 80px;
margin-bottom: 117px;
display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: center;
align-items: center;






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
const ListaBtnStyle = styled.div`

display: flex;
flex-wrap: wrap;
gap: 10px;
width: 355px;




align-items: center;
justify-content: center;

`
const LegendaStyle = styled.div`

margin-top: 15px;
display: flex;
gap: 30px;
align-items: center;
justify-content: center;

color: lightgray;

div{
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;
}


button{
    width: 26px;
    height: 26px;
    border-radius: 12px;
    border-style: none;
}
`
const BtnSelec = styled.button`
background-color: #ffff00;
`

const BtnDispo = styled.button`
background-color:white;
`
const BtnIndispo = styled.button`
background-color:#d71001;
`
const FormStyle = styled.form`

margin-top: 40px;
display: flex;
gap: 10px;
flex-direction: column;

div{
    display: flex;
    flex-direction: column;
}
label{
    font-size: 18px;
    color: white;
}
input{
    border-radius: 3px;
    border-style: none;
    height: 51px;


    background-color: lightgray;

    font-size: 18px;
    ::placeholder{
        padding: 15px;
        font-style: italic;
    }
}

`
const BtnDivReser = styled.div`

display: flex;
align-items: center;
justify-content: center;

margin-top: 60px;

button{
    width: 225px;
    height: 42px;

    background-color: #E8833A;
    border-style: none;
    border-radius: 3px;

    color: white;
    font-size: 18px;
}

`
