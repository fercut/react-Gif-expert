import { GifItem } from "./gifItem";
import {useFetchGifs} from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchGifs(category);

    

    return(
        <>
            <h1>{category}</h1>

            {
                isLoading && (<h4>Cargando...</h4>) // esto equivale a un if(isLoading == true)
            }

            <div className="card-grid">
                {
                    images.map( (image) => (
                        <GifItem 
                            key={image.id}
                            {...image}
                        />
                    ))
                }
            </div>
        </>
    )
}