import express from 'express';
import path from 'path'
const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'build')));

// Define routes and other middleware
// ...

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
