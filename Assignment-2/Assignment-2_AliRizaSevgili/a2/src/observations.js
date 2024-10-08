/**
 * WEB222 – Assignment 02
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name: <Ali Riza Sevgili>
 *      Student ID: <135200228>
 *      Date: <2/22/2024>
 *
 * Please see all unit tests in the files problem-01.test.js, problem-02.test.js, etc.
 */

/*******************************************************************************
 * Problem 0: learn how to work with the cases data.
 *
 * Welcome to Assignment 2! In this assignment, you're going to be practicing
 * different ways of working with JavaScript Objects, both built-in Objects
 * like Array and String, and also working with custom Objects you create.
 *
 * Before you dive into all the problems below, let's spend a minute helping you
 * learn how to work with the sample user data included in this assignment.
 *
 * We've included an extra file in this assignment: `data.js`.  This is data
 * that was obtained from the iNaturalist API.  iNaturalist is available at
 * https://www.inaturalist.org/ and lets people around the world share and track
 * sightings and helps identify plants, animals, insects, and other organisms.
 * It's a phenomenal tool for scientists and curious naturalists alike.
 *
 * The iNaturalist data is typical of a lot of data we use on the web: it's formatted
 * as an Object, with key/value pairs to express the data.  We use strings, numbers,
 * boolean, as well as Arrays and even Objects.  Learning how to traverse and
 * manipulate this data is important.
 *
 * Take a look at src/data.js now to get a sense of what the data looks like. This
 * data includes 10 observations for an area of 1km around the Seneca Newnham campus.
 */

/*******************************************************************************
 * Problem 00: Learning to write our tests
 *
 * Each of the functions below will be passed a `data` argument, which is
 * an Object returned by calling the iNaturalist API.  It looks something like
 * this:
 *
 * {
 *   total_results: 125,
 *   page: 1,
 *   per_page: 10,
 *   results: [
 *       ...observation results here...
 *   ]
 * }
 *
 * The data includes `total_results` (how many results there are). The results
 * are "paged," meaning that you are only seeing a subset of the total.  The
 * `page` indicates which page we are on, and `per_page` how many items there
 * are on each page. It also includes the Array of `results`.
 *
 * To get you started, write a function that accepts a full `data` Object and returns
 * only the `total_results` Number.
 *
 * You can try running this test using the following command:
 *
 * npm test problem-00
 *
 * See if you can get this test to pass by fixing the bug in the code below.
 ******************************************************************************/
function getTotalResults(data) {
  return data.total_results;
}

/*******************************************************************************
 * Problem 01 Part 1: use a for-loop to iterate over Arrays
 *
 * Write a function named `speciesCoordinates(data)` that loops over every
 * observation Object in the results array, and calls `console.log()`, passing
 * it a formatted String that looks like this:
 *
 * `"Muskrat" observed at coordinates (43.79248394,-79.33852796)`
 *
 * The formatted String above is made up of the following observation properties:
 *
 *   - species_guess
 *   - location
 *
 * In your solution, make use of a for-loop to iterate over results in data
 *
 * Your function shouldn't return anything, just call console.log()
 ******************************************************************************/
// function speciesCoordinates(data) {
function speciesCoordinates(data) {
  let result = data.results; // result is an Array of Objects
  for (let i = 0; i < result.length; i++) {
    // result
    console.log(`"${result[i].species_guess}" observed at coordinates (${result[i].location})`); // result[i].species_guess
  }
}

/*******************************************************************************
 * Problem 01 Part 2: use forEach() to iterate over Arrays
 *
 * Rewrite your code from `speciesCoordinates(data)` above to use .forEach()
 * instead of a for-loop.  Everything else should be identical.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 ******************************************************************************/

function speciesCoordinates2(data) {
  // data is an Object
  data.results.forEach((element) => {
    // element is an Object
    console.log(`"${element.species_guess}" observed at coordinates (${element.location})`); // element.species_guess
  });
}

/*******************************************************************************
 * Problem 01 Part 3: use a for-of loop to iterate over Arrays
 *
 * Rewrite your code from `speciesCoordinates(data)` above to use a for-of
 * loop.  Make one additional change: the `location` information should now
 * have a space after the comma:
 *
 * `"Muskrat" observed at coordinates (43.79248394, -79.33852796)`
 *
 * Everything else should be identical.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
 ******************************************************************************/
