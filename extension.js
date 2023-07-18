// モジュール「vscode」には VS Code 拡張 API が含まれています。
// モジュールをインポートし、以下のコード内でエイリアス vscode を使用して参照します。
const vscode = require('vscode');
const fs = require('fs');
const path = require('path');


function insertEncodedImage(image,ext) {
	let base64Image = image.toString('base64');
	let encodedImage = `data:image/${ext.slice(1)};base64,${base64Image}`;
	let adocimage = `image:${encodedImage}[]`;

	// ユーザーが選択した場所にエンコードされた画像を挿入する
	vscode.window.activeTextEditor.edit(editBuilder => {
		editBuilder.insert(vscode.window.activeTextEditor.selection.start, adocimage);
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
					insertEncodedImage(image,ext);
					return;
				} else if (!vscode.env.clipboard.readImage) {
					vscode.window.showErrorMessage('The clipboard content is not a valid file path.[0x01]');
				}
            } else {
                vscode.window.showErrorMessage('The clipboard content is not a valid file path.[0x02]');
            }
        });

    });

    context.subscriptions.push(disposable);
}


// このメソッドは、拡張機能が非アクティブ化されたときに呼び出されます。
function deactivate() {}


module.exports = {
	activate,
	deactivate
}
