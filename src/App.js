import { useEffect, useState } from 'react';
import Clicker from './Clicker.js';
import People from './People.js'

export default function App( { clickersCount, children } ) 
{
  const [ hasClicker, setHasClicker ] = useState(true )
  const [ count, setCount ] = useState(0)
 
  const toggleHasClicker = () => setHasClicker(!hasClicker)
  const increment = () => 
  {
    setCount(count + 1)
  }

  return <>
    { children }
    <h1>My Application</h1>
    
    <div>Total count: { count }</div>
    <button onClick={ toggleHasClicker } >{ hasClicker ? 'Hide Clicker' : 'Show Clicker' }</button>
    { hasClicker && 
      <>
        { [...Array(clickersCount)].map((value, index) => {
          return <Clicker 
            key={ index }
            increment={ increment } 
            keyName={`count${index}`}
            color={ `hsl(${ Math.random() * 360 }deg, 100%, 70%)` } />
        }) }
      </> 
    }
    <People />
  </>
  
}