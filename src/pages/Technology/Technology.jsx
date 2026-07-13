import { useState } from "react"
import { technology } from "../../data/technology"


function Technology() {
    const [activeTechnology, setActiveTechnology] = useState(0)
    const technologyData = technology[activeTechnology]

    return (
        <div className=" w-full h-screen bg-cover bg-center
        bg-[url('/src/assets/technology/background-technology-mobile.jpg')]
        md:bg-[url('/src/assets/technology/background-technology-tablet.jpg')]
        lg:bg-[url('/src/assets/technology/background-technology-desktop.jpg')]"
        >
            <section className=" h-full flex flex-col items-center 
            pt-[clamp(7rem,12vh,10rem)]
            px-6  
            lg:px-20
            lg:pt-[clamp(9rem,14vh,11rem)]">
                <h2 className="mb-12 font-barlow-condensed tracking-[2px] text-[18px] text-white
                            md:self-start
                            md:ml-10
                            md:text-[22px]
                            md:mb-18

                            lg:ml-0
                            lg:text-[28px]
                            lg:mb-[clamp(2rem,5vh,5rem)]
                            "
                >
                    <span className="mr-5 font-bold text-zinc-500">
                        03
                    </span>
                    SPACE LAUNCH 101
                </h2>

                <main className="flex flex-col items-center lg:flex-row lg:gap-[clamp(2rem,5vw,5rem)] lg:w-full ">


                    <div className="self-stretch mb-8 -mx-6 order-1 lg:order-2 lg:mx-0 lg:-mr-20
                    lg:flex-1 lg:flex lg:justify-end lg:mb-0"> {/* Imagem */}
                        <img
                            className="w-full lg:hidden"
                            src={technologyData.landscape}
                            alt={technologyData.title}
                        />

                        {/* Desktop */}
                        <img
                            className="hidden lg:block
                            h-[clamp(450px,68vh,700px)]
                            object-contain"
                            src={technologyData.portrait}
                            alt={technologyData.title}
                        />
                    </div>

                    <div className="flex flex-col items-center lg:flex-row order-2 lg:order-1 lg:gap-[clamp(2rem,5vw,5rem)] "> {/* Conteúdo */}

                        <div className="flex gap-5 mb-[clamp(2rem,4vh,4rem)] lg:flex-col"> {/* Botões */}

                            {technology.map((item, index) => (

                                <button key={item.title} className={`
                                    rounded-full w-10 h-10 border cursor-pointer transition-all duration-500
                                    font-bellefair

                                    md:w-15
                                    md:h-15
                                    md:text-[24px]

                                    lg:w-18
                                    lg:h-18

                                    ${index === activeTechnology
                                        ? 'bg-white text-black border-white'
                                        : 'bg-transparent border-zinc-500 text-white hover:border-white'
                                    }
                                    `}
                                    onClick={() => setActiveTechnology(index)}
                                >

                                    {index + 1}

                                </button>

                            ))}

                        </div>

                        <div className="flex-1
                                flex
                                flex-col
                                justify-center
                                items-center
                                gap-[clamp(0.75rem,2vh,1.5rem)]
                                lg:items-start">
                            <h3 className=" text-zinc-400 font-bellefair uppercase text-[20px] 
                            md:text-[28px] 
                            lg:text-[32px]">
                                THE TERMINOLOGY…
                            </h3>

                            <h1 className="font-bellefair uppercase text-[32px] text-white
                            md:text-[48px] 
                            lg:text-[56px] ">
                                {technologyData.title}
                            </h1>

                            <p className=" text-[#D0D6F9] font-barlow text-center max-w-135 md:leading-8 lg:text-left lg:text-[18px] lg:leading-8">
                                {technologyData.description}
                            </p>
                        </div>
                    </div>

                </main>

            </section>
        </div>
    )
}

export default Technology