import { constants } from "../Constants";
import { useNavigate } from "react-router-dom";
import axios from "axios";

class AuthenticationService {

    login(username, password) {
        let token = "";
        return new Promise(resolve => {
            this.getTokenIfAuthorized(username, password)
            .then(response => {
                token = response.data;
                const isValidCredentials = (username === "test" && password === "test");
                if (token && isValidCredentials) {
                    return this.setupInterceptor(token)
                }
            })
            .then((isIntercepted) => {
                if (isIntercepted) {
                    sessionStorage.setItem("username", username);
                    sessionStorage.setItem("token", token);
                    alert("Intercept setup successful");
                }
            }).then(() => {
                alert('Login Successful, you will now be redirected to the Account Summary page.');
                useNavigate().navigate("/account-summary");
            })
            .catch(() => {
                alert("username and/or password invalid");
            });
        })
    }
    
    getTokenIfAuthorized(username, password) {
        // TODO: make actual rest call to backend which will call JWT service
        // return axios.post(constants.AUTHENTICATE_URL, {
        //     username: username,
        //     password: password,
        // });
        return axios.get(constants.BTC_PRICE_URL);
    }
    
    setupInterceptor(token) {
        console.log("interceptor initiated with token: " + token);
        axios.interceptors.request.use(config => {
            config.headers.authorization = token;
            return config;
        });
        return true;
    }
}

export default new AuthenticationService();