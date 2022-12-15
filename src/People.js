import { useState } from 'react'

export default function People() 
{
  const [ people, setPeople ] = useState([
    { id: 1, name: 'Dean' },
    { id: 2, name: 'Frances' },
    { id: 3, name: 'Nina' },
    { id: 4, name: 'Kaiser' },
  ])

  return <div>
    <h2>People</h2>
    <ul>
      { people.map( (value, index) => <li key={value.id} >{value.name}</li>)  }
    </ul>
  </div>
}