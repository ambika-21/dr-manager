import app from "./app.js";
import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name:"dli8kzrac",
  api_key: "117663776162561",
  api_secret:"DzYvpsI1fVuNZ3x8fXQCDLQbmGY",
});

// Debug environment variables
console.log("Debug - CLOUDINARY_CLOUD_NAME:", process.env.CLOUDINARY_CLOUD_NAME);
console.log("Debug - CLOUDINARY_API_KEY:", process.env.CLOUDINARY_API_KEY);
console.log("Debug - CLOUDINARY_API_SECRET:", process.env.CLOUDINARY_API_SECRET ? "SET" : "NOT SET");

app.listen(process.env.PORT, () => {
  console.log(`Server listening at port ${process.env.PORT}`);
});
