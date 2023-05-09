import {Locale} from "@/i18n/config";
import prisma from "@/lib/prisma";

const getComments = (locale: Locale) => {
    return prisma.comment.findMany({where: {langugage: locale}});
}
export default getComments;