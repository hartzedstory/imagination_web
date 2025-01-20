import React, { FC } from 'react';
import { Stack, styled, Typography } from '@mui/material';
import { memberData } from '../../constants/MockData';

interface MemberProps {}
const Member: FC<MemberProps> = () => {
  return (
    <Container>
      <Logo
        src={require('../../assets/images/member_imagin_studio_logo.png')}
        alt={'imaginStudio logo'}
      />
      <Content direction={'row'}>
        {memberData.map(item => {
          return (
            <Wrapper key={item.id}>
              <ProductImg bgcolor={'#969696'}></ProductImg>
              <Stack gap={1} mt={4.625} alignItems={'center'}>
                <Typography
                  fontSize={24}
                  lineHeight={'31.2px'}
                  fontWeight={700}
                  color={'#000000'}
                >
                  {item.name}
                </Typography>
                <Typography
                  fontWeight={400}
                  fontSize={15}
                  lineHeight={'19.5px'}
                  color={'#000000'}
                >
                  {item.role}
                </Typography>
              </Stack>
            </Wrapper>
          );
        })}
      </Content>
    </Container>
  );
};
export default Member;

const Container = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(5.25),
  padding: theme.spacing(6.5, 0, 9),
  alignItems: 'center',
  backgroundColor: theme.colors.lime.base,
}));
const Logo = styled('img')(() => ({
  height: 53.31,
  width: 'auto',
}));
const Wrapper = styled(Stack)(({ theme }) => ({
  backgroundColor: '#96ED12',
  padding: theme.spacing(3.5, 3.75, 7.25),
}));
const Content = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(6.25),
  overflowX: 'scroll',
  width: '100vw',
  padding: theme.spacing(0, 6.5),
}));
const ProductImg = styled(Stack)(() => ({
  width: 300,
  height: 300,
}));
