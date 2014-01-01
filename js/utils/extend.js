/**
 * User: jchionh
 * Date: 1/1/14
 * Time: 11:27 PM
 */

// create namespace
cs.utils = cs.utils || {};

/**
 * implement the extend using prototype inheritance extend method
 * @param {Object} newObject the derived object
 * @param {Object} baseObject the base object to derive from
 */
cs.utils.extend = function(newObject, baseObject) {
    newObject.prototype = new baseObject();
    newObject.prototype.constructor = newObject;
};
