function validateRollNumber(rollNumber) {
    if (!rollNumber) {
        return false; 
    }

    const rollNumberPattern = /^20\d{2}(PEC|PIT)[A-Z]{2}\d{3}$/;

    if (!rollNumberPattern.test(rollNumber)) {
        return false;
    }

    return true;
}

export {
    validateRollNumber,
}
