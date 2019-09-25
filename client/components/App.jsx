import React from 'react'
import { getDistance } from 'geolib';

const geolib = require('geolib');
const Data = require('../../server/public/staff_list.json')

// staffInfo is 1 object whoes value is an array of objects
let staffInfo = Object.values(Data)[0]
// staffList is 1 array containing objects
let staffList = staffInfo.map(foundStaff=>{
  return foundStaff.name + foundStaff.location.latitude
 }).sort()
let locationList = staffInfo.map(range=>{
  return range.location
 }).forEach(function(element) {
  console.log(element);
});

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
        {staffInfo.map(foundStaff=>{
        return <li key={foundStaff.id}>{foundStaff.name + foundStaff.location.latitude}</li>
        })}
      </ul>

    </div>
  )
}

export default App
