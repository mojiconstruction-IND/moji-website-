// Central Data Store for Moji Construction Private Limited

export interface CompanyInfo {
  name: string;
  shortName: string;
  cin: string;
  foundedYear: number;
  incorporatedDate: string;
  founder: {
    name: string;
    role: string;
    fullTitle: string;
    din: string;
  };
  address: {
    street: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    full: string;
  };
  email: string;
  website: string;
  workingHours: string;
  experienceYears: number;
  linesEnergizedKm: string;
  majorPackagesCount: string;
  voltageRange: string;
  mission: string;
  vision: string;
}

export const companyInfo: CompanyInfo = {
  name: 'Moji Construction Private Limited',
  shortName: 'Moji Construction',
  cin: 'U45204RJ2002PTC017968',
  foundedYear: 1990,
  incorporatedDate: '2002-12-11',
  founder: {
    name: 'SHAMBHU SINGH',
    role: 'Managing Director',
    fullTitle: 'Founder & Managing Director',
    din: '01134014',
  },
  address: {
    street: '29, Sheopur, Sector-7, Pratap Nagar, Sanganer',
    city: 'Jaipur',
    state: 'Rajasthan',
    pincode: '302033',
    country: 'India',
    full: '29, Sheopur, Sector-7, Pratap Nagar, Sanganer, Jaipur, Rajasthan - 302033',
  },
  email: 'moji.304@gmail.com',
  website: 'https://mojiconstruction.com',
  workingHours: 'Mon – Sat: 09:00 AM – 06:00 PM IST',
  experienceYears: 36,
  linesEnergizedKm: '4,000+ KM',
  majorPackagesCount: '150+ Major Projects',
  voltageRange: '33kV – 400kV / 765kV',
  mission: 'To execute projects at competitive prices, provide safe working conditions and deliver quality work within stipulated / agreed time frames.',
  vision: 'To be a reliable transmission line & GSS contractor delivering beyond expectations, through quality workmanship and commitment.',
};

export interface Director {
  din: string;
  name: string;
  role: string;
  isFounder?: boolean;
  date: string;
  desc: string;
}

export const directors: Director[] = [
  { din: '01134014', name: 'SHAMBHU SINGH', role: 'Founder & Managing Director', isFounder: true, date: '2002-12-11', desc: 'Founder of Moji Construction in 1990. Over 36 years steering high-voltage transmission contracting, strategic growth, and state utility partnerships.' },
  { din: '07927212', name: 'SURENDRA SINGH', role: 'Technical Director', isFounder: false, date: '2018-09-29', desc: 'Heading engineering designs, high-voltage tower calculations, and sub-station structural engineering.' },
  { din: '07927217', name: 'RANJEET SINGH CHANDRAWAT', role: 'Director - Site Operations & Projects', isFounder: false, date: '2018-09-29', desc: 'Leading on-ground execution, right-of-way management, stringing crews, and heavy machinery logistics.' },
  { din: '07927234', name: 'RANVEER SINGH', role: 'Director - QA & QC', isFounder: false, date: '2018-09-29', desc: 'Managing quality assurance, safety standards, material inspections, and IS/IEC code compliance.' },
  { din: '07927235', name: 'RAGHUNATH SINGH', role: 'Director - Finance Operations', isFounder: false, date: '2018-09-29', desc: 'Overseeing corporate finance, procurement budgets, commercial audits, and contract management.' },
];

export interface Client {
  name: string;
  short: string;
  role: string;
  logo: string;
}

export const clients: Client[] = [
  { 
    name: 'Rajasthan Rajya Vidhyut Prasaran Nigam Limited', 
    short: 'RRVPNL', 
    role: 'State Transmission Utility',
    logo: '/images/clients/RRVPNL.png'
  },
  { 
    name: 'TATA Power Solar Systems Limited', 
    short: 'TPSSL', 
    role: 'Solar EPC Leader',
    logo: '/images/clients/TATA Power Solar Systems Limited.png'
  },
  { 
    name: 'TATA Projects Limited', 
    short: 'TPL', 
    role: 'Infrastructure Giant',
    logo: '/images/clients/TATA Projects Limited.webp'
  },
  { 
    name: 'TATA Power Renewable Energy Limited', 
    short: 'TPREL', 
    role: 'Clean Energy IPP',
    logo: '/images/clients/TATA Power Renewable Energy Limited.svg'
  },
  { 
    name: 'National Highways Authority of India', 
    short: 'NHAI', 
    role: 'Expressway Corridors',
    logo: '/images/clients/National Highways Authority of India.webp'
  },
  { 
    name: 'Ashoka Buildcon Limited', 
    short: 'Ashoka', 
    role: 'Infrastructure EPC',
    logo: '/images/clients/Ashoka Buildcon Limited.png'
  },
  { 
    name: 'Avaada Clean Projects Private Limited', 
    short: 'Avaada', 
    role: 'Solar Park Developer',
    logo: '/images/clients/Avaada Clean Projects Private Limited.webp'
  },
  { 
    name: 'RR Kabel (Ram Ratna Wires Ltd)', 
    short: 'RR Kabel', 
    role: 'Industrial Power',
    logo: '/images/clients/RR Kabel (Ram Ratna Wires Ltd).svg'
  },
  { 
    name: 'Uttam Strips Limited', 
    short: 'Uttam Strips', 
    role: 'Industrial Power',
    logo: '/images/clients/Uttam Strips Limited.svg'
  },
];

export interface WorkflowStep {
  num: string;
  step: string;
  title: string;
  desc: string;
  image: string;
  scope: string;
}

