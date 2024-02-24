
# Markdown to HTML Converter 💻

## Introduction 🚀
Welcome to Markdown to HTML Converter! This project is a simple Markdown to HTML converter built using Node.js. It's designed to efficiently interpret various Markdown syntax elements such as headers, lists, bold and italic text, links, code blocks, among others, and convert them into HTML format.

## Usage 🛠️
1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the converter:**
   ```bash
   node index.js <input-file.md>
   ```

   Replace `<input-file.md>` with the path to your Markdown file.

3. **Conversion:**
   After running the converter, the HTML file will be generated with the same name as the input Markdown file, but with the `.html` extension.

## Example 📝
Here's an example demonstrating various Markdown syntax elements:

```markdown
# Markdown Sample

This is a **sample** Markdown file demonstrating various Markdown syntax elements.

## Headers

### Header 3

## Lists

- Item 1
- Item 2
- Item 3

1. First item
2. Second item
3. Third item

## Links

[Google](https://www.google.com)

## Emphasis

*Italic text*

**Bold text**

## Code Blocks

\`\`\`javascript
function helloWorld() {
    console.log('Hello, World!');
}
helloWorld();
\`\`\`
```

To convert `sample.md` to HTML, run:
```bash
node index.js sample.md
```

The HTML file `sample.html` will be generated.

## Dependencies 📦
- [marked](https://www.npmjs.com/package/marked): A Markdown parser and compiler. Automatically installed when running `npm install`.

## How it Works ❓
The converter reads the contents of the Markdown file, parses it using the `marked` module, and generates an HTML file with the same name as the input Markdown file.

## References 📚
- [Article by Sameer Borate](https://www.smashingmagazine.com/2019/04/nodejs-express-api-markdown-html/): We referred to this article by Sameer Borate and analyzed their approach, implementing it in our project.

---
