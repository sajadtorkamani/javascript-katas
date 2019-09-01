const heggeleggleggo = str => {
  return str.replace(
    /[bcdfghjklmnpqrstvwxyz]/gi,
    consonant => consonant + 'egg'
  );
};

export default heggeleggleggo;