export const workflowSteps: WorkflowStep[] = [
  {
    num: '01',
    step: 'Phase 1',
    title: 'Survey, DGPS & Route Profiling',
    desc: 'Reconnaissance survey, DGPS coordinate logging, tower spotting, and route profiling per Survey of India guidelines.',
    image: '/images/Howwework/01_land_survey_team.png',
    scope: 'GIS & Line Survey',
  },
  {
    num: '02',
    step: 'Phase 2',
    title: 'Civil Foundations & Benching',
    desc: 'Excavation, stub setting, and foundation casting classified per soil type (hard rock, submerged, dry) and revetment benching.',
    image: '/images/Howwework/02_structural_design_blueprint.png',
    scope: 'Civil & Geotechnical',
  },
  {
    num: '03',
    step: 'Phase 3',
    title: 'Lattice Tower Assembly & Torquing',
    desc: 'Precision assembly of galvanized lattice steel towers, high-tensile bolt torquing, and rigorous QA/QC inspection before erection.',
    image: '/images/Howwework/03_steel_fabrication_workshop.png',
    scope: 'Structural Assembly',
  },
  {
    num: '04',
    step: 'Phase 4',
    title: 'Tension Stringing & OPGW Jointing',
    desc: 'Controlled tension stringing of Zebra / Panther conductors, optical ground wire (OPGW) laying, and vibration damper positioning.',
    image: '/images/Howwework/04_transmission_tower_erection.png',
    scope: 'Live Line & Stringing',
  },
  {
    num: '05',
    step: 'Phase 5',
    title: 'Statutory Clearances & Charging',
    desc: 'Final safety audit, railway & highway statutory approvals, insulator testing, line energization, and on-time grid handover.',
    image: '/images/Howwework/05_powerline_commissioning.png',
    scope: 'Testing & Commissioning',
  },
];

export interface Service {
  id: string;
  icon: string;
  badge?: string;
  voltage?: string;
  title: string;
  description: string;
  features: string[];
  realProjects?: string[];
  color: string;
  image?: string;
}

export const services: Service[] = [
  {
    id: 'transmission-lines',
    icon: '🗼',
    badge: 'Core EPC',
    voltage: '33kV – 400kV / 765kV',
    title: 'EHT & HT Transmission Lines',
    description: 'Turnkey engineering, procurement, and construction of high-voltage transmission lines — from reconnaissance survey to lattice tower erection, 2nd circuit stringing, and OPGW earthwire installation.',
    features: [
      '33kV, 132kV, 220kV & 400kV lines',
      'Single Circuit (S/C) & Double Circuit (D/C) erection',
      'AL59 Zebra & Panther conductor stringing',
      'Major river, railway & expressway crossings',
      'OPGW earthwire laying & jointing',
    ],
    realProjects: [
      '220kV D/C Pratapgarh – Chittorgarh (121 km)',
      '132kV S/C Sikar – Ratangarh (80 km)',
      '220kV D/C Debari – Banswara 2nd Circuit (87 km)',
    ],
    color: '#1D4E89',
    image: '/images/services/transmission_lines.jpg',
  },
  {
    id: 'substation-gss',
    icon: '⚡',
    badge: 'Turnkey GSS',
    voltage: '132kV – 765kV Switchyards',
    title: 'Grid Substations & Switchyards',
    description: 'Complete erection, testing, and commissioning of high-voltage Grid Substations (GSS) and pooling switchyards for government utilities and private power producers.',
    features: [
      'Gantry structures & bus bar erection',
      'Power transformers, CT, PT & isolators',
      'Control room structures & cable trenches',
      'Lightning masts & surge arrestors',
      'Grounding grid & earth mat installation',
    ],
    realProjects: [
      '765/400/220kV Switchyard at PGCIL Fatehgarh Phase-II (Tata Projects)',
      '220kV GSS Halasar Turnkey Package',
      '132kV GSS Sola (Sikar)',
    ],
    color: '#EA580C',
    image: '/images/services/grid_substations.jpg',
  },
  {
    id: 'solar-evacuation',
    icon: '☀️',
    badge: 'Renewable Power',
    voltage: '132kV / 220kV Solar Pooling',
    title: 'Solar Evacuation & Grid Connectivity',
    description: 'Specialized high-capacity transmission lines and pooling switchyards connecting mega utility-scale solar power plants directly to central and state grid pooling substations.',
    features: [
      'Dedicated 220kV & 132kV solar evacuation lines',
      'AL59 Zebra conductor stringing for high current',
      '25MW to 225MW plant switchyard I&C',
      'PGCIL & RRVPNL pooling grid integration',
      'Turnkey balance-of-plant electrical works',
    ],
    realProjects: [
      '220kV Line for 225MW TPCD Noorsar (PGCIL Bikaner-II)',
      '220kV Line for 150MW MSEDCL Solar (Chhayan, Jaisalmer)',
      '220kV Line from Avaada Solar Plant to Badnu GSS',
    ],
    color: '#06B6D4',
    image: '/images/services/solar-structures.png',
  },
  {
    id: 'line-shifting-modification',
    icon: '🏗️',
    badge: 'Corridor Relocation',
    voltage: '132kV – 400kV Lines',
    title: 'Line Shifting & Height Raising',
    description: 'Critical line diversions, clearance enhancement, and corridor shifting for National Highway expressways, economic corridors, railway tracks, and major dam reservoir works.',
    features: [
      'Tower height raising for vertical ground clearance',
      'Expressway corridor shifting (Amritsar-Jamnagar Corridor)',
      'Highway bypass diversion works (PWD-NH Division)',
      'Dam reservoir deposit works (Isarda Dam Project)',
      'Rapid turnkey execution with minimal shutdown',
    ],
    realProjects: [
      '400kV & 220kV Shifting for NHAI Amritsar-Jamnagar Corridor',
      '132kV Pilani-Rajgarh Bypass Shifting (PWD-NH)',
      '220kV Turnkey Line Diversion for Jindal Saw Ltd',
    ],
    color: '#1D4E89',
    image: '/images/services/line_shifting.jpg',
  },
  {
    id: 'lilo-uprating',
    icon: '🔀',
    badge: 'Grid Tapping',
    voltage: '132kV & 220kV Corridors',
    title: 'LILO Tapping & Transmission Uprating',
    description: 'Specialized Loop-In Loop-Out (LILO) tower construction and transmission corridor uprating to integrate new substations into existing high-voltage transmission lines.',
    features: [
      '220kV & 132kV LILO tower construction & stringing',
      'Pre-existing transmission line uprating & reconductoring',
      'Tapping station erection & hardware integration',
      'High-tension jumper strengthening & re-tensioning',
      'Short turnaround execution during planned outages',
    ],
    realProjects: [
      '220kV LILO at GSS Rawatsar (STPS-Ratangarh Line)',
      '220kV LILO from RAS-Merta Line at GSS Jethana',
      '132kV Line Uprating from Jhunjhunu to Bissau',
    ],
    color: '#EA580C',
    image: '/images/services/lilo_tapping.jpg',
  },
  {
    id: 'om-line-health',
    icon: '🔧',
    badge: 'Asset Life Extension',
    voltage: 'Comprehensive AMC',
    title: 'O&M Services & Line Health Analysis',
    description: 'Comprehensive Operation & Maintenance (O&M), Annual Maintenance Contracts (AMC), infrared thermography inspection, and structural revetment for long-term transmission reliability.',
    features: [
      'Annual Maintenance Contracts (AMC) for switchyards',
      'Infrared thermography of mid-span & dead-end joints',
      'Tower footing benching & revetment in sandy/rocky soils',
      'Missing tower member replenishment & vibration dampers',
      'GPS mapping & Google Earth KML tower plotting',
    ],
    realProjects: [
      '3-Year Switchyard & Tapping Station AMC at 50MW TPREL Ravra',
      'Thermography assessment of conductors & mid-span joints',
      'Line earthing status audit & statutory aviation clearances',
    ],
    color: '#06B6D4',
    image: '/images/services/om_services.jpg',
  },
];

