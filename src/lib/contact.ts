import {apiInstance} from "@/lib/axios";
import {ContactMessage} from "@/types";

const contact = async (data: ContactMessage) => {
    const response = apiInstance.post('contact', data);
    return response
}
export default contact;