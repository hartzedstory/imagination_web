import React, { useCallback } from 'react';
import { Stack, styled, Typography } from '@mui/material';
import { Trans, useTranslation } from 'react-i18next';
import useOpenLink from '../../hooks/useOpenLink';
import { ReactComponent as Facebook } from 'assets/svgs/social_fb.svg';
import { ReactComponent as Youtube } from 'assets/svgs/social_ytb.svg';
import { ReactComponent as Instagram } from 'assets/svgs/social_ig.svg';
import IconButton from './buttons/IconButton';
import { useParams } from 'react-router';
import { RouterPathName } from '../../containers/Router';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const { lang } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { openLink } = useOpenLink();

  const handleLegal = useCallback(() => {
    navigate(`/${lang}/${RouterPathName.legalInformation}`);
  }, [lang, navigate]);
  return (
    <Container>
      <Stack>
        <Title>{t('footer.title')}</Title>
      </Stack>
      <Content>
        <Logo src={require('../../assets/images/footer_logo.png')} />
        <Stack gap={2.5}>
          <Typography fontWeight={700} fontSize={22} lineHeight={'28.6px'}>
            {t('footer.legalInformation')}
          </Typography>
          <Link onClick={handleLegal}>{t('footer.privacyPolicy')}</Link>
          <Link onClick={handleLegal}>{t('footer.termAndConditions')}</Link>
        </Stack>
        <Stack gap={2.5}>
          <Typography fontWeight={700} fontSize={22} lineHeight={'28.6px'}>
            {t('footer.contactUs')}
          </Typography>
          <Typography component={'strong'}>
            <Trans i18nKey={'footer.businessCode'}>
              <Typography fontWeight={700} component={'strong'} />
            </Trans>
          </Typography>
          <Typography component={'strong'}>
            <Trans i18nKey={'footer.coo'}>
              <Typography fontWeight={700} component={'strong'} />
            </Trans>
          </Typography>
          <Typography component={'strong'}>
            <Trans i18nKey={'footer.email'}>
              <Typography fontWeight={700} component={'strong'} />
            </Trans>
          </Typography>
          <Typography component={'strong'}>
            <Trans i18nKey={'footer.address'}>
              <Typography fontWeight={700} component={'strong'} />
            </Trans>
          </Typography>
        </Stack>
      </Content>
      <Social>
        <IconButton
          icon={<Facebook />}
          onClick={e => openLink(e, 'https://www.facebook.com/hartzed.story/')}
        />
        <IconButton
          icon={<Youtube />}
          onClick={e => openLink(e, 'https://www.youtube.com/@imaginstudio304')}
        />
        <IconButton
          icon={<Instagram />}
          onClick={e =>
            openLink(
              e,
              'https://www.instagram.com/imagin.studio_imm?igsh=OGxiODJyN3NnZXFy',
            )
          }
        />
      </Social>
    </Container>
  );
};
export default Footer;

const Container = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.colors.black.lightness1,
  padding: theme.spacing(8.625, 12),
}));
const Title = styled(Typography)(({ theme }) => ({
  color: theme.colors.lime.base,
  fontSize: 32,
  lineHeight: '41.6px',
  fontWeight: 700,
}));
const Logo = styled('img')(() => ({
  width: 231,
  height: 75,
}));
const Content = styled(Stack)(({ theme }) => ({
  marginTop: theme.spacing(22.25),
  marginBottom: theme.spacing(13.875),
  justifyContent: 'space-between',
  flexDirection: 'row',
}));
const Social = styled(Stack)(({ theme }) => ({
  marginBottom: theme.spacing(3.75),
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(5.625),
}));
const Link = styled(Typography)(() => ({
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline',
  },
}));
