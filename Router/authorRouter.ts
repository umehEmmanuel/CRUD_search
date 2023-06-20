import { Router } from "express"
import express from 'express'
import { createBook,
     deleteBook, 
     getAllBook, 
     getOneBook,
      searchBook,
       updateBook } from "../Controller/authorController"

const router =express.Router()

router.route("/getallbook").get(getAllBook)
router.route("/getonebook").get(getOneBook)
router.route("/updatebook/:userid").patch(updateBook)
router.route("/deletebook/:userid").delete(deleteBook)
router.route("/searchbook").post(searchBook)
router.route("/createbook").post(createBook)

export default router