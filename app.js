const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/', (req, res) => {
  const { num1, num2, operator } = req.body;
  let result;

  switch (operator) {
    case '+':
      result = parseFloat(num1) + parseFloat(num2);
      break;
    case '-':
      result = parseFloat(num1) - parseFloat(num2);
      break;
    case '*':
      result = parseFloat(num1) * parseFloat(num2);
      break;
    case '/':
      result = parseFloat(num1) / parseFloat(num2);
      break;
    default:
      result = 'Invalid operator';
  }

  res.render('index', { result: result }); // Pass the result variable to the view
});

app.listen(8080, () => {
  console.log('Calculator app is running on http://localhost:8080');
});
