import {
  ApolloClient,
  ApolloProvider,
  from,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

const LazyHome = React.lazy(() => import('./pages/Home'));
const LazyAlunos = React.lazy(() => import('./pages/Reviews'));

const link = from([new HttpLink({ uri: 'http://localhost:3001/graphql' })]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

function App() {
  return (
    <div style={{ backgroundColor: ' #202020', padding: '100px' }}>
      <ApolloProvider client={client}>
        <React.Suspense fallback="Loading...">
          <BrowserRouter>
            <Routes>
              <Route path="/">
                <Route index element={<LazyHome />} />
                <Route path="/reviews" element={<LazyAlunos />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </React.Suspense>
      </ApolloProvider>
    </div>
  );
}

export default App;
