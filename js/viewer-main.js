window.onload = function () {
  'use strict';

  var Viewer = window.Viewer;
  var console = window.console || { log: function () {} };
  var pictures = document.querySelector('.docs-pictures');
  //var toggles = document.querySelector('.docs-toggles');
  //var buttons = document.querySelector('.docs-buttons');
  var options = {
    // inline: true,
    // url: 'data-original',
    ready: function (e) {
      console.log(e.type);
    },
    show: function (e) {
      console.log(e.type);
    },
    shown: function (e) {
      console.log(e.type);
    },
    hide: function (e) {
      console.log(e.type);
    },
    hidden: function (e) {
      console.log(e.type);
    },
    view: function (e) {
      console.log(e.type);
    },
    viewed: function (e) {
      console.log(e.type);
    },
    move: function (e) {
      console.log(e.type);
    },
    moved: function (e) {
      console.log(e.type);
    },
    rotate: function (e) {
      console.log(e.type);
    },
    rotated: function (e) {
      console.log(e.type);
    },
    scale: function (e) {
      console.log(e.type);
    },
    scaled: function (e) {
      console.log(e.type);
    },
    zoom: function (e) {
      console.log(e.type);
    },
    zoomed: function (e) {
      console.log(e.type);
    },
    play: function (e) {
      console.log(e.type);
    },
    stop: function (e) {
      console.log(e.type);
    }
  };
  var viewer = new Viewer(pictures, options);

};
