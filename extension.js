// モジュール「vscode」には VS Code 拡張 API が含まれています。
// モジュールをインポートし、以下のコード内でエイリアス vscode を使用して参照します。
const vscode = require('vscode');
const fs = require('fs');
const path = require('path');


function decodeBase64ImageAndSave(encodedImage) {
    // Base64 エンコードされた画像データをデコードします
    let match = encodedImage.match(/^image::data:image\/(png|jpe?g);base64,(.+)$/);
    if (match) {
        let ext = match[1];
        let data = match[2];
        let buffer = Buffer.from(data, 'base64');

        // 保存ダイアログを表示します
        vscode.window.showSaveDialog({
            defaultUri: vscode.Uri.file(`image.${ext}`),
            filters: {
                'Images': [ext]
            }
        }).then(fileUri => {
            if (fileUri) {
                fs.writeFile(fileUri.fsPath, buffer, function(error) {
                    if (error) {
                        vscode.window.showErrorMessage(`Failed to save the image: ${error.message}`);
                    } else {
                        vscode.window.showInformationMessage(`The image has been saved to ${fileUri.fsPath}`);
                    }
                });
            }
        });
    } else {
        vscode.window.showErrorMessage('The selected text is not a valid Base64 encoded image');
    }
}


function insertEncodedImage(image,ext, macro) {
    let base64Image = image.toString('base64');
    let encodedImage = `data:image/${ext.slice(1)};base64,${base64Image}`;
    let adocImage = `image::${encodedImage}[${macro}]`;

    // ユーザーが選択した場所にエンコードされた画像を挿入する
    vscode.window.activeTextEditor.edit(editBuilder => {
        let selection = vscode.window.activeTextEditor.selection;
        editBuilder.replace(selection, adocImage);
    });
}


// このメソッドは、拡張機能がアクティブ化されたときに呼び出されます
// 拡張機能は、コマンドが初めて実行されたときにアクティブ化されます。
/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

    let disposable = vscode.commands.registerCommand('extension.pasteImageAsBase64', function () {
        // クリップボードからテキストを読み取る
        vscode.env.clipboard.readText().then((clipboardContent) => {
            // ダブルクォーテーションを削除する
            let filePath = clipboardContent.replace(/"/g, '');
            // パスの存在確認
            if (filePath && fs.existsSync(filePath)) {
                // 拡張子を取得して判定
                let ext = path.extname(filePath).toLowerCase();
                if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
                    // イメージを読み込み
                    let image = fs.readFileSync(filePath);
                    // エンコードして結果を挿入
                    insertEncodedImage(image,ext,"");
                    return;
                } else if (!vscode.env.clipboard.readImage) {
                    vscode.window.showErrorMessage('That extension is not supported.[0x01]');
                }
            } else {
                vscode.window.showErrorMessage('The clipboard content is not a valid file path.[0x02]');
            }
        });
    });
    context.subscriptions.push(disposable);

    disposable = vscode.commands.registerCommand('extension.convertImageAsBase64', function () {
        // ユーザーが選択したテキストを取得
        let editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('No open text editor.[0x03]');
            return;
        }

        let selection = editor.selection;
        let selectedText = editor.document.getText(selection);

        // 選択したテキストがAsciidocのImageブロックかチェック
        let match = selectedText.match(/image::(.+?)\[(.*?)\]/);
        if (match) {
            // ファイルパスとマクロを取得
            let filePath = match[1];
            let macro = match[2];
            // パスの存在確認
            if (filePath && fs.existsSync(filePath)) {
                // 拡張子を取得して判定
                let ext = path.extname(filePath).toLowerCase();
                if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
                    // イメージを読み込み
                    let image = fs.readFileSync(filePath);
                    // エンコードして結果を挿入
                    insertEncodedImage(image, ext, macro);
                    return;
                } else {
                    vscode.window.showErrorMessage('That extension is not supported.[0x04]');
                }
            } else {
                vscode.window.showErrorMessage('File with specified path not found.[0x05]');
            }
        } else {
            vscode.window.showErrorMessage('Selected text is not a valid Asciidoc Image Block or the file does not exist.[0x06]');
        }
    });
    context.subscriptions.push(disposable);

    // 画像をデコードして保存するコマンドを追加します
    disposable = vscode.commands.registerCommand('extension.decodeImageAndSave', function () {
        let editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('No open text editor');
            return;
        }

        let selection = editor.selection;
        let selectedText = editor.document.getText(selection);

        decodeBase64ImageAndSave(selectedText);
    });
    context.subscriptions.push(disposable);
}


// このメソッドは、拡張機能が非アクティブ化されたときに呼び出されます。
function deactivate() {}


module.exports = {
    activate,
    deactivate
}
