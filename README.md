<!-- Given a file (`staff_list.json` in this directory), containing a JSON encoded list of Staff, create an program to read and parse this file to display all staff, ordered by name, who live within 2km of our office, which is located at 175 Victoria Street, Wellington (lat: -41.2920728, long: 174.7748162). -->

requirements:
access data from staff_list.json
(remove titles in names?) - stretch goal
filter data by location
sort data by name
render list of names


I decided to filter the data by location first as I would probably want to mutate the data later (e.g. remove any titles from the names) and I would rather not do this over the whole data set.
I thought filtering by location would be the more difficult part but it was delightfully easy using the npm package (GeoLib).
Once I could generate and display the list I wanted in App.jsx I broke the code out into components.