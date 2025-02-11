import React from 'react'

import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
        <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
          <div
          options={{
            max: 45,
            scale: 1,
            speed: 450 
          }}
          className="bg-secondary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title}
          className="w-16 h-16 object-contain" />  
          </div>
        </motion.div>
    </Tilt>
  )
}


const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} text-[#000000]`}>Introduction</p>
      <h2 className={`${styles.sectionHeadText} text-[#000000]`}>Overview</h2>
    </motion.div>

    <motion.p
    variants={fadeIn("", "", 0.1, 1)}
    className="mt-4 text-primary text-[17px max-w-3xl leading-[30px]">

      As one of the leading trucking companies in the country, we've got all your freight needs covered—from general freight producers to metal products and agricultural products, even oversized loads. We have the experience and expertise you need to get your product on time, every time.
      Our mission is simple: to haul freights across the United States in a safe and timely manner while providing our customers with 100% customer satisfaction. And we do this by using up-to-date TMS systems that allow us to track every single load in real time, so you'll always know where your product is at any given moment.
      We offer more than just trucking services, though. At IQS Group LLC Trucking, we want to be your one-stop shop for all things trucking related! That means that if you need help hiring drivers or keeping them happy with fair pay and bonus programs, or if you need 24/7 safety and dispatch services—we've got you covered!



    </motion.p>

    <div className="mt-20 flex flex-wrap gap-10">
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index}{...service} />
      ))}
    </div>

    </>
  )
}

export default About