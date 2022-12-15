# basic-react

start with NPX
npx create-react-app
without npx
npm init -y
npm install react@latest react-dom@latest react-script@latest
add scripts
"scripts": {
"dev": "react-scripts start",
"build": "react-scripts build",
},
make a public folder and make index.html
use “!” shortcut
make a <div> id=”root”
make a src folder with index.js
import { createRoot } from 'react-dom/client'

const root = createRoot(document.querySelector('#root'))

root.render(

  <h1>Hello React</h1>
)
npm run dev
yes to default browser
add JSX to render
don’t use reserved words
class => className
for => htmlFor
can use single quotes
injection of variables with { }
can use back-quotes
unitary is OK
can send a function, call a function or more JSX
Can’t do conditions or loops
{/*  comment */}
adding style
style={  { key: value } }
switch snake to camel
use a CSS file
import ‘./mygreat.css’
use a CSS framework
https://reactjs.org/docs/events.html#mouseEvents 
App.js as a function
components as functions
useState hook
import { useState } from ‘react’
const [ count, setCount ] = useState(0)
do not modify the value in code, use setter
useEffect
useEffect( callback, [ observed dependencies ]
include a return statement in callback to be called on disposal
empty array of dependencies => first instantiation only
window.localStorage
useEffect(
    // const savedCount = localStorage.getItem('count')
    () => {
      const savedCount = parseInt(localStorage.getItem('count') ?? 60);
      setCount(savedCount)
    }, 
    []
  )

useEffect(
() => {
localStorage.setItem('count', count + 1)
},
[ count ]
)
{ hasClicker && <Clicker /> }
evaluates hasClicker
if true evaluates AND Returns <clicker />
props is an object that represents the attributes of the component
often de-structured in the function
export default function Clicker( { keyName, color = 'chocalate' } )
“children”tag, innerHTML
moving data up
create a function in the parent and pass it to the children
useMemo
const <result> = useMemo( callback returns results, [ observed dependencies ]
useRef
to access component or object from other parts
create a reference and then associate it with a component
has a “current” property
const buttonRef = useRef()
button ref={ buttonRef }
cannot be used until JSX is compiled
put in useEffect(() => { }, []) if immediate use is required
display data using map
