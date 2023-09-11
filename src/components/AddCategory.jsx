import { useState } from "react"


export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target}) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if ( inputValue.trim().length <=1) return;// para que no se inserte un solo caracter

        onNewCategory(inputValue.trim());

        setInputValue('');// resetea el input cuando termina de buscar
    }

  return (
    
    <form onSubmit={onSubmit}> 
        
        <input 
            type="text"
            placeholder="Buscar gifs"
            value={inputValue}
            onChange={onInputChange}/>

        <button onClick={onSubmit}>Buscar</button>

    </form>
  )
}
