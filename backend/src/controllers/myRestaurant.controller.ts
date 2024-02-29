import { Request, Response } from "express";
import Restaurant from "../models/restaurant.model";
import cloudinary from "cloudinary";
import mongoose from "mongoose";

const createMyRestaurant = async (req: Request, res: Response) => {
  try {
    const restaurant = await Restaurant.findOne({ user: req.userId });
    if (restaurant) {
      return res.status(409).json({ message: "User Restaurant already exist" });
    }
    const image = req.file as Express.Multer.File;
    const base64Image = Buffer.from(image.buffer).toString("base64");
    const dataURI = `data:${image.mimetype};base64,${base64Image}`;

    const uploadResponse = await cloudinary.v2.uploader.upload(dataURI);

    const newRestaurant = new Restaurant(req.body);
    newRestaurant.imageUrl = uploadResponse.url;
    newRestaurant.lastUpdated = new Date();
    newRestaurant.user = new mongoose.Types.ObjectId(req.userId);
    await newRestaurant.save();

    return res.status(201).json(newRestaurant);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export default { createMyRestaurant };
