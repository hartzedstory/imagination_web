import React, { useCallback } from 'react';
import { Stack } from '@mui/material';
import Banner from '../../../components/atoms/Banner';
import Explore from '../../../components/atoms/Explore';
import { useNavigate } from 'react-router-dom';
import { RouterPathName } from '../../Router';
import { useParams } from 'react-router';

const HomeTopScreenContainer = () => {
  const navigate = useNavigate();
  const { lang } = useParams();

  const handleOpenMedia = useCallback(() => {
    navigate(`/${lang}/${RouterPathName.media}`);
  }, [navigate, lang]);

  const handleOpenSoftware = useCallback(() => {
    navigate(`/${lang}/${RouterPathName.software}`);
  }, [navigate, lang]);

  return (
    <Stack>
      <Banner />
      <Explore order={1} onSeeMore={handleOpenMedia} />
      <Explore order={2} onSeeMore={handleOpenSoftware} />
    </Stack>
  );
};
export default HomeTopScreenContainer;
