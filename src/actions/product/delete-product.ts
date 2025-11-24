'use server';

import prisma from '@/lib/prisma';
import {v2 as cloudinary} from 'cloudinary';
cloudinary.config( process.env.CLOUDINARY_URL ?? '' );

export const deleteProductById= async( id: string ) => {
  try {
    const prismaTx = await prisma.$transaction( async (tx) => {
      await prisma.product.delete({
          where: { id },
        });    
      return {
        id
      }
    });
    return {
      ok: true,
      product: prismaTx.id,
    }

    
  } catch (error) {
    return {
      ok: false,
      message: 'Revisar los logs, no se pudo eliminar'
    }
  }
}
