import styled from 'styled-components';

export default function Assentos({num}){


    return(

        <BtnStyle>
            {num<10 ? "0"+num:num}
        </BtnStyle>
    )
}

const BtnStyle = styled.button`
display: flex;
align-items: center;
width: 26px;
height: 26px;
border-radius: 12px;
border-style: none;
`