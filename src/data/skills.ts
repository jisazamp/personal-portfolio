import react from '../assets/img/react.svg'
import javascript from '../assets/img/javascript.svg'
import typescript from '../assets/img/typescript.svg'
import python from '../assets/img/python.svg'
import django from '../assets/img/django.svg'
import nodejs from '../assets/img/nodejs.svg'

type Skill = {
  id: number
  img: string
  level: string
  text: string
}

export const skills: Skill[] = [
  { id: 1, img: react, level: 'Medium/Advanced', text: 'ReactJS' },
  {
    id: 2,
    img: javascript,
    level: 'Medium/Advanced',
    text: 'JavaScript',
  },
  { id: 3, img: typescript, level: 'Medium', text: 'TypeScript' },
  { id: 4, img: python, level: 'Medium/Advanced', text: 'Python' },
  { id: 5, img: django, level: 'Medium', text: 'Django' },
  { id: 6, img: nodejs, level: 'Medium', text: 'NodeJS' },
]
