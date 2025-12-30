import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route,RouterProvider,createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'
import { githubInfoLoader } from './components/Github/Github.jsx'
// const router=createBrowserRouter([
//   {
//     path:'/', //Meaning When URL starts with / Render <Layout />..This route is the parent layout route.
//     element:<Layout />,
//     children:[ //These routes render inside Layout, not instead of it.
//       {
//         path:"",
//         element:<Home />
//       },
//       {
//         path:"about",
//         element:<About />
//       },
//       {
//         path:"contact",
//         element:<Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter( //another mthod of creating routes
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} /> {/*as these are within layout routes hence they are its children*/}
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} /> {/* :userid is dynamic part which will be fetched using useparam hook*/}
      <Route loader={githubInfoLoader} path='github' element={<Github />} /> {/* whenever cursor is moved to github button ie route then loader will be called and its value will be stored in cache ..optimization*/}
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} /> {/* router detail is provided*/ }
  </StrictMode>,
)
