import styled from 'styled-components';
import Assentos from './Assentos';

export default function Main() {
    let array = []
    const CriaArray = () => {
        for (let i = 1; i < 51; i++) {
            array.push(i)

        }
    }
    CriaArray();
    console.log(array)

    return (
        <MainStyled>
            <IndexStyle>
                <h2>Selecione  o Filme</h2>
                <ListaFilmes>
                    <figure>
                        <img src="https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg"></img>
                    </figure>

                    <figure>
                        <img src="https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg"></img>
                    </figure>
                    <figure>
                        <img src="https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg"></img>
                    </figure>
                    <figure>
                        <img src="https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg"></img>
                    </figure>
                </ListaFilmes>
            </IndexStyle>
            <HorarioStyle>

                <h2>Selecione o Horário</h2>
                <ListaHorarios>
                    <DiaDivStyle>
                        <h4>Quinta-Feira-24/06/2021</h4>
                        <div>
                            <button>15:00</button>
                            <button>19:00</button>
                        </div>
                    </DiaDivStyle>
                    <DiaDivStyle>
                        <h4>Quinta-Feira-24/06/2021</h4>
                        <div>
                            <button>15:00</button>
                            <button>19:00</button>
                        </div>
                    </DiaDivStyle>
                </ListaHorarios>
            </HorarioStyle>

            <AssentoStyle>
                <h2>Selecione o(s) assento(s)</h2>
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
                    <button>Reservar assento(s)</button>
                </BtnDivReser>
            </AssentoStyle>
            <FinalStyle>
                <h2>Pedido feito<br/>
                    com sucesso!</h2>
                <ListaPedido>
                    <div>
                        <h3>Filme e sessão</h3>
                        <p>Enola Holmes<br/>
                            24/06/2021 15:00</p>
                    </div>
                    <div>
                        <h3>Ingressos</h3>
                        <p>Assento 15<br/>
                            Assento 16</p>
                    </div>
                    <div>
                        <h3>Comprador</h3>
                        <p>Nome: João da Silva Sauro<br/>
                            CPF: 123.456.789-10</p>
                    </div>
                </ListaPedido>

            </FinalStyle>

        </MainStyled>
    )
}

const MainStyled = styled.main`

    background-color: rgb(86,86,96);

    margin-top: 80px;
    margin-bottom: 117px;
    display: flex;
    
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

const IndexStyle = styled.section`
display: none;

`
const HorarioStyle = styled.section`

display: none;
`
const AssentoStyle = styled.section`
display: none;
`
const FinalStyle = styled.section`

h2{
    color: green;
}
`
const ListaHorarios = styled.div`

display: flex;
flex-direction: column;
margin-right: 100px;
`

const DiaDivStyle = styled.div`

display: flex;
flex-direction: column;
gap: 20px;
margin-bottom: 25px;
h4{
    color: white;
    font-size: 20px;
}
button{
    background-color: #E8833A;
    border-style: none;
    border-radius: 3px;

    width: 83px;
    height: 43px;
    font-size: 18px;
    color: white;
}
div{
    display: flex;
    
    gap: 10px;
}

`

const ListaFilmes = styled.div`

display: flex;
justify-content: center;
flex-wrap: wrap;

gap: 40px;

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
