import Header from './components/top/Header'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About';
import Algorithms from './pages/Algorithms'
import BFS from './pages/AlgoPages/BFS'
import ShortestPath from './pages/AlgoPages/ShortestPath'
import DFS from './pages/AlgoPages/DFS'
const App = () => {
  return (
    <>
      <Router>
      <Header />
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route> 
          <Route path="/algorithms" element = {<Algorithms/>}></Route>
          <Route path ="/bfs" element = {<BFS/>}></Route>
          <Route path = "/dfs" element = {<DFS/>}></Route>
          <Route path = "/shortest" element = {<ShortestPath/>}></Route>
        </Routes>
      </Router>
    </>
  )
}


export default App