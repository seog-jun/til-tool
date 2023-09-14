# Til-Tool
This is a simple command-line tool to convert .txt files into genereated .html files.


## How to Install
### Step 1: To make sure node and npm are installed, run
```bash
$ node --version
$ npm --version
```
### Step 2: Clone the repository to your local machine, and install it.
```bash
$ git clone https://github.com/seog-jun/til-tool.git
$ cd til_tool
$ npm install
```


## Features
- Pass in a .txt file and it'll generate an html file which is stored in `./til` directory.
- Pass in a directory and it'll look for and find all .txt files within the directory and genereate multiple html files in `./til` directory.


## Options

| Option           | Role                          |
|------------------|-------------------------------|
| -v, --version    | outputs the current version   |
| -i, --input      | converts file to html         |
| -o, --output     | creates a specified directory |
| -s, --stylesheet | sets a stylesheet to HTML     |
| -h, --help       | display help for command      |


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

### -i, --input: 

#### Example: Converts a .text file .html file
```text
./example1.txt
This is the first paragraph.

This is the second paragraph.
```

```bash
$ ts-node src/index.ts -i example1.txt
$ ts-node src/index.ts -input example1.txt
```

```html
./til/example1.html

<!doctype html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <title>example1</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
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
$ ts-node src/index.ts -i examples
$ ts-node src/index.ts -input examples
```

```html
./til/text1.html

<!doctype html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <title>text1</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
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
    <meta charset="utf-8">
    <title>text2</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
  </head>
  <body>
    <h1>text2</h1>
    <p>This is the text2.txt in examples directory.</p>
    <p>This is the text2.txt in examples directory.</p>
		
  </body>
  </html>
```

### -o, --output: 
#### Example: Converts a .text file to .html file stored in the specified directory instead './til'
```text
./example1.txt
This is the first paragraph.

This is the second paragraph.
```

```bash
$ ts-node src/index.ts -i example1.txt -o build
$ ts-node src/index.ts -input example1.txt -output build
```

```html
./build/example1.html

<!doctype html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <title>example1</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
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
$ ts-node src/index.ts -i examples -o build
$ ts-node src/index.ts -input examples -out build
```

```html
./build/text1.html

<!doctype html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <title>text1</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
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
    <meta charset="utf-8">
    <title>text2</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
  </head>
  <body>
    <h1>text2</h1>
    <p>This is the text2.txt in examples directory.</p>
    <p>This is the text2.txt in examples directory.</p>
		
  </body>
  </html>
```


### -s, --stylesheet: 
#### Example: Converts a .text file to .html file with a stylesheet
```text
./example1.txt
This is the first paragraph.

This is the second paragraph.
```

```bash
$ ts-node src/index.ts -i example1.txt -s https://cdn.jsdelivr.net/npm/water.css@2/out/water.css
$ ts-node src/index.ts -input example1.txt --stylesheet https://cdn.jsdelivr.net/npm/water.css@2/out/water.css
```

```html
./til/example1.html

<!doctype html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <title>example1</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css">
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
$ ts-node src/index.ts -i examples -s https://cdn.jsdelivr.net/npm/water.css@2/out/water.css
$ ts-node src/index.ts -input examples --stylesheet https://cdn.jsdelivr.net/npm/water.css@2/out/water.css
```

```html
./til/text1.html

<!doctype html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <title>text1</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css">
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
    <meta charset="utf-8">
    <title>text2</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css">
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
