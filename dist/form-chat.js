/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ot(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Z = Object.freeze({}), Lt = Object.freeze([]), _e = () => {
}, Mi = () => !1, vn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Dn = (e) => e.startsWith("onUpdate:"), fe = Object.assign, Bs = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Ii = Object.prototype.hasOwnProperty, G = (e, t) => Ii.call(e, t), R = Array.isArray, Et = (e) => Yn(e) === "[object Map]", tr = (e) => Yn(e) === "[object Set]", D = (e) => typeof e == "function", ae = (e) => typeof e == "string", rt = (e) => typeof e == "symbol", ee = (e) => e !== null && typeof e == "object", Us = (e) => (ee(e) || D(e)) && D(e.then) && D(e.catch), nr = Object.prototype.toString, Yn = (e) => nr.call(e), Ws = (e) => Yn(e).slice(8, -1), sr = (e) => Yn(e) === "[object Object]", Ks = (e) => ae(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, nn = /* @__PURE__ */ ot(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ai = /* @__PURE__ */ ot(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Jn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Ri = /-(\w)/g, Se = Jn(
  (e) => e.replace(Ri, (t, n) => n ? n.toUpperCase() : "")
), Pi = /\B([A-Z])/g, nt = Jn(
  (e) => e.replace(Pi, "-$1").toLowerCase()
), Pt = Jn((e) => e.charAt(0).toUpperCase() + e.slice(1)), Tt = Jn(
  (e) => e ? `on${Pt(e)}` : ""
), bt = (e, t) => !Object.is(e, t), Jt = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, jn = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, Ni = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Fi = (e) => {
  const t = ae(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let ho;
const yn = () => ho || (ho = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function zn(e) {
  if (R(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], o = ae(s) ? Li(s) : zn(s);
      if (o)
        for (const r in o)
          t[r] = o[r];
    }
    return t;
  } else if (ae(e) || ee(e))
    return e;
}
const Di = /;(?![^(]*\))/g, ji = /:([^]+)/, ki = /\/\*[^]*?\*\//g;
function Li(e) {
  const t = {};
  return e.replace(ki, "").split(Di).forEach((n) => {
    if (n) {
      const s = n.split(ji);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function _t(e) {
  let t = "";
  if (ae(e))
    t = e;
  else if (R(e))
    for (let n = 0; n < e.length; n++) {
      const s = _t(e[n]);
      s && (t += s + " ");
    }
  else if (ee(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Hi = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Vi = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Bi = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", Ui = /* @__PURE__ */ ot(Hi), Wi = /* @__PURE__ */ ot(Vi), Ki = /* @__PURE__ */ ot(Bi), qi = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Gi = /* @__PURE__ */ ot(qi);
function or(e) {
  return !!e || e === "";
}
const rr = (e) => !!(e && e.__v_isRef === !0), Qn = (e) => ae(e) ? e : e == null ? "" : R(e) || ee(e) && (e.toString === nr || !D(e.toString)) ? rr(e) ? Qn(e.value) : JSON.stringify(e, ir, 2) : String(e), ir = (e, t) => rr(t) ? ir(e, t.value) : Et(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, o], r) => (n[as(s, r) + " =>"] = o, n),
    {}
  )
} : tr(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => as(n))
} : rt(t) ? as(t) : ee(t) && !R(t) && !sr(t) ? String(t) : t, as = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    rt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
var Yi = { NODE_ENV: '"production"' };
function ke(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Me;
class Ji {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Me, !t && Me && (this.index = (Me.scopes || (Me.scopes = [])).push(
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
      const n = Me;
      try {
        return Me = this, t();
      } finally {
        Me = n;
      }
    } else
      ke("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    Me = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    Me = this.parent;
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
function zi() {
  return Me;
}
let X;
const fs = /* @__PURE__ */ new WeakSet();
class lr {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Me && Me.active && Me.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, fs.has(this) && (fs.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || ar(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, mo(this), fr(this);
    const t = X, n = je;
    X = this, je = !0;
    try {
      return this.fn();
    } finally {
      X !== this && ke(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), ur(this), X = t, je = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Ys(t);
      this.deps = this.depsTail = void 0, mo(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? fs.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
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
let cr = 0, sn, on;
function ar(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = on, on = e;
    return;
  }
  e.next = sn, sn = e;
}
function qs() {
  cr++;
}
function Gs() {
  if (--cr > 0)
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
function fr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function ur(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const o = s.prevDep;
    s.version === -1 ? (s === n && (n = o), Ys(s), Qi(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = o;
  }
  e.deps = t, e.depsTail = n;
}
function Cs(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (dr(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function dr(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === cn))
    return;
  e.globalVersion = cn;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !Cs(e)) {
    e.flags &= -3;
    return;
  }
  const n = X, s = je;
  X = e, je = !0;
  try {
    fr(e);
    const o = e.fn(e._value);
    (t.version === 0 || bt(o, e._value)) && (e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    X = n, je = s, ur(e), e.flags &= -3;
  }
}
function Ys(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: o } = e;
  if (s && (s.nextSub = o, e.prevSub = void 0), o && (o.prevSub = s, e.nextSub = void 0), n.subsHead === e && (n.subsHead = o), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      Ys(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Qi(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let je = !0;
const pr = [];
function it() {
  pr.push(je), je = !1;
}
function lt() {
  const e = pr.pop();
  je = e === void 0 ? !0 : e;
}
function mo(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = X;
    X = void 0;
    try {
      t();
    } finally {
      X = n;
    }
  }
}
let cn = 0;
class Xi {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Js {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.subsHead = void 0;
  }
  track(t) {
    if (!X || !je || X === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== X)
      n = this.activeLink = new Xi(X, this), X.deps ? (n.prevDep = X.depsTail, X.depsTail.nextDep = n, X.depsTail = n) : X.deps = X.depsTail = n, hr(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = X.depsTail, n.nextDep = void 0, X.depsTail.nextDep = n, X.depsTail = n, X.deps === n && (X.deps = s);
    }
    return X.onTrack && X.onTrack(
      fe(
        {
          effect: X
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
      if (Yi.NODE_ENV !== "production")
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
      Gs();
    }
  }
}
function hr(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        hr(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const kn = /* @__PURE__ */ new WeakMap(), Mt = Symbol(
  "Object iterate"
), Ss = Symbol(
  "Map keys iterate"
), an = Symbol(
  "Array iterate"
);
function ge(e, t, n) {
  if (je && X) {
    let s = kn.get(e);
    s || kn.set(e, s = /* @__PURE__ */ new Map());
    let o = s.get(n);
    o || (s.set(n, o = new Js()), o.map = s, o.key = n), o.track({
      target: e,
      type: t,
      key: n
    });
  }
}
function We(e, t, n, s, o, r) {
  const i = kn.get(e);
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
    const a = R(e), p = a && Ks(n);
    if (a && n === "length") {
      const u = Number(s);
      i.forEach((f, h) => {
        (h === "length" || h === an || !rt(h) && h >= u) && l(f);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && l(i.get(n)), p && l(i.get(an)), t) {
        case "add":
          a ? p && l(i.get("length")) : (l(i.get(Mt)), Et(e) && l(i.get(Ss)));
          break;
        case "delete":
          a || (l(i.get(Mt)), Et(e) && l(i.get(Ss)));
          break;
        case "set":
          Et(e) && l(i.get(Mt));
          break;
      }
  }
  Gs();
}
function Zi(e, t) {
  const n = kn.get(e);
  return n && n.get(t);
}
function jt(e) {
  const t = H(e);
  return t === e ? t : (ge(t, "iterate", an), Te(e) ? t : t.map(ye));
}
function Xn(e) {
  return ge(e = H(e), "iterate", an), e;
}
const el = {
  __proto__: null,
  [Symbol.iterator]() {
    return us(this, Symbol.iterator, ye);
  },
  concat(...e) {
    return jt(this).concat(
      ...e.map((t) => R(t) ? jt(t) : t)
    );
  },
  entries() {
    return us(this, "entries", (e) => (e[1] = ye(e[1]), e));
  },
  every(e, t) {
    return Je(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Je(this, "filter", e, t, (n) => n.map(ye), arguments);
  },
  find(e, t) {
    return Je(this, "find", e, t, ye, arguments);
  },
  findIndex(e, t) {
    return Je(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Je(this, "findLast", e, t, ye, arguments);
  },
  findLastIndex(e, t) {
    return Je(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Je(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return ds(this, "includes", e);
  },
  indexOf(...e) {
    return ds(this, "indexOf", e);
  },
  join(e) {
    return jt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return ds(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Je(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return zt(this, "pop");
  },
  push(...e) {
    return zt(this, "push", e);
  },
  reduce(e, ...t) {
    return go(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return go(this, "reduceRight", e, t);
  },
  shift() {
    return zt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Je(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return zt(this, "splice", e);
  },
  toReversed() {
    return jt(this).toReversed();
  },
  toSorted(e) {
    return jt(this).toSorted(e);
  },
  toSpliced(...e) {
    return jt(this).toSpliced(...e);
  },
  unshift(...e) {
    return zt(this, "unshift", e);
  },
  values() {
    return us(this, "values", ye);
  }
};
function us(e, t, n) {
  const s = Xn(e), o = s[t]();
  return s !== e && !Te(e) && (o._next = o.next, o.next = () => {
    const r = o._next();
    return r.value && (r.value = n(r.value)), r;
  }), o;
}
const tl = Array.prototype;
function Je(e, t, n, s, o, r) {
  const i = Xn(e), l = i !== e && !Te(e), a = i[t];
  if (a !== tl[t]) {
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
function go(e, t, n, s) {
  const o = Xn(e);
  let r = n;
  return o !== e && (Te(e) ? n.length > 3 && (r = function(i, l, a) {
    return n.call(this, i, l, a, e);
  }) : r = function(i, l, a) {
    return n.call(this, i, ye(l), a, e);
  }), o[t](r, ...s);
}
function ds(e, t, n) {
  const s = H(e);
  ge(s, "iterate", an);
  const o = s[t](...n);
  return (o === -1 || o === !1) && fn(n[0]) ? (n[0] = H(n[0]), s[t](...n)) : o;
}
function zt(e, t, n = []) {
  it(), qs();
  const s = H(e)[t].apply(e, n);
  return Gs(), lt(), s;
}
const nl = /* @__PURE__ */ ot("__proto__,__v_isRef,__isVue"), mr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(rt)
);
function sl(e) {
  rt(e) || (e = String(e));
  const t = H(this);
  return ge(t, "has", e), t.hasOwnProperty(e);
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
      return s === (o ? r ? xr : wr : r ? _r : br).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const i = R(t);
    if (!o) {
      let a;
      if (i && (a = el[n]))
        return a;
      if (n === "hasOwnProperty")
        return sl;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      pe(t) ? t : s
    );
    return (rt(n) ? mr.has(n) : nl(n)) || (o || ge(t, "get", n), r) ? l : pe(l) ? i && Ks(n) ? l : l.value : ee(l) ? o ? Cr(l) : zs(l) : l;
  }
}
class vr extends gr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, o) {
    let r = t[n];
    if (!this._isShallow) {
      const a = st(r);
      if (!Te(s) && !st(s) && (r = H(r), s = H(s)), !R(t) && pe(r) && !pe(s))
        return a ? !1 : (r.value = s, !0);
    }
    const i = R(t) && Ks(n) ? Number(n) < t.length : G(t, n), l = Reflect.set(
      t,
      n,
      s,
      pe(t) ? t : o
    );
    return t === H(o) && (i ? bt(s, r) && We(t, "set", n, s, r) : We(t, "add", n, s)), l;
  }
  deleteProperty(t, n) {
    const s = G(t, n), o = t[n], r = Reflect.deleteProperty(t, n);
    return r && s && We(t, "delete", n, void 0, o), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!rt(n) || !mr.has(n)) && ge(t, "has", n), s;
  }
  ownKeys(t) {
    return ge(
      t,
      "iterate",
      R(t) ? "length" : Mt
    ), Reflect.ownKeys(t);
  }
}
class yr extends gr {
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
const ol = /* @__PURE__ */ new vr(), rl = /* @__PURE__ */ new yr(), il = /* @__PURE__ */ new vr(!0), ll = /* @__PURE__ */ new yr(!0), Ts = (e) => e, Tn = (e) => Reflect.getPrototypeOf(e);
function cl(e, t, n) {
  return function(...s) {
    const o = this.__v_raw, r = H(o), i = Et(r), l = e === "entries" || e === Symbol.iterator && i, a = e === "keys" && i, p = o[e](...s), u = n ? Ts : t ? Os : ye;
    return !t && ge(
      r,
      "iterate",
      a ? Ss : Mt
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
      ke(
        `${Pt(e)} operation ${n}failed: target is readonly.`,
        H(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function al(e, t) {
  const n = {
    get(o) {
      const r = this.__v_raw, i = H(r), l = H(o);
      e || (bt(o, l) && ge(i, "get", o), ge(i, "get", l));
      const { has: a } = Tn(i), p = t ? Ts : e ? Os : ye;
      if (a.call(i, o))
        return p(r.get(o));
      if (a.call(i, l))
        return p(r.get(l));
      r !== i && r.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && ge(H(o), "iterate", Mt), Reflect.get(o, "size", o);
    },
    has(o) {
      const r = this.__v_raw, i = H(r), l = H(o);
      return e || (bt(o, l) && ge(i, "has", o), ge(i, "has", l)), o === l ? r.has(o) : r.has(o) || r.has(l);
    },
    forEach(o, r) {
      const i = this, l = i.__v_raw, a = H(l), p = t ? Ts : e ? Os : ye;
      return !e && ge(a, "iterate", Mt), l.forEach((u, f) => o.call(r, p(u), p(f), i));
    }
  };
  return fe(
    n,
    e ? {
      add: On("add"),
      set: On("set"),
      delete: On("delete"),
      clear: On("clear")
    } : {
      add(o) {
        !t && !Te(o) && !st(o) && (o = H(o));
        const r = H(this);
        return Tn(r).has.call(r, o) || (r.add(o), We(r, "add", o, o)), this;
      },
      set(o, r) {
        !t && !Te(r) && !st(r) && (r = H(r));
        const i = H(this), { has: l, get: a } = Tn(i);
        let p = l.call(i, o);
        p ? vo(i, l, o) : (o = H(o), p = l.call(i, o));
        const u = a.call(i, o);
        return i.set(o, r), p ? bt(r, u) && We(i, "set", o, r, u) : We(i, "add", o, r), this;
      },
      delete(o) {
        const r = H(this), { has: i, get: l } = Tn(r);
        let a = i.call(r, o);
        a ? vo(r, i, o) : (o = H(o), a = i.call(r, o));
        const p = l ? l.call(r, o) : void 0, u = r.delete(o);
        return a && We(r, "delete", o, void 0, p), u;
      },
      clear() {
        const o = H(this), r = o.size !== 0, i = Et(o) ? new Map(o) : new Set(o), l = o.clear();
        return r && We(
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
    n[o] = cl(o, e, t);
  }), n;
}
function Zn(e, t) {
  const n = al(e, t);
  return (s, o, r) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(
    G(n, o) && o in s ? n : s,
    o,
    r
  );
}
const fl = {
  get: /* @__PURE__ */ Zn(!1, !1)
}, ul = {
  get: /* @__PURE__ */ Zn(!1, !0)
}, dl = {
  get: /* @__PURE__ */ Zn(!0, !1)
}, pl = {
  get: /* @__PURE__ */ Zn(!0, !0)
};
function vo(e, t, n) {
  const s = H(n);
  if (s !== n && t.call(e, s)) {
    const o = Ws(e);
    ke(
      `Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const br = /* @__PURE__ */ new WeakMap(), _r = /* @__PURE__ */ new WeakMap(), wr = /* @__PURE__ */ new WeakMap(), xr = /* @__PURE__ */ new WeakMap();
function hl(e) {
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
function ml(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : hl(Ws(e));
}
function zs(e) {
  return st(e) ? e : es(
    e,
    !1,
    ol,
    fl,
    br
  );
}
function gl(e) {
  return es(
    e,
    !1,
    il,
    ul,
    _r
  );
}
function Cr(e) {
  return es(
    e,
    !0,
    rl,
    dl,
    wr
  );
}
function qe(e) {
  return es(
    e,
    !0,
    ll,
    pl,
    xr
  );
}
function es(e, t, n, s, o) {
  if (!ee(e))
    return ke(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = o.get(e);
  if (r)
    return r;
  const i = ml(e);
  if (i === 0)
    return e;
  const l = new Proxy(
    e,
    i === 2 ? s : n
  );
  return o.set(e, l), l;
}
function It(e) {
  return st(e) ? It(e.__v_raw) : !!(e && e.__v_isReactive);
}
function st(e) {
  return !!(e && e.__v_isReadonly);
}
function Te(e) {
  return !!(e && e.__v_isShallow);
}
function fn(e) {
  return e ? !!e.__v_raw : !1;
}
function H(e) {
  const t = e && e.__v_raw;
  return t ? H(t) : e;
}
function vl(e) {
  return !G(e, "__v_skip") && Object.isExtensible(e) && jn(e, "__v_skip", !0), e;
}
const ye = (e) => ee(e) ? zs(e) : e, Os = (e) => ee(e) ? Cr(e) : e;
function pe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Ie(e) {
  return yl(e, !1);
}
function yl(e, t) {
  return pe(e) ? e : new bl(e, t);
}
class bl {
  constructor(t, n) {
    this.dep = new Js(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : H(t), this._value = n ? t : ye(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || Te(t) || st(t);
    t = s ? t : H(t), bt(t, n) && (this._rawValue = t, this._value = s ? t : ye(t), this.dep.trigger({
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
const _l = {
  get: (e, t, n) => t === "__v_raw" ? e : Ne(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t];
    return pe(o) && !pe(n) ? (o.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Sr(e) {
  return It(e) ? e : new Proxy(e, _l);
}
function wl(e) {
  fn(e) || ke("toRefs() expects a reactive object but received a plain one.");
  const t = R(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = Cl(e, n);
  return t;
}
class xl {
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
    return Zi(H(this._object), this._key);
  }
}
function Cl(e, t, n) {
  const s = e[t];
  return pe(s) ? s : new xl(e, t, n);
}
class Sl {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Js(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = cn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    X !== this)
      return ar(this, !0), !0;
  }
  get value() {
    const t = this.dep.track({
      target: this,
      type: "get",
      key: "value"
    });
    return dr(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : ke("Write operation failed: computed value is readonly");
  }
}
function Tl(e, t, n = !1) {
  let s, o;
  return D(e) ? s = e : (s = e.get, o = e.set), new Sl(s, o, n);
}
const $n = {}, Ln = /* @__PURE__ */ new WeakMap();
let Ot;
function Ol(e, t = !1, n = Ot) {
  if (n) {
    let s = Ln.get(n);
    s || Ln.set(n, s = []), s.push(e);
  } else t || ke(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function $l(e, t, n = Z) {
  const { immediate: s, deep: o, once: r, scheduler: i, augmentJob: l, call: a } = n, p = (x) => {
    (n.onWarn || ke)(
      "Invalid watch source: ",
      x,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, u = (x) => o ? x : Te(x) || o === !1 || o === 0 ? Ze(x, 1) : Ze(x);
  let f, h, g, E, P = !1, oe = !1;
  if (pe(e) ? (h = () => e.value, P = Te(e)) : It(e) ? (h = () => u(e), P = !0) : R(e) ? (oe = !0, P = e.some((x) => It(x) || Te(x)), h = () => e.map((x) => {
    if (pe(x))
      return x.value;
    if (It(x))
      return u(x);
    if (D(x))
      return a ? a(x, 2) : x();
    p(x);
  })) : D(e) ? t ? h = a ? () => a(e, 2) : e : h = () => {
    if (g) {
      it();
      try {
        g();
      } finally {
        lt();
      }
    }
    const x = Ot;
    Ot = f;
    try {
      return a ? a(e, 3, [E]) : e(E);
    } finally {
      Ot = x;
    }
  } : (h = _e, p(e)), t && o) {
    const x = h, k = o === !0 ? 1 / 0 : o;
    h = () => Ze(x(), k);
  }
  const B = zi(), J = () => {
    f.stop(), B && Bs(B.effects, f);
  };
  if (r && t) {
    const x = t;
    t = (...k) => {
      x(...k), J();
    };
  }
  let V = oe ? new Array(e.length).fill($n) : $n;
  const ue = (x) => {
    if (!(!(f.flags & 1) || !f.dirty && !x))
      if (t) {
        const k = f.run();
        if (o || P || (oe ? k.some((le, z) => bt(le, V[z])) : bt(k, V))) {
          g && g();
          const le = Ot;
          Ot = f;
          try {
            const z = [
              k,
              // pass undefined as the old value when it's changed for the first time
              V === $n ? void 0 : oe && V[0] === $n ? [] : V,
              E
            ];
            a ? a(t, 3, z) : (
              // @ts-expect-error
              t(...z)
            ), V = k;
          } finally {
            Ot = le;
          }
        }
      } else
        f.run();
  };
  return l && l(ue), f = new lr(h), f.scheduler = i ? () => i(ue, !1) : ue, E = (x) => Ol(x, !1, f), g = f.onStop = () => {
    const x = Ln.get(f);
    if (x) {
      if (a)
        a(x, 4);
      else
        for (const k of x) k();
      Ln.delete(f);
    }
  }, f.onTrack = n.onTrack, f.onTrigger = n.onTrigger, t ? s ? ue(!0) : V = f.run() : i ? i(ue.bind(null, !0), !0) : f.run(), J.pause = f.pause.bind(f), J.resume = f.resume.bind(f), J.stop = J, J;
}
function Ze(e, t = 1 / 0, n) {
  if (t <= 0 || !ee(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, pe(e))
    Ze(e.value, t, n);
  else if (R(e))
    for (let s = 0; s < e.length; s++)
      Ze(e[s], t, n);
  else if (tr(e) || Et(e))
    e.forEach((s) => {
      Ze(s, t, n);
    });
  else if (sr(e)) {
    for (const s in e)
      Ze(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && Ze(e[s], t, n);
  }
  return e;
}
var pt = { NODE_ENV: '"production"' };
const At = [];
function Mn(e) {
  At.push(e);
}
function In() {
  At.pop();
}
let ps = !1;
function w(e, ...t) {
  if (ps) return;
  ps = !0, it();
  const n = At.length ? At[At.length - 1].component : null, s = n && n.appContext.config.warnHandler, o = El();
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
          ({ vnode: r }) => `at <${rs(n, r.type)}>`
        ).join(`
`),
        o
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    o.length && r.push(`
`, ...Ml(o)), console.warn(...r);
  }
  lt(), ps = !1;
}
function El() {
  let e = At[At.length - 1];
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
function Ml(e) {
  const t = [];
  return e.forEach((n, s) => {
    t.push(...s === 0 ? [] : [`
`], ...Il(n));
  }), t;
}
function Il({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, o = ` at <${rs(
    e.component,
    e.type,
    s
  )}`, r = ">" + n;
  return e.props ? [o, ...Al(e.props), r] : [o + r];
}
function Al(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((s) => {
    t.push(...Tr(s, e[s]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Tr(e, t, n) {
  return ae(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : pe(t) ? (t = Tr(e, H(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : D(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = H(t), n ? t : [`${e}=`, t]);
}
function Rl(e, t) {
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
  if (D(e)) {
    const o = Wt(e, t, n, s);
    return o && Us(o) && o.catch((r) => {
      bn(r, t, n);
    }), o;
  }
  if (R(e)) {
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
  const o = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: i } = t && t.appContext.config || Z;
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
      it(), Wt(r, null, 10, [
        e,
        a,
        p
      ]), lt();
      return;
    }
  }
  Pl(e, n, o, s, i);
}
function Pl(e, t, n, s = !0, o = !1) {
  {
    const r = Qs[t];
    if (n && Mn(n), w(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && In(), s)
      throw e;
    console.error(e);
  }
}
const Ce = [];
let Ue = -1;
const Ht = [];
let ht = null, kt = 0;
const Or = /* @__PURE__ */ Promise.resolve();
let Hn = null;
const Nl = 100;
function Fl(e) {
  const t = Hn || Or;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Dl(e) {
  let t = Ue + 1, n = Ce.length;
  for (; t < n; ) {
    const s = t + n >>> 1, o = Ce[s], r = un(o);
    r < e || r === e && o.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function ts(e) {
  if (!(e.flags & 1)) {
    const t = un(e), n = Ce[Ce.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= un(n) ? Ce.push(e) : Ce.splice(Dl(t), 0, e), e.flags |= 1, $r();
  }
}
function $r() {
  Hn || (Hn = Or.then(Ir));
}
function Er(e) {
  R(e) ? Ht.push(...e) : ht && e.id === -1 ? ht.splice(kt + 1, 0, e) : e.flags & 1 || (Ht.push(e), e.flags |= 1), $r();
}
function yo(e, t, n = Ue + 1) {
  for (t = t || /* @__PURE__ */ new Map(); n < Ce.length; n++) {
    const s = Ce[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid || Xs(t, s))
        continue;
      Ce.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function Mr(e) {
  if (Ht.length) {
    const t = [...new Set(Ht)].sort(
      (n, s) => un(n) - un(s)
    );
    if (Ht.length = 0, ht) {
      ht.push(...t);
      return;
    }
    for (ht = t, e = e || /* @__PURE__ */ new Map(), kt = 0; kt < ht.length; kt++) {
      const n = ht[kt];
      Xs(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    ht = null, kt = 0;
  }
}
const un = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Ir(e) {
  e = e || /* @__PURE__ */ new Map();
  const t = (n) => Xs(e, n);
  try {
    for (Ue = 0; Ue < Ce.length; Ue++) {
      const n = Ce[Ue];
      if (n && !(n.flags & 8)) {
        if (pt.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), Wt(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; Ue < Ce.length; Ue++) {
      const n = Ce[Ue];
      n && (n.flags &= -2);
    }
    Ue = -1, Ce.length = 0, Mr(e), Hn = null, (Ce.length || Ht.length) && Ir(e);
  }
}
function Xs(e, t) {
  const n = e.get(t) || 0;
  if (n > Nl) {
    const s = t.i, o = s && io(s.type);
    return bn(
      `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let Ge = !1;
const An = /* @__PURE__ */ new Map();
yn().__VUE_HMR_RUNTIME__ = {
  createRecord: hs(Ar),
  rerender: hs(Ll),
  reload: hs(Hl)
};
const Nt = /* @__PURE__ */ new Map();
function jl(e) {
  const t = e.type.__hmrId;
  let n = Nt.get(t);
  n || (Ar(t, e.type), n = Nt.get(t)), n.instances.add(e);
}
function kl(e) {
  Nt.get(e.type.__hmrId).instances.delete(e);
}
function Ar(e, t) {
  return Nt.has(e) ? !1 : (Nt.set(e, {
    initialDef: Vn(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Vn(e) {
  return wi(e) ? e.__vccOpts : e;
}
function Ll(e, t) {
  const n = Nt.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((s) => {
    t && (s.render = t, Vn(s.type).render = t), s.renderCache = [], Ge = !0, s.update(), Ge = !1;
  }));
}
function Hl(e, t) {
  const n = Nt.get(e);
  if (!n) return;
  t = Vn(t), bo(n.initialDef, t);
  const s = [...n.instances];
  for (let o = 0; o < s.length; o++) {
    const r = s[o], i = Vn(r.type);
    let l = An.get(i);
    l || (i !== n.initialDef && bo(i, t), An.set(i, l = /* @__PURE__ */ new Set())), l.add(r), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (l.add(r), r.ceReload(t.styles), l.delete(r)) : r.parent ? ts(() => {
      Ge = !0, r.parent.update(), Ge = !1, l.delete(r);
    }) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), r.root.ce && r !== r.root && r.root.ce._removeChildStyle(i);
  }
  Er(() => {
    An.clear();
  });
}
function bo(e, t) {
  fe(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function hs(e) {
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
let Ke, en = [], $s = !1;
function _n(e, ...t) {
  Ke ? Ke.emit(e, ...t) : $s || en.push({ event: e, args: t });
}
function Rr(e, t) {
  var n, s;
  Ke = e, Ke ? (Ke.enabled = !0, en.forEach(({ event: o, args: r }) => Ke.emit(o, ...r)), en = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((s = (n = window.navigator) == null ? void 0 : n.userAgent) != null && s.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    Rr(r, t);
  }), setTimeout(() => {
    Ke || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, $s = !0, en = []);
  }, 3e3)) : ($s = !0, en = []);
}
function Vl(e, t) {
  _n("app:init", e, t, {
    Fragment: be,
    Text: xn,
    Comment: de,
    Static: Pn
  });
}
function Bl(e) {
  _n("app:unmount", e);
}
const Ul = /* @__PURE__ */ Zs(
  "component:added"
  /* COMPONENT_ADDED */
), Pr = /* @__PURE__ */ Zs(
  "component:updated"
  /* COMPONENT_UPDATED */
), Wl = /* @__PURE__ */ Zs(
  "component:removed"
  /* COMPONENT_REMOVED */
), Kl = (e) => {
  Ke && typeof Ke.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Ke.cleanupBuffer(e) && Wl(e);
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
const ql = /* @__PURE__ */ Nr(
  "perf:start"
  /* PERFORMANCE_START */
), Gl = /* @__PURE__ */ Nr(
  "perf:end"
  /* PERFORMANCE_END */
);
function Nr(e) {
  return (t, n, s) => {
    _n(e, t.appContext.app, t.uid, t, n, s);
  };
}
function Yl(e, t, n) {
  _n(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let he = null, Fr = null;
function Bn(e) {
  const t = he;
  return he = e, Fr = e && e.type.__scopeId || null, t;
}
function dn(e, t = he, n) {
  if (!t || e._n)
    return e;
  const s = (...o) => {
    s._d && Ro(-1);
    const r = Bn(t);
    let i;
    try {
      i = e(...o);
    } finally {
      Bn(r), s._d && Ro(1);
    }
    return Pr(t), i;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function Dr(e) {
  Ai(e) && w("Do not use built-in directive ids as custom directive id: " + e);
}
function Jl(e, t) {
  if (he === null)
    return w("withDirectives can only be used inside render functions."), e;
  const n = os(he), s = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [r, i, l, a = Z] = t[o];
    r && (D(r) && (r = {
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
function wt(e, t, n, s) {
  const o = e.dirs, r = t && t.dirs;
  for (let i = 0; i < o.length; i++) {
    const l = o[i];
    r && (l.oldValue = r[i].value);
    let a = l.dir[s];
    a && (it(), Le(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), lt());
  }
}
const zl = Symbol("_vte"), jr = (e) => e.__isTeleport, mt = Symbol("_leaveCb"), En = Symbol("_enterCb");
function Ql() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return eo(() => {
    e.isMounted = !0;
  }), Kr(() => {
    e.isUnmounting = !0;
  }), e;
}
const Re = [Function, Array], kr = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Re,
  onEnter: Re,
  onAfterEnter: Re,
  onEnterCancelled: Re,
  // leave
  onBeforeLeave: Re,
  onLeave: Re,
  onAfterLeave: Re,
  onLeaveCancelled: Re,
  // appear
  onBeforeAppear: Re,
  onAppear: Re,
  onAfterAppear: Re,
  onAppearCancelled: Re
}, Lr = (e) => {
  const t = e.subTree;
  return t.component ? Lr(t.component) : t;
}, Xl = {
  name: "BaseTransition",
  props: kr,
  setup(e, { slots: t }) {
    const n = yi(), s = Ql();
    return () => {
      const o = t.default && Br(t.default(), !0);
      if (!o || !o.length)
        return;
      const r = Hr(o), i = H(e), { mode: l } = i;
      if (l && l !== "in-out" && l !== "out-in" && l !== "default" && w(`invalid <transition> mode: ${l}`), s.isLeaving)
        return ms(r);
      const a = _o(r);
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
      a.type !== de && pn(a, p);
      const u = n.subTree, f = u && _o(u);
      if (f && f.type !== de && !$t(a, f) && Lr(n).type !== de) {
        const h = Es(
          f,
          i,
          s,
          n
        );
        if (pn(f, h), l === "out-in" && a.type !== de)
          return s.isLeaving = !0, h.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete h.afterLeave;
          }, ms(r);
        l === "in-out" && a.type !== de && (h.delayLeave = (g, E, P) => {
          const oe = Vr(
            s,
            f
          );
          oe[String(f.key)] = f, g[mt] = () => {
            E(), g[mt] = void 0, delete p.delayedLeave;
          }, p.delayedLeave = P;
        });
      }
      return r;
    };
  }
};
function Hr(e) {
  let t = e[0];
  if (e.length > 1) {
    let n = !1;
    for (const s of e)
      if (s.type !== de) {
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
const Zl = Xl;
function Vr(e, t) {
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
    onLeave: g,
    onAfterLeave: E,
    onLeaveCancelled: P,
    onBeforeAppear: oe,
    onAppear: B,
    onAfterAppear: J,
    onAppearCancelled: V
  } = t, ue = String(e.key), x = Vr(n, e), k = (I, U) => {
    I && Le(
      I,
      s,
      9,
      U
    );
  }, le = (I, U) => {
    const Y = U[1];
    k(I, U), R(I) ? I.every(($) => $.length <= 1) && Y() : I.length <= 1 && Y();
  }, z = {
    mode: i,
    persisted: l,
    beforeEnter(I) {
      let U = a;
      if (!n.isMounted)
        if (r)
          U = oe || a;
        else
          return;
      I[mt] && I[mt](
        !0
        /* cancelled */
      );
      const Y = x[ue];
      Y && $t(e, Y) && Y.el[mt] && Y.el[mt](), k(U, [I]);
    },
    enter(I) {
      let U = p, Y = u, $ = f;
      if (!n.isMounted)
        if (r)
          U = B || p, Y = J || u, $ = V || f;
        else
          return;
      let te = !1;
      const L = I[En] = (M) => {
        te || (te = !0, M ? k($, [I]) : k(Y, [I]), z.delayedLeave && z.delayedLeave(), I[En] = void 0);
      };
      U ? le(U, [I, L]) : L();
    },
    leave(I, U) {
      const Y = String(e.key);
      if (I[En] && I[En](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return U();
      k(h, [I]);
      let $ = !1;
      const te = I[mt] = (L) => {
        $ || ($ = !0, U(), L ? k(P, [I]) : k(E, [I]), I[mt] = void 0, x[Y] === e && delete x[Y]);
      };
      x[Y] = e, g ? le(g, [I, te]) : te();
    },
    clone(I) {
      const U = Es(
        I,
        t,
        n,
        s,
        o
      );
      return o && o(U), U;
    }
  };
  return z;
}
function ms(e) {
  if (wn(e))
    return e = Ye(e), e.children = null, e;
}
function _o(e) {
  if (!wn(e))
    return jr(e.type) && e.children ? Hr(e.children) : e;
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
function pn(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, pn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Br(e, t = !1, n) {
  let s = [], o = 0;
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    const l = n == null ? i.key : String(n) + String(i.key != null ? i.key : r);
    i.type === be ? (i.patchFlag & 128 && o++, s = s.concat(
      Br(i.children, t, l)
    )) : (t || i.type !== de) && s.push(l != null ? Ye(i, { key: l }) : i);
  }
  if (o > 1)
    for (let r = 0; r < s.length; r++)
      s[r].patchFlag = -2;
  return s;
}
function Ur(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const ec = /* @__PURE__ */ new WeakSet();
function Ms(e, t, n, s, o = !1) {
  if (R(e)) {
    e.forEach(
      (E, P) => Ms(
        E,
        t && (R(t) ? t[P] : t),
        n,
        s,
        o
      )
    );
    return;
  }
  if (Vt(s) && !o)
    return;
  const r = s.shapeFlag & 4 ? os(s.component) : s.el, i = o ? null : r, { i: l, r: a } = e;
  if (!l) {
    w(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const p = t && t.r, u = l.refs === Z ? l.refs = {} : l.refs, f = l.setupState, h = H(f), g = f === Z ? () => !1 : (E) => (G(h, E) && !pe(h[E]) && w(
    `Template ref "${E}" used on a non-ref value. It will not work in the production build.`
  ), ec.has(h[E]) ? !1 : G(h, E));
  if (p != null && p !== a && (ae(p) ? (u[p] = null, g(p) && (f[p] = null)) : pe(p) && (p.value = null)), D(a))
    Wt(a, l, 12, [i, u]);
  else {
    const E = ae(a), P = pe(a);
    if (E || P) {
      const oe = () => {
        if (e.f) {
          const B = E ? g(a) ? f[a] : u[a] : a.value;
          o ? R(B) && Bs(B, r) : R(B) ? B.includes(r) || B.push(r) : E ? (u[a] = [r], g(a) && (f[a] = u[a])) : (a.value = [r], e.k && (u[e.k] = a.value));
        } else E ? (u[a] = i, g(a) && (f[a] = i)) : P ? (a.value = i, e.k && (u[e.k] = i)) : w("Invalid template ref type:", a, `(${typeof a})`);
      };
      i ? (oe.id = -1, Ee(oe, n)) : oe();
    } else
      w("Invalid template ref type:", a, `(${typeof a})`);
  }
}
yn().requestIdleCallback;
yn().cancelIdleCallback;
const Vt = (e) => !!e.type.__asyncLoader, wn = (e) => e.type.__isKeepAlive;
function tc(e, t) {
  Wr(e, "a", t);
}
function nc(e, t) {
  Wr(e, "da", t);
}
function Wr(e, t, n = me) {
  const s = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (ns(t, s, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      wn(o.parent.vnode) && sc(s, t, n, o), o = o.parent;
  }
}
function sc(e, t, n, s) {
  const o = ns(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  qr(() => {
    Bs(s[t], o);
  }, n);
}
function ns(e, t, n = me, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...i) => {
      it();
      const l = Cn(n), a = Le(t, n, e, i);
      return l(), lt(), a;
    });
    return s ? o.unshift(r) : o.push(r), r;
  } else {
    const o = Tt(Qs[e].replace(/ hook$/, ""));
    w(
      `${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const ct = (e) => (t, n = me) => {
  (!mn || e === "sp") && ns(e, (...s) => t(...s), n);
}, oc = ct("bm"), eo = ct("m"), rc = ct(
  "bu"
), ic = ct("u"), Kr = ct(
  "bum"
), qr = ct("um"), lc = ct(
  "sp"
), cc = ct("rtg"), ac = ct("rtc");
function fc(e, t = me) {
  ns("ec", e, t);
}
const uc = "components", Gr = Symbol.for("v-ndc");
function dc(e) {
  return ae(e) ? pc(uc, e, !1) || e : e || Gr;
}
function pc(e, t, n = !0, s = !1) {
  const o = he || me;
  if (o) {
    const r = o.type;
    {
      const l = io(
        r,
        !1
      );
      if (l && (l === t || l === Se(t) || l === Pt(Se(t))))
        return r;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      wo(o[e] || r[e], t) || // global registration
      wo(o.appContext[e], t)
    );
    return !i && s ? r : (n && !i && w(`Failed to resolve ${e.slice(0, -1)}: ${t}
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`), i);
  } else
    w(
      `resolve${Pt(e.slice(0, -1))} can only be used in render() or setup().`
    );
}
function wo(e, t) {
  return e && (e[t] || e[Se(t)] || e[Pt(Se(t))]);
}
function Yr(e, t, n, s) {
  let o;
  const r = n, i = R(e);
  if (i || ae(e)) {
    const l = i && It(e);
    let a = !1;
    l && (a = !Te(e), e = Xn(e)), o = new Array(e.length);
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
  } else if (ee(e))
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
    return Q(), Ut(
      be,
      null,
      [ie("slot", n, s)],
      64
    );
  let r = e[t];
  r && r.length > 1 && (w(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), r = () => []), r && r._c && (r._d = !1), Q();
  const i = r && zr(r(n)), l = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  i && i.key, a = Ut(
    be,
    {
      key: (l && !rt(l) ? l : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!i && s ? "_fb" : "")
    },
    i || [],
    i && e._ === 1 ? 64 : -2
  );
  return r && r._c && (r._d = !0), a;
}
function zr(e) {
  return e.some((t) => Ft(t) ? !(t.type === de || t.type === be && !zr(t.children)) : !0) ? e : null;
}
const Is = (e) => e ? bi(e) ? os(e) : Is(e.parent) : null, Rt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ fe(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => qe(e.props),
    $attrs: (e) => qe(e.attrs),
    $slots: (e) => qe(e.slots),
    $refs: (e) => qe(e.refs),
    $parent: (e) => Is(e.parent),
    $root: (e) => Is(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => no(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      ts(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Fl.bind(e.proxy)),
    $watch: (e) => qc.bind(e)
  })
), to = (e) => e === "_" || e === "$", gs = (e, t) => e !== Z && !e.__isScriptSetup && G(e, t), Qr = {
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
        if (gs(s, t))
          return i[t] = 1, s[t];
        if (o !== Z && G(o, t))
          return i[t] = 2, o[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (p = e.propsOptions[0]) && G(p, t)
        )
          return i[t] = 3, r[t];
        if (n !== Z && G(n, t))
          return i[t] = 4, n[t];
        As && (i[t] = 0);
      }
    }
    const u = Rt[t];
    let f, h;
    if (u)
      return t === "$attrs" ? (ge(e.attrs, "get", ""), Kn()) : t === "$slots" && ge(e, "get", t), u(e);
    if (
      // css module (injected by vue-loader)
      (f = l.__cssModules) && (f = f[t])
    )
      return f;
    if (n !== Z && G(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      h = a.config.globalProperties, G(h, t)
    )
      return h[t];
    he && (!ae(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (o !== Z && to(t[0]) && G(o, t) ? w(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === he && w(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: o, ctx: r } = e;
    return gs(o, t) ? (o[t] = n, !0) : o.__isScriptSetup && G(o, t) ? (w(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : s !== Z && G(s, t) ? (s[t] = n, !0) : G(e.props, t) ? (w(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (w(
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
    return !!n[i] || e !== Z && G(e, i) || gs(t, i) || (l = r[0]) && G(l, i) || G(s, i) || G(Rt, i) || G(o.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : G(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
Qr.ownKeys = (e) => (w(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e));
function hc(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(Rt).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => Rt[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: _e
    });
  }), t;
}
function mc(e) {
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
function gc(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(H(n)).forEach((s) => {
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
function xo(e) {
  return R(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function vc() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? w(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let As = !0;
function yc(e) {
  const t = no(e), n = e.proxy, s = e.ctx;
  As = !1, t.beforeCreate && Co(t.beforeCreate, e, "bc");
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
    activated: P,
    deactivated: oe,
    beforeDestroy: B,
    beforeUnmount: J,
    destroyed: V,
    unmounted: ue,
    render: x,
    renderTracked: k,
    renderTriggered: le,
    errorCaptured: z,
    serverPrefetch: I,
    // public API
    expose: U,
    inheritAttrs: Y,
    // assets
    components: $,
    directives: te,
    filters: L
  } = t, M = vc();
  {
    const [N] = e.propsOptions;
    if (N)
      for (const W in N)
        M("Props", W);
  }
  if (p && bc(p, s, M), i)
    for (const N in i) {
      const W = i[N];
      D(W) ? (Object.defineProperty(s, N, {
        value: W.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }), M("Methods", N)) : w(
        `Method "${N}" has type "${typeof W}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (o) {
    D(o) || w(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const N = o.call(n, n);
    if (Us(N) && w(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !ee(N))
      w("data() should return an object.");
    else {
      e.data = zs(N);
      for (const W in N)
        M("Data", W), to(W[0]) || Object.defineProperty(s, W, {
          configurable: !0,
          enumerable: !0,
          get: () => N[W],
          set: _e
        });
    }
  }
  if (As = !0, r)
    for (const N in r) {
      const W = r[N], He = D(W) ? W.bind(n, n) : D(W.get) ? W.get.bind(n, n) : _e;
      He === _e && w(`Computed property "${N}" has no getter.`);
      const is = !D(W) && D(W.set) ? W.set.bind(n) : () => {
        w(
          `Write operation failed: computed property "${N}" is readonly.`
        );
      }, Kt = De({
        get: He,
        set: is
      });
      Object.defineProperty(s, N, {
        enumerable: !0,
        configurable: !0,
        get: () => Kt.value,
        set: (Dt) => Kt.value = Dt
      }), M("Computed", N);
    }
  if (l)
    for (const N in l)
      Xr(l[N], s, n, N);
  if (a) {
    const N = D(a) ? a.call(n) : a;
    Reflect.ownKeys(N).forEach((W) => {
      Tc(W, N[W]);
    });
  }
  u && Co(u, e, "c");
  function K(N, W) {
    R(W) ? W.forEach((He) => N(He.bind(n))) : W && N(W.bind(n));
  }
  if (K(oc, f), K(eo, h), K(rc, g), K(ic, E), K(tc, P), K(nc, oe), K(fc, z), K(ac, k), K(cc, le), K(Kr, J), K(qr, ue), K(lc, I), R(U))
    if (U.length) {
      const N = e.exposed || (e.exposed = {});
      U.forEach((W) => {
        Object.defineProperty(N, W, {
          get: () => n[W],
          set: (He) => n[W] = He
        });
      });
    } else e.exposed || (e.exposed = {});
  x && e.render === _e && (e.render = x), Y != null && (e.inheritAttrs = Y), $ && (e.components = $), te && (e.directives = te), I && Ur(e);
}
function bc(e, t, n = _e) {
  R(e) && (e = Rs(e));
  for (const s in e) {
    const o = e[s];
    let r;
    ee(o) ? "default" in o ? r = Rn(
      o.from || s,
      o.default,
      !0
    ) : r = Rn(o.from || s) : r = Rn(o), pe(r) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (i) => r.value = i
    }) : t[s] = r, n("Inject", s);
  }
}
function Co(e, t, n) {
  Le(
    R(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Xr(e, t, n, s) {
  let o = s.includes(".") ? ui(n, s) : () => n[s];
  if (ae(e)) {
    const r = t[e];
    D(r) ? rn(o, r) : w(`Invalid watch handler specified by key "${e}"`, r);
  } else if (D(e))
    rn(o, e.bind(n));
  else if (ee(e))
    if (R(e))
      e.forEach((r) => Xr(r, t, n, s));
    else {
      const r = D(e.handler) ? e.handler.bind(n) : t[e.handler];
      D(r) ? rn(o, r, e) : w(`Invalid watch handler specified by key "${e.handler}"`, r);
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
  ), Un(a, t, i)), ee(t) && r.set(t, a), a;
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
      const l = _c[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const _c = {
  data: So,
  props: To,
  emits: To,
  // objects
  methods: tn,
  computed: tn,
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
  components: tn,
  directives: tn,
  // watch
  watch: xc,
  // provide / inject
  provide: So,
  inject: wc
};
function So(e, t) {
  return t ? e ? function() {
    return fe(
      D(e) ? e.call(this, this) : e,
      D(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function wc(e, t) {
  return tn(Rs(e), Rs(t));
}
function Rs(e) {
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
function tn(e, t) {
  return e ? fe(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function To(e, t) {
  return e ? R(e) && R(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : fe(
    /* @__PURE__ */ Object.create(null),
    xo(e),
    xo(t ?? {})
  ) : t;
}
function xc(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = fe(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = xe(e[s], t[s]);
  return n;
}
function Zr() {
  return {
    app: null,
    config: {
      isNativeTag: Mi,
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
let Cc = 0;
function Sc(e, t) {
  return function(s, o = null) {
    D(s) || (s = fe({}, s)), o != null && !ee(o) && (w("root props passed to app.mount() must be an object."), o = null);
    const r = Zr(), i = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const p = r.app = {
      _uid: Cc++,
      _component: s,
      _props: o,
      _container: null,
      _context: r,
      _instance: null,
      version: Fo,
      get config() {
        return r.config;
      },
      set config(u) {
        w(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(u, ...f) {
        return i.has(u) ? w("Plugin has already been applied to target app.") : u && D(u.install) ? (i.add(u), u.install(p, ...f)) : D(u) ? (i.add(u), u(p, ...f)) : w(
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
        return Dr(u), f ? (r.directives[u] && w(`Directive "${u}" has already been registered in target app.`), r.directives[u] = f, p) : r.directives[u];
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
          const g = p._ceVNode || ie(s, o);
          return g.appContext = r, h === !0 ? h = "svg" : h === !1 && (h = void 0), r.reload = () => {
            e(
              Ye(g),
              u,
              h
            );
          }, f && t ? t(g, u) : e(g, u, h), a = !0, p._container = u, u.__vue_app__ = p, p._instance = g.component, Vl(p, Fo), os(g.component);
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
        ), e(null, p._container), p._instance = null, Bl(p), delete p._container.__vue_app__) : w("Cannot unmount an app that is not mounted.");
      },
      provide(u, f) {
        return u in r.provides && w(
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
function Tc(e, t) {
  if (!me)
    w("provide() can only be used inside setup().");
  else {
    let n = me.provides;
    const s = me.parent && me.parent.provides;
    s === n && (n = me.provides = Object.create(s)), n[e] = t;
  }
}
function Rn(e, t, n = !1) {
  const s = me || he;
  if (s || Bt) {
    const o = Bt ? Bt._context.provides : s ? s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && D(t) ? t.call(s && s.proxy) : t;
    w(`injection "${String(e)}" not found.`);
  } else
    w("inject() can only be used inside setup() or functional components.");
}
const ei = {}, ti = () => Object.create(ei), ni = (e) => Object.getPrototypeOf(e) === ei;
function Oc(e, t, n, s = !1) {
  const o = {}, r = ti();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), si(e, t, o, r);
  for (const i in e.propsOptions[0])
    i in o || (o[i] = void 0);
  ri(t || {}, o, e), n ? e.props = s ? o : gl(o) : e.type.props ? e.props = o : e.props = r, e.attrs = r;
}
function $c(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function Ec(e, t, n, s) {
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
    !$c(e) && (s || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const u = e.vnode.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        let h = u[f];
        if (ss(e.emitsOptions, h))
          continue;
        const g = t[h];
        if (a)
          if (G(r, h))
            g !== r[h] && (r[h] = g, p = !0);
          else {
            const E = Se(h);
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
    si(e, t, o, r) && (p = !0);
    let u;
    for (const f in l)
      (!t || // for camelCase
      !G(t, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = nt(f)) === f || !G(t, u))) && (a ? n && // for camelCase
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
        (!t || !G(t, f)) && (delete r[f], p = !0);
  }
  p && We(e.attrs, "set", ""), ri(t || {}, o, e);
}
function si(e, t, n, s) {
  const [o, r] = e.propsOptions;
  let i = !1, l;
  if (t)
    for (let a in t) {
      if (nn(a))
        continue;
      const p = t[a];
      let u;
      o && G(o, u = Se(a)) ? !r || !r.includes(u) ? n[u] = p : (l || (l = {}))[u] = p : ss(e.emitsOptions, a) || (!(a in s) || p !== s[a]) && (s[a] = p, i = !0);
    }
  if (r) {
    const a = H(n), p = l || Z;
    for (let u = 0; u < r.length; u++) {
      const f = r[u];
      n[f] = Ps(
        o,
        a,
        f,
        p[f],
        e,
        !G(p, f)
      );
    }
  }
  return i;
}
function Ps(e, t, n, s, o, r) {
  const i = e[n];
  if (i != null) {
    const l = G(i, "default");
    if (l && s === void 0) {
      const a = i.default;
      if (i.type !== Function && !i.skipFactory && D(a)) {
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
    ] && (s === "" || s === nt(n)) && (s = !0));
  }
  return s;
}
const Mc = /* @__PURE__ */ new WeakMap();
function oi(e, t, n = !1) {
  const s = n ? Mc : t.propsCache, o = s.get(e);
  if (o)
    return o;
  const r = e.props, i = {}, l = [];
  let a = !1;
  if (!D(e)) {
    const u = (f) => {
      a = !0;
      const [h, g] = oi(f, t, !0);
      fe(i, h), g && l.push(...g);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!r && !a)
    return ee(e) && s.set(e, Lt), Lt;
  if (R(r))
    for (let u = 0; u < r.length; u++) {
      ae(r[u]) || w("props must be strings when using array syntax.", r[u]);
      const f = Se(r[u]);
      Oo(f) && (i[f] = Z);
    }
  else if (r) {
    ee(r) || w("invalid props options", r);
    for (const u in r) {
      const f = Se(u);
      if (Oo(f)) {
        const h = r[u], g = i[f] = R(h) || D(h) ? { type: h } : fe({}, h), E = g.type;
        let P = !1, oe = !0;
        if (R(E))
          for (let B = 0; B < E.length; ++B) {
            const J = E[B], V = D(J) && J.name;
            if (V === "Boolean") {
              P = !0;
              break;
            } else V === "String" && (oe = !1);
          }
        else
          P = D(E) && E.name === "Boolean";
        g[
          0
          /* shouldCast */
        ] = P, g[
          1
          /* shouldCastTrue */
        ] = oe, (P || G(g, "default")) && l.push(f);
      }
    }
  }
  const p = [i, l];
  return ee(e) && s.set(e, p), p;
}
function Oo(e) {
  return e[0] !== "$" && !nn(e) ? !0 : (w(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Ic(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function ri(e, t, n) {
  const s = H(t), o = n.propsOptions[0], r = Object.keys(e).map((i) => Se(i));
  for (const i in o) {
    let l = o[i];
    l != null && Ac(
      i,
      s[i],
      l,
      qe(s),
      !r.includes(i)
    );
  }
}
function Ac(e, t, n, s, o) {
  const { type: r, required: i, validator: l, skipCheck: a } = n;
  if (i && o) {
    w('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !i)) {
    if (r != null && r !== !0 && !a) {
      let p = !1;
      const u = R(r) ? r : [r], f = [];
      for (let h = 0; h < u.length && !p; h++) {
        const { valid: g, expectedType: E } = Pc(t, u[h]);
        f.push(E || ""), p = g;
      }
      if (!p) {
        w(Nc(e, t, f));
        return;
      }
    }
    l && !l(t, s) && w('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Rc = /* @__PURE__ */ ot(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function Pc(e, t) {
  let n;
  const s = Ic(t);
  if (s === "null")
    n = e === null;
  else if (Rc(s)) {
    const o = typeof e;
    n = o === s.toLowerCase(), !n && o === "object" && (n = e instanceof t);
  } else s === "Object" ? n = ee(e) : s === "Array" ? n = R(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: s
  };
}
function Nc(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let s = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(Pt).join(" | ")}`;
  const o = n[0], r = Ws(t), i = $o(t, o), l = $o(t, r);
  return n.length === 1 && Eo(o) && !Fc(o, r) && (s += ` with value ${i}`), s += `, got ${r} `, Eo(r) && (s += `with value ${l}.`), s;
}
function $o(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Eo(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Fc(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const ii = (e) => e[0] === "_" || e === "$stable", so = (e) => R(e) ? e.map(Fe) : [Fe(e)], Dc = (e, t, n) => {
  if (t._n)
    return t;
  const s = dn((...o) => (pt.NODE_ENV !== "production" && me && (!n || n.root === me.root) && w(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), so(t(...o))), n);
  return s._c = !1, s;
}, li = (e, t, n) => {
  const s = e._ctx;
  for (const o in e) {
    if (ii(o)) continue;
    const r = e[o];
    if (D(r))
      t[o] = Dc(o, r, s);
    else if (r != null) {
      w(
        `Non-function value encountered for slot "${o}". Prefer function slots for better performance.`
      );
      const i = so(r);
      t[o] = () => i;
    }
  }
}, ci = (e, t) => {
  wn(e.vnode) || w(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = so(t);
  e.slots.default = () => n;
}, Ns = (e, t, n) => {
  for (const s in t)
    (n || s !== "_") && (e[s] = t[s]);
}, jc = (e, t, n) => {
  const s = e.slots = ti();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (Ns(s, t, n), n && jn(s, "_", o, !0)) : li(t, s);
  } else t && ci(e, t);
}, kc = (e, t, n) => {
  const { vnode: s, slots: o } = e;
  let r = !0, i = Z;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? Ge ? (Ns(o, t, n), We(e, "set", "$slots")) : n && l === 1 ? r = !1 : Ns(o, t, n) : (r = !t.$stable, li(t, o)), i = t;
  } else t && (ci(e, t), i = { default: 1 });
  if (r)
    for (const l in o)
      !ii(l) && i[l] == null && delete o[l];
};
let Qt, yt;
function ze(e, t) {
  e.appContext.config.performance && Wn() && yt.mark(`vue-${t}-${e.uid}`), ql(e, t, Wn() ? yt.now() : Date.now());
}
function Qe(e, t) {
  if (e.appContext.config.performance && Wn()) {
    const n = `vue-${t}-${e.uid}`, s = n + ":end";
    yt.mark(s), yt.measure(
      `<${rs(e, e.type)}> ${t}`,
      n,
      s
    ), yt.clearMarks(n), yt.clearMarks(s);
  }
  Gl(e, t, Wn() ? yt.now() : Date.now());
}
function Wn() {
  return Qt !== void 0 || (typeof window < "u" && window.performance ? (Qt = !0, yt = window.performance) : Qt = !1), Qt;
}
function Lc() {
  const e = [];
  if (e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const Ee = Zc;
function Hc(e) {
  return Vc(e);
}
function Vc(e, t) {
  Lc();
  const n = yn();
  n.__VUE__ = !0, Rr(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
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
  } = e, P = (c, d, m, b = null, v = null, y = null, T = void 0, S = null, C = Ge ? !1 : !!d.dynamicChildren) => {
    if (c === d)
      return;
    c && !$t(c, d) && (b = Sn(c), ft(c, v, y, !0), c = null), d.patchFlag === -2 && (C = !1, d.dynamicChildren = null);
    const { type: _, ref: F, shapeFlag: O } = d;
    switch (_) {
      case xn:
        oe(c, d, m, b);
        break;
      case de:
        B(c, d, m, b);
        break;
      case Pn:
        c == null ? J(d, m, b, T) : V(c, d, m, T);
        break;
      case be:
        te(
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
        O & 1 ? k(
          c,
          d,
          m,
          b,
          v,
          y,
          T,
          S,
          C
        ) : O & 6 ? L(
          c,
          d,
          m,
          b,
          v,
          y,
          T,
          S,
          C
        ) : O & 64 || O & 128 ? _.process(
          c,
          d,
          m,
          b,
          v,
          y,
          T,
          S,
          C,
          Gt
        ) : w("Invalid VNode type:", _, `(${typeof _})`);
    }
    F != null && v && Ms(F, c && c.ref, y, d || c, !d);
  }, oe = (c, d, m, b) => {
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
  }, J = (c, d, m, b) => {
    [c.el, c.anchor] = E(
      c.children,
      d,
      m,
      b,
      c.el,
      c.anchor
    );
  }, V = (c, d, m, b) => {
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
  }, ue = ({ el: c, anchor: d }, m, b) => {
    let v;
    for (; c && c !== d; )
      v = h(c), s(c, m, b), c = v;
    s(d, m, b);
  }, x = ({ el: c, anchor: d }) => {
    let m;
    for (; c && c !== d; )
      m = h(c), o(c), c = m;
    o(d);
  }, k = (c, d, m, b, v, y, T, S, C) => {
    d.type === "svg" ? T = "svg" : d.type === "math" && (T = "mathml"), c == null ? le(
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
  }, le = (c, d, m, b, v, y, T, S) => {
    let C, _;
    const { props: F, shapeFlag: O, transition: A, dirs: j } = c;
    if (C = c.el = i(
      c.type,
      y,
      F && F.is,
      F
    ), O & 8 ? u(C, c.children) : O & 16 && I(
      c.children,
      C,
      null,
      b,
      v,
      vs(c, y),
      T,
      S
    ), j && wt(c, null, b, "created"), z(C, c, c.scopeId, T, b), F) {
      for (const re in F)
        re !== "value" && !nn(re) && r(C, re, null, F[re], y, b);
      "value" in F && r(C, "value", null, F.value, y), (_ = F.onVnodeBeforeMount) && Be(_, b, c);
    }
    jn(C, "__vnode", c, !0), jn(C, "__vueParentComponent", b, !0), j && wt(c, null, b, "beforeMount");
    const q = Bc(v, A);
    q && A.beforeEnter(C), s(C, d, m), ((_ = F && F.onVnodeMounted) || q || j) && Ee(() => {
      _ && Be(_, b, c), q && A.enter(C), j && wt(c, null, b, "mounted");
    }, v);
  }, z = (c, d, m, b, v) => {
    if (m && g(c, m), b)
      for (let y = 0; y < b.length; y++)
        g(c, b[y]);
    if (v) {
      let y = v.subTree;
      if (y.patchFlag > 0 && y.patchFlag & 2048 && (y = oo(y.children) || y), d === y || hi(y.type) && (y.ssContent === d || y.ssFallback === d)) {
        const T = v.vnode;
        z(
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
      const F = c[_] = S ? gt(c[_]) : Fe(c[_]);
      P(
        null,
        F,
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
    let { patchFlag: C, dynamicChildren: _, dirs: F } = d;
    C |= c.patchFlag & 16;
    const O = c.props || Z, A = d.props || Z;
    let j;
    if (m && xt(m, !1), (j = A.onVnodeBeforeUpdate) && Be(j, m, d, c), F && wt(d, c, m, "beforeUpdate"), m && xt(m, !0), Ge && (C = 0, T = !1, _ = null), (O.innerHTML && A.innerHTML == null || O.textContent && A.textContent == null) && u(S, ""), _ ? (Y(
      c.dynamicChildren,
      _,
      S,
      m,
      b,
      vs(d, v),
      y
    ), Fs(c, d)) : T || He(
      c,
      d,
      S,
      null,
      m,
      b,
      vs(d, v),
      y,
      !1
    ), C > 0) {
      if (C & 16)
        $(S, O, A, m, v);
      else if (C & 2 && O.class !== A.class && r(S, "class", null, A.class, v), C & 4 && r(S, "style", O.style, A.style, v), C & 8) {
        const q = d.dynamicProps;
        for (let re = 0; re < q.length; re++) {
          const ne = q[re], Oe = O[ne], ve = A[ne];
          (ve !== Oe || ne === "value") && r(S, ne, Oe, ve, v, m);
        }
      }
      C & 1 && c.children !== d.children && u(S, d.children);
    } else !T && _ == null && $(S, O, A, m, v);
    ((j = A.onVnodeUpdated) || F) && Ee(() => {
      j && Be(j, m, d, c), F && wt(d, c, m, "updated");
    }, b);
  }, Y = (c, d, m, b, v, y, T) => {
    for (let S = 0; S < d.length; S++) {
      const C = c[S], _ = d[S], F = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        C.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (C.type === be || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !$t(C, _) || // - In the case of a component, it could contain anything.
        C.shapeFlag & 70) ? f(C.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          m
        )
      );
      P(
        C,
        _,
        F,
        null,
        b,
        v,
        y,
        T,
        !0
      );
    }
  }, $ = (c, d, m, b, v) => {
    if (d !== m) {
      if (d !== Z)
        for (const y in d)
          !nn(y) && !(y in m) && r(
            c,
            y,
            d[y],
            null,
            v,
            b
          );
      for (const y in m) {
        if (nn(y)) continue;
        const T = m[y], S = d[y];
        T !== S && y !== "value" && r(c, y, S, T, v, b);
      }
      "value" in m && r(c, "value", d.value, m.value, v);
    }
  }, te = (c, d, m, b, v, y, T, S, C) => {
    const _ = d.el = c ? c.el : l(""), F = d.anchor = c ? c.anchor : l("");
    let { patchFlag: O, dynamicChildren: A, slotScopeIds: j } = d;
    // #5523 dev root fragment may inherit directives
    (Ge || O & 2048) && (O = 0, C = !1, A = null), j && (S = S ? S.concat(j) : j), c == null ? (s(_, m, b), s(F, m, b), I(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      d.children || [],
      m,
      F,
      v,
      y,
      T,
      S,
      C
    )) : O > 0 && O & 64 && A && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren ? (Y(
      c.dynamicChildren,
      A,
      m,
      v,
      y,
      T,
      S
    ), Fs(c, d)) : He(
      c,
      d,
      m,
      F,
      v,
      y,
      T,
      S,
      C
    );
  }, L = (c, d, m, b, v, y, T, S, C) => {
    d.slotScopeIds = S, c == null ? d.shapeFlag & 512 ? v.ctx.activate(
      d,
      m,
      b,
      T,
      C
    ) : M(
      d,
      m,
      b,
      v,
      y,
      T,
      C
    ) : K(c, d, C);
  }, M = (c, d, m, b, v, y, T) => {
    const S = c.component = ca(
      c,
      b,
      v
    );
    if (S.type.__hmrId && jl(S), Mn(c), ze(S, "mount"), wn(c) && (S.ctx.renderer = Gt), ze(S, "init"), fa(S, !1, T), Qe(S, "init"), S.asyncDep) {
      if (Ge && (c.el = null), v && v.registerDep(S, N, T), !c.el) {
        const C = S.subTree = ie(de);
        B(null, C, d, m);
      }
    } else
      N(
        S,
        c,
        d,
        m,
        v,
        y,
        T
      );
    In(), Qe(S, "mount");
  }, K = (c, d, m) => {
    const b = d.component = c.component;
    if (Qc(c, d, m))
      if (b.asyncDep && !b.asyncResolved) {
        Mn(d), W(b, d, m), In();
        return;
      } else
        b.next = d, b.update();
    else
      d.el = c.el, b.vnode = d;
  }, N = (c, d, m, b, v, y, T) => {
    const S = () => {
      if (c.isMounted) {
        let { next: O, bu: A, u: j, parent: q, vnode: re } = c;
        {
          const $e = ai(c);
          if ($e) {
            O && (O.el = re.el, W(c, O, T)), $e.asyncDep.then(() => {
              c.isUnmounted || S();
            });
            return;
          }
        }
        let ne = O, Oe;
        Mn(O || c.vnode), xt(c, !1), O ? (O.el = re.el, W(c, O, T)) : O = re, A && Jt(A), (Oe = O.props && O.props.onVnodeBeforeUpdate) && Be(Oe, q, O, re), xt(c, !0), ze(c, "render");
        const ve = ys(c);
        Qe(c, "render");
        const Pe = c.subTree;
        c.subTree = ve, ze(c, "patch"), P(
          Pe,
          ve,
          // parent may have changed if it's in a teleport
          f(Pe.el),
          // anchor may have changed if it's in a fragment
          Sn(Pe),
          c,
          v,
          y
        ), Qe(c, "patch"), O.el = ve.el, ne === null && Xc(c, ve.el), j && Ee(j, v), (Oe = O.props && O.props.onVnodeUpdated) && Ee(
          () => Be(Oe, q, O, re),
          v
        ), Pr(c), In();
      } else {
        let O;
        const { el: A, props: j } = d, { bm: q, m: re, parent: ne, root: Oe, type: ve } = c, Pe = Vt(d);
        if (xt(c, !1), q && Jt(q), !Pe && (O = j && j.onVnodeBeforeMount) && Be(O, ne, d), xt(c, !0), A && fo) {
          const $e = () => {
            ze(c, "render"), c.subTree = ys(c), Qe(c, "render"), ze(c, "hydrate"), fo(
              A,
              c.subTree,
              c,
              v,
              null
            ), Qe(c, "hydrate");
          };
          Pe && ve.__asyncHydrate ? ve.__asyncHydrate(
            A,
            c,
            $e
          ) : $e();
        } else {
          Oe.ce && Oe.ce._injectChildStyle(ve), ze(c, "render");
          const $e = c.subTree = ys(c);
          Qe(c, "render"), ze(c, "patch"), P(
            null,
            $e,
            m,
            b,
            c,
            v,
            y
          ), Qe(c, "patch"), d.el = $e.el;
        }
        if (re && Ee(re, v), !Pe && (O = j && j.onVnodeMounted)) {
          const $e = d;
          Ee(
            () => Be(O, ne, $e),
            v
          );
        }
        (d.shapeFlag & 256 || ne && Vt(ne.vnode) && ne.vnode.shapeFlag & 256) && c.a && Ee(c.a, v), c.isMounted = !0, Ul(c), d = m = b = null;
      }
    };
    c.scope.on();
    const C = c.effect = new lr(S);
    c.scope.off();
    const _ = c.update = C.run.bind(C), F = c.job = C.runIfDirty.bind(C);
    F.i = c, F.id = c.uid, C.scheduler = () => ts(F), xt(c, !0), C.onTrack = c.rtc ? (O) => Jt(c.rtc, O) : void 0, C.onTrigger = c.rtg ? (O) => Jt(c.rtg, O) : void 0, _();
  }, W = (c, d, m) => {
    d.component = c;
    const b = c.vnode.props;
    c.vnode = d, c.next = null, Ec(c, d.props, b, m), kc(c, d.children, m), it(), yo(c), lt();
  }, He = (c, d, m, b, v, y, T, S, C = !1) => {
    const _ = c && c.children, F = c ? c.shapeFlag : 0, O = d.children, { patchFlag: A, shapeFlag: j } = d;
    if (A > 0) {
      if (A & 128) {
        Kt(
          _,
          O,
          m,
          b,
          v,
          y,
          T,
          S,
          C
        );
        return;
      } else if (A & 256) {
        is(
          _,
          O,
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
    j & 8 ? (F & 16 && qt(_, v, y), O !== _ && u(m, O)) : F & 16 ? j & 16 ? Kt(
      _,
      O,
      m,
      b,
      v,
      y,
      T,
      S,
      C
    ) : qt(_, v, y, !0) : (F & 8 && u(m, ""), j & 16 && I(
      O,
      m,
      b,
      v,
      y,
      T,
      S,
      C
    ));
  }, is = (c, d, m, b, v, y, T, S, C) => {
    c = c || Lt, d = d || Lt;
    const _ = c.length, F = d.length, O = Math.min(_, F);
    let A;
    for (A = 0; A < O; A++) {
      const j = d[A] = C ? gt(d[A]) : Fe(d[A]);
      P(
        c[A],
        j,
        m,
        null,
        v,
        y,
        T,
        S,
        C
      );
    }
    _ > F ? qt(
      c,
      v,
      y,
      !0,
      !1,
      O
    ) : I(
      d,
      m,
      b,
      v,
      y,
      T,
      S,
      C,
      O
    );
  }, Kt = (c, d, m, b, v, y, T, S, C) => {
    let _ = 0;
    const F = d.length;
    let O = c.length - 1, A = F - 1;
    for (; _ <= O && _ <= A; ) {
      const j = c[_], q = d[_] = C ? gt(d[_]) : Fe(d[_]);
      if ($t(j, q))
        P(
          j,
          q,
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
    for (; _ <= O && _ <= A; ) {
      const j = c[O], q = d[A] = C ? gt(d[A]) : Fe(d[A]);
      if ($t(j, q))
        P(
          j,
          q,
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
      O--, A--;
    }
    if (_ > O) {
      if (_ <= A) {
        const j = A + 1, q = j < F ? d[j].el : b;
        for (; _ <= A; )
          P(
            null,
            d[_] = C ? gt(d[_]) : Fe(d[_]),
            m,
            q,
            v,
            y,
            T,
            S,
            C
          ), _++;
      }
    } else if (_ > A)
      for (; _ <= O; )
        ft(c[_], v, y, !0), _++;
    else {
      const j = _, q = _, re = /* @__PURE__ */ new Map();
      for (_ = q; _ <= A; _++) {
        const we = d[_] = C ? gt(d[_]) : Fe(d[_]);
        we.key != null && (re.has(we.key) && w(
          "Duplicate keys found during update:",
          JSON.stringify(we.key),
          "Make sure keys are unique."
        ), re.set(we.key, _));
      }
      let ne, Oe = 0;
      const ve = A - q + 1;
      let Pe = !1, $e = 0;
      const Yt = new Array(ve);
      for (_ = 0; _ < ve; _++) Yt[_] = 0;
      for (_ = j; _ <= O; _++) {
        const we = c[_];
        if (Oe >= ve) {
          ft(we, v, y, !0);
          continue;
        }
        let Ve;
        if (we.key != null)
          Ve = re.get(we.key);
        else
          for (ne = q; ne <= A; ne++)
            if (Yt[ne - q] === 0 && $t(we, d[ne])) {
              Ve = ne;
              break;
            }
        Ve === void 0 ? ft(we, v, y, !0) : (Yt[Ve - q] = _ + 1, Ve >= $e ? $e = Ve : Pe = !0, P(
          we,
          d[Ve],
          m,
          null,
          v,
          y,
          T,
          S,
          C
        ), Oe++);
      }
      const uo = Pe ? Uc(Yt) : Lt;
      for (ne = uo.length - 1, _ = ve - 1; _ >= 0; _--) {
        const we = q + _, Ve = d[we], po = we + 1 < F ? d[we + 1].el : b;
        Yt[_] === 0 ? P(
          null,
          Ve,
          m,
          po,
          v,
          y,
          T,
          S,
          C
        ) : Pe && (ne < 0 || _ !== uo[ne] ? Dt(Ve, m, po, 2) : ne--);
      }
    }
  }, Dt = (c, d, m, b, v = null) => {
    const { el: y, type: T, transition: S, children: C, shapeFlag: _ } = c;
    if (_ & 6) {
      Dt(c.component.subTree, d, m, b);
      return;
    }
    if (_ & 128) {
      c.suspense.move(d, m, b);
      return;
    }
    if (_ & 64) {
      T.move(c, d, m, Gt);
      return;
    }
    if (T === be) {
      s(y, d, m);
      for (let O = 0; O < C.length; O++)
        Dt(C[O], d, m, b);
      s(c.anchor, d, m);
      return;
    }
    if (T === Pn) {
      ue(c, d, m);
      return;
    }
    if (b !== 2 && _ & 1 && S)
      if (b === 0)
        S.beforeEnter(y), s(y, d, m), Ee(() => S.enter(y), v);
      else {
        const { leave: O, delayLeave: A, afterLeave: j } = S, q = () => s(y, d, m), re = () => {
          O(y, () => {
            q(), j && j();
          });
        };
        A ? A(y, q, re) : re();
      }
    else
      s(y, d, m);
  }, ft = (c, d, m, b = !1, v = !1) => {
    const {
      type: y,
      props: T,
      ref: S,
      children: C,
      dynamicChildren: _,
      shapeFlag: F,
      patchFlag: O,
      dirs: A,
      cacheIndex: j
    } = c;
    if (O === -2 && (v = !1), S != null && Ms(S, null, m, c, !0), j != null && (d.renderCache[j] = void 0), F & 256) {
      d.ctx.deactivate(c);
      return;
    }
    const q = F & 1 && A, re = !Vt(c);
    let ne;
    if (re && (ne = T && T.onVnodeBeforeUnmount) && Be(ne, d, c), F & 6)
      Ei(c.component, m, b);
    else {
      if (F & 128) {
        c.suspense.unmount(m, b);
        return;
      }
      q && wt(c, null, d, "beforeUnmount"), F & 64 ? c.type.remove(
        c,
        d,
        m,
        Gt,
        b
      ) : _ && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !_.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (y !== be || O > 0 && O & 64) ? qt(
        _,
        d,
        m,
        !1,
        !0
      ) : (y === be && O & 384 || !v && F & 16) && qt(C, d, m), b && ls(c);
    }
    (re && (ne = T && T.onVnodeUnmounted) || q) && Ee(() => {
      ne && Be(ne, d, c), q && wt(c, null, d, "unmounted");
    }, m);
  }, ls = (c) => {
    const { type: d, el: m, anchor: b, transition: v } = c;
    if (d === be) {
      c.patchFlag > 0 && c.patchFlag & 2048 && v && !v.persisted ? c.children.forEach((T) => {
        T.type === de ? o(T.el) : ls(T);
      }) : $i(m, b);
      return;
    }
    if (d === Pn) {
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
  }, $i = (c, d) => {
    let m;
    for (; c !== d; )
      m = h(c), o(c), c = m;
    o(d);
  }, Ei = (c, d, m) => {
    c.type.__hmrId && kl(c);
    const { bum: b, scope: v, job: y, subTree: T, um: S, m: C, a: _ } = c;
    Mo(C), Mo(_), b && Jt(b), v.stop(), y && (y.flags |= 8, ft(T, c, d, m)), S && Ee(S, d), Ee(() => {
      c.isUnmounted = !0;
    }, d), d && d.pendingBranch && !d.isUnmounted && c.asyncDep && !c.asyncResolved && c.suspenseId === d.pendingId && (d.deps--, d.deps === 0 && d.resolve()), Kl(c);
  }, qt = (c, d, m, b = !1, v = !1, y = 0) => {
    for (let T = y; T < c.length; T++)
      ft(c[T], d, m, b, v);
  }, Sn = (c) => {
    if (c.shapeFlag & 6)
      return Sn(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const d = h(c.anchor || c.el), m = d && d[zl];
    return m ? h(m) : d;
  };
  let cs = !1;
  const co = (c, d, m) => {
    c == null ? d._vnode && ft(d._vnode, null, null, !0) : P(
      d._vnode || null,
      c,
      d,
      null,
      null,
      null,
      m
    ), d._vnode = c, cs || (cs = !0, yo(), Mr(), cs = !1);
  }, Gt = {
    p: P,
    um: ft,
    m: Dt,
    r: ls,
    mt: M,
    mc: I,
    pc: He,
    pbc: Y,
    n: Sn,
    o: e
  };
  let ao, fo;
  return {
    render: co,
    hydrate: ao,
    createApp: Sc(co, ao)
  };
}
function vs({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function xt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Bc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Fs(e, t, n = !1) {
  const s = e.children, o = t.children;
  if (R(s) && R(o))
    for (let r = 0; r < s.length; r++) {
      const i = s[r];
      let l = o[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = o[r] = gt(o[r]), l.el = i.el), !n && l.patchFlag !== -2 && Fs(i, l)), l.type === xn && (l.el = i.el), l.type === de && !l.el && (l.el = i.el);
    }
}
function Uc(e) {
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
function ai(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : ai(t);
}
function Mo(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Wc = Symbol.for("v-scx"), Kc = () => {
  {
    const e = Rn(Wc);
    return e || w(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function rn(e, t, n) {
  return D(t) || w(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), fi(e, t, n);
}
function fi(e, t, n = Z) {
  const { immediate: s, deep: o, flush: r, once: i } = n;
  t || (s !== void 0 && w(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && w(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && w(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = fe({}, n);
  l.onWarn = w;
  const a = t && s || !t && r !== "post";
  let p;
  if (mn) {
    if (r === "sync") {
      const g = Kc();
      p = g.__watcherHandles || (g.__watcherHandles = []);
    } else if (!a) {
      const g = () => {
      };
      return g.stop = _e, g.resume = _e, g.pause = _e, g;
    }
  }
  const u = me;
  l.call = (g, E, P) => Le(g, u, E, P);
  let f = !1;
  r === "post" ? l.scheduler = (g) => {
    Ee(g, u && u.suspense);
  } : r !== "sync" && (f = !0, l.scheduler = (g, E) => {
    E ? g() : ts(g);
  }), l.augmentJob = (g) => {
    t && (g.flags |= 4), f && (g.flags |= 2, u && (g.id = u.uid, g.i = u));
  };
  const h = $l(e, t, l);
  return mn && (p ? p.push(h) : a && h()), h;
}
function qc(e, t, n) {
  const s = this.proxy, o = ae(e) ? e.includes(".") ? ui(s, e) : () => s[e] : e.bind(s, s);
  let r;
  D(t) ? r = t : (r = t.handler, n = t);
  const i = Cn(this), l = fi(o, r.bind(s), n);
  return i(), l;
}
function ui(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let o = 0; o < n.length && s; o++)
      s = s[n[o]];
    return s;
  };
}
const Gc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Se(t)}Modifiers`] || e[`${nt(t)}Modifiers`];
function Yc(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || Z;
  {
    const {
      emitsOptions: u,
      propsOptions: [f]
    } = e;
    if (u)
      if (!(t in u))
        (!f || !(Tt(Se(t)) in f)) && w(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Tt(Se(t))}" prop.`
        );
      else {
        const h = u[t];
        D(h) && (h(...n) || w(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let o = n;
  const r = t.startsWith("update:"), i = r && Gc(s, t.slice(7));
  i && (i.trim && (o = n.map((u) => ae(u) ? u.trim() : u)), i.number && (o = n.map(Ni))), Yl(e, t, o);
  {
    const u = t.toLowerCase();
    u !== t && s[Tt(u)] && w(
      `Event "${u}" is emitted in component ${rs(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${nt(
        t
      )}" instead of "${t}".`
    );
  }
  let l, a = s[l = Tt(t)] || // also try camelCase event handler (#2249)
  s[l = Tt(Se(t))];
  !a && r && (a = s[l = Tt(nt(t))]), a && Le(
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
function di(e, t, n = !1) {
  const s = t.emitsCache, o = s.get(e);
  if (o !== void 0)
    return o;
  const r = e.emits;
  let i = {}, l = !1;
  if (!D(e)) {
    const a = (p) => {
      const u = di(p, t, !0);
      u && (l = !0, fe(i, u));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !r && !l ? (ee(e) && s.set(e, null), null) : (R(r) ? r.forEach((a) => i[a] = null) : fe(i, r), ee(e) && s.set(e, i), i);
}
function ss(e, t) {
  return !e || !vn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), G(e, t[0].toLowerCase() + t.slice(1)) || G(e, nt(t)) || G(e, t));
}
let Ds = !1;
function Kn() {
  Ds = !0;
}
function ys(e) {
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
    inheritAttrs: P
  } = e, oe = Bn(e);
  let B, J;
  Ds = !1;
  try {
    if (n.shapeFlag & 4) {
      const x = o || s, k = pt.NODE_ENV !== "production" && g.__isScriptSetup ? new Proxy(x, {
        get(le, z, I) {
          return w(
            `Property '${String(
              z
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(le, z, I);
        }
      }) : x;
      B = Fe(
        p.call(
          k,
          x,
          u,
          pt.NODE_ENV !== "production" ? qe(f) : f,
          g,
          h,
          E
        )
      ), J = l;
    } else {
      const x = t;
      pt.NODE_ENV !== "production" && l === f && Kn(), B = Fe(
        x.length > 1 ? x(
          pt.NODE_ENV !== "production" ? qe(f) : f,
          pt.NODE_ENV !== "production" ? {
            get attrs() {
              return Kn(), qe(l);
            },
            slots: i,
            emit: a
          } : { attrs: l, slots: i, emit: a }
        ) : x(
          pt.NODE_ENV !== "production" ? qe(f) : f,
          null
        )
      ), J = t.props ? l : Jc(l);
    }
  } catch (x) {
    ln.length = 0, bn(x, e, 1), B = ie(de);
  }
  let V = B, ue;
  if (B.patchFlag > 0 && B.patchFlag & 2048 && ([V, ue] = pi(B)), J && P !== !1) {
    const x = Object.keys(J), { shapeFlag: k } = V;
    if (x.length) {
      if (k & 7)
        r && x.some(Dn) && (J = zc(
          J,
          r
        )), V = Ye(V, J, !1, !0);
      else if (!Ds && V.type !== de) {
        const le = Object.keys(l), z = [], I = [];
        for (let U = 0, Y = le.length; U < Y; U++) {
          const $ = le[U];
          vn($) ? Dn($) || z.push($[2].toLowerCase() + $.slice(3)) : I.push($);
        }
        I.length && w(
          `Extraneous non-props attributes (${I.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
        ), z.length && w(
          `Extraneous non-emits event listeners (${z.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (Io(V) || w(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), V = Ye(V, null, !1, !0), V.dirs = V.dirs ? V.dirs.concat(n.dirs) : n.dirs), n.transition && (Io(V) || w(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), pn(V, n.transition)), ue ? ue(V) : B = V, Bn(oe), B;
}
const pi = (e) => {
  const t = e.children, n = e.dynamicChildren, s = oo(t, !1);
  if (s) {
    if (s.patchFlag > 0 && s.patchFlag & 2048)
      return pi(s);
  } else return [e, void 0];
  const o = t.indexOf(s), r = n ? n.indexOf(s) : -1, i = (l) => {
    t[o] = l, n && (r > -1 ? n[r] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [Fe(s), i];
};
function oo(e, t = !0) {
  let n;
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (Ft(o)) {
      if (o.type !== de || o.children === "v-if") {
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
const Jc = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || vn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, zc = (e, t) => {
  const n = {};
  for (const s in e)
    (!Dn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
}, Io = (e) => e.shapeFlag & 7 || e.type === de;
function Qc(e, t, n) {
  const { props: s, children: o, component: r } = e, { props: i, children: l, patchFlag: a } = t, p = r.emitsOptions;
  if ((o || l) && Ge || t.dirs || t.transition)
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
        if (i[h] !== s[h] && !ss(p, h))
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
    if (t[r] !== e[r] && !ss(n, r))
      return !0;
  }
  return !1;
}
function Xc({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const hi = (e) => e.__isSuspense;
function Zc(e, t) {
  t && t.pendingBranch ? R(e) ? t.effects.push(...e) : t.effects.push(e) : Er(e);
}
const be = Symbol.for("v-fgt"), xn = Symbol.for("v-txt"), de = Symbol.for("v-cmt"), Pn = Symbol.for("v-stc"), ln = [];
let Ae = null;
function Q(e = !1) {
  ln.push(Ae = e ? null : []);
}
function ea() {
  ln.pop(), Ae = ln[ln.length - 1] || null;
}
let hn = 1;
function Ro(e) {
  hn += e, e < 0 && Ae && (Ae.hasOnce = !0);
}
function mi(e) {
  return e.dynamicChildren = hn > 0 ? Ae || Lt : null, ea(), hn > 0 && Ae && Ae.push(e), e;
}
function ce(e, t, n, s, o, r) {
  return mi(
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
  return mi(
    ie(
      e,
      t,
      n,
      s,
      o,
      !0
    )
  );
}
function Ft(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function $t(e, t) {
  if (t.shapeFlag & 6 && e.component) {
    const n = An.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const ta = (...e) => na(
  ...e
), gi = ({ key: e }) => e ?? null, Nn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ae(e) || pe(e) || D(e) ? { i: he, r: e, k: t, f: !!n } : e : null);
function se(e, t = null, n = null, s = 0, o = null, r = e === be ? 0 : 1, i = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && gi(t),
    ref: t && Nn(t),
    scopeId: Fr,
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
  return l ? (ro(a, n), r & 128 && e.normalize(a)) : n && (a.shapeFlag |= ae(n) ? 8 : 16), a.key !== a.key && w("VNode created with invalid key (NaN). VNode type:", a.type), hn > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Ae && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Ae.push(a), a;
}
const ie = ta;
function na(e, t = null, n = null, s = 0, o = null, r = !1) {
  if ((!e || e === Gr) && (e || w(`Invalid vnode type when creating vnode: ${e}.`), e = de), Ft(e)) {
    const l = Ye(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && ro(l, n), hn > 0 && !r && Ae && (l.shapeFlag & 6 ? Ae[Ae.indexOf(e)] = l : Ae.push(l)), l.patchFlag = -2, l;
  }
  if (wi(e) && (e = e.__vccOpts), t) {
    t = sa(t);
    let { class: l, style: a } = t;
    l && !ae(l) && (t.class = _t(l)), ee(a) && (fn(a) && !R(a) && (a = fe({}, a)), t.style = zn(a));
  }
  const i = ae(e) ? 1 : hi(e) ? 128 : jr(e) ? 64 : ee(e) ? 4 : D(e) ? 2 : 0;
  return i & 4 && fn(e) && (e = H(e), w(
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
function sa(e) {
  return e ? fn(e) || ni(e) ? fe({}, e) : e : null;
}
function Ye(e, t, n = !1, s = !1) {
  const { props: o, ref: r, patchFlag: i, children: l, transition: a } = e, p = t ? ra(o || {}, t) : o, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: p,
    key: p && gi(p),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? R(r) ? r.concat(Nn(t)) : [r, Nn(t)] : Nn(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: i === -1 && R(l) ? l.map(vi) : l,
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
    ssContent: e.ssContent && Ye(e.ssContent),
    ssFallback: e.ssFallback && Ye(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && s && pn(
    u,
    a.clone(u)
  ), u;
}
function vi(e) {
  const t = Ye(e);
  return R(e.children) && (t.children = e.children.map(vi)), t;
}
function oa(e = " ", t = 0) {
  return ie(xn, null, e, t);
}
function et(e = "", t = !1) {
  return t ? (Q(), Ut(de, null, e)) : ie(de, null, e);
}
function Fe(e) {
  return e == null || typeof e == "boolean" ? ie(de) : R(e) ? ie(
    be,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Ft(e) ? gt(e) : ie(xn, null, String(e));
}
function gt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ye(e);
}
function ro(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (R(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), ro(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !ni(t) ? t._ctx = he : o === 3 && he && (he.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else D(t) ? (t = { default: t, _ctx: he }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [oa(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function ra(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const o in s)
      if (o === "class")
        t.class !== s.class && (t.class = _t([t.class, s.class]));
      else if (o === "style")
        t.style = zn([t.style, s.style]);
      else if (vn(o)) {
        const r = t[o], i = s[o];
        i && r !== i && !(R(r) && r.includes(i)) && (t[o] = r ? [].concat(r, i) : i);
      } else o !== "" && (t[o] = s[o]);
  }
  return t;
}
function Be(e, t, n, s = null) {
  Le(e, t, 7, [
    n,
    s
  ]);
}
const ia = Zr();
let la = 0;
function ca(e, t, n) {
  const s = e.type, o = (t ? t.appContext : e.appContext) || ia, r = {
    uid: la++,
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
    propsOptions: oi(s, o),
    emitsOptions: di(s, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Z,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: Z,
    data: Z,
    props: Z,
    attrs: Z,
    slots: Z,
    refs: Z,
    setupState: Z,
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
  return r.ctx = hc(r), r.root = t ? t.root : r, r.emit = Yc.bind(null, r), e.ce && e.ce(r), r;
}
let me = null;
const yi = () => me || he;
let qn, js;
{
  const e = yn(), t = (n, s) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(s), (r) => {
      o.length > 1 ? o.forEach((i) => i(r)) : o[0](r);
    };
  };
  qn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => me = n
  ), js = t(
    "__VUE_SSR_SETTERS__",
    (n) => mn = n
  );
}
const Cn = (e) => {
  const t = me;
  return qn(e), e.scope.on(), () => {
    e.scope.off(), qn(t);
  };
}, Po = () => {
  me && me.scope.off(), qn(null);
}, aa = /* @__PURE__ */ ot("slot,component");
function ks(e, { isNativeTag: t }) {
  (aa(e) || t(e)) && w(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function bi(e) {
  return e.vnode.shapeFlag & 4;
}
let mn = !1;
function fa(e, t = !1, n = !1) {
  t && js(t);
  const { props: s, children: o } = e.vnode, r = bi(e);
  Oc(e, s, r, t), jc(e, o, n);
  const i = r ? ua(e, t) : void 0;
  return t && js(!1), i;
}
function ua(e, t) {
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
        Dr(r[i]);
    }
    s.compilerOptions && da() && w(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Qr), mc(e);
  const { setup: o } = s;
  if (o) {
    it();
    const r = e.setupContext = o.length > 1 ? ma(e) : null, i = Cn(e), l = Wt(
      o,
      e,
      0,
      [
        qe(e.props),
        r
      ]
    ), a = Us(l);
    if (lt(), i(), (a || e.sp) && !Vt(e) && Ur(e), a) {
      if (l.then(Po, Po), t)
        return l.then((p) => {
          No(e, p, t);
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
      No(e, l, t);
  } else
    _i(e, t);
}
function No(e, t, n) {
  D(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ee(t) ? (Ft(t) && w(
    "setup() should not return VNodes directly - return a render function instead."
  ), e.devtoolsRawSetupState = t, e.setupState = Sr(t), gc(e)) : t !== void 0 && w(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), _i(e, n);
}
let Ls;
const da = () => !Ls;
function _i(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && Ls && !s.render) {
      const o = s.template || no(e).template;
      if (o) {
        ze(e, "compile");
        const { isCustomElement: r, compilerOptions: i } = e.appContext.config, { delimiters: l, compilerOptions: a } = s, p = fe(
          fe(
            {
              isCustomElement: r,
              delimiters: l
            },
            i
          ),
          a
        );
        s.render = Ls(o, p), Qe(e, "compile");
      }
    }
    e.render = s.render || _e;
  }
  {
    const o = Cn(e);
    it();
    try {
      yc(e);
    } finally {
      lt(), o();
    }
  }
  !s.render && e.render === _e && !t && (s.template ? w(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : w("Component is missing template or render function: ", s));
}
const pa = {
  get(e, t) {
    return Kn(), ge(e, "get", ""), e[t];
  },
  set() {
    return w("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return w("setupContext.attrs is readonly."), !1;
  }
};
function ha(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return ge(e, "get", "$slots"), t[n];
    }
  });
}
function ma(e) {
  const t = (n) => {
    if (e.exposed && w("expose() should be called only once per setup()."), n != null) {
      let s = typeof n;
      s === "object" && (R(n) ? s = "array" : pe(n) && (s = "ref")), s !== "object" && w(
        `expose() should be passed a plain object, received ${s}.`
      );
    }
    e.exposed = n || {};
  };
  {
    let n, s;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, pa));
      },
      get slots() {
        return s || (s = ha(e));
      },
      get emit() {
        return (o, ...r) => e.emit(o, ...r);
      },
      expose: t
    });
  }
}
function os(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Sr(vl(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Rt)
        return Rt[n](e);
    },
    has(t, n) {
      return n in t || n in Rt;
    }
  })) : e.proxy;
}
const ga = /(?:^|[-_])(\w)/g, va = (e) => e.replace(ga, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function io(e, t = !0) {
  return D(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function rs(e, t, n = !1) {
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
  return s ? va(s) : n ? "App" : "Anonymous";
}
function wi(e) {
  return D(e) && "__vccOpts" in e;
}
const De = (e, t) => {
  const n = Tl(e, t, mn);
  {
    const s = yi();
    s && s.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function ya(e, t, n) {
  const s = arguments.length;
  return s === 2 ? ee(t) && !R(t) ? Ft(t) ? ie(e, null, [t]) : ie(e, t) : ie(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && Ft(n) && (n = [n]), ie(e, t, n));
}
function ba() {
  if (typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, s = { style: "color:#eb2f96" }, o = {
    __vue_custom_formatter: !0,
    header(f) {
      return ee(f) ? f.__isVue ? ["div", e, "VueInstance"] : pe(f) ? [
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
        ["span", e, Te(f) ? "ShallowReactive" : "Reactive"],
        "<",
        l(f),
        `>${st(f) ? " (readonly)" : ""}`
      ] : st(f) ? [
        "div",
        {},
        ["span", e, Te(f) ? "ShallowReadonly" : "Readonly"],
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
    f.type.props && f.props && h.push(i("props", H(f.props))), f.setupState !== Z && h.push(i("setup", f.setupState)), f.data !== Z && h.push(i("data", H(f.data)));
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
    return h = fe({}, h), Object.keys(h).length ? [
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
    return typeof f == "number" ? ["span", t, f] : typeof f == "string" ? ["span", n, JSON.stringify(f)] : typeof f == "boolean" ? ["span", s, f] : ee(f) ? ["object", { object: h ? H(f) : f }] : ["span", n, String(f)];
  }
  function a(f, h) {
    const g = f.type;
    if (D(g))
      return;
    const E = {};
    for (const P in f.ctx)
      p(g, P, h) && (E[P] = f.ctx[P]);
    return E;
  }
  function p(f, h, g) {
    const E = f[g];
    if (R(E) && E.includes(h) || ee(E) && h in E || f.extends && p(f.extends, h, g) || f.mixins && f.mixins.some((P) => p(P, h, g)))
      return !0;
  }
  function u(f) {
    return Te(f) ? "ShallowRef" : f.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
const Fo = "3.5.12", tt = w;
let Hs;
const Do = typeof window < "u" && window.trustedTypes;
if (Do)
  try {
    Hs = /* @__PURE__ */ Do.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    tt(`Error creating trusted types policy: ${e}`);
  }
const xi = Hs ? (e) => Hs.createHTML(e) : (e) => e, _a = "http://www.w3.org/2000/svg", wa = "http://www.w3.org/1998/Math/MathML", Xe = typeof document < "u" ? document : null, jo = Xe && /* @__PURE__ */ Xe.createElement("template"), xa = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const o = t === "svg" ? Xe.createElementNS(_a, e) : t === "mathml" ? Xe.createElementNS(wa, e) : n ? Xe.createElement(e, { is: n }) : Xe.createElement(e);
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
      jo.innerHTML = xi(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = jo.content;
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
}, ut = "transition", Xt = "animation", gn = Symbol("_vtc"), Ci = {
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
}, Ca = /* @__PURE__ */ fe(
  {},
  kr,
  Ci
), Sa = (e) => (e.displayName = "Transition", e.props = Ca, e), ko = /* @__PURE__ */ Sa(
  (e, { slots: t }) => ya(Zl, Ta(e), t)
), Ct = (e, t = []) => {
  R(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Lo = (e) => e ? R(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Ta(e) {
  const t = {};
  for (const $ in e)
    $ in Ci || (t[$] = e[$]);
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
  } = e, E = Oa(o), P = E && E[0], oe = E && E[1], {
    onBeforeEnter: B,
    onEnter: J,
    onEnterCancelled: V,
    onLeave: ue,
    onLeaveCancelled: x,
    onBeforeAppear: k = B,
    onAppear: le = J,
    onAppearCancelled: z = V
  } = t, I = ($, te, L) => {
    St($, te ? u : l), St($, te ? p : i), L && L();
  }, U = ($, te) => {
    $._isLeaving = !1, St($, f), St($, g), St($, h), te && te();
  }, Y = ($) => (te, L) => {
    const M = $ ? le : J, K = () => I(te, $, L);
    Ct(M, [te, K]), Ho(() => {
      St(te, $ ? a : r), dt(te, $ ? u : l), Lo(M) || Vo(te, s, P, K);
    });
  };
  return fe(t, {
    onBeforeEnter($) {
      Ct(B, [$]), dt($, r), dt($, i);
    },
    onBeforeAppear($) {
      Ct(k, [$]), dt($, a), dt($, p);
    },
    onEnter: Y(!1),
    onAppear: Y(!0),
    onLeave($, te) {
      $._isLeaving = !0;
      const L = () => U($, te);
      dt($, f), dt($, h), Ma(), Ho(() => {
        $._isLeaving && (St($, f), dt($, g), Lo(ue) || Vo($, s, oe, L));
      }), Ct(ue, [$, L]);
    },
    onEnterCancelled($) {
      I($, !1), Ct(V, [$]);
    },
    onAppearCancelled($) {
      I($, !0), Ct(z, [$]);
    },
    onLeaveCancelled($) {
      U($), Ct(x, [$]);
    }
  });
}
function Oa(e) {
  if (e == null)
    return null;
  if (ee(e))
    return [bs(e.enter), bs(e.leave)];
  {
    const t = bs(e);
    return [t, t];
  }
}
function bs(e) {
  const t = Fi(e);
  return Rl(t, "<transition> explicit duration"), t;
}
function dt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[gn] || (e[gn] = /* @__PURE__ */ new Set())).add(t);
}
function St(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[gn];
  n && (n.delete(t), n.size || (e[gn] = void 0));
}
function Ho(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let $a = 0;
function Vo(e, t, n, s) {
  const o = e._endId = ++$a, r = () => {
    o === e._endId && s();
  };
  if (n != null)
    return setTimeout(r, n);
  const { type: i, timeout: l, propCount: a } = Ea(e, t);
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
function Ea(e, t) {
  const n = window.getComputedStyle(e), s = (E) => (n[E] || "").split(", "), o = s(`${ut}Delay`), r = s(`${ut}Duration`), i = Bo(o, r), l = s(`${Xt}Delay`), a = s(`${Xt}Duration`), p = Bo(l, a);
  let u = null, f = 0, h = 0;
  t === ut ? i > 0 && (u = ut, f = i, h = r.length) : t === Xt ? p > 0 && (u = Xt, f = p, h = a.length) : (f = Math.max(i, p), u = f > 0 ? i > p ? ut : Xt : null, h = u ? u === ut ? r.length : a.length : 0);
  const g = u === ut && /\b(transform|all)(,|$)/.test(
    s(`${ut}Property`).toString()
  );
  return {
    type: u,
    timeout: f,
    propCount: h,
    hasTransform: g
  };
}
function Bo(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => Uo(n) + Uo(e[s])));
}
function Uo(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Ma() {
  return document.body.offsetHeight;
}
function Ia(e, t, n) {
  const s = e[gn];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Gn = Symbol("_vod"), Si = Symbol("_vsh"), Ti = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[Gn] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Zt(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: s }) {
    !t != !n && (s ? t ? (s.beforeEnter(e), Zt(e, !0), s.enter(e)) : s.leave(e, () => {
      Zt(e, !1);
    }) : Zt(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Zt(e, t);
  }
};
Ti.name = "show";
function Zt(e, t) {
  e.style.display = t ? e[Gn] : "none", e[Si] = !t;
}
const Aa = Symbol("CSS_VAR_TEXT"), Ra = /(^|;)\s*display\s*:/;
function Pa(e, t, n) {
  const s = e.style, o = ae(n);
  let r = !1;
  if (n && !o) {
    if (t)
      if (ae(t))
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
      const i = s[Aa];
      i && (n += ";" + i), s.cssText = n, r = Ra.test(n);
    }
  } else t && e.removeAttribute("style");
  Gn in e && (e[Gn] = r ? s.display : "", e[Si] && (s.display = "none"));
}
const Na = /[^\\];\s*$/, Wo = /\s*!important$/;
function Fn(e, t, n) {
  if (R(n))
    n.forEach((s) => Fn(e, t, s));
  else if (n == null && (n = ""), Na.test(n) && tt(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = Fa(e, t);
    Wo.test(n) ? e.setProperty(
      nt(s),
      n.replace(Wo, ""),
      "important"
    ) : e[s] = n;
  }
}
const Ko = ["Webkit", "Moz", "ms"], _s = {};
function Fa(e, t) {
  const n = _s[t];
  if (n)
    return n;
  let s = Se(t);
  if (s !== "filter" && s in e)
    return _s[t] = s;
  s = Pt(s);
  for (let o = 0; o < Ko.length; o++) {
    const r = Ko[o] + s;
    if (r in e)
      return _s[t] = r;
  }
  return t;
}
const qo = "http://www.w3.org/1999/xlink";
function Go(e, t, n, s, o, r = Gi(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(qo, t.slice(6, t.length)) : e.setAttributeNS(qo, t, n) : n == null || r && !or(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : rt(n) ? String(n) : n
  );
}
function Yo(e, t, n, s, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? xi(n) : n);
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
    l === "boolean" ? n = or(n) : n == null && l === "string" ? (n = "", i = !0) : l === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch (l) {
    i || tt(
      `Failed setting prop "${t}" on <${r.toLowerCase()}>: value ${n} is invalid.`,
      l
    );
  }
  i && e.removeAttribute(o || t);
}
function Da(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function ja(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Jo = Symbol("_vei");
function ka(e, t, n, s, o = null) {
  const r = e[Jo] || (e[Jo] = {}), i = r[t];
  if (s && i)
    i.value = Qo(s, t);
  else {
    const [l, a] = La(t);
    if (s) {
      const p = r[t] = Ba(
        Qo(s, t),
        o
      );
      Da(e, l, p, a);
    } else i && (ja(e, l, i, a), r[t] = void 0);
  }
}
const zo = /(?:Once|Passive|Capture)$/;
function La(e) {
  let t;
  if (zo.test(e)) {
    t = {};
    let s;
    for (; s = e.match(zo); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : nt(e.slice(2)), t];
}
let ws = 0;
const Ha = /* @__PURE__ */ Promise.resolve(), Va = () => ws || (Ha.then(() => ws = 0), ws = Date.now());
function Ba(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    Le(
      Ua(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = Va(), n;
}
function Qo(e, t) {
  return D(e) || R(e) ? e : (tt(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), _e);
}
function Ua(e, t) {
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
const Xo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Wa = (e, t, n, s, o, r) => {
  const i = o === "svg";
  t === "class" ? Ia(e, s, i) : t === "style" ? Pa(e, n, s) : vn(t) ? Dn(t) || ka(e, t, n, s, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Ka(e, t, s, i)) ? (Yo(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Go(e, t, s, i, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !ae(s)) ? Yo(e, Se(t), s, r, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Go(e, t, s, i));
};
function Ka(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Xo(t) && D(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return Xo(t) && ae(n) ? !1 : t in e;
}
const qa = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Ga = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), s = t.join(".");
  return n[s] || (n[s] = (o) => {
    if (!("key" in o))
      return;
    const r = nt(o.key);
    if (t.some(
      (i) => i === r || qa[i] === r
    ))
      return e(o);
  });
}, Ya = /* @__PURE__ */ fe({ patchProp: Wa }, xa);
let Zo;
function Ja() {
  return Zo || (Zo = Hc(Ya));
}
const za = (...e) => {
  const t = Ja().createApp(...e);
  Xa(t), Za(t);
  const { mount: n } = t;
  return t.mount = (s) => {
    const o = ef(s);
    if (!o) return;
    const r = t._component;
    !D(r) && !r.render && !r.template && (r.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const i = n(o, !1, Qa(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), i;
  }, t;
};
function Qa(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Xa(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => Ui(t) || Wi(t) || Ki(t),
    writable: !1
  });
}
function Za(e) {
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
    const n = e.config.compilerOptions, s = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return tt(s), n;
      },
      set() {
        tt(s);
      }
    });
  }
}
function ef(e) {
  if (ae(e)) {
    const t = document.querySelector(e);
    return t || tt(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && tt(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
function tf() {
  ba();
}
tf();
const Vs = (e = 16) => {
  let t = "";
  const n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", s = n.length;
  let o = 0;
  for (; o < e; )
    t += n.charAt(Math.floor(Math.random() * s)), o += 1;
  return t;
}, nf = (e, t, n) => {
  const s = n ? "<br />" : "<br>", o = t ? "$1" + s : "$1" + s + "$2";
  return (e + "").replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, o);
}, vt = (e) => ({
  id: null,
  userRole: "host",
  type: "text",
  content: "",
  options: null,
  scriptId: null,
  ...e
}), xs = (e) => (e != null && e.options && typeof e.options == "string" && (e.options = e.options.split(",").map((t) => t.trim())), {
  id: Vs(),
  type: "text",
  skippable: !1,
  skipText: "Skip",
  longAnswer: !1,
  content: "",
  answer: vt(),
  ...e
}), sf = {
  isQuestion: !0,
  onValidate({ context: e, answer: t, script: n }) {
    if (t.content.includes("@") == !1) {
      const s = {
        type: "text",
        userRole: "host",
        content: "Your email seem to be invalid",
        ...n.errorMessage
      };
      return e.addConversationMessage(s), !1;
    }
    return !0;
  }
}, of = {
  isQuestion: !0
}, rf = {
  isQuestion: !1
}, lf = {
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
}, lo = {
  text: rf,
  email: sf,
  question: of,
  select: lf
}, er = (e) => {
  const t = e.type, n = lo[t] || null;
  return n ? !!(n != null && n.isQuestion) : !1;
}, cf = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
};
function af(e, t) {
  return Q(), ce("svg", cf, t[0] || (t[0] = [
    se("path", { d: "m2 21 21-9L2 3v7l15 2-15 2z" }, null, -1)
  ]));
}
const ff = { render: af }, at = (e, t) => {
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
    const n = e, s = t, o = Ie(), r = De(
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
    ), (p, u) => (Q(), ce("div", uf, [
      e.longMessage ? (Q(), ce("textarea", {
        key: 0,
        value: e.message,
        class: "--fc-composer-input",
        placeholder: r.value,
        ref_key: "inputRef",
        ref: o,
        onInput: a
      }, null, 40, df)) : (Q(), ce("input", {
        key: 1,
        value: e.message,
        ref_key: "inputRef",
        ref: o,
        class: "--fc-composer-input",
        placeholder: r.value,
        onInput: a,
        onKeydown: Ga(l, ["enter"])
      }, null, 40, pf)),
      se("div", null, [
        se("button", {
          class: "--fc-composer-submit-button",
          onClick: i
        }, [
          ie(Ne(ff), { class: "--fc-icon" })
        ])
      ])
    ]));
  }
}, mf = /* @__PURE__ */ at(hf, [["__scopeId", "data-v-2b41d010"]]), gf = {
  __name: "ChatConversation",
  setup(e, { expose: t }) {
    const n = Ie(), s = () => {
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
    }), (r, i) => (Q(), ce("div", {
      class: "--fc-conversation-container",
      ref_key: "conversationMessagesRef",
      ref: n,
      onScroll: s
    }, [
      i[0] || (i[0] = se("div", { class: "--fc-conversation-padding" }, null, -1)),
      Jr(r.$slots, "default", {}, void 0)
    ], 544));
  }
}, vf = /* @__PURE__ */ at(gf, [["__scopeId", "data-v-068bd6b8"]]), yf = { class: "--fc-message-content-inner" }, bf = ["innerHTML"], _f = {
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
      return Q(), ce("div", {
        class: _t(["--fc-message-content-container", { "--fc-message-agent-user": e.message.userRole == "agent" }])
      }, [
        se("div", yf, [
          se("div", {
            class: "--fc-message-text",
            innerHTML: Ne(nf)(((l = e.message.content) == null ? void 0 : l.label) || e.message.content)
          }, null, 8, bf),
          e.message.options ? (Q(), ce("div", _f, [
            (Q(!0), ce(be, null, Yr(e.message.options, (a, p) => (Q(), ce("div", {
              key: p,
              class: "--fc-message-option-item",
              onClick: (u) => o(a, p)
            }, Qn((a == null ? void 0 : a.label) || a), 9, wf))), 128))
          ])) : et("", !0)
        ])
      ], 2);
    };
  }
}, Cf = /* @__PURE__ */ at(xf, [["__scopeId", "data-v-a8f7388b"]]), Sf = { class: "--fc-message-container" }, Tf = {
  key: 0,
  class: "--fc-message-user"
}, Of = ["src"], $f = {
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
    const n = e, s = t, o = De(() => {
      var i;
      return {
        component: ((i = lo[n.message.type]) == null ? void 0 : i.component) || Cf,
        ...n.message
      };
    }), r = (i) => {
      s("select-option", i);
    };
    return (i, l) => {
      var a, p, u, f;
      return Q(), ce("div", {
        class: _t({
          "--fc-message-agent-user": o.value.userRole == "agent",
          "--fc-message-host-user": o.value.userRole == "host"
        })
      }, [
        se("div", Sf, [
          o.value.userRole == "host" ? (Q(), ce("div", Tf, [
            se("div", {
              class: _t(["--fc-message-avatar", {
                "--fc-message-shadow": e.shadow
              }])
            }, [
              (p = (a = e.options) == null ? void 0 : a.hostUser) != null && p.avatarUrl ? (Q(), ce("img", {
                key: 0,
                src: (f = (u = e.options) == null ? void 0 : u.hostUser) == null ? void 0 : f.avatarUrl
              }, null, 8, Of)) : et("", !0)
            ], 2)
          ])) : et("", !0),
          o.value.component ? (Q(), Ut(dc(o.value.component), {
            key: 1,
            message: o.value,
            options: e.options,
            class: _t({
              "--fc-message-shadow": e.shadow
            }),
            onSelectOption: r
          }, null, 40, ["message", "options", "class"])) : et("", !0)
        ])
      ], 2);
    };
  }
}, Oi = /* @__PURE__ */ at($f, [["__scopeId", "data-v-a07f3d07"]]), Ef = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
};
function Mf(e, t) {
  return Q(), ce("svg", Ef, t[0] || (t[0] = [
    se("path", { d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }, null, -1)
  ]));
}
const If = { render: Mf }, Af = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
};
function Rf(e, t) {
  return Q(), ce("svg", Af, t[0] || (t[0] = [
    se("path", { d: "M12.5 8c-2.65 0-5.05 1-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8" }, null, -1)
  ]));
}
const Pf = { render: Rf }, Nf = { class: "--fc-header-container" }, Ff = { class: "--fc-header-user" }, Df = { class: "--fc-user-avatar" }, jf = ["src"], kf = { class: "--fc-user-name" }, Lf = { class: "--fc-header-buttons" }, Hf = { class: "--fc-close-button" }, Vf = {
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
      return Q(), ce("div", Nf, [
        se("div", Ff, [
          se("div", Df, [
            (i = (r = e.options) == null ? void 0 : r.hostUser) != null && i.avatarUrl ? (Q(), ce("img", {
              key: 0,
              src: (a = (l = e.options) == null ? void 0 : l.hostUser) == null ? void 0 : a.avatarUrl
            }, null, 8, jf)) : et("", !0)
          ]),
          se("div", kf, Qn((u = (p = e.options) == null ? void 0 : p.hostUser) == null ? void 0 : u.name), 1)
        ]),
        se("div", Lf, [
          se("button", {
            class: "--fc-reset-button",
            onClick: o[0] || (o[0] = (f) => n("click-reset-button"))
          }, [
            ie(Ne(Pf), { class: "--fc-icon" })
          ]),
          se("button", Hf, [
            ie(Ne(If), {
              class: "--fc-icon",
              onClick: o[1] || (o[1] = (f) => n("click-close-button"))
            })
          ])
        ])
      ]);
    };
  }
}, Bf = /* @__PURE__ */ at(Vf, [["__scopeId", "data-v-f55c8ea0"]]), Uf = {
  key: 0,
  class: "--fc-modal-backdrop"
}, Wf = {
  __name: "TheModal",
  props: {
    open: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    return (t, n) => e.open ? (Q(), ce("div", Uf, [
      Jr(t.$slots, "default", {}, void 0)
    ])) : et("", !0);
  }
}, Kf = /* @__PURE__ */ at(Wf, [["__scopeId", "data-v-4baeafde"]]), qf = {
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
    return (r, i) => (Q(), Ut(Kf, { open: e.open }, {
      default: dn(() => [
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
}, Gf = { class: "--fc-body" }, Yf = {
  key: 0,
  class: "skip-container"
}, Jf = {
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
    const s = e, o = n, r = De(() => {
      var L, M;
      return (M = (L = s.options) == null ? void 0 : L.styles) == null ? void 0 : M.chatWindow;
    }), i = Ie({
      open: !1
    }), l = De(() => s.scripts.map(xs)), a = De(() => ({
      scripts: l.value,
      currentScript: f.value,
      currentScriptIndex: E.value,
      latestUserMessage: h.value,
      conversationMessages: p.value,
      addConversationMessage: B
    })), p = Ie([]), u = Ie(""), f = Ie(xs()), h = Ie(vt()), g = Ie(vt()), E = De(() => l.value.map((M) => M.id).indexOf(f.value.id)), P = Ie(), oe = De(() => {
      let L = null;
      const M = l.value[E.value + 1];
      return M && (L = M.id), L;
    }), B = (L) => {
      p.value.push(L), setTimeout(() => P.value.scrollToBottom(), 100), L.userRole == "host" ? g.value = vt() : er(f.value) ? (g.value = { ...L }, f.value.answer = { ...L }, o("answered", f.value)) : g.value = vt();
    }, J = (L) => {
      let M;
      L ? M = l.value.find((K) => K.id == L) : M = l.value.find(() => !0), M && (f.value = M, B({
        userRole: "host",
        content: M.content,
        options: M.options,
        type: M.type,
        scriptId: M.id
      }), k());
    }, V = (L) => setTimeout(() => J(L), 300), ue = () => V(null), x = () => J(null), k = async (L = !0) => {
      var K;
      if (er(f.value) && !g.value.content && L)
        return !1;
      if (L) {
        const N = lo[f.value.type];
        if (N && (N != null && N.onValidate) && N.onValidate({
          context: a.value,
          script: f.value,
          answer: g.value,
          options: s.options
        }) === !1)
          return !1;
      }
      let M = f.value.next;
      if (typeof M == "function" && (M = M(a.value, g.value.content), M instanceof Promise))
        try {
          M = await M;
        } catch (N) {
          console.log(N);
          return;
        }
      if (typeof M == "object") {
        const N = ((K = g.value.content) == null ? void 0 : K.value) || g.value.content;
        M = M[N] || (M == null ? void 0 : M.__unmatched);
      }
      if (M || (M = oe.value), M) {
        V(M);
        return;
      }
    }, le = async () => {
      u.value.trim() && (B({
        userRole: "agent",
        content: u.value,
        type: "text"
      }), u.value = "", await k());
    }, z = async (L) => {
      const M = L.message.scriptId;
      if (M != f.value.id) {
        const K = l.value.find((N) => N.id == M);
        K && (f.value = K);
      }
      B({
        userRole: "agent",
        content: L.option,
        type: "text"
      }), await k();
    }, I = async () => {
      await k(!1);
    }, U = () => {
      i.value.open = !0;
    }, Y = () => {
      o("click-close-button");
    }, $ = () => {
      p.value = [], u.value = "", f.value = xs(), h.value = vt(), g.value = vt();
    }, te = () => {
      i.value.open = !1, $(), V(), o("after-reset");
    };
    return t({
      addConversationMessage: B,
      startConversationWithDelay: ue,
      startConversation: x,
      resetConversation: $,
      triggerSelectOptionInMessage: z,
      triggerClickSkipButton: I
    }), (L, M) => (Q(), ce("div", {
      class: "--fc-window",
      style: zn(r.value)
    }, [
      ie(Bf, {
        options: e.options,
        onClickResetButton: U,
        onClickCloseButton: Y
      }, null, 8, ["options"]),
      se("div", Gf, [
        ie(vf, {
          ref_key: "chatConversationRef",
          ref: P,
          options: e.options
        }, {
          default: dn(() => [
            (Q(!0), ce(be, null, Yr(p.value, (K, N) => (Q(), Ut(Oi, {
              key: N,
              message: K,
              options: e.options,
              onSelectOption: z
            }, null, 8, ["message", "options"]))), 128)),
            f.value.skippable ? (Q(), ce("div", Yf, [
              se("button", { onClick: I }, Qn(f.value.skipText), 1)
            ])) : et("", !0)
          ]),
          _: 1
        }, 8, ["options"]),
        ie(mf, {
          message: u.value,
          "onUpdate:message": M[0] || (M[0] = (K) => u.value = K),
          options: e.options,
          "long-message": f.value.longAnswer,
          onSubmit: le
        }, null, 8, ["message", "options", "long-message"]),
        ie(qf, {
          open: i.value.open,
          "onUpdate:open": M[1] || (M[1] = (K) => i.value.open = K),
          onConfirmed: te
        }, null, 8, ["open"])
      ])
    ], 4));
  }
}, zf = /* @__PURE__ */ at(Jf, [["__scopeId", "data-v-338792ff"]]), Qf = { class: "--fc-welcome-message-container" }, Xf = {
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
    const n = t, s = ({ message: o, option: r, optionIndex: i }) => {
      n("select-option", { message: o, option: r, optionIndex: i });
    };
    return (o, r) => (Q(), ce("div", Qf, [
      ie(Oi, {
        message: e.message,
        options: e.options,
        shadow: "",
        onSelectOption: s
      }, null, 8, ["message", "options"])
    ]));
  }
}, Zf = /* @__PURE__ */ at(Xf, [["__scopeId", "data-v-305f4535"]]), eu = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
};
function tu(e, t) {
  return Q(), ce("svg", eu, t[0] || (t[0] = [
    se("path", { d: "M15 4v7H5.17L4 12.17V4zm1-2H3a1 1 0 0 0-1 1v14l4-4h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m5 4h-2v9H6v2a1 1 0 0 0 1 1h11l4 4V7a1 1 0 0 0-1-1" }, null, -1)
  ]));
}
const nu = { render: tu }, su = { class: "--fc-application-inner" }, ou = { class: "--fc-absolute --fc-bottom-[100%] --fc-w-[400px]" }, ru = {
  key: 0,
  class: "--fc-absolute --fc-bottom-[100%] --fc-w-[350px]"
}, iu = {
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
      scripts: s,
      options: o
    } = wl(n), r = t, i = Ie(null), l = Ie(!1), a = Ie(!1), p = Ie(Vs()), u = De(() => {
      let x = n.scripts[0];
      return x && (x = vt(x)), x;
    }), f = De(() => {
      var x;
      return !!(u.value && // Has welcome message
      ((x = o.value) != null && x.welcomeMessage) && // Show welcome message in options
      a.value == !1);
    }), h = De(
      () => {
        var x, k;
        return ((k = (x = o.value) == null ? void 0 : x.embedded) == null ? void 0 : k.type) != "background";
      }
    ), g = (x) => {
      const k = {
        sessionId: p.value,
        data: x
      };
      r("answered", k);
    }, E = () => {
      l.value = !l.value, l.value ? P() : oe();
    }, P = () => {
      l.value = !0, a.value == !1 && i.value.startConversationWithDelay(), a.value = !0;
    }, oe = () => {
      l.value = !1;
    }, B = () => E(), J = (x) => {
      f.value != !1 && (l.value = !0, i.value.startConversation(), i.value.triggerSelectOptionInMessage(x), a.value = !0);
    }, V = () => {
      p.value = Vs();
    }, ue = () => {
      var U, Y, $, te, L, M, K, N;
      if (typeof document > "u")
        return !1;
      const x = document.querySelector(":root"), k = (Y = (U = o.value) == null ? void 0 : U.styles) == null ? void 0 : Y.primaryColor, le = (te = ($ = o.value) == null ? void 0 : $.styles) == null ? void 0 : te.primaryContrastColor, z = (M = (L = o.value) == null ? void 0 : L.styles) == null ? void 0 : M.secondaryColor, I = (N = (K = o.value) == null ? void 0 : K.styles) == null ? void 0 : N.secondaryContrastColor;
      k && (x == null || x.style.setProperty("--fc-primary-color", k)), le && (x == null || x.style.setProperty("--fc-primary-contrast-color", le)), z && (x == null || x.style.setProperty("--fc-secondary-color", z)), I && (x == null || x.style.setProperty("--fc-secondary-contrast-color", I));
    };
    return rn(o, () => ue(), {
      immediate: !0
    }), eo(
      () => console.log(
        "%c This website is using formchat.net to create chat boxes. Please visit https://formchat.net/ to get started.",
        "background: #222; color: #bada55"
      )
    ), (x, k) => {
      var le, z, I, U;
      return Q(), ce("div", {
        class: _t(["--fc-application --fc-formchat-dot-net", {
          "--fc-dark-theme": ((z = (le = Ne(o)) == null ? void 0 : le.styles) == null ? void 0 : z.theme) === "dark",
          "--fc-light-theme": ((U = (I = Ne(o)) == null ? void 0 : I.styles) == null ? void 0 : U.theme) === "light"
        }])
      }, [
        se("div", su, [
          ie(ko, {
            "enter-active-class": "--fc-transition --fc-duration-150 --fc-ease-in-out",
            "enter-from-class": "--fc-opacity-0 --fc-translate-y-4",
            "enter-to-class": "--fc-opacity-100 --fc-translate-y-0",
            "leave-active-class": "--fc-transition --fc-duration-150 --fc-ease-in-out",
            "leave-from-class": "--fc-opacity-100 --fc-translate-y-0",
            "leave-to-class": "--fc-opacity-0 --fc-translate-y-4"
          }, {
            default: dn(() => [
              Jl(se("div", ou, [
                ie(zf, {
                  ref_key: "chatWindowRef",
                  ref: i,
                  options: Ne(o),
                  scripts: Ne(s),
                  onAnswered: g,
                  onClickCloseButton: k[0] || (k[0] = (Y) => l.value = !1),
                  onAfterReset: V
                }, null, 8, ["options", "scripts"])
              ], 512), [
                [Ti, l.value]
              ])
            ]),
            _: 1
          }),
          ie(ko, {
            "enter-active-class": "--fc-transition --fc-duration-150 --fc-ease-in-out",
            "enter-from-class": "--fc-opacity-0 --fc-translate-y-4",
            "enter-to-class": "--fc-opacity-100 --fc-translate-y-0",
            "leave-active-class": "--fc-transition --fc-duration-150 --fc-ease-in-out",
            "leave-from-class": "--fc-opacity-100 --fc-translate-y-0",
            "leave-to-class": "--fc-opacity-0 --fc-translate-y-4"
          }, {
            default: dn(() => [
              f.value ? (Q(), ce("div", ru, [
                ie(Zf, {
                  message: u.value,
                  options: Ne(o),
                  onSelectOption: J
                }, null, 8, ["message", "options"])
              ])) : et("", !0)
            ]),
            _: 1
          })
        ]),
        h.value ? (Q(), ce("div", {
          key: 0,
          class: "--fc-bubble-container",
          onClick: B
        }, [
          ie(Ne(nu), { class: "--fc-bubble-icon" })
        ])) : et("", !0)
      ], 2);
    };
  }
}, lu = /* @__PURE__ */ at(iu, [["__scopeId", "data-v-7a22d2dc"]]);
window.createFormChat = (e, t) => za(lu, t).mount(e);
