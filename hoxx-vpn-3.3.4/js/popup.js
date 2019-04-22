/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.2.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2017-03-20T18:59Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};



	function DOMEval( code, doc ) {
		doc = doc || document;

		var script = doc.createElement( "script" );

		script.text = code;
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.2.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 13
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Simple selector that can be filtered directly, removing non-Elements
	if ( risSimple.test( qualifier ) ) {
		return jQuery.filter( qualifier, elements, not );
	}

	// Complex selector, compare the two sets, removing non-Elements
	qualifier = jQuery.filter( qualifier, elements );
	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( jQuery.isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ jQuery.camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ jQuery.camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( jQuery.camelCase );
			} else {
				key = jQuery.camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: jQuery.isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( ">tbody", elem )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		div.style.cssText =
			"box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Support: Android 4.0 - 4.3 only
		// Some styles come back with percentage values, even though they shouldn't
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	jQuery.extend( support, {
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {
			computeStyleTests();
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i,
		val = 0;

	// If we already have the right measurement, avoid augmentation
	if ( extra === ( isBorderBox ? "border" : "content" ) ) {
		i = 4;

	// Otherwise initialize for horizontal or vertical properties
	} else {
		i = name === "width" ? 1 : 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with computed style
	var valueIsBorderBox,
		styles = getStyles( elem ),
		val = curCSS( elem, name, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Computed unit is not pixels. Stop here and return.
	if ( rnumnonpx.test( val ) ) {
		return val;
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = isBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ name ] );

	// Fall back to offsetWidth/Height when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	if ( val === "auto" ) {
		val = elem[ "offset" + name[ 0 ].toUpperCase() + name.slice( 1 ) ];
	}

	// Normalize "", auto, and prepare for extra
	val = parseFloat( val ) || 0;

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 13
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnothtmlwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




support.focusin = "onfocusin" in window;


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = jQuery.isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 13
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( jQuery.isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var doc, docElem, rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		rect = elem.getBoundingClientRect();

		doc = elem.ownerDocument;
		docElem = doc.documentElement;
		win = doc.defaultView;

		return {
			top: rect.top + win.pageYOffset - docElem.clientTop,
			left: rect.left + win.pageXOffset - docElem.clientLeft
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset = {
				top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
				left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
			};
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( jQuery.isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
		return jQuery;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	VIEWS: './views',
	ASSETS: './assets',
	FLAGS: './images/flags',
	IMAGES: './images'
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _folders = __webpack_require__(1);

var _folders2 = _interopRequireDefault(_folders);

var _errorcodes = __webpack_require__(19);

var _errorcodes2 = _interopRequireDefault(_errorcodes);

var _platform = __webpack_require__(20);

var _platform2 = _interopRequireDefault(_platform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	VERSION: chrome.runtime.getManifest().version,
	PLATFORM: _platform2.default.name,
	BROWSERLANG: chrome.i18n.getUILanguage(),
	FALLBACKLINK: "https://base0-hx.trlone.com/client/",
	SERVERSJSONFILE: _folders2.default.ASSETS + "/servers.json",
	UNINSTALLPATH: "html/uninstalled.php",
	BASEDOMAIN: "trlone.com",
	BACKUPBASEDOMAIN: "mainbackupdomain.com",
	TESTREQUESTREGEX: "proxytest[0-9]+.com",
	SERVICE: "Hoxx VPN",
	SERVICESHORT: "hoxx",
	REALM: "hoxx.com",
	CONTACTSUPPORTURL: "https://hoxx.com/contact/",
	PACSCRIPT: "js/PAC.js",
	DOWNLOADLINKS: {
		ANDROID: "https://play.google.com/store/apps/details?id=com.hoxxvpn.main",
		DESKTOP: "http://desktopclient.net/gw/index.html#/hoxx"
	},
	RATEUS: {
		LINKS: {
			FIREFOX: "https://addons.mozilla.org/en-US/firefox/addon/hoxx-vpn-proxy/reviews/",
			CHROME: "https://chrome.google.com/webstore/detail/hoxx-vpn-proxy/nbcojefnccbanplpoffopkoepjmhgdgh/reviews"
		},
		INTERVAL: 1000 * 60 * 60 * 24 * 3, // 3 days
		DONTASKINTERVAL: 1000 * 60 * 60 * 24 * 3 * 30 // 3 months
	},
	WEBRTCADDON: {
		URL: _platform2.default.WebRTCAddon.url,
		ID: _platform2.default.WebRTCAddon.id
	},
	PROXYADDONS: _platform2.default.proxyAddons,
	STORAGEKEYS: {
		BASELINK: "baselink",
		LASTBASELINK: "lastBaselink",
		BASELINKNOTFOUND: "baselinkNotFound",
		LOCALE: "locale",
		LANGUAGE: "language",
		USERDATA: "userData",
		CONFIGDATA: "configData",
		CONFIGDATATTL: "configDataTTL",
		PROXYSEARCHFAILED: "proxySearchFailed",
		PROXYSEARCHFAILEDCOUNTRY: "proxySearchFailedCountry",
		PROXYSEARCHLOCK: "proxySearchLock",
		ISPROXYON: "isProxyOn",
		CURRENTPROXY: "currentSelectedProxy",
		DCACHE: "dCache",
		NOTIFICATIONS: "cachedNotifications",
		RATEUSNEXTTIME: "ratingNextTime",
		PROXYEXTENSIONS: "activeProxyExtensionList",
		IPLOOKUPURL: "ipLookUpUrl",
		STICKEDCOUNTRIES: "stickedCountries",
		ISCOUNTRYSORTED: "isCountrySorted",
		LASTSELECTEDTAB: "lastSelectedTab",
		BYPASSLIST: "bypassList",
		ISINAPPNOTIFICATIONOFF: "isInAppNotificationOff",
		LASTLOGINRESULT: "lastLoginResult",
		INSTALLID: "installId"
	},
	STATUS: {
		BLOCKED: "BLOCKED",
		OK: "OK"
	},
	IMAGES: {
		ONICON: _folders2.default.IMAGES + "/symbol48.png",
		OFFICON: _folders2.default.IMAGES + "/symbol-disabled48.png",
		HEADERLOGO: _folders2.default.IMAGES + "/logo-header.png",
		LOGOLARGE: _folders2.default.IMAGES + "/logo.png",
		FEATUREPINGIF: "img/feature_pin.gif",
		FEATURESORTGIF: "img/feature_sorting.gif"
	},
	ERRORCODES: _errorcodes2.default,
	LOADINGIMG: '<img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/' + 'C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyk' + 'lrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG' + '4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8p' + 'ByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIu' + 'mIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzI' + 'IunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAAD' + 'Mwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQ' + 'AAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAA' + 'QABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==">'
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ServiceMeta = __webpack_require__(2);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _folders = __webpack_require__(1);

var _folders2 = _interopRequireDefault(_folders);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Utils = function () {
    function Utils() {
        _classCallCheck(this, Utils);
    }

    _createClass(Utils, [{
        key: 'isEmpty',
        value: function isEmpty(obj) {

            for (var prop in obj) {
                if (obj.hasOwnProperty(prop)) return false;
            }

            return true;
        }
    }, {
        key: 'shuffleArray',
        value: function shuffleArray(o) {
            for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x) {}
            return o;
        }
    }, {
        key: 'loadTemplate',
        value: function loadTemplate(html, locale) {
            var template = html;
            var htmlKeys = html.match(/(?:\{)[^\{\}]*?(?:\})/g);

            if (!htmlKeys) return template;

            htmlKeys.forEach(function (htmlKey) {
                var localeKey = htmlKey.replace("{", "").replace("}", "");

                if (locale[localeKey]) template = template.replace(htmlKey, locale[localeKey]);
            });

            return template;
        }
    }, {
        key: 'getConfigTTL',
        value: function getConfigTTL() {
            return Math.floor(Date.now() / 1000) + 5 * 60;
        }
    }, {
        key: 'getLocaleInStorage',
        value: function getLocaleInStorage() {
            return new Promise(function (resolve, reject) {
                chrome.storage.local.get(_ServiceMeta2.default.STORAGEKEYS.LOCALE, function (storage) {
                    if (storage[_ServiceMeta2.default.STORAGEKEYS.LOCALE]) return resolve(storage[_ServiceMeta2.default.STORAGEKEYS.LOCALE]);

                    reject();
                });
            });
        }
    }, {
        key: 'isUserPremium',
        value: function isUserPremium(serverData) {
            if (serverData.premium == 0) {
                return false;
            } else {
                if (!Date.now) {
                    Date.now = function () {
                        return new Date().getTime();
                    };
                }

                var datenow = Math.floor(Date.now() / 1000);
                //console.log("UTC TIME" + datenow);
                var expiredate = serverData.premium;

                if (expiredate > datenow) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    }, {
        key: 'getUserExpirationData',
        value: function getUserExpirationData(timestamp) {
            var a = new Date(timestamp * 1000);
            var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            var year = a.getFullYear();
            var month = months[a.getMonth()];
            var date = a.getDate();

            return date + ". " + month + " " + year;
        }
    }, {
        key: 'generateIdentifierDomain',
        value: function generateIdentifierDomain() {
            var it = Math.floor(Math.random() * 100000 + 1);
            return _ServiceMeta2.default.SERVICESHORT + "proxytest" + it + ".com";
        }
    }, {
        key: 'getDateNow',
        value: function getDateNow() {
            return Math.floor(Date.now() / 1000);
        }
    }, {
        key: 'openNewTab',
        value: function openNewTab(url) {
            chrome.tabs.create({ "url": url });
        }
    }, {
        key: 'setProxyStatusIcon',
        value: function setProxyStatusIcon(isProxyOn) {
            var icon = isProxyOn ? _ServiceMeta2.default.IMAGES.ONICON : _ServiceMeta2.default.IMAGES.OFFICON;
            chrome.browserAction.setIcon({ path: { 38: icon } });
        }
    }, {
        key: 'showConnectionNotification',
        value: function showConnectionNotification(title, message, isProxyOn) {
            var icon = isProxyOn ? _ServiceMeta2.default.IMAGES.ONICON : _ServiceMeta2.default.IMAGES.OFFICON;
            var options = {
                type: "basic",
                title: title,
                message: message,
                iconUrl: icon
            };

            chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.ISINAPPNOTIFICATIONOFF, _ServiceMeta2.default.STORAGEKEYS.CONFIGDATA], function (storage) {

                var configData = storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA];
                var uid = configData && configData.uid ? configData.uid : "";
                var inAppNoti = storage[_ServiceMeta2.default.STORAGEKEYS.ISINAPPNOTIFICATIONOFF];

                var condition = inAppNoti && inAppNoti[uid] === false ? true : false;

                if (!condition) chrome.notifications.create(options);
            });
        }
    }, {
        key: 'showNotification',
        value: function showNotification(title, message) {
            var options = {
                type: "basic",
                title: title,
                message: message,
                iconUrl: _ServiceMeta2.default.IMAGES.ONICON
            };

            chrome.notifications.create(options);
        }
    }, {
        key: 'removePort',
        value: function removePort(hostnameWithPort) {

            if (hostnameWithPort && hostnameWithPort.indexOf(":") > -1) {

                return hostnameWithPort.substring(0, hostnameWithPort.indexOf(":"));
            }

            return hostnameWithPort;
        }
    }, {
        key: 'escapeParamsOfUrl',
        value: function escapeParamsOfUrl(url) {
            var esurl = "" + url;
            if (esurl.indexOf("?") > -1) {
                esurl = esurl.substr(0, esurl.indexOf("?"));
            }
            return esurl;
        }
    }, {
        key: 'addMetaParameter',
        value: function addMetaParameter(parameter) {
            return parameter = parameter + "&cv=" + _ServiceMeta2.default.VERSION + "&platform=" + _ServiceMeta2.default.PLATFORM;
        }
    }, {
        key: 'getRemainingTime',
        value: function getRemainingTime(blockTime, locales) {
            if (blockTime > 1) {
                var timeNow = Math.floor(Date.now() / 1000);
                var remaining = blockTime - timeNow;
                var timeleft = "";
                if (remaining < 3600) {
                    timeleft = Math.floor(remaining / 60) + " " + locales.tempBlockMinutes;
                } else {
                    timeleft = Math.floor(remaining / 3600) + " " + locales.tempBlockHours;
                }
                return timeleft;
            }
            return 0;
        }
    }, {
        key: 'hideElement',
        value: function hideElement(element) {
            if (element && element.css) element.css('display', 'none');
        }
    }, {
        key: 'showElement',
        value: function showElement(element) {
            if (element && element.css) element.css('display', 'block');
        }
    }, {
        key: 'stripProtocol',
        value: function stripProtocol(url) {
            return url.replace("http://", "").replace("https://", "");
        }
    }, {
        key: 'sortObject',
        value: function sortObject(o) {
            return Object.keys(o).sort().reduce(function (r, k) {
                return r[k] = o[k], r;
            }, {});
        }
    }, {
        key: 'getTabIdByServerType',
        value: function getTabIdByServerType(serverType) {
            if (!serverType) return 0;

            serverType = serverType.toUpperCase();
            switch (serverType) {
                case "REGULAR":
                    return 0;
                    break;
                case "PREMIUM":
                    return 1;
                    break;
                case "PUBLIC":
                    return 2;
                    break;
            }
        }
    }, {
        key: 'openPlatformLink',
        value: function openPlatformLink(platform) {
            if (platform === "desktop") return this.openNewTab(_ServiceMeta2.default.DOWNLOADLINKS.DESKTOP);
            if (platform === "android") return this.openNewTab(_ServiceMeta2.default.DOWNLOADLINKS.ANDROID);
        }
    }, {
        key: 'createUniqueId',
        value: function createUniqueId() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0,
                    v = c == 'x' ? r : r & 0x3 | 0x8;
                return v.toString(16);
            });
        }
    }, {
        key: 'setInstallId',
        value: function setInstallId() {
            var _this = this;

            chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.INSTALLID], function (storage) {
                if (!storage[_ServiceMeta2.default.STORAGEKEYS.INSTALLID]) {
                    chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.INSTALLID, _this.createUniqueId()));
                }
            });
        }
    }, {
        key: 'isInt',
        value: function isInt(value) {
            return !isNaN(value) && function (x) {
                return (x | 0) === x;
            }(parseFloat(value));
        }
    }]);

    return Utils;
}();

exports.default = new Utils();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BackgroundRequester = function () {
	function BackgroundRequester() {
		_classCallCheck(this, BackgroundRequester);

		this.backgroundPagePort = chrome.runtime.connect({ name: "background-page-port" });
		this.pendingRequests = [];
		this.backgroundPagePort.onMessage.addListener(this.handleResponse.bind(this));
	}

	_createClass(BackgroundRequester, [{
		key: "handleResponse",
		value: function handleResponse(m) {

			if (m.response && m.requestId && this.pendingRequests.hasOwnProperty(m.requestId)) {

				this.pendingRequests[m.requestId](m.data);
				delete this.pendingRequests[m.requestId];
			}
		}
	}, {
		key: "request",
		value: function request(targetApi, targetMethod, data) {
			var _this = this;
			return new Promise(function (resolve, reject) {

				var uniqueRequestId = new Date().getTime();
				_this.pendingRequests[uniqueRequestId] = resolve;
				_this.backgroundPagePort.postMessage({ requestId: uniqueRequestId, request: targetApi, method: targetMethod, data: data });
			});
		}
	}]);

	return BackgroundRequester;
}();

