import {Locale} from "@/i18n/config";
import prisma from "@/lib/prisma";

const getProjects = async (locale: Locale) => {
    const response = await prisma.project.findMany({where: {langugage: locale}});
    return response
}

export default getProjects;