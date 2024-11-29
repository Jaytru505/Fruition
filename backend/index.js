const express = require('express');
    const app = express();
    const port = process.env.PORT || 5000;
    const mongoose = require('mongoose');
    const cors = require('cors');
    const helmet = require('helmet');
    const morgan = require('morgan');

    // Middleware
    app.use(cors());
    app.use(helmet());
    app.use(morgan('common'));
    app.use(express.json());

    // Connect to MongoDB
    mongoose.connect('mongodb://localhost:27017/autonomous-dev-platform', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    // Routes
    app.get('/api', (req, res) => {
      res.send('Hello from the backend!');
    });

    app.listen(port, () => {
      console.log(`Backend running on http://localhost:${port}`);
    });
