import mongoose from "mongoose";

const book_store ="mongodb://127.0.0.1:27017/book-store"

mongoose.connect(book_store)

const database =mongoose.connection
.once("open",()=>{
console.log(`database is connected ${mongoose.connection.host}`);
})
.on("error",(err)=>{
console.log("error ", err);

})

export default database