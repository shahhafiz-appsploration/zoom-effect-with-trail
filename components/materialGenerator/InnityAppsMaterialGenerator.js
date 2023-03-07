let innityAppsMaterialGeneratorVersion = '6.0.0';
let innityAppsTotalImage = 0;

function innityAppsGenerateMainContent(container, waitForImageLoad = false) {
  for (let i = 0; i < innityAppsMaterials.length; i++) {
    innityAppsMaterialGenerator(innityAppsMaterials[i], container, waitForImageLoad);
  }

  if (waitForImageLoad === false || innityAppsTotalImage === 0) {
    innityAppsMaterialsLoadedCompleted();
  }
}

function innityAppsGifToMp4(elementData) {
  if (elementData.elType !== 'img') {
    return;
  }

  if (typeof elementData.isGifConverted !== 'boolean') {
    return;
  }

  if (elementData.isGifConverted === false) {
    return;
  }
  
  let imgSrc = elementData.attrs.src;
  if (elementData.attrs['data-src'] !== undefined) {
    // Some template is using data-src to load image source before user engaged.
    imgSrc = elementData.attrs['data-src'];
  }

  if (imgSrc === undefined) {
    return;
  }

  if (imgSrc.toLowerCase().indexOf('gif') === -1) {
    return;
  }

  elementData.elType = 'video';
  elementData.attrs.src = imgSrc.toLowerCase().replace('gif', 'mp4');
  if (elementData.attrs['data-src'] !== undefined) {
    // Some template is using data-src to load image source before user engaged.
    elementData.attrs.src = '';
    elementData.attrs['data-src'] = imgSrc.toLowerCase().replace('gif', 'mp4');
  }
  elementData.attrs.preload = 'metadata';
  elementData.attrs.autoplay = '';
  elementData.attrs.muted = '';
  elementData.attrs.loop = '';
  elementData.attrs.playsinline = '';

  if (elementData.cssClass === undefined) {
    elementData.cssClass= [];
  }
  elementData.cssClass.push('innity-apps-animated-gif-video');
}

function innityAppsGetWebpParentEl(elementData, materialEl) {
  if (typeof elementData.isWebp !== 'boolean') {
    return null;
  }

  if (elementData.isWebp === false) {
    return null;
  }

  if (elementData.elType !== 'img') {
    return null;
  }

  if (typeof elementData.attrs === 'undefined' || typeof elementData.attrs !== 'object') {
    return null;
  }

  let childEl = materialEl;
  let parentEl = document.createElement('picture');

  if (typeof elementData.cssClass === 'object' && typeof elementData.cssClass.length === 'number') {
    for (let i = 0; i < elementData.cssClass.length; i++) {
      parentEl.classList.add(elementData.cssClass[i]);
    }
  }

  let fileSrc = elementData.attrs.src;
  fileSrc = fileSrc.substr(0, fileSrc.lastIndexOf(".")) + ".webp";
  let attrChildData = innityAppsImagePreviewCacheBuster(fileSrc, 'src');

  let sourceEl = document.createElement('source');
  sourceEl.setAttribute('srcset', attrChildData);
  sourceEl.setAttribute('type', 'image/webp');

  parentEl.appendChild(sourceEl);
  parentEl.appendChild(childEl);

  return parentEl;
}

function innityAppsImagePreviewCacheBuster(attrData, attrName) {
  let attrChildData = attrData;

  if (typeof(innityAppsIsPreview) === "undefined") {
    return attrChildData;
  }

  if (attrName === 'src' || attrName === 'data-src') {
    attrChildData += '?t=' + new Date().getTime();
  }

  return attrChildData;
}

/**
 * Generate HTML element based on elementData attribute. <br />
 * elementData.elType => type of created element <br/>
 * elementData.id => id of created element <br/>
 * elementData.cssClass => CSS classes of created element, is an array of string <br/>
 * elementData.innerHTML => direct content of created element <br/>
 * elementData.clickFunc => function called when created element is clicked, must be function name <br/>
 * elementData.clickTag => clickTag trigger by created element <br/>
 * elementData.cssStyle => inline CSS style of created element, object of cssStyleAttributeName => value <br/> eg:{'backgroundColor': 'rgba(255, 0, 148, 1)} <br/>
 * elementData.attrs => Attributes of created element, object of attributeName => value <br/> eg:{src: 'my_image.png'} <br/>
 * elementData.childs => children inside created element, array of elementData object <br/>
 * @param {object} elementData
 * @param {element} container
 * @param {boolean} waitForImageLoad Default is FALSE, set TRUE will wait for image loaded before call innityAppsBannerLoaded.
 */
