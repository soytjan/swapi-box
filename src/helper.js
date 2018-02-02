export const getApiData = async (request) => {
  const url = `https://swapi.co/api/${request}/`;
  const response = await fetchAndParseApiData(url);

  switch (request) {
    case 'people':
      return await cleanPeopleData(response);
      break;
    case 'vehicles':
      return await cleanVehiclesData(response);
      break;
    case 'planets':
      return await cleanPlanetsData(response);
      break;
    case 'films':
      return await cleanFilmData(response);
      break;
    default:
      console.log('error!')      
  }

} 

// Do we make the getApiData above into smaller divided up functions like the ones below? 

// const getPeopleData = async () => {
//   const url = 'https://swapi.co/api/people/';
//   const response = await fetchAndParseApiData(url);
  
//   return await cleanPeopleData(response);
// }

// const getVehiclesData = async () => {
//   const url = 'https://swapi.co/api/vehicles/';
//   const response = await fetchAndParseApiData(url);
  
//   return await cleanVehiclesData(response);
// }

// const getPlanetsData = async () => {
//   const url = 'https://swapi.co/api/planets/';
//   const response = await fetchAndParseApiData(url);
  
//   return await cleanPlanetsData(response);
// }

// const getFilmsData = async () => {
//   const url = 'https://swapi.co/api/films/';
//   const response = await fetchAndParseApiData(url);

//   return await cleanFilmData(response);
// }

export const fetchAndParseApiData = async (url) => {
  const response = await fetch(url);

  if(response.status >= 400) {
    throw(new Error('Error loading Star Wars facts!'));
  } else {
    return await response.json();
  }
} 

export const cleanFilmData = (filmData) => {
  return filmData.results.map(film => {
    return {
      title: film.title,
      crawl: film.opening_crawl,
      releaseDate: film.release_date
    }
  })
}

const getHomeworldData = async (url) => {
  const homeworldObj = await fetchAndParseApiData(url);

  return {
    homeworld: homeworldObj.name,
    population: homeworldObj.population
  }
}

const getNameData = (urls) => {
  const unresolvedPromises = urls.map( async (url) => {
    const creature = await fetchAndParseApiData(url);

    return creature.name;
  })

  return Promise.all(unresolvedPromises);
}

// refactor get Species Data and residents
// const getSpeciesData = (urls) => {
//   const unresolvedPromises = urls.map(async (url) => {
//     const species = await fetchAndParseApiData(url);

//     return species.name;
//   })

//   return Promise.all(unresolvedPromises);
// }

// export const getPlanetResidents = (urls) => {
//   const unresolvedPromises = urls.map( async (url) => {
//     const resident = await fetchAndParseApiData(url);

//     return resident.name;
//   })

//   return Promise.all(unresolvedPromises);
// }

export const cleanPeopleData = (peopleData) => {
  const people = peopleData.results.map( async (person) => {
    const homeworld = await getHomeworldData(person.homeworld);
    const speciesTypes = await getNameData(person.species);

    const peopleObj = {
      name: person.name,
      ...homeworld,
      species: speciesTypes,
    }

    return peopleObj;
  })

  return Promise.all(people);
}

export const cleanVehiclesData = (vehicleData) => {
  console.log('clean vehicles method is running')
  return vehicleData.results.map(vehicle => {
    return {
      name: vehicle.name,
      model: vehicle.model,
      passengers: vehicle.passengers,
      vehicleClass: vehicle.vehicle_class,
    }
  })
}



export const cleanPlanetsData = (planetData) => {
  const planets = planetData.results.map( async (planet) => {
    const residents = await getNameData(planet.residents);

    return {
      name: planet.name,
      terrain: planet.terrain,
      population: planet.population,
      climate: planet.climate,
      residents: residents
    }
  })

  return Promise.all(planets);
}

// export { cleanPlanetsData, } -- doublecheck
// google export (where names have to match)/ export default 

