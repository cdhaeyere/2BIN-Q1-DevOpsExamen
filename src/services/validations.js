// TODO: Add here the function to validate

const validation = (gamertag) => {
    if (!gamertag) return false;
    return true;
};

const isEmpty = (label) => !label || label.length === 0;

module.exports = {
    isEmpty,
    validation,
};
