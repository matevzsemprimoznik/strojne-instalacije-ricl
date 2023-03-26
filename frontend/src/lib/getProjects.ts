import axios from "./axios";
import {Project} from "@/types";

const getProjects = async () => {
    const response = await axios.get('projects');
    return response.data.data as Project[];
}

export default getProjects;