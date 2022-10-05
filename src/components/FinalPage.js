import { Link } from 'react-router-dom';
import styled from 'styled-components';



export default function FinalPage(){


    return(
        <MainStyle>
        <FinalStyle>
                <h2>Pedido feito<br />
                    com sucesso!</h2>
                <ListaPedido>
                    <div>
                        <h3>Filme e sessão</h3>
                        <p>Enola Holmes<br />
                            24/06/2021 15:00</p>
                    </div>
                    <div>
                        <h3>Ingressos</h3>
                        <p>Assento 15<br />
                            Assento 16</p>
                    </div>
                    <div>
                        <h3>Comprador</h3>
                        <p>Nome: João da Silva Sauro<br />
                            CPF: 123.456.789-10</p>
                    </div>
                </ListaPedido>

                <BtnDivReser>
                    <Link to="/">
                    <button>Voltar pra Home</button>
                    </Link>
                    
                </BtnDivReser>

            </FinalStyle>
            
        </MainStyle>
        
    )
}

const MainStyle = styled.main`
display: flex;
margin-top: 80px;
background-color: rgb(86,86,96);
width: 100%;
height: 620px;
`

const FinalStyle = styled.section`

display: flex;
flex-direction: column;
align-items: center;




width: 100%;


h2{
    display: flex;
    align-items: center;
    justify-content: center;

    color: green;
    height: 110px;
    font-size: 24px;
    font-weight: 600;
}

`
const ListaPedido = styled.div`
display: flex;
flex-direction: column;
gap: 40px;


color: white;

h3{
    font-size: 24px;
}
p{
    font-size: 22px;
}
div{
    display: flex;
    flex-direction: column;
    gap: 15px;
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