exports.default = new BackgroundRequester();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.DOMPurify = factory());
}(this, (function () { 'use strict';

var html = ['a', 'abbr', 'acronym', 'address', 'area', 'article', 'aside', 'audio', 'b', 'bdi', 'bdo', 'big', 'blink', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'content', 'data', 'datalist', 'dd', 'decorator', 'del', 'details', 'dfn', 'dir', 'div', 'dl', 'dt', 'element', 'em', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meter', 'nav', 'nobr', 'ol', 'optgroup', 'option', 'output', 'p', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'section', 'select', 'shadow', 'small', 'source', 'spacer', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr'];

// SVG
var svg = ['svg', 'a', 'altglyph', 'altglyphdef', 'altglyphitem', 'animatecolor', 'animatemotion', 'animatetransform', 'audio', 'canvas', 'circle', 'clippath', 'defs', 'desc', 'ellipse', 'filter', 'font', 'g', 'glyph', 'glyphref', 'hkern', 'image', 'line', 'lineargradient', 'marker', 'mask', 'metadata', 'mpath', 'path', 'pattern', 'polygon', 'polyline', 'radialgradient', 'rect', 'stop', 'style', 'switch', 'symbol', 'text', 'textpath', 'title', 'tref', 'tspan', 'video', 'view', 'vkern'];

var svgFilters = ['feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'feSpecularLighting', 'feTile', 'feTurbulence'];

var mathMl = ['math', 'menclose', 'merror', 'mfenced', 'mfrac', 'mglyph', 'mi', 'mlabeledtr', 'mmuliscripts', 'mn', 'mo', 'mover', 'mpadded', 'mphantom', 'mroot', 'mrow', 'ms', 'mpspace', 'msqrt', 'mystyle', 'msub', 'msup', 'msubsup', 'mtable', 'mtd', 'mtext', 'mtr', 'munder', 'munderover'];

var text = ['#text'];

var html$1 = ['accept', 'action', 'align', 'alt', 'autocomplete', 'background', 'bgcolor', 'border', 'cellpadding', 'cellspacing', 'checked', 'cite', 'class', 'clear', 'color', 'cols', 'colspan', 'coords', 'datetime', 'default', 'dir', 'disabled', 'download', 'enctype', 'face', 'for', 'headers', 'height', 'hidden', 'high', 'href', 'hreflang', 'id', 'ismap', 'label', 'lang', 'list', 'loop', 'low', 'max', 'maxlength', 'media', 'method', 'min', 'multiple', 'name', 'noshade', 'novalidate', 'nowrap', 'open', 'optimum', 'pattern', 'placeholder', 'poster', 'preload', 'pubdate', 'radiogroup', 'readonly', 'rel', 'required', 'rev', 'reversed', 'role', 'rows', 'rowspan', 'spellcheck', 'scope', 'selected', 'shape', 'size', 'span', 'srclang', 'start', 'src', 'step', 'style', 'summary', 'tabindex', 'title', 'type', 'usemap', 'valign', 'value', 'width', 'xmlns'];

var svg$1 = ['accent-height', 'accumulate', 'additivive', 'alignment-baseline', 'ascent', 'attributename', 'attributetype', 'azimuth', 'basefrequency', 'baseline-shift', 'begin', 'bias', 'by', 'class', 'clip', 'clip-path', 'clip-rule', 'color', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'cx', 'cy', 'd', 'dx', 'dy', 'diffuseconstant', 'direction', 'display', 'divisor', 'dur', 'edgemode', 'elevation', 'end', 'fill', 'fill-opacity', 'fill-rule', 'filter', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'fx', 'fy', 'g1', 'g2', 'glyph-name', 'glyphref', 'gradientunits', 'gradienttransform', 'height', 'href', 'id', 'image-rendering', 'in', 'in2', 'k', 'k1', 'k2', 'k3', 'k4', 'kerning', 'keypoints', 'keysplines', 'keytimes', 'lang', 'lengthadjust', 'letter-spacing', 'kernelmatrix', 'kernelunitlength', 'lighting-color', 'local', 'marker-end', 'marker-mid', 'marker-start', 'markerheight', 'markerunits', 'markerwidth', 'maskcontentunits', 'maskunits', 'max', 'mask', 'media', 'method', 'mode', 'min', 'name', 'numoctaves', 'offset', 'operator', 'opacity', 'order', 'orient', 'orientation', 'origin', 'overflow', 'paint-order', 'path', 'pathlength', 'patterncontentunits', 'patterntransform', 'patternunits', 'points', 'preservealpha', 'r', 'rx', 'ry', 'radius', 'refx', 'refy', 'repeatcount', 'repeatdur', 'restart', 'result', 'rotate', 'scale', 'seed', 'shape-rendering', 'specularconstant', 'specularexponent', 'spreadmethod', 'stddeviation', 'stitchtiles', 'stop-color', 'stop-opacity', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke', 'stroke-width', 'style', 'surfacescale', 'tabindex', 'targetx', 'targety', 'transform', 'text-anchor', 'text-decoration', 'text-rendering', 'textlength', 'type', 'u1', 'u2', 'unicode', 'values', 'viewbox', 'visibility', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'width', 'word-spacing', 'wrap', 'writing-mode', 'xchannelselector', 'ychannelselector', 'x', 'x1', 'x2', 'xmlns', 'y', 'y1', 'y2', 'z', 'zoomandpan'];

var mathMl$1 = ['accent', 'accentunder', 'align', 'bevelled', 'close', 'columnsalign', 'columnlines', 'columnspan', 'denomalign', 'depth', 'dir', 'display', 'displaystyle', 'fence', 'frame', 'height', 'href', 'id', 'largeop', 'length', 'linethickness', 'lspace', 'lquote', 'mathbackground', 'mathcolor', 'mathsize', 'mathvariant', 'maxsize', 'minsize', 'movablelimits', 'notation', 'numalign', 'open', 'rowalign', 'rowlines', 'rowspacing', 'rowspan', 'rspace', 'rquote', 'scriptlevel', 'scriptminsize', 'scriptsizemultiplier', 'selection', 'separator', 'separators', 'stretchy', 'subscriptshift', 'supscriptshift', 'symmetric', 'voffset', 'width', 'xmlns'];

var xml = ['xlink:href', 'xml:id', 'xlink:title', 'xml:space', 'xmlns:xlink'];

/* Add properties to a lookup table */
function addToSet(set, array) {
  var l = array.length;
  while (l--) {
    if (typeof array[l] === 'string') {
      array[l] = array[l].toLowerCase();
    }
    set[array[l]] = true;
  }
  return set;
}

/* Shallow clone an object */
function clone(object) {
  var newObject = {};
  var property = void 0;
  for (property in object) {
    if (Object.prototype.hasOwnProperty.call(object, property)) {
      newObject[property] = object[property];
    }
  }
  return newObject;
}

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var getGlobal = function getGlobal() {
  return typeof window === 'undefined' ? null : window;
};

function createDOMPurify() {
  var window = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getGlobal();

  var DOMPurify = function DOMPurify(root) {
    return createDOMPurify(root);
  };

  /**
      * Version label, exposed for easier checks
      * if DOMPurify is up to date or not
      */
  DOMPurify.version = '1.0.2';

  /**
    * Array of elements that DOMPurify removed during sanitation.
    * Empty if nothing was removed.
    */
  DOMPurify.removed = [];

  if (!window || !window.document || window.document.nodeType !== 9) {
    // Not running in a browser, provide a factory function
    // so that you can pass your own Window
    DOMPurify.isSupported = false;

    return DOMPurify;
  }

  var originalDocument = window.document;
  var useDOMParser = false; // See comment below
  var useXHR = false;

  var document = window.document;
  var DocumentFragment = window.DocumentFragment,
      HTMLTemplateElement = window.HTMLTemplateElement,
      Node = window.Node,
      NodeFilter = window.NodeFilter,
      _window$NamedNodeMap = window.NamedNodeMap,
      NamedNodeMap = _window$NamedNodeMap === undefined ? window.NamedNodeMap || window.MozNamedAttrMap : _window$NamedNodeMap,
      Text = window.Text,
      Comment = window.Comment,
      DOMParser = window.DOMParser,
      _window$XMLHttpReques = window.XMLHttpRequest,
      XMLHttpRequest = _window$XMLHttpReques === undefined ? window.XMLHttpRequest : _window$XMLHttpReques,
      _window$encodeURI = window.encodeURI,
      encodeURI = _window$encodeURI === undefined ? window.encodeURI : _window$encodeURI;

  // As per issue #47, the web-components registry is inherited by a
  // new document created via createHTMLDocument. As per the spec
  // (http://w3c.github.io/webcomponents/spec/custom/#creating-and-passing-registries)
  // a new empty registry is used when creating a template contents owner
  // document, so we use that as our parent document to ensure nothing
  // is inherited.

  if (typeof HTMLTemplateElement === 'function') {
    var template = document.createElement('template');
    if (template.content && template.content.ownerDocument) {
      document = template.content.ownerDocument;
    }
  }

  var _document = document,
      implementation = _document.implementation,
      createNodeIterator = _document.createNodeIterator,
      getElementsByTagName = _document.getElementsByTagName,
      createDocumentFragment = _document.createDocumentFragment;

  var importNode = originalDocument.importNode;

  var hooks = {};

  /**
    * Expose whether this browser supports running the full DOMPurify.
    */
  DOMPurify.isSupported = implementation && typeof implementation.createHTMLDocument !== 'undefined' && document.documentMode !== 9;

  /**
    * We consider the elements and attributes below to be safe. Ideally
    * don't add any new ones but feel free to remove unwanted ones.
    */

  /* allowed element names */
  var ALLOWED_TAGS = null;
  var DEFAULT_ALLOWED_TAGS = addToSet({}, [].concat(_toConsumableArray(html), _toConsumableArray(svg), _toConsumableArray(svgFilters), _toConsumableArray(mathMl), _toConsumableArray(text)));

  /* Allowed attribute names */
  var ALLOWED_ATTR = null;
  var DEFAULT_ALLOWED_ATTR = addToSet({}, [].concat(_toConsumableArray(html$1), _toConsumableArray(svg$1), _toConsumableArray(mathMl$1), _toConsumableArray(xml)));

  /* Explicitly forbidden tags (overrides ALLOWED_TAGS/ADD_TAGS) */
  var FORBID_TAGS = null;

  /* Explicitly forbidden attributes (overrides ALLOWED_ATTR/ADD_ATTR) */
  var FORBID_ATTR = null;

  /* Decide if ARIA attributes are okay */
  var ALLOW_ARIA_ATTR = true;

  /* Decide if custom data attributes are okay */
  var ALLOW_DATA_ATTR = true;

  /* Decide if unknown protocols are okay */
  var ALLOW_UNKNOWN_PROTOCOLS = false;

  /* Output should be safe for jQuery's $() factory? */
  var SAFE_FOR_JQUERY = false;

  /* Output should be safe for common template engines.
   * This means, DOMPurify removes data attributes, mustaches and ERB
   */
  var SAFE_FOR_TEMPLATES = false;

  /* Specify template detection regex for SAFE_FOR_TEMPLATES mode */
  var MUSTACHE_EXPR = /\{\{[\s\S]*|[\s\S]*\}\}/gm;
  var ERB_EXPR = /<%[\s\S]*|[\s\S]*%>/gm;

  /* Decide if document with <html>... should be returned */
  var WHOLE_DOCUMENT = false;

  /* Track whether config is already set on this instance of DOMPurify. */
  var SET_CONFIG = false;

  /* Decide if all elements (e.g. style, script) must be children of
   * document.body. By default, browsers might move them to document.head */
  var FORCE_BODY = false;

  /* Decide if a DOM `HTMLBodyElement` should be returned, instead of a html string.
   * If `WHOLE_DOCUMENT` is enabled a `HTMLHtmlElement` will be returned instead
   */
  var RETURN_DOM = false;

  /* Decide if a DOM `DocumentFragment` should be returned, instead of a html string */
  var RETURN_DOM_FRAGMENT = false;

  /* If `RETURN_DOM` or `RETURN_DOM_FRAGMENT` is enabled, decide if the returned DOM
   * `Node` is imported into the current `Document`. If this flag is not enabled the
   * `Node` will belong (its ownerDocument) to a fresh `HTMLDocument`, created by
   * DOMPurify. */
  var RETURN_DOM_IMPORT = false;

  /* Output should be free from DOM clobbering attacks? */
  var SANITIZE_DOM = true;

  /* Keep element content when removing element? */
  var KEEP_CONTENT = true;

  /* Allow usage of profiles like html, svg and mathMl */
  var USE_PROFILES = {};

  /* Tags to ignore content of when KEEP_CONTENT is true */
  var FORBID_CONTENTS = addToSet({}, ['audio', 'head', 'math', 'script', 'style', 'template', 'svg', 'video']);

  /* Tags that are safe for data: URIs */
  var DATA_URI_TAGS = addToSet({}, ['audio', 'video', 'img', 'source', 'image']);

  /* Attributes safe for values like "javascript:" */
  var URI_SAFE_ATTRIBUTES = addToSet({}, ['alt', 'class', 'for', 'id', 'label', 'name', 'pattern', 'placeholder', 'summary', 'title', 'value', 'style', 'xmlns']);

  /* Keep a reference to config to pass to hooks */
  var CONFIG = null;

  /* Ideally, do not touch anything below this line */
  /* ______________________________________________ */

  var formElement = document.createElement('form');

  /**
  * _parseConfig
  *
  * @param  optional config literal
  */
  // eslint-disable-next-line complexity
  var _parseConfig = function _parseConfig(cfg) {
    /* Shield configuration object from tampering */
    if ((typeof cfg === 'undefined' ? 'undefined' : _typeof(cfg)) !== 'object') {
      cfg = {};
    }

    /* Set configuration parameters */
    ALLOWED_TAGS = 'ALLOWED_TAGS' in cfg ? addToSet({}, cfg.ALLOWED_TAGS) : DEFAULT_ALLOWED_TAGS;
    ALLOWED_ATTR = 'ALLOWED_ATTR' in cfg ? addToSet({}, cfg.ALLOWED_ATTR) : DEFAULT_ALLOWED_ATTR;
    FORBID_TAGS = 'FORBID_TAGS' in cfg ? addToSet({}, cfg.FORBID_TAGS) : {};
    FORBID_ATTR = 'FORBID_ATTR' in cfg ? addToSet({}, cfg.FORBID_ATTR) : {};
    USE_PROFILES = 'USE_PROFILES' in cfg ? cfg.USE_PROFILES : false;
    ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false; // Default true
    ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false; // Default true
    ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false; // Default false
    SAFE_FOR_JQUERY = cfg.SAFE_FOR_JQUERY || false; // Default false
    SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false; // Default false
    WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false; // Default false
    RETURN_DOM = cfg.RETURN_DOM || false; // Default false
    RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false; // Default false
    RETURN_DOM_IMPORT = cfg.RETURN_DOM_IMPORT || false; // Default false
    FORCE_BODY = cfg.FORCE_BODY || false; // Default false
    SANITIZE_DOM = cfg.SANITIZE_DOM !== false; // Default true
    KEEP_CONTENT = cfg.KEEP_CONTENT !== false; // Default true

    if (SAFE_FOR_TEMPLATES) {
      ALLOW_DATA_ATTR = false;
    }

    if (RETURN_DOM_FRAGMENT) {
      RETURN_DOM = true;
    }

    /* Parse profile info */
    if (USE_PROFILES) {
      ALLOWED_TAGS = addToSet({}, [].concat(_toConsumableArray(text)));
      ALLOWED_ATTR = [];
      if (USE_PROFILES.html === true) {
        addToSet(ALLOWED_TAGS, html);
        addToSet(ALLOWED_ATTR, html$1);
      }
      if (USE_PROFILES.svg === true) {
        addToSet(ALLOWED_TAGS, svg);
        addToSet(ALLOWED_ATTR, svg$1);
        addToSet(ALLOWED_ATTR, xml);
      }
      if (USE_PROFILES.svgFilters === true) {
        addToSet(ALLOWED_TAGS, svgFilters);
        addToSet(ALLOWED_ATTR, svg$1);
        addToSet(ALLOWED_ATTR, xml);
      }
      if (USE_PROFILES.mathMl === true) {
        addToSet(ALLOWED_TAGS, mathMl);
        addToSet(ALLOWED_ATTR, mathMl$1);
        addToSet(ALLOWED_ATTR, xml);
      }
    }

    /* Merge configuration parameters */
    if (cfg.ADD_TAGS) {
      if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
        ALLOWED_TAGS = clone(ALLOWED_TAGS);
      }
      addToSet(ALLOWED_TAGS, cfg.ADD_TAGS);
    }
    if (cfg.ADD_ATTR) {
      if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
        ALLOWED_ATTR = clone(ALLOWED_ATTR);
      }
      addToSet(ALLOWED_ATTR, cfg.ADD_ATTR);
    }
    if (cfg.ADD_URI_SAFE_ATTR) {
      addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR);
    }

    /* Add #text in case KEEP_CONTENT is set to true */
    if (KEEP_CONTENT) {
      ALLOWED_TAGS['#text'] = true;
    }

    // Prevent further manipulation of configuration.
    // Not available in IE8, Safari 5, etc.
    if (Object && 'freeze' in Object) {
      Object.freeze(cfg);
    }

    CONFIG = cfg;
  };

  /**
  * _forceRemove
  *
  * @param  a DOM node
  */
  var _forceRemove = function _forceRemove(node) {
    DOMPurify.removed.push({ element: node });
    try {
      node.parentNode.removeChild(node);
    } catch (err) {
      node.outerHTML = '';
    }
  };

  /**
  * _removeAttribute
  *
  * @param  an Attribute name
  * @param  a DOM node
  */
  var _removeAttribute = function _removeAttribute(name, node) {
    DOMPurify.removed.push({
      attribute: node.getAttributeNode(name),
      from: node
    });
    node.removeAttribute(name);
  };

  /**
  * _initDocument
  *
  * @param  a string of dirty markup
  * @return a DOM, filled with the dirty markup
  */
  var _initDocument = function _initDocument(dirty) {
    /* Create a HTML document */
    var doc = void 0;
    var body = void 0;

    if (FORCE_BODY) {
      dirty = '<remove></remove>' + dirty;
    }

    /* Use XHR if necessary because Safari 10.1 and newer are buggy */
    if (useXHR) {
      try {
        dirty = encodeURI(dirty);
      } catch (err) {}
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'document';
      xhr.open('GET', 'data:text/html;charset=utf-8,' + dirty, false);
      xhr.send(null);
      doc = xhr.response;
    }

    /* Use DOMParser to workaround Firefox bug (see comment below) */
    if (useDOMParser) {
      try {
        doc = new DOMParser().parseFromString(dirty, 'text/html');
      } catch (err) {}
    }

    /* Otherwise use createHTMLDocument, because DOMParser is unsafe in
    Safari (see comment below) */
    if (!doc || !doc.documentElement) {
      doc = implementation.createHTMLDocument('');
      body = doc.body;
      body.parentNode.removeChild(body.parentNode.firstElementChild);
      body.outerHTML = dirty;
    }

    /* Work on whole document or just its body */
    return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? 'html' : 'body')[0];
  };

  // Safari 10.1+ (unfixed as of time of writing) has a catastrophic bug in
  // its implementation of DOMParser such that the following executes the
  // JavaScript:
  //
  // new DOMParser()
  //   .parseFromString('<svg onload=alert(document.domain)>', 'text/html');
  //
  // Later, it was also noticed that even more assumed benign and inert ways
  // of creating a document are now insecure thanks to Safari. So we work
  // around that with a feature test and use XHR to create the document in
  // case we really have to. That one seems safe for now.
  //
  // However, Firefox uses a different parser for innerHTML rather than
  // DOMParser (see https://bugzilla.mozilla.org/show_bug.cgi?id=1205631)
  // which means that you *must* use DOMParser, otherwise the output may
  // not be safe if used in a document.write context later.
  //
  // So we feature detect the Firefox bug and use the DOMParser if necessary.
  if (DOMPurify.isSupported) {
    (function () {
      var doc = _initDocument('<svg><g onload="this.parentNode.remove()"></g></svg>');
      if (!doc.querySelector('svg')) {
        useXHR = true;
      }
      try {
        doc = _initDocument('<svg><p><style><img src="</style><img src=x onerror=alert(1)//">');
        if (doc.querySelector('svg img')) {
          useDOMParser = true;
        }
      } catch (err) {}
    })();
  }

  /**
  * _createIterator
  *
  * @param  document/fragment to create iterator for
  * @return iterator instance
  */
  var _createIterator = function _createIterator(root) {
    return createNodeIterator.call(root.ownerDocument || root, root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT, function () {
      return NodeFilter.FILTER_ACCEPT;
    }, false);
  };

  /**
  * _isClobbered
  *
  * @param  element to check for clobbering attacks
  * @return true if clobbered, false if safe
  */
  var _isClobbered = function _isClobbered(elm) {
    if (elm instanceof Text || elm instanceof Comment) {
      return false;
    }
    if (typeof elm.nodeName !== 'string' || typeof elm.textContent !== 'string' || typeof elm.removeChild !== 'function' || !(elm.attributes instanceof NamedNodeMap) || typeof elm.removeAttribute !== 'function' || typeof elm.setAttribute !== 'function') {
      return true;
    }
    return false;
  };

  /**
  * _isNode
  *
  * @param object to check whether it's a DOM node
  * @return true is object is a DOM node
  */
  var _isNode = function _isNode(obj) {
    return (typeof Node === 'undefined' ? 'undefined' : _typeof(Node)) === 'object' ? obj instanceof Node : obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && typeof obj.nodeType === 'number' && typeof obj.nodeName === 'string';
  };

  /**
  * _executeHook
  * Execute user configurable hooks
  *
  * @param  {String} entryPoint  Name of the hook's entry point
  * @param  {Node} currentNode
  */
  var _executeHook = function _executeHook(entryPoint, currentNode, data) {
    if (!hooks[entryPoint]) {
      return;
    }

    hooks[entryPoint].forEach(function (hook) {
      hook.call(DOMPurify, currentNode, data, CONFIG);
    });
  };

  /**
  * _sanitizeElements
  *
  * @protect nodeName
  * @protect textContent
  * @protect removeChild
  *
  * @param   node to check for permission to exist
  * @return  true if node was killed, false if left alive
  */
  var _sanitizeElements = function _sanitizeElements(currentNode) {
    var content = void 0;

    /* Execute a hook if present */
    _executeHook('beforeSanitizeElements', currentNode, null);

    /* Check if element is clobbered or can clobber */
    if (_isClobbered(currentNode)) {
      _forceRemove(currentNode);
      return true;
    }

    /* Now let's check the element's type and name */
    var tagName = currentNode.nodeName.toLowerCase();

    /* Execute a hook if present */
    _executeHook('uponSanitizeElement', currentNode, {
      tagName: tagName,
      allowedTags: ALLOWED_TAGS
    });

    /* Remove element if anything forbids its presence */
    if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
      /* Keep content except for black-listed elements */
      if (KEEP_CONTENT && !FORBID_CONTENTS[tagName] && typeof currentNode.insertAdjacentHTML === 'function') {
        try {
          currentNode.insertAdjacentHTML('AfterEnd', currentNode.innerHTML);
        } catch (err) {}
      }
      _forceRemove(currentNode);
      return true;
    }

    /* Convert markup to cover jQuery behavior */
    if (SAFE_FOR_JQUERY && !currentNode.firstElementChild && (!currentNode.content || !currentNode.content.firstElementChild) && /</g.test(currentNode.textContent)) {
      DOMPurify.removed.push({ element: currentNode.cloneNode() });
      currentNode.innerHTML = currentNode.textContent.replace(/</g, '&lt;');
    }

    /* Sanitize element content to be template-safe */
    if (SAFE_FOR_TEMPLATES && currentNode.nodeType === 3) {
      /* Get the element's text content */
      content = currentNode.textContent;
      content = content.replace(MUSTACHE_EXPR, ' ');
      content = content.replace(ERB_EXPR, ' ');
      if (currentNode.textContent !== content) {
        DOMPurify.removed.push({ element: currentNode.cloneNode() });
        currentNode.textContent = content;
      }
    }

    /* Execute a hook if present */
    _executeHook('afterSanitizeElements', currentNode, null);

    return false;
  };

  var DATA_ATTR = /^data-[\-\w.\u00B7-\uFFFF]/; // eslint-disable-line no-useless-escape
  var ARIA_ATTR = /^aria-[\-\w]+$/; // eslint-disable-line no-useless-escape
  var IS_ALLOWED_URI = /^(?:(?:(?:f|ht)tps?|mailto|tel):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i; // eslint-disable-line no-useless-escape
  var IS_SCRIPT_OR_DATA = /^(?:\w+script|data):/i;
  /* This needs to be extensive thanks to Webkit/Blink's behavior */
  var ATTR_WHITESPACE = /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g;

  /**
  * _sanitizeAttributes
  *
  * @protect attributes
  * @protect nodeName
  * @protect removeAttribute
  * @protect setAttribute
  *
  * @param   node to sanitize
  * @return  void
  */
  // eslint-disable-next-line complexity
  var _sanitizeAttributes = function _sanitizeAttributes(currentNode) {
    var attr = void 0;
    var name = void 0;
    var value = void 0;
    var lcName = void 0;
    var idAttr = void 0;
    var attributes = void 0;
    var l = void 0;
    /* Execute a hook if present */
    _executeHook('beforeSanitizeAttributes', currentNode, null);

    attributes = currentNode.attributes;

    /* Check if we have attributes; if not we might have a text node */
    if (!attributes) {
      return;
    }

    var hookEvent = {
      attrName: '',
      attrValue: '',
      keepAttr: true,
      allowedAttributes: ALLOWED_ATTR
    };
    l = attributes.length;

    /* Go backwards over all attributes; safely remove bad ones */
    while (l--) {
      attr = attributes[l];
      name = attr.name;
      value = attr.value.trim();
      lcName = name.toLowerCase();

      /* Execute a hook if present */
      hookEvent.attrName = lcName;
      hookEvent.attrValue = value;
      hookEvent.keepAttr = true;
      _executeHook('uponSanitizeAttribute', currentNode, hookEvent);
      value = hookEvent.attrValue;

      /* Remove attribute */
      // Safari (iOS + Mac), last tested v8.0.5, crashes if you try to
      // remove a "name" attribute from an <img> tag that has an "id"
      // attribute at the time.
      if (lcName === 'name' && currentNode.nodeName === 'IMG' && attributes.id) {
        idAttr = attributes.id;
        attributes = Array.prototype.slice.apply(attributes);
        _removeAttribute('id', currentNode);
        _removeAttribute(name, currentNode);
        if (attributes.indexOf(idAttr) > l) {
          currentNode.setAttribute('id', idAttr.value);
        }
      } else if (
      // This works around a bug in Safari, where input[type=file]
      // cannot be dynamically set after type has been removed
      currentNode.nodeName === 'INPUT' && lcName === 'type' && value === 'file' && (ALLOWED_ATTR[lcName] || !FORBID_ATTR[lcName])) {
        continue;
      } else {
        // This avoids a crash in Safari v9.0 with double-ids.
        // The trick is to first set the id to be empty and then to
        // remove the attribute
        if (name === 'id') {
          currentNode.setAttribute(name, '');
        }
        _removeAttribute(name, currentNode);
      }

      /* Did the hooks approve of the attribute? */
      if (!hookEvent.keepAttr) {
        continue;
      }

      /* Make sure attribute cannot clobber */
      if (SANITIZE_DOM && (lcName === 'id' || lcName === 'name') && (value in window || value in document || value in formElement)) {
        continue;
      }

      /* Sanitize attribute content to be template-safe */
      if (SAFE_FOR_TEMPLATES) {
        value = value.replace(MUSTACHE_EXPR, ' ');
        value = value.replace(ERB_EXPR, ' ');
      }

      /* Allow valid data-* attributes: At least one character after "-"
         (https://html.spec.whatwg.org/multipage/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes)
         XML-compatible (https://html.spec.whatwg.org/multipage/infrastructure.html#xml-compatible and http://www.w3.org/TR/xml/#d0e804)
         We don't need to check the value; it's always URI safe. */
      if (ALLOW_DATA_ATTR && DATA_ATTR.test(lcName)) {
        // This attribute is safe
      } else if (ALLOW_ARIA_ATTR && ARIA_ATTR.test(lcName)) {
        // This attribute is safe
        /* Otherwise, check the name is permitted */
      } else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
        continue;

        /* Check value is safe. First, is attr inert? If so, is safe */
      } else if (URI_SAFE_ATTRIBUTES[lcName]) {
        // This attribute is safe
        /* Check no script, data or unknown possibly unsafe URI
         unless we know URI values are safe for that attribute */
      } else if (IS_ALLOWED_URI.test(value.replace(ATTR_WHITESPACE, ''))) {
        // This attribute is safe
        /* Keep image data URIs alive if src/xlink:href is allowed */
      } else if ((lcName === 'src' || lcName === 'xlink:href') && value.indexOf('data:') === 0 && DATA_URI_TAGS[currentNode.nodeName.toLowerCase()]) {
        // This attribute is safe
        /* Allow unknown protocols: This provides support for links that
         are handled by protocol handlers which may be unknown ahead of
         time, e.g. fb:, spotify: */
      } else if (ALLOW_UNKNOWN_PROTOCOLS && !IS_SCRIPT_OR_DATA.test(value.replace(ATTR_WHITESPACE, ''))) {
        // This attribute is safe
        /* Check for binary attributes */
        // eslint-disable-next-line no-negated-condition
      } else if (!value) {
        // Binary attributes are safe at this point
        /* Anything else, presume unsafe, do not add it back */
      } else {
        continue;
      }

      /* Handle invalid data-* attribute set by try-catching it */
      try {
        currentNode.setAttribute(name, value);
        DOMPurify.removed.pop();
      } catch (err) {}
    }

    /* Execute a hook if present */
    _executeHook('afterSanitizeAttributes', currentNode, null);
  };

  /**
  * _sanitizeShadowDOM
  *
  * @param  fragment to iterate over recursively
  * @return void
  */
  var _sanitizeShadowDOM = function _sanitizeShadowDOM(fragment) {
    var shadowNode = void 0;
    var shadowIterator = _createIterator(fragment);

    /* Execute a hook if present */
    _executeHook('beforeSanitizeShadowDOM', fragment, null);

    while (shadowNode = shadowIterator.nextNode()) {
      /* Execute a hook if present */
      _executeHook('uponSanitizeShadowNode', shadowNode, null);

      /* Sanitize tags and elements */
      if (_sanitizeElements(shadowNode)) {
        continue;
      }

      /* Deep shadow DOM detected */
      if (shadowNode.content instanceof DocumentFragment) {
        _sanitizeShadowDOM(shadowNode.content);
      }

      /* Check attributes, sanitize if necessary */
      _sanitizeAttributes(shadowNode);
    }

    /* Execute a hook if present */
    _executeHook('afterSanitizeShadowDOM', fragment, null);
  };

  /**
  * Sanitize
  * Public method providing core sanitation functionality
  *
  * @param {String|Node} dirty string or DOM node
  * @param {Object} configuration object
  */
  // eslint-disable-next-line complexity
  DOMPurify.sanitize = function (dirty, cfg) {
    var body = void 0;
    var importedNode = void 0;
    var currentNode = void 0;
    var oldNode = void 0;
    var returnNode = void 0;
    /* Make sure we have a string to sanitize.
      DO NOT return early, as this will return the wrong type if
      the user has requested a DOM object rather than a string */
    if (!dirty) {
      dirty = '<!-->';
    }

    /* Stringify, in case dirty is an object */
    if (typeof dirty !== 'string' && !_isNode(dirty)) {
      // eslint-disable-next-line no-negated-condition
      if (typeof dirty.toString !== 'function') {
        throw new TypeError('toString is not a function');
      } else {
        dirty = dirty.toString();
      }
    }

    /* Check we can run. Otherwise fall back or ignore */
    if (!DOMPurify.isSupported) {
      if (_typeof(window.toStaticHTML) === 'object' || typeof window.toStaticHTML === 'function') {
        if (typeof dirty === 'string') {
          return window.toStaticHTML(dirty);
        } else if (_isNode(dirty)) {
          return window.toStaticHTML(dirty.outerHTML);
        }
      }
      return dirty;
    }

    /* Assign config vars */
    if (!SET_CONFIG) {
      _parseConfig(cfg);
    }

    /* Clean up removed elements */
    DOMPurify.removed = [];

    if (dirty instanceof Node) {
      /* If dirty is a DOM element, append to an empty document to avoid
         elements being stripped by the parser */
      body = _initDocument('<!-->');
      importedNode = body.ownerDocument.importNode(dirty, true);
      if (importedNode.nodeType === 1 && importedNode.nodeName === 'BODY') {
        /* Node is already a body, use as is */
        body = importedNode;
      } else {
        body.appendChild(importedNode);
      }
    } else {
      /* Exit directly if we have nothing to do */
      if (!RETURN_DOM && !WHOLE_DOCUMENT && dirty.indexOf('<') === -1) {
        return dirty;
      }

      /* Initialize the document to work on */
      body = _initDocument(dirty);

      /* Check we have a DOM node from the data */
      if (!body) {
        return RETURN_DOM ? null : '';
      }
    }

    /* Remove first element node (ours) if FORCE_BODY is set */
    if (FORCE_BODY) {
      _forceRemove(body.firstChild);
    }

    /* Get node iterator */
    var nodeIterator = _createIterator(body);

    /* Now start iterating over the created document */
    while (currentNode = nodeIterator.nextNode()) {
      /* Fix IE's strange behavior with manipulated textNodes #89 */
      if (currentNode.nodeType === 3 && currentNode === oldNode) {
        continue;
      }

      /* Sanitize tags and elements */
      if (_sanitizeElements(currentNode)) {
        continue;
      }

      /* Shadow DOM detected, sanitize it */
      if (currentNode.content instanceof DocumentFragment) {
        _sanitizeShadowDOM(currentNode.content);
      }

      /* Check attributes, sanitize if necessary */
      _sanitizeAttributes(currentNode);

      oldNode = currentNode;
    }

    /* Return sanitized string or DOM */
    if (RETURN_DOM) {
      if (RETURN_DOM_FRAGMENT) {
        returnNode = createDocumentFragment.call(body.ownerDocument);

        while (body.firstChild) {
          returnNode.appendChild(body.firstChild);
        }
      } else {
        returnNode = body;
      }

      if (RETURN_DOM_IMPORT) {
        /* AdoptNode() is not used because internal state is not reset
               (e.g. the past names map of a HTMLFormElement), this is safe
               in theory but we would rather not risk another attack vector.
               The state that is cloned by importNode() is explicitly defined
               by the specs. */
        returnNode = importNode.call(originalDocument, returnNode, true);
      }

      return returnNode;
    }

    return WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
  };

  /**
  * Public method to set the configuration once
  * setConfig
  *
  * @param {Object} configuration object
  * @return void
  */
  DOMPurify.setConfig = function (cfg) {
    _parseConfig(cfg);
    SET_CONFIG = true;
  };

  /**
  * Public method to remove the configuration
  * clearConfig
  *
  * @return void
  */
  DOMPurify.clearConfig = function () {
    CONFIG = null;
    SET_CONFIG = false;
  };

  /**
  * AddHook
  * Public method to add DOMPurify hooks
  *
  * @param {String} entryPoint
  * @param {Function} hookFunction
  */
  DOMPurify.addHook = function (entryPoint, hookFunction) {
    if (typeof hookFunction !== 'function') {
      return;
    }
    hooks[entryPoint] = hooks[entryPoint] || [];
    hooks[entryPoint].push(hookFunction);
  };

  /**
  * RemoveHook
  * Public method to remove a DOMPurify hook at a given entryPoint
  * (pops it from the stack of hooks if more are present)
  *
  * @param {String} entryPoint
  * @return void
  */
  DOMPurify.removeHook = function (entryPoint) {
    if (hooks[entryPoint]) {
      hooks[entryPoint].pop();
    }
  };

  /**
  * RemoveHooks
  * Public method to remove all DOMPurify hooks at a given entryPoint
  *
  * @param  {String} entryPoint
  * @return void
  */
  DOMPurify.removeHooks = function (entryPoint) {
    if (hooks[entryPoint]) {
      hooks[entryPoint] = [];
    }
  };

  /**
  * RemoveAllHooks
  * Public method to remove all DOMPurify hooks
  *
  * @return void
  */
  DOMPurify.removeAllHooks = function () {
    hooks = {};
  };

  return DOMPurify;
}

var purify = createDOMPurify();

return purify;

})));
//# sourceMappingURL=purify.js.map


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DOMPurify = __webpack_require__(5);

var _DOMPurify2 = _interopRequireDefault(_DOMPurify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sanitize = function () {
	function Sanitize() {
		_classCallCheck(this, Sanitize);
	}

	_createClass(Sanitize, [{
		key: 'escpateData',
		value: function escpateData(data) {
			return _DOMPurify2.default.sanitize(data, { SAFE_FOR_JQUERY: true });
		}
	}]);

	return Sanitize;
}();

exports.default = new Sanitize();

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _folders = __webpack_require__(1);

var _folders2 = _interopRequireDefault(_folders);

var _ServiceMeta = __webpack_require__(2);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _BackgroundRequester = __webpack_require__(4);

var _BackgroundRequester2 = _interopRequireDefault(_BackgroundRequester);

var _Utils = __webpack_require__(3);

var _Utils2 = _interopRequireDefault(_Utils);

var _DashboardView = __webpack_require__(8);

var _DashboardView2 = _interopRequireDefault(_DashboardView);

var _RegisterView = __webpack_require__(33);

var _RegisterView2 = _interopRequireDefault(_RegisterView);

var _ForgotpassView = __webpack_require__(34);

var _ForgotpassView2 = _interopRequireDefault(_ForgotpassView);

var _TicketTabCreaterView = __webpack_require__(16);

var _TicketTabCreaterView2 = _interopRequireDefault(_TicketTabCreaterView);

var _LanguageView = __webpack_require__(9);

var _LanguageView2 = _interopRequireDefault(_LanguageView);

var _endpoints = __webpack_require__(14);

var _endpoints2 = _interopRequireDefault(_endpoints);

var _DOMPurify = __webpack_require__(5);

var _DOMPurify2 = _interopRequireDefault(_DOMPurify);

var _DesktopClientInfoView = __webpack_require__(11);

var _DesktopClientInfoView2 = _interopRequireDefault(_DesktopClientInfoView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LoginView = function () {
	function LoginView() {
		_classCallCheck(this, LoginView);

		this.template = _folders2.default.VIEWS + '/login.html';
		this.header = _folders2.default.VIEWS + '/header-with-lang.html';
	}

	_createClass(LoginView, [{
		key: 'initView',
		value: function initView(error) {
			var _this = this;

			_this.loadingError = error;
			this.App = (0, _jquery2.default)('#app');
			_Utils2.default.getLocaleInStorage().then(_this.loadTemplate.bind(this), _this.loadLocaleFromServer.bind(this));
		}
	}, {
		key: 'loadTemplate',
		value: function loadTemplate(locale) {
			var _this = this;

			this.App.html("");

			_jquery2.default.get(_this.header, function (header) {
				_this.App.append(header);
				_jquery2.default.get(_this.template, function (template) {
					var loadedTemplate = _Utils2.default.loadTemplate(template, locale);

					_this.App.append(loadedTemplate);
					_this.selectElements(locale);
					_this.setErrorMessages(locale);
				}, "html");
			}, "html");
		}
	}, {
		key: 'selectElements',
		value: function selectElements(locale) {
			var _this = this;

			_this.emailField = (0, _jquery2.default)('#login-email');
			_this.passwordField = (0, _jquery2.default)('#login-password');

			_this.loginButton = (0, _jquery2.default)('#login-button');
			_this.registerButton = (0, _jquery2.default)('#register-button');
			_this.forgotpassButton = (0, _jquery2.default)('#forgotpass-button');
			_this.contactButton = (0, _jquery2.default)('#contact-button');

			_this.headerLangButton = (0, _jquery2.default)('#header-lang-button');

			_this.errorMessage = (0, _jquery2.default)('#error_message');

			_this.loginServiceLogo = (0, _jquery2.default)('#login-service-logo');

			_this.loginVersion = (0, _jquery2.default)('#login-version');

			/* Download Platform */
			_this.downloadAndroidButton = (0, _jquery2.default)('#dw-android');
			_this.downloadWindowsButton = (0, _jquery2.default)('#dw-windows');
			_this.downloadMacButton = (0, _jquery2.default)('#dw-macosx');

			_this.desktopClientInfoButton = (0, _jquery2.default)('#desktop-client-info');

			_this.setLoginVersion();
			_this.setServiceElements(locale);
			_this.setEvent();
		}
	}, {
		key: 'setServiceElements',
		value: function setServiceElements(locale) {
			var _this = this;
			_this.loginServiceLogo.attr('src', _ServiceMeta2.default.IMAGES.LOGOLARGE);

			//Linux/Ubuntu password field focus bug fix
			chrome.runtime.getPlatformInfo(function (platformInfo) {
				if (platformInfo && platformInfo.os && platformInfo.os === 'linux' && _ServiceMeta2.default.PLATFORM.toLowerCase() === 'firefox') {
					_this.passwordField.attr('type', 'text');
					_this.passwordField.focus(function () {
						_this.passwordField.css('font-family', 'dotfont');
						_this.passwordField.css('font-size', '8px');
						if (_this.passwordField.val() === '') {
							_this.passwordField.attr('placeholder', '');
						}
					});
					_this.passwordField.focusout(function () {
						if (_this.passwordField.val() === '') {
							_this.passwordField.css('font-family', '');
							_this.passwordField.css('font-size', '');
							_this.passwordField.attr('placeholder', locale.LoginPasswordLabel);
						}
					});
				}
			});
		}
	}, {
		key: 'setEvent',
		value: function setEvent() {
			var _this = this;

			_this.loginButton.click(_this.onLoginButtonClicked.bind(this));
			_this.registerButton.click(_this.onRegisterButtonClicked.bind(this));
			_this.forgotpassButton.click(_this.onForgotpassButtonClicked.bind(this));
			_this.contactButton.click(_this.onContactButtonClicked.bind(this));
			_this.headerLangButton.click(_this.onHeaderLangButtonClicked.bind(this));

			/* Download events */

			_this.downloadAndroidButton.click(_this.onDownloadEventFunc('android'));
			_this.downloadMacButton.click(_this.onDesktopInfoButtonClicked.bind(this));
			_this.downloadWindowsButton.click(_this.onDesktopInfoButtonClicked.bind(this));

			_this.desktopClientInfoButton.click(_this.onDesktopInfoButtonClicked.bind(this));

			(0, _jquery2.default)('input').keyup(function (e) {
				if (e.keyCode == 13) _this.loginButton.click();
			});
		}
	}, {
		key: 'onDesktopInfoButtonClicked',
		value: function onDesktopInfoButtonClicked() {
			var _this = this;

			_DesktopClientInfoView2.default.show();
		}
	}, {
		key: 'onDownloadEventFunc',
		value: function onDownloadEventFunc(platform) {
			var _this = this;

			return function () {
				_Utils2.default.openPlatformLink(platform);
			};
		}
	}, {
		key: 'setLoginVersion',
		value: function setLoginVersion() {
			var _this = this;

			_this.loginVersion.text(_ServiceMeta2.default.VERSION);
		}
	}, {
		key: 'setErrorMessages',
		value: function setErrorMessages(locales) {
			var _this = this;

			_this.LOGINTRY = locales.LoginTry;
			_this.EMAILFAILED = locales.LoginEmailFailed;
			_this.EMAILPASSFAILED = locales.LoginEmailAndPassFailed;
			_this.PASSFAILED = locales.LoginPassFailed;

			if (_this.loadingError) _this.errorMessage.text(_this.loadingError);
		}
	}, {
		key: 'loadLocaleFromServer',
		value: function loadLocaleFromServer() {
			var _this = this;
			_this.App.append('<div class="loadingimg"><img src="images/loading.gif"></div>');

			_BackgroundRequester2.default.request("api", "getLocale", {}).then(function (resp) {
				if (resp != undefined && resp != "" && resp.Retcode === 200) {

					chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.LOCALE, resp.locale), function () {
						window.location.reload(true);
					});
				} else {
					_this.App.html("Unknown error. Please contact support");
				}
			});
		}

		/* Modifier */

	}, {
		key: 'makeButtonInactive',
		value: function makeButtonInactive(button) {
			button.unbind('click');
			button.addClass('btn--inactive');
		}
	}, {
		key: 'makeButtonActive',
		value: function makeButtonActive(button) {
			button.click(this.onLoginButtonClicked.bind(this));
			button.removeClass('btn--inactive');
		}
	}, {
		key: 'setLoading',
		value: function setLoading() {
			var _this = this;

			_this.errorMessage.html(_ServiceMeta2.default.LOADINGIMG);
			_this.makeButtonInactive(_this.loginButton);
		}
	}, {
		key: 'unsetLoading',
		value: function unsetLoading() {
			var _this = this;

			_this.makeButtonActive(_this.loginButton);
		}

		/* Events */

	}, {
		key: 'onLoginButtonClicked',
		value: function onLoginButtonClicked() {
			var _this = this;

			var emailField = _jquery2.default.trim(_this.emailField.val());
			var passwordField = _jquery2.default.trim(_this.passwordField.val());

			if (emailField == "" && passwordField == "") return _this.errorMessage.text(_this.EMAILPASSFAILED);

			if (emailField == "" || emailField.indexOf('@') == -1 || emailField.indexOf('.') == -1) return _this.errorMessage.text(_this.EMAILFAILED);

			if (passwordField == "") return _this.errorMessage.text(_this.PASSFAILED);

			var userData = {
				email: emailField,
				password: passwordField
			};

			_this.setLoading();

			_BackgroundRequester2.default.request('api', 'login', { hitReason: 'login', userData: userData }).then(function (response) {

				if (response && response.errorcode == 0) {

					_DashboardView2.default.initView();
				} else {

					var errorMsg = "An unknown error has occurred. Please contact support.";

					// Show error message from API response
					if (response && response.hasOwnProperty('error_msg')) errorMsg = response.error_msg;

					// Open error url if it exists
					if (response && response.errorcode < 0 && response.errorurl) {

						errorMsg = "<a><b>" + errorMsg + '</b></a>';

						_this.errorMessage.html(_DOMPurify2.default.sanitize(errorMsg, { SAFE_FOR_JQUERY: true }));
						_this.errorMessage.css("cursor", "pointer");

						chrome.tabs.create({ url: response.errorurl });

						_this.errorMessage.click(function () {
							chrome.tabs.create({ url: response.errorurl });
						});
					}

					setTimeout(function () {
						_this.errorMessage.text(errorMsg);
						_this.unsetLoading();
					}, 1000);
				}
			});
		}
	}, {
		key: 'onRegisterButtonClicked',
		value: function onRegisterButtonClicked() {
			var _this = this;

			_RegisterView2.default.initView();
		}
	}, {
		key: 'onForgotpassButtonClicked',
		value: function onForgotpassButtonClicked() {
			var _this = this;

			_ForgotpassView2.default.initView();
		}
	}, {
		key: 'onContactButtonClicked',
		value: function onContactButtonClicked() {
			var _this = this;
			/*
   chrome.storage.local.get(ClientMeta.STORAGEKEYS.BASELINK, (storage) => {
   	if(!storage[ClientMeta.STORAGEKEYS.BASELINK]) return;
   		Utils.openNewTab(storage[ClientMeta.STORAGEKEYS.BASELINK] + Endpoints.SUPPORT);
   });
   */
			_TicketTabCreaterView2.default.initView();
		}
	}, {
		key: 'onHeaderLangButtonClicked',
		value: function onHeaderLangButtonClicked() {
			var _this = this;

			_LanguageView2.default.initView();
		}
	}]);

	return LoginView;
}();

exports.default = new LoginView();

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _folders = __webpack_require__(1);

var _folders2 = _interopRequireDefault(_folders);

var _ServiceMeta = __webpack_require__(2);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _BackgroundRequester = __webpack_require__(4);

var _BackgroundRequester2 = _interopRequireDefault(_BackgroundRequester);

var _Utils = __webpack_require__(3);

var _Utils2 = _interopRequireDefault(_Utils);

var _LoginView = __webpack_require__(7);

var _LoginView2 = _interopRequireDefault(_LoginView);

var _Tabs = __webpack_require__(22);

var _Tabs2 = _interopRequireDefault(_Tabs);

var _ServerList = __webpack_require__(23);

var _ServerList2 = _interopRequireDefault(_ServerList);

var _ProxySearchView = __webpack_require__(12);

var _ProxySearchView2 = _interopRequireDefault(_ProxySearchView);

var _UpgradeView = __webpack_require__(10);

var _UpgradeView2 = _interopRequireDefault(_UpgradeView);

var _UserProfileView = __webpack_require__(24);

var _UserProfileView2 = _interopRequireDefault(_UserProfileView);

var _OpenTip = __webpack_require__(13);

var _OpenTip2 = _interopRequireDefault(_OpenTip);

var _BypassConfigView = __webpack_require__(26);

var _BypassConfigView2 = _interopRequireDefault(_BypassConfigView);

var _endpoints = __webpack_require__(14);

var _endpoints2 = _interopRequireDefault(_endpoints);

var _ConnectedView = __webpack_require__(28);

var _ConnectedView2 = _interopRequireDefault(_ConnectedView);

var _GifView = __webpack_require__(32);

var _GifView2 = _interopRequireDefault(_GifView);

var _Sticked = __webpack_require__(15);

var _Sticked2 = _interopRequireDefault(_Sticked);

var _TicketTabCreaterView = __webpack_require__(16);

var _TicketTabCreaterView2 = _interopRequireDefault(_TicketTabCreaterView);

var _DOMPurify = __webpack_require__(5);

var _DOMPurify2 = _interopRequireDefault(_DOMPurify);

var _DesktopClientInfoView = __webpack_require__(11);

var _DesktopClientInfoView2 = _interopRequireDefault(_DesktopClientInfoView);

var _Sanitize = __webpack_require__(6);

