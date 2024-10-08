import React from 'react';

const ProgressBar = () => {
  return (
    <div className="bg-progress-base h-1 w-[100vw] -translate-x-48 overflow-hidden">
      <div className="progress-anim from-progress-100 via-progress-200 to-progress-100 h-full w-full origin-top-right bg-gradient-to-r"></div>
    </div>
  );
};

export default ProgressBar;
