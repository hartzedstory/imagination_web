import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomeLayout from '../components/molecules/layout/HomeLayout';
import HomeTopScreenContainer from './screens/home/HomeTopScreenContainer';
import SoftwareScreenContainer from './screens/software/SoftwareScreenContainer';
import MediaScreenContainer from './screens/media/MediaScreenContainer';

export enum RouterPathName {
  software = 'software',
  media = 'media',
  aboutUs = 'aboutUs',
  legalInformation = 'legalInformation',
}

const DEFAULT_LANGUAGE = 'en';

const RedirectToDefaultLanguage = () => {
  const getBrowserLanguage = () => {
    const language = navigator.language.split('-')[0];
    return ['en', 'vi'].includes(language) ? language : DEFAULT_LANGUAGE;
  };
  const defaultLang = getBrowserLanguage();
  return <Navigate to={`/${defaultLang}`} replace />;
};

function Router() {
  return (
    <Routes>
      <Route path='/' element={<RedirectToDefaultLanguage />} />
      <Route path={'/:lang'} element={<HomeLayout />}>
        <Route path={'/:lang'} element={<HomeTopScreenContainer />} />
        <Route path={'/:lang/software'} element={<SoftwareScreenContainer />} />
        <Route path={'/:lang/media'} element={<MediaScreenContainer />} />
        <Route path={'/:lang/aboutUs'} element={<HomeTopScreenContainer />} />
        <Route
          path={'/:lang/legalInformation'}
          element={<HomeTopScreenContainer />}
        />
      </Route>
    </Routes>
  );
}

export default Router;
