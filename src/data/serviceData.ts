
import { ReactNode } from 'react';
import { 
  Stethoscope, Heart, Users, ClipboardCheck, 
  DollarSign, Zap, MessageCircle, Award
} from 'lucide-react';

export interface ServiceItem {
  icon: ReactNode;
  title: string;
  description: string;
}

export const servicesForProfessionals: ServiceItem[] = [
  {
    icon: <Stethoscope className="h-8 w-8 text-primary" />,
    title: "Wide Range of Specialties",
    description: "Opportunities for nurses, doctors, therapists, and more"
  },
  {
    icon: <Heart className="h-8 w-8 text-primary" />,
    title: "Flexible Schedules",
    description: "Choose shifts that fit your lifestyle and availability"
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Diverse Work Environments",
    description: "Work in hospitals, clinics, home care, and more"
  },
  {
    icon: <ClipboardCheck className="h-8 w-8 text-primary" />,
    title: "Credential Verification",
    description: "We ensure your credentials meet industry standards"
  },
  {
    icon: <DollarSign className="h-8 w-8 text-primary" />,
    title: "Competitive Pay",
    description: "Earn competitive rates for your expertise"
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Quick Placement",
    description: "Get matched with opportunities quickly and efficiently"
  },
  {
    icon: <MessageCircle className="h-8 w-8 text-primary" />,
    title: "Direct Communication",
    description: "Communicate directly with healthcare facilities"
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: "Recognition & Rewards",
    description: "Get recognized for your hard work and dedication"
  }
];