function speciesCoordinates3(data) {
  // data is an Object
  for (let element of data.results) {
    // element is an Object with coordinates and   coordinates as properties
    let temp = element.location.split(','); // remove the comma after the location
    console.log(
      `"${element.species_guess}" observed at coordinates (${temp[0] + ',' + ' ' + temp[1]})` // element.species_guess
    );
  }
}

/*******************************************************************************
 * Problem 02 Part 1: observationsByQualityGrade(data, qualityGrade)
 *
 * iNaturalist users can assign a quality grade to an observation they make.
 * The quality grade can be "research", "needs_id", "casual", or null
 * (i.e., unspecified).
 *
 * Write a function that takes Observation data, as well as a qualityGrade value.
 * The qualityGrade value describes the quality of the observation data.
 *
 * If the qualityGrade value isn't one of "research", "needs_id", "casual", or null
 * throw an error.  Make sure you deal with UPPER- and lower-case versions of the
 * strings when checking.
 *
 * Return a new Array with only those observation Objects that contain a quality_grade
 * value that matches the qualityGrade argument to your function.  For example:
 *
 * observationsByQualityGrade(data, "research") would return an Array of observation
 * objects that have `quality_grade: "research"`.
 *
 * observationsByQualityGrade(data, null) would return an Array of observation
 * objects that have `quality_grade: null`.
 *
 * observationsByQualityGrade(data, "RESEARCH") would return an Array of observation
 * objects that have `quality_grade: "research"` (i.e., UPPERCASE qualityGrade values
 * should be converted to lowercase).
 *
 * In your solution, make use of the following:
 *
 *  - make sure that qualityGrade is of the right type and value, or throw an Error
 *  - create an empty array
 *  - if an observation includes the given quality_grade value, add the observation
 *    Object to the empty Array. Make sure you deal with both UPPER and lowercase
 *    qualityGrade values: all quality_grade values on the observations are lowercase.
 *
 * Your function should return the newly created Array.
 ******************************************************************************/

function observationsByQualityGrade(data, qualityGrade) {
  // data is an Object  with the following  properties
  if (qualityGrade === undefined) {
    // if qualityGrade is undefined, throw an error and return
    throw new Error(); // if qualityGrade is undefined throw an error and return
  } // if qualityGrade is undefined throw an error and return
  const newObservations = []; // new observation
  const validQualityGrades = ['research', 'casual', 'needs_id', null]; // research  needs_id   null
  const lowercasedQualityGrade = qualityGrade ? qualityGrade.toLowerCase() : null; // if qualityGrade is undefined, throw an error and return

  if (!validQualityGrades.includes(lowercasedQualityGrade)) {
    // if qualityGrade is undefined, throw an error and return
    throw new Error(); // if qualityGrade is undefined throw an error and return
  }
  for (const element of data.results) {
    // for each element in data.results
    if (element.quality_grade === lowercasedQualityGrade) {
      // if qualityGrade is undefined, throw an error and return
      newObservations.push(element); // if qualityGrade is undefined, throw an error and return
    }
  }

  return newObservations; // return newObservations
}

/*******************************************************************************
 * Problem 02 Part 2: observationsByQualityGrades(data, ...qualityGrades)
 *
 * Modify your function from Part 02 Part 1 so that you can pass more than one
 * qualityGrade to the function. For example
 *
 * observationsByQualityGrade(data, "research", "needs_id") would return an Array
 * of observation objects that have `quality_grade: "research"` OR
 * `quality_grade: "needs_id"`.
 *
 * Everything else should work the same way, but you can now use 1 or more
 * qualityGrade values.
 *
 * If the number of qualityGrade values passed to the function is less than 1,
 * throw an error.
 *
 * In your solution, you should call your observationsByQualityGrade() function
 * from above (i.e., don't rewrite the same logic again).
 ******************************************************************************/

