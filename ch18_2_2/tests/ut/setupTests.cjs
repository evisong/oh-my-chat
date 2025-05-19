require('@testing-library/jest-dom');
require('jest-fetch-mock').enableMocks();

window.HTMLElement.prototype.scrollIntoView = jest.fn();
window.TextEncoder = require('util').TextEncoder;
