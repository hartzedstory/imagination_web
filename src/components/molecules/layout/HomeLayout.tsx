import React from 'react';
import { Stack } from '@mui/material';
import { Outlet } from 'react-router';
import NavigationBar from '../../atoms/NavigationBar';
import { useGetSizeScreen } from '../../../hooks/useGetSizeScreen';
import Footer from '../../atoms/Footer';

const HomeLayout = () => {
  const { innerHeight } = useGetSizeScreen();
  return (
    <Stack minHeight={innerHeight}>
      <NavigationBar />
      <Stack flex={1}>
        <Outlet />
      </Stack>
      <Footer />
    </Stack>
  );
};
export default HomeLayout;
