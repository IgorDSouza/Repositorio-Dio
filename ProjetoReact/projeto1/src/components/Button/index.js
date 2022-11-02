export default function Button//nome do componente
(props){//propriedade do componente 

const{title} = props; // das propriedades, pegamos o titulo (o nome da var deve ser o mesmo contido na props)
    return(
        <button>{title}</button>
    )
}
