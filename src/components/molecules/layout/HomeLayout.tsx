import React from 'react';
import { Stack, styled } from '@mui/material';
import { Outlet } from 'react-router';
import NavigationBar from '../../atoms/NavigationBar';
import { useGetSizeScreen } from '../../../hooks/useGetSizeScreen';

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

const Footer = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.colors.black.lightness1,
  padding: theme.spacing(8.625, 12),
}));
