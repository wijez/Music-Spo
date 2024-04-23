import './library.css'
import APIKit from '../../spotify'
import React, { useEffect, useState } from 'react'


export default function Library() {
  const [playlists, setPlaylists] = useState(null)

  useEffect(() => {
    APIKit.get('/me/playlists').then(function (response) {
      setPlaylists(response.data.items)
      console.log(response.data.items)
    })
  }, [])
  return (
    <div className='screens-container' >
      <div className='library-box'>
        {playlists?.map((playlist) => (
          <div className='playlist-card'>
              <img src={playlist.images[0].url} className='playlist-images'/>
              <p className='playlist-title'>{playlist.name}</p>
              <p className='playlist-subtitle'>{playlist.tracks.total}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
