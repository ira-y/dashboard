export interface IIndicatorItem {
  id: number;
  label: string;
  percentage: number;
}

export type IndicatorType = 'increasing' | 'decreasing';

export interface IWinnabilityIndicator {
  type: IndicatorType;
  indicators: IIndicatorItem[];
}