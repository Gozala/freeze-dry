// Equivalent to reading doc.baseURI, except that the document's URL can be overridden.
export default function getBaseURI(doc, docUrl=doc.URL) {
    const baseEl = doc.querySelector('base[href]')
    if (baseEl) {
        // Interpret the base href relative to the document URL
        return new URL(baseEl.getAttribute('href'), docUrl).href
    }

    // Tricky cases that would need more scrutiny, and I see no use case for.
    // See https://www.w3.org/TR/2017/REC-html52-20171214/infrastructure.html#urls-terminology
    // if (docUrl === 'about:srcdoc') {
    //     return doc.defaultView.parent.document.baseURI
    // }
    // if (docUrl === 'about:blank') {
    //     // document.referrer?
    // }

    // The document's URL is the base URI.
    return docUrl
}