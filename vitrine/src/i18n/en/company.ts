import AlexandraDescription from '../../components/founders/AlexandraDescription.astro'
import ChloeDescription from '../../components/founders/ChloeDescription.astro'
const company = {
  title: 'We digitize your Art works',
  description: {
    part1: 'Spicaro is an accompaniment service for Art work owners.',
    part2:
      'We digitize Artworks in very high definition and provide a digital twin.',
    part3: 'Each physical Artwork is associated with its digital twin.',
    part4:
      'With the aim of integrating restorations, exhibition locations, the Artwork’s history, the Artwork itself, and its context into',
    part5: 'the digital timeline of the piece.',
  },

  title01:
    'With Spicaro, enjoy your collection at your fingertips, wherever you are.',
  description01: {
    part1:
      'As an Art collector, you face various challenges in managing your collection effectively, such as representation, transfer, and insurance. Discover a seamless, innovative, and premium way to optimize the management of your collection and preserve its history.',
    part2:
      'One of the first challenges you face is the visibility and dispersion of your Artworks across different locations. Whether they are for personal or public viewing, you should be able to see them all instantly before your eyes, perfectly in high quality, right in your home/gallery.',
    part3:
      'Our Spicaro solution also allows you to better catalog and treat each of your Artworks, providing a detailed overview, making inheritance processes easier, and ensuring the preservation of your artistic heritage, adding conviviality to the task.',
    part4:
      'Finally, thanks to our ultra HD digitalization system, you can view each of your Artworks in detail, follow its condition, and ensure appropriate new insurance to protect your precious investment.',
  },
  link01: 'Spicaro technology',
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

  title02: 'Vision',
  subtitle02:
    'With our solution, share your collection and its soul, and transmit culture to future generations.',
  description02: {
    part1:
      "For a collector, preserving a collection represents a lifetime of work. The works evoke the stages of one's life, the passage of time, and the accompanying joys and sorrows. Thanks to our ultra-high definition digitization solution, we freeze the work in time, preserving its existence.",
    part2:
      'Spicaro is a service aimed at offering unprecedented contextualization and contributing to deepening and expanding the heritage of Art history, culture, and accessibility.',
  },
}
export default company
