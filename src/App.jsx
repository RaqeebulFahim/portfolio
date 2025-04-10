import React from 'react'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router'
import Homepage from './pages/Homepage'
import Portfolios from './pages/Portfoliopage'
import Services from './pages/Servicepage'
import Contacts from './pages/Contactpage'
import Blogpage from './pages/Blogpage'
import { ToastContainer } from 'react-toastify'


const App = () => {
  return (
    <>
            <ToastContainer />
      <HashRouter>
        {/* <BrowserRouter> */}
        <Routes>

          <Route path='/' element={<Homepage />}></Route>
          <Route path='/home' element={<Homepage />}></Route>
          <Route path='/portfolio' element={<Portfolios />}></Route>
          <Route path='/service' element={<Services />}></Route>
          <Route path='/blog' element={<Blogpage />}></Route>
          <Route path='/contact' element={<Contacts />}></Route>
        </Routes>
        {/* </BrowserRouter> */}
      </HashRouter>

    </>
  )
}

export default App


















// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// // import Homepage from './pages/Homepage'
// import { BrowserRouter, Route,Routes } from "react-router";
// // import Blog from './components/Blog'
// // import Portfolio from './components/Portfolio'
// import Blogpage from './pages/Blogpage'
// import Homepage from './pages/Homepage'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//     <BrowserRouter>
//     <Routes>

//       {/* <Home/> */}

//       {/* {/* <Route path='/'  element={ <Homepage/>} /> */}
//       <Route path='/'  element={ <Homepage/>} /> 
//       <Route path='/home'  element={ <Homepage/>} /> 
//       <Route path='/index'  element={ <Homepage/>} /> 
//       <Route path='/about'  element={ <Blogpage/>} /> 
//       {/* <Route path='/portfolio'  element={ <Portfolio/>} /> */}
//       {/* <Route path='/services'  element={ <Services/>} /> */}
//       {/* <Route path='/blog'  element={ <Blogpage/>} /> */}
//       {/* <Route path='/contact'  element={ <Contact/>} /> */}

// {/* <Homepage/> */}
//       </Routes>
//       </BrowserRouter>
//     </>
//   )
// }

// export default App
