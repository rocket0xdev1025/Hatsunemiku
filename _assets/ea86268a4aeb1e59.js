(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [41990],
  {
    /***/ 796909: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(905716);
      __web_req__(131662);
      self._5f74ec40302898c5a55451c9fbd04240 =
        self._5f74ec40302898c5a55451c9fbd04240 || {};
      (function (__c) {
        var E = __c.E;
        var y = __c.y;
        var kqc = function (a, b) {
            var c = __c.Bo(b);
            a = a.Nd.ara(b);
            b = c.pa;
            const d = c.br;
            c = c.br;
            try {
              a.Qg(b, d, c, !0, !1);
            } finally {
              a.destroy();
            }
          },
          mqc = function (a, b, c, d) {
            c = new lqc(c, d);
            y(a.count() === 1, "Only single widget root element is supported");
            a = a.first();
            y(
              a != null && a.type === "layout",
              `Unexpected widget root found: ${
                a === null || a === void 0 ? void 0 : a.type
              }`
            );
            c.Wla(a, b);
          },
          oqc = function (a) {
            return {
              ...__c.hR,
              ...m6,
              top: 0,
              left: 0,
              width: a.width,
              height: a.height,
              viewBox: {
                top: 0,
                left: 0,
                width: a.Qla.width,
                height: a.Qla.height,
              },
              fb: a.fb.map(nqc),
            };
          },
          pqc = function (a) {
            switch (a.yD) {
              case 0:
                var b = __c.Ji.xb().attrs({
                  "font-size": a.fontSize,
                  leading: a.lineHeight ? a.lineHeight * 1e3 : void 0,
                  "text-align": a.textAlign || "start",
                  "font-weight": a.fontWeight,
                  "font-family": a.fontFamily,
                  "font-kerning": "normal",
                  "font-feature-liga": "on",
                  "font-feature-clig": "on",
                  "font-feature-calt": "on",
                  direction: a.direction,
                });
                a.color && b.Ee("color", a.color);
                b = b
                  .kb(a.text.endsWith("\n") ? a.text : `${a.text}\n`)
                  .build();
                var c;
                return {
                  ...__c.$F,
                  ...n6,
                  ...m6,
                  ya: (c = a.ya) !== null && c !== void 0 ? c : 0,
                  text: b,
                  ff: 2,
                };
              case 1:
                return (
                  (b = a.text), { ...__c.$F, ...n6, ...m6, text: b, ff: 2 }
                );
              default:
                throw new E(a);
            }
          },
          r6 = function ({ content: a, fill: b, border: c, S: d }) {
            b = { ...__c.Sxb, fill: o6(b), border: p6(c), S: q6(d) };
            switch (a.type) {
              case "shape":
                return { ...b, element: oqc(a) };
              case "text":
                return { ...b, element: pqc(a) };
              case "layout":
                return { ...b, element: qqc(a) };
              default:
                throw new E(a);
            }
          },
          qqc = function ({
            cells: a,
            border: b,
            fill: c,
            S: d,
            gridTemplateColumns: e,
            gridTemplateRows: f,
            columnGap: g,
            rowGap: h,
          }) {
            return {
              ...__c.Txb,
              ...n6,
              ...m6,
              L: n6.width,
              W: n6.height,
              fill: o6(c),
              border: p6(b),
              direction: 1,
              S: q6(d),
              cells: new Map(a.map((k) => [k.id, r6(k)])),
              behavior: {
                rules: [
                  {
                    Yg: void 0,
                    grid: {
                      gridTemplateColumns: e,
                      gridTemplateRows: f,
                      columnGap: g !== null && g !== void 0 ? g : 0,
                      rowGap: h !== null && h !== void 0 ? h : 0,
                      nh: rqc(a),
                    },
                  },
                ],
              },
              Lc: void 0,
            };
          },
          rqc = function (a) {
            return new Map(a.map((b) => [b.id, sqc(b)]));
          },
          sqc = function (a) {
            const b = a.placement.padding;
            return {
              ...__c.FCa,
              ...a.placement,
              alignSelf: "center",
              padding: {
                ...__c.fR,
                ...(b != null ? (typeof b === "number" ? { all: b } : b) : {}),
              },
            };
          },
          p6 = function (a) {
            var b;
            const c =
              (b = a === null || a === void 0 ? void 0 : a.color) !== null &&
              b !== void 0
                ? b
                : "#000000";
            var d;
            return {
              ...__c.xw,
              all: a
                ? {
                    ...__c.VQ,
                    weight: (d = a.weight) !== null && d !== void 0 ? d : 1,
                    color: c,
                    te: !0,
                  }
                : void 0,
            };
          },
          q6 = function (a) {
            return {
              ...__c.eR,
              ...(a != null ? (typeof a === "number" ? { all: a } : a) : {}),
            };
          },
          nqc = function (a) {
            return { ...__c.iR, ...a, fill: o6(a.fill), stroke: tqc(a.stroke) };
          },
          tqc = function (a) {
            return a ? { ...__c.VQ, color: a.color, weight: a.weight } : void 0;
          },
          o6 = function (a) {
            var b;
            const c = {
              ...__c.OC,
              ya:
                (b = a === null || a === void 0 ? void 0 : a.ya) !== null &&
                b !== void 0
                  ? b
                  : 0,
            };
            switch (a === null || a === void 0 ? void 0 : a.type) {
              case "color":
                return { ...c, color: a.color };
              case "gradient":
                return { ...c, Ta: a.Ta };
              case void 0:
                return c;
              default:
                throw new E(a);
            }
          },
          zqc = function (a, b) {
            const c = new Map(b.cells.map((e) => [e.id, e]));
            uqc(
              a.cells,
              c,
              (e, f) => {
                let g = !1;
                vqc(e.element, f.content, () => {
                  a.cells.delete(f.id);
                  a.cells.set(f.id, r6(f));
                  g = !0;
                });
                g ||
                  (s6(e.fill, f.fill), wqc(e.border, f.border), xqc(e.S, f.S));
              },
              (e) => r6(e)
            );
            yqc(a.behavior, b, c);
            s6(a.fill, b.fill);
            xqc(a.S, b.S);
            wqc(a.border, b.border);
            var d;
            a.ya = (d = b.ya) !== null && d !== void 0 ? d : 0;
          },
          yqc = function (a, b, c) {
            t6(
              a.rules,
              [b],
              (d) => {
                Aqc(d.grid.gridTemplateColumns, b.gridTemplateColumns) ||
                  (d.grid.gridTemplateColumns = b.gridTemplateColumns);
                Aqc(d.grid.gridTemplateRows, b.gridTemplateRows) ||
                  (d.grid.gridTemplateRows = b.gridTemplateRows);
                var e;
                d.grid.columnGap =
                  (e = b.columnGap) !== null && e !== void 0 ? e : 0;
                var f;
                d.grid.rowGap = (f = b.rowGap) !== null && f !== void 0 ? f : 0;
                uqc(
                  d.grid.nh,
                  c,
                  (g, h) => {
                    const k = h.placement.padding,
                      l = h.placement.gridColumnEnd,
                      m = h.placement.gridRowStart,
                      n = h.placement.gridRowEnd,
                      p = h.placement.alignSelf;
                    g.gridColumnStart = h.placement.gridColumnStart;
                    g.gridColumnEnd = l;
                    g.gridRowStart = m;
                    g.gridRowEnd = n;
                    typeof k === "number" && g.padding.all !== k
                      ? (g.padding.all = k)
                      : typeof k !== "number" &&
                        ((g.padding.qa =
                          k === null || k === void 0 ? void 0 : k.qa),
                        (g.padding.Da =
                          k === null || k === void 0 ? void 0 : k.Da),
                        (g.padding.ra =
                          k === null || k === void 0 ? void 0 : k.ra),
                        (g.padding.Ka =
                          k === null || k === void 0 ? void 0 : k.Ka));
                    g.alignSelf = p;
                  },
                  (g) => sqc(g)
                );
              },
              (d) => {
                var e, f;
                return {
                  Yg: void 0,
                  grid: {
                    gridTemplateColumns: b.gridTemplateColumns,
                    gridTemplateRows: b.gridTemplateRows,
                    columnGap:
                      (e = b.columnGap) !== null && e !== void 0 ? e : 0,
                    rowGap: (f = b.rowGap) !== null && f !== void 0 ? f : 0,
                    nh: rqc(d.cells),
                  },
                };
              }
            );
          },
          Bqc = function (a, b) {
            t6(
              a.fb,
              b.fb,
              (e, f) => {
                e.d = f.d;
                s6(e.fill, f.fill);
                e.stroke.ref && f.stroke
                  ? ((e = e.stroke.ref),
                    (f = f.stroke),
                    (e.color = f.color),
                    (e.weight = f.weight))
                  : e.stroke.set(tqc(f.stroke));
              },
              (e) => nqc(e)
            );
            const { viewBox: c, width: d } = oqc(b);
            a.width = d;
            __c.Bo(a.viewBox).equals(__c.Bo(c)) || (a.viewBox = c);
          },
          vqc = function (a, b, c) {
            switch (b.type) {
              case "shape":
                a.type === "shape" ? Bqc(a, b) : c();
                break;
              case "text":
                (a.type === "text" &&
                  __c.Ji.domain.Qb(__c.Ji.snapshot(a.text), pqc(b).text)) ||
                  c();
                break;
              case "layout":
                a.type === "layout" ? zqc(a, b) : c();
                break;
              default:
                throw new E(b);
            }
          },
          uqc = function (a, b, c, d) {
            const e = new Set(a.keys());
            for (const [f, g] of b)
              (b = a.get(f)) ? (e.delete(f), c(b, g)) : a.set(f, d(g));
            e.forEach((f) => a.delete(f));
          },
          t6 = function (a, b, c, d) {
            const e = a.toArray();
            for (let f = 0; f < Math.max(e.length, b.length); f++)
              if (f < e.length && f < b.length) c(e[f], b[f]);
              else if (f < e.length && f >= b.length) a.delete(e[f]);
              else if (f >= e.length && f < b.length) {
                const g = d(b[f]);
                a.append(g);
              }
          },
          s6 = function (a, b) {
            switch (b === null || b === void 0 ? void 0 : b.type) {
              case "color":
                a.color = b.color;
                a.Ta.set(void 0);
                var c;
                a.ya = (c = b.ya) !== null && c !== void 0 ? c : 0;
                break;
              case "gradient":
                if (a.Ta.ref && __c.ucb.domain.Qb(a.Ta.ref, b.Ta)) break;
                a.color = void 0;
                a.Ta.set(b.Ta);
                var d;
                a.ya = (d = b.ya) !== null && d !== void 0 ? d : 0;
                break;
              default:
                (a.color = void 0), a.Ta.set(void 0);
            }
          },
          xqc = function (a, b) {
            b = q6(b);
            a.all = b.all;
            a.gB = b.gB;
            a.eB = b.eB;
            a.fB = b.fB;
            a.dB = b.dB;
          },
          wqc = function (a, b) {
            b = p6(b).all;
            var c;
            if ((c = b))
              (c = a.all.ref),
                (c = !(c && b
                  ? __c.yw.domain.Qb(__c.yw.snapshot(c), b)
                  : !c && !b));
            c && a.all.set(b);
          },
          Aqc = function (a, b) {
            return a.length === b.length && a.every((c) => b.includes(c));
          },
          Dqc = function (a, b, c, d) {
            let e = a.h2a.get(b);
            if (e) return e;
            e = {
              Cy: new Cqc(c.Br, b, d, c.yva),
              ELa: void 0,
              XWa: void 0,
              WYa: __c.$V.mode,
            };
            a.h2a.set(b, e);
            return e;
          },
          Fqc = function (a, b, c, d, e) {
            var f, g;
            e = Dqc(a, c, b, e);
            const h = e.Cy,
              k = e.XWa,
              l = e.ELa,
              m = e.WYa;
            c = __c.mQ.snapshot(c);
            const n =
              ((f = (g = a.IA).Fua) === null || f === void 0
                ? void 0
                : f.call(g, d)) || __c.$V;
            (h.ik === k && Eqc.structural(c, l) && n.mode === m) ||
              ((e.ELa = c),
              (e.XWa = h.ik),
              (e.WYa = n.mode),
              (b = b.render(h, n)),
              a.ltb.update(d, b),
              mqc(
                d,
                b,
                (p, q) => a.MR.Ova.set(p, q),
                (p, q, r) => a.MR.refs.set(p, { ref: q, key: r })
              ));
          },
          Iqc = function (a, b) {
            const c = [],
              d = () => c.forEach((e) => e());
            c.push(a.eub());
            c.push(
              Gqc(
                () => {
                  a: {
                    var e = new Hqc();
                    for (const f of b)
                      if ((e.PR(f), e.Ata)) {
                        e = e.Ata;
                        break a;
                      }
                    e = void 0;
                  }
                  return e && (a.dc.isLoaded(e) || a.Lwa.has(e));
                },
                (e) => {
                  if (e) {
                    for (const f of b) y(f.type === "layout"), kqc(a.$k, f);
                    d();
                  }
                }
              )
            );
            return d;
          },
          Jqc = function (a, b) {
            return {
              ew: ({ Wd: c }) => {
                var d;
                const { Cy: e } = Dqc(a.renderer, c, b, a.fW),
                  f = __c.lub.create([]),
                  g = [];
                g.push(Iqc(a.plb, f));
                g.push(
                  Gqc(
                    () => {
                      var k, l;
                      return [
                        (k = (l = a.IA).Fua) === null || k === void 0
                          ? void 0
                          : k.call(l, f),
                        __c.mQ.snapshot(c),
                        e.ik,
                      ];
                    },
                    () => {
                      Fqc(a.renderer, b, c, f, a.fW);
                    },
                    { fireImmediately: !0, equals: Eqc.structural }
                  )
                );
                const h =
                  (d = b.vya) === null || d === void 0
                    ? void 0
                    : d.call(b, { Cy: e });
                h && g.push(h);
                return {
                  La: f,
                  Eo: () => {
                    g.forEach((k) => k());
                  },
                };
              },
            };
          },
          u6 = __webpack_require__(400770),
          Eqc = u6.comparer,
          Kqc = u6.computed,
          v6 = u6.observable,
          Gqc = u6.reaction,
          Lqc = u6.runInAction;
        var Mqc = class {
          static D(a) {
            __c.O(a, { Xvb: v6.ref, Jmb: v6.ref });
          }
          constructor() {
            this.Fua = (Mqc.D(this), void 0);
          }
        };
        var Nqc = class {
            constructor() {
              this.sources = new WeakMap();
            }
          },
          Cqc = class {
            static D(a) {
              __c.O(a, { Xe: Kqc });
            }
            get YWa() {
              var a = this.fW,
                b = this.Wd,
                c = this.yva;
              let d = a.sources.get(b);
              d || ((d = v6.box(c)), a.sources.set(b, d));
              return d;
            }
            get ik() {
              return this.YWa.get();
            }
            get Xe() {
              return this.Br.Ft({ type: "dict", value: this.Wd });
            }
            Em(a) {
              this.YWa.set(
                a instanceof Function
                  ? { ...this.ik, ...a() }
                  : { ...this.ik, ...a }
              );
            }
            constructor(a, b, c, d) {
              this.Br = a;
              this.Wd = b;
              this.fW = c;
              this.yva = d;
              Cqc.D(this);
            }
          };
        var lqc = class {
          Y8(a, b) {
            this.W1a(a, b);
            b.ref && this.WAa(a, b.ref, b.key);
          }
          cZ(a, b) {
            b.ref && this.WAa(a.text, b.ref, b.key);
          }
          oIa(a, b) {
            switch (b.content.type) {
              case "shape":
                y(a.element.type === "shape");
                this.Y8(a.element, b.content);
                break;
              case "text":
                y(a.element.type === "text");
                this.cZ(a.element, b.content);
                break;
              case "layout":
                y(a.element.type === "layout");
                this.Wla(a.element, b.content);
                break;
              default:
                throw new E(b.content);
            }
          }
          Wla(a, b) {
            this.W1a(a, b);
            b.ref && this.WAa(a, b.ref, b.key);
            for (const [c, d] of a.cells)
              (a = b.cells.find((e) => e.id === c)),
                y(!!d && !!a),
                this.oIa(d, a);
          }
          constructor(a, b) {
            this.W1a = a;
            this.WAa = b;
          }
        };
        var m6 = { locked: !0, Uh: __c.hga, xh: !0 },
          n6 = { top: 0, left: 0, width: 1, height: 1 };
        var Oqc = class {
          constructor(a) {
            this.$k = a;
            this.update = (b, c) => {
              t6(
                b,
                [c],
                (d, e) => {
                  switch (d.type) {
                    case "layout":
                      zqc(d, e);
                      break;
                    default:
                      throw Error(`Not supported element type: ${d.type}`);
                  }
                },
                (d) => {
                  a: switch (d.type) {
                    case "layout":
                      d = {
                        ...qqc(d),
                        ...m6,
                        width: d.minWidth,
                        height: d.minHeight,
                        L: d.minWidth,
                        W: d.minHeight,
                      };
                      break a;
                    default:
                      throw new E(d.type);
                  }
                  return d;
                }
              );
              for (const d of b)
                y(d.type === "layout"),
                  (d.width = c.minWidth),
                  (d.height = c.minHeight),
                  (d.L = c.minWidth),
                  (d.W = c.minHeight),
                  c.direction && (d.direction = c.direction),
                  kqc(this.$k, d);
            };
          }
        };
        var Pqc = class {
          constructor(a, b, c) {
            this.ltb = a;
            this.MR = b;
            this.IA = c;
            this.h2a = new WeakMap();
          }
        };
        var Qqc = class {
            static D(a) {
              __c.O(a, { Lwa: v6.shallow });
            }
            constructor(a, b) {
              this.dc = a;
              this.$k = b;
              this.Lwa = (Qqc.D(this), new Set());
              this.Lta = new Set();
              this.eub = () => {
                this.kda ||
                  (this.kda = __c.Gma(this.dc).subscribe((d) => {
                    Lqc(() => {
                      this.Lwa.add(d.id);
                    });
                  }));
                const c = Symbol();
                this.Lta.add(c);
                return () => {
                  this.Lta.delete(c);
                  this.Lta.size <= 0 &&
                    this.kda &&
                    (this.kda.unsubscribe(), (this.kda = void 0));
                };
              };
            }
          },
          Hqc = class extends __c.Gn {
            PR(a, b) {
              this.Ata || super.PR(a, b);
            }
            cZ(a) {
              this.Ata =
                (a = a.text
                  .sh("font-family")
                  ["font-family"].values()
                  .next().value) && __c.ym(a).id;
            }
          };
        var Rqc = !1,
          Sqc = class {
            register(a, b) {
              this.zE.has(a) ||
                (this.zE.set(a, b),
                this.Oba || Rqc || (__c.nQ.set(a, Jqc(this, b)), (Rqc = !0)));
            }
            get(a) {
              return this.zE.get(a);
            }
            constructor(a, b, c, d, e, f = __c.kn("f576b13d", !1)) {
              this.renderer = a;
              this.fW = b;
              this.IA = c;
              this.dc = d;
              this.$k = e;
              this.Oba = f;
              this.zE = new Map();
              this.plb = new Qqc(this.dc, this.$k);
            }
          };
        var Tqc = class {
            constructor() {
              this.Ova = new __c.vy();
              this.refs = new __c.vy();
            }
          },
          Uqc = class {
            getContext(a) {
              return this.MR.refs.get(a);
            }
            mO(a) {
              return this.MR.Ova.get(a);
            }
            constructor(a, b, c) {
              this.MR = a;
              this.fW = b;
              this.renderer = c;
            }
          };
        __c.iQa = {
          epb: function (a) {
            const b = new Mqc(),
              c = new Tqc(),
              d = new Pqc(new Oqc(a.$k), c, b),
              e = new Nqc();
            a = new Sqc(d, e, b, a.dc, a.$k, a.Oba);
            return { IA: b, KYb: new Uqc(c, e, d), a9: a, MR: c };
          },
        };
      }.call(self, self._5f74ec40302898c5a55451c9fbd04240));
    },
  },
]);
//# sourceMappingURL=sourcemaps/ea86268a4aeb1e59.js.map
