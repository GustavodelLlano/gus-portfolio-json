export const formatDate = (startDate: string | null, endDate: string | null): string => {
    let startYear = '';
    let startMonth = '';
    let endYear = 'Present';
    let endMonth = '';

    if (startDate) {
        const start = new Date(startDate);
        startYear = start.getFullYear().toString();
        startMonth = (start.getMonth() + 1).toString().padStart(2, '0');
    }

    if (endDate) {
        const end = new Date(endDate);
        endYear = end.getFullYear().toString();
        endMonth = (end.getMonth() + 1).toString().padStart(2, '0');
    }

    return `${startYear}-${startMonth} - ${endYear}${endDate ? '-' + endMonth : ''}`;
}