import React from 'react';
import { isPropertySignature } from 'typescript';

interface Props {
    text: string;
}

export const Home: React.FC<Props> = (Props) => {
  return (
    <div>
      {Props.text} Home Page
    </div>
  );
}