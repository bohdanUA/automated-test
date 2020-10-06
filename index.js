function mooncakeSays(message) {
  let mooncake = "(A.o)";

  if (!message) {
    return `${mooncake} chookity?`;
  }

  return `${mooncake} ${message}`;
}

module.exports.mooncakeSays = mooncakeSays;
