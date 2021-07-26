import React from 'react';
import Header, {CovidPopUp} from './Header';

export default function Root({transparentHeader, children}) {
  return (
    <>
      <Header transparent={transparentHeader} />
      {children}
    </>
  );
}
