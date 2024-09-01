let baseURL;

if (window.location.hostname === 'localhost') {
  baseURL = 'http://localhost:3005';
} else {
  baseURL = 'http://localhost:3005';
}


const endPoints = { 
    GETUSERS:'/users',
    ADDUSERS:'/users',
    UPDATEUSERS:'/updateusers',
    DELETEUSERS:'/deleteusers'
  };
  
export { baseURL,endPoints};