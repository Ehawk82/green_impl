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
		//
		if (ad.rookie === true) {
			return gameProceed(ad);
		} else {
			const newGamePage = createEle("div"),
			      newGameBox = createEle("div"),
			      answerBox = createEle("div"),
			      yesBtn = createEle("button"),
			      noBtn = createEle("button"),
		          xOut = createEle("span");
		    //
		    yesBtn.innerHTML = "YES";
		    yesBtn.onclick = startNewGame();

		    noBtn.innerHTML = "NO";
		    noBtn.onclick = () => { return deleteThis(newGamePage) };

		    answerBox.append(yesBtn,noBtn);
		    answerBox.className = "answerBox";

			newGameBox.innerHTML = "IT APPEARS THAT YOU HAVE A GAME ALREADY STARTED, ARE YOU SURE YOU WOULD LIKE TO START NEW GAME?";
			newGameBox.append(answerBox);
			newGameBox.className = "newGameBox w3-center";
        
			xOut.innerHTML = "X";
			xOut.className = "xOut";
			xOut.onclick = () => { return deleteThis(newGamePage) };

		    newGamePage.append(xOut,newGameBox);
		    newGamePage.className = "newGamePage";

			body.append(newGamePage);
		}
	}

},
startNewGame = () => {
	return () => {
		localStorage.removeItem("appData");
		var ad = parseLS("appData");
		if(!ad || ad === null || ad === "undefined" || ad === undefined) {
			saveLS("appData",appdata);
			ad = parseLS("appData");
			gameProceed(ad);
		} else {
			gameProceed(ad);
		}	
	}
},
gameProceed = (ad) => {
	body.innerHTML = "";
	ad.rookie = false;
	saveLS("appData",ad);

	const topMenuBar = createEle("div"),
	      settingsBtn = createEle("button"),
	      exitGameBtn = createEle("button"),
	      elementTable = createEle("div"),
	      titleBar = createEle("p"),
		  oxygenBar = createEle("p"),
		  nitrogenBar = createEle("p"),
		  carbonBar = createEle("p"),
		  hydrogenBar = createEle("p"),
		  calciumBar = createEle("p"),
		  phosphorusBar = createEle("p"),
		  sodiumBar = createEle("p"),
		  sulphurBar = createEle("p"),
		  chlorineBar = createEle("p"),
		  potassiumBar = createEle("p"),
		  nucleotideTable = createEle("div"),
		  nucleotideBar = createEle("p"),
		  codonTable = createEle("div"),
		  codonBar = createEle("p"),
		  intronTable = createEle("div"),
		  intronBar = createEle("p"),
		  waterBar = createEle("p"),
		  carbBar = createEle("p"),
		  fatBar = createEle("p"),
		  proteinBar = createEle("p"),
		  compoundTable = createEle("div"),
		  adenineBar = createEle("p"),
		  guanineBar = createEle("p"),
		  cytosineBar = createEle("p"),
		  thymineBar = createEle("p"),
		  aminoTable = createEle("div"),
		  energyWidget = createEle("div");
	//
	settingsBtn.innerHTML = "SETTINGS";
	settingsBtn.onclick = loadSettingsPage(ad);

	exitGameBtn.innerHTML = "MENU";
	exitGameBtn.onclick = reloadGame();

	topMenuBar.append(settingsBtn,exitGameBtn);
	topMenuBar.className = "topMenuBar w3-grey";

	energyWidget.innerHTML = ".";
	energyWidget.className = "energyWidget w3-container";
	adenineBar.innerHTML = "ADENINE <span>" + ad.aminos.adenine+ "</span>";
	guanineBar.innerHTML = "GUANINE <span>" + ad.aminos.guanine + "</span>";
	cytosineBar.innerHTML = "CYTOSINE <span>" + ad.aminos.cytosine + "</span>";
	thymineBar.innerHTML = "THYMINE <span>" + ad.aminos.thymine + "</span>";

	aminoTable.className = "aminoTable w3-container w3-grey";
	aminoTable.append(adenineBar,guanineBar,cytosineBar,thymineBar);

	waterBar.innerHTML = "WATER <span>" + ad.compounds.water + "</span>";
	carbBar.innerHTML = "CARBS <span>" + ad.compounds.carbohydrate + "</span>";
	fatBar.innerHTML = "FAT <span>" + ad.compounds.fat + "</span>";
	proteinBar.innerHTML = "PROTEIN <span>" + ad.compounds.protein + "</span>";

	compoundTable.className = "compoundTable w3-container w3-grey";
	compoundTable.append(waterBar,carbBar,fatBar,proteinBar);

    intronBar.innerHTML = "INTRONS <span>" + ad.introns + "</span>";
	intronBar.className = "intronBar";

	intronTable.className = "intronTable w3-container w3-grey";
	intronTable.append(intronBar);

	codonBar.innerHTML = "CODONS <span>" + ad.codons + "</span>";
	codonBar.className = "nucleotideBar";

	codonTable.className = "codonTable w3-container w3-grey";
	codonTable.append(codonBar);

	nucleotideBar.innerHTML = "NUCLEOTIDES <span>" + ad.nucleotides + "</span>";
	nucleotideBar.className = "nucleotideBar";

	nucleotideTable.className = "nucleotideTable w3-container w3-grey";
	nucleotideTable.append(nucleotideBar);

	oxygenBar.innerHTML = "OXYGEN <span>" + ad.elements.oxygen + "</span>";
	nitrogenBar.innerHTML = "NITROGEN <span>" + ad.elements.nitrogen + "</span>";
	carbonBar.innerHTML = "CARBON <span>" + ad.elements.carbon + "</span>";
	hydrogenBar.innerHTML = "HYDROGEN <span>" + ad.elements.hydrogen + "</span>";
	calciumBar.innerHTML = "CALCIUM <span>" + ad.elements.calcium + "</span>";
	phosphorusBar.innerHTML = "PHOSPHORUS <span>" + ad.elements.phosphorus + "</span>";
	sodiumBar.innerHTML = "SODIUM <span>" + ad.elements.sodium + "</span>";
	sulphurBar.innerHTML = "SULPHUR <span>" + ad.elements.sulphur + "</span>";
	chlorineBar.innerHTML = "CHLORINE <span>" + ad.elements.chlorine + "</span>";
	potassiumBar.innerHTML = "POTASSIUM <span>" + ad.elements.potassium + "</span>";

	elementTable.className = "elementTable w3-container w3-grey";
	elementTable.append(oxygenBar,nitrogenBar,carbonBar,hydrogenBar,calciumBar,phosphorusBar,sodiumBar,sulphurBar,chlorineBar,potassiumBar);

	body.append(topMenuBar,elementTable,nucleotideTable,codonTable,intronTable,compoundTable,aminoTable,energyWidget);
},
loadGamePage = (ad) => {
	return () => {
		gameProceed(ad);
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
reloadGame = () => {
	return () => {
		location.reload();
	}
},
loadCreditsPage = () => {
	return () => {
		const creditsPage = createEle("div"),
			  creditbox = createEle("div"),
			  developer = createEle("p"),
		      xOut = createEle("span");
		//
		developer.innerHTML = "Sofware Development: Jason Graziano";
		developer.className = "developer";

		creditbox.append(developer);
		creditbox.className = "creditbox w3-margin-top w3-padding w3-container w3-center";

		xOut.innerHTML = "X";
		xOut.className = "xOut";
		xOut.onclick = () => { return deleteThis(creditsPage) };

	    creditsPage.append(xOut,creditbox);
	    creditsPage.className = "creditsPage";

		body.append(creditsPage);
	}
};
window.onload = () => {
	init();
};