'use client';

import useMobileSize from '@/hooks/useMobile';
import { createContext, useContext, useState, useEffect } from 'react';

const IsMobileContext = createContext();

function IsMobileProvider({ children }) {
  const [isMobile, setIsMobile] = useMobileSize();

  return (
    <IsMobileContext.Provider value={{ isMobile, setIsMobile }}>
      {children}
    </IsMobileContext.Provider>
  );
}

export function useMobile() {
  const data = useContext(IsMobileContext);

  return data;
}

export default IsMobileProvider;
