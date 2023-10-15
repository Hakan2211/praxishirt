'use client';

import { View } from '@/components/canvas/View';
import { useSoundEnabled } from '@/components/context/SoundEnabledProvider';
import { PositionalAudio } from '@react-three/drei';
import React from 'react';

function Homepage() {
  const { soundEnabled } = useSoundEnabled();
  return (
    <>
      <div>Homepage</div>
      <View>
        {soundEnabled && (
          <PositionalAudio
            distance={2}
            autoplay
            loop
            url="../../../audio_background/Flight of the Inner Bird (Slowed Reverb).mp3"
          />
        )}
      </View>
    </>
  );
}

export default Homepage;
