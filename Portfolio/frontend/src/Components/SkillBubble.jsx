// SkillBubble.js
import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const SkillBubble = ({ skill, percentage, description, color }) => {
  const [hovered, setHovered] = React.useState(false);

  const styles = useSpring({
    transform: hovered ? 'scale(1.2)' : 'scale(0.8)',
    boxShadow: hovered ? '0px 15px 30px rgba(0, 0, 0, 0.2)' : '0px 10px 20px rgba(0, 0, 0, 0.1)',
    config: { mass: 1, tension: 170, friction: 26 },
  });

  return (
    <animated.div
      style={styles}
      className="relative flex items-center justify-center w-48 h-48 rounded-full shadow-white/20 bg-gray-300/5 text-white shadow-xl"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="w-full h-full flex items-center justify-center rounded-full shadow-xl shadow-white/20 ring ring-white/20">
        <div
          className="absolute inset-0 rounded-full shadow-xl"
          style={{
            clipPath: `inset(${100 - percentage}% 0 0 0)`,
            background: color || 'linear-gradient(135deg, rgba(255,255,255,0.3), rgba(0,0,0,0.1))',
          }}
        ></div>
        {hovered ? (
          <div className="absolute inset-0 flex items-center justify-center text-center text-sm p-2 bg-black bg-opacity-40 rounded-full">
            {description}
          </div>
        ) : (
          <div className="relative z-10">{skill}</div>
        )}
      </div>
    </animated.div>
  );
};

export default SkillBubble;
