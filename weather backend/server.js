const express = require('express');
const cors = require('cors');
const weatherRoutes = require('./Routes/weatherRoute');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{res.json({message:'backend running'})});
app.use('/api/weather', weatherRoutes);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

