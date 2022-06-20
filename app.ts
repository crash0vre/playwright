function getFullName(firstname, lastname) {
    if (typeof firstname !== "string") {
        throw new Error('First name not a string')
    }
    return `${firstname} ${lastname}`;
}

const getFullNameArrow = (firstname: string, lastname: string): string => {
    return `${firstname} ${lastname}`;
}


console.log(getFullName('true', 'Ivanov'));