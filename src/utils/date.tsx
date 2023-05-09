export const  formatDate = (date: string) => {
    const formatedDate = new Date(date);
    const day = formatedDate.getDate();
    const month = formatedDate.getMonth() + 1;
    const year = formatedDate.getFullYear();
    return `${day}.${month}.${year}`;
}