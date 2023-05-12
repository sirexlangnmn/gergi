import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom'

const Home = lazy(() => import('./pages/Home'));
const Books = lazy(() => import('./pages/Books'));

// import { routes } from './constants/routes';
import { routes } from './constants/routes';

const App = () => {
  console.log('routes', routes);
  return (
    <>
      <Suspense fallback={<h1>Loading . . .</h1>}>
      <Routes>
      <Route path={routes[0].link} element={<Home />} />
      <Route path={routes[1].link} element={<Books />} />
      </Routes>
      </Suspense>
    </>
  )
}

export default App;