# F1 API

This project is a RESTful API built with Node.js and Express.js that serves data about F1 circuits, constructors, drivers, and race results. The data is stored in JSON files and loaded dynamically to power the endpoints.

## Features

- Serve data for circuits, constructors, drivers, races, and results.
- Fetch individual records by their unique identifiers.
- Support nested queries like driver results or constructor results per season.
- Handles errors with appropriate status codes and error messages.

## API Endpoints

| Endpoint                          | Description                                                                                   |
|-----------------------------------|-----------------------------------------------------------------------------------------------|
| `/api/circuits`                   | Returns all circuits.                                                                         |
| `/api/circuits/:circuitId`        | Returns a single circuit by `circuitId`.                                                     |
| `/api/constructors`               | Returns all constructors.                                                                    |
| `/api/constructors/:constructorRef` | Returns a single constructor by `constructorRef`.                                            |
| `/api/constructorResults/:constructorRef/:year` | Returns results for a constructor in a specific year.                                    |
| `/api/drivers`                    | Returns all drivers.                                                                         |
| `/api/drivers/:driverRef`         | Returns a single driver by `driverRef`.                                                      |
| `/api/driverResults/:driverRef/:year` | Returns results for a driver in a specific year.                                         |
| `/api/races/season/:year`         | Returns all races for a specific season.                                                     |
| `/api/races/id/:raceId`           | Returns a single race by `raceId`.                                                           |
| `/api/results/race/:raceId`       | Returns results for a specific race by `raceId`.                                             |
| `/api/results/season/:year`       | Returns results for all races in a specific season.                                          |

## Data Structure

The project uses the following JSON files stored in the `data` directory:

- `circuits.json`
- `constructors.json`
- `drivers.json`
- `qualifying.json`
- `races.json`
- `results.json`

## Technologies Used

- **Backend**: Node.js, Express.js
- **API**: API with custom endpoints
- **Hosting**: Glitch
- **Tools**: Git for version control
- **Other**: JavaScript (ES6+), JSON for data interchange
  
## Examples:
- **Get all circuits**: [https://formula1-api.glitch.me/api/circuits](https://formula1-api.glitch.me/api/circuits)
- **Get a specific circuit by ID**: [https://formula1-api.glitch.me/api/circuits/1](https://formula1-api.glitch.me/api/circuits/1)
- **Get all constructors**: [https://formula1-api.glitch.me/api/constructors](https://formula1-api.glitch.me/api/constructors)
- **Get a specific constructor by reference**: [https://formula1-api.glitch.me/api/constructors/mclaren](https://formula1-api.glitch.me/api/constructors/mclaren)
- **Get a specific constructor by reference (case-insensitive)**: [https://formula1-api.glitch.me/api/coNSTruCTors/mclaren](https://formula1-api.glitch.me/api/coNSTruCTors/mclaren)
- **Get a constructor with invalid reference**: [https://formula1-api.glitch.me/api/constructors/javascript](https://formula1-api.glitch.me/api/constructors/javascript)
- **Get race results for a specific constructor and year**: [https://formula1-api.glitch.me/api/constructorResults/mclaren/2023](https://formula1-api.glitch.me/api/constructorResults/mclaren/2023)
- **Get race results for Mercedes in 2020 (case-insensitive)**: [https://formula1-api.glitch.me/api/constructorResults/MERCEDES/2020](https://formula1-api.glitch.me/api/constructorResults/MERCEDES/2020)
- **Get race results for McLaren in invalid year**: [https://formula1-api.glitch.me/api/constructorResults/mclaren/2040](https://formula1-api.glitch.me/api/constructorResults/mclaren/2040)
- **Get race results for invalid constructor and valid year**: [https://formula1-api.glitch.me/api/constructorResults/comp3612/2023](https://formula1-api.glitch.me/api/constructorResults/comp3612/2023)
- **Get all drivers**: [https://formula1-api.glitch.me/api/drivers](https://formula1-api.glitch.me/api/drivers)
- **Get a driver by reference**: [https://formula1-api.glitch.me/api/drivers/hamilton](https://formula1-api.glitch.me/api/drivers/hamilton)
- **Get a driver by reference (case-insensitive)**: [https://formula1-api.glitch.me/api/drivers/HAMilton](https://formula1-api.glitch.me/api/drivers/HAMilton)
- **Get a driver with invalid reference**: [https://formula1-api.glitch.me/api/drivers/randy](https://formula1-api.glitch.me/api/drivers/randy)
- **Get race results for a specific driver in 2023**: [https://formula1-api.glitch.me/api/driverResults/piastri/2023](https://formula1-api.glitch.me/api/driverResults/piastri/2023)
- **Get race results for a driver in an invalid year**: [https://formula1-api.glitch.me/api/driverResults/piastri/2002](https://formula1-api.glitch.me/api/driverResults/piastri/2002)
- **Get all races for a specific season**: [https://formula1-api.glitch.me/api/races/season/2023](https://formula1-api.glitch.me/api/races/season/2023)
- **Get all races with an invalid reference with a valid year**: [https://formula1-api.glitch.me/api/races/seasoning/2023](https://formula1-api.glitch.me/api/races/seasoning/2023)
- **Get all races for an invalid season**: [https://formula1-api.glitch.me/api/races/season/2032](https://formula1-api.glitch.me/api/races/season/2032)
- **Get results for a specific race**: [https://formula1-api.glitch.me/api/results/race/1100](https://formula1-api.glitch.me/api/results/race/1100)
- **Get results for an invalid race ID**: [https://formula1-api.glitch.me/api/results/race/1756348576](https://formula1-api.glitch.me/api/results/race/1756348576)
- **Get all results for a specific season**: [https://formula1-api.glitch.me/api/results/season/2023](https://formula1-api.glitch.me/api/results/season/2023)
- **Get all results for an invalid season**: [https://formula1-api.glitch.me/api/results/season/2034](https://formula1-api.glitch.me/api/results/season/2034)


