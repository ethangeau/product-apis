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
          quantity: Number(quantity),
          stock: Number(stock),
          category: category as string,
          status: status === 'true' ? true : false,
      },
  });

  res.json(products);
};

export const getProduct = async (req: Request, res: Response) => {

  const { name, id } = req.query;
  const condition = name ? { name: name as string } : { id: Number(id) };

  const product = await prisma.product.findFirst({
    where: condition,
  });

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json(product);
};

export const deleteProduct = async (req: Request, res: Response) => {

  const { id } = req.params;

  const product = await prisma.product.delete({
      where: { id: Number(id) },
  });

  res.json(product);
};
