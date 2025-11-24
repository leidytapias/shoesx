'use client';

import { deleteProductImage, deleteProductById } from '@/actions';
import React, { useState } from 'react'
import {  IoTrashBin } from 'react-icons/io5'


interface Props {
  id: string;
  images: {
    id: number;
    url: string;
  }[]
}

export const DeleteProduct = ({id, images}: Props) => {


 const handleDeleteProductById  = () => {
  deleteProductById(id);
  const promiseArray = images.map(image => {
    return deleteProductImage(image.id, image.url)
  });

  Promise.allSettled(promiseArray)
  .then((results) => {
    results.forEach((result, index) => {
      if (result.status === "fulfilled") {
        console.log(`La imágen con url ${images[index]} fue eliminada con éxito`, result.value);
      } else {
        console.error(`La imágen con url ${images[index]} NO fue eliminada con éxito`, result.reason);
      }
    });
  })
  .catch((error) => {
    console.error("Ocurrió un error al eliminar las imágenes", error);
  });
};

  return (
    <button onClick={() => handleDeleteProductById()}>
      <IoTrashBin size={20} />
    </button>
  )
}


