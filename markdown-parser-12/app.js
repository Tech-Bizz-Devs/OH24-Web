import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();

function convertMarkdown() {
  const markdownInput = document.getElementById('markdownInput').value;
  const htmlOutput = md.render(markdownInput);
  document.getElementById('htmlOutput').innerHTML = htmlOutput;
}