var _Sanitize2 = _interopRequireDefault(_Sanitize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DashboardView = function () {
	function DashboardView() {
		_classCallCheck(this, DashboardView);

		this.template = _folders2.default.VIEWS + '/dashboard.html';
		this.header = _folders2.default.VIEWS + '/header.html';
	}

	_createClass(DashboardView, [{
		key: 'initView',
		value: function initView() {

			var _this = this;
			this.App = (0, _jquery2.default)('#app');

			_Utils2.default.getLocaleInStorage().then(_this.loadTemplate.bind(this), _this.loadLocaleFromServer.bind(this));
		}
	}, {
		key: 'loadTemplate',
		value: function loadTemplate(locale) {
			var _this = this;

			this.App.html("");

			_this.loadStorageData().then(function (storage) {
				_this.Storage = storage;

				_this.setNotification();

				if (storage[_ServiceMeta2.default.STORAGEKEYS.ISPROXYON]) {
					_ConnectedView2.default.initView();
					return;
				}

				_this.loadDashboardView(locale, storage);
			});
		}
	}, {
		key: 'loadDashboardView',
		value: function loadDashboardView(locale, storage) {
			var _this = this;

			_jquery2.default.get(_this.header, function (header) {
				_this.App.append(header);
				_jquery2.default.get(_this.template, function (template) {

					var loadedTemplate = _Utils2.default.loadTemplate(template, locale);
					_this.App.append(loadedTemplate);

					_this.setTabs();

					_this.serverList = {};

					_this.selectElements();

					_this.setUserProfile(locale);
					_this.setToolTip(locale);

					_this.checkBlockedStatus(storage, locale);
					_this.checkRateUsTime(storage, locale);

					_this.loadServerList();

					// Setting all events for selected elements
					_this.setEvents();
				}, "html");
			}, "html");
		}
	}, {
		key: 'loadServerList',
		value: function loadServerList(tabId, sorted) {
			var _this = this;

			if (!tabId) tabId = _this.Tab.current;

			var currentTabSection = _this.getSectionByTabId(tabId);
			var uid = _this.Storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA] ? _this.Storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA].uid : "";

			if (!_this.serverList[tabId]) _this.serverList[tabId] = _this.getServerListByTabId(tabId);

			var isSorted = sorted || _this.Storage && _this.Storage[_ServiceMeta2.default.STORAGEKEYS.ISCOUNTRYSORTED] && _this.Storage[_ServiceMeta2.default.STORAGEKEYS.ISCOUNTRYSORTED][uid] && _this.Storage[_ServiceMeta2.default.STORAGEKEYS.ISCOUNTRYSORTED][uid][tabId] ? true : false;

			if (currentTabSection.html() == "") return _this.buildServerList(currentTabSection, _this.serverList[tabId], tabId, isSorted);
		}
	}, {
		key: 'setTabs',
		value: function setTabs() {
			var _this = this;

			var tabs = [];
			[].slice.call(document.querySelectorAll('.tabs')).forEach(function (el) {
				tabs.push(new _Tabs2.default(el));
			});

			_this.Tab = tabs[0];
			_this.Tab.addOnChangedListener(_this.onTabChanged.bind(this));
			chrome.storage.local.get(_ServiceMeta2.default.STORAGEKEYS.LASTSELECTEDTAB, function (storage) {
				var lastSelectedTab = storage[_ServiceMeta2.default.STORAGEKEYS.LASTSELECTEDTAB];

				if (lastSelectedTab && lastSelectedTab > 0) {
					_this.onTabChanged(lastSelectedTab);
					_this.Tab._show(lastSelectedTab);
				}
			});
		}
	}, {
		key: 'selectElements',
		value: function selectElements() {
			var _this = this;

			_this.headerLogo = (0, _jquery2.default)('#header-logo');
			_this.headerVersion = (0, _jquery2.default)('#header-version');

			_this.userProfileUsername = (0, _jquery2.default)('#user-profile-username');
			_this.userProfileEmail = (0, _jquery2.default)('#user-profile-email');
			_this.userProfileStatus = (0, _jquery2.default)('#user-profile-status');
			_this.userProfileUpgradeButton = (0, _jquery2.default)('#user-profile-upgrade-button');

			_this.freeServerListSection = (0, _jquery2.default)('#free-server-list');
			_this.premiumServerListSection = (0, _jquery2.default)('#premium-server-list');
			_this.publicServerListSection = (0, _jquery2.default)('#public-server-list');

			_this.logoutButton = (0, _jquery2.default)('#logout-button');
			_this.userProfileButton = (0, _jquery2.default)('#user-profile-button');
			_this.ipLookupButton = (0, _jquery2.default)('#iplookup-button');
			_this.contactButton = (0, _jquery2.default)('#contact-button');

			_this.limitInfo = (0, _jquery2.default)('#limit-info');

			/* Download Platform */
			_this.downloadAndroidButton = (0, _jquery2.default)('#dw-android');
			_this.downloadWindowsButton = (0, _jquery2.default)('#dw-windows');
			_this.downloadMacButton = (0, _jquery2.default)('#dw-macosx');

			/* Sort option */

			_this.sortListByNameButton = (0, _jquery2.default)('#sort-list-by-name');

			_this.isSortedIcon = (0, _jquery2.default)('#is-sorted-icon');
			_this.sortFunctionDropdownContent = (0, _jquery2.default)('#sort-function-dropdown-content');

			_this.sortFunctionContainer = (0, _jquery2.default)('#sort-function-container');
			_this.selectLocationHeadline = (0, _jquery2.default)('#select-location-headline');

			_this.bypasslistFunctionButton = (0, _jquery2.default)('#bypass-function-container');

			_this.setServiceElements();
		}
	}, {
		key: 'setServiceElements',
		value: function setServiceElements() {
			var _this = this;
			chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.BASELINK, _ServiceMeta2.default.STORAGEKEYS.CONFIGDATA], function (storage) {
				var logosource = storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK] ? storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK] + "rest/img/logo/dashboard/150.png" : _ServiceMeta2.default.IMAGES.HEADERLOGO;
				var uid = "";
				var config = storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA];

				if (config && config.uid !== undefined) uid = "&uid=" + config.uid;

				var headerlogo = logosource + "?cv=" + _ServiceMeta2.default.VERSION + uid;
				_this.headerLogo.attr('src', headerlogo);
			});
			_this.headerVersion.text('v. ' + _ServiceMeta2.default.VERSION);
		}
	}, {
		key: 'setToolTip',
		value: function setToolTip(locales) {
			var _this = this;

			var options = {
				tipJoint: "bottom",
				background: "#fff",
				borderColor: '#fff'
			};

			new _OpenTip2.default(_this.logoutButton, locales.Logout, options);
			new _OpenTip2.default(_this.userProfileButton, locales.EditProfile, options);
			new _OpenTip2.default(_this.ipLookupButton, locales.DasboardIPLookup, options);
			new _OpenTip2.default(_this.contactButton, locales.DasboardContactSupport, options);
		}
	}, {
		key: 'checkBlockedStatus',
		value: function checkBlockedStatus(storage, locale) {
			var _this = this;

			var config = storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA];

			if (config && config.status == _ServiceMeta2.default.STATUS.BLOCKED && !_Utils2.default.isUserPremium(config)) {

				_BackgroundRequester2.default.request('ProxySetting', 'clearSettings', {}).then(function () {

					var remainingTime = _Utils2.default.getRemainingTime(config.statusdata, locale);
					var remainingTimeTxt = locale.tempBlockTextRemaining.replace('{0}', remainingTime);
					(0, _jquery2.default)('#limit-info-remaining-time').text(remainingTimeTxt);
					(0, _jquery2.default)('#limit-info-upgrade-button').click(_this.onUpgradeButtonClicked.bind(_this));

					_this.limitInfo.css("display", "block");
				});
			}
		}
	}, {
		key: 'checkRateUsTime',
		value: function checkRateUsTime(storage, locale) {
			var isProxyOn = storage[_ServiceMeta2.default.STORAGEKEYS.ISPROXYON];
			var nextRateTime = storage[_ServiceMeta2.default.STORAGEKEYS.RATEUSNEXTTIME];
			var config = storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA];

			var nextTime = Date.now() + _ServiceMeta2.default.RATEUS.INTERVAL;

			if (nextRateTime === undefined) {
				chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.RATEUSNEXTTIME, nextTime));
			}

			if (nextRateTime !== undefined && nextRateTime < Date.now() && !isProxyOn && config.status == _ServiceMeta2.default.STATUS.OK) {
				var rateUsBox = (0, _jquery2.default)('#rate-us-box');

				rateUsBox.css('display', 'block');

				var rateUsNowButton = (0, _jquery2.default)('#rate-us-now-button');

				var rateUsTxt = locale.RateNotRate ? locale.RateNotRate.replace("{0}", _ServiceMeta2.default.SERVICE) : locale.RateNotRate;
				rateUsNowButton.text(rateUsTxt);

				rateUsNowButton.click(function () {

					chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.RATEUSNEXTTIME, nextTime), function () {
						var rateUsLink = _ServiceMeta2.default.PLATFORM.toLowerCase() == "firefox" ? _ServiceMeta2.default.RATEUS.LINKS.FIREFOX : _ServiceMeta2.default.RATEUS.LINKS.CHROME;

						rateUsBox.css('display', 'none');
						_Utils2.default.openNewTab(rateUsLink);
					});
				});

				(0, _jquery2.default)('#rate-us-later-button').click(function () {
					chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.RATEUSNEXTTIME, nextTime), function () {
						rateUsBox.css('display', 'none');
					});
				});

				(0, _jquery2.default)('#rate-us-dont-ask-button').click(function () {
					var dontAskTime = Date.now() + _ServiceMeta2.default.RATEUS.DONTASKINTERVAL;

					chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.RATEUSNEXTTIME, dontAskTime), function () {
						rateUsBox.css('display', 'none');
					});
				});
			}
		}
	}, {
		key: 'setEvents',
		value: function setEvents() {
			var _this = this;

			_this.userProfileUpgradeButton.click(_this.onUpgradeButtonClicked.bind(this));
			_this.logoutButton.click(_this.onLogoutButtonClicked.bind(this));
			_this.userProfileButton.click(_this.onUserProfileButtonClicked.bind(this));
			_this.ipLookupButton.click(_this.onIpLookupButtonClicked.bind(this));
			_this.contactButton.click(_this.onContactButtonClicked.bind(this));

			_this.sortListByNameButton.click(_this.onSortByNameClicked.bind(this));
			_this.bypasslistFunctionButton.click(_this.onBypasslistFunctionButtonClicked.bind(this));

			_this.sortFunctionContainer.mouseover(_this.overSortFunctionDropdown.bind(this));
			_this.sortFunctionContainer.mouseout(_this.outSortFunctionDropdown.bind(this));

			/* Download events */

			_this.downloadAndroidButton.click(_this.onDownloadEventFunc('android'));
			_this.downloadMacButton.click(_this.onDesktopInfoButtonClicked.bind(this));
			_this.downloadWindowsButton.click(_this.onDesktopInfoButtonClicked.bind(this));
		}
	}, {
		key: 'onDesktopInfoButtonClicked',
		value: function onDesktopInfoButtonClicked() {
			var _this = this;

			_DesktopClientInfoView2.default.show();
		}
	}, {
		key: 'onDownloadEventFunc',
		value: function onDownloadEventFunc(platform) {
			var _this = this;

			return function () {
				_Utils2.default.openPlatformLink(platform);
			};
		}
	}, {
		key: 'setUserProfile',
		value: function setUserProfile(locale) {
			var _this = this;

			_this.userProfileUsername.text(_this.Storage.configData.name);
			_this.userProfileEmail.text(_this.Storage.userData.email);

			if (_Utils2.default.isUserPremium(_this.Storage.configData)) {

				var userPremiumAccountExpiration = _Utils2.default.getUserExpirationData(_this.Storage.configData.premium);

				var premiumStatusText = "<p>" + locale.MemberStatusPremium + "</p>" + "<p>" + locale.MemberStatusExpire + " " + userPremiumAccountExpiration + "</p>";

				_this.userProfileStatus.addClass('dashboard-view__user-profile__status--premium');
				_this.userProfileStatus.html(_DOMPurify2.default.sanitize(premiumStatusText, { SAFE_FOR_JQUERY: true }));
				_this.userProfileUpgradeButton.text(locale.MemberStatusPremiumExtend);
			} else {

				var freeStatusText = "<p>" + locale.MemberStatusFree + "</p>";
				_this.userProfileStatus.addClass('dashboard-view__user-profile__status--free');
				_this.userProfileStatus.html(_DOMPurify2.default.sanitize(freeStatusText, { SAFE_FOR_JQUERY: true }));
				_this.userProfileUpgradeButton.text(locale.MemberStatusFreeExtend);
			}
		}
	}, {
		key: 'setNotification',
		value: function setNotification() {
			_BackgroundRequester2.default.request('Notification', 'onPopupOpened', {}, function () {});
		}
	}, {
		key: 'loadStorageData',
		value: function loadStorageData() {
			return new Promise(function (resolve, reject) {

				chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.USERDATA, _ServiceMeta2.default.STORAGEKEYS.CONFIGDATA, _ServiceMeta2.default.STORAGEKEYS.ISPROXYON, _ServiceMeta2.default.STORAGEKEYS.CURRENTPROXY, _ServiceMeta2.default.STORAGEKEYS.RATEUSNEXTTIME, _ServiceMeta2.default.STORAGEKEYS.LOCALE, _ServiceMeta2.default.STORAGEKEYS.ISCOUNTRYSORTED, _ServiceMeta2.default.STORAGEKEYS.LASTSELECTEDTAB], function (storage) {

					resolve(storage);
				});
			});
		}
	}, {
		key: 'loadLocaleFromServer',
		value: function loadLocaleFromServer() {
			var _this = this;

			_this.App.append('<div class="loadingimg"><img src="images/loading.gif"></div>');

			_BackgroundRequester2.default.request("api", "getLocale", {}).then(function (resp) {
				if (resp != undefined && resp != "" && resp.Retcode === 200) {

					chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.LOCALE, resp.locale), function () {

						window.location.reload(true);
					});
				} else {
					_this.App.html("Unknown error. Please contact support");
				}
			});
		}

		/* Helper */

	}, {
		key: 'getSectionByTabId',
		value: function getSectionByTabId(tabId) {
			var _this = this;
			switch (tabId) {
				case 0:
					return _this.freeServerListSection;
					break;
				case 1:
					return _this.premiumServerListSection;
					break;
				case 2:
					return _this.publicServerListSection;
					break;
			}
		}
	}, {
		key: 'getServerListByTabId',
		value: function getServerListByTabId(tabId) {
			var _this = this;
			switch (tabId) {
				case 0:
					return _ServerList2.default.sortByLoad(_this.Storage.configData.data.SERVERS, false);
					break;
				case 1:
					return _ServerList2.default.sortByLoad(_this.Storage.configData.data.PREMIUMSERVERS, false);
					break;
				case 2:
					return _ServerList2.default.sortByLoad(_this.Storage.configData.data.PUBLICSERVERS, true);
					break;
			}
		}
	}, {
		key: 'buildServerList',
		value: function buildServerList(section, serverList, tabId, sorted) {
			var _this = this;

			var isUserPremium = _Utils2.default.isUserPremium(_this.Storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA]);

			var listElements = [];

			if (serverList && serverList.isPublic) {
				var isPublic = true;
				serverList = serverList.serverListData;
			}

			for (var serverKey in serverList) {

				var serverItemId = tabId + "" + serverKey;
				var sortKey = serverItemId;

				var premiumLock = sortOption = "";

				if (tabId == 1 && _this.Storage && !isUserPremium) premiumLock = '<i class="material-icons">lock</i>';

				if (!isUserPremium && premiumLock == "" || premiumLock == "") {
					var sortOption = '<i class="material-icons sort-option" title="Move to top">vertical_align_top</i>';
				}

				var countryCode = isPublic ? serverList[serverKey].CountryCode.toLowerCase() : serverList[serverKey][0].CountryCode.toLowerCase();
				var country = isPublic ? serverList[serverKey].Country : serverList[serverKey][0].Country;

				if (isPublic) {
					serverItemId = tabId + "-" + serverKey.replace(':', '-');
					sortKey = tabId + "" + countryCode;
				}

				var isPublicVal = isPublic ? 'y' : 'n';

				var serverItem = '<div id="' + _Sanitize2.default.escpateData(serverItemId) + '" class="server-item" isPublicVal="' + isPublicVal + '" sortkey="' + _Sanitize2.default.escpateData(sortKey) + '" section="' + tabId + '" serverkey="' + _Sanitize2.default.escpateData(serverKey) + '">' + '<a class="server-item__server">' + '<img class="server-item__server__server-flag" src="' + _folders2.default.FLAGS + '/' + _Sanitize2.default.escpateData(countryCode) + '.png">' + '<div class="server-item__server__server-info">' + '<div class="server-item__server__server-info__server-label">' + _Sanitize2.default.escpateData(country) + '</div>' + '</div>' + premiumLock + sortOption + '</a>' + '</div>';

				var jServerItem = (0, _jquery2.default)(serverItem);

				jServerItem.click(_this.onServerSelected.bind(this));
				jServerItem.find('.sort-option').click(_this.onPushCountryToTopClicked.bind(this));
				jServerItem.mouseover(_this.fadeInSortOption);
				jServerItem.mouseout(_this.fadeOutSortOption);

				var listItem = {
					label: country,
					html: jServerItem
				};

				listElements.push(listItem);
			}

			if (sorted && isUserPremium) {
				listElements.sort(function (a, b) {
					var labelA = a.label.toUpperCase();
					var labelB = b.label.toUpperCase();

					if (labelA < labelB) return -1;
					if (labelA > labelB) return 1;

					return 0;
				});
			}

			for (var i = 0; i < listElements.length; i++) {
				section.append(listElements[i].html);
			};

			//_this.setSortedCountries(tabId);
			_this.setStickedCountries(tabId);
		}
	}, {
		key: 'setStickedCountries',
		value: function setStickedCountries(tabId) {
			var _this = this;

			if (!_Utils2.default.isUserPremium(_this.Storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA])) return;

			chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.STICKEDCOUNTRIES, _ServiceMeta2.default.STORAGEKEYS.CONFIGDATA], function (storage) {

				var stickedCountries = storage[_ServiceMeta2.default.STORAGEKEYS.STICKEDCOUNTRIES];
				var section = _this.getSectionByTabId(tabId);
				var uid = storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA] ? storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA].uid : "";

				if (!stickedCountries || stickedCountries && !stickedCountries[uid]) return;

				var stickedCountriesOfUser = stickedCountries[uid][tabId];

				for (var i = 0; i < stickedCountriesOfUser.length; i++) {
					var itemSelector = '[sortKey=' + stickedCountriesOfUser[i] + ']';
					var item = (0, _jquery2.default)(itemSelector);

					item.unbind("mouseover");
					item.unbind("mouseout");
					(0, _jquery2.default)(itemSelector + " .sort-option").unbind("click");

					_this.replaceSortOptionWithPinned((0, _jquery2.default)(itemSelector + " .sort-option"));
					section.prepend((0, _jquery2.default)(itemSelector));
				};
			});
		}
	}, {
		key: 'replaceSortOptionWithPinned',
		value: function replaceSortOptionWithPinned(sortOption) {
			var _this = this;
			var pinned = (0, _jquery2.default)("<img class='sort-option__pinned' src='images/pin.png'>");
			pinned.click(_this.onUnpinClicked.bind(_this));

			sortOption.replaceWith(pinned);
		}

		/* Sort Option */

	}, {
		key: 'fadeInSortOption',
		value: function fadeInSortOption() {
			var id = (0, _jquery2.default)(this).attr('id');
			var sortOption = (0, _jquery2.default)('#' + id + " .sort-option");
			sortOption.show();
		}
	}, {
		key: 'fadeOutSortOption',
		value: function fadeOutSortOption(sortOption) {
			var id = (0, _jquery2.default)(this).attr('id');
			var sortOption = (0, _jquery2.default)('#' + id + " .sort-option");
			sortOption.stop().show();
			sortOption.hide();
		}
	}, {
		key: 'freeUserClickedOnPremium',
		value: function freeUserClickedOnPremium() {
			var _this = this;
			var locale = _this.Storage[_ServiceMeta2.default.STORAGEKEYS.LOCALE];

			_UpgradeView2.default.initView();

			if (locale) _Utils2.default.showNotification(locale.PremiumAccountNotTitle, locale.PremiumAccountNotText);
		}

		/* Events */

	}, {
		key: 'onBypasslistFunctionButtonClicked',
		value: function onBypasslistFunctionButtonClicked() {
			var _this = this;

			//if(!Utils.isUserPremium(_this.Storage[ClientMeta.STORAGEKEYS.CONFIGDATA]))
			//	return _this.showBypassFunctionError();

			_BypassConfigView2.default.initView();
		}
	}, {
		key: 'onServerSelected',
		value: function onServerSelected(e) {
			var _this = this;

			var tabId = (0, _jquery2.default)(e.currentTarget).attr('section');
			var serverKey = (0, _jquery2.default)(e.currentTarget).attr('serverKey');
			var isPublicVal = (0, _jquery2.default)(e.currentTarget).attr('isPublicVal');
			var isPublic = isPublicVal == 'y' ? true : false;

			if (tabId == 1 && _this.Storage && !_Utils2.default.isUserPremium(_this.Storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA])) return _this.freeUserClickedOnPremium();

			var serverList = _this.serverList[tabId];
			var searchData = {};

			if (isPublic) {
				var publicServer = [];
				publicServer.push(serverList.serverListData[serverKey]);
				searchData = {
					randomSelectedServer: publicServer,
					serverList: []
				};
			} else {
				var bestServer = _ServerList2.default.getServerByLoad(serverList, serverKey);
				searchData = _ServerList2.default.generateSearchData(bestServer, serverList[serverKey]);
			}

			_ProxySearchView2.default.initView(searchData);
		}
	}, {
		key: 'onTabChanged',
		value: function onTabChanged(tabId) {
			var _this = this;
			chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.LASTSELECTEDTAB, tabId), function () {
				_this.loadServerList(tabId);
			});
		}
	}, {
		key: 'onUpgradeButtonClicked',
		value: function onUpgradeButtonClicked() {

			_UpgradeView2.default.initView();
		}
	}, {
		key: 'onLogoutButtonClicked',
		value: function onLogoutButtonClicked() {
			var _this = this;

			_BackgroundRequester2.default.request('ProxySetting', 'clearSettings', {}).then(function () {

				_LoginView2.default.initView();
			});

			chrome.storage.local.remove(_ServiceMeta2.default.STORAGEKEYS.USERDATA);

			/*
   todo: 
   		bgService.request("proxy", "clearProxySetting", {});
             bgService.request("user", "clear", {});
             loginPage.load(error_msg);
             $(".member").remove();
   */
		}
	}, {
		key: 'onUserProfileButtonClicked',
		value: function onUserProfileButtonClicked() {

			var _this = this;

			_UserProfileView2.default.initView();
		}
	}, {
		key: 'onIpLookupButtonClicked',
		value: function onIpLookupButtonClicked() {
			chrome.storage.local.get(_ServiceMeta2.default.STORAGEKEYS.IPLOOKUPURL, function (storage) {

				var ipLookupUrl = storage[_ServiceMeta2.default.STORAGEKEYS.IPLOOKUPURL];

				if (ipLookupUrl) _Utils2.default.openNewTab(ipLookupUrl);
			});
		}
	}, {
		key: 'onContactButtonClicked',
		value: function onContactButtonClicked() {
			var _this = this;

			/*
   chrome.storage.local.get(ClientMeta.STORAGEKEYS.BASELINK, (storage) => {
   	if(!storage[ClientMeta.STORAGEKEYS.BASELINK]) return;
   		Utils.openNewTab(storage[ClientMeta.STORAGEKEYS.BASELINK] + Endpoints.SUPPORT);
   });
   */

			_TicketTabCreaterView2.default.initView();
		}
	}, {
		key: 'showSortFunctionError',
		value: function showSortFunctionError(byname) {
			var _this = this;

			var gifView = new _GifView2.default("Pinned Countries", "Move your favorite countries to the top of the server list", _ServiceMeta2.default.IMAGES.FEATUREPINGIF);

			if (byname) gifView = new _GifView2.default("Country Sorting", "With this function you can sort the server list by country name", _ServiceMeta2.default.IMAGES.FEATURESORTGIF);

			gifView.show();
		}
	}, {
		key: 'onPushCountryToTopClicked',
		value: function onPushCountryToTopClicked(e) {
			e.stopPropagation();

			var _this = this;

			var countryEl = (0, _jquery2.default)(e.currentTarget).parent().parent();
			var countryElId = countryEl.attr('sortKey');
			var sectionId = parseInt(countryEl.attr('section'));
			var section = _this.getSectionByTabId(sectionId);

			if (!_Utils2.default.isUserPremium(_this.Storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA])) return _this.showSortFunctionError();

			_Sticked2.default.pin(countryElId, sectionId).then(function () {

				var currentTabSection = _this.getSectionByTabId(sectionId);
				currentTabSection.html("");
				_this.loadServerList(sectionId);

				(0, _jquery2.default)('#free-server-list').parent().scrollTop(0);
			}, function () {
				_this.showSortFunctionError();
			});
		}
	}, {
		key: 'onUnpinClicked',
		value: function onUnpinClicked(e) {
			var _this = this;
			e.stopPropagation();

			var countryEl = (0, _jquery2.default)(e.currentTarget).parent().parent();
			var countryElId = countryEl.attr('sortKey');
			var sectionId = parseInt(countryEl.attr('section'));

			_Sticked2.default.unpin(countryElId, sectionId).then(function () {
				var currentTabSection = _this.getSectionByTabId(sectionId);
				currentTabSection.html("");
				_this.loadServerList(sectionId);
			});
		}
	}, {
		key: 'overSortFunctionDropdown',
		value: function overSortFunctionDropdown() {
			var _this = this;

			_this.sortFunctionDropdownContent.show();
			var currentTabId = _this.Tab.current;

			_this.isTabSorted(currentTabId).then(function (isSorted) {

				if (isSorted) return _this.isSortedIcon.show();

				_this.isSortedIcon.hide();
			});
		}
	}, {
		key: 'outSortFunctionDropdown',
		value: function outSortFunctionDropdown() {
			var _this = this;
			_this.sortFunctionDropdownContent.hide();
		}
	}, {
		key: 'isTabSorted',
		value: function isTabSorted(tabId) {

			return new Promise(function (resolve, reject) {
				chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.ISCOUNTRYSORTED, _ServiceMeta2.default.STORAGEKEYS.CONFIGDATA], function (storage) {

					var isCountrySorted = storage[_ServiceMeta2.default.STORAGEKEYS.ISCOUNTRYSORTED];
					var uid = storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA] ? storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA].uid : "";

					if (isCountrySorted && isCountrySorted[uid] && isCountrySorted[uid][tabId]) return resolve(true);

					return resolve(false);
				});
			});
		}

		/* Sort option actions */

	}, {
		key: 'onSortByNameClicked',
		value: function onSortByNameClicked() {
			var _this = this;

			_Utils2.default.hideElement(_this.sortFunctionDropdownContent);

			if (!_Utils2.default.isUserPremium(_this.Storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA])) return _this.showSortFunctionError(true);

			var currentTabId = _this.Tab.current;
			var currentTabSection = _this.getSectionByTabId(currentTabId);

			_this.isTabSorted(currentTabId).then(function (isSorted) {

				if (!isSorted) return _this.sortListByName(currentTabId, currentTabSection);

				_this.resetSortedCountries(currentTabId, currentTabSection).then(function () {
					location.reload();
				});
			});
		}
	}, {
		key: 'sortListByName',
		value: function sortListByName(currentTabId, currentTabSection) {
			var _this = this;

			chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.ISCOUNTRYSORTED, _ServiceMeta2.default.STORAGEKEYS.CONFIGDATA], function (storage) {

				var isCountrySorted = storage[_ServiceMeta2.default.STORAGEKEYS.ISCOUNTRYSORTED];
				var uid = storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA] ? storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA].uid : "";

				if (!isCountrySorted) isCountrySorted = {};

				if (!isCountrySorted[uid]) {

					isCountrySorted[uid] = {
						0: false,
						1: false,
						2: false
					};
				}

				isCountrySorted[uid][currentTabId] = true;

				chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.ISCOUNTRYSORTED, isCountrySorted), function () {

					currentTabSection.html("");
					_this.loadServerList(currentTabId, true);
				});
			});
		}
	}, {
		key: 'resetSortedCountries',
		value: function resetSortedCountries(currentTabId, currentTabSection) {
			var _this = this;
			return new Promise(function (resolve, reject) {

				chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.ISCOUNTRYSORTED, _ServiceMeta2.default.STORAGEKEYS.CONFIGDATA], function (storage) {

					var isCountrySorted = storage[_ServiceMeta2.default.STORAGEKEYS.ISCOUNTRYSORTED];
					var uid = storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA] ? storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA].uid : "";

					if (!isCountrySorted || isCountrySorted && !isCountrySorted[uid]) return resolve();

					isCountrySorted[uid][currentTabId] = false;

					chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.ISCOUNTRYSORTED, isCountrySorted), function () {
						resolve();
					});
				});
			});
		}
	}, {
		key: 'onDisconnectButtonClicked',
		value: function onDisconnectButtonClicked() {

			_BackgroundRequester2.default.request('ProxySetting', 'clearSettings', {}).then(function () {

				location.reload();
			});
		}
	}]);

	return DashboardView;
}();

exports.default = new DashboardView();

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _folders = __webpack_require__(1);

var _folders2 = _interopRequireDefault(_folders);

var _BackgroundRequester = __webpack_require__(4);

var _BackgroundRequester2 = _interopRequireDefault(_BackgroundRequester);

var _ServiceMeta = __webpack_require__(2);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _Sanitize = __webpack_require__(6);

