let API_BASE = "";
if (location.hostname === "localhost" || location.hostname === "127.0.0.1"){
    API_BASE = "http://localhost:9000/api/";
}else {
    API_BASE = "https://wp7ut8hoe3.execute-api.us-east-1.amazonaws.com/prod/api/";
}
module.exports = {
    API_BASE: API_BASE
};