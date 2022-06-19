var context = "selection";
var title = "经典回顾";
chrome.contextMenus.create({"title": title, "id": "context" + context}, () => chrome.runtime.lastError);
//var id = chrome.contextMenus.create({"title": title, "contexts":[context],"id": "context" + context});  

function onClickHandler() {
  chrome.tabs.create({
    url: "https://www.bilibili.com/video/BV1EP4y1j7kV?spm_id_from=333.337.search-card.all.click&vd_source=29ddaf5c007891f74944321cd18ebc7e",
  });
};

chrome.contextMenus.onClicked.addListener(onClickHandler);