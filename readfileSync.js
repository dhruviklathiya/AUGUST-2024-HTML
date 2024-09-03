// Import the fs (file system) module
const fs = require('fs');

// Synchronously read the file
try {
    const data = fs.readFileSync('example.txt', 'utf-8');
    console.log('File contents:', data);
} catch (err) {
    console.error('Error reading file:', err);
}

console.log('This line runs after the file is read.');
