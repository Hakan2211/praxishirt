import Image from 'next/image';
import React from 'react';

export default function Logo() {
  return (
    <div className="flex items-center w-64 justify-evenly hover:cursor-pointer">
      <Image
        src="/../../../logo/LogoPraxisHirt.png"
        width={80}
        height={80}
        alt="Logo of the Homepage"
      />
      <h3 className="tracking-widest text-white">
        <span className="text-red-300">P</span>raxis
        <span className="text-red-300">H</span>irt
      </h3>
    </div>
  );
}
