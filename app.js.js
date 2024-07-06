const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// تقديم الملفات الثابتة من مجلد public
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index'));
});

app.listen(port, () => {
  console.log(`التطبيق يعمل على http://localhost:${port}`);
});