# Asciidoc Image Insertion Utility Extension

## Overview
This Visual Studio Code extension is a utility tool for working with images in Asciidoc documents. It provides two main features: one that reads an image file path from the clipboard, encodes the image in Base64 format, and inserts it into the document, and another that converts an existing image block in the Asciidoc document to a Base64-encoded inline image.

## Features
- Reads an image file path from the clipboard
- Converts selected Asciidoc Image Block to Base64-encoded inline image
- If the specified file path points to a PNG, JPG, or JPEG image, the image is loaded and encoded in Base64 format
- The encoded image data is inserted at the current editor's selection start position

## Usage
1. Copy the image file path to the clipboard (e.g., C:\Images\example.png)
2. Open the VS Code command palette and run the "Paste Image as Base64" command
3. The encoded image data will be inserted at the current editor's selection start position

Or

1. Select an existing Asciidoc Image Block in the document
2. Open the VS Code command palette and run the "Convert Image to Base64" command
3. The selected image block will be replaced with a Base64-encoded inline image

## Error Handling
- If the content of the clipboard is an invalid file path or the file path does not exist, an error message will be displayed to the user
- If the selected text is not a valid Asciidoc Image Block or the file does not exist, an error message will be displayed to the user
- If the specified file path does not point to a PNG, JPG, or JPEG image, an error message will be displayed to the user

## Caution
- This extension encodes the image that the file path points to in Base64 format. Encoding a very large image may result in a very large amount of generated data.
- The "Convert Image to Base64" command will replace the existing image block with encoded data. Be sure to keep a backup of your original document.

## Release Notes

### 0.0.3
Added command to Base64 encode an existing Asciidoc Image block

### 0.0.2
Image notation of Asciidoc was wrong, so fixed it

### 0.0.1
alpha test





# Asciidoc画像挿入ユーティリティ拡張機能

## 概要
この Visual Studio Code 拡張機能は、Asciidoc 文書内の画像作業のユーティリティツールです。
クリップボードから画像ファイルのパスを読み取り、画像を Base64 形式でエンコードし、文書に挿入する機能と、既存の Asciidoc Image ブロックを Base64 エンコードされたインライン画像に変換する機能の2つを提供します。

## 機能
- クリップボードから画像ファイルのパスを読み取る
- 選択した Asciidoc Image ブロックを Base64 エンコードされたインライン画像に変換する
- 指定したファイルパスが PNG、JPG、JPEG 画像を指している場合、その画像を読み込み、Base64 形式でエンコードする
- エンコードされた画像データを現在のエディタの選択開始位置に挿入する

## 使い方
1. 画像ファイルのパスをクリップボードにコピーします（例：C:\Images\example.png）
2. VS Code のコマンドパレットを開き、"Paste Image as Base64" コマンドを実行します
3. エンコードされた画像データが現在のエディタの選択開始位置に挿入されます

または

1. 文書内の既存の Asciidoc Image ブロックを選択します
2. VS Code のコマンドパレットを開き、"Convert Image to Base64" コマンドを実行します
3. 選択した画像ブロックが Base64 エンコードされたインライン画像に置き換えられます

## エラーハンドリング
- クリップボードの内容が無効なファイルパスである場合、またはファイルパスが存在しない場合、エラーメッセージがユーザーに表示されます
- 選択したテキストが有効な Asciidoc Image ブロックでない場合、またはファイルが存在しない場合、エラーメッセージがユーザーに表示されます
- 指定したファイルパスが PNG、JPG、JPEG 画像を指していない場合、エラーメッセージがユーザーに表示されます

## 注意
- この拡張機能は、ファイルパスが指す画像を Base64 形式でエンコードします。非常に大きな画像をエンコードすると、生成されるデータ量が非常に大きくなる可能性があります。
- "Convert Image to Base64" コマンドは、既存の画像ブロックをエンコードされたデータに置き換えます。オリジナルの文書のバックアップを保持してください。

## Release Notes

### 0.0.3
既存のAsciidoc ImageブロックをBase64エンコードするコマンドを追加

### 0.0.2
AsciidocのImage記法が間違っていたので修正

### 0.0.1
alpha test
