import { Doctor, ServiceItem, Differential, Testimonial, FaqItem, StepProtocol } from '../types';

export const CLINIC_INFO = {
  name: 'Lubru Odontologia',
  tagline: 'Odontologia Reabilitadora',
  address: 'Av. Brg. José Vicente Faria Lima, 38 - Centro, Atibaia-SP',
  phone: '(11) 94158-5340',
  phoneRaw: '5511941585340',
  whatsappUrl: 'https://wa.me/5511941585340',
  hours: 'Segunda a Sexta: 08:00 - 18:30 | Sábados: Com agendamento prévio',
  croClinic: 'EPAO 12.890',
  googleRating: 5.0,
  googleReviewsCount: 148,
  transformedSmiles: '2.500+',
  city: 'Atibaia - SP',
};

export const DOCTORS: Doctor[] = [
  {
    name: 'Dr. Lucas Cavalcante Pracchia',
    cro: 'CROSP 141.155',
    role: 'Responsável Técnico & Especialista em Implantodontia e Cirurgia Avançada',
    specialties: ['Carga Imediata (Protocolo 4 Pinos)', 'Cirurgia Guiada 3D', 'Reabilitação Oral Estética'],
    bio: 'Referência em reabilitações orais complexas e implantes de alta precisão em Atibaia. Dedica-se ao planejamento digital minimamente invasivo, proporcionando aos pacientes a recuperação da mastigação e do sorriso com máximo conforto e pontualidade.',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Dra. Bruna Soares Diodatti Pracchia',
    cro: 'CROSP 139.987',
    role: 'Especialista em Estética Dental, Ortodontia & Harmonização do Sorriso',
    specialties: ['Lentes de Contato Dentais', 'Alinhadores Invisíveis', 'Odontologia Preventiva e Integrativa'],
    bio: 'Pioneira em Odontologia Estética com visão integrativa. Focada no alinhamento discreto, facetas cerâmicas de acabamento natural e na preservação da saúde sistêmica a partir de um diagnóstico bucal minucioso.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
  },
];

