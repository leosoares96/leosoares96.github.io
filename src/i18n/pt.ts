export const pt = {
  nav: {
    about: "Sobre",
    experience: "Experiência",
    projects: "Projetos",
    techStack: "Tecnologias",
    education: "Formação",
    contact: "Contato",
  },
  hero: {
    greeting: "Olá, eu sou",
    name: "Leonardo Soares",
    title: "Senior Data Engineer | Tech Lead | Data Architect",
    subtitle: "Projetando plataformas de dados escaláveis e produtos de dados confiáveis em ambientes corporativos.",
    cta: "Ver Experiência",
    projects: "Projetos",
    github: "GitHub",
    contact: "Contato",
  },
  about: {
    sectionTitle: "Sobre",
    p1: "Engenheiro de Dados Sênior e Tech Lead com ampla experiência projetando arquiteturas de dados para grandes instituições financeiras. Atualmente no Itaú Unibanco, projeto produtos e plataformas de dados escaláveis que suportam milhões de transações em sistemas de pagamentos, crédito e operações bancárias.",
    p2: "Sou especializado na construção de pipelines distribuídos de dados de alto throughput utilizando serviços nativos de nuvem na AWS e GCP. Meu trabalho abrange todo o ciclo de vida dos dados — desde ingestão orientada a eventos com Kafka até camadas analíticas com PySpark, Glue e Athena.",
    p3: "Lidero iniciativas de engenharia, faço mentoria de engenheiros de dados e promovo a adoção de princípios de Data Mesh e práticas de Infraestrutura como Código em equipes. Anteriormente na Porto e Sindicante Digital, construí sistemas de dados fundamentais e plataformas de analytics.",
    location: "São Paulo, Brasil",
    email: "leo.soares64@outlook.com",
  },
  experience: {
    sectionTitle: "Experiência",
    items: [
      {
        company: "Itaú Unibanco",
        role: "Engenheiro de Dados Sênior / Tech Lead",
        period: "2021 — Presente",
        highlights: [
          "Liderei a arquitetura de dados end-to-end de um produto de microcrédito, definindo camadas de ingestão, transformação e consumo que viabilizaram o lançamento de um produto atendendo milhões de clientes.",
          "Desenvolvi pipelines de dados de alto throughput com PySpark e AWS Glue, processando bilhões de registros financeiros diariamente com SLA acima de 99,5%.",
          "Arquitetei uma plataforma de dados cloud-native na AWS (S3, Glue, Athena, EMR) que se tornou modelo de referência para novos produtos de dados na organização.",
          "Implementei ingestão de dados event-driven com Kafka, habilitando analytics em near-real-time para sistemas de pagamento incluindo Pix, cartões de crédito e transferências.",
          "Padronizei práticas de Infraestrutura como Código usando Terraform e CloudFormation, reduzindo o tempo de provisionamento em 70% e eliminando drift de configuração entre ambientes.",
          "Conduzi a adoção de princípios de Data Mesh, descentralizando a propriedade de dados entre domínios e habilitando produtos de dados self-serve consumidos por mais de 15 times de negócio.",
        ],
      },
      {
        company: "Porto",
        role: "Engenheiro de Dados & Analytics",
        period: "2021",
        highlights: [
          "Liderei o Projeto Atlas — migração estratégica de data warehouses on-premise legados para um data lake moderno no Google Cloud Platform, redesenhando camadas de ingestão e transformação para escalabilidade e eficiência de custos.",
        ],
      },
      {
        company: "Porto",
        role: "Analista de Banco de Dados",
        period: "2019 — 2020",
        highlights: [
          "Projetei e mantive modelos de dados relacionais em PostgreSQL para domínios de negócio críticos, e desenvolvi pipelines ETL que automatizaram processos manuais de relatórios, reduzindo o tempo de entrega em 60%.",
        ],
      },
      {
        company: "Porto",
        role: "Analista de Dados",
        period: "2017 — 2019",
        highlights: [
          "Construí dashboards analíticos e relatórios automatizados que suportaram a tomada de decisão estratégica em times de operações, sinistros e subscrição.",
        ],
      },
    ],
  },
  projects: {
    sectionTitle: "Projetos",
    viewRepo: "Ver Repositório",
    items: [
      {
        title: "Arquitetura de Referência AWS Data Platform",
        description: "Arquitetura de referência para uma plataforma de dados escalável na nuvem usando AWS, S3, Glue, Athena, Kafka e Terraform.",
        tags: ["AWS", "S3", "Glue", "Athena", "Kafka", "Terraform"],
        link: "https://github.com/Leosoares96",
      },
      {
        title: "Framework de Pipeline PySpark",
        description: "Framework reutilizável para construir pipelines PySpark escaláveis e observáveis com logging, validação de qualidade e componentes modulares.",
        tags: ["PySpark", "Python", "Data Quality", "AWS"],
        link: "https://github.com/Leosoares96",
      },
      {
        title: "Pipeline de Dados Event-Driven",
        description: "Exemplo de arquitetura usando Kafka e processamento em nuvem para construir pipelines de dados orientados a eventos.",
        tags: ["Kafka", "AWS", "Lambda", "Step Functions"],
        link: "https://github.com/Leosoares96",
      },
      {
        title: "Implementação de Exemplo Data Mesh",
        description: "Projeto demonstrando arquitetura de dados orientada a domínios e produtos de dados reutilizáveis.",
        tags: ["Data Mesh", "Terraform", "AWS", "Python"],
        link: "https://github.com/Leosoares96",
      },
    ],
  },
  techStack: {
    sectionTitle: "Tecnologias",
    categories: {
      languages: "Linguagens & Frameworks",
      cloud: "Cloud & Infraestrutura",
      data: "Dados & Arquitetura",
    },
  },
  education: {
    sectionTitle: "Formação",
    items: [
      { institution: "Harvard Business School Online", degree: "Business Analytics", period: "2025" },
      { institution: "FIAP", degree: "MBA em Engenharia de Dados", period: "2021 — 2022" },
      { institution: "Impacta Tecnologia", degree: "Bacharelado em Sistemas de Informação", period: "" },
      { institution: "ETEC", degree: "Técnico em Informática", period: "" },
    ],
  },
  certifications: {
    sectionTitle: "Certificações",
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
    sectionTitle: "Prêmios",
    items: [
      { name: "PRAD – Reconhecimento de Alta Performance", detail: "Itaú Unibanco (3x)" },
      { name: "Bolsa de Intercâmbio", detail: "University of Cincinnati" },
      { name: "Melhor Aluno", detail: "ETEC Itaquaquecetuba" },
    ],
  },
  contact: {
    sectionTitle: "Entre em Contato",
    subtitle: "Acredito no poder transformador dos dados. Meu compromisso é entregar soluções que realmente impulsionam resultados de negócio.",
  },
  footer: {
    built: "Desenvolvido por Leonardo Soares",
  },
};
