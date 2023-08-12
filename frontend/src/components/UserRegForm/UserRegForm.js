import React, { useState } from 'react';
import PageOne from './PageOne';
import PageTwo from './PageTwo';

const RegistrationFormContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    setCurrentPage(currentPage - 1);
  };

  return currentPage === 1 ? (
    <div  className="bg-amber-600 min-h-screen flex flex-col"><PageOne handleNext={handleNext} /></div>
  ) : (
    <div className="bg-amber-600 min-h-screen flex flex-col"><PageTwo handlePrevious={handlePrevious} /></div>
  );
};

export default RegistrationFormContainer;
