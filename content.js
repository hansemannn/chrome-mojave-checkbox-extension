// Copyright 2018 Hans Knöchel. No rights reserved, do what you want with this!

'use strict';

// Guard the DOM for async rendering
// See: https://github.com/hansemannn/chrome-mojave-checkbox-extension/issues/3

var NEW_ZOOM = 1.0000001;

var objectsToZoom = [document.body];
var objectsToZoom = objectsToZoom.concat(Array.from(document.getElementsByTagName("iframe"))); // Get all the iframes

for (var i=0; i<objectsToZoom.length; i++) {
    if (objectsToZoom[i] != null) {
        if (objectsToZoom[i].tagName == "IFRAME") {
	    objectsToZoom[i] = objectsToZoom[i].contentDocument.body; // get the body element of the iframe
        }
        objectsToZoom[i].style.zoom = NEW_ZOOM;
    }
}
