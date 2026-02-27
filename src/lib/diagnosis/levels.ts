export interface MaturityLevel {
  level: number;
  name: string;
  nameEn: string;
  minScore: number;
  maxScore: number;
  description: string;
  color: string;
}

export const maturityLevels: MaturityLevel[] = [
  {
    level: 1,
    name: "初期段階",
    nameEn: "Ad Hoc",
    minScore: 30,
    maxScore: 54,
    description:
      "リスク管理が属人的で体系化されていません。特定の個人の経験や判断に依存しており、組織的な仕組みがほとんど整備されていない状態です。",
    color: "#ef4444",
  },
  {
    level: 2,
    name: "基本段階",
    nameEn: "Basic",
    minScore: 55,
    maxScore: 84,
    description:
      "基本的なリスク管理の仕組みが導入されつつあります。一部の領域では取り組みが始まっていますが、全社的な統合には至っていません。",
    color: "#f97316",
  },
  {
    level: 3,
    name: "発展段階",
    nameEn: "Defined",
    minScore: 85,
    maxScore: 114,
    description:
      "リスク管理プロセスが定義され、組織的に実施されています。標準化された手順があり、多くの部門で実践されていますが、改善の余地があります。",
    color: "#eab308",
  },
  {
    level: 4,
    name: "成熟段階",
    nameEn: "Managed",
    minScore: 115,
    maxScore: 135,
    description:
      "リスク管理が経営戦略と統合され、定量的なモニタリングが行われています。リスクを戦略的な意思決定に活用できる段階です。",
    color: "#22c55e",
  },
  {
    level: 5,
    name: "最適化段階",
    nameEn: "Optimized",
    minScore: 136,
    maxScore: 150,
    description:
      "継続的改善が行われ、リスクが価値創造に活用されています。業界のベストプラクティスを実践し、先進的なリスク管理を実現しています。",
    color: "#3b82f6",
  },
];

export function getMaturityLevel(totalScore: number): MaturityLevel {
  const level = maturityLevels.find(
    (l) => totalScore >= l.minScore && totalScore <= l.maxScore
  );
  return level || maturityLevels[0];
}
