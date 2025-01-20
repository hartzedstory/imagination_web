import React, { FC } from 'react';
import { Stack, styled, Typography, useTheme } from '@mui/material';
import { MultiLineTypography } from './MultiLineTypography';

interface ContentLegalInformationProps {
  title: string;
  description: string;
  hideCheckPoint?: boolean;
}
const ContentLegalInformation: FC<ContentLegalInformationProps> = ({
  title,
  description,
  hideCheckPoint,
}) => {
  const theme = useTheme();
  return (
    <Container>
      {!hideCheckPoint && <Cycle />}
      <Stack alignItems={'center'}>
        <Title>{title}</Title>
        <Divider bgcolor={theme.colors.lime.base} />
      </Stack>
      <Stack width={'100%'}>
        <Description>{description}</Description>
      </Stack>
    </Container>
  );
};
export default ContentLegalInformation;

const Container = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(5.25),
  alignItems: 'center',
  padding: theme.spacing(0, 5.25, 10.75),
}));
const Title = styled(Typography)(() => ({
  fontSize: 48,
  lineHeight: '62.4px',
  fontWeight: 700,
}));
const Description = styled(MultiLineTypography)(() => ({
  fontSize: 20,
  lineHeight: '26px',
  fontWeight: 400,
}));
const Cycle = styled(Stack)(({ theme }) => ({
  width: 30,
  height: 30,
  borderRadius: 60,
  marginBottom: theme.spacing(12.25),
  backgroundColor: theme.colors.lime.base,
}));
const Divider = styled(Stack)(({ theme }) => ({
  width: 150,
  height: 1,
  marginTop: theme.spacing(1),
}));
