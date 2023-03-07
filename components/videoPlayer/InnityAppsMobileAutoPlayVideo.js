function generateVideoSVGIcon() {
    this.fullstatus = _fullstatussvg;
    this.nomp4 = _nomp4statussvg;
    this.midcircle = _midcircle;
    this.midplay = _midplaysvg;
    this.midnosound = _midnosoundsvg;
    this.midreplay = _midreplaysvg;
    this.audio = _audiosvg;
    this.fullscreen = _fssvg;
    this.landing = _landingsvg;
    this.controlplay = _controlplaysvg;
    this.watingcircle = watingcircle;

    function _fullstatussvg() {
        var c = '<svg class="video-player-icons" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">';
        c += '<path class="speaker" d="M0.5,14.026H3.317V7.973H0.5v6.053Zm4.347,0.132,6.54,6.339V1.5L4.849,7.842v6.316Z"></path>';
        c += '<polygon class="cross" points="20.672 8.412 19.641 7.381 16.925 10.097 14.209 7.381 13.178 8.412 15.894 11.128 13.178 13.844 14.209 14.875 16.925 12.159 19.641 14.875 20.672 13.844 17.956 11.128 20.672 8.412"></polygon>';
        c += '<path class="play" d="M8 5v14l11-7z" />';
        c += '<path class="pause" d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />';
        c += '<path class="replay" d="M17.825,6.442l-0.014-.013,2.165-2.062H14v5.689l2.2-2.1,0.014,0.013a5.48,5.48,0,0,1,.277,7.744q-0.133.143-.277,0.277a6.179,6.179,0,0,1-8.431,0A5.48,5.48,0,0,1,7.507,8.25q0.133-.143.277-0.277a6.06,6.06,0,0,1,3.484-1.618V4.177A8.389,8.389,0,0,0,6.175,6.442a7.572,7.572,0,0,0-.383,10.7q0.185,0.2.383,0.383a8.539,8.539,0,0,0,11.651,0,7.572,7.572,0,0,0,.383-10.7Q18.024,6.627,17.825,6.442Z" />';
        c += '</svg>';
        return c;
    };
    function _nomp4statussvg() {
        var c = '<svg class="buffer" viewBox="0 0 40 40"><circle class="loader-base" cx="20" cy="19" r="16" />';
        c += '<circle class="loader-dot" cx="20" cy="19" r="16" /></svg>';
        return c;
    };
    function _midcircle() {
        var c = '<svg class="buffer" viewBox="0 0 80 80" preserveAspectRatio="xMidYMid meet"><circle class="loader-base" cx="40" cy="39" r="36" />';
        c += '<circle class="loader-dot" cx="40" cy="39" r="36" /></svg>';
        return c;
    };
    function _midplaysvg() {
        var c = '<svg class="video-player-icons" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">';
        c += '<path class="play" d="M8 5v14l11-7z" /></svg>';
        return c;
    };
    function _midnosoundsvg() {
        var c = '<svg class="video-player-icons" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">';
        c += '<path class="speaker" d="M0.5,14.026H3.317V7.973H0.5v6.053Zm4.347,0.132,6.54,6.339V1.5L4.849,7.842v6.316Z"></path>';
        c += '<polygon class="cross" points="20.672 8.412 19.641 7.381 16.925 10.097 14.209 7.381 13.178 8.412 15.894 11.128 13.178 13.844 14.209 14.875 16.925 12.159 19.641 14.875 20.672 13.844 17.956 11.128 20.672 8.412"></polygon>';
        c += '</svg>';
        return c;
    };
    function _midreplaysvg() {
        var c = '<svg class="video-player-icons" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">';
        c += '<path class="replay" d="M17.825,6.442l-0.014-.013,2.165-2.062H14v5.689l2.2-2.1,0.014,0.013a5.48,5.48,0,0,1,.277,7.744q-0.133.143-.277,0.277a6.179,6.179,0,0,1-8.431,0A5.48,5.48,0,0,1,7.507,8.25q0.133-.143.277-0.277a6.06,6.06,0,0,1,3.484-1.618V4.177A8.389,8.389,0,0,0,6.175,6.442a7.572,7.572,0,0,0-.383,10.7q0.185,0.2.383,0.383a8.539,8.539,0,0,0,11.651,0,7.572,7.572,0,0,0,.383-10.7Q18.024,6.627,17.825,6.442Z" />';
        c += '</svg>';
        return c;
    };
    function _audiosvg() {
        var c = '<svg class="video-audiosvg" viewBox="0 0 22 22" preserveAspectRatio="xMidYMid meet">';
        c += '<path class="speaker" d="M0.5,14.026H3.317V7.973H0.5v6.053Zm4.347,0.132,6.54,6.339V1.5L4.849,7.842v6.316Z" />';
        c += '<path class="wave2" d="M14,3.154V4.569a6.721,6.721,0,0,1,5.941,6.6A6.721,6.721,0,0,1,14,17.76v1.42a8.107,8.107,0,0,0,7.5-8.016A8.1,8.1,0,0,0,14,3.154Z" />';
        c += '<path class="wave1" d="M17.993,11.165a4.257,4.257,0,0,0-4-4.41V8.289a2.779,2.779,0,0,1,2.584,2.876A2.781,2.781,0,0,1,14,14.042v1.534A4.259,4.259,0,0,0,17.993,11.165Z" />';
        c += '<polygon class="cross" points="20.672 8.412 19.641 7.381 16.925 10.097 14.209 7.381 13.178 8.412 15.894 11.128 13.178 13.844 14.209 14.875 16.925 12.159 19.641 14.875 20.672 13.844 17.956 11.128 20.672 8.412" />';
        c += '</svg>';
        return c;
    };
    function _fssvg() {
        var c = '<svg class="video-fssvg" viewBox="0 0 22 22" preserveAspectRatio="xMidYMid meet">';
        c += '<path class="openfs" d="M4.354,9.162a1.1,1.1,0,0,0,1.1-1.1V6.717l3.34,3.342A0.893,0.893,0,0,0,10.056,8.8L6.714,5.454h1.35a1.1,1.1,0,1,0,0-2.2H4.354a1.1,1.1,0,0,0-1.1,1.1h0V8.063a1.1,1.1,0,0,0,1.1,1.1h0Zm7.375,3.815,3.344,3.347H13.726a1.1,1.1,0,0,0,0,2.2h3.7a1.1,1.1,0,0,0,1.1-1.1V13.717a1.1,1.1,0,1,0-2.2,0h0v1.351L12.982,11.72a0.893,0.893,0,0,0-1.257,1.257h0Z" />';
        c += '<path class="closefs" d="M9.2,4.392a1.1,1.1,0,0,0-1.1,1.1v1.34L4.758,3.5A0.893,0.893,0,0,0,3.5,4.758L6.832,8.1H5.487a1.1,1.1,0,0,0,0,2.2H9.2a1.1,1.1,0,0,0,1.1-1.1h0V5.491a1.1,1.1,0,0,0-1.1-1.1h0Zm9.119,12.67-3.345-3.35h1.346a1.1,1.1,0,1,0,0-2.2h-3.7a1.1,1.1,0,0,0-1.1,1.1V16.32a1.1,1.1,0,1,0,2.2,0h0V14.972l3.344,3.345a0.893,0.893,0,0,0,1.258-1.255h0Z" />';
        c += '</svg>';
        return c;
    };
    function _landingsvg() {
        var c = '<svg class="icon-cta" viewBox="0 0 12 12" preserveAspectRatio="xMidYMid meet"><path d="M6,0.5A5.5,5.5,0,1,0,11.5,6,5.5,5.5,0,0,0,6,.5ZM5.2,9.736L3.9,8.443,6.346,6,3.9,3.557,5.2,2.264,8.932,6Z"></path></svg>';
        return c;
    };
    function _controlplaysvg() {
        var c = '<svg class="video-playpausesvg" viewBox="0 0 22 22" preserveAspectRatio="xMidYMid meet"><path class="play_pause_path" d="M1.46,22L11,16.47L11,5.53L1.46,0M11,16.47L20.54,11L20.54,11L11,5.53">';
        c += '<animate id="play_pause_animation" begin="indefinite" attributeType="XML" attributeName="d" fill="freeze" from="M1.46,22L11,16.47L11,5.53L1.46,0M11,16.47L20.54,11L20.54,11L11,5.53" to="M1.46,22L7.945283,22L7.945283,0L1.46,0M14.096226,22L20.54,22L20.54,0L14.096226,0" dur=".1s" keySplines=".4 0 1 1" repeatCount="1"></animate>';
        c += '</path></svg>';
        return c;
    };
    function watingcircle() {
        var c = '<svg class="video-waiting-circle" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">';
        c += '<defs><linearGradient id="innity-apps-waiting-gradient" x1="30.17" y1="23.78" x2="3.06" y2="4.42" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" gradientUnits="userSpaceOnUse"><stop offset=".12" stop-color="#fff"/><stop offset=".79" stop-color="#fff" stop-opacity="0"/></linearGradient></defs>';
        c += '<path fill:url(#innity-apps-waiting-gradient) d="M11.97,23.72c-.6,0-1.08-.48-1.08-1.08s.48-1.08,1.08-1.08c5.27,0,9.56-4.29,9.56-9.56S17.25,2.44,11.97,2.44c-.6,0-1.08-.48-1.08-1.08s.48-1.08,1.08-1.08c6.46,0,11.72,5.26,11.72,11.72s-5.26,11.72-11.72,11.72Z"/>';
        c += '</path></svg>';
        return c;
    };
};

function InnityMultipleVideoFactory(multiOptions, visibilityOption = {}) {
    this.getCurrentVideoEl = getCurrentVideoEl;
    this.getCurrentVideoPlayer = getCurrentVideoPlayer;
    this.mute = mute;
    this.pause = pause;
    this.pauseAll = pauseAll;
    this.play = play;
    this.pauseTracker = pauseTracker;
    this.resumeTracker = resumeTracker;
    this.setCurrentIndex = setCurrentIndex;
    this.unmute = unmute;

    let isVideoPlayerMuted_ = true;
    let currIndex_ = 0;
    let videoPlayerArr_ = [];
    let defaultExtraOptions = {
        // =Required=
        id: '',
        name: '',
        // ==========
        webm: null,
        mp4: null,
        poster: null,
        tracking: true,
        playInline: false,
        autoplay: true,
        loop: true,
        hideStatus: false,
        hideFullscreenIcon: false,
        hideReplayIcon: false,
        preventClickPropagation: false,
        forceFallback: false,
        forceFullScreen: true,
        cpm: true,
        country: 'MY',
        // Callback events options.
        onLoad: null,
        onPaused: null,
        onEnded: null,
        onClickPlay: null,
        onVideoTimeUpdate: null,
        onEnterFullscreen: null,
        onExitFullscreen: null,
        // ==========
        // Fallback options
        // ==========
        mpg: null,
        canvaswidth: '320',
        canvasheight: '180',
        volume: '100',
        pauseable: false,
        clicktoUnmute: false,
        hideMpgWhenHtmlPlayed: true,
        clickCallback: null,
        videoEndedCallback: null,
        autostart: true,
        automute: true,
        mouseoverSound: false,
        advertisementlabel: false,
        midctatext: "Click to Find Out More",
        playstatectatext: "Learn More",
        adtext: "Advertisement",
        urls: 'clickTAG',
        fullscreen: false,
        fullscreenCallBack: null
    };
    let visibilityOption_ = mergeObject_({
        bind: true,
        onHidden: null,
        onView: null
    }, visibilityOption, 'multiExtraOptions');

    initClass_();

    function initClass_() {
        initMultipleVideo_();
        setupTabVisibilityEvents_();
    }

    // Public function =========================================================

    function getCurrentVideoEl() {
        if (videoPlayerArr_[currIndex_] === null) {
            return null;
        }

        return document.getElementById(multiOptions[currIndex_].id);
    }

    function getCurrentVideoPlayer() {
        if (videoPlayerArr_[currIndex_] === null) {
            return null;
        }

        return videoPlayerArr_[currIndex_];
    }

    function mute() {
        if (videoPlayerArr_[currIndex_] === null) {
            return;
        }

        videoPlayerArr_[currIndex_].muteVideo();
    }

    function pause() {
        if (videoPlayerArr_[currIndex_] === null) {
            return;
        }

        videoPlayerArr_[currIndex_].pauseVideo();
    }

    function pauseAll() {
        let videoPlayerArrLength = videoPlayerArr_.length;
        if (videoPlayerArrLength === 0) {
            console.error('No video added into the library.');
            return;
        }

        for (let i = 0; i < videoPlayerArrLength; i++) {
            let currVideoPlayer = videoPlayerArr_[i];

            if (currVideoPlayer === null) {
                continue;
            }

            currVideoPlayer.pauseVideo();
        }
    }

    function play() {
        if (videoPlayerArr_[currIndex_] === null) {
            return;
        }

        videoPlayerArr_[currIndex_].playVideo();
    }

    function pauseTracker() {
        if (videoPlayerArr_[currIndex_] === null) {
            return;
        }

        videoPlayerArr_[currIndex_].pauseTracker();
    }

    function resumeTracker() {
        if (videoPlayerArr_[currIndex_] === null) {
            return;
        }

        videoPlayerArr_[currIndex_].resumeTracker();
    }

    function setCurrentIndex(designerCurrIndex = 0) {
        let currIndex = designerCurrIndex - 1;

        if (currIndex > multiOptions.length) {
            return;
        }

        currIndex_ = currIndex;
    }

    function unmute() {
        if (videoPlayerArr_[currIndex_] === null) {
            return;
        }

        videoPlayerArr_[currIndex_].unmuteVideo();
    }

    // Private function ========================================================

    function checkOptionsValid_(currMergedOption) {
        if (currMergedOption.id === '') {
            console.error('Video ID have not been set.');
        }

        if (currMergedOption.name === '') {
            console.error('Video Name have not been set.');
        }

        return;
    }

    function generateCurrVideo_(currOption) {
        if (currOption === null) {
            return null;
        }

        let currMergedOption = mergeObject_(defaultExtraOptions, currOption, 'multiExtraOptions');

        checkOptionsValid_(currMergedOption);

        if (currMergedOption.mp4 === null) {
            currMergedOption.mp4 = `${currMergedOption.name}.mp4`;
        }

        if (currMergedOption.webm === null) {
            currMergedOption.webm = `${currMergedOption.name}.webm`;
        }

        let currVideoPlayer_ = new InnityAppsMobileAutoPlayVideo(
            currMergedOption.id,
            currMergedOption.name,
            currMergedOption,
        );

        return currVideoPlayer_;
    }

    function initMultipleVideo_() {
        for (let i = 0; i < multiOptions.length; i++) {
            let currOption = multiOptions[i];
            let curVideoPlayer = generateCurrVideo_(currOption);
            videoPlayerArr_.push(curVideoPlayer);
        }

        let soundBtns = document.getElementsByClassName('audio');
        for (let i = 0; i < soundBtns.length; i++) {
            soundBtns[i].addEventListener('click', onSoundBtnClicked_);
        }

        let videoEls = document.getElementsByClassName('apps-creative-video');
        for (let i = 0; i < videoEls.length; i++) {
            videoEls[i].addEventListener('play', onVideoPlay_, false);
        }
    }

    function mergeObject_(defaultObj, overrideObject, reference) {
        for (var attributeKey in overrideObject) {
            if (defaultObj.hasOwnProperty(attributeKey)) {
                defaultObj[attributeKey] = overrideObject[attributeKey];
            }
            else {
                console.warn('[Version ' + version + '] Key [' + attributeKey + '] not found in object merging process.', reference);
            }
        }

        return defaultObj;
    }

    function onSoundBtnClicked_() {
        if (videoPlayerArr_[currIndex_] === null) {
            return;
        }

        if (videoPlayerArr_[currIndex_].getIsVideoMuted() === true) {
            isVideoPlayerMuted_ = false;
        } else {
            isVideoPlayerMuted_ = true;
        }
    }

    function onVideoPlay_() {
        if (videoPlayerArr_[currIndex_] === null) {
            return;
        }

        if (isVideoPlayerMuted_ === false) {
            videoPlayerArr_[currIndex_].unmuteVideo();
        } else {
            videoPlayerArr_[currIndex_].muteVideo();
        }
    }

    function onVisibilityHidden_() {
        if (typeof visibilityOption_.onHidden !== 'function') {
            return;
        }

        visibilityOption_.onHidden();
    }

    function onVisibilityView_() {
        if (typeof visibilityOption_.onView !== 'function') {
            return;
        }

        visibilityOption_.onView();
    }

    function setupTabVisibilityEvents_() {
        if (visibilityOption_.bind === false) {
            return;
        }

        if (typeof (document.msHidden) !== 'undefined') {
            visibilityHidden = 'msHidden';
            document.addEventListener('msvisibilitychange', visibilityChange_, false)
        } else if (typeof (document.webkitHidden) !== 'undefined') {
            visibilityHidden = 'webkitHidden';
            document.addEventListener('webkitvisibilitychange', visibilityChange_, false);
        } else {
            document.addEventListener('visibilitychange', visibilityChange_, false);
        }
    }

    function visibilityChange_() {
        if (document[visibilityHidden] === true) {
            onVisibilityHidden_();
        } else {
            onVisibilityView_();
        }
    }
}

