document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
    Fingerprint.isAvailable(isAvailableSuccess, isAvailableError);
}

function isAvailableSuccess(result) {
    /*
    result depends on device and os. 
    iPhone X will return 'face' other Android or iOS devices will return 'finger' Android P+ will return 'biometric'
    */
    console.log(result);
    document.getElementById('biometrics-status').textContent = "Biometric available";

}

function isAvailableError(error) {
    // 'error' will be an object with an error code and message
    console.log(error);
    console.log(error.message);
    document.getElementById('biometrics-status').textContent = error.message;
    document.getElementById('biometrics-status').classList.add('error');
}

function successCallback() {
    window.location = "home.html";
}

function errorCallback(error) {
    alert("Authentication invalid " + error.message);
}
function loginWithoutBiometrics() {
    window.location = "home.html";
}
function loginWithBiometrics() {
    Fingerprint.show({
        description: "Some biometric description"
    }, successCallback, errorCallback);
}

