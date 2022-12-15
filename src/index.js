import { createRoot } from 'react-dom/client'
import App from './App.js'
import './style.css'

const root = createRoot(document.querySelector('#root'))

const toto = 'There'

root.render( 
  <App clickersCount={ 4 }>
    <h1 className="title">Hello {toto}</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque reprehenderit quasi quod excepturi debitis numquam sit doloremque sapiente accusantium magni temporibus asperiores corporis porro facilis dignissimos, tempora, ducimus, hic suscipit!</p>
    <input type="checkbox" id="the-checkbox" />
    <label htmlFor="the-checkbox">That Checkbox</label>
  </App>
)