export interface Project {
  id: string;
  title: string;
  category: string;
  client: string;
  location: string;
  voltage?: string;
  height?: string;
  year: number;
  image: string;
  description: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 'pratapgarh-chittorgarh',
    title: '220kV D/C Pratapgarh – Chittorgarh (121 KM)',
    category: 'Transmission',
    client: 'RRVPNL',
    location: 'Chittorgarh, Rajasthan',
    voltage: '220kV D/C',
    year: 2014,
    image: '/images/Projects/project-1.png',
    description: 'Turnkey survey, civil stub setting, tower erection, and conductor stringing over 121 km landmark transmission corridor.',
    tags: ['220kV', 'RRVPNL', '121 KM', 'EHT Line'],
  },
  {
    id: 'fatehgarh-765kv',
    title: '765/400/220kV Switchyard at PGCIL Fatehgarh',
    category: 'Substation',
    client: 'Tata Projects Limited',
    location: 'Fatehgarh, Jaisalmer',
    voltage: '765kV / 400kV',
    year: 2021,
    image: '/images/Projects/project-4.png',
    description: 'Complete erection of 765kV ultra-high voltage switchyard structural steel, gantry alignment, and bus bar systems.',
    tags: ['765kV', 'Tata Projects', 'PGCIL', 'Switchyard'],
  },
  {
    id: 'tpcd-noorsar-solar',
    title: '220kV Line for 225MW TPCD Noorsar Solar',
    category: 'Solar',
    client: 'Tata Power / TPSSL',
    location: 'Noorsar, Bikaner',
    voltage: '220kV Solar',
    year: 2022,
    image: '/images/Projects/project-2.png',
    description: 'Dedicated 220kV solar power evacuation transmission line connecting 225MW solar plant to PGCIL Bikaner-II pooling grid.',
    tags: ['220kV', 'Tata Power', '225MW Solar', 'Evacuation'],
  },
  {
    id: 'nhai-amritsar-jamnagar',
    title: '400kV & 220kV NHAI Corridor Line Shifting',
    category: 'Line Shifting',
    client: 'NHAI / Ashoka Buildcon',
    location: 'Western Rajasthan Corridor',
    voltage: '400kV / 220kV',
    year: 2024,
    image: '/images/Projects/project-5.png',
    description: 'Critical tower height raising, line diversions, and expressway clearances for the Amritsar-Jamnagar Economic Corridor.',
    tags: ['400kV', 'NHAI', 'Line Shifting', 'Expressway'],
  },
];

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Executive Engineer (Civil & Transmission)',
    role: 'Chief Project Engineer',
    company: 'RRVPNL',
    content: 'Moji Construction successfully executed our 220kV Pratapgarh–Chittorgarh 121 km transmission line and multiple 132kV GSS packages. Their on-site stringing speed, safety compliance, and quality of work are exemplary.',
    rating: 5,
    initials: 'RV',
  },
  {
    id: 't2',
    name: 'Project Head (Renewable Transmission)',
    role: 'Head of Infrastructure',
    company: 'Tata Power / TPSSL',
    content: 'Moji Construction delivered the dedicated 220kV evacuation transmission package for our 225MW Noorsar Solar Project ahead of the commissioning window. Their technical competence in EHT lines and O&M is exceptional.',
    rating: 5,
    initials: 'TP',
  },
  {
    id: 't3',
    name: 'General Manager (Substation EPC)',
    role: 'Project Director',
    company: 'Tata Projects Limited',
    content: 'Working with Moji Construction on the 765/400/220kV Switchyard at PGCIL Fatehgarh Phase-II was a seamless experience. Structural alignment and gantry erection were finished to exact tolerances.',
    rating: 5,
    initials: 'TL',
  },
];