function innityAppsMaterialGenerator(elementData, container, waitForImageLoad = false) {
  innityAppsGifToMp4(elementData);

  let elementType = (typeof elementData.elType === 'undefined') ? 'div' : elementData.elType;
  let materialEl = document.createElement(elementType);
  let parentEl = innityAppsGetWebpParentEl(elementData, materialEl);

  innityAppsWaitForImageHandler(waitForImageLoad, materialEl, elementType);

  if (elementType === 'svg' || elementType === 'path') {
    materialEl = document.createElementNS('http://www.w3.org/2000/svg', elementType);
  }

  if (typeof elementData.id !== 'undefined') {
    materialEl.setAttribute('id', elementData.id);
  }

  if (typeof elementData.cssClass === 'object' && typeof elementData.cssClass.length === 'number') {
    for (let i = 0; i < elementData.cssClass.length; i++) {
      materialEl.classList.add(elementData.cssClass[i]);
    }
  }

  if (typeof elementData.innerHTML !== 'undefined') {
    materialEl.innerHTML = elementData.innerHTML;
  }

  if (typeof elementData.impressionTag !== 'undefined' && typeof elementData.impressionTag === 'object') {
    if (typeof innityAppsAddImpressionTag !== 'function') {
      console.error('impressionTag exist but innityAppsAddImpressionTag function doesnt exist');
      return;
    }

    innityAppsAddImpressionTag(elementData.impressionTag);
  }

  if (typeof elementData.clickFunc === 'function') {
    materialEl.addEventListener('click', function(e) {
      e.stopPropagation();
      elementData.clickFunc(materialEl);
    }, false);
  }

  if (typeof elementData.clickTag !== 'undefined') {
    materialEl.addEventListener('click', function(e) {
      e.stopPropagation();
      innityAppsTriggerClickTag(elementData.clickTag);
    }, false);
  }

  if (typeof elementData.cssStyle !== 'undefined' && typeof elementData.cssStyle === 'object') {
    for (let cssKey in elementData.cssStyle) {
      materialEl.style[cssKey] = elementData.cssStyle[cssKey];
    }
  }

  if (typeof elementData.androidAR !== 'undefined' && typeof elementData.androidAR === 'string') {
    let currentUrl = window.location.href;
    let curArFilePath = currentUrl.substr(0, currentUrl.lastIndexOf('/') + 1) + elementData.androidAR;
    let curArPath = `intent://arvr.google.com/scene-viewer/1.0?file=${curArFilePath}&mode=ar_only#Intent;scheme=https;package=com.google.android.googlequicksearchbox;action=android.intent.action.VIEW;S.browser_fallback_url=https://developers.google.com/ar;end;`;
    materialEl.setAttribute('rel', 'ar');
    materialEl.setAttribute('href', curArPath);
  }

  if (typeof elementData.iosAR !== 'undefined' && typeof elementData.iosAR === 'string') {
    materialEl.setAttribute('rel', 'ar');
    materialEl.setAttribute('href', elementData.iosAR);
  }

  if (typeof elementData.attrs !== 'undefined' && typeof elementData.attrs === 'object') {
    for (let attrName in elementData.attrs) {
      if (elementType === 'svg' || elementType === 'path') {
        materialEl.setAttributeNS(null, attrName, elementData.attrs[attrName]);
      }
      else {
        let attrChildData = innityAppsImagePreviewCacheBuster(elementData.attrs[attrName], attrName);
        materialEl.setAttribute(attrName, attrChildData);
      }
    }
  }

  if (typeof elementData.childs !== 'undefined' && typeof elementData.childs === 'object') {
    for (let i = 0; i < elementData.childs.length; i++) {
      innityAppsMaterialGenerator(elementData.childs[i], materialEl, waitForImageLoad);
    }
  }
  
  if (parentEl !== null) {
    materialEl = parentEl;
  }

  container.appendChild(materialEl);
}

function innityAppsPlayGifVideo() {
  let gifVideos = document.getElementsByClassName('innity-apps-animated-gif-video');
  [...gifVideos].forEach(gifVid => {
    gifVid.muted = true;
    gifVid.play().catch((e) => {});;
  });
}

function innityAppsWaitForImageHandler(waitForImageLoad, element, elementType) {
  if (waitForImageLoad === false) {
    return;
  }

  if (elementType.toLowerCase() !== 'img') {
    return;
  }

  innityAppsTotalImage++;

  element.addEventListener('load', imageLoaded_);
  element.addEventListener('error', imageError_);

  function imageError_() {
    imageCompleted_();
  }

  function imageLoaded_() {
    imageCompleted_();
  }

  function imageCompleted_() {
    innityAppsTotalImage--;

    if (innityAppsTotalImage === 0) {
      innityAppsMaterialsLoadedCompleted();
    }
  }

}

function innityAppsMaterialsLoadedCompleted() {
  if (typeof bannerAnimationStart === 'function') {
    setTimeout(bannerAnimationStart, 100);
  }

  if (typeof innityAppsBannerLoaded === 'function') {
    setTimeout(innityAppsBannerLoaded, 100);
  }

  setInterval(innityAppsPlayGifVideo, 1000);
}
