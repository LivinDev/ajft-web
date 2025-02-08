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
    title: 'Program Manager - Education Initiatives',
    department: 'Programs',
    location: 'Mumbai, Maharashtra',
    type: 'Full-time',
    experience: '5-7 years',
    salary: '8-12 LPA',
    category: 'Programs',
    postedDate: '2024-02-01',
    lastDate: '2024-03-15',
    description: 'Lead our educational initiatives aimed at providing quality education to underprivileged children. The role involves program development, implementation, and impact assessment.',
    responsibilities: [
      'Design and implement educational programs for underprivileged communities',
      'Manage relationships with schools, teachers, and education partners',
      'Develop curriculum and teaching methodologies',
      'Monitor program effectiveness and prepare impact reports',
      'Manage program budget and resource allocation',
      'Train and mentor program staff',
      'Collaborate with government education departments'
    ],
    requirements: [
      'Master\'s degree in Education, Social Work, or related field',
      'Minimum 5 years experience in education program management',
      'Previous experience working with NGOs or educational institutions',
      'Strong understanding of Indian education system',
      'Experience in project management and team leadership',
      'Excellent communication skills in English, Hindi, and Marathi'
    ],
    skills: [
      'Program Management',
      'Stakeholder Management',
      'Budget Management',
      'Impact Assessment',
      'Team Leadership',
      'Grant Writing',
      'MS Office Suite'
    ],
    benefits: [
      'Comprehensive health insurance',
      'Professional development opportunities',
      'Flexible working hours',
      'Travel allowance',
      'Paid time off',
      'Learning and development budget'
    ]
  },
  {
    id: '2',
    title: 'Community Health Coordinator',
    department: 'Healthcare',
    location: 'Rural Maharashtra',
    type: 'Full-time',
    experience: '3-5 years',
    salary: '5-7 LPA',
    category: 'Healthcare',
    postedDate: '2024-02-05',
    lastDate: '2024-03-10',
    description: 'Coordinate healthcare initiatives in rural communities, focusing on preventive healthcare and community wellness programs.',
    responsibilities: [
      'Organize health camps and awareness programs',
      'Coordinate with local healthcare providers and facilities',
      'Manage community health worker teams',
      'Implement health education programs',
      'Monitor community health metrics',
      'Maintain health records and prepare reports',
      'Coordinate emergency health responses'
    ],
    requirements: [
      'Bachelor\'s degree in Public Health, Nursing, or related field',
      'Experience in community health programs',
      'Knowledge of rural healthcare systems',
      'Strong coordination and leadership skills',
      'Willingness to travel to remote locations',
      'Proficiency in local languages'
    ],
    skills: [
      'Healthcare Management',
      'Community Outreach',
      'Team Coordination',
      'Data Analysis',
      'Report Writing',
      'Emergency Response',
      'Public Speaking'
    ],
    benefits: [
      'Health insurance',
      'Accommodation allowance',
      'Vehicle allowance',
      'Regular training programs',
      'Performance bonuses',
      'Wellness programs'
    ]
  },
  {
    id: '3',
    title: 'Fundraising Manager',
    department: 'Fundraising',
    location: 'Mumbai, Maharashtra',
    type: 'Full-time',
    experience: '7-10 years',
    salary: '12-15 LPA',
    category: 'Fundraising',
    postedDate: '2024-02-03',
    lastDate: '2024-03-20',
    description: 'Drive fundraising initiatives through corporate partnerships, grants, and donor relationships to support our community development programs.',
    responsibilities: [
      'Develop and implement fundraising strategies',
      'Build and maintain relationships with donors and corporate partners',
      'Write grant proposals and manage grant reporting',
      'Organize fundraising events and campaigns',
      'Manage digital fundraising initiatives',
      'Lead the fundraising team',
      'Track and report on fundraising metrics'
    ],
    requirements: [
      'Master\'s degree in Business, Communications, or related field',
      'Proven track record in fundraising',
      'Experience with grant writing and management',
      'Strong network in corporate sector',
      'Excellent presentation and negotiation skills',
      'Knowledge of CRM systems'
    ],
    skills: [
      'Fundraising Strategy',
      'Relationship Management',
      'Grant Writing',
      'Event Management',
      'Digital Marketing',
      'Financial Planning',
      'Leadership'
    ],
    benefits: [
      'Performance-based incentives',
      'Comprehensive insurance package',
      'Professional development budget',
      'Flexible work arrangements',
      'Travel opportunities',
      'Mental health support'
    ]
  },
  {
    id: '4',
    title: 'Volunteer Coordinator',
    department: 'Operations',
    location: 'Pune, Maharashtra',
    type: 'Full-time',
    experience: '2-4 years',
    salary: '4-6 LPA',
    category: 'Operations',
    postedDate: '2024-02-07',
    lastDate: '2024-03-25',
    description: 'Manage volunteer programs and coordinate volunteer activities across various projects and initiatives.',
    responsibilities: [
      'Recruit and screen volunteers',
      'Organize volunteer orientation and training programs',
      'Match volunteers with appropriate projects',
      'Maintain volunteer database',
      'Coordinate volunteer schedules and activities',
      'Create volunteer recognition programs',
      'Evaluate volunteer program effectiveness'
    ],
    requirements: [
      'Bachelor\'s degree in Human Resources or related field',
      'Experience in volunteer management',
      'Strong organizational and coordination skills',
      'Experience with volunteer management software',
      'Excellent interpersonal skills',
      'Event management experience'
    ],
    skills: [
      'Volunteer Management',
      'Event Planning',
      'Database Management',
      'Training & Development',
      'Communication',
      'Problem Solving',
      'MS Office'
    ],
    benefits: [
      'Health insurance',
      'Flexible scheduling',
      'Professional development',
      'Transportation allowance',
      'Paid volunteering days',
      'Team building events'
    ]
  }
];