function InnityAppsMobileAutoPlayVideo(containerID, videoID, options, videoScreenCapImgSrc, canvasOptions, videouioptions) {
    this.checkVideoSoundIcon = checkVideoSoundIcon;
    this.getIsVideoMuted = getIsVideoMuted;
    this.playVideo = playVideo;
    this.forcePlayVideo = forcePlayVideo;
    this.pauseVideo = pauseVideo;
    this.replayVideo = replayVideo;
    this.muteVideo = muteVideo;
    this.unmuteVideo = unmuteVideo;
    this.getFallbackPlayer = getFallbackPlayer;
    this.pauseTracker = pauseTracker;
    this.resumeTracker = resumeTracker;
    this.firstVideoClicked = firstVideoClicked;
    this.initContinueWatch = initContinueWatch;
    this.userClicked = userClicked;
    this.setCallbackContinueWatch = setCallbackContinueWatch;
    this.setCallbackPlayerActive = setCallbackPlayerActive;
    this.heavyVideo = heavyVideo;

    var container = document.getElementById(containerID);
    var platform;
    var version = '4.7.1'; // Updated 19/Jan/2023
    var videoPlayer = null;
    var fallbackPlayer = null;

    var extraOptions = mergeObject({
        webm: null,
        mp4: null,
        poster: null,
        tracking: true,
        playInline: false,
        autoplay: true,
        loop: true,
        hideStatus: false,
        hideFullscreenIcon: false,
        hideReplayIcon: false,
        preventClickPropagation: false,
        forceFallback: false,
        forceFullScreen: true,
        cpm: true,
        country: 'MY',
        // Callback events options.
        onLoad: null,
        onPaused: null,
        onEnded: null,
        onClickPlay: null,
        onVideoTimeUpdate: null,
        onEnterFullscreen: null,
        onExitFullscreen: null,
        onPlayerActive: null,
        // ==========
        // Fallback options
        // ==========
        mpg: null,
        canvaswidth: '320',
        canvasheight: '180',
        volume: '100',
        pauseable: false,
        clicktoUnmute: false,
        continueWatch: {
            text: 'Keep watching',
            tracks: {
                thumbnail: null,
                timercode: ''
            },
            fullVideoSrc: '',
            restart: true,
            callback: null
        },
        hideMpgWhenHtmlPlayed: true,
        clickCallback: null,
        videoEndedCallback: null,
        autostart: true,
        automute: true,
        mouseoverSound: false,
        advertisementlabel: false,
        midctatext: "Click to Find Out More",
        playstatectatext: "Learn More",
        adtext: "Advertisement",
        urls: 'clickTAG',
        fullscreen: false,
        fullscreenCallBack: null
    }, options, 'extraOptions');

    initClass();

    function initClass() {
        innityAppsMobileVideoFallbackHelper();

        if (checkCreativeRequirement() === false) {
            errorLog('Creative failed to follow requirement!');
            return;
        }

        platformDetectorWrapper();

        if (isNativeVideoSupported() === true) {
            if (platform.getOS() === 'ios' || platform.getOS() === 'android') {
                videoPlayer = new MobileNativeVideo(container, videoID, extraOptions, platform);
            }
            else {
                videoPlayer = new DesktopNativeVideo(container, videoID, extraOptions, platform);
            }
        }
        else {
            fallbackPlayer = new InnityAppsVideoPreview(containerID, videoID, extraOptions, videoScreenCapImgSrc, canvasOptions, videouioptions);
        }

        console.log("Innity_video_player_version:--" + version);
    };

    function checkCreativeRequirement() {
        if (innityAppsMobileVideoElementGenerator === null) {
            errorLog('generateMaterial or innityAppsMaterialGenerator function didn\'t exist.');
            return false;
        }

        if (typeof (InnityHTMLAd) !== 'object') {
            errorLog('InnityHTMLAd object from Advenue didn\'t exist.');
            return false;
        }

        if (typeof (Browser) !== 'function' && typeof (MobilePlatform) !== 'function' &&
            typeof InnityAppsMobilePlatform !== 'function') {
            errorLog('Browser detection function from Browser.js OR MobilePlatform.js didn\'t exist.');
            return false;
        }

        if (container === null) {
            errorLog('Container with id [' + containerID + '] cannot be found.');
            return false;
        }

        if (extraOptions.webm === null && extraOptions.mp4 === null) {
            console.warn('Both MP4 & WEBM video source didn\'t exist.');
        }

        return true;
    };
    function platformDetectorWrapper() {
        if (typeof (Browser) === 'function') {
            platform = new Browser();
        }
        else if (typeof (MobilePlatform) === 'function') {
            platform = new MobilePlatform();
        } else if (typeof InnityAppsMobilePlatform === 'function') {
            platform = new InnityAppsMobilePlatform();
        }
    };
    function isNativeVideoSupported() {
        if (extraOptions.forceFallback === true) {
            return false;
        }

        if (platform.getOS() === 'ios') {
            if (platform.getOSVersion()[0] < 10) {
                return false;
            }
        }

        if (platform.getBrowserVersion().chrome <= 53 && platform.getBrowserVersion().chrome > 0) {
            return false;
        }

        if (platform.getBrowserVersion().samsungbrowser > 0 && platform.getBrowserVersion().chrome < 62) {
            return false;
        }

        return true;
    };

    function mergeObject(defaultObj, overrideObject, reference) {
        for (var attributeKey in overrideObject) {
            if (defaultObj.hasOwnProperty(attributeKey)) {
                if ((typeof defaultObj[attributeKey] === "object") && (defaultObj[attributeKey] !== null)) {
                    if (Array.isArray(defaultObj[attributeKey]) === false) {
                        mergeObject(defaultObj[attributeKey], overrideObject[attributeKey], reference);
                    }
                    else {
                        defaultObj[attributeKey].forEach((elem_, index_) => {
                            if ((typeof elem_ === "object") && (elem_ !== null)) {
                                if (Array.isArray(elem_) === false) {
                                    mergeObject(defaultObj[attributeKey][index_], overrideObject[attributeKey][index_], reference);
                                }
                            }
                        })
                    }
                    continue;
                }
                defaultObj[attributeKey] = overrideObject[attributeKey];
            }
            else {
                console.warn('[Version ' + version + '] Key [' + attributeKey + '] not found in object merging process.', reference);
            }
        }

        return defaultObj;
    };
    function errorLog(msg) {
        console.error('[Version ' + version + '] ' + msg);
    };

    function checkVideoSoundIcon() {
        if (typeof (videoPlayer.checkSoundIcon) === 'function') {
            videoPlayer.checkSoundIcon();
        }
    }
    function getIsVideoMuted() {
        if (typeof (videoPlayer.isVideoMuted) === 'function') {
            return videoPlayer.isVideoMuted();
        }

        return false;
    }
    function playVideo() {
        videoPlayer.play();
    };
    function forcePlayVideo() {
        videoPlayer.play();
    }
    function pauseVideo() {
        videoPlayer.pause();
    };
    function replayVideo() {
        videoPlayer.replay();
    };
    function muteVideo() {
        videoPlayer.mute();
    };
    function unmuteVideo() {
        videoPlayer.unmute();
    };

    function getFallbackPlayer() {
        return fallbackPlayer;
    };

    function pauseTracker() {
        videoPlayer.pauseTracker();
    };

    function resumeTracker() {
        videoPlayer.resumeTracker();
    }

    function firstVideoClicked() {
        if (fallbackPlayer !== null) {
            return fallbackPlayer.videoFirstClicked();
        }
        return videoPlayer.videoFirstClicked();
    }

    function initContinueWatch() {
        if (fallbackPlayer !== null) {
            return;
        }
        if (parseFloat(extraOptions.continueWatch.tracks.timercode) === 'NaN' || extraOptions.continueWatch.text === null || extraOptions.continueWatch.text == "" || Boolean(extraOptions.continueWatch.tracks.timercode) === false || extraOptions.continueWatch.tracks.timercode === null) {
            errorLog('Incorrect continue watch information provided on ' + videoID + ' detected.');
            return;
        }
        videoPlayer.initContinueWatch();
    }

    function userClicked() {
        if (fallbackPlayer !== null) {
            return;
        }
        videoPlayer.userClicked();
    }

    function setCallbackContinueWatch(fn) {
        if(extraOptions.continueWatch.callback !== null) {
            return;
        }
        if(typeof fn === 'function') {
            extraOptions.continueWatch.callback = fn;
        }
    }

    function setCallbackPlayerActive(fn) {
        if(extraOptions.onPlayerActive !== null) {
            return;
        }
        if(typeof fn === 'function') {
            extraOptions.onPlayerActive = fn;
        }
    }

    function heavyVideo() {
        if(fallbackPlayer !== null) {
            return;
        }
        return videoPlayer.heavyVideo();
    }
}

