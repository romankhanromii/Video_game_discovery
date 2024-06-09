import axios from "axios";

const ApiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6e073c55e9d440b98250078ca8055294"
  }
});

export default ApiClient;
