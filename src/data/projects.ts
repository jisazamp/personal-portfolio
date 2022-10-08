import projImg1 from '../assets/img/project-img1.webp'
import projImg2 from '../assets/img/project-img2.webp'
import projImg3 from '../assets/img/project-img3.webp'
import projImg4 from '../assets/img/project-img4.webp'
import projImg5 from '../assets/img/project-img5.webp'
import projImg6 from '../assets/img/project-img6.webp'
import projImg7 from '../assets/img/project-img7.webp'
import projImg8 from '../assets/img/project-img8.webp'
import projImg9 from '../assets/img/project-img9.webp'

type Project = {
  description: string
  imgUrl: string
  link?: string
  repo?: string
  title: string
}

export const projects2: Project[] = [
  {
    description: 'Get random advice',
    imgUrl: projImg7,
    link: 'https://jpi-advice-generator.netlify.app/',
    repo: 'https://github.com/jisazamp/advice-generator-app',
    title: 'Advice Generator',
  },
  {
    description: 'Search and filter Rick & Morty characters',
    imgUrl: projImg8,
    link: 'https://jpi-rickandmorty.netlify.app/',
    repo: 'https://github.com/jisazamp/rick-and-morty',
    title: 'Rick & Morty App',
  },
  {
    description: 'My own version of the CodeWithMosh Vidly App',
    imgUrl: projImg9,
    link: 'https://jpividlymovies.netlify.app/movies',
    title: 'Vidly Movies',
  },
]

export const projects: Project[] = [
  {
    description: 'Convert the value of crypto',
    imgUrl: projImg6,
    link: 'https://jpi-cotizador.netlify.app/',
    repo: 'https://github.com/jisazamp/cotizador-criptomonedas',
    title: 'Cryptocurrency Converter',
  },
  {
    description: 'Done as a technical challenge in 7 days.',
    imgUrl: projImg1,
    link: 'https://github.com/jisazamp/hotel-app',
    repo: 'https://jpihotelapp.netlify.app/',
    title: 'HotelApp',
  },
  {
    description: 'Check the PC requirements of the students',
    imgUrl: projImg3,
    link: 'https://auladigital.upb.edu.co/upbvirtual/ReqTec/',
    title: 'UPB Virtual ReqTec',
  },
  {
    description: 'Search GitHub users using the GitHub API',
    imgUrl: projImg2,
    link: 'https://awesome-swirles-a1a0db.netlify.app/',
    repo: 'https://github.com/jisazamp/github-finder',
    title: 'GitHub Finder',
  },
  {
    description: 'Register patients using local storage',
    imgUrl: projImg4,
    link: 'https://juanisazaveterinaria.netlify.app/',
    repo: 'https://github.com/jisazamp/citas-veterinaria-react',
    title: 'Seguimiento pacientes',
  },
  {
    description: 'Control expenses using local storage',
    imgUrl: projImg5,
    link: 'https://jpi-controlgastos.netlify.app/',
    repo: 'https://github.com/jisazamp/control-gastos-react',
    title: 'Expenses Control',
  },
]
