import type { Tecnologia } from '../../interfaces';

function Tecnologia({ icon, name }: Tecnologia) {
  return (
    <div className='group flex flex-col items-center justify-center relative mb-2 pb-1 mx-8'>
      {icon}
      <span className='hidden group-hover:block bg-white text-xs text-slate-900 rounded-md font-bold px-2 py-1 absolute top-full'>
        {name}
      </span>
    </div>
  );
}

export default Tecnologia;
