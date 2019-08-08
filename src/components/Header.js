import React from 'react';


export default function Header({children,page}) {
  return (
      <header className={page}>
          {children}

      </header>

  )}
