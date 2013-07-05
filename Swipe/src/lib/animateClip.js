/*
* jquery.animate.clip.js
*
* jQuery css clip animation support -- Joshua Poehls
* version 0.1.4

* forked from Jim Palmer's plugin http://www.overset.com/2008/08/07/jquery-css-clip-animation-plugin/
* idea spawned from jquery.color.js by John Resig
* Released under the MIT license.
*/
(function (jQuery) {

    function getStyle(elem, name) {
        return (elem.currentStyle && elem.currentStyle[name]) || elem.style[name];
    }

    function getClip(elem) {
        var cssClip = $(elem).css('clip') || '';

        if (!cssClip) {
            // Try to get the clip rect another way for IE8.
            // This is a workaround for jQuery's css('clip') returning undefined
            // when the clip is defined in an external stylesheet in IE8. -JPOEHLS
            var pieces = {
                top: getStyle(elem, 'clipTop'),
                right: getStyle(elem, 'clipRight'),
                bottom: getStyle(elem, 'clipBottom'),
                left: getStyle(elem, 'clipLeft')
            };

            if (pieces.top && pieces.right && pieces.bottom && pieces.left) {
                cssClip = 'rect(' + pieces.top + ' ' + pieces.right + ' ' + pieces.bottom + ' ' + pieces.left + ')';
            }
        }

        // Strip commas and return.
        return cssClip.replace(/,/g, ' ');
    }

    jQuery.fx.step.clip = function (fx) {
        if (fx.pos === 0) {
            var cRE = /rect\(([0-9\.]{1,})(px|em)[,]?\s+([0-9\.]{1,})(px|em)[,]?\s+([0-9\.]{1,})(px|em)[,]?\s+([0-9\.]{1,})(px|em)\)/;

            fx.start = cRE.exec(getClip(fx.elem));
            if (typeof fx.end === 'string') {
                fx.end = cRE.exec(fx.end.replace(/,/g, ' '));
            }
        }
        if (fx.start && fx.end) {
            var sarr = new Array(), earr = new Array(), spos = fx.start.length, epos = fx.end.length,
                emOffset = fx.start[ss + 1] == 'em' ? (parseInt($(fx.elem).css('fontSize')) * 1.333 * parseInt(fx.start[ss])) : 1;
            for (var ss = 1; ss < spos; ss += 2) { sarr.push(parseInt(emOffset * fx.start[ss])); }
            for (var es = 1; es < epos; es += 2) { earr.push(parseInt(emOffset * fx.end[es])); }
            fx.elem.style.clip = 'rect(' +
                parseInt((fx.pos * (earr[0] - sarr[0])) + sarr[0]) + 'px ' +
                parseInt((fx.pos * (earr[1] - sarr[1])) + sarr[1]) + 'px ' +
                parseInt((fx.pos * (earr[2] - sarr[2])) + sarr[2]) + 'px ' +
                parseInt((fx.pos * (earr[3] - sarr[3])) + sarr[3]) + 'px)';
        }
    }
})(jQuery);