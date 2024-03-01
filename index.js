const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator');

function generateCryptoName() {
    const uniqueName = uniqueNamesGenerator({
        dictionaries: [adjectives, colors, animals]
    });
    return uniqueName;
}

module.exports = generateCryptoName;