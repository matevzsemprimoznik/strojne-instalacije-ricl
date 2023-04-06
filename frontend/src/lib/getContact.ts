import {strapiInstance} from "./axios";
import {Contact} from "@/types";

const getContact = async () => {
    const response = await strapiInstance.get('contact');
    return response.data.data as Contact;
}

export default getContact;