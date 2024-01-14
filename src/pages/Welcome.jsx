// React
import { useRef } from 'react';

// Static component
import { Footer } from '../components/Footer';

// Flowbite
import { Carousel } from 'flowbite-react';

// Bootstrap component
import { Row, Col } from 'react-bootstrap';
// bootstrap icon
import {  BoxArrowUpRight } from 'react-bootstrap-icons'

// logo
import laravelLogo from '/logo/vendor/laravel-logolockup-rgb-red.png';
import phpLogo from '/logo/vendor/PHP-logo.png';
import reactLogo from '../assets/react.svg';
import jsLogo from '/logo/vendor/JavaScript-logo.png';
import bootstrapLogo from '/logo/vendor/bootstrap-logo.svg';
import twLogo from '/logo/vendor/tailwindcss-logotype.svg';

// Image
import ngefont from '../assets/image/ngefont/ngfont-illustration.png';
import takeIt1 from '../assets/image/takeit/1.png';
import takeIt2 from '../assets/image/takeit/2.png';
import amogasakti from '../assets/image/amogasakti/amogasakti.png';

export function Welcome () {

    return (
        <>
            <div className='flex justify-center content-center h-screen'>
                <div className='my-auto'>
                    <a href="https://zakacoding.github.io" className='flex lg:justify-center sm:justify-start content-center w-10/12 mx-auto logo group mb-5'>
                        <svg className='mr-2 transform group-hover:-rotate-6' viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                            <rect width="512" height="512" rx="50" className="fill-black dark:fill-white"/>
                            <path d="M283.666 323.207V361H109.936V323.207L231.518 174.379V173.793H109.936V136H283.666V173.793L162.523 322.621V323.207H283.666ZM443.188 273.988C443.188 259.34 438.012 246.791 427.66 236.342C417.406 225.893 404.906 220.668 390.16 220.668C375.512 220.668 362.963 225.941 352.514 236.488C342.162 246.938 336.986 259.438 336.986 273.988C336.986 288.832 342.162 301.527 352.514 312.074C362.963 322.523 375.512 327.748 390.16 327.748C405.004 327.748 417.553 322.523 427.807 312.074C438.061 301.527 443.188 288.832 443.188 273.988ZM443.188 361V333.168H442.602C437.035 342.348 429.32 350.16 419.457 356.605C409.691 362.953 398.119 366.127 384.74 366.127C359.154 366.127 337.377 357.338 319.408 339.76C301.537 322.084 292.602 300.16 292.602 273.988C292.602 248.012 301.537 226.234 319.408 208.656C337.377 190.98 359.154 182.143 384.74 182.143C408.373 182.143 427.66 192.25 442.602 212.465H443.188V187.27H485.814V361H443.188Z" className="fill-white dark:fill-black"/>
                        </svg>

                        <svg className=' dark:fill-white w-32'viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="512" height="512" rx="50" className='fill-black dark:fill-white'/>
                            <rect x="275.822" y="354.283" width="37.9892" height="228.315" rx="18.9946" transform="rotate(120 275.822 354.283)" className='fill-white dark:fill-black'/>
                            <rect x="256.736" y="142.854" width="37.9892" height="228.315" rx="18.9946" transform="rotate(60 256.736 142.854)" className='fill-white dark:fill-black'/>
                            <rect x="417.036" y="74.1604" width="38.2725" height="374.324" rx="19.1363" transform="rotate(20 417.036 74.1604)" className='fill-white dark:fill-black'/>
                        </svg>
                    </a>

                    <div className='block w-10/12 lg:w-7/12 mb-6 sm:text-center text-left mx-auto'>
                        <h1 className='sm:text-2xl lg:text-6xl text-black font-bold dark:text-gray-600'>
                            I read, <span className=' text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>coding</span>, and drink too much Coffe<small>☕</small>
                        </h1>
                    </div>
                </div>
            </div>

            <section id='#experience' className='mb-5'>
                <div className="container">
                    <Row>
                        <Col xs={12} lg={6} className='mb-5'>
                            <div className="sticky top-10 pt-5">
                                <h1 className="font-block mb-3 dark:text-white">
                                    Selected Work
                                </h1>
                                <p className="text-gray-400 text-3xl">
                                    As a moonlighting developer and generalist designer, I'm passionate about creating interfaces that are fun, useful, and user-centric.
                                </p>
                            </div>
                        </Col>
                        <Col xs={12} lg={6} className='mb-5'>
                            <div className="rounded-3xl bg-white dark:bg-gray-800 block relative overflow-hidden w-full pb-5 mb-5 hover:-translate-y-2 transition-transform">
                                <div className="flex justify-between p-5">
                                    <div className="title">
                                        <h1 className='font-mona font-bold text-4xl mb-2 text-slate-800 dark:text-white'>Ngefont</h1>
                                        <p className='text-gray-400 text-xl font-light'>
                                            Making the web more beautiful, fast, and open through great typography. Ngefont makes it easy to bring personality and performance to your websites and products. Web for sharing free font
                                        </p>
                                    </div>

                                    <a href="https://ngefont.com" target='_blank' className='text-2xl ml-2' rel="noreferrer">
                                        <BoxArrowUpRight />
                                    </a>
                                </div>
                                <div className='block w-full h-[400px] relative'>
                                    <div className="frame absolute top-0 -right-20 w-full h-[400px] pl-20 py-3 overflow-hidden">
                                        <div className='h-[340px] w-full rounded-sm overflow-y-scroll'>
                                            <img src={ ngefont } alt="ngefont" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-3xl bg-white dark:bg-gray-800 w-full pb-5 mb-5 hover:-translate-y-2 transition-transform">
                                <div className="flex justify-between p-5">
                                    <div className="title">
                                        <h1 className='font-mona font-bold text-4xl mb-2 text-slate-800 dark:text-white'>Takeit</h1>
                                        <p className='text-gray-400 text-xl font-light'>  
                                            TakeIt is a digital agency located in the city of Malang. We specialize in enhancing product branding through professional photography services, such as food and beverage photography. In today's era of digital marketing, having a professional company profile is one of the pathways to gain a competitive edge against other business competitors.
                                        </p>
                                    </div>

                                    <a href="https://takeitoffice.com" target='_blank' className='text-2xl ml-2' rel="noreferrer">
                                        <BoxArrowUpRight />
                                    </a>
                                </div>
                            </div>

                            <div className="rounded-3xl bg-white dark:bg-gray-800 w-full pb-5 hover:-translate-y-2 transition-transform">
                                <div className="flex justify-between p-5 mb-2">
                                    <div className="title">
                                        <h1 className='font-mona font-bold text-4xl mb-2 text-slate-800 dark:text-white'>AMOGASAKTI</h1>
                                        <p className='text-gray-400 text-xl font-light'>
                                            Amogasakti is card game develop by my friends Rifki Fajar, at the time i got trust from him to build a web, then i transform design from figma to code.
                                        </p>
                                    </div>

                                    <a href="https://amogasakti.vercel.app/" target='_blank' className='text-2xl ml-2' rel="noreferrer">
                                        <BoxArrowUpRight />
                                    </a>
                                </div>
                                <div className='px-5'>
                                    <img src={amogasakti} alt="" className='rounded-xl' />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>

            <section id='#project' className=''>
                <div className="container">
                    <div className="mx-auto text-center w-fit p-5">
                        <h1 className="font-bold lg:text-8xl sm:text-6xl mb-5 dark:text-white">Fun Project</h1>
                        <p className="text-xl text-gray-400">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores dolorem, recusandae ipsam id odit nam mollitia, fugiat quo repellendus ducimus eum consectetur reprehenderit dicta pariatur aliquid minima. Saepe, repellendus fuga?
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
