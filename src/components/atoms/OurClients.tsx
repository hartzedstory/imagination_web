import React, { FC } from 'react';
import { Stack, styled, Typography, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ourClientData } from '../../constants/MockData';

interface OurClientsProps {
  isSoftware?: boolean;
}
const OurClients: FC<OurClientsProps> = ({ isSoftware = true }) => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Container>
      <Stack alignItems={'center'}>
        <Title>{t('software.ourClients.title')}</Title>
        <Divider
          bgcolor={
            isSoftware ? theme.colors.blue.lightness5 : theme.colors.lime.base
          }
        />
      </Stack>
      <Content direction={'row'}>
        {ourClientData.map(item => {
          return <Image key={item.id} src={item.imageUrl} />;
        })}
      </Content>
    </Container>
  );
};
export default OurClients;

const Container = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(5.25),
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
const Content = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(8.125),
  overflowX: 'scroll',
  width: '100vw',
  justifyContent: 'center',
  paddingTop: theme.spacing(10),
}));
const Image = styled('img')(() => ({
  height: 42,
  position: 'relative',
}));
