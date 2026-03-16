(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [36455],
  {
    /***/ 894240: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(905716);
      __web_req__(744054);
      self._5f74ec40302898c5a55451c9fbd04240 =
        self._5f74ec40302898c5a55451c9fbd04240 || {};
      (function (__c) {
        var JH = __c.JH;
        var X = __c.X;
        var H = __c.H;
        var r0 = __c.r0;
        var l0 = __c.l0;
        var Da = __c.Da;
        var Wqc,
          Yqc,
          $qc,
          Zqc,
          brc,
          erc,
          drc,
          grc,
          jrc,
          mrc,
          qrc,
          trc,
          wrc,
          orc,
          zrc,
          Brc;
        __c.w6 = function (a) {
          return { type: 1, Component: a };
        };
        __c.x6 = function () {
          return (a) => a;
        };
        __c.y6 = function (...a) {
          return { kind: 11, AQa: { type: void 0 }, Uf: a };
        };
        __c.z6 = function () {
          return (a) => a;
        };
        __c.A6 = function (a) {
          return () => ({ ...Vqc, ...a });
        };
        Wqc = function (a, b) {
          return { element: __c.w6(a), exports: b };
        };
        Yqc = function (a) {
          a.Vd = setTimeout(() => {
            a.Z1a(new Xqc());
          }, 500);
        };
        $qc = async function (a, b) {
          const c = b.requestId,
            d = b.path;
          b = b.payload;
          const e = a.sX.get(d);
          if (e) {
            a.P4.x_.send({ type: "ack", requestId: c });
            var f = setInterval(
              () => a.P4.x_.send({ type: "ack", requestId: c }),
              9e3
            );
            try {
              var g = await e(b);
              clearInterval(f);
              a.P4.x_.send({ type: "response", requestId: c, payload: g });
            } catch (k) {
              clearInterval(f);
              g = "internal_error";
              b =
                "Something went wrong on our end, if this issue persists please contact us.";
              if (k instanceof B6) {
                var h = k;
                k.code === "internal_error"
                  ? a.K.Hb(k, {
                      Ge: "Internal error in comms handler",
                      tags: new Map([
                        ["type", "request"],
                        ["path", d],
                      ]),
                    })
                  : ((g = k.code), (b = k.Wxb));
              } else
                a.Iyb
                  ? a.K.Hb(k, {
                      Ge: "Unexpected error type thrown from comms handler",
                      tags: new Map([
                        ["type", "request"],
                        ["path", d],
                      ]),
                    })
                  : a.gib.error(k);
              g = Zqc(a.P4, c, g, b);
              g.ok ||
                a.K.uN(g.error, {
                  Ge: "unable to send error response",
                  tags: new Map([
                    ["type", "request"],
                    ["path", d],
                  ]),
                });
            }
            if (h != null)
              for (const k of a.gkb)
                try {
                  k(h);
                } catch (l) {
                  a.K.GD(l, { Ge: "Error executing errorObserver" });
                }
          } else
            (h = Zqc(
              a.P4,
              c,
              "internal_error",
              `No request handler configured for path: "${d}".`
            )),
              h.ok ||
                a.K.uN(h.error, {
                  Ge: "unable to send error response",
                  tags: new Map([
                    ["type", "request"],
                    ["path", d],
                  ]),
                });
        };
        Zqc = function (a, b, c, d) {
          return a.x_.send({
            type: "error",
            requestId: b,
            code: c,
            message: d,
          });
        };
        brc = function ({ src: a, srcdoc: b, sandbox: c }) {
          if (b.length !== 0 || !c.contains("allow-same-origin")) return arc;
          a = new URL(a).origin;
          return a === "null" ? arc : { NHa: a, w3a: a };
        };
        erc = async function (
          a,
          b,
          c,
          { addEventListener: d, removeEventListener: e } = window
        ) {
          const f = new crc(6e4),
            g = brc(c),
            h = c.contentWindow;
          if (!h)
            throw new B6({
              code: "internal_error",
              message: "contentWindow is missing from iFrame",
            });
          c = ({ data: k, source: l, origin: m }) => {
            var n;
            (k === null || k === void 0
              ? 0
              : (n = k.source) === null || n === void 0
              ? 0
              : n.startsWith("react-")) ||
              (m !== g.NHa
                ? drc(m) ||
                  b.info("received message event from an unexpected origin", {
                    extra: new Map([
                      ["expected", g.NHa],
                      ["actual", m],
                    ]),
                  })
                : l !== h
                ? l !== window &&
                  b.info("source and content window do not match", {
                    extra: new Map([
                      [
                        "data.source",
                        k === null || k === void 0 ? void 0 : k.source,
                      ],
                    ]),
                  })
                : ((l = k
                    ? k.source
                      ? k.source !== "iframe"
                        ? Da("invalid source")
                        : (0, __c.Aa)()
                      : Da("'source' is missing in MessageEvent data object")
                    : Da("missing 'data' field in MessageEvent")),
                  l.ok
                    ? (h.postMessage({ source: "parent" }, g.w3a, [a]),
                      f.resolve(void 0))
                    : b.vH(l.error, {
                        extra: new Map([
                          [
                            "data.source",
                            k === null || k === void 0 ? void 0 : k.source,
                          ],
                        ]),
                      })));
          };
          d("message", c);
          try {
            await f.promise();
          } finally {
            e("message", c);
          }
        };
        drc = function (a) {
          return frc.some((b) => a.endsWith(b));
        };
        grc = function (a, b, c, d) {
          a.handle("SET_CONFIG", async (e) => {
            if (e === void 0)
              throw new B6({
                code: "internal_error",
                message: "SET_CONFIG: request cannot be undefined.",
              });
            e = b.Aa(e);
            e = await c(e);
            if (d) return d.Ga(e);
          });
        };
        jrc = async function (a, b) {
          a = await a.Faa.request("RENDER_EDIT_PANEL", hrc.Ga(b));
          if (!a.ok)
            throw Error(
              `Encountered an error while sending ${"RENDER_EDIT_PANEL"} request: ${
                a.error
              }`
            );
          if (a.value == null)
            throw Error("RENDER_EDIT_PANEL: Result cannot be empty");
          return irc.Aa(a.value);
        };
        mrc = function (a, b) {
          grc(a, krc, (c) => b.Oua(c), lrc);
        };
        qrc = async function (a, b) {
          a = await a.Faa.request("RENDER_ELEMENT", nrc.Ga(b));
          a = orc(a, "RENDER_ELEMENT");
          return prc.Aa(a);
        };
        trc = async function (a, b) {
          a = await a.Faa.request("SET_CAPABILITY", rrc.Ga(b));
          a = orc(a, "SET_CAPABILITY");
          return src.Aa(a);
        };
        wrc = function (a, b) {
          grc(a, urc, (c) => b.Oua(c), vrc);
        };
        orc = function (a, b) {
          if (!a.ok)
            throw Error(
              `Encountered an error while sending ${b} request: ${a.error}`
            );
          if (a.value == null) throw Error(`${b}: Result cannot be empty`);
          return a.value;
        };
        zrc = async function (a, b, c) {
          const { port1: d, port2: e } = new MessageChannel(),
            f = new xrc(d, b);
          await erc(e, b, a, window);
          a = new yrc(f);
          c && wrc(f, c);
          return a;
        };
        Brc = async function (a, b, c) {
          const { port1: d, port2: e } = new MessageChannel(),
            f = new xrc(d, b);
          await erc(e, b, a, window);
          a = new Arc(f);
          mrc(f, c);
          return a;
        };
        __c.xc.prototype.uN = __c.ea(3, function (a, b) {
          this.console.error(...__c.wc(this, "critical", a, b));
        });
        __c.kH.prototype.uN = __c.ea(2, function (a, b) {
          this.ju.uN(a, b);
          __c.iH(this, a, "critical", b);
        });
        var Crc = __webpack_require__(400770).reaction;
        var Drc = __webpack_require__(31968).jsx;
        var Erc = __c.z6()(() => ({
            VJb({ DM: a, OY: b }, c) {
              return {
                data: {
                  element: {
                    DM: a,
                    OY: b,
                    type: "instance",
                    domain: "brand",
                    version: 1,
                    Ho: void 0,
                  },
                  document: {},
                },
                O: c,
              };
            },
            YJb({ DM: a, OY: b, type: c }, d) {
              return {
                data: {
                  element: {
                    DM: a,
                    OY: b,
                    type: c,
                    domain: "document",
                    version: void 0,
                    Ho: void 0,
                  },
                  document: {},
                },
                O: d,
              };
            },
          })),
          Frc = __c.x6()(({ Gn: { epa: a } }) => ({
            element: {
              type: 0,
              ew: ({ element: b }) => {
                const c = a.Vkb(b.DM);
                if (!c) throw Error(`Blueprint ${b.DM} not found`);
                const d = c.variants.get(b.OY);
                if (!d)
                  throw Error(
                    `Variant ${b.OY} not found for blueprint ${b.DM}`
                  );
                return b.type === "source"
                  ? { La: d.elements }
                  : {
                      La: new __c.p0(() =>
                        d.elements.map((e) => {
                          e = __c.VF.snapshot(e);
                          return __c.jF.create({
                            ...e,
                            locked: !0,
                            xh: !0,
                            Uh: d.Uh,
                          });
                        })
                      ),
                    };
              },
            },
            exports: {},
          }));
        var Vqc = Object.freeze({
          document: Object.freeze({}),
          element: Object.freeze({}),
        });
        var Grc = __c.y6(
          l0({ type: r0(1, "anchoring"), value: (0, __c.t0)(2, 1, 2, 3) }),
          l0({ type: r0(1, "boolean"), value: (0, __c.x0)(2) }),
          l0({ type: r0(1, "block_alignment"), value: (0, __c.y0)(2) }),
          l0({ type: r0(1, "non-negative-double"), value: (0, __c.y0)(2) }),
          l0({ type: r0(1, "double"), value: (0, __c.y0)(2) }),
          l0({ type: r0(1, "string"), value: (0, __c.w0)(2) }),
          l0({ type: r0(1, "richtext2"), value: (0, __c.A0)(2, "Richtext2") }),
          l0({ type: r0(1, "text_anchor"), value: (0, __c.t0)(2, 1, 2, 3) }),
          l0({ type: r0(1, "text_effects"), value: (0, __c.w0)(2) }),
          l0({ type: r0(1, "text_flow"), value: (0, __c.w0)(2) }),
          l0({ type: r0(1, "image_fill"), value: (0, __c.A0)(2, "Fill") }),
          l0({ type: r0(1, "video_fill"), value: (0, __c.A0)(2, "Fill") })
        );
        var Hrc = __c.A6({
          element: __c.n0({
            DM: (0, __c.s0)(1),
            OY: (0, __c.s0)(2),
            type: (0, __c.t0)(3, "source", "instance"),
            domain: (0, __c.t0)(4, "document", "brand"),
            version: (0, __c.Eac)(5, { min: 1 }),
            Ho: (0, __c.Iac)(6, Grc),
          }),
        });
        var Irc = __c.A6({
            element: __c.n0({
              yNa: (0, __c.A0)(1, "Ref"),
              Bfb: (0, __c.Dac)(35),
              config: (0, __c.w0)(29),
            }),
          }),
          Jrc = __c.z6()(() => ({
            XJb(a, b) {
              return {
                data: {
                  element: {
                    yNa: { type: 4, id: a, version: 0 },
                    Bfb: b,
                    config: void 0,
                  },
                  document: {},
                },
                O: { width: 1366, height: 768 },
              };
            },
          }));
        var Krc = class {};
        var B6 = class extends Error {
          constructor(a) {
            a.code = a.code;
            const b = a.message.endsWith(".") ? "" : ".";
            super(`[${a.code}]:  ${a.message}${b}`.trim());
            this.code = a.code;
            this.name = "CanvaError";
            this.Wxb = a.message;
            Object.setPrototypeOf(this, B6.prototype);
          }
        };
        var Lrc = class {
          constructor(a, b, c) {
            this.handler = a;
            this.port = b;
            this.K = c;
            this.send = (d) => {
              try {
                return this.port.postMessage(d), (0, __c.Aa)();
              } catch (e) {
                return this.K.Hb(e), Da(e);
              }
            };
            this.jvb = (d) => {
              this.K.Hb(d);
            };
            this.Oya = ({ data: d }) => {
              if (d)
                try {
                  this.handler.ayb(d);
                } catch (e) {
                  this.K.Hb(e);
                }
              else
                this.K.error(
                  new B6({
                    code: "internal_error",
                    message: "missing data in 'MessageEvent'",
                  })
                );
            };
            this.port.onmessage = this.Oya;
            this.port.onmessageerror = this.jvb;
          }
        };
        var Xqc = class extends Error {
            constructor() {
              super("[internal_error] Comms promise timed out.");
            }
          },
          crc = class {
            reset(a) {
              a && (this.timeoutMs = a);
              this.setTimeout();
            }
            resolve(a) {
              clearTimeout(this.Vd);
              this.Tyb(a);
            }
            reject(a) {
              clearTimeout(this.Vd);
              this.Z1a(a);
            }
            promise() {
              return this.p;
            }
            setTimeout() {
              clearTimeout(this.Vd);
              this.Vd = setTimeout(() => {
                Yqc(this);
              }, Math.max(this.timeoutMs - 500, 500));
            }
            constructor(a) {
              this.timeoutMs = a;
              this.p = new Promise((b, c) => {
                this.Tyb = b;
                this.Z1a = c;
              });
              this.setTimeout();
            }
          };
        var Mrc = class {
          request(a, b) {
            const c = this.D0a,
              d = new crc(5e3),
              e = this.Kyb(),
              f = (async function () {
                c.set(e, { path: a, Myb: d });
                try {
                  const g = await d.promise();
                  return (0, __c.Aa)(g);
                } catch (g) {
                  return g instanceof Xqc
                    ? Da(
                        new B6({
                          code: "internal_error",
                          message: `Comms promise timed out (${a}).`,
                        })
                      )
                    : Da(g);
                } finally {
                  c.delete(e);
                }
              })();
            b = this.send(e, a, b);
            b.ok ||
              (this.K.Hb(b.error, {
                Ge: "unable to send request",
                tags: new Map([
                  ["type", "request"],
                  ["path", a],
                ]),
              }),
              d.reject(b.error));
            return f;
          }
          constructor(a, b) {
            this.send = a;
            this.K = b;
            this.Kyb = __c.vm;
            this.D0a = new Map();
          }
        };
        var Nrc = class {
          handle(a, b) {
            if (this.sX.has(a))
              throw new B6({
                code: "internal_error",
                message: `Handler for '${a}' is already defined.`,
              });
            this.sX.set(a, b);
          }
          constructor(a, b) {
            var c = console;
            this.P4 = a;
            this.K = b;
            this.Iyb = !0;
            this.gib = c;
            this.sX = new Map();
            this.gkb = new Set();
          }
        };
        var xrc = class {
            constructor(a, b) {
              this.request = (c, d) => this.client.request(c, d);
              this.handle = (c, d) => this.sX.handle(c, d);
              a = new Orc(
                (c) => {
                  switch (c.type) {
                    case "ack":
                    case "error":
                    case "response":
                      var d = this.client;
                      const e = c.requestId,
                        f = c.type,
                        { path: g, Myb: h } = d.D0a.get(e) || {};
                      if (h)
                        switch (f) {
                          case "response":
                            h.resolve(c.payload);
                            break;
                          case "ack":
                            h.reset(2e4);
                            break;
                          case "error":
                            d.K.RZ({
                              level: "info",
                              category: "sandbox_comms",
                              message: "Error response received",
                              data: {
                                path:
                                  g !== null && g !== void 0 ? g : "unknown",
                              },
                            });
                            h.reject(
                              new B6({ code: c.code, message: c.message })
                            );
                            break;
                          default:
                            throw new __c.E(c);
                        }
                      else
                        f !== "ack" &&
                          d.K.error(
                            "request has already been handled and resolved or was not sent from this client",
                            {
                              tags: new Map([
                                ["type", f],
                                ["requestId", `${e}`],
                              ]),
                            }
                          );
                      break;
                    case "request":
                      $qc(this.sX, c);
                      break;
                    default:
                      throw new __c.E(c);
                  }
                },
                a,
                b.Vf("bus")
              );
              this.client = new Mrc(a.hA, b.Vf("client"));
              this.sX = new Nrc(a, b.Vf("requestHandler"));
            }
          },
          Orc = class {
            constructor(a, b, c) {
              this.Zda = a;
              this.hA = (d, e, f) =>
                this.x_.send({
                  type: "request",
                  requestId: d,
                  path: e,
                  payload: f,
                });
              this.wvb = (d) => {
                switch (d.type) {
                  case "ack":
                    this.Zda({ type: "ack", requestId: d.requestId });
                    break;
                  case "error":
                    this.Zda({
                      type: "error",
                      requestId: d.requestId,
                      code: d.code,
                      message: d.message,
                    });
                    break;
                  case "response":
                    this.Zda({
                      type: "response",
                      requestId: d.requestId,
                      payload: d.payload,
                    });
                    break;
                  case "request":
                    this.Zda({
                      type: "request",
                      requestId: d.requestId,
                      path: d.path,
                      payload: d.payload,
                    });
                    break;
                  default:
                    throw new __c.E(d);
                }
              };
              this.x_ = new Lrc({ ayb: this.wvb }, b, c);
            }
          };
        var arc = { NHa: "null", w3a: "*" };
        var frc =
          "canva-dev.com canva-dev.cn canva-staging.com canva-staging.cn canva.com canva.cn canva-apps.com canva-apps.cn canva-apps-dev.com canva-apps-dev.cn canva-apps-staging.com canva-apps-staging.cn".split(
            " "
          );
        var hrc = H(() => ({ config: __c.Y(1) }));
        var irc = H(() => ({}));
        var krc = H(() => ({ config: X(1) }));
        var lrc = H(() => ({}));
        var Arc = class {
          constructor(a) {
            this.Faa = a;
          }
        };
        var nrc = H(() => ({ config: __c.Y(1) }));
        var C6 = H(() => ({
          type: __c.F("A?", 1, "RECOLORABLE"),
          id: X(1),
          value: X(2),
        }));
        var Prc = H(() => ({ borderRadius: JH(1), borderWidth: JH(2) }));
        var D6 = H(() => ({
          type: __c.F("A?", 2, "BORDERABLE"),
          id: X(1),
          value: __c.Oa(2, Prc),
        }));
        var prc = H(() => ({
          config: X(1),
          width: JH(2),
          height: JH(3),
          lX: __c.Pa(4, C6),
          qeb: __c.Pa(5, D6),
        }));
        var rrc = __c.bb(
          () => ({ type: [1, C6, 2, D6] }),
          () => ({})
        );
        var src = H(() => ({ config: X(1), width: JH(2), height: JH(3) }));
        var urc = H(() => ({
          config: X(1),
          width: JH(2),
          height: JH(3),
          lX: __c.Pa(4, C6),
          qeb: __c.Pa(5, D6),
        }));
        var vrc = H(() => ({}));
        var yrc = class {
          constructor(a) {
            this.Faa = a;
          }
        };
        var Qrc = class {
          async wz(a, b) {
            const c = await Brc(a, this.K, {
                Oua: (e) => {
                  var f;
                  (f = this.config.gca) === null || f === void 0 || f.wHa(e, b);
                  return new lrc();
                },
              }),
              d = Crc(
                () => b.config,
                async (e) => jrc(c, { config: e })
              );
            this.Bg.set(a, d);
            await jrc(c, { config: b.config });
          }
          QP(a) {
            var b;
            (b = this.Bg.get(a)) === null || b === void 0 || b();
            this.Bg.delete(a);
          }
          constructor(a, b) {
            this.config = a;
            this.K = b;
            this.Bg = new Map();
          }
        };
        var Rrc = class {
          async wz(a, b) {
            var c;
            const d = (g) => trc(f, new C6(g)),
              e = this.config.gca;
            e &&
              (c = {
                Oua: (g) => {
                  e.wHa(g, b, d);
                  return new vrc();
                },
              });
            const f = await zrc(a, this.K, c);
            c = Crc(
              () => b.config,
              async (g) => {
                const h = await qrc(f, { config: g });
                h.config &&
                  h.config !== g &&
                  (e === null || e === void 0 || e.wHa(h, b, d));
              }
            );
            this.Bg.set(a, c);
            a = await qrc(f, { config: b.config });
            e === null || e === void 0 || e.wHa(a, b, d);
          }
          QP(a) {
            var b;
            (b = this.Bg.get(a)) === null || b === void 0 || b();
            this.Bg.delete(a);
          }
          constructor(a, b) {
            this.config = a;
            this.K = b;
            this.Bg = new Map();
          }
        };
        var Src = __c.x6()(({ Eaa: a }) => {
          a = a.K;
          const b = new Krc(),
            c = new Rrc(b, a);
          return Wqc(
            ({ data: { element: d }, Nn: { Vab: e } }) =>
              Drc(e, {
                url: d.yNa.id,
                wz: (f) => c.wz(f, d),
                QP: (f) => c.QP(f),
              }),
            { config: b, JLb: new Qrc(b, a) }
          );
        });
        __c.EXa = {
          WPb: function (a) {
            function b({ id: e, Br: f }, g) {
              return d.Qob(e, f, g());
            }
            const c = a.l$a,
              d = a.JEb;
            return {
              eU: c.eU
                ? Promise.all([
                    c.eU,
                    __webpack_require__.me(270376).then(() => __c.E6),
                    __webpack_require__.me(309241).then(() => __c.F6),
                    __webpack_require__.me(726606).then(() => __c.G6),
                    __webpack_require__.me(555219).then(() => __c.H6),
                    __webpack_require__.me(756388).then(() => __c.I6),
                    __webpack_require__.me(516583).then(() => __c.J6),
                    __webpack_require__.me(93698).then(() => __c.K6),
                    __webpack_require__.me(295247).then(() => __c.L6),
                  ]).then(([e, f, g, h, k, l, m, n, p]) => ({
                    sba: b(e.sba, f.om),
                    tba: b(e.tba, g.om),
                    uba: b(e.uba, h.om),
                    vba: b(e.vba, k.om),
                    wba: b(e.wba, l.om),
                    xba: b(e.xba, m.om),
                    yba: b(e.yba, n.om),
                    zba: b(e.zba, p.om),
                  }))
                : void 0,
              scene: c.scene
                ? Promise.all([
                    c.scene,
                    __webpack_require__.me(416029).then(() => __c.M6),
                  ]).then(([e, f]) => b(e, f.om))
                : void 0,
              vaa: b(c.vaa, Jrc),
              D$: b(c.D$, Erc),
              wW: c.wW
                ? Promise.all([
                    c.wW,
                    __webpack_require__.me(870165).then(() => __c.N6),
                  ]).then(([e, f]) => b(e, f.om))
                : void 0,
            };
          },
          $ob: function (a) {
            function b({ Gn: h, kv: k, xf: l, sY: m = "default" }) {
              const n = k.id;
              k = k.Br;
              h = d.Wob(
                n,
                k,
                l({
                  Eaa: { ...f, Za: e.Du(`widgets.rendering.clients.${m}`) },
                  Gn: h,
                })
              );
              return { id: n, Br: k, dVb: h, sY: m };
            }
            const c = a.l$a,
              d = a.a9,
              e = a.uf,
              f = a.Eaa,
              g = a.Gn;
            return {
              D$: b({ Gn: { epa: g.epa }, kv: c.D$, xf: Frc, sY: "blueprint" }),
              eU: c.eU
                ? Promise.all([
                    c.eU,
                    __webpack_require__.me(270376).then(() => __c.E6),
                    __webpack_require__.me(309241).then(() => __c.F6),
                    __webpack_require__.me(726606).then(() => __c.G6),
                    __webpack_require__.me(555219).then(() => __c.H6),
                    __webpack_require__.me(756388).then(() => __c.I6),
                    __webpack_require__.me(516583).then(() => __c.J6),
                    __webpack_require__.me(93698).then(() => __c.K6),
                    __webpack_require__.me(295247).then(() => __c.L6),
                  ]).then(([h, k, l, m, n, p, q, r, t]) => ({
                    sba: b({ Gn: void 0, kv: h.sba, xf: k.xf }),
                    tba: b({ Gn: void 0, kv: h.tba, xf: l.xf }),
                    uba: b({ Gn: void 0, kv: h.uba, xf: m.xf }),
                    vba: b({ Gn: void 0, kv: h.vba, xf: n.xf }),
                    wba: b({ Gn: void 0, kv: h.wba, xf: p.xf }),
                    xba: b({ Gn: void 0, kv: h.xba, xf: q.xf }),
                    yba: b({ Gn: void 0, kv: h.yba, xf: r.xf }),
                    zba: b({ Gn: void 0, kv: h.zba, xf: t.xf }),
                  }))
                : void 0,
              vaa: b({ Gn: void 0, kv: c.vaa, xf: Src, sY: "codelet" }),
              form: c.form
                ? Promise.all([
                    c.form,
                    __webpack_require__.me(313335).then(() => __c.Trc),
                  ]).then(([h, k]) =>
                    b({
                      Gn: { Sta: g.Sta, JI: g.JI },
                      kv: h,
                      xf: k.xf,
                      sY: "form",
                    })
                  )
                : void 0,
              wW: c.wW
                ? Promise.all([
                    c.wW,
                    __webpack_require__.me(870165).then(() => __c.N6),
                  ]).then(([h, k]) =>
                    b({ Gn: void 0, kv: h, xf: k.xf, sY: "navigationMenu" })
                  )
                : void 0,
              scene: c.scene
                ? Promise.all([
                    c.scene,
                    __webpack_require__.me(416029).then(() => __c.M6),
                    g.Kva ? g.Kva() : Promise.resolve(void 0),
                  ]).then(([h, k, l]) =>
                    b({ Gn: { FVb: l }, kv: h, xf: k.xf, sY: "scene" })
                  )
                : void 0,
            };
          },
          apb: function (a) {
            function b(e, f) {
              f = c.Xob(e, f());
              return { id: e, Br: f };
            }
            const c = a.vIa,
              { nRa: d = __c.kn("c79472f0", !1) } = a;
            return {
              D$: b("w:wnJF5T87v", Hrc),
              eU: a.qjb
                ? Promise.all([
                    __webpack_require__.me(270376).then(() => __c.E6),
                    __webpack_require__.me(309241).then(() => __c.F6),
                    __webpack_require__.me(726606).then(() => __c.G6),
                    __webpack_require__.me(555219).then(() => __c.H6),
                    __webpack_require__.me(756388).then(() => __c.I6),
                    __webpack_require__.me(516583).then(() => __c.J6),
                    __webpack_require__.me(93698).then(() => __c.K6),
                    __webpack_require__.me(295247).then(() => __c.L6),
                  ]).then(([e, f, g, h, k, l, m, n]) => ({
                    sba: b("w:cm9wgGptP", e.Lk),
                    tba: b("w:yLMS4dWnl", f.Lk),
                    uba: b("w:2flp30CGQ", g.Lk),
                    vba: b("w:1Nv6K6Dtv", h.Lk),
                    wba: b("w:5Nv6K6Dtv", k.Lk),
                    xba: b("w:6Nv6K6Dtv", l.Lk),
                    yba: b("w:7Nv6K6Dtv", m.Lk),
                    zba: b("w:8Nv6K6Dtv", n.Lk),
                  }))
                : void 0,
              vaa: b("w:JR4G8hDDg", Irc),
              form: d
                ? __webpack_require__
                    .me(313335)
                    .then(() => __c.Trc)
                    .then((e) => b("widget:form", e.Lk))
                : void 0,
              wW: a.Hjb
                ? __webpack_require__
                    .me(870165)
                    .then(() => __c.N6)
                    .then((e) => b("w:K7mQ9xR3p", e.Lk))
                : void 0,
              scene: a.Njb
                ? __webpack_require__
                    .me(416029)
                    .then(() => __c.M6)
                    .then((e) => b("w:2pbXJMtm1", e.Lk))
                : void 0,
            };
          },
        };
      }.call(self, self._5f74ec40302898c5a55451c9fbd04240));
    },
  },
]);
//# sourceMappingURL=sourcemaps/c7b5b90a3f783cf0.js.map
