import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';

const DropdownLanguage = () => {
  const {i18n} = useTranslation();
  const [language, setLanguage] = useState('en');

  const handleLangChange = (evt) => {
    const lang = evt.target.value;
    console.log(lang);
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <select className="language-selector" onChange={handleLangChange} value={language}>
      <option value="de">DE</option>
      <option value="en">EN</option>
    </select>
  );
};

export default DropdownLanguage;
