import './App.scss';
import "./components/NavBar/NavBar"
import { Home, About, Activity, Events, Members } from "./pages/index"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Home />}>
            <Route path='/about' element={<About />} />
            <Route path='/activity' element={<Activity />} />
            <Route path='/events' element={<Events />} />
            <Route path='/members' element={<Members />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
