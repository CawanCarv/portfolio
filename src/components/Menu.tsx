import { useState } from 'react';
import { FaBars, FaGithub } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';

function Menu() {
  const [open, setOpen] = useState(false);
  return (
    <header className='w-full flex justify-between px-8 py-4 font-semibold backdrop-blur-xl backdrop-opacity-60 bg-slate-900/80 bg-opacity-10 fixed border-b border-white z-30'>
      <h1>Cawan</h1>
      <nav className='flex'>
        <ul
          className={
            'flex gap-8 flex-col md:flex-row absolute md:static top-full mt-0.5 left-0 px-8 md:px-0 pt-8 md:pt-0 w-full min-h-[calc(100vh_-_57px)] md:min-h-0 backdrop-blur-xl backdrop-opacity-90 md:backdrop-opacity-0 bg-slate-900/80 md:bg-transparent bg-opacity-50 ' +
            (!open && 'hidden md:flex')
          }
        >
          <li className='hover:text-blue-400 transition-colors'>
            <a href='#inicio'>Início</a>
          </li>
          <li className='hover:text-blue-400 transition-colors'>
            <a href='#sobre'>Sobre</a>
          </li>
          <li className='hover:text-blue-400 transition-colors'>
            <a href='#projetos'>Projetos</a>
          </li>
          <li className='hover:text-blue-400 transition-colors'>
            <a href='#experiencia'>Experiência</a>
          </li>
          <li className='hover:text-blue-400 transition-colors'>
            <a href='#formacao'>Formação</a>
          </li>
          <li className='hover:text-blue-400 transition-colors'>
            <a href='#contato'>Contato</a>
          </li>
        </ul>
        <ul className='flex gap-8 md:ml-8 md:pl-8 md:border-l border-slate-400'>
          <li>
            <a href='https://github.com/CawanCarv'>
              <FaGithub className='text-2xl hover:text-white text-slate-500 transition-colors' />
            </a>
          </li>
          <li className='md:hidden'>
            {open ? (
              <FaXmark
                onClick={() => setOpen(false)}
                className='text-2xl text-red-500'
              />
            ) : (
              <FaBars
                onClick={() => setOpen(true)}
                className='text-2xl text-white'
              />
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Menu;
