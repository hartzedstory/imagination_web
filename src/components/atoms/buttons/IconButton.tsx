import React, { FC, ReactElement } from 'react';
import { Box, styled } from '@mui/material';

const WrapperIcon = styled(Box)(
  () => `
  height: max-content;
  svg {
    cursor: pointer;
    &:hover {
       opacity: 0.5;
    }
  }
    `,
);

type IconButtonProps = {
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  icon?: ReactElement;
};

const IconButton: FC<IconButtonProps> = ({ onClick, icon }) => {
  return <WrapperIcon onClick={onClick}>{icon}</WrapperIcon>;
};

export default IconButton;
