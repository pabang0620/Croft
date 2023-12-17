import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SingleDashBoard = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="w-20 h-20 bg-white" onClick={() => navigate('/')}>
        temp button
      </div>
      <div className="p-4">
  
      </div>
    </div>
  );
};

export default SingleDashBoard;