function MobileNativeVideo(container, videoID, extraOptions, platform) {
    this.checkSoundIcon = checkSoundIcon;
    this.isVideoMuted = isVideoMuted;
    this.play = play;
    this.pause = pause;
    this.replay = replay;
    this.mute = mute;
    this.unmute = unmute;
    this.pauseTracker = pauseTracker;
    this.resumeTracker = resumeTracker;
    this.videoFirstClicked = videoFirstClicked;
    this.initContinueWatch = initContinueWatch;
    this.userClicked = userClicked;
    this.heavyVideo = heavyVideo;

    var videoWrapperEl;
    var mutedVideoEl;
    var videoControlUI;
    var videoContinueUI;
    var timeLeftEl;
    var isVideoEnded = false;
    var videoHasSound = null;
    let videoReplayed = false;
    var performanceTracker;
    var userStartClicked = false;
    var videoSvg = new generateVideoSVGIcon();
    let isWaitingForReplay = false;
    let displayedContinueWatch = false;
    let forceDisplayClickContinue = false;
    let isHeavyVideo = false;
    let isVideoReplaced = false;
    let heavyVideoReady = false;
    let requestReplaceVideo = false;

    let disableSoundToggle_ = false;

    initClass();

    function initClass() {
        videoWrapperEl = document.createElement('div');
        videoWrapperEl.id = videoID + '-wrapper';
        videoWrapperEl.classList.add('apps-video-wrapper');

        generatePoster();
        generateMutedVideo();

        // iOS WeChat cannot trigger by user without the controls.
        if (platform.isIosWeChat() === false) {
            generateControls();
        }

        container.appendChild(videoWrapperEl);

        if (extraOptions.tracking === true) {
            InnityHTMLAd.attachVideo(mutedVideoEl);
            performanceTracker = new PerformanceTracker(mutedVideoEl);
        }
    };

    function generateMutedVideo() {
        mutedVideoEl = document.createElement('video');
        mutedVideoEl.id = videoID;
        mutedVideoEl.setAttribute('preload', 'metadata');
        mutedVideoEl.setAttribute('playsinline', '');
        mutedVideoEl.setAttribute('muted', '');
        mutedVideoEl.setAttribute('controlsList', 'nodownload');
        mutedVideoEl.classList.add('apps-creative-video');
        mutedVideoEl.style.opacity = 0;
        mutedVideoEl.poster = extraOptions.poster;
        mutedVideoEl.onpageshow = function (event) {
            mutedVideoEl.currentTime = 0;
            mutedVideoEl.play();
        }
        mute();

        mutedVideoEl.volume = extraOptions.volume / 100;

        if (extraOptions.autoplay === true) {
            mutedVideoEl.setAttribute('autoplay', '');
        }

        if (extraOptions.mp4 !== null) {
            mutedVideoEl.appendChild(generateMp4Source());
        }
        if (extraOptions.webm !== null) {
            mutedVideoEl.appendChild(generateWebmSource());
        }

        // iOS WeChat cannot trigger by user without the controls.
        if (platform.isIosWeChat() === true) {
            mutedVideoEl.setAttribute('controls', '');
            mutedVideoEl.style.opacity = 1;
        }
        else {
            bindMutedVideoEvents();
        }

        videoWrapperEl.appendChild(mutedVideoEl);
    };
    function bindMutedVideoEvents() {
        mutedVideoEl.addEventListener('loadeddata', eventAutoPlayVideoOnLoad, false);
        mutedVideoEl.addEventListener('play', videoPlayed, false);
        mutedVideoEl.addEventListener('pause', videoPaused, false);
        mutedVideoEl.addEventListener('ended', videoEnded, false);
        mutedVideoEl.addEventListener('timeupdate', videoTimeUpdate, false);
        mutedVideoEl.addEventListener('timeupdate', extraOptions.onVideoTimeUpdate, false);
        mutedVideoEl.addEventListener('fullscreenchange', fullscreenChanged, false);
        mutedVideoEl.addEventListener('webkitfullscreenchange', fullscreenChanged, false);
        mutedVideoEl.addEventListener('webkitendfullscreen', iosDelayFullScreenEnded, false);
        mutedVideoEl.addEventListener('canplay', eventVideoCanPlay, false);
        // MS and Moz need document for fullscreenchange
        document.addEventListener('mozfullscreenchange', fullscreenChanged, false);
    };
    function checkSoundIcon() {
        videoControlUI.toogleSoundIcon(isVideoMuted());
    }
    function generateWebmSource() {
        var sourceEl = document.createElement('source');
        sourceEl.src = extraOptions.webm;
        sourceEl.type = 'video/webm';

        return sourceEl;
    };
    function generateMp4Source() {
        var sourceEl = document.createElement('source');
        sourceEl.src = extraOptions.mp4;
        sourceEl.type = 'video/mp4';

        return sourceEl;
    };

    function generatePoster() {
        var posterContainer = document.createElement('div');
        posterContainer.classList.add('apps-video-poster-container');

        var imageEl = document.createElement('img');
        imageEl.src = extraOptions.poster;

        posterContainer.appendChild(imageEl);
        videoWrapperEl.appendChild(posterContainer);

        generatePlayButtonForPoster();
    };
    function generatePlayButtonForPoster() {
        var buttonWrapper = document.createElement('div');
        buttonWrapper.classList.add('apps-video-poster-play-container');

        buttonWrapper.innerHTML = videoSvg.midcircle() + videoSvg.midplay();

        videoWrapperEl.appendChild(buttonWrapper);
    };

    function generateControls() {
        videoControlUI = new VideoControllerUI(controlLayerClicked, videoEnterFullScreenByUser, toggleSound, replayLayerClicked);
    };

    function generateClickContinue(bool) {
        if (bool === false) { return; }
        isHeavyVideo = true;
        if (extraOptions.continueWatch.text === null || extraOptions.continueWatch.text == "" || Boolean(extraOptions.continueWatch.tracks.timercode) === false || extraOptions.continueWatch.tracks.timercode === null) { return; }
        extraOptions.continueWatch.tracks.tracked = false;
        videoContinueUI = new VideoContinueWatchUI(callbackContinueWatch);
    }

    function controlLayerClicked(e) {
        if (extraOptions.preventClickPropagation === true) {
            if (e instanceof Event) {
                e.stopPropagation();
            }
        }

        setUserStartClicked();

        if (e instanceof Event) {
            if (e.target.id == 'btn_sound_' + videoID || e.target.id == 'btn_fs_' + videoID) {
                return;
            }
        }

        if (!extraOptions.forceFullScreen) {
            if (mutedVideoEl.paused) {
                play();
            }
            if (mutedVideoEl.muted) {
                unmute();
            }
        }
        else {
            if (extraOptions.playInline === false) {
                if (mutedVideoEl.requestFullScreen) {
                    mutedVideoEl.requestFullScreen();
                } else if (mutedVideoEl.webkitRequestFullScreen) {
                    mutedVideoEl.webkitRequestFullScreen();
                }

                if (platform.getOS() === 'ios') {
                    mutedVideoEl.webkitEnterFullScreen();
                }

                enterFullscreen();
            }

            play();
            unmute();
            setTimeout(iosFullScreenAudioCheck, 500);
        }

        performanceTracker.fireClickToPlay();

        if (typeof (extraOptions.onClickPlay) === 'function') {
            extraOptions.onClickPlay();
        }
    }

    function videoEnterFullScreenByUser(e) {
        if (extraOptions.preventClickPropagation === true) {
            // Temporary workaround for stopPropagation.
            if (e instanceof Event === true) {
                e.stopPropagation();
            }
        }

        setUserStartClicked();

        if (extraOptions.playInline === false) {
            if (mutedVideoEl.requestFullScreen) {
                mutedVideoEl.requestFullScreen();
            }
            else if (mutedVideoEl.webkitRequestFullScreen) {
                mutedVideoEl.webkitRequestFullScreen();
            }

            if (platform.getOS() === 'ios') {
                mutedVideoEl.webkitEnterFullScreen();
            }

            enterFullscreen();
        }

        play();
        unmute();
        setTimeout(iosFullScreenAudioCheck, 500);
        performanceTracker.fireClickToPlay();

        if (typeof (extraOptions.onClickPlay) === 'function') {
            extraOptions.onClickPlay();
        }
    }

    function toggleSound() {
        setUserStartClicked();

        if (disableSoundToggle_ === true) {
            disableSoundToggle_ = false;
            return;
        }

        if (videoHasSound === false) {
            return;
        }

        if (mutedVideoEl.muted === true) {
            unmute();
        }
        else {
            mute();
        }
    }

    function replayLayerClicked(e) {
        videoReplayed = true;
        controlLayerClicked(e);
    };

    function eventAutoPlayVideoOnLoad() {
        timeLeftEl = document.getElementById('text_remain_' + videoID);
        videoControlUI.videoLoaded();

        if (videoHasSound === null) {
            videoHasSound = videohasAudio(mutedVideoEl);
            videoControlUI.videoSoundCheck();
        }

        if (typeof (extraOptions.onLoad) === 'function') {
            extraOptions.onLoad({
                videoDuration: mutedVideoEl.duration
            });
        }

        // Correct timercode if more than short video duration
        if(videoContinueUI != void 0) {
            if(mutedVideoEl.duration !== void 0 && parseFloat(extraOptions.continueWatch.tracks.timercode) !== 'NaN' && extraOptions.continueWatch.tracks.tracked !== true) {
                if(parseFloat(extraOptions.continueWatch.tracks.timercode) > mutedVideoEl.duration) {
                    extraOptions.continueWatch.tracks.timercode = mutedVideoEl.duration;
                    } 
            }
        }
    };

    function eventVideoCanPlay() {
        if (isWaitingForReplay === true) {
            replay();
        }
    }

    function videoPlayed() {
        videoControlUI.videoPlayed();

        if (videoHasSound === null) {
            videoControlUI.videoSoundCheck();
        }
        // Reset sound video sound detection due to detection need to video playing
        if (extraOptions.autoplay === false) {
            if (videoHasSound === false) {
                setTimeout(() => {
                    videoHasSound = videohasAudio(document.getElementById(videoID));
                    videoControlUI.resetVideoSoundCheck();
                }, 200);
            }
        }
        // Correct timercode if more than short video duration
        if(videoContinueUI != void 0) {
            if(mutedVideoEl.duration !== void 0 && parseFloat(extraOptions.continueWatch.tracks.timercode) !== 'NaN' && extraOptions.continueWatch.tracks.tracked !== true) {
                if(parseFloat(extraOptions.continueWatch.tracks.timercode) > mutedVideoEl.duration) {
                    extraOptions.continueWatch.tracks.timercode = mutedVideoEl.duration;
                    } 
            }
        }
    };
    function videoPaused() {
        if(videoContinueUI === void 0 || isVideoReplaced === true || Math.ceil(mutedVideoEl.currentTime) !== Math.ceil(mutedVideoEl.duration)) {
            videoControlUI.videoPaused();
        }

        if (typeof (extraOptions.onPaused) === 'function') {
            extraOptions.onPaused();
        }
    };
    function videoEnded() {
        if (document.exitFullscreen) {
            if (mutedVideoEl.fullscreenElement || // alternative standard method
                mutedVideoEl.mozFullScreenElement ||
                mutedVideoEl.webkitFullscreenElement ||
                mutedVideoEl.msFullscreenElement) {
                document.exitFullscreen();
            }
        }
        else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }

        if (platform.getOS() === 'ios') {
            mutedVideoEl.webkitExitFullscreen();
        }

        mute();
        isVideoEnded = true;

        if(videoContinueUI === void 0 || isVideoReplaced === true) {
            if (extraOptions.loop === true) {
                videoReplayed = true;
                play();
            } else {
                videoControlUI.videoEnded();
            }
        }

        if (typeof (extraOptions.onEnded) === 'function') {
            extraOptions.onEnded();
        }

        exitFullscreen();
    };
    function videoTimeUpdate() {
        mutedVideoEl.style.opacity = 1;

        var remainingTime = Math.round(mutedVideoEl.duration - mutedVideoEl.currentTime);
        if (isNaN(remainingTime)) {
            remainingTime = 0;
        }
        var minute = Math.floor(remainingTime / 60);
        var seconds = remainingTime - minute * 60;
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        if (timeLeftEl != void 0) {
            timeLeftEl.innerHTML = minute + ':' + seconds;
        }

        if (videoContinueUI != void 0) {
            if (parseFloat(extraOptions.continueWatch.tracks.timercode) === 'NaN') { return; }
            if (mutedVideoEl.currentTime >= parseFloat(extraOptions.continueWatch.tracks.timercode) && extraOptions.continueWatch.tracks.tracked === false && isVideoReplaced === false) {
                extraOptions.continueWatch.tracks.tracked = true;
                /** Added delay due to video ended will not call if video is replaced */
                setTimeout(()=>{
                    replaceFullVideo();
                    pause();
                    videoContinueUI.display();
                }, 100);
            }
        }
    };
    function fullscreenChanged() {
        var fsstate = 'openfs';
        var appsFullScreen = document.fullscreenElement;
        if (document.webkitFullscreenElement !== undefined) {
            appsFullScreen = document.webkitFullscreenElement;
        }

        if (appsFullScreen === null || appsFullScreen === undefined) {
            // Exit fullscreen mode.

            fsstate = 'closefs';
            exitFullscreen();
        }

        if (typeof (extraOptions.fullscreenCallBack) === 'function') {
            extraOptions.fullscreenCallBack(fsstate);
        }
    };
    function iosDelayFullScreenEnded() {
        setTimeout(iosFullScreenEnded, 500);
    };
    function iosFullScreenEnded() {
        if (isVideoEnded === true) {
            return;
        }

        if (mutedVideoEl.webkitDisplayingFullscreen === false) {
            if (typeof (extraOptions.fullscreenCallBack) === 'function') {
                extraOptions.fullscreenCallBack('closefs');
            }

            exitFullscreen();

            // Need extra delay to make sure video is always playing.
            if (mutedVideoEl.paused === true) {
                play();
                iosDelayFullScreenEnded();
            }
        }
    };
    /**
     * In IOS 11, full screen video need delay to unmuted.
     */
    function iosFullScreenAudioCheck() {
        if (mutedVideoEl.muted === false) {
            return;
        }

        unmute();
        setTimeout(iosFullScreenAudioCheck, 500);
    };
    function isVideoMuted() {
        return mutedVideoEl.muted;
    }
    function play() {
        if (displayedContinueWatch === true) {
            return;
        }
        var videoPromise = mutedVideoEl.play();
        if (videoPromise !== undefined) {
            videoPromise.catch(function (error) { })
                .then(function () { });
        }

        isVideoEnded = false;
    };
    function pause() {
        mutedVideoEl.pause();
    };
    function replay() {
        videoReplayed = true;
        if (mutedVideoEl.readyState == 0) {
            isWaitingForReplay = true;
        }
        else {
            isWaitingForReplay = false;
            mutedVideoEl.currentTime = 0;
            play();
        }
    };
    function mute() {
        mutedVideoEl.muted = true;
    };
    function unmute() {
        mutedVideoEl.muted = false;
        if (videoHasSound === null) {
            videoHasSound = videohasAudio(mutedVideoEl);
            videoControlUI.videoSoundCheck();
        }
    };
    function videohasAudio(_video) {
        return Boolean(_video.mozHasAudio) ||
            Boolean(_video.audioTracks) ||
            Boolean(_video.webkitAudioDecodedByteCount);
    };

    /**
     * When video enter fullscreen.
     */
    function enterFullscreen() {
        performanceTracker.fireEnterFullScreen();

        if (typeof (extraOptions.onEnterFullscreen) === 'function') {
            extraOptions.onEnterFullscreen();
        }
    };
    /**
     * When video exit fullscreen.
     */
    function exitFullscreen() {
        performanceTracker.fireExitFullScreen();

        if (typeof (extraOptions.onExitFullscreen) === 'function') {
            extraOptions.onExitFullscreen();
        }
    };

    function pauseTracker() {
        performanceTracker.pause();
    }

    function resumeTracker() {
        performanceTracker.resume();
    }

    function videoFirstClicked() {
        return userStartClicked;
    }

    function initContinueWatch() {
        videoWrapperEl.classList.add('apps-video-continue-watch');
        forceDisplayClickContinue = true;
        generateClickContinue(true);
    }

    function userClicked() {
        userStartClicked = true;

        if (videoContinueUI != void 0) {
            videoContinueUI.hide();
        }
    }

    function callbackContinueWatch(e = null) {
        if (extraOptions.continueWatch.fullVideoSrc === '' && e !== null) {
            controlLayerClicked(e);
        }
        if(extraOptions.continueWatch.callback !== null) {
            extraOptions.continueWatch.callback();
        }
    }

    function replaceFullVideo() {
        let parent = mutedVideoEl;
        
        while (parent.firstChild) {
            parent.firstChild.remove();
        }

        setVideo();
        setVideo('webm');
        mutedVideoEl.load();
        isVideoReplaced = true;
    }

    function setVideo(ext = 'mp4') {
        if (ext === 'webm' && extraOptions.webm === null) {
            return;
        }

        let sourceEl = document.createElement('source');
        sourceEl.setAttribute('src', extraOptions.continueWatch.fullVideoSrc + '.' + ext);
        sourceEl.setAttribute('type', 'video/' + ext);
        mutedVideoEl.appendChild(sourceEl);
        mutedVideoEl.addEventListener('canplay', heavyVideoCanPlay, false);
    }

    function setUserStartClicked() {
        if(extraOptions.onPlayerActive !== null && userStartClicked === false) {
            extraOptions.onPlayerActive();
        }
        userStartClicked = true;
    }

    function heavyVideo() {
        return isHeavyVideo;
    }

    function heavyVideoCanPlay() {
        if(heavyVideoReady) {
            return;
        }
        heavyVideoReady = true;
        if(videoContinueUI != void 0 && requestReplaceVideo === true) {
            videoContinueUI.triggerCallback();
        }
    }

    function continueWatchVideoReady() {
        if(videoContinueUI != void 0 && heavyVideoReady === true) {
            videoContinueUI.triggerCallback();
        }
        requestReplaceVideo = true;
    }

    function VideoControllerUI(clickCallback, enterFullScreenCallback, toggleSoundCallback, replayCallback) {
        this.toogleSoundIcon = toogleSoundIcon;
        this.videoLoaded = videoLoaded;
        this.videoPlayed = videoPlayed;
        this.videoEnded = videoEnded;
        this.videoPaused = videoPaused;
        this.videoSoundCheck = videoSoundCheck;
        this.resetVideoSoundCheck = resetVideoSoundCheck;

        var controlWrapperEl = null;
        var endedWrapperEl = null;
        var playButtonWrapperEl = null;
        var controlPlayButtonEl = null, playSvg = '', pauseSvg = '';
        var soundButtonAttached = false;

        let totalCtaClicked_ = 1;
        let hasVideoToReplace_ = false;

        initClass();

        function initClass() {
            controlWrapperEl = document.createElement('div');
            controlWrapperEl.classList.add('apps-video-control-wrapper');
            controlWrapperEl.addEventListener('click', clickCallback, false);

            endedWrapperEl = document.createElement('div');
            endedWrapperEl.classList.add('apps-video-ended-wrapper');
            endedWrapperEl.style.display = 'none';
            endedWrapperEl.addEventListener('click', replayCallback, false);

            generateControlComponent();
            generateEndedComponent();

            videoWrapperEl.appendChild(endedWrapperEl);
            videoWrapperEl.appendChild(controlWrapperEl);

            setTimeout(checkSalesModel_, 500);
            setInterval(iosCssWorkaround_, 1000);
        };

        function generateControlComponent() {
            // Controllers
            var controllerEl = [
                generateControlsWrapper(),
                {
                    id: 'play_btn_when_paused_' + videoID, cssClass: ['status-container'], cssStyle: { display: 'none' }, childs: [
                        {
                            cssClass: ['btn-wrapper'], childs: [
                                { cssClass: ['video-round-btn'], innerHTML: videoSvg.midcircle() + videoSvg.midplay() }
                            ]
                        }
                    ]
                },
                {
                    cssClass: ['top-vidcta-container', 'full-video-height'], cssStyle: { opacity: 1 }, clickFunc: clickOnCTA_, childs: [
                        {
                            cssClass: ['text-vidcta-wrapper'], childs: [
                                { elType: 'span', cssClass: ['cta-text'], innerHTML: extraOptions.playstatectatext },
                                { elType: 'span', innerHTML: videoSvg.landing() }
                            ]
                        }
                    ]
                }
            ];

            for (var i = 0; i < controllerEl.length; i++) {
                innityAppsMobileVideoElementGenerator(controllerEl[i], controlWrapperEl);
            }

            /**
             * Generate controls wrapper with volumn, duration & fullscreen icon.
             * @returns {object} JSON object for generateMaterial function.
             */
            function generateControlsWrapper() {
                var controlsContainer = { cssClass: [], childs: [] };

                var controlsContainerCss = ['controllers-container'];
                if (extraOptions.hideStatus !== true) {
                    controlsContainerCss.push('show-controller');
                }
                controlsContainer.cssClass = controlsContainerCss;

                // Volumn icon & duration layer.
                controlsContainer.childs.push(
                    {
                        cssClass: ['controls_wrapper', 'float-to-left'], childs: [
                            { id: 'btn_sound_' + videoID, cssClass: ['video-round-btn', 'audio'], cssStyle: { display: 'block' }, innerHTML: videoSvg.audio() },
                            { id: 'text_remain_' + videoID, cssClass: ['player-time', 'hidden-player-icon'], innerHTML: '0:00' }
                        ]
                    }
                );

                // Allowed Play / Pause Video icon
                if (extraOptions.pauseable === true) {
                    var videoPauseableChilds = { id: 'btn_playback_' + videoID, cssClass: ['video-round-btn', 'play-pause'], cssStyle: { display: 'block' }, innerHTML: videoSvg.controlplay() };
                    controlsContainer.childs[0].childs.unshift(videoPauseableChilds);
                }

                // Fullscreen icon.
                if (extraOptions.hideFullscreenIcon === false) {
                    controlsContainer.childs.push(
                        {
                            cssClass: ['controls_wrapper', 'float-to-right'], childs: [
                                { id: 'btn_fs_' + videoID, cssClass: ['video-round-btn', 'fs'], cssStyle: { display: 'block' }, clickFunc: enterFullScreenCallback, innerHTML: videoSvg.fullscreen() }
                            ]
                        }
                    );
                }

                return controlsContainer;
            };
        };
        function generateEndedComponent() {
            endedWrapperEl.innerHTML = '';
            // Replay icon.
            if (extraOptions.hideReplayIcon === false) {
                endedWrapperEl.innerHTML = videoSvg.midcircle() + videoSvg.midreplay();
            }
            // Fullscreen icon.
            if (extraOptions.hideStatus === false && extraOptions.hideFullscreenIcon === false && extraOptions.forceFullScreen) {
                endedWrapperEl.innerHTML += videoSvg.fullscreen();
            }

            var ctaMaterials = [{
                cssClass: ['top-vidcta-container'], cssStyle: { opacity: 1 }, clickTag: extraOptions.urls, childs: [
                    {
                        cssClass: ['text-vidcta-wrapper'], childs: [
                            { elType: 'span', cssClass: ['cta-text'], innerHTML: extraOptions.playstatectatext },
                            { elType: 'span', innerHTML: videoSvg.landing() }
                        ]
                    }
                ]
            }];

            for (var i = 0; i < ctaMaterials.length; i++) {
                innityAppsMobileVideoElementGenerator(ctaMaterials[i], endedWrapperEl);
            }
        };

        function videoLoaded() {
            queryRequiredElements();
        };
        function videoEnded() {
            controlWrapperEl.style.display = 'none';
            endedWrapperEl.style.display = '';
            // Sometimes the replay button will not appear without this line
            mutedVideoEl.style.opacity = 0.95;
            if (controlPlayButtonEl !== null) {
                controlPlayButtonEl.classList.add('is-paused');
                togglePlayPauseSVGAnimation();
            }
        };
        function videoPlayed() {
            controlWrapperEl.style.display = '';
            endedWrapperEl.style.display = 'none';
            // Sometime video trigger played faster than video loaded, that why need this checking.
            // playButtonWrapperEl is initial after video had loaded in queryRequiredElements().
            if (playButtonWrapperEl !== null) {
                playButtonWrapperEl.style.display = 'none';
            }
            if (controlPlayButtonEl !== null) {
                controlPlayButtonEl.classList.remove('is-paused');
                togglePlayPauseSVGAnimation(true);
            }
        };
        function videoPaused() {
            // Sometime video trigger played faster than video loaded, that why need this checking.
            // playButtonWrapperEl is initial after video had loaded in queryRequiredElements().
            if (playButtonWrapperEl !== null) {
                playButtonWrapperEl.style.display = 'block';
            }
            if (controlPlayButtonEl !== null) {
                controlPlayButtonEl.classList.add('is-paused');
                togglePlayPauseSVGAnimation();
            }
        };
        function toggleVideoSound(e) {
            e.stopPropagation();
            if ((extraOptions.continueWatch.fullVideoSrc === '' && extraOptions.continueWatch.tracks.timercode === '') || videoContinueUI === void 0) {
                toggleSoundCallback();
            } else {
                if (isVideoReplaced === true) {
                    toggleSoundCallback();
                } else {
                    replaceFullVideo();
                    play();
                    unmute();
                    videoWrapperEl.classList.remove('apps-video-continue-watch');
                    continueWatchVideoReady();
                }
            }
        };
        function togglePlayPauseSVGAnimation(bool = false) {
            var fromsvg = playSvg, tosvg = pauseSvg;
            if (bool === false) {
                fromsvg = pauseSvg;
                tosvg = playSvg;
            }
            document.getElementById('play_pause_animation').setAttribute('from', fromsvg);
            document.getElementById('play_pause_animation').setAttribute('to', tosvg);
            document.getElementById('play_pause_animation').beginElement();
        }

        function iosCssWorkaround_() {
            if (platform.getOS() !== 'ios') {
                return;
            }

            controlWrapperEl.style.left = '0%';
            setTimeout(function () {
                controlWrapperEl.style.left = '0';
            }, 500);
        }

        function checkSalesModel_() {
            // Only CPM sales model come with 1st & 2nd clicks to landing.
            if (extraOptions.cpm === false && extraOptions.country.toUpperCase() !== 'TW') {
                // Here is default video player behaviour.
                totalCtaClicked_ = 2;

                let ctaContainers = document.getElementsByClassName('top-vidcta-container');
                for (let i = 0; i < ctaContainers.length; i++) {
                    ctaContainers[i].classList.remove('full-video-height');
                }

            }
        }

        function clickOnCTA_() {
            if (totalCtaClicked_ >= 2) {
                let ctaContainers = document.getElementsByClassName('top-vidcta-container');
                for (let i = 0; i < ctaContainers.length; i++) {
                    ctaContainers[i].classList.remove('full-video-height');
                }
            }

            if (extraOptions.clicktoUnmute === true && mutedVideoEl.muted === true) {
                unmute();
            }

            if (extraOptions.urls.indexOf('http') > -1) {
                InnityHTMLAd.click({ url: extraOptions.urls });
            }
            else {
                innityAppsTriggerClicktagHandler(extraOptions.urls);
            }

            totalCtaClicked_++;
            setUserStartClicked();

            /* This is used for continue watch */
            if ((extraOptions.continueWatch.fullVideoSrc === '' && extraOptions.continueWatch.tracks.timercode === '') || videoContinueUI === void 0) {
                return;
            }

            if (isVideoReplaced === true) {
                return;
            }

            replaceFullVideo();
            unmute();
            videoWrapperEl.classList.remove('apps-video-continue-watch');
            continueWatchVideoReady();
        }

        /**
         * This is a workaround to query HTML elements after they had append into DOM.
         */
        function queryRequiredElements() {
            playButtonWrapperEl = document.getElementById('play_btn_when_paused_' + videoID);
            if (extraOptions.pauseable === true) {
                controlPlayButtonEl = document.getElementById('btn_playback_' + videoID);
                playSvg = document.getElementById('play_pause_animation').getAttribute('from');
                pauseSvg = document.getElementById('play_pause_animation').getAttribute('to');
                controlPlayButtonEl.addEventListener("click", toggleVideoPlays, false);
            }
        };

        function videoSoundChange() {
            var btnSound = document.getElementById('btn_sound_' + videoID);

            if (btnSound === null) {
                return;
            }
            if (mutedVideoEl.muted === true) {
                btnSound.classList.add("is-muted");
            }
            else if (videoHasSound === true) {
                btnSound.classList.remove("is-muted");
            }
        }

        function videoSoundCheck() {
            var btnSound = document.getElementById('btn_sound_' + videoID);

            if (btnSound === null) {
                return;
            }

            if (!soundButtonAttached) {
                videoSoundChange();
                btnSound.addEventListener("click", toggleVideoSound, false);
                mutedVideoEl.addEventListener('volumechange', videoSoundChange, false);
                soundButtonAttached = true;
            }

            if (videoHasSound === null) {
                return;
            }
            if (videoHasSound === false) {
                btnSound.classList.add("is-muted");
                btnSound.classList.add("video-no-sound");
                btnSound.removeEventListener("click", toggleVideoSound, false);
                mutedVideoEl.removeEventListener('volumechange', videoSoundChange, false);
            }
            else {
                btnSound.classList.remove("video-no-sound");
            }
        };

        function resetVideoSoundCheck() {
            soundButtonAttached = false;
            videoSoundCheck();
        };

        function toogleSoundIcon(isVideoMuted = false) {
            var btnSound = document.getElementById('btn_sound_' + videoID);
            if (btnSound === null) {
                return;
            }

            if (isVideoMuted === true) {
                btnSound.classList.add("is-muted");
            } else {
                btnSound.classList.remove("is-muted");
            }
        }

        function toggleVideoPlays(event) {
            event.stopPropagation();

            if ((extraOptions.continueWatch.fullVideoSrc === '' && extraOptions.continueWatch.tracks.timercode === '') || videoContinueUI === void 0) {
                hasVideoToReplace_ = false;
            }
            else if (isVideoReplaced === true) {
                hasVideoToReplace_ = false;
            }
            else {
                hasVideoToReplace_ = true;
            }

            if(hasVideoToReplace_) {
                /* This is used for continue watch */
                replaceFullVideo();
                play();
                unmute();
                videoWrapperEl.classList.remove('apps-video-continue-watch');
                continueWatchVideoReady();
            }
            else {
                if(this.classList.contains('is-paused')) {
                    play();
                }
                else {
                    pause();
                }
      
                if(extraOptions.clicktoUnmute === true && mutedVideoEl.muted === true) {
                    unmute();
                }
            }
            
            setUserStartClicked();
        }
    };

    function VideoContinueWatchUI(continueCallback) {
        var mainEl;
        var showContinueCSSClass = '';
        var hasContinueWatch = false;
        var clickedContinueEvent = null;

        initClass();

        function initClass() {
            mainEl = document.createElement('div');
            mainEl.setAttribute('class', 'apps-video-continue-watch-container');
            mainEl.setAttribute('style', 'display: none;');
            mainEl.id = 'continuewatch_' + videoID;
            videoWrapperEl.appendChild(mainEl);

            var continueMaterial = [
                {
                    id: 'continuewatch_background_' + videoID, cssClass: ['apps-video-continue-watch-background'], childs: [
                        { id: 'btn_continuewatch_' + videoID, cssClass: ['apps-video-continue-watch-button'], childs: [] }
                    ]
                }
            ];

            if (extraOptions.continueWatch.text != "") {
                continueMaterial[0]['childs'][0]['childs'].unshift(
                    {
                        cssClass: ['apps-video-continue-watch-text'], childs: [
                            { elType: 'span', innerHTML: extraOptions.continueWatch.text }
                        ]
                    }
                );
            }

            if (extraOptions.continueWatch.tracks.thumbnail === null) {
                continueMaterial[0]['childs'][0]['childs'].unshift(
                    {
                        id: 'btn_continuewatch_thumbnail_' + videoID, cssClass: ['apps-video-continue-watch-thumbnail', 'without-video-continuewatch-thumbnail'], childs: [
                            { cssClass: ['apps-video-continue-watch-icon-wrapper'], innerHTML: videoSvg.midplay() },
                        ]
                    },
                );
            }
            else {
                continueMaterial[0]['childs'][0]['childs'].push(
                    {
                        id: 'btn_continuewatch_thumbnail_' + videoID, cssClass: ['apps-video-continue-watch-thumbnail'], childs: [
                            { elType: 'img', cssClass: ['apps-video-continue-watch-image'], attrs: { 'src': extraOptions.continueWatch.tracks.thumbnail } },
                            { cssClass: ['apps-video-continue-watch-icon-wrapper'], innerHTML: videoSvg.midplay() },
                            { cssClass: ['apps-video-continue-watch-thumbnail-border'] },
                        ]
                    },
                );
            }

            for (var i = 0; i < continueMaterial.length; i++) {
                innityAppsMobileVideoElementGenerator(continueMaterial[i], mainEl);
            }

            // Bind resize events
            window.addEventListener("resize", resizeClass, false);
            document.getElementById('btn_continuewatch_' + videoID).addEventListener("click", hiddenClass, false);
            document.getElementById('continuewatch_background_' + videoID).addEventListener("click", hiddenClass, false);
            resizeClass();
        }

        function displayClass() {
            displayedContinueWatch = true;
            if (hasContinueWatch === true) {
                return;
            }
            hasContinueWatch = true;
            mainEl.setAttribute('style','');
            setTimeout(()=>{
                mainEl.classList.add('apps-video-continue-watch-pause-display');
            }, 0);
        }

        function hiddenClass(event) {
            var e_ = null;
            if (event instanceof Event) {
                event.stopPropagation();
                e_ = event;
            }

            videoWrapperEl.classList.remove('apps-video-continue-watch');
            mainEl.classList.remove('apps-video-continue-watch-pause-display');
            displayedContinueWatch = false;
            play();

            setTimeout(() => {
                mainEl.setAttribute('style', 'display: none;');
                if (extraOptions.continueWatch.restart === true) {
                    mutedVideoEl.currentTime = 0;
                } else {
                    mutedVideoEl.currentTime = extraOptions.continueWatch.tracks.timercode;
                }
                unmute();
                continueWatchVideoReady();
            }, 1000);

            clickedContinueEvent = event;
        }

        function currentRatio(width, height) {
            var gcd_ = (a, b) => (b == 0) ? a : gcd_(b, a % b);
            var ratio_ = ((a, b) => (b == 0) ? a : gcd_(b, a % b))(width, height);
            var value_ = (width / ratio_) / (height / ratio_);
            var commonRatios_ = [
                [1, '1:1'], [eval(2 / 1), '2:1'], [eval(4 / 3), '4:3'], [eval(3 / 2), '3:2'], [eval(5 / 3), '5:3'], [eval(16 / 9), '16:9'], [eval(1 / 2), '1:2'], [eval(2 / 3), '2:3'], [eval(3 / 4), '3:4'], [eval(3 / 5), '3:5'], [eval(9 / 16), '9:16'], [eval(9 / 19.488), '9:19.5'], [3, '3']
            ];
            var final_ = "16:9";

            for (var i = 0; i < commonRatios_.length; i++) {
                if (value_.toFixed(2) == commonRatios_[i][0].toFixed(2)) {
                    final_ = commonRatios_[i][1];
                    break;
                }
                else if (Math.round(value_) == Math.round(commonRatios_[i][0])) {
                    final_ = commonRatios_[i][1];
                }
                else {
                    final_ = "1: " + value_;
                }
            }

            return final_;
        }

        function resizeClass() {
            var withinLandscape_ = (videoWrapperEl.clientWidth > videoWrapperEl.clientHeight) ? 1 : 0;
            var videoRatio_ = currentRatio(videoWrapperEl.clientWidth, videoWrapperEl.clientHeight);
            var gridRow_ = Boolean(withinLandscape_) === true ? eval(10 / 3) : eval(10 / 4.5),
                gridCol_ = Boolean(withinLandscape_) === true ? 5 : 10;

            switch (videoRatio_) {
                case "4:3":
                    gridRow_ = eval(10 / 4);
                    gridCol_ = 5.25;
                    break;
                case "2:1":
                    gridRow_ = eval(10 / 2.75);
                    gridCol_ = 5.25;
                    break;

                case "1:1":
                    gridRow_ = eval(10 / 4.25);
                    gridCol_ = 5.75;
                    break;
                case "1:2":
                    gridRow_ = eval(10 / 4.5);
                    gridCol_ = 11;
                    break;
                case "3:4":
                    gridRow_ = eval(10 / 5.5);
                    gridCol_ = 7.25;
                    break;
                case "9:19.5":
                    gridRow_ = eval(10 / 4.5);
                    gridCol_ = 12;
                    break;
            }

            if (videoWrapperEl.clientWidth > 620) {
                gridRow_ = gridRow_ * 1.2;
                gridCol_ = gridCol_ * 1.2;
            }

            document.getElementById('btn_continuewatch_' + videoID).style.height = Math.round(videoWrapperEl.clientHeight / gridCol_) + 'px';
            document.getElementById('btn_continuewatch_' + videoID).style.width = Math.round(videoWrapperEl.clientWidth / gridRow_) + 'px';
            document.getElementById('btn_continuewatch_' + videoID).style.bottom = ((num)=>{return Math.round(Math.min(Math.max(num, 30), 90)); })(eval(videoWrapperEl.clientHeight / gridCol_ * 1.25)) + 'px';
            document.getElementById('btn_continuewatch_' + videoID).style.fontSize = ((num)=>{return Math.round(Math.min(Math.max(num, 11), 18)); })(eval(videoWrapperEl.clientHeight / gridCol_ / 6)) + 'px';
        }

        function triggerCallback() {
            if(typeof continueCallback === "function") {
                continueCallback(clickedContinueEvent);
            }
        }

        return {
            main: mainEl,
            display: displayClass,
            hide: hiddenClass,
            triggerCallback: triggerCallback
        }
    }

    /**
     * Performance tracker to record down video click to play & video loaded.
     * @argument {VideoElement} videoEl
     */
    function PerformanceTracker(videoEl) {
        this.fireClickToPlay = fireClickToPlay;
        this.fireEnterFullScreen = fireEnterFullScreen;
        this.fireExitFullScreen = fireExitFullScreen;
        this.pause = pause;
        this.resume = resume;

        var trackingVideoID = '';
        var isClicked = false;

        initClass();

        function initClass() {
            if (typeof (videoEl) === 'undefined' || videoEl === null) {
                return;
            }

            var videoID = mutedVideoEl.id;
            trackingVideoID = '_' + videoID[0].toUpperCase() + videoID.substr(1);

            bindVideoEvent();
        };

        function bindVideoEvent() {
            videoEl.addEventListener('loadeddata', fireLoaded, false);
        };

        function fireLoaded() {
            InnityHTMLAd.track(trackingVideoID + '_AutoLoaded');
        };
        function fireClickToPlay() {
            if (isClicked === true) {
                return;
            }

            InnityHTMLAd.track(trackingVideoID + '_ClickAutoToPlay');
            isClicked = true;
        };
        function fireEnterFullScreen() {
            if (extraOptions.tracking === true) {
                InnityHTMLAd.track(trackingVideoID + '_OpenFullscreen');
            }
        };
        function fireExitFullScreen() {
            if (extraOptions.tracking === true) {
                InnityHTMLAd.track(trackingVideoID + '_CloseFullscreen');
            }
        };
        function pause() {
            if (extraOptions.tracking === true && typeof InnityHTMLAd.pauseTracker === 'function') {
                InnityHTMLAd.pauseTracker();
            }
        };
        function resume() {
            if (extraOptions.tracking === true && typeof InnityHTMLAd.resumeTracker === 'function') {
                InnityHTMLAd.resumeTracker();
            }
        }
    };
}

