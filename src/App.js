import './App.css';
// import { useState } from "react"
// import WalletInputs from './components/WalletInputs';
// import NativeTokens from './components/NativeTokens';
// import Tokens from './components/Tokens';
// import PortfolioValue from './components/PortfolioValue';
// import TransferHistory from './components/TransferHistory';
// import Nfts from './components/Nfts';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import {Home} from './pages';
// import { Avatar, TabList, Tab } from "@web3uikit/core"



import { useStateContext } from './contexts/ContextProvider'
import Profile from './pages/Profile';
import Coinlist from './pages/Coinlist';
import CryptoDetail from './pages/CryptoDetail';







function App() {
  // const [wallet, setWallet]  = useState("");
  // const [chain, setChain] = useState("0x1")
  // const [nativeBalance, setNativeBalance] = useState(0)
  // const [nativeValue, setNativeValue] = useState(0)
  // const [tokens, setTokens] = useState([])
  // const [transfers, setTransfers] = useState([])
  // const [nfts, setNfts] = useState([])
  // const [filteredNfts, setFilteredNfts] = useState([]) 

  const { activeMenu } = useStateContext()

  return (
    <div>
      <BrowserRouter>
    <div className='flex relative dark:bg-main-dark-bg'>
      {/* Sidebar  */}
      {activeMenu ? (
                    <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
                        <Sidebar />
                    </div>
                ) : (
                    <div className='w-0 dark:bg-secondary-dark-bg'>
                        <Sidebar />
                    </div>
                )}

                {/* Navbar  */}
                <div className= {
                    `dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`
                }>
                    <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                        <Navbar />
                    </div>
                
        <div>

       

        <Routes>
                <Route path='/home' element={<Home />}/>
                <Route path='/' element={<Home />}/>
                <Route path='/profile' element={<Profile />}/>
                <Route path='/coinlist' element={<Coinlist />} />
                <Route path="/coin/:id" element={<CryptoDetail />} />

        </Routes>
        </div>
        </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App
