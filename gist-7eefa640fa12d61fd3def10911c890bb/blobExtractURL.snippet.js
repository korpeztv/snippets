// extract all urls on the web page and open new tab blob with each url on a new line 

( () => {
    // Collect all URLs from anchor tags
    const urls = Array.from(document.querySelectorAll('a[href]')).map(a => a.href)// use absolute URLs
    .filter( (v, i, arr) => arr.indexOf(v) === i);
    // dedupe

    // Create text content
    const text = urls.join('\n');

    // Create a Blob and open it in a new tab
    const blob = new Blob([text],{
        type: 'text/plain'
    });
    const blobUrl = URL.createObjectURL(blob);

    window.open(blobUrl, '_blank');

    // Optional: revoke later to free memory
    setTimeout( () => URL.revokeObjectURL(blobUrl), 60_000);
}
)();
