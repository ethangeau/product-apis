import { PrismaClient } from "@prisma/client";
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export const createProduct = async (req: Request, res: Response) => {

  const { name, description, stock, quantity, category, status } = req.body;
  
  const product = await prisma.product.create({
      data: {
          name,
          description,
          stock,
          quantity,
          category,
          status,
      },
  });
  
  res.json(product);
};

export const updateProduct = async (req: Request, res: Response) => {

  const { id } = req.params;
  const { name, description, stock, quantity, category, status } = req.body;

  const product = await prisma.product.update({
      where: { id: Number(id) },
      data: {
          name,
          description,
          stock,
          quantity,
          category,
          status,
      },
  });

  res.json(product);
};

export const getProducts = async (req: Request, res: Response) => {

  const { name, quantity, stock, category, status} = req.query;

  const products = await prisma.product.findMany({
      where: {
          name: name as string,
          quantity: quantity ? Number(quantity) : undefined,
          stock: stock ? Number(stock) : undefined,
          category: category as string,
          status: status === 'true' ? true : status === 'false' ? false : undefined,
      },
  });

  res.json(products);
};

export const getProduct = async (req: Request, res: Response) => {

  const { id } = req.params;
  
  const product = await prisma.product.findUnique({
      where: { id: Number(id) },
  });

  res.json(product);
};

export const deleteProduct = async (req: Request, res: Response) => {

  const { id } = req.params;

  const product = await prisma.product.delete({
      where: { id: Number(id) },
  });

  res.json(product);
};
