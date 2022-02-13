import { useEffect, useState } from 'react'
import axios from 'axios';
import { useFetch } from './hooks/useFetch';

type Repository =  {
  full_name: string;
  description: string;
}

function App() {



  const { data: repositories, isFetching} = useFetch<Repository[]>('https://api.github.com/users/ricardo85x/repos')
  
  return (
    <ul>
      { isFetching ? <li>Loading</li> : repositories?.map( repo => {
        return (

          <li key={repo.full_name}>
            <strong>{repo.full_name}</strong>
            <strong>{repo.description}</strong>
          </li>
        )
      })}
    </ul>
  )
  
}

export default App
