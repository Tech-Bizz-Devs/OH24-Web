
function convertMarkdown() {

    const markdownInput = document.getElementById('markdownInput').value;

    const md = window.markdownit();

    const htmlOutput = md.render(markdownInput);

    document.getElementById('htmlPreview').innerHTML = htmlOutput;
}
