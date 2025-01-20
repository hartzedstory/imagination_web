import React, { FC } from 'react';
import { Stack, styled } from '@mui/material';
import { memberFusionData } from '../../constants/MockData';

interface MemberFusionProps {}
const MemberFusion: FC<MemberFusionProps> = () => {
  return (
    <Container>
      <Logo
        src={require('../../assets/images/member_imagin_fusion_logo.png')}
        alt={'imaginStudio logo'}
      />
      <Content direction={'row'}>
        {memberFusionData.map(item => {
          return (
            <Wrapper key={item.id}>
              <Stack width={'360px'} height={'480px'} />
            </Wrapper>
          );
        })}
      </Content>
    </Container>
  );
};
export default MemberFusion;

const Container = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(5.25),
  padding: theme.spacing(6.5, 0, 9),
  alignItems: 'center',
  backgroundColor: theme.colors.blue.lightness5,
}));
const Logo = styled('img')(() => ({
  height: 53.31,
  width: 'auto',
}));
const Wrapper = styled(Stack)(() => ({
  backgroundColor: '#00DCDC',
}));
const Content = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(6.25),
  overflowX: 'scroll',
  width: '100vw',
  padding: theme.spacing(0, 6.5),
}));
