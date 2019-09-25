import React from 'react'

const Data = require('../../server/public/staff_list.json')

let staffInfo = Object.values(Data)[0]
let staffList = staffInfo.map(foundStaff=>{
  return foundStaff.name
 })

console.log(staffList)


const App = () => {
  return (
    <h1>Staff Lister</h1>
  )
}

export default App
