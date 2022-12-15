import { useState, useEffect, useMemo, useRef } from 'react'

export default function Clicker( { increment, keyName, color = 'chocalate' } ) 

{

  console.log(keyName, color)

  const [ count, setCount ] = useState( parseInt(localStorage.getItem( keyName ) ?? 0))
  const buttonRef = useRef()

  useEffect(
    // const savedCount = localStorage.getItem('count') see useState
    () => {
      console.log('first render')
      console.log( buttonRef.current )
      return () => 
      {
        console.log('dispose')
        localStorage.removeItem( keyName )
      }
    }, 
    []
  )

  useEffect(
     () => {
      localStorage.setItem( keyName , count )
    },
     [ count ]
  )
  

  const buttonClick = () => 
  {
    setCount( count + 1)  // uses latest value, good for async
    increment()
  }

  return <div>
    <div style={ { color: color } }>Click count: { count } </div>
    <button ref={ buttonRef } onClick={ buttonClick }>Click me</button>
  </div>
}