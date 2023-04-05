import {strapiInstance} from "./axios";
import {Comment} from "@/types";
import {Locale} from "@/i18n/config";
import localeTransform from "@/lib/locale-transformations";
import localeTransformations from "@/lib/locale-transformations";

const getComments = async (locale: Locale) => {
    console.log(localeTransformations[locale])
    const response = await strapiInstance.get('comments', {params: {locale: localeTransformations[locale]}});
    return response.data.data as Comment[];
}
export default getComments;