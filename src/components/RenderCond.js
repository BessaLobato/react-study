const RenderCond = ({ x, y }) => {
        
    return (<div>
        {x > 5 && <p>X é maior que 5</p>}
        {x > 5 ? <p>X é um número alto</p> : <p>X é um numero baixo</p>} 
        {console.log(y)}
    </div>
    )
}

export default RenderCond