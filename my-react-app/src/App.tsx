
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
import Search from "./pages/Search/Search";

import Header from "./components/layout/Header/Header"
import Footer from "./components/layout/Footer/Footer"

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
      <Route path="/search" element={<Search />} />
    </Routes>
  );

  return (
    <Router>
      <Header />
      {routes}
      <Footer />
    </Router>
  )
}

export default App
