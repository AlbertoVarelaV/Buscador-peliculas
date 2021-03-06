import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './config/store/store.ts';

import { MainLayout } from './layouts/MainLayout/MainLayout.tsx';

import { SearchPage } from './pages/SearchPage/SearchPage.tsx';
import { MyListPage } from './pages/MyListPage/MyListPage.tsx';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<SearchPage />} />
            <Route path="/mylist" element={<MyListPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
