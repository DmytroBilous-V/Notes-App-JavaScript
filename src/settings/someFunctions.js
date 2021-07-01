export const parseDate = (dateString) => {
    let noteDate = new Date(dateString);
    let result = noteDate.toDateString().split(' ').slice(1).join(' ');
    return result;
}

export const createDateNote = () => {
    const createDate = new Date();
    const result = `${createDate.getFullYear()} ${createDate.getMonth()} ${createDate.getDate()}`
    return result;
};

export const isValidInputValue = (value, regExpName) => {
    return regExpName.test(value);
}
