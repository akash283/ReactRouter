import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route,RouterProvider,createBrowserRouter,createRoutesFromElements} from 'react-router-dom'
import Layout from './componets/Layout/Layout.jsx'
import Home from './componets/Home/Home.jsx'
import About from './componets/About/About.jsx'
import User from './componets/User/User.jsx'
import Github,{githubInfoLoader} from './componets/Github/Github.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>}/>
        <Route path='user/' element={<User/>}>
        <Route path=':userid' element={<User/>}/>
        </Route>
        <Route 
        loader={githubInfoLoader}
        path='github' element={<Github/>}/>
        <Route path='*' element={<div>Not Found</div>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
