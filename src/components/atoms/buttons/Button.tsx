import * as React from 'react';
import { FC, ReactNode, useCallback, useMemo, useState } from 'react';
import {
  Box,
  Card,
  CardActionArea,
  CircularProgress,
  Stack,
  styled,
  useTheme,
} from '@mui/material';
import isPromise from 'is-promise';

interface ButtonBgProps {
  width?: number;
  height: number;
  corner:
    | 'rounded'
    | 'largeRounded'
    | 'curved'
    | 'sharp'
    | 'topRounded'
    | 'bottomRounded'
    | 'noBorder';
  bordered: boolean;
  backgroundColor: string;
  disabledBackgroundColor?: string;
  disabled: boolean;
  borderColor: string;
}
const getBorderNumber = (
  p: ButtonBgProps,
  type: 'topRounded' | 'bottomRounded',
) => {
  if (p.corner === 'curved') return p.height / 2;
  if (p.corner === 'largeRounded') return 12;
  if (p.corner === 'rounded' || p.corner === type) return 4;
  return 0;
};
const getBorderRadius = (
  p: ButtonBgProps,
  type: 'topRounded' | 'bottomRounded',
) => {
  if (p.corner === 'noBorder') return '0';
  if (type === 'topRounded') return `${getBorderNumber(p, 'topRounded')}px`;
  return `${getBorderNumber(p, 'bottomRounded')}px`;
};
const ButtonBgView = styled(Stack, {
  shouldForwardProp: props => props !== 'styleCustom',
})<{ styleCustom: ButtonBgProps }>(
  ({ styleCustom }) => `
  position: relative;
  height: ${styleCustom.height}px;
  max-height: ${styleCustom.height ? `${styleCustom.height}px` : 'auto'};
  width: ${styleCustom.width ? `${styleCustom.width}px` : 'auto'};
  max-width: ${styleCustom.width ? `${styleCustom.width}px` : 'auto'};
  background-color: ${
    styleCustom.disabled
      ? (styleCustom.disabledBackgroundColor ?? styleCustom.backgroundColor)
      : styleCustom.backgroundColor
  };
  opacity: ${styleCustom.disabled ? '0.4' : '1'};
  border-top-left-radius: ${getBorderRadius(styleCustom, 'topRounded')};
  border-top-right-radius: ${getBorderRadius(styleCustom, 'topRounded')};
  border-bottom-left-radius: ${getBorderRadius(styleCustom, 'bottomRounded')};
  border-bottom-right-radius: ${getBorderRadius(styleCustom, 'bottomRounded')};
  border: ${styleCustom.bordered ? 2 : 1}px solid ${styleCustom.borderColor};
  overflow: hidden;
  flex-grow: 1;
`,
);
const ButtonWrapper = styled(Card)(
  () => `
  flex: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 0;
  box-shadow: none;
  align-self: center;
  background-color: transparent;
  width: 100%;
  height: 100%;
`,
);
const ButtonInnerView = styled(Stack)`
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
const RightSideActivityIndicator = styled(CircularProgress)`
  position: absolute;
  right: 24px;
