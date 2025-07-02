import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signup } from './Pages/signup'
import { Signin } from './Pages/Signin'
import { Blog } from './Pages/Blog'
import './App.css'
import { Blogs } from './Pages/Blogs'
import { Home } from './Pages/Home'
import { Appbar } from './Components/Appbar'
import { Publish } from './Pages/Publish'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <>
      <BrowserRouter>
      <Appbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blogs" element={<Blogs/>} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path='/publish' element={<Publish/>} />
        </Routes>

        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            className: '',
            style: {
              background: '#F7F4ED',
              color: '#000',
            },
          }}
          />
      </BrowserRouter>
      </>
  )
}

export default App
