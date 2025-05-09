export interface IAccountDetail {
  id: string;
  accountId: string;
  performanceMetrics: {
    winnability: {
      score: number;
      rating: 'Very Strong' | 'Strong' | 'Medium' | 'Weak';
      position: {
        yourScore: number;
        marketAvg: number;
        topCompetitor: number;
      };
      increasingFactors: {
        brokerRelationship: number;
        lossHistory: number;
        industryGrowth: number;
        multilineOpportunity: number;
      };
      decreasingFactors: {
        premiumPricing: number;
        totalExposure: number;
        lossRatioTrend: number;
        marketCompetition: number;
      };
    };
    lossRatio: {
      value: number;
      target: number;
    };
    premiumGrowth: {
      value: number;
      description: string;
      target: number;
    };
    exposureDistribution: {
      marineCargo: number;
      generalLiability: number;
      workersComp: number;
    };
  };
  accountStatus: {
    submitted: boolean;
    review: boolean;
    quote: boolean;
    bind: boolean;
    issue: boolean;
    renew: boolean;
  };
  compliance: {
    kycVerification: boolean;
    requiredDocumentation: boolean;
    regulatoryApproval: boolean;
    financialVerification: boolean;
  };
  recommendations: {
    id: string;
    title: string;
    description: string;
  }[];
  needsAttention: {
    marineSurveyRequired?: boolean;
    lossControlComplete?: boolean;
    claimsReviewRequired?: boolean;
  };
}