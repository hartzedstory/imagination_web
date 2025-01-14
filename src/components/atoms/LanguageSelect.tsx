import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import {
  MenuItem,
  Select,
  styled,
  Stack,
  useTheme,
  Typography,
} from '@mui/material';
import { ReactComponent as ExpandDown } from 'assets/svgs/expand_down.svg';
import { useParams } from 'react-router';
import { useLocation, useNavigate } from 'react-router-dom';

interface LanguageOption {
  value: string;
  label: string;
  flagUrl: string;
}

const LanguageSelect: FC = () => {
  const { lang } = useParams();

  const [language, setLanguage] = useState<string>(lang ?? 'en');
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();

  const languages: LanguageOption[] = useMemo(
    () => [
      {
        value: 'en',
        flagUrl: require('../../assets/images/flag_uk.png'),
        label: 'English',
      },
      {
        value: 'vi',
        flagUrl: require('../../assets/images/flag_vn.png'),
        label: 'Vietnamese',
      },
    ],
    [],
  );

  const isAvailable = useMemo(
    () => languages.some(item => item.value === lang),
    [lang, languages],
  );

  useEffect(() => {
    if (isAvailable && lang) {
      setLanguage(lang);
    } else {
      setLanguage('en');
    }
  }, [isAvailable, lang]);

  const handleChange = useCallback(
    event => {
      const currentPath = location.pathname.replace(
        `/${lang}`,
        `/${event.target.value}`,
      );
      setLanguage(event.target.value);
      navigate(currentPath);
    },
    [lang, location.pathname, navigate],
  );

  const selectedLanguage = useMemo(
    () => languages.find(lang => lang.value === language),
    [language, languages],
  );

  return (
    <CustomSelect
      value={language}
      onChange={handleChange}
      IconComponent={ExpandDown}
      MenuProps={{
        PaperProps: {
          style: { backgroundColor: theme.colors.black.lightness1 },
          component: DropdownMenu,
        },
      }}
      renderValue={() => (
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='space-between'
          flex={1}
        >
          <Stack direction='row' alignItems='center' gap={1}>
            {selectedLanguage && (
              <FlagIcon
                src={selectedLanguage.flagUrl}
                alt={selectedLanguage.label}
              />
            )}
          </Stack>
        </Stack>
      )}
    >
      {languages.map(lang => (
        <MenuItem key={lang.value} value={lang.value}>
          <Typography fontWeight={400}>{lang.label}</Typography>
        </MenuItem>
      ))}
    </CustomSelect>
  );
};

export default LanguageSelect;

const FlagIcon = styled('img')`
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

const CustomSelect = styled(Select)`
  & .MuiSelect-select {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 16px;
    font-size: 16px;
    font-weight: bold;
    color: white;
    background-color: transparent;
  }

  & .MuiOutlinedInput-notchedOutline {
    border: none;
  }

  & .MuiSvgIcon-root {
    color: white;
  }

  & .MuiSelect-icon {
    top: 50%;
    transform: translateY(-50%);
  }
`;

const DropdownMenu = styled(Stack)`
  background-color: #1f1f1f;
  color: white;
  border-radius: 4px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);

  & .MuiMenuItem-root {
    font-size: 16px;
    padding: 8px 20px;

    &:hover {
      background-color: #2c2c2c;
    }
  }
  & .MuiMenu-list {
    padding-top: 0;
    padding-bottom: 0;
  }
`;
