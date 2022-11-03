import { useState,useEffect, useMemo,useCallback } from "react";

const Teste = () => {

    const [name, setName] = useState('igor');

    const [age, setIdade] = useState(23);

    const handleChangeName = () =>{
        setName(prev => prev ==='igor'? 'jose':'igor') // prev pega o valor atual, se for igual a 'igor' vira 'jose' e vice versa.
        //Conseguimos fazer uma logica para as mudanças
    }

    const handleChangeAge = useCallback(() =>{
        const newAge = 10*age;

        console.log('age atual', age, newAge);

        setIdade(prev => prev ==='23'? '32':'23') 

    },[age]) 


    useEffect(()=>{
        handleChangeName();
    },[]);
    // recebe a função que é acionada ao renderizar o componente 


    const calculo = useMemo(() => {
        return 10*26589
    },[]);// salva esse valor para que nao há necessidade de calculada e renderizada dnv



    return(
        <div>
            <p>
                nome :{name}<br/>
                idade : {age}<br/>
            </p>
            <button onClick={handleChangeName}>
                Alterar nome
            </button><br/>

            <button onClick={handleChangeAge}>
                Alterar idade
            </button>
        </div>
    )
}

export{Teste};