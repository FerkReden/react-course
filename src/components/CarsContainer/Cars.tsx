import { useEffect, useState } from "react";
import { carService } from "../../services";
import { Car } from "./Car";
import { useAppContext } from "../../hooks";
import { useSearchParams } from "react-router-dom";

const Cars = () => {

    const [cars, setCars] = useState([]);
    const [prevNext, setPrevNext] = useState({prev: null, next: null});
    //@ts-ignore
    const [query, setQuery] = useSearchParams({page: '1'})
    //@ts-ignore
    const {trigger} = useAppContext();

    useEffect(() => {
        carService.getAll(
            //@ts-ignore
            query.get('page')).then(({data}) => {
            setCars(data.items)
            setPrevNext({prev: data.prev, next: data.next})
        })
    }, [trigger, query.get('page')]);

    const prev = () => {
        setQuery(prev => {
            //@ts-ignore
            prev.set('page', `${+prev.get('page') - 1}` )
            return prev;
        })
    }

    const next = () => {
        setQuery(prev => {
            //@ts-ignore
            prev.set('page', `${+prev.get('page') + 1}` )
            return prev;
        })
    }

    return ( 
        <div>
            {cars.map(
                //@ts-ignore
                car => <Car key={car.id} car={car}/>)}
            <button disabled={!prevNext.prev} onClick={prev}>Prev</button>    
            <button  disabled={!prevNext.next} onClick={next}>Next</button>    
        </div>
    )
};

export { Cars };