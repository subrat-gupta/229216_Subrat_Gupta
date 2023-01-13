import axios from 'axios';
class LoginServices{
    constructor(){
    this.baseUrl="http://localhost:4000/";
}
getPlayers(){
    return axios.get(this.baseUrl+"player");
}
}
export default new LoginServices();
