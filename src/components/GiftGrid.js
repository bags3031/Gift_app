import React from 'react';
import { useFechGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

export const GiftGrid = ({ category }) => {


    const { data:images , loading } = useFechGifs( category );

    return (
        <>
            <h3>{category}</h3>
            {loading && <p className='card animate__animated animate__flash'>Loading...</p>}
            <div className='card-grid'>
                {
                    images.map((img) => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}