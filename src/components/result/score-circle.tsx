"use client";

import type { MaturityLevel } from "@/lib/diagnosis/levels";

interface ScoreCircleProps {
  totalScore: number;
  totalPercentage: number;
  maturityLevel: MaturityLevel;
}

export function ScoreCircle({
  totalScore,
  totalPercentage,
  maturityLevel,
}: ScoreCircleProps) {
  const circumference = 2 * Math.PI * 54;
  const offset = circumference - (totalPercentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-40 h-40">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
          <circle
            cx="60"
            cy="60"
            r="54"
            fill="none"
            stroke="#e2e8f0"
            strokeWidth="8"
          />
          <circle
            cx="60"
            cy="60"
            r="54"
            fill="none"
            stroke={maturityLevel.color}
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold">{totalScore}</span>
          <span className="text-xs text-muted-foreground">/ 150点</span>
        </div>
      </div>
      <div className="mt-4 text-center">
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold text-white"
          style={{ backgroundColor: maturityLevel.color }}
        >
          Level {maturityLevel.level} - {maturityLevel.name}
        </div>
        <p className="text-xs text-muted-foreground mt-1">
          {maturityLevel.nameEn}
        </p>
      </div>
    </div>
  );
}
