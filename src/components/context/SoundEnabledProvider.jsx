'use client';

import { createContext, useContext, useState } from 'react';

const SoundEnabledContext = createContext();

function SoundEnabledProvider({ children }) {
  const [soundEnabled, setSoundEnabled] = useState(false);

  return (
    <SoundEnabledContext.Provider value={{ soundEnabled, setSoundEnabled }}>
      {children}
    </SoundEnabledContext.Provider>
  );
}

export function useSoundEnabled() {
  const data = useContext(SoundEnabledContext);

  return data;
}

export default SoundEnabledProvider;
