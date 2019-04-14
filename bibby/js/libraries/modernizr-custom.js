/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-backgroundblendmode-csspointerevents-inlinesvg-svg-svgasimg-touchevents-setclasses !*/
! function(e, n, t) {
    function r(e, n) {
        return typeof e === n }

    function o() {
        var e, n, t, o, i, s, a;
        for (var f in w)
            if (w.hasOwnProperty(f)) {
                if (e = [], n = w[f], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length))
                    for (t = 0; t < n.options.aliases.length; t++) e.push(n.options.aliases[t].toLowerCase());
                for (o = r(n.fn, "function") ? n.fn() : n.fn, i = 0; i < e.length; i++) s = e[i], a = s.split("."), 1 === a.length ? Modernizr[a[0]] = o : (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), Modernizr[a[0]][a[1]] = o), y.push((o ? "" : "no-") + a.join("-")) } }

    function i(e) {
        var n = C.className,
            t = Modernizr._config.classPrefix || "";
        if (S && (n = n.baseVal), Modernizr._config.enableJSClass) {
            var r = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
            n = n.replace(r, "$1" + t + "js$2") }
        Modernizr._config.enableClasses && (n += " " + t + e.join(" " + t), S ? C.className.baseVal = n : C.className = n) }

    function s() {
        return "function" != typeof n.createElement ? n.createElement(arguments[0]) : S ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments) }

    function a(e) {
        return e.replace(/([a-z])-([a-z])/g, function(e, n, t) {
            return n + t.toUpperCase() }).replace(/^-/, "") }

    function f() {
        var e = n.body;
        return e || (e = s(S ? "svg" : "body"), e.fake = !0), e }

    function u(e, t, r, o) {
        var i, a, u, l, d = "modernizr",
            c = s("div"),
            p = f();
        if (parseInt(r, 10))
            for (; r--;) u = s("div"), u.id = o ? o[r] : d + (r + 1), c.appendChild(u);
        return i = s("style"), i.type = "text/css", i.id = "s" + d, (p.fake ? p : c).appendChild(i), p.appendChild(c), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(n.createTextNode(e)), c.id = d, p.fake && (p.style.background = "", p.style.overflow = "hidden", l = C.style.overflow, C.style.overflow = "hidden", C.appendChild(p)), a = t(c, e), p.fake ? (p.parentNode.removeChild(p), C.style.overflow = l, C.offsetHeight) : c.parentNode.removeChild(c), !!a }

    function l(e, n) {
        return !!~("" + e).indexOf(n) }

    function d(e, n) {
        return function() {
            return e.apply(n, arguments) } }

    function c(e, n, t) {
        var o;
        for (var i in e)
            if (e[i] in n) return t === !1 ? e[i] : (o = n[e[i]], r(o, "function") ? d(o, t || n) : o);
        return !1 }

    function p(e) {
        return e.replace(/([A-Z])/g, function(e, n) {
            return "-" + n.toLowerCase() }).replace(/^ms-/, "-ms-") }

    function v(n, r) {
        var o = n.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (; o--;)
                if (e.CSS.supports(p(n[o]), r)) return !0;
            return !1 }
        if ("CSSSupportsRule" in e) {
            for (var i = []; o--;) i.push("(" + p(n[o]) + ":" + r + ")");
            return i = i.join(" or "), u("@supports (" + i + ") { #modernizr { position: absolute; } }", function(e) {
                return "absolute" == getComputedStyle(e, null).position }) }
        return t }

    function h(e, n, o, i) {
        function f() { d && (delete N.style, delete N.modElem) }
        if (i = r(i, "undefined") ? !1 : i, !r(o, "undefined")) {
            var u = v(e, o);
            if (!r(u, "undefined")) return u }
        for (var d, c, p, h, m, g = ["modernizr", "tspan"]; !N.style;) d = !0, N.modElem = s(g.shift()), N.style = N.modElem.style;
        for (p = e.length, c = 0; p > c; c++)
            if (h = e[c], m = N.style[h], l(h, "-") && (h = a(h)), N.style[h] !== t) {
                if (i || r(o, "undefined")) return f(), "pfx" == n ? h : !0;
                try { N.style[h] = o } catch (y) {}
                if (N.style[h] != m) return f(), "pfx" == n ? h : !0 }
        return f(), !1 }

    function m(e, n, t, o, i) {
        var s = e.charAt(0).toUpperCase() + e.slice(1),
            a = (e + " " + E.join(s + " ") + s).split(" ");
        return r(n, "string") || r(n, "undefined") ? h(a, n, o, i) : (a = (e + " " + P.join(s + " ") + s).split(" "), c(a, n, t)) }

    function g(e, n) {
        if ("object" == typeof e)
            for (var t in e) k(e, t) && g(t, e[t]);
        else { e = e.toLowerCase();
            var r = e.split("."),
                o = Modernizr[r[0]];
            if (2 == r.length && (o = o[r[1]]), "undefined" != typeof o) return Modernizr;
            n = "function" == typeof n ? n() : n, 1 == r.length ? Modernizr[r[0]] = n : (!Modernizr[r[0]] || Modernizr[r[0]] instanceof Boolean || (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])), Modernizr[r[0]][r[1]] = n), i([(n && 0 != n ? "" : "no-") + r.join("-")]), Modernizr._trigger(e, n) }
        return Modernizr }
    var y = [],
        w = [],
        _ = { _version: "3.3.1", _config: { classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0 }, _q: [], on: function(e, n) {
                var t = this;
                setTimeout(function() { n(t[e]) }, 0) }, addTest: function(e, n, t) { w.push({ name: e, fn: n, options: t }) }, addAsyncTest: function(e) { w.push({ name: null, fn: e }) } },
        Modernizr = function() {};
    Modernizr.prototype = _, Modernizr = new Modernizr, Modernizr.addTest("svg", !!n.createElementNS && !!n.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect);
    var C = n.documentElement,
        S = "svg" === C.nodeName.toLowerCase(),
        x = _._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    _._prefixes = x, Modernizr.addTest("csspointerevents", function() {
        var e = s("a").style;
        return e.cssText = "pointer-events:auto", "auto" === e.pointerEvents }), Modernizr.addTest("inlinesvg", function() {
        var e = s("div");
        return e.innerHTML = "<svg/>", "http://www.w3.org/2000/svg" == ("undefined" != typeof SVGRect && e.firstChild && e.firstChild.namespaceURI) });
    var T = _.testStyles = u;
    Modernizr.addTest("touchevents", function() {
        var t;
        if ("ontouchstart" in e || e.DocumentTouch && n instanceof DocumentTouch) t = !0;
        else {
            var r = ["@media (", x.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
            T(r, function(e) { t = 9 === e.offsetTop }) }
        return t });
    var b = "Moz O ms Webkit",
        E = _._config.usePrefixes ? b.split(" ") : [];
    _._cssomPrefixes = E;
    var z = function(n) {
        var r, o = x.length,
            i = e.CSSRule;
        if ("undefined" == typeof i) return t;
        if (!n) return !1;
        if (n = n.replace(/^@/, ""), r = n.replace(/-/g, "_").toUpperCase() + "_RULE", r in i) return "@" + n;
        for (var s = 0; o > s; s++) {
            var a = x[s],
                f = a.toUpperCase() + "_" + r;
            if (f in i) return "@-" + a.toLowerCase() + "-" + n }
        return !1 };
    _.atRule = z;
    var P = _._config.usePrefixes ? b.toLowerCase().split(" ") : [];
    _._domPrefixes = P;
    var j = { elem: s("modernizr") };
    Modernizr._q.push(function() { delete j.elem });
    var N = { style: j.elem.style };
    Modernizr._q.unshift(function() { delete N.style }), _.testAllProps = m;
    var R = _.prefixed = function(e, n, t) {
        return 0 === e.indexOf("@") ? z(e) : (-1 != e.indexOf("-") && (e = a(e)), n ? m(e, n, t) : m(e, "pfx")) };
    Modernizr.addTest("backgroundblendmode", R("backgroundBlendMode", "text"));
    var k;! function() {
        var e = {}.hasOwnProperty;
        k = r(e, "undefined") || r(e.call, "undefined") ? function(e, n) {
            return n in e && r(e.constructor.prototype[n], "undefined") } : function(n, t) {
            return e.call(n, t) } }(), _._l = {}, _.on = function(e, n) { this._l[e] || (this._l[e] = []), this._l[e].push(n), Modernizr.hasOwnProperty(e) && setTimeout(function() { Modernizr._trigger(e, Modernizr[e]) }, 0) }, _._trigger = function(e, n) {
        if (this._l[e]) {
            var t = this._l[e];
            setTimeout(function() {
                var e, r;
                for (e = 0; e < t.length; e++)(r = t[e])(n) }, 0), delete this._l[e] } }, Modernizr._q.push(function() { _.addTest = g }), Modernizr.addTest("svgasimg", n.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")), o(), i(y), delete _.addTest, delete _.addAsyncTest;
    for (var L = 0; L < Modernizr._q.length; L++) Modernizr._q[L]();
    e.Modernizr = Modernizr }(window, document);
