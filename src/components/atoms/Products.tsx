import React, { FC } from 'react';
import { Stack, styled, Typography, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { productData } from '../../constants/MockData';
import { BlueButton } from './buttons/Button';

interface ProductsProps {
  onViewCase: () => void;
  isSoftware?: boolean;
}
const Products: FC<ProductsProps> = ({ onViewCase, isSoftware = true }) => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Container>
      <Stack alignItems={'center'}>
        <Title>{t('software.products.title')}</Title>
        <Divider
          bgcolor={
            isSoftware ? theme.colors.blue.lightness5 : theme.colors.lime.base
          }
        />
      </Stack>
      <Content direction={'row'}>
        {productData.map((item, index) => {
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
                mt={2}
                mb={1}
              >
                <Typography variant={'body2'} fontWeight={300}>
                  {t('software.products.project')}
                </Typography>
                <Typography fontWeight={700}>{item.projectName}</Typography>
              </Stack>
              <Stack direction={'row'} gap={1.25} mb={4.125}>
                <Typography variant={'body2'} fontWeight={300}>
                  {t('software.products.describe')}
                </Typography>
                <Typography variant={'body2'} fontWeight={400}>
                  {item.describe}
                </Typography>
              </Stack>
              <BlueButton
                height={34}
                width={100}
                onPress={onViewCase}
                corner={'noBorder'}
                textStyle={{ fontSize: 16, lineHeight: ' 20.8px' }}
              >
                {t('software.products.viewCase')}
              </BlueButton>
            </Stack>
          );
        })}
      </Content>
      <Cycle />
    </Container>
  );
};
export default Products;

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
  gap: theme.spacing(21.25),
  overflowX: 'scroll',
  width: '100vw',
  padding: theme.spacing(10, 12.875, 0),
}));
const ProductImg = styled(Stack)(() => ({
  width: 250,
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
const Cycle = styled(Stack)(({ theme }) => ({
  width: 30,
  height: 30,
  borderRadius: 60,
  backgroundColor: theme.colors.blue.lightness5,
  marginTop: theme.spacing(14.875),
}));
