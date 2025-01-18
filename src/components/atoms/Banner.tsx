import React, { FC } from 'react';
import { Stack, styled, Typography, useTheme } from '@mui/material';
import { Trans, useTranslation } from 'react-i18next';
import { useGetSizeScreen } from '../../hooks/useGetSizeScreen';
import { HEIGHT_HEADER_FULL, HEIGHT_HEADER_MD } from './NavigationBar';

interface BannerProps {
  isSoftware?: boolean;
}
const Banner: FC<BannerProps> = ({ isSoftware }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { innerHeight } = useGetSizeScreen();

  return (
    <Container innerHeight={innerHeight}>
      <Wrapper>
        <DividerWrapper>
          <Divider bgcolor={isSoftware ? '#03EFEF80' : '#9FF81880'} />
          <Cycle
            bgcolor={
              isSoftware ? theme.colors.blue.lightness5 : theme.colors.lime.base
            }
          />
        </DividerWrapper>
        <ContentWrapper>
          {isSoftware ? (
            <BannerLogo
              src={require('../../assets/images/software_banner_logo.png')}
            />
          ) : (
            <BannerLogo src={require('../../assets/images/banner_logo.png')} />
          )}
        </ContentWrapper>
        <Content innerHeight={innerHeight}>
          {isSoftware ? (
            <>
              <Stack ml={13.5}>
                <Text fontWeight={500} color={theme.colors.blue.lightness5}>
                  {t('software.start')}
                </Text>
                <Text fontWeight={300} ml={10.75}>
                  {t('software.with')}
                </Text>
              </Stack>
              <Text
                fontWeight={500}
                color={theme.colors.blue.lightness5}
                mt={7.75}
              >
                {t('software.aSmallStep')}
              </Text>
            </>
          ) : (
            <>
              <Text color={theme.colors.lime.base} fontWeight={500}>
                {t('banner.diveIn')}
              </Text>
              <Stack mr={-16} mt={3.875}>
                <Text fontWeight={300}>{t('banner.your')}</Text>
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
            </>
          )}
        </Content>
      </Wrapper>
    </Container>
  );
};
export default Banner;

const Container = styled(Stack, {
  shouldForwardProp: props => props !== 'innerHeight',
})<{ innerHeight: number }>(({ theme, innerHeight }) => ({
  height: innerHeight - HEIGHT_HEADER_FULL,
  [theme.breakpoints.down('md')]: {
    height: innerHeight - HEIGHT_HEADER_MD,
  },
}));
const Wrapper = styled(Stack)(() => ({
  position: 'relative',
  alignItems: 'center',
}));
const Content = styled(Stack, {
  shouldForwardProp: props => props !== 'innerHeight',
})<{ innerHeight: number }>(({ theme, innerHeight }) => ({
  flexDirection: 'row',
  gap: theme.spacing(7.25),
  marginTop: theme.spacing(7.75),
  marginBottom: (innerHeight - HEIGHT_HEADER_FULL) * 0.2,
  [theme.breakpoints.down('md')]: {
    marginBottom: (innerHeight - HEIGHT_HEADER_MD) * 0.2,
  },
}));
const ContentWrapper = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.colors.black.base,
  marginTop: theme.spacing(14.375),
  zIndex: 1,
  alignItems: 'center',
}));
const DividerWrapper = styled(Stack)(() => ({
  position: 'absolute',
  top: 0,
  left: '50%',
  height: '100%',
  zIndex: 0,
}));
const Divider = styled(Stack)(() => ({
  left: '50%',
  height: '100%',
  width: 0.5,
  zIndex: 0,
}));
const Cycle = styled(Stack)(() => ({
  width: 30,
  height: 30,
  borderRadius: 60,
  marginLeft: -15,
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