function DesktopNativeVideo(container, videoID, extraOptions, platform) {
    this.isVideoMuted = isVideoMuted;
    this.play = play;
    this.pause = pause;
    this.replay = replay;
    this.mute = mute;
    this.unmute = unmute;
    this.pauseTracker = pauseTracker;
    this.resumeTracker = resumeTracker;
    this.videoFirstClicked = videoFirstClicked;
    this.initContinueWatch = initContinueWatch;
    this.userClicked = userClicked;
    this.heavyVideo = heavyVideo;
  
    var videoWrapperEl;
    var mutedVideoEl;
    var videoControlUI;
    var videoContinueUI;
    var timeLeftEl;
    var isVideoEnded = false;
    var videoHasSound = null;
    let videoReplayed = false;
    let isWaitingForReplay = false;
    let displayedContinueWatch = false;
    let forceDisplayClickContinue = false;
    let isHeavyVideo = false;
    let isVideoReplaced = false;
    let heavyVideoReady = false;
    let requestReplaceVideo = false;
    /**
     * Special control to skip sound toggle in below condition.
     * When video was paused.
     * When video was played, it will disable the skip.
     * @type Boolean
     */
    var disableSoundToggle = false;
    var performanceTracker;
    var userStartClicked = false;
    var videoSvg = new generateVideoSVGIcon();
    var audioSvg = videoSvg.audio(), fullscreenSvg = videoSvg.fullscreen();

    initClass();

    function initClass() {
        videoWrapperEl = document.createElement('div');
        videoWrapperEl.id = videoID + '-wrapper';
        videoWrapperEl.classList.add('apps-video-wrapper');

        generatePoster();
        generateMutedVideo();
        generateControls();

        container.appendChild(videoWrapperEl);

        if (extraOptions.tracking === true) {
            InnityHTMLAd.attachVideo(mutedVideoEl);
            performanceTracker = new PerformanceTracker(mutedVideoEl);
        }
    };

    function generateMutedVideo() {
        mutedVideoEl = document.createElement('video');
        mutedVideoEl.id = videoID;
        mutedVideoEl.setAttribute('preload', 'metadata');
        mutedVideoEl.setAttribute('playsinline', '');
        mutedVideoEl.setAttribute('muted', '');
        mutedVideoEl.setAttribute('controlsList', 'nodownload');
        mutedVideoEl.classList.add('apps-creative-video');
        mutedVideoEl.style.opacity = 0;
        mutedVideoEl.poster = extraOptions.poster;
        mute();

        mutedVideoEl.volume = extraOptions.volume / 100;

        if (extraOptions.autoplay === true) {
            mutedVideoEl.setAttribute('autoplay', '');
        }

        if (extraOptions.mp4 !== null) {
            mutedVideoEl.appendChild(generateMp4Source());
        }
        if (extraOptions.webm !== null) {
            mutedVideoEl.appendChild(generateWebmSource());
        }

        bindMutedVideoEvents();
        videoWrapperEl.appendChild(mutedVideoEl);
    };
    function bindMutedVideoEvents() {
        mutedVideoEl.addEventListener('loadeddata', eventAutoPlayVideoOnLoad, false);
        mutedVideoEl.addEventListener('play', videoPlayed, false);
        mutedVideoEl.addEventListener('pause', videoPaused, false);
        mutedVideoEl.addEventListener('ended', videoEnded, false);
        mutedVideoEl.addEventListener('timeupdate', videoTimeUpdate, false);
        mutedVideoEl.addEventListener('timeupdate', extraOptions.onVideoTimeUpdate, false);
        mutedVideoEl.addEventListener('fullscreenchange', fullscreenChanged, false);
        mutedVideoEl.addEventListener('webkitfullscreenchange', fullscreenChanged, false);
        mutedVideoEl.addEventListener('canplay', eventVideoCanPlay, false);

        // MS and Moz need document for fullscreenchange
        document.addEventListener('mozfullscreenchange', fullscreenChanged, false);
        document.addEventListener('MSFullscreenChange', fullscreenChanged, false);

        videoWrapperEl.appendChild(mutedVideoEl);
    };
    function generateWebmSource() {
        var sourceEl = document.createElement('source');
        sourceEl.src = extraOptions.webm;
        sourceEl.type = 'video/webm';

        return sourceEl;
    };
    function generateMp4Source() {
        var sourceEl = document.createElement('source');
        sourceEl.src = extraOptions.mp4;
        sourceEl.type = 'video/mp4';

        return sourceEl;
    };

    function generatePoster() {
        var posterContainer = document.createElement('div');
        posterContainer.classList.add('apps-video-poster-container');

        var imageEl = document.createElement('img');
        imageEl.src = extraOptions.poster;

        posterContainer.appendChild(imageEl);
        videoWrapperEl.appendChild(posterContainer);

        generatePlayButtonForPoster();
    };
    function generatePlayButtonForPoster() {
        var buttonWrapper = document.createElement('div');
        buttonWrapper.classList.add('apps-video-poster-play-container');

        buttonWrapper.innerHTML = videoSvg.midcircle() + videoSvg.midplay();

        videoWrapperEl.appendChild(buttonWrapper);
    };

    function generateControls() {
        videoControlUI = new VideoControllerUI(controlLayerClicked, videoEnterFullScreenByUser, toggleSound, replayLayerClicked);
    };

    function generateClickContinue(bool) {
        if (bool === false) { return; }
        isHeavyVideo = true;
        if (extraOptions.continueWatch.text === null || extraOptions.continueWatch.text == "" || Boolean(extraOptions.continueWatch.tracks.timercode) === false || extraOptions.continueWatch.tracks.timercode === null) { return; }
        extraOptions.continueWatch.tracks.tracked = false;
        videoContinueUI = new VideoContinueWatchUI(callbackContinueWatch);
    }

    function isVideoMuted() {
        return mutedVideoEl.muted;
    }
    function controlLayerClicked(e) {
        setUserStartClicked();
        unmute();
        play();
        performanceTracker.fireClickToPlay();

        if (typeof (extraOptions.onClickPlay) === 'function') {
            extraOptions.onClickPlay();
        }
    };
    function videoEnterFullScreenByUser() {
        setUserStartClicked();
        if (!mutedVideoEl.fullscreenElement && // alternative standard method
            !mutedVideoEl.mozFullScreenElement &&
            !mutedVideoEl.webkitFullscreenElement &&
            !mutedVideoEl.msFullscreenElement) { //current working methods
            var requestFullScreen = mutedVideoEl.requestFullscreen || mutedVideoEl.msRequestFullscreen || mutedVideoEl.mozRequestFullScreen || mutedVideoEl.webkitRequestFullscreen;
            if (requestFullScreen == mutedVideoEl.msRequestFullscreen) {
                mutedVideoEl.controls = 'controls';
            }
            requestFullScreen.call(mutedVideoEl);
        }

        unmute();
        enterFullscreen();
    };
    function toggleSound() {
        setUserStartClicked();

        if (disableSoundToggle === true) {
            disableSoundToggle = false;
            return;
        }

        if (videoHasSound === false) {
            return;
        }

        if (mutedVideoEl.muted === true) {
            unmute();
        }
        else {
            mute();
        }
    };
    function replayLayerClicked() {
        videoReplayed = true;
        setUserStartClicked();
        play();
        unmute();
    };

    function eventAutoPlayVideoOnLoad() {
        timeLeftEl = document.getElementById('text_remain_' + videoID);
        videoControlUI.videoLoaded();

        if (videoHasSound === null) {
            videoHasSound = videohasAudio(mutedVideoEl);
            videoControlUI.videoSoundCheck();
        }

        if (typeof (extraOptions.onLoad) === 'function') {
            extraOptions.onLoad({
                videoDuration: mutedVideoEl.duration
            });
        }

        // Correct timercode if more than short video duration
        if(videoContinueUI != void 0) {
            if(mutedVideoEl.duration !== void 0 && parseFloat(extraOptions.continueWatch.tracks.timercode) !== 'NaN' && extraOptions.continueWatch.tracks.tracked !== true) {
                if(parseFloat(extraOptions.continueWatch.tracks.timercode) > mutedVideoEl.duration) {
                    extraOptions.continueWatch.tracks.timercode = mutedVideoEl.duration;
                 } 
            }
        }
    };
    function eventVideoCanPlay() {
        if (isWaitingForReplay === true) {
            replay();
        }
    }
    function videoPlayed() {
        videoControlUI.videoPlayed();
        disableSoundToggle = false;

        if (videoHasSound === null) {
            videoControlUI.videoSoundCheck();
        }
        // Reset sound video sound detection due to detection need to video playing
        if (extraOptions.autoplay === false) {
            if (videoHasSound === false) {
                setTimeout(() => {
                    videoHasSound = videohasAudio(document.getElementById(videoID));
                    videoControlUI.resetVideoSoundCheck();
                }, 200);
            }
        }
        // Correct timercode if more than short video duration
        if(videoContinueUI != void 0) {
            if(mutedVideoEl.duration !== void 0 && parseFloat(extraOptions.continueWatch.tracks.timercode) !== 'NaN' && extraOptions.continueWatch.tracks.tracked !== true) {
                if(parseFloat(extraOptions.continueWatch.tracks.timercode) > mutedVideoEl.duration) {
                    extraOptions.continueWatch.tracks.timercode = mutedVideoEl.duration;
                    } 
            }
        }
    };
    function videoPaused() {
        if (mutedVideoEl.currentTime >= mutedVideoEl.duration) {
            return;
        }

        if(videoContinueUI === void 0 || isVideoReplaced === true || Math.ceil(mutedVideoEl.currentTime) !== Math.ceil(mutedVideoEl.duration)) {
            videoControlUI.videoPaused();
        }
        disableSoundToggle = true;

        if (typeof (extraOptions.onPaused) === 'function') {
            extraOptions.onPaused();
        }
    };
    function videoEnded() {
        if (document.exitFullscreen) {
            if (mutedVideoEl.fullscreenElement || // alternative standard method
                mutedVideoEl.mozFullScreenElement ||
                mutedVideoEl.webkitFullscreenElement ||
                mutedVideoEl.msFullscreenElement) {
                document.exitFullscreen();
            }
        }
        else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }

        isVideoEnded = true;
  
        if(videoContinueUI === void 0 || isVideoReplaced === true) {
            if (extraOptions.loop === true) {
                videoReplayed = true;
                play();
            } else {
                videoControlUI.videoEnded();
            }
        }

        if (typeof (extraOptions.onEnded) === 'function') {
            extraOptions.onEnded();
        }
    };
    function videoTimeUpdate() {
        mutedVideoEl.style.opacity = 1;

        var remainingTime = Math.round(mutedVideoEl.duration - mutedVideoEl.currentTime);
        if (isNaN(remainingTime)) {
            remainingTime = 0;
        }
        var minute = Math.floor(remainingTime / 60);
        var seconds = remainingTime - minute * 60;
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        if (timeLeftEl != void 0) {
            timeLeftEl.innerHTML = minute + ':' + seconds;
        }

        if (videoContinueUI != void 0) {
            if (parseFloat(extraOptions.continueWatch.tracks.timercode) === 'NaN') { return; }
            if (mutedVideoEl.currentTime >= parseFloat(extraOptions.continueWatch.tracks.timercode) && extraOptions.continueWatch.tracks.tracked === false && isVideoReplaced === false) {
                extraOptions.continueWatch.tracks.tracked = true;
                /** Added delay due to video ended will not call if video is replaced */
                setTimeout(()=>{
                    replaceFullVideo();
                    pause();
                    videoContinueUI.display();
                }, 100);
            }
        }
    };
    function fullscreenChanged() {
        var fsstate = 'openfs';
        var appsFullScreen = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;

        mutedVideoEl.controls = 'controls';

        if (appsFullScreen === null || appsFullScreen === undefined) {
            // Exit fullscreen mode.
            fsstate = 'closefs';
            exitFullscreen();

            mutedVideoEl.controls = '';
        }

        if (typeof (extraOptions.fullscreenCallBack) === 'function') {
            extraOptions.fullscreenCallBack(fsstate);
        }

        performanceTracker[fsstate].call();
    };

    function play() {
        if (displayedContinueWatch === true) {
            return;
        }
        var videoPromise = mutedVideoEl.play();
        if (videoPromise !== undefined) {
            videoPromise.catch(function (error) { })
                .then(function () { });
        }

        isVideoEnded = false;
    };
    function pause() {
        mutedVideoEl.pause();
    };
    function replay() {
        videoReplayed = true;
        if (mutedVideoEl.readyState == 0) {
            isWaitingForReplay = true;
        }
        else {
            isWaitingForReplay = false;
            mutedVideoEl.currentTime = 0;
            play();
        }
    };
    function mute() {
        mutedVideoEl.muted = true;
    };
    function unmute() {
        mutedVideoEl.muted = false;
        if (videoHasSound === null) {
            videoHasSound = videohasAudio(mutedVideoEl);
            videoControlUI.videoSoundCheck();
        }
    };
    function videohasAudio(_video) {
        return Boolean(_video.mozHasAudio) ||
            Boolean(_video.audioTracks) ||
            Boolean(_video.webkitAudioDecodedByteCount);
    };

    /**
     * When video enter fullscreen.
     */
    function enterFullscreen() {
        if (typeof (extraOptions.onEnterFullscreen) === 'function') {
            extraOptions.onEnterFullscreen();
        }
    };
    /**
     * When video exit fullscreen.
     */
    function exitFullscreen() {
        if (typeof (extraOptions.onExitFullscreen) === 'function') {
            extraOptions.onExitFullscreen();
        }
    };

    function pauseTracker() {
        performanceTracker.pause();
    }

    function resumeTracker() {
        performanceTracker.resume();
    }

    function videoFirstClicked() {
        return userStartClicked;
    }

    function initContinueWatch() {
        videoWrapperEl.classList.add('apps-video-continue-watch');
        forceDisplayClickContinue = true;
        generateClickContinue(true)
    }

    function userClicked() {
        setUserStartClicked();

        if (videoContinueUI != void 0) {
            videoContinueUI.hide();
        }
    }

    function callbackContinueWatch(e = null) {
        if (extraOptions.continueWatch.fullVideoSrc === '' && e !== null) {
            controlLayerClicked(e);
        }
        if(extraOptions.continueWatch.callback !== null) {
            extraOptions.continueWatch.callback();
        }
    }

    function replaceFullVideo() {
        let parent = mutedVideoEl;
        
        while (parent.firstChild) {
            parent.firstChild.remove();
        }

        setVideo();
        setVideo('webm');
        mutedVideoEl.load();
        isVideoReplaced = true;
    }

    function setVideo(ext = 'mp4') {
        if (ext === 'webm' && extraOptions.webm === null) {
            return;
        }

        let sourceEl = document.createElement('source');
        sourceEl.setAttribute('src', extraOptions.continueWatch.fullVideoSrc + '.' + ext);
        sourceEl.setAttribute('type', 'video/' + ext);
        mutedVideoEl.appendChild(sourceEl);
        mutedVideoEl.addEventListener('canplay', heavyVideoCanPlay, false);
    }

    function setUserStartClicked() {
        if(extraOptions.onPlayerActive !== null && userStartClicked === false) {
            extraOptions.onPlayerActive();
        }
        userStartClicked = true;
    }

    function heavyVideo() {
        return isHeavyVideo;
    }

    function heavyVideoCanPlay() {
        if(heavyVideoReady) {
            return;
        }
        heavyVideoReady = true;
        if(videoContinueUI != void 0 && requestReplaceVideo === true) {
            videoContinueUI.triggerCallback();
        }
    }

    function continueWatchVideoReady() {
        if(videoContinueUI != void 0 && heavyVideoReady === true) {
            videoContinueUI.triggerCallback();
        }
        requestReplaceVideo = true;
    }
  
    function VideoControllerUI(clickCallback, enterFullScreenCallback, toggleSoundCallback, replayCallback) {
        this.videoPlayed = videoPlayed;
        this.videoPaused = videoPaused;
        this.videoEnded = videoEnded;
        this.videoLoaded = videoLoaded;
        this.videoSoundCheck = videoSoundCheck;
        this.resetVideoSoundCheck = resetVideoSoundCheck;
  
        var controlWrapperEl = null, endedWrapperEl = null;
        var playButtonWrapperEl = null, controlPlayButtonEl = null, playSvg = '', pauseSvg = '';
        var soundBtnEl = null, fsBtnEl = null, controllersEl = null, slidingIntv = null;
        var soundButtonAttached = false;
  
        let totalCtaClicked_ = 1;
        let hasVideoToReplace_ = false;
  
        initClass();

        function initClass() {
            controlWrapperEl = document.createElement('div');
            controlWrapperEl.classList.add('apps-video-control-wrapper');

            endedWrapperEl = document.createElement('div');
            endedWrapperEl.classList.add('apps-video-ended-wrapper');
            endedWrapperEl.style.display = 'none';
            endedWrapperEl.addEventListener('click', endedLayerClicked, false);

            generateControlComponent();
            generateEndedComponent();

            videoWrapperEl.appendChild(endedWrapperEl);
            videoWrapperEl.appendChild(controlWrapperEl);

            setTimeout(checkSalesModel_, 500);
        };

        function generateControlComponent() {
            // Controllers
            var controllerEl = [
                generateControlsWrapper(),
                {
                    id: 'play_btn_when_paused_' + videoID, cssClass: ['status-container'], cssStyle: { display: 'none' }, childs: [
                        {
                            cssClass: ['btn-wrapper'], childs: [
                                { cssClass: ['video-round-btn'], innerHTML: videoSvg.midcircle() + videoSvg.midplay() }
                            ]
                        }
                    ]
                },
                {
                    id: 'topcta_' + videoID, cssClass: ['top-vidcta-container', 'full-video-height'], cssStyle: { opacity: 1 }, clickFunc: clickOnCTA_, childs: [
                        {
                            cssClass: ['text-vidcta-wrapper'], childs: [
                                { elType: 'span', cssClass: ['cta-text'], innerHTML: extraOptions.playstatectatext },
                                { elType: 'span', innerHTML: videoSvg.landing() }
                            ]
                        }
                    ]
                }
            ];

            for (var i = 0; i < controllerEl.length; i++) {
                innityAppsMobileVideoElementGenerator(controllerEl[i], controlWrapperEl);
            }

            /**
             * Generate controls wrapper with volumn, duration & fullscreen icon.
             * @returns {object} JSON object for generateMaterial function.
             */
            function generateControlsWrapper() {
                var controlsContainer = { id: 'controllers_' + videoID, cssClass: [], childs: [] };

                var controlsContainerCss = ['controllers-container'];
                if (extraOptions.hideStatus !== true) {
                    controlsContainerCss.push('show-controller');
                }
                controlsContainer.cssClass = controlsContainerCss;

                // Volumn icon & duration layer.
                controlsContainer.childs.push(
                    {
                        cssClass: ['controls_wrapper', 'float-to-left'], childs: [
                            { id: 'btn_sound_' + videoID, cssClass: ['video-round-btn', 'audio'], cssStyle: { display: 'block' }, innerHTML: audioSvg },
                            { id: 'text_remain_' + videoID, cssClass: ['player-time', 'hidden-player-icon'], innerHTML: '0:00' }
                        ]
                    }
                );

                // Allowed Play / Pause Video icon
                if (extraOptions.pauseable === true) {
                    var videoPauseableChilds = { id: 'btn_playback_' + videoID, cssClass: ['video-round-btn', 'play-pause'], cssStyle: { display: 'block' }, innerHTML: videoSvg.controlplay() };
                    controlsContainer.childs[0].childs.unshift(videoPauseableChilds);
                }

                // Fullscreen icon.
                if (extraOptions.hideFullscreenIcon === false) {
                    controlsContainer.childs.push(
                        {
                            cssClass: ['controls_wrapper', 'float-to-right'], childs: [
                                { id: 'btn_fs_' + videoID, cssClass: ['video-round-btn', 'fs'], cssStyle: { display: 'block' }, clickFunc: enterFullScreenCallback, innerHTML: fullscreenSvg }
                            ]
                        }
                    );
                }

                return controlsContainer;
            };
        };
        function generateEndedComponent() {
            endedWrapperEl.innerHTML = '';
            // Replay icon.
            if (extraOptions.hideReplayIcon === false) {
                endedWrapperEl.innerHTML = videoSvg.midcircle() + videoSvg.midreplay();
            }

            var ctaMaterials = [{
                cssClass: ['top-vidcta-container'], cssStyle: { opacity: 1 }, clickTag: extraOptions.urls, childs: [
                    {
                        cssClass: ['text-vidcta-wrapper'], childs: [
                            { elType: 'span', cssClass: ['cta-text'], innerHTML: extraOptions.playstatectatext },
                            { elType: 'span', innerHTML: videoSvg.landing() }
                        ]
                    }
                ]
            }];

            for (var i = 0; i < ctaMaterials.length; i++) {
                innityAppsMobileVideoElementGenerator(ctaMaterials[i], endedWrapperEl);
            }
        };

        function videoLoaded() {
            queryRequiredElements();
        };
        function videoEnded() {
            controlWrapperEl.style.display = 'none';
            endedWrapperEl.style.display = '';
            // Sometimes the replay button will not appear without this line
            mutedVideoEl.style.opacity = 0.95;
            if (controlPlayButtonEl !== null) {
                controlPlayButtonEl.classList.add('is-paused');
                togglePlayPauseSVGAnimation();
            }
        };
        function videoPlayed() {
            controlWrapperEl.style.display = '';
            endedWrapperEl.style.display = 'none';
            // Sometime video trigger played faster than video loaded, that why need this checking.
            // playButtonWrapperEl is initial after video had loaded in queryRequiredElements().
            if (playButtonWrapperEl !== null) {
                playButtonWrapperEl.style.display = 'none';
            }
            if (controlPlayButtonEl !== null) {
                controlPlayButtonEl.classList.remove('is-paused');
                togglePlayPauseSVGAnimation(true);
            }
        };
        function videoPaused() {
            // Sometime video trigger played faster than video loaded, that why need this checking.
            // playButtonWrapperEl is initial after video had loaded in queryRequiredElements().
            if (playButtonWrapperEl !== null) {
                playButtonWrapperEl.style.display = 'block';
            }
            if (controlPlayButtonEl !== null) {
                controlPlayButtonEl.classList.add('is-paused');
                togglePlayPauseSVGAnimation();
            }
        };
        function togglePlayPauseSVGAnimation(bool = false) {
            var fromsvg = playSvg, tosvg = pauseSvg;
            if (bool === false) {
                fromsvg = pauseSvg;
                tosvg = playSvg;
            }
            document.getElementById('play_pause_animation').setAttribute('from', fromsvg);
            document.getElementById('play_pause_animation').setAttribute('to', tosvg);
            document.getElementById('play_pause_animation').beginElement();
        }
        function videoSoundChange() {
            if (soundBtnEl === null) {
                return;
            }

            if (mutedVideoEl.muted === true) {
                soundBtnEl.classList.add("is-muted");
            }
            else {
                soundBtnEl.classList.remove("is-muted");
            }
        };
        function toggleVideoSound(e) {
            e.stopPropagation();
            if ((extraOptions.continueWatch.fullVideoSrc === '' && extraOptions.continueWatch.tracks.timercode === '') || videoContinueUI === void 0) {
                toggleSoundCallback();
            } else {
                if (isVideoReplaced === true) {
                    toggleSoundCallback();
                } else {
                    replaceFullVideo();
                    play();
                    unmute();
                    videoWrapperEl.classList.remove('apps-video-continue-watch');
                    continueWatchVideoReady();
                }
            }
        };
        function controlLayerClicked(e) {
            if (extraOptions.preventClickPropagation === true) {
                if(e instanceof Event) {
                    e.stopPropagation();
                }
            }
            clickCallback();
        }
        function endedLayerClicked(e) {
            e.stopPropagation();

            replayCallback();
        };

        function showController(e) {
            if (extraOptions.hideStatus !== true) {
                clearTimeout(slidingIntv);
                controllersEl.style.display = "block";
                slidingIntv = setTimeout(function () {
                    controllersEl.classList.add('show-controller');
                }, 300);
            }
        };
        function hideController(e) {
            clearTimeout(slidingIntv);
            controllersEl.classList.remove('show-controller');
            slidingIntv = setTimeout(function () {
                controllersEl.style.display = "none";
            }, 300);
        };

        function checkSalesModel_() {
            // Only CPM sales model come with 1st & 2nd clicks to landing.
            if (extraOptions.cpm === false && extraOptions.country.toUpperCase() !== 'TW') {
                totalCtaClicked_ = 2;

                let ctaContainers = document.getElementsByClassName('top-vidcta-container');
                for (let i = 0; i < ctaContainers.length; i++) {
                    ctaContainers[i].classList.remove('full-video-height');
                }

            }
        }

        function clickOnCTA_() {
            if (totalCtaClicked_ >= 2) {
                let ctaContainers = document.getElementsByClassName('top-vidcta-container');
                for (let i = 0; i < ctaContainers.length; i++) {
                    ctaContainers[i].classList.remove('full-video-height');
                }
            }

            if (extraOptions.clicktoUnmute === true && mutedVideoEl.muted === true) {
                unmute();
            }

            if (extraOptions.urls.indexOf('http') > -1) {
                InnityHTMLAd.click({ url: extraOptions.urls });
            }
            else {
                innityAppsTriggerClicktagHandler(extraOptions.urls);
            }

            totalCtaClicked_++;
            setUserStartClicked();

            /* This is used for continue watch */
            if ((extraOptions.continueWatch.fullVideoSrc === '' && extraOptions.continueWatch.tracks.timercode === '') || videoContinueUI === void 0) {
                return;
            }

            if (isVideoReplaced === true) {
                return;
            }

            replaceFullVideo();
            unmute();
            videoWrapperEl.classList.remove('apps-video-continue-watch');
            continueWatchVideoReady();
        }

        /**
         * This is a workaround to query HTML elements after they had append into DOM.
         */
        function queryRequiredElements() {
            playButtonWrapperEl = document.getElementById('play_btn_when_paused_' + videoID);

            soundBtnEl = document.getElementById('btn_sound_' + videoID);
            controllersEl = document.getElementById('controllers_' + videoID);
            if (extraOptions.hideFullscreenIcon === false) {
                fsBtnEl = document.getElementById('btn_fs_' + videoID);
            }

            if (extraOptions.pauseable === true) {
                controlPlayButtonEl = document.getElementById('btn_playback_' + videoID);
                playSvg = document.getElementById('play_pause_animation').getAttribute('from');
                pauseSvg = document.getElementById('play_pause_animation').getAttribute('to');
                controlPlayButtonEl.addEventListener("click", toggleVideoPlays, false);
            }

            videoWrapperEl.addEventListener('click', controlLayerClicked, false);
            videoWrapperEl.addEventListener('mouseenter', showController, false);
            videoWrapperEl.addEventListener('mouseleave', hideController, false);
        };

        function videoSoundCheck() {
            if (soundBtnEl === null) {
                return;
            }

            if (!soundButtonAttached) {
                videoSoundChange();
                soundBtnEl.addEventListener("click", toggleVideoSound, false);
                mutedVideoEl.addEventListener('volumechange', videoSoundChange, false);
                soundButtonAttached = true;
            }

            if (videoHasSound === null) {
                return;
            }

            if (videoHasSound === false) {
                soundBtnEl.classList.add("is-muted");
                soundBtnEl.classList.add("video-no-sound");
                soundBtnEl.removeEventListener("click", toggleVideoSound, false);
                mutedVideoEl.removeEventListener('volumechange', videoSoundChange, false);
            }
            else {
                soundBtnEl.classList.remove("video-no-sound");
            }

        };

        function resetVideoSoundCheck() {
            soundButtonAttached = false;
            videoSoundCheck();
        };

        function toggleVideoPlays(event) {
            event.stopPropagation();

            if ((extraOptions.continueWatch.fullVideoSrc === '' && extraOptions.continueWatch.tracks.timercode === '') || videoContinueUI === void 0) {
                hasVideoToReplace_ = false;
            }
            else if (isVideoReplaced === true) {
                hasVideoToReplace_ = false;
            }
            else {
                hasVideoToReplace_ = true;
            }

            if(hasVideoToReplace_) {
                /* This is used for continue watch */
                replaceFullVideo();
                play();
                unmute();
                videoWrapperEl.classList.remove('apps-video-continue-watch');
                continueWatchVideoReady();
            }
            else {
                if(this.classList.contains('is-paused')) {
                    play();
                }
                else {
                    pause();
                }
      
                if(extraOptions.clicktoUnmute === true && mutedVideoEl.muted === true) {
                    unmute();
                }
            }
            
            setUserStartClicked();
        }
    };

    function VideoContinueWatchUI(continueCallback) {
        var mainEl;
        var showContinueCSSClass = '';
        var hasContinueWatch = false;
        var clickedContinueEvent = null;

        initClass();

        function initClass() {
            mainEl = document.createElement('div');
            mainEl.setAttribute('class','apps-video-continue-watch-container');
            mainEl.setAttribute('style','display: none;');
            mainEl.id = 'continuewatch_' + videoID;
            videoWrapperEl.appendChild(mainEl);

            var continueMaterial = [
                {
                    id: 'continuewatch_background_' + videoID, cssClass: ['apps-video-continue-watch-background'], childs: [
                        { id: 'btn_continuewatch_' + videoID, cssClass: ['apps-video-continue-watch-button'], childs: [] }
                    ]
                }
            ];

            if (extraOptions.continueWatch.text != "") {
                continueMaterial[0]['childs'][0]['childs'].unshift(
                    {
                        cssClass: ['apps-video-continue-watch-text'], childs: [
                            { elType: 'span', innerHTML: extraOptions.continueWatch.text }
                        ]
                    }
                );
            }

            if (extraOptions.continueWatch.tracks.thumbnail === null) {
                continueMaterial[0]['childs'][0]['childs'].unshift(
                    {
                        id: 'btn_continuewatch_thumbnail_' + videoID, cssClass: ['apps-video-continue-watch-thumbnail', 'without-video-continuewatch-thumbnail'], childs: [
                            { cssClass: ['apps-video-continue-watch-icon-wrapper'], innerHTML: videoSvg.midplay() },
                        ]
                    },
                );
            }
            else {
                continueMaterial[0]['childs'][0]['childs'].push(
                    {
                        id: 'btn_continuewatch_thumbnail_' + videoID, cssClass: ['apps-video-continue-watch-thumbnail'], childs: [
                            { elType: 'img', cssClass: ['apps-video-continue-watch-image'], attrs: { 'src': extraOptions.continueWatch.tracks.thumbnail } },
                            { cssClass: ['apps-video-continue-watch-icon-wrapper'], innerHTML: videoSvg.midplay() },
                            { cssClass: ['apps-video-continue-watch-thumbnail-border'] },
                        ]
                    },
                );
            }

            for (var i = 0; i < continueMaterial.length; i++) {
                innityAppsMobileVideoElementGenerator(continueMaterial[i], mainEl);
            }

            // Bind resize events
            window.addEventListener("resize", resizeClass, false);
            document.getElementById('btn_continuewatch_' + videoID).addEventListener("click", hiddenClass, false);
            document.getElementById('continuewatch_background_' + videoID).addEventListener("click", hiddenClass, false);
            resizeClass();
        }

        function displayClass() {
            displayedContinueWatch = true;
            if (hasContinueWatch === true) {
                return;
            }
            hasContinueWatch = true;
            mainEl.setAttribute('style','');
            setTimeout(()=>{
                mainEl.classList.add('apps-video-continue-watch-pause-display');
            }, 0);
        }

        function hiddenClass(event) {
            var e_ = null;
            if (event instanceof Event) {
                event.stopPropagation();
                e_ = event;
            }

            videoWrapperEl.classList.remove('apps-video-continue-watch');
            mainEl.classList.remove('apps-video-continue-watch-pause-display');
            displayedContinueWatch = false;
            play();

            setTimeout(() => {
                mainEl.setAttribute('style', 'display: none;');
                if (extraOptions.continueWatch.restart === true) {
                    mutedVideoEl.currentTime = 0;
                } else {
                    mutedVideoEl.currentTime = extraOptions.continueWatch.tracks.timercode;
                }
                unmute();
                continueWatchVideoReady();
            }, 1000);

            clickedContinueEvent = event;
        }

        function currentRatio(width, height) {
            var gcd_ = (a, b) => (b == 0) ? a : gcd_(b, a % b);
            var ratio_ = ((a, b) => (b == 0) ? a : gcd_(b, a % b))(width, height);
            var value_ = (width / ratio_) / (height / ratio_);
            var commonRatios_ = [
                [1, '1:1'], [eval(2 / 1), '2:1'], [eval(4 / 3), '4:3'], [eval(3 / 2), '3:2'], [eval(5 / 3), '5:3'], [eval(16 / 9), '16:9'], [eval(1 / 2), '1:2'], [eval(2 / 3), '2:3'], [eval(3 / 4), '3:4'], [eval(3 / 5), '3:5'], [eval(9 / 16), '9:16'], [eval(9 / 19.488), '9:19.5'], [3, '3']
            ];
            var final_ = "16:9";

            for (var i = 0; i < commonRatios_.length; i++) {
                if (value_.toFixed(2) == commonRatios_[i][0].toFixed(2)) {
                    final_ = commonRatios_[i][1];
                    break;
                }
                else if (Math.round(value_) == Math.round(commonRatios_[i][0])) {
                    final_ = commonRatios_[i][1];
                }
                else {
                    final_ = "1: " + value_;
                }
            }

            return final_;
        }

        function resizeClass() {
            var withinLandscape_ = (videoWrapperEl.clientWidth > videoWrapperEl.clientHeight) ? 1 : 0;
            var videoRatio_ = currentRatio(videoWrapperEl.clientWidth, videoWrapperEl.clientHeight);
            var gridRow_ = Boolean(withinLandscape_) === true ? eval(10 / 3) : eval(10 / 4.5),
                gridCol_ = Boolean(withinLandscape_) === true ? 5 : 10;

            switch (videoRatio_) {
                case "4:3":
                    gridRow_ = eval(10 / 4);
                    gridCol_ = 5.25;
                    break;
                case "2:1":
                    gridRow_ = eval(10 / 2.75);
                    gridCol_ = 5.25;
                    break;

                case "1:1":
                    gridRow_ = eval(10 / 4.25);
                    gridCol_ = 5.75;
                    break;
                case "1:2":
                    gridRow_ = eval(10 / 4.5);
                    gridCol_ = 11;
                    break;
                case "3:4":
                    gridRow_ = eval(10 / 5.5);
                    gridCol_ = 7.25;
                    break;
                case "9:19.5":
                    gridRow_ = eval(10 / 4.5);
                    gridCol_ = 12;
                    break;
            }

            if (videoWrapperEl.clientWidth > 620) {
                gridRow_ = gridRow_ * 1.2;
                gridCol_ = gridCol_ * 1.2;
            }

            document.getElementById('btn_continuewatch_' + videoID).style.height = Math.round(videoWrapperEl.clientHeight / gridCol_) + 'px';
            document.getElementById('btn_continuewatch_' + videoID).style.width = Math.round(videoWrapperEl.clientWidth / gridRow_) + 'px';
            document.getElementById('btn_continuewatch_' + videoID).style.bottom = ((num)=>{return Math.round(Math.min(Math.max(num, 30), 90)); })(eval(videoWrapperEl.clientHeight / gridCol_ * 1.25)) + 'px';
            document.getElementById('btn_continuewatch_' + videoID).style.fontSize = ((num)=>{return Math.round(Math.min(Math.max(num, 11), 18)); })(eval(videoWrapperEl.clientHeight / gridCol_ / 6)) + 'px';
        }

        function triggerCallback() {
            if(typeof continueCallback === "function") {
                continueCallback(clickedContinueEvent);
            }
        }

        return {
            main: mainEl,
            display: displayClass,
            hide: hiddenClass,
            triggerCallback: triggerCallback
        }
    }

    /**
     * Performance tracker to record down video click to play & video loaded.
     * @argument {VideoElement} videoEl
     */
    function PerformanceTracker(videoEl) {
        this.fireClickToPlay = fireClickToPlay;
        this.openfs = openfs;
        this.closefs = closefs;
        this.pause = pause;
        this.resume = resume;

        var trackingVideoID = '';
        var isClicked = false;

        initClass();

        function initClass() {
            if (typeof (videoEl) === 'undefined' || videoEl === null) {
                return;
            }

            var videoID = mutedVideoEl.id;
            trackingVideoID = '_' + videoID[0].toUpperCase() + videoID.substr(1);

            bindVideoEvent();
        };

        function bindVideoEvent() {
            videoEl.addEventListener('loadeddata', fireLoaded, false);
        };

        function fireLoaded() {
            InnityHTMLAd.track(trackingVideoID + '_AutoLoaded');
        };
        function fireClickToPlay() {
            if (isClicked === true) {
                return;
            }

            InnityHTMLAd.track(trackingVideoID + '_ClickAutoToPlay');
            isClicked = true;
        };
        function openfs() {
            if (extraOptions.tracking === true) {
                InnityHTMLAd.track(trackingVideoID + "_OpenFullscreen");
            }
        };
        function closefs() {
            if (extraOptions.tracking === true) {
                InnityHTMLAd.track(trackingVideoID + "_CloseFullscreen");
            }
        };
        function pause() {
            if (extraOptions.tracking === true && typeof InnityHTMLAd.pauseTracker === 'function') {
                InnityHTMLAd.pauseTracker();
            }
        };
        function resume() {
            if (extraOptions.tracking === true && typeof InnityHTMLAd.resumeTracker === 'function') {
                InnityHTMLAd.resumeTracker();
            }
        }
    };
}

