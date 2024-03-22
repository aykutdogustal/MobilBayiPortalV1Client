
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Test from "./pages/Test"
import TestParams from "./pages/TestParams"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/test/:id" element={<Test/>}/>
          <Route path="/testparams/:id" element={<TestParams/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
