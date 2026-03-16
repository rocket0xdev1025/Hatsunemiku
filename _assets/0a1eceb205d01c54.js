(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [66905],
  {
    /***/ 975058: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(905716);
      self._5f74ec40302898c5a55451c9fbd04240 =
        self._5f74ec40302898c5a55451c9fbd04240 || {};
      (function (__c) {
        var zxc = function (a) {
            return d8(function (b) {
              return e8("div", {
                className: "gcYy_A",
                children: e8(__c.mB, {
                  z1: "both",
                  children: ({ width: c, height: d }) =>
                    e8(a.si, {
                      fill: b.fill,
                      Gb: c,
                      qc: d,
                      Xd: void 0,
                      animation: void 0,
                      pD: !1,
                      da: void 0,
                      ga: void 0,
                    }),
                }),
              });
            });
          },
          Axc = function (a) {
            a.nM && (a.nM(), (a.nM = null));
            const b = a.props.Iib;
            b.forEach((c) => {
              window.addEventListener(c, a.xKa);
            });
            a.nM = () => {
              b.forEach((c) => {
                window.removeEventListener(c, a.xKa);
              });
            };
          },
          Hxc = function (a) {
            const b = Bxc((c) => {
              const d = Cxc(() => {
                a.zs.SZ(c.url);
              }, [c.url]);
              var e;
              return e8(__c.Su, {
                url: c.url,
                store: a.mw,
                Qo: a.zs,
                Ty: a.Ty,
                tQ: a.wh > 10,
                Qm: (e = c.Qm) !== null && e !== void 0 ? e : !1,
                pg: d,
                wz: c.wz,
                QP: c.QP,
              });
            });
            return a.Heb
              ? Bxc(function (c) {
                  const [{ store: d, za: e }] = Dxc(() => {
                    const f = new Exc(),
                      g = new Fxc(f);
                    return { store: f, za: g };
                  });
                  return e8(Gxc, {
                    l5: e.reset,
                    children: e8(__c.kOb, {
                      gpb: e,
                      hpb: d,
                      SVa: a.mw.contains(c.url),
                      children: ({ Qm: f }) => e8(b, { ...c, Qm: f }),
                    }),
                  });
                })
              : b;
          },
          Jxc = function (a) {
            const b = a.Sa;
            return d8(function (c) {
              var d = c.wSa;
              const e = c.zMa,
                f = c.Dc,
                g = c.MLa,
                h = c.ariaInvalid,
                k = c.className,
                l = c.disabled,
                m = c.id,
                n = c.name,
                p = c.onBlur,
                q = c.onFocus,
                r = c.onChange,
                t = c.placeholder,
                u = c.O0a,
                v = c.type,
                x = c.value;
              var A = c.$i;
              c = c.borderRadius;
              var B;
              if ((B = d))
                (d = __c.ym(d)), __c.Sm(b, [d], { Ss: !0 }), (B = __c.Tm(b, d));
              A = { color: A, borderRadius: c, fontFamily: B };
              return e8("div", {
                className: "BHOPhg",
                children: e8("input", {
                  "aria-describedby": f,
                  "aria-errormessage": g,
                  "aria-invalid": h,
                  className: Ixc(k, ["_6Yde8g", t && u && "sR0SUA"]),
                  disabled: l,
                  id: m,
                  name: n,
                  onBlur: p,
                  onFocus: q,
                  onChange: r,
                  placeholder: t,
                  type: v,
                  value: x,
                  style: {
                    ...A,
                    "--srRiKA": u,
                    "--oiOG3Q": e === null || e === void 0 ? void 0 : e.default,
                    "--oGOcXA": e === null || e === void 0 ? void 0 : e.HO,
                    "--UBd2ow": e === null || e === void 0 ? void 0 : e.focus,
                  },
                }),
              });
            });
          },
          Kxc = function () {
            return () => e8(__c.XS, { mediaType: "embed", failed: !1 });
          },
          Lxc = function (a) {
            return d8(function (b) {
              return e8("div", {
                className: "oUJNhQ",
                children: e8(a.Be, {
                  text: b.text,
                  animation: void 0,
                  Rc: "middle",
                  la: void 0,
                  Ua: void 0,
                  ye: [],
                  writingMode: 1,
                }),
              });
            });
          },
          Mxc = function (a) {
            const b = a.Sa;
            return d8(function (c) {
              var d = c.wSa;
              const e = c.zMa,
                f = c.Dc,
                g = c.MLa,
                h = c.ariaInvalid,
                k = c.className,
                l = c.disabled,
                m = c.id,
                n = c.name,
                p = c.onBlur,
                q = c.onFocus,
                r = c.onChange,
                t = c.placeholder,
                u = c.O0a,
                v = c.rows,
                x = c.value;
              var A = c.$i;
              c = c.borderRadius;
              var B;
              if ((B = d))
                (d = __c.ym(d)), __c.Sm(b, [d], { Ss: !0 }), (B = __c.Tm(b, d));
              A = { color: A, borderRadius: c, fontFamily: B };
              return e8("div", {
                className: "BHOPhg",
                children: e8("textarea", {
                  "aria-describedby": f,
                  "aria-errormessage": g,
                  "aria-invalid": h,
                  className: Ixc(k, ["_6Yde8g", u && "sR0SUA"]),
                  disabled: l,
                  id: m,
                  name: n,
                  onBlur: p,
                  onFocus: q,
                  onChange: r,
                  placeholder: t,
                  rows: v,
                  style: {
                    ...A,
                    "--srRiKA": u,
                    "--oiOG3Q": e === null || e === void 0 ? void 0 : e.default,
                    "--oGOcXA": e === null || e === void 0 ? void 0 : e.HO,
                    "--UBd2ow": e === null || e === void 0 ? void 0 : e.focus,
                  },
                  value: x,
                }),
              });
            });
          },
          e8 = __webpack_require__(31968).jsx;
        var f8 = __webpack_require__(845212),
          Nxc = f8.Component,
          d8 = f8.memo,
          Cxc = f8.useCallback,
          Dxc = f8.useState;
        var Oxc = __webpack_require__(400770),
          Pxc = Oxc.action,
          Qxc = Oxc.observable;
        var Bxc = __webpack_require__(813494).observer;
        var Rxc = __webpack_require__,
          Sxc = Rxc(208463),
          Ixc = Rxc.n_x(Sxc)();
        var Txc = class extends Nxc {
          render() {
            const {
              children: a,
              component: b = "div",
              Xxb: c,
              aha: d,
            } = this.props;
            let e = {};
            d &&
              (e = c.reduce((f, g) => {
                f[g] = this.wcb;
                return f;
              }, {}));
            return e8(b, { className: "_kI3Pw", ...e, children: a });
          }
          componentDidMount() {
            this.props.aha && Axc(this);
          }
          componentDidUpdate() {
            this.props.aha && Axc(this);
          }
          componentWillUnmount() {
            this.nM && (this.nM(), (this.nM = null));
          }
          constructor(...a) {
            super(...a);
            this.Jna = this.nM = null;
            this.wcb = (b) => {
              this.Jna = b.nativeEvent;
            };
            this.xKa = (b) => {
              const c = this.props.aha,
                d = this.Jna === b;
              c && !d && c(b);
              this.Jna = null;
            };
          }
        };
        var Gxc = (a) =>
          e8(Txc, {
            Xxb: ["onMouseDown", "onTouchStart"],
            Iib: ["mousedown", "touchstart"],
            aha: a.l5,
            children: a.children,
          });
        var Exc = class {
            static D(a) {
              __c.O(a, { Qm: Qxc.ref });
            }
            constructor() {
              this.Qm = (Exc.D(this), !0);
            }
          },
          Fxc = class {
            static D(a) {
              __c.O(a, {
                onDoubleClick: Pxc.bound,
                onTouchEnd: Pxc.bound,
                reset: Pxc.bound,
              });
            }
            onDoubleClick() {
              this.store.Qm = !1;
            }
            onTouchEnd(a) {
              a.touches.length > 0 ||
                (this.lR
                  ? (window.clearTimeout(this.lR),
                    (this.lR = void 0),
                    (this.store.Qm = !1))
                  : (this.lR = window.setTimeout(
                      () => (this.lR = void 0),
                      300
                    )));
            }
            reset() {
              this.store.Qm = !0;
            }
            yT() {
              this.lR && window.clearTimeout(this.lR);
            }
            constructor(a) {
              this.store = a;
              this.lR = (Fxc.D(this), void 0);
            }
          };
        __c.DE = {};
        __c.DE.dKb = Hxc;
        __c.DE.fKb = Kxc;
        __c.DE.bpb = function (a) {
          const b = Hxc({
              wh: a.wh,
              Ty: (h, k) =>
                a.K.error(h, {
                  Ge: "widget: ",
                  extra: new Map(Object.entries(k)),
                }),
              mw: a.mw,
              zs: a.zs,
              Heb: !0,
            }),
            c = Kxc(),
            d = Lxc({ Be: a.Be }),
            e = zxc({ si: a.vf }),
            f = Jxc({ Sa: a.Sa }),
            g = Mxc({ Sa: a.Sa });
          return { Vab: b, sGb: c, tj: d, CH: e, sZ: f, zZ: g };
        };
      }.call(self, self._5f74ec40302898c5a55451c9fbd04240));
    },
  },
]);
//# sourceMappingURL=sourcemaps/0a1eceb205d01c54.js.map
