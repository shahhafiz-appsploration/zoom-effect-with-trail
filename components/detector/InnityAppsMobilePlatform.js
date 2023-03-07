function InnityAppsMobilePlatform() {
  this.debug = debug;
  this.getBrowserName = getBrowserName;
  this.getBrowserVersion = getBrowserVersion;
  this.getOS = getOS;
  this.getOSVersion = getOSVersion;
  this.getVersion = getVersion;
  /**
   * @deprecated This function is not valid due to we support mobile SDK which will return true same condition.
   */
  this.isIosSkype = isIosSkype;
  this.isIosWeChat = isIosWeChat;
  this.isSamsungBrowser = isSamsungBrowser;

  /**
   * Consist of <b>chrome</b>, <b>safari</b>, <b>samsungbrowser</b>,
   * <b>facebook</b>, <b>wechat</b>, <b>crios</b>, <b>line</b>,
   * <b>other</b>
   * @type String
   */
  var browserName_ = 'other';
  var browsersVersion_ = {
    'chrome': '0',
    'samsungbrowser': '0',
    'safari': '0',
    'crios': '0' // ios Chrome
  };
  /**
   * Consist of <b>ios</b>, <b>android</b> & <b>other</b>
   * @type String
   */
  var os_ = 'other';
  var osVersion_ = '0';
  var ua_ = null;
  /**
   * A checking to determine is the library latest.
   * @type String
   */
  var version_ = '5.0.0';

  initClass();

  // Public Function Section =================================================

  /**
   * For debug purpose.
   * @returns {String}
   */
  function debug() {
    var stringValue = '';
    if (os_ === 'ios') {
      stringValue = os_ + ' Version ' + osVersion_.join('.') + ' with ' + browserName_;
    } else {
      stringValue = os_ + ' Version ' + osVersion_ + ' with ' + browserName_;
    }
    return stringValue;
  }

  function getBrowserName() {
    return browserName_;
  }

  function getBrowserVersion() {
    return browsersVersion_;
  }

  function getOS() {
    return os_;
  }

  function getOSVersion() {
    return osVersion_;
  }

  function getVersion() {
    return version_;
  }

  /**
   * @deprecated This function is not valid due to we support mobile SDK which will return true same condition.
   * Please remove this function after 10 April 2021.
   * @returns {Boolean} always FALSE.
   */
  function isIosSkype() {
    return false;
  }

  /**
   * Detect iOS WeChat in app browser.
   * @returns {Boolean} TRUE if is iOS WeChat in app browser, else FALSE.
   */
  function isIosWeChat() {
    return os_ === 'ios' && browserName_ === 'wechat';
  }

  function isSamsungBrowser() {
    return browsersVersion_.samsungbrowser > 0;
  }

  // Proctected Function Section =============================================

  // Private Function Section ================================================

  function androidBrowserDetection_() {
    if (!!window.chrome && ua_.toLowerCase().indexOf('chrome') > -1) {
      browserName_ = 'chrome';
      androidChromeVersionDetection_();
    }

    if (ua_.toLowerCase().indexOf('samsungbrowser') > -1) {
      browserName_ = 'samsung';
      samsungBrowserVersionDetection_();
    }

    if (ua_.toLowerCase().indexOf('firefox') > -1) {
      browserName_ = 'firefox';
    }
  }

  function androidChromeVersionDetection_() {
    var analysis = ua_.match(/(chrome(?=\/))\/?\s*(\d+)/i) || [];
    if (analysis[1].toLowerCase() === 'chrome') {
      browsersVersion_['chrome'] = analysis[2];
    }
  }

  function browserDetection_() {
    if (os_ === 'ios') {
      iosBrowserDetection_();
    } else if (os_ === 'android') {
      androidBrowserDetection_();
    }
  }

  function iosBrowserDetection_() {
    var standalone = window.navigator.standalone;
    var isSafariKeyExist = /safari/i.test(ua_);
    var isChrome = /CriOS/i.test(ua_);

    if (!standalone && isSafariKeyExist === true) {
      if (isChrome === true) {
        browserName_ = 'chrome';
        iosChromeVersionDetection_();
        return;
      }

      var isLine = /Line/i.test(ua_);
      if (isLine === true) {
        browserName_ = 'line';
        return;
      }

      browserName_ = 'safari';
      browsersVersion_['safari'] = osVersion_.join('.');
    } else if (standalone && isSafariKeyExist === false) {
      // Standalone, homepage icon page
    } else {
      // In app browser
      if (/\bFB[\w_]+\//i.test(ua_) === true) {
        browserName_ = 'facebook';
      } else if (/\bMicroMessenger\//i.test(ua_) === true) {
        browserName_ = 'wechat';
      } else if (/\bInstagram\b/i.test(ua_) === true) {
        browserName_ = 'instagram';
      } else {
        // So far Skype don't have any key to detect.
        browserName_ = 'other';
      }
    }
  }

  function iosChromeVersionDetection_() {
    var analysis = ua_.match(/(crios(?=\/))\/?\s*(\d+)/i) || [];
    if (analysis[1].toLowerCase() === 'crios') {
      browsersVersion_['crios'] = analysis[2];
    }
  }

  function initClass() {
    ua_ = window.navigator.userAgent;

    osDetection_();
    browserDetection_();
  }

  function osDetection_() {
    if (/(iPhone|iPod|iPad)/i.test(ua_)) {
      os_ = 'ios';
      var v = (navigator.userAgent).match(/OS (\d+)_(\d+)_?(\d+)?/);
      osVersion_ = [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
    } else if (ua_.toLowerCase().indexOf('android') > -1) {
      os_ = 'android';
      var v = ua_.match(/Android (\d+(?:\.\d+){0,2})/i);
      if (v !== null) {
        osVersion_ = v[v.length - 1];
      }
    }
  }

  function samsungBrowserVersionDetection_() {
    var analysis = ua_.match(/(samsungbrowser(?=\/))\/?\s*(\d+)/i) || [];
    if (analysis[1].toLowerCase() === 'samsungbrowser') {
      browsersVersion_['samsungbrowser'] = analysis[2];
    }
  }

}
