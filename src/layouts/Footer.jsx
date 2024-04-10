import React from 'react'
import { FaCopyright } from 'react-icons/fa';
import { BsEnvelope, BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';

const Footer = () => {

    const date = new Date();

    return (
        <section id='contact' className='w-[97%] h-[100px] flex bg-hotPink-400 absolute bottom-8 rounded-b-[50px]'>         
            <div className="w-full flex flex-col items-center justify-center">
                <hr className='w-[95%] border-t-2  border-zinc-900 pt-4 ' />

                <div className="w-full flex justify-between items-center ">
                    <div className="w-[70%] h-full flex font-ibm text-[1.45rem] uppercase text-zinc-800 font-[400] 
                        tracking-wide ml-16">
                        <FaCopyright style={{margin: '.4rem .8rem 0 0', fontSize: '1.5rem'}}/>
                        {date.getFullYear()} <br/><br/>
                        <span className='text-zinc-200 font-[500] mx-3'>Trish Ramos</span>
                        <span className='text-zinc-800 font-[500]'>Crafted by yours truly</span>

                        
                    </div>                    
                
                    <div className='w-[30%] h-full flex items-start ml-[32rem]'>
                        {/* Be kind, Do Good & create with passion */}
                        <article className='w-[20%] h-full flex justify-evenly items-start text-zinc-900 gap-16'>
                
                            <a  href='mailto:sandy07r@gmail.com' className='flex relative bottom-1'>
                                <BsEnvelope
                                    style={{ fontSize: '2.3rem', cursor: 'pointer', transition: 'opacity 0.2s'}}
                                    onMouseOver={(e) => e.target.style.opacity = 0.65}
                                    onMouseOut={(e) => e.target.style.opacity = 1} />
                            </a>

                            <div className="flex ">
                                <BsGithub style={{ fontSize: '2rem', cursor: 'pointer', transition: 'opacity 0.3s' }}
                                    onMouseOver={(e) => e.target.style.opacity = 0.65}
                                    onMouseOut={(e) => e.target.style.opacity = 1} />
                            </div>
                            

                            <div className="flex ">
                                <BsLinkedin style={{ fontSize: '1.8rem', cursor: 'pointer', transition: 'opacity 0.3s' }}
                                    onMouseOver={(e) => e.target.style.opacity = 0.65}
                                    onMouseOut={(e) => e.target.style.opacity = 1} />
                            </div>

                            <div className="flex ">
                                <BsInstagram style={{ fontSize: '1.9rem', cursor: 'pointer', transition: 'opacity 0.2s' }}
                                    onMouseOver={(e) => e.target.style.opacity = 0.65}
                                    onMouseOut={(e) => e.target.style.opacity = 1} />
                            </div>
                        </article>
                    </div>
                </div>                              
            </div>    
        </section>
    )
}

export default Footer;




