import React from 'react'
import { useState } from 'react'
import { Router, Route, Routes } from 'react-router-dom'

import {Navbar, Feed, PinDetail, CreatePin, Search} from '../components'


const Pins = () => {
  const [searchterm, setSearchTerm] = useState('');
  
  return (
    <div className="px-2 md:px-5">
        <div className="bg-gray-50">
          <Navbar searchterm={searchterm} setSearchTerm={setSearchTerm} user={user}/>
        </div>
        <div className="h-full">
          <Routes>
            <Route path="/" element={<Feed/>}/>
            <Route path="/category/:categoryId" element={<Feed/>}/>
            <Route path="/pinDetail/:pinId" element={<PinDetail user={user}/>}/>
            <Route path="/create-pin" element={<CreatePin user={user}/>}/>
            <Route path="/search" element={<Search searchterm={searchterm} setSearchTerm={setSearchTerm} />}/>
          </Routes>
        </div>
    </div>
  )
}
export default Pins