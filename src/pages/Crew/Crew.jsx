import { useState } from "react"
import { crews } from "../../data/crews.js"


function Crew() {

    const [activeCrews, setActiveCrews] = useState(0)

    const crew = crews[activeCrews]

    return (

        <div className=" w-full h-screen bg-cover bg-center
        bg-[url('/src/assets/crew/background-crew-mobile.jpg')]
        md:bg-[url('/src/assets/crew/background-crew-tablet.jpg')]
        lg:bg-[url('/src/assets/crew/background-crew-desktop.jpg')]"
        >
            <section className=" inset-x-0 min-h-screen pt-30 px-6 flex flex-col items-center md:pt-40">

                <main className="flex-1 flex flex-col justify-between lg:flex-row lg:justify-around lg:w-full lg:items-start">
                    <div className="text-white flex flex-col items-center ">
                        <h2 className='mb-12 font-barlow-condensed tracking-[2px] text-[18px] md:self-start md:ml-10 md:text-[22px] lg:text-[30px]'>
                            <span className='mr-5 font-bold text-zinc-500'>02</span>
                            MEET YOUR CREW
                        </h2>
                        <div className="max-w-135 flex flex-col items-center lg:items-start">

                            <h3 className="text-zinc-400 font-bellefair uppercase text-[20px] md:text-[24px]">{crew.role}</h3>
                            <h1 className="font-bellefair uppercase text-[28px] mb-5 md:text-[40px]">{crew.name}</h1>
                            <p className="text-[#D0D6F9] font-barlow text-center lg:text-start ">{crew.bio}</p>
                        </div>

                        <div className="flex gap-4 mt-10 md:mt-15 "> {/*Div botões */}

                            {crews.map((item, index) => (

                                <button key={item.name} onClick={() => setActiveCrews(index)}
                                    className={`h-3 w-3 rounded-full cursor-pointer transition duration-600 ease-in-out
                            
                            ${index === activeCrews
                                            ? "bg-white"
                                            : "bg-zinc-400"
                                        }
                            
                            `}></button>

                            ))}


                        </div>
                    </div>

                    <div className="flex flex-col items-center relative">{/* Div da imagem */}
                        <img className="h-90 fade-bottom md:h-130" src={crew.image} alt={crew.name} />
                    </div>
                </main>

            </section>
        </div>
    )
}

export default Crew