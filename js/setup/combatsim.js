/**
 * User: jchionh
 * Date: 1/1/14
 * Time: 11:28 PM
 */

// namespace for the app
var cs = cs || {};

cs.gPrevTimestamp = 0;
cs.gDelta = 0;
cs.gCanvasElement = document.getElementById('renderCanvas');
cs.gCanvasContext = cs.gCanvasElement.getContext('2d');
cs.gDevicePixelRatio = 1;
cs.gRenderer2D = null;
