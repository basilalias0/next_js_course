import React from 'react';
import { Metadata } from 'next';


export const metadata:Metadata ={
    title:{
        default:"Default",
        template:"%s | Basil"
    }
}

const layout = ({children}:{
    children:React.ReactNode
}) => {
  return (
    <div>
        <h1>Inner Layout</h1>
      {children}
    </div>
  );
}

export default layout;
