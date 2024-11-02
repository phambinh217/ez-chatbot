/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function st(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Q = Object.freeze({}), jt = Object.freeze([]), _e = () => {
}, $i = () => !1, gn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Dn = (e) => e.startsWith("onUpdate:"), ae = Object.assign, Bs = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Ei = Object.prototype.hasOwnProperty, Y = (e, t) => Ei.call(e, t), N = Array.isArray, Ot = (e) => Jn(e) === "[object Map]", Zo = (e) => Jn(e) === "[object Set]", L = (e) => typeof e == "function", le = (e) => typeof e == "string", ot = (e) => typeof e == "symbol", Z = (e) => e !== null && typeof e == "object", Us = (e) => (Z(e) || L(e)) && L(e.then) && L(e.catch), er = Object.prototype.toString, Jn = (e) => er.call(e), Ws = (e) => Jn(e).slice(8, -1), tr = (e) => Jn(e) === "[object Object]", Ks = (e) => le(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, tn = /* @__PURE__ */ st(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Mi = /* @__PURE__ */ st(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Yn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Ai = /-(\w)/g, Oe = Yn(
  (e) => e.replace(Ai, (t, n) => n ? n.toUpperCase() : "")
), Ii = /\B([A-Z])/g, tt = Yn(
  (e) => e.replace(Ii, "-$1").toLowerCase()
), It = Yn((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ct = Yn(
  (e) => e ? `on${It(e)}` : ""
), vt = (e, t) => !Object.is(e, t), Jt = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, kn = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, Pi = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Ri = (e) => {
  const t = le(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let po;
const vn = () => po || (po = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function zn(e) {
  if (N(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], o = le(s) ? ki(s) : zn(s);
      if (o)
        for (const r in o)
          t[r] = o[r];
    }
    return t;
  } else if (le(e) || Z(e))
    return e;
}
const Ni = /;(?![^(]*\))/g, Fi = /:([^]+)/, Di = /\/\*[^]*?\*\//g;
function ki(e) {
  const t = {};
  return e.replace(Di, "").split(Ni).forEach((n) => {
    if (n) {
      const s = n.split(Fi);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function yn(e) {
  let t = "";
  if (le(e))
    t = e;
  else if (N(e))
    for (let n = 0; n < e.length; n++) {
      const s = yn(e[n]);
      s && (t += s + " ");
    }
  else if (Z(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const ji = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Li = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Hi = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", Vi = /* @__PURE__ */ st(ji), Bi = /* @__PURE__ */ st(Li), Ui = /* @__PURE__ */ st(Hi), Wi = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ki = /* @__PURE__ */ st(Wi);
function nr(e) {
  return !!e || e === "";
}
const sr = (e) => !!(e && e.__v_isRef === !0), ln = (e) => le(e) ? e : e == null ? "" : N(e) || Z(e) && (e.toString === er || !L(e.toString)) ? sr(e) ? ln(e.value) : JSON.stringify(e, or, 2) : String(e), or = (e, t) => sr(t) ? or(e, t.value) : Ot(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, o], r) => (n[ls(s, r) + " =>"] = o, n),
    {}
  )
} : Zo(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => ls(n))
} : ot(t) ? ls(t) : Z(t) && !N(t) && !tr(t) ? String(t) : t, ls = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    ot(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
var qi = { NODE_ENV: '"production"' };
function Ge(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Ie;
class Gi {
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
      Ge("cannot run an inactive effect scope.");
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
function Ji() {
  return Ie;
}
let z;
const cs = /* @__PURE__ */ new WeakSet();
class rr {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ie && Ie.active && Ie.effects.push(this);
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
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || lr(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, ho(this), cr(this);
    const t = z, n = je;
    z = this, je = !0;
    try {
      return this.fn();
    } finally {
      z !== this && Ge(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), ar(this), z = t, je = n, this.flags &= -3;
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
    this.flags & 64 ? cs.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    ws(this) && this.run();
  }
  get dirty() {
    return ws(this);
  }
}
let ir = 0, nn, sn;
function lr(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = sn, sn = e;
    return;
  }
  e.next = nn, nn = e;
}
function qs() {
  ir++;
}
function Gs() {
  if (--ir > 0)
    return;
  if (sn) {
    let t = sn;
    for (sn = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; nn; ) {
    let t = nn;
    for (nn = void 0; t; ) {
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
function cr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function ar(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const o = s.prevDep;
    s.version === -1 ? (s === n && (n = o), Js(s), Yi(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = o;
  }
  e.deps = t, e.depsTail = n;
}
function ws(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (fr(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function fr(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === cn))
    return;
  e.globalVersion = cn;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !ws(e)) {
    e.flags &= -3;
    return;
  }
  const n = z, s = je;
  z = e, je = !0;
  try {
    cr(e);
    const o = e.fn(e._value);
    (t.version === 0 || vt(o, e._value)) && (e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    z = n, je = s, ar(e), e.flags &= -3;
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
function Yi(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let je = !0;
const ur = [];
function rt() {
  ur.push(je), je = !1;
}
function it() {
  const e = ur.pop();
  je = e === void 0 ? !0 : e;
}
function ho(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = z;
    z = void 0;
    try {
      t();
    } finally {
      z = n;
    }
  }
}
let cn = 0;
class zi {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ys {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.subsHead = void 0;
  }
  track(t) {
    if (!z || !je || z === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== z)
      n = this.activeLink = new zi(z, this), z.deps ? (n.prevDep = z.depsTail, z.depsTail.nextDep = n, z.depsTail = n) : z.deps = z.depsTail = n, dr(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = z.depsTail, n.nextDep = void 0, z.depsTail.nextDep = n, z.depsTail = n, z.deps === n && (z.deps = s);
    }
    return z.onTrack && z.onTrack(
      ae(
        {
          effect: z
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, cn++, this.notify(t);
  }
  notify(t) {
    qs();
    try {
      if (qi.NODE_ENV !== "production")
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
function dr(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        dr(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const xs = /* @__PURE__ */ new WeakMap(), $t = Symbol(
  "Object iterate"
), Cs = Symbol(
  "Map keys iterate"
), an = Symbol(
  "Array iterate"
);
function me(e, t, n) {
  if (je && z) {
    let s = xs.get(e);
    s || xs.set(e, s = /* @__PURE__ */ new Map());
    let o = s.get(n);
    o || (s.set(n, o = new Ys()), o.map = s, o.key = n), o.track({
      target: e,
      type: t,
      key: n
    });
  }
}
function Ue(e, t, n, s, o, r) {
  const i = xs.get(e);
  if (!i) {
    cn++;
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
    const a = N(e), p = a && Ks(n);
    if (a && n === "length") {
      const u = Number(s);
      i.forEach((f, h) => {
        (h === "length" || h === an || !ot(h) && h >= u) && l(f);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && l(i.get(n)), p && l(i.get(an)), t) {
        case "add":
          a ? p && l(i.get("length")) : (l(i.get($t)), Ot(e) && l(i.get(Cs)));
          break;
        case "delete":
          a || (l(i.get($t)), Ot(e) && l(i.get(Cs)));
          break;
        case "set":
          Ot(e) && l(i.get($t));
          break;
      }
  }
  Gs();
}
function Dt(e) {
  const t = V(e);
  return t === e ? t : (me(t, "iterate", an), $e(e) ? t : t.map(ye));
}
function Qn(e) {
  return me(e = V(e), "iterate", an), e;
}
const Qi = {
  __proto__: null,
  [Symbol.iterator]() {
    return as(this, Symbol.iterator, ye);
  },
  concat(...e) {
    return Dt(this).concat(
      ...e.map((t) => N(t) ? Dt(t) : t)
    );
  },
  entries() {
    return as(this, "entries", (e) => (e[1] = ye(e[1]), e));
  },
  every(e, t) {
    return Ye(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ye(this, "filter", e, t, (n) => n.map(ye), arguments);
  },
  find(e, t) {
    return Ye(this, "find", e, t, ye, arguments);
  },
  findIndex(e, t) {
    return Ye(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ye(this, "findLast", e, t, ye, arguments);
  },
  findLastIndex(e, t) {
    return Ye(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Ye(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return fs(this, "includes", e);
  },
  indexOf(...e) {
    return fs(this, "indexOf", e);
  },
  join(e) {
    return Dt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return fs(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ye(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Yt(this, "pop");
  },
  push(...e) {
    return Yt(this, "push", e);
  },
  reduce(e, ...t) {
    return mo(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return mo(this, "reduceRight", e, t);
  },
  shift() {
    return Yt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ye(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Yt(this, "splice", e);
  },
  toReversed() {
    return Dt(this).toReversed();
  },
  toSorted(e) {
    return Dt(this).toSorted(e);
  },
  toSpliced(...e) {
    return Dt(this).toSpliced(...e);
  },
  unshift(...e) {
    return Yt(this, "unshift", e);
  },
  values() {
    return as(this, "values", ye);
  }
};
function as(e, t, n) {
  const s = Qn(e), o = s[t]();
  return s !== e && !$e(e) && (o._next = o.next, o.next = () => {
    const r = o._next();
    return r.value && (r.value = n(r.value)), r;
  }), o;
}
const Xi = Array.prototype;
function Ye(e, t, n, s, o, r) {
  const i = Qn(e), l = i !== e && !$e(e), a = i[t];
  if (a !== Xi[t]) {
    const f = a.apply(e, r);
    return l ? ye(f) : f;
  }
  let p = n;
  i !== e && (l ? p = function(f, h) {
    return n.call(this, ye(f), h, e);
  } : n.length > 2 && (p = function(f, h) {
    return n.call(this, f, h, e);
  }));
  const u = a.call(i, p, s);
  return l && o ? o(u) : u;
}
function mo(e, t, n, s) {
  const o = Qn(e);
  let r = n;
  return o !== e && ($e(e) ? n.length > 3 && (r = function(i, l, a) {
    return n.call(this, i, l, a, e);
  }) : r = function(i, l, a) {
    return n.call(this, i, ye(l), a, e);
  }), o[t](r, ...s);
}
function fs(e, t, n) {
  const s = V(e);
  me(s, "iterate", an);
  const o = s[t](...n);
  return (o === -1 || o === !1) && jn(n[0]) ? (n[0] = V(n[0]), s[t](...n)) : o;
}
function Yt(e, t, n = []) {
  rt(), qs();
  const s = V(e)[t].apply(e, n);
  return Gs(), it(), s;
}
const Zi = /* @__PURE__ */ st("__proto__,__v_isRef,__isVue"), pr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ot)
);
function el(e) {
  ot(e) || (e = String(e));
  const t = V(this);
  return me(t, "has", e), t.hasOwnProperty(e);
}
class hr {
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
      return s === (o ? r ? _r : br : r ? yr : vr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const i = N(t);
    if (!o) {
      let a;
      if (i && (a = Qi[n]))
        return a;
      if (n === "hasOwnProperty")
        return el;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      de(t) ? t : s
    );
    return (ot(n) ? pr.has(n) : Zi(n)) || (o || me(t, "get", n), r) ? l : de(l) ? i && Ks(n) ? l : l.value : Z(l) ? o ? wr(l) : zs(l) : l;
  }
}
class mr extends hr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, o) {
    let r = t[n];
    if (!this._isShallow) {
      const a = nt(r);
      if (!$e(s) && !nt(s) && (r = V(r), s = V(s)), !N(t) && de(r) && !de(s))
        return a ? !1 : (r.value = s, !0);
    }
    const i = N(t) && Ks(n) ? Number(n) < t.length : Y(t, n), l = Reflect.set(
      t,
      n,
      s,
      de(t) ? t : o
    );
    return t === V(o) && (i ? vt(s, r) && Ue(t, "set", n, s, r) : Ue(t, "add", n, s)), l;
  }
  deleteProperty(t, n) {
    const s = Y(t, n), o = t[n], r = Reflect.deleteProperty(t, n);
    return r && s && Ue(t, "delete", n, void 0, o), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!ot(n) || !pr.has(n)) && me(t, "has", n), s;
  }
  ownKeys(t) {
    return me(
      t,
      "iterate",
      N(t) ? "length" : $t
    ), Reflect.ownKeys(t);
  }
}
class gr extends hr {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return Ge(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return Ge(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const tl = /* @__PURE__ */ new mr(), nl = /* @__PURE__ */ new gr(), sl = /* @__PURE__ */ new mr(!0), ol = /* @__PURE__ */ new gr(!0), Ss = (e) => e, Tn = (e) => Reflect.getPrototypeOf(e);
function rl(e, t, n) {
  return function(...s) {
    const o = this.__v_raw, r = V(o), i = Ot(r), l = e === "entries" || e === Symbol.iterator && i, a = e === "keys" && i, p = o[e](...s), u = n ? Ss : t ? Ts : ye;
    return !t && me(
      r,
      "iterate",
      a ? Cs : $t
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
function On(e) {
  return function(...t) {
    {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Ge(
        `${It(e)} operation ${n}failed: target is readonly.`,
        V(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function il(e, t) {
  const n = {
    get(o) {
      const r = this.__v_raw, i = V(r), l = V(o);
      e || (vt(o, l) && me(i, "get", o), me(i, "get", l));
      const { has: a } = Tn(i), p = t ? Ss : e ? Ts : ye;
      if (a.call(i, o))
        return p(r.get(o));
      if (a.call(i, l))
        return p(r.get(l));
      r !== i && r.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && me(V(o), "iterate", $t), Reflect.get(o, "size", o);
    },
    has(o) {
      const r = this.__v_raw, i = V(r), l = V(o);
      return e || (vt(o, l) && me(i, "has", o), me(i, "has", l)), o === l ? r.has(o) : r.has(o) || r.has(l);
    },
    forEach(o, r) {
      const i = this, l = i.__v_raw, a = V(l), p = t ? Ss : e ? Ts : ye;
      return !e && me(a, "iterate", $t), l.forEach((u, f) => o.call(r, p(u), p(f), i));
    }
  };
  return ae(
    n,
    e ? {
      add: On("add"),
      set: On("set"),
      delete: On("delete"),
      clear: On("clear")
    } : {
      add(o) {
        !t && !$e(o) && !nt(o) && (o = V(o));
        const r = V(this);
        return Tn(r).has.call(r, o) || (r.add(o), Ue(r, "add", o, o)), this;
      },
      set(o, r) {
        !t && !$e(r) && !nt(r) && (r = V(r));
        const i = V(this), { has: l, get: a } = Tn(i);
        let p = l.call(i, o);
        p ? go(i, l, o) : (o = V(o), p = l.call(i, o));
        const u = a.call(i, o);
        return i.set(o, r), p ? vt(r, u) && Ue(i, "set", o, r, u) : Ue(i, "add", o, r), this;
      },
      delete(o) {
        const r = V(this), { has: i, get: l } = Tn(r);
        let a = i.call(r, o);
        a ? go(r, i, o) : (o = V(o), a = i.call(r, o));
        const p = l ? l.call(r, o) : void 0, u = r.delete(o);
        return a && Ue(r, "delete", o, void 0, p), u;
      },
      clear() {
        const o = V(this), r = o.size !== 0, i = Ot(o) ? new Map(o) : new Set(o), l = o.clear();
        return r && Ue(
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
    n[o] = rl(o, e, t);
  }), n;
}
function Xn(e, t) {
  const n = il(e, t);
  return (s, o, r) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(
    Y(n, o) && o in s ? n : s,
    o,
    r
  );
}
const ll = {
  get: /* @__PURE__ */ Xn(!1, !1)
}, cl = {
  get: /* @__PURE__ */ Xn(!1, !0)
}, al = {
  get: /* @__PURE__ */ Xn(!0, !1)
}, fl = {
  get: /* @__PURE__ */ Xn(!0, !0)
};
function go(e, t, n) {
  const s = V(n);
  if (s !== n && t.call(e, s)) {
    const o = Ws(e);
    Ge(
      `Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const vr = /* @__PURE__ */ new WeakMap(), yr = /* @__PURE__ */ new WeakMap(), br = /* @__PURE__ */ new WeakMap(), _r = /* @__PURE__ */ new WeakMap();
function ul(e) {
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
function dl(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ul(Ws(e));
}
function zs(e) {
  return nt(e) ? e : Zn(
    e,
    !1,
    tl,
    ll,
    vr
  );
}
function pl(e) {
  return Zn(
    e,
    !1,
    sl,
    cl,
    yr
  );
}
function wr(e) {
  return Zn(
    e,
    !0,
    nl,
    al,
    br
  );
}
function Ke(e) {
  return Zn(
    e,
    !0,
    ol,
    fl,
    _r
  );
}
function Zn(e, t, n, s, o) {
  if (!Z(e))
    return Ge(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = o.get(e);
  if (r)
    return r;
  const i = dl(e);
  if (i === 0)
    return e;
  const l = new Proxy(
    e,
    i === 2 ? s : n
  );
  return o.set(e, l), l;
}
function Et(e) {
  return nt(e) ? Et(e.__v_raw) : !!(e && e.__v_isReactive);
}
function nt(e) {
  return !!(e && e.__v_isReadonly);
}
function $e(e) {
  return !!(e && e.__v_isShallow);
}
function jn(e) {
  return e ? !!e.__v_raw : !1;
}
function V(e) {
  const t = e && e.__v_raw;
  return t ? V(t) : e;
}
function hl(e) {
  return !Y(e, "__v_skip") && Object.isExtensible(e) && kn(e, "__v_skip", !0), e;
}
const ye = (e) => Z(e) ? zs(e) : e, Ts = (e) => Z(e) ? wr(e) : e;
function de(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Pe(e) {
  return ml(e, !1);
}
function ml(e, t) {
  return de(e) ? e : new gl(e, t);
}
class gl {
  constructor(t, n) {
    this.dep = new Ys(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : V(t), this._value = n ? t : ye(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || $e(t) || nt(t);
    t = s ? t : V(t), vt(t, n) && (this._rawValue = t, this._value = s ? t : ye(t), this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }));
  }
}
function Bt(e) {
  return de(e) ? e.value : e;
}
const vl = {
  get: (e, t, n) => t === "__v_raw" ? e : Bt(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t];
    return de(o) && !de(n) ? (o.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function xr(e) {
  return Et(e) ? e : new Proxy(e, vl);
}
class yl {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Ys(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = cn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    z !== this)
      return lr(this, !0), !0;
  }
  get value() {
    const t = this.dep.track({
      target: this,
      type: "get",
      key: "value"
    });
    return fr(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : Ge("Write operation failed: computed value is readonly");
  }
}
function bl(e, t, n = !1) {
  let s, o;
  return L(e) ? s = e : (s = e.get, o = e.set), new yl(s, o, n);
}
const $n = {}, Ln = /* @__PURE__ */ new WeakMap();
let St;
function _l(e, t = !1, n = St) {
  if (n) {
    let s = Ln.get(n);
    s || Ln.set(n, s = []), s.push(e);
  } else t || Ge(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function wl(e, t, n = Q) {
  const { immediate: s, deep: o, once: r, scheduler: i, augmentJob: l, call: a } = n, p = (x) => {
    (n.onWarn || Ge)(
      "Invalid watch source: ",
      x,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, u = (x) => o ? x : $e(x) || o === !1 || o === 0 ? Ze(x, 1) : Ze(x);
  let f, h, g, E, A = !1, q = !1;
  if (de(e) ? (h = () => e.value, A = $e(e)) : Et(e) ? (h = () => u(e), A = !0) : N(e) ? (q = !0, A = e.some((x) => Et(x) || $e(x)), h = () => e.map((x) => {
    if (de(x))
      return x.value;
    if (Et(x))
      return u(x);
    if (L(x))
      return a ? a(x, 2) : x();
    p(x);
  })) : L(e) ? t ? h = a ? () => a(e, 2) : e : h = () => {
    if (g) {
      rt();
      try {
        g();
      } finally {
        it();
      }
    }
    const x = St;
    St = f;
    try {
      return a ? a(e, 3, [E]) : e(E);
    } finally {
      St = x;
    }
  } : (h = _e, p(e)), t && o) {
    const x = h, F = o === !0 ? 1 / 0 : o;
    h = () => Ze(x(), F);
  }
  const B = Ji(), D = () => {
    f.stop(), B && Bs(B.effects, f);
  };
  if (r && t) {
    const x = t;
    t = (...F) => {
      x(...F), D();
    };
  }
  let k = q ? new Array(e.length).fill($n) : $n;
  const W = (x) => {
    if (!(!(f.flags & 1) || !f.dirty && !x))
      if (t) {
        const F = f.run();
        if (o || A || (q ? F.some((ee, K) => vt(ee, k[K])) : vt(F, k))) {
          g && g();
          const ee = St;
          St = f;
          try {
            const K = [
              F,
              // pass undefined as the old value when it's changed for the first time
              k === $n ? void 0 : q && k[0] === $n ? [] : k,
              E
            ];
            a ? a(t, 3, K) : (
              // @ts-expect-error
              t(...K)
            ), k = F;
          } finally {
            St = ee;
          }
        }
      } else
        f.run();
  };
  return l && l(W), f = new rr(h), f.scheduler = i ? () => i(W, !1) : W, E = (x) => _l(x, !1, f), g = f.onStop = () => {
    const x = Ln.get(f);
    if (x) {
      if (a)
        a(x, 4);
      else
        for (const F of x) F();
      Ln.delete(f);
    }
  }, f.onTrack = n.onTrack, f.onTrigger = n.onTrigger, t ? s ? W(!0) : k = f.run() : i ? i(W.bind(null, !0), !0) : f.run(), D.pause = f.pause.bind(f), D.resume = f.resume.bind(f), D.stop = D, D;
}
function Ze(e, t = 1 / 0, n) {
  if (t <= 0 || !Z(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, de(e))
    Ze(e.value, t, n);
  else if (N(e))
    for (let s = 0; s < e.length; s++)
      Ze(e[s], t, n);
  else if (Zo(e) || Ot(e))
    e.forEach((s) => {
      Ze(s, t, n);
    });
  else if (tr(e)) {
    for (const s in e)
      Ze(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && Ze(e[s], t, n);
  }
  return e;
}
var dt = { NODE_ENV: '"production"' };
const Mt = [];
function Mn(e) {
  Mt.push(e);
}
function An() {
  Mt.pop();
}
let us = !1;
function w(e, ...t) {
  if (us) return;
  us = !0, rt();
  const n = Mt.length ? Mt[Mt.length - 1].component : null, s = n && n.appContext.config.warnHandler, o = xl();
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
          ({ vnode: r }) => `at <${os(n, r.type)}>`
        ).join(`
`),
        o
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    o.length && r.push(`
`, ...Cl(o)), console.warn(...r);
  }
  it(), us = !1;
}
function xl() {
  let e = Mt[Mt.length - 1];
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
function Cl(e) {
  const t = [];
  return e.forEach((n, s) => {
    t.push(...s === 0 ? [] : [`
`], ...Sl(n));
  }), t;
}
function Sl({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, o = ` at <${os(
    e.component,
    e.type,
    s
  )}`, r = ">" + n;
  return e.props ? [o, ...Tl(e.props), r] : [o + r];
}
function Tl(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((s) => {
    t.push(...Cr(s, e[s]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Cr(e, t, n) {
  return le(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : de(t) ? (t = Cr(e, V(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : L(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = V(t), n ? t : [`${e}=`, t]);
}
function Ol(e, t) {
  e !== void 0 && (typeof e != "number" ? w(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && w(`${t} is NaN - the duration expression might be incorrect.`));
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
    bn(o, t, n);
  }
}
function Le(e, t, n, s) {
  if (L(e)) {
    const o = Wt(e, t, n, s);
    return o && Us(o) && o.catch((r) => {
      bn(r, t, n);
    }), o;
  }
  if (N(e)) {
    const o = [];
    for (let r = 0; r < e.length; r++)
      o.push(Le(e[r], t, n, s));
    return o;
  } else
    w(
      `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
    );
}
function bn(e, t, n, s = !0) {
  const o = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: i } = t && t.appContext.config || Q;
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
      rt(), Wt(r, null, 10, [
        e,
        a,
        p
      ]), it();
      return;
    }
  }
  $l(e, n, o, s, i);
}
function $l(e, t, n, s = !0, o = !1) {
  {
    const r = Qs[t];
    if (n && Mn(n), w(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && An(), s)
      throw e;
    console.error(e);
  }
}
const Te = [];
let Be = -1;
const Lt = [];
let pt = null, kt = 0;
const Sr = /* @__PURE__ */ Promise.resolve();
let Hn = null;
const El = 100;
function Ml(e) {
  const t = Hn || Sr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Al(e) {
  let t = Be + 1, n = Te.length;
  for (; t < n; ) {
    const s = t + n >>> 1, o = Te[s], r = fn(o);
    r < e || r === e && o.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function es(e) {
  if (!(e.flags & 1)) {
    const t = fn(e), n = Te[Te.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= fn(n) ? Te.push(e) : Te.splice(Al(t), 0, e), e.flags |= 1, Tr();
  }
}
function Tr() {
  Hn || (Hn = Sr.then(Er));
}
function Or(e) {
  N(e) ? Lt.push(...e) : pt && e.id === -1 ? pt.splice(kt + 1, 0, e) : e.flags & 1 || (Lt.push(e), e.flags |= 1), Tr();
}
function vo(e, t, n = Be + 1) {
  for (t = t || /* @__PURE__ */ new Map(); n < Te.length; n++) {
    const s = Te[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid || Xs(t, s))
        continue;
      Te.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function $r(e) {
  if (Lt.length) {
    const t = [...new Set(Lt)].sort(
      (n, s) => fn(n) - fn(s)
    );
    if (Lt.length = 0, pt) {
      pt.push(...t);
      return;
    }
    for (pt = t, e = e || /* @__PURE__ */ new Map(), kt = 0; kt < pt.length; kt++) {
      const n = pt[kt];
      Xs(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    pt = null, kt = 0;
  }
}
const fn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Er(e) {
  e = e || /* @__PURE__ */ new Map();
  const t = (n) => Xs(e, n);
  try {
    for (Be = 0; Be < Te.length; Be++) {
      const n = Te[Be];
      if (n && !(n.flags & 8)) {
        if (dt.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), Wt(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; Be < Te.length; Be++) {
      const n = Te[Be];
      n && (n.flags &= -2);
    }
    Be = -1, Te.length = 0, $r(e), Hn = null, (Te.length || Lt.length) && Er(e);
  }
}
function Xs(e, t) {
  const n = e.get(t) || 0;
  if (n > El) {
    const s = t.i, o = s && io(s.type);
    return bn(
      `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let qe = !1;
const In = /* @__PURE__ */ new Map();
vn().__VUE_HMR_RUNTIME__ = {
  createRecord: ds(Mr),
  rerender: ds(Rl),
  reload: ds(Nl)
};
const Pt = /* @__PURE__ */ new Map();
function Il(e) {
  const t = e.type.__hmrId;
  let n = Pt.get(t);
  n || (Mr(t, e.type), n = Pt.get(t)), n.instances.add(e);
}
function Pl(e) {
  Pt.get(e.type.__hmrId).instances.delete(e);
}
function Mr(e, t) {
  return Pt.has(e) ? !1 : (Pt.set(e, {
    initialDef: Vn(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Vn(e) {
  return bi(e) ? e.__vccOpts : e;
}
function Rl(e, t) {
  const n = Pt.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((s) => {
    t && (s.render = t, Vn(s.type).render = t), s.renderCache = [], qe = !0, s.update(), qe = !1;
  }));
}
function Nl(e, t) {
  const n = Pt.get(e);
  if (!n) return;
  t = Vn(t), yo(n.initialDef, t);
  const s = [...n.instances];
  for (let o = 0; o < s.length; o++) {
    const r = s[o], i = Vn(r.type);
    let l = In.get(i);
    l || (i !== n.initialDef && yo(i, t), In.set(i, l = /* @__PURE__ */ new Set())), l.add(r), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (l.add(r), r.ceReload(t.styles), l.delete(r)) : r.parent ? es(() => {
      qe = !0, r.parent.update(), qe = !1, l.delete(r);
    }) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), r.root.ce && r !== r.root && r.root.ce._removeChildStyle(i);
  }
  Or(() => {
    In.clear();
  });
}
function yo(e, t) {
  ae(e, t);
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
let We, Zt = [], Os = !1;
function _n(e, ...t) {
  We ? We.emit(e, ...t) : Os || Zt.push({ event: e, args: t });
}
function Ar(e, t) {
  var n, s;
  We = e, We ? (We.enabled = !0, Zt.forEach(({ event: o, args: r }) => We.emit(o, ...r)), Zt = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((s = (n = window.navigator) == null ? void 0 : n.userAgent) != null && s.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    Ar(r, t);
  }), setTimeout(() => {
    We || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Os = !0, Zt = []);
  }, 3e3)) : (Os = !0, Zt = []);
}
function Fl(e, t) {
  _n("app:init", e, t, {
    Fragment: be,
    Text: xn,
    Comment: fe,
    Static: Rn
  });
}
function Dl(e) {
  _n("app:unmount", e);
}
const kl = /* @__PURE__ */ Zs(
  "component:added"
  /* COMPONENT_ADDED */
), Ir = /* @__PURE__ */ Zs(
  "component:updated"
  /* COMPONENT_UPDATED */
), jl = /* @__PURE__ */ Zs(
  "component:removed"
  /* COMPONENT_REMOVED */
), Ll = (e) => {
  We && typeof We.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !We.cleanupBuffer(e) && jl(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Zs(e) {
  return (t) => {
    _n(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const Hl = /* @__PURE__ */ Pr(
  "perf:start"
  /* PERFORMANCE_START */
), Vl = /* @__PURE__ */ Pr(
  "perf:end"
  /* PERFORMANCE_END */
);
function Pr(e) {
  return (t, n, s) => {
    _n(e, t.appContext.app, t.uid, t, n, s);
  };
}
function Bl(e, t, n) {
  _n(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let ue = null, Rr = null;
function Bn(e) {
  const t = ue;
  return ue = e, Rr = e && e.type.__scopeId || null, t;
}
function un(e, t = ue, n) {
  if (!t || e._n)
    return e;
  const s = (...o) => {
    s._d && Io(-1);
    const r = Bn(t);
    let i;
    try {
      i = e(...o);
    } finally {
      Bn(r), s._d && Io(1);
    }
    return Ir(t), i;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function Nr(e) {
  Mi(e) && w("Do not use built-in directive ids as custom directive id: " + e);
}
function ps(e, t) {
  if (ue === null)
    return w("withDirectives can only be used inside render functions."), e;
  const n = ss(ue), s = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [r, i, l, a = Q] = t[o];
    r && (L(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && Ze(i), s.push({
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
function bt(e, t, n, s) {
  const o = e.dirs, r = t && t.dirs;
  for (let i = 0; i < o.length; i++) {
    const l = o[i];
    r && (l.oldValue = r[i].value);
    let a = l.dir[s];
    a && (rt(), Le(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), it());
  }
}
const Ul = Symbol("_vte"), Fr = (e) => e.__isTeleport, ht = Symbol("_leaveCb"), En = Symbol("_enterCb");
function Wl() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return eo(() => {
    e.isMounted = !0;
  }), Ur(() => {
    e.isUnmounting = !0;
  }), e;
}
const Ne = [Function, Array], Dr = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Ne,
  onEnter: Ne,
  onAfterEnter: Ne,
  onEnterCancelled: Ne,
  // leave
  onBeforeLeave: Ne,
  onLeave: Ne,
  onAfterLeave: Ne,
  onLeaveCancelled: Ne,
  // appear
  onBeforeAppear: Ne,
  onAppear: Ne,
  onAfterAppear: Ne,
  onAppearCancelled: Ne
}, kr = (e) => {
  const t = e.subTree;
  return t.component ? kr(t.component) : t;
}, Kl = {
  name: "BaseTransition",
  props: Dr,
  setup(e, { slots: t }) {
    const n = gi(), s = Wl();
    return () => {
      const o = t.default && Hr(t.default(), !0);
      if (!o || !o.length)
        return;
      const r = jr(o), i = V(e), { mode: l } = i;
      if (l && l !== "in-out" && l !== "out-in" && l !== "default" && w(`invalid <transition> mode: ${l}`), s.isLeaving)
        return hs(r);
      const a = bo(r);
      if (!a)
        return hs(r);
      let p = $s(
        a,
        i,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (h) => p = h
      );
      a.type !== fe && dn(a, p);
      const u = n.subTree, f = u && bo(u);
      if (f && f.type !== fe && !Tt(a, f) && kr(n).type !== fe) {
        const h = $s(
          f,
          i,
          s,
          n
        );
        if (dn(f, h), l === "out-in" && a.type !== fe)
          return s.isLeaving = !0, h.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete h.afterLeave;
          }, hs(r);
        l === "in-out" && a.type !== fe && (h.delayLeave = (g, E, A) => {
          const q = Lr(
            s,
            f
          );
          q[String(f.key)] = f, g[ht] = () => {
            E(), g[ht] = void 0, delete p.delayedLeave;
          }, p.delayedLeave = A;
        });
      }
      return r;
    };
  }
};
function jr(e) {
  let t = e[0];
  if (e.length > 1) {
    let n = !1;
    for (const s of e)
      if (s.type !== fe) {
        if (n) {
          w(
            "<transition> can only be used on a single element or component. Use <transition-group> for lists."
          );
          break;
        }
        t = s, n = !0;
      }
  }
  return t;
}
const ql = Kl;
function Lr(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function $s(e, t, n, s, o) {
  const {
    appear: r,
    mode: i,
    persisted: l = !1,
    onBeforeEnter: a,
    onEnter: p,
    onAfterEnter: u,
    onEnterCancelled: f,
    onBeforeLeave: h,
    onLeave: g,
    onAfterLeave: E,
    onLeaveCancelled: A,
    onBeforeAppear: q,
    onAppear: B,
    onAfterAppear: D,
    onAppearCancelled: k
  } = t, W = String(e.key), x = Lr(n, e), F = (I, U) => {
    I && Le(
      I,
      s,
      9,
      U
    );
  }, ee = (I, U) => {
    const J = U[1];
    F(I, U), N(I) ? I.every((M) => M.length <= 1) && J() : I.length <= 1 && J();
  }, K = {
    mode: i,
    persisted: l,
    beforeEnter(I) {
      let U = a;
      if (!n.isMounted)
        if (r)
          U = q || a;
        else
          return;
      I[ht] && I[ht](
        !0
        /* cancelled */
      );
      const J = x[W];
      J && Tt(e, J) && J.el[ht] && J.el[ht](), F(U, [I]);
    },
    enter(I) {
      let U = p, J = u, M = f;
      if (!n.isMounted)
        if (r)
          U = B || p, J = D || u, M = k || f;
        else
          return;
      let re = !1;
      const ge = I[En] = (we) => {
        re || (re = !0, we ? F(M, [I]) : F(J, [I]), K.delayedLeave && K.delayedLeave(), I[En] = void 0);
      };
      U ? ee(U, [I, ge]) : ge();
    },
    leave(I, U) {
      const J = String(e.key);
      if (I[En] && I[En](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return U();
      F(h, [I]);
      let M = !1;
      const re = I[ht] = (ge) => {
        M || (M = !0, U(), ge ? F(A, [I]) : F(E, [I]), I[ht] = void 0, x[J] === e && delete x[J]);
      };
      x[J] = e, g ? ee(g, [I, re]) : re();
    },
    clone(I) {
      const U = $s(
        I,
        t,
        n,
        s,
        o
      );
      return o && o(U), U;
    }
  };
  return K;
}
function hs(e) {
  if (wn(e))
    return e = Je(e), e.children = null, e;
}
function bo(e) {
  if (!wn(e))
    return Fr(e.type) && e.children ? jr(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && L(n.default))
      return n.default();
  }
}
function dn(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, dn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Hr(e, t = !1, n) {
  let s = [], o = 0;
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    const l = n == null ? i.key : String(n) + String(i.key != null ? i.key : r);
    i.type === be ? (i.patchFlag & 128 && o++, s = s.concat(
      Hr(i.children, t, l)
    )) : (t || i.type !== fe) && s.push(l != null ? Je(i, { key: l }) : i);
  }
  if (o > 1)
    for (let r = 0; r < s.length; r++)
      s[r].patchFlag = -2;
  return s;
}
function Vr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Gl = /* @__PURE__ */ new WeakSet();
function Es(e, t, n, s, o = !1) {
  if (N(e)) {
    e.forEach(
      (E, A) => Es(
        E,
        t && (N(t) ? t[A] : t),
        n,
        s,
        o
      )
    );
    return;
  }
  if (Ht(s) && !o)
    return;
  const r = s.shapeFlag & 4 ? ss(s.component) : s.el, i = o ? null : r, { i: l, r: a } = e;
  if (!l) {
    w(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const p = t && t.r, u = l.refs === Q ? l.refs = {} : l.refs, f = l.setupState, h = V(f), g = f === Q ? () => !1 : (E) => (Y(h, E) && !de(h[E]) && w(
    `Template ref "${E}" used on a non-ref value. It will not work in the production build.`
  ), Gl.has(h[E]) ? !1 : Y(h, E));
  if (p != null && p !== a && (le(p) ? (u[p] = null, g(p) && (f[p] = null)) : de(p) && (p.value = null)), L(a))
    Wt(a, l, 12, [i, u]);
  else {
    const E = le(a), A = de(a);
    if (E || A) {
      const q = () => {
        if (e.f) {
          const B = E ? g(a) ? f[a] : u[a] : a.value;
          o ? N(B) && Bs(B, r) : N(B) ? B.includes(r) || B.push(r) : E ? (u[a] = [r], g(a) && (f[a] = u[a])) : (a.value = [r], e.k && (u[e.k] = a.value));
        } else E ? (u[a] = i, g(a) && (f[a] = i)) : A ? (a.value = i, e.k && (u[e.k] = i)) : w("Invalid template ref type:", a, `(${typeof a})`);
      };
      i ? (q.id = -1, Ae(q, n)) : q();
    } else
      w("Invalid template ref type:", a, `(${typeof a})`);
  }
}
vn().requestIdleCallback;
vn().cancelIdleCallback;
const Ht = (e) => !!e.type.__asyncLoader, wn = (e) => e.type.__isKeepAlive;
function Jl(e, t) {
  Br(e, "a", t);
}
function Yl(e, t) {
  Br(e, "da", t);
}
function Br(e, t, n = he) {
  const s = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (ts(t, s, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      wn(o.parent.vnode) && zl(s, t, n, o), o = o.parent;
  }
}
function zl(e, t, n, s) {
  const o = ts(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  Wr(() => {
    Bs(s[t], o);
  }, n);
}
function ts(e, t, n = he, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...i) => {
      rt();
      const l = Cn(n), a = Le(t, n, e, i);
      return l(), it(), a;
    });
    return s ? o.unshift(r) : o.push(r), r;
  } else {
    const o = Ct(Qs[e].replace(/ hook$/, ""));
    w(
      `${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const lt = (e) => (t, n = he) => {
  (!hn || e === "sp") && ts(e, (...s) => t(...s), n);
}, Ql = lt("bm"), eo = lt("m"), Xl = lt(
  "bu"
), Zl = lt("u"), Ur = lt(
  "bum"
), Wr = lt("um"), ec = lt(
  "sp"
), tc = lt("rtg"), nc = lt("rtc");
function sc(e, t = he) {
  ts("ec", e, t);
}
const oc = "components", Kr = Symbol.for("v-ndc");
function rc(e) {
  return le(e) ? ic(oc, e, !1) || e : e || Kr;
}
function ic(e, t, n = !0, s = !1) {
  const o = ue || he;
  if (o) {
    const r = o.type;
    {
      const l = io(
        r,
        !1
      );
      if (l && (l === t || l === Oe(t) || l === It(Oe(t))))
        return r;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      _o(o[e] || r[e], t) || // global registration
      _o(o.appContext[e], t)
    );
    return !i && s ? r : (n && !i && w(`Failed to resolve ${e.slice(0, -1)}: ${t}
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`), i);
  } else
    w(
      `resolve${It(e.slice(0, -1))} can only be used in render() or setup().`
    );
}
function _o(e, t) {
  return e && (e[t] || e[Oe(t)] || e[It(Oe(t))]);
}
function qr(e, t, n, s) {
  let o;
  const r = n, i = N(e);
  if (i || le(e)) {
    const l = i && Et(e);
    let a = !1;
    l && (a = !$e(e), e = Qn(e)), o = new Array(e.length);
    for (let p = 0, u = e.length; p < u; p++)
      o[p] = t(
        a ? ye(e[p]) : e[p],
        p,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    Number.isInteger(e) || w(`The v-for range expect an integer value but got ${e}.`), o = new Array(e);
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
function Gr(e, t, n = {}, s, o) {
  if (ue.ce || ue.parent && Ht(ue.parent) && ue.parent.ce)
    return X(), Ut(
      be,
      null,
      [oe("slot", n, s)],
      64
    );
  let r = e[t];
  r && r.length > 1 && (w(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), r = () => []), r && r._c && (r._d = !1), X();
  const i = r && Jr(r(n)), l = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  i && i.key, a = Ut(
    be,
    {
      key: (l && !ot(l) ? l : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!i && s ? "_fb" : "")
    },
    i || [],
    i && e._ === 1 ? 64 : -2
  );
  return r && r._c && (r._d = !0), a;
}
function Jr(e) {
  return e.some((t) => Rt(t) ? !(t.type === fe || t.type === be && !Jr(t.children)) : !0) ? e : null;
}
const Ms = (e) => e ? vi(e) ? ss(e) : Ms(e.parent) : null, At = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ae(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => Ke(e.props),
    $attrs: (e) => Ke(e.attrs),
    $slots: (e) => Ke(e.slots),
    $refs: (e) => Ke(e.refs),
    $parent: (e) => Ms(e.parent),
    $root: (e) => Ms(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => no(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      es(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ml.bind(e.proxy)),
    $watch: (e) => Lc.bind(e)
  })
), to = (e) => e === "_" || e === "$", ms = (e, t) => e !== Q && !e.__isScriptSetup && Y(e, t), Yr = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: o, props: r, accessCache: i, type: l, appContext: a } = e;
    if (t === "__isVue")
      return !0;
    let p;
    if (t[0] !== "$") {
      const g = i[t];
      if (g !== void 0)
        switch (g) {
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
        if (ms(s, t))
          return i[t] = 1, s[t];
        if (o !== Q && Y(o, t))
          return i[t] = 2, o[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (p = e.propsOptions[0]) && Y(p, t)
        )
          return i[t] = 3, r[t];
        if (n !== Q && Y(n, t))
          return i[t] = 4, n[t];
        As && (i[t] = 0);
      }
    }
    const u = At[t];
    let f, h;
    if (u)
      return t === "$attrs" ? (me(e.attrs, "get", ""), Kn()) : t === "$slots" && me(e, "get", t), u(e);
    if (
      // css module (injected by vue-loader)
      (f = l.__cssModules) && (f = f[t])
    )
      return f;
    if (n !== Q && Y(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      h = a.config.globalProperties, Y(h, t)
    )
      return h[t];
    ue && (!le(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (o !== Q && to(t[0]) && Y(o, t) ? w(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === ue && w(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: o, ctx: r } = e;
    return ms(o, t) ? (o[t] = n, !0) : o.__isScriptSetup && Y(o, t) ? (w(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : s !== Q && Y(s, t) ? (s[t] = n, !0) : Y(e.props, t) ? (w(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (w(
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
    return !!n[i] || e !== Q && Y(e, i) || ms(t, i) || (l = r[0]) && Y(l, i) || Y(s, i) || Y(At, i) || Y(o.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Y(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
Yr.ownKeys = (e) => (w(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e));
function lc(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(At).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => At[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: _e
    });
  }), t;
}
function cc(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((s) => {
    Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[s],
      set: _e
    });
  });
}
function ac(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(V(n)).forEach((s) => {
    if (!n.__isScriptSetup) {
      if (to(s[0])) {
        w(
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
        set: _e
      });
    }
  });
}
function wo(e) {
  return N(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function fc() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? w(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let As = !0;
function uc(e) {
  const t = no(e), n = e.proxy, s = e.ctx;
  As = !1, t.beforeCreate && xo(t.beforeCreate, e, "bc");
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
    beforeUpdate: g,
    updated: E,
    activated: A,
    deactivated: q,
    beforeDestroy: B,
    beforeUnmount: D,
    destroyed: k,
    unmounted: W,
    render: x,
    renderTracked: F,
    renderTriggered: ee,
    errorCaptured: K,
    serverPrefetch: I,
    // public API
    expose: U,
    inheritAttrs: J,
    // assets
    components: M,
    directives: re,
    filters: ge
  } = t, we = fc();
  {
    const [P] = e.propsOptions;
    if (P)
      for (const O in P)
        we("Props", O);
  }
  if (p && dc(p, s, we), i)
    for (const P in i) {
      const O = i[P];
      L(O) ? (Object.defineProperty(s, P, {
        value: O.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }), we("Methods", P)) : w(
        `Method "${P}" has type "${typeof O}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (o) {
    L(o) || w(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const P = o.call(n, n);
    if (Us(P) && w(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !Z(P))
      w("data() should return an object.");
    else {
      e.data = zs(P);
      for (const O in P)
        we("Data", O), to(O[0]) || Object.defineProperty(s, O, {
          configurable: !0,
          enumerable: !0,
          get: () => P[O],
          set: _e
        });
    }
  }
  if (As = !0, r)
    for (const P in r) {
      const O = r[P], ie = L(O) ? O.bind(n, n) : L(O.get) ? O.get.bind(n, n) : _e;
      ie === _e && w(`Computed property "${P}" has no getter.`);
      const xe = !L(O) && L(O.set) ? O.set.bind(n) : () => {
        w(
          `Write operation failed: computed property "${P}" is readonly.`
        );
      }, Nt = ke({
        get: ie,
        set: xe
      });
      Object.defineProperty(s, P, {
        enumerable: !0,
        configurable: !0,
        get: () => Nt.value,
        set: (Ft) => Nt.value = Ft
      }), we("Computed", P);
    }
  if (l)
    for (const P in l)
      zr(l[P], s, n, P);
  if (a) {
    const P = L(a) ? a.call(n) : a;
    Reflect.ownKeys(P).forEach((O) => {
      yc(O, P[O]);
    });
  }
  u && xo(u, e, "c");
  function pe(P, O) {
    N(O) ? O.forEach((ie) => P(ie.bind(n))) : O && P(O.bind(n));
  }
  if (pe(Ql, f), pe(eo, h), pe(Xl, g), pe(Zl, E), pe(Jl, A), pe(Yl, q), pe(sc, K), pe(nc, F), pe(tc, ee), pe(Ur, D), pe(Wr, W), pe(ec, I), N(U))
    if (U.length) {
      const P = e.exposed || (e.exposed = {});
      U.forEach((O) => {
        Object.defineProperty(P, O, {
          get: () => n[O],
          set: (ie) => n[O] = ie
        });
      });
    } else e.exposed || (e.exposed = {});
  x && e.render === _e && (e.render = x), J != null && (e.inheritAttrs = J), M && (e.components = M), re && (e.directives = re), I && Vr(e);
}
function dc(e, t, n = _e) {
  N(e) && (e = Is(e));
  for (const s in e) {
    const o = e[s];
    let r;
    Z(o) ? "default" in o ? r = Pn(
      o.from || s,
      o.default,
      !0
    ) : r = Pn(o.from || s) : r = Pn(o), de(r) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (i) => r.value = i
    }) : t[s] = r, n("Inject", s);
  }
}
function xo(e, t, n) {
  Le(
    N(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function zr(e, t, n, s) {
  let o = s.includes(".") ? ai(n, s) : () => n[s];
  if (le(e)) {
    const r = t[e];
    L(r) ? on(o, r) : w(`Invalid watch handler specified by key "${e}"`, r);
  } else if (L(e))
    on(o, e.bind(n));
  else if (Z(e))
    if (N(e))
      e.forEach((r) => zr(r, t, n, s));
    else {
      const r = L(e.handler) ? e.handler.bind(n) : t[e.handler];
      L(r) ? on(o, r, e) : w(`Invalid watch handler specified by key "${e.handler}"`, r);
    }
  else
    w(`Invalid watch option: "${s}"`, e);
}
function no(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: o,
    optionsCache: r,
    config: { optionMergeStrategies: i }
  } = e.appContext, l = r.get(t);
  let a;
  return l ? a = l : !o.length && !n && !s ? a = t : (a = {}, o.length && o.forEach(
    (p) => Un(a, p, i, !0)
  ), Un(a, t, i)), Z(t) && r.set(t, a), a;
}
function Un(e, t, n, s = !1) {
  const { mixins: o, extends: r } = t;
  r && Un(e, r, n, !0), o && o.forEach(
    (i) => Un(e, i, n, !0)
  );
  for (const i in t)
    if (s && i === "expose")
      w(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = pc[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const pc = {
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
  watch: mc,
  // provide / inject
  provide: Co,
  inject: hc
};
function Co(e, t) {
  return t ? e ? function() {
    return ae(
      L(e) ? e.call(this, this) : e,
      L(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function hc(e, t) {
  return en(Is(e), Is(t));
}
function Is(e) {
  if (N(e)) {
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
  return e ? N(e) && N(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ae(
    /* @__PURE__ */ Object.create(null),
    wo(e),
    wo(t ?? {})
  ) : t;
}
function mc(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = ae(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = Se(e[s], t[s]);
  return n;
}
function Qr() {
  return {
    app: null,
    config: {
      isNativeTag: $i,
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
let gc = 0;
function vc(e, t) {
  return function(s, o = null) {
    L(s) || (s = ae({}, s)), o != null && !Z(o) && (w("root props passed to app.mount() must be an object."), o = null);
    const r = Qr(), i = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const p = r.app = {
      _uid: gc++,
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
        w(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(u, ...f) {
        return i.has(u) ? w("Plugin has already been applied to target app.") : u && L(u.install) ? (i.add(u), u.install(p, ...f)) : L(u) ? (i.add(u), u(p, ...f)) : w(
          'A plugin must either be a function or an object with an "install" function.'
        ), p;
      },
      mixin(u) {
        return r.mixins.includes(u) ? w(
          "Mixin has already been applied to target app" + (u.name ? `: ${u.name}` : "")
        ) : r.mixins.push(u), p;
      },
      component(u, f) {
        return ks(u, r.config), f ? (r.components[u] && w(`Component "${u}" has already been registered in target app.`), r.components[u] = f, p) : r.components[u];
      },
      directive(u, f) {
        return Nr(u), f ? (r.directives[u] && w(`Directive "${u}" has already been registered in target app.`), r.directives[u] = f, p) : r.directives[u];
      },
      mount(u, f, h) {
        if (a)
          w(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          u.__vue_app__ && w(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const g = p._ceVNode || oe(s, o);
          return g.appContext = r, h === !0 ? h = "svg" : h === !1 && (h = void 0), r.reload = () => {
            e(
              Je(g),
              u,
              h
            );
          }, f && t ? t(g, u) : e(g, u, h), a = !0, p._container = u, u.__vue_app__ = p, p._instance = g.component, Fl(p, No), ss(g.component);
        }
      },
      onUnmount(u) {
        typeof u != "function" && w(
          `Expected function as first argument to app.onUnmount(), but got ${typeof u}`
        ), l.push(u);
      },
      unmount() {
        a ? (Le(
          l,
          p._instance,
          16
        ), e(null, p._container), p._instance = null, Dl(p), delete p._container.__vue_app__) : w("Cannot unmount an app that is not mounted.");
      },
      provide(u, f) {
        return u in r.provides && w(
          `App already provides property with key "${String(u)}". It will be overwritten with the new value.`
        ), r.provides[u] = f, p;
      },
      runWithContext(u) {
        const f = Vt;
        Vt = p;
        try {
          return u();
        } finally {
          Vt = f;
        }
      }
    };
    return p;
  };
}
let Vt = null;
function yc(e, t) {
  if (!he)
    w("provide() can only be used inside setup().");
  else {
    let n = he.provides;
    const s = he.parent && he.parent.provides;
    s === n && (n = he.provides = Object.create(s)), n[e] = t;
  }
}
function Pn(e, t, n = !1) {
  const s = he || ue;
  if (s || Vt) {
    const o = Vt ? Vt._context.provides : s ? s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && L(t) ? t.call(s && s.proxy) : t;
    w(`injection "${String(e)}" not found.`);
  } else
    w("inject() can only be used inside setup() or functional components.");
}
const Xr = {}, Zr = () => Object.create(Xr), ei = (e) => Object.getPrototypeOf(e) === Xr;
function bc(e, t, n, s = !1) {
  const o = {}, r = Zr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), ti(e, t, o, r);
  for (const i in e.propsOptions[0])
    i in o || (o[i] = void 0);
  si(t || {}, o, e), n ? e.props = s ? o : pl(o) : e.type.props ? e.props = o : e.props = r, e.attrs = r;
}
function _c(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function wc(e, t, n, s) {
  const {
    props: o,
    attrs: r,
    vnode: { patchFlag: i }
  } = e, l = V(o), [a] = e.propsOptions;
  let p = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !_c(e) && (s || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const u = e.vnode.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        let h = u[f];
        if (ns(e.emitsOptions, h))
          continue;
        const g = t[h];
        if (a)
          if (Y(r, h))
            g !== r[h] && (r[h] = g, p = !0);
          else {
            const E = Oe(h);
            o[E] = Ps(
              a,
              l,
              E,
              g,
              e,
              !1
            );
          }
        else
          g !== r[h] && (r[h] = g, p = !0);
      }
    }
  } else {
    ti(e, t, o, r) && (p = !0);
    let u;
    for (const f in l)
      (!t || // for camelCase
      !Y(t, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = tt(f)) === f || !Y(t, u))) && (a ? n && // for camelCase
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
        (!t || !Y(t, f)) && (delete r[f], p = !0);
  }
  p && Ue(e.attrs, "set", ""), si(t || {}, o, e);
}
function ti(e, t, n, s) {
  const [o, r] = e.propsOptions;
  let i = !1, l;
  if (t)
    for (let a in t) {
      if (tn(a))
        continue;
      const p = t[a];
      let u;
      o && Y(o, u = Oe(a)) ? !r || !r.includes(u) ? n[u] = p : (l || (l = {}))[u] = p : ns(e.emitsOptions, a) || (!(a in s) || p !== s[a]) && (s[a] = p, i = !0);
    }
  if (r) {
    const a = V(n), p = l || Q;
    for (let u = 0; u < r.length; u++) {
      const f = r[u];
      n[f] = Ps(
        o,
        a,
        f,
        p[f],
        e,
        !Y(p, f)
      );
    }
  }
  return i;
}
function Ps(e, t, n, s, o, r) {
  const i = e[n];
  if (i != null) {
    const l = Y(i, "default");
    if (l && s === void 0) {
      const a = i.default;
      if (i.type !== Function && !i.skipFactory && L(a)) {
        const { propsDefaults: p } = o;
        if (n in p)
          s = p[n];
        else {
          const u = Cn(o);
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
    ] && (s === "" || s === tt(n)) && (s = !0));
  }
  return s;
}
const xc = /* @__PURE__ */ new WeakMap();
function ni(e, t, n = !1) {
  const s = n ? xc : t.propsCache, o = s.get(e);
  if (o)
    return o;
  const r = e.props, i = {}, l = [];
  let a = !1;
  if (!L(e)) {
    const u = (f) => {
      a = !0;
      const [h, g] = ni(f, t, !0);
      ae(i, h), g && l.push(...g);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!r && !a)
    return Z(e) && s.set(e, jt), jt;
  if (N(r))
    for (let u = 0; u < r.length; u++) {
      le(r[u]) || w("props must be strings when using array syntax.", r[u]);
      const f = Oe(r[u]);
      To(f) && (i[f] = Q);
    }
  else if (r) {
    Z(r) || w("invalid props options", r);
    for (const u in r) {
      const f = Oe(u);
      if (To(f)) {
        const h = r[u], g = i[f] = N(h) || L(h) ? { type: h } : ae({}, h), E = g.type;
        let A = !1, q = !0;
        if (N(E))
          for (let B = 0; B < E.length; ++B) {
            const D = E[B], k = L(D) && D.name;
            if (k === "Boolean") {
              A = !0;
              break;
            } else k === "String" && (q = !1);
          }
        else
          A = L(E) && E.name === "Boolean";
        g[
          0
          /* shouldCast */
        ] = A, g[
          1
          /* shouldCastTrue */
        ] = q, (A || Y(g, "default")) && l.push(f);
      }
    }
  }
  const p = [i, l];
  return Z(e) && s.set(e, p), p;
}
function To(e) {
  return e[0] !== "$" && !tn(e) ? !0 : (w(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Cc(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function si(e, t, n) {
  const s = V(t), o = n.propsOptions[0], r = Object.keys(e).map((i) => Oe(i));
  for (const i in o) {
    let l = o[i];
    l != null && Sc(
      i,
      s[i],
      l,
      Ke(s),
      !r.includes(i)
    );
  }
}
function Sc(e, t, n, s, o) {
  const { type: r, required: i, validator: l, skipCheck: a } = n;
  if (i && o) {
    w('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !i)) {
    if (r != null && r !== !0 && !a) {
      let p = !1;
      const u = N(r) ? r : [r], f = [];
      for (let h = 0; h < u.length && !p; h++) {
        const { valid: g, expectedType: E } = Oc(t, u[h]);
        f.push(E || ""), p = g;
      }
      if (!p) {
        w($c(e, t, f));
        return;
      }
    }
    l && !l(t, s) && w('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Tc = /* @__PURE__ */ st(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function Oc(e, t) {
  let n;
  const s = Cc(t);
  if (s === "null")
    n = e === null;
  else if (Tc(s)) {
    const o = typeof e;
    n = o === s.toLowerCase(), !n && o === "object" && (n = e instanceof t);
  } else s === "Object" ? n = Z(e) : s === "Array" ? n = N(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: s
  };
}
function $c(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let s = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(It).join(" | ")}`;
  const o = n[0], r = Ws(t), i = Oo(t, o), l = Oo(t, r);
  return n.length === 1 && $o(o) && !Ec(o, r) && (s += ` with value ${i}`), s += `, got ${r} `, $o(r) && (s += `with value ${l}.`), s;
}
function Oo(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function $o(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Ec(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const oi = (e) => e[0] === "_" || e === "$stable", so = (e) => N(e) ? e.map(De) : [De(e)], Mc = (e, t, n) => {
  if (t._n)
    return t;
  const s = un((...o) => (dt.NODE_ENV !== "production" && he && (!n || n.root === he.root) && w(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), so(t(...o))), n);
  return s._c = !1, s;
}, ri = (e, t, n) => {
  const s = e._ctx;
  for (const o in e) {
    if (oi(o)) continue;
    const r = e[o];
    if (L(r))
      t[o] = Mc(o, r, s);
    else if (r != null) {
      w(
        `Non-function value encountered for slot "${o}". Prefer function slots for better performance.`
      );
      const i = so(r);
      t[o] = () => i;
    }
  }
}, ii = (e, t) => {
  wn(e.vnode) || w(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = so(t);
  e.slots.default = () => n;
}, Rs = (e, t, n) => {
  for (const s in t)
    (n || s !== "_") && (e[s] = t[s]);
}, Ac = (e, t, n) => {
  const s = e.slots = Zr();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (Rs(s, t, n), n && kn(s, "_", o, !0)) : ri(t, s);
  } else t && ii(e, t);
}, Ic = (e, t, n) => {
  const { vnode: s, slots: o } = e;
  let r = !0, i = Q;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? qe ? (Rs(o, t, n), Ue(e, "set", "$slots")) : n && l === 1 ? r = !1 : Rs(o, t, n) : (r = !t.$stable, ri(t, o)), i = t;
  } else t && (ii(e, t), i = { default: 1 });
  if (r)
    for (const l in o)
      !oi(l) && i[l] == null && delete o[l];
};
let zt, gt;
function ze(e, t) {
  e.appContext.config.performance && Wn() && gt.mark(`vue-${t}-${e.uid}`), Hl(e, t, Wn() ? gt.now() : Date.now());
}
function Qe(e, t) {
  if (e.appContext.config.performance && Wn()) {
    const n = `vue-${t}-${e.uid}`, s = n + ":end";
    gt.mark(s), gt.measure(
      `<${os(e, e.type)}> ${t}`,
      n,
      s
    ), gt.clearMarks(n), gt.clearMarks(s);
  }
  Vl(e, t, Wn() ? gt.now() : Date.now());
}
function Wn() {
  return zt !== void 0 || (typeof window < "u" && window.performance ? (zt = !0, gt = window.performance) : zt = !1), zt;
}
function Pc() {
  const e = [];
  if (e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const Ae = qc;
function Rc(e) {
  return Nc(e);
}
function Nc(e, t) {
  Pc();
  const n = vn();
  n.__VUE__ = !0, Ar(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
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
    setScopeId: g = _e,
    insertStaticContent: E
  } = e, A = (c, d, m, b = null, v = null, y = null, T = void 0, S = null, C = qe ? !1 : !!d.dynamicChildren) => {
    if (c === d)
      return;
    c && !Tt(c, d) && (b = Sn(c), at(c, v, y, !0), c = null), d.patchFlag === -2 && (C = !1, d.dynamicChildren = null);
    const { type: _, ref: j, shapeFlag: $ } = d;
    switch (_) {
      case xn:
        q(c, d, m, b);
        break;
      case fe:
        B(c, d, m, b);
        break;
      case Rn:
        c == null ? D(d, m, b, T) : k(c, d, m, T);
        break;
      case be:
        re(
          c,
          d,
          m,
          b,
          v,
          y,
          T,
          S,
          C
        );
        break;
      default:
        $ & 1 ? F(
          c,
          d,
          m,
          b,
          v,
          y,
          T,
          S,
          C
        ) : $ & 6 ? ge(
          c,
          d,
          m,
          b,
          v,
          y,
          T,
          S,
          C
        ) : $ & 64 || $ & 128 ? _.process(
          c,
          d,
          m,
          b,
          v,
          y,
          T,
          S,
          C,
          qt
        ) : w("Invalid VNode type:", _, `(${typeof _})`);
    }
    j != null && v && Es(j, c && c.ref, y, d || c, !d);
  }, q = (c, d, m, b) => {
    if (c == null)
      s(
        d.el = l(d.children),
        m,
        b
      );
    else {
      const v = d.el = c.el;
      d.children !== c.children && p(v, d.children);
    }
  }, B = (c, d, m, b) => {
    c == null ? s(
      d.el = a(d.children || ""),
      m,
      b
    ) : d.el = c.el;
  }, D = (c, d, m, b) => {
    [c.el, c.anchor] = E(
      c.children,
      d,
      m,
      b,
      c.el,
      c.anchor
    );
  }, k = (c, d, m, b) => {
    if (d.children !== c.children) {
      const v = h(c.anchor);
      x(c), [d.el, d.anchor] = E(
        d.children,
        m,
        v,
        b
      );
    } else
      d.el = c.el, d.anchor = c.anchor;
  }, W = ({ el: c, anchor: d }, m, b) => {
    let v;
    for (; c && c !== d; )
      v = h(c), s(c, m, b), c = v;
    s(d, m, b);
  }, x = ({ el: c, anchor: d }) => {
    let m;
    for (; c && c !== d; )
      m = h(c), o(c), c = m;
    o(d);
  }, F = (c, d, m, b, v, y, T, S, C) => {
    d.type === "svg" ? T = "svg" : d.type === "math" && (T = "mathml"), c == null ? ee(
      d,
      m,
      b,
      v,
      y,
      T,
      S,
      C
    ) : U(
      c,
      d,
      v,
      y,
      T,
      S,
      C
    );
  }, ee = (c, d, m, b, v, y, T, S) => {
    let C, _;
    const { props: j, shapeFlag: $, transition: R, dirs: H } = c;
    if (C = c.el = i(
      c.type,
      y,
      j && j.is,
      j
    ), $ & 8 ? u(C, c.children) : $ & 16 && I(
      c.children,
      C,
      null,
      b,
      v,
      gs(c, y),
      T,
      S
    ), H && bt(c, null, b, "created"), K(C, c, c.scopeId, T, b), j) {
      for (const se in j)
        se !== "value" && !tn(se) && r(C, se, null, j[se], y, b);
      "value" in j && r(C, "value", null, j.value, y), (_ = j.onVnodeBeforeMount) && Ve(_, b, c);
    }
    kn(C, "__vnode", c, !0), kn(C, "__vueParentComponent", b, !0), H && bt(c, null, b, "beforeMount");
    const G = Fc(v, R);
    G && R.beforeEnter(C), s(C, d, m), ((_ = j && j.onVnodeMounted) || G || H) && Ae(() => {
      _ && Ve(_, b, c), G && R.enter(C), H && bt(c, null, b, "mounted");
    }, v);
  }, K = (c, d, m, b, v) => {
    if (m && g(c, m), b)
      for (let y = 0; y < b.length; y++)
        g(c, b[y]);
    if (v) {
      let y = v.subTree;
      if (y.patchFlag > 0 && y.patchFlag & 2048 && (y = oo(y.children) || y), d === y || di(y.type) && (y.ssContent === d || y.ssFallback === d)) {
        const T = v.vnode;
        K(
          c,
          T,
          T.scopeId,
          T.slotScopeIds,
          v.parent
        );
      }
    }
  }, I = (c, d, m, b, v, y, T, S, C = 0) => {
    for (let _ = C; _ < c.length; _++) {
      const j = c[_] = S ? mt(c[_]) : De(c[_]);
      A(
        null,
        j,
        d,
        m,
        b,
        v,
        y,
        T,
        S
      );
    }
  }, U = (c, d, m, b, v, y, T) => {
    const S = d.el = c.el;
    S.__vnode = d;
    let { patchFlag: C, dynamicChildren: _, dirs: j } = d;
    C |= c.patchFlag & 16;
    const $ = c.props || Q, R = d.props || Q;
    let H;
    if (m && _t(m, !1), (H = R.onVnodeBeforeUpdate) && Ve(H, m, d, c), j && bt(d, c, m, "beforeUpdate"), m && _t(m, !0), qe && (C = 0, T = !1, _ = null), ($.innerHTML && R.innerHTML == null || $.textContent && R.textContent == null) && u(S, ""), _ ? (J(
      c.dynamicChildren,
      _,
      S,
      m,
      b,
      gs(d, v),
      y
    ), Ns(c, d)) : T || ie(
      c,
      d,
      S,
      null,
      m,
      b,
      gs(d, v),
      y,
      !1
    ), C > 0) {
      if (C & 16)
        M(S, $, R, m, v);
      else if (C & 2 && $.class !== R.class && r(S, "class", null, R.class, v), C & 4 && r(S, "style", $.style, R.style, v), C & 8) {
        const G = d.dynamicProps;
        for (let se = 0; se < G.length; se++) {
          const te = G[se], Ee = $[te], ve = R[te];
          (ve !== Ee || te === "value") && r(S, te, Ee, ve, v, m);
        }
      }
      C & 1 && c.children !== d.children && u(S, d.children);
    } else !T && _ == null && M(S, $, R, m, v);
    ((H = R.onVnodeUpdated) || j) && Ae(() => {
      H && Ve(H, m, d, c), j && bt(d, c, m, "updated");
    }, b);
  }, J = (c, d, m, b, v, y, T) => {
    for (let S = 0; S < d.length; S++) {
      const C = c[S], _ = d[S], j = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        C.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (C.type === be || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Tt(C, _) || // - In the case of a component, it could contain anything.
        C.shapeFlag & 70) ? f(C.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          m
        )
      );
      A(
        C,
        _,
        j,
        null,
        b,
        v,
        y,
        T,
        !0
      );
    }
  }, M = (c, d, m, b, v) => {
    if (d !== m) {
      if (d !== Q)
        for (const y in d)
          !tn(y) && !(y in m) && r(
            c,
            y,
            d[y],
            null,
            v,
            b
          );
      for (const y in m) {
        if (tn(y)) continue;
        const T = m[y], S = d[y];
        T !== S && y !== "value" && r(c, y, S, T, v, b);
      }
      "value" in m && r(c, "value", d.value, m.value, v);
    }
  }, re = (c, d, m, b, v, y, T, S, C) => {
    const _ = d.el = c ? c.el : l(""), j = d.anchor = c ? c.anchor : l("");
    let { patchFlag: $, dynamicChildren: R, slotScopeIds: H } = d;
    // #5523 dev root fragment may inherit directives
    (qe || $ & 2048) && ($ = 0, C = !1, R = null), H && (S = S ? S.concat(H) : H), c == null ? (s(_, m, b), s(j, m, b), I(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      d.children || [],
      m,
      j,
      v,
      y,
      T,
      S,
      C
    )) : $ > 0 && $ & 64 && R && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren ? (J(
      c.dynamicChildren,
      R,
      m,
      v,
      y,
      T,
      S
    ), Ns(c, d)) : ie(
      c,
      d,
      m,
      j,
      v,
      y,
      T,
      S,
      C
    );
  }, ge = (c, d, m, b, v, y, T, S, C) => {
    d.slotScopeIds = S, c == null ? d.shapeFlag & 512 ? v.ctx.activate(
      d,
      m,
      b,
      T,
      C
    ) : we(
      d,
      m,
      b,
      v,
      y,
      T,
      C
    ) : pe(c, d, C);
  }, we = (c, d, m, b, v, y, T) => {
    const S = c.component = ta(
      c,
      b,
      v
    );
    if (S.type.__hmrId && Il(S), Mn(c), ze(S, "mount"), wn(c) && (S.ctx.renderer = qt), ze(S, "init"), sa(S, !1, T), Qe(S, "init"), S.asyncDep) {
      if (qe && (c.el = null), v && v.registerDep(S, P, T), !c.el) {
        const C = S.subTree = oe(fe);
        B(null, C, d, m);
      }
    } else
      P(
        S,
        c,
        d,
        m,
        v,
        y,
        T
      );
    An(), Qe(S, "mount");
  }, pe = (c, d, m) => {
    const b = d.component = c.component;
    if (Wc(c, d, m))
      if (b.asyncDep && !b.asyncResolved) {
        Mn(d), O(b, d, m), An();
        return;
      } else
        b.next = d, b.update();
    else
      d.el = c.el, b.vnode = d;
  }, P = (c, d, m, b, v, y, T) => {
    const S = () => {
      if (c.isMounted) {
        let { next: $, bu: R, u: H, parent: G, vnode: se } = c;
        {
          const Me = li(c);
          if (Me) {
            $ && ($.el = se.el, O(c, $, T)), Me.asyncDep.then(() => {
              c.isUnmounted || S();
            });
            return;
          }
        }
        let te = $, Ee;
        Mn($ || c.vnode), _t(c, !1), $ ? ($.el = se.el, O(c, $, T)) : $ = se, R && Jt(R), (Ee = $.props && $.props.onVnodeBeforeUpdate) && Ve(Ee, G, $, se), _t(c, !0), ze(c, "render");
        const ve = vs(c);
        Qe(c, "render");
        const Fe = c.subTree;
        c.subTree = ve, ze(c, "patch"), A(
          Fe,
          ve,
          // parent may have changed if it's in a teleport
          f(Fe.el),
          // anchor may have changed if it's in a fragment
          Sn(Fe),
          c,
          v,
          y
        ), Qe(c, "patch"), $.el = ve.el, te === null && Kc(c, ve.el), H && Ae(H, v), (Ee = $.props && $.props.onVnodeUpdated) && Ae(
          () => Ve(Ee, G, $, se),
          v
        ), Ir(c), An();
      } else {
        let $;
        const { el: R, props: H } = d, { bm: G, m: se, parent: te, root: Ee, type: ve } = c, Fe = Ht(d);
        if (_t(c, !1), G && Jt(G), !Fe && ($ = H && H.onVnodeBeforeMount) && Ve($, te, d), _t(c, !0), R && ao) {
          const Me = () => {
            ze(c, "render"), c.subTree = vs(c), Qe(c, "render"), ze(c, "hydrate"), ao(
              R,
              c.subTree,
              c,
              v,
              null
            ), Qe(c, "hydrate");
          };
          Fe && ve.__asyncHydrate ? ve.__asyncHydrate(
            R,
            c,
            Me
          ) : Me();
        } else {
          Ee.ce && Ee.ce._injectChildStyle(ve), ze(c, "render");
          const Me = c.subTree = vs(c);
          Qe(c, "render"), ze(c, "patch"), A(
            null,
            Me,
            m,
            b,
            c,
            v,
            y
          ), Qe(c, "patch"), d.el = Me.el;
        }
        if (se && Ae(se, v), !Fe && ($ = H && H.onVnodeMounted)) {
          const Me = d;
          Ae(
            () => Ve($, te, Me),
            v
          );
        }
        (d.shapeFlag & 256 || te && Ht(te.vnode) && te.vnode.shapeFlag & 256) && c.a && Ae(c.a, v), c.isMounted = !0, kl(c), d = m = b = null;
      }
    };
    c.scope.on();
    const C = c.effect = new rr(S);
    c.scope.off();
    const _ = c.update = C.run.bind(C), j = c.job = C.runIfDirty.bind(C);
    j.i = c, j.id = c.uid, C.scheduler = () => es(j), _t(c, !0), C.onTrack = c.rtc ? ($) => Jt(c.rtc, $) : void 0, C.onTrigger = c.rtg ? ($) => Jt(c.rtg, $) : void 0, _();
  }, O = (c, d, m) => {
    d.component = c;
    const b = c.vnode.props;
    c.vnode = d, c.next = null, wc(c, d.props, b, m), Ic(c, d.children, m), rt(), vo(c), it();
  }, ie = (c, d, m, b, v, y, T, S, C = !1) => {
    const _ = c && c.children, j = c ? c.shapeFlag : 0, $ = d.children, { patchFlag: R, shapeFlag: H } = d;
    if (R > 0) {
      if (R & 128) {
        Nt(
          _,
          $,
          m,
          b,
          v,
          y,
          T,
          S,
          C
        );
        return;
      } else if (R & 256) {
        xe(
          _,
          $,
          m,
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
    H & 8 ? (j & 16 && Kt(_, v, y), $ !== _ && u(m, $)) : j & 16 ? H & 16 ? Nt(
      _,
      $,
      m,
      b,
      v,
      y,
      T,
      S,
      C
    ) : Kt(_, v, y, !0) : (j & 8 && u(m, ""), H & 16 && I(
      $,
      m,
      b,
      v,
      y,
      T,
      S,
      C
    ));
  }, xe = (c, d, m, b, v, y, T, S, C) => {
    c = c || jt, d = d || jt;
    const _ = c.length, j = d.length, $ = Math.min(_, j);
    let R;
    for (R = 0; R < $; R++) {
      const H = d[R] = C ? mt(d[R]) : De(d[R]);
      A(
        c[R],
        H,
        m,
        null,
        v,
        y,
        T,
        S,
        C
      );
    }
    _ > j ? Kt(
      c,
      v,
      y,
      !0,
      !1,
      $
    ) : I(
      d,
      m,
      b,
      v,
      y,
      T,
      S,
      C,
      $
    );
  }, Nt = (c, d, m, b, v, y, T, S, C) => {
    let _ = 0;
    const j = d.length;
    let $ = c.length - 1, R = j - 1;
    for (; _ <= $ && _ <= R; ) {
      const H = c[_], G = d[_] = C ? mt(d[_]) : De(d[_]);
      if (Tt(H, G))
        A(
          H,
          G,
          m,
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
      const H = c[$], G = d[R] = C ? mt(d[R]) : De(d[R]);
      if (Tt(H, G))
        A(
          H,
          G,
          m,
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
        const H = R + 1, G = H < j ? d[H].el : b;
        for (; _ <= R; )
          A(
            null,
            d[_] = C ? mt(d[_]) : De(d[_]),
            m,
            G,
            v,
            y,
            T,
            S,
            C
          ), _++;
      }
    } else if (_ > R)
      for (; _ <= $; )
        at(c[_], v, y, !0), _++;
    else {
      const H = _, G = _, se = /* @__PURE__ */ new Map();
      for (_ = G; _ <= R; _++) {
        const Ce = d[_] = C ? mt(d[_]) : De(d[_]);
        Ce.key != null && (se.has(Ce.key) && w(
          "Duplicate keys found during update:",
          JSON.stringify(Ce.key),
          "Make sure keys are unique."
        ), se.set(Ce.key, _));
      }
      let te, Ee = 0;
      const ve = R - G + 1;
      let Fe = !1, Me = 0;
      const Gt = new Array(ve);
      for (_ = 0; _ < ve; _++) Gt[_] = 0;
      for (_ = H; _ <= $; _++) {
        const Ce = c[_];
        if (Ee >= ve) {
          at(Ce, v, y, !0);
          continue;
        }
        let He;
        if (Ce.key != null)
          He = se.get(Ce.key);
        else
          for (te = G; te <= R; te++)
            if (Gt[te - G] === 0 && Tt(Ce, d[te])) {
              He = te;
              break;
            }
        He === void 0 ? at(Ce, v, y, !0) : (Gt[He - G] = _ + 1, He >= Me ? Me = He : Fe = !0, A(
          Ce,
          d[He],
          m,
          null,
          v,
          y,
          T,
          S,
          C
        ), Ee++);
      }
      const fo = Fe ? Dc(Gt) : jt;
      for (te = fo.length - 1, _ = ve - 1; _ >= 0; _--) {
        const Ce = G + _, He = d[Ce], uo = Ce + 1 < j ? d[Ce + 1].el : b;
        Gt[_] === 0 ? A(
          null,
          He,
          m,
          uo,
          v,
          y,
          T,
          S,
          C
        ) : Fe && (te < 0 || _ !== fo[te] ? Ft(He, m, uo, 2) : te--);
      }
    }
  }, Ft = (c, d, m, b, v = null) => {
    const { el: y, type: T, transition: S, children: C, shapeFlag: _ } = c;
    if (_ & 6) {
      Ft(c.component.subTree, d, m, b);
      return;
    }
    if (_ & 128) {
      c.suspense.move(d, m, b);
      return;
    }
    if (_ & 64) {
      T.move(c, d, m, qt);
      return;
    }
    if (T === be) {
      s(y, d, m);
      for (let $ = 0; $ < C.length; $++)
        Ft(C[$], d, m, b);
      s(c.anchor, d, m);
      return;
    }
    if (T === Rn) {
      W(c, d, m);
      return;
    }
    if (b !== 2 && _ & 1 && S)
      if (b === 0)
        S.beforeEnter(y), s(y, d, m), Ae(() => S.enter(y), v);
      else {
        const { leave: $, delayLeave: R, afterLeave: H } = S, G = () => s(y, d, m), se = () => {
          $(y, () => {
            G(), H && H();
          });
        };
        R ? R(y, G, se) : se();
      }
    else
      s(y, d, m);
  }, at = (c, d, m, b = !1, v = !1) => {
    const {
      type: y,
      props: T,
      ref: S,
      children: C,
      dynamicChildren: _,
      shapeFlag: j,
      patchFlag: $,
      dirs: R,
      cacheIndex: H
    } = c;
    if ($ === -2 && (v = !1), S != null && Es(S, null, m, c, !0), H != null && (d.renderCache[H] = void 0), j & 256) {
      d.ctx.deactivate(c);
      return;
    }
    const G = j & 1 && R, se = !Ht(c);
    let te;
    if (se && (te = T && T.onVnodeBeforeUnmount) && Ve(te, d, c), j & 6)
      Oi(c.component, m, b);
    else {
      if (j & 128) {
        c.suspense.unmount(m, b);
        return;
      }
      G && bt(c, null, d, "beforeUnmount"), j & 64 ? c.type.remove(
        c,
        d,
        m,
        qt,
        b
      ) : _ && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !_.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (y !== be || $ > 0 && $ & 64) ? Kt(
        _,
        d,
        m,
        !1,
        !0
      ) : (y === be && $ & 384 || !v && j & 16) && Kt(C, d, m), b && rs(c);
    }
    (se && (te = T && T.onVnodeUnmounted) || G) && Ae(() => {
      te && Ve(te, d, c), G && bt(c, null, d, "unmounted");
    }, m);
  }, rs = (c) => {
    const { type: d, el: m, anchor: b, transition: v } = c;
    if (d === be) {
      c.patchFlag > 0 && c.patchFlag & 2048 && v && !v.persisted ? c.children.forEach((T) => {
        T.type === fe ? o(T.el) : rs(T);
      }) : Ti(m, b);
      return;
    }
    if (d === Rn) {
      x(c);
      return;
    }
    const y = () => {
      o(m), v && !v.persisted && v.afterLeave && v.afterLeave();
    };
    if (c.shapeFlag & 1 && v && !v.persisted) {
      const { leave: T, delayLeave: S } = v, C = () => T(m, y);
      S ? S(c.el, y, C) : C();
    } else
      y();
  }, Ti = (c, d) => {
    let m;
    for (; c !== d; )
      m = h(c), o(c), c = m;
    o(d);
  }, Oi = (c, d, m) => {
    c.type.__hmrId && Pl(c);
    const { bum: b, scope: v, job: y, subTree: T, um: S, m: C, a: _ } = c;
    Eo(C), Eo(_), b && Jt(b), v.stop(), y && (y.flags |= 8, at(T, c, d, m)), S && Ae(S, d), Ae(() => {
      c.isUnmounted = !0;
    }, d), d && d.pendingBranch && !d.isUnmounted && c.asyncDep && !c.asyncResolved && c.suspenseId === d.pendingId && (d.deps--, d.deps === 0 && d.resolve()), Ll(c);
  }, Kt = (c, d, m, b = !1, v = !1, y = 0) => {
    for (let T = y; T < c.length; T++)
      at(c[T], d, m, b, v);
  }, Sn = (c) => {
    if (c.shapeFlag & 6)
      return Sn(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const d = h(c.anchor || c.el), m = d && d[Ul];
    return m ? h(m) : d;
  };
  let is = !1;
  const lo = (c, d, m) => {
    c == null ? d._vnode && at(d._vnode, null, null, !0) : A(
      d._vnode || null,
      c,
      d,
      null,
      null,
      null,
      m
    ), d._vnode = c, is || (is = !0, vo(), $r(), is = !1);
  }, qt = {
    p: A,
    um: at,
    m: Ft,
    r: rs,
    mt: we,
    mc: I,
    pc: ie,
    pbc: J,
    n: Sn,
    o: e
  };
  let co, ao;
  return {
    render: lo,
    hydrate: co,
    createApp: vc(lo, co)
  };
}
function gs({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function _t({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Fc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Ns(e, t, n = !1) {
  const s = e.children, o = t.children;
  if (N(s) && N(o))
    for (let r = 0; r < s.length; r++) {
      const i = s[r];
      let l = o[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = o[r] = mt(o[r]), l.el = i.el), !n && l.patchFlag !== -2 && Ns(i, l)), l.type === xn && (l.el = i.el), l.type === fe && !l.el && (l.el = i.el);
    }
}
function Dc(e) {
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
function li(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : li(t);
}
function Eo(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const kc = Symbol.for("v-scx"), jc = () => {
  {
    const e = Pn(kc);
    return e || w(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function on(e, t, n) {
  return L(t) || w(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), ci(e, t, n);
}
function ci(e, t, n = Q) {
  const { immediate: s, deep: o, flush: r, once: i } = n;
  t || (s !== void 0 && w(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && w(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && w(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = ae({}, n);
  l.onWarn = w;
  const a = t && s || !t && r !== "post";
  let p;
  if (hn) {
    if (r === "sync") {
      const g = jc();
      p = g.__watcherHandles || (g.__watcherHandles = []);
    } else if (!a) {
      const g = () => {
      };
      return g.stop = _e, g.resume = _e, g.pause = _e, g;
    }
  }
  const u = he;
  l.call = (g, E, A) => Le(g, u, E, A);
  let f = !1;
  r === "post" ? l.scheduler = (g) => {
    Ae(g, u && u.suspense);
  } : r !== "sync" && (f = !0, l.scheduler = (g, E) => {
    E ? g() : es(g);
  }), l.augmentJob = (g) => {
    t && (g.flags |= 4), f && (g.flags |= 2, u && (g.id = u.uid, g.i = u));
  };
  const h = wl(e, t, l);
  return hn && (p ? p.push(h) : a && h()), h;
}
function Lc(e, t, n) {
  const s = this.proxy, o = le(e) ? e.includes(".") ? ai(s, e) : () => s[e] : e.bind(s, s);
  let r;
  L(t) ? r = t : (r = t.handler, n = t);
  const i = Cn(this), l = ci(o, r.bind(s), n);
  return i(), l;
}
function ai(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let o = 0; o < n.length && s; o++)
      s = s[n[o]];
    return s;
  };
}
const Hc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Oe(t)}Modifiers`] || e[`${tt(t)}Modifiers`];
function Vc(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || Q;
  {
    const {
      emitsOptions: u,
      propsOptions: [f]
    } = e;
    if (u)
      if (!(t in u))
        (!f || !(Ct(Oe(t)) in f)) && w(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Ct(Oe(t))}" prop.`
        );
      else {
        const h = u[t];
        L(h) && (h(...n) || w(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let o = n;
  const r = t.startsWith("update:"), i = r && Hc(s, t.slice(7));
  i && (i.trim && (o = n.map((u) => le(u) ? u.trim() : u)), i.number && (o = n.map(Pi))), Bl(e, t, o);
  {
    const u = t.toLowerCase();
    u !== t && s[Ct(u)] && w(
      `Event "${u}" is emitted in component ${os(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${tt(
        t
      )}" instead of "${t}".`
    );
  }
  let l, a = s[l = Ct(t)] || // also try camelCase event handler (#2249)
  s[l = Ct(Oe(t))];
  !a && r && (a = s[l = Ct(tt(t))]), a && Le(
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
    e.emitted[l] = !0, Le(
      p,
      e,
      6,
      o
    );
  }
}
function fi(e, t, n = !1) {
  const s = t.emitsCache, o = s.get(e);
  if (o !== void 0)
    return o;
  const r = e.emits;
  let i = {}, l = !1;
  if (!L(e)) {
    const a = (p) => {
      const u = fi(p, t, !0);
      u && (l = !0, ae(i, u));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !r && !l ? (Z(e) && s.set(e, null), null) : (N(r) ? r.forEach((a) => i[a] = null) : ae(i, r), Z(e) && s.set(e, i), i);
}
function ns(e, t) {
  return !e || !gn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Y(e, t[0].toLowerCase() + t.slice(1)) || Y(e, tt(t)) || Y(e, t));
}
let Fs = !1;
function Kn() {
  Fs = !0;
}
function vs(e) {
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
    setupState: g,
    ctx: E,
    inheritAttrs: A
  } = e, q = Bn(e);
  let B, D;
  Fs = !1;
  try {
    if (n.shapeFlag & 4) {
      const x = o || s, F = dt.NODE_ENV !== "production" && g.__isScriptSetup ? new Proxy(x, {
        get(ee, K, I) {
          return w(
            `Property '${String(
              K
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(ee, K, I);
        }
      }) : x;
      B = De(
        p.call(
          F,
          x,
          u,
          dt.NODE_ENV !== "production" ? Ke(f) : f,
          g,
          h,
          E
        )
      ), D = l;
    } else {
      const x = t;
      dt.NODE_ENV !== "production" && l === f && Kn(), B = De(
        x.length > 1 ? x(
          dt.NODE_ENV !== "production" ? Ke(f) : f,
          dt.NODE_ENV !== "production" ? {
            get attrs() {
              return Kn(), Ke(l);
            },
            slots: i,
            emit: a
          } : { attrs: l, slots: i, emit: a }
        ) : x(
          dt.NODE_ENV !== "production" ? Ke(f) : f,
          null
        )
      ), D = t.props ? l : Bc(l);
    }
  } catch (x) {
    rn.length = 0, bn(x, e, 1), B = oe(fe);
  }
  let k = B, W;
  if (B.patchFlag > 0 && B.patchFlag & 2048 && ([k, W] = ui(B)), D && A !== !1) {
    const x = Object.keys(D), { shapeFlag: F } = k;
    if (x.length) {
      if (F & 7)
        r && x.some(Dn) && (D = Uc(
          D,
          r
        )), k = Je(k, D, !1, !0);
      else if (!Fs && k.type !== fe) {
        const ee = Object.keys(l), K = [], I = [];
        for (let U = 0, J = ee.length; U < J; U++) {
          const M = ee[U];
          gn(M) ? Dn(M) || K.push(M[2].toLowerCase() + M.slice(3)) : I.push(M);
        }
        I.length && w(
          `Extraneous non-props attributes (${I.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
        ), K.length && w(
          `Extraneous non-emits event listeners (${K.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (Mo(k) || w(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), k = Je(k, null, !1, !0), k.dirs = k.dirs ? k.dirs.concat(n.dirs) : n.dirs), n.transition && (Mo(k) || w(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), dn(k, n.transition)), W ? W(k) : B = k, Bn(q), B;
}
const ui = (e) => {
  const t = e.children, n = e.dynamicChildren, s = oo(t, !1);
  if (s) {
    if (s.patchFlag > 0 && s.patchFlag & 2048)
      return ui(s);
  } else return [e, void 0];
  const o = t.indexOf(s), r = n ? n.indexOf(s) : -1, i = (l) => {
    t[o] = l, n && (r > -1 ? n[r] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [De(s), i];
};
function oo(e, t = !0) {
  let n;
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (Rt(o)) {
      if (o.type !== fe || o.children === "v-if") {
        if (n)
          return;
        if (n = o, t && n.patchFlag > 0 && n.patchFlag & 2048)
          return oo(n.children);
      }
    } else
      return;
  }
  return n;
}
const Bc = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || gn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Uc = (e, t) => {
  const n = {};
  for (const s in e)
    (!Dn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
}, Mo = (e) => e.shapeFlag & 7 || e.type === fe;
function Wc(e, t, n) {
  const { props: s, children: o, component: r } = e, { props: i, children: l, patchFlag: a } = t, p = r.emitsOptions;
  if ((o || l) && qe || t.dirs || t.transition)
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
        if (i[h] !== s[h] && !ns(p, h))
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
    if (t[r] !== e[r] && !ns(n, r))
      return !0;
  }
  return !1;
}
function Kc({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const di = (e) => e.__isSuspense;
function qc(e, t) {
  t && t.pendingBranch ? N(e) ? t.effects.push(...e) : t.effects.push(e) : Or(e);
}
const be = Symbol.for("v-fgt"), xn = Symbol.for("v-txt"), fe = Symbol.for("v-cmt"), Rn = Symbol.for("v-stc"), rn = [];
let Re = null;
function X(e = !1) {
  rn.push(Re = e ? null : []);
}
function Gc() {
  rn.pop(), Re = rn[rn.length - 1] || null;
}
let pn = 1;
function Io(e) {
  pn += e, e < 0 && Re && (Re.hasOnce = !0);
}
function pi(e) {
  return e.dynamicChildren = pn > 0 ? Re || jt : null, Gc(), pn > 0 && Re && Re.push(e), e;
}
function ce(e, t, n, s, o, r) {
  return pi(
    ne(
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
  return pi(
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
function Rt(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Tt(e, t) {
  if (t.shapeFlag & 6 && e.component) {
    const n = In.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const Jc = (...e) => Yc(
  ...e
), hi = ({ key: e }) => e ?? null, Nn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? le(e) || de(e) || L(e) ? { i: ue, r: e, k: t, f: !!n } : e : null);
function ne(e, t = null, n = null, s = 0, o = null, r = e === be ? 0 : 1, i = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && hi(t),
    ref: t && Nn(t),
    scopeId: Rr,
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
    ctx: ue
  };
  return l ? (ro(a, n), r & 128 && e.normalize(a)) : n && (a.shapeFlag |= le(n) ? 8 : 16), a.key !== a.key && w("VNode created with invalid key (NaN). VNode type:", a.type), pn > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Re && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Re.push(a), a;
}
const oe = Jc;
function Yc(e, t = null, n = null, s = 0, o = null, r = !1) {
  if ((!e || e === Kr) && (e || w(`Invalid vnode type when creating vnode: ${e}.`), e = fe), Rt(e)) {
    const l = Je(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && ro(l, n), pn > 0 && !r && Re && (l.shapeFlag & 6 ? Re[Re.indexOf(e)] = l : Re.push(l)), l.patchFlag = -2, l;
  }
  if (bi(e) && (e = e.__vccOpts), t) {
    t = zc(t);
    let { class: l, style: a } = t;
    l && !le(l) && (t.class = yn(l)), Z(a) && (jn(a) && !N(a) && (a = ae({}, a)), t.style = zn(a));
  }
  const i = le(e) ? 1 : di(e) ? 128 : Fr(e) ? 64 : Z(e) ? 4 : L(e) ? 2 : 0;
  return i & 4 && jn(e) && (e = V(e), w(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), ne(
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
function zc(e) {
  return e ? jn(e) || ei(e) ? ae({}, e) : e : null;
}
function Je(e, t, n = !1, s = !1) {
  const { props: o, ref: r, patchFlag: i, children: l, transition: a } = e, p = t ? Xc(o || {}, t) : o, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: p,
    key: p && hi(p),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? N(r) ? r.concat(Nn(t)) : [r, Nn(t)] : Nn(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: i === -1 && N(l) ? l.map(mi) : l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== be ? i === -1 ? 16 : i | 16 : i,
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
    ssContent: e.ssContent && Je(e.ssContent),
    ssFallback: e.ssFallback && Je(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && s && dn(
    u,
    a.clone(u)
  ), u;
}
function mi(e) {
  const t = Je(e);
  return N(e.children) && (t.children = e.children.map(mi)), t;
}
function Qc(e = " ", t = 0) {
  return oe(xn, null, e, t);
}
function yt(e = "", t = !1) {
  return t ? (X(), Ut(fe, null, e)) : oe(fe, null, e);
}
function De(e) {
  return e == null || typeof e == "boolean" ? oe(fe) : N(e) ? oe(
    be,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Rt(e) ? mt(e) : oe(xn, null, String(e));
}
function mt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Je(e);
}
function ro(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (N(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), ro(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !ei(t) ? t._ctx = ue : o === 3 && ue && (ue.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else L(t) ? (t = { default: t, _ctx: ue }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [Qc(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Xc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const o in s)
      if (o === "class")
        t.class !== s.class && (t.class = yn([t.class, s.class]));
      else if (o === "style")
        t.style = zn([t.style, s.style]);
      else if (gn(o)) {
        const r = t[o], i = s[o];
        i && r !== i && !(N(r) && r.includes(i)) && (t[o] = r ? [].concat(r, i) : i);
      } else o !== "" && (t[o] = s[o]);
  }
  return t;
}
function Ve(e, t, n, s = null) {
  Le(e, t, 7, [
    n,
    s
  ]);
}
const Zc = Qr();
let ea = 0;
function ta(e, t, n) {
  const s = e.type, o = (t ? t.appContext : e.appContext) || Zc, r = {
    uid: ea++,
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
    scope: new Gi(
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
    propsOptions: ni(s, o),
    emitsOptions: fi(s, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Q,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: Q,
    data: Q,
    props: Q,
    attrs: Q,
    slots: Q,
    refs: Q,
    setupState: Q,
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
  return r.ctx = lc(r), r.root = t ? t.root : r, r.emit = Vc.bind(null, r), e.ce && e.ce(r), r;
}
let he = null;
const gi = () => he || ue;
let qn, Ds;
{
  const e = vn(), t = (n, s) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(s), (r) => {
      o.length > 1 ? o.forEach((i) => i(r)) : o[0](r);
    };
  };
  qn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => he = n
  ), Ds = t(
    "__VUE_SSR_SETTERS__",
    (n) => hn = n
  );
}
const Cn = (e) => {
  const t = he;
  return qn(e), e.scope.on(), () => {
    e.scope.off(), qn(t);
  };
}, Po = () => {
  he && he.scope.off(), qn(null);
}, na = /* @__PURE__ */ st("slot,component");
function ks(e, { isNativeTag: t }) {
  (na(e) || t(e)) && w(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function vi(e) {
  return e.vnode.shapeFlag & 4;
}
let hn = !1;
function sa(e, t = !1, n = !1) {
  t && Ds(t);
  const { props: s, children: o } = e.vnode, r = vi(e);
  bc(e, s, r, t), Ac(e, o, n);
  const i = r ? oa(e, t) : void 0;
  return t && Ds(!1), i;
}
function oa(e, t) {
  var n;
  const s = e.type;
  {
    if (s.name && ks(s.name, e.appContext.config), s.components) {
      const r = Object.keys(s.components);
      for (let i = 0; i < r.length; i++)
        ks(r[i], e.appContext.config);
    }
    if (s.directives) {
      const r = Object.keys(s.directives);
      for (let i = 0; i < r.length; i++)
        Nr(r[i]);
    }
    s.compilerOptions && ra() && w(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Yr), cc(e);
  const { setup: o } = s;
  if (o) {
    rt();
    const r = e.setupContext = o.length > 1 ? ca(e) : null, i = Cn(e), l = Wt(
      o,
      e,
      0,
      [
        Ke(e.props),
        r
      ]
    ), a = Us(l);
    if (it(), i(), (a || e.sp) && !Ht(e) && Vr(e), a) {
      if (l.then(Po, Po), t)
        return l.then((p) => {
          Ro(e, p, t);
        }).catch((p) => {
          bn(p, e, 0);
        });
      if (e.asyncDep = l, !e.suspense) {
        const p = (n = s.name) != null ? n : "Anonymous";
        w(
          `Component <${p}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Ro(e, l, t);
  } else
    yi(e, t);
}
function Ro(e, t, n) {
  L(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Z(t) ? (Rt(t) && w(
    "setup() should not return VNodes directly - return a render function instead."
  ), e.devtoolsRawSetupState = t, e.setupState = xr(t), ac(e)) : t !== void 0 && w(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), yi(e, n);
}
let js;
const ra = () => !js;
function yi(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && js && !s.render) {
      const o = s.template || no(e).template;
      if (o) {
        ze(e, "compile");
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
        s.render = js(o, p), Qe(e, "compile");
      }
    }
    e.render = s.render || _e;
  }
  {
    const o = Cn(e);
    rt();
    try {
      uc(e);
    } finally {
      it(), o();
    }
  }
  !s.render && e.render === _e && !t && (s.template ? w(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : w("Component is missing template or render function: ", s));
}
const ia = {
  get(e, t) {
    return Kn(), me(e, "get", ""), e[t];
  },
  set() {
    return w("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return w("setupContext.attrs is readonly."), !1;
  }
};
function la(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return me(e, "get", "$slots"), t[n];
    }
  });
}
function ca(e) {
  const t = (n) => {
    if (e.exposed && w("expose() should be called only once per setup()."), n != null) {
      let s = typeof n;
      s === "object" && (N(n) ? s = "array" : de(n) && (s = "ref")), s !== "object" && w(
        `expose() should be passed a plain object, received ${s}.`
      );
    }
    e.exposed = n || {};
  };
  {
    let n, s;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, ia));
      },
      get slots() {
        return s || (s = la(e));
      },
      get emit() {
        return (o, ...r) => e.emit(o, ...r);
      },
      expose: t
    });
  }
}
function ss(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(xr(hl(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in At)
        return At[n](e);
    },
    has(t, n) {
      return n in t || n in At;
    }
  })) : e.proxy;
}
const aa = /(?:^|[-_])(\w)/g, fa = (e) => e.replace(aa, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function io(e, t = !0) {
  return L(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function os(e, t, n = !1) {
  let s = io(t);
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
  return s ? fa(s) : n ? "App" : "Anonymous";
}
function bi(e) {
  return L(e) && "__vccOpts" in e;
}
const ke = (e, t) => {
  const n = bl(e, t, hn);
  {
    const s = gi();
    s && s.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function ua(e, t, n) {
  const s = arguments.length;
  return s === 2 ? Z(t) && !N(t) ? Rt(t) ? oe(e, null, [t]) : oe(e, t) : oe(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && Rt(n) && (n = [n]), oe(e, t, n));
}
function da() {
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
      ] : Et(f) ? [
        "div",
        {},
        ["span", e, $e(f) ? "ShallowReactive" : "Reactive"],
        "<",
        l(f),
        `>${nt(f) ? " (readonly)" : ""}`
      ] : nt(f) ? [
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
    f.type.props && f.props && h.push(i("props", V(f.props))), f.setupState !== Q && h.push(i("setup", f.setupState)), f.data !== Q && h.push(i("data", V(f.data)));
    const g = a(f, "computed");
    g && h.push(i("computed", g));
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
        ...Object.keys(h).map((g) => [
          "div",
          {},
          ["span", s, g + ": "],
          l(h[g], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(f, h = !0) {
    return typeof f == "number" ? ["span", t, f] : typeof f == "string" ? ["span", n, JSON.stringify(f)] : typeof f == "boolean" ? ["span", s, f] : Z(f) ? ["object", { object: h ? V(f) : f }] : ["span", n, String(f)];
  }
  function a(f, h) {
    const g = f.type;
    if (L(g))
      return;
    const E = {};
    for (const A in f.ctx)
      p(g, A, h) && (E[A] = f.ctx[A]);
    return E;
  }
  function p(f, h, g) {
    const E = f[g];
    if (N(E) && E.includes(h) || Z(E) && h in E || f.extends && p(f.extends, h, g) || f.mixins && f.mixins.some((A) => p(A, h, g)))
      return !0;
  }
  function u(f) {
    return $e(f) ? "ShallowRef" : f.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
const No = "3.5.12", et = w;
let Ls;
const Fo = typeof window < "u" && window.trustedTypes;
if (Fo)
  try {
    Ls = /* @__PURE__ */ Fo.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    et(`Error creating trusted types policy: ${e}`);
  }
const _i = Ls ? (e) => Ls.createHTML(e) : (e) => e, pa = "http://www.w3.org/2000/svg", ha = "http://www.w3.org/1998/Math/MathML", Xe = typeof document < "u" ? document : null, Do = Xe && /* @__PURE__ */ Xe.createElement("template"), ma = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const o = t === "svg" ? Xe.createElementNS(pa, e) : t === "mathml" ? Xe.createElementNS(ha, e) : n ? Xe.createElement(e, { is: n }) : Xe.createElement(e);
    return e === "select" && s && s.multiple != null && o.setAttribute("multiple", s.multiple), o;
  },
  createText: (e) => Xe.createTextNode(e),
  createComment: (e) => Xe.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Xe.querySelector(e),
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
      Do.innerHTML = _i(
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
}, ft = "transition", Qt = "animation", mn = Symbol("_vtc"), wi = {
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
}, ga = /* @__PURE__ */ ae(
  {},
  Dr,
  wi
), va = (e) => (e.displayName = "Transition", e.props = ga, e), ko = /* @__PURE__ */ va(
  (e, { slots: t }) => ua(ql, ya(e), t)
), wt = (e, t = []) => {
  N(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, jo = (e) => e ? N(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function ya(e) {
  const t = {};
  for (const M in e)
    M in wi || (t[M] = e[M]);
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
    leaveToClass: g = `${n}-leave-to`
  } = e, E = ba(o), A = E && E[0], q = E && E[1], {
    onBeforeEnter: B,
    onEnter: D,
    onEnterCancelled: k,
    onLeave: W,
    onLeaveCancelled: x,
    onBeforeAppear: F = B,
    onAppear: ee = D,
    onAppearCancelled: K = k
  } = t, I = (M, re, ge) => {
    xt(M, re ? u : l), xt(M, re ? p : i), ge && ge();
  }, U = (M, re) => {
    M._isLeaving = !1, xt(M, f), xt(M, g), xt(M, h), re && re();
  }, J = (M) => (re, ge) => {
    const we = M ? ee : D, pe = () => I(re, M, ge);
    wt(we, [re, pe]), Lo(() => {
      xt(re, M ? a : r), ut(re, M ? u : l), jo(we) || Ho(re, s, A, pe);
    });
  };
  return ae(t, {
    onBeforeEnter(M) {
      wt(B, [M]), ut(M, r), ut(M, i);
    },
    onBeforeAppear(M) {
      wt(F, [M]), ut(M, a), ut(M, p);
    },
    onEnter: J(!1),
    onAppear: J(!0),
    onLeave(M, re) {
      M._isLeaving = !0;
      const ge = () => U(M, re);
      ut(M, f), ut(M, h), xa(), Lo(() => {
        M._isLeaving && (xt(M, f), ut(M, g), jo(W) || Ho(M, s, q, ge));
      }), wt(W, [M, ge]);
    },
    onEnterCancelled(M) {
      I(M, !1), wt(k, [M]);
    },
    onAppearCancelled(M) {
      I(M, !0), wt(K, [M]);
    },
    onLeaveCancelled(M) {
      U(M), wt(x, [M]);
    }
  });
}
function ba(e) {
  if (e == null)
    return null;
  if (Z(e))
    return [ys(e.enter), ys(e.leave)];
  {
    const t = ys(e);
    return [t, t];
  }
}
function ys(e) {
  const t = Ri(e);
  return Ol(t, "<transition> explicit duration"), t;
}
function ut(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[mn] || (e[mn] = /* @__PURE__ */ new Set())).add(t);
}
function xt(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[mn];
  n && (n.delete(t), n.size || (e[mn] = void 0));
}
function Lo(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let _a = 0;
function Ho(e, t, n, s) {
  const o = e._endId = ++_a, r = () => {
    o === e._endId && s();
  };
  if (n != null)
    return setTimeout(r, n);
  const { type: i, timeout: l, propCount: a } = wa(e, t);
  if (!i)
    return s();
  const p = i + "end";
  let u = 0;
  const f = () => {
    e.removeEventListener(p, h), r();
  }, h = (g) => {
    g.target === e && ++u >= a && f();
  };
  setTimeout(() => {
    u < a && f();
  }, l + 1), e.addEventListener(p, h);
}
function wa(e, t) {
  const n = window.getComputedStyle(e), s = (E) => (n[E] || "").split(", "), o = s(`${ft}Delay`), r = s(`${ft}Duration`), i = Vo(o, r), l = s(`${Qt}Delay`), a = s(`${Qt}Duration`), p = Vo(l, a);
  let u = null, f = 0, h = 0;
  t === ft ? i > 0 && (u = ft, f = i, h = r.length) : t === Qt ? p > 0 && (u = Qt, f = p, h = a.length) : (f = Math.max(i, p), u = f > 0 ? i > p ? ft : Qt : null, h = u ? u === ft ? r.length : a.length : 0);
  const g = u === ft && /\b(transform|all)(,|$)/.test(
    s(`${ft}Property`).toString()
  );
  return {
    type: u,
    timeout: f,
    propCount: h,
    hasTransform: g
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
function xa() {
  return document.body.offsetHeight;
}
function Ca(e, t, n) {
  const s = e[mn];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Gn = Symbol("_vod"), xi = Symbol("_vsh"), Hs = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[Gn] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Xt(e, t);
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
Hs.name = "show";
function Xt(e, t) {
  e.style.display = t ? e[Gn] : "none", e[xi] = !t;
}
const Sa = Symbol("CSS_VAR_TEXT"), Ta = /(^|;)\s*display\s*:/;
function Oa(e, t, n) {
  const s = e.style, o = le(n);
  let r = !1;
  if (n && !o) {
    if (t)
      if (le(t))
        for (const i of t.split(";")) {
          const l = i.slice(0, i.indexOf(":")).trim();
          n[l] == null && Fn(s, l, "");
        }
      else
        for (const i in t)
          n[i] == null && Fn(s, i, "");
    for (const i in n)
      i === "display" && (r = !0), Fn(s, i, n[i]);
  } else if (o) {
    if (t !== n) {
      const i = s[Sa];
      i && (n += ";" + i), s.cssText = n, r = Ta.test(n);
    }
  } else t && e.removeAttribute("style");
  Gn in e && (e[Gn] = r ? s.display : "", e[xi] && (s.display = "none"));
}
const $a = /[^\\];\s*$/, Uo = /\s*!important$/;
function Fn(e, t, n) {
  if (N(n))
    n.forEach((s) => Fn(e, t, s));
  else if (n == null && (n = ""), $a.test(n) && et(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = Ea(e, t);
    Uo.test(n) ? e.setProperty(
      tt(s),
      n.replace(Uo, ""),
      "important"
    ) : e[s] = n;
  }
}
const Wo = ["Webkit", "Moz", "ms"], bs = {};
function Ea(e, t) {
  const n = bs[t];
  if (n)
    return n;
  let s = Oe(t);
  if (s !== "filter" && s in e)
    return bs[t] = s;
  s = It(s);
  for (let o = 0; o < Wo.length; o++) {
    const r = Wo[o] + s;
    if (r in e)
      return bs[t] = r;
  }
  return t;
}
const Ko = "http://www.w3.org/1999/xlink";
function qo(e, t, n, s, o, r = Ki(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ko, t.slice(6, t.length)) : e.setAttributeNS(Ko, t, n) : n == null || r && !nr(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : ot(n) ? String(n) : n
  );
}
function Go(e, t, n, s, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? _i(n) : n);
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
    l === "boolean" ? n = nr(n) : n == null && l === "string" ? (n = "", i = !0) : l === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch (l) {
    i || et(
      `Failed setting prop "${t}" on <${r.toLowerCase()}>: value ${n} is invalid.`,
      l
    );
  }
  i && e.removeAttribute(o || t);
}
function Ma(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Aa(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Jo = Symbol("_vei");
function Ia(e, t, n, s, o = null) {
  const r = e[Jo] || (e[Jo] = {}), i = r[t];
  if (s && i)
    i.value = zo(s, t);
  else {
    const [l, a] = Pa(t);
    if (s) {
      const p = r[t] = Fa(
        zo(s, t),
        o
      );
      Ma(e, l, p, a);
    } else i && (Aa(e, l, i, a), r[t] = void 0);
  }
}
const Yo = /(?:Once|Passive|Capture)$/;
function Pa(e) {
  let t;
  if (Yo.test(e)) {
    t = {};
    let s;
    for (; s = e.match(Yo); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : tt(e.slice(2)), t];
}
let _s = 0;
const Ra = /* @__PURE__ */ Promise.resolve(), Na = () => _s || (Ra.then(() => _s = 0), _s = Date.now());
function Fa(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    Le(
      Da(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = Na(), n;
}
function zo(e, t) {
  return L(e) || N(e) ? e : (et(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), _e);
}
function Da(e, t) {
  if (N(t)) {
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
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, ka = (e, t, n, s, o, r) => {
  const i = o === "svg";
  t === "class" ? Ca(e, s, i) : t === "style" ? Oa(e, n, s) : gn(t) ? Dn(t) || Ia(e, t, n, s, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : ja(e, t, s, i)) ? (Go(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && qo(e, t, s, i, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !le(s)) ? Go(e, Oe(t), s, r, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), qo(e, t, s, i));
};
function ja(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Qo(t) && L(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return Qo(t) && le(n) ? !1 : t in e;
}
const La = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Ha = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), s = t.join(".");
  return n[s] || (n[s] = (o) => {
    if (!("key" in o))
      return;
    const r = tt(o.key);
    if (t.some(
      (i) => i === r || La[i] === r
    ))
      return e(o);
  });
}, Va = /* @__PURE__ */ ae({ patchProp: ka }, ma);
let Xo;
function Ba() {
  return Xo || (Xo = Rc(Va));
}
const Ua = (...e) => {
  const t = Ba().createApp(...e);
  Ka(t), qa(t);
  const { mount: n } = t;
  return t.mount = (s) => {
    const o = Ga(s);
    if (!o) return;
    const r = t._component;
    !L(r) && !r.render && !r.template && (r.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const i = n(o, !1, Wa(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), i;
  }, t;
};
function Wa(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Ka(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => Vi(t) || Bi(t) || Ui(t),
    writable: !1
  });
}
function qa(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        et(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, s = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return et(s), n;
      },
      set() {
        et(s);
      }
    });
  }
}
function Ga(e) {
  if (le(e)) {
    const t = document.querySelector(e);
    return t || et(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && et(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
function Ja() {
  da();
}
Ja();
var Ya = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ci = { exports: {} };
(function(e, t) {
  (function(n, s) {
    e.exports = s();
  })(Ya, function() {
    var n = "__v-click-outside", s = typeof window < "u", o = typeof navigator < "u", r = s && ("ontouchstart" in window || o && navigator.msMaxTouchPoints > 0) ? ["touchstart"] : ["click"], i = function(u) {
      var f = u.event, h = u.handler;
      (0, u.middleware)(f) && h(f);
    }, l = function(u, f) {
      var h = function(D) {
        var k = typeof D == "function";
        if (!k && typeof D != "object") throw new Error("v-click-outside: Binding value must be a function or an object");
        return { handler: k ? D : D.handler, middleware: D.middleware || function(W) {
          return W;
        }, events: D.events || r, isActive: D.isActive !== !1, detectIframe: D.detectIframe !== !1, capture: !!D.capture };
      }(f.value), g = h.handler, E = h.middleware, A = h.detectIframe, q = h.capture;
      if (h.isActive) {
        if (u[n] = h.events.map(function(D) {
          return { event: D, srcTarget: document.documentElement, handler: function(k) {
            return function(W) {
              var x = W.el, F = W.event, ee = W.handler, K = W.middleware, I = F.path || F.composedPath && F.composedPath();
              (I ? I.indexOf(x) < 0 : !x.contains(F.target)) && i({ event: F, handler: ee, middleware: K });
            }({ el: u, event: k, handler: g, middleware: E });
          }, capture: q };
        }), A) {
          var B = { event: "blur", srcTarget: window, handler: function(D) {
            return function(k) {
              var W = k.el, x = k.event, F = k.handler, ee = k.middleware;
              setTimeout(function() {
                var K = document.activeElement;
                K && K.tagName === "IFRAME" && !W.contains(K) && i({ event: x, handler: F, middleware: ee });
              }, 0);
            }({ el: u, event: D, handler: g, middleware: E });
          }, capture: q };
          u[n] = [].concat(u[n], [B]);
        }
        u[n].forEach(function(D) {
          var k = D.event, W = D.srcTarget, x = D.handler;
          return setTimeout(function() {
            u[n] && W.addEventListener(k, x, q);
          }, 0);
        });
      }
    }, a = function(u) {
      (u[n] || []).forEach(function(f) {
        return f.srcTarget.removeEventListener(f.event, f.handler, f.capture);
      }), delete u[n];
    }, p = s ? { beforeMount: l, updated: function(u, f) {
      var h = f.value, g = f.oldValue;
      JSON.stringify(h) !== JSON.stringify(g) && (a(u), l(u, { value: h }));
    }, unmounted: a } : {};
    return { install: function(u) {
      u.directive("click-outside", p);
    }, directive: p };
  });
})(Ci);
var za = Ci.exports;
const Qa = (e = 16) => {
  let t = "";
  const n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", s = n.length;
  let o = 0;
  for (; o < e; )
    t += n.charAt(Math.floor(Math.random() * s)), o += 1;
  return t;
}, Xa = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
};
function Za(e, t) {
  return X(), ce("svg", Xa, t[0] || (t[0] = [
    ne("path", { d: "m2 21 21-9L2 3v7l15 2-15 2z" }, null, -1)
  ]));
}
const ef = { render: Za }, ct = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, tf = { class: "--fc-composer-container" }, nf = ["value", "placeholder"], sf = ["value", "placeholder"], of = {
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
    const n = e, s = t, o = Pe(), r = ke(
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
    return on(
      () => n.message,
      () => {
        const p = o.value;
        p.style.height = "40px", p.style.height = p.scrollHeight + "px";
      }
    ), (p, u) => (X(), ce("div", tf, [
      e.longMessage ? (X(), ce("textarea", {
        key: 0,
        value: e.message,
        class: "--fc-composer-input",
        placeholder: r.value,
        ref_key: "inputRef",
        ref: o,
        onInput: a
      }, null, 40, nf)) : (X(), ce("input", {
        key: 1,
        value: e.message,
        ref_key: "inputRef",
        ref: o,
        class: "--fc-composer-input",
        placeholder: r.value,
        onInput: a,
        onKeydown: Ha(l, ["enter"])
      }, null, 40, sf)),
      ne("div", null, [
        ne("button", {
          class: "--fc-composer-submit-button",
          onClick: i
        }, [
          oe(Bt(ef), { class: "--fc-icon" })
        ])
      ])
    ]));
  }
}, rf = /* @__PURE__ */ ct(of, [["__scopeId", "data-v-c689b31b"]]), lf = {
  __name: "ChatConversation",
  setup(e, { expose: t }) {
    const n = Pe(), s = () => {
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
    }), (r, i) => (X(), ce("div", {
      class: "--fc-conversation-container",
      ref_key: "conversationMessagesRef",
      ref: n,
      onScroll: s
    }, [
      i[0] || (i[0] = ne("div", { class: "--fc-conversation-padding" }, null, -1)),
      Gr(r.$slots, "default", {}, void 0)
    ], 544));
  }
}, cf = /* @__PURE__ */ ct(lf, [["__scopeId", "data-v-068bd6b8"]]), af = {
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
}, ff = {
  isQuestion: !0
}, uf = {
  isQuestion: !1
}, df = {
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
}, Vs = {
  text: uf,
  email: af,
  question: ff,
  select: df
}, pf = { class: "--fc-message-content-inner" }, hf = { class: "--fc-message-text" }, mf = {
  key: 0,
  class: "--fc-message-option-list"
}, gf = ["onClick"], vf = {
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
      return X(), ce("div", pf, [
        ne("div", hf, ln(((l = e.message.content) == null ? void 0 : l.label) || e.message.content), 1),
        e.message.options ? (X(), ce("div", mf, [
          (X(!0), ce(be, null, qr(e.message.options, (a, p) => (X(), ce("div", {
            key: p,
            class: "--fc-message-option-item",
            onClick: (u) => o(a, p)
          }, ln((a == null ? void 0 : a.label) || a), 9, gf))), 128))
        ])) : yt("", !0)
      ]);
    };
  }
}, yf = /* @__PURE__ */ ct(vf, [["__scopeId", "data-v-a2c7fb8f"]]), bf = { class: "--fc-message-container" }, _f = {
  key: 0,
  class: "--fc-message-user"
}, wf = { class: "--fc-message-avatar" }, xf = ["src"], Cf = { class: "--fc-message-content-container" }, Sf = {
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
        component: ((i = Vs[n.message.type]) == null ? void 0 : i.component) || yf,
        ...n.message
      };
    }), r = (i) => {
      s("select-option", i);
    };
    return (i, l) => {
      var a, p, u, f;
      return X(), ce("div", {
        class: yn({
          "--fc-message-agent-user": e.message.position == "right",
          "--fc-message-host-user": e.message.position == "left"
        })
      }, [
        ne("div", bf, [
          o.value.position == "left" ? (X(), ce("div", _f, [
            ne("div", wf, [
              (p = (a = e.options) == null ? void 0 : a.hostUser) != null && p.avatarUrl ? (X(), ce("img", {
                key: 0,
                src: (f = (u = e.options) == null ? void 0 : u.hostUser) == null ? void 0 : f.avatarUrl
              }, null, 8, xf)) : yt("", !0)
            ])
          ])) : yt("", !0),
          ne("div", Cf, [
            o.value.component ? (X(), Ut(rc(o.value.component), {
              key: 0,
              message: o.value,
              options: e.options,
              onSelectOption: r
            }, null, 40, ["message", "options"])) : yt("", !0)
          ])
        ])
      ], 2);
    };
  }
}, Si = /* @__PURE__ */ ct(Sf, [["__scopeId", "data-v-7dc88d89"]]), Tf = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
};
function Of(e, t) {
  return X(), ce("svg", Tf, t[0] || (t[0] = [
    ne("path", { d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }, null, -1)
  ]));
}
const $f = { render: Of }, Ef = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
};
function Mf(e, t) {
  return X(), ce("svg", Ef, t[0] || (t[0] = [
    ne("path", { d: "M12.5 8c-2.65 0-5.05 1-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8" }, null, -1)
  ]));
}
const Af = { render: Mf }, If = { class: "--fc-header-container" }, Pf = { class: "--fc-header-user" }, Rf = { class: "--fc-user-avatar" }, Nf = ["src"], Ff = { class: "--fc-user-name" }, Df = { class: "--fc-header-buttons" }, kf = { class: "--fc-close-button" }, jf = {
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
      return X(), ce("div", If, [
        ne("div", Pf, [
          ne("div", Rf, [
            (i = (r = e.options) == null ? void 0 : r.hostUser) != null && i.avatarUrl ? (X(), ce("img", {
              key: 0,
              src: (a = (l = e.options) == null ? void 0 : l.hostUser) == null ? void 0 : a.avatarUrl
            }, null, 8, Nf)) : yt("", !0)
          ]),
          ne("div", Ff, ln((u = (p = e.options) == null ? void 0 : p.hostUser) == null ? void 0 : u.name), 1)
        ]),
        ne("div", Df, [
          ne("button", {
            class: "--fc-reset-button",
            onClick: o[0] || (o[0] = (f) => n("click-reset-button"))
          }, [
            oe(Bt(Af), { class: "--fc-icon" })
          ]),
          ne("button", kf, [
            oe(Bt($f), {
              class: "--fc-icon",
              onClick: o[1] || (o[1] = (f) => n("click-close-button"))
            })
          ])
        ])
      ]);
    };
  }
}, Lf = /* @__PURE__ */ ct(jf, [["__scopeId", "data-v-bee5c36b"]]), Hf = {
  key: 0,
  class: "--fc-modal-backdrop"
}, Vf = {
  __name: "TheModal",
  props: {
    open: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    return (t, n) => e.open ? (X(), ce("div", Hf, [
      Gr(t.$slots, "default", {}, void 0)
    ])) : yt("", !0);
  }
}, Bf = /* @__PURE__ */ ct(Vf, [["__scopeId", "data-v-4baeafde"]]), Uf = {
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
    return (r, i) => (X(), Ut(Bf, { open: e.open }, {
      default: un(() => [
        ne("div", { class: "--fc-modal-container" }, [
          i[0] || (i[0] = ne("div", { class: "--fc-modal-title" }, " Are you sure to restart the chat? ", -1)),
          ne("div", { class: "--fc-modal-actions" }, [
            ne("button", {
              class: "--fc-negative-button",
              onClick: s
            }, " Yes "),
            ne("button", {
              class: "--fc-default-button",
              onClick: o
            }, " No ")
          ])
        ])
      ]),
      _: 1
    }, 8, ["open"]));
  }
}, Wf = { class: "--fc-body" }, Kf = {
  key: 0,
  class: "skip-container"
}, qf = {
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
  emits: ["finished", "click-close-button"],
  setup(e, { expose: t, emit: n }) {
    const s = e, o = n, r = ke(() => {
      var P, O;
      return (O = (P = s.options) == null ? void 0 : P.styles) == null ? void 0 : O.chatWindow;
    }), i = Pe({
      open: !1
    }), l = () => ({
      id: null,
      position: "left",
      type: "text",
      content: "",
      options: null
    }), a = (P) => ({
      id: Qa(),
      type: "text",
      skippable: !1,
      skipText: "Skip",
      longAnswer: !1,
      content: "",
      ...P
    }), p = ke(() => s.scripts.map(a)), u = ke(() => ({
      scripts: p.value,
      currentScript: g.value,
      currentScriptIndex: q.value,
      latestUserMessage: E.value,
      conversationMessages: f.value,
      addConversationMessage: W
    })), f = Pe([]), h = Pe(""), g = Pe(a()), E = Pe(l()), A = Pe(l()), q = ke(() => p.value.map((O) => O.id).indexOf(g.value.id)), B = Pe(), D = (P) => {
      const O = P.type, ie = Vs[O] || null;
      return ie ? !!(ie != null && ie.isQuestion) : !1;
    }, k = ke(() => {
      let P = null;
      const O = p.value[q.value + 1];
      return O && (P = O.id), P;
    }), W = (P) => {
      f.value.push(P), setTimeout(() => B.value.scrollToBottom(), 100), P.position == "left" ? A.value = l() : D(g.value) ? A.value = P : A.value = l();
    }, x = (P) => {
      let O;
      P ? O = p.value.find((ie) => ie.id == P) : O = p.value.find(() => !0), O && (g.value = O, W({
        position: "left",
        content: O.content,
        options: O.options,
        type: O.type
      }), I());
    }, F = (P) => {
      setTimeout(() => x(P), 300);
    }, ee = () => F(null), K = () => x(null), I = async (P = !0) => {
      var ie;
      if (D(g.value) && !A.value.content && P)
        return !1;
      if (P) {
        const xe = Vs[g.value.type];
        if (xe && (xe != null && xe.onValidate) && xe.onValidate({
          context: u.value,
          script: g.value,
          answer: A.value,
          options: s.options
        }) === !1)
          return !1;
      }
      let O = g.value.next;
      if (typeof O == "function" && (O = O(u.value, A.value.content), O instanceof Promise))
        try {
          O = await O;
        } catch (xe) {
          console.log(xe);
          return;
        }
      if (typeof O == "object") {
        const xe = ((ie = A.value.content) == null ? void 0 : ie.value) || A.value.content;
        O = O[xe] || (O == null ? void 0 : O.__unmatched);
      }
      if (O || (O = k.value), O) {
        F(O);
        return;
      }
      if (!O && D(g.value) == !1) {
        o("finished", u.value);
        return;
      }
      if (!O && D(g.value) && A.value) {
        o("finished", u.value);
        return;
      }
    }, U = async () => {
      h.value.trim() && (W({
        position: "right",
        content: h.value,
        type: "text"
      }), h.value = "", await I());
    }, J = async ({ option: P }) => {
      W({
        position: "right",
        content: P,
        type: "text"
      }), await I();
    }, M = J, re = async () => {
      await I(!1);
    }, ge = () => {
      i.value.open = !0;
    }, we = () => {
      o("click-close-button");
    }, pe = () => {
      i.value.open = !1, f.value = [], h.value = "", g.value = a(), E.value = l(), A.value = l(), F();
    };
    return t({
      addConversationMessage: W,
      triggerSelectOptionInMessage: M,
      startConversationWithDelay: ee,
      startConversation: K
    }), (P, O) => (X(), ce("div", {
      class: "--fc-window",
      style: zn(r.value)
    }, [
      oe(Lf, {
        options: e.options,
        onClickResetButton: ge,
        onClickCloseButton: we
      }, null, 8, ["options"]),
      ne("div", Wf, [
        oe(cf, {
          ref_key: "chatConversationRef",
          ref: B,
          options: e.options
        }, {
          default: un(() => [
            (X(!0), ce(be, null, qr(f.value, (ie, xe) => (X(), Ut(Si, {
              key: xe,
              message: ie,
              options: e.options,
              onSelectOption: J
            }, null, 8, ["message", "options"]))), 128)),
            g.value.skippable ? (X(), ce("div", Kf, [
              ne("button", { onClick: re }, ln(g.value.skipText), 1)
            ])) : yt("", !0)
          ]),
          _: 1
        }, 8, ["options"]),
        oe(rf, {
          message: h.value,
          "onUpdate:message": O[0] || (O[0] = (ie) => h.value = ie),
          options: e.options,
          "long-message": g.value.longAnswer,
          onSubmit: U
        }, null, 8, ["message", "options", "long-message"]),
        oe(Uf, {
          open: i.value.open,
          "onUpdate:open": O[1] || (O[1] = (ie) => i.value.open = ie),
          onConfirmed: pe
        }, null, 8, ["open"])
      ])
    ], 4));
  }
}, Gf = /* @__PURE__ */ ct(qf, [["__scopeId", "data-v-470e43b3"]]), Jf = { class: "--fc-welcome-message-container" }, Yf = {
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
    return (o, r) => (X(), ce("div", Jf, [
      oe(Si, {
        message: e.message,
        onSelectOption: s
      }, null, 8, ["message"])
    ]));
  }
}, zf = /* @__PURE__ */ ct(Yf, [["__scopeId", "data-v-705b15c6"]]), Qf = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
};
function Xf(e, t) {
  return X(), ce("svg", Qf, t[0] || (t[0] = [
    ne("path", { d: "M15 4v7H5.17L4 12.17V4zm1-2H3a1 1 0 0 0-1 1v14l4-4h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m5 4h-2v9H6v2a1 1 0 0 0 1 1h11l4 4V7a1 1 0 0 0-1-1" }, null, -1)
  ]));
}
const Zf = { render: Xf }, eu = { class: "--fc-application-inner" }, tu = { class: "--fc-absolute --fc-bottom-[100%] --fc-w-[400px]" }, nu = { class: "--fc-absolute --fc-bottom-[100%] --fc-w-[350px]" }, su = {
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
    },
    useWelcomeMessage: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["finished"],
  setup(e, { expose: t, emit: n }) {
    const s = e, o = n, r = Pe(null), i = Pe(null), l = Pe(!1), a = Pe(!1), p = ke(
      () => s.options.welcomeMessage && a.value == !1
    ), u = ke(() => s.scripts[0]), f = ke(
      () => {
        var x, F;
        return ((F = (x = s.options) == null ? void 0 : x.embedded) == null ? void 0 : F.type) != "background";
      }
    ), h = (x) => {
      r.value = x;
    }, g = (x) => {
      o("finished", x), typeof r.value == "function" && r.value(x);
    }, E = () => {
      l.value = !l.value, l.value ? A() : q();
    }, A = () => {
      l.value = !0, a.value == !1 && i.value.startConversationWithDelay(), a.value = !0;
    }, q = () => {
      l.value = !1;
    }, B = () => E(), D = (x) => {
      p.value != !1 && (l.value = !0, i.value.startConversation(), i.value.triggerSelectOptionInMessage(x), a.value = !0);
    }, k = (x) => {
      var F;
      console.log("handleClickOutSideChatApp"), (F = s.options) != null && F.clickOutSideClose && l.value && (console.log(x.target.className), q());
    }, W = () => {
      var K, I, U, J;
      if (typeof document > "u")
        return !1;
      const x = document.querySelector(":root"), F = (I = (K = s.options) == null ? void 0 : K.styles) == null ? void 0 : I.primaryColor, ee = (J = (U = s.options) == null ? void 0 : U.styles) == null ? void 0 : J.primaryLightColor;
      F && (x == null || x.style.setProperty("--fc-primary-color", F)), ee && (x == null || x.style.setProperty("--fc-primary-light-color", ee));
    };
    return on(
      () => s.options,
      () => W(),
      {
        immediate: !0
      }
    ), eo(
      () => console.log(
        "%c This website is using formchat.net to create chat boxes. Please visit https://formchat.net/ to get started.",
        "background: #222; color: #bada55"
      )
    ), t({
      onFinished: h,
      toggleChatWindow: E,
      showChatWindow: A,
      hideChatWindow: q
    }), (x, F) => {
      var ee, K, I, U;
      return ps((X(), ce("div", {
        class: yn(["--fc-application --fc-formchat-dot-net", {
          "--fc-dark-theme": ((K = (ee = e.options) == null ? void 0 : ee.styles) == null ? void 0 : K.theme) === "dark",
          "--fc-light-theme": ((U = (I = e.options) == null ? void 0 : I.styles) == null ? void 0 : U.theme) === "light"
        }])
      }, [
        ne("div", eu, [
          oe(ko, {
            "enter-active-class": "--fc-transition --fc-duration-150 --fc-ease-in-out",
            "enter-from-class": "--fc-opacity-0 --fc-translate-y-4",
            "enter-to-class": "--fc-opacity-100 --fc-translate-y-0",
            "leave-active-class": "--fc-transition --fc-duration-150 --fc-ease-in-out",
            "leave-from-class": "--fc-opacity-100 --fc-translate-y-0",
            "leave-to-class": "--fc-opacity-0 --fc-translate-y-4"
          }, {
            default: un(() => [
              ps(ne("div", tu, [
                oe(Gf, {
                  ref_key: "chatWindowRef",
                  ref: i,
                  options: e.options,
                  scripts: e.scripts,
                  onFinished: g,
                  onClickCloseButton: F[0] || (F[0] = (J) => l.value = !1)
                }, null, 8, ["options", "scripts"])
              ], 512), [
                [Hs, l.value]
              ])
            ]),
            _: 1
          }),
          oe(ko, {
            "enter-active-class": "--fc-transition --fc-duration-150 --fc-ease-in-out",
            "enter-from-class": "--fc-opacity-0 --fc-translate-y-4",
            "enter-to-class": "--fc-opacity-100 --fc-translate-y-0",
            "leave-active-class": "--fc-transition --fc-duration-150 --fc-ease-in-out",
            "leave-from-class": "--fc-opacity-100 --fc-translate-y-0",
            "leave-to-class": "--fc-opacity-0 --fc-translate-y-4"
          }, {
            default: un(() => [
              ps(ne("div", nu, [
                oe(zf, {
                  message: u.value,
                  onSelectOption: D
                }, null, 8, ["message"])
              ], 512), [
                [Hs, p.value]
              ])
            ]),
            _: 1
          })
        ]),
        f.value ? (X(), ce("div", {
          key: 0,
          class: "--fc-bubble-container",
          onClick: B
        }, [
          oe(Bt(Zf), { class: "--fc-bubble-icon" })
        ])) : yt("", !0)
      ], 2)), [
        [Bt(za.directive), k]
      ]);
    };
  }
}, ou = /* @__PURE__ */ ct(su, [["__scopeId", "data-v-2c388404"]]);
window.createFormChat = (e, t) => Ua(ou, t).mount(e);
