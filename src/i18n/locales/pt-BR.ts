import type { Messages } from './en'

const ptBR: Messages = {
  meta: {
    title: 'Blue Macaw Cybersecurity',
    description:
      'A Blue Macaw Cybersecurity implanta, configura e dá suporte a plataformas de redes seguras e de segurança em nuvem.',
  },
  site: {
    location: 'Brasil',
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
    announce: 'Implantação, configuração e suporte N1',
    title: 'Plataformas de segurança, implantadas e com suporte.',
    lede: 'Pensado para empresas que operam segurança on-premises e em nuvem. Do projeto à entrada em produção, e o primeiro nível de suporte depois dela.',
    stackTitle: 'Plataformas que implantamos e atendemos',
    platforms: ['Redes seguras', 'Nuvem', 'Gerenciamento centralizado', 'Telemetria'],
  },
  why: {
    title: 'Feito certo da primeira vez.',
    titleMuted: 'Pensado para ser operado pela sua equipe.',
    reasons: [
      {
        title: 'Configurado contra ataques reais',
        body: 'Nossa engenharia vem da segurança ofensiva, então cada configuração é verificada pensando em como ela seria contornada na prática.',
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
      title: 'Suporte N1',
      description:
        'O primeiro nível de atendimento das suas plataformas de segurança. Recebemos o chamado, resolvemos o que está no escopo e escalamos o restante ao fabricante com tudo o que ele precisa.',
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
        meta: 'N1',
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
      { title: 'Proposta', body: 'Um escopo por escrito, com desenho, cronograma e custo.' },
      {
        title: 'Implantação e configuração',
        body: 'Implementamos, testamos e fazemos a virada junto com sua equipe e, em seguida, entregamos a documentação.',
      },
      {
        title: 'Suporte N1',
        body: 'Suporte contínuo de primeiro nível em contrato mensal, com escalonamento ao fabricante quando necessário.',
      },
    ],
  },
  about: {
    title: 'A Blue Macaw Cybersecurity é uma empresa de engenharia de segurança sediada no Brasil.',
    titleMuted:
      'Implantamos, configuramos e damos suporte a plataformas corporativas de segurança de rede e nuvem para clientes no Brasil e no exterior.',
    facts: [
      { term: 'Sede', value: 'Brasil' },
      { term: 'Foco', value: 'Plataformas de segurança de rede e nuvem' },
      { term: 'Serviços', value: 'Implantação, configuração e suporte N1' },
      {
        term: 'Certificações da equipe',
        value: 'Arquitetura de segurança em nuvem certificada pelos fabricantes',
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
