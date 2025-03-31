
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from "@/pages/Index/Index"
import Auth from "./pages/Auth/Auth"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register";
import Live from "./pages/Live/Live";
import Music from "./pages/Music/Music";
import Charts from "./pages/Charts/Charts";
import Events from "./pages/Events/Events";
import NotFound from "./pages/NotFound/NotFound";

import Header from "./components/layout/Header/Header"

function App() {

  const routes = (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/live" element={<Live />} />
      <Route path="/music" element={<Music />} />
      <Route path="/charts/" element={<Charts />} />
      <Route path="/events" element={<Events />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );

  return (
    <Router>
      <Header />
      {routes}
    </Router>
  )
}

export default App
