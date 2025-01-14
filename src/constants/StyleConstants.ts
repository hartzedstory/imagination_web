import { Stack, styled } from '@mui/material';

export const MAX_WIDTH = 450;
export const MIN_WIDTH_LEFT_1 = 515;
export const MIN_WIDTH_LEFT_2 = 292;

export const GlobalResultWrapper = styled(Stack)(
  ({ theme }) => `
  position: absolute;
  height: 100%;
  overflow: hidden;
  ${theme.breakpoints.down('sm')} {
    padding-left: 0;
  }
`,
);

export const GlobalResultContent = styled(Stack, {
  shouldForwardProp: props => props !== 'w',
})<{ w: number }>(
  ({ w }) => `
  width: ${w}px;
  height: 100%;
  position: relative;
`,
);
