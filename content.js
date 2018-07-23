// Copyright 2018 Hans Knöchel. No rights reserved, do what you want with this!

'use strict';

const NEW_ZOOM = 1.0000001;
const elements = [document.body, ...Array.from(document.getElementsByTagName('iframe'))];

elements.forEach(element => {
    if (element === null) return;
    if (element.tagName.toLowerCase() === 'iframe' && element.contentDocument !== null) {
        element = element.contentDocument.body;
    }
    element.style.zoom = NEW_ZOOM;
});
