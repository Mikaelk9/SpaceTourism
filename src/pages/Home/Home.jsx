function Home() {

    return (

        <div className=" w-full h-screen bg-cover bg-center
        bg-[url('/src/assets/home/background-home-mobile.jpg')]
        md:bg-[url('/src/assets/home/background-home-tablet.jpg')]
        lg:bg-[url('/src/assets/home/background-home-desktop.jpg')]"
        >
            <h1 className='text-white'>Home</h1>
        </div>


    )
}

export default Home