
<div align="center">
  <h1>Markdown to HTML Converter</h1>
  <p>This project is a simple Markdown to HTML converter built using Node.js. It converts Markdown formatted text into HTML, effectively interpreting various Markdown syntax elements such as headers, lists, bold and italic text, links, code blocks, among others.</p>
  <hr>
</div>


### Installation
1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

## Usage

1. Run the converter:
   ```bash
   node index.js <input-file.md>
   ```

   Replace `<input-file.md>` with the path to your Markdown file.

2. The converted HTML file will be generated with the same name as the input Markdown file, but with the `.html` extension.

## Example 
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

```

To convert `sample.md` to HTML, run:
```bash
node index.js sample.md
```

The HTML file `sample.html` will be generated.


## Built With

* [Node.js](https://nodejs.org/)
* [marked](https://www.npmjs.com/package/marked)

## Dependencies

- [marked](https://www.npmjs.com/package/marked): A Markdown parser and compiler. Automatically installed when running `npm install`.

## How it Works

The converter reads the contents of the Markdown file, parses it using the `marked` module, and generates an HTML file with the same name as the input Markdown file.


