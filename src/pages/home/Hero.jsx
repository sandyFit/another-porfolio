import React from 'react';
import TimeZone from '../../components/ui/TimeZone';
import GlitchText from '../../components/ui/GlitchText';
import Logo from '../../components/ui/Logo';
import { useNavigate } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';


const Hero = () => {

    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('projects');
    }
    
    return (
        <section id="hero"
            className='w-[97%] min-h-[calc(100vh-60px)] bg-[#ff00d2] rounded-[50px] mx-auto mt-[30px]'>
            <div className="flex w-full relative">               
                <div className="flex flex-col items-end w-[20%] mt-28 absolute left-[89.5rem] ">
                    <TimeZone/>
                </div>
            </div> 

            <div className="w-full flex flex-col w-full h-full ">
                <article className="flex flex-col justify-between w-full h-full ">                    
                    <div className="w-full flex flex-col justify-center items-center h-full relative mt-20
                         overflow-hidden">
                        <div className="flex justify-center items-center">
                            
                            <div className="w-full flex flex-col justify-start font-ibm uppercase text-[10rem] 
                                text-zinc-300 font-[400] tracking-[2px] mt-52">                               
                                <h3 className='w-full flex absolute bottom-40 textSlidingLeft'>                            
                                    designer                     
                                </h3>
                                <h3 className='w-full flex  text-zinc-900 font-[500] ml-[20rem]'>
                                    <span className=' textSlidingRight'>& developer</span>                                      
                                </h3>
                            </div>  
                        </div>                                                                                                     
                    </div>
                                      
                    <div className="flex w-full h-full justyfy-end items-end ml-96" >                           
                        <div className="flex w-[35%] bg-zinc-300 rounded-[60px] p-16 
                            border-2 border-zinc-800">
                            <p className='font-ibm text-[1.5rem] font-[400] uppercase text-zinc-900  
                            acking-wide leading-[40px] '>
                            Hi there, I'm Trish a creative developer based in Colombia,
                            especializing in frontend & motion.
                            </p>
                        </div>
    
                        <div className="w-[20%] flex flex-col justify-center items-center mt-20 pr-10 relative gap-2">   

                            <div className='flex w-full bg-zinc-300 rounded-[60px] p-12 justify-end items-center
                            border-2 border-zinc-800 '>
                                <p className='font-ibm text-[1.5rem] font-[400] uppercase text-zinc-900 '>
                                    check out my work
                                </p>
                            </div>    
                            <button onClick={handleNavigation}
                                className="w-[98%] relative overflow-hidden bg-transparent font-ibm text-[1.6rem] font-[400]
                                rounded-[50px] text-zinc-100 border-2 border-zinc-900 flex justify-center items-center
                                uppercase py-2 tracking-widest bg-zinc-900
                                before:absolute before:bottom-0 before:left-0 before:block before:h-full
                                before:w-full before:-translate-y-full before:bg-hotPink-400 
                                before:transition-transform 
                                hover:before:-translate-y-0">
                                <span className="relative">
                                    <BsArrowRight style={{fontSize: '3rem'}}/>
                                </span>
                            </button>
                        </div>  
                    </div>    

                       

                    
                    
                    <div className="absolute w-[255px] h-[255px] rounded-full top-[31.46rem] left-[8.35rem] bg-zinc-300"></div>
                    <div className="w-[300px] h-[300px] flex z-30 absolute top-[30rem] left-28 -rotate-45">
                        <Logo text={'Open to Roles and Projects'}
                           imagePath={'./happy-face.png'}
                         />
                    </div> 
                                                             
                </article>                
                
                
            </div>           
        </section>
    )
}

export default Hero;

