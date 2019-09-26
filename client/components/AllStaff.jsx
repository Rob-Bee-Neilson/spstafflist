import React from 'react'

const data = require('../../server/public/staff_list.json')
const staffInfo = Object.values(data)[0]

let allStaff = staffInfo.map(staff => {return staff.name}).sort();

const AllStaff = () => {
    return (
        <React.Fragment>

            <ul>
                {allStaff.map(show=>{
                    return <li key={show}>{show}</li>
                })}
            </ul>
            
        </React.Fragment>
    )
}
export default AllStaff