export interface Stat {
  id: string;
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  description: string;
  icon: string;
}

export const stats: Stat[] = [
  { id: 's1', value: 36, suffix: '+', label: 'Years of Field Mastery', description: 'Established in 1990', icon: '📅' },
  { id: 's2', value: 4000, suffix: 'KM+', label: 'Transmission Lines', description: 'Erected & Energized (km)', icon: '⚡' },
  { id: 's3', value: 150, suffix: '+', label: 'Major Projects', description: 'Completed for RRVPNL, Tata & NHAI', icon: '🏗️' },
  { id: 's4', value: 500, suffix: '+', label: 'Overall Projects', description: 'All completed projects executed', icon: '📋' },
];

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: 'f1',
    question: 'What voltage levels and transmission scopes does Moji Construction execute?',
    answer: 'We specialize in turnkey erection, stringing, and commissioning of 33kV, 132kV, 220kV, and 400kV Extra High-Tension (EHT) transmission lines, as well as up to 765kV grid substation switchyards, solar power evacuation corridors, and highway diversions.',
  },
  {
    id: 'f2',
    question: 'Does Moji Construction handle complete turnkey EPC projects?',
    answer: 'Yes. We provide complete turnkey solutions covering detailed survey, tower foundation casting, structural steel erection, conductor stringing, testing, and charging. We also manage right-of-way (RoW) resolution and utility liaison.',
  },
  {
    id: 'f3',
    question: 'Do you manage statutory clearances for Railways, NHAI, and Aviation?',
    answer: 'Yes. Our team manages complete end-to-end statutory clearances for Railway crossings (DFCC / North Western Railway), National Highways (NHAI / PWD-NH), Civil Aviation, Forest permissions, and water body crossings.',
  },
  {
    id: 'f4',
    question: 'Which regions does Moji Construction operate in?',
    answer: 'Headquartered in Jaipur, our primary operations span across all districts of Rajasthan (including Jaipur, Jodhpur, Bikaner, Jaisalmer, Barmer, Chittorgarh, Udaipur, and Kota) and neighboring Western Indian states.',
  },
  {
    id: 'f5',
    question: 'How quickly can Moji Construction mobilize site execution teams?',
    answer: 'With dedicated in-house stringing gangs, certified surveyors, and heavy machinery logistics, we can mobilize on-site within 7 to 14 days of work order / LOI issuance.',
  },
  {
    id: 'f6',
    question: 'Do you provide Operation & Maintenance (AMC) and Thermography services?',
    answer: 'Yes. We provide comprehensive Annual Maintenance Contracts (AMC), infrared thermography inspection of jumpers and joints, missing member replacements, tower footing revetment, and emergency breakdown restoration.',
  },
  {
    id: 'f7',
    question: 'How do we request a technical proposal or commercial quote?',
    answer: 'You can submit your single-line diagram (SLD), line route profile, or tender BOQ requirements through our contact form or by emailing moji.304@gmail.com. Our commercial and engineering team responds within 24 to 48 business hours.',
  },
];

export interface TimelineItem {
  year: number;
  title: string;
  description: string;
}

export const timeline: TimelineItem[] = [
  { year: 1990, title: 'Founded by Shambhu Singh', description: 'Established as Moji Construction by Founder & Managing Director Shambhu Singh, executing electrical transmission general works across Rajasthan.' },
  { year: 2002, title: 'Private Limited Incorporation', description: 'Formally incorporated as Moji Construction Private Limited in Jaipur (CIN: U45204RJ2002PTC017968), expanding state-level contracting.' },
  { year: 2008, title: 'Major 220kV EHT Line Awards', description: 'Secured landmark 220kV D/C Debari – Banswara (87 km) stringing and Salumber GSS LILO projects from RRVPNL.' },
  { year: 2014, title: 'National Rail Corridor & 120km Lines', description: 'Executed 220kV DFCC Marwar & Bilara railway transmission packages, along with the 121 km 220kV Pratapgarh – Chittorgarh line.' },
  { year: 2019, title: 'Utility-Scale Solar Evacuation', description: 'Diversified into mega solar power evacuation lines (150MW MSEDCL Chhayan Jaisalmer & 225MW TPCD Noorsar for PGCIL Bikaner-II).' },
  { year: 2021, title: '765kV Switchyard & O&M Expansion', description: 'Erected 765/400/220kV Switchyard at PGCIL Fatehgarh Phase-II (Tata Projects) and secured 3-year AMC with Tata Power.' },
  { year: 2024, title: 'NHAI Expressways & 4,000+ KM Milestone', description: 'Surpassed 4,000+ km of energized lines, delivering critical diversions for the Amritsar-Jamnagar Corridor and Avaada Solar.' },
  { year: 2026, title: 'Future Expansion & Smart Grid Integration', description: 'Continuing our legacy of executing complex high-voltage power projects, expanding into smart grid infrastructure and renewable energy integration.' },
];

export interface DetailedProject {
  id: string;
  sn: number;
  name: string;
  client: string;
  category: 'Executed' | 'Recently Completed' | 'Private' | 'NHAI Shifting';
  location: string;
  voltage?: string;
  circuit?: string;
  length?: string;
  scope: string;
  status: 'Completed' | 'Operational' | 'Energized';
  year?: number;
}

