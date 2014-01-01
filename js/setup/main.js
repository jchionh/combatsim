/**
 * User: jchionh
 * Date: 1/1/14
 * Time: 11:11 PM
 *
 * main global functions to do setup and init
 * and the entry point to the loop
 *
 */


/**
 * main function that calls the init to init stuff
 */
function mainInit() {
    console.log('mainInit');
    mainLoop(Date.now());
};


/**
 * here's the main loop that will be called, to perform the updates and render
 * @param {Number} timestamp
 */
function mainLoop(timestamp) {
    console.log('mainLoop: ' + timestamp);
};

/**
 * here's the call to requestAnimationFrame
 */
function needsRequestAnimFrame() {
    // request anim for the next loop call
    window.requestAnimFrame(mainLoop, rb.gCanvasElement);
};