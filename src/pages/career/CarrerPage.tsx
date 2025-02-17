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
  description: string;
  responsibilities: string[];
  requirements: string[];
  postedDate: string;
  lastDate: string;
  category: 'Programs' | 'Administration' | 'Fundraising' | 'Operations' | 'Healthcare' | 'Education';
}

// Updated to match backend schema
interface ApplicationFormData {
  role: {
    title: string;
  };
  personalInfo: {
    firstName: string;
    lastName: string;
    email: string;
    mobile: string;
    address: string;
  };
  professionalInfo: {
    experience: number;
    noticePeriod: string;
  };
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
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

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

  const handleSubmit = async (formData: ApplicationFormData) => {
    try {
      const response = await fetch('http://localhost:3000/api/jobs/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Application submission failed');
      }

      setSubmitStatus({
        type: 'success',
        message: 'Application submitted successfully! We will contact you soon.',
      });

      // Close modal after successful submission
      setTimeout(() => {
        setSelectedJob(null);
        setSubmitStatus({ type: null, message: '' });
      }, 3000);

    } catch (error) {
      console.error('Error submitting application:', error);
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to submit application',
      });
    }
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
          onClose={() => {
            setSelectedJob(null);
            setSubmitStatus({ type: null, message: '' });
          }}
          onSubmit={handleSubmit}
        />
      )}

      {/* Status Messages */}
      {submitStatus.type && (
        <div className={`${styles.statusMessage} ${styles[submitStatus.type]}`}>
          {submitStatus.message}
        </div>
      )}
    </div>
  );
};

export default CareerPage;