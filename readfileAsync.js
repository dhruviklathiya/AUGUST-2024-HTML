// Import the fs (file system) module
const fs = require("fs");

// Asynchronously read the file
fs.readFile("example.txt", "utf-8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log("File contents:", data);
});

console.log("This line runs immediately, before the file is read.");