function observationsByQualityGrades(data, ...qualityGrades) {
  // data is an Object  with the following  properties and values
  if (qualityGrades.length < 1) {
    // number of qualityGrades passed to the function
    throw new Error(); // error message for missing qualityGrades
  }
  const newObservations = []; // new observation array with the following properties and values
  for (const element of qualityGrades) {
    // for each qualityGrade in qualityGrades array you should call this
    const observations = observationsByQualityGrade(data, element); // call the observationsByQualityGrade() function from above
    newObservations.push(...observations); // add each observation to the newObservations array
  }
  return newObservations; // return newObservations
}

/*******************************************************************************
 * Problem 3 Part I: transformObservation(original)
 *
 * Write a function to transform a result into a new Object format.
 *
 * The `transformObservation(original)` function takes an observation Object that
 * looks like the values in src/data.js, and transforms the data into a new Object
 * that looks like this (see comments on right-hand side with details):
 *
 * {
 *   id: 67868131,                           // copy the id over without modification
 *   name: 'muskrat',                        // species_guess renamed, lower case
 *   isExtinct: true,                        // true if conservation_status' status_name is 'extinct in the wild', false otherwise
 *   images: [{                              // modify photos to be Array of URLs and attribution details
 *     url: 'https://static.inaturalist.org/photos/109762131/square.jpg?1610308133',
 *      copyright: '(c) dridgen, some rights reserved (CC BY-NC)',
 *   }]
 *   observer: 'dridgen@inaturalist.com'     // the user's login_exact name with @inaturalist.com suffix
 * }
 ******************************************************************************/
// Defines a function to transform an observation object into a new format.
function transformObservation(original) {
  // Initializes a new object with transformed structure based on the original observation data.
  let transformed = {
    id: original.id, // Copies the id directly from the original object.
    // Sets the name to the species_guess from the original object, converted to lowercase. If species_guess is missing, defaults to an empty string.
    name: original.species_guess ? original.species_guess.toLowerCase() : '',
    isExtinct: false, // Initializes the isExtinct flag as false.
    images: [], // Initializes an empty array for images.
    // Constructs the observer email using the user's login_exact from the original object and appends "@inaturalist.com".
    observer: `${original.user.login_exact}@inaturalist.com`
  };

  // Checks if the original object has a conservation status indicating the species is extinct in the wild.
  if (
    original.conservation_status &&
    original.conservation_status.status_name === 'extinct in the wild'
  ) {
    transformed.isExtinct = true; // If so, sets the isExtinct flag to true.
  }

  // Checks if the original object has photos and that it's an array.
  if (original.photos && Array.isArray(original.photos)) {
    // Iterates over each photo in the original photos array.
    original.photos.forEach((photo) => {
      // For each photo, pushes a new object into the transformed images array containing the photo's URL and copyright attribution.
      transformed.images.push({
        url: photo.url,
        copyright: photo.attribution
      });
    });
  }

  // Returns the transformed observation object.
  return transformed;
}

/*******************************************************************************
 * Problem 3 Part II: transformObservations(data) with iteration
 *
 * The `transformObservation(data)` function takes a single observation and
 * transforms it into a new format.  The `transformObservations(data)` works in
 * a similar way, but allows for multiple observations (i.e., an Array of
 * observations) to be transformed, creating a new Array.
 *
 * In your solution, make use of the following:
 *
 *  - create a new empty Array to hold all the transformed cases
 *  - use a for-loop or .forEach() method to loop over all Objects in the data results Array
 *  - pass each observation Object to your transformObservation() function to get a new Object
 *  - add the newly transformed Object to your Array
 *  - return the new Array containing all the transformed Objects
 ******************************************************************************/
// Define a function to transform an array of observation objects.
function transformObservations(data) {
  // Initialize an empty array to store the transformed observation objects.
  let transformedObservations = [];

  // Iterate over each observation object in the data.results array.
  data.results.forEach((observation) => {
    // For each observation object, apply the transformObservation function to it
    // and then add the transformed observation object to the transformedObservations array.
    transformedObservations.push(transformObservation(observation));
  });

  // Return the array of transformed observation objects.
  return transformedObservations;
}

/*******************************************************************************
 * Problem 3 Part III: transformObservations2(data) with .map()
 *
 * Rewrite your transformObservations() function from above a second time using
 * the Array .map() method see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 *
 * In your solution, make use of the following:
 *
 *  - use the .map() method of the data results Array to create a new Array
 *  - In the .map() method's function, call your transformObservation() function
 *  - return the Array created by the .map() method
 ******************************************************************************/
