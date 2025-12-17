import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { Palette } from 'lucide-react';
import {
  DiMongodb, DiReact, DiNodejs, DiPython, DiPhp,
  DiMysql, DiJavascript, DiPostgresql, DiBootstrap,
  DiLaravel, DiDjango, DiGit, DiHtml5, DiCss3
} from 'react-icons/di';
import autohead from '../../assets/projectImg/autohead.png';
import gadgetInventory from '../../assets/projectImg/gadget-inventory.png';





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


export const projects = [
  {
    title: 'Auto Head Car Acessories',
    description: 'A full-featured admin dashboard with analytics, inventory management, and real-time updates.',
    image: autohead,
    github: 'https://github.com/sha03112000/autohead',
    demo: '',
    tags: ['React', 'Django', 'PostgresQL', 'Tailwind CSS'],
  },
  {
    title: 'Gadget Stock WebApp',
    description: 'Inventory management system for tracking and managing gadget stocks in real-time.',
    image: gadgetInventory,
    github: 'https://github.com/sha03112000/gadget_inventory',
    demo: 'https://project-demo.com',
    tags: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Counselling Platform',
    description: 'Online platform for counseling and psychological services.',
    image: 'https://images.unsplash.com/photo-1724260793422-7754e5d06fbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwZGV2ZWxvcG1lbnQlMjBzY3JlZW58ZW58MXx8fHwxNzY0MTE4NTE2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    github: '',
    demo: '',
    tags: ['TypeScript', 'Node.js', 'MongoDB', 'React', 'Tailwind CSS'],
  },
  {
    title: 'Mini ERP System',
    description: 'A simple ERP system for managing sales and inventory.',
    image: 'https://images.unsplash.com/photo-1758762641372-e3b52bf061d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNoJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2NDA2NjIxMnww&ixlib=rb-4.1.0&q=80&w=1080',
    github: '',
    demo: '',
    tags: ['Laravel', 'Bootstrap', 'MySQL'],
  },
];
