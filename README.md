# Til-Tool

This is a simple command-line tool to convert .txt files into genereated .html files.

## Features

-   Pass in a .txt file and it'll generate an html file which is stored in `./til` directory.
-   Pass in a directory and it'll look for and find all .txt files within the directory and genereate multiple html files in `./til` directory.

## Argument

| Argument         | Role                   |
| ---------------- | ---------------------- |
| fileName/dirName | converts files to html |

#### Example: Converts a .text file .html file

```text
./example1.txt
This is the first paragraph.

This is the second paragraph.
```

```bash
$ ts-node src/index.ts example1.txt
```

```html
./til/example1.html

<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>example1</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
    <body>
        <h1>example1</h1>
        <p>This is the first paragraph.</p>
        <p>This is the second paragraph.</p>
    </body>
</html>
```

#### Example: Convert .txt files in a directory to .html files stored in ./til direcotry

```text
./examples/text1.txt
This is the text1.txt in examples directory.

This is the text1.txt in examples directory.

./examples/text2.txt
This is the text2.txt in examples directory.

This is the text2.txt in examples directory.

```

```bash
$ ts-node src/index.ts examples
```

```html
./til/text1.html

<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>text1</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
    <body>
        <h1>text1</h1>
        <p>This is the text1.txt in examples directory.</p>
        <p>This is the text1.txt in examples directory.</p>
    </body>
</html>
```

```html
./til/text2.html

<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>text2</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
    <body>
        <h1>text2</h1>
        <p>This is the text2.txt in examples directory.</p>
        <p>This is the text2.txt in examples directory.</p>
    </body>
</html>
```

## Options

| Option           | Role                          |
| ---------------- | ----------------------------- |
| -v, --version    | outputs the current version   |
| -o, --output     | creates a specified directory |
| -s, --stylesheet | sets a stylesheet to HTML     |
| -h, --help       | display help for command      |
| -l, --lang       | indicates the language to use |

## Usages

### -v, --version:

```bash
$ ts-node src/index.ts -v
$ ts-node src/index.ts --version
```

### -h, --help:

```bash
$ ts-node src/index.ts -h
$ ts-node src/index.ts --help
```

### -o, --output:

#### Allow the user to specify a different output directory using --output or -o. If not specified, til will be used, but if the user specifies a different output path, use that. The program should create the directory if it does not exist.

#### Example: Converts a .text file to .html file stored in the specified directory instead './til'

```text
./example1.txt
This is the first paragraph.

This is the second paragraph.
```

```bash
$ ts-node src/index.ts example1.txt -o build
$ ts-node src/index.ts example1.txt --output build
```

```html
./build/example1.html

<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>example1</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
    <body>
        <h1>example1</h1>
        <p>This is the first paragraph.</p>
        <p>This is the second paragraph.</p>
    </body>
</html>
```

#### Example: Convert .txt files in a directory to .html files stored in the specified directory instead './til'

```text
./examples/text1.txt
This is the text1.txt in examples directory.

This is the text1.txt in examples directory.

./examples/text2.txt
This is the text2.txt in examples directory.

This is the text2.txt in examples directory.

```

```bash
$ ts-node src/index.ts examples -o build
$ ts-node src/index.ts examples --output build
```

```html
./build/text1.html

<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>text1</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
    <body>
        <h1>text1</h1>
        <p>This is the text1.txt in examples directory.</p>
        <p>This is the text1.txt in examples directory.</p>
    </body>
</html>
```

```html
./build/text2.html

<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>text2</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
    <body>
        <h1>text2</h1>
        <p>This is the text2.txt in examples directory.</p>
        <p>This is the text2.txt in examples directory.</p>
    </body>
</html>
```

### -s, --stylesheet:

#### Allow the user to optionally specify a --stylesheet or -s URL to a CSS stylesheet to be used in the <head> of your generated HTML files.

#### Example: Converts a .text file to .html file with a stylesheet

```text
./example1.txt
This is the first paragraph.

This is the second paragraph.
```

```bash
$ ts-node src/index.ts example1.txt -s https://cdn.jsdelivr.net/npm/water.css@2/out/water.css
$ ts-node src/index.ts example1.txt --stylesheet https://cdn.jsdelivr.net/npm/water.css@2/out/water.css
```

```html
./til/example1.html

<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>example1</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css"
        />
    </head>
    <body>
        <h1>example1</h1>
        <p>This is the first paragraph.</p>
        <p>This is the second paragraph.</p>
    </body>
</html>
```

#### Example: Convert .txt files in a directory to .html files with a stylesheet

```text
./examples/text1.txt
This is the text1.txt in examples directory.

This is the text1.txt in examples directory.

./examples/text2.txt
This is the text2.txt in examples directory.

This is the text2.txt in examples directory.

```

```bash
$ ts-node src/index.ts examples -s https://cdn.jsdelivr.net/npm/water.css@2/out/water.css
$ ts-node src/index.ts examples --stylesheet https://cdn.jsdelivr.net/npm/water.css@2/out/water.css
```

```html
./til/text1.html

<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>text1</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css"
        />
    </head>
    <body>
        <h1>text1</h1>
        <p>This is the text1.txt in examples directory.</p>
        <p>This is the text1.txt in examples directory.</p>
    </body>
</html>
```

```html
./til/text2.html

<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>text2</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css"
        />
    </head>
    <body>
        <h1>text2</h1>
        <p>This is the text2.txt in examples directory.</p>
        <p>This is the text2.txt in examples directory.</p>
    </body>
</html>
```

### -l, --lang:

#### Allow the user to add an optional -i or --lang to indicate the language to use when generating the lang attribute on the root element.

#### Example: Converts a .text file to .html file with a lang attribute

```text
./example1.txt
This is the first paragraph.

This is the second paragraph.
```

```bash
$ ts-node src/index.ts example1.txt -l br
$ ts-node src/index.ts example1.txt --lang br
```

```html
./til/example1.html

<!doctype html>
<html lang="br">
    <head>
        <meta charset="utf-8" />
        <title>example1</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
    <body>
        <p>This is the first paragraph.</p>
        <p>This is the second paragraph.</p>
    </body>
</html>
```

#### Example: Convert .txt files in a directory to .html files with a lang attribute

```text
./examples/text1.txt
This is the text1.txt in examples directory.

This is the text1.txt in examples directory.

./examples/text2.txt
This is the text2.txt in examples directory.

This is the text2.txt in examples directory.

```

```bash
$ ts-node src/index.ts examples -l br
$ ts-node src/index.ts examples --lang br
```

```html
./til/text1.html

<!doctype html>
<html lang="br">
    <head>
        <meta charset="utf-8" />
        <title>text1</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
    <body>
        <h1>text1</h1>
        <p>This is the text1.txt in examples directory.</p>
        <p>This is the text1.txt in examples directory.</p>
    </body>
</html>
```

```html
./til/text2.html

<!doctype html>
<html lang="br">
    <head>
        <meta charset="utf-8" />
        <title>text2</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
    <body>
        <h1>text2</h1>
        <p>This is the text2.txt in examples directory.</p>
        <p>This is the text2.txt in examples directory.</p>
    </body>
</html>
```

## License

[MIT](https://github.com/seog-jun/til-tool/blob/main/LICENSE)
