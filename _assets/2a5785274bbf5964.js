(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [8241],
  {
    /***/ 744054: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(905716);
      self._5f74ec40302898c5a55451c9fbd04240 =
        self._5f74ec40302898c5a55451c9fbd04240 || {};
      (function (__c) {
        var m0;
        var o0;
        var w = __c.w;
        var h0, k0, xac;
        h0 = function () {
          throw Error("ref not found");
        };
        __c.i0 = function (a) {
          return { kind: 0, QK: a };
        };
        __c.j0 = function (a) {
          return { kind: 3, range: a };
        };
        __c.wac = function (a) {
          return { kind: 2, range: a };
        };
        k0 = function (...a) {
          return { kind: 4, values: new Set(a) };
        };
        xac = function (a) {
          return { kind: 5, itemType: a };
        };
        __c.l0 = function (a) {
          return { kind: 10, fields: a };
        };
        m0 = __c.m0 = function (a, b, c) {
          return (d, ...e) => ({ key: d, aDa: a, HK: b, type: c(...e) });
        };
        __c.n0 = function (a) {
          const b = new Set();
          for (const d of Object.values(a)) {
            w(!b.has(d.key), "duplicate key: {}", d.key);
            var c;
            if ((c = d.aDa === 1))
              a: switch (((c = d.type), c.kind)) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                  c = !1;
                  break a;
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                  c = !0;
                  break a;
                default:
                  throw new __c.E(c);
              }
            w(!c, 'settable mutable: "{}"', d.key);
            b.add(d.key);
          }
          return a;
        };
        o0 = __c.o0 = __webpack_require__(400770).computed;
        __c.yac = Object.freeze({
          empty: !0,
          count() {
            return 0;
          },
          toArray() {
            return [];
          },
          wk() {
            return new Map();
          },
          first() {},
          last() {},
          next() {
            h0();
          },
          previous() {
            h0();
          },
          se() {
            h0();
          },
          Iu() {
            h0();
          },
          has() {
            return !1;
          },
          Sq() {
            return this;
          },
          map() {
            return [];
          },
          flatMap() {
            return [];
          },
          filter() {
            return [];
          },
          forEach() {},
          reduce(a, b) {
            return b;
          },
          some() {
            return !1;
          },
          every() {
            return !0;
          },
          [Symbol.iterator]() {
            return [][Symbol.iterator]();
          },
        });
        var zac;
        zac = Symbol.iterator;
        __c.p0 = class {
          static D(a) {
            __c.O(a, { zl: o0, Jp: o0 });
          }
          get zl() {
            return this.ydb().map((a) => {
              let b = this.vUa.get(a);
              b == null && ((b = `${this.aob++}`), this.vUa.set(a, b));
              return { id: b, ref: a };
            });
          }
          get Jp() {
            const a = new Map();
            this.zl.forEach((b, c) => b && a.set(b.ref, c));
            return a;
          }
          Ij(a) {
            return __c.z(this.Jp.get(a), "ref not found");
          }
          get empty() {
            return !this.zl.length;
          }
          count() {
            return this.zl.length;
          }
          toArray() {
            return this.zl.map((a) => a.ref);
          }
          wk() {
            return new Map(this.map((a, b) => [b, a]));
          }
          get bO() {
            const a = this.zl[0];
            return a && a.ref;
          }
          get fP() {
            const a = this.zl[this.zl.length - 1];
            return a && a.ref;
          }
          first(a) {
            if (!a) return this.bO;
            const b = this.zl.find((c) => a(c.ref));
            return b && b.ref;
          }
          last(a) {
            if (!a) return this.fP;
            const b = this.zl;
            for (let c = b.length - 1; c >= 0; c--) {
              const d = b[c];
              if (a(d.ref)) return d.ref;
            }
          }
          next(a, b) {
            const c = this.zl;
            for (a = this.Ij(a) + 1; a < c.length; a++) {
              const d = c[a];
              if (!b || b(d.ref)) return d.ref;
            }
          }
          previous(a, b) {
            const c = this.zl;
            for (a = this.Ij(a) - 1; a >= 0; a--) {
              const d = c[a];
              if (!b || b(d.ref)) return d.ref;
            }
          }
          se(a, b) {
            a = this.Jp.get(a);
            b = this.Jp.get(b);
            w(a != null);
            w(b != null);
            return a < b ? -1 : a > b ? 1 : 0;
          }
          Iu(a) {
            return this.zl[this.Ij(a)].id;
          }
          has(a) {
            return this.Jp.has(a);
          }
          Sq(a) {
            return new __c.fJ(this, a);
          }
          map(a) {
            return this.zl.map(({ ref: b, id: c }) => a(b, c));
          }
          flatMap(a) {
            return this.zl.flatMap(({ ref: b, id: c }) => a(b, c));
          }
          filter(a) {
            return this.zl.filter((b) => a(b.ref, b.id)).map((b) => b.ref);
          }
          forEach(a) {
            this.zl.forEach((b, c) => a(b.ref, b.id, c));
          }
          reduce(a, b) {
            return this.zl.reduce((c, d) => a(c, d.ref, d.id), b);
          }
          some(a) {
            return this.zl.some((b) => a(b.ref, b.id));
          }
          every(a) {
            return this.zl.every((b) => a(b.ref, b.id));
          }
          [zac]() {
            return this.toArray()[Symbol.iterator]();
          }
          constructor(a) {
            this.ydb = a;
            this.aob = (__c.p0.D(this), 0);
            this.vUa = new WeakMap();
          }
        };
        __c.Aac = Symbol.iterator;
        var Bac,
          Cac = class {
            get value() {
              return this.box.get();
            }
            constructor(a, b) {
              this.id = a;
              this.box = b;
            }
          };
        Bac = Symbol.iterator;
        __c.q0 = class {
          static D(a) {
            __c.O(a, { Jp: o0, bO: o0, fP: o0 });
          }
          get Jp() {
            const a = new Map();
            this.cells.forEach((b, c) => a.set(b.value, c));
            return a;
          }
          Ij(a) {
            return __c.z(this.Jp.get(a), "ref not found");
          }
          get empty() {
            return !this.cells.length;
          }
          count() {
            return this.cells.length;
          }
          toArray() {
            return this.cells.map((a) => a.value);
          }
          wk() {
            return new Map(this.map((a, b) => [b, a]));
          }
          get bO() {
            const a = this.cells[0];
            return a && a.value;
          }
          get fP() {
            const a = this.cells[this.cells.length - 1];
            return a && a.value;
          }
          first(a) {
            if (!a) return this.bO;
            const b = this.cells.find((c) => a(c.value));
            return b && b.value;
          }
          last(a) {
            if (!a) return this.fP;
            const b = this.cells;
            for (let c = b.length - 1; c >= 0; c--) {
              const d = b[c];
              if (a(d.value)) return d.value;
            }
          }
          next(a, b) {
            const c = this.cells;
            for (a = this.Ij(a) + 1; a < c.length; a++) {
              const d = c[a];
              if (d && (!b || b(d.value))) return d.value;
            }
          }
          previous(a, b) {
            const c = this.cells;
            for (a = this.Ij(a) - 1; a >= 0; a--) {
              const d = c[a];
              if (d && (!b || b(d.value))) return d.value;
            }
          }
          se(a, b) {
            a = this.Jp.get(a);
            b = this.Jp.get(b);
            w(a != null);
            w(b != null);
            return a < b ? -1 : a > b ? 1 : 0;
          }
          Iu(a) {
            return this.cells[this.Ij(a)].id;
          }
          has(a) {
            return this.Jp.has(a);
          }
          Sq(a) {
            return new __c.fJ(this, a);
          }
          map(a) {
            return this.cells.map((b) => a(b.value, b.id));
          }
          flatMap(a) {
            return this.cells.flatMap((b) => a(b.value, b.id));
          }
          filter(a) {
            return this.cells
              .filter((b) => a(b.value, b.id))
              .map((b) => b.value);
          }
          forEach(a) {
            this.cells.forEach((b) => a(b.value, b.id));
          }
          reduce(a, b) {
            return this.cells.reduce((c, d) => a(c, d.value, d.id), b);
          }
          some(a) {
            return this.cells.some((b) => a(b.value, b.id));
          }
          every(a) {
            return this.cells.every((b) => a(b.value, b.id));
          }
          [Bac]() {
            return this.toArray()[Symbol.iterator]();
          }
          constructor(a) {
            this.cells = (__c.q0.D(this), void 0);
            this.cells = a.map((b, c) => new Cac(String(c), b));
          }
        };
        __c.Dac = m0(0, 0, __c.i0);
        __c.r0 = m0(0, 0, k0);
        __c.s0 = m0(1, 0, __c.i0);
        __c.t0 = m0(1, 0, k0);
        __c.u0 = m0(1, 0, __c.j0);
        __c.v0 = m0(1, 0, xac);
        __c.w0 = m0(1, 1, __c.i0);
        __c.x0 = m0(1, 1, function () {
          return { kind: 1 };
        });
        __c.y0 = m0(1, 1, __c.wac);
        __c.Eac = m0(1, 1, __c.j0);
        __c.z0 = m0(1, 1, k0);
        __c.Fac = m0(1, 1, xac);
        __c.A0 = m0(0, 0, function (a) {
          return { kind: 7, name: a };
        });
        __c.Gac = m0(0, 0, function (a) {
          return { kind: 8, itemType: a };
        });
        __c.Hac = m0(0, 0, __c.l0);
        __c.Iac = m0(0, 1, function (a) {
          return { kind: 9, itemType: a };
        });
        __c.Jac = __c.n0({});
      }.call(self, self._5f74ec40302898c5a55451c9fbd04240));
    },
  },
]);
//# sourceMappingURL=sourcemaps/2a5785274bbf5964.js.map
