import {strapiInstance} from "./axios";
import {Counter} from "@/types";

const getCounter = async () => {
    const response = await strapiInstance.get('counter');
    return response.data.data as Counter;
}

export default getCounter;