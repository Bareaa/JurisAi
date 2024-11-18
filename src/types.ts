export interface LegalDocument {
  id: string;
  title: string;
  content: string;
  type: 'criminal' | 'civil' | 'labor' | 'other';
  date: string;
  court?: string;
  processNumber?: string;
  parties?: {
    plaintiff: string;
    defendant: string;
  };
}

export interface Analysis {
  summary: string;
  keyPoints: string[];
  recommendations: string[];
  riskLevel: 'low' | 'medium' | 'high';
  successProbability: number;
  relevantLaws: {
    reference: string;
    description: string;
    articles: string[];
  }[];
  precedents: {
    case: string;
    court: string;
    date: string;
    relevance: string;
    decision: string;
  }[];
  suggestedDocuments: string[];
  estimatedTimeframe: string;
  estimatedCosts: {
    description: string;
    value: number;
  }[];
}