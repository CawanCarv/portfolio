import {
  IoLogoLinkedin,
  IoLogoWhatsapp,
  IoMail,
  IoRemoveOutline,
} from 'react-icons/io5';

function Inicio() {
  return (
    <section
      className='flex flex-col gap-4 md:gap-8 items-center justify-center min-h-screen text-center text-2xl relative z-0'
      id='inicio'
    >
      <div className='w-full h-full absolute bg-[url(/images/Inicio/bg.png)] bg-cover -z-20'>
        <div className='w-full h-full absolute bg-black bg-opacity-50 backdrop-blur-md -z-10'></div>
      </div>
      <span className='font-normal text-lg md:text-3xl'>Olá, visitante!</span>
      <h1 className='font-semibold text-3xl md:text-6xl'>Meu nome é Cawan</h1>
      <h1 className='font-normal text-xl md:text-4xl'>
        Desenvolvedor FullStack
      </h1>
      <div className='flex gap-8'>
        <IoRemoveOutline />
        <a href='mailto:cawancarvalho3@gmail.com'>
          <IoMail />
        </a>
        <a href='https://www.linkedin.com/in/cawan-carvalho-31417a200/'>
          <IoLogoLinkedin />
        </a>
        <a href='https://wa.me/5511976009629?text=Olá,%20Estou%20entrando%20em%20contato%20através%20do%20seu%20portfólio!'>
          <IoLogoWhatsapp />
        </a>
        <IoRemoveOutline />
      </div>
    </section>
  );
}

export default Inicio;
