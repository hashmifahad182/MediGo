import dotenv from "dotenv";
dotenv.config();

import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

console.log(await cloudinary.api.ping());

try {
    const result = await cloudinary.uploader.upload(
        "C:/Users/jirai/Downloads/virat_kohli.jpg"
    );
    console.log(result);
} catch (err) {
    console.log("Status:", err.http_code);
    console.log("Message:", err.message);
    console.log("Error object:");
    console.dir(err, { depth: null });

    if (err.response) {
        console.log("Response body:");
        console.dir(err.response, { depth: null });
    }
}