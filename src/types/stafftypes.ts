export interface StaffMember {
  id: string;
  name: string;
  role: string;
  department: string;
  photo: string;
  email: string;
  phone: string;
  bio: string;
  qualifications: string[];
  profileLinks: {
    label: string;
    url: string;
    icon?: string;
  }[];
}

export interface FilterOptions {
  searchQuery: string;
  roleFilter: string;
  specializationFilter: string;
}

export type RoleType =
  | "Dean"
  | "Deputy Dean"
  | "Professor"
  | "Associate Professor"
  | "Senior Lecturer"
  | "Lecturer";