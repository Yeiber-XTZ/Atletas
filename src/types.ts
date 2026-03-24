export interface Athlete {
  id: string;
  name: string;
  sport: string;
  image: string;
  badges: string[];
  statLabel: string;
  statValue: string;
  record?: string;
}

export interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}
