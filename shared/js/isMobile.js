(function() {
    window.dynCore.declare('isMobile', null, function() {
        return function() {
            return /Mobi/i.test(navigator.userAgent) || 'ontouchstart' in window || navigator.maxTouchPoints;
        };
    });
})();