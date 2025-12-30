import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Chai from './chai.jsx'

function MyApp() {

  return (
    <h1>basic react</h1>
  )
}
const anotherElement=(
  <a href="https://google.com" target='_blank'>Visit google</a>
)
const x="ok bye"
const reactElement=React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click me to visit google!',x
 )
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {reactElement}
    <App />
  </StrictMode>
)
