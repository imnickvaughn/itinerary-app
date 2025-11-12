export interface Member {
  id: string;
  name: string;
  email: string;
  phone?: string;
  preferences: string[];
  avatar?: string;
}

export interface MemberFormData {
  name: string;
  email: string;
  phone: string;
  preferences: string[];
}

