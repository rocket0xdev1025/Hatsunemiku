(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [68448],
  {
    /***/ 679251: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(905716);
      self._5f74ec40302898c5a55451c9fbd04240 =
        self._5f74ec40302898c5a55451c9fbd04240 || {};
      (function (__c) {
        var lcc = async function (a, b) {
            a.initData || (a.initData = a.init());
            const { segments: c, Odb: d } = await a.initData,
              e = __c.z(c.find((f) => f.oj.ja <= b && b < f.oj.Se) || c.at(-1));
            return kcc(a, e, d, Math.min(b, e.oj.Se));
          },
          kcc = async function (a, b, c, d) {
            b.xpa || (b.xpa = mcc(a, b.PM));
            var e = await b.xpa;
            b.xpa = void 0;
            const f = new Uint8Array(e);
            e = new DataView(e);
            a.wta(b, e);
            let g = 0,
              h = 0;
            const k = __c.Mb(),
              l = new VideoDecoder({
                output: (n) => {
                  h++;
                  h === g ? k.resolve(n) : n.close();
                },
                error(n) {
                  k.reject(n);
                },
              });
            l.configure({
              codec: a.source.codec,
              description: c,
              codedWidth: a.source.width,
              codedHeight: a.source.height,
            });
            a = e.getUint32(0) + 8;
            for (c = b.oj.ja; b.samples.length > g && c <= d; ) {
              e = b.samples[g];
              var m = f.subarray(a, a + e.size);
              m = new EncodedVideoChunk({
                type: g ? "delta" : "key",
                data: m,
                timestamp: c,
              });
              l.decode(m);
              g++;
              c += e.M;
              a += e.size;
            }
            await l.flush();
            return k.promise.finally(() => {
              l.state !== "closed" && l.close();
            });
          },
          mcc = async function (a, b) {
            const c = `${b.Km}-${b.Um}`;
            a = await a
              .fetch(a.source.url, { headers: { Range: `bytes=${c}` } })
              .catch((e) => {
                throw new __c.KR(e);
              });
            if (!a.ok) throw new __c.KR();
            const d = a.headers.get("content-length");
            if (Number(d) === b.Um - b.Km + 1) return a.arrayBuffer();
            throw new RangeError(
              `Unexpected length "${d}" received for range "${c}"`
            );
          },
          t1 = function (a, b) {
            let c = 0,
              d = 0;
            for (; c + 8 < a.byteLength; ) {
              const e = a.getUint32(c);
              if (a.getUint32(c + 4) !== b[d].type) c += e;
              else {
                if (d + 1 === b.length) return new Uint8Array(a.buffer, c, e);
                c += 8 + b[d].bytes;
                d++;
              }
            }
          },
          ncc = __webpack_require__(206928).Sx;
        var occ, pcc, qcc, rcc, scc, tcc, ucc;
        occ = [
          { type: 1836019574, bytes: 0 },
          { type: 1953653099, bytes: 0 },
          { type: 1835297121, bytes: 0 },
          { type: 1835626086, bytes: 0 },
          { type: 1937007212, bytes: 0 },
          { type: 1937011556, bytes: 8 },
          { type: 1635148593, bytes: 78 },
          { type: 1635148611, bytes: 0 },
        ];
        pcc = [
          { type: 1836019558, bytes: 0 },
          { type: 1953653094, bytes: 0 },
          { type: 1952868452, bytes: 0 },
        ];
        qcc = [
          { type: 1836019558, bytes: 0 },
          { type: 1953653094, bytes: 0 },
          { type: 1953658222, bytes: 0 },
        ];
        rcc = class {
          clone() {
            __c.y(!this.closed);
            const a = this.source.then((b) => ({
              data: b,
              close: () => {
                this.instances.delete(a);
                this.instances.size ||
                  ((this.closed = !0), b.close(), this.onClose());
              },
            }));
            this.instances.add(a);
            return a;
          }
          constructor(a, b) {
            this.source = a;
            this.onClose = b;
            this.closed = !1;
            this.instances = new Set();
          }
        };
        scc = class {
          get M() {
            return this.oj.Se - this.oj.ja;
          }
          constructor(a, b, c) {
            this.PM = a;
            this.oj = b;
            this.timescale = c;
            this.samples = [];
          }
        };
        tcc = (...a) => fetch(...a);
        ucc = class {
          Gra(a) {
            __c.w(a >= 0);
            const b = Math.floor(a) * 1e6;
            a = this.cache.get(b);
            a ||
              ((a = new rcc(lcc(this, b), () => this.cache.delete(b))),
              this.cache.set(b, a));
            return ncc(a.clone());
          }
          async init() {
            var a = this.source.q3,
              b = this.source.o3,
              c = await mcc(this, { Km: a.Km, Um: b.Um });
            const d = new Uint8Array(c, 0, a.Um + 1 - a.Km);
            a = new Uint8Array(c, d.byteLength, b.Um + 1 - b.Km);
            c = new DataView(c, d.byteOffset, d.byteLength);
            c = t1(c, occ);
            if (!c) throw Error("Malformed MP4 file, avcC box not found");
            b = this.Rza(a, b);
            if (!b.length) throw Error("Malformed MP4 file, no segments found");
            return { Odb: c.subarray(8), segments: b };
          }
          Rza(a, b) {
            a = new DataView(a.buffer, a.byteOffset + 8);
            var c = a.getInt8(0);
            let d = 8;
            const e = a.getUint32(d);
            d = d + 4 + (c === 0 ? 8 : 16) + 2;
            c = a.getUint16(d);
            d += 2;
            const f = [];
            for (let g = 0; g < c; g++) {
              const h = a.getUint32(d) & 2147483647;
              d += 4;
              const k = a.getUint32(d);
              d += 8;
              const l = (g > 0 ? f[g - 1].PM : b).Um + 1,
                m = g > 0 ? f[g - 1].oj.Se : 0;
              f.push(
                new scc(
                  { Km: l, Um: l + h - 1 },
                  { ja: m, Se: m + (k / e) * 1e6 },
                  e
                )
              );
            }
            return f;
          }
          wta(a, b) {
            var c;
            if (!a.samples.length) {
              var d = t1(b, pcc);
              if (!d) throw Error("Malformed MP4 file, tfhd box not found");
              d = new DataView(d.buffer, d.byteOffset + 9);
              var e = (d.getUint16(0) << 8) + d.getUint8(2);
              var f = 7 + (e & 1 ? 8 : 0) + (e & 2 ? 4 : 0);
              if (e & 8) {
                var g = d.getUint32(f);
                f += 4;
              }
              e & 16 && (c = d.getUint32(f));
              b = t1(b, qcc);
              if (!b) throw Error("Malformed MP4 file, trun box not found");
              b = new DataView(b.buffer, b.byteOffset + 9);
              d = (b.getUint16(0) << 8) + b.getUint8(2);
              e = b.getUint32(3);
              f = 7 + (d & 1 ? 4 : 0) + (d & 4 ? 4 : 0);
              for (let h = 0; h < e; h++) {
                const k = (a.samples[h] = { M: 0, size: 0 });
                if (d & 256)
                  (k.M = (b.getUint32(f) / a.timescale) * 1e6), (f += 4);
                else if (g != null) k.M = (g / a.timescale) * 1e6;
                else
                  throw Error(
                    "Unsupported MP4 file, sample duration not found"
                  );
                if (d & 512) (k.size = b.getUint32(f)), (f += 4);
                else if (c != null) k.size = c;
                else throw Error("Unsupported MP4 file, sample size not found");
                f += d & 1024 ? 4 : 0;
                f += d & 2048 ? 4 : 0;
              }
            }
          }
          constructor(a, b = tcc) {
            this.source = a;
            this.fetch = b;
            this.cache = new Map();
            if (typeof VideoDecoder === "undefined")
              throw new TypeError("FrameDecoder is not supported");
          }
        };
        __c.Gqa = {};
        __c.Gqa.Pab = ucc;
      }.call(self, self._5f74ec40302898c5a55451c9fbd04240));
    },
  },
]);
//# sourceMappingURL=sourcemaps/ddad6b3db17ca0e4.js.map
