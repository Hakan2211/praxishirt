'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Full-height content section that sits on top of the 3D scene.
 * `scene` marks it as a scroll anchor for <Scroll /> so the camera reaches
 * the matching 3D model when this section is on screen.
 */
export default function Section({
  id,
  scene = true,
  className = '',
  innerClassName = '',
  overlay = null,
  children,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      data-scene-section={scene ? '' : undefined}
      className={`relative z-10 flex min-h-[100svh] w-full items-center py-28 md:py-32 ${className}`}
    >
      <div
        className={`container mx-auto px-5 transition-all duration-1000 ease-out md:px-10 lg:px-16 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        } ${innerClassName}`}
      >
        {children}
      </div>
      {overlay}
    </section>
  );
}
