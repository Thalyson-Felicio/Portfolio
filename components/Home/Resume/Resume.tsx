import React from 'react';
import ResumeCard from './ResumeCard';
import { FaCodepen, FaReact } from 'react-icons/fa';
import { BsDatabase } from 'react-icons/bs';

const Resume = () => {
  return <div className="pt-20 pb-16">
    <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
        <div>
            <h1 className='text-3xl sm:text-4xl font-bold text-white'>
                Desenvolvimento <span className="text-cyan-200">e estudos</span>
            </h1>
            <div className="mt-10">
                <ResumeCard
                    Icon={FaCodepen}
                    role="Projetos full-stack"
                    date="Em desenvolvimento"
                    description="Construção de aplicações web com frontend e backend, incluindo o projeto MyGastronomy."
                />
                <ResumeCard
                    Icon={FaReact}
                    role="Interfaces web"
                    description="Desenvolvimento de interfaces com React, Vite, Next.js e componentes reutilizáveis."
                />
                <ResumeCard
                    Icon={BsDatabase}
                    role="APIs e dados"
                    description="Prática com Node.js, Express, MongoDB e autenticação baseada em JWT."
                />
            </div>
        </div>
        <div>
            <h1 className='text-3xl sm:text-4xl font-bold text-white'>
                <span className="text-cyan-200">Formação</span>
            </h1>
            <div className="mt-10 bg-blue-950/20 p-4 sm:p-8 rounded-md text-gray-200">
                <h2 className="text-xl sm:text-2xl font-semibold">Engenharia de Software</h2>
                <p className="text-gray-300 text-sm sm:text-base pt-3">IFPB · Em andamento</p>
            </div>
        </div>
    </div>
  </div>;
};

export default Resume;
