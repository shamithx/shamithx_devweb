/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(()=>{
    var C_ = Object.create;
    var Zr = Object.defineProperty;
    var N_ = Object.getOwnPropertyDescriptor;
    var L_ = Object.getOwnPropertyNames;
    var P_ = Object.getPrototypeOf
      , q_ = Object.prototype.hasOwnProperty;
    var ce = (e,t)=>()=>(e && (t = e(e = 0)),
    t);
    var u = (e,t)=>()=>(t || e((t = {
        exports: {}
    }).exports, t),
    t.exports)
      , Re = (e,t)=>{
        for (var r in t)
            Zr(e, r, {
                get: t[r],
                enumerable: !0
            })
    }
      , Ts = (e,t,r,n)=>{
        if (t && typeof t == "object" || typeof t == "function")
            for (let i of L_(t))
                !q_.call(e, i) && i !== r && Zr(e, i, {
                    get: ()=>t[i],
                    enumerable: !(n = N_(t, i)) || n.enumerable
                });
        return e
    }
    ;
    var ie = (e,t,r)=>(r = e != null ? C_(P_(e)) : {},
    Ts(t || !e || !e.__esModule ? Zr(r, "default", {
        value: e,
        enumerable: !0
    }) : r, e))
      , ze = e=>Ts(Zr({}, "__esModule", {
        value: !0
    }), e);
    var bi = u(()=>{
        "use strict";
        window.tram = function(e) {
            function t(l, v) {
                var E = new M.Bare;
                return E.init(l, v)
            }
            function r(l) {
                return l.replace(/[A-Z]/g, function(v) {
                    return "-" + v.toLowerCase()
                })
            }
            function n(l) {
                var v = parseInt(l.slice(1), 16)
                  , E = v >> 16 & 255
                  , I = v >> 8 & 255
                  , h = 255 & v;
                return [E, I, h]
            }
            function i(l, v, E) {
                return "#" + (1 << 24 | l << 16 | v << 8 | E).toString(16).slice(1)
            }
            function o() {}
            function a(l, v) {
                f("Type warning: Expected: [" + l + "] Got: [" + typeof v + "] " + v)
            }
            function s(l, v, E) {
                f("Units do not match [" + l + "]: " + v + ", " + E)
            }
            function c(l, v, E) {
                if (v !== void 0 && (E = v),
                l === void 0)
                    return E;
                var I = E;
                return Ii.test(l) || !Yr.test(l) ? I = parseInt(l, 10) : Yr.test(l) && (I = 1e3 * parseFloat(l)),
                0 > I && (I = 0),
                I === I ? I : E
            }
            function f(l) {
                ge.debug && window && window.console.warn(l)
            }
            function p(l) {
                for (var v = -1, E = l ? l.length : 0, I = []; ++v < E; ) {
                    var h = l[v];
                    h && I.push(h)
                }
                return I
            }
            var d = function(l, v, E) {
                function I($) {
                    return typeof $ == "object"
                }
                function h($) {
                    return typeof $ == "function"
                }
                function b() {}
                function B($, se) {
                    function D() {
                        var be = new J;
                        return h(be.init) && be.init.apply(be, arguments),
                        be
                    }
                    function J() {}
                    se === E && (se = $,
                    $ = Object),
                    D.Bare = J;
                    var ee, ve = b[l] = $[l], je = J[l] = D[l] = new b;
                    return je.constructor = D,
                    D.mixin = function(be) {
                        return J[l] = D[l] = B(D, be)[l],
                        D
                    }
                    ,
                    D.open = function(be) {
                        if (ee = {},
                        h(be) ? ee = be.call(D, je, ve, D, $) : I(be) && (ee = be),
                        I(ee))
                            for (var dr in ee)
                                v.call(ee, dr) && (je[dr] = ee[dr]);
                        return h(je.init) || (je.init = $),
                        D
                    }
                    ,
                    D.open(se)
                }
                return B
            }("prototype", {}.hasOwnProperty)
              , g = {
                ease: ["ease", function(l, v, E, I) {
                    var h = (l /= I) * l
                      , b = h * l;
                    return v + E * (-2.75 * b * h + 11 * h * h + -15.5 * b + 8 * h + .25 * l)
                }
                ],
                "ease-in": ["ease-in", function(l, v, E, I) {
                    var h = (l /= I) * l
                      , b = h * l;
                    return v + E * (-1 * b * h + 3 * h * h + -3 * b + 2 * h)
                }
                ],
                "ease-out": ["ease-out", function(l, v, E, I) {
                    var h = (l /= I) * l
                      , b = h * l;
                    return v + E * (.3 * b * h + -1.6 * h * h + 2.2 * b + -1.8 * h + 1.9 * l)
                }
                ],
                "ease-in-out": ["ease-in-out", function(l, v, E, I) {
                    var h = (l /= I) * l
                      , b = h * l;
                    return v + E * (2 * b * h + -5 * h * h + 2 * b + 2 * h)
                }
                ],
                linear: ["linear", function(l, v, E, I) {
                    return E * l / I + v
                }
                ],
                "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(l, v, E, I) {
                    return E * (l /= I) * l + v
                }
                ],
                "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(l, v, E, I) {
                    return -E * (l /= I) * (l - 2) + v
                }
                ],
                "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(l, v, E, I) {
                    return (l /= I / 2) < 1 ? E / 2 * l * l + v : -E / 2 * (--l * (l - 2) - 1) + v
                }
                ],
                "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(l, v, E, I) {
                    return E * (l /= I) * l * l + v
                }
                ],
                "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(l, v, E, I) {
                    return E * ((l = l / I - 1) * l * l + 1) + v
                }
                ],
                "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(l, v, E, I) {
                    return (l /= I / 2) < 1 ? E / 2 * l * l * l + v : E / 2 * ((l -= 2) * l * l + 2) + v
                }
                ],
                "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(l, v, E, I) {
                    return E * (l /= I) * l * l * l + v
                }
                ],
                "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(l, v, E, I) {
                    return -E * ((l = l / I - 1) * l * l * l - 1) + v
                }
                ],
                "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(l, v, E, I) {
                    return (l /= I / 2) < 1 ? E / 2 * l * l * l * l + v : -E / 2 * ((l -= 2) * l * l * l - 2) + v
                }
                ],
                "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(l, v, E, I) {
                    return E * (l /= I) * l * l * l * l + v
                }
                ],
                "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(l, v, E, I) {
                    return E * ((l = l / I - 1) * l * l * l * l + 1) + v
                }
                ],
                "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(l, v, E, I) {
                    return (l /= I / 2) < 1 ? E / 2 * l * l * l * l * l + v : E / 2 * ((l -= 2) * l * l * l * l + 2) + v
                }
                ],
                "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(l, v, E, I) {
                    return -E * Math.cos(l / I * (Math.PI / 2)) + E + v
                }
                ],
                "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(l, v, E, I) {
                    return E * Math.sin(l / I * (Math.PI / 2)) + v
                }
                ],
                "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(l, v, E, I) {
                    return -E / 2 * (Math.cos(Math.PI * l / I) - 1) + v
                }
                ],
                "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(l, v, E, I) {
                    return l === 0 ? v : E * Math.pow(2, 10 * (l / I - 1)) + v
                }
                ],
                "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(l, v, E, I) {
                    return l === I ? v + E : E * (-Math.pow(2, -10 * l / I) + 1) + v
                }
                ],
                "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(l, v, E, I) {
                    return l === 0 ? v : l === I ? v + E : (l /= I / 2) < 1 ? E / 2 * Math.pow(2, 10 * (l - 1)) + v : E / 2 * (-Math.pow(2, -10 * --l) + 2) + v
                }
                ],
                "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(l, v, E, I) {
                    return -E * (Math.sqrt(1 - (l /= I) * l) - 1) + v
                }
                ],
                "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(l, v, E, I) {
                    return E * Math.sqrt(1 - (l = l / I - 1) * l) + v
                }
                ],
                "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(l, v, E, I) {
                    return (l /= I / 2) < 1 ? -E / 2 * (Math.sqrt(1 - l * l) - 1) + v : E / 2 * (Math.sqrt(1 - (l -= 2) * l) + 1) + v
                }
                ],
                "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(l, v, E, I, h) {
                    return h === void 0 && (h = 1.70158),
                    E * (l /= I) * l * ((h + 1) * l - h) + v
                }
                ],
                "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(l, v, E, I, h) {
                    return h === void 0 && (h = 1.70158),
                    E * ((l = l / I - 1) * l * ((h + 1) * l + h) + 1) + v
                }
                ],
                "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(l, v, E, I, h) {
                    return h === void 0 && (h = 1.70158),
                    (l /= I / 2) < 1 ? E / 2 * l * l * (((h *= 1.525) + 1) * l - h) + v : E / 2 * ((l -= 2) * l * (((h *= 1.525) + 1) * l + h) + 2) + v
                }
                ]
            }
              , y = {
                "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
            }
              , _ = document
              , m = window
              , R = "bkwld-tram"
              , A = /[\-\.0-9]/g
              , S = /[A-Z]/
              , O = "number"
              , L = /^(rgb|#)/
              , P = /(em|cm|mm|in|pt|pc|px)$/
              , x = /(em|cm|mm|in|pt|pc|px|%)$/
              , V = /(deg|rad|turn)$/
              , X = "unitless"
              , H = /(all|none) 0s ease 0s/
              , j = /^(width|height)$/
              , Q = " "
              , N = _.createElement("a")
              , T = ["Webkit", "Moz", "O", "ms"]
              , w = ["-webkit-", "-moz-", "-o-", "-ms-"]
              , U = function(l) {
                if (l in N.style)
                    return {
                        dom: l,
                        css: l
                    };
                var v, E, I = "", h = l.split("-");
                for (v = 0; v < h.length; v++)
                    I += h[v].charAt(0).toUpperCase() + h[v].slice(1);
                for (v = 0; v < T.length; v++)
                    if (E = T[v] + I,
                    E in N.style)
                        return {
                            dom: E,
                            css: w[v] + l
                        }
            }
              , F = t.support = {
                bind: Function.prototype.bind,
                transform: U("transform"),
                transition: U("transition"),
                backface: U("backface-visibility"),
                timing: U("transition-timing-function")
            };
            if (F.transition) {
                var Z = F.timing.dom;
                if (N.style[Z] = g["ease-in-back"][0],
                !N.style[Z])
                    for (var Y in y)
                        g[Y][0] = y[Y]
            }
            var C = t.frame = function() {
                var l = m.requestAnimationFrame || m.webkitRequestAnimationFrame || m.mozRequestAnimationFrame || m.oRequestAnimationFrame || m.msRequestAnimationFrame;
                return l && F.bind ? l.bind(m) : function(v) {
                    m.setTimeout(v, 16)
                }
            }()
              , G = t.now = function() {
                var l = m.performance
                  , v = l && (l.now || l.webkitNow || l.msNow || l.mozNow);
                return v && F.bind ? v.bind(l) : Date.now || function() {
                    return +new Date
                }
            }()
              , W = d(function(l) {
                function v(k, ne) {
                    var de = p(("" + k).split(Q))
                      , oe = de[0];
                    ne = ne || {};
                    var Oe = fr[oe];
                    if (!Oe)
                        return f("Unsupported property: " + oe);
                    if (!ne.weak || !this.props[oe]) {
                        var De = Oe[0]
                          , we = this.props[oe];
                        return we || (we = this.props[oe] = new De.Bare),
                        we.init(this.$el, de, Oe, ne),
                        we
                    }
                }
                function E(k, ne, de) {
                    if (k) {
                        var oe = typeof k;
                        if (ne || (this.timer && this.timer.destroy(),
                        this.queue = [],
                        this.active = !1),
                        oe == "number" && ne)
                            return this.timer = new le({
                                duration: k,
                                context: this,
                                complete: b
                            }),
                            void (this.active = !0);
                        if (oe == "string" && ne) {
                            switch (k) {
                            case "hide":
                                D.call(this);
                                break;
                            case "stop":
                                B.call(this);
                                break;
                            case "redraw":
                                J.call(this);
                                break;
                            default:
                                v.call(this, k, de && de[1])
                            }
                            return b.call(this)
                        }
                        if (oe == "function")
                            return void k.call(this, this);
                        if (oe == "object") {
                            var Oe = 0;
                            je.call(this, k, function(he, R_) {
                                he.span > Oe && (Oe = he.span),
                                he.stop(),
                                he.animate(R_)
                            }, function(he) {
                                "wait"in he && (Oe = c(he.wait, 0))
                            }),
                            ve.call(this),
                            Oe > 0 && (this.timer = new le({
                                duration: Oe,
                                context: this
                            }),
                            this.active = !0,
                            ne && (this.timer.complete = b));
                            var De = this
                              , we = !1
                              , Qr = {};
                            C(function() {
                                je.call(De, k, function(he) {
                                    he.active && (we = !0,
                                    Qr[he.name] = he.nextStyle)
                                }),
                                we && De.$el.css(Qr)
                            })
                        }
                    }
                }
                function I(k) {
                    k = c(k, 0),
                    this.active ? this.queue.push({
                        options: k
                    }) : (this.timer = new le({
                        duration: k,
                        context: this,
                        complete: b
                    }),
                    this.active = !0)
                }
                function h(k) {
                    return this.active ? (this.queue.push({
                        options: k,
                        args: arguments
                    }),
                    void (this.timer.complete = b)) : f("No active transition timer. Use start() or wait() before then().")
                }
                function b() {
                    if (this.timer && this.timer.destroy(),
                    this.active = !1,
                    this.queue.length) {
                        var k = this.queue.shift();
                        E.call(this, k.options, !0, k.args)
                    }
                }
                function B(k) {
                    this.timer && this.timer.destroy(),
                    this.queue = [],
                    this.active = !1;
                    var ne;
                    typeof k == "string" ? (ne = {},
                    ne[k] = 1) : ne = typeof k == "object" && k != null ? k : this.props,
                    je.call(this, ne, be),
                    ve.call(this)
                }
                function $(k) {
                    B.call(this, k),
                    je.call(this, k, dr, x_)
                }
                function se(k) {
                    typeof k != "string" && (k = "block"),
                    this.el.style.display = k
                }
                function D() {
                    B.call(this),
                    this.el.style.display = "none"
                }
                function J() {
                    this.el.offsetHeight
                }
                function ee() {
                    B.call(this),
                    e.removeData(this.el, R),
                    this.$el = this.el = null
                }
                function ve() {
                    var k, ne, de = [];
                    this.upstream && de.push(this.upstream);
                    for (k in this.props)
                        ne = this.props[k],
                        ne.active && de.push(ne.string);
                    de = de.join(","),
                    this.style !== de && (this.style = de,
                    this.el.style[F.transition.dom] = de)
                }
                function je(k, ne, de) {
                    var oe, Oe, De, we, Qr = ne !== be, he = {};
                    for (oe in k)
                        De = k[oe],
                        oe in ke ? (he.transform || (he.transform = {}),
                        he.transform[oe] = De) : (S.test(oe) && (oe = r(oe)),
                        oe in fr ? he[oe] = De : (we || (we = {}),
                        we[oe] = De));
                    for (oe in he) {
                        if (De = he[oe],
                        Oe = this.props[oe],
                        !Oe) {
                            if (!Qr)
                                continue;
                            Oe = v.call(this, oe)
                        }
                        ne.call(this, Oe, De)
                    }
                    de && we && de.call(this, we)
                }
                function be(k) {
                    k.stop()
                }
                function dr(k, ne) {
                    k.set(ne)
                }
                function x_(k) {
                    this.$el.css(k)
                }
                function Me(k, ne) {
                    l[k] = function() {
                        return this.children ? w_.call(this, ne, arguments) : (this.el && ne.apply(this, arguments),
                        this)
                    }
                }
                function w_(k, ne) {
                    var de, oe = this.children.length;
                    for (de = 0; oe > de; de++)
                        k.apply(this.children[de], ne);
                    return this
                }
                l.init = function(k) {
                    if (this.$el = e(k),
                    this.el = this.$el[0],
                    this.props = {},
                    this.queue = [],
                    this.style = "",
                    this.active = !1,
                    ge.keepInherited && !ge.fallback) {
                        var ne = cr(this.el, "transition");
                        ne && !H.test(ne) && (this.upstream = ne)
                    }
                    F.backface && ge.hideBackface && lt(this.el, F.backface.css, "hidden")
                }
                ,
                Me("add", v),
                Me("start", E),
                Me("wait", I),
                Me("then", h),
                Me("next", b),
                Me("stop", B),
                Me("set", $),
                Me("show", se),
                Me("hide", D),
                Me("redraw", J),
                Me("destroy", ee)
            })
              , M = d(W, function(l) {
                function v(E, I) {
                    var h = e.data(E, R) || e.data(E, R, new W.Bare);
                    return h.el || h.init(E),
                    I ? h.start(I) : h
                }
                l.init = function(E, I) {
                    var h = e(E);
                    if (!h.length)
                        return this;
                    if (h.length === 1)
                        return v(h[0], I);
                    var b = [];
                    return h.each(function(B, $) {
                        b.push(v($, I))
                    }),
                    this.children = b,
                    this
                }
            })
              , q = d(function(l) {
                function v() {
                    var b = this.get();
                    this.update("auto");
                    var B = this.get();
                    return this.update(b),
                    B
                }
                function E(b, B, $) {
                    return B !== void 0 && ($ = B),
                    b in g ? b : $
                }
                function I(b) {
                    var B = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(b);
                    return (B ? i(B[1], B[2], B[3]) : b).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                }
                var h = {
                    duration: 500,
                    ease: "ease",
                    delay: 0
                };
                l.init = function(b, B, $, se) {
                    this.$el = b,
                    this.el = b[0];
                    var D = B[0];
                    $[2] && (D = $[2]),
                    lr[D] && (D = lr[D]),
                    this.name = D,
                    this.type = $[1],
                    this.duration = c(B[1], this.duration, h.duration),
                    this.ease = E(B[2], this.ease, h.ease),
                    this.delay = c(B[3], this.delay, h.delay),
                    this.span = this.duration + this.delay,
                    this.active = !1,
                    this.nextStyle = null,
                    this.auto = j.test(this.name),
                    this.unit = se.unit || this.unit || ge.defaultUnit,
                    this.angle = se.angle || this.angle || ge.defaultAngle,
                    ge.fallback || se.fallback ? this.animate = this.fallback : (this.animate = this.transition,
                    this.string = this.name + Q + this.duration + "ms" + (this.ease != "ease" ? Q + g[this.ease][0] : "") + (this.delay ? Q + this.delay + "ms" : ""))
                }
                ,
                l.set = function(b) {
                    b = this.convert(b, this.type),
                    this.update(b),
                    this.redraw()
                }
                ,
                l.transition = function(b) {
                    this.active = !0,
                    b = this.convert(b, this.type),
                    this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()),
                    this.redraw()),
                    b == "auto" && (b = v.call(this))),
                    this.nextStyle = b
                }
                ,
                l.fallback = function(b) {
                    var B = this.el.style[this.name] || this.convert(this.get(), this.type);
                    b = this.convert(b, this.type),
                    this.auto && (B == "auto" && (B = this.convert(this.get(), this.type)),
                    b == "auto" && (b = v.call(this))),
                    this.tween = new z({
                        from: B,
                        to: b,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }
                ,
                l.get = function() {
                    return cr(this.el, this.name)
                }
                ,
                l.update = function(b) {
                    lt(this.el, this.name, b)
                }
                ,
                l.stop = function() {
                    (this.active || this.nextStyle) && (this.active = !1,
                    this.nextStyle = null,
                    lt(this.el, this.name, this.get()));
                    var b = this.tween;
                    b && b.context && b.destroy()
                }
                ,
                l.convert = function(b, B) {
                    if (b == "auto" && this.auto)
                        return b;
                    var $, se = typeof b == "number", D = typeof b == "string";
                    switch (B) {
                    case O:
                        if (se)
                            return b;
                        if (D && b.replace(A, "") === "")
                            return +b;
                        $ = "number(unitless)";
                        break;
                    case L:
                        if (D) {
                            if (b === "" && this.original)
                                return this.original;
                            if (B.test(b))
                                return b.charAt(0) == "#" && b.length == 7 ? b : I(b)
                        }
                        $ = "hex or rgb string";
                        break;
                    case P:
                        if (se)
                            return b + this.unit;
                        if (D && B.test(b))
                            return b;
                        $ = "number(px) or string(unit)";
                        break;
                    case x:
                        if (se)
                            return b + this.unit;
                        if (D && B.test(b))
                            return b;
                        $ = "number(px) or string(unit or %)";
                        break;
                    case V:
                        if (se)
                            return b + this.angle;
                        if (D && B.test(b))
                            return b;
                        $ = "number(deg) or string(angle)";
                        break;
                    case X:
                        if (se || D && x.test(b))
                            return b;
                        $ = "number(unitless) or string(unit or %)"
                    }
                    return a($, b),
                    b
                }
                ,
                l.redraw = function() {
                    this.el.offsetHeight
                }
            })
              , K = d(q, function(l, v) {
                l.init = function() {
                    v.init.apply(this, arguments),
                    this.original || (this.original = this.convert(this.get(), L))
                }
            })
              , te = d(q, function(l, v) {
                l.init = function() {
                    v.init.apply(this, arguments),
                    this.animate = this.fallback
                }
                ,
                l.get = function() {
                    return this.$el[this.name]()
                }
                ,
                l.update = function(E) {
                    this.$el[this.name](E)
                }
            })
              , re = d(q, function(l, v) {
                function E(I, h) {
                    var b, B, $, se, D;
                    for (b in I)
                        se = ke[b],
                        $ = se[0],
                        B = se[1] || b,
                        D = this.convert(I[b], $),
                        h.call(this, B, D, $)
                }
                l.init = function() {
                    v.init.apply(this, arguments),
                    this.current || (this.current = {},
                    ke.perspective && ge.perspective && (this.current.perspective = ge.perspective,
                    lt(this.el, this.name, this.style(this.current)),
                    this.redraw()))
                }
                ,
                l.set = function(I) {
                    E.call(this, I, function(h, b) {
                        this.current[h] = b
                    }),
                    lt(this.el, this.name, this.style(this.current)),
                    this.redraw()
                }
                ,
                l.transition = function(I) {
                    var h = this.values(I);
                    this.tween = new Ct({
                        current: this.current,
                        values: h,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease
                    });
                    var b, B = {};
                    for (b in this.current)
                        B[b] = b in h ? h[b] : this.current[b];
                    this.active = !0,
                    this.nextStyle = this.style(B)
                }
                ,
                l.fallback = function(I) {
                    var h = this.values(I);
                    this.tween = new Ct({
                        current: this.current,
                        values: h,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }
                ,
                l.update = function() {
                    lt(this.el, this.name, this.style(this.current))
                }
                ,
                l.style = function(I) {
                    var h, b = "";
                    for (h in I)
                        b += h + "(" + I[h] + ") ";
                    return b
                }
                ,
                l.values = function(I) {
                    var h, b = {};
                    return E.call(this, I, function(B, $, se) {
                        b[B] = $,
                        this.current[B] === void 0 && (h = 0,
                        ~B.indexOf("scale") && (h = 1),
                        this.current[B] = this.convert(h, se))
                    }),
                    b
                }
            })
              , z = d(function(l) {
                function v(D) {
                    $.push(D) === 1 && C(E)
                }
                function E() {
                    var D, J, ee, ve = $.length;
                    if (ve)
                        for (C(E),
                        J = G(),
                        D = ve; D--; )
                            ee = $[D],
                            ee && ee.render(J)
                }
                function I(D) {
                    var J, ee = e.inArray(D, $);
                    ee >= 0 && (J = $.slice(ee + 1),
                    $.length = ee,
                    J.length && ($ = $.concat(J)))
                }
                function h(D) {
                    return Math.round(D * se) / se
                }
                function b(D, J, ee) {
                    return i(D[0] + ee * (J[0] - D[0]), D[1] + ee * (J[1] - D[1]), D[2] + ee * (J[2] - D[2]))
                }
                var B = {
                    ease: g.ease[1],
                    from: 0,
                    to: 1
                };
                l.init = function(D) {
                    this.duration = D.duration || 0,
                    this.delay = D.delay || 0;
                    var J = D.ease || B.ease;
                    g[J] && (J = g[J][1]),
                    typeof J != "function" && (J = B.ease),
                    this.ease = J,
                    this.update = D.update || o,
                    this.complete = D.complete || o,
                    this.context = D.context || this,
                    this.name = D.name;
                    var ee = D.from
                      , ve = D.to;
                    ee === void 0 && (ee = B.from),
                    ve === void 0 && (ve = B.to),
                    this.unit = D.unit || "",
                    typeof ee == "number" && typeof ve == "number" ? (this.begin = ee,
                    this.change = ve - ee) : this.format(ve, ee),
                    this.value = this.begin + this.unit,
                    this.start = G(),
                    D.autoplay !== !1 && this.play()
                }
                ,
                l.play = function() {
                    this.active || (this.start || (this.start = G()),
                    this.active = !0,
                    v(this))
                }
                ,
                l.stop = function() {
                    this.active && (this.active = !1,
                    I(this))
                }
                ,
                l.render = function(D) {
                    var J, ee = D - this.start;
                    if (this.delay) {
                        if (ee <= this.delay)
                            return;
                        ee -= this.delay
                    }
                    if (ee < this.duration) {
                        var ve = this.ease(ee, 0, 1, this.duration);
                        return J = this.startRGB ? b(this.startRGB, this.endRGB, ve) : h(this.begin + ve * this.change),
                        this.value = J + this.unit,
                        void this.update.call(this.context, this.value)
                    }
                    J = this.endHex || this.begin + this.change,
                    this.value = J + this.unit,
                    this.update.call(this.context, this.value),
                    this.complete.call(this.context),
                    this.destroy()
                }
                ,
                l.format = function(D, J) {
                    if (J += "",
                    D += "",
                    D.charAt(0) == "#")
                        return this.startRGB = n(J),
                        this.endRGB = n(D),
                        this.endHex = D,
                        this.begin = 0,
                        void (this.change = 1);
                    if (!this.unit) {
                        var ee = J.replace(A, "")
                          , ve = D.replace(A, "");
                        ee !== ve && s("tween", J, D),
                        this.unit = ee
                    }
                    J = parseFloat(J),
                    D = parseFloat(D),
                    this.begin = this.value = J,
                    this.change = D - J
                }
                ,
                l.destroy = function() {
                    this.stop(),
                    this.context = null,
                    this.ease = this.update = this.complete = o
                }
                ;
                var $ = []
                  , se = 1e3
            })
              , le = d(z, function(l) {
                l.init = function(v) {
                    this.duration = v.duration || 0,
                    this.complete = v.complete || o,
                    this.context = v.context,
                    this.play()
                }
                ,
                l.render = function(v) {
                    var E = v - this.start;
                    E < this.duration || (this.complete.call(this.context),
                    this.destroy())
                }
            })
              , Ct = d(z, function(l, v) {
                l.init = function(E) {
                    this.context = E.context,
                    this.update = E.update,
                    this.tweens = [],
                    this.current = E.current;
                    var I, h;
                    for (I in E.values)
                        h = E.values[I],
                        this.current[I] !== h && this.tweens.push(new z({
                            name: I,
                            from: this.current[I],
                            to: h,
                            duration: E.duration,
                            delay: E.delay,
                            ease: E.ease,
                            autoplay: !1
                        }));
                    this.play()
                }
                ,
                l.render = function(E) {
                    var I, h, b = this.tweens.length, B = !1;
                    for (I = b; I--; )
                        h = this.tweens[I],
                        h.context && (h.render(E),
                        this.current[h.name] = h.value,
                        B = !0);
                    return B ? void (this.update && this.update.call(this.context)) : this.destroy()
                }
                ,
                l.destroy = function() {
                    if (v.destroy.call(this),
                    this.tweens) {
                        var E, I = this.tweens.length;
                        for (E = I; E--; )
                            this.tweens[E].destroy();
                        this.tweens = null,
                        this.current = null
                    }
                }
            })
              , ge = t.config = {
                debug: !1,
                defaultUnit: "px",
                defaultAngle: "deg",
                keepInherited: !1,
                hideBackface: !1,
                perspective: "",
                fallback: !F.transition,
                agentTests: []
            };
            t.fallback = function(l) {
                if (!F.transition)
                    return ge.fallback = !0;
                ge.agentTests.push("(" + l + ")");
                var v = new RegExp(ge.agentTests.join("|"),"i");
                ge.fallback = v.test(navigator.userAgent)
            }
            ,
            t.fallback("6.0.[2-5] Safari"),
            t.tween = function(l) {
                return new z(l)
            }
            ,
            t.delay = function(l, v, E) {
                return new le({
                    complete: v,
                    duration: l,
                    context: E
                })
            }
            ,
            e.fn.tram = function(l) {
                return t.call(null, this, l)
            }
            ;
            var lt = e.style
              , cr = e.css
              , lr = {
                transform: F.transform && F.transform.css
            }
              , fr = {
                color: [K, L],
                background: [K, L, "background-color"],
                "outline-color": [K, L],
                "border-color": [K, L],
                "border-top-color": [K, L],
                "border-right-color": [K, L],
                "border-bottom-color": [K, L],
                "border-left-color": [K, L],
                "border-width": [q, P],
                "border-top-width": [q, P],
                "border-right-width": [q, P],
                "border-bottom-width": [q, P],
                "border-left-width": [q, P],
                "border-spacing": [q, P],
                "letter-spacing": [q, P],
                margin: [q, P],
                "margin-top": [q, P],
                "margin-right": [q, P],
                "margin-bottom": [q, P],
                "margin-left": [q, P],
                padding: [q, P],
                "padding-top": [q, P],
                "padding-right": [q, P],
                "padding-bottom": [q, P],
                "padding-left": [q, P],
                "outline-width": [q, P],
                opacity: [q, O],
                top: [q, x],
                right: [q, x],
                bottom: [q, x],
                left: [q, x],
                "font-size": [q, x],
                "text-indent": [q, x],
                "word-spacing": [q, x],
                width: [q, x],
                "min-width": [q, x],
                "max-width": [q, x],
                height: [q, x],
                "min-height": [q, x],
                "max-height": [q, x],
                "line-height": [q, X],
                "scroll-top": [te, O, "scrollTop"],
                "scroll-left": [te, O, "scrollLeft"]
            }
              , ke = {};
            F.transform && (fr.transform = [re],
            ke = {
                x: [x, "translateX"],
                y: [x, "translateY"],
                rotate: [V],
                rotateX: [V],
                rotateY: [V],
                scale: [O],
                scaleX: [O],
                scaleY: [O],
                skew: [V],
                skewX: [V],
                skewY: [V]
            }),
            F.transform && F.backface && (ke.z = [x, "translateZ"],
            ke.rotateZ = [V],
            ke.scaleZ = [O],
            ke.perspective = [P]);
            var Ii = /ms/
              , Yr = /s|\./;
            return e.tram = t
        }(window.jQuery)
    }
    );
    var bs = u((hX,Is)=>{
        "use strict";
        var M_ = window.$
          , D_ = bi() && M_.tram;
        Is.exports = function() {
            var e = {};
            e.VERSION = "1.6.0-Webflow";
            var t = {}
              , r = Array.prototype
              , n = Object.prototype
              , i = Function.prototype
              , o = r.push
              , a = r.slice
              , s = r.concat
              , c = n.toString
              , f = n.hasOwnProperty
              , p = r.forEach
              , d = r.map
              , g = r.reduce
              , y = r.reduceRight
              , _ = r.filter
              , m = r.every
              , R = r.some
              , A = r.indexOf
              , S = r.lastIndexOf
              , O = Array.isArray
              , L = Object.keys
              , P = i.bind
              , x = e.each = e.forEach = function(T, w, U) {
                if (T == null)
                    return T;
                if (p && T.forEach === p)
                    T.forEach(w, U);
                else if (T.length === +T.length) {
                    for (var F = 0, Z = T.length; F < Z; F++)
                        if (w.call(U, T[F], F, T) === t)
                            return
                } else
                    for (var Y = e.keys(T), F = 0, Z = Y.length; F < Z; F++)
                        if (w.call(U, T[Y[F]], Y[F], T) === t)
                            return;
                return T
            }
            ;
            e.map = e.collect = function(T, w, U) {
                var F = [];
                return T == null ? F : d && T.map === d ? T.map(w, U) : (x(T, function(Z, Y, C) {
                    F.push(w.call(U, Z, Y, C))
                }),
                F)
            }
            ,
            e.find = e.detect = function(T, w, U) {
                var F;
                return V(T, function(Z, Y, C) {
                    if (w.call(U, Z, Y, C))
                        return F = Z,
                        !0
                }),
                F
            }
            ,
            e.filter = e.select = function(T, w, U) {
                var F = [];
                return T == null ? F : _ && T.filter === _ ? T.filter(w, U) : (x(T, function(Z, Y, C) {
                    w.call(U, Z, Y, C) && F.push(Z)
                }),
                F)
            }
            ;
            var V = e.some = e.any = function(T, w, U) {
                w || (w = e.identity);
                var F = !1;
                return T == null ? F : R && T.some === R ? T.some(w, U) : (x(T, function(Z, Y, C) {
                    if (F || (F = w.call(U, Z, Y, C)))
                        return t
                }),
                !!F)
            }
            ;
            e.contains = e.include = function(T, w) {
                return T == null ? !1 : A && T.indexOf === A ? T.indexOf(w) != -1 : V(T, function(U) {
                    return U === w
                })
            }
            ,
            e.delay = function(T, w) {
                var U = a.call(arguments, 2);
                return setTimeout(function() {
                    return T.apply(null, U)
                }, w)
            }
            ,
            e.defer = function(T) {
                return e.delay.apply(e, [T, 1].concat(a.call(arguments, 1)))
            }
            ,
            e.throttle = function(T) {
                var w, U, F;
                return function() {
                    w || (w = !0,
                    U = arguments,
                    F = this,
                    D_.frame(function() {
                        w = !1,
                        T.apply(F, U)
                    }))
                }
            }
            ,
            e.debounce = function(T, w, U) {
                var F, Z, Y, C, G, W = function() {
                    var M = e.now() - C;
                    M < w ? F = setTimeout(W, w - M) : (F = null,
                    U || (G = T.apply(Y, Z),
                    Y = Z = null))
                };
                return function() {
                    Y = this,
                    Z = arguments,
                    C = e.now();
                    var M = U && !F;
                    return F || (F = setTimeout(W, w)),
                    M && (G = T.apply(Y, Z),
                    Y = Z = null),
                    G
                }
            }
            ,
            e.defaults = function(T) {
                if (!e.isObject(T))
                    return T;
                for (var w = 1, U = arguments.length; w < U; w++) {
                    var F = arguments[w];
                    for (var Z in F)
                        T[Z] === void 0 && (T[Z] = F[Z])
                }
                return T
            }
            ,
            e.keys = function(T) {
                if (!e.isObject(T))
                    return [];
                if (L)
                    return L(T);
                var w = [];
                for (var U in T)
                    e.has(T, U) && w.push(U);
                return w
            }
            ,
            e.has = function(T, w) {
                return f.call(T, w)
            }
            ,
            e.isObject = function(T) {
                return T === Object(T)
            }
            ,
            e.now = Date.now || function() {
                return new Date().getTime()
            }
            ,
            e.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var X = /(.)^/
              , H = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            }
              , j = /\\|'|\r|\n|\u2028|\u2029/g
              , Q = function(T) {
                return "\\" + H[T]
            }
              , N = /^\s*(\w|\$)+\s*$/;
            return e.template = function(T, w, U) {
                !w && U && (w = U),
                w = e.defaults({}, w, e.templateSettings);
                var F = RegExp([(w.escape || X).source, (w.interpolate || X).source, (w.evaluate || X).source].join("|") + "|$", "g")
                  , Z = 0
                  , Y = "__p+='";
                T.replace(F, function(M, q, K, te, re) {
                    return Y += T.slice(Z, re).replace(j, Q),
                    Z = re + M.length,
                    q ? Y += `'+
((__t=(` + q + `))==null?'':_.escape(__t))+
'` : K ? Y += `'+
((__t=(` + K + `))==null?'':__t)+
'` : te && (Y += `';
` + te + `
__p+='`),
                    M
                }),
                Y += `';
`;
                var C = w.variable;
                if (C) {
                    if (!N.test(C))
                        throw new Error("variable is not a bare identifier: " + C)
                } else
                    Y = `with(obj||{}){
` + Y + `}
`,
                    C = "obj";
                Y = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + Y + `return __p;
`;
                var G;
                try {
                    G = new Function(w.variable || "obj","_",Y)
                } catch (M) {
                    throw M.source = Y,
                    M
                }
                var W = function(M) {
                    return G.call(this, M, e)
                };
                return W.source = "function(" + C + `){
` + Y + "}",
                W
            }
            ,
            e
        }()
    }
    );
    var rt = u((EX,Ns)=>{
        "use strict";
        var ae = {}
          , Nt = {}
          , Lt = []
          , Ai = window.Webflow || []
          , ft = window.jQuery
          , Ge = ft(window)
          , F_ = ft(document)
          , Ke = ft.isFunction
          , Fe = ae._ = bs()
          , As = ae.tram = bi() && ft.tram
          , en = !1
          , Si = !1;
        As.config.hideBackface = !1;
        As.config.keepInherited = !0;
        ae.define = function(e, t, r) {
            Nt[e] && xs(Nt[e]);
            var n = Nt[e] = t(ft, Fe, r) || {};
            return Ss(n),
            n
        }
        ;
        ae.require = function(e) {
            return Nt[e]
        }
        ;
        function Ss(e) {
            ae.env() && (Ke(e.design) && Ge.on("__wf_design", e.design),
            Ke(e.preview) && Ge.on("__wf_preview", e.preview)),
            Ke(e.destroy) && Ge.on("__wf_destroy", e.destroy),
            e.ready && Ke(e.ready) && G_(e)
        }
        function G_(e) {
            if (en) {
                e.ready();
                return
            }
            Fe.contains(Lt, e.ready) || Lt.push(e.ready)
        }
        function xs(e) {
            Ke(e.design) && Ge.off("__wf_design", e.design),
            Ke(e.preview) && Ge.off("__wf_preview", e.preview),
            Ke(e.destroy) && Ge.off("__wf_destroy", e.destroy),
            e.ready && Ke(e.ready) && V_(e)
        }
        function V_(e) {
            Lt = Fe.filter(Lt, function(t) {
                return t !== e.ready
            })
        }
        ae.push = function(e) {
            if (en) {
                Ke(e) && e();
                return
            }
            Ai.push(e)
        }
        ;
        ae.env = function(e) {
            var t = window.__wf_design
              , r = typeof t < "u";
            if (!e)
                return r;
            if (e === "design")
                return r && t;
            if (e === "preview")
                return r && !t;
            if (e === "slug")
                return r && window.__wf_slug;
            if (e === "editor")
                return window.WebflowEditor;
            if (e === "test")
                return window.__wf_test;
            if (e === "frame")
                return window !== window.top
        }
        ;
        var Jr = navigator.userAgent.toLowerCase()
          , ws = ae.env.touch = "ontouchstart"in window || window.DocumentTouch && document instanceof window.DocumentTouch
          , U_ = ae.env.chrome = /chrome/.test(Jr) && /Google/.test(navigator.vendor) && parseInt(Jr.match(/chrome\/(\d+)\./)[1], 10)
          , X_ = ae.env.ios = /(ipod|iphone|ipad)/.test(Jr);
        ae.env.safari = /safari/.test(Jr) && !U_ && !X_;
        var Oi;
        ws && F_.on("touchstart mousedown", function(e) {
            Oi = e.target
        });
        ae.validClick = ws ? function(e) {
            return e === Oi || ft.contains(e, Oi)
        }
        : function() {
            return !0
        }
        ;
        var Rs = "resize.webflow orientationchange.webflow load.webflow"
          , H_ = "scroll.webflow " + Rs;
        ae.resize = xi(Ge, Rs);
        ae.scroll = xi(Ge, H_);
        ae.redraw = xi();
        function xi(e, t) {
            var r = []
              , n = {};
            return n.up = Fe.throttle(function(i) {
                Fe.each(r, function(o) {
                    o(i)
                })
            }),
            e && t && e.on(t, n.up),
            n.on = function(i) {
                typeof i == "function" && (Fe.contains(r, i) || r.push(i))
            }
            ,
            n.off = function(i) {
                if (!arguments.length) {
                    r = [];
                    return
                }
                r = Fe.filter(r, function(o) {
                    return o !== i
                })
            }
            ,
            n
        }
        ae.location = function(e) {
            window.location = e
        }
        ;
        ae.env() && (ae.location = function() {}
        );
        ae.ready = function() {
            en = !0,
            Si ? B_() : Fe.each(Lt, Os),
            Fe.each(Ai, Os),
            ae.resize.up()
        }
        ;
        function Os(e) {
            Ke(e) && e()
        }
        function B_() {
            Si = !1,
            Fe.each(Nt, Ss)
        }
        var mt;
        ae.load = function(e) {
            mt.then(e)
        }
        ;
        function Cs() {
            mt && (mt.reject(),
            Ge.off("load", mt.resolve)),
            mt = new ft.Deferred,
            Ge.on("load", mt.resolve)
        }
        ae.destroy = function(e) {
            e = e || {},
            Si = !0,
            Ge.triggerHandler("__wf_destroy"),
            e.domready != null && (en = e.domready),
            Fe.each(Nt, xs),
            ae.resize.off(),
            ae.scroll.off(),
            ae.redraw.off(),
            Lt = [],
            Ai = [],
            mt.state() === "pending" && Cs()
        }
        ;
        ft(ae.ready);
        Cs();
        Ns.exports = window.Webflow = ae
    }
    );
    var qs = u((yX,Ps)=>{
        "use strict";
        var Ls = rt();
        Ls.define("brand", Ps.exports = function(e) {
            var t = {}, r = document, n = e("html"), i = e("body"), o = ".w-webflow-badge", a = window.location, s = /PhantomJS/i.test(navigator.userAgent), c = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange", f;
            t.ready = function() {
                var y = n.attr("data-wf-status")
                  , _ = n.attr("data-wf-domain") || "";
                /\.webflow\.io$/i.test(_) && a.hostname !== _ && (y = !0),
                y && !s && (f = f || d(),
                g(),
                setTimeout(g, 500),
                e(r).off(c, p).on(c, p))
            }
            ;
            function p() {
                var y = r.fullScreen || r.mozFullScreen || r.webkitIsFullScreen || r.msFullscreenElement || !!r.webkitFullscreenElement;
                e(f).attr("style", y ? "display: none !important;" : "")
            }
            function d() {
                var y = e('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs")
                  , _ = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg").attr("alt", "").css({
                    marginRight: "4px",
                    width: "26px"
                })
                  , m = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg").attr("alt", "Made in Webflow");
                return y.append(_, m),
                y[0]
            }
            function g() {
                var y = i.children(o)
                  , _ = y.length && y.get(0) === f
                  , m = Ls.env("editor");
                if (_) {
                    m && y.remove();
                    return
                }
                y.length && y.remove(),
                m || i.append(f)
            }
            return t
        }
        )
    }
    );
    var Ds = u((mX,Ms)=>{
        "use strict";
        var W_ = rt();
        W_.define("focus-visible", Ms.exports = function() {
            function e(r) {
                var n = !0
                  , i = !1
                  , o = null
                  , a = {
                    text: !0,
                    search: !0,
                    url: !0,
                    tel: !0,
                    email: !0,
                    password: !0,
                    number: !0,
                    date: !0,
                    month: !0,
                    week: !0,
                    time: !0,
                    datetime: !0,
                    "datetime-local": !0
                };
                function s(O) {
                    return !!(O && O !== document && O.nodeName !== "HTML" && O.nodeName !== "BODY" && "classList"in O && "contains"in O.classList)
                }
                function c(O) {
                    var L = O.type
                      , P = O.tagName;
                    return !!(P === "INPUT" && a[L] && !O.readOnly || P === "TEXTAREA" && !O.readOnly || O.isContentEditable)
                }
                function f(O) {
                    O.getAttribute("data-wf-focus-visible") || O.setAttribute("data-wf-focus-visible", "true")
                }
                function p(O) {
                    O.getAttribute("data-wf-focus-visible") && O.removeAttribute("data-wf-focus-visible")
                }
                function d(O) {
                    O.metaKey || O.altKey || O.ctrlKey || (s(r.activeElement) && f(r.activeElement),
                    n = !0)
                }
                function g() {
                    n = !1
                }
                function y(O) {
                    s(O.target) && (n || c(O.target)) && f(O.target)
                }
                function _(O) {
                    s(O.target) && O.target.hasAttribute("data-wf-focus-visible") && (i = !0,
                    window.clearTimeout(o),
                    o = window.setTimeout(function() {
                        i = !1
                    }, 100),
                    p(O.target))
                }
                function m() {
                    document.visibilityState === "hidden" && (i && (n = !0),
                    R())
                }
                function R() {
                    document.addEventListener("mousemove", S),
                    document.addEventListener("mousedown", S),
                    document.addEventListener("mouseup", S),
                    document.addEventListener("pointermove", S),
                    document.addEventListener("pointerdown", S),
                    document.addEventListener("pointerup", S),
                    document.addEventListener("touchmove", S),
                    document.addEventListener("touchstart", S),
                    document.addEventListener("touchend", S)
                }
                function A() {
                    document.removeEventListener("mousemove", S),
                    document.removeEventListener("mousedown", S),
                    document.removeEventListener("mouseup", S),
                    document.removeEventListener("pointermove", S),
                    document.removeEventListener("pointerdown", S),
                    document.removeEventListener("pointerup", S),
                    document.removeEventListener("touchmove", S),
                    document.removeEventListener("touchstart", S),
                    document.removeEventListener("touchend", S)
                }
                function S(O) {
                    O.target.nodeName && O.target.nodeName.toLowerCase() === "html" || (n = !1,
                    A())
                }
                document.addEventListener("keydown", d, !0),
                document.addEventListener("mousedown", g, !0),
                document.addEventListener("pointerdown", g, !0),
                document.addEventListener("touchstart", g, !0),
                document.addEventListener("visibilitychange", m, !0),
                R(),
                r.addEventListener("focus", y, !0),
                r.addEventListener("blur", _, !0)
            }
            function t() {
                if (typeof document < "u")
                    try {
                        document.querySelector(":focus-visible")
                    } catch {
                        e(document)
                    }
            }
            return {
                ready: t
            }
        }
        )
    }
    );
    var Vs = u((_X,Gs)=>{
        "use strict";
        var Fs = rt();
        Fs.define("focus", Gs.exports = function() {
            var e = []
              , t = !1;
            function r(a) {
                t && (a.preventDefault(),
                a.stopPropagation(),
                a.stopImmediatePropagation(),
                e.unshift(a))
            }
            function n(a) {
                var s = a.target
                  , c = s.tagName;
                return /^a$/i.test(c) && s.href != null || /^(button|textarea)$/i.test(c) && s.disabled !== !0 || /^input$/i.test(c) && /^(button|reset|submit|radio|checkbox)$/i.test(s.type) && !s.disabled || !/^(button|input|textarea|select|a)$/i.test(c) && !Number.isNaN(Number.parseFloat(s.tabIndex)) || /^audio$/i.test(c) || /^video$/i.test(c) && s.controls === !0
            }
            function i(a) {
                n(a) && (t = !0,
                setTimeout(()=>{
                    for (t = !1,
                    a.target.focus(); e.length > 0; ) {
                        var s = e.pop();
                        s.target.dispatchEvent(new MouseEvent(s.type,s))
                    }
                }
                , 0))
            }
            function o() {
                typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && Fs.env.safari && (document.addEventListener("mousedown", i, !0),
                document.addEventListener("mouseup", r, !0),
                document.addEventListener("click", r, !0))
            }
            return {
                ready: o
            }
        }
        )
    }
    );
    var Hs = u((TX,Xs)=>{
        "use strict";
        var wi = window.jQuery
          , $e = {}
          , tn = []
          , Us = ".w-ix"
          , rn = {
            reset: function(e, t) {
                t.__wf_intro = null
            },
            intro: function(e, t) {
                t.__wf_intro || (t.__wf_intro = !0,
                wi(t).triggerHandler($e.types.INTRO))
            },
            outro: function(e, t) {
                t.__wf_intro && (t.__wf_intro = null,
                wi(t).triggerHandler($e.types.OUTRO))
            }
        };
        $e.triggers = {};
        $e.types = {
            INTRO: "w-ix-intro" + Us,
            OUTRO: "w-ix-outro" + Us
        };
        $e.init = function() {
            for (var e = tn.length, t = 0; t < e; t++) {
                var r = tn[t];
                r[0](0, r[1])
            }
            tn = [],
            wi.extend($e.triggers, rn)
        }
        ;
        $e.async = function() {
            for (var e in rn) {
                var t = rn[e];
                rn.hasOwnProperty(e) && ($e.triggers[e] = function(r, n) {
                    tn.push([t, n])
                }
                )
            }
        }
        ;
        $e.async();
        Xs.exports = $e
    }
    );
    var js = u((IX,ks)=>{
        "use strict";
        var Ri = Hs();
        function Bs(e, t) {
            var r = document.createEvent("CustomEvent");
            r.initCustomEvent(t, !0, !0, null),
            e.dispatchEvent(r)
        }
        var k_ = window.jQuery
          , nn = {}
          , Ws = ".w-ix"
          , j_ = {
            reset: function(e, t) {
                Ri.triggers.reset(e, t)
            },
            intro: function(e, t) {
                Ri.triggers.intro(e, t),
                Bs(t, "COMPONENT_ACTIVE")
            },
            outro: function(e, t) {
                Ri.triggers.outro(e, t),
                Bs(t, "COMPONENT_INACTIVE")
            }
        };
        nn.triggers = {};
        nn.types = {
            INTRO: "w-ix-intro" + Ws,
            OUTRO: "w-ix-outro" + Ws
        };
        k_.extend(nn.triggers, j_);
        ks.exports = nn
    }
    );
    var zs = u((bX,nt)=>{
        function Ci(e) {
            return nt.exports = Ci = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            nt.exports.__esModule = !0,
            nt.exports.default = nt.exports,
            Ci(e)
        }
        nt.exports = Ci,
        nt.exports.__esModule = !0,
        nt.exports.default = nt.exports
    }
    );
    var on = u((OX,pr)=>{
        var z_ = zs().default;
        function Ks(e) {
            if (typeof WeakMap != "function")
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (Ks = function(i) {
                return i ? r : t
            }
            )(e)
        }
        function K_(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (e === null || z_(e) !== "object" && typeof e != "function")
                return {
                    default: e
                };
            var r = Ks(t);
            if (r && r.has(e))
                return r.get(e);
            var n = {}
              , i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
                    var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
                }
            return n.default = e,
            r && r.set(e, n),
            n
        }
        pr.exports = K_,
        pr.exports.__esModule = !0,
        pr.exports.default = pr.exports
    }
    );
    var $s = u((AX,gr)=>{
        function $_(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        gr.exports = $_,
        gr.exports.__esModule = !0,
        gr.exports.default = gr.exports
    }
    );
    var fe = u((SX,Ys)=>{
        var an = function(e) {
            return e && e.Math == Math && e
        };
        Ys.exports = an(typeof globalThis == "object" && globalThis) || an(typeof window == "object" && window) || an(typeof self == "object" && self) || an(typeof global == "object" && global) || function() {
            return this
        }() || Function("return this")()
    }
    );
    var Pt = u((xX,Qs)=>{
        Qs.exports = function(e) {
            try {
                return !!e()
            } catch {
                return !0
            }
        }
    }
    );
    var _t = u((wX,Zs)=>{
        var Y_ = Pt();
        Zs.exports = !Y_(function() {
            return Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1] != 7
        })
    }
    );
    var sn = u((RX,Js)=>{
        var vr = Function.prototype.call;
        Js.exports = vr.bind ? vr.bind(vr) : function() {
            return vr.apply(vr, arguments)
        }
    }
    );
    var nu = u(ru=>{
        "use strict";
        var eu = {}.propertyIsEnumerable
          , tu = Object.getOwnPropertyDescriptor
          , Q_ = tu && !eu.call({
            1: 2
        }, 1);
        ru.f = Q_ ? function(t) {
            var r = tu(this, t);
            return !!r && r.enumerable
        }
        : eu
    }
    );
    var Ni = u((NX,iu)=>{
        iu.exports = function(e, t) {
            return {
                enumerable: !(e & 1),
                configurable: !(e & 2),
                writable: !(e & 4),
                value: t
            }
        }
    }
    );
    var Ve = u((LX,au)=>{
        var ou = Function.prototype
          , Li = ou.bind
          , Pi = ou.call
          , Z_ = Li && Li.bind(Pi);
        au.exports = Li ? function(e) {
            return e && Z_(Pi, e)
        }
        : function(e) {
            return e && function() {
                return Pi.apply(e, arguments)
            }
        }
    }
    );
    var cu = u((PX,uu)=>{
        var su = Ve()
          , J_ = su({}.toString)
          , eT = su("".slice);
        uu.exports = function(e) {
            return eT(J_(e), 8, -1)
        }
    }
    );
    var fu = u((qX,lu)=>{
        var tT = fe()
          , rT = Ve()
          , nT = Pt()
          , iT = cu()
          , qi = tT.Object
          , oT = rT("".split);
        lu.exports = nT(function() {
            return !qi("z").propertyIsEnumerable(0)
        }) ? function(e) {
            return iT(e) == "String" ? oT(e, "") : qi(e)
        }
        : qi
    }
    );
    var Mi = u((MX,du)=>{
        var aT = fe()
          , sT = aT.TypeError;
        du.exports = function(e) {
            if (e == null)
                throw sT("Can't call method on " + e);
            return e
        }
    }
    );
    var hr = u((DX,pu)=>{
        var uT = fu()
          , cT = Mi();
        pu.exports = function(e) {
            return uT(cT(e))
        }
    }
    );
    var Ye = u((FX,gu)=>{
        gu.exports = function(e) {
            return typeof e == "function"
        }
    }
    );
    var qt = u((GX,vu)=>{
        var lT = Ye();
        vu.exports = function(e) {
            return typeof e == "object" ? e !== null : lT(e)
        }
    }
    );
    var Er = u((VX,hu)=>{
        var Di = fe()
          , fT = Ye()
          , dT = function(e) {
            return fT(e) ? e : void 0
        };
        hu.exports = function(e, t) {
            return arguments.length < 2 ? dT(Di[e]) : Di[e] && Di[e][t]
        }
    }
    );
    var yu = u((UX,Eu)=>{
        var pT = Ve();
        Eu.exports = pT({}.isPrototypeOf)
    }
    );
    var _u = u((XX,mu)=>{
        var gT = Er();
        mu.exports = gT("navigator", "userAgent") || ""
    }
    );
    var xu = u((HX,Su)=>{
        var Au = fe(), Fi = _u(), Tu = Au.process, Iu = Au.Deno, bu = Tu && Tu.versions || Iu && Iu.version, Ou = bu && bu.v8, Ue, un;
        Ou && (Ue = Ou.split("."),
        un = Ue[0] > 0 && Ue[0] < 4 ? 1 : +(Ue[0] + Ue[1]));
        !un && Fi && (Ue = Fi.match(/Edge\/(\d+)/),
        (!Ue || Ue[1] >= 74) && (Ue = Fi.match(/Chrome\/(\d+)/),
        Ue && (un = +Ue[1])));
        Su.exports = un
    }
    );
    var Gi = u((BX,Ru)=>{
        var wu = xu()
          , vT = Pt();
        Ru.exports = !!Object.getOwnPropertySymbols && !vT(function() {
            var e = Symbol();
            return !String(e) || !(Object(e)instanceof Symbol) || !Symbol.sham && wu && wu < 41
        })
    }
    );
    var Vi = u((WX,Cu)=>{
        var hT = Gi();
        Cu.exports = hT && !Symbol.sham && typeof Symbol.iterator == "symbol"
    }
    );
    var Ui = u((kX,Nu)=>{
        var ET = fe()
          , yT = Er()
          , mT = Ye()
          , _T = yu()
          , TT = Vi()
          , IT = ET.Object;
        Nu.exports = TT ? function(e) {
            return typeof e == "symbol"
        }
        : function(e) {
            var t = yT("Symbol");
            return mT(t) && _T(t.prototype, IT(e))
        }
    }
    );
    var Pu = u((jX,Lu)=>{
        var bT = fe()
          , OT = bT.String;
        Lu.exports = function(e) {
            try {
                return OT(e)
            } catch {
                return "Object"
            }
        }
    }
    );
    var Mu = u((zX,qu)=>{
        var AT = fe()
          , ST = Ye()
          , xT = Pu()
          , wT = AT.TypeError;
        qu.exports = function(e) {
            if (ST(e))
                return e;
            throw wT(xT(e) + " is not a function")
        }
    }
    );
    var Fu = u((KX,Du)=>{
        var RT = Mu();
        Du.exports = function(e, t) {
            var r = e[t];
            return r == null ? void 0 : RT(r)
        }
    }
    );
    var Vu = u(($X,Gu)=>{
        var CT = fe()
          , Xi = sn()
          , Hi = Ye()
          , Bi = qt()
          , NT = CT.TypeError;
        Gu.exports = function(e, t) {
            var r, n;
            if (t === "string" && Hi(r = e.toString) && !Bi(n = Xi(r, e)) || Hi(r = e.valueOf) && !Bi(n = Xi(r, e)) || t !== "string" && Hi(r = e.toString) && !Bi(n = Xi(r, e)))
                return n;
            throw NT("Can't convert object to primitive value")
        }
    }
    );
    var Xu = u((YX,Uu)=>{
        Uu.exports = !1
    }
    );
    var cn = u((QX,Bu)=>{
        var Hu = fe()
          , LT = Object.defineProperty;
        Bu.exports = function(e, t) {
            try {
                LT(Hu, e, {
                    value: t,
                    configurable: !0,
                    writable: !0
                })
            } catch {
                Hu[e] = t
            }
            return t
        }
    }
    );
    var ln = u((ZX,ku)=>{
        var PT = fe()
          , qT = cn()
          , Wu = "__core-js_shared__"
          , MT = PT[Wu] || qT(Wu, {});
        ku.exports = MT
    }
    );
    var Wi = u((JX,zu)=>{
        var DT = Xu()
          , ju = ln();
        (zu.exports = function(e, t) {
            return ju[e] || (ju[e] = t !== void 0 ? t : {})
        }
        )("versions", []).push({
            version: "3.19.0",
            mode: DT ? "pure" : "global",
            copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)"
        })
    }
    );
    var $u = u((e5,Ku)=>{
        var FT = fe()
          , GT = Mi()
          , VT = FT.Object;
        Ku.exports = function(e) {
            return VT(GT(e))
        }
    }
    );
    var dt = u((t5,Yu)=>{
        var UT = Ve()
          , XT = $u()
          , HT = UT({}.hasOwnProperty);
        Yu.exports = Object.hasOwn || function(t, r) {
            return HT(XT(t), r)
        }
    }
    );
    var ki = u((r5,Qu)=>{
        var BT = Ve()
          , WT = 0
          , kT = Math.random()
          , jT = BT(1.toString);
        Qu.exports = function(e) {
            return "Symbol(" + (e === void 0 ? "" : e) + ")_" + jT(++WT + kT, 36)
        }
    }
    );
    var ji = u((n5,rc)=>{
        var zT = fe()
          , KT = Wi()
          , Zu = dt()
          , $T = ki()
          , Ju = Gi()
          , tc = Vi()
          , Mt = KT("wks")
          , Tt = zT.Symbol
          , ec = Tt && Tt.for
          , YT = tc ? Tt : Tt && Tt.withoutSetter || $T;
        rc.exports = function(e) {
            if (!Zu(Mt, e) || !(Ju || typeof Mt[e] == "string")) {
                var t = "Symbol." + e;
                Ju && Zu(Tt, e) ? Mt[e] = Tt[e] : tc && ec ? Mt[e] = ec(t) : Mt[e] = YT(t)
            }
            return Mt[e]
        }
    }
    );
    var ac = u((i5,oc)=>{
        var QT = fe()
          , ZT = sn()
          , nc = qt()
          , ic = Ui()
          , JT = Fu()
          , eI = Vu()
          , tI = ji()
          , rI = QT.TypeError
          , nI = tI("toPrimitive");
        oc.exports = function(e, t) {
            if (!nc(e) || ic(e))
                return e;
            var r = JT(e, nI), n;
            if (r) {
                if (t === void 0 && (t = "default"),
                n = ZT(r, e, t),
                !nc(n) || ic(n))
                    return n;
                throw rI("Can't convert object to primitive value")
            }
            return t === void 0 && (t = "number"),
            eI(e, t)
        }
    }
    );
    var zi = u((o5,sc)=>{
        var iI = ac()
          , oI = Ui();
        sc.exports = function(e) {
            var t = iI(e, "string");
            return oI(t) ? t : t + ""
        }
    }
    );
    var $i = u((a5,cc)=>{
        var aI = fe()
          , uc = qt()
          , Ki = aI.document
          , sI = uc(Ki) && uc(Ki.createElement);
        cc.exports = function(e) {
            return sI ? Ki.createElement(e) : {}
        }
    }
    );
    var Yi = u((s5,lc)=>{
        var uI = _t()
          , cI = Pt()
          , lI = $i();
        lc.exports = !uI && !cI(function() {
            return Object.defineProperty(lI("div"), "a", {
                get: function() {
                    return 7
                }
            }).a != 7
        })
    }
    );
    var Qi = u(dc=>{
        var fI = _t()
          , dI = sn()
          , pI = nu()
          , gI = Ni()
          , vI = hr()
          , hI = zi()
          , EI = dt()
          , yI = Yi()
          , fc = Object.getOwnPropertyDescriptor;
        dc.f = fI ? fc : function(t, r) {
            if (t = vI(t),
            r = hI(r),
            yI)
                try {
                    return fc(t, r)
                } catch {}
            if (EI(t, r))
                return gI(!dI(pI.f, t, r), t[r])
        }
    }
    );
    var yr = u((c5,gc)=>{
        var pc = fe()
          , mI = qt()
          , _I = pc.String
          , TI = pc.TypeError;
        gc.exports = function(e) {
            if (mI(e))
                return e;
            throw TI(_I(e) + " is not an object")
        }
    }
    );
    var mr = u(Ec=>{
        var II = fe()
          , bI = _t()
          , OI = Yi()
          , vc = yr()
          , AI = zi()
          , SI = II.TypeError
          , hc = Object.defineProperty;
        Ec.f = bI ? hc : function(t, r, n) {
            if (vc(t),
            r = AI(r),
            vc(n),
            OI)
                try {
                    return hc(t, r, n)
                } catch {}
            if ("get"in n || "set"in n)
                throw SI("Accessors not supported");
            return "value"in n && (t[r] = n.value),
            t
        }
    }
    );
    var fn = u((f5,yc)=>{
        var xI = _t()
          , wI = mr()
          , RI = Ni();
        yc.exports = xI ? function(e, t, r) {
            return wI.f(e, t, RI(1, r))
        }
        : function(e, t, r) {
            return e[t] = r,
            e
        }
    }
    );
    var Ji = u((d5,mc)=>{
        var CI = Ve()
          , NI = Ye()
          , Zi = ln()
          , LI = CI(Function.toString);
        NI(Zi.inspectSource) || (Zi.inspectSource = function(e) {
            return LI(e)
        }
        );
        mc.exports = Zi.inspectSource
    }
    );
    var Ic = u((p5,Tc)=>{
        var PI = fe()
          , qI = Ye()
          , MI = Ji()
          , _c = PI.WeakMap;
        Tc.exports = qI(_c) && /native code/.test(MI(_c))
    }
    );
    var eo = u((g5,Oc)=>{
        var DI = Wi()
          , FI = ki()
          , bc = DI("keys");
        Oc.exports = function(e) {
            return bc[e] || (bc[e] = FI(e))
        }
    }
    );
    var dn = u((v5,Ac)=>{
        Ac.exports = {}
    }
    );
    var Nc = u((h5,Cc)=>{
        var GI = Ic(), Rc = fe(), to = Ve(), VI = qt(), UI = fn(), ro = dt(), no = ln(), XI = eo(), HI = dn(), Sc = "Object already initialized", oo = Rc.TypeError, BI = Rc.WeakMap, pn, _r, gn, WI = function(e) {
            return gn(e) ? _r(e) : pn(e, {})
        }, kI = function(e) {
            return function(t) {
                var r;
                if (!VI(t) || (r = _r(t)).type !== e)
                    throw oo("Incompatible receiver, " + e + " required");
                return r
            }
        };
        GI || no.state ? (pt = no.state || (no.state = new BI),
        xc = to(pt.get),
        io = to(pt.has),
        wc = to(pt.set),
        pn = function(e, t) {
            if (io(pt, e))
                throw new oo(Sc);
            return t.facade = e,
            wc(pt, e, t),
            t
        }
        ,
        _r = function(e) {
            return xc(pt, e) || {}
        }
        ,
        gn = function(e) {
            return io(pt, e)
        }
        ) : (It = XI("state"),
        HI[It] = !0,
        pn = function(e, t) {
            if (ro(e, It))
                throw new oo(Sc);
            return t.facade = e,
            UI(e, It, t),
            t
        }
        ,
        _r = function(e) {
            return ro(e, It) ? e[It] : {}
        }
        ,
        gn = function(e) {
            return ro(e, It)
        }
        );
        var pt, xc, io, wc, It;
        Cc.exports = {
            set: pn,
            get: _r,
            has: gn,
            enforce: WI,
            getterFor: kI
        }
    }
    );
    var qc = u((E5,Pc)=>{
        var ao = _t()
          , jI = dt()
          , Lc = Function.prototype
          , zI = ao && Object.getOwnPropertyDescriptor
          , so = jI(Lc, "name")
          , KI = so && function() {}
        .name === "something"
          , $I = so && (!ao || ao && zI(Lc, "name").configurable);
        Pc.exports = {
            EXISTS: so,
            PROPER: KI,
            CONFIGURABLE: $I
        }
    }
    );
    var Vc = u((y5,Gc)=>{
        var YI = fe()
          , Mc = Ye()
          , QI = dt()
          , Dc = fn()
          , ZI = cn()
          , JI = Ji()
          , Fc = Nc()
          , eb = qc().CONFIGURABLE
          , tb = Fc.get
          , rb = Fc.enforce
          , nb = String(String).split("String");
        (Gc.exports = function(e, t, r, n) {
            var i = n ? !!n.unsafe : !1, o = n ? !!n.enumerable : !1, a = n ? !!n.noTargetGet : !1, s = n && n.name !== void 0 ? n.name : t, c;
            if (Mc(r) && (String(s).slice(0, 7) === "Symbol(" && (s = "[" + String(s).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
            (!QI(r, "name") || eb && r.name !== s) && Dc(r, "name", s),
            c = rb(r),
            c.source || (c.source = nb.join(typeof s == "string" ? s : ""))),
            e === YI) {
                o ? e[t] = r : ZI(t, r);
                return
            } else
                i ? !a && e[t] && (o = !0) : delete e[t];
            o ? e[t] = r : Dc(e, t, r)
        }
        )(Function.prototype, "toString", function() {
            return Mc(this) && tb(this).source || JI(this)
        })
    }
    );
    var uo = u((m5,Uc)=>{
        var ib = Math.ceil
          , ob = Math.floor;
        Uc.exports = function(e) {
            var t = +e;
            return t !== t || t === 0 ? 0 : (t > 0 ? ob : ib)(t)
        }
    }
    );
    var Hc = u((_5,Xc)=>{
        var ab = uo()
          , sb = Math.max
          , ub = Math.min;
        Xc.exports = function(e, t) {
            var r = ab(e);
            return r < 0 ? sb(r + t, 0) : ub(r, t)
        }
    }
    );
    var Wc = u((T5,Bc)=>{
        var cb = uo()
          , lb = Math.min;
        Bc.exports = function(e) {
            return e > 0 ? lb(cb(e), 9007199254740991) : 0
        }
    }
    );
    var jc = u((I5,kc)=>{
        var fb = Wc();
        kc.exports = function(e) {
            return fb(e.length)
        }
    }
    );
    var co = u((b5,Kc)=>{
        var db = hr()
          , pb = Hc()
          , gb = jc()
          , zc = function(e) {
            return function(t, r, n) {
                var i = db(t), o = gb(i), a = pb(n, o), s;
                if (e && r != r) {
                    for (; o > a; )
                        if (s = i[a++],
                        s != s)
                            return !0
                } else
                    for (; o > a; a++)
                        if ((e || a in i) && i[a] === r)
                            return e || a || 0;
                return !e && -1
            }
        };
        Kc.exports = {
            includes: zc(!0),
            indexOf: zc(!1)
        }
    }
    );
    var fo = u((O5,Yc)=>{
        var vb = Ve()
          , lo = dt()
          , hb = hr()
          , Eb = co().indexOf
          , yb = dn()
          , $c = vb([].push);
        Yc.exports = function(e, t) {
            var r = hb(e), n = 0, i = [], o;
            for (o in r)
                !lo(yb, o) && lo(r, o) && $c(i, o);
            for (; t.length > n; )
                lo(r, o = t[n++]) && (~Eb(i, o) || $c(i, o));
            return i
        }
    }
    );
    var vn = u((A5,Qc)=>{
        Qc.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
    }
    );
    var Jc = u(Zc=>{
        var mb = fo()
          , _b = vn()
          , Tb = _b.concat("length", "prototype");
        Zc.f = Object.getOwnPropertyNames || function(t) {
            return mb(t, Tb)
        }
    }
    );
    var tl = u(el=>{
        el.f = Object.getOwnPropertySymbols
    }
    );
    var nl = u((w5,rl)=>{
        var Ib = Er()
          , bb = Ve()
          , Ob = Jc()
          , Ab = tl()
          , Sb = yr()
          , xb = bb([].concat);
        rl.exports = Ib("Reflect", "ownKeys") || function(t) {
            var r = Ob.f(Sb(t))
              , n = Ab.f;
            return n ? xb(r, n(t)) : r
        }
    }
    );
    var ol = u((R5,il)=>{
        var wb = dt()
          , Rb = nl()
          , Cb = Qi()
          , Nb = mr();
        il.exports = function(e, t) {
            for (var r = Rb(t), n = Nb.f, i = Cb.f, o = 0; o < r.length; o++) {
                var a = r[o];
                wb(e, a) || n(e, a, i(t, a))
            }
        }
    }
    );
    var sl = u((C5,al)=>{
        var Lb = Pt()
          , Pb = Ye()
          , qb = /#|\.prototype\./
          , Tr = function(e, t) {
            var r = Db[Mb(e)];
            return r == Gb ? !0 : r == Fb ? !1 : Pb(t) ? Lb(t) : !!t
        }
          , Mb = Tr.normalize = function(e) {
            return String(e).replace(qb, ".").toLowerCase()
        }
          , Db = Tr.data = {}
          , Fb = Tr.NATIVE = "N"
          , Gb = Tr.POLYFILL = "P";
        al.exports = Tr
    }
    );
    var cl = u((N5,ul)=>{
        var po = fe()
          , Vb = Qi().f
          , Ub = fn()
          , Xb = Vc()
          , Hb = cn()
          , Bb = ol()
          , Wb = sl();
        ul.exports = function(e, t) {
            var r = e.target, n = e.global, i = e.stat, o, a, s, c, f, p;
            if (n ? a = po : i ? a = po[r] || Hb(r, {}) : a = (po[r] || {}).prototype,
            a)
                for (s in t) {
                    if (f = t[s],
                    e.noTargetGet ? (p = Vb(a, s),
                    c = p && p.value) : c = a[s],
                    o = Wb(n ? s : r + (i ? "." : "#") + s, e.forced),
                    !o && c !== void 0) {
                        if (typeof f == typeof c)
                            continue;
                        Bb(f, c)
                    }
                    (e.sham || c && c.sham) && Ub(f, "sham", !0),
                    Xb(a, s, f, e)
                }
        }
    }
    );
    var fl = u((L5,ll)=>{
        var kb = fo()
          , jb = vn();
        ll.exports = Object.keys || function(t) {
            return kb(t, jb)
        }
    }
    );
    var pl = u((P5,dl)=>{
        var zb = _t()
          , Kb = mr()
          , $b = yr()
          , Yb = hr()
          , Qb = fl();
        dl.exports = zb ? Object.defineProperties : function(t, r) {
            $b(t);
            for (var n = Yb(r), i = Qb(r), o = i.length, a = 0, s; o > a; )
                Kb.f(t, s = i[a++], n[s]);
            return t
        }
    }
    );
    var vl = u((q5,gl)=>{
        var Zb = Er();
        gl.exports = Zb("document", "documentElement")
    }
    );
    var bl = u((M5,Il)=>{
        var Jb = yr(), eO = pl(), hl = vn(), tO = dn(), rO = vl(), nO = $i(), iO = eo(), El = ">", yl = "<", vo = "prototype", ho = "script", _l = iO("IE_PROTO"), go = function() {}, Tl = function(e) {
            return yl + ho + El + e + yl + "/" + ho + El
        }, ml = function(e) {
            e.write(Tl("")),
            e.close();
            var t = e.parentWindow.Object;
            return e = null,
            t
        }, oO = function() {
            var e = nO("iframe"), t = "java" + ho + ":", r;
            return e.style.display = "none",
            rO.appendChild(e),
            e.src = String(t),
            r = e.contentWindow.document,
            r.open(),
            r.write(Tl("document.F=Object")),
            r.close(),
            r.F
        }, hn, En = function() {
            try {
                hn = new ActiveXObject("htmlfile")
            } catch {}
            En = typeof document < "u" ? document.domain && hn ? ml(hn) : oO() : ml(hn);
            for (var e = hl.length; e--; )
                delete En[vo][hl[e]];
            return En()
        };
        tO[_l] = !0;
        Il.exports = Object.create || function(t, r) {
            var n;
            return t !== null ? (go[vo] = Jb(t),
            n = new go,
            go[vo] = null,
            n[_l] = t) : n = En(),
            r === void 0 ? n : eO(n, r)
        }
    }
    );
    var Al = u((D5,Ol)=>{
        var aO = ji()
          , sO = bl()
          , uO = mr()
          , Eo = aO("unscopables")
          , yo = Array.prototype;
        yo[Eo] == null && uO.f(yo, Eo, {
            configurable: !0,
            value: sO(null)
        });
        Ol.exports = function(e) {
            yo[Eo][e] = !0
        }
    }
    );
    var Sl = u(()=>{
        "use strict";
        var cO = cl()
          , lO = co().includes
          , fO = Al();
        cO({
            target: "Array",
            proto: !0
        }, {
            includes: function(t) {
                return lO(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        });
        fO("includes")
    }
    );
    var wl = u((V5,xl)=>{
        var dO = fe()
          , pO = Ve();
        xl.exports = function(e, t) {
            return pO(dO[e].prototype[t])
        }
    }
    );
    var Cl = u((U5,Rl)=>{
        Sl();
        var gO = wl();
        Rl.exports = gO("Array", "includes")
    }
    );
    var Ll = u((X5,Nl)=>{
        var vO = Cl();
        Nl.exports = vO
    }
    );
    var ql = u((H5,Pl)=>{
        var hO = Ll();
        Pl.exports = hO
    }
    );
    var mo = u((B5,Ml)=>{
        var EO = typeof global == "object" && global && global.Object === Object && global;
        Ml.exports = EO
    }
    );
    var Xe = u((W5,Dl)=>{
        var yO = mo()
          , mO = typeof self == "object" && self && self.Object === Object && self
          , _O = yO || mO || Function("return this")();
        Dl.exports = _O
    }
    );
    var Dt = u((k5,Fl)=>{
        var TO = Xe()
          , IO = TO.Symbol;
        Fl.exports = IO
    }
    );
    var Xl = u((j5,Ul)=>{
        var Gl = Dt()
          , Vl = Object.prototype
          , bO = Vl.hasOwnProperty
          , OO = Vl.toString
          , Ir = Gl ? Gl.toStringTag : void 0;
        function AO(e) {
            var t = bO.call(e, Ir)
              , r = e[Ir];
            try {
                e[Ir] = void 0;
                var n = !0
            } catch {}
            var i = OO.call(e);
            return n && (t ? e[Ir] = r : delete e[Ir]),
            i
        }
        Ul.exports = AO
    }
    );
    var Bl = u((z5,Hl)=>{
        var SO = Object.prototype
          , xO = SO.toString;
        function wO(e) {
            return xO.call(e)
        }
        Hl.exports = wO
    }
    );
    var gt = u((K5,jl)=>{
        var Wl = Dt()
          , RO = Xl()
          , CO = Bl()
          , NO = "[object Null]"
          , LO = "[object Undefined]"
          , kl = Wl ? Wl.toStringTag : void 0;
        function PO(e) {
            return e == null ? e === void 0 ? LO : NO : kl && kl in Object(e) ? RO(e) : CO(e)
        }
        jl.exports = PO
    }
    );
    var _o = u(($5,zl)=>{
        function qO(e, t) {
            return function(r) {
                return e(t(r))
            }
        }
        zl.exports = qO
    }
    );
    var To = u((Y5,Kl)=>{
        var MO = _o()
          , DO = MO(Object.getPrototypeOf, Object);
        Kl.exports = DO
    }
    );
    var it = u((Q5,$l)=>{
        function FO(e) {
            return e != null && typeof e == "object"
        }
        $l.exports = FO
    }
    );
    var Io = u((Z5,Ql)=>{
        var GO = gt()
          , VO = To()
          , UO = it()
          , XO = "[object Object]"
          , HO = Function.prototype
          , BO = Object.prototype
          , Yl = HO.toString
          , WO = BO.hasOwnProperty
          , kO = Yl.call(Object);
        function jO(e) {
            if (!UO(e) || GO(e) != XO)
                return !1;
            var t = VO(e);
            if (t === null)
                return !0;
            var r = WO.call(t, "constructor") && t.constructor;
            return typeof r == "function" && r instanceof r && Yl.call(r) == kO
        }
        Ql.exports = jO
    }
    );
    var Zl = u(bo=>{
        "use strict";
        Object.defineProperty(bo, "__esModule", {
            value: !0
        });
        bo.default = zO;
        function zO(e) {
            var t, r = e.Symbol;
            return typeof r == "function" ? r.observable ? t = r.observable : (t = r("observable"),
            r.observable = t) : t = "@@observable",
            t
        }
    }
    );
    var Jl = u((Ao,Oo)=>{
        "use strict";
        Object.defineProperty(Ao, "__esModule", {
            value: !0
        });
        var KO = Zl()
          , $O = YO(KO);
        function YO(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var Ft;
        typeof self < "u" ? Ft = self : typeof window < "u" ? Ft = window : typeof global < "u" ? Ft = global : typeof Oo < "u" ? Ft = Oo : Ft = Function("return this")();
        var QO = (0,
        $O.default)(Ft);
        Ao.default = QO
    }
    );
    var So = u(br=>{
        "use strict";
        br.__esModule = !0;
        br.ActionTypes = void 0;
        br.default = nf;
        var ZO = Io()
          , JO = rf(ZO)
          , eA = Jl()
          , ef = rf(eA);
        function rf(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var tf = br.ActionTypes = {
            INIT: "@@redux/INIT"
        };
        function nf(e, t, r) {
            var n;
            if (typeof t == "function" && typeof r > "u" && (r = t,
            t = void 0),
            typeof r < "u") {
                if (typeof r != "function")
                    throw new Error("Expected the enhancer to be a function.");
                return r(nf)(e, t)
            }
            if (typeof e != "function")
                throw new Error("Expected the reducer to be a function.");
            var i = e
              , o = t
              , a = []
              , s = a
              , c = !1;
            function f() {
                s === a && (s = a.slice())
            }
            function p() {
                return o
            }
            function d(m) {
                if (typeof m != "function")
                    throw new Error("Expected listener to be a function.");
                var R = !0;
                return f(),
                s.push(m),
                function() {
                    if (R) {
                        R = !1,
                        f();
                        var S = s.indexOf(m);
                        s.splice(S, 1)
                    }
                }
            }
            function g(m) {
                if (!(0,
                JO.default)(m))
                    throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if (typeof m.type > "u")
                    throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                if (c)
                    throw new Error("Reducers may not dispatch actions.");
                try {
                    c = !0,
                    o = i(o, m)
                } finally {
                    c = !1
                }
                for (var R = a = s, A = 0; A < R.length; A++)
                    R[A]();
                return m
            }
            function y(m) {
                if (typeof m != "function")
                    throw new Error("Expected the nextReducer to be a function.");
                i = m,
                g({
                    type: tf.INIT
                })
            }
            function _() {
                var m, R = d;
                return m = {
                    subscribe: function(S) {
                        if (typeof S != "object")
                            throw new TypeError("Expected the observer to be an object.");
                        function O() {
                            S.next && S.next(p())
                        }
                        O();
                        var L = R(O);
                        return {
                            unsubscribe: L
                        }
                    }
                },
                m[ef.default] = function() {
                    return this
                }
                ,
                m
            }
            return g({
                type: tf.INIT
            }),
            n = {
                dispatch: g,
                subscribe: d,
                getState: p,
                replaceReducer: y
            },
            n[ef.default] = _,
            n
        }
    }
    );
    var wo = u(xo=>{
        "use strict";
        xo.__esModule = !0;
        xo.default = tA;
        function tA(e) {
            typeof console < "u" && typeof console.error == "function" && console.error(e);
            try {
                throw new Error(e)
            } catch {}
        }
    }
    );
    var sf = u(Ro=>{
        "use strict";
        Ro.__esModule = !0;
        Ro.default = aA;
        var of = So()
          , rA = Io()
          , rH = af(rA)
          , nA = wo()
          , nH = af(nA);
        function af(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function iA(e, t) {
            var r = t && t.type
              , n = r && '"' + r.toString() + '"' || "an action";
            return "Given action " + n + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
        }
        function oA(e) {
            Object.keys(e).forEach(function(t) {
                var r = e[t]
                  , n = r(void 0, {
                    type: of.ActionTypes.INIT
                });
                if (typeof n > "u")
                    throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
                var i = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
                if (typeof r(void 0, {
                    type: i
                }) > "u")
                    throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + of.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")
            })
        }
        function aA(e) {
            for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
                var i = t[n];
                typeof e[i] == "function" && (r[i] = e[i])
            }
            var o = Object.keys(r);
            if (!1)
                var a;
            var s;
            try {
                oA(r)
            } catch (c) {
                s = c
            }
            return function() {
                var f = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0]
                  , p = arguments[1];
                if (s)
                    throw s;
                if (!1)
                    var d;
                for (var g = !1, y = {}, _ = 0; _ < o.length; _++) {
                    var m = o[_]
                      , R = r[m]
                      , A = f[m]
                      , S = R(A, p);
                    if (typeof S > "u") {
                        var O = iA(m, p);
                        throw new Error(O)
                    }
                    y[m] = S,
                    g = g || S !== A
                }
                return g ? y : f
            }
        }
    }
    );
    var cf = u(Co=>{
        "use strict";
        Co.__esModule = !0;
        Co.default = sA;
        function uf(e, t) {
            return function() {
                return t(e.apply(void 0, arguments))
            }
        }
        function sA(e, t) {
            if (typeof e == "function")
                return uf(e, t);
            if (typeof e != "object" || e === null)
                throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
            for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
                var o = r[i]
                  , a = e[o];
                typeof a == "function" && (n[o] = uf(a, t))
            }
            return n
        }
    }
    );
    var Lo = u(No=>{
        "use strict";
        No.__esModule = !0;
        No.default = uA;
        function uA() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            if (t.length === 0)
                return function(o) {
                    return o
                }
                ;
            if (t.length === 1)
                return t[0];
            var n = t[t.length - 1]
              , i = t.slice(0, -1);
            return function() {
                return i.reduceRight(function(o, a) {
                    return a(o)
                }, n.apply(void 0, arguments))
            }
        }
    }
    );
    var lf = u(Po=>{
        "use strict";
        Po.__esModule = !0;
        var cA = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        }
        ;
        Po.default = pA;
        var lA = Lo()
          , fA = dA(lA);
        function dA(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function pA() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            return function(n) {
                return function(i, o, a) {
                    var s = n(i, o, a)
                      , c = s.dispatch
                      , f = []
                      , p = {
                        getState: s.getState,
                        dispatch: function(g) {
                            return c(g)
                        }
                    };
                    return f = t.map(function(d) {
                        return d(p)
                    }),
                    c = fA.default.apply(void 0, f)(s.dispatch),
                    cA({}, s, {
                        dispatch: c
                    })
                }
            }
        }
    }
    );
    var qo = u(Pe=>{
        "use strict";
        Pe.__esModule = !0;
        Pe.compose = Pe.applyMiddleware = Pe.bindActionCreators = Pe.combineReducers = Pe.createStore = void 0;
        var gA = So()
          , vA = Gt(gA)
          , hA = sf()
          , EA = Gt(hA)
          , yA = cf()
          , mA = Gt(yA)
          , _A = lf()
          , TA = Gt(_A)
          , IA = Lo()
          , bA = Gt(IA)
          , OA = wo()
          , uH = Gt(OA);
        function Gt(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Pe.createStore = vA.default;
        Pe.combineReducers = EA.default;
        Pe.bindActionCreators = mA.default;
        Pe.applyMiddleware = TA.default;
        Pe.compose = bA.default
    }
    );
    var He, Mo, Qe, AA, SA, Do, xA, ff = ce(()=>{
        "use strict";
        He = {
            NAVBAR_OPEN: "NAVBAR_OPEN",
            NAVBAR_CLOSE: "NAVBAR_CLOSE",
            TAB_ACTIVE: "TAB_ACTIVE",
            TAB_INACTIVE: "TAB_INACTIVE",
            SLIDER_ACTIVE: "SLIDER_ACTIVE",
            SLIDER_INACTIVE: "SLIDER_INACTIVE",
            DROPDOWN_OPEN: "DROPDOWN_OPEN",
            DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
            MOUSE_CLICK: "MOUSE_CLICK",
            MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
            MOUSE_DOWN: "MOUSE_DOWN",
            MOUSE_UP: "MOUSE_UP",
            MOUSE_OVER: "MOUSE_OVER",
            MOUSE_OUT: "MOUSE_OUT",
            MOUSE_MOVE: "MOUSE_MOVE",
            MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
            SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
            SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
            SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
            ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
            ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
            PAGE_START: "PAGE_START",
            PAGE_FINISH: "PAGE_FINISH",
            PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
            PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
            PAGE_SCROLL: "PAGE_SCROLL"
        },
        Mo = {
            ELEMENT: "ELEMENT",
            CLASS: "CLASS",
            PAGE: "PAGE"
        },
        Qe = {
            ELEMENT: "ELEMENT",
            VIEWPORT: "VIEWPORT"
        },
        AA = {
            X_AXIS: "X_AXIS",
            Y_AXIS: "Y_AXIS"
        },
        SA = {
            CHILDREN: "CHILDREN",
            SIBLINGS: "SIBLINGS",
            IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
        },
        Do = {
            FADE_EFFECT: "FADE_EFFECT",
            SLIDE_EFFECT: "SLIDE_EFFECT",
            GROW_EFFECT: "GROW_EFFECT",
            SHRINK_EFFECT: "SHRINK_EFFECT",
            SPIN_EFFECT: "SPIN_EFFECT",
            FLY_EFFECT: "FLY_EFFECT",
            POP_EFFECT: "POP_EFFECT",
            FLIP_EFFECT: "FLIP_EFFECT",
            JIGGLE_EFFECT: "JIGGLE_EFFECT",
            PULSE_EFFECT: "PULSE_EFFECT",
            DROP_EFFECT: "DROP_EFFECT",
            BLINK_EFFECT: "BLINK_EFFECT",
            BOUNCE_EFFECT: "BOUNCE_EFFECT",
            FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
            FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
            RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
            JELLO_EFFECT: "JELLO_EFFECT",
            GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
            SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
            PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
        },
        xA = {
            LEFT: "LEFT",
            RIGHT: "RIGHT",
            BOTTOM: "BOTTOM",
            TOP: "TOP",
            BOTTOM_LEFT: "BOTTOM_LEFT",
            BOTTOM_RIGHT: "BOTTOM_RIGHT",
            TOP_RIGHT: "TOP_RIGHT",
            TOP_LEFT: "TOP_LEFT",
            CLOCKWISE: "CLOCKWISE",
            COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
        }
    }
    );
    var qe, wA, Fo = ce(()=>{
        "use strict";
        qe = {
            TRANSFORM_MOVE: "TRANSFORM_MOVE",
            TRANSFORM_SCALE: "TRANSFORM_SCALE",
            TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
            TRANSFORM_SKEW: "TRANSFORM_SKEW",
            STYLE_OPACITY: "STYLE_OPACITY",
            STYLE_SIZE: "STYLE_SIZE",
            STYLE_FILTER: "STYLE_FILTER",
            STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
            STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
            STYLE_BORDER: "STYLE_BORDER",
            STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
            OBJECT_VALUE: "OBJECT_VALUE",
            PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
            PLUGIN_SPLINE: "PLUGIN_SPLINE",
            PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
            GENERAL_DISPLAY: "GENERAL_DISPLAY",
            GENERAL_START_ACTION: "GENERAL_START_ACTION",
            GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
            GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
            GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
            GENERAL_LOOP: "GENERAL_LOOP",
            STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
        },
        wA = {
            ELEMENT: "ELEMENT",
            ELEMENT_CLASS: "ELEMENT_CLASS",
            TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
        }
    }
    );
    var RA, df = ce(()=>{
        "use strict";
        RA = {
            MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
            MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
            MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
            SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
            SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
            MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
            PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
            PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
            PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
            NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
            DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
            ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
            TAB_INTERACTION: "TAB_INTERACTION",
            SLIDER_INTERACTION: "SLIDER_INTERACTION"
        }
    }
    );
    var CA, NA, LA, PA, qA, MA, DA, Go, pf = ce(()=>{
        "use strict";
        Fo();
        ({TRANSFORM_MOVE: CA, TRANSFORM_SCALE: NA, TRANSFORM_ROTATE: LA, TRANSFORM_SKEW: PA, STYLE_SIZE: qA, STYLE_FILTER: MA, STYLE_FONT_VARIATION: DA} = qe),
        Go = {
            [CA]: !0,
            [NA]: !0,
            [LA]: !0,
            [PA]: !0,
            [qA]: !0,
            [MA]: !0,
            [DA]: !0
        }
    }
    );
    var Ee = {};
    Re(Ee, {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: ()=>JA,
        IX2_ANIMATION_FRAME_CHANGED: ()=>zA,
        IX2_CLEAR_REQUESTED: ()=>WA,
        IX2_ELEMENT_STATE_CHANGED: ()=>ZA,
        IX2_EVENT_LISTENER_ADDED: ()=>kA,
        IX2_EVENT_STATE_CHANGED: ()=>jA,
        IX2_INSTANCE_ADDED: ()=>$A,
        IX2_INSTANCE_REMOVED: ()=>QA,
        IX2_INSTANCE_STARTED: ()=>YA,
        IX2_MEDIA_QUERIES_DEFINED: ()=>tS,
        IX2_PARAMETER_CHANGED: ()=>KA,
        IX2_PLAYBACK_REQUESTED: ()=>HA,
        IX2_PREVIEW_REQUESTED: ()=>XA,
        IX2_RAW_DATA_IMPORTED: ()=>FA,
        IX2_SESSION_INITIALIZED: ()=>GA,
        IX2_SESSION_STARTED: ()=>VA,
        IX2_SESSION_STOPPED: ()=>UA,
        IX2_STOP_REQUESTED: ()=>BA,
        IX2_TEST_FRAME_RENDERED: ()=>rS,
        IX2_VIEWPORT_WIDTH_CHANGED: ()=>eS
    });
    var FA, GA, VA, UA, XA, HA, BA, WA, kA, jA, zA, KA, $A, YA, QA, ZA, JA, eS, tS, rS, gf = ce(()=>{
        "use strict";
        FA = "IX2_RAW_DATA_IMPORTED",
        GA = "IX2_SESSION_INITIALIZED",
        VA = "IX2_SESSION_STARTED",
        UA = "IX2_SESSION_STOPPED",
        XA = "IX2_PREVIEW_REQUESTED",
        HA = "IX2_PLAYBACK_REQUESTED",
        BA = "IX2_STOP_REQUESTED",
        WA = "IX2_CLEAR_REQUESTED",
        kA = "IX2_EVENT_LISTENER_ADDED",
        jA = "IX2_EVENT_STATE_CHANGED",
        zA = "IX2_ANIMATION_FRAME_CHANGED",
        KA = "IX2_PARAMETER_CHANGED",
        $A = "IX2_INSTANCE_ADDED",
        YA = "IX2_INSTANCE_STARTED",
        QA = "IX2_INSTANCE_REMOVED",
        ZA = "IX2_ELEMENT_STATE_CHANGED",
        JA = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
        eS = "IX2_VIEWPORT_WIDTH_CHANGED",
        tS = "IX2_MEDIA_QUERIES_DEFINED",
        rS = "IX2_TEST_FRAME_RENDERED"
    }
    );
    var Ie = {};
    Re(Ie, {
        ABSTRACT_NODE: ()=>ex,
        AUTO: ()=>BS,
        BACKGROUND: ()=>FS,
        BACKGROUND_COLOR: ()=>DS,
        BAR_DELIMITER: ()=>jS,
        BORDER_COLOR: ()=>GS,
        BOUNDARY_SELECTOR: ()=>sS,
        CHILDREN: ()=>zS,
        COLON_DELIMITER: ()=>kS,
        COLOR: ()=>VS,
        COMMA_DELIMITER: ()=>WS,
        CONFIG_UNIT: ()=>vS,
        CONFIG_VALUE: ()=>fS,
        CONFIG_X_UNIT: ()=>dS,
        CONFIG_X_VALUE: ()=>uS,
        CONFIG_Y_UNIT: ()=>pS,
        CONFIG_Y_VALUE: ()=>cS,
        CONFIG_Z_UNIT: ()=>gS,
        CONFIG_Z_VALUE: ()=>lS,
        DISPLAY: ()=>US,
        FILTER: ()=>LS,
        FLEX: ()=>XS,
        FONT_VARIATION_SETTINGS: ()=>PS,
        HEIGHT: ()=>MS,
        HTML_ELEMENT: ()=>ZS,
        IMMEDIATE_CHILDREN: ()=>KS,
        IX2_ID_DELIMITER: ()=>nS,
        OPACITY: ()=>NS,
        PARENT: ()=>YS,
        PLAIN_OBJECT: ()=>JS,
        PRESERVE_3D: ()=>QS,
        RENDER_GENERAL: ()=>rx,
        RENDER_PLUGIN: ()=>ix,
        RENDER_STYLE: ()=>nx,
        RENDER_TRANSFORM: ()=>tx,
        ROTATE_X: ()=>AS,
        ROTATE_Y: ()=>SS,
        ROTATE_Z: ()=>xS,
        SCALE_3D: ()=>OS,
        SCALE_X: ()=>TS,
        SCALE_Y: ()=>IS,
        SCALE_Z: ()=>bS,
        SIBLINGS: ()=>$S,
        SKEW: ()=>wS,
        SKEW_X: ()=>RS,
        SKEW_Y: ()=>CS,
        TRANSFORM: ()=>hS,
        TRANSLATE_3D: ()=>_S,
        TRANSLATE_X: ()=>ES,
        TRANSLATE_Y: ()=>yS,
        TRANSLATE_Z: ()=>mS,
        WF_PAGE: ()=>iS,
        WIDTH: ()=>qS,
        WILL_CHANGE: ()=>HS,
        W_MOD_IX: ()=>aS,
        W_MOD_JS: ()=>oS
    });
    var nS, iS, oS, aS, sS, uS, cS, lS, fS, dS, pS, gS, vS, hS, ES, yS, mS, _S, TS, IS, bS, OS, AS, SS, xS, wS, RS, CS, NS, LS, PS, qS, MS, DS, FS, GS, VS, US, XS, HS, BS, WS, kS, jS, zS, KS, $S, YS, QS, ZS, JS, ex, tx, rx, nx, ix, vf = ce(()=>{
        "use strict";
        nS = "|",
        iS = "data-wf-page",
        oS = "w-mod-js",
        aS = "w-mod-ix",
        sS = ".w-dyn-item",
        uS = "xValue",
        cS = "yValue",
        lS = "zValue",
        fS = "value",
        dS = "xUnit",
        pS = "yUnit",
        gS = "zUnit",
        vS = "unit",
        hS = "transform",
        ES = "translateX",
        yS = "translateY",
        mS = "translateZ",
        _S = "translate3d",
        TS = "scaleX",
        IS = "scaleY",
        bS = "scaleZ",
        OS = "scale3d",
        AS = "rotateX",
        SS = "rotateY",
        xS = "rotateZ",
        wS = "skew",
        RS = "skewX",
        CS = "skewY",
        NS = "opacity",
        LS = "filter",
        PS = "font-variation-settings",
        qS = "width",
        MS = "height",
        DS = "backgroundColor",
        FS = "background",
        GS = "borderColor",
        VS = "color",
        US = "display",
        XS = "flex",
        HS = "willChange",
        BS = "AUTO",
        WS = ",",
        kS = ":",
        jS = "|",
        zS = "CHILDREN",
        KS = "IMMEDIATE_CHILDREN",
        $S = "SIBLINGS",
        YS = "PARENT",
        QS = "preserve-3d",
        ZS = "HTML_ELEMENT",
        JS = "PLAIN_OBJECT",
        ex = "ABSTRACT_NODE",
        tx = "RENDER_TRANSFORM",
        rx = "RENDER_GENERAL",
        nx = "RENDER_STYLE",
        ix = "RENDER_PLUGIN"
    }
    );
    var hf = {};
    Re(hf, {
        ActionAppliesTo: ()=>wA,
        ActionTypeConsts: ()=>qe,
        EventAppliesTo: ()=>Mo,
        EventBasedOn: ()=>Qe,
        EventContinuousMouseAxes: ()=>AA,
        EventLimitAffectedElements: ()=>SA,
        EventTypeConsts: ()=>He,
        IX2EngineActionTypes: ()=>Ee,
        IX2EngineConstants: ()=>Ie,
        InteractionTypeConsts: ()=>RA,
        QuickEffectDirectionConsts: ()=>xA,
        QuickEffectIds: ()=>Do,
        ReducedMotionTypes: ()=>Go
    });
    var Ce = ce(()=>{
        "use strict";
        ff();
        Fo();
        df();
        pf();
        gf();
        vf()
    }
    );
    var ox, Ef, yf = ce(()=>{
        "use strict";
        Ce();
        ({IX2_RAW_DATA_IMPORTED: ox} = Ee),
        Ef = (e=Object.freeze({}),t)=>{
            switch (t.type) {
            case ox:
                return t.payload.ixData || Object.freeze({});
            default:
                return e
            }
        }
    }
    );
    var Vt = u(pe=>{
        "use strict";
        Object.defineProperty(pe, "__esModule", {
            value: !0
        });
        var ax = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ;
        pe.clone = mn;
        pe.addLast = Tf;
        pe.addFirst = If;
        pe.removeLast = bf;
        pe.removeFirst = Of;
        pe.insert = Af;
        pe.removeAt = Sf;
        pe.replaceAt = xf;
        pe.getIn = _n;
        pe.set = Tn;
        pe.setIn = In;
        pe.update = Rf;
        pe.updateIn = Cf;
        pe.merge = Nf;
        pe.mergeDeep = Lf;
        pe.mergeIn = Pf;
        pe.omit = qf;
        pe.addDefaults = Mf;
        var mf = "INVALID_ARGS";
        function _f(e) {
            throw new Error(e)
        }
        function Vo(e) {
            var t = Object.keys(e);
            return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t
        }
        var sx = {}.hasOwnProperty;
        function mn(e) {
            if (Array.isArray(e))
                return e.slice();
            for (var t = Vo(e), r = {}, n = 0; n < t.length; n++) {
                var i = t[n];
                r[i] = e[i]
            }
            return r
        }
        function Ne(e, t, r) {
            var n = r;
            n == null && _f(mf);
            for (var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), s = 3; s < o; s++)
                a[s - 3] = arguments[s];
            for (var c = 0; c < a.length; c++) {
                var f = a[c];
                if (f != null) {
                    var p = Vo(f);
                    if (p.length)
                        for (var d = 0; d <= p.length; d++) {
                            var g = p[d];
                            if (!(e && n[g] !== void 0)) {
                                var y = f[g];
                                t && yn(n[g]) && yn(y) && (y = Ne(e, t, n[g], y)),
                                !(y === void 0 || y === n[g]) && (i || (i = !0,
                                n = mn(n)),
                                n[g] = y)
                            }
                        }
                }
            }
            return n
        }
        function yn(e) {
            var t = typeof e > "u" ? "undefined" : ax(e);
            return e != null && (t === "object" || t === "function")
        }
        function Tf(e, t) {
            return Array.isArray(t) ? e.concat(t) : e.concat([t])
        }
        function If(e, t) {
            return Array.isArray(t) ? t.concat(e) : [t].concat(e)
        }
        function bf(e) {
            return e.length ? e.slice(0, e.length - 1) : e
        }
        function Of(e) {
            return e.length ? e.slice(1) : e
        }
        function Af(e, t, r) {
            return e.slice(0, t).concat(Array.isArray(r) ? r : [r]).concat(e.slice(t))
        }
        function Sf(e, t) {
            return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1))
        }
        function xf(e, t, r) {
            if (e[t] === r)
                return e;
            for (var n = e.length, i = Array(n), o = 0; o < n; o++)
                i[o] = e[o];
            return i[t] = r,
            i
        }
        function _n(e, t) {
            if (!Array.isArray(t) && _f(mf),
            e != null) {
                for (var r = e, n = 0; n < t.length; n++) {
                    var i = t[n];
                    if (r = r?.[i],
                    r === void 0)
                        return r
                }
                return r
            }
        }
        function Tn(e, t, r) {
            var n = typeof t == "number" ? [] : {}
              , i = e ?? n;
            if (i[t] === r)
                return i;
            var o = mn(i);
            return o[t] = r,
            o
        }
        function wf(e, t, r, n) {
            var i = void 0
              , o = t[n];
            if (n === t.length - 1)
                i = r;
            else {
                var a = yn(e) && yn(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
                i = wf(a, t, r, n + 1)
            }
            return Tn(e, o, i)
        }
        function In(e, t, r) {
            return t.length ? wf(e, t, r, 0) : r
        }
        function Rf(e, t, r) {
            var n = e?.[t]
              , i = r(n);
            return Tn(e, t, i)
        }
        function Cf(e, t, r) {
            var n = _n(e, t)
              , i = r(n);
            return In(e, t, i)
        }
        function Nf(e, t, r, n, i, o) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++)
                s[c - 6] = arguments[c];
            return s.length ? Ne.call.apply(Ne, [null, !1, !1, e, t, r, n, i, o].concat(s)) : Ne(!1, !1, e, t, r, n, i, o)
        }
        function Lf(e, t, r, n, i, o) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++)
                s[c - 6] = arguments[c];
            return s.length ? Ne.call.apply(Ne, [null, !1, !0, e, t, r, n, i, o].concat(s)) : Ne(!1, !0, e, t, r, n, i, o)
        }
        function Pf(e, t, r, n, i, o, a) {
            var s = _n(e, t);
            s == null && (s = {});
            for (var c = void 0, f = arguments.length, p = Array(f > 7 ? f - 7 : 0), d = 7; d < f; d++)
                p[d - 7] = arguments[d];
            return p.length ? c = Ne.call.apply(Ne, [null, !1, !1, s, r, n, i, o, a].concat(p)) : c = Ne(!1, !1, s, r, n, i, o, a),
            In(e, t, c)
        }
        function qf(e, t) {
            for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
                if (sx.call(e, r[i])) {
                    n = !0;
                    break
                }
            if (!n)
                return e;
            for (var o = {}, a = Vo(e), s = 0; s < a.length; s++) {
                var c = a[s];
                r.indexOf(c) >= 0 || (o[c] = e[c])
            }
            return o
        }
        function Mf(e, t, r, n, i, o) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++)
                s[c - 6] = arguments[c];
            return s.length ? Ne.call.apply(Ne, [null, !0, !1, e, t, r, n, i, o].concat(s)) : Ne(!0, !1, e, t, r, n, i, o)
        }
        var ux = {
            clone: mn,
            addLast: Tf,
            addFirst: If,
            removeLast: bf,
            removeFirst: Of,
            insert: Af,
            removeAt: Sf,
            replaceAt: xf,
            getIn: _n,
            set: Tn,
            setIn: In,
            update: Rf,
            updateIn: Cf,
            merge: Nf,
            mergeDeep: Lf,
            mergeIn: Pf,
            omit: qf,
            addDefaults: Mf
        };
        pe.default = ux
    }
    );
    var Ff, cx, lx, fx, dx, px, Df, Gf, Vf = ce(()=>{
        "use strict";
        Ce();
        Ff = ie(Vt()),
        {IX2_PREVIEW_REQUESTED: cx, IX2_PLAYBACK_REQUESTED: lx, IX2_STOP_REQUESTED: fx, IX2_CLEAR_REQUESTED: dx} = Ee,
        px = {
            preview: {},
            playback: {},
            stop: {},
            clear: {}
        },
        Df = Object.create(null, {
            [cx]: {
                value: "preview"
            },
            [lx]: {
                value: "playback"
            },
            [fx]: {
                value: "stop"
            },
            [dx]: {
                value: "clear"
            }
        }),
        Gf = (e=px,t)=>{
            if (t.type in Df) {
                let r = [Df[t.type]];
                return (0,
                Ff.setIn)(e, [r], {
                    ...t.payload
                })
            }
            return e
        }
    }
    );
    var Ae, gx, vx, hx, Ex, yx, mx, _x, Tx, Ix, bx, Uf, Ox, Xf, Hf = ce(()=>{
        "use strict";
        Ce();
        Ae = ie(Vt()),
        {IX2_SESSION_INITIALIZED: gx, IX2_SESSION_STARTED: vx, IX2_TEST_FRAME_RENDERED: hx, IX2_SESSION_STOPPED: Ex, IX2_EVENT_LISTENER_ADDED: yx, IX2_EVENT_STATE_CHANGED: mx, IX2_ANIMATION_FRAME_CHANGED: _x, IX2_ACTION_LIST_PLAYBACK_CHANGED: Tx, IX2_VIEWPORT_WIDTH_CHANGED: Ix, IX2_MEDIA_QUERIES_DEFINED: bx} = Ee,
        Uf = {
            active: !1,
            tick: 0,
            eventListeners: [],
            eventState: {},
            playbackState: {},
            viewportWidth: 0,
            mediaQueryKey: null,
            hasBoundaryNodes: !1,
            hasDefinedMediaQueries: !1,
            reducedMotion: !1
        },
        Ox = 20,
        Xf = (e=Uf,t)=>{
            switch (t.type) {
            case gx:
                {
                    let {hasBoundaryNodes: r, reducedMotion: n} = t.payload;
                    return (0,
                    Ae.merge)(e, {
                        hasBoundaryNodes: r,
                        reducedMotion: n
                    })
                }
            case vx:
                return (0,
                Ae.set)(e, "active", !0);
            case hx:
                {
                    let {payload: {step: r=Ox}} = t;
                    return (0,
                    Ae.set)(e, "tick", e.tick + r)
                }
            case Ex:
                return Uf;
            case _x:
                {
                    let {payload: {now: r}} = t;
                    return (0,
                    Ae.set)(e, "tick", r)
                }
            case yx:
                {
                    let r = (0,
                    Ae.addLast)(e.eventListeners, t.payload);
                    return (0,
                    Ae.set)(e, "eventListeners", r)
                }
            case mx:
                {
                    let {stateKey: r, newState: n} = t.payload;
                    return (0,
                    Ae.setIn)(e, ["eventState", r], n)
                }
            case Tx:
                {
                    let {actionListId: r, isPlaying: n} = t.payload;
                    return (0,
                    Ae.setIn)(e, ["playbackState", r], n)
                }
            case Ix:
                {
                    let {width: r, mediaQueries: n} = t.payload
                      , i = n.length
                      , o = null;
                    for (let a = 0; a < i; a++) {
                        let {key: s, min: c, max: f} = n[a];
                        if (r >= c && r <= f) {
                            o = s;
                            break
                        }
                    }
                    return (0,
                    Ae.merge)(e, {
                        viewportWidth: r,
                        mediaQueryKey: o
                    })
                }
            case bx:
                return (0,
                Ae.set)(e, "hasDefinedMediaQueries", !0);
            default:
                return e
            }
        }
    }
    );
    var Wf = u((SH,Bf)=>{
        function Ax() {
            this.__data__ = [],
            this.size = 0
        }
        Bf.exports = Ax
    }
    );
    var bn = u((xH,kf)=>{
        function Sx(e, t) {
            return e === t || e !== e && t !== t
        }
        kf.exports = Sx
    }
    );
    var Or = u((wH,jf)=>{
        var xx = bn();
        function wx(e, t) {
            for (var r = e.length; r--; )
                if (xx(e[r][0], t))
                    return r;
            return -1
        }
        jf.exports = wx
    }
    );
    var Kf = u((RH,zf)=>{
        var Rx = Or()
          , Cx = Array.prototype
          , Nx = Cx.splice;
        function Lx(e) {
            var t = this.__data__
              , r = Rx(t, e);
            if (r < 0)
                return !1;
            var n = t.length - 1;
            return r == n ? t.pop() : Nx.call(t, r, 1),
            --this.size,
            !0
        }
        zf.exports = Lx
    }
    );
    var Yf = u((CH,$f)=>{
        var Px = Or();
        function qx(e) {
            var t = this.__data__
              , r = Px(t, e);
            return r < 0 ? void 0 : t[r][1]
        }
        $f.exports = qx
    }
    );
    var Zf = u((NH,Qf)=>{
        var Mx = Or();
        function Dx(e) {
            return Mx(this.__data__, e) > -1
        }
        Qf.exports = Dx
    }
    );
    var ed = u((LH,Jf)=>{
        var Fx = Or();
        function Gx(e, t) {
            var r = this.__data__
              , n = Fx(r, e);
            return n < 0 ? (++this.size,
            r.push([e, t])) : r[n][1] = t,
            this
        }
        Jf.exports = Gx
    }
    );
    var Ar = u((PH,td)=>{
        var Vx = Wf()
          , Ux = Kf()
          , Xx = Yf()
          , Hx = Zf()
          , Bx = ed();
        function Ut(e) {
            var t = -1
              , r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r; ) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        Ut.prototype.clear = Vx;
        Ut.prototype.delete = Ux;
        Ut.prototype.get = Xx;
        Ut.prototype.has = Hx;
        Ut.prototype.set = Bx;
        td.exports = Ut
    }
    );
    var nd = u((qH,rd)=>{
        var Wx = Ar();
        function kx() {
            this.__data__ = new Wx,
            this.size = 0
        }
        rd.exports = kx
    }
    );
    var od = u((MH,id)=>{
        function jx(e) {
            var t = this.__data__
              , r = t.delete(e);
            return this.size = t.size,
            r
        }
        id.exports = jx
    }
    );
    var sd = u((DH,ad)=>{
        function zx(e) {
            return this.__data__.get(e)
        }
        ad.exports = zx
    }
    );
    var cd = u((FH,ud)=>{
        function Kx(e) {
            return this.__data__.has(e)
        }
        ud.exports = Kx
    }
    );
    var Ze = u((GH,ld)=>{
        function $x(e) {
            var t = typeof e;
            return e != null && (t == "object" || t == "function")
        }
        ld.exports = $x
    }
    );
    var Uo = u((VH,fd)=>{
        var Yx = gt()
          , Qx = Ze()
          , Zx = "[object AsyncFunction]"
          , Jx = "[object Function]"
          , e0 = "[object GeneratorFunction]"
          , t0 = "[object Proxy]";
        function r0(e) {
            if (!Qx(e))
                return !1;
            var t = Yx(e);
            return t == Jx || t == e0 || t == Zx || t == t0
        }
        fd.exports = r0
    }
    );
    var pd = u((UH,dd)=>{
        var n0 = Xe()
          , i0 = n0["__core-js_shared__"];
        dd.exports = i0
    }
    );
    var hd = u((XH,vd)=>{
        var Xo = pd()
          , gd = function() {
            var e = /[^.]+$/.exec(Xo && Xo.keys && Xo.keys.IE_PROTO || "");
            return e ? "Symbol(src)_1." + e : ""
        }();
        function o0(e) {
            return !!gd && gd in e
        }
        vd.exports = o0
    }
    );
    var Ho = u((HH,Ed)=>{
        var a0 = Function.prototype
          , s0 = a0.toString;
        function u0(e) {
            if (e != null) {
                try {
                    return s0.call(e)
                } catch {}
                try {
                    return e + ""
                } catch {}
            }
            return ""
        }
        Ed.exports = u0
    }
    );
    var md = u((BH,yd)=>{
        var c0 = Uo()
          , l0 = hd()
          , f0 = Ze()
          , d0 = Ho()
          , p0 = /[\\^$.*+?()[\]{}|]/g
          , g0 = /^\[object .+?Constructor\]$/
          , v0 = Function.prototype
          , h0 = Object.prototype
          , E0 = v0.toString
          , y0 = h0.hasOwnProperty
          , m0 = RegExp("^" + E0.call(y0).replace(p0, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        function _0(e) {
            if (!f0(e) || l0(e))
                return !1;
            var t = c0(e) ? m0 : g0;
            return t.test(d0(e))
        }
        yd.exports = _0
    }
    );
    var Td = u((WH,_d)=>{
        function T0(e, t) {
            return e?.[t]
        }
        _d.exports = T0
    }
    );
    var vt = u((kH,Id)=>{
        var I0 = md()
          , b0 = Td();
        function O0(e, t) {
            var r = b0(e, t);
            return I0(r) ? r : void 0
        }
        Id.exports = O0
    }
    );
    var On = u((jH,bd)=>{
        var A0 = vt()
          , S0 = Xe()
          , x0 = A0(S0, "Map");
        bd.exports = x0
    }
    );
    var Sr = u((zH,Od)=>{
        var w0 = vt()
          , R0 = w0(Object, "create");
        Od.exports = R0
    }
    );
    var xd = u((KH,Sd)=>{
        var Ad = Sr();
        function C0() {
            this.__data__ = Ad ? Ad(null) : {},
            this.size = 0
        }
        Sd.exports = C0
    }
    );
    var Rd = u(($H,wd)=>{
        function N0(e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0,
            t
        }
        wd.exports = N0
    }
    );
    var Nd = u((YH,Cd)=>{
        var L0 = Sr()
          , P0 = "__lodash_hash_undefined__"
          , q0 = Object.prototype
          , M0 = q0.hasOwnProperty;
        function D0(e) {
            var t = this.__data__;
            if (L0) {
                var r = t[e];
                return r === P0 ? void 0 : r
            }
            return M0.call(t, e) ? t[e] : void 0
        }
        Cd.exports = D0
    }
    );
    var Pd = u((QH,Ld)=>{
        var F0 = Sr()
          , G0 = Object.prototype
          , V0 = G0.hasOwnProperty;
        function U0(e) {
            var t = this.__data__;
            return F0 ? t[e] !== void 0 : V0.call(t, e)
        }
        Ld.exports = U0
    }
    );
    var Md = u((ZH,qd)=>{
        var X0 = Sr()
          , H0 = "__lodash_hash_undefined__";
        function B0(e, t) {
            var r = this.__data__;
            return this.size += this.has(e) ? 0 : 1,
            r[e] = X0 && t === void 0 ? H0 : t,
            this
        }
        qd.exports = B0
    }
    );
    var Fd = u((JH,Dd)=>{
        var W0 = xd()
          , k0 = Rd()
          , j0 = Nd()
          , z0 = Pd()
          , K0 = Md();
        function Xt(e) {
            var t = -1
              , r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r; ) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        Xt.prototype.clear = W0;
        Xt.prototype.delete = k0;
        Xt.prototype.get = j0;
        Xt.prototype.has = z0;
        Xt.prototype.set = K0;
        Dd.exports = Xt
    }
    );
    var Ud = u((eB,Vd)=>{
        var Gd = Fd()
          , $0 = Ar()
          , Y0 = On();
        function Q0() {
            this.size = 0,
            this.__data__ = {
                hash: new Gd,
                map: new (Y0 || $0),
                string: new Gd
            }
        }
        Vd.exports = Q0
    }
    );
    var Hd = u((tB,Xd)=>{
        function Z0(e) {
            var t = typeof e;
            return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
        }
        Xd.exports = Z0
    }
    );
    var xr = u((rB,Bd)=>{
        var J0 = Hd();
        function ew(e, t) {
            var r = e.__data__;
            return J0(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
        }
        Bd.exports = ew
    }
    );
    var kd = u((nB,Wd)=>{
        var tw = xr();
        function rw(e) {
            var t = tw(this, e).delete(e);
            return this.size -= t ? 1 : 0,
            t
        }
        Wd.exports = rw
    }
    );
    var zd = u((iB,jd)=>{
        var nw = xr();
        function iw(e) {
            return nw(this, e).get(e)
        }
        jd.exports = iw
    }
    );
    var $d = u((oB,Kd)=>{
        var ow = xr();
        function aw(e) {
            return ow(this, e).has(e)
        }
        Kd.exports = aw
    }
    );
    var Qd = u((aB,Yd)=>{
        var sw = xr();
        function uw(e, t) {
            var r = sw(this, e)
              , n = r.size;
            return r.set(e, t),
            this.size += r.size == n ? 0 : 1,
            this
        }
        Yd.exports = uw
    }
    );
    var An = u((sB,Zd)=>{
        var cw = Ud()
          , lw = kd()
          , fw = zd()
          , dw = $d()
          , pw = Qd();
        function Ht(e) {
            var t = -1
              , r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r; ) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        Ht.prototype.clear = cw;
        Ht.prototype.delete = lw;
        Ht.prototype.get = fw;
        Ht.prototype.has = dw;
        Ht.prototype.set = pw;
        Zd.exports = Ht
    }
    );
    var ep = u((uB,Jd)=>{
        var gw = Ar()
          , vw = On()
          , hw = An()
          , Ew = 200;
        function yw(e, t) {
            var r = this.__data__;
            if (r instanceof gw) {
                var n = r.__data__;
                if (!vw || n.length < Ew - 1)
                    return n.push([e, t]),
                    this.size = ++r.size,
                    this;
                r = this.__data__ = new hw(n)
            }
            return r.set(e, t),
            this.size = r.size,
            this
        }
        Jd.exports = yw
    }
    );
    var Bo = u((cB,tp)=>{
        var mw = Ar()
          , _w = nd()
          , Tw = od()
          , Iw = sd()
          , bw = cd()
          , Ow = ep();
        function Bt(e) {
            var t = this.__data__ = new mw(e);
            this.size = t.size
        }
        Bt.prototype.clear = _w;
        Bt.prototype.delete = Tw;
        Bt.prototype.get = Iw;
        Bt.prototype.has = bw;
        Bt.prototype.set = Ow;
        tp.exports = Bt
    }
    );
    var np = u((lB,rp)=>{
        var Aw = "__lodash_hash_undefined__";
        function Sw(e) {
            return this.__data__.set(e, Aw),
            this
        }
        rp.exports = Sw
    }
    );
    var op = u((fB,ip)=>{
        function xw(e) {
            return this.__data__.has(e)
        }
        ip.exports = xw
    }
    );
    var sp = u((dB,ap)=>{
        var ww = An()
          , Rw = np()
          , Cw = op();
        function Sn(e) {
            var t = -1
              , r = e == null ? 0 : e.length;
            for (this.__data__ = new ww; ++t < r; )
                this.add(e[t])
        }
        Sn.prototype.add = Sn.prototype.push = Rw;
        Sn.prototype.has = Cw;
        ap.exports = Sn
    }
    );
    var cp = u((pB,up)=>{
        function Nw(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
                if (t(e[r], r, e))
                    return !0;
            return !1
        }
        up.exports = Nw
    }
    );
    var fp = u((gB,lp)=>{
        function Lw(e, t) {
            return e.has(t)
        }
        lp.exports = Lw
    }
    );
    var Wo = u((vB,dp)=>{
        var Pw = sp()
          , qw = cp()
          , Mw = fp()
          , Dw = 1
          , Fw = 2;
        function Gw(e, t, r, n, i, o) {
            var a = r & Dw
              , s = e.length
              , c = t.length;
            if (s != c && !(a && c > s))
                return !1;
            var f = o.get(e)
              , p = o.get(t);
            if (f && p)
                return f == t && p == e;
            var d = -1
              , g = !0
              , y = r & Fw ? new Pw : void 0;
            for (o.set(e, t),
            o.set(t, e); ++d < s; ) {
                var _ = e[d]
                  , m = t[d];
                if (n)
                    var R = a ? n(m, _, d, t, e, o) : n(_, m, d, e, t, o);
                if (R !== void 0) {
                    if (R)
                        continue;
                    g = !1;
                    break
                }
                if (y) {
                    if (!qw(t, function(A, S) {
                        if (!Mw(y, S) && (_ === A || i(_, A, r, n, o)))
                            return y.push(S)
                    })) {
                        g = !1;
                        break
                    }
                } else if (!(_ === m || i(_, m, r, n, o))) {
                    g = !1;
                    break
                }
            }
            return o.delete(e),
            o.delete(t),
            g
        }
        dp.exports = Gw
    }
    );
    var gp = u((hB,pp)=>{
        var Vw = Xe()
          , Uw = Vw.Uint8Array;
        pp.exports = Uw
    }
    );
    var hp = u((EB,vp)=>{
        function Xw(e) {
            var t = -1
              , r = Array(e.size);
            return e.forEach(function(n, i) {
                r[++t] = [i, n]
            }),
            r
        }
        vp.exports = Xw
    }
    );
    var yp = u((yB,Ep)=>{
        function Hw(e) {
            var t = -1
              , r = Array(e.size);
            return e.forEach(function(n) {
                r[++t] = n
            }),
            r
        }
        Ep.exports = Hw
    }
    );
    var bp = u((mB,Ip)=>{
        var mp = Dt()
          , _p = gp()
          , Bw = bn()
          , Ww = Wo()
          , kw = hp()
          , jw = yp()
          , zw = 1
          , Kw = 2
          , $w = "[object Boolean]"
          , Yw = "[object Date]"
          , Qw = "[object Error]"
          , Zw = "[object Map]"
          , Jw = "[object Number]"
          , eR = "[object RegExp]"
          , tR = "[object Set]"
          , rR = "[object String]"
          , nR = "[object Symbol]"
          , iR = "[object ArrayBuffer]"
          , oR = "[object DataView]"
          , Tp = mp ? mp.prototype : void 0
          , ko = Tp ? Tp.valueOf : void 0;
        function aR(e, t, r, n, i, o, a) {
            switch (r) {
            case oR:
                if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
                    return !1;
                e = e.buffer,
                t = t.buffer;
            case iR:
                return !(e.byteLength != t.byteLength || !o(new _p(e), new _p(t)));
            case $w:
            case Yw:
            case Jw:
                return Bw(+e, +t);
            case Qw:
                return e.name == t.name && e.message == t.message;
            case eR:
            case rR:
                return e == t + "";
            case Zw:
                var s = kw;
            case tR:
                var c = n & zw;
                if (s || (s = jw),
                e.size != t.size && !c)
                    return !1;
                var f = a.get(e);
                if (f)
                    return f == t;
                n |= Kw,
                a.set(e, t);
                var p = Ww(s(e), s(t), n, i, o, a);
                return a.delete(e),
                p;
            case nR:
                if (ko)
                    return ko.call(e) == ko.call(t)
            }
            return !1
        }
        Ip.exports = aR
    }
    );
    var xn = u((_B,Op)=>{
        function sR(e, t) {
            for (var r = -1, n = t.length, i = e.length; ++r < n; )
                e[i + r] = t[r];
            return e
        }
        Op.exports = sR
    }
    );
    var me = u((TB,Ap)=>{
        var uR = Array.isArray;
        Ap.exports = uR
    }
    );
    var jo = u((IB,Sp)=>{
        var cR = xn()
          , lR = me();
        function fR(e, t, r) {
            var n = t(e);
            return lR(e) ? n : cR(n, r(e))
        }
        Sp.exports = fR
    }
    );
    var wp = u((bB,xp)=>{
        function dR(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n; ) {
                var a = e[r];
                t(a, r, e) && (o[i++] = a)
            }
            return o
        }
        xp.exports = dR
    }
    );
    var zo = u((OB,Rp)=>{
        function pR() {
            return []
        }
        Rp.exports = pR
    }
    );
    var Ko = u((AB,Np)=>{
        var gR = wp()
          , vR = zo()
          , hR = Object.prototype
          , ER = hR.propertyIsEnumerable
          , Cp = Object.getOwnPropertySymbols
          , yR = Cp ? function(e) {
            return e == null ? [] : (e = Object(e),
            gR(Cp(e), function(t) {
                return ER.call(e, t)
            }))
        }
        : vR;
        Np.exports = yR
    }
    );
    var Pp = u((SB,Lp)=>{
        function mR(e, t) {
            for (var r = -1, n = Array(e); ++r < e; )
                n[r] = t(r);
            return n
        }
        Lp.exports = mR
    }
    );
    var Mp = u((xB,qp)=>{
        var _R = gt()
          , TR = it()
          , IR = "[object Arguments]";
        function bR(e) {
            return TR(e) && _R(e) == IR
        }
        qp.exports = bR
    }
    );
    var wr = u((wB,Gp)=>{
        var Dp = Mp()
          , OR = it()
          , Fp = Object.prototype
          , AR = Fp.hasOwnProperty
          , SR = Fp.propertyIsEnumerable
          , xR = Dp(function() {
            return arguments
        }()) ? Dp : function(e) {
            return OR(e) && AR.call(e, "callee") && !SR.call(e, "callee")
        }
        ;
        Gp.exports = xR
    }
    );
    var Up = u((RB,Vp)=>{
        function wR() {
            return !1
        }
        Vp.exports = wR
    }
    );
    var wn = u((Rr,Wt)=>{
        var RR = Xe()
          , CR = Up()
          , Bp = typeof Rr == "object" && Rr && !Rr.nodeType && Rr
          , Xp = Bp && typeof Wt == "object" && Wt && !Wt.nodeType && Wt
          , NR = Xp && Xp.exports === Bp
          , Hp = NR ? RR.Buffer : void 0
          , LR = Hp ? Hp.isBuffer : void 0
          , PR = LR || CR;
        Wt.exports = PR
    }
    );
    var Rn = u((CB,Wp)=>{
        var qR = 9007199254740991
          , MR = /^(?:0|[1-9]\d*)$/;
        function DR(e, t) {
            var r = typeof e;
            return t = t ?? qR,
            !!t && (r == "number" || r != "symbol" && MR.test(e)) && e > -1 && e % 1 == 0 && e < t
        }
        Wp.exports = DR
    }
    );
    var Cn = u((NB,kp)=>{
        var FR = 9007199254740991;
        function GR(e) {
            return typeof e == "number" && e > -1 && e % 1 == 0 && e <= FR
        }
        kp.exports = GR
    }
    );
    var zp = u((LB,jp)=>{
        var VR = gt()
          , UR = Cn()
          , XR = it()
          , HR = "[object Arguments]"
          , BR = "[object Array]"
          , WR = "[object Boolean]"
          , kR = "[object Date]"
          , jR = "[object Error]"
          , zR = "[object Function]"
          , KR = "[object Map]"
          , $R = "[object Number]"
          , YR = "[object Object]"
          , QR = "[object RegExp]"
          , ZR = "[object Set]"
          , JR = "[object String]"
          , eC = "[object WeakMap]"
          , tC = "[object ArrayBuffer]"
          , rC = "[object DataView]"
          , nC = "[object Float32Array]"
          , iC = "[object Float64Array]"
          , oC = "[object Int8Array]"
          , aC = "[object Int16Array]"
          , sC = "[object Int32Array]"
          , uC = "[object Uint8Array]"
          , cC = "[object Uint8ClampedArray]"
          , lC = "[object Uint16Array]"
          , fC = "[object Uint32Array]"
          , ue = {};
        ue[nC] = ue[iC] = ue[oC] = ue[aC] = ue[sC] = ue[uC] = ue[cC] = ue[lC] = ue[fC] = !0;
        ue[HR] = ue[BR] = ue[tC] = ue[WR] = ue[rC] = ue[kR] = ue[jR] = ue[zR] = ue[KR] = ue[$R] = ue[YR] = ue[QR] = ue[ZR] = ue[JR] = ue[eC] = !1;
        function dC(e) {
            return XR(e) && UR(e.length) && !!ue[VR(e)]
        }
        jp.exports = dC
    }
    );
    var $p = u((PB,Kp)=>{
        function pC(e) {
            return function(t) {
                return e(t)
            }
        }
        Kp.exports = pC
    }
    );
    var Qp = u((Cr,kt)=>{
        var gC = mo()
          , Yp = typeof Cr == "object" && Cr && !Cr.nodeType && Cr
          , Nr = Yp && typeof kt == "object" && kt && !kt.nodeType && kt
          , vC = Nr && Nr.exports === Yp
          , $o = vC && gC.process
          , hC = function() {
            try {
                var e = Nr && Nr.require && Nr.require("util").types;
                return e || $o && $o.binding && $o.binding("util")
            } catch {}
        }();
        kt.exports = hC
    }
    );
    var Nn = u((qB,eg)=>{
        var EC = zp()
          , yC = $p()
          , Zp = Qp()
          , Jp = Zp && Zp.isTypedArray
          , mC = Jp ? yC(Jp) : EC;
        eg.exports = mC
    }
    );
    var Yo = u((MB,tg)=>{
        var _C = Pp()
          , TC = wr()
          , IC = me()
          , bC = wn()
          , OC = Rn()
          , AC = Nn()
          , SC = Object.prototype
          , xC = SC.hasOwnProperty;
        function wC(e, t) {
            var r = IC(e)
              , n = !r && TC(e)
              , i = !r && !n && bC(e)
              , o = !r && !n && !i && AC(e)
              , a = r || n || i || o
              , s = a ? _C(e.length, String) : []
              , c = s.length;
            for (var f in e)
                (t || xC.call(e, f)) && !(a && (f == "length" || i && (f == "offset" || f == "parent") || o && (f == "buffer" || f == "byteLength" || f == "byteOffset") || OC(f, c))) && s.push(f);
            return s
        }
        tg.exports = wC
    }
    );
    var Ln = u((DB,rg)=>{
        var RC = Object.prototype;
        function CC(e) {
            var t = e && e.constructor
              , r = typeof t == "function" && t.prototype || RC;
            return e === r
        }
        rg.exports = CC
    }
    );
    var ig = u((FB,ng)=>{
        var NC = _o()
          , LC = NC(Object.keys, Object);
        ng.exports = LC
    }
    );
    var Pn = u((GB,og)=>{
        var PC = Ln()
          , qC = ig()
          , MC = Object.prototype
          , DC = MC.hasOwnProperty;
        function FC(e) {
            if (!PC(e))
                return qC(e);
            var t = [];
            for (var r in Object(e))
                DC.call(e, r) && r != "constructor" && t.push(r);
            return t
        }
        og.exports = FC
    }
    );
    var bt = u((VB,ag)=>{
        var GC = Uo()
          , VC = Cn();
        function UC(e) {
            return e != null && VC(e.length) && !GC(e)
        }
        ag.exports = UC
    }
    );
    var Lr = u((UB,sg)=>{
        var XC = Yo()
          , HC = Pn()
          , BC = bt();
        function WC(e) {
            return BC(e) ? XC(e) : HC(e)
        }
        sg.exports = WC
    }
    );
    var cg = u((XB,ug)=>{
        var kC = jo()
          , jC = Ko()
          , zC = Lr();
        function KC(e) {
            return kC(e, zC, jC)
        }
        ug.exports = KC
    }
    );
    var dg = u((HB,fg)=>{
        var lg = cg()
          , $C = 1
          , YC = Object.prototype
          , QC = YC.hasOwnProperty;
        function ZC(e, t, r, n, i, o) {
            var a = r & $C
              , s = lg(e)
              , c = s.length
              , f = lg(t)
              , p = f.length;
            if (c != p && !a)
                return !1;
            for (var d = c; d--; ) {
                var g = s[d];
                if (!(a ? g in t : QC.call(t, g)))
                    return !1
            }
            var y = o.get(e)
              , _ = o.get(t);
            if (y && _)
                return y == t && _ == e;
            var m = !0;
            o.set(e, t),
            o.set(t, e);
            for (var R = a; ++d < c; ) {
                g = s[d];
                var A = e[g]
                  , S = t[g];
                if (n)
                    var O = a ? n(S, A, g, t, e, o) : n(A, S, g, e, t, o);
                if (!(O === void 0 ? A === S || i(A, S, r, n, o) : O)) {
                    m = !1;
                    break
                }
                R || (R = g == "constructor")
            }
            if (m && !R) {
                var L = e.constructor
                  , P = t.constructor;
                L != P && "constructor"in e && "constructor"in t && !(typeof L == "function" && L instanceof L && typeof P == "function" && P instanceof P) && (m = !1)
            }
            return o.delete(e),
            o.delete(t),
            m
        }
        fg.exports = ZC
    }
    );
    var gg = u((BB,pg)=>{
        var JC = vt()
          , eN = Xe()
          , tN = JC(eN, "DataView");
        pg.exports = tN
    }
    );
    var hg = u((WB,vg)=>{
        var rN = vt()
          , nN = Xe()
          , iN = rN(nN, "Promise");
        vg.exports = iN
    }
    );
    var yg = u((kB,Eg)=>{
        var oN = vt()
          , aN = Xe()
          , sN = oN(aN, "Set");
        Eg.exports = sN
    }
    );
    var Qo = u((jB,mg)=>{
        var uN = vt()
          , cN = Xe()
          , lN = uN(cN, "WeakMap");
        mg.exports = lN
    }
    );
    var qn = u((zB,Sg)=>{
        var Zo = gg()
          , Jo = On()
          , ea = hg()
          , ta = yg()
          , ra = Qo()
          , Ag = gt()
          , jt = Ho()
          , _g = "[object Map]"
          , fN = "[object Object]"
          , Tg = "[object Promise]"
          , Ig = "[object Set]"
          , bg = "[object WeakMap]"
          , Og = "[object DataView]"
          , dN = jt(Zo)
          , pN = jt(Jo)
          , gN = jt(ea)
          , vN = jt(ta)
          , hN = jt(ra)
          , Ot = Ag;
        (Zo && Ot(new Zo(new ArrayBuffer(1))) != Og || Jo && Ot(new Jo) != _g || ea && Ot(ea.resolve()) != Tg || ta && Ot(new ta) != Ig || ra && Ot(new ra) != bg) && (Ot = function(e) {
            var t = Ag(e)
              , r = t == fN ? e.constructor : void 0
              , n = r ? jt(r) : "";
            if (n)
                switch (n) {
                case dN:
                    return Og;
                case pN:
                    return _g;
                case gN:
                    return Tg;
                case vN:
                    return Ig;
                case hN:
                    return bg
                }
            return t
        }
        );
        Sg.exports = Ot
    }
    );
    var qg = u((KB,Pg)=>{
        var na = Bo()
          , EN = Wo()
          , yN = bp()
          , mN = dg()
          , xg = qn()
          , wg = me()
          , Rg = wn()
          , _N = Nn()
          , TN = 1
          , Cg = "[object Arguments]"
          , Ng = "[object Array]"
          , Mn = "[object Object]"
          , IN = Object.prototype
          , Lg = IN.hasOwnProperty;
        function bN(e, t, r, n, i, o) {
            var a = wg(e)
              , s = wg(t)
              , c = a ? Ng : xg(e)
              , f = s ? Ng : xg(t);
            c = c == Cg ? Mn : c,
            f = f == Cg ? Mn : f;
            var p = c == Mn
              , d = f == Mn
              , g = c == f;
            if (g && Rg(e)) {
                if (!Rg(t))
                    return !1;
                a = !0,
                p = !1
            }
            if (g && !p)
                return o || (o = new na),
                a || _N(e) ? EN(e, t, r, n, i, o) : yN(e, t, c, r, n, i, o);
            if (!(r & TN)) {
                var y = p && Lg.call(e, "__wrapped__")
                  , _ = d && Lg.call(t, "__wrapped__");
                if (y || _) {
                    var m = y ? e.value() : e
                      , R = _ ? t.value() : t;
                    return o || (o = new na),
                    i(m, R, r, n, o)
                }
            }
            return g ? (o || (o = new na),
            mN(e, t, r, n, i, o)) : !1
        }
        Pg.exports = bN
    }
    );
    var ia = u(($B,Fg)=>{
        var ON = qg()
          , Mg = it();
        function Dg(e, t, r, n, i) {
            return e === t ? !0 : e == null || t == null || !Mg(e) && !Mg(t) ? e !== e && t !== t : ON(e, t, r, n, Dg, i)
        }
        Fg.exports = Dg
    }
    );
    var Vg = u((YB,Gg)=>{
        var AN = Bo()
          , SN = ia()
          , xN = 1
          , wN = 2;
        function RN(e, t, r, n) {
            var i = r.length
              , o = i
              , a = !n;
            if (e == null)
                return !o;
            for (e = Object(e); i--; ) {
                var s = r[i];
                if (a && s[2] ? s[1] !== e[s[0]] : !(s[0]in e))
                    return !1
            }
            for (; ++i < o; ) {
                s = r[i];
                var c = s[0]
                  , f = e[c]
                  , p = s[1];
                if (a && s[2]) {
                    if (f === void 0 && !(c in e))
                        return !1
                } else {
                    var d = new AN;
                    if (n)
                        var g = n(f, p, c, e, t, d);
                    if (!(g === void 0 ? SN(p, f, xN | wN, n, d) : g))
                        return !1
                }
            }
            return !0
        }
        Gg.exports = RN
    }
    );
    var oa = u((QB,Ug)=>{
        var CN = Ze();
        function NN(e) {
            return e === e && !CN(e)
        }
        Ug.exports = NN
    }
    );
    var Hg = u((ZB,Xg)=>{
        var LN = oa()
          , PN = Lr();
        function qN(e) {
            for (var t = PN(e), r = t.length; r--; ) {
                var n = t[r]
                  , i = e[n];
                t[r] = [n, i, LN(i)]
            }
            return t
        }
        Xg.exports = qN
    }
    );
    var aa = u((JB,Bg)=>{
        function MN(e, t) {
            return function(r) {
                return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r))
            }
        }
        Bg.exports = MN
    }
    );
    var kg = u((eW,Wg)=>{
        var DN = Vg()
          , FN = Hg()
          , GN = aa();
        function VN(e) {
            var t = FN(e);
            return t.length == 1 && t[0][2] ? GN(t[0][0], t[0][1]) : function(r) {
                return r === e || DN(r, e, t)
            }
        }
        Wg.exports = VN
    }
    );
    var Pr = u((tW,jg)=>{
        var UN = gt()
          , XN = it()
          , HN = "[object Symbol]";
        function BN(e) {
            return typeof e == "symbol" || XN(e) && UN(e) == HN
        }
        jg.exports = BN
    }
    );
    var Dn = u((rW,zg)=>{
        var WN = me()
          , kN = Pr()
          , jN = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/
          , zN = /^\w*$/;
        function KN(e, t) {
            if (WN(e))
                return !1;
            var r = typeof e;
            return r == "number" || r == "symbol" || r == "boolean" || e == null || kN(e) ? !0 : zN.test(e) || !jN.test(e) || t != null && e in Object(t)
        }
        zg.exports = KN
    }
    );
    var Yg = u((nW,$g)=>{
        var Kg = An()
          , $N = "Expected a function";
        function sa(e, t) {
            if (typeof e != "function" || t != null && typeof t != "function")
                throw new TypeError($N);
            var r = function() {
                var n = arguments
                  , i = t ? t.apply(this, n) : n[0]
                  , o = r.cache;
                if (o.has(i))
                    return o.get(i);
                var a = e.apply(this, n);
                return r.cache = o.set(i, a) || o,
                a
            };
            return r.cache = new (sa.Cache || Kg),
            r
        }
        sa.Cache = Kg;
        $g.exports = sa
    }
    );
    var Zg = u((iW,Qg)=>{
        var YN = Yg()
          , QN = 500;
        function ZN(e) {
            var t = YN(e, function(n) {
                return r.size === QN && r.clear(),
                n
            })
              , r = t.cache;
            return t
        }
        Qg.exports = ZN
    }
    );
    var ev = u((oW,Jg)=>{
        var JN = Zg()
          , eL = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g
          , tL = /\\(\\)?/g
          , rL = JN(function(e) {
            var t = [];
            return e.charCodeAt(0) === 46 && t.push(""),
            e.replace(eL, function(r, n, i, o) {
                t.push(i ? o.replace(tL, "$1") : n || r)
            }),
            t
        });
        Jg.exports = rL
    }
    );
    var ua = u((aW,tv)=>{
        function nL(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
                i[r] = t(e[r], r, e);
            return i
        }
        tv.exports = nL
    }
    );
    var sv = u((sW,av)=>{
        var rv = Dt()
          , iL = ua()
          , oL = me()
          , aL = Pr()
          , sL = 1 / 0
          , nv = rv ? rv.prototype : void 0
          , iv = nv ? nv.toString : void 0;
        function ov(e) {
            if (typeof e == "string")
                return e;
            if (oL(e))
                return iL(e, ov) + "";
            if (aL(e))
                return iv ? iv.call(e) : "";
            var t = e + "";
            return t == "0" && 1 / e == -sL ? "-0" : t
        }
        av.exports = ov
    }
    );
    var cv = u((uW,uv)=>{
        var uL = sv();
        function cL(e) {
            return e == null ? "" : uL(e)
        }
        uv.exports = cL
    }
    );
    var qr = u((cW,lv)=>{
        var lL = me()
          , fL = Dn()
          , dL = ev()
          , pL = cv();
        function gL(e, t) {
            return lL(e) ? e : fL(e, t) ? [e] : dL(pL(e))
        }
        lv.exports = gL
    }
    );
    var zt = u((lW,fv)=>{
        var vL = Pr()
          , hL = 1 / 0;
        function EL(e) {
            if (typeof e == "string" || vL(e))
                return e;
            var t = e + "";
            return t == "0" && 1 / e == -hL ? "-0" : t
        }
        fv.exports = EL
    }
    );
    var Fn = u((fW,dv)=>{
        var yL = qr()
          , mL = zt();
        function _L(e, t) {
            t = yL(t, e);
            for (var r = 0, n = t.length; e != null && r < n; )
                e = e[mL(t[r++])];
            return r && r == n ? e : void 0
        }
        dv.exports = _L
    }
    );
    var Gn = u((dW,pv)=>{
        var TL = Fn();
        function IL(e, t, r) {
            var n = e == null ? void 0 : TL(e, t);
            return n === void 0 ? r : n
        }
        pv.exports = IL
    }
    );
    var vv = u((pW,gv)=>{
        function bL(e, t) {
            return e != null && t in Object(e)
        }
        gv.exports = bL
    }
    );
    var Ev = u((gW,hv)=>{
        var OL = qr()
          , AL = wr()
          , SL = me()
          , xL = Rn()
          , wL = Cn()
          , RL = zt();
        function CL(e, t, r) {
            t = OL(t, e);
            for (var n = -1, i = t.length, o = !1; ++n < i; ) {
                var a = RL(t[n]);
                if (!(o = e != null && r(e, a)))
                    break;
                e = e[a]
            }
            return o || ++n != i ? o : (i = e == null ? 0 : e.length,
            !!i && wL(i) && xL(a, i) && (SL(e) || AL(e)))
        }
        hv.exports = CL
    }
    );
    var mv = u((vW,yv)=>{
        var NL = vv()
          , LL = Ev();
        function PL(e, t) {
            return e != null && LL(e, t, NL)
        }
        yv.exports = PL
    }
    );
    var Tv = u((hW,_v)=>{
        var qL = ia()
          , ML = Gn()
          , DL = mv()
          , FL = Dn()
          , GL = oa()
          , VL = aa()
          , UL = zt()
          , XL = 1
          , HL = 2;
        function BL(e, t) {
            return FL(e) && GL(t) ? VL(UL(e), t) : function(r) {
                var n = ML(r, e);
                return n === void 0 && n === t ? DL(r, e) : qL(t, n, XL | HL)
            }
        }
        _v.exports = BL
    }
    );
    var Vn = u((EW,Iv)=>{
        function WL(e) {
            return e
        }
        Iv.exports = WL
    }
    );
    var ca = u((yW,bv)=>{
        function kL(e) {
            return function(t) {
                return t?.[e]
            }
        }
        bv.exports = kL
    }
    );
    var Av = u((mW,Ov)=>{
        var jL = Fn();
        function zL(e) {
            return function(t) {
                return jL(t, e)
            }
        }
        Ov.exports = zL
    }
    );
    var xv = u((_W,Sv)=>{
        var KL = ca()
          , $L = Av()
          , YL = Dn()
          , QL = zt();
        function ZL(e) {
            return YL(e) ? KL(QL(e)) : $L(e)
        }
        Sv.exports = ZL
    }
    );
    var ht = u((TW,wv)=>{
        var JL = kg()
          , eP = Tv()
          , tP = Vn()
          , rP = me()
          , nP = xv();
        function iP(e) {
            return typeof e == "function" ? e : e == null ? tP : typeof e == "object" ? rP(e) ? eP(e[0], e[1]) : JL(e) : nP(e)
        }
        wv.exports = iP
    }
    );
    var la = u((IW,Rv)=>{
        var oP = ht()
          , aP = bt()
          , sP = Lr();
        function uP(e) {
            return function(t, r, n) {
                var i = Object(t);
                if (!aP(t)) {
                    var o = oP(r, 3);
                    t = sP(t),
                    r = function(s) {
                        return o(i[s], s, i)
                    }
                }
                var a = e(t, r, n);
                return a > -1 ? i[o ? t[a] : a] : void 0
            }
        }
        Rv.exports = uP
    }
    );
    var fa = u((bW,Cv)=>{
        function cP(e, t, r, n) {
            for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i; )
                if (t(e[o], o, e))
                    return o;
            return -1
        }
        Cv.exports = cP
    }
    );
    var Lv = u((OW,Nv)=>{
        var lP = /\s/;
        function fP(e) {
            for (var t = e.length; t-- && lP.test(e.charAt(t)); )
                ;
            return t
        }
        Nv.exports = fP
    }
    );
    var qv = u((AW,Pv)=>{
        var dP = Lv()
          , pP = /^\s+/;
        function gP(e) {
            return e && e.slice(0, dP(e) + 1).replace(pP, "")
        }
        Pv.exports = gP
    }
    );
    var Un = u((SW,Fv)=>{
        var vP = qv()
          , Mv = Ze()
          , hP = Pr()
          , Dv = 0 / 0
          , EP = /^[-+]0x[0-9a-f]+$/i
          , yP = /^0b[01]+$/i
          , mP = /^0o[0-7]+$/i
          , _P = parseInt;
        function TP(e) {
            if (typeof e == "number")
                return e;
            if (hP(e))
                return Dv;
            if (Mv(e)) {
                var t = typeof e.valueOf == "function" ? e.valueOf() : e;
                e = Mv(t) ? t + "" : t
            }
            if (typeof e != "string")
                return e === 0 ? e : +e;
            e = vP(e);
            var r = yP.test(e);
            return r || mP.test(e) ? _P(e.slice(2), r ? 2 : 8) : EP.test(e) ? Dv : +e
        }
        Fv.exports = TP
    }
    );
    var Uv = u((xW,Vv)=>{
        var IP = Un()
          , Gv = 1 / 0
          , bP = 17976931348623157e292;
        function OP(e) {
            if (!e)
                return e === 0 ? e : 0;
            if (e = IP(e),
            e === Gv || e === -Gv) {
                var t = e < 0 ? -1 : 1;
                return t * bP
            }
            return e === e ? e : 0
        }
        Vv.exports = OP
    }
    );
    var da = u((wW,Xv)=>{
        var AP = Uv();
        function SP(e) {
            var t = AP(e)
              , r = t % 1;
            return t === t ? r ? t - r : t : 0
        }
        Xv.exports = SP
    }
    );
    var Bv = u((RW,Hv)=>{
        var xP = fa()
          , wP = ht()
          , RP = da()
          , CP = Math.max;
        function NP(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n)
                return -1;
            var i = r == null ? 0 : RP(r);
            return i < 0 && (i = CP(n + i, 0)),
            xP(e, wP(t, 3), i)
        }
        Hv.exports = NP
    }
    );
    var pa = u((CW,Wv)=>{
        var LP = la()
          , PP = Bv()
          , qP = LP(PP);
        Wv.exports = qP
    }
    );
    var zv = {};
    Re(zv, {
        ELEMENT_MATCHES: ()=>MP,
        FLEX_PREFIXED: ()=>ga,
        IS_BROWSER_ENV: ()=>Be,
        TRANSFORM_PREFIXED: ()=>Et,
        TRANSFORM_STYLE_PREFIXED: ()=>Hn,
        withBrowser: ()=>Xn
    });
    var jv, Be, Xn, MP, ga, Et, kv, Hn, Bn = ce(()=>{
        "use strict";
        jv = ie(pa()),
        Be = typeof window < "u",
        Xn = (e,t)=>Be ? e() : t,
        MP = Xn(()=>(0,
        jv.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e=>e in Element.prototype)),
        ga = Xn(()=>{
            let e = document.createElement("i")
              , t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"]
              , r = "";
            try {
                let {length: n} = t;
                for (let i = 0; i < n; i++) {
                    let o = t[i];
                    if (e.style.display = o,
                    e.style.display === o)
                        return o
                }
                return r
            } catch {
                return r
            }
        }
        , "flex"),
        Et = Xn(()=>{
            let e = document.createElement("i");
            if (e.style.transform == null) {
                let t = ["Webkit", "Moz", "ms"]
                  , r = "Transform"
                  , {length: n} = t;
                for (let i = 0; i < n; i++) {
                    let o = t[i] + r;
                    if (e.style[o] !== void 0)
                        return o
                }
            }
            return "transform"
        }
        , "transform"),
        kv = Et.split("transform")[0],
        Hn = kv ? kv + "TransformStyle" : "transformStyle"
    }
    );
    var va = u((NW,Zv)=>{
        var DP = 4
          , FP = .001
          , GP = 1e-7
          , VP = 10
          , Mr = 11
          , Wn = 1 / (Mr - 1)
          , UP = typeof Float32Array == "function";
        function Kv(e, t) {
            return 1 - 3 * t + 3 * e
        }
        function $v(e, t) {
            return 3 * t - 6 * e
        }
        function Yv(e) {
            return 3 * e
        }
        function kn(e, t, r) {
            return ((Kv(t, r) * e + $v(t, r)) * e + Yv(t)) * e
        }
        function Qv(e, t, r) {
            return 3 * Kv(t, r) * e * e + 2 * $v(t, r) * e + Yv(t)
        }
        function XP(e, t, r, n, i) {
            var o, a, s = 0;
            do
                a = t + (r - t) / 2,
                o = kn(a, n, i) - e,
                o > 0 ? r = a : t = a;
            while (Math.abs(o) > GP && ++s < VP);
            return a
        }
        function HP(e, t, r, n) {
            for (var i = 0; i < DP; ++i) {
                var o = Qv(t, r, n);
                if (o === 0)
                    return t;
                var a = kn(t, r, n) - e;
                t -= a / o
            }
            return t
        }
        Zv.exports = function(t, r, n, i) {
            if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
                throw new Error("bezier x values must be in [0, 1] range");
            var o = UP ? new Float32Array(Mr) : new Array(Mr);
            if (t !== r || n !== i)
                for (var a = 0; a < Mr; ++a)
                    o[a] = kn(a * Wn, t, n);
            function s(c) {
                for (var f = 0, p = 1, d = Mr - 1; p !== d && o[p] <= c; ++p)
                    f += Wn;
                --p;
                var g = (c - o[p]) / (o[p + 1] - o[p])
                  , y = f + g * Wn
                  , _ = Qv(y, t, n);
                return _ >= FP ? HP(c, y, t, n) : _ === 0 ? y : XP(c, f, f + Wn, t, n)
            }
            return function(f) {
                return t === r && n === i ? f : f === 0 ? 0 : f === 1 ? 1 : kn(s(f), r, i)
            }
        }
    }
    );
    var Fr = {};
    Re(Fr, {
        bounce: ()=>Oq,
        bouncePast: ()=>Aq,
        ease: ()=>BP,
        easeIn: ()=>WP,
        easeInOut: ()=>jP,
        easeOut: ()=>kP,
        inBack: ()=>vq,
        inCirc: ()=>fq,
        inCubic: ()=>YP,
        inElastic: ()=>yq,
        inExpo: ()=>uq,
        inOutBack: ()=>Eq,
        inOutCirc: ()=>pq,
        inOutCubic: ()=>ZP,
        inOutElastic: ()=>_q,
        inOutExpo: ()=>lq,
        inOutQuad: ()=>$P,
        inOutQuart: ()=>tq,
        inOutQuint: ()=>iq,
        inOutSine: ()=>sq,
        inQuad: ()=>zP,
        inQuart: ()=>JP,
        inQuint: ()=>rq,
        inSine: ()=>oq,
        outBack: ()=>hq,
        outBounce: ()=>gq,
        outCirc: ()=>dq,
        outCubic: ()=>QP,
        outElastic: ()=>mq,
        outExpo: ()=>cq,
        outQuad: ()=>KP,
        outQuart: ()=>eq,
        outQuint: ()=>nq,
        outSine: ()=>aq,
        swingFrom: ()=>Iq,
        swingFromTo: ()=>Tq,
        swingTo: ()=>bq
    });
    function zP(e) {
        return Math.pow(e, 2)
    }
    function KP(e) {
        return -(Math.pow(e - 1, 2) - 1)
    }
    function $P(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
    }
    function YP(e) {
        return Math.pow(e, 3)
    }
    function QP(e) {
        return Math.pow(e - 1, 3) + 1
    }
    function ZP(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
    }
    function JP(e) {
        return Math.pow(e, 4)
    }
    function eq(e) {
        return -(Math.pow(e - 1, 4) - 1)
    }
    function tq(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
    }
    function rq(e) {
        return Math.pow(e, 5)
    }
    function nq(e) {
        return Math.pow(e - 1, 5) + 1
    }
    function iq(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
    }
    function oq(e) {
        return -Math.cos(e * (Math.PI / 2)) + 1
    }
    function aq(e) {
        return Math.sin(e * (Math.PI / 2))
    }
    function sq(e) {
        return -.5 * (Math.cos(Math.PI * e) - 1)
    }
    function uq(e) {
        return e === 0 ? 0 : Math.pow(2, 10 * (e - 1))
    }
    function cq(e) {
        return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1
    }
    function lq(e) {
        return e === 0 ? 0 : e === 1 ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
    }
    function fq(e) {
        return -(Math.sqrt(1 - e * e) - 1)
    }
    function dq(e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2))
    }
    function pq(e) {
        return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
    }
    function gq(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }
    function vq(e) {
        let t = ot;
        return e * e * ((t + 1) * e - t)
    }
    function hq(e) {
        let t = ot;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }
    function Eq(e) {
        let t = ot;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }
    function yq(e) {
        let t = ot
          , r = 0
          , n = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3),
        n < 1 ? (n = 1,
        t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n),
        -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)))
    }
    function mq(e) {
        let t = ot
          , r = 0
          , n = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3),
        n < 1 ? (n = 1,
        t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n),
        n * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / r) + 1)
    }
    function _q(e) {
        let t = ot
          , r = 0
          , n = 1;
        return e === 0 ? 0 : (e /= 1 / 2) === 2 ? 1 : (r || (r = .3 * 1.5),
        n < 1 ? (n = 1,
        t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n),
        e < 1 ? -.5 * (n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r) * .5 + 1)
    }
    function Tq(e) {
        let t = ot;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }
    function Iq(e) {
        let t = ot;
        return e * e * ((t + 1) * e - t)
    }
    function bq(e) {
        let t = ot;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }
    function Oq(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }
    function Aq(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
    }
    var Dr, ot, BP, WP, kP, jP, ha = ce(()=>{
        "use strict";
        Dr = ie(va()),
        ot = 1.70158,
        BP = (0,
        Dr.default)(.25, .1, .25, 1),
        WP = (0,
        Dr.default)(.42, 0, 1, 1),
        kP = (0,
        Dr.default)(0, 0, .58, 1),
        jP = (0,
        Dr.default)(.42, 0, .58, 1)
    }
    );
    var eh = {};
    Re(eh, {
        applyEasing: ()=>xq,
        createBezierEasing: ()=>Sq,
        optimizeFloat: ()=>Gr
    });
    function Gr(e, t=5, r=10) {
        let n = Math.pow(r, t)
          , i = Number(Math.round(e * n) / n);
        return Math.abs(i) > 1e-4 ? i : 0
    }
    function Sq(e) {
        return (0,
        Jv.default)(...e)
    }
    function xq(e, t, r) {
        return t === 0 ? 0 : t === 1 ? 1 : Gr(r ? t > 0 ? r(t) : t : t > 0 && e && Fr[e] ? Fr[e](t) : t)
    }
    var Jv, Ea = ce(()=>{
        "use strict";
        ha();
        Jv = ie(va())
    }
    );
    var nh = {};
    Re(nh, {
        createElementState: ()=>rh,
        ixElements: ()=>Xq,
        mergeActionState: ()=>ya
    });
    function rh(e, t, r, n, i) {
        let o = r === wq ? (0,
        Kt.getIn)(i, ["config", "target", "objectId"]) : null;
        return (0,
        Kt.mergeIn)(e, [n], {
            id: n,
            ref: t,
            refId: o,
            refType: r
        })
    }
    function ya(e, t, r, n, i) {
        let o = Bq(i);
        return (0,
        Kt.mergeIn)(e, [t, Uq, r], n, o)
    }
    function Bq(e) {
        let {config: t} = e;
        return Hq.reduce((r,n)=>{
            let i = n[0]
              , o = n[1]
              , a = t[i]
              , s = t[o];
            return a != null && s != null && (r[o] = s),
            r
        }
        , {})
    }
    var Kt, PW, wq, qW, Rq, Cq, Nq, Lq, Pq, qq, Mq, Dq, Fq, Gq, Vq, th, Uq, Xq, Hq, ih = ce(()=>{
        "use strict";
        Kt = ie(Vt());
        Ce();
        ({HTML_ELEMENT: PW, PLAIN_OBJECT: wq, ABSTRACT_NODE: qW, CONFIG_X_VALUE: Rq, CONFIG_Y_VALUE: Cq, CONFIG_Z_VALUE: Nq, CONFIG_VALUE: Lq, CONFIG_X_UNIT: Pq, CONFIG_Y_UNIT: qq, CONFIG_Z_UNIT: Mq, CONFIG_UNIT: Dq} = Ie),
        {IX2_SESSION_STOPPED: Fq, IX2_INSTANCE_ADDED: Gq, IX2_ELEMENT_STATE_CHANGED: Vq} = Ee,
        th = {},
        Uq = "refState",
        Xq = (e=th,t={})=>{
            switch (t.type) {
            case Fq:
                return th;
            case Gq:
                {
                    let {elementId: r, element: n, origin: i, actionItem: o, refType: a} = t.payload
                      , {actionTypeId: s} = o
                      , c = e;
                    return (0,
                    Kt.getIn)(c, [r, n]) !== n && (c = rh(c, n, a, r, o)),
                    ya(c, r, s, i, o)
                }
            case Vq:
                {
                    let {elementId: r, actionTypeId: n, current: i, actionItem: o} = t.payload;
                    return ya(e, r, n, i, o)
                }
            default:
                return e
            }
        }
        ;
        Hq = [[Rq, Pq], [Cq, qq], [Nq, Mq], [Lq, Dq]]
    }
    );
    var oh = u(_e=>{
        "use strict";
        Object.defineProperty(_e, "__esModule", {
            value: !0
        });
        _e.renderPlugin = _e.getPluginOrigin = _e.getPluginDuration = _e.getPluginDestination = _e.getPluginConfig = _e.createPluginInstance = _e.clearPlugin = void 0;
        var Wq = e=>e.value;
        _e.getPluginConfig = Wq;
        var kq = (e,t)=>{
            if (t.config.duration !== "auto")
                return null;
            let r = parseFloat(e.getAttribute("data-duration"));
            return r > 0 ? r * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3
        }
        ;
        _e.getPluginDuration = kq;
        var jq = e=>e || {
            value: 0
        };
        _e.getPluginOrigin = jq;
        var zq = e=>({
            value: e.value
        });
        _e.getPluginDestination = zq;
        var Kq = e=>{
            let t = window.Webflow.require("lottie").createInstance(e);
            return t.stop(),
            t.setSubframe(!0),
            t
        }
        ;
        _e.createPluginInstance = Kq;
        var $q = (e,t,r)=>{
            if (!e)
                return;
            let n = t[r.actionTypeId].value / 100;
            e.goToFrame(e.frames * n)
        }
        ;
        _e.renderPlugin = $q;
        var Yq = e=>{
            window.Webflow.require("lottie").createInstance(e).stop()
        }
        ;
        _e.clearPlugin = Yq
    }
    );
    var sh = u(Te=>{
        "use strict";
        Object.defineProperty(Te, "__esModule", {
            value: !0
        });
        Te.renderPlugin = Te.getPluginOrigin = Te.getPluginDuration = Te.getPluginDestination = Te.getPluginConfig = Te.createPluginInstance = Te.clearPlugin = void 0;
        var Qq = e=>document.querySelector(`[data-w-id="${e}"]`)
          , Zq = ()=>window.Webflow.require("spline")
          , Jq = (e,t)=>e.filter(r=>!t.includes(r))
          , eM = (e,t)=>e.value[t];
        Te.getPluginConfig = eM;
        var tM = ()=>null;
        Te.getPluginDuration = tM;
        var ah = Object.freeze({
            positionX: 0,
            positionY: 0,
            positionZ: 0,
            rotationX: 0,
            rotationY: 0,
            rotationZ: 0,
            scaleX: 1,
            scaleY: 1,
            scaleZ: 1
        })
          , rM = (e,t)=>{
            let r = t.config.value
              , n = Object.keys(r);
            if (e) {
                let o = Object.keys(e)
                  , a = Jq(n, o);
                return a.length ? a.reduce((c,f)=>(c[f] = ah[f],
                c), e) : e
            }
            return n.reduce((o,a)=>(o[a] = ah[a],
            o), {})
        }
        ;
        Te.getPluginOrigin = rM;
        var nM = e=>e.value;
        Te.getPluginDestination = nM;
        var iM = (e,t)=>{
            var r, n;
            let i = t == null || (r = t.config) === null || r === void 0 || (n = r.target) === null || n === void 0 ? void 0 : n.pluginElement;
            return i ? Qq(i) : null
        }
        ;
        Te.createPluginInstance = iM;
        var oM = (e,t,r)=>{
            let n = Zq()
              , i = n.getInstance(e)
              , o = r.config.target.objectId
              , a = s=>{
                if (!s)
                    throw new Error("Invalid spline app passed to renderSpline");
                let c = o && s.findObjectById(o);
                if (!c)
                    return;
                let {PLUGIN_SPLINE: f} = t;
                f.positionX != null && (c.position.x = f.positionX),
                f.positionY != null && (c.position.y = f.positionY),
                f.positionZ != null && (c.position.z = f.positionZ),
                f.rotationX != null && (c.rotation.x = f.rotationX),
                f.rotationY != null && (c.rotation.y = f.rotationY),
                f.rotationZ != null && (c.rotation.z = f.rotationZ),
                f.scaleX != null && (c.scale.x = f.scaleX),
                f.scaleY != null && (c.scale.y = f.scaleY),
                f.scaleZ != null && (c.scale.z = f.scaleZ)
            }
            ;
            i ? a(i.spline) : n.setLoadHandler(e, a)
        }
        ;
        Te.renderPlugin = oM;
        var aM = ()=>null;
        Te.clearPlugin = aM
    }
    );
    var ch = u(ye=>{
        "use strict";
        Object.defineProperty(ye, "__esModule", {
            value: !0
        });
        ye.getPluginOrigin = ye.getPluginDuration = ye.getPluginDestination = ye.getPluginConfig = ye.createPluginInstance = ye.clearPlugin = void 0;
        ye.normalizeColor = uh;
        ye.renderPlugin = void 0;
        function uh(e) {
            let t, r, n, i = 1, o = e.replace(/\s/g, "").toLowerCase();
            if (o.startsWith("#")) {
                let a = o.substring(1);
                a.length === 3 ? (t = parseInt(a[0] + a[0], 16),
                r = parseInt(a[1] + a[1], 16),
                n = parseInt(a[2] + a[2], 16)) : a.length === 6 && (t = parseInt(a.substring(0, 2), 16),
                r = parseInt(a.substring(2, 4), 16),
                n = parseInt(a.substring(4, 6), 16))
            } else if (o.startsWith("rgba")) {
                let a = o.match(/rgba\(([^)]+)\)/)[1].split(",");
                t = parseInt(a[0], 10),
                r = parseInt(a[1], 10),
                n = parseInt(a[2], 10),
                i = parseFloat(a[3])
            } else if (o.startsWith("rgb")) {
                let a = o.match(/rgb\(([^)]+)\)/)[1].split(",");
                t = parseInt(a[0], 10),
                r = parseInt(a[1], 10),
                n = parseInt(a[2], 10)
            } else if (o.startsWith("hsla")) {
                let a = o.match(/hsla\(([^)]+)\)/)[1].split(",")
                  , s = parseFloat(a[0])
                  , c = parseFloat(a[1].replace("%", "")) / 100
                  , f = parseFloat(a[2].replace("%", "")) / 100;
                i = parseFloat(a[3]);
                let p = (1 - Math.abs(2 * f - 1)) * c, d = p * (1 - Math.abs(s / 60 % 2 - 1)), g = f - p / 2, y, _, m;
                s >= 0 && s < 60 ? (y = p,
                _ = d,
                m = 0) : s >= 60 && s < 120 ? (y = d,
                _ = p,
                m = 0) : s >= 120 && s < 180 ? (y = 0,
                _ = p,
                m = d) : s >= 180 && s < 240 ? (y = 0,
                _ = d,
                m = p) : s >= 240 && s < 300 ? (y = d,
                _ = 0,
                m = p) : (y = p,
                _ = 0,
                m = d),
                t = Math.round((y + g) * 255),
                r = Math.round((_ + g) * 255),
                n = Math.round((m + g) * 255)
            } else if (o.startsWith("hsl")) {
                let a = o.match(/hsl\(([^)]+)\)/)[1].split(","), s = parseFloat(a[0]), c = parseFloat(a[1].replace("%", "")) / 100, f = parseFloat(a[2].replace("%", "")) / 100, p = (1 - Math.abs(2 * f - 1)) * c, d = p * (1 - Math.abs(s / 60 % 2 - 1)), g = f - p / 2, y, _, m;
                s >= 0 && s < 60 ? (y = p,
                _ = d,
                m = 0) : s >= 60 && s < 120 ? (y = d,
                _ = p,
                m = 0) : s >= 120 && s < 180 ? (y = 0,
                _ = p,
                m = d) : s >= 180 && s < 240 ? (y = 0,
                _ = d,
                m = p) : s >= 240 && s < 300 ? (y = d,
                _ = 0,
                m = p) : (y = p,
                _ = 0,
                m = d),
                t = Math.round((y + g) * 255),
                r = Math.round((_ + g) * 255),
                n = Math.round((m + g) * 255)
            }
            return (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n)) && `${e}`,
            {
                red: t,
                green: r,
                blue: n,
                alpha: i
            }
        }
        var sM = (e,t)=>e.value[t];
        ye.getPluginConfig = sM;
        var uM = ()=>null;
        ye.getPluginDuration = uM;
        var cM = (e,t)=>{
            if (e)
                return e;
            let r = t.config.value
              , n = t.config.target.objectId
              , i = getComputedStyle(document.documentElement).getPropertyValue(n);
            if (r.size != null)
                return {
                    size: parseInt(i, 10)
                };
            if (r.red != null && r.green != null && r.blue != null)
                return uh(i)
        }
        ;
        ye.getPluginOrigin = cM;
        var lM = e=>e.value;
        ye.getPluginDestination = lM;
        var fM = ()=>null;
        ye.createPluginInstance = fM;
        var dM = (e,t,r)=>{
            let n = r.config.target.objectId, i = r.config.value.unit, {PLUGIN_VARIABLE: o} = t, {size: a, red: s, green: c, blue: f, alpha: p} = o, d;
            a != null && (d = a + i),
            s != null && f != null && c != null && p != null && (d = `rgba(${s}, ${c}, ${f}, ${p})`),
            d != null && document.documentElement.style.setProperty(n, d)
        }
        ;
        ye.renderPlugin = dM;
        var pM = (e,t)=>{
            let r = t.config.target.objectId;
            document.documentElement.style.removeProperty(r)
        }
        ;
        ye.clearPlugin = pM
    }
    );
    var lh = u(jn=>{
        "use strict";
        var _a = on().default;
        Object.defineProperty(jn, "__esModule", {
            value: !0
        });
        jn.pluginMethodMap = void 0;
        var ma = (Ce(),
        ze(hf))
          , gM = _a(oh())
          , vM = _a(sh())
          , hM = _a(ch())
          , GW = jn.pluginMethodMap = new Map([[ma.ActionTypeConsts.PLUGIN_LOTTIE, {
            ...gM
        }], [ma.ActionTypeConsts.PLUGIN_SPLINE, {
            ...vM
        }], [ma.ActionTypeConsts.PLUGIN_VARIABLE, {
            ...hM
        }]])
    }
    );
    var fh = {};
    Re(fh, {
        clearPlugin: ()=>Sa,
        createPluginInstance: ()=>yM,
        getPluginConfig: ()=>Ia,
        getPluginDestination: ()=>Oa,
        getPluginDuration: ()=>EM,
        getPluginOrigin: ()=>ba,
        isPluginType: ()=>At,
        renderPlugin: ()=>Aa
    });
    function At(e) {
        return Ta.pluginMethodMap.has(e)
    }
    var Ta, St, Ia, ba, EM, Oa, yM, Aa, Sa, xa = ce(()=>{
        "use strict";
        Bn();
        Ta = ie(lh());
        St = e=>t=>{
            if (!Be)
                return ()=>null;
            let r = Ta.pluginMethodMap.get(t);
            if (!r)
                throw new Error(`IX2 no plugin configured for: ${t}`);
            let n = r[e];
            if (!n)
                throw new Error(`IX2 invalid plugin method: ${e}`);
            return n
        }
        ,
        Ia = St("getPluginConfig"),
        ba = St("getPluginOrigin"),
        EM = St("getPluginDuration"),
        Oa = St("getPluginDestination"),
        yM = St("createPluginInstance"),
        Aa = St("renderPlugin"),
        Sa = St("clearPlugin")
    }
    );
    var ph = u((XW,dh)=>{
        function mM(e, t) {
            return e == null || e !== e ? t : e
        }
        dh.exports = mM
    }
    );
    var vh = u((HW,gh)=>{
        function _M(e, t, r, n) {
            var i = -1
              , o = e == null ? 0 : e.length;
            for (n && o && (r = e[++i]); ++i < o; )
                r = t(r, e[i], i, e);
            return r
        }
        gh.exports = _M
    }
    );
    var Eh = u((BW,hh)=>{
        function TM(e) {
            return function(t, r, n) {
                for (var i = -1, o = Object(t), a = n(t), s = a.length; s--; ) {
                    var c = a[e ? s : ++i];
                    if (r(o[c], c, o) === !1)
                        break
                }
                return t
            }
        }
        hh.exports = TM
    }
    );
    var mh = u((WW,yh)=>{
        var IM = Eh()
          , bM = IM();
        yh.exports = bM
    }
    );
    var wa = u((kW,_h)=>{
        var OM = mh()
          , AM = Lr();
        function SM(e, t) {
            return e && OM(e, t, AM)
        }
        _h.exports = SM
    }
    );
    var Ih = u((jW,Th)=>{
        var xM = bt();
        function wM(e, t) {
            return function(r, n) {
                if (r == null)
                    return r;
                if (!xM(r))
                    return e(r, n);
                for (var i = r.length, o = t ? i : -1, a = Object(r); (t ? o-- : ++o < i) && n(a[o], o, a) !== !1; )
                    ;
                return r
            }
        }
        Th.exports = wM
    }
    );
    var Ra = u((zW,bh)=>{
        var RM = wa()
          , CM = Ih()
          , NM = CM(RM);
        bh.exports = NM
    }
    );
    var Ah = u((KW,Oh)=>{
        function LM(e, t, r, n, i) {
            return i(e, function(o, a, s) {
                r = n ? (n = !1,
                o) : t(r, o, a, s)
            }),
            r
        }
        Oh.exports = LM
    }
    );
    var xh = u(($W,Sh)=>{
        var PM = vh()
          , qM = Ra()
          , MM = ht()
          , DM = Ah()
          , FM = me();
        function GM(e, t, r) {
            var n = FM(e) ? PM : DM
              , i = arguments.length < 3;
            return n(e, MM(t, 4), r, i, qM)
        }
        Sh.exports = GM
    }
    );
    var Rh = u((YW,wh)=>{
        var VM = fa()
          , UM = ht()
          , XM = da()
          , HM = Math.max
          , BM = Math.min;
        function WM(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n)
                return -1;
            var i = n - 1;
            return r !== void 0 && (i = XM(r),
            i = r < 0 ? HM(n + i, 0) : BM(i, n - 1)),
            VM(e, UM(t, 3), i, !0)
        }
        wh.exports = WM
    }
    );
    var Nh = u((QW,Ch)=>{
        var kM = la()
          , jM = Rh()
          , zM = kM(jM);
        Ch.exports = zM
    }
    );
    function Lh(e, t) {
        return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
    }
    function $M(e, t) {
        if (Lh(e, t))
            return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null)
            return !1;
        let r = Object.keys(e)
          , n = Object.keys(t);
        if (r.length !== n.length)
            return !1;
        for (let i = 0; i < r.length; i++)
            if (!KM.call(t, r[i]) || !Lh(e[r[i]], t[r[i]]))
                return !1;
        return !0
    }
    var KM, Ca, Ph = ce(()=>{
        "use strict";
        KM = Object.prototype.hasOwnProperty;
        Ca = $M
    }
    );
    var Yh = {};
    Re(Yh, {
        cleanupHTMLElement: ()=>j1,
        clearAllStyles: ()=>k1,
        clearObjectCache: ()=>d1,
        getActionListProgress: ()=>K1,
        getAffectedElements: ()=>Ma,
        getComputedStyle: ()=>_1,
        getDestinationValues: ()=>x1,
        getElementId: ()=>h1,
        getInstanceId: ()=>g1,
        getInstanceOrigin: ()=>b1,
        getItemConfigByKey: ()=>S1,
        getMaxDurationItemIndex: ()=>$h,
        getNamespacedParameterId: ()=>Q1,
        getRenderType: ()=>jh,
        getStyleProp: ()=>w1,
        mediaQueriesEqual: ()=>J1,
        observeStore: ()=>m1,
        reduceListToGroup: ()=>$1,
        reifyState: ()=>E1,
        renderHTMLElement: ()=>R1,
        shallowEqual: ()=>Ca,
        shouldAllowMediaQuery: ()=>Z1,
        shouldNamespaceEventParameter: ()=>Y1,
        stringifyTarget: ()=>eD
    });
    function d1() {
        zn.clear()
    }
    function g1() {
        return "i" + p1++
    }
    function h1(e, t) {
        for (let r in e) {
            let n = e[r];
            if (n && n.ref === t)
                return n.id
        }
        return "e" + v1++
    }
    function E1({events: e, actionLists: t, site: r}={}) {
        let n = (0,
        Qn.default)(e, (a,s)=>{
            let {eventTypeId: c} = s;
            return a[c] || (a[c] = {}),
            a[c][s.id] = s,
            a
        }
        , {})
          , i = r && r.mediaQueries
          , o = [];
        return i ? o = i.map(a=>a.key) : (i = [],
        console.warn("IX2 missing mediaQueries in site data")),
        {
            ixData: {
                events: e,
                actionLists: t,
                eventTypeMap: n,
                mediaQueries: i,
                mediaQueryKeys: o
            }
        }
    }
    function m1({store: e, select: t, onChange: r, comparator: n=y1}) {
        let {getState: i, subscribe: o} = e
          , a = o(c)
          , s = t(i());
        function c() {
            let f = t(i());
            if (f == null) {
                a();
                return
            }
            n(f, s) || (s = f,
            r(s, e))
        }
        return a
    }
    function Dh(e) {
        let t = typeof e;
        if (t === "string")
            return {
                id: e
            };
        if (e != null && t === "object") {
            let {id: r, objectId: n, selector: i, selectorGuids: o, appliesTo: a, useEventTarget: s} = e;
            return {
                id: r,
                objectId: n,
                selector: i,
                selectorGuids: o,
                appliesTo: a,
                useEventTarget: s
            }
        }
        return {}
    }
    function Ma({config: e, event: t, eventTarget: r, elementRoot: n, elementApi: i}) {
        if (!i)
            throw new Error("IX2 missing elementApi");
        let {targets: o} = e;
        if (Array.isArray(o) && o.length > 0)
            return o.reduce((N,T)=>N.concat(Ma({
                config: {
                    target: T
                },
                event: t,
                eventTarget: r,
                elementRoot: n,
                elementApi: i
            })), []);
        let {getValidDocument: a, getQuerySelector: s, queryDocument: c, getChildElements: f, getSiblingElements: p, matchSelector: d, elementContains: g, isSiblingNode: y} = i
          , {target: _} = e;
        if (!_)
            return [];
        let {id: m, objectId: R, selector: A, selectorGuids: S, appliesTo: O, useEventTarget: L} = Dh(_);
        if (R)
            return [zn.has(R) ? zn.get(R) : zn.set(R, {}).get(R)];
        if (O === Mo.PAGE) {
            let N = a(m);
            return N ? [N] : []
        }
        let x = (t?.action?.config?.affectedElements ?? {})[m || A] || {}, V = !!(x.id || x.selector), X, H, j, Q = t && s(Dh(t.target));
        if (V ? (X = x.limitAffectedElements,
        H = Q,
        j = s(x)) : H = j = s({
            id: m,
            selector: A,
            selectorGuids: S
        }),
        t && L) {
            let N = r && (j || L === !0) ? [r] : c(Q);
            if (j) {
                if (L === c1)
                    return c(j).filter(T=>N.some(w=>g(T, w)));
                if (L === qh)
                    return c(j).filter(T=>N.some(w=>g(w, T)));
                if (L === Mh)
                    return c(j).filter(T=>N.some(w=>y(w, T)))
            }
            return N
        }
        return H == null || j == null ? [] : Be && n ? c(j).filter(N=>n.contains(N)) : X === qh ? c(H, j) : X === u1 ? f(c(H)).filter(d(j)) : X === Mh ? p(c(H)).filter(d(j)) : c(j)
    }
    function _1({element: e, actionItem: t}) {
        if (!Be)
            return {};
        let {actionTypeId: r} = t;
        switch (r) {
        case Jt:
        case er:
        case tr:
        case rr:
        case Jn:
            return window.getComputedStyle(e);
        default:
            return {}
        }
    }
    function b1(e, t={}, r={}, n, i) {
        let {getStyle: o} = i
          , {actionTypeId: a} = n;
        if (At(a))
            return ba(a)(t[a], n);
        switch (n.actionTypeId) {
        case Yt:
        case Qt:
        case Zt:
        case Hr:
            return t[n.actionTypeId] || Da[n.actionTypeId];
        case Br:
            return T1(t[n.actionTypeId], n.config.filters);
        case Wr:
            return I1(t[n.actionTypeId], n.config.fontVariations);
        case Bh:
            return {
                value: (0,
                at.default)(parseFloat(o(e, $n)), 1)
            };
        case Jt:
            {
                let s = o(e, Je), c = o(e, et), f, p;
                return n.config.widthUnit === yt ? f = Fh.test(s) ? parseFloat(s) : parseFloat(r.width) : f = (0,
                at.default)(parseFloat(s), parseFloat(r.width)),
                n.config.heightUnit === yt ? p = Fh.test(c) ? parseFloat(c) : parseFloat(r.height) : p = (0,
                at.default)(parseFloat(c), parseFloat(r.height)),
                {
                    widthValue: f,
                    heightValue: p
                }
            }
        case er:
        case tr:
        case rr:
            return H1({
                element: e,
                actionTypeId: n.actionTypeId,
                computedStyle: r,
                getStyle: o
            });
        case Jn:
            return {
                value: (0,
                at.default)(o(e, Yn), r.display)
            };
        case f1:
            return t[n.actionTypeId] || {
                value: 0
            };
        default:
            return
        }
    }
    function x1({element: e, actionItem: t, elementApi: r}) {
        if (At(t.actionTypeId))
            return Oa(t.actionTypeId)(t.config);
        switch (t.actionTypeId) {
        case Yt:
        case Qt:
        case Zt:
        case Hr:
            {
                let {xValue: n, yValue: i, zValue: o} = t.config;
                return {
                    xValue: n,
                    yValue: i,
                    zValue: o
                }
            }
        case Jt:
            {
                let {getStyle: n, setStyle: i, getProperty: o} = r
                  , {widthUnit: a, heightUnit: s} = t.config
                  , {widthValue: c, heightValue: f} = t.config;
                if (!Be)
                    return {
                        widthValue: c,
                        heightValue: f
                    };
                if (a === yt) {
                    let p = n(e, Je);
                    i(e, Je, ""),
                    c = o(e, "offsetWidth"),
                    i(e, Je, p)
                }
                if (s === yt) {
                    let p = n(e, et);
                    i(e, et, ""),
                    f = o(e, "offsetHeight"),
                    i(e, et, p)
                }
                return {
                    widthValue: c,
                    heightValue: f
                }
            }
        case er:
        case tr:
        case rr:
            {
                let {rValue: n, gValue: i, bValue: o, aValue: a} = t.config;
                return {
                    rValue: n,
                    gValue: i,
                    bValue: o,
                    aValue: a
                }
            }
        case Br:
            return t.config.filters.reduce(O1, {});
        case Wr:
            return t.config.fontVariations.reduce(A1, {});
        default:
            {
                let {value: n} = t.config;
                return {
                    value: n
                }
            }
        }
    }
    function jh(e) {
        if (/^TRANSFORM_/.test(e))
            return Xh;
        if (/^STYLE_/.test(e))
            return Pa;
        if (/^GENERAL_/.test(e))
            return La;
        if (/^PLUGIN_/.test(e))
            return Hh
    }
    function w1(e, t) {
        return e === Pa ? t.replace("STYLE_", "").toLowerCase() : null
    }
    function R1(e, t, r, n, i, o, a, s, c) {
        switch (s) {
        case Xh:
            return q1(e, t, r, i, a);
        case Pa:
            return B1(e, t, r, i, o, a);
        case La:
            return W1(e, i, a);
        case Hh:
            {
                let {actionTypeId: f} = i;
                if (At(f))
                    return Aa(f)(c, t, i)
            }
        }
    }
    function q1(e, t, r, n, i) {
        let o = P1.map(s=>{
            let c = Da[s]
              , {xValue: f=c.xValue, yValue: p=c.yValue, zValue: d=c.zValue, xUnit: g="", yUnit: y="", zUnit: _=""} = t[s] || {};
            switch (s) {
            case Yt:
                return `${ZM}(${f}${g}, ${p}${y}, ${d}${_})`;
            case Qt:
                return `${JM}(${f}${g}, ${p}${y}, ${d}${_})`;
            case Zt:
                return `${e1}(${f}${g}) ${t1}(${p}${y}) ${r1}(${d}${_})`;
            case Hr:
                return `${n1}(${f}${g}, ${p}${y})`;
            default:
                return ""
            }
        }
        ).join(" ")
          , {setStyle: a} = i;
        xt(e, Et, i),
        a(e, Et, o),
        F1(n, r) && a(e, Hn, i1)
    }
    function M1(e, t, r, n) {
        let i = (0,
        Qn.default)(t, (a,s,c)=>`${a} ${c}(${s}${L1(c, r)})`, "")
          , {setStyle: o} = n;
        xt(e, Vr, n),
        o(e, Vr, i)
    }
    function D1(e, t, r, n) {
        let i = (0,
        Qn.default)(t, (a,s,c)=>(a.push(`"${c}" ${s}`),
        a), []).join(", ")
          , {setStyle: o} = n;
        xt(e, Ur, n),
        o(e, Ur, i)
    }
    function F1({actionTypeId: e}, {xValue: t, yValue: r, zValue: n}) {
        return e === Yt && n !== void 0 || e === Qt && n !== void 0 || e === Zt && (t !== void 0 || r !== void 0)
    }
    function X1(e, t) {
        let r = e.exec(t);
        return r ? r[1] : ""
    }
    function H1({element: e, actionTypeId: t, computedStyle: r, getStyle: n}) {
        let i = qa[t]
          , o = n(e, i)
          , a = V1.test(o) ? o : r[i]
          , s = X1(U1, a).split(Xr);
        return {
            rValue: (0,
            at.default)(parseInt(s[0], 10), 255),
            gValue: (0,
            at.default)(parseInt(s[1], 10), 255),
            bValue: (0,
            at.default)(parseInt(s[2], 10), 255),
            aValue: (0,
            at.default)(parseFloat(s[3]), 1)
        }
    }
    function B1(e, t, r, n, i, o) {
        let {setStyle: a} = o;
        switch (n.actionTypeId) {
        case Jt:
            {
                let {widthUnit: s="", heightUnit: c=""} = n.config
                  , {widthValue: f, heightValue: p} = r;
                f !== void 0 && (s === yt && (s = "px"),
                xt(e, Je, o),
                a(e, Je, f + s)),
                p !== void 0 && (c === yt && (c = "px"),
                xt(e, et, o),
                a(e, et, p + c));
                break
            }
        case Br:
            {
                M1(e, r, n.config, o);
                break
            }
        case Wr:
            {
                D1(e, r, n.config, o);
                break
            }
        case er:
        case tr:
        case rr:
            {
                let s = qa[n.actionTypeId]
                  , c = Math.round(r.rValue)
                  , f = Math.round(r.gValue)
                  , p = Math.round(r.bValue)
                  , d = r.aValue;
                xt(e, s, o),
                a(e, s, d >= 1 ? `rgb(${c},${f},${p})` : `rgba(${c},${f},${p},${d})`);
                break
            }
        default:
            {
                let {unit: s=""} = n.config;
                xt(e, i, o),
                a(e, i, r.value + s);
                break
            }
        }
    }
    function W1(e, t, r) {
        let {setStyle: n} = r;
        switch (t.actionTypeId) {
        case Jn:
            {
                let {value: i} = t.config;
                i === o1 && Be ? n(e, Yn, ga) : n(e, Yn, i);
                return
            }
        }
    }
    function xt(e, t, r) {
        if (!Be)
            return;
        let n = kh[t];
        if (!n)
            return;
        let {getStyle: i, setStyle: o} = r
          , a = i(e, $t);
        if (!a) {
            o(e, $t, n);
            return
        }
        let s = a.split(Xr).map(Wh);
        s.indexOf(n) === -1 && o(e, $t, s.concat(n).join(Xr))
    }
    function zh(e, t, r) {
        if (!Be)
            return;
        let n = kh[t];
        if (!n)
            return;
        let {getStyle: i, setStyle: o} = r
          , a = i(e, $t);
        !a || a.indexOf(n) === -1 || o(e, $t, a.split(Xr).map(Wh).filter(s=>s !== n).join(Xr))
    }
    function k1({store: e, elementApi: t}) {
        let {ixData: r} = e.getState()
          , {events: n={}, actionLists: i={}} = r;
        Object.keys(n).forEach(o=>{
            let a = n[o]
              , {config: s} = a.action
              , {actionListId: c} = s
              , f = i[c];
            f && Gh({
                actionList: f,
                event: a,
                elementApi: t
            })
        }
        ),
        Object.keys(i).forEach(o=>{
            Gh({
                actionList: i[o],
                elementApi: t
            })
        }
        )
    }
    function Gh({actionList: e={}, event: t, elementApi: r}) {
        let {actionItemGroups: n, continuousParameterGroups: i} = e;
        n && n.forEach(o=>{
            Vh({
                actionGroup: o,
                event: t,
                elementApi: r
            })
        }
        ),
        i && i.forEach(o=>{
            let {continuousActionGroups: a} = o;
            a.forEach(s=>{
                Vh({
                    actionGroup: s,
                    event: t,
                    elementApi: r
                })
            }
            )
        }
        )
    }
    function Vh({actionGroup: e, event: t, elementApi: r}) {
        let {actionItems: n} = e;
        n.forEach(i=>{
            let {actionTypeId: o, config: a} = i, s;
            At(o) ? s = c=>Sa(o)(c, i) : s = Kh({
                effect: z1,
                actionTypeId: o,
                elementApi: r
            }),
            Ma({
                config: a,
                event: t,
                elementApi: r
            }).forEach(s)
        }
        )
    }
    function j1(e, t, r) {
        let {setStyle: n, getStyle: i} = r
          , {actionTypeId: o} = t;
        if (o === Jt) {
            let {config: a} = t;
            a.widthUnit === yt && n(e, Je, ""),
            a.heightUnit === yt && n(e, et, "")
        }
        i(e, $t) && Kh({
            effect: zh,
            actionTypeId: o,
            elementApi: r
        })(e)
    }
    function z1(e, t, r) {
        let {setStyle: n} = r;
        zh(e, t, r),
        n(e, t, ""),
        t === Et && n(e, Hn, "")
    }
    function $h(e) {
        let t = 0
          , r = 0;
        return e.forEach((n,i)=>{
            let {config: o} = n
              , a = o.delay + o.duration;
            a >= t && (t = a,
            r = i)
        }
        ),
        r
    }
    function K1(e, t) {
        let {actionItemGroups: r, useFirstGroupAsInitialState: n} = e
          , {actionItem: i, verboseTimeElapsed: o=0} = t
          , a = 0
          , s = 0;
        return r.forEach((c,f)=>{
            if (n && f === 0)
                return;
            let {actionItems: p} = c
              , d = p[$h(p)]
              , {config: g, actionTypeId: y} = d;
            i.id === d.id && (s = a + o);
            let _ = jh(y) === La ? 0 : g.duration;
            a += g.delay + _
        }
        ),
        a > 0 ? Gr(s / a) : 0
    }
    function $1({actionList: e, actionItemId: t, rawData: r}) {
        let {actionItemGroups: n, continuousParameterGroups: i} = e
          , o = []
          , a = s=>(o.push((0,
        Zn.mergeIn)(s, ["config"], {
            delay: 0,
            duration: 0
        })),
        s.id === t);
        return n && n.some(({actionItems: s})=>s.some(a)),
        i && i.some(s=>{
            let {continuousActionGroups: c} = s;
            return c.some(({actionItems: f})=>f.some(a))
        }
        ),
        (0,
        Zn.setIn)(r, ["actionLists"], {
            [e.id]: {
                id: e.id,
                actionItemGroups: [{
                    actionItems: o
                }]
            }
        })
    }
    function Y1(e, {basedOn: t}) {
        return e === He.SCROLLING_IN_VIEW && (t === Qe.ELEMENT || t == null) || e === He.MOUSE_MOVE && t === Qe.ELEMENT
    }
    function Q1(e, t) {
        return e + l1 + t
    }
    function Z1(e, t) {
        return t == null ? !0 : e.indexOf(t) !== -1
    }
    function J1(e, t) {
        return Ca(e && e.sort(), t && t.sort())
    }
    function eD(e) {
        if (typeof e == "string")
            return e;
        if (e.pluginElement && e.objectId)
            return e.pluginElement + Na + e.objectId;
        if (e.objectId)
            return e.objectId;
        let {id: t="", selector: r="", useEventTarget: n=""} = e;
        return t + Na + r + Na + n
    }
    var at, Qn, Kn, Zn, YM, QM, ZM, JM, e1, t1, r1, n1, i1, o1, $n, Vr, Ur, Je, et, Uh, a1, s1, qh, u1, Mh, c1, Yn, $t, yt, Xr, l1, Na, Xh, La, Pa, Hh, Yt, Qt, Zt, Hr, Bh, Br, Wr, Jt, er, tr, rr, Jn, f1, Wh, qa, kh, zn, p1, v1, y1, Fh, T1, I1, O1, A1, S1, Da, C1, N1, L1, P1, G1, V1, U1, Kh, Qh = ce(()=>{
        "use strict";
        at = ie(ph()),
        Qn = ie(xh()),
        Kn = ie(Nh()),
        Zn = ie(Vt());
        Ce();
        Ph();
        Ea();
        xa();
        Bn();
        ({BACKGROUND: YM, TRANSFORM: QM, TRANSLATE_3D: ZM, SCALE_3D: JM, ROTATE_X: e1, ROTATE_Y: t1, ROTATE_Z: r1, SKEW: n1, PRESERVE_3D: i1, FLEX: o1, OPACITY: $n, FILTER: Vr, FONT_VARIATION_SETTINGS: Ur, WIDTH: Je, HEIGHT: et, BACKGROUND_COLOR: Uh, BORDER_COLOR: a1, COLOR: s1, CHILDREN: qh, IMMEDIATE_CHILDREN: u1, SIBLINGS: Mh, PARENT: c1, DISPLAY: Yn, WILL_CHANGE: $t, AUTO: yt, COMMA_DELIMITER: Xr, COLON_DELIMITER: l1, BAR_DELIMITER: Na, RENDER_TRANSFORM: Xh, RENDER_GENERAL: La, RENDER_STYLE: Pa, RENDER_PLUGIN: Hh} = Ie),
        {TRANSFORM_MOVE: Yt, TRANSFORM_SCALE: Qt, TRANSFORM_ROTATE: Zt, TRANSFORM_SKEW: Hr, STYLE_OPACITY: Bh, STYLE_FILTER: Br, STYLE_FONT_VARIATION: Wr, STYLE_SIZE: Jt, STYLE_BACKGROUND_COLOR: er, STYLE_BORDER: tr, STYLE_TEXT_COLOR: rr, GENERAL_DISPLAY: Jn, OBJECT_VALUE: f1} = qe,
        Wh = e=>e.trim(),
        qa = Object.freeze({
            [er]: Uh,
            [tr]: a1,
            [rr]: s1
        }),
        kh = Object.freeze({
            [Et]: QM,
            [Uh]: YM,
            [$n]: $n,
            [Vr]: Vr,
            [Je]: Je,
            [et]: et,
            [Ur]: Ur
        }),
        zn = new Map;
        p1 = 1;
        v1 = 1;
        y1 = (e,t)=>e === t;
        Fh = /px/,
        T1 = (e,t)=>t.reduce((r,n)=>(r[n.type] == null && (r[n.type] = C1[n.type]),
        r), e || {}),
        I1 = (e,t)=>t.reduce((r,n)=>(r[n.type] == null && (r[n.type] = N1[n.type] || n.defaultValue || 0),
        r), e || {});
        O1 = (e,t)=>(t && (e[t.type] = t.value || 0),
        e),
        A1 = (e,t)=>(t && (e[t.type] = t.value || 0),
        e),
        S1 = (e,t,r)=>{
            if (At(e))
                return Ia(e)(r, t);
            switch (e) {
            case Br:
                {
                    let n = (0,
                    Kn.default)(r.filters, ({type: i})=>i === t);
                    return n ? n.value : 0
                }
            case Wr:
                {
                    let n = (0,
                    Kn.default)(r.fontVariations, ({type: i})=>i === t);
                    return n ? n.value : 0
                }
            default:
                return r[t]
            }
        }
        ;
        Da = {
            [Yt]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [Qt]: Object.freeze({
                xValue: 1,
                yValue: 1,
                zValue: 1
            }),
            [Zt]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [Hr]: Object.freeze({
                xValue: 0,
                yValue: 0
            })
        },
        C1 = Object.freeze({
            blur: 0,
            "hue-rotate": 0,
            invert: 0,
            grayscale: 0,
            saturate: 100,
            sepia: 0,
            contrast: 100,
            brightness: 100
        }),
        N1 = Object.freeze({
            wght: 0,
            opsz: 0,
            wdth: 0,
            slnt: 0
        }),
        L1 = (e,t)=>{
            let r = (0,
            Kn.default)(t.filters, ({type: n})=>n === e);
            if (r && r.unit)
                return r.unit;
            switch (e) {
            case "blur":
                return "px";
            case "hue-rotate":
                return "deg";
            default:
                return "%"
            }
        }
        ,
        P1 = Object.keys(Da);
        G1 = "\\(([^)]+)\\)",
        V1 = /^rgb/,
        U1 = RegExp(`rgba?${G1}`);
        Kh = ({effect: e, actionTypeId: t, elementApi: r})=>n=>{
            switch (t) {
            case Yt:
            case Qt:
            case Zt:
            case Hr:
                e(n, Et, r);
                break;
            case Br:
                e(n, Vr, r);
                break;
            case Wr:
                e(n, Ur, r);
                break;
            case Bh:
                e(n, $n, r);
                break;
            case Jt:
                e(n, Je, r),
                e(n, et, r);
                break;
            case er:
            case tr:
            case rr:
                e(n, qa[t], r);
                break;
            case Jn:
                e(n, Yn, r);
                break
            }
        }
    }
    );
    var wt = u(Se=>{
        "use strict";
        var nr = on().default;
        Object.defineProperty(Se, "__esModule", {
            value: !0
        });
        Se.IX2VanillaUtils = Se.IX2VanillaPlugins = Se.IX2ElementsReducer = Se.IX2Easings = Se.IX2EasingUtils = Se.IX2BrowserSupport = void 0;
        var tD = nr((Bn(),
        ze(zv)));
        Se.IX2BrowserSupport = tD;
        var rD = nr((ha(),
        ze(Fr)));
        Se.IX2Easings = rD;
        var nD = nr((Ea(),
        ze(eh)));
        Se.IX2EasingUtils = nD;
        var iD = nr((ih(),
        ze(nh)));
        Se.IX2ElementsReducer = iD;
        var oD = nr((xa(),
        ze(fh)));
        Se.IX2VanillaPlugins = oD;
        var aD = nr((Qh(),
        ze(Yh)));
        Se.IX2VanillaUtils = aD
    }
    );
    var ti, st, sD, uD, cD, lD, fD, dD, ei, Zh, pD, gD, Fa, vD, hD, ED, yD, Jh, eE = ce(()=>{
        "use strict";
        Ce();
        ti = ie(wt()),
        st = ie(Vt()),
        {IX2_RAW_DATA_IMPORTED: sD, IX2_SESSION_STOPPED: uD, IX2_INSTANCE_ADDED: cD, IX2_INSTANCE_STARTED: lD, IX2_INSTANCE_REMOVED: fD, IX2_ANIMATION_FRAME_CHANGED: dD} = Ee,
        {optimizeFloat: ei, applyEasing: Zh, createBezierEasing: pD} = ti.IX2EasingUtils,
        {RENDER_GENERAL: gD} = Ie,
        {getItemConfigByKey: Fa, getRenderType: vD, getStyleProp: hD} = ti.IX2VanillaUtils,
        ED = (e,t)=>{
            let {position: r, parameterId: n, actionGroups: i, destinationKeys: o, smoothing: a, restingValue: s, actionTypeId: c, customEasingFn: f, skipMotion: p, skipToValue: d} = e
              , {parameters: g} = t.payload
              , y = Math.max(1 - a, .01)
              , _ = g[n];
            _ == null && (y = 1,
            _ = s);
            let m = Math.max(_, 0) || 0
              , R = ei(m - r)
              , A = p ? d : ei(r + R * y)
              , S = A * 100;
            if (A === r && e.current)
                return e;
            let O, L, P, x;
            for (let X = 0, {length: H} = i; X < H; X++) {
                let {keyframe: j, actionItems: Q} = i[X];
                if (X === 0 && (O = Q[0]),
                S >= j) {
                    O = Q[0];
                    let N = i[X + 1]
                      , T = N && S !== j;
                    L = T ? N.actionItems[0] : null,
                    T && (P = j / 100,
                    x = (N.keyframe - j) / 100)
                }
            }
            let V = {};
            if (O && !L)
                for (let X = 0, {length: H} = o; X < H; X++) {
                    let j = o[X];
                    V[j] = Fa(c, j, O.config)
                }
            else if (O && L && P !== void 0 && x !== void 0) {
                let X = (A - P) / x
                  , H = O.config.easing
                  , j = Zh(H, X, f);
                for (let Q = 0, {length: N} = o; Q < N; Q++) {
                    let T = o[Q]
                      , w = Fa(c, T, O.config)
                      , Z = (Fa(c, T, L.config) - w) * j + w;
                    V[T] = Z
                }
            }
            return (0,
            st.merge)(e, {
                position: A,
                current: V
            })
        }
        ,
        yD = (e,t)=>{
            let {active: r, origin: n, start: i, immediate: o, renderType: a, verbose: s, actionItem: c, destination: f, destinationKeys: p, pluginDuration: d, instanceDelay: g, customEasingFn: y, skipMotion: _} = e
              , m = c.config.easing
              , {duration: R, delay: A} = c.config;
            d != null && (R = d),
            A = g ?? A,
            a === gD ? R = 0 : (o || _) && (R = A = 0);
            let {now: S} = t.payload;
            if (r && n) {
                let O = S - (i + A);
                if (s) {
                    let X = S - i
                      , H = R + A
                      , j = ei(Math.min(Math.max(0, X / H), 1));
                    e = (0,
                    st.set)(e, "verboseTimeElapsed", H * j)
                }
                if (O < 0)
                    return e;
                let L = ei(Math.min(Math.max(0, O / R), 1))
                  , P = Zh(m, L, y)
                  , x = {}
                  , V = null;
                return p.length && (V = p.reduce((X,H)=>{
                    let j = f[H]
                      , Q = parseFloat(n[H]) || 0
                      , T = (parseFloat(j) - Q) * P + Q;
                    return X[H] = T,
                    X
                }
                , {})),
                x.current = V,
                x.position = L,
                L === 1 && (x.active = !1,
                x.complete = !0),
                (0,
                st.merge)(e, x)
            }
            return e
        }
        ,
        Jh = (e=Object.freeze({}),t)=>{
            switch (t.type) {
            case sD:
                return t.payload.ixInstances || Object.freeze({});
            case uD:
                return Object.freeze({});
            case cD:
                {
                    let {instanceId: r, elementId: n, actionItem: i, eventId: o, eventTarget: a, eventStateKey: s, actionListId: c, groupIndex: f, isCarrier: p, origin: d, destination: g, immediate: y, verbose: _, continuous: m, parameterId: R, actionGroups: A, smoothing: S, restingValue: O, pluginInstance: L, pluginDuration: P, instanceDelay: x, skipMotion: V, skipToValue: X} = t.payload
                      , {actionTypeId: H} = i
                      , j = vD(H)
                      , Q = hD(j, H)
                      , N = Object.keys(g).filter(w=>g[w] != null && typeof g[w] != "string")
                      , {easing: T} = i.config;
                    return (0,
                    st.set)(e, r, {
                        id: r,
                        elementId: n,
                        active: !1,
                        position: 0,
                        start: 0,
                        origin: d,
                        destination: g,
                        destinationKeys: N,
                        immediate: y,
                        verbose: _,
                        current: null,
                        actionItem: i,
                        actionTypeId: H,
                        eventId: o,
                        eventTarget: a,
                        eventStateKey: s,
                        actionListId: c,
                        groupIndex: f,
                        renderType: j,
                        isCarrier: p,
                        styleProp: Q,
                        continuous: m,
                        parameterId: R,
                        actionGroups: A,
                        smoothing: S,
                        restingValue: O,
                        pluginInstance: L,
                        pluginDuration: P,
                        instanceDelay: x,
                        skipMotion: V,
                        skipToValue: X,
                        customEasingFn: Array.isArray(T) && T.length === 4 ? pD(T) : void 0
                    })
                }
            case lD:
                {
                    let {instanceId: r, time: n} = t.payload;
                    return (0,
                    st.mergeIn)(e, [r], {
                        active: !0,
                        complete: !1,
                        start: n
                    })
                }
            case fD:
                {
                    let {instanceId: r} = t.payload;
                    if (!e[r])
                        return e;
                    let n = {}
                      , i = Object.keys(e)
                      , {length: o} = i;
                    for (let a = 0; a < o; a++) {
                        let s = i[a];
                        s !== r && (n[s] = e[s])
                    }
                    return n
                }
            case dD:
                {
                    let r = e
                      , n = Object.keys(e)
                      , {length: i} = n;
                    for (let o = 0; o < i; o++) {
                        let a = n[o]
                          , s = e[a]
                          , c = s.continuous ? ED : yD;
                        r = (0,
                        st.set)(r, a, c(s, t))
                    }
                    return r
                }
            default:
                return e
            }
        }
    }
    );
    var mD, _D, TD, tE, rE = ce(()=>{
        "use strict";
        Ce();
        ({IX2_RAW_DATA_IMPORTED: mD, IX2_SESSION_STOPPED: _D, IX2_PARAMETER_CHANGED: TD} = Ee),
        tE = (e={},t)=>{
            switch (t.type) {
            case mD:
                return t.payload.ixParameters || {};
            case _D:
                return {};
            case TD:
                {
                    let {key: r, value: n} = t.payload;
                    return e[r] = n,
                    e
                }
            default:
                return e
            }
        }
    }
    );
    var oE = {};
    Re(oE, {
        default: ()=>bD
    });
    var nE, iE, ID, bD, aE = ce(()=>{
        "use strict";
        nE = ie(qo());
        yf();
        Vf();
        Hf();
        iE = ie(wt());
        eE();
        rE();
        ({ixElements: ID} = iE.IX2ElementsReducer),
        bD = (0,
        nE.combineReducers)({
            ixData: Ef,
            ixRequest: Gf,
            ixSession: Xf,
            ixElements: ID,
            ixInstances: Jh,
            ixParameters: tE
        })
    }
    );
    var uE = u((gk,sE)=>{
        var OD = gt()
          , AD = me()
          , SD = it()
          , xD = "[object String]";
        function wD(e) {
            return typeof e == "string" || !AD(e) && SD(e) && OD(e) == xD
        }
        sE.exports = wD
    }
    );
    var lE = u((vk,cE)=>{
        var RD = ca()
          , CD = RD("length");
        cE.exports = CD
    }
    );
    var dE = u((hk,fE)=>{
        var ND = "\\ud800-\\udfff"
          , LD = "\\u0300-\\u036f"
          , PD = "\\ufe20-\\ufe2f"
          , qD = "\\u20d0-\\u20ff"
          , MD = LD + PD + qD
          , DD = "\\ufe0e\\ufe0f"
          , FD = "\\u200d"
          , GD = RegExp("[" + FD + ND + MD + DD + "]");
        function VD(e) {
            return GD.test(e)
        }
        fE.exports = VD
    }
    );
    var TE = u((Ek,_E)=>{
        var gE = "\\ud800-\\udfff"
          , UD = "\\u0300-\\u036f"
          , XD = "\\ufe20-\\ufe2f"
          , HD = "\\u20d0-\\u20ff"
          , BD = UD + XD + HD
          , WD = "\\ufe0e\\ufe0f"
          , kD = "[" + gE + "]"
          , Ga = "[" + BD + "]"
          , Va = "\\ud83c[\\udffb-\\udfff]"
          , jD = "(?:" + Ga + "|" + Va + ")"
          , vE = "[^" + gE + "]"
          , hE = "(?:\\ud83c[\\udde6-\\uddff]){2}"
          , EE = "[\\ud800-\\udbff][\\udc00-\\udfff]"
          , zD = "\\u200d"
          , yE = jD + "?"
          , mE = "[" + WD + "]?"
          , KD = "(?:" + zD + "(?:" + [vE, hE, EE].join("|") + ")" + mE + yE + ")*"
          , $D = mE + yE + KD
          , YD = "(?:" + [vE + Ga + "?", Ga, hE, EE, kD].join("|") + ")"
          , pE = RegExp(Va + "(?=" + Va + ")|" + YD + $D, "g");
        function QD(e) {
            for (var t = pE.lastIndex = 0; pE.test(e); )
                ++t;
            return t
        }
        _E.exports = QD
    }
    );
    var bE = u((yk,IE)=>{
        var ZD = lE()
          , JD = dE()
          , eF = TE();
        function tF(e) {
            return JD(e) ? eF(e) : ZD(e)
        }
        IE.exports = tF
    }
    );
    var AE = u((mk,OE)=>{
        var rF = Pn()
          , nF = qn()
          , iF = bt()
          , oF = uE()
          , aF = bE()
          , sF = "[object Map]"
          , uF = "[object Set]";
        function cF(e) {
            if (e == null)
                return 0;
            if (iF(e))
                return oF(e) ? aF(e) : e.length;
            var t = nF(e);
            return t == sF || t == uF ? e.size : rF(e).length
        }
        OE.exports = cF
    }
    );
    var xE = u((_k,SE)=>{
        var lF = "Expected a function";
        function fF(e) {
            if (typeof e != "function")
                throw new TypeError(lF);
            return function() {
                var t = arguments;
                switch (t.length) {
                case 0:
                    return !e.call(this);
                case 1:
                    return !e.call(this, t[0]);
                case 2:
                    return !e.call(this, t[0], t[1]);
                case 3:
                    return !e.call(this, t[0], t[1], t[2])
                }
                return !e.apply(this, t)
            }
        }
        SE.exports = fF
    }
    );
    var Ua = u((Tk,wE)=>{
        var dF = vt()
          , pF = function() {
            try {
                var e = dF(Object, "defineProperty");
                return e({}, "", {}),
                e
            } catch {}
        }();
        wE.exports = pF
    }
    );
    var Xa = u((Ik,CE)=>{
        var RE = Ua();
        function gF(e, t, r) {
            t == "__proto__" && RE ? RE(e, t, {
                configurable: !0,
                enumerable: !0,
                value: r,
                writable: !0
            }) : e[t] = r
        }
        CE.exports = gF
    }
    );
    var LE = u((bk,NE)=>{
        var vF = Xa()
          , hF = bn()
          , EF = Object.prototype
          , yF = EF.hasOwnProperty;
        function mF(e, t, r) {
            var n = e[t];
            (!(yF.call(e, t) && hF(n, r)) || r === void 0 && !(t in e)) && vF(e, t, r)
        }
        NE.exports = mF
    }
    );
    var ME = u((Ok,qE)=>{
        var _F = LE()
          , TF = qr()
          , IF = Rn()
          , PE = Ze()
          , bF = zt();
        function OF(e, t, r, n) {
            if (!PE(e))
                return e;
            t = TF(t, e);
            for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o; ) {
                var c = bF(t[i])
                  , f = r;
                if (c === "__proto__" || c === "constructor" || c === "prototype")
                    return e;
                if (i != a) {
                    var p = s[c];
                    f = n ? n(p, c, s) : void 0,
                    f === void 0 && (f = PE(p) ? p : IF(t[i + 1]) ? [] : {})
                }
                _F(s, c, f),
                s = s[c]
            }
            return e
        }
        qE.exports = OF
    }
    );
    var FE = u((Ak,DE)=>{
        var AF = Fn()
          , SF = ME()
          , xF = qr();
        function wF(e, t, r) {
            for (var n = -1, i = t.length, o = {}; ++n < i; ) {
                var a = t[n]
                  , s = AF(e, a);
                r(s, a) && SF(o, xF(a, e), s)
            }
            return o
        }
        DE.exports = wF
    }
    );
    var VE = u((Sk,GE)=>{
        var RF = xn()
          , CF = To()
          , NF = Ko()
          , LF = zo()
          , PF = Object.getOwnPropertySymbols
          , qF = PF ? function(e) {
            for (var t = []; e; )
                RF(t, NF(e)),
                e = CF(e);
            return t
        }
        : LF;
        GE.exports = qF
    }
    );
    var XE = u((xk,UE)=>{
        function MF(e) {
            var t = [];
            if (e != null)
                for (var r in Object(e))
                    t.push(r);
            return t
        }
        UE.exports = MF
    }
    );
    var BE = u((wk,HE)=>{
        var DF = Ze()
          , FF = Ln()
          , GF = XE()
          , VF = Object.prototype
          , UF = VF.hasOwnProperty;
        function XF(e) {
            if (!DF(e))
                return GF(e);
            var t = FF(e)
              , r = [];
            for (var n in e)
                n == "constructor" && (t || !UF.call(e, n)) || r.push(n);
            return r
        }
        HE.exports = XF
    }
    );
    var kE = u((Rk,WE)=>{
        var HF = Yo()
          , BF = BE()
          , WF = bt();
        function kF(e) {
            return WF(e) ? HF(e, !0) : BF(e)
        }
        WE.exports = kF
    }
    );
    var zE = u((Ck,jE)=>{
        var jF = jo()
          , zF = VE()
          , KF = kE();
        function $F(e) {
            return jF(e, KF, zF)
        }
        jE.exports = $F
    }
    );
    var $E = u((Nk,KE)=>{
        var YF = ua()
          , QF = ht()
          , ZF = FE()
          , JF = zE();
        function e2(e, t) {
            if (e == null)
                return {};
            var r = YF(JF(e), function(n) {
                return [n]
            });
            return t = QF(t),
            ZF(e, r, function(n, i) {
                return t(n, i[0])
            })
        }
        KE.exports = e2
    }
    );
    var QE = u((Lk,YE)=>{
        var t2 = ht()
          , r2 = xE()
          , n2 = $E();
        function i2(e, t) {
            return n2(e, r2(t2(t)))
        }
        YE.exports = i2
    }
    );
    var JE = u((Pk,ZE)=>{
        var o2 = Pn()
          , a2 = qn()
          , s2 = wr()
          , u2 = me()
          , c2 = bt()
          , l2 = wn()
          , f2 = Ln()
          , d2 = Nn()
          , p2 = "[object Map]"
          , g2 = "[object Set]"
          , v2 = Object.prototype
          , h2 = v2.hasOwnProperty;
        function E2(e) {
            if (e == null)
                return !0;
            if (c2(e) && (u2(e) || typeof e == "string" || typeof e.splice == "function" || l2(e) || d2(e) || s2(e)))
                return !e.length;
            var t = a2(e);
            if (t == p2 || t == g2)
                return !e.size;
            if (f2(e))
                return !o2(e).length;
            for (var r in e)
                if (h2.call(e, r))
                    return !1;
            return !0
        }
        ZE.exports = E2
    }
    );
    var ty = u((qk,ey)=>{
        var y2 = Xa()
          , m2 = wa()
          , _2 = ht();
        function T2(e, t) {
            var r = {};
            return t = _2(t, 3),
            m2(e, function(n, i, o) {
                y2(r, i, t(n, i, o))
            }),
            r
        }
        ey.exports = T2
    }
    );
    var ny = u((Mk,ry)=>{
        function I2(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
                ;
            return e
        }
        ry.exports = I2
    }
    );
    var oy = u((Dk,iy)=>{
        var b2 = Vn();
        function O2(e) {
            return typeof e == "function" ? e : b2
        }
        iy.exports = O2
    }
    );
    var sy = u((Fk,ay)=>{
        var A2 = ny()
          , S2 = Ra()
          , x2 = oy()
          , w2 = me();
        function R2(e, t) {
            var r = w2(e) ? A2 : S2;
            return r(e, x2(t))
        }
        ay.exports = R2
    }
    );
    var cy = u((Gk,uy)=>{
        var C2 = Xe()
          , N2 = function() {
            return C2.Date.now()
        };
        uy.exports = N2
    }
    );
    var dy = u((Vk,fy)=>{
        var L2 = Ze()
          , Ha = cy()
          , ly = Un()
          , P2 = "Expected a function"
          , q2 = Math.max
          , M2 = Math.min;
        function D2(e, t, r) {
            var n, i, o, a, s, c, f = 0, p = !1, d = !1, g = !0;
            if (typeof e != "function")
                throw new TypeError(P2);
            t = ly(t) || 0,
            L2(r) && (p = !!r.leading,
            d = "maxWait"in r,
            o = d ? q2(ly(r.maxWait) || 0, t) : o,
            g = "trailing"in r ? !!r.trailing : g);
            function y(x) {
                var V = n
                  , X = i;
                return n = i = void 0,
                f = x,
                a = e.apply(X, V),
                a
            }
            function _(x) {
                return f = x,
                s = setTimeout(A, t),
                p ? y(x) : a
            }
            function m(x) {
                var V = x - c
                  , X = x - f
                  , H = t - V;
                return d ? M2(H, o - X) : H
            }
            function R(x) {
                var V = x - c
                  , X = x - f;
                return c === void 0 || V >= t || V < 0 || d && X >= o
            }
            function A() {
                var x = Ha();
                if (R(x))
                    return S(x);
                s = setTimeout(A, m(x))
            }
            function S(x) {
                return s = void 0,
                g && n ? y(x) : (n = i = void 0,
                a)
            }
            function O() {
                s !== void 0 && clearTimeout(s),
                f = 0,
                n = c = i = s = void 0
            }
            function L() {
                return s === void 0 ? a : S(Ha())
            }
            function P() {
                var x = Ha()
                  , V = R(x);
                if (n = arguments,
                i = this,
                c = x,
                V) {
                    if (s === void 0)
                        return _(c);
                    if (d)
                        return clearTimeout(s),
                        s = setTimeout(A, t),
                        y(c)
                }
                return s === void 0 && (s = setTimeout(A, t)),
                a
            }
            return P.cancel = O,
            P.flush = L,
            P
        }
        fy.exports = D2
    }
    );
    var gy = u((Uk,py)=>{
        var F2 = dy()
          , G2 = Ze()
          , V2 = "Expected a function";
        function U2(e, t, r) {
            var n = !0
              , i = !0;
            if (typeof e != "function")
                throw new TypeError(V2);
            return G2(r) && (n = "leading"in r ? !!r.leading : n,
            i = "trailing"in r ? !!r.trailing : i),
            F2(e, t, {
                leading: n,
                maxWait: t,
                trailing: i
            })
        }
        py.exports = U2
    }
    );
    var hy = {};
    Re(hy, {
        actionListPlaybackChanged: ()=>or,
        animationFrameChanged: ()=>ni,
        clearRequested: ()=>fG,
        elementStateChanged: ()=>Ya,
        eventListenerAdded: ()=>ri,
        eventStateChanged: ()=>za,
        instanceAdded: ()=>Ka,
        instanceRemoved: ()=>$a,
        instanceStarted: ()=>ii,
        mediaQueriesDefined: ()=>Za,
        parameterChanged: ()=>ir,
        playbackRequested: ()=>cG,
        previewRequested: ()=>uG,
        rawDataImported: ()=>Ba,
        sessionInitialized: ()=>Wa,
        sessionStarted: ()=>ka,
        sessionStopped: ()=>ja,
        stopRequested: ()=>lG,
        testFrameRendered: ()=>dG,
        viewportWidthChanged: ()=>Qa
    });
    var vy, X2, H2, B2, W2, k2, j2, z2, K2, $2, Y2, Q2, Z2, J2, eG, tG, rG, nG, iG, oG, aG, sG, Ba, Wa, ka, ja, uG, cG, lG, fG, ri, dG, za, ni, ir, Ka, ii, $a, Ya, or, Qa, Za, oi = ce(()=>{
        "use strict";
        Ce();
        vy = ie(wt()),
        {IX2_RAW_DATA_IMPORTED: X2, IX2_SESSION_INITIALIZED: H2, IX2_SESSION_STARTED: B2, IX2_SESSION_STOPPED: W2, IX2_PREVIEW_REQUESTED: k2, IX2_PLAYBACK_REQUESTED: j2, IX2_STOP_REQUESTED: z2, IX2_CLEAR_REQUESTED: K2, IX2_EVENT_LISTENER_ADDED: $2, IX2_TEST_FRAME_RENDERED: Y2, IX2_EVENT_STATE_CHANGED: Q2, IX2_ANIMATION_FRAME_CHANGED: Z2, IX2_PARAMETER_CHANGED: J2, IX2_INSTANCE_ADDED: eG, IX2_INSTANCE_STARTED: tG, IX2_INSTANCE_REMOVED: rG, IX2_ELEMENT_STATE_CHANGED: nG, IX2_ACTION_LIST_PLAYBACK_CHANGED: iG, IX2_VIEWPORT_WIDTH_CHANGED: oG, IX2_MEDIA_QUERIES_DEFINED: aG} = Ee,
        {reifyState: sG} = vy.IX2VanillaUtils,
        Ba = e=>({
            type: X2,
            payload: {
                ...sG(e)
            }
        }),
        Wa = ({hasBoundaryNodes: e, reducedMotion: t})=>({
            type: H2,
            payload: {
                hasBoundaryNodes: e,
                reducedMotion: t
            }
        }),
        ka = ()=>({
            type: B2
        }),
        ja = ()=>({
            type: W2
        }),
        uG = ({rawData: e, defer: t})=>({
            type: k2,
            payload: {
                defer: t,
                rawData: e
            }
        }),
        cG = ({actionTypeId: e=qe.GENERAL_START_ACTION, actionListId: t, actionItemId: r, eventId: n, allowEvents: i, immediate: o, testManual: a, verbose: s, rawData: c})=>({
            type: j2,
            payload: {
                actionTypeId: e,
                actionListId: t,
                actionItemId: r,
                testManual: a,
                eventId: n,
                allowEvents: i,
                immediate: o,
                verbose: s,
                rawData: c
            }
        }),
        lG = e=>({
            type: z2,
            payload: {
                actionListId: e
            }
        }),
        fG = ()=>({
            type: K2
        }),
        ri = (e,t)=>({
            type: $2,
            payload: {
                target: e,
                listenerParams: t
            }
        }),
        dG = (e=1)=>({
            type: Y2,
            payload: {
                step: e
            }
        }),
        za = (e,t)=>({
            type: Q2,
            payload: {
                stateKey: e,
                newState: t
            }
        }),
        ni = (e,t)=>({
            type: Z2,
            payload: {
                now: e,
                parameters: t
            }
        }),
        ir = (e,t)=>({
            type: J2,
            payload: {
                key: e,
                value: t
            }
        }),
        Ka = e=>({
            type: eG,
            payload: {
                ...e
            }
        }),
        ii = (e,t)=>({
            type: tG,
            payload: {
                instanceId: e,
                time: t
            }
        }),
        $a = e=>({
            type: rG,
            payload: {
                instanceId: e
            }
        }),
        Ya = (e,t,r,n)=>({
            type: nG,
            payload: {
                elementId: e,
                actionTypeId: t,
                current: r,
                actionItem: n
            }
        }),
        or = ({actionListId: e, isPlaying: t})=>({
            type: iG,
            payload: {
                actionListId: e,
                isPlaying: t
            }
        }),
        Qa = ({width: e, mediaQueries: t})=>({
            type: oG,
            payload: {
                width: e,
                mediaQueries: t
            }
        }),
        Za = ()=>({
            type: aG
        })
    }
    );
    var xe = {};
    Re(xe, {
        elementContains: ()=>ts,
        getChildElements: ()=>IG,
        getClosestElement: ()=>kr,
        getProperty: ()=>EG,
        getQuerySelector: ()=>es,
        getRefType: ()=>rs,
        getSiblingElements: ()=>bG,
        getStyle: ()=>hG,
        getValidDocument: ()=>mG,
        isSiblingNode: ()=>TG,
        matchSelector: ()=>yG,
        queryDocument: ()=>_G,
        setStyle: ()=>vG
    });
    function vG(e, t, r) {
        e.style[t] = r
    }
    function hG(e, t) {
        return e.style[t]
    }
    function EG(e, t) {
        return e[t]
    }
    function yG(e) {
        return t=>t[Ja](e)
    }
    function es({id: e, selector: t}) {
        if (e) {
            let r = e;
            if (e.indexOf(Ey) !== -1) {
                let n = e.split(Ey)
                  , i = n[0];
                if (r = n[1],
                i !== document.documentElement.getAttribute(my))
                    return null
            }
            return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`
        }
        return t
    }
    function mG(e) {
        return e == null || e === document.documentElement.getAttribute(my) ? document : null
    }
    function _G(e, t) {
        return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
    }
    function ts(e, t) {
        return e.contains(t)
    }
    function TG(e, t) {
        return e !== t && e.parentNode === t.parentNode
    }
    function IG(e) {
        let t = [];
        for (let r = 0, {length: n} = e || []; r < n; r++) {
            let {children: i} = e[r]
              , {length: o} = i;
            if (o)
                for (let a = 0; a < o; a++)
                    t.push(i[a])
        }
        return t
    }
    function bG(e=[]) {
        let t = []
          , r = [];
        for (let n = 0, {length: i} = e; n < i; n++) {
            let {parentNode: o} = e[n];
            if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1)
                continue;
            r.push(o);
            let a = o.firstElementChild;
            for (; a != null; )
                e.indexOf(a) === -1 && t.push(a),
                a = a.nextElementSibling
        }
        return t
    }
    function rs(e) {
        return e != null && typeof e == "object" ? e instanceof Element ? pG : gG : null
    }
    var yy, Ja, Ey, pG, gG, my, kr, _y = ce(()=>{
        "use strict";
        yy = ie(wt());
        Ce();
        ({ELEMENT_MATCHES: Ja} = yy.IX2BrowserSupport),
        {IX2_ID_DELIMITER: Ey, HTML_ELEMENT: pG, PLAIN_OBJECT: gG, WF_PAGE: my} = Ie;
        kr = Element.prototype.closest ? (e,t)=>document.documentElement.contains(e) ? e.closest(t) : null : (e,t)=>{
            if (!document.documentElement.contains(e))
                return null;
            let r = e;
            do {
                if (r[Ja] && r[Ja](t))
                    return r;
                r = r.parentNode
            } while (r != null);
            return null
        }
    }
    );
    var ns = u((Bk,Iy)=>{
        var OG = Ze()
          , Ty = Object.create
          , AG = function() {
            function e() {}
            return function(t) {
                if (!OG(t))
                    return {};
                if (Ty)
                    return Ty(t);
                e.prototype = t;
                var r = new e;
                return e.prototype = void 0,
                r
            }
        }();
        Iy.exports = AG
    }
    );
    var ai = u((Wk,by)=>{
        function SG() {}
        by.exports = SG
    }
    );
    var ui = u((kk,Oy)=>{
        var xG = ns()
          , wG = ai();
        function si(e, t) {
            this.__wrapped__ = e,
            this.__actions__ = [],
            this.__chain__ = !!t,
            this.__index__ = 0,
            this.__values__ = void 0
        }
        si.prototype = xG(wG.prototype);
        si.prototype.constructor = si;
        Oy.exports = si
    }
    );
    var wy = u((jk,xy)=>{
        var Ay = Dt()
          , RG = wr()
          , CG = me()
          , Sy = Ay ? Ay.isConcatSpreadable : void 0;
        function NG(e) {
            return CG(e) || RG(e) || !!(Sy && e && e[Sy])
        }
        xy.exports = NG
    }
    );
    var Ny = u((zk,Cy)=>{
        var LG = xn()
          , PG = wy();
        function Ry(e, t, r, n, i) {
            var o = -1
              , a = e.length;
            for (r || (r = PG),
            i || (i = []); ++o < a; ) {
                var s = e[o];
                t > 0 && r(s) ? t > 1 ? Ry(s, t - 1, r, n, i) : LG(i, s) : n || (i[i.length] = s)
            }
            return i
        }
        Cy.exports = Ry
    }
    );
    var Py = u((Kk,Ly)=>{
        var qG = Ny();
        function MG(e) {
            var t = e == null ? 0 : e.length;
            return t ? qG(e, 1) : []
        }
        Ly.exports = MG
    }
    );
    var My = u(($k,qy)=>{
        function DG(e, t, r) {
            switch (r.length) {
            case 0:
                return e.call(t);
            case 1:
                return e.call(t, r[0]);
            case 2:
                return e.call(t, r[0], r[1]);
            case 3:
                return e.call(t, r[0], r[1], r[2])
            }
            return e.apply(t, r)
        }
        qy.exports = DG
    }
    );
    var Gy = u((Yk,Fy)=>{
        var FG = My()
          , Dy = Math.max;
        function GG(e, t, r) {
            return t = Dy(t === void 0 ? e.length - 1 : t, 0),
            function() {
                for (var n = arguments, i = -1, o = Dy(n.length - t, 0), a = Array(o); ++i < o; )
                    a[i] = n[t + i];
                i = -1;
                for (var s = Array(t + 1); ++i < t; )
                    s[i] = n[i];
                return s[t] = r(a),
                FG(e, this, s)
            }
        }
        Fy.exports = GG
    }
    );
    var Uy = u((Qk,Vy)=>{
        function VG(e) {
            return function() {
                return e
            }
        }
        Vy.exports = VG
    }
    );
    var By = u((Zk,Hy)=>{
        var UG = Uy()
          , Xy = Ua()
          , XG = Vn()
          , HG = Xy ? function(e, t) {
            return Xy(e, "toString", {
                configurable: !0,
                enumerable: !1,
                value: UG(t),
                writable: !0
            })
        }
        : XG;
        Hy.exports = HG
    }
    );
    var ky = u((Jk,Wy)=>{
        var BG = 800
          , WG = 16
          , kG = Date.now;
        function jG(e) {
            var t = 0
              , r = 0;
            return function() {
                var n = kG()
                  , i = WG - (n - r);
                if (r = n,
                i > 0) {
                    if (++t >= BG)
                        return arguments[0]
                } else
                    t = 0;
                return e.apply(void 0, arguments)
            }
        }
        Wy.exports = jG
    }
    );
    var zy = u((ej,jy)=>{
        var zG = By()
          , KG = ky()
          , $G = KG(zG);
        jy.exports = $G
    }
    );
    var $y = u((tj,Ky)=>{
        var YG = Py()
          , QG = Gy()
          , ZG = zy();
        function JG(e) {
            return ZG(QG(e, void 0, YG), e + "")
        }
        Ky.exports = JG
    }
    );
    var Zy = u((rj,Qy)=>{
        var Yy = Qo()
          , eV = Yy && new Yy;
        Qy.exports = eV
    }
    );
    var em = u((nj,Jy)=>{
        function tV() {}
        Jy.exports = tV
    }
    );
    var is = u((ij,rm)=>{
        var tm = Zy()
          , rV = em()
          , nV = tm ? function(e) {
            return tm.get(e)
        }
        : rV;
        rm.exports = nV
    }
    );
    var im = u((oj,nm)=>{
        var iV = {};
        nm.exports = iV
    }
    );
    var os = u((aj,am)=>{
        var om = im()
          , oV = Object.prototype
          , aV = oV.hasOwnProperty;
        function sV(e) {
            for (var t = e.name + "", r = om[t], n = aV.call(om, t) ? r.length : 0; n--; ) {
                var i = r[n]
                  , o = i.func;
                if (o == null || o == e)
                    return i.name
            }
            return t
        }
        am.exports = sV
    }
    );
    var li = u((sj,sm)=>{
        var uV = ns()
          , cV = ai()
          , lV = 4294967295;
        function ci(e) {
            this.__wrapped__ = e,
            this.__actions__ = [],
            this.__dir__ = 1,
            this.__filtered__ = !1,
            this.__iteratees__ = [],
            this.__takeCount__ = lV,
            this.__views__ = []
        }
        ci.prototype = uV(cV.prototype);
        ci.prototype.constructor = ci;
        sm.exports = ci
    }
    );
    var cm = u((uj,um)=>{
        function fV(e, t) {
            var r = -1
              , n = e.length;
            for (t || (t = Array(n)); ++r < n; )
                t[r] = e[r];
            return t
        }
        um.exports = fV
    }
    );
    var fm = u((cj,lm)=>{
        var dV = li()
          , pV = ui()
          , gV = cm();
        function vV(e) {
            if (e instanceof dV)
                return e.clone();
            var t = new pV(e.__wrapped__,e.__chain__);
            return t.__actions__ = gV(e.__actions__),
            t.__index__ = e.__index__,
            t.__values__ = e.__values__,
            t
        }
        lm.exports = vV
    }
    );
    var gm = u((lj,pm)=>{
        var hV = li()
          , dm = ui()
          , EV = ai()
          , yV = me()
          , mV = it()
          , _V = fm()
          , TV = Object.prototype
          , IV = TV.hasOwnProperty;
        function fi(e) {
            if (mV(e) && !yV(e) && !(e instanceof hV)) {
                if (e instanceof dm)
                    return e;
                if (IV.call(e, "__wrapped__"))
                    return _V(e)
            }
            return new dm(e)
        }
        fi.prototype = EV.prototype;
        fi.prototype.constructor = fi;
        pm.exports = fi
    }
    );
    var hm = u((fj,vm)=>{
        var bV = li()
          , OV = is()
          , AV = os()
          , SV = gm();
        function xV(e) {
            var t = AV(e)
              , r = SV[t];
            if (typeof r != "function" || !(t in bV.prototype))
                return !1;
            if (e === r)
                return !0;
            var n = OV(r);
            return !!n && e === n[0]
        }
        vm.exports = xV
    }
    );
    var _m = u((dj,mm)=>{
        var Em = ui()
          , wV = $y()
          , RV = is()
          , as = os()
          , CV = me()
          , ym = hm()
          , NV = "Expected a function"
          , LV = 8
          , PV = 32
          , qV = 128
          , MV = 256;
        function DV(e) {
            return wV(function(t) {
                var r = t.length
                  , n = r
                  , i = Em.prototype.thru;
                for (e && t.reverse(); n--; ) {
                    var o = t[n];
                    if (typeof o != "function")
                        throw new TypeError(NV);
                    if (i && !a && as(o) == "wrapper")
                        var a = new Em([],!0)
                }
                for (n = a ? n : r; ++n < r; ) {
                    o = t[n];
                    var s = as(o)
                      , c = s == "wrapper" ? RV(o) : void 0;
                    c && ym(c[0]) && c[1] == (qV | LV | PV | MV) && !c[4].length && c[9] == 1 ? a = a[as(c[0])].apply(a, c[3]) : a = o.length == 1 && ym(o) ? a[s]() : a.thru(o)
                }
                return function() {
                    var f = arguments
                      , p = f[0];
                    if (a && f.length == 1 && CV(p))
                        return a.plant(p).value();
                    for (var d = 0, g = r ? t[d].apply(this, f) : p; ++d < r; )
                        g = t[d].call(this, g);
                    return g
                }
            })
        }
        mm.exports = DV
    }
    );
    var Im = u((pj,Tm)=>{
        var FV = _m()
          , GV = FV();
        Tm.exports = GV
    }
    );
    var Om = u((gj,bm)=>{
        function VV(e, t, r) {
            return e === e && (r !== void 0 && (e = e <= r ? e : r),
            t !== void 0 && (e = e >= t ? e : t)),
            e
        }
        bm.exports = VV
    }
    );
    var Sm = u((vj,Am)=>{
        var UV = Om()
          , ss = Un();
        function XV(e, t, r) {
            return r === void 0 && (r = t,
            t = void 0),
            r !== void 0 && (r = ss(r),
            r = r === r ? r : 0),
            t !== void 0 && (t = ss(t),
            t = t === t ? t : 0),
            UV(ss(e), t, r)
        }
        Am.exports = XV
    }
    );
    var Mm, Dm, Fm, Gm, HV, BV, WV, kV, jV, zV, KV, $V, YV, QV, ZV, JV, eU, tU, rU, Vm, Um, nU, iU, oU, Xm, aU, sU, Hm, uU, us, Bm, xm, wm, Wm, zr, cU, tt, km, lU, Le, We, Kr, jm, cs, Rm, ls, fU, jr, dU, pU, gU, zm, Cm, vU, Nm, hU, EU, yU, Lm, di, pi, Pm, qm, Km, $m = ce(()=>{
        "use strict";
        Mm = ie(Im()),
        Dm = ie(Gn()),
        Fm = ie(Sm());
        Ce();
        fs();
        oi();
        Gm = ie(wt()),
        {MOUSE_CLICK: HV, MOUSE_SECOND_CLICK: BV, MOUSE_DOWN: WV, MOUSE_UP: kV, MOUSE_OVER: jV, MOUSE_OUT: zV, DROPDOWN_CLOSE: KV, DROPDOWN_OPEN: $V, SLIDER_ACTIVE: YV, SLIDER_INACTIVE: QV, TAB_ACTIVE: ZV, TAB_INACTIVE: JV, NAVBAR_CLOSE: eU, NAVBAR_OPEN: tU, MOUSE_MOVE: rU, PAGE_SCROLL_DOWN: Vm, SCROLL_INTO_VIEW: Um, SCROLL_OUT_OF_VIEW: nU, PAGE_SCROLL_UP: iU, SCROLLING_IN_VIEW: oU, PAGE_FINISH: Xm, ECOMMERCE_CART_CLOSE: aU, ECOMMERCE_CART_OPEN: sU, PAGE_START: Hm, PAGE_SCROLL: uU} = He,
        us = "COMPONENT_ACTIVE",
        Bm = "COMPONENT_INACTIVE",
        {COLON_DELIMITER: xm} = Ie,
        {getNamespacedParameterId: wm} = Gm.IX2VanillaUtils,
        Wm = e=>t=>typeof t == "object" && e(t) ? !0 : t,
        zr = Wm(({element: e, nativeEvent: t})=>e === t.target),
        cU = Wm(({element: e, nativeEvent: t})=>e.contains(t.target)),
        tt = (0,
        Mm.default)([zr, cU]),
        km = (e,t)=>{
            if (t) {
                let {ixData: r} = e.getState()
                  , {events: n} = r
                  , i = n[t];
                if (i && !fU[i.eventTypeId])
                    return i
            }
            return null
        }
        ,
        lU = ({store: e, event: t})=>{
            let {action: r} = t
              , {autoStopEventId: n} = r.config;
            return !!km(e, n)
        }
        ,
        Le = ({store: e, event: t, element: r, eventStateKey: n},i)=>{
            let {action: o, id: a} = t
              , {actionListId: s, autoStopEventId: c} = o.config
              , f = km(e, c);
            return f && ar({
                store: e,
                eventId: c,
                eventTarget: r,
                eventStateKey: c + xm + n.split(xm)[1],
                actionListId: (0,
                Dm.default)(f, "action.config.actionListId")
            }),
            ar({
                store: e,
                eventId: a,
                eventTarget: r,
                eventStateKey: n,
                actionListId: s
            }),
            $r({
                store: e,
                eventId: a,
                eventTarget: r,
                eventStateKey: n,
                actionListId: s
            }),
            i
        }
        ,
        We = (e,t)=>(r,n)=>e(r, n) === !0 ? t(r, n) : n,
        Kr = {
            handler: We(tt, Le)
        },
        jm = {
            ...Kr,
            types: [us, Bm].join(" ")
        },
        cs = [{
            target: window,
            types: "resize orientationchange",
            throttle: !0
        }, {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0
        }],
        Rm = "mouseover mouseout",
        ls = {
            types: cs
        },
        fU = {
            PAGE_START: Hm,
            PAGE_FINISH: Xm
        },
        jr = (()=>{
            let e = window.pageXOffset !== void 0
              , r = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
            return ()=>({
                scrollLeft: e ? window.pageXOffset : r.scrollLeft,
                scrollTop: e ? window.pageYOffset : r.scrollTop,
                stiffScrollTop: (0,
                Fm.default)(e ? window.pageYOffset : r.scrollTop, 0, r.scrollHeight - window.innerHeight),
                scrollWidth: r.scrollWidth,
                scrollHeight: r.scrollHeight,
                clientWidth: r.clientWidth,
                clientHeight: r.clientHeight,
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight
            })
        }
        )(),
        dU = (e,t)=>!(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top),
        pU = ({element: e, nativeEvent: t})=>{
            let {type: r, target: n, relatedTarget: i} = t
              , o = e.contains(n);
            if (r === "mouseover" && o)
                return !0;
            let a = e.contains(i);
            return !!(r === "mouseout" && o && a)
        }
        ,
        gU = e=>{
            let {element: t, event: {config: r}} = e
              , {clientWidth: n, clientHeight: i} = jr()
              , o = r.scrollOffsetValue
              , c = r.scrollOffsetUnit === "PX" ? o : i * (o || 0) / 100;
            return dU(t.getBoundingClientRect(), {
                left: 0,
                top: c,
                right: n,
                bottom: i - c
            })
        }
        ,
        zm = e=>(t,r)=>{
            let {type: n} = t.nativeEvent
              , i = [us, Bm].indexOf(n) !== -1 ? n === us : r.isActive
              , o = {
                ...r,
                isActive: i
            };
            return (!r || o.isActive !== r.isActive) && e(t, o) || o
        }
        ,
        Cm = e=>(t,r)=>{
            let n = {
                elementHovered: pU(t)
            };
            return (r ? n.elementHovered !== r.elementHovered : n.elementHovered) && e(t, n) || n
        }
        ,
        vU = e=>(t,r)=>{
            let n = {
                ...r,
                elementVisible: gU(t)
            };
            return (r ? n.elementVisible !== r.elementVisible : n.elementVisible) && e(t, n) || n
        }
        ,
        Nm = e=>(t,r={})=>{
            let {stiffScrollTop: n, scrollHeight: i, innerHeight: o} = jr()
              , {event: {config: a, eventTypeId: s}} = t
              , {scrollOffsetValue: c, scrollOffsetUnit: f} = a
              , p = f === "PX"
              , d = i - o
              , g = Number((n / d).toFixed(2));
            if (r && r.percentTop === g)
                return r;
            let y = (p ? c : o * (c || 0) / 100) / d, _, m, R = 0;
            r && (_ = g > r.percentTop,
            m = r.scrollingDown !== _,
            R = m ? g : r.anchorTop);
            let A = s === Vm ? g >= R + y : g <= R - y
              , S = {
                ...r,
                percentTop: g,
                inBounds: A,
                anchorTop: R,
                scrollingDown: _
            };
            return r && A && (m || S.inBounds !== r.inBounds) && e(t, S) || S
        }
        ,
        hU = (e,t)=>e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom,
        EU = e=>(t,r)=>{
            let n = {
                finished: document.readyState === "complete"
            };
            return n.finished && !(r && r.finshed) && e(t),
            n
        }
        ,
        yU = e=>(t,r)=>{
            let n = {
                started: !0
            };
            return r || e(t),
            n
        }
        ,
        Lm = e=>(t,r={
            clickCount: 0
        })=>{
            let n = {
                clickCount: r.clickCount % 2 + 1
            };
            return n.clickCount !== r.clickCount && e(t, n) || n
        }
        ,
        di = (e=!0)=>({
            ...jm,
            handler: We(e ? tt : zr, zm((t,r)=>r.isActive ? Kr.handler(t, r) : r))
        }),
        pi = (e=!0)=>({
            ...jm,
            handler: We(e ? tt : zr, zm((t,r)=>r.isActive ? r : Kr.handler(t, r)))
        }),
        Pm = {
            ...ls,
            handler: vU((e,t)=>{
                let {elementVisible: r} = t
                  , {event: n, store: i} = e
                  , {ixData: o} = i.getState()
                  , {events: a} = o;
                return !a[n.action.config.autoStopEventId] && t.triggered ? t : n.eventTypeId === Um === r ? (Le(e),
                {
                    ...t,
                    triggered: !0
                }) : t
            }
            )
        },
        qm = .05,
        Km = {
            [YV]: di(),
            [QV]: pi(),
            [$V]: di(),
            [KV]: pi(),
            [tU]: di(!1),
            [eU]: pi(!1),
            [ZV]: di(),
            [JV]: pi(),
            [sU]: {
                types: "ecommerce-cart-open",
                handler: We(tt, Le)
            },
            [aU]: {
                types: "ecommerce-cart-close",
                handler: We(tt, Le)
            },
            [HV]: {
                types: "click",
                handler: We(tt, Lm((e,{clickCount: t})=>{
                    lU(e) ? t === 1 && Le(e) : Le(e)
                }
                ))
            },
            [BV]: {
                types: "click",
                handler: We(tt, Lm((e,{clickCount: t})=>{
                    t === 2 && Le(e)
                }
                ))
            },
            [WV]: {
                ...Kr,
                types: "mousedown"
            },
            [kV]: {
                ...Kr,
                types: "mouseup"
            },
            [jV]: {
                types: Rm,
                handler: We(tt, Cm((e,t)=>{
                    t.elementHovered && Le(e)
                }
                ))
            },
            [zV]: {
                types: Rm,
                handler: We(tt, Cm((e,t)=>{
                    t.elementHovered || Le(e)
                }
                ))
            },
            [rU]: {
                types: "mousemove mouseout scroll",
                handler: ({store: e, element: t, eventConfig: r, nativeEvent: n, eventStateKey: i},o={
                    clientX: 0,
                    clientY: 0,
                    pageX: 0,
                    pageY: 0
                })=>{
                    let {basedOn: a, selectedAxis: s, continuousParameterGroupId: c, reverse: f, restingState: p=0} = r
                      , {clientX: d=o.clientX, clientY: g=o.clientY, pageX: y=o.pageX, pageY: _=o.pageY} = n
                      , m = s === "X_AXIS"
                      , R = n.type === "mouseout"
                      , A = p / 100
                      , S = c
                      , O = !1;
                    switch (a) {
                    case Qe.VIEWPORT:
                        {
                            A = m ? Math.min(d, window.innerWidth) / window.innerWidth : Math.min(g, window.innerHeight) / window.innerHeight;
                            break
                        }
                    case Qe.PAGE:
                        {
                            let {scrollLeft: L, scrollTop: P, scrollWidth: x, scrollHeight: V} = jr();
                            A = m ? Math.min(L + y, x) / x : Math.min(P + _, V) / V;
                            break
                        }
                    case Qe.ELEMENT:
                    default:
                        {
                            S = wm(i, c);
                            let L = n.type.indexOf("mouse") === 0;
                            if (L && tt({
                                element: t,
                                nativeEvent: n
                            }) !== !0)
                                break;
                            let P = t.getBoundingClientRect()
                              , {left: x, top: V, width: X, height: H} = P;
                            if (!L && !hU({
                                left: d,
                                top: g
                            }, P))
                                break;
                            O = !0,
                            A = m ? (d - x) / X : (g - V) / H;
                            break
                        }
                    }
                    return R && (A > 1 - qm || A < qm) && (A = Math.round(A)),
                    (a !== Qe.ELEMENT || O || O !== o.elementHovered) && (A = f ? 1 - A : A,
                    e.dispatch(ir(S, A))),
                    {
                        elementHovered: O,
                        clientX: d,
                        clientY: g,
                        pageX: y,
                        pageY: _
                    }
                }
            },
            [uU]: {
                types: cs,
                handler: ({store: e, eventConfig: t})=>{
                    let {continuousParameterGroupId: r, reverse: n} = t
                      , {scrollTop: i, scrollHeight: o, clientHeight: a} = jr()
                      , s = i / (o - a);
                    s = n ? 1 - s : s,
                    e.dispatch(ir(r, s))
                }
            },
            [oU]: {
                types: cs,
                handler: ({element: e, store: t, eventConfig: r, eventStateKey: n},i={
                    scrollPercent: 0
                })=>{
                    let {scrollLeft: o, scrollTop: a, scrollWidth: s, scrollHeight: c, clientHeight: f} = jr()
                      , {basedOn: p, selectedAxis: d, continuousParameterGroupId: g, startsEntering: y, startsExiting: _, addEndOffset: m, addStartOffset: R, addOffsetValue: A=0, endOffsetValue: S=0} = r
                      , O = d === "X_AXIS";
                    if (p === Qe.VIEWPORT) {
                        let L = O ? o / s : a / c;
                        return L !== i.scrollPercent && t.dispatch(ir(g, L)),
                        {
                            scrollPercent: L
                        }
                    } else {
                        let L = wm(n, g)
                          , P = e.getBoundingClientRect()
                          , x = (R ? A : 0) / 100
                          , V = (m ? S : 0) / 100;
                        x = y ? x : 1 - x,
                        V = _ ? V : 1 - V;
                        let X = P.top + Math.min(P.height * x, f)
                          , j = P.top + P.height * V - X
                          , Q = Math.min(f + j, c)
                          , T = Math.min(Math.max(0, f - X), Q) / Q;
                        return T !== i.scrollPercent && t.dispatch(ir(L, T)),
                        {
                            scrollPercent: T
                        }
                    }
                }
            },
            [Um]: Pm,
            [nU]: Pm,
            [Vm]: {
                ...ls,
                handler: Nm((e,t)=>{
                    t.scrollingDown && Le(e)
                }
                )
            },
            [iU]: {
                ...ls,
                handler: Nm((e,t)=>{
                    t.scrollingDown || Le(e)
                }
                )
            },
            [Xm]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: We(zr, EU(Le))
            },
            [Hm]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: We(zr, yU(Le))
            }
        }
    }
    );
    var d_ = {};
    Re(d_, {
        observeRequests: ()=>GU,
        startActionGroup: ()=>$r,
        startEngine: ()=>mi,
        stopActionGroup: ()=>ar,
        stopAllActionGroups: ()=>c_,
        stopEngine: ()=>_i
    });
    function GU(e) {
        Rt({
            store: e,
            select: ({ixRequest: t})=>t.preview,
            onChange: XU
        }),
        Rt({
            store: e,
            select: ({ixRequest: t})=>t.playback,
            onChange: HU
        }),
        Rt({
            store: e,
            select: ({ixRequest: t})=>t.stop,
            onChange: BU
        }),
        Rt({
            store: e,
            select: ({ixRequest: t})=>t.clear,
            onChange: WU
        })
    }
    function VU(e) {
        Rt({
            store: e,
            select: ({ixSession: t})=>t.mediaQueryKey,
            onChange: ()=>{
                _i(e),
                o_({
                    store: e,
                    elementApi: xe
                }),
                mi({
                    store: e,
                    allowEvents: !0
                }),
                a_()
            }
        })
    }
    function UU(e, t) {
        let r = Rt({
            store: e,
            select: ({ixSession: n})=>n.tick,
            onChange: n=>{
                t(n),
                r()
            }
        })
    }
    function XU({rawData: e, defer: t}, r) {
        let n = ()=>{
            mi({
                store: r,
                rawData: e,
                allowEvents: !0
            }),
            a_()
        }
        ;
        t ? setTimeout(n, 0) : n()
    }
    function a_() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
    }
    function HU(e, t) {
        let {actionTypeId: r, actionListId: n, actionItemId: i, eventId: o, allowEvents: a, immediate: s, testManual: c, verbose: f=!0} = e
          , {rawData: p} = e;
        if (n && i && p && s) {
            let d = p.actionLists[n];
            d && (p = xU({
                actionList: d,
                actionItemId: i,
                rawData: p
            }))
        }
        if (mi({
            store: t,
            rawData: p,
            allowEvents: a,
            testManual: c
        }),
        n && r === qe.GENERAL_START_ACTION || ds(r)) {
            ar({
                store: t,
                actionListId: n
            }),
            u_({
                store: t,
                actionListId: n,
                eventId: o
            });
            let d = $r({
                store: t,
                eventId: o,
                actionListId: n,
                immediate: s,
                verbose: f
            });
            f && d && t.dispatch(or({
                actionListId: n,
                isPlaying: !s
            }))
        }
    }
    function BU({actionListId: e}, t) {
        e ? ar({
            store: t,
            actionListId: e
        }) : c_({
            store: t
        }),
        _i(t)
    }
    function WU(e, t) {
        _i(t),
        o_({
            store: t,
            elementApi: xe
        })
    }
    function mi({store: e, rawData: t, allowEvents: r, testManual: n}) {
        let {ixSession: i} = e.getState();
        t && e.dispatch(Ba(t)),
        i.active || (e.dispatch(Wa({
            hasBoundaryNodes: !!document.querySelector(vi),
            reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
        })),
        r && (YU(e),
        kU(),
        e.getState().ixSession.hasDefinedMediaQueries && VU(e)),
        e.dispatch(ka()),
        jU(e, n))
    }
    function kU() {
        let {documentElement: e} = document;
        e.className.indexOf(Ym) === -1 && (e.className += ` ${Ym}`)
    }
    function jU(e, t) {
        let r = n=>{
            let {ixSession: i, ixParameters: o} = e.getState();
            i.active && (e.dispatch(ni(n, o)),
            t ? UU(e, r) : requestAnimationFrame(r))
        }
        ;
        r(window.performance.now())
    }
    function _i(e) {
        let {ixSession: t} = e.getState();
        if (t.active) {
            let {eventListeners: r} = t;
            r.forEach(zU),
            NU(),
            e.dispatch(ja())
        }
    }
    function zU({target: e, listenerParams: t}) {
        e.removeEventListener.apply(e, t)
    }
    function KU({store: e, eventStateKey: t, eventTarget: r, eventId: n, eventConfig: i, actionListId: o, parameterGroup: a, smoothing: s, restingValue: c}) {
        let {ixData: f, ixSession: p} = e.getState()
          , {events: d} = f
          , g = d[n]
          , {eventTypeId: y} = g
          , _ = {}
          , m = {}
          , R = []
          , {continuousActionGroups: A} = a
          , {id: S} = a;
        wU(y, i) && (S = RU(t, S));
        let O = p.hasBoundaryNodes && r ? kr(r, vi) : null;
        A.forEach(L=>{
            let {keyframe: P, actionItems: x} = L;
            x.forEach(V=>{
                let {actionTypeId: X} = V
                  , {target: H} = V.config;
                if (!H)
                    return;
                let j = H.boundaryMode ? O : null
                  , Q = LU(H) + ps + X;
                if (m[Q] = $U(m[Q], P, V),
                !_[Q]) {
                    _[Q] = !0;
                    let {config: N} = V;
                    hi({
                        config: N,
                        event: g,
                        eventTarget: r,
                        elementRoot: j,
                        elementApi: xe
                    }).forEach(T=>{
                        R.push({
                            element: T,
                            key: Q
                        })
                    }
                    )
                }
            }
            )
        }
        ),
        R.forEach(({element: L, key: P})=>{
            let x = m[P]
              , V = (0,
            ut.default)(x, "[0].actionItems[0]", {})
              , {actionTypeId: X} = V
              , H = yi(X) ? vs(X)(L, V) : null
              , j = gs({
                element: L,
                actionItem: V,
                elementApi: xe
            }, H);
            hs({
                store: e,
                element: L,
                eventId: n,
                actionListId: o,
                actionItem: V,
                destination: j,
                continuous: !0,
                parameterId: S,
                actionGroups: x,
                smoothing: s,
                restingValue: c,
                pluginInstance: H
            })
        }
        )
    }
    function $U(e=[], t, r) {
        let n = [...e], i;
        return n.some((o,a)=>o.keyframe === t ? (i = a,
        !0) : !1),
        i == null && (i = n.length,
        n.push({
            keyframe: t,
            actionItems: []
        })),
        n[i].actionItems.push(r),
        n
    }
    function YU(e) {
        let {ixData: t} = e.getState()
          , {eventTypeMap: r} = t;
        s_(e),
        (0,
        sr.default)(r, (i,o)=>{
            let a = Km[o];
            if (!a) {
                console.warn(`IX2 event type not configured: ${o}`);
                return
            }
            rX({
                logic: a,
                store: e,
                events: i
            })
        }
        );
        let {ixSession: n} = e.getState();
        n.eventListeners.length && ZU(e)
    }
    function ZU(e) {
        let t = ()=>{
            s_(e)
        }
        ;
        QU.forEach(r=>{
            window.addEventListener(r, t),
            e.dispatch(ri(window, [r, t]))
        }
        ),
        t()
    }
    function s_(e) {
        let {ixSession: t, ixData: r} = e.getState()
          , n = window.innerWidth;
        if (n !== t.viewportWidth) {
            let {mediaQueries: i} = r;
            e.dispatch(Qa({
                width: n,
                mediaQueries: i
            }))
        }
    }
    function rX({logic: e, store: t, events: r}) {
        nX(r);
        let {types: n, handler: i} = e
          , {ixData: o} = t.getState()
          , {actionLists: a} = o
          , s = JU(r, tX);
        if (!(0,
        Jm.default)(s))
            return;
        (0,
        sr.default)(s, (d,g)=>{
            let y = r[g]
              , {action: _, id: m, mediaQueries: R=o.mediaQueryKeys} = y
              , {actionListId: A} = _.config;
            PU(R, o.mediaQueryKeys) || t.dispatch(Za()),
            _.actionTypeId === qe.GENERAL_CONTINUOUS_ACTION && (Array.isArray(y.config) ? y.config : [y.config]).forEach(O=>{
                let {continuousParameterGroupId: L} = O
                  , P = (0,
                ut.default)(a, `${A}.continuousParameterGroups`, [])
                  , x = (0,
                Zm.default)(P, ({id: H})=>H === L)
                  , V = (O.smoothing || 0) / 100
                  , X = (O.restingState || 0) / 100;
                x && d.forEach((H,j)=>{
                    let Q = m + ps + j;
                    KU({
                        store: t,
                        eventStateKey: Q,
                        eventTarget: H,
                        eventId: m,
                        eventConfig: O,
                        actionListId: A,
                        parameterGroup: x,
                        smoothing: V,
                        restingValue: X
                    })
                }
                )
            }
            ),
            (_.actionTypeId === qe.GENERAL_START_ACTION || ds(_.actionTypeId)) && u_({
                store: t,
                actionListId: A,
                eventId: m
            })
        }
        );
        let c = d=>{
            let {ixSession: g} = t.getState();
            eX(s, (y,_,m)=>{
                let R = r[_]
                  , A = g.eventState[m]
                  , {action: S, mediaQueries: O=o.mediaQueryKeys} = R;
                if (!Ei(O, g.mediaQueryKey))
                    return;
                let L = (P={})=>{
                    let x = i({
                        store: t,
                        element: y,
                        event: R,
                        eventConfig: P,
                        nativeEvent: d,
                        eventStateKey: m
                    }, A);
                    qU(x, A) || t.dispatch(za(m, x))
                }
                ;
                S.actionTypeId === qe.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(R.config) ? R.config : [R.config]).forEach(L) : L()
            }
            )
        }
          , f = (0,
        n_.default)(c, FU)
          , p = ({target: d=document, types: g, throttle: y})=>{
            g.split(" ").filter(Boolean).forEach(_=>{
                let m = y ? f : c;
                d.addEventListener(_, m),
                t.dispatch(ri(d, [_, m]))
            }
            )
        }
        ;
        Array.isArray(n) ? n.forEach(p) : typeof n == "string" && p(e)
    }
    function nX(e) {
        if (!DU)
            return;
        let t = {}
          , r = "";
        for (let n in e) {
            let {eventTypeId: i, target: o} = e[n]
              , a = es(o);
            t[a] || (i === He.MOUSE_CLICK || i === He.MOUSE_SECOND_CLICK) && (t[a] = !0,
            r += a + "{cursor: pointer;touch-action: manipulation;}")
        }
        if (r) {
            let n = document.createElement("style");
            n.textContent = r,
            document.body.appendChild(n)
        }
    }
    function u_({store: e, actionListId: t, eventId: r}) {
        let {ixData: n, ixSession: i} = e.getState()
          , {actionLists: o, events: a} = n
          , s = a[r]
          , c = o[t];
        if (c && c.useFirstGroupAsInitialState) {
            let f = (0,
            ut.default)(c, "actionItemGroups[0].actionItems", [])
              , p = (0,
            ut.default)(s, "mediaQueries", n.mediaQueryKeys);
            if (!Ei(p, i.mediaQueryKey))
                return;
            f.forEach(d=>{
                let {config: g, actionTypeId: y} = d
                  , _ = g?.target?.useEventTarget === !0 && g?.target?.objectId == null ? {
                    target: s.target,
                    targets: s.targets
                } : g
                  , m = hi({
                    config: _,
                    event: s,
                    elementApi: xe
                })
                  , R = yi(y);
                m.forEach(A=>{
                    let S = R ? vs(y)(A, d) : null;
                    hs({
                        destination: gs({
                            element: A,
                            actionItem: d,
                            elementApi: xe
                        }, S),
                        immediate: !0,
                        store: e,
                        element: A,
                        eventId: r,
                        actionItem: d,
                        actionListId: t,
                        pluginInstance: S
                    })
                }
                )
            }
            )
        }
    }
    function c_({store: e}) {
        let {ixInstances: t} = e.getState();
        (0,
        sr.default)(t, r=>{
            if (!r.continuous) {
                let {actionListId: n, verbose: i} = r;
                Es(r, e),
                i && e.dispatch(or({
                    actionListId: n,
                    isPlaying: !1
                }))
            }
        }
        )
    }
    function ar({store: e, eventId: t, eventTarget: r, eventStateKey: n, actionListId: i}) {
        let {ixInstances: o, ixSession: a} = e.getState()
          , s = a.hasBoundaryNodes && r ? kr(r, vi) : null;
        (0,
        sr.default)(o, c=>{
            let f = (0,
            ut.default)(c, "actionItem.config.target.boundaryMode")
              , p = n ? c.eventStateKey === n : !0;
            if (c.actionListId === i && c.eventId === t && p) {
                if (s && f && !ts(s, c.element))
                    return;
                Es(c, e),
                c.verbose && e.dispatch(or({
                    actionListId: i,
                    isPlaying: !1
                }))
            }
        }
        )
    }
    function $r({store: e, eventId: t, eventTarget: r, eventStateKey: n, actionListId: i, groupIndex: o=0, immediate: a, verbose: s}) {
        let {ixData: c, ixSession: f} = e.getState()
          , {events: p} = c
          , d = p[t] || {}
          , {mediaQueries: g=c.mediaQueryKeys} = d
          , y = (0,
        ut.default)(c, `actionLists.${i}`, {})
          , {actionItemGroups: _, useFirstGroupAsInitialState: m} = y;
        if (!_ || !_.length)
            return !1;
        o >= _.length && (0,
        ut.default)(d, "config.loop") && (o = 0),
        o === 0 && m && o++;
        let A = (o === 0 || o === 1 && m) && ds(d.action?.actionTypeId) ? d.config.delay : void 0
          , S = (0,
        ut.default)(_, [o, "actionItems"], []);
        if (!S.length || !Ei(g, f.mediaQueryKey))
            return !1;
        let O = f.hasBoundaryNodes && r ? kr(r, vi) : null
          , L = OU(S)
          , P = !1;
        return S.forEach((x,V)=>{
            let {config: X, actionTypeId: H} = x
              , j = yi(H)
              , {target: Q} = X;
            if (!Q)
                return;
            let N = Q.boundaryMode ? O : null;
            hi({
                config: X,
                event: d,
                eventTarget: r,
                elementRoot: N,
                elementApi: xe
            }).forEach((w,U)=>{
                let F = j ? vs(H)(w, x) : null
                  , Z = j ? MU(H)(w, x) : null;
                P = !0;
                let Y = L === V && U === 0
                  , C = AU({
                    element: w,
                    actionItem: x
                })
                  , G = gs({
                    element: w,
                    actionItem: x,
                    elementApi: xe
                }, F);
                hs({
                    store: e,
                    element: w,
                    actionItem: x,
                    eventId: t,
                    eventTarget: r,
                    eventStateKey: n,
                    actionListId: i,
                    groupIndex: o,
                    isCarrier: Y,
                    computedStyle: C,
                    destination: G,
                    immediate: a,
                    verbose: s,
                    pluginInstance: F,
                    pluginDuration: Z,
                    instanceDelay: A
                })
            }
            )
        }
        ),
        P
    }
    function hs(e) {
        let {store: t, computedStyle: r, ...n} = e, {element: i, actionItem: o, immediate: a, pluginInstance: s, continuous: c, restingValue: f, eventId: p} = n, d = !c, g = IU(), {ixElements: y, ixSession: _, ixData: m} = t.getState(), R = TU(y, i), {refState: A} = y[R] || {}, S = rs(i), O = _.reducedMotion && Go[o.actionTypeId], L;
        if (O && c)
            switch (m.events[p]?.eventTypeId) {
            case He.MOUSE_MOVE:
            case He.MOUSE_MOVE_IN_VIEWPORT:
                L = f;
                break;
            default:
                L = .5;
                break
            }
        let P = SU(i, A, r, o, xe, s);
        if (t.dispatch(Ka({
            instanceId: g,
            elementId: R,
            origin: P,
            refType: S,
            skipMotion: O,
            skipToValue: L,
            ...n
        })),
        l_(document.body, "ix2-animation-started", g),
        a) {
            iX(t, g);
            return
        }
        Rt({
            store: t,
            select: ({ixInstances: x})=>x[g],
            onChange: f_
        }),
        d && t.dispatch(ii(g, _.tick))
    }
    function Es(e, t) {
        l_(document.body, "ix2-animation-stopping", {
            instanceId: e.id,
            state: t.getState()
        });
        let {elementId: r, actionItem: n} = e
          , {ixElements: i} = t.getState()
          , {ref: o, refType: a} = i[r] || {};
        a === i_ && CU(o, n, xe),
        t.dispatch($a(e.id))
    }
    function l_(e, t, r) {
        let n = document.createEvent("CustomEvent");
        n.initCustomEvent(t, !0, !0, r),
        e.dispatchEvent(n)
    }
    function iX(e, t) {
        let {ixParameters: r} = e.getState();
        e.dispatch(ii(t, 0)),
        e.dispatch(ni(performance.now(), r));
        let {ixInstances: n} = e.getState();
        f_(n[t], e)
    }
    function f_(e, t) {
        let {active: r, continuous: n, complete: i, elementId: o, actionItem: a, actionTypeId: s, renderType: c, current: f, groupIndex: p, eventId: d, eventTarget: g, eventStateKey: y, actionListId: _, isCarrier: m, styleProp: R, verbose: A, pluginInstance: S} = e
          , {ixData: O, ixSession: L} = t.getState()
          , {events: P} = O
          , x = P[d] || {}
          , {mediaQueries: V=O.mediaQueryKeys} = x;
        if (Ei(V, L.mediaQueryKey) && (n || r || i)) {
            if (f || c === _U && i) {
                t.dispatch(Ya(o, s, f, a));
                let {ixElements: X} = t.getState()
                  , {ref: H, refType: j, refState: Q} = X[o] || {}
                  , N = Q && Q[s];
                (j === i_ || yi(s)) && bU(H, Q, N, d, a, R, xe, c, S)
            }
            if (i) {
                if (m) {
                    let X = $r({
                        store: t,
                        eventId: d,
                        eventTarget: g,
                        eventStateKey: y,
                        actionListId: _,
                        groupIndex: p + 1,
                        verbose: A
                    });
                    A && !X && t.dispatch(or({
                        actionListId: _,
                        isPlaying: !1
                    }))
                }
                Es(e, t)
            }
        }
    }
    var Zm, ut, Jm, e_, t_, r_, sr, n_, gi, mU, ds, ps, vi, i_, _U, Ym, hi, TU, gs, Rt, IU, bU, o_, OU, AU, SU, xU, wU, RU, Ei, CU, NU, LU, PU, qU, yi, vs, MU, Qm, DU, FU, QU, JU, eX, tX, fs = ce(()=>{
        "use strict";
        Zm = ie(pa()),
        ut = ie(Gn()),
        Jm = ie(AE()),
        e_ = ie(QE()),
        t_ = ie(JE()),
        r_ = ie(ty()),
        sr = ie(sy()),
        n_ = ie(gy());
        Ce();
        gi = ie(wt());
        oi();
        _y();
        $m();
        mU = Object.keys(Do),
        ds = e=>mU.includes(e),
        {COLON_DELIMITER: ps, BOUNDARY_SELECTOR: vi, HTML_ELEMENT: i_, RENDER_GENERAL: _U, W_MOD_IX: Ym} = Ie,
        {getAffectedElements: hi, getElementId: TU, getDestinationValues: gs, observeStore: Rt, getInstanceId: IU, renderHTMLElement: bU, clearAllStyles: o_, getMaxDurationItemIndex: OU, getComputedStyle: AU, getInstanceOrigin: SU, reduceListToGroup: xU, shouldNamespaceEventParameter: wU, getNamespacedParameterId: RU, shouldAllowMediaQuery: Ei, cleanupHTMLElement: CU, clearObjectCache: NU, stringifyTarget: LU, mediaQueriesEqual: PU, shallowEqual: qU} = gi.IX2VanillaUtils,
        {isPluginType: yi, createPluginInstance: vs, getPluginDuration: MU} = gi.IX2VanillaPlugins,
        Qm = navigator.userAgent,
        DU = Qm.match(/iPad/i) || Qm.match(/iPhone/),
        FU = 12;
        QU = ["resize", "orientationchange"];
        JU = (e,t)=>(0,
        e_.default)((0,
        r_.default)(e, t), t_.default),
        eX = (e,t)=>{
            (0,
            sr.default)(e, (r,n)=>{
                r.forEach((i,o)=>{
                    let a = n + ps + o;
                    t(i, n, a)
                }
                )
            }
            )
        }
        ,
        tX = e=>{
            let t = {
                target: e.target,
                targets: e.targets
            };
            return hi({
                config: t,
                elementApi: xe
            })
        }
    }
    );
    var g_ = u(ct=>{
        "use strict";
        var oX = on().default
          , aX = $s().default;
        Object.defineProperty(ct, "__esModule", {
            value: !0
        });
        ct.actions = void 0;
        ct.destroy = p_;
        ct.init = fX;
        ct.setEnv = lX;
        ct.store = void 0;
        ql();
        var sX = qo()
          , uX = aX((aE(),
        ze(oE)))
          , ys = (fs(),
        ze(d_))
          , cX = oX((oi(),
        ze(hy)));
        ct.actions = cX;
        var ms = ct.store = (0,
        sX.createStore)(uX.default);
        function lX(e) {
            e() && (0,
            ys.observeRequests)(ms)
        }
        function fX(e) {
            p_(),
            (0,
            ys.startEngine)({
                store: ms,
                rawData: e,
                allowEvents: !0
            })
        }
        function p_() {
            (0,
            ys.stopEngine)(ms)
        }
    }
    );
    var y_ = u((Oj,E_)=>{
        "use strict";
        var v_ = rt()
          , h_ = g_();
        h_.setEnv(v_.env);
        v_.define("ix2", E_.exports = function() {
            return h_
        }
        )
    }
    );
    var __ = u((Aj,m_)=>{
        "use strict";
        var ur = rt();
        ur.define("links", m_.exports = function(e, t) {
            var r = {}, n = e(window), i, o = ur.env(), a = window.location, s = document.createElement("a"), c = "w--current", f = /index\.(html|php)$/, p = /\/$/, d, g;
            r.ready = r.design = r.preview = y;
            function y() {
                i = o && ur.env("design"),
                g = ur.env("slug") || a.pathname || "",
                ur.scroll.off(m),
                d = [];
                for (var A = document.links, S = 0; S < A.length; ++S)
                    _(A[S]);
                d.length && (ur.scroll.on(m),
                m())
            }
            function _(A) {
                var S = i && A.getAttribute("href-disabled") || A.getAttribute("href");
                if (s.href = S,
                !(S.indexOf(":") >= 0)) {
                    var O = e(A);
                    if (s.hash.length > 1 && s.host + s.pathname === a.host + a.pathname) {
                        if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash))
                            return;
                        var L = e(s.hash);
                        L.length && d.push({
                            link: O,
                            sec: L,
                            active: !1
                        });
                        return
                    }
                    if (!(S === "#" || S === "")) {
                        var P = s.href === a.href || S === g || f.test(S) && p.test(g);
                        R(O, c, P)
                    }
                }
            }
            function m() {
                var A = n.scrollTop()
                  , S = n.height();
                t.each(d, function(O) {
                    var L = O.link
                      , P = O.sec
                      , x = P.offset().top
                      , V = P.outerHeight()
                      , X = S * .5
                      , H = P.is(":visible") && x + V - X >= A && x + X <= A + S;
                    O.active !== H && (O.active = H,
                    R(L, c, H))
                })
            }
            function R(A, S, O) {
                var L = A.hasClass(S);
                O && L || !O && !L || (O ? A.addClass(S) : A.removeClass(S))
            }
            return r
        }
        )
    }
    );
    var I_ = u((Sj,T_)=>{
        "use strict";
        var Ti = rt();
        Ti.define("scroll", T_.exports = function(e) {
            var t = {
                WF_CLICK_EMPTY: "click.wf-empty-link",
                WF_CLICK_SCROLL: "click.wf-scroll"
            }
              , r = window.location
              , n = _() ? null : window.history
              , i = e(window)
              , o = e(document)
              , a = e(document.body)
              , s = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(N) {
                window.setTimeout(N, 15)
            }
              , c = Ti.env("editor") ? ".w-editor-body" : "body"
              , f = "header, " + c + " > .header, " + c + " > .w-nav:not([data-no-scroll])"
              , p = 'a[href="#"]'
              , d = 'a[href*="#"]:not(.w-tab-link):not(' + p + ")"
              , g = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'
              , y = document.createElement("style");
            y.appendChild(document.createTextNode(g));
            function _() {
                try {
                    return !!window.frameElement
                } catch {
                    return !0
                }
            }
            var m = /^#[a-zA-Z0-9][\w:.-]*$/;
            function R(N) {
                return m.test(N.hash) && N.host + N.pathname === r.host + r.pathname
            }
            let A = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");
            function S() {
                return document.body.getAttribute("data-wf-scroll-motion") === "none" || A.matches
            }
            function O(N, T) {
                var w;
                switch (T) {
                case "add":
                    w = N.attr("tabindex"),
                    w ? N.attr("data-wf-tabindex-swap", w) : N.attr("tabindex", "-1");
                    break;
                case "remove":
                    w = N.attr("data-wf-tabindex-swap"),
                    w ? (N.attr("tabindex", w),
                    N.removeAttr("data-wf-tabindex-swap")) : N.removeAttr("tabindex");
                    break
                }
                N.toggleClass("wf-force-outline-none", T === "add")
            }
            function L(N) {
                var T = N.currentTarget;
                if (!(Ti.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(T.className))) {
                    var w = R(T) ? T.hash : "";
                    if (w !== "") {
                        var U = e(w);
                        U.length && (N && (N.preventDefault(),
                        N.stopPropagation()),
                        P(w, N),
                        window.setTimeout(function() {
                            x(U, function() {
                                O(U, "add"),
                                U.get(0).focus({
                                    preventScroll: !0
                                }),
                                O(U, "remove")
                            })
                        }, N ? 0 : 300))
                    }
                }
            }
            function P(N) {
                if (r.hash !== N && n && n.pushState && !(Ti.env.chrome && r.protocol === "file:")) {
                    var T = n.state && n.state.hash;
                    T !== N && n.pushState({
                        hash: N
                    }, "", N)
                }
            }
            function x(N, T) {
                var w = i.scrollTop()
                  , U = V(N);
                if (w !== U) {
                    var F = X(N, w, U)
                      , Z = Date.now()
                      , Y = function() {
                        var C = Date.now() - Z;
                        window.scroll(0, H(w, U, C, F)),
                        C <= F ? s(Y) : typeof T == "function" && T()
                    };
                    s(Y)
                }
            }
            function V(N) {
                var T = e(f)
                  , w = T.css("position") === "fixed" ? T.outerHeight() : 0
                  , U = N.offset().top - w;
                if (N.data("scroll") === "mid") {
                    var F = i.height() - w
                      , Z = N.outerHeight();
                    Z < F && (U -= Math.round((F - Z) / 2))
                }
                return U
            }
            function X(N, T, w) {
                if (S())
                    return 0;
                var U = 1;
                return a.add(N).each(function(F, Z) {
                    var Y = parseFloat(Z.getAttribute("data-scroll-time"));
                    !isNaN(Y) && Y >= 0 && (U = Y)
                }),
                (472.143 * Math.log(Math.abs(T - w) + 125) - 2e3) * U
            }
            function H(N, T, w, U) {
                return w > U ? T : N + (T - N) * j(w / U)
            }
            function j(N) {
                return N < .5 ? 4 * N * N * N : (N - 1) * (2 * N - 2) * (2 * N - 2) + 1
            }
            function Q() {
                var {WF_CLICK_EMPTY: N, WF_CLICK_SCROLL: T} = t;
                o.on(T, d, L),
                o.on(N, p, function(w) {
                    w.preventDefault()
                }),
                document.head.insertBefore(y, document.head.firstChild)
            }
            return {
                ready: Q
            }
        }
        )
    }
    );
    var O_ = u((xj,b_)=>{
        "use strict";
        var dX = rt();
        dX.define("touch", b_.exports = function(e) {
            var t = {}
              , r = window.getSelection;
            e.event.special.tap = {
                bindType: "click",
                delegateType: "click"
            },
            t.init = function(o) {
                return o = typeof o == "string" ? e(o).get(0) : o,
                o ? new n(o) : null
            }
            ;
            function n(o) {
                var a = !1, s = !1, c = Math.min(Math.round(window.innerWidth * .04), 40), f, p;
                o.addEventListener("touchstart", d, !1),
                o.addEventListener("touchmove", g, !1),
                o.addEventListener("touchend", y, !1),
                o.addEventListener("touchcancel", _, !1),
                o.addEventListener("mousedown", d, !1),
                o.addEventListener("mousemove", g, !1),
                o.addEventListener("mouseup", y, !1),
                o.addEventListener("mouseout", _, !1);
                function d(R) {
                    var A = R.touches;
                    A && A.length > 1 || (a = !0,
                    A ? (s = !0,
                    f = A[0].clientX) : f = R.clientX,
                    p = f)
                }
                function g(R) {
                    if (a) {
                        if (s && R.type === "mousemove") {
                            R.preventDefault(),
                            R.stopPropagation();
                            return
                        }
                        var A = R.touches
                          , S = A ? A[0].clientX : R.clientX
                          , O = S - p;
                        p = S,
                        Math.abs(O) > c && r && String(r()) === "" && (i("swipe", R, {
                            direction: O > 0 ? "right" : "left"
                        }),
                        _())
                    }
                }
                function y(R) {
                    if (a && (a = !1,
                    s && R.type === "mouseup")) {
                        R.preventDefault(),
                        R.stopPropagation(),
                        s = !1;
                        return
                    }
                }
                function _() {
                    a = !1
                }
                function m() {
                    o.removeEventListener("touchstart", d, !1),
                    o.removeEventListener("touchmove", g, !1),
                    o.removeEventListener("touchend", y, !1),
                    o.removeEventListener("touchcancel", _, !1),
                    o.removeEventListener("mousedown", d, !1),
                    o.removeEventListener("mousemove", g, !1),
                    o.removeEventListener("mouseup", y, !1),
                    o.removeEventListener("mouseout", _, !1),
                    o = null
                }
                this.destroy = m
            }
            function i(o, a, s) {
                var c = e.Event(o, {
                    originalEvent: a
                });
                e(a.target).trigger(c, s)
            }
            return t.instance = t.init(document),
            t
        }
        )
    }
    );
    var S_ = u((wj,A_)=>{
        "use strict";
        var _s = rt();
        _s.define("forms", A_.exports = function(e, t) {
            var r = {}, n = e(document), i, o = window.location, a = window.XDomainRequest && !window.atob, s = ".w-form", c, f = /e(-)?mail/i, p = /^\S+@\S+$/, d = window.alert, g = _s.env(), y, _, m, R = /list-manage[1-9]?.com/i, A = t.debounce(function() {
                d("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
            }, 100);
            r.ready = r.design = r.preview = function() {
                S(),
                !g && !y && L()
            }
            ;
            function S() {
                c = e("html").attr("data-wf-site"),
                _ = "https://webflow.com/api/v1/form/" + c,
                a && _.indexOf("https://webflow.com") >= 0 && (_ = _.replace("https://webflow.com", "https://formdata.webflow.com")),
                m = `${_}/signFile`,
                i = e(s + " form"),
                i.length && i.each(O)
            }
            function O(C, G) {
                var W = e(G)
                  , M = e.data(G, s);
                M || (M = e.data(G, s, {
                    form: W
                })),
                P(M);
                var q = W.closest("div.w-form");
                M.done = q.find("> .w-form-done"),
                M.fail = q.find("> .w-form-fail"),
                M.fileUploads = q.find(".w-file-upload"),
                M.fileUploads.each(function(re) {
                    F(re, M)
                });
                var K = M.form.attr("aria-label") || M.form.attr("data-name") || "Form";
                M.done.attr("aria-label") || M.form.attr("aria-label", K),
                M.done.attr("tabindex", "-1"),
                M.done.attr("role", "region"),
                M.done.attr("aria-label") || M.done.attr("aria-label", K + " success"),
                M.fail.attr("tabindex", "-1"),
                M.fail.attr("role", "region"),
                M.fail.attr("aria-label") || M.fail.attr("aria-label", K + " failure");
                var te = M.action = W.attr("action");
                if (M.handler = null,
                M.redirect = W.attr("data-redirect"),
                R.test(te)) {
                    M.handler = T;
                    return
                }
                if (!te) {
                    if (c) {
                        M.handler = N;
                        return
                    }
                    A()
                }
            }
            function L() {
                y = !0,
                n.on("submit", s + " form", function(re) {
                    var z = e.data(this, s);
                    z.handler && (z.evt = re,
                    z.handler(z))
                });
                let C = ".w-checkbox-input"
                  , G = ".w-radio-input"
                  , W = "w--redirected-checked"
                  , M = "w--redirected-focus"
                  , q = "w--redirected-focus-visible"
                  , K = ":focus-visible, [data-wf-focus-visible]"
                  , te = [["checkbox", C], ["radio", G]];
                n.on("change", s + ' form input[type="checkbox"]:not(' + C + ")", re=>{
                    e(re.target).siblings(C).toggleClass(W)
                }
                ),
                n.on("change", s + ' form input[type="radio"]', re=>{
                    e(`input[name="${re.target.name}"]:not(${C})`).map((le,Ct)=>e(Ct).siblings(G).removeClass(W));
                    let z = e(re.target);
                    z.hasClass("w-radio-input") || z.siblings(G).addClass(W)
                }
                ),
                te.forEach(([re,z])=>{
                    n.on("focus", s + ` form input[type="${re}"]:not(` + z + ")", le=>{
                        e(le.target).siblings(z).addClass(M),
                        e(le.target).filter(K).siblings(z).addClass(q)
                    }
                    ),
                    n.on("blur", s + ` form input[type="${re}"]:not(` + z + ")", le=>{
                        e(le.target).siblings(z).removeClass(`${M} ${q}`)
                    }
                    )
                }
                )
            }
            function P(C) {
                var G = C.btn = C.form.find(':input[type="submit"]');
                C.wait = C.btn.attr("data-wait") || null,
                C.success = !1,
                G.prop("disabled", !1),
                C.label && G.val(C.label)
            }
            function x(C) {
                var G = C.btn
                  , W = C.wait;
                G.prop("disabled", !0),
                W && (C.label = G.val(),
                G.val(W))
            }
            function V(C, G) {
                var W = null;
                return G = G || {},
                C.find(':input:not([type="submit"]):not([type="file"])').each(function(M, q) {
                    var K = e(q)
                      , te = K.attr("type")
                      , re = K.attr("data-name") || K.attr("name") || "Field " + (M + 1)
                      , z = K.val();
                    if (te === "checkbox")
                        z = K.is(":checked");
                    else if (te === "radio") {
                        if (G[re] === null || typeof G[re] == "string")
                            return;
                        z = C.find('input[name="' + K.attr("name") + '"]:checked').val() || null
                    }
                    typeof z == "string" && (z = e.trim(z)),
                    G[re] = z,
                    W = W || Q(K, te, re, z)
                }),
                W
            }
            function X(C) {
                var G = {};
                return C.find(':input[type="file"]').each(function(W, M) {
                    var q = e(M)
                      , K = q.attr("data-name") || q.attr("name") || "File " + (W + 1)
                      , te = q.attr("data-value");
                    typeof te == "string" && (te = e.trim(te)),
                    G[K] = te
                }),
                G
            }
            let H = {
                _mkto_trk: "marketo"
            };
            function j() {
                return document.cookie.split("; ").reduce(function(G, W) {
                    let M = W.split("=")
                      , q = M[0];
                    if (q in H) {
                        let K = H[q]
                          , te = M.slice(1).join("=");
                        G[K] = te
                    }
                    return G
                }, {})
            }
            function Q(C, G, W, M) {
                var q = null;
                return G === "password" ? q = "Passwords cannot be submitted." : C.attr("required") ? M ? f.test(C.attr("type")) && (p.test(M) || (q = "Please enter a valid email address for: " + W)) : q = "Please fill out the required field: " + W : W === "g-recaptcha-response" && !M && (q = "Please confirm you\u2019re not a robot."),
                q
            }
            function N(C) {
                U(C),
                w(C)
            }
            function T(C) {
                P(C);
                var G = C.form
                  , W = {};
                if (/^https/.test(o.href) && !/^https/.test(C.action)) {
                    G.attr("method", "post");
                    return
                }
                U(C);
                var M = V(G, W);
                if (M)
                    return d(M);
                x(C);
                var q;
                t.each(W, function(z, le) {
                    f.test(le) && (W.EMAIL = z),
                    /^((full[ _-]?)?name)$/i.test(le) && (q = z),
                    /^(first[ _-]?name)$/i.test(le) && (W.FNAME = z),
                    /^(last[ _-]?name)$/i.test(le) && (W.LNAME = z)
                }),
                q && !W.FNAME && (q = q.split(" "),
                W.FNAME = q[0],
                W.LNAME = W.LNAME || q[1]);
                var K = C.action.replace("/post?", "/post-json?") + "&c=?"
                  , te = K.indexOf("u=") + 2;
                te = K.substring(te, K.indexOf("&", te));
                var re = K.indexOf("id=") + 3;
                re = K.substring(re, K.indexOf("&", re)),
                W["b_" + te + "_" + re] = "",
                e.ajax({
                    url: K,
                    data: W,
                    dataType: "jsonp"
                }).done(function(z) {
                    C.success = z.result === "success" || /already/.test(z.msg),
                    C.success || console.info("MailChimp error: " + z.msg),
                    w(C)
                }).fail(function() {
                    w(C)
                })
            }
            function w(C) {
                var G = C.form
                  , W = C.redirect
                  , M = C.success;
                if (M && W) {
                    _s.location(W);
                    return
                }
                C.done.toggle(M),
                C.fail.toggle(!M),
                M ? C.done.focus() : C.fail.focus(),
                G.toggle(!M),
                P(C)
            }
            function U(C) {
                C.evt && C.evt.preventDefault(),
                C.evt = null
            }
            function F(C, G) {
                if (!G.fileUploads || !G.fileUploads[C])
                    return;
                var W, M = e(G.fileUploads[C]), q = M.find("> .w-file-upload-default"), K = M.find("> .w-file-upload-uploading"), te = M.find("> .w-file-upload-success"), re = M.find("> .w-file-upload-error"), z = q.find(".w-file-upload-input"), le = q.find(".w-file-upload-label"), Ct = le.children(), ge = re.find(".w-file-upload-error-msg"), lt = te.find(".w-file-upload-file"), cr = te.find(".w-file-remove-link"), lr = lt.find(".w-file-upload-file-name"), fr = ge.attr("data-w-size-error"), ke = ge.attr("data-w-type-error"), Ii = ge.attr("data-w-generic-error");
                if (g || le.on("click keydown", function(h) {
                    h.type === "keydown" && h.which !== 13 && h.which !== 32 || (h.preventDefault(),
                    z.click())
                }),
                le.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
                cr.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
                g)
                    z.on("click", function(h) {
                        h.preventDefault()
                    }),
                    le.on("click", function(h) {
                        h.preventDefault()
                    }),
                    Ct.on("click", function(h) {
                        h.preventDefault()
                    });
                else {
                    cr.on("click keydown", function(h) {
                        if (h.type === "keydown") {
                            if (h.which !== 13 && h.which !== 32)
                                return;
                            h.preventDefault()
                        }
                        z.removeAttr("data-value"),
                        z.val(""),
                        lr.html(""),
                        q.toggle(!0),
                        te.toggle(!1),
                        le.focus()
                    }),
                    z.on("change", function(h) {
                        W = h.target && h.target.files && h.target.files[0],
                        W && (q.toggle(!1),
                        re.toggle(!1),
                        K.toggle(!0),
                        K.focus(),
                        lr.text(W.name),
                        I() || x(G),
                        G.fileUploads[C].uploading = !0,
                        Z(W, v))
                    });
                    var Yr = le.outerHeight();
                    z.height(Yr),
                    z.width(1)
                }
                function l(h) {
                    var b = h.responseJSON && h.responseJSON.msg
                      , B = Ii;
                    typeof b == "string" && b.indexOf("InvalidFileTypeError") === 0 ? B = ke : typeof b == "string" && b.indexOf("MaxFileSizeError") === 0 && (B = fr),
                    ge.text(B),
                    z.removeAttr("data-value"),
                    z.val(""),
                    K.toggle(!1),
                    q.toggle(!0),
                    re.toggle(!0),
                    re.focus(),
                    G.fileUploads[C].uploading = !1,
                    I() || P(G)
                }
                function v(h, b) {
                    if (h)
                        return l(h);
                    var B = b.fileName
                      , $ = b.postData
                      , se = b.fileId
                      , D = b.s3Url;
                    z.attr("data-value", se),
                    Y(D, $, W, B, E)
                }
                function E(h) {
                    if (h)
                        return l(h);
                    K.toggle(!1),
                    te.css("display", "inline-block"),
                    te.focus(),
                    G.fileUploads[C].uploading = !1,
                    I() || P(G)
                }
                function I() {
                    var h = G.fileUploads && G.fileUploads.toArray() || [];
                    return h.some(function(b) {
                        return b.uploading
                    })
                }
            }
            function Z(C, G) {
                var W = new URLSearchParams({
                    name: C.name,
                    size: C.size
                });
                e.ajax({
                    type: "GET",
                    url: `${m}?${W}`,
                    crossDomain: !0
                }).done(function(M) {
                    G(null, M)
                }).fail(function(M) {
                    G(M)
                })
            }
            function Y(C, G, W, M, q) {
                var K = new FormData;
                for (var te in G)
                    K.append(te, G[te]);
                K.append("file", W, M),
                e.ajax({
                    type: "POST",
                    url: C,
                    data: K,
                    processData: !1,
                    contentType: !1
                }).done(function() {
                    q(null)
                }).fail(function(re) {
                    q(re)
                })
            }
            return r
        }
        )
    }
    );
    qs();
    Ds();
    Vs();
    js();
    y_();
    __();
    I_();
    O_();
    S_();
}
)();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 * _.each
 * _.map
 * _.find
 * _.filter
 * _.any
 * _.contains
 * _.delay
 * _.defer
 * _.throttle (webflow)
 * _.debounce
 * _.keys
 * _.has
 * _.now
 * _.template (webflow: upgraded to 1.13.6)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({
    "events": {
        "e": {
            "id": "e",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".grid-cell-img",
                "originalId": "64c79eacb044b679c7f4dd6b|6efc9d86-a8c8-67a4-4b1a-dd91effd5399",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".grid-cell-img",
                "originalId": "64c79eacb044b679c7f4dd6b|6efc9d86-a8c8-67a4-4b1a-dd91effd5399",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1692123636698
        },
        "e-2": {
            "id": "e-2",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".grid-cell-img",
                "originalId": "64c79eacb044b679c7f4dd6b|6efc9d86-a8c8-67a4-4b1a-dd91effd5399",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".grid-cell-img",
                "originalId": "64c79eacb044b679c7f4dd6b|6efc9d86-a8c8-67a4-4b1a-dd91effd5399",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1692123636699
        },
        "e-3": {
            "id": "e-3",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64c79eacb044b679c7f4dd6b",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64c79eacb044b679c7f4dd6b",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-3-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-3-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }],
            "createdOn": 1692642453151
        },
        "e-10": {
            "id": "e-10",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-4",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-11"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".h-wrapper.centered",
                "originalId": "64c79eacb044b679c7f4dd6b|257b66dc-5808-8031-0228-d54f3634cc4b",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".h-wrapper.centered",
                "originalId": "64c79eacb044b679c7f4dd6b|257b66dc-5808-8031-0228-d54f3634cc4b",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693385109122
        },
        "e-11": {
            "id": "e-11",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-10"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".h-wrapper.centered",
                "originalId": "64c79eacb044b679c7f4dd6b|257b66dc-5808-8031-0228-d54f3634cc4b",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".h-wrapper.centered",
                "originalId": "64c79eacb044b679c7f4dd6b|257b66dc-5808-8031-0228-d54f3634cc4b",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693385109122
        },
        "e-14": {
            "id": "e-14",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-15"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".link",
                "originalId": "64c79eacb044b679c7f4dd6b|403663f1-9a01-7b43-3d23-f8e91f1eb4e1",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".link",
                "originalId": "64c79eacb044b679c7f4dd6b|403663f1-9a01-7b43-3d23-f8e91f1eb4e1",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693386375776
        },
        "e-15": {
            "id": "e-15",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-14"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".link",
                "originalId": "64c79eacb044b679c7f4dd6b|403663f1-9a01-7b43-3d23-f8e91f1eb4e1",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".link",
                "originalId": "64c79eacb044b679c7f4dd6b|403663f1-9a01-7b43-3d23-f8e91f1eb4e1",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693386375777
        },
        "e-16": {
            "id": "e-16",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64ec86eca7c91808f274538d",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64ec86eca7c91808f274538d",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-3-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-3-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }],
            "createdOn": 1693395915116
        },
        "e-19": {
            "id": "e-19",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-20"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "27ff886d-0e53-d7f9-2f9f-aa41fc8033f6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "27ff886d-0e53-d7f9-2f9f-aa41fc8033f6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693492558589
        },
        "e-20": {
            "id": "e-20",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-19"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "27ff886d-0e53-d7f9-2f9f-aa41fc8033f6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "27ff886d-0e53-d7f9-2f9f-aa41fc8033f6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693492558589
        },
        "e-21": {
            "id": "e-21",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-22"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64ec86eca7c91808f274538d|ca40e9cc-8f67-66c1-c8eb-30fd3391a03a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64ec86eca7c91808f274538d|ca40e9cc-8f67-66c1-c8eb-30fd3391a03a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693492760046
        },
        "e-22": {
            "id": "e-22",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-21"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64ec86eca7c91808f274538d|ca40e9cc-8f67-66c1-c8eb-30fd3391a03a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64ec86eca7c91808f274538d|ca40e9cc-8f67-66c1-c8eb-30fd3391a03a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693492760046
        },
        "e-23": {
            "id": "e-23",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-24"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64ec86eca7c91808f274538d|5985abf7-835c-a43f-7358-0777c6297f7e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64ec86eca7c91808f274538d|5985abf7-835c-a43f-7358-0777c6297f7e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693492760856
        },
        "e-24": {
            "id": "e-24",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-23"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64ec86eca7c91808f274538d|5985abf7-835c-a43f-7358-0777c6297f7e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64ec86eca7c91808f274538d|5985abf7-835c-a43f-7358-0777c6297f7e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693492760856
        },
        "e-25": {
            "id": "e-25",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-26"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64ec86eca7c91808f274538d|762e7713-61f7-d1b5-504e-fe0ea1cff3e3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64ec86eca7c91808f274538d|762e7713-61f7-d1b5-504e-fe0ea1cff3e3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693492761393
        },
        "e-26": {
            "id": "e-26",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-25"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64ec86eca7c91808f274538d|762e7713-61f7-d1b5-504e-fe0ea1cff3e3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64ec86eca7c91808f274538d|762e7713-61f7-d1b5-504e-fe0ea1cff3e3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693492761393
        },
        "e-27": {
            "id": "e-27",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-28"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64ec86eca7c91808f274538d|c0c0542d-bd44-0d19-9ef3-540e948f44b0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64ec86eca7c91808f274538d|c0c0542d-bd44-0d19-9ef3-540e948f44b0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693492761711
        },
        "e-28": {
            "id": "e-28",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-27"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64ec86eca7c91808f274538d|c0c0542d-bd44-0d19-9ef3-540e948f44b0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64ec86eca7c91808f274538d|c0c0542d-bd44-0d19-9ef3-540e948f44b0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693492761711
        },
        "e-29": {
            "id": "e-29",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-30"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64ec86eca7c91808f274538d|35e96441-9426-aac3-0159-7c140734ff50",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64ec86eca7c91808f274538d|35e96441-9426-aac3-0159-7c140734ff50",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693492763371
        },
        "e-30": {
            "id": "e-30",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-29"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64ec86eca7c91808f274538d|35e96441-9426-aac3-0159-7c140734ff50",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64ec86eca7c91808f274538d|35e96441-9426-aac3-0159-7c140734ff50",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693492763371
        },
        "e-31": {
            "id": "e-31",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-32"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64ec86eca7c91808f274538d|38b011dc-982c-9158-f50d-a6a4d3bf92ec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64ec86eca7c91808f274538d|38b011dc-982c-9158-f50d-a6a4d3bf92ec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693492763817
        },
        "e-32": {
            "id": "e-32",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-31"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64ec86eca7c91808f274538d|38b011dc-982c-9158-f50d-a6a4d3bf92ec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64ec86eca7c91808f274538d|38b011dc-982c-9158-f50d-a6a4d3bf92ec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693492763817
        },
        "e-33": {
            "id": "e-33",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-34"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64ec86eca7c91808f274538d|68300dcc-81f9-3b79-3ce6-7cb9b02fb349",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64ec86eca7c91808f274538d|68300dcc-81f9-3b79-3ce6-7cb9b02fb349",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693492764196
        },
        "e-34": {
            "id": "e-34",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-33"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64ec86eca7c91808f274538d|68300dcc-81f9-3b79-3ce6-7cb9b02fb349",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64ec86eca7c91808f274538d|68300dcc-81f9-3b79-3ce6-7cb9b02fb349",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693492764196
        },
        "e-35": {
            "id": "e-35",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-36"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64ec86eca7c91808f274538d|46cccf18-2bc5-dc83-8cd6-7c4f511d0db5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64ec86eca7c91808f274538d|46cccf18-2bc5-dc83-8cd6-7c4f511d0db5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693492764593
        },
        "e-36": {
            "id": "e-36",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-35"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64ec86eca7c91808f274538d|46cccf18-2bc5-dc83-8cd6-7c4f511d0db5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64ec86eca7c91808f274538d|46cccf18-2bc5-dc83-8cd6-7c4f511d0db5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693492764593
        },
        "e-37": {
            "id": "e-37",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-38"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64ec86eca7c91808f274538d|bdb5e119-9204-566a-f104-913406107a60",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64ec86eca7c91808f274538d|bdb5e119-9204-566a-f104-913406107a60",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693492772657
        },
        "e-38": {
            "id": "e-38",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-37"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64ec86eca7c91808f274538d|bdb5e119-9204-566a-f104-913406107a60",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64ec86eca7c91808f274538d|bdb5e119-9204-566a-f104-913406107a60",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693492772657
        },
        "e-39": {
            "id": "e-39",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64f9ca7e0cb6f4ca36bea763",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f9ca7e0cb6f4ca36bea763",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-3-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-3-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }],
            "createdOn": 1694091902458
        },
        "e-40": {
            "id": "e-40",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-41"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64f9ca7e0cb6f4ca36bea763|ca40e9cc-8f67-66c1-c8eb-30fd3391a03a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f9ca7e0cb6f4ca36bea763|ca40e9cc-8f67-66c1-c8eb-30fd3391a03a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694091902458
        },
        "e-41": {
            "id": "e-41",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-40"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64f9ca7e0cb6f4ca36bea763|ca40e9cc-8f67-66c1-c8eb-30fd3391a03a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f9ca7e0cb6f4ca36bea763|ca40e9cc-8f67-66c1-c8eb-30fd3391a03a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694091902458
        },
        "e-42": {
            "id": "e-42",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-43"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64f9ca7e0cb6f4ca36bea763|5985abf7-835c-a43f-7358-0777c6297f7e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f9ca7e0cb6f4ca36bea763|5985abf7-835c-a43f-7358-0777c6297f7e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694091902458
        },
        "e-43": {
            "id": "e-43",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-42"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64f9ca7e0cb6f4ca36bea763|5985abf7-835c-a43f-7358-0777c6297f7e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f9ca7e0cb6f4ca36bea763|5985abf7-835c-a43f-7358-0777c6297f7e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694091902458
        },
        "e-44": {
            "id": "e-44",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-45"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64f9ca7e0cb6f4ca36bea763|762e7713-61f7-d1b5-504e-fe0ea1cff3e3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f9ca7e0cb6f4ca36bea763|762e7713-61f7-d1b5-504e-fe0ea1cff3e3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694091902458
        },
        "e-45": {
            "id": "e-45",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-44"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64f9ca7e0cb6f4ca36bea763|762e7713-61f7-d1b5-504e-fe0ea1cff3e3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f9ca7e0cb6f4ca36bea763|762e7713-61f7-d1b5-504e-fe0ea1cff3e3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694091902458
        },
        "e-46": {
            "id": "e-46",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-47"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64f9ca7e0cb6f4ca36bea763|c0c0542d-bd44-0d19-9ef3-540e948f44b0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f9ca7e0cb6f4ca36bea763|c0c0542d-bd44-0d19-9ef3-540e948f44b0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694091902458
        },
        "e-47": {
            "id": "e-47",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-46"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64f9ca7e0cb6f4ca36bea763|c0c0542d-bd44-0d19-9ef3-540e948f44b0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f9ca7e0cb6f4ca36bea763|c0c0542d-bd44-0d19-9ef3-540e948f44b0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694091902458
        },
        "e-48": {
            "id": "e-48",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-49"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64f9ca7e0cb6f4ca36bea763|35e96441-9426-aac3-0159-7c140734ff50",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f9ca7e0cb6f4ca36bea763|35e96441-9426-aac3-0159-7c140734ff50",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694091902458
        },
        "e-49": {
            "id": "e-49",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-48"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64f9ca7e0cb6f4ca36bea763|35e96441-9426-aac3-0159-7c140734ff50",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f9ca7e0cb6f4ca36bea763|35e96441-9426-aac3-0159-7c140734ff50",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694091902458
        },
        "e-50": {
            "id": "e-50",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-51"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64f9ca7e0cb6f4ca36bea763|38b011dc-982c-9158-f50d-a6a4d3bf92ec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f9ca7e0cb6f4ca36bea763|38b011dc-982c-9158-f50d-a6a4d3bf92ec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694091902458
        },
        "e-51": {
            "id": "e-51",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-50"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64f9ca7e0cb6f4ca36bea763|38b011dc-982c-9158-f50d-a6a4d3bf92ec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f9ca7e0cb6f4ca36bea763|38b011dc-982c-9158-f50d-a6a4d3bf92ec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694091902458
        },
        "e-52": {
            "id": "e-52",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-53"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64f9ca7e0cb6f4ca36bea763|68300dcc-81f9-3b79-3ce6-7cb9b02fb349",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f9ca7e0cb6f4ca36bea763|68300dcc-81f9-3b79-3ce6-7cb9b02fb349",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694091902458
        },
        "e-53": {
            "id": "e-53",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-52"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64f9ca7e0cb6f4ca36bea763|68300dcc-81f9-3b79-3ce6-7cb9b02fb349",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f9ca7e0cb6f4ca36bea763|68300dcc-81f9-3b79-3ce6-7cb9b02fb349",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694091902458
        },
        "e-54": {
            "id": "e-54",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-55"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64f9ca7e0cb6f4ca36bea763|46cccf18-2bc5-dc83-8cd6-7c4f511d0db5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f9ca7e0cb6f4ca36bea763|46cccf18-2bc5-dc83-8cd6-7c4f511d0db5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694091902458
        },
        "e-55": {
            "id": "e-55",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-54"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64f9ca7e0cb6f4ca36bea763|46cccf18-2bc5-dc83-8cd6-7c4f511d0db5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f9ca7e0cb6f4ca36bea763|46cccf18-2bc5-dc83-8cd6-7c4f511d0db5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694091902458
        },
        "e-56": {
            "id": "e-56",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-57"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64f9ca7e0cb6f4ca36bea763|bdb5e119-9204-566a-f104-913406107a60",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f9ca7e0cb6f4ca36bea763|bdb5e119-9204-566a-f104-913406107a60",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694091902458
        },
        "e-57": {
            "id": "e-57",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-56"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64f9ca7e0cb6f4ca36bea763|bdb5e119-9204-566a-f104-913406107a60",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f9ca7e0cb6f4ca36bea763|bdb5e119-9204-566a-f104-913406107a60",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694091902458
        },
        "e-58": {
            "id": "e-58",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-4",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-59"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".h1-wrapper",
                "originalId": "64c79eacb044b679c7f4dd6b|59271182-f875-d4dc-3a94-3de05c5eb035",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "id": "64c79eacb044b679c7f4dd6b|59271182-f875-d4dc-3a94-3de05c5eb035",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694096495685
        },
        "e-59": {
            "id": "e-59",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-58"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".h1-wrapper",
                "originalId": "64c79eacb044b679c7f4dd6b|59271182-f875-d4dc-3a94-3de05c5eb035",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "id": "64c79eacb044b679c7f4dd6b|59271182-f875-d4dc-3a94-3de05c5eb035",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694096495685
        },
        "e-60": {
            "id": "e-60",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-61"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64c79eacb044b679c7f4dd6b|3e31409f-c3d7-765c-8235-9c2bf893624f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64c79eacb044b679c7f4dd6b|3e31409f-c3d7-765c-8235-9c2bf893624f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694096497464
        },
        "e-61": {
            "id": "e-61",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-9",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-60"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64c79eacb044b679c7f4dd6b|3e31409f-c3d7-765c-8235-9c2bf893624f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64c79eacb044b679c7f4dd6b|3e31409f-c3d7-765c-8235-9c2bf893624f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694096497464
        },
        "e-62": {
            "id": "e-62",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "651552639a0e5b9c99674be6",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "651552639a0e5b9c99674be6",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-3-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-3-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }],
            "createdOn": 1695896163738
        },
        "e-63": {
            "id": "e-63",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-64"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "651552639a0e5b9c99674be6|ca40e9cc-8f67-66c1-c8eb-30fd3391a03a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "651552639a0e5b9c99674be6|ca40e9cc-8f67-66c1-c8eb-30fd3391a03a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695896163738
        },
        "e-64": {
            "id": "e-64",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-63"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "651552639a0e5b9c99674be6|ca40e9cc-8f67-66c1-c8eb-30fd3391a03a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "651552639a0e5b9c99674be6|ca40e9cc-8f67-66c1-c8eb-30fd3391a03a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695896163738
        },
        "e-65": {
            "id": "e-65",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-66"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "651552639a0e5b9c99674be6|5985abf7-835c-a43f-7358-0777c6297f7e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "651552639a0e5b9c99674be6|5985abf7-835c-a43f-7358-0777c6297f7e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695896163738
        },
        "e-66": {
            "id": "e-66",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-65"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "651552639a0e5b9c99674be6|5985abf7-835c-a43f-7358-0777c6297f7e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "651552639a0e5b9c99674be6|5985abf7-835c-a43f-7358-0777c6297f7e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695896163738
        },
        "e-67": {
            "id": "e-67",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-68"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "651552639a0e5b9c99674be6|762e7713-61f7-d1b5-504e-fe0ea1cff3e3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "651552639a0e5b9c99674be6|762e7713-61f7-d1b5-504e-fe0ea1cff3e3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695896163738
        },
        "e-68": {
            "id": "e-68",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-67"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "651552639a0e5b9c99674be6|762e7713-61f7-d1b5-504e-fe0ea1cff3e3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "651552639a0e5b9c99674be6|762e7713-61f7-d1b5-504e-fe0ea1cff3e3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695896163738
        },
        "e-69": {
            "id": "e-69",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-70"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "651552639a0e5b9c99674be6|c0c0542d-bd44-0d19-9ef3-540e948f44b0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "651552639a0e5b9c99674be6|c0c0542d-bd44-0d19-9ef3-540e948f44b0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695896163738
        },
        "e-70": {
            "id": "e-70",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-69"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "651552639a0e5b9c99674be6|c0c0542d-bd44-0d19-9ef3-540e948f44b0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "651552639a0e5b9c99674be6|c0c0542d-bd44-0d19-9ef3-540e948f44b0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695896163738
        },
        "e-71": {
            "id": "e-71",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-72"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "651552639a0e5b9c99674be6|35e96441-9426-aac3-0159-7c140734ff50",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "651552639a0e5b9c99674be6|35e96441-9426-aac3-0159-7c140734ff50",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695896163738
        },
        "e-72": {
            "id": "e-72",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-71"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "651552639a0e5b9c99674be6|35e96441-9426-aac3-0159-7c140734ff50",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "651552639a0e5b9c99674be6|35e96441-9426-aac3-0159-7c140734ff50",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695896163738
        },
        "e-73": {
            "id": "e-73",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-74"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "651552639a0e5b9c99674be6|38b011dc-982c-9158-f50d-a6a4d3bf92ec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "651552639a0e5b9c99674be6|38b011dc-982c-9158-f50d-a6a4d3bf92ec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695896163738
        },
        "e-74": {
            "id": "e-74",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-73"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "651552639a0e5b9c99674be6|38b011dc-982c-9158-f50d-a6a4d3bf92ec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "651552639a0e5b9c99674be6|38b011dc-982c-9158-f50d-a6a4d3bf92ec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695896163738
        },
        "e-75": {
            "id": "e-75",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-76"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "651552639a0e5b9c99674be6|68300dcc-81f9-3b79-3ce6-7cb9b02fb349",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "651552639a0e5b9c99674be6|68300dcc-81f9-3b79-3ce6-7cb9b02fb349",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695896163738
        },
        "e-76": {
            "id": "e-76",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-75"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "651552639a0e5b9c99674be6|68300dcc-81f9-3b79-3ce6-7cb9b02fb349",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "651552639a0e5b9c99674be6|68300dcc-81f9-3b79-3ce6-7cb9b02fb349",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695896163738
        },
        "e-77": {
            "id": "e-77",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-78"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "651552639a0e5b9c99674be6|46cccf18-2bc5-dc83-8cd6-7c4f511d0db5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "651552639a0e5b9c99674be6|46cccf18-2bc5-dc83-8cd6-7c4f511d0db5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695896163738
        },
        "e-78": {
            "id": "e-78",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-77"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "651552639a0e5b9c99674be6|46cccf18-2bc5-dc83-8cd6-7c4f511d0db5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "651552639a0e5b9c99674be6|46cccf18-2bc5-dc83-8cd6-7c4f511d0db5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695896163738
        },
        "e-79": {
            "id": "e-79",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-80"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "651552639a0e5b9c99674be6|bdb5e119-9204-566a-f104-913406107a60",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "651552639a0e5b9c99674be6|bdb5e119-9204-566a-f104-913406107a60",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695896163738
        },
        "e-80": {
            "id": "e-80",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-79"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "651552639a0e5b9c99674be6|bdb5e119-9204-566a-f104-913406107a60",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "651552639a0e5b9c99674be6|bdb5e119-9204-566a-f104-913406107a60",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695896163738
        },
        "e-81": {
            "id": "e-81",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "651578df33092862df7e97f7",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "651578df33092862df7e97f7",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-3-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-3-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }],
            "createdOn": 1695906015706
        },
        "e-82": {
            "id": "e-82",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-83"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "651578df33092862df7e97f7|ca40e9cc-8f67-66c1-c8eb-30fd3391a03a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "651578df33092862df7e97f7|ca40e9cc-8f67-66c1-c8eb-30fd3391a03a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695906015706
        },
        "e-83": {
            "id": "e-83",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-82"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "651578df33092862df7e97f7|ca40e9cc-8f67-66c1-c8eb-30fd3391a03a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "651578df33092862df7e97f7|ca40e9cc-8f67-66c1-c8eb-30fd3391a03a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695906015706
        },
        "e-84": {
            "id": "e-84",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-85"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "651578df33092862df7e97f7|5985abf7-835c-a43f-7358-0777c6297f7e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "651578df33092862df7e97f7|5985abf7-835c-a43f-7358-0777c6297f7e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695906015706
        },
        "e-85": {
            "id": "e-85",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-84"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "651578df33092862df7e97f7|5985abf7-835c-a43f-7358-0777c6297f7e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "651578df33092862df7e97f7|5985abf7-835c-a43f-7358-0777c6297f7e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695906015706
        },
        "e-86": {
            "id": "e-86",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-87"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "651578df33092862df7e97f7|762e7713-61f7-d1b5-504e-fe0ea1cff3e3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "651578df33092862df7e97f7|762e7713-61f7-d1b5-504e-fe0ea1cff3e3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695906015706
        },
        "e-87": {
            "id": "e-87",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-86"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "651578df33092862df7e97f7|762e7713-61f7-d1b5-504e-fe0ea1cff3e3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "651578df33092862df7e97f7|762e7713-61f7-d1b5-504e-fe0ea1cff3e3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695906015706
        },
        "e-88": {
            "id": "e-88",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-89"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "651578df33092862df7e97f7|c0c0542d-bd44-0d19-9ef3-540e948f44b0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "651578df33092862df7e97f7|c0c0542d-bd44-0d19-9ef3-540e948f44b0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695906015706
        },
        "e-89": {
            "id": "e-89",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-88"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "651578df33092862df7e97f7|c0c0542d-bd44-0d19-9ef3-540e948f44b0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "651578df33092862df7e97f7|c0c0542d-bd44-0d19-9ef3-540e948f44b0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695906015706
        },
        "e-90": {
            "id": "e-90",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-91"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "651578df33092862df7e97f7|35e96441-9426-aac3-0159-7c140734ff50",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "651578df33092862df7e97f7|35e96441-9426-aac3-0159-7c140734ff50",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695906015706
        },
        "e-91": {
            "id": "e-91",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-90"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "651578df33092862df7e97f7|35e96441-9426-aac3-0159-7c140734ff50",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "651578df33092862df7e97f7|35e96441-9426-aac3-0159-7c140734ff50",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695906015706
        },
        "e-92": {
            "id": "e-92",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-93"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "651578df33092862df7e97f7|38b011dc-982c-9158-f50d-a6a4d3bf92ec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "651578df33092862df7e97f7|38b011dc-982c-9158-f50d-a6a4d3bf92ec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695906015706
        },
        "e-93": {
            "id": "e-93",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-92"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "651578df33092862df7e97f7|38b011dc-982c-9158-f50d-a6a4d3bf92ec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "651578df33092862df7e97f7|38b011dc-982c-9158-f50d-a6a4d3bf92ec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695906015706
        },
        "e-94": {
            "id": "e-94",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-95"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "651578df33092862df7e97f7|68300dcc-81f9-3b79-3ce6-7cb9b02fb349",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "651578df33092862df7e97f7|68300dcc-81f9-3b79-3ce6-7cb9b02fb349",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695906015706
        },
        "e-95": {
            "id": "e-95",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-94"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "651578df33092862df7e97f7|68300dcc-81f9-3b79-3ce6-7cb9b02fb349",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "651578df33092862df7e97f7|68300dcc-81f9-3b79-3ce6-7cb9b02fb349",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695906015706
        },
        "e-96": {
            "id": "e-96",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-97"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "651578df33092862df7e97f7|46cccf18-2bc5-dc83-8cd6-7c4f511d0db5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "651578df33092862df7e97f7|46cccf18-2bc5-dc83-8cd6-7c4f511d0db5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695906015706
        },
        "e-97": {
            "id": "e-97",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-96"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "651578df33092862df7e97f7|46cccf18-2bc5-dc83-8cd6-7c4f511d0db5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "651578df33092862df7e97f7|46cccf18-2bc5-dc83-8cd6-7c4f511d0db5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695906015706
        },
        "e-98": {
            "id": "e-98",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-99"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "651578df33092862df7e97f7|bdb5e119-9204-566a-f104-913406107a60",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "651578df33092862df7e97f7|bdb5e119-9204-566a-f104-913406107a60",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695906015706
        },
        "e-99": {
            "id": "e-99",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-98"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "651578df33092862df7e97f7|bdb5e119-9204-566a-f104-913406107a60",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "651578df33092862df7e97f7|bdb5e119-9204-566a-f104-913406107a60",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695906015706
        },
        "e-100": {
            "id": "e-100",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65158d330abfac438bbb4d44",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65158d330abfac438bbb4d44",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-3-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-3-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }],
            "createdOn": 1695911219854
        },
        "e-101": {
            "id": "e-101",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-102"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65158d330abfac438bbb4d44|ca40e9cc-8f67-66c1-c8eb-30fd3391a03a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65158d330abfac438bbb4d44|ca40e9cc-8f67-66c1-c8eb-30fd3391a03a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695911219854
        },
        "e-102": {
            "id": "e-102",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-101"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65158d330abfac438bbb4d44|ca40e9cc-8f67-66c1-c8eb-30fd3391a03a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65158d330abfac438bbb4d44|ca40e9cc-8f67-66c1-c8eb-30fd3391a03a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695911219854
        },
        "e-103": {
            "id": "e-103",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-104"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65158d330abfac438bbb4d44|5985abf7-835c-a43f-7358-0777c6297f7e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65158d330abfac438bbb4d44|5985abf7-835c-a43f-7358-0777c6297f7e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695911219854
        },
        "e-104": {
            "id": "e-104",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-103"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65158d330abfac438bbb4d44|5985abf7-835c-a43f-7358-0777c6297f7e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65158d330abfac438bbb4d44|5985abf7-835c-a43f-7358-0777c6297f7e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695911219854
        },
        "e-105": {
            "id": "e-105",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-106"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65158d330abfac438bbb4d44|762e7713-61f7-d1b5-504e-fe0ea1cff3e3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65158d330abfac438bbb4d44|762e7713-61f7-d1b5-504e-fe0ea1cff3e3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695911219854
        },
        "e-106": {
            "id": "e-106",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-105"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65158d330abfac438bbb4d44|762e7713-61f7-d1b5-504e-fe0ea1cff3e3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65158d330abfac438bbb4d44|762e7713-61f7-d1b5-504e-fe0ea1cff3e3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695911219854
        },
        "e-107": {
            "id": "e-107",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-108"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65158d330abfac438bbb4d44|c0c0542d-bd44-0d19-9ef3-540e948f44b0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65158d330abfac438bbb4d44|c0c0542d-bd44-0d19-9ef3-540e948f44b0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695911219854
        },
        "e-108": {
            "id": "e-108",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-107"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65158d330abfac438bbb4d44|c0c0542d-bd44-0d19-9ef3-540e948f44b0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65158d330abfac438bbb4d44|c0c0542d-bd44-0d19-9ef3-540e948f44b0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695911219854
        },
        "e-109": {
            "id": "e-109",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-110"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65158d330abfac438bbb4d44|35e96441-9426-aac3-0159-7c140734ff50",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65158d330abfac438bbb4d44|35e96441-9426-aac3-0159-7c140734ff50",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695911219854
        },
        "e-110": {
            "id": "e-110",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-109"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65158d330abfac438bbb4d44|35e96441-9426-aac3-0159-7c140734ff50",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65158d330abfac438bbb4d44|35e96441-9426-aac3-0159-7c140734ff50",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695911219854
        },
        "e-111": {
            "id": "e-111",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-112"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65158d330abfac438bbb4d44|38b011dc-982c-9158-f50d-a6a4d3bf92ec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65158d330abfac438bbb4d44|38b011dc-982c-9158-f50d-a6a4d3bf92ec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695911219854
        },
        "e-112": {
            "id": "e-112",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-111"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65158d330abfac438bbb4d44|38b011dc-982c-9158-f50d-a6a4d3bf92ec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65158d330abfac438bbb4d44|38b011dc-982c-9158-f50d-a6a4d3bf92ec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695911219854
        },
        "e-113": {
            "id": "e-113",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-114"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65158d330abfac438bbb4d44|68300dcc-81f9-3b79-3ce6-7cb9b02fb349",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65158d330abfac438bbb4d44|68300dcc-81f9-3b79-3ce6-7cb9b02fb349",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695911219854
        },
        "e-114": {
            "id": "e-114",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-113"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65158d330abfac438bbb4d44|68300dcc-81f9-3b79-3ce6-7cb9b02fb349",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65158d330abfac438bbb4d44|68300dcc-81f9-3b79-3ce6-7cb9b02fb349",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695911219854
        },
        "e-115": {
            "id": "e-115",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-116"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65158d330abfac438bbb4d44|46cccf18-2bc5-dc83-8cd6-7c4f511d0db5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65158d330abfac438bbb4d44|46cccf18-2bc5-dc83-8cd6-7c4f511d0db5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695911219854
        },
        "e-116": {
            "id": "e-116",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-115"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65158d330abfac438bbb4d44|46cccf18-2bc5-dc83-8cd6-7c4f511d0db5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65158d330abfac438bbb4d44|46cccf18-2bc5-dc83-8cd6-7c4f511d0db5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695911219854
        },
        "e-117": {
            "id": "e-117",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-118"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65158d330abfac438bbb4d44|bdb5e119-9204-566a-f104-913406107a60",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65158d330abfac438bbb4d44|bdb5e119-9204-566a-f104-913406107a60",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695911219854
        },
        "e-118": {
            "id": "e-118",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-117"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65158d330abfac438bbb4d44|bdb5e119-9204-566a-f104-913406107a60",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65158d330abfac438bbb4d44|bdb5e119-9204-566a-f104-913406107a60",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695911219854
        },
        "e-119": {
            "id": "e-119",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516988a62553f7f1a8c714c",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516988a62553f7f1a8c714c",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-3-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-3-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }],
            "createdOn": 1695979658971
        },
        "e-120": {
            "id": "e-120",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-121"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516988a62553f7f1a8c714c|ca40e9cc-8f67-66c1-c8eb-30fd3391a03a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516988a62553f7f1a8c714c|ca40e9cc-8f67-66c1-c8eb-30fd3391a03a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695979658971
        },
        "e-121": {
            "id": "e-121",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-120"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516988a62553f7f1a8c714c|ca40e9cc-8f67-66c1-c8eb-30fd3391a03a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516988a62553f7f1a8c714c|ca40e9cc-8f67-66c1-c8eb-30fd3391a03a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695979658971
        },
        "e-122": {
            "id": "e-122",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-123"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516988a62553f7f1a8c714c|5985abf7-835c-a43f-7358-0777c6297f7e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516988a62553f7f1a8c714c|5985abf7-835c-a43f-7358-0777c6297f7e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695979658971
        },
        "e-123": {
            "id": "e-123",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-122"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516988a62553f7f1a8c714c|5985abf7-835c-a43f-7358-0777c6297f7e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516988a62553f7f1a8c714c|5985abf7-835c-a43f-7358-0777c6297f7e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695979658971
        },
        "e-124": {
            "id": "e-124",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-125"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516988a62553f7f1a8c714c|762e7713-61f7-d1b5-504e-fe0ea1cff3e3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516988a62553f7f1a8c714c|762e7713-61f7-d1b5-504e-fe0ea1cff3e3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695979658971
        },
        "e-125": {
            "id": "e-125",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-124"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516988a62553f7f1a8c714c|762e7713-61f7-d1b5-504e-fe0ea1cff3e3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516988a62553f7f1a8c714c|762e7713-61f7-d1b5-504e-fe0ea1cff3e3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695979658971
        },
        "e-126": {
            "id": "e-126",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-127"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516988a62553f7f1a8c714c|c0c0542d-bd44-0d19-9ef3-540e948f44b0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516988a62553f7f1a8c714c|c0c0542d-bd44-0d19-9ef3-540e948f44b0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695979658971
        },
        "e-127": {
            "id": "e-127",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-126"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516988a62553f7f1a8c714c|c0c0542d-bd44-0d19-9ef3-540e948f44b0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516988a62553f7f1a8c714c|c0c0542d-bd44-0d19-9ef3-540e948f44b0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695979658971
        },
        "e-128": {
            "id": "e-128",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-129"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516988a62553f7f1a8c714c|35e96441-9426-aac3-0159-7c140734ff50",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516988a62553f7f1a8c714c|35e96441-9426-aac3-0159-7c140734ff50",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695979658971
        },
        "e-129": {
            "id": "e-129",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-128"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516988a62553f7f1a8c714c|35e96441-9426-aac3-0159-7c140734ff50",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516988a62553f7f1a8c714c|35e96441-9426-aac3-0159-7c140734ff50",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695979658971
        },
        "e-130": {
            "id": "e-130",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-131"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516988a62553f7f1a8c714c|38b011dc-982c-9158-f50d-a6a4d3bf92ec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516988a62553f7f1a8c714c|38b011dc-982c-9158-f50d-a6a4d3bf92ec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695979658971
        },
        "e-131": {
            "id": "e-131",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-130"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516988a62553f7f1a8c714c|38b011dc-982c-9158-f50d-a6a4d3bf92ec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516988a62553f7f1a8c714c|38b011dc-982c-9158-f50d-a6a4d3bf92ec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695979658971
        },
        "e-132": {
            "id": "e-132",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-133"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516988a62553f7f1a8c714c|68300dcc-81f9-3b79-3ce6-7cb9b02fb349",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516988a62553f7f1a8c714c|68300dcc-81f9-3b79-3ce6-7cb9b02fb349",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695979658971
        },
        "e-133": {
            "id": "e-133",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-132"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516988a62553f7f1a8c714c|68300dcc-81f9-3b79-3ce6-7cb9b02fb349",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516988a62553f7f1a8c714c|68300dcc-81f9-3b79-3ce6-7cb9b02fb349",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695979658971
        },
        "e-134": {
            "id": "e-134",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-135"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516988a62553f7f1a8c714c|46cccf18-2bc5-dc83-8cd6-7c4f511d0db5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516988a62553f7f1a8c714c|46cccf18-2bc5-dc83-8cd6-7c4f511d0db5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695979658971
        },
        "e-135": {
            "id": "e-135",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-134"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516988a62553f7f1a8c714c|46cccf18-2bc5-dc83-8cd6-7c4f511d0db5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516988a62553f7f1a8c714c|46cccf18-2bc5-dc83-8cd6-7c4f511d0db5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695979658971
        },
        "e-136": {
            "id": "e-136",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-137"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516988a62553f7f1a8c714c|bdb5e119-9204-566a-f104-913406107a60",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516988a62553f7f1a8c714c|bdb5e119-9204-566a-f104-913406107a60",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695979658971
        },
        "e-137": {
            "id": "e-137",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-136"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516988a62553f7f1a8c714c|bdb5e119-9204-566a-f104-913406107a60",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516988a62553f7f1a8c714c|bdb5e119-9204-566a-f104-913406107a60",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695979658971
        },
        "e-138": {
            "id": "e-138",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516ba39d05fb7bfdf82a457",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516ba39d05fb7bfdf82a457",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-3-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-3-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }],
            "createdOn": 1695988281419
        },
        "e-139": {
            "id": "e-139",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-140"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516ba39d05fb7bfdf82a457|ca40e9cc-8f67-66c1-c8eb-30fd3391a03a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516ba39d05fb7bfdf82a457|ca40e9cc-8f67-66c1-c8eb-30fd3391a03a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695988281419
        },
        "e-140": {
            "id": "e-140",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-139"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516ba39d05fb7bfdf82a457|ca40e9cc-8f67-66c1-c8eb-30fd3391a03a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516ba39d05fb7bfdf82a457|ca40e9cc-8f67-66c1-c8eb-30fd3391a03a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695988281419
        },
        "e-141": {
            "id": "e-141",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-142"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516ba39d05fb7bfdf82a457|5985abf7-835c-a43f-7358-0777c6297f7e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516ba39d05fb7bfdf82a457|5985abf7-835c-a43f-7358-0777c6297f7e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695988281419
        },
        "e-142": {
            "id": "e-142",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-141"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516ba39d05fb7bfdf82a457|5985abf7-835c-a43f-7358-0777c6297f7e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516ba39d05fb7bfdf82a457|5985abf7-835c-a43f-7358-0777c6297f7e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695988281419
        },
        "e-143": {
            "id": "e-143",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-144"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516ba39d05fb7bfdf82a457|762e7713-61f7-d1b5-504e-fe0ea1cff3e3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516ba39d05fb7bfdf82a457|762e7713-61f7-d1b5-504e-fe0ea1cff3e3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695988281419
        },
        "e-144": {
            "id": "e-144",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-143"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516ba39d05fb7bfdf82a457|762e7713-61f7-d1b5-504e-fe0ea1cff3e3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516ba39d05fb7bfdf82a457|762e7713-61f7-d1b5-504e-fe0ea1cff3e3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695988281419
        },
        "e-145": {
            "id": "e-145",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-146"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516ba39d05fb7bfdf82a457|c0c0542d-bd44-0d19-9ef3-540e948f44b0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516ba39d05fb7bfdf82a457|c0c0542d-bd44-0d19-9ef3-540e948f44b0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695988281419
        },
        "e-146": {
            "id": "e-146",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-145"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516ba39d05fb7bfdf82a457|c0c0542d-bd44-0d19-9ef3-540e948f44b0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516ba39d05fb7bfdf82a457|c0c0542d-bd44-0d19-9ef3-540e948f44b0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695988281419
        },
        "e-147": {
            "id": "e-147",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-148"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516ba39d05fb7bfdf82a457|35e96441-9426-aac3-0159-7c140734ff50",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516ba39d05fb7bfdf82a457|35e96441-9426-aac3-0159-7c140734ff50",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695988281419
        },
        "e-148": {
            "id": "e-148",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-147"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516ba39d05fb7bfdf82a457|35e96441-9426-aac3-0159-7c140734ff50",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516ba39d05fb7bfdf82a457|35e96441-9426-aac3-0159-7c140734ff50",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695988281419
        },
        "e-149": {
            "id": "e-149",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-150"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516ba39d05fb7bfdf82a457|38b011dc-982c-9158-f50d-a6a4d3bf92ec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516ba39d05fb7bfdf82a457|38b011dc-982c-9158-f50d-a6a4d3bf92ec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695988281419
        },
        "e-150": {
            "id": "e-150",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-149"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516ba39d05fb7bfdf82a457|38b011dc-982c-9158-f50d-a6a4d3bf92ec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516ba39d05fb7bfdf82a457|38b011dc-982c-9158-f50d-a6a4d3bf92ec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695988281419
        },
        "e-151": {
            "id": "e-151",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-152"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516ba39d05fb7bfdf82a457|68300dcc-81f9-3b79-3ce6-7cb9b02fb349",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516ba39d05fb7bfdf82a457|68300dcc-81f9-3b79-3ce6-7cb9b02fb349",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695988281419
        },
        "e-152": {
            "id": "e-152",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-151"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516ba39d05fb7bfdf82a457|68300dcc-81f9-3b79-3ce6-7cb9b02fb349",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516ba39d05fb7bfdf82a457|68300dcc-81f9-3b79-3ce6-7cb9b02fb349",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695988281419
        },
        "e-153": {
            "id": "e-153",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-154"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516ba39d05fb7bfdf82a457|46cccf18-2bc5-dc83-8cd6-7c4f511d0db5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516ba39d05fb7bfdf82a457|46cccf18-2bc5-dc83-8cd6-7c4f511d0db5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695988281419
        },
        "e-154": {
            "id": "e-154",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-153"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516ba39d05fb7bfdf82a457|46cccf18-2bc5-dc83-8cd6-7c4f511d0db5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516ba39d05fb7bfdf82a457|46cccf18-2bc5-dc83-8cd6-7c4f511d0db5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695988281419
        },
        "e-155": {
            "id": "e-155",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-156"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516ba39d05fb7bfdf82a457|bdb5e119-9204-566a-f104-913406107a60",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516ba39d05fb7bfdf82a457|bdb5e119-9204-566a-f104-913406107a60",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695988281419
        },
        "e-156": {
            "id": "e-156",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-155"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516ba39d05fb7bfdf82a457|bdb5e119-9204-566a-f104-913406107a60",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516ba39d05fb7bfdf82a457|bdb5e119-9204-566a-f104-913406107a60",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695988281419
        },
        "e-157": {
            "id": "e-157",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516e3d4e8b274b4838641c7",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516e3d4e8b274b4838641c7",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-3-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-3-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }],
            "createdOn": 1695998932924
        },
        "e-158": {
            "id": "e-158",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-159"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516e3d4e8b274b4838641c7|ca40e9cc-8f67-66c1-c8eb-30fd3391a03a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516e3d4e8b274b4838641c7|ca40e9cc-8f67-66c1-c8eb-30fd3391a03a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695998932924
        },
        "e-159": {
            "id": "e-159",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-158"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516e3d4e8b274b4838641c7|ca40e9cc-8f67-66c1-c8eb-30fd3391a03a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516e3d4e8b274b4838641c7|ca40e9cc-8f67-66c1-c8eb-30fd3391a03a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695998932924
        },
        "e-160": {
            "id": "e-160",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-161"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516e3d4e8b274b4838641c7|5985abf7-835c-a43f-7358-0777c6297f7e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516e3d4e8b274b4838641c7|5985abf7-835c-a43f-7358-0777c6297f7e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695998932924
        },
        "e-161": {
            "id": "e-161",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-160"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516e3d4e8b274b4838641c7|5985abf7-835c-a43f-7358-0777c6297f7e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516e3d4e8b274b4838641c7|5985abf7-835c-a43f-7358-0777c6297f7e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695998932924
        },
        "e-162": {
            "id": "e-162",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-163"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516e3d4e8b274b4838641c7|762e7713-61f7-d1b5-504e-fe0ea1cff3e3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516e3d4e8b274b4838641c7|762e7713-61f7-d1b5-504e-fe0ea1cff3e3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695998932924
        },
        "e-163": {
            "id": "e-163",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-162"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516e3d4e8b274b4838641c7|762e7713-61f7-d1b5-504e-fe0ea1cff3e3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516e3d4e8b274b4838641c7|762e7713-61f7-d1b5-504e-fe0ea1cff3e3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695998932924
        },
        "e-164": {
            "id": "e-164",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-165"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516e3d4e8b274b4838641c7|c0c0542d-bd44-0d19-9ef3-540e948f44b0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516e3d4e8b274b4838641c7|c0c0542d-bd44-0d19-9ef3-540e948f44b0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695998932924
        },
        "e-165": {
            "id": "e-165",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-164"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516e3d4e8b274b4838641c7|c0c0542d-bd44-0d19-9ef3-540e948f44b0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516e3d4e8b274b4838641c7|c0c0542d-bd44-0d19-9ef3-540e948f44b0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695998932924
        },
        "e-166": {
            "id": "e-166",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-167"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516e3d4e8b274b4838641c7|35e96441-9426-aac3-0159-7c140734ff50",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516e3d4e8b274b4838641c7|35e96441-9426-aac3-0159-7c140734ff50",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695998932924
        },
        "e-167": {
            "id": "e-167",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-166"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516e3d4e8b274b4838641c7|35e96441-9426-aac3-0159-7c140734ff50",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516e3d4e8b274b4838641c7|35e96441-9426-aac3-0159-7c140734ff50",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695998932924
        },
        "e-168": {
            "id": "e-168",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-169"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516e3d4e8b274b4838641c7|38b011dc-982c-9158-f50d-a6a4d3bf92ec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516e3d4e8b274b4838641c7|38b011dc-982c-9158-f50d-a6a4d3bf92ec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695998932924
        },
        "e-169": {
            "id": "e-169",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-168"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516e3d4e8b274b4838641c7|38b011dc-982c-9158-f50d-a6a4d3bf92ec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516e3d4e8b274b4838641c7|38b011dc-982c-9158-f50d-a6a4d3bf92ec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695998932924
        },
        "e-170": {
            "id": "e-170",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-171"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516e3d4e8b274b4838641c7|68300dcc-81f9-3b79-3ce6-7cb9b02fb349",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516e3d4e8b274b4838641c7|68300dcc-81f9-3b79-3ce6-7cb9b02fb349",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695998932924
        },
        "e-171": {
            "id": "e-171",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-170"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516e3d4e8b274b4838641c7|68300dcc-81f9-3b79-3ce6-7cb9b02fb349",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516e3d4e8b274b4838641c7|68300dcc-81f9-3b79-3ce6-7cb9b02fb349",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695998932924
        },
        "e-172": {
            "id": "e-172",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-173"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516e3d4e8b274b4838641c7|46cccf18-2bc5-dc83-8cd6-7c4f511d0db5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516e3d4e8b274b4838641c7|46cccf18-2bc5-dc83-8cd6-7c4f511d0db5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695998932924
        },
        "e-173": {
            "id": "e-173",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-172"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516e3d4e8b274b4838641c7|46cccf18-2bc5-dc83-8cd6-7c4f511d0db5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516e3d4e8b274b4838641c7|46cccf18-2bc5-dc83-8cd6-7c4f511d0db5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695998932924
        },
        "e-174": {
            "id": "e-174",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-175"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516e3d4e8b274b4838641c7|bdb5e119-9204-566a-f104-913406107a60",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516e3d4e8b274b4838641c7|bdb5e119-9204-566a-f104-913406107a60",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695998932924
        },
        "e-175": {
            "id": "e-175",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-174"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516e3d4e8b274b4838641c7|bdb5e119-9204-566a-f104-913406107a60",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516e3d4e8b274b4838641c7|bdb5e119-9204-566a-f104-913406107a60",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695998932924
        },
        "e-176": {
            "id": "e-176",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516fca46d7373fec9950749",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516fca46d7373fec9950749",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-3-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-3-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }],
            "createdOn": 1696005285234
        },
        "e-177": {
            "id": "e-177",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-178"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516fca46d7373fec9950749|ca40e9cc-8f67-66c1-c8eb-30fd3391a03a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516fca46d7373fec9950749|ca40e9cc-8f67-66c1-c8eb-30fd3391a03a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1696005285234
        },
        "e-178": {
            "id": "e-178",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-177"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516fca46d7373fec9950749|ca40e9cc-8f67-66c1-c8eb-30fd3391a03a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516fca46d7373fec9950749|ca40e9cc-8f67-66c1-c8eb-30fd3391a03a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1696005285234
        },
        "e-179": {
            "id": "e-179",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-180"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516fca46d7373fec9950749|5985abf7-835c-a43f-7358-0777c6297f7e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516fca46d7373fec9950749|5985abf7-835c-a43f-7358-0777c6297f7e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1696005285234
        },
        "e-180": {
            "id": "e-180",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-179"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516fca46d7373fec9950749|5985abf7-835c-a43f-7358-0777c6297f7e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516fca46d7373fec9950749|5985abf7-835c-a43f-7358-0777c6297f7e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1696005285234
        },
        "e-181": {
            "id": "e-181",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-182"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516fca46d7373fec9950749|762e7713-61f7-d1b5-504e-fe0ea1cff3e3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516fca46d7373fec9950749|762e7713-61f7-d1b5-504e-fe0ea1cff3e3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1696005285234
        },
        "e-182": {
            "id": "e-182",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-181"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516fca46d7373fec9950749|762e7713-61f7-d1b5-504e-fe0ea1cff3e3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516fca46d7373fec9950749|762e7713-61f7-d1b5-504e-fe0ea1cff3e3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1696005285234
        },
        "e-183": {
            "id": "e-183",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-184"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516fca46d7373fec9950749|c0c0542d-bd44-0d19-9ef3-540e948f44b0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516fca46d7373fec9950749|c0c0542d-bd44-0d19-9ef3-540e948f44b0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1696005285234
        },
        "e-184": {
            "id": "e-184",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-183"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516fca46d7373fec9950749|c0c0542d-bd44-0d19-9ef3-540e948f44b0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516fca46d7373fec9950749|c0c0542d-bd44-0d19-9ef3-540e948f44b0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1696005285234
        },
        "e-185": {
            "id": "e-185",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-186"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516fca46d7373fec9950749|35e96441-9426-aac3-0159-7c140734ff50",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516fca46d7373fec9950749|35e96441-9426-aac3-0159-7c140734ff50",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1696005285234
        },
        "e-186": {
            "id": "e-186",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-185"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516fca46d7373fec9950749|35e96441-9426-aac3-0159-7c140734ff50",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516fca46d7373fec9950749|35e96441-9426-aac3-0159-7c140734ff50",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1696005285234
        },
        "e-187": {
            "id": "e-187",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-188"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516fca46d7373fec9950749|38b011dc-982c-9158-f50d-a6a4d3bf92ec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516fca46d7373fec9950749|38b011dc-982c-9158-f50d-a6a4d3bf92ec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1696005285234
        },
        "e-188": {
            "id": "e-188",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-187"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516fca46d7373fec9950749|38b011dc-982c-9158-f50d-a6a4d3bf92ec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516fca46d7373fec9950749|38b011dc-982c-9158-f50d-a6a4d3bf92ec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1696005285234
        },
        "e-189": {
            "id": "e-189",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-190"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516fca46d7373fec9950749|68300dcc-81f9-3b79-3ce6-7cb9b02fb349",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516fca46d7373fec9950749|68300dcc-81f9-3b79-3ce6-7cb9b02fb349",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1696005285234
        },
        "e-190": {
            "id": "e-190",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-189"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516fca46d7373fec9950749|68300dcc-81f9-3b79-3ce6-7cb9b02fb349",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516fca46d7373fec9950749|68300dcc-81f9-3b79-3ce6-7cb9b02fb349",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1696005285234
        },
        "e-191": {
            "id": "e-191",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-192"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516fca46d7373fec9950749|46cccf18-2bc5-dc83-8cd6-7c4f511d0db5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516fca46d7373fec9950749|46cccf18-2bc5-dc83-8cd6-7c4f511d0db5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1696005285234
        },
        "e-192": {
            "id": "e-192",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-191"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516fca46d7373fec9950749|46cccf18-2bc5-dc83-8cd6-7c4f511d0db5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516fca46d7373fec9950749|46cccf18-2bc5-dc83-8cd6-7c4f511d0db5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1696005285234
        },
        "e-193": {
            "id": "e-193",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-194"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516fca46d7373fec9950749|bdb5e119-9204-566a-f104-913406107a60",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516fca46d7373fec9950749|bdb5e119-9204-566a-f104-913406107a60",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1696005285234
        },
        "e-194": {
            "id": "e-194",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-193"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6516fca46d7373fec9950749|bdb5e119-9204-566a-f104-913406107a60",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6516fca46d7373fec9950749|bdb5e119-9204-566a-f104-913406107a60",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1696005285234
        },
        "e-195": {
            "id": "e-195",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-4",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-196"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".play_button",
                "originalId": "64ec86eca7c91808f274538d|2256934e-293b-8d41-9c5b-5e0c504e45a4",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".play_button",
                "originalId": "64ec86eca7c91808f274538d|2256934e-293b-8d41-9c5b-5e0c504e45a4",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1696269086604
        },
        "e-196": {
            "id": "e-196",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-195"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".play_button",
                "originalId": "64ec86eca7c91808f274538d|2256934e-293b-8d41-9c5b-5e0c504e45a4",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".play_button",
                "originalId": "64ec86eca7c91808f274538d|2256934e-293b-8d41-9c5b-5e0c504e45a4",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1696269086605
        },
        "e-197": {
            "id": "e-197",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-4",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-198"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".h1.hero",
                "originalId": "64c79eacb044b679c7f4dd6b|59271182-f875-d4dc-3a94-3de05c5eb036",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".h1.hero",
                "originalId": "64c79eacb044b679c7f4dd6b|59271182-f875-d4dc-3a94-3de05c5eb036",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1699884171548
        },
        "e-198": {
            "id": "e-198",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-197"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".h1.hero",
                "originalId": "64c79eacb044b679c7f4dd6b|59271182-f875-d4dc-3a94-3de05c5eb036",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".h1.hero",
                "originalId": "64c79eacb044b679c7f4dd6b|59271182-f875-d4dc-3a94-3de05c5eb036",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1699884171549
        },
        "e-201": {
            "id": "e-201",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "655b5af71d6b4e6ec6986948",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "655b5af71d6b4e6ec6986948",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-3-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-3-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }],
            "createdOn": 1700498499622
        },
        "e-202": {
            "id": "e-202",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-4",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-203"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "655b5af71d6b4e6ec6986948|874cd836-c3d9-89d7-492c-66ff581b7cc5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "655b5af71d6b4e6ec6986948|874cd836-c3d9-89d7-492c-66ff581b7cc5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700501959757
        },
        "e-203": {
            "id": "e-203",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-202"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "655b5af71d6b4e6ec6986948|874cd836-c3d9-89d7-492c-66ff581b7cc5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "655b5af71d6b4e6ec6986948|874cd836-c3d9-89d7-492c-66ff581b7cc5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700501959757
        }
    },
    "actionLists": {
        "a": {
            "id": "a",
            "title": "img-zoom-out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 300,
                        "target": {
                            "id": "64c79eacb044b679c7f4dd6b|a3dd6e74-6a16-8c25-117a-2bfa2ca78204"
                        },
                        "xValue": 1.2,
                        "yValue": 1.2,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 600,
                        "target": {
                            "id": "64c79eacb044b679c7f4dd6b|a3dd6e74-6a16-8c25-117a-2bfa2ca78204"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1692123647416
        },
        "a-2": {
            "id": "a-2",
            "title": "img-zoom-in",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-2-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 600,
                        "target": {
                            "id": "64c79eacb044b679c7f4dd6b|a3dd6e74-6a16-8c25-117a-2bfa2ca78204"
                        },
                        "xValue": 1.2,
                        "yValue": 1.2,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1692123647416
        },
        "a-3": {
            "id": "a-3",
            "title": "art-cursor",
            "continuousParameterGroups": [{
                "id": "a-3-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-3-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".cursor-dot",
                                "selectorGuids": ["713713a9-865f-e7d8-b11b-deac58a01bb6"]
                            },
                            "xValue": -50,
                            "xUnit": "vw",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-3-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".cursor-dot",
                                "selectorGuids": ["713713a9-865f-e7d8-b11b-deac58a01bb6"]
                            },
                            "xValue": 50,
                            "xUnit": "vw",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-3-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-3-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".cursor-dot",
                                "selectorGuids": ["713713a9-865f-e7d8-b11b-deac58a01bb6"]
                            },
                            "xValue": null,
                            "yValue": -50,
                            "xUnit": "vh",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-3-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".cursor-dot",
                                "selectorGuids": ["713713a9-865f-e7d8-b11b-deac58a01bb6"]
                            },
                            "xValue": null,
                            "yValue": 50,
                            "xUnit": "vh",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1692642458572
        },
        "a-4": {
            "id": "a-4",
            "title": "artist-name-hover",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-4-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".cursor-dot",
                            "selectorGuids": ["713713a9-865f-e7d8-b11b-deac58a01bb6"]
                        },
                        "widthValue": 0.6,
                        "heightValue": 0.6,
                        "widthUnit": "em",
                        "heightUnit": "em",
                        "locked": false
                    }
                }, {
                    "id": "a-4-n-2",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".cursor-dot",
                            "selectorGuids": ["713713a9-865f-e7d8-b11b-deac58a01bb6"]
                        },
                        "globalSwatchId": "cc0516c7",
                        "rValue": 0,
                        "bValue": 0,
                        "gValue": 0,
                        "aValue": 1
                    }
                }, {
                    "id": "a-4-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".paragraph.white.cursor-p",
                            "selectorGuids": ["397f3040-96fb-2452-4d15-c11d619835ff", "b390f3ff-a876-d4ac-b007-5daeaa1c2454", "8505a1fb-761a-ac26-5285-72155d1d1e20"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-4-n-3",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "selector": ".cursor-dot",
                            "selectorGuids": ["713713a9-865f-e7d8-b11b-deac58a01bb6"]
                        },
                        "widthValue": 7.03,
                        "heightValue": 7.03,
                        "widthUnit": "em",
                        "heightUnit": "em",
                        "locked": false
                    }
                }, {
                    "id": "a-4-n-4",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "selector": ".cursor-dot",
                            "selectorGuids": ["713713a9-865f-e7d8-b11b-deac58a01bb6"]
                        },
                        "globalSwatchId": "3e52c1cf",
                        "rValue": 240,
                        "bValue": 14,
                        "gValue": 14,
                        "aValue": 1
                    }
                }, {
                    "id": "a-4-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "selector": ".paragraph.white.cursor-p",
                            "selectorGuids": ["397f3040-96fb-2452-4d15-c11d619835ff", "b390f3ff-a876-d4ac-b007-5daeaa1c2454", "8505a1fb-761a-ac26-5285-72155d1d1e20"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1692643636924
        },
        "a-5": {
            "id": "a-5",
            "title": "artist-name-hover-out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-5-n-3",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "selector": ".cursor-dot",
                            "selectorGuids": ["713713a9-865f-e7d8-b11b-deac58a01bb6"]
                        },
                        "widthValue": 0.6,
                        "heightValue": 0.6,
                        "widthUnit": "em",
                        "heightUnit": "em",
                        "locked": false
                    }
                }, {
                    "id": "a-5-n-4",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "selector": ".cursor-dot",
                            "selectorGuids": ["713713a9-865f-e7d8-b11b-deac58a01bb6"]
                        },
                        "globalSwatchId": "cc0516c7",
                        "rValue": 0,
                        "bValue": 0,
                        "gValue": 0,
                        "aValue": 1
                    }
                }, {
                    "id": "a-5-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "selector": ".paragraph.white.cursor-p",
                            "selectorGuids": ["397f3040-96fb-2452-4d15-c11d619835ff", "b390f3ff-a876-d4ac-b007-5daeaa1c2454", "8505a1fb-761a-ac26-5285-72155d1d1e20"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1692643636924
        },
        "a-10": {
            "id": "a-10",
            "title": "link-hover",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-10-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "selector": ".cursor-dot",
                            "selectorGuids": ["713713a9-865f-e7d8-b11b-deac58a01bb6"]
                        },
                        "widthValue": 0.3,
                        "heightValue": 0.3,
                        "widthUnit": "em",
                        "heightUnit": "em",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1693386379141
        },
        "a-11": {
            "id": "a-11",
            "title": "link-hover-out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-11-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "selector": ".cursor-dot",
                            "selectorGuids": ["713713a9-865f-e7d8-b11b-deac58a01bb6"]
                        },
                        "widthValue": 0.6,
                        "heightValue": 0.6,
                        "widthUnit": "em",
                        "heightUnit": "em",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1693386379141
        },
        "a-8": {
            "id": "a-8",
            "title": "section 2 | m-enter| pointer color",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-8-n",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 300,
                        "target": {
                            "selector": ".cursor-dot",
                            "selectorGuids": ["713713a9-865f-e7d8-b11b-deac58a01bb6"]
                        },
                        "globalSwatchId": "9c6135b1",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1693385522272
        },
        "a-9": {
            "id": "a-9",
            "title": "section 2 | m-leave| pointer color",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-9-n",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 300,
                        "target": {
                            "selector": ".cursor-dot",
                            "selectorGuids": ["713713a9-865f-e7d8-b11b-deac58a01bb6"]
                        },
                        "globalSwatchId": "cc0516c7",
                        "rValue": 0,
                        "bValue": 0,
                        "gValue": 0,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1693385522272
        }
    },
    "site": {
        "mediaQueries": [{
            "key": "main",
            "min": 992,
            "max": 10000
        }, {
            "key": "medium",
            "min": 768,
            "max": 991
        }, {
            "key": "small",
            "min": 480,
            "max": 767
        }, {
            "key": "tiny",
            "min": 0,
            "max": 479
        }]
    }
});
