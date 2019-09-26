import React from 'react'
import { getDistance } from 'geolib';

// const geolib = require('geolib');
const Data = require('../../server/public/staff_list.json')

// staffInfo is 1 array of objects
let staffInfo = Object.values(Data)[0]

// staffList is 1 array containing objects
let staffList = staffInfo.map(foundStaff=>{
  return foundStaff.name + foundStaff.location.latitude
 }).sort()

let locationList = staffInfo.filter(inRange=>{
  if (getDistance({latitude: -41.2920728, longitude: 174.7748162}, inRange.location) < 2000) {
    return inRange
  }
}).map(staff => {return staff}).sort();
// ).forEach(function(element) {
//   if (getDistance({latitude: -41.2920728, longitude: 174.7748162}, element) < 2000) {
//     console.log(range.location.name);
//   }
// });
  //  }).forEach(function(element) {
//   console.log(element);
// });

// getDistance({latitude: -41.2920728, longitude: 174.7748162}, range.location)
// console.log(staffList.location)
console.log(locationList)

// getDistance(
//   { latitude: 51.5103, longitude: 7.49347 },
//   { latitude: "51° 31' N", longitude: "7° 28' E" }
// )

// console.log(getDistance(
//   { latitude: 51.5103, longitude: 7.49347 },
//   { latitude: "51° 31' N", longitude: "7° 28' E" }
// ))

function list(arr) {
  arr.forEach(function(element){
    console.log(element);
    return "hi"
  })
}


const App = () => {
  return (
    <div>
    <h1>Staff Lister</h1>

      <p>Here are the peeps:<br></br></p>

      <ul>
        {locationList.map(foundStaff=>{
          console.log(foundStaff)
          return <li key={foundStaff.id}>{foundStaff.name}</li>
        })}
      </ul>

      <ul>
        {staffInfo.map(foundStaff=>{
        return <li key={foundStaff.id}>{foundStaff.name + foundStaff.location.latitude}</li>
        })}
      </ul>

    </div>
  )
}

export default App
