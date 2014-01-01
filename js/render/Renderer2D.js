/**
 * User: jchionh
 * Date: 1/2/14
 * Time: 12:05 AM
 *
 * Renderer2D handles all the 2D rendering into the canvas
 */

// create namespace
cs.render = cs.render || {};

/**
 * Renderer that contains method to render to the canvas
 * @param canvasElement
 * @constructor
 */
cs.render.Renderer2D = function(canvasElement) {
    // constants
    this.canvasElement = canvasElement;
    this.renderCtx = canvasElement.getContext('2d');
    this.width = canvasElement.width;
    this.height = canvasElement.height;
    this.canvasBackgroundColor = '#000000';
    //this.viewpoint = new cs.render.Viewpoint(0, 0, canvasElement.width, canvasElement.height);
};

/**
 * render the scene
 */
cs.render.Renderer2D.prototype.render = function() {
    // clear our background
    this.clearCanvas();

    // render background
    /*
    if (this.surface !== null) {
        this.surface.draw(this);
    }
    */
};

/**
 * clear the canvas to our solid color
 */
cs.render.Renderer2D.prototype.clearCanvas = function() {
    // Store the current transformation matrix
    this.renderCtx.save();

    // Use the identity matrix while clearing the canvas
    this.renderCtx.setTransform(1, 0, 0, 1, 0, 0);
    this.renderCtx.fillStlye = this.canvasBackgroundColor;
    //this.renderCtx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
    this.renderCtx.fillRect(0, 0, this.canvasElement.width, this.canvasElement.height);

    // Restore the transform
    this.renderCtx.restore();
};
