fetch('README.md')
    .then(response => response.text())
    .then(text => {
        const compiled = document.querySelector('#compiled-markdown');
        compiled.innerHTML = marked(text, { sanitize: true });
    });