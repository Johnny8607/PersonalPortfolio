import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import carRentalImg from "@/public/carRental.png";
import petAdoptionImg from "@/public/petAdoption.png";
import snakeAndLadderImg from "@/public/snakeAndLadder2.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineering student",
    location: "Concordia University",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Car Rental",
    description:
      "Developed a full-stack car rental web application. Led a team of 6 members as the Scrum Master. User-friendly interfaces that allows users to book any vehicles easily.",
    tags: ["React", "Next.js", "MongoDB", "TailwindCSS", "DaisyUI"],
    imageUrl: carRentalImg,
  },
  {
    title: "Pet Adoption",
    description:
      "Developed a pet adoption web application as the front-end developer. Implemented an authentication system.",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "Bootstrap", "Font Awesome"
    ],
    imageUrl: petAdoptionImg,
  },
  {
    title: "Snake and Ladder Game",
    description:
      "Developed a simple user interface within the terminal for seamless interaction with the game. Players can engage with the game using the keyboard.",
    tags: ["Java", "Eclipse"],
    imageUrl: snakeAndLadderImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "React",
  "Angular",
  "Node.js",
  "Next.js",
  "Git",
  "TailwindCSS",
  "Bootstrap5",
  "MongoDB",
  "Framer Motion",
] as const;