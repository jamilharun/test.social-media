import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { MdDownloadForOffline } from 'react-icons/md';
import { AiTwotoneDelete } from 'react-icons/ai';
import { BeFillArrowUpRightCircleFill } from 'react-icon/bs';

import { urlFor, client } from '../client';
import { fetchUser } from '../utils/fetchUser';

const Pin = ({ pin: { postedBy, image, _id, destination, save }}) => {
    const  [postHovered, setPostHovered] = useState(false);
    const navigate = useNavigate();
    const user = fetchUser();
    const alreadySaved = !!(save?.filter((item) => item.postedBy._id === user._id))?.length
    
    const savePin = (_id) => {
        if(!alreadySaved) {
        
            client
                .patch(id)
                .setIfMissing([ save: []])
                .insert('after', 'save[-1]', [{
                    _key: uuidv4(),
                    userId: user._id,
                    postedBy: {
                        _type: 'postedBy',
                        _ref: user.userId
                    }
                    
                }])
                .commit();
                .then(() => {
                    window.location.reload();
                })  
        }
    }

    const deletePin = ((id) => {
        client 
        .delete(id)
        .then(() => {
            window.location.reload();
        })
    })

    return (
    <div className="m-2">
        <div 
            onMouseEnter={() => setPostHovered(true)}
            onMouseLeave={() => setPostHovered(false)}
            onClick={() => Navigate(`/pin-detail/${_id}`)}
            className="relative cursor-soom-in w-auto hover:shadow-lg rounded-lg overflow-hidden transition-all duration-500 ease-in-out "
        >
            <img 
                className="rounded-lg w-full"
                src={urlFor(image).width(250).url()} 
                alt="user-post"
                />
            {postHovered && (
                <div className="absolute top-0 w-full h-full flex flex-col justify-between p-1 pr-2 pt-2 pb-2 z-50"
                    style={{ height: '100%'}}
                >
                    <div className="flex item-center justify-between">
                        <div className="flex gap-2">
                            <a href={`${image?.asset?.url}?dl=`}
                                download
                                onClick={(e) => e.stopPropagation()}
                                className="bg-white w-9 h-9 rounded-full flex items-center justify-center text-dark text-x1 opacity-75 hover:opacity-100 hover:shadow-md outline-none"
                            >
                                <MdDownloadForOffline />
                            </a>
                        </div>
                        {alreadySaved?.length !== 0 ? (
                            <button type="button" className="bg-red-500">
                                {save?.length} Saved
                            </button>
                        ): (
                            <button 
                                onclick={(e) => {
                                    e.stopPropagation();
                                    savePin(_id);
                                }}
                            type="button" className="bg-red-500 opacity-70 hover:opacity-100 text-white font-bold px-5 py-1 text-base rounded-3xl">
                                Save
                            </button>
                        )}
                    </div>
                    <div className="flex justify-between items-center gap-2 w-full">
                        {
                            destination && (
                                <a 
                                    href={destination}
                                    target="_blank"
                                    rel="noregerrer"
                                    className="bg-white flex items-center gap-2 text-black font-bold p-2 pl-4 pr-4 rounded-full opacity-70 hover:100 hover:shadow-md"
                                >
                                    <BsFillArrowUpRightCircleLeftFill />
                                    {destination.length > 20 ? destination.slice(8, 20) : destination.slice(8)}
                                </a>
                            )}
                            {postedBy?._id === user.userId && (
                                <button
                                    type="button"
                                    onclick={(e) => {
                                        e.stopPropagation();
                                        daletePin(_id);
                                    }}
                                    className="bg-white p-2 opacity-70 hover:opacity-100 text-white font-bold text-dark text-base rounded-3xl"
                                >
                                    <AiTwotoneDelete/>
                                </button>
                            )}
                    </div>
                </div>
            )}
        </div>
        <Link to={`user-profile/${user?._id}`} >
            <img 
                className="w-8 h-8 rounded-full object-cover"
                src={postedBy?.image} alt="User-profile" 
            />
            <p className="font-semibold capitalize">{postedBy?.userName}</p>
        </Link>
    </div>
    )
}
export default Pin

