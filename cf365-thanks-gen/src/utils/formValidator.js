function validateName(fullName) {
    if (!fullName) {
        return false; 
    }

    if (!/^[a-zA-Z\s]+$/.test(fullName)) {
        return false;
    }

    return true;
}

export {
    validateName,
}