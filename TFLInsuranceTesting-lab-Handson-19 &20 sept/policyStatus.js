const allowedTransitions = {
    Pending: ["Active"],
    Active: ["Expired", "Cancelled"],
    Expired: [],
    Cancelled: []
};

function isValidStatusTransition(currentStatus, newStatus) {

    const allowedStatuses =
        allowedTransitions[currentStatus];

    if (!allowedStatuses) {
        return false;
    }

    return allowedStatuses.includes(newStatus);
}

module.exports = {
    isValidStatusTransition
};