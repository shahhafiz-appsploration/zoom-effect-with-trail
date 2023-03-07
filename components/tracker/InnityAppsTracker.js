let innityAppsTimerTrackingID = null;
let innityAppsAdTimerTrackingID = null;
/**
 * For reference purpose only.
 * @type String
 */
let innityAppsTrackerVersion = '5.0.0';

function innityAppsTrackerReset() {
  innityAppsTriggerTimerStop();
  innityAppsTrackerPauseVideo();
}

function innityAppsTriggerClickTag(clickTag) {
  innityAppsTrackerPauseVideo();
  InnityHTMLAd.click({clickTAG: clickTag});
}

function innityAppsTriggerUrl(urlToLand) {
  innityAppsTrackerPauseVideo();
  InnityHTMLAd.click({url: urlToLand});
}

function innityAppsTriggerAdTimerStartWithoutStop(id) {
  if (innityAppsAdTimerTrackingID === id) {
    return;
  }

  InnityHTMLAd.startTimer(id);
  innityAppsAdTimerTrackingID = id;
}

function innityAppsTriggerTimerStart(id) {
  if (innityAppsTimerTrackingID === id) {
    return;
  }

  innityAppsTriggerTimerStop();
  InnityHTMLAd.startTimer(id);
  innityAppsTimerTrackingID = id;
}

function innityAppsTriggerAdTimerStop() {
  if (innityAppsAdTimerTrackingID !== null) {
    InnityHTMLAd.stopTimer(innityAppsAdTimerTrackingID);
    innityAppsAdTimerTrackingID = null;
  }
}

function innityAppsTriggerTimerStop() {
  if (innityAppsTimerTrackingID !== null) {
    InnityHTMLAd.stopTimer(innityAppsTimerTrackingID);
    innityAppsTimerTrackingID = null;
  }
}

function innityAppsTriggerTrack(track) {
  InnityHTMLAd.track(track);
}

function innityAppsTrackerPauseVideo() {
  if (typeof innityAppsPauseAllVideo === 'function') {
    // Helper function to pause all video.
    innityAppsPauseAllVideo();
  }
}

function innityAppsResponsiveTriggerTimerStart(id) {
  innityAppsTriggerTimerStart(innityAppsGetResponsiveID(id));
}

function innityAppsResponsiveTriggerTrack(track) {
  innityAppsTriggerTrack(innityAppsGetResponsiveID(track));
}

function innityAppsGetResponsiveID(id) {
  if (innityAppsPlatform === undefined || innityAppsPlatform === null) {
    console.error('Missing innityAppsPlatform library! Please include InnityAppsMobilePlatform class');
    return;
  }

  let responsiveID = '';
  switch (innityAppsPlatform.getOS()) {
    case 'android':
    case 'ios':
      responsiveID = 'mobile_' + id;
      break;
    default:
      responsiveID = 'nonmobile_' + id;
      break;
  }

  return responsiveID;
}
