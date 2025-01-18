import React, { FC, useMemo } from 'react';
import { Stack, styled, Typography, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import SliderComponent from './SliderComponent';
import { useGetSizeScreen } from '../../hooks/useGetSizeScreen';

export const SLIDE_WIDTH_FULL = 373;
export const SLIDE_WIDTH_SM = 273;
export const SLIDE_HEIGHT_FULL = 110;
export const SLIDE_HEIGHT_SM = 80.5;

interface PlatformProps {
  isSoftware?: boolean;
}
const Platform: FC<PlatformProps> = ({ isSoftware = true }) => {
  const { t } = useTranslation();
  const { innerWidth } = useGetSizeScreen();
  const theme = useTheme();
  const widthContent = useMemo(() => {
    if (innerWidth >= 1000) {
      return 1000;
    }
    return innerWidth * 0.7;
  }, [innerWidth]);
  return (
    <Container>
      <Stack alignItems={'center'}>
        <Title>{t('software.platform.title')}</Title>
        <Divider
          bgcolor={
            isSoftware ? theme.colors.blue.lightness5 : theme.colors.lime.base
          }
        />
        <Stack width={widthContent} mt={5.875} position={'relative'}>
          <SliderComponent />
        </Stack>
      </Stack>
      <Cycle />
    </Container>
  );
};
export default Platform;

const Container = styled(Stack)(({ theme }) => ({
  paddingBottom: theme.spacing(14.875),
  alignItems: 'center',
}));
const Title = styled(Typography)(() => ({
  fontSize: 48,
  lineHeight: '62.4px',
  fontWeight: 700,
}));
const Divider = styled(Stack)(({ theme }) => ({
  width: 80,
  height: 1,
  marginTop: theme.spacing(1),
}));
const Cycle = styled(Stack)(({ theme }) => ({
  width: 30,
  height: 30,
  borderRadius: 60,
  backgroundColor: theme.colors.blue.lightness5,
  marginTop: theme.spacing(14.875),
}));
