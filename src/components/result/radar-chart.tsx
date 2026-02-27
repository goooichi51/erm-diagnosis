"use client";

import {
  RadarChart as RechartsRadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";
import type { CategoryScore } from "@/lib/diagnosis/scoring";

interface RadarChartProps {
  categoryScores: CategoryScore[];
}

export function RadarChart({ categoryScores }: RadarChartProps) {
  const data = categoryScores.map((cs) => ({
    category: cs.categoryName,
    score: cs.percentage,
    fullMark: 100,
  }));

  return (
    <ResponsiveContainer width="100%" height={320}>
      <RechartsRadarChart data={data} cx="50%" cy="50%" outerRadius="70%">
        <PolarGrid stroke="#e2e8f0" />
        <PolarAngleAxis
          dataKey="category"
          tick={{ fontSize: 12, fill: "#64748b" }}
        />
        <PolarRadiusAxis
          angle={90}
          domain={[0, 100]}
          tick={{ fontSize: 10, fill: "#94a3b8" }}
          tickCount={6}
        />
        <Radar
          name="あなたのスコア"
          dataKey="score"
          stroke="#1e3a5f"
          fill="#1e3a5f"
          fillOpacity={0.2}
          strokeWidth={2}
        />
      </RechartsRadarChart>
    </ResponsiveContainer>
  );
}
