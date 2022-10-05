const express = require('express');
require('express-async-errors');

const apiCredentials = require('./middlewares/apiCredentials');
const { existingId, teams } = require('./middlewares/existingId');

const app = express();

app.use(apiCredentials);
app.use(express.json());

// app.get('/', (_req, res) => res.status(200).json({ message: 'Olá Mundo!' }));

// usa o middleware
app.get('/teams/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find((t) => t.id === id);
  res.json(team);
});

app.get('/teams', (_req, res) => {
    res.status(200).json({ teams });
});

app.post('/teams', (req, res) => {
    const newTeam = { ...req.body };
    teams.push(newTeam);

    res.status(201).json({ team: newTeam });
});

app.put('/teams/:id', existingId, (req, res) => {
    const { id } = req.params;
    const { name, initials } = req.body;
    let updatedTeam;
  
    for (let i = 0; i < teams.length; i += 1) {
      const team = teams[i];
  
      if (team.id === Number(id)) {
        team.name = name;
        team.initials = initials;
        updatedTeam = team;
      }
    }
  
    res.status(200).json({ updatedTeam });
  });

app.delete('/teams/:id', existingId, (req, res) => {
  const { id } = req.params;
  const arrayPosition = teams.findIndex((team) => team.id === Number(id));
  teams.splice(arrayPosition, 1);

  res.status(200).end();
});

app.use((err, _req, _res, next) => {
  console.error(err.stack);
  // passa o erro para o próximo middleware
  next(err);
});

app.use((err, _req, res, _next) => {
  res.status(500).json({ message: `Algo deu errado! Mensagem: ${err.message}` });
});

module.exports = app;