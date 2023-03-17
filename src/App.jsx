import Header from './components/Header'
import SignIn from './components/SignIn'
import Verification from './components/Verification'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path='/verify' element={<Verification />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App