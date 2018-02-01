export const getApiData = async (request) => {
  const url = `https://swapi.co/api/${request}/`;
  // const initialFetch = await fetch(url);
  // const response = await initialFetch.json();
  const response = await fetchAndParseApiData(url);
  let data;

  switch (request) {
    case 'people':
      data = await cleanPeopleData(response);
      break;
    case 'vehicles':
      data = await cleanVehiclesData(response);
      break;
    case 'planets':
      data = await cleanPlanetsData(response);
      break;
    case 'films':
      data = await cleanFilmData(response);
      break;
    default:
      console.log('error!')      
  }

  return data;
} 

const fetchAndParseApiData = async (url) => {
  const initialFetch = await fetch(url);
  const response = await initialFetch.json();

  return response;
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

const getSpeciesData = (urls) => {
  const unresolvedPromises = urls.map(async (url) => {
    const species = await fetchAndParseApiData(url);

    return species.name;
  })

  return Promise.all(unresolvedPromises);
}

export const cleanPeopleData = (peopleData) => {
  const people = peopleData.results.map( async (person) => {
    const homeworld = await getHomeworldData(person.homeworld)
    const speciesTypes = await getSpeciesData(person.species)

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
  return vehicleData.results.map(vehicle => {
    return {
      name: vehicle.name,
      model: vehicle.model,
      passengers: vehicle.passengers,
      vehicleClass: vehicle.vehicle_class,
    }
  })
}

export const getPlanetResidents = (urls) => {
  const unresolvedPromises = urls.map( async (url) => {
    const resident = await fetchAndParseApiData(url);

    return resident.name;
  })

  return Promise.all(unresolvedPromises);
}

export const cleanPlanetsData = (planetData) => {
  const planets = planetData.results.map( async (planet) => {
    const residents = await getPlanetResidents(planet.residents);

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

