import React, { FC } from 'react';
import { Stack, styled, Typography, useTheme } from '@mui/material';
import { Trans, useTranslation } from 'react-i18next';

interface BannerProps {}
const Banner: FC<BannerProps> = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Container>
      <Divider />
      <Content>
        <BannerLogo src={require('../../assets/images/banner_logo.png')} />
      </Content>
      <Stack direction={'row'} gap={7.25} mt={7.75}>
        <Text color={theme.colors.lime.base}>{t('banner.driveIn')}</Text>
        <Stack mr={-15} mt={3.875}>
          <Text>{t('banner.your')}</Text>
          <Typography
            ml={3.5}
            component={'strong'}
            fontWeight={500}
            fontSize={48}
            lineHeight={'62.4px'}
            color={theme.colors.lime.base}
          >
            <Trans i18nKey={'banner.imagination'}>
              <Typography
                fontWeight={200}
                color={theme.colors.white.base}
                component={'strong'}
                fontSize={48}
                lineHeight={'62.4px'}
              />
            </Trans>
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
};
export default Banner;

const Container = styled(Stack)(() => ({
  height: 797,
  position: 'relative',
  alignItems: 'center',
}));
const Content = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.colors.black.base,
  marginTop: theme.spacing(14.375),
  zIndex: 1,
  alignItems: 'center',
}));
const Divider = styled(Stack)(() => ({
  position: 'absolute',
  top: 0,
  left: '50%',
  height: '70%',
  width: 0.5,
  backgroundColor: '#9FF81880',
  zIndex: 0,
}));
const BannerLogo = styled('img')(({ theme }) => ({
  width: '60%',
  [theme.breakpoints.down('md')]: {
    width: '70%',
  },
}));
const Text = styled(Typography)(() => ({
  fontSize: 48,
  lineHeight: '62.4px',
}));
