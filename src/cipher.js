const cipher = (() => {
  const upper = (str) => str === str.toUpperCase();

  const encrypt = (str, key) => {
    let decipher = '';
    for (let i = 0; i < str.length; i += 1) {
      if (upper(str[i])) {
        decipher += String.fromCharCode(((str.charCodeAt(i) + key - 65) % 26) + 65);
      } else {
        decipher += String.fromCharCode(((str.charCodeAt(i) + key - 97) % 26) + 97);
      }
    }
    return decipher;
  };

  return {
    encrypt,
  };
})();

export default cipher;