# document-outerhtml

Like [Element.outerHTML][], but for the whole [Document][].

This means it returns a string containing the `<html>.....</html>` with all the content between, plus the `<!DOCTYPE ....>` declaration (if present), and any comments and stray elements or text nodes.

# Install

    npm install document-outerhtml

# Usage

    import documentOuterHTML from 'document-outerhtml'

    const html = documentOuterHTML(document)

# Licence

[CC0](https://creativecommons.org/publicdomain/zero/1.0/); do whatever you want with this code.

# See also

 - [XMLSerializer.serializeToString][]; does nearly the same thing, except it creates XML.


[Element.outerHTML]: https://developer.mozilla.org/en-US/docs/Web/API/Element/outerHTML
[Document]: https://developer.mozilla.org/en-US/docs/Web/API/Document
[XMLSerializer.serializeToString]: https://developer.mozilla.org/en-US/docs/Web/API/XMLSerializer/serializeToString
