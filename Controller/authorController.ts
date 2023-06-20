import express, { Request, Response, json } from "express";
import model from "../Model/authorModel";

const getAllBook = async (req: Request, res: Response) => {
  try {
    const allBook = await model.find();
    if (allBook.length > 0) {
      return res.status(200).json({
        message: "successfully gotten all books",
        data: allBook,
      });
    } else {
      return res.status(200).json({
        message: "No book found",
      });
    }
  } catch (error) {
    return res.status(404).json({
      message: "an error occured getAllBook",
      error: error.message,
    });
  }
};

const getOneBook = async (req: Request, res: Response): Promise<Response> => {
  try {
    const userId = req.params.bookId;
    const oneBook = await model.findById(userId);

    return res.status(200).json({
      message: "successfully gotten one books",
      data: oneBook,
    });
  } catch (error) {
    return res.status(404).json({
      message: "an error occured getOneBook",
      error: error.message,
    });
  }
};

const updateBook = async (req: Request, res: Response): Promise<Response> => {
  try {
    const userId = req.params.bookId;
    const {
      author,
      title,
      image,
      description,
      views,
      email,
      cover,
    } = req.body;
    const updatingBook = await model.findByIdAndUpdate(userId, {
      author,
      title,
      image,
      description,
      views,
      email,
      cover,
    });

    return res.status(200).json({
      message: "successfully gotten all books",
      data: updatingBook,
    });
  } catch (error) {
    return res.status(404).json({
      message: "an error occured getAllBook",
      error: error.message,
    });
  }
};

const deleteBook = async (req: Request, res: Response): Promise<Response> => {
  try {
    const userId = req.params.bookId;
    const {
      author,
      title,
      image,
      description,
      views,
      email,
      cover,
    } = req.body;
    const deleteBook = await model.findByIdAndDelete(userId, {
      author,
      title,
      image,
      description,
      views,
      email,
      cover,
    });

    return res.status(200).json({
      message: "successfully gotten all books",
      data: deleteBook,
    });
  } catch (error) {
    return res.status(404).json({
      message: "an error occured getAllBook",
      error: error.message,
    });
  }
};

const searchBook = async (req: Request, res: Response): Promise<Response> => {
  try {
    const search = req.query;
    const {title,author} =req.body
    const makeSearch = await model.find(search,
      {title ,author}
      );

    return res.status(201).json({
      message: "Book search complete",
      data: makeSearch,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Not Found",
      data: error.message,
    });
  }
};

const createBook = async (req: Request, res: Response): Promise<Response> => {
  try {
    const {
      title,
      description,
      image,
      views,
      email,
      cover,
    } = req.body;
    
    const create = await model.create({
      title,
      description,
      image,
      views,
      email,
      cover,
    });

    return res.status(201).json({
      message: "created books successfully",
      data: create,
    });
  } catch (error) {
    return res.status(404).json({
      message: "an error occured createBook",
      error: error.message,
    });
  }
};

export {
  getAllBook,
  getOneBook,
  updateBook,
  deleteBook,
  searchBook,
  createBook,
};
