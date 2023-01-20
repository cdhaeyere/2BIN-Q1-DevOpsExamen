// TODO: Add here the function to validate

const validation = (gamertag) => {
    if (!gamertag) return false;
    // Check if the gamertag has 8 characters
    if (gamertag.length !== 8) return false;
    // Check if the gamertag has a special character
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(gamertag)) return false;
    // Check if the gamertag has a number
    if (!/[0-9]/.test(gamertag)) return false;
    return true;
};

const isEmpty = (label) => !label || label.length === 0;

module.exports = {
    isEmpty,
    validation,
};
