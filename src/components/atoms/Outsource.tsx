import React, { FC, useCallback } from 'react';
import { Stack, styled, Typography, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { outsourceData } from '../../constants/MockData';
import Button from './buttons/Button';

interface OutsourceProps {}
const Outsource: FC<OutsourceProps> = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const handleSeeMore = useCallback(() => {}, []);

  return (
    <Container>
      <Stack alignItems={'center'}>
        <Title>{t('media.outsource.title')}</Title>
        <Divider bgcolor={theme.colors.lime.base} />
      </Stack>
      <Content direction={'row'}>
        {outsourceData.map((item, index) => {
          return (
            <Stack key={item.id}>
              <ProductImg bgcolor={index === 0 ? '#000DFA' : '#D9D9D9'}>
                <BoxName>
                  <Typography
                    fontSize={36}
                    fontWeight={700}
                    lineHeight={'46.8px'}
                  >
                    {item.name}
                  </Typography>
                </BoxName>
              </ProductImg>
              <Stack
                direction={'row'}
                gap={1.25}
                alignItems={'flex-end'}
                mt={3.75}
                mb={1}
              >
                <Typography variant={'body2'} fontWeight={300}>
                  {t('media.outsource.project')}
                </Typography>
                <Typography fontWeight={700}>{item.projectName}</Typography>
              </Stack>
              <Stack direction={'row'} gap={1.25} mb={4.125}>
                <Typography variant={'body2'} fontWeight={300}>
                  {t('media.outsource.client')}
                </Typography>
                <Typography variant={'body2'} fontWeight={400}>
                  {item.describe}
                </Typography>
              </Stack>
              <Button
                height={34}
                width={100}
                onPress={handleSeeMore}
                corner={'noBorder'}
              >
                {t('media.outsource.seeMore')}
              </Button>
            </Stack>
          );
        })}
      </Content>
    </Container>
  );
};
export default Outsource;

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
  gap: theme.spacing(6.25),
  overflowX: 'scroll',
  width: '100vw',
  padding: theme.spacing(10.125, 11.375, 0),
}));
const ProductImg = styled(Stack)(() => ({
  width: 370,
  height: 250,
  position: 'relative',
}));
const BoxName = styled(Stack)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  width: '100%',
  height: '100%',
  justifyContent: 'flex-end',
  padding: theme.spacing(2, 3),
}));
