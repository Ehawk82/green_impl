const init = () => {
	var ad = parseLS("appData");
	if(!ad || ad === null || ad === "undefined" || ad === undefined) {
		saveLS("appData",appdata);
		ad = parseLS("appData");
		buildApp(ad);
	} else {
		buildApp(ad);
	}	
},
buildApp = (ad) => {
	
};
window.onload = () => {
	init();
};