export const CARGA_IMEDIATA_STEPS: StepProtocol[] = [
  {
    step: 1,
    title: 'Mapeamento Digital 3D & Tomografia',
    description: 'Avaliamos a estrutura óssea através de escaneamento intraoral e planejamento computadorizado. Você visualiza o resultado antes mesmo do procedimento.',
    highlight: 'Zero moldes desconfortáveis',
    duration: 'Primeira consulta',
  },
  {
    step: 2,
    title: 'Instalação de 4 Implantes Estratégicos',
    description: 'Fixação de 4 pinos de titânio de alta tecnologia biocompatível em posições anatômicas ideais, aproveitando ao máximo a estrutura ossea sem necessidade de enxertos na maioria dos casos.',
    highlight: 'Técnica indolor e minimamente invasiva',
    duration: 'Sessão cirúrgica',
  },
  {
    step: 3,
    title: 'Fixação dos Dentes no Mesmo Dia',
    description: 'Instalação da prótese fixa provisória de alta resistência. O paciente entra no consultório e sai no mesmo dia com dentes fixos, sorrindo e mastigando com segurança.',
    highlight: 'Transformação imediata',
    duration: 'No mesmo dia',
  },
  {
    step: 4,
    title: 'Acompanhamento & Instalação Final',
    description: 'Após a osteointegratação completa, ajustamos os detalhes estéticos finais da prótese em cerâmica para garantir brilho, textura e mastigação perfeita.',
    highlight: 'Segurança e alta durabilidade',
    duration: 'Acompanhamento contínuo',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'implantes',
    title: 'Implantes Dentários & Carga Imediata',
    category: 'Reabilitação Oral',
    description: 'Recupere a estabilidade e a estética do seu sorriso. Substituição de próteses móbiles por dentes fixos de forma segura, indolor e previsível.',
    benefits: [
      'Protocolo de Carga Imediata em até 24/48h',
      'Aproveitamento ósseo inteligente sem enxerto extenso',
      'Mastigação firme para saborear qualquer alimento',
      'Estética idêntica aos dentes naturais',
    ],
    iconName: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
    whatsappMessage: 'Olá! Gostaria de consultar informações sobre Implantes Dentários e Carga Imediata na Lubru Odontologia.',
  },
  {
    id: 'ortodontia',
    title: 'Ortodontia & Alinhadores Invisíveis',
    category: 'Ortodontia de Precisão',
    description: 'Alinhamento dental moderno com a discrição que seu estilo de vida exige. Tratamentos com placas transparentes e aparelhos estéticos.',
    benefits: [
      'Removíveis e imperceptíveis na rotina social',
      'Planejamento 3D com previsão de resultado',
      'Consultas rápidas e confortáveis',
      'Sem fios metálicos machucando a gengiva',
    ],
    iconName: 'Smile',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
    whatsappMessage: 'Olá! Desejo saber mais sobre o alinhamento com Alinhadores Invisíveis na Lubru Odontologia.',
  },
  {
    id: 'endodontia',
    title: 'Endodontia Mecanizada (Canal em 1 Sessão)',
    category: 'Tratamento de Precisão',
    description: 'Eliminação da dor com rapidez e precisão tecnológica. Sistema rotatório computadorizado que permite tratar o canal em sessão única.',
    benefits: [
      'Tratamento resolvido em sessão única na maioria dos casos',
      'Instrumentação mecanizada ultra-rápida e precisa',
      'Anestesia de alta eficácia sem desconforto',
      'Preservação máxima do dente natural',
    ],
    iconName: 'Zap',
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80',
    whatsappMessage: 'Olá! Gostaria de agendar uma avaliação para Endodontia Mecanizada / Canal.',
  },
  {
    id: 'estetica',
    title: 'Estética Avançada & Lentes de Contato',
    category: 'Transformação do Sorriso',
    description: 'Facetas cerâmicas ultra-finas personalizadas para corrigir cor, formato, fechamento de espaços e assimetrias com elegância natural.',
    benefits: [
      'Lentes cerâmicas de altíssima durabilidade',
      'Desenho do sorriso harmônico com as proporções faciais',
      'Preservação da estrutura dental original',
      'Resultado sofisticado e sem aspecto artificial',
    ],
    iconName: 'Gem',
    image: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=800&q=80',
    whatsappMessage: 'Olá! Quero agendar uma consulta para avaliar Lentes de Contato Dentais na Lubru.',
  },
  {
    id: 'proteses',
    title: 'Próteses & Reabilitação Funcional',
    category: 'Restauradora',
    description: 'Soluções personalizadas em porcelana e zircônia para devolver o equilíbrio oclusal, o conforto fonético e a autoimagem.',
    benefits: [
      'Materiais nobres de alta biocompatibilidade (Zircônia)',
      'Conforto mastigatório e articulação restaurada',
      'Acabamento artesanal e brilho natural',
      'Suporte para reconstrução labial e facial',
    ],
    iconName: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
    whatsappMessage: 'Olá! Gostaria de informações sobre Próteses e Reabilitação Funcional.',
  },
  {
    id: 'preventiva',
    title: 'Saúde Preventiva, Bruxismo & Cirurgias',
    category: 'Saúde Integrativa',
    description: 'Cuidados abrangentes para prevenção de cáries, placa, retração gengival, placa de bruxismo e profilaxia bucal de rotina.',
    benefits: [
      'Placa miorelaxante para bruxismo e dores de cabeça',
      'Tratamento preventivo da retração gengival',
      'Proteção contra infecções e endocardite bacteriana',
      'Manutenção periódica para longevidade dos tratamentos',
    ],
    iconName: 'HeartPulse',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    whatsappMessage: 'Olá! Quero agendar uma consulta preventiva / bruxismo na Lubru Odontologia.',
  },
];

