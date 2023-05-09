import prisma from "@/lib/prisma";

const getCounter = async () => {
    const result = await prisma.counter.findMany()
    return result[0]
}

export default getCounter;