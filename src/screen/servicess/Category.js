import React from 'react';

const Category = ({ title, children }) => {
  return (
    <div className="mt-6 ml-2 mr-2">
      <p className="text-xs text-gray-900 text-start ml-6 font-bold mb-4">{title}</p>
      <div className="flex  gap-4 ml-8 mt-4">{children}</div>
    </div>
  );
};

export default Category;
