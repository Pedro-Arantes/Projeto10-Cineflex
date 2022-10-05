import styled from 'styled-components';
import Assentos from './Assentos';
import React from "react"
import Footer from './Footer';
import { Link } from 'react-router-dom';

export default function AssentoPage() {
    let array = []

    

    const CriaArray = () => {
        for (let i = 1; i < 51; i++) {
            array.push(i)

        }
    }
    CriaArray();

    return (
        <MainStyle>
            <AssentoStyle>
                <h2>Selecione o(s) assento(s)</h2>
                <div>
                <ListaBtnStyle>
                    {array.map((item, i) => <Assentos key={i} num={item} />)}
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

                <FormStyle>
                    <div>
                        <label>Nome do comprador:</label>
                        <input placeholder="Digite seu nome..." ></input>
                    </div>

                    <div>
                        <label>CPF do comprador:</label>
                        <input placeholder="Digite seu CPF..." ></input>
                    </div>
                </FormStyle>

                <BtnDivReser>
                    <Link to="/final">
                    <button>Reservar assento(s)</button>
                    </Link>
                    
                </BtnDivReser>
                </div>
                
            </AssentoStyle>
            <Footer />
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


background-color: rgb(86,86,96);

margin-top: 80px;
margin-bottom: 117px;
display: flex;
flex-wrap: wrap;
justify-content: center;






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
background-color: #1AAE9E;
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