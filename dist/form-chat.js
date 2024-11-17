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
const X = Object.freeze({}), Bt = Object.freeze([]), xe = () => {
}, ul = () => !1, Tn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), zn = (e) => e.startsWith("onUpdate:"), fe = Object.assign, ws = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, fl = Object.prototype.hasOwnProperty, q = (e, t) => fl.call(e, t), I = Array.isArray, Mt = (e) => ar(e) === "[object Map]", ii = (e) => ar(e) === "[object Set]", D = (e) => typeof e == "function", ue = (e) => typeof e == "string", ot = (e) => typeof e == "symbol", ee = (e) => e !== null && typeof e == "object", $s = (e) => (ee(e) || D(e)) && D(e.then) && D(e.catch), ai = Object.prototype.toString, ar = (e) => ai.call(e), Ss = (e) => ar(e).slice(8, -1), li = (e) => ar(e) === "[object Object]", Ts = (e) => ue(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, dn = /* @__PURE__ */ st(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), dl = /* @__PURE__ */ st(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), lr = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, pl = /-(\w)/g, Te = lr(
  (e) => e.replace(pl, (t, n) => n ? n.toUpperCase() : "")
), hl = /\B([A-Z])/g, nt = lr(
  (e) => e.replace(hl, "-$1").toLowerCase()
), jt = lr((e) => e.charAt(0).toUpperCase() + e.slice(1)), Tt = lr(
  (e) => e ? `on${jt(e)}` : ""
), yt = (e, t) => !Object.is(e, t), rn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, qn = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, gl = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, ml = (e) => {
  const t = ue(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Ys;
const On = () => Ys || (Ys = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function cr(e) {
  if (I(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], s = ue(r) ? yl(r) : cr(r);
      if (s)
        for (const o in s)
          t[o] = s[o];
    }
    return t;
  } else if (ue(e) || ee(e))
    return e;
}
const vl = /;(?![^(]*\))/g, _l = /:([^]+)/, bl = /\/\*[^]*?\*\//g;
function yl(e) {
  const t = {};
  return e.replace(bl, "").split(vl).forEach((n) => {
    if (n) {
      const r = n.split(_l);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function xt(e) {
  let t = "";
  if (ue(e))
    t = e;
  else if (I(e))
    for (let n = 0; n < e.length; n++) {
      const r = xt(e[n]);
      r && (t += r + " ");
    }
  else if (ee(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const xl = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Cl = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", wl = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", $l = /* @__PURE__ */ st(xl), Sl = /* @__PURE__ */ st(Cl), Tl = /* @__PURE__ */ st(wl), Ol = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Al = /* @__PURE__ */ st(Ol);
function ci(e) {
  return !!e || e === "";
}
const ui = (e) => !!(e && e.__v_isRef === !0), ur = (e) => ue(e) ? e : e == null ? "" : I(e) || ee(e) && (e.toString === ai || !D(e.toString)) ? ui(e) ? ur(e.value) : JSON.stringify(e, fi, 2) : String(e), fi = (e, t) => ui(t) ? fi(e, t.value) : Mt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, s], o) => (n[Er(r, o) + " =>"] = s, n),
    {}
  )
} : ii(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Er(n))
} : ot(t) ? Er(t) : ee(t) && !I(t) && !li(t) ? String(t) : t, Er = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    ot(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
var Ml = { NODE_ENV: '"production"' };
function ke(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Re;
class El {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Re, !t && Re && (this.index = (Re.scopes || (Re.scopes = [])).push(
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
      const n = Re;
      try {
        return Re = this, t();
      } finally {
        Re = n;
      }
    } else
      ke("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    Re = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    Re = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++)
        this.effects[n].stop();
      for (n = 0, r = this.cleanups.length; n < r; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, r = this.scopes.length; n < r; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function Rl() {
  return Re;
}
let Q;
const Rr = /* @__PURE__ */ new WeakSet();
class di {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Re && Re.active && Re.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Rr.has(this) && (Rr.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || hi(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Zs(this), gi(this);
    const t = Q, n = Fe;
    Q = this, Fe = !0;
    try {
      return this.fn();
    } finally {
      Q !== this && ke(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), mi(this), Q = t, Fe = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Ms(t);
      this.deps = this.depsTail = void 0, Zs(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Rr.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Gr(this) && this.run();
  }
  get dirty() {
    return Gr(this);
  }
}
let pi = 0, pn, hn;
function hi(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = hn, hn = e;
    return;
  }
  e.next = pn, pn = e;
}
function Os() {
  pi++;
}
function As() {
  if (--pi > 0)
    return;
  if (hn) {
    let t = hn;
    for (hn = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; pn; ) {
    let t = pn;
    for (pn = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (r) {
          e || (e = r);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function gi(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function mi(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const s = r.prevDep;
    r.version === -1 ? (r === n && (n = s), Ms(r), Il(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = s;
  }
  e.deps = t, e.depsTail = n;
}
function Gr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (vi(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function vi(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === vn))
    return;
  e.globalVersion = vn;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !Gr(e)) {
    e.flags &= -3;
    return;
  }
  const n = Q, r = Fe;
  Q = e, Fe = !0;
  try {
    gi(e);
    const s = e.fn(e._value);
    (t.version === 0 || yt(s, e._value)) && (e._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    Q = n, Fe = r, mi(e), e.flags &= -3;
  }
}
function Ms(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: s } = e;
  if (r && (r.nextSub = s, e.prevSub = void 0), s && (s.prevSub = r, e.nextSub = void 0), n.subsHead === e && (n.subsHead = s), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep)
      Ms(o, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Il(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Fe = !0;
const _i = [];
function it() {
  _i.push(Fe), Fe = !1;
}
function at() {
  const e = _i.pop();
  Fe = e === void 0 ? !0 : e;
}
function Zs(e) {
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
let vn = 0;
class Pl {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Es {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.subsHead = void 0;
  }
  track(t) {
    if (!Q || !Fe || Q === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Q)
      n = this.activeLink = new Pl(Q, this), Q.deps ? (n.prevDep = Q.depsTail, Q.depsTail.nextDep = n, Q.depsTail = n) : Q.deps = Q.depsTail = n, bi(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = Q.depsTail, n.nextDep = void 0, Q.depsTail.nextDep = n, Q.depsTail = n, Q.deps === n && (Q.deps = r);
    }
    return Q.onTrack && Q.onTrack(
      fe(
        {
          effect: Q
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, vn++, this.notify(t);
  }
  notify(t) {
    Os();
    try {
      if (Ml.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            fe(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      As();
    }
  }
}
function bi(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        bi(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const Jn = /* @__PURE__ */ new WeakMap(), Et = Symbol(
  "Object iterate"
), zr = Symbol(
  "Map keys iterate"
), _n = Symbol(
  "Array iterate"
);
function me(e, t, n) {
  if (Fe && Q) {
    let r = Jn.get(e);
    r || Jn.set(e, r = /* @__PURE__ */ new Map());
    let s = r.get(n);
    s || (r.set(n, s = new Es()), s.map = r, s.key = n), s.track({
      target: e,
      type: t,
      key: n
    });
  }
}
function We(e, t, n, r, s, o) {
  const i = Jn.get(e);
  if (!i) {
    vn++;
    return;
  }
  const a = (c) => {
    c && c.trigger({
      target: e,
      type: t,
      key: n,
      newValue: r,
      oldValue: s,
      oldTarget: o
    });
  };
  if (Os(), t === "clear")
    i.forEach(a);
  else {
    const c = I(e), p = c && Ts(n);
    if (c && n === "length") {
      const f = Number(r);
      i.forEach((u, h) => {
        (h === "length" || h === _n || !ot(h) && h >= f) && a(u);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && a(i.get(n)), p && a(i.get(_n)), t) {
        case "add":
          c ? p && a(i.get("length")) : (a(i.get(Et)), Mt(e) && a(i.get(zr)));
          break;
        case "delete":
          c || (a(i.get(Et)), Mt(e) && a(i.get(zr)));
          break;
        case "set":
          Mt(e) && a(i.get(Et));
          break;
      }
  }
  As();
}
function jl(e, t) {
  const n = Jn.get(e);
  return n && n.get(t);
}
function Lt(e) {
  const t = U(e);
  return t === e ? t : (me(t, "iterate", _n), Oe(e) ? t : t.map(_e));
}
function fr(e) {
  return me(e = U(e), "iterate", _n), e;
}
const Nl = {
  __proto__: null,
  [Symbol.iterator]() {
    return Ir(this, Symbol.iterator, _e);
  },
  concat(...e) {
    return Lt(this).concat(
      ...e.map((t) => I(t) ? Lt(t) : t)
    );
  },
  entries() {
    return Ir(this, "entries", (e) => (e[1] = _e(e[1]), e));
  },
  every(e, t) {
    return Je(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Je(this, "filter", e, t, (n) => n.map(_e), arguments);
  },
  find(e, t) {
    return Je(this, "find", e, t, _e, arguments);
  },
  findIndex(e, t) {
    return Je(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Je(this, "findLast", e, t, _e, arguments);
  },
  findLastIndex(e, t) {
    return Je(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Je(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Pr(this, "includes", e);
  },
  indexOf(...e) {
    return Pr(this, "indexOf", e);
  },
  join(e) {
    return Lt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return Pr(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Je(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return sn(this, "pop");
  },
  push(...e) {
    return sn(this, "push", e);
  },
  reduce(e, ...t) {
    return Qs(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Qs(this, "reduceRight", e, t);
  },
  shift() {
    return sn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Je(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return sn(this, "splice", e);
  },
  toReversed() {
    return Lt(this).toReversed();
  },
  toSorted(e) {
    return Lt(this).toSorted(e);
  },
  toSpliced(...e) {
    return Lt(this).toSpliced(...e);
  },
  unshift(...e) {
    return sn(this, "unshift", e);
  },
  values() {
    return Ir(this, "values", _e);
  }
};
function Ir(e, t, n) {
  const r = fr(e), s = r[t]();
  return r !== e && !Oe(e) && (s._next = s.next, s.next = () => {
    const o = s._next();
    return o.value && (o.value = n(o.value)), o;
  }), s;
}
const Dl = Array.prototype;
function Je(e, t, n, r, s, o) {
  const i = fr(e), a = i !== e && !Oe(e), c = i[t];
  if (c !== Dl[t]) {
    const u = c.apply(e, o);
    return a ? _e(u) : u;
  }
  let p = n;
  i !== e && (a ? p = function(u, h) {
    return n.call(this, _e(u), h, e);
  } : n.length > 2 && (p = function(u, h) {
    return n.call(this, u, h, e);
  }));
  const f = c.call(i, p, r);
  return a && s ? s(f) : f;
}
function Qs(e, t, n, r) {
  const s = fr(e);
  let o = n;
  return s !== e && (Oe(e) ? n.length > 3 && (o = function(i, a, c) {
    return n.call(this, i, a, c, e);
  }) : o = function(i, a, c) {
    return n.call(this, i, _e(a), c, e);
  }), s[t](o, ...r);
}
function Pr(e, t, n) {
  const r = U(e);
  me(r, "iterate", _n);
  const s = r[t](...n);
  return (s === -1 || s === !1) && bn(n[0]) ? (n[0] = U(n[0]), r[t](...n)) : s;
}
function sn(e, t, n = []) {
  it(), Os();
  const r = U(e)[t].apply(e, n);
  return As(), at(), r;
}
const Fl = /* @__PURE__ */ st("__proto__,__v_isRef,__isVue"), yi = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ot)
);
function kl(e) {
  ot(e) || (e = String(e));
  const t = U(this);
  return me(t, "has", e), t.hasOwnProperty(e);
}
class xi {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, r) {
    const s = this._isReadonly, o = this._isShallow;
    if (n === "__v_isReactive")
      return !s;
    if (n === "__v_isReadonly")
      return s;
    if (n === "__v_isShallow")
      return o;
    if (n === "__v_raw")
      return r === (s ? o ? Oi : Ti : o ? Si : $i).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const i = I(t);
    if (!s) {
      let c;
      if (i && (c = Nl[n]))
        return c;
      if (n === "hasOwnProperty")
        return kl;
    }
    const a = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      pe(t) ? t : r
    );
    return (ot(n) ? yi.has(n) : Fl(n)) || (s || me(t, "get", n), o) ? a : pe(a) ? i && Ts(n) ? a : a.value : ee(a) ? s ? Ai(a) : Rs(a) : a;
  }
}
class Ci extends xi {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, s) {
    let o = t[n];
    if (!this._isShallow) {
      const c = rt(o);
      if (!Oe(r) && !rt(r) && (o = U(o), r = U(r)), !I(t) && pe(o) && !pe(r))
        return c ? !1 : (o.value = r, !0);
    }
    const i = I(t) && Ts(n) ? Number(n) < t.length : q(t, n), a = Reflect.set(
      t,
      n,
      r,
      pe(t) ? t : s
    );
    return t === U(s) && (i ? yt(r, o) && We(t, "set", n, r, o) : We(t, "add", n, r)), a;
  }
  deleteProperty(t, n) {
    const r = q(t, n), s = t[n], o = Reflect.deleteProperty(t, n);
    return o && r && We(t, "delete", n, void 0, s), o;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!ot(n) || !yi.has(n)) && me(t, "has", n), r;
  }
  ownKeys(t) {
    return me(
      t,
      "iterate",
      I(t) ? "length" : Et
    ), Reflect.ownKeys(t);
  }
}
class wi extends xi {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return ke(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return ke(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Ll = /* @__PURE__ */ new Ci(), Hl = /* @__PURE__ */ new wi(), Vl = /* @__PURE__ */ new Ci(!0), Ul = /* @__PURE__ */ new wi(!0), qr = (e) => e, Nn = (e) => Reflect.getPrototypeOf(e);
function Bl(e, t, n) {
  return function(...r) {
    const s = this.__v_raw, o = U(s), i = Mt(o), a = e === "entries" || e === Symbol.iterator && i, c = e === "keys" && i, p = s[e](...r), f = n ? qr : t ? Jr : _e;
    return !t && me(
      o,
      "iterate",
      c ? zr : Et
    ), {
      // iterator protocol
      next() {
        const { value: u, done: h } = p.next();
        return h ? { value: u, done: h } : {
          value: a ? [f(u[0]), f(u[1])] : f(u),
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
function Dn(e) {
  return function(...t) {
    {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      ke(
        `${jt(e)} operation ${n}failed: target is readonly.`,
        U(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Wl(e, t) {
  const n = {
    get(s) {
      const o = this.__v_raw, i = U(o), a = U(s);
      e || (yt(s, a) && me(i, "get", s), me(i, "get", a));
      const { has: c } = Nn(i), p = t ? qr : e ? Jr : _e;
      if (c.call(i, s))
        return p(o.get(s));
      if (c.call(i, a))
        return p(o.get(a));
      o !== i && o.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && me(U(s), "iterate", Et), Reflect.get(s, "size", s);
    },
    has(s) {
      const o = this.__v_raw, i = U(o), a = U(s);
      return e || (yt(s, a) && me(i, "has", s), me(i, "has", a)), s === a ? o.has(s) : o.has(s) || o.has(a);
    },
    forEach(s, o) {
      const i = this, a = i.__v_raw, c = U(a), p = t ? qr : e ? Jr : _e;
      return !e && me(c, "iterate", Et), a.forEach((f, u) => s.call(o, p(f), p(u), i));
    }
  };
  return fe(
    n,
    e ? {
      add: Dn("add"),
      set: Dn("set"),
      delete: Dn("delete"),
      clear: Dn("clear")
    } : {
      add(s) {
        !t && !Oe(s) && !rt(s) && (s = U(s));
        const o = U(this);
        return Nn(o).has.call(o, s) || (o.add(s), We(o, "add", s, s)), this;
      },
      set(s, o) {
        !t && !Oe(o) && !rt(o) && (o = U(o));
        const i = U(this), { has: a, get: c } = Nn(i);
        let p = a.call(i, s);
        p ? Xs(i, a, s) : (s = U(s), p = a.call(i, s));
        const f = c.call(i, s);
        return i.set(s, o), p ? yt(o, f) && We(i, "set", s, o, f) : We(i, "add", s, o), this;
      },
      delete(s) {
        const o = U(this), { has: i, get: a } = Nn(o);
        let c = i.call(o, s);
        c ? Xs(o, i, s) : (s = U(s), c = i.call(o, s));
        const p = a ? a.call(o, s) : void 0, f = o.delete(s);
        return c && We(o, "delete", s, void 0, p), f;
      },
      clear() {
        const s = U(this), o = s.size !== 0, i = Mt(s) ? new Map(s) : new Set(s), a = s.clear();
        return o && We(
          s,
          "clear",
          void 0,
          void 0,
          i
        ), a;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((s) => {
    n[s] = Bl(s, e, t);
  }), n;
}
function dr(e, t) {
  const n = Wl(e, t);
  return (r, s, o) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(
    q(n, s) && s in r ? n : r,
    s,
    o
  );
}
const Kl = {
  get: /* @__PURE__ */ dr(!1, !1)
}, Gl = {
  get: /* @__PURE__ */ dr(!1, !0)
}, zl = {
  get: /* @__PURE__ */ dr(!0, !1)
}, ql = {
  get: /* @__PURE__ */ dr(!0, !0)
};
function Xs(e, t, n) {
  const r = U(n);
  if (r !== n && t.call(e, r)) {
    const s = Ss(e);
    ke(
      `Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const $i = /* @__PURE__ */ new WeakMap(), Si = /* @__PURE__ */ new WeakMap(), Ti = /* @__PURE__ */ new WeakMap(), Oi = /* @__PURE__ */ new WeakMap();
function Jl(e) {
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
function Yl(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Jl(Ss(e));
}
function Rs(e) {
  return rt(e) ? e : pr(
    e,
    !1,
    Ll,
    Kl,
    $i
  );
}
function Zl(e) {
  return pr(
    e,
    !1,
    Vl,
    Gl,
    Si
  );
}
function Ai(e) {
  return pr(
    e,
    !0,
    Hl,
    zl,
    Ti
  );
}
function Ge(e) {
  return pr(
    e,
    !0,
    Ul,
    ql,
    Oi
  );
}
function pr(e, t, n, r, s) {
  if (!ee(e))
    return ke(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = s.get(e);
  if (o)
    return o;
  const i = Yl(e);
  if (i === 0)
    return e;
  const a = new Proxy(
    e,
    i === 2 ? r : n
  );
  return s.set(e, a), a;
}
function Rt(e) {
  return rt(e) ? Rt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function rt(e) {
  return !!(e && e.__v_isReadonly);
}
function Oe(e) {
  return !!(e && e.__v_isShallow);
}
function bn(e) {
  return e ? !!e.__v_raw : !1;
}
function U(e) {
  const t = e && e.__v_raw;
  return t ? U(t) : e;
}
function Ql(e) {
  return !q(e, "__v_skip") && Object.isExtensible(e) && qn(e, "__v_skip", !0), e;
}
const _e = (e) => ee(e) ? Rs(e) : e, Jr = (e) => ee(e) ? Ai(e) : e;
function pe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function $e(e) {
  return Xl(e, !1);
}
function Xl(e, t) {
  return pe(e) ? e : new ec(e, t);
}
class ec {
  constructor(t, n) {
    this.dep = new Es(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : U(t), this._value = n ? t : _e(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || Oe(t) || rt(t);
    t = r ? t : U(t), yt(t, n) && (this._rawValue = t, this._value = r ? t : _e(t), this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }));
  }
}
function Ne(e) {
  return pe(e) ? e.value : e;
}
const tc = {
  get: (e, t, n) => t === "__v_raw" ? e : Ne(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t];
    return pe(s) && !pe(n) ? (s.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Mi(e) {
  return Rt(e) ? e : new Proxy(e, tc);
}
function nc(e) {
  bn(e) || ke("toRefs() expects a reactive object but received a plain one.");
  const t = I(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = sc(e, n);
  return t;
}
class rc {
  constructor(t, n, r) {
    this._object = t, this._key = n, this._defaultValue = r, this.__v_isRef = !0, this._value = void 0;
  }
  get value() {
    const t = this._object[this._key];
    return this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return jl(U(this._object), this._key);
  }
}
function sc(e, t, n) {
  const r = e[t];
  return pe(r) ? r : new rc(e, t, n);
}
class oc {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Es(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = vn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Q !== this)
      return hi(this, !0), !0;
  }
  get value() {
    const t = this.dep.track({
      target: this,
      type: "get",
      key: "value"
    });
    return vi(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : ke("Write operation failed: computed value is readonly");
  }
}
function ic(e, t, n = !1) {
  let r, s;
  return D(e) ? r = e : (r = e.get, s = e.set), new oc(r, s, n);
}
const Fn = {}, Yn = /* @__PURE__ */ new WeakMap();
let Ot;
function ac(e, t = !1, n = Ot) {
  if (n) {
    let r = Yn.get(n);
    r || Yn.set(n, r = []), r.push(e);
  } else t || ke(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function lc(e, t, n = X) {
  const { immediate: r, deep: s, once: o, scheduler: i, augmentJob: a, call: c } = n, p = (x) => {
    (n.onWarn || ke)(
      "Invalid watch source: ",
      x,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, f = (x) => s ? x : Oe(x) || s === !1 || s === 0 ? Xe(x, 1) : Xe(x);
  let u, h, m, O, P = !1, te = !1;
  if (pe(e) ? (h = () => e.value, P = Oe(e)) : Rt(e) ? (h = () => f(e), P = !0) : I(e) ? (te = !0, P = e.some((x) => Rt(x) || Oe(x)), h = () => e.map((x) => {
    if (pe(x))
      return x.value;
    if (Rt(x))
      return f(x);
    if (D(x))
      return c ? c(x, 2) : x();
    p(x);
  })) : D(e) ? t ? h = c ? () => c(e, 2) : e : h = () => {
    if (m) {
      it();
      try {
        m();
      } finally {
        at();
      }
    }
    const x = Ot;
    Ot = u;
    try {
      return c ? c(e, 3, [O]) : e(O);
    } finally {
      Ot = x;
    }
  } : (h = xe, p(e)), t && s) {
    const x = h, k = s === !0 ? 1 / 0 : s;
    h = () => Xe(x(), k);
  }
  const H = Rl(), K = () => {
    u.stop(), H && ws(H.effects, u);
  };
  if (o && t) {
    const x = t;
    t = (...k) => {
      x(...k), K();
    };
  }
  let L = te ? new Array(e.length).fill(Fn) : Fn;
  const ae = (x) => {
    if (!(!(u.flags & 1) || !u.dirty && !x))
      if (t) {
        const k = u.run();
        if (s || P || (te ? k.some((le, Z) => yt(le, L[Z])) : yt(k, L))) {
          m && m();
          const le = Ot;
          Ot = u;
          try {
            const Z = [
              k,
              // pass undefined as the old value when it's changed for the first time
              L === Fn ? void 0 : te && L[0] === Fn ? [] : L,
              O
            ];
            c ? c(t, 3, Z) : (
              // @ts-expect-error
              t(...Z)
            ), L = k;
          } finally {
            Ot = le;
          }
        }
      } else
        u.run();
  };
  return a && a(ae), u = new di(h), u.scheduler = i ? () => i(ae, !1) : ae, O = (x) => ac(x, !1, u), m = u.onStop = () => {
    const x = Yn.get(u);
    if (x) {
      if (c)
        c(x, 4);
      else
        for (const k of x) k();
      Yn.delete(u);
    }
  }, u.onTrack = n.onTrack, u.onTrigger = n.onTrigger, t ? r ? ae(!0) : L = u.run() : i ? i(ae.bind(null, !0), !0) : u.run(), K.pause = u.pause.bind(u), K.resume = u.resume.bind(u), K.stop = K, K;
}
function Xe(e, t = 1 / 0, n) {
  if (t <= 0 || !ee(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, pe(e))
    Xe(e.value, t, n);
  else if (I(e))
    for (let r = 0; r < e.length; r++)
      Xe(e[r], t, n);
  else if (ii(e) || Mt(e))
    e.forEach((r) => {
      Xe(r, t, n);
    });
  else if (li(e)) {
    for (const r in e)
      Xe(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && Xe(e[r], t, n);
  }
  return e;
}
var ht = { NODE_ENV: '"production"' };
const It = [];
function Hn(e) {
  It.push(e);
}
function Vn() {
  It.pop();
}
let jr = !1;
function C(e, ...t) {
  if (jr) return;
  jr = !0, it();
  const n = It.length ? It[It.length - 1].component : null, r = n && n.appContext.config.warnHandler, s = cc();
  if (r)
    zt(
      r,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((o) => {
          var i, a;
          return (a = (i = o.toString) == null ? void 0 : i.call(o)) != null ? a : JSON.stringify(o);
        }).join(""),
        n && n.proxy,
        s.map(
          ({ vnode: o }) => `at <${br(n, o.type)}>`
        ).join(`
`),
        s
      ]
    );
  else {
    const o = [`[Vue warn]: ${e}`, ...t];
    s.length && o.push(`
`, ...uc(s)), console.warn(...o);
  }
  at(), jr = !1;
}
function cc() {
  let e = It[It.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const r = e.component && e.component.parent;
    e = r && r.vnode;
  }
  return t;
}
function uc(e) {
  const t = [];
  return e.forEach((n, r) => {
    t.push(...r === 0 ? [] : [`
`], ...fc(n));
  }), t;
}
function fc({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, s = ` at <${br(
    e.component,
    e.type,
    r
  )}`, o = ">" + n;
  return e.props ? [s, ...dc(e.props), o] : [s + o];
}
function dc(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((r) => {
    t.push(...Ei(r, e[r]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Ei(e, t, n) {
  return ue(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : pe(t) ? (t = Ei(e, U(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : D(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = U(t), n ? t : [`${e}=`, t]);
}
function pc(e, t) {
  e !== void 0 && (typeof e != "number" ? C(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && C(`${t} is NaN - the duration expression might be incorrect.`));
}
const Is = {
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
function zt(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (s) {
    An(s, t, n);
  }
}
function Le(e, t, n, r) {
  if (D(e)) {
    const s = zt(e, t, n, r);
    return s && $s(s) && s.catch((o) => {
      An(o, t, n);
    }), s;
  }
  if (I(e)) {
    const s = [];
    for (let o = 0; o < e.length; o++)
      s.push(Le(e[o], t, n, r));
    return s;
  } else
    C(
      `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
    );
}
function An(e, t, n, r = !0) {
  const s = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: i } = t && t.appContext.config || X;
  if (t) {
    let a = t.parent;
    const c = t.proxy, p = Is[n];
    for (; a; ) {
      const f = a.ec;
      if (f) {
        for (let u = 0; u < f.length; u++)
          if (f[u](e, c, p) === !1)
            return;
      }
      a = a.parent;
    }
    if (o) {
      it(), zt(o, null, 10, [
        e,
        c,
        p
      ]), at();
      return;
    }
  }
  hc(e, n, s, r, i);
}
function hc(e, t, n, r = !0, s = !1) {
  {
    const o = Is[t];
    if (n && Hn(n), C(`Unhandled error${o ? ` during execution of ${o}` : ""}`), n && Vn(), r)
      throw e;
    console.error(e);
  }
}
const Se = [];
let Be = -1;
const Wt = [];
let gt = null, Vt = 0;
const Ri = /* @__PURE__ */ Promise.resolve();
let Zn = null;
const gc = 100;
function mc(e) {
  const t = Zn || Ri;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function vc(e) {
  let t = Be + 1, n = Se.length;
  for (; t < n; ) {
    const r = t + n >>> 1, s = Se[r], o = yn(s);
    o < e || o === e && s.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function hr(e) {
  if (!(e.flags & 1)) {
    const t = yn(e), n = Se[Se.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= yn(n) ? Se.push(e) : Se.splice(vc(t), 0, e), e.flags |= 1, Ii();
  }
}
function Ii() {
  Zn || (Zn = Ri.then(Ni));
}
function Pi(e) {
  I(e) ? Wt.push(...e) : gt && e.id === -1 ? gt.splice(Vt + 1, 0, e) : e.flags & 1 || (Wt.push(e), e.flags |= 1), Ii();
}
function eo(e, t, n = Be + 1) {
  for (t = t || /* @__PURE__ */ new Map(); n < Se.length; n++) {
    const r = Se[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid || Ps(t, r))
        continue;
      Se.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function ji(e) {
  if (Wt.length) {
    const t = [...new Set(Wt)].sort(
      (n, r) => yn(n) - yn(r)
    );
    if (Wt.length = 0, gt) {
      gt.push(...t);
      return;
    }
    for (gt = t, e = e || /* @__PURE__ */ new Map(), Vt = 0; Vt < gt.length; Vt++) {
      const n = gt[Vt];
      Ps(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    gt = null, Vt = 0;
  }
}
const yn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Ni(e) {
  e = e || /* @__PURE__ */ new Map();
  const t = (n) => Ps(e, n);
  try {
    for (Be = 0; Be < Se.length; Be++) {
      const n = Se[Be];
      if (n && !(n.flags & 8)) {
        if (ht.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), zt(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; Be < Se.length; Be++) {
      const n = Se[Be];
      n && (n.flags &= -2);
    }
    Be = -1, Se.length = 0, ji(e), Zn = null, (Se.length || Wt.length) && Ni(e);
  }
}
function Ps(e, t) {
  const n = e.get(t) || 0;
  if (n > gc) {
    const r = t.i, s = r && Hs(r.type);
    return An(
      `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let ze = !1;
const Un = /* @__PURE__ */ new Map();
On().__VUE_HMR_RUNTIME__ = {
  createRecord: Nr(Di),
  rerender: Nr(yc),
  reload: Nr(xc)
};
const Nt = /* @__PURE__ */ new Map();
function _c(e) {
  const t = e.type.__hmrId;
  let n = Nt.get(t);
  n || (Di(t, e.type), n = Nt.get(t)), n.instances.add(e);
}
function bc(e) {
  Nt.get(e.type.__hmrId).instances.delete(e);
}
function Di(e, t) {
  return Nt.has(e) ? !1 : (Nt.set(e, {
    initialDef: Qn(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Qn(e) {
  return Oa(e) ? e.__vccOpts : e;
}
function yc(e, t) {
  const n = Nt.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((r) => {
    t && (r.render = t, Qn(r.type).render = t), r.renderCache = [], ze = !0, r.update(), ze = !1;
  }));
}
function xc(e, t) {
  const n = Nt.get(e);
  if (!n) return;
  t = Qn(t), to(n.initialDef, t);
  const r = [...n.instances];
  for (let s = 0; s < r.length; s++) {
    const o = r[s], i = Qn(o.type);
    let a = Un.get(i);
    a || (i !== n.initialDef && to(i, t), Un.set(i, a = /* @__PURE__ */ new Set())), a.add(o), o.appContext.propsCache.delete(o.type), o.appContext.emitsCache.delete(o.type), o.appContext.optionsCache.delete(o.type), o.ceReload ? (a.add(o), o.ceReload(t.styles), a.delete(o)) : o.parent ? hr(() => {
      ze = !0, o.parent.update(), ze = !1, a.delete(o);
    }) : o.appContext.reload ? o.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), o.root.ce && o !== o.root && o.root.ce._removeChildStyle(i);
  }
  Pi(() => {
    Un.clear();
  });
}
function to(e, t) {
  fe(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Nr(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (r) {
      console.error(r), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let Ke, un = [], Yr = !1;
function Mn(e, ...t) {
  Ke ? Ke.emit(e, ...t) : Yr || un.push({ event: e, args: t });
}
function Fi(e, t) {
  var n, r;
  Ke = e, Ke ? (Ke.enabled = !0, un.forEach(({ event: s, args: o }) => Ke.emit(s, ...o)), un = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((r = (n = window.navigator) == null ? void 0 : n.userAgent) != null && r.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((o) => {
    Fi(o, t);
  }), setTimeout(() => {
    Ke || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Yr = !0, un = []);
  }, 3e3)) : (Yr = !0, un = []);
}
function Cc(e, t) {
  Mn("app:init", e, t, {
    Fragment: be,
    Text: Rn,
    Comment: de,
    Static: Wn
  });
}
function wc(e) {
  Mn("app:unmount", e);
}
const $c = /* @__PURE__ */ js(
  "component:added"
  /* COMPONENT_ADDED */
), ki = /* @__PURE__ */ js(
  "component:updated"
  /* COMPONENT_UPDATED */
), Sc = /* @__PURE__ */ js(
  "component:removed"
  /* COMPONENT_REMOVED */
), Tc = (e) => {
  Ke && typeof Ke.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Ke.cleanupBuffer(e) && Sc(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function js(e) {
  return (t) => {
    Mn(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const Oc = /* @__PURE__ */ Li(
  "perf:start"
  /* PERFORMANCE_START */
), Ac = /* @__PURE__ */ Li(
  "perf:end"
  /* PERFORMANCE_END */
);
function Li(e) {
  return (t, n, r) => {
    Mn(e, t.appContext.app, t.uid, t, n, r);
  };
}
function Mc(e, t, n) {
  Mn(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let he = null, Hi = null;
function Xn(e) {
  const t = he;
  return he = e, Hi = e && e.type.__scopeId || null, t;
}
function xn(e, t = he, n) {
  if (!t || e._n)
    return e;
  const r = (...s) => {
    r._d && go(-1);
    const o = Xn(t);
    let i;
    try {
      i = e(...s);
    } finally {
      Xn(o), r._d && go(1);
    }
    return ki(t), i;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function Vi(e) {
  dl(e) && C("Do not use built-in directive ids as custom directive id: " + e);
}
function Ui(e, t) {
  if (he === null)
    return C("withDirectives can only be used inside render functions."), e;
  const n = _r(he), r = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [o, i, a, c = X] = t[s];
    o && (D(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && Xe(i), r.push({
      dir: o,
      instance: n,
      value: i,
      oldValue: void 0,
      arg: a,
      modifiers: c
    }));
  }
  return e;
}
function Ct(e, t, n, r) {
  const s = e.dirs, o = t && t.dirs;
  for (let i = 0; i < s.length; i++) {
    const a = s[i];
    o && (a.oldValue = o[i].value);
    let c = a.dir[r];
    c && (it(), Le(c, n, 8, [
      e.el,
      a,
      e,
      t
    ]), at());
  }
}
const Ec = Symbol("_vte"), Bi = (e) => e.__isTeleport, mt = Symbol("_leaveCb"), kn = Symbol("_enterCb");
function Rc() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return mr(() => {
    e.isMounted = !0;
  }), Zi(() => {
    e.isUnmounting = !0;
  }), e;
}
const Pe = [Function, Array], Wi = {
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
}, Ki = (e) => {
  const t = e.subTree;
  return t.component ? Ki(t.component) : t;
}, Ic = {
  name: "BaseTransition",
  props: Wi,
  setup(e, { slots: t }) {
    const n = $a(), r = Rc();
    return () => {
      const s = t.default && qi(t.default(), !0);
      if (!s || !s.length)
        return;
      const o = Gi(s), i = U(e), { mode: a } = i;
      if (a && a !== "in-out" && a !== "out-in" && a !== "default" && C(`invalid <transition> mode: ${a}`), r.isLeaving)
        return Dr(o);
      const c = no(o);
      if (!c)
        return Dr(o);
      let p = Zr(
        c,
        i,
        r,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (h) => p = h
      );
      c.type !== de && Cn(c, p);
      const f = n.subTree, u = f && no(f);
      if (u && u.type !== de && !At(c, u) && Ki(n).type !== de) {
        const h = Zr(
          u,
          i,
          r,
          n
        );
        if (Cn(u, h), a === "out-in" && c.type !== de)
          return r.isLeaving = !0, h.afterLeave = () => {
            r.isLeaving = !1, n.job.flags & 8 || n.update(), delete h.afterLeave;
          }, Dr(o);
        a === "in-out" && c.type !== de && (h.delayLeave = (m, O, P) => {
          const te = zi(
            r,
            u
          );
          te[String(u.key)] = u, m[mt] = () => {
            O(), m[mt] = void 0, delete p.delayedLeave;
          }, p.delayedLeave = P;
        });
      }
      return o;
    };
  }
};
function Gi(e) {
  let t = e[0];
  if (e.length > 1) {
    let n = !1;
    for (const r of e)
      if (r.type !== de) {
        if (n) {
          C(
            "<transition> can only be used on a single element or component. Use <transition-group> for lists."
          );
          break;
        }
        t = r, n = !0;
      }
  }
  return t;
}
const Pc = Ic;
function zi(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
}
function Zr(e, t, n, r, s) {
  const {
    appear: o,
    mode: i,
    persisted: a = !1,
    onBeforeEnter: c,
    onEnter: p,
    onAfterEnter: f,
    onEnterCancelled: u,
    onBeforeLeave: h,
    onLeave: m,
    onAfterLeave: O,
    onLeaveCancelled: P,
    onBeforeAppear: te,
    onAppear: H,
    onAfterAppear: K,
    onAppearCancelled: L
  } = t, ae = String(e.key), x = zi(n, e), k = (E, B) => {
    E && Le(
      E,
      r,
      9,
      B
    );
  }, le = (E, B) => {
    const J = B[1];
    k(E, B), I(E) ? E.every((A) => A.length <= 1) && J() : E.length <= 1 && J();
  }, Z = {
    mode: i,
    persisted: a,
    beforeEnter(E) {
      let B = c;
      if (!n.isMounted)
        if (o)
          B = te || c;
        else
          return;
      E[mt] && E[mt](
        !0
        /* cancelled */
      );
      const J = x[ae];
      J && At(e, J) && J.el[mt] && J.el[mt](), k(B, [E]);
    },
    enter(E) {
      let B = p, J = f, A = u;
      if (!n.isMounted)
        if (o)
          B = H || p, J = K || f, A = L || u;
        else
          return;
      let ne = !1;
      const V = E[kn] = (M) => {
        ne || (ne = !0, M ? k(A, [E]) : k(J, [E]), Z.delayedLeave && Z.delayedLeave(), E[kn] = void 0);
      };
      B ? le(B, [E, V]) : V();
    },
    leave(E, B) {
      const J = String(e.key);
      if (E[kn] && E[kn](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return B();
      k(h, [E]);
      let A = !1;
      const ne = E[mt] = (V) => {
        A || (A = !0, B(), V ? k(P, [E]) : k(O, [E]), E[mt] = void 0, x[J] === e && delete x[J]);
      };
      x[J] = e, m ? le(m, [E, ne]) : ne();
    },
    clone(E) {
      const B = Zr(
        E,
        t,
        n,
        r,
        s
      );
      return s && s(B), B;
    }
  };
  return Z;
}
function Dr(e) {
  if (En(e))
    return e = qe(e), e.children = null, e;
}
function no(e) {
  if (!En(e))
    return Bi(e.type) && e.children ? Gi(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && D(n.default))
      return n.default();
  }
}
function Cn(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Cn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function qi(e, t = !1, n) {
  let r = [], s = 0;
  for (let o = 0; o < e.length; o++) {
    let i = e[o];
    const a = n == null ? i.key : String(n) + String(i.key != null ? i.key : o);
    i.type === be ? (i.patchFlag & 128 && s++, r = r.concat(
      qi(i.children, t, a)
    )) : (t || i.type !== de) && r.push(a != null ? qe(i, { key: a }) : i);
  }
  if (s > 1)
    for (let o = 0; o < r.length; o++)
      r[o].patchFlag = -2;
  return r;
}
function Ji(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const jc = /* @__PURE__ */ new WeakSet();
function Qr(e, t, n, r, s = !1) {
  if (I(e)) {
    e.forEach(
      (O, P) => Qr(
        O,
        t && (I(t) ? t[P] : t),
        n,
        r,
        s
      )
    );
    return;
  }
  if (Kt(r) && !s)
    return;
  const o = r.shapeFlag & 4 ? _r(r.component) : r.el, i = s ? null : o, { i: a, r: c } = e;
  if (!a) {
    C(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const p = t && t.r, f = a.refs === X ? a.refs = {} : a.refs, u = a.setupState, h = U(u), m = u === X ? () => !1 : (O) => (q(h, O) && !pe(h[O]) && C(
    `Template ref "${O}" used on a non-ref value. It will not work in the production build.`
  ), jc.has(h[O]) ? !1 : q(h, O));
  if (p != null && p !== c && (ue(p) ? (f[p] = null, m(p) && (u[p] = null)) : pe(p) && (p.value = null)), D(c))
    zt(c, a, 12, [i, f]);
  else {
    const O = ue(c), P = pe(c);
    if (O || P) {
      const te = () => {
        if (e.f) {
          const H = O ? m(c) ? u[c] : f[c] : c.value;
          s ? I(H) && ws(H, o) : I(H) ? H.includes(o) || H.push(o) : O ? (f[c] = [o], m(c) && (u[c] = f[c])) : (c.value = [o], e.k && (f[e.k] = c.value));
        } else O ? (f[c] = i, m(c) && (u[c] = i)) : P ? (c.value = i, e.k && (f[e.k] = i)) : C("Invalid template ref type:", c, `(${typeof c})`);
      };
      i ? (te.id = -1, Ee(te, n)) : te();
    } else
      C("Invalid template ref type:", c, `(${typeof c})`);
  }
}
On().requestIdleCallback;
On().cancelIdleCallback;
const Kt = (e) => !!e.type.__asyncLoader, En = (e) => e.type.__isKeepAlive;
function Nc(e, t) {
  Yi(e, "a", t);
}
function Dc(e, t) {
  Yi(e, "da", t);
}
function Yi(e, t, n = ge) {
  const r = e.__wdc || (e.__wdc = () => {
    let s = n;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return e();
  });
  if (gr(t, r, n), n) {
    let s = n.parent;
    for (; s && s.parent; )
      En(s.parent.vnode) && Fc(r, t, n, s), s = s.parent;
  }
}
function Fc(e, t, n, r) {
  const s = gr(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  Qi(() => {
    ws(r[t], s);
  }, n);
}
function gr(e, t, n = ge, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...i) => {
      it();
      const a = In(n), c = Le(t, n, e, i);
      return a(), at(), c;
    });
    return r ? s.unshift(o) : s.push(o), o;
  } else {
    const s = Tt(Is[e].replace(/ hook$/, ""));
    C(
      `${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const lt = (e) => (t, n = ge) => {
  (!$n || e === "sp") && gr(e, (...r) => t(...r), n);
}, kc = lt("bm"), mr = lt("m"), Lc = lt(
  "bu"
), Hc = lt("u"), Zi = lt(
  "bum"
), Qi = lt("um"), Vc = lt(
  "sp"
), Uc = lt("rtg"), Bc = lt("rtc");
function Wc(e, t = ge) {
  gr("ec", e, t);
}
const Kc = "components", Xi = Symbol.for("v-ndc");
function Gc(e) {
  return ue(e) ? zc(Kc, e, !1) || e : e || Xi;
}
function zc(e, t, n = !0, r = !1) {
  const s = he || ge;
  if (s) {
    const o = s.type;
    {
      const a = Hs(
        o,
        !1
      );
      if (a && (a === t || a === Te(t) || a === jt(Te(t))))
        return o;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      ro(s[e] || o[e], t) || // global registration
      ro(s.appContext[e], t)
    );
    return !i && r ? o : (n && !i && C(`Failed to resolve ${e.slice(0, -1)}: ${t}
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`), i);
  } else
    C(
      `resolve${jt(e.slice(0, -1))} can only be used in render() or setup().`
    );
}
function ro(e, t) {
  return e && (e[t] || e[Te(t)] || e[jt(Te(t))]);
}
function ea(e, t, n, r) {
  let s;
  const o = n, i = I(e);
  if (i || ue(e)) {
    const a = i && Rt(e);
    let c = !1;
    a && (c = !Oe(e), e = fr(e)), s = new Array(e.length);
    for (let p = 0, f = e.length; p < f; p++)
      s[p] = t(
        c ? _e(e[p]) : e[p],
        p,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    Number.isInteger(e) || C(`The v-for range expect an integer value but got ${e}.`), s = new Array(e);
    for (let a = 0; a < e; a++)
      s[a] = t(a + 1, a, void 0, o);
  } else if (ee(e))
    if (e[Symbol.iterator])
      s = Array.from(
        e,
        (a, c) => t(a, c, void 0, o)
      );
    else {
      const a = Object.keys(e);
      s = new Array(a.length);
      for (let c = 0, p = a.length; c < p; c++) {
        const f = a[c];
        s[c] = t(e[f], f, c, o);
      }
    }
  else
    s = [];
  return s;
}
function ta(e, t, n = {}, r, s) {
  if (he.ce || he.parent && Kt(he.parent) && he.parent.ce)
    return Y(), Dt(
      be,
      null,
      [ie("slot", n, r)],
      64
    );
  let o = e[t];
  o && o.length > 1 && (C(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), o = () => []), o && o._c && (o._d = !1), Y();
  const i = o && na(o(n)), a = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  i && i.key, c = Dt(
    be,
    {
      key: (a && !ot(a) ? a : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!i && r ? "_fb" : "")
    },
    i || [],
    i && e._ === 1 ? 64 : -2
  );
  return o && o._c && (o._d = !0), c;
}
function na(e) {
  return e.some((t) => Ft(t) ? !(t.type === de || t.type === be && !na(t.children)) : !0) ? e : null;
}
const Xr = (e) => e ? Sa(e) ? _r(e) : Xr(e.parent) : null, Pt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ fe(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => Ge(e.props),
    $attrs: (e) => Ge(e.attrs),
    $slots: (e) => Ge(e.slots),
    $refs: (e) => Ge(e.refs),
    $parent: (e) => Xr(e.parent),
    $root: (e) => Xr(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Ds(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      hr(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = mc.bind(e.proxy)),
    $watch: (e) => Tu.bind(e)
  })
), Ns = (e) => e === "_" || e === "$", Fr = (e, t) => e !== X && !e.__isScriptSetup && q(e, t), ra = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: s, props: o, accessCache: i, type: a, appContext: c } = e;
    if (t === "__isVue")
      return !0;
    let p;
    if (t[0] !== "$") {
      const m = i[t];
      if (m !== void 0)
        switch (m) {
          case 1:
            return r[t];
          case 2:
            return s[t];
          case 4:
            return n[t];
          case 3:
            return o[t];
        }
      else {
        if (Fr(r, t))
          return i[t] = 1, r[t];
        if (s !== X && q(s, t))
          return i[t] = 2, s[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (p = e.propsOptions[0]) && q(p, t)
        )
          return i[t] = 3, o[t];
        if (n !== X && q(n, t))
          return i[t] = 4, n[t];
        es && (i[t] = 0);
      }
    }
    const f = Pt[t];
    let u, h;
    if (f)
      return t === "$attrs" ? (me(e.attrs, "get", ""), nr()) : t === "$slots" && me(e, "get", t), f(e);
    if (
      // css module (injected by vue-loader)
      (u = a.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== X && q(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      h = c.config.globalProperties, q(h, t)
    )
      return h[t];
    he && (!ue(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (s !== X && Ns(t[0]) && q(s, t) ? C(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === he && C(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: s, ctx: o } = e;
    return Fr(s, t) ? (s[t] = n, !0) : s.__isScriptSetup && q(s, t) ? (C(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : r !== X && q(r, t) ? (r[t] = n, !0) : q(e.props, t) ? (C(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (C(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (t in e.appContext.config.globalProperties ? Object.defineProperty(o, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: s, propsOptions: o }
  }, i) {
    let a;
    return !!n[i] || e !== X && q(e, i) || Fr(t, i) || (a = o[0]) && q(a, i) || q(r, i) || q(Pt, i) || q(s.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : q(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
ra.ownKeys = (e) => (C(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e));
function qc(e) {
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
function Jc(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((r) => {
    Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[r],
      set: xe
    });
  });
}
function Yc(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(U(n)).forEach((r) => {
    if (!n.__isScriptSetup) {
      if (Ns(r[0])) {
        C(
          `setup() return property ${JSON.stringify(
            r
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, r, {
        enumerable: !0,
        configurable: !0,
        get: () => n[r],
        set: xe
      });
    }
  });
}
function so(e) {
  return I(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Zc() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? C(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let es = !0;
function Qc(e) {
  const t = Ds(e), n = e.proxy, r = e.ctx;
  es = !1, t.beforeCreate && oo(t.beforeCreate, e, "bc");
  const {
    // state
    data: s,
    computed: o,
    methods: i,
    watch: a,
    provide: c,
    inject: p,
    // lifecycle
    created: f,
    beforeMount: u,
    mounted: h,
    beforeUpdate: m,
    updated: O,
    activated: P,
    deactivated: te,
    beforeDestroy: H,
    beforeUnmount: K,
    destroyed: L,
    unmounted: ae,
    render: x,
    renderTracked: k,
    renderTriggered: le,
    errorCaptured: Z,
    serverPrefetch: E,
    // public API
    expose: B,
    inheritAttrs: J,
    // assets
    components: A,
    directives: ne,
    filters: V
  } = t, M = Zc();
  {
    const [j] = e.propsOptions;
    if (j)
      for (const W in j)
        M("Props", W);
  }
  if (p && Xc(p, r, M), i)
    for (const j in i) {
      const W = i[j];
      D(W) ? (Object.defineProperty(r, j, {
        value: W.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }), M("Methods", j)) : C(
        `Method "${j}" has type "${typeof W}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (s) {
    D(s) || C(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const j = s.call(n, n);
    if ($s(j) && C(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !ee(j))
      C("data() should return an object.");
    else {
      e.data = Rs(j);
      for (const W in j)
        M("Data", W), Ns(W[0]) || Object.defineProperty(r, W, {
          configurable: !0,
          enumerable: !0,
          get: () => j[W],
          set: xe
        });
    }
  }
  if (es = !0, o)
    for (const j in o) {
      const W = o[j], He = D(W) ? W.bind(n, n) : D(W.get) ? W.get.bind(n, n) : xe;
      He === xe && C(`Computed property "${j}" has no getter.`);
      const Or = !D(W) && D(W.set) ? W.set.bind(n) : () => {
        C(
          `Write operation failed: computed property "${j}" is readonly.`
        );
      }, Xt = ye({
        get: He,
        set: Or
      });
      Object.defineProperty(r, j, {
        enumerable: !0,
        configurable: !0,
        get: () => Xt.value,
        set: (kt) => Xt.value = kt
      }), M("Computed", j);
    }
  if (a)
    for (const j in a)
      sa(a[j], r, n, j);
  if (c) {
    const j = D(c) ? c.call(n) : c;
    Reflect.ownKeys(j).forEach((W) => {
      ou(W, j[W]);
    });
  }
  f && oo(f, e, "c");
  function G(j, W) {
    I(W) ? W.forEach((He) => j(He.bind(n))) : W && j(W.bind(n));
  }
  if (G(kc, u), G(mr, h), G(Lc, m), G(Hc, O), G(Nc, P), G(Dc, te), G(Wc, Z), G(Bc, k), G(Uc, le), G(Zi, K), G(Qi, ae), G(Vc, E), I(B))
    if (B.length) {
      const j = e.exposed || (e.exposed = {});
      B.forEach((W) => {
        Object.defineProperty(j, W, {
          get: () => n[W],
          set: (He) => n[W] = He
        });
      });
    } else e.exposed || (e.exposed = {});
  x && e.render === xe && (e.render = x), J != null && (e.inheritAttrs = J), A && (e.components = A), ne && (e.directives = ne), E && Ji(e);
}
function Xc(e, t, n = xe) {
  I(e) && (e = ts(e));
  for (const r in e) {
    const s = e[r];
    let o;
    ee(s) ? "default" in s ? o = Bn(
      s.from || r,
      s.default,
      !0
    ) : o = Bn(s.from || r) : o = Bn(s), pe(o) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (i) => o.value = i
    }) : t[r] = o, n("Inject", r);
  }
}
function oo(e, t, n) {
  Le(
    I(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function sa(e, t, n, r) {
  let s = r.includes(".") ? va(n, r) : () => n[r];
  if (ue(e)) {
    const o = t[e];
    D(o) ? gn(s, o) : C(`Invalid watch handler specified by key "${e}"`, o);
  } else if (D(e))
    gn(s, e.bind(n));
  else if (ee(e))
    if (I(e))
      e.forEach((o) => sa(o, t, n, r));
    else {
      const o = D(e.handler) ? e.handler.bind(n) : t[e.handler];
      D(o) ? gn(s, o, e) : C(`Invalid watch handler specified by key "${e.handler}"`, o);
    }
  else
    C(`Invalid watch option: "${r}"`, e);
}
function Ds(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: s,
    optionsCache: o,
    config: { optionMergeStrategies: i }
  } = e.appContext, a = o.get(t);
  let c;
  return a ? c = a : !s.length && !n && !r ? c = t : (c = {}, s.length && s.forEach(
    (p) => er(c, p, i, !0)
  ), er(c, t, i)), ee(t) && o.set(t, c), c;
}
function er(e, t, n, r = !1) {
  const { mixins: s, extends: o } = t;
  o && er(e, o, n, !0), s && s.forEach(
    (i) => er(e, i, n, !0)
  );
  for (const i in t)
    if (r && i === "expose")
      C(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const a = eu[i] || n && n[i];
      e[i] = a ? a(e[i], t[i]) : t[i];
    }
  return e;
}
const eu = {
  data: io,
  props: ao,
  emits: ao,
  // objects
  methods: fn,
  computed: fn,
  // lifecycle
  beforeCreate: we,
  created: we,
  beforeMount: we,
  mounted: we,
  beforeUpdate: we,
  updated: we,
  beforeDestroy: we,
  beforeUnmount: we,
  destroyed: we,
  unmounted: we,
  activated: we,
  deactivated: we,
  errorCaptured: we,
  serverPrefetch: we,
  // assets
  components: fn,
  directives: fn,
  // watch
  watch: nu,
  // provide / inject
  provide: io,
  inject: tu
};
function io(e, t) {
  return t ? e ? function() {
    return fe(
      D(e) ? e.call(this, this) : e,
      D(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function tu(e, t) {
  return fn(ts(e), ts(t));
}
function ts(e) {
  if (I(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function we(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function fn(e, t) {
  return e ? fe(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ao(e, t) {
  return e ? I(e) && I(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : fe(
    /* @__PURE__ */ Object.create(null),
    so(e),
    so(t ?? {})
  ) : t;
}
function nu(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = fe(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = we(e[r], t[r]);
  return n;
}
function oa() {
  return {
    app: null,
    config: {
      isNativeTag: ul,
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
let ru = 0;
function su(e, t) {
  return function(r, s = null) {
    D(r) || (r = fe({}, r)), s != null && !ee(s) && (C("root props passed to app.mount() must be an object."), s = null);
    const o = oa(), i = /* @__PURE__ */ new WeakSet(), a = [];
    let c = !1;
    const p = o.app = {
      _uid: ru++,
      _component: r,
      _props: s,
      _container: null,
      _context: o,
      _instance: null,
      version: _o,
      get config() {
        return o.config;
      },
      set config(f) {
        C(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(f, ...u) {
        return i.has(f) ? C("Plugin has already been applied to target app.") : f && D(f.install) ? (i.add(f), f.install(p, ...u)) : D(f) ? (i.add(f), f(p, ...u)) : C(
          'A plugin must either be a function or an object with an "install" function.'
        ), p;
      },
      mixin(f) {
        return o.mixins.includes(f) ? C(
          "Mixin has already been applied to target app" + (f.name ? `: ${f.name}` : "")
        ) : o.mixins.push(f), p;
      },
      component(f, u) {
        return as(f, o.config), u ? (o.components[f] && C(`Component "${f}" has already been registered in target app.`), o.components[f] = u, p) : o.components[f];
      },
      directive(f, u) {
        return Vi(f), u ? (o.directives[f] && C(`Directive "${f}" has already been registered in target app.`), o.directives[f] = u, p) : o.directives[f];
      },
      mount(f, u, h) {
        if (c)
          C(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          f.__vue_app__ && C(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const m = p._ceVNode || ie(r, s);
          return m.appContext = o, h === !0 ? h = "svg" : h === !1 && (h = void 0), o.reload = () => {
            e(
              qe(m),
              f,
              h
            );
          }, u && t ? t(m, f) : e(m, f, h), c = !0, p._container = f, f.__vue_app__ = p, p._instance = m.component, Cc(p, _o), _r(m.component);
        }
      },
      onUnmount(f) {
        typeof f != "function" && C(
          `Expected function as first argument to app.onUnmount(), but got ${typeof f}`
        ), a.push(f);
      },
      unmount() {
        c ? (Le(
          a,
          p._instance,
          16
        ), e(null, p._container), p._instance = null, wc(p), delete p._container.__vue_app__) : C("Cannot unmount an app that is not mounted.");
      },
      provide(f, u) {
        return f in o.provides && C(
          `App already provides property with key "${String(f)}". It will be overwritten with the new value.`
        ), o.provides[f] = u, p;
      },
      runWithContext(f) {
        const u = Gt;
        Gt = p;
        try {
          return f();
        } finally {
          Gt = u;
        }
      }
    };
    return p;
  };
}
let Gt = null;
function ou(e, t) {
  if (!ge)
    C("provide() can only be used inside setup().");
  else {
    let n = ge.provides;
    const r = ge.parent && ge.parent.provides;
    r === n && (n = ge.provides = Object.create(r)), n[e] = t;
  }
}
function Bn(e, t, n = !1) {
  const r = ge || he;
  if (r || Gt) {
    const s = Gt ? Gt._context.provides : r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && D(t) ? t.call(r && r.proxy) : t;
    C(`injection "${String(e)}" not found.`);
  } else
    C("inject() can only be used inside setup() or functional components.");
}
const ia = {}, aa = () => Object.create(ia), la = (e) => Object.getPrototypeOf(e) === ia;
function iu(e, t, n, r = !1) {
  const s = {}, o = aa();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), ca(e, t, s, o);
  for (const i in e.propsOptions[0])
    i in s || (s[i] = void 0);
  fa(t || {}, s, e), n ? e.props = r ? s : Zl(s) : e.type.props ? e.props = s : e.props = o, e.attrs = o;
}
function au(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function lu(e, t, n, r) {
  const {
    props: s,
    attrs: o,
    vnode: { patchFlag: i }
  } = e, a = U(s), [c] = e.propsOptions;
  let p = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !au(e) && (r || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const f = e.vnode.dynamicProps;
      for (let u = 0; u < f.length; u++) {
        let h = f[u];
        if (vr(e.emitsOptions, h))
          continue;
        const m = t[h];
        if (c)
          if (q(o, h))
            m !== o[h] && (o[h] = m, p = !0);
          else {
            const O = Te(h);
            s[O] = ns(
              c,
              a,
              O,
              m,
              e,
              !1
            );
          }
        else
          m !== o[h] && (o[h] = m, p = !0);
      }
    }
  } else {
    ca(e, t, s, o) && (p = !0);
    let f;
    for (const u in a)
      (!t || // for camelCase
      !q(t, u) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((f = nt(u)) === u || !q(t, f))) && (c ? n && // for camelCase
      (n[u] !== void 0 || // for kebab-case
      n[f] !== void 0) && (s[u] = ns(
        c,
        a,
        u,
        void 0,
        e,
        !0
      )) : delete s[u]);
    if (o !== a)
      for (const u in o)
        (!t || !q(t, u)) && (delete o[u], p = !0);
  }
  p && We(e.attrs, "set", ""), fa(t || {}, s, e);
}
function ca(e, t, n, r) {
  const [s, o] = e.propsOptions;
  let i = !1, a;
  if (t)
    for (let c in t) {
      if (dn(c))
        continue;
      const p = t[c];
      let f;
      s && q(s, f = Te(c)) ? !o || !o.includes(f) ? n[f] = p : (a || (a = {}))[f] = p : vr(e.emitsOptions, c) || (!(c in r) || p !== r[c]) && (r[c] = p, i = !0);
    }
  if (o) {
    const c = U(n), p = a || X;
    for (let f = 0; f < o.length; f++) {
      const u = o[f];
      n[u] = ns(
        s,
        c,
        u,
        p[u],
        e,
        !q(p, u)
      );
    }
  }
  return i;
}
function ns(e, t, n, r, s, o) {
  const i = e[n];
  if (i != null) {
    const a = q(i, "default");
    if (a && r === void 0) {
      const c = i.default;
      if (i.type !== Function && !i.skipFactory && D(c)) {
        const { propsDefaults: p } = s;
        if (n in p)
          r = p[n];
        else {
          const f = In(s);
          r = p[n] = c.call(
            null,
            t
          ), f();
        }
      } else
        r = c;
      s.ce && s.ce._setProp(n, r);
    }
    i[
      0
      /* shouldCast */
    ] && (o && !a ? r = !1 : i[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === nt(n)) && (r = !0));
  }
  return r;
}
const cu = /* @__PURE__ */ new WeakMap();
function ua(e, t, n = !1) {
  const r = n ? cu : t.propsCache, s = r.get(e);
  if (s)
    return s;
  const o = e.props, i = {}, a = [];
  let c = !1;
  if (!D(e)) {
    const f = (u) => {
      c = !0;
      const [h, m] = ua(u, t, !0);
      fe(i, h), m && a.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  if (!o && !c)
    return ee(e) && r.set(e, Bt), Bt;
  if (I(o))
    for (let f = 0; f < o.length; f++) {
      ue(o[f]) || C("props must be strings when using array syntax.", o[f]);
      const u = Te(o[f]);
      lo(u) && (i[u] = X);
    }
  else if (o) {
    ee(o) || C("invalid props options", o);
    for (const f in o) {
      const u = Te(f);
      if (lo(u)) {
        const h = o[f], m = i[u] = I(h) || D(h) ? { type: h } : fe({}, h), O = m.type;
        let P = !1, te = !0;
        if (I(O))
          for (let H = 0; H < O.length; ++H) {
            const K = O[H], L = D(K) && K.name;
            if (L === "Boolean") {
              P = !0;
              break;
            } else L === "String" && (te = !1);
          }
        else
          P = D(O) && O.name === "Boolean";
        m[
          0
          /* shouldCast */
        ] = P, m[
          1
          /* shouldCastTrue */
        ] = te, (P || q(m, "default")) && a.push(u);
      }
    }
  }
  const p = [i, a];
  return ee(e) && r.set(e, p), p;
}
function lo(e) {
  return e[0] !== "$" && !dn(e) ? !0 : (C(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function uu(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function fa(e, t, n) {
  const r = U(t), s = n.propsOptions[0], o = Object.keys(e).map((i) => Te(i));
  for (const i in s) {
    let a = s[i];
    a != null && fu(
      i,
      r[i],
      a,
      Ge(r),
      !o.includes(i)
    );
  }
}
function fu(e, t, n, r, s) {
  const { type: o, required: i, validator: a, skipCheck: c } = n;
  if (i && s) {
    C('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !i)) {
    if (o != null && o !== !0 && !c) {
      let p = !1;
      const f = I(o) ? o : [o], u = [];
      for (let h = 0; h < f.length && !p; h++) {
        const { valid: m, expectedType: O } = pu(t, f[h]);
        u.push(O || ""), p = m;
      }
      if (!p) {
        C(hu(e, t, u));
        return;
      }
    }
    a && !a(t, r) && C('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const du = /* @__PURE__ */ st(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function pu(e, t) {
  let n;
  const r = uu(t);
  if (r === "null")
    n = e === null;
  else if (du(r)) {
    const s = typeof e;
    n = s === r.toLowerCase(), !n && s === "object" && (n = e instanceof t);
  } else r === "Object" ? n = ee(e) : r === "Array" ? n = I(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: r
  };
}
function hu(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let r = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(jt).join(" | ")}`;
  const s = n[0], o = Ss(t), i = co(t, s), a = co(t, o);
  return n.length === 1 && uo(s) && !gu(s, o) && (r += ` with value ${i}`), r += `, got ${o} `, uo(o) && (r += `with value ${a}.`), r;
}
function co(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function uo(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function gu(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const da = (e) => e[0] === "_" || e === "$stable", Fs = (e) => I(e) ? e.map(De) : [De(e)], mu = (e, t, n) => {
  if (t._n)
    return t;
  const r = xn((...s) => (ht.NODE_ENV !== "production" && ge && (!n || n.root === ge.root) && C(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Fs(t(...s))), n);
  return r._c = !1, r;
}, pa = (e, t, n) => {
  const r = e._ctx;
  for (const s in e) {
    if (da(s)) continue;
    const o = e[s];
    if (D(o))
      t[s] = mu(s, o, r);
    else if (o != null) {
      C(
        `Non-function value encountered for slot "${s}". Prefer function slots for better performance.`
      );
      const i = Fs(o);
      t[s] = () => i;
    }
  }
}, ha = (e, t) => {
  En(e.vnode) || C(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Fs(t);
  e.slots.default = () => n;
}, rs = (e, t, n) => {
  for (const r in t)
    (n || r !== "_") && (e[r] = t[r]);
}, vu = (e, t, n) => {
  const r = e.slots = aa();
  if (e.vnode.shapeFlag & 32) {
    const s = t._;
    s ? (rs(r, t, n), n && qn(r, "_", s, !0)) : pa(t, r);
  } else t && ha(e, t);
}, _u = (e, t, n) => {
  const { vnode: r, slots: s } = e;
  let o = !0, i = X;
  if (r.shapeFlag & 32) {
    const a = t._;
    a ? ze ? (rs(s, t, n), We(e, "set", "$slots")) : n && a === 1 ? o = !1 : rs(s, t, n) : (o = !t.$stable, pa(t, s)), i = t;
  } else t && (ha(e, t), i = { default: 1 });
  if (o)
    for (const a in s)
      !da(a) && i[a] == null && delete s[a];
};
let on, bt;
function Ye(e, t) {
  e.appContext.config.performance && tr() && bt.mark(`vue-${t}-${e.uid}`), Oc(e, t, tr() ? bt.now() : Date.now());
}
function Ze(e, t) {
  if (e.appContext.config.performance && tr()) {
    const n = `vue-${t}-${e.uid}`, r = n + ":end";
    bt.mark(r), bt.measure(
      `<${br(e, e.type)}> ${t}`,
      n,
      r
    ), bt.clearMarks(n), bt.clearMarks(r);
  }
  Ac(e, t, tr() ? bt.now() : Date.now());
}
function tr() {
  return on !== void 0 || (typeof window < "u" && window.performance ? (on = !0, bt = window.performance) : on = !1), on;
}
function bu() {
  const e = [];
  if (e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const Ee = Pu;
function yu(e) {
  return xu(e);
}
function xu(e, t) {
  bu();
  const n = On();
  n.__VUE__ = !0, Fi(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: r,
    remove: s,
    patchProp: o,
    createElement: i,
    createText: a,
    createComment: c,
    setText: p,
    setElementText: f,
    parentNode: u,
    nextSibling: h,
    setScopeId: m = xe,
    insertStaticContent: O
  } = e, P = (l, d, g, b = null, v = null, _ = null, S = void 0, $ = null, w = ze ? !1 : !!d.dynamicChildren) => {
    if (l === d)
      return;
    l && !At(l, d) && (b = jn(l), ft(l, v, _, !0), l = null), d.patchFlag === -2 && (w = !1, d.dynamicChildren = null);
    const { type: y, ref: N, shapeFlag: T } = d;
    switch (y) {
      case Rn:
        te(l, d, g, b);
        break;
      case de:
        H(l, d, g, b);
        break;
      case Wn:
        l == null ? K(d, g, b, S) : L(l, d, g, S);
        break;
      case be:
        ne(
          l,
          d,
          g,
          b,
          v,
          _,
          S,
          $,
          w
        );
        break;
      default:
        T & 1 ? k(
          l,
          d,
          g,
          b,
          v,
          _,
          S,
          $,
          w
        ) : T & 6 ? V(
          l,
          d,
          g,
          b,
          v,
          _,
          S,
          $,
          w
        ) : T & 64 || T & 128 ? y.process(
          l,
          d,
          g,
          b,
          v,
          _,
          S,
          $,
          w,
          tn
        ) : C("Invalid VNode type:", y, `(${typeof y})`);
    }
    N != null && v && Qr(N, l && l.ref, _, d || l, !d);
  }, te = (l, d, g, b) => {
    if (l == null)
      r(
        d.el = a(d.children),
        g,
        b
      );
    else {
      const v = d.el = l.el;
      d.children !== l.children && p(v, d.children);
    }
  }, H = (l, d, g, b) => {
    l == null ? r(
      d.el = c(d.children || ""),
      g,
      b
    ) : d.el = l.el;
  }, K = (l, d, g, b) => {
    [l.el, l.anchor] = O(
      l.children,
      d,
      g,
      b,
      l.el,
      l.anchor
    );
  }, L = (l, d, g, b) => {
    if (d.children !== l.children) {
      const v = h(l.anchor);
      x(l), [d.el, d.anchor] = O(
        d.children,
        g,
        v,
        b
      );
    } else
      d.el = l.el, d.anchor = l.anchor;
  }, ae = ({ el: l, anchor: d }, g, b) => {
    let v;
    for (; l && l !== d; )
      v = h(l), r(l, g, b), l = v;
    r(d, g, b);
  }, x = ({ el: l, anchor: d }) => {
    let g;
    for (; l && l !== d; )
      g = h(l), s(l), l = g;
    s(d);
  }, k = (l, d, g, b, v, _, S, $, w) => {
    d.type === "svg" ? S = "svg" : d.type === "math" && (S = "mathml"), l == null ? le(
      d,
      g,
      b,
      v,
      _,
      S,
      $,
      w
    ) : B(
      l,
      d,
      v,
      _,
      S,
      $,
      w
    );
  }, le = (l, d, g, b, v, _, S, $) => {
    let w, y;
    const { props: N, shapeFlag: T, transition: R, dirs: F } = l;
    if (w = l.el = i(
      l.type,
      _,
      N && N.is,
      N
    ), T & 8 ? f(w, l.children) : T & 16 && E(
      l.children,
      w,
      null,
      b,
      v,
      kr(l, _),
      S,
      $
    ), F && Ct(l, null, b, "created"), Z(w, l, l.scopeId, S, b), N) {
      for (const oe in N)
        oe !== "value" && !dn(oe) && o(w, oe, null, N[oe], _, b);
      "value" in N && o(w, "value", null, N.value, _), (y = N.onVnodeBeforeMount) && Ue(y, b, l);
    }
    qn(w, "__vnode", l, !0), qn(w, "__vueParentComponent", b, !0), F && Ct(l, null, b, "beforeMount");
    const z = Cu(v, R);
    z && R.beforeEnter(w), r(w, d, g), ((y = N && N.onVnodeMounted) || z || F) && Ee(() => {
      y && Ue(y, b, l), z && R.enter(w), F && Ct(l, null, b, "mounted");
    }, v);
  }, Z = (l, d, g, b, v) => {
    if (g && m(l, g), b)
      for (let _ = 0; _ < b.length; _++)
        m(l, b[_]);
    if (v) {
      let _ = v.subTree;
      if (_.patchFlag > 0 && _.patchFlag & 2048 && (_ = ks(_.children) || _), d === _ || ya(_.type) && (_.ssContent === d || _.ssFallback === d)) {
        const S = v.vnode;
        Z(
          l,
          S,
          S.scopeId,
          S.slotScopeIds,
          v.parent
        );
      }
    }
  }, E = (l, d, g, b, v, _, S, $, w = 0) => {
    for (let y = w; y < l.length; y++) {
      const N = l[y] = $ ? vt(l[y]) : De(l[y]);
      P(
        null,
        N,
        d,
        g,
        b,
        v,
        _,
        S,
        $
      );
    }
  }, B = (l, d, g, b, v, _, S) => {
    const $ = d.el = l.el;
    $.__vnode = d;
    let { patchFlag: w, dynamicChildren: y, dirs: N } = d;
    w |= l.patchFlag & 16;
    const T = l.props || X, R = d.props || X;
    let F;
    if (g && wt(g, !1), (F = R.onVnodeBeforeUpdate) && Ue(F, g, d, l), N && Ct(d, l, g, "beforeUpdate"), g && wt(g, !0), ze && (w = 0, S = !1, y = null), (T.innerHTML && R.innerHTML == null || T.textContent && R.textContent == null) && f($, ""), y ? (J(
      l.dynamicChildren,
      y,
      $,
      g,
      b,
      kr(d, v),
      _
    ), ss(l, d)) : S || He(
      l,
      d,
      $,
      null,
      g,
      b,
      kr(d, v),
      _,
      !1
    ), w > 0) {
      if (w & 16)
        A($, T, R, g, v);
      else if (w & 2 && T.class !== R.class && o($, "class", null, R.class, v), w & 4 && o($, "style", T.style, R.style, v), w & 8) {
        const z = d.dynamicProps;
        for (let oe = 0; oe < z.length; oe++) {
          const re = z[oe], Ae = T[re], ve = R[re];
          (ve !== Ae || re === "value") && o($, re, Ae, ve, v, g);
        }
      }
      w & 1 && l.children !== d.children && f($, d.children);
    } else !S && y == null && A($, T, R, g, v);
    ((F = R.onVnodeUpdated) || N) && Ee(() => {
      F && Ue(F, g, d, l), N && Ct(d, l, g, "updated");
    }, b);
  }, J = (l, d, g, b, v, _, S) => {
    for (let $ = 0; $ < d.length; $++) {
      const w = l[$], y = d[$], N = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        w.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (w.type === be || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !At(w, y) || // - In the case of a component, it could contain anything.
        w.shapeFlag & 70) ? u(w.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          g
        )
      );
      P(
        w,
        y,
        N,
        null,
        b,
        v,
        _,
        S,
        !0
      );
    }
  }, A = (l, d, g, b, v) => {
    if (d !== g) {
      if (d !== X)
        for (const _ in d)
          !dn(_) && !(_ in g) && o(
            l,
            _,
            d[_],
            null,
            v,
            b
          );
      for (const _ in g) {
        if (dn(_)) continue;
        const S = g[_], $ = d[_];
        S !== $ && _ !== "value" && o(l, _, $, S, v, b);
      }
      "value" in g && o(l, "value", d.value, g.value, v);
    }
  }, ne = (l, d, g, b, v, _, S, $, w) => {
    const y = d.el = l ? l.el : a(""), N = d.anchor = l ? l.anchor : a("");
    let { patchFlag: T, dynamicChildren: R, slotScopeIds: F } = d;
    // #5523 dev root fragment may inherit directives
    (ze || T & 2048) && (T = 0, w = !1, R = null), F && ($ = $ ? $.concat(F) : F), l == null ? (r(y, g, b), r(N, g, b), E(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      d.children || [],
      g,
      N,
      v,
      _,
      S,
      $,
      w
    )) : T > 0 && T & 64 && R && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    l.dynamicChildren ? (J(
      l.dynamicChildren,
      R,
      g,
      v,
      _,
      S,
      $
    ), ss(l, d)) : He(
      l,
      d,
      g,
      N,
      v,
      _,
      S,
      $,
      w
    );
  }, V = (l, d, g, b, v, _, S, $, w) => {
    d.slotScopeIds = $, l == null ? d.shapeFlag & 512 ? v.ctx.activate(
      d,
      g,
      b,
      S,
      w
    ) : M(
      d,
      g,
      b,
      v,
      _,
      S,
      w
    ) : G(l, d, w);
  }, M = (l, d, g, b, v, _, S) => {
    const $ = l.component = Uu(
      l,
      b,
      v
    );
    if ($.type.__hmrId && _c($), Hn(l), Ye($, "mount"), En(l) && ($.ctx.renderer = tn), Ye($, "init"), Wu($, !1, S), Ze($, "init"), $.asyncDep) {
      if (ze && (l.el = null), v && v.registerDep($, j, S), !l.el) {
        const w = $.subTree = ie(de);
        H(null, w, d, g);
      }
    } else
      j(
        $,
        l,
        d,
        g,
        v,
        _,
        S
      );
    Vn(), Ze($, "mount");
  }, G = (l, d, g) => {
    const b = d.component = l.component;
    if (Ru(l, d, g))
      if (b.asyncDep && !b.asyncResolved) {
        Hn(d), W(b, d, g), Vn();
        return;
      } else
        b.next = d, b.update();
    else
      d.el = l.el, b.vnode = d;
  }, j = (l, d, g, b, v, _, S) => {
    const $ = () => {
      if (l.isMounted) {
        let { next: T, bu: R, u: F, parent: z, vnode: oe } = l;
        {
          const Me = ga(l);
          if (Me) {
            T && (T.el = oe.el, W(l, T, S)), Me.asyncDep.then(() => {
              l.isUnmounted || $();
            });
            return;
          }
        }
        let re = T, Ae;
        Hn(T || l.vnode), wt(l, !1), T ? (T.el = oe.el, W(l, T, S)) : T = oe, R && rn(R), (Ae = T.props && T.props.onVnodeBeforeUpdate) && Ue(Ae, z, T, oe), wt(l, !0), Ye(l, "render");
        const ve = Lr(l);
        Ze(l, "render");
        const je = l.subTree;
        l.subTree = ve, Ye(l, "patch"), P(
          je,
          ve,
          // parent may have changed if it's in a teleport
          u(je.el),
          // anchor may have changed if it's in a fragment
          jn(je),
          l,
          v,
          _
        ), Ze(l, "patch"), T.el = ve.el, re === null && Iu(l, ve.el), F && Ee(F, v), (Ae = T.props && T.props.onVnodeUpdated) && Ee(
          () => Ue(Ae, z, T, oe),
          v
        ), ki(l), Vn();
      } else {
        let T;
        const { el: R, props: F } = d, { bm: z, m: oe, parent: re, root: Ae, type: ve } = l, je = Kt(d);
        if (wt(l, !1), z && rn(z), !je && (T = F && F.onVnodeBeforeMount) && Ue(T, re, d), wt(l, !0), R && zs) {
          const Me = () => {
            Ye(l, "render"), l.subTree = Lr(l), Ze(l, "render"), Ye(l, "hydrate"), zs(
              R,
              l.subTree,
              l,
              v,
              null
            ), Ze(l, "hydrate");
          };
          je && ve.__asyncHydrate ? ve.__asyncHydrate(
            R,
            l,
            Me
          ) : Me();
        } else {
          Ae.ce && Ae.ce._injectChildStyle(ve), Ye(l, "render");
          const Me = l.subTree = Lr(l);
          Ze(l, "render"), Ye(l, "patch"), P(
            null,
            Me,
            g,
            b,
            l,
            v,
            _
          ), Ze(l, "patch"), d.el = Me.el;
        }
        if (oe && Ee(oe, v), !je && (T = F && F.onVnodeMounted)) {
          const Me = d;
          Ee(
            () => Ue(T, re, Me),
            v
          );
        }
        (d.shapeFlag & 256 || re && Kt(re.vnode) && re.vnode.shapeFlag & 256) && l.a && Ee(l.a, v), l.isMounted = !0, $c(l), d = g = b = null;
      }
    };
    l.scope.on();
    const w = l.effect = new di($);
    l.scope.off();
    const y = l.update = w.run.bind(w), N = l.job = w.runIfDirty.bind(w);
    N.i = l, N.id = l.uid, w.scheduler = () => hr(N), wt(l, !0), w.onTrack = l.rtc ? (T) => rn(l.rtc, T) : void 0, w.onTrigger = l.rtg ? (T) => rn(l.rtg, T) : void 0, y();
  }, W = (l, d, g) => {
    d.component = l;
    const b = l.vnode.props;
    l.vnode = d, l.next = null, lu(l, d.props, b, g), _u(l, d.children, g), it(), eo(l), at();
  }, He = (l, d, g, b, v, _, S, $, w = !1) => {
    const y = l && l.children, N = l ? l.shapeFlag : 0, T = d.children, { patchFlag: R, shapeFlag: F } = d;
    if (R > 0) {
      if (R & 128) {
        Xt(
          y,
          T,
          g,
          b,
          v,
          _,
          S,
          $,
          w
        );
        return;
      } else if (R & 256) {
        Or(
          y,
          T,
          g,
          b,
          v,
          _,
          S,
          $,
          w
        );
        return;
      }
    }
    F & 8 ? (N & 16 && en(y, v, _), T !== y && f(g, T)) : N & 16 ? F & 16 ? Xt(
      y,
      T,
      g,
      b,
      v,
      _,
      S,
      $,
      w
    ) : en(y, v, _, !0) : (N & 8 && f(g, ""), F & 16 && E(
      T,
      g,
      b,
      v,
      _,
      S,
      $,
      w
    ));
  }, Or = (l, d, g, b, v, _, S, $, w) => {
    l = l || Bt, d = d || Bt;
    const y = l.length, N = d.length, T = Math.min(y, N);
    let R;
    for (R = 0; R < T; R++) {
      const F = d[R] = w ? vt(d[R]) : De(d[R]);
      P(
        l[R],
        F,
        g,
        null,
        v,
        _,
        S,
        $,
        w
      );
    }
    y > N ? en(
      l,
      v,
      _,
      !0,
      !1,
      T
    ) : E(
      d,
      g,
      b,
      v,
      _,
      S,
      $,
      w,
      T
    );
  }, Xt = (l, d, g, b, v, _, S, $, w) => {
    let y = 0;
    const N = d.length;
    let T = l.length - 1, R = N - 1;
    for (; y <= T && y <= R; ) {
      const F = l[y], z = d[y] = w ? vt(d[y]) : De(d[y]);
      if (At(F, z))
        P(
          F,
          z,
          g,
          null,
          v,
          _,
          S,
          $,
          w
        );
      else
        break;
      y++;
    }
    for (; y <= T && y <= R; ) {
      const F = l[T], z = d[R] = w ? vt(d[R]) : De(d[R]);
      if (At(F, z))
        P(
          F,
          z,
          g,
          null,
          v,
          _,
          S,
          $,
          w
        );
      else
        break;
      T--, R--;
    }
    if (y > T) {
      if (y <= R) {
        const F = R + 1, z = F < N ? d[F].el : b;
        for (; y <= R; )
          P(
            null,
            d[y] = w ? vt(d[y]) : De(d[y]),
            g,
            z,
            v,
            _,
            S,
            $,
            w
          ), y++;
      }
    } else if (y > R)
      for (; y <= T; )
        ft(l[y], v, _, !0), y++;
    else {
      const F = y, z = y, oe = /* @__PURE__ */ new Map();
      for (y = z; y <= R; y++) {
        const Ce = d[y] = w ? vt(d[y]) : De(d[y]);
        Ce.key != null && (oe.has(Ce.key) && C(
          "Duplicate keys found during update:",
          JSON.stringify(Ce.key),
          "Make sure keys are unique."
        ), oe.set(Ce.key, y));
      }
      let re, Ae = 0;
      const ve = R - z + 1;
      let je = !1, Me = 0;
      const nn = new Array(ve);
      for (y = 0; y < ve; y++) nn[y] = 0;
      for (y = F; y <= T; y++) {
        const Ce = l[y];
        if (Ae >= ve) {
          ft(Ce, v, _, !0);
          continue;
        }
        let Ve;
        if (Ce.key != null)
          Ve = oe.get(Ce.key);
        else
          for (re = z; re <= R; re++)
            if (nn[re - z] === 0 && At(Ce, d[re])) {
              Ve = re;
              break;
            }
        Ve === void 0 ? ft(Ce, v, _, !0) : (nn[Ve - z] = y + 1, Ve >= Me ? Me = Ve : je = !0, P(
          Ce,
          d[Ve],
          g,
          null,
          v,
          _,
          S,
          $,
          w
        ), Ae++);
      }
      const qs = je ? wu(nn) : Bt;
      for (re = qs.length - 1, y = ve - 1; y >= 0; y--) {
        const Ce = z + y, Ve = d[Ce], Js = Ce + 1 < N ? d[Ce + 1].el : b;
        nn[y] === 0 ? P(
          null,
          Ve,
          g,
          Js,
          v,
          _,
          S,
          $,
          w
        ) : je && (re < 0 || y !== qs[re] ? kt(Ve, g, Js, 2) : re--);
      }
    }
  }, kt = (l, d, g, b, v = null) => {
    const { el: _, type: S, transition: $, children: w, shapeFlag: y } = l;
    if (y & 6) {
      kt(l.component.subTree, d, g, b);
      return;
    }
    if (y & 128) {
      l.suspense.move(d, g, b);
      return;
    }
    if (y & 64) {
      S.move(l, d, g, tn);
      return;
    }
    if (S === be) {
      r(_, d, g);
      for (let T = 0; T < w.length; T++)
        kt(w[T], d, g, b);
      r(l.anchor, d, g);
      return;
    }
    if (S === Wn) {
      ae(l, d, g);
      return;
    }
    if (b !== 2 && y & 1 && $)
      if (b === 0)
        $.beforeEnter(_), r(_, d, g), Ee(() => $.enter(_), v);
      else {
        const { leave: T, delayLeave: R, afterLeave: F } = $, z = () => r(_, d, g), oe = () => {
          T(_, () => {
            z(), F && F();
          });
        };
        R ? R(_, z, oe) : oe();
      }
    else
      r(_, d, g);
  }, ft = (l, d, g, b = !1, v = !1) => {
    const {
      type: _,
      props: S,
      ref: $,
      children: w,
      dynamicChildren: y,
      shapeFlag: N,
      patchFlag: T,
      dirs: R,
      cacheIndex: F
    } = l;
    if (T === -2 && (v = !1), $ != null && Qr($, null, g, l, !0), F != null && (d.renderCache[F] = void 0), N & 256) {
      d.ctx.deactivate(l);
      return;
    }
    const z = N & 1 && R, oe = !Kt(l);
    let re;
    if (oe && (re = S && S.onVnodeBeforeUnmount) && Ue(re, d, l), N & 6)
      cl(l.component, g, b);
    else {
      if (N & 128) {
        l.suspense.unmount(g, b);
        return;
      }
      z && Ct(l, null, d, "beforeUnmount"), N & 64 ? l.type.remove(
        l,
        d,
        g,
        tn,
        b
      ) : y && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !y.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (_ !== be || T > 0 && T & 64) ? en(
        y,
        d,
        g,
        !1,
        !0
      ) : (_ === be && T & 384 || !v && N & 16) && en(w, d, g), b && Ar(l);
    }
    (oe && (re = S && S.onVnodeUnmounted) || z) && Ee(() => {
      re && Ue(re, d, l), z && Ct(l, null, d, "unmounted");
    }, g);
  }, Ar = (l) => {
    const { type: d, el: g, anchor: b, transition: v } = l;
    if (d === be) {
      l.patchFlag > 0 && l.patchFlag & 2048 && v && !v.persisted ? l.children.forEach((S) => {
        S.type === de ? s(S.el) : Ar(S);
      }) : ll(g, b);
      return;
    }
    if (d === Wn) {
      x(l);
      return;
    }
    const _ = () => {
      s(g), v && !v.persisted && v.afterLeave && v.afterLeave();
    };
    if (l.shapeFlag & 1 && v && !v.persisted) {
      const { leave: S, delayLeave: $ } = v, w = () => S(g, _);
      $ ? $(l.el, _, w) : w();
    } else
      _();
  }, ll = (l, d) => {
    let g;
    for (; l !== d; )
      g = h(l), s(l), l = g;
    s(d);
  }, cl = (l, d, g) => {
    l.type.__hmrId && bc(l);
    const { bum: b, scope: v, job: _, subTree: S, um: $, m: w, a: y } = l;
    fo(w), fo(y), b && rn(b), v.stop(), _ && (_.flags |= 8, ft(S, l, d, g)), $ && Ee($, d), Ee(() => {
      l.isUnmounted = !0;
    }, d), d && d.pendingBranch && !d.isUnmounted && l.asyncDep && !l.asyncResolved && l.suspenseId === d.pendingId && (d.deps--, d.deps === 0 && d.resolve()), Tc(l);
  }, en = (l, d, g, b = !1, v = !1, _ = 0) => {
    for (let S = _; S < l.length; S++)
      ft(l[S], d, g, b, v);
  }, jn = (l) => {
    if (l.shapeFlag & 6)
      return jn(l.component.subTree);
    if (l.shapeFlag & 128)
      return l.suspense.next();
    const d = h(l.anchor || l.el), g = d && d[Ec];
    return g ? h(g) : d;
  };
  let Mr = !1;
  const Ks = (l, d, g) => {
    l == null ? d._vnode && ft(d._vnode, null, null, !0) : P(
      d._vnode || null,
      l,
      d,
      null,
      null,
      null,
      g
    ), d._vnode = l, Mr || (Mr = !0, eo(), ji(), Mr = !1);
  }, tn = {
    p: P,
    um: ft,
    m: kt,
    r: Ar,
    mt: M,
    mc: E,
    pc: He,
    pbc: J,
    n: jn,
    o: e
  };
  let Gs, zs;
  return {
    render: Ks,
    hydrate: Gs,
    createApp: su(Ks, Gs)
  };
}
function kr({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function wt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Cu(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function ss(e, t, n = !1) {
  const r = e.children, s = t.children;
  if (I(r) && I(s))
    for (let o = 0; o < r.length; o++) {
      const i = r[o];
      let a = s[o];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = s[o] = vt(s[o]), a.el = i.el), !n && a.patchFlag !== -2 && ss(i, a)), a.type === Rn && (a.el = i.el), a.type === de && !a.el && (a.el = i.el);
    }
}
function wu(e) {
  const t = e.slice(), n = [0];
  let r, s, o, i, a;
  const c = e.length;
  for (r = 0; r < c; r++) {
    const p = e[r];
    if (p !== 0) {
      if (s = n[n.length - 1], e[s] < p) {
        t[r] = s, n.push(r);
        continue;
      }
      for (o = 0, i = n.length - 1; o < i; )
        a = o + i >> 1, e[n[a]] < p ? o = a + 1 : i = a;
      p < e[n[o]] && (o > 0 && (t[r] = n[o - 1]), n[o] = r);
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0; )
    n[o] = i, i = t[i];
  return n;
}
function ga(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : ga(t);
}
function fo(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const $u = Symbol.for("v-scx"), Su = () => {
  {
    const e = Bn($u);
    return e || C(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function gn(e, t, n) {
  return D(t) || C(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), ma(e, t, n);
}
function ma(e, t, n = X) {
  const { immediate: r, deep: s, flush: o, once: i } = n;
  t || (r !== void 0 && C(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), s !== void 0 && C(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && C(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const a = fe({}, n);
  a.onWarn = C;
  const c = t && r || !t && o !== "post";
  let p;
  if ($n) {
    if (o === "sync") {
      const m = Su();
      p = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!c) {
      const m = () => {
      };
      return m.stop = xe, m.resume = xe, m.pause = xe, m;
    }
  }
  const f = ge;
  a.call = (m, O, P) => Le(m, f, O, P);
  let u = !1;
  o === "post" ? a.scheduler = (m) => {
    Ee(m, f && f.suspense);
  } : o !== "sync" && (u = !0, a.scheduler = (m, O) => {
    O ? m() : hr(m);
  }), a.augmentJob = (m) => {
    t && (m.flags |= 4), u && (m.flags |= 2, f && (m.id = f.uid, m.i = f));
  };
  const h = lc(e, t, a);
  return $n && (p ? p.push(h) : c && h()), h;
}
function Tu(e, t, n) {
  const r = this.proxy, s = ue(e) ? e.includes(".") ? va(r, e) : () => r[e] : e.bind(r, r);
  let o;
  D(t) ? o = t : (o = t.handler, n = t);
  const i = In(this), a = ma(s, o.bind(r), n);
  return i(), a;
}
function va(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let s = 0; s < n.length && r; s++)
      r = r[n[s]];
    return r;
  };
}
const Ou = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Te(t)}Modifiers`] || e[`${nt(t)}Modifiers`];
function Au(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || X;
  {
    const {
      emitsOptions: f,
      propsOptions: [u]
    } = e;
    if (f)
      if (!(t in f))
        (!u || !(Tt(Te(t)) in u)) && C(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Tt(Te(t))}" prop.`
        );
      else {
        const h = f[t];
        D(h) && (h(...n) || C(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let s = n;
  const o = t.startsWith("update:"), i = o && Ou(r, t.slice(7));
  i && (i.trim && (s = n.map((f) => ue(f) ? f.trim() : f)), i.number && (s = n.map(gl))), Mc(e, t, s);
  {
    const f = t.toLowerCase();
    f !== t && r[Tt(f)] && C(
      `Event "${f}" is emitted in component ${br(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${nt(
        t
      )}" instead of "${t}".`
    );
  }
  let a, c = r[a = Tt(t)] || // also try camelCase event handler (#2249)
  r[a = Tt(Te(t))];
  !c && o && (c = r[a = Tt(nt(t))]), c && Le(
    c,
    e,
    6,
    s
  );
  const p = r[a + "Once"];
  if (p) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[a])
      return;
    e.emitted[a] = !0, Le(
      p,
      e,
      6,
      s
    );
  }
}
function _a(e, t, n = !1) {
  const r = t.emitsCache, s = r.get(e);
  if (s !== void 0)
    return s;
  const o = e.emits;
  let i = {}, a = !1;
  if (!D(e)) {
    const c = (p) => {
      const f = _a(p, t, !0);
      f && (a = !0, fe(i, f));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !o && !a ? (ee(e) && r.set(e, null), null) : (I(o) ? o.forEach((c) => i[c] = null) : fe(i, o), ee(e) && r.set(e, i), i);
}
function vr(e, t) {
  return !e || !Tn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), q(e, t[0].toLowerCase() + t.slice(1)) || q(e, nt(t)) || q(e, t));
}
let os = !1;
function nr() {
  os = !0;
}
function Lr(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: s,
    propsOptions: [o],
    slots: i,
    attrs: a,
    emit: c,
    render: p,
    renderCache: f,
    props: u,
    data: h,
    setupState: m,
    ctx: O,
    inheritAttrs: P
  } = e, te = Xn(e);
  let H, K;
  os = !1;
  try {
    if (n.shapeFlag & 4) {
      const x = s || r, k = ht.NODE_ENV !== "production" && m.__isScriptSetup ? new Proxy(x, {
        get(le, Z, E) {
          return C(
            `Property '${String(
              Z
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(le, Z, E);
        }
      }) : x;
      H = De(
        p.call(
          k,
          x,
          f,
          ht.NODE_ENV !== "production" ? Ge(u) : u,
          m,
          h,
          O
        )
      ), K = a;
    } else {
      const x = t;
      ht.NODE_ENV !== "production" && a === u && nr(), H = De(
        x.length > 1 ? x(
          ht.NODE_ENV !== "production" ? Ge(u) : u,
          ht.NODE_ENV !== "production" ? {
            get attrs() {
              return nr(), Ge(a);
            },
            slots: i,
            emit: c
          } : { attrs: a, slots: i, emit: c }
        ) : x(
          ht.NODE_ENV !== "production" ? Ge(u) : u,
          null
        )
      ), K = t.props ? a : Mu(a);
    }
  } catch (x) {
    mn.length = 0, An(x, e, 1), H = ie(de);
  }
  let L = H, ae;
  if (H.patchFlag > 0 && H.patchFlag & 2048 && ([L, ae] = ba(H)), K && P !== !1) {
    const x = Object.keys(K), { shapeFlag: k } = L;
    if (x.length) {
      if (k & 7)
        o && x.some(zn) && (K = Eu(
          K,
          o
        )), L = qe(L, K, !1, !0);
      else if (!os && L.type !== de) {
        const le = Object.keys(a), Z = [], E = [];
        for (let B = 0, J = le.length; B < J; B++) {
          const A = le[B];
          Tn(A) ? zn(A) || Z.push(A[2].toLowerCase() + A.slice(3)) : E.push(A);
        }
        E.length && C(
          `Extraneous non-props attributes (${E.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
        ), Z.length && C(
          `Extraneous non-emits event listeners (${Z.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (po(L) || C(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), L = qe(L, null, !1, !0), L.dirs = L.dirs ? L.dirs.concat(n.dirs) : n.dirs), n.transition && (po(L) || C(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), Cn(L, n.transition)), ae ? ae(L) : H = L, Xn(te), H;
}
const ba = (e) => {
  const t = e.children, n = e.dynamicChildren, r = ks(t, !1);
  if (r) {
    if (r.patchFlag > 0 && r.patchFlag & 2048)
      return ba(r);
  } else return [e, void 0];
  const s = t.indexOf(r), o = n ? n.indexOf(r) : -1, i = (a) => {
    t[s] = a, n && (o > -1 ? n[o] = a : a.patchFlag > 0 && (e.dynamicChildren = [...n, a]));
  };
  return [De(r), i];
};
function ks(e, t = !0) {
  let n;
  for (let r = 0; r < e.length; r++) {
    const s = e[r];
    if (Ft(s)) {
      if (s.type !== de || s.children === "v-if") {
        if (n)
          return;
        if (n = s, t && n.patchFlag > 0 && n.patchFlag & 2048)
          return ks(n.children);
      }
    } else
      return;
  }
  return n;
}
const Mu = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Tn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Eu = (e, t) => {
  const n = {};
  for (const r in e)
    (!zn(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
}, po = (e) => e.shapeFlag & 7 || e.type === de;
function Ru(e, t, n) {
  const { props: r, children: s, component: o } = e, { props: i, children: a, patchFlag: c } = t, p = o.emitsOptions;
  if ((s || a) && ze || t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return r ? ho(r, i, p) : !!i;
    if (c & 8) {
      const f = t.dynamicProps;
      for (let u = 0; u < f.length; u++) {
        const h = f[u];
        if (i[h] !== r[h] && !vr(p, h))
          return !0;
      }
    }
  } else
    return (s || a) && (!a || !a.$stable) ? !0 : r === i ? !1 : r ? i ? ho(r, i, p) : !0 : !!i;
  return !1;
}
function ho(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < r.length; s++) {
    const o = r[s];
    if (t[o] !== e[o] && !vr(n, o))
      return !0;
  }
  return !1;
}
function Iu({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const ya = (e) => e.__isSuspense;
function Pu(e, t) {
  t && t.pendingBranch ? I(e) ? t.effects.push(...e) : t.effects.push(e) : Pi(e);
}
const be = Symbol.for("v-fgt"), Rn = Symbol.for("v-txt"), de = Symbol.for("v-cmt"), Wn = Symbol.for("v-stc"), mn = [];
let Ie = null;
function Y(e = !1) {
  mn.push(Ie = e ? null : []);
}
function ju() {
  mn.pop(), Ie = mn[mn.length - 1] || null;
}
let wn = 1;
function go(e) {
  wn += e, e < 0 && Ie && (Ie.hasOnce = !0);
}
function xa(e) {
  return e.dynamicChildren = wn > 0 ? Ie || Bt : null, ju(), wn > 0 && Ie && Ie.push(e), e;
}
function ce(e, t, n, r, s, o) {
  return xa(
    se(
      e,
      t,
      n,
      r,
      s,
      o,
      !0
    )
  );
}
function Dt(e, t, n, r, s) {
  return xa(
    ie(
      e,
      t,
      n,
      r,
      s,
      !0
    )
  );
}
function Ft(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function At(e, t) {
  if (t.shapeFlag & 6 && e.component) {
    const n = Un.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const Nu = (...e) => Du(
  ...e
), Ca = ({ key: e }) => e ?? null, Kn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ue(e) || pe(e) || D(e) ? { i: he, r: e, k: t, f: !!n } : e : null);
function se(e, t = null, n = null, r = 0, s = null, o = e === be ? 0 : 1, i = !1, a = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ca(t),
    ref: t && Kn(t),
    scopeId: Hi,
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
    shapeFlag: o,
    patchFlag: r,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: he
  };
  return a ? (Ls(c, n), o & 128 && e.normalize(c)) : n && (c.shapeFlag |= ue(n) ? 8 : 16), c.key !== c.key && C("VNode created with invalid key (NaN). VNode type:", c.type), wn > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Ie && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && Ie.push(c), c;
}
const ie = Nu;
function Du(e, t = null, n = null, r = 0, s = null, o = !1) {
  if ((!e || e === Xi) && (e || C(`Invalid vnode type when creating vnode: ${e}.`), e = de), Ft(e)) {
    const a = qe(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Ls(a, n), wn > 0 && !o && Ie && (a.shapeFlag & 6 ? Ie[Ie.indexOf(e)] = a : Ie.push(a)), a.patchFlag = -2, a;
  }
  if (Oa(e) && (e = e.__vccOpts), t) {
    t = Fu(t);
    let { class: a, style: c } = t;
    a && !ue(a) && (t.class = xt(a)), ee(c) && (bn(c) && !I(c) && (c = fe({}, c)), t.style = cr(c));
  }
  const i = ue(e) ? 1 : ya(e) ? 128 : Bi(e) ? 64 : ee(e) ? 4 : D(e) ? 2 : 0;
  return i & 4 && bn(e) && (e = U(e), C(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), se(
    e,
    t,
    n,
    r,
    s,
    i,
    o,
    !0
  );
}
function Fu(e) {
  return e ? bn(e) || la(e) ? fe({}, e) : e : null;
}
function qe(e, t, n = !1, r = !1) {
  const { props: s, ref: o, patchFlag: i, children: a, transition: c } = e, p = t ? Lu(s || {}, t) : s, f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: p,
    key: p && Ca(p),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? I(o) ? o.concat(Kn(t)) : [o, Kn(t)] : Kn(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: i === -1 && I(a) ? a.map(wa) : a,
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
    transition: c,
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
  return c && r && Cn(
    f,
    c.clone(f)
  ), f;
}
function wa(e) {
  const t = qe(e);
  return I(e.children) && (t.children = e.children.map(wa)), t;
}
function ku(e = " ", t = 0) {
  return ie(Rn, null, e, t);
}
function et(e = "", t = !1) {
  return t ? (Y(), Dt(de, null, e)) : ie(de, null, e);
}
function De(e) {
  return e == null || typeof e == "boolean" ? ie(de) : I(e) ? ie(
    be,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Ft(e) ? vt(e) : ie(Rn, null, String(e));
}
function vt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : qe(e);
}
function Ls(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (I(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), Ls(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !la(t) ? t._ctx = he : s === 3 && he && (he.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else D(t) ? (t = { default: t, _ctx: he }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [ku(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Lu(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === "class")
        t.class !== r.class && (t.class = xt([t.class, r.class]));
      else if (s === "style")
        t.style = cr([t.style, r.style]);
      else if (Tn(s)) {
        const o = t[s], i = r[s];
        i && o !== i && !(I(o) && o.includes(i)) && (t[s] = o ? [].concat(o, i) : i);
      } else s !== "" && (t[s] = r[s]);
  }
  return t;
}
function Ue(e, t, n, r = null) {
  Le(e, t, 7, [
    n,
    r
  ]);
}
const Hu = oa();
let Vu = 0;
function Uu(e, t, n) {
  const r = e.type, s = (t ? t.appContext : e.appContext) || Hu, o = {
    uid: Vu++,
    vnode: e,
    type: r,
    parent: t,
    appContext: s,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new El(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(s.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: ua(r, s),
    emitsOptions: _a(r, s),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: X,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
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
  return o.ctx = qc(o), o.root = t ? t.root : o, o.emit = Au.bind(null, o), e.ce && e.ce(o), o;
}
let ge = null;
const $a = () => ge || he;
let rr, is;
{
  const e = On(), t = (n, r) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(r), (o) => {
      s.length > 1 ? s.forEach((i) => i(o)) : s[0](o);
    };
  };
  rr = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => ge = n
  ), is = t(
    "__VUE_SSR_SETTERS__",
    (n) => $n = n
  );
}
const In = (e) => {
  const t = ge;
  return rr(e), e.scope.on(), () => {
    e.scope.off(), rr(t);
  };
}, mo = () => {
  ge && ge.scope.off(), rr(null);
}, Bu = /* @__PURE__ */ st("slot,component");
function as(e, { isNativeTag: t }) {
  (Bu(e) || t(e)) && C(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function Sa(e) {
  return e.vnode.shapeFlag & 4;
}
let $n = !1;
function Wu(e, t = !1, n = !1) {
  t && is(t);
  const { props: r, children: s } = e.vnode, o = Sa(e);
  iu(e, r, o, t), vu(e, s, n);
  const i = o ? Ku(e, t) : void 0;
  return t && is(!1), i;
}
function Ku(e, t) {
  var n;
  const r = e.type;
  {
    if (r.name && as(r.name, e.appContext.config), r.components) {
      const o = Object.keys(r.components);
      for (let i = 0; i < o.length; i++)
        as(o[i], e.appContext.config);
    }
    if (r.directives) {
      const o = Object.keys(r.directives);
      for (let i = 0; i < o.length; i++)
        Vi(o[i]);
    }
    r.compilerOptions && Gu() && C(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, ra), Jc(e);
  const { setup: s } = r;
  if (s) {
    it();
    const o = e.setupContext = s.length > 1 ? Ju(e) : null, i = In(e), a = zt(
      s,
      e,
      0,
      [
        Ge(e.props),
        o
      ]
    ), c = $s(a);
    if (at(), i(), (c || e.sp) && !Kt(e) && Ji(e), c) {
      if (a.then(mo, mo), t)
        return a.then((p) => {
          vo(e, p, t);
        }).catch((p) => {
          An(p, e, 0);
        });
      if (e.asyncDep = a, !e.suspense) {
        const p = (n = r.name) != null ? n : "Anonymous";
        C(
          `Component <${p}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      vo(e, a, t);
  } else
    Ta(e, t);
}
function vo(e, t, n) {
  D(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ee(t) ? (Ft(t) && C(
    "setup() should not return VNodes directly - return a render function instead."
  ), e.devtoolsRawSetupState = t, e.setupState = Mi(t), Yc(e)) : t !== void 0 && C(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), Ta(e, n);
}
let ls;
const Gu = () => !ls;
function Ta(e, t, n) {
  const r = e.type;
  if (!e.render) {
    if (!t && ls && !r.render) {
      const s = r.template || Ds(e).template;
      if (s) {
        Ye(e, "compile");
        const { isCustomElement: o, compilerOptions: i } = e.appContext.config, { delimiters: a, compilerOptions: c } = r, p = fe(
          fe(
            {
              isCustomElement: o,
              delimiters: a
            },
            i
          ),
          c
        );
        r.render = ls(s, p), Ze(e, "compile");
      }
    }
    e.render = r.render || xe;
  }
  {
    const s = In(e);
    it();
    try {
      Qc(e);
    } finally {
      at(), s();
    }
  }
  !r.render && e.render === xe && !t && (r.template ? C(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : C("Component is missing template or render function: ", r));
}
const zu = {
  get(e, t) {
    return nr(), me(e, "get", ""), e[t];
  },
  set() {
    return C("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return C("setupContext.attrs is readonly."), !1;
  }
};
function qu(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return me(e, "get", "$slots"), t[n];
    }
  });
}
function Ju(e) {
  const t = (n) => {
    if (e.exposed && C("expose() should be called only once per setup()."), n != null) {
      let r = typeof n;
      r === "object" && (I(n) ? r = "array" : pe(n) && (r = "ref")), r !== "object" && C(
        `expose() should be passed a plain object, received ${r}.`
      );
    }
    e.exposed = n || {};
  };
  {
    let n, r;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, zu));
      },
      get slots() {
        return r || (r = qu(e));
      },
      get emit() {
        return (s, ...o) => e.emit(s, ...o);
      },
      expose: t
    });
  }
}
function _r(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Mi(Ql(e.exposed)), {
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
const Yu = /(?:^|[-_])(\w)/g, Zu = (e) => e.replace(Yu, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Hs(e, t = !0) {
  return D(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function br(e, t, n = !1) {
  let r = Hs(t);
  if (!r && t.__file) {
    const s = t.__file.match(/([^/\\]+)\.\w+$/);
    s && (r = s[1]);
  }
  if (!r && e && e.parent) {
    const s = (o) => {
      for (const i in o)
        if (o[i] === t)
          return i;
    };
    r = s(
      e.components || e.parent.type.components
    ) || s(e.appContext.components);
  }
  return r ? Zu(r) : n ? "App" : "Anonymous";
}
function Oa(e) {
  return D(e) && "__vccOpts" in e;
}
const ye = (e, t) => {
  const n = ic(e, t, $n);
  {
    const r = $a();
    r && r.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function Qu(e, t, n) {
  const r = arguments.length;
  return r === 2 ? ee(t) && !I(t) ? Ft(t) ? ie(e, null, [t]) : ie(e, t) : ie(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Ft(n) && (n = [n]), ie(e, t, n));
}
function Xu() {
  if (typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, r = { style: "color:#eb2f96" }, s = {
    __vue_custom_formatter: !0,
    header(u) {
      return ee(u) ? u.__isVue ? ["div", e, "VueInstance"] : pe(u) ? [
        "div",
        {},
        ["span", e, f(u)],
        "<",
        // avoid debugger accessing value affecting behavior
        a("_value" in u ? u._value : u),
        ">"
      ] : Rt(u) ? [
        "div",
        {},
        ["span", e, Oe(u) ? "ShallowReactive" : "Reactive"],
        "<",
        a(u),
        `>${rt(u) ? " (readonly)" : ""}`
      ] : rt(u) ? [
        "div",
        {},
        ["span", e, Oe(u) ? "ShallowReadonly" : "Readonly"],
        "<",
        a(u),
        ">"
      ] : null : null;
    },
    hasBody(u) {
      return u && u.__isVue;
    },
    body(u) {
      if (u && u.__isVue)
        return [
          "div",
          {},
          ...o(u.$)
        ];
    }
  };
  function o(u) {
    const h = [];
    u.type.props && u.props && h.push(i("props", U(u.props))), u.setupState !== X && h.push(i("setup", u.setupState)), u.data !== X && h.push(i("data", U(u.data)));
    const m = c(u, "computed");
    m && h.push(i("computed", m));
    const O = c(u, "inject");
    return O && h.push(i("injected", O)), h.push([
      "div",
      {},
      [
        "span",
        {
          style: r.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: u }]
    ]), h;
  }
  function i(u, h) {
    return h = fe({}, h), Object.keys(h).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        u
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(h).map((m) => [
          "div",
          {},
          ["span", r, m + ": "],
          a(h[m], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function a(u, h = !0) {
    return typeof u == "number" ? ["span", t, u] : typeof u == "string" ? ["span", n, JSON.stringify(u)] : typeof u == "boolean" ? ["span", r, u] : ee(u) ? ["object", { object: h ? U(u) : u }] : ["span", n, String(u)];
  }
  function c(u, h) {
    const m = u.type;
    if (D(m))
      return;
    const O = {};
    for (const P in u.ctx)
      p(m, P, h) && (O[P] = u.ctx[P]);
    return O;
  }
  function p(u, h, m) {
    const O = u[m];
    if (I(O) && O.includes(h) || ee(O) && h in O || u.extends && p(u.extends, h, m) || u.mixins && u.mixins.some((P) => p(P, h, m)))
      return !0;
  }
  function f(u) {
    return Oe(u) ? "ShallowRef" : u.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(s) : window.devtoolsFormatters = [s];
}
const _o = "3.5.12", tt = C;
let cs;
const bo = typeof window < "u" && window.trustedTypes;
if (bo)
  try {
    cs = /* @__PURE__ */ bo.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    tt(`Error creating trusted types policy: ${e}`);
  }
const Aa = cs ? (e) => cs.createHTML(e) : (e) => e, ef = "http://www.w3.org/2000/svg", tf = "http://www.w3.org/1998/Math/MathML", Qe = typeof document < "u" ? document : null, yo = Qe && /* @__PURE__ */ Qe.createElement("template"), nf = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const s = t === "svg" ? Qe.createElementNS(ef, e) : t === "mathml" ? Qe.createElementNS(tf, e) : n ? Qe.createElement(e, { is: n }) : Qe.createElement(e);
    return e === "select" && r && r.multiple != null && s.setAttribute("multiple", r.multiple), s;
  },
  createText: (e) => Qe.createTextNode(e),
  createComment: (e) => Qe.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Qe.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, r, s, o) {
    const i = n ? n.previousSibling : t.lastChild;
    if (s && (s === o || s.nextSibling))
      for (; t.insertBefore(s.cloneNode(!0), n), !(s === o || !(s = s.nextSibling)); )
        ;
    else {
      yo.innerHTML = Aa(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const a = yo.content;
      if (r === "svg" || r === "mathml") {
        const c = a.firstChild;
        for (; c.firstChild; )
          a.appendChild(c.firstChild);
        a.removeChild(c);
      }
      t.insertBefore(a, n);
    }
    return [
      // first
      i ? i.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, dt = "transition", an = "animation", Sn = Symbol("_vtc"), Ma = {
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
}, rf = /* @__PURE__ */ fe(
  {},
  Wi,
  Ma
), sf = (e) => (e.displayName = "Transition", e.props = rf, e), xo = /* @__PURE__ */ sf(
  (e, { slots: t }) => Qu(Pc, of(e), t)
), $t = (e, t = []) => {
  I(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Co = (e) => e ? I(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function of(e) {
  const t = {};
  for (const A in e)
    A in Ma || (t[A] = e[A]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: r,
    duration: s,
    enterFromClass: o = `${n}-enter-from`,
    enterActiveClass: i = `${n}-enter-active`,
    enterToClass: a = `${n}-enter-to`,
    appearFromClass: c = o,
    appearActiveClass: p = i,
    appearToClass: f = a,
    leaveFromClass: u = `${n}-leave-from`,
    leaveActiveClass: h = `${n}-leave-active`,
    leaveToClass: m = `${n}-leave-to`
  } = e, O = af(s), P = O && O[0], te = O && O[1], {
    onBeforeEnter: H,
    onEnter: K,
    onEnterCancelled: L,
    onLeave: ae,
    onLeaveCancelled: x,
    onBeforeAppear: k = H,
    onAppear: le = K,
    onAppearCancelled: Z = L
  } = t, E = (A, ne, V) => {
    St(A, ne ? f : a), St(A, ne ? p : i), V && V();
  }, B = (A, ne) => {
    A._isLeaving = !1, St(A, u), St(A, m), St(A, h), ne && ne();
  }, J = (A) => (ne, V) => {
    const M = A ? le : K, G = () => E(ne, A, V);
    $t(M, [ne, G]), wo(() => {
      St(ne, A ? c : o), pt(ne, A ? f : a), Co(M) || $o(ne, r, P, G);
    });
  };
  return fe(t, {
    onBeforeEnter(A) {
      $t(H, [A]), pt(A, o), pt(A, i);
    },
    onBeforeAppear(A) {
      $t(k, [A]), pt(A, c), pt(A, p);
    },
    onEnter: J(!1),
    onAppear: J(!0),
    onLeave(A, ne) {
      A._isLeaving = !0;
      const V = () => B(A, ne);
      pt(A, u), pt(A, h), uf(), wo(() => {
        A._isLeaving && (St(A, u), pt(A, m), Co(ae) || $o(A, r, te, V));
      }), $t(ae, [A, V]);
    },
    onEnterCancelled(A) {
      E(A, !1), $t(L, [A]);
    },
    onAppearCancelled(A) {
      E(A, !0), $t(Z, [A]);
    },
    onLeaveCancelled(A) {
      B(A), $t(x, [A]);
    }
  });
}
function af(e) {
  if (e == null)
    return null;
  if (ee(e))
    return [Hr(e.enter), Hr(e.leave)];
  {
    const t = Hr(e);
    return [t, t];
  }
}
function Hr(e) {
  const t = ml(e);
  return pc(t, "<transition> explicit duration"), t;
}
function pt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Sn] || (e[Sn] = /* @__PURE__ */ new Set())).add(t);
}
function St(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const n = e[Sn];
  n && (n.delete(t), n.size || (e[Sn] = void 0));
}
function wo(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let lf = 0;
function $o(e, t, n, r) {
  const s = e._endId = ++lf, o = () => {
    s === e._endId && r();
  };
  if (n != null)
    return setTimeout(o, n);
  const { type: i, timeout: a, propCount: c } = cf(e, t);
  if (!i)
    return r();
  const p = i + "end";
  let f = 0;
  const u = () => {
    e.removeEventListener(p, h), o();
  }, h = (m) => {
    m.target === e && ++f >= c && u();
  };
  setTimeout(() => {
    f < c && u();
  }, a + 1), e.addEventListener(p, h);
}
function cf(e, t) {
  const n = window.getComputedStyle(e), r = (O) => (n[O] || "").split(", "), s = r(`${dt}Delay`), o = r(`${dt}Duration`), i = So(s, o), a = r(`${an}Delay`), c = r(`${an}Duration`), p = So(a, c);
  let f = null, u = 0, h = 0;
  t === dt ? i > 0 && (f = dt, u = i, h = o.length) : t === an ? p > 0 && (f = an, u = p, h = c.length) : (u = Math.max(i, p), f = u > 0 ? i > p ? dt : an : null, h = f ? f === dt ? o.length : c.length : 0);
  const m = f === dt && /\b(transform|all)(,|$)/.test(
    r(`${dt}Property`).toString()
  );
  return {
    type: f,
    timeout: u,
    propCount: h,
    hasTransform: m
  };
}
function So(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, r) => To(n) + To(e[r])));
}
function To(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function uf() {
  return document.body.offsetHeight;
}
function ff(e, t, n) {
  const r = e[Sn];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const sr = Symbol("_vod"), Ea = Symbol("_vsh"), Vs = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[sr] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : ln(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), ln(e, !0), r.enter(e)) : r.leave(e, () => {
      ln(e, !1);
    }) : ln(e, t));
  },
  beforeUnmount(e, { value: t }) {
    ln(e, t);
  }
};
Vs.name = "show";
function ln(e, t) {
  e.style.display = t ? e[sr] : "none", e[Ea] = !t;
}
const df = Symbol("CSS_VAR_TEXT"), pf = /(^|;)\s*display\s*:/;
function hf(e, t, n) {
  const r = e.style, s = ue(n);
  let o = !1;
  if (n && !s) {
    if (t)
      if (ue(t))
        for (const i of t.split(";")) {
          const a = i.slice(0, i.indexOf(":")).trim();
          n[a] == null && Gn(r, a, "");
        }
      else
        for (const i in t)
          n[i] == null && Gn(r, i, "");
    for (const i in n)
      i === "display" && (o = !0), Gn(r, i, n[i]);
  } else if (s) {
    if (t !== n) {
      const i = r[df];
      i && (n += ";" + i), r.cssText = n, o = pf.test(n);
    }
  } else t && e.removeAttribute("style");
  sr in e && (e[sr] = o ? r.display : "", e[Ea] && (r.display = "none"));
}
const gf = /[^\\];\s*$/, Oo = /\s*!important$/;
function Gn(e, t, n) {
  if (I(n))
    n.forEach((r) => Gn(e, t, r));
  else if (n == null && (n = ""), gf.test(n) && tt(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = mf(e, t);
    Oo.test(n) ? e.setProperty(
      nt(r),
      n.replace(Oo, ""),
      "important"
    ) : e[r] = n;
  }
}
const Ao = ["Webkit", "Moz", "ms"], Vr = {};
function mf(e, t) {
  const n = Vr[t];
  if (n)
    return n;
  let r = Te(t);
  if (r !== "filter" && r in e)
    return Vr[t] = r;
  r = jt(r);
  for (let s = 0; s < Ao.length; s++) {
    const o = Ao[s] + r;
    if (o in e)
      return Vr[t] = o;
  }
  return t;
}
const Mo = "http://www.w3.org/1999/xlink";
function Eo(e, t, n, r, s, o = Al(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Mo, t.slice(6, t.length)) : e.setAttributeNS(Mo, t, n) : n == null || o && !ci(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : ot(n) ? String(n) : n
  );
}
function Ro(e, t, n, r, s) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Aa(n) : n);
    return;
  }
  const o = e.tagName;
  if (t === "value" && o !== "PROGRESS" && // custom elements may use _value internally
  !o.includes("-")) {
    const a = o === "OPTION" ? e.getAttribute("value") || "" : e.value, c = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (a !== c || !("_value" in e)) && (e.value = c), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let i = !1;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean" ? n = ci(n) : n == null && a === "string" ? (n = "", i = !0) : a === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch (a) {
    i || tt(
      `Failed setting prop "${t}" on <${o.toLowerCase()}>: value ${n} is invalid.`,
      a
    );
  }
  i && e.removeAttribute(s || t);
}
function vf(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function _f(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Io = Symbol("_vei");
function bf(e, t, n, r, s = null) {
  const o = e[Io] || (e[Io] = {}), i = o[t];
  if (r && i)
    i.value = jo(r, t);
  else {
    const [a, c] = yf(t);
    if (r) {
      const p = o[t] = wf(
        jo(r, t),
        s
      );
      vf(e, a, p, c);
    } else i && (_f(e, a, i, c), o[t] = void 0);
  }
}
const Po = /(?:Once|Passive|Capture)$/;
function yf(e) {
  let t;
  if (Po.test(e)) {
    t = {};
    let r;
    for (; r = e.match(Po); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : nt(e.slice(2)), t];
}
let Ur = 0;
const xf = /* @__PURE__ */ Promise.resolve(), Cf = () => Ur || (xf.then(() => Ur = 0), Ur = Date.now());
function wf(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    Le(
      $f(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = Cf(), n;
}
function jo(e, t) {
  return D(e) || I(e) ? e : (tt(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), xe);
}
function $f(e, t) {
  if (I(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (r) => (s) => !s._stopped && r && r(s)
    );
  } else
    return t;
}
const No = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Sf = (e, t, n, r, s, o) => {
  const i = s === "svg";
  t === "class" ? ff(e, r, i) : t === "style" ? hf(e, n, r) : Tn(t) ? zn(t) || bf(e, t, n, r, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Tf(e, t, r, i)) ? (Ro(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Eo(e, t, r, i, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !ue(r)) ? Ro(e, Te(t), r, o, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Eo(e, t, r, i));
};
function Tf(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && No(t) && D(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return No(t) && ue(n) ? !1 : t in e;
}
const Of = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Af = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), r = t.join(".");
  return n[r] || (n[r] = (s) => {
    if (!("key" in s))
      return;
    const o = nt(s.key);
    if (t.some(
      (i) => i === o || Of[i] === o
    ))
      return e(s);
  });
}, Mf = /* @__PURE__ */ fe({ patchProp: Sf }, nf);
let Do;
function Ef() {
  return Do || (Do = yu(Mf));
}
const Rf = (...e) => {
  const t = Ef().createApp(...e);
  Pf(t), jf(t);
  const { mount: n } = t;
  return t.mount = (r) => {
    const s = Nf(r);
    if (!s) return;
    const o = t._component;
    !D(o) && !o.render && !o.template && (o.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
    const i = n(s, !1, If(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), i;
  }, t;
};
function If(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Pf(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => $l(t) || Sl(t) || Tl(t),
    writable: !1
  });
}
function jf(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        tt(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, r = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return tt(r), n;
      },
      set() {
        tt(r);
      }
    });
  }
}
function Nf(e) {
  if (ue(e)) {
    const t = document.querySelector(e);
    return t || tt(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && tt(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
function Df() {
  Xu();
}
Df();
var Ln = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ra(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ff = typeof Ln == "object" && Ln && Ln.Object === Object && Ln, Ia = Ff, kf = Ia, Lf = typeof self == "object" && self && self.Object === Object && self, Hf = kf || Lf || Function("return this")(), ct = Hf, Vf = ct, Uf = Vf.Symbol, yr = Uf;
function Bf(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, s = Array(r); ++n < r; )
    s[n] = t(e[n], n, e);
  return s;
}
var Wf = Bf, Kf = Array.isArray, Gf = Kf, Fo = yr, Pa = Object.prototype, zf = Pa.hasOwnProperty, qf = Pa.toString, cn = Fo ? Fo.toStringTag : void 0;
function Jf(e) {
  var t = zf.call(e, cn), n = e[cn];
  try {
    e[cn] = void 0;
    var r = !0;
  } catch {
  }
  var s = qf.call(e);
  return r && (t ? e[cn] = n : delete e[cn]), s;
}
var Yf = Jf, Zf = Object.prototype, Qf = Zf.toString;
function Xf(e) {
  return Qf.call(e);
}
var ed = Xf, ko = yr, td = Yf, nd = ed, rd = "[object Null]", sd = "[object Undefined]", Lo = ko ? ko.toStringTag : void 0;
function od(e) {
  return e == null ? e === void 0 ? sd : rd : Lo && Lo in Object(e) ? td(e) : nd(e);
}
var xr = od;
function id(e) {
  return e != null && typeof e == "object";
}
var Us = id, ad = xr, ld = Us, cd = "[object Symbol]";
function ud(e) {
  return typeof e == "symbol" || ld(e) && ad(e) == cd;
}
var fd = ud, Ho = yr, dd = Wf, pd = Gf, hd = fd, gd = 1 / 0, Vo = Ho ? Ho.prototype : void 0, Uo = Vo ? Vo.toString : void 0;
function ja(e) {
  if (typeof e == "string")
    return e;
  if (pd(e))
    return dd(e, ja) + "";
  if (hd(e))
    return Uo ? Uo.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -gd ? "-0" : t;
}
var md = ja, vd = md;
function _d(e) {
  return e == null ? "" : vd(e);
}
var Cr = _d;
function bd(e, t, n) {
  var r = -1, s = e.length;
  t < 0 && (t = -t > s ? 0 : s + t), n = n > s ? s : n, n < 0 && (n += s), s = t > n ? 0 : n - t >>> 0, t >>>= 0;
  for (var o = Array(s); ++r < s; )
    o[r] = e[r + t];
  return o;
}
var yd = bd, xd = yd;
function Cd(e, t, n) {
  var r = e.length;
  return n = n === void 0 ? r : n, !t && n >= r ? e : xd(e, t, n);
}
var wd = Cd, $d = "\\ud800-\\udfff", Sd = "\\u0300-\\u036f", Td = "\\ufe20-\\ufe2f", Od = "\\u20d0-\\u20ff", Ad = Sd + Td + Od, Md = "\\ufe0e\\ufe0f", Ed = "\\u200d", Rd = RegExp("[" + Ed + $d + Ad + Md + "]");
function Id(e) {
  return Rd.test(e);
}
var Na = Id;
function Pd(e) {
  return e.split("");
}
var jd = Pd, Da = "\\ud800-\\udfff", Nd = "\\u0300-\\u036f", Dd = "\\ufe20-\\ufe2f", Fd = "\\u20d0-\\u20ff", kd = Nd + Dd + Fd, Ld = "\\ufe0e\\ufe0f", Hd = "[" + Da + "]", us = "[" + kd + "]", fs = "\\ud83c[\\udffb-\\udfff]", Vd = "(?:" + us + "|" + fs + ")", Fa = "[^" + Da + "]", ka = "(?:\\ud83c[\\udde6-\\uddff]){2}", La = "[\\ud800-\\udbff][\\udc00-\\udfff]", Ud = "\\u200d", Ha = Vd + "?", Va = "[" + Ld + "]?", Bd = "(?:" + Ud + "(?:" + [Fa, ka, La].join("|") + ")" + Va + Ha + ")*", Wd = Va + Ha + Bd, Kd = "(?:" + [Fa + us + "?", us, ka, La, Hd].join("|") + ")", Gd = RegExp(fs + "(?=" + fs + ")|" + Kd + Wd, "g");
function zd(e) {
  return e.match(Gd) || [];
}
var qd = zd, Jd = jd, Yd = Na, Zd = qd;
function Qd(e) {
  return Yd(e) ? Zd(e) : Jd(e);
}
var Xd = Qd, ep = wd, tp = Na, np = Xd, rp = Cr;
function sp(e) {
  return function(t) {
    t = rp(t);
    var n = tp(t) ? np(t) : void 0, r = n ? n[0] : t.charAt(0), s = n ? ep(n, 1).join("") : t.slice(1);
    return r[e]() + s;
  };
}
var op = sp, ip = op, ap = ip("toUpperCase"), lp = ap, cp = Cr, up = lp;
function fp(e) {
  return up(cp(e).toLowerCase());
}
var dp = fp;
function pp(e, t, n, r) {
  var s = -1, o = e == null ? 0 : e.length;
  for (r && o && (n = e[++s]); ++s < o; )
    n = t(n, e[s], s, e);
  return n;
}
var hp = pp;
function gp(e) {
  return function(t) {
    return e == null ? void 0 : e[t];
  };
}
var mp = gp, vp = mp, _p = {
  // Latin-1 Supplement block.
  À: "A",
  Á: "A",
  Â: "A",
  Ã: "A",
  Ä: "A",
  Å: "A",
  à: "a",
  á: "a",
  â: "a",
  ã: "a",
  ä: "a",
  å: "a",
  Ç: "C",
  ç: "c",
  Ð: "D",
  ð: "d",
  È: "E",
  É: "E",
  Ê: "E",
  Ë: "E",
  è: "e",
  é: "e",
  ê: "e",
  ë: "e",
  Ì: "I",
  Í: "I",
  Î: "I",
  Ï: "I",
  ì: "i",
  í: "i",
  î: "i",
  ï: "i",
  Ñ: "N",
  ñ: "n",
  Ò: "O",
  Ó: "O",
  Ô: "O",
  Õ: "O",
  Ö: "O",
  Ø: "O",
  ò: "o",
  ó: "o",
  ô: "o",
  õ: "o",
  ö: "o",
  ø: "o",
  Ù: "U",
  Ú: "U",
  Û: "U",
  Ü: "U",
  ù: "u",
  ú: "u",
  û: "u",
  ü: "u",
  Ý: "Y",
  ý: "y",
  ÿ: "y",
  Æ: "Ae",
  æ: "ae",
  Þ: "Th",
  þ: "th",
  ß: "ss",
  // Latin Extended-A block.
  Ā: "A",
  Ă: "A",
  Ą: "A",
  ā: "a",
  ă: "a",
  ą: "a",
  Ć: "C",
  Ĉ: "C",
  Ċ: "C",
  Č: "C",
  ć: "c",
  ĉ: "c",
  ċ: "c",
  č: "c",
  Ď: "D",
  Đ: "D",
  ď: "d",
  đ: "d",
  Ē: "E",
  Ĕ: "E",
  Ė: "E",
  Ę: "E",
  Ě: "E",
  ē: "e",
  ĕ: "e",
  ė: "e",
  ę: "e",
  ě: "e",
  Ĝ: "G",
  Ğ: "G",
  Ġ: "G",
  Ģ: "G",
  ĝ: "g",
  ğ: "g",
  ġ: "g",
  ģ: "g",
  Ĥ: "H",
  Ħ: "H",
  ĥ: "h",
  ħ: "h",
  Ĩ: "I",
  Ī: "I",
  Ĭ: "I",
  Į: "I",
  İ: "I",
  ĩ: "i",
  ī: "i",
  ĭ: "i",
  į: "i",
  ı: "i",
  Ĵ: "J",
  ĵ: "j",
  Ķ: "K",
  ķ: "k",
  ĸ: "k",
  Ĺ: "L",
  Ļ: "L",
  Ľ: "L",
  Ŀ: "L",
  Ł: "L",
  ĺ: "l",
  ļ: "l",
  ľ: "l",
  ŀ: "l",
  ł: "l",
  Ń: "N",
  Ņ: "N",
  Ň: "N",
  Ŋ: "N",
  ń: "n",
  ņ: "n",
  ň: "n",
  ŋ: "n",
  Ō: "O",
  Ŏ: "O",
  Ő: "O",
  ō: "o",
  ŏ: "o",
  ő: "o",
  Ŕ: "R",
  Ŗ: "R",
  Ř: "R",
  ŕ: "r",
  ŗ: "r",
  ř: "r",
  Ś: "S",
  Ŝ: "S",
  Ş: "S",
  Š: "S",
  ś: "s",
  ŝ: "s",
  ş: "s",
  š: "s",
  Ţ: "T",
  Ť: "T",
  Ŧ: "T",
  ţ: "t",
  ť: "t",
  ŧ: "t",
  Ũ: "U",
  Ū: "U",
  Ŭ: "U",
  Ů: "U",
  Ű: "U",
  Ų: "U",
  ũ: "u",
  ū: "u",
  ŭ: "u",
  ů: "u",
  ű: "u",
  ų: "u",
  Ŵ: "W",
  ŵ: "w",
  Ŷ: "Y",
  ŷ: "y",
  Ÿ: "Y",
  Ź: "Z",
  Ż: "Z",
  Ž: "Z",
  ź: "z",
  ż: "z",
  ž: "z",
  Ĳ: "IJ",
  ĳ: "ij",
  Œ: "Oe",
  œ: "oe",
  ŉ: "'n",
  ſ: "s"
}, bp = vp(_p), yp = bp, xp = yp, Cp = Cr, wp = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, $p = "\\u0300-\\u036f", Sp = "\\ufe20-\\ufe2f", Tp = "\\u20d0-\\u20ff", Op = $p + Sp + Tp, Ap = "[" + Op + "]", Mp = RegExp(Ap, "g");
function Ep(e) {
  return e = Cp(e), e && e.replace(wp, xp).replace(Mp, "");
}
var Rp = Ep, Ip = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function Pp(e) {
  return e.match(Ip) || [];
}
var jp = Pp, Np = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function Dp(e) {
  return Np.test(e);
}
var Fp = Dp, Ua = "\\ud800-\\udfff", kp = "\\u0300-\\u036f", Lp = "\\ufe20-\\ufe2f", Hp = "\\u20d0-\\u20ff", Vp = kp + Lp + Hp, Ba = "\\u2700-\\u27bf", Wa = "a-z\\xdf-\\xf6\\xf8-\\xff", Up = "\\xac\\xb1\\xd7\\xf7", Bp = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Wp = "\\u2000-\\u206f", Kp = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Ka = "A-Z\\xc0-\\xd6\\xd8-\\xde", Gp = "\\ufe0e\\ufe0f", Ga = Up + Bp + Wp + Kp, za = "['’]", Bo = "[" + Ga + "]", zp = "[" + Vp + "]", qa = "\\d+", qp = "[" + Ba + "]", Ja = "[" + Wa + "]", Ya = "[^" + Ua + Ga + qa + Ba + Wa + Ka + "]", Jp = "\\ud83c[\\udffb-\\udfff]", Yp = "(?:" + zp + "|" + Jp + ")", Zp = "[^" + Ua + "]", Za = "(?:\\ud83c[\\udde6-\\uddff]){2}", Qa = "[\\ud800-\\udbff][\\udc00-\\udfff]", Ut = "[" + Ka + "]", Qp = "\\u200d", Wo = "(?:" + Ja + "|" + Ya + ")", Xp = "(?:" + Ut + "|" + Ya + ")", Ko = "(?:" + za + "(?:d|ll|m|re|s|t|ve))?", Go = "(?:" + za + "(?:D|LL|M|RE|S|T|VE))?", Xa = Yp + "?", el = "[" + Gp + "]?", eh = "(?:" + Qp + "(?:" + [Zp, Za, Qa].join("|") + ")" + el + Xa + ")*", th = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", nh = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rh = el + Xa + eh, sh = "(?:" + [qp, Za, Qa].join("|") + ")" + rh, oh = RegExp([
  Ut + "?" + Ja + "+" + Ko + "(?=" + [Bo, Ut, "$"].join("|") + ")",
  Xp + "+" + Go + "(?=" + [Bo, Ut + Wo, "$"].join("|") + ")",
  Ut + "?" + Wo + "+" + Ko,
  Ut + "+" + Go,
  nh,
  th,
  qa,
  sh
].join("|"), "g");
function ih(e) {
  return e.match(oh) || [];
}
var ah = ih, lh = jp, ch = Fp, uh = Cr, fh = ah;
function dh(e, t, n) {
  return e = uh(e), t = n ? void 0 : t, t === void 0 ? ch(e) ? fh(e) : lh(e) : e.match(t) || [];
}
var ph = dh, hh = hp, gh = Rp, mh = ph, vh = "['’]", _h = RegExp(vh, "g");
function bh(e) {
  return function(t) {
    return hh(mh(gh(t).replace(_h, "")), e, "");
  };
}
var tl = bh, yh = dp, xh = tl, Ch = xh(function(e, t, n) {
  return t = t.toLowerCase(), e + (n ? yh(t) : t);
}), wh = Ch;
const $h = /* @__PURE__ */ Ra(wh);
function Sh() {
  this.__data__ = [], this.size = 0;
}
var Th = Sh;
function Oh(e, t) {
  return e === t || e !== e && t !== t;
}
var Ah = Oh, Mh = Ah;
function Eh(e, t) {
  for (var n = e.length; n--; )
    if (Mh(e[n][0], t))
      return n;
  return -1;
}
var wr = Eh, Rh = wr, Ih = Array.prototype, Ph = Ih.splice;
function jh(e) {
  var t = this.__data__, n = Rh(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : Ph.call(t, n, 1), --this.size, !0;
}
var Nh = jh, Dh = wr;
function Fh(e) {
  var t = this.__data__, n = Dh(t, e);
  return n < 0 ? void 0 : t[n][1];
}
var kh = Fh, Lh = wr;
function Hh(e) {
  return Lh(this.__data__, e) > -1;
}
var Vh = Hh, Uh = wr;
function Bh(e, t) {
  var n = this.__data__, r = Uh(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
var Wh = Bh, Kh = Th, Gh = Nh, zh = kh, qh = Vh, Jh = Wh;
function qt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
qt.prototype.clear = Kh;
qt.prototype.delete = Gh;
qt.prototype.get = zh;
qt.prototype.has = qh;
qt.prototype.set = Jh;
var $r = qt, Yh = $r;
function Zh() {
  this.__data__ = new Yh(), this.size = 0;
}
var Qh = Zh;
function Xh(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
var eg = Xh;
function tg(e) {
  return this.__data__.get(e);
}
var ng = tg;
function rg(e) {
  return this.__data__.has(e);
}
var sg = rg;
function og(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var nl = og, ig = xr, ag = nl, lg = "[object AsyncFunction]", cg = "[object Function]", ug = "[object GeneratorFunction]", fg = "[object Proxy]";
function dg(e) {
  if (!ag(e))
    return !1;
  var t = ig(e);
  return t == cg || t == ug || t == lg || t == fg;
}
var pg = dg, hg = ct, gg = hg["__core-js_shared__"], mg = gg, Br = mg, zo = function() {
  var e = /[^.]+$/.exec(Br && Br.keys && Br.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function vg(e) {
  return !!zo && zo in e;
}
var _g = vg, bg = Function.prototype, yg = bg.toString;
function xg(e) {
  if (e != null) {
    try {
      return yg.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var rl = xg, Cg = pg, wg = _g, $g = nl, Sg = rl, Tg = /[\\^$.*+?()[\]{}|]/g, Og = /^\[object .+?Constructor\]$/, Ag = Function.prototype, Mg = Object.prototype, Eg = Ag.toString, Rg = Mg.hasOwnProperty, Ig = RegExp(
  "^" + Eg.call(Rg).replace(Tg, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Pg(e) {
  if (!$g(e) || wg(e))
    return !1;
  var t = Cg(e) ? Ig : Og;
  return t.test(Sg(e));
}
var jg = Pg;
function Ng(e, t) {
  return e == null ? void 0 : e[t];
}
var Dg = Ng, Fg = jg, kg = Dg;
function Lg(e, t) {
  var n = kg(e, t);
  return Fg(n) ? n : void 0;
}
var Jt = Lg, Hg = Jt, Vg = ct, Ug = Hg(Vg, "Map"), Bs = Ug, Bg = Jt, Wg = Bg(Object, "create"), Sr = Wg, qo = Sr;
function Kg() {
  this.__data__ = qo ? qo(null) : {}, this.size = 0;
}
var Gg = Kg;
function zg(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var qg = zg, Jg = Sr, Yg = "__lodash_hash_undefined__", Zg = Object.prototype, Qg = Zg.hasOwnProperty;
function Xg(e) {
  var t = this.__data__;
  if (Jg) {
    var n = t[e];
    return n === Yg ? void 0 : n;
  }
  return Qg.call(t, e) ? t[e] : void 0;
}
var em = Xg, tm = Sr, nm = Object.prototype, rm = nm.hasOwnProperty;
function sm(e) {
  var t = this.__data__;
  return tm ? t[e] !== void 0 : rm.call(t, e);
}
var om = sm, im = Sr, am = "__lodash_hash_undefined__";
function lm(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = im && t === void 0 ? am : t, this;
}
var cm = lm, um = Gg, fm = qg, dm = em, pm = om, hm = cm;
function Yt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Yt.prototype.clear = um;
Yt.prototype.delete = fm;
Yt.prototype.get = dm;
Yt.prototype.has = pm;
Yt.prototype.set = hm;
var gm = Yt, Jo = gm, mm = $r, vm = Bs;
function _m() {
  this.size = 0, this.__data__ = {
    hash: new Jo(),
    map: new (vm || mm)(),
    string: new Jo()
  };
}
var bm = _m;
function ym(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var xm = ym, Cm = xm;
function wm(e, t) {
  var n = e.__data__;
  return Cm(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
var Tr = wm, $m = Tr;
function Sm(e) {
  var t = $m(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var Tm = Sm, Om = Tr;
function Am(e) {
  return Om(this, e).get(e);
}
var Mm = Am, Em = Tr;
function Rm(e) {
  return Em(this, e).has(e);
}
var Im = Rm, Pm = Tr;
function jm(e, t) {
  var n = Pm(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
var Nm = jm, Dm = bm, Fm = Tm, km = Mm, Lm = Im, Hm = Nm;
function Zt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Zt.prototype.clear = Dm;
Zt.prototype.delete = Fm;
Zt.prototype.get = km;
Zt.prototype.has = Lm;
Zt.prototype.set = Hm;
var sl = Zt, Vm = $r, Um = Bs, Bm = sl, Wm = 200;
function Km(e, t) {
  var n = this.__data__;
  if (n instanceof Vm) {
    var r = n.__data__;
    if (!Um || r.length < Wm - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new Bm(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
var Gm = Km, zm = $r, qm = Qh, Jm = eg, Ym = ng, Zm = sg, Qm = Gm;
function Pn(e) {
  var t = this.__data__ = new zm(e);
  this.size = t.size;
}
Pn.prototype.clear = qm;
Pn.prototype.delete = Jm;
Pn.prototype.get = Ym;
Pn.prototype.has = Zm;
Pn.prototype.set = Qm;
var Xm = "__lodash_hash_undefined__";
function ev(e) {
  return this.__data__.set(e, Xm), this;
}
var tv = ev;
function nv(e) {
  return this.__data__.has(e);
}
var rv = nv, sv = sl, ov = tv, iv = rv;
function ds(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new sv(); ++t < n; )
    this.add(e[t]);
}
ds.prototype.add = ds.prototype.push = ov;
ds.prototype.has = iv;
var av = ct;
av.Uint8Array;
var Yo = yr, Zo = Yo ? Yo.prototype : void 0;
Zo && Zo.valueOf;
var lv = xr, cv = Us, uv = "[object Arguments]";
function fv(e) {
  return cv(e) && lv(e) == uv;
}
var dv = fv, Qo = dv, pv = Us, ol = Object.prototype, hv = ol.hasOwnProperty, gv = ol.propertyIsEnumerable;
Qo(/* @__PURE__ */ function() {
  return arguments;
}());
var or = { exports: {} };
function mv() {
  return !1;
}
var vv = mv;
or.exports;
(function(e, t) {
  var n = ct, r = vv, s = t && !t.nodeType && t, o = s && !0 && e && !e.nodeType && e, i = o && o.exports === s, a = i ? n.Buffer : void 0, c = a ? a.isBuffer : void 0, p = c || r;
  e.exports = p;
})(or, or.exports);
or.exports;
var ir = { exports: {} };
ir.exports;
(function(e, t) {
  var n = Ia, r = t && !t.nodeType && t, s = r && !0 && e && !e.nodeType && e, o = s && s.exports === r, i = o && n.process, a = function() {
    try {
      var c = s && s.require && s.require("util").types;
      return c || i && i.binding && i.binding("util");
    } catch {
    }
  }();
  e.exports = a;
})(ir, ir.exports);
var _v = ir.exports, Xo = _v;
Xo && Xo.isTypedArray;
var bv = Jt, yv = ct, xv = bv(yv, "DataView"), Cv = xv, wv = Jt, $v = ct, Sv = wv($v, "Promise"), Tv = Sv, Ov = Jt, Av = ct, Mv = Ov(Av, "Set"), Ev = Mv, Rv = Jt, Iv = ct, Pv = Rv(Iv, "WeakMap"), jv = Pv, ps = Cv, hs = Bs, gs = Tv, ms = Ev, vs = jv, il = xr, Qt = rl, ei = "[object Map]", Nv = "[object Object]", ti = "[object Promise]", ni = "[object Set]", ri = "[object WeakMap]", si = "[object DataView]", Dv = Qt(ps), Fv = Qt(hs), kv = Qt(gs), Lv = Qt(ms), Hv = Qt(vs), Ht = il;
(ps && Ht(new ps(new ArrayBuffer(1))) != si || hs && Ht(new hs()) != ei || gs && Ht(gs.resolve()) != ti || ms && Ht(new ms()) != ni || vs && Ht(new vs()) != ri) && (Ht = function(e) {
  var t = il(e), n = t == Nv ? e.constructor : void 0, r = n ? Qt(n) : "";
  if (r)
    switch (r) {
      case Dv:
        return si;
      case Fv:
        return ei;
      case kv:
        return ti;
      case Lv:
        return ni;
      case Hv:
        return ri;
    }
  return t;
});
var Vv = tl, Uv = Vv(function(e, t, n) {
  return e + (n ? "_" : "") + t.toLowerCase();
}), Bv = Uv;
const Wv = /* @__PURE__ */ Ra(Bv), _s = (e) => Array.isArray(e) ? e.map((t) => _s(t)) : e != null && e.constructor === Object ? Object.keys(e).reduce(
  (t, n) => ({
    ...t,
    [$h(n)]: _s(e[n])
  }),
  {}
) : e, bs = (e) => Array.isArray(e) ? e.map((t) => bs(t)) : e != null && e.constructor === Object ? Object.keys(e).reduce(
  (t, n) => ({
    ...t,
    [Wv(n)]: bs(e[n])
  }),
  {}
) : e;
function Wr(e) {
  return e && typeof e == "object" && !Array.isArray(e);
}
function ys(e, ...t) {
  if (!t.length) return e;
  const n = t.shift();
  if (Wr(e) && Wr(n))
    for (const r in n)
      Wr(n[r]) ? (e[r] || Object.assign(e, { [r]: {} }), ys(e[r], n[r])) : Object.assign(e, { [r]: n[r] });
  return ys(e, ...t);
}
const oi = (e, t) => fetch(e, {
  method: "POST",
  body: JSON.stringify(bs(t))
}).then(async (n) => {
  if (n.ok) {
    const r = await n.json();
    return _s(r);
  }
}), Kv = {
  isQuestion: !0,
  onValidate({ context: e, answer: t, script: n }) {
    if (t.content.includes("@") == !1) {
      const r = {
        type: "text",
        userRole: "host",
        content: "Your email seem to be invalid",
        ...n.errorMessage
      };
      return e.addConversationMessage(r), !1;
    }
    return !0;
  }
}, Gv = {
  isQuestion: !0
}, zv = {
  isQuestion: !1
}, qv = {
  isQuestion: !0,
  onValidate({ context: e, answer: t, script: n }) {
    var o;
    const r = ((o = t.content) == null ? void 0 : o.value) || t.content;
    if (n.options.map((i) => i.value || i).includes(r) == !1) {
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
}, Ws = {
  text: zv,
  email: Kv,
  question: Gv,
  select: qv
}, xs = (e) => {
  const t = e.type, n = Ws[t] || null;
  return n ? !!(n != null && n.isQuestion) : !1;
}, Cs = (e = 16) => {
  let t = "";
  const n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", r = n.length;
  let s = 0;
  for (; s < e; )
    t += n.charAt(Math.floor(Math.random() * r)), s += 1;
  return t;
}, Jv = (e, t, n) => {
  const r = n ? "<br />" : "<br>", s = t ? "$1" + r : "$1" + r + "$2";
  return (e + "").replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, s);
}, _t = (e) => ({
  id: null,
  userRole: "host",
  type: "text",
  content: "",
  options: null,
  scriptId: null,
  ...e
}), Kr = (e) => (e != null && e.options && typeof e.options == "string" && (e.options = e.options.split(",").map((t) => t.trim())), {
  id: Cs(),
  type: "text",
  skippable: !1,
  skipText: "Skip",
  longAnswer: !1,
  content: "",
  answer: _t(),
  ...e
}), Yv = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
};
function Zv(e, t) {
  return Y(), ce("svg", Yv, t[0] || (t[0] = [
    se("path", { d: "m2 21 21-9L2 3v7l15 2-15 2z" }, null, -1)
  ]));
}
const Qv = { render: Zv }, ut = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t)
    n[r] = s;
  return n;
}, Xv = { class: "--fc-composer-container" }, e_ = ["value", "placeholder"], t_ = ["value", "placeholder"], n_ = {
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
    const n = e, r = t, s = $e(), o = ye(
      () => {
        var p;
        return ((p = n.options) == null ? void 0 : p.placeholder) || "Type a message";
      }
    ), i = () => {
      r("submit");
    }, a = () => {
      r("submit");
    }, c = (p) => {
      const f = p.target.value;
      r("update:message", f);
    };
    return gn(
      () => n.message,
      () => {
        const p = s.value;
        p.style.height = "40px", p.style.height = p.scrollHeight + "px";
      }
    ), (p, f) => (Y(), ce("div", Xv, [
      e.longMessage ? (Y(), ce("textarea", {
        key: 0,
        value: e.message,
        class: "--fc-composer-input",
        placeholder: o.value,
        ref_key: "inputRef",
        ref: s,
        onInput: c
      }, null, 40, e_)) : (Y(), ce("input", {
        key: 1,
        value: e.message,
        ref_key: "inputRef",
        ref: s,
        class: "--fc-composer-input",
        placeholder: o.value,
        onInput: c,
        onKeydown: Af(a, ["enter"])
      }, null, 40, t_)),
      se("div", null, [
        se("button", {
          class: "--fc-composer-submit-button",
          onClick: i
        }, [
          ie(Ne(Qv), { class: "--fc-icon" })
        ])
      ])
    ]));
  }
}, r_ = /* @__PURE__ */ ut(n_, [["__scopeId", "data-v-2b41d010"]]), s_ = {
  __name: "ChatConversation",
  setup(e, { expose: t }) {
    const n = $e(), r = () => {
      const o = n.value;
      o.scrollTop, o.scrollHeight, o.clientHeight;
    };
    return t({
      scrollToBottom: () => {
        n.value.scrollTo({
          top: n.value.scrollHeight,
          behavior: "smooth"
        });
      }
    }), (o, i) => (Y(), ce("div", {
      class: "--fc-conversation-container",
      ref_key: "conversationMessagesRef",
      ref: n,
      onScroll: r
    }, [
      i[0] || (i[0] = se("div", { class: "--fc-conversation-padding" }, null, -1)),
      ta(o.$slots, "default", {}, void 0)
    ], 544));
  }
}, o_ = /* @__PURE__ */ ut(s_, [["__scopeId", "data-v-068bd6b8"]]), i_ = { class: "--fc-message-content-inner" }, a_ = ["innerHTML"], l_ = {
  key: 0,
  class: "--fc-message-option-list"
}, c_ = ["onClick"], u_ = {
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
    const n = e, r = t, s = (o, i) => {
      const a = n.message;
      r("select-option", { message: a, option: o, optionIndex: i });
    };
    return (o, i) => {
      var a;
      return Y(), ce("div", {
        class: xt(["--fc-message-content-container", { "--fc-message-agent-user": e.message.userRole == "agent" }])
      }, [
        se("div", i_, [
          se("div", {
            class: "--fc-message-text",
            innerHTML: Ne(Jv)(((a = e.message.content) == null ? void 0 : a.label) || e.message.content)
          }, null, 8, a_),
          e.message.options ? (Y(), ce("div", l_, [
            (Y(!0), ce(be, null, ea(e.message.options, (c, p) => (Y(), ce("div", {
              key: p,
              class: "--fc-message-option-item",
              onClick: (f) => s(c, p)
            }, ur((c == null ? void 0 : c.label) || c), 9, c_))), 128))
          ])) : et("", !0)
        ])
      ], 2);
    };
  }
}, f_ = /* @__PURE__ */ ut(u_, [["__scopeId", "data-v-a8f7388b"]]), d_ = { class: "--fc-message-container" }, p_ = {
  key: 0,
  class: "--fc-message-user"
}, h_ = ["src"], g_ = {
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
    },
    shadow: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["select-option"],
  setup(e, { emit: t }) {
    const n = e, r = t, s = ye(() => {
      var i;
      return {
        component: ((i = Ws[n.message.type]) == null ? void 0 : i.component) || f_,
        ...n.message
      };
    }), o = (i) => {
      r("select-option", i);
    };
    return (i, a) => {
      var c, p, f, u;
      return Y(), ce("div", {
        class: xt({
          "--fc-message-agent-user": s.value.userRole == "agent",
          "--fc-message-host-user": s.value.userRole == "host"
        })
      }, [
        se("div", d_, [
          s.value.userRole == "host" ? (Y(), ce("div", p_, [
            se("div", {
              class: xt(["--fc-message-avatar", {
                "--fc-message-shadow": e.shadow
              }])
            }, [
              (p = (c = e.options) == null ? void 0 : c.hostUser) != null && p.avatarUrl ? (Y(), ce("img", {
                key: 0,
                src: (u = (f = e.options) == null ? void 0 : f.hostUser) == null ? void 0 : u.avatarUrl
              }, null, 8, h_)) : et("", !0)
            ], 2)
          ])) : et("", !0),
          s.value.component ? (Y(), Dt(Gc(s.value.component), {
            key: 1,
            message: s.value,
            options: e.options,
            class: xt({
              "--fc-message-shadow": e.shadow
            }),
            onSelectOption: o
          }, null, 40, ["message", "options", "class"])) : et("", !0)
        ])
      ], 2);
    };
  }
}, al = /* @__PURE__ */ ut(g_, [["__scopeId", "data-v-a07f3d07"]]), m_ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
};
function v_(e, t) {
  return Y(), ce("svg", m_, t[0] || (t[0] = [
    se("path", { d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }, null, -1)
  ]));
}
const __ = { render: v_ }, b_ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
};
function y_(e, t) {
  return Y(), ce("svg", b_, t[0] || (t[0] = [
    se("path", { d: "M12.5 8c-2.65 0-5.05 1-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8" }, null, -1)
  ]));
}
const x_ = { render: y_ }, C_ = { class: "--fc-header-container" }, w_ = { class: "--fc-header-user" }, $_ = { class: "--fc-user-avatar" }, S_ = ["src"], T_ = { class: "--fc-user-name" }, O_ = { class: "--fc-header-buttons" }, A_ = { class: "--fc-close-button" }, M_ = {
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
    return (r, s) => {
      var o, i, a, c, p, f;
      return Y(), ce("div", C_, [
        se("div", w_, [
          se("div", $_, [
            (i = (o = e.options) == null ? void 0 : o.hostUser) != null && i.avatarUrl ? (Y(), ce("img", {
              key: 0,
              src: (c = (a = e.options) == null ? void 0 : a.hostUser) == null ? void 0 : c.avatarUrl
            }, null, 8, S_)) : et("", !0)
          ]),
          se("div", T_, ur((f = (p = e.options) == null ? void 0 : p.hostUser) == null ? void 0 : f.name), 1)
        ]),
        se("div", O_, [
          se("button", {
            class: "--fc-reset-button",
            onClick: s[0] || (s[0] = (u) => n("click-reset-button"))
          }, [
            ie(Ne(x_), { class: "--fc-icon" })
          ]),
          se("button", A_, [
            ie(Ne(__), {
              class: "--fc-icon",
              onClick: s[1] || (s[1] = (u) => n("click-close-button"))
            })
          ])
        ])
      ]);
    };
  }
}, E_ = /* @__PURE__ */ ut(M_, [["__scopeId", "data-v-f55c8ea0"]]), R_ = {
  key: 0,
  class: "--fc-modal-backdrop"
}, I_ = {
  __name: "TheModal",
  props: {
    open: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    return (t, n) => e.open ? (Y(), ce("div", R_, [
      ta(t.$slots, "default", {}, void 0)
    ])) : et("", !0);
  }
}, P_ = /* @__PURE__ */ ut(I_, [["__scopeId", "data-v-4baeafde"]]), j_ = {
  __name: "ChatResetConfirmModal",
  props: {
    open: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:open", "confirmed"],
  setup(e, { emit: t }) {
    const n = t, r = () => {
      n("confirmed");
    }, s = () => {
      n("update:open", !1);
    };
    return (o, i) => (Y(), Dt(P_, { open: e.open }, {
      default: xn(() => [
        se("div", { class: "--fc-modal-container" }, [
          i[0] || (i[0] = se("div", { class: "--fc-modal-title" }, " Are you sure to restart the chat? ", -1)),
          se("div", { class: "--fc-modal-actions" }, [
            se("button", {
              class: "--fc-negative-button",
              onClick: r
            }, " Yes "),
            se("button", {
              class: "--fc-default-button",
              onClick: s
            }, " No ")
          ])
        ])
      ]),
      _: 1
    }, 8, ["open"]));
  }
}, N_ = { class: "--fc-body" }, D_ = {
  key: 0,
  class: "skip-container"
}, F_ = {
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
    "click-close-button",
    "after-reset",
    "answered"
  ],
  setup(e, { expose: t, emit: n }) {
    const r = e, s = n, o = ye(() => {
      var V, M;
      return (M = (V = r.options) == null ? void 0 : V.styles) == null ? void 0 : M.chatWindow;
    }), i = $e({
      open: !1
    }), a = ye(() => r.scripts.map(Kr)), c = ye(() => ({
      scripts: a.value,
      currentScript: u.value,
      currentScriptIndex: O.value,
      latestUserMessage: h.value,
      conversationMessages: p.value,
      addConversationMessage: H
    })), p = $e([]), f = $e(""), u = $e(Kr()), h = $e(_t()), m = $e(_t()), O = ye(() => a.value.map((M) => M.id).indexOf(u.value.id)), P = $e(), te = ye(() => {
      let V = null;
      const M = a.value[O.value + 1];
      return M && (V = M.id), V;
    }), H = (V) => {
      p.value.push(V), setTimeout(() => P.value.scrollToBottom(), 100), V.userRole == "host" ? m.value = _t() : xs(u.value) ? (m.value = { ...V }, u.value.answer = { ...V }, s("answered", u.value)) : m.value = _t();
    }, K = (V) => {
      let M;
      V ? M = a.value.find((G) => G.id == V) : M = a.value.find(() => !0), M && (u.value = M, H({
        userRole: "host",
        content: M.content,
        options: M.options,
        type: M.type,
        scriptId: M.id
      }), k());
    }, L = (V) => setTimeout(() => K(V), 300), ae = () => L(null), x = () => K(null), k = async (V = !0) => {
      var G;
      if (xs(u.value) && !m.value.content && V)
        return !1;
      if (V) {
        const j = Ws[u.value.type];
        if (j && (j != null && j.onValidate) && j.onValidate({
          context: c.value,
          script: u.value,
          answer: m.value,
          options: r.options
        }) === !1)
          return !1;
      }
      let M = u.value.next;
      if (typeof M == "function" && (M = M(c.value, m.value.content), M instanceof Promise))
        try {
          M = await M;
        } catch (j) {
          console.log(j);
          return;
        }
      if (typeof M == "object") {
        const j = ((G = m.value.content) == null ? void 0 : G.value) || m.value.content;
        M = M[j] || (M == null ? void 0 : M.__unmatched);
      }
      if (M || (M = te.value), M) {
        L(M);
        return;
      }
    }, le = async () => {
      f.value.trim() && (H({
        userRole: "agent",
        content: f.value,
        type: "text"
      }), f.value = "", await k());
    }, Z = async (V) => {
      const M = V.message.scriptId;
      if (M != u.value.id) {
        const G = a.value.find((j) => j.id == M);
        G && (u.value = G);
      }
      H({
        userRole: "agent",
        content: V.option,
        type: "text"
      }), await k();
    }, E = async () => {
      await k(!1);
    }, B = () => {
      i.value.open = !0;
    }, J = () => {
      s("click-close-button");
    }, A = () => {
      p.value = [], f.value = "", u.value = Kr(), h.value = _t(), m.value = _t();
    }, ne = () => {
      i.value.open = !1, A(), L(), s("after-reset");
    };
    return t({
      addConversationMessage: H,
      startConversationWithDelay: ae,
      startConversation: x,
      resetConversation: A,
      triggerSelectOptionInMessage: Z,
      triggerClickSkipButton: E
    }), (V, M) => (Y(), ce("div", {
      class: "--fc-window",
      style: cr(o.value)
    }, [
      ie(E_, {
        options: e.options,
        onClickResetButton: B,
        onClickCloseButton: J
      }, null, 8, ["options"]),
      se("div", N_, [
        ie(o_, {
          ref_key: "chatConversationRef",
          ref: P,
          options: e.options
        }, {
          default: xn(() => [
            (Y(!0), ce(be, null, ea(p.value, (G, j) => (Y(), Dt(al, {
              key: j,
              message: G,
              options: e.options,
              onSelectOption: Z
            }, null, 8, ["message", "options"]))), 128)),
            u.value.skippable ? (Y(), ce("div", D_, [
              se("button", { onClick: E }, ur(u.value.skipText), 1)
            ])) : et("", !0)
          ]),
          _: 1
        }, 8, ["options"]),
        ie(r_, {
          message: f.value,
          "onUpdate:message": M[0] || (M[0] = (G) => f.value = G),
          options: e.options,
          "long-message": u.value.longAnswer,
          onSubmit: le
        }, null, 8, ["message", "options", "long-message"]),
        ie(j_, {
          open: i.value.open,
          "onUpdate:open": M[1] || (M[1] = (G) => i.value.open = G),
          onConfirmed: ne
        }, null, 8, ["open"])
      ])
    ], 4));
  }
}, k_ = /* @__PURE__ */ ut(F_, [["__scopeId", "data-v-338792ff"]]), L_ = { class: "--fc-welcome-message-container" }, H_ = {
  __name: "ChatWelcomeMessage",
  props: {
    message: {
      type: Object,
      default: () => {
      }
    },
    options: {
      type: Object,
      default: () => {
      }
    }
  },
  emits: ["select-option"],
  setup(e, { emit: t }) {
    const n = t, r = ({ message: s, option: o, optionIndex: i }) => {
      n("select-option", { message: s, option: o, optionIndex: i });
    };
    return (s, o) => (Y(), ce("div", L_, [
      ie(al, {
        message: e.message,
        options: e.options,
        shadow: "",
        onSelectOption: r
      }, null, 8, ["message", "options"])
    ]));
  }
}, V_ = /* @__PURE__ */ ut(H_, [["__scopeId", "data-v-305f4535"]]), U_ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
};
function B_(e, t) {
  return Y(), ce("svg", U_, t[0] || (t[0] = [
    se("path", { d: "M15 4v7H5.17L4 12.17V4zm1-2H3a1 1 0 0 0-1 1v14l4-4h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m5 4h-2v9H6v2a1 1 0 0 0 1 1h11l4 4V7a1 1 0 0 0-1-1" }, null, -1)
  ]));
}
const W_ = { render: B_ }, K_ = { class: "--fc-application-inner" }, G_ = { class: "--fc-absolute --fc-bottom-[100%] --fc-w-[400px]" }, z_ = {
  key: 0,
  class: "--fc-absolute --fc-bottom-[100%] --fc-w-[350px]"
}, q_ = {
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
  emits: ["finished", "answered"],
  setup(e, { emit: t }) {
    const n = e, {
      scripts: r,
      options: s
    } = nc(n), o = t, i = $e(null), a = $e(!1), c = $e(!1), p = $e(Cs()), f = ye(() => {
      let x = n.scripts[0];
      return x && (x = _t(x)), x;
    }), u = ye(() => {
      var x;
      return !!(f.value && // Has welcome message
      ((x = s.value) != null && x.welcomeMessage) && // Show welcome message in options
      c.value == !1);
    }), h = ye(
      () => {
        var x, k;
        return ((k = (x = s.value) == null ? void 0 : x.embedded) == null ? void 0 : k.type) != "background";
      }
    ), m = (x) => {
      const k = {
        sessionId: p.value,
        data: x
      };
      o("answered", k);
    }, O = () => {
      a.value = !a.value, a.value ? P() : te();
    }, P = () => {
      a.value = !0, c.value == !1 && i.value.startConversationWithDelay(), c.value = !0;
    }, te = () => {
      a.value = !1;
    }, H = () => O(), K = (x) => {
      u.value != !1 && (a.value = !0, i.value.startConversation(), i.value.triggerSelectOptionInMessage(x), c.value = !0);
    }, L = () => {
      p.value = Cs();
    }, ae = () => {
      var B, J, A, ne, V, M, G, j;
      if (typeof document > "u")
        return !1;
      const x = document.querySelector(":root"), k = (J = (B = s.value) == null ? void 0 : B.styles) == null ? void 0 : J.primaryColor, le = (ne = (A = s.value) == null ? void 0 : A.styles) == null ? void 0 : ne.primaryContrastColor, Z = (M = (V = s.value) == null ? void 0 : V.styles) == null ? void 0 : M.secondaryColor, E = (j = (G = s.value) == null ? void 0 : G.styles) == null ? void 0 : j.secondaryContrastColor;
      k && (x == null || x.style.setProperty("--fc-primary-color", k)), le && (x == null || x.style.setProperty("--fc-primary-contrast-color", le)), Z && (x == null || x.style.setProperty("--fc-secondary-color", Z)), E && (x == null || x.style.setProperty("--fc-secondary-contrast-color", E));
    };
    return gn(s, () => ae(), {
      immediate: !0
    }), mr(
      () => console.log(
        "%c This website is using formchat.net to create chat boxes. Please visit https://formchat.net/ to get started.",
        "background: #222; color: #bada55"
      )
    ), (x, k) => {
      var le, Z, E, B;
      return Y(), ce("div", {
        class: xt(["--fc-application --fc-formchat-dot-net", {
          "--fc-dark-theme": ((Z = (le = Ne(s)) == null ? void 0 : le.styles) == null ? void 0 : Z.theme) === "dark",
          "--fc-light-theme": ((B = (E = Ne(s)) == null ? void 0 : E.styles) == null ? void 0 : B.theme) === "light"
        }])
      }, [
        se("div", K_, [
          ie(xo, {
            "enter-active-class": "--fc-transition --fc-duration-150 --fc-ease-in-out",
            "enter-from-class": "--fc-opacity-0 --fc-translate-y-4",
            "enter-to-class": "--fc-opacity-100 --fc-translate-y-0",
            "leave-active-class": "--fc-transition --fc-duration-150 --fc-ease-in-out",
            "leave-from-class": "--fc-opacity-100 --fc-translate-y-0",
            "leave-to-class": "--fc-opacity-0 --fc-translate-y-4"
          }, {
            default: xn(() => [
              Ui(se("div", G_, [
                ie(k_, {
                  ref_key: "chatWindowRef",
                  ref: i,
                  options: Ne(s),
                  scripts: Ne(r),
                  onAnswered: m,
                  onClickCloseButton: k[0] || (k[0] = (J) => a.value = !1),
                  onAfterReset: L
                }, null, 8, ["options", "scripts"])
              ], 512), [
                [Vs, a.value]
              ])
            ]),
            _: 1
          }),
          ie(xo, {
            "enter-active-class": "--fc-transition --fc-duration-150 --fc-ease-in-out",
            "enter-from-class": "--fc-opacity-0 --fc-translate-y-4",
            "enter-to-class": "--fc-opacity-100 --fc-translate-y-0",
            "leave-active-class": "--fc-transition --fc-duration-150 --fc-ease-in-out",
            "leave-from-class": "--fc-opacity-100 --fc-translate-y-0",
            "leave-to-class": "--fc-opacity-0 --fc-translate-y-4"
          }, {
            default: xn(() => [
              u.value ? (Y(), ce("div", z_, [
                ie(V_, {
                  message: f.value,
                  options: Ne(s),
                  onSelectOption: K
                }, null, 8, ["message", "options"])
              ])) : et("", !0)
            ]),
            _: 1
          })
        ]),
        h.value ? (Y(), ce("div", {
          key: 0,
          class: "--fc-bubble-container",
          onClick: H
        }, [
          ie(Ne(W_), { class: "--fc-bubble-icon" })
        ])) : et("", !0)
      ], 2);
    };
  }
}, J_ = /* @__PURE__ */ ut(q_, [["__scopeId", "data-v-7a22d2dc"]]), Y_ = {
  __name: "GoogleSheetFormChat",
  props: {
    sheets: {
      type: Object,
      default: () => ({})
    },
    sheet: {
      type: String,
      default: "default"
    },
    defaultOptions: {
      type: Object
    }
  },
  setup(e) {
    const t = e, n = $e({}), r = $e(), s = ye(() => t.sheets[t.sheet]), o = ye(() => n.value[t.sheet]), i = ye(() => {
      var h;
      return (h = t.sheets[t.sheet]) == null ? void 0 : h.metadata;
    }), a = ye(() => Object.keys(t.sheets).length === 0 ? !0 : !!o.value), c = ye(() => {
      var h;
      return ys(t.defaultOptions, (h = s.value) == null ? void 0 : h.options);
    }), p = () => {
      for (const h in t.sheets) {
        const m = t.sheets[h];
        if (!(m != null && m.url)) {
          console.error(`Sheet ${h} has no url config`);
          continue;
        }
        oi(m == null ? void 0 : m.url, {
          sheetTitle: (m == null ? void 0 : m.scriptSheet) || "scripts",
          command: "LIST_ROWS_COMMAND"
        }).then(({ data: O }) => {
          n.value[h] = O;
        });
      }
    };
    mr(() => p());
    const f = (h, m) => {
      var H, K, L;
      const O = { id: h }, P = { id: h };
      if (i.value && ((H = i.value) != null && H.length))
        for (let ae = 0; ae < i.value.length; ae++) {
          const x = i.value[ae];
          O[x.name] = x.value;
        }
      xs(m) && (O[m.name] = ((K = m.answer.content) == null ? void 0 : K.value) || m.answer.content);
      const te = {
        command: "UPDATE_OR_CREATE_COMMAND",
        sheetTitle: ((L = s.value) == null ? void 0 : L.resultSheet) || "results",
        data: O,
        where: P
      };
      return oi(s.value.url, te);
    }, u = ({ sessionId: h, data: m }) => f(h, m);
    return (h, m) => Ui((Y(), Dt(J_, {
      ref_key: "chatAppRef",
      ref: r,
      scripts: o.value,
      options: c.value,
      onFinished: h.handleFinished,
      onAnswered: u
    }, null, 8, ["scripts", "options", "onFinished"])), [
      [Vs, a.value]
    ]);
  }
};
window.createFormChat = (e, t) => Rf(Y_, t).mount(e);
