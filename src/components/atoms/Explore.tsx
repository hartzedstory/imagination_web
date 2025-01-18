import React, { FC } from 'react';
import { Stack, styled, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ReactComponent as ArrowLeft } from 'assets/svgs/arrow_left.svg';
import { ReactComponent as ArrowRight } from 'assets/svgs/arrow_right.svg';

interface ExploreProps {
  order: number;
  onSeeMore: () => void;
}
const Explore: FC<ExploreProps> = ({ order, onSeeMore }) => {
  const { t } = useTranslation();

  return (
    <Container>
      <SeeMore isOrder1={order === 1} order={order === 1 ? 1 : 2}>
        <Stack
          sx={{ cursor: 'pointer' }}
          onClick={onSeeMore}
          direction={'row'}
          alignItems={'center'}
        >
          <Stack order={order === 1 ? 1 : 2}>
            {order === 1 ? <ArrowLeft /> : <ArrowRight />}
          </Stack>
          <Stack order={order === 1 ? 2 : 1}>
            <SeeMoreText>{t('explore.seeMore')}</SeeMoreText>
          </Stack>
        </Stack>
      </SeeMore>
      <Stack
        width={'100%'}
        height={'100%'}
        order={order === 1 ? 2 : 1}
        flex={1}
      >
        <Image
          src={
            order === 1
              ? require('../../assets/images/explore1.png')
              : require('../../assets/images/explore2.png')
          }
        />
      </Stack>
    </Container>
  );
};
export default Explore;

const Container = styled(Stack)(() => ({
  flex: 1,
  flexDirection: 'row',
}));
const Image = styled('img')(() => ({
  width: '100%',
  objectFit: 'fill',
}));
const SeeMoreText = styled(Typography)(({ theme }) => ({
  fontSize: 24,
  lineHeight: '31.2px',
  color: theme.colors.black.base,
  fontWeight: 500,
}));
const SeeMore = styled(Stack, {
  shouldForwardProp: props => props !== 'isOrder1',
})<{ isOrder1: boolean }>(({ theme, isOrder1 }) => ({
  flex: 0.25,
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(1),
  backgroundColor: isOrder1
    ? theme.colors.lime.base
    : theme.colors.blue.lightness5,
}));