export const projectList: DetailedProject[] = [
  { sn: 1, id: 'proj-1', name: '132 KV S/C line from Sikar to Ratangarh', client: 'RRVPNL', category: 'Executed', location: 'Sikar – Ratangarh', voltage: '132kV', circuit: 'S/C', length: '80 km', scope: 'Complete Erection & Conductor Stringing', status: 'Completed' },
  { sn: 2, id: 'proj-2', name: '220 KV D/C line from Pratapgarh to Chittorgarh', client: 'RRVPNL', category: 'Executed', location: 'Pratapgarh – Chittorgarh', voltage: '220kV', circuit: 'D/C', length: '121 km', scope: 'Survey, Tower Erection & Stringing', status: 'Completed' },
  { sn: 3, id: 'proj-3', name: '220 KV D/C Debari - Banswara line (2nd ckt Stringing)', client: 'RRVPNL', category: 'Executed', location: 'Debari – Banswara', voltage: '220kV', circuit: 'D/C (2nd Ckt)', length: '87 km', scope: '2nd Circuit Live Line Stringing', status: 'Completed' },
  { sn: 4, id: 'proj-4', name: '132 KV S/C line on D/C Tower from 220 KV GSS Kotputli to 132 KV GSS Bansur', client: 'RRVPNL', category: 'Executed', location: 'Kotputli – Bansur', voltage: '132kV', circuit: 'S/C on D/C', length: '17 km', scope: 'Tower Erection & Stringing', status: 'Completed' },
  { sn: 5, id: 'proj-5', name: '132 KV S/C Line on D/C Tower From 220 KV GSS Halasar to 132 KV GSS Sardarshahar', client: 'RRVPNL', category: 'Executed', location: 'Halasar – Sardarshahar', voltage: '132kV', circuit: 'S/C on D/C', length: '28 km', scope: 'Turnkey Erection & Commissioning', status: 'Completed' },
  { sn: 6, id: 'proj-6', name: '132 KV S/C Line From 132 KV GSS Sardarshahar to 132 KV GSS Sahawa', client: 'RRVPNL', category: 'Executed', location: 'Sardarshahar – Sahawa', voltage: '132kV', circuit: 'S/C', length: '40 km', scope: 'Tower Erection & Stringing', status: 'Completed' },
  { sn: 7, id: 'proj-7', name: '132 KV S/C Line on D/C Tower From 132 KV GSS Nimbi Jodha to 132 KV GSS Ladnu', client: 'RRVPNL', category: 'Executed', location: 'Nimbi Jodha – Ladnu', voltage: '132kV', circuit: 'S/C on D/C', length: '12 km', scope: 'Complete Erection & Stringing', status: 'Completed' },
  { sn: 8, id: 'proj-8', name: '132 KV S/C Line on D/C Tower From 132 KV GSS Jayal to 132 KV GSS Rol', client: 'RRVPNL', category: 'Executed', location: 'Jayal – Rol', voltage: '132kV', circuit: 'S/C on D/C', length: '22 km', scope: 'Transmission Line Erection', status: 'Completed' },
  { sn: 9, id: 'proj-9', name: '132 KV S/C Line from 132 KV GSS Kuchera to 132 KV GSS Rol', client: 'RRVPNL', category: 'Executed', location: 'Kuchera – Rol', voltage: '132kV', circuit: 'S/C', length: '17 km', scope: 'Tower Erection & Stringing', status: 'Completed' },
  { sn: 10, id: 'proj-10', name: '132 KV S/C Line from 132 KV GSS Makrana to 132 KV GSS Badi Khatu', client: 'RRVPNL', category: 'Executed', location: 'Makrana – Badi Khatu', voltage: '132kV', circuit: 'S/C', length: '40 km', scope: 'Complete Erection & Stringing', status: 'Completed' },
  { sn: 11, id: 'proj-11', name: '132 KV S/C Line from 132 KV GSS Sikar to 132 KV GSS Sola', client: 'RRVPNL', category: 'Executed', location: 'Sikar – Sola', voltage: '132kV', circuit: 'S/C', length: '21 km', scope: 'Transmission Line Erection', status: 'Completed' },
  { sn: 12, id: 'proj-12', name: '132 KV S/C Line from 220 KV GSS Halasar to 132 KV GSS Dhansiya', client: 'RRVPNL', category: 'Executed', location: 'Halasar – Dhansiya', voltage: '132kV', circuit: 'S/C', length: '30 km', scope: 'Tower Erection & Conductor Stringing', status: 'Completed' },
  { sn: 13, id: 'proj-13', name: '132 KV S/C Line on D/C Tower from 132 KV GSS Ratangarh to 132 KV GSS Rajaldesar', client: 'RRVPNL', category: 'Executed', location: 'Ratangarh – Rajaldesar', voltage: '132kV', circuit: 'S/C on D/C', length: '20 km', scope: 'Erection & Stringing', status: 'Completed' },
  { sn: 14, id: 'proj-14', name: '132 KV S/C Line on D/C Tower from 220 KV GSS Sujangarh to 132 KV GSS Chhapar', client: 'RRVPNL', category: 'Executed', location: 'Sujangarh – Chhapar', voltage: '132kV', circuit: 'S/C on D/C', length: '17 km', scope: 'Transmission Line Erection', status: 'Completed' },
  { sn: 15, id: 'proj-15', name: '132 KV S/C Line from 132 KV GSS Didwana to 132 KV GSS Molasar', client: 'RRVPNL', category: 'Executed', location: 'Didwana – Molasar', voltage: '132kV', circuit: 'S/C', length: '28 km', scope: 'Tower Erection & Stringing', status: 'Completed' },
  { sn: 16, id: 'proj-16', name: '132 KV S/C Line from 220 KV GSS Phalodi to 132 KV GSS Bap', client: 'RRVPNL', category: 'Executed', location: 'Phalodi – Bap', voltage: '132kV', circuit: 'S/C', length: '40 km', scope: 'Complete Erection & Stringing', status: 'Completed' },
  { sn: 17, id: 'proj-17', name: '132 KV S/C Line from 132 KV GSS Phalodi to 132 KV GSS Osian', client: 'RRVPNL', category: 'Executed', location: 'Phalodi – Osian', voltage: '132kV', circuit: 'S/C', length: '60 km', scope: 'Long Distance Stringing & Erection', status: 'Completed' },
  { sn: 18, id: 'proj-18', name: '132 KV S/C Line from 132 KV GSS Jodhpur to 132 KV GSS Baori', client: 'RRVPNL', category: 'Executed', location: 'Jodhpur – Baori', voltage: '132kV', circuit: 'S/C', length: '36 km', scope: 'Tower Erection & Stringing', status: 'Completed' },
  { sn: 19, id: 'proj-19', name: '132 KV S/C Line on D/C Tower from 220 KV GSS Tinwari to 132 KV GSS Mathania', client: 'RRVPNL', category: 'Executed', location: 'Tinwari – Mathania', voltage: '132kV', circuit: 'S/C on D/C', length: '12 km', scope: 'Complete Transmission Works', status: 'Completed' },
  { sn: 20, id: 'proj-20', name: '132 KV S/C Line on D/C Tower from 220 KV GSS Tinwari to 132 KV GSS Osian', client: 'RRVPNL', category: 'Executed', location: 'Tinwari – Osian', voltage: '132kV', circuit: 'S/C on D/C', length: '30 km', scope: 'Tower Erection & Stringing', status: 'Completed' },
  { sn: 21, id: 'proj-21', name: '132 KV S/C Line from 132 KV GSS Pokran to 132 KV GSS Nachna', client: 'RRVPNL', category: 'Executed', location: 'Pokran – Nachna', voltage: '132kV', circuit: 'S/C', length: '60 km', scope: 'Desert Terrain Erection & Stringing', status: 'Completed' },
  { sn: 22, id: 'proj-22', name: '132 KV S/C Line from 132 KV GSS Pokran to 132 KV GSS Ramdevra', client: 'RRVPNL', category: 'Executed', location: 'Pokran – Ramdevra', voltage: '132kV', circuit: 'S/C', length: '12 km', scope: 'Transmission Line Erection', status: 'Completed' },
  { sn: 23, id: 'proj-23', name: '132 KV S/C Line on D/C Tower from 220 KV GSS Boranada to 132 KV GSS Salawas', client: 'RRVPNL', category: 'Executed', location: 'Boranada – Salawas', voltage: '132kV', circuit: 'S/C on D/C', length: '15 km', scope: 'Urban & Industrial Corridor Erection', status: 'Completed' },
  { sn: 24, id: 'proj-24', name: '132 KV S/C Line on D/C Tower from 220 KV GSS Jalore to 132 KV GSS Bagra', client: 'RRVPNL', category: 'Executed', location: 'Jalore – Bagra', voltage: '132kV', circuit: 'S/C on D/C', length: '20 km', scope: 'Tower Erection & Stringing', status: 'Completed' },
  { sn: 25, id: 'proj-25', name: '132 KV S/C Line on D/C Tower from 220 KV GSS Sirohi to 132 KV GSS Jawal', client: 'RRVPNL', category: 'Executed', location: 'Sirohi – Jawal', voltage: '132kV', circuit: 'S/C on D/C', length: '20 km', scope: 'Hilly & Rocky Terrain Erection', status: 'Completed' },
  { sn: 26, id: 'proj-26', name: '132 KV S/C Line from 132 KV GSS Jawal to 132 KV GSS Mandar', client: 'RRVPNL', category: 'Executed', location: 'Jawal – Mandar', voltage: '132kV', circuit: 'S/C', length: '35 km', scope: 'Tower Erection & Stringing', status: 'Completed' },
  { sn: 27, id: 'proj-27', name: '132 KV S/C Line from 132 KV GSS Barmer to 132 KV GSS Ramsar', client: 'RRVPNL', category: 'Executed', location: 'Barmer – Ramsar', voltage: '132kV', circuit: 'S/C', length: '45 km', scope: 'Border & Desert Corridor Stringing', status: 'Completed' },
  { sn: 28, id: 'proj-28', name: '132 KV S/C Line from 132 KV GSS Ramsar to 132 KV GSS Chohtan', client: 'RRVPNL', category: 'Executed', location: 'Ramsar – Chohtan', voltage: '132kV', circuit: 'S/C', length: '40 km', scope: 'Tower Erection & Stringing', status: 'Completed' },
  { sn: 29, id: 'proj-29', name: '132 KV S/C Line from 132 KV GSS Baytu to 132 KV GSS Gida', client: 'RRVPNL', category: 'Executed', location: 'Baytu – Gida', voltage: '132kV', circuit: 'S/C', length: '30 km', scope: 'Complete Transmission Works', status: 'Completed' },
  { sn: 30, id: 'proj-30', name: '132 KV S/C Line from 132 KV GSS Balotra to 132 KV GSS Siwana', client: 'RRVPNL', category: 'Executed', location: 'Balotra – Siwana', voltage: '132kV', circuit: 'S/C', length: '35 km', scope: 'Tower Erection & Stringing', status: 'Completed' },
  { sn: 31, id: 'proj-31', name: '132 KV S/C Line from 132 KV GSS Mokalsar to 132 KV GSS Jalore', client: 'RRVPNL', category: 'Executed', location: 'Mokalsar – Jalore', voltage: '132kV', circuit: 'S/C', length: '35 km', scope: 'Tower Erection & Stringing', status: 'Completed' },
  { sn: 32, id: 'proj-32', name: '132 KV S/C Line from 220 KV GSS Bhinmal to 132 KV GSS Sanchore', client: 'RRVPNL', category: 'Executed', location: 'Bhinmal – Sanchore', voltage: '132kV', circuit: 'S/C', length: '60 km', scope: 'Complete Erection & Stringing', status: 'Completed' },
  { sn: 33, id: 'proj-33', name: '132 KV S/C Line from 132 KV GSS Sanchore to 132 KV GSS Raniwara', client: 'RRVPNL', category: 'Executed', location: 'Sanchore – Raniwara', voltage: '132kV', circuit: 'S/C', length: '45 km', scope: 'Transmission Line Erection', status: 'Completed' },
  { sn: 34, id: 'proj-34', name: '132 KV S/C Line from 220 KV GSS Pali to 132 KV GSS Rohat', client: 'RRVPNL', category: 'Executed', location: 'Pali – Rohat', voltage: '132kV', circuit: 'S/C', length: '35 km', scope: 'Tower Erection & Stringing', status: 'Completed' },
  { sn: 35, id: 'proj-35', name: '132 KV S/C Line from 132 KV GSS Rohat to 132 KV GSS Jodhpur', client: 'RRVPNL', category: 'Executed', location: 'Rohat – Jodhpur', voltage: '132kV', circuit: 'S/C', length: '40 km', scope: 'Inter-district Transmission Line', status: 'Completed' },
  { sn: 36, id: 'proj-36', name: '132 KV S/C Line on D/C Tower from 220 KV GSS Sojat to 132 KV GSS Bilara', client: 'RRVPNL', category: 'Executed', location: 'Sojat – Bilara', voltage: '132kV', circuit: 'S/C on D/C', length: '25 km', scope: 'Tower Erection & Stringing', status: 'Completed' },
  { sn: 37, id: 'proj-37', name: '132 KV S/C Line from 132 KV GSS Bilara to 132 KV GSS Pipar City', client: 'RRVPNL', category: 'Executed', location: 'Bilara – Pipar City', voltage: '132kV', circuit: 'S/C', length: '30 km', scope: 'Complete Transmission Works', status: 'Completed' },
  { sn: 38, id: 'proj-38', name: '132 KV S/C Line on D/C Tower from 220 KV GSS Jaitaran to 132 KV GSS Anandpur Kalu', client: 'RRVPNL', category: 'Executed', location: 'Jaitaran – Anandpur Kalu', voltage: '132kV', circuit: 'S/C on D/C', length: '20 km', scope: 'Erection & Stringing', status: 'Completed' },
  { sn: 39, id: 'proj-39', name: '132 KV S/C Line from 132 KV GSS Anandpur Kalu to 132 KV GSS Ras', client: 'RRVPNL', category: 'Executed', location: 'Anandpur Kalu – Ras', voltage: '132kV', circuit: 'S/C', length: '25 km', scope: 'Industrial Corridor Transmission', status: 'Completed' },
  { sn: 40, id: 'proj-40', name: '132 KV S/C Line from 220 KV GSS Merta to 132 KV GSS Riyan Badi', client: 'RRVPNL', category: 'Executed', location: 'Merta – Riyan Badi', voltage: '132kV', circuit: 'S/C', length: '30 km', scope: 'Complete Erection & Stringing', status: 'Completed' },
  { sn: 41, id: 'proj-41', name: '132 KV S/C Line from 132 KV GSS Riyan Badi to 132 KV GSS Degana', client: 'RRVPNL', category: 'Executed', location: 'Riyan Badi – Degana', voltage: '132kV', circuit: 'S/C', length: '35 km', scope: 'Tower Erection & Stringing', status: 'Completed' },
  { sn: 42, id: 'proj-42', name: '132 KV S/C Line on D/C Tower from 220 KV GSS Nagaur to 132 KV GSS Mundwa', client: 'RRVPNL', category: 'Executed', location: 'Nagaur – Mundwa', voltage: '132kV', circuit: 'S/C on D/C', length: '20 km', scope: 'Cement Zone Corridor Erection', status: 'Completed' },
  { sn: 43, id: 'proj-43', name: '132 KV S/C Line from 132 KV GSS Mundwa to 132 KV GSS Khinvsar', client: 'RRVPNL', category: 'Executed', location: 'Mundwa – Khinvsar', voltage: '132kV', circuit: 'S/C', length: '40 km', scope: 'Complete Erection & Stringing', status: 'Completed' },
  { sn: 44, id: 'proj-44', name: '132 KV S/C Line from 132 KV GSS Khinvsar to 132 KV GSS Nagaur', client: 'RRVPNL', category: 'Executed', location: 'Khinvsar – Nagaur', voltage: '132kV', circuit: 'S/C', length: '45 km', scope: 'Ring Transmission Line Works', status: 'Completed' },
  { sn: 45, id: 'proj-45', name: '132 KV S/C Line on D/C Tower from 220 KV GSS Bikaner to 132 KV GSS Nokha', client: 'RRVPNL', category: 'Executed', location: 'Bikaner – Nokha', voltage: '132kV', circuit: 'S/C on D/C', length: '50 km', scope: 'Tower Erection & Stringing', status: 'Completed' },
  { sn: 46, id: 'proj-46', name: '132 KV S/C Line from 132 KV GSS Nokha to 132 KV GSS Kolayat', client: 'RRVPNL', category: 'Executed', location: 'Nokha – Kolayat', voltage: '132kV', circuit: 'S/C', length: '45 km', scope: 'Desert Terrain Transmission Erection', status: 'Completed' },
  { sn: 47, id: 'proj-47', name: '132 KV S/C Line from 132 KV GSS Kolayat to 132 KV GSS Gajner', client: 'RRVPNL', category: 'Executed', location: 'Kolayat – Gajner', voltage: '132kV', circuit: 'S/C', length: '30 km', scope: 'Tower Erection & Stringing', status: 'Completed' },
  { sn: 48, id: 'proj-48', name: '132 KV S/C Line from 132 KV GSS Gajner to 132 KV GSS Bikaner', client: 'RRVPNL', category: 'Executed', location: 'Gajner – Bikaner', voltage: '132kV', circuit: 'S/C', length: '35 km', scope: 'Complete Transmission Ring Works', status: 'Completed' },
  { sn: 49, id: 'proj-49', name: '132 KV S/C Line on D/C Tower from 220 KV GSS Suratgarh to 132 KV GSS Anupgarh', client: 'RRVPNL', category: 'Executed', location: 'Suratgarh – Anupgarh', voltage: '132kV', circuit: 'S/C on D/C', length: '60 km', scope: 'Canal & Agricultural Zone Erection', status: 'Completed' },
  { sn: 50, id: 'proj-50', name: '132 KV S/C Line from 132 KV GSS Anupgarh to 132 KV GSS Raisinghnagar', client: 'RRVPNL', category: 'Executed', location: 'Anupgarh – Raisinghnagar', voltage: '132kV', circuit: 'S/C', length: '45 km', scope: 'Complete Erection & Stringing', status: 'Completed' },
  { sn: 51, id: 'proj-51', name: '220 KV D/C Line for 225MW TPCD Noorsar (PGCIL Bikaner-II Grid)', client: 'Tata Power / TPCD', category: 'Recently Completed', location: 'Noorsar, Bikaner', voltage: '220kV', circuit: 'D/C', scope: 'Turnkey Solar Evacuation Line Erection', status: 'Energized' },
  { sn: 52, id: 'proj-52', name: '220 KV D/C Line for 150MW MSEDCL Solar Project', client: 'MSEDCL / TPSSL', category: 'Recently Completed', location: 'Chhayan, Jaisalmer', voltage: '220kV', circuit: 'D/C', scope: 'Transmission Line & Pooling Substation Connectivity', status: 'Energized' },
  { sn: 53, id: 'proj-53', name: '765/400/220kV Switchyard at PGCIL Fatehgarh Phase-II', client: 'Tata Projects Limited', category: 'Recently Completed', location: 'Fatehgarh, Jaisalmer', voltage: '765kV/400kV', scope: 'Gantry Erection, Bus Bar & Structural Steel', status: 'Operational' },
  { sn: 54, id: 'proj-54', name: '220kV Line Shifting for Amritsar-Jamnagar Expressway (NHAI)', client: 'NHAI / Ashoka Buildcon', category: 'Recently Completed', location: 'Western Rajasthan', voltage: '220kV/400kV', scope: 'Expressway Clearance & Tower Height Raising', status: 'Completed' },
  { sn: 55, id: 'proj-55', name: '220kV Transmission Line from Avaada Solar Plant to Badnu GSS', client: 'Avaada Clean Projects', category: 'Recently Completed', location: 'Bikaner', voltage: '220kV', scope: 'Turnkey Evacuation Line & Bay Extension', status: 'Energized' },
  { sn: 56, id: 'proj-56', name: '3-Year AMC for 50MW TPREL Ravra Switchyard & Tapping Station', client: 'Tata Power Renewable Energy', category: 'Recently Completed', location: 'Ravra, Jodhpur', voltage: '132kV', scope: 'Comprehensive O&M, Thermography & Maintenance', status: 'Operational' },
  { sn: 57, id: 'proj-57', name: '220kV Transmission Line Diversion for Jindal Saw Plant', client: 'Jindal Saw Limited', category: 'Private', location: 'Bhilwara', voltage: '220kV', scope: 'Industrial Plant Line Shifting & Rerouting', status: 'Completed' },
  { sn: 58, id: 'proj-58', name: '132kV Dedicated Feeder for RR Kabel Manufacturing Facility', client: 'Ram Ratna Wires Ltd', category: 'Private', location: 'Silvassa / Alwar', voltage: '132kV', scope: 'Industrial Substation & Power Line Erection', status: 'Completed' },
  { sn: 59, id: 'proj-59', name: '132kV Dedicated Power Line for Uttam Strips Steel Works', client: 'Uttam Strips Limited', category: 'Private', location: 'Bhiwadi, RJ', voltage: '132kV', scope: 'HT Line Erection & Switchyard Installation', status: 'Completed' },
  { sn: 60, id: 'proj-60', name: '132kV Line Diversion for Isarda Dam Reservoir Project', client: 'Water Resources Dept', category: 'Private', location: 'Isarda, Tonk', voltage: '132kV', scope: 'Submerged Zone Line Shifting & Benching', status: 'Completed' },
  { sn: 61, id: 'proj-61', name: '220kV DFCC Railway Corridor Transmission Package', client: 'Dedicated Freight Corridor (DFCC)', category: 'Private', location: 'Marwar – Bilara', voltage: '220kV', scope: 'Railway Track Crossing & High Tension Erection', status: 'Completed' },
  { sn: 62, id: 'proj-62', name: '132kV Pilani-Rajgarh Bypass Highway Line Shifting', client: 'PWD-NH Division', category: 'NHAI Shifting', location: 'Pilani – Rajgarh', voltage: '132kV', scope: 'Bypass Height Raising & Shifting', status: 'Completed' },
  { sn: 63, id: 'proj-63', name: '132kV Mega Highway Line Diversion at Hanumangarh', client: 'PWD Rajasthan', category: 'NHAI Shifting', location: 'Hanumangarh', voltage: '132kV', scope: 'Corridor Shifting & Clearance Verification', status: 'Completed' },
  { sn: 64, id: 'proj-64', name: '220kV LILO Tapping at GSS Rawatsar (STPS-Ratangarh Line)', client: 'RRVPNL', category: 'Private', location: 'Rawatsar', voltage: '220kV', circuit: 'LILO', scope: 'LILO Tower Erection & Live Line Integration', status: 'Completed' },
];
