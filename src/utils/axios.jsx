import axios from "axios";
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZDA1MTZiNGUwNjdjMDM3ZGJjYmNmNmIzZTE4Y2M2MCIsIm5iZiI6MTczNjI0MTMxOS43NDIsInN1YiI6IjY3N2NmMGE3MTQ2NThjNGI0NDY2N2ZkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PGs887_-2VkK5vcHM-YIA2GKbn82SQYWLtwwkxK1WYQ"

    }
});
export default instance;