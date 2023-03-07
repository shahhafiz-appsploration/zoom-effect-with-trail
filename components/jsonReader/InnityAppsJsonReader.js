function innityAppsJsonReader(url, opts) {
  let extraOptions_ = mergeObject_({
    feedType: 'default',
    limit: 0,
    shuffle: false
  }, opts, 'JSON Reader Object.');
  let jsonData_ = {};

  initClass_();

  function initClass_() {
    if (url === null) {
      console.error('URL not entered for innityAppsJsonReader');
    }

    initProcessUrls_();
  }

  function initProcessUrls_() {
      get_(url);
  }

  function get_(url) {
    let ajaxRequester = new XMLHttpRequest();
    ajaxRequester.overrideMimeType('application/json');
    ajaxRequester.open('GET', url);
    ajaxRequester.addEventListener('readystatechange', onReadyStateChanged__);
    ajaxRequester.send();

    function onReadyStateChanged__() {
      if (ajaxRequester.readyState === 4) {
        if (ajaxRequester.status !== 200) {
          console.error('Error happen during JSON ajax request!');
          requestCompleted_();
          return;
        }

        try {
          jsonData_ = ajaxRequester.responseText;
        } catch (e) {
          console.error('Error parsing JSON!', e);
        }

        requestCompleted_();
      }
    }
  }

  function getItemByFeedType_(completedJsonArray) {
    let jsonItemArray = [];

    switch (extraOptions_.feedType) {
      case 'reco':
      case 'merge':
        jsonItemArray = completedJsonArray.feed_data;
        break;
      default:
        jsonItemArray = completedJsonArray.item;
        break;
    }

    return jsonItemArray;
  }

  function mergeObject_(defaultObj, overrideObject, reference) {
    for (let attributeKey in overrideObject) {
      if (defaultObj.hasOwnProperty(attributeKey)) {
        defaultObj[attributeKey] = overrideObject[attributeKey];
      } else {
        console.warn('Key [' + attributeKey + '] not found in object merging process.', reference);
      }
    }

    return defaultObj;
  }

  function requestCompleted_() {
      if (typeof innityAppsJsonLoaded === 'function') {
        let completedJSONData = JSON.parse(jsonData_);
        let currentItem = getItemByFeedType_(completedJSONData);

        mergeCampaignAndFillers_(currentItem);
        shuffleItems_(currentItem);

        if (extraOptions_.limit != 0) {
          currentItem = currentItem.slice(0, extraOptions_.limit);
          completedJSONData.item = currentItem;
        }

        innityAppsJsonLoaded(completedJSONData);
      }
  }

  function mergeCampaignAndFillers_(currentItem) {
    if (extraOptions_.feedType !== 'merge') {
      return;
    }

    let jsonData_campaign = {}
    let jsonData_filler = {}

    jsonData_campaign.feed_data = [];
    jsonData_campaign.feed_source = currentItem.feed_source;
    jsonData_filler.feed_data = [];
    jsonData_filler.feed_source = currentItem.feed_source;

    currentItem.forEach((feed_data) => {
      switch (feed_data.type) {
        case 'campaign':
          new_landing = feed_data.tracking_domain + "/click/?campaignid=" + feed_data.campaign_id + "&adid=" + feed_data.ad_id + "&zoneid=" + InnityHTMLAd.zoneid + "&pubid=" + InnityHTMLAd.pubid + "&cb=" + InnityHTMLAd.cb + "&ex=" + innity_exclk + "&pcu=" + InnityHTMLAd.pcu + "&auth=" + InnityHTMLAd.auth + "&ref=" + InnityHTMLAd.ref + "&url=";
          feed_data.landing_url = new_landing + encodeURIComponent(feed_data.landing_url);

          for (let landing_index in feed_data.expanded[0].landing_url) {
              feed_data.expanded[0].landing_url[landing_index] = new_landing + encodeURIComponent(feed_data.expanded[0].landing_url[landing_index]);
          }
          jsonData_campaign.feed_data.push(feed_data);
          break;
        case 'filler':
          jsonData_filler.feed_data.push(feed_data);
          break;
      }
    });

    if (jsonData_campaign.feed_data.length <= 0) {
      return;
    }

    currentItem = jsonData_campaign.feed_data.concat(jsonData_filler.feed_data);

    return currentItem;
  }

  function shuffleItems_(array) {
    let currentIndex = array.length;
    let temporaryValue = 0;
    let randomIndex = 0;

    if (extraOptions_.shuffle === false) {
      return;
    }
  
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
}