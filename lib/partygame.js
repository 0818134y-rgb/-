//region block: polyfills
(function () {
  if (typeof globalThis === 'object')
    return;
  Object.defineProperty(Object.prototype, '__magic__', {get: function () {
    return this;
  }, configurable: true});
  __magic__.globalThis = __magic__;
  delete Object.prototype.__magic__;
}());
if (typeof Math.imul === 'undefined') {
  Math.imul = function imul(a, b) {
    return (a & 4.29490176E9) * (b & 65535) + (a & 65535) * (b | 0) | 0;
  };
}
if (typeof ArrayBuffer.isView === 'undefined') {
  ArrayBuffer.isView = function (a) {
    return a != null && a.__proto__ != null && a.__proto__.__proto__ === Int8Array.prototype.__proto__;
  };
}
if (typeof Array.prototype.fill === 'undefined') {
  // Polyfill from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill#Polyfill
  Object.defineProperty(Array.prototype, 'fill', {value: function (value) {
    // Steps 1-2.
    if (this == null) {
      throw new TypeError('this is null or not defined');
    }
    var O = Object(this); // Steps 3-5.
    var len = O.length >>> 0; // Steps 6-7.
    var start = arguments[1];
    var relativeStart = start >> 0; // Step 8.
    var k = relativeStart < 0 ? Math.max(len + relativeStart, 0) : Math.min(relativeStart, len); // Steps 9-10.
    var end = arguments[2];
    var relativeEnd = end === undefined ? len : end >> 0; // Step 11.
    var finalValue = relativeEnd < 0 ? Math.max(len + relativeEnd, 0) : Math.min(relativeEnd, len); // Step 12.
    while (k < finalValue) {
      O[k] = value;
      k++;
    }
    ; // Step 13.
    return O;
  }});
}
[Int8Array, Int16Array, Uint16Array, Int32Array, Float32Array, Float64Array].forEach(function (TypedArray) {
  if (typeof TypedArray.prototype.fill === 'undefined') {
    Object.defineProperty(TypedArray.prototype, 'fill', {value: Array.prototype.fill});
  }
});
if (typeof Math.clz32 === 'undefined') {
  Math.clz32 = function (log, LN2) {
    return function (x) {
      var asUint = x >>> 0;
      if (asUint === 0) {
        return 32;
      }
      return 31 - (log(asUint) / LN2 | 0) | 0; // the "| 0" acts like math.floor
    };
  }(Math.log, Math.LN2);
}
if (typeof String.prototype.endsWith === 'undefined') {
  Object.defineProperty(String.prototype, 'endsWith', {value: function (searchString, position) {
    var subjectString = this.toString();
    if (position === undefined || position > subjectString.length) {
      position = subjectString.length;
    }
    position -= searchString.length;
    var lastIndex = subjectString.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
  }});
}
if (typeof String.prototype.startsWith === 'undefined') {
  Object.defineProperty(String.prototype, 'startsWith', {value: function (searchString, position) {
    position = position || 0;
    return this.lastIndexOf(searchString, position) === position;
  }});
}
//endregion
(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['PartyGame:shared'] = factory(typeof globalThis['PartyGame:shared'] === 'undefined' ? {} : globalThis['PartyGame:shared']);
}(function (_) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var isView = ArrayBuffer.isView;
  var clz32 = Math.clz32;
  //endregion
  //region block: pre-declaration
  class CharSequence {}
  class Comparable {}
  class Number_0 {}
  class Error_0 extends Error {
    static va() {
      var $this = createExternalThis(this, Error, [null]);
      setPropertiesToThrowableInstance($this);
      init_kotlin_Error($this);
      return $this;
    }
    static i(message) {
      var $this = createExternalThis(this, Error, [message]);
      setPropertiesToThrowableInstance($this, message);
      init_kotlin_Error($this);
      return $this;
    }
  }
  class IrLinkageError extends Error_0 {
    static g(message) {
      var $this = this.i(message);
      captureStack($this, $this.f_1);
      return $this;
    }
  }
  class Char {}
  class Collection {}
  class KtList {}
  class Entry {}
  class KtMap {}
  class KtSet {}
  class MutableIterable {}
  class Companion {}
  class Enum {
    constructor(name, ordinal) {
      this.k2_1 = name;
      this.l2_1 = ordinal;
    }
    m2(other) {
      return compareTo(this.l2_1, other.l2_1);
    }
    d(other) {
      return this.m2(other instanceof Enum ? other : THROW_CCE());
    }
    equals(other) {
      return this === other;
    }
    hashCode() {
      return identityHashCode(this);
    }
    toString() {
      return this.k2_1;
    }
  }
  class Companion_0 {
    constructor() {
      Companion_instance_0 = this;
      this.n2_1 = new Long(0, -2147483648);
      this.o2_1 = new Long(-1, 2147483647);
      this.p2_1 = 8;
      this.q2_1 = 64;
    }
  }
  class Long extends Number_0 {
    constructor(low, high) {
      Companion_getInstance_0();
      super();
      this.r2_1 = low;
      this.s2_1 = high;
    }
    t2(other) {
      return compare(this, other);
    }
    d(other) {
      return this.t2(other instanceof Long ? other : THROW_CCE());
    }
    toString() {
      return toStringImpl(this, 10);
    }
    equals(other) {
      var tmp;
      if (other instanceof Long) {
        tmp = equalsLong(this, other);
      } else {
        tmp = false;
      }
      return tmp;
    }
    hashCode() {
      return hashCode(this);
    }
    valueOf() {
      return toNumber(this);
    }
  }
  class FunctionAdapter {}
  class arrayIterator$1 {
    constructor($array) {
      this.w2_1 = $array;
      this.v2_1 = 0;
    }
    f1() {
      return !(this.v2_1 === this.w2_1.length);
    }
    g1() {
      var tmp;
      if (!(this.v2_1 === this.w2_1.length)) {
        var _unary__edvuaz = this.v2_1;
        this.v2_1 = _unary__edvuaz + 1 | 0;
        tmp = this.w2_1[_unary__edvuaz];
      } else {
        throw NoSuchElementException.v('' + this.v2_1);
      }
      return tmp;
    }
  }
  class StringCompanionObject {}
  class Digit {
    constructor() {
      Digit_instance = this;
      var tmp = this;
      // Inline function 'kotlin.intArrayOf' call
      tmp.s3_1 = new Int32Array([48, 1632, 1776, 1984, 2406, 2534, 2662, 2790, 2918, 3046, 3174, 3302, 3430, 3558, 3664, 3792, 3872, 4160, 4240, 6112, 6160, 6470, 6608, 6784, 6800, 6992, 7088, 7232, 7248, 42528, 43216, 43264, 43472, 43504, 43600, 44016, 65296]);
    }
  }
  class Comparator {}
  class Unit {
    toString() {
      return 'kotlin.Unit';
    }
  }
  class AbstractCollection {
    static e4($box) {
      return createThis(this, $box);
    }
    p1(element) {
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.any' call
        var tmp;
        if (isInterface(this, Collection)) {
          tmp = this.k1();
        } else {
          tmp = false;
        }
        if (tmp) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
        var _iterator__ex2g4s = this.e1();
        while (_iterator__ex2g4s.f1()) {
          var element_0 = _iterator__ex2g4s.g1();
          if (equals(element_0, element)) {
            tmp$ret$0 = true;
            break $l$block_0;
          }
        }
        tmp$ret$0 = false;
      }
      return tmp$ret$0;
    }
    b2(elements) {
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.all' call
        var tmp;
        if (isInterface(elements, Collection)) {
          tmp = elements.k1();
        } else {
          tmp = false;
        }
        if (tmp) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
        var _iterator__ex2g4s = elements.e1();
        while (_iterator__ex2g4s.f1()) {
          var element = _iterator__ex2g4s.g1();
          if (!this.p1(element)) {
            tmp$ret$0 = false;
            break $l$block_0;
          }
        }
        tmp$ret$0 = true;
      }
      return tmp$ret$0;
    }
    k1() {
      return this.j1() === 0;
    }
    toString() {
      return joinToString_0(this, ', ', '[', ']', VOID, VOID, AbstractCollection$toString$lambda(this));
    }
    toArray() {
      return collectionToArray(this);
    }
  }
  class AbstractMutableCollection extends AbstractCollection {
    static d4() {
      return this.e4();
    }
    f4(element) {
      this.g4();
      var iterator = this.e1();
      while (iterator.f1()) {
        if (equals(iterator.g1(), element)) {
          iterator.h4();
          return true;
        }
      }
      return false;
    }
    q1(elements) {
      this.g4();
      var modified = false;
      var _iterator__ex2g4s = elements.e1();
      while (_iterator__ex2g4s.f1()) {
        var element = _iterator__ex2g4s.g1();
        if (this.r(element))
          modified = true;
      }
      return modified;
    }
    i4(elements) {
      this.g4();
      var tmp = isInterface(this, MutableIterable) ? this : THROW_CCE();
      return removeAll_0(tmp, AbstractMutableCollection$removeAll$lambda(elements));
    }
    j4() {
      this.g4();
      var iterator = this.e1();
      while (iterator.f1()) {
        iterator.g1();
        iterator.h4();
      }
    }
    toJSON() {
      return this.toArray();
    }
    g4() {
    }
  }
  class IteratorImpl {
    constructor($outer, $box) {
      boxApply(this, $box);
      this.m4_1 = $outer;
      this.k4_1 = 0;
      this.l4_1 = -1;
    }
    f1() {
      return this.k4_1 < this.m4_1.j1();
    }
    g1() {
      if (!this.f1())
        throw NoSuchElementException.n4();
      var tmp = this;
      var _unary__edvuaz = this.k4_1;
      this.k4_1 = _unary__edvuaz + 1 | 0;
      tmp.l4_1 = _unary__edvuaz;
      return this.m4_1.l1(this.l4_1);
    }
    h4() {
      // Inline function 'kotlin.check' call
      if (!!(this.l4_1 === -1)) {
        var message = 'Call next() or previous() before removing element from the iterator.';
        throw IllegalStateException.c3(toString_1(message));
      }
      this.m4_1.p4(this.l4_1);
      this.k4_1 = this.l4_1;
      this.l4_1 = -1;
    }
  }
  class ListIteratorImpl extends IteratorImpl {
    constructor($outer, index, $box) {
      if ($box === VOID)
        $box = {};
      $box.t4_1 = $outer;
      super($outer, $box);
      Companion_instance_4.u4(index, this.t4_1.j1());
      this.k4_1 = index;
    }
  }
  class AbstractMutableList extends AbstractMutableCollection {
    static v4() {
      var $this = this.d4();
      $this.o4_1 = 0;
      return $this;
    }
    r(element) {
      this.g4();
      this.w4(this.j1(), element);
      return true;
    }
    j4() {
      this.g4();
      this.x4(0, this.j1());
    }
    e1() {
      return new IteratorImpl(this);
    }
    p1(element) {
      return this.a2(element) >= 0;
    }
    a2(element) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.collections.indexOfFirst' call
        var index = 0;
        var _iterator__ex2g4s = this.e1();
        while (_iterator__ex2g4s.f1()) {
          var item = _iterator__ex2g4s.g1();
          if (equals(item, element)) {
            tmp$ret$1 = index;
            break $l$block;
          }
          index = index + 1 | 0;
        }
        tmp$ret$1 = -1;
      }
      return tmp$ret$1;
    }
    y4(index) {
      return new ListIteratorImpl(this, index);
    }
    x4(fromIndex, toIndex) {
      var iterator = this.y4(fromIndex);
      // Inline function 'kotlin.repeat' call
      var times = toIndex - fromIndex | 0;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          iterator.g1();
          iterator.h4();
        }
         while (inductionVariable < times);
    }
    equals(other) {
      if (other === this)
        return true;
      if (!(!(other == null) ? isInterface(other, KtList) : false))
        return false;
      return Companion_instance_4.z4(this, other);
    }
    hashCode() {
      return Companion_instance_4.a5(this);
    }
  }
  class AbstractMap {
    static i5() {
      var $this = createThis(this);
      $this.g5_1 = null;
      $this.h5_1 = null;
      return $this;
    }
    e2(key) {
      return !(implFindEntry(this, key) == null);
    }
    f2(value) {
      var tmp0 = this.j2();
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.any' call
        var tmp;
        if (isInterface(tmp0, Collection)) {
          tmp = tmp0.k1();
        } else {
          tmp = false;
        }
        if (tmp) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
        var _iterator__ex2g4s = tmp0.e1();
        while (_iterator__ex2g4s.f1()) {
          var element = _iterator__ex2g4s.g1();
          if (equals(element.d2(), value)) {
            tmp$ret$0 = true;
            break $l$block_0;
          }
        }
        tmp$ret$0 = false;
      }
      return tmp$ret$0;
    }
    q5(entry) {
      if (!(!(entry == null) ? isInterface(entry, Entry) : false))
        return false;
      var key = entry.c2();
      var value = entry.d2();
      // Inline function 'kotlin.collections.get' call
      var ourValue = (isInterface(this, KtMap) ? this : THROW_CCE()).g2(key);
      if (!equals(value, ourValue)) {
        return false;
      }
      var tmp;
      if (ourValue == null) {
        // Inline function 'kotlin.collections.containsKey' call
        tmp = !(isInterface(this, KtMap) ? this : THROW_CCE()).e2(key);
      } else {
        tmp = false;
      }
      if (tmp) {
        return false;
      }
      return true;
    }
    equals(other) {
      if (other === this)
        return true;
      if (!(!(other == null) ? isInterface(other, KtMap) : false))
        return false;
      if (!(this.j1() === other.j1()))
        return false;
      var tmp0 = other.j2();
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.all' call
        var tmp;
        if (isInterface(tmp0, Collection)) {
          tmp = tmp0.k1();
        } else {
          tmp = false;
        }
        if (tmp) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
        var _iterator__ex2g4s = tmp0.e1();
        while (_iterator__ex2g4s.f1()) {
          var element = _iterator__ex2g4s.g1();
          if (!this.q5(element)) {
            tmp$ret$0 = false;
            break $l$block_0;
          }
        }
        tmp$ret$0 = true;
      }
      return tmp$ret$0;
    }
    g2(key) {
      var tmp0_safe_receiver = implFindEntry(this, key);
      return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.d2();
    }
    hashCode() {
      return hashCode_0(this.j2());
    }
    k1() {
      return this.j1() === 0;
    }
    j1() {
      return this.j2().j1();
    }
    h2() {
      if (this.g5_1 == null) {
        var tmp = this;
        tmp.g5_1 = AbstractMap$keys$1.hd(this);
      }
      return ensureNotNull(this.g5_1);
    }
    toString() {
      var tmp = this.j2();
      return joinToString_0(tmp, ', ', '{', '}', VOID, VOID, AbstractMap$toString$lambda(this));
    }
    i2() {
      if (this.h5_1 == null) {
        var tmp = this;
        tmp.h5_1 = AbstractMap$values$1.kd(this);
      }
      return ensureNotNull(this.h5_1);
    }
  }
  class AbstractMutableMap extends AbstractMap {
    static f5() {
      var $this = this.i5();
      $this.d5_1 = null;
      $this.e5_1 = null;
      return $this;
    }
    j5() {
      return HashMapKeysDefault.l5(this);
    }
    m5() {
      return HashMapValuesDefault.o5(this);
    }
    h2() {
      var tmp0_elvis_lhs = this.d5_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var this_0 = this.j5();
        this.d5_1 = this_0;
        tmp = this_0;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      return tmp;
    }
    i2() {
      var tmp0_elvis_lhs = this.e5_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var this_0 = this.m5();
        this.e5_1 = this_0;
        tmp = this_0;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      return tmp;
    }
    j4() {
      this.j2().j4();
    }
    p5(key) {
      this.g4();
      var iter = this.j2().e1();
      while (iter.f1()) {
        var entry = iter.g1();
        var k = entry.c2();
        if (equals(key, k)) {
          var value = entry.d2();
          iter.h4();
          return value;
        }
      }
      return null;
    }
    g4() {
    }
  }
  class AbstractMutableSet extends AbstractMutableCollection {
    static r5() {
      return this.d4();
    }
    equals(other) {
      if (other === this)
        return true;
      if (!(!(other == null) ? isInterface(other, KtSet) : false))
        return false;
      return Companion_instance_6.s5(this, other);
    }
    hashCode() {
      return Companion_instance_6.t5(this);
    }
  }
  class Companion_1 {
    constructor() {
      Companion_instance_1 = this;
      var tmp = this;
      // Inline function 'kotlin.also' call
      var this_0 = ArrayList.d1(0);
      this_0.p_1 = true;
      tmp.u5_1 = this_0;
    }
  }
  class RandomAccess {}
  class ArrayList extends AbstractMutableList {
    static p3(array) {
      Companion_getInstance_1();
      var $this = this.v4();
      $this.o_1 = array;
      $this.p_1 = false;
      return $this;
    }
    static o1() {
      Companion_getInstance_1();
      // Inline function 'kotlin.emptyArray' call
      var tmp$ret$0 = [];
      return this.p3(tmp$ret$0);
    }
    static d1(initialCapacity) {
      Companion_getInstance_1();
      // Inline function 'kotlin.emptyArray' call
      var tmp$ret$0 = [];
      var $this = this.p3(tmp$ret$0);
      // Inline function 'kotlin.require' call
      if (!(initialCapacity >= 0)) {
        var message = 'Negative initial capacity: ' + initialCapacity;
        throw IllegalArgumentException.z(toString_1(message));
      }
      return $this;
    }
    static q(elements) {
      Companion_getInstance_1();
      // Inline function 'kotlin.collections.toTypedArray' call
      var tmp$ret$0 = copyToArray(elements);
      return this.p3(tmp$ret$0);
    }
    w5(minCapacity) {
    }
    j1() {
      return this.o_1.length;
    }
    l1(index) {
      var tmp = this.o_1[rangeCheck(this, index)];
      return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    }
    r1(index, element) {
      this.g4();
      rangeCheck(this, index);
      // Inline function 'kotlin.apply' call
      var this_0 = this.o_1[index];
      this.o_1[index] = element;
      var tmp = this_0;
      return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    }
    r(element) {
      this.g4();
      // Inline function 'kotlin.js.asDynamic' call
      this.o_1.push(element);
      this.o4_1 = this.o4_1 + 1 | 0;
      return true;
    }
    w4(index, element) {
      this.g4();
      // Inline function 'kotlin.js.asDynamic' call
      this.o_1.splice(insertionRangeCheck(this, index), 0, element);
      this.o4_1 = this.o4_1 + 1 | 0;
    }
    q1(elements) {
      this.g4();
      if (elements.k1())
        return false;
      var offset = increaseLength(this, elements.j1());
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var _iterator__ex2g4s = elements.e1();
      while (_iterator__ex2g4s.f1()) {
        var item = _iterator__ex2g4s.g1();
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        var index_0 = checkIndexOverflow(_unary__edvuaz);
        this.o_1[offset + index_0 | 0] = item;
      }
      this.o4_1 = this.o4_1 + 1 | 0;
      return true;
    }
    p4(index) {
      this.g4();
      rangeCheck(this, index);
      this.o4_1 = this.o4_1 + 1 | 0;
      var tmp;
      if (index === get_lastIndex_2(this)) {
        // Inline function 'kotlin.js.asDynamic' call
        tmp = this.o_1.pop();
      } else {
        // Inline function 'kotlin.js.asDynamic' call
        tmp = this.o_1.splice(index, 1)[0];
      }
      return tmp;
    }
    f4(element) {
      this.g4();
      var inductionVariable = 0;
      var last = this.o_1.length - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (equals(this.o_1[index], element)) {
            // Inline function 'kotlin.js.asDynamic' call
            this.o_1.splice(index, 1);
            this.o4_1 = this.o4_1 + 1 | 0;
            return true;
          }
        }
         while (inductionVariable <= last);
      return false;
    }
    x4(fromIndex, toIndex) {
      this.g4();
      this.o4_1 = this.o4_1 + 1 | 0;
      // Inline function 'kotlin.js.asDynamic' call
      this.o_1.splice(fromIndex, toIndex - fromIndex | 0);
    }
    j4() {
      this.g4();
      var tmp = this;
      // Inline function 'kotlin.emptyArray' call
      tmp.o_1 = [];
      this.o4_1 = this.o4_1 + 1 | 0;
    }
    a2(element) {
      return indexOf(this.o_1, element);
    }
    toString() {
      return arrayToString(this.o_1);
    }
    x5() {
      return [].slice.call(this.o_1);
    }
    toArray() {
      return this.x5();
    }
    g4() {
      if (this.p_1)
        throw UnsupportedOperationException.b6();
    }
  }
  class HashMap extends AbstractMutableMap {
    static i6(internalMap) {
      var $this = this.f5();
      init_kotlin_collections_HashMap($this);
      $this.g6_1 = internalMap;
      return $this;
    }
    static j6() {
      return this.i6(InternalHashMap.u6());
    }
    static v6(initialCapacity, loadFactor) {
      return this.i6(InternalHashMap.w6(initialCapacity, loadFactor));
    }
    static x6(initialCapacity) {
      return this.v6(initialCapacity, 1.0);
    }
    j4() {
      this.g6_1.j4();
    }
    e2(key) {
      return this.g6_1.y6(key);
    }
    f2(value) {
      return this.g6_1.f2(value);
    }
    j5() {
      return HashMapKeys.a7(this.g6_1);
    }
    m5() {
      return HashMapValues.c7(this.g6_1);
    }
    j2() {
      var tmp0_elvis_lhs = this.h6_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var this_0 = HashMapEntrySet.e7(this.g6_1);
        this.h6_1 = this_0;
        tmp = this_0;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      return tmp;
    }
    g2(key) {
      return this.g6_1.g2(key);
    }
    c4(key, value) {
      return this.g6_1.c4(key, value);
    }
    p5(key) {
      return this.g6_1.p5(key);
    }
    j1() {
      return this.g6_1.j1();
    }
  }
  class HashMapKeys extends AbstractMutableSet {
    static a7(backing) {
      var $this = this.r5();
      $this.z6_1 = backing;
      return $this;
    }
    j1() {
      return this.z6_1.j1();
    }
    k1() {
      return this.z6_1.j1() === 0;
    }
    p1(element) {
      return this.z6_1.y6(element);
    }
    j4() {
      return this.z6_1.j4();
    }
    r(element) {
      throw UnsupportedOperationException.b6();
    }
    q1(elements) {
      throw UnsupportedOperationException.b6();
    }
    f4(element) {
      return this.z6_1.f7(element);
    }
    e1() {
      return this.z6_1.g7();
    }
    g4() {
      return this.z6_1.h7();
    }
  }
  class HashMapValues extends AbstractMutableCollection {
    static c7(backing) {
      var $this = this.d4();
      $this.b7_1 = backing;
      return $this;
    }
    j1() {
      return this.b7_1.j1();
    }
    k1() {
      return this.b7_1.j1() === 0;
    }
    i7(element) {
      return this.b7_1.f2(element);
    }
    p1(element) {
      if (!(element == null ? true : !(element == null)))
        return false;
      return this.i7((element == null ? true : !(element == null)) ? element : THROW_CCE());
    }
    j7(element) {
      throw UnsupportedOperationException.b6();
    }
    r(element) {
      return this.j7((element == null ? true : !(element == null)) ? element : THROW_CCE());
    }
    k7(elements) {
      throw UnsupportedOperationException.b6();
    }
    q1(elements) {
      return this.k7(elements);
    }
    e1() {
      return this.b7_1.l7();
    }
    g4() {
      return this.b7_1.h7();
    }
  }
  class HashMapEntrySetBase extends AbstractMutableSet {
    static n7(backing) {
      var $this = this.r5();
      $this.m7_1 = backing;
      return $this;
    }
    j1() {
      return this.m7_1.j1();
    }
    k1() {
      return this.m7_1.j1() === 0;
    }
    p7(element) {
      return this.m7_1.s7(element);
    }
    p1(element) {
      if (!(!(element == null) ? isInterface(element, Entry) : false))
        return false;
      return this.p7((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
    }
    j4() {
      return this.m7_1.j4();
    }
    q7(element) {
      throw UnsupportedOperationException.b6();
    }
    r(element) {
      return this.q7((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
    }
    q1(elements) {
      throw UnsupportedOperationException.b6();
    }
    r7(element) {
      return this.m7_1.t7(element);
    }
    f4(element) {
      if (!(!(element == null) ? isInterface(element, Entry) : false))
        return false;
      return this.r7((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
    }
    b2(elements) {
      return this.m7_1.u7(elements);
    }
    g4() {
      return this.m7_1.h7();
    }
  }
  class HashMapEntrySet extends HashMapEntrySetBase {
    static e7(backing) {
      return this.n7(backing);
    }
    e1() {
      return this.m7_1.o7();
    }
  }
  class HashMapKeysDefault$iterator$1 {
    constructor($entryIterator) {
      this.v7_1 = $entryIterator;
    }
    f1() {
      return this.v7_1.f1();
    }
    g1() {
      return this.v7_1.g1().c2();
    }
    h4() {
      return this.v7_1.h4();
    }
  }
  class HashMapKeysDefault extends AbstractMutableSet {
    static l5(backingMap) {
      var $this = this.r5();
      $this.k5_1 = backingMap;
      return $this;
    }
    w7(element) {
      throw UnsupportedOperationException.x7('Add is not supported on keys');
    }
    r(element) {
      return this.w7((element == null ? true : !(element == null)) ? element : THROW_CCE());
    }
    j4() {
      return this.k5_1.j4();
    }
    y6(element) {
      return this.k5_1.e2(element);
    }
    p1(element) {
      if (!(element == null ? true : !(element == null)))
        return false;
      return this.y6((element == null ? true : !(element == null)) ? element : THROW_CCE());
    }
    e1() {
      var entryIterator = this.k5_1.j2().e1();
      return new HashMapKeysDefault$iterator$1(entryIterator);
    }
    p5(element) {
      this.g4();
      if (this.k5_1.e2(element)) {
        this.k5_1.p5(element);
        return true;
      }
      return false;
    }
    f4(element) {
      if (!(element == null ? true : !(element == null)))
        return false;
      return this.p5((element == null ? true : !(element == null)) ? element : THROW_CCE());
    }
    j1() {
      return this.k5_1.j1();
    }
    g4() {
      return this.k5_1.g4();
    }
  }
  class HashMapValuesDefault$iterator$1 {
    constructor($entryIterator) {
      this.y7_1 = $entryIterator;
    }
    f1() {
      return this.y7_1.f1();
    }
    g1() {
      return this.y7_1.g1().d2();
    }
    h4() {
      return this.y7_1.h4();
    }
  }
  class HashMapValuesDefault extends AbstractMutableCollection {
    static o5(backingMap) {
      var $this = this.d4();
      $this.n5_1 = backingMap;
      return $this;
    }
    j7(element) {
      throw UnsupportedOperationException.x7('Add is not supported on values');
    }
    r(element) {
      return this.j7((element == null ? true : !(element == null)) ? element : THROW_CCE());
    }
    i7(element) {
      return this.n5_1.f2(element);
    }
    p1(element) {
      if (!(element == null ? true : !(element == null)))
        return false;
      return this.i7((element == null ? true : !(element == null)) ? element : THROW_CCE());
    }
    e1() {
      var entryIterator = this.n5_1.j2().e1();
      return new HashMapValuesDefault$iterator$1(entryIterator);
    }
    j1() {
      return this.n5_1.j1();
    }
    g4() {
      return this.n5_1.g4();
    }
  }
  class HashSet extends AbstractMutableSet {
    static z7(map) {
      var $this = this.r5();
      init_kotlin_collections_HashSet($this);
      $this.h1_1 = map;
      return $this;
    }
    static a8() {
      return this.z7(InternalHashMap.u6());
    }
    static b8(elements) {
      var $this = this.z7(InternalHashMap.c8(elements.j1()));
      var _iterator__ex2g4s = elements.e1();
      while (_iterator__ex2g4s.f1()) {
        var element = _iterator__ex2g4s.g1();
        $this.h1_1.c4(element, true);
      }
      return $this;
    }
    static d8(initialCapacity, loadFactor) {
      return this.z7(InternalHashMap.w6(initialCapacity, loadFactor));
    }
    static i1(initialCapacity) {
      return this.d8(initialCapacity, 1.0);
    }
    r(element) {
      return this.h1_1.c4(element, true) == null;
    }
    j4() {
      this.h1_1.j4();
    }
    p1(element) {
      return this.h1_1.y6(element);
    }
    k1() {
      return this.h1_1.j1() === 0;
    }
    e1() {
      return this.h1_1.g7();
    }
    f4(element) {
      return !(this.h1_1.p5(element) == null);
    }
    j1() {
      return this.h1_1.j1();
    }
  }
  class Companion_2 {
    constructor() {
      this.p8_1 = -1640531527;
      this.q8_1 = 8;
      this.r8_1 = 2;
      this.s8_1 = -1;
    }
  }
  class Itr {
    constructor(map) {
      this.t8_1 = map;
      this.u8_1 = 0;
      this.v8_1 = -1;
      this.w8_1 = this.t8_1.r6_1;
      this.x8();
    }
    x8() {
      while (this.u8_1 < this.t8_1.p6_1 && this.t8_1.m6_1[this.u8_1] < 0) {
        this.u8_1 = this.u8_1 + 1 | 0;
      }
    }
    f1() {
      return this.u8_1 < this.t8_1.p6_1;
    }
    h4() {
      this.y8();
      // Inline function 'kotlin.check' call
      if (!!(this.v8_1 === -1)) {
        var message = 'Call next() before removing element from the iterator.';
        throw IllegalStateException.c3(toString_1(message));
      }
      this.t8_1.h7();
      removeEntryAt(this.t8_1, this.v8_1);
      this.v8_1 = -1;
      this.w8_1 = this.t8_1.r6_1;
    }
    y8() {
      if (!(this.t8_1.r6_1 === this.w8_1))
        throw ConcurrentModificationException.z8();
    }
  }
  class KeysItr extends Itr {
    g1() {
      this.y8();
      if (this.u8_1 >= this.t8_1.p6_1)
        throw NoSuchElementException.n4();
      var tmp = this;
      var _unary__edvuaz = this.u8_1;
      this.u8_1 = _unary__edvuaz + 1 | 0;
      tmp.v8_1 = _unary__edvuaz;
      var result = this.t8_1.k6_1[this.v8_1];
      this.x8();
      return result;
    }
  }
  class ValuesItr extends Itr {
    g1() {
      this.y8();
      if (this.u8_1 >= this.t8_1.p6_1)
        throw NoSuchElementException.n4();
      var tmp = this;
      var _unary__edvuaz = this.u8_1;
      this.u8_1 = _unary__edvuaz + 1 | 0;
      tmp.v8_1 = _unary__edvuaz;
      var result = ensureNotNull(this.t8_1.l6_1)[this.v8_1];
      this.x8();
      return result;
    }
  }
  class EntriesItr extends Itr {
    g1() {
      this.y8();
      if (this.u8_1 >= this.t8_1.p6_1)
        throw NoSuchElementException.n4();
      var tmp = this;
      var _unary__edvuaz = this.u8_1;
      this.u8_1 = _unary__edvuaz + 1 | 0;
      tmp.v8_1 = _unary__edvuaz;
      var result = new EntryRef(this.t8_1, this.v8_1);
      this.x8();
      return result;
    }
    m9() {
      if (this.u8_1 >= this.t8_1.p6_1)
        throw NoSuchElementException.n4();
      var tmp = this;
      var _unary__edvuaz = this.u8_1;
      this.u8_1 = _unary__edvuaz + 1 | 0;
      tmp.v8_1 = _unary__edvuaz;
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver = this.t8_1.k6_1[this.v8_1];
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode_0(tmp0_safe_receiver);
      var tmp_0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver_0 = ensureNotNull(this.t8_1.l6_1)[this.v8_1];
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode_0(tmp0_safe_receiver_0);
      var result = tmp_0 ^ (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0);
      this.x8();
      return result;
    }
    n9(sb) {
      if (this.u8_1 >= this.t8_1.p6_1)
        throw NoSuchElementException.n4();
      var tmp = this;
      var _unary__edvuaz = this.u8_1;
      this.u8_1 = _unary__edvuaz + 1 | 0;
      tmp.v8_1 = _unary__edvuaz;
      var key = this.t8_1.k6_1[this.v8_1];
      if (equals(key, this.t8_1))
        sb.p9('(this Map)');
      else
        sb.o9(key);
      sb.q9(_Char___init__impl__6a9atx(61));
      var value = ensureNotNull(this.t8_1.l6_1)[this.v8_1];
      if (equals(value, this.t8_1))
        sb.p9('(this Map)');
      else
        sb.o9(value);
      this.x8();
    }
  }
  class EntryRef {
    constructor(map, index) {
      this.i8_1 = map;
      this.j8_1 = index;
      this.k8_1 = this.i8_1.r6_1;
    }
    c2() {
      checkForComodification(this);
      return this.i8_1.k6_1[this.j8_1];
    }
    d2() {
      checkForComodification(this);
      return ensureNotNull(this.i8_1.l6_1)[this.j8_1];
    }
    equals(other) {
      var tmp;
      var tmp_0;
      if (!(other == null) ? isInterface(other, Entry) : false) {
        tmp_0 = equals(other.c2(), this.c2());
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = equals(other.d2(), this.d2());
      } else {
        tmp = false;
      }
      return tmp;
    }
    hashCode() {
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver = this.c2();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode_0(tmp0_safe_receiver);
      var tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver_0 = this.d2();
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode_0(tmp0_safe_receiver_0);
      return tmp ^ (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0);
    }
    toString() {
      return toString_0(this.c2()) + '=' + toString_0(this.d2());
    }
  }
  class InternalMap {}
  function containsAllEntries(m) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(m, Collection)) {
        tmp = m.k1();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var _iterator__ex2g4s = m.e1();
      while (_iterator__ex2g4s.f1()) {
        var element = _iterator__ex2g4s.g1();
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var entry = element;
        var tmp_0;
        if (!(entry == null) ? isInterface(entry, Entry) : false) {
          tmp_0 = this.t9(entry);
        } else {
          tmp_0 = false;
        }
        if (!tmp_0) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  }
  class InternalHashMap {
    static r9(keysArray, valuesArray, presenceArray, hashArray, maxProbeDistance, length) {
      var $this = createThis(this);
      $this.k6_1 = keysArray;
      $this.l6_1 = valuesArray;
      $this.m6_1 = presenceArray;
      $this.n6_1 = hashArray;
      $this.o6_1 = maxProbeDistance;
      $this.p6_1 = length;
      $this.q6_1 = computeShift(Companion_instance_2, _get_hashSize__tftcho($this));
      $this.r6_1 = 0;
      $this.s6_1 = 0;
      $this.t6_1 = false;
      return $this;
    }
    j1() {
      return this.s6_1;
    }
    static u6() {
      return this.c8(8);
    }
    static c8(initialCapacity) {
      return this.r9(arrayOfUninitializedElements(initialCapacity), null, new Int32Array(initialCapacity), new Int32Array(computeHashSize(Companion_instance_2, initialCapacity)), 2, 0);
    }
    static w6(initialCapacity, loadFactor) {
      var $this = this.c8(initialCapacity);
      // Inline function 'kotlin.require' call
      if (!(loadFactor > 0)) {
        var message = 'Non-positive load factor: ' + loadFactor;
        throw IllegalArgumentException.z(toString_1(message));
      }
      return $this;
    }
    f2(value) {
      return findValue(this, value) >= 0;
    }
    g2(key) {
      var index = findKey(this, key);
      if (index < 0)
        return null;
      return ensureNotNull(this.l6_1)[index];
    }
    y6(key) {
      return findKey(this, key) >= 0;
    }
    c4(key, value) {
      var index = addKey(this, key);
      var valuesArray = allocateValuesArray(this);
      if (index < 0) {
        var oldValue = valuesArray[(-index | 0) - 1 | 0];
        valuesArray[(-index | 0) - 1 | 0] = value;
        return oldValue;
      } else {
        valuesArray[index] = value;
        return null;
      }
    }
    p5(key) {
      this.h7();
      var index = findKey(this, key);
      if (index < 0)
        return null;
      var oldValue = ensureNotNull(this.l6_1)[index];
      removeEntryAt(this, index);
      return oldValue;
    }
    j4() {
      this.h7();
      var inductionVariable = 0;
      var last = this.p6_1 - 1 | 0;
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var hash = this.m6_1[i];
          if (hash >= 0) {
            this.n6_1[hash] = 0;
            this.m6_1[i] = -1;
          }
        }
         while (!(i === last));
      resetRange(this.k6_1, 0, this.p6_1);
      var tmp0_safe_receiver = this.l6_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        resetRange(tmp0_safe_receiver, 0, this.p6_1);
      }
      this.s6_1 = 0;
      this.p6_1 = 0;
      registerModification(this);
    }
    equals(other) {
      var tmp;
      if (other === this) {
        tmp = true;
      } else {
        var tmp_0;
        if (!(other == null) ? isInterface(other, KtMap) : false) {
          tmp_0 = contentEquals_0(this, other);
        } else {
          tmp_0 = false;
        }
        tmp = tmp_0;
      }
      return tmp;
    }
    hashCode() {
      var result = 0;
      var it = this.o7();
      while (it.f1()) {
        result = result + it.m9() | 0;
      }
      return result;
    }
    toString() {
      var sb = StringBuilder.s9(2 + imul(this.s6_1, 3) | 0);
      sb.p9('{');
      var i = 0;
      var it = this.o7();
      while (it.f1()) {
        if (i > 0) {
          sb.p9(', ');
        }
        it.n9(sb);
        i = i + 1 | 0;
      }
      sb.p9('}');
      return sb.toString();
    }
    h7() {
      if (this.t6_1)
        throw UnsupportedOperationException.b6();
    }
    f7(key) {
      this.h7();
      var index = findKey(this, key);
      if (index < 0)
        return false;
      removeEntryAt(this, index);
      return true;
    }
    s7(entry) {
      var index = findKey(this, entry.c2());
      if (index < 0)
        return false;
      return equals(ensureNotNull(this.l6_1)[index], entry.d2());
    }
    t9(entry) {
      return this.s7(isInterface(entry, Entry) ? entry : THROW_CCE());
    }
    t7(entry) {
      this.h7();
      var index = findKey(this, entry.c2());
      if (index < 0)
        return false;
      if (!equals(ensureNotNull(this.l6_1)[index], entry.d2()))
        return false;
      removeEntryAt(this, index);
      return true;
    }
    g7() {
      return new KeysItr(this);
    }
    l7() {
      return new ValuesItr(this);
    }
    o7() {
      return new EntriesItr(this);
    }
  }
  class LinkedHashMap extends HashMap {
    static z3() {
      var $this = this.j6();
      init_kotlin_collections_LinkedHashMap($this);
      return $this;
    }
    static u9(initialCapacity) {
      var $this = this.x6(initialCapacity);
      init_kotlin_collections_LinkedHashMap($this);
      return $this;
    }
    g4() {
      return this.g6_1.h7();
    }
  }
  class LinkedHashSet extends HashSet {
    static n1() {
      var $this = this.a8();
      init_kotlin_collections_LinkedHashSet($this);
      return $this;
    }
    static s1(elements) {
      var $this = this.b8(elements);
      init_kotlin_collections_LinkedHashSet($this);
      return $this;
    }
    static v9(initialCapacity, loadFactor) {
      var $this = this.d8(initialCapacity, loadFactor);
      init_kotlin_collections_LinkedHashSet($this);
      return $this;
    }
    static m(initialCapacity) {
      return this.v9(initialCapacity, 1.0);
    }
    g4() {
      return this.h1_1.h7();
    }
  }
  class Continuation {}
  class CompletedContinuation {
    w9() {
      var message = 'This continuation is already complete';
      throw IllegalStateException.c3(toString_1(message));
    }
    x9(result) {
      // Inline function 'kotlin.error' call
      var message = 'This continuation is already complete';
      throw IllegalStateException.c3(toString_1(message));
    }
    y9(result) {
      return this.x9(result);
    }
    toString() {
      return 'This continuation is already complete';
    }
  }
  class InterceptedCoroutine {
    constructor() {
      this.ga_1 = null;
    }
    ha() {
      var intercepted = this.ga_1;
      if (!(intercepted == null) && !(intercepted === this)) {
        ensureNotNull(this.w9().ia(Key_instance)).ja(intercepted);
      }
      this.ga_1 = CompletedContinuation_instance;
    }
  }
  class GeneratorCoroutineImpl extends InterceptedCoroutine {
    constructor(resultContinuation) {
      super();
      this.aa_1 = resultContinuation;
      var tmp = this;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.ba_1 = [];
      var tmp_0 = this;
      var tmp0_safe_receiver = this.aa_1;
      tmp_0.ca_1 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.w9();
      this.da_1 = false;
      this.ea_1 = _Result___init__impl__xyqfz8(Symbol());
      this.fa_1 = this.ea_1;
    }
    w9() {
      return ensureNotNull(this.ca_1);
    }
    x9(result) {
      if (_Result___get_value__impl__bjfvqg(this.ea_1) === _Result___get_value__impl__bjfvqg(this.fa_1))
        this.fa_1 = result;
      if (this.da_1)
        return Unit_instance;
      // Inline function 'kotlin.Result.getOrNull' call
      var this_0 = this.fa_1;
      var tmp;
      if (_Result___get_isFailure__impl__jpiriv(this_0)) {
        tmp = null;
      } else {
        var tmp_0 = _Result___get_value__impl__bjfvqg(this_0);
        tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      }
      var currentResult = tmp;
      var currentException = Result__exceptionOrNull_impl_p6xea9(this.fa_1);
      this.fa_1 = this.ea_1;
      var current = this;
      while (true) {
        $l$loop: while (true) {
          // Inline function 'kotlin.coroutines.GeneratorCoroutineImpl.isCompleted' call
          if (!!(current.ba_1.length === 0)) {
            break $l$loop;
          }
          // Inline function 'kotlin.coroutines.GeneratorCoroutineImpl.getLastIterator' call
          var this_1 = current;
          var jsIterator = this_1.ba_1[this_1.ba_1.length - 1 | 0];
          // Inline function 'kotlin.also' call
          var this_2 = currentException;
          currentException = null;
          var exception = this_2;
          this.da_1 = true;
          try {
            var step = exception == null ? jsIterator.next(currentResult) : jsIterator.throw(exception);
            currentResult = step.value;
            currentException = null;
            if (step.done) {
              // Inline function 'kotlin.coroutines.GeneratorCoroutineImpl.dropLastIterator' call
              var this_3 = current;
              // Inline function 'kotlin.js.asDynamic' call
              access$_get_jsIterators__geagmj(this_3).pop();
            }
            if (!(_Result___get_value__impl__bjfvqg(this.ea_1) === _Result___get_value__impl__bjfvqg(this.fa_1))) {
              // Inline function 'kotlin.Result.getOrNull' call
              var this_4 = this.fa_1;
              var tmp_1;
              if (_Result___get_isFailure__impl__jpiriv(this_4)) {
                tmp_1 = null;
              } else {
                var tmp_2 = _Result___get_value__impl__bjfvqg(this_4);
                tmp_1 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
              }
              currentResult = tmp_1;
              currentException = Result__exceptionOrNull_impl_p6xea9(this.fa_1);
              this.fa_1 = this.ea_1;
            } else if (currentResult === get_COROUTINE_SUSPENDED())
              return Unit_instance;
          } catch ($p) {
            if ($p instanceof Error) {
              var e = $p;
              currentException = e;
              // Inline function 'kotlin.coroutines.GeneratorCoroutineImpl.dropLastIterator' call
              var this_5 = current;
              // Inline function 'kotlin.js.asDynamic' call
              access$_get_jsIterators__geagmj(this_5).pop();
            } else {
              throw $p;
            }
          }
          finally {
            this.da_1 = false;
          }
        }
        this.ha();
        var completion = ensureNotNull(this.aa_1);
        if (completion instanceof GeneratorCoroutineImpl) {
          current = completion;
        } else {
          var tmp_3;
          if (!(currentException == null)) {
            // Inline function 'kotlin.coroutines.resumeWithException' call
            // Inline function 'kotlin.Companion.failure' call
            var exception_0 = ensureNotNull(currentException);
            var tmp$ret$10 = _Result___init__impl__xyqfz8(createFailure(exception_0));
            completion.y9(tmp$ret$10);
            tmp_3 = Unit_instance;
          } else {
            // Inline function 'kotlin.coroutines.resume' call
            // Inline function 'kotlin.Companion.success' call
            var value = currentResult;
            var tmp$ret$12 = _Result___init__impl__xyqfz8(value);
            completion.y9(tmp$ret$12);
            tmp_3 = Unit_instance;
          }
          return tmp_3;
        }
      }
    }
    y9(result) {
      return this.x9(result);
    }
  }
  class Exception extends Error {
    static oa() {
      var $this = createExternalThis(this, Error, [null]);
      setPropertiesToThrowableInstance($this);
      init_kotlin_Exception($this);
      return $this;
    }
    static y2(message) {
      var $this = createExternalThis(this, Error, [message]);
      setPropertiesToThrowableInstance($this, message);
      init_kotlin_Exception($this);
      return $this;
    }
    static pa(message, cause) {
      var $this = createExternalThis(this, Error, [message, setupCauseParameter(cause)]);
      setPropertiesToThrowableInstance($this, message, cause);
      init_kotlin_Exception($this);
      return $this;
    }
  }
  class RuntimeException extends Exception {
    static ra() {
      var $this = this.oa();
      init_kotlin_RuntimeException($this);
      return $this;
    }
    static n8(message) {
      var $this = this.y2(message);
      init_kotlin_RuntimeException($this);
      return $this;
    }
    static ta(message, cause) {
      var $this = this.pa(message, cause);
      init_kotlin_RuntimeException($this);
      return $this;
    }
  }
  class IllegalArgumentException extends RuntimeException {
    static qa() {
      var $this = this.ra();
      init_kotlin_IllegalArgumentException($this);
      return $this;
    }
    static z(message) {
      var $this = this.n8(message);
      init_kotlin_IllegalArgumentException($this);
      return $this;
    }
    static sa(message, cause) {
      var $this = this.ta(message, cause);
      init_kotlin_IllegalArgumentException($this);
      return $this;
    }
  }
  class IllegalStateException extends RuntimeException {
    static ua() {
      var $this = this.ra();
      init_kotlin_IllegalStateException($this);
      return $this;
    }
    static c3(message) {
      var $this = this.n8(message);
      init_kotlin_IllegalStateException($this);
      return $this;
    }
  }
  class UnsupportedOperationException extends RuntimeException {
    static b6() {
      var $this = this.ra();
      init_kotlin_UnsupportedOperationException($this);
      return $this;
    }
    static x7(message) {
      var $this = this.n8(message);
      init_kotlin_UnsupportedOperationException($this);
      return $this;
    }
  }
  class NoSuchElementException extends RuntimeException {
    static n4() {
      var $this = this.ra();
      init_kotlin_NoSuchElementException($this);
      return $this;
    }
    static v(message) {
      var $this = this.n8(message);
      init_kotlin_NoSuchElementException($this);
      return $this;
    }
  }
  class IndexOutOfBoundsException extends RuntimeException {
    static wa() {
      var $this = this.ra();
      init_kotlin_IndexOutOfBoundsException($this);
      return $this;
    }
    static w1(message) {
      var $this = this.n8(message);
      init_kotlin_IndexOutOfBoundsException($this);
      return $this;
    }
  }
  class ConcurrentModificationException extends RuntimeException {
    static z8() {
      var $this = this.ra();
      init_kotlin_ConcurrentModificationException($this);
      return $this;
    }
    static h8(message) {
      var $this = this.n8(message);
      init_kotlin_ConcurrentModificationException($this);
      return $this;
    }
  }
  class ArithmeticException extends RuntimeException {
    static ab() {
      var $this = this.ra();
      init_kotlin_ArithmeticException($this);
      return $this;
    }
    static bb(message) {
      var $this = this.n8(message);
      init_kotlin_ArithmeticException($this);
      return $this;
    }
  }
  class NumberFormatException extends IllegalArgumentException {
    static gb() {
      var $this = this.qa();
      init_kotlin_NumberFormatException($this);
      return $this;
    }
    static hb(message) {
      var $this = this.z(message);
      init_kotlin_NumberFormatException($this);
      return $this;
    }
  }
  class NullPointerException extends RuntimeException {
    static g3() {
      var $this = this.ra();
      init_kotlin_NullPointerException($this);
      return $this;
    }
  }
  class NoWhenBranchMatchedException extends RuntimeException {
    static k3() {
      var $this = this.ra();
      init_kotlin_NoWhenBranchMatchedException($this);
      return $this;
    }
  }
  class ClassCastException extends RuntimeException {
    static o3() {
      var $this = this.ra();
      init_kotlin_ClassCastException($this);
      return $this;
    }
  }
  class KClass {}
  class KClassImpl {
    equals(other) {
      var tmp;
      if (other instanceof NothingKClassImpl) {
        tmp = false;
      } else {
        if (other instanceof KClassImpl) {
          tmp = equals(this.kb(), other.kb());
        } else {
          tmp = false;
        }
      }
      return tmp;
    }
    hashCode() {
      var tmp0_safe_receiver = this.ib();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : getStringHashCode(tmp0_safe_receiver);
      return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    }
    toString() {
      return 'class ' + this.ib();
    }
  }
  class NothingKClassImpl extends KClassImpl {
    constructor() {
      NothingKClassImpl_instance = null;
      super();
      NothingKClassImpl_instance = this;
      this.lb_1 = 'Nothing';
    }
    ib() {
      return this.lb_1;
    }
    jb(value) {
      return false;
    }
    kb() {
      throw UnsupportedOperationException.x7("There's no native JS class for Nothing type");
    }
    equals(other) {
      return other === this;
    }
    hashCode() {
      return 0;
    }
  }
  class PrimitiveKClassImpl extends KClassImpl {
    constructor(jClass, givenSimpleName, isInstanceFunction) {
      super();
      this.mb_1 = jClass;
      this.nb_1 = givenSimpleName;
      this.ob_1 = isInstanceFunction;
    }
    kb() {
      return this.mb_1;
    }
    equals(other) {
      if (!(other instanceof PrimitiveKClassImpl))
        return false;
      return super.equals(other) && this.nb_1 === other.nb_1;
    }
    ib() {
      return this.nb_1;
    }
    jb(value) {
      return this.ob_1(value);
    }
  }
  class SimpleKClassImpl extends KClassImpl {
    constructor(jClass) {
      super();
      this.pb_1 = jClass;
      var tmp = this;
      // Inline function 'kotlin.js.asDynamic' call
      var tmp0_safe_receiver = this.pb_1.$metadata$;
      // Inline function 'kotlin.js.unsafeCast' call
      tmp.qb_1 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.simpleName;
    }
    kb() {
      return this.pb_1;
    }
    ib() {
      return this.qb_1;
    }
    jb(value) {
      return jsIsType(value, this.pb_1);
    }
  }
  class KProperty1 {}
  class PrimitiveClasses {
    constructor() {
      PrimitiveClasses_instance = this;
      var tmp = this;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp_0 = Object;
      tmp.anyClass = new PrimitiveKClassImpl(tmp_0, 'Any', PrimitiveClasses$anyClass$lambda);
      var tmp_1 = this;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp_2 = Number;
      tmp_1.numberClass = new PrimitiveKClassImpl(tmp_2, 'Number', PrimitiveClasses$numberClass$lambda);
      this.nothingClass = NothingKClassImpl_getInstance();
      var tmp_3 = this;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp_4 = Boolean;
      tmp_3.booleanClass = new PrimitiveKClassImpl(tmp_4, 'Boolean', PrimitiveClasses$booleanClass$lambda);
      var tmp_5 = this;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp_6 = Number;
      tmp_5.byteClass = new PrimitiveKClassImpl(tmp_6, 'Byte', PrimitiveClasses$byteClass$lambda);
      var tmp_7 = this;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp_8 = Number;
      tmp_7.shortClass = new PrimitiveKClassImpl(tmp_8, 'Short', PrimitiveClasses$shortClass$lambda);
      var tmp_9 = this;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp_10 = Number;
      tmp_9.intClass = new PrimitiveKClassImpl(tmp_10, 'Int', PrimitiveClasses$intClass$lambda);
      var tmp_11 = this;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_12 = typeof BigInt === 'undefined' ? VOID : BigInt;
      tmp_11.longClass = new PrimitiveKClassImpl(tmp_12, 'Long', PrimitiveClasses$longClass$lambda);
      var tmp_13 = this;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp_14 = Number;
      tmp_13.floatClass = new PrimitiveKClassImpl(tmp_14, 'Float', PrimitiveClasses$floatClass$lambda);
      var tmp_15 = this;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp_16 = Number;
      tmp_15.doubleClass = new PrimitiveKClassImpl(tmp_16, 'Double', PrimitiveClasses$doubleClass$lambda);
      var tmp_17 = this;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp_18 = Array;
      tmp_17.arrayClass = new PrimitiveKClassImpl(tmp_18, 'Array', PrimitiveClasses$arrayClass$lambda);
      var tmp_19 = this;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp_20 = String;
      tmp_19.stringClass = new PrimitiveKClassImpl(tmp_20, 'String', PrimitiveClasses$stringClass$lambda);
      var tmp_21 = this;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp_22 = Error;
      tmp_21.throwableClass = new PrimitiveKClassImpl(tmp_22, 'Throwable', PrimitiveClasses$throwableClass$lambda);
      var tmp_23 = this;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp_24 = Array;
      tmp_23.booleanArrayClass = new PrimitiveKClassImpl(tmp_24, 'BooleanArray', PrimitiveClasses$booleanArrayClass$lambda);
      var tmp_25 = this;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp_26 = Uint16Array;
      tmp_25.charArrayClass = new PrimitiveKClassImpl(tmp_26, 'CharArray', PrimitiveClasses$charArrayClass$lambda);
      var tmp_27 = this;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp_28 = Int8Array;
      tmp_27.byteArrayClass = new PrimitiveKClassImpl(tmp_28, 'ByteArray', PrimitiveClasses$byteArrayClass$lambda);
      var tmp_29 = this;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp_30 = Int16Array;
      tmp_29.shortArrayClass = new PrimitiveKClassImpl(tmp_30, 'ShortArray', PrimitiveClasses$shortArrayClass$lambda);
      var tmp_31 = this;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp_32 = Int32Array;
      tmp_31.intArrayClass = new PrimitiveKClassImpl(tmp_32, 'IntArray', PrimitiveClasses$intArrayClass$lambda);
      var tmp_33 = this;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp_34 = Array;
      tmp_33.longArrayClass = new PrimitiveKClassImpl(tmp_34, 'LongArray', PrimitiveClasses$longArrayClass$lambda);
      var tmp_35 = this;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp_36 = Float32Array;
      tmp_35.floatArrayClass = new PrimitiveKClassImpl(tmp_36, 'FloatArray', PrimitiveClasses$floatArrayClass$lambda);
      var tmp_37 = this;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp_38 = Float64Array;
      tmp_37.doubleArrayClass = new PrimitiveKClassImpl(tmp_38, 'DoubleArray', PrimitiveClasses$doubleArrayClass$lambda);
    }
    rb() {
      return this.anyClass;
    }
    sb() {
      return this.numberClass;
    }
    tb() {
      return this.nothingClass;
    }
    ub() {
      return this.booleanClass;
    }
    vb() {
      return this.byteClass;
    }
    wb() {
      return this.shortClass;
    }
    xb() {
      return this.intClass;
    }
    yb() {
      return this.longClass;
    }
    zb() {
      return this.floatClass;
    }
    ac() {
      return this.doubleClass;
    }
    bc() {
      return this.arrayClass;
    }
    cc() {
      return this.stringClass;
    }
    dc() {
      return this.throwableClass;
    }
    ec() {
      return this.booleanArrayClass;
    }
    fc() {
      return this.charArrayClass;
    }
    gc() {
      return this.byteArrayClass;
    }
    hc() {
      return this.shortArrayClass;
    }
    ic() {
      return this.intArrayClass;
    }
    jc() {
      return this.longArrayClass;
    }
    kc() {
      return this.floatArrayClass;
    }
    lc() {
      return this.doubleArrayClass;
    }
    functionClass(arity) {
      var tmp0_elvis_lhs = get_functionClasses()[arity];
      var tmp;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp_0 = Function;
        var tmp_1 = 'Function' + arity;
        var result = new PrimitiveKClassImpl(tmp_0, tmp_1, PrimitiveClasses$functionClass$lambda(arity));
        // Inline function 'kotlin.js.asDynamic' call
        get_functionClasses()[arity] = result;
        tmp = result;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      return tmp;
    }
  }
  class StringBuilder {
    static mc(content) {
      var $this = createThis(this);
      $this.a1_1 = content;
      return $this;
    }
    static s9(capacity) {
      return this.b1();
    }
    static b1() {
      return this.mc('');
    }
    a() {
      // Inline function 'kotlin.js.asDynamic' call
      return this.a1_1.length;
    }
    b(index) {
      // Inline function 'kotlin.text.getOrElse' call
      var this_0 = this.a1_1;
      var tmp;
      if (0 <= index ? index <= (charSequenceLength(this_0) - 1 | 0) : false) {
        tmp = charSequenceGet(this_0, index);
      } else {
        throw IndexOutOfBoundsException.w1('index: ' + index + ', length: ' + this.a() + '}');
      }
      return tmp;
    }
    c(startIndex, endIndex) {
      return substring(this.a1_1, startIndex, endIndex);
    }
    q9(value) {
      this.a1_1 = this.a1_1 + toString(value);
      return this;
    }
    c1(value) {
      this.a1_1 = this.a1_1 + toString_0(value);
      return this;
    }
    nc(value, startIndex, endIndex) {
      return this.oc(value == null ? 'null' : value, startIndex, endIndex);
    }
    o9(value) {
      this.a1_1 = this.a1_1 + toString_0(value);
      return this;
    }
    pc(value) {
      return this.p9(value.toString());
    }
    qc(value) {
      return this.p9(value.toString());
    }
    p9(value) {
      var tmp = this;
      var tmp_0 = this.a1_1;
      tmp.a1_1 = tmp_0 + (value == null ? 'null' : value);
      return this;
    }
    rc(newLength) {
      if (newLength < 0) {
        throw IllegalArgumentException.z('Negative new length: ' + newLength + '.');
      }
      if (newLength <= this.a()) {
        this.a1_1 = substring(this.a1_1, 0, newLength);
      } else {
        var inductionVariable = this.a();
        if (inductionVariable < newLength)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            this.a1_1 = this.a1_1 + toString(_Char___init__impl__6a9atx(0));
          }
           while (inductionVariable < newLength);
      }
    }
    toString() {
      return this.a1_1;
    }
    sc() {
      this.a1_1 = '';
      return this;
    }
    oc(value, startIndex, endIndex) {
      var stringCsq = toString_1(value);
      Companion_instance_4.tc(startIndex, endIndex, stringCsq.length);
      this.a1_1 = this.a1_1 + substring(stringCsq, startIndex, endIndex);
      return this;
    }
  }
  class Companion_3 {
    constructor() {
      Companion_instance_3 = this;
      this.uc_1 = new RegExp('[\\\\^$*+?.()|[\\]{}]', 'g');
      this.vc_1 = new RegExp('[\\\\$]', 'g');
      this.wc_1 = new RegExp('\\$', 'g');
    }
    xc(literal) {
      // Inline function 'kotlin.text.nativeReplace' call
      var pattern = this.uc_1;
      // Inline function 'kotlin.js.asDynamic' call
      return literal.replace(pattern, '\\$&');
    }
    yc(literal) {
      // Inline function 'kotlin.text.nativeReplace' call
      var pattern = this.wc_1;
      // Inline function 'kotlin.js.asDynamic' call
      return literal.replace(pattern, '$$$$');
    }
  }
  class sam$kotlin_Comparator$0 {
    constructor(function_0) {
      this.zc_1 = function_0;
    }
    ad(a, b) {
      return this.zc_1(a, b);
    }
    compare(a, b) {
      return this.ad(a, b);
    }
    u2() {
      return this.zc_1;
    }
    equals(other) {
      var tmp;
      if (!(other == null) ? isInterface(other, Comparator) : false) {
        var tmp_0;
        if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
          tmp_0 = equals(this.u2(), other.u2());
        } else {
          tmp_0 = false;
        }
        tmp = tmp_0;
      } else {
        tmp = false;
      }
      return tmp;
    }
    hashCode() {
      return hashCode_0(this.u2());
    }
  }
  class IteratorImpl_0 {
    constructor($outer) {
      this.cd_1 = $outer;
      this.bd_1 = 0;
    }
    f1() {
      return this.bd_1 < this.cd_1.j1();
    }
    g1() {
      if (!this.f1())
        throw NoSuchElementException.n4();
      var _unary__edvuaz = this.bd_1;
      this.bd_1 = _unary__edvuaz + 1 | 0;
      return this.cd_1.l1(_unary__edvuaz);
    }
  }
  class Companion_4 {
    constructor() {
      this.q3_1 = 2147483639;
    }
    v5(index, size) {
      if (index < 0 || index >= size) {
        throw IndexOutOfBoundsException.w1('index: ' + index + ', size: ' + size);
      }
    }
    u4(index, size) {
      if (index < 0 || index > size) {
        throw IndexOutOfBoundsException.w1('index: ' + index + ', size: ' + size);
      }
    }
    r3(fromIndex, toIndex, size) {
      if (fromIndex < 0 || toIndex > size) {
        throw IndexOutOfBoundsException.w1('fromIndex: ' + fromIndex + ', toIndex: ' + toIndex + ', size: ' + size);
      }
      if (fromIndex > toIndex) {
        throw IllegalArgumentException.z('fromIndex: ' + fromIndex + ' > toIndex: ' + toIndex);
      }
    }
    tc(startIndex, endIndex, size) {
      if (startIndex < 0 || endIndex > size) {
        throw IndexOutOfBoundsException.w1('startIndex: ' + startIndex + ', endIndex: ' + endIndex + ', size: ' + size);
      }
      if (startIndex > endIndex) {
        throw IllegalArgumentException.z('startIndex: ' + startIndex + ' > endIndex: ' + endIndex);
      }
    }
    o8(oldCapacity, minCapacity) {
      var newCapacity = oldCapacity + (oldCapacity >> 1) | 0;
      if ((newCapacity - minCapacity | 0) < 0)
        newCapacity = minCapacity;
      if ((newCapacity - 2147483639 | 0) > 0)
        newCapacity = minCapacity > 2147483639 ? 2147483647 : 2147483639;
      return newCapacity;
    }
    a5(c) {
      var hashCode = 1;
      var _iterator__ex2g4s = c.e1();
      while (_iterator__ex2g4s.f1()) {
        var e = _iterator__ex2g4s.g1();
        var tmp = imul(31, hashCode);
        var tmp1_elvis_lhs = e == null ? null : hashCode_0(e);
        hashCode = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
      }
      return hashCode;
    }
    z4(c, other) {
      if (!(c.j1() === other.j1()))
        return false;
      var otherIterator = other.e1();
      var _iterator__ex2g4s = c.e1();
      while (_iterator__ex2g4s.f1()) {
        var elem = _iterator__ex2g4s.g1();
        var elemOther = otherIterator.g1();
        if (!equals(elem, elemOther)) {
          return false;
        }
      }
      return true;
    }
  }
  class AbstractList extends AbstractCollection {
    static dd() {
      return this.e4();
    }
    e1() {
      return new IteratorImpl_0(this);
    }
    a2(element) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.collections.indexOfFirst' call
        var index = 0;
        var _iterator__ex2g4s = this.e1();
        while (_iterator__ex2g4s.f1()) {
          var item = _iterator__ex2g4s.g1();
          if (equals(item, element)) {
            tmp$ret$1 = index;
            break $l$block;
          }
          index = index + 1 | 0;
        }
        tmp$ret$1 = -1;
      }
      return tmp$ret$1;
    }
    equals(other) {
      if (other === this)
        return true;
      if (!(!(other == null) ? isInterface(other, KtList) : false))
        return false;
      return Companion_instance_4.z4(this, other);
    }
    hashCode() {
      return Companion_instance_4.a5(this);
    }
  }
  class AbstractMap$keys$1$iterator$1 {
    constructor($entryIterator) {
      this.ed_1 = $entryIterator;
    }
    f1() {
      return this.ed_1.f1();
    }
    g1() {
      return this.ed_1.g1().c2();
    }
  }
  class AbstractMap$values$1$iterator$1 {
    constructor($entryIterator) {
      this.fd_1 = $entryIterator;
    }
    f1() {
      return this.fd_1.f1();
    }
    g1() {
      return this.fd_1.g1().d2();
    }
  }
  class Companion_5 {}
  class AbstractSet extends AbstractCollection {
    static id($box) {
      return this.e4($box);
    }
    equals(other) {
      if (other === this)
        return true;
      if (!(!(other == null) ? isInterface(other, KtSet) : false))
        return false;
      return Companion_instance_6.s5(this, other);
    }
    hashCode() {
      return Companion_instance_6.t5(this);
    }
  }
  class AbstractMap$keys$1 extends AbstractSet {
    static hd(this$0, $box) {
      if ($box === VOID)
        $box = {};
      $box.gd_1 = this$0;
      return this.id($box);
    }
    y6(element) {
      return this.gd_1.e2(element);
    }
    p1(element) {
      if (!(element == null ? true : !(element == null)))
        return false;
      return this.y6((element == null ? true : !(element == null)) ? element : THROW_CCE());
    }
    e1() {
      var entryIterator = this.gd_1.j2().e1();
      return new AbstractMap$keys$1$iterator$1(entryIterator);
    }
    j1() {
      return this.gd_1.j1();
    }
  }
  class AbstractMap$values$1 extends AbstractCollection {
    static kd(this$0, $box) {
      if ($box === VOID)
        $box = {};
      $box.jd_1 = this$0;
      return this.e4($box);
    }
    i7(element) {
      return this.jd_1.f2(element);
    }
    p1(element) {
      if (!(element == null ? true : !(element == null)))
        return false;
      return this.i7((element == null ? true : !(element == null)) ? element : THROW_CCE());
    }
    e1() {
      var entryIterator = this.jd_1.j2().e1();
      return new AbstractMap$values$1$iterator$1(entryIterator);
    }
    j1() {
      return this.jd_1.j1();
    }
  }
  class Companion_6 {
    t5(c) {
      var hashCode = 0;
      var _iterator__ex2g4s = c.e1();
      while (_iterator__ex2g4s.f1()) {
        var element = _iterator__ex2g4s.g1();
        var tmp = hashCode;
        var tmp1_elvis_lhs = element == null ? null : hashCode_0(element);
        hashCode = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
      }
      return hashCode;
    }
    s5(c, other) {
      if (!(c.j1() === other.j1()))
        return false;
      return c.b2(other);
    }
  }
  class Companion_7 {
    constructor() {
      Companion_instance_7 = this;
      var tmp = this;
      // Inline function 'kotlin.emptyArray' call
      tmp.pd_1 = [];
      this.qd_1 = 10;
    }
  }
  class ArrayDeque extends AbstractMutableList {
    j1() {
      return this.od_1;
    }
    static rd() {
      Companion_getInstance_7();
      var $this = this.v4();
      init_kotlin_collections_ArrayDeque($this);
      $this.nd_1 = Companion_getInstance_7().pd_1;
      return $this;
    }
    k1() {
      return this.od_1 === 0;
    }
    sd(element) {
      registerModification_0(this);
      ensureCapacity_0(this, this.od_1 + 1 | 0);
      this.md_1 = decremented(this, this.md_1);
      this.nd_1[this.md_1] = element;
      this.od_1 = this.od_1 + 1 | 0;
    }
    td(element) {
      registerModification_0(this);
      ensureCapacity_0(this, this.od_1 + 1 | 0);
      var tmp = this.nd_1;
      // Inline function 'kotlin.collections.ArrayDeque.internalIndex' call
      var index = this.od_1;
      tmp[positiveMod(this, this.md_1 + index | 0)] = element;
      this.od_1 = this.od_1 + 1 | 0;
    }
    ud() {
      if (this.k1())
        throw NoSuchElementException.v('ArrayDeque is empty.');
      registerModification_0(this);
      // Inline function 'kotlin.collections.ArrayDeque.internalGet' call
      var internalIndex = this.md_1;
      var tmp = this.nd_1[internalIndex];
      var element = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
      this.nd_1[this.md_1] = null;
      this.md_1 = incremented(this, this.md_1);
      this.od_1 = this.od_1 - 1 | 0;
      return element;
    }
    vd() {
      if (this.k1())
        throw NoSuchElementException.v('ArrayDeque is empty.');
      registerModification_0(this);
      // Inline function 'kotlin.collections.ArrayDeque.internalIndex' call
      var index = get_lastIndex_2(this);
      var internalLastIndex = positiveMod(this, this.md_1 + index | 0);
      // Inline function 'kotlin.collections.ArrayDeque.internalGet' call
      var tmp = this.nd_1[internalLastIndex];
      var element = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
      this.nd_1[internalLastIndex] = null;
      this.od_1 = this.od_1 - 1 | 0;
      return element;
    }
    r(element) {
      this.td(element);
      return true;
    }
    w4(index, element) {
      Companion_instance_4.u4(index, this.od_1);
      if (index === this.od_1) {
        this.td(element);
        return Unit_instance;
      } else if (index === 0) {
        this.sd(element);
        return Unit_instance;
      }
      registerModification_0(this);
      ensureCapacity_0(this, this.od_1 + 1 | 0);
      // Inline function 'kotlin.collections.ArrayDeque.internalIndex' call
      var internalIndex = positiveMod(this, this.md_1 + index | 0);
      if (index < (this.od_1 + 1 | 0) >> 1) {
        var decrementedInternalIndex = decremented(this, internalIndex);
        var decrementedHead = decremented(this, this.md_1);
        if (decrementedInternalIndex >= this.md_1) {
          this.nd_1[decrementedHead] = this.nd_1[this.md_1];
          var tmp0 = this.nd_1;
          var tmp2 = this.nd_1;
          var tmp4 = this.md_1;
          var tmp6 = this.md_1 + 1 | 0;
          // Inline function 'kotlin.collections.copyInto' call
          var endIndex = decrementedInternalIndex + 1 | 0;
          arrayCopy(tmp0, tmp2, tmp4, tmp6, endIndex);
        } else {
          var tmp0_0 = this.nd_1;
          var tmp2_0 = this.nd_1;
          var tmp4_0 = this.md_1 - 1 | 0;
          var tmp6_0 = this.md_1;
          // Inline function 'kotlin.collections.copyInto' call
          var endIndex_0 = this.nd_1.length;
          arrayCopy(tmp0_0, tmp2_0, tmp4_0, tmp6_0, endIndex_0);
          this.nd_1[this.nd_1.length - 1 | 0] = this.nd_1[0];
          var tmp0_1 = this.nd_1;
          var tmp2_1 = this.nd_1;
          // Inline function 'kotlin.collections.copyInto' call
          var endIndex_1 = decrementedInternalIndex + 1 | 0;
          arrayCopy(tmp0_1, tmp2_1, 0, 1, endIndex_1);
        }
        this.nd_1[decrementedInternalIndex] = element;
        this.md_1 = decrementedHead;
      } else {
        // Inline function 'kotlin.collections.ArrayDeque.internalIndex' call
        var index_0 = this.od_1;
        var tail = positiveMod(this, this.md_1 + index_0 | 0);
        if (internalIndex < tail) {
          var tmp0_2 = this.nd_1;
          var tmp2_2 = this.nd_1;
          // Inline function 'kotlin.collections.copyInto' call
          var destinationOffset = internalIndex + 1 | 0;
          arrayCopy(tmp0_2, tmp2_2, destinationOffset, internalIndex, tail);
        } else {
          var tmp0_3 = this.nd_1;
          // Inline function 'kotlin.collections.copyInto' call
          var destination = this.nd_1;
          arrayCopy(tmp0_3, destination, 1, 0, tail);
          this.nd_1[0] = this.nd_1[this.nd_1.length - 1 | 0];
          var tmp0_4 = this.nd_1;
          var tmp2_3 = this.nd_1;
          var tmp4_1 = internalIndex + 1 | 0;
          // Inline function 'kotlin.collections.copyInto' call
          var endIndex_2 = this.nd_1.length - 1 | 0;
          arrayCopy(tmp0_4, tmp2_3, tmp4_1, internalIndex, endIndex_2);
        }
        this.nd_1[internalIndex] = element;
      }
      this.od_1 = this.od_1 + 1 | 0;
    }
    q1(elements) {
      if (elements.k1())
        return false;
      registerModification_0(this);
      ensureCapacity_0(this, this.od_1 + elements.j1() | 0);
      // Inline function 'kotlin.collections.ArrayDeque.internalIndex' call
      var index = this.od_1;
      var tmp$ret$0 = positiveMod(this, this.md_1 + index | 0);
      copyCollectionElements(this, tmp$ret$0, elements);
      return true;
    }
    l1(index) {
      Companion_instance_4.v5(index, this.od_1);
      // Inline function 'kotlin.collections.ArrayDeque.internalIndex' call
      // Inline function 'kotlin.collections.ArrayDeque.internalGet' call
      var internalIndex = positiveMod(this, this.md_1 + index | 0);
      var tmp = this.nd_1[internalIndex];
      return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    }
    r1(index, element) {
      Companion_instance_4.v5(index, this.od_1);
      // Inline function 'kotlin.collections.ArrayDeque.internalIndex' call
      var internalIndex = positiveMod(this, this.md_1 + index | 0);
      // Inline function 'kotlin.collections.ArrayDeque.internalGet' call
      var tmp = this.nd_1[internalIndex];
      var oldElement = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
      this.nd_1[internalIndex] = element;
      return oldElement;
    }
    p1(element) {
      return !(this.a2(element) === -1);
    }
    a2(element) {
      // Inline function 'kotlin.collections.ArrayDeque.internalIndex' call
      var index = this.od_1;
      var tail = positiveMod(this, this.md_1 + index | 0);
      if (this.md_1 < tail) {
        var inductionVariable = this.md_1;
        if (inductionVariable < tail)
          do {
            var index_0 = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            if (equals(element, this.nd_1[index_0]))
              return index_0 - this.md_1 | 0;
          }
           while (inductionVariable < tail);
      } else if (this.md_1 >= tail) {
        var inductionVariable_0 = this.md_1;
        var last = this.nd_1.length;
        if (inductionVariable_0 < last)
          do {
            var index_1 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            if (equals(element, this.nd_1[index_1]))
              return index_1 - this.md_1 | 0;
          }
           while (inductionVariable_0 < last);
        var inductionVariable_1 = 0;
        if (inductionVariable_1 < tail)
          do {
            var index_2 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            if (equals(element, this.nd_1[index_2]))
              return (index_2 + this.nd_1.length | 0) - this.md_1 | 0;
          }
           while (inductionVariable_1 < tail);
      }
      return -1;
    }
    f4(element) {
      var index = this.a2(element);
      if (index === -1)
        return false;
      this.p4(index);
      return true;
    }
    p4(index) {
      Companion_instance_4.v5(index, this.od_1);
      if (index === get_lastIndex_2(this)) {
        return this.vd();
      } else if (index === 0) {
        return this.ud();
      }
      registerModification_0(this);
      // Inline function 'kotlin.collections.ArrayDeque.internalIndex' call
      var internalIndex = positiveMod(this, this.md_1 + index | 0);
      // Inline function 'kotlin.collections.ArrayDeque.internalGet' call
      var tmp = this.nd_1[internalIndex];
      var element = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
      if (index < this.od_1 >> 1) {
        if (internalIndex >= this.md_1) {
          var tmp0 = this.nd_1;
          var tmp2 = this.nd_1;
          var tmp4 = this.md_1 + 1 | 0;
          // Inline function 'kotlin.collections.copyInto' call
          var startIndex = this.md_1;
          arrayCopy(tmp0, tmp2, tmp4, startIndex, internalIndex);
        } else {
          var tmp0_0 = this.nd_1;
          // Inline function 'kotlin.collections.copyInto' call
          var destination = this.nd_1;
          arrayCopy(tmp0_0, destination, 1, 0, internalIndex);
          this.nd_1[0] = this.nd_1[this.nd_1.length - 1 | 0];
          var tmp0_1 = this.nd_1;
          var tmp2_0 = this.nd_1;
          var tmp4_0 = this.md_1 + 1 | 0;
          var tmp6 = this.md_1;
          // Inline function 'kotlin.collections.copyInto' call
          var endIndex = this.nd_1.length - 1 | 0;
          arrayCopy(tmp0_1, tmp2_0, tmp4_0, tmp6, endIndex);
        }
        this.nd_1[this.md_1] = null;
        this.md_1 = incremented(this, this.md_1);
      } else {
        // Inline function 'kotlin.collections.ArrayDeque.internalIndex' call
        var index_0 = get_lastIndex_2(this);
        var internalLastIndex = positiveMod(this, this.md_1 + index_0 | 0);
        if (internalIndex <= internalLastIndex) {
          var tmp0_2 = this.nd_1;
          var tmp2_1 = this.nd_1;
          var tmp6_0 = internalIndex + 1 | 0;
          // Inline function 'kotlin.collections.copyInto' call
          var endIndex_0 = internalLastIndex + 1 | 0;
          arrayCopy(tmp0_2, tmp2_1, internalIndex, tmp6_0, endIndex_0);
        } else {
          var tmp0_3 = this.nd_1;
          var tmp2_2 = this.nd_1;
          var tmp6_1 = internalIndex + 1 | 0;
          // Inline function 'kotlin.collections.copyInto' call
          var endIndex_1 = this.nd_1.length;
          arrayCopy(tmp0_3, tmp2_2, internalIndex, tmp6_1, endIndex_1);
          this.nd_1[this.nd_1.length - 1 | 0] = this.nd_1[0];
          var tmp0_4 = this.nd_1;
          var tmp2_3 = this.nd_1;
          // Inline function 'kotlin.collections.copyInto' call
          var endIndex_2 = internalLastIndex + 1 | 0;
          arrayCopy(tmp0_4, tmp2_3, 0, 1, endIndex_2);
        }
        this.nd_1[internalLastIndex] = null;
      }
      this.od_1 = this.od_1 - 1 | 0;
      return element;
    }
    j4() {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!this.k1()) {
        registerModification_0(this);
        // Inline function 'kotlin.collections.ArrayDeque.internalIndex' call
        var index = this.od_1;
        var tail = positiveMod(this, this.md_1 + index | 0);
        nullifyNonEmpty(this, this.md_1, tail);
      }
      this.md_1 = 0;
      this.od_1 = 0;
    }
    wd(array) {
      var tmp = array.length >= this.od_1 ? array : arrayOfNulls(array, this.od_1);
      var dest = isArray(tmp) ? tmp : THROW_CCE();
      // Inline function 'kotlin.collections.ArrayDeque.internalIndex' call
      var index = this.od_1;
      var tail = positiveMod(this, this.md_1 + index | 0);
      if (this.md_1 < tail) {
        var tmp0 = this.nd_1;
        // Inline function 'kotlin.collections.copyInto' call
        var startIndex = this.md_1;
        arrayCopy(tmp0, dest, 0, startIndex, tail);
      } else {
        // Inline function 'kotlin.collections.isNotEmpty' call
        if (!this.k1()) {
          var tmp0_0 = this.nd_1;
          var tmp6 = this.md_1;
          // Inline function 'kotlin.collections.copyInto' call
          var endIndex = this.nd_1.length;
          arrayCopy(tmp0_0, dest, 0, tmp6, endIndex);
          var tmp0_1 = this.nd_1;
          // Inline function 'kotlin.collections.copyInto' call
          var destinationOffset = this.nd_1.length - this.md_1 | 0;
          arrayCopy(tmp0_1, dest, destinationOffset, 0, tail);
        }
      }
      var tmp_0 = terminateCollectionToArray(this.od_1, dest);
      return isArray(tmp_0) ? tmp_0 : THROW_CCE();
    }
    x5() {
      // Inline function 'kotlin.arrayOfNulls' call
      var size = this.od_1;
      var tmp$ret$0 = Array(size);
      return this.wd(tmp$ret$0);
    }
    toArray() {
      return this.x5();
    }
    x4(fromIndex, toIndex) {
      Companion_instance_4.r3(fromIndex, toIndex, this.od_1);
      var length = toIndex - fromIndex | 0;
      if (length === 0)
        return Unit_instance;
      else if (length === this.od_1) {
        this.j4();
        return Unit_instance;
      } else if (length === 1) {
        this.p4(fromIndex);
        return Unit_instance;
      }
      registerModification_0(this);
      if (fromIndex < (this.od_1 - toIndex | 0)) {
        removeRangeShiftPreceding(this, fromIndex, toIndex);
        var newHead = positiveMod(this, this.md_1 + length | 0);
        nullifyNonEmpty(this, this.md_1, newHead);
        this.md_1 = newHead;
      } else {
        removeRangeShiftSucceeding(this, fromIndex, toIndex);
        // Inline function 'kotlin.collections.ArrayDeque.internalIndex' call
        var index = this.od_1;
        var tail = positiveMod(this, this.md_1 + index | 0);
        nullifyNonEmpty(this, negativeMod(this, tail - length | 0), tail);
      }
      this.od_1 = this.od_1 - length | 0;
    }
  }
  class EmptyList {
    constructor() {
      EmptyList_instance = this;
      this.xd_1 = new Long(-1478467534, -1720727600);
    }
    equals(other) {
      var tmp;
      if (!(other == null) ? isInterface(other, KtList) : false) {
        tmp = other.k1();
      } else {
        tmp = false;
      }
      return tmp;
    }
    hashCode() {
      return 1;
    }
    toString() {
      return '[]';
    }
    j1() {
      return 0;
    }
    k1() {
      return true;
    }
    yd(element) {
      return false;
    }
    p1(element) {
      if (!false)
        return false;
      var tmp;
      if (false) {
        tmp = element;
      } else {
        tmp = THROW_CCE();
      }
      return this.yd(tmp);
    }
    l1(index) {
      throw IndexOutOfBoundsException.w1("Empty list doesn't contain element at index " + index + '.');
    }
    zd(element) {
      return -1;
    }
    a2(element) {
      if (!false)
        return -1;
      var tmp;
      if (false) {
        tmp = element;
      } else {
        tmp = THROW_CCE();
      }
      return this.zd(tmp);
    }
    e1() {
      return EmptyIterator_instance;
    }
  }
  class EmptyIterator {
    f1() {
      return false;
    }
    g1() {
      throw NoSuchElementException.n4();
    }
  }
  class ArrayAsCollection {
    constructor(values, isVarargs) {
      this.ae_1 = values;
      this.be_1 = isVarargs;
    }
    j1() {
      return this.ae_1.length;
    }
    k1() {
      // Inline function 'kotlin.collections.isEmpty' call
      return this.ae_1.length === 0;
    }
    ce(element) {
      return contains_1(this.ae_1, element);
    }
    p1(element) {
      if (!(element == null ? true : !(element == null)))
        return false;
      return this.ce((element == null ? true : !(element == null)) ? element : THROW_CCE());
    }
    e1() {
      return arrayIterator(this.ae_1);
    }
  }
  class IndexedValue {
    constructor(index, value) {
      this.de_1 = index;
      this.ee_1 = value;
    }
    toString() {
      return 'IndexedValue(index=' + this.de_1 + ', value=' + toString_0(this.ee_1) + ')';
    }
    hashCode() {
      var result = this.de_1;
      result = imul(result, 31) + (this.ee_1 == null ? 0 : hashCode_0(this.ee_1)) | 0;
      return result;
    }
    equals(other) {
      if (this === other)
        return true;
      if (!(other instanceof IndexedValue))
        return false;
      if (!(this.de_1 === other.de_1))
        return false;
      if (!equals(this.ee_1, other.ee_1))
        return false;
      return true;
    }
  }
  class IndexingIterable {
    constructor(iteratorFactory) {
      this.fe_1 = iteratorFactory;
    }
    e1() {
      return new IndexingIterator(this.fe_1());
    }
  }
  class IndexingIterator {
    constructor(iterator) {
      this.ge_1 = iterator;
      this.he_1 = 0;
    }
    f1() {
      return this.ge_1.f1();
    }
    g1() {
      var _unary__edvuaz = this.he_1;
      this.he_1 = _unary__edvuaz + 1 | 0;
      return new IndexedValue(checkIndexOverflow(_unary__edvuaz), this.ge_1.g1());
    }
  }
  class MapWithDefault {}
  class EmptyMap {
    constructor() {
      EmptyMap_instance = this;
      this.je_1 = new Long(-888910638, 1920087921);
    }
    equals(other) {
      var tmp;
      if (!(other == null) ? isInterface(other, KtMap) : false) {
        tmp = other.k1();
      } else {
        tmp = false;
      }
      return tmp;
    }
    hashCode() {
      return 0;
    }
    toString() {
      return '{}';
    }
    j1() {
      return 0;
    }
    k1() {
      return true;
    }
    ke(key) {
      return false;
    }
    e2(key) {
      if (!(key == null ? true : !(key == null)))
        return false;
      return this.ke((key == null ? true : !(key == null)) ? key : THROW_CCE());
    }
    le(key) {
      return null;
    }
    g2(key) {
      if (!(key == null ? true : !(key == null)))
        return null;
      return this.le((key == null ? true : !(key == null)) ? key : THROW_CCE());
    }
    j2() {
      return EmptySet_getInstance();
    }
    h2() {
      return EmptySet_getInstance();
    }
    i2() {
      return EmptyList_getInstance();
    }
  }
  class IntIterator {
    g1() {
      return this.qe();
    }
  }
  class EmptySet {
    constructor() {
      EmptySet_instance = this;
      this.re_1 = new Long(1993859828, 793161749);
    }
    equals(other) {
      var tmp;
      if (!(other == null) ? isInterface(other, KtSet) : false) {
        tmp = other.k1();
      } else {
        tmp = false;
      }
      return tmp;
    }
    hashCode() {
      return 0;
    }
    toString() {
      return '[]';
    }
    j1() {
      return 0;
    }
    k1() {
      return true;
    }
    yd(element) {
      return false;
    }
    p1(element) {
      if (!false)
        return false;
      var tmp;
      if (false) {
        tmp = element;
      } else {
        tmp = THROW_CCE();
      }
      return this.yd(tmp);
    }
    se(elements) {
      return elements.k1();
    }
    b2(elements) {
      return this.se(elements);
    }
    e1() {
      return EmptyIterator_instance;
    }
  }
  class Key {}
  class ContinuationInterceptor {}
  function releaseInterceptedContinuation(continuation) {
  }
  class EmptyCoroutineContext {
    constructor() {
      EmptyCoroutineContext_instance = this;
      this.te_1 = new Long(0, 0);
    }
    ia(key) {
      return null;
    }
    hashCode() {
      return 0;
    }
    toString() {
      return 'EmptyCoroutineContext';
    }
  }
  class CoroutineSingletons extends Enum {}
  class EnumEntriesList extends AbstractList {
    static ve(entries) {
      var $this = this.dd();
      $this.ue_1 = entries;
      return $this;
    }
    j1() {
      return this.ue_1.length;
    }
    l1(index) {
      Companion_instance_4.v5(index, this.ue_1.length);
      return this.ue_1[index];
    }
    we(element) {
      if (element === null)
        return false;
      var target = getOrNull(this.ue_1, element.l2_1);
      return target === element;
    }
    p1(element) {
      if (!(element instanceof Enum))
        return false;
      return this.we(element instanceof Enum ? element : THROW_CCE());
    }
    xe(element) {
      if (element === null)
        return -1;
      var ordinal = element.l2_1;
      var target = getOrNull(this.ue_1, ordinal);
      return target === element ? ordinal : -1;
    }
    a2(element) {
      if (!(element instanceof Enum))
        return -1;
      return this.xe(element instanceof Enum ? element : THROW_CCE());
    }
  }
  class Random {
    static af() {
      Default_getInstance();
      return createThis(this);
    }
    qe() {
      return this.bf(32);
    }
    m1(until) {
      return this.cf(0, until);
    }
    cf(from, until) {
      checkRangeBounds(from, until);
      var n = until - from | 0;
      if (n > 0 || n === -2147483648) {
        var tmp;
        if ((n & (-n | 0)) === n) {
          var bitCount = fastLog2(n);
          tmp = this.bf(bitCount);
        } else {
          var v;
          do {
            var bits = this.qe() >>> 1 | 0;
            v = bits % n | 0;
          }
           while (((bits - v | 0) + (n - 1 | 0) | 0) < 0);
          tmp = v;
        }
        var rnd = tmp;
        return from + rnd | 0;
      } else {
        while (true) {
          var rnd_0 = this.qe();
          if (from <= rnd_0 ? rnd_0 < until : false)
            return rnd_0;
        }
      }
    }
    df() {
      return !(this.bf(1) === 0);
    }
  }
  class Default extends Random {
    static ze() {
      Default_instance = null;
      var $this = this.af();
      Default_instance = $this;
      $this.ye_1 = defaultPlatformRandom();
      return $this;
    }
    bf(bitCount) {
      return this.ye_1.bf(bitCount);
    }
    qe() {
      return this.ye_1.qe();
    }
    m1(until) {
      return this.ye_1.m1(until);
    }
    cf(from, until) {
      return this.ye_1.cf(from, until);
    }
    df() {
      return this.ye_1.df();
    }
  }
  class Companion_8 {
    constructor() {
      Companion_instance_8 = this;
      this.lf_1 = new Long(0, 0);
    }
  }
  class XorWowRandom extends Random {
    static mf(x, y, z, w, v, addend) {
      Companion_getInstance_8();
      var $this = this.af();
      $this.ef_1 = x;
      $this.ff_1 = y;
      $this.gf_1 = z;
      $this.hf_1 = w;
      $this.if_1 = v;
      $this.jf_1 = addend;
      checkInvariants($this);
      // Inline function 'kotlin.repeat' call
      var inductionVariable = 0;
      if (inductionVariable < 64)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          $this.qe();
        }
         while (inductionVariable < 64);
      return $this;
    }
    static kf(seed1, seed2) {
      Companion_getInstance_8();
      return this.mf(seed1, seed2, 0, 0, ~seed1, seed1 << 10 ^ (seed2 >>> 4 | 0));
    }
    qe() {
      var t = this.ef_1;
      t = t ^ (t >>> 2 | 0);
      this.ef_1 = this.ff_1;
      this.ff_1 = this.gf_1;
      this.gf_1 = this.hf_1;
      var v0 = this.if_1;
      this.hf_1 = v0;
      t = t ^ t << 1 ^ v0 ^ v0 << 4;
      this.if_1 = t;
      this.jf_1 = this.jf_1 + 362437 | 0;
      return t + this.jf_1 | 0;
    }
    bf(bitCount) {
      return takeUpperBits(this.qe(), bitCount);
    }
  }
  class Companion_9 {
    constructor() {
      Companion_instance_9 = this;
      this.x1_1 = new IntRange(1, 0);
    }
  }
  class IntProgression {
    constructor(start, endInclusive, step) {
      if (step === 0)
        throw IllegalArgumentException.z('Step must be non-zero.');
      if (step === -2147483648)
        throw IllegalArgumentException.z('Step must be greater than Int.MIN_VALUE to avoid overflow on negation.');
      this.rf_1 = start;
      this.sf_1 = getProgressionLastElement(start, endInclusive, step);
      this.tf_1 = step;
    }
    e1() {
      return new IntProgressionIterator(this.rf_1, this.sf_1, this.tf_1);
    }
    k1() {
      return this.tf_1 > 0 ? this.rf_1 > this.sf_1 : this.rf_1 < this.sf_1;
    }
    equals(other) {
      var tmp;
      if (other instanceof IntProgression) {
        tmp = this.k1() && other.k1() || (this.rf_1 === other.rf_1 && this.sf_1 === other.sf_1 && this.tf_1 === other.tf_1);
      } else {
        tmp = false;
      }
      return tmp;
    }
    hashCode() {
      return this.k1() ? -1 : imul(31, imul(31, this.rf_1) + this.sf_1 | 0) + this.tf_1 | 0;
    }
    toString() {
      return this.tf_1 > 0 ? '' + this.rf_1 + '..' + this.sf_1 + ' step ' + this.tf_1 : '' + this.rf_1 + ' downTo ' + this.sf_1 + ' step ' + (-this.tf_1 | 0);
    }
  }
  class ClosedRange {}
  function contains(value) {
    return compareTo(value, this.qf()) >= 0 && compareTo(value, this.uf()) <= 0;
  }
  class IntRange extends IntProgression {
    constructor(start, endInclusive) {
      Companion_getInstance_9();
      super(start, endInclusive, 1);
    }
    qf() {
      return this.rf_1;
    }
    uf() {
      return this.sf_1;
    }
    vf(value) {
      return this.rf_1 <= value && value <= this.sf_1;
    }
    z1(value) {
      return this.vf(typeof value === 'number' ? value : THROW_CCE());
    }
    k1() {
      return this.rf_1 > this.sf_1;
    }
    equals(other) {
      var tmp;
      if (other instanceof IntRange) {
        tmp = this.k1() && other.k1() || (this.rf_1 === other.rf_1 && this.sf_1 === other.sf_1);
      } else {
        tmp = false;
      }
      return tmp;
    }
    hashCode() {
      return this.k1() ? -1 : imul(31, this.rf_1) + this.sf_1 | 0;
    }
    toString() {
      return '' + this.rf_1 + '..' + this.sf_1;
    }
  }
  class IntProgressionIterator extends IntIterator {
    constructor(first, last, step) {
      super();
      this.wf_1 = step;
      this.xf_1 = last;
      this.yf_1 = this.wf_1 > 0 ? first <= last : first >= last;
      this.zf_1 = this.yf_1 ? first : this.xf_1;
    }
    f1() {
      return this.yf_1;
    }
    qe() {
      var value = this.zf_1;
      if (value === this.xf_1) {
        if (!this.yf_1)
          throw NoSuchElementException.n4();
        this.yf_1 = false;
      } else {
        this.zf_1 = this.zf_1 + this.wf_1 | 0;
      }
      return value;
    }
  }
  class Companion_10 {
    y1(rangeStart, rangeEnd, step) {
      return new IntProgression(rangeStart, rangeEnd, step);
    }
  }
  class DeepRecursiveScope {}
  class DeepRecursiveFunction {
    constructor(block) {
      this.cg_1 = block;
    }
  }
  class DeepRecursiveScopeImpl extends DeepRecursiveScope {
    constructor(block, value) {
      super();
      var tmp = this;
      tmp.dg_1 = isSuspendFunction(block, 2) ? block : THROW_CCE();
      this.eg_1 = value;
      var tmp_0 = this;
      tmp_0.fg_1 = isInterface(this, Continuation) ? this : THROW_CCE();
      this.gg_1 = get_UNDEFINED_RESULT();
    }
    w9() {
      return EmptyCoroutineContext_getInstance();
    }
    ig(result) {
      this.fg_1 = null;
      this.gg_1 = result;
    }
    y9(result) {
      return this.ig(result);
    }
    bg(value, $completion) {
      var tmp = this;
      tmp.fg_1 = isInterface($completion, Continuation) ? $completion : THROW_CCE();
      this.eg_1 = value;
      return get_COROUTINE_SUSPENDED();
    }
    hg() {
      $l$loop: while (true) {
        var result = this.gg_1;
        var tmp0_elvis_lhs = this.fg_1;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          // Inline function 'kotlin.getOrThrow' call
          var this_0 = new Result(result) instanceof Result ? result : THROW_CCE();
          throwOnFailure(this_0);
          var tmp_0 = _Result___get_value__impl__bjfvqg(this_0);
          return (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var cont = tmp;
        if (equals(get_UNDEFINED_RESULT(), result)) {
          var tmp_1;
          try {
            var tmp0 = this.dg_1;
            // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
            var param = this.eg_1;
            tmp_1 = startCoroutineUninterceptedOrReturnGeneratorVersion(tmp0, this, param, cont);
          } catch ($p) {
            var tmp_2;
            if ($p instanceof Error) {
              var e = $p;
              // Inline function 'kotlin.coroutines.resumeWithException' call
              // Inline function 'kotlin.Companion.failure' call
              var tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(e));
              cont.y9(tmp$ret$2);
              continue $l$loop;
            } else {
              throw $p;
            }
          }
          var r = tmp_1;
          if (!(r === get_COROUTINE_SUSPENDED())) {
            // Inline function 'kotlin.coroutines.resume' call
            // Inline function 'kotlin.Companion.success' call
            var value = (r == null ? true : !(r == null)) ? r : THROW_CCE();
            var tmp$ret$4 = _Result___init__impl__xyqfz8(value);
            cont.y9(tmp$ret$4);
          }
        } else {
          this.gg_1 = get_UNDEFINED_RESULT();
          cont.y9(result);
        }
      }
    }
  }
  class LazyThreadSafetyMode extends Enum {}
  class UnsafeLazyImpl {
    constructor(initializer) {
      this.jg_1 = initializer;
      this.kg_1 = UNINITIALIZED_VALUE_instance;
    }
    d2() {
      if (this.kg_1 === UNINITIALIZED_VALUE_instance) {
        this.kg_1 = ensureNotNull(this.jg_1)();
        this.jg_1 = null;
      }
      var tmp = this.kg_1;
      return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    }
    lg() {
      return !(this.kg_1 === UNINITIALIZED_VALUE_instance);
    }
    toString() {
      return this.lg() ? toString_0(this.d2()) : 'Lazy value not initialized yet.';
    }
  }
  class UNINITIALIZED_VALUE {}
  class Companion_11 {}
  class Failure {
    constructor(exception) {
      this.mg_1 = exception;
    }
    equals(other) {
      var tmp;
      if (other instanceof Failure) {
        tmp = equals(this.mg_1, other.mg_1);
      } else {
        tmp = false;
      }
      return tmp;
    }
    hashCode() {
      return hashCode_0(this.mg_1);
    }
    toString() {
      return 'Failure(' + this.mg_1.toString() + ')';
    }
  }
  class Result {
    constructor(value) {
      this.ng_1 = value;
    }
    toString() {
      return Result__toString_impl_yu5r8k(this.ng_1);
    }
    hashCode() {
      return Result__hashCode_impl_d2zufp(this.ng_1);
    }
    equals(other) {
      return Result__equals_impl_bxgmep(this.ng_1, other);
    }
  }
  class NotImplementedError extends Error_0 {
    static ma(message) {
      message = message === VOID ? 'An operation is not implemented.' : message;
      var $this = this.i(message);
      captureStack($this, $this.la_1);
      return $this;
    }
  }
  class Pair {
    constructor(first, second) {
      this.me_1 = first;
      this.ne_1 = second;
    }
    toString() {
      return '(' + toString_0(this.me_1) + ', ' + toString_0(this.ne_1) + ')';
    }
    oe() {
      return this.me_1;
    }
    pe() {
      return this.ne_1;
    }
    hashCode() {
      var result = this.me_1 == null ? 0 : hashCode_0(this.me_1);
      result = imul(result, 31) + (this.ne_1 == null ? 0 : hashCode_0(this.ne_1)) | 0;
      return result;
    }
    equals(other) {
      if (this === other)
        return true;
      if (!(other instanceof Pair))
        return false;
      if (!equals(this.me_1, other.me_1))
        return false;
      if (!equals(this.ne_1, other.ne_1))
        return false;
      return true;
    }
  }
  class Triple {
    constructor(first, second, third) {
      this.og_1 = first;
      this.pg_1 = second;
      this.qg_1 = third;
    }
    toString() {
      return '(' + toString_0(this.og_1) + ', ' + toString_0(this.pg_1) + ', ' + toString_0(this.qg_1) + ')';
    }
    oe() {
      return this.og_1;
    }
    pe() {
      return this.pg_1;
    }
    rg() {
      return this.qg_1;
    }
    hashCode() {
      var result = this.og_1 == null ? 0 : hashCode_0(this.og_1);
      result = imul(result, 31) + (this.pg_1 == null ? 0 : hashCode_0(this.pg_1)) | 0;
      result = imul(result, 31) + (this.qg_1 == null ? 0 : hashCode_0(this.qg_1)) | 0;
      return result;
    }
    equals(other) {
      if (this === other)
        return true;
      if (!(other instanceof Triple))
        return false;
      if (!equals(this.og_1, other.og_1))
        return false;
      if (!equals(this.pg_1, other.pg_1))
        return false;
      if (!equals(this.qg_1, other.qg_1))
        return false;
      return true;
    }
  }
  class SerializationStrategy {}
  class DeserializationStrategy {}
  class KSerializer {}
  class SealedClassSerializer$$inlined$groupingBy$1 {
    constructor($this) {
      this.mh_1 = $this;
    }
    a4() {
      return this.mh_1.e1();
    }
    nh(element) {
      return element.d2().sg().oh();
    }
    b4(element) {
      return this.nh((element == null ? true : !(element == null)) ? element : THROW_CCE());
    }
  }
  class AbstractPolymorphicSerializer {
    static qh() {
      return createThis(this);
    }
    sh(encoder, value) {
      var actualSerializer = findPolymorphicSerializer(this, encoder, value);
      // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
      var descriptor = this.sg();
      var composite = encoder.ik(descriptor);
      composite.fl(this.sg(), 0, actualSerializer.sg().oh());
      var tmp = this.sg();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var tmp$ret$0 = isInterface(actualSerializer, SerializationStrategy) ? actualSerializer : THROW_CCE();
      composite.gl(tmp, 1, tmp$ret$0, value);
      composite.jk(descriptor);
    }
    tg(encoder, value) {
      return this.sh(encoder, !(value == null) ? value : THROW_CCE());
    }
    ug(decoder) {
      // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
      var descriptor = this.sg();
      var composite = decoder.ik(descriptor);
      var tmp$ret$0;
      $l$block: {
        var klassName = null;
        var value = null;
        if (composite.rk()) {
          tmp$ret$0 = decodeSequentially_0(this, composite);
          break $l$block;
        }
        mainLoop: while (true) {
          var index = composite.sk(this.sg());
          switch (index) {
            case -1:
              break mainLoop;
            case 0:
              klassName = composite.mk(this.sg(), index);
              break;
            case 1:
              var tmp0 = klassName;
              var tmp$ret$2;
              $l$block_0: {
                // Inline function 'kotlin.requireNotNull' call
                if (tmp0 == null) {
                  var message = 'Cannot read polymorphic value before its type token';
                  throw IllegalArgumentException.z(toString_1(message));
                } else {
                  tmp$ret$2 = tmp0;
                  break $l$block_0;
                }
              }

              klassName = tmp$ret$2;
              var serializer = findPolymorphicSerializer_0(this, composite, klassName);
              value = composite.ok(this.sg(), index, serializer);
              break;
            default:
              var tmp0_elvis_lhs = klassName;
              throw SerializationException.yh('Invalid index in polymorphic deserialization of ' + (tmp0_elvis_lhs == null ? 'unknown class' : tmp0_elvis_lhs) + ('\n Expected 0, 1 or DECODE_DONE(-1), but found ' + index));
          }
        }
        var tmp0_0 = value;
        var tmp$ret$4;
        $l$block_1: {
          // Inline function 'kotlin.requireNotNull' call
          if (tmp0_0 == null) {
            var message_0 = 'Polymorphic value has not been read for class ' + klassName;
            throw IllegalArgumentException.z(toString_1(message_0));
          } else {
            tmp$ret$4 = tmp0_0;
            break $l$block_1;
          }
        }
        var tmp = tmp$ret$4;
        tmp$ret$0 = !(tmp == null) ? tmp : THROW_CCE();
      }
      var result = tmp$ret$0;
      composite.jk(descriptor);
      return result;
    }
    xg(decoder, klassName) {
      return decoder.qk().nl(this.wg(), klassName);
    }
    vg(encoder, value) {
      return encoder.qk().ol(this.wg(), value);
    }
  }
  class SealedClassSerializer extends AbstractPolymorphicSerializer {
    static ph(serialName, baseClass, subclasses, subclassSerializers) {
      var $this = this.qh();
      $this.yg_1 = baseClass;
      $this.zg_1 = emptyList();
      var tmp = $this;
      var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
      tmp.ah_1 = lazy(tmp_0, SealedClassSerializer$descriptor$delegate$lambda(serialName, $this));
      if (!(subclasses.length === subclassSerializers.length)) {
        throw IllegalArgumentException.z('All subclasses of sealed class ' + $this.yg_1.ib() + ' should be marked @Serializable');
      }
      $this.bh_1 = toMap(zip(subclasses, subclassSerializers));
      var tmp_1 = $this;
      // Inline function 'kotlin.collections.groupingBy' call
      var this_0 = $this.bh_1.j2();
      // Inline function 'kotlin.collections.aggregate' call
      var tmp0 = new SealedClassSerializer$$inlined$groupingBy$1(this_0);
      // Inline function 'kotlin.collections.mutableMapOf' call
      // Inline function 'kotlin.collections.aggregateTo' call
      var destination = LinkedHashMap.z3();
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = tmp0.a4();
      while (_iterator__ex2g4s.f1()) {
        var e = _iterator__ex2g4s.g1();
        var key = tmp0.b4(e);
        var accumulator = destination.g2(key);
        accumulator == null && !destination.e2(key);
        if (!(accumulator == null)) {
          // Inline function 'kotlin.error' call
          var message = "Multiple sealed subclasses of '" + toString_1($this.yg_1) + "' have the same serial name '" + key + "':" + (" '" + toString_1(accumulator.c2()) + "', '" + toString_1(e.c2()) + "'");
          throw IllegalStateException.c3(toString_1(message));
        }
        // Inline function 'kotlin.collections.set' call
        destination.c4(key, e);
      }
      // Inline function 'kotlin.collections.mapValues' call
      // Inline function 'kotlin.collections.mapValuesTo' call
      var destination_0 = LinkedHashMap.u9(mapCapacity(destination.j1()));
      // Inline function 'kotlin.collections.associateByTo' call
      var _iterator__ex2g4s_0 = destination.j2().e1();
      while (_iterator__ex2g4s_0.f1()) {
        var element = _iterator__ex2g4s_0.g1();
        var tmp_2 = element.c2();
        var tmp$ret$8 = element.d2().d2();
        destination_0.c4(tmp_2, tmp$ret$8);
      }
      tmp_1.ch_1 = destination_0;
      return $this;
    }
    wg() {
      return this.yg_1;
    }
    static rh(serialName, baseClass, subclasses, subclassSerializers, classAnnotations) {
      var $this = this.ph(serialName, baseClass, subclasses, subclassSerializers);
      $this.zg_1 = asList(classAnnotations);
      return $this;
    }
    sg() {
      var tmp0 = this.ah_1;
      var tmp = KProperty1;
      // Inline function 'kotlin.getValue' call
      getPropertyCallableRef('descriptor', 1, tmp, SealedClassSerializer$_get_descriptor_$ref_m511rz(), null);
      return tmp0.d2();
    }
    xg(decoder, klassName) {
      // Inline function 'kotlin.collections.get' call
      var this_0 = this.ch_1;
      var tmp0_elvis_lhs = (isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).g2(klassName);
      return tmp0_elvis_lhs == null ? super.xg(decoder, klassName) : tmp0_elvis_lhs;
    }
    vg(encoder, value) {
      var tmp0_elvis_lhs = this.bh_1.g2(getKClassFromExpression(value));
      var tmp1_safe_receiver = tmp0_elvis_lhs == null ? super.vg(encoder, value) : tmp0_elvis_lhs;
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlinx.serialization.internal.cast' call
        tmp = isInterface(tmp1_safe_receiver, SerializationStrategy) ? tmp1_safe_receiver : THROW_CCE();
      }
      return tmp;
    }
  }
  class SerializationException extends IllegalArgumentException {
    static xh() {
      var $this = this.qa();
      init_kotlinx_serialization_SerializationException($this);
      return $this;
    }
    static yh(message) {
      var $this = this.z(message);
      init_kotlinx_serialization_SerializationException($this);
      return $this;
    }
    static zh(message, cause) {
      var $this = this.sa(message, cause);
      init_kotlinx_serialization_SerializationException($this);
      return $this;
    }
  }
  class UnknownFieldException extends SerializationException {
    static fi(message) {
      var $this = this.yh(message);
      captureStack($this, $this.ei_1);
      return $this;
    }
    static gi(index) {
      return this.fi('An unknown field for index ' + index);
    }
  }
  class MissingFieldException extends SerializationException {
    static ni(missingFields, message, cause) {
      var $this = this.zh(message, cause);
      captureStack($this, $this.mi_1);
      $this.li_1 = missingFields;
      return $this;
    }
    static oi(missingFields, serialName) {
      return this.ni(missingFields, missingFields.j1() === 1 ? "Field '" + missingFields.l1(0) + "' is required for type with serial name '" + serialName + "', but it was missing" : 'Fields ' + toString_1(missingFields) + " are required for type with serial name '" + serialName + "', but they were missing", null);
    }
  }
  class SerialDescriptor {}
  function get_isNullable() {
    return false;
  }
  function get_isInline() {
    return false;
  }
  function get_annotations() {
    return emptyList();
  }
  class ContextDescriptor {}
  class elementDescriptors$1 {
    constructor($this_elementDescriptors) {
      this.fj_1 = $this_elementDescriptors;
      this.ej_1 = $this_elementDescriptors.xi();
    }
    f1() {
      return this.ej_1 > 0;
    }
    g1() {
      var tmp = this.fj_1.xi();
      var _unary__edvuaz = this.ej_1;
      this.ej_1 = _unary__edvuaz - 1 | 0;
      return this.fj_1.cj(tmp - _unary__edvuaz | 0);
    }
  }
  class elementDescriptors$$inlined$Iterable$1 {
    constructor($this_elementDescriptors) {
      this.gj_1 = $this_elementDescriptors;
    }
    e1() {
      return new elementDescriptors$1(this.gj_1);
    }
  }
  class elementNames$1 {
    constructor($this_elementNames) {
      this.ij_1 = $this_elementNames;
      this.hj_1 = $this_elementNames.xi();
    }
    f1() {
      return this.hj_1 > 0;
    }
    g1() {
      var tmp = this.ij_1.xi();
      var _unary__edvuaz = this.hj_1;
      this.hj_1 = _unary__edvuaz - 1 | 0;
      return this.ij_1.zi(tmp - _unary__edvuaz | 0);
    }
  }
  class elementNames$$inlined$Iterable$1 {
    constructor($this_elementNames) {
      this.jj_1 = $this_elementNames;
    }
    e1() {
      return new elementNames$1(this.jj_1);
    }
  }
  class ClassSerialDescriptorBuilder {
    constructor(serialName) {
      this.dh_1 = serialName;
      this.eh_1 = false;
      this.fh_1 = emptyList();
      this.gh_1 = ArrayList.o1();
      this.hh_1 = HashSet.a8();
      this.ih_1 = ArrayList.o1();
      this.jh_1 = ArrayList.o1();
      this.kh_1 = ArrayList.o1();
    }
    kj(elementName, descriptor, annotations, isOptional) {
      // Inline function 'kotlin.require' call
      if (!this.hh_1.r(elementName)) {
        var message = "Element with name '" + elementName + "' is already registered in " + this.dh_1;
        throw IllegalArgumentException.z(toString_1(message));
      }
      // Inline function 'kotlin.collections.plusAssign' call
      this.gh_1.r(elementName);
      // Inline function 'kotlin.collections.plusAssign' call
      this.ih_1.r(descriptor);
      // Inline function 'kotlin.collections.plusAssign' call
      this.jh_1.r(annotations);
      // Inline function 'kotlin.collections.plusAssign' call
      this.kh_1.r(isOptional);
    }
    lh(elementName, descriptor, annotations, isOptional, $super) {
      annotations = annotations === VOID ? emptyList() : annotations;
      isOptional = isOptional === VOID ? false : isOptional;
      var tmp;
      if ($super === VOID) {
        this.kj(elementName, descriptor, annotations, isOptional);
        tmp = Unit_instance;
      } else {
        tmp = $super.kj.call(this, elementName, descriptor, annotations, isOptional);
      }
      return tmp;
    }
  }
  class CachedNames {}
  class SerialDescriptorImpl {
    constructor(serialName, kind, elementsCount, typeParameters, builder) {
      this.lj_1 = serialName;
      this.mj_1 = kind;
      this.nj_1 = elementsCount;
      this.oj_1 = builder.fh_1;
      this.pj_1 = toHashSet(builder.gh_1);
      var tmp = this;
      // Inline function 'kotlin.collections.toTypedArray' call
      var this_0 = builder.gh_1;
      tmp.qj_1 = copyToArray(this_0);
      this.rj_1 = compactArray(builder.ih_1);
      var tmp_0 = this;
      // Inline function 'kotlin.collections.toTypedArray' call
      var this_1 = builder.jh_1;
      tmp_0.sj_1 = copyToArray(this_1);
      this.tj_1 = toBooleanArray(builder.kh_1);
      var tmp_1 = this;
      // Inline function 'kotlin.collections.map' call
      var this_2 = withIndex(this.qj_1);
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList.d1(collectionSizeOrDefault(this_2, 10));
      var _iterator__ex2g4s = this_2.e1();
      while (_iterator__ex2g4s.f1()) {
        var item = _iterator__ex2g4s.g1();
        var tmp$ret$2 = to(item.ee_1, item.de_1);
        destination.r(tmp$ret$2);
      }
      tmp_1.uj_1 = toMap(destination);
      this.vj_1 = compactArray(typeParameters);
      var tmp_2 = this;
      tmp_2.wj_1 = lazy_0(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
    }
    oh() {
      return this.lj_1;
    }
    vi() {
      return this.mj_1;
    }
    xi() {
      return this.nj_1;
    }
    yi() {
      return this.oj_1;
    }
    xj() {
      return this.pj_1;
    }
    zi(index) {
      return getChecked(this.qj_1, index);
    }
    aj(name) {
      var tmp0_elvis_lhs = this.uj_1.g2(name);
      return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
    }
    bj(index) {
      return getChecked(this.sj_1, index);
    }
    cj(index) {
      return getChecked(this.rj_1, index);
    }
    dj(index) {
      return getChecked_0(this.tj_1, index);
    }
    equals(other) {
      var tmp$ret$0;
      $l$block_5: {
        // Inline function 'kotlinx.serialization.internal.equalsImpl' call
        if (this === other) {
          tmp$ret$0 = true;
          break $l$block_5;
        }
        if (!(other instanceof SerialDescriptorImpl)) {
          tmp$ret$0 = false;
          break $l$block_5;
        }
        if (!(this.oh() === other.oh())) {
          tmp$ret$0 = false;
          break $l$block_5;
        }
        if (!contentEquals(this.vj_1, other.vj_1)) {
          tmp$ret$0 = false;
          break $l$block_5;
        }
        if (!(this.xi() === other.xi())) {
          tmp$ret$0 = false;
          break $l$block_5;
        }
        var inductionVariable = 0;
        var last = this.xi();
        if (inductionVariable < last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            if (!(this.cj(index).oh() === other.cj(index).oh())) {
              tmp$ret$0 = false;
              break $l$block_5;
            }
            if (!equals(this.cj(index).vi(), other.cj(index).vi())) {
              tmp$ret$0 = false;
              break $l$block_5;
            }
          }
           while (inductionVariable < last);
        tmp$ret$0 = true;
      }
      return tmp$ret$0;
    }
    hashCode() {
      return _get__hashCode__tgwhef(this);
    }
    toString() {
      return toStringImpl_0(this);
    }
  }
  class SerialKind {
    toString() {
      return ensureNotNull(getKClassFromExpression(this).ib());
    }
    hashCode() {
      return getStringHashCode(this.toString());
    }
  }
  class ENUM extends SerialKind {
    constructor() {
      ENUM_instance = null;
      super();
      ENUM_instance = this;
    }
  }
  class CONTEXTUAL extends SerialKind {
    constructor() {
      CONTEXTUAL_instance = null;
      super();
      CONTEXTUAL_instance = this;
    }
  }
  class StructureKind extends SerialKind {}
  class CLASS extends StructureKind {
    constructor() {
      CLASS_instance = null;
      super();
      CLASS_instance = this;
    }
  }
  class LIST extends StructureKind {
    constructor() {
      LIST_instance = null;
      super();
      LIST_instance = this;
    }
  }
  class MAP extends StructureKind {
    constructor() {
      MAP_instance = null;
      super();
      MAP_instance = this;
    }
  }
  class OBJECT extends StructureKind {
    constructor() {
      OBJECT_instance = null;
      super();
      OBJECT_instance = this;
    }
  }
  class PrimitiveKind extends SerialKind {}
  class BOOLEAN extends PrimitiveKind {
    constructor() {
      BOOLEAN_instance = null;
      super();
      BOOLEAN_instance = this;
    }
  }
  class INT extends PrimitiveKind {
    constructor() {
      INT_instance = null;
      super();
      INT_instance = this;
    }
  }
  class LONG extends PrimitiveKind {
    constructor() {
      LONG_instance = null;
      super();
      LONG_instance = this;
    }
  }
  class STRING extends PrimitiveKind {
    constructor() {
      STRING_instance = null;
      super();
      STRING_instance = this;
    }
  }
  class PolymorphicKind extends SerialKind {}
  class SEALED extends PolymorphicKind {
    constructor() {
      SEALED_instance = null;
      super();
      SEALED_instance = this;
    }
  }
  class Decoder {}
  function decodeSerializableValue(deserializer) {
    return deserializer.ug(this);
  }
  class CompositeDecoder {}
  function decodeSequentially() {
    return false;
  }
  function decodeCollectionSize(descriptor) {
    return -1;
  }
  function decodeSerializableElement$default(descriptor, index, deserializer, previousValue, $super) {
    previousValue = previousValue === VOID ? null : previousValue;
    return $super === VOID ? this.nk(descriptor, index, deserializer, previousValue) : $super.nk.call(this, descriptor, index, deserializer, previousValue);
  }
  class AbstractDecoder {
    yj() {
      throw SerializationException.yh(toString_1(getKClassFromExpression(this)) + " can't retrieve untyped values");
    }
    zj() {
      return true;
    }
    ak() {
      return null;
    }
    bk() {
      var tmp = this.yj();
      return typeof tmp === 'boolean' ? tmp : THROW_CCE();
    }
    ck() {
      var tmp = this.yj();
      return typeof tmp === 'number' ? tmp : THROW_CCE();
    }
    dk() {
      var tmp = this.yj();
      return tmp instanceof Long ? tmp : THROW_CCE();
    }
    ek() {
      var tmp = this.yj();
      return typeof tmp === 'string' ? tmp : THROW_CCE();
    }
    fk(enumDescriptor) {
      var tmp = this.yj();
      return typeof tmp === 'number' ? tmp : THROW_CCE();
    }
    gk(deserializer, previousValue) {
      return this.hk(deserializer);
    }
    ik(descriptor) {
      return this;
    }
    jk(descriptor) {
    }
    kk(descriptor, index) {
      return this.bk();
    }
    lk(descriptor, index) {
      return this.ck();
    }
    mk(descriptor, index) {
      return this.ek();
    }
    nk(descriptor, index, deserializer, previousValue) {
      return this.gk(deserializer, previousValue);
    }
    pk(descriptor, index, deserializer, previousValue) {
      // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
      var isNullabilitySupported = deserializer.sg().pi();
      var tmp;
      if (isNullabilitySupported || this.zj()) {
        tmp = this.gk(deserializer, previousValue);
      } else {
        tmp = this.ak();
      }
      return tmp;
    }
  }
  class Encoder {}
  function encodeNotNullMark() {
  }
  function beginCollection(descriptor, collectionSize) {
    return this.ik(descriptor);
  }
  function encodeSerializableValue(serializer, value) {
    serializer.tg(this, value);
  }
  function encodeNullableSerializableValue(serializer, value) {
    var isNullabilitySupported = serializer.sg().pi();
    if (isNullabilitySupported) {
      return this.hl(isInterface(serializer, SerializationStrategy) ? serializer : THROW_CCE(), value);
    }
    if (value == null) {
      this.xk();
    } else {
      this.kl();
      this.hl(serializer, value);
    }
  }
  class CompositeEncoder {}
  function shouldEncodeElementDefault(descriptor, index) {
    return true;
  }
  class AbstractEncoder {
    static uk() {
      return createThis(this);
    }
    ik(descriptor) {
      return this;
    }
    jk(descriptor) {
    }
    vk(descriptor, index) {
      return true;
    }
    wk(value) {
      throw SerializationException.yh('Non-serializable ' + toString_1(getKClassFromExpression(value)) + ' is not supported by ' + toString_1(getKClassFromExpression(this)) + ' encoder');
    }
    xk() {
      throw SerializationException.yh("'null' is not supported by default");
    }
    yk(value) {
      return this.wk(value);
    }
    zk(value) {
      return this.wk(value);
    }
    al(value) {
      return this.wk(value);
    }
    bl(value) {
      return this.wk(value);
    }
    cl(enumDescriptor, index) {
      return this.wk(index);
    }
    dl(descriptor, index, value) {
      if (this.vk(descriptor, index)) {
        this.yk(value);
      }
    }
    el(descriptor, index, value) {
      if (this.vk(descriptor, index)) {
        this.zk(value);
      }
    }
    fl(descriptor, index, value) {
      if (this.vk(descriptor, index)) {
        this.bl(value);
      }
    }
    gl(descriptor, index, serializer, value) {
      if (this.vk(descriptor, index)) {
        this.hl(serializer, value);
      }
    }
    il(descriptor, index, serializer, value) {
      if (this.vk(descriptor, index)) {
        this.jl(serializer, value);
      }
    }
  }
  class ListLikeDescriptor {
    constructor(elementDescriptor) {
      this.rl_1 = elementDescriptor;
      this.sl_1 = 1;
    }
    vi() {
      return LIST_getInstance();
    }
    xi() {
      return this.sl_1;
    }
    zi(index) {
      return index.toString();
    }
    aj(name) {
      var tmp0_elvis_lhs = toIntOrNull(name);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        throw IllegalArgumentException.z(name + ' is not a valid list index');
      } else {
        tmp = tmp0_elvis_lhs;
      }
      return tmp;
    }
    dj(index) {
      // Inline function 'kotlin.require' call
      if (!(index >= 0)) {
        var message = 'Illegal index ' + index + ', ' + this.oh() + ' expects only non-negative indices';
        throw IllegalArgumentException.z(toString_1(message));
      }
      return false;
    }
    bj(index) {
      // Inline function 'kotlin.require' call
      if (!(index >= 0)) {
        var message = 'Illegal index ' + index + ', ' + this.oh() + ' expects only non-negative indices';
        throw IllegalArgumentException.z(toString_1(message));
      }
      return emptyList();
    }
    cj(index) {
      // Inline function 'kotlin.require' call
      if (!(index >= 0)) {
        var message = 'Illegal index ' + index + ', ' + this.oh() + ' expects only non-negative indices';
        throw IllegalArgumentException.z(toString_1(message));
      }
      return this.rl_1;
    }
    equals(other) {
      if (this === other)
        return true;
      if (!(other instanceof ListLikeDescriptor))
        return false;
      if (equals(this.rl_1, other.rl_1) && this.oh() === other.oh())
        return true;
      return false;
    }
    hashCode() {
      return imul(hashCode_0(this.rl_1), 31) + getStringHashCode(this.oh()) | 0;
    }
    toString() {
      return this.oh() + '(' + toString_1(this.rl_1) + ')';
    }
  }
  class ArrayListClassDesc extends ListLikeDescriptor {
    oh() {
      return 'kotlin.collections.ArrayList';
    }
  }
  class AbstractCollectionSerializer {
    om(decoder, previous) {
      var tmp1_elvis_lhs = previous == null ? null : this.bm(previous);
      var builder = tmp1_elvis_lhs == null ? this.vl() : tmp1_elvis_lhs;
      var startIndex = this.xl(builder);
      var compositeDecoder = decoder.ik(this.sg());
      if (compositeDecoder.rk()) {
        this.lm(compositeDecoder, builder, startIndex, readSize(this, compositeDecoder, builder));
      } else {
        $l$loop: while (true) {
          var index = compositeDecoder.sk(this.sg());
          if (index === -1)
            break $l$loop;
          this.nm(compositeDecoder, startIndex + index | 0, builder);
        }
      }
      compositeDecoder.jk(this.sg());
      return this.zl(builder);
    }
    ug(decoder) {
      return this.om(decoder, null);
    }
    nm(decoder, index, builder, checkIndex, $super) {
      checkIndex = checkIndex === VOID ? true : checkIndex;
      var tmp;
      if ($super === VOID) {
        this.mm(decoder, index, builder, checkIndex);
        tmp = Unit_instance;
      } else {
        tmp = $super.mm.call(this, decoder, index, builder, checkIndex);
      }
      return tmp;
    }
  }
  class CollectionLikeSerializer extends AbstractCollectionSerializer {
    constructor(elementSerializer) {
      super();
      this.jm_1 = elementSerializer;
    }
    km(encoder, value) {
      var size = this.pm(value);
      // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
      var descriptor = this.sg();
      var composite = encoder.ll(descriptor, size);
      var iterator = this.qm(value);
      var inductionVariable = 0;
      if (inductionVariable < size)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          composite.gl(this.sg(), index, this.jm_1, iterator.g1());
        }
         while (inductionVariable < size);
      composite.jk(descriptor);
    }
    tg(encoder, value) {
      return this.km(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
    }
    lm(decoder, builder, startIndex, size) {
      // Inline function 'kotlin.require' call
      if (!(size >= 0)) {
        var message = 'Size must be known in advance when using READ_ALL';
        throw IllegalArgumentException.z(toString_1(message));
      }
      var inductionVariable = 0;
      if (inductionVariable < size)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          this.mm(decoder, startIndex + index | 0, builder, false);
        }
         while (inductionVariable < size);
    }
    mm(decoder, index, builder, checkIndex) {
      this.fm(builder, index, decoder.ok(this.sg(), index, this.jm_1));
    }
  }
  class CollectionSerializer extends CollectionLikeSerializer {
    hm(_this__u8e3s4) {
      return _this__u8e3s4.j1();
    }
    pm(_this__u8e3s4) {
      return this.hm((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
    }
    im(_this__u8e3s4) {
      return _this__u8e3s4.e1();
    }
    qm(_this__u8e3s4) {
      return this.im((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
    }
  }
  class ArrayListSerializer extends CollectionSerializer {
    constructor(element) {
      super(element);
      this.ul_1 = new ArrayListClassDesc(element.sg());
    }
    sg() {
      return this.ul_1;
    }
    vl() {
      // Inline function 'kotlin.collections.arrayListOf' call
      return ArrayList.o1();
    }
    wl(_this__u8e3s4) {
      return _this__u8e3s4.j1();
    }
    xl(_this__u8e3s4) {
      return this.wl(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
    }
    yl(_this__u8e3s4) {
      return _this__u8e3s4;
    }
    zl(_this__u8e3s4) {
      return this.yl(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
    }
    am(_this__u8e3s4) {
      var tmp0_elvis_lhs = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : null;
      return tmp0_elvis_lhs == null ? ArrayList.q(_this__u8e3s4) : tmp0_elvis_lhs;
    }
    bm(_this__u8e3s4) {
      return this.am((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtList) : false) ? _this__u8e3s4 : THROW_CCE());
    }
    cm(_this__u8e3s4, size) {
      return _this__u8e3s4.w5(size);
    }
    dm(_this__u8e3s4, size) {
      return this.cm(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
    }
    em(_this__u8e3s4, index, element) {
      _this__u8e3s4.w4(index, element);
    }
    fm(_this__u8e3s4, index, element) {
      var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
      return this.em(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
    }
  }
  class Companion_12 {
    constructor() {
      Companion_instance_12 = this;
      this.rm_1 = longArray(0);
    }
  }
  class ElementMarker {
    constructor(descriptor, readIfAbsent) {
      Companion_getInstance_12();
      this.sm_1 = descriptor;
      this.tm_1 = readIfAbsent;
      var elementsCount = this.sm_1.xi();
      if (elementsCount <= 64) {
        var tmp = this;
        var tmp_0;
        if (elementsCount === 64) {
          tmp_0 = new Long(0, 0);
        } else {
          tmp_0 = shiftLeft(new Long(-1, -1), elementsCount);
        }
        tmp.um_1 = tmp_0;
        this.vm_1 = Companion_getInstance_12().rm_1;
      } else {
        this.um_1 = new Long(0, 0);
        this.vm_1 = prepareHighMarksArray(this, elementsCount);
      }
    }
    wm(index) {
      if (index < 64) {
        this.um_1 = bitwiseOr(this.um_1, shiftLeft(new Long(1, 0), index));
      } else {
        markHigh(this, index);
      }
    }
    xm() {
      var elementsCount = this.sm_1.xi();
      while (!equalsLong(this.um_1, new Long(-1, -1))) {
        var index = countTrailingZeroBits(invert(this.um_1));
        this.um_1 = bitwiseOr(this.um_1, shiftLeft(new Long(1, 0), index));
        if (this.tm_1(this.sm_1, index)) {
          return index;
        }
      }
      if (elementsCount > 64) {
        return nextUnmarkedHighIndex(this);
      }
      return -1;
    }
  }
  class EnumSerializer {
    constructor(serialName, values) {
      this.ym_1 = values;
      this.zm_1 = null;
      var tmp = this;
      tmp.an_1 = lazy_0(EnumSerializer$descriptor$delegate$lambda(this, serialName));
    }
    sg() {
      var tmp0 = this.an_1;
      var tmp = KProperty1;
      // Inline function 'kotlin.getValue' call
      getPropertyCallableRef('descriptor', 1, tmp, EnumSerializer$_get_descriptor_$ref_j67dlw(), null);
      return tmp0.d2();
    }
    on(encoder, value) {
      var index = indexOf(this.ym_1, value);
      if (index === -1) {
        throw SerializationException.yh(toString_1(value) + ' is not a valid enum ' + this.sg().oh() + ', ' + ('must be one of ' + contentToString(this.ym_1)));
      }
      encoder.cl(this.sg(), index);
    }
    tg(encoder, value) {
      return this.on(encoder, value instanceof Enum ? value : THROW_CCE());
    }
    ug(decoder) {
      var index = decoder.fk(this.sg());
      if (!(0 <= index ? index <= (this.ym_1.length - 1 | 0) : false)) {
        throw SerializationException.yh('' + index + ' is not among valid ' + this.sg().oh() + ' enum values, ' + ('values size is ' + this.ym_1.length));
      }
      return this.ym_1[index];
    }
    toString() {
      return 'kotlinx.serialization.internal.EnumSerializer<' + this.sg().oh() + '>';
    }
  }
  class PluginGeneratedSerialDescriptor {
    constructor(serialName, generatedSerializer, elementsCount) {
      generatedSerializer = generatedSerializer === VOID ? null : generatedSerializer;
      this.bn_1 = serialName;
      this.cn_1 = generatedSerializer;
      this.dn_1 = elementsCount;
      this.en_1 = -1;
      var tmp = this;
      var tmp_0 = 0;
      var tmp_1 = this.dn_1;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_2 = Array(tmp_1);
      while (tmp_0 < tmp_1) {
        tmp_2[tmp_0] = '[UNINITIALIZED]';
        tmp_0 = tmp_0 + 1 | 0;
      }
      tmp.fn_1 = tmp_2;
      var tmp_3 = this;
      // Inline function 'kotlin.arrayOfNulls' call
      var size = this.dn_1;
      tmp_3.gn_1 = Array(size);
      this.hn_1 = null;
      this.in_1 = booleanArray(this.dn_1);
      this.jn_1 = emptyMap();
      var tmp_4 = this;
      var tmp_5 = LazyThreadSafetyMode_PUBLICATION_getInstance();
      tmp_4.kn_1 = lazy(tmp_5, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
      var tmp_6 = this;
      var tmp_7 = LazyThreadSafetyMode_PUBLICATION_getInstance();
      tmp_6.ln_1 = lazy(tmp_7, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
      var tmp_8 = this;
      var tmp_9 = LazyThreadSafetyMode_PUBLICATION_getInstance();
      tmp_8.mn_1 = lazy(tmp_9, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
    }
    oh() {
      return this.bn_1;
    }
    xi() {
      return this.dn_1;
    }
    vi() {
      return CLASS_getInstance();
    }
    yi() {
      var tmp0_elvis_lhs = this.hn_1;
      return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
    }
    xj() {
      return this.jn_1.h2();
    }
    do() {
      var tmp0 = this.ln_1;
      var tmp = KProperty1;
      // Inline function 'kotlin.getValue' call
      getPropertyCallableRef('typeParameterDescriptors', 1, tmp, PluginGeneratedSerialDescriptor$_get_typeParameterDescriptors_$ref_jk3pka(), null);
      return tmp0.d2();
    }
    eo(name, isOptional) {
      this.en_1 = this.en_1 + 1 | 0;
      this.fn_1[this.en_1] = name;
      this.in_1[this.en_1] = isOptional;
      this.gn_1[this.en_1] = null;
      if (this.en_1 === (this.dn_1 - 1 | 0)) {
        this.jn_1 = buildIndices(this);
      }
    }
    nn(name, isOptional, $super) {
      isOptional = isOptional === VOID ? false : isOptional;
      var tmp;
      if ($super === VOID) {
        this.eo(name, isOptional);
        tmp = Unit_instance;
      } else {
        tmp = $super.eo.call(this, name, isOptional);
      }
      return tmp;
    }
    cj(index) {
      return getChecked(_get_childSerializers__7vnyfa(this), index).sg();
    }
    dj(index) {
      return getChecked_0(this.in_1, index);
    }
    bj(index) {
      var tmp0_elvis_lhs = getChecked(this.gn_1, index);
      return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
    }
    zi(index) {
      return getChecked(this.fn_1, index);
    }
    aj(name) {
      var tmp0_elvis_lhs = this.jn_1.g2(name);
      return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
    }
    equals(other) {
      var tmp$ret$0;
      $l$block_5: {
        // Inline function 'kotlinx.serialization.internal.equalsImpl' call
        if (this === other) {
          tmp$ret$0 = true;
          break $l$block_5;
        }
        if (!(other instanceof PluginGeneratedSerialDescriptor)) {
          tmp$ret$0 = false;
          break $l$block_5;
        }
        if (!(this.oh() === other.oh())) {
          tmp$ret$0 = false;
          break $l$block_5;
        }
        if (!contentEquals(this.do(), other.do())) {
          tmp$ret$0 = false;
          break $l$block_5;
        }
        if (!(this.xi() === other.xi())) {
          tmp$ret$0 = false;
          break $l$block_5;
        }
        var inductionVariable = 0;
        var last = this.xi();
        if (inductionVariable < last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            if (!(this.cj(index).oh() === other.cj(index).oh())) {
              tmp$ret$0 = false;
              break $l$block_5;
            }
            if (!equals(this.cj(index).vi(), other.cj(index).vi())) {
              tmp$ret$0 = false;
              break $l$block_5;
            }
          }
           while (inductionVariable < last);
        tmp$ret$0 = true;
      }
      return tmp$ret$0;
    }
    hashCode() {
      return _get__hashCode__tgwhef_0(this);
    }
    toString() {
      return toStringImpl_0(this);
    }
  }
  class EnumDescriptor extends PluginGeneratedSerialDescriptor {
    constructor(name, elementsCount) {
      super(name, VOID, elementsCount);
      this.bo_1 = ENUM_getInstance();
      var tmp = this;
      tmp.co_1 = lazy_0(EnumDescriptor$elementDescriptors$delegate$lambda(elementsCount, name, this));
    }
    vi() {
      return this.bo_1;
    }
    cj(index) {
      return getChecked(_get_elementDescriptors__y23q9p(this), index);
    }
    equals(other) {
      if (this === other)
        return true;
      if (other == null)
        return false;
      if (!(!(other == null) ? isInterface(other, SerialDescriptor) : false))
        return false;
      if (!(other.vi() === ENUM_getInstance()))
        return false;
      if (!(this.oh() === other.oh()))
        return false;
      if (!equals(cachedSerialNames(this), cachedSerialNames(other)))
        return false;
      return true;
    }
    toString() {
      return joinToString_0(get_elementNames(this), ', ', this.oh() + '(', ')');
    }
    hashCode() {
      var result = getStringHashCode(this.oh());
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
      // Inline function 'kotlin.collections.fold' call
      var accumulator = 1;
      var _iterator__ex2g4s = get_elementNames(this).e1();
      while (_iterator__ex2g4s.f1()) {
        var element = _iterator__ex2g4s.g1();
        var hash = accumulator;
        var tmp = imul(31, hash);
        // Inline function 'kotlin.hashCode' call
        var tmp1_elvis_lhs = element == null ? null : hashCode_0(element);
        accumulator = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
      }
      var elementsHashCode = accumulator;
      result = imul(31, result) + elementsHashCode | 0;
      return result;
    }
  }
  class InlineClassDescriptor extends PluginGeneratedSerialDescriptor {
    constructor(name, generatedSerializer) {
      super(name, generatedSerializer, 1);
      this.ro_1 = true;
    }
    wi() {
      return this.ro_1;
    }
    hashCode() {
      return imul(super.hashCode(), 31);
    }
    equals(other) {
      var tmp$ret$0;
      $l$block_5: {
        // Inline function 'kotlinx.serialization.internal.equalsImpl' call
        if (this === other) {
          tmp$ret$0 = true;
          break $l$block_5;
        }
        if (!(other instanceof InlineClassDescriptor)) {
          tmp$ret$0 = false;
          break $l$block_5;
        }
        if (!(this.oh() === other.oh())) {
          tmp$ret$0 = false;
          break $l$block_5;
        }
        if (!(other.ro_1 && contentEquals(this.do(), other.do()))) {
          tmp$ret$0 = false;
          break $l$block_5;
        }
        if (!(this.xi() === other.xi())) {
          tmp$ret$0 = false;
          break $l$block_5;
        }
        var inductionVariable = 0;
        var last = this.xi();
        if (inductionVariable < last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            if (!(this.cj(index).oh() === other.cj(index).oh())) {
              tmp$ret$0 = false;
              break $l$block_5;
            }
            if (!equals(this.cj(index).vi(), other.cj(index).vi())) {
              tmp$ret$0 = false;
              break $l$block_5;
            }
          }
           while (inductionVariable < last);
        tmp$ret$0 = true;
      }
      return tmp$ret$0;
    }
  }
  class GeneratedSerializer {}
  function typeParametersSerializers() {
    return get_EMPTY_SERIALIZER_ARRAY();
  }
  class InlinePrimitiveDescriptor$1 {
    constructor($primitiveSerializer) {
      this.so_1 = $primitiveSerializer;
    }
    to() {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      return [this.so_1];
    }
    sg() {
      var message = 'unsupported';
      throw IllegalStateException.c3(toString_1(message));
    }
    tg(encoder, value) {
      // Inline function 'kotlin.error' call
      var message = 'unsupported';
      throw IllegalStateException.c3(toString_1(message));
    }
    ug(decoder) {
      // Inline function 'kotlin.error' call
      var message = 'unsupported';
      throw IllegalStateException.c3(toString_1(message));
    }
  }
  class NullableSerializer {
    constructor(serializer) {
      this.vo_1 = serializer;
      this.wo_1 = new SerialDescriptorForNullable(this.vo_1.sg());
    }
    sg() {
      return this.wo_1;
    }
    xo(encoder, value) {
      if (!(value == null)) {
        encoder.kl();
        encoder.hl(this.vo_1, value);
      } else {
        encoder.xk();
      }
    }
    tg(encoder, value) {
      return this.xo(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
    }
    ug(decoder) {
      return decoder.zj() ? decoder.hk(this.vo_1) : decoder.ak();
    }
    equals(other) {
      if (this === other)
        return true;
      if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
        return false;
      if (!(other instanceof NullableSerializer))
        THROW_CCE();
      if (!equals(this.vo_1, other.vo_1))
        return false;
      return true;
    }
    hashCode() {
      return hashCode_0(this.vo_1);
    }
  }
  class SerialDescriptorForNullable {
    constructor(original) {
      this.ri_1 = original;
      this.si_1 = this.ri_1.oh() + '?';
      this.ti_1 = cachedSerialNames(this.ri_1);
    }
    oh() {
      return this.si_1;
    }
    xj() {
      return this.ti_1;
    }
    pi() {
      return true;
    }
    equals(other) {
      if (this === other)
        return true;
      if (!(other instanceof SerialDescriptorForNullable))
        return false;
      if (!equals(this.ri_1, other.ri_1))
        return false;
      return true;
    }
    toString() {
      return toString_1(this.ri_1) + '?';
    }
    hashCode() {
      return imul(hashCode_0(this.ri_1), 31);
    }
    vi() {
      return this.ri_1.vi();
    }
    wi() {
      return this.ri_1.wi();
    }
    xi() {
      return this.ri_1.xi();
    }
    yi() {
      return this.ri_1.yi();
    }
    zi(index) {
      return this.ri_1.zi(index);
    }
    aj(name) {
      return this.ri_1.aj(name);
    }
    bj(index) {
      return this.ri_1.bj(index);
    }
    cj(index) {
      return this.ri_1.cj(index);
    }
    dj(index) {
      return this.ri_1.dj(index);
    }
  }
  class ObjectSerializer {
    static bp(serialName, objectInstance) {
      var $this = createThis(this);
      $this.yo_1 = objectInstance;
      $this.zo_1 = emptyList();
      var tmp = $this;
      var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
      tmp.ap_1 = lazy(tmp_0, ObjectSerializer$descriptor$delegate$lambda(serialName, $this));
      return $this;
    }
    static cp(serialName, objectInstance, classAnnotations) {
      var $this = this.bp(serialName, objectInstance);
      $this.zo_1 = asList(classAnnotations);
      return $this;
    }
    sg() {
      var tmp0 = this.ap_1;
      var tmp = KProperty1;
      // Inline function 'kotlin.getValue' call
      getPropertyCallableRef('descriptor', 1, tmp, ObjectSerializer$_get_descriptor_$ref_7z4xb6(), null);
      return tmp0.d2();
    }
    sh(encoder, value) {
      encoder.ik(this.sg()).jk(this.sg());
    }
    tg(encoder, value) {
      return this.sh(encoder, !(value == null) ? value : THROW_CCE());
    }
    ug(decoder) {
      // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
      var descriptor = this.sg();
      var composite = decoder.ik(descriptor);
      var tmp$ret$0;
      $l$block_0: {
        if (composite.rk()) {
          tmp$ret$0 = Unit_instance;
          break $l$block_0;
        }
        var index = composite.sk(this.sg());
        if (index === -1) {
          tmp$ret$0 = Unit_instance;
          break $l$block_0;
        } else
          throw SerializationException.yh('Unexpected index ' + index);
      }
      var result = tmp$ret$0;
      composite.jk(descriptor);
      return this.yo_1;
    }
  }
  class StringSerializer {
    constructor() {
      StringSerializer_instance = this;
      this.dp_1 = new PrimitiveSerialDescriptor('kotlin.String', STRING_getInstance());
    }
    sg() {
      return this.dp_1;
    }
    ep(encoder, value) {
      return encoder.bl(value);
    }
    tg(encoder, value) {
      return this.ep(encoder, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
    }
    ug(decoder) {
      return decoder.ek();
    }
  }
  class PrimitiveSerialDescriptor {
    constructor(serialName, kind) {
      this.fp_1 = serialName;
      this.gp_1 = kind;
    }
    oh() {
      return this.fp_1;
    }
    vi() {
      return this.gp_1;
    }
    xi() {
      return 0;
    }
    zi(index) {
      error(this);
    }
    aj(name) {
      error(this);
    }
    dj(index) {
      error(this);
    }
    cj(index) {
      error(this);
    }
    bj(index) {
      error(this);
    }
    toString() {
      return 'PrimitiveDescriptor(' + this.fp_1 + ')';
    }
    equals(other) {
      if (this === other)
        return true;
      if (!(other instanceof PrimitiveSerialDescriptor))
        return false;
      if (this.fp_1 === other.fp_1 && equals(this.gp_1, other.gp_1))
        return true;
      return false;
    }
    hashCode() {
      return getStringHashCode(this.fp_1) + imul(31, this.gp_1.hashCode()) | 0;
    }
  }
  class IntSerializer {
    constructor() {
      IntSerializer_instance = this;
      this.hp_1 = new PrimitiveSerialDescriptor('kotlin.Int', INT_getInstance());
    }
    sg() {
      return this.hp_1;
    }
    ip(encoder, value) {
      return encoder.zk(value);
    }
    tg(encoder, value) {
      return this.ip(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
    }
    ug(decoder) {
      return decoder.ck();
    }
  }
  class LongSerializer {
    constructor() {
      LongSerializer_instance = this;
      this.jp_1 = new PrimitiveSerialDescriptor('kotlin.Long', LONG_getInstance());
    }
    sg() {
      return this.jp_1;
    }
    kp(encoder, value) {
      return encoder.al(value);
    }
    tg(encoder, value) {
      return this.kp(encoder, value instanceof Long ? value : THROW_CCE());
    }
    ug(decoder) {
      return decoder.dk();
    }
  }
  class BooleanSerializer {
    constructor() {
      BooleanSerializer_instance = this;
      this.lp_1 = new PrimitiveSerialDescriptor('kotlin.Boolean', BOOLEAN_getInstance());
    }
    sg() {
      return this.lp_1;
    }
    mp(encoder, value) {
      return encoder.yk(value);
    }
    tg(encoder, value) {
      return this.mp(encoder, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
    }
    ug(decoder) {
      return decoder.bk();
    }
  }
  class TaggedDecoder {
    constructor() {
      var tmp = this;
      // Inline function 'kotlin.collections.arrayListOf' call
      tmp.sp_1 = ArrayList.o1();
      this.tp_1 = false;
    }
    qk() {
      return EmptySerializersModule_0();
    }
    xp(tag) {
      throw SerializationException.yh(toString_1(getKClassFromExpression(this)) + " can't retrieve untyped values");
    }
    yp(tag) {
      return true;
    }
    zp(tag) {
      var tmp = this.xp(tag);
      return typeof tmp === 'boolean' ? tmp : THROW_CCE();
    }
    aq(tag) {
      var tmp = this.xp(tag);
      return typeof tmp === 'number' ? tmp : THROW_CCE();
    }
    bq(tag) {
      var tmp = this.xp(tag);
      return tmp instanceof Long ? tmp : THROW_CCE();
    }
    cq(tag) {
      var tmp = this.xp(tag);
      return typeof tmp === 'string' ? tmp : THROW_CCE();
    }
    dq(tag, enumDescriptor) {
      var tmp = this.xp(tag);
      return typeof tmp === 'number' ? tmp : THROW_CCE();
    }
    gk(deserializer, previousValue) {
      return this.hk(deserializer);
    }
    zj() {
      var tmp0_elvis_lhs = this.up();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return false;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var currentTag = tmp;
      return this.yp(currentTag);
    }
    ak() {
      return null;
    }
    bk() {
      return this.zp(this.fq());
    }
    ck() {
      return this.aq(this.fq());
    }
    dk() {
      return this.bq(this.fq());
    }
    ek() {
      return this.cq(this.fq());
    }
    fk(enumDescriptor) {
      return this.dq(this.fq(), enumDescriptor);
    }
    ik(descriptor) {
      return this;
    }
    jk(descriptor) {
    }
    kk(descriptor, index) {
      return this.zp(this.pp(descriptor, index));
    }
    lk(descriptor, index) {
      return this.aq(this.pp(descriptor, index));
    }
    mk(descriptor, index) {
      return this.cq(this.pp(descriptor, index));
    }
    nk(descriptor, index, deserializer, previousValue) {
      var tmp = this.pp(descriptor, index);
      return tagBlock(this, tmp, TaggedDecoder$decodeSerializableElement$lambda(this, deserializer, previousValue));
    }
    pk(descriptor, index, deserializer, previousValue) {
      var tmp = this.pp(descriptor, index);
      return tagBlock(this, tmp, TaggedDecoder$decodeNullableSerializableElement$lambda(this, deserializer, previousValue));
    }
    up() {
      return lastOrNull(this.sp_1);
    }
    eq(name) {
      this.sp_1.r(name);
    }
    fq() {
      var r = this.sp_1.p4(get_lastIndex_2(this.sp_1));
      this.tp_1 = true;
      return r;
    }
  }
  class NamedValueDecoder extends TaggedDecoder {
    pp(_this__u8e3s4, index) {
      return this.rp(this.qp(_this__u8e3s4, index));
    }
    rp(nestedName) {
      var tmp0_elvis_lhs = this.up();
      return this.vp(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
    }
    qp(descriptor, index) {
      return descriptor.zi(index);
    }
    vp(parentName, childName) {
      var tmp;
      // Inline function 'kotlin.text.isEmpty' call
      if (charSequenceLength(parentName) === 0) {
        tmp = childName;
      } else {
        tmp = parentName + '.' + childName;
      }
      return tmp;
    }
    wp() {
      return this.sp_1.k1() ? '$' : joinToString_0(this.sp_1, '.', '$.');
    }
  }
  class SerializersModule {
    qi(kClass, typeArgumentsSerializers, $super) {
      typeArgumentsSerializers = typeArgumentsSerializers === VOID ? emptyList() : typeArgumentsSerializers;
      return $super === VOID ? this.gq(kClass, typeArgumentsSerializers) : $super.gq.call(this, kClass, typeArgumentsSerializers);
    }
  }
  class SerialModuleImpl extends SerializersModule {
    constructor(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider, hasInterfaceContextualSerializers) {
      super();
      this.iq_1 = class2ContextualFactory;
      this.jq_1 = polyBase2Serializers;
      this.kq_1 = polyBase2DefaultSerializerProvider;
      this.lq_1 = polyBase2NamedSerializers;
      this.mq_1 = polyBase2DefaultDeserializerProvider;
      this.nq_1 = hasInterfaceContextualSerializers;
    }
    ol(baseClass, value) {
      if (!baseClass.jb(value))
        return null;
      var tmp0_safe_receiver = this.jq_1.g2(baseClass);
      var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.g2(getKClassFromExpression(value));
      var registered = (!(tmp == null) ? isInterface(tmp, SerializationStrategy) : false) ? tmp : null;
      if (!(registered == null))
        return registered;
      var tmp_0 = this.kq_1.g2(baseClass);
      var tmp1_safe_receiver = (!(tmp_0 == null) ? typeof tmp_0 === 'function' : false) ? tmp_0 : null;
      return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(value);
    }
    nl(baseClass, serializedClassName) {
      var tmp0_safe_receiver = this.lq_1.g2(baseClass);
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.collections.get' call
        tmp = (isInterface(tmp0_safe_receiver, KtMap) ? tmp0_safe_receiver : THROW_CCE()).g2(serializedClassName);
      }
      var tmp_0 = tmp;
      var registered = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
      if (!(registered == null))
        return registered;
      var tmp_1 = this.mq_1.g2(baseClass);
      var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
      return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
    }
    gq(kClass, typeArgumentsSerializers) {
      var tmp0_safe_receiver = this.iq_1.g2(kClass);
      var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.oq(typeArgumentsSerializers);
      return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
    }
    hq(collector) {
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = this.iq_1.j2().e1();
      while (_iterator__ex2g4s.f1()) {
        var element = _iterator__ex2g4s.g1();
        // Inline function 'kotlin.collections.component1' call
        var kclass = element.c2();
        // Inline function 'kotlin.collections.component2' call
        var serial = element.d2();
        if (serial instanceof Argless) {
          var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
          var tmp_0 = serial.rq_1;
          collector.sq(tmp, isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE());
        } else {
          if (serial instanceof WithTypeArguments) {
            collector.qq(kclass, serial.pq_1);
          } else {
            noWhenBranchMatchedException();
          }
        }
      }
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s_0 = this.jq_1.j2().e1();
      while (_iterator__ex2g4s_0.f1()) {
        var element_0 = _iterator__ex2g4s_0.g1();
        // Inline function 'kotlin.collections.component1' call
        var baseClass = element_0.c2();
        // Inline function 'kotlin.collections.component2' call
        var classMap = element_0.d2();
        // Inline function 'kotlin.collections.forEach' call
        // Inline function 'kotlin.collections.iterator' call
        var _iterator__ex2g4s_1 = classMap.j2().e1();
        while (_iterator__ex2g4s_1.f1()) {
          var element_1 = _iterator__ex2g4s_1.g1();
          // Inline function 'kotlin.collections.component1' call
          var actualClass = element_1.c2();
          // Inline function 'kotlin.collections.component2' call
          var serializer = element_1.d2();
          var tmp_1 = isInterface(baseClass, KClass) ? baseClass : THROW_CCE();
          var tmp_2 = isInterface(actualClass, KClass) ? actualClass : THROW_CCE();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var tmp$ret$11 = isInterface(serializer, KSerializer) ? serializer : THROW_CCE();
          collector.tq(tmp_1, tmp_2, tmp$ret$11);
        }
      }
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s_2 = this.kq_1.j2().e1();
      while (_iterator__ex2g4s_2.f1()) {
        var element_2 = _iterator__ex2g4s_2.g1();
        // Inline function 'kotlin.collections.component1' call
        var baseClass_0 = element_2.c2();
        // Inline function 'kotlin.collections.component2' call
        var provider = element_2.d2();
        var tmp_3 = isInterface(baseClass_0, KClass) ? baseClass_0 : THROW_CCE();
        collector.uq(tmp_3, typeof provider === 'function' ? provider : THROW_CCE());
      }
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s_3 = this.mq_1.j2().e1();
      while (_iterator__ex2g4s_3.f1()) {
        var element_3 = _iterator__ex2g4s_3.g1();
        // Inline function 'kotlin.collections.component1' call
        var baseClass_1 = element_3.c2();
        // Inline function 'kotlin.collections.component2' call
        var provider_0 = element_3.d2();
        var tmp_4 = isInterface(baseClass_1, KClass) ? baseClass_1 : THROW_CCE();
        collector.vq(tmp_4, typeof provider_0 === 'function' ? provider_0 : THROW_CCE());
      }
    }
  }
  class ContextualProvider {}
  class Argless extends ContextualProvider {}
  class WithTypeArguments extends ContextualProvider {}
  class SerializersModuleCollector {}
  function contextual(kClass, serializer) {
    return this.qq(kClass, SerializersModuleCollector$contextual$lambda(serializer));
  }
  class SerializableWith {}
  class Json {
    constructor(configuration, serializersModule) {
      Default_getInstance_0();
      this.wq_1 = configuration;
      this.xq_1 = serializersModule;
      this.yq_1 = new DescriptorSchemaCache();
    }
    qk() {
      return this.xq_1;
    }
    zq(serializer, value) {
      var result = new JsonToStringWriter();
      try {
        encodeByWriter(this, result, serializer, value);
        return result.toString();
      }finally {
        result.cr();
      }
    }
    ar(deserializer, string) {
      var lexer = StringJsonLexer_0(this, string);
      var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.sg(), null);
      var result = input.hk(deserializer);
      lexer.pr();
      return result;
    }
  }
  class Default_0 extends Json {
    constructor() {
      Default_instance_0 = null;
      super(new JsonConfiguration(), EmptySerializersModule_0());
      Default_instance_0 = this;
    }
  }
  class JsonBuilder {
    constructor(json) {
      this.qr_1 = json.wq_1.js_1;
      this.rr_1 = json.wq_1.os_1;
      this.sr_1 = json.wq_1.ks_1;
      this.tr_1 = json.wq_1.ls_1;
      this.ur_1 = json.wq_1.ns_1;
      this.vr_1 = json.wq_1.ps_1;
      this.wr_1 = json.wq_1.qs_1;
      this.xr_1 = json.wq_1.ss_1;
      this.yr_1 = json.wq_1.zs_1;
      this.zr_1 = json.wq_1.us_1;
      this.as_1 = json.wq_1.vs_1;
      this.bs_1 = json.wq_1.ws_1;
      this.cs_1 = json.wq_1.xs_1;
      this.ds_1 = json.wq_1.ys_1;
      this.es_1 = json.wq_1.ts_1;
      this.fs_1 = json.wq_1.ms_1;
      this.gs_1 = json.wq_1.rs_1;
      this.hs_1 = json.qk();
    }
    is() {
      if (this.gs_1) {
        // Inline function 'kotlin.require' call
        if (!(this.xr_1 === 'type')) {
          var message = 'Class discriminator should not be specified when array polymorphism is specified';
          throw IllegalArgumentException.z(toString_1(message));
        }
        // Inline function 'kotlin.require' call
        if (!this.yr_1.equals(ClassDiscriminatorMode_POLYMORPHIC_getInstance())) {
          var message_0 = 'useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.';
          throw IllegalArgumentException.z(toString_1(message_0));
        }
      }
      if (!this.ur_1) {
        // Inline function 'kotlin.require' call
        if (!(this.vr_1 === '    ')) {
          var message_1 = 'Indent should not be specified when default printing mode is used';
          throw IllegalArgumentException.z(toString_1(message_1));
        }
      } else if (!(this.vr_1 === '    ')) {
        var tmp0 = this.vr_1;
        var tmp$ret$7;
        $l$block: {
          // Inline function 'kotlin.text.all' call
          var inductionVariable = 0;
          while (inductionVariable < charSequenceLength(tmp0)) {
            var element = charSequenceGet(tmp0, inductionVariable);
            inductionVariable = inductionVariable + 1 | 0;
            if (!(element === _Char___init__impl__6a9atx(32) || element === _Char___init__impl__6a9atx(9) || element === _Char___init__impl__6a9atx(13) || element === _Char___init__impl__6a9atx(10))) {
              tmp$ret$7 = false;
              break $l$block;
            }
          }
          tmp$ret$7 = true;
        }
        var allWhitespaces = tmp$ret$7;
        // Inline function 'kotlin.require' call
        if (!allWhitespaces) {
          var message_2 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.vr_1;
          throw IllegalArgumentException.z(toString_1(message_2));
        }
      }
      return new JsonConfiguration(this.qr_1, this.sr_1, this.tr_1, this.fs_1, this.ur_1, this.rr_1, this.vr_1, this.wr_1, this.gs_1, this.xr_1, this.es_1, this.zr_1, this.as_1, this.bs_1, this.cs_1, this.ds_1, this.yr_1);
    }
  }
  class JsonImpl extends Json {
    constructor(configuration, module_0) {
      super(configuration, module_0);
      validateConfiguration(this);
    }
  }
  class JsonClassDiscriminator {}
  class JsonIgnoreUnknownKeys {}
  class JsonNames {}
  class JsonConfiguration {
    constructor(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, namingStrategy, decodeEnumsCaseInsensitive, allowTrailingComma, allowComments, classDiscriminatorMode) {
      encodeDefaults = encodeDefaults === VOID ? false : encodeDefaults;
      ignoreUnknownKeys = ignoreUnknownKeys === VOID ? false : ignoreUnknownKeys;
      isLenient = isLenient === VOID ? false : isLenient;
      allowStructuredMapKeys = allowStructuredMapKeys === VOID ? false : allowStructuredMapKeys;
      prettyPrint = prettyPrint === VOID ? false : prettyPrint;
      explicitNulls = explicitNulls === VOID ? true : explicitNulls;
      prettyPrintIndent = prettyPrintIndent === VOID ? '    ' : prettyPrintIndent;
      coerceInputValues = coerceInputValues === VOID ? false : coerceInputValues;
      useArrayPolymorphism = useArrayPolymorphism === VOID ? false : useArrayPolymorphism;
      classDiscriminator = classDiscriminator === VOID ? 'type' : classDiscriminator;
      allowSpecialFloatingPointValues = allowSpecialFloatingPointValues === VOID ? false : allowSpecialFloatingPointValues;
      useAlternativeNames = useAlternativeNames === VOID ? true : useAlternativeNames;
      namingStrategy = namingStrategy === VOID ? null : namingStrategy;
      decodeEnumsCaseInsensitive = decodeEnumsCaseInsensitive === VOID ? false : decodeEnumsCaseInsensitive;
      allowTrailingComma = allowTrailingComma === VOID ? false : allowTrailingComma;
      allowComments = allowComments === VOID ? false : allowComments;
      classDiscriminatorMode = classDiscriminatorMode === VOID ? ClassDiscriminatorMode_POLYMORPHIC_getInstance() : classDiscriminatorMode;
      this.js_1 = encodeDefaults;
      this.ks_1 = ignoreUnknownKeys;
      this.ls_1 = isLenient;
      this.ms_1 = allowStructuredMapKeys;
      this.ns_1 = prettyPrint;
      this.os_1 = explicitNulls;
      this.ps_1 = prettyPrintIndent;
      this.qs_1 = coerceInputValues;
      this.rs_1 = useArrayPolymorphism;
      this.ss_1 = classDiscriminator;
      this.ts_1 = allowSpecialFloatingPointValues;
      this.us_1 = useAlternativeNames;
      this.vs_1 = namingStrategy;
      this.ws_1 = decodeEnumsCaseInsensitive;
      this.xs_1 = allowTrailingComma;
      this.ys_1 = allowComments;
      this.zs_1 = classDiscriminatorMode;
    }
    toString() {
      return 'JsonConfiguration(encodeDefaults=' + this.js_1 + ', ignoreUnknownKeys=' + this.ks_1 + ', isLenient=' + this.ls_1 + ', ' + ('allowStructuredMapKeys=' + this.ms_1 + ', prettyPrint=' + this.ns_1 + ', explicitNulls=' + this.os_1 + ', ') + ("prettyPrintIndent='" + this.ps_1 + "', coerceInputValues=" + this.qs_1 + ', useArrayPolymorphism=' + this.rs_1 + ', ') + ("classDiscriminator='" + this.ss_1 + "', allowSpecialFloatingPointValues=" + this.ts_1 + ', ') + ('useAlternativeNames=' + this.us_1 + ', namingStrategy=' + toString_0(this.vs_1) + ', decodeEnumsCaseInsensitive=' + this.ws_1 + ', ') + ('allowTrailingComma=' + this.xs_1 + ', allowComments=' + this.ys_1 + ', classDiscriminatorMode=' + this.zs_1.toString() + ')');
    }
  }
  class ClassDiscriminatorMode extends Enum {}
  class Companion_13 {}
  class JsonElement {}
  class JsonArray extends JsonElement {
    constructor(content) {
      super();
      this.at_1 = content;
    }
    equals(other) {
      return equals(this.at_1, other);
    }
    hashCode() {
      return hashCode_0(this.at_1);
    }
    toString() {
      return joinToString_0(this.at_1, ',', '[', ']');
    }
    k1() {
      return this.at_1.k1();
    }
    bt(element) {
      return this.at_1.p1(element);
    }
    p1(element) {
      if (!(element instanceof JsonElement))
        return false;
      return this.bt(element instanceof JsonElement ? element : THROW_CCE());
    }
    e1() {
      return this.at_1.e1();
    }
    l1(index) {
      return this.at_1.l1(index);
    }
    ct(element) {
      return this.at_1.a2(element);
    }
    a2(element) {
      if (!(element instanceof JsonElement))
        return -1;
      return this.ct(element instanceof JsonElement ? element : THROW_CCE());
    }
    j1() {
      return this.at_1.j1();
    }
  }
  class Companion_14 {}
  class JsonObject extends JsonElement {
    constructor(content) {
      super();
      this.dt_1 = content;
    }
    equals(other) {
      return equals(this.dt_1, other);
    }
    hashCode() {
      return hashCode_0(this.dt_1);
    }
    toString() {
      var tmp = this.dt_1.j2();
      return joinToString_0(tmp, ',', '{', '}', VOID, VOID, JsonObject$toString$lambda);
    }
    k1() {
      return this.dt_1.k1();
    }
    et(key) {
      return this.dt_1.e2(key);
    }
    e2(key) {
      if (!(!(key == null) ? typeof key === 'string' : false))
        return false;
      return this.et((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
    }
    ft(key) {
      return this.dt_1.g2(key);
    }
    g2(key) {
      if (!(!(key == null) ? typeof key === 'string' : false))
        return null;
      return this.ft((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
    }
    j1() {
      return this.dt_1.j1();
    }
    h2() {
      return this.dt_1.h2();
    }
    i2() {
      return this.dt_1.i2();
    }
    j2() {
      return this.dt_1.j2();
    }
  }
  class Companion_15 {}
  class Companion_16 {}
  class JsonPrimitive extends JsonElement {
    toString() {
      return this.gt();
    }
  }
  class JsonNull extends JsonPrimitive {
    constructor() {
      JsonNull_instance = null;
      super();
      JsonNull_instance = this;
      this.ht_1 = 'null';
    }
    gt() {
      return this.ht_1;
    }
  }
  class JsonLiteral extends JsonPrimitive {
    constructor(body, isString, coerceToInlineType) {
      coerceToInlineType = coerceToInlineType === VOID ? null : coerceToInlineType;
      super();
      this.it_1 = isString;
      this.jt_1 = coerceToInlineType;
      this.kt_1 = toString_1(body);
      if (!(this.jt_1 == null)) {
        // Inline function 'kotlin.require' call
        // Inline function 'kotlin.require' call
        if (!this.jt_1.wi()) {
          var message = 'Failed requirement.';
          throw IllegalArgumentException.z(toString_1(message));
        }
      }
    }
    gt() {
      return this.kt_1;
    }
    toString() {
      var tmp;
      if (this.it_1) {
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.apply' call
        var this_0 = StringBuilder.b1();
        printQuoted(this_0, this.kt_1);
        tmp = this_0.toString();
      } else {
        tmp = this.kt_1;
      }
      return tmp;
    }
    equals(other) {
      if (this === other)
        return true;
      if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
        return false;
      if (!(other instanceof JsonLiteral))
        THROW_CCE();
      if (!(this.it_1 === other.it_1))
        return false;
      if (!(this.kt_1 === other.kt_1))
        return false;
      return true;
    }
    hashCode() {
      var result = getBooleanHashCode(this.it_1);
      result = imul(31, result) + getStringHashCode(this.kt_1) | 0;
      return result;
    }
  }
  class JsonObjectBuilder {
    constructor() {
      var tmp = this;
      // Inline function 'kotlin.collections.linkedMapOf' call
      tmp.mt_1 = LinkedHashMap.z3();
    }
    nt(key, element) {
      return this.mt_1.c4(key, element);
    }
    is() {
      return new JsonObject(this.mt_1);
    }
  }
  class Composer {
    constructor(writer) {
      this.ot_1 = writer;
      this.pt_1 = true;
    }
    qt() {
      this.pt_1 = true;
    }
    rt() {
      return Unit_instance;
    }
    st() {
      this.pt_1 = false;
    }
    tt() {
      this.pt_1 = false;
    }
    ut() {
      return Unit_instance;
    }
    vt(v) {
      return this.ot_1.wt(v);
    }
    xt(v) {
      return this.ot_1.yt(v);
    }
    zt(v) {
      return this.ot_1.au(fromInt(v));
    }
    bu(v) {
      return this.ot_1.au(v);
    }
    cu(v) {
      return this.ot_1.yt(v.toString());
    }
    du(value) {
      return this.ot_1.eu(value);
    }
  }
  class ComposerWithPrettyPrint extends Composer {
    constructor(writer, json) {
      super(writer);
      this.hu_1 = json;
      this.iu_1 = 0;
    }
    qt() {
      this.pt_1 = true;
      this.iu_1 = this.iu_1 + 1 | 0;
    }
    rt() {
      this.iu_1 = this.iu_1 - 1 | 0;
    }
    st() {
      this.pt_1 = false;
      this.xt('\n');
      // Inline function 'kotlin.repeat' call
      var times = this.iu_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          this.xt(this.hu_1.wq_1.ps_1);
        }
         while (inductionVariable < times);
    }
    tt() {
      if (this.pt_1)
        this.pt_1 = false;
      else {
        this.st();
      }
    }
    ut() {
      this.vt(_Char___init__impl__6a9atx(32));
    }
  }
  class JsonElementMarker {
    constructor(descriptor) {
      var tmp = this;
      tmp.ju_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
      this.ku_1 = false;
    }
    lu(index) {
      this.ju_1.wm(index);
    }
    mu() {
      return this.ju_1.xm();
    }
  }
  class JsonException extends SerializationException {
    static av(message) {
      var $this = this.yh(message);
      captureStack($this, $this.zu_1);
      return $this;
    }
  }
  class JsonEncodingException extends JsonException {
    static uu(message) {
      var $this = this.av(message);
      captureStack($this, $this.tu_1);
      return $this;
    }
  }
  class JsonDecodingException extends JsonException {
    static hv(message) {
      var $this = this.av(message);
      captureStack($this, $this.gv_1);
      return $this;
    }
  }
  class Tombstone {}
  class JsonPath {
    constructor() {
      var tmp = this;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp.mv_1 = Array(8);
      var tmp_0 = this;
      var tmp_1 = 0;
      var tmp_2 = new Int32Array(8);
      while (tmp_1 < 8) {
        tmp_2[tmp_1] = -1;
        tmp_1 = tmp_1 + 1 | 0;
      }
      tmp_0.nv_1 = tmp_2;
      this.ov_1 = -1;
    }
    pv(sd) {
      this.ov_1 = this.ov_1 + 1 | 0;
      var depth = this.ov_1;
      if (depth === this.mv_1.length) {
        resize(this);
      }
      this.mv_1[depth] = sd;
    }
    qv(index) {
      this.nv_1[this.ov_1] = index;
    }
    rv(key) {
      var tmp;
      if (!(this.nv_1[this.ov_1] === -2)) {
        this.ov_1 = this.ov_1 + 1 | 0;
        tmp = this.ov_1 === this.mv_1.length;
      } else {
        tmp = false;
      }
      if (tmp) {
        resize(this);
      }
      this.mv_1[this.ov_1] = key;
      this.nv_1[this.ov_1] = -2;
    }
    sv() {
      if (this.nv_1[this.ov_1] === -2) {
        this.mv_1[this.ov_1] = Tombstone_instance;
      }
    }
    tv() {
      var depth = this.ov_1;
      if (this.nv_1[depth] === -2) {
        this.nv_1[depth] = -1;
        this.ov_1 = this.ov_1 - 1 | 0;
      }
      if (!(this.ov_1 === -1)) {
        this.ov_1 = this.ov_1 - 1 | 0;
      }
    }
    uv() {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder.b1();
      this_0.p9('$');
      // Inline function 'kotlin.repeat' call
      var times = this.ov_1 + 1 | 0;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var element = this.mv_1[index];
          if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
            if (equals(element.vi(), LIST_getInstance())) {
              if (!(this.nv_1[index] === -1)) {
                this_0.p9('[');
                this_0.pc(this.nv_1[index]);
                this_0.p9(']');
              }
            } else {
              var idx = this.nv_1[index];
              if (idx >= 0) {
                this_0.p9('.');
                this_0.p9(element.zi(idx));
              }
            }
          } else {
            if (!(element === Tombstone_instance)) {
              this_0.p9('[');
              this_0.p9("'");
              this_0.o9(element);
              this_0.p9("'");
              this_0.p9(']');
            }
          }
        }
         while (inductionVariable < times);
      return this_0.toString();
    }
    toString() {
      return this.uv();
    }
  }
  class JsonSerializersModuleValidator {
    constructor(configuration) {
      this.vv_1 = configuration.ss_1;
      this.wv_1 = configuration.rs_1;
      this.xv_1 = !configuration.zs_1.equals(ClassDiscriminatorMode_NONE_getInstance());
    }
    qq(kClass, provider) {
    }
    tq(baseClass, actualClass, actualSerializer) {
      var descriptor = actualSerializer.sg();
      checkKind(this, descriptor, actualClass);
      if (!this.wv_1 && this.xv_1) {
        checkDiscriminatorCollisions(this, descriptor, actualClass);
      }
    }
    uq(baseClass, defaultSerializerProvider) {
    }
    vq(baseClass, defaultDeserializerProvider) {
    }
  }
  class JsonTreeReader$readDeepRecursive$slambda {
    constructor(this$0) {
      this.mw_1 = this$0;
    }
    vw($this$DeepRecursiveFunction, it, $completion) {
      return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8.bind(VOID, this, $this$DeepRecursiveFunction, it), $completion);
    }
    na(p1, p2, $completion) {
      var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
      return this.vw(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $completion);
    }
  }
  class JsonTreeReader {
    constructor(configuration, lexer) {
      this.iw_1 = lexer;
      this.jw_1 = configuration.ls_1;
      this.kw_1 = configuration.xs_1;
      this.lw_1 = 0;
    }
    tw() {
      var token = this.iw_1.nw();
      var tmp;
      if (token === 1) {
        tmp = readValue(this, true);
      } else if (token === 0) {
        tmp = readValue(this, false);
      } else if (token === 6) {
        var tmp_0;
        this.lw_1 = this.lw_1 + 1 | 0;
        if (this.lw_1 === 200) {
          tmp_0 = readDeepRecursive(this);
        } else {
          tmp_0 = readObject(this);
        }
        var result = tmp_0;
        this.lw_1 = this.lw_1 - 1 | 0;
        tmp = result;
      } else if (token === 8) {
        tmp = readArray(this);
      } else {
        this.iw_1.ow('Cannot read Json element because of unexpected ' + tokenDescription(token));
      }
      return tmp;
    }
  }
  class Key_0 {}
  class DescriptorSchemaCache {
    constructor() {
      this.iv_1 = createMapForCache(16);
    }
    xw(descriptor, key, value) {
      // Inline function 'kotlin.collections.getOrPut' call
      var this_0 = this.iv_1;
      var value_0 = this_0.g2(descriptor);
      var tmp;
      if (value_0 == null) {
        var answer = createMapForCache(2);
        this_0.c4(descriptor, answer);
        tmp = answer;
      } else {
        tmp = value_0;
      }
      var tmp0 = tmp;
      var tmp2 = key instanceof Key_0 ? key : THROW_CCE();
      // Inline function 'kotlin.collections.set' call
      var value_1 = !(value == null) ? value : THROW_CCE();
      tmp0.c4(tmp2, value_1);
    }
    jv(descriptor, key, defaultValue) {
      var tmp0_safe_receiver = this.yw(descriptor, key);
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        return tmp0_safe_receiver;
      }
      var value = defaultValue();
      this.xw(descriptor, key, value);
      return value;
    }
    yw(descriptor, key) {
      var tmp0_safe_receiver = this.iv_1.g2(descriptor);
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        tmp = tmp0_safe_receiver.g2(key instanceof Key_0 ? key : THROW_CCE());
      }
      var tmp_0 = tmp;
      return !(tmp_0 == null) ? tmp_0 : null;
    }
  }
  class DiscriminatorHolder {
    constructor(discriminatorToSkip) {
      this.zw_1 = discriminatorToSkip;
    }
  }
  class StreamingJsonDecoder extends AbstractDecoder {
    constructor(json, mode, lexer, descriptor, discriminatorHolder) {
      super();
      this.dr_1 = json;
      this.er_1 = mode;
      this.fr_1 = lexer;
      this.gr_1 = this.dr_1.qk();
      this.hr_1 = -1;
      this.ir_1 = discriminatorHolder;
      this.jr_1 = this.dr_1.wq_1;
      this.kr_1 = this.jr_1.os_1 ? null : new JsonElementMarker(descriptor);
    }
    ix() {
      return this.dr_1;
    }
    qk() {
      return this.gr_1;
    }
    jx() {
      return (new JsonTreeReader(this.dr_1.wq_1, this.fr_1)).tw();
    }
    hk(deserializer) {
      try {
        var tmp;
        if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
          tmp = true;
        } else {
          tmp = this.dr_1.wq_1.rs_1;
        }
        if (tmp) {
          return deserializer.ug(this);
        }
        var discriminator = classDiscriminator(deserializer.sg(), this.dr_1);
        var tmp0_elvis_lhs = this.fr_1.kx(discriminator, this.jr_1.ls_1);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          var tmp2 = isInterface(deserializer, DeserializationStrategy) ? deserializer : THROW_CCE();
          var tmp$ret$0;
          $l$block: {
            // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
            var tmp_1;
            if (!(tmp2 instanceof AbstractPolymorphicSerializer)) {
              tmp_1 = true;
            } else {
              tmp_1 = this.ix().wq_1.rs_1;
            }
            if (tmp_1) {
              tmp$ret$0 = tmp2.ug(this);
              break $l$block;
            }
            var discriminator_0 = classDiscriminator(tmp2.sg(), this.ix());
            var tmp0 = this.jx();
            // Inline function 'kotlinx.serialization.json.internal.cast' call
            var serialName = tmp2.sg().oh();
            if (!(tmp0 instanceof JsonObject)) {
              var tmp_2 = getKClass(JsonObject).ib();
              var tmp_3 = getKClassFromExpression(tmp0).ib();
              var tmp$ret$1 = this.fr_1.mr_1.uv();
              throw JsonDecodingException_0(-1, 'Expected ' + tmp_2 + ', but had ' + tmp_3 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$1, toString_1(tmp0));
            }
            var jsonTree = tmp0;
            var tmp0_safe_receiver = jsonTree.ft(discriminator_0);
            var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
            var type = tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
            var tmp_4;
            try {
              tmp_4 = findPolymorphicSerializer_0(tmp2, this, type);
            } catch ($p) {
              var tmp_5;
              if ($p instanceof SerializationException) {
                var it = $p;
                throw JsonDecodingException_0(-1, ensureNotNull(it.message), jsonTree.toString());
              } else {
                throw $p;
              }
            }
            var tmp_6 = tmp_4;
            var actualSerializer = isInterface(tmp_6, DeserializationStrategy) ? tmp_6 : THROW_CCE();
            tmp$ret$0 = readPolymorphicJson(this.ix(), discriminator_0, jsonTree, actualSerializer);
          }
          return tmp$ret$0;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var type_0 = tmp_0;
        var tmp_7;
        try {
          tmp_7 = findPolymorphicSerializer_0(deserializer, this, type_0);
        } catch ($p) {
          var tmp_8;
          if ($p instanceof SerializationException) {
            var it_0 = $p;
            var message = removeSuffix(substringBefore(ensureNotNull(it_0.message), _Char___init__impl__6a9atx(10)), '.');
            var hint = substringAfter_0(ensureNotNull(it_0.message), _Char___init__impl__6a9atx(10), '');
            this.fr_1.ow(message, VOID, hint);
          } else {
            throw $p;
          }
          tmp_7 = tmp_8;
        }
        var tmp_9 = tmp_7;
        var actualSerializer_0 = isInterface(tmp_9, DeserializationStrategy) ? tmp_9 : THROW_CCE();
        this.ir_1 = new DiscriminatorHolder(discriminator);
        return actualSerializer_0.ug(this);
      } catch ($p) {
        if ($p instanceof MissingFieldException) {
          var e = $p;
          if (contains_3(ensureNotNull(e.message), 'at path'))
            throw e;
          throw MissingFieldException.ni(e.li_1, plus_1(e.message, ' at path: ') + this.fr_1.mr_1.uv(), e);
        } else {
          throw $p;
        }
      }
    }
    ik(descriptor) {
      var newMode = switchMode(this.dr_1, descriptor);
      this.fr_1.mr_1.pv(descriptor);
      this.fr_1.ax(newMode.nx_1);
      checkLeadingComma(this);
      var tmp;
      switch (newMode.l2_1) {
        case 1:
        case 2:
        case 3:
          tmp = new StreamingJsonDecoder(this.dr_1, newMode, this.fr_1, descriptor, this.ir_1);
          break;
        default:
          var tmp_0;
          if (this.er_1.equals(newMode) && this.dr_1.wq_1.os_1) {
            tmp_0 = this;
          } else {
            tmp_0 = new StreamingJsonDecoder(this.dr_1, newMode, this.fr_1, descriptor, this.ir_1);
          }

          tmp = tmp_0;
          break;
      }
      return tmp;
    }
    jk(descriptor) {
      if (descriptor.xi() === 0 && ignoreUnknownKeys(descriptor, this.dr_1)) {
        skipLeftoverElements(this, descriptor);
      }
      if (this.fr_1.bx() && !this.dr_1.wq_1.xs_1) {
        invalidTrailingComma(this.fr_1, '');
      }
      this.fr_1.ax(this.er_1.ox_1);
      this.fr_1.mr_1.tv();
    }
    zj() {
      var tmp;
      var tmp0_safe_receiver = this.kr_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ku_1;
      if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
        tmp = !this.fr_1.px();
      } else {
        tmp = false;
      }
      return tmp;
    }
    ak() {
      return null;
    }
    nk(descriptor, index, deserializer, previousValue) {
      var isMapKey = this.er_1.equals(WriteMode_MAP_getInstance()) && (index & 1) === 0;
      if (isMapKey) {
        this.fr_1.mr_1.sv();
      }
      var value = super.nk(descriptor, index, deserializer, previousValue);
      if (isMapKey) {
        this.fr_1.mr_1.rv(value);
      }
      return value;
    }
    sk(descriptor) {
      var index;
      switch (this.er_1.l2_1) {
        case 0:
          index = decodeObjectIndex(this, descriptor);
          break;
        case 2:
          index = decodeMapIndex(this);
          break;
        default:
          index = decodeListIndex(this);
          break;
      }
      if (!this.er_1.equals(WriteMode_MAP_getInstance())) {
        this.fr_1.mr_1.qv(index);
      }
      return index;
    }
    bk() {
      return this.fr_1.qx();
    }
    ck() {
      var value = this.fr_1.rx();
      if (!equalsLong(value, fromInt(convertToInt(value)))) {
        this.fr_1.ow("Failed to parse int for input '" + value.toString() + "'");
      }
      return convertToInt(value);
    }
    dk() {
      return this.fr_1.rx();
    }
    ek() {
      var tmp;
      if (this.jr_1.ls_1) {
        tmp = this.fr_1.hx();
      } else {
        tmp = this.fr_1.rw();
      }
      return tmp;
    }
    fk(enumDescriptor) {
      return getJsonNameIndexOrThrow(enumDescriptor, this.dr_1, this.ek(), ' at path ' + this.fr_1.mr_1.uv());
    }
  }
  class StreamingJsonEncoder extends AbstractEncoder {
    static sx(composer, json, mode, modeReuseCache) {
      var $this = this.uk();
      $this.yv_1 = composer;
      $this.zv_1 = json;
      $this.aw_1 = mode;
      $this.bw_1 = modeReuseCache;
      $this.cw_1 = $this.zv_1.qk();
      $this.dw_1 = $this.zv_1.wq_1;
      $this.ew_1 = false;
      $this.fw_1 = null;
      $this.gw_1 = null;
      var i = $this.aw_1.l2_1;
      if (!($this.bw_1 == null)) {
        if (!($this.bw_1[i] === null) || !($this.bw_1[i] === $this)) {
          $this.bw_1[i] = $this;
        }
      }
      return $this;
    }
    ix() {
      return this.zv_1;
    }
    static hw(output, json, mode, modeReuseCache) {
      return this.sx(Composer_0(output, json), json, mode, modeReuseCache);
    }
    qk() {
      return this.cw_1;
    }
    ml(descriptor, index) {
      return this.dw_1.js_1;
    }
    hl(serializer, value) {
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
        if (this.ix().wq_1.rs_1) {
          serializer.tg(this, value);
          break $l$block;
        }
        var isPolymorphicSerializer = serializer instanceof AbstractPolymorphicSerializer;
        var tmp;
        if (isPolymorphicSerializer) {
          tmp = !this.ix().wq_1.zs_1.equals(ClassDiscriminatorMode_NONE_getInstance());
        } else {
          var tmp_0;
          switch (this.ix().wq_1.zs_1.l2_1) {
            case 0:
            case 2:
              tmp_0 = false;
              break;
            case 1:
              // Inline function 'kotlin.let' call

              var it = serializer.sg().vi();
              tmp_0 = equals(it, CLASS_getInstance()) || equals(it, OBJECT_getInstance());
              break;
            default:
              noWhenBranchMatchedException();
              break;
          }
          tmp = tmp_0;
        }
        var needDiscriminator = tmp;
        var baseClassDiscriminator = needDiscriminator ? classDiscriminator(serializer.sg(), this.ix()) : null;
        var tmp_1;
        if (isPolymorphicSerializer) {
          var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
          $l$block_0: {
            // Inline function 'kotlin.requireNotNull' call
            if (value == null) {
              var message = 'Value for serializer ' + toString_1(serializer.sg()) + ' should always be non-null. Please report issue to the kotlinx.serialization tracker.';
              throw IllegalArgumentException.z(toString_1(message));
            } else {
              break $l$block_0;
            }
          }
          var actual = findPolymorphicSerializer(casted, this, value);
          if (!(baseClassDiscriminator == null)) {
            access$validateIfSealed$tPolymorphicKt(serializer, actual, baseClassDiscriminator);
            checkKind_0(actual.sg().vi());
          }
          tmp_1 = isInterface(actual, SerializationStrategy) ? actual : THROW_CCE();
        } else {
          tmp_1 = serializer;
        }
        var actualSerializer = tmp_1;
        if (!(baseClassDiscriminator == null)) {
          var serialName = actualSerializer.sg().oh();
          this.fw_1 = baseClassDiscriminator;
          this.gw_1 = serialName;
        }
        actualSerializer.tg(this, value);
      }
    }
    ik(descriptor) {
      var newMode = switchMode(this.zv_1, descriptor);
      if (!(newMode.nx_1 === _Char___init__impl__6a9atx(0))) {
        this.yv_1.vt(newMode.nx_1);
        this.yv_1.qt();
      }
      var discriminator = this.fw_1;
      if (!(discriminator == null)) {
        var tmp0_elvis_lhs = this.gw_1;
        encodeTypeInfo(this, discriminator, tmp0_elvis_lhs == null ? descriptor.oh() : tmp0_elvis_lhs);
        this.fw_1 = null;
        this.gw_1 = null;
      }
      if (this.aw_1.equals(newMode)) {
        return this;
      }
      var tmp1_safe_receiver = this.bw_1;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver[newMode.l2_1];
      return tmp2_elvis_lhs == null ? StreamingJsonEncoder.sx(this.yv_1, this.zv_1, newMode, this.bw_1) : tmp2_elvis_lhs;
    }
    jk(descriptor) {
      if (!(this.aw_1.ox_1 === _Char___init__impl__6a9atx(0))) {
        this.yv_1.rt();
        this.yv_1.tt();
        this.yv_1.vt(this.aw_1.ox_1);
      }
    }
    vk(descriptor, index) {
      switch (this.aw_1.l2_1) {
        case 1:
          if (!this.yv_1.pt_1) {
            this.yv_1.vt(_Char___init__impl__6a9atx(44));
          }

          this.yv_1.st();
          break;
        case 2:
          if (!this.yv_1.pt_1) {
            var tmp = this;
            var tmp_0;
            if ((index % 2 | 0) === 0) {
              this.yv_1.vt(_Char___init__impl__6a9atx(44));
              this.yv_1.st();
              tmp_0 = true;
            } else {
              this.yv_1.vt(_Char___init__impl__6a9atx(58));
              this.yv_1.ut();
              tmp_0 = false;
            }
            tmp.ew_1 = tmp_0;
          } else {
            this.ew_1 = true;
            this.yv_1.st();
          }

          break;
        case 3:
          if (index === 0)
            this.ew_1 = true;
          if (index === 1) {
            this.yv_1.vt(_Char___init__impl__6a9atx(44));
            this.yv_1.ut();
            this.ew_1 = false;
          }

          break;
        default:
          if (!this.yv_1.pt_1) {
            this.yv_1.vt(_Char___init__impl__6a9atx(44));
          }

          this.yv_1.st();
          this.bl(getJsonElementName(descriptor, this.zv_1, index));
          this.yv_1.vt(_Char___init__impl__6a9atx(58));
          this.yv_1.ut();
          break;
      }
      return true;
    }
    il(descriptor, index, serializer, value) {
      if (!(value == null) || this.dw_1.os_1) {
        super.il(descriptor, index, serializer, value);
      }
    }
    xk() {
      this.yv_1.xt('null');
    }
    yk(value) {
      if (this.ew_1) {
        this.bl(value.toString());
      } else {
        this.yv_1.cu(value);
      }
    }
    zk(value) {
      if (this.ew_1) {
        this.bl(value.toString());
      } else {
        this.yv_1.zt(value);
      }
    }
    al(value) {
      if (this.ew_1) {
        this.bl(value.toString());
      } else {
        this.yv_1.bu(value);
      }
    }
    bl(value) {
      return this.yv_1.du(value);
    }
    cl(enumDescriptor, index) {
      this.bl(enumDescriptor.zi(index));
    }
  }
  class AbstractJsonTreeDecoder extends NamedValueDecoder {
    constructor(json, value, polymorphicDiscriminator) {
      polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
      super();
      this.vx_1 = json;
      this.wx_1 = value;
      this.xx_1 = polymorphicDiscriminator;
      this.yx_1 = this.ix().wq_1;
    }
    ix() {
      return this.vx_1;
    }
    d2() {
      return this.wx_1;
    }
    qk() {
      return this.ix().qk();
    }
    ay() {
      var tmp0_safe_receiver = this.up();
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp = this.by(tmp0_safe_receiver);
      }
      var tmp1_elvis_lhs = tmp;
      return tmp1_elvis_lhs == null ? this.d2() : tmp1_elvis_lhs;
    }
    zx(currentTag) {
      return this.wp() + ('.' + currentTag);
    }
    jx() {
      return this.ay();
    }
    hk(deserializer) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
        var tmp;
        if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
          tmp = true;
        } else {
          tmp = this.ix().wq_1.rs_1;
        }
        if (tmp) {
          tmp$ret$0 = deserializer.ug(this);
          break $l$block;
        }
        var discriminator = classDiscriminator(deserializer.sg(), this.ix());
        var tmp0 = this.jx();
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        var serialName = deserializer.sg().oh();
        if (!(tmp0 instanceof JsonObject)) {
          var tmp_0 = getKClass(JsonObject).ib();
          var tmp_1 = getKClassFromExpression(tmp0).ib();
          var tmp$ret$1 = this.wp();
          throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$1, toString_1(tmp0));
        }
        var jsonTree = tmp0;
        var tmp0_safe_receiver = jsonTree.ft(discriminator);
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
        var type = tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
        var tmp_2;
        try {
          tmp_2 = findPolymorphicSerializer_0(deserializer, this, type);
        } catch ($p) {
          var tmp_3;
          if ($p instanceof SerializationException) {
            var it = $p;
            throw JsonDecodingException_0(-1, ensureNotNull(it.message), jsonTree.toString());
          } else {
            throw $p;
          }
        }
        var tmp_4 = tmp_2;
        var actualSerializer = isInterface(tmp_4, DeserializationStrategy) ? tmp_4 : THROW_CCE();
        tmp$ret$0 = readPolymorphicJson(this.ix(), discriminator, jsonTree, actualSerializer);
      }
      return tmp$ret$0;
    }
    vp(parentName, childName) {
      return childName;
    }
    ik(descriptor) {
      var currentObject = this.ay();
      var tmp0_subject = descriptor.vi();
      var tmp;
      var tmp_0;
      if (equals(tmp0_subject, LIST_getInstance())) {
        tmp_0 = true;
      } else {
        tmp_0 = tmp0_subject instanceof PolymorphicKind;
      }
      if (tmp_0) {
        var tmp_1 = this.ix();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        var serialName = descriptor.oh();
        if (!(currentObject instanceof JsonArray)) {
          var tmp_2 = getKClass(JsonArray).ib();
          var tmp_3 = getKClassFromExpression(currentObject).ib();
          var tmp$ret$0 = this.wp();
          throw JsonDecodingException_0(-1, 'Expected ' + tmp_2 + ', but had ' + tmp_3 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString_1(currentObject));
        }
        tmp = new JsonTreeListDecoder(tmp_1, currentObject);
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
          var this_0 = this.ix();
          var keyDescriptor = carrierDescriptor(descriptor.cj(0), this_0.qk());
          var keyKind = keyDescriptor.vi();
          var tmp_4;
          var tmp_5;
          if (keyKind instanceof PrimitiveKind) {
            tmp_5 = true;
          } else {
            tmp_5 = equals(keyKind, ENUM_getInstance());
          }
          if (tmp_5) {
            var tmp_6 = this.ix();
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
            // Inline function 'kotlinx.serialization.json.internal.cast' call
            var serialName_0 = descriptor.oh();
            if (!(currentObject instanceof JsonObject)) {
              var tmp_7 = getKClass(JsonObject).ib();
              var tmp_8 = getKClassFromExpression(currentObject).ib();
              var tmp$ret$3 = this.wp();
              throw JsonDecodingException_0(-1, 'Expected ' + tmp_7 + ', but had ' + tmp_8 + ' as the serialized body of ' + serialName_0 + ' at element: ' + tmp$ret$3, toString_1(currentObject));
            }
            tmp_4 = new JsonTreeMapDecoder(tmp_6, currentObject);
          } else {
            if (this_0.wq_1.ms_1) {
              var tmp_9 = this.ix();
              // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
              // Inline function 'kotlinx.serialization.json.internal.cast' call
              var serialName_1 = descriptor.oh();
              if (!(currentObject instanceof JsonArray)) {
                var tmp_10 = getKClass(JsonArray).ib();
                var tmp_11 = getKClassFromExpression(currentObject).ib();
                var tmp$ret$7 = this.wp();
                throw JsonDecodingException_0(-1, 'Expected ' + tmp_10 + ', but had ' + tmp_11 + ' as the serialized body of ' + serialName_1 + ' at element: ' + tmp$ret$7, toString_1(currentObject));
              }
              tmp_4 = new JsonTreeListDecoder(tmp_9, currentObject);
            } else {
              throw InvalidKeyKindException(keyDescriptor);
            }
          }
          tmp = tmp_4;
        } else {
          var tmp_12 = this.ix();
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName_2 = descriptor.oh();
          if (!(currentObject instanceof JsonObject)) {
            var tmp_13 = getKClass(JsonObject).ib();
            var tmp_14 = getKClassFromExpression(currentObject).ib();
            var tmp$ret$12 = this.wp();
            throw JsonDecodingException_0(-1, 'Expected ' + tmp_13 + ', but had ' + tmp_14 + ' as the serialized body of ' + serialName_2 + ' at element: ' + tmp$ret$12, toString_1(currentObject));
          }
          tmp = new JsonTreeDecoder(tmp_12, currentObject, this.xx_1);
        }
      }
      return tmp;
    }
    jk(descriptor) {
    }
    zj() {
      var tmp = this.ay();
      return !(tmp instanceof JsonNull);
    }
    cy(tag, enumDescriptor) {
      var tmp = this.ix();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      var tmp2 = this.by(tag);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = enumDescriptor.oh();
      if (!(tmp2 instanceof JsonPrimitive)) {
        var tmp_0 = getKClass(JsonPrimitive).ib();
        var tmp_1 = getKClassFromExpression(tmp2).ib();
        var tmp$ret$0 = this.zx(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString_1(tmp2));
      }
      return getJsonNameIndexOrThrow(enumDescriptor, tmp, tmp2.gt());
    }
    dq(tag, enumDescriptor) {
      return this.cy((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), enumDescriptor);
    }
    dy(tag) {
      return !(this.by(tag) === JsonNull_getInstance());
    }
    yp(tag) {
      return this.dy((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
    }
    ey(tag) {
      var tmp$ret$4;
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        var value = this.by(tag);
        if (!(value instanceof JsonPrimitive)) {
          var tmp = getKClass(JsonPrimitive).ib();
          var tmp_0 = getKClassFromExpression(value).ib();
          var tmp$ret$0 = this.zx(tag);
          throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'boolean' + ' at element: ' + tmp$ret$0, toString_1(value));
        }
        var literal = value;
        try {
          var tmp0_elvis_lhs = get_booleanOrNull(literal);
          var tmp_1;
          if (tmp0_elvis_lhs == null) {
            unparsedPrimitive(this, literal, 'boolean', tag);
          } else {
            tmp_1 = tmp0_elvis_lhs;
          }
          tmp$ret$4 = tmp_1;
          break $l$block;
        } catch ($p) {
          if ($p instanceof IllegalArgumentException) {
            var e = $p;
            unparsedPrimitive(this, literal, 'boolean', tag);
          } else {
            throw $p;
          }
        }
      }
      return tmp$ret$4;
    }
    zp(tag) {
      return this.ey((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
    }
    fy(tag) {
      var tmp$ret$5;
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        var value = this.by(tag);
        if (!(value instanceof JsonPrimitive)) {
          var tmp = getKClass(JsonPrimitive).ib();
          var tmp_0 = getKClassFromExpression(value).ib();
          var tmp$ret$0 = this.zx(tag);
          throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'int' + ' at element: ' + tmp$ret$0, toString_1(value));
        }
        var literal = value;
        try {
          var result = parseLongImpl(literal);
          var tmp_1;
          // Inline function 'kotlin.ranges.contains' call
          var this_0 = numberRangeToNumber(-2147483648, 2147483647);
          if (contains_2(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
            tmp_1 = convertToInt(result);
          } else {
            tmp_1 = null;
          }
          var tmp0_elvis_lhs = tmp_1;
          var tmp_2;
          if (tmp0_elvis_lhs == null) {
            unparsedPrimitive(this, literal, 'int', tag);
          } else {
            tmp_2 = tmp0_elvis_lhs;
          }
          tmp$ret$5 = tmp_2;
          break $l$block;
        } catch ($p) {
          if ($p instanceof IllegalArgumentException) {
            var e = $p;
            unparsedPrimitive(this, literal, 'int', tag);
          } else {
            throw $p;
          }
        }
      }
      return tmp$ret$5;
    }
    aq(tag) {
      return this.fy((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
    }
    gy(tag) {
      var tmp$ret$4;
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        var value = this.by(tag);
        if (!(value instanceof JsonPrimitive)) {
          var tmp = getKClass(JsonPrimitive).ib();
          var tmp_0 = getKClassFromExpression(value).ib();
          var tmp$ret$0 = this.zx(tag);
          throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'long' + ' at element: ' + tmp$ret$0, toString_1(value));
        }
        var literal = value;
        try {
          var tmp0_elvis_lhs = parseLongImpl(literal);
          var tmp_1;
          if (tmp0_elvis_lhs == null) {
            unparsedPrimitive(this, literal, 'long', tag);
          } else {
            tmp_1 = tmp0_elvis_lhs;
          }
          tmp$ret$4 = tmp_1;
          break $l$block;
        } catch ($p) {
          if ($p instanceof IllegalArgumentException) {
            var e = $p;
            unparsedPrimitive(this, literal, 'long', tag);
          } else {
            throw $p;
          }
        }
      }
      return tmp$ret$4;
    }
    bq(tag) {
      return this.gy((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
    }
    hy(tag) {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.by(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).ib();
        var tmp_0 = getKClassFromExpression(value).ib();
        var tmp$ret$0 = this.zx(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'string' + ' at element: ' + tmp$ret$0, toString_1(value));
      }
      var value_0 = value;
      if (!(value_0 instanceof JsonLiteral))
        throw JsonDecodingException_0(-1, "Expected string value for a non-null key '" + tag + "', got null literal instead at element: " + this.zx(tag), toString_1(this.ay()));
      if (!value_0.it_1 && !this.ix().wq_1.ls_1) {
        throw JsonDecodingException_0(-1, "String literal for key '" + tag + "' should be quoted at element: " + this.zx(tag) + ".\nUse 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.", toString_1(this.ay()));
      }
      return value_0.kt_1;
    }
    cq(tag) {
      return this.hy((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
    }
  }
  class JsonTreeDecoder extends AbstractJsonTreeDecoder {
    constructor(json, value, polymorphicDiscriminator, polyDescriptor) {
      polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
      polyDescriptor = polyDescriptor === VOID ? null : polyDescriptor;
      super(json, value, polymorphicDiscriminator);
      this.oy_1 = value;
      this.py_1 = polyDescriptor;
      this.qy_1 = 0;
      this.ry_1 = false;
    }
    d2() {
      return this.oy_1;
    }
    sk(descriptor) {
      $l$loop: while (this.qy_1 < descriptor.xi()) {
        var _unary__edvuaz = this.qy_1;
        this.qy_1 = _unary__edvuaz + 1 | 0;
        var name = this.pp(descriptor, _unary__edvuaz);
        var index = this.qy_1 - 1 | 0;
        this.ry_1 = false;
        var tmp;
        // Inline function 'kotlin.collections.contains' call
        // Inline function 'kotlin.collections.containsKey' call
        var this_0 = this.d2();
        if ((isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).e2(name)) {
          tmp = true;
        } else {
          tmp = setForceNull(this, descriptor, index);
        }
        if (tmp) {
          if (!this.yx_1.qs_1)
            return index;
          var tmp0 = this.ix();
          var tmp$ret$3;
          $l$block_2: {
            // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
            var isOptional = descriptor.dj(index);
            var elementDescriptor = descriptor.cj(index);
            var tmp_0;
            if (isOptional && !elementDescriptor.pi()) {
              var tmp_1 = this.sy(name);
              tmp_0 = tmp_1 instanceof JsonNull;
            } else {
              tmp_0 = false;
            }
            if (tmp_0) {
              tmp$ret$3 = true;
              break $l$block_2;
            }
            if (equals(elementDescriptor.vi(), ENUM_getInstance())) {
              var tmp_2;
              if (elementDescriptor.pi()) {
                var tmp_3 = this.sy(name);
                tmp_2 = tmp_3 instanceof JsonNull;
              } else {
                tmp_2 = false;
              }
              if (tmp_2) {
                tmp$ret$3 = false;
                break $l$block_2;
              }
              var tmp_4 = this.sy(name);
              var tmp0_safe_receiver = tmp_4 instanceof JsonPrimitive ? tmp_4 : null;
              var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : get_contentOrNull(tmp0_safe_receiver);
              var tmp_5;
              if (tmp0_elvis_lhs == null) {
                tmp$ret$3 = false;
                break $l$block_2;
              } else {
                tmp_5 = tmp0_elvis_lhs;
              }
              var enumValue = tmp_5;
              var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
              var coerceToNull = !tmp0.wq_1.os_1 && elementDescriptor.pi();
              if (enumIndex === -3 && (isOptional || coerceToNull)) {
                if (setForceNull(this, descriptor, index))
                  return index;
                tmp$ret$3 = true;
                break $l$block_2;
              }
            }
            tmp$ret$3 = false;
          }
          if (tmp$ret$3)
            continue $l$loop;
          return index;
        }
      }
      return -1;
    }
    zj() {
      return !this.ry_1 && super.zj();
    }
    qp(descriptor, index) {
      var strategy = namingStrategy(descriptor, this.ix());
      var baseName = descriptor.zi(index);
      if (strategy == null) {
        if (!this.yx_1.us_1)
          return baseName;
        if (this.d2().h2().p1(baseName))
          return baseName;
      }
      var deserializationNamesMap_0 = deserializationNamesMap(this.ix(), descriptor);
      // Inline function 'kotlin.collections.find' call
      var tmp0 = this.d2().h2();
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var _iterator__ex2g4s = tmp0.e1();
        while (_iterator__ex2g4s.f1()) {
          var element = _iterator__ex2g4s.g1();
          if (deserializationNamesMap_0.g2(element) === index) {
            tmp$ret$1 = element;
            break $l$block;
          }
        }
        tmp$ret$1 = null;
      }
      var tmp0_safe_receiver = tmp$ret$1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        return tmp0_safe_receiver;
      }
      var fallbackName = strategy == null ? null : strategy.lv(descriptor, index, baseName);
      return fallbackName == null ? baseName : fallbackName;
    }
    by(tag) {
      return getValue(this.d2(), tag);
    }
    sy(tag) {
      return this.d2().ft(tag);
    }
    ik(descriptor) {
      if (descriptor === this.py_1) {
        var tmp = this.ix();
        var tmp2 = this.ay();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        var serialName = this.py_1.oh();
        if (!(tmp2 instanceof JsonObject)) {
          var tmp_0 = getKClass(JsonObject).ib();
          var tmp_1 = getKClassFromExpression(tmp2).ib();
          var tmp$ret$0 = this.wp();
          throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString_1(tmp2));
        }
        return new JsonTreeDecoder(tmp, tmp2, this.xx_1, this.py_1);
      }
      return super.ik(descriptor);
    }
    jk(descriptor) {
      var tmp;
      if (ignoreUnknownKeys(descriptor, this.ix())) {
        tmp = true;
      } else {
        var tmp_0 = descriptor.vi();
        tmp = tmp_0 instanceof PolymorphicKind;
      }
      if (tmp)
        return Unit_instance;
      var strategy = namingStrategy(descriptor, this.ix());
      var tmp_1;
      if (strategy == null && !this.yx_1.us_1) {
        tmp_1 = jsonCachedSerialNames(descriptor);
      } else if (!(strategy == null)) {
        tmp_1 = deserializationNamesMap(this.ix(), descriptor).h2();
      } else {
        var tmp_2 = jsonCachedSerialNames(descriptor);
        var tmp0_safe_receiver = get_schemaCache(this.ix()).yw(descriptor, get_JsonDeserializationNamesKey());
        // Inline function 'kotlin.collections.orEmpty' call
        var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.h2();
        var tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
        tmp_1 = plus_0(tmp_2, tmp$ret$0);
      }
      var names = tmp_1;
      var _iterator__ex2g4s = this.d2().h2().e1();
      while (_iterator__ex2g4s.f1()) {
        var key = _iterator__ex2g4s.g1();
        if (!names.p1(key) && !(key === this.xx_1)) {
          throw JsonDecodingException_1(-1, "Encountered an unknown key '" + key + "' at element: " + this.wp() + '\n' + "Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.\n" + ('JSON input: ' + toString_1(minify(this.d2().toString()))));
        }
      }
    }
  }
  class JsonTreeListDecoder extends AbstractJsonTreeDecoder {
    constructor(json, value) {
      super(json, value);
      this.zy_1 = value;
      this.az_1 = this.zy_1.j1();
      this.bz_1 = -1;
    }
    d2() {
      return this.zy_1;
    }
    qp(descriptor, index) {
      return index.toString();
    }
    by(tag) {
      return this.zy_1.l1(toInt(tag));
    }
    sk(descriptor) {
      while (this.bz_1 < (this.az_1 - 1 | 0)) {
        this.bz_1 = this.bz_1 + 1 | 0;
        return this.bz_1;
      }
      return -1;
    }
  }
  class JsonTreeMapDecoder extends JsonTreeDecoder {
    constructor(json, value) {
      super(json, value);
      this.mz_1 = value;
      this.nz_1 = toList_0(this.mz_1.h2());
      this.oz_1 = imul(this.nz_1.j1(), 2);
      this.pz_1 = -1;
    }
    d2() {
      return this.mz_1;
    }
    qp(descriptor, index) {
      var i = index / 2 | 0;
      return this.nz_1.l1(i);
    }
    sk(descriptor) {
      while (this.pz_1 < (this.oz_1 - 1 | 0)) {
        this.pz_1 = this.pz_1 + 1 | 0;
        return this.pz_1;
      }
      return -1;
    }
    by(tag) {
      return (this.pz_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.mz_1, tag);
    }
    jk(descriptor) {
    }
  }
  class WriteMode extends Enum {
    constructor(name, ordinal, begin, end) {
      super(name, ordinal);
      this.nx_1 = begin;
      this.ox_1 = end;
    }
  }
  class AbstractJsonLexer {
    constructor() {
      this.lr_1 = 0;
      this.mr_1 = new JsonPath();
      this.nr_1 = null;
      this.or_1 = StringBuilder.b1();
    }
    tz() {
    }
    bx() {
      var current = this.uz();
      var source = this.rz();
      if (current >= charSequenceLength(source) || current === -1)
        return false;
      if (charSequenceGet(source, current) === _Char___init__impl__6a9atx(44)) {
        this.lr_1 = this.lr_1 + 1 | 0;
        return true;
      }
      return false;
    }
    vz(c) {
      return c === _Char___init__impl__6a9atx(125) || c === _Char___init__impl__6a9atx(93) || (c === _Char___init__impl__6a9atx(58) || c === _Char___init__impl__6a9atx(44)) ? false : true;
    }
    pr() {
      var nextToken = this.uw();
      if (!(nextToken === 10)) {
        this.ow('Expected EOF after parsing, but had ' + toString(charSequenceGet(this.rz(), this.lr_1 - 1 | 0)) + ' instead');
      }
    }
    pw(expected) {
      var token = this.uw();
      if (!(token === expected)) {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
        var expected_0 = tokenDescription(expected);
        var position = true ? this.lr_1 - 1 | 0 : this.lr_1;
        var s = this.lr_1 === charSequenceLength(this.rz()) || position < 0 ? 'EOF' : toString(charSequenceGet(this.rz(), position));
        var tmp$ret$0 = 'Expected ' + expected_0 + ", but had '" + s + "' instead";
        this.ow(tmp$ret$0, position);
      }
      return token;
    }
    wz(expected) {
      if (this.lr_1 > 0 && expected === _Char___init__impl__6a9atx(34)) {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.withPositionRollback' call
          var snapshot = this.lr_1;
          try {
            this.lr_1 = this.lr_1 - 1 | 0;
            tmp$ret$1 = this.sw();
            break $l$block;
          }finally {
            this.lr_1 = snapshot;
          }
        }
        var inputLiteral = tmp$ret$1;
        if (inputLiteral === 'null') {
          this.nu("Expected string literal but 'null' literal was found", this.lr_1 - 1 | 0, "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.");
        }
      }
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expectedToken = charToTokenClass(expected);
      var expected_0 = tokenDescription(expectedToken);
      var position = true ? this.lr_1 - 1 | 0 : this.lr_1;
      var s = this.lr_1 === charSequenceLength(this.rz()) || position < 0 ? 'EOF' : toString(charSequenceGet(this.rz(), position));
      var tmp$ret$2 = 'Expected ' + expected_0 + ", but had '" + s + "' instead";
      this.ow(tmp$ret$2, position);
    }
    nw() {
      var source = this.rz();
      var cpos = this.lr_1;
      $l$loop_0: while (true) {
        cpos = this.sz(cpos);
        if (cpos === -1)
          break $l$loop_0;
        var ch = charSequenceGet(source, cpos);
        if (ch === _Char___init__impl__6a9atx(32) || ch === _Char___init__impl__6a9atx(10) || ch === _Char___init__impl__6a9atx(13) || ch === _Char___init__impl__6a9atx(9)) {
          cpos = cpos + 1 | 0;
          continue $l$loop_0;
        }
        this.lr_1 = cpos;
        return charToTokenClass(ch);
      }
      this.lr_1 = cpos;
      return 10;
    }
    cx(doConsume) {
      var current = this.uz();
      current = this.sz(current);
      var len = charSequenceLength(this.rz()) - current | 0;
      if (len < 4 || current === -1)
        return false;
      var inductionVariable = 0;
      if (inductionVariable <= 3)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(charCodeAt('null', i) === charSequenceGet(this.rz(), current + i | 0)))
            return false;
        }
         while (inductionVariable <= 3);
      if (len > 4 && charToTokenClass(charSequenceGet(this.rz(), current + 4 | 0)) === 0)
        return false;
      if (doConsume) {
        this.lr_1 = current + 4 | 0;
      }
      return true;
    }
    px(doConsume, $super) {
      doConsume = doConsume === VOID ? true : doConsume;
      return $super === VOID ? this.cx(doConsume) : $super.cx.call(this, doConsume);
    }
    dx(isLenient) {
      var token = this.nw();
      var tmp;
      if (isLenient) {
        if (!(token === 1) && !(token === 0))
          return null;
        tmp = this.sw();
      } else {
        if (!(token === 1))
          return null;
        tmp = this.rw();
      }
      var string = tmp;
      this.nr_1 = string;
      return string;
    }
    xz() {
      this.nr_1 = null;
    }
    yz(startPos, endPos) {
      // Inline function 'kotlin.text.substring' call
      var this_0 = this.rz();
      return toString_1(charSequenceSubSequence(this_0, startPos, endPos));
    }
    rw() {
      if (!(this.nr_1 == null)) {
        return takePeeked(this);
      }
      return this.gx();
    }
    consumeString2(source, startPosition, current) {
      var currentPosition = current;
      var lastPosition = startPosition;
      var char = charSequenceGet(source, currentPosition);
      var usedAppend = false;
      while (!(char === _Char___init__impl__6a9atx(34))) {
        if (char === _Char___init__impl__6a9atx(92)) {
          usedAppend = true;
          currentPosition = this.sz(appendEscape(this, lastPosition, currentPosition));
          if (currentPosition === -1) {
            this.ow('Unexpected EOF', currentPosition);
          }
          lastPosition = currentPosition;
        } else {
          currentPosition = currentPosition + 1 | 0;
          if (currentPosition >= charSequenceLength(source)) {
            usedAppend = true;
            this.qz(lastPosition, currentPosition);
            currentPosition = this.sz(currentPosition);
            if (currentPosition === -1) {
              this.ow('Unexpected EOF', currentPosition);
            }
            lastPosition = currentPosition;
          }
        }
        char = charSequenceGet(source, currentPosition);
      }
      var tmp;
      if (!usedAppend) {
        tmp = this.yz(lastPosition, currentPosition);
      } else {
        tmp = decodedString(this, lastPosition, currentPosition);
      }
      var string = tmp;
      this.lr_1 = currentPosition + 1 | 0;
      return string;
    }
    hx() {
      var result = this.sw();
      if (result === 'null' && wasUnquotedString(this)) {
        this.ow("Unexpected 'null' value instead of string literal");
      }
      return result;
    }
    sw() {
      if (!(this.nr_1 == null)) {
        return takePeeked(this);
      }
      var current = this.uz();
      if (current >= charSequenceLength(this.rz()) || current === -1) {
        this.ow('EOF', current);
      }
      var token = charToTokenClass(charSequenceGet(this.rz(), current));
      if (token === 1) {
        return this.rw();
      }
      if (!(token === 0)) {
        this.ow('Expected beginning of the string, but got ' + toString(charSequenceGet(this.rz(), current)));
      }
      var usedAppend = false;
      while (charToTokenClass(charSequenceGet(this.rz(), current)) === 0) {
        current = current + 1 | 0;
        if (current >= charSequenceLength(this.rz())) {
          usedAppend = true;
          this.qz(this.lr_1, current);
          var eof = this.sz(current);
          if (eof === -1) {
            this.lr_1 = current;
            return decodedString(this, 0, 0);
          } else {
            current = eof;
          }
        }
      }
      var tmp;
      if (!usedAppend) {
        tmp = this.yz(this.lr_1, current);
      } else {
        tmp = decodedString(this, this.lr_1, current);
      }
      var result = tmp;
      this.lr_1 = current;
      return result;
    }
    qz(fromIndex, toIndex) {
      this.or_1.nc(this.rz(), fromIndex, toIndex);
    }
    fx(allowLenientStrings) {
      // Inline function 'kotlin.collections.mutableListOf' call
      var tokenStack = ArrayList.o1();
      var lastToken = this.nw();
      if (!(lastToken === 8) && !(lastToken === 6)) {
        this.sw();
        return Unit_instance;
      }
      $l$loop: while (true) {
        lastToken = this.nw();
        if (lastToken === 1) {
          if (allowLenientStrings)
            this.sw();
          else
            this.gx();
          continue $l$loop;
        }
        var tmp0_subject = lastToken;
        if (tmp0_subject === 8 || tmp0_subject === 6) {
          tokenStack.r(lastToken);
        } else if (tmp0_subject === 9) {
          if (!(last(tokenStack) === 8))
            throw JsonDecodingException_0(this.lr_1, 'found ] instead of } at path: ' + this.mr_1.toString(), this.rz());
          removeLast(tokenStack);
        } else if (tmp0_subject === 7) {
          if (!(last(tokenStack) === 6))
            throw JsonDecodingException_0(this.lr_1, 'found } instead of ] at path: ' + this.mr_1.toString(), this.rz());
          removeLast(tokenStack);
        } else if (tmp0_subject === 10) {
          this.ow('Unexpected end of input due to malformed JSON during ignoring unknown keys');
        }
        this.uw();
        if (tokenStack.j1() === 0)
          return Unit_instance;
      }
    }
    toString() {
      return "JsonReader(source='" + toString_1(this.rz()) + "', currentPosition=" + this.lr_1 + ')';
    }
    ex(key) {
      var processed = this.yz(0, this.lr_1);
      var lastIndexOf_0 = lastIndexOf(processed, key);
      throw JsonDecodingException.hv("Encountered an unknown key '" + key + "' at offset " + lastIndexOf_0 + ' at path: ' + this.mr_1.uv() + "\nUse 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.\n" + ('JSON input: ' + toString_1(minify(this.rz(), lastIndexOf_0))));
    }
    nu(message, position, hint) {
      var tmp;
      // Inline function 'kotlin.text.isEmpty' call
      if (charSequenceLength(hint) === 0) {
        tmp = '';
      } else {
        tmp = '\n' + hint;
      }
      var hintMessage = tmp;
      throw JsonDecodingException_0(position, message + ' at path: ' + this.mr_1.uv() + hintMessage, this.rz());
    }
    ow(message, position, hint, $super) {
      position = position === VOID ? this.lr_1 : position;
      hint = hint === VOID ? '' : hint;
      return $super === VOID ? this.nu(message, position, hint) : $super.nu.call(this, message, position, hint);
    }
    rx() {
      var current = this.uz();
      current = this.sz(current);
      if (current >= charSequenceLength(this.rz()) || current === -1) {
        this.ow('EOF');
      }
      var tmp;
      if (charSequenceGet(this.rz(), current) === _Char___init__impl__6a9atx(34)) {
        current = current + 1 | 0;
        if (current === charSequenceLength(this.rz())) {
          this.ow('EOF');
        }
        tmp = true;
      } else {
        tmp = false;
      }
      var hasQuotation = tmp;
      var accumulator = new Long(0, 0);
      var exponentAccumulator = new Long(0, 0);
      var isNegative = false;
      var isExponentPositive = false;
      var hasExponent = false;
      var start = current;
      $l$loop_4: while (!(current === charSequenceLength(this.rz()))) {
        var ch = charSequenceGet(this.rz(), current);
        if ((ch === _Char___init__impl__6a9atx(101) || ch === _Char___init__impl__6a9atx(69)) && !hasExponent) {
          if (current === start) {
            this.ow('Unexpected symbol ' + toString(ch) + ' in numeric literal');
          }
          isExponentPositive = true;
          hasExponent = true;
          current = current + 1 | 0;
          continue $l$loop_4;
        }
        if (ch === _Char___init__impl__6a9atx(45) && hasExponent) {
          if (current === start) {
            this.ow("Unexpected symbol '-' in numeric literal");
          }
          isExponentPositive = false;
          current = current + 1 | 0;
          continue $l$loop_4;
        }
        if (ch === _Char___init__impl__6a9atx(43) && hasExponent) {
          if (current === start) {
            this.ow("Unexpected symbol '+' in numeric literal");
          }
          isExponentPositive = true;
          current = current + 1 | 0;
          continue $l$loop_4;
        }
        if (ch === _Char___init__impl__6a9atx(45)) {
          if (!(current === start)) {
            this.ow("Unexpected symbol '-' in numeric literal");
          }
          isNegative = true;
          current = current + 1 | 0;
          continue $l$loop_4;
        }
        var token = charToTokenClass(ch);
        if (!(token === 0))
          break $l$loop_4;
        current = current + 1 | 0;
        var digit = Char__minus_impl_a2frrh(ch, _Char___init__impl__6a9atx(48));
        if (!(0 <= digit ? digit <= 9 : false)) {
          this.ow("Unexpected symbol '" + toString(ch) + "' in numeric literal");
        }
        if (hasExponent) {
          // Inline function 'kotlin.Long.times' call
          var this_0 = exponentAccumulator;
          // Inline function 'kotlin.Long.plus' call
          var this_1 = multiply(this_0, fromInt(10));
          exponentAccumulator = add(this_1, fromInt(digit));
          continue $l$loop_4;
        }
        // Inline function 'kotlin.Long.times' call
        var this_2 = accumulator;
        // Inline function 'kotlin.Long.minus' call
        var this_3 = multiply(this_2, fromInt(10));
        accumulator = subtract(this_3, fromInt(digit));
        if (compare(accumulator, new Long(0, 0)) > 0) {
          this.ow('Numeric value overflow');
        }
      }
      var hasChars = !(current === start);
      if (start === current || (isNegative && start === (current - 1 | 0))) {
        this.ow('Expected numeric literal');
      }
      if (hasQuotation) {
        if (!hasChars) {
          this.ow('EOF');
        }
        if (!(charSequenceGet(this.rz(), current) === _Char___init__impl__6a9atx(34))) {
          this.ow('Expected closing quotation mark');
        }
        current = current + 1 | 0;
      }
      this.lr_1 = current;
      if (hasExponent) {
        var doubleAccumulator = toNumber(accumulator) * consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive);
        if (doubleAccumulator > toNumber(new Long(-1, 2147483647)) || doubleAccumulator < toNumber(new Long(0, -2147483648))) {
          this.ow('Numeric value overflow');
        }
        // Inline function 'kotlin.math.floor' call
        if (!(Math.floor(doubleAccumulator) === doubleAccumulator)) {
          this.ow("Can't convert " + doubleAccumulator + ' to Long');
        }
        accumulator = numberToLong(doubleAccumulator);
      }
      var tmp_0;
      if (isNegative) {
        tmp_0 = accumulator;
      } else if (!equalsLong(accumulator, new Long(0, -2147483648))) {
        tmp_0 = negate(accumulator);
      } else {
        this.ow('Numeric value overflow');
      }
      return tmp_0;
    }
    lt() {
      var result = this.rx();
      var next = this.uw();
      if (!(next === 10)) {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
        var expected = tokenDescription(10);
        var position = true ? this.lr_1 - 1 | 0 : this.lr_1;
        var s = this.lr_1 === charSequenceLength(this.rz()) || position < 0 ? 'EOF' : toString(charSequenceGet(this.rz(), position));
        var tmp$ret$0 = "Expected input to contain a single valid number, but got '" + s + "' after it";
        this.ow(tmp$ret$0, position);
      }
      return result;
    }
    qx() {
      var current = this.uz();
      if (current === charSequenceLength(this.rz())) {
        this.ow('EOF');
      }
      var tmp;
      if (charSequenceGet(this.rz(), current) === _Char___init__impl__6a9atx(34)) {
        current = current + 1 | 0;
        tmp = true;
      } else {
        tmp = false;
      }
      var hasQuotation = tmp;
      var result = consumeBoolean2(this, current);
      if (hasQuotation) {
        if (this.lr_1 === charSequenceLength(this.rz())) {
          this.ow('EOF');
        }
        if (!(charSequenceGet(this.rz(), this.lr_1) === _Char___init__impl__6a9atx(34))) {
          this.ow('Expected closing quotation mark');
        }
        this.lr_1 = this.lr_1 + 1 | 0;
      }
      return result;
    }
  }
  class CharMappings {
    constructor() {
      CharMappings_instance = this;
      this.zz_1 = charArray(117);
      this.a10_1 = new Int8Array(126);
      initEscape(this);
      initCharToToken(this);
    }
  }
  class StringJsonLexer extends AbstractJsonLexer {
    constructor(source) {
      super();
      this.k10_1 = source;
    }
    rz() {
      return this.k10_1;
    }
    sz(position) {
      return position < this.rz().length ? position : -1;
    }
    uw() {
      var source = this.rz();
      var cpos = this.lr_1;
      $l$loop: while (!(cpos === -1) && cpos < source.length) {
        var _unary__edvuaz = cpos;
        cpos = _unary__edvuaz + 1 | 0;
        var c = charCodeAt(source, _unary__edvuaz);
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
        if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
          continue $l$loop;
        this.lr_1 = cpos;
        return charToTokenClass(c);
      }
      this.lr_1 = source.length;
      return 10;
    }
    qw() {
      var current = this.lr_1;
      if (current === -1)
        return false;
      var source = this.rz();
      $l$loop: while (current < source.length) {
        var c = charCodeAt(source, current);
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
        if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
          current = current + 1 | 0;
          continue $l$loop;
        }
        this.lr_1 = current;
        return this.vz(c);
      }
      this.lr_1 = current;
      return false;
    }
    uz() {
      var current = this.lr_1;
      if (current === -1)
        return current;
      var source = this.rz();
      $l$loop: while (current < source.length) {
        var c = charCodeAt(source, current);
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
        if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
          current = current + 1 | 0;
        } else {
          break $l$loop;
        }
      }
      this.lr_1 = current;
      return current;
    }
    ax(expected) {
      if (this.lr_1 === -1) {
        this.wz(expected);
      }
      var source = this.rz();
      var cpos = this.lr_1;
      $l$loop: while (cpos < source.length) {
        var _unary__edvuaz = cpos;
        cpos = _unary__edvuaz + 1 | 0;
        var c = charCodeAt(source, _unary__edvuaz);
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
        if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
          continue $l$loop;
        this.lr_1 = cpos;
        if (c === expected)
          return Unit_instance;
        this.wz(expected);
      }
      this.lr_1 = -1;
      this.wz(expected);
    }
    gx() {
      this.ax(_Char___init__impl__6a9atx(34));
      var current = this.lr_1;
      var closingQuote = indexOf_1(this.rz(), _Char___init__impl__6a9atx(34), current);
      if (closingQuote === -1) {
        this.sw();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
        var expected = tokenDescription(1);
        var position = false ? this.lr_1 - 1 | 0 : this.lr_1;
        var s = this.lr_1 === charSequenceLength(this.rz()) || position < 0 ? 'EOF' : toString(charSequenceGet(this.rz(), position));
        var tmp$ret$0 = 'Expected ' + expected + ", but had '" + s + "' instead";
        this.ow(tmp$ret$0, position);
      }
      var inductionVariable = current;
      if (inductionVariable < closingQuote)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (charCodeAt(this.rz(), i) === _Char___init__impl__6a9atx(92)) {
            return this.consumeString2(this.rz(), this.lr_1, i);
          }
        }
         while (inductionVariable < closingQuote);
      this.lr_1 = closingQuote + 1 | 0;
      return substring(this.rz(), current, closingQuote);
    }
    kx(keyToMatch, isLenient) {
      var positionSnapshot = this.lr_1;
      try {
        if (!(this.uw() === 6))
          return null;
        var firstKey = this.dx(isLenient);
        if (!(firstKey === keyToMatch))
          return null;
        this.xz();
        if (!(this.uw() === 5))
          return null;
        return this.dx(isLenient);
      }finally {
        this.lr_1 = positionSnapshot;
        this.xz();
      }
    }
  }
  class StringJsonLexerWithComments extends StringJsonLexer {
    uw() {
      var source = this.rz();
      var cpos = this.uz();
      if (cpos >= source.length || cpos === -1)
        return 10;
      this.lr_1 = cpos + 1 | 0;
      return charToTokenClass(charCodeAt(source, cpos));
    }
    qw() {
      var current = this.uz();
      if (current >= this.rz().length || current === -1)
        return false;
      return this.vz(charCodeAt(this.rz(), current));
    }
    ax(expected) {
      var source = this.rz();
      var current = this.uz();
      if (current >= source.length || current === -1) {
        this.lr_1 = -1;
        this.wz(expected);
      }
      var c = charCodeAt(source, current);
      this.lr_1 = current + 1 | 0;
      if (c === expected)
        return Unit_instance;
      else {
        this.wz(expected);
      }
    }
    nw() {
      var source = this.rz();
      var cpos = this.uz();
      if (cpos >= source.length || cpos === -1)
        return 10;
      this.lr_1 = cpos;
      return charToTokenClass(charCodeAt(source, cpos));
    }
    uz() {
      var current = this.lr_1;
      if (current === -1)
        return current;
      var source = this.rz();
      $l$loop_1: while (current < source.length) {
        var c = charCodeAt(source, current);
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
        if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
          current = current + 1 | 0;
          continue $l$loop_1;
        }
        if (c === _Char___init__impl__6a9atx(47) && (current + 1 | 0) < source.length) {
          var tmp0_subject = charCodeAt(source, current + 1 | 0);
          if (tmp0_subject === _Char___init__impl__6a9atx(47)) {
            current = indexOf_1(source, _Char___init__impl__6a9atx(10), current + 2 | 0);
            if (current === -1) {
              current = source.length;
            } else {
              current = current + 1 | 0;
            }
            continue $l$loop_1;
          } else if (tmp0_subject === _Char___init__impl__6a9atx(42)) {
            current = indexOf_2(source, '*/', current + 2 | 0);
            if (current === -1) {
              this.lr_1 = source.length;
              this.ow('Expected end of the block comment: "*/", but had EOF instead');
            } else {
              current = current + 2 | 0;
            }
            continue $l$loop_1;
          }
        }
        break $l$loop_1;
      }
      this.lr_1 = current;
      return current;
    }
  }
  class JsonToStringWriter {
    constructor() {
      this.br_1 = StringBuilder.s9(128);
    }
    au(value) {
      this.br_1.qc(value);
    }
    wt(char) {
      this.br_1.q9(char);
    }
    yt(text) {
      this.br_1.p9(text);
    }
    eu(text) {
      printQuoted(this.br_1, text);
    }
    cr() {
      this.br_1.sc();
    }
    toString() {
      return this.br_1.toString();
    }
  }
  class Companion_17 {
    constructor() {
      Companion_instance_17 = this;
      var tmp = this;
      var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
      tmp.l10_1 = lazy(tmp_0, Suit$Companion$_anonymous__cbm2iq);
    }
    m10() {
      return _get_$cachedSerializer__te6jhj(this);
    }
  }
  class Suit extends Enum {
    constructor(name, ordinal, label) {
      super(name, ordinal);
      this.p10_1 = label;
    }
  }
  class Fx extends Enum {}
  class TargetKind extends Enum {}
  class Companion_18 {
    constructor() {
      Companion_instance_18 = this;
      var tmp = this;
      var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
      tmp.q10_1 = lazy(tmp_0, Chaos$Companion$_anonymous__j28p0x);
    }
    m10() {
      return _get_$cachedSerializer__te6jhj_0(this);
    }
  }
  class Chaos extends Enum {
    constructor(name, ordinal, title, text, social) {
      super(name, ordinal);
      this.t10_1 = title;
      this.u10_1 = text;
      this.v10_1 = social;
    }
  }
  class CardDef {
    constructor(id, name, fx, text, target, star, copies, art, rule, cover, coverName) {
      target = target === VOID ? TargetKind_NONE_getInstance() : target;
      star = star === VOID ? false : star;
      art = art === VOID ? id : art;
      rule = rule === VOID ? '' : rule;
      cover = cover === VOID ? null : cover;
      coverName = coverName === VOID ? null : coverName;
      this.w10_1 = id;
      this.x10_1 = name;
      this.y10_1 = fx;
      this.z10_1 = text;
      this.a11_1 = target;
      this.b11_1 = star;
      this.c11_1 = copies;
      this.d11_1 = art;
      this.e11_1 = rule;
      this.f11_1 = cover;
      this.g11_1 = coverName;
    }
    h11() {
      return setOf_0([Fx_TRAP_getInstance(), Fx_POINTS_getInstance(), Fx_LAUGH_getInstance(), Fx_BOMB_getInstance(), Fx_DINO_getInstance()]).p1(this.y10_1);
    }
    toString() {
      return 'CardDef(id=' + this.w10_1 + ', name=' + this.x10_1 + ', fx=' + this.y10_1.toString() + ', text=' + this.z10_1 + ', target=' + this.a11_1.toString() + ', star=' + this.b11_1 + ', copies=' + this.c11_1 + ', art=' + this.d11_1 + ', rule=' + this.e11_1 + ', cover=' + this.f11_1 + ', coverName=' + this.g11_1 + ')';
    }
    hashCode() {
      var result = getStringHashCode(this.w10_1);
      result = imul(result, 31) + getStringHashCode(this.x10_1) | 0;
      result = imul(result, 31) + this.y10_1.hashCode() | 0;
      result = imul(result, 31) + getStringHashCode(this.z10_1) | 0;
      result = imul(result, 31) + this.a11_1.hashCode() | 0;
      result = imul(result, 31) + getBooleanHashCode(this.b11_1) | 0;
      result = imul(result, 31) + this.c11_1 | 0;
      result = imul(result, 31) + getStringHashCode(this.d11_1) | 0;
      result = imul(result, 31) + getStringHashCode(this.e11_1) | 0;
      result = imul(result, 31) + (this.f11_1 == null ? 0 : getStringHashCode(this.f11_1)) | 0;
      result = imul(result, 31) + (this.g11_1 == null ? 0 : getStringHashCode(this.g11_1)) | 0;
      return result;
    }
    equals(other) {
      if (this === other)
        return true;
      if (!(other instanceof CardDef))
        return false;
      if (!(this.w10_1 === other.w10_1))
        return false;
      if (!(this.x10_1 === other.x10_1))
        return false;
      if (!this.y10_1.equals(other.y10_1))
        return false;
      if (!(this.z10_1 === other.z10_1))
        return false;
      if (!this.a11_1.equals(other.a11_1))
        return false;
      if (!(this.b11_1 === other.b11_1))
        return false;
      if (!(this.c11_1 === other.c11_1))
        return false;
      if (!(this.d11_1 === other.d11_1))
        return false;
      if (!(this.e11_1 === other.e11_1))
        return false;
      if (!(this.f11_1 == other.f11_1))
        return false;
      if (!(this.g11_1 == other.g11_1))
        return false;
      return true;
    }
  }
  class ArenaCards {
    constructor() {
      ArenaCards_instance = this;
      this.i11_1 = '\u5168\u54E1\u305B\u30FC\u306E\u3067\u3001\u6307\u30921\u301C5\u672C\u51FA\u3059\u3002\u4F55\u304C\u8D77\u304D\u308B\u304B\u306F\u3001\u51FA\u3057\u3066\u304B\u3089\u306E\u304A\u697D\u3057\u307F\u2026';
      this.j11_1 = '\u5168\u54E1\u3067\u3044\u3063\u305B\u3044\u306B\u3058\u3083\u3093\u3051\u3093\uFF01 \u4F55\u304C\u8D77\u304D\u308B\u304B\u306F\u3001\u51FA\u3057\u3066\u304B\u3089\u306E\u304A\u697D\u3057\u307F\u2026';
      this.k11_1 = '\u51FA\u3057\u305F\u4EBA\u304C\u5408\u56F3\u3057\u305F\u3089\u3001\u5168\u54E1\u3059\u3050\u306B\u62BC\u3059\u2026\uFF1F';
      this.l11_1 = '\u307B\u304B\u306E\u5168\u54E1\u306B\u805E\u304D\u307E\u3059\u3002\u300C\u30D7\u30EC\u30BC\u30F3\u30C8\u3001\u307B\u3057\u3044\uFF1F \u3044\u3089\u306A\u3044\uFF1F\u300D';
      this.m11_1 = listOf_0([new CardDef('pitfall', '\u843D\u3068\u3057\u7A74', Fx_TRAP_getInstance(), '\u6307\u540D\u3057\u305F\u4EBA\u306E\u524D\u306B\u7F6E\u304F\u3002\u305D\u306E\u4EBA\u306E\u624B\u756A\u306E\u7D42\u308F\u308A\u306B\u307E\u3060\u7F6E\u304B\u308C\u3066\u3044\u305F\u3089\u3001\u305D\u306E\u4EBA\u306F\u7A74\u306B\u843D\u3061\u3066\u8CA0\u3051\u3002', TargetKind_ALIVE_OTHER_getInstance(), VOID, 4), new CardDef('theend', '\u9589\u5E55\u306E\u30D9\u30EB', Fx_THE_END_getInstance(), '\u6B21\u306E\u3042\u306A\u305F\u306E\u624B\u756A\u304C\u7D42\u308F\u3063\u305F\u3068\u304D\u3001\u307E\u3060\u6B8B\u3063\u3066\u3044\u308B\u5168\u54E1\u306E\u8CA0\u3051\u3002', VOID, VOID, 2, 'peek'), new CardDef('coin', '\u91D1\u8CA8', Fx_POINTS_getInstance(), '\u81EA\u5206\u306E\u524D\u306B\u7F6E\u304F\u30025\u30DD\u30A4\u30F3\u30C8\u300215\u30DD\u30A4\u30F3\u30C8\u4EE5\u4E0A\u305F\u3081\u305F\u4EBA\u306E\u52DD\u3061\u3002', VOID, VOID, 4, VOID, '5'), new CardDef('finger_odd', '\u305B\u30FC\u306E\u3067\u3086\u3073', Fx_FINGERS_getInstance(), '\u5168\u54E1\u305B\u30FC\u306E\u3067\u3001\u6307\u30921\u301C5\u672C\u51FA\u3059\u3002\u5947\u6570\u306E\u672C\u6570\u3092\u51FA\u3057\u305F\u4EBA\u306F\u8CA0\u3051\u3002', VOID, VOID, 1, 'number', 'odd', '\u5168\u54E1\u305B\u30FC\u306E\u3067\u3001\u6307\u30921\u301C5\u672C\u51FA\u3059\u3002\u4F55\u304C\u8D77\u304D\u308B\u304B\u306F\u3001\u51FA\u3057\u3066\u304B\u3089\u306E\u304A\u697D\u3057\u307F\u2026'), new CardDef('finger_even', '\u305B\u30FC\u306E\u3067\u3086\u3073', Fx_FINGERS_getInstance(), '\u5168\u54E1\u305B\u30FC\u306E\u3067\u3001\u6307\u30921\u301C5\u672C\u51FA\u3059\u3002\u5076\u6570\u306E\u672C\u6570\u3092\u51FA\u3057\u305F\u4EBA\u306F\u8CA0\u3051\u3002', VOID, VOID, 1, 'number', 'even', '\u5168\u54E1\u305B\u30FC\u306E\u3067\u3001\u6307\u30921\u301C5\u672C\u51FA\u3059\u3002\u4F55\u304C\u8D77\u304D\u308B\u304B\u306F\u3001\u51FA\u3057\u3066\u304B\u3089\u306E\u304A\u697D\u3057\u307F\u2026'), new CardDef('finger_dup', '\u305B\u30FC\u306E\u3067\u3086\u3073', Fx_FINGERS_getInstance(), '\u5168\u54E1\u305B\u30FC\u306E\u3067\u3001\u6307\u30921\u301C5\u672C\u51FA\u3059\u3002\u307B\u304B\u306E\u4EBA\u3068\u540C\u3058\u672C\u6570\u3060\u3063\u305F\u4EBA\u306F\u8CA0\u3051\u3002', VOID, VOID, 1, 'number', 'dup', '\u5168\u54E1\u305B\u30FC\u306E\u3067\u3001\u6307\u30921\u301C5\u672C\u51FA\u3059\u3002\u4F55\u304C\u8D77\u304D\u308B\u304B\u306F\u3001\u51FA\u3057\u3066\u304B\u3089\u306E\u304A\u697D\u3057\u307F\u2026'), new CardDef('rps_g', '\u5168\u54E1\u3058\u3083\u3093\u3051\u3093', Fx_RPS_ALL_getInstance(), '\u5168\u54E1\u3067\u3044\u3063\u305B\u3044\u306B\u3058\u3083\u3093\u3051\u3093\u3002\u30B0\u30FC\u3092\u51FA\u3057\u305F\u4EBA\u306F\u8CA0\u3051\u3002', VOID, VOID, 1, 'rps', 'g', '\u5168\u54E1\u3067\u3044\u3063\u305B\u3044\u306B\u3058\u3083\u3093\u3051\u3093\uFF01 \u4F55\u304C\u8D77\u304D\u308B\u304B\u306F\u3001\u51FA\u3057\u3066\u304B\u3089\u306E\u304A\u697D\u3057\u307F\u2026'), new CardDef('rps_c', '\u5168\u54E1\u3058\u3083\u3093\u3051\u3093', Fx_RPS_ALL_getInstance(), '\u5168\u54E1\u3067\u3044\u3063\u305B\u3044\u306B\u3058\u3083\u3093\u3051\u3093\u3002\u30C1\u30E7\u30AD\u3092\u51FA\u3057\u305F\u4EBA\u306F\u8CA0\u3051\u3002', VOID, VOID, 1, 'rps', 'c', '\u5168\u54E1\u3067\u3044\u3063\u305B\u3044\u306B\u3058\u3083\u3093\u3051\u3093\uFF01 \u4F55\u304C\u8D77\u304D\u308B\u304B\u306F\u3001\u51FA\u3057\u3066\u304B\u3089\u306E\u304A\u697D\u3057\u307F\u2026'), new CardDef('rps_p', '\u5168\u54E1\u3058\u3083\u3093\u3051\u3093', Fx_RPS_ALL_getInstance(), '\u5168\u54E1\u3067\u3044\u3063\u305B\u3044\u306B\u3058\u3083\u3093\u3051\u3093\u3002\u30D1\u30FC\u3092\u51FA\u3057\u305F\u4EBA\u306F\u8CA0\u3051\u3002', VOID, VOID, 1, 'rps', 'p', '\u5168\u54E1\u3067\u3044\u3063\u305B\u3044\u306B\u3058\u3083\u3093\u3051\u3093\uFF01 \u4F55\u304C\u8D77\u304D\u308B\u304B\u306F\u3001\u51FA\u3057\u3066\u304B\u3089\u306E\u304A\u697D\u3057\u307F\u2026'), new CardDef('rps_diff', '\u5168\u54E1\u3058\u3083\u3093\u3051\u3093', Fx_RPS_ALL_getInstance(), '\u5168\u54E1\u3067\u3044\u3063\u305B\u3044\u306B\u3058\u3083\u3093\u3051\u3093\u3002\u3042\u306A\u305F\u3068\u9055\u3046\u624B\u3092\u51FA\u3057\u305F\u4EBA\u306F\u8CA0\u3051\u3002', VOID, VOID, 1, 'rps', 'diff', '\u5168\u54E1\u3067\u3044\u3063\u305B\u3044\u306B\u3058\u3083\u3093\u3051\u3093\uFF01 \u4F55\u304C\u8D77\u304D\u308B\u304B\u306F\u3001\u51FA\u3057\u3066\u304B\u3089\u306E\u304A\u697D\u3057\u307F\u2026'), new CardDef('password', '\u5408\u8A00\u8449', Fx_RULE_SOCIAL_getInstance(), '\u30EB\u30FC\u30EB\u3068\u3057\u3066\u6B8B\u308B\u3002\u30AB\u30FC\u30C9\u3092\u51FA\u3059\u524D\u306B\u300C\u30A2\u30EA\u30FC\u30CA\u6700\u9AD8\uFF01\u300D\u3068\u8A00\u308F\u306A\u304B\u3063\u305F\u4EBA\u306F\u8CA0\u3051\u3002', VOID, VOID, 2, 'megaphone'), new CardDef('silence', '\u4E00\u4EBA\u79F0\u7981\u6B62', Fx_RULE_SOCIAL_getInstance(), '\u30EB\u30FC\u30EB\u3068\u3057\u3066\u6B8B\u308B\u3002\u300C\u308F\u305F\u3057\u300D\u300C\u307C\u304F\u300D\u300C\u304A\u308C\u300D\u306A\u3069\u3001\u81EA\u5206\u306E\u3053\u3068\u3092\u6307\u3059\u8A00\u8449\u3092\u8A00\u3063\u305F\u4EBA\u306F\u8CA0\u3051\u3002', VOID, VOID, 2), new CardDef('doom', '\u9053\u9023\u308C', Fx_SPITE_getInstance(), '\u624B\u672D\u306B\u6301\u3063\u3066\u304A\u304F\u3002\u3060\u308C\u304B\u304C\u52DD\u3063\u305F\u3068\u304D\u81EA\u52D5\u3067\u767A\u52D5\u3057\u3001\u305D\u306E\u4EBA\u3068\u3042\u306A\u305F\u304C\u8CA0\u3051\u306B\u306A\u308B\u3002\u51FA\u3057\u3066\u3082\u4F55\u3082\u8D77\u304D\u306A\u3044\u3002', VOID, VOID, 2), new CardDef('laugh', '\u9AD8\u7B11\u3044', Fx_LAUGH_getInstance(), '\u81EA\u5206\u306E\u524D\u306B\u7F6E\u304F\u3002\u307B\u304B\u306E\u4EBA\u304C\u8CA0\u3051\u308B\u305F\u3073\u306B\u3001\u3042\u306A\u305F\u306F1\u679A\u5F15\u304F\u3002', VOID, VOID, 2), new CardDef('present', '\u30D7\u30EC\u30BC\u30F3\u30C8', Fx_PRESENT_getInstance(), '\u307B\u304B\u306E\u5168\u54E1\u306B\u805E\u304F\u3002\u300C\u30D7\u30EC\u30BC\u30F3\u30C8\u3001\u307B\u3057\u3044\uFF1F \u3044\u3089\u306A\u3044\uFF1F\u300D\u2026\u2026\u300C\u3044\u3089\u306A\u3044\u300D\u3092\u9078\u3093\u3060\u4EBA\u306F\u8CA0\u3051\u3002', VOID, VOID, 2, 'lottery', VOID, '\u307B\u304B\u306E\u5168\u54E1\u306B\u805E\u304D\u307E\u3059\u3002\u300C\u30D7\u30EC\u30BC\u30F3\u30C8\u3001\u307B\u3057\u3044\uFF1F \u3044\u3089\u306A\u3044\uFF1F\u300D'), new CardDef('birthday', '\u8A95\u751F\u6708', Fx_BIRTHDAY_getInstance(), '\u4ECA\u6708\u304C\u3042\u306A\u305F\u306E\u8A95\u751F\u6708\u306A\u3089\u3001\u3042\u306A\u305F\u306E\u52DD\u3061\uFF01\uFF08\u6B63\u76F4\u306B\u7B54\u3048\u3088\u3046\uFF09', VOID, VOID, 2, 'champion'), new CardDef('vote', '\u591A\u6570\u6C7A', Fx_VOTE_getInstance(), '\u5168\u54E1\u3067\u6295\u7968\u3002\u3044\u3061\u3070\u3093\u7968\u3092\u96C6\u3081\u305F\u4EBA\u306F\u8CA0\u3051\uFF08\u540C\u6570\u306A\u3089\u3060\u308C\u3082\u8CA0\u3051\u306A\u3044\uFF09\u3002', VOID, VOID, 2), new CardDef('swap', '\u624B\u672D\u3053\u3046\u304B\u3093', Fx_SWAP_getInstance(), '\u6307\u540D\u3057\u305F\u4EBA\u3068\u624B\u672D\u3092\u3059\u3079\u3066\u4EA4\u63DB\u3059\u308B\u3002', TargetKind_ALIVE_OTHER_getInstance(), VOID, 2), new CardDef('charm', '\u304A\u5B88\u308A', Fx_SHIELD_getInstance(), '\u624B\u672D\u306B\u6301\u3063\u3066\u304A\u304F\u3002\u3042\u306A\u305F\u304C\u8CA0\u3051\u308B\u3068\u304D\u30011\u56DE\u3060\u3051\u8EAB\u4EE3\u308F\u308A\u306B\u306A\u308B\uFF08\u81EA\u52D5\uFF09\u3002\u51FA\u3057\u3066\u3082\u4F55\u3082\u8D77\u304D\u306A\u3044\u3002', VOID, VOID, 3), new CardDef('bomb', '\u3070\u304F\u3060\u3093', Fx_BOMB_getInstance(), '\u81EA\u5206\u306E\u524D\u306B\u7F6E\u304F\u3002\u5834\u306E\u3070\u304F\u3060\u3093\u304C4\u3064\u306B\u306A\u3063\u305F\u3089\u3001\u5168\u54E1\u307E\u3068\u3081\u3066\u8CA0\u3051\u3002', VOID, true, 4), new CardDef('vault', '\u5927\u91D1\u5EAB', Fx_POINTS_getInstance(), '\u81EA\u5206\u306E\u524D\u306B\u7F6E\u304F\u300290\u30DD\u30A4\u30F3\u30C8\u3002\u305F\u3060\u3057\u3053\u308C\u4EE5\u964D\u3001\u52DD\u3064\u306B\u306F100\u30DD\u30A4\u30F3\u30C8\u5FC5\u8981\u306B\u306A\u308B\u3002', VOID, true, 1, 'rich', '90'), new CardDef('dino', '\u6050\u7ADC', Fx_DINO_getInstance(), '\u81EA\u5206\u306E\u524D\u306B\u7F6E\u304F\u3002\u6050\u7ADC\u306F\u5927\u304D\u3044\u306E\u3067\u3001\u3082\u3046\u3060\u308C\u3082\u3042\u306A\u305F\u306E\u524D\u306B\u30AB\u30FC\u30C9\u3092\u7F6E\u3051\u306A\u3044\u3002', VOID, true, 1), new CardDef('finger_prime', '\u305B\u30FC\u306E\u3067\u3086\u3073', Fx_FINGERS_getInstance(), '\u5168\u54E1\u305B\u30FC\u306E\u3067\u3001\u6307\u30921\u301C5\u672C\u51FA\u3059\u3002\u5168\u54E1\u306E\u5408\u8A08\u304C\u7D20\u6570\u306A\u3089\u3001\u3042\u306A\u305F\u306E\u52DD\u3061\uFF01', VOID, true, 1, 'number', 'prime', '\u5168\u54E1\u305B\u30FC\u306E\u3067\u3001\u6307\u30921\u301C5\u672C\u51FA\u3059\u3002\u4F55\u304C\u8D77\u304D\u308B\u304B\u306F\u3001\u51FA\u3057\u3066\u304B\u3089\u306E\u304A\u697D\u3057\u307F\u2026'), new CardDef('cat', '\u30CD\u30B3\u306E\u6A2A\u3084\u308A', Fx_CANCEL_getInstance(), '\u624B\u672D\u306B\u6301\u3063\u3066\u304A\u3051\u3070\u3001\u3060\u308C\u304B\u304C\u30AB\u30FC\u30C9\u3092\u51FA\u3057\u305F\u76F4\u5F8C\u306B\u300C\u6A2A\u3084\u308A\uFF01\u300D\u3067\u52B9\u679C\u3092\u6253\u3061\u6D88\u305B\u308B\uFF08\u305D\u306E\u3042\u30681\u679A\u5F15\u304F\uFF09\u3002\u81EA\u5206\u306E\u624B\u756A\u306B\u51FA\u3059\u30682\u679A\u5F15\u304F\u3002', VOID, true, 2), new CardDef('zombie', '\u30BE\u30F3\u30D3\u6CE8\u610F\u5831', Fx_RULE_SOCIAL_getInstance(), '\u30EB\u30FC\u30EB\u3068\u3057\u3066\u6B8B\u308B\u3002\u81EA\u5206\u306E\u624B\u756A\u304C\u6765\u305F\u3089\u300C\u30BE\u30F3\u30D3\u3060\uFF01\u300D\u3068\u53EB\u3076\u3002\u53EB\u3070\u306A\u304B\u3063\u305F\u4EBA\u306F\u8CA0\u3051\u3002', VOID, true, 1), new CardDef('pointing', '\u6307\u3055\u3057\u7981\u6B62', Fx_RULE_SOCIAL_getInstance(), '\u30EB\u30FC\u30EB\u3068\u3057\u3066\u6B8B\u308B\u3002\u4EBA\u3084\u7269\u3092\u6307\u3055\u3057\u305F\u4EBA\u306F\u8CA0\u3051\u3002', VOID, true, 1, 'again'), new CardDef('nose', '\u9F3B\u30BF\u30C3\u30C1', Fx_NOSE_getInstance(), '\u3042\u306A\u305F\u304C\u5408\u56F3\u3057\u305F\u3089\u3001\u5168\u54E1\u3059\u3050\u306B\u62BC\u3059\u30023\u79D2\u4EE5\u5185\u306B\u62BC\u3055\u306A\u304B\u3063\u305F\u4EBA\u306F\u8CA0\u3051\u3002', VOID, true, 1, 'press', 'must', '\u51FA\u3057\u305F\u4EBA\u304C\u5408\u56F3\u3057\u305F\u3089\u3001\u5168\u54E1\u3059\u3050\u306B\u62BC\u3059\u2026\uFF1F', '\u9F3B\u30BF\u30C3\u30C1'), new CardDef('nonose', '\u9F3B\u30BF\u30C3\u30C1\u2026\uFF1F', Fx_NOSE_getInstance(), '\u3042\u306A\u305F\u304C\u5408\u56F3\u3057\u305F\u3089\u2026\u2026\u62BC\u3057\u3066\u3057\u307E\u3063\u305F\u4EBA\u306F\u8CA0\u3051\uFF01', VOID, true, 1, 'press', 'mustNot', '\u51FA\u3057\u305F\u4EBA\u304C\u5408\u56F3\u3057\u305F\u3089\u3001\u5168\u54E1\u3059\u3050\u306B\u62BC\u3059\u2026\uFF1F', '\u9F3B\u30BF\u30C3\u30C1'), new CardDef('norefill', '\u88DC\u5145\u306A\u3057', Fx_RULE_NO_DRAW_getInstance(), '\u30EB\u30FC\u30EB\u3068\u3057\u3066\u6B8B\u308B\u3002\u3082\u3046\u3060\u308C\u3082\u5C71\u672D\u304B\u3089\u5F15\u3051\u306A\u3044\u3002\u624B\u756A\u306E\u306F\u3058\u3081\u306B\u624B\u672D\u304C\u306A\u3044\u4EBA\u306F\u8CA0\u3051\u3002', VOID, true, 1, 'limit')]);
      var tmp = this;
      // Inline function 'kotlin.collections.associateBy' call
      var this_0 = this.m11_1;
      var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16);
      // Inline function 'kotlin.collections.associateByTo' call
      var destination = LinkedHashMap.u9(capacity);
      var _iterator__ex2g4s = this_0.e1();
      while (_iterator__ex2g4s.f1()) {
        var element = _iterator__ex2g4s.g1();
        var tmp$ret$0 = element.w10_1;
        destination.c4(tmp$ret$0, element);
      }
      tmp.n11_1 = destination;
    }
    o11(id) {
      return getValue(this.n11_1, id);
    }
    p11() {
      var uid = 0;
      // Inline function 'kotlin.collections.flatMap' call
      var tmp0 = this.m11_1;
      // Inline function 'kotlin.collections.flatMapTo' call
      var destination = ArrayList.o1();
      var _iterator__ex2g4s = tmp0.e1();
      while (_iterator__ex2g4s.f1()) {
        var element = _iterator__ex2g4s.g1();
        // Inline function 'kotlin.collections.map' call
        var this_0 = until(0, element.c11_1);
        // Inline function 'kotlin.collections.mapTo' call
        var destination_0 = ArrayList.d1(collectionSizeOrDefault(this_0, 10));
        var inductionVariable = this_0.rf_1;
        var last = this_0.sf_1;
        if (inductionVariable <= last)
          do {
            var item = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var i = item;
            var _unary__edvuaz = uid;
            uid = _unary__edvuaz + 1 | 0;
            var tmp$ret$0 = new ArenaCard(_unary__edvuaz, element.w10_1, get_entries_0().l1((i + element.w10_1.length | 0) % get_entries_0().j1() | 0));
            destination_0.r(tmp$ret$0);
          }
           while (!(item === last));
        var list = destination_0;
        addAll(destination, list);
      }
      return destination;
    }
  }
  class Step extends Enum {}
  class Seat {
    constructor(id) {
      this.q11_1 = id;
      this.r11_1 = true;
      var tmp = this;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp.s11_1 = ArrayList.o1();
      var tmp_0 = this;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp_0.t11_1 = ArrayList.o1();
    }
  }
  class Mini {
    constructor(kind, owner, involved, card) {
      card = card === VOID ? null : card;
      this.u11_1 = kind;
      this.v11_1 = owner;
      this.w11_1 = involved;
      this.x11_1 = card;
      var tmp = this;
      // Inline function 'kotlin.collections.linkedMapOf' call
      tmp.y11_1 = LinkedHashMap.z3();
      this.z11_1 = new Long(-1, -1);
      this.a12_1 = null;
    }
  }
  class Companion_19 {
    constructor() {
      Companion_instance_19 = this;
      this.b13_1 = new Long(3000, 0);
      this.c13_1 = new Long(2500, 0);
    }
    d13(n) {
      if (n < 2)
        return false;
      var i = 2;
      while (imul(i, i) <= n) {
        if ((n % i | 0) === 0)
          return false;
        i = i + 1 | 0;
      }
      return true;
    }
  }
  class sam$kotlin_Comparator$0_0 {
    constructor(function_0) {
      this.e13_1 = function_0;
    }
    ad(a, b) {
      return this.e13_1(a, b);
    }
    compare(a, b) {
      return this.ad(a, b);
    }
    u2() {
      return this.e13_1;
    }
    equals(other) {
      var tmp;
      if (!(other == null) ? isInterface(other, Comparator) : false) {
        var tmp_0;
        if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
          tmp_0 = equals(this.u2(), other.u2());
        } else {
          tmp_0 = false;
        }
        tmp = tmp_0;
      } else {
        tmp = false;
      }
      return tmp;
    }
    hashCode() {
      return hashCode_0(this.u2());
    }
  }
  class sam$kotlin_Comparator$0_1 {
    constructor(function_0) {
      this.f13_1 = function_0;
    }
    ad(a, b) {
      return this.f13_1(a, b);
    }
    compare(a, b) {
      return this.ad(a, b);
    }
    u2() {
      return this.f13_1;
    }
    equals(other) {
      var tmp;
      if (!(other == null) ? isInterface(other, Comparator) : false) {
        var tmp_0;
        if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
          tmp_0 = equals(this.u2(), other.u2());
        } else {
          tmp_0 = false;
        }
        tmp = tmp_0;
      } else {
        tmp = false;
      }
      return tmp;
    }
    hashCode() {
      return hashCode_0(this.u2());
    }
  }
  class ArenaGame$finishMini$$inlined$groupingBy$1 {
    constructor($this) {
      this.g13_1 = $this;
    }
    a4() {
      return this.g13_1.e1();
    }
    nh(element) {
      return element;
    }
    b4(element) {
      return this.nh((element == null ? true : !(element == null)) ? element : THROW_CCE());
    }
  }
  class ArenaGame {
    constructor(order, nameOf, rng, now, turnSec, useChaos, presetDeck, presetChaos, presetFirst) {
      Companion_getInstance_19();
      presetDeck = presetDeck === VOID ? null : presetDeck;
      presetChaos = presetChaos === VOID ? null : presetChaos;
      presetFirst = presetFirst === VOID ? null : presetFirst;
      this.b12_1 = nameOf;
      this.c12_1 = rng;
      this.d12_1 = now;
      this.e12_1 = turnSec;
      var tmp = this;
      // Inline function 'kotlin.collections.linkedMapOf' call
      // Inline function 'kotlin.apply' call
      var this_0 = LinkedHashMap.z3();
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = order.e1();
      while (_iterator__ex2g4s.f1()) {
        var element = _iterator__ex2g4s.g1();
        this_0.c4(element, new Seat(element));
      }
      tmp.f12_1 = this_0;
      this.g12_1 = ArrayDeque.rd();
      var tmp_0 = this;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp_0.h12_1 = ArrayList.o1();
      this.i12_1 = first(order);
      this.j12_1 = Step_TURN_getInstance();
      var tmp_1 = this;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp_1.k12_1 = ArrayList.o1();
      var tmp_2 = this;
      tmp_2.l12_1 = presetChaos == null ? useChaos ? get_entries_1().l1(this.c12_1.m1(get_entries_1().j1())) : null : presetChaos;
      this.m12_1 = null;
      this.n12_1 = null;
      this.o12_1 = false;
      this.p12_1 = 0;
      this.q12_1 = ArrayDeque.rd();
      var tmp_3 = this;
      // Inline function 'kotlin.collections.listOf' call
      tmp_3.r12_1 = emptyList();
      this.s12_1 = null;
      this.g12_1.q1(presetDeck == null ? shuffled(ArenaCards_getInstance().p11(), this.c12_1) : presetDeck);
      var dealt = equals(this.l12_1, Chaos_RICH_getInstance()) ? 3 : 2;
      // Inline function 'kotlin.repeat' call
      var inductionVariable = 0;
      if (inductionVariable < dealt)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlin.collections.forEach' call
          var _iterator__ex2g4s_0 = this.f12_1.i2().e1();
          while (_iterator__ex2g4s_0.f1()) {
            var element_0 = _iterator__ex2g4s_0.g1();
            drawTo$default(this, element_0);
          }
        }
         while (inductionVariable < dealt);
      var tmp1_safe_receiver = this.l12_1;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        log(this, '\u4ECA\u591C\u306E\u30EB\u30FC\u30EB\uFF1A' + tmp1_safe_receiver.t10_1 + '\uFF08' + tmp1_safe_receiver.u10_1 + '\uFF09');
      }
      beginTurn(this, presetFirst == null ? order.l1(this.c12_1.m1(order.j1())) : presetFirst);
    }
    h13() {
      return toList_0(this.q12_1);
    }
    i13() {
      return lastOrNull(this.h12_1);
    }
    j13(id) {
      var tmp0_safe_receiver = this.f12_1.g2(id);
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s11_1;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : toList_0(tmp1_safe_receiver);
      return tmp2_elvis_lhs == null ? emptyList() : tmp2_elvis_lhs;
    }
    w12() {
      var tmp0 = this.k12_1;
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.any' call
        var tmp;
        if (isInterface(tmp0, Collection)) {
          tmp = tmp0.k1();
        } else {
          tmp = false;
        }
        if (tmp) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
        var _iterator__ex2g4s = tmp0.e1();
        while (_iterator__ex2g4s.f1()) {
          var element = _iterator__ex2g4s.g1();
          if (def(this, element).y10_1.equals(Fx_RULE_NO_DRAW_getInstance())) {
            tmp$ret$0 = true;
            break $l$block_0;
          }
        }
        tmp$ret$0 = false;
      }
      return tmp$ret$0;
    }
    k13() {
      var tmp;
      var tmp0 = this.k12_1;
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.any' call
        var tmp_0;
        if (isInterface(tmp0, Collection)) {
          tmp_0 = tmp0.k1();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
        var _iterator__ex2g4s = tmp0.e1();
        while (_iterator__ex2g4s.f1()) {
          var element = _iterator__ex2g4s.g1();
          if (def(this, element).y10_1.equals(Fx_RULE_SOCIAL_getInstance())) {
            tmp$ret$0 = true;
            break $l$block_0;
          }
        }
        tmp$ret$0 = false;
      }
      if (tmp$ret$0) {
        tmp = true;
      } else {
        var tmp0_safe_receiver = this.l12_1;
        tmp = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v10_1) === true;
      }
      return tmp;
    }
    x12() {
      var tmp;
      var tmp0 = this.f12_1.i2();
      var tmp$ret$0;
      $l$block_2: {
        // Inline function 'kotlin.collections.any' call
        var tmp_0;
        if (isInterface(tmp0, Collection)) {
          tmp_0 = tmp0.k1();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = false;
          break $l$block_2;
        }
        var _iterator__ex2g4s = tmp0.e1();
        while (_iterator__ex2g4s.f1()) {
          var element = _iterator__ex2g4s.g1();
          var tmp0_0 = element.t11_1;
          var tmp$ret$1;
          $l$block_1: {
            // Inline function 'kotlin.collections.any' call
            var tmp_1;
            if (isInterface(tmp0_0, Collection)) {
              tmp_1 = tmp0_0.k1();
            } else {
              tmp_1 = false;
            }
            if (tmp_1) {
              tmp$ret$1 = false;
              break $l$block_1;
            }
            var _iterator__ex2g4s_0 = tmp0_0.e1();
            while (_iterator__ex2g4s_0.f1()) {
              var element_0 = _iterator__ex2g4s_0.g1();
              if (element_0.u12_1 === 'vault') {
                tmp$ret$1 = true;
                break $l$block_1;
              }
            }
            tmp$ret$1 = false;
          }
          if (tmp$ret$1) {
            tmp$ret$0 = true;
            break $l$block_2;
          }
        }
        tmp$ret$0 = false;
      }
      if (tmp$ret$0) {
        tmp = 100;
      } else {
        tmp = 15;
      }
      return tmp;
    }
    y12(id) {
      // Inline function 'kotlin.collections.sumOf' call
      var sum = 0;
      var _iterator__ex2g4s = seat(this, id).t11_1.e1();
      while (_iterator__ex2g4s.f1()) {
        var element = _iterator__ex2g4s.g1();
        var tmp = sum;
        var tmp0_safe_receiver = toIntOrNull(def(this, element).e11_1);
        var tmp_0;
        if (tmp0_safe_receiver == null) {
          tmp_0 = null;
        } else {
          // Inline function 'kotlin.takeIf' call
          var tmp_1;
          if (def(this, element).y10_1.equals(Fx_POINTS_getInstance())) {
            tmp_1 = tmp0_safe_receiver;
          } else {
            tmp_1 = null;
          }
          tmp_0 = tmp_1;
        }
        var tmp1_elvis_lhs = tmp_0;
        sum = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
      }
      return sum;
    }
    z12(from, d) {
      var tmp;
      switch (d.a11_1.l2_1) {
        case 0:
          tmp = emptyList();
          break;
        case 1:
          // Inline function 'kotlin.collections.filter' call

          var tmp0 = alive(this);
          // Inline function 'kotlin.collections.filterTo' call

          var destination = ArrayList.o1();
          var _iterator__ex2g4s = tmp0.e1();
          while (_iterator__ex2g4s.f1()) {
            var element = _iterator__ex2g4s.g1();
            if (!(element === from)) {
              destination.r(element);
            }
          }

          // Inline function 'kotlin.collections.filter' call

          // Inline function 'kotlin.collections.filterTo' call

          var destination_0 = ArrayList.o1();
          var _iterator__ex2g4s_0 = destination.e1();
          while (_iterator__ex2g4s_0.f1()) {
            var element_0 = _iterator__ex2g4s_0.g1();
            var tmp_0;
            if (d.h11()) {
              var tmp0_0 = seat(this, element_0).t11_1;
              var tmp$ret$3;
              $l$block_0: {
                // Inline function 'kotlin.collections.any' call
                var tmp_1;
                if (isInterface(tmp0_0, Collection)) {
                  tmp_1 = tmp0_0.k1();
                } else {
                  tmp_1 = false;
                }
                if (tmp_1) {
                  tmp$ret$3 = false;
                  break $l$block_0;
                }
                var _iterator__ex2g4s_1 = tmp0_0.e1();
                while (_iterator__ex2g4s_1.f1()) {
                  var element_1 = _iterator__ex2g4s_1.g1();
                  if (def(this, element_1).y10_1.equals(Fx_DINO_getInstance())) {
                    tmp$ret$3 = true;
                    break $l$block_0;
                  }
                }
                tmp$ret$3 = false;
              }
              tmp_0 = tmp$ret$3;
            } else {
              tmp_0 = false;
            }
            if (!tmp_0) {
              destination_0.r(element_0);
            }
          }

          tmp = destination_0;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      return tmp;
    }
    a13(from, uid, target) {
      if (!this.j12_1.equals(Step_TURN_getInstance()) || !(from === this.i12_1))
        return false;
      var s = seat(this, from);
      var tmp0 = s.s11_1;
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var _iterator__ex2g4s = tmp0.e1();
        while (_iterator__ex2g4s.f1()) {
          var element = _iterator__ex2g4s.g1();
          if (element.t12_1 === uid) {
            tmp$ret$1 = element;
            break $l$block;
          }
        }
        tmp$ret$1 = null;
      }
      var tmp0_elvis_lhs = tmp$ret$1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return false;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var card = tmp;
      var d = def(this, card);
      var targets = this.z12(from, d);
      var tmp_0;
      if (d.a11_1.equals(TargetKind_NONE_getInstance())) {
        tmp_0 = null;
      } else {
        var tmp_1;
        if (target == null) {
          tmp_1 = null;
        } else {
          // Inline function 'kotlin.takeIf' call
          var tmp_2;
          if (targets.p1(target)) {
            tmp_2 = target;
          } else {
            tmp_2 = null;
          }
          tmp_1 = tmp_2;
        }
        tmp_0 = tmp_1;
      }
      var t = tmp_0;
      var tmp_3;
      var tmp_4;
      if (!d.a11_1.equals(TargetKind_NONE_getInstance())) {
        // Inline function 'kotlin.collections.isNotEmpty' call
        tmp_4 = !targets.k1();
      } else {
        tmp_4 = false;
      }
      if (tmp_4) {
        tmp_3 = t == null;
      } else {
        tmp_3 = false;
      }
      if (tmp_3)
        return false;
      s.s11_1.f4(card);
      this.p12_1 = 0;
      var tmp_5 = n(this, from) + '\u304C\u300C' + d.x10_1 + '\u300D\u3092\u51FA\u3057\u305F';
      var tmp_6;
      if (t == null) {
        tmp_6 = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp_6 = ' \u2192 ' + n(this, t);
      }
      var tmp3_elvis_lhs = tmp_6;
      log(this, tmp_5 + (tmp3_elvis_lhs == null ? '' : tmp3_elvis_lhs));
      if (!d.y10_1.equals(Fx_CANCEL_getInstance())) {
        // Inline function 'kotlin.collections.filter' call
        var tmp0_0 = alive(this);
        // Inline function 'kotlin.collections.filterTo' call
        var destination = ArrayList.o1();
        var _iterator__ex2g4s_0 = tmp0_0.e1();
        while (_iterator__ex2g4s_0.f1()) {
          var element_0 = _iterator__ex2g4s_0.g1();
          var tmp_7;
          if (!(element_0 === from)) {
            var tmp0_1 = seat(this, element_0).s11_1;
            var tmp$ret$7;
            $l$block_1: {
              // Inline function 'kotlin.collections.any' call
              var tmp_8;
              if (isInterface(tmp0_1, Collection)) {
                tmp_8 = tmp0_1.k1();
              } else {
                tmp_8 = false;
              }
              if (tmp_8) {
                tmp$ret$7 = false;
                break $l$block_1;
              }
              var _iterator__ex2g4s_1 = tmp0_1.e1();
              while (_iterator__ex2g4s_1.f1()) {
                var element_1 = _iterator__ex2g4s_1.g1();
                if (def(this, element_1).y10_1.equals(Fx_CANCEL_getInstance())) {
                  tmp$ret$7 = true;
                  break $l$block_1;
                }
              }
              tmp$ret$7 = false;
            }
            tmp_7 = tmp$ret$7;
          } else {
            tmp_7 = false;
          }
          if (tmp_7) {
            destination.r(element_0);
          }
        }
        var holders = destination;
        // Inline function 'kotlin.collections.isNotEmpty' call
        if (!holders.k1()) {
          var m = new Mini('cancel', from, holders, card);
          m.a12_1 = new Triple(from, card, t);
          startMini(this, m, new Long(6000, 0));
          return true;
        }
      }
      resolve(this, from, card, d, t);
      return true;
    }
    l13(from, value) {
      var tmp0_elvis_lhs = this.m12_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return false;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var m = tmp;
      var tmp_0;
      if (!this.j12_1.equals(Step_MINI_getInstance()) || !m.w11_1.p1(from)) {
        tmp_0 = true;
      } else {
        // Inline function 'kotlin.collections.contains' call
        // Inline function 'kotlin.collections.containsKey' call
        var this_0 = m.y11_1;
        tmp_0 = (isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).e2(from);
      }
      if (tmp_0)
        return false;
      switch (m.u11_1) {
        case 'cancel':
          if (!setOf_0(['use', 'pass']).p1(value))
            return false;
          break;
        case 'yesno':
          if (!setOf_0(['yes', 'no']).p1(value))
            return false;
          break;
        case 'rps':
          if (!setOf_0(['g', 'c', 'p']).p1(value))
            return false;
          break;
        case 'fingers':
          var tmp0 = numberRangeToNumber(1, 5);
          // Inline function 'kotlin.ranges.contains' call

          var element = toIntOrNull(value);
          if (!(!(element == null) && tmp0.vf(element)))
            return false;
          break;
        case 'vote':
          if (!alive(this).p1(value))
            return false;
          break;
        case 'present':
          if (!setOf_0(['want', 'no']).p1(value))
            return false;
          break;
        case 'nose':
          if (from === m.v11_1) {
            if (!(value === 'go') || compare(m.z11_1, new Long(0, 0)) >= 0)
              return false;
            m.z11_1 = this.d12_1();
            // Inline function 'kotlin.collections.set' call
            m.y11_1.c4(from, 'go');
            this.s12_1 = add(add(this.d12_1(), new Long(3000, 0)), new Long(2500, 0));
            log(this, n(this, from) + '\u304C\u9F3B\u306B\u30BF\u30C3\u30C1\uFF01');
            return true;
          }

          if (compare(m.z11_1, new Long(0, 0)) < 0 || !startsWith(value, 'press'))
            return false;
          var tmp2_elvis_lhs = toLongOrNull(substringAfter(value, ':', ''));
          var ms = tmp2_elvis_lhs == null ? subtract(this.d12_1(), m.z11_1) : tmp2_elvis_lhs;
          var tmp0_0 = m.y11_1;
          // Inline function 'kotlin.collections.set' call

          var value_0 = ms.toString();
          tmp0_0.c4(from, value_0);
          if (m.y11_1.j1() >= m.w11_1.j1()) {
            finishMini(this);
          }

          return true;
      }
      // Inline function 'kotlin.collections.set' call
      m.y11_1.c4(from, value);
      if (m.u11_1 === 'cancel' && value === 'use') {
        finishMini(this);
        return true;
      }
      if (m.y11_1.j1() >= m.w11_1.j1()) {
        finishMini(this);
      }
      return true;
    }
    m13(id) {
      var tmp0_elvis_lhs = this.f12_1.g2(id);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return Unit_instance;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var s = tmp;
      if (s.r11_1) {
        out(this, id, '\u629C\u3051\u305F');
      }
      if (checkEnd(this))
        return Unit_instance;
      var m = this.m12_1;
      if (!(m == null) && this.j12_1.equals(Step_MINI_getInstance())) {
        if (m.v11_1 === id && setOf_0(['yesno', 'nose']).p1(m.u11_1) && compare(m.z11_1, new Long(0, 0)) < 0) {
          this.m12_1 = null;
          this.j12_1 = Step_TURN_getInstance();
          this.s12_1 = null;
          beginTurn(this, nextAlive(this, this.i12_1));
          return Unit_instance;
        }
        // Inline function 'kotlin.collections.filter' call
        var tmp0 = m.w11_1;
        // Inline function 'kotlin.collections.filterTo' call
        var destination = ArrayList.o1();
        var _iterator__ex2g4s = tmp0.e1();
        while (_iterator__ex2g4s.f1()) {
          var element = _iterator__ex2g4s.g1();
          if (!(element === id) && seat(this, element).r11_1) {
            destination.r(element);
          }
        }
        var left = destination;
        var tmp$ret$3;
        $l$block_0: {
          // Inline function 'kotlin.collections.all' call
          var tmp_0;
          if (isInterface(left, Collection)) {
            tmp_0 = left.k1();
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            tmp$ret$3 = true;
            break $l$block_0;
          }
          var _iterator__ex2g4s_0 = left.e1();
          while (_iterator__ex2g4s_0.f1()) {
            var element_0 = _iterator__ex2g4s_0.g1();
            // Inline function 'kotlin.collections.contains' call
            // Inline function 'kotlin.collections.containsKey' call
            var this_0 = m.y11_1;
            if (!(isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).e2(element_0)) {
              tmp$ret$3 = false;
              break $l$block_0;
            }
          }
          tmp$ret$3 = true;
        }
        if (tmp$ret$3) {
          finishMini(this);
        }
        return Unit_instance;
      }
      if (this.i12_1 === id && this.j12_1.equals(Step_TURN_getInstance())) {
        beginTurn(this, nextAlive(this, id));
      }
    }
    n13(from, target) {
      if (!this.k13() || this.j12_1.equals(Step_OVER_getInstance()))
        return false;
      var tmp0_elvis_lhs = this.f12_1.g2(target);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return false;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var t = tmp;
      var tmp_0;
      if (!t.r11_1) {
        tmp_0 = true;
      } else {
        // Inline function 'kotlin.collections.contains' call
        // Inline function 'kotlin.collections.containsKey' call
        var this_0 = this.f12_1;
        tmp_0 = !(isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).e2(from);
      }
      if (tmp_0)
        return false;
      log(this, n(this, from) + '\u304C' + n(this, target) + '\u306E\u9055\u53CD\u3092\u5831\u544A\uFF01');
      lose$default(this, target, '\u30EB\u30FC\u30EB\u9055\u53CD');
      if (checkEnd(this))
        return true;
      if (!seat(this, this.i12_1).r11_1 && this.j12_1.equals(Step_TURN_getInstance())) {
        beginTurn(this, nextAlive(this, this.i12_1));
      }
      return true;
    }
    o13() {
      var d = this.s12_1;
      if (d == null || compare(this.d12_1(), d) < 0)
        return false;
      if (this.j12_1.equals(Step_MINI_getInstance())) {
        finishMini(this);
      } else if (this.j12_1.equals(Step_TURN_getInstance())) {
        autoPlay(this);
      }
      return true;
    }
    p13() {
      // Inline function 'kotlin.collections.map' call
      var this_0 = this.f12_1.i2();
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList.d1(collectionSizeOrDefault(this_0, 10));
      var _iterator__ex2g4s = this_0.e1();
      while (_iterator__ex2g4s.f1()) {
        var item = _iterator__ex2g4s.g1();
        var tmp$ret$0 = new ArenaSeat(item.q11_1, item.r11_1, item.s11_1.j1(), toList_0(item.t11_1), this.y12(item.q11_1));
        destination.r(tmp$ret$0);
      }
      return destination;
    }
    q13(id) {
      var tmp;
      if (this.j12_1.equals(Step_OVER_getInstance())) {
        tmp = new ArenaResult(this.r12_1, this.p13(), this.h13(), this.l12_1);
      } else {
        var m = this.m12_1;
        var tmp_0;
        var tmp_1;
        if (!(m == null) && !(m.u11_1 === 'cancel')) {
          var tmp0_safe_receiver = m.x11_1;
          var tmp_2;
          if (tmp0_safe_receiver == null) {
            tmp_2 = null;
          } else {
            // Inline function 'kotlin.let' call
            tmp_2 = def(this, tmp0_safe_receiver).f11_1;
          }
          tmp_1 = !(tmp_2 == null);
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp_0 = !(id === m.v11_1);
        } else {
          tmp_0 = false;
        }
        var hidden = tmp_0;
        var pendingHidden = !(m == null) && m.u11_1 === 'cancel' && !(def(this, ensureNotNull(m.a12_1).pg_1).f11_1 == null) && !(id === m.v11_1);
        var tmp_3 = this.p13();
        var tmp_4 = this.i12_1;
        var tmp_5 = this.g12_1.od_1;
        var tmp_6;
        if ((m == null ? null : m.u11_1) === 'cancel') {
          tmp_6 = ensureNotNull(m.a12_1).pg_1;
        } else {
          tmp_6 = this.i13();
        }
        var tmp_7 = tmp_6;
        var tmp_8 = hidden || pendingHidden;
        var tmp_9 = toList_0(this.k12_1);
        var tmp_10 = this.j13(id);
        var tmp_11;
        if (m == null) {
          tmp_11 = null;
        } else {
          // Inline function 'kotlin.let' call
          var tmp_12 = toList_0(m.y11_1.h2());
          var tmp_13 = m.y11_1.g2(id);
          var tmp0_safe_receiver_0 = m.u11_1 === 'cancel' ? ensureNotNull(m.a12_1).pg_1 : m.x11_1;
          tmp_11 = new ArenaMini(m.u11_1, m.v11_1, m.w11_1, tmp_12, tmp_13, tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.u12_1, m.u11_1 === 'nose' ? compare(m.z11_1, new Long(0, 0)) < 0 ? null : new Long(0, 0) : null);
        }
        tmp = new Arena(tmp_3, tmp_4, tmp_5, tmp_7, tmp_8, tmp_9, this.l12_1, tmp_10, tmp_11, this.h13(), this.x12(), this.n12_1, this.w12());
      }
      return tmp;
    }
  }
  class Ok {
    constructor(player) {
      this.r13_1 = player;
    }
    toString() {
      return 'Ok(player=' + this.r13_1.toString() + ')';
    }
    hashCode() {
      return this.r13_1.hashCode();
    }
    equals(other) {
      if (this === other)
        return true;
      if (!(other instanceof Ok))
        return false;
      if (!this.r13_1.equals(other.r13_1))
        return false;
      return true;
    }
  }
  class Full {
    toString() {
      return 'Full';
    }
    hashCode() {
      return -711037992;
    }
    equals(other) {
      if (this === other)
        return true;
      if (!(other instanceof Full))
        return false;
      return true;
    }
  }
  class InGame {
    toString() {
      return 'InGame';
    }
    hashCode() {
      return -329396800;
    }
    equals(other) {
      if (this === other)
        return true;
      if (!(other instanceof InGame))
        return false;
      return true;
    }
  }
  class Phase extends Enum {}
  class AfterAd extends Enum {}
  class Companion_20 {
    p16(s) {
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.text.filterNot' call
      var tmp0 = normalizeNfkc(s).toLowerCase();
      // Inline function 'kotlin.text.filterNotTo' call
      var destination = StringBuilder.b1();
      var inductionVariable = 0;
      while (inductionVariable < charSequenceLength(tmp0)) {
        var element = charSequenceGet(tmp0, inductionVariable);
        inductionVariable = inductionVariable + 1 | 0;
        if (!isWhitespace(element)) {
          destination.q9(element);
        }
      }
      var n = destination.toString();
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder.b1();
      var inductionVariable_0 = 0;
      var last = n.length;
      while (inductionVariable_0 < last) {
        var c = charCodeAt(n, inductionVariable_0);
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        this_0.q9((_Char___init__impl__6a9atx(12449) <= c ? c <= _Char___init__impl__6a9atx(12534) : false) ? Char__minus_impl_a2frrh_0(c, 96) : c);
      }
      var tmp$ret$7 = this_0.toString();
      return trimEnd(tmp$ret$7, charArrayOf([_Char___init__impl__6a9atx(12290), _Char___init__impl__6a9atx(33), _Char___init__impl__6a9atx(65281), _Char___init__impl__6a9atx(63), _Char___init__impl__6a9atx(65311), _Char___init__impl__6a9atx(12316), _Char___init__impl__6a9atx(126)]));
    }
  }
  class sam$kotlin_Comparator$0_2 {
    constructor(function_0) {
      this.v16_1 = function_0;
    }
    ad(a, b) {
      return this.v16_1(a, b);
    }
    compare(a, b) {
      return this.ad(a, b);
    }
    u2() {
      return this.v16_1;
    }
    equals(other) {
      var tmp;
      if (!(other == null) ? isInterface(other, Comparator) : false) {
        var tmp_0;
        if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
          tmp_0 = equals(this.u2(), other.u2());
        } else {
          tmp_0 = false;
        }
        tmp = tmp_0;
      } else {
        tmp = false;
      }
      return tmp;
    }
    hashCode() {
      return hashCode_0(this.u2());
    }
  }
  class sam$kotlin_Comparator$0_3 {
    constructor(function_0) {
      this.w16_1 = function_0;
    }
    ad(a, b) {
      return this.w16_1(a, b);
    }
    compare(a, b) {
      return this.ad(a, b);
    }
    u2() {
      return this.w16_1;
    }
    equals(other) {
      var tmp;
      if (!(other == null) ? isInterface(other, Comparator) : false) {
        var tmp_0;
        if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
          tmp_0 = equals(this.u2(), other.u2());
        } else {
          tmp_0 = false;
        }
        tmp = tmp_0;
      } else {
        tmp = false;
      }
      return tmp;
    }
    hashCode() {
      return hashCode_0(this.u2());
    }
  }
  class sam$kotlin_Comparator$0_4 {
    constructor(function_0) {
      this.x16_1 = function_0;
    }
    ad(a, b) {
      return this.x16_1(a, b);
    }
    compare(a, b) {
      return this.ad(a, b);
    }
    u2() {
      return this.x16_1;
    }
    equals(other) {
      var tmp;
      if (!(other == null) ? isInterface(other, Comparator) : false) {
        var tmp_0;
        if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
          tmp_0 = equals(this.u2(), other.u2());
        } else {
          tmp_0 = false;
        }
        tmp = tmp_0;
      } else {
        tmp = false;
      }
      return tmp;
    }
    hashCode() {
      return hashCode_0(this.u2());
    }
  }
  class sam$kotlin_Comparator$0_5 {
    constructor(function_0) {
      this.y16_1 = function_0;
    }
    ad(a, b) {
      return this.y16_1(a, b);
    }
    compare(a, b) {
      return this.ad(a, b);
    }
    u2() {
      return this.y16_1;
    }
    equals(other) {
      var tmp;
      if (!(other == null) ? isInterface(other, Comparator) : false) {
        var tmp_0;
        if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
          tmp_0 = equals(this.u2(), other.u2());
        } else {
          tmp_0 = false;
        }
        tmp = tmp_0;
      } else {
        tmp = false;
      }
      return tmp;
    }
    hashCode() {
      return hashCode_0(this.u2());
    }
  }
  class Engine {
    constructor(roomCode, localMode, topics, rng, now) {
      rng = rng === VOID ? Default_getInstance() : rng;
      this.s13_1 = roomCode;
      this.t13_1 = localMode;
      this.u13_1 = topics;
      this.v13_1 = rng;
      this.w13_1 = now;
      var tmp = this;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp.x13_1 = ArrayList.o1();
      this.y13_1 = new Settings();
      this.z13_1 = 0;
      this.a14_1 = Phase_LOBBY_getInstance();
      this.b14_1 = null;
      this.c14_1 = GameType_WORD_WOLF_getInstance();
      var tmp_0 = this;
      // Inline function 'kotlin.collections.linkedMapOf' call
      tmp_0.d14_1 = LinkedHashMap.z3();
      this.e14_1 = '';
      this.f14_1 = '';
      var tmp_1 = this;
      // Inline function 'kotlin.collections.setOf' call
      tmp_1.g14_1 = emptySet();
      var tmp_2 = this;
      // Inline function 'kotlin.collections.linkedSetOf' call
      tmp_2.h14_1 = LinkedHashSet.n1();
      var tmp_3 = this;
      // Inline function 'kotlin.collections.linkedMapOf' call
      tmp_3.i14_1 = LinkedHashMap.z3();
      var tmp_4 = this;
      // Inline function 'kotlin.collections.listOf' call
      tmp_4.j14_1 = emptyList();
      this.k14_1 = false;
      this.l14_1 = null;
      this.m14_1 = null;
      var tmp_5 = this;
      // Inline function 'kotlin.collections.listOf' call
      tmp_5.n14_1 = emptyList();
      var tmp_6 = this;
      // Inline function 'kotlin.collections.listOf' call
      tmp_6.o14_1 = emptyList();
      var tmp_7 = this;
      // Inline function 'kotlin.collections.linkedMapOf' call
      tmp_7.p14_1 = LinkedHashMap.z3();
      var tmp_8 = this;
      // Inline function 'kotlin.collections.linkedMapOf' call
      tmp_8.q14_1 = LinkedHashMap.z3();
      var tmp_9 = this;
      // Inline function 'kotlin.collections.listOf' call
      tmp_9.r14_1 = emptyList();
      this.s14_1 = '';
      var tmp_10 = this;
      // Inline function 'kotlin.collections.linkedMapOf' call
      tmp_10.t14_1 = LinkedHashMap.z3();
      this.u14_1 = null;
      this.v14_1 = -1;
      this.w14_1 = '';
      this.x14_1 = '';
      this.y14_1 = null;
      this.z14_1 = '';
      var tmp_11 = this;
      // Inline function 'kotlin.collections.linkedMapOf' call
      tmp_11.a15_1 = LinkedHashMap.z3();
      this.b15_1 = null;
      this.c15_1 = this.w13_1();
      this.d15_1 = 0;
      this.e15_1 = 0;
      var tmp_12 = this;
      // Inline function 'kotlin.collections.mutableSetOf' call
      tmp_12.f15_1 = LinkedHashSet.n1();
      this.g15_1 = AfterAd_LOBBY_getInstance();
    }
    u16() {
      var tmp0 = this.x13_1;
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var _iterator__ex2g4s = tmp0.e1();
        while (_iterator__ex2g4s.f1()) {
          var element = _iterator__ex2g4s.g1();
          if (element.j15_1) {
            tmp$ret$1 = element;
            break $l$block;
          }
        }
        tmp$ret$1 = null;
      }
      var tmp0_safe_receiver = tmp$ret$1;
      return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.h15_1;
    }
    z16() {
      return this.t13_1 ? 12 : 8;
    }
    a17() {
      return this.a14_1.equals(Phase_LOBBY_getInstance());
    }
    b17(id, rawName, isHost) {
      if (!this.a14_1.equals(Phase_LOBBY_getInstance()))
        return InGame_instance;
      if (this.x13_1.j1() >= this.z16())
        return Full_instance;
      removeAll(this.x13_1, Engine$join$lambda(id));
      var p = new PlayerInfo(id, uniqueName(this, rawName), isHost);
      if (isHost) {
        this.x13_1.w4(0, p);
      } else
        this.x13_1.r(p);
      changed(this);
      return new Ok(p);
    }
    c17(id) {
      var tmp0 = this.x13_1;
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.none' call
        var tmp;
        if (isInterface(tmp0, Collection)) {
          tmp = tmp0.k1();
        } else {
          tmp = false;
        }
        if (tmp) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
        var _iterator__ex2g4s = tmp0.e1();
        while (_iterator__ex2g4s.f1()) {
          var element = _iterator__ex2g4s.g1();
          if (element.h15_1 === id) {
            tmp$ret$0 = false;
            break $l$block_0;
          }
        }
        tmp$ret$0 = true;
      }
      if (tmp$ret$0)
        return Unit_instance;
      removeAll(this.x13_1, Engine$leave$lambda(id));
      this.h14_1.f4(id);
      this.i14_1.p5(id);
      this.f15_1.f4(id);
      this.t14_1.p5(id);
      this.a15_1.p5(id);
      this.d14_1.p5(id);
      var tmp_0 = this.i14_1.j2();
      removeAll_0(tmp_0, Engine$leave$lambda_0(id));
      var tmp_1 = this.a15_1.j2();
      removeAll_0(tmp_1, Engine$leave$lambda_1(id));
      changed(this);
      switch (this.a14_1.l2_1) {
        case 0:
        case 5:
        case 7:
        case 9:
        case 11:
        case 13:
        case 15:
          break;
        case 14:
          var tmp1_safe_receiver = this.b15_1;
          if (tmp1_safe_receiver == null)
            null;
          else {
            tmp1_safe_receiver.m13(id);
          }

          syncArena(this);
          break;
        case 16:
          if (this.f15_1.k1()) {
            finishAdBreak(this);
          }

          break;
        case 6:
          this.p14_1.p5(id);
          this.q14_1.p5(id);
          if (this.x13_1.j1() < 2 || alive_0(this).j1() <= 1) {
            finishNg(this);
          }

          break;
        case 8:
          if (this.x13_1.j1() < 2) {
            toLobby(this);
          } else if (this.t14_1.j1() >= this.x13_1.j1()) {
            revealSync(this);
          }

          break;
        case 10:
          if (id === this.w14_1 || this.x13_1.j1() < 2) {
            toLobby(this);
          }

          break;
        case 12:
          if (this.x13_1.j1() < 2) {
            toLobby(this);
          } else if (this.a15_1.j1() >= this.x13_1.j1()) {
            revealQ(this);
          }

          break;
        case 1:
        case 2:
        case 3:
        case 4:
          this.g14_1 = minus_1(this.g14_1, id);
          if (this.x13_1.j1() < 3 || this.g14_1.k1()) {
            toLobby(this);
            return Unit_instance;
          }

          this.j14_1 = minus_0(this.j14_1, id);
          switch (this.a14_1.l2_1) {
            case 1:
              if (this.h14_1.b2(ids(this))) {
                startTalk(this);
              }

              break;
            case 3:
              if (this.j14_1.k1()) {
                toLobby(this);
              } else if (this.i14_1.j1() >= this.x13_1.j1()) {
                resolveVotes(this);
              }

              break;
            default:
              break;
          }

          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
    }
    d17(from, intent) {
      var tmp0 = this.x13_1;
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.none' call
        var tmp;
        if (isInterface(tmp0, Collection)) {
          tmp = tmp0.k1();
        } else {
          tmp = false;
        }
        if (tmp) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
        var _iterator__ex2g4s = tmp0.e1();
        while (_iterator__ex2g4s.f1()) {
          var element = _iterator__ex2g4s.g1();
          if (element.h15_1 === from) {
            tmp$ret$0 = false;
            break $l$block_0;
          }
        }
        tmp$ret$0 = true;
      }
      if (tmp$ret$0)
        return false;
      var isHost = from === this.u16();
      var before = this.z13_1;
      if (intent instanceof UpdateSettings) {
        if (isHost && this.a14_1.equals(Phase_LOBBY_getInstance())) {
          var tmp_0 = this;
          // Inline function 'kotlin.let' call
          var it = intent.u17_1.v17();
          tmp_0.y13_1 = this.t13_1 && !it.k15_1.y15_1 ? it.w17(GameType_WORD_WOLF_getInstance()) : it;
          changed(this);
        }
      } else {
        if (intent instanceof Kick) {
          if (isHost && this.a14_1.equals(Phase_LOBBY_getInstance()) && !(intent.t17_1 === from)) {
            this.c17(intent.t17_1);
          }
        } else {
          if (equals(intent, Start_getInstance())) {
            if (isHost && this.a14_1.equals(Phase_LOBBY_getInstance())) {
              this.d14_1.j4();
              this.v14_1 = -1;
              startRound(this);
            }
          } else {
            if (intent instanceof ConfirmWord) {
              if (this.a14_1.equals(Phase_WW_REVEAL_getInstance())) {
                var who = this.t13_1 && isHost && !(intent.s17_1 == null) ? intent.s17_1 : from;
                if (ids(this).p1(who) && this.h14_1.r(who)) {
                  changed(this);
                  if (this.h14_1.b2(ids(this))) {
                    startTalk(this);
                  }
                }
              }
            } else {
              if (equals(intent, EndTalk_getInstance())) {
                if (isHost && this.a14_1.equals(Phase_WW_TALK_getInstance())) {
                  startVote(this);
                }
              } else {
                if (intent instanceof Vote) {
                  if (this.a14_1.equals(Phase_WW_VOTE_getInstance()) && !this.t13_1 && this.j14_1.p1(intent.r17_1) && !(intent.r17_1 === from) && !(this.i14_1.g2(from) === intent.r17_1)) {
                    var tmp0_0 = this.i14_1;
                    // Inline function 'kotlin.collections.set' call
                    var value = intent.r17_1;
                    tmp0_0.c4(from, value);
                    changed(this);
                    if (this.i14_1.j1() >= this.x13_1.j1()) {
                      resolveVotes(this);
                    }
                  }
                } else {
                  if (equals(intent, CloseVote_getInstance())) {
                    if (isHost) {
                      switch (this.a14_1.l2_1) {
                        case 3:
                          resolveVotes(this);
                          break;
                        case 8:
                          revealSync(this);
                          break;
                        case 12:
                          revealQ(this);
                          break;
                        default:
                          break;
                      }
                    }
                  } else {
                    if (intent instanceof Accuse) {
                      if (isHost && this.a14_1.equals(Phase_WW_VOTE_getInstance()) && this.t13_1 && this.j14_1.p1(intent.q17_1)) {
                        this.n14_1 = emptyList();
                        accusedIs(this, intent.q17_1);
                      }
                    } else {
                      if (intent instanceof Judge) {
                        if (isHost && this.a14_1.equals(Phase_WW_GUESS_getInstance()) && !_get_isSpy__g08dgh(this)) {
                          finishWw$default(this, intent.p17_1 ? Team_WOLF_getInstance() : Team_CITIZEN_getInstance(), intent.p17_1 ? ResultReason_WOLF_GUESSED_getInstance() : ResultReason_WOLF_CAUGHT_getInstance());
                        }
                      } else {
                        if (intent instanceof SpyGuess) {
                          if (this.a14_1.equals(Phase_WW_GUESS_getInstance()) && _get_isSpy__g08dgh(this) && (this.g14_1.p1(from) || (this.t13_1 && isHost)) && this.o14_1.p1(intent.o17_1)) {
                            var ok = intent.o17_1 === this.e14_1;
                            finishWw(this, ok ? Team_WOLF_getInstance() : Team_CITIZEN_getInstance(), ok ? ResultReason_WOLF_GUESSED_getInstance() : ResultReason_WOLF_CAUGHT_getInstance(), intent.o17_1);
                          }
                        } else {
                          if (intent instanceof ReportOut) {
                            var tmp_1;
                            var tmp_2;
                            if (this.a14_1.equals(Phase_NG_PLAY_getInstance())) {
                              var tmp0_1 = this.p14_1;
                              // Inline function 'kotlin.collections.contains' call
                              // Inline function 'kotlin.collections.containsKey' call
                              var key = intent.n17_1;
                              tmp_2 = (isInterface(tmp0_1, KtMap) ? tmp0_1 : THROW_CCE()).e2(key);
                            } else {
                              tmp_2 = false;
                            }
                            if (tmp_2) {
                              var tmp0_2 = this.q14_1;
                              // Inline function 'kotlin.collections.contains' call
                              // Inline function 'kotlin.collections.containsKey' call
                              var key_0 = intent.n17_1;
                              tmp_1 = !(isInterface(tmp0_2, KtMap) ? tmp0_2 : THROW_CCE()).e2(key_0);
                            } else {
                              tmp_1 = false;
                            }
                            if (tmp_1) {
                              var tmp0_3 = this.q14_1;
                              var tmp2 = intent.n17_1;
                              // Inline function 'kotlin.collections.set' call
                              var value_0 = this.q14_1.j1() + 1 | 0;
                              tmp0_3.c4(tmp2, value_0);
                              changed(this);
                              if (alive_0(this).j1() <= 1) {
                                finishNg(this);
                              }
                            }
                          } else {
                            if (intent instanceof UndoOut) {
                              if (isHost && this.a14_1.equals(Phase_NG_PLAY_getInstance()) && !(this.q14_1.p5(intent.m17_1) == null)) {
                                // Inline function 'kotlin.collections.forEachIndexed' call
                                var index = 0;
                                var _iterator__ex2g4s_0 = toList_0(this.q14_1.h2()).e1();
                                while (_iterator__ex2g4s_0.f1()) {
                                  var item = _iterator__ex2g4s_0.g1();
                                  var _unary__edvuaz = index;
                                  index = _unary__edvuaz + 1 | 0;
                                  var i = checkIndexOverflow(_unary__edvuaz);
                                  var tmp0_4 = this.q14_1;
                                  // Inline function 'kotlin.collections.set' call
                                  var value_1 = i + 1 | 0;
                                  tmp0_4.c4(item, value_1);
                                }
                                changed(this);
                              }
                            } else {
                              if (equals(intent, EndNg_getInstance())) {
                                if (isHost && this.a14_1.equals(Phase_NG_PLAY_getInstance())) {
                                  finishNg(this);
                                }
                              } else {
                                if (intent instanceof SyncAnswer) {
                                  if (this.a14_1.equals(Phase_SYNC_ANSWER_getInstance())) {
                                    // Inline function 'kotlin.text.trim' call
                                    var this_0 = intent.l17_1;
                                    var tmp$ret$13 = toString_1(trim(isCharSequence(this_0) ? this_0 : THROW_CCE()));
                                    var text = take_0(replace(tmp$ret$13, '\n', ' '), 20);
                                    var tmp_3;
                                    // Inline function 'kotlin.text.isNotEmpty' call
                                    if (charSequenceLength(text) > 0) {
                                      tmp_3 = !(this.t14_1.g2(from) === text);
                                    } else {
                                      tmp_3 = false;
                                    }
                                    if (tmp_3) {
                                      // Inline function 'kotlin.collections.set' call
                                      this.t14_1.c4(from, text);
                                      changed(this);
                                      if (this.t14_1.j1() >= this.x13_1.j1()) {
                                        revealSync(this);
                                      }
                                    }
                                  }
                                } else {
                                  if (intent instanceof GuessSolved) {
                                    if (this.a14_1.equals(Phase_GUESS_PLAY_getInstance()) && (from === this.w14_1 || isHost) && ids(this).p1(intent.k17_1) && !(intent.k17_1 === this.w14_1)) {
                                      this.y14_1 = intent.k17_1;
                                      addScore(this, intent.k17_1, 1);
                                      addScore(this, this.w14_1, 1);
                                      finishGuess(this);
                                    }
                                  } else {
                                    if (equals(intent, GuessGiveUp_getInstance())) {
                                      if (this.a14_1.equals(Phase_GUESS_PLAY_getInstance()) && (from === this.w14_1 || isHost)) {
                                        this.y14_1 = null;
                                        finishGuess(this);
                                      }
                                    } else {
                                      if (intent instanceof QVote) {
                                        if (this.a14_1.equals(Phase_Q_VOTE_getInstance()) && !this.t13_1 && ids(this).p1(intent.j17_1) && !(this.a15_1.g2(from) === intent.j17_1)) {
                                          var tmp0_5 = this.a15_1;
                                          // Inline function 'kotlin.collections.set' call
                                          var value_2 = intent.j17_1;
                                          tmp0_5.c4(from, value_2);
                                          changed(this);
                                          if (this.a15_1.j1() >= this.x13_1.j1()) {
                                            revealQ(this);
                                          }
                                        }
                                      } else {
                                        if (intent instanceof ArenaPlay) {
                                          if (this.a14_1.equals(Phase_ARENA_getInstance()) && ensureNotNull(this.b15_1).a13(from, intent.h17_1, intent.i17_1)) {
                                            changed(this);
                                            syncArena(this);
                                          }
                                        } else {
                                          if (intent instanceof ArenaInput) {
                                            if (this.a14_1.equals(Phase_ARENA_getInstance()) && ensureNotNull(this.b15_1).l13(from, intent.g17_1)) {
                                              changed(this);
                                              syncArena(this);
                                            }
                                          } else {
                                            if (intent instanceof ArenaReport) {
                                              if (this.a14_1.equals(Phase_ARENA_getInstance()) && ensureNotNull(this.b15_1).n13(from, intent.f17_1)) {
                                                changed(this);
                                                syncArena(this);
                                              }
                                            } else {
                                              if (equals(intent, Next_getInstance())) {
                                                if (isHost && isResult(this)) {
                                                  if (adDue(this)) {
                                                    startAdBreak(this, AfterAd_NEXT_ROUND_getInstance());
                                                  } else {
                                                    startRound(this);
                                                  }
                                                }
                                              } else {
                                                if (equals(intent, BackToLobby_getInstance())) {
                                                  if (isHost && !this.a14_1.equals(Phase_LOBBY_getInstance()) && !this.a14_1.equals(Phase_AD_BREAK_getInstance())) {
                                                    if (isResult(this) && adDue(this)) {
                                                      startAdBreak(this, AfterAd_LOBBY_getInstance());
                                                    } else {
                                                      toLobby(this);
                                                    }
                                                  }
                                                } else {
                                                  if (intent instanceof AdDone) {
                                                    if (this.a14_1.equals(Phase_AD_BREAK_getInstance()) && intent.e17_1 === this.e15_1 && this.f15_1.f4(from)) {
                                                      changed(this);
                                                      if (this.f15_1.k1()) {
                                                        finishAdBreak(this);
                                                      }
                                                    }
                                                  } else {
                                                    noWhenBranchMatchedException();
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      return !(this.z13_1 === before);
    }
    o13() {
      if (this.a14_1.equals(Phase_ARENA_getInstance())) {
        if (ensureNotNull(this.b15_1).o13()) {
          changed(this);
          syncArena(this);
          return true;
        }
        return false;
      }
      var tmp0_elvis_lhs = this.b14_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return false;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var d = tmp;
      if (compare(this.w13_1(), d) < 0)
        return false;
      var before = this.z13_1;
      switch (this.a14_1.l2_1) {
        case 2:
          startVote(this);
          break;
        case 6:
          finishNg(this);
          break;
        case 8:
          revealSync(this);
          break;
        case 10:
          this.y14_1 = null;
          finishGuess(this);
          break;
        case 16:
          finishAdBreak(this);
          break;
        default:
          this.b14_1 = null;
          changed(this);
          break;
      }
      return !(this.z13_1 === before);
    }
    x17(id) {
      var tmp;
      switch (this.a14_1.l2_1) {
        case 0:
          tmp = Lobby_getInstance();
          break;
        case 1:
          var tmp_0;
          if (this.t13_1) {
            // Inline function 'kotlin.collections.map' call
            var this_0 = this.x13_1;
            // Inline function 'kotlin.collections.mapTo' call
            var destination = ArrayList.d1(collectionSizeOrDefault(this_0, 10));
            var _iterator__ex2g4s = this_0.e1();
            while (_iterator__ex2g4s.f1()) {
              var item = _iterator__ex2g4s.g1();
              var tmp$ret$0 = new RevealEntry(item.h15_1, wordOf(this, item.h15_1), _get_isSpy__g08dgh(this) && this.g14_1.p1(item.h15_1));
              destination.r(tmp$ret$0);
            }
            tmp_0 = new WwRevealLocal(destination, toList_0(this.h14_1));
          } else {
            tmp_0 = new WwReveal(wordOf(this, id), toList_0(this.h14_1), _get_isSpy__g08dgh(this) && this.g14_1.p1(id));
          }

          tmp = tmp_0;
          break;
        case 2:
          tmp = new WwTalk(this.t13_1 ? null : wordOf(this, id), !this.t13_1 && _get_isSpy__g08dgh(this) && this.g14_1.p1(id));
          break;
        case 3:
          tmp = this.t13_1 ? new WwAccuse(this.j14_1) : new WwVote(this.j14_1, this.i14_1.g2(id), toList_0(this.i14_1.h2()), this.k14_1);
          break;
        case 4:
          tmp = new WwGuess(toList_0(this.g14_1), this.g14_1.p1(id), this.o14_1);
          break;
        case 5:
          tmp = ensureNotNull(this.l14_1).h18(VOID, VOID, VOID, VOID, VOID, VOID, VOID, this.t13_1 || (_get_isSpy__g08dgh(this) && this.g14_1.p1(id)) ? null : wordOf(this, id));
          break;
        case 6:
          // Inline function 'kotlin.collections.contains' call

          // Inline function 'kotlin.collections.containsKey' call

          var this_1 = this.q14_1;
          var meOut = (isInterface(this_1, KtMap) ? this_1 : THROW_CCE()).e2(id);
          tmp = new NgPlay(ngEntries(this, meOut ? null : id), meOut);
          break;
        case 7:
          tmp = new NgResult(ngEntries(this, null), this.r14_1);
          break;
        case 8:
          tmp = new SyncAnswer_0(this.s14_1, this.t14_1.g2(id), toList_0(this.t14_1.h2()));
          break;
        case 9:
          tmp = ensureNotNull(this.u14_1).m18(VOID, VOID, VOID, scoreList(this));
          break;
        case 10:
          tmp = new GuessPlay(this.w14_1, this.t13_1 || id === this.w14_1 ? this.x14_1 : null);
          break;
        case 11:
          tmp = new GuessResult(this.x14_1, this.w14_1, this.y14_1, scoreList(this));
          break;
        case 12:
          tmp = new QVote_0(this.z14_1, this.a15_1.g2(id), toList_0(this.a15_1.h2()));
          break;
        case 13:
          var tmp_1 = this.z14_1;
          // Inline function 'kotlin.collections.map' call

          var this_2 = this.x13_1;
          // Inline function 'kotlin.collections.mapTo' call

          var destination_0 = ArrayList.d1(collectionSizeOrDefault(this_2, 10));
          var _iterator__ex2g4s_0 = this_2.e1();
          while (_iterator__ex2g4s_0.f1()) {
            var item_0 = _iterator__ex2g4s_0.g1();
            var tmp0 = this.a15_1.i2();
            var tmp$ret$5;
            $l$block: {
              // Inline function 'kotlin.collections.count' call
              var tmp_2;
              if (isInterface(tmp0, Collection)) {
                tmp_2 = tmp0.k1();
              } else {
                tmp_2 = false;
              }
              if (tmp_2) {
                tmp$ret$5 = 0;
                break $l$block;
              }
              var count = 0;
              var _iterator__ex2g4s_1 = tmp0.e1();
              while (_iterator__ex2g4s_1.f1()) {
                var element = _iterator__ex2g4s_1.g1();
                if (element === item_0.h15_1) {
                  count = count + 1 | 0;
                  checkCountOverflow(count);
                }
              }
              tmp$ret$5 = count;
            }
            var tmp$ret$7 = new VoteCount(item_0.h15_1, tmp$ret$5);
            destination_0.r(tmp$ret$7);
          }

          // Inline function 'kotlin.collections.filter' call

          // Inline function 'kotlin.collections.filterTo' call

          var destination_1 = ArrayList.o1();
          var _iterator__ex2g4s_2 = destination_0.e1();
          while (_iterator__ex2g4s_2.f1()) {
            var element_0 = _iterator__ex2g4s_2.g1();
            if (element_0.l16_1 > 0) {
              destination_1.r(element_0);
            }
          }

          // Inline function 'kotlin.collections.sortedByDescending' call

          // Inline function 'kotlin.comparisons.compareByDescending' call

          var tmp_3 = Engine$viewFor$lambda;
          var tmp$ret$13 = new sam$kotlin_Comparator$0_5(tmp_3);
          var tmp$ret$14 = sortedWith(destination_1, tmp$ret$13);
          tmp = new QReveal(tmp_1, tmp$ret$14);
          break;
        case 14:
        case 15:
          tmp = ensureNotNull(this.b15_1).q13(id);
          break;
        case 16:
          tmp = new AdBreak(this.e15_1);
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var screen = tmp;
      var tmp_4 = id === this.u16();
      var tmp_5 = toList_0(this.x13_1);
      var tmp_6 = this.y13_1.w17(this.a14_1.equals(Phase_LOBBY_getInstance()) ? this.y13_1.k15_1 : this.c14_1);
      var tmp_7;
      if (this.a14_1.equals(Phase_ARENA_getInstance())) {
        var tmp1_safe_receiver = this.b15_1;
        tmp_7 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.s12_1;
      } else {
        tmp_7 = this.b14_1;
      }
      var tmp2_safe_receiver = tmp_7;
      var tmp_8;
      if (tmp2_safe_receiver == null) {
        tmp_8 = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp_8 = coerceAtLeast_0(subtract(tmp2_safe_receiver, this.w13_1()), new Long(0, 0));
      }
      return new PlayerView(id, tmp_4, this.s13_1, this.t13_1, tmp_5, tmp_6, this.u13_1.b16_1, screen, tmp_8);
    }
  }
  class GameType extends Enum {
    constructor(name, ordinal, label, short, localOk, minPlayers) {
      super(name, ordinal);
      this.w15_1 = label;
      this.x15_1 = short;
      this.y15_1 = localOk;
      this.z15_1 = minPlayers;
    }
  }
  class NgLevel extends Enum {}
  class Team extends Enum {}
  class ResultReason extends Enum {}
  class Companion_21 {}
  class $serializer {
    constructor() {
      $serializer_instance = this;
      var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.zen.partygame.game.PlayerInfo', this, 3);
      tmp0_serialDesc.eo('id', false);
      tmp0_serialDesc.eo('name', false);
      tmp0_serialDesc.eo('isHost', true);
      this.n18_1 = tmp0_serialDesc;
    }
    o18(encoder, value) {
      var tmp0_desc = this.n18_1;
      var tmp1_output = encoder.ik(tmp0_desc);
      tmp1_output.fl(tmp0_desc, 0, value.h15_1);
      tmp1_output.fl(tmp0_desc, 1, value.i15_1);
      if (tmp1_output.ml(tmp0_desc, 2) ? true : !(value.j15_1 === false)) {
        tmp1_output.dl(tmp0_desc, 2, value.j15_1);
      }
      tmp1_output.jk(tmp0_desc);
    }
    tg(encoder, value) {
      return this.o18(encoder, value instanceof PlayerInfo ? value : THROW_CCE());
    }
    ug(decoder) {
      var tmp0_desc = this.n18_1;
      var tmp1_flag = true;
      var tmp2_index = 0;
      var tmp3_bitMask0 = 0;
      var tmp4_local0 = null;
      var tmp5_local1 = null;
      var tmp6_local2 = false;
      var tmp7_input = decoder.ik(tmp0_desc);
      if (tmp7_input.rk()) {
        tmp4_local0 = tmp7_input.mk(tmp0_desc, 0);
        tmp3_bitMask0 = tmp3_bitMask0 | 1;
        tmp5_local1 = tmp7_input.mk(tmp0_desc, 1);
        tmp3_bitMask0 = tmp3_bitMask0 | 2;
        tmp6_local2 = tmp7_input.kk(tmp0_desc, 2);
        tmp3_bitMask0 = tmp3_bitMask0 | 4;
      } else
        while (tmp1_flag) {
          tmp2_index = tmp7_input.sk(tmp0_desc);
          switch (tmp2_index) {
            case -1:
              tmp1_flag = false;
              break;
            case 0:
              tmp4_local0 = tmp7_input.mk(tmp0_desc, 0);
              tmp3_bitMask0 = tmp3_bitMask0 | 1;
              break;
            case 1:
              tmp5_local1 = tmp7_input.mk(tmp0_desc, 1);
              tmp3_bitMask0 = tmp3_bitMask0 | 2;
              break;
            case 2:
              tmp6_local2 = tmp7_input.kk(tmp0_desc, 2);
              tmp3_bitMask0 = tmp3_bitMask0 | 4;
              break;
            default:
              throw UnknownFieldException.gi(tmp2_index);
          }
        }
      tmp7_input.jk(tmp0_desc);
      return PlayerInfo.p18(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
    }
    sg() {
      return this.n18_1;
    }
    to() {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      return [StringSerializer_getInstance(), StringSerializer_getInstance(), BooleanSerializer_getInstance()];
    }
  }
  class PlayerInfo {
    constructor(id, name, isHost) {
      isHost = isHost === VOID ? false : isHost;
      this.h15_1 = id;
      this.i15_1 = name;
      this.j15_1 = isHost;
    }
    toString() {
      return 'PlayerInfo(id=' + this.h15_1 + ', name=' + this.i15_1 + ', isHost=' + this.j15_1 + ')';
    }
    hashCode() {
      var result = getStringHashCode(this.h15_1);
      result = imul(result, 31) + getStringHashCode(this.i15_1) | 0;
      result = imul(result, 31) + getBooleanHashCode(this.j15_1) | 0;
      return result;
    }
    equals(other) {
      if (this === other)
        return true;
      if (!(other instanceof PlayerInfo))
        return false;
      if (!(this.h15_1 === other.h15_1))
        return false;
      if (!(this.i15_1 === other.i15_1))
        return false;
      if (!(this.j15_1 === other.j15_1))
        return false;
      return true;
    }
    static p18(seen0, id, name, isHost, serializationConstructorMarker) {
      if (!(3 === (3 & seen0))) {
        throwMissingFieldException(seen0, 3, $serializer_getInstance().n18_1);
      }
      var $this = createThis(this);
      $this.h15_1 = id;
      $this.i15_1 = name;
      if (0 === (seen0 & 4))
        $this.j15_1 = false;
      else
        $this.j15_1 = isHost;
      return $this;
    }
  }
  class Companion_22 {
    constructor() {
      Companion_instance_22 = this;
      var tmp = this;
      var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
      var tmp_1 = lazy(tmp_0, Settings$Companion$$childSerializers$_anonymous__wc4n3t);
      var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
      var tmp_3 = lazy(tmp_2, Settings$Companion$$childSerializers$_anonymous__wc4n3t_0);
      var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.q18_1 = [tmp_1, null, null, tmp_3, null, lazy(tmp_4, Settings$Companion$$childSerializers$_anonymous__wc4n3t_1), null, null, null, null];
    }
  }
  class $serializer_0 {
    constructor() {
      $serializer_instance_0 = this;
      var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.zen.partygame.game.Settings', this, 10);
      tmp0_serialDesc.eo('game', true);
      tmp0_serialDesc.eo('talkSec', true);
      tmp0_serialDesc.eo('wolves', true);
      tmp0_serialDesc.eo('categories', true);
      tmp0_serialDesc.eo('ngSec', true);
      tmp0_serialDesc.eo('ngLevel', true);
      tmp0_serialDesc.eo('syncSec', true);
      tmp0_serialDesc.eo('guessSec', true);
      tmp0_serialDesc.eo('arenaTurnSec', true);
      tmp0_serialDesc.eo('arenaChaos', true);
      this.r18_1 = tmp0_serialDesc;
    }
    s18(encoder, value) {
      var tmp0_desc = this.r18_1;
      var tmp1_output = encoder.ik(tmp0_desc);
      var tmp2_cached = Companion_getInstance_22().q18_1;
      if (tmp1_output.ml(tmp0_desc, 0) ? true : !value.k15_1.equals(GameType_WORD_WOLF_getInstance())) {
        tmp1_output.gl(tmp0_desc, 0, tmp2_cached[0].d2(), value.k15_1);
      }
      if (tmp1_output.ml(tmp0_desc, 1) ? true : !(value.l15_1 === 180)) {
        tmp1_output.el(tmp0_desc, 1, value.l15_1);
      }
      if (tmp1_output.ml(tmp0_desc, 2) ? true : !(value.m15_1 === 0)) {
        tmp1_output.el(tmp0_desc, 2, value.m15_1);
      }
      if (tmp1_output.ml(tmp0_desc, 3) ? true : !equals(value.n15_1, emptyList())) {
        tmp1_output.gl(tmp0_desc, 3, tmp2_cached[3].d2(), value.n15_1);
      }
      if (tmp1_output.ml(tmp0_desc, 4) ? true : !(value.o15_1 === 300)) {
        tmp1_output.el(tmp0_desc, 4, value.o15_1);
      }
      if (tmp1_output.ml(tmp0_desc, 5) ? true : !value.p15_1.equals(NgLevel_NORMAL_getInstance())) {
        tmp1_output.gl(tmp0_desc, 5, tmp2_cached[5].d2(), value.p15_1);
      }
      if (tmp1_output.ml(tmp0_desc, 6) ? true : !(value.q15_1 === 60)) {
        tmp1_output.el(tmp0_desc, 6, value.q15_1);
      }
      if (tmp1_output.ml(tmp0_desc, 7) ? true : !(value.r15_1 === 180)) {
        tmp1_output.el(tmp0_desc, 7, value.r15_1);
      }
      if (tmp1_output.ml(tmp0_desc, 8) ? true : !(value.s15_1 === 60)) {
        tmp1_output.el(tmp0_desc, 8, value.s15_1);
      }
      if (tmp1_output.ml(tmp0_desc, 9) ? true : !(value.t15_1 === true)) {
        tmp1_output.dl(tmp0_desc, 9, value.t15_1);
      }
      tmp1_output.jk(tmp0_desc);
    }
    tg(encoder, value) {
      return this.s18(encoder, value instanceof Settings ? value : THROW_CCE());
    }
    ug(decoder) {
      var tmp0_desc = this.r18_1;
      var tmp1_flag = true;
      var tmp2_index = 0;
      var tmp3_bitMask0 = 0;
      var tmp4_local0 = null;
      var tmp5_local1 = 0;
      var tmp6_local2 = 0;
      var tmp7_local3 = null;
      var tmp8_local4 = 0;
      var tmp9_local5 = null;
      var tmp10_local6 = 0;
      var tmp11_local7 = 0;
      var tmp12_local8 = 0;
      var tmp13_local9 = false;
      var tmp14_input = decoder.ik(tmp0_desc);
      var tmp15_cached = Companion_getInstance_22().q18_1;
      if (tmp14_input.rk()) {
        tmp4_local0 = tmp14_input.nk(tmp0_desc, 0, tmp15_cached[0].d2(), tmp4_local0);
        tmp3_bitMask0 = tmp3_bitMask0 | 1;
        tmp5_local1 = tmp14_input.lk(tmp0_desc, 1);
        tmp3_bitMask0 = tmp3_bitMask0 | 2;
        tmp6_local2 = tmp14_input.lk(tmp0_desc, 2);
        tmp3_bitMask0 = tmp3_bitMask0 | 4;
        tmp7_local3 = tmp14_input.nk(tmp0_desc, 3, tmp15_cached[3].d2(), tmp7_local3);
        tmp3_bitMask0 = tmp3_bitMask0 | 8;
        tmp8_local4 = tmp14_input.lk(tmp0_desc, 4);
        tmp3_bitMask0 = tmp3_bitMask0 | 16;
        tmp9_local5 = tmp14_input.nk(tmp0_desc, 5, tmp15_cached[5].d2(), tmp9_local5);
        tmp3_bitMask0 = tmp3_bitMask0 | 32;
        tmp10_local6 = tmp14_input.lk(tmp0_desc, 6);
        tmp3_bitMask0 = tmp3_bitMask0 | 64;
        tmp11_local7 = tmp14_input.lk(tmp0_desc, 7);
        tmp3_bitMask0 = tmp3_bitMask0 | 128;
        tmp12_local8 = tmp14_input.lk(tmp0_desc, 8);
        tmp3_bitMask0 = tmp3_bitMask0 | 256;
        tmp13_local9 = tmp14_input.kk(tmp0_desc, 9);
        tmp3_bitMask0 = tmp3_bitMask0 | 512;
      } else
        while (tmp1_flag) {
          tmp2_index = tmp14_input.sk(tmp0_desc);
          switch (tmp2_index) {
            case -1:
              tmp1_flag = false;
              break;
            case 0:
              tmp4_local0 = tmp14_input.nk(tmp0_desc, 0, tmp15_cached[0].d2(), tmp4_local0);
              tmp3_bitMask0 = tmp3_bitMask0 | 1;
              break;
            case 1:
              tmp5_local1 = tmp14_input.lk(tmp0_desc, 1);
              tmp3_bitMask0 = tmp3_bitMask0 | 2;
              break;
            case 2:
              tmp6_local2 = tmp14_input.lk(tmp0_desc, 2);
              tmp3_bitMask0 = tmp3_bitMask0 | 4;
              break;
            case 3:
              tmp7_local3 = tmp14_input.nk(tmp0_desc, 3, tmp15_cached[3].d2(), tmp7_local3);
              tmp3_bitMask0 = tmp3_bitMask0 | 8;
              break;
            case 4:
              tmp8_local4 = tmp14_input.lk(tmp0_desc, 4);
              tmp3_bitMask0 = tmp3_bitMask0 | 16;
              break;
            case 5:
              tmp9_local5 = tmp14_input.nk(tmp0_desc, 5, tmp15_cached[5].d2(), tmp9_local5);
              tmp3_bitMask0 = tmp3_bitMask0 | 32;
              break;
            case 6:
              tmp10_local6 = tmp14_input.lk(tmp0_desc, 6);
              tmp3_bitMask0 = tmp3_bitMask0 | 64;
              break;
            case 7:
              tmp11_local7 = tmp14_input.lk(tmp0_desc, 7);
              tmp3_bitMask0 = tmp3_bitMask0 | 128;
              break;
            case 8:
              tmp12_local8 = tmp14_input.lk(tmp0_desc, 8);
              tmp3_bitMask0 = tmp3_bitMask0 | 256;
              break;
            case 9:
              tmp13_local9 = tmp14_input.kk(tmp0_desc, 9);
              tmp3_bitMask0 = tmp3_bitMask0 | 512;
              break;
            default:
              throw UnknownFieldException.gi(tmp2_index);
          }
        }
      tmp14_input.jk(tmp0_desc);
      return Settings.t18(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, null);
    }
    sg() {
      return this.r18_1;
    }
    to() {
      var tmp0_cached = Companion_getInstance_22().q18_1;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      return [tmp0_cached[0].d2(), IntSerializer_getInstance(), IntSerializer_getInstance(), tmp0_cached[3].d2(), IntSerializer_getInstance(), tmp0_cached[5].d2(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), BooleanSerializer_getInstance()];
    }
  }
  class Settings {
    constructor(game, talkSec, wolves, categories, ngSec, ngLevel, syncSec, guessSec, arenaTurnSec, arenaChaos) {
      Companion_getInstance_22();
      game = game === VOID ? GameType_WORD_WOLF_getInstance() : game;
      talkSec = talkSec === VOID ? 180 : talkSec;
      wolves = wolves === VOID ? 0 : wolves;
      categories = categories === VOID ? emptyList() : categories;
      ngSec = ngSec === VOID ? 300 : ngSec;
      ngLevel = ngLevel === VOID ? NgLevel_NORMAL_getInstance() : ngLevel;
      syncSec = syncSec === VOID ? 60 : syncSec;
      guessSec = guessSec === VOID ? 180 : guessSec;
      arenaTurnSec = arenaTurnSec === VOID ? 60 : arenaTurnSec;
      arenaChaos = arenaChaos === VOID ? true : arenaChaos;
      this.k15_1 = game;
      this.l15_1 = talkSec;
      this.m15_1 = wolves;
      this.n15_1 = categories;
      this.o15_1 = ngSec;
      this.p15_1 = ngLevel;
      this.q15_1 = syncSec;
      this.r15_1 = guessSec;
      this.s15_1 = arenaTurnSec;
      this.t15_1 = arenaChaos;
    }
    v17() {
      return this.w17(VOID, coerceIn(this.l15_1, 60, 600), coerceIn(this.m15_1, 0, 3), VOID, coerceIn(this.o15_1, 60, 900), VOID, coerceIn(this.q15_1, 0, 300), coerceIn(this.r15_1, 60, 600), coerceIn(this.s15_1, 0, 300));
    }
    u18(game, talkSec, wolves, categories, ngSec, ngLevel, syncSec, guessSec, arenaTurnSec, arenaChaos) {
      return new Settings(game, talkSec, wolves, categories, ngSec, ngLevel, syncSec, guessSec, arenaTurnSec, arenaChaos);
    }
    w17(game, talkSec, wolves, categories, ngSec, ngLevel, syncSec, guessSec, arenaTurnSec, arenaChaos, $super) {
      game = game === VOID ? this.k15_1 : game;
      talkSec = talkSec === VOID ? this.l15_1 : talkSec;
      wolves = wolves === VOID ? this.m15_1 : wolves;
      categories = categories === VOID ? this.n15_1 : categories;
      ngSec = ngSec === VOID ? this.o15_1 : ngSec;
      ngLevel = ngLevel === VOID ? this.p15_1 : ngLevel;
      syncSec = syncSec === VOID ? this.q15_1 : syncSec;
      guessSec = guessSec === VOID ? this.r15_1 : guessSec;
      arenaTurnSec = arenaTurnSec === VOID ? this.s15_1 : arenaTurnSec;
      arenaChaos = arenaChaos === VOID ? this.t15_1 : arenaChaos;
      return $super === VOID ? this.u18(game, talkSec, wolves, categories, ngSec, ngLevel, syncSec, guessSec, arenaTurnSec, arenaChaos) : $super.u18.call(this, game, talkSec, wolves, categories, ngSec, ngLevel, syncSec, guessSec, arenaTurnSec, arenaChaos);
    }
    toString() {
      return 'Settings(game=' + this.k15_1.toString() + ', talkSec=' + this.l15_1 + ', wolves=' + this.m15_1 + ', categories=' + toString_1(this.n15_1) + ', ngSec=' + this.o15_1 + ', ngLevel=' + this.p15_1.toString() + ', syncSec=' + this.q15_1 + ', guessSec=' + this.r15_1 + ', arenaTurnSec=' + this.s15_1 + ', arenaChaos=' + this.t15_1 + ')';
    }
    hashCode() {
      var result = this.k15_1.hashCode();
      result = imul(result, 31) + this.l15_1 | 0;
      result = imul(result, 31) + this.m15_1 | 0;
      result = imul(result, 31) + hashCode_0(this.n15_1) | 0;
      result = imul(result, 31) + this.o15_1 | 0;
      result = imul(result, 31) + this.p15_1.hashCode() | 0;
      result = imul(result, 31) + this.q15_1 | 0;
      result = imul(result, 31) + this.r15_1 | 0;
      result = imul(result, 31) + this.s15_1 | 0;
      result = imul(result, 31) + getBooleanHashCode(this.t15_1) | 0;
      return result;
    }
    equals(other) {
      if (this === other)
        return true;
      if (!(other instanceof Settings))
        return false;
      if (!this.k15_1.equals(other.k15_1))
        return false;
      if (!(this.l15_1 === other.l15_1))
        return false;
      if (!(this.m15_1 === other.m15_1))
        return false;
      if (!equals(this.n15_1, other.n15_1))
        return false;
      if (!(this.o15_1 === other.o15_1))
        return false;
      if (!this.p15_1.equals(other.p15_1))
        return false;
      if (!(this.q15_1 === other.q15_1))
        return false;
      if (!(this.r15_1 === other.r15_1))
        return false;
      if (!(this.s15_1 === other.s15_1))
        return false;
      if (!(this.t15_1 === other.t15_1))
        return false;
      return true;
    }
    static t18(seen0, game, talkSec, wolves, categories, ngSec, ngLevel, syncSec, guessSec, arenaTurnSec, arenaChaos, serializationConstructorMarker) {
      Companion_getInstance_22();
      if (!(0 === (0 & seen0))) {
        throwMissingFieldException(seen0, 0, $serializer_getInstance_0().r18_1);
      }
      var $this = createThis(this);
      if (0 === (seen0 & 1))
        $this.k15_1 = GameType_WORD_WOLF_getInstance();
      else
        $this.k15_1 = game;
      if (0 === (seen0 & 2))
        $this.l15_1 = 180;
      else
        $this.l15_1 = talkSec;
      if (0 === (seen0 & 4))
        $this.m15_1 = 0;
      else
        $this.m15_1 = wolves;
      if (0 === (seen0 & 8))
        $this.n15_1 = emptyList();
      else
        $this.n15_1 = categories;
      if (0 === (seen0 & 16))
        $this.o15_1 = 300;
      else
        $this.o15_1 = ngSec;
      if (0 === (seen0 & 32))
        $this.p15_1 = NgLevel_NORMAL_getInstance();
      else
        $this.p15_1 = ngLevel;
      if (0 === (seen0 & 64))
        $this.q15_1 = 60;
      else
        $this.q15_1 = syncSec;
      if (0 === (seen0 & 128))
        $this.r15_1 = 180;
      else
        $this.r15_1 = guessSec;
      if (0 === (seen0 & 256))
        $this.s15_1 = 60;
      else
        $this.s15_1 = arenaTurnSec;
      if (0 === (seen0 & 512))
        $this.t15_1 = true;
      else
        $this.t15_1 = arenaChaos;
      return $this;
    }
  }
  class Companion_23 {}
  class $serializer_1 {
    constructor() {
      $serializer_instance_1 = this;
      var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('settings', this, 1);
      tmp0_serialDesc.eo('settings', false);
      this.v18_1 = tmp0_serialDesc;
    }
    w18(encoder, value) {
      var tmp0_desc = this.v18_1;
      var tmp1_output = encoder.ik(tmp0_desc);
      tmp1_output.gl(tmp0_desc, 0, $serializer_getInstance_0(), value.u17_1);
      tmp1_output.jk(tmp0_desc);
    }
    tg(encoder, value) {
      return this.w18(encoder, value instanceof UpdateSettings ? value : THROW_CCE());
    }
    ug(decoder) {
      var tmp0_desc = this.v18_1;
      var tmp1_flag = true;
      var tmp2_index = 0;
      var tmp3_bitMask0 = 0;
      var tmp4_local0 = null;
      var tmp5_input = decoder.ik(tmp0_desc);
      if (tmp5_input.rk()) {
        tmp4_local0 = tmp5_input.nk(tmp0_desc, 0, $serializer_getInstance_0(), tmp4_local0);
        tmp3_bitMask0 = tmp3_bitMask0 | 1;
      } else
        while (tmp1_flag) {
          tmp2_index = tmp5_input.sk(tmp0_desc);
          switch (tmp2_index) {
            case -1:
              tmp1_flag = false;
              break;
            case 0:
              tmp4_local0 = tmp5_input.nk(tmp0_desc, 0, $serializer_getInstance_0(), tmp4_local0);
              tmp3_bitMask0 = tmp3_bitMask0 | 1;
              break;
            default:
              throw UnknownFieldException.gi(tmp2_index);
          }
        }
      tmp5_input.jk(tmp0_desc);
      return UpdateSettings.x18(tmp3_bitMask0, tmp4_local0, null);
    }
    sg() {
      return this.v18_1;
    }
    to() {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      return [$serializer_getInstance_0()];
    }
  }
  class Companion_24 {}
  class $serializer_2 {
    constructor() {
      $serializer_instance_2 = this;
      var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('kick', this, 1);
      tmp0_serialDesc.eo('target', false);
      this.y18_1 = tmp0_serialDesc;
    }
    z18(encoder, value) {
      var tmp0_desc = this.y18_1;
      var tmp1_output = encoder.ik(tmp0_desc);
      tmp1_output.fl(tmp0_desc, 0, value.t17_1);
      tmp1_output.jk(tmp0_desc);
    }
    tg(encoder, value) {
      return this.z18(encoder, value instanceof Kick ? value : THROW_CCE());
    }
    ug(decoder) {
      var tmp0_desc = this.y18_1;
      var tmp1_flag = true;
      var tmp2_index = 0;
      var tmp3_bitMask0 = 0;
      var tmp4_local0 = null;
      var tmp5_input = decoder.ik(tmp0_desc);
      if (tmp5_input.rk()) {
        tmp4_local0 = tmp5_input.mk(tmp0_desc, 0);
        tmp3_bitMask0 = tmp3_bitMask0 | 1;
      } else
        while (tmp1_flag) {
          tmp2_index = tmp5_input.sk(tmp0_desc);
          switch (tmp2_index) {
            case -1:
              tmp1_flag = false;
              break;
            case 0:
              tmp4_local0 = tmp5_input.mk(tmp0_desc, 0);
              tmp3_bitMask0 = tmp3_bitMask0 | 1;
              break;
            default:
              throw UnknownFieldException.gi(tmp2_index);
          }
        }
      tmp5_input.jk(tmp0_desc);
      return Kick.a19(tmp3_bitMask0, tmp4_local0, null);
    }
    sg() {
      return this.y18_1;
    }
    to() {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      return [StringSerializer_getInstance()];
    }
  }
  class Companion_25 {}
  class $serializer_3 {
    constructor() {
      $serializer_instance_3 = this;
      var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('confirm', this, 1);
      tmp0_serialDesc.eo('forPlayer', true);
      this.b19_1 = tmp0_serialDesc;
    }
    c19(encoder, value) {
      var tmp0_desc = this.b19_1;
      var tmp1_output = encoder.ik(tmp0_desc);
      if (tmp1_output.ml(tmp0_desc, 0) ? true : !(value.s17_1 == null)) {
        tmp1_output.il(tmp0_desc, 0, StringSerializer_getInstance(), value.s17_1);
      }
      tmp1_output.jk(tmp0_desc);
    }
    tg(encoder, value) {
      return this.c19(encoder, value instanceof ConfirmWord ? value : THROW_CCE());
    }
    ug(decoder) {
      var tmp0_desc = this.b19_1;
      var tmp1_flag = true;
      var tmp2_index = 0;
      var tmp3_bitMask0 = 0;
      var tmp4_local0 = null;
      var tmp5_input = decoder.ik(tmp0_desc);
      if (tmp5_input.rk()) {
        tmp4_local0 = tmp5_input.pk(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
        tmp3_bitMask0 = tmp3_bitMask0 | 1;
      } else
        while (tmp1_flag) {
          tmp2_index = tmp5_input.sk(tmp0_desc);
          switch (tmp2_index) {
            case -1:
              tmp1_flag = false;
              break;
            case 0:
              tmp4_local0 = tmp5_input.pk(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
              tmp3_bitMask0 = tmp3_bitMask0 | 1;
              break;
            default:
              throw UnknownFieldException.gi(tmp2_index);
          }
        }
      tmp5_input.jk(tmp0_desc);
      return ConfirmWord.d19(tmp3_bitMask0, tmp4_local0, null);
    }
    sg() {
      return this.b19_1;
    }
    to() {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      return [get_nullable(StringSerializer_getInstance())];
    }
  }
  class Companion_26 {}
  class $serializer_4 {
    constructor() {
      $serializer_instance_4 = this;
      var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('vote', this, 1);
      tmp0_serialDesc.eo('target', false);
      this.e19_1 = tmp0_serialDesc;
    }
    f19(encoder, value) {
      var tmp0_desc = this.e19_1;
      var tmp1_output = encoder.ik(tmp0_desc);
      tmp1_output.fl(tmp0_desc, 0, value.r17_1);
      tmp1_output.jk(tmp0_desc);
    }
    tg(encoder, value) {
      return this.f19(encoder, value instanceof Vote ? value : THROW_CCE());
    }
    ug(decoder) {
      var tmp0_desc = this.e19_1;
      var tmp1_flag = true;
      var tmp2_index = 0;
      var tmp3_bitMask0 = 0;
      var tmp4_local0 = null;
      var tmp5_input = decoder.ik(tmp0_desc);
      if (tmp5_input.rk()) {
        tmp4_local0 = tmp5_input.mk(tmp0_desc, 0);
        tmp3_bitMask0 = tmp3_bitMask0 | 1;
      } else
        while (tmp1_flag) {
          tmp2_index = tmp5_input.sk(tmp0_desc);
          switch (tmp2_index) {
            case -1:
              tmp1_flag = false;
              break;
            case 0:
              tmp4_local0 = tmp5_input.mk(tmp0_desc, 0);
              tmp3_bitMask0 = tmp3_bitMask0 | 1;
              break;
            default:
              throw UnknownFieldException.gi(tmp2_index);
          }
        }
      tmp5_input.jk(tmp0_desc);
      return Vote.g19(tmp3_bitMask0, tmp4_local0, null);
    }
    sg() {
      return this.e19_1;
    }
    to() {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      return [StringSerializer_getInstance()];
    }
  }
  class Companion_27 {}
  class $serializer_5 {
    constructor() {
      $serializer_instance_5 = this;
      var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('accuse', this, 1);
      tmp0_serialDesc.eo('target', false);
      this.h19_1 = tmp0_serialDesc;
    }
    i19(encoder, value) {
      var tmp0_desc = this.h19_1;
      var tmp1_output = encoder.ik(tmp0_desc);
      tmp1_output.fl(tmp0_desc, 0, value.q17_1);
      tmp1_output.jk(tmp0_desc);
    }
    tg(encoder, value) {
      return this.i19(encoder, value instanceof Accuse ? value : THROW_CCE());
    }
    ug(decoder) {
      var tmp0_desc = this.h19_1;
      var tmp1_flag = true;
      var tmp2_index = 0;
      var tmp3_bitMask0 = 0;
      var tmp4_local0 = null;
      var tmp5_input = decoder.ik(tmp0_desc);
      if (tmp5_input.rk()) {
        tmp4_local0 = tmp5_input.mk(tmp0_desc, 0);
        tmp3_bitMask0 = tmp3_bitMask0 | 1;
      } else
        while (tmp1_flag) {
          tmp2_index = tmp5_input.sk(tmp0_desc);
          switch (tmp2_index) {
            case -1:
              tmp1_flag = false;
              break;
            case 0:
              tmp4_local0 = tmp5_input.mk(tmp0_desc, 0);
              tmp3_bitMask0 = tmp3_bitMask0 | 1;
              break;
            default:
              throw UnknownFieldException.gi(tmp2_index);
          }
        }
      tmp5_input.jk(tmp0_desc);
      return Accuse.j19(tmp3_bitMask0, tmp4_local0, null);
    }
    sg() {
      return this.h19_1;
    }
    to() {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      return [StringSerializer_getInstance()];
    }
  }
  class Companion_28 {}
  class $serializer_6 {
    constructor() {
      $serializer_instance_6 = this;
      var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('judge', this, 1);
      tmp0_serialDesc.eo('correct', false);
      this.k19_1 = tmp0_serialDesc;
    }
    l19(encoder, value) {
      var tmp0_desc = this.k19_1;
      var tmp1_output = encoder.ik(tmp0_desc);
      tmp1_output.dl(tmp0_desc, 0, value.p17_1);
      tmp1_output.jk(tmp0_desc);
    }
    tg(encoder, value) {
      return this.l19(encoder, value instanceof Judge ? value : THROW_CCE());
    }
    ug(decoder) {
      var tmp0_desc = this.k19_1;
      var tmp1_flag = true;
      var tmp2_index = 0;
      var tmp3_bitMask0 = 0;
      var tmp4_local0 = false;
      var tmp5_input = decoder.ik(tmp0_desc);
      if (tmp5_input.rk()) {
        tmp4_local0 = tmp5_input.kk(tmp0_desc, 0);
        tmp3_bitMask0 = tmp3_bitMask0 | 1;
      } else
        while (tmp1_flag) {
          tmp2_index = tmp5_input.sk(tmp0_desc);
          switch (tmp2_index) {
            case -1:
              tmp1_flag = false;
              break;
            case 0:
              tmp4_local0 = tmp5_input.kk(tmp0_desc, 0);
              tmp3_bitMask0 = tmp3_bitMask0 | 1;
              break;
            default:
              throw UnknownFieldException.gi(tmp2_index);
          }
        }
      tmp5_input.jk(tmp0_desc);
      return Judge.m19(tmp3_bitMask0, tmp4_local0, null);
    }
    sg() {
      return this.k19_1;
    }
    to() {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      return [BooleanSerializer_getInstance()];
    }
  }
  class Companion_29 {}
  class $serializer_7 {
    constructor() {
      $serializer_instance_7 = this;
      var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('out', this, 1);
      tmp0_serialDesc.eo('target', false);
      this.n19_1 = tmp0_serialDesc;
    }
    o19(encoder, value) {
      var tmp0_desc = this.n19_1;
      var tmp1_output = encoder.ik(tmp0_desc);
      tmp1_output.fl(tmp0_desc, 0, value.n17_1);
      tmp1_output.jk(tmp0_desc);
    }
    tg(encoder, value) {
      return this.o19(encoder, value instanceof ReportOut ? value : THROW_CCE());
    }
    ug(decoder) {
      var tmp0_desc = this.n19_1;
      var tmp1_flag = true;
      var tmp2_index = 0;
      var tmp3_bitMask0 = 0;
      var tmp4_local0 = null;
      var tmp5_input = decoder.ik(tmp0_desc);
      if (tmp5_input.rk()) {
        tmp4_local0 = tmp5_input.mk(tmp0_desc, 0);
        tmp3_bitMask0 = tmp3_bitMask0 | 1;
      } else
        while (tmp1_flag) {
          tmp2_index = tmp5_input.sk(tmp0_desc);
          switch (tmp2_index) {
            case -1:
              tmp1_flag = false;
              break;
            case 0:
              tmp4_local0 = tmp5_input.mk(tmp0_desc, 0);
              tmp3_bitMask0 = tmp3_bitMask0 | 1;
              break;
            default:
              throw UnknownFieldException.gi(tmp2_index);
          }
        }
      tmp5_input.jk(tmp0_desc);
      return ReportOut.p19(tmp3_bitMask0, tmp4_local0, null);
    }
    sg() {
      return this.n19_1;
    }
    to() {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      return [StringSerializer_getInstance()];
    }
  }
  class Companion_30 {}
  class $serializer_8 {
    constructor() {
      $serializer_instance_8 = this;
      var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('undoOut', this, 1);
      tmp0_serialDesc.eo('target', false);
      this.q19_1 = tmp0_serialDesc;
    }
    r19(encoder, value) {
      var tmp0_desc = this.q19_1;
      var tmp1_output = encoder.ik(tmp0_desc);
      tmp1_output.fl(tmp0_desc, 0, value.m17_1);
      tmp1_output.jk(tmp0_desc);
    }
    tg(encoder, value) {
      return this.r19(encoder, value instanceof UndoOut ? value : THROW_CCE());
    }
    ug(decoder) {
      var tmp0_desc = this.q19_1;
      var tmp1_flag = true;
      var tmp2_index = 0;
      var tmp3_bitMask0 = 0;
      var tmp4_local0 = null;
      var tmp5_input = decoder.ik(tmp0_desc);
      if (tmp5_input.rk()) {
        tmp4_local0 = tmp5_input.mk(tmp0_desc, 0);
        tmp3_bitMask0 = tmp3_bitMask0 | 1;
      } else
        while (tmp1_flag) {
          tmp2_index = tmp5_input.sk(tmp0_desc);
          switch (tmp2_index) {
            case -1:
              tmp1_flag = false;
              break;
            case 0:
              tmp4_local0 = tmp5_input.mk(tmp0_desc, 0);
              tmp3_bitMask0 = tmp3_bitMask0 | 1;
              break;
            default:
              throw UnknownFieldException.gi(tmp2_index);
          }
        }
      tmp5_input.jk(tmp0_desc);
      return UndoOut.s19(tmp3_bitMask0, tmp4_local0, null);
    }
    sg() {
      return this.q19_1;
    }
    to() {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      return [StringSerializer_getInstance()];
    }
  }
  class Companion_31 {}
  class $serializer_9 {
    constructor() {
      $serializer_instance_9 = this;
      var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('spyGuess', this, 1);
      tmp0_serialDesc.eo('answer', false);
      this.t19_1 = tmp0_serialDesc;
    }
    u19(encoder, value) {
      var tmp0_desc = this.t19_1;
      var tmp1_output = encoder.ik(tmp0_desc);
      tmp1_output.fl(tmp0_desc, 0, value.o17_1);
      tmp1_output.jk(tmp0_desc);
    }
    tg(encoder, value) {
      return this.u19(encoder, value instanceof SpyGuess ? value : THROW_CCE());
    }
    ug(decoder) {
      var tmp0_desc = this.t19_1;
      var tmp1_flag = true;
      var tmp2_index = 0;
      var tmp3_bitMask0 = 0;
      var tmp4_local0 = null;
      var tmp5_input = decoder.ik(tmp0_desc);
      if (tmp5_input.rk()) {
        tmp4_local0 = tmp5_input.mk(tmp0_desc, 0);
        tmp3_bitMask0 = tmp3_bitMask0 | 1;
      } else
        while (tmp1_flag) {
          tmp2_index = tmp5_input.sk(tmp0_desc);
          switch (tmp2_index) {
            case -1:
              tmp1_flag = false;
              break;
            case 0:
              tmp4_local0 = tmp5_input.mk(tmp0_desc, 0);
              tmp3_bitMask0 = tmp3_bitMask0 | 1;
              break;
            default:
              throw UnknownFieldException.gi(tmp2_index);
          }
        }
      tmp5_input.jk(tmp0_desc);
      return SpyGuess.v19(tmp3_bitMask0, tmp4_local0, null);
    }
    sg() {
      return this.t19_1;
    }
    to() {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      return [StringSerializer_getInstance()];
    }
  }
  class Companion_32 {}
  class $serializer_10 {
    constructor() {
      $serializer_instance_10 = this;
      var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('syncAnswer', this, 1);
      tmp0_serialDesc.eo('text', false);
      this.w19_1 = tmp0_serialDesc;
    }
    x19(encoder, value) {
      var tmp0_desc = this.w19_1;
      var tmp1_output = encoder.ik(tmp0_desc);
      tmp1_output.fl(tmp0_desc, 0, value.l17_1);
      tmp1_output.jk(tmp0_desc);
    }
    tg(encoder, value) {
      return this.x19(encoder, value instanceof SyncAnswer ? value : THROW_CCE());
    }
    ug(decoder) {
      var tmp0_desc = this.w19_1;
      var tmp1_flag = true;
      var tmp2_index = 0;
      var tmp3_bitMask0 = 0;
      var tmp4_local0 = null;
      var tmp5_input = decoder.ik(tmp0_desc);
      if (tmp5_input.rk()) {
        tmp4_local0 = tmp5_input.mk(tmp0_desc, 0);
        tmp3_bitMask0 = tmp3_bitMask0 | 1;
      } else
        while (tmp1_flag) {
          tmp2_index = tmp5_input.sk(tmp0_desc);
          switch (tmp2_index) {
            case -1:
              tmp1_flag = false;
              break;
            case 0:
              tmp4_local0 = tmp5_input.mk(tmp0_desc, 0);
              tmp3_bitMask0 = tmp3_bitMask0 | 1;
              break;
            default:
              throw UnknownFieldException.gi(tmp2_index);
          }
        }
      tmp5_input.jk(tmp0_desc);
      return SyncAnswer.y19(tmp3_bitMask0, tmp4_local0, null);
    }
    sg() {
      return this.w19_1;
    }
    to() {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      return [StringSerializer_getInstance()];
    }
  }
  class Companion_33 {}
  class $serializer_11 {
    constructor() {
      $serializer_instance_11 = this;
      var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('guessSolved', this, 1);
      tmp0_serialDesc.eo('guesser', false);
      this.z19_1 = tmp0_serialDesc;
    }
    a1a(encoder, value) {
      var tmp0_desc = this.z19_1;
      var tmp1_output = encoder.ik(tmp0_desc);
      tmp1_output.fl(tmp0_desc, 0, value.k17_1);
      tmp1_output.jk(tmp0_desc);
    }
    tg(encoder, value) {
      return this.a1a(encoder, value instanceof GuessSolved ? value : THROW_CCE());
    }
    ug(decoder) {
      var tmp0_desc = this.z19_1;
      var tmp1_flag = true;
      var tmp2_index = 0;
      var tmp3_bitMask0 = 0;
      var tmp4_local0 = null;
      var tmp5_input = decoder.ik(tmp0_desc);
      if (tmp5_input.rk()) {
        tmp4_local0 = tmp5_input.mk(tmp0_desc, 0);
        tmp3_bitMask0 = tmp3_bitMask0 | 1;
      } else
        while (tmp1_flag) {
          tmp2_index = tmp5_input.sk(tmp0_desc);
          switch (tmp2_index) {
            case -1:
              tmp1_flag = false;
              break;
            case 0:
              tmp4_local0 = tmp5_input.mk(tmp0_desc, 0);
              tmp3_bitMask0 = tmp3_bitMask0 | 1;
              break;
            default:
              throw UnknownFieldException.gi(tmp2_index);
          }
        }
      tmp5_input.jk(tmp0_desc);
      return GuessSolved.b1a(tmp3_bitMask0, tmp4_local0, null);
    }
    sg() {
      return this.z19_1;
    }
    to() {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      return [StringSerializer_getInstance()];
    }
  }
  class Companion_34 {}
  class $serializer_12 {
    constructor() {
      $serializer_instance_12 = this;
      var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('qVote', this, 1);
      tmp0_serialDesc.eo('target', false);
      this.c1a_1 = tmp0_serialDesc;
    }
    d1a(encoder, value) {
      var tmp0_desc = this.c1a_1;
      var tmp1_output = encoder.ik(tmp0_desc);
      tmp1_output.fl(tmp0_desc, 0, value.j17_1);
      tmp1_output.jk(tmp0_desc);
    }
    tg(encoder, value) {
      return this.d1a(encoder, value instanceof QVote ? value : THROW_CCE());
    }
    ug(decoder) {
      var tmp0_desc = this.c1a_1;
      var tmp1_flag = true;
      var tmp2_index = 0;
      var tmp3_bitMask0 = 0;
      var tmp4_local0 = null;
      var tmp5_input = decoder.ik(tmp0_desc);
      if (tmp5_input.rk()) {
        tmp4_local0 = tmp5_input.mk(tmp0_desc, 0);
        tmp3_bitMask0 = tmp3_bitMask0 | 1;
      } else
        while (tmp1_flag) {
          tmp2_index = tmp5_input.sk(tmp0_desc);
          switch (tmp2_index) {
            case -1:
              tmp1_flag = false;
              break;
            case 0:
              tmp4_local0 = tmp5_input.mk(tmp0_desc, 0);
              tmp3_bitMask0 = tmp3_bitMask0 | 1;
              break;
            default:
              throw UnknownFieldException.gi(tmp2_index);
          }
        }
      tmp5_input.jk(tmp0_desc);
      return QVote.e1a(tmp3_bitMask0, tmp4_local0, null);
    }
    sg() {
      return this.c1a_1;
    }
    to() {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      return [StringSerializer_getInstance()];
    }
  }
  class Companion_35 {}
  class $serializer_13 {
    constructor() {
      $serializer_instance_13 = this;
      var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('arenaPlay', this, 2);
      tmp0_serialDesc.eo('uid', false);
      tmp0_serialDesc.eo('target', true);
      this.f1a_1 = tmp0_serialDesc;
    }
    g1a(encoder, value) {
      var tmp0_desc = this.f1a_1;
      var tmp1_output = encoder.ik(tmp0_desc);
      tmp1_output.el(tmp0_desc, 0, value.h17_1);
      if (tmp1_output.ml(tmp0_desc, 1) ? true : !(value.i17_1 == null)) {
        tmp1_output.il(tmp0_desc, 1, StringSerializer_getInstance(), value.i17_1);
      }
      tmp1_output.jk(tmp0_desc);
    }
    tg(encoder, value) {
      return this.g1a(encoder, value instanceof ArenaPlay ? value : THROW_CCE());
    }
    ug(decoder) {
      var tmp0_desc = this.f1a_1;
      var tmp1_flag = true;
      var tmp2_index = 0;
      var tmp3_bitMask0 = 0;
      var tmp4_local0 = 0;
      var tmp5_local1 = null;
      var tmp6_input = decoder.ik(tmp0_desc);
      if (tmp6_input.rk()) {
        tmp4_local0 = tmp6_input.lk(tmp0_desc, 0);
        tmp3_bitMask0 = tmp3_bitMask0 | 1;
        tmp5_local1 = tmp6_input.pk(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
        tmp3_bitMask0 = tmp3_bitMask0 | 2;
      } else
        while (tmp1_flag) {
          tmp2_index = tmp6_input.sk(tmp0_desc);
          switch (tmp2_index) {
            case -1:
              tmp1_flag = false;
              break;
            case 0:
              tmp4_local0 = tmp6_input.lk(tmp0_desc, 0);
              tmp3_bitMask0 = tmp3_bitMask0 | 1;
              break;
            case 1:
              tmp5_local1 = tmp6_input.pk(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
              tmp3_bitMask0 = tmp3_bitMask0 | 2;
              break;
            default:
              throw UnknownFieldException.gi(tmp2_index);
          }
        }
      tmp6_input.jk(tmp0_desc);
      return ArenaPlay.h1a(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
    }
    sg() {
      return this.f1a_1;
    }
    to() {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      return [IntSerializer_getInstance(), get_nullable(StringSerializer_getInstance())];
    }
  }
  class Companion_36 {}
  class $serializer_14 {
    constructor() {
      $serializer_instance_14 = this;
      var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('arenaInput', this, 1);
      tmp0_serialDesc.eo('value', false);
      this.i1a_1 = tmp0_serialDesc;
    }
    j1a(encoder, value) {
      var tmp0_desc = this.i1a_1;
      var tmp1_output = encoder.ik(tmp0_desc);
      tmp1_output.fl(tmp0_desc, 0, value.g17_1);
      tmp1_output.jk(tmp0_desc);
    }
    tg(encoder, value) {
      return this.j1a(encoder, value instanceof ArenaInput ? value : THROW_CCE());
    }
    ug(decoder) {
      var tmp0_desc = this.i1a_1;
      var tmp1_flag = true;
      var tmp2_index = 0;
      var tmp3_bitMask0 = 0;
      var tmp4_local0 = null;
      var tmp5_input = decoder.ik(tmp0_desc);
      if (tmp5_input.rk()) {
        tmp4_local0 = tmp5_input.mk(tmp0_desc, 0);
        tmp3_bitMask0 = tmp3_bitMask0 | 1;
      } else
        while (tmp1_flag) {
          tmp2_index = tmp5_input.sk(tmp0_desc);
          switch (tmp2_index) {
            case -1:
              tmp1_flag = false;
              break;
            case 0:
              tmp4_local0 = tmp5_input.mk(tmp0_desc, 0);
              tmp3_bitMask0 = tmp3_bitMask0 | 1;
              break;
            default:
              throw UnknownFieldException.gi(tmp2_index);
          }
        }
      tmp5_input.jk(tmp0_desc);
      return ArenaInput.k1a(tmp3_bitMask0, tmp4_local0, null);
    }
    sg() {
      return this.i1a_1;
    }
    to() {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      return [StringSerializer_getInstance()];
    }
  }
  class Companion_37 {}
  class $serializer_15 {
    constructor() {
      $serializer_instance_15 = this;
      var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('arenaReport', this, 1);
      tmp0_serialDesc.eo('target', false);
      this.l1a_1 = tmp0_serialDesc;
    }
    m1a(encoder, value) {
      var tmp0_desc = this.l1a_1;
      var tmp1_output = encoder.ik(tmp0_desc);
      tmp1_output.fl(tmp0_desc, 0, value.f17_1);
      tmp1_output.jk(tmp0_desc);
    }
    tg(encoder, value) {
      return this.m1a(encoder, value instanceof ArenaReport ? value : THROW_CCE());
    }
    ug(decoder) {
      var tmp0_desc = this.l1a_1;
      var tmp1_flag = true;
      var tmp2_index = 0;
      var tmp3_bitMask0 = 0;
      var tmp4_local0 = null;
      var tmp5_input = decoder.ik(tmp0_desc);
      if (tmp5_input.rk()) {
        tmp4_local0 = tmp5_input.mk(tmp0_desc, 0);
        tmp3_bitMask0 = tmp3_bitMask0 | 1;
      } else
        while (tmp1_flag) {
          tmp2_index = tmp5_input.sk(tmp0_desc);
          switch (tmp2_index) {
            case -1:
              tmp1_flag = false;
              break;
            case 0:
              tmp4_local0 = tmp5_input.mk(tmp0_desc, 0);
              tmp3_bitMask0 = tmp3_bitMask0 | 1;
              break;
            default:
              throw UnknownFieldException.gi(tmp2_index);
          }
        }
      tmp5_input.jk(tmp0_desc);
      return ArenaReport.n1a(tmp3_bitMask0, tmp4_local0, null);
    }
    sg() {
      return this.l1a_1;
    }
    to() {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      return [StringSerializer_getInstance()];
    }
  }
  class Companion_38 {}
  class $serializer_16 {
    constructor() {
      $serializer_instance_16 = this;
      var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('adDone', this, 1);
      tmp0_serialDesc.eo('breakId', false);
      this.o1a_1 = tmp0_serialDesc;
    }
    p1a(encoder, value) {
      var tmp0_desc = this.o1a_1;
      var tmp1_output = encoder.ik(tmp0_desc);
      tmp1_output.el(tmp0_desc, 0, value.e17_1);
      tmp1_output.jk(tmp0_desc);
    }
    tg(encoder, value) {
      return this.p1a(encoder, value instanceof AdDone ? value : THROW_CCE());
    }
    ug(decoder) {
      var tmp0_desc = this.o1a_1;
      var tmp1_flag = true;
      var tmp2_index = 0;
      var tmp3_bitMask0 = 0;
      var tmp4_local0 = 0;
      var tmp5_input = decoder.ik(tmp0_desc);
      if (tmp5_input.rk()) {
        tmp4_local0 = tmp5_input.lk(tmp0_desc, 0);
        tmp3_bitMask0 = tmp3_bitMask0 | 1;
      } else
        while (tmp1_flag) {
          tmp2_index = tmp5_input.sk(tmp0_desc);
          switch (tmp2_index) {
            case -1:
              tmp1_flag = false;
              break;
            case 0:
              tmp4_local0 = tmp5_input.lk(tmp0_desc, 0);
              tmp3_bitMask0 = tmp3_bitMask0 | 1;
              break;
            default:
              throw UnknownFieldException.gi(tmp2_index);
          }
        }
      tmp5_input.jk(tmp0_desc);
      return AdDone.q1a(tmp3_bitMask0, tmp4_local0, null);
    }
    sg() {
      return this.o1a_1;
    }
    to() {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      return [IntSerializer_getInstance()];
    }
  }
  class Intent {}
  class UpdateSettings {
    constructor(settings) {
      this.u17_1 = settings;
    }
    toString() {
      return 'UpdateSettings(settings=' + this.u17_1.toString() + ')';
    }
    hashCode() {
      return this.u17_1.hashCode();
    }
    equals(other) {
      if (this === other)
        return true;
      if (!(other instanceof UpdateSettings))
        return false;
      if (!this.u17_1.equals(other.u17_1))
        return false;
      return true;
    }
    static x18(seen0, settings, serializationConstructorMarker) {
      if (!(1 === (1 & seen0))) {
        throwMissingFieldException(seen0, 1, $serializer_getInstance_1().v18_1);
      }
      var $this = createThis(this);
      $this.u17_1 = settings;
      return $this;
    }
  }
  class Start {
    constructor() {
      Start_instance = this;
      var tmp = this;
      var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
      tmp.r1a_1 = lazy(tmp_0, Intent$Start$_anonymous__3h909p);
    }
    toString() {
      return 'Start';
    }
    hashCode() {
      return -381125314;
    }
    equals(other) {
      if (this === other)
        return true;
      if (!(other instanceof Start))
        return false;
      return true;
    }
  }
  class Kick {
    toString() {
      return 'Kick(target=' + this.t17_1 + ')';
    }
    hashCode() {
      return getStringHashCode(this.t17_1);
    }
    equals(other) {
      if (this === other)
        return true;
      if (!(other instanceof Kick))
        return false;
      if (!(this.t17_1 === other.t17_1))
        return false;
      return true;
    }
    static a19(seen0, target, serializationConstructorMarker) {
      if (!(1 === (1 & seen0))) {
        throwMissingFieldException(seen0, 1, $serializer_getInstance_2().y18_1);
      }
      var $this = createThis(this);
      $this.t17_1 = target;
      return $this;
    }
  }
  class ConfirmWord {
    constructor(forPlayer) {
      forPlayer = forPlayer === VOID ? null : forPlayer;
      this.s17_1 = forPlayer;
    }
    toString() {
      return 'ConfirmWord(forPlayer=' + this.s17_1 + ')';
    }
    hashCode() {
      return this.s17_1 == null ? 0 : getStringHashCode(this.s17_1);
    }
    equals(other) {
      if (this === other)
        return true;
      if (!(other instanceof ConfirmWord))
        return false;
      if (!(this.s17_1 == other.s17_1))
        return false;
      return true;
    }
    static d19(seen0, forPlayer, serializationConstructorMarker) {
      if (!(0 === (0 & seen0))) {
        throwMissingFieldException(seen0, 0, $serializer_getInstance_3().b19_1);
      }
      var $this = createThis(this);
      if (0 === (seen0 & 1))
        $this.s17_1 = null;
      else
        $this.s17_1 = forPlayer;
      return $this;
    }
  }
  class EndTalk {
    constructor() {
      EndTalk_instance = this;
      var tmp = this;
      var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
      tmp.s1a_1 = lazy(tmp_0, Intent$EndTalk$_anonymous__c6bu7c);
    }
    toString() {
      return 'EndTalk';
    }
    hashCode() {
      return -899269117;
    }
    equals(other) {
      if (this === other)
        return true;
      if (!(other instanceof EndTalk))
        return false;
      return true;
    }
  }
  class Vote {
    toString() {
      return 'Vote(target=' + this.r17_1 + ')';
    }
    hashCode() {
      return getStringHashCode(this.r17_1);
    }
    equals(other) {
      if (this === other)
        return true;
      if (!(other instanceof Vote))
        return false;
      if (!(this.r17_1 === other.r17_1))
        return false;
      return true;
    }
    static g19(seen0, target, serializationConstructorMarker) {
      if (!(1 === (1 & seen0))) {
        throwMissingFieldException(seen0, 1, $serializer_getInstance_4().e19_1);
      }
      var $this = createThis(this);
      $this.r17_1 = target;
      return $this;
    }
  }
  class CloseVote {
    constructor() {
      CloseVote_instance = this;
      var tmp = this;
      var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
      tmp.t1a_1 = lazy(tmp_0, Intent$CloseVote$_anonymous__x13rb7);
    }
    toString() {
      return 'CloseVote';
    }
    hashCode() {
      return 1283249118;
    }
    equals(other) {
      if (this === other)
        return true;
      if (!(other instanceof CloseVote))
        return false;
      return true;
    }
  }
  class Accuse {
    toString() {
      return 'Accuse(target=' + this.q17_1 + ')';
    }
    hashCode() {
      return getStringHashCode(this.q17_1);
    }
    equals(other) {
      if (this === other)
        return true;
      if (!(other instanceof Accuse))
        return false;
      if (!(this.q17_1 === other.q17_1))
        return false;
      return true;
    }
    static j19(seen0, target, serializationConstructorMarker) {
      if (!(1 === (1 & seen0))) {
        throwMissingFieldException(seen0, 1, $serializer_getInstance_5().h19_1);
      }
      var $this = createThis(this);
      $this.q17_1 = target;
      return $this;
    }
  }
  class Judge {
    toString() {
      return 'Judge(correct=' + this.p17_1 + ')';
    }
    hashCode() {
      return getBooleanHashCode(this.p17_1);
    }
    equals(other) {
      if (this === other)
        return true;
      if (!(other instanceof Judge))
        return false;
      if (!(this.p17_1 === other.p17_1))
        return false;
      return true;
    }
    static m19(seen0, correct, serializationConstructorMarker) {
      if (!(1 === (1 & seen0))) {
        throwMissingFieldException(seen0, 1, $serializer_getInstance_6().k19_1);
      }
      var $this = createThis(this);
      $this.p17_1 = correct;
      return $this;
    }
  }
  class ReportOut {
    toString() {
      return 'ReportOut(target=' + this.n17_1 + ')';
    }
    hashCode() {
      return getStringHashCode(this.n17_1);
    }
    equals(other) {
      if (this === other)
        return true;
      if (!(other instanceof ReportOut))
        return false;
      if (!(this.n17_1 === other.n17_1))
        return false;
      return true;
    }
    static p19(seen0, target, serializationConstructorMarker) {
      if (!(1 === (1 & seen0))) {
        throwMissingFieldException(seen0, 1, $serializer_getInstance_7().n19_1);
      }
      var $this = createThis(this);
      $this.n17_1 = target;
      return $this;
    }
  }
  class UndoOut {
    toString() {
      return 'UndoOut(target=' + this.m17_1 + ')';
    }
    hashCode() {
      return getStringHashCode(this.m17_1);
    }
    equals(other) {
      if (this === other)
        return true;
      if (!(other instanceof UndoOut))
        return false;
      if (!(this.m17_1 === other.m17_1))
        return false;
      return true;
    }
    static s19(seen0, target, serializationConstructorMarker) {
      if (!(1 === (1 & seen0))) {
        throwMissingFieldException(seen0, 1, $serializer_getInstance_8().q19_1);
      }
      var $this = createThis(this);
      $this.m17_1 = target;
      return $this;
    }
  }
  class EndNg {
    constructor() {
      EndNg_instance = this;
      var tmp = this;
      var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
      tmp.u1a_1 = lazy(tmp_0, Intent$EndNg$_anonymous__unkdth);
    }
    toString() {
      return 'EndNg';
    }
    hashCode() {
      return -394231600;
    }
    equals(other) {
      if (this === other)
        return true;
      if (!(other instanceof EndNg))
        return false;
      return true;
    }
  }
  class SpyGuess {
    toString() {
      return 'SpyGuess(answer=' + this.o17_1 + ')';
    }
    hashCode() {
      return getStringHashCode(this.o17_1);
    }
    equals(other) {
      if (this === other)
        return true;
      if (!(other instanceof SpyGuess))
        return false;
      if (!(this.o17_1 === other.o17_1))
        return false;
      return true;
    }
    static v19(seen0, answer, serializationConstructorMarker) {
      if (!(1 === (1 & seen0))) {
        throwMissingFieldException(seen0, 1, $serializer_getInstance_9().t19_1);
      }
      var $this = createThis(this);
      $this.o17_1 = answer;
      return $this;
    }
  }
  class SyncAnswer {
    toString() {
      return 'SyncAnswer(text=' + this.l17_1 + ')';
    }
    hashCode() {
      return getStringHashCode(this.l17_1);
    }
    equals(other) {
      if (this === other)
        return true;
      if (!(other instanceof SyncAnswer))
        return false;
      if (!(this.l17_1 === other.l17_1))
        return false;
      return true;
    }
    static y19(seen0, text, serializationConstructorMarker) {
      if (!(1 === (1 & seen0))) {
        throwMissingFieldException(seen0, 1, $serializer_getInstance_10().w19_1);
      }
      var $this = createThis(this);
      $this.l17_1 = text;
      return $this;
    }
  }
  class GuessSolved {
    toString() {
      return 'GuessSolved(guesser=' + this.k17_1 + ')';
    }
    hashCode() {
      return getStringHashCode(this.k17_1);
    }
    equals(other) {
      if (this === other)
        return true;
      if (!(other instanceof GuessSolved))
        return false;
      if (!(this.k17_1 === other.k17_1))
        return false;
      return true;
    }
    static b1a(seen0, guesser, serializationConstructorMarker) {
      if (!(1 === (1 & seen0))) {
        throwMissingFieldException(seen0, 1, $serializer_getInstance_11().z19_1);
      }
      var $this = createThis(this);
      $this.k17_1 = guesser;
      return $this;
    }
  }
  class GuessGiveUp {
    constructor() {
      GuessGiveUp_instance = this;
      var tmp = this;
      var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
      tmp.v1a_1 = lazy(tmp_0, Intent$GuessGiveUp$_anonymous__zguq7w);
    }
    toString() {
      return 'GuessGiveUp';
    }
    hashCode() {
      return 180205087;
    }
    equals(other) {
      if (this === other)
        return true;
      if (!(other instanceof GuessGiveUp))
        return false;
      return true;
    }
  }
  class QVote {
    toString() {
      return 'QVote(target=' + this.j17_1 + ')';
    }
    hashCode() {
      return getStringHashCode(this.j17_1);
    }
    equals(other) {
      if (this === other)
        return true;
      if (!(other instanceof QVote))
        return false;
      if (!(this.j17_1 === other.j17_1))
        return false;
      return true;
    }
    static e1a(seen0, target, serializationConstructorMarker) {
      if (!(1 === (1 & seen0))) {
        throwMissingFieldException(seen0, 1, $serializer_getInstance_12().c1a_1);
      }
      var $this = createThis(this);
      $this.j17_1 = target;
      return $this;
    }
  }
  class ArenaPlay {
    toString() {
      return 'ArenaPlay(uid=' + this.h17_1 + ', target=' + this.i17_1 + ')';
    }
    hashCode() {
      var result = this.h17_1;
      result = imul(result, 31) + (this.i17_1 == null ? 0 : getStringHashCode(this.i17_1)) | 0;
      return result;
    }
    equals(other) {
      if (this === other)
        return true;
      if (!(other instanceof ArenaPlay))
        return false;
      if (!(this.h17_1 === other.h17_1))
        return false;
      if (!(this.i17_1 == other.i17_1))
        return false;
      return true;
    }
    static h1a(seen0, uid, target, serializationConstructorMarker) {
      if (!(1 === (1 & seen0))) {
        throwMissingFieldException(seen0, 1, $serializer_getInstance_13().f1a_1);
      }
      var $this = createThis(this);
      $this.h17_1 = uid;
      if (0 === (seen0 & 2))
        $this.i17_1 = null;
      else
        $this.i17_1 = target;
      return $this;
    }
  }
  class ArenaInput {
    toString() {
      return 'ArenaInput(value=' + this.g17_1 + ')';
    }
    hashCode() {
      return getStringHashCode(this.g17_1);
    }
    equals(other) {
      if (this === other)
        return true;
      if (!(other instanceof ArenaInput))
        return false;
      if (!(this.g17_1 === other.g17_1))
        return false;
      return true;
    }
    static k1a(seen0, value, serializationConstructorMarker) {
      if (!(1 === (1 & seen0))) {
        throwMissingFieldException(seen0, 1, $serializer_getInstance_14().i1a_1);
      }
      var $this = createThis(this);
      $this.g17_1 = value;
      return $this;
    }
  }
  class ArenaReport {
    toString() {
      return 'ArenaReport(target=' + this.f17_1 + ')';
    }
    hashCode() {
      return getStringHashCode(this.f17_1);
    }
    equals(other) {
      if (this === other)
        return true;
      if (!(other instanceof ArenaReport))
        return false;
      if (!(this.f17_1 === other.f17_1))
        return false;
      return true;
    }
    static n1a(seen0, target, serializationConstructorMarker) {
      if (!(1 === (1 & seen0))) {
        throwMissingFieldException(seen0, 1, $serializer_getInstance_15().l1a_1);
      }
      var $this = createThis(this);
      $this.f17_1 = target;
      return $this;
    }
  }
  class Next {
    constructor() {
      Next_instance = this;
      var tmp = this;
      var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
      tmp.w1a_1 = lazy(tmp_0, Intent$Next$_anonymous__cnsepo);
    }
    toString() {
      return 'Next';
    }
    hashCode() {
      return -1397930345;
    }
    equals(other) {
      if (this === other)
        return true;
      if (!(other instanceof Next))
        return false;
      return true;
    }
  }
  class BackToLobby {
    constructor() {
      BackToLobby_instance = this;
      var tmp = this;
      var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
      tmp.x1a_1 = lazy(tmp_0, Intent$BackToLobby$_anonymous__yra8jv);
    }
    toString() {
      return 'BackToLobby';
    }
    hashCode() {
      return 2143020816;
    }
    equals(other) {
      if (this === other)
        return true;
      if (!(other instanceof BackToLobby))
        return false;
      return true;
    }
  }
  class AdDone {
    toString() {
      return 'AdDone(breakId=' + this.e17_1 + ')';
    }
    hashCode() {
      return this.e17_1;
    }
    equals(other) {
      if (this === other)
        return true;
      if (!(other instanceof AdDone))
        return false;
      if (!(this.e17_1 === other.e17_1))
        return false;
      return true;
    }
    static q1a(seen0, breakId, serializationConstructorMarker) {
      if (!(1 === (1 & seen0))) {
        throwMissingFieldException(seen0, 1, $serializer_getInstance_16().o1a_1);
      }
      var $this = createThis(this);
      $this.e17_1 = breakId;
      return $this;
    }
  }
  class Companion_39 {
    m10() {
      var tmp = getKClass(Intent);
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = [getKClass(Accuse), getKClass(AdDone), getKClass(ArenaInput), getKClass(ArenaPlay), getKClass(ArenaReport), getKClass(BackToLobby), getKClass(CloseVote), getKClass(ConfirmWord), getKClass(EndNg), getKClass(EndTalk), getKClass(GuessGiveUp), getKClass(GuessSolved), getKClass(Judge), getKClass(Kick), getKClass(Next), getKClass(QVote), getKClass(ReportOut), getKClass(SpyGuess), getKClass(Start), getKClass(SyncAnswer), getKClass(UndoOut), getKClass(UpdateSettings), getKClass(Vote)];
      var tmp_1 = $serializer_getInstance_5();
      var tmp_2 = $serializer_getInstance_16();
      var tmp_3 = $serializer_getInstance_14();
      var tmp_4 = $serializer_getInstance_13();
      var tmp_5 = $serializer_getInstance_15();
      var tmp_6 = BackToLobby_getInstance();
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$5 = [];
      var tmp_7 = ObjectSerializer.cp('lobby', tmp_6, tmp$ret$5);
      var tmp_8 = CloseVote_getInstance();
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$8 = [];
      var tmp_9 = ObjectSerializer.cp('closeVote', tmp_8, tmp$ret$8);
      var tmp_10 = $serializer_getInstance_3();
      var tmp_11 = EndNg_getInstance();
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$11 = [];
      var tmp_12 = ObjectSerializer.cp('endNg', tmp_11, tmp$ret$11);
      var tmp_13 = EndTalk_getInstance();
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$14 = [];
      var tmp_14 = ObjectSerializer.cp('endTalk', tmp_13, tmp$ret$14);
      var tmp_15 = GuessGiveUp_getInstance();
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$17 = [];
      var tmp_16 = ObjectSerializer.cp('guessGiveUp', tmp_15, tmp$ret$17);
      var tmp_17 = $serializer_getInstance_11();
      var tmp_18 = $serializer_getInstance_6();
      var tmp_19 = $serializer_getInstance_2();
      var tmp_20 = Next_getInstance();
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$20 = [];
      var tmp_21 = ObjectSerializer.cp('next', tmp_20, tmp$ret$20);
      var tmp_22 = $serializer_getInstance_12();
      var tmp_23 = $serializer_getInstance_7();
      var tmp_24 = $serializer_getInstance_9();
      var tmp_25 = Start_getInstance();
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$23 = [];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_26 = [tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, tmp_7, tmp_9, tmp_10, tmp_12, tmp_14, tmp_16, tmp_17, tmp_18, tmp_19, tmp_21, tmp_22, tmp_23, tmp_24, ObjectSerializer.cp('start', tmp_25, tmp$ret$23), $serializer_getInstance_10(), $serializer_getInstance_8(), $serializer_getInstance_1(), $serializer_getInstance_4()];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$29 = [];
      return SealedClassSerializer.rh('com.zen.partygame.game.Intent', tmp, tmp_0, tmp_26, tmp$ret$29);
    }
  }
  class Companion_40 {}
  class $serializer_17 {
    constructor() {
      $serializer_instance_17 = this;
      var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.zen.partygame.game.VoteCount', this, 2);
      tmp0_serialDesc.eo('id', false);
      tmp0_serialDesc.eo('votes', false);
      this.y1a_1 = tmp0_serialDesc;
    }
    z1a(encoder, value) {
      var tmp0_desc = this.y1a_1;
      var tmp1_output = encoder.ik(tmp0_desc);
      tmp1_output.fl(tmp0_desc, 0, value.k16_1);
      tmp1_output.el(tmp0_desc, 1, value.l16_1);
      tmp1_output.jk(tmp0_desc);
    }
    tg(encoder, value) {
      return this.z1a(encoder, value instanceof VoteCount ? value : THROW_CCE());
    }
    ug(decoder) {
      var tmp0_desc = this.y1a_1;
      var tmp1_flag = true;
      var tmp2_index = 0;
      var tmp3_bitMask0 = 0;
      var tmp4_local0 = null;
      var tmp5_local1 = 0;
      var tmp6_input = decoder.ik(tmp0_desc);
      if (tmp6_input.rk()) {
        tmp4_local0 = tmp6_input.mk(tmp0_desc, 0);
        tmp3_bitMask0 = tmp3_bitMask0 | 1;
        tmp5_local1 = tmp6_input.lk(tmp0_desc, 1);
        tmp3_bitMask0 = tmp3_bitMask0 | 2;
      } else
        while (tmp1_flag) {
          tmp2_index = tmp6_input.sk(tmp0_desc);
          switch (tmp2_index) {
            case -1:
              tmp1_flag = false;
              break;
            case 0:
              tmp4_local0 = tmp6_input.mk(tmp0_desc, 0);
              tmp3_bitMask0 = tmp3_bitMask0 | 1;
              break;
            case 1:
              tmp5_local1 = tmp6_input.lk(tmp0_desc, 1);
              tmp3_bitMask0 = tmp3_bitMask0 | 2;
              break;
            default:
              throw UnknownFieldException.gi(tmp2_index);
          }
        }
      tmp6_input.jk(tmp0_desc);
      return VoteCount.a1b(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
    }
    sg() {
      return this.y1a_1;
    }
    to() {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      return [StringSerializer_getInstance(), IntSerializer_getInstance()];
    }
  }
  class VoteCount {
    constructor(id, votes) {
      this.k16_1 = id;
      this.l16_1 = votes;
    }
    toString() {
      return 'VoteCount(id=' + this.k16_1 + ', votes=' + this.l16_1 + ')';
    }
    hashCode() {
      var result = getStringHashCode(this.k16_1);
      result = imul(result, 31) + this.l16_1 | 0;
      return result;
    }
    equals(other) {
      if (this === other)
        return true;
      if (!(other instanceof VoteCount))
        return false;
      if (!(this.k16_1 === other.k16_1))
        return false;
      if (!(this.l16_1 === other.l16_1))
        return false;
      return true;
    }
    static a1b(seen0, id, votes, serializationConstructorMarker) {
      if (!(3 === (3 & seen0))) {
        throwMissingFieldException(seen0, 3, $serializer_getInstance_17().y1a_1);
      }
      var $this = createThis(this);
      $this.k16_1 = id;
      $this.l16_1 = votes;
      return $this;
    }
  }
  class Companion_41 {
    constructor() {
      Companion_instance_41 = this;
      var tmp = this;
      var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.b1b_1 = [null, null, lazy(tmp_0, ArenaCard$Companion$$childSerializers$_anonymous__12b3gt)];
    }
  }
  class $serializer_18 {
    constructor() {
      $serializer_instance_18 = this;
      var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.zen.partygame.game.ArenaCard', this, 3);
      tmp0_serialDesc.eo('uid', false);
      tmp0_serialDesc.eo('id', false);
      tmp0_serialDesc.eo('suit', false);
      this.c1b_1 = tmp0_serialDesc;
    }
    d1b(encoder, value) {
      var tmp0_desc = this.c1b_1;
      var tmp1_output = encoder.ik(tmp0_desc);
      var tmp2_cached = Companion_getInstance_41().b1b_1;
      tmp1_output.el(tmp0_desc, 0, value.t12_1);
      tmp1_output.fl(tmp0_desc, 1, value.u12_1);
      tmp1_output.gl(tmp0_desc, 2, tmp2_cached[2].d2(), value.v12_1);
      tmp1_output.jk(tmp0_desc);
    }
    tg(encoder, value) {
      return this.d1b(encoder, value instanceof ArenaCard ? value : THROW_CCE());
    }
    ug(decoder) {
      var tmp0_desc = this.c1b_1;
      var tmp1_flag = true;
      var tmp2_index = 0;
      var tmp3_bitMask0 = 0;
      var tmp4_local0 = 0;
      var tmp5_local1 = null;
      var tmp6_local2 = null;
      var tmp7_input = decoder.ik(tmp0_desc);
      var tmp8_cached = Companion_getInstance_41().b1b_1;
      if (tmp7_input.rk()) {
        tmp4_local0 = tmp7_input.lk(tmp0_desc, 0);
        tmp3_bitMask0 = tmp3_bitMask0 | 1;
        tmp5_local1 = tmp7_input.mk(tmp0_desc, 1);
        tmp3_bitMask0 = tmp3_bitMask0 | 2;
        tmp6_local2 = tmp7_input.nk(tmp0_desc, 2, tmp8_cached[2].d2(), tmp6_local2);
        tmp3_bitMask0 = tmp3_bitMask0 | 4;
      } else
        while (tmp1_flag) {
          tmp2_index = tmp7_input.sk(tmp0_desc);
          switch (tmp2_index) {
            case -1:
              tmp1_flag = false;
              break;
            case 0:
              tmp4_local0 = tmp7_input.lk(tmp0_desc, 0);
              tmp3_bitMask0 = tmp3_bitMask0 | 1;
              break;
            case 1:
              tmp5_local1 = tmp7_input.mk(tmp0_desc, 1);
              tmp3_bitMask0 = tmp3_bitMask0 | 2;
              break;
            case 2:
              tmp6_local2 = tmp7_input.nk(tmp0_desc, 2, tmp8_cached[2].d2(), tmp6_local2);
              tmp3_bitMask0 = tmp3_bitMask0 | 4;
              break;
            default:
              throw UnknownFieldException.gi(tmp2_index);
          }
        }
      tmp7_input.jk(tmp0_desc);
      return ArenaCard.e1b(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
    }
    sg() {
      return this.c1b_1;
    }
    to() {
      var tmp0_cached = Companion_getInstance_41().b1b_1;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      return [IntSerializer_getInstance(), StringSerializer_getInstance(), tmp0_cached[2].d2()];
    }
  }
  class ArenaCard {
    constructor(uid, id, suit) {
      Companion_getInstance_41();
      this.t12_1 = uid;
      this.u12_1 = id;
      this.v12_1 = suit;
    }
    toString() {
      return 'ArenaCard(uid=' + this.t12_1 + ', id=' + this.u12_1 + ', suit=' + this.v12_1.toString() + ')';
    }
    hashCode() {
      var result = this.t12_1;
      result = imul(result, 31) + getStringHashCode(this.u12_1) | 0;
      result = imul(result, 31) + this.v12_1.hashCode() | 0;
      return result;
    }
    equals(other) {
      if (this === other)
        return true;
      if (!(other instanceof ArenaCard))
        return false;
      if (!(this.t12_1 === other.t12_1))
        return false;
      if (!(this.u12_1 === other.u12_1))
        return false;
      if (!this.v12_1.equals(other.v12_1))
        return false;
      return true;
    }
    static e1b(seen0, uid, id, suit, serializationConstructorMarker) {
      Companion_getInstance_41();
      if (!(7 === (7 & seen0))) {
        throwMissingFieldException(seen0, 7, $serializer_getInstance_18().c1b_1);
      }
      var $this = createThis(this);
      $this.t12_1 = uid;
      $this.u12_1 = id;
      $this.v12_1 = suit;
      return $this;
    }
  }
  class Companion_42 {
    constructor() {
      Companion_instance_42 = this;
      var tmp = this;
      var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.f1b_1 = [null, null, null, lazy(tmp_0, ArenaSeat$Companion$$childSerializers$_anonymous__5j066a), null];
    }
  }
  class $serializer_19 {
    constructor() {
      $serializer_instance_19 = this;
      var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.zen.partygame.game.ArenaSeat', this, 5);
      tmp0_serialDesc.eo('id', false);
      tmp0_serialDesc.eo('alive', false);
      tmp0_serialDesc.eo('hand', false);
      tmp0_serialDesc.eo('front', true);
      tmp0_serialDesc.eo('points', true);
      this.g1b_1 = tmp0_serialDesc;
    }
    h1b(encoder, value) {
      var tmp0_desc = this.g1b_1;
      var tmp1_output = encoder.ik(tmp0_desc);
      var tmp2_cached = Companion_getInstance_42().f1b_1;
      tmp1_output.fl(tmp0_desc, 0, value.i1b_1);
      tmp1_output.dl(tmp0_desc, 1, value.j1b_1);
      tmp1_output.el(tmp0_desc, 2, value.k1b_1);
      if (tmp1_output.ml(tmp0_desc, 3) ? true : !equals(value.l1b_1, emptyList())) {
        tmp1_output.gl(tmp0_desc, 3, tmp2_cached[3].d2(), value.l1b_1);
      }
      if (tmp1_output.ml(tmp0_desc, 4) ? true : !(value.m1b_1 === 0)) {
        tmp1_output.el(tmp0_desc, 4, value.m1b_1);
      }
      tmp1_output.jk(tmp0_desc);
    }
    tg(encoder, value) {
      return this.h1b(encoder, value instanceof ArenaSeat ? value : THROW_CCE());
    }
    ug(decoder) {
      var tmp0_desc = this.g1b_1;
      var tmp1_flag = true;
      var tmp2_index = 0;
      var tmp3_bitMask0 = 0;
      var tmp4_local0 = null;
      var tmp5_local1 = false;
      var tmp6_local2 = 0;
      var tmp7_local3 = null;
      var tmp8_local4 = 0;
      var tmp9_input = decoder.ik(tmp0_desc);
      var tmp10_cached = Companion_getInstance_42().f1b_1;
      if (tmp9_input.rk()) {
        tmp4_local0 = tmp9_input.mk(tmp0_desc, 0);
        tmp3_bitMask0 = tmp3_bitMask0 | 1;
        tmp5_local1 = tmp9_input.kk(tmp0_desc, 1);
        tmp3_bitMask0 = tmp3_bitMask0 | 2;
        tmp6_local2 = tmp9_input.lk(tmp0_desc, 2);
        tmp3_bitMask0 = tmp3_bitMask0 | 4;
        tmp7_local3 = tmp9_input.nk(tmp0_desc, 3, tmp10_cached[3].d2(), tmp7_local3);
        tmp3_bitMask0 = tmp3_bitMask0 | 8;
        tmp8_local4 = tmp9_input.lk(tmp0_desc, 4);
        tmp3_bitMask0 = tmp3_bitMask0 | 16;
      } else
        while (tmp1_flag) {
          tmp2_index = tmp9_input.sk(tmp0_desc);
          switch (tmp2_index) {
            case -1:
              tmp1_flag = false;
              break;
            case 0:
              tmp4_local0 = tmp9_input.mk(tmp0_desc, 0);
              tmp3_bitMask0 = tmp3_bitMask0 | 1;
              break;
            case 1:
              tmp5_local1 = tmp9_input.kk(tmp0_desc, 1);
              tmp3_bitMask0 = tmp3_bitMask0 | 2;
              break;
            case 2:
              tmp6_local2 = tmp9_input.lk(tmp0_desc, 2);
              tmp3_bitMask0 = tmp3_bitMask0 | 4;
              break;
            case 3:
              tmp7_local3 = tmp9_input.nk(tmp0_desc, 3, tmp10_cached[3].d2(), tmp7_local3);
              tmp3_bitMask0 = tmp3_bitMask0 | 8;
              break;
            case 4:
              tmp8_local4 = tmp9_input.lk(tmp0_desc, 4);
              tmp3_bitMask0 = tmp3_bitMask0 | 16;
              break;
            default:
              throw UnknownFieldException.gi(tmp2_index);
          }
        }
      tmp9_input.jk(tmp0_desc);
      return ArenaSeat.n1b(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
    }
    sg() {
      return this.g1b_1;
    }
    to() {
      var tmp0_cached = Companion_getInstance_42().f1b_1;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      return [StringSerializer_getInstance(), BooleanSerializer_getInstance(), IntSerializer_getInstance(), tmp0_cached[3].d2(), IntSerializer_getInstance()];
    }
  }
  class ArenaSeat {
    constructor(id, alive, hand, front, points) {
      Companion_getInstance_42();
      front = front === VOID ? emptyList() : front;
      points = points === VOID ? 0 : points;
      this.i1b_1 = id;
      this.j1b_1 = alive;
      this.k1b_1 = hand;
      this.l1b_1 = front;
      this.m1b_1 = points;
    }
    toString() {
      return 'ArenaSeat(id=' + this.i1b_1 + ', alive=' + this.j1b_1 + ', hand=' + this.k1b_1 + ', front=' + toString_1(this.l1b_1) + ', points=' + this.m1b_1 + ')';
    }
    hashCode() {
      var result = getStringHashCode(this.i1b_1);
      result = imul(result, 31) + getBooleanHashCode(this.j1b_1) | 0;
      result = imul(result, 31) + this.k1b_1 | 0;
      result = imul(result, 31) + hashCode_0(this.l1b_1) | 0;
      result = imul(result, 31) + this.m1b_1 | 0;
      return result;
    }
    equals(other) {
      if (this === other)
        return true;
      if (!(other instanceof ArenaSeat))
        return false;
      if (!(this.i1b_1 === other.i1b_1))
        return false;
      if (!(this.j1b_1 === other.j1b_1))
        return false;
      if (!(this.k1b_1 === other.k1b_1))
        return false;
      if (!equals(this.l1b_1, other.l1b_1))
        return false;
      if (!(this.m1b_1 === other.m1b_1))
        return false;
      return true;
    }
    static n1b(seen0, id, alive, hand, front, points, serializationConstructorMarker) {
      Companion_getInstance_42();
      if (!(7 === (7 & seen0))) {
        throwMissingFieldException(seen0, 7, $serializer_getInstance_19().g1b_1);
      }
      var $this = createThis(this);
      $this.i1b_1 = id;
      $this.j1b_1 = alive;
      $this.k1b_1 = hand;
      if (0 === (seen0 & 8))
        $this.l1b_1 = emptyList();
      else
        $this.l1b_1 = front;
      if (0 === (seen0 & 16))
        $this.m1b_1 = 0;
      else
        $this.m1b_1 = points;
      return $this;
    }
  }
  class Companion_43 {
    constructor() {
      Companion_instance_43 = this;
      var tmp = this;
      var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
      var tmp_1 = lazy(tmp_0, ArenaMini$Companion$$childSerializers$_anonymous__u5e2s4);
      var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.o1b_1 = [null, null, tmp_1, lazy(tmp_2, ArenaMini$Companion$$childSerializers$_anonymous__u5e2s4_0), null, null, null];
    }
  }
  class $serializer_20 {
    constructor() {
      $serializer_instance_20 = this;
      var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.zen.partygame.game.ArenaMini', this, 7);
      tmp0_serialDesc.eo('kind', false);
      tmp0_serialDesc.eo('owner', false);
      tmp0_serialDesc.eo('involved', false);
      tmp0_serialDesc.eo('done', false);
      tmp0_serialDesc.eo('myInput', true);
      tmp0_serialDesc.eo('card', true);
      tmp0_serialDesc.eo('goInMs', true);
      this.p1b_1 = tmp0_serialDesc;
    }
    q1b(encoder, value) {
      var tmp0_desc = this.p1b_1;
      var tmp1_output = encoder.ik(tmp0_desc);
      var tmp2_cached = Companion_getInstance_43().o1b_1;
      tmp1_output.fl(tmp0_desc, 0, value.r1b_1);
      tmp1_output.fl(tmp0_desc, 1, value.s1b_1);
      tmp1_output.gl(tmp0_desc, 2, tmp2_cached[2].d2(), value.t1b_1);
      tmp1_output.gl(tmp0_desc, 3, tmp2_cached[3].d2(), value.u1b_1);
      if (tmp1_output.ml(tmp0_desc, 4) ? true : !(value.v1b_1 == null)) {
        tmp1_output.il(tmp0_desc, 4, StringSerializer_getInstance(), value.v1b_1);
      }
      if (tmp1_output.ml(tmp0_desc, 5) ? true : !(value.w1b_1 == null)) {
        tmp1_output.il(tmp0_desc, 5, StringSerializer_getInstance(), value.w1b_1);
      }
      if (tmp1_output.ml(tmp0_desc, 6) ? true : !(value.x1b_1 == null)) {
        tmp1_output.il(tmp0_desc, 6, LongSerializer_getInstance(), value.x1b_1);
      }
      tmp1_output.jk(tmp0_desc);
    }
    tg(encoder, value) {
      return this.q1b(encoder, value instanceof ArenaMini ? value : THROW_CCE());
    }
    ug(decoder) {
      var tmp0_desc = this.p1b_1;
      var tmp1_flag = true;
      var tmp2_index = 0;
      var tmp3_bitMask0 = 0;
      var tmp4_local0 = null;
      var tmp5_local1 = null;
      var tmp6_local2 = null;
      var tmp7_local3 = null;
      var tmp8_local4 = null;
      var tmp9_local5 = null;
      var tmp10_local6 = null;
      var tmp11_input = decoder.ik(tmp0_desc);
      var tmp12_cached = Companion_getInstance_43().o1b_1;
      if (tmp11_input.rk()) {
        tmp4_local0 = tmp11_input.mk(tmp0_desc, 0);
        tmp3_bitMask0 = tmp3_bitMask0 | 1;
        tmp5_local1 = tmp11_input.mk(tmp0_desc, 1);
        tmp3_bitMask0 = tmp3_bitMask0 | 2;
        tmp6_local2 = tmp11_input.nk(tmp0_desc, 2, tmp12_cached[2].d2(), tmp6_local2);
        tmp3_bitMask0 = tmp3_bitMask0 | 4;
        tmp7_local3 = tmp11_input.nk(tmp0_desc, 3, tmp12_cached[3].d2(), tmp7_local3);
        tmp3_bitMask0 = tmp3_bitMask0 | 8;
        tmp8_local4 = tmp11_input.pk(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
        tmp3_bitMask0 = tmp3_bitMask0 | 16;
        tmp9_local5 = tmp11_input.pk(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
        tmp3_bitMask0 = tmp3_bitMask0 | 32;
        tmp10_local6 = tmp11_input.pk(tmp0_desc, 6, LongSerializer_getInstance(), tmp10_local6);
        tmp3_bitMask0 = tmp3_bitMask0 | 64;
      } else
        while (tmp1_flag) {
          tmp2_index = tmp11_input.sk(tmp0_desc);
          switch (tmp2_index) {
            case -1:
              tmp1_flag = false;
              break;
            case 0:
              tmp4_local0 = tmp11_input.mk(tmp0_desc, 0);
              tmp3_bitMask0 = tmp3_bitMask0 | 1;
              break;
            case 1:
              tmp5_local1 = tmp11_input.mk(tmp0_desc, 1);
              tmp3_bitMask0 = tmp3_bitMask0 | 2;
              break;
            case 2:
              tmp6_local2 = tmp11_input.nk(tmp0_desc, 2, tmp12_cached[2].d2(), tmp6_local2);
              tmp3_bitMask0 = tmp3_bitMask0 | 4;
              break;
            case 3:
              tmp7_local3 = tmp11_input.nk(tmp0_desc, 3, tmp12_cached[3].d2(), tmp7_local3);
              tmp3_bitMask0 = tmp3_bitMask0 | 8;
              break;
            case 4:
              tmp8_local4 = tmp11_input.pk(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
              tmp3_bitMask0 = tmp3_bitMask0 | 16;
              break;
            case 5:
              tmp9_local5 = tmp11_input.pk(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
              tmp3_bitMask0 = tmp3_bitMask0 | 32;
              break;
            case 6:
              tmp10_local6 = tmp11_input.pk(tmp0_desc, 6, LongSerializer_getInstance(), tmp10_local6);
              tmp3_bitMask0 = tmp3_bitMask0 | 64;
              break;
            default:
              throw UnknownFieldException.gi(tmp2_index);
          }
        }
      tmp11_input.jk(tmp0_desc);
      return ArenaMini.y1b(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
    }
    sg() {
      return this.p1b_1;
    }
    to() {
      var tmp0_cached = Companion_getInstance_43().o1b_1;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      return [StringSerializer_getInstance(), StringSerializer_getInstance(), tmp0_cached[2].d2(), tmp0_cached[3].d2(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(LongSerializer_getInstance())];
    }
  }
  class ArenaMini {
    constructor(kind, owner, involved, done, myInput, card, goInMs) {
      Companion_getInstance_43();
      myInput = myInput === VOID ? null : myInput;
      card = card === VOID ? null : card;
      goInMs = goInMs === VOID ? null : goInMs;
      this.r1b_1 = kind;
      this.s1b_1 = owner;
      this.t1b_1 = involved;
      this.u1b_1 = done;
      this.v1b_1 = myInput;
      this.w1b_1 = card;
      this.x1b_1 = goInMs;
    }
    toString() {
      return 'ArenaMini(kind=' + this.r1b_1 + ', owner=' + this.s1b_1 + ', involved=' + toString_1(this.t1b_1) + ', done=' + toString_1(this.u1b_1) + ', myInput=' + this.v1b_1 + ', card=' + this.w1b_1 + ', goInMs=' + toString_0(this.x1b_1) + ')';
    }
    hashCode() {
      var result = getStringHashCode(this.r1b_1);
      result = imul(result, 31) + getStringHashCode(this.s1b_1) | 0;
      result = imul(result, 31) + hashCode_0(this.t1b_1) | 0;
      result = imul(result, 31) + hashCode_0(this.u1b_1) | 0;
      result = imul(result, 31) + (this.v1b_1 == null ? 0 : getStringHashCode(this.v1b_1)) | 0;
      result = imul(result, 31) + (this.w1b_1 == null ? 0 : getStringHashCode(this.w1b_1)) | 0;
      result = imul(result, 31) + (this.x1b_1 == null ? 0 : this.x1b_1.hashCode()) | 0;
      return result;
    }
    equals(other) {
      if (this === other)
        return true;
      if (!(other instanceof ArenaMini))
        return false;
      if (!(this.r1b_1 === other.r1b_1))
        return false;
      if (!(this.s1b_1 === other.s1b_1))
        return false;
      if (!equals(this.t1b_1, other.t1b_1))
        return false;
      if (!equals(this.u1b_1, other.u1b_1))
        return false;
      if (!(this.v1b_1 == other.v1b_1))
        return false;
      if (!(this.w1b_1 == other.w1b_1))
        return false;
      if (!equals(this.x1b_1, other.x1b_1))
        return false;
      return true;
    }
    static y1b(seen0, kind, owner, involved, done, myInput, card, goInMs, serializationConstructorMarker) {
      Companion_getInstance_43();
      if (!(15 === (15 & seen0))) {
        throwMissingFieldException(seen0, 15, $serializer_getInstance_20().p1b_1);
      }
      var $this = createThis(this);
      $this.r1b_1 = kind;
      $this.s1b_1 = owner;
      $this.t1b_1 = involved;
      $this.u1b_1 = done;
      if (0 === (seen0 & 16))
        $this.v1b_1 = null;
      else
        $this.v1b_1 = myInput;
      if (0 === (seen0 & 32))
        $this.w1b_1 = null;
      else
        $this.w1b_1 = card;
      if (0 === (seen0 & 64))
        $this.x1b_1 = null;
      else
        $this.x1b_1 = goInMs;
      return $this;
    }
  }
  class Companion_44 {
    constructor() {
      Companion_instance_44 = this;
      var tmp = this;
      var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.z1b_1 = [null, lazy(tmp_0, SyncGroup$Companion$$childSerializers$_anonymous__1ji9tm)];
    }
  }
  class $serializer_21 {
    constructor() {
      $serializer_instance_21 = this;
      var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.zen.partygame.game.SyncGroup', this, 2);
      tmp0_serialDesc.eo('answer', false);
      tmp0_serialDesc.eo('ids', false);
      this.a1c_1 = tmp0_serialDesc;
    }
    b1c(encoder, value) {
      var tmp0_desc = this.a1c_1;
      var tmp1_output = encoder.ik(tmp0_desc);
      var tmp2_cached = Companion_getInstance_44().z1b_1;
      tmp1_output.fl(tmp0_desc, 0, value.q16_1);
      tmp1_output.gl(tmp0_desc, 1, tmp2_cached[1].d2(), value.r16_1);
      tmp1_output.jk(tmp0_desc);
    }
    tg(encoder, value) {
      return this.b1c(encoder, value instanceof SyncGroup ? value : THROW_CCE());
    }
    ug(decoder) {
      var tmp0_desc = this.a1c_1;
      var tmp1_flag = true;
      var tmp2_index = 0;
      var tmp3_bitMask0 = 0;
      var tmp4_local0 = null;
      var tmp5_local1 = null;
      var tmp6_input = decoder.ik(tmp0_desc);
      var tmp7_cached = Companion_getInstance_44().z1b_1;
      if (tmp6_input.rk()) {
        tmp4_local0 = tmp6_input.mk(tmp0_desc, 0);
        tmp3_bitMask0 = tmp3_bitMask0 | 1;
        tmp5_local1 = tmp6_input.nk(tmp0_desc, 1, tmp7_cached[1].d2(), tmp5_local1);
        tmp3_bitMask0 = tmp3_bitMask0 | 2;
      } else
        while (tmp1_flag) {
          tmp2_index = tmp6_input.sk(tmp0_desc);
          switch (tmp2_index) {
            case -1:
              tmp1_flag = false;
              break;
            case 0:
              tmp4_local0 = tmp6_input.mk(tmp0_desc, 0);
              tmp3_bitMask0 = tmp3_bitMask0 | 1;
              break;
            case 1:
              tmp5_local1 = tmp6_input.nk(tmp0_desc, 1, tmp7_cached[1].d2(), tmp5_local1);
              tmp3_bitMask0 = tmp3_bitMask0 | 2;
              break;
            default:
              throw UnknownFieldException.gi(tmp2_index);
          }
        }
      tmp6_input.jk(tmp0_desc);
      return SyncGroup.c1c(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
    }
    sg() {
      return this.a1c_1;
    }
    to() {
      var tmp0_cached = Companion_getInstance_44().z1b_1;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      return [StringSerializer_getInstance(), tmp0_cached[1].d2()];
    }
  }
  class SyncGroup {
    constructor(answer, ids) {
      Companion_getInstance_44();
      this.q16_1 = answer;
      this.r16_1 = ids;
    }
    toString() {
      return 'SyncGroup(answer=' + this.q16_1 + ', ids=' + toString_1(this.r16_1) + ')';
    }
    hashCode() {
      var result = getStringHashCode(this.q16_1);
      result = imul(result, 31) + hashCode_0(this.r16_1) | 0;
      return result;
    }
    equals(other) {
      if (this === other)
        return true;
      if (!(other instanceof SyncGroup))
        return false;
      if (!(this.q16_1 === other.q16_1))
        return false;
      if (!equals(this.r16_1, other.r16_1))
        return false;
      return true;
    }
    static c1c(seen0, answer, ids, serializationConstructorMarker) {
      Companion_getInstance_44();
      if (!(3 === (3 & seen0))) {
        throwMissingFieldException(seen0, 3, $serializer_getInstance_21().a1c_1);
      }
      var $this = createThis(this);
      $this.q16_1 = answer;
      $this.r16_1 = ids;
      return $this;
    }
  }
  class Companion_45 {}
  class $serializer_22 {
    constructor() {
      $serializer_instance_22 = this;
      var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.zen.partygame.game.RevealEntry', this, 3);
      tmp0_serialDesc.eo('id', false);
      tmp0_serialDesc.eo('word', false);
      tmp0_serialDesc.eo('spy', true);
      this.d1c_1 = tmp0_serialDesc;
    }
    e1c(encoder, value) {
      var tmp0_desc = this.d1c_1;
      var tmp1_output = encoder.ik(tmp0_desc);
      tmp1_output.fl(tmp0_desc, 0, value.f1c_1);
      tmp1_output.fl(tmp0_desc, 1, value.g1c_1);
      if (tmp1_output.ml(tmp0_desc, 2) ? true : !(value.h1c_1 === false)) {
        tmp1_output.dl(tmp0_desc, 2, value.h1c_1);
      }
      tmp1_output.jk(tmp0_desc);
    }
    tg(encoder, value) {
      return this.e1c(encoder, value instanceof RevealEntry ? value : THROW_CCE());
    }
    ug(decoder) {
      var tmp0_desc = this.d1c_1;
      var tmp1_flag = true;
      var tmp2_index = 0;
      var tmp3_bitMask0 = 0;
      var tmp4_local0 = null;
      var tmp5_local1 = null;
      var tmp6_local2 = false;
      var tmp7_input = decoder.ik(tmp0_desc);
      if (tmp7_input.rk()) {
        tmp4_local0 = tmp7_input.mk(tmp0_desc, 0);
        tmp3_bitMask0 = tmp3_bitMask0 | 1;
        tmp5_local1 = tmp7_input.mk(tmp0_desc, 1);
        tmp3_bitMask0 = tmp3_bitMask0 | 2;
        tmp6_local2 = tmp7_input.kk(tmp0_desc, 2);
        tmp3_bitMask0 = tmp3_bitMask0 | 4;
      } else
        while (tmp1_flag) {
          tmp2_index = tmp7_input.sk(tmp0_desc);
          switch (tmp2_index) {
            case -1:
              tmp1_flag = false;
              break;
            case 0:
              tmp4_local0 = tmp7_input.mk(tmp0_desc, 0);
              tmp3_bitMask0 = tmp3_bitMask0 | 1;
              break;
            case 1:
              tmp5_local1 = tmp7_input.mk(tmp0_desc, 1);
              tmp3_bitMask0 = tmp3_bitMask0 | 2;
              break;
            case 2:
              tmp6_local2 = tmp7_input.kk(tmp0_desc, 2);
              tmp3_bitMask0 = tmp3_bitMask0 | 4;
              break;
            default:
              throw UnknownFieldException.gi(tmp2_index);
          }
        }
      tmp7_input.jk(tmp0_desc);
      return RevealEntry.i1c(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
    }
    sg() {
      return this.d1c_1;
    }
    to() {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      return [StringSerializer_getInstance(), StringSerializer_getInstance(), BooleanSerializer_getInstance()];
    }
  }
  class RevealEntry {
    constructor(id, word, spy) {
      spy = spy === VOID ? false : spy;
      this.f1c_1 = id;
      this.g1c_1 = word;
      this.h1c_1 = spy;
    }
    toString() {
      return 'RevealEntry(id=' + this.f1c_1 + ', word=' + this.g1c_1 + ', spy=' + this.h1c_1 + ')';
    }
    hashCode() {
      var result = getStringHashCode(this.f1c_1);
      result = imul(result, 31) + getStringHashCode(this.g1c_1) | 0;
      result = imul(result, 31) + getBooleanHashCode(this.h1c_1) | 0;
      return result;
    }
    equals(other) {
      if (this === other)
        return true;
      if (!(other instanceof RevealEntry))
        return false;
      if (!(this.f1c_1 === other.f1c_1))
        return false;
      if (!(this.g1c_1 === other.g1c_1))
        return false;
      if (!(this.h1c_1 === other.h1c_1))
        return false;
      return true;
    }
    static i1c(seen0, id, word, spy, serializationConstructorMarker) {
      if (!(3 === (3 & seen0))) {
        throwMissingFieldException(seen0, 3, $serializer_getInstance_22().d1c_1);
      }
      var $this = createThis(this);
      $this.f1c_1 = id;
      $this.g1c_1 = word;
      if (0 === (seen0 & 4))
        $this.h1c_1 = false;
      else
        $this.h1c_1 = spy;
      return $this;
    }
  }
  class Companion_46 {}
  class $serializer_23 {
    constructor() {
      $serializer_instance_23 = this;
      var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.zen.partygame.game.NgEntry', this, 4);
      tmp0_serialDesc.eo('id', false);
      tmp0_serialDesc.eo('word', false);
      tmp0_serialDesc.eo('out', false);
      tmp0_serialDesc.eo('outOrder', true);
      this.j1c_1 = tmp0_serialDesc;
    }
    k1c(encoder, value) {
      var tmp0_desc = this.j1c_1;
      var tmp1_output = encoder.ik(tmp0_desc);
      tmp1_output.fl(tmp0_desc, 0, value.l1c_1);
      tmp1_output.il(tmp0_desc, 1, StringSerializer_getInstance(), value.m1c_1);
      tmp1_output.dl(tmp0_desc, 2, value.n1c_1);
      if (tmp1_output.ml(tmp0_desc, 3) ? true : !(value.o1c_1 === 0)) {
        tmp1_output.el(tmp0_desc, 3, value.o1c_1);
      }
      tmp1_output.jk(tmp0_desc);
    }
    tg(encoder, value) {
      return this.k1c(encoder, value instanceof NgEntry ? value : THROW_CCE());
    }
    ug(decoder) {
      var tmp0_desc = this.j1c_1;
      var tmp1_flag = true;
      var tmp2_index = 0;
      var tmp3_bitMask0 = 0;
      var tmp4_local0 = null;
      var tmp5_local1 = null;
      var tmp6_local2 = false;
      var tmp7_local3 = 0;
      var tmp8_input = decoder.ik(tmp0_desc);
      if (tmp8_input.rk()) {
        tmp4_local0 = tmp8_input.mk(tmp0_desc, 0);
        tmp3_bitMask0 = tmp3_bitMask0 | 1;
        tmp5_local1 = tmp8_input.pk(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
        tmp3_bitMask0 = tmp3_bitMask0 | 2;
        tmp6_local2 = tmp8_input.kk(tmp0_desc, 2);
        tmp3_bitMask0 = tmp3_bitMask0 | 4;
        tmp7_local3 = tmp8_input.lk(tmp0_desc, 3);
        tmp3_bitMask0 = tmp3_bitMask0 | 8;
      } else
        while (tmp1_flag) {
          tmp2_index = tmp8_input.sk(tmp0_desc);
          switch (tmp2_index) {
            case -1:
              tmp1_flag = false;
              break;
            case 0:
              tmp4_local0 = tmp8_input.mk(tmp0_desc, 0);
              tmp3_bitMask0 = tmp3_bitMask0 | 1;
              break;
            case 1:
              tmp5_local1 = tmp8_input.pk(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
              tmp3_bitMask0 = tmp3_bitMask0 | 2;
              break;
            case 2:
              tmp6_local2 = tmp8_input.kk(tmp0_desc, 2);
              tmp3_bitMask0 = tmp3_bitMask0 | 4;
              break;
            case 3:
              tmp7_local3 = tmp8_input.lk(tmp0_desc, 3);
              tmp3_bitMask0 = tmp3_bitMask0 | 8;
              break;
            default:
              throw UnknownFieldException.gi(tmp2_index);
          }
        }
      tmp8_input.jk(tmp0_desc);
      return NgEntry.p1c(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
    }
    sg() {
      return this.j1c_1;
    }
    to() {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      return [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), BooleanSerializer_getInstance(), IntSerializer_getInstance()];
    }
  }
  class NgEntry {
    constructor(id, word, out, outOrder) {
      outOrder = outOrder === VOID ? 0 : outOrder;
      this.l1c_1 = id;
      this.m1c_1 = word;
      this.n1c_1 = out;
      this.o1c_1 = outOrder;
    }
    toString() {
      return 'NgEntry(id=' + this.l1c_1 + ', word=' + this.m1c_1 + ', out=' + this.n1c_1 + ', outOrder=' + this.o1c_1 + ')';
    }
    hashCode() {
      var result = getStringHashCode(this.l1c_1);
      result = imul(result, 31) + (this.m1c_1 == null ? 0 : getStringHashCode(this.m1c_1)) | 0;
      result = imul(result, 31) + getBooleanHashCode(this.n1c_1) | 0;
      result = imul(result, 31) + this.o1c_1 | 0;
      return result;
    }
    equals(other) {
      if (this === other)
        return true;
      if (!(other instanceof NgEntry))
        return false;
      if (!(this.l1c_1 === other.l1c_1))
        return false;
      if (!(this.m1c_1 == other.m1c_1))
        return false;
      if (!(this.n1c_1 === other.n1c_1))
        return false;
      if (!(this.o1c_1 === other.o1c_1))
        return false;
      return true;
    }
    static p1c(seen0, id, word, out, outOrder, serializationConstructorMarker) {
      if (!(7 === (7 & seen0))) {
        throwMissingFieldException(seen0, 7, $serializer_getInstance_23().j1c_1);
      }
      var $this = createThis(this);
      $this.l1c_1 = id;
      $this.m1c_1 = word;
      $this.n1c_1 = out;
      if (0 === (seen0 & 8))
        $this.o1c_1 = 0;
      else
        $this.o1c_1 = outOrder;
      return $this;
    }
  }
  class Companion_47 {
    constructor() {
      Companion_instance_47 = this;
      var tmp = this;
      var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.q1c_1 = [null, lazy(tmp_0, Screen$WwReveal$Companion$$childSerializers$_anonymous__pcf1ad), null];
    }
  }
  class $serializer_24 {
    constructor() {
      $serializer_instance_24 = this;
      var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('wwReveal', this, 3);
      tmp0_serialDesc.eo('word', false);
      tmp0_serialDesc.eo('confirmed', false);
      tmp0_serialDesc.eo('spy', true);
      this.r1c_1 = tmp0_serialDesc;
    }
    s1c(encoder, value) {
      var tmp0_desc = this.r1c_1;
      var tmp1_output = encoder.ik(tmp0_desc);
      var tmp2_cached = Companion_getInstance_47().q1c_1;
      tmp1_output.fl(tmp0_desc, 0, value.t1c_1);
      tmp1_output.gl(tmp0_desc, 1, tmp2_cached[1].d2(), value.u1c_1);
      if (tmp1_output.ml(tmp0_desc, 2) ? true : !(value.v1c_1 === false)) {
        tmp1_output.dl(tmp0_desc, 2, value.v1c_1);
      }
      tmp1_output.jk(tmp0_desc);
    }
    tg(encoder, value) {
      return this.s1c(encoder, value instanceof WwReveal ? value : THROW_CCE());
    }
    ug(decoder) {
      var tmp0_desc = this.r1c_1;
      var tmp1_flag = true;
      var tmp2_index = 0;
      var tmp3_bitMask0 = 0;
      var tmp4_local0 = null;
      var tmp5_local1 = null;
      var tmp6_local2 = false;
      var tmp7_input = decoder.ik(tmp0_desc);
      var tmp8_cached = Companion_getInstance_47().q1c_1;
      if (tmp7_input.rk()) {
        tmp4_local0 = tmp7_input.mk(tmp0_desc, 0);
        tmp3_bitMask0 = tmp3_bitMask0 | 1;
        tmp5_local1 = tmp7_input.nk(tmp0_desc, 1, tmp8_cached[1].d2(), tmp5_local1);
        tmp3_bitMask0 = tmp3_bitMask0 | 2;
        tmp6_local2 = tmp7_input.kk(tmp0_desc, 2);
        tmp3_bitMask0 = tmp3_bitMask0 | 4;
      } else
        while (tmp1_flag) {
          tmp2_index = tmp7_input.sk(tmp0_desc);
          switch (tmp2_index) {
            case -1:
              tmp1_flag = false;
              break;
            case 0:
              tmp4_local0 = tmp7_input.mk(tmp0_desc, 0);
              tmp3_bitMask0 = tmp3_bitMask0 | 1;
              break;
            case 1:
              tmp5_local1 = tmp7_input.nk(tmp0_desc, 1, tmp8_cached[1].d2(), tmp5_local1);
              tmp3_bitMask0 = tmp3_bitMask0 | 2;
              break;
            case 2:
              tmp6_local2 = tmp7_input.kk(tmp0_desc, 2);
              tmp3_bitMask0 = tmp3_bitMask0 | 4;
              break;
            default:
              throw UnknownFieldException.gi(tmp2_index);
          }
        }
      tmp7_input.jk(tmp0_desc);
      return WwReveal.w1c(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
    }
    sg() {
      return this.r1c_1;
    }
    to() {
      var tmp0_cached = Companion_getInstance_47().q1c_1;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      return [StringSerializer_getInstance(), tmp0_cached[1].d2(), BooleanSerializer_getInstance()];
    }
  }
  class Companion_48 {
    constructor() {
      Companion_instance_48 = this;
      var tmp = this;
      var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
      var tmp_1 = lazy(tmp_0, Screen$WwRevealLocal$Companion$$childSerializers$_anonymous__sgywik);
      var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.x1c_1 = [tmp_1, lazy(tmp_2, Screen$WwRevealLocal$Companion$$childSerializers$_anonymous__sgywik_0)];
    }
  }
  class $serializer_25 {
    constructor() {
      $serializer_instance_25 = this;
      var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('wwRevealLocal', this, 2);
      tmp0_serialDesc.eo('entries', false);
      tmp0_serialDesc.eo('confirmed', false);
      this.y1c_1 = tmp0_serialDesc;
    }
    z1c(encoder, value) {
      var tmp0_desc = this.y1c_1;
      var tmp1_output = encoder.ik(tmp0_desc);
      var tmp2_cached = Companion_getInstance_48().x1c_1;
      tmp1_output.gl(tmp0_desc, 0, tmp2_cached[0].d2(), value.a1d_1);
      tmp1_output.gl(tmp0_desc, 1, tmp2_cached[1].d2(), value.b1d_1);
      tmp1_output.jk(tmp0_desc);
    }
    tg(encoder, value) {
      return this.z1c(encoder, value instanceof WwRevealLocal ? value : THROW_CCE());
    }
    ug(decoder) {
      var tmp0_desc = this.y1c_1;
      var tmp1_flag = true;
      var tmp2_index = 0;
      var tmp3_bitMask0 = 0;
      var tmp4_local0 = null;
      var tmp5_local1 = null;
      var tmp6_input = decoder.ik(tmp0_desc);
      var tmp7_cached = Companion_getInstance_48().x1c_1;
      if (tmp6_input.rk()) {
        tmp4_local0 = tmp6_input.nk(tmp0_desc, 0, tmp7_cached[0].d2(), tmp4_local0);
        tmp3_bitMask0 = tmp3_bitMask0 | 1;
        tmp5_local1 = tmp6_input.nk(tmp0_desc, 1, tmp7_cached[1].d2(), tmp5_local1);
        tmp3_bitMask0 = tmp3_bitMask0 | 2;
      } else
        while (tmp1_flag) {
          tmp2_index = tmp6_input.sk(tmp0_desc);
          switch (tmp2_index) {
            case -1:
              tmp1_flag = false;
              break;
            case 0:
              tmp4_local0 = tmp6_input.nk(tmp0_desc, 0, tmp7_cached[0].d2(), tmp4_local0);
              tmp3_bitMask0 = tmp3_bitMask0 | 1;
              break;
            case 1:
              tmp5_local1 = tmp6_input.nk(tmp0_desc, 1, tmp7_cached[1].d2(), tmp5_local1);
              tmp3_bitMask0 = tmp3_bitMask0 | 2;
              break;
            default:
              throw UnknownFieldException.gi(tmp2_index);
          }
        }
      tmp6_input.jk(tmp0_desc);
      return WwRevealLocal.c1d(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
    }
    sg() {
      return this.y1c_1;
    }
    to() {
      var tmp0_cached = Companion_getInstance_48().x1c_1;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      return [tmp0_cached[0].d2(), tmp0_cached[1].d2()];
    }
  }
  class Companion_49 {}
  class $serializer_26 {
    constructor() {
      $serializer_instance_26 = this;
      var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('wwTalk', this, 2);
      tmp0_serialDesc.eo('word', false);
      tmp0_serialDesc.eo('spy', true);
      this.d1d_1 = tmp0_serialDesc;
    }
    e1d(encoder, value) {
      var tmp0_desc = this.d1d_1;
      var tmp1_output = encoder.ik(tmp0_desc);
      tmp1_output.il(tmp0_desc, 0, StringSerializer_getInstance(), value.f1d_1);
      if (tmp1_output.ml(tmp0_desc, 1) ? true : !(value.g1d_1 === false)) {
        tmp1_output.dl(tmp0_desc, 1, value.g1d_1);
      }
      tmp1_output.jk(tmp0_desc);
    }
    tg(encoder, value) {
      return this.e1d(encoder, value instanceof WwTalk ? value : THROW_CCE());
    }
    ug(decoder) {
      var tmp0_desc = this.d1d_1;
      var tmp1_flag = true;
      var tmp2_index = 0;
      var tmp3_bitMask0 = 0;
      var tmp4_local0 = null;
      var tmp5_local1 = false;
      var tmp6_input = decoder.ik(tmp0_desc);
      if (tmp6_input.rk()) {
        tmp4_local0 = tmp6_input.pk(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
        tmp3_bitMask0 = tmp3_bitMask0 | 1;
        tmp5_local1 = tmp6_input.kk(tmp0_desc, 1);
        tmp3_bitMask0 = tmp3_bitMask0 | 2;
      } else
        while (tmp1_flag) {
          tmp2_index = tmp6_input.sk(tmp0_desc);
          switch (tmp2_index) {
            case -1:
              tmp1_flag = false;
              break;
            case 0:
              tmp4_local0 = tmp6_input.pk(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
              tmp3_bitMask0 = tmp3_bitMask0 | 1;
              break;
            case 1:
              tmp5_local1 = tmp6_input.kk(tmp0_desc, 1);
              tmp3_bitMask0 = tmp3_bitMask0 | 2;
              break;
            default:
              throw UnknownFieldException.gi(tmp2_index);
          }
        }
      tmp6_input.jk(tmp0_desc);
      return WwTalk.h1d(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
    }
    sg() {
      return this.d1d_1;
    }
    to() {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      return [get_nullable(StringSerializer_getInstance()), BooleanSerializer_getInstance()];
    }
  }
  class Companion_50 {
    constructor() {
      Companion_instance_50 = this;
      var tmp = this;
      var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
      var tmp_1 = lazy(tmp_0, Screen$WwVote$Companion$$childSerializers$_anonymous__s3tbrs);
      var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.i1d_1 = [tmp_1, null, lazy(tmp_2, Screen$WwVote$Companion$$childSerializers$_anonymous__s3tbrs_0), null];
    }
  }
  class $serializer_27 {
    constructor() {
      $serializer_instance_27 = this;
      var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('wwVote', this, 4);
      tmp0_serialDesc.eo('candidates', false);
      tmp0_serialDesc.eo('myVote', false);
      tmp0_serialDesc.eo('voted', false);
      tmp0_serialDesc.eo('runoff', false);
      this.j1d_1 = tmp0_serialDesc;
    }
    k1d(encoder, value) {
      var tmp0_desc = this.j1d_1;
      var tmp1_output = encoder.ik(tmp0_desc);
      var tmp2_cached = Companion_getInstance_50().i1d_1;
      tmp1_output.gl(tmp0_desc, 0, tmp2_cached[0].d2(), value.l1d_1);
      tmp1_output.il(tmp0_desc, 1, StringSerializer_getInstance(), value.m1d_1);
      tmp1_output.gl(tmp0_desc, 2, tmp2_cached[2].d2(), value.n1d_1);
      tmp1_output.dl(tmp0_desc, 3, value.o1d_1);
      tmp1_output.jk(tmp0_desc);
    }
    tg(encoder, value) {
      return this.k1d(encoder, value instanceof WwVote ? value : THROW_CCE());
    }
    ug(decoder) {
      var tmp0_desc = this.j1d_1;
      var tmp1_flag = true;
      var tmp2_index = 0;
      var tmp3_bitMask0 = 0;
      var tmp4_local0 = null;
      var tmp5_local1 = null;
      var tmp6_local2 = null;
      var tmp7_local3 = false;
      var tmp8_input = decoder.ik(tmp0_desc);
      var tmp9_cached = Companion_getInstance_50().i1d_1;
      if (tmp8_input.rk()) {
        tmp4_local0 = tmp8_input.nk(tmp0_desc, 0, tmp9_cached[0].d2(), tmp4_local0);
        tmp3_bitMask0 = tmp3_bitMask0 | 1;
        tmp5_local1 = tmp8_input.pk(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
        tmp3_bitMask0 = tmp3_bitMask0 | 2;
        tmp6_local2 = tmp8_input.nk(tmp0_desc, 2, tmp9_cached[2].d2(), tmp6_local2);
        tmp3_bitMask0 = tmp3_bitMask0 | 4;
        tmp7_local3 = tmp8_input.kk(tmp0_desc, 3);
        tmp3_bitMask0 = tmp3_bitMask0 | 8;
      } else
        while (tmp1_flag) {
          tmp2_index = tmp8_input.sk(tmp0_desc);
          switch (tmp2_index) {
            case -1:
              tmp1_flag = false;
              break;
            case 0:
              tmp4_local0 = tmp8_input.nk(tmp0_desc, 0, tmp9_cached[0].d2(), tmp4_local0);
              tmp3_bitMask0 = tmp3_bitMask0 | 1;
              break;
            case 1:
              tmp5_local1 = tmp8_input.pk(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
              tmp3_bitMask0 = tmp3_bitMask0 | 2;
              break;
            case 2:
              tmp6_local2 = tmp8_input.nk(tmp0_desc, 2, tmp9_cached[2].d2(), tmp6_local2);
              tmp3_bitMask0 = tmp3_bitMask0 | 4;
              break;
            case 3:
              tmp7_local3 = tmp8_input.kk(tmp0_desc, 3);
              tmp3_bitMask0 = tmp3_bitMask0 | 8;
              break;
            default:
              throw UnknownFieldException.gi(tmp2_index);
          }
        }
      tmp8_input.jk(tmp0_desc);
      return WwVote.p1d(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
    }
    sg() {
      return this.j1d_1;
    }
    to() {
      var tmp0_cached = Companion_getInstance_50().i1d_1;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      return [tmp0_cached[0].d2(), get_nullable(StringSerializer_getInstance()), tmp0_cached[2].d2(), BooleanSerializer_getInstance()];
    }
  }
  class Companion_51 {
    constructor() {
      Companion_instance_51 = this;
      var tmp = this;
      var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.q1d_1 = [lazy(tmp_0, Screen$WwAccuse$Companion$$childSerializers$_anonymous__ohlpyk)];
    }
  }
  class $serializer_28 {
    constructor() {
      $serializer_instance_28 = this;
      var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('wwAccuse', this, 1);
      tmp0_serialDesc.eo('candidates', false);
      this.r1d_1 = tmp0_serialDesc;
    }
    s1d(encoder, value) {
      var tmp0_desc = this.r1d_1;
      var tmp1_output = encoder.ik(tmp0_desc);
      var tmp2_cached = Companion_getInstance_51().q1d_1;
      tmp1_output.gl(tmp0_desc, 0, tmp2_cached[0].d2(), value.t1d_1);
      tmp1_output.jk(tmp0_desc);
    }
    tg(encoder, value) {
      return this.s1d(encoder, value instanceof WwAccuse ? value : THROW_CCE());
    }
    ug(decoder) {
      var tmp0_desc = this.r1d_1;
      var tmp1_flag = true;
      var tmp2_index = 0;
      var tmp3_bitMask0 = 0;
      var tmp4_local0 = null;
      var tmp5_input = decoder.ik(tmp0_desc);
      var tmp6_cached = Companion_getInstance_51().q1d_1;
      if (tmp5_input.rk()) {
        tmp4_local0 = tmp5_input.nk(tmp0_desc, 0, tmp6_cached[0].d2(), tmp4_local0);
        tmp3_bitMask0 = tmp3_bitMask0 | 1;
      } else
        while (tmp1_flag) {
          tmp2_index = tmp5_input.sk(tmp0_desc);
          switch (tmp2_index) {
            case -1:
              tmp1_flag = false;
              break;
            case 0:
              tmp4_local0 = tmp5_input.nk(tmp0_desc, 0, tmp6_cached[0].d2(), tmp4_local0);
              tmp3_bitMask0 = tmp3_bitMask0 | 1;
              break;
            default:
              throw UnknownFieldException.gi(tmp2_index);
          }
        }
      tmp5_input.jk(tmp0_desc);
      return WwAccuse.u1d(tmp3_bitMask0, tmp4_local0, null);
    }
    sg() {
      return this.r1d_1;
    }
    to() {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      return [Companion_getInstance_51().q1d_1[0].d2()];
    }
  }
  class Companion_52 {
    constructor() {
      Companion_instance_52 = this;
      var tmp = this;
      var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
      var tmp_1 = lazy(tmp_0, Screen$WwGuess$Companion$$childSerializers$_anonymous__8z1tud);
      var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.v1d_1 = [tmp_1, null, lazy(tmp_2, Screen$WwGuess$Companion$$childSerializers$_anonymous__8z1tud_0)];
    }
  }
  class $serializer_29 {
    constructor() {
      $serializer_instance_29 = this;
      var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('wwGuess', this, 3);
      tmp0_serialDesc.eo('wolves', false);
      tmp0_serialDesc.eo('iAmWolf', false);
      tmp0_serialDesc.eo('options', true);
      this.w1d_1 = tmp0_serialDesc;
    }
    x1d(encoder, value) {
      var tmp0_desc = this.w1d_1;
      var tmp1_output = encoder.ik(tmp0_desc);
      var tmp2_cached = Companion_getInstance_52().v1d_1;
      tmp1_output.gl(tmp0_desc, 0, tmp2_cached[0].d2(), value.y1d_1);
      tmp1_output.dl(tmp0_desc, 1, value.z1d_1);
      if (tmp1_output.ml(tmp0_desc, 2) ? true : !equals(value.a1e_1, emptyList())) {
        tmp1_output.gl(tmp0_desc, 2, tmp2_cached[2].d2(), value.a1e_1);
      }
      tmp1_output.jk(tmp0_desc);
    }
    tg(encoder, value) {
      return this.x1d(encoder, value instanceof WwGuess ? value : THROW_CCE());
    }
    ug(decoder) {
      var tmp0_desc = this.w1d_1;
      var tmp1_flag = true;
      var tmp2_index = 0;
      var tmp3_bitMask0 = 0;
      var tmp4_local0 = null;
      var tmp5_local1 = false;
      var tmp6_local2 = null;
      var tmp7_input = decoder.ik(tmp0_desc);
      var tmp8_cached = Companion_getInstance_52().v1d_1;
      if (tmp7_input.rk()) {
        tmp4_local0 = tmp7_input.nk(tmp0_desc, 0, tmp8_cached[0].d2(), tmp4_local0);
        tmp3_bitMask0 = tmp3_bitMask0 | 1;
        tmp5_local1 = tmp7_input.kk(tmp0_desc, 1);
        tmp3_bitMask0 = tmp3_bitMask0 | 2;
        tmp6_local2 = tmp7_input.nk(tmp0_desc, 2, tmp8_cached[2].d2(), tmp6_local2);
        tmp3_bitMask0 = tmp3_bitMask0 | 4;
      } else
        while (tmp1_flag) {
          tmp2_index = tmp7_input.sk(tmp0_desc);
          switch (tmp2_index) {
            case -1:
              tmp1_flag = false;
              break;
            case 0:
              tmp4_local0 = tmp7_input.nk(tmp0_desc, 0, tmp8_cached[0].d2(), tmp4_local0);
              tmp3_bitMask0 = tmp3_bitMask0 | 1;
              break;
            case 1:
              tmp5_local1 = tmp7_input.kk(tmp0_desc, 1);
              tmp3_bitMask0 = tmp3_bitMask0 | 2;
              break;
            case 2:
              tmp6_local2 = tmp7_input.nk(tmp0_desc, 2, tmp8_cached[2].d2(), tmp6_local2);
              tmp3_bitMask0 = tmp3_bitMask0 | 4;
              break;
            default:
              throw UnknownFieldException.gi(tmp2_index);
          }
        }
      tmp7_input.jk(tmp0_desc);
      return WwGuess.b1e(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
    }
    sg() {
      return this.w1d_1;
    }
    to() {
      var tmp0_cached = Companion_getInstance_52().v1d_1;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      return [tmp0_cached[0].d2(), BooleanSerializer_getInstance(), tmp0_cached[2].d2()];
    }
  }
  class Companion_53 {
    constructor() {
      Companion_instance_53 = this;
      var tmp = this;
      var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
      var tmp_1 = lazy(tmp_0, Screen$WwResult$Companion$$childSerializers$_anonymous__se4n4b);
      var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
      var tmp_3 = lazy(tmp_2, Screen$WwResult$Companion$$childSerializers$_anonymous__se4n4b_0);
      var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
      var tmp_5 = lazy(tmp_4, Screen$WwResult$Companion$$childSerializers$_anonymous__se4n4b_1);
      var tmp_6 = LazyThreadSafetyMode_PUBLICATION_getInstance();
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.c1e_1 = [null, null, tmp_1, null, tmp_3, tmp_5, lazy(tmp_6, Screen$WwResult$Companion$$childSerializers$_anonymous__se4n4b_2), null, null];
    }
  }
  class $serializer_30 {
    constructor() {
      $serializer_instance_30 = this;
      var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('wwResult', this, 9);
      tmp0_serialDesc.eo('citizenWord', false);
      tmp0_serialDesc.eo('wolfWord', false);
      tmp0_serialDesc.eo('wolves', false);
      tmp0_serialDesc.eo('accused', false);
      tmp0_serialDesc.eo('tally', false);
      tmp0_serialDesc.eo('winner', false);
      tmp0_serialDesc.eo('reason', false);
      tmp0_serialDesc.eo('myWord', false);
      tmp0_serialDesc.eo('spyGuess', true);
      this.d1e_1 = tmp0_serialDesc;
    }
    e1e(encoder, value) {
      var tmp0_desc = this.d1e_1;
      var tmp1_output = encoder.ik(tmp0_desc);
      var tmp2_cached = Companion_getInstance_53().c1e_1;
      tmp1_output.fl(tmp0_desc, 0, value.y17_1);
      tmp1_output.fl(tmp0_desc, 1, value.z17_1);
      tmp1_output.gl(tmp0_desc, 2, tmp2_cached[2].d2(), value.a18_1);
      tmp1_output.il(tmp0_desc, 3, StringSerializer_getInstance(), value.b18_1);
      tmp1_output.gl(tmp0_desc, 4, tmp2_cached[4].d2(), value.c18_1);
      tmp1_output.gl(tmp0_desc, 5, tmp2_cached[5].d2(), value.d18_1);
      tmp1_output.gl(tmp0_desc, 6, tmp2_cached[6].d2(), value.e18_1);
      tmp1_output.il(tmp0_desc, 7, StringSerializer_getInstance(), value.f18_1);
      if (tmp1_output.ml(tmp0_desc, 8) ? true : !(value.g18_1 == null)) {
        tmp1_output.il(tmp0_desc, 8, StringSerializer_getInstance(), value.g18_1);
      }
      tmp1_output.jk(tmp0_desc);
    }
    tg(encoder, value) {
      return this.e1e(encoder, value instanceof WwResult ? value : THROW_CCE());
    }
    ug(decoder) {
      var tmp0_desc = this.d1e_1;
      var tmp1_flag = true;
      var tmp2_index = 0;
      var tmp3_bitMask0 = 0;
      var tmp4_local0 = null;
      var tmp5_local1 = null;
      var tmp6_local2 = null;
      var tmp7_local3 = null;
      var tmp8_local4 = null;
      var tmp9_local5 = null;
      var tmp10_local6 = null;
      var tmp11_local7 = null;
      var tmp12_local8 = null;
      var tmp13_input = decoder.ik(tmp0_desc);
      var tmp14_cached = Companion_getInstance_53().c1e_1;
      if (tmp13_input.rk()) {
        tmp4_local0 = tmp13_input.mk(tmp0_desc, 0);
        tmp3_bitMask0 = tmp3_bitMask0 | 1;
        tmp5_local1 = tmp13_input.mk(tmp0_desc, 1);
        tmp3_bitMask0 = tmp3_bitMask0 | 2;
        tmp6_local2 = tmp13_input.nk(tmp0_desc, 2, tmp14_cached[2].d2(), tmp6_local2);
        tmp3_bitMask0 = tmp3_bitMask0 | 4;
        tmp7_local3 = tmp13_input.pk(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
        tmp3_bitMask0 = tmp3_bitMask0 | 8;
        tmp8_local4 = tmp13_input.nk(tmp0_desc, 4, tmp14_cached[4].d2(), tmp8_local4);
        tmp3_bitMask0 = tmp3_bitMask0 | 16;
        tmp9_local5 = tmp13_input.nk(tmp0_desc, 5, tmp14_cached[5].d2(), tmp9_local5);
        tmp3_bitMask0 = tmp3_bitMask0 | 32;
        tmp10_local6 = tmp13_input.nk(tmp0_desc, 6, tmp14_cached[6].d2(), tmp10_local6);
        tmp3_bitMask0 = tmp3_bitMask0 | 64;
        tmp11_local7 = tmp13_input.pk(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
        tmp3_bitMask0 = tmp3_bitMask0 | 128;
        tmp12_local8 = tmp13_input.pk(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
        tmp3_bitMask0 = tmp3_bitMask0 | 256;
      } else
        while (tmp1_flag) {
          tmp2_index = tmp13_input.sk(tmp0_desc);
          switch (tmp2_index) {
            case -1:
              tmp1_flag = false;
              break;
            case 0:
              tmp4_local0 = tmp13_input.mk(tmp0_desc, 0);
              tmp3_bitMask0 = tmp3_bitMask0 | 1;
              break;
            case 1:
              tmp5_local1 = tmp13_input.mk(tmp0_desc, 1);
              tmp3_bitMask0 = tmp3_bitMask0 | 2;
              break;
            case 2:
              tmp6_local2 = tmp13_input.nk(tmp0_desc, 2, tmp14_cached[2].d2(), tmp6_local2);
              tmp3_bitMask0 = tmp3_bitMask0 | 4;
              break;
            case 3:
              tmp7_local3 = tmp13_input.pk(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
              tmp3_bitMask0 = tmp3_bitMask0 | 8;
              break;
            case 4:
              tmp8_local4 = tmp13_input.nk(tmp0_desc, 4, tmp14_cached[4].d2(), tmp8_local4);
              tmp3_bitMask0 = tmp3_bitMask0 | 16;
              break;
            case 5:
              tmp9_local5 = tmp13_input.nk(tmp0_desc, 5, tmp14_cached[5].d2(), tmp9_local5);
              tmp3_bitMask0 = tmp3_bitMask0 | 32;
              break;
            case 6:
              tmp10_local6 = tmp13_input.nk(tmp0_desc, 6, tmp14_cached[6].d2(), tmp10_local6);
              tmp3_bitMask0 = tmp3_bitMask0 | 64;
              break;
            case 7:
              tmp11_local7 = tmp13_input.pk(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
              tmp3_bitMask0 = tmp3_bitMask0 | 128;
              break;
            case 8:
              tmp12_local8 = tmp13_input.pk(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
              tmp3_bitMask0 = tmp3_bitMask0 | 256;
              break;
            default:
              throw UnknownFieldException.gi(tmp2_index);
          }
        }
      tmp13_input.jk(tmp0_desc);
      return WwResult.f1e(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, null);
    }
    sg() {
      return this.d1e_1;
    }
    to() {
      var tmp0_cached = Companion_getInstance_53().c1e_1;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      return [StringSerializer_getInstance(), StringSerializer_getInstance(), tmp0_cached[2].d2(), get_nullable(StringSerializer_getInstance()), tmp0_cached[4].d2(), tmp0_cached[5].d2(), tmp0_cached[6].d2(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
    }
  }
  class Companion_54 {
    constructor() {
      Companion_instance_54 = this;
      var tmp = this;
      var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.g1e_1 = [lazy(tmp_0, Screen$NgPlay$Companion$$childSerializers$_anonymous__ry96kb), null];
    }
  }
  class $serializer_31 {
    constructor() {
      $serializer_instance_31 = this;
      var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('ngPlay', this, 2);
      tmp0_serialDesc.eo('entries', false);
      tmp0_serialDesc.eo('myOut', false);
      this.h1e_1 = tmp0_serialDesc;
    }
    i1e(encoder, value) {
      var tmp0_desc = this.h1e_1;
      var tmp1_output = encoder.ik(tmp0_desc);
      var tmp2_cached = Companion_getInstance_54().g1e_1;
      tmp1_output.gl(tmp0_desc, 0, tmp2_cached[0].d2(), value.j1e_1);
      tmp1_output.dl(tmp0_desc, 1, value.k1e_1);
      tmp1_output.jk(tmp0_desc);
    }
    tg(encoder, value) {
      return this.i1e(encoder, value instanceof NgPlay ? value : THROW_CCE());
    }
    ug(decoder) {
      var tmp0_desc = this.h1e_1;
      var tmp1_flag = true;
      var tmp2_index = 0;
      var tmp3_bitMask0 = 0;
      var tmp4_local0 = null;
      var tmp5_local1 = false;
      var tmp6_input = decoder.ik(tmp0_desc);
      var tmp7_cached = Companion_getInstance_54().g1e_1;
      if (tmp6_input.rk()) {
        tmp4_local0 = tmp6_input.nk(tmp0_desc, 0, tmp7_cached[0].d2(), tmp4_local0);
        tmp3_bitMask0 = tmp3_bitMask0 | 1;
        tmp5_local1 = tmp6_input.kk(tmp0_desc, 1);
        tmp3_bitMask0 = tmp3_bitMask0 | 2;
      } else
        while (tmp1_flag) {
          tmp2_index = tmp6_input.sk(tmp0_desc);
          switch (tmp2_index) {
            case -1:
              tmp1_flag = false;
              break;
            case 0:
              tmp4_local0 = tmp6_input.nk(tmp0_desc, 0, tmp7_cached[0].d2(), tmp4_local0);
              tmp3_bitMask0 = tmp3_bitMask0 | 1;
              break;
            case 1:
              tmp5_local1 = tmp6_input.kk(tmp0_desc, 1);
              tmp3_bitMask0 = tmp3_bitMask0 | 2;
              break;
            default:
              throw UnknownFieldException.gi(tmp2_index);
          }
        }
      tmp6_input.jk(tmp0_desc);
      return NgPlay.l1e(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
    }
    sg() {
      return this.h1e_1;
    }
    to() {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      return [Companion_getInstance_54().g1e_1[0].d2(), BooleanSerializer_getInstance()];
    }
  }
  class Companion_55 {
    constructor() {
      Companion_instance_55 = this;
      var tmp = this;
      var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
      var tmp_1 = lazy(tmp_0, Screen$NgResult$Companion$$childSerializers$_anonymous__1tmlgk);
      var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.m1e_1 = [tmp_1, lazy(tmp_2, Screen$NgResult$Companion$$childSerializers$_anonymous__1tmlgk_0)];
    }
  }
  class $serializer_32 {
    constructor() {
      $serializer_instance_32 = this;
      var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('ngResult', this, 2);
      tmp0_serialDesc.eo('entries', false);
      tmp0_serialDesc.eo('winners', false);
      this.n1e_1 = tmp0_serialDesc;
    }
    o1e(encoder, value) {
      var tmp0_desc = this.n1e_1;
      var tmp1_output = encoder.ik(tmp0_desc);
      var tmp2_cached = Companion_getInstance_55().m1e_1;
      tmp1_output.gl(tmp0_desc, 0, tmp2_cached[0].d2(), value.p1e_1);
      tmp1_output.gl(tmp0_desc, 1, tmp2_cached[1].d2(), value.q1e_1);
      tmp1_output.jk(tmp0_desc);
    }
    tg(encoder, value) {
      return this.o1e(encoder, value instanceof NgResult ? value : THROW_CCE());
    }
    ug(decoder) {
      var tmp0_desc = this.n1e_1;
      var tmp1_flag = true;
      var tmp2_index = 0;
      var tmp3_bitMask0 = 0;
      var tmp4_local0 = null;
      var tmp5_local1 = null;
      var tmp6_input = decoder.ik(tmp0_desc);
      var tmp7_cached = Companion_getInstance_55().m1e_1;
      if (tmp6_input.rk()) {
        tmp4_local0 = tmp6_input.nk(tmp0_desc, 0, tmp7_cached[0].d2(), tmp4_local0);
        tmp3_bitMask0 = tmp3_bitMask0 | 1;
        tmp5_local1 = tmp6_input.nk(tmp0_desc, 1, tmp7_cached[1].d2(), tmp5_local1);
        tmp3_bitMask0 = tmp3_bitMask0 | 2;
      } else
        while (tmp1_flag) {
          tmp2_index = tmp6_input.sk(tmp0_desc);
          switch (tmp2_index) {
            case -1:
              tmp1_flag = false;
              break;
            case 0:
              tmp4_local0 = tmp6_input.nk(tmp0_desc, 0, tmp7_cached[0].d2(), tmp4_local0);
              tmp3_bitMask0 = tmp3_bitMask0 | 1;
              break;
            case 1:
              tmp5_local1 = tmp6_input.nk(tmp0_desc, 1, tmp7_cached[1].d2(), tmp5_local1);
              tmp3_bitMask0 = tmp3_bitMask0 | 2;
              break;
            default:
              throw UnknownFieldException.gi(tmp2_index);
          }
        }
      tmp6_input.jk(tmp0_desc);
      return NgResult.r1e(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
    }
    sg() {
      return this.n1e_1;
    }
    to() {
      var tmp0_cached = Companion_getInstance_55().m1e_1;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      return [tmp0_cached[0].d2(), tmp0_cached[1].d2()];
    }
  }
  class Companion_56 {
    constructor() {
      Companion_instance_56 = this;
      var tmp = this;
      var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.s1e_1 = [null, null, lazy(tmp_0, Screen$SyncAnswer$Companion$$childSerializers$_anonymous__x3be1l)];
    }
  }
  class $serializer_33 {
    constructor() {
      $serializer_instance_33 = this;
      var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('syncAnswer', this, 3);
      tmp0_serialDesc.eo('prompt', false);
      tmp0_serialDesc.eo('myAnswer', false);
      tmp0_serialDesc.eo('answered', false);
      this.t1e_1 = tmp0_serialDesc;
    }
    u1e(encoder, value) {
      var tmp0_desc = this.t1e_1;
      var tmp1_output = encoder.ik(tmp0_desc);
      var tmp2_cached = Companion_getInstance_56().s1e_1;
      tmp1_output.fl(tmp0_desc, 0, value.v1e_1);
      tmp1_output.il(tmp0_desc, 1, StringSerializer_getInstance(), value.w1e_1);
      tmp1_output.gl(tmp0_desc, 2, tmp2_cached[2].d2(), value.x1e_1);
      tmp1_output.jk(tmp0_desc);
    }
    tg(encoder, value) {
      return this.u1e(encoder, value instanceof SyncAnswer_0 ? value : THROW_CCE());
    }
    ug(decoder) {
      var tmp0_desc = this.t1e_1;
      var tmp1_flag = true;
      var tmp2_index = 0;
      var tmp3_bitMask0 = 0;
      var tmp4_local0 = null;
      var tmp5_local1 = null;
      var tmp6_local2 = null;
      var tmp7_input = decoder.ik(tmp0_desc);
      var tmp8_cached = Companion_getInstance_56().s1e_1;
      if (tmp7_input.rk()) {
        tmp4_local0 = tmp7_input.mk(tmp0_desc, 0);
        tmp3_bitMask0 = tmp3_bitMask0 | 1;
        tmp5_local1 = tmp7_input.pk(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
        tmp3_bitMask0 = tmp3_bitMask0 | 2;
        tmp6_local2 = tmp7_input.nk(tmp0_desc, 2, tmp8_cached[2].d2(), tmp6_local2);
        tmp3_bitMask0 = tmp3_bitMask0 | 4;
      } else
        while (tmp1_flag) {
          tmp2_index = tmp7_input.sk(tmp0_desc);
          switch (tmp2_index) {
            case -1:
              tmp1_flag = false;
              break;
            case 0:
              tmp4_local0 = tmp7_input.mk(tmp0_desc, 0);
              tmp3_bitMask0 = tmp3_bitMask0 | 1;
              break;
            case 1:
              tmp5_local1 = tmp7_input.pk(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
              tmp3_bitMask0 = tmp3_bitMask0 | 2;
              break;
            case 2:
              tmp6_local2 = tmp7_input.nk(tmp0_desc, 2, tmp8_cached[2].d2(), tmp6_local2);
              tmp3_bitMask0 = tmp3_bitMask0 | 4;
              break;
            default:
              throw UnknownFieldException.gi(tmp2_index);
          }
        }
      tmp7_input.jk(tmp0_desc);
      return SyncAnswer_0.y1e(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
    }
    sg() {
      return this.t1e_1;
    }
    to() {
      var tmp0_cached = Companion_getInstance_56().s1e_1;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      return [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), tmp0_cached[2].d2()];
    }
  }
  class Companion_57 {
    constructor() {
      Companion_instance_57 = this;
      var tmp = this;
      var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
      var tmp_1 = lazy(tmp_0, Screen$SyncReveal$Companion$$childSerializers$_anonymous__bw2mgm);
      var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
      var tmp_3 = lazy(tmp_2, Screen$SyncReveal$Companion$$childSerializers$_anonymous__bw2mgm_0);
      var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.z1e_1 = [null, tmp_1, tmp_3, lazy(tmp_4, Screen$SyncReveal$Companion$$childSerializers$_anonymous__bw2mgm_1)];
    }
  }
  class $serializer_34 {
    constructor() {
      $serializer_instance_34 = this;
      var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('syncReveal', this, 4);
      tmp0_serialDesc.eo('prompt', false);
      tmp0_serialDesc.eo('groups', false);
      tmp0_serialDesc.eo('gained', false);
      tmp0_serialDesc.eo('scores', false);
      this.a1f_1 = tmp0_serialDesc;
    }
    b1f(encoder, value) {
      var tmp0_desc = this.a1f_1;
      var tmp1_output = encoder.ik(tmp0_desc);
      var tmp2_cached = Companion_getInstance_57().z1e_1;
      tmp1_output.fl(tmp0_desc, 0, value.i18_1);
      tmp1_output.gl(tmp0_desc, 1, tmp2_cached[1].d2(), value.j18_1);
      tmp1_output.gl(tmp0_desc, 2, tmp2_cached[2].d2(), value.k18_1);
      tmp1_output.gl(tmp0_desc, 3, tmp2_cached[3].d2(), value.l18_1);
      tmp1_output.jk(tmp0_desc);
    }
    tg(encoder, value) {
      return this.b1f(encoder, value instanceof SyncReveal ? value : THROW_CCE());
    }
    ug(decoder) {
      var tmp0_desc = this.a1f_1;
      var tmp1_flag = true;
      var tmp2_index = 0;
      var tmp3_bitMask0 = 0;
      var tmp4_local0 = null;
      var tmp5_local1 = null;
      var tmp6_local2 = null;
      var tmp7_local3 = null;
      var tmp8_input = decoder.ik(tmp0_desc);
      var tmp9_cached = Companion_getInstance_57().z1e_1;
      if (tmp8_input.rk()) {
        tmp4_local0 = tmp8_input.mk(tmp0_desc, 0);
        tmp3_bitMask0 = tmp3_bitMask0 | 1;
        tmp5_local1 = tmp8_input.nk(tmp0_desc, 1, tmp9_cached[1].d2(), tmp5_local1);
        tmp3_bitMask0 = tmp3_bitMask0 | 2;
        tmp6_local2 = tmp8_input.nk(tmp0_desc, 2, tmp9_cached[2].d2(), tmp6_local2);
        tmp3_bitMask0 = tmp3_bitMask0 | 4;
        tmp7_local3 = tmp8_input.nk(tmp0_desc, 3, tmp9_cached[3].d2(), tmp7_local3);
        tmp3_bitMask0 = tmp3_bitMask0 | 8;
      } else
        while (tmp1_flag) {
          tmp2_index = tmp8_input.sk(tmp0_desc);
          switch (tmp2_index) {
            case -1:
              tmp1_flag = false;
              break;
            case 0:
              tmp4_local0 = tmp8_input.mk(tmp0_desc, 0);
              tmp3_bitMask0 = tmp3_bitMask0 | 1;
              break;
            case 1:
              tmp5_local1 = tmp8_input.nk(tmp0_desc, 1, tmp9_cached[1].d2(), tmp5_local1);
              tmp3_bitMask0 = tmp3_bitMask0 | 2;
              break;
            case 2:
              tmp6_local2 = tmp8_input.nk(tmp0_desc, 2, tmp9_cached[2].d2(), tmp6_local2);
              tmp3_bitMask0 = tmp3_bitMask0 | 4;
              break;
            case 3:
              tmp7_local3 = tmp8_input.nk(tmp0_desc, 3, tmp9_cached[3].d2(), tmp7_local3);
              tmp3_bitMask0 = tmp3_bitMask0 | 8;
              break;
            default:
              throw UnknownFieldException.gi(tmp2_index);
          }
        }
      tmp8_input.jk(tmp0_desc);
      return SyncReveal.c1f(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
    }
    sg() {
      return this.a1f_1;
    }
    to() {
      var tmp0_cached = Companion_getInstance_57().z1e_1;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      return [StringSerializer_getInstance(), tmp0_cached[1].d2(), tmp0_cached[2].d2(), tmp0_cached[3].d2()];
    }
  }
  class Companion_58 {}
  class $serializer_35 {
    constructor() {
      $serializer_instance_35 = this;
      var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('guessPlay', this, 2);
      tmp0_serialDesc.eo('asker', false);
      tmp0_serialDesc.eo('answer', false);
      this.d1f_1 = tmp0_serialDesc;
    }
    e1f(encoder, value) {
      var tmp0_desc = this.d1f_1;
      var tmp1_output = encoder.ik(tmp0_desc);
      tmp1_output.fl(tmp0_desc, 0, value.f1f_1);
      tmp1_output.il(tmp0_desc, 1, StringSerializer_getInstance(), value.g1f_1);
      tmp1_output.jk(tmp0_desc);
    }
    tg(encoder, value) {
      return this.e1f(encoder, value instanceof GuessPlay ? value : THROW_CCE());
    }
    ug(decoder) {
      var tmp0_desc = this.d1f_1;
      var tmp1_flag = true;
      var tmp2_index = 0;
      var tmp3_bitMask0 = 0;
      var tmp4_local0 = null;
      var tmp5_local1 = null;
      var tmp6_input = decoder.ik(tmp0_desc);
      if (tmp6_input.rk()) {
        tmp4_local0 = tmp6_input.mk(tmp0_desc, 0);
        tmp3_bitMask0 = tmp3_bitMask0 | 1;
        tmp5_local1 = tmp6_input.pk(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
        tmp3_bitMask0 = tmp3_bitMask0 | 2;
      } else
        while (tmp1_flag) {
          tmp2_index = tmp6_input.sk(tmp0_desc);
          switch (tmp2_index) {
            case -1:
              tmp1_flag = false;
              break;
            case 0:
              tmp4_local0 = tmp6_input.mk(tmp0_desc, 0);
              tmp3_bitMask0 = tmp3_bitMask0 | 1;
              break;
            case 1:
              tmp5_local1 = tmp6_input.pk(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
              tmp3_bitMask0 = tmp3_bitMask0 | 2;
              break;
            default:
              throw UnknownFieldException.gi(tmp2_index);
          }
        }
      tmp6_input.jk(tmp0_desc);
      return GuessPlay.h1f(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
    }
    sg() {
      return this.d1f_1;
    }
    to() {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      return [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance())];
    }
  }
  class Companion_59 {
    constructor() {
      Companion_instance_59 = this;
      var tmp = this;
      var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.i1f_1 = [null, null, null, lazy(tmp_0, Screen$GuessResult$Companion$$childSerializers$_anonymous__yijtci)];
    }
  }
  class $serializer_36 {
    constructor() {
      $serializer_instance_36 = this;
      var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('guessResult', this, 4);
      tmp0_serialDesc.eo('answer', false);
      tmp0_serialDesc.eo('asker', false);
      tmp0_serialDesc.eo('guesser', false);
      tmp0_serialDesc.eo('scores', false);
      this.j1f_1 = tmp0_serialDesc;
    }
    k1f(encoder, value) {
      var tmp0_desc = this.j1f_1;
      var tmp1_output = encoder.ik(tmp0_desc);
      var tmp2_cached = Companion_getInstance_59().i1f_1;
      tmp1_output.fl(tmp0_desc, 0, value.l1f_1);
      tmp1_output.fl(tmp0_desc, 1, value.m1f_1);
      tmp1_output.il(tmp0_desc, 2, StringSerializer_getInstance(), value.n1f_1);
      tmp1_output.gl(tmp0_desc, 3, tmp2_cached[3].d2(), value.o1f_1);
      tmp1_output.jk(tmp0_desc);
    }
    tg(encoder, value) {
      return this.k1f(encoder, value instanceof GuessResult ? value : THROW_CCE());
    }
    ug(decoder) {
      var tmp0_desc = this.j1f_1;
      var tmp1_flag = true;
      var tmp2_index = 0;
      var tmp3_bitMask0 = 0;
      var tmp4_local0 = null;
      var tmp5_local1 = null;
      var tmp6_local2 = null;
      var tmp7_local3 = null;
      var tmp8_input = decoder.ik(tmp0_desc);
      var tmp9_cached = Companion_getInstance_59().i1f_1;
      if (tmp8_input.rk()) {
        tmp4_local0 = tmp8_input.mk(tmp0_desc, 0);
        tmp3_bitMask0 = tmp3_bitMask0 | 1;
        tmp5_local1 = tmp8_input.mk(tmp0_desc, 1);
        tmp3_bitMask0 = tmp3_bitMask0 | 2;
        tmp6_local2 = tmp8_input.pk(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
        tmp3_bitMask0 = tmp3_bitMask0 | 4;
        tmp7_local3 = tmp8_input.nk(tmp0_desc, 3, tmp9_cached[3].d2(), tmp7_local3);
        tmp3_bitMask0 = tmp3_bitMask0 | 8;
      } else
        while (tmp1_flag) {
          tmp2_index = tmp8_input.sk(tmp0_desc);
          switch (tmp2_index) {
            case -1:
              tmp1_flag = false;
              break;
            case 0:
              tmp4_local0 = tmp8_input.mk(tmp0_desc, 0);
              tmp3_bitMask0 = tmp3_bitMask0 | 1;
              break;
            case 1:
              tmp5_local1 = tmp8_input.mk(tmp0_desc, 1);
              tmp3_bitMask0 = tmp3_bitMask0 | 2;
              break;
            case 2:
              tmp6_local2 = tmp8_input.pk(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
              tmp3_bitMask0 = tmp3_bitMask0 | 4;
              break;
            case 3:
              tmp7_local3 = tmp8_input.nk(tmp0_desc, 3, tmp9_cached[3].d2(), tmp7_local3);
              tmp3_bitMask0 = tmp3_bitMask0 | 8;
              break;
            default:
              throw UnknownFieldException.gi(tmp2_index);
          }
        }
      tmp8_input.jk(tmp0_desc);
      return GuessResult.p1f(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
    }
    sg() {
      return this.j1f_1;
    }
    to() {
      var tmp0_cached = Companion_getInstance_59().i1f_1;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      return [StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), tmp0_cached[3].d2()];
    }
  }
  class Companion_60 {
    constructor() {
      Companion_instance_60 = this;
      var tmp = this;
      var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.q1f_1 = [null, null, lazy(tmp_0, Screen$QVote$Companion$$childSerializers$_anonymous__5qqkxl)];
    }
  }
  class $serializer_37 {
    constructor() {
      $serializer_instance_37 = this;
      var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('qVote', this, 3);
      tmp0_serialDesc.eo('question', false);
      tmp0_serialDesc.eo('myVote', false);
      tmp0_serialDesc.eo('voted', false);
      this.r1f_1 = tmp0_serialDesc;
    }
    s1f(encoder, value) {
      var tmp0_desc = this.r1f_1;
      var tmp1_output = encoder.ik(tmp0_desc);
      var tmp2_cached = Companion_getInstance_60().q1f_1;
      tmp1_output.fl(tmp0_desc, 0, value.t1f_1);
      tmp1_output.il(tmp0_desc, 1, StringSerializer_getInstance(), value.u1f_1);
      tmp1_output.gl(tmp0_desc, 2, tmp2_cached[2].d2(), value.v1f_1);
      tmp1_output.jk(tmp0_desc);
    }
    tg(encoder, value) {
      return this.s1f(encoder, value instanceof QVote_0 ? value : THROW_CCE());
    }
    ug(decoder) {
      var tmp0_desc = this.r1f_1;
      var tmp1_flag = true;
      var tmp2_index = 0;
      var tmp3_bitMask0 = 0;
      var tmp4_local0 = null;
      var tmp5_local1 = null;
      var tmp6_local2 = null;
      var tmp7_input = decoder.ik(tmp0_desc);
      var tmp8_cached = Companion_getInstance_60().q1f_1;
      if (tmp7_input.rk()) {
        tmp4_local0 = tmp7_input.mk(tmp0_desc, 0);
        tmp3_bitMask0 = tmp3_bitMask0 | 1;
        tmp5_local1 = tmp7_input.pk(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
        tmp3_bitMask0 = tmp3_bitMask0 | 2;
        tmp6_local2 = tmp7_input.nk(tmp0_desc, 2, tmp8_cached[2].d2(), tmp6_local2);
        tmp3_bitMask0 = tmp3_bitMask0 | 4;
      } else
        while (tmp1_flag) {
          tmp2_index = tmp7_input.sk(tmp0_desc);
          switch (tmp2_index) {
            case -1:
              tmp1_flag = false;
              break;
            case 0:
              tmp4_local0 = tmp7_input.mk(tmp0_desc, 0);
              tmp3_bitMask0 = tmp3_bitMask0 | 1;
              break;
            case 1:
              tmp5_local1 = tmp7_input.pk(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
              tmp3_bitMask0 = tmp3_bitMask0 | 2;
              break;
            case 2:
              tmp6_local2 = tmp7_input.nk(tmp0_desc, 2, tmp8_cached[2].d2(), tmp6_local2);
              tmp3_bitMask0 = tmp3_bitMask0 | 4;
              break;
            default:
              throw UnknownFieldException.gi(tmp2_index);
          }
        }
      tmp7_input.jk(tmp0_desc);
      return QVote_0.w1f(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
    }
    sg() {
      return this.r1f_1;
    }
    to() {
      var tmp0_cached = Companion_getInstance_60().q1f_1;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      return [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), tmp0_cached[2].d2()];
    }
  }
  class Companion_61 {
    constructor() {
      Companion_instance_61 = this;
      var tmp = this;
      var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.x1f_1 = [null, lazy(tmp_0, Screen$QReveal$Companion$$childSerializers$_anonymous__5yf57g)];
    }
  }
  class $serializer_38 {
    constructor() {
      $serializer_instance_38 = this;
      var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('qReveal', this, 2);
      tmp0_serialDesc.eo('question', false);
      tmp0_serialDesc.eo('tally', false);
      this.y1f_1 = tmp0_serialDesc;
    }
    z1f(encoder, value) {
      var tmp0_desc = this.y1f_1;
      var tmp1_output = encoder.ik(tmp0_desc);
      var tmp2_cached = Companion_getInstance_61().x1f_1;
      tmp1_output.fl(tmp0_desc, 0, value.a1g_1);
      tmp1_output.gl(tmp0_desc, 1, tmp2_cached[1].d2(), value.b1g_1);
      tmp1_output.jk(tmp0_desc);
    }
    tg(encoder, value) {
      return this.z1f(encoder, value instanceof QReveal ? value : THROW_CCE());
    }
    ug(decoder) {
      var tmp0_desc = this.y1f_1;
      var tmp1_flag = true;
      var tmp2_index = 0;
      var tmp3_bitMask0 = 0;
      var tmp4_local0 = null;
      var tmp5_local1 = null;
      var tmp6_input = decoder.ik(tmp0_desc);
      var tmp7_cached = Companion_getInstance_61().x1f_1;
      if (tmp6_input.rk()) {
        tmp4_local0 = tmp6_input.mk(tmp0_desc, 0);
        tmp3_bitMask0 = tmp3_bitMask0 | 1;
        tmp5_local1 = tmp6_input.nk(tmp0_desc, 1, tmp7_cached[1].d2(), tmp5_local1);
        tmp3_bitMask0 = tmp3_bitMask0 | 2;
      } else
        while (tmp1_flag) {
          tmp2_index = tmp6_input.sk(tmp0_desc);
          switch (tmp2_index) {
            case -1:
              tmp1_flag = false;
              break;
            case 0:
              tmp4_local0 = tmp6_input.mk(tmp0_desc, 0);
              tmp3_bitMask0 = tmp3_bitMask0 | 1;
              break;
            case 1:
              tmp5_local1 = tmp6_input.nk(tmp0_desc, 1, tmp7_cached[1].d2(), tmp5_local1);
              tmp3_bitMask0 = tmp3_bitMask0 | 2;
              break;
            default:
              throw UnknownFieldException.gi(tmp2_index);
          }
        }
      tmp6_input.jk(tmp0_desc);
      return QReveal.c1g(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
    }
    sg() {
      return this.y1f_1;
    }
    to() {
      var tmp0_cached = Companion_getInstance_61().x1f_1;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      return [StringSerializer_getInstance(), tmp0_cached[1].d2()];
    }
  }
  class Companion_62 {
    constructor() {
      Companion_instance_62 = this;
      var tmp = this;
      var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
      var tmp_1 = lazy(tmp_0, Screen$Arena$Companion$$childSerializers$_anonymous__t5kwhx);
      var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
      var tmp_3 = lazy(tmp_2, Screen$Arena$Companion$$childSerializers$_anonymous__t5kwhx_0);
      var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
      var tmp_5 = lazy(tmp_4, Screen$Arena$Companion$$childSerializers$_anonymous__t5kwhx_1);
      var tmp_6 = LazyThreadSafetyMode_PUBLICATION_getInstance();
      var tmp_7 = lazy(tmp_6, Screen$Arena$Companion$$childSerializers$_anonymous__t5kwhx_2);
      var tmp_8 = LazyThreadSafetyMode_PUBLICATION_getInstance();
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.d1g_1 = [tmp_1, null, null, null, null, tmp_3, tmp_5, tmp_7, null, lazy(tmp_8, Screen$Arena$Companion$$childSerializers$_anonymous__t5kwhx_3), null, null, null];
    }
  }
  class $serializer_39 {
    constructor() {
      $serializer_instance_39 = this;
      var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('arena', this, 13);
      tmp0_serialDesc.eo('seats', false);
      tmp0_serialDesc.eo('turn', false);
      tmp0_serialDesc.eo('deck', false);
      tmp0_serialDesc.eo('discardTop', false);
      tmp0_serialDesc.eo('topHidden', true);
      tmp0_serialDesc.eo('rules', false);
      tmp0_serialDesc.eo('chaos', false);
      tmp0_serialDesc.eo('hand', false);
      tmp0_serialDesc.eo('mini', false);
      tmp0_serialDesc.eo('log', false);
      tmp0_serialDesc.eo('pointGoal', true);
      tmp0_serialDesc.eo('endOwner', true);
      tmp0_serialDesc.eo('noDraw', true);
      this.e1g_1 = tmp0_serialDesc;
    }
    f1g(encoder, value) {
      var tmp0_desc = this.e1g_1;
      var tmp1_output = encoder.ik(tmp0_desc);
      var tmp2_cached = Companion_getInstance_62().d1g_1;
      tmp1_output.gl(tmp0_desc, 0, tmp2_cached[0].d2(), value.g1g_1);
      tmp1_output.fl(tmp0_desc, 1, value.h1g_1);
      tmp1_output.el(tmp0_desc, 2, value.i1g_1);
      tmp1_output.il(tmp0_desc, 3, $serializer_getInstance_18(), value.j1g_1);
      if (tmp1_output.ml(tmp0_desc, 4) ? true : !(value.k1g_1 === false)) {
        tmp1_output.dl(tmp0_desc, 4, value.k1g_1);
      }
      tmp1_output.gl(tmp0_desc, 5, tmp2_cached[5].d2(), value.l1g_1);
      tmp1_output.il(tmp0_desc, 6, tmp2_cached[6].d2(), value.m1g_1);
      tmp1_output.gl(tmp0_desc, 7, tmp2_cached[7].d2(), value.n1g_1);
      tmp1_output.il(tmp0_desc, 8, $serializer_getInstance_20(), value.o1g_1);
      tmp1_output.gl(tmp0_desc, 9, tmp2_cached[9].d2(), value.p1g_1);
      if (tmp1_output.ml(tmp0_desc, 10) ? true : !(value.q1g_1 === 15)) {
        tmp1_output.el(tmp0_desc, 10, value.q1g_1);
      }
      if (tmp1_output.ml(tmp0_desc, 11) ? true : !(value.r1g_1 == null)) {
        tmp1_output.il(tmp0_desc, 11, StringSerializer_getInstance(), value.r1g_1);
      }
      if (tmp1_output.ml(tmp0_desc, 12) ? true : !(value.s1g_1 === false)) {
        tmp1_output.dl(tmp0_desc, 12, value.s1g_1);
      }
      tmp1_output.jk(tmp0_desc);
    }
    tg(encoder, value) {
      return this.f1g(encoder, value instanceof Arena ? value : THROW_CCE());
    }
    ug(decoder) {
      var tmp0_desc = this.e1g_1;
      var tmp1_flag = true;
      var tmp2_index = 0;
      var tmp3_bitMask0 = 0;
      var tmp4_local0 = null;
      var tmp5_local1 = null;
      var tmp6_local2 = 0;
      var tmp7_local3 = null;
      var tmp8_local4 = false;
      var tmp9_local5 = null;
      var tmp10_local6 = null;
      var tmp11_local7 = null;
      var tmp12_local8 = null;
      var tmp13_local9 = null;
      var tmp14_local10 = 0;
      var tmp15_local11 = null;
      var tmp16_local12 = false;
      var tmp17_input = decoder.ik(tmp0_desc);
      var tmp18_cached = Companion_getInstance_62().d1g_1;
      if (tmp17_input.rk()) {
        tmp4_local0 = tmp17_input.nk(tmp0_desc, 0, tmp18_cached[0].d2(), tmp4_local0);
        tmp3_bitMask0 = tmp3_bitMask0 | 1;
        tmp5_local1 = tmp17_input.mk(tmp0_desc, 1);
        tmp3_bitMask0 = tmp3_bitMask0 | 2;
        tmp6_local2 = tmp17_input.lk(tmp0_desc, 2);
        tmp3_bitMask0 = tmp3_bitMask0 | 4;
        tmp7_local3 = tmp17_input.pk(tmp0_desc, 3, $serializer_getInstance_18(), tmp7_local3);
        tmp3_bitMask0 = tmp3_bitMask0 | 8;
        tmp8_local4 = tmp17_input.kk(tmp0_desc, 4);
        tmp3_bitMask0 = tmp3_bitMask0 | 16;
        tmp9_local5 = tmp17_input.nk(tmp0_desc, 5, tmp18_cached[5].d2(), tmp9_local5);
        tmp3_bitMask0 = tmp3_bitMask0 | 32;
        tmp10_local6 = tmp17_input.pk(tmp0_desc, 6, tmp18_cached[6].d2(), tmp10_local6);
        tmp3_bitMask0 = tmp3_bitMask0 | 64;
        tmp11_local7 = tmp17_input.nk(tmp0_desc, 7, tmp18_cached[7].d2(), tmp11_local7);
        tmp3_bitMask0 = tmp3_bitMask0 | 128;
        tmp12_local8 = tmp17_input.pk(tmp0_desc, 8, $serializer_getInstance_20(), tmp12_local8);
        tmp3_bitMask0 = tmp3_bitMask0 | 256;
        tmp13_local9 = tmp17_input.nk(tmp0_desc, 9, tmp18_cached[9].d2(), tmp13_local9);
        tmp3_bitMask0 = tmp3_bitMask0 | 512;
        tmp14_local10 = tmp17_input.lk(tmp0_desc, 10);
        tmp3_bitMask0 = tmp3_bitMask0 | 1024;
        tmp15_local11 = tmp17_input.pk(tmp0_desc, 11, StringSerializer_getInstance(), tmp15_local11);
        tmp3_bitMask0 = tmp3_bitMask0 | 2048;
        tmp16_local12 = tmp17_input.kk(tmp0_desc, 12);
        tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      } else
        while (tmp1_flag) {
          tmp2_index = tmp17_input.sk(tmp0_desc);
          switch (tmp2_index) {
            case -1:
              tmp1_flag = false;
              break;
            case 0:
              tmp4_local0 = tmp17_input.nk(tmp0_desc, 0, tmp18_cached[0].d2(), tmp4_local0);
              tmp3_bitMask0 = tmp3_bitMask0 | 1;
              break;
            case 1:
              tmp5_local1 = tmp17_input.mk(tmp0_desc, 1);
              tmp3_bitMask0 = tmp3_bitMask0 | 2;
              break;
            case 2:
              tmp6_local2 = tmp17_input.lk(tmp0_desc, 2);
              tmp3_bitMask0 = tmp3_bitMask0 | 4;
              break;
            case 3:
              tmp7_local3 = tmp17_input.pk(tmp0_desc, 3, $serializer_getInstance_18(), tmp7_local3);
              tmp3_bitMask0 = tmp3_bitMask0 | 8;
              break;
            case 4:
              tmp8_local4 = tmp17_input.kk(tmp0_desc, 4);
              tmp3_bitMask0 = tmp3_bitMask0 | 16;
              break;
            case 5:
              tmp9_local5 = tmp17_input.nk(tmp0_desc, 5, tmp18_cached[5].d2(), tmp9_local5);
              tmp3_bitMask0 = tmp3_bitMask0 | 32;
              break;
            case 6:
              tmp10_local6 = tmp17_input.pk(tmp0_desc, 6, tmp18_cached[6].d2(), tmp10_local6);
              tmp3_bitMask0 = tmp3_bitMask0 | 64;
              break;
            case 7:
              tmp11_local7 = tmp17_input.nk(tmp0_desc, 7, tmp18_cached[7].d2(), tmp11_local7);
              tmp3_bitMask0 = tmp3_bitMask0 | 128;
              break;
            case 8:
              tmp12_local8 = tmp17_input.pk(tmp0_desc, 8, $serializer_getInstance_20(), tmp12_local8);
              tmp3_bitMask0 = tmp3_bitMask0 | 256;
              break;
            case 9:
              tmp13_local9 = tmp17_input.nk(tmp0_desc, 9, tmp18_cached[9].d2(), tmp13_local9);
              tmp3_bitMask0 = tmp3_bitMask0 | 512;
              break;
            case 10:
              tmp14_local10 = tmp17_input.lk(tmp0_desc, 10);
              tmp3_bitMask0 = tmp3_bitMask0 | 1024;
              break;
            case 11:
              tmp15_local11 = tmp17_input.pk(tmp0_desc, 11, StringSerializer_getInstance(), tmp15_local11);
              tmp3_bitMask0 = tmp3_bitMask0 | 2048;
              break;
            case 12:
              tmp16_local12 = tmp17_input.kk(tmp0_desc, 12);
              tmp3_bitMask0 = tmp3_bitMask0 | 4096;
              break;
            default:
              throw UnknownFieldException.gi(tmp2_index);
          }
        }
      tmp17_input.jk(tmp0_desc);
      return Arena.t1g(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, null);
    }
    sg() {
      return this.e1g_1;
    }
    to() {
      var tmp0_cached = Companion_getInstance_62().d1g_1;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      return [tmp0_cached[0].d2(), StringSerializer_getInstance(), IntSerializer_getInstance(), get_nullable($serializer_getInstance_18()), BooleanSerializer_getInstance(), tmp0_cached[5].d2(), get_nullable(tmp0_cached[6].d2()), tmp0_cached[7].d2(), get_nullable($serializer_getInstance_20()), tmp0_cached[9].d2(), IntSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), BooleanSerializer_getInstance()];
    }
  }
  class Companion_63 {
    constructor() {
      Companion_instance_63 = this;
      var tmp = this;
      var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
      var tmp_1 = lazy(tmp_0, Screen$ArenaResult$Companion$$childSerializers$_anonymous__ml2sfy);
      var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
      var tmp_3 = lazy(tmp_2, Screen$ArenaResult$Companion$$childSerializers$_anonymous__ml2sfy_0);
      var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
      var tmp_5 = lazy(tmp_4, Screen$ArenaResult$Companion$$childSerializers$_anonymous__ml2sfy_1);
      var tmp_6 = LazyThreadSafetyMode_PUBLICATION_getInstance();
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.u1g_1 = [tmp_1, tmp_3, tmp_5, lazy(tmp_6, Screen$ArenaResult$Companion$$childSerializers$_anonymous__ml2sfy_2)];
    }
  }
  class $serializer_40 {
    constructor() {
      $serializer_instance_40 = this;
      var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('arenaResult', this, 4);
      tmp0_serialDesc.eo('winners', false);
      tmp0_serialDesc.eo('seats', false);
      tmp0_serialDesc.eo('log', false);
      tmp0_serialDesc.eo('chaos', false);
      this.v1g_1 = tmp0_serialDesc;
    }
    w1g(encoder, value) {
      var tmp0_desc = this.v1g_1;
      var tmp1_output = encoder.ik(tmp0_desc);
      var tmp2_cached = Companion_getInstance_63().u1g_1;
      tmp1_output.gl(tmp0_desc, 0, tmp2_cached[0].d2(), value.x1g_1);
      tmp1_output.gl(tmp0_desc, 1, tmp2_cached[1].d2(), value.y1g_1);
      tmp1_output.gl(tmp0_desc, 2, tmp2_cached[2].d2(), value.z1g_1);
      tmp1_output.il(tmp0_desc, 3, tmp2_cached[3].d2(), value.a1h_1);
      tmp1_output.jk(tmp0_desc);
    }
    tg(encoder, value) {
      return this.w1g(encoder, value instanceof ArenaResult ? value : THROW_CCE());
    }
    ug(decoder) {
      var tmp0_desc = this.v1g_1;
      var tmp1_flag = true;
      var tmp2_index = 0;
      var tmp3_bitMask0 = 0;
      var tmp4_local0 = null;
      var tmp5_local1 = null;
      var tmp6_local2 = null;
      var tmp7_local3 = null;
      var tmp8_input = decoder.ik(tmp0_desc);
      var tmp9_cached = Companion_getInstance_63().u1g_1;
      if (tmp8_input.rk()) {
        tmp4_local0 = tmp8_input.nk(tmp0_desc, 0, tmp9_cached[0].d2(), tmp4_local0);
        tmp3_bitMask0 = tmp3_bitMask0 | 1;
        tmp5_local1 = tmp8_input.nk(tmp0_desc, 1, tmp9_cached[1].d2(), tmp5_local1);
        tmp3_bitMask0 = tmp3_bitMask0 | 2;
        tmp6_local2 = tmp8_input.nk(tmp0_desc, 2, tmp9_cached[2].d2(), tmp6_local2);
        tmp3_bitMask0 = tmp3_bitMask0 | 4;
        tmp7_local3 = tmp8_input.pk(tmp0_desc, 3, tmp9_cached[3].d2(), tmp7_local3);
        tmp3_bitMask0 = tmp3_bitMask0 | 8;
      } else
        while (tmp1_flag) {
          tmp2_index = tmp8_input.sk(tmp0_desc);
          switch (tmp2_index) {
            case -1:
              tmp1_flag = false;
              break;
            case 0:
              tmp4_local0 = tmp8_input.nk(tmp0_desc, 0, tmp9_cached[0].d2(), tmp4_local0);
              tmp3_bitMask0 = tmp3_bitMask0 | 1;
              break;
            case 1:
              tmp5_local1 = tmp8_input.nk(tmp0_desc, 1, tmp9_cached[1].d2(), tmp5_local1);
              tmp3_bitMask0 = tmp3_bitMask0 | 2;
              break;
            case 2:
              tmp6_local2 = tmp8_input.nk(tmp0_desc, 2, tmp9_cached[2].d2(), tmp6_local2);
              tmp3_bitMask0 = tmp3_bitMask0 | 4;
              break;
            case 3:
              tmp7_local3 = tmp8_input.pk(tmp0_desc, 3, tmp9_cached[3].d2(), tmp7_local3);
              tmp3_bitMask0 = tmp3_bitMask0 | 8;
              break;
            default:
              throw UnknownFieldException.gi(tmp2_index);
          }
        }
      tmp8_input.jk(tmp0_desc);
      return ArenaResult.b1h(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
    }
    sg() {
      return this.v1g_1;
    }
    to() {
      var tmp0_cached = Companion_getInstance_63().u1g_1;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      return [tmp0_cached[0].d2(), tmp0_cached[1].d2(), tmp0_cached[2].d2(), get_nullable(tmp0_cached[3].d2())];
    }
  }
  class Companion_64 {}
  class $serializer_41 {
    constructor() {
      $serializer_instance_41 = this;
      var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('adBreak', this, 1);
      tmp0_serialDesc.eo('breakId', false);
      this.c1h_1 = tmp0_serialDesc;
    }
    d1h(encoder, value) {
      var tmp0_desc = this.c1h_1;
      var tmp1_output = encoder.ik(tmp0_desc);
      tmp1_output.el(tmp0_desc, 0, value.e1h_1);
      tmp1_output.jk(tmp0_desc);
    }
    tg(encoder, value) {
      return this.d1h(encoder, value instanceof AdBreak ? value : THROW_CCE());
    }
    ug(decoder) {
      var tmp0_desc = this.c1h_1;
      var tmp1_flag = true;
      var tmp2_index = 0;
      var tmp3_bitMask0 = 0;
      var tmp4_local0 = 0;
      var tmp5_input = decoder.ik(tmp0_desc);
      if (tmp5_input.rk()) {
        tmp4_local0 = tmp5_input.lk(tmp0_desc, 0);
        tmp3_bitMask0 = tmp3_bitMask0 | 1;
      } else
        while (tmp1_flag) {
          tmp2_index = tmp5_input.sk(tmp0_desc);
          switch (tmp2_index) {
            case -1:
              tmp1_flag = false;
              break;
            case 0:
              tmp4_local0 = tmp5_input.lk(tmp0_desc, 0);
              tmp3_bitMask0 = tmp3_bitMask0 | 1;
              break;
            default:
              throw UnknownFieldException.gi(tmp2_index);
          }
        }
      tmp5_input.jk(tmp0_desc);
      return AdBreak.f1h(tmp3_bitMask0, tmp4_local0, null);
    }
    sg() {
      return this.c1h_1;
    }
    to() {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      return [IntSerializer_getInstance()];
    }
  }
  class Screen {}
  class Lobby {
    constructor() {
      Lobby_instance = this;
      var tmp = this;
      var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
      tmp.g1h_1 = lazy(tmp_0, Screen$Lobby$_anonymous__8yefdl);
    }
    toString() {
      return 'Lobby';
    }
    hashCode() {
      return 52265602;
    }
    equals(other) {
      if (this === other)
        return true;
      if (!(other instanceof Lobby))
        return false;
      return true;
    }
  }
  class WwReveal {
    constructor(word, confirmed, spy) {
      Companion_getInstance_47();
      spy = spy === VOID ? false : spy;
      this.t1c_1 = word;
      this.u1c_1 = confirmed;
      this.v1c_1 = spy;
    }
    toString() {
      return 'WwReveal(word=' + this.t1c_1 + ', confirmed=' + toString_1(this.u1c_1) + ', spy=' + this.v1c_1 + ')';
    }
    hashCode() {
      var result = getStringHashCode(this.t1c_1);
      result = imul(result, 31) + hashCode_0(this.u1c_1) | 0;
      result = imul(result, 31) + getBooleanHashCode(this.v1c_1) | 0;
      return result;
    }
    equals(other) {
      if (this === other)
        return true;
      if (!(other instanceof WwReveal))
        return false;
      if (!(this.t1c_1 === other.t1c_1))
        return false;
      if (!equals(this.u1c_1, other.u1c_1))
        return false;
      if (!(this.v1c_1 === other.v1c_1))
        return false;
      return true;
    }
    static w1c(seen0, word, confirmed, spy, serializationConstructorMarker) {
      Companion_getInstance_47();
      if (!(3 === (3 & seen0))) {
        throwMissingFieldException(seen0, 3, $serializer_getInstance_24().r1c_1);
      }
      var $this = createThis(this);
      $this.t1c_1 = word;
      $this.u1c_1 = confirmed;
      if (0 === (seen0 & 4))
        $this.v1c_1 = false;
      else
        $this.v1c_1 = spy;
      return $this;
    }
  }
  class WwRevealLocal {
    constructor(entries, confirmed) {
      Companion_getInstance_48();
      this.a1d_1 = entries;
      this.b1d_1 = confirmed;
    }
    toString() {
      return 'WwRevealLocal(entries=' + toString_1(this.a1d_1) + ', confirmed=' + toString_1(this.b1d_1) + ')';
    }
    hashCode() {
      var result = hashCode_0(this.a1d_1);
      result = imul(result, 31) + hashCode_0(this.b1d_1) | 0;
      return result;
    }
    equals(other) {
      if (this === other)
        return true;
      if (!(other instanceof WwRevealLocal))
        return false;
      if (!equals(this.a1d_1, other.a1d_1))
        return false;
      if (!equals(this.b1d_1, other.b1d_1))
        return false;
      return true;
    }
    static c1d(seen0, entries, confirmed, serializationConstructorMarker) {
      Companion_getInstance_48();
      if (!(3 === (3 & seen0))) {
        throwMissingFieldException(seen0, 3, $serializer_getInstance_25().y1c_1);
      }
      var $this = createThis(this);
      $this.a1d_1 = entries;
      $this.b1d_1 = confirmed;
      return $this;
    }
  }
  class WwTalk {
    constructor(word, spy) {
      spy = spy === VOID ? false : spy;
      this.f1d_1 = word;
      this.g1d_1 = spy;
    }
    toString() {
      return 'WwTalk(word=' + this.f1d_1 + ', spy=' + this.g1d_1 + ')';
    }
    hashCode() {
      var result = this.f1d_1 == null ? 0 : getStringHashCode(this.f1d_1);
      result = imul(result, 31) + getBooleanHashCode(this.g1d_1) | 0;
      return result;
    }
    equals(other) {
      if (this === other)
        return true;
      if (!(other instanceof WwTalk))
        return false;
      if (!(this.f1d_1 == other.f1d_1))
        return false;
      if (!(this.g1d_1 === other.g1d_1))
        return false;
      return true;
    }
    static h1d(seen0, word, spy, serializationConstructorMarker) {
      if (!(1 === (1 & seen0))) {
        throwMissingFieldException(seen0, 1, $serializer_getInstance_26().d1d_1);
      }
      var $this = createThis(this);
      $this.f1d_1 = word;
      if (0 === (seen0 & 2))
        $this.g1d_1 = false;
      else
        $this.g1d_1 = spy;
      return $this;
    }
  }
  class WwVote {
    constructor(candidates, myVote, voted, runoff) {
      Companion_getInstance_50();
      this.l1d_1 = candidates;
      this.m1d_1 = myVote;
      this.n1d_1 = voted;
      this.o1d_1 = runoff;
    }
    toString() {
      return 'WwVote(candidates=' + toString_1(this.l1d_1) + ', myVote=' + this.m1d_1 + ', voted=' + toString_1(this.n1d_1) + ', runoff=' + this.o1d_1 + ')';
    }
    hashCode() {
      var result = hashCode_0(this.l1d_1);
      result = imul(result, 31) + (this.m1d_1 == null ? 0 : getStringHashCode(this.m1d_1)) | 0;
      result = imul(result, 31) + hashCode_0(this.n1d_1) | 0;
      result = imul(result, 31) + getBooleanHashCode(this.o1d_1) | 0;
      return result;
    }
    equals(other) {
      if (this === other)
        return true;
      if (!(other instanceof WwVote))
        return false;
      if (!equals(this.l1d_1, other.l1d_1))
        return false;
      if (!(this.m1d_1 == other.m1d_1))
        return false;
      if (!equals(this.n1d_1, other.n1d_1))
        return false;
      if (!(this.o1d_1 === other.o1d_1))
        return false;
      return true;
    }
    static p1d(seen0, candidates, myVote, voted, runoff, serializationConstructorMarker) {
      Companion_getInstance_50();
      if (!(15 === (15 & seen0))) {
        throwMissingFieldException(seen0, 15, $serializer_getInstance_27().j1d_1);
      }
      var $this = createThis(this);
      $this.l1d_1 = candidates;
      $this.m1d_1 = myVote;
      $this.n1d_1 = voted;
      $this.o1d_1 = runoff;
      return $this;
    }
  }
  class WwAccuse {
    constructor(candidates) {
      Companion_getInstance_51();
      this.t1d_1 = candidates;
    }
    toString() {
      return 'WwAccuse(candidates=' + toString_1(this.t1d_1) + ')';
    }
    hashCode() {
      return hashCode_0(this.t1d_1);
    }
    equals(other) {
      if (this === other)
        return true;
      if (!(other instanceof WwAccuse))
        return false;
      if (!equals(this.t1d_1, other.t1d_1))
        return false;
      return true;
    }
    static u1d(seen0, candidates, serializationConstructorMarker) {
      Companion_getInstance_51();
      if (!(1 === (1 & seen0))) {
        throwMissingFieldException(seen0, 1, $serializer_getInstance_28().r1d_1);
      }
      var $this = createThis(this);
      $this.t1d_1 = candidates;
      return $this;
    }
  }
  class WwGuess {
    constructor(wolves, iAmWolf, options) {
      Companion_getInstance_52();
      options = options === VOID ? emptyList() : options;
      this.y1d_1 = wolves;
      this.z1d_1 = iAmWolf;
      this.a1e_1 = options;
    }
    toString() {
      return 'WwGuess(wolves=' + toString_1(this.y1d_1) + ', iAmWolf=' + this.z1d_1 + ', options=' + toString_1(this.a1e_1) + ')';
    }
    hashCode() {
      var result = hashCode_0(this.y1d_1);
      result = imul(result, 31) + getBooleanHashCode(this.z1d_1) | 0;
      result = imul(result, 31) + hashCode_0(this.a1e_1) | 0;
      return result;
    }
    equals(other) {
      if (this === other)
        return true;
      if (!(other instanceof WwGuess))
        return false;
      if (!equals(this.y1d_1, other.y1d_1))
        return false;
      if (!(this.z1d_1 === other.z1d_1))
        return false;
      if (!equals(this.a1e_1, other.a1e_1))
        return false;
      return true;
    }
    static b1e(seen0, wolves, iAmWolf, options, serializationConstructorMarker) {
      Companion_getInstance_52();
      if (!(3 === (3 & seen0))) {
        throwMissingFieldException(seen0, 3, $serializer_getInstance_29().w1d_1);
      }
      var $this = createThis(this);
      $this.y1d_1 = wolves;
      $this.z1d_1 = iAmWolf;
      if (0 === (seen0 & 4))
        $this.a1e_1 = emptyList();
      else
        $this.a1e_1 = options;
      return $this;
    }
  }
  class WwResult {
    constructor(citizenWord, wolfWord, wolves, accused, tally, winner, reason, myWord, spyGuess) {
      Companion_getInstance_53();
      spyGuess = spyGuess === VOID ? null : spyGuess;
      this.y17_1 = citizenWord;
      this.z17_1 = wolfWord;
      this.a18_1 = wolves;
      this.b18_1 = accused;
      this.c18_1 = tally;
      this.d18_1 = winner;
      this.e18_1 = reason;
      this.f18_1 = myWord;
      this.g18_1 = spyGuess;
    }
    h1h(citizenWord, wolfWord, wolves, accused, tally, winner, reason, myWord, spyGuess) {
      return new WwResult(citizenWord, wolfWord, wolves, accused, tally, winner, reason, myWord, spyGuess);
    }
    h18(citizenWord, wolfWord, wolves, accused, tally, winner, reason, myWord, spyGuess, $super) {
      citizenWord = citizenWord === VOID ? this.y17_1 : citizenWord;
      wolfWord = wolfWord === VOID ? this.z17_1 : wolfWord;
      wolves = wolves === VOID ? this.a18_1 : wolves;
      accused = accused === VOID ? this.b18_1 : accused;
      tally = tally === VOID ? this.c18_1 : tally;
      winner = winner === VOID ? this.d18_1 : winner;
      reason = reason === VOID ? this.e18_1 : reason;
      myWord = myWord === VOID ? this.f18_1 : myWord;
      spyGuess = spyGuess === VOID ? this.g18_1 : spyGuess;
      return $super === VOID ? this.h1h(citizenWord, wolfWord, wolves, accused, tally, winner, reason, myWord, spyGuess) : $super.h1h.call(this, citizenWord, wolfWord, wolves, accused, tally, winner, reason, myWord, spyGuess);
    }
    toString() {
      return 'WwResult(citizenWord=' + this.y17_1 + ', wolfWord=' + this.z17_1 + ', wolves=' + toString_1(this.a18_1) + ', accused=' + this.b18_1 + ', tally=' + toString_1(this.c18_1) + ', winner=' + this.d18_1.toString() + ', reason=' + this.e18_1.toString() + ', myWord=' + this.f18_1 + ', spyGuess=' + this.g18_1 + ')';
    }
    hashCode() {
      var result = getStringHashCode(this.y17_1);
      result = imul(result, 31) + getStringHashCode(this.z17_1) | 0;
      result = imul(result, 31) + hashCode_0(this.a18_1) | 0;
      result = imul(result, 31) + (this.b18_1 == null ? 0 : getStringHashCode(this.b18_1)) | 0;
      result = imul(result, 31) + hashCode_0(this.c18_1) | 0;
      result = imul(result, 31) + this.d18_1.hashCode() | 0;
      result = imul(result, 31) + this.e18_1.hashCode() | 0;
      result = imul(result, 31) + (this.f18_1 == null ? 0 : getStringHashCode(this.f18_1)) | 0;
      result = imul(result, 31) + (this.g18_1 == null ? 0 : getStringHashCode(this.g18_1)) | 0;
      return result;
    }
    equals(other) {
      if (this === other)
        return true;
      if (!(other instanceof WwResult))
        return false;
      if (!(this.y17_1 === other.y17_1))
        return false;
      if (!(this.z17_1 === other.z17_1))
        return false;
      if (!equals(this.a18_1, other.a18_1))
        return false;
      if (!(this.b18_1 == other.b18_1))
        return false;
      if (!equals(this.c18_1, other.c18_1))
        return false;
      if (!this.d18_1.equals(other.d18_1))
        return false;
      if (!this.e18_1.equals(other.e18_1))
        return false;
      if (!(this.f18_1 == other.f18_1))
        return false;
      if (!(this.g18_1 == other.g18_1))
        return false;
      return true;
    }
    static f1e(seen0, citizenWord, wolfWord, wolves, accused, tally, winner, reason, myWord, spyGuess, serializationConstructorMarker) {
      Companion_getInstance_53();
      if (!(255 === (255 & seen0))) {
        throwMissingFieldException(seen0, 255, $serializer_getInstance_30().d1e_1);
      }
      var $this = createThis(this);
      $this.y17_1 = citizenWord;
      $this.z17_1 = wolfWord;
      $this.a18_1 = wolves;
      $this.b18_1 = accused;
      $this.c18_1 = tally;
      $this.d18_1 = winner;
      $this.e18_1 = reason;
      $this.f18_1 = myWord;
      if (0 === (seen0 & 256))
        $this.g18_1 = null;
      else
        $this.g18_1 = spyGuess;
      return $this;
    }
  }
  class NgPlay {
    constructor(entries, myOut) {
      Companion_getInstance_54();
      this.j1e_1 = entries;
      this.k1e_1 = myOut;
    }
    toString() {
      return 'NgPlay(entries=' + toString_1(this.j1e_1) + ', myOut=' + this.k1e_1 + ')';
    }
    hashCode() {
      var result = hashCode_0(this.j1e_1);
      result = imul(result, 31) + getBooleanHashCode(this.k1e_1) | 0;
      return result;
    }
    equals(other) {
      if (this === other)
        return true;
      if (!(other instanceof NgPlay))
        return false;
      if (!equals(this.j1e_1, other.j1e_1))
        return false;
      if (!(this.k1e_1 === other.k1e_1))
        return false;
      return true;
    }
    static l1e(seen0, entries, myOut, serializationConstructorMarker) {
      Companion_getInstance_54();
      if (!(3 === (3 & seen0))) {
        throwMissingFieldException(seen0, 3, $serializer_getInstance_31().h1e_1);
      }
      var $this = createThis(this);
      $this.j1e_1 = entries;
      $this.k1e_1 = myOut;
      return $this;
    }
  }
  class NgResult {
    constructor(entries, winners) {
      Companion_getInstance_55();
      this.p1e_1 = entries;
      this.q1e_1 = winners;
    }
    toString() {
      return 'NgResult(entries=' + toString_1(this.p1e_1) + ', winners=' + toString_1(this.q1e_1) + ')';
    }
    hashCode() {
      var result = hashCode_0(this.p1e_1);
      result = imul(result, 31) + hashCode_0(this.q1e_1) | 0;
      return result;
    }
    equals(other) {
      if (this === other)
        return true;
      if (!(other instanceof NgResult))
        return false;
      if (!equals(this.p1e_1, other.p1e_1))
        return false;
      if (!equals(this.q1e_1, other.q1e_1))
        return false;
      return true;
    }
    static r1e(seen0, entries, winners, serializationConstructorMarker) {
      Companion_getInstance_55();
      if (!(3 === (3 & seen0))) {
        throwMissingFieldException(seen0, 3, $serializer_getInstance_32().n1e_1);
      }
      var $this = createThis(this);
      $this.p1e_1 = entries;
      $this.q1e_1 = winners;
      return $this;
    }
  }
  class SyncAnswer_0 {
    constructor(prompt, myAnswer, answered) {
      Companion_getInstance_56();
      this.v1e_1 = prompt;
      this.w1e_1 = myAnswer;
      this.x1e_1 = answered;
    }
    toString() {
      return 'SyncAnswer(prompt=' + this.v1e_1 + ', myAnswer=' + this.w1e_1 + ', answered=' + toString_1(this.x1e_1) + ')';
    }
    hashCode() {
      var result = getStringHashCode(this.v1e_1);
      result = imul(result, 31) + (this.w1e_1 == null ? 0 : getStringHashCode(this.w1e_1)) | 0;
      result = imul(result, 31) + hashCode_0(this.x1e_1) | 0;
      return result;
    }
    equals(other) {
      if (this === other)
        return true;
      if (!(other instanceof SyncAnswer_0))
        return false;
      if (!(this.v1e_1 === other.v1e_1))
        return false;
      if (!(this.w1e_1 == other.w1e_1))
        return false;
      if (!equals(this.x1e_1, other.x1e_1))
        return false;
      return true;
    }
    static y1e(seen0, prompt, myAnswer, answered, serializationConstructorMarker) {
      Companion_getInstance_56();
      if (!(7 === (7 & seen0))) {
        throwMissingFieldException(seen0, 7, $serializer_getInstance_33().t1e_1);
      }
      var $this = createThis(this);
      $this.v1e_1 = prompt;
      $this.w1e_1 = myAnswer;
      $this.x1e_1 = answered;
      return $this;
    }
  }
  class SyncReveal {
    constructor(prompt, groups, gained, scores) {
      Companion_getInstance_57();
      this.i18_1 = prompt;
      this.j18_1 = groups;
      this.k18_1 = gained;
      this.l18_1 = scores;
    }
    i1h(prompt, groups, gained, scores) {
      return new SyncReveal(prompt, groups, gained, scores);
    }
    m18(prompt, groups, gained, scores, $super) {
      prompt = prompt === VOID ? this.i18_1 : prompt;
      groups = groups === VOID ? this.j18_1 : groups;
      gained = gained === VOID ? this.k18_1 : gained;
      scores = scores === VOID ? this.l18_1 : scores;
      return $super === VOID ? this.i1h(prompt, groups, gained, scores) : $super.i1h.call(this, prompt, groups, gained, scores);
    }
    toString() {
      return 'SyncReveal(prompt=' + this.i18_1 + ', groups=' + toString_1(this.j18_1) + ', gained=' + toString_1(this.k18_1) + ', scores=' + toString_1(this.l18_1) + ')';
    }
    hashCode() {
      var result = getStringHashCode(this.i18_1);
      result = imul(result, 31) + hashCode_0(this.j18_1) | 0;
      result = imul(result, 31) + hashCode_0(this.k18_1) | 0;
      result = imul(result, 31) + hashCode_0(this.l18_1) | 0;
      return result;
    }
    equals(other) {
      if (this === other)
        return true;
      if (!(other instanceof SyncReveal))
        return false;
      if (!(this.i18_1 === other.i18_1))
        return false;
      if (!equals(this.j18_1, other.j18_1))
        return false;
      if (!equals(this.k18_1, other.k18_1))
        return false;
      if (!equals(this.l18_1, other.l18_1))
        return false;
      return true;
    }
    static c1f(seen0, prompt, groups, gained, scores, serializationConstructorMarker) {
      Companion_getInstance_57();
      if (!(15 === (15 & seen0))) {
        throwMissingFieldException(seen0, 15, $serializer_getInstance_34().a1f_1);
      }
      var $this = createThis(this);
      $this.i18_1 = prompt;
      $this.j18_1 = groups;
      $this.k18_1 = gained;
      $this.l18_1 = scores;
      return $this;
    }
  }
  class GuessPlay {
    constructor(asker, answer) {
      this.f1f_1 = asker;
      this.g1f_1 = answer;
    }
    toString() {
      return 'GuessPlay(asker=' + this.f1f_1 + ', answer=' + this.g1f_1 + ')';
    }
    hashCode() {
      var result = getStringHashCode(this.f1f_1);
      result = imul(result, 31) + (this.g1f_1 == null ? 0 : getStringHashCode(this.g1f_1)) | 0;
      return result;
    }
    equals(other) {
      if (this === other)
        return true;
      if (!(other instanceof GuessPlay))
        return false;
      if (!(this.f1f_1 === other.f1f_1))
        return false;
      if (!(this.g1f_1 == other.g1f_1))
        return false;
      return true;
    }
    static h1f(seen0, asker, answer, serializationConstructorMarker) {
      if (!(3 === (3 & seen0))) {
        throwMissingFieldException(seen0, 3, $serializer_getInstance_35().d1f_1);
      }
      var $this = createThis(this);
      $this.f1f_1 = asker;
      $this.g1f_1 = answer;
      return $this;
    }
  }
  class GuessResult {
    constructor(answer, asker, guesser, scores) {
      Companion_getInstance_59();
      this.l1f_1 = answer;
      this.m1f_1 = asker;
      this.n1f_1 = guesser;
      this.o1f_1 = scores;
    }
    toString() {
      return 'GuessResult(answer=' + this.l1f_1 + ', asker=' + this.m1f_1 + ', guesser=' + this.n1f_1 + ', scores=' + toString_1(this.o1f_1) + ')';
    }
    hashCode() {
      var result = getStringHashCode(this.l1f_1);
      result = imul(result, 31) + getStringHashCode(this.m1f_1) | 0;
      result = imul(result, 31) + (this.n1f_1 == null ? 0 : getStringHashCode(this.n1f_1)) | 0;
      result = imul(result, 31) + hashCode_0(this.o1f_1) | 0;
      return result;
    }
    equals(other) {
      if (this === other)
        return true;
      if (!(other instanceof GuessResult))
        return false;
      if (!(this.l1f_1 === other.l1f_1))
        return false;
      if (!(this.m1f_1 === other.m1f_1))
        return false;
      if (!(this.n1f_1 == other.n1f_1))
        return false;
      if (!equals(this.o1f_1, other.o1f_1))
        return false;
      return true;
    }
    static p1f(seen0, answer, asker, guesser, scores, serializationConstructorMarker) {
      Companion_getInstance_59();
      if (!(15 === (15 & seen0))) {
        throwMissingFieldException(seen0, 15, $serializer_getInstance_36().j1f_1);
      }
      var $this = createThis(this);
      $this.l1f_1 = answer;
      $this.m1f_1 = asker;
      $this.n1f_1 = guesser;
      $this.o1f_1 = scores;
      return $this;
    }
  }
  class QVote_0 {
    constructor(question, myVote, voted) {
      Companion_getInstance_60();
      this.t1f_1 = question;
      this.u1f_1 = myVote;
      this.v1f_1 = voted;
    }
    toString() {
      return 'QVote(question=' + this.t1f_1 + ', myVote=' + this.u1f_1 + ', voted=' + toString_1(this.v1f_1) + ')';
    }
    hashCode() {
      var result = getStringHashCode(this.t1f_1);
      result = imul(result, 31) + (this.u1f_1 == null ? 0 : getStringHashCode(this.u1f_1)) | 0;
      result = imul(result, 31) + hashCode_0(this.v1f_1) | 0;
      return result;
    }
    equals(other) {
      if (this === other)
        return true;
      if (!(other instanceof QVote_0))
        return false;
      if (!(this.t1f_1 === other.t1f_1))
        return false;
      if (!(this.u1f_1 == other.u1f_1))
        return false;
      if (!equals(this.v1f_1, other.v1f_1))
        return false;
      return true;
    }
    static w1f(seen0, question, myVote, voted, serializationConstructorMarker) {
      Companion_getInstance_60();
      if (!(7 === (7 & seen0))) {
        throwMissingFieldException(seen0, 7, $serializer_getInstance_37().r1f_1);
      }
      var $this = createThis(this);
      $this.t1f_1 = question;
      $this.u1f_1 = myVote;
      $this.v1f_1 = voted;
      return $this;
    }
  }
  class QReveal {
    constructor(question, tally) {
      Companion_getInstance_61();
      this.a1g_1 = question;
      this.b1g_1 = tally;
    }
    toString() {
      return 'QReveal(question=' + this.a1g_1 + ', tally=' + toString_1(this.b1g_1) + ')';
    }
    hashCode() {
      var result = getStringHashCode(this.a1g_1);
      result = imul(result, 31) + hashCode_0(this.b1g_1) | 0;
      return result;
    }
    equals(other) {
      if (this === other)
        return true;
      if (!(other instanceof QReveal))
        return false;
      if (!(this.a1g_1 === other.a1g_1))
        return false;
      if (!equals(this.b1g_1, other.b1g_1))
        return false;
      return true;
    }
    static c1g(seen0, question, tally, serializationConstructorMarker) {
      Companion_getInstance_61();
      if (!(3 === (3 & seen0))) {
        throwMissingFieldException(seen0, 3, $serializer_getInstance_38().y1f_1);
      }
      var $this = createThis(this);
      $this.a1g_1 = question;
      $this.b1g_1 = tally;
      return $this;
    }
  }
  class Arena {
    constructor(seats, turn, deck, discardTop, topHidden, rules, chaos, hand, mini, log, pointGoal, endOwner, noDraw) {
      Companion_getInstance_62();
      topHidden = topHidden === VOID ? false : topHidden;
      pointGoal = pointGoal === VOID ? 15 : pointGoal;
      endOwner = endOwner === VOID ? null : endOwner;
      noDraw = noDraw === VOID ? false : noDraw;
      this.g1g_1 = seats;
      this.h1g_1 = turn;
      this.i1g_1 = deck;
      this.j1g_1 = discardTop;
      this.k1g_1 = topHidden;
      this.l1g_1 = rules;
      this.m1g_1 = chaos;
      this.n1g_1 = hand;
      this.o1g_1 = mini;
      this.p1g_1 = log;
      this.q1g_1 = pointGoal;
      this.r1g_1 = endOwner;
      this.s1g_1 = noDraw;
    }
    toString() {
      return 'Arena(seats=' + toString_1(this.g1g_1) + ', turn=' + this.h1g_1 + ', deck=' + this.i1g_1 + ', discardTop=' + toString_0(this.j1g_1) + ', topHidden=' + this.k1g_1 + ', rules=' + toString_1(this.l1g_1) + ', chaos=' + toString_0(this.m1g_1) + ', hand=' + toString_1(this.n1g_1) + ', mini=' + toString_0(this.o1g_1) + ', log=' + toString_1(this.p1g_1) + ', pointGoal=' + this.q1g_1 + ', endOwner=' + this.r1g_1 + ', noDraw=' + this.s1g_1 + ')';
    }
    hashCode() {
      var result = hashCode_0(this.g1g_1);
      result = imul(result, 31) + getStringHashCode(this.h1g_1) | 0;
      result = imul(result, 31) + this.i1g_1 | 0;
      result = imul(result, 31) + (this.j1g_1 == null ? 0 : this.j1g_1.hashCode()) | 0;
      result = imul(result, 31) + getBooleanHashCode(this.k1g_1) | 0;
      result = imul(result, 31) + hashCode_0(this.l1g_1) | 0;
      result = imul(result, 31) + (this.m1g_1 == null ? 0 : this.m1g_1.hashCode()) | 0;
      result = imul(result, 31) + hashCode_0(this.n1g_1) | 0;
      result = imul(result, 31) + (this.o1g_1 == null ? 0 : this.o1g_1.hashCode()) | 0;
      result = imul(result, 31) + hashCode_0(this.p1g_1) | 0;
      result = imul(result, 31) + this.q1g_1 | 0;
      result = imul(result, 31) + (this.r1g_1 == null ? 0 : getStringHashCode(this.r1g_1)) | 0;
      result = imul(result, 31) + getBooleanHashCode(this.s1g_1) | 0;
      return result;
    }
    equals(other) {
      if (this === other)
        return true;
      if (!(other instanceof Arena))
        return false;
      if (!equals(this.g1g_1, other.g1g_1))
        return false;
      if (!(this.h1g_1 === other.h1g_1))
        return false;
      if (!(this.i1g_1 === other.i1g_1))
        return false;
      if (!equals(this.j1g_1, other.j1g_1))
        return false;
      if (!(this.k1g_1 === other.k1g_1))
        return false;
      if (!equals(this.l1g_1, other.l1g_1))
        return false;
      if (!equals(this.m1g_1, other.m1g_1))
        return false;
      if (!equals(this.n1g_1, other.n1g_1))
        return false;
      if (!equals(this.o1g_1, other.o1g_1))
        return false;
      if (!equals(this.p1g_1, other.p1g_1))
        return false;
      if (!(this.q1g_1 === other.q1g_1))
        return false;
      if (!(this.r1g_1 == other.r1g_1))
        return false;
      if (!(this.s1g_1 === other.s1g_1))
        return false;
      return true;
    }
    static t1g(seen0, seats, turn, deck, discardTop, topHidden, rules, chaos, hand, mini, log, pointGoal, endOwner, noDraw, serializationConstructorMarker) {
      Companion_getInstance_62();
      if (!(1007 === (1007 & seen0))) {
        throwMissingFieldException(seen0, 1007, $serializer_getInstance_39().e1g_1);
      }
      var $this = createThis(this);
      $this.g1g_1 = seats;
      $this.h1g_1 = turn;
      $this.i1g_1 = deck;
      $this.j1g_1 = discardTop;
      if (0 === (seen0 & 16))
        $this.k1g_1 = false;
      else
        $this.k1g_1 = topHidden;
      $this.l1g_1 = rules;
      $this.m1g_1 = chaos;
      $this.n1g_1 = hand;
      $this.o1g_1 = mini;
      $this.p1g_1 = log;
      if (0 === (seen0 & 1024))
        $this.q1g_1 = 15;
      else
        $this.q1g_1 = pointGoal;
      if (0 === (seen0 & 2048))
        $this.r1g_1 = null;
      else
        $this.r1g_1 = endOwner;
      if (0 === (seen0 & 4096))
        $this.s1g_1 = false;
      else
        $this.s1g_1 = noDraw;
      return $this;
    }
  }
  class ArenaResult {
    constructor(winners, seats, log, chaos) {
      Companion_getInstance_63();
      this.x1g_1 = winners;
      this.y1g_1 = seats;
      this.z1g_1 = log;
      this.a1h_1 = chaos;
    }
    toString() {
      return 'ArenaResult(winners=' + toString_1(this.x1g_1) + ', seats=' + toString_1(this.y1g_1) + ', log=' + toString_1(this.z1g_1) + ', chaos=' + toString_0(this.a1h_1) + ')';
    }
    hashCode() {
      var result = hashCode_0(this.x1g_1);
      result = imul(result, 31) + hashCode_0(this.y1g_1) | 0;
      result = imul(result, 31) + hashCode_0(this.z1g_1) | 0;
      result = imul(result, 31) + (this.a1h_1 == null ? 0 : this.a1h_1.hashCode()) | 0;
      return result;
    }
    equals(other) {
      if (this === other)
        return true;
      if (!(other instanceof ArenaResult))
        return false;
      if (!equals(this.x1g_1, other.x1g_1))
        return false;
      if (!equals(this.y1g_1, other.y1g_1))
        return false;
      if (!equals(this.z1g_1, other.z1g_1))
        return false;
      if (!equals(this.a1h_1, other.a1h_1))
        return false;
      return true;
    }
    static b1h(seen0, winners, seats, log, chaos, serializationConstructorMarker) {
      Companion_getInstance_63();
      if (!(15 === (15 & seen0))) {
        throwMissingFieldException(seen0, 15, $serializer_getInstance_40().v1g_1);
      }
      var $this = createThis(this);
      $this.x1g_1 = winners;
      $this.y1g_1 = seats;
      $this.z1g_1 = log;
      $this.a1h_1 = chaos;
      return $this;
    }
  }
  class AdBreak {
    constructor(breakId) {
      this.e1h_1 = breakId;
    }
    toString() {
      return 'AdBreak(breakId=' + this.e1h_1 + ')';
    }
    hashCode() {
      return this.e1h_1;
    }
    equals(other) {
      if (this === other)
        return true;
      if (!(other instanceof AdBreak))
        return false;
      if (!(this.e1h_1 === other.e1h_1))
        return false;
      return true;
    }
    static f1h(seen0, breakId, serializationConstructorMarker) {
      if (!(1 === (1 & seen0))) {
        throwMissingFieldException(seen0, 1, $serializer_getInstance_41().c1h_1);
      }
      var $this = createThis(this);
      $this.e1h_1 = breakId;
      return $this;
    }
  }
  class Companion_65 {
    m10() {
      var tmp = getKClass(Screen);
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = [getKClass(AdBreak), getKClass(Arena), getKClass(ArenaResult), getKClass(GuessPlay), getKClass(GuessResult), getKClass(Lobby), getKClass(NgPlay), getKClass(NgResult), getKClass(QReveal), getKClass(QVote_0), getKClass(SyncAnswer_0), getKClass(SyncReveal), getKClass(WwAccuse), getKClass(WwGuess), getKClass(WwResult), getKClass(WwReveal), getKClass(WwRevealLocal), getKClass(WwTalk), getKClass(WwVote)];
      var tmp_1 = $serializer_getInstance_41();
      var tmp_2 = $serializer_getInstance_39();
      var tmp_3 = $serializer_getInstance_40();
      var tmp_4 = $serializer_getInstance_35();
      var tmp_5 = $serializer_getInstance_36();
      var tmp_6 = Lobby_getInstance();
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$5 = [];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_7 = [tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, ObjectSerializer.cp('lobby', tmp_6, tmp$ret$5), $serializer_getInstance_31(), $serializer_getInstance_32(), $serializer_getInstance_38(), $serializer_getInstance_37(), $serializer_getInstance_33(), $serializer_getInstance_34(), $serializer_getInstance_28(), $serializer_getInstance_29(), $serializer_getInstance_30(), $serializer_getInstance_24(), $serializer_getInstance_25(), $serializer_getInstance_26(), $serializer_getInstance_27()];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$11 = [];
      return SealedClassSerializer.rh('com.zen.partygame.game.Screen', tmp, tmp_0, tmp_7, tmp$ret$11);
    }
  }
  class Companion_66 {
    constructor() {
      Companion_instance_66 = this;
      var tmp = this;
      var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
      var tmp_1 = lazy(tmp_0, PlayerView$Companion$$childSerializers$_anonymous__gvxerg);
      var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
      var tmp_3 = lazy(tmp_2, PlayerView$Companion$$childSerializers$_anonymous__gvxerg_0);
      var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.j1h_1 = [null, null, null, null, tmp_1, null, tmp_3, lazy(tmp_4, PlayerView$Companion$$childSerializers$_anonymous__gvxerg_1), null];
    }
    m10() {
      return $serializer_getInstance_42();
    }
  }
  class $serializer_42 {
    constructor() {
      $serializer_instance_42 = this;
      var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.zen.partygame.game.PlayerView', this, 9);
      tmp0_serialDesc.eo('me', false);
      tmp0_serialDesc.eo('isHost', false);
      tmp0_serialDesc.eo('roomCode', false);
      tmp0_serialDesc.eo('localMode', false);
      tmp0_serialDesc.eo('players', false);
      tmp0_serialDesc.eo('settings', false);
      tmp0_serialDesc.eo('categories', false);
      tmp0_serialDesc.eo('screen', false);
      tmp0_serialDesc.eo('remainingMs', true);
      this.k1h_1 = tmp0_serialDesc;
    }
    l1h(encoder, value) {
      var tmp0_desc = this.k1h_1;
      var tmp1_output = encoder.ik(tmp0_desc);
      var tmp2_cached = Companion_getInstance_66().j1h_1;
      tmp1_output.fl(tmp0_desc, 0, value.m1h_1);
      tmp1_output.dl(tmp0_desc, 1, value.n1h_1);
      tmp1_output.fl(tmp0_desc, 2, value.o1h_1);
      tmp1_output.dl(tmp0_desc, 3, value.p1h_1);
      tmp1_output.gl(tmp0_desc, 4, tmp2_cached[4].d2(), value.q1h_1);
      tmp1_output.gl(tmp0_desc, 5, $serializer_getInstance_0(), value.r1h_1);
      tmp1_output.gl(tmp0_desc, 6, tmp2_cached[6].d2(), value.s1h_1);
      tmp1_output.gl(tmp0_desc, 7, tmp2_cached[7].d2(), value.t1h_1);
      if (tmp1_output.ml(tmp0_desc, 8) ? true : !(value.u1h_1 == null)) {
        tmp1_output.il(tmp0_desc, 8, LongSerializer_getInstance(), value.u1h_1);
      }
      tmp1_output.jk(tmp0_desc);
    }
    tg(encoder, value) {
      return this.l1h(encoder, value instanceof PlayerView ? value : THROW_CCE());
    }
    ug(decoder) {
      var tmp0_desc = this.k1h_1;
      var tmp1_flag = true;
      var tmp2_index = 0;
      var tmp3_bitMask0 = 0;
      var tmp4_local0 = null;
      var tmp5_local1 = false;
      var tmp6_local2 = null;
      var tmp7_local3 = false;
      var tmp8_local4 = null;
      var tmp9_local5 = null;
      var tmp10_local6 = null;
      var tmp11_local7 = null;
      var tmp12_local8 = null;
      var tmp13_input = decoder.ik(tmp0_desc);
      var tmp14_cached = Companion_getInstance_66().j1h_1;
      if (tmp13_input.rk()) {
        tmp4_local0 = tmp13_input.mk(tmp0_desc, 0);
        tmp3_bitMask0 = tmp3_bitMask0 | 1;
        tmp5_local1 = tmp13_input.kk(tmp0_desc, 1);
        tmp3_bitMask0 = tmp3_bitMask0 | 2;
        tmp6_local2 = tmp13_input.mk(tmp0_desc, 2);
        tmp3_bitMask0 = tmp3_bitMask0 | 4;
        tmp7_local3 = tmp13_input.kk(tmp0_desc, 3);
        tmp3_bitMask0 = tmp3_bitMask0 | 8;
        tmp8_local4 = tmp13_input.nk(tmp0_desc, 4, tmp14_cached[4].d2(), tmp8_local4);
        tmp3_bitMask0 = tmp3_bitMask0 | 16;
        tmp9_local5 = tmp13_input.nk(tmp0_desc, 5, $serializer_getInstance_0(), tmp9_local5);
        tmp3_bitMask0 = tmp3_bitMask0 | 32;
        tmp10_local6 = tmp13_input.nk(tmp0_desc, 6, tmp14_cached[6].d2(), tmp10_local6);
        tmp3_bitMask0 = tmp3_bitMask0 | 64;
        tmp11_local7 = tmp13_input.nk(tmp0_desc, 7, tmp14_cached[7].d2(), tmp11_local7);
        tmp3_bitMask0 = tmp3_bitMask0 | 128;
        tmp12_local8 = tmp13_input.pk(tmp0_desc, 8, LongSerializer_getInstance(), tmp12_local8);
        tmp3_bitMask0 = tmp3_bitMask0 | 256;
      } else
        while (tmp1_flag) {
          tmp2_index = tmp13_input.sk(tmp0_desc);
          switch (tmp2_index) {
            case -1:
              tmp1_flag = false;
              break;
            case 0:
              tmp4_local0 = tmp13_input.mk(tmp0_desc, 0);
              tmp3_bitMask0 = tmp3_bitMask0 | 1;
              break;
            case 1:
              tmp5_local1 = tmp13_input.kk(tmp0_desc, 1);
              tmp3_bitMask0 = tmp3_bitMask0 | 2;
              break;
            case 2:
              tmp6_local2 = tmp13_input.mk(tmp0_desc, 2);
              tmp3_bitMask0 = tmp3_bitMask0 | 4;
              break;
            case 3:
              tmp7_local3 = tmp13_input.kk(tmp0_desc, 3);
              tmp3_bitMask0 = tmp3_bitMask0 | 8;
              break;
            case 4:
              tmp8_local4 = tmp13_input.nk(tmp0_desc, 4, tmp14_cached[4].d2(), tmp8_local4);
              tmp3_bitMask0 = tmp3_bitMask0 | 16;
              break;
            case 5:
              tmp9_local5 = tmp13_input.nk(tmp0_desc, 5, $serializer_getInstance_0(), tmp9_local5);
              tmp3_bitMask0 = tmp3_bitMask0 | 32;
              break;
            case 6:
              tmp10_local6 = tmp13_input.nk(tmp0_desc, 6, tmp14_cached[6].d2(), tmp10_local6);
              tmp3_bitMask0 = tmp3_bitMask0 | 64;
              break;
            case 7:
              tmp11_local7 = tmp13_input.nk(tmp0_desc, 7, tmp14_cached[7].d2(), tmp11_local7);
              tmp3_bitMask0 = tmp3_bitMask0 | 128;
              break;
            case 8:
              tmp12_local8 = tmp13_input.pk(tmp0_desc, 8, LongSerializer_getInstance(), tmp12_local8);
              tmp3_bitMask0 = tmp3_bitMask0 | 256;
              break;
            default:
              throw UnknownFieldException.gi(tmp2_index);
          }
        }
      tmp13_input.jk(tmp0_desc);
      return PlayerView.v1h(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, null);
    }
    sg() {
      return this.k1h_1;
    }
    to() {
      var tmp0_cached = Companion_getInstance_66().j1h_1;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      return [StringSerializer_getInstance(), BooleanSerializer_getInstance(), StringSerializer_getInstance(), BooleanSerializer_getInstance(), tmp0_cached[4].d2(), $serializer_getInstance_0(), tmp0_cached[6].d2(), tmp0_cached[7].d2(), get_nullable(LongSerializer_getInstance())];
    }
  }
  class PlayerView {
    constructor(me, isHost, roomCode, localMode, players, settings, categories, screen, remainingMs) {
      Companion_getInstance_66();
      remainingMs = remainingMs === VOID ? null : remainingMs;
      this.m1h_1 = me;
      this.n1h_1 = isHost;
      this.o1h_1 = roomCode;
      this.p1h_1 = localMode;
      this.q1h_1 = players;
      this.r1h_1 = settings;
      this.s1h_1 = categories;
      this.t1h_1 = screen;
      this.u1h_1 = remainingMs;
    }
    toString() {
      return 'PlayerView(me=' + this.m1h_1 + ', isHost=' + this.n1h_1 + ', roomCode=' + this.o1h_1 + ', localMode=' + this.p1h_1 + ', players=' + toString_1(this.q1h_1) + ', settings=' + this.r1h_1.toString() + ', categories=' + toString_1(this.s1h_1) + ', screen=' + toString_1(this.t1h_1) + ', remainingMs=' + toString_0(this.u1h_1) + ')';
    }
    hashCode() {
      var result = getStringHashCode(this.m1h_1);
      result = imul(result, 31) + getBooleanHashCode(this.n1h_1) | 0;
      result = imul(result, 31) + getStringHashCode(this.o1h_1) | 0;
      result = imul(result, 31) + getBooleanHashCode(this.p1h_1) | 0;
      result = imul(result, 31) + hashCode_0(this.q1h_1) | 0;
      result = imul(result, 31) + this.r1h_1.hashCode() | 0;
      result = imul(result, 31) + hashCode_0(this.s1h_1) | 0;
      result = imul(result, 31) + hashCode_0(this.t1h_1) | 0;
      result = imul(result, 31) + (this.u1h_1 == null ? 0 : this.u1h_1.hashCode()) | 0;
      return result;
    }
    equals(other) {
      if (this === other)
        return true;
      if (!(other instanceof PlayerView))
        return false;
      if (!(this.m1h_1 === other.m1h_1))
        return false;
      if (!(this.n1h_1 === other.n1h_1))
        return false;
      if (!(this.o1h_1 === other.o1h_1))
        return false;
      if (!(this.p1h_1 === other.p1h_1))
        return false;
      if (!equals(this.q1h_1, other.q1h_1))
        return false;
      if (!this.r1h_1.equals(other.r1h_1))
        return false;
      if (!equals(this.s1h_1, other.s1h_1))
        return false;
      if (!equals(this.t1h_1, other.t1h_1))
        return false;
      if (!equals(this.u1h_1, other.u1h_1))
        return false;
      return true;
    }
    static v1h(seen0, me, isHost, roomCode, localMode, players, settings, categories, screen, remainingMs, serializationConstructorMarker) {
      Companion_getInstance_66();
      if (!(255 === (255 & seen0))) {
        throwMissingFieldException(seen0, 255, $serializer_getInstance_42().k1h_1);
      }
      var $this = createThis(this);
      $this.m1h_1 = me;
      $this.n1h_1 = isHost;
      $this.o1h_1 = roomCode;
      $this.p1h_1 = localMode;
      $this.q1h_1 = players;
      $this.r1h_1 = settings;
      $this.s1h_1 = categories;
      $this.t1h_1 = screen;
      if (0 === (seen0 & 256))
        $this.u1h_1 = null;
      else
        $this.u1h_1 = remainingMs;
      return $this;
    }
  }
  class Companion_67 {}
  class $serializer_43 {
    constructor() {
      $serializer_instance_43 = this;
      var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.zen.partygame.game.WwPair', this, 3);
      tmp0_serialDesc.eo('c', false);
      tmp0_serialDesc.eo('a', false);
      tmp0_serialDesc.eo('b', false);
      this.w1h_1 = tmp0_serialDesc;
    }
    x1h(encoder, value) {
      var tmp0_desc = this.w1h_1;
      var tmp1_output = encoder.ik(tmp0_desc);
      tmp1_output.fl(tmp0_desc, 0, value.g16_1);
      tmp1_output.fl(tmp0_desc, 1, value.h16_1);
      tmp1_output.fl(tmp0_desc, 2, value.i16_1);
      tmp1_output.jk(tmp0_desc);
    }
    tg(encoder, value) {
      return this.x1h(encoder, value instanceof WwPair ? value : THROW_CCE());
    }
    ug(decoder) {
      var tmp0_desc = this.w1h_1;
      var tmp1_flag = true;
      var tmp2_index = 0;
      var tmp3_bitMask0 = 0;
      var tmp4_local0 = null;
      var tmp5_local1 = null;
      var tmp6_local2 = null;
      var tmp7_input = decoder.ik(tmp0_desc);
      if (tmp7_input.rk()) {
        tmp4_local0 = tmp7_input.mk(tmp0_desc, 0);
        tmp3_bitMask0 = tmp3_bitMask0 | 1;
        tmp5_local1 = tmp7_input.mk(tmp0_desc, 1);
        tmp3_bitMask0 = tmp3_bitMask0 | 2;
        tmp6_local2 = tmp7_input.mk(tmp0_desc, 2);
        tmp3_bitMask0 = tmp3_bitMask0 | 4;
      } else
        while (tmp1_flag) {
          tmp2_index = tmp7_input.sk(tmp0_desc);
          switch (tmp2_index) {
            case -1:
              tmp1_flag = false;
              break;
            case 0:
              tmp4_local0 = tmp7_input.mk(tmp0_desc, 0);
              tmp3_bitMask0 = tmp3_bitMask0 | 1;
              break;
            case 1:
              tmp5_local1 = tmp7_input.mk(tmp0_desc, 1);
              tmp3_bitMask0 = tmp3_bitMask0 | 2;
              break;
            case 2:
              tmp6_local2 = tmp7_input.mk(tmp0_desc, 2);
              tmp3_bitMask0 = tmp3_bitMask0 | 4;
              break;
            default:
              throw UnknownFieldException.gi(tmp2_index);
          }
        }
      tmp7_input.jk(tmp0_desc);
      return WwPair.y1h(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
    }
    sg() {
      return this.w1h_1;
    }
    to() {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance()];
    }
  }
  class WwPair {
    toString() {
      return 'WwPair(c=' + this.g16_1 + ', a=' + this.h16_1 + ', b=' + this.i16_1 + ')';
    }
    hashCode() {
      var result = getStringHashCode(this.g16_1);
      result = imul(result, 31) + getStringHashCode(this.h16_1) | 0;
      result = imul(result, 31) + getStringHashCode(this.i16_1) | 0;
      return result;
    }
    equals(other) {
      if (this === other)
        return true;
      if (!(other instanceof WwPair))
        return false;
      if (!(this.g16_1 === other.g16_1))
        return false;
      if (!(this.h16_1 === other.h16_1))
        return false;
      if (!(this.i16_1 === other.i16_1))
        return false;
      return true;
    }
    static y1h(seen0, c, a, b, serializationConstructorMarker) {
      if (!(7 === (7 & seen0))) {
        throwMissingFieldException(seen0, 7, $serializer_getInstance_43().w1h_1);
      }
      var $this = createThis(this);
      $this.g16_1 = c;
      $this.h16_1 = a;
      $this.i16_1 = b;
      return $this;
    }
  }
  class Companion_68 {}
  class $serializer_44 {
    constructor() {
      $serializer_instance_44 = this;
      var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.zen.partygame.game.NgWord', this, 2);
      tmp0_serialDesc.eo('c', false);
      tmp0_serialDesc.eo('w', false);
      this.z1h_1 = tmp0_serialDesc;
    }
    a1i(encoder, value) {
      var tmp0_desc = this.z1h_1;
      var tmp1_output = encoder.ik(tmp0_desc);
      tmp1_output.fl(tmp0_desc, 0, value.b1i_1);
      tmp1_output.fl(tmp0_desc, 1, value.c1i_1);
      tmp1_output.jk(tmp0_desc);
    }
    tg(encoder, value) {
      return this.a1i(encoder, value instanceof NgWord ? value : THROW_CCE());
    }
    ug(decoder) {
      var tmp0_desc = this.z1h_1;
      var tmp1_flag = true;
      var tmp2_index = 0;
      var tmp3_bitMask0 = 0;
      var tmp4_local0 = null;
      var tmp5_local1 = null;
      var tmp6_input = decoder.ik(tmp0_desc);
      if (tmp6_input.rk()) {
        tmp4_local0 = tmp6_input.mk(tmp0_desc, 0);
        tmp3_bitMask0 = tmp3_bitMask0 | 1;
        tmp5_local1 = tmp6_input.mk(tmp0_desc, 1);
        tmp3_bitMask0 = tmp3_bitMask0 | 2;
      } else
        while (tmp1_flag) {
          tmp2_index = tmp6_input.sk(tmp0_desc);
          switch (tmp2_index) {
            case -1:
              tmp1_flag = false;
              break;
            case 0:
              tmp4_local0 = tmp6_input.mk(tmp0_desc, 0);
              tmp3_bitMask0 = tmp3_bitMask0 | 1;
              break;
            case 1:
              tmp5_local1 = tmp6_input.mk(tmp0_desc, 1);
              tmp3_bitMask0 = tmp3_bitMask0 | 2;
              break;
            default:
              throw UnknownFieldException.gi(tmp2_index);
          }
        }
      tmp6_input.jk(tmp0_desc);
      return NgWord.d1i(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
    }
    sg() {
      return this.z1h_1;
    }
    to() {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      return [StringSerializer_getInstance(), StringSerializer_getInstance()];
    }
  }
  class NgWord {
    toString() {
      return 'NgWord(c=' + this.b1i_1 + ', w=' + this.c1i_1 + ')';
    }
    hashCode() {
      var result = getStringHashCode(this.b1i_1);
      result = imul(result, 31) + getStringHashCode(this.c1i_1) | 0;
      return result;
    }
    equals(other) {
      if (this === other)
        return true;
      if (!(other instanceof NgWord))
        return false;
      if (!(this.b1i_1 === other.b1i_1))
        return false;
      if (!(this.c1i_1 === other.c1i_1))
        return false;
      return true;
    }
    static d1i(seen0, c, w, serializationConstructorMarker) {
      if (!(3 === (3 & seen0))) {
        throwMissingFieldException(seen0, 3, $serializer_getInstance_44().z1h_1);
      }
      var $this = createThis(this);
      $this.b1i_1 = c;
      $this.c1i_1 = w;
      return $this;
    }
  }
  class Companion_69 {
    constructor() {
      Companion_instance_69 = this;
      var tmp = this;
      var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
      var tmp_1 = lazy(tmp_0, TopicFile$Companion$$childSerializers$_anonymous__gy71un);
      var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
      var tmp_3 = lazy(tmp_2, TopicFile$Companion$$childSerializers$_anonymous__gy71un_0);
      var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
      var tmp_5 = lazy(tmp_4, TopicFile$Companion$$childSerializers$_anonymous__gy71un_1);
      var tmp_6 = LazyThreadSafetyMode_PUBLICATION_getInstance();
      var tmp_7 = lazy(tmp_6, TopicFile$Companion$$childSerializers$_anonymous__gy71un_2);
      var tmp_8 = LazyThreadSafetyMode_PUBLICATION_getInstance();
      var tmp_9 = lazy(tmp_8, TopicFile$Companion$$childSerializers$_anonymous__gy71un_3);
      var tmp_10 = LazyThreadSafetyMode_PUBLICATION_getInstance();
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.e1i_1 = [null, tmp_1, tmp_3, tmp_5, tmp_7, tmp_9, lazy(tmp_10, TopicFile$Companion$$childSerializers$_anonymous__gy71un_4)];
    }
    m10() {
      return $serializer_getInstance_45();
    }
  }
  class $serializer_45 {
    constructor() {
      $serializer_instance_45 = this;
      var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.zen.partygame.game.TopicFile', this, 7);
      tmp0_serialDesc.eo('version', false);
      tmp0_serialDesc.eo('wordwolf', false);
      tmp0_serialDesc.eo('ng', false);
      tmp0_serialDesc.eo('spy', true);
      tmp0_serialDesc.eo('sync', true);
      tmp0_serialDesc.eo('guess', true);
      tmp0_serialDesc.eo('questions', true);
      this.f1i_1 = tmp0_serialDesc;
    }
    g1i(encoder, value) {
      var tmp0_desc = this.f1i_1;
      var tmp1_output = encoder.ik(tmp0_desc);
      var tmp2_cached = Companion_getInstance_69().e1i_1;
      tmp1_output.el(tmp0_desc, 0, value.h1i_1);
      tmp1_output.gl(tmp0_desc, 1, tmp2_cached[1].d2(), value.i1i_1);
      tmp1_output.gl(tmp0_desc, 2, tmp2_cached[2].d2(), value.j1i_1);
      if (tmp1_output.ml(tmp0_desc, 3) ? true : !equals(value.k1i_1, emptyList())) {
        tmp1_output.gl(tmp0_desc, 3, tmp2_cached[3].d2(), value.k1i_1);
      }
      if (tmp1_output.ml(tmp0_desc, 4) ? true : !equals(value.l1i_1, emptyList())) {
        tmp1_output.gl(tmp0_desc, 4, tmp2_cached[4].d2(), value.l1i_1);
      }
      if (tmp1_output.ml(tmp0_desc, 5) ? true : !equals(value.m1i_1, emptyList())) {
        tmp1_output.gl(tmp0_desc, 5, tmp2_cached[5].d2(), value.m1i_1);
      }
      if (tmp1_output.ml(tmp0_desc, 6) ? true : !equals(value.n1i_1, emptyList())) {
        tmp1_output.gl(tmp0_desc, 6, tmp2_cached[6].d2(), value.n1i_1);
      }
      tmp1_output.jk(tmp0_desc);
    }
    tg(encoder, value) {
      return this.g1i(encoder, value instanceof TopicFile ? value : THROW_CCE());
    }
    ug(decoder) {
      var tmp0_desc = this.f1i_1;
      var tmp1_flag = true;
      var tmp2_index = 0;
      var tmp3_bitMask0 = 0;
      var tmp4_local0 = 0;
      var tmp5_local1 = null;
      var tmp6_local2 = null;
      var tmp7_local3 = null;
      var tmp8_local4 = null;
      var tmp9_local5 = null;
      var tmp10_local6 = null;
      var tmp11_input = decoder.ik(tmp0_desc);
      var tmp12_cached = Companion_getInstance_69().e1i_1;
      if (tmp11_input.rk()) {
        tmp4_local0 = tmp11_input.lk(tmp0_desc, 0);
        tmp3_bitMask0 = tmp3_bitMask0 | 1;
        tmp5_local1 = tmp11_input.nk(tmp0_desc, 1, tmp12_cached[1].d2(), tmp5_local1);
        tmp3_bitMask0 = tmp3_bitMask0 | 2;
        tmp6_local2 = tmp11_input.nk(tmp0_desc, 2, tmp12_cached[2].d2(), tmp6_local2);
        tmp3_bitMask0 = tmp3_bitMask0 | 4;
        tmp7_local3 = tmp11_input.nk(tmp0_desc, 3, tmp12_cached[3].d2(), tmp7_local3);
        tmp3_bitMask0 = tmp3_bitMask0 | 8;
        tmp8_local4 = tmp11_input.nk(tmp0_desc, 4, tmp12_cached[4].d2(), tmp8_local4);
        tmp3_bitMask0 = tmp3_bitMask0 | 16;
        tmp9_local5 = tmp11_input.nk(tmp0_desc, 5, tmp12_cached[5].d2(), tmp9_local5);
        tmp3_bitMask0 = tmp3_bitMask0 | 32;
        tmp10_local6 = tmp11_input.nk(tmp0_desc, 6, tmp12_cached[6].d2(), tmp10_local6);
        tmp3_bitMask0 = tmp3_bitMask0 | 64;
      } else
        while (tmp1_flag) {
          tmp2_index = tmp11_input.sk(tmp0_desc);
          switch (tmp2_index) {
            case -1:
              tmp1_flag = false;
              break;
            case 0:
              tmp4_local0 = tmp11_input.lk(tmp0_desc, 0);
              tmp3_bitMask0 = tmp3_bitMask0 | 1;
              break;
            case 1:
              tmp5_local1 = tmp11_input.nk(tmp0_desc, 1, tmp12_cached[1].d2(), tmp5_local1);
              tmp3_bitMask0 = tmp3_bitMask0 | 2;
              break;
            case 2:
              tmp6_local2 = tmp11_input.nk(tmp0_desc, 2, tmp12_cached[2].d2(), tmp6_local2);
              tmp3_bitMask0 = tmp3_bitMask0 | 4;
              break;
            case 3:
              tmp7_local3 = tmp11_input.nk(tmp0_desc, 3, tmp12_cached[3].d2(), tmp7_local3);
              tmp3_bitMask0 = tmp3_bitMask0 | 8;
              break;
            case 4:
              tmp8_local4 = tmp11_input.nk(tmp0_desc, 4, tmp12_cached[4].d2(), tmp8_local4);
              tmp3_bitMask0 = tmp3_bitMask0 | 16;
              break;
            case 5:
              tmp9_local5 = tmp11_input.nk(tmp0_desc, 5, tmp12_cached[5].d2(), tmp9_local5);
              tmp3_bitMask0 = tmp3_bitMask0 | 32;
              break;
            case 6:
              tmp10_local6 = tmp11_input.nk(tmp0_desc, 6, tmp12_cached[6].d2(), tmp10_local6);
              tmp3_bitMask0 = tmp3_bitMask0 | 64;
              break;
            default:
              throw UnknownFieldException.gi(tmp2_index);
          }
        }
      tmp11_input.jk(tmp0_desc);
      return TopicFile.o1i(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
    }
    sg() {
      return this.f1i_1;
    }
    to() {
      var tmp0_cached = Companion_getInstance_69().e1i_1;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      return [IntSerializer_getInstance(), tmp0_cached[1].d2(), tmp0_cached[2].d2(), tmp0_cached[3].d2(), tmp0_cached[4].d2(), tmp0_cached[5].d2(), tmp0_cached[6].d2()];
    }
  }
  class TopicFile {
    toString() {
      return 'TopicFile(version=' + this.h1i_1 + ', wordwolf=' + toString_1(this.i1i_1) + ', ng=' + toString_1(this.j1i_1) + ', spy=' + toString_1(this.k1i_1) + ', sync=' + toString_1(this.l1i_1) + ', guess=' + toString_1(this.m1i_1) + ', questions=' + toString_1(this.n1i_1) + ')';
    }
    hashCode() {
      var result = this.h1i_1;
      result = imul(result, 31) + hashCode_0(this.i1i_1) | 0;
      result = imul(result, 31) + hashCode_0(this.j1i_1) | 0;
      result = imul(result, 31) + hashCode_0(this.k1i_1) | 0;
      result = imul(result, 31) + hashCode_0(this.l1i_1) | 0;
      result = imul(result, 31) + hashCode_0(this.m1i_1) | 0;
      result = imul(result, 31) + hashCode_0(this.n1i_1) | 0;
      return result;
    }
    equals(other) {
      if (this === other)
        return true;
      if (!(other instanceof TopicFile))
        return false;
      if (!(this.h1i_1 === other.h1i_1))
        return false;
      if (!equals(this.i1i_1, other.i1i_1))
        return false;
      if (!equals(this.j1i_1, other.j1i_1))
        return false;
      if (!equals(this.k1i_1, other.k1i_1))
        return false;
      if (!equals(this.l1i_1, other.l1i_1))
        return false;
      if (!equals(this.m1i_1, other.m1i_1))
        return false;
      if (!equals(this.n1i_1, other.n1i_1))
        return false;
      return true;
    }
    static o1i(seen0, version, wordwolf, ng, spy, sync, guess, questions, serializationConstructorMarker) {
      Companion_getInstance_69();
      if (!(7 === (7 & seen0))) {
        throwMissingFieldException(seen0, 7, $serializer_getInstance_45().f1i_1);
      }
      var $this = createThis(this);
      $this.h1i_1 = version;
      $this.i1i_1 = wordwolf;
      $this.j1i_1 = ng;
      if (0 === (seen0 & 8))
        $this.k1i_1 = emptyList();
      else
        $this.k1i_1 = spy;
      if (0 === (seen0 & 16))
        $this.l1i_1 = emptyList();
      else
        $this.l1i_1 = sync;
      if (0 === (seen0 & 32))
        $this.m1i_1 = emptyList();
      else
        $this.m1i_1 = guess;
      if (0 === (seen0 & 64))
        $this.n1i_1 = emptyList();
      else
        $this.n1i_1 = questions;
      return $this;
    }
  }
  class Companion_70 {
    constructor() {
      Companion_instance_70 = this;
      var tmp = this;
      tmp.p1i_1 = Json_0(VOID, TopicBank$Companion$json$lambda);
    }
    q1i(text) {
      return new TopicBank(this.p1i_1.ar(Companion_getInstance_69().m10(), text));
    }
  }
  class TopicBank {
    constructor(file) {
      Companion_getInstance_70();
      this.a16_1 = file;
      var tmp = this;
      // Inline function 'kotlin.collections.map' call
      var this_0 = this.a16_1.i1i_1;
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList.d1(collectionSizeOrDefault(this_0, 10));
      var _iterator__ex2g4s = this_0.e1();
      while (_iterator__ex2g4s.f1()) {
        var item = _iterator__ex2g4s.g1();
        var tmp$ret$0 = item.g16_1;
        destination.r(tmp$ret$0);
      }
      tmp.b16_1 = distinct(destination);
      var tmp_0 = this;
      // Inline function 'kotlin.collections.mutableSetOf' call
      tmp_0.c16_1 = LinkedHashSet.n1();
      var tmp_1 = this;
      // Inline function 'kotlin.collections.mutableSetOf' call
      tmp_1.d16_1 = LinkedHashSet.n1();
      var tmp_2 = this;
      // Inline function 'kotlin.collections.mutableMapOf' call
      tmp_2.e16_1 = LinkedHashMap.z3();
    }
    f16(categories, rng) {
      // Inline function 'kotlin.collections.filter' call
      var tmp0 = get_indices_1(this.a16_1.i1i_1);
      // Inline function 'kotlin.collections.filterTo' call
      var destination = ArrayList.o1();
      var inductionVariable = tmp0.rf_1;
      var last = tmp0.sf_1;
      if (inductionVariable <= last)
        do {
          var element = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var it = element;
          if (categories.k1() || categories.p1(this.a16_1.i1i_1.l1(it).g16_1)) {
            destination.r(element);
          }
        }
         while (!(element === last));
      // Inline function 'kotlin.collections.ifEmpty' call
      var tmp;
      if (destination.k1()) {
        tmp = toList_0(get_indices_1(this.a16_1.i1i_1));
      } else {
        tmp = destination;
      }
      var pool = tmp;
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterTo' call
      var destination_0 = ArrayList.o1();
      var _iterator__ex2g4s = pool.e1();
      while (_iterator__ex2g4s.f1()) {
        var element_0 = _iterator__ex2g4s.g1();
        if (!this.c16_1.p1(element_0)) {
          destination_0.r(element_0);
        }
      }
      var fresh = destination_0;
      if (fresh.k1()) {
        this.c16_1.i4(toSet_0(pool));
        fresh = pool;
      }
      var i = fresh.l1(rng.m1(fresh.j1()));
      // Inline function 'kotlin.collections.plusAssign' call
      this.c16_1.r(i);
      return this.a16_1.i1i_1.l1(i);
    }
    n16(count, level, rng) {
      // Inline function 'kotlin.collections.filter' call
      var tmp0 = get_indices_1(this.a16_1.j1i_1);
      // Inline function 'kotlin.collections.filterTo' call
      var destination = ArrayList.o1();
      var inductionVariable = tmp0.rf_1;
      var last = tmp0.sf_1;
      if (inductionVariable <= last)
        do {
          var element = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var it = element;
          var tmp;
          switch (level.l2_1) {
            case 0:
              tmp = this.a16_1.j1i_1.l1(it).b1i_1 === '\u3075\u3064\u3046';
              break;
            case 1:
              tmp = this.a16_1.j1i_1.l1(it).b1i_1 === '\u30CF\u30FC\u30C9';
              break;
            case 2:
              tmp = true;
              break;
            default:
              noWhenBranchMatchedException();
              break;
          }
          if (tmp) {
            destination.r(element);
          }
        }
         while (!(element === last));
      // Inline function 'kotlin.collections.ifEmpty' call
      var tmp_0;
      if (destination.k1()) {
        tmp_0 = toList_0(get_indices_1(this.a16_1.j1i_1));
      } else {
        tmp_0 = destination;
      }
      var pool = tmp_0;
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterTo' call
      var destination_0 = ArrayList.o1();
      var _iterator__ex2g4s = pool.e1();
      while (_iterator__ex2g4s.f1()) {
        var element_0 = _iterator__ex2g4s.g1();
        if (!this.d16_1.p1(element_0)) {
          destination_0.r(element_0);
        }
      }
      var fresh = destination_0;
      if (fresh.j1() < count) {
        this.d16_1.i4(toSet_0(pool));
        fresh = pool;
      }
      var picked = take(shuffled(fresh, rng), count);
      // Inline function 'kotlin.collections.plusAssign' call
      var this_0 = this.d16_1;
      addAll(this_0, picked);
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_1 = ArrayList.d1(collectionSizeOrDefault(picked, 10));
      var _iterator__ex2g4s_0 = picked.e1();
      while (_iterator__ex2g4s_0.f1()) {
        var item = _iterator__ex2g4s_0.g1();
        var tmp$ret$9 = this.a16_1.j1i_1.l1(item).c1i_1;
        destination_1.r(tmp$ret$9);
      }
      return destination_1;
    }
    j16(rng) {
      return drawFrom(this, 'spy', this.a16_1.k1i_1, rng);
    }
    o16(rng) {
      return drawFrom(this, 'sync', this.a16_1.l1i_1, rng);
    }
    s16(rng) {
      return drawFrom(this, 'guess', this.a16_1.m1i_1, rng);
    }
    t16(rng) {
      return drawFrom(this, 'q', this.a16_1.n1i_1, rng);
    }
    m16(correct, count, rng) {
      // Inline function 'kotlin.collections.filter' call
      var tmp0 = this.a16_1.k1i_1;
      // Inline function 'kotlin.collections.filterTo' call
      var destination = ArrayList.o1();
      var _iterator__ex2g4s = tmp0.e1();
      while (_iterator__ex2g4s.f1()) {
        var element = _iterator__ex2g4s.g1();
        if (!(element === correct)) {
          destination.r(element);
        }
      }
      return shuffled(plus(take(shuffled(destination, rng), count - 1 | 0), correct), rng);
    }
  }
  class JsHost {
    constructor(roomCode, topicsJson) {
      var tmp = this;
      var tmp_0 = Companion_getInstance_70().q1i(topicsJson);
      var tmp_1 = Default_getInstance();
      tmp.r1i_1 = new Engine(roomCode, false, tmp_0, tmp_1, JsHost$engine$lambda);
    }
    join(id, name, isHost) {
      var r = this.r1i_1.b17(id, name, isHost);
      var tmp;
      if (r instanceof Ok) {
        tmp = 'ok';
      } else {
        if (equals(r, Full_instance)) {
          tmp = 'full';
        } else {
          if (equals(r, InGame_instance)) {
            tmp = 'ingame';
          } else {
            noWhenBranchMatchedException();
          }
        }
      }
      return tmp;
    }
    leave(id) {
      return this.r1i_1.c17(id);
    }
    apply(from, intentJson) {
      // Inline function 'kotlin.runCatching' call
      var tmp;
      try {
        // Inline function 'kotlin.Companion.success' call
        var value = get_WireJson().ar(Companion_instance_39.m10(), intentJson);
        tmp = _Result___init__impl__xyqfz8(value);
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var e = $p;
          // Inline function 'kotlin.Companion.failure' call
          tmp_0 = _Result___init__impl__xyqfz8(createFailure(e));
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      // Inline function 'kotlin.Result.getOrNull' call
      var this_0 = tmp;
      var tmp_1;
      if (_Result___get_isFailure__impl__jpiriv(this_0)) {
        tmp_1 = null;
      } else {
        var tmp_2 = _Result___get_value__impl__bjfvqg(this_0);
        tmp_1 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      }
      var tmp0_elvis_lhs = tmp_1;
      var tmp_3;
      if (tmp0_elvis_lhs == null) {
        return false;
      } else {
        tmp_3 = tmp0_elvis_lhs;
      }
      var intent = tmp_3;
      return this.r1i_1.d17(from, intent);
    }
    tick() {
      return this.r1i_1.o13();
    }
    version() {
      return this.r1i_1.z13_1;
    }
    viewJson(id) {
      return get_WireJson().zq(Companion_getInstance_66().m10(), this.r1i_1.x17(id));
    }
    playerIds() {
      // Inline function 'kotlin.collections.map' call
      var this_0 = this.r1i_1.x13_1;
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList.d1(collectionSizeOrDefault(this_0, 10));
      var _iterator__ex2g4s = this_0.e1();
      while (_iterator__ex2g4s.f1()) {
        var item = _iterator__ex2g4s.g1();
        var tmp$ret$0 = item.h15_1;
        destination.r(tmp$ret$0);
      }
      // Inline function 'kotlin.collections.toTypedArray' call
      return copyToArray(destination);
    }
    canJoin() {
      return this.r1i_1.a17() && this.r1i_1.x13_1.j1() < this.r1i_1.z16();
    }
    preferArena() {
      var tmp0_safe_receiver = this.r1i_1.u16();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        this.r1i_1.d17(tmp0_safe_receiver, new UpdateSettings(this.r1i_1.y13_1.w17(GameType_ARENA_getInstance())));
      }
    }
  }
  //endregion
  function throwIrLinkageError(message) {
    throw IrLinkageError.g(message);
  }
  function get_indices(_this__u8e3s4) {
    return new IntRange(0, get_lastIndex(_this__u8e3s4));
  }
  function get_indices_0(_this__u8e3s4) {
    return new IntRange(0, get_lastIndex_0(_this__u8e3s4));
  }
  function toList(_this__u8e3s4) {
    switch (_this__u8e3s4.length) {
      case 0:
        return emptyList();
      case 1:
        return listOf(_this__u8e3s4[0]);
      default:
        return toMutableList(_this__u8e3s4);
    }
  }
  function withIndex(_this__u8e3s4) {
    return new IndexingIterable(withIndex$lambda(_this__u8e3s4));
  }
  function toSet(_this__u8e3s4) {
    switch (_this__u8e3s4.length) {
      case 0:
        return emptySet();
      case 1:
        return setOf(_this__u8e3s4[0]);
      default:
        return toCollection(_this__u8e3s4, LinkedHashSet.m(mapCapacity(_this__u8e3s4.length)));
    }
  }
  function get_lastIndex(_this__u8e3s4) {
    return _this__u8e3s4.length - 1 | 0;
  }
  function get_lastIndex_0(_this__u8e3s4) {
    return _this__u8e3s4.length - 1 | 0;
  }
  function toMutableList(_this__u8e3s4) {
    return ArrayList.q(asCollection(_this__u8e3s4));
  }
  function toCollection(_this__u8e3s4, destination) {
    var inductionVariable = 0;
    var last = _this__u8e3s4.length;
    while (inductionVariable < last) {
      var item = _this__u8e3s4[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      destination.r(item);
    }
    return destination;
  }
  function indexOf(_this__u8e3s4, element) {
    if (element == null) {
      var inductionVariable = 0;
      var last = _this__u8e3s4.length - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (_this__u8e3s4[index] == null) {
            return index;
          }
        }
         while (inductionVariable <= last);
    } else {
      var inductionVariable_0 = 0;
      var last_0 = _this__u8e3s4.length - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          if (equals(element, _this__u8e3s4[index_0])) {
            return index_0;
          }
        }
         while (inductionVariable_0 <= last_0);
    }
    return -1;
  }
  function contains_0(_this__u8e3s4, element) {
    return indexOf_0(_this__u8e3s4, element) >= 0;
  }
  function single(_this__u8e3s4) {
    var tmp;
    switch (_this__u8e3s4.length) {
      case 0:
        throw NoSuchElementException.v('Array is empty.');
      case 1:
        tmp = _this__u8e3s4[0];
        break;
      default:
        throw IllegalArgumentException.z('Array has more than one element.');
    }
    return tmp;
  }
  function joinToString(_this__u8e3s4, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    return joinTo(_this__u8e3s4, StringBuilder.b1(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function contains_1(_this__u8e3s4, element) {
    return indexOf(_this__u8e3s4, element) >= 0;
  }
  function indexOf_0(_this__u8e3s4, element) {
    var inductionVariable = 0;
    var last = _this__u8e3s4.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (element === _this__u8e3s4[index]) {
          return index;
        }
      }
       while (inductionVariable <= last);
    return -1;
  }
  function joinTo(_this__u8e3s4, buffer, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    buffer.c1(prefix);
    var count = 0;
    var inductionVariable = 0;
    var last = _this__u8e3s4.length;
    $l$loop: while (inductionVariable < last) {
      var element = _this__u8e3s4[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      count = count + 1 | 0;
      if (count > 1) {
        buffer.c1(separator);
      }
      if (limit < 0 || count <= limit) {
        appendElement(buffer, element, transform);
      } else
        break $l$loop;
    }
    if (limit >= 0 && count > limit) {
      buffer.c1(truncated);
    }
    buffer.c1(postfix);
    return buffer;
  }
  function get_lastIndex_1(_this__u8e3s4) {
    return _this__u8e3s4.length - 1 | 0;
  }
  function zip(_this__u8e3s4, other) {
    // Inline function 'kotlin.collections.zip' call
    var tmp0 = _this__u8e3s4.length;
    // Inline function 'kotlin.comparisons.minOf' call
    var b = other.length;
    var size = Math.min(tmp0, b);
    var list = ArrayList.d1(size);
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp0_0 = _this__u8e3s4[i];
        var t2 = other[i];
        var tmp$ret$1 = to(tmp0_0, t2);
        list.r(tmp$ret$1);
      }
       while (inductionVariable < size);
    return list;
  }
  function getOrNull(_this__u8e3s4, index) {
    return (0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false) ? _this__u8e3s4[index] : null;
  }
  function withIndex$lambda($this_withIndex) {
    return () => arrayIterator($this_withIndex);
  }
  function joinToString_0(_this__u8e3s4, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    return joinTo_0(_this__u8e3s4, StringBuilder.b1(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function joinTo_0(_this__u8e3s4, buffer, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    buffer.c1(prefix);
    var count = 0;
    var _iterator__ex2g4s = _this__u8e3s4.e1();
    $l$loop: while (_iterator__ex2g4s.f1()) {
      var element = _iterator__ex2g4s.g1();
      count = count + 1 | 0;
      if (count > 1) {
        buffer.c1(separator);
      }
      if (limit < 0 || count <= limit) {
        appendElement(buffer, element, transform);
      } else
        break $l$loop;
    }
    if (limit >= 0 && count > limit) {
      buffer.c1(truncated);
    }
    buffer.c1(postfix);
    return buffer;
  }
  function toHashSet(_this__u8e3s4) {
    return toCollection_0(_this__u8e3s4, HashSet.i1(mapCapacity(collectionSizeOrDefault(_this__u8e3s4, 12))));
  }
  function toBooleanArray(_this__u8e3s4) {
    var result = booleanArray(_this__u8e3s4.j1());
    var index = 0;
    var _iterator__ex2g4s = _this__u8e3s4.e1();
    while (_iterator__ex2g4s.f1()) {
      var element = _iterator__ex2g4s.g1();
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      result[_unary__edvuaz] = element;
    }
    return result;
  }
  function first(_this__u8e3s4) {
    if (_this__u8e3s4.k1())
      throw NoSuchElementException.v('List is empty.');
    return _this__u8e3s4.l1(0);
  }
  function toList_0(_this__u8e3s4) {
    if (isInterface(_this__u8e3s4, Collection)) {
      var tmp;
      switch (_this__u8e3s4.j1()) {
        case 0:
          tmp = emptyList();
          break;
        case 1:
          var tmp_0;
          if (isInterface(_this__u8e3s4, KtList)) {
            tmp_0 = _this__u8e3s4.l1(0);
          } else {
            tmp_0 = _this__u8e3s4.e1().g1();
          }

          tmp = listOf(tmp_0);
          break;
        default:
          tmp = toMutableList_1(_this__u8e3s4);
          break;
      }
      return tmp;
    }
    return optimizeReadOnlyList(toMutableList_0(_this__u8e3s4));
  }
  function lastOrNull(_this__u8e3s4) {
    return _this__u8e3s4.k1() ? null : _this__u8e3s4.l1(_this__u8e3s4.j1() - 1 | 0);
  }
  function randomOrNull(_this__u8e3s4, random) {
    if (_this__u8e3s4.k1())
      return null;
    return elementAt(_this__u8e3s4, random.m1(_this__u8e3s4.j1()));
  }
  function toSet_0(_this__u8e3s4) {
    if (isInterface(_this__u8e3s4, Collection)) {
      var tmp;
      switch (_this__u8e3s4.j1()) {
        case 0:
          tmp = emptySet();
          break;
        case 1:
          var tmp_0;
          if (isInterface(_this__u8e3s4, KtList)) {
            tmp_0 = _this__u8e3s4.l1(0);
          } else {
            tmp_0 = _this__u8e3s4.e1().g1();
          }

          tmp = setOf(tmp_0);
          break;
        default:
          tmp = toCollection_0(_this__u8e3s4, LinkedHashSet.m(mapCapacity(_this__u8e3s4.j1())));
          break;
      }
      return tmp;
    }
    return optimizeReadOnlySet(toCollection_0(_this__u8e3s4, LinkedHashSet.n1()));
  }
  function random(_this__u8e3s4, random) {
    if (_this__u8e3s4.k1())
      throw NoSuchElementException.v('Collection is empty.');
    return elementAt(_this__u8e3s4, random.m1(_this__u8e3s4.j1()));
  }
  function sum(_this__u8e3s4) {
    var sum = 0;
    var _iterator__ex2g4s = _this__u8e3s4.e1();
    while (_iterator__ex2g4s.f1()) {
      var element = _iterator__ex2g4s.g1();
      sum = sum + element | 0;
    }
    return sum;
  }
  function maxOrNull(_this__u8e3s4) {
    var iterator = _this__u8e3s4.e1();
    if (!iterator.f1())
      return null;
    var max = iterator.g1();
    while (iterator.f1()) {
      var e = iterator.g1();
      if (compareTo(max, e) < 0)
        max = e;
    }
    return max;
  }
  function first_0(_this__u8e3s4) {
    if (isInterface(_this__u8e3s4, KtList))
      return first(_this__u8e3s4);
    else {
      var iterator = _this__u8e3s4.e1();
      if (!iterator.f1())
        throw NoSuchElementException.v('Collection is empty.');
      return iterator.g1();
    }
  }
  function minus(_this__u8e3s4, elements) {
    var other = convertToListIfNotCollection(elements);
    if (other.k1())
      return toList_0(_this__u8e3s4);
    // Inline function 'kotlin.collections.filterNot' call
    // Inline function 'kotlin.collections.filterNotTo' call
    var destination = ArrayList.o1();
    var _iterator__ex2g4s = _this__u8e3s4.e1();
    while (_iterator__ex2g4s.f1()) {
      var element = _iterator__ex2g4s.g1();
      if (!other.p1(element)) {
        destination.r(element);
      }
    }
    return destination;
  }
  function minus_0(_this__u8e3s4, element) {
    var result = ArrayList.d1(collectionSizeOrDefault(_this__u8e3s4, 10));
    var removed = false;
    // Inline function 'kotlin.collections.filterTo' call
    var _iterator__ex2g4s = _this__u8e3s4.e1();
    while (_iterator__ex2g4s.f1()) {
      var element_0 = _iterator__ex2g4s.g1();
      var tmp;
      if (!removed && equals(element_0, element)) {
        removed = true;
        tmp = false;
      } else {
        tmp = true;
      }
      if (tmp) {
        result.r(element_0);
      }
    }
    return result;
  }
  function take(_this__u8e3s4, n) {
    // Inline function 'kotlin.require' call
    if (!(n >= 0)) {
      var message = 'Requested element count ' + n + ' is less than zero.';
      throw IllegalArgumentException.z(toString_1(message));
    }
    if (n === 0)
      return emptyList();
    if (isInterface(_this__u8e3s4, Collection)) {
      if (n >= _this__u8e3s4.j1())
        return toList_0(_this__u8e3s4);
      if (n === 1)
        return listOf(first_0(_this__u8e3s4));
    }
    var count = 0;
    var list = ArrayList.d1(n);
    var _iterator__ex2g4s = _this__u8e3s4.e1();
    $l$loop: while (_iterator__ex2g4s.f1()) {
      var item = _iterator__ex2g4s.g1();
      list.r(item);
      count = count + 1 | 0;
      if (count === n)
        break $l$loop;
    }
    return optimizeReadOnlyList(list);
  }
  function sortedWith(_this__u8e3s4, comparator) {
    if (isInterface(_this__u8e3s4, Collection)) {
      if (_this__u8e3s4.j1() <= 1)
        return toList_0(_this__u8e3s4);
      // Inline function 'kotlin.collections.toTypedArray' call
      var tmp = copyToArray(_this__u8e3s4);
      // Inline function 'kotlin.apply' call
      var this_0 = isArray(tmp) ? tmp : THROW_CCE();
      sortWith(this_0, comparator);
      return asList(this_0);
    }
    // Inline function 'kotlin.apply' call
    var this_1 = toMutableList_0(_this__u8e3s4);
    sortWith_0(this_1, comparator);
    return this_1;
  }
  function distinct(_this__u8e3s4) {
    return toList_0(toMutableSet(_this__u8e3s4));
  }
  function plus(_this__u8e3s4, element) {
    var result = ArrayList.d1(_this__u8e3s4.j1() + 1 | 0);
    result.q1(_this__u8e3s4);
    result.r(element);
    return result;
  }
  function toMutableList_0(_this__u8e3s4) {
    if (isInterface(_this__u8e3s4, Collection))
      return toMutableList_1(_this__u8e3s4);
    return toCollection_0(_this__u8e3s4, ArrayList.o1());
  }
  function shuffle(_this__u8e3s4, random) {
    var inductionVariable = get_lastIndex_2(_this__u8e3s4);
    if (1 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var j = random.m1(i + 1 | 0);
        _this__u8e3s4.r1(j, _this__u8e3s4.r1(i, _this__u8e3s4.l1(j)));
      }
       while (1 <= inductionVariable);
  }
  function toCollection_0(_this__u8e3s4, destination) {
    var _iterator__ex2g4s = _this__u8e3s4.e1();
    while (_iterator__ex2g4s.f1()) {
      var item = _iterator__ex2g4s.g1();
      destination.r(item);
    }
    return destination;
  }
  function toMutableList_1(_this__u8e3s4) {
    return ArrayList.q(_this__u8e3s4);
  }
  function elementAt(_this__u8e3s4, index) {
    if (isInterface(_this__u8e3s4, KtList))
      return _this__u8e3s4.l1(index);
    return elementAtOrElse(_this__u8e3s4, index, elementAt$lambda(index));
  }
  function toMutableSet(_this__u8e3s4) {
    var tmp;
    if (isInterface(_this__u8e3s4, Collection)) {
      tmp = LinkedHashSet.s1(_this__u8e3s4);
    } else {
      tmp = toCollection_0(_this__u8e3s4, LinkedHashSet.n1());
    }
    return tmp;
  }
  function elementAtOrElse(_this__u8e3s4, index, defaultValue) {
    if (isInterface(_this__u8e3s4, KtList)) {
      // Inline function 'kotlin.collections.getOrElse' call
      return (0 <= index ? index < _this__u8e3s4.j1() : false) ? _this__u8e3s4.l1(index) : defaultValue(index);
    }
    if (index < 0)
      return defaultValue(index);
    var iterator = _this__u8e3s4.e1();
    var count = 0;
    while (iterator.f1()) {
      var element = iterator.g1();
      var _unary__edvuaz = count;
      count = _unary__edvuaz + 1 | 0;
      if (index === _unary__edvuaz)
        return element;
    }
    return defaultValue(index);
  }
  function last(_this__u8e3s4) {
    if (_this__u8e3s4.k1())
      throw NoSuchElementException.v('List is empty.');
    return _this__u8e3s4.l1(get_lastIndex_2(_this__u8e3s4));
  }
  function singleOrNull(_this__u8e3s4) {
    return _this__u8e3s4.j1() === 1 ? _this__u8e3s4.l1(0) : null;
  }
  function elementAt$lambda($index) {
    return (it) => {
      throw IndexOutOfBoundsException.w1("Collection doesn't contain element at index " + $index + '.');
    };
  }
  function until(_this__u8e3s4, to) {
    if (to <= -2147483648)
      return Companion_getInstance_9().x1_1;
    return numberRangeToNumber(_this__u8e3s4, to - 1 | 0);
  }
  function coerceAtLeast(_this__u8e3s4, minimumValue) {
    return _this__u8e3s4 < minimumValue ? minimumValue : _this__u8e3s4;
  }
  function coerceIn(_this__u8e3s4, minimumValue, maximumValue) {
    if (minimumValue > maximumValue)
      throw IllegalArgumentException.z('Cannot coerce value to an empty range: maximum ' + maximumValue + ' is less than minimum ' + minimumValue + '.');
    if (_this__u8e3s4 < minimumValue)
      return minimumValue;
    if (_this__u8e3s4 > maximumValue)
      return maximumValue;
    return _this__u8e3s4;
  }
  function coerceAtLeast_0(_this__u8e3s4, minimumValue) {
    return compare(_this__u8e3s4, minimumValue) < 0 ? minimumValue : _this__u8e3s4;
  }
  function downTo(_this__u8e3s4, to) {
    return Companion_instance_10.y1(_this__u8e3s4, to, -1);
  }
  function coerceAtMost(_this__u8e3s4, maximumValue) {
    return _this__u8e3s4 > maximumValue ? maximumValue : _this__u8e3s4;
  }
  function contains_2(_this__u8e3s4, value) {
    // Inline function 'kotlin.let' call
    var it = toIntExactOrNull(value);
    return !(it == null) ? _this__u8e3s4.z1(it) : false;
  }
  function toIntExactOrNull(_this__u8e3s4) {
    return (compare(new Long(-2147483648, -1), _this__u8e3s4) <= 0 ? compare(_this__u8e3s4, new Long(2147483647, 0)) <= 0 : false) ? convertToInt(_this__u8e3s4) : null;
  }
  function minus_1(_this__u8e3s4, element) {
    var result = LinkedHashSet.m(mapCapacity(_this__u8e3s4.j1()));
    var removed = false;
    // Inline function 'kotlin.collections.filterTo' call
    var _iterator__ex2g4s = _this__u8e3s4.e1();
    while (_iterator__ex2g4s.f1()) {
      var element_0 = _iterator__ex2g4s.g1();
      var tmp;
      if (!removed && equals(element_0, element)) {
        removed = true;
        tmp = false;
      } else {
        tmp = true;
      }
      if (tmp) {
        result.r(element_0);
      }
    }
    return result;
  }
  function plus_0(_this__u8e3s4, elements) {
    var tmp0_safe_receiver = collectionSizeOrNull(elements);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = _this__u8e3s4.j1() + tmp0_safe_receiver | 0;
    }
    var tmp1_elvis_lhs = tmp;
    var result = LinkedHashSet.m(mapCapacity(tmp1_elvis_lhs == null ? imul(_this__u8e3s4.j1(), 2) : tmp1_elvis_lhs));
    result.q1(_this__u8e3s4);
    addAll(result, elements);
    return result;
  }
  function take_0(_this__u8e3s4, n) {
    // Inline function 'kotlin.require' call
    if (!(n >= 0)) {
      var message = 'Requested character count ' + n + ' is less than zero.';
      throw IllegalArgumentException.z(toString_1(message));
    }
    return substring(_this__u8e3s4, 0, coerceAtMost(n, _this__u8e3s4.length));
  }
  function _Char___init__impl__6a9atx(value) {
    return value;
  }
  function _get_value__a43j40($this) {
    return $this;
  }
  function _Char___init__impl__6a9atx_0(code) {
    // Inline function 'kotlin.UShort.toInt' call
    var tmp$ret$0 = _UShort___get_data__impl__g0245(code) & 65535;
    return _Char___init__impl__6a9atx(tmp$ret$0);
  }
  function Char__compareTo_impl_ypi4mb($this, other) {
    return _get_value__a43j40($this) - _get_value__a43j40(other) | 0;
  }
  function Char__minus_impl_a2frrh($this, other) {
    return _get_value__a43j40($this) - _get_value__a43j40(other) | 0;
  }
  function Char__minus_impl_a2frrh_0($this, other) {
    return numberToChar(_get_value__a43j40($this) - other | 0);
  }
  function Char__toInt_impl_vasixd($this) {
    return _get_value__a43j40($this);
  }
  function toString($this) {
    // Inline function 'kotlin.js.unsafeCast' call
    return String.fromCharCode(_get_value__a43j40($this));
  }
  var Companion_instance;
  function Companion_getInstance() {
    return Companion_instance;
  }
  function toString_0(_this__u8e3s4) {
    var tmp1_elvis_lhs = _this__u8e3s4 == null ? null : toString_1(_this__u8e3s4);
    return tmp1_elvis_lhs == null ? 'null' : tmp1_elvis_lhs;
  }
  function plus_1(_this__u8e3s4, other) {
    var tmp1_elvis_lhs = _this__u8e3s4 == null ? null : toString_1(_this__u8e3s4);
    var tmp = tmp1_elvis_lhs == null ? 'null' : tmp1_elvis_lhs;
    var tmp3_elvis_lhs = other == null ? null : toString_1(other);
    return tmp + (tmp3_elvis_lhs == null ? 'null' : tmp3_elvis_lhs);
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 === VOID)
      new Companion_0();
    return Companion_instance_0;
  }
  function abs(_this__u8e3s4) {
    var tmp;
    // Inline function 'kotlin.js.internal.isNegative' call
    if (_this__u8e3s4 < 0) {
      // Inline function 'kotlin.js.internal.unaryMinus' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = -_this__u8e3s4;
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function implement(interfaces) {
    var maxSize = 1;
    var masks = [];
    var inductionVariable = 0;
    var last = interfaces.length;
    while (inductionVariable < last) {
      var i = interfaces[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var currentSize = maxSize;
      var tmp0_elvis_lhs = i.prototype.$imask$;
      var imask = tmp0_elvis_lhs == null ? i.$imask$ : tmp0_elvis_lhs;
      if (!(imask == null)) {
        masks.push(imask);
        currentSize = imask.length;
      }
      var iid = i.$metadata$.iid;
      var tmp;
      if (iid == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp = bitMaskWith(iid);
      }
      var iidImask = tmp;
      if (!(iidImask == null)) {
        masks.push(iidImask);
        currentSize = Math.max(currentSize, iidImask.length);
      }
      if (currentSize > maxSize) {
        maxSize = currentSize;
      }
    }
    return compositeBitMask(maxSize, masks);
  }
  function bitMaskWith(activeBit) {
    var numberIndex = activeBit >> 5;
    var intArray = new Int32Array(numberIndex + 1 | 0);
    var positionInNumber = activeBit & 31;
    var numberWithSettledBit = 1 << positionInNumber;
    intArray[numberIndex] = intArray[numberIndex] | numberWithSettledBit;
    return intArray;
  }
  function compositeBitMask(capacity, masks) {
    var tmp = 0;
    var tmp_0 = new Int32Array(capacity);
    while (tmp < capacity) {
      var tmp_1 = tmp;
      var result = 0;
      var inductionVariable = 0;
      var last = masks.length;
      while (inductionVariable < last) {
        var mask = masks[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        if (tmp_1 < mask.length) {
          result = result | mask[tmp_1];
        }
      }
      tmp_0[tmp_1] = result;
      tmp = tmp + 1 | 0;
    }
    return tmp_0;
  }
  function isBitSet(_this__u8e3s4, possibleActiveBit) {
    var numberIndex = possibleActiveBit >> 5;
    if (numberIndex > _this__u8e3s4.length)
      return false;
    var positionInNumber = possibleActiveBit & 31;
    var numberWithSettledBit = 1 << positionInNumber;
    return !((_this__u8e3s4[numberIndex] & numberWithSettledBit) === 0);
  }
  function arrayIterator(array) {
    return new arrayIterator$1(array);
  }
  function booleanArray(size) {
    var tmp0 = 'BooleanArray';
    // Inline function 'withType' call
    var array = fillArrayVal(Array(size), false);
    array.$type$ = tmp0;
    // Inline function 'kotlin.js.unsafeCast' call
    return array;
  }
  function fillArrayVal(array, initValue) {
    var inductionVariable = 0;
    var last = array.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        array[i] = initValue;
      }
       while (!(i === last));
    return array;
  }
  function charArray(size) {
    var tmp0 = 'CharArray';
    // Inline function 'withType' call
    var array = new Uint16Array(size);
    array.$type$ = tmp0;
    // Inline function 'kotlin.js.unsafeCast' call
    return array;
  }
  function longArray(size) {
    var tmp0 = 'LongArray';
    // Inline function 'withType' call
    var array = fillArrayVal(Array(size), new Long(0, 0));
    array.$type$ = tmp0;
    // Inline function 'kotlin.js.unsafeCast' call
    return array;
  }
  function charArrayOf(arr) {
    var tmp0 = 'CharArray';
    // Inline function 'withType' call
    var array = new Uint16Array(arr);
    array.$type$ = tmp0;
    // Inline function 'kotlin.js.unsafeCast' call
    return array;
  }
  function get_buf() {
    _init_properties_bitUtils_kt__nfcg4k();
    return buf;
  }
  var buf;
  function get_bufFloat64() {
    _init_properties_bitUtils_kt__nfcg4k();
    return bufFloat64;
  }
  var bufFloat64;
  var bufFloat32;
  function get_bufInt32() {
    _init_properties_bitUtils_kt__nfcg4k();
    return bufInt32;
  }
  var bufInt32;
  function get_lowIndex() {
    _init_properties_bitUtils_kt__nfcg4k();
    return lowIndex;
  }
  var lowIndex;
  function get_highIndex() {
    _init_properties_bitUtils_kt__nfcg4k();
    return highIndex;
  }
  var highIndex;
  function getNumberHashCode(obj) {
    _init_properties_bitUtils_kt__nfcg4k();
    // Inline function 'kotlin.js.jsBitwiseOr' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    if ((obj | 0) === obj) {
      return numberToInt(obj);
    }
    get_bufFloat64()[0] = obj;
    return imul(get_bufInt32()[get_highIndex()], 31) + get_bufInt32()[get_lowIndex()] | 0;
  }
  var properties_initialized_bitUtils_kt_i2bo3e;
  function _init_properties_bitUtils_kt__nfcg4k() {
    if (!properties_initialized_bitUtils_kt_i2bo3e) {
      properties_initialized_bitUtils_kt_i2bo3e = true;
      buf = new ArrayBuffer(8);
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      bufFloat64 = new Float64Array(get_buf());
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      bufFloat32 = new Float32Array(get_buf());
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      bufInt32 = new Int32Array(get_buf());
      // Inline function 'kotlin.run' call
      get_bufFloat64()[0] = -1.0;
      lowIndex = !(get_bufInt32()[0] === 0) ? 1 : 0;
      highIndex = 1 - get_lowIndex() | 0;
    }
  }
  function get_ZERO() {
    _init_properties_boxedLong_kt__v24qrw();
    return ZERO;
  }
  var ZERO;
  function get_ONE() {
    _init_properties_boxedLong_kt__v24qrw();
    return ONE;
  }
  var ONE;
  function get_NEG_ONE() {
    _init_properties_boxedLong_kt__v24qrw();
    return NEG_ONE;
  }
  var NEG_ONE;
  function get_MAX_VALUE() {
    _init_properties_boxedLong_kt__v24qrw();
    return MAX_VALUE;
  }
  var MAX_VALUE;
  function get_MIN_VALUE() {
    _init_properties_boxedLong_kt__v24qrw();
    return MIN_VALUE;
  }
  var MIN_VALUE;
  function get_TWO_PWR_24_() {
    _init_properties_boxedLong_kt__v24qrw();
    return TWO_PWR_24_;
  }
  var TWO_PWR_24_;
  function compare(_this__u8e3s4, other) {
    _init_properties_boxedLong_kt__v24qrw();
    if (equalsLong(_this__u8e3s4, other)) {
      return 0;
    }
    var thisNeg = isNegative(_this__u8e3s4);
    var otherNeg = isNegative(other);
    return thisNeg && !otherNeg ? -1 : !thisNeg && otherNeg ? 1 : isNegative(subtract(_this__u8e3s4, other)) ? -1 : 1;
  }
  function add(_this__u8e3s4, other) {
    _init_properties_boxedLong_kt__v24qrw();
    var a48 = _this__u8e3s4.s2_1 >>> 16 | 0;
    var a32 = _this__u8e3s4.s2_1 & 65535;
    var a16 = _this__u8e3s4.r2_1 >>> 16 | 0;
    var a00 = _this__u8e3s4.r2_1 & 65535;
    var b48 = other.s2_1 >>> 16 | 0;
    var b32 = other.s2_1 & 65535;
    var b16 = other.r2_1 >>> 16 | 0;
    var b00 = other.r2_1 & 65535;
    var c48 = 0;
    var c32 = 0;
    var c16 = 0;
    var c00 = 0;
    c00 = c00 + (a00 + b00 | 0) | 0;
    c16 = c16 + (c00 >>> 16 | 0) | 0;
    c00 = c00 & 65535;
    c16 = c16 + (a16 + b16 | 0) | 0;
    c32 = c32 + (c16 >>> 16 | 0) | 0;
    c16 = c16 & 65535;
    c32 = c32 + (a32 + b32 | 0) | 0;
    c48 = c48 + (c32 >>> 16 | 0) | 0;
    c32 = c32 & 65535;
    c48 = c48 + (a48 + b48 | 0) | 0;
    c48 = c48 & 65535;
    return new Long(c16 << 16 | c00, c48 << 16 | c32);
  }
  function subtract(_this__u8e3s4, other) {
    _init_properties_boxedLong_kt__v24qrw();
    return add(_this__u8e3s4, negate(other));
  }
  function multiply(_this__u8e3s4, other) {
    _init_properties_boxedLong_kt__v24qrw();
    if (isZero(_this__u8e3s4)) {
      return get_ZERO();
    } else if (isZero(other)) {
      return get_ZERO();
    }
    if (equalsLong(_this__u8e3s4, get_MIN_VALUE())) {
      return isOdd(other) ? get_MIN_VALUE() : get_ZERO();
    } else if (equalsLong(other, get_MIN_VALUE())) {
      return isOdd(_this__u8e3s4) ? get_MIN_VALUE() : get_ZERO();
    }
    if (isNegative(_this__u8e3s4)) {
      var tmp;
      if (isNegative(other)) {
        tmp = multiply(negate(_this__u8e3s4), negate(other));
      } else {
        tmp = negate(multiply(negate(_this__u8e3s4), other));
      }
      return tmp;
    } else if (isNegative(other)) {
      return negate(multiply(_this__u8e3s4, negate(other)));
    }
    if (lessThan(_this__u8e3s4, get_TWO_PWR_24_()) && lessThan(other, get_TWO_PWR_24_())) {
      return fromNumber(toNumber(_this__u8e3s4) * toNumber(other));
    }
    var a48 = _this__u8e3s4.s2_1 >>> 16 | 0;
    var a32 = _this__u8e3s4.s2_1 & 65535;
    var a16 = _this__u8e3s4.r2_1 >>> 16 | 0;
    var a00 = _this__u8e3s4.r2_1 & 65535;
    var b48 = other.s2_1 >>> 16 | 0;
    var b32 = other.s2_1 & 65535;
    var b16 = other.r2_1 >>> 16 | 0;
    var b00 = other.r2_1 & 65535;
    var c48 = 0;
    var c32 = 0;
    var c16 = 0;
    var c00 = 0;
    c00 = c00 + imul(a00, b00) | 0;
    c16 = c16 + (c00 >>> 16 | 0) | 0;
    c00 = c00 & 65535;
    c16 = c16 + imul(a16, b00) | 0;
    c32 = c32 + (c16 >>> 16 | 0) | 0;
    c16 = c16 & 65535;
    c16 = c16 + imul(a00, b16) | 0;
    c32 = c32 + (c16 >>> 16 | 0) | 0;
    c16 = c16 & 65535;
    c32 = c32 + imul(a32, b00) | 0;
    c48 = c48 + (c32 >>> 16 | 0) | 0;
    c32 = c32 & 65535;
    c32 = c32 + imul(a16, b16) | 0;
    c48 = c48 + (c32 >>> 16 | 0) | 0;
    c32 = c32 & 65535;
    c32 = c32 + imul(a00, b32) | 0;
    c48 = c48 + (c32 >>> 16 | 0) | 0;
    c32 = c32 & 65535;
    c48 = c48 + (((imul(a48, b00) + imul(a32, b16) | 0) + imul(a16, b32) | 0) + imul(a00, b48) | 0) | 0;
    c48 = c48 & 65535;
    return new Long(c16 << 16 | c00, c48 << 16 | c32);
  }
  function divide(_this__u8e3s4, other) {
    _init_properties_boxedLong_kt__v24qrw();
    if (isZero(other)) {
      throw Exception.y2('division by zero');
    } else if (isZero(_this__u8e3s4)) {
      return get_ZERO();
    }
    if (equalsLong(_this__u8e3s4, get_MIN_VALUE())) {
      if (equalsLong(other, get_ONE()) || equalsLong(other, get_NEG_ONE())) {
        return get_MIN_VALUE();
      } else if (equalsLong(other, get_MIN_VALUE())) {
        return get_ONE();
      } else {
        var halfThis = shiftRight(_this__u8e3s4, 1);
        var approx = shiftLeft(divide(halfThis, other), 1);
        if (equalsLong(approx, get_ZERO())) {
          return isNegative(other) ? get_ONE() : get_NEG_ONE();
        } else {
          var rem = subtract(_this__u8e3s4, multiply(other, approx));
          return add(approx, divide(rem, other));
        }
      }
    } else if (equalsLong(other, get_MIN_VALUE())) {
      return get_ZERO();
    }
    if (isNegative(_this__u8e3s4)) {
      var tmp;
      if (isNegative(other)) {
        tmp = divide(negate(_this__u8e3s4), negate(other));
      } else {
        tmp = negate(divide(negate(_this__u8e3s4), other));
      }
      return tmp;
    } else if (isNegative(other)) {
      return negate(divide(_this__u8e3s4, negate(other)));
    }
    var res = get_ZERO();
    var rem_0 = _this__u8e3s4;
    while (greaterThanOrEqual(rem_0, other)) {
      var approxDouble = toNumber(rem_0) / toNumber(other);
      var approx2 = Math.max(1.0, Math.floor(approxDouble));
      var log2 = Math.ceil(Math.log(approx2) / Math.LN2);
      var delta = log2 <= 48 ? 1.0 : Math.pow(2.0, log2 - 48);
      var approxRes = fromNumber(approx2);
      var approxRem = multiply(approxRes, other);
      while (isNegative(approxRem) || greaterThan(approxRem, rem_0)) {
        approx2 = approx2 - delta;
        approxRes = fromNumber(approx2);
        approxRem = multiply(approxRes, other);
      }
      if (isZero(approxRes)) {
        approxRes = get_ONE();
      }
      res = add(res, approxRes);
      rem_0 = subtract(rem_0, approxRem);
    }
    return res;
  }
  function shiftLeft(_this__u8e3s4, numBits) {
    _init_properties_boxedLong_kt__v24qrw();
    var numBits_0 = numBits & 63;
    if (numBits_0 === 0) {
      return _this__u8e3s4;
    } else {
      if (numBits_0 < 32) {
        return new Long(_this__u8e3s4.r2_1 << numBits_0, _this__u8e3s4.s2_1 << numBits_0 | (_this__u8e3s4.r2_1 >>> (32 - numBits_0 | 0) | 0));
      } else {
        return new Long(0, _this__u8e3s4.r2_1 << (numBits_0 - 32 | 0));
      }
    }
  }
  function shiftRight(_this__u8e3s4, numBits) {
    _init_properties_boxedLong_kt__v24qrw();
    var numBits_0 = numBits & 63;
    if (numBits_0 === 0) {
      return _this__u8e3s4;
    } else {
      if (numBits_0 < 32) {
        return new Long(_this__u8e3s4.r2_1 >>> numBits_0 | 0 | _this__u8e3s4.s2_1 << (32 - numBits_0 | 0), _this__u8e3s4.s2_1 >> numBits_0);
      } else {
        return new Long(_this__u8e3s4.s2_1 >> (numBits_0 - 32 | 0), _this__u8e3s4.s2_1 >= 0 ? 0 : -1);
      }
    }
  }
  function bitwiseOr(_this__u8e3s4, other) {
    _init_properties_boxedLong_kt__v24qrw();
    return new Long(_this__u8e3s4.r2_1 | other.r2_1, _this__u8e3s4.s2_1 | other.s2_1);
  }
  function invert(_this__u8e3s4) {
    _init_properties_boxedLong_kt__v24qrw();
    return new Long(~_this__u8e3s4.r2_1, ~_this__u8e3s4.s2_1);
  }
  function convertToInt(_this__u8e3s4) {
    _init_properties_boxedLong_kt__v24qrw();
    return _this__u8e3s4.r2_1;
  }
  function toNumber(_this__u8e3s4) {
    _init_properties_boxedLong_kt__v24qrw();
    return _this__u8e3s4.s2_1 * 4.294967296E9 + getLowBitsUnsigned(_this__u8e3s4);
  }
  function toStringImpl(_this__u8e3s4, radix) {
    _init_properties_boxedLong_kt__v24qrw();
    if (isZero(_this__u8e3s4)) {
      return '0';
    }
    if (isNegative(_this__u8e3s4)) {
      if (equalsLong(_this__u8e3s4, get_MIN_VALUE())) {
        var radixLong = fromInt(radix);
        var div = divide(_this__u8e3s4, radixLong);
        var rem = convertToInt(subtract(multiply(div, radixLong), _this__u8e3s4));
        var tmp = toStringImpl(div, radix);
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.unsafeCast' call
        return tmp + rem.toString(radix);
      } else {
        return '-' + toStringImpl(negate(_this__u8e3s4), radix);
      }
    }
    var digitsPerTime = radix === 2 ? 31 : radix <= 10 ? 9 : radix <= 21 ? 7 : radix <= 35 ? 6 : 5;
    var radixToPower = fromNumber(Math.pow(radix, digitsPerTime));
    var rem_0 = _this__u8e3s4;
    var result = '';
    while (true) {
      var remDiv = divide(rem_0, radixToPower);
      var intval = convertToInt(subtract(rem_0, multiply(remDiv, radixToPower)));
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.js.unsafeCast' call
      var digits = intval.toString(radix);
      rem_0 = remDiv;
      if (isZero(rem_0)) {
        return digits + result;
      } else {
        while (digits.length < digitsPerTime) {
          digits = '0' + digits;
        }
        result = digits + result;
      }
    }
  }
  function equalsLong(_this__u8e3s4, other) {
    _init_properties_boxedLong_kt__v24qrw();
    return _this__u8e3s4.s2_1 === other.s2_1 && _this__u8e3s4.r2_1 === other.r2_1;
  }
  function hashCode(l) {
    _init_properties_boxedLong_kt__v24qrw();
    return l.r2_1 ^ l.s2_1;
  }
  function fromInt(value) {
    _init_properties_boxedLong_kt__v24qrw();
    return new Long(value, value < 0 ? -1 : 0);
  }
  function isNegative(_this__u8e3s4) {
    _init_properties_boxedLong_kt__v24qrw();
    return _this__u8e3s4.s2_1 < 0;
  }
  function isZero(_this__u8e3s4) {
    _init_properties_boxedLong_kt__v24qrw();
    return _this__u8e3s4.s2_1 === 0 && _this__u8e3s4.r2_1 === 0;
  }
  function isOdd(_this__u8e3s4) {
    _init_properties_boxedLong_kt__v24qrw();
    return (_this__u8e3s4.r2_1 & 1) === 1;
  }
  function negate(_this__u8e3s4) {
    _init_properties_boxedLong_kt__v24qrw();
    return add(invert(_this__u8e3s4), new Long(1, 0));
  }
  function lessThan(_this__u8e3s4, other) {
    _init_properties_boxedLong_kt__v24qrw();
    return compare(_this__u8e3s4, other) < 0;
  }
  function fromNumber(value) {
    _init_properties_boxedLong_kt__v24qrw();
    if (isNaN_0(value)) {
      return get_ZERO();
    } else if (value <= -9.223372036854776E18) {
      return get_MIN_VALUE();
    } else if (value + 1 >= 9.223372036854776E18) {
      return get_MAX_VALUE();
    } else if (value < 0) {
      return negate(fromNumber(-value));
    } else {
      var twoPwr32 = 4.294967296E9;
      // Inline function 'kotlin.js.jsBitwiseOr' call
      var tmp = value % twoPwr32 | 0;
      // Inline function 'kotlin.js.jsBitwiseOr' call
      var tmp$ret$1 = value / twoPwr32 | 0;
      return new Long(tmp, tmp$ret$1);
    }
  }
  function greaterThan(_this__u8e3s4, other) {
    _init_properties_boxedLong_kt__v24qrw();
    return compare(_this__u8e3s4, other) > 0;
  }
  function greaterThanOrEqual(_this__u8e3s4, other) {
    _init_properties_boxedLong_kt__v24qrw();
    return compare(_this__u8e3s4, other) >= 0;
  }
  function getLowBitsUnsigned(_this__u8e3s4) {
    _init_properties_boxedLong_kt__v24qrw();
    return _this__u8e3s4.r2_1 >= 0 ? _this__u8e3s4.r2_1 : 4.294967296E9 + _this__u8e3s4.r2_1;
  }
  function numberToLong(a) {
    _init_properties_boxedLong_kt__v24qrw();
    var tmp;
    if (a instanceof Long) {
      tmp = a;
    } else {
      tmp = fromNumber(a);
    }
    return tmp;
  }
  var properties_initialized_boxedLong_kt_lfwt2;
  function _init_properties_boxedLong_kt__v24qrw() {
    if (!properties_initialized_boxedLong_kt_lfwt2) {
      properties_initialized_boxedLong_kt_lfwt2 = true;
      ZERO = fromInt(0);
      ONE = fromInt(1);
      NEG_ONE = fromInt(-1);
      MAX_VALUE = new Long(-1, 2147483647);
      MIN_VALUE = new Long(0, -2147483648);
      TWO_PWR_24_ = fromInt(16777216);
    }
  }
  function charSequenceGet(a, index) {
    var tmp;
    if (isString(a)) {
      tmp = charCodeAt(a, index);
    } else {
      tmp = a.b(index);
    }
    return tmp;
  }
  function isString(a) {
    return typeof a === 'string';
  }
  function charCodeAt(_this__u8e3s4, index) {
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4.charCodeAt(index);
  }
  function charSequenceLength(a) {
    var tmp;
    if (isString(a)) {
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.js.unsafeCast' call
      tmp = a.length;
    } else {
      tmp = a.a();
    }
    return tmp;
  }
  function charSequenceSubSequence(a, startIndex, endIndex) {
    var tmp;
    if (isString(a)) {
      tmp = substring(a, startIndex, endIndex);
    } else {
      tmp = a.c(startIndex, endIndex);
    }
    return tmp;
  }
  function contentEqualsInternal(_this__u8e3s4, other) {
    // Inline function 'kotlin.js.asDynamic' call
    var a = _this__u8e3s4;
    // Inline function 'kotlin.js.asDynamic' call
    var b = other;
    if (a === b)
      return true;
    if (a == null || b == null || !isArrayish(b) || a.length != b.length)
      return false;
    var inductionVariable = 0;
    var last = a.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!equals(a[i], b[i])) {
          return false;
        }
      }
       while (inductionVariable < last);
    return true;
  }
  function contentHashCodeInternal(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    var a = _this__u8e3s4;
    if (a == null)
      return 0;
    var result = 1;
    var inductionVariable = 0;
    var last = a.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        result = imul(result, 31) + hashCode_0(a[i]) | 0;
      }
       while (inductionVariable < last);
    return result;
  }
  function arrayToString(array) {
    return joinToString(array, ', ', '[', ']', VOID, VOID, arrayToString$lambda);
  }
  function arrayToString$lambda(it) {
    return toString_1(it);
  }
  function compareTo(a, b) {
    var tmp;
    switch (typeof a) {
      case 'number':
        var tmp_0;
        if (typeof b === 'number') {
          tmp_0 = doubleCompareTo(a, b);
        } else {
          if (b instanceof Long) {
            tmp_0 = doubleCompareTo(a, toNumber(b));
          } else {
            tmp_0 = primitiveCompareTo(a, b);
          }
        }

        tmp = tmp_0;
        break;
      case 'string':
      case 'boolean':
      case 'bigint':
        tmp = primitiveCompareTo(a, b);
        break;
      default:
        tmp = compareToDoNotIntrinsicify(a, b);
        break;
    }
    return tmp;
  }
  function doubleCompareTo(a, b) {
    var tmp;
    if (a < b) {
      tmp = -1;
    } else if (a > b) {
      tmp = 1;
    } else if (a === b) {
      var tmp_0;
      if (a !== 0) {
        tmp_0 = 0;
      } else {
        // Inline function 'kotlin.js.asDynamic' call
        var ia = 1 / a;
        var tmp_1;
        // Inline function 'kotlin.js.asDynamic' call
        if (ia === 1 / b) {
          tmp_1 = 0;
        } else {
          if (ia < 0) {
            tmp_1 = -1;
          } else {
            tmp_1 = 1;
          }
        }
        tmp_0 = tmp_1;
      }
      tmp = tmp_0;
    } else if (a !== a) {
      tmp = b !== b ? 0 : 1;
    } else {
      tmp = -1;
    }
    return tmp;
  }
  function primitiveCompareTo(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  }
  function compareToDoNotIntrinsicify(a, b) {
    return a.d(b);
  }
  function identityHashCode(obj) {
    return getObjectHashCode(obj);
  }
  function getObjectHashCode(obj) {
    // Inline function 'kotlin.js.jsIn' call
    if (!('kotlinHashCodeValue$' in obj)) {
      var hash = calculateRandomHash();
      var descriptor = new Object();
      descriptor.value = hash;
      descriptor.enumerable = false;
      Object.defineProperty(obj, 'kotlinHashCodeValue$', descriptor);
    }
    // Inline function 'kotlin.js.unsafeCast' call
    return obj['kotlinHashCodeValue$'];
  }
  function calculateRandomHash() {
    // Inline function 'kotlin.js.jsBitwiseOr' call
    return Math.random() * 4.294967296E9 | 0;
  }
  function defineProp(obj, name, getter, setter, enumerable) {
    return Object.defineProperty(obj, name, {configurable: true, get: getter, set: setter, enumerable: enumerable});
  }
  function equals(obj1, obj2) {
    if (obj1 == null) {
      return obj2 == null;
    }
    if (obj2 == null) {
      return false;
    }
    if (typeof obj1 === 'object' && typeof obj1.equals === 'function') {
      return obj1.equals(obj2);
    }
    if (obj1 !== obj1) {
      return obj2 !== obj2;
    }
    if (typeof obj1 === 'number' && typeof obj2 === 'number') {
      var tmp;
      if (obj1 === obj2) {
        var tmp_0;
        if (obj1 !== 0) {
          tmp_0 = true;
        } else {
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_1 = 1 / obj1;
          // Inline function 'kotlin.js.asDynamic' call
          tmp_0 = tmp_1 === 1 / obj2;
        }
        tmp = tmp_0;
      } else {
        tmp = false;
      }
      return tmp;
    }
    return obj1 === obj2;
  }
  function hashCode_0(obj) {
    if (obj == null)
      return 0;
    var typeOf = typeof obj;
    var tmp;
    switch (typeOf) {
      case 'object':
        tmp = 'function' === typeof obj.hashCode ? obj.hashCode() : getObjectHashCode(obj);
        break;
      case 'function':
        tmp = getObjectHashCode(obj);
        break;
      case 'number':
        tmp = getNumberHashCode(obj);
        break;
      case 'boolean':
        // Inline function 'kotlin.js.unsafeCast' call

        tmp = getBooleanHashCode(obj);
        break;
      case 'string':
        tmp = getStringHashCode(String(obj));
        break;
      case 'bigint':
        // Inline function 'kotlin.js.unsafeCast' call

        tmp = getBigIntHashCode(obj);
        break;
      case 'symbol':
        tmp = getSymbolHashCode(obj);
        break;
      default:
        tmp = function () {
          throw new Error('Unexpected typeof `' + typeOf + '`');
        }();
        break;
    }
    return tmp;
  }
  function toString_1(o) {
    var tmp;
    if (o == null) {
      tmp = 'null';
    } else if (isArrayish(o)) {
      tmp = '[...]';
    } else if (!(typeof o.toString === 'function')) {
      tmp = anyToString(o);
    } else {
      // Inline function 'kotlin.js.unsafeCast' call
      tmp = o.toString();
    }
    return tmp;
  }
  function getBooleanHashCode(value) {
    return value ? 1231 : 1237;
  }
  function getStringHashCode(str) {
    var hash = 0;
    var length = str.length;
    var inductionVariable = 0;
    var last = length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.js.asDynamic' call
        var code = str.charCodeAt(i);
        hash = imul(hash, 31) + code | 0;
      }
       while (!(i === last));
    return hash;
  }
  function getBigIntHashCode(value) {
    var shiftNumber = BigInt(32);
    var mask = BigInt(4.294967295E9);
    var bigNumber = abs(value);
    var hashCode = 0;
    var tmp;
    // Inline function 'kotlin.js.internal.isNegative' call
    if (value < 0) {
      tmp = -1;
    } else {
      tmp = 1;
    }
    var signum = tmp;
    $l$loop: while (true) {
      // Inline function 'kotlin.js.internal.isZero' call
      if (!!(bigNumber == 0)) {
        break $l$loop;
      }
      // Inline function 'kotlin.js.internal.and' call
      // Inline function 'kotlin.js.jsBitwiseAnd' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.js.internal.toNumber' call
      var self_0 = bigNumber & mask;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var chunk = Number(self_0);
      hashCode = imul(31, hashCode) + chunk | 0;
      // Inline function 'kotlin.js.internal.shr' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      bigNumber = bigNumber >> shiftNumber;
    }
    return imul(hashCode, signum);
  }
  function getSymbolHashCode(value) {
    var hashCodeMap = symbolIsSharable(value) ? getSymbolMap() : getSymbolWeakMap();
    var cachedHashCode = hashCodeMap.get(value);
    if (cachedHashCode !== VOID)
      return cachedHashCode;
    var hash = calculateRandomHash();
    hashCodeMap.set(value, hash);
    return hash;
  }
  function anyToString(o) {
    return Object.prototype.toString.call(o);
  }
  function symbolIsSharable(symbol) {
    return Symbol.keyFor(symbol) != VOID;
  }
  function getSymbolMap() {
    if (symbolMap === VOID) {
      symbolMap = new Map();
    }
    return symbolMap;
  }
  function getSymbolWeakMap() {
    if (symbolWeakMap === VOID) {
      symbolWeakMap = new WeakMap();
    }
    return symbolWeakMap;
  }
  var symbolMap;
  var symbolWeakMap;
  function boxIntrinsic(x) {
    var message = 'Should be lowered';
    throw IllegalStateException.c3(toString_1(message));
  }
  function unboxIntrinsic(x) {
    var message = 'Should be lowered';
    throw IllegalStateException.c3(toString_1(message));
  }
  function captureStack(instance, constructorFunction) {
    if (Error.captureStackTrace != null) {
      Error.captureStackTrace(instance, constructorFunction);
    } else {
      // Inline function 'kotlin.js.asDynamic' call
      instance.stack = (new Error()).stack;
    }
  }
  function protoOf(constructor) {
    return constructor.prototype;
  }
  function createThis(ctor, box) {
    var self_0 = Object.create(ctor.prototype);
    boxApply(self_0, box);
    return self_0;
  }
  function boxApply(self_0, box) {
    if (box !== VOID) {
      Object.assign(self_0, box);
    }
  }
  function createExternalThis(ctor, superExternalCtor, parameters, box) {
    var tmp;
    if (box === VOID) {
      tmp = ctor;
    } else {
      var newCtor = class  extends ctor {}
      Object.assign(newCtor.prototype, box);
      newCtor.constructor = ctor;
      tmp = newCtor;
    }
    var selfCtor = tmp;
    return Reflect.construct(superExternalCtor, parameters, selfCtor);
  }
  function isUndefined(value) {
    return value === VOID;
  }
  function setupCauseParameter(cause) {
    return {cause: cause};
  }
  function setPropertiesToThrowableInstance(this_, message, cause) {
    this_.name = Object.getPrototypeOf(this_).constructor.name;
    if (message == null) {
      var tmp;
      if (isUndefined(message)) {
        var tmp1_elvis_lhs = cause == null ? null : cause.toString();
        tmp = tmp1_elvis_lhs == null ? VOID : tmp1_elvis_lhs;
      } else {
        tmp = VOID;
      }
      this_.message = tmp;
    }
  }
  function ensureNotNull(v) {
    var tmp;
    if (v == null) {
      THROW_NPE();
    } else {
      tmp = v;
    }
    return tmp;
  }
  function THROW_NPE() {
    throw NullPointerException.g3();
  }
  function noWhenBranchMatchedException() {
    throw NoWhenBranchMatchedException.k3();
  }
  function THROW_CCE() {
    throw ClassCastException.o3();
  }
  function createMetadata(kind, name, defaultConstructor, associatedObjectKey, associatedObjects, suspendArity) {
    var undef = VOID;
    var iid = kind === 'interface' ? generateInterfaceId() : VOID;
    return {kind: kind, simpleName: name, associatedObjectKey: associatedObjectKey, associatedObjects: associatedObjects, suspendArity: suspendArity, $kClass$: undef, defaultConstructor: defaultConstructor, iid: iid};
  }
  function generateInterfaceId() {
    if (globalInterfaceId === VOID) {
      globalInterfaceId = 0;
    }
    // Inline function 'kotlin.js.unsafeCast' call
    globalInterfaceId = globalInterfaceId + 1 | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    return globalInterfaceId;
  }
  var globalInterfaceId;
  function initMetadataForClass(ctor, name, defaultConstructor, parent, interfaces, suspendArity, associatedObjectKey, associatedObjects) {
    var kind = 'class';
    initMetadataFor(kind, ctor, name, defaultConstructor, parent, interfaces, suspendArity, associatedObjectKey, associatedObjects);
  }
  function initMetadataFor(kind, ctor, name, defaultConstructor, parent, interfaces, suspendArity, associatedObjectKey, associatedObjects) {
    if (!(parent == null)) {
      ctor.prototype = Object.create(parent.prototype);
      ctor.prototype.constructor = ctor;
    }
    var metadata = createMetadata(kind, name, defaultConstructor, associatedObjectKey, associatedObjects, suspendArity);
    ctor.$metadata$ = metadata;
    if (!(interfaces == null)) {
      var receiver = !equals(metadata.iid, VOID) ? ctor : ctor.prototype;
      receiver.$imask$ = implement(interfaces);
    }
  }
  function initMetadataForObject(ctor, name, defaultConstructor, parent, interfaces, suspendArity, associatedObjectKey, associatedObjects) {
    var kind = 'object';
    initMetadataFor(kind, ctor, name, defaultConstructor, parent, interfaces, suspendArity, associatedObjectKey, associatedObjects);
  }
  function initMetadataForInterface(ctor, name, defaultConstructor, parent, interfaces, suspendArity, associatedObjectKey, associatedObjects) {
    var kind = 'interface';
    initMetadataFor(kind, ctor, name, defaultConstructor, parent, interfaces, suspendArity, associatedObjectKey, associatedObjects);
  }
  function initMetadataForLambda(ctor, parent, interfaces, suspendArity) {
    initMetadataForClass(ctor, 'Lambda', VOID, parent, interfaces, suspendArity, VOID, VOID);
  }
  function initMetadataForCoroutine(ctor, parent, interfaces, suspendArity) {
    initMetadataForClass(ctor, 'Coroutine', VOID, parent, interfaces, suspendArity, VOID, VOID);
  }
  function initMetadataForFunctionReference(ctor, parent, interfaces, suspendArity) {
    initMetadataForClass(ctor, 'FunctionReference', VOID, parent, interfaces, suspendArity, VOID, VOID);
  }
  function initMetadataForCompanion(ctor, parent, interfaces, suspendArity) {
    initMetadataForObject(ctor, 'Companion', VOID, parent, interfaces, suspendArity, VOID, VOID);
  }
  function toByte(a) {
    // Inline function 'kotlin.js.unsafeCast' call
    return a << 24 >> 24;
  }
  function numberToInt(a) {
    var tmp;
    if (a instanceof Long) {
      tmp = convertToInt(a);
    } else {
      tmp = doubleToInt(a);
    }
    return tmp;
  }
  function doubleToInt(a) {
    var tmp;
    if (a > 2147483647) {
      tmp = 2147483647;
    } else if (a < -2147483648) {
      tmp = -2147483648;
    } else {
      // Inline function 'kotlin.js.jsBitwiseOr' call
      tmp = a | 0;
    }
    return tmp;
  }
  function toShort(a) {
    // Inline function 'kotlin.js.unsafeCast' call
    return a << 16 >> 16;
  }
  function numberToChar(a) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = numberToInt(a);
    var tmp$ret$0 = _UShort___init__impl__jigrne(toShort(this_0));
    return _Char___init__impl__6a9atx_0(tmp$ret$0);
  }
  var StringCompanionObject_instance;
  function StringCompanionObject_getInstance() {
    return StringCompanionObject_instance;
  }
  function numberRangeToNumber(start, endInclusive) {
    return new IntRange(start, endInclusive);
  }
  function get_propertyRefClassMetadataCache() {
    _init_properties_reflectRuntime_kt__5r4uu3();
    return propertyRefClassMetadataCache;
  }
  var propertyRefClassMetadataCache;
  function metadataObject() {
    _init_properties_reflectRuntime_kt__5r4uu3();
    return createMetadata('class', VOID, VOID, VOID, VOID, VOID);
  }
  function getPropertyCallableRef(name, paramCount, superType, getter, setter, linkageError) {
    linkageError = linkageError === VOID ? null : linkageError;
    _init_properties_reflectRuntime_kt__5r4uu3();
    getter.get = getter;
    getter.set = setter;
    if (!(linkageError == null)) {
      throwLinkageErrorInCallableName(getter, linkageError);
    } else {
      getter.callableName = name;
    }
    // Inline function 'kotlin.js.unsafeCast' call
    return getPropertyRefClass(getter, getKPropMetadata(paramCount, setter), getInterfaceMaskFor(getter, superType));
  }
  function throwLinkageErrorInCallableName(function_0, linkageError) {
    _init_properties_reflectRuntime_kt__5r4uu3();
    defineProp(function_0, 'callableName', throwLinkageErrorInCallableName$lambda(linkageError), VOID, true);
  }
  function getPropertyRefClass(obj, metadata, imask) {
    _init_properties_reflectRuntime_kt__5r4uu3();
    obj.$metadata$ = metadata;
    obj.constructor = obj;
    obj.$imask$ = imask;
    return obj;
  }
  function getKPropMetadata(paramCount, setter) {
    _init_properties_reflectRuntime_kt__5r4uu3();
    return get_propertyRefClassMetadataCache()[paramCount][setter == null ? 0 : 1];
  }
  function getInterfaceMaskFor(obj, superType) {
    _init_properties_reflectRuntime_kt__5r4uu3();
    var tmp0_elvis_lhs = obj.$imask$;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$2 = [superType];
      tmp = implement(tmp$ret$2);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function throwLinkageErrorInCallableName$lambda($linkageError) {
    return () => {
      throwIrLinkageError($linkageError);
    };
  }
  var properties_initialized_reflectRuntime_kt_inkhwd;
  function _init_properties_reflectRuntime_kt__5r4uu3() {
    if (!properties_initialized_reflectRuntime_kt_inkhwd) {
      properties_initialized_reflectRuntime_kt_inkhwd = true;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = [metadataObject(), metadataObject()];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = [metadataObject(), metadataObject()];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      propertyRefClassMetadataCache = [tmp, tmp_0, [metadataObject(), metadataObject()]];
    }
  }
  function isArrayish(o) {
    return isJsArray(o) || isView(o);
  }
  function isJsArray(obj) {
    // Inline function 'kotlin.js.unsafeCast' call
    return Array.isArray(obj);
  }
  function isInterface(obj, iface) {
    return isInterfaceImpl(obj, iface.$metadata$.iid);
  }
  function isInterfaceImpl(obj, iface) {
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_elvis_lhs = obj.$imask$;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var mask = tmp;
    return isBitSet(mask, iface);
  }
  function isArray(obj) {
    var tmp;
    if (isJsArray(obj)) {
      // Inline function 'kotlin.js.asDynamic' call
      tmp = !obj.$type$;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function isSuspendFunction(obj, arity) {
    var objTypeOf = typeof obj;
    if (objTypeOf === 'function') {
      // Inline function 'kotlin.js.unsafeCast' call
      return obj.$arity === arity;
    }
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp1_safe_receiver = obj == null ? null : obj.constructor;
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.$metadata$;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.suspendArity;
    var tmp;
    if (tmp3_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp3_elvis_lhs;
    }
    var suspendArity = tmp;
    var result = false;
    var inductionVariable = 0;
    var last = suspendArity.length;
    $l$loop: while (inductionVariable < last) {
      var item = suspendArity[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (arity === item) {
        result = true;
        break $l$loop;
      }
    }
    return result;
  }
  function isNumber(a) {
    var tmp;
    if (typeof a === 'number') {
      tmp = true;
    } else {
      tmp = a instanceof Long;
    }
    return tmp;
  }
  function isComparable(value) {
    var type = typeof value;
    return type === 'string' || type === 'boolean' || isNumber(value) || isInterface(value, Comparable);
  }
  function isCharSequence(value) {
    return typeof value === 'string' || isInterface(value, CharSequence);
  }
  function isBooleanArray(a) {
    return isJsArray(a) && a.$type$ === 'BooleanArray';
  }
  function isByteArray(a) {
    // Inline function 'kotlin.js.jsInstanceOf' call
    return a instanceof Int8Array;
  }
  function isShortArray(a) {
    // Inline function 'kotlin.js.jsInstanceOf' call
    return a instanceof Int16Array;
  }
  function isCharArray(a) {
    var tmp;
    // Inline function 'kotlin.js.jsInstanceOf' call
    if (a instanceof Uint16Array) {
      tmp = a.$type$ === 'CharArray';
    } else {
      tmp = false;
    }
    return tmp;
  }
  function isIntArray(a) {
    // Inline function 'kotlin.js.jsInstanceOf' call
    return a instanceof Int32Array;
  }
  function isFloatArray(a) {
    // Inline function 'kotlin.js.jsInstanceOf' call
    return a instanceof Float32Array;
  }
  function isLongArray(a) {
    return isJsArray(a) && a.$type$ === 'LongArray';
  }
  function isDoubleArray(a) {
    // Inline function 'kotlin.js.jsInstanceOf' call
    return a instanceof Float64Array;
  }
  function jsIsType(obj, jsClass) {
    if (jsClass === Object) {
      return obj != null;
    }
    var objType = typeof obj;
    var jsClassType = typeof jsClass;
    if (obj == null || jsClass == null || (!(objType === 'object') && !(objType === 'function'))) {
      return false;
    }
    var constructor = jsClassType === 'object' ? jsGetPrototypeOf(jsClass) : jsClass;
    var klassMetadata = constructor.$metadata$;
    if ((klassMetadata == null ? null : klassMetadata.kind) === 'interface') {
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp0_elvis_lhs = klassMetadata.iid;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return false;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var iid = tmp;
      return isInterfaceImpl(obj, iid);
    }
    // Inline function 'kotlin.js.jsInstanceOf' call
    return obj instanceof constructor;
  }
  function jsGetPrototypeOf(jsClass) {
    return Object.getPrototypeOf(jsClass);
  }
  function get_VOID() {
    _init_properties_void_kt__3zg9as();
    return VOID;
  }
  var VOID;
  var properties_initialized_void_kt_e4ret2;
  function _init_properties_void_kt__3zg9as() {
    if (!properties_initialized_void_kt_e4ret2) {
      properties_initialized_void_kt_e4ret2 = true;
      VOID = void 0;
    }
  }
  function contentEquals(_this__u8e3s4, other) {
    return contentEqualsInternal(_this__u8e3s4, other);
  }
  function contentHashCode(_this__u8e3s4) {
    return contentHashCodeInternal(_this__u8e3s4);
  }
  function asList(_this__u8e3s4) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return ArrayList.p3(_this__u8e3s4);
  }
  function copyOf(_this__u8e3s4, newSize) {
    // Inline function 'kotlin.require' call
    if (!(newSize >= 0)) {
      var message = 'Invalid new array size: ' + newSize + '.';
      throw IllegalArgumentException.z(toString_1(message));
    }
    return fillFrom(_this__u8e3s4, new Int32Array(newSize));
  }
  function sortWith(_this__u8e3s4, comparator) {
    if (_this__u8e3s4.length > 1) {
      sortArrayWith(_this__u8e3s4, comparator);
    }
  }
  function fill(_this__u8e3s4, element, fromIndex, toIndex) {
    fromIndex = fromIndex === VOID ? 0 : fromIndex;
    toIndex = toIndex === VOID ? _this__u8e3s4.length : toIndex;
    Companion_instance_4.r3(fromIndex, toIndex, _this__u8e3s4.length);
    // Inline function 'kotlin.js.nativeFill' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.fill(element, fromIndex, toIndex);
  }
  function copyOf_0(_this__u8e3s4, newSize) {
    // Inline function 'kotlin.require' call
    if (!(newSize >= 0)) {
      var message = 'Invalid new array size: ' + newSize + '.';
      throw IllegalArgumentException.z(toString_1(message));
    }
    return arrayCopyResize(_this__u8e3s4, newSize, null);
  }
  function contentToString(_this__u8e3s4) {
    var tmp1_elvis_lhs = _this__u8e3s4 == null ? null : joinToString(_this__u8e3s4, ', ', '[', ']');
    return tmp1_elvis_lhs == null ? 'null' : tmp1_elvis_lhs;
  }
  function digitToIntImpl(_this__u8e3s4) {
    // Inline function 'kotlin.code' call
    var ch = Char__toInt_impl_vasixd(_this__u8e3s4);
    var index = binarySearchRange(Digit_getInstance().s3_1, ch);
    var diff = ch - Digit_getInstance().s3_1[index] | 0;
    return diff < 10 ? diff : -1;
  }
  function binarySearchRange(array, needle) {
    var bottom = 0;
    var top = array.length - 1 | 0;
    var middle = -1;
    var value = 0;
    while (bottom <= top) {
      middle = (bottom + top | 0) / 2 | 0;
      value = array[middle];
      if (needle > value)
        bottom = middle + 1 | 0;
      else if (needle === value)
        return middle;
      else
        top = middle - 1 | 0;
    }
    return middle - (needle < value ? 1 : 0) | 0;
  }
  var Digit_instance;
  function Digit_getInstance() {
    if (Digit_instance === VOID)
      new Digit();
    return Digit_instance;
  }
  function isWhitespaceImpl(_this__u8e3s4) {
    // Inline function 'kotlin.code' call
    var ch = Char__toInt_impl_vasixd(_this__u8e3s4);
    return (9 <= ch ? ch <= 13 : false) || (28 <= ch ? ch <= 32 : false) || ch === 160 || (ch > 4096 && (ch === 5760 || (8192 <= ch ? ch <= 8202 : false) || ch === 8232 || ch === 8233 || ch === 8239 || ch === 8287 || ch === 12288));
  }
  function eachCount(_this__u8e3s4) {
    // Inline function 'kotlin.collections.fold' call
    // Inline function 'kotlin.collections.aggregate' call
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.collections.aggregateTo' call
    var destination = LinkedHashMap.z3();
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = _this__u8e3s4.a4();
    while (_iterator__ex2g4s.f1()) {
      var e = _iterator__ex2g4s.g1();
      var key = _this__u8e3s4.b4(e);
      var accumulator = destination.g2(key);
      var tmp;
      if (accumulator == null && !destination.e2(key)) {
        tmp = 0;
      } else {
        tmp = (accumulator == null ? true : !(accumulator == null)) ? accumulator : THROW_CCE();
      }
      // Inline function 'kotlin.collections.set' call
      var value = tmp + 1 | 0;
      destination.c4(key, value);
    }
    return destination;
  }
  function isNaN_0(_this__u8e3s4) {
    return !(_this__u8e3s4 === _this__u8e3s4);
  }
  function takeHighestOneBit(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 === 0) {
      tmp = 0;
    } else {
      // Inline function 'kotlin.countLeadingZeroBits' call
      tmp = 1 << (31 - clz32(_this__u8e3s4) | 0);
    }
    return tmp;
  }
  function countTrailingZeroBits(_this__u8e3s4) {
    var low = _this__u8e3s4.r2_1;
    return low === 0 ? 32 + countTrailingZeroBits_0(_this__u8e3s4.s2_1) | 0 : countTrailingZeroBits_0(low);
  }
  function countTrailingZeroBits_0(_this__u8e3s4) {
    // Inline function 'kotlin.countLeadingZeroBits' call
    var this_0 = ~(_this__u8e3s4 | (-_this__u8e3s4 | 0));
    return 32 - clz32(this_0) | 0;
  }
  var Unit_instance;
  function Unit_getInstance() {
    return Unit_instance;
  }
  function collectionToArray(collection) {
    return collectionToArrayCommonImpl(collection);
  }
  function terminateCollectionToArray(collectionSize, array) {
    return array;
  }
  function arrayOfNulls(reference, size) {
    // Inline function 'kotlin.arrayOfNulls' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return Array(size);
  }
  function listOf(element) {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = [element];
    return ArrayList.p3(tmp$ret$2);
  }
  function mapCapacity(expectedSize) {
    return expectedSize;
  }
  function mapOf(pair) {
    return hashMapOf([pair]);
  }
  function setOf(element) {
    return hashSetOf([element]);
  }
  function checkCountOverflow(count) {
    if (count < 0) {
      throwCountOverflow();
    }
    return count;
  }
  function checkIndexOverflow(index) {
    if (index < 0) {
      throwIndexOverflow();
    }
    return index;
  }
  function sortWith_0(_this__u8e3s4, comparator) {
    collectionsSort(_this__u8e3s4, comparator);
  }
  function copyToArray(collection) {
    var tmp;
    // Inline function 'kotlin.js.asDynamic' call
    if (collection.toArray !== undefined) {
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.js.unsafeCast' call
      tmp = collection.toArray();
    } else {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = collectionToArray(collection);
    }
    return tmp;
  }
  function collectionsSort(list, comparator) {
    if (list.j1() <= 1)
      return Unit_instance;
    var array = copyToArray(list);
    sortArrayWith(array, comparator);
    var inductionVariable = 0;
    var last = array.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        list.r1(i, array[i]);
      }
       while (inductionVariable < last);
  }
  function arrayCopy(source, destination, destinationOffset, startIndex, endIndex) {
    Companion_instance_4.r3(startIndex, endIndex, source.length);
    var rangeSize = endIndex - startIndex | 0;
    Companion_instance_4.r3(destinationOffset, destinationOffset + rangeSize | 0, destination.length);
    if (isView(destination) && isView(source)) {
      // Inline function 'kotlin.js.asDynamic' call
      var subrange = source.subarray(startIndex, endIndex);
      // Inline function 'kotlin.js.asDynamic' call
      destination.set(subrange, destinationOffset);
    } else {
      if (!(source === destination) || destinationOffset <= startIndex) {
        var inductionVariable = 0;
        if (inductionVariable < rangeSize)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            destination[destinationOffset + index | 0] = source[startIndex + index | 0];
          }
           while (inductionVariable < rangeSize);
      } else {
        var inductionVariable_0 = rangeSize - 1 | 0;
        if (0 <= inductionVariable_0)
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + -1 | 0;
            destination[destinationOffset + index_0 | 0] = source[startIndex + index_0 | 0];
          }
           while (0 <= inductionVariable_0);
      }
    }
  }
  function AbstractMutableCollection$removeAll$lambda($elements) {
    return (it) => $elements.p1(it);
  }
  function arrayOfUninitializedElements(capacity) {
    // Inline function 'kotlin.require' call
    if (!(capacity >= 0)) {
      var message = 'capacity must be non-negative.';
      throw IllegalArgumentException.z(toString_1(message));
    }
    // Inline function 'kotlin.arrayOfNulls' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return Array(capacity);
  }
  function resetRange(_this__u8e3s4, fromIndex, toIndex) {
    // Inline function 'kotlin.js.nativeFill' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.fill(null, fromIndex, toIndex);
  }
  function copyOfUninitializedElements(_this__u8e3s4, newSize) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return copyOf_0(_this__u8e3s4, newSize);
  }
  function resetAt(_this__u8e3s4, index) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4[index] = null;
  }
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 === VOID)
      new Companion_1();
    return Companion_instance_1;
  }
  function increaseLength($this, amount) {
    var previous = $this.j1();
    // Inline function 'kotlin.js.asDynamic' call
    $this.o_1.length = $this.j1() + amount | 0;
    return previous;
  }
  function rangeCheck($this, index) {
    // Inline function 'kotlin.apply' call
    Companion_instance_4.v5(index, $this.j1());
    return index;
  }
  function insertionRangeCheck($this, index) {
    // Inline function 'kotlin.apply' call
    Companion_instance_4.u4(index, $this.j1());
    return index;
  }
  var _stableSortingIsSupported;
  function sortArrayWith(array, comparator) {
    if (getStableSortingIsSupported()) {
      var comparison = sortArrayWith$lambda(comparator);
      // Inline function 'kotlin.js.asDynamic' call
      array.sort(comparison);
    } else {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      mergeSort(array, 0, get_lastIndex(array), comparator);
    }
  }
  function getStableSortingIsSupported() {
    var tmp0_safe_receiver = _stableSortingIsSupported;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    _stableSortingIsSupported = false;
    // Inline function 'kotlin.js.unsafeCast' call
    var array = [];
    var inductionVariable = 0;
    if (inductionVariable < 600)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.js.asDynamic' call
        array.push(index);
      }
       while (inductionVariable < 600);
    var comparison = getStableSortingIsSupported$lambda;
    // Inline function 'kotlin.js.asDynamic' call
    array.sort(comparison);
    var inductionVariable_0 = 1;
    var last = array.length;
    if (inductionVariable_0 < last)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var a = array[index_0 - 1 | 0];
        var b = array[index_0];
        if ((a & 3) === (b & 3) && a >= b)
          return false;
      }
       while (inductionVariable_0 < last);
    _stableSortingIsSupported = true;
    return true;
  }
  function mergeSort(array, start, endInclusive, comparator) {
    // Inline function 'kotlin.arrayOfNulls' call
    var size = array.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var buffer = Array(size);
    var result = mergeSort_0(array, buffer, start, endInclusive, comparator);
    if (!(result === array)) {
      var inductionVariable = start;
      if (inductionVariable <= endInclusive)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          array[i] = result[i];
        }
         while (!(i === endInclusive));
    }
  }
  function mergeSort_0(array, buffer, start, end, comparator) {
    if (start === end) {
      return array;
    }
    var median = (start + end | 0) / 2 | 0;
    var left = mergeSort_0(array, buffer, start, median, comparator);
    var right = mergeSort_0(array, buffer, median + 1 | 0, end, comparator);
    var target = left === buffer ? array : buffer;
    var leftIndex = start;
    var rightIndex = median + 1 | 0;
    var inductionVariable = start;
    if (inductionVariable <= end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (leftIndex <= median && rightIndex <= end) {
          var leftValue = left[leftIndex];
          var rightValue = right[rightIndex];
          if (comparator.compare(leftValue, rightValue) <= 0) {
            target[i] = leftValue;
            leftIndex = leftIndex + 1 | 0;
          } else {
            target[i] = rightValue;
            rightIndex = rightIndex + 1 | 0;
          }
        } else if (leftIndex <= median) {
          target[i] = left[leftIndex];
          leftIndex = leftIndex + 1 | 0;
        } else {
          target[i] = right[rightIndex];
          rightIndex = rightIndex + 1 | 0;
        }
      }
       while (!(i === end));
    return target;
  }
  function sortArrayWith$lambda($comparator) {
    return (a, b) => $comparator.compare(a, b);
  }
  function getStableSortingIsSupported$lambda(a, b) {
    return (a & 3) - (b & 3) | 0;
  }
  function init_kotlin_collections_HashMap(_this__u8e3s4) {
    _this__u8e3s4.h6_1 = null;
  }
  function init_kotlin_collections_HashSet(_this__u8e3s4) {
  }
  function computeHashSize($this, capacity) {
    return takeHighestOneBit(imul(coerceAtLeast(capacity, 1), 3));
  }
  function computeShift($this, hashSize) {
    // Inline function 'kotlin.countLeadingZeroBits' call
    return clz32(hashSize) + 1 | 0;
  }
  function checkForComodification($this) {
    if (!($this.i8_1.r6_1 === $this.k8_1))
      throw ConcurrentModificationException.h8('The backing map has been modified after this entry was obtained.');
  }
  function _get_capacity__a9k9f3($this) {
    return $this.k6_1.length;
  }
  function _get_hashSize__tftcho($this) {
    return $this.n6_1.length;
  }
  function registerModification($this) {
    $this.r6_1 = $this.r6_1 + 1 | 0;
  }
  function ensureExtraCapacity($this, n) {
    if (shouldCompact($this, n)) {
      compact($this, true);
    } else {
      ensureCapacity($this, $this.p6_1 + n | 0);
    }
  }
  function shouldCompact($this, extraCapacity) {
    var spareCapacity = _get_capacity__a9k9f3($this) - $this.p6_1 | 0;
    var gaps = $this.p6_1 - $this.j1() | 0;
    return spareCapacity < extraCapacity && (gaps + spareCapacity | 0) >= extraCapacity && gaps >= (_get_capacity__a9k9f3($this) / 4 | 0);
  }
  function ensureCapacity($this, minCapacity) {
    if (minCapacity < 0)
      throw RuntimeException.n8('too many elements');
    if (minCapacity > _get_capacity__a9k9f3($this)) {
      var newSize = Companion_instance_4.o8(_get_capacity__a9k9f3($this), minCapacity);
      $this.k6_1 = copyOfUninitializedElements($this.k6_1, newSize);
      var tmp = $this;
      var tmp0_safe_receiver = $this.l6_1;
      tmp.l6_1 = tmp0_safe_receiver == null ? null : copyOfUninitializedElements(tmp0_safe_receiver, newSize);
      $this.m6_1 = copyOf($this.m6_1, newSize);
      var newHashSize = computeHashSize(Companion_instance_2, newSize);
      if (newHashSize > _get_hashSize__tftcho($this)) {
        rehash($this, newHashSize);
      }
    }
  }
  function allocateValuesArray($this) {
    var curValuesArray = $this.l6_1;
    if (!(curValuesArray == null))
      return curValuesArray;
    var newValuesArray = arrayOfUninitializedElements(_get_capacity__a9k9f3($this));
    $this.l6_1 = newValuesArray;
    return newValuesArray;
  }
  function hash($this, key) {
    return key == null ? 0 : imul(hashCode_0(key), -1640531527) >>> $this.q6_1 | 0;
  }
  function compact($this, updateHashArray) {
    var i = 0;
    var j = 0;
    var valuesArray = $this.l6_1;
    while (i < $this.p6_1) {
      var hash = $this.m6_1[i];
      if (hash >= 0) {
        $this.k6_1[j] = $this.k6_1[i];
        if (!(valuesArray == null)) {
          valuesArray[j] = valuesArray[i];
        }
        if (updateHashArray) {
          $this.m6_1[j] = hash;
          $this.n6_1[hash] = j + 1 | 0;
        }
        j = j + 1 | 0;
      }
      i = i + 1 | 0;
    }
    resetRange($this.k6_1, j, $this.p6_1);
    if (valuesArray == null)
      null;
    else {
      resetRange(valuesArray, j, $this.p6_1);
    }
    $this.p6_1 = j;
  }
  function rehash($this, newHashSize) {
    registerModification($this);
    if ($this.p6_1 > $this.s6_1) {
      compact($this, false);
    }
    $this.n6_1 = new Int32Array(newHashSize);
    $this.q6_1 = computeShift(Companion_instance_2, newHashSize);
    var i = 0;
    while (i < $this.p6_1) {
      var _unary__edvuaz = i;
      i = _unary__edvuaz + 1 | 0;
      if (!putRehash($this, _unary__edvuaz)) {
        throw IllegalStateException.c3('This cannot happen with fixed magic multiplier and grow-only hash array. Have object hashCodes changed?');
      }
    }
  }
  function putRehash($this, i) {
    var hash_0 = hash($this, $this.k6_1[i]);
    var probesLeft = $this.o6_1;
    while (true) {
      var index = $this.n6_1[hash_0];
      if (index === 0) {
        $this.n6_1[hash_0] = i + 1 | 0;
        $this.m6_1[i] = hash_0;
        return true;
      }
      probesLeft = probesLeft - 1 | 0;
      if (probesLeft < 0)
        return false;
      var _unary__edvuaz = hash_0;
      hash_0 = _unary__edvuaz - 1 | 0;
      if (_unary__edvuaz === 0)
        hash_0 = _get_hashSize__tftcho($this) - 1 | 0;
    }
  }
  function findKey($this, key) {
    var hash_0 = hash($this, key);
    var probesLeft = $this.o6_1;
    while (true) {
      var index = $this.n6_1[hash_0];
      if (index === 0)
        return -1;
      if (index > 0 && equals($this.k6_1[index - 1 | 0], key))
        return index - 1 | 0;
      probesLeft = probesLeft - 1 | 0;
      if (probesLeft < 0)
        return -1;
      var _unary__edvuaz = hash_0;
      hash_0 = _unary__edvuaz - 1 | 0;
      if (_unary__edvuaz === 0)
        hash_0 = _get_hashSize__tftcho($this) - 1 | 0;
    }
  }
  function findValue($this, value) {
    var i = $this.p6_1;
    $l$loop: while (true) {
      i = i - 1 | 0;
      if (!(i >= 0)) {
        break $l$loop;
      }
      if ($this.m6_1[i] >= 0 && equals(ensureNotNull($this.l6_1)[i], value))
        return i;
    }
    return -1;
  }
  function addKey($this, key) {
    $this.h7();
    retry: while (true) {
      var hash_0 = hash($this, key);
      var tentativeMaxProbeDistance = coerceAtMost(imul($this.o6_1, 2), _get_hashSize__tftcho($this) / 2 | 0);
      var probeDistance = 0;
      while (true) {
        var index = $this.n6_1[hash_0];
        if (index <= 0) {
          if ($this.p6_1 >= _get_capacity__a9k9f3($this)) {
            ensureExtraCapacity($this, 1);
            continue retry;
          }
          var _unary__edvuaz = $this.p6_1;
          $this.p6_1 = _unary__edvuaz + 1 | 0;
          var putIndex = _unary__edvuaz;
          $this.k6_1[putIndex] = key;
          $this.m6_1[putIndex] = hash_0;
          $this.n6_1[hash_0] = putIndex + 1 | 0;
          $this.s6_1 = $this.s6_1 + 1 | 0;
          registerModification($this);
          if (probeDistance > $this.o6_1)
            $this.o6_1 = probeDistance;
          return putIndex;
        }
        if (equals($this.k6_1[index - 1 | 0], key)) {
          return -index | 0;
        }
        probeDistance = probeDistance + 1 | 0;
        if (probeDistance > tentativeMaxProbeDistance) {
          rehash($this, imul(_get_hashSize__tftcho($this), 2));
          continue retry;
        }
        var _unary__edvuaz_0 = hash_0;
        hash_0 = _unary__edvuaz_0 - 1 | 0;
        if (_unary__edvuaz_0 === 0)
          hash_0 = _get_hashSize__tftcho($this) - 1 | 0;
      }
    }
  }
  function removeEntryAt($this, index) {
    resetAt($this.k6_1, index);
    var tmp0_safe_receiver = $this.l6_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      resetAt(tmp0_safe_receiver, index);
    }
    removeHashAt($this, $this.m6_1[index]);
    $this.m6_1[index] = -1;
    $this.s6_1 = $this.s6_1 - 1 | 0;
    registerModification($this);
  }
  function removeHashAt($this, removedHash) {
    var hash_0 = removedHash;
    var hole = removedHash;
    var probeDistance = 0;
    var patchAttemptsLeft = coerceAtMost(imul($this.o6_1, 2), _get_hashSize__tftcho($this) / 2 | 0);
    while (true) {
      var _unary__edvuaz = hash_0;
      hash_0 = _unary__edvuaz - 1 | 0;
      if (_unary__edvuaz === 0)
        hash_0 = _get_hashSize__tftcho($this) - 1 | 0;
      probeDistance = probeDistance + 1 | 0;
      if (probeDistance > $this.o6_1) {
        $this.n6_1[hole] = 0;
        return Unit_instance;
      }
      var index = $this.n6_1[hash_0];
      if (index === 0) {
        $this.n6_1[hole] = 0;
        return Unit_instance;
      }
      if (index < 0) {
        $this.n6_1[hole] = -1;
        hole = hash_0;
        probeDistance = 0;
      } else {
        var otherHash = hash($this, $this.k6_1[index - 1 | 0]);
        if (((otherHash - hash_0 | 0) & (_get_hashSize__tftcho($this) - 1 | 0)) >= probeDistance) {
          $this.n6_1[hole] = index;
          $this.m6_1[index - 1 | 0] = hole;
          hole = hash_0;
          probeDistance = 0;
        }
      }
      patchAttemptsLeft = patchAttemptsLeft - 1 | 0;
      if (patchAttemptsLeft < 0) {
        $this.n6_1[hole] = -1;
        return Unit_instance;
      }
    }
  }
  function contentEquals_0($this, other) {
    return $this.s6_1 === other.j1() && $this.u7(other.j2());
  }
  var Companion_instance_2;
  function Companion_getInstance_2() {
    return Companion_instance_2;
  }
  function init_kotlin_collections_LinkedHashMap(_this__u8e3s4) {
  }
  function init_kotlin_collections_LinkedHashSet(_this__u8e3s4) {
  }
  var CompletedContinuation_instance;
  function CompletedContinuation_getInstance() {
    return CompletedContinuation_instance;
  }
  function get_dummyGenerator() {
    _init_properties_GeneratorCoroutineImpl_kt__4u0pi3();
    return dummyGenerator;
  }
  var dummyGenerator;
  function get_GeneratorFunction() {
    _init_properties_GeneratorCoroutineImpl_kt__4u0pi3();
    return GeneratorFunction;
  }
  var GeneratorFunction;
  function access$_get_jsIterators__geagmj($this) {
    return $this.ba_1;
  }
  function access$_get_unknown__2v7dtz($this) {
    return $this.ea_1;
  }
  function access$_get_savedResult__bwlkfn($this) {
    return $this.fa_1;
  }
  function isGeneratorSuspendStep(value) {
    _init_properties_GeneratorCoroutineImpl_kt__4u0pi3();
    return value != null && value.constructor === get_GeneratorFunction();
  }
  var properties_initialized_GeneratorCoroutineImpl_kt_yzcfjb;
  function _init_properties_GeneratorCoroutineImpl_kt__4u0pi3() {
    if (!properties_initialized_GeneratorCoroutineImpl_kt_yzcfjb) {
      properties_initialized_GeneratorCoroutineImpl_kt_yzcfjb = true;
      dummyGenerator = function *(COROUTINE_SUSPENDED, generatorRef) {
        var resultOrSuspended = generatorRef();
        if (resultOrSuspended === COROUTINE_SUSPENDED)
          resultOrSuspended = yield resultOrSuspended;
        return resultOrSuspended;
      };
      GeneratorFunction = get_dummyGenerator().constructor.prototype;
    }
  }
  function invokeSuspendSuperTypeWithReceiverAndParam(_this__u8e3s4, receiver, param, completion) {
    throw NotImplementedError.ma('It is intrinsic method');
  }
  function startCoroutineUninterceptedOrReturnGeneratorVersion(_this__u8e3s4, receiver, param, completion) {
    // Inline function 'kotlin.coroutines.intrinsics.startCoroutineFromGeneratorFunction' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var continuation = new GeneratorCoroutineImpl(completion);
    continuation.da_1 = true;
    // Inline function 'kotlin.js.asDynamic' call
    var a = _this__u8e3s4;
    var result = typeof a === 'function' ? a(receiver, param, continuation) : _this__u8e3s4.na(receiver, param, continuation);
    continuation.da_1 = false;
    // Inline function 'kotlin.coroutines.GeneratorCoroutineImpl.shouldResumeImmediately' call
    if (!(_Result___get_value__impl__bjfvqg(access$_get_unknown__2v7dtz(continuation)) === _Result___get_value__impl__bjfvqg(access$_get_savedResult__bwlkfn(continuation)))) {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$5 = _Result___init__impl__xyqfz8(result);
      continuation.y9(tmp$ret$5);
    }
    return result;
  }
  function suspendOrReturn(generator, continuation) {
    var tmp;
    // Inline function 'kotlin.js.asDynamic' call
    if (continuation.constructor === GeneratorCoroutineImpl) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = continuation;
    } else {
      tmp = new GeneratorCoroutineImpl(continuation);
    }
    var generatorCoroutineImpl = tmp;
    var value = generator(generatorCoroutineImpl);
    if (!isGeneratorSuspendStep(value))
      return value;
    // Inline function 'kotlin.js.unsafeCast' call
    var iterator = value;
    // Inline function 'kotlin.coroutines.GeneratorCoroutineImpl.addNewIterator' call
    // Inline function 'kotlin.js.asDynamic' call
    access$_get_jsIterators__geagmj(generatorCoroutineImpl).push(iterator);
    try {
      var iteratorStep = iterator.next();
      if (iteratorStep.done) {
        // Inline function 'kotlin.coroutines.GeneratorCoroutineImpl.dropLastIterator' call
        // Inline function 'kotlin.js.asDynamic' call
        access$_get_jsIterators__geagmj(generatorCoroutineImpl).pop();
      }
      return iteratorStep.value;
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.coroutines.GeneratorCoroutineImpl.dropLastIterator' call
        // Inline function 'kotlin.js.asDynamic' call
        access$_get_jsIterators__geagmj(generatorCoroutineImpl).pop();
        throw e;
      } else {
        throw $p;
      }
    }
  }
  function init_kotlin_Exception(_this__u8e3s4) {
    captureStack(_this__u8e3s4, _this__u8e3s4.x2_1);
  }
  function init_kotlin_IllegalArgumentException(_this__u8e3s4) {
    captureStack(_this__u8e3s4, _this__u8e3s4.y_1);
  }
  function init_kotlin_IllegalStateException(_this__u8e3s4) {
    captureStack(_this__u8e3s4, _this__u8e3s4.b3_1);
  }
  function init_kotlin_UnsupportedOperationException(_this__u8e3s4) {
    captureStack(_this__u8e3s4, _this__u8e3s4.a6_1);
  }
  function init_kotlin_RuntimeException(_this__u8e3s4) {
    captureStack(_this__u8e3s4, _this__u8e3s4.m8_1);
  }
  function init_kotlin_NoSuchElementException(_this__u8e3s4) {
    captureStack(_this__u8e3s4, _this__u8e3s4.u_1);
  }
  function init_kotlin_Error(_this__u8e3s4) {
    captureStack(_this__u8e3s4, _this__u8e3s4.h_1);
  }
  function init_kotlin_IndexOutOfBoundsException(_this__u8e3s4) {
    captureStack(_this__u8e3s4, _this__u8e3s4.v1_1);
  }
  function init_kotlin_ConcurrentModificationException(_this__u8e3s4) {
    captureStack(_this__u8e3s4, _this__u8e3s4.g8_1);
  }
  function init_kotlin_ArithmeticException(_this__u8e3s4) {
    captureStack(_this__u8e3s4, _this__u8e3s4.za_1);
  }
  function init_kotlin_NumberFormatException(_this__u8e3s4) {
    captureStack(_this__u8e3s4, _this__u8e3s4.fb_1);
  }
  function init_kotlin_NullPointerException(_this__u8e3s4) {
    captureStack(_this__u8e3s4, _this__u8e3s4.f3_1);
  }
  function init_kotlin_NoWhenBranchMatchedException(_this__u8e3s4) {
    captureStack(_this__u8e3s4, _this__u8e3s4.j3_1);
  }
  function init_kotlin_ClassCastException(_this__u8e3s4) {
    captureStack(_this__u8e3s4, _this__u8e3s4.n3_1);
  }
  function lazy(mode, initializer) {
    return new UnsafeLazyImpl(initializer);
  }
  function lazy_0(initializer) {
    return new UnsafeLazyImpl(initializer);
  }
  function fillFrom(src, dst) {
    var srcLen = src.length;
    var dstLen = dst.length;
    var index = 0;
    // Inline function 'kotlin.js.unsafeCast' call
    var arr = dst;
    while (index < srcLen && index < dstLen) {
      var tmp = index;
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      arr[tmp] = src[_unary__edvuaz];
    }
    return dst;
  }
  function arrayCopyResize(source, newSize, defaultValue) {
    // Inline function 'kotlin.js.unsafeCast' call
    var result = source.slice(0, newSize);
    // Inline function 'kotlin.copyArrayType' call
    if (source.$type$ !== undefined) {
      result.$type$ = source.$type$;
    }
    var index = source.length;
    if (newSize > index) {
      // Inline function 'kotlin.js.asDynamic' call
      result.length = newSize;
      while (index < newSize) {
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        result[_unary__edvuaz] = defaultValue;
      }
    }
    return result;
  }
  var INV_2_26;
  var INV_2_53;
  function defaultPlatformRandom() {
    _init_properties_PlatformRandom_kt__6kjv62();
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0 = Math.random() * Math.pow(2, 32) | 0;
    return Random_0(tmp$ret$0);
  }
  var properties_initialized_PlatformRandom_kt_uibhw8;
  function _init_properties_PlatformRandom_kt__6kjv62() {
    if (!properties_initialized_PlatformRandom_kt_uibhw8) {
      properties_initialized_PlatformRandom_kt_uibhw8 = true;
      // Inline function 'kotlin.math.pow' call
      INV_2_26 = Math.pow(2.0, -26);
      // Inline function 'kotlin.math.pow' call
      INV_2_53 = Math.pow(2.0, -53);
    }
  }
  var NothingKClassImpl_instance;
  function NothingKClassImpl_getInstance() {
    if (NothingKClassImpl_instance === VOID)
      new NothingKClassImpl();
    return NothingKClassImpl_instance;
  }
  function get_functionClasses() {
    _init_properties_primitives_kt__3fums4();
    return functionClasses;
  }
  var functionClasses;
  function PrimitiveClasses$anyClass$lambda(it) {
    return !(it == null);
  }
  function PrimitiveClasses$numberClass$lambda(it) {
    return isNumber(it);
  }
  function PrimitiveClasses$booleanClass$lambda(it) {
    return !(it == null) ? typeof it === 'boolean' : false;
  }
  function PrimitiveClasses$byteClass$lambda(it) {
    return !(it == null) ? typeof it === 'number' : false;
  }
  function PrimitiveClasses$shortClass$lambda(it) {
    return !(it == null) ? typeof it === 'number' : false;
  }
  function PrimitiveClasses$intClass$lambda(it) {
    return !(it == null) ? typeof it === 'number' : false;
  }
  function PrimitiveClasses$longClass$lambda(it) {
    return it instanceof Long;
  }
  function PrimitiveClasses$floatClass$lambda(it) {
    return !(it == null) ? typeof it === 'number' : false;
  }
  function PrimitiveClasses$doubleClass$lambda(it) {
    return !(it == null) ? typeof it === 'number' : false;
  }
  function PrimitiveClasses$arrayClass$lambda(it) {
    return !(it == null) ? isArray(it) : false;
  }
  function PrimitiveClasses$stringClass$lambda(it) {
    return !(it == null) ? typeof it === 'string' : false;
  }
  function PrimitiveClasses$throwableClass$lambda(it) {
    return it instanceof Error;
  }
  function PrimitiveClasses$booleanArrayClass$lambda(it) {
    return !(it == null) ? isBooleanArray(it) : false;
  }
  function PrimitiveClasses$charArrayClass$lambda(it) {
    return !(it == null) ? isCharArray(it) : false;
  }
  function PrimitiveClasses$byteArrayClass$lambda(it) {
    return !(it == null) ? isByteArray(it) : false;
  }
  function PrimitiveClasses$shortArrayClass$lambda(it) {
    return !(it == null) ? isShortArray(it) : false;
  }
  function PrimitiveClasses$intArrayClass$lambda(it) {
    return !(it == null) ? isIntArray(it) : false;
  }
  function PrimitiveClasses$longArrayClass$lambda(it) {
    return !(it == null) ? isLongArray(it) : false;
  }
  function PrimitiveClasses$floatArrayClass$lambda(it) {
    return !(it == null) ? isFloatArray(it) : false;
  }
  function PrimitiveClasses$doubleArrayClass$lambda(it) {
    return !(it == null) ? isDoubleArray(it) : false;
  }
  function PrimitiveClasses$functionClass$lambda($arity) {
    return (it) => {
      var tmp;
      if (typeof it === 'function') {
        // Inline function 'kotlin.js.asDynamic' call
        tmp = it.length === $arity;
      } else {
        tmp = false;
      }
      return tmp;
    };
  }
  var PrimitiveClasses_instance;
  function PrimitiveClasses_getInstance() {
    if (PrimitiveClasses_instance === VOID)
      new PrimitiveClasses();
    return PrimitiveClasses_instance;
  }
  var properties_initialized_primitives_kt_jle18u;
  function _init_properties_primitives_kt__3fums4() {
    if (!properties_initialized_primitives_kt_jle18u) {
      properties_initialized_primitives_kt_jle18u = true;
      // Inline function 'kotlin.arrayOfNulls' call
      functionClasses = Array(0);
    }
  }
  function getKClass(jClass) {
    if (jClass === String) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      return PrimitiveClasses_getInstance().stringClass;
    }
    // Inline function 'kotlin.js.asDynamic' call
    var metadata = jClass.$metadata$;
    var tmp;
    if (metadata != null) {
      var tmp_0;
      if (metadata.$kClass$ == null) {
        var kClass = new SimpleKClassImpl(jClass);
        metadata.$kClass$ = kClass;
        tmp_0 = kClass;
      } else {
        tmp_0 = metadata.$kClass$;
      }
      tmp = tmp_0;
    } else {
      tmp = new SimpleKClassImpl(jClass);
    }
    return tmp;
  }
  function getKClassFromExpression(e) {
    var tmp;
    switch (typeof e) {
      case 'string':
        tmp = PrimitiveClasses_getInstance().stringClass;
        break;
      case 'number':
        var tmp_0;
        // Inline function 'kotlin.js.jsBitwiseOr' call

        // Inline function 'kotlin.js.asDynamic' call

        if ((e | 0) === e) {
          tmp_0 = PrimitiveClasses_getInstance().intClass;
        } else {
          tmp_0 = PrimitiveClasses_getInstance().doubleClass;
        }

        tmp = tmp_0;
        break;
      case 'boolean':
        tmp = PrimitiveClasses_getInstance().booleanClass;
        break;
      case 'function':
        var tmp_1 = PrimitiveClasses_getInstance();
        // Inline function 'kotlin.js.asDynamic' call

        tmp = tmp_1.functionClass(e.length);
        break;
      default:
        var tmp_2;
        if (isBooleanArray(e)) {
          tmp_2 = PrimitiveClasses_getInstance().booleanArrayClass;
        } else {
          if (isCharArray(e)) {
            tmp_2 = PrimitiveClasses_getInstance().charArrayClass;
          } else {
            if (isByteArray(e)) {
              tmp_2 = PrimitiveClasses_getInstance().byteArrayClass;
            } else {
              if (isShortArray(e)) {
                tmp_2 = PrimitiveClasses_getInstance().shortArrayClass;
              } else {
                if (isIntArray(e)) {
                  tmp_2 = PrimitiveClasses_getInstance().intArrayClass;
                } else {
                  if (isLongArray(e)) {
                    tmp_2 = PrimitiveClasses_getInstance().longArrayClass;
                  } else {
                    if (isFloatArray(e)) {
                      tmp_2 = PrimitiveClasses_getInstance().floatArrayClass;
                    } else {
                      if (isDoubleArray(e)) {
                        tmp_2 = PrimitiveClasses_getInstance().doubleArrayClass;
                      } else {
                        if (isInterface(e, KClass)) {
                          tmp_2 = getKClass(KClass);
                        } else {
                          if (isArray(e)) {
                            tmp_2 = PrimitiveClasses_getInstance().arrayClass;
                          } else {
                            var constructor = Object.getPrototypeOf(e).constructor;
                            var tmp_3;
                            if (constructor === Object) {
                              tmp_3 = PrimitiveClasses_getInstance().anyClass;
                            } else if (constructor === Error) {
                              tmp_3 = PrimitiveClasses_getInstance().throwableClass;
                            } else {
                              var jsClass = constructor;
                              tmp_3 = getKClass(jsClass);
                            }
                            tmp_2 = tmp_3;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }

        tmp = tmp_2;
        break;
    }
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return tmp;
  }
  function uppercaseChar(_this__u8e3s4) {
    // Inline function 'kotlin.text.uppercase' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    var uppercase = toString(_this__u8e3s4).toUpperCase();
    return uppercase.length > 1 ? _this__u8e3s4 : charCodeAt(uppercase, 0);
  }
  function isWhitespace(_this__u8e3s4) {
    return isWhitespaceImpl(_this__u8e3s4);
  }
  function checkRadix(radix) {
    if (!(2 <= radix ? radix <= 36 : false)) {
      throw IllegalArgumentException.z('radix ' + radix + ' was not in valid range 2..36');
    }
    return radix;
  }
  function toInt(_this__u8e3s4) {
    var tmp0_elvis_lhs = toIntOrNull(_this__u8e3s4);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      numberFormatError(_this__u8e3s4);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function digitOf(char, radix) {
    // Inline function 'kotlin.let' call
    var it = Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(48)) >= 0 && Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(57)) <= 0 ? Char__minus_impl_a2frrh(char, _Char___init__impl__6a9atx(48)) : Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(65)) >= 0 && Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(90)) <= 0 ? Char__minus_impl_a2frrh(char, _Char___init__impl__6a9atx(65)) + 10 | 0 : Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(97)) >= 0 && Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(122)) <= 0 ? Char__minus_impl_a2frrh(char, _Char___init__impl__6a9atx(97)) + 10 | 0 : Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(128)) < 0 ? -1 : Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(65313)) >= 0 && Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(65338)) <= 0 ? Char__minus_impl_a2frrh(char, _Char___init__impl__6a9atx(65313)) + 10 | 0 : Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(65345)) >= 0 && Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(65370)) <= 0 ? Char__minus_impl_a2frrh(char, _Char___init__impl__6a9atx(65345)) + 10 | 0 : digitToIntImpl(char);
    return it >= radix ? -1 : it;
  }
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 === VOID)
      new Companion_3();
    return Companion_instance_3;
  }
  var STRING_CASE_INSENSITIVE_ORDER;
  function substring(_this__u8e3s4, startIndex, endIndex) {
    _init_properties_stringJs_kt__bg7zye();
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4.substring(startIndex, endIndex);
  }
  function compareTo_0(_this__u8e3s4, other, ignoreCase) {
    ignoreCase = ignoreCase === VOID ? false : ignoreCase;
    _init_properties_stringJs_kt__bg7zye();
    if (ignoreCase) {
      var n1 = _this__u8e3s4.length;
      var n2 = other.length;
      // Inline function 'kotlin.comparisons.minOf' call
      var min = Math.min(n1, n2);
      if (min === 0)
        return n1 - n2 | 0;
      var inductionVariable = 0;
      if (inductionVariable < min)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var thisChar = charCodeAt(_this__u8e3s4, index);
          var otherChar = charCodeAt(other, index);
          if (!(thisChar === otherChar)) {
            thisChar = uppercaseChar(thisChar);
            otherChar = uppercaseChar(otherChar);
            if (!(thisChar === otherChar)) {
              // Inline function 'kotlin.text.lowercaseChar' call
              // Inline function 'kotlin.text.lowercase' call
              var this_0 = thisChar;
              // Inline function 'kotlin.js.asDynamic' call
              // Inline function 'kotlin.js.unsafeCast' call
              var tmp$ret$3 = toString(this_0).toLowerCase();
              thisChar = charCodeAt(tmp$ret$3, 0);
              // Inline function 'kotlin.text.lowercaseChar' call
              // Inline function 'kotlin.text.lowercase' call
              var this_1 = otherChar;
              // Inline function 'kotlin.js.asDynamic' call
              // Inline function 'kotlin.js.unsafeCast' call
              var tmp$ret$7 = toString(this_1).toLowerCase();
              otherChar = charCodeAt(tmp$ret$7, 0);
              if (!(thisChar === otherChar)) {
                return Char__compareTo_impl_ypi4mb(thisChar, otherChar);
              }
            }
          }
        }
         while (inductionVariable < min);
      return n1 - n2 | 0;
    } else {
      return compareTo(_this__u8e3s4, other);
    }
  }
  function STRING_CASE_INSENSITIVE_ORDER$lambda(a, b) {
    _init_properties_stringJs_kt__bg7zye();
    return compareTo_0(a, b, true);
  }
  var properties_initialized_stringJs_kt_nta8o4;
  function _init_properties_stringJs_kt__bg7zye() {
    if (!properties_initialized_stringJs_kt_nta8o4) {
      properties_initialized_stringJs_kt_nta8o4 = true;
      var tmp = STRING_CASE_INSENSITIVE_ORDER$lambda;
      STRING_CASE_INSENSITIVE_ORDER = new sam$kotlin_Comparator$0(tmp);
    }
  }
  function startsWith(_this__u8e3s4, prefix, ignoreCase) {
    ignoreCase = ignoreCase === VOID ? false : ignoreCase;
    if (!ignoreCase) {
      // Inline function 'kotlin.text.nativeStartsWith' call
      // Inline function 'kotlin.js.asDynamic' call
      return _this__u8e3s4.startsWith(prefix, 0);
    } else
      return regionMatches(_this__u8e3s4, 0, prefix, 0, prefix.length, ignoreCase);
  }
  function replace(_this__u8e3s4, oldValue, newValue, ignoreCase) {
    ignoreCase = ignoreCase === VOID ? false : ignoreCase;
    var tmp2 = new RegExp(Companion_getInstance_3().xc(oldValue), ignoreCase ? 'gui' : 'gu');
    // Inline function 'kotlin.text.nativeReplace' call
    var replacement = Companion_getInstance_3().yc(newValue);
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4.replace(tmp2, replacement);
  }
  function regionMatches(_this__u8e3s4, thisOffset, other, otherOffset, length, ignoreCase) {
    ignoreCase = ignoreCase === VOID ? false : ignoreCase;
    return regionMatchesImpl(_this__u8e3s4, thisOffset, other, otherOffset, length, ignoreCase);
  }
  function equals_0(_this__u8e3s4, other, ignoreCase) {
    ignoreCase = ignoreCase === VOID ? false : ignoreCase;
    if (_this__u8e3s4 == null)
      return other == null;
    if (other == null)
      return false;
    if (!ignoreCase)
      return _this__u8e3s4 == other;
    if (!(_this__u8e3s4.length === other.length))
      return false;
    var inductionVariable = 0;
    var last = _this__u8e3s4.length;
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var thisChar = charCodeAt(_this__u8e3s4, index);
        var otherChar = charCodeAt(other, index);
        if (!equals_1(thisChar, otherChar, ignoreCase)) {
          return false;
        }
      }
       while (inductionVariable < last);
    return true;
  }
  function endsWith(_this__u8e3s4, suffix, ignoreCase) {
    ignoreCase = ignoreCase === VOID ? false : ignoreCase;
    if (!ignoreCase) {
      // Inline function 'kotlin.text.nativeEndsWith' call
      // Inline function 'kotlin.js.asDynamic' call
      return _this__u8e3s4.endsWith(suffix);
    } else
      return regionMatches(_this__u8e3s4, _this__u8e3s4.length - suffix.length | 0, suffix, 0, suffix.length, ignoreCase);
  }
  function AbstractCollection$toString$lambda(this$0) {
    return (it) => it === this$0 ? '(this Collection)' : toString_0(it);
  }
  var Companion_instance_4;
  function Companion_getInstance_4() {
    return Companion_instance_4;
  }
  function toString_2($this, entry) {
    return toString_3($this, entry.c2()) + '=' + toString_3($this, entry.d2());
  }
  function toString_3($this, o) {
    return o === $this ? '(this Map)' : toString_0(o);
  }
  function implFindEntry($this, key) {
    var tmp0 = $this.j2();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.e1();
      while (_iterator__ex2g4s.f1()) {
        var element = _iterator__ex2g4s.g1();
        if (equals(element.c2(), key)) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    return tmp$ret$1;
  }
  var Companion_instance_5;
  function Companion_getInstance_5() {
    return Companion_instance_5;
  }
  function AbstractMap$toString$lambda(this$0) {
    return (it) => toString_2(this$0, it);
  }
  var Companion_instance_6;
  function Companion_getInstance_6() {
    return Companion_instance_6;
  }
  function ensureCapacity_0($this, minCapacity) {
    if (minCapacity < 0)
      throw IllegalStateException.c3('Deque is too big.');
    if (minCapacity <= $this.nd_1.length)
      return Unit_instance;
    if ($this.nd_1 === Companion_getInstance_7().pd_1) {
      var tmp = $this;
      // Inline function 'kotlin.arrayOfNulls' call
      var size = coerceAtLeast(minCapacity, 10);
      tmp.nd_1 = Array(size);
      return Unit_instance;
    }
    var newCapacity = Companion_instance_4.o8($this.nd_1.length, minCapacity);
    copyElements($this, newCapacity);
  }
  function copyElements($this, newCapacity) {
    // Inline function 'kotlin.arrayOfNulls' call
    var newElements = Array(newCapacity);
    var tmp0 = $this.nd_1;
    var tmp6 = $this.md_1;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = $this.nd_1.length;
    arrayCopy(tmp0, newElements, 0, tmp6, endIndex);
    var tmp0_0 = $this.nd_1;
    var tmp4 = $this.nd_1.length - $this.md_1 | 0;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex_0 = $this.md_1;
    arrayCopy(tmp0_0, newElements, tmp4, 0, endIndex_0);
    $this.md_1 = 0;
    $this.nd_1 = newElements;
  }
  function positiveMod($this, index) {
    return index >= $this.nd_1.length ? index - $this.nd_1.length | 0 : index;
  }
  function negativeMod($this, index) {
    return index < 0 ? index + $this.nd_1.length | 0 : index;
  }
  function incremented($this, index) {
    return index === get_lastIndex($this.nd_1) ? 0 : index + 1 | 0;
  }
  function decremented($this, index) {
    return index === 0 ? get_lastIndex($this.nd_1) : index - 1 | 0;
  }
  function copyCollectionElements($this, internalIndex, elements) {
    var iterator = elements.e1();
    var inductionVariable = internalIndex;
    var last = $this.nd_1.length;
    if (inductionVariable < last)
      $l$loop: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!iterator.f1())
          break $l$loop;
        $this.nd_1[index] = iterator.g1();
      }
       while (inductionVariable < last);
    var inductionVariable_0 = 0;
    var last_0 = $this.md_1;
    if (inductionVariable_0 < last_0)
      $l$loop_0: do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        if (!iterator.f1())
          break $l$loop_0;
        $this.nd_1[index_0] = iterator.g1();
      }
       while (inductionVariable_0 < last_0);
    $this.od_1 = $this.od_1 + elements.j1() | 0;
  }
  function removeRangeShiftPreceding($this, fromIndex, toIndex) {
    // Inline function 'kotlin.collections.ArrayDeque.internalIndex' call
    var index = fromIndex - 1 | 0;
    var copyFromIndex = positiveMod($this, $this.md_1 + index | 0);
    // Inline function 'kotlin.collections.ArrayDeque.internalIndex' call
    var index_0 = toIndex - 1 | 0;
    var copyToIndex = positiveMod($this, $this.md_1 + index_0 | 0);
    var copyCount = fromIndex;
    while (copyCount > 0) {
      var tmp0 = copyCount;
      var tmp2 = copyFromIndex + 1 | 0;
      // Inline function 'kotlin.comparisons.minOf' call
      var c = copyToIndex + 1 | 0;
      var segmentLength = Math.min(tmp0, tmp2, c);
      var tmp0_0 = $this.nd_1;
      var tmp2_0 = $this.nd_1;
      var tmp4 = (copyToIndex - segmentLength | 0) + 1 | 0;
      var tmp6 = (copyFromIndex - segmentLength | 0) + 1 | 0;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = copyFromIndex + 1 | 0;
      arrayCopy(tmp0_0, tmp2_0, tmp4, tmp6, endIndex);
      copyFromIndex = negativeMod($this, copyFromIndex - segmentLength | 0);
      copyToIndex = negativeMod($this, copyToIndex - segmentLength | 0);
      copyCount = copyCount - segmentLength | 0;
    }
  }
  function removeRangeShiftSucceeding($this, fromIndex, toIndex) {
    // Inline function 'kotlin.collections.ArrayDeque.internalIndex' call
    var copyFromIndex = positiveMod($this, $this.md_1 + toIndex | 0);
    // Inline function 'kotlin.collections.ArrayDeque.internalIndex' call
    var copyToIndex = positiveMod($this, $this.md_1 + fromIndex | 0);
    var copyCount = $this.od_1 - toIndex | 0;
    while (copyCount > 0) {
      var tmp0 = copyCount;
      var tmp2 = $this.nd_1.length - copyFromIndex | 0;
      // Inline function 'kotlin.comparisons.minOf' call
      var c = $this.nd_1.length - copyToIndex | 0;
      var segmentLength = Math.min(tmp0, tmp2, c);
      var tmp0_0 = $this.nd_1;
      var tmp2_0 = $this.nd_1;
      var tmp4 = copyToIndex;
      var tmp6 = copyFromIndex;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = copyFromIndex + segmentLength | 0;
      arrayCopy(tmp0_0, tmp2_0, tmp4, tmp6, endIndex);
      copyFromIndex = positiveMod($this, copyFromIndex + segmentLength | 0);
      copyToIndex = positiveMod($this, copyToIndex + segmentLength | 0);
      copyCount = copyCount - segmentLength | 0;
    }
  }
  function nullifyNonEmpty($this, internalFromIndex, internalToIndex) {
    if (internalFromIndex < internalToIndex) {
      fill($this.nd_1, null, internalFromIndex, internalToIndex);
    } else {
      fill($this.nd_1, null, internalFromIndex, $this.nd_1.length);
      fill($this.nd_1, null, 0, internalToIndex);
    }
  }
  function registerModification_0($this) {
    $this.o4_1 = $this.o4_1 + 1 | 0;
  }
  var Companion_instance_7;
  function Companion_getInstance_7() {
    if (Companion_instance_7 === VOID)
      new Companion_7();
    return Companion_instance_7;
  }
  function init_kotlin_collections_ArrayDeque(_this__u8e3s4) {
    Companion_getInstance_7();
    _this__u8e3s4.md_1 = 0;
    _this__u8e3s4.od_1 = 0;
  }
  function collectionToArrayCommonImpl(collection) {
    if (collection.k1()) {
      // Inline function 'kotlin.emptyArray' call
      return [];
    }
    // Inline function 'kotlin.arrayOfNulls' call
    var size = collection.j1();
    var destination = Array(size);
    var iterator = collection.e1();
    var index = 0;
    while (iterator.f1()) {
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      destination[_unary__edvuaz] = iterator.g1();
    }
    return destination;
  }
  function emptyList() {
    return EmptyList_getInstance();
  }
  function listOf_0(elements) {
    return elements.length > 0 ? asList(elements) : emptyList();
  }
  function shuffled(_this__u8e3s4, random) {
    // Inline function 'kotlin.apply' call
    var this_0 = toMutableList_0(_this__u8e3s4);
    shuffle(this_0, random);
    return this_0;
  }
  function listOfNotNull(element) {
    return !(element == null) ? listOf(element) : emptyList();
  }
  function get_indices_1(_this__u8e3s4) {
    return numberRangeToNumber(0, _this__u8e3s4.j1() - 1 | 0);
  }
  var EmptyList_instance;
  function EmptyList_getInstance() {
    if (EmptyList_instance === VOID)
      new EmptyList();
    return EmptyList_instance;
  }
  var EmptyIterator_instance;
  function EmptyIterator_getInstance() {
    return EmptyIterator_instance;
  }
  function get_lastIndex_2(_this__u8e3s4) {
    return _this__u8e3s4.j1() - 1 | 0;
  }
  function asCollection(_this__u8e3s4, isVarargs) {
    isVarargs = isVarargs === VOID ? false : isVarargs;
    return new ArrayAsCollection(_this__u8e3s4, isVarargs);
  }
  function optimizeReadOnlyList(_this__u8e3s4) {
    switch (_this__u8e3s4.j1()) {
      case 0:
        return emptyList();
      case 1:
        return listOf(_this__u8e3s4.l1(0));
      default:
        return _this__u8e3s4;
    }
  }
  function throwCountOverflow() {
    throw ArithmeticException.bb('Count overflow has happened.');
  }
  function throwIndexOverflow() {
    throw ArithmeticException.bb('Index overflow has happened.');
  }
  function collectionSizeOrDefault(_this__u8e3s4, default_0) {
    var tmp;
    if (isInterface(_this__u8e3s4, Collection)) {
      tmp = _this__u8e3s4.j1();
    } else {
      tmp = default_0;
    }
    return tmp;
  }
  function collectionSizeOrNull(_this__u8e3s4) {
    var tmp;
    if (isInterface(_this__u8e3s4, Collection)) {
      tmp = _this__u8e3s4.j1();
    } else {
      tmp = null;
    }
    return tmp;
  }
  function getOrImplicitDefault(_this__u8e3s4, key) {
    if (isInterface(_this__u8e3s4, MapWithDefault))
      return _this__u8e3s4.ie(key);
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.collections.getOrElseNullable' call
      var value = _this__u8e3s4.g2(key);
      if (value == null && !_this__u8e3s4.e2(key)) {
        throw NoSuchElementException.v('Key ' + toString_0(key) + ' is missing in the map.');
      } else {
        tmp$ret$0 = (value == null ? true : !(value == null)) ? value : THROW_CCE();
        break $l$block;
      }
    }
    return tmp$ret$0;
  }
  function emptyMap() {
    var tmp = EmptyMap_getInstance();
    return isInterface(tmp, KtMap) ? tmp : THROW_CCE();
  }
  function mapOf_0(pairs) {
    return pairs.length > 0 ? toMap_0(pairs, LinkedHashMap.u9(mapCapacity(pairs.length))) : emptyMap();
  }
  function getValue(_this__u8e3s4, key) {
    return getOrImplicitDefault(_this__u8e3s4, key);
  }
  function toMap(_this__u8e3s4) {
    if (isInterface(_this__u8e3s4, Collection)) {
      var tmp;
      switch (_this__u8e3s4.j1()) {
        case 0:
          tmp = emptyMap();
          break;
        case 1:
          var tmp_0;
          if (isInterface(_this__u8e3s4, KtList)) {
            tmp_0 = _this__u8e3s4.l1(0);
          } else {
            tmp_0 = _this__u8e3s4.e1().g1();
          }

          tmp = mapOf(tmp_0);
          break;
        default:
          tmp = toMap_1(_this__u8e3s4, LinkedHashMap.u9(mapCapacity(_this__u8e3s4.j1())));
          break;
      }
      return tmp;
    }
    return optimizeReadOnlyMap(toMap_1(_this__u8e3s4, LinkedHashMap.z3()));
  }
  var EmptyMap_instance;
  function EmptyMap_getInstance() {
    if (EmptyMap_instance === VOID)
      new EmptyMap();
    return EmptyMap_instance;
  }
  function toMap_0(_this__u8e3s4, destination) {
    // Inline function 'kotlin.apply' call
    putAll(destination, _this__u8e3s4);
    return destination;
  }
  function toMap_1(_this__u8e3s4, destination) {
    // Inline function 'kotlin.apply' call
    putAll_0(destination, _this__u8e3s4);
    return destination;
  }
  function optimizeReadOnlyMap(_this__u8e3s4) {
    var tmp;
    switch (_this__u8e3s4.j1()) {
      case 0:
        tmp = emptyMap();
        break;
      case 1:
        // Inline function 'kotlin.collections.toSingletonMapOrSelf' call

        tmp = _this__u8e3s4;
        break;
      default:
        tmp = _this__u8e3s4;
        break;
    }
    return tmp;
  }
  function putAll(_this__u8e3s4, pairs) {
    var inductionVariable = 0;
    var last = pairs.length;
    while (inductionVariable < last) {
      var _destruct__k2r9zo = pairs[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var key = _destruct__k2r9zo.oe();
      var value = _destruct__k2r9zo.pe();
      _this__u8e3s4.c4(key, value);
    }
  }
  function putAll_0(_this__u8e3s4, pairs) {
    var _iterator__ex2g4s = pairs.e1();
    while (_iterator__ex2g4s.f1()) {
      var _destruct__k2r9zo = _iterator__ex2g4s.g1();
      var key = _destruct__k2r9zo.oe();
      var value = _destruct__k2r9zo.pe();
      _this__u8e3s4.c4(key, value);
    }
  }
  function hashMapOf(pairs) {
    // Inline function 'kotlin.apply' call
    var this_0 = HashMap.x6(mapCapacity(pairs.length));
    putAll(this_0, pairs);
    return this_0;
  }
  function removeAll(_this__u8e3s4, predicate) {
    return filterInPlace(_this__u8e3s4, predicate, true);
  }
  function removeAll_0(_this__u8e3s4, predicate) {
    return filterInPlace_0(_this__u8e3s4, predicate, true);
  }
  function addAll(_this__u8e3s4, elements) {
    if (isInterface(elements, Collection))
      return _this__u8e3s4.q1(elements);
    else {
      var result = false;
      var _iterator__ex2g4s = elements.e1();
      while (_iterator__ex2g4s.f1()) {
        var item = _iterator__ex2g4s.g1();
        if (_this__u8e3s4.r(item))
          result = true;
      }
      return result;
    }
  }
  function filterInPlace(_this__u8e3s4, predicate, predicateResultToRemove) {
    if (!isInterface(_this__u8e3s4, RandomAccess)) {
      return filterInPlace_0(isInterface(_this__u8e3s4, MutableIterable) ? _this__u8e3s4 : THROW_CCE(), predicate, predicateResultToRemove);
    }
    var writeIndex = 0;
    var inductionVariable = 0;
    var last = get_lastIndex_2(_this__u8e3s4);
    if (inductionVariable <= last)
      $l$loop: do {
        var readIndex = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = _this__u8e3s4.l1(readIndex);
        if (predicate(element) === predicateResultToRemove)
          continue $l$loop;
        if (!(writeIndex === readIndex)) {
          _this__u8e3s4.r1(writeIndex, element);
        }
        writeIndex = writeIndex + 1 | 0;
      }
       while (!(readIndex === last));
    if (writeIndex < _this__u8e3s4.j1()) {
      var inductionVariable_0 = get_lastIndex_2(_this__u8e3s4);
      var last_0 = writeIndex;
      if (last_0 <= inductionVariable_0)
        do {
          var removeIndex = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + -1 | 0;
          _this__u8e3s4.p4(removeIndex);
        }
         while (!(removeIndex === last_0));
      return true;
    } else {
      return false;
    }
  }
  function filterInPlace_0(_this__u8e3s4, predicate, predicateResultToRemove) {
    var result = false;
    // Inline function 'kotlin.with' call
    var $this$with = _this__u8e3s4.e1();
    while ($this$with.f1())
      if (predicate($this$with.g1()) === predicateResultToRemove) {
        $this$with.h4();
        result = true;
      }
    return result;
  }
  function convertToListIfNotCollection(_this__u8e3s4) {
    var tmp;
    if (isInterface(_this__u8e3s4, Collection)) {
      tmp = _this__u8e3s4;
    } else {
      tmp = toList_0(_this__u8e3s4);
    }
    return tmp;
  }
  function removeLast(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4.k1()) {
      throw NoSuchElementException.v('List is empty.');
    } else {
      tmp = _this__u8e3s4.p4(get_lastIndex_2(_this__u8e3s4));
    }
    return tmp;
  }
  function setOf_0(elements) {
    return toSet(elements);
  }
  var EmptySet_instance;
  function EmptySet_getInstance() {
    if (EmptySet_instance === VOID)
      new EmptySet();
    return EmptySet_instance;
  }
  function emptySet() {
    return EmptySet_getInstance();
  }
  function optimizeReadOnlySet(_this__u8e3s4) {
    switch (_this__u8e3s4.j1()) {
      case 0:
        return emptySet();
      case 1:
        return setOf(_this__u8e3s4.e1().g1());
      default:
        return _this__u8e3s4;
    }
  }
  function hashSetOf(elements) {
    return toCollection(elements, HashSet.i1(mapCapacity(elements.length)));
  }
  function compareValues(a, b) {
    if (a === b)
      return 0;
    if (a == null)
      return -1;
    if (b == null)
      return 1;
    return compareTo((!(a == null) ? isComparable(a) : false) ? a : THROW_CCE(), b);
  }
  var Key_instance;
  function Key_getInstance() {
    return Key_instance;
  }
  var EmptyCoroutineContext_instance;
  function EmptyCoroutineContext_getInstance() {
    if (EmptyCoroutineContext_instance === VOID)
      new EmptyCoroutineContext();
    return EmptyCoroutineContext_instance;
  }
  function get_COROUTINE_SUSPENDED() {
    return CoroutineSingletons_COROUTINE_SUSPENDED_getInstance();
  }
  var CoroutineSingletons_COROUTINE_SUSPENDED_instance;
  var CoroutineSingletons_UNDECIDED_instance;
  var CoroutineSingletons_RESUMED_instance;
  var CoroutineSingletons_entriesInitialized;
  function CoroutineSingletons_initEntries() {
    if (CoroutineSingletons_entriesInitialized)
      return Unit_instance;
    CoroutineSingletons_entriesInitialized = true;
    CoroutineSingletons_COROUTINE_SUSPENDED_instance = new CoroutineSingletons('COROUTINE_SUSPENDED', 0);
    CoroutineSingletons_UNDECIDED_instance = new CoroutineSingletons('UNDECIDED', 1);
    CoroutineSingletons_RESUMED_instance = new CoroutineSingletons('RESUMED', 2);
  }
  function CoroutineSingletons_COROUTINE_SUSPENDED_getInstance() {
    CoroutineSingletons_initEntries();
    return CoroutineSingletons_COROUTINE_SUSPENDED_instance;
  }
  function enumEntries(entries) {
    return EnumEntriesList.ve(entries);
  }
  function getProgressionLastElement(start, end, step) {
    var tmp;
    if (step > 0) {
      tmp = start >= end ? end : end - differenceModulo(end, start, step) | 0;
    } else if (step < 0) {
      tmp = start <= end ? end : end + differenceModulo(start, end, -step | 0) | 0;
    } else {
      throw IllegalArgumentException.z('Step is zero.');
    }
    return tmp;
  }
  function differenceModulo(a, b, c) {
    return mod(mod(a, c) - mod(b, c) | 0, c);
  }
  function mod(a, b) {
    var mod = a % b | 0;
    return mod >= 0 ? mod : mod + b | 0;
  }
  var Default_instance;
  function Default_getInstance() {
    if (Default_instance === VOID)
      Default.ze();
    return Default_instance;
  }
  function checkRangeBounds(from, until) {
    // Inline function 'kotlin.require' call
    if (!(until > from)) {
      var message = boundsErrorMessage(from, until);
      throw IllegalArgumentException.z(toString_1(message));
    }
    return Unit_instance;
  }
  function fastLog2(value) {
    // Inline function 'kotlin.countLeadingZeroBits' call
    return 31 - clz32(value) | 0;
  }
  function boundsErrorMessage(from, until) {
    return 'Random range is empty: [' + toString_1(from) + ', ' + toString_1(until) + ').';
  }
  function Random_0(seed) {
    return XorWowRandom.kf(seed, seed >> 31);
  }
  function takeUpperBits(_this__u8e3s4, bitCount) {
    return (_this__u8e3s4 >>> (32 - bitCount | 0) | 0) & (-bitCount | 0) >> 31;
  }
  function checkInvariants($this) {
    // Inline function 'kotlin.require' call
    if (!!(($this.ef_1 | $this.ff_1 | $this.gf_1 | $this.hf_1 | $this.if_1) === 0)) {
      var message = 'Initial state must have at least one non-zero element.';
      throw IllegalArgumentException.z(toString_1(message));
    }
  }
  var Companion_instance_8;
  function Companion_getInstance_8() {
    if (Companion_instance_8 === VOID)
      new Companion_8();
    return Companion_instance_8;
  }
  var Companion_instance_9;
  function Companion_getInstance_9() {
    if (Companion_instance_9 === VOID)
      new Companion_9();
    return Companion_instance_9;
  }
  var Companion_instance_10;
  function Companion_getInstance_10() {
    return Companion_instance_10;
  }
  function appendElement(_this__u8e3s4, element, transform) {
    if (!(transform == null))
      _this__u8e3s4.c1(transform(element));
    else {
      if (element == null ? true : isCharSequence(element))
        _this__u8e3s4.c1(element);
      else {
        if (element instanceof Char)
          _this__u8e3s4.q9(element.ag_1);
        else {
          _this__u8e3s4.c1(toString_1(element));
        }
      }
    }
  }
  function equals_1(_this__u8e3s4, other, ignoreCase) {
    ignoreCase = ignoreCase === VOID ? false : ignoreCase;
    if (_this__u8e3s4 === other)
      return true;
    if (!ignoreCase)
      return false;
    var thisUpper = uppercaseChar(_this__u8e3s4);
    var otherUpper = uppercaseChar(other);
    var tmp;
    if (thisUpper === otherUpper) {
      tmp = true;
    } else {
      // Inline function 'kotlin.text.lowercaseChar' call
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$2 = toString(thisUpper).toLowerCase();
      var tmp_0 = charCodeAt(tmp$ret$2, 0);
      // Inline function 'kotlin.text.lowercaseChar' call
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$6 = toString(otherUpper).toLowerCase();
      tmp = tmp_0 === charCodeAt(tmp$ret$6, 0);
    }
    return tmp;
  }
  function toIntOrNull(_this__u8e3s4) {
    return toIntOrNull_0(_this__u8e3s4, 10);
  }
  function toLongOrNull(_this__u8e3s4) {
    return toLongOrNull_0(_this__u8e3s4, 10);
  }
  function toIntOrNull_0(_this__u8e3s4, radix) {
    checkRadix(radix);
    var length = _this__u8e3s4.length;
    if (length === 0)
      return null;
    var start;
    var isNegative;
    var limit;
    var firstChar = charCodeAt(_this__u8e3s4, 0);
    if (Char__compareTo_impl_ypi4mb(firstChar, _Char___init__impl__6a9atx(48)) < 0) {
      if (length === 1)
        return null;
      start = 1;
      if (firstChar === _Char___init__impl__6a9atx(45)) {
        isNegative = true;
        limit = -2147483648;
      } else if (firstChar === _Char___init__impl__6a9atx(43)) {
        isNegative = false;
        limit = -2147483647;
      } else
        return null;
    } else {
      start = 0;
      isNegative = false;
      limit = -2147483647;
    }
    var limitForMaxRadix = -59652323;
    var limitBeforeMul = limitForMaxRadix;
    var result = 0;
    var inductionVariable = start;
    if (inductionVariable < length)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var digit = digitOf(charCodeAt(_this__u8e3s4, i), radix);
        if (digit < 0)
          return null;
        if (result < limitBeforeMul) {
          if (limitBeforeMul === limitForMaxRadix) {
            limitBeforeMul = limit / radix | 0;
            if (result < limitBeforeMul) {
              return null;
            }
          } else {
            return null;
          }
        }
        result = imul(result, radix);
        if (result < (limit + digit | 0))
          return null;
        result = result - digit | 0;
      }
       while (inductionVariable < length);
    return isNegative ? result : -result | 0;
  }
  function toLongOrNull_0(_this__u8e3s4, radix) {
    checkRadix(radix);
    var length = _this__u8e3s4.length;
    if (length === 0)
      return null;
    var start;
    var isNegative;
    var limit;
    var firstChar = charCodeAt(_this__u8e3s4, 0);
    if (Char__compareTo_impl_ypi4mb(firstChar, _Char___init__impl__6a9atx(48)) < 0) {
      if (length === 1)
        return null;
      start = 1;
      if (firstChar === _Char___init__impl__6a9atx(45)) {
        isNegative = true;
        limit = new Long(0, -2147483648);
      } else if (firstChar === _Char___init__impl__6a9atx(43)) {
        isNegative = false;
        limit = new Long(1, -2147483648);
      } else
        return null;
    } else {
      start = 0;
      isNegative = false;
      limit = new Long(1, -2147483648);
    }
    // Inline function 'kotlin.Long.div' call
    var this_0 = new Long(1, -2147483648);
    var limitForMaxRadix = divide(this_0, fromInt(36));
    var limitBeforeMul = limitForMaxRadix;
    var result = new Long(0, 0);
    var inductionVariable = start;
    if (inductionVariable < length)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var digit = digitOf(charCodeAt(_this__u8e3s4, i), radix);
        if (digit < 0)
          return null;
        if (compare(result, limitBeforeMul) < 0) {
          if (equalsLong(limitBeforeMul, limitForMaxRadix)) {
            // Inline function 'kotlin.Long.div' call
            var this_1 = limit;
            limitBeforeMul = divide(this_1, fromInt(radix));
            if (compare(result, limitBeforeMul) < 0) {
              return null;
            }
          } else {
            return null;
          }
        }
        // Inline function 'kotlin.Long.times' call
        var this_2 = result;
        result = multiply(this_2, fromInt(radix));
        var tmp = result;
        // Inline function 'kotlin.Long.plus' call
        var this_3 = limit;
        var tmp$ret$3 = add(this_3, fromInt(digit));
        if (compare(tmp, tmp$ret$3) < 0)
          return null;
        // Inline function 'kotlin.Long.minus' call
        var this_4 = result;
        result = subtract(this_4, fromInt(digit));
      }
       while (inductionVariable < length);
    return isNegative ? result : negate(result);
  }
  function numberFormatError(input) {
    throw NumberFormatException.hb("Invalid number format: '" + input + "'");
  }
  function substringAfter(_this__u8e3s4, delimiter, missingDelimiterValue) {
    missingDelimiterValue = missingDelimiterValue === VOID ? _this__u8e3s4 : missingDelimiterValue;
    var index = indexOf_2(_this__u8e3s4, delimiter);
    return index === -1 ? missingDelimiterValue : substring(_this__u8e3s4, index + delimiter.length | 0, _this__u8e3s4.length);
  }
  function trimEnd(_this__u8e3s4, chars) {
    // Inline function 'kotlin.text.trimEnd' call
    var tmp0 = isCharSequence(_this__u8e3s4) ? _this__u8e3s4 : THROW_CCE();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.text.trimEnd' call
      var inductionVariable = charSequenceLength(tmp0) - 1 | 0;
      if (0 <= inductionVariable)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          var it = charSequenceGet(tmp0, index);
          if (!contains_0(chars, it)) {
            tmp$ret$1 = charSequenceSubSequence(tmp0, 0, index + 1 | 0);
            break $l$block;
          }
        }
         while (0 <= inductionVariable);
      tmp$ret$1 = '';
    }
    return toString_1(tmp$ret$1);
  }
  function indexOf_1(_this__u8e3s4, char, startIndex, ignoreCase) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    ignoreCase = ignoreCase === VOID ? false : ignoreCase;
    var tmp;
    var tmp_0;
    if (ignoreCase) {
      tmp_0 = true;
    } else {
      tmp_0 = !(typeof _this__u8e3s4 === 'string');
    }
    if (tmp_0) {
      // Inline function 'kotlin.charArrayOf' call
      var tmp$ret$0 = charArrayOf([char]);
      tmp = indexOfAny(_this__u8e3s4, tmp$ret$0, startIndex, ignoreCase);
    } else {
      // Inline function 'kotlin.text.nativeIndexOf' call
      // Inline function 'kotlin.text.nativeIndexOf' call
      var str = toString(char);
      // Inline function 'kotlin.js.asDynamic' call
      tmp = _this__u8e3s4.indexOf(str, startIndex);
    }
    return tmp;
  }
  function isBlank(_this__u8e3s4) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.text.all' call
      var inductionVariable = 0;
      while (inductionVariable < charSequenceLength(_this__u8e3s4)) {
        var element = charSequenceGet(_this__u8e3s4, inductionVariable);
        inductionVariable = inductionVariable + 1 | 0;
        if (!isWhitespace(element)) {
          tmp$ret$1 = false;
          break $l$block;
        }
      }
      tmp$ret$1 = true;
    }
    return tmp$ret$1;
  }
  function indexOf_2(_this__u8e3s4, string, startIndex, ignoreCase) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    ignoreCase = ignoreCase === VOID ? false : ignoreCase;
    var tmp;
    var tmp_0;
    if (ignoreCase) {
      tmp_0 = true;
    } else {
      tmp_0 = !(typeof _this__u8e3s4 === 'string');
    }
    if (tmp_0) {
      tmp = indexOf_3(_this__u8e3s4, string, startIndex, charSequenceLength(_this__u8e3s4), ignoreCase);
    } else {
      // Inline function 'kotlin.text.nativeIndexOf' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = _this__u8e3s4.indexOf(string, startIndex);
    }
    return tmp;
  }
  function trim(_this__u8e3s4) {
    // Inline function 'kotlin.text.trim' call
    var startIndex = 0;
    var endIndex = charSequenceLength(_this__u8e3s4) - 1 | 0;
    var startFound = false;
    $l$loop: while (startIndex <= endIndex) {
      var index = !startFound ? startIndex : endIndex;
      var p0 = charSequenceGet(_this__u8e3s4, index);
      var match = isWhitespace(p0);
      if (!startFound) {
        if (!match)
          startFound = true;
        else
          startIndex = startIndex + 1 | 0;
      } else {
        if (!match)
          break $l$loop;
        else
          endIndex = endIndex - 1 | 0;
      }
    }
    return charSequenceSubSequence(_this__u8e3s4, startIndex, endIndex + 1 | 0);
  }
  function indexOfAny(_this__u8e3s4, chars, startIndex, ignoreCase) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    ignoreCase = ignoreCase === VOID ? false : ignoreCase;
    var tmp;
    if (!ignoreCase && chars.length === 1) {
      tmp = typeof _this__u8e3s4 === 'string';
    } else {
      tmp = false;
    }
    if (tmp) {
      var char = single(chars);
      // Inline function 'kotlin.text.nativeIndexOf' call
      // Inline function 'kotlin.text.nativeIndexOf' call
      var str = toString(char);
      // Inline function 'kotlin.js.asDynamic' call
      return _this__u8e3s4.indexOf(str, startIndex);
    }
    var inductionVariable = coerceAtLeast(startIndex, 0);
    var last = get_lastIndex_3(_this__u8e3s4);
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var charAtIndex = charSequenceGet(_this__u8e3s4, index);
        var tmp$ret$4;
        $l$block: {
          // Inline function 'kotlin.collections.any' call
          var inductionVariable_0 = 0;
          var last_0 = chars.length;
          while (inductionVariable_0 < last_0) {
            var element = chars[inductionVariable_0];
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            if (equals_1(element, charAtIndex, ignoreCase)) {
              tmp$ret$4 = true;
              break $l$block;
            }
          }
          tmp$ret$4 = false;
        }
        if (tmp$ret$4)
          return index;
      }
       while (!(index === last));
    return -1;
  }
  function indexOf_3(_this__u8e3s4, other, startIndex, endIndex, ignoreCase, last) {
    last = last === VOID ? false : last;
    var indices = !last ? numberRangeToNumber(coerceAtLeast(startIndex, 0), coerceAtMost(endIndex, charSequenceLength(_this__u8e3s4))) : downTo(coerceAtMost(startIndex, get_lastIndex_3(_this__u8e3s4)), coerceAtLeast(endIndex, 0));
    var tmp;
    if (typeof _this__u8e3s4 === 'string') {
      tmp = typeof other === 'string';
    } else {
      tmp = false;
    }
    if (tmp) {
      var inductionVariable = indices.rf_1;
      var last_0 = indices.sf_1;
      var step = indices.tf_1;
      if (step > 0 && inductionVariable <= last_0 || (step < 0 && last_0 <= inductionVariable))
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + step | 0;
          if (regionMatches(other, 0, _this__u8e3s4, index, other.length, ignoreCase))
            return index;
        }
         while (!(index === last_0));
    } else {
      var inductionVariable_0 = indices.rf_1;
      var last_1 = indices.sf_1;
      var step_0 = indices.tf_1;
      if (step_0 > 0 && inductionVariable_0 <= last_1 || (step_0 < 0 && last_1 <= inductionVariable_0))
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + step_0 | 0;
          if (regionMatchesImpl(other, 0, _this__u8e3s4, index_0, charSequenceLength(other), ignoreCase))
            return index_0;
        }
         while (!(index_0 === last_1));
    }
    return -1;
  }
  function get_lastIndex_3(_this__u8e3s4) {
    return charSequenceLength(_this__u8e3s4) - 1 | 0;
  }
  function regionMatchesImpl(_this__u8e3s4, thisOffset, other, otherOffset, length, ignoreCase) {
    if (otherOffset < 0 || thisOffset < 0 || thisOffset > (charSequenceLength(_this__u8e3s4) - length | 0) || otherOffset > (charSequenceLength(other) - length | 0)) {
      return false;
    }
    var inductionVariable = 0;
    if (inductionVariable < length)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!equals_1(charSequenceGet(_this__u8e3s4, thisOffset + index | 0), charSequenceGet(other, otherOffset + index | 0), ignoreCase))
          return false;
      }
       while (inductionVariable < length);
    return true;
  }
  function removeSuffix(_this__u8e3s4, suffix) {
    if (endsWith_0(_this__u8e3s4, suffix)) {
      return substring(_this__u8e3s4, 0, _this__u8e3s4.length - charSequenceLength(suffix) | 0);
    }
    return _this__u8e3s4;
  }
  function substringBefore(_this__u8e3s4, delimiter, missingDelimiterValue) {
    missingDelimiterValue = missingDelimiterValue === VOID ? _this__u8e3s4 : missingDelimiterValue;
    var index = indexOf_1(_this__u8e3s4, delimiter);
    return index === -1 ? missingDelimiterValue : substring(_this__u8e3s4, 0, index);
  }
  function substringAfter_0(_this__u8e3s4, delimiter, missingDelimiterValue) {
    missingDelimiterValue = missingDelimiterValue === VOID ? _this__u8e3s4 : missingDelimiterValue;
    var index = indexOf_1(_this__u8e3s4, delimiter);
    return index === -1 ? missingDelimiterValue : substring(_this__u8e3s4, index + 1 | 0, _this__u8e3s4.length);
  }
  function contains_3(_this__u8e3s4, other, ignoreCase) {
    ignoreCase = ignoreCase === VOID ? false : ignoreCase;
    var tmp;
    if (typeof other === 'string') {
      tmp = indexOf_2(_this__u8e3s4, other, VOID, ignoreCase) >= 0;
    } else {
      tmp = indexOf_3(_this__u8e3s4, other, 0, charSequenceLength(_this__u8e3s4), ignoreCase) >= 0;
    }
    return tmp;
  }
  function lastIndexOf(_this__u8e3s4, string, startIndex, ignoreCase) {
    startIndex = startIndex === VOID ? get_lastIndex_3(_this__u8e3s4) : startIndex;
    ignoreCase = ignoreCase === VOID ? false : ignoreCase;
    var tmp;
    var tmp_0;
    if (ignoreCase) {
      tmp_0 = true;
    } else {
      tmp_0 = !(typeof _this__u8e3s4 === 'string');
    }
    if (tmp_0) {
      tmp = indexOf_3(_this__u8e3s4, string, startIndex, 0, ignoreCase, true);
    } else {
      // Inline function 'kotlin.text.nativeLastIndexOf' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = _this__u8e3s4.lastIndexOf(string, startIndex);
    }
    return tmp;
  }
  function endsWith_0(_this__u8e3s4, suffix, ignoreCase) {
    ignoreCase = ignoreCase === VOID ? false : ignoreCase;
    var tmp;
    var tmp_0;
    if (!ignoreCase) {
      tmp_0 = typeof _this__u8e3s4 === 'string';
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = typeof suffix === 'string';
    } else {
      tmp = false;
    }
    if (tmp)
      return endsWith(_this__u8e3s4, suffix);
    else {
      return regionMatchesImpl(_this__u8e3s4, charSequenceLength(_this__u8e3s4) - charSequenceLength(suffix) | 0, suffix, 0, charSequenceLength(suffix), ignoreCase);
    }
  }
  function get_UNDEFINED_RESULT() {
    _init_properties_DeepRecursive_kt__zbwcac();
    return UNDEFINED_RESULT;
  }
  var UNDEFINED_RESULT;
  function invoke(_this__u8e3s4, value) {
    _init_properties_DeepRecursive_kt__zbwcac();
    return (new DeepRecursiveScopeImpl(_this__u8e3s4.cg_1, value)).hg();
  }
  var properties_initialized_DeepRecursive_kt_5z0al2;
  function _init_properties_DeepRecursive_kt__zbwcac() {
    if (!properties_initialized_DeepRecursive_kt_5z0al2) {
      properties_initialized_DeepRecursive_kt_5z0al2 = true;
      // Inline function 'kotlin.Companion.success' call
      var value = get_COROUTINE_SUSPENDED();
      UNDEFINED_RESULT = _Result___init__impl__xyqfz8(value);
    }
  }
  var LazyThreadSafetyMode_SYNCHRONIZED_instance;
  var LazyThreadSafetyMode_PUBLICATION_instance;
  var LazyThreadSafetyMode_NONE_instance;
  var LazyThreadSafetyMode_entriesInitialized;
  function LazyThreadSafetyMode_initEntries() {
    if (LazyThreadSafetyMode_entriesInitialized)
      return Unit_instance;
    LazyThreadSafetyMode_entriesInitialized = true;
    LazyThreadSafetyMode_SYNCHRONIZED_instance = new LazyThreadSafetyMode('SYNCHRONIZED', 0);
    LazyThreadSafetyMode_PUBLICATION_instance = new LazyThreadSafetyMode('PUBLICATION', 1);
    LazyThreadSafetyMode_NONE_instance = new LazyThreadSafetyMode('NONE', 2);
  }
  var UNINITIALIZED_VALUE_instance;
  function UNINITIALIZED_VALUE_getInstance() {
    return UNINITIALIZED_VALUE_instance;
  }
  function LazyThreadSafetyMode_PUBLICATION_getInstance() {
    LazyThreadSafetyMode_initEntries();
    return LazyThreadSafetyMode_PUBLICATION_instance;
  }
  function _Result___init__impl__xyqfz8(value) {
    return value;
  }
  function _Result___get_value__impl__bjfvqg($this) {
    return $this;
  }
  function _Result___get_isFailure__impl__jpiriv($this) {
    var tmp = _Result___get_value__impl__bjfvqg($this);
    return tmp instanceof Failure;
  }
  function Result__exceptionOrNull_impl_p6xea9($this) {
    var tmp;
    if (_Result___get_value__impl__bjfvqg($this) instanceof Failure) {
      tmp = _Result___get_value__impl__bjfvqg($this).mg_1;
    } else {
      tmp = null;
    }
    return tmp;
  }
  function Result__toString_impl_yu5r8k($this) {
    var tmp;
    if (_Result___get_value__impl__bjfvqg($this) instanceof Failure) {
      tmp = _Result___get_value__impl__bjfvqg($this).toString();
    } else {
      tmp = 'Success(' + toString_0(_Result___get_value__impl__bjfvqg($this)) + ')';
    }
    return tmp;
  }
  var Companion_instance_11;
  function Companion_getInstance_11() {
    return Companion_instance_11;
  }
  function Result__hashCode_impl_d2zufp($this) {
    return $this == null ? 0 : hashCode_0($this);
  }
  function Result__equals_impl_bxgmep($this, other) {
    if (!(other instanceof Result))
      return false;
    var tmp0_other_with_cast = other.ng_1;
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function createFailure(exception) {
    return new Failure(exception);
  }
  function throwOnFailure(_this__u8e3s4) {
    var tmp = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
    if (tmp instanceof Failure)
      throw _Result___get_value__impl__bjfvqg(_this__u8e3s4).mg_1;
  }
  function to(_this__u8e3s4, that) {
    return new Pair(_this__u8e3s4, that);
  }
  function _UShort___init__impl__jigrne(data) {
    return data;
  }
  function _UShort___get_data__impl__g0245($this) {
    return $this;
  }
  function findPolymorphicSerializer(_this__u8e3s4, encoder, value) {
    var tmp0_elvis_lhs = _this__u8e3s4.vg(encoder, value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(getKClassFromExpression(value), _this__u8e3s4.wg());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function findPolymorphicSerializer_0(_this__u8e3s4, decoder, klassName) {
    var tmp0_elvis_lhs = _this__u8e3s4.xg(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered_0(klassName, _this__u8e3s4.wg());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function SealedClassSerializer$descriptor$delegate$lambda$lambda$lambda(this$0) {
    return ($this$buildSerialDescriptor) => {
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = this$0.ch_1.j2().e1();
      while (_iterator__ex2g4s.f1()) {
        var element = _iterator__ex2g4s.g1();
        // Inline function 'kotlin.collections.component1' call
        var name = element.c2();
        // Inline function 'kotlin.collections.component2' call
        var serializer = element.d2();
        $this$buildSerialDescriptor.lh(name, serializer.sg());
      }
      return Unit_instance;
    };
  }
  function SealedClassSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return ($this$buildSerialDescriptor) => {
      $this$buildSerialDescriptor.lh('type', serializer(StringCompanionObject_instance).sg());
      var tmp = 'kotlinx.serialization.Sealed<' + this$0.yg_1.ib() + '>';
      var tmp_0 = CONTEXTUAL_getInstance();
      var elementDescriptor = buildSerialDescriptor(tmp, tmp_0, [], SealedClassSerializer$descriptor$delegate$lambda$lambda$lambda(this$0));
      $this$buildSerialDescriptor.lh('value', elementDescriptor);
      $this$buildSerialDescriptor.fh_1 = this$0.zg_1;
      return Unit_instance;
    };
  }
  function SealedClassSerializer$descriptor$delegate$lambda($serialName, this$0) {
    return () => {
      var tmp = SEALED_getInstance();
      return buildSerialDescriptor($serialName, tmp, [], SealedClassSerializer$descriptor$delegate$lambda$lambda(this$0));
    };
  }
  function SealedClassSerializer$_get_descriptor_$ref_m511rz() {
    return (p0) => p0.sg();
  }
  function init_kotlinx_serialization_SerializationException(_this__u8e3s4) {
    captureStack(_this__u8e3s4, _this__u8e3s4.wh_1);
  }
  function serializer(_this__u8e3s4) {
    return StringSerializer_getInstance();
  }
  function get_nullable(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4.sg().pi()) {
      tmp = isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
    } else {
      tmp = new NullableSerializer(_this__u8e3s4);
    }
    return tmp;
  }
  function getContextualDescriptor(_this__u8e3s4, descriptor) {
    var tmp0_safe_receiver = get_capturedKClass(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp0_safe_receiver_0 = _this__u8e3s4.qi(tmp0_safe_receiver);
      tmp = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.sg();
    }
    return tmp;
  }
  function get_capturedKClass(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof ContextDescriptor) {
      tmp = _this__u8e3s4.ui_1;
    } else {
      if (_this__u8e3s4 instanceof SerialDescriptorForNullable) {
        tmp = get_capturedKClass(_this__u8e3s4.ri_1);
      } else {
        tmp = null;
      }
    }
    return tmp;
  }
  function get_elementDescriptors(_this__u8e3s4) {
    // Inline function 'kotlin.collections.Iterable' call
    return new elementDescriptors$$inlined$Iterable$1(_this__u8e3s4);
  }
  function get_elementNames(_this__u8e3s4) {
    // Inline function 'kotlin.collections.Iterable' call
    return new elementNames$$inlined$Iterable$1(_this__u8e3s4);
  }
  function buildSerialDescriptor(serialName, kind, typeParameters, builder) {
    var tmp;
    if (builder === VOID) {
      tmp = buildSerialDescriptor$lambda;
    } else {
      tmp = builder;
    }
    builder = tmp;
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.require' call
    if (!!isBlank(serialName)) {
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException.z(toString_1(message));
    }
    // Inline function 'kotlin.require' call
    if (!!equals(kind, CLASS_getInstance())) {
      var message_0 = "For StructureKind.CLASS please use 'buildClassSerialDescriptor' instead";
      throw IllegalArgumentException.z(toString_1(message_0));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builder(sdBuilder);
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.gh_1.j1(), toList(typeParameters), sdBuilder);
  }
  function _get__hashCode__tgwhef($this) {
    var tmp0 = $this.wj_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('_hashCode', 1, tmp, SerialDescriptorImpl$_get__hashCode_$ref_2v7wzp(), null);
    return tmp0.d2();
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return () => hashCodeImpl(this$0, this$0.vj_1);
  }
  function SerialDescriptorImpl$_get__hashCode_$ref_2v7wzp() {
    return (p0) => _get__hashCode__tgwhef(p0);
  }
  function buildSerialDescriptor$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  var ENUM_instance;
  function ENUM_getInstance() {
    if (ENUM_instance === VOID)
      new ENUM();
    return ENUM_instance;
  }
  var CONTEXTUAL_instance;
  function CONTEXTUAL_getInstance() {
    if (CONTEXTUAL_instance === VOID)
      new CONTEXTUAL();
    return CONTEXTUAL_instance;
  }
  var CLASS_instance;
  function CLASS_getInstance() {
    if (CLASS_instance === VOID)
      new CLASS();
    return CLASS_instance;
  }
  var LIST_instance;
  function LIST_getInstance() {
    if (LIST_instance === VOID)
      new LIST();
    return LIST_instance;
  }
  var MAP_instance;
  function MAP_getInstance() {
    if (MAP_instance === VOID)
      new MAP();
    return MAP_instance;
  }
  var OBJECT_instance;
  function OBJECT_getInstance() {
    if (OBJECT_instance === VOID)
      new OBJECT();
    return OBJECT_instance;
  }
  var BOOLEAN_instance;
  function BOOLEAN_getInstance() {
    if (BOOLEAN_instance === VOID)
      new BOOLEAN();
    return BOOLEAN_instance;
  }
  var INT_instance;
  function INT_getInstance() {
    if (INT_instance === VOID)
      new INT();
    return INT_instance;
  }
  var LONG_instance;
  function LONG_getInstance() {
    if (LONG_instance === VOID)
      new LONG();
    return LONG_instance;
  }
  var STRING_instance;
  function STRING_getInstance() {
    if (STRING_instance === VOID)
      new STRING();
    return STRING_instance;
  }
  var SEALED_instance;
  function SEALED_getInstance() {
    if (SEALED_instance === VOID)
      new SEALED();
    return SEALED_instance;
  }
  function decodeSequentially_0($this, compositeDecoder) {
    var klassName = compositeDecoder.mk($this.sg(), 0);
    var serializer = findPolymorphicSerializer_0($this, compositeDecoder, klassName);
    return compositeDecoder.ok($this.sg(), 1, serializer);
  }
  function throwSubtypeNotRegistered(subClass, baseClass) {
    var tmp0_elvis_lhs = subClass.ib();
    throwSubtypeNotRegistered_0(tmp0_elvis_lhs == null ? toString_1(subClass) : tmp0_elvis_lhs, baseClass);
  }
  function throwSubtypeNotRegistered_0(subClassName, baseClass) {
    var scope = "in the polymorphic scope of '" + baseClass.ib() + "'";
    throw SerializationException.yh(subClassName == null ? 'Class discriminator was missing and no default serializers were registered ' + scope + '.' : "Serializer for subclass '" + subClassName + "' is not found " + scope + '.\n' + ("Check if class with serial name '" + subClassName + "' exists and serializer is registered in a corresponding SerializersModule.\n") + ("To be registered automatically, class '" + subClassName + "' has to be '@Serializable', and the base class '" + baseClass.ib() + "' has to be sealed and '@Serializable'."));
  }
  function readSize($this, decoder, builder) {
    var size = decoder.tk($this.sg());
    $this.dm(builder, size);
    return size;
  }
  var Companion_instance_12;
  function Companion_getInstance_12() {
    if (Companion_instance_12 === VOID)
      new Companion_12();
    return Companion_instance_12;
  }
  function prepareHighMarksArray($this, elementsCount) {
    var slotsCount = (elementsCount - 1 | 0) >>> 6 | 0;
    var elementsInLastSlot = elementsCount & 63;
    var highMarks = longArray(slotsCount);
    if (!(elementsInLastSlot === 0)) {
      highMarks[get_lastIndex_1(highMarks)] = shiftLeft(new Long(-1, -1), elementsCount);
    }
    return highMarks;
  }
  function markHigh($this, index) {
    var slot = (index >>> 6 | 0) - 1 | 0;
    var offsetInSlot = index & 63;
    $this.vm_1[slot] = bitwiseOr($this.vm_1[slot], shiftLeft(new Long(1, 0), offsetInSlot));
  }
  function nextUnmarkedHighIndex($this) {
    var inductionVariable = 0;
    var last = $this.vm_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var slot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var slotOffset = imul(slot + 1 | 0, 64);
        var slotMarks = $this.vm_1[slot];
        while (!equalsLong(slotMarks, new Long(-1, -1))) {
          var indexInSlot = countTrailingZeroBits(invert(slotMarks));
          slotMarks = bitwiseOr(slotMarks, shiftLeft(new Long(1, 0), indexInSlot));
          var index = slotOffset + indexInSlot | 0;
          if ($this.tm_1($this.sm_1, index)) {
            $this.vm_1[slot] = slotMarks;
            return index;
          }
        }
        $this.vm_1[slot] = slotMarks;
      }
       while (inductionVariable <= last);
    return -1;
  }
  function createSimpleEnumSerializer(serialName, values) {
    return new EnumSerializer(serialName, values);
  }
  function createUnmarkedDescriptor($this, serialName) {
    var d = new EnumDescriptor(serialName, $this.ym_1.length);
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = $this.ym_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      d.nn(element.k2_1);
    }
    return d;
  }
  function EnumSerializer$descriptor$delegate$lambda(this$0, $serialName) {
    return () => {
      var tmp0_elvis_lhs = this$0.zm_1;
      return tmp0_elvis_lhs == null ? createUnmarkedDescriptor(this$0, $serialName) : tmp0_elvis_lhs;
    };
  }
  function EnumSerializer$_get_descriptor_$ref_j67dlw() {
    return (p0) => p0.sg();
  }
  function _get_elementDescriptors__y23q9p($this) {
    var tmp0 = $this.co_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('elementDescriptors', 1, tmp, EnumDescriptor$_get_elementDescriptors_$ref_5lvk4a(), null);
    return tmp0.d2();
  }
  function EnumDescriptor$elementDescriptors$delegate$lambda($elementsCount, $name, this$0) {
    return () => {
      var tmp = 0;
      var tmp_0 = $elementsCount;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_1 = Array(tmp_0);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        tmp_1[tmp_2] = buildSerialDescriptor($name + '.' + this$0.zi(tmp_2), OBJECT_getInstance(), []);
        tmp = tmp + 1 | 0;
      }
      return tmp_1;
    };
  }
  function EnumDescriptor$_get_elementDescriptors_$ref_5lvk4a() {
    return (p0) => _get_elementDescriptors__y23q9p(p0);
  }
  function InlinePrimitiveDescriptor(name, primitiveSerializer) {
    return new InlineClassDescriptor(name, new InlinePrimitiveDescriptor$1(primitiveSerializer));
  }
  function jsonCachedSerialNames(_this__u8e3s4) {
    return cachedSerialNames(_this__u8e3s4);
  }
  function ObjectSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return ($this$buildSerialDescriptor) => {
      $this$buildSerialDescriptor.fh_1 = this$0.zo_1;
      return Unit_instance;
    };
  }
  function ObjectSerializer$descriptor$delegate$lambda($serialName, this$0) {
    return () => {
      var tmp = OBJECT_getInstance();
      return buildSerialDescriptor($serialName, tmp, [], ObjectSerializer$descriptor$delegate$lambda$lambda(this$0));
    };
  }
  function ObjectSerializer$_get_descriptor_$ref_7z4xb6() {
    return (p0) => p0.sg();
  }
  function get_EMPTY_DESCRIPTOR_ARRAY() {
    _init_properties_Platform_common_kt__3qzecs();
    return EMPTY_DESCRIPTOR_ARRAY;
  }
  var EMPTY_DESCRIPTOR_ARRAY;
  function cachedSerialNames(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    if (isInterface(_this__u8e3s4, CachedNames))
      return _this__u8e3s4.xj();
    var result = HashSet.i1(_this__u8e3s4.xi());
    var inductionVariable = 0;
    var last = _this__u8e3s4.xi();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var element = _this__u8e3s4.zi(i);
        result.r(element);
      }
       while (inductionVariable < last);
    return result;
  }
  function compactArray(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    // Inline function 'kotlin.takeUnless' call
    var tmp;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    if (!(_this__u8e3s4 == null || _this__u8e3s4.k1())) {
      tmp = _this__u8e3s4;
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp_0 = copyToArray(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? get_EMPTY_DESCRIPTOR_ARRAY() : tmp1_elvis_lhs;
  }
  var properties_initialized_Platform_common_kt_i7q4ty;
  function _init_properties_Platform_common_kt__3qzecs() {
    if (!properties_initialized_Platform_common_kt_i7q4ty) {
      properties_initialized_Platform_common_kt_i7q4ty = true;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      EMPTY_DESCRIPTOR_ARRAY = [];
    }
  }
  function throwMissingFieldException(seen, goldenMask, descriptor) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var missingFields = ArrayList.o1();
    var missingFieldsBits = goldenMask & ~seen;
    var inductionVariable = 0;
    if (inductionVariable < 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!((missingFieldsBits & 1) === 0)) {
          // Inline function 'kotlin.collections.plusAssign' call
          var element = descriptor.zi(i);
          missingFields.r(element);
        }
        missingFieldsBits = missingFieldsBits >>> 1 | 0;
      }
       while (inductionVariable < 32);
    throw MissingFieldException.oi(missingFields, descriptor.oh());
  }
  function _get_childSerializers__7vnyfa($this) {
    var tmp0 = $this.kn_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('childSerializers', 1, tmp, PluginGeneratedSerialDescriptor$_get_childSerializers_$ref_e7suca(), null);
    return tmp0.d2();
  }
  function _get__hashCode__tgwhef_0($this) {
    var tmp0 = $this.mn_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('_hashCode', 1, tmp, PluginGeneratedSerialDescriptor$_get__hashCode_$ref_cmj4vz(), null);
    return tmp0.d2();
  }
  function buildIndices($this) {
    var indices = HashMap.j6();
    var inductionVariable = 0;
    var last = $this.fn_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var key = $this.fn_1[i];
        indices.c4(key, i);
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return () => {
      var tmp0_safe_receiver = this$0.cn_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.to();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$_get_childSerializers_$ref_e7suca() {
    return (p0) => _get_childSerializers__7vnyfa(p0);
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return () => {
      var tmp0_safe_receiver = this$0.cn_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.uo();
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination = ArrayList.d1(tmp1_safe_receiver.length);
        var inductionVariable = 0;
        var last = tmp1_safe_receiver.length;
        while (inductionVariable < last) {
          var item = tmp1_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$0 = item.sg();
          destination.r(tmp$ret$0);
        }
        tmp = destination;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_get_typeParameterDescriptors_$ref_jk3pka() {
    return (p0) => p0.do();
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return () => hashCodeImpl(this$0, this$0.do());
  }
  function PluginGeneratedSerialDescriptor$_get__hashCode_$ref_cmj4vz() {
    return (p0) => _get__hashCode__tgwhef_0(p0);
  }
  function hashCodeImpl(_this__u8e3s4, typeParams) {
    var result = getStringHashCode(_this__u8e3s4.oh());
    result = imul(31, result) + contentHashCode(typeParams) | 0;
    var elementDescriptors = get_elementDescriptors(_this__u8e3s4);
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var _iterator__ex2g4s = elementDescriptors.e1();
    while (_iterator__ex2g4s.f1()) {
      var element = _iterator__ex2g4s.g1();
      var hash = accumulator;
      var tmp = imul(31, hash);
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver = element.oh();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode_0(tmp0_safe_receiver);
      accumulator = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    }
    var namesHash = accumulator;
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator_0 = 1;
    var _iterator__ex2g4s_0 = elementDescriptors.e1();
    while (_iterator__ex2g4s_0.f1()) {
      var element_0 = _iterator__ex2g4s_0.g1();
      var hash_0 = accumulator_0;
      var tmp_0 = imul(31, hash_0);
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver_0 = element_0.vi();
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode_0(tmp0_safe_receiver_0);
      accumulator_0 = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    }
    var kindHash = accumulator_0;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function toStringImpl_0(_this__u8e3s4) {
    var tmp = until(0, _this__u8e3s4.xi());
    var tmp_0 = _this__u8e3s4.oh() + '(';
    return joinToString_0(tmp, ', ', tmp_0, ')', VOID, VOID, toStringImpl$lambda(_this__u8e3s4));
  }
  function toStringImpl$lambda($this_toStringImpl) {
    return (i) => $this_toStringImpl.zi(i) + ': ' + $this_toStringImpl.cj(i).oh();
  }
  function get_EMPTY_SERIALIZER_ARRAY() {
    _init_properties_PluginHelperInterfaces_kt__xgvzfp();
    return EMPTY_SERIALIZER_ARRAY;
  }
  var EMPTY_SERIALIZER_ARRAY;
  var properties_initialized_PluginHelperInterfaces_kt_ap8in1;
  function _init_properties_PluginHelperInterfaces_kt__xgvzfp() {
    if (!properties_initialized_PluginHelperInterfaces_kt_ap8in1) {
      properties_initialized_PluginHelperInterfaces_kt_ap8in1 = true;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      EMPTY_SERIALIZER_ARRAY = [];
    }
  }
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance === VOID)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function error($this) {
    throw IllegalStateException.c3('Primitive descriptor ' + $this.fp_1 + ' does not have elements');
  }
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance === VOID)
      new IntSerializer();
    return IntSerializer_instance;
  }
  var LongSerializer_instance;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance === VOID)
      new LongSerializer();
    return LongSerializer_instance;
  }
  var BooleanSerializer_instance;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance === VOID)
      new BooleanSerializer();
    return BooleanSerializer_instance;
  }
  function tagBlock($this, tag, block) {
    $this.eq(tag);
    var r = block();
    if (!$this.tp_1) {
      $this.fq();
    }
    $this.tp_1 = false;
    return r;
  }
  function TaggedDecoder$decodeSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return () => this$0.gk($deserializer, $previousValue);
  }
  function TaggedDecoder$decodeNullableSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return () => {
      var tmp0 = this$0;
      // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
      var isNullabilitySupported = $deserializer.sg().pi();
      var tmp;
      if (isNullabilitySupported || tmp0.zj()) {
        tmp = this$0.gk($deserializer, $previousValue);
      } else {
        tmp = tmp0.ak();
      }
      return tmp;
    };
  }
  function get_EmptySerializersModuleLegacyJs() {
    _init_properties_SerializersModule_kt__u78ha3();
    return EmptySerializersModule;
  }
  var EmptySerializersModule;
  var properties_initialized_SerializersModule_kt_fjigjn;
  function _init_properties_SerializersModule_kt__u78ha3() {
    if (!properties_initialized_SerializersModule_kt_fjigjn) {
      properties_initialized_SerializersModule_kt_fjigjn = true;
      EmptySerializersModule = new SerialModuleImpl(emptyMap(), emptyMap(), emptyMap(), emptyMap(), emptyMap(), false);
    }
  }
  function EmptySerializersModule_0() {
    return get_EmptySerializersModuleLegacyJs();
  }
  function SerializersModuleCollector$contextual$lambda($serializer) {
    return (it) => $serializer;
  }
  function getChecked(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException.w1('Index ' + index + ' out of bounds ' + get_indices(_this__u8e3s4).toString());
    return _this__u8e3s4[index];
  }
  function getChecked_0(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException.w1('Index ' + index + ' out of bounds ' + get_indices_0(_this__u8e3s4).toString());
    return _this__u8e3s4[index];
  }
  var Default_instance_0;
  function Default_getInstance_0() {
    if (Default_instance_0 === VOID)
      new Default_0();
    return Default_instance_0;
  }
  function Json_0(from, builderAction) {
    from = from === VOID ? Default_getInstance_0() : from;
    var builder = new JsonBuilder(from);
    builderAction(builder);
    var conf = builder.is();
    return new JsonImpl(conf, builder.hs_1);
  }
  function validateConfiguration($this) {
    if (equals($this.qk(), EmptySerializersModule_0()))
      return Unit_instance;
    var collector = new JsonSerializersModuleValidator($this.wq_1);
    $this.qk().hq(collector);
  }
  var ClassDiscriminatorMode_NONE_instance;
  var ClassDiscriminatorMode_ALL_JSON_OBJECTS_instance;
  var ClassDiscriminatorMode_POLYMORPHIC_instance;
  var ClassDiscriminatorMode_entriesInitialized;
  function ClassDiscriminatorMode_initEntries() {
    if (ClassDiscriminatorMode_entriesInitialized)
      return Unit_instance;
    ClassDiscriminatorMode_entriesInitialized = true;
    ClassDiscriminatorMode_NONE_instance = new ClassDiscriminatorMode('NONE', 0);
    ClassDiscriminatorMode_ALL_JSON_OBJECTS_instance = new ClassDiscriminatorMode('ALL_JSON_OBJECTS', 1);
    ClassDiscriminatorMode_POLYMORPHIC_instance = new ClassDiscriminatorMode('POLYMORPHIC', 2);
  }
  function ClassDiscriminatorMode_NONE_getInstance() {
    ClassDiscriminatorMode_initEntries();
    return ClassDiscriminatorMode_NONE_instance;
  }
  function ClassDiscriminatorMode_POLYMORPHIC_getInstance() {
    ClassDiscriminatorMode_initEntries();
    return ClassDiscriminatorMode_POLYMORPHIC_instance;
  }
  var jsonUnquotedLiteralDescriptor;
  var Companion_instance_13;
  function Companion_getInstance_13() {
    return Companion_instance_13;
  }
  var Companion_instance_14;
  function Companion_getInstance_14() {
    return Companion_instance_14;
  }
  function JsonObject$toString$lambda(_destruct__k2r9zo) {
    // Inline function 'kotlin.collections.component1' call
    var k = _destruct__k2r9zo.c2();
    // Inline function 'kotlin.collections.component2' call
    var v = _destruct__k2r9zo.d2();
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder.b1();
    printQuoted(this_0, k);
    this_0.q9(_Char___init__impl__6a9atx(58));
    this_0.o9(v);
    return this_0.toString();
  }
  var Companion_instance_15;
  function Companion_getInstance_15() {
    return Companion_instance_15;
  }
  var Companion_instance_16;
  function Companion_getInstance_16() {
    return Companion_instance_16;
  }
  function JsonPrimitive_0(value) {
    _init_properties_JsonElement_kt__7cbdc2();
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, true);
  }
  function JsonPrimitive_1(value) {
    _init_properties_JsonElement_kt__7cbdc2();
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, false);
  }
  function JsonPrimitive_2(value) {
    _init_properties_JsonElement_kt__7cbdc2();
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, false);
  }
  var JsonNull_instance;
  function JsonNull_getInstance() {
    if (JsonNull_instance === VOID)
      new JsonNull();
    return JsonNull_instance;
  }
  function get_booleanOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toBooleanStrictOrNull(_this__u8e3s4.gt());
  }
  function parseLongImpl(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return (new StringJsonLexer(_this__u8e3s4.gt())).lt();
  }
  function get_contentOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp;
    if (_this__u8e3s4 instanceof JsonNull) {
      tmp = null;
    } else {
      tmp = _this__u8e3s4.gt();
    }
    return tmp;
  }
  function get_jsonPrimitive(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonPrimitive ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      error_0(_this__u8e3s4, 'JsonPrimitive');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function error_0(_this__u8e3s4, element) {
    _init_properties_JsonElement_kt__7cbdc2();
    throw IllegalArgumentException.z('Element ' + toString_1(getKClassFromExpression(_this__u8e3s4)) + ' is not a ' + element);
  }
  var properties_initialized_JsonElement_kt_abxy8s;
  function _init_properties_JsonElement_kt__7cbdc2() {
    if (!properties_initialized_JsonElement_kt_abxy8s) {
      properties_initialized_JsonElement_kt_abxy8s = true;
      jsonUnquotedLiteralDescriptor = InlinePrimitiveDescriptor('kotlinx.serialization.json.JsonUnquotedLiteral', serializer(StringCompanionObject_instance));
    }
  }
  function put(_this__u8e3s4, key, value) {
    return _this__u8e3s4.nt(key, JsonPrimitive_0(value));
  }
  function put_0(_this__u8e3s4, key, value) {
    return _this__u8e3s4.nt(key, JsonPrimitive_1(value));
  }
  function put_1(_this__u8e3s4, key, value) {
    return _this__u8e3s4.nt(key, JsonPrimitive_2(value));
  }
  function Composer_0(sb, json) {
    return json.wq_1.ns_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
  }
  function readIfAbsent($this, descriptor, index) {
    $this.ku_1 = (!descriptor.dj(index) && descriptor.cj(index).pi());
    return $this.ku_1;
  }
  function JsonElementMarker$readIfAbsent$ref(p0) {
    var l = (_this__u8e3s4, p0_0) => {
      var tmp0 = p0;
      return readIfAbsent(tmp0, _this__u8e3s4, p0_0);
    };
    l.callableName = 'readIfAbsent';
    return l;
  }
  function invalidTrailingComma(_this__u8e3s4, entity) {
    entity = entity === VOID ? 'object' : entity;
    _this__u8e3s4.nu('Trailing comma before the end of JSON ' + entity, _this__u8e3s4.lr_1 - 1 | 0, "Trailing commas are non-complaint JSON and not allowed by default. Use 'allowTrailingComma = true' in 'Json {}' builder to support them.");
  }
  function InvalidKeyKindException(keyDescriptor) {
    return JsonEncodingException.uu("Value of type '" + keyDescriptor.oh() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.vi().toString() + "'.\n") + "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.");
  }
  function JsonDecodingException_0(offset, message, input) {
    return JsonDecodingException_1(offset, message + '\nJSON input: ' + toString_1(minify(input, offset)));
  }
  function JsonDecodingException_1(offset, message) {
    return JsonDecodingException.hv(offset >= 0 ? 'Unexpected JSON token at offset ' + offset + ': ' + message : message);
  }
  function minify(_this__u8e3s4, offset) {
    offset = offset === VOID ? -1 : offset;
    if (charSequenceLength(_this__u8e3s4) < 200)
      return _this__u8e3s4;
    if (offset === -1) {
      var start = charSequenceLength(_this__u8e3s4) - 60 | 0;
      if (start <= 0)
        return _this__u8e3s4;
      // Inline function 'kotlin.text.substring' call
      var endIndex = charSequenceLength(_this__u8e3s4);
      return '.....' + toString_1(charSequenceSubSequence(_this__u8e3s4, start, endIndex));
    }
    var start_0 = offset - 30 | 0;
    var end = offset + 30 | 0;
    var prefix = start_0 <= 0 ? '' : '.....';
    var suffix = end >= charSequenceLength(_this__u8e3s4) ? '' : '.....';
    var tmp2 = coerceAtLeast(start_0, 0);
    // Inline function 'kotlin.text.substring' call
    var endIndex_0 = coerceAtMost(end, charSequenceLength(_this__u8e3s4));
    return prefix + toString_1(charSequenceSubSequence(_this__u8e3s4, tmp2, endIndex_0)) + suffix;
  }
  function get_JsonDeserializationNamesKey() {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return JsonDeserializationNamesKey;
  }
  var JsonDeserializationNamesKey;
  function get_JsonSerializationNamesKey() {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return JsonSerializationNamesKey;
  }
  var JsonSerializationNamesKey;
  function ignoreUnknownKeys(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp;
    if (json.wq_1.ks_1) {
      tmp = true;
    } else {
      var tmp0 = _this__u8e3s4.yi();
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.any' call
        var tmp_0;
        if (isInterface(tmp0, Collection)) {
          tmp_0 = tmp0.k1();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
        var _iterator__ex2g4s = tmp0.e1();
        while (_iterator__ex2g4s.f1()) {
          var element = _iterator__ex2g4s.g1();
          if (element instanceof JsonIgnoreUnknownKeys) {
            tmp$ret$0 = true;
            break $l$block_0;
          }
        }
        tmp$ret$0 = false;
      }
      tmp = tmp$ret$0;
    }
    return tmp;
  }
  function getJsonNameIndex(_this__u8e3s4, json, name) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    if (decodeCaseInsensitive(json, _this__u8e3s4)) {
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = name.toLowerCase();
      return getJsonNameIndexSlowPath(_this__u8e3s4, json, tmp$ret$1);
    }
    var strategy = namingStrategy(_this__u8e3s4, json);
    if (!(strategy == null))
      return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
    var index = _this__u8e3s4.aj(name);
    if (!(index === -3))
      return index;
    if (!json.wq_1.us_1)
      return index;
    return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
  }
  function getJsonNameIndexOrThrow(_this__u8e3s4, json, name, suffix) {
    suffix = suffix === VOID ? '' : suffix;
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var index = getJsonNameIndex(_this__u8e3s4, json, name);
    if (index === -3)
      throw SerializationException.yh(_this__u8e3s4.oh() + " does not contain element with name '" + name + "'" + suffix);
    return index;
  }
  function getJsonElementName(_this__u8e3s4, json, index) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var strategy = namingStrategy(_this__u8e3s4, json);
    return strategy == null ? _this__u8e3s4.zi(index) : serializationNamesIndices(_this__u8e3s4, json, strategy)[index];
  }
  function namingStrategy(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return equals(_this__u8e3s4.vi(), CLASS_getInstance()) ? json.wq_1.vs_1 : null;
  }
  function deserializationNamesMap(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(_this__u8e3s4);
    var tmp_0 = get_JsonDeserializationNamesKey();
    return tmp.jv(descriptor, tmp_0, deserializationNamesMap$lambda(descriptor, _this__u8e3s4));
  }
  function decodeCaseInsensitive(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return _this__u8e3s4.wq_1.ws_1 && equals(descriptor.vi(), ENUM_getInstance());
  }
  function getJsonNameIndexSlowPath(_this__u8e3s4, json, name) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp0_elvis_lhs = deserializationNamesMap(json, _this__u8e3s4).g2(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  }
  function serializationNamesIndices(_this__u8e3s4, json, strategy) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(json);
    var tmp_0 = get_JsonSerializationNamesKey();
    return tmp.jv(_this__u8e3s4, tmp_0, serializationNamesIndices$lambda(_this__u8e3s4, strategy));
  }
  function buildDeserializationNamesMap(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var builder = LinkedHashMap.z3();
    var useLowercaseEnums = decodeCaseInsensitive(json, _this__u8e3s4);
    var strategyForClasses = namingStrategy(_this__u8e3s4, json);
    var inductionVariable = 0;
    var last = _this__u8e3s4.xi();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.filterIsInstance' call
        var tmp0 = _this__u8e3s4.bj(i);
        // Inline function 'kotlin.collections.filterIsInstanceTo' call
        var destination = ArrayList.o1();
        var _iterator__ex2g4s = tmp0.e1();
        while (_iterator__ex2g4s.f1()) {
          var element = _iterator__ex2g4s.g1();
          if (element instanceof JsonNames) {
            destination.r(element);
          }
        }
        var tmp0_safe_receiver = singleOrNull(destination);
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kv_1;
        if (tmp1_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.collections.forEach' call
          var inductionVariable_0 = 0;
          var last_0 = tmp1_safe_receiver.length;
          while (inductionVariable_0 < last_0) {
            var element_0 = tmp1_safe_receiver[inductionVariable_0];
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var tmp;
            if (useLowercaseEnums) {
              // Inline function 'kotlin.text.lowercase' call
              // Inline function 'kotlin.js.asDynamic' call
              tmp = element_0.toLowerCase();
            } else {
              tmp = element_0;
            }
            buildDeserializationNamesMap$putOrThrow(builder, _this__u8e3s4, tmp, i);
          }
        }
        var tmp_0;
        if (useLowercaseEnums) {
          // Inline function 'kotlin.text.lowercase' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp_0 = _this__u8e3s4.zi(i).toLowerCase();
        } else if (!(strategyForClasses == null)) {
          tmp_0 = strategyForClasses.lv(_this__u8e3s4, i, _this__u8e3s4.zi(i));
        } else {
          tmp_0 = null;
        }
        var nameToPut = tmp_0;
        if (nameToPut == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          buildDeserializationNamesMap$putOrThrow(builder, _this__u8e3s4, nameToPut, i);
        }
      }
       while (inductionVariable < last);
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp_1;
    if (builder.k1()) {
      tmp_1 = emptyMap();
    } else {
      tmp_1 = builder;
    }
    return tmp_1;
  }
  function buildDeserializationNamesMap$putOrThrow(_this__u8e3s4, $this_buildDeserializationNamesMap, name, index) {
    var entity = equals($this_buildDeserializationNamesMap.vi(), ENUM_getInstance()) ? 'enum value' : 'property';
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    if ((isInterface(_this__u8e3s4, KtMap) ? _this__u8e3s4 : THROW_CCE()).e2(name)) {
      throw JsonException.av("The suggested name '" + name + "' for " + entity + ' ' + $this_buildDeserializationNamesMap.zi(index) + ' is already one of the names for ' + entity + ' ' + ($this_buildDeserializationNamesMap.zi(getValue(_this__u8e3s4, name)) + ' in ' + toString_1($this_buildDeserializationNamesMap)));
    }
    // Inline function 'kotlin.collections.set' call
    _this__u8e3s4.c4(name, index);
  }
  function deserializationNamesMap$lambda($descriptor, $this_deserializationNamesMap) {
    return () => buildDeserializationNamesMap($descriptor, $this_deserializationNamesMap);
  }
  function serializationNamesIndices$lambda($this_serializationNamesIndices, $strategy) {
    return () => {
      var tmp = 0;
      var tmp_0 = $this_serializationNamesIndices.xi();
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_1 = Array(tmp_0);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        var baseName = $this_serializationNamesIndices.zi(tmp_2);
        tmp_1[tmp_2] = $strategy.lv($this_serializationNamesIndices, tmp_2, baseName);
        tmp = tmp + 1 | 0;
      }
      return tmp_1;
    };
  }
  var properties_initialized_JsonNamesMap_kt_ljpf42;
  function _init_properties_JsonNamesMap_kt__cbbp0k() {
    if (!properties_initialized_JsonNamesMap_kt_ljpf42) {
      properties_initialized_JsonNamesMap_kt_ljpf42 = true;
      JsonDeserializationNamesKey = new Key_0();
      JsonSerializationNamesKey = new Key_0();
    }
  }
  var Tombstone_instance;
  function Tombstone_getInstance() {
    return Tombstone_instance;
  }
  function resize($this) {
    var newSize = imul($this.ov_1, 2);
    $this.mv_1 = copyOf_0($this.mv_1, newSize);
    var tmp = 0;
    var tmp_0 = new Int32Array(newSize);
    while (tmp < newSize) {
      tmp_0[tmp] = -1;
      tmp = tmp + 1 | 0;
    }
    var newIndices = tmp_0;
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = $this.nv_1;
    var endIndex = this_0.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = this_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_1, newIndices, 0, 0, endIndex);
    $this.nv_1 = newIndices;
  }
  function checkKind($this, descriptor, actualClass) {
    var kind = descriptor.vi();
    var tmp;
    if (kind instanceof PolymorphicKind) {
      tmp = true;
    } else {
      tmp = equals(kind, CONTEXTUAL_getInstance());
    }
    if (tmp) {
      throw IllegalArgumentException.z('Serializer for ' + actualClass.ib() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind.toString() + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
    }
    if ($this.wv_1)
      return Unit_instance;
    if (!$this.xv_1)
      return Unit_instance;
    var tmp_0;
    var tmp_1;
    if (equals(kind, LIST_getInstance()) || equals(kind, MAP_getInstance())) {
      tmp_1 = true;
    } else {
      tmp_1 = kind instanceof PrimitiveKind;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = kind instanceof ENUM;
    }
    if (tmp_0) {
      throw IllegalArgumentException.z('Serializer for ' + actualClass.ib() + ' of kind ' + kind.toString() + ' cannot be serialized polymorphically with class discriminator.');
    }
  }
  function checkDiscriminatorCollisions($this, descriptor, actualClass) {
    var inductionVariable = 0;
    var last = descriptor.xi();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var name = descriptor.zi(i);
        if (name === $this.vv_1) {
          throw IllegalArgumentException.z('Polymorphic serializer for ' + toString_1(actualClass) + " has property '" + name + "' that conflicts " + 'with JSON class discriminator. You can either change class discriminator in JsonConfiguration, rename property with @SerialName annotation or fall back to array polymorphism');
        }
      }
       while (inductionVariable < last);
  }
  function encodeByWriter(json, writer, serializer, value) {
    var tmp = WriteMode_OBJ_getInstance();
    // Inline function 'kotlin.arrayOfNulls' call
    var size = get_entries().j1();
    var tmp$ret$0 = Array(size);
    var encoder = StreamingJsonEncoder.hw(writer, json, tmp, tmp$ret$0);
    encoder.hl(serializer, value);
  }
  function *_generator_invoke__zhh2q8($this, $this$DeepRecursiveFunction, it, $completion) {
    var tmp0_subject = $this.mw_1.iw_1.nw();
    var tmp;
    if (tmp0_subject === 1) {
      tmp = readValue($this.mw_1, true);
    } else if (tmp0_subject === 0) {
      tmp = readValue($this.mw_1, false);
    } else if (tmp0_subject === 6) {
      var tmp_0 = readObject_0($this.mw_1, $this$DeepRecursiveFunction, $completion);
      if (tmp_0 === get_COROUTINE_SUSPENDED())
        tmp_0 = yield tmp_0;
      tmp = tmp_0;
    } else if (tmp0_subject === 8) {
      tmp = readArray($this.mw_1);
    } else {
      $this.mw_1.iw_1.ow("Can't begin reading element, unexpected token");
    }
    return tmp;
  }
  function readObject($this) {
    // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
    var lastToken = $this.iw_1.pw(6);
    if ($this.iw_1.nw() === 4) {
      $this.iw_1.ow('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.linkedMapOf' call
    var result = LinkedHashMap.z3();
    $l$loop: while ($this.iw_1.qw()) {
      var key = $this.jw_1 ? $this.iw_1.sw() : $this.iw_1.rw();
      $this.iw_1.pw(5);
      var element = $this.tw();
      // Inline function 'kotlin.collections.set' call
      result.c4(key, element);
      lastToken = $this.iw_1.uw();
      var tmp0_subject = lastToken;
      if (tmp0_subject !== 4)
        if (tmp0_subject === 7)
          break $l$loop;
        else {
          $this.iw_1.ow('Expected end of the object or comma');
        }
    }
    if (lastToken === 6) {
      $this.iw_1.pw(7);
    } else if (lastToken === 4) {
      if (!$this.kw_1) {
        invalidTrailingComma($this.iw_1);
      }
      $this.iw_1.pw(7);
    }
    return new JsonObject(result);
  }
  function *_generator_readObject__361wel($this, _this__u8e3s4, $completion) {
    // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
    var lastToken = $this.iw_1.pw(6);
    if ($this.iw_1.nw() === 4) {
      $this.iw_1.ow('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.linkedMapOf' call
    var result = LinkedHashMap.z3();
    $l$loop: while ($this.iw_1.qw()) {
      var key = $this.jw_1 ? $this.iw_1.sw() : $this.iw_1.rw();
      $this.iw_1.pw(5);
      var tmp = _this__u8e3s4.bg(Unit_instance, $completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var element = tmp;
      // Inline function 'kotlin.collections.set' call
      result.c4(key, element);
      lastToken = $this.iw_1.uw();
      var tmp0_subject = lastToken;
      if (tmp0_subject !== 4)
        if (tmp0_subject === 7)
          break $l$loop;
        else {
          $this.iw_1.ow('Expected end of the object or comma');
        }
    }
    if (lastToken === 6) {
      $this.iw_1.pw(7);
    } else if (lastToken === 4) {
      if (!$this.kw_1) {
        invalidTrailingComma($this.iw_1);
      }
      $this.iw_1.pw(7);
    }
    return new JsonObject(result);
  }
  function readObject_0($this, _this__u8e3s4, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_readObject__361wel.bind(VOID, $this, _this__u8e3s4), $completion);
  }
  function readArray($this) {
    var lastToken = $this.iw_1.uw();
    if ($this.iw_1.nw() === 4) {
      $this.iw_1.ow('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.arrayListOf' call
    var result = ArrayList.o1();
    while ($this.iw_1.qw()) {
      var element = $this.tw();
      result.r(element);
      lastToken = $this.iw_1.uw();
      if (!(lastToken === 4)) {
        var tmp0 = $this.iw_1;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var condition = lastToken === 9;
        var position = tmp0.lr_1;
        if (!condition) {
          var tmp$ret$1 = 'Expected end of the array or comma';
          tmp0.ow(tmp$ret$1, position);
        }
      }
    }
    if (lastToken === 8) {
      $this.iw_1.pw(9);
    } else if (lastToken === 4) {
      if (!$this.kw_1) {
        invalidTrailingComma($this.iw_1, 'array');
      }
      $this.iw_1.pw(9);
    }
    return new JsonArray(result);
  }
  function readValue($this, isString) {
    var tmp;
    if ($this.jw_1 || !isString) {
      tmp = $this.iw_1.sw();
    } else {
      tmp = $this.iw_1.rw();
    }
    var string = tmp;
    if (!isString && string === 'null')
      return JsonNull_getInstance();
    return new JsonLiteral(string, isString);
  }
  function readDeepRecursive($this) {
    return invoke(new DeepRecursiveFunction(JsonTreeReader$readDeepRecursive$slambda_0($this)), Unit_instance);
  }
  function JsonTreeReader$readDeepRecursive$slambda_0(this$0) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this$0);
    var l = ($this$DeepRecursiveFunction, it, $completion) => i.vw($this$DeepRecursiveFunction, it, $completion);
    l.$arity = 2;
    return l;
  }
  function classDiscriminator(_this__u8e3s4, json) {
    var _iterator__ex2g4s = _this__u8e3s4.yi().e1();
    while (_iterator__ex2g4s.f1()) {
      var annotation = _iterator__ex2g4s.g1();
      if (annotation instanceof JsonClassDiscriminator)
        return annotation.ww_1;
    }
    return json.wq_1.ss_1;
  }
  function validateIfSealed(serializer, actualSerializer, classDiscriminator) {
    if (!(serializer instanceof SealedClassSerializer))
      return Unit_instance;
    if (jsonCachedSerialNames(actualSerializer.sg()).p1(classDiscriminator)) {
      var baseName = serializer.sg().oh();
      var actualName = actualSerializer.sg().oh();
      // Inline function 'kotlin.error' call
      var message = "Sealed class '" + actualName + "' cannot be serialized as base class '" + baseName + "' because" + (" it has property name that conflicts with JSON class discriminator '" + classDiscriminator + "'. ") + 'You can either change class discriminator in JsonConfiguration, rename property with @SerialName annotation or fall back to array polymorphism';
      throw IllegalStateException.c3(toString_1(message));
    }
  }
  function checkKind_0(kind) {
    if (kind instanceof ENUM) {
      // Inline function 'kotlin.error' call
      var message = "Enums cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";
      throw IllegalStateException.c3(toString_1(message));
    }
    if (kind instanceof PrimitiveKind) {
      // Inline function 'kotlin.error' call
      var message_0 = "Primitives cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";
      throw IllegalStateException.c3(toString_1(message_0));
    }
    if (kind instanceof PolymorphicKind) {
      // Inline function 'kotlin.error' call
      var message_1 = 'Actual serializer for polymorphic cannot be polymorphic itself';
      throw IllegalStateException.c3(toString_1(message_1));
    }
  }
  function access$validateIfSealed$tPolymorphicKt(serializer, actualSerializer, classDiscriminator) {
    return validateIfSealed(serializer, actualSerializer, classDiscriminator);
  }
  function trySkip($this, _this__u8e3s4, unknownKey) {
    if (_this__u8e3s4 == null)
      return false;
    if (_this__u8e3s4.zw_1 === unknownKey) {
      _this__u8e3s4.zw_1 = null;
      return true;
    }
    return false;
  }
  function skipLeftoverElements($this, descriptor) {
    while (!($this.sk(descriptor) === -1)) {
    }
  }
  function checkLeadingComma($this) {
    if ($this.fr_1.nw() === 4) {
      $this.fr_1.ow('Unexpected leading comma');
    }
  }
  function decodeMapIndex($this) {
    var hasComma = false;
    var decodingKey = !(($this.hr_1 % 2 | 0) === 0);
    if (decodingKey) {
      if (!($this.hr_1 === -1)) {
        hasComma = $this.fr_1.bx();
      }
    } else {
      $this.fr_1.ax(_Char___init__impl__6a9atx(58));
    }
    var tmp;
    if ($this.fr_1.qw()) {
      if (decodingKey) {
        if ($this.hr_1 === -1) {
          var tmp0 = $this.fr_1;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var condition = !hasComma;
          var position = tmp0.lr_1;
          if (!condition) {
            var tmp$ret$0 = 'Unexpected leading comma';
            tmp0.ow(tmp$ret$0, position);
          }
        } else {
          var tmp0_0 = $this.fr_1;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var condition_0 = hasComma;
          var position_0 = tmp0_0.lr_1;
          if (!condition_0) {
            var tmp$ret$2 = 'Expected comma after the key-value pair';
            tmp0_0.ow(tmp$ret$2, position_0);
          }
        }
      }
      $this.hr_1 = $this.hr_1 + 1 | 0;
      tmp = $this.hr_1;
    } else {
      if (hasComma && !$this.dr_1.wq_1.xs_1) {
        invalidTrailingComma($this.fr_1);
      }
      tmp = -1;
    }
    return tmp;
  }
  function coerceInputValue($this, descriptor, index) {
    var tmp0 = $this.dr_1;
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var isOptional = descriptor.dj(index);
      var elementDescriptor = descriptor.cj(index);
      var tmp;
      if (isOptional && !elementDescriptor.pi()) {
        tmp = $this.fr_1.cx(true);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_2;
      }
      if (equals(elementDescriptor.vi(), ENUM_getInstance())) {
        var tmp_0;
        if (elementDescriptor.pi()) {
          tmp_0 = $this.fr_1.cx(false);
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$1 = false;
          break $l$block_2;
        }
        var tmp0_elvis_lhs = $this.fr_1.dx($this.jr_1.ls_1);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$1 = false;
          break $l$block_2;
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_1;
        var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
        var coerceToNull = !tmp0.wq_1.os_1 && elementDescriptor.pi();
        if (enumIndex === -3 && (isOptional || coerceToNull)) {
          $this.fr_1.rw();
          tmp$ret$1 = true;
          break $l$block_2;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function decodeObjectIndex($this, descriptor) {
    var hasComma = $this.fr_1.bx();
    while ($this.fr_1.qw()) {
      hasComma = false;
      var key = decodeStringKey($this);
      $this.fr_1.ax(_Char___init__impl__6a9atx(58));
      var index = getJsonNameIndex(descriptor, $this.dr_1, key);
      var tmp;
      if (!(index === -3)) {
        var tmp_0;
        if ($this.jr_1.qs_1 && coerceInputValue($this, descriptor, index)) {
          hasComma = $this.fr_1.bx();
          tmp_0 = false;
        } else {
          var tmp0_safe_receiver = $this.kr_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.lu(index);
          }
          return index;
        }
        tmp = tmp_0;
      } else {
        tmp = true;
      }
      var isUnknown = tmp;
      if (isUnknown) {
        hasComma = handleUnknown($this, descriptor, key);
      }
    }
    if (hasComma && !$this.dr_1.wq_1.xs_1) {
      invalidTrailingComma($this.fr_1);
    }
    var tmp1_safe_receiver = $this.kr_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.mu();
    return tmp2_elvis_lhs == null ? -1 : tmp2_elvis_lhs;
  }
  function handleUnknown($this, descriptor, key) {
    if (ignoreUnknownKeys(descriptor, $this.dr_1) || trySkip($this, $this.ir_1, key)) {
      $this.fr_1.fx($this.jr_1.ls_1);
    } else {
      $this.fr_1.mr_1.tv();
      $this.fr_1.ex(key);
    }
    return $this.fr_1.bx();
  }
  function decodeListIndex($this) {
    var hasComma = $this.fr_1.bx();
    var tmp;
    if ($this.fr_1.qw()) {
      if (!($this.hr_1 === -1) && !hasComma) {
        $this.fr_1.ow('Expected end of the array or comma');
      }
      $this.hr_1 = $this.hr_1 + 1 | 0;
      tmp = $this.hr_1;
    } else {
      if (hasComma && !$this.dr_1.wq_1.xs_1) {
        invalidTrailingComma($this.fr_1, 'array');
      }
      tmp = -1;
    }
    return tmp;
  }
  function decodeStringKey($this) {
    var tmp;
    if ($this.jr_1.ls_1) {
      tmp = $this.fr_1.hx();
    } else {
      tmp = $this.fr_1.gx();
    }
    return tmp;
  }
  function encodeTypeInfo($this, discriminator, serialName) {
    $this.yv_1.st();
    $this.bl(discriminator);
    $this.yv_1.vt(_Char___init__impl__6a9atx(58));
    $this.yv_1.ut();
    $this.bl(serialName);
  }
  function get_ESCAPE_STRINGS() {
    _init_properties_StringOps_kt__fcy1db();
    return ESCAPE_STRINGS;
  }
  var ESCAPE_STRINGS;
  var ESCAPE_MARKERS;
  function toHexChar(i) {
    _init_properties_StringOps_kt__fcy1db();
    var d = i & 15;
    var tmp;
    if (d < 10) {
      // Inline function 'kotlin.code' call
      var this_0 = _Char___init__impl__6a9atx(48);
      var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
      tmp = numberToChar(d + tmp$ret$0 | 0);
    } else {
      var tmp_0 = d - 10 | 0;
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(97);
      var tmp$ret$1 = Char__toInt_impl_vasixd(this_1);
      tmp = numberToChar(tmp_0 + tmp$ret$1 | 0);
    }
    return tmp;
  }
  function printQuoted(_this__u8e3s4, value) {
    _init_properties_StringOps_kt__fcy1db();
    _this__u8e3s4.q9(_Char___init__impl__6a9atx(34));
    var lastPos = 0;
    var inductionVariable = 0;
    var last = charSequenceLength(value) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.code' call
        var this_0 = charCodeAt(value, i);
        var c = Char__toInt_impl_vasixd(this_0);
        if (c < get_ESCAPE_STRINGS().length && !(get_ESCAPE_STRINGS()[c] == null)) {
          _this__u8e3s4.nc(value, lastPos, i);
          _this__u8e3s4.p9(get_ESCAPE_STRINGS()[c]);
          lastPos = i + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    if (!(lastPos === 0))
      _this__u8e3s4.nc(value, lastPos, value.length);
    else
      _this__u8e3s4.p9(value);
    _this__u8e3s4.q9(_Char___init__impl__6a9atx(34));
  }
  function toBooleanStrictOrNull(_this__u8e3s4) {
    _init_properties_StringOps_kt__fcy1db();
    return equals_0(_this__u8e3s4, 'true', true) ? true : equals_0(_this__u8e3s4, 'false', true) ? false : null;
  }
  var properties_initialized_StringOps_kt_wzaea7;
  function _init_properties_StringOps_kt__fcy1db() {
    if (!properties_initialized_StringOps_kt_wzaea7) {
      properties_initialized_StringOps_kt_wzaea7 = true;
      // Inline function 'kotlin.arrayOfNulls' call
      // Inline function 'kotlin.apply' call
      var this_0 = Array(93);
      var inductionVariable = 0;
      if (inductionVariable <= 31)
        do {
          var c = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var c1 = toHexChar(c >> 12);
          var c2 = toHexChar(c >> 8);
          var c3 = toHexChar(c >> 4);
          var c4 = toHexChar(c);
          this_0[c] = '\\u' + toString(c1) + toString(c2) + toString(c3) + toString(c4);
        }
         while (inductionVariable <= 31);
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(34);
      this_0[Char__toInt_impl_vasixd(this_1)] = '\\"';
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(92);
      this_0[Char__toInt_impl_vasixd(this_2)] = '\\\\';
      // Inline function 'kotlin.code' call
      var this_3 = _Char___init__impl__6a9atx(9);
      this_0[Char__toInt_impl_vasixd(this_3)] = '\\t';
      // Inline function 'kotlin.code' call
      var this_4 = _Char___init__impl__6a9atx(8);
      this_0[Char__toInt_impl_vasixd(this_4)] = '\\b';
      // Inline function 'kotlin.code' call
      var this_5 = _Char___init__impl__6a9atx(10);
      this_0[Char__toInt_impl_vasixd(this_5)] = '\\n';
      // Inline function 'kotlin.code' call
      var this_6 = _Char___init__impl__6a9atx(13);
      this_0[Char__toInt_impl_vasixd(this_6)] = '\\r';
      this_0[12] = '\\f';
      ESCAPE_STRINGS = this_0;
      // Inline function 'kotlin.apply' call
      var this_7 = new Int8Array(93);
      var inductionVariable_0 = 0;
      if (inductionVariable_0 <= 31)
        do {
          var c_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          this_7[c_0] = 1;
        }
         while (inductionVariable_0 <= 31);
      // Inline function 'kotlin.code' call
      var this_8 = _Char___init__impl__6a9atx(34);
      var tmp = Char__toInt_impl_vasixd(this_8);
      // Inline function 'kotlin.code' call
      var this_9 = _Char___init__impl__6a9atx(34);
      var tmp$ret$1 = Char__toInt_impl_vasixd(this_9);
      this_7[tmp] = toByte(tmp$ret$1);
      // Inline function 'kotlin.code' call
      var this_10 = _Char___init__impl__6a9atx(92);
      var tmp_0 = Char__toInt_impl_vasixd(this_10);
      // Inline function 'kotlin.code' call
      var this_11 = _Char___init__impl__6a9atx(92);
      var tmp$ret$3 = Char__toInt_impl_vasixd(this_11);
      this_7[tmp_0] = toByte(tmp$ret$3);
      // Inline function 'kotlin.code' call
      var this_12 = _Char___init__impl__6a9atx(9);
      var tmp_1 = Char__toInt_impl_vasixd(this_12);
      // Inline function 'kotlin.code' call
      var this_13 = _Char___init__impl__6a9atx(116);
      var tmp$ret$5 = Char__toInt_impl_vasixd(this_13);
      this_7[tmp_1] = toByte(tmp$ret$5);
      // Inline function 'kotlin.code' call
      var this_14 = _Char___init__impl__6a9atx(8);
      var tmp_2 = Char__toInt_impl_vasixd(this_14);
      // Inline function 'kotlin.code' call
      var this_15 = _Char___init__impl__6a9atx(98);
      var tmp$ret$7 = Char__toInt_impl_vasixd(this_15);
      this_7[tmp_2] = toByte(tmp$ret$7);
      // Inline function 'kotlin.code' call
      var this_16 = _Char___init__impl__6a9atx(10);
      var tmp_3 = Char__toInt_impl_vasixd(this_16);
      // Inline function 'kotlin.code' call
      var this_17 = _Char___init__impl__6a9atx(110);
      var tmp$ret$9 = Char__toInt_impl_vasixd(this_17);
      this_7[tmp_3] = toByte(tmp$ret$9);
      // Inline function 'kotlin.code' call
      var this_18 = _Char___init__impl__6a9atx(13);
      var tmp_4 = Char__toInt_impl_vasixd(this_18);
      // Inline function 'kotlin.code' call
      var this_19 = _Char___init__impl__6a9atx(114);
      var tmp$ret$11 = Char__toInt_impl_vasixd(this_19);
      this_7[tmp_4] = toByte(tmp$ret$11);
      // Inline function 'kotlin.code' call
      var this_20 = _Char___init__impl__6a9atx(102);
      var tmp$ret$12 = Char__toInt_impl_vasixd(this_20);
      this_7[12] = toByte(tmp$ret$12);
      ESCAPE_MARKERS = this_7;
    }
  }
  function unparsedPrimitive($this, literal, primitive, tag) {
    var type = startsWith(primitive, 'i') ? 'an ' + primitive : 'a ' + primitive;
    throw JsonDecodingException_0(-1, "Failed to parse literal '" + literal.toString() + "' as " + type + ' value at element: ' + $this.zx(tag), toString_1($this.ay()));
  }
  function setForceNull($this, descriptor, index) {
    $this.ry_1 = (!$this.ix().wq_1.os_1 && !descriptor.dj(index) && descriptor.cj(index).pi());
    return $this.ry_1;
  }
  function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
    return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.sg())).hk(deserializer);
  }
  var WriteMode_OBJ_instance;
  var WriteMode_LIST_instance;
  var WriteMode_MAP_instance;
  var WriteMode_POLY_OBJ_instance;
  function values() {
    return [WriteMode_OBJ_getInstance(), WriteMode_LIST_getInstance(), WriteMode_MAP_getInstance(), WriteMode_POLY_OBJ_getInstance()];
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var WriteMode_entriesInitialized;
  function WriteMode_initEntries() {
    if (WriteMode_entriesInitialized)
      return Unit_instance;
    WriteMode_entriesInitialized = true;
    WriteMode_OBJ_instance = new WriteMode('OBJ', 0, _Char___init__impl__6a9atx(123), _Char___init__impl__6a9atx(125));
    WriteMode_LIST_instance = new WriteMode('LIST', 1, _Char___init__impl__6a9atx(91), _Char___init__impl__6a9atx(93));
    WriteMode_MAP_instance = new WriteMode('MAP', 2, _Char___init__impl__6a9atx(123), _Char___init__impl__6a9atx(125));
    WriteMode_POLY_OBJ_instance = new WriteMode('POLY_OBJ', 3, _Char___init__impl__6a9atx(91), _Char___init__impl__6a9atx(93));
  }
  var $ENTRIES;
  function switchMode(_this__u8e3s4, desc) {
    var tmp0_subject = desc.vi();
    var tmp;
    if (tmp0_subject instanceof PolymorphicKind) {
      tmp = WriteMode_POLY_OBJ_getInstance();
    } else {
      if (equals(tmp0_subject, LIST_getInstance())) {
        tmp = WriteMode_LIST_getInstance();
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
          var keyDescriptor = carrierDescriptor(desc.cj(0), _this__u8e3s4.qk());
          var keyKind = keyDescriptor.vi();
          var tmp_0;
          var tmp_1;
          if (keyKind instanceof PrimitiveKind) {
            tmp_1 = true;
          } else {
            tmp_1 = equals(keyKind, ENUM_getInstance());
          }
          if (tmp_1) {
            tmp_0 = WriteMode_MAP_getInstance();
          } else {
            if (_this__u8e3s4.wq_1.ms_1) {
              tmp_0 = WriteMode_LIST_getInstance();
            } else {
              throw InvalidKeyKindException(keyDescriptor);
            }
          }
          tmp = tmp_0;
        } else {
          tmp = WriteMode_OBJ_getInstance();
        }
      }
    }
    return tmp;
  }
  function carrierDescriptor(_this__u8e3s4, module_0) {
    var tmp;
    if (equals(_this__u8e3s4.vi(), CONTEXTUAL_getInstance())) {
      var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
      tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
    } else if (_this__u8e3s4.wi()) {
      tmp = carrierDescriptor(_this__u8e3s4.cj(0), module_0);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function WriteMode_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_OBJ_instance;
  }
  function WriteMode_LIST_getInstance() {
    WriteMode_initEntries();
    return WriteMode_LIST_instance;
  }
  function WriteMode_MAP_getInstance() {
    WriteMode_initEntries();
    return WriteMode_MAP_instance;
  }
  function WriteMode_POLY_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_POLY_OBJ_instance;
  }
  function appendEscape($this, lastPosition, current) {
    $this.qz(lastPosition, current);
    return appendEsc($this, current + 1 | 0);
  }
  function decodedString($this, lastPosition, currentPosition) {
    $this.qz(lastPosition, currentPosition);
    var result = $this.or_1.toString();
    $this.or_1.rc(0);
    return result;
  }
  function takePeeked($this) {
    // Inline function 'kotlin.also' call
    var this_0 = ensureNotNull($this.nr_1);
    $this.nr_1 = null;
    return this_0;
  }
  function wasUnquotedString($this) {
    return !(charSequenceGet($this.rz(), $this.lr_1 - 1 | 0) === _Char___init__impl__6a9atx(34));
  }
  function appendEsc($this, startPosition) {
    var currentPosition = startPosition;
    currentPosition = $this.sz(currentPosition);
    if (currentPosition === -1) {
      $this.ow('Expected escape sequence to continue, got EOF');
    }
    var tmp = $this.rz();
    var _unary__edvuaz = currentPosition;
    currentPosition = _unary__edvuaz + 1 | 0;
    var currentChar = charSequenceGet(tmp, _unary__edvuaz);
    if (currentChar === _Char___init__impl__6a9atx(117)) {
      return appendHex($this, $this.rz(), currentPosition);
    }
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
    var c = escapeToChar(tmp$ret$0);
    if (c === _Char___init__impl__6a9atx(0)) {
      $this.ow("Invalid escaped char '" + toString(currentChar) + "'");
    }
    $this.or_1.q9(c);
    return currentPosition;
  }
  function appendHex($this, source, startPos) {
    if ((startPos + 4 | 0) >= charSequenceLength(source)) {
      $this.lr_1 = startPos;
      $this.tz();
      if (($this.lr_1 + 4 | 0) >= charSequenceLength(source)) {
        $this.ow('Unexpected EOF during unicode escape');
      }
      return appendHex($this, source, $this.lr_1);
    }
    $this.or_1.q9(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
    return startPos + 4 | 0;
  }
  function fromHexChar($this, source, currentPosition) {
    var character = charSequenceGet(source, currentPosition);
    var tmp;
    if (_Char___init__impl__6a9atx(48) <= character ? character <= _Char___init__impl__6a9atx(57) : false) {
      // Inline function 'kotlin.code' call
      var tmp_0 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      var this_0 = _Char___init__impl__6a9atx(48);
      tmp = tmp_0 - Char__toInt_impl_vasixd(this_0) | 0;
    } else if (_Char___init__impl__6a9atx(97) <= character ? character <= _Char___init__impl__6a9atx(102) : false) {
      // Inline function 'kotlin.code' call
      var tmp_1 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(97);
      tmp = (tmp_1 - Char__toInt_impl_vasixd(this_1) | 0) + 10 | 0;
    } else if (_Char___init__impl__6a9atx(65) <= character ? character <= _Char___init__impl__6a9atx(70) : false) {
      // Inline function 'kotlin.code' call
      var tmp_2 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(65);
      tmp = (tmp_2 - Char__toInt_impl_vasixd(this_2) | 0) + 10 | 0;
    } else {
      $this.ow("Invalid toHexChar char '" + toString(character) + "' in unicode escape");
    }
    return tmp;
  }
  function consumeBoolean2($this, start) {
    var current = $this.sz(start);
    if (current >= charSequenceLength($this.rz()) || current === -1) {
      $this.ow('EOF');
    }
    var tmp = $this.rz();
    var _unary__edvuaz = current;
    current = _unary__edvuaz + 1 | 0;
    // Inline function 'kotlin.code' call
    var this_0 = charSequenceGet(tmp, _unary__edvuaz);
    var tmp0_subject = Char__toInt_impl_vasixd(this_0) | 32;
    var tmp_0;
    // Inline function 'kotlin.code' call
    var this_1 = _Char___init__impl__6a9atx(116);
    if (tmp0_subject === Char__toInt_impl_vasixd(this_1)) {
      consumeBooleanLiteral($this, 'rue', current);
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(102);
      if (tmp0_subject === Char__toInt_impl_vasixd(this_2)) {
        consumeBooleanLiteral($this, 'alse', current);
        tmp_0 = false;
      } else {
        $this.ow("Expected valid boolean literal prefix, but had '" + $this.sw() + "'");
      }
    }
    return tmp_0;
  }
  function consumeBooleanLiteral($this, literalSuffix, current) {
    if ((charSequenceLength($this.rz()) - current | 0) < literalSuffix.length) {
      $this.ow('Unexpected end of boolean literal');
    }
    var inductionVariable = 0;
    var last = charSequenceLength(literalSuffix) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var expected = charCodeAt(literalSuffix, i);
        var actual = charSequenceGet($this.rz(), current + i | 0);
        // Inline function 'kotlin.code' call
        var tmp = Char__toInt_impl_vasixd(expected);
        // Inline function 'kotlin.code' call
        if (!(tmp === (Char__toInt_impl_vasixd(actual) | 32))) {
          $this.ow("Expected valid boolean literal prefix, but had '" + $this.sw() + "'");
        }
      }
       while (inductionVariable <= last);
    $this.lr_1 = current + literalSuffix.length | 0;
  }
  function consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive) {
    var tmp;
    switch (isExponentPositive) {
      case false:
        // Inline function 'kotlin.math.pow' call

        var x = -toNumber(exponentAccumulator);
        tmp = Math.pow(10.0, x);
        break;
      case true:
        // Inline function 'kotlin.math.pow' call

        var x_0 = toNumber(exponentAccumulator);
        tmp = Math.pow(10.0, x_0);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function charToTokenClass(c) {
    var tmp;
    // Inline function 'kotlin.code' call
    if (Char__toInt_impl_vasixd(c) < 126) {
      var tmp_0 = CharMappings_getInstance().a10_1;
      // Inline function 'kotlin.code' call
      tmp = tmp_0[Char__toInt_impl_vasixd(c)];
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function tokenDescription(token) {
    return token === 1 ? "quotation mark '\"'" : token === 2 ? "string escape sequence '\\'" : token === 4 ? "comma ','" : token === 5 ? "colon ':'" : token === 6 ? "start of the object '{'" : token === 7 ? "end of the object '}'" : token === 8 ? "start of the array '['" : token === 9 ? "end of the array ']'" : token === 10 ? 'end of the input' : token === 127 ? 'invalid token' : 'valid token';
  }
  function escapeToChar(c) {
    return c < 117 ? CharMappings_getInstance().zz_1[c] : _Char___init__impl__6a9atx(0);
  }
  function initEscape($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 31)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2ESC($this, i, _Char___init__impl__6a9atx(117));
      }
       while (inductionVariable <= 31);
    initC2ESC($this, 8, _Char___init__impl__6a9atx(98));
    initC2ESC($this, 9, _Char___init__impl__6a9atx(116));
    initC2ESC($this, 10, _Char___init__impl__6a9atx(110));
    initC2ESC($this, 12, _Char___init__impl__6a9atx(102));
    initC2ESC($this, 13, _Char___init__impl__6a9atx(114));
    initC2ESC_0($this, _Char___init__impl__6a9atx(47), _Char___init__impl__6a9atx(47));
    initC2ESC_0($this, _Char___init__impl__6a9atx(34), _Char___init__impl__6a9atx(34));
    initC2ESC_0($this, _Char___init__impl__6a9atx(92), _Char___init__impl__6a9atx(92));
  }
  function initCharToToken($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2TC($this, i, 127);
      }
       while (inductionVariable <= 32);
    initC2TC($this, 9, 3);
    initC2TC($this, 10, 3);
    initC2TC($this, 13, 3);
    initC2TC($this, 32, 3);
    initC2TC_0($this, _Char___init__impl__6a9atx(44), 4);
    initC2TC_0($this, _Char___init__impl__6a9atx(58), 5);
    initC2TC_0($this, _Char___init__impl__6a9atx(123), 6);
    initC2TC_0($this, _Char___init__impl__6a9atx(125), 7);
    initC2TC_0($this, _Char___init__impl__6a9atx(91), 8);
    initC2TC_0($this, _Char___init__impl__6a9atx(93), 9);
    initC2TC_0($this, _Char___init__impl__6a9atx(34), 1);
    initC2TC_0($this, _Char___init__impl__6a9atx(92), 2);
  }
  function initC2ESC($this, c, esc) {
    if (!(esc === _Char___init__impl__6a9atx(117))) {
      // Inline function 'kotlin.code' call
      var tmp$ret$0 = Char__toInt_impl_vasixd(esc);
      $this.zz_1[tmp$ret$0] = numberToChar(c);
    }
  }
  function initC2ESC_0($this, c, esc) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2ESC($this, tmp$ret$0, esc);
  }
  function initC2TC($this, c, cl) {
    $this.a10_1[c] = cl;
  }
  function initC2TC_0($this, c, cl) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2TC($this, tmp$ret$0, cl);
  }
  var CharMappings_instance;
  function CharMappings_getInstance() {
    if (CharMappings_instance === VOID)
      new CharMappings();
    return CharMappings_instance;
  }
  function StringJsonLexer_0(json, source) {
    return !json.wq_1.ys_1 ? new StringJsonLexer(source) : new StringJsonLexerWithComments(source);
  }
  function get_schemaCache(_this__u8e3s4) {
    return _this__u8e3s4.yq_1;
  }
  function createMapForCache(initialCapacity) {
    return HashMap.x6(initialCapacity);
  }
  function _get_$cachedSerializer__te6jhj($this) {
    return $this.l10_1.d2();
  }
  function Suit$Companion$_anonymous__cbm2iq() {
    return createSimpleEnumSerializer('com.zen.partygame.game.Suit', values_0());
  }
  var Suit_SUN_instance;
  var Suit_MOON_instance;
  var Suit_FLOWER_instance;
  var Suit_LEAF_instance;
  function values_0() {
    return [Suit_SUN_getInstance(), Suit_MOON_getInstance(), Suit_FLOWER_getInstance(), Suit_LEAF_getInstance()];
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var Companion_instance_17;
  function Companion_getInstance_17() {
    Suit_initEntries();
    if (Companion_instance_17 === VOID)
      new Companion_17();
    return Companion_instance_17;
  }
  var Suit_entriesInitialized;
  function Suit_initEntries() {
    if (Suit_entriesInitialized)
      return Unit_instance;
    Suit_entriesInitialized = true;
    Suit_SUN_instance = new Suit('SUN', 0, '\u592A\u967D');
    Suit_MOON_instance = new Suit('MOON', 1, '\u6708');
    Suit_FLOWER_instance = new Suit('FLOWER', 2, '\u82B1');
    Suit_LEAF_instance = new Suit('LEAF', 3, '\u8449');
    Companion_getInstance_17();
  }
  var $ENTRIES_0;
  var Fx_TRAP_instance;
  var Fx_THE_END_instance;
  var Fx_POINTS_instance;
  var Fx_RPS_ALL_instance;
  var Fx_FINGERS_instance;
  var Fx_RULE_SOCIAL_instance;
  var Fx_RULE_NO_DRAW_instance;
  var Fx_SPITE_instance;
  var Fx_LAUGH_instance;
  var Fx_PRESENT_instance;
  var Fx_BIRTHDAY_instance;
  var Fx_VOTE_instance;
  var Fx_SWAP_instance;
  var Fx_SHIELD_instance;
  var Fx_BOMB_instance;
  var Fx_DINO_instance;
  var Fx_CANCEL_instance;
  var Fx_NOSE_instance;
  var Fx_entriesInitialized;
  function Fx_initEntries() {
    if (Fx_entriesInitialized)
      return Unit_instance;
    Fx_entriesInitialized = true;
    Fx_TRAP_instance = new Fx('TRAP', 0);
    Fx_THE_END_instance = new Fx('THE_END', 1);
    Fx_POINTS_instance = new Fx('POINTS', 2);
    Fx_RPS_ALL_instance = new Fx('RPS_ALL', 3);
    Fx_FINGERS_instance = new Fx('FINGERS', 4);
    Fx_RULE_SOCIAL_instance = new Fx('RULE_SOCIAL', 5);
    Fx_RULE_NO_DRAW_instance = new Fx('RULE_NO_DRAW', 6);
    Fx_SPITE_instance = new Fx('SPITE', 7);
    Fx_LAUGH_instance = new Fx('LAUGH', 8);
    Fx_PRESENT_instance = new Fx('PRESENT', 9);
    Fx_BIRTHDAY_instance = new Fx('BIRTHDAY', 10);
    Fx_VOTE_instance = new Fx('VOTE', 11);
    Fx_SWAP_instance = new Fx('SWAP', 12);
    Fx_SHIELD_instance = new Fx('SHIELD', 13);
    Fx_BOMB_instance = new Fx('BOMB', 14);
    Fx_DINO_instance = new Fx('DINO', 15);
    Fx_CANCEL_instance = new Fx('CANCEL', 16);
    Fx_NOSE_instance = new Fx('NOSE', 17);
  }
  var TargetKind_NONE_instance;
  var TargetKind_ALIVE_OTHER_instance;
  var TargetKind_entriesInitialized;
  function TargetKind_initEntries() {
    if (TargetKind_entriesInitialized)
      return Unit_instance;
    TargetKind_entriesInitialized = true;
    TargetKind_NONE_instance = new TargetKind('NONE', 0);
    TargetKind_ALIVE_OTHER_instance = new TargetKind('ALIVE_OTHER', 1);
  }
  function _get_$cachedSerializer__te6jhj_0($this) {
    return $this.q10_1.d2();
  }
  function Chaos$Companion$_anonymous__j28p0x() {
    return createSimpleEnumSerializer('com.zen.partygame.game.Chaos', values_1());
  }
  var Chaos_SUDDEN_instance;
  var Chaos_YUMMY_instance;
  var Chaos_TABOO_WIN_instance;
  var Chaos_TABOO_NAME_instance;
  var Chaos_FAST_instance;
  var Chaos_RICH_instance;
  function values_1() {
    return [Chaos_SUDDEN_getInstance(), Chaos_YUMMY_getInstance(), Chaos_TABOO_WIN_getInstance(), Chaos_TABOO_NAME_getInstance(), Chaos_FAST_getInstance(), Chaos_RICH_getInstance()];
  }
  function get_entries_1() {
    if ($ENTRIES_1 == null)
      $ENTRIES_1 = enumEntries(values_1());
    return $ENTRIES_1;
  }
  var Companion_instance_18;
  function Companion_getInstance_18() {
    Chaos_initEntries();
    if (Companion_instance_18 === VOID)
      new Companion_18();
    return Companion_instance_18;
  }
  var Chaos_entriesInitialized;
  function Chaos_initEntries() {
    if (Chaos_entriesInitialized)
      return Unit_instance;
    Chaos_entriesInitialized = true;
    Chaos_SUDDEN_instance = new Chaos('SUDDEN', 0, '\u9023\u9396\u306E\u591C', '\u3060\u308C\u304B\u304C\u8CA0\u3051\u305F\u3089\u3001\u305D\u306E\u6B21\u306E\u5E2D\u306E\u4EBA\u3082\u4E00\u7DD2\u306B\u8CA0\u3051\u308B', false);
    Chaos_YUMMY_instance = new Chaos('YUMMY', 1, '\u3044\u305F\u3060\u304D\u307E\u3059\u306E\u591C', '\u624B\u756A\u304C\u6765\u305F\u3089\u98DF\u3079\u7269\u306E\u540D\u524D\u3068\u300C\u304A\u3044\u3057\u3044\uFF01\u300D\u3092\u8A00\u3046\u3002\u307B\u304B\u306E\u4EBA\u306F\u3059\u3050\u300C\u307B\u3093\u3068\u3060\uFF01\u300D\u3068\u8FD4\u3059\u3002\u3067\u304D\u306A\u304B\u3063\u305F\u4EBA\u306F\u8CA0\u3051\uFF08\u9055\u53CD\u3092\u5831\u544A\uFF09', true);
    Chaos_TABOO_WIN_instance = new Chaos('TABOO_WIN', 2, '\u7981\u53E5\u306E\u591C', '\u300C\u52DD\u3064\u300D\u300C\u8CA0\u3051\u308B\u300D\u3092\u542B\u3080\u8A00\u8449\u3092\u8A00\u3063\u305F\u4EBA\u306F\u8CA0\u3051\uFF08\u9055\u53CD\u3092\u5831\u544A\uFF09', true);
    Chaos_TABOO_NAME_instance = new Chaos('TABOO_NAME', 3, '\u540D\u7121\u3057\u306E\u591C', '\u30AB\u30FC\u30C9\u306E\u540D\u524D\u3092\u53E3\u306B\u3057\u3066\u306F\u3044\u3051\u306A\u3044\u3002\u8A00\u3063\u305F\u4EBA\u306F\u8CA0\u3051\uFF08\u9055\u53CD\u3092\u5831\u544A\uFF09', true);
    Chaos_FAST_instance = new Chaos('FAST', 4, '\u901F\u653B\u306E\u591C', '\u624B\u756A\u306F20\u79D2\u3002\u6642\u9593\u5207\u308C\u306B\u306A\u308B\u3068\u3001\u624B\u672D\u304B\u3089\u52DD\u624B\u306B\u51FA\u3055\u308C\u308B', false);
    Chaos_RICH_instance = new Chaos('RICH', 5, '\u305C\u3044\u305F\u304F\u306A\u591C', '\u6700\u521D\u306E\u624B\u672D\u304C3\u679A', false);
    Companion_getInstance_18();
  }
  var $ENTRIES_1;
  var ArenaCards_instance;
  function ArenaCards_getInstance() {
    if (ArenaCards_instance === VOID)
      new ArenaCards();
    return ArenaCards_instance;
  }
  function Suit_SUN_getInstance() {
    Suit_initEntries();
    return Suit_SUN_instance;
  }
  function Suit_MOON_getInstance() {
    Suit_initEntries();
    return Suit_MOON_instance;
  }
  function Suit_FLOWER_getInstance() {
    Suit_initEntries();
    return Suit_FLOWER_instance;
  }
  function Suit_LEAF_getInstance() {
    Suit_initEntries();
    return Suit_LEAF_instance;
  }
  function Fx_TRAP_getInstance() {
    Fx_initEntries();
    return Fx_TRAP_instance;
  }
  function Fx_THE_END_getInstance() {
    Fx_initEntries();
    return Fx_THE_END_instance;
  }
  function Fx_POINTS_getInstance() {
    Fx_initEntries();
    return Fx_POINTS_instance;
  }
  function Fx_RPS_ALL_getInstance() {
    Fx_initEntries();
    return Fx_RPS_ALL_instance;
  }
  function Fx_FINGERS_getInstance() {
    Fx_initEntries();
    return Fx_FINGERS_instance;
  }
  function Fx_RULE_SOCIAL_getInstance() {
    Fx_initEntries();
    return Fx_RULE_SOCIAL_instance;
  }
  function Fx_RULE_NO_DRAW_getInstance() {
    Fx_initEntries();
    return Fx_RULE_NO_DRAW_instance;
  }
  function Fx_SPITE_getInstance() {
    Fx_initEntries();
    return Fx_SPITE_instance;
  }
  function Fx_LAUGH_getInstance() {
    Fx_initEntries();
    return Fx_LAUGH_instance;
  }
  function Fx_PRESENT_getInstance() {
    Fx_initEntries();
    return Fx_PRESENT_instance;
  }
  function Fx_BIRTHDAY_getInstance() {
    Fx_initEntries();
    return Fx_BIRTHDAY_instance;
  }
  function Fx_VOTE_getInstance() {
    Fx_initEntries();
    return Fx_VOTE_instance;
  }
  function Fx_SWAP_getInstance() {
    Fx_initEntries();
    return Fx_SWAP_instance;
  }
  function Fx_SHIELD_getInstance() {
    Fx_initEntries();
    return Fx_SHIELD_instance;
  }
  function Fx_BOMB_getInstance() {
    Fx_initEntries();
    return Fx_BOMB_instance;
  }
  function Fx_DINO_getInstance() {
    Fx_initEntries();
    return Fx_DINO_instance;
  }
  function Fx_CANCEL_getInstance() {
    Fx_initEntries();
    return Fx_CANCEL_instance;
  }
  function Fx_NOSE_getInstance() {
    Fx_initEntries();
    return Fx_NOSE_instance;
  }
  function TargetKind_NONE_getInstance() {
    TargetKind_initEntries();
    return TargetKind_NONE_instance;
  }
  function TargetKind_ALIVE_OTHER_getInstance() {
    TargetKind_initEntries();
    return TargetKind_ALIVE_OTHER_instance;
  }
  function Chaos_SUDDEN_getInstance() {
    Chaos_initEntries();
    return Chaos_SUDDEN_instance;
  }
  function Chaos_YUMMY_getInstance() {
    Chaos_initEntries();
    return Chaos_YUMMY_instance;
  }
  function Chaos_TABOO_WIN_getInstance() {
    Chaos_initEntries();
    return Chaos_TABOO_WIN_instance;
  }
  function Chaos_TABOO_NAME_getInstance() {
    Chaos_initEntries();
    return Chaos_TABOO_NAME_instance;
  }
  function Chaos_FAST_getInstance() {
    Chaos_initEntries();
    return Chaos_FAST_instance;
  }
  function Chaos_RICH_getInstance() {
    Chaos_initEntries();
    return Chaos_RICH_instance;
  }
  var Step_TURN_instance;
  var Step_MINI_instance;
  var Step_OVER_instance;
  var Step_entriesInitialized;
  function Step_initEntries() {
    if (Step_entriesInitialized)
      return Unit_instance;
    Step_entriesInitialized = true;
    Step_TURN_instance = new Step('TURN', 0);
    Step_MINI_instance = new Step('MINI', 1);
    Step_OVER_instance = new Step('OVER', 2);
  }
  function log($this, s) {
    $this.q12_1.td(s);
    while ($this.q12_1.od_1 > 12) {
      $this.q12_1.ud();
    }
  }
  function n($this, id) {
    return id == null ? '?' : $this.b12_1(id);
  }
  function alive($this) {
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = $this.f12_1.i2();
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList.o1();
    var _iterator__ex2g4s = tmp0.e1();
    while (_iterator__ex2g4s.f1()) {
      var element = _iterator__ex2g4s.g1();
      if (element.r11_1) {
        destination.r(element);
      }
    }
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList.d1(collectionSizeOrDefault(destination, 10));
    var _iterator__ex2g4s_0 = destination.e1();
    while (_iterator__ex2g4s_0.f1()) {
      var item = _iterator__ex2g4s_0.g1();
      var tmp$ret$3 = item.q11_1;
      destination_0.r(tmp$ret$3);
    }
    return destination_0;
  }
  function seat($this, id) {
    return getValue($this.f12_1, id);
  }
  function def($this, c) {
    return ArenaCards_getInstance().o11(c.u12_1);
  }
  function drawTo($this, s, force) {
    if ($this.w12() && !force)
      return false;
    if ($this.g12_1.k1()) {
      if ($this.h12_1.k1())
        return false;
      $this.g12_1.q1(shuffled($this.h12_1, $this.c12_1));
      $this.h12_1.j4();
      log($this, '\u5C71\u672D\u3092\u5207\u308A\u76F4\u3057\u305F');
    }
    var tmp0 = s.s11_1;
    // Inline function 'kotlin.collections.plusAssign' call
    var element = $this.g12_1.ud();
    tmp0.r(element);
    return true;
  }
  function drawTo$default($this, s, force, $super) {
    force = force === VOID ? false : force;
    return drawTo($this, s, force);
  }
  function beginTurn($this, id) {
    $this.i12_1 = id;
    var s = seat($this, id);
    $this.j12_1 = Step_TURN_getInstance();
    if ($this.w12()) {
      if (s.s11_1.k1()) {
        log($this, n($this, id) + '\u306F\u624B\u672D\u304C\u306A\u3044\u2026');
        lose$default($this, id, '\u88DC\u5145\u306A\u3057');
        if (!checkEnd($this)) {
          beginTurn($this, nextAlive($this, id));
        }
        return Unit_instance;
      }
    } else
      drawTo$default($this, s);
    var sec = equals($this.l12_1, Chaos_FAST_getInstance()) ? 20 : $this.e12_1;
    $this.s12_1 = sec > 0 ? add($this.d12_1(), multiply(numberToLong(sec), new Long(1000, 0))) : null;
  }
  function nextAlive($this, from) {
    var ids = toList_0($this.f12_1.h2());
    var i = ids.a2(from);
    // Inline function 'kotlin.repeat' call
    var times = ids.j1();
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        i = (i + 1 | 0) % ids.j1() | 0;
        if (seat($this, ids.l1(i)).r11_1)
          return ids.l1(i);
      }
       while (inductionVariable < times);
    return from;
  }
  function endTurn($this) {
    if ($this.j12_1.equals(Step_OVER_getInstance()))
      return Unit_instance;
    var s = seat($this, $this.i12_1);
    if (s.r11_1) {
      var tmp0 = s.t11_1;
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var _iterator__ex2g4s = tmp0.e1();
        while (_iterator__ex2g4s.f1()) {
          var element = _iterator__ex2g4s.g1();
          if (def($this, element).y10_1.equals(Fx_TRAP_getInstance())) {
            tmp$ret$1 = element;
            break $l$block;
          }
        }
        tmp$ret$1 = null;
      }
      var trap = tmp$ret$1;
      if (!(trap == null)) {
        s.t11_1.f4(trap);
        // Inline function 'kotlin.collections.plusAssign' call
        $this.h12_1.r(trap);
        log($this, n($this, $this.i12_1) + '\u306E\u524D\u306B\u843D\u3068\u3057\u7A74\u304C\u6B8B\u3063\u3066\u3044\u305F\uFF01');
        lose$default($this, $this.i12_1, '\u843D\u3068\u3057\u7A74');
        if (checkEnd($this))
          return Unit_instance;
      }
    }
    if ($this.n12_1 === $this.i12_1) {
      if ($this.o12_1) {
        log($this, '\u9589\u5E55\u306E\u30D9\u30EB\u304C\u9CF4\u3063\u305F\uFF01');
        loseAll($this);
        return Unit_instance;
      }
      $this.o12_1 = true;
    }
    if (checkEnd($this))
      return Unit_instance;
    beginTurn($this, nextAlive($this, $this.i12_1));
  }
  function lose($this, id, why, chain) {
    var tmp0_elvis_lhs = $this.f12_1.g2(id);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var s = tmp;
    if (!s.r11_1)
      return false;
    var tmp0 = s.s11_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.e1();
      while (_iterator__ex2g4s.f1()) {
        var element = _iterator__ex2g4s.g1();
        if (def($this, element).y10_1.equals(Fx_SHIELD_getInstance())) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var charm = tmp$ret$1;
    if (!(charm == null)) {
      s.s11_1.f4(charm);
      // Inline function 'kotlin.collections.plusAssign' call
      $this.h12_1.r(charm);
      log($this, n($this, id) + '\u306E\u304A\u5B88\u308A\u304C\u8EAB\u4EE3\u308F\u308A\u306B\uFF01\uFF08' + why + '\uFF09');
      return false;
    }
    var next = nextAlive($this, id);
    out($this, id, '\u8CA0\u3051\uFF08' + why + '\uFF09');
    // Inline function 'kotlin.collections.filter' call
    var tmp0_0 = $this.f12_1.i2();
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList.o1();
    var _iterator__ex2g4s_0 = tmp0_0.e1();
    while (_iterator__ex2g4s_0.f1()) {
      var element_0 = _iterator__ex2g4s_0.g1();
      var tmp_0;
      if (element_0.r11_1) {
        var tmp0_1 = element_0.t11_1;
        var tmp$ret$3;
        $l$block_1: {
          // Inline function 'kotlin.collections.any' call
          var tmp_1;
          if (isInterface(tmp0_1, Collection)) {
            tmp_1 = tmp0_1.k1();
          } else {
            tmp_1 = false;
          }
          if (tmp_1) {
            tmp$ret$3 = false;
            break $l$block_1;
          }
          var _iterator__ex2g4s_1 = tmp0_1.e1();
          while (_iterator__ex2g4s_1.f1()) {
            var element_1 = _iterator__ex2g4s_1.g1();
            if (def($this, element_1).y10_1.equals(Fx_LAUGH_getInstance())) {
              tmp$ret$3 = true;
              break $l$block_1;
            }
          }
          tmp$ret$3 = false;
        }
        tmp_0 = tmp$ret$3;
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        destination.r(element_0);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_2 = destination.e1();
    while (_iterator__ex2g4s_2.f1()) {
      var element_2 = _iterator__ex2g4s_2.g1();
      if (drawTo$default($this, element_2)) {
        log($this, n($this, element_2.q11_1) + '\u306F\u9AD8\u7B11\u3044\u3057\u30661\u679A\u5F15\u3044\u305F');
      }
    }
    if (chain && equals($this.l12_1, Chaos_SUDDEN_getInstance()) && !(next === id) && seat($this, next).r11_1) {
      log($this, '\u9023\u9396\u306E\u591C\u2026\u3068\u306A\u308A\u306E' + n($this, next) + '\u3082\u5DFB\u304D\u3053\u307E\u308C\u308B\uFF01');
      lose($this, next, '\u9023\u9396', false);
    }
    return true;
  }
  function lose$default($this, id, why, chain, $super) {
    chain = chain === VOID ? true : chain;
    return lose($this, id, why, chain);
  }
  function out($this, id, why) {
    var s = seat($this, id);
    s.r11_1 = false;
    var tmp0 = $this.h12_1;
    // Inline function 'kotlin.collections.plusAssign' call
    var elements = s.s11_1;
    addAll(tmp0, elements);
    s.s11_1.j4();
    var tmp0_0 = $this.h12_1;
    // Inline function 'kotlin.collections.plusAssign' call
    var elements_0 = s.t11_1;
    addAll(tmp0_0, elements_0);
    s.t11_1.j4();
    if ($this.n12_1 === id) {
      $this.n12_1 = null;
      $this.o12_1 = false;
    }
    log($this, n($this, id) + '\u306F' + why);
  }
  function loseAll($this) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = alive($this).e1();
    while (_iterator__ex2g4s.f1()) {
      var element = _iterator__ex2g4s.g1();
      out($this, element, '\u8CA0\u3051');
    }
    $this.r12_1 = emptyList();
    $this.j12_1 = Step_OVER_getInstance();
    $this.s12_1 = null;
    $this.m12_1 = null;
    log($this, '\u5168\u54E1\u8CA0\u3051\u2026\u52DD\u8005\u306A\u3057\uFF01');
  }
  function win($this, id) {
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = alive($this);
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList.o1();
    var _iterator__ex2g4s = tmp0.e1();
    while (_iterator__ex2g4s.f1()) {
      var element = _iterator__ex2g4s.g1();
      if (!(element === id)) {
        destination.r(element);
      }
    }
    var tmp$ret$6;
    $l$block_1: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s_0 = destination.e1();
      while (_iterator__ex2g4s_0.f1()) {
        var element_0 = _iterator__ex2g4s_0.g1();
        var tmp0_0 = seat($this, element_0).s11_1;
        var tmp$ret$3;
        $l$block_0: {
          // Inline function 'kotlin.collections.any' call
          var tmp;
          if (isInterface(tmp0_0, Collection)) {
            tmp = tmp0_0.k1();
          } else {
            tmp = false;
          }
          if (tmp) {
            tmp$ret$3 = false;
            break $l$block_0;
          }
          var _iterator__ex2g4s_1 = tmp0_0.e1();
          while (_iterator__ex2g4s_1.f1()) {
            var element_1 = _iterator__ex2g4s_1.g1();
            if (def($this, element_1).y10_1.equals(Fx_SPITE_getInstance())) {
              tmp$ret$3 = true;
              break $l$block_0;
            }
          }
          tmp$ret$3 = false;
        }
        if (tmp$ret$3) {
          tmp$ret$6 = element_0;
          break $l$block_1;
        }
      }
      tmp$ret$6 = null;
    }
    var spite = tmp$ret$6;
    if (!(spite == null)) {
      var tmp0_1 = seat($this, spite).s11_1;
      var tmp$ret$8;
      $l$block_2: {
        // Inline function 'kotlin.collections.first' call
        var _iterator__ex2g4s_2 = tmp0_1.e1();
        while (_iterator__ex2g4s_2.f1()) {
          var element_2 = _iterator__ex2g4s_2.g1();
          if (def($this, element_2).y10_1.equals(Fx_SPITE_getInstance())) {
            tmp$ret$8 = element_2;
            break $l$block_2;
          }
        }
        throw NoSuchElementException.v('Collection contains no element matching the predicate.');
      }
      var c = tmp$ret$8;
      seat($this, spite).s11_1.f4(c);
      // Inline function 'kotlin.collections.plusAssign' call
      $this.h12_1.r(c);
      log($this, n($this, id) + '\u304C\u52DD\u3061\u304B\u3051\u305F\u2026\u304C\u3001' + n($this, spite) + '\u306E\u9053\u9023\u308C\uFF01');
      out($this, id, '\u9053\u9023\u308C\u3067\u8CA0\u3051');
      out($this, spite, '\u9053\u9023\u308C\u3067\u8CA0\u3051');
      return Unit_instance;
    }
    $this.r12_1 = listOf(id);
    $this.j12_1 = Step_OVER_getInstance();
    $this.s12_1 = null;
    $this.m12_1 = null;
    log($this, n($this, id) + '\u306E\u52DD\u3061\uFF01');
  }
  function checkEnd($this) {
    if ($this.j12_1.equals(Step_OVER_getInstance()))
      return true;
    var a = alive($this);
    if (a.j1() <= 1) {
      $this.r12_1 = a;
      $this.j12_1 = Step_OVER_getInstance();
      $this.s12_1 = null;
      $this.m12_1 = null;
      log($this, a.k1() ? '\u5168\u54E1\u8CA0\u3051\u2026\u52DD\u8005\u306A\u3057\uFF01' : n($this, a.l1(0)) + '\u304C\u6700\u5F8C\u306E1\u4EBA\uFF01');
      return true;
    }
    var goal = $this.x12();
    // Inline function 'kotlin.collections.sortedBy' call
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp = ArenaGame$checkEnd$lambda($this);
    var tmp$ret$0 = new sam$kotlin_Comparator$0_0(tmp);
    var tmp0 = sortedWith(a, tmp$ret$0);
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.e1();
      while (_iterator__ex2g4s.f1()) {
        var element = _iterator__ex2g4s.g1();
        if ($this.y12(element) >= goal) {
          tmp$ret$3 = element;
          break $l$block;
        }
      }
      tmp$ret$3 = null;
    }
    var tmp0_safe_receiver = tmp$ret$3;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      log($this, n($this, tmp0_safe_receiver) + '\u304C' + $this.y12(tmp0_safe_receiver) + '\u30DD\u30A4\u30F3\u30C8\uFF01');
      win($this, tmp0_safe_receiver);
      return checkEnd($this);
    }
    // Inline function 'kotlin.collections.sumOf' call
    var sum = 0;
    var _iterator__ex2g4s_0 = $this.f12_1.i2().e1();
    while (_iterator__ex2g4s_0.f1()) {
      var element_0 = _iterator__ex2g4s_0.g1();
      var tmp_0 = sum;
      var tmp0_0 = element_0.t11_1;
      var tmp$ret$5;
      $l$block_0: {
        // Inline function 'kotlin.collections.count' call
        var tmp_1;
        if (isInterface(tmp0_0, Collection)) {
          tmp_1 = tmp0_0.k1();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$5 = 0;
          break $l$block_0;
        }
        var count = 0;
        var _iterator__ex2g4s_1 = tmp0_0.e1();
        while (_iterator__ex2g4s_1.f1()) {
          var element_1 = _iterator__ex2g4s_1.g1();
          if (def($this, element_1).y10_1.equals(Fx_BOMB_getInstance())) {
            count = count + 1 | 0;
            checkCountOverflow(count);
          }
        }
        tmp$ret$5 = count;
      }
      sum = tmp_0 + tmp$ret$5 | 0;
    }
    if (sum >= 4) {
      log($this, '\u3070\u304F\u3060\u3093\u304C4\u3064\u305D\u308D\u3063\u305F\u2026\u30C9\u30AB\u30FC\u30F3\uFF01');
      loseAll($this);
      return true;
    }
    return false;
  }
  function autoPlay($this) {
    var s = seat($this, $this.i12_1);
    if (s.s11_1.k1()) {
      log($this, n($this, $this.i12_1) + '\u306F\u51FA\u305B\u308B\u30AB\u30FC\u30C9\u304C\u306A\u3044');
      $this.p12_1 = $this.p12_1 + 1 | 0;
      var tmp;
      if ($this.p12_1 >= imul(alive($this).j1(), 2)) {
        var tmp0 = $this.f12_1.i2();
        var tmp$ret$0;
        $l$block_0: {
          // Inline function 'kotlin.collections.none' call
          var tmp_0;
          if (isInterface(tmp0, Collection)) {
            tmp_0 = tmp0.k1();
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            tmp$ret$0 = true;
            break $l$block_0;
          }
          var _iterator__ex2g4s = tmp0.e1();
          while (_iterator__ex2g4s.f1()) {
            var element = _iterator__ex2g4s.g1();
            var tmp_1;
            if (element.r11_1) {
              // Inline function 'kotlin.collections.isNotEmpty' call
              tmp_1 = !element.s11_1.k1();
            } else {
              tmp_1 = false;
            }
            if (tmp_1) {
              tmp$ret$0 = false;
              break $l$block_0;
            }
          }
          tmp$ret$0 = true;
        }
        tmp = tmp$ret$0;
      } else {
        tmp = false;
      }
      if (tmp) {
        log($this, '\u3060\u308C\u3082\u30AB\u30FC\u30C9\u3092\u51FA\u305B\u306A\u3044\u2026\u5F15\u304D\u5206\u3051\uFF01');
        $this.r12_1 = emptyList();
        $this.j12_1 = Step_OVER_getInstance();
        $this.s12_1 = null;
        return Unit_instance;
      }
      endTurn($this);
      return Unit_instance;
    }
    var card = s.s11_1.l1($this.c12_1.m1(s.s11_1.j1()));
    var targets = $this.z12($this.i12_1, def($this, card));
    log($this, n($this, $this.i12_1) + '\u306F\u6642\u9593\u5207\u308C\uFF01 \u30AB\u30FC\u30C9\u304C\u52DD\u624B\u306B\u51FA\u305F');
    $this.a13($this.i12_1, card.t12_1, randomOrNull(targets, $this.c12_1));
  }
  function place($this, card, on) {
    // Inline function 'kotlin.collections.plusAssign' call
    seat($this, on).t11_1.r(card);
  }
  function resolve($this, from, card, d, t) {
    var me = seat($this, from);
    var keep = false;
    switch (d.y10_1.l2_1) {
      case 0:
        if (!(t == null)) {
          place($this, card, t);
          keep = true;
          log($this, n($this, t) + '\u306E\u524D\u306B\u843D\u3068\u3057\u7A74\uFF01 \u624B\u756A\u306E\u7D42\u308F\u308A\u307E\u3067\u306B\u4F55\u3068\u304B\u3057\u306A\u3044\u3068\u2026');
        }

        break;
      case 1:
        $this.n12_1 = from;
        $this.o12_1 = false;
        log($this, '\u6B21\u306E' + n($this, from) + '\u306E\u624B\u756A\u306E\u7D42\u308F\u308A\u306B\u3001\u9589\u5E55\u306E\u30D9\u30EB\u304C\u9CF4\u308B\u2026');
        break;
      case 2:
      case 8:
      case 15:
      case 14:
        place($this, card, from);
        keep = true;
        break;
      case 5:
      case 6:
        // Inline function 'kotlin.collections.plusAssign' call

        $this.k12_1.r(card);
        keep = true;
        log($this, '\u30EB\u30FC\u30EB\u8FFD\u52A0\uFF1A\u300C' + d.x10_1 + '\u300D');
        break;
      case 7:
      case 13:
        log($this, '\u2026\u4F55\u3082\u8D77\u304D\u306A\u3044');
        break;
      case 12:
        if (t == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          var other = seat($this, t);
          var mine = toList_0(me.s11_1);
          me.s11_1.j4();
          var tmp0 = me.s11_1;
          // Inline function 'kotlin.collections.plusAssign' call
          var elements = other.s11_1;
          addAll(tmp0, elements);
          other.s11_1.j4();
          // Inline function 'kotlin.collections.plusAssign' call
          var this_0 = other.s11_1;
          addAll(this_0, mine);
          log($this, n($this, from) + '\u3068' + n($this, t) + '\u306E\u624B\u672D\u304C\u5165\u308C\u66FF\u308F\u3063\u305F');
        }

        break;
      case 16:
        // Inline function 'kotlin.repeat' call

        var inductionVariable = 0;
        if (inductionVariable < 2)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            drawTo$default($this, me);
          }
           while (inductionVariable < 2);
        log($this, n($this, from) + '\u306F2\u679A\u5F15\u3044\u305F');
        break;
      case 10:
        // Inline function 'kotlin.collections.plusAssign' call

        $this.h12_1.r(card);
        startMini($this, new Mini('yesno', from, listOf(from), card), new Long(20000, 0));
        return Unit_instance;
      case 3:
        // Inline function 'kotlin.collections.plusAssign' call

        $this.h12_1.r(card);
        startMini($this, new Mini('rps', from, alive($this), card), new Long(15000, 0));
        return Unit_instance;
      case 4:
        // Inline function 'kotlin.collections.plusAssign' call

        $this.h12_1.r(card);
        startMini($this, new Mini('fingers', from, alive($this), card), new Long(15000, 0));
        return Unit_instance;
      case 11:
        // Inline function 'kotlin.collections.plusAssign' call

        $this.h12_1.r(card);
        startMini($this, new Mini('vote', from, alive($this), card), new Long(25000, 0));
        return Unit_instance;
      case 9:
        // Inline function 'kotlin.collections.plusAssign' call

        $this.h12_1.r(card);
        // Inline function 'kotlin.collections.filter' call

        var tmp0_0 = alive($this);
        // Inline function 'kotlin.collections.filterTo' call

        var destination = ArrayList.o1();
        var _iterator__ex2g4s = tmp0_0.e1();
        while (_iterator__ex2g4s.f1()) {
          var element = _iterator__ex2g4s.g1();
          if (!(element === from)) {
            destination.r(element);
          }
        }

        var others = destination;
        startMini($this, new Mini('present', from, others, card), new Long(15000, 0));
        return Unit_instance;
      case 17:
        // Inline function 'kotlin.collections.plusAssign' call

        $this.h12_1.r(card);
        startMini($this, new Mini('nose', from, alive($this), card), new Long(12000, 0));
        return Unit_instance;
      default:
        noWhenBranchMatchedException();
        break;
    }
    if (!keep) {
      // Inline function 'kotlin.collections.plusAssign' call
      $this.h12_1.r(card);
    }
    if (checkEnd($this))
      return Unit_instance;
    endTurn($this);
  }
  function startMini($this, m, waitMs) {
    $this.m12_1 = m;
    $this.j12_1 = Step_MINI_getInstance();
    $this.s12_1 = add($this.d12_1(), waitMs);
    var tmp0_subject = m.u11_1;
    log($this, tmp0_subject === 'cancel' ? '\u2026\u6A2A\u3084\u308A\u304C\u5165\u308B\u304B\u3082\uFF1F' : tmp0_subject === 'yesno' ? n($this, m.v11_1) + '\u306F\u4ECA\u6708\u304C\u8A95\u751F\u6708\uFF1F' : tmp0_subject === 'rps' ? '\u5168\u54E1\u3058\u3083\u3093\u3051\u3093\uFF01' : tmp0_subject === 'fingers' ? '\u5168\u54E1\u3001\u6307\u30921\u301C5\u672C\uFF01' : tmp0_subject === 'vote' ? '\u591A\u6570\u6C7A\uFF01 \u8CA0\u3051\u3055\u305B\u305F\u3044\u4EBA\u306B\u6295\u7968' : tmp0_subject === 'present' ? '\u30D7\u30EC\u30BC\u30F3\u30C8\u3001\u307B\u3057\u3044\uFF1F \u3044\u3089\u306A\u3044\uFF1F' : n($this, m.v11_1) + '\u306E\u5408\u56F3\u3092\u5F85\u3066\u2026\uFF01');
  }
  function finishMini($this) {
    var tmp0_elvis_lhs = $this.m12_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var m = tmp;
    $this.m12_1 = null;
    $this.j12_1 = Step_TURN_getInstance();
    $this.s12_1 = null;
    var living = toSet_0(alive($this));
    var tmp1_safe_receiver = m.x11_1;
    var tmp_0;
    if (tmp1_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_0 = def($this, tmp1_safe_receiver);
    }
    var d = tmp_0;
    switch (m.u11_1) {
      case 'cancel':
        var _destruct__k2r9zo = ensureNotNull(m.a12_1);
        var from = _destruct__k2r9zo.oe();
        var card = _destruct__k2r9zo.pe();
        var t = _destruct__k2r9zo.rg();
        var tmp0 = m.w11_1;
        var tmp$ret$3;
        $l$block: {
          // Inline function 'kotlin.collections.firstOrNull' call
          var _iterator__ex2g4s = tmp0.e1();
          while (_iterator__ex2g4s.f1()) {
            var element = _iterator__ex2g4s.g1();
            if (m.y11_1.g2(element) === 'use' && seat($this, element).r11_1) {
              tmp$ret$3 = element;
              break $l$block;
            }
          }
          tmp$ret$3 = null;
        }

        var user = tmp$ret$3;
        var tmp_1;
        if (user == null) {
          tmp_1 = null;
        } else {
          // Inline function 'kotlin.let' call
          var tmp0_0 = seat($this, user).s11_1;
          var tmp$ret$5;
          $l$block_0: {
            // Inline function 'kotlin.collections.firstOrNull' call
            var _iterator__ex2g4s_0 = tmp0_0.e1();
            while (_iterator__ex2g4s_0.f1()) {
              var element_0 = _iterator__ex2g4s_0.g1();
              if (def($this, element_0).y10_1.equals(Fx_CANCEL_getInstance())) {
                tmp$ret$5 = element_0;
                break $l$block_0;
              }
            }
            tmp$ret$5 = null;
          }
          tmp_1 = tmp$ret$5;
        }

        var cat = tmp_1;
        if (!(user == null) && !(cat == null)) {
          seat($this, user).s11_1.f4(cat);
          // Inline function 'kotlin.collections.plusAssign' call
          $this.h12_1.r(cat);
          // Inline function 'kotlin.collections.plusAssign' call
          $this.h12_1.r(card);
          log($this, n($this, user) + '\u306E\u30CD\u30B3\u304C\u6A2A\u3084\u308A\uFF01\u300C' + def($this, card).x10_1 + '\u300D\u306F\u6253\u3061\u6D88\u3055\u308C\u305F');
          drawTo$default($this, seat($this, user));
          if (checkEnd($this))
            return Unit_instance;
          endTurn($this);
          return Unit_instance;
        }

        $this.i12_1 = from;
        var tmp_2 = def($this, card);
        // Inline function 'kotlin.takeIf' call

        var tmp_3;
        var tmp_4;
        if (t == null) {
          tmp_4 = true;
        } else {
          var tmp0_safe_receiver = $this.f12_1.g2(t);
          tmp_4 = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.r11_1) === true;
        }

        if (tmp_4) {
          tmp_3 = t;
        } else {
          tmp_3 = null;
        }

        var tmp$ret$11 = tmp_3;
        resolve($this, from, card, tmp_2, tmp$ret$11);
        return Unit_instance;
      case 'yesno':
        if (m.y11_1.g2(m.v11_1) === 'yes') {
          log($this, '\u4ECA\u6708\u306F' + n($this, m.v11_1) + '\u306E\u8A95\u751F\u6708\uFF01');
          win($this, m.v11_1);
        } else {
          log($this, '\u8A95\u751F\u6708\u3067\u306F\u306A\u304B\u3063\u305F\u2026');
        }

        break;
      case 'rps':
        var name = mapOf_0([to('g', '\u30B0\u30FC'), to('c', '\u30C1\u30E7\u30AD'), to('p', '\u30D1\u30FC')]);
        // Inline function 'kotlin.collections.filter' call

        var tmp0_1 = m.w11_1;
        // Inline function 'kotlin.collections.filterTo' call

        var destination = ArrayList.o1();
        var _iterator__ex2g4s_1 = tmp0_1.e1();
        while (_iterator__ex2g4s_1.f1()) {
          var element_1 = _iterator__ex2g4s_1.g1();
          if (living.p1(element_1)) {
            destination.r(element_1);
          }
        }

        // Inline function 'kotlin.collections.associateWith' call

        var result = LinkedHashMap.u9(coerceAtLeast(mapCapacity(collectionSizeOrDefault(destination, 10)), 16));
        // Inline function 'kotlin.collections.associateWithTo' call

        var _iterator__ex2g4s_2 = destination.e1();
        while (_iterator__ex2g4s_2.f1()) {
          var element_2 = _iterator__ex2g4s_2.g1();
          var tmp0_elvis_lhs_0 = m.y11_1.g2(element_2);
          var tmp$ret$15 = tmp0_elvis_lhs_0 == null ? random(listOf_0(['g', 'c', 'p']), $this.c12_1) : tmp0_elvis_lhs_0;
          result.c4(element_2, tmp$ret$15);
        }

        var hands = result;
        var tmp_5 = hands.j2();
        log($this, joinToString_0(tmp_5, '\u3000', VOID, VOID, VOID, VOID, ArenaGame$finishMini$lambda($this, name)));
        var rule = ensureNotNull(d).e11_1;
        var mine = hands.g2(m.v11_1);
        // Inline function 'kotlin.collections.filter' call

        // Inline function 'kotlin.collections.filterTo' call

        var destination_0 = LinkedHashMap.z3();
        // Inline function 'kotlin.collections.iterator' call

        var _iterator__ex2g4s_3 = hands.j2().e1();
        while (_iterator__ex2g4s_3.f1()) {
          var element_3 = _iterator__ex2g4s_3.g1();
          // Inline function 'kotlin.collections.component2' call
          var h = element_3.d2();
          if (rule === 'diff' ? !(h === mine) : h === rule) {
            destination_0.c4(element_3.c2(), element_3.d2());
          }
        }

        var losers = destination_0.h2();
        log($this, '\u30EB\u30FC\u30EB\u306F\u2026\u300C' + substringAfter(d.z10_1, '\u3002') + '\u300D');
        if (losers.k1()) {
          log($this, '\u3060\u308C\u3082\u8CA0\u3051\u306A\u304B\u3063\u305F');
        }

        // Inline function 'kotlin.collections.forEach' call

        var _iterator__ex2g4s_4 = losers.e1();
        while (_iterator__ex2g4s_4.f1()) {
          var element_4 = _iterator__ex2g4s_4.g1();
          lose$default($this, element_4, '\u3058\u3083\u3093\u3051\u3093');
        }

        break;
      case 'fingers':
        // Inline function 'kotlin.collections.filter' call

        var tmp0_2 = m.w11_1;
        // Inline function 'kotlin.collections.filterTo' call

        var destination_1 = ArrayList.o1();
        var _iterator__ex2g4s_5 = tmp0_2.e1();
        while (_iterator__ex2g4s_5.f1()) {
          var element_5 = _iterator__ex2g4s_5.g1();
          if (living.p1(element_5)) {
            destination_1.r(element_5);
          }
        }

        // Inline function 'kotlin.collections.associateWith' call

        var result_0 = LinkedHashMap.u9(coerceAtLeast(mapCapacity(collectionSizeOrDefault(destination_1, 10)), 16));
        // Inline function 'kotlin.collections.associateWithTo' call

        var _iterator__ex2g4s_6 = destination_1.e1();
        while (_iterator__ex2g4s_6.f1()) {
          var element_6 = _iterator__ex2g4s_6.g1();
          var tmp0_safe_receiver_0 = m.y11_1.g2(element_6);
          var tmp1_elvis_lhs = tmp0_safe_receiver_0 == null ? null : toInt(tmp0_safe_receiver_0);
          var tmp$ret$28 = tmp1_elvis_lhs == null ? 1 + $this.c12_1.m1(5) | 0 : tmp1_elvis_lhs;
          result_0.c4(element_6, tmp$ret$28);
        }

        var picks = result_0;
        var tmp_6 = picks.j2();
        log($this, '\u6307\uFF1A' + joinToString_0(tmp_6, '\u3001', VOID, VOID, VOID, VOID, ArenaGame$finishMini$lambda_0($this)));
        log($this, '\u30EB\u30FC\u30EB\u306F\u2026\u300C' + substringAfter(ensureNotNull(d).z10_1, '\u3002') + '\u300D');
        switch (d.e11_1) {
          case 'odd':
            // Inline function 'kotlin.collections.filter' call

            // Inline function 'kotlin.collections.filterTo' call

            var destination_2 = LinkedHashMap.z3();
            // Inline function 'kotlin.collections.iterator' call

            var _iterator__ex2g4s_7 = picks.j2().e1();
            while (_iterator__ex2g4s_7.f1()) {
              var element_7 = _iterator__ex2g4s_7.g1();
              if ((element_7.d2() % 2 | 0) === 1) {
                destination_2.c4(element_7.c2(), element_7.d2());
              }
            }

            // Inline function 'kotlin.collections.forEach' call

            var _iterator__ex2g4s_8 = destination_2.h2().e1();
            while (_iterator__ex2g4s_8.f1()) {
              var element_8 = _iterator__ex2g4s_8.g1();
              lose$default($this, element_8, '\u5947\u6570');
            }

            break;
          case 'even':
            // Inline function 'kotlin.collections.filter' call

            // Inline function 'kotlin.collections.filterTo' call

            var destination_3 = LinkedHashMap.z3();
            // Inline function 'kotlin.collections.iterator' call

            var _iterator__ex2g4s_9 = picks.j2().e1();
            while (_iterator__ex2g4s_9.f1()) {
              var element_9 = _iterator__ex2g4s_9.g1();
              if ((element_9.d2() % 2 | 0) === 0) {
                destination_3.c4(element_9.c2(), element_9.d2());
              }
            }

            // Inline function 'kotlin.collections.forEach' call

            var _iterator__ex2g4s_10 = destination_3.h2().e1();
            while (_iterator__ex2g4s_10.f1()) {
              var element_10 = _iterator__ex2g4s_10.g1();
              lose$default($this, element_10, '\u5076\u6570');
            }

            break;
          case 'dup':
            // Inline function 'kotlin.collections.filter' call

            // Inline function 'kotlin.collections.filterTo' call

            var destination_4 = LinkedHashMap.z3();
            // Inline function 'kotlin.collections.iterator' call

            var _iterator__ex2g4s_11 = picks.j2().e1();
            while (_iterator__ex2g4s_11.f1()) {
              var element_11 = _iterator__ex2g4s_11.g1();
              // Inline function 'kotlin.collections.component1' call
              var id = element_11.c2();
              // Inline function 'kotlin.collections.component2' call
              var v = element_11.d2();
              var tmp$ret$46;
              $l$block_2: {
                // Inline function 'kotlin.collections.any' call
                if (picks.k1()) {
                  tmp$ret$46 = false;
                  break $l$block_2;
                }
                // Inline function 'kotlin.collections.iterator' call
                var _iterator__ex2g4s_12 = picks.j2().e1();
                while (_iterator__ex2g4s_12.f1()) {
                  var element_12 = _iterator__ex2g4s_12.g1();
                  // Inline function 'kotlin.collections.component1' call
                  var o = element_12.c2();
                  // Inline function 'kotlin.collections.component2' call
                  var w = element_12.d2();
                  if (!(o === id) && w === v) {
                    tmp$ret$46 = true;
                    break $l$block_2;
                  }
                }
                tmp$ret$46 = false;
              }
              if (tmp$ret$46) {
                destination_4.c4(element_11.c2(), element_11.d2());
              }
            }

            // Inline function 'kotlin.collections.forEach' call

            var _iterator__ex2g4s_13 = destination_4.h2().e1();
            while (_iterator__ex2g4s_13.f1()) {
              var element_13 = _iterator__ex2g4s_13.g1();
              lose$default($this, element_13, '\u304B\u3076\u308A');
            }

            break;
          case 'prime':
            var sum_0 = sum(picks.i2());
            if (Companion_getInstance_19().d13(sum_0)) {
              log($this, '\u5408\u8A08' + sum_0 + ' \u306F\u7D20\u6570\uFF01');
              win($this, m.v11_1);
            } else {
              log($this, '\u5408\u8A08' + sum_0 + ' \u306F\u7D20\u6570\u3058\u3083\u306A\u304B\u3063\u305F');
            }

            break;
        }

        break;
      case 'vote':
        // Inline function 'kotlin.collections.filter' call

        var tmp0_3 = m.y11_1.i2();
        // Inline function 'kotlin.collections.filterTo' call

        var destination_5 = ArrayList.o1();
        var _iterator__ex2g4s_14 = tmp0_3.e1();
        while (_iterator__ex2g4s_14.f1()) {
          var element_14 = _iterator__ex2g4s_14.g1();
          if (living.p1(element_14)) {
            destination_5.r(element_14);
          }
        }

        // Inline function 'kotlin.collections.groupingBy' call

        var tmp$ret$59 = new ArenaGame$finishMini$$inlined$groupingBy$1(destination_5);
        var tally = eachCount(tmp$ret$59);
        var tmp5_elvis_lhs = maxOrNull(tally.i2());
        var max = tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs;
        // Inline function 'kotlin.collections.filter' call

        // Inline function 'kotlin.collections.filterTo' call

        var destination_6 = LinkedHashMap.z3();
        // Inline function 'kotlin.collections.iterator' call

        var _iterator__ex2g4s_15 = tally.j2().e1();
        while (_iterator__ex2g4s_15.f1()) {
          var element_15 = _iterator__ex2g4s_15.g1();
          if (element_15.d2() === max) {
            destination_6.c4(element_15.c2(), element_15.d2());
          }
        }

        var tops = destination_6.h2();
        // Inline function 'kotlin.collections.sortedByDescending' call

        var this_0 = tally.j2();
        // Inline function 'kotlin.comparisons.compareByDescending' call

        var tmp_7 = ArenaGame$finishMini$lambda_1;
        var tmp$ret$64 = new sam$kotlin_Comparator$0_1(tmp_7);
        var tmp_8 = sortedWith(this_0, tmp$ret$64);
        // Inline function 'kotlin.text.ifEmpty' call

        var this_1 = joinToString_0(tmp_8, '\u3001', VOID, VOID, VOID, VOID, ArenaGame$finishMini$lambda_2($this));
        var tmp_9;
        // Inline function 'kotlin.text.isEmpty' call

        if (charSequenceLength(this_1) === 0) {
          tmp_9 = '\u306A\u3057';
        } else {
          tmp_9 = this_1;
        }

        var tmp$ret$68 = tmp_9;
        log($this, '\u6295\u7968\uFF1A' + tmp$ret$68);
        if (tops.j1() === 1 && max > 0)
          lose$default($this, first_0(tops), '\u591A\u6570\u6C7A');
        else {
          log($this, '\u540C\u6570\u306A\u306E\u3067\u3060\u308C\u3082\u8CA0\u3051\u306A\u3044');
        }

        break;
      case 'present':
        log($this, '\u30EB\u30FC\u30EB\u306F\u2026\u300C\u300C\u3044\u3089\u306A\u3044\u300D\u3092\u9078\u3093\u3060\u4EBA\u306F\u8CA0\u3051\u300D');
        // Inline function 'kotlin.collections.filter' call

        var tmp0_4 = m.w11_1;
        // Inline function 'kotlin.collections.filterTo' call

        var destination_7 = ArrayList.o1();
        var _iterator__ex2g4s_16 = tmp0_4.e1();
        while (_iterator__ex2g4s_16.f1()) {
          var element_16 = _iterator__ex2g4s_16.g1();
          if (living.p1(element_16) && !(m.y11_1.g2(element_16) === 'want')) {
            destination_7.r(element_16);
          }
        }

        var no = destination_7;
        if (no.k1()) {
          log($this, '\u5168\u54E1\u307B\u3057\u304C\u3063\u305F\uFF01');
        } else {
          // Inline function 'kotlin.collections.forEach' call
          var _iterator__ex2g4s_17 = no.e1();
          while (_iterator__ex2g4s_17.f1()) {
            var element_17 = _iterator__ex2g4s_17.g1();
            lose$default($this, element_17, m.y11_1.g2(element_17) == null ? '\u7B54\u3048\u306A\u304B\u3063\u305F' : '\u3044\u3089\u306A\u3044');
          }
        }

        break;
      case 'nose':
        if (compare(m.z11_1, new Long(0, 0)) < 0) {
          log($this, n($this, m.v11_1) + '\u306F\u5408\u56F3\u3092\u3057\u306A\u304B\u3063\u305F');
        } else {
          var must = ensureNotNull(d).e11_1 === 'must';
          // Inline function 'kotlin.collections.filter' call
          var tmp0_5 = m.w11_1;
          // Inline function 'kotlin.collections.filterTo' call
          var destination_8 = ArrayList.o1();
          var _iterator__ex2g4s_18 = tmp0_5.e1();
          while (_iterator__ex2g4s_18.f1()) {
            var element_18 = _iterator__ex2g4s_18.g1();
            if (!(element_18 === m.v11_1) && living.p1(element_18)) {
              destination_8.r(element_18);
            }
          }
          var others = destination_8;
          // Inline function 'kotlin.collections.filter' call
          // Inline function 'kotlin.collections.filterTo' call
          var destination_9 = ArrayList.o1();
          var _iterator__ex2g4s_19 = others.e1();
          while (_iterator__ex2g4s_19.f1()) {
            var element_19 = _iterator__ex2g4s_19.g1();
            var tmp0_safe_receiver_1 = m.y11_1.g2(element_19);
            var tmp1_safe_receiver_0 = tmp0_safe_receiver_1 == null ? null : toLongOrNull(tmp0_safe_receiver_1);
            var tmp_10;
            if (tmp1_safe_receiver_0 == null) {
              tmp_10 = null;
            } else {
              // Inline function 'kotlin.let' call
              tmp_10 = compare(new Long(0, 0), tmp1_safe_receiver_0) <= 0 ? compare(tmp1_safe_receiver_0, new Long(3000, 0)) <= 0 : false;
            }
            if (tmp_10 === true) {
              destination_9.r(element_19);
            }
          }
          var pressed = destination_9;
          if (must) {
            log($this, '\u30EB\u30FC\u30EB\u306F\u2026\u300C3\u79D2\u4EE5\u5185\u306B\u62BC\u3055\u306A\u304B\u3063\u305F\u4EBA\u306F\u8CA0\u3051\u300D');
            // Inline function 'kotlin.collections.forEach' call
            var _iterator__ex2g4s_20 = minus(others, toSet_0(pressed)).e1();
            while (_iterator__ex2g4s_20.f1()) {
              var element_20 = _iterator__ex2g4s_20.g1();
              lose$default($this, element_20, '\u9F3B\u30BF\u30C3\u30C1\u306B\u9045\u308C\u305F');
            }
          } else {
            log($this, '\u30EB\u30FC\u30EB\u306F\u2026\u300C\u62BC\u3057\u3066\u3057\u307E\u3063\u305F\u4EBA\u306F\u8CA0\u3051\u300D');
            // Inline function 'kotlin.collections.filter' call
            // Inline function 'kotlin.collections.filterTo' call
            var destination_10 = ArrayList.o1();
            var _iterator__ex2g4s_21 = others.e1();
            while (_iterator__ex2g4s_21.f1()) {
              var element_21 = _iterator__ex2g4s_21.g1();
              // Inline function 'kotlin.collections.contains' call
              // Inline function 'kotlin.collections.containsKey' call
              var this_2 = m.y11_1;
              if ((isInterface(this_2, KtMap) ? this_2 : THROW_CCE()).e2(element_21)) {
                destination_10.r(element_21);
              }
            }
            // Inline function 'kotlin.collections.forEach' call
            var _iterator__ex2g4s_22 = destination_10.e1();
            while (_iterator__ex2g4s_22.f1()) {
              var element_22 = _iterator__ex2g4s_22.g1();
              lose$default($this, element_22, '\u62BC\u3057\u3066\u3057\u307E\u3063\u305F');
            }
          }
        }

        break;
    }
    if ($this.j12_1.equals(Step_OVER_getInstance()))
      return Unit_instance;
    if (checkEnd($this))
      return Unit_instance;
    if (!seat($this, $this.i12_1).r11_1) {
      beginTurn($this, nextAlive($this, $this.i12_1));
      return Unit_instance;
    }
    endTurn($this);
  }
  var Companion_instance_19;
  function Companion_getInstance_19() {
    if (Companion_instance_19 === VOID)
      new Companion_19();
    return Companion_instance_19;
  }
  function ArenaGame$checkEnd$lambda(this$0) {
    return (a, b) => {
      // Inline function 'kotlin.comparisons.compareValuesBy' call
      var tmp = a === this$0.i12_1 ? 0 : 1;
      var tmp$ret$1 = b === this$0.i12_1 ? 0 : 1;
      return compareValues(tmp, tmp$ret$1);
    };
  }
  function ArenaGame$finishMini$lambda(this$0, $name) {
    return (it) => n(this$0, it.c2()) + '\uFF1A' + $name.g2(it.d2());
  }
  function ArenaGame$finishMini$lambda_0(this$0) {
    return (it) => n(this$0, it.c2()) + ' ' + it.d2() + '\u672C';
  }
  function ArenaGame$finishMini$lambda_1(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = b.d2();
    var tmp$ret$1 = a.d2();
    return compareValues(tmp, tmp$ret$1);
  }
  function ArenaGame$finishMini$lambda_2(this$0) {
    return (it) => n(this$0, it.c2()) + ' ' + it.d2() + '\u7968';
  }
  function Step_TURN_getInstance() {
    Step_initEntries();
    return Step_TURN_instance;
  }
  function Step_MINI_getInstance() {
    Step_initEntries();
    return Step_MINI_instance;
  }
  function Step_OVER_getInstance() {
    Step_initEntries();
    return Step_OVER_instance;
  }
  var Phase_LOBBY_instance;
  var Phase_WW_REVEAL_instance;
  var Phase_WW_TALK_instance;
  var Phase_WW_VOTE_instance;
  var Phase_WW_GUESS_instance;
  var Phase_WW_RESULT_instance;
  var Phase_NG_PLAY_instance;
  var Phase_NG_RESULT_instance;
  var Phase_SYNC_ANSWER_instance;
  var Phase_SYNC_REVEAL_instance;
  var Phase_GUESS_PLAY_instance;
  var Phase_GUESS_RESULT_instance;
  var Phase_Q_VOTE_instance;
  var Phase_Q_REVEAL_instance;
  var Phase_ARENA_instance;
  var Phase_ARENA_RESULT_instance;
  var Phase_AD_BREAK_instance;
  var Phase_entriesInitialized;
  function Phase_initEntries() {
    if (Phase_entriesInitialized)
      return Unit_instance;
    Phase_entriesInitialized = true;
    Phase_LOBBY_instance = new Phase('LOBBY', 0);
    Phase_WW_REVEAL_instance = new Phase('WW_REVEAL', 1);
    Phase_WW_TALK_instance = new Phase('WW_TALK', 2);
    Phase_WW_VOTE_instance = new Phase('WW_VOTE', 3);
    Phase_WW_GUESS_instance = new Phase('WW_GUESS', 4);
    Phase_WW_RESULT_instance = new Phase('WW_RESULT', 5);
    Phase_NG_PLAY_instance = new Phase('NG_PLAY', 6);
    Phase_NG_RESULT_instance = new Phase('NG_RESULT', 7);
    Phase_SYNC_ANSWER_instance = new Phase('SYNC_ANSWER', 8);
    Phase_SYNC_REVEAL_instance = new Phase('SYNC_REVEAL', 9);
    Phase_GUESS_PLAY_instance = new Phase('GUESS_PLAY', 10);
    Phase_GUESS_RESULT_instance = new Phase('GUESS_RESULT', 11);
    Phase_Q_VOTE_instance = new Phase('Q_VOTE', 12);
    Phase_Q_REVEAL_instance = new Phase('Q_REVEAL', 13);
    Phase_ARENA_instance = new Phase('ARENA', 14);
    Phase_ARENA_RESULT_instance = new Phase('ARENA_RESULT', 15);
    Phase_AD_BREAK_instance = new Phase('AD_BREAK', 16);
  }
  var AfterAd_NEXT_ROUND_instance;
  var AfterAd_LOBBY_instance;
  var AfterAd_entriesInitialized;
  function AfterAd_initEntries() {
    if (AfterAd_entriesInitialized)
      return Unit_instance;
    AfterAd_entriesInitialized = true;
    AfterAd_NEXT_ROUND_instance = new AfterAd('NEXT_ROUND', 0);
    AfterAd_LOBBY_instance = new AfterAd('LOBBY', 1);
  }
  var Full_instance;
  function Full_getInstance() {
    return Full_instance;
  }
  var InGame_instance;
  function InGame_getInstance() {
    return InGame_instance;
  }
  function _get_isSpy__g08dgh($this) {
    return $this.c14_1.equals(GameType_SPY_getInstance());
  }
  function changed($this) {
    $this.z13_1 = $this.z13_1 + 1 | 0;
  }
  function uniqueName($this, raw) {
    // Inline function 'kotlin.text.trim' call
    var tmp$ret$0 = toString_1(trim(isCharSequence(raw) ? raw : THROW_CCE()));
    // Inline function 'kotlin.text.ifBlank' call
    var this_0 = take_0(replace(tmp$ret$0, '\n', ' '), 10);
    var tmp;
    if (isBlank(this_0)) {
      tmp = '\u30D7\u30EC\u30A4\u30E4\u30FC' + ($this.x13_1.j1() + 1 | 0);
    } else {
      tmp = this_0;
    }
    var base = tmp;
    var name = base;
    var n = 2;
    $l$loop: while (true) {
      var tmp0 = $this.x13_1;
      var tmp$ret$3;
      $l$block_0: {
        // Inline function 'kotlin.collections.any' call
        var tmp_0;
        if (isInterface(tmp0, Collection)) {
          tmp_0 = tmp0.k1();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$3 = false;
          break $l$block_0;
        }
        var _iterator__ex2g4s = tmp0.e1();
        while (_iterator__ex2g4s.f1()) {
          var element = _iterator__ex2g4s.g1();
          if (element.i15_1 === name) {
            tmp$ret$3 = true;
            break $l$block_0;
          }
        }
        tmp$ret$3 = false;
      }
      if (!tmp$ret$3) {
        break $l$loop;
      }
      var _unary__edvuaz = n;
      n = _unary__edvuaz + 1 | 0;
      name = base + _unary__edvuaz;
    }
    return name;
  }
  function ids($this) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = $this.x13_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList.d1(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.e1();
    while (_iterator__ex2g4s.f1()) {
      var item = _iterator__ex2g4s.g1();
      var tmp$ret$0 = item.h15_1;
      destination.r(tmp$ret$0);
    }
    return destination;
  }
  function isResult($this) {
    return setOf_0([Phase_WW_RESULT_getInstance(), Phase_NG_RESULT_getInstance(), Phase_SYNC_REVEAL_getInstance(), Phase_GUESS_RESULT_getInstance(), Phase_Q_REVEAL_getInstance(), Phase_ARENA_RESULT_getInstance()]).p1($this.a14_1);
  }
  function startRound($this) {
    // Inline function 'kotlin.let' call
    var it = $this.y13_1.k15_1;
    var g = $this.t13_1 && !it.y15_1 ? GameType_WORD_WOLF_getInstance() : it;
    if ($this.x13_1.j1() < g.z15_1)
      return Unit_instance;
    $this.c14_1 = g;
    switch (g.l2_1) {
      case 1:
      case 3:
        startWw($this);
        break;
      case 2:
        startNg($this);
        break;
      case 4:
        startSync($this);
        break;
      case 5:
        startGuess($this);
        break;
      case 6:
        startQ($this);
        break;
      case 0:
        startArena($this);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
  }
  function toLobby($this) {
    $this.a14_1 = Phase_LOBBY_getInstance();
    $this.b14_1 = null;
    changed($this);
  }
  function addScore($this, id, n) {
    if (ids($this).p1(id)) {
      var tmp0 = $this.d14_1;
      var tmp0_elvis_lhs = $this.d14_1.g2(id);
      // Inline function 'kotlin.collections.set' call
      var value = (tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs) + n | 0;
      tmp0.c4(id, value);
    }
  }
  function scoreList($this) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = $this.x13_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList.d1(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.e1();
    while (_iterator__ex2g4s.f1()) {
      var item = _iterator__ex2g4s.g1();
      var tmp0_elvis_lhs = $this.d14_1.g2(item.h15_1);
      var tmp$ret$0 = new VoteCount(item.h15_1, tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs);
      destination.r(tmp$ret$0);
    }
    // Inline function 'kotlin.collections.sortedByDescending' call
    // Inline function 'kotlin.comparisons.compareByDescending' call
    var tmp = Engine$scoreList$lambda;
    var tmp$ret$3 = new sam$kotlin_Comparator$0_2(tmp);
    return sortedWith(destination, tmp$ret$3);
  }
  function startWw($this) {
    if (_get_isSpy__g08dgh($this)) {
      $this.e14_1 = $this.u13_1.j16($this.v13_1);
      $this.f14_1 = '';
    } else {
      var pair = $this.u13_1.f16($this.y13_1.n15_1, $this.v13_1);
      var _destruct__k2r9zo = $this.v13_1.df() ? to(pair.h16_1, pair.i16_1) : to(pair.i16_1, pair.h16_1);
      var cw = _destruct__k2r9zo.oe();
      var ww = _destruct__k2r9zo.pe();
      $this.e14_1 = cw;
      $this.f14_1 = ww;
    }
    var n = $this.x13_1.j1();
    var wanted = $this.y13_1.m15_1 === 0 ? n >= 7 ? 2 : 1 : $this.y13_1.m15_1;
    // Inline function 'kotlin.comparisons.maxOf' call
    var b = (n - 1 | 0) / 2 | 0;
    var tmp$ret$0 = Math.max(1, b);
    var count = coerceIn(wanted, 1, tmp$ret$0);
    $this.g14_1 = toSet_0(take(shuffled(ids($this), $this.v13_1), count));
    $this.h14_1.j4();
    $this.i14_1.j4();
    $this.k14_1 = false;
    $this.l14_1 = null;
    $this.m14_1 = null;
    $this.n14_1 = emptyList();
    $this.o14_1 = emptyList();
    $this.j14_1 = ids($this);
    $this.a14_1 = Phase_WW_REVEAL_getInstance();
    $this.b14_1 = null;
    changed($this);
  }
  function startTalk($this) {
    $this.a14_1 = Phase_WW_TALK_getInstance();
    $this.b14_1 = add($this.w13_1(), multiply(numberToLong($this.y13_1.l15_1), new Long(1000, 0)));
    changed($this);
  }
  function startVote($this) {
    $this.i14_1.j4();
    $this.j14_1 = ids($this);
    $this.k14_1 = false;
    $this.a14_1 = Phase_WW_VOTE_getInstance();
    $this.b14_1 = null;
    changed($this);
  }
  function resolveVotes($this) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = $this.j14_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList.d1(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.e1();
    while (_iterator__ex2g4s.f1()) {
      var item = _iterator__ex2g4s.g1();
      var tmp0 = $this.i14_1.i2();
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlin.collections.count' call
        var tmp;
        if (isInterface(tmp0, Collection)) {
          tmp = tmp0.k1();
        } else {
          tmp = false;
        }
        if (tmp) {
          tmp$ret$0 = 0;
          break $l$block;
        }
        var count = 0;
        var _iterator__ex2g4s_0 = tmp0.e1();
        while (_iterator__ex2g4s_0.f1()) {
          var element = _iterator__ex2g4s_0.g1();
          if (element === item) {
            count = count + 1 | 0;
            checkCountOverflow(count);
          }
        }
        tmp$ret$0 = count;
      }
      var tmp$ret$2 = new VoteCount(item, tmp$ret$0);
      destination.r(tmp$ret$2);
    }
    var tally = destination;
    var tmp_0 = $this;
    // Inline function 'kotlin.collections.sortedByDescending' call
    // Inline function 'kotlin.comparisons.compareByDescending' call
    var tmp_1 = Engine$resolveVotes$lambda;
    var tmp$ret$5 = new sam$kotlin_Comparator$0_3(tmp_1);
    tmp_0.n14_1 = sortedWith(tally, tmp$ret$5);
    var tmp$ret$7;
    $l$block_0: {
      // Inline function 'kotlin.collections.maxOfOrNull' call
      var iterator = tally.e1();
      if (!iterator.f1()) {
        tmp$ret$7 = null;
        break $l$block_0;
      }
      var maxValue = iterator.g1().l16_1;
      while (iterator.f1()) {
        var v = iterator.g1().l16_1;
        if (compareTo(maxValue, v) < 0) {
          maxValue = v;
        }
      }
      tmp$ret$7 = maxValue;
    }
    var tmp0_elvis_lhs = tmp$ret$7;
    var max = tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs;
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_0 = ArrayList.o1();
    var _iterator__ex2g4s_1 = tally.e1();
    while (_iterator__ex2g4s_1.f1()) {
      var element_0 = _iterator__ex2g4s_1.g1();
      if (element_0.l16_1 === max && max > 0) {
        destination_0.r(element_0);
      }
    }
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_1 = ArrayList.d1(collectionSizeOrDefault(destination_0, 10));
    var _iterator__ex2g4s_2 = destination_0.e1();
    while (_iterator__ex2g4s_2.f1()) {
      var item_0 = _iterator__ex2g4s_2.g1();
      var tmp$ret$13 = item_0.k16_1;
      destination_1.r(tmp$ret$13);
    }
    var tops = destination_1;
    if (tops.j1() === 1) {
      accusedIs($this, tops.l1(0));
    } else if (!$this.k14_1 && tops.j1() >= 2) {
      $this.j14_1 = tops;
      $this.i14_1.j4();
      $this.k14_1 = true;
      changed($this);
    } else {
      finishWw$default($this, Team_WOLF_getInstance(), ResultReason_TIE_getInstance());
    }
  }
  function accusedIs($this, id) {
    $this.m14_1 = id;
    if ($this.g14_1.p1(id)) {
      if (_get_isSpy__g08dgh($this))
        $this.o14_1 = $this.u13_1.m16($this.e14_1, 12, $this.v13_1);
      $this.a14_1 = Phase_WW_GUESS_getInstance();
      $this.b14_1 = null;
      changed($this);
    } else {
      finishWw$default($this, Team_WOLF_getInstance(), ResultReason_CITIZEN_ACCUSED_getInstance());
    }
  }
  function finishWw($this, winner, reason, spyGuess) {
    $this.l14_1 = new WwResult($this.e14_1, $this.f14_1, toList_0($this.g14_1), $this.m14_1, $this.n14_1, winner, reason, null, spyGuess);
    $this.d15_1 = $this.d15_1 + 1 | 0;
    $this.a14_1 = Phase_WW_RESULT_getInstance();
    $this.b14_1 = null;
    changed($this);
  }
  function finishWw$default($this, winner, reason, spyGuess, $super) {
    spyGuess = spyGuess === VOID ? null : spyGuess;
    return finishWw($this, winner, reason, spyGuess);
  }
  function startNg($this) {
    var words = $this.u13_1.n16($this.x13_1.j1(), $this.y13_1.p15_1, $this.v13_1);
    $this.p14_1.j4();
    $this.q14_1.j4();
    $this.r14_1 = emptyList();
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index = 0;
    var _iterator__ex2g4s = $this.x13_1.e1();
    while (_iterator__ex2g4s.f1()) {
      var item = _iterator__ex2g4s.g1();
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      var i = checkIndexOverflow(_unary__edvuaz);
      var tmp0 = $this.p14_1;
      var tmp2 = item.h15_1;
      // Inline function 'kotlin.collections.set' call
      var value = words.l1(i % words.j1() | 0);
      tmp0.c4(tmp2, value);
    }
    $this.a14_1 = Phase_NG_PLAY_getInstance();
    $this.b14_1 = add($this.w13_1(), multiply(numberToLong($this.y13_1.o15_1), new Long(1000, 0)));
    changed($this);
  }
  function alive_0($this) {
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = $this.p14_1.h2();
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList.o1();
    var _iterator__ex2g4s = tmp0.e1();
    while (_iterator__ex2g4s.f1()) {
      var element = _iterator__ex2g4s.g1();
      // Inline function 'kotlin.collections.contains' call
      // Inline function 'kotlin.collections.containsKey' call
      var this_0 = $this.q14_1;
      if (!(isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).e2(element)) {
        destination.r(element);
      }
    }
    return destination;
  }
  function finishNg($this) {
    $this.r14_1 = alive_0($this);
    $this.d15_1 = $this.d15_1 + 1 | 0;
    $this.a14_1 = Phase_NG_RESULT_getInstance();
    $this.b14_1 = null;
    changed($this);
  }
  function startSync($this) {
    $this.s14_1 = $this.u13_1.o16($this.v13_1);
    $this.t14_1.j4();
    $this.u14_1 = null;
    $this.a14_1 = Phase_SYNC_ANSWER_getInstance();
    $this.b14_1 = $this.y13_1.q15_1 > 0 ? add($this.w13_1(), multiply(numberToLong($this.y13_1.q15_1), new Long(1000, 0))) : null;
    changed($this);
  }
  function revealSync($this) {
    // Inline function 'kotlin.collections.groupBy' call
    var tmp0 = $this.t14_1.j2();
    // Inline function 'kotlin.collections.groupByTo' call
    var destination = LinkedHashMap.z3();
    var _iterator__ex2g4s = tmp0.e1();
    while (_iterator__ex2g4s.f1()) {
      var element = _iterator__ex2g4s.g1();
      var key = Companion_instance_20.p16(element.d2());
      // Inline function 'kotlin.collections.getOrPut' call
      var value = destination.g2(key);
      var tmp;
      if (value == null) {
        var answer = ArrayList.o1();
        destination.c4(key, answer);
        tmp = answer;
      } else {
        tmp = value;
      }
      var list = tmp;
      list.r(element);
    }
    // Inline function 'kotlin.collections.map' call
    var this_0 = destination.i2();
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList.d1(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s_0 = this_0.e1();
    while (_iterator__ex2g4s_0.f1()) {
      var item = _iterator__ex2g4s_0.g1();
      var tmp_0 = first(item).d2();
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_1 = ArrayList.d1(collectionSizeOrDefault(item, 10));
      var _iterator__ex2g4s_1 = item.e1();
      while (_iterator__ex2g4s_1.f1()) {
        var item_0 = _iterator__ex2g4s_1.g1();
        var tmp$ret$5 = item_0.c2();
        destination_1.r(tmp$ret$5);
      }
      var tmp$ret$8 = new SyncGroup(tmp_0, destination_1);
      destination_0.r(tmp$ret$8);
    }
    var tmp_1 = destination_0;
    // Inline function 'kotlin.comparisons.compareByDescending' call
    var tmp_2 = Engine$revealSync$lambda;
    // Inline function 'kotlin.comparisons.thenBy' call
    var this_1 = new sam$kotlin_Comparator$0_4(tmp_2);
    var tmp_3 = Engine$revealSync$lambda_0(this_1);
    var tmp$ret$12 = new sam$kotlin_Comparator$0_4(tmp_3);
    var groups = sortedWith(tmp_1, tmp$ret$12);
    // Inline function 'kotlin.collections.map' call
    var this_2 = $this.x13_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination_2 = ArrayList.d1(collectionSizeOrDefault(this_2, 10));
    var _iterator__ex2g4s_2 = this_2.e1();
    while (_iterator__ex2g4s_2.f1()) {
      var item_1 = _iterator__ex2g4s_2.g1();
      var tmp$ret$14;
      $l$block: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var _iterator__ex2g4s_3 = groups.e1();
        while (_iterator__ex2g4s_3.f1()) {
          var element_0 = _iterator__ex2g4s_3.g1();
          if (element_0.r16_1.p1(item_1.h15_1)) {
            tmp$ret$14 = element_0;
            break $l$block;
          }
        }
        tmp$ret$14 = null;
      }
      var tmp0_safe_receiver = tmp$ret$14;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.r16_1;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.j1();
      var size = tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs;
      var tmp$ret$15 = new VoteCount(item_1.h15_1, size >= 2 ? size - 1 | 0 : 0);
      destination_2.r(tmp$ret$15);
    }
    var gained = destination_2;
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_4 = gained.e1();
    while (_iterator__ex2g4s_4.f1()) {
      var element_1 = _iterator__ex2g4s_4.g1();
      addScore($this, element_1.k16_1, element_1.l16_1);
    }
    $this.u14_1 = new SyncReveal($this.s14_1, groups, gained, emptyList());
    $this.d15_1 = $this.d15_1 + 1 | 0;
    $this.a14_1 = Phase_SYNC_REVEAL_getInstance();
    $this.b14_1 = null;
    changed($this);
  }
  function startGuess($this) {
    $this.v14_1 = ($this.v14_1 + 1 | 0) % $this.x13_1.j1() | 0;
    $this.w14_1 = $this.x13_1.l1($this.v14_1).h15_1;
    $this.x14_1 = $this.u13_1.s16($this.v13_1);
    $this.y14_1 = null;
    $this.a14_1 = Phase_GUESS_PLAY_getInstance();
    $this.b14_1 = add($this.w13_1(), multiply(numberToLong($this.y13_1.r15_1), new Long(1000, 0)));
    changed($this);
  }
  function finishGuess($this) {
    $this.d15_1 = $this.d15_1 + 1 | 0;
    $this.a14_1 = Phase_GUESS_RESULT_getInstance();
    $this.b14_1 = null;
    changed($this);
  }
  function startQ($this) {
    $this.z14_1 = $this.u13_1.t16($this.v13_1);
    $this.a15_1.j4();
    $this.a14_1 = Phase_Q_VOTE_getInstance();
    $this.b14_1 = null;
    changed($this);
  }
  function revealQ($this) {
    $this.d15_1 = $this.d15_1 + 1 | 0;
    $this.a14_1 = Phase_Q_REVEAL_getInstance();
    $this.b14_1 = null;
    changed($this);
  }
  function startArena($this) {
    // Inline function 'kotlin.collections.associate' call
    var this_0 = $this.x13_1;
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16);
    // Inline function 'kotlin.collections.associateTo' call
    var destination = LinkedHashMap.u9(capacity);
    var _iterator__ex2g4s = this_0.e1();
    while (_iterator__ex2g4s.f1()) {
      var element = _iterator__ex2g4s.g1();
      // Inline function 'kotlin.collections.plusAssign' call
      var pair = to(element.h15_1, element.i15_1);
      destination.c4(pair.me_1, pair.ne_1);
    }
    var names = destination;
    var tmp = $this;
    var tmp_0 = ids($this);
    tmp.b15_1 = new ArenaGame(tmp_0, Engine$startArena$lambda(names), $this.v13_1, $this.w13_1, $this.y13_1.s15_1, $this.y13_1.t15_1);
    $this.a14_1 = Phase_ARENA_getInstance();
    $this.b14_1 = null;
    changed($this);
    syncArena($this);
  }
  function syncArena($this) {
    var tmp0_elvis_lhs = $this.b15_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var a = tmp;
    if ($this.a14_1.equals(Phase_ARENA_getInstance()) && a.j12_1.equals(Step_OVER_getInstance())) {
      $this.d15_1 = $this.d15_1 + 1 | 0;
      $this.a14_1 = Phase_ARENA_RESULT_getInstance();
      $this.b14_1 = null;
      changed($this);
    }
  }
  function adDue($this) {
    return $this.d15_1 >= 1 && compare(subtract($this.w13_1(), $this.c15_1), new Long(180000, 0)) >= 0;
  }
  function startAdBreak($this, after) {
    $this.e15_1 = $this.e15_1 + 1 | 0;
    $this.g15_1 = after;
    $this.f15_1.j4();
    var tmp0 = $this.f15_1;
    // Inline function 'kotlin.collections.plusAssign' call
    var elements = $this.t13_1 ? listOfNotNull($this.u16()) : ids($this);
    addAll(tmp0, elements);
    $this.a14_1 = Phase_AD_BREAK_getInstance();
    $this.b14_1 = add($this.w13_1(), new Long(25000, 0));
    changed($this);
  }
  function finishAdBreak($this) {
    $this.c15_1 = $this.w13_1();
    $this.d15_1 = 0;
    $this.f15_1.j4();
    if ($this.g15_1.equals(AfterAd_NEXT_ROUND_getInstance())) {
      startRound($this);
    } else {
      toLobby($this);
    }
    if ($this.a14_1.equals(Phase_AD_BREAK_getInstance())) {
      toLobby($this);
    }
  }
  function wordOf($this, id) {
    return $this.g14_1.p1(id) ? $this.f14_1 : $this.e14_1;
  }
  function ngEntries($this, hideFor) {
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = $this.x13_1;
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList.o1();
    var _iterator__ex2g4s = tmp0.e1();
    while (_iterator__ex2g4s.f1()) {
      var element = _iterator__ex2g4s.g1();
      var tmp0_0 = $this.p14_1;
      // Inline function 'kotlin.collections.contains' call
      // Inline function 'kotlin.collections.containsKey' call
      var key = element.h15_1;
      if ((isInterface(tmp0_0, KtMap) ? tmp0_0 : THROW_CCE()).e2(key)) {
        destination.r(element);
      }
    }
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList.d1(collectionSizeOrDefault(destination, 10));
    var _iterator__ex2g4s_0 = destination.e1();
    while (_iterator__ex2g4s_0.f1()) {
      var item = _iterator__ex2g4s_0.g1();
      var tmp = item.h15_1 === hideFor ? null : $this.p14_1.g2(item.h15_1);
      var tmp0_1 = $this.q14_1;
      // Inline function 'kotlin.collections.contains' call
      // Inline function 'kotlin.collections.containsKey' call
      var key_0 = item.h15_1;
      var tmp_0 = (isInterface(tmp0_1, KtMap) ? tmp0_1 : THROW_CCE()).e2(key_0);
      var tmp0_elvis_lhs = $this.q14_1.g2(item.h15_1);
      var tmp$ret$7 = new NgEntry(item.h15_1, tmp, tmp_0, tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs);
      destination_0.r(tmp$ret$7);
    }
    return destination_0;
  }
  var Companion_instance_20;
  function Companion_getInstance_20() {
    return Companion_instance_20;
  }
  function Engine$join$lambda($id) {
    return (it) => it.h15_1 === $id;
  }
  function Engine$leave$lambda($id) {
    return (it) => it.h15_1 === $id;
  }
  function Engine$leave$lambda_0($id) {
    return (it) => it.d2() === $id;
  }
  function Engine$leave$lambda_1($id) {
    return (it) => it.d2() === $id;
  }
  function Engine$scoreList$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = b.l16_1;
    var tmp$ret$1 = a.l16_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function Engine$resolveVotes$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = b.l16_1;
    var tmp$ret$1 = a.l16_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function Engine$revealSync$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = b.r16_1.j1();
    var tmp$ret$1 = a.r16_1.j1();
    return compareValues(tmp, tmp$ret$1);
  }
  function Engine$revealSync$lambda_0($this) {
    return (a, b) => {
      var previousCompare = $this.compare(a, b);
      var tmp;
      if (!(previousCompare === 0)) {
        tmp = previousCompare;
      } else {
        // Inline function 'kotlin.comparisons.compareValuesBy' call
        var tmp_0 = a.q16_1;
        var tmp$ret$1 = b.q16_1;
        tmp = compareValues(tmp_0, tmp$ret$1);
      }
      return tmp;
    };
  }
  function Engine$startArena$lambda($names) {
    return (id) => {
      var tmp0_elvis_lhs = $names.g2(id);
      return tmp0_elvis_lhs == null ? '?' : tmp0_elvis_lhs;
    };
  }
  function Engine$viewFor$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = b.l16_1;
    var tmp$ret$1 = a.l16_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function Phase_LOBBY_getInstance() {
    Phase_initEntries();
    return Phase_LOBBY_instance;
  }
  function Phase_WW_REVEAL_getInstance() {
    Phase_initEntries();
    return Phase_WW_REVEAL_instance;
  }
  function Phase_WW_TALK_getInstance() {
    Phase_initEntries();
    return Phase_WW_TALK_instance;
  }
  function Phase_WW_VOTE_getInstance() {
    Phase_initEntries();
    return Phase_WW_VOTE_instance;
  }
  function Phase_WW_GUESS_getInstance() {
    Phase_initEntries();
    return Phase_WW_GUESS_instance;
  }
  function Phase_WW_RESULT_getInstance() {
    Phase_initEntries();
    return Phase_WW_RESULT_instance;
  }
  function Phase_NG_PLAY_getInstance() {
    Phase_initEntries();
    return Phase_NG_PLAY_instance;
  }
  function Phase_NG_RESULT_getInstance() {
    Phase_initEntries();
    return Phase_NG_RESULT_instance;
  }
  function Phase_SYNC_ANSWER_getInstance() {
    Phase_initEntries();
    return Phase_SYNC_ANSWER_instance;
  }
  function Phase_SYNC_REVEAL_getInstance() {
    Phase_initEntries();
    return Phase_SYNC_REVEAL_instance;
  }
  function Phase_GUESS_PLAY_getInstance() {
    Phase_initEntries();
    return Phase_GUESS_PLAY_instance;
  }
  function Phase_GUESS_RESULT_getInstance() {
    Phase_initEntries();
    return Phase_GUESS_RESULT_instance;
  }
  function Phase_Q_VOTE_getInstance() {
    Phase_initEntries();
    return Phase_Q_VOTE_instance;
  }
  function Phase_Q_REVEAL_getInstance() {
    Phase_initEntries();
    return Phase_Q_REVEAL_instance;
  }
  function Phase_ARENA_getInstance() {
    Phase_initEntries();
    return Phase_ARENA_instance;
  }
  function Phase_ARENA_RESULT_getInstance() {
    Phase_initEntries();
    return Phase_ARENA_RESULT_instance;
  }
  function Phase_AD_BREAK_getInstance() {
    Phase_initEntries();
    return Phase_AD_BREAK_instance;
  }
  function AfterAd_NEXT_ROUND_getInstance() {
    AfterAd_initEntries();
    return AfterAd_NEXT_ROUND_instance;
  }
  function AfterAd_LOBBY_getInstance() {
    AfterAd_initEntries();
    return AfterAd_LOBBY_instance;
  }
  function get_WireJson() {
    _init_properties_Protocol_kt__345mx4();
    return WireJson;
  }
  var WireJson;
  var GameType_ARENA_instance;
  var GameType_WORD_WOLF_instance;
  var GameType_NG_WORD_instance;
  var GameType_SPY_instance;
  var GameType_SYNC_instance;
  var GameType_GUESS_instance;
  var GameType_QUESTION_instance;
  function values_2() {
    return [GameType_ARENA_getInstance(), GameType_WORD_WOLF_getInstance(), GameType_NG_WORD_getInstance(), GameType_SPY_getInstance(), GameType_SYNC_getInstance(), GameType_GUESS_getInstance(), GameType_QUESTION_getInstance()];
  }
  function get_entries_2() {
    if ($ENTRIES_2 == null)
      $ENTRIES_2 = enumEntries(values_2());
    return $ENTRIES_2;
  }
  var GameType_entriesInitialized;
  function GameType_initEntries() {
    if (GameType_entriesInitialized)
      return Unit_instance;
    GameType_entriesInitialized = true;
    GameType_ARENA_instance = new GameType('ARENA', 0, '\u306A\u3093\u3067\u3082\u30A2\u30EA\u30FC\u30CA', '\u30A2\u30EA\u30FC\u30CA', false, 2);
    GameType_WORD_WOLF_instance = new GameType('WORD_WOLF', 1, '\u30EF\u30FC\u30C9\u30A6\u30EB\u30D5', '\u30EF\u30FC\u30C9\u30A6\u30EB\u30D5', true, 3);
    GameType_NG_WORD_instance = new GameType('NG_WORD', 2, 'NG\u30EF\u30FC\u30C9', 'NG\u30EF\u30FC\u30C9', false, 3);
    GameType_SPY_instance = new GameType('SPY', 3, '\u30B9\u30D1\u30A4\u306F\u3060\u308C\u3060', '\u30B9\u30D1\u30A4', true, 3);
    GameType_SYNC_instance = new GameType('SYNC', 4, '\u307F\u3093\u306A\u3067\u30B7\u30F3\u30AF\u30ED', '\u30B7\u30F3\u30AF\u30ED', false, 2);
    GameType_GUESS_instance = new GameType('GUESS', 5, '\u8CEA\u554F\u3067\u5F53\u3066\u308D', '\u8CEA\u554F\u5F53\u3066', true, 2);
    GameType_QUESTION_instance = new GameType('QUESTION', 6, '\u3076\u3063\u3061\u3083\u3051\u8CEA\u554F', '\u3076\u3063\u3061\u3083\u3051', false, 3);
  }
  var $ENTRIES_2;
  var NgLevel_NORMAL_instance;
  var NgLevel_HARD_instance;
  var NgLevel_MIX_instance;
  function values_3() {
    return [NgLevel_NORMAL_getInstance(), NgLevel_HARD_getInstance(), NgLevel_MIX_getInstance()];
  }
  var NgLevel_entriesInitialized;
  function NgLevel_initEntries() {
    if (NgLevel_entriesInitialized)
      return Unit_instance;
    NgLevel_entriesInitialized = true;
    NgLevel_NORMAL_instance = new NgLevel('NORMAL', 0);
    NgLevel_HARD_instance = new NgLevel('HARD', 1);
    NgLevel_MIX_instance = new NgLevel('MIX', 2);
  }
  var Team_CITIZEN_instance;
  var Team_WOLF_instance;
  function values_4() {
    return [Team_CITIZEN_getInstance(), Team_WOLF_getInstance()];
  }
  var Team_entriesInitialized;
  function Team_initEntries() {
    if (Team_entriesInitialized)
      return Unit_instance;
    Team_entriesInitialized = true;
    Team_CITIZEN_instance = new Team('CITIZEN', 0);
    Team_WOLF_instance = new Team('WOLF', 1);
  }
  var ResultReason_WOLF_CAUGHT_instance;
  var ResultReason_WOLF_GUESSED_instance;
  var ResultReason_CITIZEN_ACCUSED_instance;
  var ResultReason_TIE_instance;
  function values_5() {
    return [ResultReason_WOLF_CAUGHT_getInstance(), ResultReason_WOLF_GUESSED_getInstance(), ResultReason_CITIZEN_ACCUSED_getInstance(), ResultReason_TIE_getInstance()];
  }
  var ResultReason_entriesInitialized;
  function ResultReason_initEntries() {
    if (ResultReason_entriesInitialized)
      return Unit_instance;
    ResultReason_entriesInitialized = true;
    ResultReason_WOLF_CAUGHT_instance = new ResultReason('WOLF_CAUGHT', 0);
    ResultReason_WOLF_GUESSED_instance = new ResultReason('WOLF_GUESSED', 1);
    ResultReason_CITIZEN_ACCUSED_instance = new ResultReason('CITIZEN_ACCUSED', 2);
    ResultReason_TIE_instance = new ResultReason('TIE', 3);
  }
  var Companion_instance_21;
  function Companion_getInstance_21() {
    return Companion_instance_21;
  }
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance === VOID)
      new $serializer();
    return $serializer_instance;
  }
  function Settings$Companion$$childSerializers$_anonymous__wc4n3t() {
    return createSimpleEnumSerializer('com.zen.partygame.game.GameType', values_2());
  }
  function Settings$Companion$$childSerializers$_anonymous__wc4n3t_0() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  function Settings$Companion$$childSerializers$_anonymous__wc4n3t_1() {
    return createSimpleEnumSerializer('com.zen.partygame.game.NgLevel', values_3());
  }
  var Companion_instance_22;
  function Companion_getInstance_22() {
    if (Companion_instance_22 === VOID)
      new Companion_22();
    return Companion_instance_22;
  }
  var $serializer_instance_0;
  function $serializer_getInstance_0() {
    if ($serializer_instance_0 === VOID)
      new $serializer_0();
    return $serializer_instance_0;
  }
  var Companion_instance_23;
  function Companion_getInstance_23() {
    return Companion_instance_23;
  }
  var $serializer_instance_1;
  function $serializer_getInstance_1() {
    if ($serializer_instance_1 === VOID)
      new $serializer_1();
    return $serializer_instance_1;
  }
  function Intent$Start$_anonymous__3h909p() {
    var tmp = Start_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = [];
    return ObjectSerializer.cp('start', tmp, tmp$ret$2);
  }
  var Companion_instance_24;
  function Companion_getInstance_24() {
    return Companion_instance_24;
  }
  var $serializer_instance_2;
  function $serializer_getInstance_2() {
    if ($serializer_instance_2 === VOID)
      new $serializer_2();
    return $serializer_instance_2;
  }
  var Companion_instance_25;
  function Companion_getInstance_25() {
    return Companion_instance_25;
  }
  var $serializer_instance_3;
  function $serializer_getInstance_3() {
    if ($serializer_instance_3 === VOID)
      new $serializer_3();
    return $serializer_instance_3;
  }
  function Intent$EndTalk$_anonymous__c6bu7c() {
    var tmp = EndTalk_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = [];
    return ObjectSerializer.cp('endTalk', tmp, tmp$ret$2);
  }
  var Companion_instance_26;
  function Companion_getInstance_26() {
    return Companion_instance_26;
  }
  var $serializer_instance_4;
  function $serializer_getInstance_4() {
    if ($serializer_instance_4 === VOID)
      new $serializer_4();
    return $serializer_instance_4;
  }
  function Intent$CloseVote$_anonymous__x13rb7() {
    var tmp = CloseVote_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = [];
    return ObjectSerializer.cp('closeVote', tmp, tmp$ret$2);
  }
  var Companion_instance_27;
  function Companion_getInstance_27() {
    return Companion_instance_27;
  }
  var $serializer_instance_5;
  function $serializer_getInstance_5() {
    if ($serializer_instance_5 === VOID)
      new $serializer_5();
    return $serializer_instance_5;
  }
  var Companion_instance_28;
  function Companion_getInstance_28() {
    return Companion_instance_28;
  }
  var $serializer_instance_6;
  function $serializer_getInstance_6() {
    if ($serializer_instance_6 === VOID)
      new $serializer_6();
    return $serializer_instance_6;
  }
  var Companion_instance_29;
  function Companion_getInstance_29() {
    return Companion_instance_29;
  }
  var $serializer_instance_7;
  function $serializer_getInstance_7() {
    if ($serializer_instance_7 === VOID)
      new $serializer_7();
    return $serializer_instance_7;
  }
  var Companion_instance_30;
  function Companion_getInstance_30() {
    return Companion_instance_30;
  }
  var $serializer_instance_8;
  function $serializer_getInstance_8() {
    if ($serializer_instance_8 === VOID)
      new $serializer_8();
    return $serializer_instance_8;
  }
  function Intent$EndNg$_anonymous__unkdth() {
    var tmp = EndNg_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = [];
    return ObjectSerializer.cp('endNg', tmp, tmp$ret$2);
  }
  var Companion_instance_31;
  function Companion_getInstance_31() {
    return Companion_instance_31;
  }
  var $serializer_instance_9;
  function $serializer_getInstance_9() {
    if ($serializer_instance_9 === VOID)
      new $serializer_9();
    return $serializer_instance_9;
  }
  var Companion_instance_32;
  function Companion_getInstance_32() {
    return Companion_instance_32;
  }
  var $serializer_instance_10;
  function $serializer_getInstance_10() {
    if ($serializer_instance_10 === VOID)
      new $serializer_10();
    return $serializer_instance_10;
  }
  var Companion_instance_33;
  function Companion_getInstance_33() {
    return Companion_instance_33;
  }
  var $serializer_instance_11;
  function $serializer_getInstance_11() {
    if ($serializer_instance_11 === VOID)
      new $serializer_11();
    return $serializer_instance_11;
  }
  function Intent$GuessGiveUp$_anonymous__zguq7w() {
    var tmp = GuessGiveUp_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = [];
    return ObjectSerializer.cp('guessGiveUp', tmp, tmp$ret$2);
  }
  var Companion_instance_34;
  function Companion_getInstance_34() {
    return Companion_instance_34;
  }
  var $serializer_instance_12;
  function $serializer_getInstance_12() {
    if ($serializer_instance_12 === VOID)
      new $serializer_12();
    return $serializer_instance_12;
  }
  var Companion_instance_35;
  function Companion_getInstance_35() {
    return Companion_instance_35;
  }
  var $serializer_instance_13;
  function $serializer_getInstance_13() {
    if ($serializer_instance_13 === VOID)
      new $serializer_13();
    return $serializer_instance_13;
  }
  var Companion_instance_36;
  function Companion_getInstance_36() {
    return Companion_instance_36;
  }
  var $serializer_instance_14;
  function $serializer_getInstance_14() {
    if ($serializer_instance_14 === VOID)
      new $serializer_14();
    return $serializer_instance_14;
  }
  var Companion_instance_37;
  function Companion_getInstance_37() {
    return Companion_instance_37;
  }
  var $serializer_instance_15;
  function $serializer_getInstance_15() {
    if ($serializer_instance_15 === VOID)
      new $serializer_15();
    return $serializer_instance_15;
  }
  function Intent$Next$_anonymous__cnsepo() {
    var tmp = Next_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = [];
    return ObjectSerializer.cp('next', tmp, tmp$ret$2);
  }
  function Intent$BackToLobby$_anonymous__yra8jv() {
    var tmp = BackToLobby_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = [];
    return ObjectSerializer.cp('lobby', tmp, tmp$ret$2);
  }
  var Companion_instance_38;
  function Companion_getInstance_38() {
    return Companion_instance_38;
  }
  var $serializer_instance_16;
  function $serializer_getInstance_16() {
    if ($serializer_instance_16 === VOID)
      new $serializer_16();
    return $serializer_instance_16;
  }
  var Start_instance;
  function Start_getInstance() {
    if (Start_instance === VOID)
      new Start();
    return Start_instance;
  }
  var EndTalk_instance;
  function EndTalk_getInstance() {
    if (EndTalk_instance === VOID)
      new EndTalk();
    return EndTalk_instance;
  }
  var CloseVote_instance;
  function CloseVote_getInstance() {
    if (CloseVote_instance === VOID)
      new CloseVote();
    return CloseVote_instance;
  }
  var EndNg_instance;
  function EndNg_getInstance() {
    if (EndNg_instance === VOID)
      new EndNg();
    return EndNg_instance;
  }
  var GuessGiveUp_instance;
  function GuessGiveUp_getInstance() {
    if (GuessGiveUp_instance === VOID)
      new GuessGiveUp();
    return GuessGiveUp_instance;
  }
  var Next_instance;
  function Next_getInstance() {
    if (Next_instance === VOID)
      new Next();
    return Next_instance;
  }
  var BackToLobby_instance;
  function BackToLobby_getInstance() {
    if (BackToLobby_instance === VOID)
      new BackToLobby();
    return BackToLobby_instance;
  }
  var Companion_instance_39;
  function Companion_getInstance_39() {
    return Companion_instance_39;
  }
  var Companion_instance_40;
  function Companion_getInstance_40() {
    return Companion_instance_40;
  }
  var $serializer_instance_17;
  function $serializer_getInstance_17() {
    if ($serializer_instance_17 === VOID)
      new $serializer_17();
    return $serializer_instance_17;
  }
  function ArenaCard$Companion$$childSerializers$_anonymous__12b3gt() {
    return Companion_getInstance_17().m10();
  }
  var Companion_instance_41;
  function Companion_getInstance_41() {
    if (Companion_instance_41 === VOID)
      new Companion_41();
    return Companion_instance_41;
  }
  var $serializer_instance_18;
  function $serializer_getInstance_18() {
    if ($serializer_instance_18 === VOID)
      new $serializer_18();
    return $serializer_instance_18;
  }
  function ArenaSeat$Companion$$childSerializers$_anonymous__5j066a() {
    return new ArrayListSerializer($serializer_getInstance_18());
  }
  var Companion_instance_42;
  function Companion_getInstance_42() {
    if (Companion_instance_42 === VOID)
      new Companion_42();
    return Companion_instance_42;
  }
  var $serializer_instance_19;
  function $serializer_getInstance_19() {
    if ($serializer_instance_19 === VOID)
      new $serializer_19();
    return $serializer_instance_19;
  }
  function ArenaMini$Companion$$childSerializers$_anonymous__u5e2s4() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  function ArenaMini$Companion$$childSerializers$_anonymous__u5e2s4_0() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  var Companion_instance_43;
  function Companion_getInstance_43() {
    if (Companion_instance_43 === VOID)
      new Companion_43();
    return Companion_instance_43;
  }
  var $serializer_instance_20;
  function $serializer_getInstance_20() {
    if ($serializer_instance_20 === VOID)
      new $serializer_20();
    return $serializer_instance_20;
  }
  function SyncGroup$Companion$$childSerializers$_anonymous__1ji9tm() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  var Companion_instance_44;
  function Companion_getInstance_44() {
    if (Companion_instance_44 === VOID)
      new Companion_44();
    return Companion_instance_44;
  }
  var $serializer_instance_21;
  function $serializer_getInstance_21() {
    if ($serializer_instance_21 === VOID)
      new $serializer_21();
    return $serializer_instance_21;
  }
  var Companion_instance_45;
  function Companion_getInstance_45() {
    return Companion_instance_45;
  }
  var $serializer_instance_22;
  function $serializer_getInstance_22() {
    if ($serializer_instance_22 === VOID)
      new $serializer_22();
    return $serializer_instance_22;
  }
  var Companion_instance_46;
  function Companion_getInstance_46() {
    return Companion_instance_46;
  }
  var $serializer_instance_23;
  function $serializer_getInstance_23() {
    if ($serializer_instance_23 === VOID)
      new $serializer_23();
    return $serializer_instance_23;
  }
  function Screen$Lobby$_anonymous__8yefdl() {
    var tmp = Lobby_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = [];
    return ObjectSerializer.cp('lobby', tmp, tmp$ret$2);
  }
  function Screen$WwReveal$Companion$$childSerializers$_anonymous__pcf1ad() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  var Companion_instance_47;
  function Companion_getInstance_47() {
    if (Companion_instance_47 === VOID)
      new Companion_47();
    return Companion_instance_47;
  }
  var $serializer_instance_24;
  function $serializer_getInstance_24() {
    if ($serializer_instance_24 === VOID)
      new $serializer_24();
    return $serializer_instance_24;
  }
  function Screen$WwRevealLocal$Companion$$childSerializers$_anonymous__sgywik() {
    return new ArrayListSerializer($serializer_getInstance_22());
  }
  function Screen$WwRevealLocal$Companion$$childSerializers$_anonymous__sgywik_0() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  var Companion_instance_48;
  function Companion_getInstance_48() {
    if (Companion_instance_48 === VOID)
      new Companion_48();
    return Companion_instance_48;
  }
  var $serializer_instance_25;
  function $serializer_getInstance_25() {
    if ($serializer_instance_25 === VOID)
      new $serializer_25();
    return $serializer_instance_25;
  }
  var Companion_instance_49;
  function Companion_getInstance_49() {
    return Companion_instance_49;
  }
  var $serializer_instance_26;
  function $serializer_getInstance_26() {
    if ($serializer_instance_26 === VOID)
      new $serializer_26();
    return $serializer_instance_26;
  }
  function Screen$WwVote$Companion$$childSerializers$_anonymous__s3tbrs() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  function Screen$WwVote$Companion$$childSerializers$_anonymous__s3tbrs_0() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  var Companion_instance_50;
  function Companion_getInstance_50() {
    if (Companion_instance_50 === VOID)
      new Companion_50();
    return Companion_instance_50;
  }
  var $serializer_instance_27;
  function $serializer_getInstance_27() {
    if ($serializer_instance_27 === VOID)
      new $serializer_27();
    return $serializer_instance_27;
  }
  function Screen$WwAccuse$Companion$$childSerializers$_anonymous__ohlpyk() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  var Companion_instance_51;
  function Companion_getInstance_51() {
    if (Companion_instance_51 === VOID)
      new Companion_51();
    return Companion_instance_51;
  }
  var $serializer_instance_28;
  function $serializer_getInstance_28() {
    if ($serializer_instance_28 === VOID)
      new $serializer_28();
    return $serializer_instance_28;
  }
  function Screen$WwGuess$Companion$$childSerializers$_anonymous__8z1tud() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  function Screen$WwGuess$Companion$$childSerializers$_anonymous__8z1tud_0() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  var Companion_instance_52;
  function Companion_getInstance_52() {
    if (Companion_instance_52 === VOID)
      new Companion_52();
    return Companion_instance_52;
  }
  var $serializer_instance_29;
  function $serializer_getInstance_29() {
    if ($serializer_instance_29 === VOID)
      new $serializer_29();
    return $serializer_instance_29;
  }
  function Screen$WwResult$Companion$$childSerializers$_anonymous__se4n4b() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  function Screen$WwResult$Companion$$childSerializers$_anonymous__se4n4b_0() {
    return new ArrayListSerializer($serializer_getInstance_17());
  }
  function Screen$WwResult$Companion$$childSerializers$_anonymous__se4n4b_1() {
    return createSimpleEnumSerializer('com.zen.partygame.game.Team', values_4());
  }
  function Screen$WwResult$Companion$$childSerializers$_anonymous__se4n4b_2() {
    return createSimpleEnumSerializer('com.zen.partygame.game.ResultReason', values_5());
  }
  var Companion_instance_53;
  function Companion_getInstance_53() {
    if (Companion_instance_53 === VOID)
      new Companion_53();
    return Companion_instance_53;
  }
  var $serializer_instance_30;
  function $serializer_getInstance_30() {
    if ($serializer_instance_30 === VOID)
      new $serializer_30();
    return $serializer_instance_30;
  }
  function Screen$NgPlay$Companion$$childSerializers$_anonymous__ry96kb() {
    return new ArrayListSerializer($serializer_getInstance_23());
  }
  var Companion_instance_54;
  function Companion_getInstance_54() {
    if (Companion_instance_54 === VOID)
      new Companion_54();
    return Companion_instance_54;
  }
  var $serializer_instance_31;
  function $serializer_getInstance_31() {
    if ($serializer_instance_31 === VOID)
      new $serializer_31();
    return $serializer_instance_31;
  }
  function Screen$NgResult$Companion$$childSerializers$_anonymous__1tmlgk() {
    return new ArrayListSerializer($serializer_getInstance_23());
  }
  function Screen$NgResult$Companion$$childSerializers$_anonymous__1tmlgk_0() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  var Companion_instance_55;
  function Companion_getInstance_55() {
    if (Companion_instance_55 === VOID)
      new Companion_55();
    return Companion_instance_55;
  }
  var $serializer_instance_32;
  function $serializer_getInstance_32() {
    if ($serializer_instance_32 === VOID)
      new $serializer_32();
    return $serializer_instance_32;
  }
  function Screen$SyncAnswer$Companion$$childSerializers$_anonymous__x3be1l() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  var Companion_instance_56;
  function Companion_getInstance_56() {
    if (Companion_instance_56 === VOID)
      new Companion_56();
    return Companion_instance_56;
  }
  var $serializer_instance_33;
  function $serializer_getInstance_33() {
    if ($serializer_instance_33 === VOID)
      new $serializer_33();
    return $serializer_instance_33;
  }
  function Screen$SyncReveal$Companion$$childSerializers$_anonymous__bw2mgm() {
    return new ArrayListSerializer($serializer_getInstance_21());
  }
  function Screen$SyncReveal$Companion$$childSerializers$_anonymous__bw2mgm_0() {
    return new ArrayListSerializer($serializer_getInstance_17());
  }
  function Screen$SyncReveal$Companion$$childSerializers$_anonymous__bw2mgm_1() {
    return new ArrayListSerializer($serializer_getInstance_17());
  }
  var Companion_instance_57;
  function Companion_getInstance_57() {
    if (Companion_instance_57 === VOID)
      new Companion_57();
    return Companion_instance_57;
  }
  var $serializer_instance_34;
  function $serializer_getInstance_34() {
    if ($serializer_instance_34 === VOID)
      new $serializer_34();
    return $serializer_instance_34;
  }
  var Companion_instance_58;
  function Companion_getInstance_58() {
    return Companion_instance_58;
  }
  var $serializer_instance_35;
  function $serializer_getInstance_35() {
    if ($serializer_instance_35 === VOID)
      new $serializer_35();
    return $serializer_instance_35;
  }
  function Screen$GuessResult$Companion$$childSerializers$_anonymous__yijtci() {
    return new ArrayListSerializer($serializer_getInstance_17());
  }
  var Companion_instance_59;
  function Companion_getInstance_59() {
    if (Companion_instance_59 === VOID)
      new Companion_59();
    return Companion_instance_59;
  }
  var $serializer_instance_36;
  function $serializer_getInstance_36() {
    if ($serializer_instance_36 === VOID)
      new $serializer_36();
    return $serializer_instance_36;
  }
  function Screen$QVote$Companion$$childSerializers$_anonymous__5qqkxl() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  var Companion_instance_60;
  function Companion_getInstance_60() {
    if (Companion_instance_60 === VOID)
      new Companion_60();
    return Companion_instance_60;
  }
  var $serializer_instance_37;
  function $serializer_getInstance_37() {
    if ($serializer_instance_37 === VOID)
      new $serializer_37();
    return $serializer_instance_37;
  }
  function Screen$QReveal$Companion$$childSerializers$_anonymous__5yf57g() {
    return new ArrayListSerializer($serializer_getInstance_17());
  }
  var Companion_instance_61;
  function Companion_getInstance_61() {
    if (Companion_instance_61 === VOID)
      new Companion_61();
    return Companion_instance_61;
  }
  var $serializer_instance_38;
  function $serializer_getInstance_38() {
    if ($serializer_instance_38 === VOID)
      new $serializer_38();
    return $serializer_instance_38;
  }
  function Screen$Arena$Companion$$childSerializers$_anonymous__t5kwhx() {
    return new ArrayListSerializer($serializer_getInstance_19());
  }
  function Screen$Arena$Companion$$childSerializers$_anonymous__t5kwhx_0() {
    return new ArrayListSerializer($serializer_getInstance_18());
  }
  function Screen$Arena$Companion$$childSerializers$_anonymous__t5kwhx_1() {
    return Companion_getInstance_18().m10();
  }
  function Screen$Arena$Companion$$childSerializers$_anonymous__t5kwhx_2() {
    return new ArrayListSerializer($serializer_getInstance_18());
  }
  function Screen$Arena$Companion$$childSerializers$_anonymous__t5kwhx_3() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  var Companion_instance_62;
  function Companion_getInstance_62() {
    if (Companion_instance_62 === VOID)
      new Companion_62();
    return Companion_instance_62;
  }
  var $serializer_instance_39;
  function $serializer_getInstance_39() {
    if ($serializer_instance_39 === VOID)
      new $serializer_39();
    return $serializer_instance_39;
  }
  function Screen$ArenaResult$Companion$$childSerializers$_anonymous__ml2sfy() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  function Screen$ArenaResult$Companion$$childSerializers$_anonymous__ml2sfy_0() {
    return new ArrayListSerializer($serializer_getInstance_19());
  }
  function Screen$ArenaResult$Companion$$childSerializers$_anonymous__ml2sfy_1() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  function Screen$ArenaResult$Companion$$childSerializers$_anonymous__ml2sfy_2() {
    return Companion_getInstance_18().m10();
  }
  var Companion_instance_63;
  function Companion_getInstance_63() {
    if (Companion_instance_63 === VOID)
      new Companion_63();
    return Companion_instance_63;
  }
  var $serializer_instance_40;
  function $serializer_getInstance_40() {
    if ($serializer_instance_40 === VOID)
      new $serializer_40();
    return $serializer_instance_40;
  }
  var Companion_instance_64;
  function Companion_getInstance_64() {
    return Companion_instance_64;
  }
  var $serializer_instance_41;
  function $serializer_getInstance_41() {
    if ($serializer_instance_41 === VOID)
      new $serializer_41();
    return $serializer_instance_41;
  }
  var Lobby_instance;
  function Lobby_getInstance() {
    if (Lobby_instance === VOID)
      new Lobby();
    return Lobby_instance;
  }
  var Companion_instance_65;
  function Companion_getInstance_65() {
    return Companion_instance_65;
  }
  function PlayerView$Companion$$childSerializers$_anonymous__gvxerg() {
    return new ArrayListSerializer($serializer_getInstance());
  }
  function PlayerView$Companion$$childSerializers$_anonymous__gvxerg_0() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  function PlayerView$Companion$$childSerializers$_anonymous__gvxerg_1() {
    return Companion_instance_65.m10();
  }
  var Companion_instance_66;
  function Companion_getInstance_66() {
    if (Companion_instance_66 === VOID)
      new Companion_66();
    return Companion_instance_66;
  }
  var $serializer_instance_42;
  function $serializer_getInstance_42() {
    if ($serializer_instance_42 === VOID)
      new $serializer_42();
    return $serializer_instance_42;
  }
  function WireJson$lambda($this$Json) {
    _init_properties_Protocol_kt__345mx4();
    $this$Json.xr_1 = 't';
    $this$Json.sr_1 = true;
    $this$Json.qr_1 = true;
    return Unit_instance;
  }
  function GameType_ARENA_getInstance() {
    GameType_initEntries();
    return GameType_ARENA_instance;
  }
  function GameType_WORD_WOLF_getInstance() {
    GameType_initEntries();
    return GameType_WORD_WOLF_instance;
  }
  function GameType_NG_WORD_getInstance() {
    GameType_initEntries();
    return GameType_NG_WORD_instance;
  }
  function GameType_SPY_getInstance() {
    GameType_initEntries();
    return GameType_SPY_instance;
  }
  function GameType_SYNC_getInstance() {
    GameType_initEntries();
    return GameType_SYNC_instance;
  }
  function GameType_GUESS_getInstance() {
    GameType_initEntries();
    return GameType_GUESS_instance;
  }
  function GameType_QUESTION_getInstance() {
    GameType_initEntries();
    return GameType_QUESTION_instance;
  }
  function NgLevel_NORMAL_getInstance() {
    NgLevel_initEntries();
    return NgLevel_NORMAL_instance;
  }
  function NgLevel_HARD_getInstance() {
    NgLevel_initEntries();
    return NgLevel_HARD_instance;
  }
  function NgLevel_MIX_getInstance() {
    NgLevel_initEntries();
    return NgLevel_MIX_instance;
  }
  function Team_CITIZEN_getInstance() {
    Team_initEntries();
    return Team_CITIZEN_instance;
  }
  function Team_WOLF_getInstance() {
    Team_initEntries();
    return Team_WOLF_instance;
  }
  function ResultReason_WOLF_CAUGHT_getInstance() {
    ResultReason_initEntries();
    return ResultReason_WOLF_CAUGHT_instance;
  }
  function ResultReason_WOLF_GUESSED_getInstance() {
    ResultReason_initEntries();
    return ResultReason_WOLF_GUESSED_instance;
  }
  function ResultReason_CITIZEN_ACCUSED_getInstance() {
    ResultReason_initEntries();
    return ResultReason_CITIZEN_ACCUSED_instance;
  }
  function ResultReason_TIE_getInstance() {
    ResultReason_initEntries();
    return ResultReason_TIE_instance;
  }
  var properties_initialized_Protocol_kt_14ecii;
  function _init_properties_Protocol_kt__345mx4() {
    if (!properties_initialized_Protocol_kt_14ecii) {
      properties_initialized_Protocol_kt_14ecii = true;
      WireJson = Json_0(VOID, WireJson$lambda);
    }
  }
  var Companion_instance_67;
  function Companion_getInstance_67() {
    return Companion_instance_67;
  }
  var $serializer_instance_43;
  function $serializer_getInstance_43() {
    if ($serializer_instance_43 === VOID)
      new $serializer_43();
    return $serializer_instance_43;
  }
  var Companion_instance_68;
  function Companion_getInstance_68() {
    return Companion_instance_68;
  }
  var $serializer_instance_44;
  function $serializer_getInstance_44() {
    if ($serializer_instance_44 === VOID)
      new $serializer_44();
    return $serializer_instance_44;
  }
  function TopicFile$Companion$$childSerializers$_anonymous__gy71un() {
    return new ArrayListSerializer($serializer_getInstance_43());
  }
  function TopicFile$Companion$$childSerializers$_anonymous__gy71un_0() {
    return new ArrayListSerializer($serializer_getInstance_44());
  }
  function TopicFile$Companion$$childSerializers$_anonymous__gy71un_1() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  function TopicFile$Companion$$childSerializers$_anonymous__gy71un_2() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  function TopicFile$Companion$$childSerializers$_anonymous__gy71un_3() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  function TopicFile$Companion$$childSerializers$_anonymous__gy71un_4() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  var Companion_instance_69;
  function Companion_getInstance_69() {
    if (Companion_instance_69 === VOID)
      new Companion_69();
    return Companion_instance_69;
  }
  var $serializer_instance_45;
  function $serializer_getInstance_45() {
    if ($serializer_instance_45 === VOID)
      new $serializer_45();
    return $serializer_instance_45;
  }
  function TopicBank$Companion$json$lambda($this$Json) {
    $this$Json.sr_1 = true;
    return Unit_instance;
  }
  function drawFrom($this, key, list, rng) {
    if (list.k1())
      return '\uFF1F';
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = $this.e16_1;
    var value = this_0.g2(key);
    var tmp;
    if (value == null) {
      // Inline function 'kotlin.collections.mutableSetOf' call
      var answer = LinkedHashSet.n1();
      this_0.c4(key, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    var used = tmp;
    if (used.j1() >= list.j1()) {
      used.j4();
    }
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = get_indices_1(list);
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList.o1();
    var inductionVariable = tmp0.rf_1;
    var last = tmp0.sf_1;
    if (inductionVariable <= last)
      do {
        var element = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var it = element;
        if (!used.p1(it)) {
          destination.r(element);
        }
      }
       while (!(element === last));
    var fresh = destination;
    var i = fresh.l1(rng.m1(fresh.j1()));
    // Inline function 'kotlin.collections.plusAssign' call
    used.r(i);
    return list.l1(i);
  }
  var Companion_instance_70;
  function Companion_getInstance_70() {
    if (Companion_instance_70 === VOID)
      new Companion_70();
    return Companion_instance_70;
  }
  function JsHost$engine$lambda() {
    return numberToLong(Date.now());
  }
  function protoVersion() {
    return 4;
  }
  function arenaCardsJson() {
    // Inline function 'kotlin.collections.map' call
    var this_0 = ArenaCards_getInstance().m11_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList.d1(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.e1();
    while (_iterator__ex2g4s.f1()) {
      var item = _iterator__ex2g4s.g1();
      // Inline function 'kotlinx.serialization.json.buildJsonObject' call
      var builder = new JsonObjectBuilder();
      put(builder, 'id', item.w10_1);
      put(builder, 'name', item.x10_1);
      put(builder, 'text', item.z10_1);
      put_0(builder, 'star', item.b11_1);
      put(builder, 'art', item.d11_1);
      put(builder, 'fx', item.y10_1.k2_1);
      put(builder, 'target', item.a11_1.k2_1);
      var tmp0_safe_receiver = item.f11_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        put(builder, 'cover', tmp0_safe_receiver);
      }
      var tmp1_safe_receiver = item.g11_1;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        put(builder, 'coverName', tmp1_safe_receiver);
      }
      var tmp$ret$6 = builder.is();
      destination.r(tmp$ret$6);
    }
    return (new JsonArray(destination)).toString();
  }
  function metaJson() {
    // Inline function 'kotlinx.serialization.json.buildJsonObject' call
    var builder = new JsonObjectBuilder();
    // Inline function 'kotlin.collections.map' call
    var this_0 = get_entries_2();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList.d1(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.e1();
    while (_iterator__ex2g4s.f1()) {
      var item = _iterator__ex2g4s.g1();
      // Inline function 'kotlinx.serialization.json.buildJsonObject' call
      var builder_0 = new JsonObjectBuilder();
      put(builder_0, 'id', item.k2_1);
      put(builder_0, 'label', item.w15_1);
      put(builder_0, 'short', item.x15_1);
      put_1(builder_0, 'min', item.z15_1);
      var tmp$ret$2 = builder_0.is();
      destination.r(tmp$ret$2);
    }
    builder.nt('games', new JsonArray(destination));
    // Inline function 'kotlin.collections.associate' call
    var this_1 = get_entries_1();
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_1, 10)), 16);
    // Inline function 'kotlin.collections.associateTo' call
    var destination_0 = LinkedHashMap.u9(capacity);
    var _iterator__ex2g4s_0 = this_1.e1();
    while (_iterator__ex2g4s_0.f1()) {
      var element = _iterator__ex2g4s_0.g1();
      // Inline function 'kotlinx.serialization.json.buildJsonObject' call
      var builder_1 = new JsonObjectBuilder();
      put(builder_1, 'title', element.t10_1);
      put(builder_1, 'text', element.u10_1);
      put_0(builder_1, 'social', element.v10_1);
      var tmp$ret$6 = builder_1.is();
      // Inline function 'kotlin.collections.plusAssign' call
      var pair = to(element.k2_1, tmp$ret$6);
      destination_0.c4(pair.me_1, pair.ne_1);
    }
    builder.nt('chaos', new JsonObject(destination_0));
    put_1(builder, 'proto', 4);
    put_1(builder, 'maxPlayers', 8);
    put_1(builder, 'noseWindowMs', new Long(3000, 0));
    return builder.is().toString();
  }
  function normalizeNfkc(s) {
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = s.normalize('NFKC');
    return (!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : THROW_CCE();
  }
  //region block: post-declaration
  initMetadataForInterface(CharSequence, 'CharSequence');
  initMetadataForInterface(Comparable, 'Comparable');
  initMetadataForClass(Number_0, 'Number');
  initMetadataForClass(Error_0, 'Error', Error_0.va);
  initMetadataForClass(IrLinkageError, 'IrLinkageError');
  initMetadataForClass(Char, 'Char', VOID, VOID, [Comparable]);
  initMetadataForInterface(Collection, 'Collection');
  initMetadataForInterface(KtList, 'List', VOID, VOID, [Collection]);
  initMetadataForInterface(Entry, 'Entry');
  initMetadataForInterface(KtMap, 'Map');
  initMetadataForInterface(KtSet, 'Set', VOID, VOID, [Collection]);
  initMetadataForInterface(MutableIterable, 'MutableIterable');
  initMetadataForCompanion(Companion);
  initMetadataForClass(Enum, 'Enum', VOID, VOID, [Comparable]);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(Long, 'Long', VOID, VOID, [Number_0, Comparable]);
  initMetadataForInterface(FunctionAdapter, 'FunctionAdapter');
  initMetadataForClass(arrayIterator$1);
  initMetadataForObject(StringCompanionObject, 'StringCompanionObject');
  initMetadataForObject(Digit, 'Digit');
  initMetadataForInterface(Comparator, 'Comparator');
  initMetadataForObject(Unit, 'Unit');
  initMetadataForClass(AbstractCollection, 'AbstractCollection', VOID, VOID, [Collection]);
  initMetadataForClass(AbstractMutableCollection, 'AbstractMutableCollection', VOID, VOID, [AbstractCollection, Collection, MutableIterable]);
  initMetadataForClass(IteratorImpl, 'IteratorImpl');
  initMetadataForClass(ListIteratorImpl, 'ListIteratorImpl');
  initMetadataForClass(AbstractMutableList, 'AbstractMutableList', VOID, VOID, [AbstractMutableCollection, Collection, MutableIterable, KtList]);
  initMetadataForClass(AbstractMap, 'AbstractMap', VOID, VOID, [KtMap]);
  initMetadataForClass(AbstractMutableMap, 'AbstractMutableMap', VOID, VOID, [AbstractMap, KtMap]);
  initMetadataForClass(AbstractMutableSet, 'AbstractMutableSet', VOID, VOID, [AbstractMutableCollection, KtSet, Collection, MutableIterable]);
  initMetadataForCompanion(Companion_1);
  initMetadataForInterface(RandomAccess, 'RandomAccess');
  initMetadataForClass(ArrayList, 'ArrayList', ArrayList.o1, VOID, [AbstractMutableList, Collection, MutableIterable, KtList, RandomAccess]);
  initMetadataForClass(HashMap, 'HashMap', HashMap.j6, VOID, [AbstractMutableMap, KtMap]);
  initMetadataForClass(HashMapKeys, 'HashMapKeys', VOID, VOID, [KtSet, Collection, MutableIterable, AbstractMutableSet]);
  initMetadataForClass(HashMapValues, 'HashMapValues', VOID, VOID, [Collection, MutableIterable, AbstractMutableCollection]);
  initMetadataForClass(HashMapEntrySetBase, 'HashMapEntrySetBase', VOID, VOID, [KtSet, Collection, MutableIterable, AbstractMutableSet]);
  initMetadataForClass(HashMapEntrySet, 'HashMapEntrySet');
  initMetadataForClass(HashMapKeysDefault$iterator$1);
  initMetadataForClass(HashMapKeysDefault, 'HashMapKeysDefault');
  initMetadataForClass(HashMapValuesDefault$iterator$1);
  initMetadataForClass(HashMapValuesDefault, 'HashMapValuesDefault');
  initMetadataForClass(HashSet, 'HashSet', HashSet.a8, VOID, [AbstractMutableSet, KtSet, Collection, MutableIterable]);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(Itr, 'Itr');
  initMetadataForClass(KeysItr, 'KeysItr');
  initMetadataForClass(ValuesItr, 'ValuesItr');
  initMetadataForClass(EntriesItr, 'EntriesItr');
  initMetadataForClass(EntryRef, 'EntryRef', VOID, VOID, [Entry]);
  initMetadataForInterface(InternalMap, 'InternalMap');
  protoOf(InternalHashMap).u7 = containsAllEntries;
  initMetadataForClass(InternalHashMap, 'InternalHashMap', InternalHashMap.u6, VOID, [InternalMap]);
  initMetadataForClass(LinkedHashMap, 'LinkedHashMap', LinkedHashMap.z3, VOID, [HashMap, KtMap]);
  initMetadataForClass(LinkedHashSet, 'LinkedHashSet', LinkedHashSet.n1, VOID, [HashSet, KtSet, Collection, MutableIterable]);
  initMetadataForInterface(Continuation, 'Continuation');
  initMetadataForObject(CompletedContinuation, 'CompletedContinuation', VOID, VOID, [Continuation]);
  initMetadataForClass(InterceptedCoroutine, 'InterceptedCoroutine', VOID, VOID, [Continuation]);
  initMetadataForClass(GeneratorCoroutineImpl, 'GeneratorCoroutineImpl', VOID, VOID, [InterceptedCoroutine, Continuation]);
  initMetadataForClass(Exception, 'Exception', Exception.oa);
  initMetadataForClass(RuntimeException, 'RuntimeException', RuntimeException.ra);
  initMetadataForClass(IllegalArgumentException, 'IllegalArgumentException', IllegalArgumentException.qa);
  initMetadataForClass(IllegalStateException, 'IllegalStateException', IllegalStateException.ua);
  initMetadataForClass(UnsupportedOperationException, 'UnsupportedOperationException', UnsupportedOperationException.b6);
  initMetadataForClass(NoSuchElementException, 'NoSuchElementException', NoSuchElementException.n4);
  initMetadataForClass(IndexOutOfBoundsException, 'IndexOutOfBoundsException', IndexOutOfBoundsException.wa);
  initMetadataForClass(ConcurrentModificationException, 'ConcurrentModificationException', ConcurrentModificationException.z8);
  initMetadataForClass(ArithmeticException, 'ArithmeticException', ArithmeticException.ab);
  initMetadataForClass(NumberFormatException, 'NumberFormatException', NumberFormatException.gb);
  initMetadataForClass(NullPointerException, 'NullPointerException', NullPointerException.g3);
  initMetadataForClass(NoWhenBranchMatchedException, 'NoWhenBranchMatchedException', NoWhenBranchMatchedException.k3);
  initMetadataForClass(ClassCastException, 'ClassCastException', ClassCastException.o3);
  initMetadataForInterface(KClass, 'KClass');
  initMetadataForClass(KClassImpl, 'KClassImpl', VOID, VOID, [KClass]);
  initMetadataForObject(NothingKClassImpl, 'NothingKClassImpl');
  initMetadataForClass(PrimitiveKClassImpl, 'PrimitiveKClassImpl');
  initMetadataForClass(SimpleKClassImpl, 'SimpleKClassImpl');
  initMetadataForInterface(KProperty1, 'KProperty1');
  initMetadataForObject(PrimitiveClasses, 'PrimitiveClasses');
  initMetadataForClass(StringBuilder, 'StringBuilder', StringBuilder.b1, VOID, [CharSequence]);
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(IteratorImpl_0, 'IteratorImpl');
  initMetadataForCompanion(Companion_4);
  initMetadataForClass(AbstractList, 'AbstractList', VOID, VOID, [AbstractCollection, KtList]);
  initMetadataForClass(AbstractMap$keys$1$iterator$1);
  initMetadataForClass(AbstractMap$values$1$iterator$1);
  initMetadataForCompanion(Companion_5);
  initMetadataForClass(AbstractSet, 'AbstractSet', VOID, VOID, [AbstractCollection, KtSet]);
  initMetadataForClass(AbstractMap$keys$1);
  initMetadataForClass(AbstractMap$values$1);
  initMetadataForCompanion(Companion_6);
  initMetadataForCompanion(Companion_7);
  initMetadataForClass(ArrayDeque, 'ArrayDeque', ArrayDeque.rd);
  initMetadataForObject(EmptyList, 'EmptyList', VOID, VOID, [KtList, RandomAccess]);
  initMetadataForObject(EmptyIterator, 'EmptyIterator');
  initMetadataForClass(ArrayAsCollection, 'ArrayAsCollection', VOID, VOID, [Collection]);
  initMetadataForClass(IndexedValue, 'IndexedValue');
  initMetadataForClass(IndexingIterable, 'IndexingIterable');
  initMetadataForClass(IndexingIterator, 'IndexingIterator');
  initMetadataForInterface(MapWithDefault, 'MapWithDefault', VOID, VOID, [KtMap]);
  initMetadataForObject(EmptyMap, 'EmptyMap', VOID, VOID, [KtMap]);
  initMetadataForClass(IntIterator, 'IntIterator');
  initMetadataForObject(EmptySet, 'EmptySet', VOID, VOID, [KtSet]);
  initMetadataForObject(Key, 'Key');
  initMetadataForInterface(ContinuationInterceptor, 'ContinuationInterceptor');
  initMetadataForObject(EmptyCoroutineContext, 'EmptyCoroutineContext');
  initMetadataForClass(CoroutineSingletons, 'CoroutineSingletons');
  initMetadataForClass(EnumEntriesList, 'EnumEntriesList', VOID, VOID, [KtList, AbstractList]);
  initMetadataForClass(Random, 'Random');
  initMetadataForObject(Default, 'Default');
  initMetadataForCompanion(Companion_8);
  initMetadataForClass(XorWowRandom, 'XorWowRandom');
  initMetadataForCompanion(Companion_9);
  initMetadataForClass(IntProgression, 'IntProgression');
  initMetadataForInterface(ClosedRange, 'ClosedRange');
  initMetadataForClass(IntRange, 'IntRange', VOID, VOID, [IntProgression, ClosedRange]);
  initMetadataForClass(IntProgressionIterator, 'IntProgressionIterator');
  initMetadataForCompanion(Companion_10);
  initMetadataForClass(DeepRecursiveScope, 'DeepRecursiveScope', VOID, VOID, VOID, [1, 2]);
  initMetadataForClass(DeepRecursiveFunction, 'DeepRecursiveFunction');
  initMetadataForClass(DeepRecursiveScopeImpl, 'DeepRecursiveScopeImpl', VOID, VOID, [DeepRecursiveScope, Continuation], [1, 2]);
  initMetadataForClass(LazyThreadSafetyMode, 'LazyThreadSafetyMode');
  initMetadataForClass(UnsafeLazyImpl, 'UnsafeLazyImpl');
  initMetadataForObject(UNINITIALIZED_VALUE, 'UNINITIALIZED_VALUE');
  initMetadataForCompanion(Companion_11);
  initMetadataForClass(Failure, 'Failure');
  initMetadataForClass(Result, 'Result');
  initMetadataForClass(NotImplementedError, 'NotImplementedError', NotImplementedError.ma);
  initMetadataForClass(Pair, 'Pair');
  initMetadataForClass(Triple, 'Triple');
  initMetadataForInterface(SerializationStrategy, 'SerializationStrategy');
  initMetadataForInterface(DeserializationStrategy, 'DeserializationStrategy');
  initMetadataForInterface(KSerializer, 'KSerializer', VOID, VOID, [SerializationStrategy, DeserializationStrategy]);
  initMetadataForClass(SealedClassSerializer$$inlined$groupingBy$1);
  initMetadataForClass(AbstractPolymorphicSerializer, 'AbstractPolymorphicSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(SealedClassSerializer, 'SealedClassSerializer');
  initMetadataForClass(SerializationException, 'SerializationException', SerializationException.xh);
  initMetadataForClass(UnknownFieldException, 'UnknownFieldException');
  initMetadataForClass(MissingFieldException, 'MissingFieldException');
  initMetadataForInterface(SerialDescriptor, 'SerialDescriptor');
  initMetadataForClass(ContextDescriptor, 'ContextDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(elementDescriptors$1);
  initMetadataForClass(elementDescriptors$$inlined$Iterable$1);
  initMetadataForClass(elementNames$1);
  initMetadataForClass(elementNames$$inlined$Iterable$1);
  initMetadataForClass(ClassSerialDescriptorBuilder, 'ClassSerialDescriptorBuilder');
  initMetadataForInterface(CachedNames, 'CachedNames');
  protoOf(SerialDescriptorImpl).pi = get_isNullable;
  protoOf(SerialDescriptorImpl).wi = get_isInline;
  initMetadataForClass(SerialDescriptorImpl, 'SerialDescriptorImpl', VOID, VOID, [SerialDescriptor, CachedNames]);
  initMetadataForClass(SerialKind, 'SerialKind');
  initMetadataForObject(ENUM, 'ENUM');
  initMetadataForObject(CONTEXTUAL, 'CONTEXTUAL');
  initMetadataForClass(StructureKind, 'StructureKind');
  initMetadataForObject(CLASS, 'CLASS');
  initMetadataForObject(LIST, 'LIST');
  initMetadataForObject(MAP, 'MAP');
  initMetadataForObject(OBJECT, 'OBJECT');
  initMetadataForClass(PrimitiveKind, 'PrimitiveKind');
  initMetadataForObject(BOOLEAN, 'BOOLEAN');
  initMetadataForObject(INT, 'INT');
  initMetadataForObject(LONG, 'LONG');
  initMetadataForObject(STRING, 'STRING');
  initMetadataForClass(PolymorphicKind, 'PolymorphicKind');
  initMetadataForObject(SEALED, 'SEALED');
  initMetadataForInterface(Decoder, 'Decoder');
  initMetadataForInterface(CompositeDecoder, 'CompositeDecoder');
  protoOf(AbstractDecoder).ok = decodeSerializableElement$default;
  protoOf(AbstractDecoder).hk = decodeSerializableValue;
  protoOf(AbstractDecoder).rk = decodeSequentially;
  protoOf(AbstractDecoder).tk = decodeCollectionSize;
  initMetadataForClass(AbstractDecoder, 'AbstractDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  initMetadataForInterface(Encoder, 'Encoder');
  initMetadataForInterface(CompositeEncoder, 'CompositeEncoder');
  protoOf(AbstractEncoder).kl = encodeNotNullMark;
  protoOf(AbstractEncoder).ll = beginCollection;
  protoOf(AbstractEncoder).hl = encodeSerializableValue;
  protoOf(AbstractEncoder).jl = encodeNullableSerializableValue;
  protoOf(AbstractEncoder).ml = shouldEncodeElementDefault;
  initMetadataForClass(AbstractEncoder, 'AbstractEncoder', VOID, VOID, [Encoder, CompositeEncoder]);
  protoOf(ListLikeDescriptor).pi = get_isNullable;
  protoOf(ListLikeDescriptor).wi = get_isInline;
  protoOf(ListLikeDescriptor).yi = get_annotations;
  initMetadataForClass(ListLikeDescriptor, 'ListLikeDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(ArrayListClassDesc, 'ArrayListClassDesc');
  initMetadataForClass(AbstractCollectionSerializer, 'AbstractCollectionSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(CollectionLikeSerializer, 'CollectionLikeSerializer');
  initMetadataForClass(CollectionSerializer, 'CollectionSerializer');
  initMetadataForClass(ArrayListSerializer, 'ArrayListSerializer');
  initMetadataForCompanion(Companion_12);
  initMetadataForClass(ElementMarker, 'ElementMarker');
  initMetadataForClass(EnumSerializer, 'EnumSerializer', VOID, VOID, [KSerializer]);
  protoOf(PluginGeneratedSerialDescriptor).pi = get_isNullable;
  protoOf(PluginGeneratedSerialDescriptor).wi = get_isInline;
  initMetadataForClass(PluginGeneratedSerialDescriptor, 'PluginGeneratedSerialDescriptor', VOID, VOID, [SerialDescriptor, CachedNames]);
  initMetadataForClass(EnumDescriptor, 'EnumDescriptor');
  initMetadataForClass(InlineClassDescriptor, 'InlineClassDescriptor');
  initMetadataForInterface(GeneratedSerializer, 'GeneratedSerializer', VOID, VOID, [KSerializer]);
  protoOf(InlinePrimitiveDescriptor$1).uo = typeParametersSerializers;
  initMetadataForClass(InlinePrimitiveDescriptor$1, VOID, VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(NullableSerializer, 'NullableSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(SerialDescriptorForNullable, 'SerialDescriptorForNullable', VOID, VOID, [SerialDescriptor, CachedNames]);
  initMetadataForClass(ObjectSerializer, 'ObjectSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(StringSerializer, 'StringSerializer', VOID, VOID, [KSerializer]);
  protoOf(PrimitiveSerialDescriptor).pi = get_isNullable;
  protoOf(PrimitiveSerialDescriptor).wi = get_isInline;
  protoOf(PrimitiveSerialDescriptor).yi = get_annotations;
  initMetadataForClass(PrimitiveSerialDescriptor, 'PrimitiveSerialDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForObject(IntSerializer, 'IntSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(LongSerializer, 'LongSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(BooleanSerializer, 'BooleanSerializer', VOID, VOID, [KSerializer]);
  protoOf(TaggedDecoder).ok = decodeSerializableElement$default;
  protoOf(TaggedDecoder).hk = decodeSerializableValue;
  protoOf(TaggedDecoder).rk = decodeSequentially;
  protoOf(TaggedDecoder).tk = decodeCollectionSize;
  initMetadataForClass(TaggedDecoder, 'TaggedDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  initMetadataForClass(NamedValueDecoder, 'NamedValueDecoder');
  initMetadataForClass(SerializersModule, 'SerializersModule');
  initMetadataForClass(SerialModuleImpl, 'SerialModuleImpl');
  initMetadataForClass(ContextualProvider, 'ContextualProvider');
  initMetadataForClass(Argless, 'Argless');
  initMetadataForClass(WithTypeArguments, 'WithTypeArguments');
  initMetadataForInterface(SerializersModuleCollector, 'SerializersModuleCollector');
  initMetadataForClass(SerializableWith, 'SerializableWith', VOID, VOID, VOID, VOID, 0);
  initMetadataForClass(Json, 'Json');
  initMetadataForObject(Default_0, 'Default');
  initMetadataForClass(JsonBuilder, 'JsonBuilder');
  initMetadataForClass(JsonImpl, 'JsonImpl');
  initMetadataForClass(JsonClassDiscriminator, 'JsonClassDiscriminator');
  initMetadataForClass(JsonIgnoreUnknownKeys, 'JsonIgnoreUnknownKeys');
  initMetadataForClass(JsonNames, 'JsonNames');
  initMetadataForClass(JsonConfiguration, 'JsonConfiguration');
  initMetadataForClass(ClassDiscriminatorMode, 'ClassDiscriminatorMode');
  initMetadataForCompanion(Companion_13);
  initMetadataForClass(JsonElement, 'JsonElement');
  initMetadataForClass(JsonArray, 'JsonArray', VOID, VOID, [JsonElement, KtList]);
  initMetadataForCompanion(Companion_14);
  initMetadataForClass(JsonObject, 'JsonObject', VOID, VOID, [JsonElement, KtMap]);
  initMetadataForCompanion(Companion_15);
  initMetadataForCompanion(Companion_16);
  initMetadataForClass(JsonPrimitive, 'JsonPrimitive');
  initMetadataForObject(JsonNull, 'JsonNull');
  initMetadataForClass(JsonLiteral, 'JsonLiteral');
  initMetadataForClass(JsonObjectBuilder, 'JsonObjectBuilder');
  initMetadataForClass(Composer, 'Composer');
  initMetadataForClass(ComposerWithPrettyPrint, 'ComposerWithPrettyPrint');
  initMetadataForClass(JsonElementMarker, 'JsonElementMarker');
  initMetadataForClass(JsonException, 'JsonException');
  initMetadataForClass(JsonEncodingException, 'JsonEncodingException');
  initMetadataForClass(JsonDecodingException, 'JsonDecodingException');
  initMetadataForObject(Tombstone, 'Tombstone');
  initMetadataForClass(JsonPath, 'JsonPath', JsonPath);
  protoOf(JsonSerializersModuleValidator).sq = contextual;
  initMetadataForClass(JsonSerializersModuleValidator, 'JsonSerializersModuleValidator', VOID, VOID, [SerializersModuleCollector]);
  initMetadataForLambda(JsonTreeReader$readDeepRecursive$slambda, VOID, VOID, [2]);
  initMetadataForClass(JsonTreeReader, 'JsonTreeReader', VOID, VOID, VOID, [1]);
  initMetadataForClass(Key_0, 'Key', Key_0);
  initMetadataForClass(DescriptorSchemaCache, 'DescriptorSchemaCache', DescriptorSchemaCache);
  initMetadataForClass(DiscriminatorHolder, 'DiscriminatorHolder');
  initMetadataForClass(StreamingJsonDecoder, 'StreamingJsonDecoder', VOID, VOID, [Decoder, CompositeDecoder, AbstractDecoder]);
  initMetadataForClass(StreamingJsonEncoder, 'StreamingJsonEncoder', VOID, VOID, [Encoder, CompositeEncoder, AbstractEncoder]);
  initMetadataForClass(AbstractJsonTreeDecoder, 'AbstractJsonTreeDecoder', VOID, VOID, [NamedValueDecoder, Decoder, CompositeDecoder]);
  initMetadataForClass(JsonTreeDecoder, 'JsonTreeDecoder');
  initMetadataForClass(JsonTreeListDecoder, 'JsonTreeListDecoder');
  initMetadataForClass(JsonTreeMapDecoder, 'JsonTreeMapDecoder');
  initMetadataForClass(WriteMode, 'WriteMode');
  initMetadataForClass(AbstractJsonLexer, 'AbstractJsonLexer');
  initMetadataForObject(CharMappings, 'CharMappings');
  initMetadataForClass(StringJsonLexer, 'StringJsonLexer');
  initMetadataForClass(StringJsonLexerWithComments, 'StringJsonLexerWithComments');
  initMetadataForClass(JsonToStringWriter, 'JsonToStringWriter', JsonToStringWriter);
  initMetadataForCompanion(Companion_17);
  initMetadataForClass(Suit, 'Suit', VOID, VOID, VOID, VOID, VOID, {0: Companion_getInstance_17});
  initMetadataForClass(Fx, 'Fx');
  initMetadataForClass(TargetKind, 'TargetKind');
  initMetadataForCompanion(Companion_18);
  initMetadataForClass(Chaos, 'Chaos', VOID, VOID, VOID, VOID, VOID, {0: Companion_getInstance_18});
  initMetadataForClass(CardDef, 'CardDef');
  initMetadataForObject(ArenaCards, 'ArenaCards');
  initMetadataForClass(Step, 'Step');
  initMetadataForClass(Seat, 'Seat');
  initMetadataForClass(Mini, 'Mini');
  initMetadataForCompanion(Companion_19);
  initMetadataForClass(sam$kotlin_Comparator$0_0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(sam$kotlin_Comparator$0_1, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(ArenaGame$finishMini$$inlined$groupingBy$1);
  initMetadataForClass(ArenaGame, 'ArenaGame');
  initMetadataForClass(Ok, 'Ok');
  initMetadataForObject(Full, 'Full');
  initMetadataForObject(InGame, 'InGame');
  initMetadataForClass(Phase, 'Phase');
  initMetadataForClass(AfterAd, 'AfterAd');
  initMetadataForCompanion(Companion_20);
  initMetadataForClass(sam$kotlin_Comparator$0_2, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(sam$kotlin_Comparator$0_3, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(sam$kotlin_Comparator$0_4, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(sam$kotlin_Comparator$0_5, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(Engine, 'Engine');
  initMetadataForClass(GameType, 'GameType');
  initMetadataForClass(NgLevel, 'NgLevel');
  initMetadataForClass(Team, 'Team');
  initMetadataForClass(ResultReason, 'ResultReason');
  initMetadataForCompanion(Companion_21);
  protoOf($serializer).uo = typeParametersSerializers;
  initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(PlayerInfo, 'PlayerInfo', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
  initMetadataForCompanion(Companion_22);
  protoOf($serializer_0).uo = typeParametersSerializers;
  initMetadataForObject($serializer_0, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(Settings, 'Settings', Settings, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_0});
  initMetadataForCompanion(Companion_23);
  protoOf($serializer_1).uo = typeParametersSerializers;
  initMetadataForObject($serializer_1, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_24);
  protoOf($serializer_2).uo = typeParametersSerializers;
  initMetadataForObject($serializer_2, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_25);
  protoOf($serializer_3).uo = typeParametersSerializers;
  initMetadataForObject($serializer_3, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_26);
  protoOf($serializer_4).uo = typeParametersSerializers;
  initMetadataForObject($serializer_4, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_27);
  protoOf($serializer_5).uo = typeParametersSerializers;
  initMetadataForObject($serializer_5, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_28);
  protoOf($serializer_6).uo = typeParametersSerializers;
  initMetadataForObject($serializer_6, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_29);
  protoOf($serializer_7).uo = typeParametersSerializers;
  initMetadataForObject($serializer_7, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_30);
  protoOf($serializer_8).uo = typeParametersSerializers;
  initMetadataForObject($serializer_8, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_31);
  protoOf($serializer_9).uo = typeParametersSerializers;
  initMetadataForObject($serializer_9, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_32);
  protoOf($serializer_10).uo = typeParametersSerializers;
  initMetadataForObject($serializer_10, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_33);
  protoOf($serializer_11).uo = typeParametersSerializers;
  initMetadataForObject($serializer_11, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_34);
  protoOf($serializer_12).uo = typeParametersSerializers;
  initMetadataForObject($serializer_12, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_35);
  protoOf($serializer_13).uo = typeParametersSerializers;
  initMetadataForObject($serializer_13, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_36);
  protoOf($serializer_14).uo = typeParametersSerializers;
  initMetadataForObject($serializer_14, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_37);
  protoOf($serializer_15).uo = typeParametersSerializers;
  initMetadataForObject($serializer_15, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_38);
  protoOf($serializer_16).uo = typeParametersSerializers;
  initMetadataForObject($serializer_16, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForInterface(Intent, 'Intent', VOID, VOID, VOID, VOID, VOID, {0: Companion_getInstance_39});
  initMetadataForClass(UpdateSettings, 'UpdateSettings', VOID, VOID, [Intent], VOID, VOID, {0: $serializer_getInstance_1});
  initMetadataForObject(Start, 'Start', VOID, VOID, [Intent], VOID, VOID, {0: Start_getInstance});
  initMetadataForClass(Kick, 'Kick', VOID, VOID, [Intent], VOID, VOID, {0: $serializer_getInstance_2});
  initMetadataForClass(ConfirmWord, 'ConfirmWord', ConfirmWord, VOID, [Intent], VOID, VOID, {0: $serializer_getInstance_3});
  initMetadataForObject(EndTalk, 'EndTalk', VOID, VOID, [Intent], VOID, VOID, {0: EndTalk_getInstance});
  initMetadataForClass(Vote, 'Vote', VOID, VOID, [Intent], VOID, VOID, {0: $serializer_getInstance_4});
  initMetadataForObject(CloseVote, 'CloseVote', VOID, VOID, [Intent], VOID, VOID, {0: CloseVote_getInstance});
  initMetadataForClass(Accuse, 'Accuse', VOID, VOID, [Intent], VOID, VOID, {0: $serializer_getInstance_5});
  initMetadataForClass(Judge, 'Judge', VOID, VOID, [Intent], VOID, VOID, {0: $serializer_getInstance_6});
  initMetadataForClass(ReportOut, 'ReportOut', VOID, VOID, [Intent], VOID, VOID, {0: $serializer_getInstance_7});
  initMetadataForClass(UndoOut, 'UndoOut', VOID, VOID, [Intent], VOID, VOID, {0: $serializer_getInstance_8});
  initMetadataForObject(EndNg, 'EndNg', VOID, VOID, [Intent], VOID, VOID, {0: EndNg_getInstance});
  initMetadataForClass(SpyGuess, 'SpyGuess', VOID, VOID, [Intent], VOID, VOID, {0: $serializer_getInstance_9});
  initMetadataForClass(SyncAnswer, 'SyncAnswer', VOID, VOID, [Intent], VOID, VOID, {0: $serializer_getInstance_10});
  initMetadataForClass(GuessSolved, 'GuessSolved', VOID, VOID, [Intent], VOID, VOID, {0: $serializer_getInstance_11});
  initMetadataForObject(GuessGiveUp, 'GuessGiveUp', VOID, VOID, [Intent], VOID, VOID, {0: GuessGiveUp_getInstance});
  initMetadataForClass(QVote, 'QVote', VOID, VOID, [Intent], VOID, VOID, {0: $serializer_getInstance_12});
  initMetadataForClass(ArenaPlay, 'ArenaPlay', VOID, VOID, [Intent], VOID, VOID, {0: $serializer_getInstance_13});
  initMetadataForClass(ArenaInput, 'ArenaInput', VOID, VOID, [Intent], VOID, VOID, {0: $serializer_getInstance_14});
  initMetadataForClass(ArenaReport, 'ArenaReport', VOID, VOID, [Intent], VOID, VOID, {0: $serializer_getInstance_15});
  initMetadataForObject(Next, 'Next', VOID, VOID, [Intent], VOID, VOID, {0: Next_getInstance});
  initMetadataForObject(BackToLobby, 'BackToLobby', VOID, VOID, [Intent], VOID, VOID, {0: BackToLobby_getInstance});
  initMetadataForClass(AdDone, 'AdDone', VOID, VOID, [Intent], VOID, VOID, {0: $serializer_getInstance_16});
  initMetadataForCompanion(Companion_39);
  initMetadataForCompanion(Companion_40);
  protoOf($serializer_17).uo = typeParametersSerializers;
  initMetadataForObject($serializer_17, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(VoteCount, 'VoteCount', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_17});
  initMetadataForCompanion(Companion_41);
  protoOf($serializer_18).uo = typeParametersSerializers;
  initMetadataForObject($serializer_18, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(ArenaCard, 'ArenaCard', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_18});
  initMetadataForCompanion(Companion_42);
  protoOf($serializer_19).uo = typeParametersSerializers;
  initMetadataForObject($serializer_19, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(ArenaSeat, 'ArenaSeat', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_19});
  initMetadataForCompanion(Companion_43);
  protoOf($serializer_20).uo = typeParametersSerializers;
  initMetadataForObject($serializer_20, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(ArenaMini, 'ArenaMini', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_20});
  initMetadataForCompanion(Companion_44);
  protoOf($serializer_21).uo = typeParametersSerializers;
  initMetadataForObject($serializer_21, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(SyncGroup, 'SyncGroup', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_21});
  initMetadataForCompanion(Companion_45);
  protoOf($serializer_22).uo = typeParametersSerializers;
  initMetadataForObject($serializer_22, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(RevealEntry, 'RevealEntry', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_22});
  initMetadataForCompanion(Companion_46);
  protoOf($serializer_23).uo = typeParametersSerializers;
  initMetadataForObject($serializer_23, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(NgEntry, 'NgEntry', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_23});
  initMetadataForCompanion(Companion_47);
  protoOf($serializer_24).uo = typeParametersSerializers;
  initMetadataForObject($serializer_24, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_48);
  protoOf($serializer_25).uo = typeParametersSerializers;
  initMetadataForObject($serializer_25, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_49);
  protoOf($serializer_26).uo = typeParametersSerializers;
  initMetadataForObject($serializer_26, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_50);
  protoOf($serializer_27).uo = typeParametersSerializers;
  initMetadataForObject($serializer_27, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_51);
  protoOf($serializer_28).uo = typeParametersSerializers;
  initMetadataForObject($serializer_28, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_52);
  protoOf($serializer_29).uo = typeParametersSerializers;
  initMetadataForObject($serializer_29, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_53);
  protoOf($serializer_30).uo = typeParametersSerializers;
  initMetadataForObject($serializer_30, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_54);
  protoOf($serializer_31).uo = typeParametersSerializers;
  initMetadataForObject($serializer_31, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_55);
  protoOf($serializer_32).uo = typeParametersSerializers;
  initMetadataForObject($serializer_32, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_56);
  protoOf($serializer_33).uo = typeParametersSerializers;
  initMetadataForObject($serializer_33, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_57);
  protoOf($serializer_34).uo = typeParametersSerializers;
  initMetadataForObject($serializer_34, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_58);
  protoOf($serializer_35).uo = typeParametersSerializers;
  initMetadataForObject($serializer_35, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_59);
  protoOf($serializer_36).uo = typeParametersSerializers;
  initMetadataForObject($serializer_36, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_60);
  protoOf($serializer_37).uo = typeParametersSerializers;
  initMetadataForObject($serializer_37, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_61);
  protoOf($serializer_38).uo = typeParametersSerializers;
  initMetadataForObject($serializer_38, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_62);
  protoOf($serializer_39).uo = typeParametersSerializers;
  initMetadataForObject($serializer_39, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_63);
  protoOf($serializer_40).uo = typeParametersSerializers;
  initMetadataForObject($serializer_40, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_64);
  protoOf($serializer_41).uo = typeParametersSerializers;
  initMetadataForObject($serializer_41, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForInterface(Screen, 'Screen', VOID, VOID, VOID, VOID, VOID, {0: Companion_getInstance_65});
  initMetadataForObject(Lobby, 'Lobby', VOID, VOID, [Screen], VOID, VOID, {0: Lobby_getInstance});
  initMetadataForClass(WwReveal, 'WwReveal', VOID, VOID, [Screen], VOID, VOID, {0: $serializer_getInstance_24});
  initMetadataForClass(WwRevealLocal, 'WwRevealLocal', VOID, VOID, [Screen], VOID, VOID, {0: $serializer_getInstance_25});
  initMetadataForClass(WwTalk, 'WwTalk', VOID, VOID, [Screen], VOID, VOID, {0: $serializer_getInstance_26});
  initMetadataForClass(WwVote, 'WwVote', VOID, VOID, [Screen], VOID, VOID, {0: $serializer_getInstance_27});
  initMetadataForClass(WwAccuse, 'WwAccuse', VOID, VOID, [Screen], VOID, VOID, {0: $serializer_getInstance_28});
  initMetadataForClass(WwGuess, 'WwGuess', VOID, VOID, [Screen], VOID, VOID, {0: $serializer_getInstance_29});
  initMetadataForClass(WwResult, 'WwResult', VOID, VOID, [Screen], VOID, VOID, {0: $serializer_getInstance_30});
  initMetadataForClass(NgPlay, 'NgPlay', VOID, VOID, [Screen], VOID, VOID, {0: $serializer_getInstance_31});
  initMetadataForClass(NgResult, 'NgResult', VOID, VOID, [Screen], VOID, VOID, {0: $serializer_getInstance_32});
  initMetadataForClass(SyncAnswer_0, 'SyncAnswer', VOID, VOID, [Screen], VOID, VOID, {0: $serializer_getInstance_33});
  initMetadataForClass(SyncReveal, 'SyncReveal', VOID, VOID, [Screen], VOID, VOID, {0: $serializer_getInstance_34});
  initMetadataForClass(GuessPlay, 'GuessPlay', VOID, VOID, [Screen], VOID, VOID, {0: $serializer_getInstance_35});
  initMetadataForClass(GuessResult, 'GuessResult', VOID, VOID, [Screen], VOID, VOID, {0: $serializer_getInstance_36});
  initMetadataForClass(QVote_0, 'QVote', VOID, VOID, [Screen], VOID, VOID, {0: $serializer_getInstance_37});
  initMetadataForClass(QReveal, 'QReveal', VOID, VOID, [Screen], VOID, VOID, {0: $serializer_getInstance_38});
  initMetadataForClass(Arena, 'Arena', VOID, VOID, [Screen], VOID, VOID, {0: $serializer_getInstance_39});
  initMetadataForClass(ArenaResult, 'ArenaResult', VOID, VOID, [Screen], VOID, VOID, {0: $serializer_getInstance_40});
  initMetadataForClass(AdBreak, 'AdBreak', VOID, VOID, [Screen], VOID, VOID, {0: $serializer_getInstance_41});
  initMetadataForCompanion(Companion_65);
  initMetadataForCompanion(Companion_66);
  protoOf($serializer_42).uo = typeParametersSerializers;
  initMetadataForObject($serializer_42, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(PlayerView, 'PlayerView', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_42});
  initMetadataForCompanion(Companion_67);
  protoOf($serializer_43).uo = typeParametersSerializers;
  initMetadataForObject($serializer_43, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(WwPair, 'WwPair', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_43});
  initMetadataForCompanion(Companion_68);
  protoOf($serializer_44).uo = typeParametersSerializers;
  initMetadataForObject($serializer_44, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(NgWord, 'NgWord', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_44});
  initMetadataForCompanion(Companion_69);
  protoOf($serializer_45).uo = typeParametersSerializers;
  initMetadataForObject($serializer_45, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(TopicFile, 'TopicFile', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_45});
  initMetadataForCompanion(Companion_70);
  initMetadataForClass(TopicBank, 'TopicBank');
  initMetadataForClass(JsHost, 'JsHost');
  //endregion
  //region block: init
  Companion_instance = new Companion();
  StringCompanionObject_instance = new StringCompanionObject();
  Unit_instance = new Unit();
  _stableSortingIsSupported = null;
  Companion_instance_2 = new Companion_2();
  CompletedContinuation_instance = new CompletedContinuation();
  Companion_instance_4 = new Companion_4();
  Companion_instance_5 = new Companion_5();
  Companion_instance_6 = new Companion_6();
  EmptyIterator_instance = new EmptyIterator();
  Key_instance = new Key();
  Companion_instance_10 = new Companion_10();
  UNINITIALIZED_VALUE_instance = new UNINITIALIZED_VALUE();
  Companion_instance_11 = new Companion_11();
  Companion_instance_13 = new Companion_13();
  Companion_instance_14 = new Companion_14();
  Companion_instance_15 = new Companion_15();
  Companion_instance_16 = new Companion_16();
  Tombstone_instance = new Tombstone();
  Full_instance = new Full();
  InGame_instance = new InGame();
  Companion_instance_20 = new Companion_20();
  Companion_instance_21 = new Companion_21();
  Companion_instance_23 = new Companion_23();
  Companion_instance_24 = new Companion_24();
  Companion_instance_25 = new Companion_25();
  Companion_instance_26 = new Companion_26();
  Companion_instance_27 = new Companion_27();
  Companion_instance_28 = new Companion_28();
  Companion_instance_29 = new Companion_29();
  Companion_instance_30 = new Companion_30();
  Companion_instance_31 = new Companion_31();
  Companion_instance_32 = new Companion_32();
  Companion_instance_33 = new Companion_33();
  Companion_instance_34 = new Companion_34();
  Companion_instance_35 = new Companion_35();
  Companion_instance_36 = new Companion_36();
  Companion_instance_37 = new Companion_37();
  Companion_instance_38 = new Companion_38();
  Companion_instance_39 = new Companion_39();
  Companion_instance_40 = new Companion_40();
  Companion_instance_45 = new Companion_45();
  Companion_instance_46 = new Companion_46();
  Companion_instance_49 = new Companion_49();
  Companion_instance_58 = new Companion_58();
  Companion_instance_64 = new Companion_64();
  Companion_instance_65 = new Companion_65();
  Companion_instance_67 = new Companion_67();
  Companion_instance_68 = new Companion_68();
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var $com = _.com || (_.com = {});
    var $com$zen = $com.zen || ($com.zen = {});
    var $com$zen$partygame = $com$zen.partygame || ($com$zen.partygame = {});
    var $com$zen$partygame$game = $com$zen$partygame.game || ($com$zen$partygame.game = {});
    $com$zen$partygame$game.JsHost = JsHost;
    $com$zen$partygame$game.protoVersion = protoVersion;
    $com$zen$partygame$game.arenaCardsJson = arenaCardsJson;
    $com$zen$partygame$game.metaJson = metaJson;
  }
  $jsExportAll$(_);
  //endregion
  return _;
}));

//# sourceMappingURL=partygame.js.map