// Defines a function to transform an array of observation objects contained within a 'data' object.
function transformObservations2(data) {
  // Uses the .map() method on the array of observations (data.results) to transform each observation.
  // The .map() method iterates over each observation in the array, applies a transformation, and returns a new array.
  return data.results.map((observation) => {
    // Calls the transformObservation function on each observation object.
    // The transformObservation function is expected to take an observation object, process it, and return a new, transformed object.
    return transformObservation(observation);
  });
  // The result of the .map() operation (a new array of transformed observations) is returned by the transformObservations2 function.
}

/*******************************************************************************
 * Problem 04: getObservationsByTaxa()
 *
 * Write a function to get the observation Object(s) for a given taxon name, or
 * list of taxa (names). Your function should support the following taxa values:
 *
 * - Animalia (i.e., animals)
 * - Aves (i.e., birds, subset of Animalia)
 * - Insecta (i.e., insects, subset of Animalia)
 * - Plantae (i.e., plants)
 *
 * Anything else should be considered unknown (NOTE: there are other possible
 * values we could include, but we are limiting the scope of this function).
 *
 * Calling getObservationsByTaxa() with a single `taxon` value should return the
 * observation Objects that have that taxon name. For example:
 *
 * getObservationsByTaxa(data, 'Animalia') would return Objects in the
 * results Array with a taxon iconic_taxon_name property matching 'Animalia'.
 *
 * Similarly, if a single unknown taxon name value is passed, return an empty list:
 *
 * getObservationsByTaxa(data, 'Unknown') would return [] (the empty array).
 *
 * Finally, getObservationsByTaxa(data, 'Animalia', 'Plantae') would return an
 * Array of observation Objects, whose taxon match the taxa names specified. If
 * any of the taxa names in the list are unknown, skip this taxon name and don't
 * add anything to the returned Array.  As a result, the following functions
 * would return the same list:
 *
 * getObservationByTaxon(data, 'Animalia', 'Plantae', 'Unknown')
 * getObservationByTaxon(data, 'Animalia', 'Plantae')
 *
 * In your solution, make use of the following:
 *
 *  - use the .forEach() method to iterate over all taxa names passed to your function
 *  - use the .filter() method to locate items by taxon name, see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 ******************************************************************************/
// Define a function to filter observation objects by taxa names.
function getObservationsByTaxa(data, ...taxaNames) {
  // Initialize a Set of valid taxa names. Only observations matching these taxa will be considered.
  const validTaxaNames = new Set(['Animalia', 'Aves', 'Insecta', 'Plantae']);

  // Initialize an empty array to hold matched observations.
  const matchedObservations = [];

  // Iterate over each taxa name provided as an argument to the function.
  taxaNames.forEach((element) => {
    // Check if the current taxa name is in the Set of valid taxa names.
    if (validTaxaNames.has(element)) {
      // Filter the data.results array for observations that have a matching iconic_taxon_name.
      const observationsForTaxon = data.results.filter((observation) => {
        // Return true if the observation's taxon matches the current element (taxa name), false otherwise.
        return observation.taxon.iconic_taxon_name === element;
      });

      // Add the filtered observations to the matchedObservations array.
      // Spread operator (...) is used to add each observation individually.
      matchedObservations.push(...observationsForTaxon);
    }
  });

  // Return the array of observations that matched the provided taxa names.
  return matchedObservations;
}

/*******************************************************************************
 * Problem 05: getObservationsByLocation()
 *
 * Write a function that filters observations according to their location.
 * iNaturalist allows users to give a latitude and longitude for the location.
 *
 * Your function should accept iNaturalist data, and an options Object, which
 * may contain various location filtering options.  The return value is an Array of
 * observations, whose latitude and longitude values match the options provided.
 * For example:
 *
 * getObservationsByLocation(data, { lat: 43.65, lng: -79.38 }) means only return
 * observations whose latitude is 43.65 and longitude is -79.38 exactly.
 *
 * getObservationsByLocation(data, { lat: { min: 43, max: 44 }, lng: { min: -80, max: -79 } })
 * means only return observations whose latitude is greater than or equal to 43
 * AND less than or equal to 44, and whose longitude is greater than or equal to -80
 * AND less than or equal to -79.
 *
 * If no options object is given, or none of the expect values are present (i.e.
 * lat, lng), then return all values.
 *
 * Use the Array .filter() function in your solution.
 ******************************************************************************/
