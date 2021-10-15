// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

// import Rails from '@rails/ujs';
// import Turbolinks from 'turbolinks';
// import * as ActiveStorage from '@rails/activestorage';
// import 'semantic-ui-css/semantic.min.css';
// import 'channels';
const componentRequireContext = require.context('components', true);
const ReactRailsUJS = require('react_ujs');

// Rails.start();
// Turbolinks.start();
// ActiveStorage.start();
// Support component names relative to this directory:
//= require rails-ujs
//= require activestorage
//= require turbolinks
// const componentRequireContext = require.context('components', true);
// const ReactRailsUJS = require('react_ujs');

// ReactRailsUJS.useContext(componentRequireContext);

console.log('Hello World from Webpacker');
// Support component names relative to this directory:

ReactRailsUJS.useContext(componentRequireContext);
