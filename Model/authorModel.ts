import mongoose, { Document } from "mongoose";

interface Ibook {
  title: string;
  author: string;
  description: string;
  image: string;
  email: string;
  views: string[];
  isbn: string;
  cover: string;
}

//interface bookStore extends Ibook, mongoose.Document{}
interface bookStore extends Ibook, Document {}

const bookSchema = new mongoose.Schema({
  title:{
    type:String
  },
  author:{
     type :String
    },
  description: {
    type :String
  },
  image:{
    type : String
  },
  email: {
     type :String,
     required:true,
     unique :true,
     lowercase: true,
trim:true
    },
  view:{
    type: []
  },
  isbn: {
    type :String
  },
  cover:{
    type : String
  }
});

const model = mongoose.model<bookStore>("BookStoreCollection", bookSchema);

export default model;