export const DIFFERENTIALS: Differential[] = [
  {
    id: 'pontualidade',
    title: 'Pontualidade Rígida',
    subtitle: 'Respeito Absoluto ao Seu Tempo',
    description: 'Entendemos a rotina exigente dos nossos pacientes. Atendimento rigorosamente no horário agendado, sem filas de espera ou atrasos no consultório.',
    iconName: 'Clock',
    badge: 'Atendimento VIP',
  },
  {
    id: 'tecnologia',
    title: 'Tecnologia de Ponta 3D',
    subtitle: 'Tratamentos Menos Doloridos e Mais Rápidos',
    description: 'Escaneamento intraoral digital, planejamento de cirurgia guiada por computador e motores rotatórios que reduzem substancialmente o tempo de cirurgia e desconforto pós-operatório.',
    iconName: 'Cpu',
    badge: 'Avanço Digital',
  },
  {
    id: 'reembolso',
    title: 'Documentação para Reembolso',
    subtitle: 'Atendimento Particular',
    description: 'Não aceitamos convênios odontológicos, porém disponibilizamos toda a documentação necessária para que você possa solicitar o reembolso à sua operadora. Confira as condições contratuais do seu plano de saúde e agende sua consulta conosco.',
    iconName: 'Receipt',
    badge: 'Documentação',
  },
  {
    id: 'integrativa',
    title: 'Saúde Integrativa e Coração',
    subtitle: 'Proteção Bordo a Bordo',
    description: 'Sua saúde bucal impacta diretamente seu sistema cardiovascular. Cuidamos do seu sorriso eliminando focos infecciosos para prevenir complicações como a endocardite bacteriana.',
    iconName: 'Heart',
    badge: 'Cuidado Sistêmico',
  },
  {
    id: 'biosseguranca',
    title: 'Biossegurança & Conforto de Luxo',
    subtitle: 'Padrão Rigoroso ANVISA',
    description: 'Ambiente climatizado, esterilização em autoclave de última geração e protocolos de higienização de nível hospitalar em salas individuais com total privacidade.',
    iconName: 'Shield',
    badge: 'Certificado ANVISA',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'Roberto S. Mantovani',
    location: 'Empresário em Atibaia',
    treatment: 'Protocolo de Carga Imediata',
    rating: 5,
    date: 'Há 2 semanas',
    comment: 'Usei prótese removível por mais de 10 anos e tinha muita vergonha de sorrir em reuniões. O Dr. Lucas realizou o protocolo de 4 pinos e saí no mesmo dia mastigando com total firmeza. A equipe é pontual, atenciosa e de um profissionalismo impecável.',
    verified: true,
  },
  {
    id: '2',
    author: 'Dra. Claudia Vianna',
    location: 'Atibaia - SP',
    treatment: 'Lentes de Contato Cerâmicas',
    rating: 5,
    date: 'Há 1 mês',
    comment: 'A Dra. Bruna desenhou minhas lentes de contato respeitando a naturalidade dos meus dentes. Ficou elegante, harmônico e nada artificial. Fui super bem orientada também em relação ao reembolso do meu seguro de saúde. Recomendo de olhos fechados!',
    verified: true,
  },
  {
    id: '3',
    author: 'Carlos Eduardo Silveira',
    location: 'Atibaia / SP',
    treatment: 'Implante & Endodontia',
    rating: 5,
    date: 'Há 3 semanas',
    comment: 'Tratei um canal em sessão única sem sentir nenhuma dor! A tecnologia que eles utilizam na Lubru é impressionante. Nunca fui em uma clínica tão limpa e com atendimento tão atencioso.',
    verified: true,
  },
  {
    id: '4',
    author: 'Patrícia A. de Godoy',
    location: 'Atibaia - SP',
    treatment: 'Alinhadores Invisíveis',
    rating: 5,
    date: 'Há 2 meses',
    comment: 'Atendimento pontualíssimo! Como advogada não posso perder tempo esperando em sala de espera. Os alinhadores são invisíveis e o acompanhamento digital com escaneamento é fascinante.',
    verified: true,
  },
];

export const FAQS: FaqItem[] = [
  {
    category: 'Carga Imediata',
    question: 'O procedimento de Carga Imediata dói?',
    answer: 'Não. O procedimento é realizado sob anestesia local altamente eficiente e planejada digitalmente. O planejamento guiado reduz cortes e sangramentos, resultando em um pós-operatório muito mais tranquilo e rápido do que as cirurgias tradicionais.',
  },
  {
    category: 'Carga Imediata',
    question: 'Qualquer pessoa pode fazer o Protocolo de 4 Pinos (All-on-4)?',
    answer: 'A grande maioria dos pacientes com perda dental total ou parcial pode realizar o procedimento. A técnica foi desenvolvida justamente para aproveitar ao máximo a osso retido no maxilar ou mandíbula, reduzindo substancialmente a necessidade de enxertos ósseos complexos. Na consulta inicial faremos um escaneamento e tomografia.',
  },
  {
    category: 'Atendimento',
    question: 'Realmente é possível sair da clínica com dentes fixos no mesmo dia?',
    answer: 'Sim! Com o protocolo de Carga Imediata, os 4 implantes são posicionados estrategicamente e recebem uma prótese provisória parafusada e estável em até 24 horas após a cirurgia, permitindo que você sorria e se alimente com conforto imediato.',
  },
  {
    category: 'Convênios',
    question: 'Vocês atendem convênios?',
    answer: 'Não aceitamos convênios odontológicos, porém disponibilizamos toda a documentação necessária para que você possa solicitar o reembolso à sua operadora. Confira as condições contratuais do seu plano de saúde e agende sua consulta conosco.',
  },
  {
    category: 'Localização',
    question: 'A clínica tem fácil acesso e estacionamento em Atibaia?',
    answer: 'Sim! A Lubru Odontologia está localizada no coração de Atibaia, na Av. Brigadeiro José Vicente Faria Lima, 38 - Centro. Dispomos de fácil estacionamento próximo e estrutura com acessibilidade completa.',
  },
];
