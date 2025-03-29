"use client";

import { useEffect, useState } from 'react';

interface MeteorStyle {
  top: string;
  left: string;
  animationDelay: string;
  animationDuration: string;
}

const Meteors = () => {
  // Especificando o tipo do estado
  const [meteorStyles, setMeteorStyles] = useState<MeteorStyle[]>([]);

  useEffect(() => {
    // Gerar estilos aleatórios para os meteoros após a montagem do componente
    const numberOfMeteors = 100; // Alterando a quantidade de meteoros para 500
    const styles: MeteorStyle[] = [...Array(numberOfMeteors)].map(() => ({
      top: Math.random() * 1000 + "vh",
      left: Math.random() * 100 + "%",
      animationDelay: Math.random() * 10 + "s",
      animationDuration: Math.random() * 3 + 2 + "s",
    }));
    setMeteorStyles(styles);
  }, []);

  return (
    <div className="absolute inset-0 h-screen overflow-hidden pointer-events-none">
      <div className="meteor-container absolute top-0 -left-[50%] w-[200%] h-screen">
        {meteorStyles.map((style, idx) => (
          <div
            key={idx}
            className="meteor-item absolute top-0 left-0 w-1 h-1 bg-cyan-400 rounded-full shadow-[0_0_0_2px_rgba(34,211,238,0.3)]"
            style={style}
          />
        ))}
      </div>
    </div>
  );
};

export default Meteors;
