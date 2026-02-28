import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

interface ESGMeterProps {
  score: number;
  size?: number;
  strokeWidth?: number;
  label?: string;
}

export function ESGMeter({ score, size = 200, strokeWidth = 12, label = 'ESG Risk Score' }: ESGMeterProps) {
  const [animatedScore, setAnimatedScore] = useState(0);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (animatedScore / 100) * circumference;

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedScore(score);
    }, 200);
    return () => clearTimeout(timer);
  }, [score]);

  // Determine color based on score
  const getColor = (score: number) => {
    if (score >= 80) return { stroke: '#10b981', glow: 'rgba(16, 185, 129, 0.3)' };
    if (score >= 60) return { stroke: '#3b82f6', glow: 'rgba(59, 130, 246, 0.3)' };
    if (score >= 40) return { stroke: '#f59e0b', glow: 'rgba(245, 158, 11, 0.3)' };
    return { stroke: '#ef4444', glow: 'rgba(239, 68, 68, 0.3)' };
  };

  const color = getColor(score);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="transform -rotate-90">
          {/* Background Circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth={strokeWidth}
            fill="none"
          />
          {/* Progress Circle */}
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={color.stroke}
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            style={{
              filter: `drop-shadow(0 0 8px ${color.glow})`
            }}
          />
        </svg>
        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center"
          >
            <div className="text-5xl font-bold text-white mb-1">
              {Math.round(animatedScore)}
            </div>
            <div className="text-sm text-gray-400">/ 100</div>
          </motion.div>
        </div>
      </div>
      <div className="mt-4 text-center">
        <div className="text-lg font-semibold text-white">{label}</div>
        <div className="text-sm text-gray-400 mt-1">
          {score >= 80 ? 'Excellent' : score >= 60 ? 'Good' : score >= 40 ? 'Fair' : 'Needs Improvement'}
        </div>
      </div>
    </div>
  );
}
