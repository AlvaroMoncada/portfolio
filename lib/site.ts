export const site = {
  name: 'Alex Rivera',
  initials: 'AR',
  role: 'Desarrollador Web y Especialista en Seguridad',
  email: 'hello@alexrivera.dev',
  github: 'https://github.com/',
  linkedin: 'https://www.linkedin.com/',
}

export const projects = [
  {
    title: 'Sentinel Dashboard',
    description:
      'Panel de monitorización de seguridad en tiempo real que agrega fuentes de amenazas, controla la disponibilidad y detecta inicios de sesión anómalos con control de acceso basado en roles.',
    image: '/projects/sentinel.png',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'PostgreSQL'],
    href: 'https://vercel.com/',
    status: 'En producción',
  },
  {
    title: 'TaskFlow',
    description:
      'Aplicación colaborativa de gestión de proyectos con tableros kanban, autenticación segura basada en sesiones y validación de entradas reforzada frente a los riesgos del OWASP Top 10.',
    image: '/projects/taskflow.png',
    tags: ['React', 'Node.js', 'Tailwind', 'API REST'],
    href: 'https://vercel.com/',
    status: 'En producción',
  },
]

export const webSkills = [
  { name: 'HTML, CSS y JavaScript', level: 95 },
  { name: 'React y Next.js', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'Tailwind CSS', level: 92 },
  { name: 'Node.js y APIs REST', level: 80 },
  { name: 'SQL y diseño de bases de datos', level: 78 },
]

export const securitySkills = [
  { name: 'Evaluación y mitigación de riesgos', level: 85 },
  { name: 'OWASP Top 10 y programación segura', level: 88 },
  { name: 'Herramientas SIEM y análisis de logs', level: 75 },
  { name: 'Seguridad de redes y protocolos', level: 78 },
  { name: 'Linux y scripting en Bash', level: 82 },
  { name: 'Python para automatización de seguridad', level: 76 },
]

export const webTools = ['Git', 'Docker', 'Vercel', 'PHP', 'Java', 'MySQL']
export const securityTools = ['Wireshark', 'Splunk', 'Nmap', 'tcpdump', 'NIST CSF', 'Respuesta a incidentes']
