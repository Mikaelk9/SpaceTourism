import { destinations } from '../../data/destinations'
import { useState } from 'react'
import { motion } from "motion/react"

function Destination() {

    const [activeDestination, setActiveDestination] = useState(0)

    const destination = destinations[activeDestination]



    return (
        <div className=" w-full h-screen bg-cover bg-center 
        bg-[url('/src/assets/destination/background-destination-mobile.jpg')]
        md:bg-[url('/src/assets/destination/background-destination-tablet.jpg')]
        lg:bg-[url('/src/assets/destination/background-destination-desktop.jpg')]
        "
        >

            <section className=' h-full px-6.5 md:px-10 lg:px-20
            pt-[clamp(6rem,12vh,10rem)]
            lg:flex
            lg:items-center
            lg:justify-between
            
            '>

                <div className=' text-white flex flex-col items-center '>
                    <h2 className='mb-[clamp(2rem,5vh,4rem)] font-barlow-condensed tracking-[2px] text-[18px] md:self-start md:ml-10 md:text-[22px] lg:text-[30px]'>
                        <span className='mr-5 font-bold text-zinc-500'>01</span>
                        PICK YOUR DESTINATION
                    </h2>
                    <img className='w-35 md:w-70 lg:w-100' src={destination.image} alt={destination.name} />
                </div>

                <div className=' text-white flex flex-col items-center 
                mt-[clamp(2rem,5vh,5rem)]
                lg:items-start'>

                    <div className='flex justify-around w-full font-barlow-condensed mb-[clamp(1rem,2vh,2rem)] tracking-[2px] text-[#D0D6F9]
                    md:max-w-80
                    '>

                        {destinations.map((item, index) => (
                            <motion.button
                                whileTap={{ scale: 0.95 }}  
                                transition={{ duration: 0.15 }}
                                key={item.name}
                                onClick={() => setActiveDestination(index)}
                                className={`uppercase p-1.25 cursor-pointer
                                    hover:border-b-2 hover:border-[#D0D6F9] hover:text-white
                                    transition-[border-color,color] duration-600 ease-in-out
                            
                            ${index === activeDestination
                                        ? "border-b-2 border-white text-white"
                                        : "border-b-2 border-transparent"
                                    }
                            
                            `}>
                                {item.name}
                            </motion.button>
                        ))}

                    </div>

                    <div className='flex flex-col items-center gap-[clamp(0.75rem,2vh,1.5rem)] md:w-full md:max-w-125 md:mx-auto lg:items-start'>

                        <h1 className='font-bellefair text-[60px] md:text-[90px] '>{destination.name}</h1>

                        <p className='text-[#D0D6F9] font-barlow text-center md:text-[18px] lg:text-[18px]  lg:text-start'>{destination.description}</p>

                        <div className='h-px w-full bg-[#6b708a] '></div>

                        <div className='flex flex-col gap-[clamp(0.75rem,2vh,1.25rem)] md:flex-row md:justify-around md:w-full lg:justify-start lg:gap-[clamp(3rem,6vw,5rem)]'>

                            <div className='text-center lg:text-start'>
                                <h3 className='font-barlow-condensed uppercase tracking-[2px] text-[#D0D6F9]'>Avg. Distance</h3>
                                <p className='font-bellefair text-[25px] md:text-[32px] '>{destination.distance}</p>
                            </div>

                            <div className='text-center lg:text-start'>
                                <h3 className='font-barlow-condensed uppercase tracking-[2px] text-[#D0D6F9]'>Est. Travel Time</h3>
                                <p className='font-bellefair text-[22px] md:text-[28px]'>{destination.travelTime}</p>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

        </div>
    )
}

export default Destination