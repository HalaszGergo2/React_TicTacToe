import Mezo from "./Mezo"

export default function Jatekter(props){
    return(
        <div>
                {
            props.LISTA.map((elem, index)=>{
                return(<Mezo elem={elem} key={index}/>)
            })  
    }
        </div>
    )
}