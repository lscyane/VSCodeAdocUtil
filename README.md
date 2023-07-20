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

### 0.0.2
Image notation of Asciidoc was wrong, so fixed it

### 0.0.1
alpha test





# Asciidoc画像挿入ユーティリティ拡張機能

## 概要
このVisual Studio Codeの拡張機能は、クリップボードから画像のファイルパスを読み取り、その画像をBase64形式でエンコードして挿入する機能を提供します。

## 機能
- クリップボードから画像のファイルパスを読み取ります
- 指定のファイルパスがPNG、JPG、またはJPEGの画像を指している場合、その画像は読み込まれ、Base64形式でエンコードされます
- エンコードされた画像データは、現在のエディタの選択開始位置に挿入されます

## 使い方
1. クリップボードに画像のファイルパスをコピーします（ダブルクォーテーションで囲む必要はありません）。
2. Visual Studio Codeのエディタ上で挿入したい位置を選択します。
3. コマンドパレット（F1またはCtrl+Shift+P / Cmd+Shift+P）を開き、「PasteImageAsBase64」を実行します。

## エラーハンドリング
- パスが存在しない場合や無効なパスである場合、ユーザーにエラーメッセージが表示されます。
- サポートされていないファイル形式の場合、エラーメッセージが表示されます。

## 注意
- この拡張機能は、ファイルパスが指し示す画像をBase64形式でエンコードします。非常に大きな画像をエンコードすると、生成されるデータが非常に大きくなる可能性があります。

## Release Notes

### 0.0.2
AsciidocのImage記法が間違っていたので修正

### 0.0.1
alpha test
