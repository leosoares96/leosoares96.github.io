export const en = {
  nav: {
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    techStack: 'Technologies',
    education: 'Education',
    contact: 'Contact',
  },
  hero: {
    greeting: 'Hi, I am',
    name: 'Leonardo Soares Pereira',
    title: 'Senior Data Engineer | Tech Lead | Data Architect',
    subtitle:
      'Designing scalable data platforms and reliable data products in corporate environments.',
    cta: 'View Experience',
    projects: 'Projects',
    github: 'GitHub',
    contact: 'Contact',
  },
  about: {
    sectionTitle: 'About',
    p1:
      'Senior Data Engineer and Tech Lead with extensive experience designing data architectures for large financial institutions. Currently at Itaú Unibanco, I design scalable data products and platforms that support millions of transactions in payment, credit, and banking operations.',
    p2:
      'I specialize in building high-throughput distributed data pipelines using native cloud services on AWS and GCP. My work covers the full data lifecycle—from event-driven ingestion with Kafka to analytical layers using PySpark, Glue, and Athena.',
    p3:
      'I lead engineering initiatives, mentor data engineers, and promote the adoption of Data Mesh principles and Infrastructure as Code practices within teams. Previously at Porto and Sindicante Digital, I built fundamental data systems and analytics platforms.',
    location: 'São Paulo, SP, Brazil',
    email: 'leo.soares64@outlook.com',
  },
  experience: {
    sectionTitle: 'Experience',
    items: [
      {
        company: 'Itaú Unibanco',
        role: 'Data Engineer - Subject Matter Expert (SME)',
        period: 'Nov/2025 – Present',
        highlights: [
          'Acted as Data SME responsible for the architectural vision and governance of RT Mais Vantagens PJ, Itaú’s benefits program, ensuring standardization, scalability, and reliability across squads.',
          'Defined cross-squad architectures and created reusable assets (data products, components, and technical standards), promoting reuse, decoupling, sustainable evolution, and faster delivery.',
          'Built and consolidated frameworks for data democratization, governance, quality, auditing, and observability.',
          'Strategic collaboration with technical and product leadership on critical architectural decisions (performance, cost, scalability), strengthening operational maturity and technical leadership.',
        ],
      },
      {
        company: 'Itaú Unibanco',
        role: 'Tech Lead Data Engineer',
        period: 'May/2025 – Nov/2025',
        highlights: [
          'Technical leadership of a data product squad serving multiple areas within the PJ business unit.',
          'Managed end-to-end from design to execution, promoting best practices in architecture, CI/CD, versioning, and governance.',
          'Supported engineers through technical reviews, mentoring, and ensured compliance and operational efficiency.',
          'Actively participated in building cross-domain data architectures with a focus on reliability, scalability, and observability.',
        ],
      },
      {
        company: 'Itaú Unibanco',
        role: 'Data Engineer & Analytics',
        period: 'Sep/2021 – May/2025',
        highlights: [
          'Structured the data architecture for the microcredit product, defining critical data and AWS architectures (S3, Glue, Athena) with Kafka integrations.',
          'Implemented Infrastructure as Code (Terraform, CloudFormation), pipelines in PySpark/AWS Glue, workshops, and technical presentations.',
          'Evolved to a Data Mesh model with governance, cataloging, and quality monitoring using Glue Data Quality.',
          'Also acted as senior in the PJ Data Products squad, integrating large volumes of payment data (TED, boleto, TEF, direct debit, cards, Pix).',
          'Focused on pipeline orchestration, data governance, quality, and performance in critical AWS environments.',
        ],
      },
      {
        company: 'Porto Seguro',
        role: 'Data Engineer & Analytics',
        period: 'Jan/2021 – Aug/2021',
        highlights: [
          "Participated in the 'Atlas' project focused on modernizing databases and analyses for the Customer Service Directorate, migrating to a Data Lake on Google Cloud Platform (GCP).",
          'Mapped data, maintained PostgreSQL environments, and created essential reports for strategic decision-making.',
          'Responsible for creating and implementing data pipelines using Informatica Data Integration.',
        ],
      },
      {
        company: 'Porto Seguro',
        role: 'Database Analyst',
        period: 'May/2019 – Dec/2020',
        highlights: [
          'Performed data analysis, modeling, and database development.',
          'Created ETL routines, using procedures and triggers on PostgreSQL.',
        ],
      },
      {
        company: 'Porto Seguro',
        role: 'Data Analyst',
        period: 'Aug/2017 – Apr/2019',
        highlights: [
          'Provided essential information to planning and control areas, supervisors, and analysts.',
          'Developed reports and dashboards to support strategic decision-making.',
        ],
      },
      {
        company: 'Porto Seguro',
        role: 'Apprentice',
        period: 'May/2016 – Jul/2017',
        highlights: [
          'Provided support in customer service and conducted satisfaction surveys.',
          'Created reports using Excel and VBA.',
          'Developed communication, organization, and teamwork skills.',
        ],
      },
    ],
  },
  education: {
    sectionTitle: 'Education',
    items: [
      {
        institution: 'Harvard Business School Online',
        degree: 'Business Analytics',
        period: '2025',
      },
      {
        institution: 'FIAP',
        degree: 'MBA Data Engineer',
        period: '2021 – 2022',
      },
      {
        institution: 'Instituto de Gestão e Tecnologia da Informação',
        degree: 'Full-Stack Developer',
        period: '2020',
      },
      {
        institution: 'Impacta Tecnologia',
        degree: 'Bachelor in Information Systems',
        period: '2016 – 2019',
      },
      {
        institution: 'ETEC',
        degree: 'Computer Technician',
        period: '2016 – 2017',
      },
      {
        institution: 'ETEC',
        degree: 'Internet Computing Technician',
        period: '2013 – 2014',
      },
    ],
  },
  certifications: {
    sectionTitle: 'Certifications',
    items: [
      { name: 'Itaú Unibanco – Practitioner Generative AI', year: 2025 },
      {
        name: 'Itaú Unibanco – Associate Data & Analytics Engineering',
        year: 2025,
      },
      { name: 'Itaú Unibanco – Change Management Quality', year: 2025 },
      { name: 'AWS Certified Data Engineer – Associate', year: 2024 },
      { name: 'Itaú Unibanco – Professional Data Engineering', year: 2024 },
      { name: 'Itaú Unibanco – Associate Analytics Engineering', year: 2023 },
      { name: 'Itaú Unibanco – Associate Data Engineering', year: 2023 },
      { name: 'Itaú Unibanco – Practitioner Data & Analytics', year: 2023 },
      { name: 'AWS Certified Cloud Practitioner', year: 2022 },
    ],
  },
  projects: {
    sectionTitle: 'Projects',
    items: [
      {
        title: 'Vital Signs Data',
        description:
          'Consolidation of PF and PJ client flow data (TED, boleto, TEF, direct debit, cards, Pix) – Itaú',
        link: 'https://github.com/Leosoares96',
      },
      {
        title: 'Microcredit Data Architecture',
        description:
          'Design and construction of the data architecture for the microcredit product at Itaú in its initial phase.',
        link: 'https://github.com/Leosoares96',
      },
      {
        title: 'Atlas Project',
        description:
          'Data modernization and migration to a Data Lake on GCP – Porto Seguro.',
        link: 'https://github.com/Leosoares96',
      },
      {
        title: 'Unified Performance',
        description:
          'Construction of the omnichannel web monitoring dashboard (Genesys, Avaya, WhatsApp, Chat) – Porto Seguro.',
        link: 'https://github.com/Leosoares96',
      },
    ],
  },
  awards: {
    sectionTitle: 'Awards',
    items: [
      {
        name: '3x PRAD – High Performance Recognition Program',
        detail: 'Itaú – 2023, 2024, 2025',
      },
      {
        name: 'Exchange Scholarship',
        detail: 'University of Cincinnati – ETEC 2015',
      },
      { name: 'Best Student', detail: 'ETEC Itaquaquecetuba – 2014' },
    ],
  },
  contact: {
    sectionTitle: 'Contact',
    subtitle:
      'I believe in the transformative power of data. My commitment is to deliver solutions that truly drive business results.',
  },
  footer: {
    built: 'Built by Leonardo Soares',
  },
};
