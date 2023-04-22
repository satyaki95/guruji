import React, { useState, useEffect } from 'react';
import './SunAndCircularPart.css';

const SunAndCircularPart = () => {
  const [rotationDegree, setRotationDegree] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotationDegree((degree) => degree + 1);
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sun-and-circular-part">
      <div className="sun" />
      <div className="circular-part" style={{ transform: `rotate(${rotationDegree}deg)` }} />
    </div>
  );
};

export default SunAndCircularPart;