var _Sanitize2 = _interopRequireDefault(_Sanitize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LanguageView = function () {
	function LanguageView() {
		_classCallCheck(this, LanguageView);

		this.template = _folders2.default.VIEWS + '/language.html';
		this.header = _folders2.default.VIEWS + '/header.html';
		this.loadingSpin = _folders2.default.VIEWS + '/loading-tmp.html';
	}

	_createClass(LanguageView, [{
		key: 'initView',
		value: function initView() {
			this.App = (0, _jquery2.default)('#app');
			this.App.html("");

			var _this = this;
			_jquery2.default.get(_this.header, function (header) {
				_this.App.append(header);
				_this.selectElements();
				_jquery2.default.get(_this.loadingSpin, function (loadingSpin) {
					_this.App.append(loadingSpin);
					_jquery2.default.get(_this.template, function (template) {
						_this.App.append(template);
						_this.loadLanguageList();
					}, "html");
				}, "html");
			}, "html");
		}
	}, {
		key: 'selectElements',
		value: function selectElements() {
			var _this = this;

			_this.headerLogo = (0, _jquery2.default)('#header-logo');
			_this.headerVersion = (0, _jquery2.default)('#header-version');

			_this.setServiceElements();
		}
	}, {
		key: 'setServiceElements',
		value: function setServiceElements() {
			var _this = this;
			_this.headerLogo.attr('src', _ServiceMeta2.default.IMAGES.HEADERLOGO);
			_this.headerVersion.text('v. ' + _ServiceMeta2.default.VERSION);
		}
	}, {
		key: 'loadLanguageList',
		value: function loadLanguageList() {
			var _this = this;
			_BackgroundRequester2.default.request("api", "getLanguage", {}).then(function (languageList) {

				if (languageList && languageList.Retcode == 200) {

					(0, _jquery2.default)("#loading-spin").css({ display: "none" });

					for (var lang in languageList.languages) {
						var langItem = languageList.languages[lang];
						(0, _jquery2.default)(".lang-list ul").append('<li data="' + _Sanitize2.default.escpateData(langItem.id) + '"><a href="#"">' + _Sanitize2.default.escpateData(langItem.translation) + '</a></li>');
					}

					var languageItems = (0, _jquery2.default)(".lang-list li");
					languageItems.click(_this.onLangSelected);
				}
			});
		}
	}, {
		key: 'onLangSelected',
		value: function onLangSelected() {
			var selectedLanguage = (0, _jquery2.default)(this);

			chrome.storage.local.set({ language: selectedLanguage.attr("data") }, function () {
				chrome.storage.local.remove(_ServiceMeta2.default.STORAGEKEYS.LOCALE, function () {
					location.reload();
				});
			});
		}
	}]);

	return LanguageView;
}();

exports.default = new LanguageView();

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _folders = __webpack_require__(1);

var _folders2 = _interopRequireDefault(_folders);

var _ServiceMeta = __webpack_require__(2);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _Utils = __webpack_require__(3);

var _Utils2 = _interopRequireDefault(_Utils);

var _BackgroundRequester = __webpack_require__(4);

var _BackgroundRequester2 = _interopRequireDefault(_BackgroundRequester);

var _DashboardView = __webpack_require__(8);

var _DashboardView2 = _interopRequireDefault(_DashboardView);

var _Sanitize = __webpack_require__(6);

var _Sanitize2 = _interopRequireDefault(_Sanitize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UpgradeView = function () {
	function UpgradeView() {
		_classCallCheck(this, UpgradeView);

		this.template = _folders2.default.VIEWS + '/upgrade.html';
		this.header = _folders2.default.VIEWS + '/header.html';
	}

	_createClass(UpgradeView, [{
		key: 'initView',
		value: function initView() {
			var _this = this;

			_Utils2.default.getLocaleInStorage().then(_this.loadTemplate.bind(this), _this.loadLocaleFromServer.bind(this));
		}
	}, {
		key: 'loadTemplate',
		value: function loadTemplate(locale) {
			var _this = this;

			this.App = (0, _jquery2.default)('#app');
			this.App.html("");

			_jquery2.default.get(_this.header, function (header) {
				_this.App.append(header);
				_jquery2.default.get(_this.template, function (template) {

					_this.loadStorageData().then(function (storage) {
						_this.Storage = storage;

						var loadedTemplate = _Utils2.default.loadTemplate(template, locale);
						_this.App.append(loadedTemplate);

						_this.selectElements();

						// Setting all events for selected elements
						_this.setEvents();
						_this.setHeaderBackButton();

						_this.upgradeView.css("display", "none");

						_this.loadProductsFromServer().then(_this.onProductsLoaded.bind(_this));
					});
				}, "html");
			}, "html");
		}
	}, {
		key: 'selectElements',
		value: function selectElements() {
			var _this = this;

			_this.headerLogo = (0, _jquery2.default)('#header-logo');

			_this.productTable = (0, _jquery2.default)('#product-table');
			_this.productTableBody = (0, _jquery2.default)('#product-table-body');

			_this.paymentContainer = (0, _jquery2.default)('#payment-container');

			_this.upgradeView = (0, _jquery2.default)('#upgrade-view');

			_this.errorMessage = (0, _jquery2.default)('#error_message');

			_this.paymentButton = (0, _jquery2.default)('#payment-button');

			_this.setServiceElements();
		}
	}, {
		key: 'setServiceElements',
		value: function setServiceElements() {
			var _this = this;
			_this.headerLogo.attr('src', _ServiceMeta2.default.IMAGES.HEADERLOGO);
		}
	}, {
		key: 'setEvents',
		value: function setEvents() {
			var _this = this;

			_this.paymentButton.click(_this.onPaymentButtonClicked.bind(this));
		}
	}, {
		key: 'setHeaderBackButton',
		value: function setHeaderBackButton() {
			var _this = this;
			_this.headerBackButton = (0, _jquery2.default)('#header-back-button');
			_this.headerBackButton.css('display', 'block');
			_this.headerBackButton.click(_this.onHeaderBackButtonClicked.bind(this));
		}
	}, {
		key: 'loadProductsFromServer',
		value: function loadProductsFromServer() {
			var _this = this;

			return new Promise(function (resolve, reject) {

				_this.App.append('<div class="loadingimg"><img src="images/loading.gif"></div>');

				_BackgroundRequester2.default.request('api', 'getProducts', {}).then(function (response) {

					(0, _jquery2.default)('.loadingimg').css('display', 'none');

					if (response && response.Retcode == 200) {
						var products = response.products;
						var paymentMethods = response["payment-methods"];

						for (var i = 0; i < products.length; i++) {

							var checked = products[i].Default ? 'checked="checked"' : '';

							var productItem = '<tr><td>' + '<input type="radio" ' + checked + ' name="package" value="' + _Sanitize2.default.escpateData(products[i].ID) + '"></td>' + '<td>' + _Sanitize2.default.escpateData(products[i].Description) + '</td>' + '<td>' + _Sanitize2.default.escpateData(products[i].Price) + ' ' + _Sanitize2.default.escpateData(response.currency) + '</td></tr>';

							_this.productTableBody.append(productItem);
						};

						for (var method in paymentMethods) {

							var payment = paymentMethods[method];
							var logoMime = payment["logofile-mime-type"] ? payment["logofile-mime-type"] : "image/png";
							var description = payment["desc"] ? payment["desc"] : "";

							var paymentItem = '<div class="paymentItem" id="' + _Sanitize2.default.escpateData(method) + '">' + '<input type="radio" name="provider" value="' + _Sanitize2.default.escpateData(payment.url) + '">' + '<img alt="' + _Sanitize2.default.escpateData(description) + '" title="' + _Sanitize2.default.escpateData(description) + '" src="data:' + _Sanitize2.default.escpateData(logoMime) + ';base64, ' + _Sanitize2.default.escpateData(payment.logofile) + '">' + '</div>';

							if (payment.enabled) _this.paymentContainer.append(paymentItem);
						}

						resolve();
					}
				});
			});
		}
	}, {
		key: 'loadStorageData',
		value: function loadStorageData() {
			return new Promise(function (resolve, reject) {

				chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.USERDATA, _ServiceMeta2.default.STORAGEKEYS.CONFIGDATA], function (storage) {

					resolve(storage);
				});
			});
		}
	}, {
		key: 'loadLocaleFromServer',
		value: function loadLocaleFromServer() {

			_BackgroundRequester2.default.request("api", "getLocale", {}).then(function (resp) {
				if (resp != undefined && resp != "" && resp.Retcode === 200) {

					chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.LOCALE, resp.locale), function () {

						window.location.reload(true);
					});
				} else {
					//todo can't get locale
				}
			});
		}

		/* Modifier */

	}, {
		key: 'makeButtonInactive',
		value: function makeButtonInactive(button) {
			button.unbind('click');
			button.addClass('btn--inactive');
		}
	}, {
		key: 'makeButtonActive',
		value: function makeButtonActive(button) {
			button.click(this.onPaymentButtonClicked.bind(this));
			button.removeClass('btn--inactive');
		}
	}, {
		key: 'setLoading',
		value: function setLoading() {
			var _this = this;

			_this.errorMessage.html(_ServiceMeta2.default.LOADINGIMG);
			_this.makeButtonInactive(_this.paymentButton);
		}
	}, {
		key: 'unsetLoading',
		value: function unsetLoading() {
			var _this = this;

			_this.makeButtonActive(_this.paymentButton);
		}
	}, {
		key: 'displayErrors',
		value: function displayErrors(errors) {
			var _this = this;
			_this.errorMessage.html("");

			for (var i = 0; i < errors.length; i++) {
				if (i <= 2) {
					var errorElm = '<p>' + _Sanitize2.default.escpateData(errors[i]) + '</p>';
					_this.errorMessage.append(errorElm);
				}
			}
		}

		/* Events */

	}, {
		key: 'onProductsLoaded',
		value: function onProductsLoaded() {
			var _this = this;

			_this.upgradeView.css("display", "block");
		}
	}, {
		key: 'onPaymentButtonClicked',
		value: function onPaymentButtonClicked() {
			var _this = this;

			var selectedPackage = (0, _jquery2.default)('#product-table-body input:checked');
			var selectedPayment = (0, _jquery2.default)('#payment-container input:checked');

			var productId = selectedPackage.val();
			var paymentPath = selectedPayment.val();

			if (!paymentPath) return _this.displayErrors(["Please select a payment method"]);

			_this.setLoading();

			var paymentData = {
				productId: productId,
				paymentPath: paymentPath
			};

			_BackgroundRequester2.default.request('api', 'getPaymentLink', paymentData).then(function (response) {

				_this.unsetLoading();

				if (response && response.Retcode == 200) {
					_Utils2.default.openNewTab(response.PayAt);
					chrome.storage.local.remove(_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA);
					window.close();
				} else {

					if (response && response.Message) return _this.displayErrors(response.Message);
				}
			});
		}
	}, {
		key: 'onHeaderBackButtonClicked',
		value: function onHeaderBackButtonClicked() {
			var _this = this;

			_DashboardView2.default.initView();
		}
	}]);

	return UpgradeView;
}();

exports.default = new UpgradeView();

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _folders = __webpack_require__(1);

var _folders2 = _interopRequireDefault(_folders);

var _Utils = __webpack_require__(3);

var _Utils2 = _interopRequireDefault(_Utils);

var _LoginView = __webpack_require__(7);

var _LoginView2 = _interopRequireDefault(_LoginView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DesktopClientInfoView = function () {
	function DesktopClientInfoView() {
		_classCallCheck(this, DesktopClientInfoView);

		this.template = _folders2.default.VIEWS + '/desktopclient-info.html';
	}

	_createClass(DesktopClientInfoView, [{
		key: 'show',
		value: function show() {
			var _this = this;

			this.App = (0, _jquery2.default)('#app');
			this.App.html("");

			_jquery2.default.get(_this.template, function (template) {

				_this.App.append(template);
				_this.selectElements();
			}, "html");
		}
	}, {
		key: 'selectElements',
		value: function selectElements() {
			var _this = this;

			_this.closeButton = (0, _jquery2.default)('#dc-info-close');
			_this.downloadButton = (0, _jquery2.default)('#dw-desktop-client');

			_this.setEvents();
		}
	}, {
		key: 'setEvents',
		value: function setEvents() {
			var _this = this;

			_this.closeButton.click(_this.onCloseButtonClicked.bind(this));
			_this.downloadButton.click(_this.onDownloadButtonClicked.bind(this));
		}
	}, {
		key: 'onCloseButtonClicked',
		value: function onCloseButtonClicked() {
			var _this = this;

			location.reload();
		}
	}, {
		key: 'onDownloadButtonClicked',
		value: function onDownloadButtonClicked() {
			var _this = this;

			_Utils2.default.openPlatformLink('desktop');
		}
	}]);

	return DesktopClientInfoView;
}();

exports.default = new DesktopClientInfoView();

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _folders = __webpack_require__(1);

var _folders2 = _interopRequireDefault(_folders);

var _Utils = __webpack_require__(3);

var _Utils2 = _interopRequireDefault(_Utils);

var _ServiceMeta = __webpack_require__(2);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProxySearchView = function () {
	function ProxySearchView() {
		_classCallCheck(this, ProxySearchView);

		this.template = _folders2.default.VIEWS + '/proxysearch.html';
		this.header = _folders2.default.VIEWS + '/header.html';
	}

	_createClass(ProxySearchView, [{
		key: 'initView',
		value: function initView(searchData) {
			var _this = this;

			if (searchData) _this.SearchData = searchData;

			_Utils2.default.getLocaleInStorage().then(_this.loadTemplate.bind(this), _this.loadLocaleFromServer.bind(this));
		}
	}, {
		key: 'loadTemplate',
		value: function loadTemplate(locale) {
			var _this = this;

			this.App = (0, _jquery2.default)('#app');
			this.App.html("");

			_this.loadStorageData().then(function (storage) {
				_this.Storage = storage;

				_jquery2.default.get(_this.template, function (template) {

					var loadedTemplate = _Utils2.default.loadTemplate(template, locale);
					_this.App.append(loadedTemplate);

					_this.selectElements();
					// Setting all events for selected elements
					_this.setEvents();

					if (_this.Storage[_ServiceMeta2.default.STORAGEKEYS.PROXYSEARCHLOCK] && _this.Storage[_ServiceMeta2.default.STORAGEKEYS.PROXYSEARCHFAILED]) return _this.onSearchFailed(_this.Storage[_ServiceMeta2.default.STORAGEKEYS.PROXYSEARCHFAILEDCOUNTRY]);

					_this.setSearchPort();
					_this.initState();
				}, "html");
			});

			/*
   		$.get(_this.header, function(header){
   			_this.App.append(header);
   			$.get(_this.template, function(template){
   
   				_this.loadStorageData().then(function (storage){
   					_this.Storage = storage;
   
   					var loadedTemplate = Utils.loadTemplate(template, locale)
   					_this.App.append(loadedTemplate);
   
   					_this.selectElements();
   					// Setting all events for selected elements
   					_this.setEvents();
   
   					_this.setSearchPort();
   					//_this.initState();
   
   				});
   			}, "html");
   		}, "html");	
   */
		}
	}, {
		key: 'initState',
		value: function initState() {
			var _this = this;

			if (_this.SearchData) return _this.startSearch(_this.SearchData);

			_this.requestUpdate();
		}
	}, {
		key: 'loadStorageData',
		value: function loadStorageData() {
			return new Promise(function (resolve, reject) {

				chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.USERDATA, _ServiceMeta2.default.STORAGEKEYS.CONFIGDATA, _ServiceMeta2.default.STORAGEKEYS.PROXYSEARCHLOCK, _ServiceMeta2.default.STORAGEKEYS.PROXYSEARCHFAILED, _ServiceMeta2.default.STORAGEKEYS.LOCALE, _ServiceMeta2.default.STORAGEKEYS.PROXYSEARCHFAILEDCOUNTRY], function (storage) {

					resolve(storage);
				});
			});
		}
	}, {
		key: 'loadLocaleFromServer',
		value: function loadLocaleFromServer() {

			Background.request("api", "getLocale", {}).then(function (resp) {
				if (resp != undefined && resp != "" && resp.Retcode === 200) {

					chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.LOCALE, resp.locale), function () {

						window.location.reload(true);
					});
				} else {
					//todo can't get locale
				}
			});
		}

		/* Actions */

	}, {
		key: 'startSearch',
		value: function startSearch(searchData) {
			var _this = this;

			if (_this.Port) _this.Port.postMessage({ action: "search", data: searchData });
		}
	}, {
		key: 'requestUpdate',
		value: function requestUpdate() {
			var _this = this;

			if (_this.Port) _this.Port.postMessage({ action: "getUpdate" });
		}

		/* Selecting and Setting */

	}, {
		key: 'selectElements',
		value: function selectElements() {
			var _this = this;

			_this.proxySearchActiveView = (0, _jquery2.default)('#proxysearch-active');
			_this.proxySearchFailedView = (0, _jquery2.default)('#proxysearch-failed');

			_this.cancelSearchButton = (0, _jquery2.default)('#cancel-search-button');
			_this.backToDashboardButton = (0, _jquery2.default)('#back-to-dashboard-button');

			_this.searchProgress = (0, _jquery2.default)('#search-progress');
			_this.searchCountry = (0, _jquery2.default)('#search-country');

			_this.searchFailedTxt = (0, _jquery2.default)('#search-result-txt');

			_this.progressBar = (0, _jquery2.default)('#progress-bar');

			/* Download Client */
			_this.downloadDesktopClient = (0, _jquery2.default)('#dw-desktop-client');
		}
	}, {
		key: 'setEvents',
		value: function setEvents() {
			var _this = this;

			_this.cancelSearchButton.click(_this.onCancelButtonClicked.bind(this));
			_this.backToDashboardButton.click(_this.onBackToDashboardButtonClicked.bind(this));

			_this.downloadDesktopClient.click(_this.onDownloadDesktopClientClicked.bind(this));
		}
	}, {
		key: 'setSearchPort',
		value: function setSearchPort() {
			this.Port = chrome.runtime.connect({ name: "proxysearch-port" });
			this.Port.onMessage.addListener(this.onSearchMessage.bind(this));
		}

		/* Progress bar */

	}, {
		key: 'updateProgressBar',
		value: function updateProgressBar(current, total) {
			var _this = this;

			var progress = (total - current) / total * 100;

			_this.progressBar.width(Math.round(progress) + "%");
		}

		/* Events */

	}, {
		key: 'onDownloadDesktopClientClicked',
		value: function onDownloadDesktopClientClicked() {
			var _this = this;

			_Utils2.default.openPlatformLink('desktop');
		}
	}, {
		key: 'onCancelButtonClicked',
		value: function onCancelButtonClicked() {
			var _this = this;

			chrome.storage.local.remove([_ServiceMeta2.default.STORAGEKEYS.PROXYSEARCHLOCK, _ServiceMeta2.default.STORAGEKEYS.PROXYSEARCHFAILED], function () {

				if (_this.Port) _this.Port.postMessage({ action: "cancel" });

				location.reload();
			});
		}
	}, {
		key: 'onBackToDashboardButtonClicked',
		value: function onBackToDashboardButtonClicked() {
			var _this = this;
			chrome.storage.local.remove([_ServiceMeta2.default.STORAGEKEYS.PROXYSEARCHLOCK, _ServiceMeta2.default.STORAGEKEYS.PROXYSEARCHFAILED], function () {
				location.reload();
			});
		}
	}, {
		key: 'onSearchMessage',
		value: function onSearchMessage(message) {
			var _this = this;
			switch (message.action) {
				case "success":
					_this.onSearchSuccess(message.data);
					break;
				case "update":
					_this.onSearchUpdate(message.data);
					break;
				case "failed":
					_this.onSearchFailed(message.data);
					break;
			}
		}
	}, {
		key: 'onSearchSuccess',
		value: function onSearchSuccess(data) {
			location.reload();
		}
	}, {
		key: 'onSearchUpdate',
		value: function onSearchUpdate(data) {
			var _this = this;

			_this.updateProgressBar(data.count, data.total);

			if (data && data.server && data.server.Country) _this.searchCountry.text(data.server.Country);
		}
	}, {
		key: 'onSearchFailed',
		value: function onSearchFailed(data) {
			var _this = this;
			if (data && _this.Storage && _this.Storage[_ServiceMeta2.default.STORAGEKEYS.LOCALE] && _this.Storage[_ServiceMeta2.default.STORAGEKEYS.LOCALE].SearchingProxyResultText) {
				_this.searchFailedTxt.text(_this.Storage[_ServiceMeta2.default.STORAGEKEYS.LOCALE].SearchingProxyResultText.replace('{0}', data));
			}

			var _this = this;
			_this.proxySearchActiveView.css("display", "none");
			_this.proxySearchFailedView.css("display", "block");
		}
	}]);

	return ProxySearchView;
}();

exports.default = new ProxySearchView();

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Opentip,
    firstAdapter,
    i,
    mouseMoved,
    mousePosition,
    mousePositionObservers,
    position,
    vendors,
    _i,
    _len,
    _ref,
    __slice = [].slice,
    __indexOf = [].indexOf || function (item) {
  for (var i = 0, l = this.length; i < l; i++) {
    if (i in this && this[i] === item) return i;
  }return -1;
},
    __hasProp = {}.hasOwnProperty;

