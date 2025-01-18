import React, { FC } from 'react';
import { Stack, styled, Typography, useTheme } from '@mui/material';
import { MultiLineTypography } from './MultiLineTypography';

interface ContentBoxProps {
  title: string;
  description: string;
  isSoftware?: boolean;
}
const ContentBox: FC<ContentBoxProps> = ({
  title,
  description,
  isSoftware,
}) => {
  const theme = useTheme();
  return (
    <Container>
      <Stack alignItems={'center'}>
        <Title>{title}</Title>
        <Divider
          bgcolor={
            isSoftware ? theme.colors.blue.lightness5 : theme.colors.lime.base
          }
        />
      </Stack>
      <Description>{description}</Description>
      <Cycle
        bgcolor={
          isSoftware ? theme.colors.blue.lightness5 : theme.colors.lime.base
        }
      />
    </Container>
  );
};
export default ContentBox;

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
  textAlign: 'center',
  fontWeight: 400,
}));
const Cycle = styled(Stack)(({ theme }) => ({
  width: 30,
  height: 30,
  borderRadius: 60,
  marginTop: theme.spacing(14.625),
}));
const Divider = styled(Stack)(({ theme }) => ({
  width: 150,
  height: 1,
  marginTop: theme.spacing(1),
}));
