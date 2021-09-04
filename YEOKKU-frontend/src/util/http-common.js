import axios from 'axios';
const SERVER_URL = process.env.VUE_APP_SERVER_URL;
// process.env.VUE_APP_SERVER_URL;
//'http://localhost:8080/';

// axios 객체 생성
export default axios.create({
	baseURL: SERVER_URL + '/yeokku',
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
		'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
		'Content-Type': 'application/json; charset = utf-8',
	},
});
