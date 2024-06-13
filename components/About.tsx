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
        👋 Hi, I&lsquo;m Anubhav Agrawal! I&lsquo;m a friendly web developer
        hailing from Gurugram, Haryana. Currently pursuing my B.Tech degree from
        Chandigarh University 4th year, I have an insatiable passion for
        creating stunning websites that leave a lasting impression on the
        internet. With a strong skillset in HTML, JavaScript, CSS, Next.js,
        Node.js, and MongoDB, I strive to deliver exceptional digital
        experiences. Let&lsquo;s collaborate and bring your web projects to
        life! Connect with me today and let&lsquo;s make magic happen. ✨💻
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
