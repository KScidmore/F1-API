# COMP3612 Assignment 3, F1 API
## Technologies Used

- **Backend**: Node.js, Express.js
- **API**: RESTful API with custom endpoints
- **Hosting**: Glitch
- **Tools**: Git for version control
- **Other**: JavaScript (ES6+), JSON for data interchange

## API Endpoints

- **Get all circuits**: [https://formula1-api.glitch.me/api/circuits](https://formula1-api.glitch.me/api/circuits)
- **Get a specific circuit by ID**: [https://formula1-api.glitch.me/api/circuits/1](https://formula1-api.glitch.me/api/circuits/1)
- **Get all constructors**: [https://formula1-api.glitch.me/api/constructors](https://formula1-api.glitch.me/api/constructors)
- **Get a specific constructor by reference**: [https://formula1-api.glitch.me/api/constructors/mclaren](https://formula1-api.glitch.me/api/constructors/mclaren)
- **Get race results for a specific constructor and year**: [https://formula1-api.glitch.me/api/constructorResults/mclaren/2023](https://formula1-api.glitch.me/api/constructorResults/mclaren/2023)
- **Get all drivers**: [https://formula1-api.glitch.me/api/drivers](https://formula1-api.glitch.me/api/drivers)
- **Get a specific driver by reference**: [https://formula1-api.glitch.me/api/drivers/piastre](https://formula1-api.glitch.me/api/drivers/piastri)
- **Get race results for a specific driver and year**: [https://formula1-api.glitch.me/api/driverResults/piastre/2023](https://formula1-api.glitch.me/api/driverResults/piastri/2023)
- **Get all races for a specified season**: [https://formula1-api.glitch.me/api/races/season/2023](https://formula1-api.glitch.me/api/races/season/2023)
- **Get a specific race by ID**: [https://formula1-api.glitch.me/api/races/id/1100](https://formula1-api.glitch.me/api/races/id/1100)
- **Get all results for a specific race**: [https://formula1-api.glitch.me/api/results/race/1100](https://formula1-api.glitch.me/api/results/race/1100)
- **Get all results for all races in a season**: [https://formula1-api.glitch.me/api/results/season/2023](https://formula1-api.glitch.me/api/results/season/2023)
  
## Examples:
- **Get all circuits**: [https://formula1-api.glitch.me/api/circuits](https://formula1-api.glitch.me/api/circuits)
- **Get a specific circuit by ID**: [https://formula1-api.glitch.me/api/circuits/1](https://formula1-api.glitch.me/api/circuits/1)
- **Get all constructors**: [https://formula1-api.glitch.me/api/constructors](https://formula1-api.glitch.me/api/constructors)
- **Get a specific constructor by reference**: [https://formula1-api.glitch.me/api/constructors/mclaren](https://formula1-api.glitch.me/api/constructors/mclaren)
- **Get a specific constructor by reference (case-insensitive)**: [https://formula1-api.glitch.me/api/coNSTruCTors/mclaren](https://formula1-api.glitch.me/api/coNSTruCTors/mclaren)
- **Get a constructor with invalid reference**: [https://formula1-api.glitch.me/api/constructors/javascript](https://formula1-api.glitch.me/api/constructors/javascript)
- **Get race results for a specific constructor and year**: [https://formula1-api.glitch.me/api/constructorResults/mclaren/2023](https://formula1-api.glitch.me/api/constructorResults/mclaren/2023)
- **Get race results for MERCEDES in 2020**: [https://formula1-api.glitch.me/api/constructorResults/MERCEDES/2020](https://formula1-api.glitch.me/api/constructorResults/MERCEDES/2020)
- **Get race results for McLaren in 2040**: [https://formula1-api.glitch.me/api/constructorResults/mclaren/2040](https://formula1-api.glitch.me/api/constructorResults/mclaren/2040)
- **Get race results for COMP3612 in 2023**: [https://formula1-api.glitch.me/api/constructorResults/comp3612/2023](https://formula1-api.glitch.me/api/constructorResults/comp3612/2023)
- **Get all drivers**: [https://formula1-api.glitch.me/api/drivers](https://formula1-api.glitch.me/api/drivers)
- **Get a driver by reference**: [https://formula1-api.glitch.me/api/drivers/hamilton](https://formula1-api.glitch.me/api/drivers/hamilton)
- **Get a driver by reference with case variation**: [https://formula1-api.glitch.me/api/drivers/HAMilton](https://formula1-api.glitch.me/api/drivers/HAMilton)
- **Get a driver by an invalid reference**: [https://formula1-api.glitch.me/api/drivers/randy](https://formula1-api.glitch.me/api/drivers/randy)
- **Get race results for a specific driver in 2023**: [https://formula1-api.glitch.me/api/driverResults/piastri/2023](https://formula1-api.glitch.me/api/driverResults/piastri/2023)
- **Get race results for a driver in an invalid year**: [https://formula1-api.glitch.me/api/driverResults/piastri/2002](https://formula1-api.glitch.me/api/driverResults/piastri/2002)
- **Get all races for a specific season**: [https://formula1-api.glitch.me/api/races/season/2023](https://formula1-api.glitch.me/api/races/season/2023)
- **Get all races for an invalid season**: [https://formula1-api.glitch.me/api/races/seasoning/2023](https://formula1-api.glitch.me/api/races/seasoning/2023)
- **Get all races for a future season**: [https://formula1-api.glitch.me/api/races/season/2032](https://formula1-api.glitch.me/api/races/season/2032)
- **Get results for a specific race**: [https://formula1-api.glitch.me/api/results/race/1100](https://formula1-api.glitch.me/api/results/race/1100)
- **Get results for an invalid race ID**: [https://formula1-api.glitch.me/api/results/race/1756348576](https://formula1-api.glitch.me/api/results/race/1756348576)
- **Get all results for a specific season**: [https://formula1-api.glitch.me/api/results/season/2023](https://formula1-api.glitch.me/api/results/season/2023)
- **Get all results for an invalid season**: [https://formula1-api.glitch.me/api/results/season/2034](https://formula1-api.glitch.me/api/results/season/2034)


