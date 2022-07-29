import React from 'react'
import { useEffect } from 'react'

const URL='http://www.omdbapi.com?apikey=53da6a14'

const App = () =>{
    const searchMovies = async (title) =>{
        const response = await fetch(`${URL}&s=${title}`) 
        const data = await response.json()
        console.log(data.Search)
    }
    
    useEffect(()=>{
        searchMovies('Batman')
    },[])

    return(
        <h1>Hello</h1>
    );
}

export default App;