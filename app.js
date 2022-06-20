"use strict";
function getFullName(firstname, lastname) {
    if (typeof firstname !== "string") {
        throw new Error('First name not a string');
    }
    return `${firstname} ${lastname}`;
}
const getFullNameArrow = (firstname, lastname) => {
    return `${firstname} ${lastname}`;
};
console.log(getFullName('true', 'Ivanov'));
