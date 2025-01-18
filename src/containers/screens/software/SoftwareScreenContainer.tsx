import React, { useCallback } from 'react';
import { Stack } from '@mui/material';
import Banner from '../../../components/atoms/Banner';
import { useNavigate } from 'react-router-dom';
import { RouterPathName } from '../../Router';
import { useParams } from 'react-router';
import ContentBox from '../../../components/atoms/ContentBox';
import { useTranslation } from 'react-i18next';
import Products from '../../../components/atoms/Products';
import Platform from '../../../components/atoms/Platform';
import OurClients from '../../../components/atoms/OurClients';

const SoftwareScreenContainer = () => {
  const navigate = useNavigate();
  const { lang } = useParams();
  const { t } = useTranslation();

  const handleViewCase = useCallback(() => {
    navigate(`/${lang}/${RouterPathName.media}`);
  }, [navigate, lang]);

  return (
    <Stack>
      <Banner isSoftware />
      <ContentBox
        title={t('software.content.title')}
        description={t('software.content.description')}
        isSoftware
      />
      <Products onViewCase={handleViewCase} />
      <Platform />
      <OurClients />
    </Stack>
  );
};
export default SoftwareScreenContainer;
