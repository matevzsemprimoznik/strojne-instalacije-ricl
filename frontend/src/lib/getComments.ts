import axios from "./axios";
import {Comment} from "@/types";

const getComments = async () => {
    const response = await axios.get('comments');
    return response.data.data as Comment[];
}
export default getComments;