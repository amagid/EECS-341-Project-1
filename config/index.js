'use strict';
const prod = require('./production');

/**
 * Gets the current configuration
 * 
 * @return {Object} The current configuration.
 */
function get() {
    return prod;
}

module.exports = {
    get
};