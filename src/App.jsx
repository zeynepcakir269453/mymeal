import { useState,Route, Switch } from 'react'
//import { Route, Switch } from "react-router-dom"
// We will create these two pages in a moment
//         <Route exact path="/:id" component={UserPage} />
import HomePage from "./pages/HomePage"
//import UserPage from "./pages/UserPage"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Switch>
         <Route exact path="/" component={HomePage} />
      </Switch>
    </>
  )
}

export default App
