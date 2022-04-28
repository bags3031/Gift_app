import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFechGifs = (category) => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifs(category)
            .then((imgs) => {
                setstate({
                    data: imgs,
                    loading: false
                });
            });
    }, [])

    return state; // { data:[], loading: true };
}