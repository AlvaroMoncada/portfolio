export const site = {
  name: 'Alex Rivera',
  initials: 'AR',
  role: 'Web Developer & Security Specialist',
  email: 'hello@alexrivera.dev',
  github: 'https://github.com/',
  linkedin: 'https://www.linkedin.com/',
}

export const projects = [
  {
    title: 'Sentinel Dashboard',
    description:
      'A real-time security monitoring dashboard that aggregates threat feeds, tracks uptime, and surfaces anomalous login activity with role-based access control.',
    image: '/projects/sentinel.png',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'PostgreSQL'],
    href: 'https://vercel.com/',
    status: 'Production',
  },
  {
    title: 'TaskFlow',
    description:
      'A collaborative project management app with kanban boards, secure session-based authentication, and input validation hardened against OWASP Top 10 risks.',
    image: '/projects/taskflow.png',
    tags: ['React', 'Node.js', 'Tailwind', 'REST API'],
    href: 'https://vercel.com/',
    status: 'Production',
  },
]

export const webSkills = [
  { name: 'HTML, CSS & JavaScript', level: 95 },
  { name: 'React & Next.js', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'Tailwind CSS', level: 92 },
  { name: 'Node.js & REST APIs', level: 80 },
  { name: 'SQL & Database Design', level: 78 },
]

export const securitySkills = [
  { name: 'Risk Assessment & Mitigation', level: 85 },
  { name: 'OWASP Top 10 & Secure Coding', level: 88 },
  { name: 'SIEM Tools & Log Analysis', level: 75 },
  { name: 'Network Security & Protocols', level: 78 },
  { name: 'Linux & Bash Scripting', level: 82 },
  { name: 'Python for Security Automation', level: 76 },
]

export const webTools = ['Git', 'Docker', 'Vercel', 'PHP', 'Java', 'MySQL']
export const securityTools = ['Wireshark', 'Splunk', 'Nmap', 'tcpdump', 'NIST CSF', 'Incident Response']
