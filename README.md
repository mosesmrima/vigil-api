# Vigil API

Vigil-API allows you to programmatically access the <a href="https://www.csis.org/programs/strategic-technologies-program/significant-cyber-incidents"> timeline of significant cyber incidents tracked by the Center for 
Strategic and International Studies  <a/>.  The incidents tracked are those on government agencies, defense and high tech companies, or economic crimes with losses of more than a million dollars.

## Technology Stack Used
a. Node, Express
b. MongoDB and Mongoose

## How to Run Vigil-api Locally
1. Clone this repository.
2. Traverse into the directory and run `npm i`.
3. To run the server: `nodemon app.js`

## Routes

<table>
<tr>
<th>Route</th>
<th>Method</th>
<th>Description</th>
</tr>
<tr>
<td>/incidents</td>
<td>GET</td>
<td>Get all incidents from 2003 to the current month</td>
</tr>
<tr>
<td>/incidents/country/:countryName:</td>
<td>GET</td>
<td>Get all incidents for a certain country</td>
<tr>
<td>/incidents/year/:year:</td>
<td>GET</td>
<td>Get all incidents in a certain year for all countries</td>
</tr>
</table>

## More Filter
You can also filter the results further by providing query strings. Supported query strings include:
1. year
2. month
3. country

