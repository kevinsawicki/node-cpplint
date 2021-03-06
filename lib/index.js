/*jslint node:true*/

var runner = require('./runner.js');

/**
 * [cpplint description]
 *
 * @async
 * @param  {Object} options
 * @param  {Function} reporter
 */
function cpplint(options, reporter) {
	'use strict';

	return runner(options, reporter);
}

module.exports = cpplint;