function getObservationsByLocation(data, options = {}) {
  // Check if options is empty or both lat and lng properties are not defined.
  // If true, return all observation results without filtering.
  if (Object.keys(options).length === 0 || (!options.lat && !options.lng)) {
    return data.results;
  }

  // Filter the observations based on the provided lat and/or lng conditions.
  return data.results.filter((observation) => {
    // If lat option is provided, proceed with latitude-based filtering.
    if (options.lat) {
      // Extract the latitude value from the observation's location string.
      const latitude = parseFloat(observation.location.split(',')[0]);

      // If the lat option is an object, it means we have a range (min and max values).
      if (typeof options.lat === 'object') {
        // Destructure min and max values from the lat option.
        const { min, max } = options.lat;

        // Check if latitude is outside the specified range. If so, exclude this observation.
        if (min !== undefined && max !== undefined) {
          if (latitude < min || latitude > max) {
            return false;
          }
        } else if (min !== undefined) {
          if (latitude < min) {
            return false;
          }
        } else if (max !== undefined) {
          if (latitude > max) {
            return false;
          }
        }
      } else {
        // If lat option is a single value, check if latitude exactly matches. If not, exclude this observation.
        if (latitude !== options.lat) {
          return false;
        }
      }
    }
    // If observation passes all checks, include it in the filtered results.
    return true;
  });
}

/*******************************************************************************
 * Problem 06: getPlaceURLs()
 *
 * Write a function to create an array of URLs for looking up observations for
 * specific places using the iNaturalist results data and place_ids.
 *
 * When users record observations, they include information about the location.
 * Within iNaturalist's database, all places have a numeric id called a `place_id`.
 * For example:
 *
 *  - Canada = 6712
 *  - Ontario = 6883
 *  - Toronto = 134748
 *
 * An observation will usually include many place_ids.  For example, you might
 * record an observation in Toronto, which is also in Ontario, which is also in
 * Canada, etc.
 *
 * The results data includes a property named `place_ids` that lists all of the
 * relevant place_ids for the observation:
 *
 * place_ids: [
 *       6712, 6883, 9853, 27593, 57637, 59613, 59651, 59954, 59956, 61551,
 *       64422, 64423, 66741, 82257, 97394, 129309, 130989, 134744, 134748
 * ]
 *
 * Convert each observation's place_ids into a URL of the following form:
 *
 *      https://www.inaturalist.org/observations?place_id={place_id}
 *
 * For example, all observations for the City of Toronto are available at:
 *
 *      https://www.inaturalist.org/observations?place_id=134748
 *
 * The array you create will look like this:
 *
 * [
 *   'https://www.inaturalist.org/observations?place_id=6712',
 *   'https://www.inaturalist.org/observations?place_id=6883',
 *   'https://www.inaturalist.org/observations?place_id=134748',
 *   ...and so on
 * ]
 *
 * Your function should return an Array of these new URLs:
 ******************************************************************************/
function getPlaceURLs(data) {
  // Initialize an empty array to store the URLs
  const URLs = [];

  // Iterate over each observation in the data.results array
  data.results.forEach((element) => {
    // Check if the observation has place_ids and if it's not empty
    if (element.place_ids && element.place_ids.length > 0) {
      // Iterate over each placeId in the place_ids array
      element.place_ids.forEach((placeId) => {
        // Construct the URL using the placeId
        const url = `https://www.inaturalist.org/observations?place_id=${placeId}`;
        // Add the constructed URL to the URLs array
        URLs.push(url);
      });
    }
  });

  // Return the array containing all constructed URLs
  return URLs;
}

