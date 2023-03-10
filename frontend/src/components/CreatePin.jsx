import React, { useState} from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import { isRouteErrorResponse, useNavigate } from 'react-router-dom';

import { client } from '../client';
import { categories } from '../utils/data';
import Spinner from './Spinner';

// cetegories like name: sport, anime, environment, etc

const CreatePin = ({ user}) => {
  const [title, setTitle] = useState('');
  const [about, setAbout] = useState('');
  const [destination, setDestination] = useState('');
  const [loading, setLoading] = useState(false);
  const [fields, setFields] = useState(false);
  const [category, setCategory] = useState(null);
  const [imageAsset, setImageAsset] = useState(null);
  const [wrongImageType, setWrongImageType] = useState(null)

  const navigate = useNavigate();

  const uploadImage = (e) => {
    const { type } = e.target.file[0];

    if(type === 'image/png' || 
    type == 'image/svg' || 
    type === 'image/jpeg' || 
    type === 'image/gif' || 
    type === 'image/tiff') {
      setWrongImageType(false);
      setLoading(true);

      client.assets
      .upload('image', e.target.files[0], { contentType: type, filename: name})
      .then((document) => {
        setImageAsset(document);
        setLoading(false);
      })
      .catch((error) => {
        console.log('Image upload error ', error)
      })
    } else {
      setWrongImageType(true)
    }
  }

  return (
    <div className="flex flex-col justify-center items-center mt-5 lg:h-4/5">
      {fields && (
        <p className="text-red-500 mb-5 text-xl transition-all duration-150 ease-in"> please fill all the fields.

        </p>
      )}
      <div className="flex lg:flex-row flex-col justify-center items-center bg-white lg:p-5 p-3 lg:w-4/5 w-full">
        <div className="bg-secordarycolor p-3 flex flex-0.7">
          <div className="flex justify-center flex-col border-2 border-dotted borger-gray-300 p-3 w-full h-420">
            {loading && <Spinner />}
            {wrongImageType && <p>wrongImageType</p>}
            {!imageAsset ? (
              <label htmlFor="">
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="flex flex-col justify-center items-center">
                    <p className="font-bold text-2xl">
                      <AiOutlineCloudUpload /> 
                    </p>
                    <p className="text-lg">
                      Click to upload
                    </p>
                  </div>
                  <p className="mt-32 text-gray-400">
                    use high-quality JPG, SVF, PNG, TIFF
                  </p>
                </div>
                <input 
                  type="file" 
                  name="upload-image"
                  onChange={uploadImage}
                  className="w-0 h-0"  
                />
              </label>
            ) : (
              <div className="relative h-full">
                <img src={imageAsset?.url} alt="uploaded-pic" className="h-full w-full" />
                <button 
                  type="button" 
                  className="absolute button-3 right-3 p-3 rounded-full bg-white text-xl cursor-pointer outline-none hover:shadow-md transition-all duration-500 ease-in-out" 
                  onClick={() => setImageAsset(null)}
                >
                  <MdDelete />
                </button>
              </div>
            )}
          </div>
        </div>
 
        <div className="flex flex-1 flex-col gap-6 lg:pl-5 mt-5 w-full">
          <input
            type="text"
            value={title}
            onclick={(e) => setTitle(e.target.value)}
            placeholder="Add your title here"
            className="outline-none text-2xl sm:text-3xl font-bold border-b-2 border-gray-200 p-2"
          />
          {
            user && (
              <div className="flex gap-2 my-2 items-center bg-white rounded-lg">
                <img 
                  src={user.image} 
                  alt="user-profile"
                  className="w-10 h-10 rounded-full" 
                />
                <p className="font-bold">{user.userName}</p>
              </div>
            )}
            <input 
              type="text" 
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              placeholder="what is your pin about"
              className="outline-none text-base sm:text-lg font-bold border-b-2 border-gray-200 p-2" 
            />
            <input 
              type="text" 
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Add destination link"
              className="outline-none text-base sm:text-lg font-bold border-b-2 border-gray-200 p-2" 
            />
            <div className="flex flex-col">
              <div>
                <p className="mb-2 font-semibold text-lg sm:text-xl">Choose Pin Category</p>
                <select 
                  name="" 
                  id=""
                  onChange={(e) => setCategory(e.target.value)}
                  className="outline-none w-475 text-base border-b-2 border-gray-50"
                ></select>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
export default CreatePin