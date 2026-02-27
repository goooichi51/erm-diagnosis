export type CategoryId =
  | "governance"
  | "strategy"
  | "performance"
  | "review"
  | "information";

export interface Question {
  id: number;
  categoryId: CategoryId;
  text: string;
}

export interface Category {
  id: CategoryId;
  name: string;
  description: string;
}

export const categories: Category[] = [
  {
    id: "governance",
    name: "ガバナンスと文化",
    description: "取締役会の監督、リスク文化、人材",
  },
  {
    id: "strategy",
    name: "戦略と目標設定",
    description: "事業環境分析、リスクアペタイト、戦略との整合",
  },
  {
    id: "performance",
    name: "パフォーマンス",
    description: "リスクの識別・評価・優先順位付け・対応策",
  },
  {
    id: "review",
    name: "レビューと修正",
    description: "モニタリング、変化への対応、継続的改善",
  },
  {
    id: "information",
    name: "情報・伝達・報告",
    description: "リスク情報の共有、IT活用、経営層への報告",
  },
];

export const questions: Question[] = [
  // ガバナンスと文化
  {
    id: 1,
    categoryId: "governance",
    text: "取締役会（または経営層）がリスク管理の方針を明確に定めている",
  },
  {
    id: 2,
    categoryId: "governance",
    text: "リスク管理の責任者（CRO等）が明確に任命されている",
  },
  {
    id: 3,
    categoryId: "governance",
    text: "全社的にリスクに対する意識が高く、リスク報告が奨励される文化がある",
  },
  {
    id: 4,
    categoryId: "governance",
    text: "リスク管理に関する教育・研修が定期的に実施されている",
  },
  {
    id: 5,
    categoryId: "governance",
    text: "リスク管理に必要な人材・予算が十分に確保されている",
  },
  {
    id: 6,
    categoryId: "governance",
    text: "倫理規範や行動規範が整備され、全社員に周知されている",
  },

  // 戦略と目標設定
  {
    id: 7,
    categoryId: "strategy",
    text: "事業環境（外部環境・内部環境）の変化を定期的に分析している",
  },
  {
    id: 8,
    categoryId: "strategy",
    text: "組織として許容できるリスクの水準（リスクアペタイト）が明確に定義されている",
  },
  {
    id: 9,
    categoryId: "strategy",
    text: "経営戦略の策定時にリスク分析が組み込まれている",
  },
  {
    id: 10,
    categoryId: "strategy",
    text: "事業目標とリスク管理目標が整合している",
  },
  {
    id: 11,
    categoryId: "strategy",
    text: "新規事業や重要な投資判断にリスク評価プロセスが適用されている",
  },
  {
    id: 12,
    categoryId: "strategy",
    text: "中長期的なリスクシナリオ（3-5年先）を検討している",
  },

  // パフォーマンス
  {
    id: 13,
    categoryId: "performance",
    text: "組織全体のリスクを網羅的に洗い出す仕組み（リスクレジスター等）がある",
  },
  {
    id: 14,
    categoryId: "performance",
    text: "リスクの発生確率と影響度を定量的・定性的に評価している",
  },
  {
    id: 15,
    categoryId: "performance",
    text: "リスク対応策（回避・軽減・移転・受容）が明確に定められている",
  },
  {
    id: 16,
    categoryId: "performance",
    text: "リスク対応策の実行状況を定期的に確認している",
  },
  {
    id: 17,
    categoryId: "performance",
    text: "リスク間の相互関係や連鎖を考慮した分析を行っている",
  },
  {
    id: 18,
    categoryId: "performance",
    text: "KRI（Key Risk Indicator）を設定し、モニタリングしている",
  },

  // レビューと修正
  {
    id: 19,
    categoryId: "review",
    text: "リスク管理の有効性を定期的に評価・見直している",
  },
  {
    id: 20,
    categoryId: "review",
    text: "内部監査がリスク管理体制の適切性を検証している",
  },
  {
    id: 21,
    categoryId: "review",
    text: "インシデント発生時の原因分析と再発防止策が体系化されている",
  },
  {
    id: 22,
    categoryId: "review",
    text: "外部環境の変化に応じてリスク評価を迅速に更新している",
  },
  {
    id: 23,
    categoryId: "review",
    text: "BCP（事業継続計画）を策定し、定期的に訓練を実施している",
  },
  {
    id: 24,
    categoryId: "review",
    text: "リスク管理のPDCAサイクルが確立されている",
  },

  // 情報・伝達・報告
  {
    id: 25,
    categoryId: "information",
    text: "リスク情報が経営層に適時・適切に報告される仕組みがある",
  },
  {
    id: 26,
    categoryId: "information",
    text: "部門間でリスク情報が共有される仕組みがある",
  },
  {
    id: 27,
    categoryId: "information",
    text: "リスク管理にITシステム（GRCツール等）を活用している",
  },
  {
    id: 28,
    categoryId: "information",
    text: "ステークホルダー（株主、顧客等）へのリスク開示が適切に行われている",
  },
  {
    id: 29,
    categoryId: "information",
    text: "リスク管理に関するデータを分析し、意思決定に活用している",
  },
  {
    id: 30,
    categoryId: "information",
    text: "外部の脅威情報（サイバー、法規制等）を収集・活用する仕組みがある",
  },
];

export const QUESTIONS_PER_CATEGORY = 6;
export const TOTAL_QUESTIONS = 30;
export const MAX_SCORE_PER_QUESTION = 5;
export const MIN_SCORE_PER_QUESTION = 1;
