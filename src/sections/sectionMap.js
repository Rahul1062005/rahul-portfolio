import AboutSection from './AboutSection'
import SkillsSection from './SkillsSection'
import ProjectsSection from './ProjectsSection'
import ExperienceSection from './ExperienceSection'
import EducationSection from './EducationSection'
import CertificationsSection from './CertificationsSection'
import PositionsSection from './PositionsSection'
import OpenSourceSection from './OpenSourceSection'
import PublicationsSection from './PublicationsSection'
import ContactSection from './ContactSection'

export const sectionOrder = [
  'about',
  'skills',
  'projects',
  'experience',
  'education',
  'certifications',
  'positions',
  'openSource',
  'publications',
  'contact',
]

export const sectionMap = {
  about: {
    label: 'About',
    aliases: ['summary', 'aboutMe'],
    component: AboutSection,
  },
  skills: {
    label: 'Skills',
    aliases: ['technicalSkills'],
    component: SkillsSection,
  },
  projects: {
    label: 'Projects',
    aliases: [],
    component: ProjectsSection,
  },
  experience: {
    label: 'Experience',
    aliases: ['internships'],
    component: ExperienceSection,
  },
  education: {
    label: 'Education',
    aliases: [],
    component: EducationSection,
  },
  certifications: {
    label: 'Certificates',
    aliases: [],
    component: CertificationsSection,
  },
  positions: {
    label: 'Responsibilities',
    aliases: ['positionsOfResponsibility'],
    component: PositionsSection,
  },
  openSource: {
    label: 'Open Source',
    aliases: ['openSourceContributions', 'contributions'],
    component: OpenSourceSection,
  },
  publications: {
    label: 'Publications',
    aliases: [],
    component: PublicationsSection,
  },
  contact: {
    label: 'Contact',
    aliases: [],
    component: ContactSection,
  },
}
