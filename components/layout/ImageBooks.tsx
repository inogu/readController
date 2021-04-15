import React from 'react';
import Image from 'next/image';

export default function ImageBooks(props) {
  return (
    <div>
      <Image
        src="/books.jpg"
        alt="Estante de livros"
        layout="fill"
      />
    </div>
  );
}
