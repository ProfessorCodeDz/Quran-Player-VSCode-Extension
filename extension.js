const vscode = require('vscode');
const surahs = require('./surahs')
const readers = require('./readers')

/**
 * @param {vscode.ExtensionContext} context
 */
async function activate(context) {
	// readers
	const r = readers.readers.map(r => {
		return {
			label: r.name,
			detail: r.name + " Reader"
		}
	})

	let disposable = vscode.commands.registerCommand('quran-player.quranPlayer', async function () {
		// show readers
		const reader = await vscode.window.showQuickPick(r,{
			matchOnDetail: true,
		})	
		if (reader == null) return
		// show surahs
		let selectedReader = readers.readers.find(el => el.name == reader.label)
		let s = selectedReader.surahs.split(',').map(s => {
			return {
				label: surahs.surahs.find(el => el.id == s).name,
				detail: surahs.surahs.find(el => el.id == s).name + " : Surah Number " + s
			}
		})
		
		const surah = await vscode.window.showQuickPick(s,{
			matchOnDetail: true,
		})
		if (surah == null) return
		let surahNumber = surahs.surahs.find(el => el.name == surah.label).id

		let filelink = ""
		if(surahNumber < 10 && surahNumber > 0){
			filelink = "00"+surahNumber+".mp3"
		}else if(surahNumber >= 10 && surahNumber < 100){
			filelink = "0"+surahNumber+".mp3"
		}else if(surahNumber >= 100){
			filelink = surahNumber+".mp3"
		}
		let link = selectedReader.server+filelink
		// play surah audio
		const playerPage = vscode.window.createWebviewPanel(
			'quranPlayer',
			`Quran Player: ${reader.label} | ${surah.label}`,
			vscode.ViewColumn.One,
			{}
			)
			playerPage.webview.html = `
			<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
				<meta http-equiv="X-UA-Compatible" content="IE=edge">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<title>Quran Player</title>
				<style>
					h3 {
						background-color: #ff5555;
						width: fit-content;
						padding: 10px;
						border-radius: 10px;
						border-top-left-radius: 0;
					}
					h2 {
						margin: 40px 0;
					}
				</style>
			</head>
			<body>
				<h3>Please don't close this tab</h3>
				<h2>${reader.label} | ${surah.label}</h2>
				<audio controls>
					<source src=${link}>
					Your browser does not support the audio element.
				</audio>  
			</body>
			</html>
		`
	});

	context.subscriptions.push(disposable);
}

module.exports = {
	activate
}
