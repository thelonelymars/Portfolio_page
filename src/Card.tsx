import './Card.css'
export default function Card(props: { HeaderText: string| undefined, url: string | undefined, MainText:string|undefined } ){
    return(
        <div className='Card_default_position'>
            <img className='CardImg' src={props.url} alt="" />
            <h3 className='Cardtxt'>{props.HeaderText}</h3>
            <p className='Cardtxt'>{props.MainText}</p>
        </div>

    )
}