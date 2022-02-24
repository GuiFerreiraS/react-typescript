import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

const LazyHome = React.lazy(() => import('./pages/Home'));
const LazyAlunos = React.lazy(() => import('./pages/Alunos'));

function App() {
  return (
    <div style={{ backgroundColor: ' #202020', padding: '100px' }}>
      <React.Suspense fallback="Loading...">
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<LazyHome />} />
              <Route path="/alunos" element={<LazyAlunos />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </React.Suspense>
    </div>
  );
}

export default App;
