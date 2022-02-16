import axios from 'axios';

// const api = axios.create({
//   baseURL: 'https://coronavirus-19-api.herokuapp.com',
//   // baseURL: 'https://api.pm.pa.gov.br/',
// });

const flags = axios.create({
  baseURL: 'https://restcountries.com/v3.1/',
  // baseURL: 'http://apiapoio.pm.pa.gov.br',
});

export default  flags ;
