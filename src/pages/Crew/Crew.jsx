import { useState } from "react";
import { crews } from "../../data/crews.js";
import { motion } from "motion/react"

function Crew() {
    const [activeCrews, setActiveCrews] = useState(0);

    const crew = crews[activeCrews];

    return (
        <div
            className="
            h-screen
            bg-cover
            bg-center
            bg-[url('/src/assets/crew/background-crew-mobile.jpg')]
            md:bg-[url('/src/assets/crew/background-crew-tablet.jpg')]
            lg:bg-[url('/src/assets/crew/background-crew-desktop.jpg')]
        "
        >
            <section
                className="
                h-full
                pt-[clamp(7rem,12vh,10rem)]
                px-6
                
                lg:px-20
                lg:pt-[clamp(10rem,16vh,13rem)]
                "
            >
                <main
                    className="
                    h-full
                    flex
                    flex-col
                    justify-between

                    lg:flex-row
                    lg:items-end
                    lg:justify-between
                    lg:gap-[clamp(3rem,7vw,6rem)]
                    "
                >
                    {/* COLUNA ESQUERDA */}
                    <div
                        className="
                        flex
                        flex-col
                        text-white
                        items-center

                        lg:items-start
                        lg:h-full
                        lg:max-w-[clamp(34rem,42vw,38rem)]
                        "
                    >
                        {/* TÍTULO */}
                        <h2
                            className="
                            mb-[clamp(2rem,5vh,4rem)]
                            font-barlow-condensed
                            tracking-[2px]
                            text-[18px]

                            md:self-start
                            md:ml-10
                            md:text-[22px]

                            lg:ml-0
                            lg:text-[28px]
                            "
                        >
                            <span className="mr-5 font-bold text-zinc-500">
                                02
                            </span>

                            MEET YOUR CREW
                        </h2>

                        {/* CONTEÚDO */}
                        <div
                            className="
                            flex-1
                            flex
                            flex-col
                            justify-center
                            items-center

                            lg:items-start
                            "
                        >
                            <h3
                                className="
                                text-zinc-400
                                font-bellefair
                                uppercase
                                text-[20px]
                                md:text-[28px]
                                lg:text-[32px]
                                "
                            >
                                {crew.role}
                            </h3>

                            <h1
                                className="
                                font-bellefair
                                uppercase
                                text-[32px]
                                mb-6

                                md:text-[48px]

                                lg:text-[56px]
                                "
                            >
                                {crew.name}
                            </h1>

                            <p
                                className="
                                text-[#D0D6F9]
                                font-barlow
                                text-center

                                max-w-135

                                lg:text-left
                                lg:text-[18px]
                                lg:leading-8
                                "
                            >
                                {crew.bio}
                            </p>
                        </div>

                        {/* BOTÕES */}
                        <div
                            className="
                             flex
                             gap-[clamp(1rem,2vw,1.5rem)]
                             mt-[clamp(2rem,5vh,4rem)]

                            justify-center
                            self-center

                            lg:self-start
                            lg:justify-start
                            lg:mb-8
                            
                            "
                        >
                            {crews.map((item, index) => (
                                <motion.button
                                
                                    whileTap={{scale: 0.93}}
                                    transition={{duration:0.15}}
                                    key={item.name}
                                    onClick={() => setActiveCrews(index)}
                                    className={`
                                        h-3
                                        w-3
                                        rounded-full
                                        cursor-pointer
                                        transition-colors
                                        duration-300

                                        lg:h-4
                                        lg:w-4

                                        ${index === activeCrews
                                            ? "bg-white"
                                            : "bg-zinc-500 hover:bg-zinc-300"
                                        }
                                    `}
                                />
                            ))}
                        </div>{/* BOTÕES */}
                    </div>

                    {/* IMAGEM */}
                    <div
                        className="
                        flex
                        justify-center
                        items-end
                        flex-1
                        "
                    >
                        <img
                            className="
                            h-90

                            md:h-130

                            lg:h-[clamp(34rem,72vh,44rem)]

                            fade-bottom
                            "
                            src={crew.image}
                            alt={crew.name}
                        />
                    </div>
                </main>
            </section>
        </div>
    );
}

export default Crew;