import type { Messages } from './en'

const ptBR: Messages = {
  meta: {
    title: 'Blue Macaw Security',
    description:
      'A Blue Macaw Security implanta, configura e dá suporte a plataformas de redes seguras e de segurança em nuvem.',
  },
  site: {
    location:
      'SGAS 915, Bloco D, Sala 103, Parte CH 276, Asa Sul, Brasília - DF, 70390-150, Brasil',
  },
  nav: {
    label: 'Principal',
    compactLabel: 'Principal, compacto',
    homeLabel: 'Blue Macaw, voltar ao topo',
    services: 'Serviços',
    why: 'Por que nós',
    how: 'Como funciona',
    about: 'Sobre',
  },
  actions: {
    contact: 'Contato',
    bookCall: 'Agendar conversa',
    backToTop: 'Voltar ao topo',
  },
  language: {
    label: 'Idioma',
  },
  hero: {
    announceLabel: 'Serviços',
    announce: 'Implantação, configuração e suporte',
    title: 'Sua empresa protegida, do bico aos pés',
    lede: 'Pensado para empresas de todos os portes, porque segurança acessível é um direito de todos.',
    stackTitle: 'Plataformas que implantamos e atendemos',
    platforms: [
      'IAM',
      'ZTNA',
      'Cloud',
      'Gerenciamento centralizado',
      'Telemetria',
      'Segurança de endpoint',
    ],
  },
  why: {
    title: 'Feito certo da primeira vez.',
    titleMuted: 'Pensado para o futuro, com a visão do atacante.',
    reasons: [
      {
        title: 'Configurado contra ataques reais',
        body: 'Nossa engenharia vem da segurança ofensiva, então cada configuração é verificada pensando em como ela seria contornada na prática.',
      },
      {
        title: 'Automação eficiente',
        body: 'Conte com o poder da IA para automatizar processos e diminuir a carga da sua equipe.',
      },
      {
        title: 'Feito para ser operado',
        body: 'Políticas consistentes e gerenciamento centralizado, para que sua equipe entenda e altere o ambiente depois da entrada em produção.',
      },
      {
        title: 'Documentado e entregue',
        body: 'Todo projeto termina com documentação as-built e uma apresentação guiada, para que nada fique só na cabeça de um engenheiro.',
      },
    ],
  },
  services: {
    title: 'Implantação, configuração, suporte.',
    lede: 'Conte conosco para uma nova plataforma, para corrigir a que você já tem ou para assumir o primeiro nível de suporte depois que ela estiver em produção.',
    deployment: {
      tag: 'Projeto',
      title: 'Implantação de soluções',
      description:
        'Planejamos e implantamos novas plataformas de segurança com você, do dimensionamento e projeto até a virada, para que entrem em produção sem interromper sua operação.',
      link: 'Conversar sobre uma implantação',
      items: [
        {
          title: 'Dimensionamento e desenho da solução',
          body: 'Dimensionamos a plataforma para o seu tráfego, suas unidades e seu crescimento, e definimos a arquitetura antes de qualquer instalação.',
        },
        {
          title: 'Instalação e configuração inicial',
          body: 'Plataformas de redes seguras e de nuvem colocadas em operação e integradas à sua rede e ao seu provedor de identidade.',
        },
        {
          title: 'Migração da sua plataforma atual',
          body: 'Regras, objetos e VPNs migrados e organizados no caminho, não copiados às cegas.',
        },
        {
          title: 'Virada e entrega',
          body: 'Janelas de mudança planejadas com um plano de rollback testado e, depois, documentação as-built para sua equipe.',
        },
      ],
      card: {
        title: 'Plano de implantação',
        meta: 'Fases',
        phases: ['Avaliação', 'Projeto', 'Instalação', 'Migração', 'Virada'],
        note: 'Plano ilustrativo. Os prazos são definidos em cada projeto.',
      },
    },
    configuration: {
      tag: 'Projeto ou recorrente',
      title: 'Configuração e ajuste fino',
      description:
        'Faça a plataforma que você já tem funcionar como deveria: políticas limpas, gerenciamento centralizado e uma visibilidade útil de verdade.',
      link: 'Solicitar uma revisão de configuração',
      items: [
        {
          title: 'Limpeza de políticas e NAT',
          body: 'Regras sem uso, sombreadas ou permissivas demais encontradas e corrigidas.',
        },
        {
          title: 'Direcionamento de tráfego, VPN e segmentação',
          body: 'Seleção de caminho entre seus links, VPN site a site e de acesso remoto, e segmentos de rede que refletem a forma como você trabalha.',
        },
        {
          title: 'Perfis de segurança',
          body: 'IPS, filtragem web e controle de aplicações ajustados para bloquear ameaças sem travar o negócio.',
        },
        {
          title: 'Gerenciamento, logs e hardening',
          body: 'Um só lugar para gerenciar dispositivos e consultar logs, com acesso administrativo e serviços alinhados às boas práticas do fabricante.',
        },
      ],
      card: {
        title: 'Revisão de configuração',
        meta: 'Checklist',
        checklist: [
          'Políticas de firewall e NAT',
          'Direcionamento de tráfego e VPNs',
          'Segmentação de rede',
          'Perfis de segurança',
          'Gerenciamento e logs centralizados',
          'Hardening e acesso administrativo',
        ],
      },
    },
    support: {
      tag: 'Contrato mensal',
      title: 'Suporte',
      description:
        'Damos suporte a sua operação de forma contínua, sempre buscando o melhor desenvolvimento e adequação a sua rotina.',
      link: 'Falar sobre suporte',
      items: [
        {
          title: 'Abertura e triagem de chamados',
          body: 'Toda solicitação registrada, priorizada e respondida em até 24h, em dias úteis.',
        },
        {
          title: 'Mudanças de rotina',
          body: 'Regras, usuários e acessos VPN tratados sem esperar por um novo projeto.',
        },
        {
          title: 'Health checks e planejamento de firmware',
          body: 'Verificações regulares das suas plataformas e atualizações planejadas, para que os problemas apareçam antes que seus usuários percebam.',
        },
        {
          title: 'Escalonamento ao fabricante',
          body: 'Quando o problema exige o fabricante, abrimos o chamado e acompanhamos até o fim.',
        },
      ],
      card: {
        title: 'O caminho de um chamado',
        meta: '',
        received: { label: 'Chamado recebido', caption: 'Por e-mail ou pelo seu canal de suporte' },
        triage: { label: 'Triagem', caption: 'Impacto e prioridade definidos' },
        resolved: 'Resolvido pela nossa equipe',
        escalated: 'Escalado ao fabricante',
        closed: { label: 'Encerrado e documentado', caption: 'Você vê o que mudou e por quê' },
      },
    },
  },
  how: {
    title: 'Da primeira conversa ao suporte contínuo',
    lede: 'Quatro etapas, a mesma equipe em todas elas.',
    steps: [
      {
        title: 'Avaliação',
        body: 'Uma conversa inicial e uma análise do seu ambiente, dos requisitos e da plataforma atual.',
      },
      {
        title: 'Proposta',
        body: 'Um escopo por escrito, com desenho, cronograma e custo que cabem no seu orçamento.',
      },
      {
        title: 'Implantação e configuração',
        body: 'Implementamos, testamos e fazemos a virada junto com sua equipe e, em seguida, entregamos a documentação.',
      },
      {
        title: 'Suporte',
        body: 'Suporte contínuo para manter seu negócio sempre ativo.',
      },
    ],
  },
  fit: {
    title: 'Segurança que se adapta à sua realidade.',
    titleMuted: 'Não só para quem tem muito dinheiro.',
    body: 'Segurança da informação não precisa ser tão cara a ponto de só empresas com muito dinheiro terem condições de contratá-la. Na Blue Macaw, adaptamos o projeto ao seu orçamento e à sua realidade, com segurança de verdade que cabe no seu bolso, seja qual for o tamanho da sua empresa.',
    points: [
      {
        title: 'Sob medida para o seu orçamento',
        body: 'Montamos o projeto a partir do que você pode investir, não de um pacote fechado.',
      },
      {
        title: 'Segurança real, não de fachada',
        body: 'Caber no orçamento nunca significa deixar de fora o que realmente protege a sua empresa.',
      },
      {
        title: 'Para empresas de qualquer porte',
        body: 'Segurança deve estar ao alcance de todos, não apenas das grandes empresas.',
      },
    ],
  },
  about: {
    title: 'A Blue Macaw Security é uma empresa de engenharia de segurança sediada no Brasil.',
    titleMuted:
      'Implantamos, configuramos e damos suporte a plataformas corporativas de segurança de rede e nuvem para clientes no Brasil e no exterior.',
    facts: [
      { term: 'Sede', value: 'Brasília, Brasil' },
      { term: 'Foco', value: 'Plataformas de segurança de rede e nuvem' },
      { term: 'Serviços', value: 'Implantação, configuração e suporte' },
      {
        term: 'Certificações da equipe',
        value: 'Equipe qualificada e certificada com as melhores práticas do mercado.',
      },
      { term: 'Idiomas', value: 'Inglês, português e japonês' },
    ],
  },
  book: {
    title: 'Implantado do jeito certo.',
    titleMuted: 'Com suporte desde o primeiro dia.',
    bookCta: 'Agendar uma conversa inicial',
    emailCta: 'Escreva para',
  },
  footer: {
    services: 'Serviços',
    company: 'Empresa',
    contact: 'Contato',
  },
}

export default ptBR
