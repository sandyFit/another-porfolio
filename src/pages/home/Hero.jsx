import React from 'react';
import TimeZone from '../../components/ui/TimeZone';
import GlitchText from '../../components/ui/GlitchText';
import Logo from '../../components/ui/Logo';


const Hero = () => {
    
    return (
        <section id="hero"
            className='w-[97%] min-h-[calc(100vh-60px)] bg-orangi-400 rounded-[50px] mx-auto mt-[30px]'>
            <div className="flex w-full relative">               
                    <div className="flex flex-col items-end w-[20%] mt-28 absolute left-[89.5rem] ">
                        <TimeZone/>
                    </div>
                </div> 

            <div className="flex flex-col w-full h-full ">
                <article className="flex flex-col justify-between w-full h-full ">                    
                    <div className="w-full flex flex-col justify-center items-center h-full relative mt-20
                         overflow-hidden">
                        <div className="flex justify-center items-center">
                            
                            <div className="w-full flex flex-col justify-start font-ibm uppercase text-[10rem] 
                                text-zinc-300 font-[400] tracking-[2px] mt-60">                               
                                <h3 className='w-full flex absolute bottom-36 textSlidingLeft'>                            
                                    designer                     
                                </h3>
                                <h3 className='w-full flex  text-zinc-900 font-[500] ml-[20rem]'>
                                    <span className='mr-20 '>&</span> 
                                     <GlitchText text={'developer_'}
                                    typingSpeed={120}
                                /> 
                                </h3>
                            </div>  
                        </div>                                                                                                     
                    </div>
                                      
                    <div className="flex w-full h-full justyfy-end items-end" >    
                        <div className='w-[60%]  font-ibm text-[1.9rem] font-[400] uppercase text-zinc-300  
                        tracking-wide relative left-[44rem] bottom-5'>
                            Hi there, I'm Trish a creative developer based in Colombia,
                            especializing in frontend & motion.                          
                        </div>    
                    </div>    

                    <div className="absolute w-[255px] h-[255px] rounded-full top-[30.3rem] left-[8.3rem] bg-zinc-300"></div>
                    <div className="w-[300px] h-[300px] flex z-30 absolute top-[29rem] left-28 -rotate-45">
                        <Logo text={'Open to Roles and Projects'}
                           imagePath={'./happy-face.png'}
                         />
                    </div>    

                    <div className="w-full flex justify-end items-end mt-24 pr-10">                          
                        {/* <button class="group relative inline-flex items-center justify-center overflow-hidden 
                            rounded-full bg-zinc-900 px-16 py-3 font-ibm text-3xl tracking-wider text-neutral-200 duration-500 ">
                            <div class="relative inline-flex -translate-x-0 items-center transition 
                                group-hover:-translate-x-6">
                                <div class="absolute translate-x-0 opacity-100 transition 
                                    group-hover:-translate-x-6 group-hover:opacity-0">
                                    <svg width="52" height="52" viewBox="0 0 190 100" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        className=''>
                                            <line x1="10" y1="50" x2="90" y2="50" stroke="#d4d4d8" stroke-width="5"/>
                                            <line x1="50" y1="10" x2="50" y2="90" stroke="#d4d4d8" stroke-width="5" />
                                            <line x1="20" y1="20" x2="80" y2="80" stroke="#d4d4d8" stroke-width="5"/>
                                            <line x1="80" y1="20" x2="20" y2="80" stroke="#d4d4d8" stroke-width="5"/>
                                        </svg>
                                </div>
                                <span class="px-2 ml-8 mr-2 uppercase">
                                    My Work
                                </span>
                                <div class="absolute right-0 translate-x-12 opacity-0 transition group-hover:translate-x-6 group-hover:opacity-100">
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 ml-4">
                                        <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                                    </svg>
                                </div>
                            </div>
                        </button>                                                          */}

                        {/* <button class="group relative inline-flex h-[60px] items-center justify-center overflow-hidden 
                        rounded-full border-[3px] text-zinc-300 font-ibm text-[2.3rem] font-[500] border-dotted
                        border-zinc-900 bg-transparent  uppercase px-12 py-2 tracking-widest">
                            <div class="inline-flex h-16 translate-y-0 items-center justify-center px-12 text-zinc-300 
                            transition duration-500 group-hover:-translate-y-[150%]">
                                My Work
                            </div>
                            <div class="absolute inline-flex font-ibm text-[2.3rem] font-[500] h-[92px] w-full translate-y-[100%] 
                            items-center justify-center tracking-widest uppercase transition duration-500 group-hover:translate-y-0">
                                <span class="absolute h-full w-full translate-y-full skew-y-12 scale-y-0 bg-zinc-900 
                                transition duration-500 group-hover:translate-y-0 group-hover:scale-150">
                                </span>
                                <span class="z-10">
                                    My Work
                                </span>
                            </div>
                        </button> */}


                        <button class="relative h-[60px] overflow-hidden bg-transparent font-ibm text-[2.3rem] font-[500]
                        rounded-full text-zinc-300 border-2 border-zinc-900 flex items-center
                        uppercase px-24 py-2 tracking-widest bg-zinc-900
                        before:absolute before:bottom-0 before:left-0 before:block before:h-full
                        before:w-full before:-translate-y-full before:bg-orangi-400 
                        before:transition-transform
                        hover:before:-translate-y-0">
                            <span class="relative">my work</span>
                        </button>


                        {/* <button class="group relative z-0 h-[60px] overflow-hidden overflow-x-hidden rounded-full flex items-center
                        font-ibm text-[2.3rem] font-[500] uppercase px-24 py-2 text-zinc-300 bg-zinc-900 border-2
                        border-dotted border-zinc-900">
                            <span class="relative z-10">my work</span>
                            <span class="absolute inset-0 overflow-hidden rounded-md">
                                <span class="absolute left-0 aspect-square w-full origin-center translate-x-full 
                                rounded-full bg-orangi-400 transition-all duration-500 group-hover:-translate-x-0
                                group-hover:scale-150">
                                </span>
                            </span>
                        </button> */}
                    </div>                            
                                                             
                </article>                
                
                
            </div>           
        </section>
    )
}

export default Hero;

