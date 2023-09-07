import { Routes, Route } from 'react-router-dom';

import AccountantsView from '../views/AccountantsView';
import HomeView from '../views/HomeView';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<HomeView />} />
      <Route path='/ksiegowi' element={<AccountantsView />} />
    </Routes>
  );
};

export default Router;