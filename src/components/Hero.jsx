// import React from 'react'
import styles from '../style'
import logo_1 from '../assets/internet_1.png'
import logo_2 from '../assets/internet_2.png'
import logo_3 from '../assets/internet_3.png'

const Hero = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
            <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
                <img src={logo_1} alt="internet"  className='w-[52px] h-[32px]'/>

            </div>

        </div>

    </section>
  )
}

export default Hero