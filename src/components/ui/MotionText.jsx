
import React from 'react';


const MotionText = ({ icon, text1, text2, text3, className}) => {
  const repetitions = Array(10).fill(null);

  return (
      <div className="w-full h-full z-10 flex items-centerpy-1 "
            style={{ overflow: 'hidden'}}>
            <h2 className=' motion-text font-ibm text-[1.8rem] font-[400] tracking-wider uppercase'>
                <div style={{ display: 'flex', whiteSpace: 'nowrap' }}>
                    {repetitions.map((_, index) => (
                        <React.Fragment key={index}>
                            <span className='mx-8 text-zinc-300 text-[1.6rem] mt-2'>
                                {icon}
                            </span>
                            <span className='text-zinc-300' >{text1}</span>
                            
                        </React.Fragment>
                    ))}
                </div>
            </h2>
    </div>
  )
};

export default MotionText;

