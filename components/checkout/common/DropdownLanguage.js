import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';

const DropdownLanguage = () => {
  const {i18n} = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const handleLangChange = (evt) => {
    const lang = evt.target.value;
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