Opentip = function () {

  Opentip.prototype.STICKS_OUT_TOP = 1;

  Opentip.prototype.STICKS_OUT_BOTTOM = 2;

  Opentip.prototype.STICKS_OUT_LEFT = 1;

  Opentip.prototype.STICKS_OUT_RIGHT = 2;

  Opentip.prototype["class"] = {
    container: "opentip-container",
    opentip: "opentip",
    header: "ot-header",
    content: "ot-content",
    loadingIndicator: "ot-loading-indicator",
    close: "ot-close",
    goingToHide: "ot-going-to-hide",
    hidden: "ot-hidden",
    hiding: "ot-hiding",
    goingToShow: "ot-going-to-show",
    showing: "ot-showing",
    visible: "ot-visible",
    loading: "ot-loading",
    ajaxError: "ot-ajax-error",
    fixed: "ot-fixed",
    showEffectPrefix: "ot-show-effect-",
    hideEffectPrefix: "ot-hide-effect-",
    stylePrefix: "style-"
  };

  function Opentip(element, content, title, options) {
    var elementsOpentips,
        hideTrigger,
        methodToBind,
        optionSources,
        prop,
        styleName,
        _i,
        _j,
        _len,
        _len1,
        _ref,
        _ref1,
        _ref2,
        _tmpStyle,
        _this = this;
    this.id = ++Opentip.lastId;
    this.debug("Creating Opentip.");
    Opentip.tips.push(this);
    this.adapter = Opentip.adapter;
    elementsOpentips = this.adapter.data(element, "opentips") || [];
    elementsOpentips.push(this);
    this.adapter.data(element, "opentips", elementsOpentips);
    this.triggerElement = this.adapter.wrap(element);
    if (this.triggerElement.length > 1) {
      throw new Error("You can't call Opentip on multiple elements.");
    }
    if (this.triggerElement.length < 1) {
      throw new Error("Invalid element.");
    }
    this.loaded = false;
    this.loading = false;
    this.visible = false;
    this.waitingToShow = false;
    this.waitingToHide = false;
    this.currentPosition = {
      left: 0,
      top: 0
    };
    this.dimensions = {
      width: 100,
      height: 50
    };
    this.content = "";
    this.redraw = true;
    this.currentObservers = {
      showing: false,
      visible: false,
      hiding: false,
      hidden: false
    };
    options = this.adapter.clone(options);
    if ((typeof content === 'undefined' ? 'undefined' : _typeof(content)) === "object") {
      options = content;
      content = title = void 0;
    } else if ((typeof title === 'undefined' ? 'undefined' : _typeof(title)) === "object") {
      options = title;
      title = void 0;
    }
    if (title != null) {
      options.title = title;
    }
    if (content != null) {
      this.setContent(content);
    }
    if (options["extends"] == null) {
      if (options.style != null) {
        options["extends"] = options.style;
      } else {
        options["extends"] = Opentip.defaultStyle;
      }
    }
    optionSources = [options];
    _tmpStyle = options;
    while (_tmpStyle["extends"]) {
      styleName = _tmpStyle["extends"];
      _tmpStyle = Opentip.styles[styleName];
      if (_tmpStyle == null) {
        throw new Error("Invalid style: " + styleName);
      }
      optionSources.unshift(_tmpStyle);
      if (!(_tmpStyle["extends"] != null || styleName === "standard")) {
        _tmpStyle["extends"] = "standard";
      }
    }
    options = (_ref = this.adapter).extend.apply(_ref, [{}].concat(__slice.call(optionSources)));
    options.hideTriggers = function () {
      var _i, _len, _ref1, _results;
      _ref1 = options.hideTriggers;
      _results = [];
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        hideTrigger = _ref1[_i];
        _results.push(hideTrigger);
      }
      return _results;
    }();
    if (options.hideTrigger && options.hideTriggers.length === 0) {
      options.hideTriggers.push(options.hideTrigger);
    }
    _ref1 = ["tipJoint", "targetJoint", "stem"];
    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
      prop = _ref1[_i];
      if (options[prop] && typeof options[prop] === "string") {
        options[prop] = new Opentip.Joint(options[prop]);
      }
    }
    if (options.ajax && (options.ajax === true || !options.ajax)) {
      if (this.adapter.tagName(this.triggerElement) === "A") {
        options.ajax = this.adapter.attr(this.triggerElement, "href");
      } else {
        options.ajax = false;
      }
    }
    if (options.showOn === "click" && this.adapter.tagName(this.triggerElement) === "A") {
      this.adapter.observe(this.triggerElement, "click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        return e.stopped = true;
      });
    }
    if (options.target) {
      options.fixed = true;
    }
    if (options.stem === true) {
      options.stem = new Opentip.Joint(options.tipJoint);
    }
    if (options.target === true) {
      options.target = this.triggerElement;
    } else if (options.target) {
      options.target = this.adapter.wrap(options.target);
    }
    this.currentStem = options.stem;
    if (options.delay == null) {
      options.delay = options.showOn === "mouseover" ? 0.2 : 0;
    }
    if (options.targetJoint == null) {
      options.targetJoint = new Opentip.Joint(options.tipJoint).flip();
    }
    this.showTriggers = [];
    this.showTriggersWhenVisible = [];
    this.hideTriggers = [];
    if (options.showOn && options.showOn !== "creation") {
      this.showTriggers.push({
        element: this.triggerElement,
        event: options.showOn
      });
    }
    if (options.ajaxCache != null) {
      options.cache = options.ajaxCache;
      delete options.ajaxCache;
    }
    this.options = options;
    this.bound = {};
    _ref2 = ["prepareToShow", "prepareToHide", "show", "hide", "reposition"];
    for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
      methodToBind = _ref2[_j];
      this.bound[methodToBind] = function (methodToBind) {
        return function () {
          return _this[methodToBind].apply(_this, arguments);
        };
      }(methodToBind);
    }
    this.adapter.domReady(function () {
      _this.activate();
      if (_this.options.showOn === "creation") {
        return _this.prepareToShow();
      }
    });
  }

  Opentip.prototype._setup = function () {
    var hideOn, hideTrigger, hideTriggerElement, i, _i, _j, _len, _len1, _ref, _ref1, _results;
    this.debug("Setting up the tooltip.");
    this._buildContainer();
    this.hideTriggers = [];
    _ref = this.options.hideTriggers;
    for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
      hideTrigger = _ref[i];
      hideTriggerElement = null;
      hideOn = this.options.hideOn instanceof Array ? this.options.hideOn[i] : this.options.hideOn;
      if (typeof hideTrigger === "string") {
        switch (hideTrigger) {
          case "trigger":
            hideOn = hideOn || "mouseout";
            hideTriggerElement = this.triggerElement;
            break;
          case "tip":
            hideOn = hideOn || "mouseover";
            hideTriggerElement = this.container;
            break;
          case "target":
            hideOn = hideOn || "mouseover";
            hideTriggerElement = this.options.target;
            break;
          case "closeButton":
            break;
          default:
            throw new Error("Unknown hide trigger: " + hideTrigger + ".");
        }
      } else {
        hideOn = hideOn || "mouseover";
        hideTriggerElement = this.adapter.wrap(hideTrigger);
      }
      if (hideTriggerElement) {
        this.hideTriggers.push({
          element: hideTriggerElement,
          event: hideOn,
          original: hideTrigger
        });
      }
    }
    _ref1 = this.hideTriggers;
    _results = [];
    for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
      hideTrigger = _ref1[_j];
      _results.push(this.showTriggersWhenVisible.push({
        element: hideTrigger.element,
        event: "mouseover"
      }));
    }
    return _results;
  };

  Opentip.prototype._buildContainer = function () {
    this.container = this.adapter.create("<div id=\"opentip-" + this.id + "\" class=\"" + this["class"].container + " " + this["class"].hidden + " " + this["class"].stylePrefix + this.options.className + "\"></div>");
    this.adapter.css(this.container, {
      position: "absolute"
    });
    if (this.options.ajax) {
      this.adapter.addClass(this.container, this["class"].loading);
    }
    if (this.options.fixed) {
      this.adapter.addClass(this.container, this["class"].fixed);
    }
    if (this.options.showEffect) {
      this.adapter.addClass(this.container, "" + this["class"].showEffectPrefix + this.options.showEffect);
    }
    if (this.options.hideEffect) {
      return this.adapter.addClass(this.container, "" + this["class"].hideEffectPrefix + this.options.hideEffect);
    }
  };

  Opentip.prototype._buildElements = function () {
    var headerElement, titleElement;
    this.tooltipElement = this.adapter.create("<div class=\"" + this["class"].opentip + "\"><div class=\"" + this["class"].header + "\"></div><div class=\"" + this["class"].content + "\"></div></div>");
    this.backgroundCanvas = this.adapter.wrap(document.createElement("canvas"));
    this.adapter.css(this.backgroundCanvas, {
      position: "absolute"
    });
    if (typeof G_vmlCanvasManager !== "undefined" && G_vmlCanvasManager !== null) {
      G_vmlCanvasManager.initElement(this.adapter.unwrap(this.backgroundCanvas));
    }
    headerElement = this.adapter.find(this.tooltipElement, "." + this["class"].header);
    if (this.options.title) {
      titleElement = this.adapter.create("<h1></h1>");
      this.adapter.update(titleElement, this.options.title, this.options.escapeTitle);
      this.adapter.append(headerElement, titleElement);
    }
    if (this.options.ajax && !this.loaded) {
      this.adapter.append(this.tooltipElement, this.adapter.create("<div class=\"" + this["class"].loadingIndicator + "\"><span>↻</span></div>"));
    }
    if (__indexOf.call(this.options.hideTriggers, "closeButton") >= 0) {
      this.closeButtonElement = this.adapter.create("<a href=\"javascript:undefined;\" class=\"" + this["class"].close + "\"><span>Close</span></a>");
      this.adapter.append(headerElement, this.closeButtonElement);
    }
    this.adapter.append(this.container, this.backgroundCanvas);
    this.adapter.append(this.container, this.tooltipElement);
    this.adapter.append(document.body, this.container);
    this._newContent = true;
    return this.redraw = true;
  };

  Opentip.prototype.setContent = function (content) {
    this.content = content;
    this._newContent = true;
    if (typeof this.content === "function") {
      this._contentFunction = this.content;
      this.content = "";
    } else {
      this._contentFunction = null;
    }
    if (this.visible) {
      return this._updateElementContent();
    }
  };

  Opentip.prototype._updateElementContent = function () {
    var contentDiv;
    if (this._newContent || !this.options.cache && this._contentFunction) {
      contentDiv = this.adapter.find(this.container, "." + this["class"].content);
      if (contentDiv != null) {
        if (this._contentFunction) {
          this.debug("Executing content function.");
          this.content = this._contentFunction(this);
        }
        this.adapter.update(contentDiv, this.content, this.options.escapeContent);
      }
      this._newContent = false;
    }
    this._storeAndLockDimensions();
    return this.reposition();
  };

  Opentip.prototype._storeAndLockDimensions = function () {
    var prevDimension;
    if (!this.container) {
      return;
    }
    prevDimension = this.dimensions;
    this.adapter.css(this.container, {
      width: "auto",
      left: "0px",
      top: "0px"
    });
    this.dimensions = this.adapter.dimensions(this.container);
    this.dimensions.width += 1;
    this.adapter.css(this.container, {
      width: "" + this.dimensions.width + "px",
      top: "" + this.currentPosition.top + "px",
      left: "" + this.currentPosition.left + "px"
    });
    if (!this._dimensionsEqual(this.dimensions, prevDimension)) {
      this.redraw = true;
      return this._draw();
    }
  };

  Opentip.prototype.activate = function () {
    return this._setupObservers("hidden", "hiding");
  };

  Opentip.prototype.deactivate = function () {
    this.debug("Deactivating tooltip.");
    this.hide();
    return this._setupObservers("-showing", "-visible", "-hidden", "-hiding");
  };

  Opentip.prototype._setupObservers = function () {
    var observeOrStop,
        removeObserver,
        state,
        states,
        trigger,
        _i,
        _j,
        _k,
        _l,
        _len,
        _len1,
        _len2,
        _len3,
        _ref,
        _ref1,
        _ref2,
        _this = this;
    states = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    for (_i = 0, _len = states.length; _i < _len; _i++) {
      state = states[_i];
      removeObserver = false;
      if (state.charAt(0) === "-") {
        removeObserver = true;
        state = state.substr(1);
      }
      if (this.currentObservers[state] === !removeObserver) {
        continue;
      }
      this.currentObservers[state] = !removeObserver;
      observeOrStop = function observeOrStop() {
        var args, _ref, _ref1;
        args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        if (removeObserver) {
          return (_ref = _this.adapter).stopObserving.apply(_ref, args);
        } else {
          return (_ref1 = _this.adapter).observe.apply(_ref1, args);
        }
      };
      switch (state) {
        case "showing":
          _ref = this.hideTriggers;
          for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
            trigger = _ref[_j];
            observeOrStop(trigger.element, trigger.event, this.bound.prepareToHide);
          }
          observeOrStop(document.onresize != null ? document : window, "resize", this.bound.reposition);
          observeOrStop(window, "scroll", this.bound.reposition);
          break;
        case "visible":
          _ref1 = this.showTriggersWhenVisible;
          for (_k = 0, _len2 = _ref1.length; _k < _len2; _k++) {
            trigger = _ref1[_k];
            observeOrStop(trigger.element, trigger.event, this.bound.prepareToShow);
          }
          break;
        case "hiding":
          _ref2 = this.showTriggers;
          for (_l = 0, _len3 = _ref2.length; _l < _len3; _l++) {
            trigger = _ref2[_l];
            observeOrStop(trigger.element, trigger.event, this.bound.prepareToShow);
          }
          break;
        case "hidden":
          break;
        default:
          throw new Error("Unknown state: " + state);
      }
    }
    return null;
  };

  Opentip.prototype.prepareToShow = function () {
    this._abortHiding();
    this._abortShowing();
    if (this.visible) {
      return;
    }
    this.debug("Showing in " + this.options.delay + "s.");
    if (this.container == null) {
      this._setup();
    }
    if (this.options.group) {
      Opentip._abortShowingGroup(this.options.group, this);
    }
    this.preparingToShow = true;
    this._setupObservers("-hidden", "-hiding", "showing");
    this._followMousePosition();
    if (this.options.fixed && !this.options.target) {
      this.initialMousePosition = mousePosition;
    }
    this.reposition();
    return this._showTimeoutId = this.setTimeout(this.bound.show, this.options.delay || 0);
  };

  Opentip.prototype.show = function () {
    var _this = this;
    this._abortHiding();
    if (this.visible) {
      return;
    }
    this._clearTimeouts();
    if (!this._triggerElementExists()) {
      return this.deactivate();
    }
    this.debug("Showing now.");
    if (this.container == null) {
      this._setup();
    }
    if (this.options.group) {
      Opentip._hideGroup(this.options.group, this);
    }
    this.visible = true;
    this.preparingToShow = false;
    if (this.tooltipElement == null) {
      this._buildElements();
    }
    this._updateElementContent();
    if (this.options.ajax && (!this.loaded || !this.options.cache)) {
      this._loadAjax();
    }
    this._searchAndActivateCloseButtons();
    this._startEnsureTriggerElement();
    this.adapter.css(this.container, {
      zIndex: Opentip.lastZIndex++
    });
    this._setupObservers("-hidden", "-hiding", "-showing", "-visible", "showing", "visible");
    if (this.options.fixed && !this.options.target) {
      this.initialMousePosition = mousePosition;
    }
    this.reposition();
    this.adapter.removeClass(this.container, this["class"].hiding);
    this.adapter.removeClass(this.container, this["class"].hidden);
    this.adapter.addClass(this.container, this["class"].goingToShow);
    this.setCss3Style(this.container, {
      transitionDuration: "0s"
    });
    this.defer(function () {
      var delay;
      if (!_this.visible || _this.preparingToHide) {
        return;
      }
      _this.adapter.removeClass(_this.container, _this["class"].goingToShow);
      _this.adapter.addClass(_this.container, _this["class"].showing);
      delay = 0;
      if (_this.options.showEffect && _this.options.showEffectDuration) {
        delay = _this.options.showEffectDuration;
      }
      _this.setCss3Style(_this.container, {
        transitionDuration: "" + delay + "s"
      });
      _this._visibilityStateTimeoutId = _this.setTimeout(function () {
        _this.adapter.removeClass(_this.container, _this["class"].showing);
        return _this.adapter.addClass(_this.container, _this["class"].visible);
      }, delay);
      return _this._activateFirstInput();
    });
    return this._draw();
  };

  Opentip.prototype._abortShowing = function () {
    if (this.preparingToShow) {
      this.debug("Aborting showing.");
      this._clearTimeouts();
      this._stopFollowingMousePosition();
      this.preparingToShow = false;
      return this._setupObservers("-showing", "-visible", "hiding", "hidden");
    }
  };

  Opentip.prototype.prepareToHide = function () {
    this._abortShowing();
    this._abortHiding();
    if (!this.visible) {
      return;
    }
    this.debug("Hiding in " + this.options.hideDelay + "s");
    this.preparingToHide = true;
    this._setupObservers("-showing", "visible", "-hidden", "hiding");
    return this._hideTimeoutId = this.setTimeout(this.bound.hide, this.options.hideDelay);
  };

  Opentip.prototype.hide = function () {
    var _this = this;
    this._abortShowing();
    if (!this.visible) {
      return;
    }
    this._clearTimeouts();
    this.debug("Hiding!");
    this.visible = false;
    this.preparingToHide = false;
    this._stopEnsureTriggerElement();
    this._setupObservers("-showing", "-visible", "-hiding", "-hidden", "hiding", "hidden");
    if (!this.options.fixed) {
      this._stopFollowingMousePosition();
    }
    if (!this.container) {
      return;
    }
    this.adapter.removeClass(this.container, this["class"].visible);
    this.adapter.removeClass(this.container, this["class"].showing);
    this.adapter.addClass(this.container, this["class"].goingToHide);
    this.setCss3Style(this.container, {
      transitionDuration: "0s"
    });
    return this.defer(function () {
      var hideDelay;
      _this.adapter.removeClass(_this.container, _this["class"].goingToHide);
      _this.adapter.addClass(_this.container, _this["class"].hiding);
      hideDelay = 0;
      if (_this.options.hideEffect && _this.options.hideEffectDuration) {
        hideDelay = _this.options.hideEffectDuration;
      }
      _this.setCss3Style(_this.container, {
        transitionDuration: "" + hideDelay + "s"
      });
      return _this._visibilityStateTimeoutId = _this.setTimeout(function () {
        _this.adapter.removeClass(_this.container, _this["class"].hiding);
        _this.adapter.addClass(_this.container, _this["class"].hidden);
        _this.setCss3Style(_this.container, {
          transitionDuration: "0s"
        });
        if (_this.options.removeElementsOnHide) {
          _this.debug("Removing HTML elements.");
          _this.adapter.remove(_this.container);
          delete _this.container;
          return delete _this.tooltipElement;
        }
      }, hideDelay);
    });
  };

  Opentip.prototype._abortHiding = function () {
    if (this.preparingToHide) {
      this.debug("Aborting hiding.");
      this._clearTimeouts();
      this.preparingToHide = false;
      return this._setupObservers("-hiding", "showing", "visible");
    }
  };

  Opentip.prototype.reposition = function () {
    var position,
        stem,
        _ref,
        _this = this;
    position = this.getPosition();
    if (position == null) {
      return;
    }
    stem = this.options.stem;
    if (this.options.containInViewport) {
      _ref = this._ensureViewportContainment(position), position = _ref.position, stem = _ref.stem;
    }
    if (this._positionsEqual(position, this.currentPosition)) {
      return;
    }
    if (!(!this.options.stem || stem.eql(this.currentStem))) {
      this.redraw = true;
    }
    this.currentPosition = position;
    this.currentStem = stem;
    this._draw();
    this.adapter.css(this.container, {
      left: "" + position.left + "px",
      top: "" + position.top + "px"
    });
    return this.defer(function () {
      var rawContainer, redrawFix;
      rawContainer = _this.adapter.unwrap(_this.container);
      rawContainer.style.visibility = "hidden";
      redrawFix = rawContainer.offsetHeight;
      return rawContainer.style.visibility = "visible";
    });
  };

  Opentip.prototype.getPosition = function (tipJoint, targetJoint, stem) {
    var additionalHorizontal, additionalVertical, offsetDistance, position, stemLength, targetDimensions, targetPosition, unwrappedTarget, _ref;
    if (!this.container) {
      return;
    }
    if (tipJoint == null) {
      tipJoint = this.options.tipJoint;
    }
    if (targetJoint == null) {
      targetJoint = this.options.targetJoint;
    }
    position = {};
    if (this.options.target) {
      targetPosition = this.adapter.offset(this.options.target);
      targetDimensions = this.adapter.dimensions(this.options.target);
      position = targetPosition;
      if (targetJoint.right) {
        unwrappedTarget = this.adapter.unwrap(this.options.target);
        if (unwrappedTarget.getBoundingClientRect != null) {
          position.left = unwrappedTarget.getBoundingClientRect().right + ((_ref = window.pageXOffset) != null ? _ref : document.body.scrollLeft);
        } else {
          position.left += targetDimensions.width;
        }
      } else if (targetJoint.center) {
        position.left += Math.round(targetDimensions.width / 2);
      }
      if (targetJoint.bottom) {
        position.top += targetDimensions.height;
      } else if (targetJoint.middle) {
        position.top += Math.round(targetDimensions.height / 2);
      }
      if (this.options.borderWidth) {
        if (this.options.tipJoint.left) {
          position.left += this.options.borderWidth;
        }
        if (this.options.tipJoint.right) {
          position.left -= this.options.borderWidth;
        }
        if (this.options.tipJoint.top) {
          position.top += this.options.borderWidth;
        } else if (this.options.tipJoint.bottom) {
          position.top -= this.options.borderWidth;
        }
      }
    } else {
      if (this.initialMousePosition) {
        position = {
          top: this.initialMousePosition.y,
          left: this.initialMousePosition.x
        };
      } else {
        position = {
          top: mousePosition.y,
          left: mousePosition.x
        };
      }
    }
    if (this.options.autoOffset) {
      stemLength = this.options.stem ? this.options.stemLength : 0;
      offsetDistance = stemLength && this.options.fixed ? 2 : 10;
      additionalHorizontal = tipJoint.middle && !this.options.fixed ? 15 : 0;
      additionalVertical = tipJoint.center && !this.options.fixed ? 15 : 0;
      if (tipJoint.right) {
        position.left -= offsetDistance + additionalHorizontal;
      } else if (tipJoint.left) {
        position.left += offsetDistance + additionalHorizontal;
      }
      if (tipJoint.bottom) {
        position.top -= offsetDistance + additionalVertical;
      } else if (tipJoint.top) {
        position.top += offsetDistance + additionalVertical;
      }
      if (stemLength) {
        if (stem == null) {
          stem = this.options.stem;
        }
        if (stem.right) {
          position.left -= stemLength;
        } else if (stem.left) {
          position.left += stemLength;
        }
        if (stem.bottom) {
          position.top -= stemLength;
        } else if (stem.top) {
          position.top += stemLength;
        }
      }
    }
    position.left += this.options.offset[0];
    position.top += this.options.offset[1];
    if (tipJoint.right) {
      position.left -= this.dimensions.width;
    } else if (tipJoint.center) {
      position.left -= Math.round(this.dimensions.width / 2);
    }
    if (tipJoint.bottom) {
      position.top -= this.dimensions.height;
    } else if (tipJoint.middle) {
      position.top -= Math.round(this.dimensions.height / 2);
    }
    return position;
  };

  Opentip.prototype._ensureViewportContainment = function (position) {
    var needsRepositioning, newSticksOut, originals, revertedX, revertedY, scrollOffset, stem, sticksOut, targetJoint, tipJoint, viewportDimensions, viewportPosition;
    stem = this.options.stem;
    originals = {
      position: position,
      stem: stem
    };
    if (!(this.visible && position)) {
      return originals;
    }
    sticksOut = this._sticksOut(position);
    if (!(sticksOut[0] || sticksOut[1])) {
      return originals;
    }
    tipJoint = new Opentip.Joint(this.options.tipJoint);
    if (this.options.targetJoint) {
      targetJoint = new Opentip.Joint(this.options.targetJoint);
    }
    scrollOffset = this.adapter.scrollOffset();
    viewportDimensions = this.adapter.viewportDimensions();
    viewportPosition = [position.left - scrollOffset[0], position.top - scrollOffset[1]];
    needsRepositioning = false;
    if (viewportDimensions.width >= this.dimensions.width) {
      if (sticksOut[0]) {
        needsRepositioning = true;
        switch (sticksOut[0]) {
          case this.STICKS_OUT_LEFT:
            tipJoint.setHorizontal("left");
            if (this.options.targetJoint) {
              targetJoint.setHorizontal("right");
            }
            break;
          case this.STICKS_OUT_RIGHT:
            tipJoint.setHorizontal("right");
            if (this.options.targetJoint) {
              targetJoint.setHorizontal("left");
            }
        }
      }
    }
    if (viewportDimensions.height >= this.dimensions.height) {
      if (sticksOut[1]) {
        needsRepositioning = true;
        switch (sticksOut[1]) {
          case this.STICKS_OUT_TOP:
            tipJoint.setVertical("top");
            if (this.options.targetJoint) {
              targetJoint.setVertical("bottom");
            }
            break;
          case this.STICKS_OUT_BOTTOM:
            tipJoint.setVertical("bottom");
            if (this.options.targetJoint) {
              targetJoint.setVertical("top");
            }
        }
      }
    }
    if (!needsRepositioning) {
      return originals;
    }
    if (this.options.stem) {
      stem = tipJoint;
    }
    position = this.getPosition(tipJoint, targetJoint, stem);
    newSticksOut = this._sticksOut(position);
    revertedX = false;
    revertedY = false;
    if (newSticksOut[0] && newSticksOut[0] !== sticksOut[0]) {
      revertedX = true;
      tipJoint.setHorizontal(this.options.tipJoint.horizontal);
      if (this.options.targetJoint) {
        targetJoint.setHorizontal(this.options.targetJoint.horizontal);
      }
    }
    if (newSticksOut[1] && newSticksOut[1] !== sticksOut[1]) {
      revertedY = true;
      tipJoint.setVertical(this.options.tipJoint.vertical);
      if (this.options.targetJoint) {
        targetJoint.setVertical(this.options.targetJoint.vertical);
      }
    }
    if (revertedX && revertedY) {
      return originals;
    }
    if (revertedX || revertedY) {
      if (this.options.stem) {
        stem = tipJoint;
      }
      position = this.getPosition(tipJoint, targetJoint, stem);
    }
    return {
      position: position,
      stem: stem
    };
  };

  Opentip.prototype._sticksOut = function (position) {
    var positionOffset, scrollOffset, sticksOut, viewportDimensions;
    scrollOffset = this.adapter.scrollOffset();
    viewportDimensions = this.adapter.viewportDimensions();
    positionOffset = [position.left - scrollOffset[0], position.top - scrollOffset[1]];
    sticksOut = [false, false];
    if (positionOffset[0] < 0) {
      sticksOut[0] = this.STICKS_OUT_LEFT;
    } else if (positionOffset[0] + this.dimensions.width > viewportDimensions.width) {
      sticksOut[0] = this.STICKS_OUT_RIGHT;
    }
    if (positionOffset[1] < 0) {
      sticksOut[1] = this.STICKS_OUT_TOP;
    } else if (positionOffset[1] + this.dimensions.height > viewportDimensions.height) {
      sticksOut[1] = this.STICKS_OUT_BOTTOM;
    }
    return sticksOut;
  };

  Opentip.prototype._draw = function () {
    var backgroundCanvas,
        bulge,
        canvasDimensions,
        canvasPosition,
        closeButton,
        closeButtonInner,
        closeButtonOuter,
        ctx,
        drawCorner,
        drawLine,
        hb,
        position,
        stemBase,
        stemLength,
        _i,
        _len,
        _ref,
        _ref1,
        _ref2,
        _this = this;
    if (!(this.backgroundCanvas && this.redraw)) {
      return;
    }
    this.debug("Drawing background.");
    this.redraw = false;
    if (this.currentStem) {
      _ref = ["top", "right", "bottom", "left"];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        position = _ref[_i];
        this.adapter.removeClass(this.container, "stem-" + position);
      }
      this.adapter.addClass(this.container, "stem-" + this.currentStem.horizontal);
      this.adapter.addClass(this.container, "stem-" + this.currentStem.vertical);
    }
    closeButtonInner = [0, 0];
    closeButtonOuter = [0, 0];
    if (__indexOf.call(this.options.hideTriggers, "closeButton") >= 0) {
      closeButton = new Opentip.Joint(((_ref1 = this.currentStem) != null ? _ref1.toString() : void 0) === "top right" ? "top left" : "top right");
      closeButtonInner = [this.options.closeButtonRadius + this.options.closeButtonOffset[0], this.options.closeButtonRadius + this.options.closeButtonOffset[1]];
      closeButtonOuter = [this.options.closeButtonRadius - this.options.closeButtonOffset[0], this.options.closeButtonRadius - this.options.closeButtonOffset[1]];
    }
    canvasDimensions = this.adapter.clone(this.dimensions);
    canvasPosition = [0, 0];
    if (this.options.borderWidth) {
      canvasDimensions.width += this.options.borderWidth * 2;
      canvasDimensions.height += this.options.borderWidth * 2;
      canvasPosition[0] -= this.options.borderWidth;
      canvasPosition[1] -= this.options.borderWidth;
    }
    if (this.options.shadow) {
      canvasDimensions.width += this.options.shadowBlur * 2;
      canvasDimensions.width += Math.max(0, this.options.shadowOffset[0] - this.options.shadowBlur * 2);
      canvasDimensions.height += this.options.shadowBlur * 2;
      canvasDimensions.height += Math.max(0, this.options.shadowOffset[1] - this.options.shadowBlur * 2);
      canvasPosition[0] -= Math.max(0, this.options.shadowBlur - this.options.shadowOffset[0]);
      canvasPosition[1] -= Math.max(0, this.options.shadowBlur - this.options.shadowOffset[1]);
    }
    bulge = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    };
    if (this.currentStem) {
      if (this.currentStem.left) {
        bulge.left = this.options.stemLength;
      } else if (this.currentStem.right) {
        bulge.right = this.options.stemLength;
      }
      if (this.currentStem.top) {
        bulge.top = this.options.stemLength;
      } else if (this.currentStem.bottom) {
        bulge.bottom = this.options.stemLength;
      }
    }
    if (closeButton) {
      if (closeButton.left) {
        bulge.left = Math.max(bulge.left, closeButtonOuter[0]);
      } else if (closeButton.right) {
        bulge.right = Math.max(bulge.right, closeButtonOuter[0]);
      }
      if (closeButton.top) {
        bulge.top = Math.max(bulge.top, closeButtonOuter[1]);
      } else if (closeButton.bottom) {
        bulge.bottom = Math.max(bulge.bottom, closeButtonOuter[1]);
      }
    }
    canvasDimensions.width += bulge.left + bulge.right;
    canvasDimensions.height += bulge.top + bulge.bottom;
    canvasPosition[0] -= bulge.left;
    canvasPosition[1] -= bulge.top;
    if (this.currentStem && this.options.borderWidth) {
      _ref2 = this._getPathStemMeasures(this.options.stemBase, this.options.stemLength, this.options.borderWidth), stemLength = _ref2.stemLength, stemBase = _ref2.stemBase;
    }
    backgroundCanvas = this.adapter.unwrap(this.backgroundCanvas);
    backgroundCanvas.width = canvasDimensions.width;
    backgroundCanvas.height = canvasDimensions.height;
    this.adapter.css(this.backgroundCanvas, {
      width: "" + backgroundCanvas.width + "px",
      height: "" + backgroundCanvas.height + "px",
      left: "" + canvasPosition[0] + "px",
      top: "" + canvasPosition[1] + "px"
    });
    ctx = backgroundCanvas.getContext("2d");
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, backgroundCanvas.width, backgroundCanvas.height);
    ctx.beginPath();
    ctx.fillStyle = this._getColor(ctx, this.dimensions, this.options.background, this.options.backgroundGradientHorizontal);
    ctx.lineJoin = "miter";
    ctx.miterLimit = 500;
    hb = this.options.borderWidth / 2;
    if (this.options.borderWidth) {
      ctx.strokeStyle = this.options.borderColor;
      ctx.lineWidth = this.options.borderWidth;
    } else {
      stemLength = this.options.stemLength;
      stemBase = this.options.stemBase;
    }
    if (stemBase == null) {
      stemBase = 0;
    }
    drawLine = function drawLine(length, stem, first) {
      if (first) {
        ctx.moveTo(Math.max(stemBase, _this.options.borderRadius, closeButtonInner[0]) + 1 - hb, -hb);
      }
      if (stem) {
        ctx.lineTo(length / 2 - stemBase / 2, -hb);
        ctx.lineTo(length / 2, -stemLength - hb);
        return ctx.lineTo(length / 2 + stemBase / 2, -hb);
      }
    };
    drawCorner = function drawCorner(stem, closeButton, i) {
      var angle1, angle2, innerWidth, offset;
      if (stem) {
        ctx.lineTo(-stemBase + hb, 0 - hb);
        ctx.lineTo(stemLength + hb, -stemLength - hb);
        return ctx.lineTo(hb, stemBase - hb);
      } else if (closeButton) {
        offset = _this.options.closeButtonOffset;
        innerWidth = closeButtonInner[0];
        if (i % 2 !== 0) {
          offset = [offset[1], offset[0]];
          innerWidth = closeButtonInner[1];
        }
        angle1 = Math.acos(offset[1] / _this.options.closeButtonRadius);
        angle2 = Math.acos(offset[0] / _this.options.closeButtonRadius);
        ctx.lineTo(-innerWidth + hb, -hb);
        return ctx.arc(hb - offset[0], -hb + offset[1], _this.options.closeButtonRadius, -(Math.PI / 2 + angle1), angle2, false);
      } else {
        ctx.lineTo(-_this.options.borderRadius + hb, -hb);
        return ctx.quadraticCurveTo(hb, -hb, hb, _this.options.borderRadius - hb);
      }
    };
    ctx.translate(-canvasPosition[0], -canvasPosition[1]);
    ctx.save();
    (function () {
      var cornerStem, i, lineLength, lineStem, positionIdx, positionX, positionY, rotation, _j, _ref3, _results;
      _results = [];
      for (i = _j = 0, _ref3 = Opentip.positions.length / 2; 0 <= _ref3 ? _j < _ref3 : _j > _ref3; i = 0 <= _ref3 ? ++_j : --_j) {
        positionIdx = i * 2;
        positionX = i === 0 || i === 3 ? 0 : _this.dimensions.width;
        positionY = i < 2 ? 0 : _this.dimensions.height;
        rotation = Math.PI / 2 * i;
        lineLength = i % 2 === 0 ? _this.dimensions.width : _this.dimensions.height;
        lineStem = new Opentip.Joint(Opentip.positions[positionIdx]);
        cornerStem = new Opentip.Joint(Opentip.positions[positionIdx + 1]);
        ctx.save();
        ctx.translate(positionX, positionY);
        ctx.rotate(rotation);
        drawLine(lineLength, lineStem.eql(_this.currentStem), i === 0);
        ctx.translate(lineLength, 0);
        drawCorner(cornerStem.eql(_this.currentStem), cornerStem.eql(closeButton), i);
        _results.push(ctx.restore());
      }
      return _results;
    })();
    ctx.closePath();
    ctx.save();
    if (this.options.shadow) {
      ctx.shadowColor = this.options.shadowColor;
      ctx.shadowBlur = this.options.shadowBlur;
      ctx.shadowOffsetX = this.options.shadowOffset[0];
      ctx.shadowOffsetY = this.options.shadowOffset[1];
    }
    ctx.fill();
    ctx.restore();
    if (this.options.borderWidth) {
      ctx.stroke();
    }
    ctx.restore();
    if (closeButton) {
      return function () {
        var crossCenter, crossHeight, crossWidth, hcs, linkCenter;
        crossWidth = crossHeight = _this.options.closeButtonRadius * 2;
        if (closeButton.toString() === "top right") {
          linkCenter = [_this.dimensions.width - _this.options.closeButtonOffset[0], _this.options.closeButtonOffset[1]];
          crossCenter = [linkCenter[0] + hb, linkCenter[1] - hb];
        } else {
          linkCenter = [_this.options.closeButtonOffset[0], _this.options.closeButtonOffset[1]];
          crossCenter = [linkCenter[0] - hb, linkCenter[1] - hb];
        }
        ctx.translate(crossCenter[0], crossCenter[1]);
        hcs = _this.options.closeButtonCrossSize / 2;
        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = _this.options.closeButtonCrossColor;
        ctx.lineWidth = _this.options.closeButtonCrossLineWidth;
        ctx.lineCap = "round";
        ctx.moveTo(-hcs, -hcs);
        ctx.lineTo(hcs, hcs);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(hcs, -hcs);
        ctx.lineTo(-hcs, hcs);
        ctx.stroke();
        ctx.restore();
        return _this.adapter.css(_this.closeButtonElement, {
          left: "" + (linkCenter[0] - hcs - _this.options.closeButtonLinkOverscan) + "px",
          top: "" + (linkCenter[1] - hcs - _this.options.closeButtonLinkOverscan) + "px",
          width: "" + (_this.options.closeButtonCrossSize + _this.options.closeButtonLinkOverscan * 2) + "px",
          height: "" + (_this.options.closeButtonCrossSize + _this.options.closeButtonLinkOverscan * 2) + "px"
        });
      }();
    }
  };

  Opentip.prototype._getPathStemMeasures = function (outerStemBase, outerStemLength, borderWidth) {
    var angle, distanceBetweenTips, halfAngle, hb, rhombusSide, stemBase, stemLength;
    hb = borderWidth / 2;
    halfAngle = Math.atan(outerStemBase / 2 / outerStemLength);
    angle = halfAngle * 2;
    rhombusSide = hb / Math.sin(angle);
    distanceBetweenTips = 2 * rhombusSide * Math.cos(halfAngle);
    stemLength = hb + outerStemLength - distanceBetweenTips;
    if (stemLength < 0) {
      throw new Error("Sorry but your stemLength / stemBase ratio is strange.");
    }
    stemBase = Math.tan(halfAngle) * stemLength * 2;
    return {
      stemLength: stemLength,
      stemBase: stemBase
    };
  };

  Opentip.prototype._getColor = function (ctx, dimensions, color, horizontal) {
    var colorStop, gradient, i, _i, _len;
    if (horizontal == null) {
      horizontal = false;
    }
    if (typeof color === "string") {
      return color;
    }
    if (horizontal) {
      gradient = ctx.createLinearGradient(0, 0, dimensions.width, 0);
    } else {
      gradient = ctx.createLinearGradient(0, 0, 0, dimensions.height);
    }
    for (i = _i = 0, _len = color.length; _i < _len; i = ++_i) {
      colorStop = color[i];
      gradient.addColorStop(colorStop[0], colorStop[1]);
    }
    return gradient;
  };

  Opentip.prototype._searchAndActivateCloseButtons = function () {
    var element, _i, _len, _ref;
    _ref = this.adapter.findAll(this.container, "." + this["class"].close);
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      element = _ref[_i];
      this.hideTriggers.push({
        element: this.adapter.wrap(element),
        event: "click"
      });
    }
    if (this.currentObservers.showing) {
      this._setupObservers("-showing", "showing");
    }
    if (this.currentObservers.visible) {
      return this._setupObservers("-visible", "visible");
    }
  };

  Opentip.prototype._activateFirstInput = function () {
    var input;
    input = this.adapter.unwrap(this.adapter.find(this.container, "input, textarea"));
    return input != null ? typeof input.focus === "function" ? input.focus() : void 0 : void 0;
  };

  Opentip.prototype._followMousePosition = function () {
    if (!this.options.fixed) {
      return Opentip._observeMousePosition(this.bound.reposition);
    }
  };

  Opentip.prototype._stopFollowingMousePosition = function () {
    if (!this.options.fixed) {
      return Opentip._stopObservingMousePosition(this.bound.reposition);
    }
  };

  Opentip.prototype._clearShowTimeout = function () {
    return clearTimeout(this._showTimeoutId);
  };

  Opentip.prototype._clearHideTimeout = function () {
    return clearTimeout(this._hideTimeoutId);
  };

  Opentip.prototype._clearTimeouts = function () {
    clearTimeout(this._visibilityStateTimeoutId);
    this._clearShowTimeout();
    return this._clearHideTimeout();
  };

  Opentip.prototype._triggerElementExists = function () {
    var el;
    el = this.adapter.unwrap(this.triggerElement);
    while (el.parentNode) {
      if (el.parentNode.tagName === "BODY") {
        return true;
      }
      el = el.parentNode;
    }
    return false;
  };

  Opentip.prototype._loadAjax = function () {
    var _this = this;
    if (this.loading) {
      return;
    }
    this.loaded = false;
    this.loading = true;
    this.adapter.addClass(this.container, this["class"].loading);
    this.setContent("");
    this.debug("Loading content from " + this.options.ajax);
    return this.adapter.ajax({
      url: this.options.ajax,
      method: this.options.ajaxMethod,
      onSuccess: function onSuccess(responseText) {
        _this.debug("Loading successful.");
        _this.adapter.removeClass(_this.container, _this["class"].loading);
        return _this.setContent(responseText);
      },
      onError: function onError(error) {
        var message;
        message = _this.options.ajaxErrorMessage;
        _this.debug(message, error);
        _this.setContent(message);
        return _this.adapter.addClass(_this.container, _this["class"].ajaxError);
      },
      onComplete: function onComplete() {
        _this.adapter.removeClass(_this.container, _this["class"].loading);
        _this.loading = false;
        _this.loaded = true;
        _this._searchAndActivateCloseButtons();
        _this._activateFirstInput();
        return _this.reposition();
      }
    });
  };

  Opentip.prototype._ensureTriggerElement = function () {
    if (!this._triggerElementExists()) {
      this.deactivate();
      return this._stopEnsureTriggerElement();
    }
  };

  Opentip.prototype._ensureTriggerElementInterval = 1000;

  Opentip.prototype._startEnsureTriggerElement = function () {
    var _this = this;
    return this._ensureTriggerElementTimeoutId = setInterval(function () {
      return _this._ensureTriggerElement();
    }, this._ensureTriggerElementInterval);
  };

  Opentip.prototype._stopEnsureTriggerElement = function () {
    return clearInterval(this._ensureTriggerElementTimeoutId);
  };

  return Opentip;
}();

vendors = ["khtml", "ms", "o", "moz", "webkit"];

Opentip.prototype.setCss3Style = function (element, styles) {
  var prop, value, vendor, vendorProp, _results;
  element = this.adapter.unwrap(element);
  _results = [];
  for (prop in styles) {
    if (!__hasProp.call(styles, prop)) continue;
    value = styles[prop];
    if (element.style[prop] != null) {
      _results.push(element.style[prop] = value);
    } else {
      _results.push(function () {
        var _i, _len, _results1;
        _results1 = [];
        for (_i = 0, _len = vendors.length; _i < _len; _i++) {
          vendor = vendors[_i];
          vendorProp = "" + this.ucfirst(vendor) + this.ucfirst(prop);
          if (element.style[vendorProp] != null) {
            _results1.push(element.style[vendorProp] = value);
          } else {
            _results1.push(void 0);
          }
        }
        return _results1;
      }.call(this));
    }
  }
  return _results;
};

Opentip.prototype.defer = function (func) {
  return setTimeout(func, 0);
};

Opentip.prototype.setTimeout = function (func, seconds) {
  return setTimeout(func, seconds ? seconds * 1000 : 0);
};

Opentip.prototype.ucfirst = function (string) {
  if (string == null) {
    return "";
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
};

Opentip.prototype.dasherize = function (string) {
  return string.replace(/([A-Z])/g, function (_, character) {
    return "-" + character.toLowerCase();
  });
};

mousePositionObservers = [];

mousePosition = {
  x: 0,
  y: 0
};

mouseMoved = function mouseMoved(e) {
  var observer, _i, _len, _results;
  mousePosition = Opentip.adapter.mousePosition(e);
  _results = [];
  for (_i = 0, _len = mousePositionObservers.length; _i < _len; _i++) {
    observer = mousePositionObservers[_i];
    _results.push(observer());
  }
  return _results;
};

Opentip.followMousePosition = function () {
  return Opentip.adapter.observe(document.body, "mousemove", mouseMoved);
};

Opentip._observeMousePosition = function (observer) {
  return mousePositionObservers.push(observer);
};

Opentip._stopObservingMousePosition = function (removeObserver) {
  var observer;
  return mousePositionObservers = function () {
    var _i, _len, _results;
    _results = [];
    for (_i = 0, _len = mousePositionObservers.length; _i < _len; _i++) {
      observer = mousePositionObservers[_i];
      if (observer !== removeObserver) {
        _results.push(observer);
      }
    }
    return _results;
  }();
};

Opentip.Joint = function () {

  function Joint(pointerString) {
    if (pointerString == null) {
      return;
    }
    if (pointerString instanceof Opentip.Joint) {
      pointerString = pointerString.toString();
    }
    this.set(pointerString);
    this;
  }

  Joint.prototype.set = function (string) {
    string = string.toLowerCase();
    this.setHorizontal(string);
    this.setVertical(string);
    return this;
  };

  Joint.prototype.setHorizontal = function (string) {
    var i, valid, _i, _j, _len, _len1, _results;
    valid = ["left", "center", "right"];
    for (_i = 0, _len = valid.length; _i < _len; _i++) {
      i = valid[_i];
      if (~string.indexOf(i)) {
        this.horizontal = i.toLowerCase();
      }
    }
    if (this.horizontal == null) {
      this.horizontal = "center";
    }
    _results = [];
    for (_j = 0, _len1 = valid.length; _j < _len1; _j++) {
      i = valid[_j];
      _results.push(this[i] = this.horizontal === i ? i : void 0);
    }
    return _results;
  };

  Joint.prototype.setVertical = function (string) {
    var i, valid, _i, _j, _len, _len1, _results;
    valid = ["top", "middle", "bottom"];
    for (_i = 0, _len = valid.length; _i < _len; _i++) {
      i = valid[_i];
      if (~string.indexOf(i)) {
        this.vertical = i.toLowerCase();
      }
    }
    if (this.vertical == null) {
      this.vertical = "middle";
    }
    _results = [];
    for (_j = 0, _len1 = valid.length; _j < _len1; _j++) {
      i = valid[_j];
      _results.push(this[i] = this.vertical === i ? i : void 0);
    }
    return _results;
  };

  Joint.prototype.eql = function (pointer) {
    return pointer != null && this.horizontal === pointer.horizontal && this.vertical === pointer.vertical;
  };

  Joint.prototype.flip = function () {
    var flippedIndex, positionIdx;
    positionIdx = Opentip.position[this.toString(true)];
    flippedIndex = (positionIdx + 4) % 8;
    this.set(Opentip.positions[flippedIndex]);
    return this;
  };

  Joint.prototype.toString = function (camelized) {
    var horizontal, vertical;
    if (camelized == null) {
      camelized = false;
    }
    vertical = this.vertical === "middle" ? "" : this.vertical;
    horizontal = this.horizontal === "center" ? "" : this.horizontal;
    if (vertical && horizontal) {
      if (camelized) {
        horizontal = Opentip.prototype.ucfirst(horizontal);
      } else {
        horizontal = " " + horizontal;
      }
    }
    return "" + vertical + horizontal;
  };

  return Joint;
}();

Opentip.prototype._positionsEqual = function (posA, posB) {
  return posA != null && posB != null && posA.left === posB.left && posA.top === posB.top;
};

Opentip.prototype._dimensionsEqual = function (dimA, dimB) {
  return dimA != null && dimB != null && dimA.width === dimB.width && dimA.height === dimB.height;
};

Opentip.prototype.debug = function () {
  var args;
  args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  if (Opentip.debug && (typeof console !== "undefined" && console !== null ? console.debug : void 0) != null) {
    args.unshift("#" + this.id + " |");
    return console.debug.apply(console, args);
  }
};

Opentip.findElements = function () {
  var adapter, content, element, optionName, optionValue, options, _i, _len, _ref, _results;
  adapter = Opentip.adapter;
  _ref = adapter.findAll(document.body, "[data-ot]");
  _results = [];
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    element = _ref[_i];
    options = {};
    content = adapter.data(element, "ot");
    if (content === "" || content === "true" || content === "yes") {
      content = adapter.attr(element, "title");
      adapter.attr(element, "title", "");
    }
    content = content || "";
    for (optionName in Opentip.styles.standard) {
      optionValue = adapter.data(element, "ot" + Opentip.prototype.ucfirst(optionName));
      if (optionValue != null) {
        if (optionValue === "yes" || optionValue === "true" || optionValue === "on") {
          optionValue = true;
        } else if (optionValue === "no" || optionValue === "false" || optionValue === "off") {
          optionValue = false;
        }
        options[optionName] = optionValue;
      }
    }
    _results.push(new Opentip(element, content, options));
  }
  return _results;
};

