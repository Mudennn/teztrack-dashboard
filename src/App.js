import './App.css';
// import { useState } from "react"
// import Sidebar from './components/Sidebar';
// import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
// import {Home} from './pages';
// import { Avatar, TabList, Tab } from "@web3uikit/core"
// import { useStateContext } from './contexts/ContextProvider'
import Profile from './pages/Profile';
import Coinlist from './pages/Coinlist';
import CryptoDetail from './pages/CryptoDetail';
import Sidebar2 from './components/Sidebar2';
import Navbar2 from './components/Navbar2';
import Profile2 from './pages/Profile2';









function App() {

  // const { activeMenu } = useStateContext()

  return (
    <div>
      <BrowserRouter>
      <Navbar2 />
      <div className='flex w-full'>
      <Sidebar2/>
      
      
      {/* </div> */}
    {/* <div className='flex relative'> */}
      {/* Sidebar  */}
      {/* {activeMenu ? (
                    <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
                        <Sidebar />
                    </div>
                ) : (
                    <div className='w-0 dark:bg-secondary-dark-bg duration-300'>
                        <Sidebar />
                    </div>
                )} */}

                {/* Navbar  */}
                {/* <Sidebar2 /> */}
                
                {/* <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full flex-2'> */}
                        
                    {/* </div> */}
                
                {/* <div className= {
                    `dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`
                }>
                    <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                        <Navbar />
                    </div> */}
                
        
        <Routes>
                <Route path='/home' element={<Profile2 />}/>
                <Route path='/' element={<Profile2 />}/>
                <Route path='/profile' element={<Profile />}/>
                <Route path='/coinlist' element={<Coinlist />} />
                <Route path="/coin/:id" element={<CryptoDetail />} />

        </Routes>
        
        {/* </div> */}
        </div>
        
      </BrowserRouter>
    </div>
  );
}

export default App
