# Asciidoc Image Insertion Utility Extension

## Overview
This Visual Studio Code extension is a utility tool for working with images in Asciidoc documents. It provides three main features: one that reads an image file path from the clipboard, encodes the image in Base64 format, and inserts it into the document, another that converts an existing image block in the Asciidoc document to a Base64-encoded inline image, and a third that decodes a selected Base64 encoded image and saves it as an image file.

## Features
- Reads an image file path from the clipboard
- Converts selected Asciidoc Image Block to Base64-encoded inline image
- If the specified file path points to a PNG, JPG, or JPEG image, the image is loaded and encoded in Base64 format
- The encoded image data is inserted at the current editor's selection start position
- The decoded image file is saved at the user's chosen location

## Usage
1. Copy the image file path to the clipboard (e.g., C:\Images\example.png)
2. Open the VS Code command palette and run the "Paste Image as Base64" command
3. The encoded image data will be inserted at the current editor's selection start position

Or

1. Select an existing Asciidoc Image Block in the document
2. Open the VS Code command palette and run the "Convert Image to Base64" command
3. The selected image block will be replaced with a Base64-encoded inline image

Or

1. Select a Base64-encoded inline image in the document
2. Open the VS Code command palette and run the "Decode Image and Save" command
3. A save file dialog will open for you to choose the location to save the decoded image file


## Error Handling
- If the content of the clipboard is an invalid file path or the file path does not exist, an error message will be displayed to the user
- If the selected text is not a valid Asciidoc Image Block or the file does not exist, an error message will be displayed to the user
- If the specified file path does not point to a PNG, JPG, or JPEG image, an error message will be displayed to the user
- If the selected text is not a valid Base64-encoded image, an error message will be displayed to the user

## Caution
- This extension encodes the image that the file path points to in Base64 format. Encoding a very large image may result in a very large amount of generated data.
- The "Convert Image to Base64" command will replace the existing image block with encoded data. Be sure to keep a backup of your original document.
- The "Decode Image and Save" command will save the decoded image at the user's chosen location. Make sure to have sufficient disk space.

## Release Notes

### 0.0.4
Added command to decode and save image

### 0.0.3
Added command to Base64 encode an existing Asciidoc Image block

### 0.0.2
Image notation of Asciidoc was wrong, so fixed it

### 0.0.1
alpha test





# Asciidoc画像挿入ユーティリティ拡張機能

## 概要
このVisual Studio Code拡張機能は、Asciidocドキュメントでの画像操作を支援するユーティリティツールです。クリップボードから画像ファイルのパスを読み取り、その画像をBase64形式にエンコードしてドキュメントに挿入する機能、既存のAsciidocドキュメント内の画像ブロックをBase64エンコードされたインライン画像に変換する機能、そして選択したBase64エンコードされた画像をデコードし、画像ファイルとして保存する機能、の3つの主要な機能を提供します。

## 機能
- クリップボードから画像ファイルのパスを読み取る
- 選択した Asciidoc Image ブロックを Base64 エンコードされたインライン画像に変換する
- 指定したファイルパスが PNG、JPG、JPEG 画像を指している場合、その画像を読み込み、Base64 形式でエンコードする
- エンコードされた画像データを現在のエディタの選択開始位置に挿入する
- デコードされた画像ファイルはユーザーが選択した場所に保存する

## 使い方
1. 画像ファイルのパスをクリップボードにコピーします（例：C:\Images\example.png）
2. VS Code のコマンドパレットを開き、"Paste Image as Base64" コマンドを実行します
3. エンコードされた画像データが現在のエディタの選択開始位置に挿入されます

または

1. 文書内の既存の Asciidoc Image ブロックを選択します
2. VS Code のコマンドパレットを開き、"Convert Image to Base64" コマンドを実行します
3. 選択した画像ブロックが Base64 エンコードされたインライン画像に置き換えられます

または

1. ドキュメント内のBase64エンコードされたインライン画像を選択します
2. VS Codeのコマンドパレットを開き、「Decode Image and Save」コマンドを実行します
3. デコードした画像ファイルを保存する場所を選択するダイアログが開きます

## エラーハンドリング
- クリップボードの内容が無効なファイルパスである場合、またはファイルパスが存在しない場合、エラーメッセージがユーザーに表示されます
- 選択したテキストが有効な Asciidoc Image ブロックでない場合、またはファイルが存在しない場合、エラーメッセージがユーザーに表示されます
- 指定したファイルパスが PNG、JPG、JPEG 画像を指していない場合、エラーメッセージがユーザーに表示されます
- 選択したテキストが有効なBase64エンコードされた画像でない場合、ユーザーにエラーメッセージが表示されます

## 注意
- この拡張機能は、ファイルパスが指す画像を Base64 形式でエンコードします。非常に大きな画像をエンコードすると、生成されるデータ量が非常に大きくなる可能性があります。
- "Convert Image to Base64" コマンドは、既存の画像ブロックをエンコードされたデータに置き換えます。オリジナルの文書のバックアップを保持してください。
- 「Decode Image and Save」コマンドは、デコードした画像をユーザーが選択した場所に保存します。十分なディスクスペースがあることを確認してください

## Release Notes

### 0.0.4
画像をデコードして保存するコマンドを追加

### 0.0.3
既存のAsciidoc ImageブロックをBase64エンコードするコマンドを追加

### 0.0.2
AsciidocのImage記法が間違っていたので修正

### 0.0.1
alpha test
