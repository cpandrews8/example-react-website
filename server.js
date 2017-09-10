const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./'))

app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, './index.html'));
});

app.listen(3000, function () {
    console.log('Server running on port ' + 3000);
});