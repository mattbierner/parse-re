/*
 * THIS FILE IS AUTO GENERATED from 'lib/re.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "amulet/record", "parse/parse", "parse/lang", "parse/text", "nu/stream", "nu/gen", "parse_re/match"], (function(require, exports, record, parse, __o, __o0, stream, gen, match) {
    "use strict";
    var pattern, RE_NONE, RE_I, RE_G, RE_M, evaluate, evaluateStream;
    var record = record,
        parse = parse,
        always = parse["always"],
        attempt = parse["attempt"],
        bind = parse["bind"],
        binds = parse["binds"],
        choice = parse["choice"],
        either = parse["either"],
        enumeration = parse["enumeration"],
        fail = parse["fail"],
        getState = parse["getState"],
        many = parse["many"],
        many1 = parse["many1"],
        modifyState = parse["modifyState"],
        next = parse["next"],
        optional = parse["optional"],
        rec = parse["rec"],
        test = parse["test"],
        token = parse["token"],
        __o = __o,
        between = __o["between"],
        sepBy = __o["sepBy"],
        sepEndBy = __o["sepEndBy"],
        times = __o["times"],
        then = __o["then"],
        __o0 = __o0,
        anyChar = __o0["anyChar"],
        digit = __o0["digit"],
        character = __o0["character"],
        characters = __o0["characters"],
        string = __o0["string"],
        stream = stream,
        foldl = stream["foldl"],
        gen = gen,
        match = match;
    var disjunction = (function() {
        var args = arguments;
        return disjunction.apply(null, args);
    });
    var classRanges = (function() {
        var args = arguments;
        return classRanges.apply(null, args);
    });
    var identity = (function(x) {
        return x;
    });
    var constant = (function(x) {
        return (function() {
            return x;
        });
    });
    var join = foldl.bind(null, (function(x, y) {
        return (x + y);
    }), "");
    var copy = (function(arr) {
        var arr = arr,
            length = arr["length"];
        var out = [];
        for (var i = 0;
            (i < length);
            (i = (i + 1)))(out[i] = arr[i]);

        return out;
    });
    var fromCharCodeParser = (function(f, g) {
        return (function(x) {
            return f(g(x));
        });
    })(always, (function(f, g) {
        return (function(x) {
            return f(g(x));
        });
    })(String.fromCharCode, (function(f, g) {
        return (function(x) {
            return f(g(x));
        });
    })((function(x) {
        return parseInt(x, 16);
    }), join)));
    var Data = record.declare(null, ["flags", "groups"]);
    var addGroup = (function(a, g) {
        var c = copy(a);
        c.push(g);
        return c;
    });
    var setGroup = (function(a, i, g) {
        var c = copy(a);
        (c[i] = g);
        return c;
    });
    (Data.addGroup = (function(s, g) {
        return s.setGroups(addGroup(s.groups, g));
    }));
    (Data.setGroup = (function(s, i, g) {
        return s.setGroups(setGroup(s.groups, i, g));
    }));
    var matchCharacter = (function(c) {
        return bind(getState, (function(s) {
            return always(((s.flags & RE_I) ? match.characteri(c) : match.character(c)));
        }));
    });
    var matchCharacterFrom = (function(p) {
        return bind(p, matchCharacter);
    });
    var matchCharacterRange = (function(from, to) {
        return bind(getState, (function(s) {
            return always(((s.flags & RE_I) ? match.characterRangei(from, to) : match.characterRange(from, to)));
        }));
    });
    var matchBof = bind(getState, (function(s) {
        return always(((s.flags & RE_M) ? match.bol : match.bof));
    }));
    var matchEof = bind(getState, (function(s) {
        return always(((s.flags & RE_M) ? match.eol : match.eof));
    }));
    var group = (function(p) {
        return next(modifyState((function(s) {
            return Data.addGroup(s, null);
        })), bind(getState, (function(s) {
            return (function() {
                {
                    var i = (s.groups.length - 1);
                    return bind(p, (function(p) {
                        return (function() {
                            {
                                var impl = match.group(p, i);
                                return parse.next(modifyState((function(s) {
                                    return Data.setGroup(s, i, impl);
                                })), always(impl));
                            }
                        })();
                    }));
                }
            })();
        })));
    });
    var decimalDigit = characters("0123456789");
    var hexDigit = characters("0123456789abcdefABCDEF");
    var decimalDigits = many1(decimalDigit);
    var decimalIntegerLiteral = bind(decimalDigits, (function(f, g) {
        return (function(x) {
            return f(g(x));
        });
    })(always, (function(f, g) {
        return (function(x) {
            return f(g(x));
        });
    })(parseInt, join)));
    var identifierPart = choice(anyChar, characters("$_"), digit);
    var hexEscapeSequence = next(character("x"), bind(times(2, hexDigit), fromCharCodeParser));
    var unicodeEscapeSequence = next(character("u"), bind(times(4, hexDigit), fromCharCodeParser));
    var decimalEscape = decimalIntegerLiteral;
    var identityEscape = either(characters("‌‍"), token((function(f, g) {
        return (function(x) {
            return f(g(x));
        });
    })((function(x) {
        return !x;
    }), test.bind(null, identifierPart))));
    var controlEscape = (function() {
        {
            var map = (function(from, to) {
                return next(character(from), always(to));
            });
            return choice(map("t", "\t"), map("n", "\n"), map("v", "\u000b"), map("f", "\f"), map("r", "\r"));
        }
    })();
    var controlLetter = bind(characters("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"), (function(f, g) {
        return (function(x) {
            return f(g(x));
        });
    })(always, (function(f, g) {
        return (function(x) {
            return f(g(x));
        });
    })(String.fromCharCode, (function(x) {
        return (x.charCodeAt(0) % 32);
    }))));
    var characterClassEscape = choice(next(character("d"), always(match.digit)), next(character("D"), always(match.nonDigit)), next(character("s"), always(match.space)), next(character("S"), always(match.nonSpace)), next(character("w"), always(match.word)), next(character("W"), always(match.nonWord)));
    var characterEscape = choice(controlEscape, next(character("c"), controlLetter), hexEscapeSequence, unicodeEscapeSequence, identityEscape);
    var classEscape = choice(decimalEscape, next(character("b"), always("\b")), characterClassEscape, characterEscape);
    var classAtomNoDash = either(token((function(f, g) {
        return (function(x) {
            return f(g(x));
        });
    })((function(x) {
        return !x;
    }), test.bind(null, characters("\\-]")))), next(character("\\"), classEscape));
    var classAtom = either(character("-"), classAtomNoDash);
    var rangeFor = (function() {
        {
            var wrap = (function(c) {
                return ((typeof c === "function") ? c : character(c));
            });
            return (function(start, end) {
                return (((typeof start === "function") || (typeof end === "function")) ? always(match.any(wrap(start), match.character("-"), wrap(end))) : matchCharacterRange(start, end));
            });
        }
    })();
    var nonEmptyClassRangesNoDash = (function() {
        {
            var classRange = binds(enumeration(then(classAtomNoDash, character("-")), classAtom), rangeFor);
            return rec((function(nonEmptyClassRangesNoDash) {
                return choice(attempt(bind(enumeration(classRange, classRanges), (function(f, g) {
                    return (function(x) {
                        return f(g(x));
                    });
                })(always, match.anys))), attempt(bind(enumeration(matchCharacterFrom(classAtomNoDash), nonEmptyClassRangesNoDash), (function(f, g) {
                    return (function(x) {
                        return f(g(x));
                    });
                })(always, match.anys))), matchCharacterFrom(classAtom));
            }));
        }
    })();
    var nonEmptyClassRanges = (function() {
        {
            var classRange = binds(enumeration(then(classAtom, character("-")), classAtom), rangeFor);
            return choice(attempt(bind(enumeration(classRange, classRanges), (function(f, g) {
                return (function(x) {
                    return f(g(x));
                });
            })(always, match.anys))), attempt(bind(enumeration(matchCharacterFrom(classAtom), nonEmptyClassRangesNoDash), (function(f, g) {
                return (function(x) {
                    return f(g(x));
                });
            })(always, match.anys))), matchCharacterFrom(classAtom));
        }
    })();
    (classRanges = optional(match.nothing, nonEmptyClassRanges));
    var characterClass = between(character("["), character("]"), either(next(character("^"), bind(classRanges, (function(f, g) {
        return (function(x) {
            return f(g(x));
        });
    })(always, match.notToken))), classRanges));
    var atomEscape = choice(bind(decimalEscape, (function(f, g) {
        return (function(x) {
            return f(g(x));
        });
    })(always, match.backReference)), matchCharacterFrom(characterEscape), characterClassEscape);
    var patternCharacter = (function() {
        {
            var reserved = "^$\\.*+?()[]{}|";
            return matchCharacterFrom(token((function(f, g) {
                return (function(x) {
                    return f(g(x));
                });
            })((function(x) {
                return !x;
            }), test.bind(null, characters(reserved)))));
        }
    })();
    var atom = choice(patternCharacter, next(character("."), always(match.anyCharacter)), next(character("\\"), atomEscape), characterClass, between(character("("), character(")"), either(next(string("?:"), disjunction), group(disjunction))));
    var assertion = choice(next(character("^"), matchBof), next(character("$"), matchEof), next(string("\\b"), always(match.wordBoundary)), next(string("\\B"), always(match.notWordBoundary)), between(character("("), character(")"), bind(either(next(string("?="), always(match.assert)), next(string("?!"), always(match.assertNot))), (function(x) {
        return bind(disjunction, (function(f, g) {
            return (function(x) {
                return f(g(x));
            });
        })(always, x));
    }))));
    var quantifierPrefix = choice(next(character("*"), always([0, Infinity])), next(character("+"), always([1, Infinity])), next(character("?"), always([0, 1])), between(character("{"), character("}"), binds(enumeration(decimalIntegerLiteral, optional(null, character(",")), optional(Infinity, decimalIntegerLiteral)), (function(lower, hasUpper, upper) {
        return always((hasUpper ? [lower, upper] : [lower, lower]));
    }))));
    var quantifier = binds(enumeration(quantifierPrefix, optional(false, character("?"))), (function(__a, lazy) {
        var min = __a[0],
            max = __a[1];
        return always((lazy ? match.betweenNonGreedy.bind(null, min, max) : match.between.bind(null, min, max)));
    }));
    var term = either(attempt(assertion), binds(enumeration(atom, optional(identity, quantifier)), (function(atom, quantifier) {
        return always(quantifier(atom));
    })));
    var alternative = bind(many(term), (function(f, g) {
        return (function(x) {
            return f(g(x));
        });
    })(always, match.chains));
    (disjunction = bind(sepBy(character("|"), alternative), (function(f, g) {
        return (function(x) {
            return f(g(x));
        });
    })(always, match.anys)));
    (pattern = group(disjunction));
    (RE_NONE = 0);
    (RE_I = (1 << 0));
    (RE_G = (1 << 1));
    (RE_M = (1 << 2));
    (evaluateStream = (function(input, flags) {
        return (function() {
            {
                var patternFlags = (flags || RE_NONE),
                    ok = (function(_, __o1) {
                        var __o1 = __o1,
                            __o2 = __o1["userState"],
                            groups = __o2["groups"];
                        return ({
                            "pattern": groups[0],
                            "groups": groups,
                            "flags": flags
                        });
                    }),
                    err = (function(x) {
                        throw x;
                    });
                return parse.parseStream(pattern, input, Data.create(patternFlags, []), ok, err);
            }
        })();
    }));
    (evaluate = (function(input, flags) {
        return evaluateStream(stream.from(input), flags);
    }));
    (exports.pattern = pattern);
    (exports.RE_NONE = RE_NONE);
    (exports.RE_I = RE_I);
    (exports.RE_G = RE_G);
    (exports.RE_M = RE_M);
    (exports.evaluate = evaluate);
    (exports.evaluateStream = evaluateStream);
}))