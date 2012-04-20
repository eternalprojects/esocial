/*
 Highcharts JS v2.1.6 (2011-07-08)

 (c) 2009-2011 Torstein H?nsi

 License: www.highcharts.com/license
 */
(function () {
    function pa(a, b) {
        var c;
        a || (a = {});
        for (c in b)a[c] = b[c];
        return a
    }

    function ja(a, b) {
        return parseInt(a, b || 10)
    }

    function Pb(a) {
        return typeof a === "string"
    }

    function Lb(a) {
        return typeof a === "object"
    }

    function dc(a) {
        return typeof a === "number"
    }

    function qc(a, b) {
        for (var c = a.length; c--;)if (a[c] === b) {
            a.splice(c, 1);
            break
        }
    }

    function M(a) {
        return a !== Va && a !== null
    }

    function Ea(a, b, c) {
        var d, e;
        if (Pb(b))if (M(c))a.setAttribute(b, c); else {
            if (a && a.getAttribute)e = a.getAttribute(b)
        } else if (M(b) && Lb(b))for (d in b)a.setAttribute(d,
            b[d]);
        return e
    }

    function rc(a) {
        if (!a || a.constructor !== Array)a = [a];
        return a
    }

    function C() {
        var a = arguments, b, c, d = a.length;
        for (b = 0; b < d; b++) {
            c = a[b];
            if (typeof c !== "undefined" && c !== null)return c
        }
    }

    function Na(a, b) {
        if (Bc)if (b && b.opacity !== Va)b.filter = "alpha(opacity=" + b.opacity * 100 + ")";
        pa(a.style, b)
    }

    function ib(a, b, c, d, e) {
        a = wa.createElement(a);
        b && pa(a, b);
        e && Na(a, {padding:0, border:jb, margin:0});
        c && Na(a, c);
        d && d.appendChild(a);
        return a
    }

    function yb(a, b) {
        var c = function () {
        };
        c.prototype = new a;
        pa(c.prototype, b);
        return c
    }

    function zd(a, b, c, d) {
        var e = Wa.lang;
        a = a;
        var f = isNaN(b = $a(b)) ? 2 : b;
        b = c === undefined ? e.decimalPoint : c;
        d = d === undefined ? e.thousandsSep : d;
        e = a < 0 ? "-" : "";
        c = String(ja(a = $a(+a || 0).toFixed(f)));
        var g = c.length > 3 ? c.length % 3 : 0;
        return e + (g ? c.substr(0, g) + d : "") + c.substr(g).replace(/(\d{3})(?=\d)/g, "$1" + d) + (f ? b + $a(a - c).toFixed(f).slice(2) : "")
    }

    function Ad() {
        this.symbol = this.color = 0
    }

    function ec(a, b) {
        Cc = C(a, b.animation)
    }

    function Bd() {
        var a = Wa.global.useUTC;
        Dc = a ? Date.UTC : function (b, c, d, e, f, g) {
            return(new Date(b, c, C(d, 1), C(e,
                0), C(f, 0), C(g, 0))).getTime()
        };
        bd = a ? "getUTCMinutes" : "getMinutes";
        cd = a ? "getUTCHours" : "getHours";
        dd = a ? "getUTCDay" : "getDay";
        sc = a ? "getUTCDate" : "getDate";
        Ec = a ? "getUTCMonth" : "getMonth";
        Fc = a ? "getUTCFullYear" : "getFullYear";
        Cd = a ? "setUTCMinutes" : "setMinutes";
        Dd = a ? "setUTCHours" : "setHours";
        ed = a ? "setUTCDate" : "setDate";
        Ed = a ? "setUTCMonth" : "setMonth";
        Fd = a ? "setUTCFullYear" : "setFullYear"
    }

    function Gc(a) {
        Hc || (Hc = ib(Qb));
        a && Hc.appendChild(a);
        Hc.innerHTML = ""
    }

    function Ic() {
    }

    function Gd(a, b) {
        function c(m, i) {
            function y(k, o) {
                this.pos = k;
                this.minor = o;
                this.isNew = true;
                o || this.addLabel()
            }

            function x(k) {
                if (k) {
                    this.options = k;
                    this.id = k.id
                }
                return this
            }

            function Q(k, o, r) {
                this.isNegative = o;
                this.options = k;
                this.x = r;
                this.alignOptions = {align:k.align || (qa ? o ? "left" : "right" : "center"), verticalAlign:k.verticalAlign || (qa ? "middle" : o ? "bottom" : "top"), y:C(k.y, qa ? 4 : o ? 14 : -6), x:C(k.x, qa ? o ? -6 : 6 : 0)};
                this.textAlign = k.textAlign || (qa ? o ? "right" : "left" : "center")
            }

            function na() {
                var k = [], o = [], r;
                T = ra = null;
                Fa = [];
                u(Ia, function (q) {
                    r = false;
                    u(["xAxis", "yAxis"],
                        function (ma) {
                            if (q.isCartesian && (ma === "xAxis" && Ga || ma === "yAxis" && !Ga) && (q.options[ma] === i.index || q.options[ma] === Va && i.index === 0)) {
                                q[ma] = v;
                                Fa.push(q);
                                r = true
                            }
                        });
                    if (!q.visible && w.ignoreHiddenSeries)r = false;
                    if (r) {
                        var A, U, G, V, Ba;
                        if (!Ga) {
                            A = q.options.stacking;
                            Jc = A === "percent";
                            if (A) {
                                V = q.type + C(q.options.stack, "");
                                Ba = "-" + V;
                                q.stackKey = V;
                                U = k[V] || [];
                                k[V] = U;
                                G = o[Ba] || [];
                                o[Ba] = G
                            }
                            if (Jc) {
                                T = 0;
                                ra = 99
                            }
                        }
                        if (q.isCartesian) {
                            u(q.data, function (ma) {
                                var s = ma.x, W = ma.y, ba = W < 0, ia = ba ? G : U, zb = ba ? Ba : V;
                                if (T === null)T = ra = ma[$];
                                if (Ga)if (s >
                                    ra)ra = s; else {
                                    if (s < T)T = s
                                } else if (M(W)) {
                                    if (A)ia[s] = M(ia[s]) ? ia[s] + W : W;
                                    W = ia ? ia[s] : W;
                                    ma = C(ma.low, W);
                                    if (!Jc)if (W > ra)ra = W; else if (ma < T)T = ma;
                                    if (A) {
                                        t[zb] || (t[zb] = {});
                                        t[zb][s] || (t[zb][s] = new Q(i.stackLabels, ba, s));
                                        t[zb][s].setTotal(W)
                                    }
                                }
                            });
                            if (/(area|column|bar)/.test(q.type) && !Ga)if (T >= 0) {
                                T = 0;
                                Hd = true
                            } else if (ra < 0) {
                                ra = 0;
                                Id = true
                            }
                        }
                    }
                })
            }

            function O(k, o) {
                var r, q;
                Fb = o ? 1 : sa.pow(10, kb(sa.log(k) / sa.LN10));
                r = k / Fb;
                if (!o) {
                    o = [1, 2, 2.5, 5, 10];
                    if (i.allowDecimals === false || H)if (Fb === 1)o = [1, 2, 5, 10]; else if (Fb <= 0.1)o = [1 / Fb]
                }
                for (q =
                         0; q < o.length; q++) {
                    k = o[q];
                    if (r <= (o[q] + (o[q + 1] || o[q])) / 2)break
                }
                k *= Fb;
                return k
            }

            function ea(k) {
                var o;
                o = k;
                Fb = C(Fb, sa.pow(10, kb(sa.log(Ta) / sa.LN10)));
                if (Fb < 1) {
                    o = X(1 / Fb) * 10;
                    o = X(k * o) / o
                }
                return o
            }

            function Ma() {
                var k, o, r, q, A = i.tickInterval, U = i.tickPixelInterval;
                k = i.maxZoom || (Ga && !M(i.min) && !M(i.max) ? qb(m.smallestInterval * 5, ra - T) : null);
                oa = z ? Ca : xa;
                if (Rb) {
                    r = m[Ga ? "xAxis" : "yAxis"][i.linkedTo];
                    q = r.getExtremes();
                    ca = C(q.min, q.dataMin);
                    fa = C(q.max, q.dataMax)
                } else {
                    ca = C(Ja, i.min, T);
                    fa = C(Oa, i.max, ra)
                }
                if (H) {
                    ca = sa.log(ca) /
                        sa.LN10;
                    fa = sa.log(fa) / sa.LN10
                }
                if (fa - ca < k) {
                    q = (k - fa + ca) / 2;
                    ca = Ha(ca - q, C(i.min, ca - q), T);
                    fa = qb(ca + k, C(i.max, ca + k), ra)
                }
                if (!Xa && !Jc && !Rb && M(ca) && M(fa)) {
                    k = fa - ca || 1;
                    if (!M(i.min) && !M(Ja) && Jd && (T < 0 || !Hd))ca -= k * Jd;
                    if (!M(i.max) && !M(Oa) && Kd && (ra > 0 || !Id))fa += k * Kd
                }
                Ta = ca === fa ? 1 : Rb && !A && U === r.options.tickPixelInterval ? r.tickInterval : C(A, Xa ? 1 : (fa - ca) * U / oa);
                if (!F && !M(i.tickInterval))Ta = O(Ta);
                v.tickInterval = Ta;
                Kc = i.minorTickInterval === "auto" && Ta ? Ta / 5 : i.minorTickInterval;
                if (F) {
                    ta = [];
                    A = Wa.global.useUTC;
                    var G = 1E3 / rb, V = 6E4 /
                        rb, Ba = 36E5 / rb;
                    U = 864E5 / rb;
                    k = 6048E5 / rb;
                    q = 2592E6 / rb;
                    var ma = 31556952E3 / rb, s = [
                        ["second", G, [1, 2, 5, 10, 15, 30]],
                        ["minute", V, [1, 2, 5, 10, 15, 30]],
                        ["hour", Ba, [1, 2, 3, 4, 6, 8, 12]],
                        ["day", U, [1, 2]],
                        ["week", k, [1, 2]],
                        ["month", q, [1, 2, 3, 4, 6]],
                        ["year", ma, null]
                    ], W = s[6], ba = W[1], ia = W[2];
                    for (r = 0; r < s.length; r++) {
                        W = s[r];
                        ba = W[1];
                        ia = W[2];
                        if (s[r + 1])if (Ta <= (ba * ia[ia.length - 1] + s[r + 1][1]) / 2)break
                    }
                    if (ba === ma && Ta < 5 * ba)ia = [1, 2, 5];
                    s = O(Ta / ba, ia);
                    ia = new Date(ca * rb);
                    ia.setMilliseconds(0);
                    if (ba >= G)ia.setSeconds(ba >= V ? 0 : s * kb(ia.getSeconds() /
                        s));
                    if (ba >= V)ia[Cd](ba >= Ba ? 0 : s * kb(ia[bd]() / s));
                    if (ba >= Ba)ia[Dd](ba >= U ? 0 : s * kb(ia[cd]() / s));
                    if (ba >= U)ia[ed](ba >= q ? 1 : s * kb(ia[sc]() / s));
                    if (ba >= q) {
                        ia[Ed](ba >= ma ? 0 : s * kb(ia[Ec]() / s));
                        o = ia[Fc]()
                    }
                    if (ba >= ma) {
                        o -= o % s;
                        ia[Fd](o)
                    }
                    ba === k && ia[ed](ia[sc]() - ia[dd]() + i.startOfWeek);
                    r = 1;
                    o = ia[Fc]();
                    G = ia.getTime() / rb;
                    V = ia[Ec]();
                    for (Ba = ia[sc](); G < fa && r < Ca;) {
                        ta.push(G);
                        if (ba === ma)G = Dc(o + r * s, 0) / rb; else if (ba === q)G = Dc(o, V + r * s) / rb; else if (!A && (ba === U || ba === k))G = Dc(o, V, Ba + r * s * (ba === U ? 1 : 7)); else G += ba * s;
                        r++
                    }
                    ta.push(G);
                    Lc = i.dateTimeLabelFormats[W[0]]
                } else {
                    r =
                        ea(kb(ca / Ta) * Ta);
                    o = ea(fd(fa / Ta) * Ta);
                    ta = [];
                    for (r = ea(r); r <= o;) {
                        ta.push(r);
                        r = ea(r + Ta)
                    }
                }
                if (!Rb) {
                    if (Xa || Ga && m.hasColumn) {
                        o = (Xa ? 1 : Ta) * 0.5;
                        if (Xa || !M(C(i.min, Ja)))ca -= o;
                        if (Xa || !M(C(i.max, Oa)))fa += o
                    }
                    o = ta[0];
                    r = ta[ta.length - 1];
                    if (i.startOnTick)ca = o; else ca > o && ta.shift();
                    if (i.endOnTick)fa = r; else fa < r && ta.pop();
                    Mb || (Mb = {x:0, y:0});
                    if (!F && ta.length > Mb[$])Mb[$] = ta.length
                }
            }

            function Aa() {
                var k, o;
                Gb = ca;
                Ld = fa;
                na();
                Ma();
                fb = ua;
                ua = oa / (fa - ca || 1);
                if (!Ga)for (k in t)for (o in t[k])t[k][o].cum = t[k][o].total;
                if (!v.isDirty)v.isDirty =
                    ca !== Gb || fa !== Ld
            }

            function Qa(k) {
                k = (new x(k)).render();
                Sb.push(k);
                return k
            }

            function Ra() {
                var k = i.title, o = i.stackLabels, r = i.alternateGridColor, q = i.lineWidth, A, U, G = m.hasRendered, V = G && M(Gb) && !isNaN(Gb);
                A = Fa.length && M(ca) && M(fa);
                oa = z ? Ca : xa;
                ua = oa / (fa - ca || 1);
                eb = z ? Y : sb;
                if (A || Rb) {
                    if (Kc && !Xa)for (A = ca + (ta[0] - ca) % Kc; A <= fa; A += Kc) {
                        Zb[A] || (Zb[A] = new y(A, true));
                        V && Zb[A].isNew && Zb[A].render(null, true);
                        Zb[A].isActive = true;
                        Zb[A].render()
                    }
                    u(ta, function (s, W) {
                        if (!Rb || s >= ca && s <= fa) {
                            V && tb[s].isNew && tb[s].render(W, true);
                            tb[s].isActive = true;
                            tb[s].render(W)
                        }
                    });
                    r && u(ta, function (s, W) {
                        if (W % 2 === 0 && s < fa) {
                            fc[s] || (fc[s] = new x);
                            fc[s].options = {from:s, to:ta[W + 1] !== Va ? ta[W + 1] : fa, color:r};
                            fc[s].render();
                            fc[s].isActive = true
                        }
                    });
                    G || u((i.plotLines || []).concat(i.plotBands || []), function (s) {
                        Sb.push((new x(s)).render())
                    })
                }
                u([tb, Zb, fc], function (s) {
                    for (var W in s)if (s[W].isActive)s[W].isActive = false; else {
                        s[W].destroy();
                        delete s[W]
                    }
                });
                if (q) {
                    A = Y + (Ka ? Ca : 0) + P;
                    U = Ua - sb - (Ka ? xa : 0) + P;
                    A = ga.crispLine([ab, z ? Y : A, z ? U : ha, La, z ? Ya - Hb : A, z ? U : Ua - sb], q);
                    if (ka)ka.animate({d:A});
                    else ka = ga.path(A).attr({stroke:i.lineColor, "stroke-width":q, zIndex:7}).add()
                }
                if (v.axisTitle) {
                    A = z ? Y : ha;
                    q = ja(k.style.fontSize || 12);
                    A = {low:A + (z ? 0 : oa), middle:A + oa / 2, high:A + (z ? oa : 0)}[k.align];
                    q = (z ? ha + xa : Y) + (z ? 1 : -1) * (Ka ? -1 : 1) * gd + (Z === 2 ? q : 0);
                    v.axisTitle[G ? "animate" : "attr"]({x:z ? A : q + (Ka ? Ca : 0) + P + (k.x || 0), y:z ? q - (Ka ? xa : 0) + P : A + (k.y || 0)})
                }
                if (o && o.enabled) {
                    var Ba, ma;
                    o = v.stackTotalGroup;
                    if (!o)v.stackTotalGroup = o = ga.g("stack-labels").attr({visibility:Ab, zIndex:6}).translate(Y, ha).add();
                    for (Ba in t) {
                        k = t[Ba];
                        for (ma in k)k[ma].render(o)
                    }
                }
                v.isDirty =
                    false
            }

            function Za(k) {
                for (var o = Sb.length; o--;)Sb[o].id === k && Sb[o].destroy()
            }

            var Ga = i.isX, Ka = i.opposite, z = qa ? !Ga : Ga, Z = z ? Ka ? 0 : 2 : Ka ? 1 : 3, t = {};
            i = va(Ga ? Mc : hd, [Xd, Yd, Md, Zd][Z], i);
            var v = this, N = i.type, F = N === "datetime", H = N === "logarithmic", P = i.offset || 0, $ = Ga ? "x" : "y", oa, ua, fb, eb = z ? Y : sb, Ib, Tb, gc, L, ka, T, ra, Fa, Ja, Oa, fa = null, ca = null, Gb, Ld, Jd = i.minPadding, Kd = i.maxPadding, Rb = M(i.linkedTo), Hd, Id, Jc;
            N = i.events;
            var id, Sb = [], Ta, Kc, Fb, ta, tb = {}, Zb = {}, fc = {}, hc, ic, gd, Lc, Xa = i.categories, $d = i.labels.formatter || function () {
                var k =
                    this.value;
                return Lc ? Nc(Lc, k) : Ta % 1E6 === 0 ? k / 1E6 + "M" : Ta % 1E3 === 0 ? k / 1E3 + "k" : !Xa && k >= 1E3 ? zd(k, 0) : k
            }, Oc = z && i.labels.staggerLines, $b = i.reversed, ac = Xa && i.tickmarkPlacement === "between" ? 0.5 : 0;
            y.prototype = {addLabel:function () {
                var k = this.pos, o = i.labels, r = !(k === ca && !C(i.showFirstLabel, 1) || k === fa && !C(i.showLastLabel, 0)), q = Xa && z && Xa.length && !o.step && !o.staggerLines && !o.rotation && Ca / Xa.length || !z && Ca / 2, A = this.label;
                k = $d.call({isFirst:k === ta[0], isLast:k === ta[ta.length - 1], dateTimeLabelFormat:Lc, value:Xa && Xa[k] ? Xa[k] :
                    k});
                q = q && {width:Ha(1, X(q - 2 * (o.padding || 10))) + bb};
                q = pa(q, o.style);
                if (A === Va)this.label = M(k) && r && o.enabled ? ga.text(k, 0, 0).attr({align:o.align, rotation:o.rotation}).css(q).add(gc) : null; else A && A.attr({text:k}).css(q)
            }, getLabelSize:function () {
                var k = this.label;
                return k ? (this.labelBBox = k.getBBox())[z ? "height" : "width"] : 0
            }, render:function (k, o) {
                var r = !this.minor, q = this.label, A = this.pos, U = i.labels, G = this.gridLine, V = r ? i.gridLineWidth : i.minorGridLineWidth, Ba = r ? i.gridLineColor : i.minorGridLineColor, ma = r ? i.gridLineDashStyle :
                    i.minorGridLineDashStyle, s = this.mark, W = r ? i.tickLength : i.minorTickLength, ba = r ? i.tickWidth : i.minorTickWidth || 0, ia = r ? i.tickColor : i.minorTickColor, zb = r ? i.tickPosition : i.minorTickPosition;
                r = U.step;
                var lb = o && Pc || Ua, Nb;
                Nb = z ? Ib(A + ac, null, null, o) + eb : Y + P + (Ka ? (o && jd || Ya) - Hb - Y : 0);
                lb = z ? lb - sb + P - (Ka ? xa : 0) : lb - Ib(A + ac, null, null, o) - eb;
                if (V) {
                    A = Tb(A + ac, V, o);
                    if (G === Va) {
                        G = {stroke:Ba, "stroke-width":V};
                        if (ma)G.dashstyle = ma;
                        this.gridLine = G = V ? ga.path(A).attr(G).add(L) : null
                    }
                    G && A && G.animate({d:A})
                }
                if (ba) {
                    if (zb === "inside")W =
                        -W;
                    if (Ka)W = -W;
                    V = ga.crispLine([ab, Nb, lb, La, Nb + (z ? 0 : -W), lb + (z ? W : 0)], ba);
                    if (s)s.animate({d:V}); else this.mark = ga.path(V).attr({stroke:ia, "stroke-width":ba}).add(gc)
                }
                if (q && !isNaN(Nb)) {
                    Nb = Nb + U.x - (ac && z ? ac * ua * ($b ? -1 : 1) : 0);
                    lb = lb + U.y - (ac && !z ? ac * ua * ($b ? 1 : -1) : 0);
                    M(U.y) || (lb += ja(q.styles.lineHeight) * 0.9 - q.getBBox().height / 2);
                    if (Oc)lb += k / (r || 1) % Oc * 16;
                    if (r)q[k % r ? "hide" : "show"]();
                    q[this.isNew ? "attr" : "animate"]({x:Nb, y:lb})
                }
                this.isNew = false
            }, destroy:function () {
                for (var k in this)this[k] && this[k].destroy && this[k].destroy()
            }};
            x.prototype = {render:function () {
                var k = this, o = k.options, r = o.label, q = k.label, A = o.width, U = o.to, G, V = o.from, Ba = o.dashStyle, ma = k.svgElem, s = [], W, ba, ia = o.color;
                ba = o.zIndex;
                var zb = o.events;
                if (A) {
                    s = Tb(o.value, A);
                    o = {stroke:ia, "stroke-width":A};
                    if (Ba)o.dashstyle = Ba
                } else if (M(V) && M(U)) {
                    V = Ha(V, ca);
                    U = qb(U, fa);
                    G = Tb(U);
                    if ((s = Tb(V)) && G)s.push(G[4], G[5], G[1], G[2]); else s = null;
                    o = {fill:ia}
                } else return;
                if (M(ba))o.zIndex = ba;
                if (ma)if (s)ma.animate({d:s}, null, ma.onGetPath); else {
                    ma.hide();
                    ma.onGetPath = function () {
                        ma.show()
                    }
                } else if (s &&
                    s.length) {
                    k.svgElem = ma = ga.path(s).attr(o).add();
                    if (zb) {
                        Ba = function (lb) {
                            ma.on(lb, function (Nb) {
                                zb[lb].apply(k, [Nb])
                            })
                        };
                        for (W in zb)Ba(W)
                    }
                }
                if (r && M(r.text) && s && s.length && Ca > 0 && xa > 0) {
                    r = va({align:z && G && "center", x:z ? !G && 4 : 10, verticalAlign:!z && G && "middle", y:z ? G ? 16 : 10 : G ? 6 : -4, rotation:z && !G && 90}, r);
                    if (!q)k.label = q = ga.text(r.text, 0, 0).attr({align:r.textAlign || r.align, rotation:r.rotation, zIndex:ba}).css(r.style).add();
                    G = [s[1], s[4], C(s[6], s[1])];
                    s = [s[2], s[5], C(s[7], s[2])];
                    W = qb.apply(sa, G);
                    ba = qb.apply(sa, s);
                    q.align(r,
                        false, {x:W, y:ba, width:Ha.apply(sa, G) - W, height:Ha.apply(sa, s) - ba});
                    q.show()
                } else q && q.hide();
                return k
            }, destroy:function () {
                for (var k in this) {
                    this[k] && this[k].destroy && this[k].destroy();
                    delete this[k]
                }
                qc(Sb, this)
            }};
            Q.prototype = {setTotal:function (k) {
                this.cum = this.total = k
            }, render:function (k) {
                var o = this.options.formatter.call(this);
                if (this.label)this.label.attr({text:o, visibility:ub}); else this.label = m.renderer.text(o, 0, 0).css(this.options.style).attr({align:this.textAlign, rotation:this.options.rotation,
                    visibility:ub}).add(k)
            }, setOffset:function (k, o) {
                var r = this.isNegative, q = v.translate(this.total), A = v.translate(0);
                A = $a(q - A);
                var U = m.xAxis[0].translate(this.x) + k, G = m.plotHeight;
                r = {x:qa ? r ? q : q - A : U, y:qa ? G - U - o : r ? G - q - A : G - q, width:qa ? A : o, height:qa ? o : A};
                this.label && this.label.align(this.alignOptions, null, r).attr({visibility:Ab})
            }};
            Ib = function (k, o, r, q, A) {
                var U = 1, G = 0, V = q ? fb : ua;
                q = q ? Gb : ca;
                V || (V = ua);
                if (r) {
                    U *= -1;
                    G = oa
                }
                if ($b) {
                    U *= -1;
                    G -= U * oa
                }
                if (o) {
                    if ($b)k = oa - k;
                    k = k / V + q;
                    if (H && A)k = sa.pow(10, k)
                } else {
                    if (H && A)k = sa.log(k) /
                        sa.LN10;
                    k = U * (k - q) * V + G
                }
                return k
            };
            Tb = function (k, o, r) {
                var q, A, U;
                k = Ib(k, null, null, r);
                var G = r && Pc || Ua, V = r && jd || Ya, Ba;
                r = A = X(k + eb);
                q = U = X(G - k - eb);
                if (isNaN(k))Ba = true; else if (z) {
                    q = ha;
                    U = G - sb;
                    if (r < Y || r > Y + Ca)Ba = true
                } else {
                    r = Y;
                    A = V - Hb;
                    if (q < ha || q > ha + xa)Ba = true
                }
                return Ba ? null : ga.crispLine([ab, r, q, La, A, U], o || 0)
            };
            if (qa && Ga && $b === Va)$b = true;
            pa(v, {addPlotBand:Qa, addPlotLine:Qa, adjustTickAmount:function () {
                if (Mb && !F && !Xa && !Rb) {
                    var k = hc, o = ta.length;
                    hc = Mb[$];
                    if (o < hc) {
                        for (; ta.length < hc;)ta.push(ea(ta[ta.length - 1] + Ta));
                        ua *=
                            (o - 1) / (hc - 1);
                        fa = ta[ta.length - 1]
                    }
                    if (M(k) && hc !== k)v.isDirty = true
                }
            }, categories:Xa, getExtremes:function () {
                return{min:ca, max:fa, dataMin:T, dataMax:ra, userMin:Ja, userMax:Oa}
            }, getPlotLinePath:Tb, getThreshold:function (k) {
                if (ca > k)k = ca; else if (fa < k)k = fa;
                return Ib(k, 0, 1)
            }, isXAxis:Ga, options:i, plotLinesAndBands:Sb, getOffset:function () {
                var k = Fa.length && M(ca) && M(fa), o = 0, r = 0, q = i.title, A = i.labels, U = [-1, 1, 1, -1][Z], G;
                if (!gc) {
                    gc = ga.g("axis").attr({zIndex:7}).add();
                    L = ga.g("grid").attr({zIndex:1}).add()
                }
                ic = 0;
                if (k || Rb) {
                    u(ta,
                        function (V) {
                            if (tb[V])tb[V].addLabel(); else tb[V] = new y(V);
                            if (Z === 0 || Z === 2 || {1:"left", 3:"right"}[Z] === A.align)ic = Ha(tb[V].getLabelSize(), ic)
                        });
                    if (Oc)ic += (Oc - 1) * 16
                } else for (G in tb) {
                    tb[G].destroy();
                    delete tb[G]
                }
                if (q && q.text) {
                    if (!v.axisTitle)v.axisTitle = ga.text(q.text, 0, 0).attr({zIndex:7, rotation:q.rotation || 0, align:q.textAlign || {low:"left", middle:"center", high:"right"}[q.align]}).css(q.style).add();
                    o = v.axisTitle.getBBox()[z ? "height" : "width"];
                    r = C(q.margin, z ? 5 : 10)
                }
                P = U * (i.offset || Ub[Z]);
                gd = ic + (Z !== 2 &&
                    ic && U * i.labels[z ? "y" : "x"]) + r;
                Ub[Z] = Ha(Ub[Z], gd + o + U * P)
            }, render:Ra, setCategories:function (k, o) {
                v.categories = Xa = k;
                u(Fa, function (r) {
                    r.translate();
                    r.setTooltipPoints(true)
                });
                v.isDirty = true;
                C(o, true) && m.redraw()
            }, setExtremes:function (k, o, r, q) {
                r = C(r, true);
                Pa(v, "setExtremes", {min:k, max:o}, function () {
                    Ja = k;
                    Oa = o;
                    r && m.redraw(q)
                })
            }, setScale:Aa, setTickPositions:Ma, translate:Ib, redraw:function () {
                jc.resetTracker && jc.resetTracker();
                Ra();
                u(Sb, function (k) {
                    k.render()
                });
                u(Fa, function (k) {
                    k.isDirty = true
                })
            }, removePlotBand:Za,
                removePlotLine:Za, reversed:$b, stacks:t});
            for (id in N)Sa(v, id, N[id]);
            Aa()
        }

        function d() {
            var m = {};
            return{add:function (i, y, x, Q) {
                if (!m[i]) {
                    y = ga.text(y, 0, 0).css(a.toolbar.itemStyle).align({align:"right", x:-Hb - 20, y:ha + 30}).on("click", Q).attr({align:"right", zIndex:20}).add();
                    m[i] = y
                }
            }, remove:function (i) {
                Gc(m[i].element);
                m[i] = null
            }}
        }

        function e(m) {
            function i() {
                var F = this.points || rc(this), H = F[0].series.xAxis, P = this.x;
                H = H && H.options.type === "datetime";
                var $ = Pb(P) || H, oa;
                oa = $ ? ['<span style="font-size: 10px">' + (H ?
                    Nc("%A, %b %e, %Y", P) : P) + "</span>"] : [];
                u(F, function (ua) {
                    oa.push(ua.point.tooltipFormatter($))
                });
                return oa.join("<br/>")
            }

            function y(F, H) {
                z = Za ? F : (2 * z + F) / 3;
                Z = Za ? H : (Z + H) / 2;
                t.translate(z, Z);
                kd = $a(F - z) > 1 || $a(H - Z) > 1 ? function () {
                    y(F, H)
                } : null
            }

            function x() {
                if (!Za) {
                    var F = p.hoverPoints;
                    t.hide();
                    u(ea, function (H) {
                        H && H.hide()
                    });
                    F && u(F, function (H) {
                        H.setState()
                    });
                    p.hoverPoints = null;
                    Za = true
                }
            }

            var Q, na = m.borderWidth, O = m.crosshairs, ea = [], Ma = m.style, Aa = m.shared, Qa = ja(Ma.padding), Ra = na + Qa, Za = true, Ga, Ka, z = 0, Z = 0;
            Ma.padding =
                0;
            var t = ga.g("tooltip").attr({zIndex:8}).add(), v = ga.rect(Ra, Ra, 0, 0, m.borderRadius, na).attr({fill:m.backgroundColor, "stroke-width":na}).add(t).shadow(m.shadow), N = ga.text("", Qa + Ra, ja(Ma.fontSize) + Qa + Ra).attr({zIndex:1}).css(Ma).add(t);
            t.hide();
            return{shared:Aa, refresh:function (F) {
                var H, P, $, oa = 0, ua = {}, fb = [];
                $ = F.tooltipPos;
                H = m.formatter || i;
                ua = p.hoverPoints;
                if (Aa) {
                    ua && u(ua, function (eb) {
                        eb.setState()
                    });
                    p.hoverPoints = F;
                    u(F, function (eb) {
                        eb.setState(Bb);
                        oa += eb.plotY;
                        fb.push(eb.getLabelConfig())
                    });
                    P = F[0].plotX;
                    oa = X(oa) / F.length;
                    ua = {x:F[0].category};
                    ua.points = fb;
                    F = F[0]
                } else ua = F.getLabelConfig();
                ua = H.call(ua);
                Q = F.series;
                P = Aa ? P : F.plotX;
                oa = Aa ? oa : F.plotY;
                H = X($ ? $[0] : qa ? Ca - oa : P);
                P = X($ ? $[1] : qa ? xa - P : oa);
                $ = Aa || !F.series.isCartesian || kc(H, P);
                if (ua === false || !$)x(); else {
                    if (Za) {
                        t.show();
                        Za = false
                    }
                    N.attr({text:ua});
                    $ = N.getBBox();
                    Ga = $.width + 2 * Qa;
                    Ka = $.height + 2 * Qa;
                    v.attr({width:Ga, height:Ka, stroke:m.borderColor || F.color || Q.color || "#606060"});
                    $ = H - Ga + Y - 25;
                    P = P - Ka + ha + 10;
                    if ($ < 7)$ = Y + H + 15;
                    if (P < 5)P = 5; else if (P + Ka > Ua)P = Ua - Ka - 5;
                    y(X($ -
                        Ra), X(P - Ra))
                }
                if (O) {
                    O = rc(O);
                    for (H = O.length; H--;) {
                        P = F.series[H ? "yAxis" : "xAxis"];
                        if (O[H] && P) {
                            P = P.getPlotLinePath(F[H ? "y" : "x"], 1);
                            if (ea[H])ea[H].attr({d:P, visibility:Ab}); else {
                                $ = {"stroke-width":O[H].width || 1, stroke:O[H].color || "#C0C0C0", zIndex:2};
                                if (O[H].dashStyle)$.dashstyle = O[H].dashStyle;
                                ea[H] = ga.path(P).attr($).add()
                            }
                        }
                    }
                }
            }, hide:x}
        }

        function f(m, i) {
            function y(z) {
                var Z, t = Nd && wa.width / wa.documentElement.clientWidth - 1, v, N, F;
                z = z || cb.event;
                if (!z.target)z.target = z.srcElement;
                Z = z.touches ? z.touches.item(0) :
                    z;
                if (z.type !== "mousemove" || cb.opera || t) {
                    v = ya;
                    N = {left:v.offsetLeft, top:v.offsetTop};
                    for (v = v.offsetParent; v;) {
                        N.left += v.offsetLeft;
                        N.top += v.offsetTop;
                        if (v !== wa.body && v !== wa.documentElement) {
                            N.left -= v.scrollLeft;
                            N.top -= v.scrollTop
                        }
                        v = v.offsetParent
                    }
                    tc = N;
                    v = tc.left;
                    N = tc.top
                }
                if (Bc) {
                    F = z.x;
                    Z = z.y
                } else if (Z.layerX === Va) {
                    F = Z.pageX - v;
                    Z = Z.pageY - N
                } else {
                    F = z.layerX;
                    Z = z.layerY
                }
                if (t) {
                    F += X((t + 1) * v - v);
                    Z += X((t + 1) * N - N)
                }
                return pa(z, {chartX:F, chartY:Z})
            }

            function x(z) {
                var Z = {xAxis:[], yAxis:[]};
                u(db, function (t) {
                    var v = t.translate,
                        N = t.isXAxis;
                    Z[N ? "xAxis" : "yAxis"].push({axis:t, value:v((qa ? !N : N) ? z.chartX - Y : xa - z.chartY + ha, true)})
                });
                return Z
            }

            function Q() {
                var z = m.hoverSeries, Z = m.hoverPoint;
                Z && Z.onMouseOut();
                z && z.onMouseOut();
                uc && uc.hide();
                ld = null
            }

            function na() {
                if (Aa) {
                    var z = {xAxis:[], yAxis:[]}, Z = Aa.getBBox(), t = Z.x - Y, v = Z.y - ha;
                    if (Ma) {
                        u(db, function (N) {
                            var F = N.translate, H = N.isXAxis, P = qa ? !H : H, $ = F(P ? t : xa - v - Z.height, true, 0, 0, 1);
                            F = F(P ? t + Z.width : xa - v, true, 0, 0, 1);
                            z[H ? "xAxis" : "yAxis"].push({axis:N, min:qb($, F), max:Ha($, F)})
                        });
                        Pa(m, "selection",
                            z, md)
                    }
                    Aa = Aa.destroy()
                }
                m.mouseIsDown = nd = Ma = false;
                Cb(wa, Jb ? "touchend" : "mouseup", na)
            }

            var O, ea, Ma, Aa, Qa = w.zoomType, Ra = /x/.test(Qa), Za = /y/.test(Qa), Ga = Ra && !qa || Za && qa, Ka = Za && !qa || Ra && qa;
            Qc = function () {
                if (Rc) {
                    Rc.translate(Y, ha);
                    qa && Rc.attr({width:m.plotWidth, height:m.plotHeight}).invert()
                } else m.trackerGroup = Rc = ga.g("tracker").attr({zIndex:9}).add()
            };
            Qc();
            if (i.enabled)m.tooltip = uc = e(i);
            (function () {
                var z = true;
                ya.onmousedown = function (t) {
                    t = y(t);
                    !Jb && t.preventDefault && t.preventDefault();
                    m.mouseIsDown = nd = true;
                    O = t.chartX;
                    ea = t.chartY;
                    Sa(wa, Jb ? "touchend" : "mouseup", na)
                };
                var Z = function (t) {
                    if (!(t && t.touches && t.touches.length > 1)) {
                        t = y(t);
                        if (!Jb)t.returnValue = false;
                        var v = t.chartX, N = t.chartY, F = !kc(v - Y, N - ha);
                        if (Jb && t.type === "touchstart")if (Ea(t.target, "isTracker"))m.runTrackerClick || t.preventDefault(); else!ae && !F && t.preventDefault();
                        if (F) {
                            z || Q();
                            if (v < Y)v = Y; else if (v > Y + Ca)v = Y + Ca;
                            if (N < ha)N = ha; else if (N > ha + xa)N = ha + xa
                        }
                        if (nd && t.type !== "touchstart") {
                            Ma = Math.sqrt(Math.pow(O - v, 2) + Math.pow(ea - N, 2));
                            if (Ma > 10) {
                                if (lc && (Ra ||
                                    Za) && kc(O - Y, ea - ha))Aa || (Aa = ga.rect(Y, ha, Ga ? 1 : Ca, Ka ? 1 : xa, 0).attr({fill:"rgba(69,114,167,0.25)", zIndex:7}).add());
                                if (Aa && Ga) {
                                    v = v - O;
                                    Aa.attr({width:$a(v), x:(v > 0 ? 0 : v) + O})
                                }
                                if (Aa && Ka) {
                                    N = N - ea;
                                    Aa.attr({height:$a(N), y:(N > 0 ? 0 : N) + ea})
                                }
                            }
                        } else if (!F) {
                            var H;
                            N = m.hoverPoint;
                            v = m.hoverSeries;
                            var P, $, oa = Ya, ua = qa ? t.chartY : t.chartX - Y;
                            if (uc && i.shared) {
                                H = [];
                                P = Ia.length;
                                for ($ = 0; $ < P; $++)if (Ia[$].visible && Ia[$].tooltipPoints.length) {
                                    t = Ia[$].tooltipPoints[ua];
                                    t._dist = $a(ua - t.plotX);
                                    oa = qb(oa, t._dist);
                                    H.push(t)
                                }
                                for (P = H.length; P--;)H[P]._dist >
                                    oa && H.splice(P, 1);
                                if (H.length && H[0].plotX !== ld) {
                                    uc.refresh(H);
                                    ld = H[0].plotX
                                }
                            }
                            if (v && v.tracker)(t = v.tooltipPoints[ua]) && t !== N && t.onMouseOver()
                        }
                        return(z = F) || !lc
                    }
                };
                ya.onmousemove = Z;
                Sa(ya, "mouseleave", Q);
                ya.ontouchstart = function (t) {
                    if (Ra || Za)ya.onmousedown(t);
                    Z(t)
                };
                ya.ontouchmove = Z;
                ya.ontouchend = function () {
                    Ma && Q()
                };
                ya.onclick = function (t) {
                    var v = m.hoverPoint;
                    t = y(t);
                    t.cancelBubble = true;
                    if (!Ma)if (v && Ea(t.target, "isTracker")) {
                        var N = v.plotX, F = v.plotY;
                        pa(v, {pageX:tc.left + Y + (qa ? Ca - F : N), pageY:tc.top + ha + (qa ? xa -
                            N : F)});
                        Pa(v.series, "click", pa(t, {point:v}));
                        v.firePointEvent("click", t)
                    } else {
                        pa(t, x(t));
                        kc(t.chartX - Y, t.chartY - ha) && Pa(m, "click", t)
                    }
                    Ma = false
                }
            })();
            Od = setInterval(function () {
                kd && kd()
            }, 32);
            pa(this, {zoomX:Ra, zoomY:Za, resetTracker:Q})
        }

        function g(m) {
            var i = m.type || w.type || w.defaultSeriesType, y = vb[i], x = p.hasRendered;
            if (x)if (qa && i === "column")y = vb.bar; else if (!qa && i === "bar")y = vb.column;
            i = new y;
            i.init(p, m);
            if (!x && i.inverted)qa = true;
            if (i.isCartesian)lc = i.isCartesian;
            Ia.push(i);
            return i
        }

        function h() {
            w.alignTicks !==
                false && u(db, function (m) {
                m.adjustTickAmount()
            });
            Mb = null
        }

        function j(m) {
            var i = p.isDirtyLegend, y, x = p.isDirtyBox, Q = Ia.length, na = Q, O = p.clipRect;
            for (ec(m, p); na--;) {
                m = Ia[na];
                if (m.isDirty && m.options.stacking) {
                    y = true;
                    break
                }
            }
            if (y)for (na = Q; na--;) {
                m = Ia[na];
                if (m.options.stacking)m.isDirty = true
            }
            u(Ia, function (ea) {
                if (ea.isDirty) {
                    ea.cleanData();
                    ea.getSegments();
                    if (ea.options.legendType === "point")i = true
                }
            });
            if (i && od.renderLegend) {
                od.renderLegend();
                p.isDirtyLegend = false
            }
            if (lc) {
                if (!Sc) {
                    Mb = null;
                    u(db, function (ea) {
                        ea.setScale()
                    })
                }
                h();
                vc();
                u(db, function (ea) {
                    if (ea.isDirty || x) {
                        ea.redraw();
                        x = true
                    }
                })
            }
            if (x) {
                pd();
                Qc();
                if (O) {
                    Tc(O);
                    O.animate({width:p.plotSizeX, height:p.plotSizeY})
                }
            }
            u(Ia, function (ea) {
                if (ea.isDirty && ea.visible && (!ea.isCartesian || ea.xAxis))ea.redraw()
            });
            jc && jc.resetTracker && jc.resetTracker();
            Pa(p, "redraw")
        }

        function l() {
            var m = a.xAxis || {}, i = a.yAxis || {}, y;
            m = rc(m);
            u(m, function (x, Q) {
                x.index = Q;
                x.isX = true
            });
            i = rc(i);
            u(i, function (x, Q) {
                x.index = Q
            });
            db = m.concat(i);
            p.xAxis = [];
            p.yAxis = [];
            db = mc(db, function (x) {
                y = new c(p, x);
                p[y.isXAxis ? "xAxis" :
                    "yAxis"].push(y);
                return y
            });
            h()
        }

        function n(m, i) {
            Kb = va(a.title, m);
            wc = va(a.subtitle, i);
            u([
                ["title", m, Kb],
                ["subtitle", i, wc]
            ], function (y) {
                var x = y[0], Q = p[x], na = y[1];
                y = y[2];
                if (Q && na) {
                    Q.destroy();
                    Q = null
                }
                if (y && y.text && !Q)p[x] = ga.text(y.text, 0, 0).attr({align:y.align, "class":"highcharts-" + x, zIndex:1}).css(y.style).add().align(y, false, Ob)
            })
        }

        function J() {
            mb = w.renderTo;
            Pd = nc + qd++;
            if (Pb(mb))mb = wa.getElementById(mb);
            mb.innerHTML = "";
            if (!mb.offsetWidth) {
                Vb = mb.cloneNode(0);
                Na(Vb, {position:oc, top:"-9999px", display:""});
                wa.body.appendChild(Vb)
            }
            Uc = (Vb || mb).offsetWidth;
            xc = (Vb || mb).offsetHeight;
            p.chartWidth = Ya = w.width || Uc || 600;
            p.chartHeight = Ua = w.height || (xc > 19 ? xc : 400);
            p.container = ya = ib(Qb, {className:"highcharts-container" + (w.className ? " " + w.className : ""), id:Pd}, pa({position:Qd, overflow:ub, width:Ya + bb, height:Ua + bb, textAlign:"left"}, w.style), Vb || mb);
            p.renderer = ga = w.forExport ? new Vc(ya, Ya, Ua, true) : new Wc(ya, Ya, Ua);
            var m, i;
            if (Rd && ya.getBoundingClientRect) {
                m = function () {
                    Na(ya, {left:0, top:0});
                    i = ya.getBoundingClientRect();
                    Na(ya, {left:-(i.left - ja(i.left)) + bb, top:-(i.top - ja(i.top)) + bb})
                };
                m();
                Sa(cb, "resize", m);
                Sa(p, "destroy", function () {
                    Cb(cb, "resize", m)
                })
            }
        }

        function D() {
            function m() {
                var y = w.width || mb.offsetWidth, x = w.height || mb.offsetHeight;
                if (y && x) {
                    if (y !== Uc || x !== xc) {
                        clearTimeout(i);
                        i = setTimeout(function () {
                            rd(y, x, false)
                        }, 100)
                    }
                    Uc = y;
                    xc = x
                }
            }

            var i;
            Sa(cb, "resize", m);
            Sa(p, "destroy", function () {
                Cb(cb, "resize", m)
            })
        }

        function aa() {
            var m = a.labels, i = a.credits, y;
            n();
            od = p.legend = new be(p);
            vc();
            u(db, function (x) {
                x.setTickPositions(true)
            });
            h();
            vc();
            pd();
            lc && u(db, function (x) {
                x.render()
            });
            if (!p.seriesGroup)p.seriesGroup = ga.g("series-group").attr({zIndex:3}).add();
            u(Ia, function (x) {
                x.translate();
                x.setTooltipPoints();
                x.render()
            });
            m.items && u(m.items, function () {
                var x = pa(m.style, this.style), Q = ja(x.left) + Y, na = ja(x.top) + ha + 12;
                delete x.left;
                delete x.top;
                ga.text(this.html, Q, na).attr({zIndex:2}).css(x).add()
            });
            if (!p.toolbar)p.toolbar = d(p);
            if (i.enabled && !p.credits) {
                y = i.href;
                ga.text(i.text, 0, 0).on("click",
                    function () {
                        if (y)location.href = y
                    }).attr({align:i.position.align,
                        zIndex:8}).css(i.style).add().align(i.position)
            }
            Qc();
            p.hasRendered = true;
            if (Vb) {
                mb.appendChild(ya);
                Gc(Vb)
            }
        }

        function E() {
            var m = Ia.length, i = ya && ya.parentNode;
            Pa(p, "destroy");
            Cb(cb, "unload", E);
            Cb(p);
            for (u(db, function (y) {
                Cb(y)
            }); m--;)Ia[m].destroy();
            if (ya) {
                ya.innerHTML = "";
                Cb(ya);
                i && i.removeChild(ya);
                ya = null
            }
            if (ga)ga.alignedObjects = null;
            clearInterval(Od);
            for (m in p)delete p[m]
        }

        function da() {
            if (!yc && cb == cb.top && wa.readyState !== "complete")wa.attachEvent("onreadystatechange", function () {
                wa.detachEvent("onreadystatechange",
                    da);
                wa.readyState === "complete" && da()
            }); else {
                J();
                sd();
                td();
                u(a.series || [], function (m) {
                    g(m)
                });
                p.inverted = qa = C(qa, a.chart.inverted);
                l();
                p.render = aa;
                p.tracker = jc = new f(p, a.tooltip);
                aa();
                Pa(p, "load");
                b && b.apply(p, [p]);
                u(p.callbacks, function (m) {
                    m.apply(p, [p])
                })
            }
        }

        Mc = va(Mc, Wa.xAxis);
        hd = va(hd, Wa.yAxis);
        Wa.xAxis = Wa.yAxis = null;
        a = va(Wa, a);
        var w = a.chart, R = w.margin;
        R = Lb(R) ? R : [R, R, R, R];
        var B = C(w.marginTop, R[0]), K = C(w.marginRight, R[1]), S = C(w.marginBottom, R[2]), I = C(w.marginLeft, R[3]), za = w.spacingTop, Da = w.spacingRight,
            gb = w.spacingBottom, wb = w.spacingLeft, Ob, Kb, wc, ha, Hb, sb, Y, Ub, mb, Vb, ya, Pd, Uc, xc, Ya, Ua, jd, Pc, Xc, ud, vd, Yc, p = this, ae = (R = w.events) && !!R.click, wd, kc, uc, nd, bc, Sd, xd, xa, Ca, jc, Rc, Qc, od, Wb, Xb, tc, lc = w.showAxes, Sc = 0, db = [], Mb, Ia = [], qa, ga, kd, Od, ld, pd, vc, sd, td, rd, md, Td, be = function (m) {
            function i(L, ka) {
                var T = L.legendItem, ra = L.legendLine, Fa = L.legendSymbol, Ja = Ka.color, Oa = ka ? O.itemStyle.color : Ja, fa = ka ? L.color : Ja;
                Ja = ka ? L.pointAttr[hb] : {stroke:Ja, fill:Ja};
                T && T.css({fill:Oa});
                ra && ra.attr({stroke:fa});
                Fa && Fa.attr(Ja)
            }

            function y(L, ka, T) {
                var ra = L.legendItem, Fa = L.legendLine, Ja = L.legendSymbol;
                L = L.checkbox;
                ra && ra.attr({x:ka, y:T});
                Fa && Fa.translate(ka, T - 4);
                Ja && Ja.attr({x:ka + Ja.xOff, y:T + Ja.yOff});
                if (L) {
                    L.x = ka;
                    L.y = T
                }
            }

            function x() {
                u(Qa, function (L) {
                    var ka = L.checkbox, T = fb.alignAttr;
                    ka && Na(ka, {left:T.translateX + L.legendItemWidth + ka.x - 40 + bb, top:T.translateY + ka.y - 11 + bb})
                })
            }

            function Q(L) {
                var ka, T, ra, Fa, Ja = L.legendItem;
                Fa = L.series || L;
                var Oa = Fa.options, fa = Oa && Oa.borderWidth || 0;
                if (!Ja) {
                    Fa = /^(bar|pie|area|column)$/.test(Fa.type);
                    L.legendItem =
                        Ja = ga.text(O.labelFormatter.call(L), 0, 0).css(L.visible ? Za : Ka).on("mouseover",
                            function () {
                                L.setState(Bb);
                                Ja.css(Ga)
                            }).on("mouseout",
                            function () {
                                Ja.css(L.visible ? Za : Ka);
                                L.setState()
                            }).on("click",
                            function () {
                                var Gb = function () {
                                    L.setVisible()
                                };
                                L.firePointEvent ? L.firePointEvent("legendItemClick", null, Gb) : Pa(L, "legendItemClick", null, Gb)
                            }).attr({zIndex:2}).add(fb);
                    if (!Fa && Oa && Oa.lineWidth) {
                        var ca = {"stroke-width":Oa.lineWidth, zIndex:2};
                        if (Oa.dashStyle)ca.dashstyle = Oa.dashStyle;
                        L.legendLine = ga.path([ab, -Ma - Aa,
                            0, La, -Aa, 0]).attr(ca).add(fb)
                    }
                    if (Fa)ka = ga.rect(T = -Ma - Aa, ra = -11, Ma, 12, 2).attr({zIndex:3}).add(fb); else if (Oa && Oa.marker && Oa.marker.enabled)ka = ga.symbol(L.symbol, T = -Ma / 2 - Aa, ra = -4, Oa.marker.radius).attr({zIndex:3}).add(fb);
                    if (ka) {
                        ka.xOff = T + fa % 2 / 2;
                        ka.yOff = ra + fa % 2 / 2
                    }
                    L.legendSymbol = ka;
                    i(L, L.visible);
                    if (Oa && Oa.showCheckbox) {
                        L.checkbox = ib("input", {type:"checkbox", checked:L.selected, defaultChecked:L.selected}, O.itemCheckboxStyle, ya);
                        Sa(L.checkbox, "click", function (Gb) {
                            Pa(L, "checkboxClick", {checked:Gb.target.checked},
                                function () {
                                    L.select()
                                })
                        })
                    }
                }
                ka = Ja.getBBox();
                T = L.legendItemWidth = O.itemWidth || Ma + Aa + ka.width + Z;
                P = ka.height;
                if (ea && N - v + T > (Ib || Ya - 2 * z - v)) {
                    N = v;
                    F += P
                }
                H = F;
                y(L, N, F);
                if (ea)N += T; else F += P;
                eb = Ib || Ha(ea ? N - v : T, eb)
            }

            function na() {
                N = v;
                F = t;
                H = eb = 0;
                fb || (fb = ga.g("legend").attr({zIndex:7}).add());
                Qa = [];
                u(Tb, function (ra) {
                    var Fa = ra.options;
                    if (Fa.showInLegend)Qa = Qa.concat(Fa.legendType === "point" ? ra.data : ra)
                });
                Qa.sort(function (ra, Fa) {
                    return(ra.options.legendIndex || 0) - (Fa.options.legendIndex || 0)
                });
                gc && Qa.reverse();
                u(Qa, Q);
                Wb = Ib || eb;
                Xb = H - t + P;
                if (oa || ua) {
                    Wb += 2 * z;
                    Xb += 2 * z;
                    if ($)Wb > 0 && Xb > 0 && $.animate($.crisp(null, null, null, Wb, Xb)); else $ = ga.rect(0, 0, Wb, Xb, O.borderRadius, oa || 0).attr({stroke:O.borderColor, "stroke-width":oa || 0, fill:ua || jb}).add(fb).shadow(O.shadow);
                    $[Qa.length ? "show" : "hide"]()
                }
                for (var L = ["left", "right", "top", "bottom"], ka, T = 4; T--;) {
                    ka = L[T];
                    if (Ra[ka] && Ra[ka] !== "auto") {
                        O[T < 2 ? "align" : "verticalAlign"] = ka;
                        O[T < 2 ? "x" : "y"] = ja(Ra[ka]) * (T % 2 ? -1 : 1)
                    }
                }
                fb.align(pa(O, {width:Wb, height:Xb}), true, Ob);
                Sc || x()
            }

            var O = m.options.legend;
            if (O.enabled) {
                var ea = O.layout === "horizontal", Ma = O.symbolWidth, Aa = O.symbolPadding, Qa, Ra = O.style, Za = O.itemStyle, Ga = O.itemHoverStyle, Ka = O.itemHiddenStyle, z = ja(Ra.padding), Z = 20, t = 18, v = 4 + z + Ma + Aa, N, F, H, P = 0, $, oa = O.borderWidth, ua = O.backgroundColor, fb, eb, Ib = O.width, Tb = m.series, gc = O.reversed;
                na();
                Sa(m, "endResize", x);
                return{colorizeItem:i, destroyItem:function (L) {
                    var ka = L.checkbox;
                    u(["legendItem", "legendLine", "legendSymbol"], function (T) {
                        L[T] && L[T].destroy()
                    });
                    ka && Gc(L.checkbox)
                }, renderLegend:na}
            }
        };
        kc = function (m, i) {
            return m >= 0 && m <= Ca && i >= 0 && i <= xa
        };
        Td = function () {
            Pa(p, "selection", {resetSelection:true}, md);
            p.toolbar.remove("zoom")
        };
        md = function (m) {
            var i = Wa.lang, y = p.pointCount < 100;
            p.toolbar.add("zoom", i.resetZoom, i.resetZoomTitle, Td);
            !m || m.resetSelection ? u(db, function (x) {
                x.setExtremes(null, null, false, y)
            }) : u(m.xAxis.concat(m.yAxis), function (x) {
                var Q = x.axis;
                if (p.tracker[Q.isXAxis ? "zoomX" : "zoomY"])Q.setExtremes(x.min, x.max, false, y)
            });
            j()
        };
        vc = function () {
            var m = a.legend, i = C(m.margin, 10), y = m.x, x = m.y, Q = m.align, na = m.verticalAlign,
                O;
            sd();
            if ((p.title || p.subtitle) && !M(B))if (O = Ha(p.title && !Kb.floating && !Kb.verticalAlign && Kb.y || 0, p.subtitle && !wc.floating && !wc.verticalAlign && wc.y || 0))ha = Ha(ha, O + C(Kb.margin, 15) + za);
            if (m.enabled && !m.floating)if (Q === "right")M(K) || (Hb = Ha(Hb, Wb - y + i + Da)); else if (Q === "left")M(I) || (Y = Ha(Y, Wb + y + i + wb)); else if (na === "top")M(B) || (ha = Ha(ha, Xb + x + i + za)); else if (na === "bottom")M(S) || (sb = Ha(sb, Xb - x + i + gb));
            lc && u(db, function (ea) {
                ea.getOffset()
            });
            M(I) || (Y += Ub[3]);
            M(B) || (ha += Ub[0]);
            M(S) || (sb += Ub[2]);
            M(K) || (Hb += Ub[1]);
            td()
        };
        rd = function (m, i, y) {
            var x = p.title, Q = p.subtitle;
            Sc += 1;
            ec(y, p);
            Pc = Ua;
            jd = Ya;
            p.chartWidth = Ya = X(m);
            p.chartHeight = Ua = X(i);
            Na(ya, {width:Ya + bb, height:Ua + bb});
            ga.setSize(Ya, Ua, y);
            Ca = Ya - Y - Hb;
            xa = Ua - ha - sb;
            Mb = null;
            u(db, function (na) {
                na.isDirty = true;
                na.setScale()
            });
            u(Ia, function (na) {
                na.isDirty = true
            });
            p.isDirtyLegend = true;
            p.isDirtyBox = true;
            vc();
            x && x.align(null, null, Ob);
            Q && Q.align(null, null, Ob);
            j(y);
            Pc = null;
            Pa(p, "resize");
            setTimeout(function () {
                Pa(p, "endResize", null, function () {
                    Sc -= 1
                })
            }, Cc && Cc.duration || 500)
        };
        td = function () {
            p.plotLeft = Y = X(Y);
            p.plotTop = ha = X(ha);
            p.plotWidth = Ca = X(Ya - Y - Hb);
            p.plotHeight = xa = X(Ua - ha - sb);
            p.plotSizeX = qa ? xa : Ca;
            p.plotSizeY = qa ? Ca : xa;
            Ob = {x:wb, y:za, width:Ya - wb - Da, height:Ua - za - gb}
        };
        sd = function () {
            ha = C(B, za);
            Hb = C(K, Da);
            sb = C(S, gb);
            Y = C(I, wb);
            Ub = [0, 0, 0, 0]
        };
        pd = function () {
            var m = w.borderWidth || 0, i = w.backgroundColor, y = w.plotBackgroundColor, x = w.plotBackgroundImage, Q, na = {x:Y, y:ha, width:Ca, height:xa};
            Q = m + (w.shadow ? 8 : 0);
            if (m || i)if (Xc)Xc.animate(Xc.crisp(null, null, null, Ya - Q, Ua - Q)); else Xc = ga.rect(Q /
                2, Q / 2, Ya - Q, Ua - Q, w.borderRadius, m).attr({stroke:w.borderColor, "stroke-width":m, fill:i || jb}).add().shadow(w.shadow);
            if (y)if (ud)ud.animate(na); else ud = ga.rect(Y, ha, Ca, xa, 0).attr({fill:y}).add().shadow(w.plotShadow);
            if (x)if (vd)vd.animate(na); else vd = ga.image(x, Y, ha, Ca, xa).add();
            if (w.plotBorderWidth)if (Yc)Yc.animate(Yc.crisp(null, Y, ha, Ca, xa)); else Yc = ga.rect(Y, ha, Ca, xa, 0, w.plotBorderWidth).attr({stroke:w.plotBorderColor, "stroke-width":w.plotBorderWidth, zIndex:4}).add();
            p.isDirtyBox = false
        };
        Sa(cb, "unload",
            E);
        w.reflow !== false && Sa(p, "load", D);
        if (R)for (wd in R)Sa(p, wd, R[wd]);
        p.options = a;
        p.series = Ia;
        p.addSeries = function (m, i, y) {
            var x;
            if (m) {
                ec(y, p);
                i = C(i, true);
                Pa(p, "addSeries", {options:m}, function () {
                    x = g(m);
                    x.isDirty = true;
                    p.isDirtyLegend = true;
                    i && p.redraw()
                })
            }
            return x
        };
        p.animation = C(w.animation, true);
        p.destroy = E;
        p.get = function (m) {
            var i, y, x;
            for (i = 0; i < db.length; i++)if (db[i].options.id === m)return db[i];
            for (i = 0; i < Ia.length; i++)if (Ia[i].options.id === m)return Ia[i];
            for (i = 0; i < Ia.length; i++) {
                x = Ia[i].data;
                for (y = 0; y <
                    x.length; y++)if (x[y].id === m)return x[y]
            }
            return null
        };
        p.getSelectedPoints = function () {
            var m = [];
            u(Ia, function (i) {
                m = m.concat(yd(i.data, function (y) {
                    return y.selected
                }))
            });
            return m
        };
        p.getSelectedSeries = function () {
            return yd(Ia, function (m) {
                return m.selected
            })
        };
        p.hideLoading = function () {
            Zc(bc, {opacity:0}, {duration:a.loading.hideDuration, complete:function () {
                Na(bc, {display:jb})
            }});
            xd = false
        };
        p.isInsidePlot = kc;
        p.redraw = j;
        p.setSize = rd;
        p.setTitle = n;
        p.showLoading = function (m) {
            var i = a.loading;
            if (!bc) {
                bc = ib(Qb, {className:"highcharts-loading"},
                    pa(i.style, {left:Y + bb, top:ha + bb, width:Ca + bb, height:xa + bb, zIndex:10, display:jb}), ya);
                Sd = ib("span", null, i.labelStyle, bc)
            }
            Sd.innerHTML = m || a.lang.loading;
            if (!xd) {
                Na(bc, {opacity:0, display:""});
                Zc(bc, {opacity:i.style.opacity}, {duration:i.showDuration});
                xd = true
            }
        };
        p.pointCount = 0;
        p.counters = new Ad;
        da()
    }

    var wa = document, cb = window, sa = Math, X = sa.round, kb = sa.floor, fd = sa.ceil, Ha = sa.max, qb = sa.min, $a = sa.abs, nb = sa.cos, Db = sa.sin, cc = sa.PI, Ud = cc * 2 / 360, pc = navigator.userAgent, Bc = /msie/i.test(pc) && !cb.opera, zc = wa.documentMode ===
        8, Nd = /AppleWebKit/.test(pc), Rd = /Firefox/.test(pc), yc = !!wa.createElementNS && !!wa.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, Wc, Jb = wa.documentElement.ontouchstart !== undefined, Vd = {}, qd = 0, rb = 1, Hc, Wa, Nc, Cc, $c, Va, Qb = "div", oc = "absolute", Qd = "relative", ub = "hidden", nc = "highcharts-", Ab = "visible", bb = "px", jb = "none", ab = "M", La = "L", Wd = "rgba(192,192,192," + (yc ? 1.0E-6 : 0.0020) + ")", hb = "", Bb = "hover", Dc, bd, cd, dd, sc, Ec, Fc, Cd, Dd, ed, Ed, Fd, la = cb.HighchartsAdapter, Eb = la || {}, u = Eb.each, yd = Eb.grep, mc = Eb.map,
        va = Eb.merge, Sa = Eb.addEvent, Cb = Eb.removeEvent, Pa = Eb.fireEvent, Zc = Eb.animate, Tc = Eb.stop, vb = {};
    Nc = function (a, b, c) {
        function d(D) {
            return D.toString().replace(/^([0-9])$/, "0$1")
        }

        if (!M(b) || isNaN(b))return"Invalid date";
        a = C(a, "%Y-%m-%d %H:%M:%S");
        b = new Date(b * rb);
        var e, f = b[cd](), g = b[dd](), h = b[sc](), j = b[Ec](), l = b[Fc](), n = Wa.lang, J = n.weekdays;
        n = n.months;
        b = {a:J[g].substr(0, 3), A:J[g], d:d(h), e:h, b:n[j].substr(0, 3), B:n[j], m:d(j + 1), y:l.toString().substr(2, 2), Y:l, H:d(f), I:d(f % 12 || 12), l:f % 12 || 12, M:d(b[bd]()), p:f <
            12 ? "AM" : "PM", P:f < 12 ? "am" : "pm", S:d(b.getSeconds())};
        for (e in b)a = a.replace("%" + e, b[e]);
        return c ? a.substr(0, 1).toUpperCase() + a.substr(1) : a
    };
    Ad.prototype = {wrapColor:function (a) {
        if (this.color >= a)this.color = 0
    }, wrapSymbol:function (a) {
        if (this.symbol >= a)this.symbol = 0
    }};
    la && la.init && la.init();
    if (!la && cb.jQuery) {
        var ob = jQuery;
        u = function (a, b) {
            for (var c = 0, d = a.length; c < d; c++)if (b.call(a[c], a[c], c, a) === false)return c
        };
        yd = ob.grep;
        mc = function (a, b) {
            for (var c = [], d = 0, e = a.length; d < e; d++)c[d] = b.call(a[d], a[d], d, a);
            return c
        };
        va = function () {
            var a = arguments;
            return ob.extend(true, null, a[0], a[1], a[2], a[3])
        };
        Sa = function (a, b, c) {
            ob(a).bind(b, c)
        };
        Cb = function (a, b, c) {
            var d = wa.removeEventListener ? "removeEventListener" : "detachEvent";
            if (wa[d] && !a[d])a[d] = function () {
            };
            ob(a).unbind(b, c)
        };
        Pa = function (a, b, c, d) {
            var e = ob.Event(b), f = "detached" + b;
            pa(e, c);
            if (a[b]) {
                a[f] = a[b];
                a[b] = null
            }
            ob(a).trigger(e);
            if (a[f]) {
                a[b] = a[f];
                a[f] = null
            }
            d && !e.isDefaultPrevented() && d(e)
        };
        Zc = function (a, b, c) {
            var d = ob(a);
            if (b.d) {
                a.toD = b.d;
                b.d = 1
            }
            d.stop();
            d.animate(b, c)
        };
        Tc = function (a) {
            ob(a).stop()
        };
        ob.extend(ob.easing, {easeOutQuad:function (a, b, c, d, e) {
            return-d * (b /= e) * (b - 2) + c
        }});
        var ce = jQuery.fx.step._default, de = jQuery.fx.prototype.cur;
        ob.fx.step._default = function (a) {
            var b = a.elem;
            b.attr ? b.attr(a.prop, a.now) : ce.apply(this, arguments)
        };
        ob.fx.step.d = function (a) {
            var b = a.elem;
            if (!a.started) {
                var c = $c.init(b, b.d, b.toD);
                a.start = c[0];
                a.end = c[1];
                a.started = true
            }
            b.attr("d", $c.step(a.start, a.end, a.pos, b.toD))
        };
        ob.fx.prototype.cur = function () {
            var a = this.elem;
            return a.attr ? a.attr(this.prop) :
                de.apply(this, arguments)
        }
    }
    $c = {init:function (a, b, c) {
        b = b || "";
        var d = a.shift, e = b.indexOf("C") > -1, f = e ? 7 : 3, g;
        b = b.split(" ");
        c = [].concat(c);
        var h, j, l = function (n) {
            for (g = n.length; g--;)n[g] === ab && n.splice(g + 1, 0, n[g + 1], n[g + 2], n[g + 1], n[g + 2])
        };
        if (e) {
            l(b);
            l(c)
        }
        if (a.isArea) {
            h = b.splice(b.length - 6, 6);
            j = c.splice(c.length - 6, 6)
        }
        if (d) {
            c = [].concat(c).splice(0, f).concat(c);
            a.shift = false
        }
        if (b.length)for (a = c.length; b.length < a;) {
            d = [].concat(b).splice(b.length - f, f);
            if (e) {
                d[f - 6] = d[f - 2];
                d[f - 5] = d[f - 1]
            }
            b = b.concat(d)
        }
        if (h) {
            b = b.concat(h);
            c = c.concat(j)
        }
        return[b, c]
    }, step:function (a, b, c, d) {
        var e = [], f = a.length;
        if (c === 1)e = d; else if (f === b.length && c < 1)for (; f--;) {
            d = parseFloat(a[f]);
            e[f] = isNaN(d) ? a[f] : c * parseFloat(b[f] - d) + d
        } else e = b;
        return e
    }};
    la = {enabled:true, align:"center", x:0, y:15, style:{color:"#666", fontSize:"11px", lineHeight:"14px"}};
    Wa = {colors:["#4572A7", "#AA4643", "#89A54E", "#80699B", "#3D96AE", "#DB843D", "#92A8CD", "#A47D7C", "#B5CA92"], symbols:["circle", "diamond", "square", "triangle", "triangle-down"], lang:{loading:"Loading...", months:["January",
        "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], weekdays:["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], decimalPoint:".", resetZoom:"Reset zoom", resetZoomTitle:"Reset zoom level 1:1", thousandsSep:","}, global:{useUTC:true}, chart:{borderColor:"#4572A7", borderRadius:5, defaultSeriesType:"line", ignoreHiddenSeries:true, spacingTop:10, spacingRight:10, spacingBottom:15, spacingLeft:10, style:{fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif',
        fontSize:"12px"}, backgroundColor:"#FFFFFF", plotBorderColor:"#C0C0C0"}, title:{text:"Chart title", align:"center", y:15, style:{color:"#3E576F", fontSize:"16px"}}, subtitle:{text:"", align:"center", y:30, style:{color:"#6D869F"}}, plotOptions:{line:{allowPointSelect:false, showCheckbox:false, animation:{duration:1E3}, events:{}, lineWidth:2, shadow:true, marker:{enabled:true, lineWidth:0, radius:4, lineColor:"#FFFFFF", states:{hover:{}, select:{fillColor:"#FFFFFF", lineColor:"#000000", lineWidth:2}}}, point:{events:{}}, dataLabels:va(la,
        {enabled:false, y:-6, formatter:function () {
            return this.y
        }}), showInLegend:true, states:{hover:{marker:{}}, select:{marker:{}}}, stickyTracking:true}}, labels:{style:{position:oc, color:"#3E576F"}}, legend:{enabled:true, align:"center", layout:"horizontal", labelFormatter:function () {
        return this.name
    }, borderWidth:1, borderColor:"#909090", borderRadius:5, shadow:false, style:{padding:"5px"}, itemStyle:{cursor:"pointer", color:"#3E576F"}, itemHoverStyle:{cursor:"pointer", color:"#000000"}, itemHiddenStyle:{color:"#C0C0C0"},
        itemCheckboxStyle:{position:oc, width:"13px", height:"13px"}, symbolWidth:16, symbolPadding:5, verticalAlign:"bottom", x:0, y:0}, loading:{hideDuration:100, labelStyle:{fontWeight:"bold", position:Qd, top:"1em"}, showDuration:100, style:{position:oc, backgroundColor:"white", opacity:0.5, textAlign:"center"}}, tooltip:{enabled:true, backgroundColor:"rgba(255, 255, 255, .85)", borderWidth:2, borderRadius:5, shadow:true, snap:Jb ? 25 : 10, style:{color:"#333333", fontSize:"12px", padding:"5px", whiteSpace:"nowrap"}}, toolbar:{itemStyle:{color:"#4572A7",
        cursor:"pointer"}}, credits:{enabled:true, text:"Highcharts.com", href:"http://www.highcharts.com", position:{align:"right", x:-10, verticalAlign:"bottom", y:-5}, style:{cursor:"pointer", color:"#909090", fontSize:"10px"}}};
    var Mc = {dateTimeLabelFormats:{second:"%H:%M:%S", minute:"%H:%M", hour:"%H:%M", day:"%e. %b", week:"%e. %b", month:"%b '%y", year:"%Y"}, endOnTick:false, gridLineColor:"#C0C0C0", labels:la, lineColor:"#C0D0E0", lineWidth:1, max:null, min:null, minPadding:0.01, maxPadding:0.01, minorGridLineColor:"#E0E0E0",
        minorGridLineWidth:1, minorTickColor:"#A0A0A0", minorTickLength:2, minorTickPosition:"outside", startOfWeek:1, startOnTick:false, tickColor:"#C0D0E0", tickLength:5, tickmarkPlacement:"between", tickPixelInterval:100, tickPosition:"outside", tickWidth:1, title:{align:"middle", style:{color:"#6D869F", fontWeight:"bold"}}, type:"linear"}, hd = va(Mc, {endOnTick:true, gridLineWidth:1, tickPixelInterval:72, showLastLabel:true, labels:{align:"right", x:-8, y:3}, lineWidth:0, maxPadding:0.05, minPadding:0.05, startOnTick:true, tickWidth:0,
        title:{rotation:270, text:"Y-values"}, stackLabels:{enabled:false, formatter:function () {
            return this.total
        }, style:la.style}}), Zd = {labels:{align:"right", x:-8, y:null}, title:{rotation:270}}, Yd = {labels:{align:"left", x:8, y:null}, title:{rotation:90}}, Md = {labels:{align:"center", x:0, y:14}, title:{rotation:0}}, Xd = va(Md, {labels:{y:-5}}), xb = Wa.plotOptions;
    la = xb.line;
    xb.spline = va(la);
    xb.scatter = va(la, {lineWidth:0, states:{hover:{lineWidth:0}}});
    xb.area = va(la, {});
    xb.areaspline = va(xb.area);
    xb.column = va(la, {borderColor:"#FFFFFF",
        borderWidth:1, borderRadius:0, groupPadding:0.2, marker:null, pointPadding:0.1, minPointLength:0, states:{hover:{brightness:0.1, shadow:false}, select:{color:"#C0C0C0", borderColor:"#000000", shadow:false}}, dataLabels:{y:null, verticalAlign:null}});
    xb.bar = va(xb.column, {dataLabels:{align:"left", x:5, y:0}});
    xb.pie = va(la, {borderColor:"#FFFFFF", borderWidth:1, center:["50%", "50%"], colorByPoint:true, dataLabels:{distance:30, enabled:true, formatter:function () {
        return this.point.name
    }, y:5}, legendType:"point", marker:null,
        size:"75%", showInLegend:false, slicedOffset:10, states:{hover:{brightness:0.1, shadow:false}}});
    Bd();
    var Yb = function (a) {
        var b = [], c;
        (function (d) {
            if (c = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/.exec(d))b = [ja(c[1]), ja(c[2]), ja(c[3]), parseFloat(c[4], 10)]; else if (c = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(d))b = [ja(c[1], 16), ja(c[2], 16), ja(c[3], 16), 1]
        })(a);
        return{get:function (d) {
            return b && !isNaN(b[0]) ? d === "rgb" ? "rgb(" + b[0] + "," + b[1] + "," + b[2] +
                ")" : d === "a" ? b[3] : "rgba(" + b.join(",") + ")" : a
        }, brighten:function (d) {
            if (dc(d) && d !== 0) {
                var e;
                for (e = 0; e < 3; e++) {
                    b[e] += ja(d * 255);
                    if (b[e] < 0)b[e] = 0;
                    if (b[e] > 255)b[e] = 255
                }
            }
            return this
        }, setOpacity:function (d) {
            b[3] = d;
            return this
        }}
    };
    Ic.prototype = {init:function (a, b) {
        this.element = wa.createElementNS("http://www.w3.org/2000/svg", b);
        this.renderer = a
    }, animate:function (a, b, c) {
        if (b = C(b, Cc, true)) {
            b = va(b);
            if (c)b.complete = c;
            Zc(this, a, b)
        } else {
            this.attr(a);
            c && c()
        }
    }, attr:function (a, b) {
        var c, d, e, f, g = this.element, h = g.nodeName, j =
            this.renderer, l, n = this.shadows, J, D = this;
        if (Pb(a) && M(b)) {
            c = a;
            a = {};
            a[c] = b
        }
        if (Pb(a)) {
            c = a;
            if (h === "circle")c = {x:"cx", y:"cy"}[c] || c; else if (c === "strokeWidth")c = "stroke-width";
            D = Ea(g, c) || this[c] || 0;
            if (c !== "d" && c !== "visibility")D = parseFloat(D)
        } else for (c in a) {
            l = false;
            d = a[c];
            if (c === "d") {
                if (d && d.join)d = d.join(" ");
                if (/(NaN| {2}|^$)/.test(d))d = "M 0 0";
                this.d = d
            } else if (c === "x" && h === "text") {
                for (e = 0; e < g.childNodes.length; e++) {
                    f = g.childNodes[e];
                    Ea(f, "x") === Ea(g, "x") && Ea(f, "x", d)
                }
                if (this.rotation)Ea(g, "transform",
                    "rotate(" + this.rotation + " " + d + " " + ja(a.y || Ea(g, "y")) + ")")
            } else if (c === "fill")d = j.color(d, g, c); else if (h === "circle" && (c === "x" || c === "y"))c = {x:"cx", y:"cy"}[c] || c; else if (c === "translateX" || c === "translateY" || c === "rotation" || c === "verticalAlign") {
                this[c] = d;
                this.updateTransform();
                l = true
            } else if (c === "stroke")d = j.color(d, g, c); else if (c === "dashstyle") {
                c = "stroke-dasharray";
                d = d && d.toLowerCase();
                if (d === "solid")d = jb; else if (d) {
                    d = d.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot",
                        "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");
                    for (e = d.length; e--;)d[e] = ja(d[e]) * a["stroke-width"];
                    d = d.join(",")
                }
            } else if (c === "isTracker")this[c] = d; else if (c === "width")d = ja(d); else if (c === "align") {
                c = "text-anchor";
                d = {left:"start", center:"middle", right:"end"}[d]
            }
            if (c === "strokeWidth")c = "stroke-width";
            if (Nd && c === "stroke-width" && d === 0)d = 1.0E-6;
            if (this.symbolName && /^(x|y|r|start|end|innerR)/.test(c)) {
                if (!J) {
                    this.symbolAttr(a);
                    J = true
                }
                l = true
            }
            if (n && /^(width|height|visibility|x|y|d)$/.test(c))for (e = n.length; e--;)Ea(n[e], c, d);
            if ((c === "width" || c === "height") && h === "rect" && d < 0)d = 0;
            if (c === "text") {
                this.textStr = d;
                this.added && j.buildText(this)
            } else l || Ea(g, c, d)
        }
        return D
    }, symbolAttr:function (a) {
        var b = this;
        u(["x", "y", "r", "start", "end", "width", "height", "innerR"], function (c) {
            b[c] = C(a[c], b[c])
        });
        b.attr({d:b.renderer.symbols[b.symbolName](X(b.x * 2) / 2, X(b.y * 2) / 2, b.r, {start:b.start, end:b.end, width:b.width, height:b.height, innerR:b.innerR})})
    },
        clip:function (a) {
            return this.attr("clip-path", "url(" + this.renderer.url + "#" + a.id + ")")
        }, crisp:function (a, b, c, d, e) {
            var f, g = {}, h = {}, j;
            a = a || this.strokeWidth || 0;
            j = a % 2 / 2;
            h.x = kb(b || this.x || 0) + j;
            h.y = kb(c || this.y || 0) + j;
            h.width = kb((d || this.width || 0) - 2 * j);
            h.height = kb((e || this.height || 0) - 2 * j);
            h.strokeWidth = a;
            for (f in h)if (this[f] !== h[f])this[f] = g[f] = h[f];
            return g
        }, css:function (a) {
            var b = this.element;
            b = a && a.width && b.nodeName === "text";
            var c, d = "", e = function (f, g) {
                return"-" + g.toLowerCase()
            };
            if (a && a.color)a.fill = a.color;
            this.styles = a = pa(this.styles, a);
            if (Bc && !yc) {
                b && delete a.width;
                Na(this.element, a)
            } else {
                for (c in a)d += c.replace(/([A-Z])/g, e) + ":" + a[c] + ";";
                this.attr({style:d})
            }
            b && this.added && this.renderer.buildText(this);
            return this
        }, on:function (a, b) {
            var c = b;
            if (Jb && a === "click") {
                a = "touchstart";
                c = function (d) {
                    d.preventDefault();
                    b()
                }
            }
            this.element["on" + a] = c;
            return this
        }, translate:function (a, b) {
            return this.attr({translateX:a, translateY:b})
        }, invert:function () {
            this.inverted = true;
            this.updateTransform();
            return this
        }, updateTransform:function () {
            var a =
                this.translateX || 0, b = this.translateY || 0, c = this.inverted, d = this.rotation, e = [];
            if (c) {
                a += this.attr("width");
                b += this.attr("height")
            }
            if (a || b)e.push("translate(" + a + "," + b + ")");
            if (c)e.push("rotate(90) scale(-1,1)"); else d && e.push("rotate(" + d + " " + this.x + " " + this.y + ")");
            e.length && Ea(this.element, "transform", e.join(" "))
        }, toFront:function () {
            var a = this.element;
            a.parentNode.appendChild(a);
            return this
        }, align:function (a, b, c) {
            if (a) {
                this.alignOptions = a;
                this.alignByTranslate = b;
                c || this.renderer.alignedObjects.push(this)
            } else {
                a =
                    this.alignOptions;
                b = this.alignByTranslate
            }
            c = C(c, this.renderer);
            var d = a.align, e = a.verticalAlign, f = (c.x || 0) + (a.x || 0), g = (c.y || 0) + (a.y || 0), h = {};
            if (/^(right|center)$/.test(d))f += (c.width - (a.width || 0)) / {right:1, center:2}[d];
            h[b ? "translateX" : "x"] = X(f);
            if (/^(bottom|middle)$/.test(e))g += (c.height - (a.height || 0)) / ({bottom:1, middle:2}[e] || 1);
            h[b ? "translateY" : "y"] = X(g);
            this[this.placed ? "animate" : "attr"](h);
            this.placed = true;
            this.alignAttr = h;
            return this
        }, getBBox:function () {
            var a, b, c, d = this.rotation, e = d * Ud;
            try {
                a =
                    pa({}, this.element.getBBox())
            } catch (f) {
                a = {width:0, height:0}
            }
            b = a.width;
            c = a.height;
            if (d) {
                a.width = $a(c * Db(e)) + $a(b * nb(e));
                a.height = $a(c * nb(e)) + $a(b * Db(e))
            }
            return a
        }, show:function () {
            return this.attr({visibility:Ab})
        }, hide:function () {
            return this.attr({visibility:ub})
        }, add:function (a) {
            var b = this.renderer, c = a || b, d = c.element || b.box, e = d.childNodes, f = this.element, g = Ea(f, "zIndex");
            this.parentInverted = a && a.inverted;
            this.textStr !== undefined && b.buildText(this);
            if (g) {
                c.handleZ = true;
                g = ja(g)
            }
            if (c.handleZ)for (c = 0; c <
                e.length; c++) {
                a = e[c];
                b = Ea(a, "zIndex");
                if (a !== f && (ja(b) > g || !M(g) && M(b))) {
                    d.insertBefore(f, a);
                    return this
                }
            }
            d.appendChild(f);
            this.added = true;
            return this
        }, destroy:function () {
            var a = this.element || {}, b = this.shadows, c = a.parentNode, d;
            a.onclick = a.onmouseout = a.onmouseover = a.onmousemove = null;
            Tc(this);
            c && c.removeChild(a);
            b && u(b, function (e) {
                (c = e.parentNode) && c.removeChild(e)
            });
            qc(this.renderer.alignedObjects, this);
            for (d in this)delete this[d];
            return null
        }, empty:function () {
            for (var a = this.element, b = a.childNodes,
                     c = b.length; c--;)a.removeChild(b[c])
        }, shadow:function (a, b) {
            var c = [], d, e, f = this.element, g = this.parentInverted ? "(-1,-1)" : "(1,1)";
            if (a) {
                for (d = 1; d <= 3; d++) {
                    e = f.cloneNode(0);
                    Ea(e, {isShadow:"true", stroke:"rgb(0, 0, 0)", "stroke-opacity":0.05 * d, "stroke-width":7 - 2 * d, transform:"translate" + g, fill:jb});
                    b ? b.element.appendChild(e) : f.parentNode.insertBefore(e, f);
                    c.push(e)
                }
                this.shadows = c
            }
            return this
        }};
    var Vc = function () {
        this.init.apply(this, arguments)
    };
    Vc.prototype = {Element:Ic, init:function (a, b, c, d) {
        var e = location,
            f;
        f = this.createElement("svg").attr({xmlns:"http://www.w3.org/2000/svg", version:"1.1"});
        a.appendChild(f.element);
        this.box = f.element;
        this.boxWrapper = f;
        this.alignedObjects = [];
        this.url = Bc ? "" : e.href.replace(/#.*?$/, "");
        this.defs = this.createElement("defs").add();
        this.forExport = d;
        this.setSize(b, c, false)
    }, createElement:function (a) {
        var b = new this.Element;
        b.init(this, a);
        return b
    }, buildText:function (a) {
        for (var b = a.element, c = C(a.textStr, "").toString().replace(/<(b|strong)>/g, '<span style="font-weight:bold">').replace(/<(i|em)>/g,
            '<span style="font-style:italic">').replace(/<a/g, "<span").replace(/<\/(b|strong|i|em|a)>/g, "</span>").split(/<br.*?>/g), d = b.childNodes, e = /style="([^"]+)"/, f = /href="([^"]+)"/, g = Ea(b, "x"), h = a.styles, j = Rd && h && h.HcDirection === "rtl" && !this.forExport && ja(pc.split("Firefox/")[1]) < 4, l, n = h && ja(h.width), J = h && h.lineHeight, D, aa = d.length; aa--;)b.removeChild(d[aa]);
        n && !a.added && this.box.appendChild(b);
        u(c, function (E, da) {
            var w, R = 0, B;
            E = E.replace(/<span/g, "|||<span").replace(/<\/span>/g, "</span>|||");
            w = E.split("|||");
            u(w, function (K) {
                if (K !== "" || w.length === 1) {
                    var S = {}, I = wa.createElementNS("http://www.w3.org/2000/svg", "tspan");
                    e.test(K) && Ea(I, "style", K.match(e)[1].replace(/(;| |^)color([ :])/, "$1fill$2"));
                    if (f.test(K)) {
                        Ea(I, "onclick", 'location.href="' + K.match(f)[1] + '"');
                        Na(I, {cursor:"pointer"})
                    }
                    K = (K.replace(/<(.|\n)*?>/g, "") || " ").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
                    if (j) {
                        l = [];
                        for (aa = K.length; aa--;)l.push(K.charAt(aa));
                        K = l.join("")
                    }
                    I.appendChild(wa.createTextNode(K));
                    if (R)S.dx = 3; else S.x = g;
                    if (!R) {
                        if (da) {
                            !yc &&
                                a.renderer.forExport && Na(I, {display:"block"});
                            B = cb.getComputedStyle && ja(cb.getComputedStyle(D, null).getPropertyValue("line-height"));
                            if (!B || isNaN(B))B = J || D.offsetHeight || 18;
                            Ea(I, "dy", B)
                        }
                        D = I
                    }
                    Ea(I, S);
                    b.appendChild(I);
                    R++;
                    if (n) {
                        K = K.replace(/-/g, "- ").split(" ");
                        for (var za, Da = []; K.length || Da.length;) {
                            za = b.getBBox().width;
                            S = za > n;
                            if (!S || K.length === 1) {
                                K = Da;
                                Da = [];
                                if (K.length) {
                                    I = wa.createElementNS("http://www.w3.org/2000/svg", "tspan");
                                    Ea(I, {dy:J || 16, x:g});
                                    b.appendChild(I);
                                    if (za > n)n = za
                                }
                            } else {
                                I.removeChild(I.firstChild);
                                Da.unshift(K.pop())
                            }
                            K.length && I.appendChild(wa.createTextNode(K.join(" ").replace(/- /g, "-")))
                        }
                    }
                }
            })
        })
    }, crispLine:function (a, b) {
        if (a[1] === a[4])a[1] = a[4] = X(a[1]) + b % 2 / 2;
        if (a[2] === a[5])a[2] = a[5] = X(a[2]) + b % 2 / 2;
        return a
    }, path:function (a) {
        return this.createElement("path").attr({d:a, fill:jb})
    }, circle:function (a, b, c) {
        a = Lb(a) ? a : {x:a, y:b, r:c};
        return this.createElement("circle").attr(a)
    }, arc:function (a, b, c, d, e, f) {
        if (Lb(a)) {
            b = a.y;
            c = a.r;
            d = a.innerR;
            e = a.start;
            f = a.end;
            a = a.x
        }
        return this.symbol("arc", a || 0, b || 0, c || 0,
            {innerR:d || 0, start:e || 0, end:f || 0})
    }, rect:function (a, b, c, d, e, f) {
        if (Lb(a)) {
            b = a.y;
            c = a.width;
            d = a.height;
            e = a.r;
            f = a.strokeWidth;
            a = a.x
        }
        e = this.createElement("rect").attr({rx:e, ry:e, fill:jb});
        return e.attr(e.crisp(f, a, b, Ha(c, 0), Ha(d, 0)))
    }, setSize:function (a, b, c) {
        var d = this.alignedObjects, e = d.length;
        this.width = a;
        this.height = b;
        for (this.boxWrapper[C(c, true) ? "animate" : "attr"]({width:a, height:b}); e--;)d[e].align()
    }, g:function (a) {
        return this.createElement("g").attr(M(a) && {"class":nc + a})
    }, image:function (a, b, c, d, e) {
        var f = {preserveAspectRatio:jb};
        arguments.length > 1 && pa(f, {x:b, y:c, width:d, height:e});
        f = this.createElement("image").attr(f);
        f.element.setAttributeNS ? f.element.setAttributeNS("http://www.w3.org/1999/xlink", "href", a) : f.element.setAttribute("hc-svg-href", a);
        return f
    }, symbol:function (a, b, c, d, e) {
        var f, g = this.symbols[a];
        g = g && g(X(b), X(c), d, e);
        var h = /^url\((.*?)\)$/, j;
        if (g) {
            f = this.path(g);
            pa(f, {symbolName:a, x:b, y:c, r:d});
            e && pa(f, e)
        } else if (h.test(a)) {
            var l = function (n, J) {
                n.attr({width:J[0], height:J[1]}).translate(-X(J[0] /
                    2), -X(J[1] / 2))
            };
            j = a.match(h)[1];
            a = Vd[j];
            f = this.image(j).attr({x:b, y:c});
            if (a)l(f, a); else {
                f.attr({width:0, height:0});
                ib("img", {onload:function () {
                    l(f, Vd[j] = [this.width, this.height])
                }, src:j})
            }
        } else f = this.circle(b, c, d);
        return f
    }, symbols:{square:function (a, b, c) {
        c = 0.707 * c;
        return[ab, a - c, b - c, La, a + c, b - c, a + c, b + c, a - c, b + c, "Z"]
    }, triangle:function (a, b, c) {
        return[ab, a, b - 1.33 * c, La, a + c, b + 0.67 * c, a - c, b + 0.67 * c, "Z"]
    }, "triangle-down":function (a, b, c) {
        return[ab, a, b + 1.33 * c, La, a - c, b - 0.67 * c, a + c, b - 0.67 * c, "Z"]
    }, diamond:function (a, b, c) {
        return[ab, a, b - c, La, a + c, b, a, b + c, a - c, b, "Z"]
    }, arc:function (a, b, c, d) {
        var e = d.start, f = d.end - 1.0E-6, g = d.innerR, h = nb(e), j = Db(e), l = nb(f);
        f = Db(f);
        d = d.end - e < cc ? 0 : 1;
        return[ab, a + c * h, b + c * j, "A", c, c, 0, d, 1, a + c * l, b + c * f, La, a + g * l, b + g * f, "A", g, g, 0, d, 0, a + g * h, b + g * j, "Z"]
    }}, clipRect:function (a, b, c, d) {
        var e = nc + qd++, f = this.createElement("clipPath").attr({id:e}).add(this.defs);
        a = this.rect(a, b, c, d, 0).add(f);
        a.id = e;
        return a
    }, color:function (a, b, c) {
        var d, e = /^rgba/;
        if (a && a.linearGradient) {
            var f = this;
            b = a.linearGradient;
            c = nc +
                qd++;
            var g, h, j;
            g = f.createElement("linearGradient").attr({id:c, gradientUnits:"userSpaceOnUse", x1:b[0], y1:b[1], x2:b[2], y2:b[3]}).add(f.defs);
            u(a.stops, function (l) {
                if (e.test(l[1])) {
                    d = Yb(l[1]);
                    h = d.get("rgb");
                    j = d.get("a")
                } else {
                    h = l[1];
                    j = 1
                }
                f.createElement("stop").attr({offset:l[0], "stop-color":h, "stop-opacity":j}).add(g)
            });
            return"url(" + this.url + "#" + c + ")"
        } else if (e.test(a)) {
            d = Yb(a);
            Ea(b, c + "-opacity", d.get("a"));
            return d.get("rgb")
        } else return a
    }, text:function (a, b, c) {
        var d = Wa.chart.style;
        b = X(C(b, 0));
        c = X(C(c,
            0));
        a = this.createElement("text").attr({x:b, y:c, text:a}).css({fontFamily:d.fontFamily, fontSize:d.fontSize});
        a.x = b;
        a.y = c;
        return a
    }};
    Wc = Vc;
    if (!yc) {
        Eb = yb(Ic, {init:function (a, b) {
            var c = ["<", b, ' filled="f" stroked="f"'], d = ["position: ", oc, ";"];
            if (b === "shape" || b === Qb)d.push("left:0;top:0;width:10px;height:10px;");
            if (zc)d.push("visibility: ", b === Qb ? ub : Ab);
            c.push(' style="', d.join(""), '"/>');
            if (b) {
                c = b === Qb || b === "span" || b === "img" ? c.join("") : a.prepVML(c);
                this.element = ib(c)
            }
            this.renderer = a
        }, add:function (a) {
            var b =
                this.renderer, c = this.element, d = b.box;
            d = a ? a.element || a : d;
            a && a.inverted && b.invertChild(c, d);
            zc && d.gVis === ub && Na(c, {visibility:ub});
            d.appendChild(c);
            this.added = true;
            this.alignOnAdd && this.updateTransform();
            return this
        }, attr:function (a, b) {
            var c, d, e, f = this.element || {}, g = f.style, h = f.nodeName, j = this.renderer, l = this.symbolName, n, J, D = this.shadows, aa = this;
            if (Pb(a) && M(b)) {
                c = a;
                a = {};
                a[c] = b
            }
            if (Pb(a)) {
                c = a;
                aa = c === "strokeWidth" || c === "stroke-width" ? this.strokeweight : this[c]
            } else for (c in a) {
                d = a[c];
                n = false;
                if (l && /^(x|y|r|start|end|width|height|innerR)/.test(c)) {
                    if (!J) {
                        this.symbolAttr(a);
                        J = true
                    }
                    n = true
                } else if (c === "d") {
                    d = d || [];
                    this.d = d.join(" ");
                    e = d.length;
                    for (n = []; e--;)n[e] = dc(d[e]) ? X(d[e] * 10) - 5 : d[e] === "Z" ? "x" : d[e];
                    d = n.join(" ") || "x";
                    f.path = d;
                    if (D)for (e = D.length; e--;)D[e].path = d;
                    n = true
                } else if (c === "zIndex" || c === "visibility") {
                    if (zc && c === "visibility" && h === "DIV") {
                        f.gVis = d;
                        n = f.childNodes;
                        for (e = n.length; e--;)Na(n[e], {visibility:d});
                        if (d === Ab)d = null
                    }
                    if (d)g[c] = d;
                    n = true
                } else if (/^(width|height)$/.test(c)) {
                    if (this.updateClipping) {
                        this[c] = d;
                        this.updateClipping()
                    } else g[c] = d;
                    n = true
                } else if (/^(x|y)$/.test(c)) {
                    this[c] =
                        d;
                    if (f.tagName === "SPAN")this.updateTransform(); else g[{x:"left", y:"top"}[c]] = d
                } else if (c === "class")f.className = d; else if (c === "stroke") {
                    d = j.color(d, f, c);
                    c = "strokecolor"
                } else if (c === "stroke-width" || c === "strokeWidth") {
                    f.stroked = d ? true : false;
                    c = "strokeweight";
                    this[c] = d;
                    if (dc(d))d += bb
                } else if (c === "dashstyle") {
                    (f.getElementsByTagName("stroke")[0] || ib(j.prepVML(["<stroke/>"]), null, null, f))[c] = d || "solid";
                    this.dashstyle = d;
                    n = true
                } else if (c === "fill")if (h === "SPAN")g.color = d; else {
                    f.filled = d !== jb ? true : false;
                    d = j.color(d,
                        f, c);
                    c = "fillcolor"
                } else if (c === "translateX" || c === "translateY" || c === "rotation" || c === "align") {
                    if (c === "align")c = "textAlign";
                    this[c] = d;
                    this.updateTransform();
                    n = true
                } else if (c === "text") {
                    this.bBox = null;
                    f.innerHTML = d;
                    n = true
                }
                if (D && c === "visibility")for (e = D.length; e--;)D[e].style[c] = d;
                if (!n)if (zc)f[c] = d; else Ea(f, c, d)
            }
            return aa
        }, clip:function (a) {
            var b = this, c = a.members;
            c.push(b);
            b.destroyClip = function () {
                qc(c, b)
            };
            return b.css(a.getCSS(b.inverted))
        }, css:function (a) {
            var b = this.element;
            if (b = a && b.tagName === "SPAN" &&
                a.width) {
                delete a.width;
                this.textWidth = b;
                this.updateTransform()
            }
            this.styles = pa(this.styles, a);
            Na(this.element, a);
            return this
        }, destroy:function () {
            this.destroyClip && this.destroyClip();
            Ic.prototype.destroy.apply(this)
        }, empty:function () {
            for (var a = this.element.childNodes, b = a.length, c; b--;) {
                c = a[b];
                c.parentNode.removeChild(c)
            }
        }, getBBox:function () {
            var a = this.element, b = this.bBox;
            if (!b) {
                if (a.nodeName === "text")a.style.position = oc;
                b = this.bBox = {x:a.offsetLeft, y:a.offsetTop, width:a.offsetWidth, height:a.offsetHeight}
            }
            return b
        },
            on:function (a, b) {
                this.element["on" + a] = function () {
                    var c = cb.event;
                    c.target = c.srcElement;
                    b(c)
                };
                return this
            }, updateTransform:function () {
                if (this.added) {
                    var a = this, b = a.element, c = a.translateX || 0, d = a.translateY || 0, e = a.x || 0, f = a.y || 0, g = a.textAlign || "left", h = {left:0, center:0.5, right:1}[g], j = g && g !== "left";
                    if (c || d)a.css({marginLeft:c, marginTop:d});
                    a.inverted && u(b.childNodes, function (R) {
                        a.renderer.invertChild(R, b)
                    });
                    if (b.tagName === "SPAN") {
                        var l, n;
                        c = a.rotation;
                        var J;
                        l = 0;
                        d = 1;
                        var D = 0, aa;
                        J = ja(a.textWidth);
                        var E = a.xCorr ||
                            0, da = a.yCorr || 0, w = [c, g, b.innerHTML, a.textWidth].join(",");
                        if (w !== a.cTT) {
                            if (M(c)) {
                                l = c * Ud;
                                d = nb(l);
                                D = Db(l);
                                Na(b, {filter:c ? ["progid:DXImageTransform.Microsoft.Matrix(M11=", d, ", M12=", -D, ", M21=", D, ", M22=", d, ", sizingMethod='auto expand')"].join("") : jb})
                            }
                            l = b.offsetWidth;
                            n = b.offsetHeight;
                            if (l > J) {
                                Na(b, {width:J + bb, display:"block", whiteSpace:"normal"});
                                l = J
                            }
                            J = X((ja(b.style.fontSize) || 12) * 1.2);
                            E = d < 0 && -l;
                            da = D < 0 && -n;
                            aa = d * D < 0;
                            E += D * J * (aa ? 1 - h : h);
                            da -= d * J * (c ? aa ? h : 1 - h : 1);
                            if (j) {
                                E -= l * h * (d < 0 ? -1 : 1);
                                if (c)da -= n * h * (D < 0 ? -1 :
                                    1);
                                Na(b, {textAlign:g})
                            }
                            a.xCorr = E;
                            a.yCorr = da
                        }
                        Na(b, {left:e + E, top:f + da});
                        a.cTT = w
                    }
                } else this.alignOnAdd = true
            }, shadow:function (a, b) {
                var c = [], d, e = this.element, f = this.renderer, g, h = e.style, j, l = e.path;
                if (l && typeof l.value !== "string")l = "x";
                if (a) {
                    for (d = 1; d <= 3; d++) {
                        j = ['<shape isShadow="true" strokeweight="', 7 - 2 * d, '" filled="false" path="', l, '" coordsize="100,100" style="', e.style.cssText, '" />'];
                        g = ib(f.prepVML(j), null, {left:ja(h.left) + 1, top:ja(h.top) + 1});
                        j = ['<stroke color="black" opacity="', 0.05 * d, '"/>'];
                        ib(f.prepVML(j),
                            null, null, g);
                        b ? b.element.appendChild(g) : e.parentNode.insertBefore(g, e);
                        c.push(g)
                    }
                    this.shadows = c
                }
                return this
            }});
        la = function () {
            this.init.apply(this, arguments)
        };
        la.prototype = va(Vc.prototype, {Element:Eb, isIE8:pc.indexOf("MSIE 8.0") > -1, init:function (a, b, c) {
            var d;
            this.alignedObjects = [];
            d = this.createElement(Qb);
            a.appendChild(d.element);
            this.box = d.element;
            this.boxWrapper = d;
            this.setSize(b, c, false);
            if (!wa.namespaces.hcv) {
                wa.namespaces.add("hcv", "urn:schemas-microsoft-com:vml");
                wa.createStyleSheet().cssText =
                    "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "
            }
        }, clipRect:function (a, b, c, d) {
            var e = this.createElement();
            return pa(e, {members:[], left:a, top:b, width:c, height:d, getCSS:function (f) {
                var g = this.top, h = this.left, j = h + this.width, l = g + this.height;
                g = {clip:"rect(" + X(f ? h : g) + "px," + X(f ? l : j) + "px," + X(f ? j : l) + "px," + X(f ? g : h) + "px)"};
                !f && zc && pa(g, {width:j + bb, height:l + bb});
                return g
            }, updateClipping:function () {
                u(e.members, function (f) {
                    f.css(e.getCSS(f.inverted))
                })
            }})
        },
            color:function (a, b, c) {
                var d, e = /^rgba/;
                if (a && a.linearGradient) {
                    var f, g, h = a.linearGradient, j, l, n, J;
                    u(a.stops, function (D, aa) {
                        if (e.test(D[1])) {
                            d = Yb(D[1]);
                            f = d.get("rgb");
                            g = d.get("a")
                        } else {
                            f = D[1];
                            g = 1
                        }
                        if (aa) {
                            n = f;
                            J = g
                        } else {
                            j = f;
                            l = g
                        }
                    });
                    a = 90 - sa.atan((h[3] - h[1]) / (h[2] - h[0])) * 180 / cc;
                    c = ["<", c, ' colors="0% ', j, ",100% ", n, '" angle="', a, '" opacity="', J, '" o:opacity2="', l, '" type="gradient" focus="100%" />'];
                    ib(this.prepVML(c), null, null, b)
                } else if (e.test(a) && b.tagName !== "IMG") {
                    d = Yb(a);
                    c = ["<", c, ' opacity="', d.get("a"),
                        '"/>'];
                    ib(this.prepVML(c), null, null, b);
                    return d.get("rgb")
                } else return a
            }, prepVML:function (a) {
                var b = this.isIE8;
                a = a.join("");
                if (b) {
                    a = a.replace("/>", ' xmlns="urn:schemas-microsoft-com:vml" />');
                    a = a.indexOf('style="') === -1 ? a.replace("/>", ' style="display:inline-block;behavior:url(#default#VML);" />') : a.replace('style="', 'style="display:inline-block;behavior:url(#default#VML);')
                } else a = a.replace("<", "<hcv:");
                return a
            }, text:function (a, b, c) {
                var d = Wa.chart.style;
                return this.createElement("span").attr({text:a,
                    x:X(b), y:X(c)}).css({whiteSpace:"nowrap", fontFamily:d.fontFamily, fontSize:d.fontSize})
            }, path:function (a) {
                return this.createElement("shape").attr({coordsize:"100 100", d:a})
            }, circle:function (a, b, c) {
                return this.symbol("circle").attr({x:a, y:b, r:c})
            }, g:function (a) {
                var b;
                if (a)b = {className:nc + a, "class":nc + a};
                return this.createElement(Qb).attr(b)
            }, image:function (a, b, c, d, e) {
                var f = this.createElement("img").attr({src:a});
                arguments.length > 1 && f.css({left:b, top:c, width:d, height:e});
                return f
            }, rect:function (a, b, c, d, e, f) {
                if (Lb(a)) {
                    b = a.y;
                    c = a.width;
                    d = a.height;
                    e = a.r;
                    f = a.strokeWidth;
                    a = a.x
                }
                var g = this.symbol("rect");
                g.r = e;
                return g.attr(g.crisp(f, a, b, Ha(c, 0), Ha(d, 0)))
            }, invertChild:function (a, b) {
                var c = b.style;
                Na(a, {flip:"x", left:ja(c.width) - 10, top:ja(c.height) - 10, rotation:-90})
            }, symbols:{arc:function (a, b, c, d) {
                var e = d.start, f = d.end, g = nb(e), h = Db(e), j = nb(f), l = Db(f);
                d = d.innerR;
                var n = 0.07 / c, J = d && 0.1 / d || 0;
                if (f - e === 0)return["x"]; else if (2 * cc - f + e < n)j = -n; else if (f - e < J)j = nb(e + J);
                return["wa", a - c, b - c, a + c, b + c, a + c * g, b + c * h, a + c *
                    j, b + c * l, "at", a - d, b - d, a + d, b + d, a + d * j, b + d * l, a + d * g, b + d * h, "x", "e"]
            }, circle:function (a, b, c) {
                return["wa", a - c, b - c, a + c, b + c, a + c, b, a + c, b, "e"]
            }, rect:function (a, b, c, d) {
                if (!M(d))return[];
                var e = d.width;
                d = d.height;
                var f = a + e, g = b + d;
                c = qb(c, e, d);
                return[ab, a + c, b, La, f - c, b, "wa", f - 2 * c, b, f, b + 2 * c, f - c, b, f, b + c, La, f, g - c, "wa", f - 2 * c, g - 2 * c, f, g, f, g - c, f - c, g, La, a + c, g, "wa", a, g - 2 * c, a + 2 * c, g, a + c, g, a, g - c, La, a, b + c, "wa", a, b, a + 2 * c, b + 2 * c, a, b + c, a + c, b, "x", "e"]
            }}});
        Wc = la
    }
    Gd.prototype.callbacks = [];
    var Ac = function () {
    };
    Ac.prototype = {init:function (a, b) {
        var c = a.chart.counters, d;
        this.series = a;
        this.applyOptions(b);
        this.pointAttr = {};
        if (a.options.colorByPoint) {
            d = a.chart.options.colors;
            if (!this.options)this.options = {};
            this.color = this.options.color = this.color || d[c.color++];
            c.wrapColor(d.length)
        }
        a.chart.pointCount++;
        return this
    }, applyOptions:function (a) {
        var b = this.series;
        this.config = a;
        if (dc(a) || a === null)this.y = a; else if (Lb(a) && !dc(a.length)) {
            pa(this, a);
            this.options = a
        } else if (Pb(a[0])) {
            this.name = a[0];
            this.y = a[1]
        } else if (dc(a[0])) {
            this.x = a[0];
            this.y = a[1]
        }
        if (this.x ===
            Va)this.x = b.autoIncrement()
    }, destroy:function () {
        var a = this, b = a.series, c;
        b.chart.pointCount--;
        a === b.chart.hoverPoint && a.onMouseOut();
        b.chart.hoverPoints = null;
        Cb(a);
        u(["graphic", "tracker", "group", "dataLabel", "connector"], function (d) {
            a[d] && a[d].destroy()
        });
        a.legendItem && a.series.chart.legend.destroyItem(a);
        for (c in a)a[c] = null
    }, getLabelConfig:function () {
        return{x:this.category, y:this.y, series:this.series, point:this, percentage:this.percentage, total:this.total || this.stackTotal}
    }, select:function (a, b) {
        var c =
            this, d = c.series.chart;
        c.selected = a = C(a, !c.selected);
        c.firePointEvent(a ? "select" : "unselect");
        c.setState(a && "select");
        b || u(d.getSelectedPoints(), function (e) {
            if (e.selected && e !== c) {
                e.selected = false;
                e.setState(hb);
                e.firePointEvent("unselect")
            }
        })
    }, onMouseOver:function () {
        var a = this.series.chart, b = a.tooltip, c = a.hoverPoint;
        c && c !== this && c.onMouseOut();
        this.firePointEvent("mouseOver");
        b && !b.shared && b.refresh(this);
        this.setState(Bb);
        a.hoverPoint = this
    }, onMouseOut:function () {
        this.firePointEvent("mouseOut");
        this.setState();
        this.series.chart.hoverPoint = null
    }, tooltipFormatter:function (a) {
        var b = this.series;
        return['<span style="color:' + b.color + '">', this.name || b.name, "</span>: ", !a ? "<b>x = " + (this.name || this.x) + ",</b> " : "", "<b>", !a ? "y = " : "", this.y, "</b>"].join("")
    }, update:function (a, b, c) {
        var d = this, e = d.series, f = d.graphic, g = e.chart;
        b = C(b, true);
        d.firePointEvent("update", {options:a}, function () {
            d.applyOptions(a);
            if (Lb(a)) {
                e.getAttribs();
                f && f.attr(d.pointAttr[e.state])
            }
            e.isDirty = true;
            b && g.redraw(c)
        })
    }, remove:function (a, b) {
        var c =
            this, d = c.series, e = d.chart, f = d.data;
        ec(b, e);
        a = C(a, true);
        c.firePointEvent("remove", null, function () {
            qc(f, c);
            c.destroy();
            d.isDirty = true;
            a && e.redraw()
        })
    }, firePointEvent:function (a, b, c) {
        var d = this, e = this.series.options;
        if (e.point.events[a] || d.options && d.options.events && d.options.events[a])this.importEvents();
        if (a === "click" && e.allowPointSelect)c = function (f) {
            d.select(null, f.ctrlKey || f.metaKey || f.shiftKey)
        };
        Pa(this, a, b, c)
    }, importEvents:function () {
        if (!this.hasImportedEvents) {
            var a = va(this.series.options.point,
                this.options).events, b;
            this.events = a;
            for (b in a)Sa(this, b, a[b]);
            this.hasImportedEvents = true
        }
    }, setState:function (a) {
        var b = this.series, c = b.options.states, d = xb[b.type].marker && b.options.marker, e = d && !d.enabled, f = (d = d && d.states[a]) && d.enabled === false, g = b.stateMarkerGraphic, h = b.chart, j = this.pointAttr;
        a = a || hb;
        if (!(a === this.state || this.selected && a !== "select" || c[a] && c[a].enabled === false || a && (f || e && !d.enabled))) {
            if (this.graphic)this.graphic.attr(j[a]); else {
                if (a) {
                    if (!g)b.stateMarkerGraphic = g = h.renderer.circle(0,
                        0, j[a].r).attr(j[a]).add(b.group);
                    g.translate(this.plotX, this.plotY)
                }
                if (g)g[a ? "show" : "hide"]()
            }
            this.state = a
        }
    }};
    var pb = function () {
    };
    pb.prototype = {isCartesian:true, type:"line", pointClass:Ac, pointAttrToOptions:{stroke:"lineColor", "stroke-width":"lineWidth", fill:"fillColor", r:"radius"}, init:function (a, b) {
        var c, d;
        d = a.series.length;
        this.chart = a;
        b = this.setOptions(b);
        pa(this, {index:d, options:b, name:b.name || "Series " + (d + 1), state:hb, pointAttr:{}, visible:b.visible !== false, selected:b.selected === true});
        d = b.events;
        for (c in d)Sa(this, c, d[c]);
        if (d && d.click || b.point && b.point.events && b.point.events.click || b.allowPointSelect)a.runTrackerClick = true;
        this.getColor();
        this.getSymbol();
        this.setData(b.data, false)
    }, autoIncrement:function () {
        var a = this.options, b = this.xIncrement;
        b = C(b, a.pointStart, 0);
        this.pointInterval = C(this.pointInterval, a.pointInterval, 1);
        this.xIncrement = b + this.pointInterval;
        return b
    }, cleanData:function () {
        var a = this.chart, b = this.data, c, d, e = a.smallestInterval, f, g;
        b.sort(function (h, j) {
            return h.x - j.x
        });
        if (this.options.connectNulls)for (g =
                                               b.length - 1; g >= 0; g--)b[g].y === null && b[g - 1] && b[g + 1] && b.splice(g, 1);
        for (g = b.length - 1; g >= 0; g--)if (b[g - 1]) {
            f = b[g].x - b[g - 1].x;
            if (f > 0 && (d === Va || f < d)) {
                d = f;
                c = g
            }
        }
        if (e === Va || d < e)a.smallestInterval = d;
        this.closestPoints = c
    }, getSegments:function () {
        var a = -1, b = [], c = this.data;
        u(c, function (d, e) {
            if (d.y === null) {
                e > a + 1 && b.push(c.slice(a + 1, e));
                a = e
            } else e === c.length - 1 && b.push(c.slice(a + 1, e + 1))
        });
        this.segments = b
    }, setOptions:function (a) {
        var b = this.chart.options.plotOptions;
        return va(b[this.type], b.series, a)
    }, getColor:function () {
        var a =
            this.chart.options.colors, b = this.chart.counters;
        this.color = this.options.color || a[b.color++] || "#0000ff";
        b.wrapColor(a.length)
    }, getSymbol:function () {
        var a = this.chart.options.symbols, b = this.chart.counters;
        this.symbol = this.options.marker.symbol || a[b.symbol++];
        b.wrapSymbol(a.length)
    }, addPoint:function (a, b, c, d) {
        var e = this.data, f = this.graph, g = this.area, h = this.chart;
        a = (new this.pointClass).init(this, a);
        ec(d, h);
        if (f && c)f.shift = c;
        if (g) {
            g.shift = c;
            g.isArea = true
        }
        b = C(b, true);
        e.push(a);
        c && e[0].remove(false);
        this.getAttribs();
        this.isDirty = true;
        b && h.redraw()
    }, setData:function (a, b) {
        var c = this, d = c.data, e = c.initialColor, f = c.chart, g = d && d.length || 0;
        c.xIncrement = null;
        if (M(e))f.counters.color = e;
        for (a = mc(rc(a || []), function (h) {
            return(new c.pointClass).init(c, h)
        }); g--;)d[g].destroy();
        c.data = a;
        c.cleanData();
        c.getSegments();
        c.getAttribs();
        c.isDirty = true;
        f.isDirtyBox = true;
        C(b, true) && f.redraw(false)
    }, remove:function (a, b) {
        var c = this, d = c.chart;
        a = C(a, true);
        if (!c.isRemoving) {
            c.isRemoving = true;
            Pa(c, "remove", null, function () {
                c.destroy();
                d.isDirtyLegend =
                    d.isDirtyBox = true;
                a && d.redraw(b)
            })
        }
        c.isRemoving = false
    }, translate:function () {
        for (var a = this.chart, b = this.options.stacking, c = this.xAxis.categories, d = this.yAxis, e = this.data, f = e.length; f--;) {
            var g = e[f], h = g.x, j = g.y, l = g.low, n = d.stacks[(j < 0 ? "-" : "") + this.stackKey];
            g.plotX = this.xAxis.translate(h);
            if (b && this.visible && n && n[h]) {
                l = n[h];
                h = l.total;
                l.cum = l = l.cum - j;
                j = l + j;
                if (b === "percent") {
                    l = h ? l * 100 / h : 0;
                    j = h ? j * 100 / h : 0
                }
                g.percentage = h ? g.y * 100 / h : 0;
                g.stackTotal = h
            }
            if (M(l))g.yBottom = d.translate(l, 0, 1, 0, 1);
            if (j !== null)g.plotY =
                d.translate(j, 0, 1, 0, 1);
            g.clientX = a.inverted ? a.plotHeight - g.plotX : g.plotX;
            g.category = c && c[g.x] !== Va ? c[g.x] : g.x
        }
    }, setTooltipPoints:function (a) {
        var b = this.chart, c = b.inverted, d = [], e = X((c ? b.plotTop : b.plotLeft) + b.plotSizeX), f, g, h = [];
        if (a)this.tooltipPoints = null;
        u(this.segments, function (j) {
            d = d.concat(j)
        });
        if (this.xAxis && this.xAxis.reversed)d = d.reverse();
        u(d, function (j, l) {
            f = d[l - 1] ? d[l - 1]._high + 1 : 0;
            for (g = j._high = d[l + 1] ? kb((j.plotX + (d[l + 1] ? d[l + 1].plotX : e)) / 2) : e; f <= g;)h[c ? e - f++ : f++] = j
        });
        this.tooltipPoints = h
    },
        onMouseOver:function () {
            var a = this.chart, b = a.hoverSeries;
            if (!(!Jb && a.mouseIsDown)) {
                b && b !== this && b.onMouseOut();
                this.options.events.mouseOver && Pa(this, "mouseOver");
                this.tracker && this.tracker.toFront();
                this.setState(Bb);
                a.hoverSeries = this
            }
        }, onMouseOut:function () {
            var a = this.options, b = this.chart, c = b.tooltip, d = b.hoverPoint;
            d && d.onMouseOut();
            this && a.events.mouseOut && Pa(this, "mouseOut");
            c && !a.stickyTracking && c.hide();
            this.setState();
            b.hoverSeries = null
        }, animate:function (a) {
            var b = this.chart, c = this.clipRect,
                d = this.options.animation;
            if (d && !Lb(d))d = {};
            if (a) {
                if (!c.isAnimating) {
                    c.attr("width", 0);
                    c.isAnimating = true
                }
            } else {
                c.animate({width:b.plotSizeX}, d);
                this.animate = null
            }
        }, drawPoints:function () {
            var a, b = this.data, c = this.chart, d, e, f, g, h, j;
            if (this.options.marker.enabled)for (f = b.length; f--;) {
                g = b[f];
                d = g.plotX;
                e = g.plotY;
                j = g.graphic;
                if (e !== Va && !isNaN(e)) {
                    a = g.pointAttr[g.selected ? "select" : hb];
                    h = a.r;
                    if (j)j.animate({x:d, y:e, r:h}); else g.graphic = c.renderer.symbol(C(g.marker && g.marker.symbol, this.symbol), d, e, h).attr(a).add(this.group)
                }
            }
        },
        convertAttribs:function (a, b, c, d) {
            var e = this.pointAttrToOptions, f, g, h = {};
            a = a || {};
            b = b || {};
            c = c || {};
            d = d || {};
            for (f in e) {
                g = e[f];
                h[f] = C(a[g], b[f], c[f], d[f])
            }
            return h
        }, getAttribs:function () {
            var a = this, b = xb[a.type].marker ? a.options.marker : a.options, c = b.states, d = c[Bb], e, f = a.color, g = {stroke:f, fill:f}, h = a.data, j = [], l, n = a.pointAttrToOptions, J;
            if (a.options.marker) {
                d.radius = d.radius || b.radius + 2;
                d.lineWidth = d.lineWidth || b.lineWidth + 1
            } else d.color = d.color || Yb(d.color || f).brighten(d.brightness).get();
            j[hb] = a.convertAttribs(b,
                g);
            u([Bb, "select"], function (D) {
                j[D] = a.convertAttribs(c[D], j[hb])
            });
            a.pointAttr = j;
            for (f = h.length; f--;) {
                g = h[f];
                if ((b = g.options && g.options.marker || g.options) && b.enabled === false)b.radius = 0;
                e = false;
                if (g.options)for (J in n)if (M(b[n[J]]))e = true;
                if (e) {
                    l = [];
                    c = b.states || {};
                    e = c[Bb] = c[Bb] || {};
                    if (!a.options.marker)e.color = Yb(e.color || g.options.color).brighten(e.brightness || d.brightness).get();
                    l[hb] = a.convertAttribs(b, j[hb]);
                    l[Bb] = a.convertAttribs(c[Bb], j[Bb], l[hb]);
                    l.select = a.convertAttribs(c.select, j.select,
                        l[hb])
                } else l = j;
                g.pointAttr = l
            }
        }, destroy:function () {
            var a = this, b = a.chart, c = /\/5[0-9\.]+ (Safari|Mobile)\//.test(pc), d, e;
            Pa(a, "destroy");
            Cb(a);
            a.legendItem && a.chart.legend.destroyItem(a);
            u(a.data, function (f) {
                f.destroy()
            });
            u(["area", "graph", "dataLabelsGroup", "group", "tracker"], function (f) {
                if (a[f]) {
                    d = c && f === "group" ? "hide" : "destroy";
                    a[f][d]()
                }
            });
            if (b.hoverSeries === a)b.hoverSeries = null;
            qc(b.series, a);
            for (e in a)delete a[e]
        }, drawDataLabels:function () {
            if (this.options.dataLabels.enabled) {
                var a = this, b, c, d =
                    a.data, e = a.options.dataLabels, f, g = a.dataLabelsGroup, h = a.chart, j = h.inverted, l = a.type, n;
                n = a.options.stacking;
                var J = l === "column" || l === "bar", D = e.verticalAlign === null, aa = e.y === null;
                if (J)if (n) {
                    if (D)e = va(e, {verticalAlign:"middle"});
                    if (aa)e = va(e, {y:{top:14, middle:4, bottom:-6}[e.verticalAlign]})
                } else if (D)e = va(e, {verticalAlign:"top"});
                if (!g)g = a.dataLabelsGroup = h.renderer.g("data-labels").attr({visibility:a.visible ? Ab : ub, zIndex:6}).translate(h.plotLeft, h.plotTop).add();
                n = e.color;
                if (n === "auto")n = null;
                e.style.color =
                    C(n, a.color);
                u(d, function (E) {
                    var da = E.barX, w = da && da + E.barW / 2 || E.plotX || -999, R = C(E.plotY, -999), B = E.dataLabel, K = e.align, S = aa ? E.y > 0 ? -6 : 12 : e.y;
                    f = e.formatter.call(E.getLabelConfig());
                    b = (j ? h.plotWidth - R : w) + e.x;
                    c = (j ? h.plotHeight - w : R) + S;
                    if (l === "column")b += {left:-1, right:1}[K] * E.barW / 2 || 0;
                    if (j && E.y < 0) {
                        K = "right";
                        b -= 10
                    }
                    if (B) {
                        if (j && !e.y)c = c + ja(B.styles.lineHeight) * 0.9 - B.getBBox().height / 2;
                        B.attr({text:f}).animate({x:b, y:c})
                    } else if (M(f)) {
                        B = E.dataLabel = h.renderer.text(f, b, c).attr({align:K, rotation:e.rotation,
                            zIndex:1}).css(e.style).add(g);
                        j && !e.y && B.attr({y:c + ja(B.styles.lineHeight) * 0.9 - B.getBBox().height / 2})
                    }
                    if (J && a.options.stacking) {
                        w = E.barY;
                        R = E.barW;
                        E = E.barH;
                        B.align(e, null, {x:j ? h.plotWidth - w - E : da, y:j ? h.plotHeight - da - R : w, width:j ? E : R, height:j ? R : E})
                    }
                })
            }
        }, drawGraph:function () {
            var a = this, b = a.options, c = a.graph, d = [], e, f = a.area, g = a.group, h = b.lineColor || a.color, j = b.lineWidth, l = b.dashStyle, n, J = a.chart.renderer, D = a.yAxis.getThreshold(b.threshold || 0), aa = /^area/.test(a.type), E = [], da = [];
            u(a.segments, function (w) {
                n =
                    [];
                u(w, function (S, I) {
                    if (a.getPointSpline)n.push.apply(n, a.getPointSpline(w, S, I)); else {
                        n.push(I ? La : ab);
                        I && b.step && n.push(S.plotX, w[I - 1].plotY);
                        n.push(S.plotX, S.plotY)
                    }
                });
                if (w.length > 1)d = d.concat(n); else E.push(w[0]);
                if (aa) {
                    var R = [], B, K = n.length;
                    for (B = 0; B < K; B++)R.push(n[B]);
                    K === 3 && R.push(La, n[1], n[2]);
                    if (b.stacking && a.type !== "areaspline")for (B = w.length - 1; B >= 0; B--)R.push(w[B].plotX, w[B].yBottom); else R.push(La, w[w.length - 1].plotX, D, La, w[0].plotX, D);
                    da = da.concat(R)
                }
            });
            a.graphPath = d;
            a.singlePoints = E;
            if (aa) {
                e =
                    C(b.fillColor, Yb(a.color).setOpacity(b.fillOpacity || 0.75).get());
                if (f)f.animate({d:da}); else a.area = a.chart.renderer.path(da).attr({fill:e}).add(g)
            }
            if (c)c.animate({d:d}); else if (j) {
                c = {stroke:h, "stroke-width":j};
                if (l)c.dashstyle = l;
                a.graph = J.path(d).attr(c).add(g).shadow(b.shadow)
            }
        }, render:function () {
            var a = this, b = a.chart, c, d, e = a.options, f = e.animation, g = f && a.animate;
            f = g ? f && f.duration || 500 : 0;
            var h = a.clipRect, j = b.renderer;
            if (!h) {
                h = a.clipRect = !b.hasRendered && b.clipRect ? b.clipRect : j.clipRect(0, 0, b.plotSizeX,
                    b.plotSizeY);
                if (!b.clipRect)b.clipRect = h
            }
            if (!a.group) {
                c = a.group = j.g("series");
                if (b.inverted) {
                    d = function () {
                        c.attr({width:b.plotWidth, height:b.plotHeight}).invert()
                    };
                    d();
                    Sa(b, "resize", d);
                    Sa(a, "destroy", function () {
                        Cb(b, "resize", d)
                    })
                }
                c.clip(a.clipRect).attr({visibility:a.visible ? Ab : ub, zIndex:e.zIndex}).translate(b.plotLeft, b.plotTop).add(b.seriesGroup)
            }
            a.drawDataLabels();
            g && a.animate(true);
            a.drawGraph && a.drawGraph();
            a.drawPoints();
            a.options.enableMouseTracking !== false && a.drawTracker();
            g && a.animate();
            setTimeout(function () {
                h.isAnimating = false;
                if ((c = a.group) && h !== b.clipRect && h.renderer) {
                    c.clip(a.clipRect = b.clipRect);
                    h.destroy()
                }
            }, f);
            a.isDirty = false
        }, redraw:function () {
            var a = this.chart, b = this.group;
            if (b) {
                a.inverted && b.attr({width:a.plotWidth, height:a.plotHeight});
                b.animate({translateX:a.plotLeft, translateY:a.plotTop})
            }
            this.translate();
            this.setTooltipPoints(true);
            this.render()
        }, setState:function (a) {
            var b = this.options, c = this.graph, d = b.states;
            b = b.lineWidth;
            a = a || hb;
            if (this.state !== a) {
                this.state = a;
                if (!(d[a] &&
                    d[a].enabled === false)) {
                    if (a)b = d[a].lineWidth || b + 1;
                    if (c && !c.dashstyle)c.attr({"stroke-width":b}, a ? 0 : 500)
                }
            }
        }, setVisible:function (a, b) {
            var c = this.chart, d = this.legendItem, e = this.group, f = this.tracker, g = this.dataLabelsGroup, h, j = this.data, l = c.options.chart.ignoreHiddenSeries;
            h = this.visible;
            h = (this.visible = a = a === Va ? !h : a) ? "show" : "hide";
            e && e[h]();
            if (f)f[h](); else for (e = j.length; e--;) {
                f = j[e];
                f.tracker && f.tracker[h]()
            }
            g && g[h]();
            d && c.legend.colorizeItem(this, a);
            this.isDirty = true;
            this.options.stacking && u(c.series,
                function (n) {
                    if (n.options.stacking && n.visible)n.isDirty = true
                });
            if (l)c.isDirtyBox = true;
            b !== false && c.redraw();
            Pa(this, h)
        }, show:function () {
            this.setVisible(true)
        }, hide:function () {
            this.setVisible(false)
        }, select:function (a) {
            this.selected = a = a === Va ? !this.selected : a;
            if (this.checkbox)this.checkbox.checked = a;
            Pa(this, a ? "select" : "unselect")
        }, drawTracker:function () {
            var a = this, b = a.options, c = [].concat(a.graphPath), d = c.length, e = a.chart, f = e.options.tooltip.snap, g = a.tracker, h = b.cursor;
            h = h && {cursor:h};
            var j = a.singlePoints,
                l;
            if (d)for (l = d + 1; l--;) {
                c[l] === ab && c.splice(l + 1, 0, c[l + 1] - f, c[l + 2], La);
                if (l && c[l] === ab || l === d)c.splice(l, 0, La, c[l - 2] + f, c[l - 1])
            }
            for (l = 0; l < j.length; l++) {
                d = j[l];
                c.push(ab, d.plotX - f, d.plotY, La, d.plotX + f, d.plotY)
            }
            if (g)g.attr({d:c}); else a.tracker = e.renderer.path(c).attr({isTracker:true, stroke:Wd, fill:jb, "stroke-width":b.lineWidth + 2 * f, visibility:a.visible ? Ab : ub, zIndex:1}).on(Jb ? "touchstart" : "mouseover",
                function () {
                    e.hoverSeries !== a && a.onMouseOver()
                }).on("mouseout",
                function () {
                    b.stickyTracking || a.onMouseOut()
                }).css(h).add(e.trackerGroup)
        }};
    la = yb(pb);
    vb.line = la;
    la = yb(pb, {type:"area"});
    vb.area = la;
    la = yb(pb, {type:"spline", getPointSpline:function (a, b, c) {
        var d = b.plotX, e = b.plotY, f = a[c - 1], g = a[c + 1], h, j, l, n;
        if (c && c < a.length - 1) {
            a = f.plotY;
            l = g.plotX;
            g = g.plotY;
            var J;
            h = (1.5 * d + f.plotX) / 2.5;
            j = (1.5 * e + a) / 2.5;
            l = (1.5 * d + l) / 2.5;
            n = (1.5 * e + g) / 2.5;
            J = (n - j) * (l - d) / (l - h) + e - n;
            j += J;
            n += J;
            if (j > a && j > e) {
                j = Ha(a, e);
                n = 2 * e - j
            } else if (j < a && j < e) {
                j = qb(a, e);
                n = 2 * e - j
            }
            if (n > g && n > e) {
                n = Ha(g, e);
                j = 2 * e - n
            } else if (n < g && n < e) {
                n = qb(g, e);
                j = 2 * e - n
            }
            b.rightContX = l;
            b.rightContY = n
        }
        if (c) {
            b = ["C", f.rightContX ||
                f.plotX, f.rightContY || f.plotY, h || d, j || e, d, e];
            f.rightContX = f.rightContY = null
        } else b = [ab, d, e];
        return b
    }});
    vb.spline = la;
    la = yb(la, {type:"areaspline"});
    vb.areaspline = la;
    var ad = yb(pb, {type:"column", pointAttrToOptions:{stroke:"borderColor", "stroke-width":"borderWidth", fill:"color", r:"borderRadius"}, init:function () {
        pb.prototype.init.apply(this, arguments);
        var a = this, b = a.chart;
        b.hasColumn = true;
        b.hasRendered && u(b.series, function (c) {
            if (c.type === a.type)c.isDirty = true
        })
    }, translate:function () {
        var a = this, b = a.chart,
            c = a.options, d = c.stacking, e = c.borderWidth, f = 0, g = a.xAxis.reversed, h = a.xAxis.categories, j = {}, l, n;
        pb.prototype.translate.apply(a);
        u(b.series, function (S) {
            if (S.type === a.type && S.visible) {
                if (S.options.stacking) {
                    l = S.stackKey;
                    if (j[l] === Va)j[l] = f++;
                    n = j[l]
                } else n = f++;
                S.columnIndex = n
            }
        });
        var J = a.data, D = a.closestPoints;
        h = $a(J[1] ? J[D].plotX - J[D - 1].plotX : b.plotSizeX / (h && h.length || 1));
        D = h * c.groupPadding;
        var aa = (h - 2 * D) / f, E = c.pointWidth, da = M(E) ? (aa - E) / 2 : aa * c.pointPadding, w = Ha(C(E, aa - 2 * da), 1), R = da + (D + ((g ? f - a.columnIndex :
            a.columnIndex) || 0) * aa - h / 2) * (g ? -1 : 1), B = a.yAxis.getThreshold(c.threshold || 0), K = C(c.minPointLength, 5);
        u(J, function (S) {
            var I = S.plotY, za = S.yBottom || B, Da = S.plotX + R, gb = fd(qb(I, za)), wb = fd(Ha(I, za) - gb), Ob = a.yAxis.stacks[(S.y < 0 ? "-" : "") + a.stackKey], Kb;
            d && a.visible && Ob && Ob[S.x] && Ob[S.x].setOffset(R, w);
            if ($a(wb) < K) {
                if (K) {
                    wb = K;
                    gb = $a(gb - B) > K ? za - K : B - (I <= B ? K : 0)
                }
                Kb = gb - 3
            }
            pa(S, {barX:Da, barY:gb, barW:w, barH:wb});
            S.shapeType = "rect";
            I = pa(b.renderer.Element.prototype.crisp.apply({}, [e, Da, gb, w, wb]), {r:c.borderRadius});
            if (e %
                2) {
                I.y -= 1;
                I.height += 1
            }
            S.shapeArgs = I;
            S.trackerArgs = M(Kb) && va(S.shapeArgs, {height:Ha(6, wb + 3), y:Kb})
        })
    }, getSymbol:function () {
    }, drawGraph:function () {
    }, drawPoints:function () {
        var a = this, b = a.options, c = a.chart.renderer, d, e;
        u(a.data, function (f) {
            var g = f.plotY;
            if (g !== Va && !isNaN(g) && f.y !== null) {
                d = f.graphic;
                e = f.shapeArgs;
                if (d) {
                    Tc(d);
                    d.animate(e)
                } else f.graphic = c[f.shapeType](e).attr(f.pointAttr[f.selected ? "select" : hb]).add(a.group).shadow(b.shadow)
            }
        })
    }, drawTracker:function () {
        var a = this, b = a.chart, c = b.renderer,
            d, e, f = +new Date, g = a.options.cursor, h = g && {cursor:g}, j;
        u(a.data, function (l) {
            e = l.tracker;
            d = l.trackerArgs || l.shapeArgs;
            delete d.strokeWidth;
            if (l.y !== null)if (e)e.attr(d); else l.tracker = c[l.shapeType](d).attr({isTracker:f, fill:Wd, visibility:a.visible ? Ab : ub, zIndex:1}).on(Jb ? "touchstart" : "mouseover",
                function (n) {
                    j = n.relatedTarget || n.fromElement;
                    b.hoverSeries !== a && Ea(j, "isTracker") !== f && a.onMouseOver();
                    l.onMouseOver()
                }).on("mouseout",
                function (n) {
                    if (!a.options.stickyTracking) {
                        j = n.relatedTarget || n.toElement;
                        Ea(j, "isTracker") !== f && a.onMouseOut()
                    }
                }).css(h).add(l.group || b.trackerGroup)
        })
    }, animate:function (a) {
        var b = this, c = b.data;
        if (!a) {
            u(c, function (d) {
                var e = d.graphic;
                d = d.shapeArgs;
                if (e) {
                    e.attr({height:0, y:b.yAxis.translate(0, 0, 1)});
                    e.animate({height:d.height, y:d.y}, b.options.animation)
                }
            });
            b.animate = null
        }
    }, remove:function () {
        var a = this, b = a.chart;
        b.hasRendered && u(b.series, function (c) {
            if (c.type === a.type)c.isDirty = true
        });
        pb.prototype.remove.apply(a, arguments)
    }});
    vb.column = ad;
    la = yb(ad, {type:"bar", init:function (a) {
        a.inverted =
            this.inverted = true;
        ad.prototype.init.apply(this, arguments)
    }});
    vb.bar = la;
    la = yb(pb, {type:"scatter", translate:function () {
        var a = this;
        pb.prototype.translate.apply(a);
        u(a.data, function (b) {
            b.shapeType = "circle";
            b.shapeArgs = {x:b.plotX, y:b.plotY, r:a.chart.options.tooltip.snap}
        })
    }, drawTracker:function () {
        var a = this, b = a.options.cursor, c = b && {cursor:b}, d;
        u(a.data, function (e) {
            (d = e.graphic) && d.attr({isTracker:true}).on("mouseover",
                function () {
                    a.onMouseOver();
                    e.onMouseOver()
                }).on("mouseout",
                function () {
                    a.options.stickyTracking ||
                    a.onMouseOut()
                }).css(c)
        })
    }, cleanData:function () {
    }});
    vb.scatter = la;
    la = yb(Ac, {init:function () {
        Ac.prototype.init.apply(this, arguments);
        var a = this, b;
        pa(a, {visible:a.visible !== false, name:C(a.name, "Slice")});
        b = function () {
            a.slice()
        };
        Sa(a, "select", b);
        Sa(a, "unselect", b);
        return a
    }, setVisible:function (a) {
        var b = this.series.chart, c = this.tracker, d = this.dataLabel, e = this.connector, f = this.shadowGroup, g;
        g = (this.visible = a = a === Va ? !this.visible : a) ? "show" : "hide";
        this.group[g]();
        c && c[g]();
        d && d[g]();
        e && e[g]();
        f && f[g]();
        this.legendItem && b.legend.colorizeItem(this, a)
    }, slice:function (a, b, c) {
        var d = this.series.chart, e = this.slicedTranslation;
        ec(c, d);
        C(b, true);
        a = this.sliced = M(a) ? a : !this.sliced;
        a = {translateX:a ? e[0] : d.plotLeft, translateY:a ? e[1] : d.plotTop};
        this.group.animate(a);
        this.shadowGroup && this.shadowGroup.animate(a)
    }});
    la = yb(pb, {type:"pie", isCartesian:false, pointClass:la, pointAttrToOptions:{stroke:"borderColor", "stroke-width":"borderWidth", fill:"color"}, getColor:function () {
        this.initialColor = this.chart.counters.color
    },
        animate:function () {
            var a = this;
            u(a.data, function (b) {
                var c = b.graphic;
                b = b.shapeArgs;
                var d = -cc / 2;
                if (c) {
                    c.attr({r:0, start:d, end:d});
                    c.animate({r:b.r, start:b.start, end:b.end}, a.options.animation)
                }
            });
            a.animate = null
        }, translate:function () {
            var a = 0, b = this, c = -0.25, d = b.options, e = d.slicedOffset, f = e + d.borderWidth, g = d.center.concat([d.size, d.innerSize || 0]), h = b.chart, j = h.plotWidth, l = h.plotHeight, n, J, D, aa = b.data, E = 2 * cc, da, w = qb(j, l), R, B, K, S = d.dataLabels.distance;
            g = mc(g, function (I, za) {
                return(R = /%$/.test(I)) ? [j, l, w, w][za] *
                    ja(I) / 100 : I
            });
            b.getX = function (I, za) {
                D = sa.asin((I - g[1]) / (g[2] / 2 + S));
                return g[0] + (za ? -1 : 1) * nb(D) * (g[2] / 2 + S)
            };
            b.center = g;
            u(aa, function (I) {
                a += I.y
            });
            u(aa, function (I) {
                da = a ? I.y / a : 0;
                n = X(c * E * 1E3) / 1E3;
                c += da;
                J = X(c * E * 1E3) / 1E3;
                I.shapeType = "arc";
                I.shapeArgs = {x:g[0], y:g[1], r:g[2] / 2, innerR:g[3] / 2, start:n, end:J};
                D = (J + n) / 2;
                I.slicedTranslation = mc([nb(D) * e + h.plotLeft, Db(D) * e + h.plotTop], X);
                B = nb(D) * g[2] / 2;
                b.radiusY = K = Db(D) * g[2] / 2;
                I.tooltipPos = [g[0] + B * 0.7, g[1] + K * 0.7];
                I.labelPos = [g[0] + B + nb(D) * S, g[1] + K + Db(D) * S, g[0] + B + nb(D) *
                    f, g[1] + K + Db(D) * f, g[0] + B, g[1] + K, S < 0 ? "center" : D < E / 4 ? "left" : "right", D];
                I.percentage = da * 100;
                I.total = a
            });
            this.setTooltipPoints()
        }, render:function () {
            this.drawPoints();
            this.options.enableMouseTracking !== false && this.drawTracker();
            this.drawDataLabels();
            this.options.animation && this.animate && this.animate();
            this.isDirty = false
        }, drawPoints:function () {
            var a = this.chart, b = a.renderer, c, d, e, f = this.options.shadow, g, h;
            u(this.data, function (j) {
                d = j.graphic;
                h = j.shapeArgs;
                e = j.group;
                g = j.shadowGroup;
                if (f && !g)g = j.shadowGroup =
                    b.g("shadow").attr({zIndex:4}).add();
                if (!e)e = j.group = b.g("point").attr({zIndex:5}).add();
                c = j.sliced ? j.slicedTranslation : [a.plotLeft, a.plotTop];
                e.translate(c[0], c[1]);
                g && g.translate(c[0], c[1]);
                if (d)d.animate(h); else j.graphic = b.arc(h).attr(pa(j.pointAttr[hb], {"stroke-linejoin":"round"})).add(j.group).shadow(f, g);
                j.visible === false && j.setVisible(false)
            })
        }, drawDataLabels:function () {
            var a = this.data, b, c = this.chart, d = this.options.dataLabels, e = C(d.connectorPadding, 10), f = C(d.connectorWidth, 1), g, h, j = d.distance,
                l = this.radiusY, n = j > 0, J = this.center[1], D = [
                [],
                []
            ], aa, E, da, w, R = 2, B;
            if (d.enabled) {
                pb.prototype.drawDataLabels.apply(this);
                u(a, function (gb) {
                    D[gb.labelPos[7] < cc / 2 ? 0 : 1].push(gb)
                });
                D[1].reverse();
                w = function (gb, wb) {
                    return wb.y - gb.y
                };
                for (a = D[0][0] && D[0][0].dataLabel && ja(D[0][0].dataLabel.styles.lineHeight); R--;) {
                    var K = [], S = [], I = D[R], za = I.length, Da;
                    for (B = J + l - j; B <= J - l + j; B += a)K.push(B);
                    da = K.length;
                    if (za > da) {
                        h = [].concat(I);
                        h.sort(w);
                        for (B = za; B--;)h[B].rank = B;
                        for (B = za; B--;)I[B].rank >= da && I.splice(B, 1);
                        za = I.length
                    }
                    for (B =
                             0; B < za; B++) {
                        b = I[B];
                        h = b.labelPos;
                        b = 9999;
                        for (E = 0; E < da; E++) {
                            g = $a(K[E] - h[1]);
                            if (g < b) {
                                b = g;
                                Da = E
                            }
                        }
                        if (Da < B && K[B] !== null)Da = B; else if (da < za - B + Da && K[B] !== null)Da = da - za + B; else for (; K[Da] === null;)Da++;
                        S.push({i:Da, y:K[Da]});
                        K[Da] = null
                    }
                    S.sort(w);
                    for (B = 0; B < za; B++) {
                        b = I[B];
                        h = b.labelPos;
                        g = b.dataLabel;
                        E = S.pop();
                        aa = h[1];
                        da = b.visible === false ? ub : Ab;
                        Da = E.i;
                        E = E.y;
                        if (aa > E && K[Da + 1] !== null || aa < E && K[Da - 1] !== null)E = aa;
                        aa = this.getX(E, R);
                        g.attr({visibility:da, align:h[6]})[g.moved ? "animate" : "attr"]({x:aa + d.x + ({left:e, right:-e}[h[6]] ||
                            0), y:E + d.y});
                        g.moved = true;
                        if (n && f) {
                            g = b.connector;
                            h = [ab, aa + (h[6] === "left" ? 5 : -5), E, La, aa, E, La, h[2], h[3], La, h[4], h[5]];
                            if (g) {
                                g.animate({d:h});
                                g.attr("visibility", da)
                            } else b.connector = g = this.chart.renderer.path(h).attr({"stroke-width":f, stroke:d.connectorColor || "#606060", visibility:da, zIndex:3}).translate(c.plotLeft, c.plotTop).add()
                        }
                    }
                }
            }
        }, drawTracker:ad.prototype.drawTracker, getSymbol:function () {
        }});
    vb.pie = la;
    cb.Highcharts = {Chart:Gd, dateFormat:Nc, pathAnim:$c, getOptions:function () {
        return Wa
    }, numberFormat:zd,
        Point:Ac, Color:Yb, Renderer:Wc, seriesTypes:vb, setOptions:function (a) {
            Wa = va(Wa, a);
            Bd();
            return Wa
        }, Series:pb, addEvent:Sa, createElement:ib, discardElement:Gc, css:Na, each:u, extend:pa, map:mc, merge:va, pick:C, extendClass:yb, product:"Highcharts", version:"2.1.6"}
})();
