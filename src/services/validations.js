// TODO: Add here the function to validate

const validation = (gamertag) => {
    return (
        gamertag.length === 8 &&
        /[!@#$%^&*(),.?":{}|<>]/.test(gamertag) &&
        /[0-9]/.test(gamertag)
    );
};

const isEmpty = (label) => !label || label.length === 0;

module.exports = {
    isEmpty,
    validation,
};
