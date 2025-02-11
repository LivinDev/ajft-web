// types.ts
export interface JobPosting {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Volunteer';
  experience: string;
  salary?: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  skills: string[];
  benefits: string[];
  postedDate: string;
  lastDate: string;
  category: 'Programs' | 'Administration' | 'Fundraising' | 'Operations' | 'Healthcare' | 'Education';
}

// jobData.ts
export const jobOpenings: JobPosting[] = [
  {
    id: '1',
    title: 'Computer Operator',
    department: 'Administration',
    location: 'Mumbai, Maharashtra',
    type: 'Full-time',
    experience: '1-3 years',
    salary: '3-5 LPA',
    category: 'Administration',
    postedDate: '2024-02-01',
    lastDate: '2024-03-15',
    description: 'Responsible for operating and maintaining computer systems, managing data entry, and providing technical support to staff members.',
    responsibilities: [
      'Perform data entry and maintain database records',
      'Handle basic computer troubleshooting',
      'Generate and maintain reports',
      'Assist with software installations and updates',
      'Manage digital file organization',
      'Provide basic IT support to staff',
      'Maintain computer equipment inventory'
    ],
    requirements: [
      'Diploma or Bachelor\'s degree in Computer Science or related field',
      'Minimum 1 year experience as computer operator',
      'Proficiency in MS Office Suite',
      'Knowledge of basic computer hardware and software',
      'Good typing speed and accuracy',
      'Basic troubleshooting skills'
    ],
    skills: [
      'Data Entry',
      'MS Office Suite',
      'Basic IT Support',
      'Database Management',
      'Hardware Troubleshooting',
      'File Management',
      'Technical Documentation'
    ],
    benefits: [
      'Health insurance',
      'Fixed working hours',
      'Paid time off',
      'Festival bonus',
      'Training opportunities',
      'Tea and snacks'
    ]
  },
  {
    id: '2',
    title: 'Driver',
    department: 'Operations',
    location: 'Mumbai, Maharashtra',
    type: 'Full-time',
    experience: '3-5 years',
    salary: '2.5-3.5 LPA',
    category: 'Operations',
    postedDate: '2024-02-05',
    lastDate: '2024-03-10',
    description: 'Responsible for safely operating organization vehicles, transporting staff and materials, and maintaining vehicle documentation.',
    responsibilities: [
      'Drive organization vehicles safely and responsibly',
      'Transport staff members to various locations',
      'Maintain vehicle logs and documentation',
      'Ensure timely vehicle maintenance',
      'Report any vehicle issues promptly',
      'Assist with loading and unloading materials',
      'Follow all traffic rules and safety guidelines'
    ],
    requirements: [
      'Valid commercial driving license',
      'Minimum 3 years of professional driving experience',
      'Clean driving record',
      'Knowledge of local routes and traffic regulations',
      'Basic vehicle maintenance knowledge',
      'Ability to work flexible hours'
    ],
    skills: [
      'Safe Driving',
      'Route Planning',
      'Vehicle Maintenance',
      'Time Management',
      'Communication',
      'Problem Solving',
      'Documentation'
    ],
    benefits: [
      'Health insurance',
      'Uniform allowance',
      'Overtime pay',
      'Annual bonus',
      'Accident insurance',
      'Mobile allowance'
    ]
  },
  {
    id: '3',
    title: 'Manager',
    department: 'Operations',
    location: 'Mumbai, Maharashtra',
    type: 'Full-time',
    experience: '5-7 years',
    salary: '8-12 LPA',
    category: 'Operations',
    postedDate: '2024-02-03',
    lastDate: '2024-03-20',
    description: 'Oversee daily operations, manage staff, and ensure efficient execution of organizational objectives and projects.',
    responsibilities: [
      'Manage and supervise department staff',
      'Plan and coordinate operational activities',
      'Develop and implement operational policies',
      'Monitor and optimize department performance',
      'Prepare and manage budgets',
      'Handle resource allocation',
      'Report to senior management'
    ],
    requirements: [
      'Bachelor\'s degree in Business Administration or related field',
      'Minimum 5 years of management experience',
      'Strong leadership and team management skills',
      'Experience in budget management',
      'Excellent communication and interpersonal skills',
      'Problem-solving abilities'
    ],
    skills: [
      'Team Leadership',
      'Operations Management',
      'Budget Planning',
      'Strategic Planning',
      'Performance Management',
      'Decision Making',
      'Risk Management'
    ],
    benefits: [
      'Comprehensive health insurance',
      'Performance bonus',
      'Professional development budget',
      'Flexible working hours',
      'Leave benefits',
      'Mobile and laptop allowance'
    ]
  }
];