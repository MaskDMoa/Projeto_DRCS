import { Routes, Route } from 'react-router-dom';
import { BaitPage } from './pages/BaitPage';
import { ArchivistPage } from './pages/ArchivistPage';
import { NotFoundPage } from './pages/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<BaitPage />} />
      <Route path="/arquivista" element={<ArchivistPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
