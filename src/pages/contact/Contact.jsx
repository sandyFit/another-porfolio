import React, { useState } from 'react'
import TimeZone from '../../components/ui/TimeZone'
import { BsAsterisk, BsCheck,  BsEnvelope, BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import Footer from '../../layouts/Footer';
import Logo from '../../components/ui/Logo';
import MotionText from '../../components/ui/MotionText';
import MotionText2 from '../../components/ui/MotionText2';

const Contact = () => {

    const [isClicked, setIsClicked] = useState(false);
    const [showCopiedText, setShowCopiedText] = useState(false);


    const colorSwitch = () => {
    const lightedText = document.querySelector('#emailAddress');
    // Remove the class to reset the animation
    lightedText.classList.remove('revealText');
    // Force reflow/repaint
    void lightedText.offsetWidth;
    // Add the class again to start the animation
    lightedText.classList.add('revealText');
}

    const handleColorClick = () => {
        const emailAddress = 'hello@trishramos.com';
        
        navigator.clipboard.writeText(emailAddress).then(() => {
            console.log('Email address copied to clipboard!');
            setShowCopiedText(true); // Show "Copied" text
            setTimeout(() => {
                setShowCopiedText(false); // Hide "Copied" text after 4 seconds to match the fade animation
            }, 1200); // Adjust the timing based on your animation
        }).catch(err => {
            console.error('Failed to copy email address to clipboard:', err);
        });

        setIsClicked(true);
        colorSwitch();
    };
  
    return (
        <section id="contact"
            className='w-[97%] min-h-[calc(100vh-60px)] bg-[#ff00d2] rounded-[50px] mx-auto mt-[30px]'>
             <div className="flex w-full relative">               
                <div className="flex flex-col items-end w-[20%] mt-28 absolute left-[89.5rem] ">
                    <TimeZone/>
                </div>
            </div> 
            
            <div className="w-full flex flex-col h-full justify-center items-center mt-32 overflow-hidden">
                <div className="w-full flex ">
                    <MotionText
                        icon={<BsAsterisk className='rotating-icon' />}
                        text1={'Caught Your Eye? get in touch!'}
                    />                        
                </div>
                <div className="w-full flex mt-[-4.8rem]">
                    <MotionText2
                        icon={<BsAsterisk className='rotating-icon' />}
                        text1={'Caught Your Eye? get in touch!'}
                    />                        
                </div>

                <button className="flex flex-col justify-center items-center relative"
                    onClick={handleColorClick}>
                    <p id='emailAddress'
                        className=' w-full text-center lowercase text-ibm text-7xl text-zinc-900 font-[400] 
                        tracking-widest mt-28'>
                        hello
                        <span className='text-zinc-200'>@</span>trishramos.com
                    </p>
                    {showCopiedText && (
                        <h3 className={`flex font-ibm text-lg font-[400] text-zinc-800 tracking-widest gap-1 
                            absolute
                            ${showCopiedText ? 'copiedTextVisible' : 'copiedTextHidden'}`}>
                            Copied <BsCheck style={{fontSize: '2rem', color: '#d4d4d8', marginTop: '-5px'}}/>
                        </h3>
                    )}
                </button>

            </div> 
            <div className="flex justify-end items-end relative">

                
            </div>              

            <div className="absolute w-[255px] h-[255px] rounded-full top-[31.46rem] left-[8.35rem] bg-zinc-300"></div>
            <div className="w-[300px] h-[300px] flex z-30 absolute top-[30rem] left-28 -rotate-45">
                <Logo text={'Open to Roles and Projects'}
                    imagePath={'./happy-face.png'}
                    />
            </div> 

            <div className="w-full h-full flex flex-col ">                        
                <Footer/>
            </div>
        </section>
    )
}

export default Contact