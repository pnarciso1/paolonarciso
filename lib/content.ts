export const site = {
  name: 'Paolo Narciso',
  substack: 'https://paolonarciso.substack.com',
  subscribe: 'https://paolonarciso.substack.com/subscribe',
  linkedin: 'https://www.linkedin.com/in/paolonarciso/',
  amazon: 'https://www.amazon.com/stores/author/B0CYTGCNFY/allbooks',
  youtube: 'https://www.youtube.com/@MiniPhilippineHistoryLessons',
  atlas: 'https://humanorigins.paolonarciso.com',
};

export type Book = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  credit: string;
  image: string;
  description?: string[];
};

export const books: Book[] = [
  {
    slug: 'generative-ai-for-executives',
    title: 'Generative AI for Executives',
    subtitle: 'A Strategic Roadmap for Your Organization',
    category: 'AI & technology',
    credit: 'With Ahmed Bouzid and Weiye Ma',
    image: '/images/GenAIforExecutives.jpg',
    description: [
      'My friend Dr. Ahmed Bouzid asked me to write this with him. It grew out of a question he was asked: where can we deploy AI in our organization? At the time, most people had no good answer. We wrote one.',
    ],
  },
  {
    slug: 'generative-ai-in-education',
    title: 'Generative AI in Education',
    subtitle: 'A Guide for Parents and Teachers',
    category: 'AI & education',
    credit: 'Paolo Narciso',
    image: '/images/GenAIinEducation.jpg',
    description: [
      'As a teacher, I watched AI change the classroom firsthand. Then I watched my granddaughter use it and remembered when calculators arrived in schools and everyone panicked. Through Core Immersive, I also saw AI opening a new access gap for underserved communities. I wrote this book for the parents who were afraid to tutor their kids.',
    ],
  },
  {
    slug: 'theres-an-alligator-in-our-yard',
    title: 'There’s an Alligator in Our Yard!',
    subtitle: '',
    category: 'For young readers',
    credit: 'Written and illustrated by Paolo Narciso',
    image: '/images/TheresAnAlligator.jpg',
    description: [
      'A real alligator showed up in my yard in Charleston. My granddaughters live in Los Angeles, where the yard visitors run more toward squirrels, so I wrote them the story. I wanted them to see what life is like here and to learn how to respect the wildlife that shares it.',
    ],
  },
  {
    slug: 'nfts-for-business',
    title: 'NFTs for Business',
    subtitle: 'A Practical Guide to Harnessing Digital Assets',
    category: 'AI & technology',
    credit: 'With Ahmed Bouzid and Steve Wood',
    image: '/images/NFTsForBusiness.jpg',
    description: [
      'Move beyond the tech jargon and the hype of non-fungible tokens (NFTs) and become empowered to think through solutions to solve your specific business problems. NFTs are important because they enable the manipulation of digital assets in ways that are closer to the way we manipulate physical assets. This book will serve as an introduction to the space and as a source of inspiration for connecting problem and solution dots.',
      'Understanding what core problems NFTs solve and how they solve them will enable business leaders to design solutions and to put together the teams that will help them deliver on the promises of NFTs. This book is focused on explaining what NFTs are, what problems they solve, and what technology makes them possible. It provides the larger technological, economic, and political context within which NFTs are emerging.',
    ],
  },
  {
    slug: 'from-founder-to-ceo',
    title: 'From Founder to CEO',
    subtitle: 'Transform Your Business and Yourself in 12 Weeks',
    category: 'Entrepreneurship',
    credit: 'Paolo Narciso',
    image: '/images/FromFounderToCeo.jpg',
    description: [
      'Dr. Paolo Narciso is a distinguished authority in leadership and entrepreneurship, with a particular focus on the intricate transition from founder to CEO. With over three decades of hands-on experience across various industries, he has honed his expertise in navigating the complexities of leadership transitions and driving organizational success.',
      'As the author of numerous groundbreaking works on leadership and business strategy, including the acclaimed book on founder-to-CEO transitions, V.J. Paolo Narciso brings a unique blend of practical insights and visionary thinking to the forefront. His deep understanding of the challenges and opportunities inherent in this pivotal phase of organizational growth makes him a trusted advisor to leaders and executives worldwide.',
    ],
  },
];

export type Project = {
  id: string;
  name: string;
  label: string;
  title: string;
  description: string;
  body: string[];
  url: string;
  video?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    id: 'core-immersive',
    name: 'Core Immersive',
    label: 'Educational opportunity',
    title: 'Opening doors through education.',
    description: 'Core Immersive is a nonprofit dedicated to expanding access to creative technology.',
    body: [
      'Core Immersive is a nonprofit dedicated to expanding access to creative technology.',
      'We believe emerging technologies like artificial intelligence, immersive media, and digital storytelling should be tools that empower people to express ideas and solve problems.',
      'Our programs help students, creators, and communities explore these technologies through hands-on creative experiences.',
    ],
    url: 'https://www.coreimmersiveacademy.org',
    video: '/images/Founder.mp4',
  },
  {
    id: 'goaxi',
    name: 'GoAxi',
    label: 'Rare disease & connection',
    title: 'Connection through shared experience.',
    description: 'A rare or chronic diagnosis can feel isolating — and finding the right people and resources is exhausting. Axi turns that around. It finds and curates communities, specialists, and resources for you, and connects you to them out in the world.',
    body: [
      'A rare or chronic diagnosis can feel isolating — and finding the right people and resources is exhausting. Axi turns that around. It finds and curates communities, specialists, and resources for you, and connects you to them out in the world.',
    ],
    url: 'https://www.goaxi.ai',
    image: '/images/GoAxi.png',
  },
];

export const visualizations = [
  {
    title: 'Human Origins Atlas',
    eyebrow: 'Interactive exploration',
    description: 'Follow the human journey out of Africa. Paths, evidence, and an open question about how we became us.',
    image: '/images/HumanOriginsAtlas.jpg',
    url: 'https://humanorigins.paolonarciso.com',
    cta: 'Explore the atlas',
  },
];

export const videos = [
  {title: 'The First Filipinos in America: Morro Bay 1587', image: '/images/FilipinosinAmerica.jpg'},
  {title: 'The End of Spanish Rule in the Philippines', image: '/images/EndofSpanishRule.jpg'},
  {title: 'Lapu Lapu: The First Filipino Hero', image: '/images/LapuLapu.jpg'},
];
