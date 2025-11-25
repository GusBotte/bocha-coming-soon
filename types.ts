
export type LocalizedText = string | { en: string; es: string };

export interface Project {
  id: string;
  title: LocalizedText;
  category: string;
  image: string; // Changed from imageUrl
  date: string;
  shortDescription: LocalizedText;
  fullDescription: LocalizedText; // Changed from description/longDescription
  videos?: { title: string; src: string }[];
  client?: string;
  services?: string[];
  tools?: string[];
}

export interface WorkflowItem {
  id: string;
  title: LocalizedText;
  content: LocalizedText;
  fullContent?: LocalizedText;
  tags: string[];
  imageUrl?: string;
  quote?: LocalizedText;
  keyTakeaway?: LocalizedText;
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
