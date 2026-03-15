export const pt = {
  nav: {
    about: 'Sobre',
    experience: 'Experiência',
    projects: 'Projetos',
    techStack: 'Tecnologias',
    education: 'Formação',
    contact: 'Contato',
  },
  hero: {
    greeting: 'Olá, eu sou',
    name: 'Leonardo Soares',
    title: 'Senior Data Engineer | Tech Lead | Data Architect',
    subtitle:
      'Projetando plataformas de dados escaláveis e produtos de dados confiáveis em ambientes corporativos.',
    cta: 'Ver Experiência',
    projects: 'Projetos',
    github: 'GitHub',
    contact: 'Contato',
  },
  about: {
    sectionTitle: 'Sobre',
    p1:
      'Engenheiro de Dados Sênior e Tech Lead com ampla experiência projetando arquiteturas de dados para grandes instituições financeiras. Atualmente no Itaú Unibanco, projeto produtos e plataformas de dados escaláveis que suportam milhões de transações em sistemas de pagamentos, crédito e operações bancárias.',
    p2:
      'Sou especializado na construção de pipelines distribuídos de dados de alto throughput utilizando serviços nativos de nuvem na AWS e GCP. Meu trabalho abrange todo o ciclo de vida dos dados — desde ingestão orientada a eventos com Kafka até camadas analíticas com PySpark, Glue e Athena.',
    p3:
      'Lidero iniciativas de engenharia, faço mentoria de engenheiros de dados e promovo a adoção de princípios de Data Mesh e práticas de Infraestrutura como Código em equipes. Anteriormente na Porto e Sindicante Digital, construí sistemas de dados fundamentais e plataformas de analytics.',
    location: 'São Paulo, Brasil',
    email: 'leo.soares64@outlook.com',
  },
  experience: {
    sectionTitle: 'Experiência',
    items: [
      {
        company: 'Itaú Unibanco',
        role: 'Data Engineer - Subject Matter Expert (SME) - Mais Vantagens PJ',
        period: 'Nov/2025 – Atual',
        highlights: [
          'Atuação como SME de Dados responsável pela visão arquitetural e governança da RT Mais Vantagens PJ, programa de benefícios do Itaú, garantindo padronização, escalabilidade e confiabilidade de forma transversal às squads.',
          'Definição de arquiteturas cross-squad e criação de ativos reutilizáveis (data products, componentes e padrões técnicos), promovendo reuso, desacoplamento, evolução sustentável e aceleração de entregas.',
          'Construção e consolidação de frameworks de democratização, governança, qualidade, auditoria e observabilidade de dados.',
          'Atuação estratégica junto a lideranças técnicas e de produto em decisões arquiteturais críticas (performance, custo e escalabilidade), fortalecendo a maturidade operacional e a liderança técnica.',
        ],
      },
      {
        company: 'Itaú Unibanco',
        role: 'Tech Lead Data Engineer - BUPJ',
        period: 'Mai/2025 – Nov/2025',
        highlights: [
          'Liderança técnica de squad de produtos de dados atendendo múltiplas áreas do banco dentro da BU PJ.',
          'Atuação desde concepção à execução, promovendo boas práticas de arquitetura, CI/CD, versionamento e governança.',
          'Apoio a engenheiros, revisões técnicas, mentorias e garantia de compliance e eficiência operacional.',
          'Participação ativa na construção de arquiteturas de dados cross, com foco em confiabilidade, escalabilidade e observabilidade.',
        ],
      },
      {
        company: 'Itaú Unibanco',
        role: 'Data Engineer & Analytics - Microcrédito',
        period: 'Set/2021 – Mai/2025',
        highlights: [
          'Estruturação da arquitetura de dados para o produto de microcrédito, definindo dados críticos e arquiteturas em AWS (S3, Glue, Athena), integrações via Kafka.',
          'Infraestrutura como código (Terraform, CloudFormation), pipelines em PySpark/AWS Glue, workshops e apresentações técnicas.',
          'Evolução para modelo Data Mesh, com governança, catalogação e monitoramento de qualidade com Glue Data Quality.',
          'Nesse período, também tive atuação como sênior da squad de Produtos de Dados PJ, integrando grandes volumes de dados de meios de pagamento (TED, boleto, TEF, débito automático, cartões, Pix).',
          'Foco em orquestração de pipelines, governança, qualidade de dados e performance em ambientes críticos AWS.',
        ],
      },
      {
        company: 'Porto Seguro',
        role: 'Data Engineer & Analytics',
        period: 'Jan/2021 – Ago/2021',
        highlights: [
          "Participei do projeto 'Atlas', dedicado à modernização das bases de dados e análises da diretoria de atendimento, migrando para um Data Lake na Google Cloud Platform (GCP).",
          'Mapeamento de dados, sustentação do ambiente PostgreSQL e criação de relatórios essenciais para a tomada de decisões estratégicas.',
          'Criação e implementação de pipelines de dados utilizando a ferramenta Informatica Data Integration.',
        ],
      },
      {
        company: 'Porto Seguro',
        role: 'Database Analyst',
        period: 'Mai/2019 – Dez/2020',
        highlights: [
          'Análises, modelagem e desenvolvimento de banco de dados.',
          'Criação de rotinas de ETL, utilização de procedures e triggers no PostgreSQL.',
        ],
      },
      {
        company: 'Porto Seguro',
        role: 'Data Analyst',
        period: 'Ago/2017 – Abr/2019',
        highlights: [
          'Fornecimento de informações essenciais às áreas de planejamento e controle das operações de atendimento, supervisores e analistas.',
          'Desenvolvimento de relatórios e dashboards para apoiar decisões estratégicas.',
        ],
      },
      {
        company: 'Porto Seguro',
        role: 'Aprendiz',
        period: 'Mai/2016 – Jul/2017',
        highlights: [
          'Suporte no atendimento ao cliente segurado e realização de pesquisas de satisfação.',
          'Criação de relatórios utilizando Excel e VBA.',
          'Desenvolvimento de habilidades de comunicação, organização e trabalho em equipe.',
        ],
      },
    ],
  },
  projects: {
    sectionTitle: 'Projetos',
    viewRepo: 'Ver Repositório',
    items: [
      {
        title: 'Arquitetura de Referência AWS Data Platform',
        description:
          'Arquitetura de referência para uma plataforma de dados escalável na nuvem usando AWS, S3, Glue, Athena, Kafka e Terraform.',
        tags: ['AWS', 'S3', 'Glue', 'Athena', 'Kafka', 'Terraform'],
        link: 'https://github.com/Leosoares96',
      },
      {
        title: 'Framework de Pipeline PySpark',
        description:
          'Framework reutilizável para construir pipelines PySpark escaláveis e observáveis com logging, validação de qualidade e componentes modulares.',
        tags: ['PySpark', 'Python', 'Data Quality', 'AWS'],
        link: 'https://github.com/Leosoares96',
      },
      {
        title: 'Pipeline de Dados Event-Driven',
        description:
          'Exemplo de arquitetura usando Kafka e processamento em nuvem para construir pipelines de dados orientados a eventos.',
        tags: ['Kafka', 'AWS', 'Lambda', 'Step Functions'],
        link: 'https://github.com/Leosoares96',
      },
      {
        title: 'Implementação de Exemplo Data Mesh',
        description:
          'Projeto demonstrando arquitetura de dados orientada a domínios e produtos de dados reutilizáveis.',
        tags: ['Data Mesh', 'Terraform', 'AWS', 'Python'],
        link: 'https://github.com/Leosoares96',
      },
    ],
  },
  techStack: {
    sectionTitle: 'Tecnologias',
    categories: {
      languages: 'Linguagens & Frameworks',
      cloud: 'Cloud & Infraestrutura',
      data: 'Dados & Arquitetura',
    },
  },
  education: {
    sectionTitle: 'Formação',
    items: [
      {
        institution: 'Harvard Business School Online',
        degree: 'Business Analytics',
        period: '2025',
      },
      {
        institution: 'FIAP',
        degree: 'MBA em Engenharia de Dados',
        period: '2021 — 2022',
      },
      {
        institution: 'Instituto de Gestão e Tecnologia da Informação',
        degree: 'Desenvolvedor Full-Stack',
        period: '2020',
      },
      {
        institution: 'Impacta Tecnologia',
        degree: 'Bacharelado em Sistemas de Informação',
        period: '2016 – 2019',
      },
      {
        institution: 'ETEC',
        degree: 'Técnico em Informática',
        period: '2016 – 2017',
      },
      {
        institution: 'ETEC',
        degree: 'Técnico em Informática para Internet',
        period: '2013 – 2014',
      },
    ],
  },
  certifications: {
    sectionTitle: 'Certificações',
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
    sectionTitle: 'Prêmios',
    items: [
      {
        name: 'PRAD – Reconhecimento de Alta Performance',
        detail: 'Itaú Unibanco (3x)',
      },
      { name: 'Bolsa de Intercâmbio', detail: 'University of Cincinnati' },
      { name: 'Melhor Aluno', detail: 'ETEC Itaquaquecetuba' },
    ],
  },
  contact: {
    sectionTitle: 'Entre em Contato',
    subtitle:
      'Acredito no poder transformador dos dados. Meu compromisso é entregar soluções que realmente impulsionam resultados de negócio.',
  },
  footer: {
    built: 'Desenvolvido por Leonardo Soares',
  },
};
