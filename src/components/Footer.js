import styled from 'styled-components';

export default function Footer() {

    return (

        <FooterStyled>
            <figure>
                <img src="https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg"></img>
            </figure>
            <div>
                <h3>2067</h3>
                <h3>Quinta-feira - 15:00</h3>
            </div>

        </FooterStyled>
    )

}

const FooterStyled = styled.footer`

position: fixed;
bottom: 0;



height: 117px;
width: 100%;



background-color: #9EADBA;

display: flex;
gap: 20px;
align-items: center;
justify-content: start;

box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);


img{
    width: 48px;
    height: 72px;
}
figure{
    width: 65px;
    height: 90px;

    margin-left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgb(85,85,95);

    border-radius: 3px;

    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
}

h3{
    font-size: 26px;
    font-weight: 500;
    color: #293845;
}
`