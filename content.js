// Copyright 2018 Hans Knöchel. No rights reserved, do what you want with this!

'use strict';

// Guard the DOM for async rendering
// See: https://github.com/hansemannn/chrome-mojave-checkbox-extension/issues/3
if (document.body !== null) {
    document.body.style.zoom = 1.0000001;
}