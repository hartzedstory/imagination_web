import React from 'react';
import { Stack } from '@mui/material';
import Banner from '../../../components/atoms/Banner';
import { useTranslation } from 'react-i18next';
import ContentLegalInformation from '../../../components/atoms/ContentLegalInformation';

const LegalInformationContainer = () => {
  const { t } = useTranslation();

  return (
    <Stack>
      <Banner />
      <Stack gap={73.375}>
        <ContentLegalInformation
          title={t('privacyPolicy.title')}
          description={t('privacyPolicy.description')}
          hideCheckPoint
        />
        <ContentLegalInformation
          title={t('termAndConditions.title')}
          description={t('termAndConditions.description')}
        />
      </Stack>
    </Stack>
  );
};
export default LegalInformationContainer;
