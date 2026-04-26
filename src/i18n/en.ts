export const en = {
  nav: {
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    techStack: 'Tech Stack',
    education: 'Education',
    contact: 'Contact',
  },
  hero: {
    greeting: "Hello, I'm",
    name: 'Leonardo Soares',
    title: 'Senior Data Engineer | Tech Lead | Data Architect',
    subtitle:
      'Designing scalable data platforms and reliable data products in enterprise environments.',
    cta: 'View Experience',
    projects: 'Projects',
    github: 'GitHub',
    contact: 'Contact',
  },
  about: {
    sectionTitle: 'About',
    p1:
      'Senior Data Engineer and Tech Lead with extensive experience designing data architectures for large-scale financial institutions. Currently at Itaú Unibanco, I architect scalable data products and platforms supporting millions of transactions across payment systems, credit products, and banking operations.',
    p2:
      'I specialize in building high-throughput distributed data pipelines using cloud-native services on AWS and GCP. My work spans the full data lifecycle — from event-driven ingestion with Kafka to analytical layers with PySpark, Glue, and Athena.',
    p3:
      'I lead engineering initiatives, mentor data engineers, and drive the adoption of Data Mesh principles and Infrastructure as Code practices across teams. Previously at Porto and Sindicante Digital, I built foundational data systems and analytics platforms.',
    location: 'São Paulo, Brazil',
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
    ],
  },
  projects: {
    sectionTitle: 'Projects',
    viewRepo: 'View Repository',
    items: [
      {
        title:
          'Data-Driven Platform for Public Construction Management (DER-SP)',
        description:
          'Fullstack data-driven platform developed for the São Paulo State Department of Highways (DER-SP), enabling operational management of public construction projects through APIs, relational data modeling, and analytical dashboards for monitoring, reporting, and decision-making.',
        tags: [
          'PostgreSQL',
          'Data Modeling',
          'Node.js',
          'React',
          'TypeScript',
          'REST API',
          'Analytics',
          'Data-Driven Systems',
          'Dashboarding',
          'Chart.js',
        ],
        link: 'https://scg-der.cloud.com.vc/',
      },
      {
        title: 'Titanic Data Pipeline',
        description:
          'Reproducible data pipeline with ingestion, transformation, data quality validation, and a serving layer with an interactive Streamlit dashboard.',
        tags: [
          'Python',
          'Pandas',
          'Data Pipeline',
          'Data Quality',
          'SQLite',
          'Parquet',
          'Streamlit',
        ],
        link: 'https://github.com/leosoares96/titanic-data-pipeline-streamlit/',
      },
      {
        title: 'NYC Taxi Analytics Pipeline',
        description:
          'Modern batch pipeline using Airflow, dbt, and DuckDB to process large-scale mobility data with analytical modeling and visualization.',
        tags: [
          'Airflow',
          'dbt',
          'DuckDB',
          'Analytics Engineering',
          'ELT',
          'Data Modeling',
          'Streamlit',
        ],
        link: 'https://github.com/leosoares96/nyc-taxi-analytics-pipeline/',
      },
    ],
  },
  techStack: {
    sectionTitle: 'Tech Stack',
    categories: {
      languages: 'Languages & Frameworks',
      cloud: 'Cloud & Infrastructure',
      data: 'Data & Architecture',
    },
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
        degree: 'MBA in Data Engineering',
        period: '2021 — 2022',
      },
      {
        institution: 'Instituto de Gestão e Tecnologia da Informação',
        degree: 'Full-Stack Developed',
        period: '2020',
      },
      {
        institution: 'Impacta Tecnologia',
        degree: 'Bachelor in Information Systems',
        period: '2016 – 2019',
      },
      {
        institution: 'ETEC',
        degree: 'Technical Degree in Informatics',
        period: '2016 – 2017',
      },
      {
        institution: 'ETEC',
        degree: 'Technical Degree in Informatics for Web',
        period: '2013 – 2014',
      },
    ],
  },
  certifications: {
    sectionTitle: 'Certifications',
    items: [
      {
        name: 'AWS Certified Data Engineer – Associate',
        issuer: 'Amazon Web Services',
      },
      {
        name: 'AWS Certified Cloud Practitioner',
        issuer: 'Amazon Web Services',
      },
      { name: 'Professional Data Engineering', issuer: 'Itaú Unibanco' },
      { name: 'Associate Data Engineering', issuer: 'Itaú Unibanco' },
      { name: 'Associate Analytics Engineering', issuer: 'Itaú Unibanco' },
      { name: 'Practitioner Data & Analytics', issuer: 'Itaú Unibanco' },
      { name: 'Practitioner Generative AI', issuer: 'Itaú Unibanco' },
    ],
  },
  awards: {
    sectionTitle: 'Awards',
    items: [
      {
        name: 'PRAD – High Performance Recognition',
        detail: 'Itaú Unibanco (3x)',
      },
      { name: 'Exchange Scholarship', detail: 'University of Cincinnati' },
      { name: 'Best Student', detail: 'ETEC Itaquaquecetuba' },
    ],
  },
  contact: {
    sectionTitle: 'Get in Touch',
    subtitle:
      'I believe in the transforming power of data. My commitment is to deliver solutions that truly drive business results.',
  },
  footer: {
    built: 'Built by Leonardo Soares',
  },
};
