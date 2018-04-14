function frameLink(url, re) {
	var newFrame = document.createElement("iframe");
	newFrame.src = url;
	newFrame.style.height = window.screen.height + "px";
	newFrame.style.width = window.screen.width + "px";
	newFrame.id = "pageInfo";
	var element = parent.document.getElementById("pageInfo");
	var appHistory = parent.document.getElementById("appHistory").innerHTML.split(",");
	if((appHistory[0] === "") && (appHistory.length === 1)){
		appHistory[0] = "./home.html";
	}
	parent.document.getElementById("appHistory").innerHTML = appHistory.join();
	console.log(parent.document.body.childNodes);
	parent.document.body.replaceChild(newFrame, parent.document.body.childNodes[3]);
};
function frameBack(param) {
	if(param === null) {
		return appHistory[appHistory.length-1];
	} else {
		var appHistory = parent.document.getElementById("appHistory").innerHTML.split(",");
		console.log(appHistory)
		console.log(appHistory.slice(0, appHistory.length-1));
		parent.document.getElementById("appHistory").innerHTML = appHistory.slice(0, appHistory.length-1).join();
		frameLink(appHistory.pop(), false);
	}
}
