export function formatDate(date: string) {
    let newDate = new Date(date);
    return newDate.toISOString().substring(0, 10);
}