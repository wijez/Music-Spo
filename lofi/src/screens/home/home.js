import React from 'react'

import Feed from '../feed/feed'
import Player from '../player/player'
import Library from '../library/library'
import Trending from '../trending/trending'
import Favorites from '../favorites/favorites'

import '../home/home.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from '../../components/sidebar'

export default function Home() {
  return (
    <Router>
      <div className='main-body'>
      <Sidebar/>
      <Routes>
        <Route path='/' element={<Library />} />
        <Route path='/feed' element={<Feed />} />
        <Route path='/player' element={<Player />} />
        <Route path='/trending' element={<Trending />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
      </div>
    </Router>
  )
}
