import { Metadata } from 'next';
import React from 'react';


export const metadata:Metadata = {
  title:{
    template:"%s | Basil",
    default:"Review Mains"
  }
}

const page = () => {
  return (
    <div>
      <h1>Reviews</h1>
    </div>
  );
}

export default page;
