import {strapiInstance} from "./axios";
import {Comment} from "@/types";

const getComments = async () => {
    const response = await strapiInstance.get('comments');
    return response.data.data as Comment[];
}
export default getComments;