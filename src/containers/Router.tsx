import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeLayout from '../components/molecules/layout/HomeLayout';
import HomeTopScreenContainer from './screens/home/HomeTopScreenContainer';

export enum RouterPathName {
  home = '/',
  software = '/software',
  media = '/media',
  aboutUs = '/aboutUs',
}

function Router() {
  return (
    <Routes>
      <Route path={RouterPathName.home} element={<HomeLayout />}>
        <Route
          path={RouterPathName.home}
          element={<HomeTopScreenContainer />}
        />
        <Route
          path={RouterPathName.software}
          element={<HomeTopScreenContainer />}
        />
      </Route>
    </Routes>
  );
}

export default Router;
