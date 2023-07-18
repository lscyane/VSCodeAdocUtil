# Asciidoc Image Insertion Utility Extension

## Overview

This Visual Studio Code extension is a utility tool that reads an image file path from the clipboard, encodes the image in Base64 format, and inserts it into an Asciidoc document.

## Features

- Reads an image file path from the clipboard
- If the specified file path points to a PNG, JPG, or JPEG image, the image is loaded and encoded in Base64 format
- The encoded image data is inserted at the current editor's selection start position

## Usage

1. Copy the image file path to the clipboard (e.g., C:\Images\example.png)
2. Open the VS Code command palette and run the "Paste Image as Base64" command
3. The encoded image data will be inserted at the current editor's selection start position

## Error Handling

- If the content of the clipboard is an invalid file path or the file path does not exist, an error message will be displayed to the user
- If the specified file path does not point to a PNG, JPG, or JPEG image, an error message will be displayed to the user

## Caution

- This extension encodes the image that the file path points to in Base64 format. Encoding a very large image may result in a very large amount of generated data.

## Release Notes

### 0.0.1

alpha test

