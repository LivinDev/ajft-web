// CareerPage.tsx
import React, { useState, useMemo, useEffect } from 'react';
import styles from './CareerPage.module.css';
import { format } from 'date-fns';
import { Building, MapPin, Briefcase, Search } from 'lucide-react';
import { jobOpenings } from './type';
import ApplicationModal from './ApplicationModal';

interface JobPosting {
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

interface ApplicationFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  experience: string;
  resume: File | null;
  coverLetter: string;
  referral: string;
}

const departments = [
  'Programs',
  'Administration',
  'Fundraising',
  'Operations',
  'Healthcare',
  'Education'
] as const;

const jobTypes = [
  'Full-time',
  'Part-time',
  'Contract',
  'Volunteer'
] as const;

const CareerPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedJob, setSelectedJob] = useState<JobPosting | null>(null);

  useEffect(() => {
    document.title = "Career | Anand Jivan Foundation";
  }, []);

  const filteredJobs = useMemo(() => {
    return jobOpenings.filter(job => {
      const matchesSearch = 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDepartment = selectedDepartment === 'All' || job.department === selectedDepartment;
      const matchesType = selectedType === 'All' || job.type === selectedType;
      
      return matchesSearch && matchesDepartment && matchesType;
    });
  }, [searchTerm, selectedDepartment, selectedType]);

  const handleSubmit = (formData: ApplicationFormData) => {
    console.log('Form submitted:', formData);
    setSelectedJob(null);
  };

  const renderSearchSection = () => (
    <section className={styles.searchSection}>
      <div className={styles.searchContainer}>
        <div className={styles.searchInputWrapper}>
          <Search className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search for jobs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
        </div>
        <div className={styles.filterGroup}>
          <select
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
            className={styles.filterSelect}
          >
            <option value="All">All Departments</option>
            {departments.map(dept => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className={styles.filterSelect}
          >
            <option value="All">All Types</option>
            {jobTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );

  const renderJobCard = (job: JobPosting) => (
    <div key={job.id} className={styles.jobCard}>
      <div className={styles.jobHeader}>
        <h3>{job.title}</h3>
        <span className={styles.jobType}>{job.type}</span>
      </div>
      
      <div className={styles.jobInfo}>
        <div className={styles.infoItem}>
          <Building size={16} />
          <span>{job.department}</span>
        </div>
        <div className={styles.infoItem}>
          <MapPin size={16} />
          <span>{job.location}</span>
        </div>
        <div className={styles.infoItem}>
          <Briefcase size={16} />
          <span>{job.experience}</span>
        </div>
      </div>

      <p className={styles.jobDescription}>{job.description}</p>

      <div className={styles.skillTags}>
        {job.skills.slice(0, 3).map((skill, index) => (
          <span key={index} className={styles.skillTag}>{skill}</span>
        ))}
      </div>

      <div className={styles.jobFooter}>
        <div className={styles.dates}>
          <span>Posted: {format(new Date(job.postedDate), 'MMM dd, yyyy')}</span>
          <span>Apply by: {format(new Date(job.lastDate), 'MMM dd, yyyy')}</span>
        </div>
        <button
          onClick={() => setSelectedJob(job)}
          className={styles.applyButton}
        >
          Apply Now
        </button>
      </div>
    </div>
  );

  return (
    <div className={styles.careerPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>Join Our Mission at Anand Jivan Foundation Trust</h1>
        <p>Make a meaningful impact in the lives of others while building your career</p>
      </section>

      {/* Search and Filters */}
      {renderSearchSection()}

      {/* Job Listings */}
      <section className={styles.jobListings}>
        <h2>Current Openings ({filteredJobs.length})</h2>
        <div className={styles.jobGrid}>
          {filteredJobs.map(renderJobCard)}
        </div>
      </section>

      {/* Application Modal */}
      {selectedJob && (
        <ApplicationModal
          job={selectedJob}
          onClose={() => setSelectedJob(null)}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default CareerPage;