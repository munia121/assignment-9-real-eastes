import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import { Navigation } from 'swiper/modules';
import { FaArrowRight } from "react-icons/fa6";
import 'animate.css';
import EastetCards from './EastetCards';



const Home = () => {
    return (
        <div className="mt-10">


            <Swiper
                navigation={true}
                loop={true}
                modules={[Navigation]}
                className="mySwiper">
                <SwiperSlide >
                    <div className='h-[600px] bg-no-repeat bg-cover rounded-lg' style={{ backgroundImage: `url(https://i.ibb.co/3ctZThp/mountain-retreat.jpg)` }}>
                        <div className='flex flex-col justify-center items-center pt-32 pl-20'>
                            <h1 data-aos="zoom-in" data-aos-duration='1500' className='text-5xl font-extrabold text-white ' >Mountain Retreat Cabin</h1>
                            <p data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom" data-aos-duration='1500' className='flex items-center gap-3 mt-8 text-xl bg-white w-[200px] p-4'>Discover more <FaArrowRight></FaArrowRight> </p>
                        </div>
                    </div>

                </SwiperSlide>
                {/* ********* */}
                <SwiperSlide>
                    <div className='h-[600px] bg-no-repeat bg-cover rounded-lg' style={{ backgroundImage: `url(https://i.ibb.co/fpG6PXY/Header-The-Most-Expensive-Beachfront-Vacation-Rental-in-Every-Country.jpg)` }}>

                        <div className='flex flex-col justify-center items-center pt-32 pl-20'>
                            <h1 data-aos="zoom-in" data-aos-duration='1500' className='text-5xl font-extrabold text-slate-400 ' >Beachfront Vacation Rental</h1>
                            <p data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom" data-aos-duration='1500' className='flex items-center gap-3 mt-8 text-xl bg-white w-[200px] p-4'>Discover more <FaArrowRight></FaArrowRight> </p>
                        </div>
                    </div>

                </SwiperSlide>
                {/* ********** */}
                <SwiperSlide>
                    <div className='h-[600px] bg-no-repeat bg-cover rounded-lg' style={{ backgroundImage: `url(https://i.ibb.co/3WfP2Yx/studenthousing1.jpg)` }}>
                        {/* <img className="w-full h-[600px] rounded-lg" src="https://i.ibb.co/3WfP2Yx/studenthousing1.jpg" alt="" /> */}
                        <div className='flex flex-col justify-center items-center pt-32 pl-20'>
                            <h1 data-aos="zoom-in" data-aos-duration='1500' className='text-5xl font-extrabold  text-white' >Student Housing Near Campus</h1>
                            <p data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom" data-aos-duration='1500' className='flex items-center gap-3 mt-8 text-xl bg-white w-[200px] p-4'>Discover more <FaArrowRight></FaArrowRight> </p>
                        </div>
                    </div>
                </SwiperSlide>
                {/* ********* */}
                <SwiperSlide>
                    <div className='h-[600px] bg-no-repeat bg-cover rounded-lg' style={{ backgroundImage: `url(https://i.ibb.co/vVShkWm/modern-townhouse-design-house-168058-939.jpg)` }}>
                        {/* <img className="w-full h-[600px] rounded-lg" src="https://i.ibb.co/vVShkWm/modern-townhouse-design-house-168058-939.jpg" alt="" /> */}
                        <div className='flex flex-col justify-center items-center pt-32 pl-20'>
                            <h1 data-aos="zoom-in" data-aos-duration='1500' className='text-5xl font-extrabold text-white ' >Modern Townhouse</h1>
                            <p data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom" data-aos-duration='1500' className='flex items-center gap-3 mt-8 text-xl bg-white md:w-[200px] p-4'>Discover more <FaArrowRight></FaArrowRight> </p>
                        </div>

                    </div>
                </SwiperSlide>

            </Swiper>

            <section>
                <div>
                    <h1 className='text-center lg:text-5xl md:text-3xl text-2xl font-bold mt-20 animate__animated animate__bounceInDown'>LATEST NEWS</h1>
                    <p className='lg:w-[900px] mx-auto text-center p-4'>In the residential real estate realm, demand for single-family homes persists amidst rising interest rates. Sustainability gains traction, while remote work influences home preferences. Affordable housing challenges persist alongside a thriving luxury market. Suburban areas see increased demand, and tech integration transforms homes. Investors seek diversification amid evolving trends.</p>
                </div>
            </section>
            <div>
                <EastetCards></EastetCards>
            </div>
        </div >
    );
};

export default Home;