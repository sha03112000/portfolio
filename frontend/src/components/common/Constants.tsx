import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { Palette } from 'lucide-react';
import {
  DiMongodb, DiReact, DiNodejs, DiPython, DiPhp,
  DiMysql, DiJavascript, DiPostgresql, DiBootstrap,
  DiLaravel, DiDjango, DiGit, DiHtml5, DiCss3
} from 'react-icons/di';


export const socialLinks = [
  { icon: FaGithub, href: 'http://github.com/sha03112000', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/shabad-mk-040a07212', label: 'LinkedIn' },
  { icon: FaInstagram, href: 'https://instagram.com/__willyem', label: 'Instagram' },
  { icon: FaEnvelope, href: 'mailto:shabadmk969@gmail.com', label: 'Email' },
  { icon: FaWhatsapp, href: 'https://wa.me/+918547412614', label: 'WhatsApp' },
]

export const skills = [
  { name: 'Python', color: 'from-blue-500 to-blue-600', icon: DiPython },
  { name: 'JavaScript', color: 'from-yellow-500 to-yellow-600', icon: DiJavascript },
  { name: 'React', color: 'from-cyan-500 to-cyan-600', icon: DiReact },
  { name: 'Node.js', color: 'from-green-500 to-green-600', icon: DiNodejs },
  { name: 'PHP', color: 'from-purple-500 to-purple-600', icon: DiPhp },
  { name: 'MySQL', color: 'from-orange-500 to-orange-600', icon: DiMysql },
  { name: 'MongoDB', color: 'from-emerald-500 to-emerald-600', icon: DiMongodb },
  { name: 'HTML', color: 'from-pink-500 to-pink-600', icon: DiHtml5 },
  { name: 'CSS', color: 'from-teal-500 to-teal-600', icon: DiCss3 },
  { name: 'TypeScript', color: 'from-blue-600 to-blue-700', icon: DiJavascript },
  { name: 'Tailwind CSS', color: 'from-teal-500 to-teal-600', icon: Palette },
  { name: 'Git', color: 'from-red-500 to-red-600', icon: DiGit },
  { name: 'PostgreSQL', color: 'from-sky-500 to-sky-600', icon: DiPostgresql },
  { name: 'Bootstrap', color: 'from-purple-400 to-purple-500', icon: DiBootstrap },
  { name: 'Laravel', color: 'from-red-400 to-red-500', icon: DiLaravel },
  { name: 'Django', color: 'from-green-400 to-green-500', icon: DiDjango },
];
