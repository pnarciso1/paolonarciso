import type { NextConfig } from 'next';
const config: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: '/books/the-founders-journey',
        destination: '/books/from-founder-to-ceo',
        permanent: true,
      },
    ];
  },
};
export default config;
