import {strapiInstance} from "./axios";
import {Project} from "@/types";

const getProjects = async () => {
    const response = await strapiInstance.get('projects?populate=*');
    return response.data.data as Project[];
}

export default getProjects;