import React from 'react';

import Category from './Category';
import CategoryFilter from './CategoryFilter';

function Blog() {
  return (
    <div className="flex flex-col items-center   ">
      {/* BlogHome - Full Width */}


      {/* Container for Category and CategoryFilter */}
      <div className="flex w-full mt-4">
        
        {/* Sidebar - 30% width */}
        <div className="w-2/3  m-8">
          <Category />
        </div>

        {/* Main Content - 70% width */}
        <div className="w-1/4 m-8">
          <CategoryFilter />
        </div>
      </div>
    </div>
  );
}

export default Blog;