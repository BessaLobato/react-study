const AnotherComponent = () => {
    const handleClick = () =>
    alert("clicou no botão")
    return(
    <div>
        
        <p> Segundo Componente</p>
        <button onClick={handleClick}>Evento de Clique</button>
        <hr />
        <button onClick={() => console.log("teste")}>Evento de elemento</button> 
    </div>
)
}
export default AnotherComponent