import React from 'react'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'

// componente principal
import SlideMenuComponent from "./SlideMenuComponent/SlideMenuComponent.jsx"
import options from './SlideMenuComponent/options.js'
import { colors } from './SlideMenuComponent/options.js'

// componentes representativos
import HomePage from "./otherComponents/HomePage"
import Component_0 from "./otherComponents/Component_0.jsx"
import Component_1 from "./otherComponents/Component_1.jsx"
import Component_2 from "./otherComponents/Component_2.jsx"
import Component_3 from "./otherComponents/Component_3.jsx"


export default function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<SlideMenuComponent options={options} colors={colors} />} >
       <Route index element={<HomePage/>} />
      <Route path="/component_0" element={<Component_0 />} />
      <Route path="/component_1" element={<Component_1 />} />
      <Route path="/component_2" element={<Component_2 />} />
      <Route path="/component_3" element={<Component_3 />} />
    </Route>
  ))

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}