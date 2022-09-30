import projImg1 from '../assets/img/project-img1.png'
import projImg2 from '../assets/img/project-img2.png'
import projImg3 from '../assets/img/project-img3.png'
import projImg4 from '../assets/img/project-img4.png'
import projImg5 from '../assets/img/project-img5.png'
import projImg6 from '../assets/img/project-img6.png'
import projImg7 from '../assets/img/project-img7.png'
import projImg8 from '../assets/img/project-img8.png'

type Project = {
  description: string
  imgUrl: string
  link?: string
  title: string
}

export const projects2: Project[] = [
  {
    description: 'Get random advice',
    imgUrl: projImg7,
    link: 'https://jpi-advice-generator.netlify.app/',
    title: 'Advice Generator',
  },
  {
    description: 'Search and filter Rick & Morty characters',
    imgUrl: projImg8,
    link: 'https://jpi-advice-generator.netlify.app/',
    title: 'Rick & Morty App',
  },
]

export const projects: Project[] = [
  {
    description: 'Convert the value of crypto',
    imgUrl: projImg6,
    link: 'https://jpi-cotizador.netlify.app/',
    title: 'Cryptocurrency Converter',
  },
  {
    description: 'Done as a technical challenge in 7 days.',
    imgUrl: projImg1,
    link: 'https://github.com/jisazamp/hotel-app',
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
    title: 'GitHub Finder',
  },
  {
    description: 'Register patients using local storage',
    imgUrl: projImg4,
    link: 'https://juanisazaveterinaria.netlify.app/',
    title: 'Seguimiento pacientes',
  },
  {
    description: 'Control expenses using local storage',
    imgUrl: projImg5,
    link: 'https://jpi-controlgastos.netlify.app/',
    title: 'Expenses Control',
  },
]
