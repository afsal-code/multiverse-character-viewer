import './App.css';
import FetchData from './components/FetchData';
import Detail from './components/Detail';
import Layout from './components/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename="/multiverse-character-viewer">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<FetchData />} />
          <Route path="detail/:id" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
