
if (typeof jQuery === 'undefined') throw new Error('featherlight requires a window jQuery, for now');

require('./src/featherlight.css');
require('./src/featherlight');

module.exports = $.featherlight;
