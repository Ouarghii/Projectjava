import axios from "../customAxiosConfig/CustomAxiosConfig";

const SignUpAppClientService = (user) => {
  try {
    return axios.post(`/signup`, user);
  } catch (err) {
    let error = "";
    if (err.response) {
      error += err.response;
    }
    alert(error)
    return error;
  }
};

export default SignUpAppClientService;
