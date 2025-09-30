import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from "react-i18next";

export const MoonBackground = () => {
  const { t } = useTranslation();
  const [moonPosition, setMoonPosition] = useState({ x: 15, y: 15 }); 
  const [isDragging, setIsDragging] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const moonRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setShowHint(false);
    const newX = (e.clientX / window.innerWidth) * 100;
    const newY = (e.clientY / window.innerHeight) * 100;
    const clampedX = Math.max(5, Math.min(95, newX));
    const clampedY = Math.max(5, Math.min(95, newY));
    setMoonPosition({ x: clampedX, y: clampedY });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const newX = (e.clientX / window.innerWidth) * 100;
    const newY = (e.clientY / window.innerHeight) * 100;
    const clampedX = Math.max(5, Math.min(95, newX));
    const clampedY = Math.max(5, Math.min(95, newY));
    setMoonPosition({ x: clampedX, y: clampedY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'grabbing';
      document.body.style.userSelect = 'none';
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };
  }, [isDragging]);

  const calculateShadow = () => {
    const centerX = 50;
    const centerY = 50;
    const lightOffsetX = (centerX - moonPosition.x) * 0.4;
    const lightOffsetY = (centerY - moonPosition.y) * 0.4;
    const blur = Math.abs(lightOffsetX) + Math.abs(lightOffsetY) + 8;
    const intensity = 0.15 + (Math.abs(lightOffsetX) + Math.abs(lightOffsetY)) * 0.003;
    return `${lightOffsetX}px ${lightOffsetY}px ${blur}px rgba(59, 130, 246, ${intensity * 0.4})`;
  };

  return (
    <>
      {/* Ay */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <div
          ref={moonRef}
          className={`absolute w-20 h-20 rounded-full bg-gradient-to-br from-yellow-100 via-yellow-50 to-white
            shadow-lg transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 pointer-events-auto
            ${isDragging ? 'scale-110 cursor-grabbing' : 'cursor-grab hover:scale-105'}`}
          style={{
            left: moonPosition.x + '%',
            top: moonPosition.y + '%',
            boxShadow: '0 0 30px rgba(255, 255, 255, 0.6), inset -5px -5px 10px rgba(0, 0, 0, 0.1)',
          }}
          onMouseDown={handleMouseDown}
        >
          {/* Ay kraterleri */}
          <div className="absolute inset-2">
            <div className="absolute w-2 h-2 bg-gray-400 rounded-full top-2 left-3 opacity-30"></div>
            <div className="absolute w-1.5 h-1.5 bg-gray-400 rounded-full top-4 right-3 opacity-25"></div>
            <div className="absolute w-1 h-1 bg-gray-400 rounded-full bottom-3 left-2 opacity-30"></div>
            <div className="absolute w-2.5 h-2.5 bg-gray-400 rounded-full bottom-2 right-2 opacity-20"></div>
          </div>

          {/* Ay ışığı */}
          <div 
            className="absolute -inset-3 rounded-full animate-pulse opacity-60"
            style={{
              background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)'
            }}>
          </div>

          {/* Move Me yazısı */}
          {showHint && (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs font-bold text-gray-600 animate-pulse">
                {t("moon.moveMe")}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Dinamik mavi gölge efekti */}
      <style>
        {`
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
            box-shadow: ${calculateShadow()}, 0 6px 20px rgba(59, 130, 246, 0.15) !important;
          }
        `}
      </style>
    </>
  );
};
