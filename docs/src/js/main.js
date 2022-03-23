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
	startupPage(ad);
},
startupPage = (ad) => {
	var menu = createEle("div"),
		menuBox = createEle("div"),
		newGameBtn = createEle("button"),
		loadBtn = createEle("button"),
		settingsBtn = createEle("button"),
		creditsBtn = createEle("button");
    //
    newGameBtn.className = "menuBtns";
    newGameBtn.onclick = loadNewGamePage(ad);
    newGameBtn.innerHTML = "New Game";

    loadBtn.className = "menuBtns";
    if(ad.rookie === true) {
    	loadBtn.disabled = true;
    } else {
    	loadBtn.disabled = false;
    	loadBtn.onclick = loadGamePage(ad);
    }
    loadBtn.innerHTML = "Load Game";

    settingsBtn.className = "menuBtns";
    settingsBtn.onclick = loadSettingsPage(ad);
    settingsBtn.innerHTML = "Settings";

    creditsBtn.className = "menuBtns";
    creditsBtn.onclick = loadCreditsPage();
    creditsBtn.innerHTML = "Credits";

    menuBox.className = "menuBox w3-contain w3-center w3-padding";
    menuBox.append(newGameBtn,loadBtn,settingsBtn,creditsBtn);

    menu.className = "menu w3-container w3-padding"
	menu.append(menuBox);

	body.append(menu);
},
loadNewGamePage = (ad) => {
	return () => {
		const newGamePage = createEle("div"),
		      xOut = createEle("span");
		//
		xOut.innerHTML = "X";
		xOut.className = "xOut";
		xOut.onclick = () => { return deleteThis(newGamePage) };

	    newGamePage.innerHTML = "new game page";
	    newGamePage.append(xOut);
	    newGamePage.className = "newGamePage";

		body.append(newGamePage);
	}

},
loadGamePage = (ad) => {
	return () => {
		const loadPage = createEle("div"),
		      xOut = createEle("span");
		//
		xOut.innerHTML = "X";
		xOut.className = "xOut";
		xOut.onclick = () => { return deleteThis(loadPage) };

	    loadPage.innerHTML = "load page";
	    loadPage.append(xOut);
	    loadPage.className = "loadPage";

		body.append(loadPage);
	}
},
loadSettingsPage = (ad) => {
	return () => {
		const settingsPage = createEle("div"),
		      purgeDataBtn = createEle("button"),
		      xOut = createEle("span");
		//
		purgeDataBtn.innerHTML = "Delete Game Data";
		purgeDataBtn.onclick = purgeData();
		purgeDataBtn.className = "purgeDataBtn w3-button";

		xOut.innerHTML = "X";
		xOut.className = "xOut";
		xOut.onclick = () => { return deleteThis(settingsPage) };

	    settingsPage.append(xOut,purgeDataBtn);
	    settingsPage.className = "settingsPage";

		body.append(settingsPage);
	}
},
purgeData = () => {
	return () => {
		localStorage.removeItem("appData");
		location.reload();
	}
},
loadCreditsPage = () => {
	return () => {
		const creditsPage = createEle("div"),
		      xOut = createEle("span");
		//
		xOut.innerHTML = "X";
		xOut.className = "xOut";
		xOut.onclick = () => { return deleteThis(creditsPage) };

	    creditsPage.innerHTML = "credits page";
	    creditsPage.append(xOut);
	    creditsPage.className = "creditsPage";

		body.append(creditsPage);
	}
};
window.onload = () => {
	init();
};