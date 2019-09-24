"use strict";
exports.__esModule = true;
var stringTask = function (str) {
    return str
        .toLowerCase()
        .replace(/[aeiouy]/g, '')
        .replace(/\w/g, '.' + '$&');
};
exports["default"] = stringTask;
