import { Link } from "react-router-dom";


export default function Films({link,ident}) {
//console.log(link)

    return (
        <Link to={"/sessoes/"+ident}>
            <figure data-identifier="movie-outdoor">
            <img alt="" src={link}/>
            </figure>
        </Link>
        
    )
}