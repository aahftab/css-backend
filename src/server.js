import 'dotenv/config';
import app from './app.js';
const PORT = process.env.PORT;

app.listen(PORT, async () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});