let innityAppsImpressionTrackArr = [];
let innityAppsImpressionLinkArr = [];

function innityAppsAddImpressionTag(impressionTag) {
  if (typeof impressionTag['id'] !== "string") {
    return;
  }

  if (typeof impressionTag['link'] !== "string") {
    return;
  }

  innityAppsImpressionLinkArr.push(impressionTag);
}

function innityAppsImpressionTrack(id) {
  if (innityAppsImpressionLinkArr.length < 1) {
    return;
  }

  if (innityAppsImpressionTrackArr.indexOf(id) != -1) {
    return;
  }

  innityAppsImpressionTrackArr.push(id);

  let impressionTag = innityAppsImpressionLinkArr.find(impression => impression.id === id);
  (new Image()).src = impressionTag.link;
	console.log("**impression sent:" + impressionTag.id);
}
