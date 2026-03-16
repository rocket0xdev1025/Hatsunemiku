(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [75067],
  {
    /***/ 711112: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(905716);
      __web_req__(635048);
      __web_req__(744054);
      self._5f74ec40302898c5a55451c9fbd04240 =
        self._5f74ec40302898c5a55451c9fbd04240 || {};
      (function (__c) {
        var z = __c.z;
        var O = __c.O;
        var Mc = __c.Mc;
        var E = __c.E;
        var w = __c.w;
        var Zd = __c.Zd;
        var Quc = function (a, b, c) {
            return new Puc(a, b, c);
          },
          Ruc = function (a) {
            var b = { element: void 0 };
            const c = new Map();
            for (const d in b) a[d].gN.forEach((e, f) => c.set(f, e));
            return {
              gN: c,
              decode: (d) => {
                const e = new Map(),
                  f = {};
                for (const g in d) {
                  const h = a[g].decode(d[g]);
                  h.DBa.forEach((k, l) => e.set(l, k));
                  f[g] = h.data;
                }
                return { DBa: e, data: f };
              },
              encode: (d) => Zd(b, (e, f) => a[f].encode(d[f])),
            };
          },
          Suc = function (a) {
            return () => a;
          },
          Tuc = function (a) {
            return a();
          },
          Uuc = function (a, b, c) {
            return new G7([a], b, c);
          },
          H7 = function (a, b, c, d) {
            return new G7([a, b], c, d);
          },
          I7 = function (a, b, c, d) {
            return new Vuc(a, b, c, d);
          },
          Wuc = function (a, b) {
            return b(a);
          },
          J7 = function (a, b) {
            return a === b || b.map((c) => a.Tva(Xuc(c)));
          },
          Zuc = function (a, b) {
            return a.Vxa(b).map((c) => new Yuc(c, (d) => d.props[b]));
          },
          Xuc = function (a) {
            w(a instanceof $uc);
            return a;
          },
          K7 = function (a) {
            const b = new WeakMap();
            return function (c) {
              let d = b.get(c);
              d == null && ((d = a.call(this, c)), b.set(c, d));
              return d;
            };
          },
          cvc = function (a, b) {
            if (a === b) return !0;
            switch (typeof a) {
              case "string":
              case "number":
              case "boolean":
              case "undefined":
                return !1;
              case "object":
                if (typeof b !== "object" || a.kind !== b.kind) return !1;
                switch (a.kind) {
                  case "array":
                    return b.kind === "array" && avc(a.items, b.items);
                  case "set":
                    var c;
                    if ((c = b.kind === "set"))
                      (a = a.items),
                        (b = b.items),
                        (c =
                          a === b
                            ? !0
                            : a.size !== b.size
                            ? !1
                            : avc([...a], [...b]));
                    return c;
                  case "map":
                    if ((c = b.kind === "map"))
                      (a = a.items),
                        (b = b.items),
                        (c =
                          a === b
                            ? !0
                            : a.size !== b.size
                            ? !1
                            : avc(
                                [...a.keys(), ...a.values()],
                                [...b.keys(), ...b.values()]
                              ));
                    return c;
                  case "record":
                    return b.kind === "record" && bvc(a.fields, b.fields);
                  case "instance":
                    return b.kind === "instance" && a.instance === b.instance;
                  default:
                    throw new E(a);
                }
              default:
                throw new E(a);
            }
          },
          avc = function (a, b) {
            if (a === b) return !0;
            if (a.length !== b.length) return !1;
            for (let c = 0; c < a.length; c++) if (!cvc(a[c], b[c])) return !1;
            return !0;
          },
          bvc = function (a, b) {
            if (a === b) return !0;
            const c = Object.keys(a),
              d = Object.keys(b),
              e = new Set([...c, ...d]);
            if (c.length !== e.size || d.length !== e.size) return !1;
            for (const f of e) if (!cvc(a[f], b[f])) return !1;
            return !0;
          },
          L7 = function (a) {
            return typeof a === "string" ? JSON.stringify(a) : String(a);
          },
          evc = function (a, b) {
            return a.map((c) => b.map((d) => dvc[0](c, d)));
          },
          gvc = function (a, b, c) {
            return b.map((d) => fvc[a](d, c));
          },
          hvc = function (a, b) {
            return new M7(new N7(new Map(b), a.vars), a.l2);
          },
          jvc = function (a, b, c) {
            for (const [e, f] of c.l2) {
              var d = f.params.map(([g, h]) => [g, a.types.evaluate(h)]);
              d = ivc(b, d, (g) => O7(a, g, f.body));
              b = new M7(b.vars, b.l2.define(e, d));
            }
            return O7(a, b, c.body);
          },
          O7 = function (a, b, c) {
            switch (c.kind) {
              case 1:
                return kvc(c.value);
              case 2:
                const f = c.args.map((q) => O7(a, b, q));
                c = c.name;
                return typeof c === "string"
                  ? b.l2.resolve(c).map((q) => lvc(q, f))
                  : mvc[c].map((q) => nvc(q, f));
              case 3:
                const g = c.args.map((q) =>
                  q.kind !== 13
                    ? new ovc(O7(a, b, q))
                    : new pvc(O7(a, b, q.nQb))
                );
                c = c.name;
                switch (c) {
                  case 0:
                  case 1:
                    var d = g.map((q) =>
                      q.Dta(
                        (r) => r.type,
                        (r) => r.type.bP()
                      )
                    );
                    return P7.union(...d)
                      .map(qvc[c])
                      .map((q) => rvc(q, g));
                  default:
                    return svc[c].map((q) => rvc(q, g));
                }
              case 4:
                d = c.name;
                var e = c.param;
                const h = c.body,
                  k = O7(a, b, c.FT);
                c = k.type.bP();
                const l = ivc(b, [[e, c]], (q) => O7(a, q, h));
                return gvc(d, c, l.resultType).map((q) => tvc(q, k, l));
              case 5:
                const m = c.entries.map(([q, r]) => [O7(a, b, q), O7(a, b, r)]);
                c = P7.union(...m.map(([q]) => q.type));
                d = P7.union(...m.map(([, q]) => q.type));
                if (!J7(c, P7.primitive))
                  throw Error(`key type is not a primitive: ${c}`);
                return evc(c, d).map((q) => uvc(q, m));
              case 6:
                const n = Zd(c.fields, (q) => O7(a, b, q));
                c = Zd(n, (q) => q.type);
                return (0, vvc[0])(c).map((q) => wvc(q, n));
              case 7:
                d = a.types.resolve(c.name);
                if (!d)
                  throw Error(`cannot instantiate unknown type: ${c.name}`);
                const p = O7(a, b, { kind: 6, fields: c.args });
                return d.Etb.map((q) => nvc(q, [p], { Co: !0 }));
              case 8:
                return (d = O7(a, b, c.base)), xvc(d, c.EUb);
              case 9:
                return yvc(b, c.name);
              case 10:
                return (
                  (d = Mc(c.defs, (q) => O7(a, b, q))), zvc(a, b, d, c.body)
                );
              case 11:
                return (
                  (d = O7(a, b, c.test).as(P7.Eh)),
                  (e = O7(a, b, c.IJb)),
                  (c = O7(a, b, c.alternate)),
                  Avc(d, e, c)
                );
              case 12:
                return O7(a, b, c.body).computed();
              default:
                throw new E(c);
            }
          },
          kvc = function (a) {
            switch (typeof a) {
              case "string":
                return Q7(P7.string, a);
              case "number":
                return Q7(P7.number, a);
              case "boolean":
                return Q7(P7.Eh, a);
              case "undefined":
                return Q7(P7.undefined, a);
              default:
                throw new E(a);
            }
          },
          xvc = function (a, b) {
            return a.map((c) =>
              Zuc(c, b).map(({ type: d, get: e }) =>
                nvc(new G7([c], d, e), [a])
              )
            );
          },
          yvc = function (a, b) {
            return a.vars.resolve(b).map((c) => R7.of(c, (d) => d.resolve(b)));
          },
          zvc = function (a, b, c, d) {
            const e = Mc(c, (g) => g.type),
              f = Mc(c, (g) => g.evaluate);
            return Bvc(O7(a, hvc(b, e), d), (g) => {
              const h = Mc(f, (k) => k(g));
              return new N7(new Map(h), g);
            });
          },
          Avc = function (a, b, c) {
            return b.map((d, e) =>
              c.map((f, g) => {
                f = P7.union(d, f);
                return R7.of(f, (h) => {
                  const k = a(h),
                    l = e(h),
                    m = g(h);
                  return () => (k() ? l() : m());
                });
              })
            );
          },
          S7 = function (a) {
            return (b) => b(a);
          },
          lvc = function ({ Oha: a, resultType: b, evaluate: c }, d) {
            if (d.length !== a.length)
              throw Error(
                `expected ${a.length} arguments, but got ${d.length}`
              );
            const e = Cvc(a, (f, g) => d[g].as(f));
            return R7.of(b, (f) => {
              const g = e.map(S7(f));
              return c(f)(...g);
            });
          },
          nvc = function ({ Oha: a, resultType: b, apply: c }, d, e) {
            if (d.length !== a.length)
              throw Error(
                `expected ${a.length} arguments, but got ${d.length}`
              );
            const f = Cvc(a, (g, h) => d[h].as(g));
            return R7.of(b, (g) => {
              g = f.map(S7(g));
              return Dvc(
                (e === null || e === void 0 ? 0 : e.Co) ? Evc(c) : c,
                g
              );
            });
          },
          rvc = function ({ Vwb: a, resultType: b, apply: c }, d) {
            let e;
            const f = d.map((g) =>
              g.bpa(
                (h) => h.as(a),
                (h) => h.as(e !== null && e !== void 0 ? e : (e = P7.FT(a)))
              )
            );
            return new R7(b, (g) => {
              const h = S7(g),
                k = f.map((l) => l.bpa(h, h));
              return () => {
                const l = [];
                k.forEach((m) => {
                  m.Dta(
                    (n) => l.push(n()),
                    (n) => l.push(...n())
                  );
                });
                return c(l);
              };
            });
          },
          tvc = function (
            { itemType: a, Mdb: b, resultType: c, reduce: d },
            e,
            f
          ) {
            const g = f.as([a], b),
              h = e.as(P7.FT(a));
            return new R7(c, (k) => {
              const l = h(k),
                m = g(k),
                n = Evc((p) => {
                  p = p.map(Suc);
                  return [p, p.map(m)];
                });
              return () => {
                const [p, q] = n(l());
                return d(p, q);
              };
            });
          },
          uvc = function (
            { keyType: a, valueType: b, resultType: c, apply: d },
            e
          ) {
            const f = e.map(([g, h]) => [g.as(a), h.as(b)]);
            return new R7(c, (g) => {
              const h = f.map(([k, l]) => [k(g), l(g)]);
              return () => d(h.map(([k, l]) => [k(), l()]));
            });
          },
          wvc = function ({ tdb: a, resultType: b, apply: c }, d) {
            const e = Object.keys(a).filter((g) => !d.hasOwnProperty(g));
            if (e.length) throw Error(`too few arguments (missing ${e})`);
            const f = Fvc(a, (g, h) => d[h].as(g));
            return new R7(b, (g) => {
              const h = Zd(f, S7(g));
              return () => {
                var k = Zd(h, Tuc);
                return c(k);
              };
            });
          },
          Q7 = function (a, b) {
            const c = Suc(b);
            return new R7(a, () => c);
          },
          Bvc = function (a, b) {
            const c = a.evaluate;
            return new R7(a.type, (d) => c(b(d)));
          },
          ivc = function (a, b, c) {
            const d = b.map((f) => f[0]),
              e = b.map((f) => f[1]);
            return Wuc(e, (f) =>
              c(hvc(a, new Map(b))).map(
                (g, h) =>
                  new Gvc(f, g, (k) => (...l) => {
                    const m = new Map(d.map((n, p) => [n, l[p]]));
                    return h(new N7(new Map(m), k));
                  })
              )
            );
          },
          Dvc = function (a, b) {
            switch (b.length) {
              case 0:
                return a;
              case 1:
                const [c] = b;
                return () => a(c());
              case 2:
                const [d, e] = b;
                return () => a(d(), e());
              default:
                return () => {
                  var f = b.map(Tuc);
                  return a(...f);
                };
            }
          },
          Evc = function (a) {
            let b;
            return (...c) => {
              if (
                b &&
                b.x9a.length === c.length &&
                b.x9a.every((e, f) => T7.Xg(e, c[f]))
              )
                return b.v;
              const d = a(...c);
              b = { x9a: c, v: d };
              return d;
            };
          },
          Fvc = function (a, b) {
            return Zd(a, b);
          },
          Cvc = function (a, b) {
            return a.map(b);
          },
          Ivc = function (a, b, c) {
            return new Hvc(a, b, c);
          },
          Jvc = function (a, b) {
            return [...a].map(b)[Symbol.iterator]();
          },
          U7 = function (a, b, c, d) {
            if (d == null) throw a.error(b.ZI(c), "not found");
            return d;
          },
          Xvc = function (a) {
            function b(r) {
              return m[r.kind](r);
            }
            const c = a.types,
              d = a.values;
            class e {
              static of(r, t, u, v, x, A) {
                return new e(r, u, v, Kvc(x, Lvc(t)), Mvc(A, Lvc(t)));
              }
              map(r) {
                return r(this);
              }
              validate(r) {
                return r
                  ? new e(
                      this.dataType,
                      this.B8,
                      this.W7,
                      Nvc(this.decode, r),
                      Kvc(this.encode, r)
                    )
                  : this;
              }
              constructor(r, t, u, v, x) {
                this.dataType = r;
                this.B8 = t;
                this.W7 = u;
                this.decode = v;
                this.encode = x;
              }
            }
            const f = e.of(
                { kind: 0 },
                "string",
                c.string,
                (r) => r,
                (r, t, u) => u.value,
                (r, t, u) => ({ type: "string", value: u })
              ),
              g = e.of(
                { kind: 1 },
                "boolean",
                c.Eh,
                (r) => r,
                (r, t, u) => u.value,
                (r, t, u) => ({ type: "boolean", value: u })
              ),
              h = e
                .of(
                  { kind: 2 },
                  "double",
                  c.number,
                  (r) => r,
                  (r, t, u) => u.value,
                  (r, t, u) => ({ type: "double", value: u })
                )
                .validate((r, t, u) => {
                  if (!Number.isFinite(u))
                    throw r.error(t, `number is not finite: ${u}`);
                }),
              k = e
                .of(
                  { kind: 3 },
                  "int32",
                  c.number,
                  (r) => r,
                  (r, t, u) => u.value,
                  (r, t, u) => ({ type: "int32", value: u })
                )
                .validate((r, t, u) => {
                  if (!Number.isInteger(u) || u < -2147483648 || u > 2147483647)
                    throw r.error(t, `number is not an int32: ${u}`);
                }),
              l = {
                Ref: e.of(
                  { kind: 7, name: "Ref" },
                  "ref",
                  c.instance("Ref"),
                  (r) => d.instance("Ref", r),
                  (r, t, u) => u.value,
                  (r, t, u) => ({ type: "ref", value: u })
                ),
                Fill: e.of(
                  { kind: 7, name: "Fill" },
                  "fill",
                  c.instance("Fill"),
                  (r) => d.instance("Fill", r),
                  (r, t, u) => u.value,
                  (r, t, u) => ({ type: "fill", value: u })
                ),
                Stroke: e.of(
                  { kind: 7, name: "Stroke" },
                  "stroke",
                  c.instance("Stroke"),
                  (r) => d.instance("Stroke", r),
                  (r, t, u) => u.value,
                  (r, t, u) => ({ type: "stroke", value: u })
                ),
                Richtext2: e.of(
                  { kind: 7, name: "Richtext2" },
                  "text2",
                  c.instance("Richtext2"),
                  (r) => d.instance("Richtext2", r),
                  (r, t, u) => u.value,
                  (r, t, u) => ({ type: "text2", value: u })
                ),
              },
              m = {
                [0]: (r) => f.validate(Ovc(r.QK)),
                [1]: () => g,
                [2]: (r) => h.validate(Pvc(r.range)),
                [3]: (r) => k.validate(Pvc(r.range)),
                [4]: (r) =>
                  e
                    .of(
                      { kind: 4, values: r.values },
                      Qvc,
                      c.primitive,
                      (t) => t,
                      (t, u, v) => v.value,
                      (t, u, v) => {
                        a: switch (typeof v) {
                          case "string":
                            t = { type: "string", value: v };
                            break a;
                          case "boolean":
                            t = { type: "boolean", value: v };
                            break a;
                          case "number":
                            t = { type: "int32", value: v };
                            break a;
                          default:
                            throw new E(v);
                        }
                        return t;
                      }
                    )
                    .validate(Rvc(r.values)),
                [5]: (r) => {
                  const {
                    dataType: t,
                    B8: u,
                    W7: v,
                    decode: x,
                    encode: A,
                  } = b(r.itemType);
                  return e.of(
                    { kind: 5, itemType: t },
                    "list",
                    c.array(u),
                    (B) => d.array(B.map(v)),
                    (B, C, D) =>
                      D.value.toArray().map((I, L) => x(B, C.fO(L), I)),
                    (B, C, D) => ({
                      type: "list",
                      value: D.map((I, L) => A(B, C.fO(L), I)),
                    })
                  );
                },
                [6]: (r) => {
                  const {
                    dataType: t,
                    B8: u,
                    W7: v,
                    decode: x,
                    encode: A,
                  } = b(r.itemType);
                  return e.of(
                    { kind: 6, itemType: t },
                    "dict",
                    c.map(c.string, u),
                    (B) => d.map(Mc(B, v)),
                    (B, C, D) => Mc(D.value.wk(), (I, L) => x(B, C.W1(L), I)),
                    (B, C, D) => ({
                      type: "dict",
                      value: Mc(D, (I, L) => A(B, C.W1(L), I)),
                    })
                  );
                },
                [7]: (r) => l[r.name],
                [8]: (r) => {
                  const { dataType: t, decode: u, encode: v } = b(r.itemType);
                  return e.of(
                    { kind: 8, itemType: t },
                    "list",
                    c.undefined,
                    () => {},
                    (x, A, B) =>
                      Quc(
                        B.value,
                        (C) => v(x, A.fO("*"), C),
                        Svc(u, x, A.fO("*"))
                      ),
                    (x, A, B) => ({
                      type: "list",
                      value: B.map((C, D) => v(x, A.fO(D), C)),
                    })
                  );
                },
                [9]: (r) => {
                  const { dataType: t, decode: u, encode: v } = b(r.itemType);
                  return e.of(
                    { kind: 9, itemType: t },
                    "dict",
                    c.undefined,
                    () => {},
                    (x, A, B) =>
                      Ivc(
                        B.value,
                        (C) => v(x, A.W1("*"), C),
                        Svc(u, x, A.fO("*"))
                      ),
                    (x, A, B) => ({
                      type: "dict",
                      value: Mc(B, (C, D) => v(x, A.W1(D), C)),
                    })
                  );
                },
                [10]: (r) => {
                  const { decode: t, encode: u } = p.dXa(r.fields);
                  return e.of(
                    { kind: 10, fields: r.fields },
                    "dict",
                    c.undefined,
                    () => {},
                    t,
                    u
                  );
                },
                [11]: (r) => {
                  function t(I, L, J, M) {
                    J = J.get(M);
                    if (J == null)
                      throw I.error(
                        L,
                        `unknown case for discriminator value: ${M}`
                      );
                    return J;
                  }
                  const u = r.AQa;
                  r = r.Uf;
                  var v = Object.keys(u);
                  w(v.length >= 1, "missing discriminator props");
                  w(v.length <= 1, "too many discriminator props: {}", v);
                  const x = v[0];
                  w(r.length >= 1, "discriminated union has no cases");
                  v = new Map();
                  for (const I of r) {
                    const L = I.fields[x].type.values,
                      J = b(I);
                    for (const M of L)
                      w(
                        !v.has(M),
                        "discriminator values are not unique across cases: {}",
                        M
                      ),
                        v.set(M, J);
                  }
                  const { decode: A, encode: B } = b({
                      kind: 4,
                      values: new Set(v.keys()),
                    }),
                    C = Mc(v, (I) => I.decode),
                    D = Mc(v, (I) => I.encode);
                  return e.of(
                    { kind: 11, AQa: u, Uf: r },
                    "dict",
                    c.undefined,
                    () => {},
                    (I, L, J) => {
                      var M = U7(I, L, "k", J.value.get("k"));
                      J = U7(I, L, "v", J.value.get("v"));
                      Tvc(I, L, "dict", J);
                      M = A(I, L, M);
                      return t(I, L, C, M)(I, L, J);
                    },
                    (I, L, J) => {
                      const M = J[x],
                        P = t(I, L, D, M);
                      return {
                        type: "dict",
                        value: new Map([
                          ["k", B(I, L, M)],
                          ["v", P(I, L, J)],
                        ]),
                      };
                    }
                  );
                },
              },
              n = Symbol("$impl");
            class p {
              static dXa(r) {
                r = Zd(r, (v) => q.of(v));
                const t = Zd(r, (v) => v.KCb()),
                  u = Object.entries(r);
                return {
                  gN: new Map(u.map(([, v]) => v.FCb())),
                  LCb: (v) => {
                    const x = v[n];
                    return new Map(u.map(([, A]) => A.MCb(x)));
                  },
                  decode: (v, x, A) => {
                    const B = Object.create(null, t);
                    Object.defineProperty(B, n, {
                      enumerable: !1,
                      writable: !1,
                      value: new p(v, x, A.value),
                    });
                    return B;
                  },
                  encode: (v, x, A) => {
                    const B = u.map(([C, D]) => D.encode(v, x, A[C]));
                    return { type: "dict", value: new Map(B.filter(__c.rb)) };
                  },
                };
              }
              xTa(r, t) {
                const u = U7(this.e, this.p, t, this.data.get(t));
                return Uvc(this.ZRa, r.decode, this.e, this.p.ZI(t), u);
              }
              qTa(r, t) {
                const u = this.data.get(t);
                if (u != null)
                  return Uvc(this.ZRa, r.decode, this.e, this.p.ZI(t), u);
              }
              vAb(r, t, u) {
                this.data.set(t, r.encode(this.e, this.p.ZI(t), u));
              }
              rAb(r, t, u) {
                u != null
                  ? this.data.set(t, r.encode(this.e, this.p.ZI(t), u))
                  : this.data.delete(t);
              }
              constructor(r, t, u) {
                this.e = r;
                this.p = t;
                this.data = u;
                this.ZRa = new WeakMap();
              }
            }
            class q {
              static of(r) {
                return new q(r, b(r.type));
              }
              FCb() {
                const r = this.key,
                  t = this.zb,
                  u = this.type;
                switch (t.HK) {
                  case 0:
                    return [r, u.B8];
                  case 1:
                    return [r, c.optional(u.B8)];
                  default:
                    throw new E(t.HK);
                }
              }
              MCb(r) {
                const t = this.key,
                  u = this.zb,
                  v = this.type;
                switch (u.HK) {
                  case 0:
                    return [t, () => v.W7(r.xTa(v, t))];
                  case 1:
                    return [
                      t,
                      () => {
                        const x = r.qTa(v, t);
                        return x != null ? v.W7(x) : void 0;
                      },
                    ];
                  default:
                    throw new E(u.HK);
                }
              }
              KCb() {
                const r = this.key,
                  t = this.zb,
                  u = this.type;
                let v;
                switch (t.HK) {
                  case 0:
                    v = {
                      enumerable: !0,
                      get() {
                        return this[n].xTa(u, r);
                      },
                      set(x) {
                        this[n].vAb(u, r, x);
                      },
                    };
                    break;
                  case 1:
                    v = {
                      enumerable: !0,
                      get() {
                        return this[n].qTa(u, r);
                      },
                      set(x) {
                        this[n].rAb(u, r, x);
                      },
                    };
                    break;
                  default:
                    throw new E(t.HK);
                }
                switch (t.aDa) {
                  case 0:
                    v.set = void 0;
                    break;
                  case 1:
                    break;
                  default:
                    throw new E(t.aDa);
                }
                return v;
              }
              encode(r, t, u) {
                const v = this.key,
                  x = this.zb,
                  A = this.type;
                switch (x.HK) {
                  case 0:
                    return [v, A.encode(r, t.ZI(v), U7(r, t, v, u))];
                  case 1:
                    return u != null ? [v, A.encode(r, t.ZI(v), u)] : void 0;
                  default:
                    throw new E(x.HK);
                }
              }
              constructor(r, t) {
                this.zb = r;
                this.type = t;
                r = r.key;
                w(r > 0 && Number.isInteger(r));
                if (r <= 52)
                  r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"[
                    r - 1
                  ];
                else {
                  for (t = ""; r > 0; )
                    r--,
                      (t =
                        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"[
                          r % 52
                        ] + t),
                      (r = Math.floor(r / 52));
                  r = t;
                }
                this.key = r;
              }
            }
            return (r, t) => {
              const u = new Vvc(r),
                v = new Wvc(),
                { gN: x, LCb: A, decode: B, encode: C } = p.dXa(t);
              return {
                gN: x,
                decode: (D) => {
                  D = B(u, v, { type: "dict", value: D });
                  return { DBa: A(D), data: D };
                },
                encode: (D) => C(u, v, D).value,
              };
            };
          },
          Svc = function (a, b, c) {
            const d = new WeakMap();
            return (e) => Uvc(d, a, b, c, e);
          },
          Uvc = function (a, b, c, d, e) {
            let f = a.get(e);
            f == null && ((f = b(c, d, e)), a.set(e, f));
            return f;
          },
          Kvc = function (a, b) {
            return (c, d, e) => {
              b(c, d, e);
              return a(c, d, e);
            };
          },
          Nvc = function (a, b) {
            return (c, d, e) => {
              e = a(c, d, e);
              b(c, d, e);
              return e;
            };
          },
          Mvc = function (a, b) {
            var c = Yvc();
            return (d, e, f) => {
              f = a(d, e, f);
              b(d, e, f);
              c(d, e, f);
              return f;
            };
          },
          Tvc = function (a, b, c, d) {
            if (d.type !== c)
              throw a.error(b, `type error: expected ${c}, was ${d.type}`);
          },
          Lvc = function (a) {
            return typeof a === "string"
              ? (b, c, d) => Tvc(b, c, a, d)
              : (b, c, d) => {
                  if (!a.has(d.type))
                    throw b.error(
                      c,
                      `type error: expected one of ${[...a].join(
                        " or "
                      )}, was ${d.type}`
                    );
                };
          },
          Yvc = function () {
            return (a, b, c) => {
              if (typeof c.value !== Zvc[c.type])
                throw a.error(
                  b,
                  `type error: expected ${c.type}, was ${typeof c.value}`
                );
            };
          },
          Rvc = function (a) {
            return (b, c, d) => {
              if (!a.has(d))
                throw b.error(
                  c,
                  `expected one of ${[...a].join(" or ")}, was ${d}`
                );
            };
          },
          Pvc = function (a) {
            if (a) {
              var b = a.min,
                c = a.max;
              w(b == null || c == null || b <= c);
              return (d, e, f) => {
                if (b != null && f < b)
                  throw d.error(e, `value below min ${b}: ${f}`);
                if (c != null && f > c)
                  throw d.error(e, `value above max ${b}: ${f}`);
              };
            }
          },
          Ovc = function (a) {
            if (a)
              return (b, c, d) => {
                if (!a.test(d))
                  throw b.error(c, `value does not match regex ${a}: '${d}'`);
              };
          },
          bwc = function () {
            return new $vc({})
              .add((a, b) => ({
                Ref: new a(
                  "Ref",
                  { type: b.string, id: b.string, version: b.number },
                  (c) => {
                    let d;
                    switch (c.type) {
                      case "FONT":
                        d = 0;
                        break;
                      case "MEDIA":
                        d = 1;
                        break;
                      case "VIDEO":
                        d = 2;
                        break;
                      case "AUDIO":
                        d = 3;
                        break;
                      case "EMBED":
                        d = 4;
                        break;
                      default:
                        throw Error(`Invalid resource type: ${c.type}`);
                    }
                    return { type: d, id: c.id, version: c.version };
                  }
                ),
              }))
              .add((a, b) => ({
                Fill: new a("Fill", { color: b.string }, (c) =>
                  __c.aM.create({ ...__c.OC, color: c.color })
                ),
              }))
              .add((a, b) => ({
                Stroke: new a(
                  "Stroke",
                  {
                    color: b.string,
                    weight: b.number,
                    Oc: b.array(b.number),
                    te: b.Eh,
                  },
                  (c) =>
                    __c.yw.create({
                      ...__c.VQ,
                      color: c.color,
                      weight: c.weight,
                      Oc: c.Oc.items,
                      te: c.te,
                    })
                ),
              }))
              .add((a, b) => ({
                Richtext2: new a(
                  "Richtext2",
                  {
                    Llb: b.array(
                      b.Kc({ kb: b.string, attrs: b.map(b.string, b.string) })
                    ),
                  },
                  (c) => {
                    c = c.Llb;
                    const d = __c.Ji.xb();
                    c.items.forEach((e) => {
                      const f = e.fields.kb;
                      d.attrs(__c.wf(e.fields.attrs.items));
                      d.kb(f);
                    });
                    return __c.Ji.create(d.build());
                  }
                ),
              }))
              .add((a, b) => ({
                Path: new a(
                  "Path",
                  {
                    d: b.string,
                    fill: b.instance("Fill"),
                    stroke: b.union(b.instance("Stroke"), b.undefined),
                  },
                  (c) => {
                    const d = c.stroke,
                      e = c.fill;
                    c = __c.QM.create({ ...__c.iR, d: c.d, fill: __c.OC });
                    Object.defineProperties(c, {
                      fill: { value: e.instance },
                      stroke: { value: awc(d) },
                    });
                    return c;
                  }
                ),
              }))
              .add((a, b) => ({
                RectElement: new a(
                  "RectElement",
                  {
                    top: b.number,
                    left: b.number,
                    width: b.number,
                    height: b.number,
                    rotation: b.union(b.number, b.undefined),
                    fill: b.instance("Fill"),
                    S: b.union(b.array(b.number), b.undefined),
                    stroke: b.union(b.instance("Stroke"), b.undefined),
                  },
                  (c) => {
                    var d;
                    const e = c.stroke;
                    var f, g;
                    const h = __c.Gy.create({
                      ...__c.NC,
                      top: c.top,
                      left: c.left,
                      width: c.width,
                      height: c.height,
                      rotation:
                        (f = c.rotation) !== null && f !== void 0
                          ? f
                          : __c.NC.rotation,
                      fill: __c.OC,
                      S:
                        (g =
                          (d = c.S) === null || d === void 0
                            ? void 0
                            : d.items) !== null && g !== void 0
                          ? g
                          : __c.NC.S,
                    });
                    Object.defineProperties(h, {
                      fill: { value: c.fill.instance },
                      stroke: { value: awc(e) },
                    });
                    return h;
                  }
                ),
              }))
              .add((a, b) => ({
                ShapeElement: new a(
                  "ShapeElement",
                  {
                    top: b.number,
                    left: b.number,
                    width: b.number,
                    height: b.number,
                    rotation: b.union(b.number, b.undefined),
                    ya: b.union(b.number, b.undefined),
                    viewBox: b.Kc({
                      top: b.number,
                      left: b.number,
                      width: b.number,
                      height: b.number,
                    }),
                    fb: b.array(b.instance("Path")),
                  },
                  (c) => {
                    var d, e;
                    const f = __c.Hy.create({
                      ...__c.hR,
                      top: c.top,
                      left: c.left,
                      width: c.width,
                      height: c.height,
                      rotation:
                        (d = c.rotation) !== null && d !== void 0
                          ? d
                          : __c.hR.rotation,
                      ya: (e = c.ya) !== null && e !== void 0 ? e : __c.hR.ya,
                      fb: [],
                      viewBox: c.viewBox.fields,
                    });
                    Object.defineProperties(f, {
                      fb: {
                        value: new __c.q0(
                          c.fb.items.map((g) => V7(() => g.instance))
                        ),
                      },
                    });
                    return f;
                  }
                ),
              }));
          },
          awc = function (a) {
            return (
              a && {
                ref: a.instance,
                set() {
                  throw Error(
                    "Replacing of stroke on a model unit is not yet supported"
                  );
                },
              }
            );
          },
          dwc = function (a, b) {
            const c = __c.uh(b);
            __c.y(c.type !== "body", "Unexpected body context.");
            switch (c.type) {
              case "fixed-page":
                return { page: a.Mk.fTa(c), O: new cwc(b), wh: a.wh };
              case "concatenated-fixed-page":
                return { page: a.Mk.WSa(c), O: new cwc(b), wh: a.wh };
              case "responsive-page":
                return { page: a.Mk.yTa(c), O: new cwc(b), wh: a.wh };
              default:
                throw new E(c);
            }
          },
          ewc = function (a, b, c) {
            return Zd(b, (d) => (...e) => {
              const {
                data: f,
                O: { width: g, height: h },
              } = d(...e);
              e = c.element.encode(f.element);
              return {
                Lc: { ...__c.Qxb, app: { id: a, version: 1 } },
                Wd: e,
                Hh: { width: g, height: h },
              };
            });
          },
          gwc = function (a, b) {
            return class extends fwc {
              componentDidCatch(c) {
                a.error(c);
                this.setState({ hasError: !0 });
              }
              render() {
                return this.state.hasError
                  ? W7(__c.Ss, {
                      background: "criticalLow",
                      width: "full",
                      height: "full",
                      padding: "0.25u",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      role: "alert",
                      children: W7(__c.Ps, {
                        size: "xsmall",
                        alignment: "center",
                        children: __c.N("Q6XSow"),
                      }),
                    })
                  : W7(b, { ...this.props });
              }
              constructor(...c) {
                super(...c);
                this.state = { hasError: !1 };
              }
            };
          },
          kwc = function (a, b, c, d, e) {
            const f = (k) => ({ element: k.G.Wd }),
              g = (k) => {
                let l = d.get(k);
                l == null && ((l = e ? e() : void 0), d.set(k, l));
                return l;
              },
              h = Ruc(b);
            switch (c.type) {
              case 0:
                const k = c.ew;
                return typeof k === "object"
                  ? ((b = a.wY.types),
                    (b = b.FT(
                      b.union(
                        b.instance("RectElement"),
                        b.instance("ShapeElement")
                      )
                    )),
                    hwc(
                      a,
                      f,
                      h,
                      b,
                      k,
                      (m) => new __c.p0(() => m().map((n) => n.instance))
                    ))
                  : {
                      type: 0,
                      ew: (m) => {
                        const { element: n } = h.decode({
                          element: m.G.Wd,
                        }).data;
                        return k({ element: n, local: g(m) }, dwc(a.k$a, m));
                      },
                    };
              case 1:
                const l = c.Component;
                return {
                  type: 1,
                  Component: gwc(
                    a.K,
                    iwc(({ model: m }) => {
                      const [n] = jwc(() => {
                        const { element: p } = h.decode({
                          element: m.G.Wd,
                        }).data;
                        return { element: p, local: g(m) };
                      });
                      return W7(l, { data: n, Nn: a.Nn, xi: dwc(a.k$a, m) });
                    })
                  ),
                };
              default:
                throw new E(c);
            }
          },
          hwc = function (a, b, c, d, e, f) {
            const g = a.Xqa(a.wY, c, d).compile(e);
            return { type: 0, ew: (h) => ({ La: f(g(b(h))) }) };
          },
          mwc = function (a) {
            return { gN: a.gN, decode: lwc(a.decode), encode: a.encode };
          },
          lwc = function (a) {
            const b = new WeakMap();
            return (c) => {
              let d = b.get(c);
              d || ((d = a(c)), b.set(c, d));
              return d;
            };
          },
          Puc = class {
            static D(a) {
              O(a, { z4: __c.o0 });
            }
            get z4() {
              const a = new Map();
              this.base.forEach((b) => a.set(this.Lf(b), b));
              return a;
            }
            Xs(a) {
              return z(this.z4.get(a));
            }
            nW(a) {
              return a != null ? this.Lf(a) : void 0;
            }
            get empty() {
              return this.base.empty;
            }
            count() {
              return this.base.count();
            }
            toArray() {
              return this.base.toArray().map(this.Lf);
            }
            wk() {
              return Mc(this.base.wk(), this.Lf);
            }
            [__c.Aac]() {
              return this.toArray()[Symbol.iterator]();
            }
            first(a) {
              return this.nW(this.base.first(a && ((b) => a(this.Lf(b)))));
            }
            last(a) {
              return this.nW(this.base.last(a && ((b) => a(this.Lf(b)))));
            }
            next(a, b) {
              return this.nW(
                this.base.next(this.Xs(a), b && ((c) => b(this.Lf(c))))
              );
            }
            previous(a, b) {
              return this.nW(
                this.base.previous(this.Xs(a), b && ((c) => b(this.Lf(c))))
              );
            }
            se(a, b) {
              return this.base.se(this.Xs(a), this.Xs(b));
            }
            Iu(a) {
              return this.base.Iu(this.Xs(a));
            }
            has(a) {
              return this.base.has(this.Xs(a));
            }
            set(a, b) {
              return this.Lf(this.base.set(a, this.SF(b)));
            }
            replace(a, b) {
              return this.Lf(this.base.replace(this.Xs(a), this.SF(b)));
            }
            append(a) {
              return this.Lf(this.base.append(this.SF(a)));
            }
            prepend(a) {
              return this.Lf(this.base.prepend(this.SF(a)));
            }
            zF(a, b) {
              return this.Lf(this.base.zF(a && this.Xs(a), this.SF(b)));
            }
            insertBefore(a, b) {
              return this.Lf(
                this.base.insertBefore(a && this.Xs(a), this.SF(b))
              );
            }
            hC(a, b) {
              return this.base.hC(a && this.Xs(a), b.map(this.SF)).map(this.Lf);
            }
            delete(a) {
              this.base.delete(this.Xs(a));
            }
            Ey(a) {
              this.base.Ey(a && ((b) => a(this.Lf(b))));
            }
            Pp(a, b) {
              this.base.Pp(a && this.Xs(a), this.Xs(b));
            }
            Sq(a) {
              return new __c.fJ(this, a);
            }
            map(a) {
              return this.base.map((b, c) => a(this.Lf(b), c));
            }
            flatMap(a) {
              return this.base.flatMap((b, c) => a(this.Lf(b), c));
            }
            filter(a) {
              return this.base.filter((b, c) => a(this.Lf(b), c)).map(this.Lf);
            }
            forEach(a) {
              this.base.forEach((b, c) => a(this.Lf(b), c));
            }
            reduce(a, b) {
              return this.base.reduce((c, d) => a(c, this.Lf(d)), b);
            }
            some(a) {
              return this.base.some((b) => a(this.Lf(b)));
            }
            every(a) {
              return this.base.every((b) => a(this.Lf(b)));
            }
            constructor(a, b, c) {
              this.base = a;
              this.SF = b;
              this.Lf = c;
              Puc.D(this);
            }
          },
          nwc = __webpack_require__(400770),
          owc = nwc.comparer,
          V7 = nwc.computed,
          pwc = nwc.observable;
        var X7 = __webpack_require__(206928).iB;
        var W7 = __webpack_require__(31968).jsx;
        var qwc = __webpack_require__(845212),
          iwc = qwc.memo,
          fwc = qwc.PureComponent,
          jwc = qwc.useState;
        var G7 = class {
            static of(a, b, c) {
              return new G7(a, b, c);
            }
            map(a) {
              return a(this);
            }
            constructor(a, b, c) {
              this.Oha = a;
              this.resultType = b;
              this.apply = c;
            }
          },
          swc = class {
            map(a) {
              return a(this);
            }
            constructor(a, b) {
              var c = rwc;
              this.tdb = a;
              this.resultType = b;
              this.apply = c;
            }
          },
          Y7 = class {
            map(a) {
              return a(this);
            }
            constructor(a, b, c) {
              this.Vwb = a;
              this.resultType = b;
              this.apply = c;
            }
          },
          uwc = class {
            map(a) {
              return a(this);
            }
            constructor(a, b, c) {
              var d = twc;
              this.keyType = a;
              this.valueType = b;
              this.resultType = c;
              this.apply = d;
            }
          },
          Vuc = class {
            map(a) {
              return a(this);
            }
            constructor(a, b, c, d) {
              this.itemType = a;
              this.Mdb = b;
              this.resultType = c;
              this.reduce = d;
            }
          };
        var Yuc = class {
          map(a) {
            return a(this);
          }
          constructor(a, b) {
            this.type = a;
            this.get = b;
          }
        };
        var vwc = class {},
          ovc = class extends vwc {
            bpa(a) {
              return new ovc(a(this.value));
            }
            Dta(a) {
              return a(this.value);
            }
            constructor(a) {
              super();
              this.value = this.value = a;
            }
          },
          pvc = class extends vwc {
            bpa(a, b) {
              return new pvc(b(this.value));
            }
            Dta(a, b) {
              return b(this.value);
            }
            constructor(a) {
              super();
              this.value = this.value = a;
            }
          };
        var $uc = class {
            map(a) {
              return a(this);
            }
          },
          Z7 = class extends $uc {
            Tva(a) {
              return this === a || a.vDa((b) => this.C3(b));
            }
            bP() {
              throw Error(`${this} is not iterable`);
            }
            Vxa(a) {
              var b;
              const c =
                (b = this.propTypes) !== null && b !== void 0
                  ? b
                  : (this.propTypes = this.Sfa());
              if (!c) throw Error(`${this} is not navigable"`);
              if (!c.hasOwnProperty(a))
                throw Error(`${this} has no navigable property "${a}"`);
              return c[a];
            }
            Sfa() {
              throw Error(`${this} is not navigable`);
            }
            Mta(a) {
              a(this);
            }
            vDa(a) {
              return a(this);
            }
            constructor() {
              super();
              this.kind = "simple";
              this.propTypes = void 0;
            }
          },
          $7 = class extends Z7 {
            C3(a) {
              return a instanceof $7 && this.name === a.name;
            }
            toString() {
              return this.name;
            }
            constructor(a) {
              super();
              this.name = a;
            }
          },
          wwc = class extends Z7 {
            C3(a) {
              return a instanceof wwc && this.FE === a.FE;
            }
            toString() {
              return this.FE.name;
            }
            constructor(a) {
              super();
              this.FE = a;
            }
          },
          xwc = class extends Z7 {
            C3(a) {
              return (
                a instanceof xwc && this.FE === a.FE && J7(this.arg, a.arg)
              );
            }
            toString() {
              return `${this.FE}<${this.arg}>`;
            }
            constructor(a, b) {
              super();
              this.FE = a;
              this.arg = b;
            }
          },
          ywc = class extends xwc {
            bP() {
              return this.arg;
            }
            Sfa() {
              const a = this.arg;
              return {
                size: P7.number,
                empty: P7.Eh,
                get first() {
                  return P7.optional(a);
                },
              };
            }
            constructor(a) {
              super("array", a);
            }
          },
          zwc = class extends xwc {
            bP() {
              return this.arg;
            }
            Sfa() {
              const a = this.arg;
              return {
                size: P7.number,
                empty: P7.Eh,
                get first() {
                  return P7.optional(a);
                },
              };
            }
            constructor(a) {
              super("set", a);
            }
          },
          Awc = class extends Z7 {
            C3(a) {
              return (
                a instanceof Awc &&
                J7(this.key, a.key) &&
                J7(this.value, a.value)
              );
            }
            toString() {
              return `map<${this.key}, ${this.value}>`;
            }
            constructor(a, b) {
              super();
              this.key = a;
              this.value = b;
            }
          },
          Bwc = class extends Z7 {
            C3(a) {
              return a instanceof Bwc
                ? Object.entries(a.fields).every(
                    ([b, c]) =>
                      this.fields.hasOwnProperty(b) && J7(this.fields[b], c)
                  )
                : !1;
            }
            Sfa() {
              return this.fields;
            }
            toString() {
              const a = Object.entries(this.fields);
              return a.length
                ? `{ ${a.map(([b, c]) => `${b}: ${c}`).join(", ")} }`
                : "{}";
            }
            constructor(a) {
              super();
              this.fields = a;
            }
          },
          a8 = class extends $uc {
            Tva(a) {
              return this === a || this.Uf.every((b) => b.Tva(a));
            }
            bP() {
              return P7.union(...this.Uf.map((a) => a.bP()));
            }
            Vxa(a) {
              return P7.union(...this.Uf.map((b) => b.Vxa(a)));
            }
            Mta(a) {
              this.Uf.forEach((b) => b.Mta(a));
            }
            vDa(a) {
              return this.Uf.some((b) => b.vDa(a));
            }
            toString() {
              return this.Uf.length
                ? this.Uf.map((a) => a.toString()).join(" | ")
                : "never";
            }
            constructor(a) {
              super();
              this.Uf = a;
              this.kind = "disjunction";
              w(a.length !== 1);
            }
          },
          Cwc = new a8([]),
          Dwc = new $7("string"),
          Ewc = new $7("number"),
          Fwc = new $7("boolean"),
          Gwc = new $7("undefined"),
          Hwc = new a8([Dwc, Ewc, Fwc]),
          Iwc = class {
            get never() {
              return Cwc;
            }
            get string() {
              return Dwc;
            }
            get number() {
              return Ewc;
            }
            get Eh() {
              return Fwc;
            }
            get undefined() {
              return Gwc;
            }
            get primitive() {
              return Hwc;
            }
            optional(a) {
              return P7.union(a, P7.undefined);
            }
            array(a) {
              return new ywc(a);
            }
            set(a) {
              return new zwc(a);
            }
            FT(a) {
              return new a8([new ywc(a), new zwc(a)]);
            }
            map(a, b) {
              return new Awc(a, b);
            }
            Kc(a) {
              return new Bwc({ ...a });
            }
            union(...a) {
              if (a.length === 0) return Cwc;
              if (a.length === 1) return a[0];
              const b = new Set();
              for (const d of a) Xuc(d).Mta((e) => b.add(e));
              a = [...b];
              if (a.length === 0) return Cwc;
              if (a.length === 1) return a[0];
              if (a.length === 2) {
                const [d, e] = a;
                return J7(d, e) ? e : J7(e, d) ? d : new a8(a);
              }
              const c = new Set();
              for (const d of a)
                [...c].some((e) => J7(d, e)) ||
                  (c.forEach((e) => J7(e, d) && c.delete(e)), c.add(d));
              return c.size === 1 ? [...c][0] : new a8([...c]);
            }
            constructor() {
              this.optional = K7(this.optional);
              this.array = K7(this.array);
              this.set = K7(this.set);
              this.FT = K7(this.FT);
            }
          },
          Jwc = class extends Iwc {
            instance(a) {
              return new wwc(a);
            }
          },
          P7 = new Jwc(),
          Kwc = class extends Iwc {
            instance(a) {
              return new wwc(z(this.classes[a]));
            }
            constructor(a) {
              super();
              this.classes = a;
            }
          };
        var Lwc,
          Mwc,
          b8 = Symbol("value"),
          Nwc = class {
            get props() {
              var a;
              return (a = this.Fcb) !== null && a !== void 0
                ? a
                : (this.Fcb = this.Aoa());
            }
          },
          Owc = class {
            get size() {
              return this[b8].length;
            }
            get empty() {
              return this[b8].length === 0;
            }
            get first() {
              return this[b8][0];
            }
            constructor(a) {
              this[b8] = a;
            }
          };
        Lwc = Symbol.iterator;
        var Pwc = class extends Nwc {
            Aoa() {
              return new Owc(this.items);
            }
            map(a) {
              return this.items.map(a);
            }
            [Lwc]() {
              return this.items[Symbol.iterator]();
            }
            toString() {
              return this.items.length
                ? `[${Array.from(this.items, L7).join(", ")}]`
                : "[]";
            }
            constructor(a) {
              super();
              this.kind = "array";
              this.items = [...a];
            }
          },
          Qwc = class {
            get size() {
              return this[b8].size;
            }
            get empty() {
              return this[b8].size === 0;
            }
            get first() {
              return this[b8][Symbol.iterator]().next().value;
            }
            constructor(a) {
              this[b8] = a;
            }
          };
        Mwc = Symbol.iterator;
        var Rwc = class extends Nwc {
            Aoa() {
              return new Qwc(this.items);
            }
            map(a) {
              return Array.from(this.items, a);
            }
            [Mwc]() {
              return this.items[Symbol.iterator]();
            }
            toString() {
              return this.items.size
                ? `Set [${Array.from(this.items, L7).join(", ")}]`
                : "Set []";
            }
            constructor(a) {
              super();
              this.kind = "set";
              this.items = new Set(a);
            }
          },
          Swc = class {
            toString() {
              return this.items.size
                ? `Map {${Array.from(
                    this.items,
                    ([a, b]) => `[${L7(a)}]: ${L7(b)}`
                  ).join(", ")}}`
                : "Map {}";
            }
            constructor(a) {
              this.items = a;
              this.kind = "map";
            }
          },
          Twc = class extends Nwc {
            Aoa() {
              return this.fields;
            }
            toString() {
              const a = Object.entries(this.fields);
              return a.length
                ? `{ ${[...a].map(([b, c]) => `${b}: ${L7(c)}`).join(", ")} }`
                : "{}";
            }
            constructor(a) {
              super();
              this.fields = a;
              this.kind = "record";
            }
          },
          Uwc = class {
            toString() {
              return `[instance ${this.FE.name}]`;
            }
            constructor(a, b) {
              this.FE = a;
              this.instance = b;
              this.kind = "instance";
            }
          },
          Vwc = class {
            array(a) {
              return new Pwc(a);
            }
            arrayOf(...a) {
              return new Pwc(a);
            }
            set(a) {
              return new Rwc(a);
            }
            map(a) {
              return new Swc(new Map(a));
            }
            Kc(a) {
              return new Twc({ ...a });
            }
          },
          Wwc = class extends Vwc {
            instance(a, b) {
              return new Uwc(a, b);
            }
            stringify(a) {
              return L7(a);
            }
            constructor() {
              super();
              this.Xg = cvc;
            }
          },
          T7 = new Wwc(),
          Xwc = class extends Vwc {
            instance(a, b) {
              a = z(this.classes[a]);
              return new Uwc(a, b);
            }
            constructor(a) {
              super();
              this.classes = a;
            }
          };
        var mvc = {
            [0]: Uuc(P7.number, P7.number, (a) => -a),
            [1]: Uuc(P7.string, P7.number, (a) => a.length),
            [2]: Uuc(P7.Eh, P7.Eh, (a) => !a),
            [3]: H7(P7.number, P7.number, P7.number, (a, b) => a + b),
            [4]: H7(P7.number, P7.number, P7.number, (a, b) => a - b),
            [5]: H7(P7.number, P7.number, P7.number, (a, b) => a * b),
            [6]: H7(P7.number, P7.number, P7.number, (a, b) => a / b),
            [7]: H7(P7.number, P7.number, P7.number, (a, b) => a % b),
            [8]: H7(P7.string, P7.string, P7.string, (a, b) => a + b),
            [9]: H7(P7.number, P7.number, P7.Eh, (a, b) => a === b),
            [10]: H7(P7.number, P7.number, P7.Eh, (a, b) => a !== b),
            [11]: H7(P7.number, P7.number, P7.Eh, (a, b) => a < b),
            [12]: H7(P7.number, P7.number, P7.Eh, (a, b) => a <= b),
            [13]: H7(P7.number, P7.number, P7.Eh, (a, b) => a > b),
            [14]: H7(P7.number, P7.number, P7.Eh, (a, b) => a >= b),
            [15]: H7(P7.Eh, P7.Eh, P7.Eh, (a, b) => a && b),
            [16]: H7(P7.Eh, P7.Eh, P7.Eh, (a, b) => a || b),
          },
          svc = {
            [2]: new Y7(P7.number, P7.number, (a) =>
              a.reduce((b, c) => b + c, 0)
            ),
            [3]: new Y7(P7.number, P7.number, (a) =>
              a.reduce((b, c) => b * c, 1)
            ),
            [4]: new Y7(P7.number, P7.number, (a) => Math.max(...a)),
            [5]: new Y7(P7.number, P7.number, (a) => Math.min(...a)),
            [6]: new Y7(P7.string, P7.string, (a) => a.join("")),
          },
          Ywc = (a) => T7.array(a),
          Zwc = (a) => T7.set(a),
          qvc = {
            [0]: (a) => new Y7(a, P7.array(a), Ywc),
            [1]: (a) => new Y7(a, P7.set(a), Zwc),
          },
          twc = (a) => T7.map(a),
          dvc = { [0]: (a, b) => new uwc(a, b, P7.map(a, b)) },
          rwc = (a) => T7.Kc(a),
          vvc = { [0]: (a) => new swc(a, P7.Kc(a)) },
          $wc = (a, b) => T7.array(b.map((c) => c())),
          axc = (a, b) => T7.array(b.flatMap((c) => c().items)),
          bxc = (a, b) => T7.array(a.filter((c, d) => b[d]()).map((c) => c())),
          cxc = (a, b) => b.some((c) => c()),
          dxc = (a, b) => b.every((c) => c()),
          exc = (a, b) => {
            var c;
            return (c = a.find((d, e) => b[e]())) === null || c === void 0
              ? void 0
              : c();
          },
          fvc = {
            [0]: (a, b) => b.map((c) => I7(a, c, P7.array(c), $wc)),
            [1]: (a, b) =>
              b.bP().map((c) => I7(a, P7.array(c), P7.array(c), axc)),
            [2]: (a) => I7(a, P7.Eh, P7.array(a), bxc),
            [3]: (a) => I7(a, P7.Eh, P7.Eh, cxc),
            [4]: (a) => I7(a, P7.Eh, P7.Eh, dxc),
            [5]: (a) => I7(a, P7.Eh, P7.optional(a), exc),
          };
        var N7 = class {
          define(a, b) {
            return new N7(new Map([[a, b]]), this);
          }
          resolve(a) {
            const b = this.defs.get(a);
            if (b) return b;
            if (this.parent) return this.parent.resolve(a);
            throw Error(`undefined symbol: "${a}"`);
          }
          constructor(a, b) {
            this.defs = a;
            this.parent = b;
          }
        };
        var gxc = (a, b, c) => {
            const d = M7.create(b.gN),
              e = new fxc(a);
            return {
              compile: (f) => {
                const g = jvc(e, d, f).as(c);
                return (h) => {
                  h = new N7(new Map(b.decode(h).DBa));
                  return g(h);
                };
              },
            };
          },
          M7 = class {
            static create(a) {
              return new M7(new N7(new Map(a)), new N7(new Map()));
            }
            constructor(a = new N7(new Map()), b = new N7(new Map())) {
              this.vars = a;
              this.l2 = b;
            }
          },
          fxc = class {
            constructor(a) {
              this.types = a;
            }
          },
          R7 = class {
            static of(a, b) {
              return new R7(a, b);
            }
            as(a) {
              if (!J7(this.type, a))
                throw Error(
                  `type ${this.type} does not match expected type: ${a}`
                );
              return this.evaluate;
            }
            computed() {
              const a = this.evaluate;
              return new R7(this.type, (b) => {
                const c = V7(a(b), { equals: T7.Xg });
                return () => c.get();
              });
            }
            map(a) {
              return a(this.type, this.evaluate);
            }
            constructor(a, b) {
              this.type = a;
              this.evaluate = b;
            }
          },
          Gvc = class {
            as(a, b) {
              const c = this.Oha,
                d = this.resultType;
              if (a.length < c.length)
                throw Error(
                  `Target signature provides too few arguments. Expected ${c.length} or more, got ${a.length}.`
                );
              for (let e = 0; e < c.length; e++)
                if (!J7(a[e], c[e]))
                  throw Error(
                    `Types of parameter ${e} are incompatible.  Type ${a[e]} is not assignable to parameter type: ${c[e]}`
                  );
              if (!J7(d, b))
                throw Error(
                  `return type ${d} is not assignable to expected type: ${b}`
                );
              return this.evaluate;
            }
            map(a) {
              return a(this);
            }
            constructor(a, b, c) {
              this.Oha = a;
              this.resultType = b;
              this.evaluate = c;
            }
          };
        var $vc = class {
            add(a) {
              a = a(hxc, this.types);
              return new $vc({ ...this.classes, ...a });
            }
            resolve(a) {
              return this.classes[a];
            }
            evaluate(a) {
              const b = this.types;
              switch (a.kind) {
                case 0:
                  switch (a.name) {
                    case "string":
                      return b.string;
                    case "number":
                      return b.number;
                    case "boolean":
                      return b.Eh;
                    case "undefined":
                      return b.undefined;
                    default:
                      throw new E(a);
                  }
                case 1:
                  return b.instance(a.name);
                case 4:
                  switch (a.name) {
                    case "array":
                      return b.array(this.evaluate(a.LLa));
                    case "set":
                      return b.set(this.evaluate(a.LLa));
                    default:
                      throw new E(a);
                  }
                case 5:
                  switch (a.name) {
                    case "map":
                      const c = this.evaluate(a.LLa);
                      a = this.evaluate(a.iIb);
                      if (!J7(c, b.primitive))
                        throw Error(`key type is not a primitive: ${c}`);
                      return b.map(c, a);
                    default:
                      throw new E(a);
                  }
                case 3:
                  return b.union(...a.args.map((c) => this.evaluate(c)));
                case 2:
                  return b.Kc(Zd(a.args, (c) => this.evaluate(c)));
                default:
                  throw new E(a);
              }
            }
            constructor(a) {
              this.classes = a;
              this.types = new Kwc(this.classes);
              this.values = new Xwc(this.classes);
            }
          },
          hxc = class {
            constructor(a, b, c) {
              this.name = a;
              this.create = c;
              this.Etb = new G7([P7.Kc(b)], P7.instance(this), (d) =>
                T7.instance(this, c(d.fields))
              );
            }
          };
        var ixc;
        ixc = Symbol.iterator;
        var Hvc = class {
          static D(a) {
            O(a, { z4: V7 });
          }
          get z4() {
            const a = new Map();
            this.base.forEach((b) => a.set(this.Lf(b), b));
            return a;
          }
          Xs(a) {
            return z(this.z4.get(a));
          }
          nW(a) {
            return a != null ? this.Lf(a) : void 0;
          }
          get size() {
            return this.base.size;
          }
          get(a) {
            a = this.base.get(a);
            return this.nW(a);
          }
          has(a) {
            return this.base.has(a);
          }
          forEach(a) {
            this.base.forEach((b, c) => a(this.Lf(b), c));
          }
          map(a) {
            return this.base.map((b, c) => a(this.Lf(b), c));
          }
          set(a, b) {
            return this.Lf(this.base.set(a, this.SF(b)));
          }
          every(a) {
            return this.base.every((b, c) => a(this.Lf(b), c));
          }
          delete(a) {
            this.base.delete(a);
          }
          entries() {
            return Jvc(this.base.entries(), ([a, b]) => [a, this.Lf(b)]);
          }
          keys() {
            return this.base.keys();
          }
          values() {
            return Jvc(this.base.values(), this.Lf);
          }
          [ixc]() {
            return this.wk()[Symbol.iterator]();
          }
          wk() {
            return Mc(this.base.wk(), this.Lf);
          }
          constructor(a, b, c) {
            this.base = a;
            this.SF = b;
            this.Lf = c;
            Hvc.D(this);
          }
        };
        var c8 = class {
            ZI(a) {
              return new jxc(this, a);
            }
            W1(a) {
              return new kxc(this, a);
            }
            fO(a) {
              return new lxc(this, a);
            }
            toString() {
              var a;
              return (a = this.s) !== null && a !== void 0
                ? a
                : (this.s = this.A4());
            }
          },
          Wvc = class extends c8 {
            ZI(a) {
              return new mxc(a);
            }
            W1() {
              throw Error();
            }
            fO() {
              throw Error();
            }
            A4() {
              return "(global)";
            }
          },
          mxc = class extends c8 {
            A4() {
              return this.name;
            }
            constructor(a) {
              super();
              this.name = a;
            }
          },
          jxc = class extends c8 {
            A4() {
              return `${this.parent}.${this.name}`;
            }
            constructor(a, b) {
              super();
              this.parent = a;
              this.name = b;
            }
          },
          kxc = class extends c8 {
            A4() {
              return `${this.parent}["${this.key}"]`;
            }
            constructor(a, b) {
              super();
              this.parent = a;
              this.key = b;
            }
          },
          lxc = class extends c8 {
            A4() {
              return `${this.parent}[${this.index}]`;
            }
            constructor(a, b) {
              super();
              this.parent = a;
              this.index = b;
            }
          },
          Vvc = class {
            error(a, b) {
              return Error(
                `widget '${this.LEb}': schema error on key '${a}': ${b}`
              );
            }
            constructor(a) {
              this.LEb = a;
            }
          },
          Zvc = {
            string: "string",
            boolean: "boolean",
            double: "number",
            int32: "number",
            list: "object",
            dict: "object",
            ref: "object",
            fill: "object",
            stroke: "object",
            text2: "object",
          },
          Qvc = new Set(["string", "boolean", "int32"]);
        var oxc = class {
            constructor(a, b, c) {
              this.Yia = a;
              this.wh = c;
              w(
                b.ve === "fixed",
                "Responsive documents are not supported in widget rendering."
              );
              this.pb = __c.zh(b);
              this.Mk = new nxc(this.Yia, this.pb);
            }
          },
          cwc = class {
            get width() {
              var a;
              return this.container.type === "controlled-item"
                ? ((a = this.container.G.Hh) === null || a === void 0
                    ? void 0
                    : a.width) || 0
                : this.container.G.L;
            }
            get height() {
              var a;
              return this.container.type === "controlled-item"
                ? ((a = this.container.G.Hh) === null || a === void 0
                    ? void 0
                    : a.height) || 0
                : this.container.G.W;
            }
            constructor(a) {
              this.container = a;
            }
          },
          pxc = class {
            getIndex() {
              return this.gJ(this.page);
            }
            get id() {
              return this.page.G.id;
            }
            get title() {
              return this.page.G.title;
            }
            get anchor() {
              return this.page.G.anchor;
            }
            get Fpb() {
              return this.page.G.yf;
            }
            constructor(a, b) {
              this.page = a;
              this.gJ = b;
            }
          },
          qxc = class extends pxc {
            constructor(a, b, c) {
              super(a, b);
              this.page = a;
              this.container = c;
              this.type = "fixed";
            }
          },
          rxc = class extends pxc {
            constructor(a, b, c) {
              super(a, b);
              this.page = a;
              this.container = c;
              this.type = "concatenated-fixed";
            }
          },
          sxc = class extends pxc {
            constructor(a, b, c) {
              super(a, b);
              this.page = a;
              this.container = c;
              this.type = "responsive";
            }
          },
          txc = class {
            get id() {
              var a;
              return (a = this.Yia) === null || a === void 0 ? void 0 : a.id;
            }
            get extension() {
              var a;
              return (a = this.Yia) === null || a === void 0
                ? void 0
                : a.extension;
            }
            get language() {
              return this.pb.G.language;
            }
            constructor(a, b) {
              this.Yia = a;
              this.pb = b;
            }
          },
          nxc = class extends txc {
            static D(a) {
              O(a, {
                Z: V7({ equals: owc.shallow }),
                XYa: V7({ equals: owc.shallow }),
              });
            }
            get Z() {
              return this.pb.G.Z.map((a) => this.Nmb(this.pb.de(a)));
            }
            get XYa() {
              return this.pb.G.Z.toArray();
            }
            constructor(a, b) {
              super(a, b);
              this.Nq = a;
              this.pb = b;
              this.type = (nxc.D(this), "fixed");
              this.fTa = X7((c) => new qxc(c, this.gJ, this));
              this.WSa = X7((c) => new rxc(c, this.gJ, this));
              this.yTa = X7((c) => new sxc(c, this.gJ, this));
              this.Nmb = X7((c) => {
                switch (c.type) {
                  case "fixed-page":
                    return this.fTa(c);
                  case "concatenated-fixed-page":
                    return this.WSa(c);
                  case "responsive-page":
                    return this.yTa(c);
                  default:
                    throw new E(c);
                }
              });
              this.gJ = X7((c) => {
                c = this.pb.G.Z.has(c.G) ? c.G : void 0;
                return c != null ? this.XYa.indexOf(c) : -1;
              });
            }
          };
        var uxc = class {
          Qob(a, b, c) {
            const d = z(this.KBa.z6.get(a));
            w(d.element === b.element);
            w(!this.POa.has(a));
            b = ewc(a, c, b);
            this.POa.set(a, b);
            return b;
          }
          constructor(a) {
            this.KBa = a;
            this.POa = new Map();
          }
        };
        var vxc = new Set(),
          wxc = { ew: () => ({ La: __c.yac }) },
          xxc = class {
            static D(a) {
              O(a, { Qia: pwc.shallow });
            }
            Wob(a, b, { element: c, exports: d, HOa: e }) {
              var f = z(this.KBa.z6.get(a));
              w(f.element === b.element);
              w(!this.Qia.has(a));
              f = new WeakMap();
              b = { element: kwc(this, b, c, f, e), exports: d, fW: f };
              this.Qia.set(a, b);
              vxc.has(a) || (__c.nQ.set(a, wxc), vxc.add(a));
              return { element: b.element, exports: b.exports };
            }
            zta(a) {
              var b;
              return (b = this.Qia.get(a)) === null || b === void 0
                ? void 0
                : b.element;
            }
            constructor(a, b, c, d, e, f) {
              this.KBa = a;
              this.wY = b;
              this.Xqa = c;
              this.K = d;
              this.k$a = e;
              this.Nn = f;
              this.Qia = (xxc.D(this), new Map());
            }
          };
        var yxc = class {
          static D(a) {
            O(a, { z6: pwc.shallow });
          }
          Xob(a, b) {
            w(!this.z6.has(a));
            b = {
              document: mwc(this.JOa(a, b.document)),
              element: mwc(this.JOa(a, b.element)),
            };
            this.z6.set(a, b);
            return b;
          }
          constructor(a) {
            this.JOa = a;
            this.z6 = (yxc.D(this), new Map());
          }
        };
        __c.DXa = {
          XPb: function (a) {
            return { JEb: new uxc(a) };
          },
          cpb: function (a) {
            var b = a.uIa;
            const c = a.MEb,
              d = a.kra,
              e = a.wY,
              f = a.K;
            a = new oxc(a.Nq, a.pb, a.wh);
            b = new xxc(b, e, d, f, a, c);
            return { a9: b, HD: b };
          },
          dpb: function () {
            var a = { Qo: bwc(), Xqa: gxc };
            const { Qo: b, Xqa: c } = a;
            a = new yxc(Xvc(b));
            return { vIa: a, uIa: a, kra: c, wY: b };
          },
        };
      }.call(self, self._5f74ec40302898c5a55451c9fbd04240));
    },
  },
]);
//# sourceMappingURL=sourcemaps/5a7ecdcee08303cf.js.map
