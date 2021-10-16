var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
export function renderAstroComponent(component) {
    var component_1, component_1_1;
    var e_1, _a;
    return __awaiter(this, void 0, void 0, function* () {
        let template = '';
        try {
            for (component_1 = __asyncValues(component); component_1_1 = yield component_1.next(), !component_1_1.done;) {
                const value = component_1_1.value;
                if (value || value === 0) {
                    template += value;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (component_1_1 && !component_1_1.done && (_a = component_1.return)) yield _a.call(component_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return template;
    });
}
export function renderToString(result, componentFactory, props, children = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const Component = yield componentFactory(result, props, children);
        let template = yield renderAstroComponent(Component);
        return template;
    });
}
export function renderPage(result, Component, props, children) {
    return __awaiter(this, void 0, void 0, function* () {
        const template = yield renderToString(result, Component, props, children);
        const styles = Array.from(result.styles).map(style => renderElement('style', style));
        const scripts = Array.from(result.scripts).map(script => renderElement('script', script));
        return template.replace("</head>", styles.join('\n') + scripts.join('\n') + "</head>");
    });
}
function renderElement(name, { props: _props, children = '' }) {
    const { hoist: _, "data-astro-id": astroId, "define:vars": defineVars } = _props, props = __rest(_props, ["hoist", "data-astro-id", "define:vars"]);
    if (defineVars) {
        if (name === 'style') {
            children = defineStyleVars(astroId, defineVars) + '\n' + children;
        }
        if (name === 'script') {
            children = defineScriptVars(defineVars) + '\n' + children;
        }
    }
    return `<${name}${spreadAttributes(props)}>${children}</${name}>`;
}
// import { valueToEstree, Value } from 'estree-util-value-to-estree';
// import * as astring from 'astring';
var or = Object.defineProperty;
var Cr = o => or(o, "__esModule", { value: !0 });
var Br = (o, r) => { Cr(o); for (var e in r)
    or(o, e, { get: r[e], enumerable: !0 }); };
var Dr = o => { if (Object.prototype.toString.call(o) !== "[object Object]")
    return !1; let r = Object.getPrototypeOf(o); return r === null || r === Object.prototype; }, sr = Dr;
var pr = typeof global != "undefined" ? global : typeof self != "undefined" ? self : typeof window != "undefined" ? window : {}, U = [], I = [], Mr = typeof Uint8Array != "undefined" ? Uint8Array : Array, X = !1;
function ur() { X = !0; for (var o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", r = 0, e = o.length; r < e; ++r)
    U[r] = o[r], I[o.charCodeAt(r)] = r; I["-".charCodeAt(0)] = 62, I["_".charCodeAt(0)] = 63; }
function kr(o) { X || ur(); var r, e, n, s, u, p, w = o.length; if (w % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4"); u = o[w - 2] === "=" ? 2 : o[w - 1] === "=" ? 1 : 0, p = new Mr(w * 3 / 4 - u), n = u > 0 ? w - 4 : w; var E = 0; for (r = 0, e = 0; r < n; r += 4, e += 3)
    s = I[o.charCodeAt(r)] << 18 | I[o.charCodeAt(r + 1)] << 12 | I[o.charCodeAt(r + 2)] << 6 | I[o.charCodeAt(r + 3)], p[E++] = s >> 16 & 255, p[E++] = s >> 8 & 255, p[E++] = s & 255; return u === 2 ? (s = I[o.charCodeAt(r)] << 2 | I[o.charCodeAt(r + 1)] >> 4, p[E++] = s & 255) : u === 1 && (s = I[o.charCodeAt(r)] << 10 | I[o.charCodeAt(r + 1)] << 4 | I[o.charCodeAt(r + 2)] >> 2, p[E++] = s >> 8 & 255, p[E++] = s & 255), p; }
function Nr(o) { return U[o >> 18 & 63] + U[o >> 12 & 63] + U[o >> 6 & 63] + U[o & 63]; }
function Lr(o, r, e) { for (var n, s = [], u = r; u < e; u += 3)
    n = (o[u] << 16) + (o[u + 1] << 8) + o[u + 2], s.push(Nr(n)); return s.join(""); }
function lr(o) { X || ur(); for (var r, e = o.length, n = e % 3, s = "", u = [], p = 16383, w = 0, E = e - n; w < E; w += p)
    u.push(Lr(o, w, w + p > E ? E : w + p)); return n === 1 ? (r = o[e - 1], s += U[r >> 2], s += U[r << 4 & 63], s += "==") : n === 2 && (r = (o[e - 2] << 8) + o[e - 1], s += U[r >> 10], s += U[r >> 4 & 63], s += U[r << 2 & 63], s += "="), u.push(s), u.join(""); }
function j(o, r, e, n, s) { var u, p, w = s * 8 - n - 1, E = (1 << w) - 1, g = E >> 1, d = -7, m = e ? s - 1 : 0, _ = e ? -1 : 1, T = o[r + m]; for (m += _, u = T & (1 << -d) - 1, T >>= -d, d += w; d > 0; u = u * 256 + o[r + m], m += _, d -= 8)
    ; for (p = u & (1 << -d) - 1, u >>= -d, d += n; d > 0; p = p * 256 + o[r + m], m += _, d -= 8)
    ; if (u === 0)
    u = 1 - g;
else {
    if (u === E)
        return p ? NaN : (T ? -1 : 1) * (1 / 0);
    p = p + Math.pow(2, n), u = u - g;
} return (T ? -1 : 1) * p * Math.pow(2, u - n); }
function ar(o, r, e, n, s, u) { var p, w, E, g = u * 8 - s - 1, d = (1 << g) - 1, m = d >> 1, _ = s === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, T = n ? 0 : u - 1, D = n ? 1 : -1, Y = r < 0 || r === 0 && 1 / r < 0 ? 1 : 0; for (r = Math.abs(r), isNaN(r) || r === 1 / 0 ? (w = isNaN(r) ? 1 : 0, p = d) : (p = Math.floor(Math.log(r) / Math.LN2), r * (E = Math.pow(2, -p)) < 1 && (p--, E *= 2), p + m >= 1 ? r += _ / E : r += _ * Math.pow(2, 1 - m), r * E >= 2 && (p++, E /= 2), p + m >= d ? (w = 0, p = d) : p + m >= 1 ? (w = (r * E - 1) * Math.pow(2, s), p = p + m) : (w = r * Math.pow(2, m - 1) * Math.pow(2, s), p = 0)); s >= 8; o[e + T] = w & 255, T += D, w /= 256, s -= 8)
    ; for (p = p << s | w, g += s; g > 0; o[e + T] = p & 255, T += D, p /= 256, g -= 8)
    ; o[e + T - D] |= Y * 128; }
var Yr = {}.toString, cr = Array.isArray || function (o) { return Yr.call(o) == "[object Array]"; };
var Or = 50;
c.TYPED_ARRAY_SUPPORT = pr.TYPED_ARRAY_SUPPORT !== void 0 ? pr.TYPED_ARRAY_SUPPORT : !0;
function H() { return c.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823; }
function B(o, r) { if (H() < r)
    throw new RangeError("Invalid typed array length"); return c.TYPED_ARRAY_SUPPORT ? (o = new Uint8Array(r), o.__proto__ = c.prototype) : (o === null && (o = new c(r)), o.length = r), o; }
function c(o, r, e) { if (!c.TYPED_ARRAY_SUPPORT && !(this instanceof c))
    return new c(o, r, e); if (typeof o == "number") {
    if (typeof r == "string")
        throw new Error("If encoding is specified then the first argument must be a string");
    return $(this, o);
} return hr(this, o, r, e); }
c.poolSize = 8192;
c._augment = function (o) { return o.__proto__ = c.prototype, o; };
function hr(o, r, e, n) { if (typeof r == "number")
    throw new TypeError('"value" argument must not be a number'); return typeof ArrayBuffer != "undefined" && r instanceof ArrayBuffer ? Wr(o, r, e, n) : typeof r == "string" ? Fr(o, r, e) : qr(o, r); }
c.from = function (o, r, e) { return hr(null, o, r, e); };
c.TYPED_ARRAY_SUPPORT && (c.prototype.__proto__ = Uint8Array.prototype, c.__proto__ = Uint8Array);
function fr(o) { if (typeof o != "number")
    throw new TypeError('"size" argument must be a number'); if (o < 0)
    throw new RangeError('"size" argument must not be negative'); }
function jr(o, r, e, n) { return fr(r), r <= 0 ? B(o, r) : e !== void 0 ? typeof n == "string" ? B(o, r).fill(e, n) : B(o, r).fill(e) : B(o, r); }
c.alloc = function (o, r, e) { return jr(null, o, r, e); };
function $(o, r) { if (fr(r), o = B(o, r < 0 ? 0 : K(r) | 0), !c.TYPED_ARRAY_SUPPORT)
    for (var e = 0; e < r; ++e)
        o[e] = 0; return o; }
c.allocUnsafe = function (o) { return $(null, o); };
c.allocUnsafeSlow = function (o) { return $(null, o); };
function Fr(o, r, e) { if ((typeof e != "string" || e === "") && (e = "utf8"), !c.isEncoding(e))
    throw new TypeError('"encoding" must be a valid string encoding'); var n = wr(r, e) | 0; o = B(o, n); var s = o.write(r, e); return s !== n && (o = o.slice(0, s)), o; }
function J(o, r) { var e = r.length < 0 ? 0 : K(r.length) | 0; o = B(o, e); for (var n = 0; n < e; n += 1)
    o[n] = r[n] & 255; return o; }
function Wr(o, r, e, n) { if (r.byteLength, e < 0 || r.byteLength < e)
    throw new RangeError("'offset' is out of bounds"); if (r.byteLength < e + (n || 0))
    throw new RangeError("'length' is out of bounds"); return e === void 0 && n === void 0 ? r = new Uint8Array(r) : n === void 0 ? r = new Uint8Array(r, e) : r = new Uint8Array(r, e, n), c.TYPED_ARRAY_SUPPORT ? (o = r, o.__proto__ = c.prototype) : o = J(o, r), o; }
function qr(o, r) { if (C(r)) {
    var e = K(r.length) | 0;
    return o = B(o, e), o.length === 0 || r.copy(o, 0, 0, e), o;
} if (r) {
    if (typeof ArrayBuffer != "undefined" && r.buffer instanceof ArrayBuffer || "length" in r)
        return typeof r.length != "number" || pe(r.length) ? B(o, 0) : J(o, r);
    if (r.type === "Buffer" && cr(r.data))
        return J(o, r.data);
} throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."); }
function K(o) { if (o >= H())
    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + H().toString(16) + " bytes"); return o | 0; }
c.isBuffer = ue;
function C(o) { return !!(o != null && o._isBuffer); }
c.compare = function (r, e) { if (!C(r) || !C(e))
    throw new TypeError("Arguments must be Buffers"); if (r === e)
    return 0; for (var n = r.length, s = e.length, u = 0, p = Math.min(n, s); u < p; ++u)
    if (r[u] !== e[u]) {
        n = r[u], s = e[u];
        break;
    } return n < s ? -1 : s < n ? 1 : 0; };
c.isEncoding = function (r) { switch (String(r).toLowerCase()) {
    case "hex":
    case "utf8":
    case "utf-8":
    case "ascii":
    case "latin1":
    case "binary":
    case "base64":
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le": return !0;
    default: return !1;
} };
c.concat = function (r, e) { if (!cr(r))
    throw new TypeError('"list" argument must be an Array of Buffers'); if (r.length === 0)
    return c.alloc(0); var n; if (e === void 0)
    for (e = 0, n = 0; n < r.length; ++n)
        e += r[n].length; var s = c.allocUnsafe(e), u = 0; for (n = 0; n < r.length; ++n) {
    var p = r[n];
    if (!C(p))
        throw new TypeError('"list" argument must be an Array of Buffers');
    p.copy(s, u), u += p.length;
} return s; };
function wr(o, r) { if (C(o))
    return o.length; if (typeof ArrayBuffer != "undefined" && typeof ArrayBuffer.isView == "function" && (ArrayBuffer.isView(o) || o instanceof ArrayBuffer))
    return o.byteLength; typeof o != "string" && (o = "" + o); var e = o.length; if (e === 0)
    return 0; for (var n = !1;;)
    switch (r) {
        case "ascii":
        case "latin1":
        case "binary": return e;
        case "utf8":
        case "utf-8":
        case void 0: return q(o).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le": return e * 2;
        case "hex": return e >>> 1;
        case "base64": return Sr(o).length;
        default:
            if (n)
                return q(o).length;
            r = ("" + r).toLowerCase(), n = !0;
    } }
c.byteLength = wr;
function zr(o, r, e) { var n = !1; if ((r === void 0 || r < 0) && (r = 0), r > this.length || ((e === void 0 || e > this.length) && (e = this.length), e <= 0) || (e >>>= 0, r >>>= 0, e <= r))
    return ""; for (o || (o = "utf8");;)
    switch (o) {
        case "hex": return br(this, r, e);
        case "utf8":
        case "utf-8": return gr(this, r, e);
        case "ascii": return Qr(this, r, e);
        case "latin1":
        case "binary": return Zr(this, r, e);
        case "base64": return Jr(this, r, e);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le": return re(this, r, e);
        default:
            if (n)
                throw new TypeError("Unknown encoding: " + o);
            o = (o + "").toLowerCase(), n = !0;
    } }
c.prototype._isBuffer = !0;
function N(o, r, e) { var n = o[r]; o[r] = o[e], o[e] = n; }
c.prototype.swap16 = function () { var r = this.length; if (r % 2 != 0)
    throw new RangeError("Buffer size must be a multiple of 16-bits"); for (var e = 0; e < r; e += 2)
    N(this, e, e + 1); return this; };
c.prototype.swap32 = function () { var r = this.length; if (r % 4 != 0)
    throw new RangeError("Buffer size must be a multiple of 32-bits"); for (var e = 0; e < r; e += 4)
    N(this, e, e + 3), N(this, e + 1, e + 2); return this; };
c.prototype.swap64 = function () { var r = this.length; if (r % 8 != 0)
    throw new RangeError("Buffer size must be a multiple of 64-bits"); for (var e = 0; e < r; e += 8)
    N(this, e, e + 7), N(this, e + 1, e + 6), N(this, e + 2, e + 5), N(this, e + 3, e + 4); return this; };
c.prototype.toString = function () { var r = this.length | 0; return r === 0 ? "" : arguments.length === 0 ? gr(this, 0, r) : zr.apply(this, arguments); };
c.prototype.equals = function (r) { if (!C(r))
    throw new TypeError("Argument must be a Buffer"); return this === r ? !0 : c.compare(this, r) === 0; };
c.prototype.inspect = function () { var r = "", e = Or; return this.length > 0 && (r = this.toString("hex", 0, e).match(/.{2}/g).join(" "), this.length > e && (r += " ... ")), "<Buffer " + r + ">"; };
c.prototype.compare = function (r, e, n, s, u) { if (!C(r))
    throw new TypeError("Argument must be a Buffer"); if (e === void 0 && (e = 0), n === void 0 && (n = r ? r.length : 0), s === void 0 && (s = 0), u === void 0 && (u = this.length), e < 0 || n > r.length || s < 0 || u > this.length)
    throw new RangeError("out of range index"); if (s >= u && e >= n)
    return 0; if (s >= u)
    return -1; if (e >= n)
    return 1; if (e >>>= 0, n >>>= 0, s >>>= 0, u >>>= 0, this === r)
    return 0; for (var p = u - s, w = n - e, E = Math.min(p, w), g = this.slice(s, u), d = r.slice(e, n), m = 0; m < E; ++m)
    if (g[m] !== d[m]) {
        p = g[m], w = d[m];
        break;
    } return p < w ? -1 : w < p ? 1 : 0; };
function mr(o, r, e, n, s) { if (o.length === 0)
    return -1; if (typeof e == "string" ? (n = e, e = 0) : e > 2147483647 ? e = 2147483647 : e < -2147483648 && (e = -2147483648), e = +e, isNaN(e) && (e = s ? 0 : o.length - 1), e < 0 && (e = o.length + e), e >= o.length) {
    if (s)
        return -1;
    e = o.length - 1;
}
else if (e < 0)
    if (s)
        e = 0;
    else
        return -1; if (typeof r == "string" && (r = c.from(r, n)), C(r))
    return r.length === 0 ? -1 : yr(o, r, e, n, s); if (typeof r == "number")
    return r = r & 255, c.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf == "function" ? s ? Uint8Array.prototype.indexOf.call(o, r, e) : Uint8Array.prototype.lastIndexOf.call(o, r, e) : yr(o, [r], e, n, s); throw new TypeError("val must be string, number or Buffer"); }
function yr(o, r, e, n, s) { var u = 1, p = o.length, w = r.length; if (n !== void 0 && (n = String(n).toLowerCase(), n === "ucs2" || n === "ucs-2" || n === "utf16le" || n === "utf-16le")) {
    if (o.length < 2 || r.length < 2)
        return -1;
    u = 2, p /= 2, w /= 2, e /= 2;
} function E(T, D) { return u === 1 ? T[D] : T.readUInt16BE(D * u); } var g; if (s) {
    var d = -1;
    for (g = e; g < p; g++)
        if (E(o, g) === E(r, d === -1 ? 0 : g - d)) {
            if (d === -1 && (d = g), g - d + 1 === w)
                return d * u;
        }
        else
            d !== -1 && (g -= g - d), d = -1;
}
else
    for (e + w > p && (e = p - w), g = e; g >= 0; g--) {
        for (var m = !0, _ = 0; _ < w; _++)
            if (E(o, g + _) !== E(r, _)) {
                m = !1;
                break;
            }
        if (m)
            return g;
    } return -1; }
c.prototype.includes = function (r, e, n) { return this.indexOf(r, e, n) !== -1; };
c.prototype.indexOf = function (r, e, n) { return mr(this, r, e, n, !0); };
c.prototype.lastIndexOf = function (r, e, n) { return mr(this, r, e, n, !1); };
function Vr(o, r, e, n) { e = Number(e) || 0; var s = o.length - e; n ? (n = Number(n), n > s && (n = s)) : n = s; var u = r.length; if (u % 2 != 0)
    throw new TypeError("Invalid hex string"); n > u / 2 && (n = u / 2); for (var p = 0; p < n; ++p) {
    var w = parseInt(r.substr(p * 2, 2), 16);
    if (isNaN(w))
        return p;
    o[e + p] = w;
} return p; }
function Gr(o, r, e, n) { return z(q(r, o.length - e), o, e, n); }
function Er(o, r, e, n) { return z(oe(r), o, e, n); }
function Xr(o, r, e, n) { return Er(o, r, e, n); }
function Hr(o, r, e, n) { return z(Sr(r), o, e, n); }
function $r(o, r, e, n) { return z(se(r, o.length - e), o, e, n); }
c.prototype.write = function (r, e, n, s) { if (e === void 0)
    s = "utf8", n = this.length, e = 0;
else if (n === void 0 && typeof e == "string")
    s = e, n = this.length, e = 0;
else if (isFinite(e))
    e = e | 0, isFinite(n) ? (n = n | 0, s === void 0 && (s = "utf8")) : (s = n, n = void 0);
else
    throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported"); var u = this.length - e; if ((n === void 0 || n > u) && (n = u), r.length > 0 && (n < 0 || e < 0) || e > this.length)
    throw new RangeError("Attempt to write outside buffer bounds"); s || (s = "utf8"); for (var p = !1;;)
    switch (s) {
        case "hex": return Vr(this, r, e, n);
        case "utf8":
        case "utf-8": return Gr(this, r, e, n);
        case "ascii": return Er(this, r, e, n);
        case "latin1":
        case "binary": return Xr(this, r, e, n);
        case "base64": return Hr(this, r, e, n);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le": return $r(this, r, e, n);
        default:
            if (p)
                throw new TypeError("Unknown encoding: " + s);
            s = ("" + s).toLowerCase(), p = !0;
    } };
c.prototype.toJSON = function () { return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) }; };
function Jr(o, r, e) { return r === 0 && e === o.length ? lr(o) : lr(o.slice(r, e)); }
function gr(o, r, e) { e = Math.min(o.length, e); for (var n = [], s = r; s < e;) {
    var u = o[s], p = null, w = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
    if (s + w <= e) {
        var E, g, d, m;
        switch (w) {
            case 1:
                u < 128 && (p = u);
                break;
            case 2:
                E = o[s + 1], (E & 192) == 128 && (m = (u & 31) << 6 | E & 63, m > 127 && (p = m));
                break;
            case 3:
                E = o[s + 1], g = o[s + 2], (E & 192) == 128 && (g & 192) == 128 && (m = (u & 15) << 12 | (E & 63) << 6 | g & 63, m > 2047 && (m < 55296 || m > 57343) && (p = m));
                break;
            case 4: E = o[s + 1], g = o[s + 2], d = o[s + 3], (E & 192) == 128 && (g & 192) == 128 && (d & 192) == 128 && (m = (u & 15) << 18 | (E & 63) << 12 | (g & 63) << 6 | d & 63, m > 65535 && m < 1114112 && (p = m));
        }
    }
    p === null ? (p = 65533, w = 1) : p > 65535 && (p -= 65536, n.push(p >>> 10 & 1023 | 55296), p = 56320 | p & 1023), n.push(p), s += w;
} return Kr(n); }
var dr = 4096;
function Kr(o) { var r = o.length; if (r <= dr)
    return String.fromCharCode.apply(String, o); for (var e = "", n = 0; n < r;)
    e += String.fromCharCode.apply(String, o.slice(n, n += dr)); return e; }
function Qr(o, r, e) { var n = ""; e = Math.min(o.length, e); for (var s = r; s < e; ++s)
    n += String.fromCharCode(o[s] & 127); return n; }
function Zr(o, r, e) { var n = ""; e = Math.min(o.length, e); for (var s = r; s < e; ++s)
    n += String.fromCharCode(o[s]); return n; }
function br(o, r, e) { var n = o.length; (!r || r < 0) && (r = 0), (!e || e < 0 || e > n) && (e = n); for (var s = "", u = r; u < e; ++u)
    s += ne(o[u]); return s; }
function re(o, r, e) { for (var n = o.slice(r, e), s = "", u = 0; u < n.length; u += 2)
    s += String.fromCharCode(n[u] + n[u + 1] * 256); return s; }
c.prototype.slice = function (r, e) { var n = this.length; r = ~~r, e = e === void 0 ? n : ~~e, r < 0 ? (r += n, r < 0 && (r = 0)) : r > n && (r = n), e < 0 ? (e += n, e < 0 && (e = 0)) : e > n && (e = n), e < r && (e = r); var s; if (c.TYPED_ARRAY_SUPPORT)
    s = this.subarray(r, e), s.__proto__ = c.prototype;
else {
    var u = e - r;
    s = new c(u, void 0);
    for (var p = 0; p < u; ++p)
        s[p] = this[p + r];
} return s; };
function S(o, r, e) { if (o % 1 != 0 || o < 0)
    throw new RangeError("offset is not uint"); if (o + r > e)
    throw new RangeError("Trying to access beyond buffer length"); }
c.prototype.readUIntLE = function (r, e, n) { r = r | 0, e = e | 0, n || S(r, e, this.length); for (var s = this[r], u = 1, p = 0; ++p < e && (u *= 256);)
    s += this[r + p] * u; return s; };
c.prototype.readUIntBE = function (r, e, n) { r = r | 0, e = e | 0, n || S(r, e, this.length); for (var s = this[r + --e], u = 1; e > 0 && (u *= 256);)
    s += this[r + --e] * u; return s; };
c.prototype.readUInt8 = function (r, e) { return e || S(r, 1, this.length), this[r]; };
c.prototype.readUInt16LE = function (r, e) { return e || S(r, 2, this.length), this[r] | this[r + 1] << 8; };
c.prototype.readUInt16BE = function (r, e) { return e || S(r, 2, this.length), this[r] << 8 | this[r + 1]; };
c.prototype.readUInt32LE = function (r, e) { return e || S(r, 4, this.length), (this[r] | this[r + 1] << 8 | this[r + 2] << 16) + this[r + 3] * 16777216; };
c.prototype.readUInt32BE = function (r, e) { return e || S(r, 4, this.length), this[r] * 16777216 + (this[r + 1] << 16 | this[r + 2] << 8 | this[r + 3]); };
c.prototype.readIntLE = function (r, e, n) { r = r | 0, e = e | 0, n || S(r, e, this.length); for (var s = this[r], u = 1, p = 0; ++p < e && (u *= 256);)
    s += this[r + p] * u; return u *= 128, s >= u && (s -= Math.pow(2, 8 * e)), s; };
c.prototype.readIntBE = function (r, e, n) { r = r | 0, e = e | 0, n || S(r, e, this.length); for (var s = e, u = 1, p = this[r + --s]; s > 0 && (u *= 256);)
    p += this[r + --s] * u; return u *= 128, p >= u && (p -= Math.pow(2, 8 * e)), p; };
c.prototype.readInt8 = function (r, e) { return e || S(r, 1, this.length), this[r] & 128 ? (255 - this[r] + 1) * -1 : this[r]; };
c.prototype.readInt16LE = function (r, e) { e || S(r, 2, this.length); var n = this[r] | this[r + 1] << 8; return n & 32768 ? n | 4294901760 : n; };
c.prototype.readInt16BE = function (r, e) { e || S(r, 2, this.length); var n = this[r + 1] | this[r] << 8; return n & 32768 ? n | 4294901760 : n; };
c.prototype.readInt32LE = function (r, e) { return e || S(r, 4, this.length), this[r] | this[r + 1] << 8 | this[r + 2] << 16 | this[r + 3] << 24; };
c.prototype.readInt32BE = function (r, e) { return e || S(r, 4, this.length), this[r] << 24 | this[r + 1] << 16 | this[r + 2] << 8 | this[r + 3]; };
c.prototype.readFloatLE = function (r, e) { return e || S(r, 4, this.length), j(this, r, !0, 23, 4); };
c.prototype.readFloatBE = function (r, e) { return e || S(r, 4, this.length), j(this, r, !1, 23, 4); };
c.prototype.readDoubleLE = function (r, e) { return e || S(r, 8, this.length), j(this, r, !0, 52, 8); };
c.prototype.readDoubleBE = function (r, e) { return e || S(r, 8, this.length), j(this, r, !1, 52, 8); };
function R(o, r, e, n, s, u) { if (!C(o))
    throw new TypeError('"buffer" argument must be a Buffer instance'); if (r > s || r < u)
    throw new RangeError('"value" argument is out of bounds'); if (e + n > o.length)
    throw new RangeError("Index out of range"); }
c.prototype.writeUIntLE = function (r, e, n, s) { if (r = +r, e = e | 0, n = n | 0, !s) {
    var u = Math.pow(2, 8 * n) - 1;
    R(this, r, e, n, u, 0);
} var p = 1, w = 0; for (this[e] = r & 255; ++w < n && (p *= 256);)
    this[e + w] = r / p & 255; return e + n; };
c.prototype.writeUIntBE = function (r, e, n, s) { if (r = +r, e = e | 0, n = n | 0, !s) {
    var u = Math.pow(2, 8 * n) - 1;
    R(this, r, e, n, u, 0);
} var p = n - 1, w = 1; for (this[e + p] = r & 255; --p >= 0 && (w *= 256);)
    this[e + p] = r / w & 255; return e + n; };
c.prototype.writeUInt8 = function (r, e, n) { return r = +r, e = e | 0, n || R(this, r, e, 1, 255, 0), c.TYPED_ARRAY_SUPPORT || (r = Math.floor(r)), this[e] = r & 255, e + 1; };
function F(o, r, e, n) { r < 0 && (r = 65535 + r + 1); for (var s = 0, u = Math.min(o.length - e, 2); s < u; ++s)
    o[e + s] = (r & 255 << 8 * (n ? s : 1 - s)) >>> (n ? s : 1 - s) * 8; }
c.prototype.writeUInt16LE = function (r, e, n) { return r = +r, e = e | 0, n || R(this, r, e, 2, 65535, 0), c.TYPED_ARRAY_SUPPORT ? (this[e] = r & 255, this[e + 1] = r >>> 8) : F(this, r, e, !0), e + 2; };
c.prototype.writeUInt16BE = function (r, e, n) { return r = +r, e = e | 0, n || R(this, r, e, 2, 65535, 0), c.TYPED_ARRAY_SUPPORT ? (this[e] = r >>> 8, this[e + 1] = r & 255) : F(this, r, e, !1), e + 2; };
function W(o, r, e, n) { r < 0 && (r = 4294967295 + r + 1); for (var s = 0, u = Math.min(o.length - e, 4); s < u; ++s)
    o[e + s] = r >>> (n ? s : 3 - s) * 8 & 255; }
c.prototype.writeUInt32LE = function (r, e, n) { return r = +r, e = e | 0, n || R(this, r, e, 4, 4294967295, 0), c.TYPED_ARRAY_SUPPORT ? (this[e + 3] = r >>> 24, this[e + 2] = r >>> 16, this[e + 1] = r >>> 8, this[e] = r & 255) : W(this, r, e, !0), e + 4; };
c.prototype.writeUInt32BE = function (r, e, n) { return r = +r, e = e | 0, n || R(this, r, e, 4, 4294967295, 0), c.TYPED_ARRAY_SUPPORT ? (this[e] = r >>> 24, this[e + 1] = r >>> 16, this[e + 2] = r >>> 8, this[e + 3] = r & 255) : W(this, r, e, !1), e + 4; };
c.prototype.writeIntLE = function (r, e, n, s) { if (r = +r, e = e | 0, !s) {
    var u = Math.pow(2, 8 * n - 1);
    R(this, r, e, n, u - 1, -u);
} var p = 0, w = 1, E = 0; for (this[e] = r & 255; ++p < n && (w *= 256);)
    r < 0 && E === 0 && this[e + p - 1] !== 0 && (E = 1), this[e + p] = (r / w >> 0) - E & 255; return e + n; };
c.prototype.writeIntBE = function (r, e, n, s) { if (r = +r, e = e | 0, !s) {
    var u = Math.pow(2, 8 * n - 1);
    R(this, r, e, n, u - 1, -u);
} var p = n - 1, w = 1, E = 0; for (this[e + p] = r & 255; --p >= 0 && (w *= 256);)
    r < 0 && E === 0 && this[e + p + 1] !== 0 && (E = 1), this[e + p] = (r / w >> 0) - E & 255; return e + n; };
c.prototype.writeInt8 = function (r, e, n) { return r = +r, e = e | 0, n || R(this, r, e, 1, 127, -128), c.TYPED_ARRAY_SUPPORT || (r = Math.floor(r)), r < 0 && (r = 255 + r + 1), this[e] = r & 255, e + 1; };
c.prototype.writeInt16LE = function (r, e, n) { return r = +r, e = e | 0, n || R(this, r, e, 2, 32767, -32768), c.TYPED_ARRAY_SUPPORT ? (this[e] = r & 255, this[e + 1] = r >>> 8) : F(this, r, e, !0), e + 2; };
c.prototype.writeInt16BE = function (r, e, n) { return r = +r, e = e | 0, n || R(this, r, e, 2, 32767, -32768), c.TYPED_ARRAY_SUPPORT ? (this[e] = r >>> 8, this[e + 1] = r & 255) : F(this, r, e, !1), e + 2; };
c.prototype.writeInt32LE = function (r, e, n) { return r = +r, e = e | 0, n || R(this, r, e, 4, 2147483647, -2147483648), c.TYPED_ARRAY_SUPPORT ? (this[e] = r & 255, this[e + 1] = r >>> 8, this[e + 2] = r >>> 16, this[e + 3] = r >>> 24) : W(this, r, e, !0), e + 4; };
c.prototype.writeInt32BE = function (r, e, n) { return r = +r, e = e | 0, n || R(this, r, e, 4, 2147483647, -2147483648), r < 0 && (r = 4294967295 + r + 1), c.TYPED_ARRAY_SUPPORT ? (this[e] = r >>> 24, this[e + 1] = r >>> 16, this[e + 2] = r >>> 8, this[e + 3] = r & 255) : W(this, r, e, !1), e + 4; };
function xr(o, r, e, n, s, u) { if (e + n > o.length)
    throw new RangeError("Index out of range"); if (e < 0)
    throw new RangeError("Index out of range"); }
function Ar(o, r, e, n, s) { return s || xr(o, r, e, 4), ar(o, r, e, n, 23, 4), e + 4; }
c.prototype.writeFloatLE = function (r, e, n) { return Ar(this, r, e, !0, n); };
c.prototype.writeFloatBE = function (r, e, n) { return Ar(this, r, e, !1, n); };
function vr(o, r, e, n, s) { return s || xr(o, r, e, 8), ar(o, r, e, n, 52, 8), e + 8; }
c.prototype.writeDoubleLE = function (r, e, n) { return vr(this, r, e, !0, n); };
c.prototype.writeDoubleBE = function (r, e, n) { return vr(this, r, e, !1, n); };
c.prototype.copy = function (r, e, n, s) { if (n || (n = 0), !s && s !== 0 && (s = this.length), e >= r.length && (e = r.length), e || (e = 0), s > 0 && s < n && (s = n), s === n || r.length === 0 || this.length === 0)
    return 0; if (e < 0)
    throw new RangeError("targetStart out of bounds"); if (n < 0 || n >= this.length)
    throw new RangeError("sourceStart out of bounds"); if (s < 0)
    throw new RangeError("sourceEnd out of bounds"); s > this.length && (s = this.length), r.length - e < s - n && (s = r.length - e + n); var u = s - n, p; if (this === r && n < e && e < s)
    for (p = u - 1; p >= 0; --p)
        r[p + e] = this[p + n];
else if (u < 1e3 || !c.TYPED_ARRAY_SUPPORT)
    for (p = 0; p < u; ++p)
        r[p + e] = this[p + n];
else
    Uint8Array.prototype.set.call(r, this.subarray(n, n + u), e); return u; };
c.prototype.fill = function (r, e, n, s) { if (typeof r == "string") {
    if (typeof e == "string" ? (s = e, e = 0, n = this.length) : typeof n == "string" && (s = n, n = this.length), r.length === 1) {
        var u = r.charCodeAt(0);
        u < 256 && (r = u);
    }
    if (s !== void 0 && typeof s != "string")
        throw new TypeError("encoding must be a string");
    if (typeof s == "string" && !c.isEncoding(s))
        throw new TypeError("Unknown encoding: " + s);
}
else
    typeof r == "number" && (r = r & 255); if (e < 0 || this.length < e || this.length < n)
    throw new RangeError("Out of range index"); if (n <= e)
    return this; e = e >>> 0, n = n === void 0 ? this.length : n >>> 0, r || (r = 0); var p; if (typeof r == "number")
    for (p = e; p < n; ++p)
        this[p] = r;
else {
    var w = C(r) ? r : q(new c(r, s).toString()), E = w.length;
    for (p = 0; p < n - e; ++p)
        this[p + e] = w[p % E];
} return this; };
var ee = /[^+\/0-9A-Za-z-_]/g;
function te(o) { if (o = ie(o).replace(ee, ""), o.length < 2)
    return ""; for (; o.length % 4 != 0;)
    o = o + "="; return o; }
function ie(o) { return o.trim ? o.trim() : o.replace(/^\s+|\s+$/g, ""); }
function ne(o) { return o < 16 ? "0" + o.toString(16) : o.toString(16); }
function q(o, r) { r = r || 1 / 0; for (var e, n = o.length, s = null, u = [], p = 0; p < n; ++p) {
    if (e = o.charCodeAt(p), e > 55295 && e < 57344) {
        if (!s) {
            if (e > 56319) {
                (r -= 3) > -1 && u.push(239, 191, 189);
                continue;
            }
            else if (p + 1 === n) {
                (r -= 3) > -1 && u.push(239, 191, 189);
                continue;
            }
            s = e;
            continue;
        }
        if (e < 56320) {
            (r -= 3) > -1 && u.push(239, 191, 189), s = e;
            continue;
        }
        e = (s - 55296 << 10 | e - 56320) + 65536;
    }
    else
        s && (r -= 3) > -1 && u.push(239, 191, 189);
    if (s = null, e < 128) {
        if ((r -= 1) < 0)
            break;
        u.push(e);
    }
    else if (e < 2048) {
        if ((r -= 2) < 0)
            break;
        u.push(e >> 6 | 192, e & 63 | 128);
    }
    else if (e < 65536) {
        if ((r -= 3) < 0)
            break;
        u.push(e >> 12 | 224, e >> 6 & 63 | 128, e & 63 | 128);
    }
    else if (e < 1114112) {
        if ((r -= 4) < 0)
            break;
        u.push(e >> 18 | 240, e >> 12 & 63 | 128, e >> 6 & 63 | 128, e & 63 | 128);
    }
    else
        throw new Error("Invalid code point");
} return u; }
function oe(o) { for (var r = [], e = 0; e < o.length; ++e)
    r.push(o.charCodeAt(e) & 255); return r; }
function se(o, r) { for (var e, n, s, u = [], p = 0; p < o.length && !((r -= 2) < 0); ++p)
    e = o.charCodeAt(p), n = e >> 8, s = e % 256, u.push(s), u.push(n); return u; }
function Sr(o) { return kr(te(o)); }
function z(o, r, e, n) { for (var s = 0; s < n && !(s + e >= r.length || s >= o.length); ++s)
    r[s + e] = o[s]; return s; }
function pe(o) { return o !== o; }
function ue(o) { return o != null && (!!o._isBuffer || Tr(o) || le(o)); }
function Tr(o) { return !!o.constructor && typeof o.constructor.isBuffer == "function" && o.constructor.isBuffer(o); }
function le(o) { return typeof o.readFloatLE == "function" && typeof o.slice == "function" && Tr(o.slice(0, 0)); }
function ae(o, r, e) { return e = { path: r, exports: {}, require: function (n, s) { return ce(n, s !== null && s !== void 0 ? s : e.path); } }, o(e, e.exports), e.exports; }
function ce() { throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs"); }
var he = ae(function (o, r) { Object.defineProperty(r, "__esModule", { value: !0 }), r.valueToEstree = void 0; function e(n, s = {}) { if (n === void 0)
    return { type: "Identifier", name: "undefined" }; if (n == null)
    return { type: "Literal", value: null, raw: "null" }; if (n === Number.POSITIVE_INFINITY)
    return { type: "Identifier", name: "Infinity" }; if (Number.isNaN(n))
    return { type: "Identifier", name: "NaN" }; if (typeof n == "boolean")
    return { type: "Literal", value: n, raw: String(n) }; if (typeof n == "bigint")
    return n >= 0 ? { type: "Literal", value: n, raw: `${n}n`, bigint: String(n) } : { type: "UnaryExpression", operator: "-", prefix: !0, argument: e(-n, s) }; if (typeof n == "number")
    return n >= 0 ? { type: "Literal", value: n, raw: String(n) } : { type: "UnaryExpression", operator: "-", prefix: !0, argument: e(-n, s) }; if (typeof n == "string")
    return { type: "Literal", value: n, raw: JSON.stringify(n) }; if (typeof n == "symbol") {
    if (n.description && n === Symbol.for(n.description))
        return { type: "CallExpression", optional: !1, callee: { type: "MemberExpression", computed: !1, optional: !1, object: { type: "Identifier", name: "Symbol" }, property: { type: "Identifier", name: "for" } }, arguments: [e(n.description, s)] };
    throw new TypeError(`Only global symbols are supported, got: ${String(n)}`);
} if (Array.isArray(n)) {
    let u = [];
    for (let p = 0; p < n.length; p += 1)
        u.push(p in n ? e(n[p], s) : null);
    return { type: "ArrayExpression", elements: u };
} if (n instanceof RegExp)
    return { type: "Literal", value: n, raw: String(n), regex: { pattern: n.source, flags: n.flags } }; if (n instanceof Date)
    return { type: "NewExpression", callee: { type: "Identifier", name: "Date" }, arguments: [e(n.getTime(), s)] }; if (n instanceof Map)
    return { type: "NewExpression", callee: { type: "Identifier", name: "Map" }, arguments: [e([...n.entries()], s)] }; if (typeof c != "undefined" && c.isBuffer(n))
    return { type: "CallExpression", optional: !1, callee: { type: "MemberExpression", computed: !1, optional: !1, object: { type: "Identifier", name: "Buffer" }, property: { type: "Identifier", name: "from" } }, arguments: [e([...n.values()])] }; if (n instanceof BigInt64Array || n instanceof BigUint64Array || n instanceof Float32Array || n instanceof Float64Array || n instanceof Int8Array || n instanceof Int16Array || n instanceof Int32Array || n instanceof Set || n instanceof Uint8Array || n instanceof Uint8ClampedArray || n instanceof Uint16Array || n instanceof Uint32Array)
    return { type: "NewExpression", callee: { type: "Identifier", name: n.constructor.name }, arguments: [e([...n], s)] }; if (n instanceof URL || n instanceof URLSearchParams)
    return { type: "NewExpression", callee: { type: "Identifier", name: n.constructor.name }, arguments: [e(String(n), s)] }; if (s.instanceAsObject || sr(n))
    return { type: "ObjectExpression", properties: Object.entries(n).map(([u, p]) => ({ type: "Property", method: !1, shorthand: !1, computed: !1, kind: "init", key: e(u, s), value: e(p, s) })) }; throw new TypeError(`Unsupported value: ${String(n)}`); } r.valueToEstree = e; });
var fe = he.valueToEstree;
var _r = {};
Br(_r, { EXPRESSIONS_PRECEDENCE: () => de, GENERATOR: () => xe, NEEDS_PARENTHESES: () => Ae, __moduleExports: () => L, baseGenerator: () => ve, default: () => Rr, generate: () => Se });
var we = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};
function me(o) { return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o; }
function ye(o, r, e) { return e = { path: r, exports: {}, require: function (n, s) { return Ee(n, s !== null && s !== void 0 ? s : e.path); } }, o(e, e.exports), e.exports; }
function Ee() { throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs"); }
var L = ye(function (o, r) {
    (function (e, n) { n(r); })(typeof globalThis == "undefined" ? typeof self == "undefined" ? we : self : globalThis, function (e) {
        var n = String.prototype;
        function s(l, i) { if (!(l instanceof i))
            throw new TypeError("Cannot call a class as a function"); }
        function u(l, i) { for (var t, a = 0; a < i.length; a++)
            t = i[a], t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(l, t.key, t); }
        function p(l, i, t) { return i && u(l.prototype, i), t && u(l, t), l; }
        function w(l, i) { var t = l.generator; if (l.write("("), i != null && 0 < i.length) {
            t[i[0].type](i[0], l);
            for (var a, h = i.length, f = 1; f < h; f++)
                a = i[f], l.write(", "), t[a.type](a, l);
        } l.write(")"); }
        function E(l, i, t, a) { var h = l.expressionsPrecedence[i.type]; if (h === 17)
            return !0; var f = l.expressionsPrecedence[t.type]; return h === f ? (h === 13 || h === 14) && (i.operator === "**" && t.operator === "**" ? !a : a ? Y[i.operator] <= Y[t.operator] : Y[i.operator] < Y[t.operator]) : !a && h === 15 && f === 14 && t.operator === "**" || h < f; }
        function g(l, i, t, a) { var h = l.generator; E(l, i, t, a) ? (l.write("("), h[i.type](i, l), l.write(")")) : h[i.type](i, l); }
        function d(l, i, t, a) {
            var h = i.split(`
`), f = h.length - 1;
            if (l.write(h[0].trim()), 0 < f) {
                l.write(a);
                for (var y = 1; y < f; y++)
                    l.write(t + h[y].trim() + a);
                l.write(t + h[f].trim());
            }
        }
        function m(l, i, t, a) {
            for (var h, f = i.length, y = 0; y < f; y++)
                h = i[y], l.write(t), h.type[0] === "L" ? l.write("// " + h.value.trim() + `
`, h) : (l.write("/*"), d(l, h.value, t, a), l.write("*/" + a));
        }
        function _(l) { for (var i = l; i != null;) {
            var t = i, a = t.type;
            if (a[0] === "C" && a[1] === "a")
                return !0;
            if (a[0] === "M" && a[1] === "e" && a[2] === "m")
                i = i.object;
            else
                return !1;
        } }
        function T(l, i) { var t = l.generator, a = i.declarations; l.write(i.kind + " "); var h = a.length; if (0 < h) {
            t.VariableDeclarator(a[0], l);
            for (var f = 1; f < h; f++)
                l.write(", "), t.VariableDeclarator(a[f], l);
        } }
        Object.defineProperty(e, "__esModule", { value: !0 }), e.generate = function (l, i) { var t = new Pr(i); return t.generator[l.type](l, t), t.output; }, e.baseGenerator = e.GENERATOR = e.EXPRESSIONS_PRECEDENCE = e.NEEDS_PARENTHESES = void 0;
        var D = JSON.stringify;
        if (!n.repeat)
            throw new Error("String.prototype.repeat is undefined, see https://github.com/davidbonnet/astring#installation");
        if (!n.endsWith)
            throw new Error("String.prototype.endsWith is undefined, see https://github.com/davidbonnet/astring#installation");
        var Y = { "||": 3, "&&": 4, "|": 5, "^": 6, "&": 7, "==": 8, "!=": 8, "===": 8, "!==": 8, "<": 9, ">": 9, "<=": 9, ">=": 9, in: 9, instanceof: 9, "<<": 10, ">>": 10, ">>>": 10, "+": 11, "-": 11, "*": 12, "%": 12, "/": 12, "**": 13 }, P = 17;
        e.NEEDS_PARENTHESES = P;
        var Q = { ArrayExpression: 20, TaggedTemplateExpression: 20, ThisExpression: 20, Identifier: 20, Literal: 18, TemplateLiteral: 20, Super: 20, SequenceExpression: 20, MemberExpression: 19, ChainExpression: 19, CallExpression: 19, NewExpression: 19, ArrowFunctionExpression: P, ClassExpression: P, FunctionExpression: P, ObjectExpression: P, UpdateExpression: 16, UnaryExpression: 15, AwaitExpression: 15, BinaryExpression: 14, LogicalExpression: 13, ConditionalExpression: 4, AssignmentExpression: 3, YieldExpression: 2, RestElement: 1 };
        e.EXPRESSIONS_PRECEDENCE = Q;
        var Z, b, rr, er, tr, ir, V = { Program: function (i, t) { var a = t.indent.repeat(t.indentLevel), h = t.lineEnd, f = t.writeComments; f && i.comments != null && m(t, i.comments, a, h); for (var y, x = i.body, A = x.length, v = 0; v < A; v++)
                y = x[v], f && y.comments != null && m(t, y.comments, a, h), t.write(a), this[y.type](y, t), t.write(h); f && i.trailingComments != null && m(t, i.trailingComments, a, h); }, BlockStatement: ir = function (l, i) { var t = i.indent.repeat(i.indentLevel++), a = i.lineEnd, h = i.writeComments, f = t + i.indent; i.write("{"); var y = l.body; if (y != null && 0 < y.length) {
                i.write(a), h && l.comments != null && m(i, l.comments, f, a);
                for (var x, A = y.length, v = 0; v < A; v++)
                    x = y[v], h && x.comments != null && m(i, x.comments, f, a), i.write(f), this[x.type](x, i), i.write(a);
                i.write(t);
            }
            else
                h && l.comments != null && (i.write(a), m(i, l.comments, f, a), i.write(t)); h && l.trailingComments != null && m(i, l.trailingComments, f, a), i.write("}"), i.indentLevel--; }, ClassBody: ir, EmptyStatement: function (i, t) { t.write(";"); }, ExpressionStatement: function (i, t) { var a = t.expressionsPrecedence[i.expression.type]; a === P || a === 3 && i.expression.left.type[0] === "O" ? (t.write("("), this[i.expression.type](i.expression, t), t.write(")")) : this[i.expression.type](i.expression, t), t.write(";"); }, IfStatement: function (i, t) { t.write("if ("), this[i.test.type](i.test, t), t.write(") "), this[i.consequent.type](i.consequent, t), i.alternate != null && (t.write(" else "), this[i.alternate.type](i.alternate, t)); }, LabeledStatement: function (i, t) { this[i.label.type](i.label, t), t.write(": "), this[i.body.type](i.body, t); }, BreakStatement: function (i, t) { t.write("break"), i.label != null && (t.write(" "), this[i.label.type](i.label, t)), t.write(";"); }, ContinueStatement: function (i, t) { t.write("continue"), i.label != null && (t.write(" "), this[i.label.type](i.label, t)), t.write(";"); }, WithStatement: function (i, t) { t.write("with ("), this[i.object.type](i.object, t), t.write(") "), this[i.body.type](i.body, t); }, SwitchStatement: function (i, t) { var a = t.indent.repeat(t.indentLevel++), h = t.lineEnd, f = t.writeComments; t.indentLevel++; var y = a + t.indent, x = y + t.indent; t.write("switch ("), this[i.discriminant.type](i.discriminant, t), t.write(") {" + h); for (var A, v = i.cases, M = v.length, k = 0; k < M; k++) {
                A = v[k], f && A.comments != null && m(t, A.comments, y, h), A.test ? (t.write(y + "case "), this[A.test.type](A.test, t), t.write(":" + h)) : t.write(y + "default:" + h);
                for (var O, nr = A.consequent, Ur = nr.length, G = 0; G < Ur; G++)
                    O = nr[G], f && O.comments != null && m(t, O.comments, x, h), t.write(x), this[O.type](O, t), t.write(h);
            } t.indentLevel -= 2, t.write(a + "}"); }, ReturnStatement: function (i, t) { t.write("return"), i.argument && (t.write(" "), this[i.argument.type](i.argument, t)), t.write(";"); }, ThrowStatement: function (i, t) { t.write("throw "), this[i.argument.type](i.argument, t), t.write(";"); }, TryStatement: function (i, t) { if (t.write("try "), this[i.block.type](i.block, t), i.handler) {
                var a = i.handler;
                a.param == null ? t.write(" catch ") : (t.write(" catch ("), this[a.param.type](a.param, t), t.write(") ")), this[a.body.type](a.body, t);
            } i.finalizer && (t.write(" finally "), this[i.finalizer.type](i.finalizer, t)); }, WhileStatement: function (i, t) { t.write("while ("), this[i.test.type](i.test, t), t.write(") "), this[i.body.type](i.body, t); }, DoWhileStatement: function (i, t) { t.write("do "), this[i.body.type](i.body, t), t.write(" while ("), this[i.test.type](i.test, t), t.write(");"); }, ForStatement: function (i, t) { if (t.write("for ("), i.init != null) {
                var a = i.init;
                a.type[0] === "V" ? T(t, a) : this[a.type](a, t);
            } t.write("; "), i.test && this[i.test.type](i.test, t), t.write("; "), i.update && this[i.update.type](i.update, t), t.write(") "), this[i.body.type](i.body, t); }, ForInStatement: Z = function (l, i) { i.write("for ".concat(l.await ? "await " : "", "(")); var t = l.left; t.type[0] === "V" ? T(i, t) : this[t.type](t, i), i.write(l.type[3] === "I" ? " in " : " of "), this[l.right.type](l.right, i), i.write(") "), this[l.body.type](l.body, i); }, ForOfStatement: Z, DebuggerStatement: function (i, t) { t.write("debugger;", i); }, FunctionDeclaration: b = function (l, i) { i.write((l.async ? "async " : "") + (l.generator ? "function* " : "function ") + (l.id ? l.id.name : ""), l), w(i, l.params), i.write(" "), this[l.body.type](l.body, i); }, FunctionExpression: b, VariableDeclaration: function (i, t) { T(t, i), t.write(";"); }, VariableDeclarator: function (i, t) { this[i.id.type](i.id, t), i.init != null && (t.write(" = "), this[i.init.type](i.init, t)); }, ClassDeclaration: function (i, t) { if (t.write("class " + (i.id ? "".concat(i.id.name, " ") : ""), i), i.superClass) {
                t.write("extends ");
                var a = i.superClass, h = a.type, f = t.expressionsPrecedence[h];
                (h[0] !== "C" || h[1] !== "l" || h[5] !== "E") && (f === P || f < t.expressionsPrecedence.ClassExpression) ? (t.write("("), this[i.superClass.type](a, t), t.write(")")) : this[a.type](a, t), t.write(" ");
            } this.ClassBody(i.body, t); }, ImportDeclaration: function (i, t) { t.write("import "); var a = i.specifiers, h = a.length, f = 0; if (0 < h) {
                for (; f < h;) {
                    0 < f && t.write(", ");
                    var y = a[f], x = y.type[6];
                    if (x === "D")
                        t.write(y.local.name, y), f++;
                    else if (x === "N")
                        t.write("* as " + y.local.name, y), f++;
                    else
                        break;
                }
                if (f < h) {
                    for (t.write("{");;) {
                        var A = a[f], v = A.imported.name;
                        if (t.write(v, A), v !== A.local.name && t.write(" as " + A.local.name), ++f < h)
                            t.write(", ");
                        else
                            break;
                    }
                    t.write("}");
                }
                t.write(" from ");
            } this.Literal(i.source, t), t.write(";"); }, ImportExpression: function (i, t) { t.write("import("), this[i.source.type](i.source, t), t.write(")"); }, ExportDefaultDeclaration: function (i, t) { t.write("export default "), this[i.declaration.type](i.declaration, t), t.expressionsPrecedence[i.declaration.type] != null && i.declaration.type[0] !== "F" && t.write(";"); }, ExportNamedDeclaration: function (i, t) { if (t.write("export "), i.declaration)
                this[i.declaration.type](i.declaration, t);
            else {
                t.write("{");
                var a = i.specifiers, h = a.length;
                if (0 < h)
                    for (var f = 0;;) {
                        var y = a[f], x = y.local.name;
                        if (t.write(x, y), x !== y.exported.name && t.write(" as " + y.exported.name), ++f < h)
                            t.write(", ");
                        else
                            break;
                    }
                t.write("}"), i.source && (t.write(" from "), this.Literal(i.source, t)), t.write(";");
            } }, ExportAllDeclaration: function (i, t) { i.exported == null ? t.write("export * from ") : t.write("export * as " + i.exported.name + " from "), this.Literal(i.source, t), t.write(";"); }, MethodDefinition: function (i, t) { i.static && t.write("static "); var a = i.kind[0]; (a === "g" || a === "s") && t.write(i.kind + " "), i.value.async && t.write("async "), i.value.generator && t.write("*"), i.computed ? (t.write("["), this[i.key.type](i.key, t), t.write("]")) : this[i.key.type](i.key, t), w(t, i.value.params), t.write(" "), this[i.value.body.type](i.value.body, t); }, ClassExpression: function (i, t) { this.ClassDeclaration(i, t); }, ArrowFunctionExpression: function (i, t) { t.write(i.async ? "async " : "", i); var a = i.params; a != null && (a.length === 1 && a[0].type[0] === "I" ? t.write(a[0].name, a[0]) : w(t, i.params)), t.write(" => "), i.body.type[0] === "O" ? (t.write("("), this.ObjectExpression(i.body, t), t.write(")")) : this[i.body.type](i.body, t); }, ThisExpression: function (i, t) { t.write("this", i); }, Super: function (i, t) { t.write("super", i); }, RestElement: rr = function (l, i) { i.write("..."), this[l.argument.type](l.argument, i); }, SpreadElement: rr, YieldExpression: function (i, t) { t.write(i.delegate ? "yield*" : "yield"), i.argument && (t.write(" "), this[i.argument.type](i.argument, t)); }, AwaitExpression: function (i, t) { t.write("await ", i), g(t, i.argument, i); }, TemplateLiteral: function (i, t) { var a = i.quasis, h = i.expressions; t.write("`"); for (var f = h.length, y = 0; y < f; y++) {
                var x = h[y], A = a[y];
                t.write(A.value.raw, A), t.write("${"), this[x.type](x, t), t.write("}");
            } var v = a[a.length - 1]; t.write(v.value.raw, v), t.write("`"); }, TemplateElement: function (i, t) { t.write(i.value.raw, i); }, TaggedTemplateExpression: function (i, t) { this[i.tag.type](i.tag, t), this[i.quasi.type](i.quasi, t); }, ArrayExpression: tr = function (l, i) { if (i.write("["), 0 < l.elements.length)
                for (var t, a = l.elements, h = a.length, f = 0;;)
                    if (t = a[f], t != null && this[t.type](t, i), ++f < h)
                        i.write(", ");
                    else {
                        t == null && i.write(", ");
                        break;
                    } i.write("]"); }, ArrayPattern: tr, ObjectExpression: function (i, t) { var a = t.indent.repeat(t.indentLevel++), h = t.lineEnd, f = t.writeComments, y = a + t.indent; if (t.write("{"), 0 < i.properties.length) {
                t.write(h), f && i.comments != null && m(t, i.comments, y, h);
                for (var x, A = i.properties, v = A.length, M = 0; x = A[M], f && x.comments != null && m(t, x.comments, y, h), t.write(y), this[x.type](x, t), ++M < v;)
                    t.write("," + h);
                t.write(h), f && i.trailingComments != null && m(t, i.trailingComments, y, h), t.write(a + "}");
            }
            else
                f ? i.comments == null ? i.trailingComments == null ? t.write("}") : (t.write(h), m(t, i.trailingComments, y, h), t.write(a + "}")) : (t.write(h), m(t, i.comments, y, h), i.trailingComments != null && m(t, i.trailingComments, y, h), t.write(a + "}")) : t.write("}"); t.indentLevel--; }, Property: function (i, t) { i.method || i.kind[0] !== "i" ? this.MethodDefinition(i, t) : (!i.shorthand && (i.computed ? (t.write("["), this[i.key.type](i.key, t), t.write("]")) : this[i.key.type](i.key, t), t.write(": ")), this[i.value.type](i.value, t)); }, ObjectPattern: function (i, t) { if (t.write("{"), 0 < i.properties.length)
                for (var a = i.properties, h = a.length, f = 0; this[a[f].type](a[f], t), ++f < h;)
                    t.write(", "); t.write("}"); }, SequenceExpression: function (i, t) { w(t, i.expressions); }, UnaryExpression: function (i, t) { if (i.prefix) {
                var a = i.operator, h = i.argument, f = i.argument.type;
                t.write(a);
                var y = E(t, h, i);
                !y && (1 < a.length || f[0] === "U" && (f[1] === "n" || f[1] === "p") && h.prefix && h.operator[0] === a && (a === "+" || a === "-")) && t.write(" "), y ? (t.write(1 < a.length ? " (" : "("), this[f](h, t), t.write(")")) : this[f](h, t);
            }
            else
                this[i.argument.type](i.argument, t), t.write(i.operator); }, UpdateExpression: function (i, t) { i.prefix ? (t.write(i.operator), this[i.argument.type](i.argument, t)) : (this[i.argument.type](i.argument, t), t.write(i.operator)); }, AssignmentExpression: function (i, t) { this[i.left.type](i.left, t), t.write(" " + i.operator + " "), this[i.right.type](i.right, t); }, AssignmentPattern: function (i, t) { this[i.left.type](i.left, t), t.write(" = "), this[i.right.type](i.right, t); }, BinaryExpression: er = function (l, i) { var t = l.operator === "in"; t && i.write("("), g(i, l.left, l, !1), i.write(" " + l.operator + " "), g(i, l.right, l, !0), t && i.write(")"); }, LogicalExpression: er, ConditionalExpression: function (i, t) { var a = i.test, h = t.expressionsPrecedence[a.type]; h === P || h <= t.expressionsPrecedence.ConditionalExpression ? (t.write("("), this[a.type](a, t), t.write(")")) : this[a.type](a, t), t.write(" ? "), this[i.consequent.type](i.consequent, t), t.write(" : "), this[i.alternate.type](i.alternate, t); }, NewExpression: function (i, t) { t.write("new "); var a = t.expressionsPrecedence[i.callee.type]; a === P || a < t.expressionsPrecedence.CallExpression || _(i.callee) ? (t.write("("), this[i.callee.type](i.callee, t), t.write(")")) : this[i.callee.type](i.callee, t), w(t, i.arguments); }, CallExpression: function (i, t) { var a = t.expressionsPrecedence[i.callee.type]; a === P || a < t.expressionsPrecedence.CallExpression ? (t.write("("), this[i.callee.type](i.callee, t), t.write(")")) : this[i.callee.type](i.callee, t), i.optional && t.write("?."), w(t, i.arguments); }, ChainExpression: function (i, t) { this[i.expression.type](i.expression, t); }, MemberExpression: function (i, t) { var a = t.expressionsPrecedence[i.object.type]; a === P || a < t.expressionsPrecedence.MemberExpression ? (t.write("("), this[i.object.type](i.object, t), t.write(")")) : this[i.object.type](i.object, t), i.computed ? (i.optional && t.write("?."), t.write("["), this[i.property.type](i.property, t), t.write("]")) : (i.optional ? t.write("?.") : t.write("."), this[i.property.type](i.property, t)); }, MetaProperty: function (i, t) { t.write(i.meta.name + "." + i.property.name, i); }, Identifier: function (i, t) { t.write(i.name, i); }, Literal: function (i, t) { i.raw == null ? i.regex == null ? i.bigint == null ? t.write(D(i.value), i) : t.write(i.bigint + "n", i) : this.RegExpLiteral(i, t) : t.write(i.raw, i); }, RegExpLiteral: function (i, t) { var a = i.regex; t.write("/".concat(a.pattern, "/").concat(a.flags), i); } };
        e.GENERATOR = V;
        var Ir = {};
        e.baseGenerator = V;
        var Pr = function () {
            function l(i) {
                s(this, l);
                var t = i !== null && i !== void 0 ? i : Ir;
                this.output = "", t.output == null ? this.output = "" : (this.output = t.output, this.write = this.writeToStream), this.generator = t.generator == null ? V : t.generator, this.expressionsPrecedence = t.expressionsPrecedence == null ? Q : t.expressionsPrecedence, this.indent = t.indent == null ? "  " : t.indent, this.lineEnd = t.lineEnd == null ? `
` : t.lineEnd, this.indentLevel = t.startingIndentLevel == null ? 0 : t.startingIndentLevel, this.writeComments = !!t.comments && t.comments, t.sourceMap != null && (this.write = t.output == null ? this.writeAndMap : this.writeToStreamAndMap, this.sourceMap = t.sourceMap, this.line = 1, this.column = 0, this.lineEndSize = this.lineEnd.split(`
`).length - 1, this.mapping = { original: null, generated: this, name: void 0, source: t.sourceMap.file || t.sourceMap._file });
            }
            return p(l, [{ key: "write", value: function (t) { this.output += t; } }, { key: "writeToStream", value: function (t) { this.output.write(t); } }, { key: "writeAndMap", value: function (t, a) { this.output += t, this.map(t, a); } }, { key: "writeToStreamAndMap", value: function (t, a) { this.output.write(t), this.map(t, a); } }, { key: "map", value: function (t, a) {
                        if (a != null) {
                            var h = a.type;
                            if (h[0] === "L" && h[2] === "n")
                                return this.column = 0, void this.line++;
                            if (a.loc != null) {
                                var f = this.mapping;
                                f.original = a.loc.start, f.name = a.name, this.sourceMap.addMapping(f);
                            }
                            if (h[0] === "T" && h[8] === "E" || h[0] === "L" && h[1] === "i" && typeof a.value == "string") {
                                for (var y = t.length, x = this.column, A = this.line, v = 0; v < y; v++)
                                    t[v] === `
` ? (x = 0, A++) : x++;
                                return this.column = x, void (this.line = A);
                            }
                        }
                        var M = t.length, k = this.lineEnd;
                        0 < M && (0 < this.lineEndSize && (k.length === 1 ? t[M - 1] === k : t.endsWith(k)) ? (this.line += this.lineEndSize, this.column = 0) : this.column += M);
                    } }, { key: "toString", value: function () { return this.output; } }]), l;
        }();
    });
}), ge = me(L), de = L.EXPRESSIONS_PRECEDENCE, xe = L.GENERATOR, Ae = L.NEEDS_PARENTHESES, ve = L.baseGenerator, Rr = ge, Se = L.generate;
const valueToEstree = fe;
const astring = _r;
const { generate, GENERATOR } = astring;
// A more robust version alternative to `JSON.stringify` that can handle most values
// see https://github.com/remcohaszing/estree-util-value-to-estree#readme
const customGenerator = Object.assign(Object.assign({}, GENERATOR), { Literal(node, state) {
        if (node.raw != null) {
            // escape closing script tags in strings so browsers wouldn't interpret them as
            // closing the actual end tag in HTML
            state.write(node.raw.replace('</scr' + 'ipt>', '<\\/script>'));
        }
        else {
            GENERATOR.Literal(node, state);
        }
    } });
const serialize = (value) => generate(valueToEstree(value), {
    generator: customGenerator,
});
function _render(child) {
    return __awaiter(this, void 0, void 0, function* () {
        child = yield child;
        if (Array.isArray(child)) {
            return (yield Promise.all(child.map(value => _render(value)))).join('\n');
        }
        else if (typeof child === 'function') {
            // Special: If a child is a function, call it automatically.
            // This lets you do {() => ...} without the extra boilerplate
            // of wrapping it in a function and calling it.
            return yield child();
        }
        else if (typeof child === 'string') {
            return child;
        }
        else if (!child && child !== 0) {
            // do nothing, safe to ignore falsey values.
        }
        else if (child instanceof AstroComponent) {
            return yield renderAstroComponent(child);
        }
        else {
            return child;
        }
    });
}
export class AstroComponent {
    constructor(htmlParts, expressions) {
        this.htmlParts = htmlParts;
        this.expressions = expressions;
    }
    *[Symbol.iterator]() {
        const { htmlParts, expressions } = this;
        for (let i = 0; i < htmlParts.length; i++) {
            const html = htmlParts[i];
            const expression = expressions[i];
            yield _render(html);
            yield _render(expression);
        }
    }
}
export function render(htmlParts, ...expressions) {
    return new AstroComponent(htmlParts, expressions);
}
export const createComponent = (cb) => {
    // Add a flag to this callback to mark it as an Astro component
    cb.isAstroComponentFactory = true;
    return cb;
};
function extractHydrationDirectives(inputProps) {
    let props = {};
    let hydrationDirective = null;
    for (const [key, value] of Object.entries(inputProps)) {
        if (key.startsWith('client:')) {
            hydrationDirective = [key.split(':')[1], value];
        }
        else {
            props[key] = value;
        }
    }
    return { hydrationDirective, props };
}
/** For hydrated components, generate a <script type="module"> to load the component */
function generateHydrateScript(scriptOptions, metadata) {
    return __awaiter(this, void 0, void 0, function* () {
        const { renderer, astroId, props } = scriptOptions;
        const { hydrate, componentUrl, componentExport } = metadata;
        if (!componentExport) {
            throw new Error(`Unable to resolve a componentExport for "${metadata.displayName}"! Please open an issue.`);
        }
        let hydrationSource = '';
        if (renderer.hydrationPolyfills) {
            hydrationSource += `await Promise.all([${renderer.hydrationPolyfills.map((src) => `\n  import("${src}")`).join(', ')}]);\n`;
        }
        hydrationSource += renderer.source
            ? `const [{ ${componentExport.value}: Component }, { default: hydrate }] = await Promise.all([import("${componentUrl}"), import("${renderer.source}")]);
  return (el, children) => hydrate(el)(Component, ${serialize(props)}, children);
`
            : `await import("${componentUrl}");
  return () => {};
`;
        const hydrationScript = `<script type="module">
import setup from 'astro/client/${hydrate}.js';
setup("${astroId}", {${metadata.hydrateArgs ? `value: ${JSON.stringify(metadata.hydrateArgs)}` : ''}}, async () => {
  ${hydrationSource}
});
</scr` + `ipt>
`;
        return hydrationScript;
    });
}
export const renderSlot = (result, slotted, fallback) => __awaiter(void 0, void 0, void 0, function* () {
    if (slotted) {
        return _render(slotted);
    }
    return fallback;
});
export const renderComponent = (result, displayName, Component, _props, children) => __awaiter(void 0, void 0, void 0, function* () {
    Component = yield Component;
    // children = await renderGenerator(children);
    if (Component && Component.isAstroComponentFactory) {
        const output = yield renderToString(result, Component, _props, children);
        return output;
    }
    // const { renderers } = result._metadata;
    // let metadata: AstroComponentMetadata = { displayName };
    // if (Component == null) {
    //   throw new Error(`Unable to render ${metadata.displayName} because it is ${Component}!\nDid you forget to import the component or is it possible there is a typo?`);
    // }
    // // else if (typeof Component === 'string' && !isCustomElementTag(Component)) {
    // //   throw new Error(`Astro is unable to render ${metadata.displayName}!\nIs there a renderer to handle this type of component defined in your Astro config?`);
    // // }
    // const { hydrationDirective, props } = extractHydrationDirectives(_props);
    // let html = '';
    // if (!hydrationDirective) {
    //   return '<pre>Not implemented</pre>';
    // }
    // metadata.hydrate = hydrationDirective[0] as AstroComponentMetadata['hydrate'];
    // metadata.hydrateArgs = hydrationDirective[1];
    // for (const [url, exported] of Object.entries(result._metadata.importedModules)) {
    //   for (const [key, value] of Object.entries(exported as any)) {
    //     if (Component === value) {
    //       metadata.componentExport = { value: key };
    //       metadata.componentUrl = url;
    //       break;
    //     }
    //   }
    // }
    // let renderer = null;
    // for (const r of renderers) {
    //   if (await r.ssr.check(Component, props, null)) {
    //     renderer = r;
    //   }
    // }
    // ({ html } = await renderer.ssr.renderToStaticMarkup(Component, props, null));
    // const astroId = shorthash.unique(html);
    // result.scripts.add(await generateHydrateScript({ renderer, astroId, props }, metadata as Required<AstroComponentMetadata>));
    // return `<astro-root uid="${astroId}">${html}</astro-root>`;
});
export const addAttribute = (value, key) => {
    if (value == null || value === false) {
        return '';
    }
    return ` ${key}="${value}"`;
};
export const spreadAttributes = (values) => {
    let output = '';
    for (const [key, value] of Object.entries(values)) {
        output += addAttribute(value, key);
    }
    return output;
};
export const defineStyleVars = (astroId, vars) => {
    let output = '\n';
    for (const [key, value] of Object.entries(vars)) {
        output += `  --${key}: ${value};\n`;
    }
    return `.${astroId} {${output}}`;
};
export const defineScriptVars = (vars) => {
    let output = '';
    for (const [key, value] of Object.entries(vars)) {
        output += `let ${key} = ${JSON.stringify(value)};\n`;
    }
    return output;
};
