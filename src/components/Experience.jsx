import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from "framer-motion";
import 'react-vertical-timeline-component/style.min.css';

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
  contentStyle = {{ background: "primary", color: '#fff'}}
  contentArrowStyle = {{ borderRight: '10px solid #064665'}}
  iconStyle={{
    
    background: experience.iconBg}}
  icon={
    <div className="flex justify-center items-center w-full h-full">
      <img
      src={experience.icon}
      alt={experience.company_name}
      className="w-[60%] h-[60%] object-contain" />

    </div>
  }
  >
    <div>
      <h3 className="text-tertiary text-[24px] font-bold">{experience.title}</h3>
      <p className="text-primary text-[16px] font-semibold" style={{margin:0}}>{experience.company_name}</p>
    </div>

    <ul className="mt-5 list-dsc ml-5 space-y-2">
      {experience.points.map((point,index) => (
        <li
        key={`experience-point-${index}`}
        className="text-primary text-[14px] pl-1 tracking-wider"
        >
          {point}

        </li>
      ))}
    </ul>

  </VerticalTimelineElement>
)


const Experience = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>WORK</p>
    <h2 className={styles.sectionHeadText}>Our Chain Of Operation</h2>
          

    </motion.div>

    <div className="mt-20 flex flex-col">
      <VerticalTimeline lineColor="#064665">
        {experiences.map((experience, index) => (
          <ExperienceCard
          key={index}
          experience={experience}
          />
        ))}
      </VerticalTimeline>
    </div>
    </>
  )
}

export default SectionWrapper(Experience, "work")