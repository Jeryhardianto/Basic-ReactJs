import React from 'react'
import { useRecoilState } from 'recoil'
import Router from './router'
import { theme } from './store'
// import Navbar from './Components/Navbar'

function App() {
  //3.atom -> change theme
  const [currentTheme, setCurrentTheme] = useRecoilState(theme)
  //4.atom -> change theme
  const defaultTheme = currentTheme == 'dark' ? 'bg-dark text-white' : 'bg-white text-dark'

  return (
    <div className={`${defaultTheme} vh-100`}>
      {/* <Navbar /> */}
      <Router />
    </div>
  )
}

export default App












