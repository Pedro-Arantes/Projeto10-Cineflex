import styled from 'styled-components';
import React from "react"

export default function Assentos({ num, item, func }) {
    let color1 = "white"
    const [color, setColor] = React.useState("")

    const VerifySeat = () => item.isAvailable === false ? color1 = "#d71001" : color1 = "white";
    VerifySeat()

    const ChooseSeat = () => {

        if (item.isAvailable && (color === "" || color === "white")) {
            setColor("#1AAE9E")
            func(true, num,item.id)
        } else if (color === "#1AAE9E") {
            setColor("white")
            func(false, num,item.id)
        }
        else {
            setColor("#d71001")
            alert("Esse assento não está disponível")
        }
    }

    return (

        <BtnStyle onClick={ChooseSeat} color={color} state={color1}>
            {num < 10 ? "0" + num : num}
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
background-color:${props => props.color === "" ? props.state : props.color};
`