import React, { useState, useMemo } from 'react';
import styles from './CareerPage.module.css';
import { format } from 'date-fns';
import { Building, MapPin,  IndianRupee, Briefcase } from 'lucide-react';
import { jobOpenings } from './type';
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

const CareerPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedJob, setSelectedJob] = useState<JobPosting | null>(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [formData, setFormData] = useState<ApplicationFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    experience: '',
    resume: null,
    coverLetter: '',
    referral: ''
  });

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

  const handleApply = (job: JobPosting) => {
    setSelectedJob(job);
    setShowApplicationForm(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form and close modal
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      experience: '',
      resume: null,
      coverLetter: '',
      referral: ''
    });
    setShowApplicationForm(false);
  };

  return (
    <div className={styles.careerPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>Join Our Mission at Anand Jivan Foundation Trust</h1>
        <p>Make a meaningful impact in the lives of others while building your career</p>
      </section>

      {/* Search and Filters */}
      <section className={styles.searchSection}>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search for jobs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
          <div className={styles.filterGroup}>
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className={styles.filterSelect}
            >
              <option value="All">All Departments</option>
              <option value="Programs">Programs</option>
              <option value="Administration">Administration</option>
              <option value="Fundraising">Fundraising</option>
              <option value="Operations">Operations</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Education">Education</option>
            </select>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className={styles.filterSelect}
            >
              <option value="All">All Types</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Volunteer">Volunteer</option>
            </select>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className={styles.jobListings}>
        <h2>Current Openings ({filteredJobs.length})</h2>
        <div className={styles.jobGrid}>
          {filteredJobs.map(job => (
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
                {job.salary && (
                  <div className={styles.infoItem}>
                    <IndianRupee size={16} />
                    <span>{job.salary}</span>
                  </div>
                )}
              </div>

              <p className={styles.jobDescription}>{job.description}</p>

              <div className={styles.skillTags}>
                {job.skills.slice(0, 4).map((skill, index) => (
                  <span key={index} className={styles.skillTag}>{skill}</span>
                ))}
              </div>

              <div className={styles.jobFooter}>
                <div className={styles.dates}>
                  <span>Posted: {format(new Date(job.postedDate), 'MMM dd, yyyy')}</span>
                  <span>Apply by: {format(new Date(job.lastDate), 'MMM dd, yyyy')}</span>
                </div>
                <button
                  onClick={() => handleApply(job)}
                  className={styles.applyButton}
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Application Modal */}
      {showApplicationForm && selectedJob && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <button 
              className={styles.closeButton}
              onClick={() => setShowApplicationForm(false)}
            >
              ×
            </button>
            <h2>Apply for {selectedJob.title}</h2>
            
            <form onSubmit={handleSubmit} className={styles.applicationForm}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>First Name</label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Last Name</label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    required
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label>Years of Experience</label>
                <input
                  type="text"
                  value={formData.experience}
                  onChange={(e) => setFormData({...formData, experience: e.target.value})}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label>Resume</label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => setFormData({
                    ...formData,
                    resume: e.target.files ? e.target.files[0] : null
                  })}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label>Cover Letter</label>
                <textarea
                  value={formData.coverLetter}
                  onChange={(e) => setFormData({...formData, coverLetter: e.target.value})}
                  required
                  rows={5}
                />
              </div>

              <div className={styles.formGroup}>
                <label>Referral Source (Optional)</label>
                <input
                  type="text"
                  value={formData.referral}
                  onChange={(e) => setFormData({...formData, referral: e.target.value})}
                  placeholder="How did you hear about us?"
                />
              </div>

              <button type="submit" className={styles.submitButton}>
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerPage;