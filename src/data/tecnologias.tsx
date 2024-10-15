import {
  SiBootstrap,
  SiCss3,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiNpm,
  SiPhp,
  SiReact,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from 'react-icons/si';
import { Tecnologia } from '../interfaces';

export const tecnologias: Array<Tecnologia> = [
  {
    icon: <SiTailwindcss className='text-8xl' />,
    name: 'Tailwindcss',
  },
  {
    icon: <SiHtml5 className='text-8xl' />,
    name: 'Html5',
  },
  {
    icon: <SiCss3 className='text-8xl' />,
    name: 'Css3',
  },
  {
    icon: <SiJavascript className='text-8xl' />,
    name: 'Javascript',
  },
  {
    icon: <SiReact className='text-8xl' />,
    name: 'React',
  },
  {
    icon: <SiPhp className='text-8xl' />,
    name: 'Php',
  },
  {
    icon: <SiSass className='text-8xl' />,
    name: 'Sass',
  },
  {
    icon: <SiBootstrap className='text-8xl' />,
    name: 'Bootstrap',
  },
  {
    icon: <SiTypescript className='text-8xl' />,
    name: 'Typescript',
  },
  {
    icon: <SiNextdotjs className='text-8xl' />,
    name: 'Nextdotjs',
  },
  {
    icon: <SiVite className='text-8xl' />,
    name: 'Vite',
  },
  {
    icon: <SiNpm className='text-8xl' />,
    name: 'Npm',
  },
  {
    icon: <SiFigma className='text-8xl' />,
    name: 'Figma',
  },
  {
    icon: <SiMysql className='text-8xl' />,
    name: 'Mysql',
  },
  {
    icon: <SiGit className='text-8xl' />,
    name: 'Git',
  },
  {
    icon: <SiGithub className='text-8xl' />,
    name: 'Github',
  },
];
