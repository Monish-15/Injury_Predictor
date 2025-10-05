
export interface Player {
  id: number;
  name: string;
  age: number;
  position: string;
  minutesPlayedLast7Days: number;
  consecutiveMatches: number;
  previousInjuries: number;
  fitnessScoreTrend: number[];
  upcomingMatchIntensity: number;
  teamId: number;
  isInjured?: boolean;
}

export interface Team {
  id: number;
  name:string;
  leagueId: number;
  players: Player[];
}

export interface League {
  id: number;
  name: string;
}

export interface InjuryPrediction {
  risk: 'Low' | 'Medium' | 'High' | 'Unknown';
  rationale: string;
}
