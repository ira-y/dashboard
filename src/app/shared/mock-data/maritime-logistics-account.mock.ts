import { IAccountDetail } from "../interfaces/account-detail.interface";

export const MARITIME_LOGISTICS_ACCOUNT_MOCK: IAccountDetail = {
  id: '1',
  accountId: '3',
  performanceMetrics: {
    winnability: {
      score: 82,
      rating: 'Very Strong',
      position: {
        yourScore: 82,
        marketAvg: 68,
        topCompetitor: 88
      },
      increasingFactors: {
        brokerRelationship: 28,
        lossHistory: 22,
        industryGrowth: 16,
        multilineOpportunity: 11
      },
      decreasingFactors: {
        premiumPricing: 24,
        totalExposure: 18,
        lossRatioTrend: 13,
        marketCompetition: 5
      }
    },
    lossRatio: {
      value: 25,
      target: 42.7
    },
    premiumGrowth: {
      value: 12.4,
      description: 'YoY increase',
      target: 10
    },
    exposureDistribution: {
      marineCargo: 71.4,
      generalLiability: 20,
      workersComp: 8.6
    }
  },
  accountStatus: {
    submitted: true,
    review: true,
    quote: true,
    bind: true,
    issue: true,
    renew: false
  },
  compliance: {
    kycVerification: true,
    requiredDocumentation: true,
    regulatoryApproval: true,
    financialVerification: true
  },
  recommendations: [
    {
      id: '1',
      title: 'Offer 5% premium discount in exchange for 3-year commitment',
      description: 'Historical loss rate increases 2-5% with 1-year commitments. Current pricing is 12% above market average. This approach would strengthen retention while maintaining adequate profitability.'
    },
    {
      id: '2',
      title: 'Propose risk control services for cargo shipping procedures',
      description: 'Based on loss analysis, implementing a 2% contingent credit for tighter maritime controls would reduce losses by 20% compared to similar accounts in your portfolio. Focus on boarding/unloading operations would address the most frequent claim scenarios.'
    }
  ],
  needsAttention: {
    marineSurveyRequired: true,
    lossControlComplete: true,
    claimsReviewRequired: true
  }
};