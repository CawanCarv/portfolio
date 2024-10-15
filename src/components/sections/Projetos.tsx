import {
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaGithub,
  FaLink,
} from 'react-icons/fa';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { projects } from '../../data/projects';

import 'swiper/css';
import 'swiper/css/navigation';

function Projetos() {
  return (
    <section
      className='flex flex-col gap-8 md:gap-16 py-16 relative z-0'
      id='projetos'
    >
      <header className='text-4xl md:text-5xl font-bold text-center pb-4 md:pb-0'>
        <h1>
          <span className='text-blue-400'>{'<'}</span> Projetos
          <span className='text-blue-400'>{' />'}</span>
        </h1>
      </header>
      <main className=''>
        <Swiper
          slidesPerView={1.2}
          spaceBetween={8}
          centeredSlides={true}
          modules={[Navigation]}
          navigation={{
            prevEl: '#projetos .prevEl',
            nextEl: '#projetos .nextEl',
          }}
          breakpoints={{
            760: {
              slidesPerView: 4,
              spaceBetween: 16,
            },
          }}
          className='mySwiper relative px-8 md:px-0'
        >
          {projects.map((project) => (
            <SwiperSlide className='relative transition-all group overflow-y-hidden cursor-auto'>
              <div className='w-full aspect-[3/4] bg-blue-600 flex items-center justify-center text-3xl uppercase font-bold text-gray-900'>
                Em Breve
              </div>
              <article className='absolute top-[calc(100%_-_64px)] left-0 flex flex-col gap-4 group-hover:justify-center group-hover:top-0 transition-all overflow-y-hidden w-full h-[100%] p-4 bg-black/80'>
                <header className='flex flex-col gap-4 text-2xl text-center font-semibold'>
                  {project.name}
                </header>
                <main className='flex flex-col gap-2'>
                  <p className='text-sm md:text-base'>{project.description}</p>
                  <span className='text-xs md:text-sm'>
                    <b>Tags: </b> {project.tags}
                  </span>
                </main>
                <footer className='flex justify-around text-sm'>
                  <a
                    className='flex gap-2 items-center p-2 border border-white rounded-lg'
                    href={project.repositorio}
                  >
                    <FaGithub className='text-xl' /> Repositório
                  </a>
                  <a
                    className='flex gap-2 items-center p-2 border border-white rounded-lg'
                    href={project.link}
                  >
                    <FaLink className='text-xl' /> Link
                  </a>
                </footer>
              </article>
            </SwiperSlide>
          ))}
          <FaChevronCircleLeft className='prevEl hidden md:block z-20 cursor-pointer absolute text-3xl top-[calc(50%_-_18px)] right-[calc(64%_-_8px)]' />
          <FaChevronCircleRight className='nextEl hidden md:block z-20 cursor-pointer absolute text-3xl top-[calc(50%_-_18px)] left-[calc(64%_-_8px)]' />
        </Swiper>
      </main>
    </section>
  );
}

export default Projetos;
