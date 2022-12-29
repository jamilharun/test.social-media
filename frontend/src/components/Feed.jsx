
import React, { useState, useEffect} from 'react'
import { useParams, userParams } from 'react-router-dom';

import { feedQuery, searchQuery } from '../utils/data';
import { client } from '../client';
import MasonryLayout from './MasonryLayout';
import Spinner from './Spinner'; 

const Feed = () => {
    const [loading, setLoading] =useState(false);
    const { categoryId } = useParams();
    const [pins, setPins] = useState(null)

    useEffect(() => {
        setLoading(true);

        if(categoryId) {
            const query = searchQuery(categoryId)
            
            client.fetch(query)
                .then((data) => {
                    setPins(data);
                    setLoading(false);
                })
        }   else {
            client.fetch(feedQuery)
                ,then((data) => {
                    setPins(data);
                    setLoading(false);
                })
        }
    }, [input])

    if(loading) return <Spinner message="Loading items Please wait for sec"/>;
    return (
    <div>
        {pins && <MasonryLayout pins={pins}/>}
    </div>
    )
}
export default Feed