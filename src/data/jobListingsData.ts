
export interface JobListing {
  id: string;
  title: string;
  company: string;
  logo: string;
  location: string;
  type: string;
  description: string;
}

export const sampleJobs: JobListing[] = [
  {
    id: "job1",
    title: "Registered Nurse - ICU",
    company: "St. Luke's Medical Center",
    logo: "https://images.unsplash.com/photo-1628771418338-e379984939a5?q=80&w=200&h=200&fit=crop",
    location: "Quezon City",
    type: "Full-time",
    description: "Provide critical care to patients in the ICU. Monitor vital signs, administer medications, and collaborate with the healthcare team."
  },
  {
    id: "job2",
    title: "Physical Therapist",
    company: "The Medical City",
    logo: "https://images.unsplash.com/photo-1532938314638-5b94ac63b7ca?q=80&w=200&h=200&fit=crop",
    location: "Pasig City",
    type: "Part-time",
    description: "Evaluate patients' physical condition, develop treatment plans, and assist patients in regaining mobility and function."
  },
  {
    id: "job3",
    title: "Emergency Room Physician",
    company: "Makati Medical Center",
    logo: "https://images.unsplash.com/photo-1505751172876-fa1923c5c522?q=80&w=200&h=200&fit=crop",
    location: "Makati City",
    type: "Per Diem",
    description: "Provide immediate medical care to patients in the emergency room. Diagnose illnesses, perform procedures, and stabilize patients."
  },
  {
    id: "job4",
    title: "Medical Technologist",
    company: "Asian Hospital and Medical Center",
    logo: "https://images.unsplash.com/photo-1532187863489-09f919b2513c?q=80&w=200&h=200&fit=crop",
    location: "Muntinlupa City",
    type: "Full-time",
    description: "Perform laboratory tests and analyses to assist in the diagnosis, treatment, and prevention of diseases."
  }
];
