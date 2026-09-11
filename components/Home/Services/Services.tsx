import React from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
  return <div className="pt-16 pb-16">
    <h1 className="text-center  text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        Tecnologias e áreas de <br /> desenvolvimento em estudo
    </h1>
    <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 items-center">
        <div>
            <ServicesCard 
            icon="/images/s1.png" 
            name="Interfaces web"
            description="Construção de interfaces com React, Next.js e componentes reutilizáveis."
            />
        </div>
        <div>
            <ServicesCard 
            icon="/images/s2.png" 
            name="Aplicações React"
            description="Prática com Vite, React Router e navegação entre páginas."
            />
        </div>
        <div>
            <ServicesCard 
            icon="/images/s3.png" 
            name="APIs e dados"
            description="Desenvolvimento de APIs com Node.js, Express e MongoDB."
            />
        </div>
        <div>
            <ServicesCard 
            icon="/images/s4.png" 
            name="Testes e documentação"
            description="Estudo de estratégias de teste e modelagem com Mermaid e PlantUML."
            />
        </div>
    </div>
  </div>;
};

export default Services;
