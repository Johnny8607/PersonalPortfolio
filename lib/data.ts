import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import { FaUsersCog } from "react-icons/fa";
import carRentalImg from "@/public/carRental.png";
import petAdoptionImg from "@/public/petAdoption.png";
import snakeAndLadderImg from "@/public/snakeAndLadder2.png";
import conuhacksImg from "@/public/conuhacks.png";
import mailingListImg from "@/public/mailinglist.png";
import registrationImg from "@/public/registration.png";

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
      "Pursuing a Bachelor in Software Engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - present",
  },
  {
    title: "Front-End Developer Intern",
    location: "Genetec",
    description:
      "Built new UI components in React, Angular, and Vue, expanding Genetec’s Gelato design system. Reduced bugs by 30% through maintenance and testing. Optimized codebase, cutting user search time by 60%. Collaborated on peer code reviews to improve components.",
    icon: React.createElement(CgWorkAlt),
    date: "Fall 2023",
  },
  {
    title: "Back-End Developer Intern",
    location: "Intact Insurance",
    description:
      "Optimized backend code with Java/Spring, improving performance. Wrote unit tests with Mockito/JUnit for data feeds processing 15,000 policies. Fixed bugs and added features to ContactPL, enhancing functionality for 2,308 brokers.",
    icon: React.createElement(CgWorkAlt),
    date: "Fall 2024",
  },
  {
    title: "VP-Technology & Design",
    location: "HackConcordia",
    description:
      "Led a team of six developers to build the infrastructure for ConUHacks 2025. Developed a scalable registration app for 2,000+ applicants using Next.js and MongoDB. Designed and built the ConUHacks website with Figma, Next.js, and Framer Motion. Achieved a club record with 180+ project submissions on Devpost.",
    icon: React.createElement(FaUsersCog),
    date: "May 2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "ConuHacks IX Website",
    description:
      "Designed and developed the official ConUHacks IX website, attracting over 800 participants to the event.",
    tags: ["React", "Next.js", "MongoDB", "TailwindCSS", "Figma", "Framer Motion"],
    imageUrl: conuhacksImg,
  },
  {
    title: "Registration App",
    description:
      "Designed and developed ConUHacks' registration app, streamlining the registration process for over 2200 participants.",
    tags: ["React", "Next.js", "MongoDB", "TailwindCSS", "Figma", "Framer Motion"],
    imageUrl: registrationImg,
  },
  {
    title: "Mailing List",
    description:
      "Built and designed ConUHacks' first mailing list application, growing to over 600 subscribers.",
    tags: ["React", "Next.js", "MongoDB", "TailwindCSS", "Figma", "Framer Motion"],
    imageUrl: mailingListImg,
  },
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
  "SpringBoot",
  "Junit",
  "Jest",
  "Framer Motion",
  "TailwindCSS",
  "Bootstrap5",
  "MongoDB",
  "Git",
  "Npm",
  "Maven"
] as const;