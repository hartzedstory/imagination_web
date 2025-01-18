import React, { FC, useCallback, useEffect, useState } from 'react';
import { ButtonBase, Stack, styled, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ReactComponent as ArrowRight } from 'assets/svgs/arrow_right.svg';
import { ReactComponent as ArrowRightWhite } from 'assets/svgs/arrow_right_white.svg';
import Button from './buttons/Button';
import {
  YouTubeVideoItem,
  YouTubeVideoResponse,
  Thumbnails,
} from '../../types/youtubeContent';
import axios from 'axios';
import { youtubeInhouseData } from '../../constants/MockData';
import useOpenLink from '../../hooks/useOpenLink';

const API_KEY = 'AIzaSyDh9LEWHO9FaUDYJsXAMQmJ4R089FQ3GVE';
const API_URL = `https://www.googleapis.com/youtube/v3/videos`;

interface YoutubeInhouseProps {}
const YoutubeInhouse: FC<YoutubeInhouseProps> = () => {
  const [videoData, setVideoData] = useState<YouTubeVideoItem[]>([]);

  const { openLink } = useOpenLink();
  const { t } = useTranslation();
  console.log('videoData', videoData);
  useEffect(() => {
    const fetchVideos = async () => {
      const promises = youtubeInhouseData.map(item =>
        axios.get<YouTubeVideoResponse>(API_URL, {
          params: {
            id: item.youtubeKey,
            part: 'snippet,contentDetails,statistics',
            key: API_KEY,
          },
        }),
      );
      const responses = await Promise.all(promises);
      const allVideos = responses
        .map(response => response.data.items[0])
        .filter((item): item is YouTubeVideoItem => !!item);
      setVideoData(allVideos);
    };

    fetchVideos();
  }, []);

  const getThumbNail = useCallback((thumbNails: Thumbnails) => {
    if (thumbNails.maxres) {
      return thumbNails.maxres;
    }
    if (thumbNails.standard) {
      return thumbNails.standard;
    }
    if (thumbNails.high) {
      return thumbNails.high;
    }
    if (thumbNails.medium) {
      return thumbNails.medium;
    }
    return thumbNails.default;
  }, []);

  const handleWatchNow = useCallback(
    (e, id: string) => {
      openLink(e, `https://www.youtube.com/watch?v=${id}`);
    },
    [openLink],
  );

  return (
    <Container>
      <Stack alignItems={'center'}>
        <Title>{t('media.youtubeInhouse.title')}</Title>
        <Divider />
      </Stack>
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        width={'100%'}
        mt={4.25}
      >
        <Typography fontSize={24} fontWeight={400} lineHeight={'31.2px'}>
          {t('media.youtubeInhouse.label')}
        </Typography>
        <Button
          height={34}
          width={145}
          corner={'noBorder'}
          onPress={e => openLink(e, 'https://www.youtube.com/@imaginstudio304')}
          RightSideIcon={<ArrowRight height={34} width={34} />}
        >
          {t('media.youtubeInhouse.seeMore')}
        </Button>
      </Stack>
      <Stack mt={5.375} width={'100%'} gap={4.5}>
        {videoData.map(item => {
          const thumbNail = getThumbNail(item.snippet.thumbnails);

          return (
            <Wrapper key={item.id}>
              <ThumbnailImg
                src={thumbNail.url}
                width={thumbNail.width}
                height={thumbNail.height}
              />
              <LocalizedWrapper>
                <Stack gap={2.25}>
                  <TitleLocalized>{item.snippet.title}</TitleLocalized>
                  <DescriptionLocalized>
                    {item.snippet.description}
                  </DescriptionLocalized>
                </Stack>
                <Stack
                  direction={'row'}
                  justifyContent={'flex-end'}
                  alignItems={'center'}
                >
                  <ButtonBase onClick={e => handleWatchNow(e, item.id)}>
                    <Typography fontSize={20} lineHeight={'26px'} mb={0.5}>
                      {t('media.youtubeInhouse.watchNow')}
                    </Typography>
                    <ArrowRightWhite height={35} width={35} />
                  </ButtonBase>
                </Stack>
              </LocalizedWrapper>
            </Wrapper>
          );
        })}
      </Stack>
    </Container>
  );
};
export default YoutubeInhouse;

const Container = styled(Stack)(({ theme }) => ({
  width: '100%',
  alignItems: 'center',
  padding: theme.spacing(0, 11.375, 15),
}));
const ThumbnailImg = styled('img')(() => ({
  width: '40%',
  height: 'auto',
  objectFit: 'fill',
}));
const Title = styled(Typography)(() => ({
  fontSize: 48,
  lineHeight: '62.4px',
  fontWeight: 700,
}));
const Divider = styled(Stack)(({ theme }) => ({
  width: 150,
  height: 1,
  marginTop: theme.spacing(1),
  backgroundColor: theme.colors.lime.base,
}));
const Wrapper = styled(Stack)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(4.5, 6.5, 4.5, 4.5),
  gap: theme.spacing(4.5),
  backgroundColor: '#1F1F1F',
  flexDirection: 'row',
  flex: 1,
}));
const LocalizedWrapper = styled(Stack)(({ theme }) => ({
  flexDirection: 'column',
  flex: 1,
  padding: theme.spacing(2, 0, 0.5),
  justifyContent: 'space-between',
}));
const TitleLocalized = styled(Typography)(
  () => `
  display: -webkit-box;
  -webkit-line-clamp: 1; 
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 22px;
  line-height: 28.6px;
  font-weight: 500;
`,
);
const DescriptionLocalized = styled(Typography)(
  () => `
  display: -webkit-box;
  -webkit-line-clamp: 2; 
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 300;
`,
);
