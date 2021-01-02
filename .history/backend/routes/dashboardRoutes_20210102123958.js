import express from "express";
import expressAsyncHandler from "express-async-handler";
import Product from "../models/productModel";
import { isAdmin, isAuth } from "../utils";