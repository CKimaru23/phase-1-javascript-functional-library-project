
//function that iterates over the collection of elements, passing each element in turn to the 
//callback function. Returns the original, unmodified, collection.
function myEach(collection, callback) {
    // checks if the collection is an array
    if (Array.isArray(collection)) {
      // iterate over the array
      for (let i = 0; i < collection.length; i++) {
        // calls the callback function, passing the current element and its index
        callback(collection[i], i);
      }
    } else {
      // if the collection is an object, so iterate over its properties
      for (let key in collection) {
        // calls the callback function, passing the current property value and its key
        callback(collection[key], key);
      }
    }
  
    // return the original, unmodified, collection
    return collection;
}

//function that produces a new array of values by mapping each value in collection through a 
//transformation function, callback. 
//Returns the new array without modifying the original.

function myMap(collection, callback) {
    // creates an empty array to store the transformed values
    const result = [];
  
    // checks if the collection is an array
    if (Array.isArray(collection)) {
      // iterates over the array
      for (let i = 0; i < collection.length; i++) {
        // calls the callback function, passing the current element and its index
        // and adds the returned value to the result array
        result.push(callback(collection[i], i));
      }
    } else {
      // if the collection is an object, iterates over its properties
      for (let key in collection) {
        // calls the callback function, passing the current property value and its key
        // and adds the returned value to the result array
        result.push(callback(collection[key], key));
      }
    }
  
    // returns the new array of transformed values
    return result;
}
 
// function that reduce iterates through a collection of values and boils it down into a single value. 
// acc (short for accumulator) starts at the value that's passed in as an argument, and with each 
// successive step is updated to the return value of callback. 
// If a start value is not passed to myReduce, the first value in the collection should be used as the 
// start value.
function myReduce(collection, callback, acc) {
    // checks if the collection is an array
    if (Array.isArray(collection)) {
      // checks if an accumulator value was provided
      if (acc === undefined) {
        // if not, uses the first element in the array as the starting value for the accumulator
        acc = collection[0];
        // starts the iteration at the second element in the array
        for (let i = 1; i < collection.length; i++) {
          // calls the callback function, passing the current accumulator value, the current element, and the collection
          // and updates the accumulator value with the returned value
          acc = callback(acc, collection[i], collection);
        }
      } else {
        // an accumulator value was provided, so start the iteration at the first element in the array
        for (let i = 0; i < collection.length; i++) {
          // calls the callback function, passing the current accumulator value, the current element, and the collection
          // and updates the accumulator value with the returned value
          acc = callback(acc, collection[i], collection);
        }
      }
    } else {
      // if the collection is an object, so checks if an accumulator value was provided
      if (acc === undefined) {
        // if not, gets the keys of the object
        const keys = Object.keys(collection);
        // and use the value of the first property in the object as the starting value for the accumulator
        acc = collection[keys[0]];
        // starts the iteration at the second property in the object
        for (let i = 1; i < keys.length; i++) {
          // calls the callback function, passing the current accumulator value, the current property value, and the collection
          // and updates the accumulator value with the returned value
          acc = callback(acc, collection[keys[i]], collection);
        }
      } else {
        // an accumulator value was provided, so start the iteration at the first property in the object
        for (let key in collection) {
          // calls the callback function, passing the current accumulator value, the current property value, and the collection
          // and updates the accumulator value with the returned value
          acc = callback(acc, collection[key], collection);
        }
      }
    }
  
    // returns the final accumulator value
    return acc;
}

// function that looks through each value in the collection, returning the first one that passes a truth test (predicate) 
// or undefined if no value passes the test. 
// The function should return as soon as it finds an acceptable element, without traversing the rest of 
// the collection.
function myFind(collection, predicate) {
    // checks if the collection is an array
    if (Array.isArray(collection)) {
      // iterates over the array
      for (let i = 0; i < collection.length; i++) {
        // calls the predicate function, passing the current element and its index
        // and checks if it returns true
        if (predicate(collection[i], i)) {
          // if it does, returns the element
          return collection[i];
        }
      }
    } else {
      // if the collection is an object, so iterate over its properties
      for (let key in collection) {
        // calls the predicate function, passing the current property value and its key
        // and checks if it returns true
        if (predicate(collection[key], key)) {
          // if it does, returns the property value
          return collection[key];
        }
      }
    }
  
    // if no element in the collection passes the predicate function, returns undefined
    return undefined;
}

