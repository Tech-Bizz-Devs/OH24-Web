const fs = require('fs');
const marked = require('marked'); 

function convertMarkdownToHTML(inputFile) {
    fs.readFile(inputFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading input file:', err);
            return;
        }

        const htmlContent = marked.parse(data);

        const outputFile = inputFile.replace('.md', '.html');
        fs.writeFile(outputFile, htmlContent, 'utf8', (err) => {
            if (err) {
                console.error('Error writing output file:', err);
                return;
            }
            console.log(`Markdown converted to HTML and saved as ${outputFile}`);
        });
    });
}

if (process.argv.length < 3) {
    console.error('Usage: node markdown-to-html.js <input-file>');
    process.exit(1);
}

const inputFile = process.argv[2];

convertMarkdownToHTML(inputFile);
