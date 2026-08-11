import { Routes, Route } from 'react-router-dom';
import { BaitPage } from './pages/BaitPage';
import { ArchivistPage } from './pages/ArchivistPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<BaitPage />} />
      <Route path="/arquivista" element={<ArchivistPage />} />
    </Routes>
  );
}

export default App;
