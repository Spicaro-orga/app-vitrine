import AlexandraDescription from '../../components/founders/AlexandraDescription.astro'
import ChloeDescription from '../../components/founders/ChloeDescription.astro'
const company = {
  title: 'We digitize your Art works',
  description: {
    part1: 'Spicaro is a support service for art collectors. ',
    part2: 'We digitize artworks in high definition',
    part3:
      ' and provide a digital twin in which we integrate all the related documentation: certificates, restorations, exhibition history, proof of ownership, and provenance.',
    part4:
      ' Each artwork is represented by a unique and secure digital copy, ensuring ',
    part5: 'both traceability and ownership.',
  },

  title01:
    'With Spicaro, always keep your collection at hand and create your own exhibitions inside a 3D gallery.',
  description01: {
    part1:
      'As an Art collector, you face various challenges in managing your collection effectively, such as representation, transfer, and insurance. Discover a seamless, innovative, and premium way to optimize the management of your collection and preserve its history.',
    part2:
      'One of the first challenges you face is the visibility and dispersion of your Artworks across different locations. Whether they are for personal or public viewing, you should be able to see them all instantly before your eyes, perfectly in high quality, right in your home/gallery.',
    part3:
      'Spicaro allows you to catalog, document, secure, and provide proof of ownership for each of your artworks, facilitating inheritance processes and ensuring the preservation of your legacy, while adding a touch of conviviality.',
  },
  link01: 'Spicaro technology',

  title02:
    'Your Artworks are scattered across multiple locations and the management of your collection is often inefficient.',
  description02: {
    part1:
      'You encounter difficulties regarding the management of your collection, particularly in terms of representation, transmission, sale, and insurance.',
    part2:
      'You want to gather, save, and secure your artwork documentation in one place and you are looking for an innovative solution for all these reasons.',
    part3: 'We have the solution for you with Spicaro:',
    part4:
      'Discover a continuous, innovative, and high-end method to optimize the management of your collection while preserving its history.',
    part5:
      'All your data and collections are protected thanks to cutting-edge technologies. Your information remains strictly confidential, with reinforced protocols guaranteeing their security and integrity at every step.',
  },

  title03: 'Our founders',
  founders: [
    {
      firstName: 'de La Fouchardière',
      lastName: 'Alexandra',
      image: {
        src: '/company-page/societe_alec.jpg',
        alt: 'Portrait of Alexandra de La Fouchardière',
        side: 'left',
      },
      description: AlexandraDescription,
    },
    {
      firstName: 'Méjanès',
      lastName: 'Chloé',
      image: {
        src: '/company-page/societe_chloe.jpg',
        alt: 'Portrait of Chloé Méjanès',
        side: 'right',
      },
      description: ChloeDescription,
    },
  ],
  alexandra: {
    description: {
      part1:
        'From my earliest childhood, I was immersed in a world of Art and creativity, my parents being passionate and enlightened collectors.',

      part2:
        'Over the years, this immersion in the Art world has allowed me to explore a multitude of subjects and perspectives, inspiring me to explore new paths and push the boundaries of creativity.',
      part3:
        'Parallel to my passion for Art, I have also developed a marked interest in entrepreneurship and innovation. Having founded several high-end service companies, I have been able to combine my artistic creativity with my entrepreneurial vision, always seeking to push the boundaries of what is possible.',
    },
  },
  chloe: {
    description: {
      part1: `
      My journey is a reflection of my multiple passions and my perpetual quest
      for creativity and innovation. Since my youth, I have chosen an atypical path
      by pursuing a literary and artistic section, which has nourished my
      ambition to become an Art dealer. My first steps in the professional world
      led me to explore the fascinating workings of auction houses within a
      prestigious Art gallery.`,

      part2: `However, my thirst for exploration and my desire for freedom led me to
      found new horizons. Guided by my passion for new technologies, I plunged into
      the world of artistic digitalization. This experience has allowed me to
      acquire diverse skills and develop a unified vision, combining technology and
      artistic creativity.`,
    },
  },

  title04: 'Vision',
  subtitle04:
    'With our solution, share your collection and its soul, and transmit culture to future generations.',
  description04: {
    part1:
      "For a collector, preserving a collection represents a lifetime of work. The works evoke the stages of one's life, the passage of time, and the accompanying joys and sorrows. Thanks to our ultra-high definition digitization solution, we freeze the work in time, preserving its existence.",
    part2:
      'Spicaro is a service aimed at offering unprecedented contextualization and contributing to deepening and expanding the heritage of Art history, culture, and accessibility.',
  },
}
export default company
