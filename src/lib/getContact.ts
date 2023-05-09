import prisma from "@/lib/prisma";

const getContact = async () => {
    const result = await prisma.contact.findMany()
    return result[0]
}

export default getContact;