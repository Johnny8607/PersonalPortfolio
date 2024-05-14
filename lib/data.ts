import React from "react";
import { CgWorkAlt } from "react-icons/cg";
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
      "Currently pursuing a Bachelor in Software Engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - present",
  },
  {
    title: "Front-End Developer Intern",
    location: "Genetec",
    description:
      "I worked as a front-end developer intern within the UX team for 4 months. I have gained experience with popular frameworks such as React, Angular, and Vue.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
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