Opentip.version = "2.4.6";

Opentip.debug = false;

Opentip.lastId = 0;

Opentip.lastZIndex = 100;

Opentip.tips = [];

Opentip._abortShowingGroup = function (group, originatingOpentip) {
  var opentip, _i, _len, _ref, _results;
  _ref = Opentip.tips;
  _results = [];
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    opentip = _ref[_i];
    if (opentip !== originatingOpentip && opentip.options.group === group) {
      _results.push(opentip._abortShowing());
    } else {
      _results.push(void 0);
    }
  }
  return _results;
};

Opentip._hideGroup = function (group, originatingOpentip) {
  var opentip, _i, _len, _ref, _results;
  _ref = Opentip.tips;
  _results = [];
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    opentip = _ref[_i];
    if (opentip !== originatingOpentip && opentip.options.group === group) {
      _results.push(opentip.hide());
    } else {
      _results.push(void 0);
    }
  }
  return _results;
};

Opentip.adapters = {};

Opentip.adapter = null;

firstAdapter = true;

Opentip.addAdapter = function (adapter) {
  Opentip.adapters[adapter.name] = adapter;
  if (firstAdapter) {
    Opentip.adapter = adapter;
    adapter.domReady(Opentip.findElements);
    adapter.domReady(Opentip.followMousePosition);
    return firstAdapter = false;
  }
};

Opentip.positions = ["top", "topRight", "right", "bottomRight", "bottom", "bottomLeft", "left", "topLeft"];

Opentip.position = {};

_ref = Opentip.positions;
for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
  position = _ref[i];
  Opentip.position[position] = i;
}

Opentip.styles = {
  standard: {
    "extends": null,
    title: void 0,
    escapeTitle: true,
    escapeContent: false,
    className: "standard",
    stem: true,
    delay: null,
    hideDelay: 0.1,
    fixed: false,
    showOn: "mouseover",
    hideTrigger: "trigger",
    hideTriggers: [],
    hideOn: null,
    removeElementsOnHide: false,
    offset: [0, 0],
    containInViewport: true,
    autoOffset: true,
    showEffect: "appear",
    hideEffect: "fade",
    showEffectDuration: 0.3,
    hideEffectDuration: 0.2,
    stemLength: 5,
    stemBase: 8,
    tipJoint: "top left",
    target: null,
    targetJoint: null,
    cache: true,
    ajax: false,
    ajaxMethod: "GET",
    ajaxErrorMessage: "There was a problem downloading the content.",
    group: null,
    style: null,
    background: "#fff18f",
    backgroundGradientHorizontal: false,
    closeButtonOffset: [5, 5],
    closeButtonRadius: 7,
    closeButtonCrossSize: 4,
    closeButtonCrossColor: "#d2c35b",
    closeButtonCrossLineWidth: 1.5,
    closeButtonLinkOverscan: 6,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#f2e37b",
    shadow: true,
    shadowBlur: 10,
    shadowOffset: [3, 3],
    shadowColor: "rgba(0, 0, 0, 0.1)"
  },
  glass: {
    "extends": "standard",
    className: "glass",
    background: [[0, "rgba(252, 252, 252, 0.8)"], [0.5, "rgba(255, 255, 255, 0.8)"], [0.5, "rgba(250, 250, 250, 0.9)"], [1, "rgba(245, 245, 245, 0.9)"]],
    borderColor: "#eee",
    closeButtonCrossColor: "rgba(0, 0, 0, 0.2)",
    borderRadius: 15,
    closeButtonRadius: 10,
    closeButtonOffset: [8, 8]
  },
  dark: {
    "extends": "standard",
    className: "dark",
    borderRadius: 13,
    borderColor: "#444",
    closeButtonCrossColor: "rgba(240, 240, 240, 1)",
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: [2, 2],
    background: [[0, "rgba(30, 30, 30, 0.7)"], [0.5, "rgba(30, 30, 30, 0.8)"], [0.5, "rgba(10, 10, 10, 0.8)"], [1, "rgba(10, 10, 10, 0.9)"]]
  },
  alert: {
    "extends": "standard",
    className: "alert",
    borderRadius: 1,
    borderColor: "#AE0D11",
    closeButtonCrossColor: "rgba(255, 255, 255, 1)",
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: [2, 2],
    background: [[0, "rgba(203, 15, 19, 0.7)"], [0.5, "rgba(203, 15, 19, 0.8)"], [0.5, "rgba(189, 14, 18, 0.8)"], [1, "rgba(179, 14, 17, 0.9)"]]
  }
};

Opentip.defaultStyle = "standard";

if (typeof module !== "undefined" && module !== null) {
  module.exports = Opentip;
} else {
  window.Opentip = Opentip;
}

// Generated by CoffeeScript 1.4.0
var __slice = [].slice;

(function ($) {
  var Adapter;
  $.fn.opentip = function (content, title, options) {
    return new Opentip(this, content, title, options);
  };
  Adapter = function () {

    function Adapter() {}

    Adapter.prototype.name = "jquery";

    Adapter.prototype.domReady = function (callback) {
      return $(callback);
    };

    Adapter.prototype.create = function (html) {
      return $(html);
    };

    Adapter.prototype.wrap = function (element) {
      element = $(element);
      if (element.length > 1) {
        throw new Error("Multiple elements provided.");
      }
      return element;
    };

    Adapter.prototype.unwrap = function (element) {
      return $(element)[0];
    };

    Adapter.prototype.tagName = function (element) {
      return this.unwrap(element).tagName;
    };

    Adapter.prototype.attr = function () {
      var args, element, _ref;
      element = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      return (_ref = $(element)).attr.apply(_ref, args);
    };

    Adapter.prototype.data = function () {
      var args, element, _ref;
      element = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      return (_ref = $(element)).data.apply(_ref, args);
    };

    Adapter.prototype.find = function (element, selector) {
      return $(element).find(selector).get(0);
    };

    Adapter.prototype.findAll = function (element, selector) {
      return $(element).find(selector);
    };

    Adapter.prototype.update = function (element, content, escape) {
      element = $(element);
      if (escape) {
        return element.text(content);
      } else {
        return element.html(content);
      }
    };

    Adapter.prototype.append = function (element, child) {
      return $(element).append(child);
    };

    Adapter.prototype.remove = function (element) {
      return $(element).remove();
    };

    Adapter.prototype.addClass = function (element, className) {
      return $(element).addClass(className);
    };

    Adapter.prototype.removeClass = function (element, className) {
      return $(element).removeClass(className);
    };

    Adapter.prototype.css = function (element, properties) {
      return $(element).css(properties);
    };

    Adapter.prototype.dimensions = function (element) {
      return {
        width: $(element).outerWidth(),
        height: $(element).outerHeight()
      };
    };

    Adapter.prototype.scrollOffset = function () {
      return [window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft, window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop];
    };

    Adapter.prototype.viewportDimensions = function () {
      return {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      };
    };

    Adapter.prototype.mousePosition = function (e) {
      if (e == null) {
        return null;
      }
      return {
        x: e.pageX,
        y: e.pageY
      };
    };

    Adapter.prototype.offset = function (element) {
      var offset;
      offset = $(element).offset();
      return {
        left: offset.left,
        top: offset.top
      };
    };

    Adapter.prototype.observe = function (element, eventName, observer) {
      return $(element).bind(eventName, observer);
    };

    Adapter.prototype.stopObserving = function (element, eventName, observer) {
      return $(element).unbind(eventName, observer);
    };

    Adapter.prototype.ajax = function (options) {
      var _ref, _ref1;
      if (options.url == null) {
        throw new Error("No url provided");
      }
      return $.ajax({
        url: options.url,
        type: (_ref = (_ref1 = options.method) != null ? _ref1.toUpperCase() : void 0) != null ? _ref : "GET"
      }).done(function (content) {
        return typeof options.onSuccess === "function" ? options.onSuccess(content) : void 0;
      }).fail(function (request) {
        return typeof options.onError === "function" ? options.onError("Server responded with status " + request.status) : void 0;
      }).always(function () {
        return typeof options.onComplete === "function" ? options.onComplete() : void 0;
      });
    };

    Adapter.prototype.clone = function (object) {
      return $.extend({}, object);
    };

    Adapter.prototype.extend = function () {
      var sources, target;
      target = arguments[0], sources = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      return $.extend.apply($, [target].concat(__slice.call(sources)));
    };

    return Adapter;
  }();
  return Opentip.addAdapter(new Adapter());
})(_jquery2.default);

exports.default = Opentip;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)(module)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	REST: 'rest',
	LANGUAGELIST: 'rest/lang/list',
	GETLOCALE: 'rest/lang/get',
	CONFIG: 'rest/config/extension',
	REGISTER: 'rest/user/register2',
	FORGOTPASS: 'rest/user/forgotpassword',
	TICKET: 'rest/misc/ticket',
	PRODUCTS: 'rest/info/products',
	PROFILE: 'rest/user/profile',
	AUTOPROXY: 'rest/misc/autoproxy',
	FEEDBACK: 'rest/misc/feedback',
	NOTIFICATION: 'rest/user/profile/notification',
	PING: 'rest/ping',
	SUPPORT: 'support/',
	TICKETTOKEN: 'rest/misc/persist',
	DISCONNECTS: 'rest/misc/disconnects'
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Utils = __webpack_require__(3);

var _Utils2 = _interopRequireDefault(_Utils);

var _ServiceMeta = __webpack_require__(2);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sticked = function () {
	function Sticked() {
		_classCallCheck(this, Sticked);
	}

	_createClass(Sticked, [{
		key: 'pin',
		value: function pin(countryElId, sectionId) {
			var _this = this;
			return new Promise(function (resolve, reject) {
				chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.STICKEDCOUNTRIES, _ServiceMeta2.default.STORAGEKEYS.CONFIGDATA], function (storage) {

					if (!_Utils2.default.isUserPremium(storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA])) return reject();

					var stickedCountries = storage[_ServiceMeta2.default.STORAGEKEYS.STICKEDCOUNTRIES];
					var uid = storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA] ? storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA].uid : "";

					var sortedStickedCountries = _this.createPinObj(stickedCountries, countryElId, sectionId, uid);

					chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.STICKEDCOUNTRIES, sortedStickedCountries), function () {
						resolve();
					});
				});
			});
		}
	}, {
		key: 'unpin',
		value: function unpin(countryElId, sectionId) {

			var _this = this;

			return new Promise(function (resolve, reject) {

				chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.STICKEDCOUNTRIES, _ServiceMeta2.default.STORAGEKEYS.CONFIGDATA], function (storage) {

					var stickedCountries = storage[_ServiceMeta2.default.STORAGEKEYS.STICKEDCOUNTRIES];
					var uid = storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA] ? storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA].uid : "";

					if (stickedCountries && stickedCountries[uid] && stickedCountries[uid][sectionId]) {
						var index = stickedCountries[uid][sectionId].indexOf(countryElId);

						if (index > -1) {

							stickedCountries[uid][sectionId].splice(index, 1);

							chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.STICKEDCOUNTRIES, stickedCountries), resolve);
							return;
						}
					}

					resolve();
				});
			});
		}
	}, {
		key: 'getPinnedState',
		value: function getPinnedState(countryElId, sectionId) {
			var _this = this;

			return new Promise(function (resolve, reject) {

				chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.STICKEDCOUNTRIES, _ServiceMeta2.default.STORAGEKEYS.CONFIGDATA], function (storage) {

					var uid = storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA] ? storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA].uid : "";
					var stickedCountries = storage[_ServiceMeta2.default.STORAGEKEYS.STICKEDCOUNTRIES];

					var countryIsPinned = stickedCountries && stickedCountries[uid] && stickedCountries[uid][sectionId] && stickedCountries[uid][sectionId].indexOf(countryElId) > -1;

					if (countryIsPinned) return resolve(true);

					return resolve(false);
				});
			});
		}
	}, {
		key: 'createPinObj',
		value: function createPinObj(stickedCountries, movedCountryId, movedCountrySection, uid) {

			if (!stickedCountries) stickedCountries = {};

			if (!stickedCountries.hasOwnProperty(uid)) {
				stickedCountries[uid] = {
					0: [],
					1: [],
					2: []
				};

				stickedCountries[uid][movedCountrySection].push(movedCountryId);

				return stickedCountries;
			}

			var index = stickedCountries[uid][movedCountrySection].indexOf(movedCountryId);

			if (index > -1) stickedCountries[uid][movedCountrySection].slice(index, 1);

			stickedCountries[uid][movedCountrySection].push(movedCountryId);

			return stickedCountries;
		}
	}]);

	return Sticked;
}();

exports.default = new Sticked();

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _folders = __webpack_require__(1);

var _folders2 = _interopRequireDefault(_folders);

var _BackgroundRequester = __webpack_require__(4);

var _BackgroundRequester2 = _interopRequireDefault(_BackgroundRequester);

var _Sanitize = __webpack_require__(6);

var _Sanitize2 = _interopRequireDefault(_Sanitize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TicketTabCreaterView = function () {
	function TicketTabCreaterView() {
		_classCallCheck(this, TicketTabCreaterView);

		this.template = _folders2.default.VIEWS + '/tickettabcreater.html';
	}

	_createClass(TicketTabCreaterView, [{
		key: 'initView',
		value: function initView() {

			var _this = this;

			_this.App = (0, _jquery2.default)('#app');
			_this.App.html("");

			_jquery2.default.get(_this.template, function (template) {

				_this.App.append(template);
				_this.selectElements();
				_this.openTicketTab();
			}, "html");
		}
	}, {
		key: 'selectElements',
		value: function selectElements() {
			var _this = this;

			_this.resultTxt = (0, _jquery2.default)('#result-txt');
			_this.cancelButton = (0, _jquery2.default)('#cancel-support');
		}
	}, {
		key: 'setEvents',
		value: function setEvents() {
			var _this = this;

			_this.cancelButton.click(_this.onCancelButtonClicked.bind(_this));
		}
	}, {
		key: 'openTicketTab',
		value: function openTicketTab() {
			var _this = this;

			_BackgroundRequester2.default.request('TicketTab', 'openNewTicketTab', {}).then(function (response) {

				_this.resultTxt.html("");

				if (response && response.Retcode == 200) return window.close();

				if (response && response.Message) {
					for (var i = 0; i < response.Message.length; i++) {
						var error = (0, _jquery2.default)('<p>' + _Sanitize2.default.escpateData(response.Message[i]) + '</p>');
						_this.resultTxt.append(error);
					};
					return;
				}

				_this.resultTxt.html("Unknown error happened. Please try later again.");
			});
		}
	}, {
		key: 'onCancelButtonClicked',
		value: function onCancelButtonClicked() {
			var _this = this;

			_BackgroundRequester2.default.request('TicketTab', 'cancelSupportRequest', {}).then(function (response) {

				location.reload();
			});
		}
	}]);

	return TicketTabCreaterView;
}();

exports.default = new TicketTabCreaterView();

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _Main = __webpack_require__(18);

var _Main2 = _interopRequireDefault(_Main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery2.default)(document).ready(_Main2.default.init());

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _LanguageView = __webpack_require__(9);

var _LanguageView2 = _interopRequireDefault(_LanguageView);

var _BaseSearchView = __webpack_require__(21);

var _BaseSearchView2 = _interopRequireDefault(_BaseSearchView);

var _LoginView = __webpack_require__(7);

var _LoginView2 = _interopRequireDefault(_LoginView);

var _DashboardView = __webpack_require__(8);

var _DashboardView2 = _interopRequireDefault(_DashboardView);

var _ServiceMeta = __webpack_require__(2);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _Utils = __webpack_require__(3);

var _Utils2 = _interopRequireDefault(_Utils);

var _BackgroundRequester = __webpack_require__(4);

var _BackgroundRequester2 = _interopRequireDefault(_BackgroundRequester);

var _folders = __webpack_require__(1);

var _folders2 = _interopRequireDefault(_folders);

var _ProxySearchView = __webpack_require__(12);

var _ProxySearchView2 = _interopRequireDefault(_ProxySearchView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Main = function () {
	function Main() {
		_classCallCheck(this, Main);

		this.header = _folders2.default.VIEWS + '/header.html';
	}

	_createClass(Main, [{
		key: 'init',
		value: function init() {
			var _this = this;

			this.App = (0, _jquery2.default)('#app');
			this.App.html("");

			/*
   		$.get(_this.header, function(header){
   			_this.App.append(header);
   			_this.App.append(ClientMeta.LOADINGIMG);
   */
			chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.LANGUAGE, _ServiceMeta2.default.STORAGEKEYS.BASELINK, _ServiceMeta2.default.STORAGEKEYS.USERDATA, _ServiceMeta2.default.STORAGEKEYS.CONFIGDATA, _ServiceMeta2.default.STORAGEKEYS.CONFIGDATATTL, _ServiceMeta2.default.STORAGEKEYS.PROXYSEARCHLOCK], function (storage) {

				chrome.storage.onChanged.addListener(_this.onSettingsChanged.bind(_this));

				if (!storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK]) return _BaseSearchView2.default.initView();

				if (!storage[_ServiceMeta2.default.STORAGEKEYS.LANGUAGE]) return _LanguageView2.default.initView();

				if (storage[_ServiceMeta2.default.STORAGEKEYS.USERDATA]) return _this.userIsLoggedIn(storage);

				_LoginView2.default.initView();
			});
			/*
   		}, "html");
   */
		}
	}, {
		key: 'onSettingsChanged',
		value: function onSettingsChanged(changes, namespace) {
			var _this = this;
			var changedItems = Object.keys(changes);

			if (changedItems.indexOf(_ServiceMeta2.default.STORAGEKEYS.BASELINK) === -1) return;

			var isBaselinkDeleted = changes[_ServiceMeta2.default.STORAGEKEYS.BASELINK].newValue === undefined ? true : false;

			if (isBaselinkDeleted) _BaseSearchView2.default.initView();
		}

		/* Actions */

	}, {
		key: 'userIsLoggedIn',
		value: function userIsLoggedIn(storage) {
			var _this = this;

			if (!storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA] || storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATATTL] < _Utils2.default.getDateNow()) return _this.getFreshConfig(storage);

			if (storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA].status == _ServiceMeta2.default.STATUS.BLOCKED) return _this.getFreshConfig(storage);

			if (storage[_ServiceMeta2.default.STORAGEKEYS.PROXYSEARCHLOCK]) return _ProxySearchView2.default.initView();

			_DashboardView2.default.initView();
		}
	}, {
		key: 'getFreshConfig',
		value: function getFreshConfig(storage) {
			var _this = this;

			var loginData = {
				hitReason: "refreshList",
				userData: storage[_ServiceMeta2.default.STORAGEKEYS.USERDATA]
			};

			_jquery2.default.get(_this.header, function (header) {
				_this.App.append(header);
				_this.setHeaderElements();
				_this.App.append('<div class="loadingimg"><img src="images/loading.gif"></div>');

				_BackgroundRequester2.default.request('api', 'login', loginData).then(function (response) {

					if (response && response.errorcode == 0) {

						_DashboardView2.default.initView();
					} else {

						_BackgroundRequester2.default.request('ProxySetting', 'clearSettings', {});

						var error = "An unknown error has occurred. Please contact support.";

						if (response && response.hasOwnProperty("error_msg")) {
							chrome.storage.local.remove(_ServiceMeta2.default.STORAGEKEYS.USERDATA, function () {
								_LoginView2.default.initView(response.error_msg);
							});
						}
					}
				});
			}, "html");
		}
	}, {
		key: 'setHeaderElements',
		value: function setHeaderElements() {
			var _this = this;
			_this.headerLogo = (0, _jquery2.default)('#header-logo');
			_this.headerLogo.attr('src', _ServiceMeta2.default.IMAGES.HEADERLOGO);
		}
	}]);

	return Main;
}();

exports.default = new Main();

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	CONNECTIONERROR: "net::ERR_PROXY_CONNECTION_FAILED",
	VERIFYERROR: "net::ERR_NAME_NOT_RESOLVED"
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	name: 'Chrome',
	WebRTCAddon: {
		id: 'bppamachkoflopbagkdoflbgfjflfnfl',
		url: 'https://chrome.google.com/webstore/detail/webrtc-leak-shield/bppamachkoflopbagkdoflbgfjflfnfl'
	},
	proxyAddons: ["oofgbpoabipfcfjapgnbbjjaenockbdp", "nbcojefnccbanplpoffopkoepjmhgdgh"]
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _folders = __webpack_require__(1);

var _folders2 = _interopRequireDefault(_folders);

var _BackgroundRequester = __webpack_require__(4);

var _BackgroundRequester2 = _interopRequireDefault(_BackgroundRequester);

var _ServiceMeta = __webpack_require__(2);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _Utils = __webpack_require__(3);

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseSearchView = function () {
	function BaseSearchView() {
		_classCallCheck(this, BaseSearchView);

		this.template = _folders2.default.VIEWS + '/basesearch.html';
		this.header = _folders2.default.VIEWS + '/header.html';
	}

	_createClass(BaseSearchView, [{
		key: 'initView',
		value: function initView() {
			var _this = this;

			this.App = (0, _jquery2.default)('#app');
			this.App.html("");

			_this.loadStorageData().then(function (storage) {

				_jquery2.default.get(_this.header, function (header) {
					_this.App.append(header);
					_jquery2.default.get(_this.template, function (template) {
						_this.App.append(template);

						_this.selectElements();
						_this.setSearchPort();

						_BackgroundRequester2.default.request('baseFinder', 'init', {}, function () {});
					}, "html");
				}, "html");
			});

			/*
   
   $.get(_this.header, function(header){
   	_this.App.append(header);
   	$.get(_this.template, function(template){
   		_this.App.append(template);
   		_this.selectElements();
   		_this.setSearchPort();
   	}, "html");
   }, "html");	
   */
		}
	}, {
		key: 'setBaselinkNotFound',
		value: function setBaselinkNotFound() {
			var _this = this;

			_this.searchView.css('display', 'none');
			_this.searchFailedView.css('display', 'block');
		}
	}, {
		key: 'unsetBaselinkNotFound',
		value: function unsetBaselinkNotFound() {
			var _this = this;

			_this.searchView.css('display', 'block');
			_this.searchFailedView.css('display', 'none');
		}
	}, {
		key: 'loadStorageData',
		value: function loadStorageData() {
			return new Promise(function (resolve, reject) {

				chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.BASELINKNOTFOUND], function (storage) {

					resolve(storage);
				});
			});
		}
	}, {
		key: 'selectElements',
		value: function selectElements() {
			var _this = this;

			_this.headerLogo = (0, _jquery2.default)('#header-logo');
			_this.searchServiceName = (0, _jquery2.default)('#search-service-name');

			_this.progressText = (0, _jquery2.default)('#basesearch-progress');
			_this.cancelButton = (0, _jquery2.default)('#basesearch-cancel-btn');

			_this.searchView = (0, _jquery2.default)('#search-view');
			_this.searchFailedView = (0, _jquery2.default)('#search-failed-view');

			_this.tryAgainButton = (0, _jquery2.default)('#try-again-button');
			_this.contactSupportButton = (0, _jquery2.default)('#contact-support-button');

			_this.setServiceElements();
			_this.setEvents();
		}
	}, {
		key: 'setServiceElements',
		value: function setServiceElements() {
			var _this = this;
			_this.headerLogo.attr('src', _ServiceMeta2.default.IMAGES.HEADERLOGO);
			_this.searchServiceName.text(_ServiceMeta2.default.SERVICE);
		}
	}, {
		key: 'setEvents',
		value: function setEvents() {
			var _this = this;
			_this.cancelButton.click(_this.onCancelButton.bind(this));
			_this.tryAgainButton.click(_this.onTryAgainButtonClicked.bind(this));
			_this.contactSupportButton.click(_this.onContactSupportButtonClicked.bind(this));
		}
	}, {
		key: 'setSearchPort',
		value: function setSearchPort() {
			this.searchPort = chrome.runtime.connect({ name: "basesearch-port" });
			this.searchPort.onMessage.addListener(this.onSearchUpdate.bind(this));
		}
	}, {
		key: 'onSearchUpdate',
		value: function onSearchUpdate(update) {
			var _this = this;

			switch (update.action) {
				case "progress":
					_this.onUpdateReceived(update.data);
					break;
				case "failed":
					_this.onSearchFailed(update.data);
					break;
				case "success":
					_this.onSearchSuccess(update.data);
					break;
			}

			/*
   if(update && update.progress)
   _this.progressText.text(update.progress);
   */
		}
	}, {
		key: 'onSearchSuccess',
		value: function onSearchSuccess() {
			var _this = this;

			location.reload();
		}
	}, {
		key: 'onUpdateReceived',
		value: function onUpdateReceived(update) {
			var _this = this;

			_this.unsetBaselinkNotFound();
			_this.progressText.text(update);
		}
	}, {
		key: 'onSearchFailed',
		value: function onSearchFailed(data) {
			var _this = this;

			_this.setBaselinkNotFound();
		}
	}, {
		key: 'onCancelButton',
		value: function onCancelButton() {
			_BackgroundRequester2.default.request('baseFinder', 'abortAll', {}, function () {});
		}
	}, {
		key: 'onTryAgainButtonClicked',
		value: function onTryAgainButtonClicked() {
			var _this = this;

			chrome.storage.local.remove(_ServiceMeta2.default.STORAGEKEYS.BASELINKNOTFOUND, function () {
				_this.unsetBaselinkNotFound();
				_BackgroundRequester2.default.request('baseFinder', 'init', {}, function () {});
			});
		}
	}, {
		key: 'onContactSupportButtonClicked',
		value: function onContactSupportButtonClicked() {
			var _this = this;

			_Utils2.default.openNewTab(_ServiceMeta2.default.CONTACTSUPPORTURL);
		}
	}]);

	return BaseSearchView;
}();

exports.default = new BaseSearchView();

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tabs = function () {
	function Tabs(el, options) {
		_classCallCheck(this, Tabs);

		this.options = { start: 0 };
		this.el = el;
		this.options = this.extend({}, this.options);
		this.extend(this.options, options);
		this._init();
	}

	_createClass(Tabs, [{
		key: 'extend',
		value: function extend(a, b) {
			for (var key in b) {
				if (b.hasOwnProperty(key)) {
					a[key] = b[key];
				}
			}
			return a;
		}
	}, {
		key: 'addOnChangedListener',
		value: function addOnChangedListener(func) {
			this.onChangedFunc = func;
		}
	}, {
		key: '_init',
		value: function _init() {
			// tabs elems
			this.tabs = [].slice.call(this.el.querySelectorAll('nav > ul > li'));
			// content items
			this.items = [].slice.call(this.el.querySelectorAll('.tabs__content-wrap > section'));
			// current index
			this.current = -1;
			// show current content item
			this._show();
			// init events
			this._initEvents();
		}
	}, {
		key: '_initEvents',
		value: function _initEvents() {
			var self = this;
			this.tabs.forEach(function (tab, idx) {
				tab.addEventListener('click', function (ev) {
					ev.preventDefault();
					self._show(idx);

					if (self.onChangedFunc) self.onChangedFunc(idx);
				});
			});
		}
	}, {
		key: '_show',
		value: function _show(idx) {
			if (this.current >= 0) {
				this.tabs[this.current].className = this.items[this.current].className = '';
			}
			// change current
			this.current = idx != undefined ? idx : this.options.start >= 0 && this.options.start < this.items.length ? this.options.start : 0;
			this.tabs[this.current].className = 'tab-current';
			this.items[this.current].className = 'content-current';
		}
	}]);

	return Tabs;
}();

exports.default = Tabs;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ServerList = function () {
    function ServerList() {
        _classCallCheck(this, ServerList);
    }

    _createClass(ServerList, [{
        key: "sortByCountry",
        value: function sortByCountry(serverList) {
            var listByCountry = {
                serverList: {},
                stats: {}
            };

            for (var serverKey in serverList) {
                if (serverList.hasOwnProperty(serverKey)) {
                    var server = serverList[serverKey];
                    var country = server.CountryCode;

                    if (!listByCountry.serverList.hasOwnProperty(country)) listByCountry.serverList[country] = [];
                    listByCountry.serverList[country].push(server);

                    if (!listByCountry.stats.hasOwnProperty(country)) {
                        listByCountry.stats[country] = {};
                        listByCountry.stats[country].sum = 0;
                        listByCountry.stats[country].count = 0;
                    }

                    listByCountry.stats[country].count += 1;
                    listByCountry.stats[country].sum += server.Pos === 0 ? 1 : server.Pos;
                }
            }

            for (var key in listByCountry.serverList) {
                //console.log(key);
                if (listByCountry.serverList.hasOwnProperty(key)) {
                    //console.log(listByCountry.serverList[key]);
                    for (var i = 0; i < listByCountry.serverList[key].length; i++) {
                        var pos = listByCountry.serverList[key][i].Pos === 0 ? 1 : listByCountry.serverList[key][i].Pos;
                        listByCountry.serverList[key][i].TotalPos = listByCountry.stats[key].sum / pos;

                        if (listByCountry.stats.hasOwnProperty(key)) {
                            if (!listByCountry.stats[key].hasOwnProperty("TotalPosSum")) listByCountry.stats[key].TotalPosSum = 0;
                            listByCountry.stats[key].TotalPosSum += listByCountry.serverList[key][i].TotalPos;
                        }
                    }
                }
            }

            for (var key in listByCountry.serverList) {
                if (listByCountry.serverList.hasOwnProperty(key)) {
                    for (var i = 0; i < listByCountry.serverList[key].length; i++) {
                        listByCountry.serverList[key][i].Prozent = listByCountry.serverList[key][i].TotalPos / listByCountry.stats[key].TotalPosSum * 100;
                    }
                }
            }

            for (var key in listByCountry.serverList) {
                if (listByCountry.serverList.hasOwnProperty(key)) {

                    var max = 100;
                    var sum = 0;
                    for (var i = 0; i < listByCountry.serverList[key].length; i++) {
                        listByCountry.serverList[key][i].rangeMin = sum;
                        sum += listByCountry.serverList[key][i].Prozent;
                        listByCountry.serverList[key][i].rangeMax = sum;
                    }
                }
            }

            return listByCountry.serverList;
        }
    }, {
        key: "sortByLoad",
        value: function sortByLoad(serverList, isPublic) {

            var server_sorted = [];
            for (var server in serverList) {
                if (serverList.hasOwnProperty(server)) {
                    var serverItemObject = serverList[server];
                    serverItemObject.Identifier = server;
                    server_sorted.push([serverItemObject, serverList[server].Pos]);
                }
            }
            server_sorted.sort(function (a, b) {
                return a[1] - b[1];
            });

            var serverListData = {};
            for (var i = 0; i < server_sorted.length; i++) {
                serverListData[server_sorted[i][0].Identifier] = server_sorted[i][0];
            }

            if (!isPublic) return this.sortByCountry(serverListData);

            var serverData = {
                isPublic: true,
                serverListData: serverListData
            };

            return serverData;
        }
    }, {
        key: "generateSearchData",
        value: function generateSearchData(randomServer, serverList) {

            for (var i = 0; i < serverList.length; i++) {
                if (randomServer.hasOwnProperty('Host')) {
                    if (serverList[i].Host === randomServer.Host) {
                        serverList.splice(i, 1);
                    }
                }
            }

            var randomServerArray = [];
            randomServerArray.push(randomServer);

            var searchData = {
                randomSelectedServer: randomServerArray,
                serverList: serverList
            };

            return searchData;
        }
    }, {
        key: "getServerByLoad",
        value: function getServerByLoad(servers, key) {
            var random = Math.floor(Math.random() * 99) + 1;

            if (servers && servers.hasOwnProperty(key)) {
                for (var i = 0; i < servers[key].length; i++) {
                    if (servers[key][i].rangeMin < random && random < servers[key][i].rangeMax) {

                        return servers[key][i];
                    }
                }
            }
            return servers[key][0];
        }
    }]);

    return ServerList;
}();

exports.default = new ServerList();

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _folders = __webpack_require__(1);

var _folders2 = _interopRequireDefault(_folders);

var _ServiceMeta = __webpack_require__(2);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _Utils = __webpack_require__(3);

var _Utils2 = _interopRequireDefault(_Utils);

var _LanguageView = __webpack_require__(9);

var _LanguageView2 = _interopRequireDefault(_LanguageView);

var _DashboardView = __webpack_require__(8);

var _DashboardView2 = _interopRequireDefault(_DashboardView);

var _BackgroundRequester = __webpack_require__(4);

var _BackgroundRequester2 = _interopRequireDefault(_BackgroundRequester);

var _Sanitize = __webpack_require__(6);

