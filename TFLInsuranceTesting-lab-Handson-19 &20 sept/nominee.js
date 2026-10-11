function isNomineeValid(nominee) {

    const validRelationships = [
        "Spouse",
        "Parent",
        "Child",
        "Sibling"
    ];

    if (
        nominee.name &&
        nominee.age >= 18 &&
        validRelationships.includes(nominee.relationship)
    ) {
        return true;
    }

    return false;
}

module.exports = {
    isNomineeValid
};