// function that looks through each value in the collection, returning an array of all the values that pass a truth 
// test (predicate). 
// If no matching values are found, it should return an empty array.
function myFilter(collection, predicate) {
    // creates an empty array to store the matching values
    const result = [];
  
    // checks if the collection is an array
    if (Array.isArray(collection)) {
      // iterates over the array
      for (let i = 0; i < collection.length; i++) {
        // calls the predicate function, passing the current element and its index
        // and checks if it returns true
        if (predicate(collection[i], i)) {
          // if it does, adds the element to the result array
          result.push(collection[i]);
        }
      }
    } else {
      // if the collection is an object, so iterate over its properties
      for (let key in collection) {
        // calls the predicate function, passing the current property value and its key
        // and checks if it returns true
        if (predicate(collection[key], key)) {
          // if it does, adds the property value to the result array
          result.push(collection[key]);
        }
      }
    }
  
    // returns the array of matching values
    return result;
}

//function that returns the number of values in the collection.
function mySize(collection) {
    // checks if the collection is an array
    if (Array.isArray(collection)) {
      // returns the length of the array
      return collection.length;
    } else {
      // if the collection is an object, so get the keys of the object
      const keys = Object.keys(collection);
      // and returns the number of keys
      return keys.length;
    }
}

//function that returns the first element of an array. Passing n will return the first n elements of the array.
function myFirst(array, n) {
    // checks if the n argument was provided
    if (n === undefined) {
      // if not, returns the first element of the array
      return array[0];
    } else {
      // if n was provided, returns the first n elements of the array
      return array.slice(0, n);
    }
}

//function that returns the last element of an array. Passing n will return the last n elements of the array.
function myLast(array, n) {
    // checks if the n argument was provided
    if (n === undefined) {
      // if not, returns the last element of the array
      return array[array.length - 1];
    } else {
      // if n was provided, returns the last n elements of the array
      return array.slice(-n);
    }
}

//function that retrieve all the names of the object's enumerable properties.
function myKeys(object) {
    // gets the keys of the object
    return Object.keys(object);
}

//function that return all of the values of the object's properties.
function myValues(object) {
    // creates an empty array to store the property values
    const result = [];
  
    // iterates over the properties of the object
    for (let key in object) {
      // adds the property value to the result array
      result.push(object[key]);
    }
  
    // returns the array of property values
    return result;
}

//function that flattens a nested array (the nesting can be to any depth).
//If you pass true for the second argument, the array will only be flattened a single level.
function myFlatten(array, shallow, newArr) {
    // if the newArr argument was not provided, creates an empty array to store the flattened elements
    if (newArr === undefined) {
      newArr = [];
    }
  
    // iterates over the elements of the array
    for (let i = 0; i < array.length; i++) {
      // gets the current element
      const element = array[i];
  
      // checks if the element is an array
      if (Array.isArray(element)) {
        // if it is, flattens the array recursively
        myFlatten(element, shallow, newArr);
      } else {
        // if it's not an array, adds it to the new array
        newArr.push(element);
      }
    }
  
    // returns the new array
    return newArr;
}

//function that returns a sorted copy of array, ranked in ascending order by the results of running each 
//value through callback. 
//The values from the original array (not the transformed values) should be returned in the sorted copy, 
//in ascending order by the value returned by callback.
function mySortBy(array, callback) {
    // creates a new array with the elements from the original array
    const result = array.slice();
  
    // sorts the new array in ascending order by the values returned by the callback function
    result.sort((a, b) => {
      const valueA = callback(a);
      const valueB = callback(b);
      return valueA - valueB;
    });
  
    // returns the sorted array
    return result;
  }
  