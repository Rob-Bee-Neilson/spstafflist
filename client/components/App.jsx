import React from 'react';
import { getDistance } from 'geolib';
import AllStaff from './AllStaff'

const Data = require('../../server/public/staff_list.json')
const staffInfo = Object.values(Data)[0]

let locationList = staffInfo.filter(inRange=>{
  if (getDistance({latitude: -41.2920728, longitude: 174.7748162}, inRange.location) < 2000) {
    return inRange
  }
}).map(staff => {return staff}).sort();

console.log(locationList)


const App = () => {
  return (
    <div>
    <h1>Staff Lister</h1>

      <p>Here are the peeps:<br></br></p>

      <ul>
        {locationList.map(foundStaff=>{
          return <li key={foundStaff.id}>{foundStaff.name}</li>
        })}
      </ul>

      <AllStaff />

    </div>
  )
}

export default App
