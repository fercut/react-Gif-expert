import { useState } from 'react'
import { AddCategory,GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (onNewCategory) => {
        
        //evita insertar dos busquedas iguales y que falle el listado gif con la key
        if(categories.includes(onNewCategory)) return;

        //categories.push(inputText);  evitar mutar el estado
        setCategories([onNewCategory, ...categories])
    }
    

    return (
        <>
            {/*titulo*/}
            <h1>GifExpertApp</h1>

            {/*imput*/}
            <AddCategory 
                // onAddCategory={setCategories}
                onNewCategory={onAddCategory}
            />

            {/*Listado de gif*/}
            
                {
                    categories.map( (category) => ( //variable creada como en bucle for echa (category)

                        <GifGrid 
                            key={category}
                            category={category} 
                        />
                    ))
                }
        
                {/*tXfSgxev4JZKIgFldWOm1KozGJ6fplbp*/}

        </>
    )
}