(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [5936],
  {
    /***/ 623741: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(905716);
      self._5f74ec40302898c5a55451c9fbd04240 =
        self._5f74ec40302898c5a55451c9fbd04240 || {};
      (function (__c) {
        var PA = __c.PA;
        var qc = __c.qc;
        var O = __c.O;
        var Bo = __c.Bo;
        var tr = __c.tr;
        var N = __c.N;
        var bo = __c.bo;
        var z = __c.z;
        var E = __c.E;
        var B5 = function (a, b) {
            switch (b.reference.type) {
              case 0:
                const c = a.DT(b.reference.wi);
                a = a.wX(b.reference.Hi);
                return c != null && a != null;
              case 1:
                return a.DT(b.reference.wi) != null;
              case 2:
                return a.wX(b.reference.Hi) != null;
              case 3:
                return !1;
              default:
                throw new E(b.reference);
            }
          },
          moc = function (a, b, c) {
            switch (c.type) {
              case "invalid":
                return !1;
              case "canonical":
                if (c.ba.length > 0) return !1;
                a = a.pG(c.D_.slice(1).trim());
                return a.result !== "success"
                  ? !1
                  : __c.mw(new __c.pw(), a.uI).filter((d) => {
                      switch (d.type) {
                        case 0:
                          return B5(b, d);
                        case 1:
                          return B5(b, d.start) && B5(b, d.end);
                        default:
                          throw new E(d);
                      }
                    }).length > 0;
              default:
                throw new E(c);
            }
          },
          noc = function (a, b, c, d) {
            const e = [];
            for (const k of c)
              for (const l of d) {
                c = k.oa;
                var f = l.column,
                  g = a.layout.cells.get(c, f);
                if (
                  !g ||
                  (k.boundary === "start" ? g.span.ac === c : g.span.gd === c)
                )
                  if (
                    ((c = b.get(`${f.id}:${c.id}`)),
                    (c =
                      k.boundary === "start"
                        ? c === null || c === void 0
                          ? void 0
                          : c.qa
                        : c === null || c === void 0
                        ? void 0
                        : c.Da))
                  ) {
                    g = e[e.length - 1];
                    f = (f = a.layout.cols.next(f))
                      ? { column: f, boundary: "start" }
                      : { column: z(a.layout.cols.last()), boundary: "end" };
                    var h;
                    if ((h = g))
                      (h = g.$sa),
                        (h =
                          h.column === l.column && h.boundary === l.boundary);
                    h &&
                      ((h = g.O2a),
                      (h = h.oa === k.oa && h.boundary === k.boundary));
                    h &&
                    g.color === c.color &&
                    g.weight === c.weight &&
                    g.Tc === c.Tc &&
                    g.Tc === 0
                      ? (g.$sa = f)
                      : e.push({
                          O2a: k,
                          vBb: l,
                          $sa: f,
                          color: c.color,
                          weight: c.weight,
                          Tc: c.Tc,
                        });
                  }
              }
            return e;
          },
          ooc = function (a, b, c, d, e) {
            const f = [];
            for (const l of d)
              for (const m of c) {
                var g = m.oa,
                  h = l.column;
                d = a.layout.cells.get(g, h);
                if (
                  !d ||
                  (l.boundary === "start" ? d.span.Wb === h : d.span.Pc === h)
                )
                  if (
                    ((d = b.get(`${h.id}:${g.id}`)),
                    (d =
                      l.boundary === "start"
                        ? d === null || d === void 0
                          ? void 0
                          : d.ra
                        : d === null || d === void 0
                        ? void 0
                        : d.Ka) &&
                      (l.boundary !== "start" || e(g, h) !== 1))
                  ) {
                    h = f[f.length - 1];
                    g = (g = a.layout.rows.next(g))
                      ? { oa: g, boundary: "start" }
                      : { oa: z(a.layout.rows.last()), boundary: "end" };
                    var k;
                    if ((k = h))
                      (k = h.BNa),
                        (k =
                          k.column === l.column && k.boundary === l.boundary);
                    k &&
                      ((k = h.dta),
                      (k = k.oa === m.oa && k.boundary === m.boundary));
                    k &&
                    h.color === d.color &&
                    h.weight === d.weight &&
                    h.Tc === d.Tc &&
                    h.Tc === 0
                      ? (h.dta = g)
                      : f.push({
                          BNa: l,
                          GBb: m,
                          dta: g,
                          color: d.color,
                          weight: d.weight,
                          Tc: d.Tc,
                        });
                  }
              }
            return f;
          },
          poc = function (a, b, c, d, e) {
            const f = a.w5a.Hgb(c, b.layout.rows.last(), b.layout.cols.last());
            a = (q, r) => {
              const t = f.get(q) || 0,
                u = f.get(r) || 0;
              return t <= u ? q : r;
            };
            const g = new Map();
            if (d.length === 0 || e.length === 0) return g;
            var h = [],
              k = b.layout.cols.previous(e[0].column);
            k && h.push({ column: k, boundary: "start" });
            h.push(...e);
            (e = b.layout.cols.next(e[e.length - 1].column)) &&
              h.push({ column: e, boundary: "start" });
            e = [];
            (k = b.layout.rows.previous(d[0].oa)) &&
              e.push({ oa: k, boundary: "start" });
            e.push(...d);
            (d = b.layout.rows.next(d[d.length - 1].oa)) &&
              e.push({ oa: d, boundary: "start" });
            for (const q of h) {
              h = (d = q.boundary === "start" ? q.column : void 0)
                ? b.layout.cols.previous(d)
                : b.layout.cols.last();
              for (const r of e) {
                var l = r.boundary === "start" ? r.oa : void 0;
                k = l ? b.layout.rows.previous(l) : b.layout.rows.last();
                var m = d && l && c.get(`${d.id}:${l.id}`),
                  n = d && k && c.get(`${d.id}:${k.id}`);
                l = h && l && c.get(`${h.id}:${l.id}`);
                var p = h && k && c.get(`${h.id}:${k.id}`);
                k =
                  q.boundary === "end"
                    ? l === null || l === void 0
                      ? void 0
                      : l.Ka
                    : m === null || m === void 0
                    ? void 0
                    : m.ra;
                m =
                  r.boundary === "end"
                    ? n === null || n === void 0
                      ? void 0
                      : n.Da
                    : m === null || m === void 0
                    ? void 0
                    : m.qa;
                n =
                  q.boundary === "end"
                    ? p === null || p === void 0
                      ? void 0
                      : p.Ka
                    : n === null || n === void 0
                    ? void 0
                    : n.ra;
                l =
                  r.boundary === "end"
                    ? p === null || p === void 0
                      ? void 0
                      : p.Da
                    : l === null || l === void 0
                    ? void 0
                    : l.qa;
                p = __c.Fwa({ qa: n, Da: k, ra: l, Ka: m }, a);
                let t;
                switch (p) {
                  case "blockStart":
                    t = n;
                    break;
                  case "blockEnd":
                    t = k;
                    break;
                  case "inlineStart":
                    t = l;
                    break;
                  case "inlineEnd":
                    t = m;
                    break;
                  default:
                    t = void 0;
                }
                const { height: u, width: v } =
                  (t === null || t === void 0 ? void 0 : t.Tc) === 1
                    ? { height: t.weight, width: t.weight }
                    : {
                        height: Math.max(
                          (l === null || l === void 0 ? void 0 : l.weight) || 0,
                          (m === null || m === void 0 ? void 0 : m.weight) || 0
                        ),
                        width: Math.max(
                          (n === null || n === void 0 ? void 0 : n.weight) || 0,
                          (k === null || k === void 0 ? void 0 : k.weight) || 0
                        ),
                      };
                g.set(C5(q, r), __c.Ct(p, u / 2, v / 2));
              }
            }
            return g;
          },
          qoc = function (a, b, c, d, e, f) {
            if (d.length === 0 || e.length === 0) return [];
            const g = noc(b, c, d, e);
            f = ooc(b, c, d, e, f);
            const h = poc(a, b, c, d, e),
              k = a.Umb(b),
              l = a.kmb(b),
              m = b.direction === "rtl";
            a = g
              .map((n) => {
                var p,
                  q,
                  r = n.vBb,
                  t = n.$sa,
                  u = n.O2a;
                const v = n.color,
                  x = n.weight;
                n = n.Tc;
                const A = m ? -1 : 1,
                  B =
                    (p = h.get(C5(r, u))) === null || p === void 0
                      ? void 0
                      : p.Ka;
                p =
                  (q = h.get(C5(t, u))) === null || q === void 0
                    ? void 0
                    : q.ra;
                if (B != null && p != null) {
                  q = z(k.get(u.oa));
                  var C = z(l.get(r.column));
                  r = z(l.get(t.column));
                  u = u.boundary === "start" ? q.start : q.end;
                  q = C.start;
                  t = t.boundary === "start" ? r.start : r.end;
                  return {
                    color: v,
                    weight: x,
                    Tc: n,
                    p1: new bo(q + B * A, u),
                    p2: new bo(t + p * A, u),
                    ...__c.Ht((t - q) * A, n * x, B),
                  };
                }
              })
              .filter(__c.rb);
            return [
              ...f
                .map((n) => {
                  var p,
                    q,
                    r = n.BNa,
                    t = n.GBb,
                    u = n.dta;
                  const v = n.color,
                    x = n.weight;
                  n = n.Tc;
                  const A =
                    (p = h.get(C5(r, t))) === null || p === void 0
                      ? void 0
                      : p.Da;
                  p =
                    (q = h.get(C5(r, u))) === null || q === void 0
                      ? void 0
                      : q.qa;
                  if (A != null && p != null) {
                    q = z(l.get(r.column));
                    var B = z(k.get(t.oa));
                    t = z(k.get(u.oa));
                    r = r.boundary === "start" ? q.start : q.end;
                    q = B.start;
                    u = u.boundary === "start" ? t.start : t.end;
                    return {
                      color: v,
                      weight: x,
                      Tc: n,
                      p1: new bo(r, q + A),
                      p2: new bo(r, u + p),
                      ...__c.Ht(u - q, n * x, A),
                    };
                  }
                })
                .filter(__c.rb),
              ...a,
            ];
          },
          roc = function (a) {
            const b = [];
            a = a.filter((c) => c.weight !== 0 && c.color != null);
            a = __c.hm(a, (c) => c.weight);
            a = Array.from(a.entries()).sort(([c], [d]) => c - d);
            for (const [c, d] of a) {
              a = __c.hm(d, (e) => `${e.Jk}_${e.Kk}`);
              for (const [, e] of a) {
                const { Kk: f, Jk: g } = e[0];
                a = __c.hm(e, (h) => h.color);
                for (const [h, k] of a)
                  b.push({ weight: c, color: h, lines: k, Jk: g, Kk: f });
              }
            }
            return b;
          },
          soc = function (a, b, c, d) {
            var e = __c.uSb;
            const f = b.get().flatMap((k) =>
                a.layout.rows.last() === k
                  ? [
                      { oa: k, boundary: "start" },
                      { oa: k, boundary: "end" },
                    ]
                  : [{ oa: k, boundary: "start" }]
              ),
              g = c.get().flatMap((k) =>
                a.layout.cols.last() === k
                  ? [
                      { column: k, boundary: "start" },
                      { column: k, boundary: "end" },
                    ]
                  : [{ column: k, boundary: "start" }]
              ),
              h = new Map();
            for (const k of b.get())
              for (const l of c.get())
                (b = l && k ? e.w5a.Syb(a, l, k) : void 0),
                  b && h.set(`${l.id}:${k.id}`, b);
            c = qoc(e, a, h, f, g, d);
            return roc(c);
          },
          toc = function (a) {
            switch (a) {
              case 2:
                return N("ibdecg");
              case 7:
                return N("446quA");
              case 5:
                return N("j1fbqg");
              case 1:
                return N("O5i4AQ");
              case 6:
                return N("C0VHsg");
              case 4:
                return N("9ND0kg");
              case -1:
                return N("RWqnLA");
              case 9:
                return N("nQR/7w");
              case -2:
                return N("P23rtA");
              case 3:
                return N("+IXmVg");
              default:
                throw new E(a);
            }
          },
          D5 = function () {
            const [a] = (0, __c.mb)(() => tr());
            return a;
          },
          uoc = function (a, b, c) {
            const d = [a];
            for (; a != null && a !== b; ) (a = c.next(a)) && d.push(a);
            return d;
          },
          voc = function (a) {
            const b =
                a.direction === "rtl"
                  ? -(0, __c.xSb)(a) / 2
                  : -(0, __c.vSb)(a) / 2,
              c = -(0, __c.wSb)(a) / 2,
              d = a.width + (0, __c.vSb)(a) / 2 + (0, __c.xSb)(a) / 2;
            a = a.height + (0, __c.wSb)(a) / 2 + (0, __c.ySb)(a) / 2;
            return Bo({
              top: 0,
              left: 0,
              width: d,
              height: a,
              rotation: 0,
            }).translate(b, c);
          },
          E5 = function (a) {
            return (b) => ({ type: "react", node: (0, __c.K)(a, { ...b }) });
          },
          xoc = function (a) {
            var b;
            const c = a.iA;
            var d = a.content;
            const e = a.context;
            a = a.Qp;
            __c.y(
              (d === null || d === void 0
                ? void 0
                : (b = d.yg) === null || b === void 0
                ? void 0
                : b.type) === "formula"
            );
            b = d.Yi;
            const f = { type: "dom", render: (h) => (h.innerText = "") };
            switch (b.type) {
              case 9:
                d = f;
                break;
              case 6:
                var g;
                d =
                  (g = c.mna) === null || g === void 0
                    ? void 0
                    : g.call(c, {
                        content: __c.Gdb.VT({ ...__c.Uxb, value: b.value }),
                        context: e,
                        Qp: a,
                      });
                break;
              case 1:
              case 3:
              case 4:
              case 2:
              case 7:
              case 8:
                d = woc(c, e, d.VA, d.Yi.type);
                break;
              case 0:
                d = {
                  type: "react",
                  node: F5(__c.FS, {
                    label: toc(b.error),
                    children: F5(__c.Ss, {
                      width: "full",
                      display: "flex",
                      justifyContent: "center",
                      children: F5(__c.C2b, { tone: "critical" }),
                    }),
                  }),
                };
                break;
              default:
                throw new E(b);
            }
            return d !== null && d !== void 0 ? d : f;
          },
          woc = function (a, b, c, d) {
            var e;
            return (e = a.pna) === null || e === void 0
              ? void 0
              : e.call(a, { context: b, value: c, valueType: d });
          },
          Boc = function (a) {
            const b = a.iA,
              c = a.vf,
              d = a.qCb,
              e = a.Ua;
            b.pna = (f) => __c.tNa({ ...f, Ua: e });
            b.hKa = (f) => xoc({ ...f, iA: b });
            b.gKa = (f) => yoc({ ...f });
            b.mna = E5(zoc({ vf: c, jS: void 0 }));
            b.jKa = Aoc(d, e);
            b.kKa = E5((f) => F5(G5, { ...f, Ua: e }));
          },
          Coc = function ({
            label: a,
            Xa: b,
            width: c,
            height: d,
            scale: e,
            KNa: f,
          }) {
            return F5("div", {
              style: { width: c, height: d, transform: `scale(${e})` },
              className: "bx74uQ",
              children: H5(__c.Ps, {
                className: I5("ivlMMQ", J5(f)),
                size: "small",
                alignment: "center",
                children: [b && F5(b, { size: "small" }), a],
              }),
            });
          },
          J5 = function (a) {
            return {
              _2BX0vg: a === "primary-default",
              JfW_Cg: a === "primary-low",
              isMgNg: a === "primary-active",
              xwWDeQ: a === "secondary-default",
              w0EyUQ: a === "secondary-low",
              _8p5AIA: a === "secondary-active",
            };
          },
          Eoc = function ({ Ld: a, kUa: b, scale: c, Ep: d, Fp: e, p$a: f }) {
            const g = K5(() => {
                const m = d === null || d === void 0 ? void 0 : d.get();
                if (m != null && m.length !== 0) return new __c.Jw(m);
              }, [d]),
              h = e(1),
              k = e(c),
              l = { ssE9Tg: !a, OkifGQ: a };
            return F5(__c.Qs, {
              Fq: "light",
              light: "light",
              eu: "light",
              dark: "light",
              children: (m) =>
                F5("div", {
                  className: I5("ze9QCQ", l, m.className),
                  style: { width: k, height: k },
                  children: F5("div", {
                    style: { width: h, height: h, transform: `scale(${c})` },
                    className: I5("N7J3UA", l),
                    ref: g === null || g === void 0 ? void 0 : g.Fm,
                    children: F5(__c.JS, {
                      className: I5("m8CFdg", l, { G6wL4w: f, W_E0wA: b }),
                      ariaLabel: N("ruWN9A"),
                      children: F5(Doc, { size: "tiny" }),
                    }),
                  }),
                }),
            });
          },
          Goc = function () {
            const a = new Foc(),
              b = new __c.lS(),
              c = L5((f) => {
                const {
                    scale: g = 1,
                    fUa: h,
                    size: k = "small",
                    p$a: l = !0,
                  } = f,
                  m = M5((n) => a.Fp({ scale: n, size: k, Ixa: h }), [k, h]);
                return F5(Eoc, {
                  ...f,
                  scale: h ? Math.max(g, h) : g,
                  Ld: f.sheet.direction === "rtl",
                  kUa: f.selection != null && a.qqb(f.sheet, f.selection),
                  Fp: m,
                  p$a: l,
                });
              }),
              d = L5((f) => {
                const {
                    scale: g = 1,
                    fUa: h,
                    size: k = "small",
                    sheet: l,
                    selection: m,
                    wzb: n,
                  } = f,
                  p = M5((v) => a.Fp({ scale: v, size: k, Ixa: h }), [k, h]),
                  q = h ? Math.max(g, h) : g,
                  r = M5((v) => m != null && a.SBa(m).has(v), [m]),
                  t = M5((v) => m != null && a.Rnb(l, m).has(v), [l, m]),
                  u = M5(
                    (v) => {
                      const x =
                        n != null &&
                        l.layout.cols.se(v, n.Wb) >= 0 &&
                        l.layout.cols.se(v, n.Pc) <= 0;
                      return r(v)
                        ? x
                          ? "secondary-active"
                          : "primary-active"
                        : t(v)
                        ? x
                          ? "secondary-low"
                          : "primary-low"
                        : x
                        ? "secondary-default"
                        : "primary-default";
                    },
                    [l, n, t, r]
                  );
                return F5(N5, { ...f, nd: g, Bd: q, Fp: p, mF: u, bG: b });
              }),
              e = L5((f) => {
                const {
                    scale: g = 1,
                    fUa: h,
                    size: k = "small",
                    sheet: l,
                    selection: m,
                    wzb: n,
                  } = f,
                  p = M5((v) => a.Fp({ scale: v, size: k, Ixa: h }), [k, h]),
                  q = h ? Math.max(g, h) : g,
                  r = M5((v) => m != null && a.UBa(m).has(v), [m]),
                  t = M5((v) => m != null && a.Snb(l, m).has(v), [l, m]),
                  u = M5(
                    (v) => {
                      const x =
                        n != null &&
                        l.layout.rows.se(v, n.ac) >= 0 &&
                        l.layout.rows.se(v, n.gd) <= 0;
                      return r(v)
                        ? x
                          ? "secondary-active"
                          : "primary-active"
                        : t(v)
                        ? x
                          ? "secondary-low"
                          : "primary-low"
                        : x
                        ? "secondary-default"
                        : "primary-default";
                    },
                    [l, n, t, r]
                  );
                return F5(O5, { ...f, nd: q, Bd: g, Fp: p, mF: u, bG: b });
              });
            return { T$a: c, S$a: d, U$a: e };
          },
          Hoc = function (a) {
            const b = a.pq,
              c = () => null;
            return __c.Dr((d) => F5(P5, { ...d, pq: b, Xh: c }));
          },
          Ioc = function ({ sheet: a, da: b, range: c, od: d }) {
            Q5(
              () =>
                R5(() => {
                  if (d.current != null) {
                    var e,
                      f =
                        (e = b === null || b === void 0 ? void 0 : b.get()) !==
                          null && e !== void 0
                          ? e
                          : 1,
                      g = a.direction === "rtl";
                    e = c && a.layout.rows.has(c.ac);
                    g =
                      c && a.layout.cols.has(c.Wb)
                        ? a.ra(c.Wb) * f * (g ? 1 : -1)
                        : 0;
                    e = e ? -a.qa(c.ac) * f : 0;
                    d.current.style.transform = `translate(${g}px, ${e}px)`;
                    d.current.style.width = `${a.width * f}px`;
                    d.current.style.height = `${a.height * f}px`;
                  }
                }),
              [a, c, d, b]
            );
          },
          Loc = function ({ onScroll: a }) {
            const b = new Joc(a);
            return {
              dD: b,
              Yma: L5((c) =>
                F5(Koc, { sheet: c.sheet, dD: b, children: c.children })
              ),
            };
          },
          Ooc = function (a) {
            const b = a.pq,
              c = a.Be,
              d = a.y5a,
              e = ({ children: k }) => k,
              { dD: f, Yma: g } = Loc({ onScroll: a.onScroll });
            class h extends Moc {
              get kM() {
                const k = this.props.ga.Hy;
                switch (k) {
                  case "screen":
                    return g;
                  case "print":
                    return e;
                  default:
                    throw new E(k);
                }
              }
              componentDidMount() {
                d.i5a(this.props.item, {
                  Ub: this.props.Ub,
                  ga: this.props.ga,
                });
              }
              componentWillUnmount() {
                d.qfb(this.props.item, {
                  Ub: this.props.Ub,
                  ga: this.props.ga,
                });
              }
              render() {
                d.i5a(this.props.item, {
                  Ub: this.props.Ub,
                  ga: this.props.ga,
                });
                return F5(Noc, {
                  ...this.props,
                  da: this.da,
                  pq: b,
                  kM: this.kM,
                  Xh: this.Xh,
                  y5a: d,
                  dD: f,
                });
              }
              constructor(...k) {
                super(...k);
                this.da = S5(() => {
                  const l = this.props.item;
                  var m = this.props.ga,
                    n = m.Hy;
                  m = m.zoom;
                  switch (n) {
                    case "screen":
                      return m;
                    case "print":
                      n = d.Zmb(l);
                      if (!n) return 1;
                      ({ width: n } = new __c.Yt(l, n.Ub, { zoom: m }));
                      return n / l.config.width;
                    default:
                      throw new E(n);
                  }
                });
                this.Xh = L5((l) =>
                  F5("div", {
                    className: "wKvivQ",
                    children: F5(__c.BNa, { ...this.props, ...l, Be: c }),
                  })
                );
              }
            }
            return { Sbb: h, dD: f };
          },
          Poc = function (a, b) {
            if (
              b != null &&
              b.Wb != null &&
              b.ac != null &&
              b.Pc != null &&
              b.gd != null
            ) {
              var c = a.ra(b.Wb),
                d = a.qa(b.ac),
                e = a.ra(b.Pc) + b.Pc.width - c;
              a = a.qa(b.gd) + b.gd.height - d;
              return Bo({ top: d, left: c, width: e, height: a });
            }
          },
          Roc = function (a) {
            const b = a.pq,
              c = () => null;
            return (d) => F5(Qoc, { ...d, pq: b, Xh: c });
          },
          Voc = function (a) {
            const b = { transform: "translate(-1000px, -1000px) scale(0)" },
              c = { YMa: b, aw: b, Ma: {}, jB: {} },
              d = T5(
                () => a.rA.style || c,
                (h) => {
                  var k;
                  Object.assign(a.$$.style, h.YMa);
                  Object.assign(a.TM.style, h.aw);
                  Object.assign(a.uE.style, h.Ma);
                  Object.assign(a.AE.style, h.jB);
                  h =
                    h === null || h === void 0
                      ? void 0
                      : (k = h.Ma) === null || k === void 0
                      ? void 0
                      : k.textDecoration;
                  a.uE.classList.toggle("OQx3PQ", h === "underline");
                  a.uE.classList.toggle("_99ezUA", h === "line-through");
                  a.uE.classList.toggle(
                    "kppAqQ",
                    h === "underline line-through"
                  );
                },
                { fireImmediately: !0, equals: Soc }
              ),
              e = T5(
                () => a.twa,
                (h) => {
                  a.uE.classList.toggle("_84KvRA", !h);
                  a.$$.classList.toggle("_84KvRA", !h);
                  a.TM.classList.toggle("TL_RLA", !h);
                },
                { fireImmediately: !0 }
              ),
              f = T5(
                () => a.renderer,
                (h) => {
                  a.Paa &&
                  (h === null || h === void 0 ? void 0 : h.type) !== "react"
                    ? ((a.Paa = void 0), a.S5.remove())
                    : (a.AE.innerHTML = "");
                  switch (h === null || h === void 0 ? void 0 : h.type) {
                    case "react":
                      a.Paa = Toc(h.node, a.S5);
                      a.AE.appendChild(a.S5);
                      break;
                    case "dom":
                      h.render(a.AE);
                      break;
                    case void 0:
                      break;
                    default:
                      throw new E(h);
                  }
                  a.Dya();
                },
                { fireImmediately: !0 }
              ),
              g = Uoc
                ? T5(
                    () => a.Vua,
                    (h) => {
                      a.uE.classList.toggle("qxD1GA", h);
                    },
                    { fireImmediately: !0 }
                  )
                : void 0;
            return () => {
              d();
              e();
              f();
              g === null || g === void 0 || g();
            };
          },
          Soc = function (a, b) {
            return JSON.stringify(a) === JSON.stringify(b);
          },
          Xoc = function (a) {
            const b = a.kA,
              c = a.oD,
              d = a.PD,
              e = a.G9a,
              f = a.Yy,
              g = new Woc(c),
              h = (k, l) => (f ? moc(f, k, l) : !1);
            return (k) =>
              F5(U5, {
                ...k,
                WO: h,
                PD: d,
                oD: c,
                kA: b,
                Rva: g,
                G9a: e === null || e === void 0 ? void 0 : e.get(),
              });
          },
          C5 = (a, b) =>
            `${a.column.id}-${a.boundary}:${b.oa.id}-${b.boundary}`,
          zoc =
            ({ vf: a, jS: b }) =>
            (c) =>
              (0, __c.K)(__c.ASb, { ...c, vf: a, jS: b }),
          V5 = __webpack_require__(31968),
          Yoc = V5.Fragment,
          F5 = V5.jsx,
          H5 = V5.jsxs;
        var Zoc = __webpack_require__,
          $oc = Zoc(208463),
          I5 = Zoc.n_x($oc)();
        var L5 = __webpack_require__(813494).observer;
        var W5 = __webpack_require__(845212),
          X5 = W5.Component,
          Moc = W5.PureComponent,
          M5 = W5.useCallback,
          Q5 = W5.useEffect,
          apc = W5.useLayoutEffect,
          K5 = W5.useMemo,
          Y5 = W5.useRef;
        var Z5 = __webpack_require__(400770),
          $5 = Z5.action,
          R5 = Z5.autorun,
          a6 = Z5.comparer,
          S5 = Z5.computed,
          bpc = Z5.createAtom,
          b6 = Z5.observable,
          T5 = Z5.reaction,
          cpc = Z5.untracked;
        var c6 = __webpack_require__(206928),
          dpc = c6.Aj,
          d6 = c6.iB,
          epc = c6.uP;
        var e6 = __webpack_require__(277049)._;
        var f6 = __webpack_require__(269018)._;
        var fpc = __webpack_require__(13851).A;
        var Toc = __webpack_require__(950873).createPortal;
        var gpc = class {
            static D(a) {
              O(a, { viewBox: b6.ref });
            }
            constructor() {
              this.viewBox =
                (gpc.D(this), Bo({ top: 0, left: 0, height: 0, width: 0 }));
              this.AAb = (a) => {
                this.viewBox.equals(a) || (this.viewBox = a);
              };
            }
          },
          hpc = L5((a) => {
            var b,
              c,
              d = a.sheet.direction === "rtl";
            d = { H2wykw: !d, UweldA: d };
            const e = Y5(new gpc()),
              f = $5(() => {
                if (a.Rla) {
                  var h = a.Rla.current;
                  h &&
                    e.current.AAb(
                      Bo({
                        top: h.scrollTop,
                        left: h.scrollLeft,
                        height: h.clientHeight,
                        width: h.clientWidth,
                      })
                    );
                }
              });
            Q5(() => {
              var h, k;
              f();
              (h = a.Rla.current) === null ||
                h === void 0 ||
                h.addEventListener("scroll", f);
              (k = window) === null ||
                k === void 0 ||
                k.addEventListener("resize", f);
              return () => {
                var l, m;
                (l = a.Rla.current) === null ||
                  l === void 0 ||
                  l.removeEventListener("scroll", f);
                (m = window) === null ||
                  m === void 0 ||
                  m.removeEventListener("resize", f);
              };
            }, [a.Rla, f]);
            const g = K5(() => ({ get: () => e.current.viewBox }), []);
            return H5("div", {
              className: I5("nMvVqA", d),
              children: [
                H5("div", {
                  ref: a.od,
                  className: "_0YOFPg",
                  children: [
                    F5(a.pq, { ...a, viewport: g }),
                    F5("div", {
                      className: I5("Gdl7fQ", d),
                      children:
                        (c = a.BJa) === null || c === void 0
                          ? void 0
                          : (b = c.get()) === null || b === void 0
                          ? void 0
                          : b.map((h, k) => F5(h, {}, k)),
                    }),
                  ],
                }),
                a.pPb === "visible" &&
                  H5(Yoc, {
                    children: [
                      F5("div", {
                        className: I5("_32sKQw", d),
                        children: F5(a.Pbb, { ...a }),
                      }),
                      F5("div", {
                        className: I5("xdIsTQ", d),
                        children: F5(a.Tbb, { ...a }),
                      }),
                      F5("div", {
                        className: I5("rsTRSA", d),
                        children: F5(a.Rbb, { ...a }),
                      }),
                    ],
                  }),
              ],
            });
          }),
          ipc = L5((a) => {
            a = a.content;
            __c.w(a.type === "text2" || a.type === "text3");
            switch (a.type) {
              case "text2":
                return a.value.X;
              case "text3":
                return __c.Lu.snapshot(a.value).cells.X();
              default:
                throw new E(a);
            }
          });
        var yoc = E5((a) => {
            const b = a.value,
              c = a.onChange;
            __c.y(a.valueType === 3);
            const d = M5(
              (e) => {
                c === null || c === void 0 || c(b, e.target.checked);
              },
              [c, b]
            );
            a = __c.ys();
            return F5("label", {
              className: I5("s5Xvtg", { _0YWo_Q: a }),
              children: H5("div", {
                className: "nOL94A",
                style: { "--V8rdkw": "18px" },
                children: [
                  F5("input", {
                    type: "checkbox",
                    checked: b,
                    onChange: $5((e) => d(e)),
                    className: "p8DDOg",
                  }),
                  F5("span", {
                    "aria-hidden": !0,
                    className: I5("l_S_Ng", b === !0 && "iGjddQ"),
                    children: F5(jpc, {}),
                  }),
                ],
              }),
            });
          }),
          jpc = () =>
            F5("svg", {
              className: "_8CNofA",
              viewBox: "0 0 10 8",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: F5("path", {
                d: "M0.750977 4.5L3.25098 7L9.25098 1",
                stroke: "white",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
              }),
            });
        var Aoc = (a, b) =>
            __c.fNa((c, d) => {
              const e = c.content;
              c = c.context;
              if (e.value.isEmpty) for (; d.lastChild; ) d.lastChild.remove();
              else
                ({ Ag: c } = __c.$e(__c.xf, c.attrs)),
                  c === "wrap" &&
                    ((d = d.appendChild(document.createElement("div"))),
                    (d.className = "dt4Dlg")),
                  a.render({
                    container: d,
                    text: e.value,
                    la: void 0,
                    writingMode: 1,
                    Rc: "start",
                    ye: kpc(e, c),
                    Ua: b,
                  });
            }),
          kpc = d6(
            (a, b) => {
              if (b === "wrap") return [];
              a = a.value.X.split("\n").map((c) => c.length + 1);
              a.pop();
              return a;
            },
            { equals: a6.structural }
          );
        var lpc, mpc, npc, G5;
        new ((lpc = class extends e6 {
          constructor() {
            super(G5);
            mpc();
          }
        }),
        (() => {
          class a extends (npc = X5) {
            static D(b) {
              O(b, { Ag: S5 });
            }
            get Ag() {
              return __c.$e(__c.xf, this.props.context.attrs).Ag;
            }
            render() {
              var b = this.props.content;
              const c = this.props.context;
              if (b.value.isEmpty) return null;
              b = F5(this.props.Xh, {
                content: b,
                oa: c.container.oa,
                col: c.container.column,
                Ag: this.Ag,
              });
              return this.Ag === "wrap"
                ? F5("div", { className: "dt4Dlg", children: b })
                : b;
            }
            constructor(...b) {
              super(...b);
              a.D(this);
            }
          }
          ({
            c: [G5, mpc],
          } = f6(a, [], [qc], npc));
        })(),
        lpc)();
        var Foc = class {
          Fp({ size: a, scale: b, Ixa: c }) {
            b = c ? Math.max(c, b) : b;
            return a === "large" ? __c.kW * b : __c.u1b * b;
          }
          constructor() {
            this.qqb = d6((a, b) => {
              var c, d;
              b = b.get();
              return (
                b != null &&
                a.layout.rows.count() ===
                  (((c = b.rows) === null || c === void 0 ? void 0 : c.size) ||
                    0) &&
                a.layout.cols.count() ===
                  (((d = b.columns) === null || d === void 0
                    ? void 0
                    : d.size) || 0)
              );
            });
            this.SBa = dpc(
              (a) => {
                var b;
                return new Set(
                  ((b = a.get()) === null || b === void 0
                    ? void 0
                    : b.columns) || []
                );
              },
              { equals: __c.Zl }
            );
            this.UBa = dpc(
              (a) => {
                var b;
                return new Set(
                  ((b = a.get()) === null || b === void 0 ? void 0 : b.rows) ||
                    []
                );
              },
              { equals: __c.Zl }
            );
            this.Rnb = d6(
              (a, b) => {
                var { cells: c } = b.get() || {};
                if (!c) return new Set();
                if (this.UBa(b).size > 0) return new Set(a.layout.cols);
                b = this.SBa(b);
                const d = new Set();
                for (const e of c) {
                  c = a.layout.cells.get(e.oa, e.column);
                  for (const f of uoc(
                    c ? c.span.Wb : e.column,
                    c ? c.span.Pc : e.column,
                    a.layout.cols
                  ))
                    (b.size === 0 || b.has(f)) && d.add(f);
                }
                return d;
              },
              { equals: __c.Zl }
            );
            this.Snb = d6(
              (a, b) => {
                var { cells: c } = b.get() || {};
                if (!c) return new Set();
                if (this.SBa(b).size > 0) return new Set(a.layout.rows);
                b = this.UBa(b);
                const d = new Set();
                for (const e of c) {
                  c = a.layout.cells.get(e.oa, e.column);
                  for (const f of uoc(
                    c ? c.span.ac : e.oa,
                    c ? c.span.gd : e.oa,
                    a.layout.rows
                  ))
                    (b.size === 0 || b.has(f)) && d.add(f);
                }
                return d;
              },
              { equals: __c.Zl }
            );
          }
        };
        var opc,
          ppc,
          qpc,
          rpc,
          spc,
          tpc,
          upc = parseInt("4px", 10) || 4,
          vpc = parseInt("0.5px", 10) || 0.5,
          wpc = parseInt("1px", 10) || 1,
          xpc = parseInt("0.5px", 10) || 0.5,
          ypc = parseInt("0.5px", 10) || 0.5,
          zpc = parseInt("1px", 10) || 1,
          Apc = parseInt("0.5px", 10) || 0.5,
          N5;
        new ((opc = class extends e6 {
          constructor() {
            super(N5);
            qpc();
          }
        }),
        (() => {
          class a extends (rpc = X5) {
            static D(b) {
              O(b, { Ld: S5, Vq: S5, r7: S5 });
            }
            get Ld() {
              return this.props.sheet.direction === "rtl";
            }
            get Vq() {
              var b;
              const c =
                (b = this.props.Ep) === null || b === void 0 ? void 0 : b.get();
              if (c != null && c.length !== 0) return new __c.Jw(c);
            }
            get r7() {
              var b, c, d;
              return (c = (d = this.props).mua) === null || c === void 0
                ? void 0
                : (b = c.call(d)) === null || b === void 0
                ? void 0
                : b.get();
            }
            render() {
              return F5(__c.Qs, {
                Fq: "light",
                light: "light",
                eu: "light",
                dark: "light",
                children: this.Jfb,
              });
            }
            constructor(...b) {
              super(...b);
              this.onMouseMove =
                (N5.D(this),
                $5((c) => {
                  const { onMouseMove: d, sheet: e, nd: f = 1 } = this.props;
                  d === null || d === void 0 || d(c, e, "column", f);
                }));
              this.onMouseLeave = $5((c) => {
                var d, e;
                (d = (e = this.props).onMouseLeave) === null ||
                  d === void 0 ||
                  d.call(e, c);
              });
              this.f2a = (c, d, e) => {
                const {
                    sheet: f,
                    Fp: g,
                    mF: h,
                    zPb: k,
                    nd: l = 1,
                    Bd: m = 1,
                  } = this.props,
                  n = { jNbTIg: !this.Ld, gtA7Dw: this.Ld },
                  p = (e === null || e === void 0 ? 0 : e.sticky)
                    ? this.Ld
                      ? { right: 0 }
                      : { left: 0 }
                    : void 0;
                var q;
                const r = (e === null || e === void 0 ? 0 : e.sticky)
                  ? (q = this.r7) !== null && q !== void 0
                    ? q
                    : p
                  : void 0;
                let t = -1;
                return H5("div", {
                  style: r,
                  className: I5("Vt2_4w", n, {
                    Tn3nUw: e === null || e === void 0 ? void 0 : e.sticky,
                  }),
                  onMouseMove: this.onMouseMove,
                  onMouseLeave: this.onMouseLeave,
                  children: [
                    f.layout.cols.map((u) => {
                      var v;
                      t++;
                      if (
                        !(
                          (c && f.layout.cols.se(u, c) < 0) ||
                          (d && f.layout.cols.se(u, d) > 0)
                        )
                      )
                        return F5(
                          Bpc,
                          {
                            col: u,
                            label: __c.Zq(t),
                            Xa:
                              k === null || k === void 0
                                ? void 0
                                : (v = k.get()) === null || v === void 0
                                ? void 0
                                : v.get(u),
                            Fp: g,
                            mF: h,
                            nd: l,
                            Bd: m,
                          },
                          u.id
                        );
                    }),
                    (e === null || e === void 0 ? void 0 : e.sticky) &&
                      F5("div", {
                        style: { width: upc * l },
                        className: I5("HBvlug", "ru3tFQ", n),
                      }),
                  ],
                });
              };
              this.Jfb = (c) => {
                var d;
                const e = this.props.sheet,
                  f = e.view.freeze.yE
                    ? e.layout.Kd.get(e.view.freeze.yE)
                    : void 0,
                  g = { jNbTIg: !this.Ld, gtA7Dw: this.Ld };
                return H5("div", {
                  ref: (d = this.Vq) === null || d === void 0 ? void 0 : d.Fm,
                  className: I5("xhBZaw", g, c.className),
                  children: [
                    f && this.f2a(void 0, f, { sticky: !0 }),
                    this.f2a(f ? e.cols.next(f) : void 0),
                  ],
                });
              };
            }
          }
          ({
            c: [N5, qpc],
          } = f6(a, [], [qc], rpc));
        })(),
        opc)();
        var O5;
        new ((ppc = class extends e6 {
          constructor() {
            super(O5);
            spc();
          }
        }),
        (() => {
          class a extends (tpc = X5) {
            static D(b) {
              O(b, { Ld: S5, Vq: S5, r7: S5 });
            }
            get Ld() {
              return this.props.sheet.direction === "rtl";
            }
            get Vq() {
              var b;
              const c =
                (b = this.props.Ep) === null || b === void 0 ? void 0 : b.get();
              if (c != null && c.length !== 0) return new __c.Jw(c);
            }
            get r7() {
              var b, c, d;
              return (c = (d = this.props).mua) === null || c === void 0
                ? void 0
                : (b = c.call(d)) === null || b === void 0
                ? void 0
                : b.get();
            }
            render() {
              return F5(__c.Qs, {
                Fq: "light",
                light: "light",
                eu: "light",
                dark: "light",
                children: this.hzb,
              });
            }
            constructor(...b) {
              super(...b);
              this.onMouseMove =
                (O5.D(this),
                $5((c) => {
                  const { onMouseMove: d, sheet: e, Bd: f = 1 } = this.props;
                  d === null || d === void 0 || d(c, e, "row", f);
                }));
              this.onMouseLeave = $5((c) => {
                var d, e;
                (d = (e = this.props).onMouseLeave) === null ||
                  d === void 0 ||
                  d.call(e, c);
              });
              this.l2a = (c, d, e) => {
                const {
                    sheet: f,
                    Fp: g,
                    mF: h,
                    nd: k = 1,
                    Bd: l = 1,
                  } = this.props,
                  m = { jNbTIg: !this.Ld, gtA7Dw: this.Ld };
                var n = (e === null || e === void 0 ? 0 : e.sticky)
                    ? { top: 0 }
                    : void 0,
                  p;
                const q = (e === null || e === void 0 ? 0 : e.sticky)
                  ? (p = this.r7) !== null && p !== void 0
                    ? p
                    : n
                  : void 0;
                let r = -1,
                  t = 0;
                n = f.rows.map((u) => {
                  r++;
                  if (
                    !((c && f.rows.se(u, c) < 0) || (d && f.rows.se(u, d) > 0))
                  )
                    return (
                      (t += u.height),
                      F5(
                        Cpc,
                        {
                          oa: u,
                          label: `${r + 1}`,
                          mF: h,
                          Fp: g,
                          nd: k,
                          Bd: l,
                          start: f.qa(u),
                        },
                        u.id
                      )
                    );
                });
                return H5("div", {
                  style: { height: t * l, width: g(k), ...q },
                  className: I5("_93roJg", m, {
                    Tn3nUw: e === null || e === void 0 ? void 0 : e.sticky,
                  }),
                  onMouseMove: this.onMouseMove,
                  onMouseLeave: this.onMouseLeave,
                  children: [
                    n,
                    (e === null || e === void 0 ? void 0 : e.sticky) &&
                      F5("div", {
                        style: { height: upc * l },
                        className: I5("HBvlug", "koz2Hg"),
                      }),
                  ],
                });
              };
              this.hzb = (c) => {
                var d;
                const e = this.props.sheet,
                  f = e.view.freeze.DQ
                    ? e.layout.Td.get(e.view.freeze.DQ)
                    : void 0,
                  g = { jNbTIg: !this.Ld, gtA7Dw: this.Ld };
                return H5("div", {
                  ref: (d = this.Vq) === null || d === void 0 ? void 0 : d.Fm,
                  className: I5("An9VeA", g, c.className),
                  children: [
                    f && this.l2a(void 0, f, { sticky: !0 }),
                    this.l2a(f ? e.rows.next(f) : void 0),
                  ],
                });
              };
            }
          }
          ({
            c: [O5, spc],
          } = f6(a, [], [qc], tpc));
        })(),
        ppc)();
        var Bpc = L5((a) => {
            const b = a.label,
              c = a.Xa,
              d = a.col,
              e = a.mF,
              f = a.Fp,
              g = a.nd;
            a = a.Bd;
            const h = f(a),
              k = epc(() => e(d));
            return F5("div", {
              className: I5("_83Rssw", "d2uLIA", J5(k)),
              style: {
                width: d.width * g,
                height: h,
                borderInlineWidth: `${vpc * g}px`,
                borderBlockStartWidth: `${wpc * g}px`,
                borderBlockEndWidth: `${xpc * g}px`,
              },
              children: F5(Coc, {
                label: b,
                Xa: c,
                width: d.width,
                height: f(1),
                scale: a,
                KNa: k,
              }),
            });
          }),
          Cpc = L5((a) => {
            const b = a.label,
              c = a.oa,
              d = a.Fp,
              e = a.mF,
              f = a.nd,
              g = a.Bd,
              h = d(f),
              k = epc(() => e(c));
            return F5("div", {
              className: I5("_83Rssw", "JhBzyw", J5(k)),
              style: {
                width: h,
                height: c.height * g,
                borderBlockWidth: `${ypc * g}px`,
                borderInlineStartWidth: `${zpc * g}px`,
                borderInlineEndWidth: `${Apc * g}px`,
                transform: `translateY(${a.start * g}px)`,
              },
              children: F5(Coc, {
                label: b,
                width: d(1),
                height: c.height,
                scale: f,
                KNa: k,
              }),
            });
          });
        var Dpc =
          '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="6" cy="6" r="5.5"/></svg>';
        var Epc =
          '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="12" cy="12" r="9.25" stroke-width="1.5"/></svg>';
        var Doc = __c.zS({ Wo: Dpc, medium: Epc });
        var Fpc, Gpc, Hpc, P5;
        new ((Fpc = class extends e6 {
          constructor() {
            super(P5);
            Gpc();
          }
        }),
        (() => {
          class a extends (Hpc = X5) {
            static D(b) {
              O(b, { De: S5.struct });
            }
            render() {
              const b = this.props.element;
              return F5(this.props.pq, {
                sheet: b.G.config,
                container: b,
                G$: "visible",
                Ep: this.props.Ep,
                Au: this.props.Au,
                Cu: this.props.Cu,
                da: this.props.da,
                De: this.De,
                Xh: this.props.Xh,
                GH: void 0,
              });
            }
            get De() {
              return __c.gr(this.props.element.G.Oa, this.props.We);
            }
            constructor(...b) {
              super(...b);
              a.D(this);
            }
          }
          ({
            c: [P5, Gpc],
          } = f6(a, [], [qc], Hpc));
        })(),
        Fpc)();
        var Ipc = class {
          constructor() {
            this.Jja = new WeakMap();
            this.Zmb = (a) => this.Jja.get(a);
            this.i5a = (a, b) => {
              this.Jja.set(a, b);
            };
            this.qfb = (a, b) => {
              const c = this.Jja.get(a);
              c && c.ga === b.ga && c.Ub === b.Ub && this.Jja.delete(a);
            };
          }
        };
        var g6 = parseInt("4px", 10) || 4,
          Jpc = L5(({ sheet: a, da: b, range: c, pw: d, qw: e }) => {
            if (c != null && (d || e)) {
              var f;
              b =
                (f = b === null || b === void 0 ? void 0 : b.get()) !== null &&
                f !== void 0
                  ? f
                  : 1;
              f = a.direction === "rtl";
              var g = { ZJ0G6w: !f, dOI_jA: f };
              if (d && e)
                return (
                  (d = a.qa(c.gd) + c.gd.height),
                  (a = a.ra(c.Pc) + c.Pc.width),
                  F5("div", {
                    style: { top: d * b, width: a * b, height: g6 * b },
                    className: I5("aX8dhQ", "VGcLng"),
                  })
                );
              if (d)
                return (
                  (c = a.ra(c.Pc) + c.Pc.width),
                  F5("div", {
                    style: {
                      width: g6 * b,
                      height: a.height * b,
                      ...(f ? { right: c * b } : { left: c * b }),
                    },
                    className: I5("aX8dhQ", "gl1RPg", g),
                  })
                );
              if (e)
                return (
                  (c = a.qa(c.gd) + c.gd.height),
                  F5("div", {
                    style: { top: c * b, width: a.width * b, height: g6 * b },
                    className: I5("aX8dhQ", "VGcLng"),
                  })
                );
            }
          });
        var h6 = ({ sheet: a, range: b, da: c, children: d }) => {
            const e = D5();
            Ioc({ sheet: a, da: c, range: b, od: e });
            return F5("div", {
              ref: e,
              className: I5(
                "nstn2A",
                a.direction === "rtl" ? "NgnL2Q" : "f8jAGQ"
              ),
              children: d,
            });
          },
          Kpc = ({ sheet: a, range: b, da: c, children: d }) => {
            const e = D5();
            Ioc({ sheet: a, da: c, range: b, od: e });
            a = a.direction === "rtl" ? "NgnL2Q" : "f8jAGQ";
            return F5("div", {
              className: I5("nstn2A", a, "_9sodyg"),
              children: F5("div", {
                ref: e,
                className: I5("nstn2A", a),
                children: d,
              }),
            });
          };
        var Koc = L5(({ sheet: a, children: b, dD: c }) => {
            const d = M5(
                (f) => {
                  c.PCa(a, f);
                },
                [c, a]
              ),
              e = M5(
                (f) => {
                  f != null ? c.eD.set(a, f) : c.eD.delete(a);
                },
                [c, a]
              );
            return F5(__c.eXb, {
              direction: a.config.direction === "rtl" ? "rtl" : "ltr",
              onScroll: d,
              lv: e,
              children: b,
            });
          }),
          Joc = class {
            PCa(a, b) {
              this.onScroll && this.onScroll(a);
              this.A6.set(a, b);
            }
            constructor(a) {
              this.onScroll = a;
              this.eD = new WeakMap();
              this.A6 = b6.map(new Map(), { deep: !1 });
              this.scrollTo = $5((b, c) => {
                b = this.eD.get(b);
                b === null ||
                  b === void 0 ||
                  b.scrollTo({ left: Math.floor(c) });
              });
            }
          };
        var Noc = L5((a) => {
          const b = a.item,
            c = a.Ep,
            d = a.Zf,
            e = a.measureRef,
            f = a.da,
            g = a.nVa,
            h = a.Ub,
            k = a.Au,
            l = a.Cu,
            m = a.pq,
            n = a.kM,
            p = a.Xh,
            q = a.We,
            r = a.dD;
          a = K5(() => __c.gr(b.Oa, q), [b, q]);
          const t = K5(
              () =>
                L5(({ sheet: A, range: B, pw: C, qw: D }) =>
                  F5(h6, {
                    sheet: A,
                    range: B,
                    da: f,
                    children: F5(Jpc, {
                      sheet: A,
                      da: f,
                      range: B,
                      pw: C,
                      qw: D,
                    }),
                  })
                ),
              [f]
            ),
            u = voc(b.config),
            v = f.get(),
            x = Math.min(u.width * v, h.width);
          Q5(
            () =>
              R5(() => {
                var A = b.config.view.freeze.yE
                  ? b.config.layout.Kd.get(b.config.view.freeze.yE)
                  : void 0;
                if (A != null)
                  if (b.config.ra(A) + A.width > x) {
                    if ((A = r.eD.get(b))) A.style.overflowX = "hidden";
                  } else if ((A = r.eD.get(b))) A.style.overflowX = "scroll";
              }),
            [b, h.width, r, v, x]
          );
          return F5("div", {
            ref: e,
            className: "E8r86A",
            style: { width: x },
            children: F5(n, {
              sheet: b,
              children: F5("div", {
                ref: g,
                className: "cXTiJA",
                style: { width: u.width * v, height: u.height * v },
                children: F5("div", {
                  className: "W1ir5A",
                  children: F5(m, {
                    container: d.aj(b),
                    sheet: b.config,
                    G$: "visible",
                    Ep: c,
                    da: f,
                    Au: k,
                    Cu: l,
                    De: a,
                    Xh: p,
                    GH: t,
                  }),
                }),
              }),
            }),
          });
        });
        var Lpc = L5(({ page: a, range: b, YC: c }) => {
          const d = Poc(a.sheet, b);
          return F5("div", {
            className: "Gi9pfA",
            children: a.elements.map((e, f) =>
              d == null ? c(e, f) : __c.zo(Bo(e)).Kp(d) && c(e, f)
            ),
          });
        });
        var Mpc = new __c.lS(),
          i6 = (a) => __c.kW * a,
          Npc = () => "primary-default",
          Qoc = L5(
            ({
              container: a,
              Ep: b,
              Au: c,
              Cu: d,
              C2: e,
              da: f,
              viewport: g,
              VAb: h,
              pq: k,
              Xh: l,
              YC: m,
              Oia: n,
              qHb: p,
              $Fb: q,
              ZFb: r,
            }) => {
              const t = a.page,
                u = K5(
                  () =>
                    L5(({ sheet: v, range: x, pw: A, qw: B }) =>
                      H5(Yoc, {
                        children: [
                          F5(h6, {
                            sheet: t.sheet,
                            range: x,
                            da: f,
                            children: F5(Jpc, {
                              sheet: v,
                              da: f,
                              range: x,
                              pw: A,
                              qw: B,
                            }),
                          }),
                          H5(Kpc, {
                            sheet: t.sheet,
                            range: x,
                            da: f,
                            children: [
                              p && F5(p, {}),
                              m && F5(Lpc, { page: t, YC: m, range: x }),
                              r && F5(r, {}),
                              n && n(),
                            ],
                          }),
                          q &&
                            x &&
                            F5(h6, {
                              sheet: t.sheet,
                              range: x,
                              da: f,
                              children: F5(q, { range: x }),
                            }),
                        ],
                      })
                    ),
                  [t, f, p, m, r, n, q]
                );
              return h
                ? F5(Opc, {
                    container: a,
                    viewport: g,
                    da: f,
                    Ep: b,
                    Au: c,
                    Cu: d,
                    pq: k,
                    Xh: l,
                    GH: u,
                  })
                : F5(k, {
                    sheet: t.sheet,
                    container: a,
                    G$: "hidden",
                    Ep: b,
                    Au: c,
                    Cu: d,
                    C2: e,
                    da: f,
                    viewport: g,
                    Xh: l,
                    GH: u,
                  });
            }
          ),
          Opc = L5((a) => {
            const b = a.container,
              c = a.da,
              d = a.viewport,
              e = a.Ep,
              f = a.Au,
              g = a.Cu,
              h = a.pq,
              k = a.Xh;
            a = a.GH;
            const l = b.page,
              m = l.sheet.direction === "rtl",
              n = Y5(null),
              p = Y5(null),
              q = Y5(null);
            Q5(() => {
              const A = j6({
                sheet: l.sheet,
                oka: !0,
                pka: !0,
                da: c,
                viewport: d,
              });
              return T5(
                () => (A === null || A === void 0 ? void 0 : A.get()),
                (B) => {
                  const C = n.current;
                  if (B && C) {
                    var D = l.sheet.direction === "rtl",
                      I;
                    C.style.position =
                      (I = B.position) !== null && I !== void 0 ? I : "sticky";
                    var L;
                    C.style.top =
                      (L = B.top) !== null && L !== void 0 ? L : "0px";
                    var J, M;
                    D
                      ? (C.style.right =
                          (J = B.right) !== null && J !== void 0 ? J : "0px")
                      : (C.style.left =
                          (M = B.left) !== null && M !== void 0 ? M : "0px");
                    var P;
                    C.style.transform =
                      (P = B.transform) !== null && P !== void 0 ? P : "";
                  }
                }
              );
            }, [l.sheet, c, d]);
            Q5(() => {
              const A = j6({
                sheet: l.sheet,
                oka: !1,
                pka: !0,
                da: c,
                viewport: d,
              });
              return T5(
                () => (A === null || A === void 0 ? void 0 : A.get()),
                (B) => {
                  const C = q.current;
                  if (B && C) {
                    var D;
                    C.style.position =
                      (D = B.position) !== null && D !== void 0 ? D : "sticky";
                    var I;
                    C.style.top =
                      (I = B.top) !== null && I !== void 0 ? I : "0px";
                    var L;
                    C.style.transform =
                      (L = B.transform) !== null && L !== void 0 ? L : "";
                  }
                }
              );
            }, [l.sheet, c, d]);
            Q5(() => {
              const A = j6({
                sheet: l.sheet,
                oka: !0,
                pka: !1,
                da: c,
                viewport: d,
              });
              return T5(
                () => (A === null || A === void 0 ? void 0 : A.get()),
                (B) => {
                  const C = p.current;
                  if (B && C) {
                    var D = l.sheet.direction === "rtl",
                      I;
                    C.style.position =
                      (I = B.position) !== null && I !== void 0 ? I : "sticky";
                    var L, J;
                    D
                      ? (C.style.right =
                          (L = B.right) !== null && L !== void 0 ? L : "0px")
                      : (C.style.left =
                          (J = B.left) !== null && J !== void 0 ? J : "0px");
                    var M;
                    C.style.transform =
                      (M = B.transform) !== null && M !== void 0 ? M : "";
                  }
                }
              );
            }, [l.sheet, c, d]);
            const r = M5(
                (A, B, C) =>
                  j6({ sheet: A, oka: B, pka: C, da: c, viewport: d }),
                [c, d]
              ),
              t = K5(
                () => (r ? () => r(l.sheet, !0, !1) : void 0),
                [r, l.sheet]
              ),
              u = K5(
                () => (r ? () => r(l.sheet, !1, !0) : void 0),
                [r, l.sheet]
              );
            var v;
            const x =
              (v = c === null || c === void 0 ? void 0 : c.get()) !== null &&
              v !== void 0
                ? v
                : 1;
            return H5("div", {
              className: I5("OsKKIQ", "cbOp6Q"),
              children: [
                F5("div", {
                  className: "VDFv_A",
                  children: F5(h, {
                    sheet: l.sheet,
                    container: b,
                    G$: "hidden",
                    Ep: e,
                    Au: f,
                    Cu: g,
                    C2: r,
                    da: c,
                    viewport: d,
                    Xh: k,
                    GH: a,
                  }),
                }),
                F5("div", {
                  ref: n,
                  className: "_688KWg",
                  children: F5(Eoc, { Ld: m, kUa: !1, Fp: i6, scale: x }),
                }),
                F5("div", {
                  ref: q,
                  className: "m0cT1w",
                  children: F5(N5, {
                    sheet: l.sheet,
                    nd: x,
                    Bd: x,
                    Fp: i6,
                    mF: Npc,
                    bG: Mpc,
                    mua: t,
                  }),
                }),
                F5("div", {
                  ref: p,
                  className: "zm537g",
                  children: F5(O5, {
                    sheet: l.sheet,
                    nd: x,
                    Bd: x,
                    Fp: i6,
                    mF: Npc,
                    bG: Mpc,
                    mua: u,
                  }),
                }),
              ],
            });
          }),
          j6 = ({ sheet: a, oka: b, pka: c, da: d, viewport: e }) =>
            S5(() => {
              var f = e === null || e === void 0 ? void 0 : __c.Mo(e.get()),
                g;
              const h =
                (g = d === null || d === void 0 ? void 0 : d.get()) !== null &&
                g !== void 0
                  ? g
                  : 1;
              if (!f) return {};
              g = {};
              f = new bo(f.left, f.top);
              const k = a.direction === "rtl";
              g.position = "relative";
              c && (g.top = "0px");
              b && (k ? (g.right = "0px") : (g.left = "0px"));
              g.transform = `translate(${b ? f.x * h : 0}px, ${
                c ? f.y * h : 0
              }px)`;
              return g;
            });
        var Woc = class {
          constructor(a) {
            this.oD = a;
            this.cfb = __c.wU;
            this.Cmb = d6((b, c, d, e) => {
              d = d.get();
              const f = new WeakMap();
              for (let t = 0; t < d.length; t++) {
                var g = d[t],
                  h = this.umb(b, c, g);
                if (h) {
                  switch (h) {
                    case "start":
                    case "justify":
                      var k = d[t + 1];
                      if (k == null || !PA(b, c, k)) continue;
                      break;
                    case "center":
                      k = d[t + 1];
                      if (k == null || !PA(b, c, k)) continue;
                      k = d[t - 1];
                      if (k == null || !PA(b, c, k)) continue;
                      break;
                    case "end":
                      k = d[t - 1];
                      if (k == null || !PA(b, c, k)) continue;
                      break;
                    default:
                      throw new E(h);
                  }
                  if ((k = e(c, g))) {
                    var l = k.width + (h === "center" ? 0 : this.cfb);
                    if (!(g.width > l)) {
                      switch (h) {
                        case "start":
                        case "justify":
                          h = b.ra(g);
                          k = h + l;
                          break;
                        case "center":
                          k = b.ra(g) + g.width / 2;
                          h = k - l / 2;
                          k += l / 2;
                          break;
                        case "end":
                          k = b.ra(g) + g.width;
                          h = k - l;
                          break;
                        default:
                          throw new E(h);
                      }
                      for (l = d.indexOf(g); l >= 0; l--) {
                        var m = d[l],
                          n = l - 1 < 0 || PA(b, c, d[l - 1]),
                          p;
                        if ((p = m === g || PA(b, c, m))) {
                          p = h;
                          var q = k,
                            r = b.ra(m);
                          p = p < r && r < q;
                        }
                        if (p && n) f.set(m, 1);
                        else break;
                      }
                      for (g = d.indexOf(g) + 1; g < d.length; g++) {
                        l = d[g];
                        if ((m = PA(b, c, l)))
                          (m = h), (n = k), (p = b.ra(l)), (m = m < p && p < n);
                        if (m) f.set(l, 1);
                        else break;
                      }
                    }
                  }
                }
              }
              return f;
            });
            this.umb = (b, c, d) => {
              var e, f;
              const g = b.layout.cells.get(c, d);
              if (
                g &&
                (g.ref.content.ref || g.ref.Ba.ref) &&
                g.span.ac === g.span.gd &&
                g.span.Wb === g.span.Pc
              ) {
                var h = this.oD.wm(b, c, d);
                b = this.oD.fua(
                  b,
                  c,
                  d,
                  __c.yf({ Ag: void 0, textAlign: void 0 })
                );
                var { Ag: k, textAlign: l } = __c.$e(__c.xf, b);
                if (k === "overflow")
                  return __c.gNa(
                    l,
                    (e = g.ref.content.ref) === null || e === void 0
                      ? void 0
                      : e.type,
                    (f = g.ref.Ba.ref) === null || f === void 0
                      ? void 0
                      : f.type,
                    h ? () => h.Yi.type : void 0
                  );
              }
            };
          }
        };
        var Ppc = L5(function (a) {
          const b = a.sheet;
          var c = a.Ah;
          const d = a.vEb,
            e = a.da,
            f = a.Rva,
            g = a.imb;
          a = a.overflow;
          const h = D5();
          apc(
            () =>
              R5(() => {
                const p = z(h.current);
                var q;
                const r =
                  (q = e === null || e === void 0 ? void 0 : e.get()) !==
                    null && q !== void 0
                    ? q
                    : 1;
                q = b.height;
                p.style.width = `${b.width * r}px`;
                p.style.height = `${q * r}px`;
              }),
            [h, e, b]
          );
          const k = M5((p) => f.Cmb(b, p, d, g), [f, b, d, g]);
          var l = M5(
            (p, q) => {
              var r, t;
              return (t =
                (r = k(p)) === null || r === void 0 ? void 0 : r.get(q)) !==
                null && t !== void 0
                ? t
                : 0;
            },
            [k]
          );
          c = soc(b, c, d, l);
          l = b.width;
          const m = b.height,
            n = b.direction === "rtl";
          return F5("svg", {
            ref: h,
            role: "presentation",
            className: I5("c6a1eQ", {
              H_CtIQ: !n,
              _8_56PQ: n,
              _3NnFzw: a === "visible",
              JMH1ng: a === "hidden",
            }),
            viewBox: `0 0 ${l} ${m}`,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            children: c.map(({ lines: p, color: q, weight: r, Jk: t, Kk: u }) =>
              F5(
                "path",
                {
                  stroke: q,
                  strokeDasharray: t,
                  strokeDashoffset: u,
                  strokeWidth: r,
                  d: p
                    .map(
                      ({ p1: v, p2: x }) => `M ${v.x} ${v.y} L ${x.x} ${x.y}`
                    )
                    .join(" "),
                },
                `${q}-${r}-${t}-${u}`
              )
            ),
          });
        });
        var Qpc;
        Qpc = Symbol.iterator;
        var Rpc = class {
          get size() {
            return this.Zja;
          }
          get([a, b]) {
            return (a = this.LF.get(a)) ? a.get(b) : void 0;
          }
          has([a, b]) {
            a = this.LF.get(a);
            return a == null ? !1 : a.has(b);
          }
          set([a, b], c) {
            let d = this.LF.get(a);
            d == null && ((d = new Map()), this.LF.set(a, d));
            d.set(b, c);
            this.Zja++;
            return this;
          }
          clear() {
            this.LF.clear();
            this.Zja = 0;
          }
          delete([a, b]) {
            const c = this.LF.get(a);
            if (c == null || !c.delete(b)) return !1;
            this.Zja--;
            c.size === 0 && this.LF.delete(a);
            return !0;
          }
          forEach(a) {
            for (const [b, c] of this.LF) for (const [d, e] of c) a([b, d], e);
          }
          *[Qpc]() {
            for (const [a, b] of this.LF)
              for (const [c, d] of b) yield [[a, c], d];
          }
          constructor() {
            this.Zja = 0;
            this.LF = new Map();
          }
        };
        var Spc,
          Tpc,
          Upc,
          Vpc,
          Wpc,
          Xpc,
          Ypc,
          Uoc = __c.kn("285688d5", !1),
          Zpc,
          $pc = class extends X5 {
            render() {
              const { wda: a, ...b } = this.props,
                c = this.props.sheet;
              return H5("div", {
                ref: this.B5a,
                className: I5(
                  "ZTz_iA",
                  c.direction === "ltr" ? "TA4X7w" : "WvuqMw"
                ),
                children: [
                  (a === null || a === void 0 ? void 0 : a.jMa) &&
                    F5(k6, {
                      ...b,
                      sheet: c,
                      range: a.jMa.range,
                      pw: !0,
                      qw: !0,
                      className: "_0C8M3w",
                    }),
                  (a === null || a === void 0 ? void 0 : a.Q9a) &&
                    F5(k6, {
                      ...b,
                      sheet: c,
                      range: a.Q9a.range,
                      pw: !1,
                      qw: !0,
                      className: "_7n44yg",
                    }),
                  (a === null || a === void 0 ? void 0 : a.nUa) &&
                    F5(k6, {
                      ...b,
                      sheet: c,
                      range: a.nUa.range,
                      pw: !0,
                      qw: !1,
                      className: "fF5r6w",
                    }),
                  (a === null || a === void 0 ? void 0 : a.J8a) &&
                    F5(k6, {
                      ...b,
                      sheet: c,
                      range: a.J8a.range,
                      pw: !1,
                      qw: !1,
                      className: "llILYw",
                    }),
                ],
              });
            }
            componentDidMount() {
              const a = R5(() => {
                var b = this.props,
                  c = b.da;
                b = b.sheet;
                const d = this.B5a.current;
                d &&
                  ((c = c ? c.get() : 1),
                  (d.style.width = `${b.width * c}px`),
                  (d.style.height = `${b.height * c}px`));
              });
              __c.gc(this, [a]);
            }
            constructor(...a) {
              super(...a);
              this.B5a = tr();
            }
          };
        ({
          c: [Zpc, Upc],
        } = f6($pc, [], [qc], X5));
        Upc();
        var k6;
        new ((Spc = class extends e6 {
          constructor() {
            super(k6);
            Vpc();
          }
        }),
        (() => {
          class a extends (Wpc = X5) {
            static D(b) {
              O(b, { hDa: S5, bounds: S5 });
            }
            get hDa() {
              const b = this.props.viewport,
                c = this.props.pw,
                d = this.props.qw;
              return b == null || (!c && !d)
                ? b
                : S5(() => {
                    const e = __c.Mo(b.get());
                    return Bo({
                      top: d ? 0 : e.top,
                      left: c ? 0 : e.left,
                      width: e.width,
                      height: e.height,
                    });
                  });
            }
            render() {
              const b = this.props.WO,
                c = this.props.sheet,
                d = this.props.container,
                e = this.props.range,
                f = this.props.GH,
                g = this.props.pw,
                h = this.props.qw;
              return H5("div", {
                ref: this.Mza,
                className: I5("i0YQww", this.props.className),
                children: [
                  F5("div", {
                    ref: this.m0a,
                    className: "vUKoKg",
                    children: F5("div", {
                      ref: this.n0a,
                      children: F5(l6, {
                        WO: b,
                        sheet: c,
                        container: d,
                        bounds: e,
                        Ep: this.props.Ep,
                        PD: this.props.PD,
                        Xh: this.props.Xh,
                        d0: this.props.d0,
                        da: this.props.da,
                        Ah: this.Ah,
                        U8: this.U8,
                        PT: this.PT,
                      }),
                    }),
                  }),
                  F5(this.Zma, {}),
                  f && F5(f, { sheet: c, range: e, pw: g, qw: h }),
                ],
              });
            }
            componentDidMount() {
              const b = R5(() => {
                  var h = this.props,
                    k = h.da,
                    l = h.sheet,
                    m = this.Mza.current;
                  const n = this.m0a.current;
                  h = this.n0a.current;
                  var p = this.bounds,
                    q = p.Wb,
                    r = p.Pc;
                  const t = p.ac;
                  p = p.gd;
                  k = k ? k.get() : 1;
                  r = r && q ? l.ra(r) + r.width - l.ra(q) : l.width;
                  p = p && t ? l.qa(p) + p.height - l.qa(t) : l.height;
                  m &&
                    ((m.style.width = `${r * k}px`),
                    (m.style.height = `${p * k}px`));
                  n &&
                    ((n.style.width = `${r * k}px`),
                    (n.style.height = `${p * k}px`));
                  m = l.direction === "rtl";
                  q = q ? l.ra(q) * k * (m ? 1 : -1) : 0;
                  l = t ? -l.qa(t) * k : 0;
                  h && (h.style.transform = `translate(${q}px, ${l}px)`);
                }),
                c = this.props.sheet;
              var d = this.props.C2;
              const e = this.props.pw,
                f = this.props.qw,
                g =
                  e || f
                    ? d === null || d === void 0
                      ? void 0
                      : d(c, e, f)
                    : void 0;
              d = R5(() => {
                const h = this.Mza.current;
                if (h != null) {
                  var k = e || f ? "sticky" : "relative",
                    l = f ? "0px" : "unset",
                    m = e ? "0px" : "unset",
                    n = e ? "0px" : "unset",
                    p = c.direction === "rtl";
                  if (g == null)
                    (h.style.position = k),
                      (h.style.top = l),
                      (h.style.left = p ? "unset" : m),
                      (h.style.right = p ? n : "unset");
                  else {
                    const x = g.get();
                    var q;
                    h.style.position =
                      (q = x.position) !== null && q !== void 0 ? q : k;
                    var r;
                    h.style.top = (r = x.top) !== null && r !== void 0 ? r : l;
                    var t;
                    h.style.left = p
                      ? "unset"
                      : (t = x.left) !== null && t !== void 0
                      ? t
                      : m;
                    var u;
                    h.style.right = p
                      ? (u = x.right) !== null && u !== void 0
                        ? u
                        : n
                      : "unset";
                    var v;
                    h.style.transform =
                      (v = x.transform) !== null && v !== void 0 ? v : "unset";
                  }
                }
              });
              __c.gc(this, [b, d]);
            }
            get bounds() {
              const b = this.props.sheet;
              var c = this.props.range;
              if (b.layout.cols.empty || b.layout.rows.empty)
                return { Wb: void 0, Pc: void 0, ac: void 0, gd: void 0 };
              const d = c.Wb,
                e = c.Pc,
                f = c.ac;
              c = c.gd;
              const g = b.layout.cols.first(),
                h = b.layout.rows.first(),
                k = b.layout.cols.last(),
                l = b.layout.rows.last();
              return {
                Wb: d ? (b.layout.cols.has(d) ? d : void 0) : g,
                Pc: e ? (b.layout.cols.has(e) ? e : void 0) : k,
                ac: f ? (b.layout.rows.has(f) ? f : void 0) : h,
                gd: c ? (b.layout.rows.has(c) ? c : void 0) : l,
              };
            }
            constructor(...b) {
              super(...b);
              this.Mza = (k6.D(this), tr());
              this.m0a = tr();
              this.n0a = tr();
              this.PT = new aqc();
              this.wEb = S5(
                () =>
                  [...this.Ah.get().keys()].sort((c, d) =>
                    this.props.sheet.layout.rows.se(c, d)
                  ),
                { equals: __c.$l() }
              );
              this.uEb = S5(
                () =>
                  [...this.U8.get().keys()].sort((c, d) =>
                    this.props.sheet.layout.cols.se(c, d)
                  ),
                { equals: __c.$l() }
              );
              this.Zma = L5(() =>
                F5(this.props.Obb, {
                  Ah: this.wEb,
                  vEb: this.uEb,
                  imb: this.PT.rmb,
                  range: this.props.range,
                })
              );
              this.Ah = S5(
                () => {
                  var c;
                  const d = this.props.sheet;
                  var e = this.props.da,
                    f =
                      (c = this.hDa) === null || c === void 0
                        ? void 0
                        : c.get();
                  if (f && (f.height <= 0 || f.width <= 0)) return new Map();
                  c = this.bounds;
                  e = e.get();
                  var g = 50 * e;
                  const h = f ? f.pa.y - g : c.ac ? d.qa(c.ac) : 0;
                  f = f ? f.br.y + g : c.gd ? d.qa(c.gd) + c.gd.height : 0;
                  g = new Map();
                  for (
                    let k = c.ac;
                    k != null && c.gd != null && d.layout.rows.se(k, c.gd) <= 0;
                    k = d.layout.rows.next(k)
                  ) {
                    const l = d.qa(k);
                    if (!(l + k.height < h)) {
                      if (l > f) break;
                      g.set(k, l * e);
                    }
                  }
                  return g;
                },
                { equals: a6.shallow }
              );
              this.U8 = S5(
                () => {
                  var c;
                  const d = this.props.sheet;
                  var e = this.props.da,
                    f =
                      (c = this.hDa) === null || c === void 0
                        ? void 0
                        : c.get();
                  if (f && (f.height <= 0 || f.width <= 0)) return new Map();
                  c = this.bounds;
                  e = e.get();
                  var g = 50 * e;
                  const h = f ? f.pa.x - g : c.Wb ? d.ra(c.Wb) : 0;
                  f = f ? f.br.x + g : c.Pc ? d.ra(c.Pc) + c.Pc.width : 0;
                  g = new Map();
                  for (
                    let k = c.Wb;
                    k != null && c.Pc != null && d.layout.cols.se(k, c.Pc) <= 0;
                    k = d.layout.cols.next(k)
                  ) {
                    const l = d.ra(k);
                    if (!(l + k.width < h)) {
                      if (l > f) break;
                      g.set(k, l * e);
                    }
                  }
                  return g;
                },
                { equals: a6.shallow }
              );
            }
          }
          ({
            c: [k6, Vpc],
          } = f6(a, [], [qc], Wpc));
        })(),
        Spc)();
        var aqc = class {
            constructor() {
              this.cells = new Rpc();
              this.VAa = (a, b, c) => {
                let d = this.cells.get([a, b]);
                d == null &&
                  ((d = b6.box(void 0, { deep: !1 })),
                  this.cells.set([a, b], d));
                d.set(c);
                return () => {
                  const e = this.cells.get([a, b]);
                  e === d && (e.set(void 0), this.cells.delete([a, b]));
                };
              };
              this.rmb = (a, b) => {
                var c;
                let d = this.cells.get([a, b]);
                d == null &&
                  ((d = b6.box(void 0, { deep: !1 })),
                  this.cells.set([a, b], d));
                return (c = d.get()) === null || c === void 0 ? void 0 : c.kOa;
              };
            }
          },
          l6;
        new ((Tpc = class extends e6 {
          constructor() {
            super(l6);
            Xpc();
          }
        }),
        (() => {
          class a extends (Ypc = X5) {
            static D(b) {
              O(b, { WL: b6.shallow, Vq: S5, NLa: $5, $aa: $5.bound });
            }
            get Vq() {
              var b;
              const c =
                (b = this.props.Ep) === null || b === void 0 ? void 0 : b.get();
              if (c != null && c.length !== 0) return new __c.Jw(c);
            }
            render() {
              var b;
              return H5("div", {
                ref: fpc(
                  this.od,
                  (b = this.Vq) === null || b === void 0 ? void 0 : b.Fm
                ),
                children: [
                  F5("div", { ref: this.Vpa, className: "_5YlOqQ" }),
                  F5("div", { ref: this.Xpa, className: "_XCmKw" }),
                  this.WL.map((c) => c.pxb),
                ],
              });
            }
            componentDidMount() {
              const b = T5(
                  () => [
                    this.props.sheet,
                    this.props.U8.get(),
                    this.props.Ah.get(),
                  ],
                  ([e, f, g], h) => {
                    [h] = h || [];
                    e !== h && this.rfb();
                    this.NLa(f, g);
                  },
                  { fireImmediately: !0 }
                ),
                c = R5(() => {
                  var e = this.props,
                    f = e.da;
                  e = e.sheet;
                  const g = this.od.current;
                  g &&
                    ((f = f ? f.get() : 1),
                    (g.style.width = `${e.width * f}px`),
                    (g.style.height = `${e.height * f}px`));
                }),
                d = this.WL.map((e) => Voc(e));
              __c.gc(this, [c, b, ...d]);
            }
            rfb() {
              const b = z(this.Vpa.current),
                c = z(this.Xpa.current);
              b.innerHTML = "";
              c.innerHTML = "";
              this.bIa.length = 0;
              this.WL.length = 0;
            }
            NLa(b, c) {
              const d = z(this.Vpa.current),
                e = z(this.Xpa.current),
                f = [],
                g = new Map();
              for (const h of this.bIa)
                c.has(h.oa) ? g.set(h.oa, h) : f.push(h);
              for (const [h, k] of c)
                (c = g.get(h) || f.pop()),
                  c ||
                    ((c = new bqc(this.$aa, h)),
                    d.appendChild(c.aaa),
                    e.appendChild(c.caa),
                    this.bIa.push(c)),
                  c.update(k, h, b);
              for (const h of f) h.hide();
            }
            $aa(b, c) {
              const d = this.props.d0,
                e = this.props.sheet,
                f = this.props.container,
                g = this.props.PT;
              b = new cqc(
                this.props.WO,
                this.props.PD,
                this.props.Xh,
                d(b, c),
                e,
                b,
                c,
                f,
                g.VAa,
                this.Pda,
                this.Oda
              );
              __c.gc(this, Voc(b));
              this.WL.push(b);
              return b;
            }
            constructor(...b) {
              super(...b);
              this.od = (l6.D(this), tr());
              this.Vpa = tr();
              this.Xpa = tr();
              this.bIa = [];
              this.WL = [];
              this.Pda = d6((c) => {
                const d = this.props.Ah.get();
                return c === "first"
                  ? d.keys().next().value
                  : [...d.keys()].pop();
              });
              this.Oda = d6((c) => {
                const d = this.props.U8.get();
                return c === "first"
                  ? d.keys().next().value
                  : [...d.keys()].pop();
              });
            }
          }
          ({
            c: [l6, Xpc],
          } = f6(a, [], [qc], Ypc));
        })(),
        Tpc)();
        var bqc = class {
            static D(a) {
              O(a, { update: $5 });
            }
            update(a, b, c) {
              [this.aaa, this.caa].forEach((d) => {
                d.style.transform = `translateY(${a}px)`;
                d.classList.add("FPpqvg");
              });
              this.oa = b;
              for (const [d] of c)
                (c = this.WL.get(d)),
                  c ||
                    ((c = this.$aa(d, b)),
                    this.WL.set(d, c),
                    this.aaa.appendChild(c.$$),
                    this.caa.appendChild(c.TM)),
                  c.update(b);
            }
            hide() {
              [this.aaa, this.caa].forEach((a) => {
                a.style.transform = "translate(-1000px, -1000px) scale(0)";
              });
            }
            constructor(a, b) {
              this.$aa = a;
              this.oa = b;
              this.aaa = (bqc.D(this), document.createElement("div"));
              this.caa = document.createElement("div");
              this.WL = new Map();
            }
          },
          cqc = class {
            static D(a) {
              O(a, {
                Paa: b6.ref,
                oa: b6.ref,
                Vua: S5,
                update: $5,
                cu: S5,
                attrs: S5.struct,
                twa: S5,
                aw: S5,
                renderer: S5,
                kOa: S5.struct,
              });
            }
            get Vua() {
              if (!Uoc) return !1;
              const a = this.cu;
              return a == null ||
                a.content.ref == null ||
                a.content.ref.type !== "formula"
                ? !1
                : this.WO(this.sheet, a.content.ref.value);
            }
            update(a) {
              a !== this.oa &&
                ((this.oa = a),
                (this.rA.oa = a),
                this.nsa && this.nsa(),
                (this.nsa = this.VAa(this.oa, this.col, this)));
            }
            get pxb() {
              return this.Paa;
            }
            get cu() {
              const a = this.sheet.layout.cells.get(this.oa, this.col);
              return a ? a.ref : void 0;
            }
            get attrs() {
              const a = this.rA.attrs;
              return {
                Ag: a === null || a === void 0 ? void 0 : a.Ag,
                textAlign: a === null || a === void 0 ? void 0 : a.textAlign,
                direction: a === null || a === void 0 ? void 0 : a.direction,
                link: a === null || a === void 0 ? void 0 : a.link,
              };
            }
            get twa() {
              var a = this.rA.span;
              if (!a) return !1;
              if (a.ac === a.gd && a.Wb === a.Pc) return !0;
              var b = this.Pda("first");
              const c = this.Pda("last"),
                d = this.Oda("first"),
                e = this.Oda("last");
              if (!(b && c && d && e)) return !1;
              b =
                this.sheet.layout.rows.se(a.ac, b) >= 0 &&
                this.sheet.layout.rows.se(a.ac, c) <= 0
                  ? a.ac
                  : b;
              a =
                this.sheet.layout.cols.se(a.Wb, d) >= 0 &&
                this.sheet.layout.cols.se(a.Wb, e) <= 0
                  ? a.Wb
                  : d;
              return b === this.oa && a === this.col;
            }
            get aw() {
              const a = this.sheet,
                b = this.oa,
                c = this.col;
              if (!this.container)
                return { type: void 0, sheet: a, oa: b, column: c };
              switch (this.container.type) {
                case "fixed-page":
                  return this.container.gO(c, b);
                case "sheet-item":
                  return this.container.gO(c, b);
                case "sheet-element":
                  return this.container.gO(c, b);
                default:
                  throw new E(this.container);
              }
            }
            get renderer() {
              const a = this.cu;
              if (a && this.twa && (a.content.ref || a.Ba.ref))
                return this.PD({
                  context: { container: this.aw, attrs: this.attrs },
                  Qp: this.Dya,
                  Xh: this.Xh,
                });
            }
            get kOa() {
              this.lOa.reportObserved();
              var a = cpc(() => this.renderer);
              if (
                a &&
                ((a = a.type === "react" ? this.S5 : this.AE),
                a.childNodes.length !== 0 &&
                  ((a = a.childNodes[0]), a instanceof HTMLElement))
              )
                return { width: a.clientWidth, height: a.clientHeight };
            }
            constructor(a, b, c, d, e, f, g, h, k, l, m) {
              var n, p, q, r, t, u;
              this.WO = a;
              this.PD = b;
              this.rA = d;
              this.sheet = e;
              this.col = f;
              this.container = h;
              this.VAa = k;
              this.Pda = l;
              this.Oda = m;
              this.$$ = (cqc.D(this), document.createElement("div"));
              this.TM = document.createElement("div");
              this.uE = document.createElement("div");
              this.AE = document.createElement("div");
              this.S5 = document.createElement("div");
              this.lOa = bpc("content size atom");
              this.Dya = $5(() => this.lOa.reportChanged());
              this.oa = g;
              this.$$.className = "_2JFriw";
              this.TM.className = "imy9ug";
              this.uE.className = I5("pDMp7w", {
                _0yZ6Qg:
                  ((p = this.cu) === null || p === void 0
                    ? void 0
                    : (n = p.content.ref) === null || n === void 0
                    ? void 0
                    : n.type) !== "text3",
                qhF5uA:
                  ((r = this.cu) === null || r === void 0
                    ? void 0
                    : (q = r.content.ref) === null || q === void 0
                    ? void 0
                    : q.type) !== "text3" &&
                  ((u = this.cu) === null || u === void 0
                    ? void 0
                    : (t = u.content.ref) === null || t === void 0
                    ? void 0
                    : t.type) !== "text2",
                qxD1GA: this.Vua,
              });
              this.AE.className = "_30B9pw";
              this.uE.appendChild(this.AE);
              this.TM.appendChild(this.uE);
              this.S5.className = "G7zH2w";
              this.nsa = k(this.oa, this.col, this);
              this.Xh = (v) => F5(c, { ...v, Qp: this.Dya });
            }
          };
        var dqc, eqc, fqc, U5;
        new ((dqc = class extends e6 {
          constructor() {
            super(U5);
            eqc();
          }
        }),
        (() => {
          class a extends (fqc = X5) {
            static D(b) {
              O(b, { wda: S5 });
            }
            render() {
              const {
                WO: b,
                sheet: c,
                container: d,
                Ep: e,
                C2: f,
                PD: g,
                De: h,
                Xh: k,
                viewport: l,
                GH: m,
                G9a: n = !1,
              } = this.props;
              if (!c.layout.cols.empty && !c.layout.rows.empty)
                return F5("div", {
                  className: I5(
                    "SNkrHw",
                    c.direction === "ltr" ? "TA4X7w" : "WvuqMw",
                    { RaA0Nw: n }
                  ),
                  ...h,
                  children: F5(Zpc, {
                    WO: b,
                    PD: g,
                    Xh: k,
                    Obb: this.Zma,
                    d0: this.d0,
                    sheet: c,
                    container: d,
                    Ep: e,
                    C2: f,
                    da: this.da,
                    viewport: l,
                    GH: m,
                    wda: this.wda,
                  }),
                });
            }
            get wda() {
              var b = this.props.sheet;
              const c = {},
                d = b.view.freeze.DQ
                  ? b.layout.Td.get(b.view.freeze.DQ)
                  : void 0,
                e = b.view.freeze.yE
                  ? b.layout.Kd.get(b.view.freeze.yE)
                  : void 0,
                f = b.layout.rows.first(),
                g = b.layout.rows.last(),
                h = b.layout.cols.first(),
                k = b.layout.cols.last();
              if (f != null && g != null && h != null && k != null) {
                var l = e ? b.layout.cols.next(e) : h;
                b = d ? b.layout.rows.next(d) : f;
                d && e && (c.jMa = { range: { Wb: h, ac: f, Pc: e, gd: d } });
                d && l && (c.Q9a = { range: { Wb: l, ac: f, Pc: k, gd: d } });
                e && b && (c.nUa = { range: { Wb: h, ac: b, Pc: e, gd: g } });
                b && l && (c.J8a = { range: { Wb: l, ac: b, Pc: k, gd: g } });
                return c;
              }
            }
            get da() {
              return this.props.da ? this.props.da : S5(() => 1);
            }
            constructor(...b) {
              super(...b);
              this.Zma =
                (U5.D(this),
                L5((c) => {
                  const {
                    sheet: d,
                    Rva: e,
                    da: f,
                    G$: g = "hidden",
                  } = this.props;
                  return F5(h6, {
                    sheet: d,
                    range: c.range,
                    da: f,
                    children: F5(Ppc, {
                      ...c,
                      sheet: d,
                      da: this.da,
                      Rva: e,
                      overflow: g,
                    }),
                  });
                }));
              this.d0 = (c, d) =>
                new __c.zNa(
                  this.props.oD,
                  this.props.kA,
                  this.props.sheet,
                  c,
                  d,
                  this.da,
                  this.Au,
                  this.Cu
                );
              this.Au = (c, d) => {
                var e, f;
                return (e = (f = this.props).Au) === null || e === void 0
                  ? void 0
                  : e.call(f, this.props.sheet, c, d);
              };
              this.Cu = (c, d) => {
                var e, f;
                return (e = (f = this.props).Cu) === null || e === void 0
                  ? void 0
                  : e.call(f, this.props.sheet, c, d);
              };
            }
          }
          ({
            c: [U5, eqc],
          } = f6(a, [], [qc], fqc));
        })(),
        dqc)();
        __c.GNa = {
          Yob: function (a) {
            const b = a.yu,
              c = a.Gd,
              d = a.Ad,
              e = a.Dm,
              f = a.oD,
              g = a.kA,
              h = a.xZ;
            Boc({ iA: a.iA, vf: a.vf, qCb: a.BQ, Ua: a.Ua });
            const k = Xoc({ PD: h, oD: f, kA: g, Yy: void 0 });
            b.tna = Roc({ pq: k });
            c.$ma = Hoc({ pq: k });
            ({ Sbb: a } = Ooc({ pq: k, Be: e(), y5a: new Ipc() }));
            d.jp.sna = a;
            const { T$a: l, U$a: m, S$a: n } = Goc();
            return {
              UJa: L5((p) =>
                F5(hpc, {
                  ...p,
                  container: void 0,
                  pq: k,
                  Rbb: l,
                  Tbb: m,
                  Pbb: n,
                  Xh: ipc,
                })
              ),
            };
          },
        };
      }.call(self, self._5f74ec40302898c5a55451c9fbd04240));
    },
  },
]);
//# sourceMappingURL=sourcemaps/6e01ca24ae1edd97.js.map
