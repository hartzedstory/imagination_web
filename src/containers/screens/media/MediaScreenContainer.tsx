import React from 'react';
import { Stack } from '@mui/material';
import Banner from '../../../components/atoms/Banner';
import ContentBox from '../../../components/atoms/ContentBox';
import { useTranslation } from 'react-i18next';
import YoutubeInhouse from '../../../components/atoms/YoutubeInhouse';
import Outsource from '../../../components/atoms/Outsource';

const MediaScreenContainer = () => {
  const { t } = useTranslation();
  return (
    <Stack>
      <Banner />
      <ContentBox
        title={t('media.content.title')}
        description={t('media.content.description')}
      />
      <YoutubeInhouse />
      <Outsource />
    </Stack>
  );
};
export default MediaScreenContainer;
