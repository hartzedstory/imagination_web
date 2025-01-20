import React, { useMemo } from 'react';
import { Stack } from '@mui/material';
import { Outlet, useLocation, useParams } from 'react-router';
import NavigationBar from '../../atoms/NavigationBar';
import { useGetSizeScreen } from '../../../hooks/useGetSizeScreen';
import Footer from '../../atoms/Footer';
import { RouterPathName } from '../../../containers/Router';

const HomeLayout = () => {
  const { innerHeight } = useGetSizeScreen();
  const location = useLocation();
  const { lang } = useParams();

  const hiddenFooter = useMemo(
    () =>
      location.pathname === `/${lang}/${RouterPathName.software}` ||
      location.pathname === `/${lang}/${RouterPathName.media}`,
    [lang, location.pathname],
  );

  return (
    <Stack minHeight={innerHeight}>
      <NavigationBar />
      <Stack flex={1}>
        <Outlet />
      </Stack>
      {!hiddenFooter && <Footer />}
    </Stack>
  );
};
export default HomeLayout;
