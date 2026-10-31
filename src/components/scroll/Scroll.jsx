'use client';

import { useFrame, useThree } from '@react-three/fiber';
import { easing } from 'maath';
import { useEffect, useRef } from 'react';

/**
 * Moves the camera down through a vertical stack of 3D models in sync with the
 * HTML sections marked with `data-scene-section`.
 *
 * Section N (its top reaching the top of the viewport) maps to
 * camera.y = -N * spacing, interpolating between sections. Because the mapping
 * is based on the real section positions, text and models stay aligned no
 * matter the screen height or how tall a section's content is.
 */
function Scroll({ spacing = 1.2, smoothing = 0.25 }) {
  const camera = useThree((state) => state.camera);
  const target = useRef(0);

  useEffect(() => {
    let sectionTops = [];

    const measure = () => {
      sectionTops = Array.from(
        document.querySelectorAll('[data-scene-section]')
      ).map((el) => el.getBoundingClientRect().top + window.scrollY);
    };

    const update = () => {
      const y = window.scrollY;
      if (sectionTops.length < 2) {
        target.current = (y / window.innerHeight) * spacing;
        return;
      }
      const last = sectionTops.length - 1;
      let progress = last;
      for (let i = 0; i < last; i++) {
        if (y < sectionTops[i + 1]) {
          const span = sectionTops[i + 1] - sectionTops[i] || 1;
          progress = i + Math.max(0, (y - sectionTops[i]) / span);
          break;
        }
      }
      target.current = progress * spacing;
    };

    const onResize = () => {
      measure();
      update();
    };

    measure();
    update();
    // Content (fonts, images) can shift sections after mount.
    const ro = new ResizeObserver(onResize);
    ro.observe(document.body);

    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', onResize);
    return () => {
      ro.disconnect();
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', onResize);
    };
  }, [spacing]);

  useFrame((_, dt) => {
    easing.damp(camera.position, 'y', -target.current, smoothing, dt);
    camera.rotation.x = 0;
    camera.rotation.z = 0;
  });

  return null;
}

export default Scroll;