var _Sanitize2 = _interopRequireDefault(_Sanitize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserProfileView = function () {
	function UserProfileView() {
		_classCallCheck(this, UserProfileView);

		this.template = _folders2.default.VIEWS + '/userprofile.html';
		this.header = _folders2.default.VIEWS + '/header.html';
	}

	_createClass(UserProfileView, [{
		key: 'initView',
		value: function initView() {
			var _this = this;

			_Utils2.default.getLocaleInStorage().then(_this.loadTemplate.bind(this), _this.loadLocaleFromServer.bind(this));
		}
	}, {
		key: 'loadTemplate',
		value: function loadTemplate(locale) {
			var _this = this;

			this.App = (0, _jquery2.default)('#app');
			this.App.html("");

			_jquery2.default.get(_this.header, function (header) {
				_this.App.append(header);
				_jquery2.default.get(_this.template, function (template) {

					_this.loadStorageData().then(function (storage) {
						_this.Storage = storage;

						var loadedTemplate = _Utils2.default.loadTemplate(template, locale);
						_this.App.append(loadedTemplate);

						_this.selectElements(locale);
						_this.setHeaderBackButton();

						_this.setPlaceholder(storage);

						_this.setNotificationState(storage);

						_this.setInAppNotificationState();

						// Setting all events for selected elements
						_this.setEvents();
					});
				}, "html");
			}, "html");
		}
	}, {
		key: 'selectElements',
		value: function selectElements(locale) {
			var _this = this;

			_this.headerLogo = (0, _jquery2.default)('#header-logo');
			_this.headerVersion = (0, _jquery2.default)('#header-version');

			_this.firstnameField = (0, _jquery2.default)('#user-profile-firstname');
			_this.lastnameField = (0, _jquery2.default)('#user-profile-lastname');
			_this.passwordField = (0, _jquery2.default)('#user-profile-password');
			_this.passwordConfirmField = (0, _jquery2.default)('#user-profile-password-confirm');

			_this.changeLanguageButton = (0, _jquery2.default)('#change-language-button');
			_this.changeProfileButton = (0, _jquery2.default)('#change-profile-button');

			_this.changeSuccessMessage = (0, _jquery2.default)('#change-success-message');
			_this.changeBackButton = (0, _jquery2.default)('#user-profile-back-button');

			_this.userProfileSuccessView = (0, _jquery2.default)('#user-profile-success');
			_this.userProfileFormView = (0, _jquery2.default)('#user-profile-form');

			_this.errorMessage = (0, _jquery2.default)('#error_message');

			/* Notification */
			_this.notificationCheckbox = (0, _jquery2.default)('#notification');
			_this.notificationLabel = (0, _jquery2.default)('#notification-label');
			_this.notificationNormalState = (0, _jquery2.default)('#notification-normal-state');
			_this.notificationLoadingState = (0, _jquery2.default)('#notification-loading-state');
			_this.notificationVerifyStep = (0, _jquery2.default)('#notification-verify-step');
			_this.notificationDisableYesButton = (0, _jquery2.default)('#notification-disable-yes-button');
			_this.notificationDisableNoButton = (0, _jquery2.default)('#notification-disable-no-button');
			/* ----------- */

			/* In-App Notification */
			_this.inAppNotificationContainer = (0, _jquery2.default)('#notification-inapp-container');
			_this.inAppNotificationCheckbox = (0, _jquery2.default)('#notification-inapp-checkbox');

			_this.setServiceElements(locale);
		}
	}, {
		key: 'setServiceElements',
		value: function setServiceElements(locale) {
			var _this = this;
			_this.headerLogo.attr('src', _ServiceMeta2.default.IMAGES.HEADERLOGO);
			_this.headerVersion.text('v. ' + _ServiceMeta2.default.VERSION);

			//Linux/Ubuntu password field focus bug fix
			chrome.runtime.getPlatformInfo(function (platformInfo) {
				if (platformInfo && platformInfo.os && platformInfo.os === 'linux' && _ServiceMeta2.default.PLATFORM.toLowerCase() === 'firefox') {
					_this.passwordField.attr('type', 'text');
					_this.passwordField.focus(function () {
						_this.passwordField.css('font-family', 'dotfont');
						_this.passwordField.css('font-size', '8px');
						if (_this.passwordField.val() === '') {
							_this.passwordField.attr('placeholder', '');
						}
					});
					_this.passwordField.focusout(function () {
						if (_this.passwordField.val() === '') {
							_this.passwordField.css('font-family', '');
							_this.passwordField.css('font-size', '');
							_this.passwordField.attr('placeholder', locale.EditProfileNewPass);
						}
					});

					_this.passwordConfirmField.attr('type', 'text');
					_this.passwordConfirmField.focus(function () {
						_this.passwordConfirmField.css('font-family', 'dotfont');
						_this.passwordConfirmField.css('font-size', '8px');
						if (_this.passwordConfirmField.val() === '') {
							_this.passwordConfirmField.attr('placeholder', '');
						}
					});
					_this.passwordConfirmField.focusout(function () {
						if (_this.passwordConfirmField.val() === '') {
							_this.passwordConfirmField.css('font-family', '');
							_this.passwordConfirmField.css('font-size', '');
							_this.passwordConfirmField.attr('placeholder', locale.EditProfileNewPass);
						}
					});
				}
			});
		}
	}, {
		key: 'setEvents',
		value: function setEvents() {
			var _this = this;
		}
	}, {
		key: 'setHeaderBackButton',
		value: function setHeaderBackButton() {
			var _this = this;
			_this.headerBackButton = (0, _jquery2.default)('#header-back-button');
			_this.headerBackButton.css('display', 'block');
			_this.headerBackButton.click(_this.onBackButtonClicked.bind(this));
		}
	}, {
		key: 'setPlaceholder',
		value: function setPlaceholder(storage) {
			var _this = this;

			_this.firstnameField.attr('value', storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA].firstname);
			_this.lastnameField.attr('value', storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA].lastname);

			_this.changeLanguageButton.click(_this.onChangeLanguageClicked.bind(this));
			_this.changeProfileButton.click(_this.onChangeProfileClicked.bind(this));

			_this.changeBackButton.click(_this.onBackButtonClicked.bind(this));

			/* Notification */
			_this.notificationCheckbox.click(_this.onNotificationSwitchChanged.bind(this));

			/* In-App Notification */
			_this.inAppNotificationCheckbox.click(_this.onInAppNotificationSwitchChanged.bind(this));
		}
	}, {
		key: 'setNotificationState',
		value: function setNotificationState(storage) {
			var _this = this;

			var config = storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA];

			if (config && config.notificationstate.toLowerCase() == 'y') return _this.notificationCheckbox.prop('checked', true);

			_this.notificationCheckbox.prop('checked', false);
		}
	}, {
		key: 'setInAppNotificationState',
		value: function setInAppNotificationState() {
			var _this = this;

			chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.ISINAPPNOTIFICATIONOFF, _ServiceMeta2.default.STORAGEKEYS.CONFIGDATA], function (storage) {
				var configData = storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA];
				var uid = configData && configData.uid ? configData.uid : "";

				var inAppNoti = storage[_ServiceMeta2.default.STORAGEKEYS.ISINAPPNOTIFICATIONOFF];

				var condition = inAppNoti && inAppNoti[uid] === false ? true : false;

				if (condition) {
					return _this.inAppNotificationCheckbox.prop('checked', false);
				}

				_this.inAppNotificationCheckbox.prop('checked', true);
			});
		}
	}, {
		key: 'loadStorageData',
		value: function loadStorageData() {
			return new Promise(function (resolve, reject) {

				chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.USERDATA, _ServiceMeta2.default.STORAGEKEYS.CONFIGDATA, _ServiceMeta2.default.STORAGEKEYS.LOCALE], function (storage) {

					resolve(storage);
				});
			});
		}
	}, {
		key: 'loadLocaleFromServer',
		value: function loadLocaleFromServer() {

			_BackgroundRequester2.default.request("api", "getLocale", {}).then(function (resp) {
				if (resp != undefined && resp != "" && resp.Retcode === 200) {

					chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.LOCALE, resp.locale), function () {

						window.location.reload(true);
					});
				} else {
					//todo can't get locale
				}
			});
		}

		/* Modifier */

	}, {
		key: 'makeButtonInactive',
		value: function makeButtonInactive(button) {
			button.unbind('click');
			button.addClass('btn--inactive');
		}
	}, {
		key: 'makeButtonActive',
		value: function makeButtonActive(button, buttonEvent) {
			button.click(buttonEvent.bind(this));
			button.removeClass('btn--inactive');
		}
	}, {
		key: 'setLoading',
		value: function setLoading() {
			var _this = this;

			_this.errorMessage.html(_ServiceMeta2.default.LOADINGIMG);
			_this.makeButtonInactive(_this.changeProfileButton);
			_this.makeButtonInactive(_this.changeLanguageButton);
		}
	}, {
		key: 'unsetLoading',
		value: function unsetLoading() {
			var _this = this;

			_this.errorMessage.html("");
			_this.makeButtonActive(_this.changeProfileButton, _this.onChangeProfileClicked);
			_this.makeButtonActive(_this.changeLanguageButton, _this.onChangeLanguageClicked);
		}
	}, {
		key: 'displayErrors',
		value: function displayErrors(errors) {
			var _this = this;
			_this.errorMessage.html("");

			for (var i = 0; i < errors.length; i++) {
				if (i <= 2) {
					var errorElm = '<p>' + _Sanitize2.default.escpateData(errors[i]) + '</p>';
					_this.errorMessage.append(errorElm);
				}
			}
		}

		/* Actions */

	}, {
		key: 'updateNotificationState',
		value: function updateNotificationState() {
			var _this = this;

			var notificationSwitch = _this.notificationCheckbox.prop('checked');

			var data = {
				state: notificationSwitch ? 'y' : 'n'
			};

			_this.setLoading();

			_BackgroundRequester2.default.request('api', 'setNotificationState', data).then(function (response) {

				_this.unsetLoading();

				if (response && response.Retcode == 200 && _this.Storage) {
					var config = _this.Storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA];
					config.notificationstate = data.state;
					chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.CONFIGDATA, config), function () {

						var newState = data.state == 'y' ? true : false;
						_this.notificationCheckbox.prop('checked', newState);
					});
				}
			});
		}
	}, {
		key: 'showNotificationVerifyStep',
		value: function showNotificationVerifyStep(data) {
			var _this = this;

			_Utils2.default.hideElement(_this.notificationNormalState);
			_Utils2.default.hideElement(_this.changeLanguageButton);
			_Utils2.default.hideElement(_this.changeProfileButton);
			_Utils2.default.hideElement(_this.inAppNotificationContainer);
			_Utils2.default.showElement(_this.notificationVerifyStep);

			_this.notificationDisableYesButton.click(function () {
				_this.notificationDisableYesButton.unbind("click");
				_this.updateNotificationState(data);
				_Utils2.default.showElement(_this.notificationNormalState);
				_Utils2.default.showElement(_this.changeLanguageButton);
				_Utils2.default.showElement(_this.changeProfileButton);
				_Utils2.default.showElement(_this.inAppNotificationContainer);
				_Utils2.default.hideElement(_this.notificationVerifyStep);
			});

			_this.notificationDisableNoButton.click(function () {
				_this.notificationDisableYesButton.unbind("click");
				_Utils2.default.showElement(_this.notificationNormalState);
				_Utils2.default.showElement(_this.changeLanguageButton);
				_Utils2.default.showElement(_this.changeProfileButton);
				_Utils2.default.showElement(_this.inAppNotificationContainer);
				_Utils2.default.hideElement(_this.notificationVerifyStep);
				_this.notificationCheckbox.prop('checked', true);
			});
		}

		/* Events */

	}, {
		key: 'onBackButtonClicked',
		value: function onBackButtonClicked() {
			location.reload();
		}
	}, {
		key: 'onChangeLanguageClicked',
		value: function onChangeLanguageClicked() {
			_LanguageView2.default.initView();
		}
	}, {
		key: 'onChangeProfileClicked',
		value: function onChangeProfileClicked() {
			var _this = this;

			var errorMessages = [];
			_this.errorMessage.html("");

			var changeData = {};

			_this.loadStorageData().then(function (storage) {

				var passwordField = _jquery2.default.trim(_this.passwordField.val());
				var passwordFieldConfirm = _jquery2.default.trim(_this.passwordConfirmField.val());

				if (_this.firstnameField.val() != "" && _this.firstnameField.val() != storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA].firstname) changeData.newfirstname = _this.firstnameField.val();

				if (_this.lastnameField.val() != "" && _this.lastnameField.val() != storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA].lastname) changeData.newlastname = _this.lastnameField.val();

				if (passwordField != "" && passwordField == passwordFieldConfirm) changeData.newpass = passwordField;

				if (passwordField != "" && passwordField != passwordFieldConfirm) errorMessages.push(storage[_ServiceMeta2.default.STORAGEKEYS.LOCALE]["RegisterPasswordConfirm"]);

				if (passwordField == "") errorMessages.push("Please enter a valid password");

				if (errorMessages.length > 0) return _this.displayErrors(errorMessages);

				if (_Utils2.default.isEmpty(changeData)) return 0;

				_this.setLoading();

				_BackgroundRequester2.default.request('api', 'changeProfile', changeData).then(function (response) {

					_this.unsetLoading();

					if (response && response.Retcode == 200) {
						_this.changeSuccessMessage.text(response.Message);
						_this.userProfileSuccessView.addClass('user-profile-view--success--on');
						_this.userProfileFormView.addClass('user-profile-view--success');

						chrome.storage.local.remove(_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA);
					} else {

						if (response && response.Message) return _this.displayErrors(response.Message);
					}
				});
			});
		}
	}, {
		key: 'onNotificationSwitchChanged',
		value: function onNotificationSwitchChanged() {
			var _this = this;

			var notificationSwitch = _this.notificationCheckbox.prop('checked');

			var data = {
				state: notificationSwitch ? 'y' : 'n'
			};

			if (!notificationSwitch) return _this.showNotificationVerifyStep(data);

			_this.updateNotificationState(data);
		}
	}, {
		key: 'onInAppNotificationSwitchChanged',
		value: function onInAppNotificationSwitchChanged() {
			var _this = this;

			var notificationSwitch = _this.inAppNotificationCheckbox.prop('checked');

			chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA, _ServiceMeta2.default.STORAGEKEYS.ISINAPPNOTIFICATIONOFF], function (storage) {

				var configData = storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA];
				var uid = configData && configData.uid ? configData.uid : "";

				var inAppNotification = storage[_ServiceMeta2.default.STORAGEKEYS.ISINAPPNOTIFICATIONOFF];

				if (!inAppNotification) inAppNotification = {};

				inAppNotification[uid] = notificationSwitch;

				chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.ISINAPPNOTIFICATIONOFF, inAppNotification));
			});
		}
	}]);

	return UserProfileView;
}();

exports.default = new UserProfileView();

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _folders = __webpack_require__(1);

var _folders2 = _interopRequireDefault(_folders);

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _ServiceMeta = __webpack_require__(2);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _Utils = __webpack_require__(3);

var _Utils2 = _interopRequireDefault(_Utils);

var _BackgroundRequester = __webpack_require__(4);

var _BackgroundRequester2 = _interopRequireDefault(_BackgroundRequester);

var _UpgradeView = __webpack_require__(10);

var _UpgradeView2 = _interopRequireDefault(_UpgradeView);

var _localhosts = __webpack_require__(27);

var _localhosts2 = _interopRequireDefault(_localhosts);

var _DOMPurify = __webpack_require__(5);

var _DOMPurify2 = _interopRequireDefault(_DOMPurify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BypassConfigView = function () {
	function BypassConfigView() {
		_classCallCheck(this, BypassConfigView);

		this.template = _folders2.default.VIEWS + '/bypass-config.html';
		this.header = _folders2.default.VIEWS + '/header.html';
	}

	_createClass(BypassConfigView, [{
		key: 'initView',
		value: function initView() {
			var _this = this;

			this.App = (0, _jquery2.default)('#app');
			this.App.html("");

			_Utils2.default.getLocaleInStorage().then(_this.loadTemplate.bind(this), _this.loadLocaleFromServer.bind(this));
		}
	}, {
		key: 'loadTemplate',
		value: function loadTemplate(locale) {
			var _this = this;

			_this.loadStorageData().then(function (storage) {
				_this.Storage = storage;

				_jquery2.default.get(_this.header, function (header) {
					_this.App.append(header);
					_jquery2.default.get(_this.template, function (template) {

						var loadedTemplate = _Utils2.default.loadTemplate(template, locale);
						_this.App.append(loadedTemplate);

						_this.selectElements();
					}, "html");
				}, "html");
			});
		}
	}, {
		key: 'selectElements',
		value: function selectElements() {
			var _this = this;

			_this.headerLogo = (0, _jquery2.default)('#header-logo');
			_this.bypasslist = (0, _jquery2.default)('#bypasslist');
			_this.updateListButton = (0, _jquery2.default)('#update-bypasslist-button');
			_this.errorMessages = (0, _jquery2.default)('#error_message');

			_this.upgradeButton = (0, _jquery2.default)('#upgrade-account-bypass');

			_this.setUpgradeButton();
			_this.setServiceElements();
			_this.setCurrentBypassList();
			_this.setHeaderBackButton();
			_this.setEvents();
		}
	}, {
		key: 'setUpgradeButton',
		value: function setUpgradeButton() {
			var _this = this;

			if (!_Utils2.default.isUserPremium(_this.Storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA])) {
				_this.updateListButton.hide();
				_this.upgradeButton.show();
				_this.bypasslist.attr('readonly', 'readonly');
				_this.showBypassFunctionError();
			}
		}
	}, {
		key: 'setCurrentBypassList',
		value: function setCurrentBypassList(response) {
			var _this = this;

			chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.BYPASSLIST, _ServiceMeta2.default.STORAGEKEYS.CONFIGDATA], function (storage) {

				var configData = storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA];
				var bypassList = storage[_ServiceMeta2.default.STORAGEKEYS.BYPASSLIST] ? storage[_ServiceMeta2.default.STORAGEKEYS.BYPASSLIST] : [];
				var uid = configData && configData.uid ? configData.uid : "";

				if (response) bypassList = response.bypassList;

				var bypassString = "";

				bypassList = bypassList && bypassList[uid] ? bypassList[uid] : [];

				//bypassList = bypassList.concat(Localhosts);

				var uniqueList = bypassList.concat(_localhosts2.default.filter(function (item) {
					return bypassList.indexOf(item) < 0;
				}));

				for (var i = 0; i < uniqueList.length; i++) {
					bypassString += uniqueList[i] + "\n";
				};

				_this.bypasslist.val(bypassString);
			});
		}
	}, {
		key: 'setEvents',
		value: function setEvents() {
			var _this = this;

			_this.updateListButton.click(_this.onUpdateListButtonClicked.bind(this));
			_this.upgradeButton.click(_this.onUpgradeButtonClicked.bind(this));
		}
	}, {
		key: 'setServiceElements',
		value: function setServiceElements() {
			var _this = this;
			_this.headerLogo.attr('src', _ServiceMeta2.default.IMAGES.HEADERLOGO);
		}
	}, {
		key: 'setHeaderBackButton',
		value: function setHeaderBackButton() {
			var _this = this;
			_this.headerBackButton = (0, _jquery2.default)('#header-back-button');
			_this.headerBackButton.css('display', 'block');
			_this.headerBackButton.click(_this.onHeaderBackButtonClicked.bind(this));
		}
	}, {
		key: 'loadStorageData',
		value: function loadStorageData() {
			var _this = this;
			return new Promise(function (resolve, reject) {

				chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA, _ServiceMeta2.default.STORAGEKEYS.LOCALE, _ServiceMeta2.default.STORAGEKEYS.BYPASSLIST], function (storage) {
					_this.Storage = storage;
					resolve(storage);
				});
			});
		}
	}, {
		key: 'loadLocaleFromServer',
		value: function loadLocaleFromServer() {
			var _this = this;

			_this.App.append('<div class="loadingimg"><img src="images/loading.gif"></div>');

			_BackgroundRequester2.default.request("api", "getLocale", {}).then(function (resp) {
				if (resp != undefined && resp != "" && resp.Retcode === 200) {

					chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.LOCALE, resp.locale), function () {

						window.location.reload(true);
					});
				} else {
					_this.App.html("Unknown error. Please contact support");
				}
			});
		}
	}, {
		key: 'showResult',
		value: function showResult(response) {
			var _this = this;
			var resultStr = "";
			_this.errorMessages.html("");

			if (response.valid == 1) resultStr += "<p style='color: green;'>1 line added successfully</p>";
			if (response.valid > 1) resultStr += "<p style='color: green;'>" + response.valid + " lines added successfully</p>";

			if (response.invalid == 1) resultStr += "<p> 1 line is not valid: " + response.errorLines[0] + "</p>";

			if (response.invalid > 1) {
				resultStr += "<p>" + response.invalid + " lines are not valid:</p>";
				for (var i = 0; i < response.errorLines.length; i++) {
					resultStr += "<p>" + response.errorLines[i] + "</p>";
				};
			}

			_this.errorMessages.html(_DOMPurify2.default.sanitize(resultStr, { SAFE_FOR_JQUERY: true }));
		}
	}, {
		key: 'showBypassFunctionError',
		value: function showBypassFunctionError() {
			var _this = this;

			_this.errorMessages.html("This function is only available for premium user");
		}

		/* Events */

	}, {
		key: 'onUpdateListButtonClicked',
		value: function onUpdateListButtonClicked() {
			var _this = this;

			var configData = _this.Storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA];
			var uid = configData && configData.uid ? configData.uid : "";
			var bypassData = _this.Storage[_ServiceMeta2.default.STORAGEKEYS.BYPASSLIST];
			var bypassList = bypassData && bypassData[uid] ? bypassData[uid] : [];

			var validationData = {
				currentData: bypassList,
				newData: _this.bypasslist.val()
			};

			_BackgroundRequester2.default.request('Bypasslist', 'validate', validationData).then(function (response) {

				_this.showResult(response);

				_this.setCurrentBypassList();
			});
		}
	}, {
		key: 'onHeaderBackButtonClicked',
		value: function onHeaderBackButtonClicked() {
			location.reload();
		}
	}, {
		key: 'onUpgradeButtonClicked',
		value: function onUpgradeButtonClicked() {
			var _this = this;

			_UpgradeView2.default.initView();
		}
	}]);

	return BypassConfigView;
}();

exports.default = new BypassConfigView();

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = ["localhost", "127.0.0.1", "local", "intra", "intranet", "onion"];

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _folders = __webpack_require__(1);

var _folders2 = _interopRequireDefault(_folders);

var _ServiceMeta = __webpack_require__(2);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _BackgroundRequester = __webpack_require__(4);

var _BackgroundRequester2 = _interopRequireDefault(_BackgroundRequester);

var _Utils = __webpack_require__(3);

var _Utils2 = _interopRequireDefault(_Utils);

var _OpenTip = __webpack_require__(13);

var _OpenTip2 = _interopRequireDefault(_OpenTip);

var _Sticked = __webpack_require__(15);

var _Sticked2 = _interopRequireDefault(_Sticked);

var _DOMPurify = __webpack_require__(5);

var _DOMPurify2 = _interopRequireDefault(_DOMPurify);

var _WebRTCAddon = __webpack_require__(29);

var _WebRTCAddon2 = _interopRequireDefault(_WebRTCAddon);

var _WebRTCAddonView = __webpack_require__(31);

var _WebRTCAddonView2 = _interopRequireDefault(_WebRTCAddonView);

var _DesktopClientInfoView = __webpack_require__(11);

var _DesktopClientInfoView2 = _interopRequireDefault(_DesktopClientInfoView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ConnectedView = function () {
	function ConnectedView() {
		_classCallCheck(this, ConnectedView);

		this.template = _folders2.default.VIEWS + '/connected.html';
		this.header = _folders2.default.VIEWS + '/header.html';
	}

	_createClass(ConnectedView, [{
		key: 'initView',
		value: function initView() {

			var _this = this;
			this.App = (0, _jquery2.default)('#app');
			this.App.html("");

			_Utils2.default.getLocaleInStorage().then(_this.loadTemplate.bind(this), _this.loadLocaleFromServer.bind(this));
		}
	}, {
		key: 'loadTemplate',
		value: function loadTemplate(locale) {
			var _this = this;

			_this.loadStorageData().then(function (storage) {
				_this.Storage = storage;
				_jquery2.default.get(_this.template, function (template) {
					var loadedTemplate = _Utils2.default.loadTemplate(template, locale);
					_this.App.append(loadedTemplate);

					_this.selectElements();
					_this.setEvents();

					var currentProxy = storage[_ServiceMeta2.default.STORAGEKEYS.CURRENTPROXY] ? storage[_ServiceMeta2.default.STORAGEKEYS.CURRENTPROXY] : "";

					_this.countryElId = _this.getCountryElementIdByServer(_this.Storage[_ServiceMeta2.default.STORAGEKEYS.CURRENTPROXY]);

					_this.tabId = _Utils2.default.getTabIdByServerType(currentProxy.Type);
					_this.usertag = storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA] ? storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA].usertag : "";

					_this.connectedCountry.text(currentProxy.Country);

					_this.setProxyExtensionWarning();
					_this.setPinCountryButtonState();

					_this.setWebRTCCheckboxState();
				}, "html");
			});
		}
	}, {
		key: 'loadStorageData',
		value: function loadStorageData() {
			return new Promise(function (resolve, reject) {

				chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.ISPROXYON, _ServiceMeta2.default.STORAGEKEYS.CURRENTPROXY, _ServiceMeta2.default.STORAGEKEYS.LOCALE, _ServiceMeta2.default.STORAGEKEYS.ISCOUNTRYSORTED, _ServiceMeta2.default.STORAGEKEYS.CONFIGDATA], function (storage) {

					resolve(storage);
				});
			});
		}
	}, {
		key: 'selectElements',
		value: function selectElements() {
			var _this = this;

			_this.connectedContainer = (0, _jquery2.default)('#connected-container');

			_this.connectedCountry = (0, _jquery2.default)('#connected-country');
			_this.connectedIpLookupButton = (0, _jquery2.default)('#connected-ip-lookup-button');
			_this.connectedDisconnectButton = (0, _jquery2.default)('#connected-disconnect-button');
			_this.connectedProxyExtensionNames = (0, _jquery2.default)('#proxyExtensionNames');
			_this.connectedProxyExtensionServiceName = (0, _jquery2.default)('#proxyextenion-servicename');
			_this.connectedProxyExtensionsMessage = (0, _jquery2.default)('#proxyextensions');

			/* Download Platform */
			_this.downloadAndroidButton = (0, _jquery2.default)('#dw-android');
			_this.downloadWindowsButton = (0, _jquery2.default)('#dw-windows');
			_this.downloadMacButton = (0, _jquery2.default)('#dw-macosx');

			_this.pinnedImg = (0, _jquery2.default)('#pinned-image');

			_this.pinCountryButton = (0, _jquery2.default)('#pin-country');

			_this.webRTCCheckbox = (0, _jquery2.default)('#webrtc-checkbox');
		}
	}, {
		key: 'setEvents',
		value: function setEvents() {
			var _this = this;

			_this.connectedIpLookupButton.click(_this.onIpLookupButtonClicked.bind(this));
			_this.connectedDisconnectButton.click(_this.onDisconnectButtonClicked.bind(this));
			_this.pinCountryButton.click(_this.onPinCountryButtonClicked.bind(this));

			_this.webRTCCheckbox.click(_this.onWebRTCCheckboxChanged.bind(this));

			/* Download events */

			_this.downloadAndroidButton.click(_this.onDownloadEventFunc('android'));
			_this.downloadMacButton.click(_this.onDesktopInfoButtonClicked.bind(this));
			_this.downloadWindowsButton.click(_this.onDesktopInfoButtonClicked.bind(this));
		}
	}, {
		key: 'onDesktopInfoButtonClicked',
		value: function onDesktopInfoButtonClicked() {
			var _this = this;

			_DesktopClientInfoView2.default.show();
		}
	}, {
		key: 'onDownloadEventFunc',
		value: function onDownloadEventFunc(platform) {
			var _this = this;

			return function () {
				_Utils2.default.openPlatformLink(platform);
			};
		}
	}, {
		key: 'setWebRTCCheckboxState',
		value: function setWebRTCCheckboxState() {
			var _this = this;

			_WebRTCAddon2.default.getState().then(function (state) {

				var checked = state.value === 'disable_non_proxied_udp' ? true : false;

				_this.webRTCCheckbox.prop('checked', checked);
			}, function (error) {});
		}
	}, {
		key: 'onWebRTCAddonError',
		value: function onWebRTCAddonError(error) {

			if (error.reason == 'not_installed' || error.reason == 'not_active') return _WebRTCAddonView2.default.initView(error.reason);
		}
	}, {
		key: 'onWebRTCCheckboxChanged',
		value: function onWebRTCCheckboxChanged() {
			var _this = this;

			var isChecked = _this.webRTCCheckbox.prop('checked');

			_WebRTCAddon2.default.setState(isChecked).then(function (result) {}, _this.onWebRTCAddonError);
		}
	}, {
		key: 'setPinCountryButtonState',
		value: function setPinCountryButtonState() {
			var _this = this;
			var isUserPremium = _Utils2.default.isUserPremium(_this.Storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA]);

			if (!isUserPremium) return _this.pinButtonForFreeUser();

			_Sticked2.default.getPinnedState(_this.countryElId, _this.tabId).then(function (isPinned) {

				if (isPinned) return _this.alreadyPinnedButton();
			});
		}
	}, {
		key: 'alreadyPinnedButton',
		value: function alreadyPinnedButton() {
			var _this = this;

			_this.pinnedImg.css('display', 'none');
			_this.pinCountryButton.text('Unpin Country');
			_this.pinCountryButton.unbind('click');
			_this.pinCountryButton.click(_this.onUnpinCountryClicked.bind(this));
		}
	}, {
		key: 'onUnpinCountryClicked',
		value: function onUnpinCountryClicked() {
			var _this = this;

			_Sticked2.default.unpin(_this.countryElId, _this.tabId).then(function () {
				location.reload();
			});
		}
	}, {
		key: 'deactivatePinButton',
		value: function deactivatePinButton() {
			var _this = this;

			_this.pinCountryButton.removeClass('btn--blue');
			_this.pinCountryButton.addClass('btn--inactive');
		}
	}, {
		key: 'pinButtonForFreeUser',
		value: function pinButtonForFreeUser() {
			var _this = this;

			var options = {
				tipJoint: "bottom",
				background: "#fff",
				borderColor: '#fff'
			};

			_this.deactivatePinButton();

			new _OpenTip2.default(_this.pinCountryButton, "Only accessible for premium user", options);
		}
	}, {
		key: 'getCountryElementIdByServer',
		value: function getCountryElementIdByServer(server) {
			var tabId = _Utils2.default.getTabIdByServerType(server.Type);
			var serverCountryCode = server && server.CountryCode ? server.CountryCode.toLowerCase() : "";

			return tabId + serverCountryCode;
		}

		/* Event */

	}, {
		key: 'onPinCountryButtonClicked',
		value: function onPinCountryButtonClicked() {
			var _this = this;

			_Sticked2.default.pin(_this.countryElId, _this.tabId).then(function () {

				location.reload();
			});
		}
	}, {
		key: 'onIpLookupButtonClicked',
		value: function onIpLookupButtonClicked() {
			chrome.storage.local.get(_ServiceMeta2.default.STORAGEKEYS.IPLOOKUPURL, function (storage) {

				var ipLookupUrl = storage[_ServiceMeta2.default.STORAGEKEYS.IPLOOKUPURL];

				if (ipLookupUrl) _Utils2.default.openNewTab(ipLookupUrl);
			});
		}
	}, {
		key: 'onDisconnectButtonClicked',
		value: function onDisconnectButtonClicked() {

			_BackgroundRequester2.default.request('ProxySetting', 'clearSettings', {}).then(function () {

				location.reload();
			});
		}
	}, {
		key: 'setProxyExtensionWarning',
		value: function setProxyExtensionWarning() {
			var _this = this;

			_BackgroundRequester2.default.request('Management', 'cacheExtWithProxyPerm', {}).then(function (extWithProxy) {

				chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.PROXYEXTENSIONS], function (storage) {

					var proxyExtensionList = storage[_ServiceMeta2.default.STORAGEKEYS.PROXYEXTENSIONS];

					if (!proxyExtensionList || proxyExtensionList && proxyExtensionList.length == 0) return;

					var proxyExtensionNameString = _this.getExtensionNamesAsString(proxyExtensionList);

					_this.connectedProxyExtensionServiceName.text(_ServiceMeta2.default.SERVICE);
					_this.connectedProxyExtensionNames.html(_DOMPurify2.default.sanitize(proxyExtensionNameString, { SAFE_FOR_JQUERY: true }));
					_this.connectedProxyExtensionsMessage.css('display', 'block');

					_this.connectedContainer.removeClass('connected-view__middle');
				});
			});
		}
	}, {
		key: 'getExtensionNamesAsString',
		value: function getExtensionNamesAsString(ext) {
			var _this = this;

			if (!ext) return "";

			if (ext.length == 1) return _this.addBoldToName(ext[0].name);
			if (ext.length == 2) return _this.addBoldToName(ext[0].name) + " and " + _this.addBoldToName(ext[1].name);

			var string = "";
			if (ext.length > 2) {
				for (var i = 0; i < ext.length; i++) {
					string += _this.addBoldToName(ext[i].name);
					if (i == ext.length - 2) string += " and ";
					if (i != ext.length - 2 || i != ext.length - 1) string += ", ";
				};

				return string;
			}

			return "";
		}
	}, {
		key: 'addBoldToName',
		value: function addBoldToName(name) {
			return "<b style='text-decoration:underline'>" + name + "</b>";
		}
	}, {
		key: 'loadLocaleFromServer',
		value: function loadLocaleFromServer() {
			var _this = this;

			_this.App.append('<div class="loadingimg"><img src="images/loading.gif"></div>');

			_BackgroundRequester2.default.request("api", "getLocale", {}).then(function (resp) {
				if (resp != undefined && resp != "" && resp.Retcode === 200) {

					chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.LOCALE, resp.locale), function () {

						window.location.reload(true);
					});
				} else {
					_this.App.html("Unknown error. Please contact support");
				}
			});
		}
	}]);

	return ConnectedView;
}();

