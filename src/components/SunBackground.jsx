import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const SunBackground = () => {
  const { t } = useTranslation();
  const [sunPosition, setSunPosition] = useState({ x: 15, y: 15 });
  const [isDragging, setIsDragging] = useState(false);
  const [showHint, setShowHint] = useState(true); // 👈 ipucu yazısı için
  const sunRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setShowHint(false); // 👈 sürüklenince yazıyı gizle
    const newX = (e.clientX / window.innerWidth) * 100;
    const newY = (e.clientY / window.innerHeight) * 100;

    const clampedX = Math.max(5, Math.min(95, newX));
    const clampedY = Math.max(5, Math.min(95, newY));

    setSunPosition({ x: clampedX, y: clampedY });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const newX = (e.clientX / window.innerWidth) * 100;
    const newY = (e.clientY / window.innerHeight) * 100;

    const clampedX = Math.max(5, Math.min(95, newX));
    const clampedY = Math.max(5, Math.min(95, newY));

    setSunPosition({ x: clampedX, y: clampedY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "grabbing";
      document.body.style.userSelect = "none";
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };
  }, [isDragging]);

  // Güneş gölge hesabı
  const calculateShadow = () => {
    const centerX = 50;
    const centerY = 50;

    const lightOffsetX = (centerX - sunPosition.x) * 0.4;
    const lightOffsetY = (centerY - sunPosition.y) * 0.4;

    const blur = Math.abs(lightOffsetX) + Math.abs(lightOffsetY) + 8;
    const intensity =
      0.15 + (Math.abs(lightOffsetX) + Math.abs(lightOffsetY)) * 0.003;

    return `${lightOffsetX}px ${lightOffsetY}px ${blur}px rgba(255, 140, 0, ${
      intensity * 0.3
    })`;
  };

  return (
    <>
      {/* Güneş */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <div
          ref={sunRef}
          className={`absolute w-20 h-20 rounded-full bg-gradient-to-br from-yellow-300 via-orange-300 to-orange-400
            transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 pointer-events-auto
            ${isDragging ? "scale-110 cursor-grabbing" : "cursor-grab hover:scale-105"}`}
          style={{
            left: sunPosition.x + "%",
            top: sunPosition.y + "%",
            boxShadow:
              "0 0 40px rgba(255, 200, 0, 0.8), inset -3px -3px 8px rgba(255, 150, 0, 0.3)",
            filter: "brightness(1.2)",
          }}
          onMouseDown={handleMouseDown}
        >
          {/* Güneş ışınları */}
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-6 bg-gradient-to-t from-yellow-400 to-orange-300 rounded-full animate-pulse"
                style={{
                  top: "-12px",
                  left: "50%",
                  transformOrigin: "50% 52px",
                  transform: `translateX(-50%) rotate(${i * 45}deg)`,
                  opacity: 0.7,
                }}
              />
            ))}
          </div>

          {/* Move Me yazısı güneşin ortasında */}
          {showHint && (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs font-bold text-white animate-pulse"
                style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.9)" }}>
                {t("moon.moveMe")}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Turuncu gölge efekti */}
      <style jsx global>{`
        .card-hover,
        .bg-card,
        section .bg-card,
        .bg-secondary,
        button:not(.fixed button) {
          transition: box-shadow 0.3s ease !important;
          box-shadow: ${calculateShadow()} !important;
        }

        .card-hover:hover,
        button:not(.fixed button):hover {
          box-shadow: ${calculateShadow()},
            0 6px 20px rgba(255, 140, 0, 0.15) !important;
        }
      `}</style>
    </>
  );
};
