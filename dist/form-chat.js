/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function lt(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const X = Object.freeze({}), Lt = Object.freeze([]), xe = () => {
}, Ei = () => !1, yn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), jn = (e) => e.startsWith("onUpdate:"), ae = Object.assign, Bs = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Mi = Object.prototype.hasOwnProperty, W = (e, t) => Mi.call(e, t), P = Array.isArray, Mt = (e) => Qn(e) === "[object Map]", er = (e) => Qn(e) === "[object Set]", k = (e) => typeof e == "function", le = (e) => typeof e == "string", ct = (e) => typeof e == "symbol", Z = (e) => e !== null && typeof e == "object", Us = (e) => (Z(e) || k(e)) && k(e.then) && k(e.catch), tr = Object.prototype.toString, Qn = (e) => tr.call(e), Ws = (e) => Qn(e).slice(8, -1), nr = (e) => Qn(e) === "[object Object]", Ks = (e) => le(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, nn = /* @__PURE__ */ lt(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ai = /* @__PURE__ */ lt(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Xn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Ii = /-(\w)/g, Oe = Xn(
  (e) => e.replace(Ii, (t, n) => n ? n.toUpperCase() : "")
), Ri = /\B([A-Z])/g, rt = Xn(
  (e) => e.replace(Ri, "-$1").toLowerCase()
), Nt = Xn((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ot = Xn(
  (e) => e ? `on${Nt(e)}` : ""
), wt = (e, t) => !Object.is(e, t), Jt = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Ln = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, Pi = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Ni = (e) => {
  const t = le(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let po;
const bn = () => po || (po = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Zn(e) {
  if (P(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], o = le(s) ? ji(s) : Zn(s);
      if (o)
        for (const r in o)
          t[r] = o[r];
    }
    return t;
  } else if (le(e) || Z(e))
    return e;
}
const Fi = /;(?![^(]*\))/g, Di = /:([^]+)/, ki = /\/\*[^]*?\*\//g;
function ji(e) {
  const t = {};
  return e.replace(ki, "").split(Fi).forEach((n) => {
    if (n) {
      const s = n.split(Di);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function _n(e) {
  let t = "";
  if (le(e))
    t = e;
  else if (P(e))
    for (let n = 0; n < e.length; n++) {
      const s = _n(e[n]);
      s && (t += s + " ");
    }
  else if (Z(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Li = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Hi = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Vi = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", Bi = /* @__PURE__ */ lt(Li), Ui = /* @__PURE__ */ lt(Hi), Wi = /* @__PURE__ */ lt(Vi), Ki = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", qi = /* @__PURE__ */ lt(Ki);
function sr(e) {
  return !!e || e === "";
}
const or = (e) => !!(e && e.__v_isRef === !0), cn = (e) => le(e) ? e : e == null ? "" : P(e) || Z(e) && (e.toString === tr || !k(e.toString)) ? or(e) ? cn(e.value) : JSON.stringify(e, rr, 2) : String(e), rr = (e, t) => or(t) ? rr(e, t.value) : Mt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, o], r) => (n[fs(s, r) + " =>"] = o, n),
    {}
  )
} : er(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => fs(n))
} : ct(t) ? fs(t) : Z(t) && !P(t) && !nr(t) ? String(t) : t, fs = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    ct(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
var Gi = { NODE_ENV: '"production"' };
function Le(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Ie;
class Ji {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Ie, !t && Ie && (this.index = (Ie.scopes || (Ie.scopes = [])).push(
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
      const n = Ie;
      try {
        return Ie = this, t();
      } finally {
        Ie = n;
      }
    } else
      Le("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    Ie = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    Ie = this.parent;
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
function Yi() {
  return Ie;
}
let Q;
const us = /* @__PURE__ */ new WeakSet();
class ir {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ie && Ie.active && Ie.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, us.has(this) && (us.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || cr(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, ho(this), ar(this);
    const t = Q, n = je;
    Q = this, je = !0;
    try {
      return this.fn();
    } finally {
      Q !== this && Le(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), fr(this), Q = t, je = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Js(t);
      this.deps = this.depsTail = void 0, ho(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? us.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Cs(this) && this.run();
  }
  get dirty() {
    return Cs(this);
  }
}
let lr = 0, sn, on;
function cr(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = on, on = e;
    return;
  }
  e.next = sn, sn = e;
}
function qs() {
  lr++;
}
function Gs() {
  if (--lr > 0)
    return;
  if (on) {
    let t = on;
    for (on = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; sn; ) {
    let t = sn;
    for (sn = void 0; t; ) {
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
function ar(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function fr(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const o = s.prevDep;
    s.version === -1 ? (s === n && (n = o), Js(s), zi(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = o;
  }
  e.deps = t, e.depsTail = n;
}
function Cs(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (ur(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function ur(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === an))
    return;
  e.globalVersion = an;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !Cs(e)) {
    e.flags &= -3;
    return;
  }
  const n = Q, s = je;
  Q = e, je = !0;
  try {
    ar(e);
    const o = e.fn(e._value);
    (t.version === 0 || wt(o, e._value)) && (e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    Q = n, je = s, fr(e), e.flags &= -3;
  }
}
function Js(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: o } = e;
  if (s && (s.nextSub = o, e.prevSub = void 0), o && (o.prevSub = s, e.nextSub = void 0), n.subsHead === e && (n.subsHead = o), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      Js(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function zi(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let je = !0;
const dr = [];
function at() {
  dr.push(je), je = !1;
}
function ft() {
  const e = dr.pop();
  je = e === void 0 ? !0 : e;
}
function ho(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = Q;
    Q = void 0;
    try {
      t();
    } finally {
      Q = n;
    }
  }
}
let an = 0;
class Qi {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ys {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.subsHead = void 0;
  }
  track(t) {
    if (!Q || !je || Q === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Q)
      n = this.activeLink = new Qi(Q, this), Q.deps ? (n.prevDep = Q.depsTail, Q.depsTail.nextDep = n, Q.depsTail = n) : Q.deps = Q.depsTail = n, pr(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = Q.depsTail, n.nextDep = void 0, Q.depsTail.nextDep = n, Q.depsTail = n, Q.deps === n && (Q.deps = s);
    }
    return Q.onTrack && Q.onTrack(
      ae(
        {
          effect: Q
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, an++, this.notify(t);
  }
  notify(t) {
    qs();
    try {
      if (Gi.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            ae(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Gs();
    }
  }
}
function pr(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        pr(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const Hn = /* @__PURE__ */ new WeakMap(), At = Symbol(
  "Object iterate"
), Ss = Symbol(
  "Map keys iterate"
), fn = Symbol(
  "Array iterate"
);
function me(e, t, n) {
  if (je && Q) {
    let s = Hn.get(e);
    s || Hn.set(e, s = /* @__PURE__ */ new Map());
    let o = s.get(n);
    o || (s.set(n, o = new Ys()), o.map = s, o.key = n), o.track({
      target: e,
      type: t,
      key: n
    });
  }
}
function qe(e, t, n, s, o, r) {
  const i = Hn.get(e);
  if (!i) {
    an++;
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
  if (qs(), t === "clear")
    i.forEach(l);
  else {
    const a = P(e), p = a && Ks(n);
    if (a && n === "length") {
      const u = Number(s);
      i.forEach((f, h) => {
        (h === "length" || h === fn || !ct(h) && h >= u) && l(f);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && l(i.get(n)), p && l(i.get(fn)), t) {
        case "add":
          a ? p && l(i.get("length")) : (l(i.get(At)), Mt(e) && l(i.get(Ss)));
          break;
        case "delete":
          a || (l(i.get(At)), Mt(e) && l(i.get(Ss)));
          break;
        case "set":
          Mt(e) && l(i.get(At));
          break;
      }
  }
  Gs();
}
function Xi(e, t) {
  const n = Hn.get(e);
  return n && n.get(t);
}
function kt(e) {
  const t = H(e);
  return t === e ? t : (me(t, "iterate", fn), $e(e) ? t : t.map(_e));
}
function es(e) {
  return me(e = H(e), "iterate", fn), e;
}
const Zi = {
  __proto__: null,
  [Symbol.iterator]() {
    return ds(this, Symbol.iterator, _e);
  },
  concat(...e) {
    return kt(this).concat(
      ...e.map((t) => P(t) ? kt(t) : t)
    );
  },
  entries() {
    return ds(this, "entries", (e) => (e[1] = _e(e[1]), e));
  },
  every(e, t) {
    return Qe(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Qe(this, "filter", e, t, (n) => n.map(_e), arguments);
  },
  find(e, t) {
    return Qe(this, "find", e, t, _e, arguments);
  },
  findIndex(e, t) {
    return Qe(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Qe(this, "findLast", e, t, _e, arguments);
  },
  findLastIndex(e, t) {
    return Qe(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Qe(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return ps(this, "includes", e);
  },
  indexOf(...e) {
    return ps(this, "indexOf", e);
  },
  join(e) {
    return kt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return ps(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Qe(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Yt(this, "pop");
  },
  push(...e) {
    return Yt(this, "push", e);
  },
  reduce(e, ...t) {
    return go(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return go(this, "reduceRight", e, t);
  },
  shift() {
    return Yt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Qe(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Yt(this, "splice", e);
  },
  toReversed() {
    return kt(this).toReversed();
  },
  toSorted(e) {
    return kt(this).toSorted(e);
  },
  toSpliced(...e) {
    return kt(this).toSpliced(...e);
  },
  unshift(...e) {
    return Yt(this, "unshift", e);
  },
  values() {
    return ds(this, "values", _e);
  }
};
function ds(e, t, n) {
  const s = es(e), o = s[t]();
  return s !== e && !$e(e) && (o._next = o.next, o.next = () => {
    const r = o._next();
    return r.value && (r.value = n(r.value)), r;
  }), o;
}
const el = Array.prototype;
function Qe(e, t, n, s, o, r) {
  const i = es(e), l = i !== e && !$e(e), a = i[t];
  if (a !== el[t]) {
    const f = a.apply(e, r);
    return l ? _e(f) : f;
  }
  let p = n;
  i !== e && (l ? p = function(f, h) {
    return n.call(this, _e(f), h, e);
  } : n.length > 2 && (p = function(f, h) {
    return n.call(this, f, h, e);
  }));
  const u = a.call(i, p, s);
  return l && o ? o(u) : u;
}
function go(e, t, n, s) {
  const o = es(e);
  let r = n;
  return o !== e && ($e(e) ? n.length > 3 && (r = function(i, l, a) {
    return n.call(this, i, l, a, e);
  }) : r = function(i, l, a) {
    return n.call(this, i, _e(l), a, e);
  }), o[t](r, ...s);
}
function ps(e, t, n) {
  const s = H(e);
  me(s, "iterate", fn);
  const o = s[t](...n);
  return (o === -1 || o === !1) && un(n[0]) ? (n[0] = H(n[0]), s[t](...n)) : o;
}
function Yt(e, t, n = []) {
  at(), qs();
  const s = H(e)[t].apply(e, n);
  return Gs(), ft(), s;
}
const tl = /* @__PURE__ */ lt("__proto__,__v_isRef,__isVue"), hr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ct)
);
function nl(e) {
  ct(e) || (e = String(e));
  const t = H(this);
  return me(t, "has", e), t.hasOwnProperty(e);
}
class gr {
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
      return s === (o ? r ? wr : _r : r ? br : yr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const i = P(t);
    if (!o) {
      let a;
      if (i && (a = Zi[n]))
        return a;
      if (n === "hasOwnProperty")
        return nl;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      de(t) ? t : s
    );
    return (ct(n) ? hr.has(n) : tl(n)) || (o || me(t, "get", n), r) ? l : de(l) ? i && Ks(n) ? l : l.value : Z(l) ? o ? xr(l) : zs(l) : l;
  }
}
class mr extends gr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, o) {
    let r = t[n];
    if (!this._isShallow) {
      const a = it(r);
      if (!$e(s) && !it(s) && (r = H(r), s = H(s)), !P(t) && de(r) && !de(s))
        return a ? !1 : (r.value = s, !0);
    }
    const i = P(t) && Ks(n) ? Number(n) < t.length : W(t, n), l = Reflect.set(
      t,
      n,
      s,
      de(t) ? t : o
    );
    return t === H(o) && (i ? wt(s, r) && qe(t, "set", n, s, r) : qe(t, "add", n, s)), l;
  }
  deleteProperty(t, n) {
    const s = W(t, n), o = t[n], r = Reflect.deleteProperty(t, n);
    return r && s && qe(t, "delete", n, void 0, o), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!ct(n) || !hr.has(n)) && me(t, "has", n), s;
  }
  ownKeys(t) {
    return me(
      t,
      "iterate",
      P(t) ? "length" : At
    ), Reflect.ownKeys(t);
  }
}
class vr extends gr {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return Le(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return Le(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const sl = /* @__PURE__ */ new mr(), ol = /* @__PURE__ */ new vr(), rl = /* @__PURE__ */ new mr(!0), il = /* @__PURE__ */ new vr(!0), Ts = (e) => e, $n = (e) => Reflect.getPrototypeOf(e);
function ll(e, t, n) {
  return function(...s) {
    const o = this.__v_raw, r = H(o), i = Mt(r), l = e === "entries" || e === Symbol.iterator && i, a = e === "keys" && i, p = o[e](...s), u = n ? Ts : t ? Os : _e;
    return !t && me(
      r,
      "iterate",
      a ? Ss : At
    ), {
      // iterator protocol
      next() {
        const { value: f, done: h } = p.next();
        return h ? { value: f, done: h } : {
          value: l ? [u(f[0]), u(f[1])] : u(f),
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
function En(e) {
  return function(...t) {
    {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Le(
        `${Nt(e)} operation ${n}failed: target is readonly.`,
        H(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function cl(e, t) {
  const n = {
    get(o) {
      const r = this.__v_raw, i = H(r), l = H(o);
      e || (wt(o, l) && me(i, "get", o), me(i, "get", l));
      const { has: a } = $n(i), p = t ? Ts : e ? Os : _e;
      if (a.call(i, o))
        return p(r.get(o));
      if (a.call(i, l))
        return p(r.get(l));
      r !== i && r.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && me(H(o), "iterate", At), Reflect.get(o, "size", o);
    },
    has(o) {
      const r = this.__v_raw, i = H(r), l = H(o);
      return e || (wt(o, l) && me(i, "has", o), me(i, "has", l)), o === l ? r.has(o) : r.has(o) || r.has(l);
    },
    forEach(o, r) {
      const i = this, l = i.__v_raw, a = H(l), p = t ? Ts : e ? Os : _e;
      return !e && me(a, "iterate", At), l.forEach((u, f) => o.call(r, p(u), p(f), i));
    }
  };
  return ae(
    n,
    e ? {
      add: En("add"),
      set: En("set"),
      delete: En("delete"),
      clear: En("clear")
    } : {
      add(o) {
        !t && !$e(o) && !it(o) && (o = H(o));
        const r = H(this);
        return $n(r).has.call(r, o) || (r.add(o), qe(r, "add", o, o)), this;
      },
      set(o, r) {
        !t && !$e(r) && !it(r) && (r = H(r));
        const i = H(this), { has: l, get: a } = $n(i);
        let p = l.call(i, o);
        p ? mo(i, l, o) : (o = H(o), p = l.call(i, o));
        const u = a.call(i, o);
        return i.set(o, r), p ? wt(r, u) && qe(i, "set", o, r, u) : qe(i, "add", o, r), this;
      },
      delete(o) {
        const r = H(this), { has: i, get: l } = $n(r);
        let a = i.call(r, o);
        a ? mo(r, i, o) : (o = H(o), a = i.call(r, o));
        const p = l ? l.call(r, o) : void 0, u = r.delete(o);
        return a && qe(r, "delete", o, void 0, p), u;
      },
      clear() {
        const o = H(this), r = o.size !== 0, i = Mt(o) ? new Map(o) : new Set(o), l = o.clear();
        return r && qe(
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
    n[o] = ll(o, e, t);
  }), n;
}
function ts(e, t) {
  const n = cl(e, t);
  return (s, o, r) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(
    W(n, o) && o in s ? n : s,
    o,
    r
  );
}
const al = {
  get: /* @__PURE__ */ ts(!1, !1)
}, fl = {
  get: /* @__PURE__ */ ts(!1, !0)
}, ul = {
  get: /* @__PURE__ */ ts(!0, !1)
}, dl = {
  get: /* @__PURE__ */ ts(!0, !0)
};
function mo(e, t, n) {
  const s = H(n);
  if (s !== n && t.call(e, s)) {
    const o = Ws(e);
    Le(
      `Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const yr = /* @__PURE__ */ new WeakMap(), br = /* @__PURE__ */ new WeakMap(), _r = /* @__PURE__ */ new WeakMap(), wr = /* @__PURE__ */ new WeakMap();
function pl(e) {
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
function hl(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : pl(Ws(e));
}
function zs(e) {
  return it(e) ? e : ns(
    e,
    !1,
    sl,
    al,
    yr
  );
}
function gl(e) {
  return ns(
    e,
    !1,
    rl,
    fl,
    br
  );
}
function xr(e) {
  return ns(
    e,
    !0,
    ol,
    ul,
    _r
  );
}
function Je(e) {
  return ns(
    e,
    !0,
    il,
    dl,
    wr
  );
}
function ns(e, t, n, s, o) {
  if (!Z(e))
    return Le(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = o.get(e);
  if (r)
    return r;
  const i = hl(e);
  if (i === 0)
    return e;
  const l = new Proxy(
    e,
    i === 2 ? s : n
  );
  return o.set(e, l), l;
}
function It(e) {
  return it(e) ? It(e.__v_raw) : !!(e && e.__v_isReactive);
}
function it(e) {
  return !!(e && e.__v_isReadonly);
}
function $e(e) {
  return !!(e && e.__v_isShallow);
}
function un(e) {
  return e ? !!e.__v_raw : !1;
}
function H(e) {
  const t = e && e.__v_raw;
  return t ? H(t) : e;
}
function ml(e) {
  return !W(e, "__v_skip") && Object.isExtensible(e) && Ln(e, "__v_skip", !0), e;
}
const _e = (e) => Z(e) ? zs(e) : e, Os = (e) => Z(e) ? xr(e) : e;
function de(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function be(e) {
  return vl(e, !1);
}
function vl(e, t) {
  return de(e) ? e : new yl(e, t);
}
class yl {
  constructor(t, n) {
    this.dep = new Ys(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : H(t), this._value = n ? t : _e(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || $e(t) || it(t);
    t = s ? t : H(t), wt(t, n) && (this._rawValue = t, this._value = s ? t : _e(t), this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }));
  }
}
function tt(e) {
  return de(e) ? e.value : e;
}
const bl = {
  get: (e, t, n) => t === "__v_raw" ? e : tt(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t];
    return de(o) && !de(n) ? (o.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Cr(e) {
  return It(e) ? e : new Proxy(e, bl);
}
function _l(e) {
  un(e) || Le("toRefs() expects a reactive object but received a plain one.");
  const t = P(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = xl(e, n);
  return t;
}
class wl {
  constructor(t, n, s) {
    this._object = t, this._key = n, this._defaultValue = s, this.__v_isRef = !0, this._value = void 0;
  }
  get value() {
    const t = this._object[this._key];
    return this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return Xi(H(this._object), this._key);
  }
}
function xl(e, t, n) {
  const s = e[t];
  return de(s) ? s : new wl(e, t, n);
}
class Cl {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Ys(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = an - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Q !== this)
      return cr(this, !0), !0;
  }
  get value() {
    const t = this.dep.track({
      target: this,
      type: "get",
      key: "value"
    });
    return ur(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : Le("Write operation failed: computed value is readonly");
  }
}
function Sl(e, t, n = !1) {
  let s, o;
  return k(e) ? s = e : (s = e.get, o = e.set), new Cl(s, o, n);
}
const Mn = {}, Vn = /* @__PURE__ */ new WeakMap();
let $t;
function Tl(e, t = !1, n = $t) {
  if (n) {
    let s = Vn.get(n);
    s || Vn.set(n, s = []), s.push(e);
  } else t || Le(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Ol(e, t, n = X) {
  const { immediate: s, deep: o, once: r, scheduler: i, augmentJob: l, call: a } = n, p = (A) => {
    (n.onWarn || Le)(
      "Invalid watch source: ",
      A,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, u = (A) => o ? A : $e(A) || o === !1 || o === 0 ? nt(A, 1) : nt(A);
  let f, h, m, E, I = !1, ee = !1;
  if (de(e) ? (h = () => e.value, I = $e(e)) : It(e) ? (h = () => u(e), I = !0) : P(e) ? (ee = !0, I = e.some((A) => It(A) || $e(A)), h = () => e.map((A) => {
    if (de(A))
      return A.value;
    if (It(A))
      return u(A);
    if (k(A))
      return a ? a(A, 2) : A();
    p(A);
  })) : k(e) ? t ? h = a ? () => a(e, 2) : e : h = () => {
    if (m) {
      at();
      try {
        m();
      } finally {
        ft();
      }
    }
    const A = $t;
    $t = f;
    try {
      return a ? a(e, 3, [E]) : e(E);
    } finally {
      $t = A;
    }
  } : (h = xe, p(e)), t && o) {
    const A = h, K = o === !0 ? 1 / 0 : o;
    h = () => nt(A(), K);
  }
  const V = Yi(), J = () => {
    f.stop(), V && Bs(V.effects, f);
  };
  if (r && t) {
    const A = t;
    t = (...K) => {
      A(...K), J();
    };
  }
  let L = ee ? new Array(e.length).fill(Mn) : Mn;
  const ce = (A) => {
    if (!(!(f.flags & 1) || !f.dirty && !A))
      if (t) {
        const K = f.run();
        if (o || I || (ee ? K.some((fe, Y) => wt(fe, L[Y])) : wt(K, L))) {
          m && m();
          const fe = $t;
          $t = f;
          try {
            const Y = [
              K,
              // pass undefined as the old value when it's changed for the first time
              L === Mn ? void 0 : ee && L[0] === Mn ? [] : L,
              E
            ];
            a ? a(t, 3, Y) : (
              // @ts-expect-error
              t(...Y)
            ), L = K;
          } finally {
            $t = fe;
          }
        }
      } else
        f.run();
  };
  return l && l(ce), f = new ir(h), f.scheduler = i ? () => i(ce, !1) : ce, E = (A) => Tl(A, !1, f), m = f.onStop = () => {
    const A = Vn.get(f);
    if (A) {
      if (a)
        a(A, 4);
      else
        for (const K of A) K();
      Vn.delete(f);
    }
  }, f.onTrack = n.onTrack, f.onTrigger = n.onTrigger, t ? s ? ce(!0) : L = f.run() : i ? i(ce.bind(null, !0), !0) : f.run(), J.pause = f.pause.bind(f), J.resume = f.resume.bind(f), J.stop = J, J;
}
function nt(e, t = 1 / 0, n) {
  if (t <= 0 || !Z(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, de(e))
    nt(e.value, t, n);
  else if (P(e))
    for (let s = 0; s < e.length; s++)
      nt(e[s], t, n);
  else if (er(e) || Mt(e))
    e.forEach((s) => {
      nt(s, t, n);
    });
  else if (nr(e)) {
    for (const s in e)
      nt(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && nt(e[s], t, n);
  }
  return e;
}
var mt = { NODE_ENV: '"production"' };
const Rt = [];
function In(e) {
  Rt.push(e);
}
function Rn() {
  Rt.pop();
}
let hs = !1;
function x(e, ...t) {
  if (hs) return;
  hs = !0, at();
  const n = Rt.length ? Rt[Rt.length - 1].component : null, s = n && n.appContext.config.warnHandler, o = $l();
  if (s)
    Wt(
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
          ({ vnode: r }) => `at <${ls(n, r.type)}>`
        ).join(`
`),
        o
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    o.length && r.push(`
`, ...El(o)), console.warn(...r);
  }
  ft(), hs = !1;
}
function $l() {
  let e = Rt[Rt.length - 1];
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
function El(e) {
  const t = [];
  return e.forEach((n, s) => {
    t.push(...s === 0 ? [] : [`
`], ...Ml(n));
  }), t;
}
function Ml({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, o = ` at <${ls(
    e.component,
    e.type,
    s
  )}`, r = ">" + n;
  return e.props ? [o, ...Al(e.props), r] : [o + r];
}
function Al(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((s) => {
    t.push(...Sr(s, e[s]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Sr(e, t, n) {
  return le(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : de(t) ? (t = Sr(e, H(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : k(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = H(t), n ? t : [`${e}=`, t]);
}
function Il(e, t) {
  e !== void 0 && (typeof e != "number" ? x(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && x(`${t} is NaN - the duration expression might be incorrect.`));
}
const Qs = {
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
function Wt(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (o) {
    wn(o, t, n);
  }
}
function He(e, t, n, s) {
  if (k(e)) {
    const o = Wt(e, t, n, s);
    return o && Us(o) && o.catch((r) => {
      wn(r, t, n);
    }), o;
  }
  if (P(e)) {
    const o = [];
    for (let r = 0; r < e.length; r++)
      o.push(He(e[r], t, n, s));
    return o;
  } else
    x(
      `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
    );
}
function wn(e, t, n, s = !0) {
  const o = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: i } = t && t.appContext.config || X;
  if (t) {
    let l = t.parent;
    const a = t.proxy, p = Qs[n];
    for (; l; ) {
      const u = l.ec;
      if (u) {
        for (let f = 0; f < u.length; f++)
          if (u[f](e, a, p) === !1)
            return;
      }
      l = l.parent;
    }
    if (r) {
      at(), Wt(r, null, 10, [
        e,
        a,
        p
      ]), ft();
      return;
    }
  }
  Rl(e, n, o, s, i);
}
function Rl(e, t, n, s = !0, o = !1) {
  {
    const r = Qs[t];
    if (n && In(n), x(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && Rn(), s)
      throw e;
    console.error(e);
  }
}
const Te = [];
let Ke = -1;
const Ht = [];
let vt = null, jt = 0;
const Tr = /* @__PURE__ */ Promise.resolve();
let Bn = null;
const Pl = 100;
function Nl(e) {
  const t = Bn || Tr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Fl(e) {
  let t = Ke + 1, n = Te.length;
  for (; t < n; ) {
    const s = t + n >>> 1, o = Te[s], r = dn(o);
    r < e || r === e && o.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function ss(e) {
  if (!(e.flags & 1)) {
    const t = dn(e), n = Te[Te.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= dn(n) ? Te.push(e) : Te.splice(Fl(t), 0, e), e.flags |= 1, Or();
  }
}
function Or() {
  Bn || (Bn = Tr.then(Mr));
}
function $r(e) {
  P(e) ? Ht.push(...e) : vt && e.id === -1 ? vt.splice(jt + 1, 0, e) : e.flags & 1 || (Ht.push(e), e.flags |= 1), Or();
}
function vo(e, t, n = Ke + 1) {
  for (t = t || /* @__PURE__ */ new Map(); n < Te.length; n++) {
    const s = Te[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid || Xs(t, s))
        continue;
      Te.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function Er(e) {
  if (Ht.length) {
    const t = [...new Set(Ht)].sort(
      (n, s) => dn(n) - dn(s)
    );
    if (Ht.length = 0, vt) {
      vt.push(...t);
      return;
    }
    for (vt = t, e = e || /* @__PURE__ */ new Map(), jt = 0; jt < vt.length; jt++) {
      const n = vt[jt];
      Xs(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    vt = null, jt = 0;
  }
}
const dn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Mr(e) {
  e = e || /* @__PURE__ */ new Map();
  const t = (n) => Xs(e, n);
  try {
    for (Ke = 0; Ke < Te.length; Ke++) {
      const n = Te[Ke];
      if (n && !(n.flags & 8)) {
        if (mt.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), Wt(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; Ke < Te.length; Ke++) {
      const n = Te[Ke];
      n && (n.flags &= -2);
    }
    Ke = -1, Te.length = 0, Er(e), Bn = null, (Te.length || Ht.length) && Mr(e);
  }
}
function Xs(e, t) {
  const n = e.get(t) || 0;
  if (n > Pl) {
    const s = t.i, o = s && ro(s.type);
    return wn(
      `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let Ye = !1;
const Pn = /* @__PURE__ */ new Map();
bn().__VUE_HMR_RUNTIME__ = {
  createRecord: gs(Ar),
  rerender: gs(jl),
  reload: gs(Ll)
};
const Ft = /* @__PURE__ */ new Map();
function Dl(e) {
  const t = e.type.__hmrId;
  let n = Ft.get(t);
  n || (Ar(t, e.type), n = Ft.get(t)), n.instances.add(e);
}
function kl(e) {
  Ft.get(e.type.__hmrId).instances.delete(e);
}
function Ar(e, t) {
  return Ft.has(e) ? !1 : (Ft.set(e, {
    initialDef: Un(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Un(e) {
  return _i(e) ? e.__vccOpts : e;
}
function jl(e, t) {
  const n = Ft.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((s) => {
    t && (s.render = t, Un(s.type).render = t), s.renderCache = [], Ye = !0, s.update(), Ye = !1;
  }));
}
function Ll(e, t) {
  const n = Ft.get(e);
  if (!n) return;
  t = Un(t), yo(n.initialDef, t);
  const s = [...n.instances];
  for (let o = 0; o < s.length; o++) {
    const r = s[o], i = Un(r.type);
    let l = Pn.get(i);
    l || (i !== n.initialDef && yo(i, t), Pn.set(i, l = /* @__PURE__ */ new Set())), l.add(r), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (l.add(r), r.ceReload(t.styles), l.delete(r)) : r.parent ? ss(() => {
      Ye = !0, r.parent.update(), Ye = !1, l.delete(r);
    }) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), r.root.ce && r !== r.root && r.root.ce._removeChildStyle(i);
  }
  $r(() => {
    Pn.clear();
  });
}
function yo(e, t) {
  ae(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function gs(e) {
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
let Ge, Zt = [], $s = !1;
function xn(e, ...t) {
  Ge ? Ge.emit(e, ...t) : $s || Zt.push({ event: e, args: t });
}
function Ir(e, t) {
  var n, s;
  Ge = e, Ge ? (Ge.enabled = !0, Zt.forEach(({ event: o, args: r }) => Ge.emit(o, ...r)), Zt = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((s = (n = window.navigator) == null ? void 0 : n.userAgent) != null && s.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    Ir(r, t);
  }), setTimeout(() => {
    Ge || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, $s = !0, Zt = []);
  }, 3e3)) : ($s = !0, Zt = []);
}
function Hl(e, t) {
  xn("app:init", e, t, {
    Fragment: we,
    Text: Sn,
    Comment: ue,
    Static: Fn
  });
}
function Vl(e) {
  xn("app:unmount", e);
}
const Bl = /* @__PURE__ */ Zs(
  "component:added"
  /* COMPONENT_ADDED */
), Rr = /* @__PURE__ */ Zs(
  "component:updated"
  /* COMPONENT_UPDATED */
), Ul = /* @__PURE__ */ Zs(
  "component:removed"
  /* COMPONENT_REMOVED */
), Wl = (e) => {
  Ge && typeof Ge.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Ge.cleanupBuffer(e) && Ul(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Zs(e) {
  return (t) => {
    xn(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const Kl = /* @__PURE__ */ Pr(
  "perf:start"
  /* PERFORMANCE_START */
), ql = /* @__PURE__ */ Pr(
  "perf:end"
  /* PERFORMANCE_END */
);
function Pr(e) {
  return (t, n, s) => {
    xn(e, t.appContext.app, t.uid, t, n, s);
  };
}
function Gl(e, t, n) {
  xn(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let he = null, Nr = null;
function Wn(e) {
  const t = he;
  return he = e, Nr = e && e.type.__scopeId || null, t;
}
function pn(e, t = he, n) {
  if (!t || e._n)
    return e;
  const s = (...o) => {
    s._d && Io(-1);
    const r = Wn(t);
    let i;
    try {
      i = e(...o);
    } finally {
      Wn(r), s._d && Io(1);
    }
    return Rr(t), i;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function Fr(e) {
  Ai(e) && x("Do not use built-in directive ids as custom directive id: " + e);
}
function Jl(e, t) {
  if (he === null)
    return x("withDirectives can only be used inside render functions."), e;
  const n = is(he), s = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [r, i, l, a = X] = t[o];
    r && (k(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && nt(i), s.push({
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
function xt(e, t, n, s) {
  const o = e.dirs, r = t && t.dirs;
  for (let i = 0; i < o.length; i++) {
    const l = o[i];
    r && (l.oldValue = r[i].value);
    let a = l.dir[s];
    a && (at(), He(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), ft());
  }
}
const Yl = Symbol("_vte"), Dr = (e) => e.__isTeleport, yt = Symbol("_leaveCb"), An = Symbol("_enterCb");
function zl() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Kn(() => {
    e.isMounted = !0;
  }), Wr(() => {
    e.isUnmounting = !0;
  }), e;
}
const Pe = [Function, Array], kr = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Pe,
  onEnter: Pe,
  onAfterEnter: Pe,
  onEnterCancelled: Pe,
  // leave
  onBeforeLeave: Pe,
  onLeave: Pe,
  onAfterLeave: Pe,
  onLeaveCancelled: Pe,
  // appear
  onBeforeAppear: Pe,
  onAppear: Pe,
  onAfterAppear: Pe,
  onAppearCancelled: Pe
}, jr = (e) => {
  const t = e.subTree;
  return t.component ? jr(t.component) : t;
}, Ql = {
  name: "BaseTransition",
  props: kr,
  setup(e, { slots: t }) {
    const n = vi(), s = zl();
    return () => {
      const o = t.default && Vr(t.default(), !0);
      if (!o || !o.length)
        return;
      const r = Lr(o), i = H(e), { mode: l } = i;
      if (l && l !== "in-out" && l !== "out-in" && l !== "default" && x(`invalid <transition> mode: ${l}`), s.isLeaving)
        return ms(r);
      const a = bo(r);
      if (!a)
        return ms(r);
      let p = Es(
        a,
        i,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (h) => p = h
      );
      a.type !== ue && hn(a, p);
      const u = n.subTree, f = u && bo(u);
      if (f && f.type !== ue && !Et(a, f) && jr(n).type !== ue) {
        const h = Es(
          f,
          i,
          s,
          n
        );
        if (hn(f, h), l === "out-in" && a.type !== ue)
          return s.isLeaving = !0, h.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete h.afterLeave;
          }, ms(r);
        l === "in-out" && a.type !== ue && (h.delayLeave = (m, E, I) => {
          const ee = Hr(
            s,
            f
          );
          ee[String(f.key)] = f, m[yt] = () => {
            E(), m[yt] = void 0, delete p.delayedLeave;
          }, p.delayedLeave = I;
        });
      }
      return r;
    };
  }
};
function Lr(e) {
  let t = e[0];
  if (e.length > 1) {
    let n = !1;
    for (const s of e)
      if (s.type !== ue) {
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
const Xl = Ql;
function Hr(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function Es(e, t, n, s, o) {
  const {
    appear: r,
    mode: i,
    persisted: l = !1,
    onBeforeEnter: a,
    onEnter: p,
    onAfterEnter: u,
    onEnterCancelled: f,
    onBeforeLeave: h,
    onLeave: m,
    onAfterLeave: E,
    onLeaveCancelled: I,
    onBeforeAppear: ee,
    onAppear: V,
    onAfterAppear: J,
    onAppearCancelled: L
  } = t, ce = String(e.key), A = Hr(n, e), K = (F, B) => {
    F && He(
      F,
      s,
      9,
      B
    );
  }, fe = (F, B) => {
    const q = B[1];
    K(F, B), P(F) ? F.every((M) => M.length <= 1) && q() : F.length <= 1 && q();
  }, Y = {
    mode: i,
    persisted: l,
    beforeEnter(F) {
      let B = a;
      if (!n.isMounted)
        if (r)
          B = ee || a;
        else
          return;
      F[yt] && F[yt](
        !0
        /* cancelled */
      );
      const q = A[ce];
      q && Et(e, q) && q.el[yt] && q.el[yt](), K(B, [F]);
    },
    enter(F) {
      let B = p, q = u, M = f;
      if (!n.isMounted)
        if (r)
          B = V || p, q = J || u, M = L || f;
        else
          return;
      let ne = !1;
      const pe = F[An] = (ve) => {
        ne || (ne = !0, ve ? K(M, [F]) : K(q, [F]), Y.delayedLeave && Y.delayedLeave(), F[An] = void 0);
      };
      B ? fe(B, [F, pe]) : pe();
    },
    leave(F, B) {
      const q = String(e.key);
      if (F[An] && F[An](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return B();
      K(h, [F]);
      let M = !1;
      const ne = F[yt] = (pe) => {
        M || (M = !0, B(), pe ? K(I, [F]) : K(E, [F]), F[yt] = void 0, A[q] === e && delete A[q]);
      };
      A[q] = e, m ? fe(m, [F, ne]) : ne();
    },
    clone(F) {
      const B = Es(
        F,
        t,
        n,
        s,
        o
      );
      return o && o(B), B;
    }
  };
  return Y;
}
function ms(e) {
  if (Cn(e))
    return e = ze(e), e.children = null, e;
}
function bo(e) {
  if (!Cn(e))
    return Dr(e.type) && e.children ? Lr(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && k(n.default))
      return n.default();
  }
}
function hn(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, hn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Vr(e, t = !1, n) {
  let s = [], o = 0;
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    const l = n == null ? i.key : String(n) + String(i.key != null ? i.key : r);
    i.type === we ? (i.patchFlag & 128 && o++, s = s.concat(
      Vr(i.children, t, l)
    )) : (t || i.type !== ue) && s.push(l != null ? ze(i, { key: l }) : i);
  }
  if (o > 1)
    for (let r = 0; r < s.length; r++)
      s[r].patchFlag = -2;
  return s;
}
function Br(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Zl = /* @__PURE__ */ new WeakSet();
function Ms(e, t, n, s, o = !1) {
  if (P(e)) {
    e.forEach(
      (E, I) => Ms(
        E,
        t && (P(t) ? t[I] : t),
        n,
        s,
        o
      )
    );
    return;
  }
  if (Vt(s) && !o)
    return;
  const r = s.shapeFlag & 4 ? is(s.component) : s.el, i = o ? null : r, { i: l, r: a } = e;
  if (!l) {
    x(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const p = t && t.r, u = l.refs === X ? l.refs = {} : l.refs, f = l.setupState, h = H(f), m = f === X ? () => !1 : (E) => (W(h, E) && !de(h[E]) && x(
    `Template ref "${E}" used on a non-ref value. It will not work in the production build.`
  ), Zl.has(h[E]) ? !1 : W(h, E));
  if (p != null && p !== a && (le(p) ? (u[p] = null, m(p) && (f[p] = null)) : de(p) && (p.value = null)), k(a))
    Wt(a, l, 12, [i, u]);
  else {
    const E = le(a), I = de(a);
    if (E || I) {
      const ee = () => {
        if (e.f) {
          const V = E ? m(a) ? f[a] : u[a] : a.value;
          o ? P(V) && Bs(V, r) : P(V) ? V.includes(r) || V.push(r) : E ? (u[a] = [r], m(a) && (f[a] = u[a])) : (a.value = [r], e.k && (u[e.k] = a.value));
        } else E ? (u[a] = i, m(a) && (f[a] = i)) : I ? (a.value = i, e.k && (u[e.k] = i)) : x("Invalid template ref type:", a, `(${typeof a})`);
      };
      i ? (ee.id = -1, Ae(ee, n)) : ee();
    } else
      x("Invalid template ref type:", a, `(${typeof a})`);
  }
}
bn().requestIdleCallback;
bn().cancelIdleCallback;
const Vt = (e) => !!e.type.__asyncLoader, Cn = (e) => e.type.__isKeepAlive;
function ec(e, t) {
  Ur(e, "a", t);
}
function tc(e, t) {
  Ur(e, "da", t);
}
function Ur(e, t, n = ge) {
  const s = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (os(t, s, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      Cn(o.parent.vnode) && nc(s, t, n, o), o = o.parent;
  }
}
function nc(e, t, n, s) {
  const o = os(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  Kr(() => {
    Bs(s[t], o);
  }, n);
}
function os(e, t, n = ge, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...i) => {
      at();
      const l = Tn(n), a = He(t, n, e, i);
      return l(), ft(), a;
    });
    return s ? o.unshift(r) : o.push(r), r;
  } else {
    const o = Ot(Qs[e].replace(/ hook$/, ""));
    x(
      `${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const ut = (e) => (t, n = ge) => {
  (!mn || e === "sp") && os(e, (...s) => t(...s), n);
}, sc = ut("bm"), Kn = ut("m"), oc = ut(
  "bu"
), rc = ut("u"), Wr = ut(
  "bum"
), Kr = ut("um"), ic = ut(
  "sp"
), lc = ut("rtg"), cc = ut("rtc");
function ac(e, t = ge) {
  os("ec", e, t);
}
const fc = "components", qr = Symbol.for("v-ndc");
function uc(e) {
  return le(e) ? dc(fc, e, !1) || e : e || qr;
}
function dc(e, t, n = !0, s = !1) {
  const o = he || ge;
  if (o) {
    const r = o.type;
    {
      const l = ro(
        r,
        !1
      );
      if (l && (l === t || l === Oe(t) || l === Nt(Oe(t))))
        return r;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      _o(o[e] || r[e], t) || // global registration
      _o(o.appContext[e], t)
    );
    return !i && s ? r : (n && !i && x(`Failed to resolve ${e.slice(0, -1)}: ${t}
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`), i);
  } else
    x(
      `resolve${Nt(e.slice(0, -1))} can only be used in render() or setup().`
    );
}
function _o(e, t) {
  return e && (e[t] || e[Oe(t)] || e[Nt(Oe(t))]);
}
function Gr(e, t, n, s) {
  let o;
  const r = n, i = P(e);
  if (i || le(e)) {
    const l = i && It(e);
    let a = !1;
    l && (a = !$e(e), e = es(e)), o = new Array(e.length);
    for (let p = 0, u = e.length; p < u; p++)
      o[p] = t(
        a ? _e(e[p]) : e[p],
        p,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    Number.isInteger(e) || x(`The v-for range expect an integer value but got ${e}.`), o = new Array(e);
    for (let l = 0; l < e; l++)
      o[l] = t(l + 1, l, void 0, r);
  } else if (Z(e))
    if (e[Symbol.iterator])
      o = Array.from(
        e,
        (l, a) => t(l, a, void 0, r)
      );
    else {
      const l = Object.keys(e);
      o = new Array(l.length);
      for (let a = 0, p = l.length; a < p; a++) {
        const u = l[a];
        o[a] = t(e[u], u, a, r);
      }
    }
  else
    o = [];
  return o;
}
function Jr(e, t, n = {}, s, o) {
  if (he.ce || he.parent && Vt(he.parent) && he.parent.ce)
    return G(), Ut(
      we,
      null,
      [re("slot", n, s)],
      64
    );
  let r = e[t];
  r && r.length > 1 && (x(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), r = () => []), r && r._c && (r._d = !1), G();
  const i = r && Yr(r(n)), l = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  i && i.key, a = Ut(
    we,
    {
      key: (l && !ct(l) ? l : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!i && s ? "_fb" : "")
    },
    i || [],
    i && e._ === 1 ? 64 : -2
  );
  return r && r._c && (r._d = !0), a;
}
function Yr(e) {
  return e.some((t) => Dt(t) ? !(t.type === ue || t.type === we && !Yr(t.children)) : !0) ? e : null;
}
const As = (e) => e ? yi(e) ? is(e) : As(e.parent) : null, Pt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ae(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => Je(e.props),
    $attrs: (e) => Je(e.attrs),
    $slots: (e) => Je(e.slots),
    $refs: (e) => Je(e.refs),
    $parent: (e) => As(e.parent),
    $root: (e) => As(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => to(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      ss(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Nl.bind(e.proxy)),
    $watch: (e) => Kc.bind(e)
  })
), eo = (e) => e === "_" || e === "$", vs = (e, t) => e !== X && !e.__isScriptSetup && W(e, t), zr = {
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
        if (vs(s, t))
          return i[t] = 1, s[t];
        if (o !== X && W(o, t))
          return i[t] = 2, o[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (p = e.propsOptions[0]) && W(p, t)
        )
          return i[t] = 3, r[t];
        if (n !== X && W(n, t))
          return i[t] = 4, n[t];
        Is && (i[t] = 0);
      }
    }
    const u = Pt[t];
    let f, h;
    if (u)
      return t === "$attrs" ? (me(e.attrs, "get", ""), Jn()) : t === "$slots" && me(e, "get", t), u(e);
    if (
      // css module (injected by vue-loader)
      (f = l.__cssModules) && (f = f[t])
    )
      return f;
    if (n !== X && W(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      h = a.config.globalProperties, W(h, t)
    )
      return h[t];
    he && (!le(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (o !== X && eo(t[0]) && W(o, t) ? x(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === he && x(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: o, ctx: r } = e;
    return vs(o, t) ? (o[t] = n, !0) : o.__isScriptSetup && W(o, t) ? (x(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : s !== X && W(s, t) ? (s[t] = n, !0) : W(e.props, t) ? (x(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (x(
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
    return !!n[i] || e !== X && W(e, i) || vs(t, i) || (l = r[0]) && W(l, i) || W(s, i) || W(Pt, i) || W(o.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : W(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
zr.ownKeys = (e) => (x(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e));
function pc(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(Pt).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => Pt[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: xe
    });
  }), t;
}
function hc(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((s) => {
    Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[s],
      set: xe
    });
  });
}
function gc(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(H(n)).forEach((s) => {
    if (!n.__isScriptSetup) {
      if (eo(s[0])) {
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
        set: xe
      });
    }
  });
}
function wo(e) {
  return P(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function mc() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? x(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Is = !0;
function vc(e) {
  const t = to(e), n = e.proxy, s = e.ctx;
  Is = !1, t.beforeCreate && xo(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: r,
    methods: i,
    watch: l,
    provide: a,
    inject: p,
    // lifecycle
    created: u,
    beforeMount: f,
    mounted: h,
    beforeUpdate: m,
    updated: E,
    activated: I,
    deactivated: ee,
    beforeDestroy: V,
    beforeUnmount: J,
    destroyed: L,
    unmounted: ce,
    render: A,
    renderTracked: K,
    renderTriggered: fe,
    errorCaptured: Y,
    serverPrefetch: F,
    // public API
    expose: B,
    inheritAttrs: q,
    // assets
    components: M,
    directives: ne,
    filters: pe
  } = t, ve = mc();
  {
    const [w] = e.propsOptions;
    if (w)
      for (const N in w)
        ve("Props", N);
  }
  if (p && yc(p, s, ve), i)
    for (const w in i) {
      const N = i[w];
      k(N) ? (Object.defineProperty(s, w, {
        value: N.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }), ve("Methods", w)) : x(
        `Method "${w}" has type "${typeof N}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (o) {
    k(o) || x(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const w = o.call(n, n);
    if (Us(w) && x(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !Z(w))
      x("data() should return an object.");
    else {
      e.data = zs(w);
      for (const N in w)
        ve("Data", N), eo(N[0]) || Object.defineProperty(s, N, {
          configurable: !0,
          enumerable: !0,
          get: () => w[N],
          set: xe
        });
    }
  }
  if (Is = !0, r)
    for (const w in r) {
      const N = r[w], z = k(N) ? N.bind(n, n) : k(N.get) ? N.get.bind(n, n) : xe;
      z === xe && x(`Computed property "${w}" has no getter.`);
      const Ve = !k(N) && k(N.set) ? N.set.bind(n) : () => {
        x(
          `Write operation failed: computed property "${w}" is readonly.`
        );
      }, Ne = ke({
        get: z,
        set: Ve
      });
      Object.defineProperty(s, w, {
        enumerable: !0,
        configurable: !0,
        get: () => Ne.value,
        set: (Be) => Ne.value = Be
      }), ve("Computed", w);
    }
  if (l)
    for (const w in l)
      Qr(l[w], s, n, w);
  if (a) {
    const w = k(a) ? a.call(n) : a;
    Reflect.ownKeys(w).forEach((N) => {
      Sc(N, w[N]);
    });
  }
  u && xo(u, e, "c");
  function O(w, N) {
    P(N) ? N.forEach((z) => w(z.bind(n))) : N && w(N.bind(n));
  }
  if (O(sc, f), O(Kn, h), O(oc, m), O(rc, E), O(ec, I), O(tc, ee), O(ac, Y), O(cc, K), O(lc, fe), O(Wr, J), O(Kr, ce), O(ic, F), P(B))
    if (B.length) {
      const w = e.exposed || (e.exposed = {});
      B.forEach((N) => {
        Object.defineProperty(w, N, {
          get: () => n[N],
          set: (z) => n[N] = z
        });
      });
    } else e.exposed || (e.exposed = {});
  A && e.render === xe && (e.render = A), q != null && (e.inheritAttrs = q), M && (e.components = M), ne && (e.directives = ne), F && Br(e);
}
function yc(e, t, n = xe) {
  P(e) && (e = Rs(e));
  for (const s in e) {
    const o = e[s];
    let r;
    Z(o) ? "default" in o ? r = Nn(
      o.from || s,
      o.default,
      !0
    ) : r = Nn(o.from || s) : r = Nn(o), de(r) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (i) => r.value = i
    }) : t[s] = r, n("Inject", s);
  }
}
function xo(e, t, n) {
  He(
    P(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Qr(e, t, n, s) {
  let o = s.includes(".") ? fi(n, s) : () => n[s];
  if (le(e)) {
    const r = t[e];
    k(r) ? rn(o, r) : x(`Invalid watch handler specified by key "${e}"`, r);
  } else if (k(e))
    rn(o, e.bind(n));
  else if (Z(e))
    if (P(e))
      e.forEach((r) => Qr(r, t, n, s));
    else {
      const r = k(e.handler) ? e.handler.bind(n) : t[e.handler];
      k(r) ? rn(o, r, e) : x(`Invalid watch handler specified by key "${e.handler}"`, r);
    }
  else
    x(`Invalid watch option: "${s}"`, e);
}
function to(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: o,
    optionsCache: r,
    config: { optionMergeStrategies: i }
  } = e.appContext, l = r.get(t);
  let a;
  return l ? a = l : !o.length && !n && !s ? a = t : (a = {}, o.length && o.forEach(
    (p) => qn(a, p, i, !0)
  ), qn(a, t, i)), Z(t) && r.set(t, a), a;
}
function qn(e, t, n, s = !1) {
  const { mixins: o, extends: r } = t;
  r && qn(e, r, n, !0), o && o.forEach(
    (i) => qn(e, i, n, !0)
  );
  for (const i in t)
    if (s && i === "expose")
      x(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = bc[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const bc = {
  data: Co,
  props: So,
  emits: So,
  // objects
  methods: en,
  computed: en,
  // lifecycle
  beforeCreate: Se,
  created: Se,
  beforeMount: Se,
  mounted: Se,
  beforeUpdate: Se,
  updated: Se,
  beforeDestroy: Se,
  beforeUnmount: Se,
  destroyed: Se,
  unmounted: Se,
  activated: Se,
  deactivated: Se,
  errorCaptured: Se,
  serverPrefetch: Se,
  // assets
  components: en,
  directives: en,
  // watch
  watch: wc,
  // provide / inject
  provide: Co,
  inject: _c
};
function Co(e, t) {
  return t ? e ? function() {
    return ae(
      k(e) ? e.call(this, this) : e,
      k(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function _c(e, t) {
  return en(Rs(e), Rs(t));
}
function Rs(e) {
  if (P(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Se(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function en(e, t) {
  return e ? ae(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function So(e, t) {
  return e ? P(e) && P(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ae(
    /* @__PURE__ */ Object.create(null),
    wo(e),
    wo(t ?? {})
  ) : t;
}
function wc(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = ae(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = Se(e[s], t[s]);
  return n;
}
function Xr() {
  return {
    app: null,
    config: {
      isNativeTag: Ei,
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
let xc = 0;
function Cc(e, t) {
  return function(s, o = null) {
    k(s) || (s = ae({}, s)), o != null && !Z(o) && (x("root props passed to app.mount() must be an object."), o = null);
    const r = Xr(), i = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const p = r.app = {
      _uid: xc++,
      _component: s,
      _props: o,
      _container: null,
      _context: r,
      _instance: null,
      version: No,
      get config() {
        return r.config;
      },
      set config(u) {
        x(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(u, ...f) {
        return i.has(u) ? x("Plugin has already been applied to target app.") : u && k(u.install) ? (i.add(u), u.install(p, ...f)) : k(u) ? (i.add(u), u(p, ...f)) : x(
          'A plugin must either be a function or an object with an "install" function.'
        ), p;
      },
      mixin(u) {
        return r.mixins.includes(u) ? x(
          "Mixin has already been applied to target app" + (u.name ? `: ${u.name}` : "")
        ) : r.mixins.push(u), p;
      },
      component(u, f) {
        return js(u, r.config), f ? (r.components[u] && x(`Component "${u}" has already been registered in target app.`), r.components[u] = f, p) : r.components[u];
      },
      directive(u, f) {
        return Fr(u), f ? (r.directives[u] && x(`Directive "${u}" has already been registered in target app.`), r.directives[u] = f, p) : r.directives[u];
      },
      mount(u, f, h) {
        if (a)
          x(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          u.__vue_app__ && x(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const m = p._ceVNode || re(s, o);
          return m.appContext = r, h === !0 ? h = "svg" : h === !1 && (h = void 0), r.reload = () => {
            e(
              ze(m),
              u,
              h
            );
          }, f && t ? t(m, u) : e(m, u, h), a = !0, p._container = u, u.__vue_app__ = p, p._instance = m.component, Hl(p, No), is(m.component);
        }
      },
      onUnmount(u) {
        typeof u != "function" && x(
          `Expected function as first argument to app.onUnmount(), but got ${typeof u}`
        ), l.push(u);
      },
      unmount() {
        a ? (He(
          l,
          p._instance,
          16
        ), e(null, p._container), p._instance = null, Vl(p), delete p._container.__vue_app__) : x("Cannot unmount an app that is not mounted.");
      },
      provide(u, f) {
        return u in r.provides && x(
          `App already provides property with key "${String(u)}". It will be overwritten with the new value.`
        ), r.provides[u] = f, p;
      },
      runWithContext(u) {
        const f = Bt;
        Bt = p;
        try {
          return u();
        } finally {
          Bt = f;
        }
      }
    };
    return p;
  };
}
let Bt = null;
function Sc(e, t) {
  if (!ge)
    x("provide() can only be used inside setup().");
  else {
    let n = ge.provides;
    const s = ge.parent && ge.parent.provides;
    s === n && (n = ge.provides = Object.create(s)), n[e] = t;
  }
}
function Nn(e, t, n = !1) {
  const s = ge || he;
  if (s || Bt) {
    const o = Bt ? Bt._context.provides : s ? s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && k(t) ? t.call(s && s.proxy) : t;
    x(`injection "${String(e)}" not found.`);
  } else
    x("inject() can only be used inside setup() or functional components.");
}
const Zr = {}, ei = () => Object.create(Zr), ti = (e) => Object.getPrototypeOf(e) === Zr;
function Tc(e, t, n, s = !1) {
  const o = {}, r = ei();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), ni(e, t, o, r);
  for (const i in e.propsOptions[0])
    i in o || (o[i] = void 0);
  oi(t || {}, o, e), n ? e.props = s ? o : gl(o) : e.type.props ? e.props = o : e.props = r, e.attrs = r;
}
function Oc(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function $c(e, t, n, s) {
  const {
    props: o,
    attrs: r,
    vnode: { patchFlag: i }
  } = e, l = H(o), [a] = e.propsOptions;
  let p = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !Oc(e) && (s || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const u = e.vnode.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        let h = u[f];
        if (rs(e.emitsOptions, h))
          continue;
        const m = t[h];
        if (a)
          if (W(r, h))
            m !== r[h] && (r[h] = m, p = !0);
          else {
            const E = Oe(h);
            o[E] = Ps(
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
    ni(e, t, o, r) && (p = !0);
    let u;
    for (const f in l)
      (!t || // for camelCase
      !W(t, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = rt(f)) === f || !W(t, u))) && (a ? n && // for camelCase
      (n[f] !== void 0 || // for kebab-case
      n[u] !== void 0) && (o[f] = Ps(
        a,
        l,
        f,
        void 0,
        e,
        !0
      )) : delete o[f]);
    if (r !== l)
      for (const f in r)
        (!t || !W(t, f)) && (delete r[f], p = !0);
  }
  p && qe(e.attrs, "set", ""), oi(t || {}, o, e);
}
function ni(e, t, n, s) {
  const [o, r] = e.propsOptions;
  let i = !1, l;
  if (t)
    for (let a in t) {
      if (nn(a))
        continue;
      const p = t[a];
      let u;
      o && W(o, u = Oe(a)) ? !r || !r.includes(u) ? n[u] = p : (l || (l = {}))[u] = p : rs(e.emitsOptions, a) || (!(a in s) || p !== s[a]) && (s[a] = p, i = !0);
    }
  if (r) {
    const a = H(n), p = l || X;
    for (let u = 0; u < r.length; u++) {
      const f = r[u];
      n[f] = Ps(
        o,
        a,
        f,
        p[f],
        e,
        !W(p, f)
      );
    }
  }
  return i;
}
function Ps(e, t, n, s, o, r) {
  const i = e[n];
  if (i != null) {
    const l = W(i, "default");
    if (l && s === void 0) {
      const a = i.default;
      if (i.type !== Function && !i.skipFactory && k(a)) {
        const { propsDefaults: p } = o;
        if (n in p)
          s = p[n];
        else {
          const u = Tn(o);
          s = p[n] = a.call(
            null,
            t
          ), u();
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
    ] && (s === "" || s === rt(n)) && (s = !0));
  }
  return s;
}
const Ec = /* @__PURE__ */ new WeakMap();
function si(e, t, n = !1) {
  const s = n ? Ec : t.propsCache, o = s.get(e);
  if (o)
    return o;
  const r = e.props, i = {}, l = [];
  let a = !1;
  if (!k(e)) {
    const u = (f) => {
      a = !0;
      const [h, m] = si(f, t, !0);
      ae(i, h), m && l.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!r && !a)
    return Z(e) && s.set(e, Lt), Lt;
  if (P(r))
    for (let u = 0; u < r.length; u++) {
      le(r[u]) || x("props must be strings when using array syntax.", r[u]);
      const f = Oe(r[u]);
      To(f) && (i[f] = X);
    }
  else if (r) {
    Z(r) || x("invalid props options", r);
    for (const u in r) {
      const f = Oe(u);
      if (To(f)) {
        const h = r[u], m = i[f] = P(h) || k(h) ? { type: h } : ae({}, h), E = m.type;
        let I = !1, ee = !0;
        if (P(E))
          for (let V = 0; V < E.length; ++V) {
            const J = E[V], L = k(J) && J.name;
            if (L === "Boolean") {
              I = !0;
              break;
            } else L === "String" && (ee = !1);
          }
        else
          I = k(E) && E.name === "Boolean";
        m[
          0
          /* shouldCast */
        ] = I, m[
          1
          /* shouldCastTrue */
        ] = ee, (I || W(m, "default")) && l.push(f);
      }
    }
  }
  const p = [i, l];
  return Z(e) && s.set(e, p), p;
}
function To(e) {
  return e[0] !== "$" && !nn(e) ? !0 : (x(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Mc(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function oi(e, t, n) {
  const s = H(t), o = n.propsOptions[0], r = Object.keys(e).map((i) => Oe(i));
  for (const i in o) {
    let l = o[i];
    l != null && Ac(
      i,
      s[i],
      l,
      Je(s),
      !r.includes(i)
    );
  }
}
function Ac(e, t, n, s, o) {
  const { type: r, required: i, validator: l, skipCheck: a } = n;
  if (i && o) {
    x('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !i)) {
    if (r != null && r !== !0 && !a) {
      let p = !1;
      const u = P(r) ? r : [r], f = [];
      for (let h = 0; h < u.length && !p; h++) {
        const { valid: m, expectedType: E } = Rc(t, u[h]);
        f.push(E || ""), p = m;
      }
      if (!p) {
        x(Pc(e, t, f));
        return;
      }
    }
    l && !l(t, s) && x('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Ic = /* @__PURE__ */ lt(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function Rc(e, t) {
  let n;
  const s = Mc(t);
  if (s === "null")
    n = e === null;
  else if (Ic(s)) {
    const o = typeof e;
    n = o === s.toLowerCase(), !n && o === "object" && (n = e instanceof t);
  } else s === "Object" ? n = Z(e) : s === "Array" ? n = P(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: s
  };
}
function Pc(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let s = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(Nt).join(" | ")}`;
  const o = n[0], r = Ws(t), i = Oo(t, o), l = Oo(t, r);
  return n.length === 1 && $o(o) && !Nc(o, r) && (s += ` with value ${i}`), s += `, got ${r} `, $o(r) && (s += `with value ${l}.`), s;
}
function Oo(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function $o(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Nc(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const ri = (e) => e[0] === "_" || e === "$stable", no = (e) => P(e) ? e.map(De) : [De(e)], Fc = (e, t, n) => {
  if (t._n)
    return t;
  const s = pn((...o) => (mt.NODE_ENV !== "production" && ge && (!n || n.root === ge.root) && x(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), no(t(...o))), n);
  return s._c = !1, s;
}, ii = (e, t, n) => {
  const s = e._ctx;
  for (const o in e) {
    if (ri(o)) continue;
    const r = e[o];
    if (k(r))
      t[o] = Fc(o, r, s);
    else if (r != null) {
      x(
        `Non-function value encountered for slot "${o}". Prefer function slots for better performance.`
      );
      const i = no(r);
      t[o] = () => i;
    }
  }
}, li = (e, t) => {
  Cn(e.vnode) || x(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = no(t);
  e.slots.default = () => n;
}, Ns = (e, t, n) => {
  for (const s in t)
    (n || s !== "_") && (e[s] = t[s]);
}, Dc = (e, t, n) => {
  const s = e.slots = ei();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (Ns(s, t, n), n && Ln(s, "_", o, !0)) : ii(t, s);
  } else t && li(e, t);
}, kc = (e, t, n) => {
  const { vnode: s, slots: o } = e;
  let r = !0, i = X;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? Ye ? (Ns(o, t, n), qe(e, "set", "$slots")) : n && l === 1 ? r = !1 : Ns(o, t, n) : (r = !t.$stable, ii(t, o)), i = t;
  } else t && (li(e, t), i = { default: 1 });
  if (r)
    for (const l in o)
      !ri(l) && i[l] == null && delete o[l];
};
let zt, _t;
function Xe(e, t) {
  e.appContext.config.performance && Gn() && _t.mark(`vue-${t}-${e.uid}`), Kl(e, t, Gn() ? _t.now() : Date.now());
}
function Ze(e, t) {
  if (e.appContext.config.performance && Gn()) {
    const n = `vue-${t}-${e.uid}`, s = n + ":end";
    _t.mark(s), _t.measure(
      `<${ls(e, e.type)}> ${t}`,
      n,
      s
    ), _t.clearMarks(n), _t.clearMarks(s);
  }
  ql(e, t, Gn() ? _t.now() : Date.now());
}
function Gn() {
  return zt !== void 0 || (typeof window < "u" && window.performance ? (zt = !0, _t = window.performance) : zt = !1), zt;
}
function jc() {
  const e = [];
  if (e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const Ae = Xc;
function Lc(e) {
  return Hc(e);
}
function Hc(e, t) {
  jc();
  const n = bn();
  n.__VUE__ = !0, Ir(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: s,
    remove: o,
    patchProp: r,
    createElement: i,
    createText: l,
    createComment: a,
    setText: p,
    setElementText: u,
    parentNode: f,
    nextSibling: h,
    setScopeId: m = xe,
    insertStaticContent: E
  } = e, I = (c, d, g, b = null, v = null, y = null, T = void 0, S = null, C = Ye ? !1 : !!d.dynamicChildren) => {
    if (c === d)
      return;
    c && !Et(c, d) && (b = On(c), pt(c, v, y, !0), c = null), d.patchFlag === -2 && (C = !1, d.dynamicChildren = null);
    const { type: _, ref: D, shapeFlag: $ } = d;
    switch (_) {
      case Sn:
        ee(c, d, g, b);
        break;
      case ue:
        V(c, d, g, b);
        break;
      case Fn:
        c == null ? J(d, g, b, T) : L(c, d, g, T);
        break;
      case we:
        ne(
          c,
          d,
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
        $ & 1 ? K(
          c,
          d,
          g,
          b,
          v,
          y,
          T,
          S,
          C
        ) : $ & 6 ? pe(
          c,
          d,
          g,
          b,
          v,
          y,
          T,
          S,
          C
        ) : $ & 64 || $ & 128 ? _.process(
          c,
          d,
          g,
          b,
          v,
          y,
          T,
          S,
          C,
          qt
        ) : x("Invalid VNode type:", _, `(${typeof _})`);
    }
    D != null && v && Ms(D, c && c.ref, y, d || c, !d);
  }, ee = (c, d, g, b) => {
    if (c == null)
      s(
        d.el = l(d.children),
        g,
        b
      );
    else {
      const v = d.el = c.el;
      d.children !== c.children && p(v, d.children);
    }
  }, V = (c, d, g, b) => {
    c == null ? s(
      d.el = a(d.children || ""),
      g,
      b
    ) : d.el = c.el;
  }, J = (c, d, g, b) => {
    [c.el, c.anchor] = E(
      c.children,
      d,
      g,
      b,
      c.el,
      c.anchor
    );
  }, L = (c, d, g, b) => {
    if (d.children !== c.children) {
      const v = h(c.anchor);
      A(c), [d.el, d.anchor] = E(
        d.children,
        g,
        v,
        b
      );
    } else
      d.el = c.el, d.anchor = c.anchor;
  }, ce = ({ el: c, anchor: d }, g, b) => {
    let v;
    for (; c && c !== d; )
      v = h(c), s(c, g, b), c = v;
    s(d, g, b);
  }, A = ({ el: c, anchor: d }) => {
    let g;
    for (; c && c !== d; )
      g = h(c), o(c), c = g;
    o(d);
  }, K = (c, d, g, b, v, y, T, S, C) => {
    d.type === "svg" ? T = "svg" : d.type === "math" && (T = "mathml"), c == null ? fe(
      d,
      g,
      b,
      v,
      y,
      T,
      S,
      C
    ) : B(
      c,
      d,
      v,
      y,
      T,
      S,
      C
    );
  }, fe = (c, d, g, b, v, y, T, S) => {
    let C, _;
    const { props: D, shapeFlag: $, transition: R, dirs: j } = c;
    if (C = c.el = i(
      c.type,
      y,
      D && D.is,
      D
    ), $ & 8 ? u(C, c.children) : $ & 16 && F(
      c.children,
      C,
      null,
      b,
      v,
      ys(c, y),
      T,
      S
    ), j && xt(c, null, b, "created"), Y(C, c, c.scopeId, T, b), D) {
      for (const oe in D)
        oe !== "value" && !nn(oe) && r(C, oe, null, D[oe], y, b);
      "value" in D && r(C, "value", null, D.value, y), (_ = D.onVnodeBeforeMount) && We(_, b, c);
    }
    Ln(C, "__vnode", c, !0), Ln(C, "__vueParentComponent", b, !0), j && xt(c, null, b, "beforeMount");
    const U = Vc(v, R);
    U && R.beforeEnter(C), s(C, d, g), ((_ = D && D.onVnodeMounted) || U || j) && Ae(() => {
      _ && We(_, b, c), U && R.enter(C), j && xt(c, null, b, "mounted");
    }, v);
  }, Y = (c, d, g, b, v) => {
    if (g && m(c, g), b)
      for (let y = 0; y < b.length; y++)
        m(c, b[y]);
    if (v) {
      let y = v.subTree;
      if (y.patchFlag > 0 && y.patchFlag & 2048 && (y = so(y.children) || y), d === y || pi(y.type) && (y.ssContent === d || y.ssFallback === d)) {
        const T = v.vnode;
        Y(
          c,
          T,
          T.scopeId,
          T.slotScopeIds,
          v.parent
        );
      }
    }
  }, F = (c, d, g, b, v, y, T, S, C = 0) => {
    for (let _ = C; _ < c.length; _++) {
      const D = c[_] = S ? bt(c[_]) : De(c[_]);
      I(
        null,
        D,
        d,
        g,
        b,
        v,
        y,
        T,
        S
      );
    }
  }, B = (c, d, g, b, v, y, T) => {
    const S = d.el = c.el;
    S.__vnode = d;
    let { patchFlag: C, dynamicChildren: _, dirs: D } = d;
    C |= c.patchFlag & 16;
    const $ = c.props || X, R = d.props || X;
    let j;
    if (g && Ct(g, !1), (j = R.onVnodeBeforeUpdate) && We(j, g, d, c), D && xt(d, c, g, "beforeUpdate"), g && Ct(g, !0), Ye && (C = 0, T = !1, _ = null), ($.innerHTML && R.innerHTML == null || $.textContent && R.textContent == null) && u(S, ""), _ ? (q(
      c.dynamicChildren,
      _,
      S,
      g,
      b,
      ys(d, v),
      y
    ), Fs(c, d)) : T || z(
      c,
      d,
      S,
      null,
      g,
      b,
      ys(d, v),
      y,
      !1
    ), C > 0) {
      if (C & 16)
        M(S, $, R, g, v);
      else if (C & 2 && $.class !== R.class && r(S, "class", null, R.class, v), C & 4 && r(S, "style", $.style, R.style, v), C & 8) {
        const U = d.dynamicProps;
        for (let oe = 0; oe < U.length; oe++) {
          const te = U[oe], Ee = $[te], ye = R[te];
          (ye !== Ee || te === "value") && r(S, te, Ee, ye, v, g);
        }
      }
      C & 1 && c.children !== d.children && u(S, d.children);
    } else !T && _ == null && M(S, $, R, g, v);
    ((j = R.onVnodeUpdated) || D) && Ae(() => {
      j && We(j, g, d, c), D && xt(d, c, g, "updated");
    }, b);
  }, q = (c, d, g, b, v, y, T) => {
    for (let S = 0; S < d.length; S++) {
      const C = c[S], _ = d[S], D = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        C.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (C.type === we || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Et(C, _) || // - In the case of a component, it could contain anything.
        C.shapeFlag & 70) ? f(C.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          g
        )
      );
      I(
        C,
        _,
        D,
        null,
        b,
        v,
        y,
        T,
        !0
      );
    }
  }, M = (c, d, g, b, v) => {
    if (d !== g) {
      if (d !== X)
        for (const y in d)
          !nn(y) && !(y in g) && r(
            c,
            y,
            d[y],
            null,
            v,
            b
          );
      for (const y in g) {
        if (nn(y)) continue;
        const T = g[y], S = d[y];
        T !== S && y !== "value" && r(c, y, S, T, v, b);
      }
      "value" in g && r(c, "value", d.value, g.value, v);
    }
  }, ne = (c, d, g, b, v, y, T, S, C) => {
    const _ = d.el = c ? c.el : l(""), D = d.anchor = c ? c.anchor : l("");
    let { patchFlag: $, dynamicChildren: R, slotScopeIds: j } = d;
    // #5523 dev root fragment may inherit directives
    (Ye || $ & 2048) && ($ = 0, C = !1, R = null), j && (S = S ? S.concat(j) : j), c == null ? (s(_, g, b), s(D, g, b), F(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      d.children || [],
      g,
      D,
      v,
      y,
      T,
      S,
      C
    )) : $ > 0 && $ & 64 && R && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren ? (q(
      c.dynamicChildren,
      R,
      g,
      v,
      y,
      T,
      S
    ), Fs(c, d)) : z(
      c,
      d,
      g,
      D,
      v,
      y,
      T,
      S,
      C
    );
  }, pe = (c, d, g, b, v, y, T, S, C) => {
    d.slotScopeIds = S, c == null ? d.shapeFlag & 512 ? v.ctx.activate(
      d,
      g,
      b,
      T,
      C
    ) : ve(
      d,
      g,
      b,
      v,
      y,
      T,
      C
    ) : O(c, d, C);
  }, ve = (c, d, g, b, v, y, T) => {
    const S = c.component = la(
      c,
      b,
      v
    );
    if (S.type.__hmrId && Dl(S), In(c), Xe(S, "mount"), Cn(c) && (S.ctx.renderer = qt), Xe(S, "init"), aa(S, !1, T), Ze(S, "init"), S.asyncDep) {
      if (Ye && (c.el = null), v && v.registerDep(S, w, T), !c.el) {
        const C = S.subTree = re(ue);
        V(null, C, d, g);
      }
    } else
      w(
        S,
        c,
        d,
        g,
        v,
        y,
        T
      );
    Rn(), Ze(S, "mount");
  }, O = (c, d, g) => {
    const b = d.component = c.component;
    if (zc(c, d, g))
      if (b.asyncDep && !b.asyncResolved) {
        In(d), N(b, d, g), Rn();
        return;
      } else
        b.next = d, b.update();
    else
      d.el = c.el, b.vnode = d;
  }, w = (c, d, g, b, v, y, T) => {
    const S = () => {
      if (c.isMounted) {
        let { next: $, bu: R, u: j, parent: U, vnode: oe } = c;
        {
          const Me = ci(c);
          if (Me) {
            $ && ($.el = oe.el, N(c, $, T)), Me.asyncDep.then(() => {
              c.isUnmounted || S();
            });
            return;
          }
        }
        let te = $, Ee;
        In($ || c.vnode), Ct(c, !1), $ ? ($.el = oe.el, N(c, $, T)) : $ = oe, R && Jt(R), (Ee = $.props && $.props.onVnodeBeforeUpdate) && We(Ee, U, $, oe), Ct(c, !0), Xe(c, "render");
        const ye = bs(c);
        Ze(c, "render");
        const Fe = c.subTree;
        c.subTree = ye, Xe(c, "patch"), I(
          Fe,
          ye,
          // parent may have changed if it's in a teleport
          f(Fe.el),
          // anchor may have changed if it's in a fragment
          On(Fe),
          c,
          v,
          y
        ), Ze(c, "patch"), $.el = ye.el, te === null && Qc(c, ye.el), j && Ae(j, v), (Ee = $.props && $.props.onVnodeUpdated) && Ae(
          () => We(Ee, U, $, oe),
          v
        ), Rr(c), Rn();
      } else {
        let $;
        const { el: R, props: j } = d, { bm: U, m: oe, parent: te, root: Ee, type: ye } = c, Fe = Vt(d);
        if (Ct(c, !1), U && Jt(U), !Fe && ($ = j && j.onVnodeBeforeMount) && We($, te, d), Ct(c, !0), R && ao) {
          const Me = () => {
            Xe(c, "render"), c.subTree = bs(c), Ze(c, "render"), Xe(c, "hydrate"), ao(
              R,
              c.subTree,
              c,
              v,
              null
            ), Ze(c, "hydrate");
          };
          Fe && ye.__asyncHydrate ? ye.__asyncHydrate(
            R,
            c,
            Me
          ) : Me();
        } else {
          Ee.ce && Ee.ce._injectChildStyle(ye), Xe(c, "render");
          const Me = c.subTree = bs(c);
          Ze(c, "render"), Xe(c, "patch"), I(
            null,
            Me,
            g,
            b,
            c,
            v,
            y
          ), Ze(c, "patch"), d.el = Me.el;
        }
        if (oe && Ae(oe, v), !Fe && ($ = j && j.onVnodeMounted)) {
          const Me = d;
          Ae(
            () => We($, te, Me),
            v
          );
        }
        (d.shapeFlag & 256 || te && Vt(te.vnode) && te.vnode.shapeFlag & 256) && c.a && Ae(c.a, v), c.isMounted = !0, Bl(c), d = g = b = null;
      }
    };
    c.scope.on();
    const C = c.effect = new ir(S);
    c.scope.off();
    const _ = c.update = C.run.bind(C), D = c.job = C.runIfDirty.bind(C);
    D.i = c, D.id = c.uid, C.scheduler = () => ss(D), Ct(c, !0), C.onTrack = c.rtc ? ($) => Jt(c.rtc, $) : void 0, C.onTrigger = c.rtg ? ($) => Jt(c.rtg, $) : void 0, _();
  }, N = (c, d, g) => {
    d.component = c;
    const b = c.vnode.props;
    c.vnode = d, c.next = null, $c(c, d.props, b, g), kc(c, d.children, g), at(), vo(c), ft();
  }, z = (c, d, g, b, v, y, T, S, C = !1) => {
    const _ = c && c.children, D = c ? c.shapeFlag : 0, $ = d.children, { patchFlag: R, shapeFlag: j } = d;
    if (R > 0) {
      if (R & 128) {
        Ne(
          _,
          $,
          g,
          b,
          v,
          y,
          T,
          S,
          C
        );
        return;
      } else if (R & 256) {
        Ve(
          _,
          $,
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
    j & 8 ? (D & 16 && Kt(_, v, y), $ !== _ && u(g, $)) : D & 16 ? j & 16 ? Ne(
      _,
      $,
      g,
      b,
      v,
      y,
      T,
      S,
      C
    ) : Kt(_, v, y, !0) : (D & 8 && u(g, ""), j & 16 && F(
      $,
      g,
      b,
      v,
      y,
      T,
      S,
      C
    ));
  }, Ve = (c, d, g, b, v, y, T, S, C) => {
    c = c || Lt, d = d || Lt;
    const _ = c.length, D = d.length, $ = Math.min(_, D);
    let R;
    for (R = 0; R < $; R++) {
      const j = d[R] = C ? bt(d[R]) : De(d[R]);
      I(
        c[R],
        j,
        g,
        null,
        v,
        y,
        T,
        S,
        C
      );
    }
    _ > D ? Kt(
      c,
      v,
      y,
      !0,
      !1,
      $
    ) : F(
      d,
      g,
      b,
      v,
      y,
      T,
      S,
      C,
      $
    );
  }, Ne = (c, d, g, b, v, y, T, S, C) => {
    let _ = 0;
    const D = d.length;
    let $ = c.length - 1, R = D - 1;
    for (; _ <= $ && _ <= R; ) {
      const j = c[_], U = d[_] = C ? bt(d[_]) : De(d[_]);
      if (Et(j, U))
        I(
          j,
          U,
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
    for (; _ <= $ && _ <= R; ) {
      const j = c[$], U = d[R] = C ? bt(d[R]) : De(d[R]);
      if (Et(j, U))
        I(
          j,
          U,
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
      $--, R--;
    }
    if (_ > $) {
      if (_ <= R) {
        const j = R + 1, U = j < D ? d[j].el : b;
        for (; _ <= R; )
          I(
            null,
            d[_] = C ? bt(d[_]) : De(d[_]),
            g,
            U,
            v,
            y,
            T,
            S,
            C
          ), _++;
      }
    } else if (_ > R)
      for (; _ <= $; )
        pt(c[_], v, y, !0), _++;
    else {
      const j = _, U = _, oe = /* @__PURE__ */ new Map();
      for (_ = U; _ <= R; _++) {
        const Ce = d[_] = C ? bt(d[_]) : De(d[_]);
        Ce.key != null && (oe.has(Ce.key) && x(
          "Duplicate keys found during update:",
          JSON.stringify(Ce.key),
          "Make sure keys are unique."
        ), oe.set(Ce.key, _));
      }
      let te, Ee = 0;
      const ye = R - U + 1;
      let Fe = !1, Me = 0;
      const Gt = new Array(ye);
      for (_ = 0; _ < ye; _++) Gt[_] = 0;
      for (_ = j; _ <= $; _++) {
        const Ce = c[_];
        if (Ee >= ye) {
          pt(Ce, v, y, !0);
          continue;
        }
        let Ue;
        if (Ce.key != null)
          Ue = oe.get(Ce.key);
        else
          for (te = U; te <= R; te++)
            if (Gt[te - U] === 0 && Et(Ce, d[te])) {
              Ue = te;
              break;
            }
        Ue === void 0 ? pt(Ce, v, y, !0) : (Gt[Ue - U] = _ + 1, Ue >= Me ? Me = Ue : Fe = !0, I(
          Ce,
          d[Ue],
          g,
          null,
          v,
          y,
          T,
          S,
          C
        ), Ee++);
      }
      const fo = Fe ? Bc(Gt) : Lt;
      for (te = fo.length - 1, _ = ye - 1; _ >= 0; _--) {
        const Ce = U + _, Ue = d[Ce], uo = Ce + 1 < D ? d[Ce + 1].el : b;
        Gt[_] === 0 ? I(
          null,
          Ue,
          g,
          uo,
          v,
          y,
          T,
          S,
          C
        ) : Fe && (te < 0 || _ !== fo[te] ? Be(Ue, g, uo, 2) : te--);
      }
    }
  }, Be = (c, d, g, b, v = null) => {
    const { el: y, type: T, transition: S, children: C, shapeFlag: _ } = c;
    if (_ & 6) {
      Be(c.component.subTree, d, g, b);
      return;
    }
    if (_ & 128) {
      c.suspense.move(d, g, b);
      return;
    }
    if (_ & 64) {
      T.move(c, d, g, qt);
      return;
    }
    if (T === we) {
      s(y, d, g);
      for (let $ = 0; $ < C.length; $++)
        Be(C[$], d, g, b);
      s(c.anchor, d, g);
      return;
    }
    if (T === Fn) {
      ce(c, d, g);
      return;
    }
    if (b !== 2 && _ & 1 && S)
      if (b === 0)
        S.beforeEnter(y), s(y, d, g), Ae(() => S.enter(y), v);
      else {
        const { leave: $, delayLeave: R, afterLeave: j } = S, U = () => s(y, d, g), oe = () => {
          $(y, () => {
            U(), j && j();
          });
        };
        R ? R(y, U, oe) : oe();
      }
    else
      s(y, d, g);
  }, pt = (c, d, g, b = !1, v = !1) => {
    const {
      type: y,
      props: T,
      ref: S,
      children: C,
      dynamicChildren: _,
      shapeFlag: D,
      patchFlag: $,
      dirs: R,
      cacheIndex: j
    } = c;
    if ($ === -2 && (v = !1), S != null && Ms(S, null, g, c, !0), j != null && (d.renderCache[j] = void 0), D & 256) {
      d.ctx.deactivate(c);
      return;
    }
    const U = D & 1 && R, oe = !Vt(c);
    let te;
    if (oe && (te = T && T.onVnodeBeforeUnmount) && We(te, d, c), D & 6)
      $i(c.component, g, b);
    else {
      if (D & 128) {
        c.suspense.unmount(g, b);
        return;
      }
      U && xt(c, null, d, "beforeUnmount"), D & 64 ? c.type.remove(
        c,
        d,
        g,
        qt,
        b
      ) : _ && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !_.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (y !== we || $ > 0 && $ & 64) ? Kt(
        _,
        d,
        g,
        !1,
        !0
      ) : (y === we && $ & 384 || !v && D & 16) && Kt(C, d, g), b && cs(c);
    }
    (oe && (te = T && T.onVnodeUnmounted) || U) && Ae(() => {
      te && We(te, d, c), U && xt(c, null, d, "unmounted");
    }, g);
  }, cs = (c) => {
    const { type: d, el: g, anchor: b, transition: v } = c;
    if (d === we) {
      c.patchFlag > 0 && c.patchFlag & 2048 && v && !v.persisted ? c.children.forEach((T) => {
        T.type === ue ? o(T.el) : cs(T);
      }) : Oi(g, b);
      return;
    }
    if (d === Fn) {
      A(c);
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
  }, Oi = (c, d) => {
    let g;
    for (; c !== d; )
      g = h(c), o(c), c = g;
    o(d);
  }, $i = (c, d, g) => {
    c.type.__hmrId && kl(c);
    const { bum: b, scope: v, job: y, subTree: T, um: S, m: C, a: _ } = c;
    Eo(C), Eo(_), b && Jt(b), v.stop(), y && (y.flags |= 8, pt(T, c, d, g)), S && Ae(S, d), Ae(() => {
      c.isUnmounted = !0;
    }, d), d && d.pendingBranch && !d.isUnmounted && c.asyncDep && !c.asyncResolved && c.suspenseId === d.pendingId && (d.deps--, d.deps === 0 && d.resolve()), Wl(c);
  }, Kt = (c, d, g, b = !1, v = !1, y = 0) => {
    for (let T = y; T < c.length; T++)
      pt(c[T], d, g, b, v);
  }, On = (c) => {
    if (c.shapeFlag & 6)
      return On(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const d = h(c.anchor || c.el), g = d && d[Yl];
    return g ? h(g) : d;
  };
  let as = !1;
  const lo = (c, d, g) => {
    c == null ? d._vnode && pt(d._vnode, null, null, !0) : I(
      d._vnode || null,
      c,
      d,
      null,
      null,
      null,
      g
    ), d._vnode = c, as || (as = !0, vo(), Er(), as = !1);
  }, qt = {
    p: I,
    um: pt,
    m: Be,
    r: cs,
    mt: ve,
    mc: F,
    pc: z,
    pbc: q,
    n: On,
    o: e
  };
  let co, ao;
  return {
    render: lo,
    hydrate: co,
    createApp: Cc(lo, co)
  };
}
function ys({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Ct({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Vc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Fs(e, t, n = !1) {
  const s = e.children, o = t.children;
  if (P(s) && P(o))
    for (let r = 0; r < s.length; r++) {
      const i = s[r];
      let l = o[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = o[r] = bt(o[r]), l.el = i.el), !n && l.patchFlag !== -2 && Fs(i, l)), l.type === Sn && (l.el = i.el), l.type === ue && !l.el && (l.el = i.el);
    }
}
function Bc(e) {
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
function ci(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : ci(t);
}
function Eo(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Uc = Symbol.for("v-scx"), Wc = () => {
  {
    const e = Nn(Uc);
    return e || x(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function rn(e, t, n) {
  return k(t) || x(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), ai(e, t, n);
}
function ai(e, t, n = X) {
  const { immediate: s, deep: o, flush: r, once: i } = n;
  t || (s !== void 0 && x(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && x(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && x(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = ae({}, n);
  l.onWarn = x;
  const a = t && s || !t && r !== "post";
  let p;
  if (mn) {
    if (r === "sync") {
      const m = Wc();
      p = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!a) {
      const m = () => {
      };
      return m.stop = xe, m.resume = xe, m.pause = xe, m;
    }
  }
  const u = ge;
  l.call = (m, E, I) => He(m, u, E, I);
  let f = !1;
  r === "post" ? l.scheduler = (m) => {
    Ae(m, u && u.suspense);
  } : r !== "sync" && (f = !0, l.scheduler = (m, E) => {
    E ? m() : ss(m);
  }), l.augmentJob = (m) => {
    t && (m.flags |= 4), f && (m.flags |= 2, u && (m.id = u.uid, m.i = u));
  };
  const h = Ol(e, t, l);
  return mn && (p ? p.push(h) : a && h()), h;
}
function Kc(e, t, n) {
  const s = this.proxy, o = le(e) ? e.includes(".") ? fi(s, e) : () => s[e] : e.bind(s, s);
  let r;
  k(t) ? r = t : (r = t.handler, n = t);
  const i = Tn(this), l = ai(o, r.bind(s), n);
  return i(), l;
}
function fi(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let o = 0; o < n.length && s; o++)
      s = s[n[o]];
    return s;
  };
}
const qc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Oe(t)}Modifiers`] || e[`${rt(t)}Modifiers`];
function Gc(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || X;
  {
    const {
      emitsOptions: u,
      propsOptions: [f]
    } = e;
    if (u)
      if (!(t in u))
        (!f || !(Ot(Oe(t)) in f)) && x(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Ot(Oe(t))}" prop.`
        );
      else {
        const h = u[t];
        k(h) && (h(...n) || x(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let o = n;
  const r = t.startsWith("update:"), i = r && qc(s, t.slice(7));
  i && (i.trim && (o = n.map((u) => le(u) ? u.trim() : u)), i.number && (o = n.map(Pi))), Gl(e, t, o);
  {
    const u = t.toLowerCase();
    u !== t && s[Ot(u)] && x(
      `Event "${u}" is emitted in component ${ls(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${rt(
        t
      )}" instead of "${t}".`
    );
  }
  let l, a = s[l = Ot(t)] || // also try camelCase event handler (#2249)
  s[l = Ot(Oe(t))];
  !a && r && (a = s[l = Ot(rt(t))]), a && He(
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
    e.emitted[l] = !0, He(
      p,
      e,
      6,
      o
    );
  }
}
function ui(e, t, n = !1) {
  const s = t.emitsCache, o = s.get(e);
  if (o !== void 0)
    return o;
  const r = e.emits;
  let i = {}, l = !1;
  if (!k(e)) {
    const a = (p) => {
      const u = ui(p, t, !0);
      u && (l = !0, ae(i, u));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !r && !l ? (Z(e) && s.set(e, null), null) : (P(r) ? r.forEach((a) => i[a] = null) : ae(i, r), Z(e) && s.set(e, i), i);
}
function rs(e, t) {
  return !e || !yn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), W(e, t[0].toLowerCase() + t.slice(1)) || W(e, rt(t)) || W(e, t));
}
let Ds = !1;
function Jn() {
  Ds = !0;
}
function bs(e) {
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
    renderCache: u,
    props: f,
    data: h,
    setupState: m,
    ctx: E,
    inheritAttrs: I
  } = e, ee = Wn(e);
  let V, J;
  Ds = !1;
  try {
    if (n.shapeFlag & 4) {
      const A = o || s, K = mt.NODE_ENV !== "production" && m.__isScriptSetup ? new Proxy(A, {
        get(fe, Y, F) {
          return x(
            `Property '${String(
              Y
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(fe, Y, F);
        }
      }) : A;
      V = De(
        p.call(
          K,
          A,
          u,
          mt.NODE_ENV !== "production" ? Je(f) : f,
          m,
          h,
          E
        )
      ), J = l;
    } else {
      const A = t;
      mt.NODE_ENV !== "production" && l === f && Jn(), V = De(
        A.length > 1 ? A(
          mt.NODE_ENV !== "production" ? Je(f) : f,
          mt.NODE_ENV !== "production" ? {
            get attrs() {
              return Jn(), Je(l);
            },
            slots: i,
            emit: a
          } : { attrs: l, slots: i, emit: a }
        ) : A(
          mt.NODE_ENV !== "production" ? Je(f) : f,
          null
        )
      ), J = t.props ? l : Jc(l);
    }
  } catch (A) {
    ln.length = 0, wn(A, e, 1), V = re(ue);
  }
  let L = V, ce;
  if (V.patchFlag > 0 && V.patchFlag & 2048 && ([L, ce] = di(V)), J && I !== !1) {
    const A = Object.keys(J), { shapeFlag: K } = L;
    if (A.length) {
      if (K & 7)
        r && A.some(jn) && (J = Yc(
          J,
          r
        )), L = ze(L, J, !1, !0);
      else if (!Ds && L.type !== ue) {
        const fe = Object.keys(l), Y = [], F = [];
        for (let B = 0, q = fe.length; B < q; B++) {
          const M = fe[B];
          yn(M) ? jn(M) || Y.push(M[2].toLowerCase() + M.slice(3)) : F.push(M);
        }
        F.length && x(
          `Extraneous non-props attributes (${F.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
        ), Y.length && x(
          `Extraneous non-emits event listeners (${Y.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (Mo(L) || x(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), L = ze(L, null, !1, !0), L.dirs = L.dirs ? L.dirs.concat(n.dirs) : n.dirs), n.transition && (Mo(L) || x(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), hn(L, n.transition)), ce ? ce(L) : V = L, Wn(ee), V;
}
const di = (e) => {
  const t = e.children, n = e.dynamicChildren, s = so(t, !1);
  if (s) {
    if (s.patchFlag > 0 && s.patchFlag & 2048)
      return di(s);
  } else return [e, void 0];
  const o = t.indexOf(s), r = n ? n.indexOf(s) : -1, i = (l) => {
    t[o] = l, n && (r > -1 ? n[r] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [De(s), i];
};
function so(e, t = !0) {
  let n;
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (Dt(o)) {
      if (o.type !== ue || o.children === "v-if") {
        if (n)
          return;
        if (n = o, t && n.patchFlag > 0 && n.patchFlag & 2048)
          return so(n.children);
      }
    } else
      return;
  }
  return n;
}
const Jc = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || yn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Yc = (e, t) => {
  const n = {};
  for (const s in e)
    (!jn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
}, Mo = (e) => e.shapeFlag & 7 || e.type === ue;
function zc(e, t, n) {
  const { props: s, children: o, component: r } = e, { props: i, children: l, patchFlag: a } = t, p = r.emitsOptions;
  if ((o || l) && Ye || t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return s ? Ao(s, i, p) : !!i;
    if (a & 8) {
      const u = t.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        const h = u[f];
        if (i[h] !== s[h] && !rs(p, h))
          return !0;
      }
    }
  } else
    return (o || l) && (!l || !l.$stable) ? !0 : s === i ? !1 : s ? i ? Ao(s, i, p) : !0 : !!i;
  return !1;
}
function Ao(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < s.length; o++) {
    const r = s[o];
    if (t[r] !== e[r] && !rs(n, r))
      return !0;
  }
  return !1;
}
function Qc({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const pi = (e) => e.__isSuspense;
function Xc(e, t) {
  t && t.pendingBranch ? P(e) ? t.effects.push(...e) : t.effects.push(e) : $r(e);
}
const we = Symbol.for("v-fgt"), Sn = Symbol.for("v-txt"), ue = Symbol.for("v-cmt"), Fn = Symbol.for("v-stc"), ln = [];
let Re = null;
function G(e = !1) {
  ln.push(Re = e ? null : []);
}
function Zc() {
  ln.pop(), Re = ln[ln.length - 1] || null;
}
let gn = 1;
function Io(e) {
  gn += e, e < 0 && Re && (Re.hasOnce = !0);
}
function hi(e) {
  return e.dynamicChildren = gn > 0 ? Re || Lt : null, Zc(), gn > 0 && Re && Re.push(e), e;
}
function ie(e, t, n, s, o, r) {
  return hi(
    se(
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
function Ut(e, t, n, s, o) {
  return hi(
    re(
      e,
      t,
      n,
      s,
      o,
      !0
    )
  );
}
function Dt(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Et(e, t) {
  if (t.shapeFlag & 6 && e.component) {
    const n = Pn.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const ea = (...e) => ta(
  ...e
), gi = ({ key: e }) => e ?? null, Dn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? le(e) || de(e) || k(e) ? { i: he, r: e, k: t, f: !!n } : e : null);
function se(e, t = null, n = null, s = 0, o = null, r = e === we ? 0 : 1, i = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && gi(t),
    ref: t && Dn(t),
    scopeId: Nr,
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
    ctx: he
  };
  return l ? (oo(a, n), r & 128 && e.normalize(a)) : n && (a.shapeFlag |= le(n) ? 8 : 16), a.key !== a.key && x("VNode created with invalid key (NaN). VNode type:", a.type), gn > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Re && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Re.push(a), a;
}
const re = ea;
function ta(e, t = null, n = null, s = 0, o = null, r = !1) {
  if ((!e || e === qr) && (e || x(`Invalid vnode type when creating vnode: ${e}.`), e = ue), Dt(e)) {
    const l = ze(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && oo(l, n), gn > 0 && !r && Re && (l.shapeFlag & 6 ? Re[Re.indexOf(e)] = l : Re.push(l)), l.patchFlag = -2, l;
  }
  if (_i(e) && (e = e.__vccOpts), t) {
    t = na(t);
    let { class: l, style: a } = t;
    l && !le(l) && (t.class = _n(l)), Z(a) && (un(a) && !P(a) && (a = ae({}, a)), t.style = Zn(a));
  }
  const i = le(e) ? 1 : pi(e) ? 128 : Dr(e) ? 64 : Z(e) ? 4 : k(e) ? 2 : 0;
  return i & 4 && un(e) && (e = H(e), x(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), se(
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
function na(e) {
  return e ? un(e) || ti(e) ? ae({}, e) : e : null;
}
function ze(e, t, n = !1, s = !1) {
  const { props: o, ref: r, patchFlag: i, children: l, transition: a } = e, p = t ? oa(o || {}, t) : o, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: p,
    key: p && gi(p),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? P(r) ? r.concat(Dn(t)) : [r, Dn(t)] : Dn(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: i === -1 && P(l) ? l.map(mi) : l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== we ? i === -1 ? 16 : i | 16 : i,
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
    ssContent: e.ssContent && ze(e.ssContent),
    ssFallback: e.ssFallback && ze(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && s && hn(
    u,
    a.clone(u)
  ), u;
}
function mi(e) {
  const t = ze(e);
  return P(e.children) && (t.children = e.children.map(mi)), t;
}
function sa(e = " ", t = 0) {
  return re(Sn, null, e, t);
}
function st(e = "", t = !1) {
  return t ? (G(), Ut(ue, null, e)) : re(ue, null, e);
}
function De(e) {
  return e == null || typeof e == "boolean" ? re(ue) : P(e) ? re(
    we,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Dt(e) ? bt(e) : re(Sn, null, String(e));
}
function bt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : ze(e);
}
function oo(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (P(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), oo(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !ti(t) ? t._ctx = he : o === 3 && he && (he.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else k(t) ? (t = { default: t, _ctx: he }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [sa(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function oa(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const o in s)
      if (o === "class")
        t.class !== s.class && (t.class = _n([t.class, s.class]));
      else if (o === "style")
        t.style = Zn([t.style, s.style]);
      else if (yn(o)) {
        const r = t[o], i = s[o];
        i && r !== i && !(P(r) && r.includes(i)) && (t[o] = r ? [].concat(r, i) : i);
      } else o !== "" && (t[o] = s[o]);
  }
  return t;
}
function We(e, t, n, s = null) {
  He(e, t, 7, [
    n,
    s
  ]);
}
const ra = Xr();
let ia = 0;
function la(e, t, n) {
  const s = e.type, o = (t ? t.appContext : e.appContext) || ra, r = {
    uid: ia++,
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
    scope: new Ji(
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
    propsOptions: si(s, o),
    emitsOptions: ui(s, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: X,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: X,
    data: X,
    props: X,
    attrs: X,
    slots: X,
    refs: X,
    setupState: X,
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
  return r.ctx = pc(r), r.root = t ? t.root : r, r.emit = Gc.bind(null, r), e.ce && e.ce(r), r;
}
let ge = null;
const vi = () => ge || he;
let Yn, ks;
{
  const e = bn(), t = (n, s) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(s), (r) => {
      o.length > 1 ? o.forEach((i) => i(r)) : o[0](r);
    };
  };
  Yn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => ge = n
  ), ks = t(
    "__VUE_SSR_SETTERS__",
    (n) => mn = n
  );
}
const Tn = (e) => {
  const t = ge;
  return Yn(e), e.scope.on(), () => {
    e.scope.off(), Yn(t);
  };
}, Ro = () => {
  ge && ge.scope.off(), Yn(null);
}, ca = /* @__PURE__ */ lt("slot,component");
function js(e, { isNativeTag: t }) {
  (ca(e) || t(e)) && x(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function yi(e) {
  return e.vnode.shapeFlag & 4;
}
let mn = !1;
function aa(e, t = !1, n = !1) {
  t && ks(t);
  const { props: s, children: o } = e.vnode, r = yi(e);
  Tc(e, s, r, t), Dc(e, o, n);
  const i = r ? fa(e, t) : void 0;
  return t && ks(!1), i;
}
function fa(e, t) {
  var n;
  const s = e.type;
  {
    if (s.name && js(s.name, e.appContext.config), s.components) {
      const r = Object.keys(s.components);
      for (let i = 0; i < r.length; i++)
        js(r[i], e.appContext.config);
    }
    if (s.directives) {
      const r = Object.keys(s.directives);
      for (let i = 0; i < r.length; i++)
        Fr(r[i]);
    }
    s.compilerOptions && ua() && x(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, zr), hc(e);
  const { setup: o } = s;
  if (o) {
    at();
    const r = e.setupContext = o.length > 1 ? ha(e) : null, i = Tn(e), l = Wt(
      o,
      e,
      0,
      [
        Je(e.props),
        r
      ]
    ), a = Us(l);
    if (ft(), i(), (a || e.sp) && !Vt(e) && Br(e), a) {
      if (l.then(Ro, Ro), t)
        return l.then((p) => {
          Po(e, p, t);
        }).catch((p) => {
          wn(p, e, 0);
        });
      if (e.asyncDep = l, !e.suspense) {
        const p = (n = s.name) != null ? n : "Anonymous";
        x(
          `Component <${p}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Po(e, l, t);
  } else
    bi(e, t);
}
function Po(e, t, n) {
  k(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Z(t) ? (Dt(t) && x(
    "setup() should not return VNodes directly - return a render function instead."
  ), e.devtoolsRawSetupState = t, e.setupState = Cr(t), gc(e)) : t !== void 0 && x(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), bi(e, n);
}
let Ls;
const ua = () => !Ls;
function bi(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && Ls && !s.render) {
      const o = s.template || to(e).template;
      if (o) {
        Xe(e, "compile");
        const { isCustomElement: r, compilerOptions: i } = e.appContext.config, { delimiters: l, compilerOptions: a } = s, p = ae(
          ae(
            {
              isCustomElement: r,
              delimiters: l
            },
            i
          ),
          a
        );
        s.render = Ls(o, p), Ze(e, "compile");
      }
    }
    e.render = s.render || xe;
  }
  {
    const o = Tn(e);
    at();
    try {
      vc(e);
    } finally {
      ft(), o();
    }
  }
  !s.render && e.render === xe && !t && (s.template ? x(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : x("Component is missing template or render function: ", s));
}
const da = {
  get(e, t) {
    return Jn(), me(e, "get", ""), e[t];
  },
  set() {
    return x("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return x("setupContext.attrs is readonly."), !1;
  }
};
function pa(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return me(e, "get", "$slots"), t[n];
    }
  });
}
function ha(e) {
  const t = (n) => {
    if (e.exposed && x("expose() should be called only once per setup()."), n != null) {
      let s = typeof n;
      s === "object" && (P(n) ? s = "array" : de(n) && (s = "ref")), s !== "object" && x(
        `expose() should be passed a plain object, received ${s}.`
      );
    }
    e.exposed = n || {};
  };
  {
    let n, s;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, da));
      },
      get slots() {
        return s || (s = pa(e));
      },
      get emit() {
        return (o, ...r) => e.emit(o, ...r);
      },
      expose: t
    });
  }
}
function is(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Cr(ml(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Pt)
        return Pt[n](e);
    },
    has(t, n) {
      return n in t || n in Pt;
    }
  })) : e.proxy;
}
const ga = /(?:^|[-_])(\w)/g, ma = (e) => e.replace(ga, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function ro(e, t = !0) {
  return k(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function ls(e, t, n = !1) {
  let s = ro(t);
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
  return s ? ma(s) : n ? "App" : "Anonymous";
}
function _i(e) {
  return k(e) && "__vccOpts" in e;
}
const ke = (e, t) => {
  const n = Sl(e, t, mn);
  {
    const s = vi();
    s && s.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function va(e, t, n) {
  const s = arguments.length;
  return s === 2 ? Z(t) && !P(t) ? Dt(t) ? re(e, null, [t]) : re(e, t) : re(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && Dt(n) && (n = [n]), re(e, t, n));
}
function ya() {
  if (typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, s = { style: "color:#eb2f96" }, o = {
    __vue_custom_formatter: !0,
    header(f) {
      return Z(f) ? f.__isVue ? ["div", e, "VueInstance"] : de(f) ? [
        "div",
        {},
        ["span", e, u(f)],
        "<",
        // avoid debugger accessing value affecting behavior
        l("_value" in f ? f._value : f),
        ">"
      ] : It(f) ? [
        "div",
        {},
        ["span", e, $e(f) ? "ShallowReactive" : "Reactive"],
        "<",
        l(f),
        `>${it(f) ? " (readonly)" : ""}`
      ] : it(f) ? [
        "div",
        {},
        ["span", e, $e(f) ? "ShallowReadonly" : "Readonly"],
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
    f.type.props && f.props && h.push(i("props", H(f.props))), f.setupState !== X && h.push(i("setup", f.setupState)), f.data !== X && h.push(i("data", H(f.data)));
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
    return h = ae({}, h), Object.keys(h).length ? [
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
    return typeof f == "number" ? ["span", t, f] : typeof f == "string" ? ["span", n, JSON.stringify(f)] : typeof f == "boolean" ? ["span", s, f] : Z(f) ? ["object", { object: h ? H(f) : f }] : ["span", n, String(f)];
  }
  function a(f, h) {
    const m = f.type;
    if (k(m))
      return;
    const E = {};
    for (const I in f.ctx)
      p(m, I, h) && (E[I] = f.ctx[I]);
    return E;
  }
  function p(f, h, m) {
    const E = f[m];
    if (P(E) && E.includes(h) || Z(E) && h in E || f.extends && p(f.extends, h, m) || f.mixins && f.mixins.some((I) => p(I, h, m)))
      return !0;
  }
  function u(f) {
    return $e(f) ? "ShallowRef" : f.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
const No = "3.5.12", ot = x;
let Hs;
const Fo = typeof window < "u" && window.trustedTypes;
if (Fo)
  try {
    Hs = /* @__PURE__ */ Fo.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    ot(`Error creating trusted types policy: ${e}`);
  }
const wi = Hs ? (e) => Hs.createHTML(e) : (e) => e, ba = "http://www.w3.org/2000/svg", _a = "http://www.w3.org/1998/Math/MathML", et = typeof document < "u" ? document : null, Do = et && /* @__PURE__ */ et.createElement("template"), wa = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const o = t === "svg" ? et.createElementNS(ba, e) : t === "mathml" ? et.createElementNS(_a, e) : n ? et.createElement(e, { is: n }) : et.createElement(e);
    return e === "select" && s && s.multiple != null && o.setAttribute("multiple", s.multiple), o;
  },
  createText: (e) => et.createTextNode(e),
  createComment: (e) => et.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => et.querySelector(e),
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
      Do.innerHTML = wi(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Do.content;
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
}, ht = "transition", Qt = "animation", vn = Symbol("_vtc"), xi = {
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
}, xa = /* @__PURE__ */ ae(
  {},
  kr,
  xi
), Ca = (e) => (e.displayName = "Transition", e.props = xa, e), ko = /* @__PURE__ */ Ca(
  (e, { slots: t }) => va(Xl, Sa(e), t)
), St = (e, t = []) => {
  P(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, jo = (e) => e ? P(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Sa(e) {
  const t = {};
  for (const M in e)
    M in xi || (t[M] = e[M]);
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
    appearToClass: u = l,
    leaveFromClass: f = `${n}-leave-from`,
    leaveActiveClass: h = `${n}-leave-active`,
    leaveToClass: m = `${n}-leave-to`
  } = e, E = Ta(o), I = E && E[0], ee = E && E[1], {
    onBeforeEnter: V,
    onEnter: J,
    onEnterCancelled: L,
    onLeave: ce,
    onLeaveCancelled: A,
    onBeforeAppear: K = V,
    onAppear: fe = J,
    onAppearCancelled: Y = L
  } = t, F = (M, ne, pe) => {
    Tt(M, ne ? u : l), Tt(M, ne ? p : i), pe && pe();
  }, B = (M, ne) => {
    M._isLeaving = !1, Tt(M, f), Tt(M, m), Tt(M, h), ne && ne();
  }, q = (M) => (ne, pe) => {
    const ve = M ? fe : J, O = () => F(ne, M, pe);
    St(ve, [ne, O]), Lo(() => {
      Tt(ne, M ? a : r), gt(ne, M ? u : l), jo(ve) || Ho(ne, s, I, O);
    });
  };
  return ae(t, {
    onBeforeEnter(M) {
      St(V, [M]), gt(M, r), gt(M, i);
    },
    onBeforeAppear(M) {
      St(K, [M]), gt(M, a), gt(M, p);
    },
    onEnter: q(!1),
    onAppear: q(!0),
    onLeave(M, ne) {
      M._isLeaving = !0;
      const pe = () => B(M, ne);
      gt(M, f), gt(M, h), Ea(), Lo(() => {
        M._isLeaving && (Tt(M, f), gt(M, m), jo(ce) || Ho(M, s, ee, pe));
      }), St(ce, [M, pe]);
    },
    onEnterCancelled(M) {
      F(M, !1), St(L, [M]);
    },
    onAppearCancelled(M) {
      F(M, !0), St(Y, [M]);
    },
    onLeaveCancelled(M) {
      B(M), St(A, [M]);
    }
  });
}
function Ta(e) {
  if (e == null)
    return null;
  if (Z(e))
    return [_s(e.enter), _s(e.leave)];
  {
    const t = _s(e);
    return [t, t];
  }
}
function _s(e) {
  const t = Ni(e);
  return Il(t, "<transition> explicit duration"), t;
}
function gt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[vn] || (e[vn] = /* @__PURE__ */ new Set())).add(t);
}
function Tt(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[vn];
  n && (n.delete(t), n.size || (e[vn] = void 0));
}
function Lo(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Oa = 0;
function Ho(e, t, n, s) {
  const o = e._endId = ++Oa, r = () => {
    o === e._endId && s();
  };
  if (n != null)
    return setTimeout(r, n);
  const { type: i, timeout: l, propCount: a } = $a(e, t);
  if (!i)
    return s();
  const p = i + "end";
  let u = 0;
  const f = () => {
    e.removeEventListener(p, h), r();
  }, h = (m) => {
    m.target === e && ++u >= a && f();
  };
  setTimeout(() => {
    u < a && f();
  }, l + 1), e.addEventListener(p, h);
}
function $a(e, t) {
  const n = window.getComputedStyle(e), s = (E) => (n[E] || "").split(", "), o = s(`${ht}Delay`), r = s(`${ht}Duration`), i = Vo(o, r), l = s(`${Qt}Delay`), a = s(`${Qt}Duration`), p = Vo(l, a);
  let u = null, f = 0, h = 0;
  t === ht ? i > 0 && (u = ht, f = i, h = r.length) : t === Qt ? p > 0 && (u = Qt, f = p, h = a.length) : (f = Math.max(i, p), u = f > 0 ? i > p ? ht : Qt : null, h = u ? u === ht ? r.length : a.length : 0);
  const m = u === ht && /\b(transform|all)(,|$)/.test(
    s(`${ht}Property`).toString()
  );
  return {
    type: u,
    timeout: f,
    propCount: h,
    hasTransform: m
  };
}
function Vo(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => Bo(n) + Bo(e[s])));
}
function Bo(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Ea() {
  return document.body.offsetHeight;
}
function Ma(e, t, n) {
  const s = e[vn];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const zn = Symbol("_vod"), Ci = Symbol("_vsh"), Si = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[zn] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Xt(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: s }) {
    !t != !n && (s ? t ? (s.beforeEnter(e), Xt(e, !0), s.enter(e)) : s.leave(e, () => {
      Xt(e, !1);
    }) : Xt(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Xt(e, t);
  }
};
Si.name = "show";
function Xt(e, t) {
  e.style.display = t ? e[zn] : "none", e[Ci] = !t;
}
const Aa = Symbol("CSS_VAR_TEXT"), Ia = /(^|;)\s*display\s*:/;
function Ra(e, t, n) {
  const s = e.style, o = le(n);
  let r = !1;
  if (n && !o) {
    if (t)
      if (le(t))
        for (const i of t.split(";")) {
          const l = i.slice(0, i.indexOf(":")).trim();
          n[l] == null && kn(s, l, "");
        }
      else
        for (const i in t)
          n[i] == null && kn(s, i, "");
    for (const i in n)
      i === "display" && (r = !0), kn(s, i, n[i]);
  } else if (o) {
    if (t !== n) {
      const i = s[Aa];
      i && (n += ";" + i), s.cssText = n, r = Ia.test(n);
    }
  } else t && e.removeAttribute("style");
  zn in e && (e[zn] = r ? s.display : "", e[Ci] && (s.display = "none"));
}
const Pa = /[^\\];\s*$/, Uo = /\s*!important$/;
function kn(e, t, n) {
  if (P(n))
    n.forEach((s) => kn(e, t, s));
  else if (n == null && (n = ""), Pa.test(n) && ot(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = Na(e, t);
    Uo.test(n) ? e.setProperty(
      rt(s),
      n.replace(Uo, ""),
      "important"
    ) : e[s] = n;
  }
}
const Wo = ["Webkit", "Moz", "ms"], ws = {};
function Na(e, t) {
  const n = ws[t];
  if (n)
    return n;
  let s = Oe(t);
  if (s !== "filter" && s in e)
    return ws[t] = s;
  s = Nt(s);
  for (let o = 0; o < Wo.length; o++) {
    const r = Wo[o] + s;
    if (r in e)
      return ws[t] = r;
  }
  return t;
}
const Ko = "http://www.w3.org/1999/xlink";
function qo(e, t, n, s, o, r = qi(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ko, t.slice(6, t.length)) : e.setAttributeNS(Ko, t, n) : n == null || r && !sr(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : ct(n) ? String(n) : n
  );
}
function Go(e, t, n, s, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? wi(n) : n);
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
    l === "boolean" ? n = sr(n) : n == null && l === "string" ? (n = "", i = !0) : l === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch (l) {
    i || ot(
      `Failed setting prop "${t}" on <${r.toLowerCase()}>: value ${n} is invalid.`,
      l
    );
  }
  i && e.removeAttribute(o || t);
}
function Fa(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Da(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Jo = Symbol("_vei");
function ka(e, t, n, s, o = null) {
  const r = e[Jo] || (e[Jo] = {}), i = r[t];
  if (s && i)
    i.value = zo(s, t);
  else {
    const [l, a] = ja(t);
    if (s) {
      const p = r[t] = Va(
        zo(s, t),
        o
      );
      Fa(e, l, p, a);
    } else i && (Da(e, l, i, a), r[t] = void 0);
  }
}
const Yo = /(?:Once|Passive|Capture)$/;
function ja(e) {
  let t;
  if (Yo.test(e)) {
    t = {};
    let s;
    for (; s = e.match(Yo); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : rt(e.slice(2)), t];
}
let xs = 0;
const La = /* @__PURE__ */ Promise.resolve(), Ha = () => xs || (La.then(() => xs = 0), xs = Date.now());
function Va(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    He(
      Ba(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = Ha(), n;
}
function zo(e, t) {
  return k(e) || P(e) ? e : (ot(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), xe);
}
function Ba(e, t) {
  if (P(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (s) => (o) => !o._stopped && s && s(o)
    );
  } else
    return t;
}
const Qo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Ua = (e, t, n, s, o, r) => {
  const i = o === "svg";
  t === "class" ? Ma(e, s, i) : t === "style" ? Ra(e, n, s) : yn(t) ? jn(t) || ka(e, t, n, s, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Wa(e, t, s, i)) ? (Go(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && qo(e, t, s, i, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !le(s)) ? Go(e, Oe(t), s, r, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), qo(e, t, s, i));
};
function Wa(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Qo(t) && k(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return Qo(t) && le(n) ? !1 : t in e;
}
const Ka = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, qa = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), s = t.join(".");
  return n[s] || (n[s] = (o) => {
    if (!("key" in o))
      return;
    const r = rt(o.key);
    if (t.some(
      (i) => i === r || Ka[i] === r
    ))
      return e(o);
  });
}, Ga = /* @__PURE__ */ ae({ patchProp: Ua }, wa);
let Xo;
function Ja() {
  return Xo || (Xo = Lc(Ga));
}
const Ya = (...e) => {
  const t = Ja().createApp(...e);
  Qa(t), Xa(t);
  const { mount: n } = t;
  return t.mount = (s) => {
    const o = Za(s);
    if (!o) return;
    const r = t._component;
    !k(r) && !r.render && !r.template && (r.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const i = n(o, !1, za(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), i;
  }, t;
};
function za(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Qa(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => Bi(t) || Ui(t) || Wi(t),
    writable: !1
  });
}
function Xa(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        ot(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, s = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return ot(s), n;
      },
      set() {
        ot(s);
      }
    });
  }
}
function Za(e) {
  if (le(e)) {
    const t = document.querySelector(e);
    return t || ot(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && ot(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
function ef() {
  ya();
}
ef();
const Vs = (e = 16) => {
  let t = "";
  const n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", s = n.length;
  let o = 0;
  for (; o < e; )
    t += n.charAt(Math.floor(Math.random() * s)), o += 1;
  return t;
}, tf = {
  isQuestion: !0,
  onValidate({ context: e, answer: t, script: n }) {
    if (t.content.includes("@") == !1) {
      const s = {
        type: "text",
        position: "left",
        content: "Your email seem to be invalid",
        ...n.errorMessage
      };
      return e.addConversationMessage(s), !1;
    }
    return !0;
  }
}, nf = {
  isQuestion: !0
}, sf = {
  isQuestion: !1
}, of = {
  isQuestion: !0,
  onValidate({ context: e, answer: t, script: n }) {
    var r;
    const s = ((r = t.content) == null ? void 0 : r.value) || t.content;
    if (n.options.map((i) => i.value || i).includes(s) == !1) {
      const i = {
        type: "text",
        position: "left",
        content: "Your answer seem to be invalid",
        ...n.errorMessage
      };
      return e.addConversationMessage(i), !1;
    }
    return !0;
  }
}, io = {
  text: sf,
  email: tf,
  question: nf,
  select: of
}, tn = (e) => {
  const t = e.type, n = io[t] || null;
  return n ? !!(n != null && n.isQuestion) : !1;
};
async function Zo(e, t, n, s) {
  var l;
  const o = { id: e }, r = { id: e };
  if (n && (n != null && n.length))
    for (let a = 0; a < n.length; a++) {
      const p = n[a];
      o[p.name] = p.value;
    }
  for (let a = 0; a < t.length; a++) {
    const p = t[a];
    tn(p) && (o[p.name] = ((l = p.answer.content) == null ? void 0 : l.value) || p.answer.content);
  }
  const i = {
    command: "UPDATE_OR_CREATE_COMMAND",
    sheet_title: s.sheet || "default",
    data: o,
    where: r
  };
  try {
    const a = await fetch(s.url, {
      method: "POST",
      body: JSON.stringify(i)
    });
    if (!a.ok)
      throw new Error(`Error: ${a.statusText}`);
  } catch (a) {
    console.error("Error saving data:", a);
  }
}
function rf({ app: e, options: t, metadata: n }) {
  var r;
  const s = (r = t.plugins) == null ? void 0 : r.googleSheet;
  if (!s)
    return;
  let o = e.initSessionId;
  e.onChangedSession((i) => {
    o = i;
  }), e.onFinished(({ scripts: i }) => {
    Zo(o, i, n, s);
  }), e.onAnswered((i) => {
    Zo(o, [i], n, s);
  });
}
function lf(e) {
  rf(e);
}
const cf = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
};
function af(e, t) {
  return G(), ie("svg", cf, t[0] || (t[0] = [
    se("path", { d: "m2 21 21-9L2 3v7l15 2-15 2z" }, null, -1)
  ]));
}
const ff = { render: af }, dt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, uf = { class: "--fc-composer-container" }, df = ["value", "placeholder"], pf = ["value", "placeholder"], hf = {
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
    const n = e, s = t, o = be(), r = ke(
      () => {
        var p;
        return ((p = n.options) == null ? void 0 : p.placeholder) || "Type a message";
      }
    ), i = () => {
      s("submit");
    }, l = () => {
      s("submit");
    }, a = (p) => {
      const u = p.target.value;
      s("update:message", u);
    };
    return rn(
      () => n.message,
      () => {
        const p = o.value;
        p.style.height = "40px", p.style.height = p.scrollHeight + "px";
      }
    ), (p, u) => (G(), ie("div", uf, [
      e.longMessage ? (G(), ie("textarea", {
        key: 0,
        value: e.message,
        class: "--fc-composer-input",
        placeholder: r.value,
        ref_key: "inputRef",
        ref: o,
        onInput: a
      }, null, 40, df)) : (G(), ie("input", {
        key: 1,
        value: e.message,
        ref_key: "inputRef",
        ref: o,
        class: "--fc-composer-input",
        placeholder: r.value,
        onInput: a,
        onKeydown: qa(l, ["enter"])
      }, null, 40, pf)),
      se("div", null, [
        se("button", {
          class: "--fc-composer-submit-button",
          onClick: i
        }, [
          re(tt(ff), { class: "--fc-icon" })
        ])
      ])
    ]));
  }
}, gf = /* @__PURE__ */ dt(hf, [["__scopeId", "data-v-c689b31b"]]), mf = {
  __name: "ChatConversation",
  setup(e, { expose: t }) {
    const n = be(), s = () => {
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
    }), (r, i) => (G(), ie("div", {
      class: "--fc-conversation-container",
      ref_key: "conversationMessagesRef",
      ref: n,
      onScroll: s
    }, [
      i[0] || (i[0] = se("div", { class: "--fc-conversation-padding" }, null, -1)),
      Jr(r.$slots, "default", {}, void 0)
    ], 544));
  }
}, vf = /* @__PURE__ */ dt(mf, [["__scopeId", "data-v-068bd6b8"]]), yf = { class: "--fc-message-content-inner" }, bf = { class: "--fc-message-text" }, _f = {
  key: 0,
  class: "--fc-message-option-list"
}, wf = ["onClick"], xf = {
  __name: "CommonMessage",
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
      var l;
      return G(), ie("div", yf, [
        se("div", bf, cn(((l = e.message.content) == null ? void 0 : l.label) || e.message.content), 1),
        e.message.options ? (G(), ie("div", _f, [
          (G(!0), ie(we, null, Gr(e.message.options, (a, p) => (G(), ie("div", {
            key: p,
            class: "--fc-message-option-item",
            onClick: (u) => o(a, p)
          }, cn((a == null ? void 0 : a.label) || a), 9, wf))), 128))
        ])) : st("", !0)
      ]);
    };
  }
}, Cf = /* @__PURE__ */ dt(xf, [["__scopeId", "data-v-a2c7fb8f"]]), Sf = { class: "--fc-message-container" }, Tf = {
  key: 0,
  class: "--fc-message-user"
}, Of = { class: "--fc-message-avatar" }, $f = ["src"], Ef = { class: "--fc-message-content-container" }, Mf = {
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
    const n = e, s = t, o = ke(() => {
      var i;
      return {
        component: ((i = io[n.message.type]) == null ? void 0 : i.component) || Cf,
        ...n.message
      };
    }), r = (i) => {
      s("select-option", i);
    };
    return (i, l) => {
      var a, p, u, f;
      return G(), ie("div", {
        class: _n({
          "--fc-message-agent-user": o.value.userRole == "agent",
          "--fc-message-host-user": o.value.userRole == "host"
        })
      }, [
        se("div", Sf, [
          o.value.userRole == "host" ? (G(), ie("div", Tf, [
            se("div", Of, [
              (p = (a = e.options) == null ? void 0 : a.hostUser) != null && p.avatarUrl ? (G(), ie("img", {
                key: 0,
                src: (f = (u = e.options) == null ? void 0 : u.hostUser) == null ? void 0 : f.avatarUrl
              }, null, 8, $f)) : st("", !0)
            ])
          ])) : st("", !0),
          se("div", Ef, [
            o.value.component ? (G(), Ut(uc(o.value.component), {
              key: 0,
              message: o.value,
              options: e.options,
              onSelectOption: r
            }, null, 40, ["message", "options"])) : st("", !0)
          ])
        ])
      ], 2);
    };
  }
}, Ti = /* @__PURE__ */ dt(Mf, [["__scopeId", "data-v-685c3cb6"]]), Af = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
};
function If(e, t) {
  return G(), ie("svg", Af, t[0] || (t[0] = [
    se("path", { d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }, null, -1)
  ]));
}
const Rf = { render: If }, Pf = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
};
function Nf(e, t) {
  return G(), ie("svg", Pf, t[0] || (t[0] = [
    se("path", { d: "M12.5 8c-2.65 0-5.05 1-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8" }, null, -1)
  ]));
}
const Ff = { render: Nf }, Df = { class: "--fc-header-container" }, kf = { class: "--fc-header-user" }, jf = { class: "--fc-user-avatar" }, Lf = ["src"], Hf = { class: "--fc-user-name" }, Vf = { class: "--fc-header-buttons" }, Bf = { class: "--fc-close-button" }, Uf = {
  __name: "ChatHeader",
  props: {
    options: {
      type: Object,
      default: () => {
      }
    }
  },
  emits: ["click-reset-button", "click-close-button"],
  setup(e, { emit: t }) {
    const n = t;
    return (s, o) => {
      var r, i, l, a, p, u;
      return G(), ie("div", Df, [
        se("div", kf, [
          se("div", jf, [
            (i = (r = e.options) == null ? void 0 : r.hostUser) != null && i.avatarUrl ? (G(), ie("img", {
              key: 0,
              src: (a = (l = e.options) == null ? void 0 : l.hostUser) == null ? void 0 : a.avatarUrl
            }, null, 8, Lf)) : st("", !0)
          ]),
          se("div", Hf, cn((u = (p = e.options) == null ? void 0 : p.hostUser) == null ? void 0 : u.name), 1)
        ]),
        se("div", Vf, [
          se("button", {
            class: "--fc-reset-button",
            onClick: o[0] || (o[0] = (f) => n("click-reset-button"))
          }, [
            re(tt(Ff), { class: "--fc-icon" })
          ]),
          se("button", Bf, [
            re(tt(Rf), {
              class: "--fc-icon",
              onClick: o[1] || (o[1] = (f) => n("click-close-button"))
            })
          ])
        ])
      ]);
    };
  }
}, Wf = /* @__PURE__ */ dt(Uf, [["__scopeId", "data-v-bee5c36b"]]), Kf = {
  key: 0,
  class: "--fc-modal-backdrop"
}, qf = {
  __name: "TheModal",
  props: {
    open: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    return (t, n) => e.open ? (G(), ie("div", Kf, [
      Jr(t.$slots, "default", {}, void 0)
    ])) : st("", !0);
  }
}, Gf = /* @__PURE__ */ dt(qf, [["__scopeId", "data-v-4baeafde"]]), Jf = {
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
    return (r, i) => (G(), Ut(Gf, { open: e.open }, {
      default: pn(() => [
        se("div", { class: "--fc-modal-container" }, [
          i[0] || (i[0] = se("div", { class: "--fc-modal-title" }, " Are you sure to restart the chat? ", -1)),
          se("div", { class: "--fc-modal-actions" }, [
            se("button", {
              class: "--fc-negative-button",
              onClick: s
            }, " Yes "),
            se("button", {
              class: "--fc-default-button",
              onClick: o
            }, " No ")
          ])
        ])
      ]),
      _: 1
    }, 8, ["open"]));
  }
}, Yf = { class: "--fc-body" }, zf = {
  key: 0,
  class: "skip-container"
}, Qf = {
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
  emits: [
    "finished",
    "click-close-button",
    "after-reset",
    "answered"
  ],
  setup(e, { expose: t, emit: n }) {
    const s = e, o = n, r = ke(() => {
      var O, w;
      return (w = (O = s.options) == null ? void 0 : O.styles) == null ? void 0 : w.chatWindow;
    }), i = be({
      open: !1
    }), l = () => ({
      id: null,
      userRole: "host",
      type: "text",
      content: "",
      options: null,
      scriptId: null
    }), a = (O) => ({
      id: Vs(),
      type: "text",
      skippable: !1,
      skipText: "Skip",
      longAnswer: !1,
      content: "",
      answer: l(),
      ...O
    }), p = ke(() => s.scripts.map(a)), u = ke(() => ({
      scripts: p.value,
      currentScript: m.value,
      currentScriptIndex: ee.value,
      latestUserMessage: E.value,
      conversationMessages: f.value,
      addConversationMessage: L
    })), f = be([]), h = be(""), m = be(a()), E = be(l()), I = be(l()), ee = ke(() => p.value.map((w) => w.id).indexOf(m.value.id)), V = be(), J = ke(() => {
      let O = null;
      const w = p.value[ee.value + 1];
      return w && (O = w.id), O;
    }), L = (O) => {
      f.value.push(O), setTimeout(() => V.value.scrollToBottom(), 100), O.userRole == "host" ? I.value = l() : tn(m.value) ? (I.value = O, m.value.answer = { ...O }, o("answered", m.value)) : I.value = l();
    }, ce = (O) => {
      let w;
      O ? w = p.value.find((N) => N.id == O) : w = p.value.find(() => !0), w && (m.value = w, L({
        userRole: "host",
        content: w.content,
        options: w.options,
        type: w.type,
        scriptId: w.id
      }), Y());
    }, A = (O) => setTimeout(() => ce(O), 300), K = () => A(null), fe = () => ce(null), Y = async (O = !0) => {
      var N;
      if (tn(m.value) && !I.value.content && O)
        return !1;
      if (O) {
        const z = io[m.value.type];
        if (z && (z != null && z.onValidate) && z.onValidate({
          context: u.value,
          script: m.value,
          answer: I.value,
          options: s.options
        }) === !1)
          return !1;
      }
      let w = m.value.next;
      if (typeof w == "function" && (w = w(u.value, I.value.content), w instanceof Promise))
        try {
          w = await w;
        } catch (z) {
          console.log(z);
          return;
        }
      if (typeof w == "object") {
        const z = ((N = I.value.content) == null ? void 0 : N.value) || I.value.content;
        w = w[z] || (w == null ? void 0 : w.__unmatched);
      }
      if (w || (w = J.value), w) {
        A(w);
        return;
      }
      if (!w && tn(m.value) == !1) {
        o("finished", u.value);
        return;
      }
      if (!w && tn(m.value) && I.value) {
        o("finished", u.value);
        return;
      }
    }, F = async () => {
      h.value.trim() && (L({
        userRole: "agent",
        content: h.value,
        type: "text"
      }), h.value = "", await Y());
    }, B = async (O) => {
      const w = O.message.scriptId;
      if (w != m.value.id) {
        const N = p.value.find((z) => z.id == w);
        N && (m.value = N);
      }
      L({
        userRole: "agent",
        content: O.option,
        type: "text"
      }), await Y();
    }, q = async () => {
      await Y(!1);
    }, M = () => {
      i.value.open = !0;
    }, ne = () => {
      o("click-close-button");
    }, pe = () => {
      f.value = [], h.value = "", m.value = a(), E.value = l(), I.value = l();
    }, ve = () => {
      i.value.open = !1, pe(), A(), o("after-reset");
    };
    return t({
      addConversationMessage: L,
      startConversationWithDelay: K,
      startConversation: fe,
      resetConversation: pe,
      triggerSelectOptionInMessage: B,
      triggerClickSkipButton: q
    }), (O, w) => (G(), ie("div", {
      class: "--fc-window",
      style: Zn(r.value)
    }, [
      re(Wf, {
        options: e.options,
        onClickResetButton: M,
        onClickCloseButton: ne
      }, null, 8, ["options"]),
      se("div", Yf, [
        re(vf, {
          ref_key: "chatConversationRef",
          ref: V,
          options: e.options
        }, {
          default: pn(() => [
            (G(!0), ie(we, null, Gr(f.value, (N, z) => (G(), Ut(Ti, {
              key: z,
              message: N,
              options: e.options,
              onSelectOption: B
            }, null, 8, ["message", "options"]))), 128)),
            m.value.skippable ? (G(), ie("div", zf, [
              se("button", { onClick: q }, cn(m.value.skipText), 1)
            ])) : st("", !0)
          ]),
          _: 1
        }, 8, ["options"]),
        re(gf, {
          message: h.value,
          "onUpdate:message": w[0] || (w[0] = (N) => h.value = N),
          options: e.options,
          "long-message": m.value.longAnswer,
          onSubmit: F
        }, null, 8, ["message", "options", "long-message"]),
        re(Jf, {
          open: i.value.open,
          "onUpdate:open": w[1] || (w[1] = (N) => i.value.open = N),
          onConfirmed: ve
        }, null, 8, ["open"])
      ])
    ], 4));
  }
}, Xf = /* @__PURE__ */ dt(Qf, [["__scopeId", "data-v-e2b7da31"]]), Zf = { class: "--fc-welcome-message-container" }, eu = {
  __name: "ChatWelcomeMessage",
  props: {
    message: {
      type: Object,
      default: () => {
      }
    }
  },
  emits: ["select-option"],
  setup(e, { emit: t }) {
    const n = t, s = ({ message: o, option: r, optionIndex: i }) => {
      n("select-option", { message: o, option: r, optionIndex: i });
    };
    return (o, r) => (G(), ie("div", Zf, [
      re(Ti, {
        message: e.message,
        onSelectOption: s
      }, null, 8, ["message"])
    ]));
  }
}, tu = /* @__PURE__ */ dt(eu, [["__scopeId", "data-v-705b15c6"]]), nu = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
};
function su(e, t) {
  return G(), ie("svg", nu, t[0] || (t[0] = [
    se("path", { d: "M15 4v7H5.17L4 12.17V4zm1-2H3a1 1 0 0 0-1 1v14l4-4h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m5 4h-2v9H6v2a1 1 0 0 0 1 1h11l4 4V7a1 1 0 0 0-1-1" }, null, -1)
  ]));
}
const ou = { render: su }, ru = { class: "--fc-application-inner" }, iu = { class: "--fc-absolute --fc-bottom-[100%] --fc-w-[400px]" }, lu = {
  key: 0,
  class: "--fc-absolute --fc-bottom-[100%] --fc-w-[350px]"
}, cu = {
  __name: "ChatApp",
  props: {
    scripts: {
      type: Array,
      default: () => []
    },
    metadata: {
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
  setup(e, { expose: t }) {
    const n = e, {
      scripts: s,
      options: o,
      metadata: r
    } = _l(n), i = (O) => s.value = O, l = (O) => o.value = O, a = (O) => r.value = O, p = be(null), u = be(!1), f = be(!1), h = be(Vs()), m = be([]), E = be([]), I = be([]), ee = ke(() => n.scripts[0]), V = ke(() => {
      var O;
      return !!(ee.value && // Has welcome message
      ((O = o.value) != null && O.welcomeMessage) && // Show welcome message in options
      f.value == !1);
    }), J = ke(
      () => {
        var O, w;
        return ((w = (O = o.value) == null ? void 0 : O.embedded) == null ? void 0 : w.type) != "background";
      }
    ), L = (O) => {
      m.value.push(O);
    }, ce = (O) => {
      E.value.push(O);
    }, A = (O) => {
      I.value.push(O);
    }, K = (O) => {
      for (const w of m.value)
        w(O);
    }, fe = (O) => {
      for (const w of I.value)
        w(O);
    }, Y = () => {
      u.value = !u.value, u.value ? F() : B();
    }, F = () => {
      u.value = !0, f.value == !1 && p.value.startConversationWithDelay(), f.value = !0;
    }, B = () => {
      u.value = !1;
    }, q = () => Y(), M = (O) => {
      V.value != !1 && (u.value = !0, p.value.startConversation(), p.value.triggerSelectOptionInMessage(O), f.value = !0);
    }, ne = () => {
      h.value = Vs();
      for (const O of E.value)
        O(h.value);
    }, pe = () => {
      var z, Ve, Ne, Be;
      if (typeof document > "u")
        return !1;
      const O = document.querySelector(":root"), w = (Ve = (z = o.value) == null ? void 0 : z.styles) == null ? void 0 : Ve.primaryColor, N = (Be = (Ne = o.value) == null ? void 0 : Ne.styles) == null ? void 0 : Be.primaryLightColor;
      w && (O == null || O.style.setProperty("--fc-primary-color", w)), N && (O == null || O.style.setProperty("--fc-primary-light-color", N));
    };
    rn(o, () => pe(), {
      immediate: !0
    });
    const ve = () => {
      lf({
        app: {
          onFinished: L,
          onAnswered: A,
          onChangedSession: ce,
          initSessionId: h.value
        },
        metadata: r.value,
        options: o.value
      });
    };
    return Kn(() => ve()), Kn(
      () => console.log(
        "%c This website is using formchat.net to create chat boxes. Please visit https://formchat.net/ to get started.",
        "background: #222; color: #bada55"
      )
    ), t({
      showChatWindow: F,
      hideChatWindow: B,
      toggleChatWindow: Y,
      setScript: i,
      setOptions: l,
      setMetadata: a
    }), (O, w) => {
      var N, z, Ve, Ne;
      return G(), ie("div", {
        class: _n(["--fc-application --fc-formchat-dot-net", {
          "--fc-dark-theme": ((z = (N = tt(o)) == null ? void 0 : N.styles) == null ? void 0 : z.theme) === "dark",
          "--fc-light-theme": ((Ne = (Ve = tt(o)) == null ? void 0 : Ve.styles) == null ? void 0 : Ne.theme) === "light"
        }])
      }, [
        se("div", ru, [
          re(ko, {
            "enter-active-class": "--fc-transition --fc-duration-150 --fc-ease-in-out",
            "enter-from-class": "--fc-opacity-0 --fc-translate-y-4",
            "enter-to-class": "--fc-opacity-100 --fc-translate-y-0",
            "leave-active-class": "--fc-transition --fc-duration-150 --fc-ease-in-out",
            "leave-from-class": "--fc-opacity-100 --fc-translate-y-0",
            "leave-to-class": "--fc-opacity-0 --fc-translate-y-4"
          }, {
            default: pn(() => [
              Jl(se("div", iu, [
                re(Xf, {
                  ref_key: "chatWindowRef",
                  ref: p,
                  options: tt(o),
                  scripts: tt(s),
                  onFinished: K,
                  onAnswered: fe,
                  onClickCloseButton: w[0] || (w[0] = (Be) => u.value = !1),
                  onAfterReset: ne
                }, null, 8, ["options", "scripts"])
              ], 512), [
                [Si, u.value]
              ])
            ]),
            _: 1
          }),
          re(ko, {
            "enter-active-class": "--fc-transition --fc-duration-150 --fc-ease-in-out",
            "enter-from-class": "--fc-opacity-0 --fc-translate-y-4",
            "enter-to-class": "--fc-opacity-100 --fc-translate-y-0",
            "leave-active-class": "--fc-transition --fc-duration-150 --fc-ease-in-out",
            "leave-from-class": "--fc-opacity-100 --fc-translate-y-0",
            "leave-to-class": "--fc-opacity-0 --fc-translate-y-4"
          }, {
            default: pn(() => [
              V.value ? (G(), ie("div", lu, [
                re(tu, {
                  message: ee.value,
                  onSelectOption: M
                }, null, 8, ["message"])
              ])) : st("", !0)
            ]),
            _: 1
          })
        ]),
        J.value ? (G(), ie("div", {
          key: 0,
          class: "--fc-bubble-container",
          onClick: q
        }, [
          re(tt(ou), { class: "--fc-bubble-icon" })
        ])) : st("", !0)
      ], 2);
    };
  }
}, au = /* @__PURE__ */ dt(cu, [["__scopeId", "data-v-a99a6682"]]);
window.createFormChat = (e, t) => Ya(au, t).mount(e);
