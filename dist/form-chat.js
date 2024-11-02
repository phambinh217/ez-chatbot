/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function tt(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Y = Object.freeze({}), Ft = Object.freeze([]), be = () => {
}, _i = () => !1, pn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Pn = (e) => e.startsWith("onUpdate:"), ce = Object.assign, Hs = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, wi = Object.prototype.hasOwnProperty, q = (e, t) => wi.call(e, t), R = Array.isArray, Ct = (e) => Kn(e) === "[object Map]", Go = (e) => Kn(e) === "[object Set]", F = (e) => typeof e == "function", ie = (e) => typeof e == "string", nt = (e) => typeof e == "symbol", X = (e) => e !== null && typeof e == "object", ks = (e) => (X(e) || F(e)) && F(e.then) && F(e.catch), zo = Object.prototype.toString, Kn = (e) => zo.call(e), Vs = (e) => Kn(e).slice(8, -1), Jo = (e) => Kn(e) === "[object Object]", Bs = (e) => ie(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Qt = /* @__PURE__ */ tt(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), xi = /* @__PURE__ */ tt(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), qn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Ci = /-(\w)/g, Ne = qn(
  (e) => e.replace(Ci, (t, n) => n ? n.toUpperCase() : "")
), Si = /\B([A-Z])/g, Ze = qn(
  (e) => e.replace(Si, "-$1").toLowerCase()
), Gn = qn((e) => e.charAt(0).toUpperCase() + e.slice(1)), _t = qn(
  (e) => e ? `on${Gn(e)}` : ""
), gt = (e, t) => !Object.is(e, t), Kt = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Nn = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, Ti = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Oi = (e) => {
  const t = ie(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let co;
const hn = () => co || (co = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function zn(e) {
  if (R(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], o = ie(s) ? Ii(s) : zn(s);
      if (o)
        for (const r in o)
          t[r] = o[r];
    }
    return t;
  } else if (ie(e) || X(e))
    return e;
}
const $i = /;(?![^(]*\))/g, Ei = /:([^]+)/, Ai = /\/\*[^]*?\*\//g;
function Ii(e) {
  const t = {};
  return e.replace(Ai, "").split($i).forEach((n) => {
    if (n) {
      const s = n.split(Ei);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function gn(e) {
  let t = "";
  if (ie(e))
    t = e;
  else if (R(e))
    for (let n = 0; n < e.length; n++) {
      const s = gn(e[n]);
      s && (t += s + " ");
    }
  else if (X(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Mi = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Ri = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Pi = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", Ni = /* @__PURE__ */ tt(Mi), Fi = /* @__PURE__ */ tt(Ri), Di = /* @__PURE__ */ tt(Pi), Li = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ji = /* @__PURE__ */ tt(Li);
function Yo(e) {
  return !!e || e === "";
}
const Xo = (e) => !!(e && e.__v_isRef === !0), sn = (e) => ie(e) ? e : e == null ? "" : R(e) || X(e) && (e.toString === zo || !F(e.toString)) ? Xo(e) ? sn(e.value) : JSON.stringify(e, Qo, 2) : String(e), Qo = (e, t) => Xo(t) ? Qo(e, t.value) : Ct(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, o], r) => (n[ls(s, r) + " =>"] = o, n),
    {}
  )
} : Go(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => ls(n))
} : nt(t) ? ls(t) : X(t) && !R(t) && !Jo(t) ? String(t) : t, ls = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    nt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
var Hi = { NODE_ENV: '"production"' };
function Ke(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Ee;
class ki {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Ee, !t && Ee && (this.index = (Ee.scopes || (Ee.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = Ee;
      try {
        return Ee = this, t();
      } finally {
        Ee = n;
      }
    } else
      Ke("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    Ee = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    Ee = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++)
        this.effects[n].stop();
      for (n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, s = this.scopes.length; n < s; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const o = this.parent.scopes.pop();
        o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function Vi() {
  return Ee;
}
let J;
const cs = /* @__PURE__ */ new WeakSet();
class Zo {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ee && Ee.active && Ee.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, cs.has(this) && (cs.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || tr(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, ao(this), nr(this);
    const t = J, n = Fe;
    J = this, Fe = !0;
    try {
      return this.fn();
    } finally {
      J !== this && Ke(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), sr(this), J = t, Fe = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Ks(t);
      this.deps = this.depsTail = void 0, ao(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? cs.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    _s(this) && this.run();
  }
  get dirty() {
    return _s(this);
  }
}
let er = 0, Zt, en;
function tr(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = en, en = e;
    return;
  }
  e.next = Zt, Zt = e;
}
function Us() {
  er++;
}
function Ws() {
  if (--er > 0)
    return;
  if (en) {
    let t = en;
    for (en = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Zt; ) {
    let t = Zt;
    for (Zt = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (s) {
          e || (e = s);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function nr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function sr(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const o = s.prevDep;
    s.version === -1 ? (s === n && (n = o), Ks(s), Bi(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = o;
  }
  e.deps = t, e.depsTail = n;
}
function _s(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (or(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function or(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === on))
    return;
  e.globalVersion = on;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !_s(e)) {
    e.flags &= -3;
    return;
  }
  const n = J, s = Fe;
  J = e, Fe = !0;
  try {
    nr(e);
    const o = e.fn(e._value);
    (t.version === 0 || gt(o, e._value)) && (e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    J = n, Fe = s, sr(e), e.flags &= -3;
  }
}
function Ks(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: o } = e;
  if (s && (s.nextSub = o, e.prevSub = void 0), o && (o.prevSub = s, e.nextSub = void 0), n.subsHead === e && (n.subsHead = o), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      Ks(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Bi(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Fe = !0;
const rr = [];
function st() {
  rr.push(Fe), Fe = !1;
}
function ot() {
  const e = rr.pop();
  Fe = e === void 0 ? !0 : e;
}
function ao(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = J;
    J = void 0;
    try {
      t();
    } finally {
      J = n;
    }
  }
}
let on = 0;
class Ui {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class qs {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.subsHead = void 0;
  }
  track(t) {
    if (!J || !Fe || J === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== J)
      n = this.activeLink = new Ui(J, this), J.deps ? (n.prevDep = J.depsTail, J.depsTail.nextDep = n, J.depsTail = n) : J.deps = J.depsTail = n, ir(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = J.depsTail, n.nextDep = void 0, J.depsTail.nextDep = n, J.depsTail = n, J.deps === n && (J.deps = s);
    }
    return J.onTrack && J.onTrack(
      ce(
        {
          effect: J
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, on++, this.notify(t);
  }
  notify(t) {
    Us();
    try {
      if (Hi.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            ce(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Ws();
    }
  }
}
function ir(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        ir(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const ws = /* @__PURE__ */ new WeakMap(), St = Symbol(
  "Object iterate"
), xs = Symbol(
  "Map keys iterate"
), rn = Symbol(
  "Array iterate"
);
function pe(e, t, n) {
  if (Fe && J) {
    let s = ws.get(e);
    s || ws.set(e, s = /* @__PURE__ */ new Map());
    let o = s.get(n);
    o || (s.set(n, o = new qs()), o.map = s, o.key = n), o.track({
      target: e,
      type: t,
      key: n
    });
  }
}
function Ve(e, t, n, s, o, r) {
  const i = ws.get(e);
  if (!i) {
    on++;
    return;
  }
  const l = (a) => {
    a && a.trigger({
      target: e,
      type: t,
      key: n,
      newValue: s,
      oldValue: o,
      oldTarget: r
    });
  };
  if (Us(), t === "clear")
    i.forEach(l);
  else {
    const a = R(e), p = a && Bs(n);
    if (a && n === "length") {
      const d = Number(s);
      i.forEach((f, h) => {
        (h === "length" || h === rn || !nt(h) && h >= d) && l(f);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && l(i.get(n)), p && l(i.get(rn)), t) {
        case "add":
          a ? p && l(i.get("length")) : (l(i.get(St)), Ct(e) && l(i.get(xs)));
          break;
        case "delete":
          a || (l(i.get(St)), Ct(e) && l(i.get(xs)));
          break;
        case "set":
          Ct(e) && l(i.get(St));
          break;
      }
  }
  Ws();
}
function Pt(e) {
  const t = k(e);
  return t === e ? t : (pe(t, "iterate", rn), Se(e) ? t : t.map(ve));
}
function Jn(e) {
  return pe(e = k(e), "iterate", rn), e;
}
const Wi = {
  __proto__: null,
  [Symbol.iterator]() {
    return as(this, Symbol.iterator, ve);
  },
  concat(...e) {
    return Pt(this).concat(
      ...e.map((t) => R(t) ? Pt(t) : t)
    );
  },
  entries() {
    return as(this, "entries", (e) => (e[1] = ve(e[1]), e));
  },
  every(e, t) {
    return Ge(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ge(this, "filter", e, t, (n) => n.map(ve), arguments);
  },
  find(e, t) {
    return Ge(this, "find", e, t, ve, arguments);
  },
  findIndex(e, t) {
    return Ge(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ge(this, "findLast", e, t, ve, arguments);
  },
  findLastIndex(e, t) {
    return Ge(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Ge(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return fs(this, "includes", e);
  },
  indexOf(...e) {
    return fs(this, "indexOf", e);
  },
  join(e) {
    return Pt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return fs(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ge(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return qt(this, "pop");
  },
  push(...e) {
    return qt(this, "push", e);
  },
  reduce(e, ...t) {
    return fo(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return fo(this, "reduceRight", e, t);
  },
  shift() {
    return qt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ge(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return qt(this, "splice", e);
  },
  toReversed() {
    return Pt(this).toReversed();
  },
  toSorted(e) {
    return Pt(this).toSorted(e);
  },
  toSpliced(...e) {
    return Pt(this).toSpliced(...e);
  },
  unshift(...e) {
    return qt(this, "unshift", e);
  },
  values() {
    return as(this, "values", ve);
  }
};
function as(e, t, n) {
  const s = Jn(e), o = s[t]();
  return s !== e && !Se(e) && (o._next = o.next, o.next = () => {
    const r = o._next();
    return r.value && (r.value = n(r.value)), r;
  }), o;
}
const Ki = Array.prototype;
function Ge(e, t, n, s, o, r) {
  const i = Jn(e), l = i !== e && !Se(e), a = i[t];
  if (a !== Ki[t]) {
    const f = a.apply(e, r);
    return l ? ve(f) : f;
  }
  let p = n;
  i !== e && (l ? p = function(f, h) {
    return n.call(this, ve(f), h, e);
  } : n.length > 2 && (p = function(f, h) {
    return n.call(this, f, h, e);
  }));
  const d = a.call(i, p, s);
  return l && o ? o(d) : d;
}
function fo(e, t, n, s) {
  const o = Jn(e);
  let r = n;
  return o !== e && (Se(e) ? n.length > 3 && (r = function(i, l, a) {
    return n.call(this, i, l, a, e);
  }) : r = function(i, l, a) {
    return n.call(this, i, ve(l), a, e);
  }), o[t](r, ...s);
}
function fs(e, t, n) {
  const s = k(e);
  pe(s, "iterate", rn);
  const o = s[t](...n);
  return (o === -1 || o === !1) && Fn(n[0]) ? (n[0] = k(n[0]), s[t](...n)) : o;
}
function qt(e, t, n = []) {
  st(), Us();
  const s = k(e)[t].apply(e, n);
  return Ws(), ot(), s;
}
const qi = /* @__PURE__ */ tt("__proto__,__v_isRef,__isVue"), lr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(nt)
);
function Gi(e) {
  nt(e) || (e = String(e));
  const t = k(this);
  return pe(t, "has", e), t.hasOwnProperty(e);
}
class cr {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    const o = this._isReadonly, r = this._isShallow;
    if (n === "__v_isReactive")
      return !o;
    if (n === "__v_isReadonly")
      return o;
    if (n === "__v_isShallow")
      return r;
    if (n === "__v_raw")
      return s === (o ? r ? hr : pr : r ? dr : ur).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const i = R(t);
    if (!o) {
      let a;
      if (i && (a = Wi[n]))
        return a;
      if (n === "hasOwnProperty")
        return Gi;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      fe(t) ? t : s
    );
    return (nt(n) ? lr.has(n) : qi(n)) || (o || pe(t, "get", n), r) ? l : fe(l) ? i && Bs(n) ? l : l.value : X(l) ? o ? gr(l) : Gs(l) : l;
  }
}
class ar extends cr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, o) {
    let r = t[n];
    if (!this._isShallow) {
      const a = et(r);
      if (!Se(s) && !et(s) && (r = k(r), s = k(s)), !R(t) && fe(r) && !fe(s))
        return a ? !1 : (r.value = s, !0);
    }
    const i = R(t) && Bs(n) ? Number(n) < t.length : q(t, n), l = Reflect.set(
      t,
      n,
      s,
      fe(t) ? t : o
    );
    return t === k(o) && (i ? gt(s, r) && Ve(t, "set", n, s, r) : Ve(t, "add", n, s)), l;
  }
  deleteProperty(t, n) {
    const s = q(t, n), o = t[n], r = Reflect.deleteProperty(t, n);
    return r && s && Ve(t, "delete", n, void 0, o), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!nt(n) || !lr.has(n)) && pe(t, "has", n), s;
  }
  ownKeys(t) {
    return pe(
      t,
      "iterate",
      R(t) ? "length" : St
    ), Reflect.ownKeys(t);
  }
}
class fr extends cr {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return Ke(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return Ke(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const zi = /* @__PURE__ */ new ar(), Ji = /* @__PURE__ */ new fr(), Yi = /* @__PURE__ */ new ar(!0), Xi = /* @__PURE__ */ new fr(!0), Cs = (e) => e, xn = (e) => Reflect.getPrototypeOf(e);
function Qi(e, t, n) {
  return function(...s) {
    const o = this.__v_raw, r = k(o), i = Ct(r), l = e === "entries" || e === Symbol.iterator && i, a = e === "keys" && i, p = o[e](...s), d = n ? Cs : t ? Ss : ve;
    return !t && pe(
      r,
      "iterate",
      a ? xs : St
    ), {
      // iterator protocol
      next() {
        const { value: f, done: h } = p.next();
        return h ? { value: f, done: h } : {
          value: l ? [d(f[0]), d(f[1])] : d(f),
          done: h
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Cn(e) {
  return function(...t) {
    {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Ke(
        `${Gn(e)} operation ${n}failed: target is readonly.`,
        k(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Zi(e, t) {
  const n = {
    get(o) {
      const r = this.__v_raw, i = k(r), l = k(o);
      e || (gt(o, l) && pe(i, "get", o), pe(i, "get", l));
      const { has: a } = xn(i), p = t ? Cs : e ? Ss : ve;
      if (a.call(i, o))
        return p(r.get(o));
      if (a.call(i, l))
        return p(r.get(l));
      r !== i && r.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && pe(k(o), "iterate", St), Reflect.get(o, "size", o);
    },
    has(o) {
      const r = this.__v_raw, i = k(r), l = k(o);
      return e || (gt(o, l) && pe(i, "has", o), pe(i, "has", l)), o === l ? r.has(o) : r.has(o) || r.has(l);
    },
    forEach(o, r) {
      const i = this, l = i.__v_raw, a = k(l), p = t ? Cs : e ? Ss : ve;
      return !e && pe(a, "iterate", St), l.forEach((d, f) => o.call(r, p(d), p(f), i));
    }
  };
  return ce(
    n,
    e ? {
      add: Cn("add"),
      set: Cn("set"),
      delete: Cn("delete"),
      clear: Cn("clear")
    } : {
      add(o) {
        !t && !Se(o) && !et(o) && (o = k(o));
        const r = k(this);
        return xn(r).has.call(r, o) || (r.add(o), Ve(r, "add", o, o)), this;
      },
      set(o, r) {
        !t && !Se(r) && !et(r) && (r = k(r));
        const i = k(this), { has: l, get: a } = xn(i);
        let p = l.call(i, o);
        p ? uo(i, l, o) : (o = k(o), p = l.call(i, o));
        const d = a.call(i, o);
        return i.set(o, r), p ? gt(r, d) && Ve(i, "set", o, r, d) : Ve(i, "add", o, r), this;
      },
      delete(o) {
        const r = k(this), { has: i, get: l } = xn(r);
        let a = i.call(r, o);
        a ? uo(r, i, o) : (o = k(o), a = i.call(r, o));
        const p = l ? l.call(r, o) : void 0, d = r.delete(o);
        return a && Ve(r, "delete", o, void 0, p), d;
      },
      clear() {
        const o = k(this), r = o.size !== 0, i = Ct(o) ? new Map(o) : new Set(o), l = o.clear();
        return r && Ve(
          o,
          "clear",
          void 0,
          void 0,
          i
        ), l;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((o) => {
    n[o] = Qi(o, e, t);
  }), n;
}
function Yn(e, t) {
  const n = Zi(e, t);
  return (s, o, r) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(
    q(n, o) && o in s ? n : s,
    o,
    r
  );
}
const el = {
  get: /* @__PURE__ */ Yn(!1, !1)
}, tl = {
  get: /* @__PURE__ */ Yn(!1, !0)
}, nl = {
  get: /* @__PURE__ */ Yn(!0, !1)
}, sl = {
  get: /* @__PURE__ */ Yn(!0, !0)
};
function uo(e, t, n) {
  const s = k(n);
  if (s !== n && t.call(e, s)) {
    const o = Vs(e);
    Ke(
      `Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const ur = /* @__PURE__ */ new WeakMap(), dr = /* @__PURE__ */ new WeakMap(), pr = /* @__PURE__ */ new WeakMap(), hr = /* @__PURE__ */ new WeakMap();
function ol(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function rl(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ol(Vs(e));
}
function Gs(e) {
  return et(e) ? e : Xn(
    e,
    !1,
    zi,
    el,
    ur
  );
}
function il(e) {
  return Xn(
    e,
    !1,
    Yi,
    tl,
    dr
  );
}
function gr(e) {
  return Xn(
    e,
    !0,
    Ji,
    nl,
    pr
  );
}
function Ue(e) {
  return Xn(
    e,
    !0,
    Xi,
    sl,
    hr
  );
}
function Xn(e, t, n, s, o) {
  if (!X(e))
    return Ke(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = o.get(e);
  if (r)
    return r;
  const i = rl(e);
  if (i === 0)
    return e;
  const l = new Proxy(
    e,
    i === 2 ? s : n
  );
  return o.set(e, l), l;
}
function Tt(e) {
  return et(e) ? Tt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function et(e) {
  return !!(e && e.__v_isReadonly);
}
function Se(e) {
  return !!(e && e.__v_isShallow);
}
function Fn(e) {
  return e ? !!e.__v_raw : !1;
}
function k(e) {
  const t = e && e.__v_raw;
  return t ? k(t) : e;
}
function ll(e) {
  return !q(e, "__v_skip") && Object.isExtensible(e) && Nn(e, "__v_skip", !0), e;
}
const ve = (e) => X(e) ? Gs(e) : e, Ss = (e) => X(e) ? gr(e) : e;
function fe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Me(e) {
  return cl(e, !1);
}
function cl(e, t) {
  return fe(e) ? e : new al(e, t);
}
class al {
  constructor(t, n) {
    this.dep = new qs(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : k(t), this._value = n ? t : ve(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || Se(t) || et(t);
    t = s ? t : k(t), gt(t, n) && (this._rawValue = t, this._value = s ? t : ve(t), this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }));
  }
}
function Dt(e) {
  return fe(e) ? e.value : e;
}
const fl = {
  get: (e, t, n) => t === "__v_raw" ? e : Dt(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t];
    return fe(o) && !fe(n) ? (o.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function mr(e) {
  return Tt(e) ? e : new Proxy(e, fl);
}
class ul {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new qs(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = on - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    J !== this)
      return tr(this, !0), !0;
  }
  get value() {
    const t = this.dep.track({
      target: this,
      type: "get",
      key: "value"
    });
    return or(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : Ke("Write operation failed: computed value is readonly");
  }
}
function dl(e, t, n = !1) {
  let s, o;
  return F(e) ? s = e : (s = e.get, o = e.set), new ul(s, o, n);
}
const Sn = {}, Dn = /* @__PURE__ */ new WeakMap();
let wt;
function pl(e, t = !1, n = wt) {
  if (n) {
    let s = Dn.get(n);
    s || Dn.set(n, s = []), s.push(e);
  } else t || Ke(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function hl(e, t, n = Y) {
  const { immediate: s, deep: o, once: r, scheduler: i, augmentJob: l, call: a } = n, p = ($) => {
    (n.onWarn || Ke)(
      "Invalid watch source: ",
      $,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, d = ($) => o ? $ : Se($) || o === !1 || o === 0 ? Xe($, 1) : Xe($);
  let f, h, m, E, M = !1, L = !1;
  if (fe(e) ? (h = () => e.value, M = Se(e)) : Tt(e) ? (h = () => d(e), M = !0) : R(e) ? (L = !0, M = e.some(($) => Tt($) || Se($)), h = () => e.map(($) => {
    if (fe($))
      return $.value;
    if (Tt($))
      return d($);
    if (F($))
      return a ? a($, 2) : $();
    p($);
  })) : F(e) ? t ? h = a ? () => a(e, 2) : e : h = () => {
    if (m) {
      st();
      try {
        m();
      } finally {
        ot();
      }
    }
    const $ = wt;
    wt = f;
    try {
      return a ? a(e, 3, [E]) : e(E);
    } finally {
      wt = $;
    }
  } : (h = be, p(e)), t && o) {
    const $ = h, B = o === !0 ? 1 / 0 : o;
    h = () => Xe($(), B);
  }
  const H = Vi(), V = () => {
    f.stop(), H && Hs(H.effects, f);
  };
  if (r && t) {
    const $ = t;
    t = (...B) => {
      $(...B), V();
    };
  }
  let j = L ? new Array(e.length).fill(Sn) : Sn;
  const z = ($) => {
    if (!(!(f.flags & 1) || !f.dirty && !$))
      if (t) {
        const B = f.run();
        if (o || M || (L ? B.some((ue, re) => gt(ue, j[re])) : gt(B, j))) {
          m && m();
          const ue = wt;
          wt = f;
          try {
            const re = [
              B,
              // pass undefined as the old value when it's changed for the first time
              j === Sn ? void 0 : L && j[0] === Sn ? [] : j,
              E
            ];
            a ? a(t, 3, re) : (
              // @ts-expect-error
              t(...re)
            ), j = B;
          } finally {
            wt = ue;
          }
        }
      } else
        f.run();
  };
  return l && l(z), f = new Zo(h), f.scheduler = i ? () => i(z, !1) : z, E = ($) => pl($, !1, f), m = f.onStop = () => {
    const $ = Dn.get(f);
    if ($) {
      if (a)
        a($, 4);
      else
        for (const B of $) B();
      Dn.delete(f);
    }
  }, f.onTrack = n.onTrack, f.onTrigger = n.onTrigger, t ? s ? z(!0) : j = f.run() : i ? i(z.bind(null, !0), !0) : f.run(), V.pause = f.pause.bind(f), V.resume = f.resume.bind(f), V.stop = V, V;
}
function Xe(e, t = 1 / 0, n) {
  if (t <= 0 || !X(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, fe(e))
    Xe(e.value, t, n);
  else if (R(e))
    for (let s = 0; s < e.length; s++)
      Xe(e[s], t, n);
  else if (Go(e) || Ct(e))
    e.forEach((s) => {
      Xe(s, t, n);
    });
  else if (Jo(e)) {
    for (const s in e)
      Xe(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && Xe(e[s], t, n);
  }
  return e;
}
var at = { NODE_ENV: '"production"' };
const Ot = [];
function On(e) {
  Ot.push(e);
}
function $n() {
  Ot.pop();
}
let us = !1;
function x(e, ...t) {
  if (us) return;
  us = !0, st();
  const n = Ot.length ? Ot[Ot.length - 1].component : null, s = n && n.appContext.config.warnHandler, o = gl();
  if (s)
    kt(
      s,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((r) => {
          var i, l;
          return (l = (i = r.toString) == null ? void 0 : i.call(r)) != null ? l : JSON.stringify(r);
        }).join(""),
        n && n.proxy,
        o.map(
          ({ vnode: r }) => `at <${ss(n, r.type)}>`
        ).join(`
`),
        o
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    o.length && r.push(`
`, ...ml(o)), console.warn(...r);
  }
  ot(), us = !1;
}
function gl() {
  let e = Ot[Ot.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const s = e.component && e.component.parent;
    e = s && s.vnode;
  }
  return t;
}
function ml(e) {
  const t = [];
  return e.forEach((n, s) => {
    t.push(...s === 0 ? [] : [`
`], ...vl(n));
  }), t;
}
function vl({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, o = ` at <${ss(
    e.component,
    e.type,
    s
  )}`, r = ">" + n;
  return e.props ? [o, ...yl(e.props), r] : [o + r];
}
function yl(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((s) => {
    t.push(...vr(s, e[s]));
  }), n.length > 3 && t.push(" ..."), t;
}
function vr(e, t, n) {
  return ie(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : fe(t) ? (t = vr(e, k(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : F(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = k(t), n ? t : [`${e}=`, t]);
}
function bl(e, t) {
  e !== void 0 && (typeof e != "number" ? x(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && x(`${t} is NaN - the duration expression might be incorrect.`));
}
const zs = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function kt(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (o) {
    mn(o, t, n);
  }
}
function De(e, t, n, s) {
  if (F(e)) {
    const o = kt(e, t, n, s);
    return o && ks(o) && o.catch((r) => {
      mn(r, t, n);
    }), o;
  }
  if (R(e)) {
    const o = [];
    for (let r = 0; r < e.length; r++)
      o.push(De(e[r], t, n, s));
    return o;
  } else
    x(
      `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
    );
}
function mn(e, t, n, s = !0) {
  const o = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: i } = t && t.appContext.config || Y;
  if (t) {
    let l = t.parent;
    const a = t.proxy, p = zs[n];
    for (; l; ) {
      const d = l.ec;
      if (d) {
        for (let f = 0; f < d.length; f++)
          if (d[f](e, a, p) === !1)
            return;
      }
      l = l.parent;
    }
    if (r) {
      st(), kt(r, null, 10, [
        e,
        a,
        p
      ]), ot();
      return;
    }
  }
  _l(e, n, o, s, i);
}
function _l(e, t, n, s = !0, o = !1) {
  {
    const r = zs[t];
    if (n && On(n), x(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && $n(), s)
      throw e;
    console.error(e);
  }
}
const Ce = [];
let ke = -1;
const Lt = [];
let ft = null, Nt = 0;
const yr = /* @__PURE__ */ Promise.resolve();
let Ln = null;
const wl = 100;
function xl(e) {
  const t = Ln || yr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Cl(e) {
  let t = ke + 1, n = Ce.length;
  for (; t < n; ) {
    const s = t + n >>> 1, o = Ce[s], r = ln(o);
    r < e || r === e && o.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Qn(e) {
  if (!(e.flags & 1)) {
    const t = ln(e), n = Ce[Ce.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= ln(n) ? Ce.push(e) : Ce.splice(Cl(t), 0, e), e.flags |= 1, br();
  }
}
function br() {
  Ln || (Ln = yr.then(xr));
}
function _r(e) {
  R(e) ? Lt.push(...e) : ft && e.id === -1 ? ft.splice(Nt + 1, 0, e) : e.flags & 1 || (Lt.push(e), e.flags |= 1), br();
}
function po(e, t, n = ke + 1) {
  for (t = t || /* @__PURE__ */ new Map(); n < Ce.length; n++) {
    const s = Ce[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid || Js(t, s))
        continue;
      Ce.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function wr(e) {
  if (Lt.length) {
    const t = [...new Set(Lt)].sort(
      (n, s) => ln(n) - ln(s)
    );
    if (Lt.length = 0, ft) {
      ft.push(...t);
      return;
    }
    for (ft = t, e = e || /* @__PURE__ */ new Map(), Nt = 0; Nt < ft.length; Nt++) {
      const n = ft[Nt];
      Js(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    ft = null, Nt = 0;
  }
}
const ln = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function xr(e) {
  e = e || /* @__PURE__ */ new Map();
  const t = (n) => Js(e, n);
  try {
    for (ke = 0; ke < Ce.length; ke++) {
      const n = Ce[ke];
      if (n && !(n.flags & 8)) {
        if (at.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), kt(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; ke < Ce.length; ke++) {
      const n = Ce[ke];
      n && (n.flags &= -2);
    }
    ke = -1, Ce.length = 0, wr(e), Ln = null, (Ce.length || Lt.length) && xr(e);
  }
}
function Js(e, t) {
  const n = e.get(t) || 0;
  if (n > wl) {
    const s = t.i, o = s && di(s.type);
    return mn(
      `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let We = !1;
const En = /* @__PURE__ */ new Map();
hn().__VUE_HMR_RUNTIME__ = {
  createRecord: ds(Cr),
  rerender: ds(Ol),
  reload: ds($l)
};
const At = /* @__PURE__ */ new Map();
function Sl(e) {
  const t = e.type.__hmrId;
  let n = At.get(t);
  n || (Cr(t, e.type), n = At.get(t)), n.instances.add(e);
}
function Tl(e) {
  At.get(e.type.__hmrId).instances.delete(e);
}
function Cr(e, t) {
  return At.has(e) ? !1 : (At.set(e, {
    initialDef: jn(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function jn(e) {
  return pi(e) ? e.__vccOpts : e;
}
function Ol(e, t) {
  const n = At.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((s) => {
    t && (s.render = t, jn(s.type).render = t), s.renderCache = [], We = !0, s.update(), We = !1;
  }));
}
function $l(e, t) {
  const n = At.get(e);
  if (!n) return;
  t = jn(t), ho(n.initialDef, t);
  const s = [...n.instances];
  for (let o = 0; o < s.length; o++) {
    const r = s[o], i = jn(r.type);
    let l = En.get(i);
    l || (i !== n.initialDef && ho(i, t), En.set(i, l = /* @__PURE__ */ new Set())), l.add(r), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (l.add(r), r.ceReload(t.styles), l.delete(r)) : r.parent ? Qn(() => {
      We = !0, r.parent.update(), We = !1, l.delete(r);
    }) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), r.root.ce && r !== r.root && r.root.ce._removeChildStyle(i);
  }
  _r(() => {
    En.clear();
  });
}
function ho(e, t) {
  ce(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function ds(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (s) {
      console.error(s), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let Be, Yt = [], Ts = !1;
function vn(e, ...t) {
  Be ? Be.emit(e, ...t) : Ts || Yt.push({ event: e, args: t });
}
function Sr(e, t) {
  var n, s;
  Be = e, Be ? (Be.enabled = !0, Yt.forEach(({ event: o, args: r }) => Be.emit(o, ...r)), Yt = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((s = (n = window.navigator) == null ? void 0 : n.userAgent) != null && s.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    Sr(r, t);
  }), setTimeout(() => {
    Be || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Ts = !0, Yt = []);
  }, 3e3)) : (Ts = !0, Yt = []);
}
function El(e, t) {
  vn("app:init", e, t, {
    Fragment: ye,
    Text: bn,
    Comment: ae,
    Static: In
  });
}
function Al(e) {
  vn("app:unmount", e);
}
const Il = /* @__PURE__ */ Ys(
  "component:added"
  /* COMPONENT_ADDED */
), Tr = /* @__PURE__ */ Ys(
  "component:updated"
  /* COMPONENT_UPDATED */
), Ml = /* @__PURE__ */ Ys(
  "component:removed"
  /* COMPONENT_REMOVED */
), Rl = (e) => {
  Be && typeof Be.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Be.cleanupBuffer(e) && Ml(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ys(e) {
  return (t) => {
    vn(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const Pl = /* @__PURE__ */ Or(
  "perf:start"
  /* PERFORMANCE_START */
), Nl = /* @__PURE__ */ Or(
  "perf:end"
  /* PERFORMANCE_END */
);
function Or(e) {
  return (t, n, s) => {
    vn(e, t.appContext.app, t.uid, t, n, s);
  };
}
function Fl(e, t, n) {
  vn(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let de = null, $r = null;
function Hn(e) {
  const t = de;
  return de = e, $r = e && e.type.__scopeId || null, t;
}
function Zn(e, t = de, n) {
  if (!t || e._n)
    return e;
  const s = (...o) => {
    s._d && Oo(-1);
    const r = Hn(t);
    let i;
    try {
      i = e(...o);
    } finally {
      Hn(r), s._d && Oo(1);
    }
    return Tr(t), i;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function Er(e) {
  xi(e) && x("Do not use built-in directive ids as custom directive id: " + e);
}
function Dl(e, t) {
  if (de === null)
    return x("withDirectives can only be used inside render functions."), e;
  const n = ns(de), s = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [r, i, l, a = Y] = t[o];
    r && (F(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && Xe(i), s.push({
      dir: r,
      instance: n,
      value: i,
      oldValue: void 0,
      arg: l,
      modifiers: a
    }));
  }
  return e;
}
function mt(e, t, n, s) {
  const o = e.dirs, r = t && t.dirs;
  for (let i = 0; i < o.length; i++) {
    const l = o[i];
    r && (l.oldValue = r[i].value);
    let a = l.dir[s];
    a && (st(), De(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), ot());
  }
}
const Ll = Symbol("_vte"), Ar = (e) => e.__isTeleport, ut = Symbol("_leaveCb"), Tn = Symbol("_enterCb");
function jl() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Xs(() => {
    e.isMounted = !0;
  }), Lr(() => {
    e.isUnmounting = !0;
  }), e;
}
const Ie = [Function, Array], Ir = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Ie,
  onEnter: Ie,
  onAfterEnter: Ie,
  onEnterCancelled: Ie,
  // leave
  onBeforeLeave: Ie,
  onLeave: Ie,
  onAfterLeave: Ie,
  onLeaveCancelled: Ie,
  // appear
  onBeforeAppear: Ie,
  onAppear: Ie,
  onAfterAppear: Ie,
  onAppearCancelled: Ie
}, Mr = (e) => {
  const t = e.subTree;
  return t.component ? Mr(t.component) : t;
}, Hl = {
  name: "BaseTransition",
  props: Ir,
  setup(e, { slots: t }) {
    const n = ai(), s = jl();
    return () => {
      const o = t.default && Nr(t.default(), !0);
      if (!o || !o.length)
        return;
      const r = Rr(o), i = k(e), { mode: l } = i;
      if (l && l !== "in-out" && l !== "out-in" && l !== "default" && x(`invalid <transition> mode: ${l}`), s.isLeaving)
        return ps(r);
      const a = go(r);
      if (!a)
        return ps(r);
      let p = Os(
        a,
        i,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (h) => p = h
      );
      a.type !== ae && cn(a, p);
      const d = n.subTree, f = d && go(d);
      if (f && f.type !== ae && !xt(a, f) && Mr(n).type !== ae) {
        const h = Os(
          f,
          i,
          s,
          n
        );
        if (cn(f, h), l === "out-in" && a.type !== ae)
          return s.isLeaving = !0, h.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete h.afterLeave;
          }, ps(r);
        l === "in-out" && a.type !== ae && (h.delayLeave = (m, E, M) => {
          const L = Pr(
            s,
            f
          );
          L[String(f.key)] = f, m[ut] = () => {
            E(), m[ut] = void 0, delete p.delayedLeave;
          }, p.delayedLeave = M;
        });
      }
      return r;
    };
  }
};
function Rr(e) {
  let t = e[0];
  if (e.length > 1) {
    let n = !1;
    for (const s of e)
      if (s.type !== ae) {
        if (n) {
          x(
            "<transition> can only be used on a single element or component. Use <transition-group> for lists."
          );
          break;
        }
        t = s, n = !0;
      }
  }
  return t;
}
const kl = Hl;
function Pr(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function Os(e, t, n, s, o) {
  const {
    appear: r,
    mode: i,
    persisted: l = !1,
    onBeforeEnter: a,
    onEnter: p,
    onAfterEnter: d,
    onEnterCancelled: f,
    onBeforeLeave: h,
    onLeave: m,
    onAfterLeave: E,
    onLeaveCancelled: M,
    onBeforeAppear: L,
    onAppear: H,
    onAfterAppear: V,
    onAppearCancelled: j
  } = t, z = String(e.key), $ = Pr(n, e), B = (P, G) => {
    P && De(
      P,
      s,
      9,
      G
    );
  }, ue = (P, G) => {
    const ee = G[1];
    B(P, G), R(P) ? P.every((w) => w.length <= 1) && ee() : P.length <= 1 && ee();
  }, re = {
    mode: i,
    persisted: l,
    beforeEnter(P) {
      let G = a;
      if (!n.isMounted)
        if (r)
          G = L || a;
        else
          return;
      P[ut] && P[ut](
        !0
        /* cancelled */
      );
      const ee = $[z];
      ee && xt(e, ee) && ee.el[ut] && ee.el[ut](), B(G, [P]);
    },
    enter(P) {
      let G = p, ee = d, w = f;
      if (!n.isMounted)
        if (r)
          G = H || p, ee = V || d, w = j || f;
        else
          return;
      let A = !1;
      const se = P[Tn] = (_e) => {
        A || (A = !0, _e ? B(w, [P]) : B(ee, [P]), re.delayedLeave && re.delayedLeave(), P[Tn] = void 0);
      };
      G ? ue(G, [P, se]) : se();
    },
    leave(P, G) {
      const ee = String(e.key);
      if (P[Tn] && P[Tn](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return G();
      B(h, [P]);
      let w = !1;
      const A = P[ut] = (se) => {
        w || (w = !0, G(), se ? B(M, [P]) : B(E, [P]), P[ut] = void 0, $[ee] === e && delete $[ee]);
      };
      $[ee] = e, m ? ue(m, [P, A]) : A();
    },
    clone(P) {
      const G = Os(
        P,
        t,
        n,
        s,
        o
      );
      return o && o(G), G;
    }
  };
  return re;
}
function ps(e) {
  if (yn(e))
    return e = qe(e), e.children = null, e;
}
function go(e) {
  if (!yn(e))
    return Ar(e.type) && e.children ? Rr(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && F(n.default))
      return n.default();
  }
}
function cn(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, cn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Nr(e, t = !1, n) {
  let s = [], o = 0;
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    const l = n == null ? i.key : String(n) + String(i.key != null ? i.key : r);
    i.type === ye ? (i.patchFlag & 128 && o++, s = s.concat(
      Nr(i.children, t, l)
    )) : (t || i.type !== ae) && s.push(l != null ? qe(i, { key: l }) : i);
  }
  if (o > 1)
    for (let r = 0; r < s.length; r++)
      s[r].patchFlag = -2;
  return s;
}
function Fr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Vl = /* @__PURE__ */ new WeakSet();
function $s(e, t, n, s, o = !1) {
  if (R(e)) {
    e.forEach(
      (E, M) => $s(
        E,
        t && (R(t) ? t[M] : t),
        n,
        s,
        o
      )
    );
    return;
  }
  if (jt(s) && !o)
    return;
  const r = s.shapeFlag & 4 ? ns(s.component) : s.el, i = o ? null : r, { i: l, r: a } = e;
  if (!l) {
    x(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const p = t && t.r, d = l.refs === Y ? l.refs = {} : l.refs, f = l.setupState, h = k(f), m = f === Y ? () => !1 : (E) => (q(h, E) && !fe(h[E]) && x(
    `Template ref "${E}" used on a non-ref value. It will not work in the production build.`
  ), Vl.has(h[E]) ? !1 : q(h, E));
  if (p != null && p !== a && (ie(p) ? (d[p] = null, m(p) && (f[p] = null)) : fe(p) && (p.value = null)), F(a))
    kt(a, l, 12, [i, d]);
  else {
    const E = ie(a), M = fe(a);
    if (E || M) {
      const L = () => {
        if (e.f) {
          const H = E ? m(a) ? f[a] : d[a] : a.value;
          o ? R(H) && Hs(H, r) : R(H) ? H.includes(r) || H.push(r) : E ? (d[a] = [r], m(a) && (f[a] = d[a])) : (a.value = [r], e.k && (d[e.k] = a.value));
        } else E ? (d[a] = i, m(a) && (f[a] = i)) : M ? (a.value = i, e.k && (d[e.k] = i)) : x("Invalid template ref type:", a, `(${typeof a})`);
      };
      i ? (L.id = -1, $e(L, n)) : L();
    } else
      x("Invalid template ref type:", a, `(${typeof a})`);
  }
}
hn().requestIdleCallback;
hn().cancelIdleCallback;
const jt = (e) => !!e.type.__asyncLoader, yn = (e) => e.type.__isKeepAlive;
function Bl(e, t) {
  Dr(e, "a", t);
}
function Ul(e, t) {
  Dr(e, "da", t);
}
function Dr(e, t, n = he) {
  const s = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (es(t, s, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      yn(o.parent.vnode) && Wl(s, t, n, o), o = o.parent;
  }
}
function Wl(e, t, n, s) {
  const o = es(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  jr(() => {
    Hs(s[t], o);
  }, n);
}
function es(e, t, n = he, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...i) => {
      st();
      const l = _n(n), a = De(t, n, e, i);
      return l(), ot(), a;
    });
    return s ? o.unshift(r) : o.push(r), r;
  } else {
    const o = _t(zs[e].replace(/ hook$/, ""));
    x(
      `${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const rt = (e) => (t, n = he) => {
  (!un || e === "sp") && es(e, (...s) => t(...s), n);
}, Kl = rt("bm"), Xs = rt("m"), ql = rt(
  "bu"
), Gl = rt("u"), Lr = rt(
  "bum"
), jr = rt("um"), zl = rt(
  "sp"
), Jl = rt("rtg"), Yl = rt("rtc");
function Xl(e, t = he) {
  es("ec", e, t);
}
const Ql = Symbol.for("v-ndc");
function Hr(e, t, n, s) {
  let o;
  const r = n, i = R(e);
  if (i || ie(e)) {
    const l = i && Tt(e);
    let a = !1;
    l && (a = !Se(e), e = Jn(e)), o = new Array(e.length);
    for (let p = 0, d = e.length; p < d; p++)
      o[p] = t(
        a ? ve(e[p]) : e[p],
        p,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    Number.isInteger(e) || x(`The v-for range expect an integer value but got ${e}.`), o = new Array(e);
    for (let l = 0; l < e; l++)
      o[l] = t(l + 1, l, void 0, r);
  } else if (X(e))
    if (e[Symbol.iterator])
      o = Array.from(
        e,
        (l, a) => t(l, a, void 0, r)
      );
    else {
      const l = Object.keys(e);
      o = new Array(l.length);
      for (let a = 0, p = l.length; a < p; a++) {
        const d = l[a];
        o[a] = t(e[d], d, a, r);
      }
    }
  else
    o = [];
  return o;
}
function kr(e, t, n = {}, s, o) {
  if (de.ce || de.parent && jt(de.parent) && de.parent.ce)
    return te(), fn(
      ye,
      null,
      [oe("slot", n, s)],
      64
    );
  let r = e[t];
  r && r.length > 1 && (x(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), r = () => []), r && r._c && (r._d = !1), te();
  const i = r && Vr(r(n)), l = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  i && i.key, a = fn(
    ye,
    {
      key: (l && !nt(l) ? l : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!i && s ? "_fb" : "")
    },
    i || [],
    i && e._ === 1 ? 64 : -2
  );
  return r && r._c && (r._d = !0), a;
}
function Vr(e) {
  return e.some((t) => It(t) ? !(t.type === ae || t.type === ye && !Vr(t.children)) : !0) ? e : null;
}
const Es = (e) => e ? fi(e) ? ns(e) : Es(e.parent) : null, $t = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ce(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => Ue(e.props),
    $attrs: (e) => Ue(e.attrs),
    $slots: (e) => Ue(e.slots),
    $refs: (e) => Ue(e.refs),
    $parent: (e) => Es(e.parent),
    $root: (e) => Es(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Zs(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Qn(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = xl.bind(e.proxy)),
    $watch: (e) => Mc.bind(e)
  })
), Qs = (e) => e === "_" || e === "$", hs = (e, t) => e !== Y && !e.__isScriptSetup && q(e, t), Br = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: o, props: r, accessCache: i, type: l, appContext: a } = e;
    if (t === "__isVue")
      return !0;
    let p;
    if (t[0] !== "$") {
      const m = i[t];
      if (m !== void 0)
        switch (m) {
          case 1:
            return s[t];
          case 2:
            return o[t];
          case 4:
            return n[t];
          case 3:
            return r[t];
        }
      else {
        if (hs(s, t))
          return i[t] = 1, s[t];
        if (o !== Y && q(o, t))
          return i[t] = 2, o[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (p = e.propsOptions[0]) && q(p, t)
        )
          return i[t] = 3, r[t];
        if (n !== Y && q(n, t))
          return i[t] = 4, n[t];
        As && (i[t] = 0);
      }
    }
    const d = $t[t];
    let f, h;
    if (d)
      return t === "$attrs" ? (pe(e.attrs, "get", ""), Bn()) : t === "$slots" && pe(e, "get", t), d(e);
    if (
      // css module (injected by vue-loader)
      (f = l.__cssModules) && (f = f[t])
    )
      return f;
    if (n !== Y && q(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      h = a.config.globalProperties, q(h, t)
    )
      return h[t];
    de && (!ie(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (o !== Y && Qs(t[0]) && q(o, t) ? x(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === de && x(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: o, ctx: r } = e;
    return hs(o, t) ? (o[t] = n, !0) : o.__isScriptSetup && q(o, t) ? (x(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : s !== Y && q(s, t) ? (s[t] = n, !0) : q(e.props, t) ? (x(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (x(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (t in e.appContext.config.globalProperties ? Object.defineProperty(r, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: o, propsOptions: r }
  }, i) {
    let l;
    return !!n[i] || e !== Y && q(e, i) || hs(t, i) || (l = r[0]) && q(l, i) || q(s, i) || q($t, i) || q(o.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : q(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
Br.ownKeys = (e) => (x(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e));
function Zl(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys($t).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => $t[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: be
    });
  }), t;
}
function ec(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((s) => {
    Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[s],
      set: be
    });
  });
}
function tc(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(k(n)).forEach((s) => {
    if (!n.__isScriptSetup) {
      if (Qs(s[0])) {
        x(
          `setup() return property ${JSON.stringify(
            s
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, s, {
        enumerable: !0,
        configurable: !0,
        get: () => n[s],
        set: be
      });
    }
  });
}
function mo(e) {
  return R(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function nc() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? x(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let As = !0;
function sc(e) {
  const t = Zs(e), n = e.proxy, s = e.ctx;
  As = !1, t.beforeCreate && vo(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: r,
    methods: i,
    watch: l,
    provide: a,
    inject: p,
    // lifecycle
    created: d,
    beforeMount: f,
    mounted: h,
    beforeUpdate: m,
    updated: E,
    activated: M,
    deactivated: L,
    beforeDestroy: H,
    beforeUnmount: V,
    destroyed: j,
    unmounted: z,
    render: $,
    renderTracked: B,
    renderTriggered: ue,
    errorCaptured: re,
    serverPrefetch: P,
    // public API
    expose: G,
    inheritAttrs: ee,
    // assets
    components: w,
    directives: A,
    filters: se
  } = t, _e = nc();
  {
    const [K] = e.propsOptions;
    if (K)
      for (const U in K)
        _e("Props", U);
  }
  if (p && oc(p, s, _e), i)
    for (const K in i) {
      const U = i[K];
      F(U) ? (Object.defineProperty(s, K, {
        value: U.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }), _e("Methods", K)) : x(
        `Method "${K}" has type "${typeof U}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (o) {
    F(o) || x(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const K = o.call(n, n);
    if (ks(K) && x(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !X(K))
      x("data() should return an object.");
    else {
      e.data = Gs(K);
      for (const U in K)
        _e("Data", U), Qs(U[0]) || Object.defineProperty(s, U, {
          configurable: !0,
          enumerable: !0,
          get: () => K[U],
          set: be
        });
    }
  }
  if (As = !0, r)
    for (const K in r) {
      const U = r[K], Le = F(U) ? U.bind(n, n) : F(U.get) ? U.get.bind(n, n) : be;
      Le === be && x(`Computed property "${K}" has no getter.`);
      const os = !F(U) && F(U.set) ? U.set.bind(n) : () => {
        x(
          `Write operation failed: computed property "${K}" is readonly.`
        );
      }, Vt = ht({
        get: Le,
        set: os
      });
      Object.defineProperty(s, K, {
        enumerable: !0,
        configurable: !0,
        get: () => Vt.value,
        set: (Rt) => Vt.value = Rt
      }), _e("Computed", K);
    }
  if (l)
    for (const K in l)
      Ur(l[K], s, n, K);
  if (a) {
    const K = F(a) ? a.call(n) : a;
    Reflect.ownKeys(K).forEach((U) => {
      fc(U, K[U]);
    });
  }
  d && vo(d, e, "c");
  function ge(K, U) {
    R(U) ? U.forEach((Le) => K(Le.bind(n))) : U && K(U.bind(n));
  }
  if (ge(Kl, f), ge(Xs, h), ge(ql, m), ge(Gl, E), ge(Bl, M), ge(Ul, L), ge(Xl, re), ge(Yl, B), ge(Jl, ue), ge(Lr, V), ge(jr, z), ge(zl, P), R(G))
    if (G.length) {
      const K = e.exposed || (e.exposed = {});
      G.forEach((U) => {
        Object.defineProperty(K, U, {
          get: () => n[U],
          set: (Le) => n[U] = Le
        });
      });
    } else e.exposed || (e.exposed = {});
  $ && e.render === be && (e.render = $), ee != null && (e.inheritAttrs = ee), w && (e.components = w), A && (e.directives = A), P && Fr(e);
}
function oc(e, t, n = be) {
  R(e) && (e = Is(e));
  for (const s in e) {
    const o = e[s];
    let r;
    X(o) ? "default" in o ? r = An(
      o.from || s,
      o.default,
      !0
    ) : r = An(o.from || s) : r = An(o), fe(r) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (i) => r.value = i
    }) : t[s] = r, n("Inject", s);
  }
}
function vo(e, t, n) {
  De(
    R(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Ur(e, t, n, s) {
  let o = s.includes(".") ? ni(n, s) : () => n[s];
  if (ie(e)) {
    const r = t[e];
    F(r) ? tn(o, r) : x(`Invalid watch handler specified by key "${e}"`, r);
  } else if (F(e))
    tn(o, e.bind(n));
  else if (X(e))
    if (R(e))
      e.forEach((r) => Ur(r, t, n, s));
    else {
      const r = F(e.handler) ? e.handler.bind(n) : t[e.handler];
      F(r) ? tn(o, r, e) : x(`Invalid watch handler specified by key "${e.handler}"`, r);
    }
  else
    x(`Invalid watch option: "${s}"`, e);
}
function Zs(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: o,
    optionsCache: r,
    config: { optionMergeStrategies: i }
  } = e.appContext, l = r.get(t);
  let a;
  return l ? a = l : !o.length && !n && !s ? a = t : (a = {}, o.length && o.forEach(
    (p) => kn(a, p, i, !0)
  ), kn(a, t, i)), X(t) && r.set(t, a), a;
}
function kn(e, t, n, s = !1) {
  const { mixins: o, extends: r } = t;
  r && kn(e, r, n, !0), o && o.forEach(
    (i) => kn(e, i, n, !0)
  );
  for (const i in t)
    if (s && i === "expose")
      x(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = rc[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const rc = {
  data: yo,
  props: bo,
  emits: bo,
  // objects
  methods: Xt,
  computed: Xt,
  // lifecycle
  beforeCreate: xe,
  created: xe,
  beforeMount: xe,
  mounted: xe,
  beforeUpdate: xe,
  updated: xe,
  beforeDestroy: xe,
  beforeUnmount: xe,
  destroyed: xe,
  unmounted: xe,
  activated: xe,
  deactivated: xe,
  errorCaptured: xe,
  serverPrefetch: xe,
  // assets
  components: Xt,
  directives: Xt,
  // watch
  watch: lc,
  // provide / inject
  provide: yo,
  inject: ic
};
function yo(e, t) {
  return t ? e ? function() {
    return ce(
      F(e) ? e.call(this, this) : e,
      F(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function ic(e, t) {
  return Xt(Is(e), Is(t));
}
function Is(e) {
  if (R(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function xe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Xt(e, t) {
  return e ? ce(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function bo(e, t) {
  return e ? R(e) && R(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ce(
    /* @__PURE__ */ Object.create(null),
    mo(e),
    mo(t ?? {})
  ) : t;
}
function lc(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = ce(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = xe(e[s], t[s]);
  return n;
}
function Wr() {
  return {
    app: null,
    config: {
      isNativeTag: _i,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let cc = 0;
function ac(e, t) {
  return function(s, o = null) {
    F(s) || (s = ce({}, s)), o != null && !X(o) && (x("root props passed to app.mount() must be an object."), o = null);
    const r = Wr(), i = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const p = r.app = {
      _uid: cc++,
      _component: s,
      _props: o,
      _container: null,
      _context: r,
      _instance: null,
      version: Ao,
      get config() {
        return r.config;
      },
      set config(d) {
        x(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(d, ...f) {
        return i.has(d) ? x("Plugin has already been applied to target app.") : d && F(d.install) ? (i.add(d), d.install(p, ...f)) : F(d) ? (i.add(d), d(p, ...f)) : x(
          'A plugin must either be a function or an object with an "install" function.'
        ), p;
      },
      mixin(d) {
        return r.mixins.includes(d) ? x(
          "Mixin has already been applied to target app" + (d.name ? `: ${d.name}` : "")
        ) : r.mixins.push(d), p;
      },
      component(d, f) {
        return Ds(d, r.config), f ? (r.components[d] && x(`Component "${d}" has already been registered in target app.`), r.components[d] = f, p) : r.components[d];
      },
      directive(d, f) {
        return Er(d), f ? (r.directives[d] && x(`Directive "${d}" has already been registered in target app.`), r.directives[d] = f, p) : r.directives[d];
      },
      mount(d, f, h) {
        if (a)
          x(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          d.__vue_app__ && x(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const m = p._ceVNode || oe(s, o);
          return m.appContext = r, h === !0 ? h = "svg" : h === !1 && (h = void 0), r.reload = () => {
            e(
              qe(m),
              d,
              h
            );
          }, f && t ? t(m, d) : e(m, d, h), a = !0, p._container = d, d.__vue_app__ = p, p._instance = m.component, El(p, Ao), ns(m.component);
        }
      },
      onUnmount(d) {
        typeof d != "function" && x(
          `Expected function as first argument to app.onUnmount(), but got ${typeof d}`
        ), l.push(d);
      },
      unmount() {
        a ? (De(
          l,
          p._instance,
          16
        ), e(null, p._container), p._instance = null, Al(p), delete p._container.__vue_app__) : x("Cannot unmount an app that is not mounted.");
      },
      provide(d, f) {
        return d in r.provides && x(
          `App already provides property with key "${String(d)}". It will be overwritten with the new value.`
        ), r.provides[d] = f, p;
      },
      runWithContext(d) {
        const f = Ht;
        Ht = p;
        try {
          return d();
        } finally {
          Ht = f;
        }
      }
    };
    return p;
  };
}
let Ht = null;
function fc(e, t) {
  if (!he)
    x("provide() can only be used inside setup().");
  else {
    let n = he.provides;
    const s = he.parent && he.parent.provides;
    s === n && (n = he.provides = Object.create(s)), n[e] = t;
  }
}
function An(e, t, n = !1) {
  const s = he || de;
  if (s || Ht) {
    const o = Ht ? Ht._context.provides : s ? s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && F(t) ? t.call(s && s.proxy) : t;
    x(`injection "${String(e)}" not found.`);
  } else
    x("inject() can only be used inside setup() or functional components.");
}
const Kr = {}, qr = () => Object.create(Kr), Gr = (e) => Object.getPrototypeOf(e) === Kr;
function uc(e, t, n, s = !1) {
  const o = {}, r = qr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), zr(e, t, o, r);
  for (const i in e.propsOptions[0])
    i in o || (o[i] = void 0);
  Yr(t || {}, o, e), n ? e.props = s ? o : il(o) : e.type.props ? e.props = o : e.props = r, e.attrs = r;
}
function dc(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function pc(e, t, n, s) {
  const {
    props: o,
    attrs: r,
    vnode: { patchFlag: i }
  } = e, l = k(o), [a] = e.propsOptions;
  let p = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !dc(e) && (s || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const d = e.vnode.dynamicProps;
      for (let f = 0; f < d.length; f++) {
        let h = d[f];
        if (ts(e.emitsOptions, h))
          continue;
        const m = t[h];
        if (a)
          if (q(r, h))
            m !== r[h] && (r[h] = m, p = !0);
          else {
            const E = Ne(h);
            o[E] = Ms(
              a,
              l,
              E,
              m,
              e,
              !1
            );
          }
        else
          m !== r[h] && (r[h] = m, p = !0);
      }
    }
  } else {
    zr(e, t, o, r) && (p = !0);
    let d;
    for (const f in l)
      (!t || // for camelCase
      !q(t, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = Ze(f)) === f || !q(t, d))) && (a ? n && // for camelCase
      (n[f] !== void 0 || // for kebab-case
      n[d] !== void 0) && (o[f] = Ms(
        a,
        l,
        f,
        void 0,
        e,
        !0
      )) : delete o[f]);
    if (r !== l)
      for (const f in r)
        (!t || !q(t, f)) && (delete r[f], p = !0);
  }
  p && Ve(e.attrs, "set", ""), Yr(t || {}, o, e);
}
function zr(e, t, n, s) {
  const [o, r] = e.propsOptions;
  let i = !1, l;
  if (t)
    for (let a in t) {
      if (Qt(a))
        continue;
      const p = t[a];
      let d;
      o && q(o, d = Ne(a)) ? !r || !r.includes(d) ? n[d] = p : (l || (l = {}))[d] = p : ts(e.emitsOptions, a) || (!(a in s) || p !== s[a]) && (s[a] = p, i = !0);
    }
  if (r) {
    const a = k(n), p = l || Y;
    for (let d = 0; d < r.length; d++) {
      const f = r[d];
      n[f] = Ms(
        o,
        a,
        f,
        p[f],
        e,
        !q(p, f)
      );
    }
  }
  return i;
}
function Ms(e, t, n, s, o, r) {
  const i = e[n];
  if (i != null) {
    const l = q(i, "default");
    if (l && s === void 0) {
      const a = i.default;
      if (i.type !== Function && !i.skipFactory && F(a)) {
        const { propsDefaults: p } = o;
        if (n in p)
          s = p[n];
        else {
          const d = _n(o);
          s = p[n] = a.call(
            null,
            t
          ), d();
        }
      } else
        s = a;
      o.ce && o.ce._setProp(n, s);
    }
    i[
      0
      /* shouldCast */
    ] && (r && !l ? s = !1 : i[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === Ze(n)) && (s = !0));
  }
  return s;
}
const hc = /* @__PURE__ */ new WeakMap();
function Jr(e, t, n = !1) {
  const s = n ? hc : t.propsCache, o = s.get(e);
  if (o)
    return o;
  const r = e.props, i = {}, l = [];
  let a = !1;
  if (!F(e)) {
    const d = (f) => {
      a = !0;
      const [h, m] = Jr(f, t, !0);
      ce(i, h), m && l.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!r && !a)
    return X(e) && s.set(e, Ft), Ft;
  if (R(r))
    for (let d = 0; d < r.length; d++) {
      ie(r[d]) || x("props must be strings when using array syntax.", r[d]);
      const f = Ne(r[d]);
      _o(f) && (i[f] = Y);
    }
  else if (r) {
    X(r) || x("invalid props options", r);
    for (const d in r) {
      const f = Ne(d);
      if (_o(f)) {
        const h = r[d], m = i[f] = R(h) || F(h) ? { type: h } : ce({}, h), E = m.type;
        let M = !1, L = !0;
        if (R(E))
          for (let H = 0; H < E.length; ++H) {
            const V = E[H], j = F(V) && V.name;
            if (j === "Boolean") {
              M = !0;
              break;
            } else j === "String" && (L = !1);
          }
        else
          M = F(E) && E.name === "Boolean";
        m[
          0
          /* shouldCast */
        ] = M, m[
          1
          /* shouldCastTrue */
        ] = L, (M || q(m, "default")) && l.push(f);
      }
    }
  }
  const p = [i, l];
  return X(e) && s.set(e, p), p;
}
function _o(e) {
  return e[0] !== "$" && !Qt(e) ? !0 : (x(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function gc(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function Yr(e, t, n) {
  const s = k(t), o = n.propsOptions[0], r = Object.keys(e).map((i) => Ne(i));
  for (const i in o) {
    let l = o[i];
    l != null && mc(
      i,
      s[i],
      l,
      Ue(s),
      !r.includes(i)
    );
  }
}
function mc(e, t, n, s, o) {
  const { type: r, required: i, validator: l, skipCheck: a } = n;
  if (i && o) {
    x('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !i)) {
    if (r != null && r !== !0 && !a) {
      let p = !1;
      const d = R(r) ? r : [r], f = [];
      for (let h = 0; h < d.length && !p; h++) {
        const { valid: m, expectedType: E } = yc(t, d[h]);
        f.push(E || ""), p = m;
      }
      if (!p) {
        x(bc(e, t, f));
        return;
      }
    }
    l && !l(t, s) && x('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const vc = /* @__PURE__ */ tt(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function yc(e, t) {
  let n;
  const s = gc(t);
  if (s === "null")
    n = e === null;
  else if (vc(s)) {
    const o = typeof e;
    n = o === s.toLowerCase(), !n && o === "object" && (n = e instanceof t);
  } else s === "Object" ? n = X(e) : s === "Array" ? n = R(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: s
  };
}
function bc(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let s = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(Gn).join(" | ")}`;
  const o = n[0], r = Vs(t), i = wo(t, o), l = wo(t, r);
  return n.length === 1 && xo(o) && !_c(o, r) && (s += ` with value ${i}`), s += `, got ${r} `, xo(r) && (s += `with value ${l}.`), s;
}
function wo(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function xo(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function _c(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Xr = (e) => e[0] === "_" || e === "$stable", eo = (e) => R(e) ? e.map(Pe) : [Pe(e)], wc = (e, t, n) => {
  if (t._n)
    return t;
  const s = Zn((...o) => (at.NODE_ENV !== "production" && he && (!n || n.root === he.root) && x(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), eo(t(...o))), n);
  return s._c = !1, s;
}, Qr = (e, t, n) => {
  const s = e._ctx;
  for (const o in e) {
    if (Xr(o)) continue;
    const r = e[o];
    if (F(r))
      t[o] = wc(o, r, s);
    else if (r != null) {
      x(
        `Non-function value encountered for slot "${o}". Prefer function slots for better performance.`
      );
      const i = eo(r);
      t[o] = () => i;
    }
  }
}, Zr = (e, t) => {
  yn(e.vnode) || x(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = eo(t);
  e.slots.default = () => n;
}, Rs = (e, t, n) => {
  for (const s in t)
    (n || s !== "_") && (e[s] = t[s]);
}, xc = (e, t, n) => {
  const s = e.slots = qr();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (Rs(s, t, n), n && Nn(s, "_", o, !0)) : Qr(t, s);
  } else t && Zr(e, t);
}, Cc = (e, t, n) => {
  const { vnode: s, slots: o } = e;
  let r = !0, i = Y;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? We ? (Rs(o, t, n), Ve(e, "set", "$slots")) : n && l === 1 ? r = !1 : Rs(o, t, n) : (r = !t.$stable, Qr(t, o)), i = t;
  } else t && (Zr(e, t), i = { default: 1 });
  if (r)
    for (const l in o)
      !Xr(l) && i[l] == null && delete o[l];
};
let Gt, pt;
function ze(e, t) {
  e.appContext.config.performance && Vn() && pt.mark(`vue-${t}-${e.uid}`), Pl(e, t, Vn() ? pt.now() : Date.now());
}
function Je(e, t) {
  if (e.appContext.config.performance && Vn()) {
    const n = `vue-${t}-${e.uid}`, s = n + ":end";
    pt.mark(s), pt.measure(
      `<${ss(e, e.type)}> ${t}`,
      n,
      s
    ), pt.clearMarks(n), pt.clearMarks(s);
  }
  Nl(e, t, Vn() ? pt.now() : Date.now());
}
function Vn() {
  return Gt !== void 0 || (typeof window < "u" && window.performance ? (Gt = !0, pt = window.performance) : Gt = !1), Gt;
}
function Sc() {
  const e = [];
  if (e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const $e = jc;
function Tc(e) {
  return Oc(e);
}
function Oc(e, t) {
  Sc();
  const n = hn();
  n.__VUE__ = !0, Sr(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: s,
    remove: o,
    patchProp: r,
    createElement: i,
    createText: l,
    createComment: a,
    setText: p,
    setElementText: d,
    parentNode: f,
    nextSibling: h,
    setScopeId: m = be,
    insertStaticContent: E
  } = e, M = (c, u, g, b = null, v = null, y = null, T = void 0, S = null, C = We ? !1 : !!u.dynamicChildren) => {
    if (c === u)
      return;
    c && !xt(c, u) && (b = wn(c), it(c, v, y, !0), c = null), u.patchFlag === -2 && (C = !1, u.dynamicChildren = null);
    const { type: _, ref: N, shapeFlag: O } = u;
    switch (_) {
      case bn:
        L(c, u, g, b);
        break;
      case ae:
        H(c, u, g, b);
        break;
      case In:
        c == null ? V(u, g, b, T) : j(c, u, g, T);
        break;
      case ye:
        A(
          c,
          u,
          g,
          b,
          v,
          y,
          T,
          S,
          C
        );
        break;
      default:
        O & 1 ? B(
          c,
          u,
          g,
          b,
          v,
          y,
          T,
          S,
          C
        ) : O & 6 ? se(
          c,
          u,
          g,
          b,
          v,
          y,
          T,
          S,
          C
        ) : O & 64 || O & 128 ? _.process(
          c,
          u,
          g,
          b,
          v,
          y,
          T,
          S,
          C,
          Ut
        ) : x("Invalid VNode type:", _, `(${typeof _})`);
    }
    N != null && v && $s(N, c && c.ref, y, u || c, !u);
  }, L = (c, u, g, b) => {
    if (c == null)
      s(
        u.el = l(u.children),
        g,
        b
      );
    else {
      const v = u.el = c.el;
      u.children !== c.children && p(v, u.children);
    }
  }, H = (c, u, g, b) => {
    c == null ? s(
      u.el = a(u.children || ""),
      g,
      b
    ) : u.el = c.el;
  }, V = (c, u, g, b) => {
    [c.el, c.anchor] = E(
      c.children,
      u,
      g,
      b,
      c.el,
      c.anchor
    );
  }, j = (c, u, g, b) => {
    if (u.children !== c.children) {
      const v = h(c.anchor);
      $(c), [u.el, u.anchor] = E(
        u.children,
        g,
        v,
        b
      );
    } else
      u.el = c.el, u.anchor = c.anchor;
  }, z = ({ el: c, anchor: u }, g, b) => {
    let v;
    for (; c && c !== u; )
      v = h(c), s(c, g, b), c = v;
    s(u, g, b);
  }, $ = ({ el: c, anchor: u }) => {
    let g;
    for (; c && c !== u; )
      g = h(c), o(c), c = g;
    o(u);
  }, B = (c, u, g, b, v, y, T, S, C) => {
    u.type === "svg" ? T = "svg" : u.type === "math" && (T = "mathml"), c == null ? ue(
      u,
      g,
      b,
      v,
      y,
      T,
      S,
      C
    ) : G(
      c,
      u,
      v,
      y,
      T,
      S,
      C
    );
  }, ue = (c, u, g, b, v, y, T, S) => {
    let C, _;
    const { props: N, shapeFlag: O, transition: I, dirs: D } = c;
    if (C = c.el = i(
      c.type,
      y,
      N && N.is,
      N
    ), O & 8 ? d(C, c.children) : O & 16 && P(
      c.children,
      C,
      null,
      b,
      v,
      gs(c, y),
      T,
      S
    ), D && mt(c, null, b, "created"), re(C, c, c.scopeId, T, b), N) {
      for (const ne in N)
        ne !== "value" && !Qt(ne) && r(C, ne, null, N[ne], y, b);
      "value" in N && r(C, "value", null, N.value, y), (_ = N.onVnodeBeforeMount) && He(_, b, c);
    }
    Nn(C, "__vnode", c, !0), Nn(C, "__vueParentComponent", b, !0), D && mt(c, null, b, "beforeMount");
    const W = $c(v, I);
    W && I.beforeEnter(C), s(C, u, g), ((_ = N && N.onVnodeMounted) || W || D) && $e(() => {
      _ && He(_, b, c), W && I.enter(C), D && mt(c, null, b, "mounted");
    }, v);
  }, re = (c, u, g, b, v) => {
    if (g && m(c, g), b)
      for (let y = 0; y < b.length; y++)
        m(c, b[y]);
    if (v) {
      let y = v.subTree;
      if (y.patchFlag > 0 && y.patchFlag & 2048 && (y = to(y.children) || y), u === y || ri(y.type) && (y.ssContent === u || y.ssFallback === u)) {
        const T = v.vnode;
        re(
          c,
          T,
          T.scopeId,
          T.slotScopeIds,
          v.parent
        );
      }
    }
  }, P = (c, u, g, b, v, y, T, S, C = 0) => {
    for (let _ = C; _ < c.length; _++) {
      const N = c[_] = S ? dt(c[_]) : Pe(c[_]);
      M(
        null,
        N,
        u,
        g,
        b,
        v,
        y,
        T,
        S
      );
    }
  }, G = (c, u, g, b, v, y, T) => {
    const S = u.el = c.el;
    S.__vnode = u;
    let { patchFlag: C, dynamicChildren: _, dirs: N } = u;
    C |= c.patchFlag & 16;
    const O = c.props || Y, I = u.props || Y;
    let D;
    if (g && vt(g, !1), (D = I.onVnodeBeforeUpdate) && He(D, g, u, c), N && mt(u, c, g, "beforeUpdate"), g && vt(g, !0), We && (C = 0, T = !1, _ = null), (O.innerHTML && I.innerHTML == null || O.textContent && I.textContent == null) && d(S, ""), _ ? (ee(
      c.dynamicChildren,
      _,
      S,
      g,
      b,
      gs(u, v),
      y
    ), Ps(c, u)) : T || Le(
      c,
      u,
      S,
      null,
      g,
      b,
      gs(u, v),
      y,
      !1
    ), C > 0) {
      if (C & 16)
        w(S, O, I, g, v);
      else if (C & 2 && O.class !== I.class && r(S, "class", null, I.class, v), C & 4 && r(S, "style", O.style, I.style, v), C & 8) {
        const W = u.dynamicProps;
        for (let ne = 0; ne < W.length; ne++) {
          const Q = W[ne], Te = O[Q], me = I[Q];
          (me !== Te || Q === "value") && r(S, Q, Te, me, v, g);
        }
      }
      C & 1 && c.children !== u.children && d(S, u.children);
    } else !T && _ == null && w(S, O, I, g, v);
    ((D = I.onVnodeUpdated) || N) && $e(() => {
      D && He(D, g, u, c), N && mt(u, c, g, "updated");
    }, b);
  }, ee = (c, u, g, b, v, y, T) => {
    for (let S = 0; S < u.length; S++) {
      const C = c[S], _ = u[S], N = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        C.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (C.type === ye || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !xt(C, _) || // - In the case of a component, it could contain anything.
        C.shapeFlag & 70) ? f(C.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          g
        )
      );
      M(
        C,
        _,
        N,
        null,
        b,
        v,
        y,
        T,
        !0
      );
    }
  }, w = (c, u, g, b, v) => {
    if (u !== g) {
      if (u !== Y)
        for (const y in u)
          !Qt(y) && !(y in g) && r(
            c,
            y,
            u[y],
            null,
            v,
            b
          );
      for (const y in g) {
        if (Qt(y)) continue;
        const T = g[y], S = u[y];
        T !== S && y !== "value" && r(c, y, S, T, v, b);
      }
      "value" in g && r(c, "value", u.value, g.value, v);
    }
  }, A = (c, u, g, b, v, y, T, S, C) => {
    const _ = u.el = c ? c.el : l(""), N = u.anchor = c ? c.anchor : l("");
    let { patchFlag: O, dynamicChildren: I, slotScopeIds: D } = u;
    // #5523 dev root fragment may inherit directives
    (We || O & 2048) && (O = 0, C = !1, I = null), D && (S = S ? S.concat(D) : D), c == null ? (s(_, g, b), s(N, g, b), P(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      u.children || [],
      g,
      N,
      v,
      y,
      T,
      S,
      C
    )) : O > 0 && O & 64 && I && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren ? (ee(
      c.dynamicChildren,
      I,
      g,
      v,
      y,
      T,
      S
    ), Ps(c, u)) : Le(
      c,
      u,
      g,
      N,
      v,
      y,
      T,
      S,
      C
    );
  }, se = (c, u, g, b, v, y, T, S, C) => {
    u.slotScopeIds = S, c == null ? u.shapeFlag & 512 ? v.ctx.activate(
      u,
      g,
      b,
      T,
      C
    ) : _e(
      u,
      g,
      b,
      v,
      y,
      T,
      C
    ) : ge(c, u, C);
  }, _e = (c, u, g, b, v, y, T) => {
    const S = c.component = Gc(
      c,
      b,
      v
    );
    if (S.type.__hmrId && Sl(S), On(c), ze(S, "mount"), yn(c) && (S.ctx.renderer = Ut), ze(S, "init"), Jc(S, !1, T), Je(S, "init"), S.asyncDep) {
      if (We && (c.el = null), v && v.registerDep(S, K, T), !c.el) {
        const C = S.subTree = oe(ae);
        H(null, C, u, g);
      }
    } else
      K(
        S,
        c,
        u,
        g,
        v,
        y,
        T
      );
    $n(), Je(S, "mount");
  }, ge = (c, u, g) => {
    const b = u.component = c.component;
    if (Dc(c, u, g))
      if (b.asyncDep && !b.asyncResolved) {
        On(u), U(b, u, g), $n();
        return;
      } else
        b.next = u, b.update();
    else
      u.el = c.el, b.vnode = u;
  }, K = (c, u, g, b, v, y, T) => {
    const S = () => {
      if (c.isMounted) {
        let { next: O, bu: I, u: D, parent: W, vnode: ne } = c;
        {
          const Oe = ei(c);
          if (Oe) {
            O && (O.el = ne.el, U(c, O, T)), Oe.asyncDep.then(() => {
              c.isUnmounted || S();
            });
            return;
          }
        }
        let Q = O, Te;
        On(O || c.vnode), vt(c, !1), O ? (O.el = ne.el, U(c, O, T)) : O = ne, I && Kt(I), (Te = O.props && O.props.onVnodeBeforeUpdate) && He(Te, W, O, ne), vt(c, !0), ze(c, "render");
        const me = ms(c);
        Je(c, "render");
        const Re = c.subTree;
        c.subTree = me, ze(c, "patch"), M(
          Re,
          me,
          // parent may have changed if it's in a teleport
          f(Re.el),
          // anchor may have changed if it's in a fragment
          wn(Re),
          c,
          v,
          y
        ), Je(c, "patch"), O.el = me.el, Q === null && Lc(c, me.el), D && $e(D, v), (Te = O.props && O.props.onVnodeUpdated) && $e(
          () => He(Te, W, O, ne),
          v
        ), Tr(c), $n();
      } else {
        let O;
        const { el: I, props: D } = u, { bm: W, m: ne, parent: Q, root: Te, type: me } = c, Re = jt(u);
        if (vt(c, !1), W && Kt(W), !Re && (O = D && D.onVnodeBeforeMount) && He(O, Q, u), vt(c, !0), I && ro) {
          const Oe = () => {
            ze(c, "render"), c.subTree = ms(c), Je(c, "render"), ze(c, "hydrate"), ro(
              I,
              c.subTree,
              c,
              v,
              null
            ), Je(c, "hydrate");
          };
          Re && me.__asyncHydrate ? me.__asyncHydrate(
            I,
            c,
            Oe
          ) : Oe();
        } else {
          Te.ce && Te.ce._injectChildStyle(me), ze(c, "render");
          const Oe = c.subTree = ms(c);
          Je(c, "render"), ze(c, "patch"), M(
            null,
            Oe,
            g,
            b,
            c,
            v,
            y
          ), Je(c, "patch"), u.el = Oe.el;
        }
        if (ne && $e(ne, v), !Re && (O = D && D.onVnodeMounted)) {
          const Oe = u;
          $e(
            () => He(O, Q, Oe),
            v
          );
        }
        (u.shapeFlag & 256 || Q && jt(Q.vnode) && Q.vnode.shapeFlag & 256) && c.a && $e(c.a, v), c.isMounted = !0, Il(c), u = g = b = null;
      }
    };
    c.scope.on();
    const C = c.effect = new Zo(S);
    c.scope.off();
    const _ = c.update = C.run.bind(C), N = c.job = C.runIfDirty.bind(C);
    N.i = c, N.id = c.uid, C.scheduler = () => Qn(N), vt(c, !0), C.onTrack = c.rtc ? (O) => Kt(c.rtc, O) : void 0, C.onTrigger = c.rtg ? (O) => Kt(c.rtg, O) : void 0, _();
  }, U = (c, u, g) => {
    u.component = c;
    const b = c.vnode.props;
    c.vnode = u, c.next = null, pc(c, u.props, b, g), Cc(c, u.children, g), st(), po(c), ot();
  }, Le = (c, u, g, b, v, y, T, S, C = !1) => {
    const _ = c && c.children, N = c ? c.shapeFlag : 0, O = u.children, { patchFlag: I, shapeFlag: D } = u;
    if (I > 0) {
      if (I & 128) {
        Vt(
          _,
          O,
          g,
          b,
          v,
          y,
          T,
          S,
          C
        );
        return;
      } else if (I & 256) {
        os(
          _,
          O,
          g,
          b,
          v,
          y,
          T,
          S,
          C
        );
        return;
      }
    }
    D & 8 ? (N & 16 && Bt(_, v, y), O !== _ && d(g, O)) : N & 16 ? D & 16 ? Vt(
      _,
      O,
      g,
      b,
      v,
      y,
      T,
      S,
      C
    ) : Bt(_, v, y, !0) : (N & 8 && d(g, ""), D & 16 && P(
      O,
      g,
      b,
      v,
      y,
      T,
      S,
      C
    ));
  }, os = (c, u, g, b, v, y, T, S, C) => {
    c = c || Ft, u = u || Ft;
    const _ = c.length, N = u.length, O = Math.min(_, N);
    let I;
    for (I = 0; I < O; I++) {
      const D = u[I] = C ? dt(u[I]) : Pe(u[I]);
      M(
        c[I],
        D,
        g,
        null,
        v,
        y,
        T,
        S,
        C
      );
    }
    _ > N ? Bt(
      c,
      v,
      y,
      !0,
      !1,
      O
    ) : P(
      u,
      g,
      b,
      v,
      y,
      T,
      S,
      C,
      O
    );
  }, Vt = (c, u, g, b, v, y, T, S, C) => {
    let _ = 0;
    const N = u.length;
    let O = c.length - 1, I = N - 1;
    for (; _ <= O && _ <= I; ) {
      const D = c[_], W = u[_] = C ? dt(u[_]) : Pe(u[_]);
      if (xt(D, W))
        M(
          D,
          W,
          g,
          null,
          v,
          y,
          T,
          S,
          C
        );
      else
        break;
      _++;
    }
    for (; _ <= O && _ <= I; ) {
      const D = c[O], W = u[I] = C ? dt(u[I]) : Pe(u[I]);
      if (xt(D, W))
        M(
          D,
          W,
          g,
          null,
          v,
          y,
          T,
          S,
          C
        );
      else
        break;
      O--, I--;
    }
    if (_ > O) {
      if (_ <= I) {
        const D = I + 1, W = D < N ? u[D].el : b;
        for (; _ <= I; )
          M(
            null,
            u[_] = C ? dt(u[_]) : Pe(u[_]),
            g,
            W,
            v,
            y,
            T,
            S,
            C
          ), _++;
      }
    } else if (_ > I)
      for (; _ <= O; )
        it(c[_], v, y, !0), _++;
    else {
      const D = _, W = _, ne = /* @__PURE__ */ new Map();
      for (_ = W; _ <= I; _++) {
        const we = u[_] = C ? dt(u[_]) : Pe(u[_]);
        we.key != null && (ne.has(we.key) && x(
          "Duplicate keys found during update:",
          JSON.stringify(we.key),
          "Make sure keys are unique."
        ), ne.set(we.key, _));
      }
      let Q, Te = 0;
      const me = I - W + 1;
      let Re = !1, Oe = 0;
      const Wt = new Array(me);
      for (_ = 0; _ < me; _++) Wt[_] = 0;
      for (_ = D; _ <= O; _++) {
        const we = c[_];
        if (Te >= me) {
          it(we, v, y, !0);
          continue;
        }
        let je;
        if (we.key != null)
          je = ne.get(we.key);
        else
          for (Q = W; Q <= I; Q++)
            if (Wt[Q - W] === 0 && xt(we, u[Q])) {
              je = Q;
              break;
            }
        je === void 0 ? it(we, v, y, !0) : (Wt[je - W] = _ + 1, je >= Oe ? Oe = je : Re = !0, M(
          we,
          u[je],
          g,
          null,
          v,
          y,
          T,
          S,
          C
        ), Te++);
      }
      const io = Re ? Ec(Wt) : Ft;
      for (Q = io.length - 1, _ = me - 1; _ >= 0; _--) {
        const we = W + _, je = u[we], lo = we + 1 < N ? u[we + 1].el : b;
        Wt[_] === 0 ? M(
          null,
          je,
          g,
          lo,
          v,
          y,
          T,
          S,
          C
        ) : Re && (Q < 0 || _ !== io[Q] ? Rt(je, g, lo, 2) : Q--);
      }
    }
  }, Rt = (c, u, g, b, v = null) => {
    const { el: y, type: T, transition: S, children: C, shapeFlag: _ } = c;
    if (_ & 6) {
      Rt(c.component.subTree, u, g, b);
      return;
    }
    if (_ & 128) {
      c.suspense.move(u, g, b);
      return;
    }
    if (_ & 64) {
      T.move(c, u, g, Ut);
      return;
    }
    if (T === ye) {
      s(y, u, g);
      for (let O = 0; O < C.length; O++)
        Rt(C[O], u, g, b);
      s(c.anchor, u, g);
      return;
    }
    if (T === In) {
      z(c, u, g);
      return;
    }
    if (b !== 2 && _ & 1 && S)
      if (b === 0)
        S.beforeEnter(y), s(y, u, g), $e(() => S.enter(y), v);
      else {
        const { leave: O, delayLeave: I, afterLeave: D } = S, W = () => s(y, u, g), ne = () => {
          O(y, () => {
            W(), D && D();
          });
        };
        I ? I(y, W, ne) : ne();
      }
    else
      s(y, u, g);
  }, it = (c, u, g, b = !1, v = !1) => {
    const {
      type: y,
      props: T,
      ref: S,
      children: C,
      dynamicChildren: _,
      shapeFlag: N,
      patchFlag: O,
      dirs: I,
      cacheIndex: D
    } = c;
    if (O === -2 && (v = !1), S != null && $s(S, null, g, c, !0), D != null && (u.renderCache[D] = void 0), N & 256) {
      u.ctx.deactivate(c);
      return;
    }
    const W = N & 1 && I, ne = !jt(c);
    let Q;
    if (ne && (Q = T && T.onVnodeBeforeUnmount) && He(Q, u, c), N & 6)
      bi(c.component, g, b);
    else {
      if (N & 128) {
        c.suspense.unmount(g, b);
        return;
      }
      W && mt(c, null, u, "beforeUnmount"), N & 64 ? c.type.remove(
        c,
        u,
        g,
        Ut,
        b
      ) : _ && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !_.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (y !== ye || O > 0 && O & 64) ? Bt(
        _,
        u,
        g,
        !1,
        !0
      ) : (y === ye && O & 384 || !v && N & 16) && Bt(C, u, g), b && rs(c);
    }
    (ne && (Q = T && T.onVnodeUnmounted) || W) && $e(() => {
      Q && He(Q, u, c), W && mt(c, null, u, "unmounted");
    }, g);
  }, rs = (c) => {
    const { type: u, el: g, anchor: b, transition: v } = c;
    if (u === ye) {
      c.patchFlag > 0 && c.patchFlag & 2048 && v && !v.persisted ? c.children.forEach((T) => {
        T.type === ae ? o(T.el) : rs(T);
      }) : yi(g, b);
      return;
    }
    if (u === In) {
      $(c);
      return;
    }
    const y = () => {
      o(g), v && !v.persisted && v.afterLeave && v.afterLeave();
    };
    if (c.shapeFlag & 1 && v && !v.persisted) {
      const { leave: T, delayLeave: S } = v, C = () => T(g, y);
      S ? S(c.el, y, C) : C();
    } else
      y();
  }, yi = (c, u) => {
    let g;
    for (; c !== u; )
      g = h(c), o(c), c = g;
    o(u);
  }, bi = (c, u, g) => {
    c.type.__hmrId && Tl(c);
    const { bum: b, scope: v, job: y, subTree: T, um: S, m: C, a: _ } = c;
    Co(C), Co(_), b && Kt(b), v.stop(), y && (y.flags |= 8, it(T, c, u, g)), S && $e(S, u), $e(() => {
      c.isUnmounted = !0;
    }, u), u && u.pendingBranch && !u.isUnmounted && c.asyncDep && !c.asyncResolved && c.suspenseId === u.pendingId && (u.deps--, u.deps === 0 && u.resolve()), Rl(c);
  }, Bt = (c, u, g, b = !1, v = !1, y = 0) => {
    for (let T = y; T < c.length; T++)
      it(c[T], u, g, b, v);
  }, wn = (c) => {
    if (c.shapeFlag & 6)
      return wn(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const u = h(c.anchor || c.el), g = u && u[Ll];
    return g ? h(g) : u;
  };
  let is = !1;
  const so = (c, u, g) => {
    c == null ? u._vnode && it(u._vnode, null, null, !0) : M(
      u._vnode || null,
      c,
      u,
      null,
      null,
      null,
      g
    ), u._vnode = c, is || (is = !0, po(), wr(), is = !1);
  }, Ut = {
    p: M,
    um: it,
    m: Rt,
    r: rs,
    mt: _e,
    mc: P,
    pc: Le,
    pbc: ee,
    n: wn,
    o: e
  };
  let oo, ro;
  return {
    render: so,
    hydrate: oo,
    createApp: ac(so, oo)
  };
}
function gs({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function vt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function $c(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Ps(e, t, n = !1) {
  const s = e.children, o = t.children;
  if (R(s) && R(o))
    for (let r = 0; r < s.length; r++) {
      const i = s[r];
      let l = o[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = o[r] = dt(o[r]), l.el = i.el), !n && l.patchFlag !== -2 && Ps(i, l)), l.type === bn && (l.el = i.el), l.type === ae && !l.el && (l.el = i.el);
    }
}
function Ec(e) {
  const t = e.slice(), n = [0];
  let s, o, r, i, l;
  const a = e.length;
  for (s = 0; s < a; s++) {
    const p = e[s];
    if (p !== 0) {
      if (o = n[n.length - 1], e[o] < p) {
        t[s] = o, n.push(s);
        continue;
      }
      for (r = 0, i = n.length - 1; r < i; )
        l = r + i >> 1, e[n[l]] < p ? r = l + 1 : i = l;
      p < e[n[r]] && (r > 0 && (t[s] = n[r - 1]), n[r] = s);
    }
  }
  for (r = n.length, i = n[r - 1]; r-- > 0; )
    n[r] = i, i = t[i];
  return n;
}
function ei(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : ei(t);
}
function Co(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Ac = Symbol.for("v-scx"), Ic = () => {
  {
    const e = An(Ac);
    return e || x(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function tn(e, t, n) {
  return F(t) || x(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), ti(e, t, n);
}
function ti(e, t, n = Y) {
  const { immediate: s, deep: o, flush: r, once: i } = n;
  t || (s !== void 0 && x(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && x(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && x(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = ce({}, n);
  l.onWarn = x;
  const a = t && s || !t && r !== "post";
  let p;
  if (un) {
    if (r === "sync") {
      const m = Ic();
      p = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!a) {
      const m = () => {
      };
      return m.stop = be, m.resume = be, m.pause = be, m;
    }
  }
  const d = he;
  l.call = (m, E, M) => De(m, d, E, M);
  let f = !1;
  r === "post" ? l.scheduler = (m) => {
    $e(m, d && d.suspense);
  } : r !== "sync" && (f = !0, l.scheduler = (m, E) => {
    E ? m() : Qn(m);
  }), l.augmentJob = (m) => {
    t && (m.flags |= 4), f && (m.flags |= 2, d && (m.id = d.uid, m.i = d));
  };
  const h = hl(e, t, l);
  return un && (p ? p.push(h) : a && h()), h;
}
function Mc(e, t, n) {
  const s = this.proxy, o = ie(e) ? e.includes(".") ? ni(s, e) : () => s[e] : e.bind(s, s);
  let r;
  F(t) ? r = t : (r = t.handler, n = t);
  const i = _n(this), l = ti(o, r.bind(s), n);
  return i(), l;
}
function ni(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let o = 0; o < n.length && s; o++)
      s = s[n[o]];
    return s;
  };
}
const Rc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ne(t)}Modifiers`] || e[`${Ze(t)}Modifiers`];
function Pc(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || Y;
  {
    const {
      emitsOptions: d,
      propsOptions: [f]
    } = e;
    if (d)
      if (!(t in d))
        (!f || !(_t(Ne(t)) in f)) && x(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${_t(Ne(t))}" prop.`
        );
      else {
        const h = d[t];
        F(h) && (h(...n) || x(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let o = n;
  const r = t.startsWith("update:"), i = r && Rc(s, t.slice(7));
  i && (i.trim && (o = n.map((d) => ie(d) ? d.trim() : d)), i.number && (o = n.map(Ti))), Fl(e, t, o);
  {
    const d = t.toLowerCase();
    d !== t && s[_t(d)] && x(
      `Event "${d}" is emitted in component ${ss(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Ze(
        t
      )}" instead of "${t}".`
    );
  }
  let l, a = s[l = _t(t)] || // also try camelCase event handler (#2249)
  s[l = _t(Ne(t))];
  !a && r && (a = s[l = _t(Ze(t))]), a && De(
    a,
    e,
    6,
    o
  );
  const p = s[l + "Once"];
  if (p) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, De(
      p,
      e,
      6,
      o
    );
  }
}
function si(e, t, n = !1) {
  const s = t.emitsCache, o = s.get(e);
  if (o !== void 0)
    return o;
  const r = e.emits;
  let i = {}, l = !1;
  if (!F(e)) {
    const a = (p) => {
      const d = si(p, t, !0);
      d && (l = !0, ce(i, d));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !r && !l ? (X(e) && s.set(e, null), null) : (R(r) ? r.forEach((a) => i[a] = null) : ce(i, r), X(e) && s.set(e, i), i);
}
function ts(e, t) {
  return !e || !pn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), q(e, t[0].toLowerCase() + t.slice(1)) || q(e, Ze(t)) || q(e, t));
}
let Ns = !1;
function Bn() {
  Ns = !0;
}
function ms(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: o,
    propsOptions: [r],
    slots: i,
    attrs: l,
    emit: a,
    render: p,
    renderCache: d,
    props: f,
    data: h,
    setupState: m,
    ctx: E,
    inheritAttrs: M
  } = e, L = Hn(e);
  let H, V;
  Ns = !1;
  try {
    if (n.shapeFlag & 4) {
      const $ = o || s, B = at.NODE_ENV !== "production" && m.__isScriptSetup ? new Proxy($, {
        get(ue, re, P) {
          return x(
            `Property '${String(
              re
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(ue, re, P);
        }
      }) : $;
      H = Pe(
        p.call(
          B,
          $,
          d,
          at.NODE_ENV !== "production" ? Ue(f) : f,
          m,
          h,
          E
        )
      ), V = l;
    } else {
      const $ = t;
      at.NODE_ENV !== "production" && l === f && Bn(), H = Pe(
        $.length > 1 ? $(
          at.NODE_ENV !== "production" ? Ue(f) : f,
          at.NODE_ENV !== "production" ? {
            get attrs() {
              return Bn(), Ue(l);
            },
            slots: i,
            emit: a
          } : { attrs: l, slots: i, emit: a }
        ) : $(
          at.NODE_ENV !== "production" ? Ue(f) : f,
          null
        )
      ), V = t.props ? l : Nc(l);
    }
  } catch ($) {
    nn.length = 0, mn($, e, 1), H = oe(ae);
  }
  let j = H, z;
  if (H.patchFlag > 0 && H.patchFlag & 2048 && ([j, z] = oi(H)), V && M !== !1) {
    const $ = Object.keys(V), { shapeFlag: B } = j;
    if ($.length) {
      if (B & 7)
        r && $.some(Pn) && (V = Fc(
          V,
          r
        )), j = qe(j, V, !1, !0);
      else if (!Ns && j.type !== ae) {
        const ue = Object.keys(l), re = [], P = [];
        for (let G = 0, ee = ue.length; G < ee; G++) {
          const w = ue[G];
          pn(w) ? Pn(w) || re.push(w[2].toLowerCase() + w.slice(3)) : P.push(w);
        }
        P.length && x(
          `Extraneous non-props attributes (${P.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
        ), re.length && x(
          `Extraneous non-emits event listeners (${re.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (So(j) || x(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), j = qe(j, null, !1, !0), j.dirs = j.dirs ? j.dirs.concat(n.dirs) : n.dirs), n.transition && (So(j) || x(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), cn(j, n.transition)), z ? z(j) : H = j, Hn(L), H;
}
const oi = (e) => {
  const t = e.children, n = e.dynamicChildren, s = to(t, !1);
  if (s) {
    if (s.patchFlag > 0 && s.patchFlag & 2048)
      return oi(s);
  } else return [e, void 0];
  const o = t.indexOf(s), r = n ? n.indexOf(s) : -1, i = (l) => {
    t[o] = l, n && (r > -1 ? n[r] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [Pe(s), i];
};
function to(e, t = !0) {
  let n;
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (It(o)) {
      if (o.type !== ae || o.children === "v-if") {
        if (n)
          return;
        if (n = o, t && n.patchFlag > 0 && n.patchFlag & 2048)
          return to(n.children);
      }
    } else
      return;
  }
  return n;
}
const Nc = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || pn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Fc = (e, t) => {
  const n = {};
  for (const s in e)
    (!Pn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
}, So = (e) => e.shapeFlag & 7 || e.type === ae;
function Dc(e, t, n) {
  const { props: s, children: o, component: r } = e, { props: i, children: l, patchFlag: a } = t, p = r.emitsOptions;
  if ((o || l) && We || t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return s ? To(s, i, p) : !!i;
    if (a & 8) {
      const d = t.dynamicProps;
      for (let f = 0; f < d.length; f++) {
        const h = d[f];
        if (i[h] !== s[h] && !ts(p, h))
          return !0;
      }
    }
  } else
    return (o || l) && (!l || !l.$stable) ? !0 : s === i ? !1 : s ? i ? To(s, i, p) : !0 : !!i;
  return !1;
}
function To(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < s.length; o++) {
    const r = s[o];
    if (t[r] !== e[r] && !ts(n, r))
      return !0;
  }
  return !1;
}
function Lc({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const ri = (e) => e.__isSuspense;
function jc(e, t) {
  t && t.pendingBranch ? R(e) ? t.effects.push(...e) : t.effects.push(e) : _r(e);
}
const ye = Symbol.for("v-fgt"), bn = Symbol.for("v-txt"), ae = Symbol.for("v-cmt"), In = Symbol.for("v-stc"), nn = [];
let Ae = null;
function te(e = !1) {
  nn.push(Ae = e ? null : []);
}
function Hc() {
  nn.pop(), Ae = nn[nn.length - 1] || null;
}
let an = 1;
function Oo(e) {
  an += e, e < 0 && Ae && (Ae.hasOnce = !0);
}
function ii(e) {
  return e.dynamicChildren = an > 0 ? Ae || Ft : null, Hc(), an > 0 && Ae && Ae.push(e), e;
}
function le(e, t, n, s, o, r) {
  return ii(
    Z(
      e,
      t,
      n,
      s,
      o,
      r,
      !0
    )
  );
}
function fn(e, t, n, s, o) {
  return ii(
    oe(
      e,
      t,
      n,
      s,
      o,
      !0
    )
  );
}
function It(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function xt(e, t) {
  if (t.shapeFlag & 6 && e.component) {
    const n = En.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const kc = (...e) => Vc(
  ...e
), li = ({ key: e }) => e ?? null, Mn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ie(e) || fe(e) || F(e) ? { i: de, r: e, k: t, f: !!n } : e : null);
function Z(e, t = null, n = null, s = 0, o = null, r = e === ye ? 0 : 1, i = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && li(t),
    ref: t && Mn(t),
    scopeId: $r,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: s,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: de
  };
  return l ? (no(a, n), r & 128 && e.normalize(a)) : n && (a.shapeFlag |= ie(n) ? 8 : 16), a.key !== a.key && x("VNode created with invalid key (NaN). VNode type:", a.type), an > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Ae && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Ae.push(a), a;
}
const oe = kc;
function Vc(e, t = null, n = null, s = 0, o = null, r = !1) {
  if ((!e || e === Ql) && (e || x(`Invalid vnode type when creating vnode: ${e}.`), e = ae), It(e)) {
    const l = qe(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && no(l, n), an > 0 && !r && Ae && (l.shapeFlag & 6 ? Ae[Ae.indexOf(e)] = l : Ae.push(l)), l.patchFlag = -2, l;
  }
  if (pi(e) && (e = e.__vccOpts), t) {
    t = Bc(t);
    let { class: l, style: a } = t;
    l && !ie(l) && (t.class = gn(l)), X(a) && (Fn(a) && !R(a) && (a = ce({}, a)), t.style = zn(a));
  }
  const i = ie(e) ? 1 : ri(e) ? 128 : Ar(e) ? 64 : X(e) ? 4 : F(e) ? 2 : 0;
  return i & 4 && Fn(e) && (e = k(e), x(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), Z(
    e,
    t,
    n,
    s,
    o,
    i,
    r,
    !0
  );
}
function Bc(e) {
  return e ? Fn(e) || Gr(e) ? ce({}, e) : e : null;
}
function qe(e, t, n = !1, s = !1) {
  const { props: o, ref: r, patchFlag: i, children: l, transition: a } = e, p = t ? Wc(o || {}, t) : o, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: p,
    key: p && li(p),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? R(r) ? r.concat(Mn(t)) : [r, Mn(t)] : Mn(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: i === -1 && R(l) ? l.map(ci) : l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== ye ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: a,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && qe(e.ssContent),
    ssFallback: e.ssFallback && qe(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && s && cn(
    d,
    a.clone(d)
  ), d;
}
function ci(e) {
  const t = qe(e);
  return R(e.children) && (t.children = e.children.map(ci)), t;
}
function Uc(e = " ", t = 0) {
  return oe(bn, null, e, t);
}
function Et(e = "", t = !1) {
  return t ? (te(), fn(ae, null, e)) : oe(ae, null, e);
}
function Pe(e) {
  return e == null || typeof e == "boolean" ? oe(ae) : R(e) ? oe(
    ye,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : It(e) ? dt(e) : oe(bn, null, String(e));
}
function dt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : qe(e);
}
function no(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (R(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), no(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !Gr(t) ? t._ctx = de : o === 3 && de && (de.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else F(t) ? (t = { default: t, _ctx: de }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [Uc(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Wc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const o in s)
      if (o === "class")
        t.class !== s.class && (t.class = gn([t.class, s.class]));
      else if (o === "style")
        t.style = zn([t.style, s.style]);
      else if (pn(o)) {
        const r = t[o], i = s[o];
        i && r !== i && !(R(r) && r.includes(i)) && (t[o] = r ? [].concat(r, i) : i);
      } else o !== "" && (t[o] = s[o]);
  }
  return t;
}
function He(e, t, n, s = null) {
  De(e, t, 7, [
    n,
    s
  ]);
}
const Kc = Wr();
let qc = 0;
function Gc(e, t, n) {
  const s = e.type, o = (t ? t.appContext : e.appContext) || Kc, r = {
    uid: qc++,
    vnode: e,
    type: s,
    parent: t,
    appContext: o,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new ki(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(o.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Jr(s, o),
    emitsOptions: si(s, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Y,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: Y,
    data: Y,
    props: Y,
    attrs: Y,
    slots: Y,
    refs: Y,
    setupState: Y,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return r.ctx = Zl(r), r.root = t ? t.root : r, r.emit = Pc.bind(null, r), e.ce && e.ce(r), r;
}
let he = null;
const ai = () => he || de;
let Un, Fs;
{
  const e = hn(), t = (n, s) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(s), (r) => {
      o.length > 1 ? o.forEach((i) => i(r)) : o[0](r);
    };
  };
  Un = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => he = n
  ), Fs = t(
    "__VUE_SSR_SETTERS__",
    (n) => un = n
  );
}
const _n = (e) => {
  const t = he;
  return Un(e), e.scope.on(), () => {
    e.scope.off(), Un(t);
  };
}, $o = () => {
  he && he.scope.off(), Un(null);
}, zc = /* @__PURE__ */ tt("slot,component");
function Ds(e, { isNativeTag: t }) {
  (zc(e) || t(e)) && x(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function fi(e) {
  return e.vnode.shapeFlag & 4;
}
let un = !1;
function Jc(e, t = !1, n = !1) {
  t && Fs(t);
  const { props: s, children: o } = e.vnode, r = fi(e);
  uc(e, s, r, t), xc(e, o, n);
  const i = r ? Yc(e, t) : void 0;
  return t && Fs(!1), i;
}
function Yc(e, t) {
  var n;
  const s = e.type;
  {
    if (s.name && Ds(s.name, e.appContext.config), s.components) {
      const r = Object.keys(s.components);
      for (let i = 0; i < r.length; i++)
        Ds(r[i], e.appContext.config);
    }
    if (s.directives) {
      const r = Object.keys(s.directives);
      for (let i = 0; i < r.length; i++)
        Er(r[i]);
    }
    s.compilerOptions && Xc() && x(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Br), ec(e);
  const { setup: o } = s;
  if (o) {
    st();
    const r = e.setupContext = o.length > 1 ? ea(e) : null, i = _n(e), l = kt(
      o,
      e,
      0,
      [
        Ue(e.props),
        r
      ]
    ), a = ks(l);
    if (ot(), i(), (a || e.sp) && !jt(e) && Fr(e), a) {
      if (l.then($o, $o), t)
        return l.then((p) => {
          Eo(e, p, t);
        }).catch((p) => {
          mn(p, e, 0);
        });
      if (e.asyncDep = l, !e.suspense) {
        const p = (n = s.name) != null ? n : "Anonymous";
        x(
          `Component <${p}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Eo(e, l, t);
  } else
    ui(e, t);
}
function Eo(e, t, n) {
  F(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : X(t) ? (It(t) && x(
    "setup() should not return VNodes directly - return a render function instead."
  ), e.devtoolsRawSetupState = t, e.setupState = mr(t), tc(e)) : t !== void 0 && x(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), ui(e, n);
}
let Ls;
const Xc = () => !Ls;
function ui(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && Ls && !s.render) {
      const o = s.template || Zs(e).template;
      if (o) {
        ze(e, "compile");
        const { isCustomElement: r, compilerOptions: i } = e.appContext.config, { delimiters: l, compilerOptions: a } = s, p = ce(
          ce(
            {
              isCustomElement: r,
              delimiters: l
            },
            i
          ),
          a
        );
        s.render = Ls(o, p), Je(e, "compile");
      }
    }
    e.render = s.render || be;
  }
  {
    const o = _n(e);
    st();
    try {
      sc(e);
    } finally {
      ot(), o();
    }
  }
  !s.render && e.render === be && !t && (s.template ? x(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : x("Component is missing template or render function: ", s));
}
const Qc = {
  get(e, t) {
    return Bn(), pe(e, "get", ""), e[t];
  },
  set() {
    return x("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return x("setupContext.attrs is readonly."), !1;
  }
};
function Zc(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return pe(e, "get", "$slots"), t[n];
    }
  });
}
function ea(e) {
  const t = (n) => {
    if (e.exposed && x("expose() should be called only once per setup()."), n != null) {
      let s = typeof n;
      s === "object" && (R(n) ? s = "array" : fe(n) && (s = "ref")), s !== "object" && x(
        `expose() should be passed a plain object, received ${s}.`
      );
    }
    e.exposed = n || {};
  };
  {
    let n, s;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, Qc));
      },
      get slots() {
        return s || (s = Zc(e));
      },
      get emit() {
        return (o, ...r) => e.emit(o, ...r);
      },
      expose: t
    });
  }
}
function ns(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(mr(ll(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in $t)
        return $t[n](e);
    },
    has(t, n) {
      return n in t || n in $t;
    }
  })) : e.proxy;
}
const ta = /(?:^|[-_])(\w)/g, na = (e) => e.replace(ta, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function di(e, t = !0) {
  return F(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function ss(e, t, n = !1) {
  let s = di(t);
  if (!s && t.__file) {
    const o = t.__file.match(/([^/\\]+)\.\w+$/);
    o && (s = o[1]);
  }
  if (!s && e && e.parent) {
    const o = (r) => {
      for (const i in r)
        if (r[i] === t)
          return i;
    };
    s = o(
      e.components || e.parent.type.components
    ) || o(e.appContext.components);
  }
  return s ? na(s) : n ? "App" : "Anonymous";
}
function pi(e) {
  return F(e) && "__vccOpts" in e;
}
const ht = (e, t) => {
  const n = dl(e, t, un);
  {
    const s = ai();
    s && s.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function sa(e, t, n) {
  const s = arguments.length;
  return s === 2 ? X(t) && !R(t) ? It(t) ? oe(e, null, [t]) : oe(e, t) : oe(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && It(n) && (n = [n]), oe(e, t, n));
}
function oa() {
  if (typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, s = { style: "color:#eb2f96" }, o = {
    __vue_custom_formatter: !0,
    header(f) {
      return X(f) ? f.__isVue ? ["div", e, "VueInstance"] : fe(f) ? [
        "div",
        {},
        ["span", e, d(f)],
        "<",
        // avoid debugger accessing value affecting behavior
        l("_value" in f ? f._value : f),
        ">"
      ] : Tt(f) ? [
        "div",
        {},
        ["span", e, Se(f) ? "ShallowReactive" : "Reactive"],
        "<",
        l(f),
        `>${et(f) ? " (readonly)" : ""}`
      ] : et(f) ? [
        "div",
        {},
        ["span", e, Se(f) ? "ShallowReadonly" : "Readonly"],
        "<",
        l(f),
        ">"
      ] : null : null;
    },
    hasBody(f) {
      return f && f.__isVue;
    },
    body(f) {
      if (f && f.__isVue)
        return [
          "div",
          {},
          ...r(f.$)
        ];
    }
  };
  function r(f) {
    const h = [];
    f.type.props && f.props && h.push(i("props", k(f.props))), f.setupState !== Y && h.push(i("setup", f.setupState)), f.data !== Y && h.push(i("data", k(f.data)));
    const m = a(f, "computed");
    m && h.push(i("computed", m));
    const E = a(f, "inject");
    return E && h.push(i("injected", E)), h.push([
      "div",
      {},
      [
        "span",
        {
          style: s.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: f }]
    ]), h;
  }
  function i(f, h) {
    return h = ce({}, h), Object.keys(h).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        f
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(h).map((m) => [
          "div",
          {},
          ["span", s, m + ": "],
          l(h[m], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(f, h = !0) {
    return typeof f == "number" ? ["span", t, f] : typeof f == "string" ? ["span", n, JSON.stringify(f)] : typeof f == "boolean" ? ["span", s, f] : X(f) ? ["object", { object: h ? k(f) : f }] : ["span", n, String(f)];
  }
  function a(f, h) {
    const m = f.type;
    if (F(m))
      return;
    const E = {};
    for (const M in f.ctx)
      p(m, M, h) && (E[M] = f.ctx[M]);
    return E;
  }
  function p(f, h, m) {
    const E = f[m];
    if (R(E) && E.includes(h) || X(E) && h in E || f.extends && p(f.extends, h, m) || f.mixins && f.mixins.some((M) => p(M, h, m)))
      return !0;
  }
  function d(f) {
    return Se(f) ? "ShallowRef" : f.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
const Ao = "3.5.12", Qe = x;
let js;
const Io = typeof window < "u" && window.trustedTypes;
if (Io)
  try {
    js = /* @__PURE__ */ Io.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    Qe(`Error creating trusted types policy: ${e}`);
  }
const hi = js ? (e) => js.createHTML(e) : (e) => e, ra = "http://www.w3.org/2000/svg", ia = "http://www.w3.org/1998/Math/MathML", Ye = typeof document < "u" ? document : null, Mo = Ye && /* @__PURE__ */ Ye.createElement("template"), la = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const o = t === "svg" ? Ye.createElementNS(ra, e) : t === "mathml" ? Ye.createElementNS(ia, e) : n ? Ye.createElement(e, { is: n }) : Ye.createElement(e);
    return e === "select" && s && s.multiple != null && o.setAttribute("multiple", s.multiple), o;
  },
  createText: (e) => Ye.createTextNode(e),
  createComment: (e) => Ye.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ye.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, o, r) {
    const i = n ? n.previousSibling : t.lastChild;
    if (o && (o === r || o.nextSibling))
      for (; t.insertBefore(o.cloneNode(!0), n), !(o === r || !(o = o.nextSibling)); )
        ;
    else {
      Mo.innerHTML = hi(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Mo.content;
      if (s === "svg" || s === "mathml") {
        const a = l.firstChild;
        for (; a.firstChild; )
          l.appendChild(a.firstChild);
        l.removeChild(a);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      i ? i.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, lt = "transition", zt = "animation", dn = Symbol("_vtc"), gi = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
}, ca = /* @__PURE__ */ ce(
  {},
  Ir,
  gi
), aa = (e) => (e.displayName = "Transition", e.props = ca, e), fa = /* @__PURE__ */ aa(
  (e, { slots: t }) => sa(kl, ua(e), t)
), yt = (e, t = []) => {
  R(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Ro = (e) => e ? R(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function ua(e) {
  const t = {};
  for (const w in e)
    w in gi || (t[w] = e[w]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: s,
    duration: o,
    enterFromClass: r = `${n}-enter-from`,
    enterActiveClass: i = `${n}-enter-active`,
    enterToClass: l = `${n}-enter-to`,
    appearFromClass: a = r,
    appearActiveClass: p = i,
    appearToClass: d = l,
    leaveFromClass: f = `${n}-leave-from`,
    leaveActiveClass: h = `${n}-leave-active`,
    leaveToClass: m = `${n}-leave-to`
  } = e, E = da(o), M = E && E[0], L = E && E[1], {
    onBeforeEnter: H,
    onEnter: V,
    onEnterCancelled: j,
    onLeave: z,
    onLeaveCancelled: $,
    onBeforeAppear: B = H,
    onAppear: ue = V,
    onAppearCancelled: re = j
  } = t, P = (w, A, se) => {
    bt(w, A ? d : l), bt(w, A ? p : i), se && se();
  }, G = (w, A) => {
    w._isLeaving = !1, bt(w, f), bt(w, m), bt(w, h), A && A();
  }, ee = (w) => (A, se) => {
    const _e = w ? ue : V, ge = () => P(A, w, se);
    yt(_e, [A, ge]), Po(() => {
      bt(A, w ? a : r), ct(A, w ? d : l), Ro(_e) || No(A, s, M, ge);
    });
  };
  return ce(t, {
    onBeforeEnter(w) {
      yt(H, [w]), ct(w, r), ct(w, i);
    },
    onBeforeAppear(w) {
      yt(B, [w]), ct(w, a), ct(w, p);
    },
    onEnter: ee(!1),
    onAppear: ee(!0),
    onLeave(w, A) {
      w._isLeaving = !0;
      const se = () => G(w, A);
      ct(w, f), ct(w, h), ga(), Po(() => {
        w._isLeaving && (bt(w, f), ct(w, m), Ro(z) || No(w, s, L, se));
      }), yt(z, [w, se]);
    },
    onEnterCancelled(w) {
      P(w, !1), yt(j, [w]);
    },
    onAppearCancelled(w) {
      P(w, !0), yt(re, [w]);
    },
    onLeaveCancelled(w) {
      G(w), yt($, [w]);
    }
  });
}
function da(e) {
  if (e == null)
    return null;
  if (X(e))
    return [vs(e.enter), vs(e.leave)];
  {
    const t = vs(e);
    return [t, t];
  }
}
function vs(e) {
  const t = Oi(e);
  return bl(t, "<transition> explicit duration"), t;
}
function ct(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[dn] || (e[dn] = /* @__PURE__ */ new Set())).add(t);
}
function bt(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[dn];
  n && (n.delete(t), n.size || (e[dn] = void 0));
}
function Po(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let pa = 0;
function No(e, t, n, s) {
  const o = e._endId = ++pa, r = () => {
    o === e._endId && s();
  };
  if (n != null)
    return setTimeout(r, n);
  const { type: i, timeout: l, propCount: a } = ha(e, t);
  if (!i)
    return s();
  const p = i + "end";
  let d = 0;
  const f = () => {
    e.removeEventListener(p, h), r();
  }, h = (m) => {
    m.target === e && ++d >= a && f();
  };
  setTimeout(() => {
    d < a && f();
  }, l + 1), e.addEventListener(p, h);
}
function ha(e, t) {
  const n = window.getComputedStyle(e), s = (E) => (n[E] || "").split(", "), o = s(`${lt}Delay`), r = s(`${lt}Duration`), i = Fo(o, r), l = s(`${zt}Delay`), a = s(`${zt}Duration`), p = Fo(l, a);
  let d = null, f = 0, h = 0;
  t === lt ? i > 0 && (d = lt, f = i, h = r.length) : t === zt ? p > 0 && (d = zt, f = p, h = a.length) : (f = Math.max(i, p), d = f > 0 ? i > p ? lt : zt : null, h = d ? d === lt ? r.length : a.length : 0);
  const m = d === lt && /\b(transform|all)(,|$)/.test(
    s(`${lt}Property`).toString()
  );
  return {
    type: d,
    timeout: f,
    propCount: h,
    hasTransform: m
  };
}
function Fo(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => Do(n) + Do(e[s])));
}
function Do(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function ga() {
  return document.body.offsetHeight;
}
function ma(e, t, n) {
  const s = e[dn];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Wn = Symbol("_vod"), mi = Symbol("_vsh"), vi = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[Wn] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Jt(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: s }) {
    !t != !n && (s ? t ? (s.beforeEnter(e), Jt(e, !0), s.enter(e)) : s.leave(e, () => {
      Jt(e, !1);
    }) : Jt(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Jt(e, t);
  }
};
vi.name = "show";
function Jt(e, t) {
  e.style.display = t ? e[Wn] : "none", e[mi] = !t;
}
const va = Symbol("CSS_VAR_TEXT"), ya = /(^|;)\s*display\s*:/;
function ba(e, t, n) {
  const s = e.style, o = ie(n);
  let r = !1;
  if (n && !o) {
    if (t)
      if (ie(t))
        for (const i of t.split(";")) {
          const l = i.slice(0, i.indexOf(":")).trim();
          n[l] == null && Rn(s, l, "");
        }
      else
        for (const i in t)
          n[i] == null && Rn(s, i, "");
    for (const i in n)
      i === "display" && (r = !0), Rn(s, i, n[i]);
  } else if (o) {
    if (t !== n) {
      const i = s[va];
      i && (n += ";" + i), s.cssText = n, r = ya.test(n);
    }
  } else t && e.removeAttribute("style");
  Wn in e && (e[Wn] = r ? s.display : "", e[mi] && (s.display = "none"));
}
const _a = /[^\\];\s*$/, Lo = /\s*!important$/;
function Rn(e, t, n) {
  if (R(n))
    n.forEach((s) => Rn(e, t, s));
  else if (n == null && (n = ""), _a.test(n) && Qe(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = wa(e, t);
    Lo.test(n) ? e.setProperty(
      Ze(s),
      n.replace(Lo, ""),
      "important"
    ) : e[s] = n;
  }
}
const jo = ["Webkit", "Moz", "ms"], ys = {};
function wa(e, t) {
  const n = ys[t];
  if (n)
    return n;
  let s = Ne(t);
  if (s !== "filter" && s in e)
    return ys[t] = s;
  s = Gn(s);
  for (let o = 0; o < jo.length; o++) {
    const r = jo[o] + s;
    if (r in e)
      return ys[t] = r;
  }
  return t;
}
const Ho = "http://www.w3.org/1999/xlink";
function ko(e, t, n, s, o, r = ji(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ho, t.slice(6, t.length)) : e.setAttributeNS(Ho, t, n) : n == null || r && !Yo(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : nt(n) ? String(n) : n
  );
}
function Vo(e, t, n, s, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? hi(n) : n);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const l = r === "OPTION" ? e.getAttribute("value") || "" : e.value, a = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== a || !("_value" in e)) && (e.value = a), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let i = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = Yo(n) : n == null && l === "string" ? (n = "", i = !0) : l === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch (l) {
    i || Qe(
      `Failed setting prop "${t}" on <${r.toLowerCase()}>: value ${n} is invalid.`,
      l
    );
  }
  i && e.removeAttribute(o || t);
}
function xa(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Ca(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Bo = Symbol("_vei");
function Sa(e, t, n, s, o = null) {
  const r = e[Bo] || (e[Bo] = {}), i = r[t];
  if (s && i)
    i.value = Wo(s, t);
  else {
    const [l, a] = Ta(t);
    if (s) {
      const p = r[t] = Ea(
        Wo(s, t),
        o
      );
      xa(e, l, p, a);
    } else i && (Ca(e, l, i, a), r[t] = void 0);
  }
}
const Uo = /(?:Once|Passive|Capture)$/;
function Ta(e) {
  let t;
  if (Uo.test(e)) {
    t = {};
    let s;
    for (; s = e.match(Uo); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ze(e.slice(2)), t];
}
let bs = 0;
const Oa = /* @__PURE__ */ Promise.resolve(), $a = () => bs || (Oa.then(() => bs = 0), bs = Date.now());
function Ea(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    De(
      Aa(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = $a(), n;
}
function Wo(e, t) {
  return F(e) || R(e) ? e : (Qe(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), be);
}
function Aa(e, t) {
  if (R(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (s) => (o) => !o._stopped && s && s(o)
    );
  } else
    return t;
}
const Ko = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Ia = (e, t, n, s, o, r) => {
  const i = o === "svg";
  t === "class" ? ma(e, s, i) : t === "style" ? ba(e, n, s) : pn(t) ? Pn(t) || Sa(e, t, n, s, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Ma(e, t, s, i)) ? (Vo(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ko(e, t, s, i, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !ie(s)) ? Vo(e, Ne(t), s, r, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), ko(e, t, s, i));
};
function Ma(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Ko(t) && F(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return Ko(t) && ie(n) ? !1 : t in e;
}
const Ra = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Pa = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), s = t.join(".");
  return n[s] || (n[s] = (o) => {
    if (!("key" in o))
      return;
    const r = Ze(o.key);
    if (t.some(
      (i) => i === r || Ra[i] === r
    ))
      return e(o);
  });
}, Na = /* @__PURE__ */ ce({ patchProp: Ia }, la);
let qo;
function Fa() {
  return qo || (qo = Tc(Na));
}
const Da = (...e) => {
  const t = Fa().createApp(...e);
  ja(t), Ha(t);
  const { mount: n } = t;
  return t.mount = (s) => {
    const o = ka(s);
    if (!o) return;
    const r = t._component;
    !F(r) && !r.render && !r.template && (r.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const i = n(o, !1, La(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), i;
  }, t;
};
function La(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function ja(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => Ni(t) || Fi(t) || Di(t),
    writable: !1
  });
}
function Ha(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        Qe(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, s = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return Qe(s), n;
      },
      set() {
        Qe(s);
      }
    });
  }
}
function ka(e) {
  if (ie(e)) {
    const t = document.querySelector(e);
    return t || Qe(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && Qe(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
function Va() {
  oa();
}
Va();
const Ba = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
};
function Ua(e, t) {
  return te(), le("svg", Ba, t[0] || (t[0] = [
    Z("path", { d: "m2 21 21-9L2 3v7l15 2-15 2z" }, null, -1)
  ]));
}
const Wa = { render: Ua }, Mt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, Ka = { class: "--fc-composer-container" }, qa = ["value", "placeholder"], Ga = ["value", "placeholder"], za = {
  __name: "ChatComposer",
  props: {
    message: {
      type: String,
      required: ""
    },
    options: {
      type: Object,
      default: () => {
      }
    },
    longMessage: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:message", "submit"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = Me(), r = ht(
      () => {
        var p;
        return ((p = n.options) == null ? void 0 : p.placeholder) || "Type a message";
      }
    ), i = () => {
      s("submit");
    }, l = () => {
      s("submit");
    }, a = (p) => {
      const d = p.target.value;
      s("update:message", d);
    };
    return tn(
      () => n.message,
      () => {
        const p = o.value;
        p.style.height = "40px", p.style.height = p.scrollHeight + "px";
      }
    ), (p, d) => (te(), le("div", Ka, [
      e.longMessage ? (te(), le("textarea", {
        key: 0,
        value: e.message,
        class: "--fc-composer-input",
        placeholder: r.value,
        ref_key: "inputRef",
        ref: o,
        onInput: a
      }, null, 40, qa)) : (te(), le("input", {
        key: 1,
        value: e.message,
        ref_key: "inputRef",
        ref: o,
        class: "--fc-composer-input",
        placeholder: r.value,
        onInput: a,
        onKeydown: Pa(l, ["enter"])
      }, null, 40, Ga)),
      Z("div", null, [
        Z("button", {
          class: "--fc-composer-submit-button",
          onClick: i
        }, [
          oe(Dt(Wa), { class: "--fc-icon" })
        ])
      ])
    ]));
  }
}, Ja = /* @__PURE__ */ Mt(za, [["__scopeId", "data-v-c689b31b"]]), Ya = {
  __name: "ChatConversation",
  setup(e, { expose: t }) {
    const n = Me(), s = () => {
      const r = n.value;
      r.scrollTop, r.scrollHeight, r.clientHeight;
    };
    return t({
      scrollToBottom: () => {
        n.value.scrollTo({
          top: n.value.scrollHeight,
          behavior: "smooth"
        });
      }
    }), (r, i) => (te(), le("div", {
      class: "--fc-conversation-container",
      ref_key: "conversationMessagesRef",
      ref: n,
      onScroll: s
    }, [
      i[0] || (i[0] = Z("div", { class: "--fc-conversation-padding" }, null, -1)),
      kr(r.$slots, "default", {}, void 0)
    ], 544));
  }
}, Xa = /* @__PURE__ */ Mt(Ya, [["__scopeId", "data-v-068bd6b8"]]), Qa = { class: "--fc-message-container" }, Za = {
  key: 0,
  class: "--fc-message-user"
}, ef = { class: "--fc-message-avatar" }, tf = ["src"], nf = { class: "--fc-message-content-container" }, sf = { class: "--fc-message-content-inner" }, of = { class: "--fc-message-text" }, rf = {
  key: 0,
  class: "--fc-message-option-list"
}, lf = ["onClick"], cf = {
  __name: "ChatMessage",
  props: {
    message: {
      type: Object,
      required: !0
    },
    options: {
      type: Object,
      default: () => {
      }
    }
  },
  emits: ["select-option"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = (r, i) => {
      const l = n.message;
      s("select-option", { message: l, option: r, optionIndex: i });
    };
    return (r, i) => {
      var l, a, p, d;
      return te(), le("div", {
        class: gn({
          "--fc-message-agent-user": e.message.position == "right",
          "--fc-message-host-user": e.message.position == "left"
        })
      }, [
        Z("div", Qa, [
          e.message.position == "left" ? (te(), le("div", Za, [
            Z("div", ef, [
              (a = (l = e.options) == null ? void 0 : l.hostUser) != null && a.avatarUrl ? (te(), le("img", {
                key: 0,
                src: (d = (p = e.options) == null ? void 0 : p.hostUser) == null ? void 0 : d.avatarUrl
              }, null, 8, tf)) : Et("", !0)
            ])
          ])) : Et("", !0),
          Z("div", nf, [
            Z("div", sf, [
              Z("div", of, sn(e.message.content), 1),
              e.message.options ? (te(), le("div", rf, [
                (te(!0), le(ye, null, Hr(e.message.options, (f, h) => (te(), le("div", {
                  key: h,
                  class: "--fc-message-option-item",
                  onClick: (m) => o(f, h)
                }, sn(f), 9, lf))), 128))
              ])) : Et("", !0)
            ])
          ])
        ])
      ], 2);
    };
  }
}, af = /* @__PURE__ */ Mt(cf, [["__scopeId", "data-v-171a0757"]]), ff = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
};
function uf(e, t) {
  return te(), le("svg", ff, t[0] || (t[0] = [
    Z("path", { d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }, null, -1)
  ]));
}
const df = { render: uf }, pf = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
};
function hf(e, t) {
  return te(), le("svg", pf, t[0] || (t[0] = [
    Z("path", { d: "M12.5 8c-2.65 0-5.05 1-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8" }, null, -1)
  ]));
}
const gf = { render: hf }, mf = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
};
function vf(e, t) {
  return te(), le("svg", mf, t[0] || (t[0] = [
    Z("path", { d: "M19 13H5v-2h14z" }, null, -1)
  ]));
}
const yf = { render: vf }, bf = { class: "--fc-header-container" }, _f = { class: "--fc-header-user" }, wf = { class: "--fc-user-avatar" }, xf = ["src"], Cf = { class: "--fc-user-name" }, Sf = { class: "--fc-header-buttons" }, Tf = { class: "--fc-toggle-button" }, Of = { class: "--fc-close-button" }, $f = {
  __name: "ChatHeader",
  props: {
    options: {
      type: Object,
      default: () => {
      }
    }
  },
  emits: ["click-reset-button"],
  setup(e, { emit: t }) {
    const n = t;
    return (s, o) => {
      var r, i, l, a, p, d;
      return te(), le("div", bf, [
        Z("div", _f, [
          Z("div", wf, [
            (i = (r = e.options) == null ? void 0 : r.hostUser) != null && i.avatarUrl ? (te(), le("img", {
              key: 0,
              src: (a = (l = e.options) == null ? void 0 : l.hostUser) == null ? void 0 : a.avatarUrl
            }, null, 8, xf)) : Et("", !0)
          ]),
          Z("div", Cf, sn((d = (p = e.options) == null ? void 0 : p.hostUser) == null ? void 0 : d.name), 1)
        ]),
        Z("div", Sf, [
          Z("button", {
            class: "--fc-reset-button",
            onClick: o[0] || (o[0] = (f) => n("click-reset-button"))
          }, [
            oe(Dt(gf), { class: "--fc-icon" })
          ]),
          Z("button", Tf, [
            oe(Dt(yf), { class: "--fc-icon" })
          ]),
          Z("button", Of, [
            oe(Dt(df), { class: "--fc-icon" })
          ])
        ])
      ]);
    };
  }
}, Ef = /* @__PURE__ */ Mt($f, [["__scopeId", "data-v-871c9cfd"]]), Af = {
  key: 0,
  class: "--fc-modal-backdrop"
}, If = {
  __name: "TheModal",
  props: {
    open: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    return (t, n) => e.open ? (te(), le("div", Af, [
      kr(t.$slots, "default", {}, void 0)
    ])) : Et("", !0);
  }
}, Mf = /* @__PURE__ */ Mt(If, [["__scopeId", "data-v-4baeafde"]]), Rf = {
  __name: "ChatResetConfirmModal",
  props: {
    open: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:open", "confirmed"],
  setup(e, { emit: t }) {
    const n = t, s = () => {
      n("confirmed");
    }, o = () => {
      n("update:open", !1);
    };
    return (r, i) => (te(), fn(Mf, { open: e.open }, {
      default: Zn(() => [
        Z("div", { class: "--fc-modal-container" }, [
          i[0] || (i[0] = Z("div", { class: "--fc-modal-title" }, " Are you sure to restart the chat? ", -1)),
          Z("div", { class: "--fc-modal-actions" }, [
            Z("button", {
              class: "--fc-negative-button",
              onClick: s
            }, " Yes "),
            Z("button", {
              class: "--fc-default-button",
              onClick: o
            }, " No ")
          ])
        ])
      ]),
      _: 1
    }, 8, ["open"]));
  }
}, Pf = (e = 16) => {
  let t = "";
  const n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", s = n.length;
  let o = 0;
  for (; o < e; )
    t += n.charAt(Math.floor(Math.random() * s)), o += 1;
  return t;
}, Nf = { class: "--fc-body" }, Ff = {
  key: 0,
  class: "skip-container"
}, Df = {
  __name: "ChatWindow",
  props: {
    scripts: {
      type: Array,
      default: () => []
    },
    options: {
      type: Object,
      default: () => ({
        //
      })
    }
  },
  emits: ["finished"],
  setup(e, { expose: t, emit: n }) {
    const s = e, o = n, r = ht(() => {
      var w, A;
      return (A = (w = s.options) == null ? void 0 : w.styles) == null ? void 0 : A.chatWindow;
    }), i = Me({
      open: !1
    }), l = () => ({
      id: null,
      position: "left",
      type: "text",
      content: "",
      options: null
    }), a = (w) => ({
      id: Pf(),
      type: "text",
      skippable: !1,
      skipText: "Skip",
      longAnswer: !1,
      content: "",
      ...w
    }), p = ht(() => s.scripts.map(a)), d = ht(() => ({
      scripts: p.value,
      currentScript: m.value,
      currentScriptIndex: L.value,
      latestUserMessage: E.value,
      conversationMessages: f.value
    })), f = Me([]), h = Me(""), m = Me(a()), E = Me(l()), M = Me(l()), L = ht(() => p.value.map((A) => A.id).indexOf(m.value.id)), H = Me(), V = (w) => (w == null ? void 0 : w.type) == "question", j = ht(() => {
      let w = null;
      const A = p.value[L.value + 1];
      return A && (w = A.id), w;
    }), z = (w) => {
      f.value.push(w), setTimeout(() => H.value.scrollToBottom(), 100), w.position == "left" ? M.value = l() : V(m.value) ? M.value = w : M.value = l();
    }, $ = (w) => {
      setTimeout(() => {
        let A;
        w ? A = p.value.find((se) => se.id == w) : A = p.value.find(() => !0), A && (m.value = A, z({
          position: "left",
          content: A.content,
          options: A.options,
          type: A.type
        }), B());
      }, 300);
    }, B = async (w = !0) => {
      if (V(m.value) && !M.value.content && w)
        return !1;
      let A = m.value.next;
      if (typeof A == "function" && (A = A(d.value, M.value.content), A instanceof Promise))
        try {
          A = await A;
        } catch (se) {
          se && z({
            position: "left",
            type: "text",
            ...se
          });
          return;
        }
      if (A || (A = j.value), A) {
        $(A);
        return;
      }
      if (!A && V(m.value) == !1) {
        o("finished", d.value);
        return;
      }
      if (!A && V(m.value) && M.value) {
        o("finished", d.value);
        return;
      }
    };
    Xs(() => $());
    const ue = async () => {
      h.value.trim() && (z({
        position: "right",
        content: h.value,
        type: "text"
      }), h.value = "", await B());
    }, re = async ({ option: w }) => {
      z({
        position: "right",
        content: w,
        type: "text"
      }), await B();
    }, P = async () => {
      await B(!1);
    }, G = () => {
      i.value.open = !0;
    }, ee = () => {
      i.value.open = !1, f.value = [], h.value = "", m.value = a(), E.value = l(), M.value = l(), $();
    };
    return t({
      addConversationMessages: z
    }), (w, A) => (te(), le("div", {
      class: "--fc-window",
      style: zn(r.value)
    }, [
      oe(Ef, {
        options: e.options,
        onClickResetButton: G
      }, null, 8, ["options"]),
      Z("div", Nf, [
        oe(Xa, {
          ref_key: "chatConversationRef",
          ref: H,
          options: e.options
        }, {
          default: Zn(() => [
            (te(!0), le(ye, null, Hr(f.value, (se, _e) => (te(), fn(af, {
              key: _e,
              message: se,
              options: e.options,
              onSelectOption: re
            }, null, 8, ["message", "options"]))), 128)),
            m.value.skippable ? (te(), le("div", Ff, [
              Z("button", { onClick: P }, sn(m.value.skipText), 1)
            ])) : Et("", !0)
          ]),
          _: 1
        }, 8, ["options"]),
        oe(Ja, {
          message: h.value,
          "onUpdate:message": A[0] || (A[0] = (se) => h.value = se),
          options: e.options,
          "long-message": m.value.longAnswer,
          onSubmit: ue
        }, null, 8, ["message", "options", "long-message"]),
        oe(Rf, {
          open: i.value.open,
          "onUpdate:open": A[1] || (A[1] = (se) => i.value.open = se),
          onConfirmed: ee
        }, null, 8, ["open"])
      ])
    ], 4));
  }
}, Lf = /* @__PURE__ */ Mt(Df, [["__scopeId", "data-v-8e75a131"]]), jf = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
};
function Hf(e, t) {
  return te(), le("svg", jf, t[0] || (t[0] = [
    Z("path", { d: "M15 4v7H5.17L4 12.17V4zm1-2H3a1 1 0 0 0-1 1v14l4-4h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m5 4h-2v9H6v2a1 1 0 0 0 1 1h11l4 4V7a1 1 0 0 0-1-1" }, null, -1)
  ]));
}
const kf = { render: Hf }, Vf = {
  __name: "ChatApp",
  props: {
    scripts: {
      type: Array,
      default: () => []
    },
    options: {
      type: Object,
      default: () => ({
        //
      })
    }
  },
  emits: ["finished"],
  setup(e, { expose: t, emit: n }) {
    const s = e, o = n, r = Me(null), i = Me(null), l = Me(!1), a = ht(
      () => {
        var L, H;
        return ((H = (L = s.options) == null ? void 0 : L.embedded) == null ? void 0 : H.type) != "background";
      }
    ), p = (L) => {
      r.value = L;
    }, d = (L) => {
      o("finished", L), typeof r.value == "function" && r.value(L);
    }, f = () => {
      l.value = !l.value;
    }, h = () => {
      l.value = !0;
    }, m = () => {
      l.value = !1;
    }, E = () => {
      f();
    }, M = () => {
      var j, z, $, B;
      const L = document.querySelector(":root"), H = (z = (j = s.options) == null ? void 0 : j.styles) == null ? void 0 : z.primaryColor, V = (B = ($ = s.options) == null ? void 0 : $.styles) == null ? void 0 : B.primaryLightColor;
      H && (L == null || L.style.setProperty("--fc-primary-color", H)), V && (L == null || L.style.setProperty("--fc-primary-light-color", V));
    };
    return tn(
      () => s.options,
      () => M(),
      {
        immediate: !0
      }
    ), t({
      onFinished: p,
      toggleChatWindow: f,
      showChatWindow: h,
      hideChatWindow: m
    }), (L, H) => {
      var V, j, z, $;
      return te(), le("div", {
        class: gn(["--fc-application", {
          "--fc-dark-theme": ((j = (V = e.options) == null ? void 0 : V.styles) == null ? void 0 : j.theme) === "dark",
          "--fc-light-theme": (($ = (z = e.options) == null ? void 0 : z.styles) == null ? void 0 : $.theme) === "light"
        }])
      }, [
        oe(fa, {
          "enter-active-class": "--fc-transition --fc-duration-150 --fc-ease-in-out",
          "enter-from-class": "--fc-opacity-0 --fc-translate-y-4",
          "enter-to-class": "--fc-opacity-100 --fc-translate-y-0",
          "leave-active-class": "--fc-transition --fc-duration-150 --fc-ease-in-out",
          "leave-from-class": "--fc-opacity-100 --fc-translate-y-0",
          "leave-to-class": "--fc-opacity-0 --fc-translate-y-4"
        }, {
          default: Zn(() => [
            Dl(oe(Lf, {
              ref_key: "chatWindowRef",
              ref: i,
              options: e.options,
              scripts: e.scripts,
              onFinished: d
            }, null, 8, ["options", "scripts"]), [
              [vi, l.value]
            ])
          ]),
          _: 1
        }),
        a.value ? (te(), le("div", {
          key: 0,
          class: "--fc-bubble-container",
          onClick: E
        }, [
          oe(Dt(kf), { class: "--fc-bubble-icon" })
        ])) : Et("", !0)
      ], 2);
    };
  }
}, Bf = /* @__PURE__ */ Mt(Vf, [["__scopeId", "data-v-61561971"]]);
window.createFormChat = (e, t) => Da(Bf, t).mount(e);
