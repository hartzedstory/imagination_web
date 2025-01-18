import React, { useCallback } from 'react';
import {
  StackedCarousel,
  ResponsiveContainer,
} from 'react-stacked-center-carousel';
import { Stack, styled, useMediaQuery, useTheme } from '@mui/material';
import {
  SLIDE_HEIGHT_FULL,
  SLIDE_HEIGHT_SM,
  SLIDE_WIDTH_FULL,
  SLIDE_WIDTH_SM,
} from './Platform';
import { ReactComponent as PrevIcon } from 'assets/svgs/prev.svg';
import { ReactComponent as NextIcon } from 'assets/svgs/next.svg';

const data = [
  {
    cover: require('../../assets/images/google_play.png'),
    title: 'Jujutsu',
  },
  {
    cover: require('../../assets/images/app_store.png'),
    title: 'Goku',
  },
];

export default function SliderComponent() {
  const ref = React.useRef<StackedCarousel | undefined>();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handlePrev = useCallback(() => {
    ref.current?.goBack();
  }, []);
  const handleNext = useCallback(() => {
    ref.current?.goNext();
  }, []);

  return (
    <>
      <ResponsiveContainer
        carouselRef={ref}
        render={(parentWidth, carouselRef) => {
          return (
            <StackedCarousel
              ref={carouselRef}
              data={data}
              carouselWidth={parentWidth}
              slideWidth={isMobile ? SLIDE_WIDTH_SM : SLIDE_WIDTH_FULL}
              height={isMobile ? SLIDE_HEIGHT_SM : SLIDE_HEIGHT_FULL}
              slideComponent={Slide}
              maxVisibleSlide={3}
              currentVisibleSlide={3}
              useGrabCursor={true}
              customScales={[1, 0.5, 0.5]}
            />
          );
        }}
      />
      <Stack
        position={'absolute'}
        left={-75}
        height={'100%'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <ButtonIcon onClick={handlePrev}>
          <PrevIcon />
        </ButtonIcon>
      </Stack>
      <Stack
        position={'absolute'}
        right={-75}
        height={'100%'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <ButtonIcon onClick={handleNext}>
          <NextIcon />
        </ButtonIcon>
      </Stack>
    </>
  );
}

const Slide = function (props: any) {
  const { data, dataIndex, isCenterSlide } = props;
  const { cover } = data[dataIndex];
  return (
    <div
      style={{
        borderRadius: 15,
        opacity: isCenterSlide ? 1 : 0.5,
        height: '100%',
      }}
    >
      <img
        style={{
          width: '100%',
          height: '100%',
        }}
        draggable={false}
        src={cover}
        alt={'test'}
      />
    </div>
  );
};
const ButtonIcon = styled(Stack)(
  () => `
  border: 1px solid #03EFEF;
  justify-content: center;
  align-items: center;
  height: 75px;
  width: 75px;
  border-radius: 150px;
  cursor: pointer;
    &:hover {
       opacity: 0.5;
    }
    `,
);
