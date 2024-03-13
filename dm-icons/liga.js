/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'alert': '&#xe962;',
            'alert-filled': '&#x31;',
            'arrowup': '&#xe963;',
            'atom': '&#xe964;',
            'autonesting': '&#xe965;',
            'autoorient': '&#xe992;',
            'avatar': '&#xe902;',
            'bang-filled': '&#xe903;',
            'bang-outline': '&#xe904;',
            'bell': '&#xe966;',
            'notification': '&#xe966;',
            'bullets': '&#xe967;',
            'bundle': '&#xe968;',
            'calculator': '&#xe969;',
            'calendar': '&#xe96a;',
            'camera': '&#xe96b;',
            'cardview': '&#xe96c;',
            'check': '&#xe96d;',
            'clipboard': '&#xe96e;',
            'clock': '&#xe96f;',
            'closex': '&#xe970;',
            'cloud': '&#xe971;',
            'collapse': '&#xe972;',
            'comments': '&#xe973;',
            'quotes': '&#xe973;',
            'company': '&#xe974;',
            'organization': '&#xe974;',
            'location': '&#xe974;',
            'computer': '&#xe975;',
            'cube': '&#xe976;',
            'curvedarrow-left': '&#xe977;',
            'curvedarrow-right': '&#xe978;',
            'customorient': '&#xe97a;',
            'customorient-settings': '&#xe979;',
            'data': '&#xe97b;',
            'graph': '&#xe97b;',
            'dead': '&#xe97c;',
            'devices': '&#xe97d;',
            'diagnostics': '&#xe97e;',
            'download-cloud': '&#xe980;',
            'download-local': '&#xe97f;',
            'droplet': '&#xe981;',
            'duplicate': '&#xe982;',
            'edit': '&#xe983;',
            'pencil': '&#xe983;',
            'education': '&#xe984;',
            'academy': '&#xe984;',
            'ethernet': '&#xe985;',
            'logout': '&#xe986;',
            'exit': '&#xe986;',
            'expand': '&#xe987;',
            'external': '&#xe9bb;',
            'extruder': '&#xe988;',
            'eye': '&#xe989;',
            'view': '&#xe989;',
            'faceorient': '&#xe993;',
            'fileupload': '&#xe98a;',
            'finger': '&#xe98b;',
            'folder': '&#xe98c;',
            'gear': '&#xe98d;',
            'globe': '&#xe98e;',
            'hamburger': '&#xe98f;',
            'menu': '&#xe98f;',
            'history': '&#xe990;',
            'home': '&#xe991;',
            'image': '&#xe994;',
            'picture': '&#xe994;',
            'info': '&#xe995;',
            'info-filled': '&#xe905;',
            'info-outline': '&#xe906;',
            'keyboard': '&#xe996;',
            'knowledge': '&#xe997;',
            'layers': '&#xe998;',
            'speed': '&#xe999;',
            'lightening': '&#xe999;',
            'link': '&#xe99a;',
            'livesinter': '&#xe99b;',
            'logs': '&#xe99c;',
            'manualorient': '&#xe99d;',
            'minus': '&#xe99e;',
            'more': '&#xe99f;',
            'move': '&#xe9a0;',
            'notes': '&#xe9a1;',
            'paintbrush': '&#xe9a2;',
            'paperclip': '&#xe9a3;',
            'plus': '&#xe9a4;',
            'add': '&#xe9a4;',
            'point-down': '&#xe9a5;',
            'point-left': '&#xe9a8;',
            'point-right': '&#xe9a7;',
            'point-up': '&#xe9a6;',
            'power': '&#xe9a9;',
            'preview': '&#xe9aa;',
            'qrcode': '&#xe9ab;',
            'remoteassist': '&#xe9ac;',
            'reorder': '&#xe9ad;',
            'reprint': '&#xe9ae;',
            'reset': '&#xe9af;',
            'refresh': '&#xe9af;',
            'save': '&#xe9b0;',
            'scale': '&#xe9b1;',
            'search': '&#xe9b2;',
            'share': '&#xe9b3;',
            'star': '&#xe9b5;',
            'star-filled': '&#xe9b4;',
            'support': '&#xe9b6;',
            'tape': '&#xe9b7;',
            'tasklist': '&#xe9b8;',
            'trash': '&#xe9b9;',
            'delete': '&#xe9b9;',
            'update': '&#xe9ba;',
            'user': '&#xe9bc;',
            'usergroup': '&#xe9bd;',
            'video': '&#xe9be;',
            'wifi': '&#xe9bf;',
            'wrench': '&#xe9c0;',
            'tools': '&#xe9c0;',
            'zoomin': '&#xe9c1;',
            'zoomout': '&#xe9c2;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/icomoon-liga/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
