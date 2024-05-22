// SkillsSection.js
import React from 'react';
import SkillBubble from './SkillBubble';
import { useSpring, animated } from '@react-spring/web';

const skills = [
  { skill: 'JavaScript', percentage: 70, description: 'Expert in JavaScript', color: '#F7DF1E' },
  { skill: 'React', percentage: 65, description: 'Proficient in React', color: '#61DAFB' },
  { skill: 'CSS', percentage: 80, description: 'Excellent in CSS', color: '#2965F1' },
  { skill: 'HTML', percentage: 75, description: 'Excellent in HTML', color: '#E44D26' },
  { skill: 'Python', percentage: 65, description: 'Proficient in Python', color: '#3776AB' },
  { skill: 'Java', percentage: 80, description: 'Proficient in Java', color: '#007396' },
  { skill: 'Spring Boot', percentage: 70, description: 'Experienced in Spring Boot', color: '#6DB33F' },
  { skill: 'SQL', percentage: 65, description: 'Excellent in SQL', color: '#4479A1' },
  { skill: 'Git', percentage: 50, description: 'Excellent in Git', color: '#F05032' },
  { skill: 'Tailwind CSS', percentage: 80, description: 'Proficient in Tailwind CSS', color: '#38B2AC' },
];

const SkillsSection = () => {
  const headingStyles = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { mass: 1, tension: 170, friction: 26 },
  });

  return (
    <div style={{height:"75vh"}} className=" h-screen m-0 relative">
      <animated.h1 style={headingStyles} className='text-center py-2 mt-5 mb-3'>Skills</animated.h1>
      {skills.map((skill, index) => (
        <AnimatedBubble key={index} skill={skill.skill} percentage={skill.percentage} description={skill.description} />
      ))}
    </div>
  );
};

const AnimatedBubble = ({ skill, percentage, description }) => {
  const [hovered, setHovered] = React.useState(false);

  const { x, y } = useSpring({
    from: { x: Math.random() * 80, y: Math.random() * 80 },
    to: async (next) => {
      while (1) {
        await next({ x: Math.random() * 80, y: Math.random() * 80 });
      }
    },
    config: { duration: 5000 },
    reset: true,
    pause: hovered,
  });

  return (
    <animated.div
      style={{
        transform: x.to((x) => `translate3d(${x}vw, ${y.get()}vh, 0)`),
      }}
      className="absolute"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <SkillBubble skill={skill} percentage={percentage} description={description} />
    </animated.div>
  );
};

export default SkillsSection;
