export interface NavigationItem {
    label: string;
    path: string;
    children?: NavigationItem[];
  }
  
  export interface ContentSection {
    title: string;
    subtitle?: string;
    content?: string[];
    items?: any[];
  }
  
  export interface Initiative {
    id: string;
    title: string;
    description: string;
    image: string;
    category: string;
    impact: string;
  }
  
  export interface ImpactStat {
    number: string;
    label: string;
    icon: string;
  }
  
  export interface TeamMember {
    name: string;
    role: string;
    image: string;
    bio: string;
  }
  
  export interface Quote {
    text: string;
    author?: string;
  }