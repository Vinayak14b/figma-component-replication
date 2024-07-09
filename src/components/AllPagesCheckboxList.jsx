import React from 'react';
import './AllPagesCheckboxList.css';

const AllPagesCheckboxList = () => {
  return (
    <div className="checkbox-list-containerA">
      <div className="checkbox-listA">
        
        <label className='checkbox-item'>
          All pages
          <input type="checkbox" />

        </label>
        <hr />
        <label className="checkbox-item">
          Page 1
          <input type="checkbox" />
        </label>
        <label className="checkbox-item">
          Page 2
          <input type="checkbox" />
        </label>
        <label className="checkbox-item">
          Page 3
          <input type="checkbox" />
        </label>
        <label className="checkbox-item">
          Page 4
          <input type="checkbox" />
        </label>
        <button className="done-button">Done</button>
      </div>
    </div>
  );
};

export default AllPagesCheckboxList;
