import AnotherComponent from "./AnotherComponent"



function FirstComponent() {
    return (
        <div>
            <p>
                Primeiro Componente
                {<AnotherComponent />}
            </p>
        </div>
    )
}

export default FirstComponent