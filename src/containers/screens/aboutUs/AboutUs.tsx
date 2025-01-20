import React from 'react';
import { Stack } from '@mui/material';
import Banner from '../../../components/atoms/Banner';
import ContentBox from '../../../components/atoms/ContentBox';
import { useTranslation } from 'react-i18next';
import Member from '../../../components/atoms/Member';
import MemberFusion from '../../../components/atoms/MemeberFusion';

const AboutUsContainer = () => {
  const { t } = useTranslation();
  return (
    <Stack>
      <Banner />
      <ContentBox
        title={t('aboutUs.content.title')}
        description={t('aboutUs.content.description')}
        hideCheckPoint
      />
      <Member />
      <MemberFusion />
    </Stack>
  );
};
export default AboutUsContainer;
