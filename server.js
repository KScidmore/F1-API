const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const fs = require('fs');

// Paths to the JSON files
const circuitsPath = path.join(__dirname, 'data', 'circuits.json');
const constructorsPath = path.join(__dirname, 'data', 'constructors.json');
const driversPath = path.join(__dirname, 'data', 'drivers.json');
const racesPath = path.join(__dirname, 'data', 'races.json');
const resultsPath = path.join(__dirname, 'data', 'results.json');

// To parse JSON
app.use(express.json());

// Helper function to read data from JSON files
const readJSONFile = (filePath) => {
    try {
      const fullPath = path.resolve(__dirname, filePath);
      const data = fs.readFileSync(fullPath, 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      console.error(`Error reading file ${filePath}:`, error);
      return [];
    }
  };

// Load all data
const circuits = readJSONFile(circuitsPath);
const constructors = readJSONFile(constructorsPath);
const drivers = readJSONFile(driversPath);
const races = readJSONFile(racesPath);
const results = readJSONFile(resultsPath);

// API Endpoints

// /api/circuits
app.get('/api/circuits', (req, res) => {
  res.json({ circuits });
});

// /api/circuits/:circuitId
app.get('/api/circuits/:circuitId', (req, res) => {
  const circuitId = parseInt(req.params.circuitId);
  const circuit = circuits.find(c => c.circuitId === circuitId);
  if (circuit) {
    res.json(circuit);
  } else {
    res.status(404).json({ error: 'Circuit not found' });
  }
});

// /api/constructors
app.get('/api/constructors', (req, res) => {
  res.json({ constructors });
});

// /api/constructors/:constructorRef
app.get('/api/constructors/:constructorRef', (req, res) => {
  const constructorRef = req.params.constructorRef.toLowerCase();
  const constructor = constructors.find(c => c.constructorRef === constructorRef);
  if (constructor) {
    res.json(constructor);
  } else {
    res.status(404).json({ error: 'Constructor not found' });
  }
});

// /api/races/season/:year
app.get('/api/races/season/:year', (req, res) => {
  const year = parseInt(req.params.year);
  const seasonRaces = races.filter(r => r.year === year);
  if (seasonRaces.length > 0) {
    res.json({ season: year, races: seasonRaces });
  } else {
    res.status(404).json({ error: 'No races found for the specified season' });
  }
});

// /api/races/id/:raceId
app.get('/api/races/id/:raceId', (req, res) => {
  const raceId = parseInt(req.params.raceId);
  const race = races.find(r => r.id === raceId);
  if (race) {
    res.json(race);
  } else {
    res.status(404).json({ error: 'Race not found' });
  }
});

// /api/results/race/:raceId
app.get('/api/results/race/:raceId', (req, res) => {
  const raceId = parseInt(req.params.raceId);
  const raceResults = results.filter(r => r.race.id === raceId);
  if (raceResults.length > 0) {
    res.json({ raceId, results: raceResults });
  } else {
    res.status(404).json({ error: 'No results found for the specified race' });
  }
});

// /api/results/season/:year
app.get('/api/results/season/:year', (req, res) => {
  const year = parseInt(req.params.year);
  const seasonResults = results.filter(r => r.race.year === year);
  if (seasonResults.length > 0) {
    res.json({ year, results: seasonResults });
  } else {
    res.status(404).json({ error: 'No results found for the specified season' });
  }
});

// /api/drivers
app.get('/api/drivers', (req, res) => {
  res.json({ drivers });
});

// /api/drivers/:driverRef
app.get('/api/drivers/:driverRef', (req, res) => {
  const driverRef = req.params.driverRef.toLowerCase();
  const driver = drivers.find(d => d.driverRef === driverRef);
  if (driver) {
    res.json(driver);
  } else {
    res.status(404).json({ error: 'Driver not found' });
  }
});

// /api/driverResults/:driverRef/:year
app.get('/api/driverResults/:driver/:year', (req, res) => {
  const { driver, year } = req.params;
  const driverResults = results.filter(
    r => r.driver.ref === driver.toLowerCase() && r.race.year === parseInt(year)
  );
  if (driverResults.length > 0) {
    res.json({ driver, year: parseInt(year), results: driverResults });
  } else {
    res.status(404).json({ error: 'No results found for the specified driver and year' });
  }
});

// /api/constructorResults/:constructorRef/:year
app.get('/api/constructorResults/:constructor/:year', (req, res) => {
  const { constructor, year } = req.params;
  const constructorResults = results.filter(
    r => r.constructor.ref === constructor.toLowerCase() && r.race.year === parseInt(year)
  );
  if (constructorResults.length > 0) {
    res.json({ constructor, year: parseInt(year), results: constructorResults });
  } else {
    res.status(404).json({ error: 'No results found for the specified constructor and year' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