exports.default = new ConnectedView();

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Management = __webpack_require__(30);

var _Management2 = _interopRequireDefault(_Management);

var _ServiceMeta = __webpack_require__(2);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WebRTCAddon = function () {
	function WebRTCAddon() {
		_classCallCheck(this, WebRTCAddon);

		this.addonPort = false;
		this.addonId = _ServiceMeta2.default.WEBRTCADDON.ID;
		this.requests = {};
	}

	_createClass(WebRTCAddon, [{
		key: 'setState',
		value: function setState(isEnabled) {
			var _this = this;

			return new Promise(function (resolve, reject) {
				_this.connect().then(function (isActive) {
					return _this.sendRequest(isActive, "set", isEnabled);
				}, reject).then(resolve);
			});
		}
	}, {
		key: 'getState',
		value: function getState() {
			var _this = this;
			return new Promise(function (resolve, reject) {
				_this.connect().then(function (isActive) {
					return _this.sendRequest(isActive, "state");
				}, reject).then(resolve);
			});
		}
	}, {
		key: 'sendRequest',
		value: function sendRequest(isActive, request, data) {
			var _this = this;

			return new Promise(function (resolve, reject) {
				if (isActive) {
					var uniqueRequestId = new Date().getTime();

					_this.addonPort.postMessage({
						request: request,
						requestId: uniqueRequestId,
						data: data
					});

					_this.requests[uniqueRequestId] = resolve;
				}
			});
		}
	}, {
		key: 'connect',
		value: function connect() {
			var _this2 = this;

			var _this = this;

			return new Promise(function (resolve, reject) {
				_Management2.default.isExtInstalled(_this.addonId).then(function () {
					return _Management2.default.isExtActive(_this.addonId);
				}, reject).then(function (isActive) {
					if (!isActive) return resolve(false);

					if (_this2.addonPort) return resolve(true);
					_this2.addonPort = chrome.runtime.connect(_this.addonId);
					_this2.addonPort.onDisconnect.addListener(_this.onDisconnect.bind(_this));
					_this2.addonPort.onMessage.addListener(_this.onMessage.bind(_this));
					resolve(true);
				}, reject);
			});
		}
	}, {
		key: 'onMessage',
		value: function onMessage(message) {
			var _this = this;

			if (message && message.requestId && _this.requests.hasOwnProperty(message.requestId)) {
				_this.requests[message.requestId](message.data);
				delete _this.requests[message.requestId];
			}
		}
	}, {
		key: 'onDisconnect',
		value: function onDisconnect(p) {
			var _this = this;

			_this.addonPort = false;
		}
	}]);

	return WebRTCAddon;
}();

exports.default = new WebRTCAddon();

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ServiceMeta = __webpack_require__(2);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Management = function () {
	function Management() {
		_classCallCheck(this, Management);
	}

	_createClass(Management, [{
		key: 'isExtInstalled',
		value: function isExtInstalled(extensionId) {
			var _this = this;

			return new Promise(function (resolve, reject) {
				_this.getAllExt().then(function (listOfExtensions) {

					for (var i = 0; i < listOfExtensions.length; i++) {
						if (listOfExtensions[i].id == extensionId) return resolve(true);
					};

					reject({
						reason: 'not_installed'
					});
				});
			});
		}
	}, {
		key: 'isExtActive',
		value: function isExtActive(extensionId) {
			var _this = this;

			return new Promise(function (resolve, reject) {
				_this.getAllExt().then(function (listOfExtensions) {

					for (var i = 0; i < listOfExtensions.length; i++) {
						if (listOfExtensions[i].enabled === true && listOfExtensions[i].id == extensionId) {

							return resolve(true);
						}
					};

					reject({
						reason: 'not_active'
					});
				});
			});
		}
	}, {
		key: 'cacheExtWithProxyPerm',
		value: function cacheExtWithProxyPerm(popupCallback) {
			var _this = this;

			_this.getAllProxyExt().then(_this.saveInStorage.bind(this)).then(function (extWithProxy) {
				if (popupCallback) popupCallback(extWithProxy);
			});
		}
	}, {
		key: 'saveInStorage',
		value: function saveInStorage(extWithProxy) {
			return new Promise(function (resolve, reject) {
				chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.PROXYEXTENSIONS, extWithProxy), function () {
					resolve(extWithProxy);
				});
			});
		}
	}, {
		key: 'getAllExt',
		value: function getAllExt() {
			var _this = this;

			return new Promise(function (resolve, reject) {

				if (_ServiceMeta2.default.PLATFORM.toUpperCase() == "FIREFOX") return browser.management.getAll().then(resolve);

				return chrome.management.getAll(resolve);
			});
		}
	}, {
		key: 'getAllProxyExt',
		value: function getAllProxyExt(popupCallback) {
			var _this = this;

			return new Promise(function (resolve, reject) {

				function listCallback(listOfExtensions) {

					var extWithProxy = [];

					for (var i = 0; i < listOfExtensions.length; i++) {
						if (_this.hasExtensionProxyPermission(listOfExtensions[i]) && chrome.runtime.id !== listOfExtensions[i].id && _ServiceMeta2.default.PROXYADDONS.indexOf(listOfExtensions[i].id) === -1 && listOfExtensions[i].enabled) extWithProxy.push(listOfExtensions[i]);
					};

					if (popupCallback) return popupCallback(extWithProxy);

					resolve(extWithProxy);
				}

				_this.getAllExt().then(listCallback);
			});
		}
	}, {
		key: 'popupCallback',
		value: function popupCallback(port, requestId, method) {

			return function (data) {
				port.postMessage({ response: method, requestId: requestId, data: data });
			};
		}
	}, {
		key: 'popupMessageHandler',
		value: function popupMessageHandler(port, requestId, method, data) {
			var _this = this;

			switch (method) {
				case "cacheExtWithProxyPerm":
					_this.cacheExtWithProxyPerm(_this.popupCallback(port, requestId, method));
					break;
				default:

					break;
			}
		}

		/* Actions */

		/*
  	getIdOfAllExtensionsWithProxyPermission () {
  		var _this = this;
  		return new Promise((resolve, reject) => {
  
  			browser.management.getAll().then((listOfExtensions) => {
  
  
  				var extensionIds = [];
  
  				for (var i = 0; i < listOfExtensions.length; i++) {
  
  					if(_this.hasExtensionProxyPermission(listOfExtensions[i]))
  						extensionIds.push(listOfExtensions[i].id);
  
  				};
  
  				resolve(extensionIds);
  
  			});
  
  
  		});
  	}
  */
		/*
  	disableExtensions (extensionIds) {
  
  		return new Promise((resolve, reject) => {
  			var promises = [];
  
  			for (var i = 0; i < extensionIds.length; i++) {
  				promises.push(browser.management.setEnabled(extensionIds[i], false));
  			};
  
  			Promise.all(promises).then(values => {
  				resolve(values);
  			});
  
  
  		});
  	}
  */

	}, {
		key: 'hasExtensionProxyPermission',
		value: function hasExtensionProxyPermission(ext) {
			return ext && ext.permissions && ext.permissions.indexOf('proxy') > -1 ? true : false;
		}
	}]);

	return Management;
}();

exports.default = new Management();

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _folders = __webpack_require__(1);

var _folders2 = _interopRequireDefault(_folders);

var _Utils = __webpack_require__(3);

var _Utils2 = _interopRequireDefault(_Utils);

var _ServiceMeta = __webpack_require__(2);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WebRTCAddonView = function () {
	function WebRTCAddonView() {
		_classCallCheck(this, WebRTCAddonView);

		this.template = _folders2.default.VIEWS + '/webrtcaddon.html';
	}

	_createClass(WebRTCAddonView, [{
		key: 'initView',
		value: function initView(errorReason) {
			var _this = this;
			this.App = (0, _jquery2.default)('#app');
			this.App.html("");

			this.errorReason = errorReason;

			_Utils2.default.getLocaleInStorage().then(_this.loadTemplate.bind(this), _this.loadLocaleFromServer.bind(this));
		}
	}, {
		key: 'loadTemplate',
		value: function loadTemplate(locale) {
			var _this = this;

			_jquery2.default.get(_this.template, function (template) {
				var loadedTemplate = _Utils2.default.loadTemplate(template, locale);

				_this.App.append(loadedTemplate);

				_this.selectElements();
				_this.setEvents();

				_this.setServiceElements();
			}, "html");
		}
	}, {
		key: 'setServiceElements',
		value: function setServiceElements() {
			var _this = this;

			_this.serviceName.text(_ServiceMeta2.default.SERVICE);
			_this.serviceName2.text(_ServiceMeta2.default.SERVICE);

			var notEnabled = _this.errorReason == 'not_active' ? true : false;

			if (notEnabled) {
				_this.notEnabledView.show();
			} else {
				_this.notInstalledView.show();
			}
		}
	}, {
		key: 'selectElements',
		value: function selectElements() {
			var _this = this;

			_this.addonBigButton = (0, _jquery2.default)('#addon-big-button');
			_this.addonDownloadButton = (0, _jquery2.default)('#addon-download-button');
			_this.closeAddonViewButton = (0, _jquery2.default)('#close-addon-view');

			_this.serviceName = (0, _jquery2.default)('#service-name');
			_this.serviceName2 = (0, _jquery2.default)('#service-name-2');

			_this.notInstalledView = (0, _jquery2.default)('#not-installed-view');
			_this.notEnabledView = (0, _jquery2.default)('#not-enabled-view');

			_this.enableBigButton = (0, _jquery2.default)('#enable-big-button');
			_this.enableButton = (0, _jquery2.default)('#addon-enable-button');
		}
	}, {
		key: 'setEvents',
		value: function setEvents() {
			var _this = this;

			_this.addonBigButton.click(_this.openAddonPage.bind(_this));
			_this.addonDownloadButton.click(_this.openAddonPage.bind(_this));
			_this.closeAddonViewButton.click(_this.onCloseAddonViewClicked.bind(_this));

			_this.enableButton.click(_this.openAddonManager.bind(_this));
			_this.enableBigButton.click(_this.openAddonManager.bind(_this));
		}
	}, {
		key: 'openAddonPage',
		value: function openAddonPage() {
			var _this = this;

			_Utils2.default.openNewTab(_ServiceMeta2.default.WEBRTCADDON.URL);
		}
	}, {
		key: 'openAddonManager',
		value: function openAddonManager() {
			var _this = this;

			//Utils.openNewTab('about:addons');
		}
	}, {
		key: 'onCloseAddonViewClicked',
		value: function onCloseAddonViewClicked() {
			var _this = this;

			location.reload();
		}
	}, {
		key: 'loadLocaleFromServer',
		value: function loadLocaleFromServer() {
			var _this = this;

			_this.App.append('<div class="loadingimg"><img src="images/loading.gif"></div>');

			Background.request("api", "getLocale", {}).then(function (resp) {
				if (resp != undefined && resp != "" && resp.Retcode === 200) {

					chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.LOCALE, resp.locale), function () {

						window.location.reload(true);
					});
				} else {
					_this.App.html("Unknown error. Please contact support");
				}
			});
		}
	}]);

	return WebRTCAddonView;
}();

exports.default = new WebRTCAddonView();

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _folders = __webpack_require__(1);

var _folders2 = _interopRequireDefault(_folders);

var _ServiceMeta = __webpack_require__(2);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _UpgradeView = __webpack_require__(10);

var _UpgradeView2 = _interopRequireDefault(_UpgradeView);

var _Utils = __webpack_require__(3);

var _Utils2 = _interopRequireDefault(_Utils);

var _DOMPurify = __webpack_require__(5);

var _DOMPurify2 = _interopRequireDefault(_DOMPurify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GifView = function () {
	function GifView(title, desc, gif) {
		_classCallCheck(this, GifView);

		this.title = title;
		this.desc = desc;
		this.gif = gif;

		this.template = _folders2.default.VIEWS + '/gif.html';
	}

	_createClass(GifView, [{
		key: 'show',
		value: function show() {
			var _this = this;

			this.App = (0, _jquery2.default)('#app');
			this.App.html("");

			_Utils2.default.getLocaleInStorage().then(function (locale) {
				_jquery2.default.get(_this.template, function (template) {
					var loadedTemplate = _Utils2.default.loadTemplate(template, locale);

					_this.App.append(loadedTemplate);
					_this.selectElements();
					_this.setValues();
					_this.setEvents();
				}, "html");
			});
		}
	}, {
		key: 'setValues',
		value: function setValues() {
			var _this = this;

			_this.titleEl.text(_this.title);
			_this.descEl.text(_this.desc);

			chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.BASELINK], function (storage) {

				var baselink = storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK];

				_this.gifEl.html(_DOMPurify2.default.sanitize('<img src="' + baselink + _this.gif + '">', { SAFE_FOR_JQUERY: true }));
			});
		}
	}, {
		key: 'setEvents',
		value: function setEvents() {
			var _this = this;

			_this.closeGifButton.click(_this.onCloseButtonClicked.bind(_this));
			_this.upgradeButton.click(_this.onUpgradeButtonClicked.bind(_this));
		}
	}, {
		key: 'selectElements',
		value: function selectElements() {
			var _this = this;

			_this.titleEl = (0, _jquery2.default)('#gif-title');
			_this.descEl = (0, _jquery2.default)('#gif-desc');
			_this.gifEl = (0, _jquery2.default)('#gif-gif');

			_this.closeGifButton = (0, _jquery2.default)('#close-gif');
			_this.upgradeButton = (0, _jquery2.default)('#gif-upgrade-button');
		}

		/* Events */

	}, {
		key: 'onCloseButtonClicked',
		value: function onCloseButtonClicked() {
			location.reload();
		}
	}, {
		key: 'onUpgradeButtonClicked',
		value: function onUpgradeButtonClicked() {
			_UpgradeView2.default.initView();
		}
	}]);

	return GifView;
}();

exports.default = GifView;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _folders = __webpack_require__(1);

var _folders2 = _interopRequireDefault(_folders);

var _Utils = __webpack_require__(3);

var _Utils2 = _interopRequireDefault(_Utils);

var _ServiceMeta = __webpack_require__(2);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _BackgroundRequester = __webpack_require__(4);

var _BackgroundRequester2 = _interopRequireDefault(_BackgroundRequester);

var _LoginView = __webpack_require__(7);

var _LoginView2 = _interopRequireDefault(_LoginView);

var _DOMPurify = __webpack_require__(5);

var _DOMPurify2 = _interopRequireDefault(_DOMPurify);

var _Sanitize = __webpack_require__(6);

var _Sanitize2 = _interopRequireDefault(_Sanitize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RegisterView = function () {
	function RegisterView() {
		_classCallCheck(this, RegisterView);

		this.template = _folders2.default.VIEWS + '/register.html';
		this.header = _folders2.default.VIEWS + '/header.html';
	}

	_createClass(RegisterView, [{
		key: 'initView',
		value: function initView() {
			var _this = this;

			_Utils2.default.getLocaleInStorage().then(_this.loadTemplate.bind(this), _this.loadLocaleFromServer.bind(this));
		}
	}, {
		key: 'loadTemplate',
		value: function loadTemplate(locale) {
			var _this = this;

			this.App = (0, _jquery2.default)('#app');
			this.App.html("");

			_jquery2.default.get(_this.header, function (header) {
				_this.App.append(header);
				_jquery2.default.get(_this.template, function (template) {
					var loadedTemplate = _Utils2.default.loadTemplate(template, locale);

					_this.App.append(loadedTemplate);
					_this.selectElements();
					_this.setPolicies(locale);
					_this.setErrorMessages(locale);
					_this.setHeaderBackButton();
				}, "html");
			}, "html");
		}
	}, {
		key: 'selectElements',
		value: function selectElements() {
			var _this = this;

			_this.headerLogo = (0, _jquery2.default)('#header-logo');
			_this.headerVersion = (0, _jquery2.default)('#header-version');

			_this.registerSuccessView = (0, _jquery2.default)('#register-success');
			_this.registerFormView = (0, _jquery2.default)('#register-form');

			_this.registerSuccessMessage = (0, _jquery2.default)('#register-success-message');
			_this.registerBackButton = (0, _jquery2.default)('#register-back-button');

			_this.firstnameField = (0, _jquery2.default)('#register-firstname');
			_this.lastnameField = (0, _jquery2.default)('#register-lastname');
			_this.emailField = (0, _jquery2.default)('#register-email');
			_this.emailConfirmField = (0, _jquery2.default)('#register-email-confirm');

			_this.tosCheckbox = (0, _jquery2.default)('#tos-checkbox');
			_this.tosLabel = (0, _jquery2.default)('#tos-label');
			_this.ppCheckbox = (0, _jquery2.default)('#pp-checkbox');
			_this.ppLabel = (0, _jquery2.default)('#pp-label');
			_this.eulaCheckbox = (0, _jquery2.default)('#eula-checkbox');
			_this.eulaLabel = (0, _jquery2.default)('#eula-label');

			_this.registerButton = (0, _jquery2.default)('#register-button');

			_this.errorMessage = (0, _jquery2.default)('#error_message');

			_this.setServiceElements();
			_this.setEvents();
		}
	}, {
		key: 'setServiceElements',
		value: function setServiceElements() {
			var _this = this;
			chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.BASELINK, _ServiceMeta2.default.STORAGEKEYS.INSTALLID], function (storage) {
				var logosource = storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK] ? storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK] + "rest/img/logo/dashboard/150.png" : _ServiceMeta2.default.IMAGES.HEADERLOGO;
				var iid = "";

				if (storage[_ServiceMeta2.default.STORAGEKEYS.INSTALLID]) iid = "&iid=" + storage[_ServiceMeta2.default.STORAGEKEYS.INSTALLID];

				var headerlogo = logosource + "?cv=" + _ServiceMeta2.default.VERSION + iid;
				_this.headerLogo.attr('src', headerlogo);
			});
			_this.headerVersion.text('v. ' + _ServiceMeta2.default.VERSION);
		}
	}, {
		key: 'setHeaderBackButton',
		value: function setHeaderBackButton() {
			var _this = this;
			_this.headerBackButton = (0, _jquery2.default)('#header-back-button');
			_this.headerBackButton.css('display', 'block');
			_this.headerBackButton.click(_this.onHeaderBackButtonClicked.bind(this));
		}
	}, {
		key: 'setErrorMessages',
		value: function setErrorMessages(locale) {
			var _this = this;

			_this.RegisterErrorFirstname = locale.RegisterErrorFirstname;
			_this.RegisterErrorLastname = locale.RegisterErrorLastname;
			_this.RegisterErrorEmail = locale.RegisterErrorEmail;
			_this.enterValidEmailConfirmError = locale.enterValidEmailConfirmError;
			_this.RegisterErrorTOS = locale.RegisterErrorTOS;
			_this.RegisterErrorPP = locale.RegisterErrorPP;
			_this.RegisterErrorEULA = locale.RegisterErrorEULA;
		}
	}, {
		key: 'setEvents',
		value: function setEvents() {
			var _this = this;
			_this.registerButton.click(_this.onRegisterButtonClicked.bind(this));
			_this.registerBackButton.click(_this.onBackToLoginClicked.bind(this));
		}
	}, {
		key: 'setPolicies',
		value: function setPolicies(locale) {
			var _this = this;

			var registerTOS = locale.RegisterTOS ? _DOMPurify2.default.sanitize(locale.RegisterTOS, { SAFE_FOR_JQUERY: true }) : "";
			var registerPP = locale.RegisterPP ? _DOMPurify2.default.sanitize(locale.RegisterPP, { SAFE_FOR_JQUERY: true }) : "";
			var registerEULA = locale.RegisterPP ? _DOMPurify2.default.sanitize(locale.RegisterPP, { SAFE_FOR_JQUERY: true }) : "";

			_this.tosLabel.html(registerTOS.replace('{0}', '<a id="tos-link" href="#" data="html/tos.php">Terms & Conditions</a>'));
			_this.ppLabel.html(registerPP.replace('{0}', '<a id="pp-link" href="#" data="html/pp.php">Privacy Policy</a>'));
			_this.eulaLabel.html(registerEULA.replace('{0}', '<a id="eula-link" href="#" data="html/eula.php">Licence Agreement</a>'));

			_this.setPolicyEvents();
		}
	}, {
		key: 'setPolicyEvents',
		value: function setPolicyEvents() {

			(0, _jquery2.default)('#tos-link').click(this.openPolicyPage);
			(0, _jquery2.default)('#pp-link').click(this.openPolicyPage);
			(0, _jquery2.default)('#eula-link').click(this.openPolicyPage);
		}
	}, {
		key: 'openPolicyPage',
		value: function openPolicyPage() {
			var _this = this;

			chrome.storage.local.get(_ServiceMeta2.default.STORAGEKEYS.BASELINK, function (storage) {
				if (storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK] && (0, _jquery2.default)(_this).attr('data')) {
					var policyLink = storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK] + (0, _jquery2.default)(_this).attr('data');
					chrome.tabs.create({ url: policyLink });
				}
			});
		}
	}, {
		key: 'loadLocaleFromServer',
		value: function loadLocaleFromServer() {

			//todo what happen if it take to long? loading screen is showed?
			_BackgroundRequester2.default.request("api", "getLocale", {}).then(function (resp) {
				if (resp != undefined && resp != "" && resp.Retcode === 200) {

					chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.LOCALE, resp.locale), function () {
						window.location.reload(true);
					});
				} else {
					//todo can't get locale
				}
			});
		}

		/* Modifier */

	}, {
		key: 'setLoading',
		value: function setLoading() {
			var _this = this;

			_this.errorMessage.html(_ServiceMeta2.default.LOADINGIMG);
			_this.registerButton.unbind('click');
			_this.registerButton.addClass('btn--inactive');
		}
	}, {
		key: 'unsetLoading',
		value: function unsetLoading() {
			var _this = this;

			_this.registerButton.click(_this.onRegisterButtonClicked.bind(this));
			_this.registerButton.removeClass('btn--inactive');
		}
	}, {
		key: 'displayErrors',
		value: function displayErrors(errors) {
			var _this = this;
			_this.errorMessage.html("");

			for (var i = 0; i < errors.length; i++) {
				if (i <= 2) {
					var errorElm = '<p>' + _Sanitize2.default.escpateData(errors[i]) + '</p>';
					_this.errorMessage.append(errorElm);
				}
			}
		}

		/* Events */

	}, {
		key: 'onRegisterButtonClicked',
		value: function onRegisterButtonClicked() {
			var _this = this;

			var errorMessages = [];
			_this.errorMessage.html("");

			var emailField = _jquery2.default.trim(_this.emailField.val());
			var emailFieldConfirm = _jquery2.default.trim(_this.emailConfirmField.val());

			if (_this.firstnameField.val() == "") errorMessages.push(_this.RegisterErrorFirstname);
			if (_this.lastnameField.val() == "") errorMessages.push(_this.RegisterErrorLastname);
			if (emailField == "" || emailField.indexOf('@') == -1 || emailField.indexOf('.') == -1) errorMessages.push(_this.RegisterErrorEmail);
			if (emailField != emailFieldConfirm) errorMessages.push(_this.enterValidEmailConfirmError);
			if (!_this.tosCheckbox.prop('checked')) errorMessages.push(_this.RegisterErrorTOS);
			if (!_this.ppCheckbox.prop('checked')) errorMessages.push(_this.RegisterErrorPP);
			if (!_this.eulaCheckbox.prop('checked')) errorMessages.push(_this.RegisterErrorEULA);

			if (errorMessages.length != 0) return _this.displayErrors(errorMessages);

			var registerData = {
				firstname: _this.firstnameField.val(),
				lastname: _this.lastnameField.val(),
				email: emailField,
				tosok: _this.tosCheckbox.prop('checked'),
				ppok: _this.ppCheckbox.prop('checked'),
				eulaok: _this.eulaCheckbox.prop('checked')
			};

			_this.setLoading();

			_BackgroundRequester2.default.request('api', 'register', registerData).then(function (response) {

				_this.unsetLoading();

				if (response && !_Utils2.default.isEmpty(response)) {

					if (response.Retcode == 200) return _this.onRegisterSuccess(response.Message);

					if (response.Message) return _this.onRegisterFailed(response.Message);
				}
			});
		}
	}, {
		key: 'onRegisterSuccess',
		value: function onRegisterSuccess(successMessage) {
			var _this = this;

			_this.registerSuccessMessage.text(successMessage);
			_this.registerSuccessView.addClass('register-view--success--on');
			_this.registerFormView.addClass('register-view--success');
		}
	}, {
		key: 'onRegisterFailed',
		value: function onRegisterFailed(errorMessages) {
			var _this = this;

			_this.displayErrors(errorMessages);
		}
	}, {
		key: 'onBackToLoginClicked',
		value: function onBackToLoginClicked() {

			_LoginView2.default.initView();
		}
	}, {
		key: 'onHeaderBackButtonClicked',
		value: function onHeaderBackButtonClicked() {
			_LoginView2.default.initView();
		}
	}]);

	return RegisterView;
}();

exports.default = new RegisterView();

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _folders = __webpack_require__(1);

var _folders2 = _interopRequireDefault(_folders);

var _Utils = __webpack_require__(3);

var _Utils2 = _interopRequireDefault(_Utils);

var _ServiceMeta = __webpack_require__(2);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _BackgroundRequester = __webpack_require__(4);

var _BackgroundRequester2 = _interopRequireDefault(_BackgroundRequester);

var _LoginView = __webpack_require__(7);

var _LoginView2 = _interopRequireDefault(_LoginView);

var _DOMPurify = __webpack_require__(5);

var _DOMPurify2 = _interopRequireDefault(_DOMPurify);

var _Sanitize = __webpack_require__(6);

var _Sanitize2 = _interopRequireDefault(_Sanitize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ForgotpassView = function () {
	function ForgotpassView() {
		_classCallCheck(this, ForgotpassView);

		this.template = _folders2.default.VIEWS + '/forgotpass.html';
		this.header = _folders2.default.VIEWS + '/header.html';
	}

	_createClass(ForgotpassView, [{
		key: 'initView',
		value: function initView() {

			var _this = this;

			_Utils2.default.getLocaleInStorage().then(_this.loadTemplate.bind(this), _this.loadLocaleFromServer.bind(this));
		}
	}, {
		key: 'loadTemplate',
		value: function loadTemplate(locale) {
			var _this = this;

			this.App = (0, _jquery2.default)('#app');
			this.App.html("");

			_jquery2.default.get(_this.header, function (header) {
				_this.App.append(header);
				_jquery2.default.get(_this.template, function (template) {
					var loadedTemplate = _Utils2.default.loadTemplate(template, locale);

					_this.App.append(loadedTemplate);
					_this.selectElements();
					_this.setErrorMessages(locale);
					_this.setHeaderBackButton();
				}, "html");
			}, "html");
		}
	}, {
		key: 'loadLocaleFromServer',
		value: function loadLocaleFromServer() {

			_BackgroundRequester2.default.request("api", "getLocale", {}).then(function (resp) {
				if (resp != undefined && resp != "" && resp.Retcode === 200) {

					chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.LOCALE, resp.locale), function () {
						window.location.reload(true);
					});
				} else {
					//todo can't get locale
				}
			});
		}
	}, {
		key: 'selectElements',
		value: function selectElements() {
			var _this = this;

			_this.headerLogo = (0, _jquery2.default)('#header-logo');
			_this.headerVersion = (0, _jquery2.default)('#header-version');

			_this.forgotpassSuccessView = (0, _jquery2.default)('#forgotpass-success');
			_this.forgotpassFormView = (0, _jquery2.default)('#forgotpass-form');

			_this.forgotpassSuccessMessage = (0, _jquery2.default)('#forgotpass-success-message');
			_this.forgotpassBackButton = (0, _jquery2.default)('#forgotpass-back-button');

			_this.forgotpassEmailField = (0, _jquery2.default)('#forgotpass-email');

			_this.forgotpassButton = (0, _jquery2.default)('#forgotpass-button');

			_this.errorMessage = (0, _jquery2.default)('#error_message');

			_this.setServiceElements();
			_this.setEvents();
		}
	}, {
		key: 'setServiceElements',
		value: function setServiceElements() {
			var _this = this;
			_this.headerLogo.attr('src', _ServiceMeta2.default.IMAGES.HEADERLOGO);
			_this.headerVersion.text('v. ' + _ServiceMeta2.default.VERSION);
		}
	}, {
		key: 'setEvents',
		value: function setEvents() {
			var _this = this;

			_this.forgotpassButton.click(_this.onForgotpassButtonClicked.bind(this));
			_this.forgotpassBackButton.click(_this.onBackToLoginClicked.bind(this));

			(0, _jquery2.default)('input').keyup(function (e) {
				if (e.keyCode == 13) _this.forgotpassButton.click();
			});
		}
	}, {
		key: 'setErrorMessages',
		value: function setErrorMessages(locales) {
			var _this = this;

			_this.EMAILFAILED = locales.LoginEmailFailed;
		}
	}, {
		key: 'setHeaderBackButton',
		value: function setHeaderBackButton() {
			var _this = this;
			_this.headerBackButton = (0, _jquery2.default)('#header-back-button');
			_this.headerBackButton.css('display', 'block');
			_this.headerBackButton.click(_this.onHeaderBackButtonClicked.bind(this));
		}

		/* Modifier */

	}, {
		key: 'makeButtonInactive',
		value: function makeButtonInactive(button) {
			button.unbind('click');
			button.addClass('btn--inactive');
		}
	}, {
		key: 'makeButtonActive',
		value: function makeButtonActive(button) {
			button.click(this.onForgotpassButtonClicked.bind(this));
			button.removeClass('btn--inactive');
		}
	}, {
		key: 'setLoading',
		value: function setLoading() {
			var _this = this;

			_this.errorMessage.html(_ServiceMeta2.default.LOADINGIMG);
			_this.makeButtonInactive(_this.forgotpassButton);
		}
	}, {
		key: 'unsetLoading',
		value: function unsetLoading() {
			var _this = this;

			_this.makeButtonActive(_this.forgotpassButton);
		}
	}, {
		key: 'displayErrors',
		value: function displayErrors(errors) {
			var _this = this;
			_this.errorMessage.html("");

			for (var i = 0; i < errors.length; i++) {
				if (i <= 2) {
					var errorElm = '<p>' + _Sanitize2.default.escpateData(errors[i]) + '</p>';
					_this.errorMessage.append(errorElm);
				}
			}
		}

		/* Events */

	}, {
		key: 'onForgotpassButtonClicked',
		value: function onForgotpassButtonClicked() {
			var _this = this;

			var errorMessages = [];
			_this.errorMessage.html("");

			if (_this.forgotpassEmailField.val() == "" || _this.forgotpassEmailField.val().indexOf('@') == -1 || _this.forgotpassEmailField.val().indexOf('.') == -1) errorMessages.push(_this.EMAILFAILED);

			if (errorMessages.length > 0) return _this.displayErrors(errorMessages);

			_this.setLoading();

			var forgotPassData = {
				email: _this.forgotpassEmailField.val()
			};

			_BackgroundRequester2.default.request('api', 'forgotPass', forgotPassData).then(function (response) {

				_this.unsetLoading();

				if (response && !_Utils2.default.isEmpty(response)) {

					if (response.Retcode == 200) return _this.onForgotpassSuccess(response.Message);

					if (response.Message) return _this.onForgotpassFailed(response.Message);
				}
			});
		}
	}, {
		key: 'onForgotpassSuccess',
		value: function onForgotpassSuccess(successMessage) {
			var _this = this;

			_this.forgotpassSuccessMessage.html(_DOMPurify2.default.sanitize(successMessage, { SAFE_FOR_JQUERY: true }));
			_this.forgotpassSuccessView.addClass('forgotpass-view--success--on');
			_this.forgotpassFormView.addClass('forgotpass-view--success');
		}
	}, {
		key: 'onForgotpassFailed',
		value: function onForgotpassFailed(errorMessages) {
			var _this = this;

			_this.displayErrors(errorMessages);
		}
	}, {
		key: 'onBackToLoginClicked',
		value: function onBackToLoginClicked() {

			_LoginView2.default.initView();
		}
	}, {
		key: 'onHeaderBackButtonClicked',
		value: function onHeaderBackButtonClicked() {
			var _this = this;
			_this.onBackToLoginClicked();
		}
	}]);

	return ForgotpassView;
}();

exports.default = new ForgotpassView();

/***/ })
/******/ ]);