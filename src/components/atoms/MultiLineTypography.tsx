import { styled } from '@mui/system';
import { Typography } from '@mui/material';

export const MultiLineTypography = styled(Typography)`
  white-space: pre-line;
  word-break: break-word;
  overflow-wrap: break-word;
  hyphens: none;
`;
