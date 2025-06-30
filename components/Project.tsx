import React from "react";
import Link from "./Links";
import { MotionDiv } from "@/motion";
import { textVariant } from "@/utils/motion";
import { styles } from "@/styles";

const Project = () => {
  return (
    <div className=" max-w-7xl mx-auto px-2 md:px-5  ">
      <MotionDiv variants={textVariant()} id="project" className="pt-10">
        <p className={`${styles.sectionSubText}`}>PROJECT</p>
        <h2 className={`${styles.sectionHeadText}`}>My Project</h2>
      </MotionDiv>
      <div>
      <Link
          heading="PA Yoga Website"
          imgSrc="/images/yoga-website.png"
          href="https://payogastudio.com/"
          subheading="Click here for Live Demo"
        />
        <Link
          heading="Gaming Website"
          imgSrc="/images/gaming-website.png"
          href="https://gaming-website-sigma-ruby.vercel.app/"
          subheading="Click here for Live Demo"
        />
       
        <Link
          heading="Amazon Website "
          imgSrc="/images/Amazon.png"
          href="https://amazon-clone-lilac-sigma.vercel.app/"
          subheading="Click here for Live Demo"
        />
        <Link
          heading="Metaverse Madness "
          imgSrc="/images/Meta.png"
          href="https://metaverse-website-ashy.vercel.app/"
          subheading="Click here for Live Demo"
        />
      </div>
    </div>
  );
};

export default Project;
