import htmlify from './solution'

describe('htmlify', () => {
  test('returns correct result', () => {
    expect(htmlify('Hello')).toEqual('<p>Hello</p>')
    expect(htmlify('Hello & World')).toEqual('<p>Hello &amp; World</p>')
    expect(htmlify('shouldn’t')).toEqual('<p>shouldn&rsquo;t</p>')
    expect(htmlify('shouldn’t wouldn’t couldn’t')).toEqual(
      '<p>shouldn&rsquo;t wouldn&rsquo;t couldn&rsquo;t</p>'
    )
    expect(htmlify('Simon says “Do the right thing”')).toEqual(
      '<p>Simon says &ldquo;Do the right thing&rdquo;</p>'
    )
    expect(htmlify('blah’t  “hello” & & blah’t – – – “silly” & &')).toEqual(
      '<p>blah&rsquo;t  &ldquo;hello&rdquo; &amp; &amp; blah&rsquo;t &ndash; &ndash; &ndash; &ldquo;silly&rdquo; &amp; &amp;</p>'
    )
  })
})
