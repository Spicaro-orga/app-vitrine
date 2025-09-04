import AlexandraDescription from '../../components/founders/AlexandraDescription.astro'
import ChloeDescription from '../../components/founders/ChloeDescription.astro'
const company = {
  title: 'Nous digitalisons vos œuvres d’Art ',
  description: {
    part1:
      'Spicaro est un service d’accompagnement auprès des collectionneurs d’œuvres d’Art. ',
    part2: 'Nous digitalisons en haute définition les œuvres',
    part3:
      ' et fournissons un jumeau numérique dans lequel nous intégrons toute la documentation inhérente à l’œuvre : certificats, restaurations, lieux d’expositions, preuves de propriété, histoire de l’œuvre.',
    part4:
      ' Chaque oeuvre d’Art est représentée par une copie numérique unique et sécurisée, permettant d'assurer  ',
    part5: 'sa traçabilité et sa propriété.',
  },
  title01:
    'Avec Spicaro, ayez votre collection toujours à portée de main et créez vos expositions au sein d’une galerie 3D.',
  description01: {
    part1:
      'En tant que collectionneur d’Art, vous êtes confronté à différentes problématiques pour la gestion efficace de vos œuvres. La représentation de votre collection, leur transmission et leur assurance. Découvrir une manière continue, innovante et haut de gamme pour optimiser la gestion de votre collection et préserver son histoire.',
    part2:
      'Une des premières problématiques auxquelles vous êtes confronté est la visibilité et la dispersion de vos œuvres entres différents lieux. Qu’elles soient à portée personnelle ou publique, vous devriez toutes les voir immédiatement sous vos yeux, parfaitement en haute qualité, à l’endroit même de votre demeure/galerie.',
    part3:
      'Spicaro vous permet de répertorier, documenter, sécuriser et fournir une preuve de propriété pour chacune de vos œuvres, facilitant les processus de succession et garantissant la préservation de votre héritage, tout en ajoutant une touche de convivialité.',
  link01: 'La technologie Spicaro',

  title03: 'Les fondatrices',
  founders: [
    {
      firstName: 'de La Fouchardière',
      lastName: 'Alexandra',
      image: {
        src: '/company-page/societe_alec.jpg',
        alt: 'Portrait de Alexandra de La Fouchardière',
        side: 'left',
      },
      description: AlexandraDescription,
    },
    {
      firstName: 'Méjanès',
      lastName: 'Chloé',
      image: {
        src: '/company-page/societe_chloe.jpg',
        alt: 'Portrait de Chloé Méjanès',
        side: 'right',
      },
      description: ChloeDescription,
    },
  ],
  alexandra: {
    description: {
      part1:
        "Dès ma plus tendre enfance, j'ai été plongée dans un monde d’Art et de créativité, mes parents étant des passionnés et des collectionneurs éclairés.",

      part2:
        'Au fil des années, cette immersion dans le monde de l’Art m’a permis d’explorer une multitude de sujets et des perspectives, m’incitant à explorer de nouvelles voies et à repousser les limites de la créativité.',
      part3:
        'Parallèlement à ma passion pour l’Art, j’ai également développé un intérêt marqué pour l’entrepreneuriat et l’innovation. Ayant fondé plusieurs entreprises axées sur le service haut de gamme, j’ai pu allier ma créativité artistique à ma vision entrepreneuriale, cherchant toujours à proposer les frontières de ce qui est possible.',
    },
  },
  chloe: {
    description: {
      part1: `
      Mon parcours est le reflet de mes multiples passions et de ma quête perpétuelle de créativité et d’innovation. Dès mon adolescence, j’ai embrassé une voie atypique en choisissant une section littéraire artistique, nourrissant ainsi mon ambition de devenir commissaire-priseur. Mes premiers pas dans le monde professionnel m’ont conduite à explorer les rouages fascinants des ventes aux enchères au sein d’une prestigieuse maison de vente.`,

      part2: `Cependant, ma soif d’exploration et mon désir de liberté m’ont poussée à franchir de nouveaux horizons. Guidée par ma passion pour les nouvelles technologies et l’Art, j’ai plongé dans l’univers dynamique de la crypto sphère. Cette expérience m’a permis d’acquérir des compétences diversifiées et de développer une vision unique, alliant technologie de pointe et créativité artistique.`,
    },
  },

  title02: 'Vision',
  subtitle02:
    'Grâce à notre solution partagez votre collection et son âme, transmettez la culture aux générations futures.',
  description02: {
    part1:
      "Pour un collectionneur, conserver sa collection représente l’œuvre d’une vie. Les œuvres évoquent indéniablement les étapes d'une vie. Le temps qui passe et son escorte de joies ou de peines. Grâce à notre solution de digitalisation ultra haute définition, nous figeons l’œuvre dans le temps, préservant ainsi son existence.",
    part2:
      'Spicaro est un service visant à offrir une contextualisation sans précédent et contribuant à approfondir et à élargir l’héritage de l’histoire de l’Art, de la culture et son accessibilité.',
  },
}
export default company
