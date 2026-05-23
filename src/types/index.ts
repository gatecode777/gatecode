export interface AdminUser {
  id: string;
  email: string;
  name: string;
  role: 'admin';
  isActive: boolean;
  lastLogin: string | null;
  createdAt: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  admin?: AdminUser;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}

export interface DashboardStats {
  totalUsers: number;
  activeUsers: number;
  pageViews: number;
  monthlyVisits: number;
  conversionRate: number;
  bounceRate: number;
}

export interface NavItem {
  label: string;
  href: string;
  icon: string;
  badge?: number;
}

// ── Portfolio Types ────────────────────────────────────────────────────────

export interface PortfolioSliderDTO {
  _id: string;
  title: string;
  subtitle: string;
  description: string;
  desktopImage: string;
  mobileImage: string | null;
  altText: string;
  order: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface PortfolioCategoryDTO {
  _id: string;
  name: string;
  slug: string;
  description: string;
  icon: string | null;
  order: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ProjectButtonDTO {
  _id?: string;
  label: string;
  url: string;
  openInNewTab: boolean;
  isActive: boolean;
  order: number;
}

export interface PortfolioProjectDTO {
  _id: string;
  categoryId: PortfolioCategoryDTO | null;
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  technologies: string[];
  buttons: ProjectButtonDTO[];
  isFeatured: boolean;
  isActive: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
}

export interface PaginatedResponse<T> {
  success: boolean;
  message: string;
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// ── Case Study Types ───────────────────────────────────────────────────────

export interface SectionVisibility {
  hero: boolean; introduction: boolean; challenge: boolean;
  solution: boolean; keyFeatures: boolean; results: boolean;
  technologies: boolean; conclusion: boolean;
}

export interface CaseStudyBullet { _id?: string; text: string; order: number; }
export interface CaseStudyTech   { _id?: string; name: string; icon: string | null; order: number; }
export interface CaseStudyButton { _id?: string; label: string; url: string; openInNewTab: boolean; isActive: boolean; order: number; }

export interface CaseStudyDTO {
  _id: string; title: string; slug: string; shortDesc: string; description: string;
  thumbnail: string; isFeatured: boolean; isActive: boolean; order: number;
  sections: SectionVisibility;
  heroTitle: string; heroSubtitle: string; heroBanner: string;
  introduction: string;
  challengeTitle: string; challengeDesc: string;
  solutionTitle: string; solutionDesc: string; solutionImage: string | null;
  conclusion: string;
  keyFeatures: CaseStudyBullet[]; results: CaseStudyBullet[];
  technologies: CaseStudyTech[]; buttons: CaseStudyButton[];
  createdAt: string; updatedAt: string;
}

export interface CaseStudyListItemDTO {
  _id: string; title: string; slug: string; shortDesc: string; description: string;
  thumbnail: string; isFeatured: boolean; isActive: boolean;
  order: number; createdAt: string;
}
