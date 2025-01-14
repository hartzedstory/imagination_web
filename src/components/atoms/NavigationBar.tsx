import React, { FC, useMemo } from 'react';
import { Stack, styled } from '@mui/material';
import { ReactComponent as NavIconHome } from 'assets/svgs/nav_icon_home.svg';
import { ReactComponent as NavIconSoftware } from 'assets/svgs/nav_icon_software.svg';
import { useLocation, useNavigate, useParams } from 'react-router';
import { RouterPathName } from '../../containers/Router';
import LanguageSelect from './LanguageSelect';
import { useTranslation } from 'react-i18next';

interface NavigationBarProps {}
const NavigationBar: FC<NavigationBarProps> = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const { lang } = useParams();
  const navigate = useNavigate();

  const isSoftware = useMemo(
    () => location.pathname === `/${lang}/${RouterPathName.software}`,
    [lang, location.pathname],
  );

  const tabs = [
    { label: t('nav.home'), pathname: `/${lang}` },
    { label: 'Software', pathname: `/${lang}/${RouterPathName.software}` },
    { label: 'Media', pathname: `/${lang}/${RouterPathName.media}` },
    { label: 'About Us', pathname: `/${lang}/${RouterPathName.aboutUs}` },
  ];

  return (
    <Container>
      {isSoftware ? <NavIconSoftware /> : <NavIconHome />}
      <Wrapper>
        {tabs.map(item => (
          <ButtonLink
            key={item.pathname}
            active={location.pathname === item.pathname}
            onClick={() => navigate(item.pathname)}
          >
            {item.label}
          </ButtonLink>
        ))}
      </Wrapper>
      <LanguageSelect />
    </Container>
  );
};
export default NavigationBar;

const Container = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(6.5, 12.5),
  borderBottom: `1px solid ${theme.colors.lime.base}`,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(3.5, 5),
  },
}));
const Wrapper = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(9.5),
  flexDirection: 'row',
  [theme.breakpoints.down('md')]: {
    gap: theme.spacing(3),
  },
}));
const ButtonLink = styled(Stack, {
  shouldForwardProp: props => props !== 'active',
})<{ active?: boolean }>(({ theme, active }) => ({
  padding: theme.spacing(0.5625, 1.75, 0.8125),
  border: `1px solid ${theme.colors.lime.base}`,
  color: active ? theme.colors.black.base : theme.colors.white.base,
  fontWeight: 700,
  fontSize: 16,
  lineHeight: '20.8px',
  cursor: 'pointer',
  backgroundColor: active ? theme.colors.lime.base : 'none',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: theme.colors.lime.base,
    color: theme.colors.black.base,
    borderColor: theme.colors.black.base,
  },
}));