/*******************************************************************************
 * Problem 07: getSpeciesObservations()
 *
 * Write a function to get the number of observations for each species in the
 * data results Array. Each observation has a `taxon` property, for example:
 *
 * {
 *   taxon: {
 *     id: 216168,
 *     name: 'Canis lupus',
 *     rank: 'species',
 *     ancestor_ids: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
 *     iconic_taxon_name: 'Mammalia',
 *     preferred_common_name: 'Gray Wolf'
 *   }
 * }
 *
 * In the above example, the observation has the following properties that we are
 * interested in collecting:
 *
 * name: 'Canis lupus',                  // scientific name of the species
 *
 * Your function should loop through all observation Objects and get the `taxon`
 * property.  Using the `taxon`, get the name, and use it to count the number of
 * observations for each species.  Your function should return an Object with
 * these counts, which looks like this:
 *
 * {
 *   'Canis lupus': 10,                 // the total number of 'Canis lupus' observations
 *   'Ursus arctos': 5,                 // the total number of 'Ursus arctos' observations
 *   'Puma concolor': 8,                // the total number of 'Puma concolor' observations
 *   // ...
 * }
 ******************************************************************************/
function getSpeciesObservations(data) {
  // Initialize an empty object to store the count of observations per species
  const numSpecies = {};

  // Iterate over each observation in the data
  data.results.forEach((element) => {
    // Check if the observation has taxon information and a name
    if (element.taxon && element.taxon.name) {
      // Extract the species name from the taxon information
      const speciesName = element.taxon.name;

      // Check if the species is already in the numSpecies object
      if (numSpecies[speciesName]) {
        // If it exists, increment the count
        numSpecies[speciesName]++;
      } else {
        // If it does not exist, initialize the count to 1
        numSpecies[speciesName] = 1;
      }
    }
  });

  // Return the object containing the count of observations per species
  return numSpecies;
}

/**
 * Problem 08: Part 1 - extractSpeciesNames()
 *
 * Write a function to extract all species names from the iNaturalist observation results.
 * The species names are available in each result's `species_guess` property.
 *
 * Your function should loop through all of the results in `data` and get the
 * species names, placing them in an Array.
 *
 * You should not put any duplicate names in your new Array.
 *
 * When you have processed all results, and collected all unique species names,
 * return the Array of species names.
 */
function extractSpeciesNames(data) {
  // Initialize an empty array to store unique species names
  const uniqueSpecies = [];

  // Loop through each observation in the data.results array
  for (const element of data.results) {
    // Check if the observation has a species_guess and it's not an empty string
    if (element.species_guess && element.species_guess.trim() !== '') {
      // Trim whitespace from the species_guess to ensure accuracy
      const speciesName = element.species_guess.trim();

      // Check if the species name is not already in the uniqueSpecies array
      if (!uniqueSpecies.includes(speciesName)) {
        // If it's not included, add the species name to the array
        uniqueSpecies.push(speciesName);
      }
    }
  }

  // Return the array of unique species names
  return uniqueSpecies;
}

/**
 * Problem 08: Part 2 - extractSpeciesNames2()
 *
 * Rewrite your `extractSpeciesNames` function from above, but do not use an Array
 * to hold the species names.  Instead, use a Set, see:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 *
 * Your function should store all unique species names in a Set, and when you are done
 * processing all results, convert your Set to an Array and return it. See:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
 */

function extractSpeciesNames2(data) {
  const uniquSpecies = new Set();

  for (const element of data.results) {
    if (element.species_guess && element.species_guess.trim() !== '') {
      const speciesName = element.species_guess.trim();
      uniquSpecies.add(speciesName);
    }
  }

  // Convert the Set to an Array using Array.from() and return the array.
  return Array.from(uniquSpecies);
}

// Our unit test files need to access the functions we defined
// above, so we export them here.
exports.getTotalResults = getTotalResults;
exports.speciesCoordinates = speciesCoordinates;
exports.speciesCoordinates2 = speciesCoordinates2;
exports.speciesCoordinates3 = speciesCoordinates3;
exports.observationsByQualityGrade = observationsByQualityGrade;
exports.observationsByQualityGrades = observationsByQualityGrades;
exports.transformObservation = transformObservation;
exports.transformObservations = transformObservations;
exports.transformObservations2 = transformObservations2;
exports.getObservationsByTaxa = getObservationsByTaxa;
exports.getObservationsByLocation = getObservationsByLocation;
exports.getPlaceURLs = getPlaceURLs;
exports.getSpeciesObservations = getSpeciesObservations;
exports.extractSpeciesNames = extractSpeciesNames;
exports.extractSpeciesNames2 = extractSpeciesNames2;
