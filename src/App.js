import { Route, Routes } from 'react-router-dom';
import { Header } from './components/header';
import {HomePage} from './pages/HomePage'
import { GamePage } from './pages/GamePage';
import { OrderPage } from './pages/OrderPage';




function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/app/:title" element={<GamePage />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
    </div>
  );
}

export default App;
