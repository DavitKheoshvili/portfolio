import React from 'react';
import '../App.css';

interface Props {
  text: string;
}

export const Home: React.FC<Props> = (Props) => {
  return (
      <div className='content'>
        <h1 className='bg-title'>HELLO</h1>
        <div className='info-container'>
          <h3 className='title'>I'm</h3>
          <h3 className='title'>Davit Kheoshvili</h3>
          <div className='line'></div>
          <p className='role'>Full-stack web developer</p>
        </div>
      </div>    
  );
}