import React from 'react';
import { getDistance } from 'geolib';

const data = require('../../server/public/staff_list.json')
const staffInfo = Object.values(data)[0]

let locationList = staffInfo.filter(inRange=>{
        if (getDistance({latitude: -41.2920728, longitude: 174.7748162}, inRange.location) < 2000) {
                return inRange
            }
    }).map(staff => {return staff.name}).sort();


const RangerStaff = () => {
    return (
        <React.Fragment>

            <ul>
                {locationList.map(foundStaff=>{
                    return <li key={foundStaff}>{foundStaff}</li>
                })}
            </ul>
            
        </React.Fragment>
    )
}
export default RangerStaff