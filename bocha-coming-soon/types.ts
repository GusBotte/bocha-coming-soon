
export type LocalizedText = string | { en: string; es: string };

export interface Project {
  id: string;
  title: LocalizedText;
  imageUrl: string;
  videoUrl?: string; 
  videos?: { title: string; url: string }[];
  description: LocalizedText;
  shortDescription?: LocalizedText; 
  longDescription?: LocalizedText; 
  category: 'Brand' | 'Digital' | 'Motion' | 'Print';
  date: string;
  client?: string;
  services?: string[];
  tools?: string[];
}

export interface WorkflowItem {
  id: string;
  title: LocalizedText;
  content: LocalizedText; // Was string, now localized (Short Description)
  fullContent?: LocalizedText; // Was string, now localized (Long Description)
  tags: string[];
  imageUrl?: string;
  quote?: LocalizedText; // New field for highlighted quote
  keyTakeaway?: LocalizedText; // New field for the footer takeaway
}

export enum ViewState {
  HOME = 'HOME',
  ABOUT = 'ABOUT',
  GALLERY = 'GALLERY',
  PROJECT_DETAIL = 'PROJECT_DETAIL',
  WORKFLOW = 'WORKFLOW',
  WORKFLOW_DETAIL = 'WORKFLOW_DETAIL',
  UPLOAD = 'UPLOAD'
}

export interface NavItem {
  label: string;
  view: ViewState;
}