function InnityAppsVideoPreview(containerID, videoID, options, videoScreenCapImgSrc, canvasOptions, videouioptions) {
    this.currentTime = 0;
    this.duration = 0;

    // Class design to ease designer.
    this.noLoop = noLoop;
    this.noAutoplay = noAutoplay;
    this.remainPreviewAfterClick = remainPreviewAfterClick;
    this.setClickCallback = setClickCallback;
    this.startEngine = startEngine;
    this.setVideoEndedCallback = setVideoEndedCallback;
    this.setFullScreenCallback = setFullScreenCallback;

    this.playPreview = playPreview;
    this.pausePreview = pausePreview;
    this.restartPreview = restartPreview;
    this.startVideoPlay = startVideoPlay;
    this.getCurrentTime = getCurrentTime;
    this.getDuration = getDuration;
    this.getVideoElement = getVideoElement;
    this.getVersion = getVersion;
    this.videoFirstClicked = videoFirstClicked;

    // This is call by internal library only.
    this.initVideoPlayer = initVideoPlayer;
    this.addListener = addListener;

    this.pauseTracker = pauseTracker;
    this.resumeTracker = resumeTracker;

    // Modified on 9/May/2023.
    var version = '3.2.5';

    var extraOptions = mergeObject({ webm: null, mp4: null, poster: null, onLoad: null, mpg: null, canvaswidth: '320', canvasheight: '180', tracking: true, autoplay: true, loop: true, hideMpgWhenHtmlPlayed: true, clickCallback: null, videoEndedCallback: null, autostart: true, automute: true, mouseoverSound: false, advertisementlabel: false, playstatectatext: "Learn More", adtext: "Advertisement", urls: 'clickTAG', fullscreen: false, fullscreenCallBack: null, forceFallback: false, forceFullScreen: true, volume: 100, pauseable: false, clicktoUnmute: false, onLoad: null }, options, 'extraOptions');
    var self = this;
    var videoPlayer;
    var videoUI = null;
    var canvasID = 'innityAppsVideoCanvas-' + videoID;
    var trackVideoID = videoID;
    var autoplaybrowser = false;
    platformDetectorWrapper();
    var mobileVideo = true;
    var requireHTMLVideo = false;
    var performanceTracker = null;
    var videoSvg = new generateVideoSVGIcon();
    var videoHasSound = null;
    var userStartClicked = false;
    let videoReplayed = false;

    var loadListeners = [];
    var playListeners = [];
    var pauseListeners = [];
    var endedListeners = [];
    var timeUpdateListeners = [];
    var timeUpdateInterval = null;

    var isPreviewPause = false;
    var bindVideoEvent;

    function initClass() {
        if (checkRequirement() === false) {
            errorLog('Class init fail.');
            return;
        }

        requireHTMLVideo = (extraOptions.mp4 === null || extraOptions.mp4 == "") ? false : true;
        extraOptions.tracking = requireHTMLVideo;
        if (!requireHTMLVideo) mobileVideo = true;

        performanceTracker = new PerformanceTracker(videoID);
        videoUI = new InnityAppsVideoUI(containerID, canvasID, videoID, extraOptions, videoScreenCapImgSrc, self);

        try {
            // Force html add user agent for css usage
            var doc = document.documentElement;
            doc.setAttribute('data-useragent', navigator.userAgent);
            doc.setAttribute('data-platform', navigator.platform);
        } catch (error) { }

    };
    function checkRequirement() {
        if (innityAppsMobileVideoElementGenerator === null) {
            errorLog('generateMaterial or innityAppsMaterialGenerator function didn\'t exist.');
            return false;
        }

        if (typeof (InnityHTMLAd) !== 'object') {
            errorLog('InnityHTMLAd object from Advenue didn\'t exist.');
            return false;
        }

        if (autoplaybrowser) {
            mobileVideo = (autoplaybrowser.getOS() == 'ios' || autoplaybrowser.getOS() == 'android') ? true : false;
            if (extraOptions.mpg === null) mobileVideo = false;
        } else {
            errorLog('Browser detection function from Browser.js didn\'t exist.');
            return false;
        }

        return true;
    };
    function initVideoPlayer() {
        videoPlayer = new jsmpeg(
            extraOptions.mpg,
            {
                canvas: document.getElementById(canvasID),
                loop: extraOptions.loop,
                seekable: true,
                onload: previewOnLoad,
                onfinished: previewEnded,
                autoplay: extraOptions.autoplay
            });
    };

    function platformDetectorWrapper() {
        if (typeof (Browser) === 'function') {
            autoplaybrowser = new Browser();
        } else if (typeof (MobilePlatform) === 'function') {
            autoplaybrowser = new MobilePlatform();
        } else if (typeof InnityAppsMobilePlatform === 'function') {
            autoplaybrowser = new InnityAppsMobilePlatform();
        }
    }

    function addListener(event, handler) {
        switch (event) {
            case 'load':
                loadListeners.push(handler);
                break;
            case 'play':
                playListeners.push(handler);
                break;
            case 'pause':
                pauseListeners.push(handler);
                break;
            case 'ended':
                endedListeners.push(handler);
                break;
            case 'timeupdate':
                timeUpdateListeners.push(handler);
                break;
            default:
                errorLog('Incorrect eventlistener. [' + event + ']');
                break;
        }
    };
    function previewOnLoad() {
        performanceTracker.fireLoaded();

        self.duration = videoPlayer.duration;
        videoUI.videoIsReady();

        for (var i = 0; i < loadListeners.length; i++) {
            var curEventListener = loadListeners[i];
            if (typeof (curEventListener) === 'function') {
                curEventListener();
            }
        }

        if (extraOptions.autoplay === true) {
            previewPlayed();
        }
    };
    function previewPlayed() {
        if (timeUpdateInterval !== null) {
            return;
        }

        for (var i = 0; i < playListeners.length; i++) {
            var curEventListener = playListeners[i];
            if (typeof (curEventListener) === 'function') {
                curEventListener({ type: 'play' });
            }
        }

        timeUpdateInterval = setInterval(preivewOnTimeUpdate, 163);
    };
    function previewPaused() {
        clearInterval(timeUpdateInterval);
        timeUpdateInterval = null;

        for (var i = 0; i < pauseListeners.length; i++) {
            var curEventListener = pauseListeners[i];
            if (typeof (curEventListener) === 'function') {
                curEventListener({ type: 'pause' });
            }
        }
    };
    function previewEnded() {
        videoPlayer.currentTime = 0;

        if (extraOptions.loop !== true) {
            clearInterval(timeUpdateInterval);
            timeUpdateInterval = null;
        }

        for (var i = 0; i < endedListeners.length; i++) {
            var curEventListener = endedListeners[i];
            if (typeof (curEventListener) === 'function') {
                curEventListener({ type: 'ended' });
            }
        }
    };
    function preivewOnTimeUpdate() {
        self.currentTime = videoPlayer.currentTime;

        for (var i = 0; i < timeUpdateListeners.length; i++) {
            var curEventListener = timeUpdateListeners[i];
            if (typeof (curEventListener) === 'function') {
                curEventListener({ type: 'timeupdate' });
            }
        }

        if (isPreviewPause === true) {
            if (videoUI)
                pausePreview();
        }
    };

    function noLoop() {
        extraOptions.loop = false;
    };
    function noAutoplay() {
        extraOptions.autoplay = false;
    };
    function remainPreviewAfterClick() {
        extraOptions.hideMpgWhenHtmlPlayed = false;
    };
    function setClickCallback(clickCallback) {
        extraOptions.clickCallback = clickCallback;
    };
    function setVideoEndedCallback(videoEndedCallback) {
        extraOptions.videoEndedCallback = videoEndedCallback;
    };
    function setFullScreenCallback(fullscreenCallBack) {
        extraOptions.fullscreenCallBack = fullscreenCallBack;
    };
    function startEngine() {
        initClass();
    };

    function playPreview() {
        if (requireHTMLVideo && document.getElementById(videoID)) {
            if (Boolean(document.getElementById(videoID).played.length)) {
                if (autoplaybrowser.getOS() !== 'ios') {
                    document.getElementById(videoID).play();
                }
                return;
            }
        }
        if (mobileVideo == false) return;
        isPreviewPause = false;
        videoPlayer.play();
        previewPlayed();
    };
    function pausePreview() {
        if (requireHTMLVideo && document.getElementById(videoID)) {
            if (Boolean(document.getElementById(videoID).played.length)) {
                videoUI.pauseHTMLVideo();
                return;
            }
        }
        if (mobileVideo == false) return;
        isPreviewPause = true;
        videoPlayer.pause();
        previewPaused();
    };
    function restartPreview() {
        if (mobileVideo) videoPlayer.currentTime = 0;
        playPreview();
    };
    function startVideoPlay() {
        if (videoUI != null)
            videoUI.playHTMLVideo();
    };
    function getCurrentTime() {
        var c = 0; if (videoUI != null) c = Math.ceil(videoUI.currentTime());
        return c;
    };
    function getDuration() {
        var d = 0; if (videoUI != null) d = Math.ceil(videoUI.duration());
        return d;
    };

    function getVideoElement() {
        if (requireHTMLVideo) {
            return document.getElementById(videoID);
        }
    };

    function mergeObject(defaultObj, overrideObject, reference) {
        for (var attributeKey in overrideObject) {
            if (defaultObj.hasOwnProperty(attributeKey)) {
                defaultObj[attributeKey] = overrideObject[attributeKey];
            }
            else {
                console.warn('[Version ' + version + '] Key [' + attributeKey + '] not found in object merging process.', reference);
            }
        }

        return defaultObj;
    };

    function getVersion() {
        return version;
    };
    function errorLog(msg) {
        console.error('[Version ' + version + '] ' + msg);
    };

    function InnityAppsVideoUI(containerID, canvasID, videoID, options, videoScreenCapImgSrc, innityAppsVideoPreview) {
        this.playHTMLVideo = playHTMLVideo;
        this.pauseHTMLVideo = pauseHTMLVideo;
        this.videoIsReady = videoIsReady;
        this.currentTime = currentTimeHTMLVideo;
        this.duration = durationHTMLVideo;

        var customVideoID = '-' + videoID;

        var videoEl = [], videoMuted = options.automute;
        var vid, soundBtn, invisibleBtn, playBtn,
            playerState, container, controllers, topctaBtn, txtRemain,
            videoprogress_interval = null, videoStarted = false, videoFinished = true;

        var slidingIntv = null, allowHideController = false, mouseAvailable = (autoplaybrowser.getOS() == 'ios' || autoplaybrowser.getOS() == 'android') ? false : true;
        var controlPlayButtonEl = null, playSvg = '', pauseSvg = '', soundButtonAttached = false;

        videoEl = [
            {
                id: 'innityAppsLoadContainer' + customVideoID, cssClass: ['preview-ui-container'], childs: [
                    { elType: 'img', id: 'innityAppsLoadBg' + customVideoID, cssClass: ['backupimage'], attrs: { 'src': videoScreenCapImgSrc } }
                ]
            }
        ];

        if (mobileVideo) {
            videoEl.push({ id: canvasID, elType: 'canvas', cssClass: ['preview-canvas'], cssStyle: { opacity: 0 }, attrs: { width: options.canvaswidth, height: options.canvasheight } });
        }

        initClass();

        function initClass() {
            generateHTMLVideo();

            for (var i = 0; i < videoEl.length; i++) {
                innityAppsMobileVideoElementGenerator(videoEl[i], document.getElementById(containerID));
            }

            trackHTML5Video();
            checkAutoplayCondition();
            bindVideoEvent = new bindPlayerControllerComponent();

            if (mobileVideo) {
                innityAppsVideoPreview.initVideoPlayer();
            }
            else {
                if (requireHTMLVideo) {
                    toggleHTML5VideoStatus("previewend");
                }
            }

        };

        function checkAutoplayCondition() {
            if (options.autostart) {
                options.automute = true;
            }
            videoMuted = options.automute;
        };

        function generateHTMLVideo() {
            var videoJSON = { id: videoID, elType: 'video', cssClass: ['preview-video'], attrs: { preload: 'metadata', poster: videoScreenCapImgSrc, controlsList: 'nodownload', playsinline: '' }, cssStyle: { opacity: '0' }, childs: [] };
            if (options.mp4 != null) {
                var _mp4El = { elType: 'source', attrs: { src: options.mp4, type: 'video/mp4' } };
                videoJSON.childs.push(_mp4El);
            };
            if (options.webm != null) {
                var _webmEl = { elType: 'source', attrs: { src: options.webm, type: 'video/webm' } };
                videoJSON.childs.push(_webmEl);
            };
            // Player Status
            var playerstateEl = {
                id: 'playerstate_' + videoID, cssClass: ['status-container', 'preload-state', 'pause-preloader-animation'], childs: [
                    { id: 'btn_invisible_' + videoID, cssClass: ['invisible-tap-area'] },
                    {
                        cssClass: ['btn-wrapper'], childs: [
                            { id: 'btn_player_' + videoID, cssClass: ['video-round-btn'], innerHTML: (function () { return videoSvg.midcircle() + videoSvg.fullstatus() })() }
                        ]
                    }
                ]
            };
            // topCTA
            var topctaEl = {
                id: 'topcta_' + videoID, cssClass: ['top-vidcta-container'], clickFunc: clickOnCTA_, childs: [
                    {
                        cssClass: ['text-vidcta-wrapper'], childs: [
                            { elType: 'span', cssClass: ['cta-text'], innerHTML: options.playstatectatext },
                            { elType: 'span', innerHTML: videoSvg.landing() },
                        ]
                    }
                ]
            };
            // Controllers
            var controllerEl = {
                id: 'controllers_' + videoID, cssClass: ['controllers-container'], childs: [
                    {
                        cssClass: ['controls_wrapper', 'float-to-left'], childs: [
                            { id: 'btn_sound_' + videoID, cssClass: ['video-round-btn', 'audio'], cssStyle: { display: 'block' }, innerHTML: videoSvg.audio() },
                            { id: 'text_remain_' + videoID, cssClass: ['player-time', 'hidden-player-icon'], clickFunc: clickOnCTA_, innerHTML: '0:00' }
                        ]
                    }
                ]
            };
            // ProgressBar
            var progressEl = {
                cssClass: ['progress-container'], childs: [
                    { id: 'progressbar_' + videoID, cssClass: ['timebar'], cssStyle: { width: '0' } }
                ]
            };
            // Advertisement
            var adLabelEl = {
                cssClass: ['advertisement-label-container'], clickFunc: clickOnCTA_, childs: [
                    { elType: 'span', cssClass: ['advertisement'], innerHTML: options.adtext }
                ]
            };

            if (options.fullscreen) {
                var _btnfs = {
                    cssClass: ['controls_wrapper', 'float-to-right', 'hidden-player-icon'], childs: [
                        { id: 'btn_fs_' + videoID, cssClass: ['video-round-btn', 'fs'], cssStyle: { display: 'block' }, innerHTML: videoSvg.fullscreen() }
                    ]
                };
                controllerEl.childs.push(_btnfs);
            }

            // Allowed Play / Pause Video icon
            if (options.pauseable === true) {
                var videoPauseableChilds = { id: 'btn_playback_' + videoID, cssClass: ['video-round-btn', 'play-pause'], cssStyle: { display: 'block' }, innerHTML: videoSvg.controlplay() };
                controllerEl.childs[0].childs.unshift(videoPauseableChilds);
            }

            // Check if HTML Video is needed.
            if (requireHTMLVideo) {
                videoEl.push(videoJSON, playerstateEl, controllerEl, topctaEl, adLabelEl);
            }
            else {
                playerstateEl = {
                    id: 'playerstate_' + videoID, cssClass: ['status-container', 'preload-state', 'no-mp4'], clickFunc: clickToPlayHTMLVideo, childs: [
                        { id: 'btn_invisible_' + videoID, cssClass: ['invisible-tap-area'] },
                        { cssClass: ['btn-wrapper'], childs: [{ id: 'btn_player_' + videoID, cssClass: ['video-round-btn'], innerHTML: videoSvg.nomp4() }] }
                    ]
                };
                videoEl.push(playerstateEl, topctaEl);
            }
        };

        function clickOnCTA_() {
            if (options.clicktoUnmute === true && document.getElementById(videoID).muted === true) {
                toggleHTML5VideoAudio();
            }

            if (options.urls.indexOf('http') > -1) {
                InnityHTMLAd.click({ url: options.urls });
            }
            else {
                InnityHTMLAd.click({ clickTAG: options.urls });
            }
            
            setUserStartClicked();
            pauseHTMLVideo();
        }

        function clickToPlayHTMLVideo() {
            playHTMLVideo();
            setUserStartClicked();
        }

        function playHTMLVideo() {
            if (requireHTMLVideo) {

                document.getElementById(videoID).style.opacity = '1';
                var videoPromise = document.getElementById(videoID).play();
                if (videoPromise !== undefined) {
                    videoPromise.catch(function (error) { })
                        .then(function () { });
                }

                if (mobileVideo) {
                    if (options.hideMpgWhenHtmlPlayed === true) {
                        document.getElementById(canvasID).style.display = 'none';
                        if (!videoStarted) {
                            innityAppsVideoPreview.pausePreview();
                        }
                        if (options.automute && !videoStarted) {
                            setTimeout(function () {
                                // Reset sound video sound detection due to detection need to video playing
                                if (videoHasSound === false) {
                                    soundButtonAttached = false;
                                    videoHasSound = videohasAudio(document.getElementById(videoID));
                                    videoSoundCheck();
                                }
                                toggleHTML5VideoAudio();
                                if (typeof (options.onLoad) === 'function') {
                                    options.onLoad({
                                        videoDuration: vid.duration
                                    });
                                }
                            }, 200);
                        }
                    }
                }

                document.getElementById('innityAppsLoadContainer' + customVideoID).style.display = 'none';
                performanceTracker.fireClickToPlay();

                if (options.clicktoUnmute === true && document.getElementById(videoID).muted === true) {
                    toggleHTML5VideoAudio();
                }
            }

            if (!videoStarted && typeof (options.clickCallback) === 'function') {
                options.clickCallback();
            }

            if (videoFinished === true) {
                videoReplayed = true;
            }
        };
        function pauseHTMLVideo() {
            if (requireHTMLVideo) {
                document.getElementById(videoID).pause();
            }
        };
        function currentTimeHTMLVideo() {
            if (requireHTMLVideo) {
                return document.getElementById(videoID).currentTime;
            } else {
                return videoPlayer.currentTime;
            }
        };
        function durationHTMLVideo() {
            if (requireHTMLVideo) {
                return document.getElementById(videoID).duration;
            } else {
                return videoPlayer.duration;
            }
        };

        function videoIsReady() {
            document.getElementById(canvasID).style.opacity = 1;
            document.getElementById('innityAppsLoadContainer' + customVideoID).style.display = 'none';

            if (requireHTMLVideo) {
                innityAppsVideoPreview.addListener("play", function () {
                    if (!videoStarted) {
                        toggleHTML5VideoStatus("nosound");
                        playerState.classList.remove("pause-preloader-animation");
                    }
                });
                innityAppsVideoPreview.addListener("pause", function () {
                    if (!videoStarted) {
                        playerState.classList.add("pause-preloader-animation");
                    }
                });
                innityAppsVideoPreview.addListener("ended", function () {
                    if (!videoStarted) {
                        toggleHTML5VideoStatus("previewend");
                    }
                });
            }
            else {
                playerState.classList.remove("preload-state");
                playerState.classList.add("playing-state");
            }
        };

        function trackHTML5Video() {
            if (options.tracking === true) {
                InnityHTMLAd.attachVideo(document.getElementById(videoID));
                trackVideoID = "_Video" + InnityHTMLAd.vids.length;
            }
        };

        function toggleHTML5VideoStatus(_status) {
            var cur = _status + "-state";
            var classtype = ["preload-state", "nosound-state", "previewend-state", "playing-state", "paused-state", "ended-state"];
            classtype.splice(classtype.indexOf(cur), 1);

            classtype.forEach(function (i) {
                playerState.classList.remove(i);
                controllers.classList.remove(i);
            })

            playerState.classList.add(cur);
            controllers.classList.add(cur);

            switch (_status) {
                case "playing":
                    if (controlPlayButtonEl !== null) {
                        controlPlayButtonEl.classList.remove('is-paused');
                        togglePlayPauseSVGAnimation(true);
                    }
                    if (videoHasSound === null) {
                        videoSoundCheck();
                    }
                    break;
                case "paused":
                case "ended":
                    if (controlPlayButtonEl !== null) {
                        controlPlayButtonEl.classList.add('is-paused');
                        togglePlayPauseSVGAnimation();
                    }
                    break;
            }
        };

        function toggleHTML5VideoAudio(e) {
            if (typeof e !== 'undefined') {
                e.stopPropagation();
                if (e.type == "mouseover" || e.type == "mouseout") {
                    if (videoMuted == false) return;
                }
                if (e.type == "click") {
                    setUserStartClicked();
                }
            }

            if (videoHasSound === false) {
                return;
            }

            if (videoHasSound === null) {
                videoHasSound = videohasAudio(document.getElementById(videoID));
                videoSoundCheck();
            }

            if (vid.muted) {
                vid.muted = false;
                videoMuted = false;
            } else {
                vid.muted = true;
            }
        };

        var pause_ = !1;

        function toggleHTML5VideoPlay(e) {
            if (vid.paused) {
                playHTMLVideo();
            } else {
                pauseHTMLVideo();
            }
        };

        function videohasAudio(_video) {
            return Boolean(_video.mozHasAudio) ||
                Boolean(_video.audioTracks) ||
                Boolean(_video.webkitAudioDecodedByteCount);
        };

        function videoSoundChange() {
            var soundBtn = document.getElementById("btn_sound_" + videoID);

            if (soundBtn === null) {
                return;
            }

            if (vid.muted === true) {
                soundBtn.classList.add("is-muted");
            }
            else {
                soundBtn.classList.remove("is-muted");
            }
        }

        function videoSoundCheck() {
            var vid = document.getElementById(videoID),
                soundBtn = document.getElementById("btn_sound_" + videoID);

            if (!soundButtonAttached) {
                videoSoundChange();
                soundBtn.addEventListener("click", toggleHTML5VideoAudio, false);
                vid.addEventListener("volumechange", bindVideoEvent.videoStatus, false);
                soundButtonAttached = true;
            }

            if (videoHasSound === null) {
                return;
            }

            if (videoHasSound === false) {
                soundBtn.classList.add("is-muted");
                soundBtn.classList.add("video-no-sound");
                soundBtn.removeEventListener("click", toggleHTML5VideoAudio, false);
                vid.removeEventListener("volumechange", bindVideoEvent.videoStatus, false);
            }
            else {
                soundBtn.classList.remove('video-no-sound');
            }
        };

        function convert_toMMSS(secs) {
            var sec_num = Math.ceil(secs, 10); // don't forget the second param
            var hours = Math.floor(sec_num / 3600);
            var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
            var seconds = sec_num - (hours * 3600) - (minutes * 60);

            if (minutes < 10) { minutes = "" + minutes; }
            if (seconds < 10) { seconds = "0" + seconds; }
            var time = minutes + ':' + seconds;
            return time;
        };

        function togglePlayPauseSVGAnimation(bool = false) {
            var fromsvg = playSvg, tosvg = pauseSvg;
            if (bool === false) {
                fromsvg = pauseSvg;
                tosvg = playSvg;
            }
            document.getElementById('play_pause_animation').setAttribute('from', fromsvg);
            document.getElementById('play_pause_animation').setAttribute('to', tosvg);
            document.getElementById('play_pause_animation').beginElement();
        }

        function bindPlayerControllerComponent() {
            // For No MP4
            container = document.getElementById(containerID);
            playerState = document.getElementById("playerstate_" + videoID);

            this.videoStatus = videoStatus;

            if (requireHTMLVideo === false) {
                return;
            }

            vid = document.getElementById(videoID);
            soundBtn = document.getElementById("btn_sound_" + videoID);
            invisibleBtn = document.getElementById("btn_invisible_" + videoID);
            playBtn = document.getElementById("btn_player_" + videoID);
            controllers = document.getElementById("controllers_" + videoID);
            topctaBtn = document.getElementById("topcta_" + videoID);
            txtRemain = document.getElementById("text_remain_" + videoID);

            if (options.pauseable === true) {
                controlPlayButtonEl = document.getElementById('btn_playback_' + videoID);
                playSvg = document.getElementById('play_pause_animation').getAttribute('from');
                pauseSvg = document.getElementById('play_pause_animation').getAttribute('to');
                controlPlayButtonEl.addEventListener("click", toggleVideoPlays, false);
            }

            vid.volume = options.volume / 100;

            vid.setAttribute("playsinline", "");
            vid.addEventListener("play", videoStatus, false);
            vid.addEventListener("pause", videoStatus, false);
            vid.addEventListener("timeupdate", videoStatus, false);
            vid.addEventListener("ended", videoStatus, false);
            vid.addEventListener("loadeddata", eventAutoPlayVideoOnLoad, false);

            if (videoMuted) { vid.muted = true; }
            if (options.autostart && mobileVideo == false) { toggleHTML5VideoPlay(); }
            if (options.advertisementlabel == false) { container.classList.add("no-ad-label"); }

            invisibleBtn.addEventListener("click", function (e) {
                e.stopPropagation();
                if (vid.paused || !videoStarted) {
                    toggleHTML5VideoPlay();
                    setUserStartClicked();
                }
                else if (videoStarted) {
                    clickOnCTA_();
                }
            }, false);

            playBtn.addEventListener("click", function (e) {
                e.stopPropagation();
                toggleHTML5VideoPlay();
                setUserStartClicked();
            }, false);

            if (mouseAvailable) {
                container.addEventListener("mouseenter", showController, false);
                container.addEventListener("mouseleave", hideController, false);
            }

            function showController(e) {
                clearTimeout(slidingIntv);
                controllers.style.display = "block";
                slidingIntv = setTimeout(function () {
                    controllers.classList.add('show-controller');
                    topctaBtn.classList.add('show-controller');
                }, 300);
                //if(options.mouseoverSound) {toggleHTML5VideoAudio();}
            };

            function hideController(e) {
                if (allowHideController) {
                    clearTimeout(slidingIntv);
                    controllers.classList.remove('show-controller');
                    topctaBtn.classList.remove('show-controller');
                    slidingIntv = setTimeout(function () {
                        controllers.style.display = "none";
                    }, 300);
                }
            };

            function toggleVideoPlays(event) {
                event.stopPropagation();
                if (controlPlayButtonEl.classList.contains('is-paused')) {
                    playHTMLVideo();
                }
                else {
                    pauseHTMLVideo();
                }

                if (options.clicktoUnmute === true && vid.muted === true) {
                    vid.muted = false;
                    videoMuted = false;
                }

                setUserStartClicked();
            }

            if (options.fullscreen) {
                var isFSMode = false;
                var expandFullScreenBtn = document.getElementById("btn_fs_" + videoID);
                var fsEl = "undefined";
                var fsEvent = "fullscreenchange";
                var track = {
                    openfs: (options.tracking === true) ? function () { InnityHTMLAd.track(trackVideoID + "_OpenFullscreen"); } : function () { return; },
                    closefs: (options.tracking === true) ? function () { InnityHTMLAd.track(trackVideoID + "_CloseFullscreen"); } : function () { return; }
                };

                var getPrefix = function () {
                    this.dom = dom;
                    this.lowercase = lowercase;
                    this.css = css;
                    this.js = js;
                    var _styles, _pre, _dom, throwerror = false;
                    try {
                        _styles = window.getComputedStyle(document.documentElement, '');
                        _pre = (Array.prototype.slice
                            .call(_styles)
                            .join('')
                            .match(/-(moz|webkit|ms)-/) || (_styles.OLink === '' && ['', 'o'])
                        )[1];
                    } catch (e) {
                        throwerror = true;
                    }
                    _dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + _pre + ')', 'i'))[1];
                    if (navigator.userAgent === "Mozilla/5.0 (Windows NT 10.0; WOW64; rv:49.0) Gecko/20100101 Firefox/49.0") {
                        _dom = '';
                    };
                    function dom() { return _dom; }
                    function lowercase() { var l = (_dom == '' || throwerror == true) ? '' : _pre; return l; }
                    function css() { var c = (_dom == '' || throwerror == true) ? '' : '-' + _pre + '-'; return c; }
                    function js() { var j = (_dom == '' || throwerror == true) ? '' : _pre[0].toUpperCase() + _pre.substr(1); return j; }
                };

                try {
                    var prefix = new getPrefix(), list = ["webkit", "moz", "ms", "o"];
                    if (list.indexOf(prefix.lowercase()) > -1) {
                        if (prefix.lowercase() == "ms") { fsEvent = "MSFullscreenChange"; }
                        else { fsEvent = prefix.lowercase() + fsEvent; }
                    }
                } catch (error) { }

                document.addEventListener(fsEvent, function (e) {
                    var state = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
                    if (!state) { isFSMode = false; } else { fsEl = state; }
                    resizeFullScreenHandler(Boolean(state));
                });

                var resizeFullScreenHandler = function (val) {
                    if (val) {
                        expandFullScreenBtn.classList.add("exit-fs");
                        vid.controls = 'controls';
                        if (typeof (options.fullscreenCallBack) === 'function') {
                            options.fullscreenCallBack("openFS");
                        }
                        if (fsEl !== "undefined" && fsEl.id == videoID && fsEl.nodeName.toLowerCase() == "video") {
                            track.openfs();
                        }
                    }
                    else {
                        expandFullScreenBtn.classList.remove("exit-fs");
                        if (vid.controls = 'controls') vid.controls = "";
                        if (typeof (options.fullscreenCallBack) === 'function') {
                            options.fullscreenCallBack("closeFS");
                        }
                        if (fsEl !== "undefined" && fsEl.id == videoID && fsEl.nodeName.toLowerCase() == "video") {
                            track.closefs();
                        }
                    }
                };

                var setFullScreenHandler = function (elem) {
                    if (autoplaybrowser.getOS() == 'ios') {
                        // Toggle fullscreen in Safari for iPad
                        try {
                            vid.webkitEnterFullScreen();
                        } catch (e) { }
                    } else {
                        if (!elem.fullscreenElement &&    // alternative standard method
                            !elem.mozFullScreenElement && !elem.webkitFullscreenElement && !elem.msFullscreenElement) { //current working methods
                            var requestFullScreen = elem.requestFullscreen || elem.msRequestFullscreen || elem.mozRequestFullScreen || elem.webkitRequestFullscreen;
                            if (requestFullScreen == elem.msRequestFullscreen) {
                                vid.controls = 'controls';
                            }
                            requestFullScreen.call(elem);
                        }
                        isFSMode = true;
                    }
                };

                var exitFullScreenHandler = function () {
                    var exitFullScreen = document.exitFullscreen || document.msExitFullscreen || document.mozCancelFullScreen || document.webkitExitFullscreen;
                    exitFullScreen.call(document);
                    isFSMode = false;
                };

                var toggleFSExpand = function (e) {
                    if (!isFSMode) {
                        setFullScreenHandler(document.getElementById(videoID));
                    }
                    else {
                        exitFullScreenHandler();
                    }
                    e.stopPropagation();
                };

                expandFullScreenBtn.addEventListener("click", toggleFSExpand, false);
                if (autoplaybrowser.getOS() == 'ios') {
                    function enterIOSfs() { isFSMode = true; track.openfs(); if (typeof (options.fullscreenCallBack) === 'function') { options.fullscreenCallBack("openFS"); } };
                    function exitIOSfs() { isFSMode = false; track.closefs(); if (typeof (options.fullscreenCallBack) === 'function') { options.fullscreenCallBack("closeFS"); } };
                    vid.addEventListener("webkitbeginfullscreen", enterIOSfs, false);
                    vid.addEventListener("webkitendfullscreen", exitIOSfs, false);
                }
            }

            function eventAutoPlayVideoOnLoad() {
                if (videoHasSound === null) {
                    videoHasSound = videohasAudio(document.getElementById(videoID));
                    videoSoundCheck();
                }

                if (videoStarted) {
                    if (typeof (options.onLoad) === 'function') {
                        options.onLoad({
                            videoDuration: vid.duration
                        });
                    }
                }

            }

            function videoStatus(e) {
                switch (e.type) {
                    case "play":
                        videoStarted = true;
                        if (videoFinished) {
                            videoFinished = false;
                            videoprogress_interval = setInterval(video_progressUpdate, 50);
                        }
                        soundBtn.style.display = "block";
                        controllers.style.display = "block";
                        toggleHTML5VideoStatus("playing");
                        controllers.classList.add('show-controller');
                        topctaBtn.classList.add('show-controller');
                        allowHideController = true;
                        if (mobileVideo) {
                            allowHideController = false;
                            setTimeout(hideController, 1000);
                        }
                        break;
                    case "pause":
                        if (autoplaybrowser.getOS() == 'ios') {
                            if (vid.controls = 'controls') vid.controls = "";
                        }
                        toggleHTML5VideoStatus("paused");
                        showController();
                        allowHideController = false;
                        break;
                    case "volumechange":
                        if (vid.muted) {
                            soundBtn.classList.add("is-muted");
                        } else {
                            soundBtn.classList.remove("is-muted");
                        }
                        break;
                    case "timeupdate":
                        break;
                    case "ended":
                        videoFinished = true;
                        clearInterval(videoprogress_interval);
                        if (!this.paused) pauseHTMLVideo();
                        setTimeout(function () { toggleHTML5VideoStatus("ended") }, 50);

                        if (typeof (options.videoEndedCallback) === 'function') {
                            setTimeout(options.videoEndedCallback, 100);
                        }

                        if (options.fullscreen) {
                            if (isFSMode && typeof (exitFullScreenHandler) === 'function') {
                                exitFullScreenHandler();
                            }
                        }

                        showController();
                        allowHideController = false;

                        break;
                }
            };

            function video_progressUpdate() {
                var value = (100 / vid.duration) * vid.currentTime;
                txtRemain.innerHTML = "" + convert_toMMSS(Math.ceil(vid.currentTime));
            };

        };
    };

    function videoFirstClicked() {
        return userStartClicked;
    }

    function pauseTracker() {
        performanceTracker.pause();
    }

    function resumeTracker() {
        performanceTracker.resume();
    }

    /**
     * Performance tracker to record down video click to play & video loaded.
     * @argument {string} videoID
     */
    function PerformanceTracker(videoID) {
        this.fireLoaded = fireLoaded;
        this.fireClickToPlay = fireClickToPlay;
        this.pause = pause;
        this.resume = resume;

        var trackingVideoID = '';
        var isClicked = false;

        initClass();

        function initClass() {
            trackingVideoID = '_' + videoID[0].toUpperCase() + videoID.substr(1);
        }

        function fireLoaded() {
            InnityHTMLAd.track(trackingVideoID + '_PreviewLoaded');
        }
        function fireClickToPlay() {
            if (isClicked === true) {
                return;
            }

            InnityHTMLAd.track(trackingVideoID + '_ClickPreviewToPlay');
            isClicked = true;
        }
        function pause() {
            if (extraOptions.tracking === true && typeof InnityHTMLAd.pauseTracker === 'function') {
                InnityHTMLAd.pauseTracker();
            }
        }
        function resume() {
            if (extraOptions.tracking === true && typeof InnityHTMLAd.resumeTracker === 'function') {
                InnityHTMLAd.resumeTracker();
            }
        }
    };
}

/**
* Variable to store the generateMaterial or innityAppsMaterialGenerator
* function reference.
* @type function
*/
var innityAppsMobileVideoElementGenerator = null;

/**
* This function help to convert functions that are different from development
* version to use same variable.
*/
function innityAppsMobileVideoFallbackHelper() {
    if (typeof generateMaterial === 'function') {
        innityAppsMobileVideoElementGenerator = generateMaterial
    } else if (typeof innityAppsMaterialGenerator === 'function') {
        innityAppsMobileVideoElementGenerator = innityAppsMaterialGenerator;
    }
}

/**
* This function help to convert clicktag trigger function that are different
* from development version.
*/
function innityAppsTriggerClicktagHandler(clicktag) {
    if (typeof triggerClickTag === 'function') {
        triggerClickTag(clicktag);
        return;
    }

    if (typeof innityAppsTriggerClickTag === 'function') {
        innityAppsTriggerClickTag(clicktag);
        return;
    }

    if (InnityHTMLAd !== null && InnityHTMLAd !== undefined) {
        if (typeof InnityHTMLAd.click === 'function') {
            InnityHTMLAd.click({ clickTAG: clicktag });
        }
    }
}
