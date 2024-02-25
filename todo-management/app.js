const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');
const app = express();
const port = 3000;


//ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


// public folder
app.use(express.static(path.join(__dirname, "/public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(methodOverride('_method'));

let todos = [];

app.get('/', (req, res) => {
  res.render('index', { todos });
});

app.get('/edit/:id', (req, res) => {
  const id = req.params.id;
  const todo = todos.find(todo => todo.id === parseInt(id));
  res.render('edit', { todo });
});

app.get('/todos/:id', (req, res) => {
  const id = req.params.id;
  const todo = todos.find(todo => todo.id === parseInt(id));
  res.render('todo', { todo }); 
});

app.post('/todos', (req, res) => {
  const todo = req.body.todo;
  todos.push({ id: todos.length + 1, text: todo });
  res.redirect('/');
});

app.put('/edit/:id', (req, res) => {
  const id = req.params.id;
  const newText = req.body.todo;
  const todoIndex = todos.findIndex(todo => todo.id === parseInt(id));
  todos[todoIndex].text = newText;
  res.redirect('/');
});

app.delete('/delete/:id', (req, res) => {
  const id = req.params.id;
  todos = todos.filter(todo => todo.id !== parseInt(id));
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Todo app listening at http://localhost:${port}`);
});
