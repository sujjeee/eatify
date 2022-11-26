import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Hero = () => {
    return (
        <Carousel className="max-w-[1240px] mx-auto" showThumbs={false} width={"none"} emulateTouch={true}  showArrows={false} showStatus={false}  showIndicators={false} swipeable={true} autoPlay infiniteLoop>
                <div className='max-w-[1240px] mx-auto p-4 '>
                    <div className='max-h-[500px] relative'>
                        <div className='absolute  w-full h-full max-h-[500px] bg-black/40 text-gray-200 flex flex-col justify-center'>
                            <h1 className='!px-4 text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-justify'>The <span className='text-orange-500'>Best</span></h1>
                            <h1 className='!px-4 text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-justify'> <span className='text-orange-500'>Foods </span>Delivered</h1>
                        </div>
                        <img className='w-full max-h-[500px] object-cover' src="https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="#" />
                    </div>
                </div>
                <div className='max-w-[1240px] mx-auto p-4 '>
                    <div className='max-h-[500px] relative'>
                        <div className='absolute  w-full h-full max-h-[500px] bg-black/40 text-gray-200 flex flex-col justify-center'>
                            <h1 className='px-4 text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-justify'>The <span className='text-orange-500'>Best</span></h1>
                            <h1 className='px-4 text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-justify'> <span className='text-orange-500'>Foods </span>Delivered</h1>
                        </div>
                        <img className='w-full max-h-[500px] object-cover' src="https://images.unsplash.com/photo-1503767849114-976b67568b02?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="#" />
                    </div>
                </div>
                <div className='max-w-[1240px] mx-auto p-4 '>
                    <div className='max-h-[500px] relative'>
                        <div className='absolute  w-full h-full max-h-[500px] bg-black/40 text-gray-200 flex flex-col justify-center'>
                            <h1 className='px-4 text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-justify'>The <span className='text-orange-500'>Best</span></h1>
                            <h1 className='px-4 text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-justify'> <span className='text-orange-500'>Foods </span>Delivered</h1>
                        </div>
                        <img className='w-full max-h-[500px] object-cover' src="https://images.unsplash.com/photo-1516685018646-549198525c1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="#" />
                    </div>
                </div>
        </Carousel>
    )
}

export default Hero