import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import { BsArrowRight } from 'react-icons/bs';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { Pagination } from 'swiper';

// data
const workSlides = {
   slides: [
      {
         images: [
            {
               title: 'title',
               path: '/thumb1.jpg',
            },
            {
               title: 'title',
               path: '/thumb2.jpg',
            },
            {
               title: 'title',
               path: '/thumb3.jpg',
            },
            {
               title: 'title',
               path: '/thumb4.jpg',
            },
         ],
      },
      {
         images: [
            {
               title: 'title',
               path: '/thumb4.jpg',
            },
            {
               title: 'title',
               path: '/thumb1.jpg',
            },
            {
               title: 'title',
               path: '/thumb2.jpg',
            },
            {
               title: 'title',
               path: '/thumb3.jpg',
            },
         ],
      },
   ],
};

const WorkSlider = () => {
   return (
      <Swiper
         spaceBetween={10}
         pagination={{
            clickable: true
         }}
         modules={[Pagination]}
         className='h-[280px] sm:h-[480px]'
      >
         {workSlides?.slides?.map((slide, index) => (
            <SwiperSlide key={index}>
               <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
                  {slide.images.map((image, i) => (
                     <div key={i} className='relative rounded-lg overflow-hidden flex 
                     items-center justify-center group'>
                        <div className='relative flex items-center justify-center 
                        overflow-hidden group'>
                           {/* image */}
                           <Image src={image.path} alt="work" width={500} height={300} />

                           {/* overlay */}
                           <div className='absolute w-[0px] h-[100%] inset-0 bg-gradient-to-l from-transparent
                           via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-60 group-hover:w-[100%]
                           transition-all duration-1000'></div>

                           {/* title */}
                           <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 
                           group-hover:xl:-translate-y-20 transition-all opacity-0 
                           group-hover:opacity-100 scale-[100] group-hover:scale-[1]'>
                              <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                                 <div className='delay-200 -translate-x-[500%] group-hover:-translate-x-0 
                                 transition-all duration-400'>
                                    LIVE
                                 </div>
                                 <div className='translate-y-[500%] group-hover:translate-y-0 transition-all
                                 duration-500 delay-250'>
                                    PROJECT
                                 </div>
                                 <div className='translate-x-[500%] group-hover:translate-x-0 transition-all
                                 duration-600 delay-300 text-xl'>
                                    <BsArrowRight />
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </SwiperSlide>
         ))}
      </Swiper>
   );
};

export default WorkSlider;

