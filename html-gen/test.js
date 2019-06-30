import { HTMLGen } from './solution';

describe('HTMLGen', () => {
  test('can generate div elements', () => {
    const gen = new HTMLGen();
    expect(gen.div('foo')).toEqual('<div>foo</div>');
  });

  test('can generate paragraph elements', () => {
    const gen = new HTMLGen();
    expect(gen.p('bar')).toEqual('<p>bar</p>');
  });

  test('can generate nested elements', () => {
    const gen = new HTMLGen();
    const paragraph = gen.p('foo');
    const block = gen.div(paragraph);
    expect(block).toEqual('<div><p>foo</p></div>');
  });

  test('can generate comments', () => {
    const gen = new HTMLGen();
    expect(gen.comment('foo')).toEqual('<!--foo-->');
  });
});
