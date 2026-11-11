// English is the source language: its shape defines `Messages`, so the other
// locales fail type-checking if they miss or misname a key.

const en = {
  meta: {
    title: 'Blue Macaw Cybersecurity',
    description:
      'Blue Macaw Cybersecurity deploys, configures and supports secure networking and cloud security platforms.',
  },
  site: {
    location: 'Brazil',
  },
  nav: {
    label: 'Main',
    compactLabel: 'Main, compact',
    homeLabel: 'Blue Macaw, back to top',
    services: 'Services',
    why: 'Why us',
    how: 'How it works',
    about: 'About',
  },
  actions: {
    contact: 'Contact',
    bookCall: 'Book a call',
    backToTop: 'Back to top',
  },
  language: {
    label: 'Language',
  },
  hero: {
    announceLabel: 'Services',
    announce: 'Deployment, configuration and N1 support',
    title: 'Security platforms, deployed and supported.',
    lede: 'Purpose-built for companies that run on-premises and cloud security. From design to go-live, and the first line of support after it.',
    stackTitle: 'Platforms we deploy and support',
    platforms: ['Secure Networking', 'Cloud', 'Central management', 'Telemetry'],
  },
  why: {
    title: 'Done right the first time.',
    titleMuted: 'Built to be run by your team.',
    reasons: [
      {
        title: 'Configured against real attacks',
        body: 'Our engineering comes from offensive security, so every configuration is checked for how it would actually be bypassed.',
      },
      {
        title: 'Built to be operated',
        body: 'Consistent policies and centralized management, so your team can understand and change the setup after go-live.',
      },
      {
        title: 'Documented and handed over',
        body: "Every project ends with as-built documentation and a walkthrough, so nothing lives only in one engineer's head.",
      },
    ],
  },
  services: {
    title: 'Deploy, configure, support.',
    lede: 'Bring us in for a new platform, to fix the one you already have, or to run the first line of support once it is live.',
    deployment: {
      tag: 'Project',
      title: 'Solution deployment',
      description:
        'We plan and roll out new security platforms with you, from sizing and design to cutover, so they go live without disrupting your operation.',
      link: 'Discuss a deployment',
      items: [
        {
          title: 'Sizing and solution design',
          body: 'We size the platform for your traffic, sites and growth, and agree on the architecture before anything is installed.',
        },
        {
          title: 'Installation and initial setup',
          body: 'Secure networking and cloud platforms brought online and integrated with your network and identity provider.',
        },
        {
          title: 'Migration from your current platform',
          body: 'Rules, objects and VPNs carried over and cleaned up on the way, not copied blindly.',
        },
        {
          title: 'Cutover and handover',
          body: 'Planned change windows with a tested rollback path, then as-built documentation for your team.',
        },
      ],
      card: {
        title: 'Deployment plan',
        meta: 'Phases',
        // One name per bar; the bar geometry lives in ServicesSection.vue.
        phases: ['Assessment', 'Design', 'Installation', 'Migration', 'Cutover'],
        note: 'Illustrative plan. Timelines are agreed per project.',
      },
    },
    configuration: {
      tag: 'Project or recurring',
      title: 'Configuration and tuning',
      description:
        'Get the platform you already own working the way it should: clean policies, centralized management and visibility you can use.',
      link: 'Request a configuration review',
      items: [
        {
          title: 'Policy and NAT cleanup',
          body: 'Unused, shadowed and overly broad rules found and fixed.',
        },
        {
          title: 'Traffic steering, VPN and segmentation',
          body: 'Path selection across your links, site-to-site and remote access, and network segments that match how you work.',
        },
        {
          title: 'Security profiles',
          body: 'IPS, web filtering and application control tuned to stop threats without breaking the business.',
        },
        {
          title: 'Management, logging and hardening',
          body: 'One place to manage devices and read logs, with admin access and services aligned with vendor best practices.',
        },
      ],
      card: {
        title: 'Configuration review',
        meta: 'Checklist',
        checklist: [
          'Firewall policies and NAT',
          'Traffic steering and VPNs',
          'Network segmentation',
          'Security profiles',
          'Centralized management and logging',
          'Hardening and admin access',
        ],
      },
    },
    support: {
      tag: 'Monthly contract',
      title: 'N1 support',
      description:
        'The first line for your security platforms. We take the ticket, solve what is in scope and escalate the rest to the vendor with everything they need.',
      link: 'Talk about support',
      items: [
        {
          title: 'Ticket intake and triage',
          body: 'Every request logged, prioritized and answered within 24h, during business days.',
        },
        {
          title: 'Routine changes',
          body: 'Rules, users and VPN access handled without waiting for a new project.',
        },
        {
          title: 'Health checks and firmware planning',
          body: 'Regular checks on your platforms and planned updates, so problems surface before your users notice.',
        },
        {
          title: 'Vendor escalation',
          body: 'When an issue needs the manufacturer, we open the case and follow it through to the end.',
        },
      ],
      card: {
        title: 'How a request flows',
        meta: 'N1',
        received: { label: 'Request received', caption: 'By email or your support channel' },
        triage: { label: 'Triage', caption: 'Impact and priority set' },
        resolved: 'Resolved by our team',
        escalated: 'Escalated to the vendor',
        closed: { label: 'Closed and documented', caption: 'You see what changed and why' },
      },
    },
  },
  how: {
    title: 'From first call to ongoing support',
    lede: 'Four steps, the same team in each of them.',
    steps: [
      {
        title: 'Assessment',
        body: 'A discovery call and a look at your environment, requirements and current platform.',
      },
      { title: 'Proposal', body: 'A written scope with design, timeline and cost.' },
      {
        title: 'Deployment and configuration',
        body: 'We implement, test and cut over together with your team, then hand over the documentation.',
      },
      {
        title: 'N1 support',
        body: 'Ongoing first-line support on a monthly contract, with vendor escalation when needed.',
      },
    ],
  },
  about: {
    title: 'Blue Macaw Cybersecurity is a security engineering company based in Brazil.',
    titleMuted:
      'We deploy, configure and support enterprise network and cloud security platforms for clients in Brazil and abroad.',
    facts: [
      { term: 'Headquarters', value: 'Brazil' },
      { term: 'Focus', value: 'Network and cloud security platforms' },
      { term: 'Services', value: 'Deployment, configuration and N1 support' },
      { term: 'Team certifications', value: 'Vendor-certified cloud security architecture' },
      { term: 'Languages', value: 'English, Portuguese, Japanese' },
    ],
  },
  book: {
    title: 'Deployed right.',
    titleMuted: 'Supported from day one.',
    bookCta: 'Book a discovery call',
    // Followed by the email address.
    emailCta: 'Email',
  },
  footer: {
    services: 'Services',
    company: 'Company',
    contact: 'Contact',
  },
}

export type Messages = typeof en

export default en
