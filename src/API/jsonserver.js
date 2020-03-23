import axios from 'axios';

// This will change EVERY 8 HOURS , or when you restart the ngrok tunnel
export default axios.create({
  baseURL: 'http://81db3979.ngrok.io'
})