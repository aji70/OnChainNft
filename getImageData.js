const fs = require("fs");

// Replace 'path_to_your_image_file' with the actual path to your image file
const imagePath = "./picture.jpg";

// Read the image file
fs.readFile(imagePath, (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
  } else {
    // Convert the image data to a base64-encoded string
    const base64ImageData = data.toString("base64");
    console.log(base64ImageData);
  }
});
