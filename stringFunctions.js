stringLength = string => {
    if (typeof string === 'string') {
        if (string.length > 0 && string.length < 11) {
            return string.length;
        } else {
            throw new Error('Check fail: string length too long')
        }
    } else {
        throw new Error('Check fail: Not a string value')
    }
}

reverseString = string => {
    if (typeof string === 'string') {
        let splitString = string.split("");
        let reverseArray = splitString.reverse(); 
        let joinArray = reverseArray.join(""); 
        return joinArray;
    } else {
        throw new Error('Check fail: Not a string value')
    }
}

capitlizeString = string => {
    if (typeof string === 'string') {
        if (string === '' || string === ' ') {
            throw new Error('Check fail: Empty string content')
        } else {
            const newstring = string.charAt(0).toUpperCase() + string.slice(1);
            return newstring;
        }
    } else {
        throw new Error('Check fail: Not a string value')
    }
}

module.exports = {reverseString, stringLength, capitlizeString};
