
import trollFace from'../img/trollFace.png'


export default function Header(){
    return(
        <header className="header">

            <img src={trollFace} className="header--image" />
            <h2 className='header--title'>Meme Generator</h2>
            <h3 className='header--project'>Let's keep it funny</h3>
        
        </header>
    )
}