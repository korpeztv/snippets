// Extract all URLs and save as .txt and download

( () => {
    // Collect all unique absolute URLs from <a> tags
    const urls = Array.from(document.querySelectorAll('a[href]')).map(a => a.href).filter( (v, i, arr) => arr.indexOf(v) === i);

    const text = urls.join('\n');

    // Build filename from full URL (hostname + path + query)
    const safePath = (location.hostname + location.pathname + location.search).replace(/[\/\\?%*:|"<>]/g, '_')// illegal filename chars
    .replace(/_+/g, '_')// collapse repeats
    .replace(/^_+|_+$/g, '');
    // trim

    const blob = new Blob([text],{
        type: 'text/plain'
    });
    const blobUrl = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = blobUrl;
    a.download = `${safePath}.urls.txt`;

    document.body.appendChild(a);
    a.click();
    a.remove();

    setTimeout( () => URL.revokeObjectURL(blobUrl), 60_000);
}
)();
