import { useState, useEffect } from "react"

const Hooks = () => {
    
        useEffect(()=>{
            console.log('testandooo')
        })
    let idade = 30
    const [novaIdade, setNovaIdade] = useState(40)

    const changeAge = () => {
        idade = idade +1
        console.log(idade)
    }

    const changeNewAge = () =>{
        setNovaIdade(novaIdade +1)
    }

    return (
        <div>
            <p>idade = {idade}</p>
            <button onClick={changeAge}>Mudar idade</button>
            <p>nova idade = {novaIdade} </p> 
            <button onClick={changeNewAge}>Mudar idade</button>
        </div>
    )
}

console.log('idade')

export default Hooks