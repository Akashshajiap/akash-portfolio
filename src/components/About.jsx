import { motion } from 'framer-motion';
import React from 'react';
import { Tilt } from 'react-tilt';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon, icons, tags }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        className="bg-tertiary rounded-[20px] py-5 px-8 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        {/* Single or dual icons */}
        {icons ? (
          <div className="flex gap-4 items-center justify-center">
            {icons.map((ic, i) => (
              <img key={i} src={ic} alt={title} className="w-12 h-12 object-contain" loading="lazy" />
            ))}
          </div>
        ) : (
          <img src={icon} alt={title} className="w-16 h-16 object-contain" loading="lazy" />
        )}

        <h3 className="text-white text-[20px] font-bold text-center mt-3">{title}</h3>

        {/* Skill tags */}
        {tags && (
          <div className="flex flex-wrap justify-center gap-1 mt-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] text-[#00cea8] font-medium bg-[#00cea81a] px-2 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Commercially minded Data and Financial Analyst with 1+ year of experience in financial reporting, revenue analysis,
        and business process improvement, complemented by a Data Analytics internship using Excel, SQL, Python, Power BI,
        and Tableau. Experienced in analysing business data, identifying trends, building KPI dashboards, and transforming
        complex datasets into actionable insights for stakeholders. Skilled in reporting automation, cross-functional collaboration,
        and AI-assisted analytics, with a strong interest in commercial strategy, pricing analysis, product performance, and
        revenue growth.
      </motion.p>

      <div className="mt-20 flex flex-wrap justify-center gap-8">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

const WrappedAbout = SectionWrapper(About, 'about');

export default WrappedAbout;
