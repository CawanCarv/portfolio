import Marquee from 'react-fast-marquee';
import { tecnologias } from '../../data/tecnologias';
import Tecnologia from '../elements/Tecnologia';

function Sobre() {
  return (
    <section
      className='flex flex-col gap-4 md:gap-8 py-16 relative z-0'
      id='sobre'
    >
      <article className='flex flex-col text-left gap-4 md:gap-8 md:px-16 px-8'>
        <header className='text-4xl md:text-5xl font-bold text-center pb-4 md:pb-0 md:text-left'>
          <h1>
            Sobre mim<span className='text-blue-400'>.</span>
          </h1>
        </header>
        <p className='font-semibold md:pl-8 md:border-l-4 md:text-2xl border-blue-400'>
          Sou apaixonado por criar aplicações dinâmicas, modernas e interativas.
          Cada novo projeto é uma oportunidade para me desafiar e elevar minhas
          habilidades, sempre com foco no aprimoramento contínuo e no
          crescimento profissional. Dedico-me plenamente a cada desafio,
          buscando entregar soluções inovadoras e impactantes.
        </p>
      </article>
      <article className='flex flex-col gap-4 md:gap-8'>
        <header>
          <h1 className='text-5xl'></h1>
        </header>
        <Marquee className='py-8' pauseOnHover>
          {tecnologias.map((tecnologia, key) => (
            <Tecnologia
              key={key}
              icon={tecnologia.icon}
              name={tecnologia.name}
            />
          ))}
        </Marquee>
      </article>
    </section>
  );
}

export default Sobre;
