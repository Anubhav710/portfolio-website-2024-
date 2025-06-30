"use client";
import React from "react";

import { services } from "@/constants";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/utils/motion";
import { styles } from "@/styles";
import Image from "next/image";

const ServiceCard = ({ icon, title, index }: any) => {
  return (
    <div className="xs:w-[250px]   ">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5  px-12 min-h-[280px] flex flex-col items-center justify-evenly">
          <Image
            src={icon}
            alt={title}
            width={64}
            height={64}
            className="object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </div>
  );
};

const About = () => {
  return (
    <div className="Wrapper Div px-2 md:px-5">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>INTRODUCTION</p>
        <h2 className={`${styles.sectionHeadText}`}>About Me</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        👋 Hi, I'm Anubhav Agrawal from Gurugram, Haryana — currently working as a Frontend Developer at UTXO Tech with 1 year of hands-on experience. I specialize in building fast, responsive, and visually appealing websites using HTML, CSS, JavaScript, Next.js, and MongoDB. I'm passionate about turning ideas into clean, functional web experiences that users love. ✨💻
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((services, index) => (
          <ServiceCard key={services.title} {...services} index={index} />
        ))}
      </div>
    </div>
  );
};

export default About;
