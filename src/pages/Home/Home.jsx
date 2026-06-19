import { Link } from "react-router-dom"


function Home() {

    return (

        <div className=" w-full min-h-screen bg-cover bg-center flex flex-col items-center lg:flex-row lg:justify-around lg:
        bg-[url('/src/assets/home/background-home-mobile.jpg')]
        md:bg-[url('/src/assets/home/background-home-tablet.jpg')]
        lg:bg-[url('/src/assets/home/background-home-desktop.jpg')]"
        >
            <div className="text-white flex flex-col items-center pt-[120px] p-[24px] md:pt-[240px] lg:w-[60%] lg:items-start   ">

                <span className="font-[Barlow_Condensed] tracking-[2px] text-[18px] text-[#d0d6f9] md:text-[26px] md:tracking-[4px]">SO, YOU WANT TO TRAVEL TO</span>

                <h1 className="font-[Bellefair] text-[80px] md:text-[150px]">SPACE</h1>

                <p className="font-[Barlow] text-[16px] text-[#d0d6f9] text-center leading-[180%] mt-[16px] md:tracking-[1px] md:pl-[100px] md:pr-[100px] lg:p-[0px] lg:max-w-[450px]">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </div>

            <div className="flex flex-col items-center justify-center mt-[100px] group relative  w-[200px] 
            h-[200px] md:mt-[30px] md:w-[250px] md:h-[250px]">{/*Button*/}

                <div
                    className="absolute inset-0 scale-150 rounded-full bg-white/10 opacity-0 transition-all  duration-600 group-hover:opacity-100 z-0"
                />

                <Link to='/destination' className="text-blue-900 bg-white w-[160px] h-[160px] rounded-full cursor-pointer flex items-center justify-center font-[Bellefair] text-[20px] tracking-[1px]  z-10 hover:text-gray-600 md:w-[250px] md:h-[250px] ">
                    EXPLORE
                </Link>
            </div>{/*Button*/}

        </div>


    )
}

export default Home