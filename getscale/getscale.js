/**
 * 缩放长宽比，使其不超过给定的最大值
 *
 * @param {number} realWidth 实际长度
 * @param {number} realHeight 实际宽度
 * @param {number} maxWidth 最大长度
 * @param {number} maxHeight 最大宽度
 * @return {Object} 包含缩放后长宽的对象
 */
function getScale(realWidth, realHeight, maxWidth, maxHeight) {
    var w = realWidth;
    var h = realHeight;

    if (realWidth / realHeight >= maxWidth / maxHeight) {
        // 按宽度缩放
        if (realWidth > maxWidth) {
            w = maxWidth;
            h = parseInt((maxWidth / realWidth) * realHeight, 10);
        }
    }
    else {
        // 按高度缩放
        if (realHeight > maxHeight) {
            h = maxHeight;
            w = parseInt((maxHeight / realHeight) * realWidth, 10);
        }
    }

    return {
        width: w,
        height: h
    };
}