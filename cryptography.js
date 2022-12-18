var bcrypt = require("bcryptjs");

exports.cryptPassword = async function (password) {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;

}

