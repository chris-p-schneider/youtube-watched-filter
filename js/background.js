chrome.runtime.onInstalled.addListener(() => {
  chrome.action.setBadgeText({
    text: 'OFF',
  });
});

const youtube = 'https://www.youtube.com/';
const videos = '/videos';

chrome.action.onClicked.addListener(async (tab) => {
  if (tab.url.startsWith(youtube) && tab.url.endsWith(videos)) {
    const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
    const nextState = prevState === 'ON' ? 'OFF' : 'ON'

    await chrome.action.setBadgeText({
      tabId: tab.id,
      text: nextState,
    });

    if (nextState === 'ON') {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files : [ 'js/youtube-watched.js' ]
      });
    }
  }
});