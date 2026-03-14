export const en = {
  nav: {
    about: "About",
    experience: "Experience",
    projects: "Projects",
    techStack: "Tech Stack",
    education: "Education",
    contact: "Contact",
  },
  hero: {
    greeting: "Hello, I'm",
    name: "Leonardo Soares",
    title: "Senior Data Engineer | Tech Lead | Data Architect",
    subtitle: "Designing scalable data platforms and reliable data products in enterprise environments.",
    cta: "View Experience",
    projects: "Projects",
    github: "GitHub",
    contact: "Contact",
  },
  about: {
    sectionTitle: "About",
    p1: "Senior Data Engineer and Tech Lead with extensive experience designing data architectures for large-scale financial institutions. Currently at Itaú Unibanco, I architect scalable data products and platforms supporting millions of transactions across payment systems, credit products, and banking operations.",
    p2: "I specialize in building high-throughput distributed data pipelines using cloud-native services on AWS and GCP. My work spans the full data lifecycle — from event-driven ingestion with Kafka to analytical layers with PySpark, Glue, and Athena.",
    p3: "I lead engineering initiatives, mentor data engineers, and drive the adoption of Data Mesh principles and Infrastructure as Code practices across teams. Previously at Porto and Sindicante Digital, I built foundational data systems and analytics platforms.",
    location: "São Paulo, Brazil",
    email: "leo.soares64@outlook.com",
  },
  experience: {
    sectionTitle: "Experience",
    items: [
      {
        company: "Itaú Unibanco",
        role: "Senior Data Engineer / Tech Lead",
        period: "2021 — Present",
        highlights: [
          "Led the end-to-end data architecture for a microcredit product, defining ingestion, transformation and consumption layers that enabled the launch of a product serving millions of customers.",
          "Engineered high-throughput data pipelines with PySpark and AWS Glue, processing billions of financial records daily with SLA compliance above 99.5%.",
          "Architected a cloud-native data platform on AWS (S3, Glue, Athena, EMR) that became the reference model for new data products across the organization.",
          "Implemented real-time event-driven data ingestion with Kafka, enabling near-real-time analytics for payment systems including Pix, credit cards, and wire transfers.",
          "Standardized Infrastructure as Code practices using Terraform and CloudFormation, reducing provisioning time by 70% and eliminating configuration drift across environments.",
          "Drove the adoption of Data Mesh principles, decentralizing data ownership across domains and enabling self-serve data products consumed by over 15 business teams.",
        ],
      },
      {
        company: "Porto",
        role: "Data Engineer & Analytics",
        period: "2021",
        highlights: [
          "Led Project Atlas — a strategic migration from legacy on-premise data warehouses to a modern data lake on Google Cloud Platform, redesigning ingestion and transformation layers for scalability and cost efficiency.",
        ],
      },
      {
        company: "Porto",
        role: "Database Analyst",
        period: "2019 — 2020",
        highlights: [
          "Designed and maintained relational data models in PostgreSQL for core business domains, and developed ETL pipelines that automated manual reporting processes, reducing delivery time by 60%.",
        ],
      },
      {
        company: "Porto",
        role: "Data Analyst",
        period: "2017 — 2019",
        highlights: [
          "Built analytical dashboards and automated reports that supported strategic decision-making across operations, claims, and underwriting teams.",
        ],
      },
    ],
  },
  projects: {
    sectionTitle: "Projects",
    viewRepo: "View Repository",
    items: [
      {
        title: "AWS Data Platform Reference Architecture",
        description: "Reference architecture for a scalable cloud data platform using AWS, S3, Glue, Athena, Kafka and Terraform.",
        tags: ["AWS", "S3", "Glue", "Athena", "Kafka", "Terraform"],
        link: "https://github.com/Leosoares96",
      },
      {
        title: "PySpark Data Pipeline Framework",
        description: "Reusable framework for building scalable and observable PySpark pipelines with logging, quality validation and modular components.",
        tags: ["PySpark", "Python", "Data Quality", "AWS"],
        link: "https://github.com/Leosoares96",
      },
      {
        title: "Event-Driven Data Pipeline",
        description: "Example architecture using Kafka and cloud processing to build event-driven data pipelines.",
        tags: ["Kafka", "AWS", "Lambda", "Step Functions"],
        link: "https://github.com/Leosoares96",
      },
      {
        title: "Data Mesh Example Implementation",
        description: "Example project demonstrating domain-oriented data architecture and reusable data products.",
        tags: ["Data Mesh", "Terraform", "AWS", "Python"],
        link: "https://github.com/Leosoares96",
      },
    ],
  },
  techStack: {
    sectionTitle: "Tech Stack",
    categories: {
      languages: "Languages & Frameworks",
      cloud: "Cloud & Infrastructure",
      data: "Data & Architecture",
    },
  },
  education: {
    sectionTitle: "Education",
    items: [
      { institution: "Harvard Business School Online", degree: "Business Analytics", period: "2025" },
      { institution: "FIAP", degree: "MBA in Data Engineering", period: "2021 — 2022" },
      { institution: "Impacta Tecnologia", degree: "Bachelor in Information Systems", period: "" },
      { institution: "ETEC", degree: "Technical Degree in Informatics", period: "" },
    ],
  },
  certifications: {
    sectionTitle: "Certifications",
    items: [
      { name: "AWS Certified Data Engineer – Associate", issuer: "Amazon Web Services" },
      { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services" },
      { name: "Professional Data Engineering", issuer: "Itaú Unibanco" },
      { name: "Associate Data Engineering", issuer: "Itaú Unibanco" },
      { name: "Associate Analytics Engineering", issuer: "Itaú Unibanco" },
      { name: "Practitioner Data & Analytics", issuer: "Itaú Unibanco" },
      { name: "Practitioner Generative AI", issuer: "Itaú Unibanco" },
    ],
  },
  awards: {
    sectionTitle: "Awards",
    items: [
      { name: "PRAD – High Performance Recognition", detail: "Itaú Unibanco (3x)" },
      { name: "Exchange Scholarship", detail: "University of Cincinnati" },
      { name: "Best Student", detail: "ETEC Itaquaquecetuba" },
    ],
  },
  contact: {
    sectionTitle: "Get in Touch",
    subtitle: "I believe in the transforming power of data. My commitment is to deliver solutions that truly drive business results.",
  },
  footer: {
    built: "Built by Leonardo Soares",
  },
};
