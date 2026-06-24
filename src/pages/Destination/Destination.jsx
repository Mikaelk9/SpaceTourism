import { destinations } from '../../data/destinations'
import { useState } from 'react'

function Destination() {

    const [activeDestination, setActiveDestination] = useState(0)

    const destination = destinations[activeDestination]

    

    return (
        <div className=" w-full h-screen bg-cover bg-center 
        bg-[url('/src/assets/destination/background-destination-mobile.jpg')]
        md:bg-[url('src/assets/destination/background-destination-tablet.jpg')]
        lg:bg-[url('src/assets/destination/background-destination-desktop.jpg')]
        "
        >

            <section className='absolute mt-25 p-6.5'>

                <div className=' text-white flex flex-col items-center '>
                    <h2 className='mb-12 font-barlow-condensed tracking-[2px] text-[18px]'>
                        <span className='mr-5 font-bold text-gray-500'>01</span>
                        PICK YOUR DESTINATION
                    </h2>
                    <img className='w-35' src={destination.image} alt={destination.name} />
                </div>

                <div className=' text-white flex flex-col items-center mt-10 '>

                    <div className='flex justify-around w-full font-barlow-condensed mb-5 tracking-[2px] text-[#D0D6F9]'>

                        {destinations.map((item, index) => (
                            <button key={item.name} onClick={() => setActiveDestination(index)}
                                className={`uppercase p-1.25 cursor-pointer
                                    hover:border-b-2 hover:border-[#D0D6F9] hover:text-white
                                    transition duration-600 ease-in-out
                            
                            ${index === activeDestination
                                        ? "border-b-2 border-white"
                                        : "border-b-2 border-transparent"
                                    }
                            
                            `}>
                                {item.name}
                            </button>
                        ))}

                    </div>

                    <div className='flex flex-col items-center gap-3.75'>
                        <h1 className='font-bellefair text-[60px] '>{destination.name}</h1>
                        <p className='text-[#D0D6F9] font-barlow text-center '>{destination.description}</p>
                        <div className='h-px w-full bg-[#6b708a] '></div>

                        <div className='flex flex-col gap-2.5'>
                            <div className='text-center'>
                                <h3 className='font-barlow-condensed uppercase tracking-[2px] text-[#D0D6F9]'>Avg. Distance</h3>
                                <p className='font-bellefair text-[25px]'>{destination.distance}</p>
                            </div>

                            <div className='text-center'>
                                <h3 className='font-barlow-condensed uppercase tracking-[2px] text-[#D0D6F9]'>Est. Travel Time</h3>
                                <p className='font-bellefair text-[22px]'>{destination.travelTime}</p>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

        </div>
    )
}

export default Destination