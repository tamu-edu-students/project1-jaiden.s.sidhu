function changeStyle() {
    const link = document.querySelector('link[rel="stylesheet"]');
    if (!link) return;

    const href = link.getAttribute('href');
    if (href.includes('style1.css')) {
        link.setAttribute('href', href.replace('style1.css', 'style2.css'));
    } else if (href.includes('style2.css')) {
        link.setAttribute('href', href.replace('style2.css', 'style1.css'));
    }
}