`;
interface ButtonProps {
  isMonoChrome?: boolean;
  width?: number;
  disabled?: boolean;
  onPress?(e: React.MouseEvent<HTMLElement, MouseEvent>): void | Promise<void>;
  children?: string | ReactNode | ReactNode[];
  height?: 24 | 28 | 32 | 34 | 36 | 40 | 48 | 56;
  corner?:
    | 'rounded'
    | 'largeRounded'
    | 'curved'
    | 'sharp'
    | 'topRounded'
    | 'bottomRounded'
    | 'noBorder';
  bordered?: boolean;
  loading?: boolean;
  LeftSideIcon?: React.ReactElement;
  RightSideIcon?: React.ReactElement;
  style?: React.CSSProperties;
  textStyle?: React.CSSProperties;
}
const ButtonBase: FC<
  ButtonProps & {
    backgroundColor: string;
    disabledBackgroundColor?: string;
    borderColor: string;
    disabledTextColor: string;
    enabledTextColor: string;
  }
> = ({
  children,
  onPress,
  width,
  disabled = false,
  height = 56,
  corner = 'curved',
  bordered = false,
  backgroundColor,
  disabledBackgroundColor,
  borderColor,
  disabledTextColor,
  enabledTextColor,
  loading,
  style,
  textStyle,
  LeftSideIcon,
  RightSideIcon,
}) => {
  const [processing, setProcessing] = useState(false);
  const _disabled = useMemo(
    () => !onPress || disabled || processing,
    [onPress, disabled, processing],
  );
  const handlePress = useCallback(
    (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
      if (_disabled || !onPress) {
        return;
      }
      const pressed = onPress(e);
      if (isPromise(pressed)) {
        setProcessing(true);
        pressed?.finally(() => setProcessing(false));
      }
    },
    [_disabled, onPress],
  );
  return (
    <ButtonBgView
      styleCustom={{
        width,
        height,
        corner,
        bordered,
        backgroundColor,
        disabledBackgroundColor,
        borderColor,
        disabled,
      }}
      style={style}
    >
      <ButtonWrapper onClick={handlePress}>
        <CardActionArea sx={{ height: '100%' }}>
          <ButtonInnerView>
            <Box
              color={
                disabled || loading || processing
                  ? disabledTextColor
                  : enabledTextColor
              }
              fontFamily='Aeonik'
              fontWeight={700}
              fontSize={16}
              lineHeight={'20.8px'}
              sx={textStyle}
            >
              {children}
            </Box>
            {LeftSideIcon !== undefined && LeftSideIcon}
            {(loading || processing) && (
              <RightSideActivityIndicator color={'inherit'} size={20} />
            )}
            {RightSideIcon !== undefined && RightSideIcon}
          </ButtonInnerView>
        </CardActionArea>
      </ButtonWrapper>
    </ButtonBgView>
  );
};
export const Button: FC<ButtonProps & { invert?: boolean }> = ({
  invert,
  ...props
}) => {
  const theme = useTheme();
  if (invert) {
    return <ButtonSecondary {...props} />;
  }
  return (
    <ButtonBase
      {...props}
      backgroundColor={theme.colors.lime.base}
      disabledBackgroundColor={theme.colors.lime.lightness2}
      borderColor={theme.colors.lime.base}
      disabledTextColor={theme.colors.gray.base}
      enabledTextColor={theme.colors.black.base}
    />
  );
};
export const ButtonSecondary: FC<
  ButtonProps & { invert?: boolean; borderColor?: string; isActive?: boolean }
> = ({ invert, borderColor, isActive, ...props }) => {
  const theme = useTheme();
  if (invert) {
    return <Button {...props} />;
  }
  if (isActive) {
    return <PurpleButton {...props} />;
  }
  return (
    <ButtonBase
      {...props}
      backgroundColor={theme.colors.black.base}
      borderColor={borderColor ?? theme.colors.lime.base}
      disabledTextColor={theme.colors.gray.base}
      enabledTextColor={theme.colors.white.base}
    />
  );
};
export const PurpleButton: FC<ButtonProps> = props => {
  const theme = useTheme();
  return (
    <ButtonBase
      {...props}
      backgroundColor={theme.colors.purple.base}
      borderColor={theme.colors.purple.base}
      disabledTextColor={theme.colors.gray.base}
      enabledTextColor={theme.colors.white.base}
    />
  );
};

export const BlueButton: FC<ButtonProps> = props => {
  const theme = useTheme();
  return (
    <ButtonBase
      {...props}
      backgroundColor={'#03EFEF'}
      borderColor={'#03EFEF'}
      disabledTextColor={theme.colors.gray.base}
      enabledTextColor={'#000000'}
    />
  );
};

export default Button;
