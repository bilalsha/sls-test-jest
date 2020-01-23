const { spawn } = require('child_process');

let slsOfflineProcess;

module.exports = async () => {
	console.log('[Tests Bootstrap] Start');
	await startSlsOffline().catch((e) => {
		console.error(e);
		return;
	});
	global.__SERVERD__ = slsOfflineProcess;
};

function startSlsOffline() {
	slsOfflineProcess = slsOfflineProcess = spawn('serverless', [ 'offline', '--port', 3005 ]);

	return finishLoading();
}

const finishLoading = () =>
	new Promise((resolve, reject) => {
		slsOfflineProcess.stdout.on('data', (data) => {
			if (data.includes('Serverless: Offline [HTTP] listening on')) {
				console.log(data.toString().trim());
				console.log(`Serverless: Offline started with PID : ${slsOfflineProcess.pid}`);
				resolve('ok');
			}

			if (data.includes('address already in use')) {
				reject(data.toString().trim());
			}
		});

		slsOfflineProcess.stderr.on('data', (errData) => {
			console.log(`Error starting Serverless Offline:\n${errData}`);
			reject(errData);
		});
	});
