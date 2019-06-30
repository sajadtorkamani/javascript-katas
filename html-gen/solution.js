export function HTMLGen() {}

const ELEMENTS = ['a', 'b', 'p', 'body', 'div', 'span', 'title'];

ELEMENTS.forEach(element => {
  HTMLGen.prototype[element] = function(innerHtml) {
    return `<${element}>${innerHtml}</${element}>`;
  };
});

HTMLGen.prototype.comment = function(content) {
  return `<!--${content}-->`;
};
