import styled from 'styled-components';

export default function Header(){


    return(
        <HeaderStyle>
            <h1>CINEFLEX</h1>
        </HeaderStyle>
    )

}

const HeaderStyle =  styled.header`

position: fixed;
height: 80px;
top: 0;
left: 0;
right: 0;
background-color: black;
z-index: 2;
display: flex;
align-items: center;
justify-content: center;

h1{
    color: #E8833A;
    font-size: 34px;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
}


`

