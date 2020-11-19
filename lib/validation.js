const { readMasterPassword } = require("./masterPassword");

async function isMasterPasswordCorrect(masterPassword) {
  return masterPassword === readMasterPassword();
}

exports.isMasterPasswordCorrect = isMasterPasswordCorrect;
