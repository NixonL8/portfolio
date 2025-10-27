import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  size: number;
  top: number;
  left: number;
  directionX: number; // -1 or 1 for left/right
  directionY: number; // -1 or 1 for up/down
  speed: number;
  glowIntensity: number;
  animationDuration: number;
  animationDelay: number;
}

export default function BubbleBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = [];
      for (let i = 0; i < 20; i++) {
        newParticles.push({
          id: i,
          size: Math.random() * 40 + 10, // Size between 10px and 50px
          top: Math.random() * 100, // Random vertical position
          left: Math.random() * 100, // Random horizontal position
          directionX: Math.random() > 0.5 ? 1 : -1, // Random direction X
          directionY: Math.random() > 0.5 ? 1 : -1, // Random direction Y
          speed: Math.random() * 0.5 + 0.1, // Speed between 0.1 and 0.6
          glowIntensity: Math.random() * 0.5 + 0.3, // Glow between 0.3 and 0.8
          animationDuration: Math.random() * 20 + 30, // Duration between 30s and 50s
          animationDelay: Math.random() * 10, // Delay up to 10s
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  return (
    <>
      <style>{`
        @keyframes drift {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
            box-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
          }
          25% {
            transform: translate(10vw, -10vh) scale(0.9);
            opacity: 0.5;
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
          }
          50% {
            transform: translate(-5vw, -20vh) scale(1.1);
            opacity: 0.7;
            box-shadow: 0 0 15px rgba(255, 255, 255, 0.7);
          }
          75% {
            transform: translate(15vw, -30vh) scale(0.95);
            opacity: 0.5;
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
          }
          100% {
            transform: translate(0, -40vh) scale(1.05);
            opacity: 0.3;
            box-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
          }
        }
        .animate-drift {
          animation: drift linear infinite;
        }
      `}</style>
      <div className="absolute inset-0 h-screen overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-blue-200/20 to-purple-200/20 animate-drift"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              top: `${particle.top}%`,
              left: `${particle.left}%`,
              animationDuration: `${particle.animationDuration}s`,
              animationDelay: `${particle.animationDelay}s`,
              boxShadow: `0 0 ${particle.glowIntensity * 20}px rgba(255, 255, 255, ${particle.glowIntensity})`,
            }}
          />
        ))}
      </div>
    </>
  );
}
