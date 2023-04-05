import {strapiInstance} from "./axios";
import { Project} from "@/types";
import {Locale} from "@/i18n/config";
import localeTransform from "@/lib/locale-transformations";
import localeTransformations from "@/lib/locale-transformations";

const getProjects = async (locale: Locale) => {
    const response = await strapiInstance.get('projects', {params: {locale: localeTransformations[locale], populate: '*'}});
    return response.data.data as Project[];
}

export default getProjects;