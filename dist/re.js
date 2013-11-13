/*
 * THIS FILE IS AUTO GENERATED from 'lib/re.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "parse/parse", "parse/lang", "parse/text", "nu/stream", "nu/gen", "parse_re/match"], (function(require, exports, parse, __o, __o0, __o1, gen, match) {
    "use strict";
    var pattern, evaluate;
    var parse = parse,
        always = parse["always"],
        attempt = parse["attempt"],
        bind = parse["bind"],
        binds = parse["binds"],
        choice = parse["choice"],
        choicea = parse["choicea"],
        either = parse["either"],
        enumeration = parse["enumeration"],
        many = parse["many"],
        many1 = parse["many1"],
        next = parse["next"],
        optional = parse["optional"],
        rec = parse["rec"],
        sequence = parse["sequence"],
        test = parse["test"],
        token = parse["token"],
        __o = __o,
        between = __o["between"],
        sepBy = __o["sepBy"],
        sepEndBy = __o["sepEndBy"],
        times = __o["times"],
        then = __o["then"],
        __o0 = __o0,
        character = __o0["character"],
        characters = __o0["characters"],
        string = __o0["string"],
        __o1 = __o1,
        foldl = __o1["foldl"],
        map = __o1["map"],
        toArray = __o1["toArray"],
        gen = gen,
        match = match;
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
    var disjunction = (function() {
        var args = arguments;
        return disjunction.apply(null, args);
    });
    var classRanges = (function() {
        var args = arguments;
        return classRanges.apply(null, args);
    });
    var decimalDigit = characters("0123456789");
    var decimalDigits = bind(many1(decimalDigits), (function(x) {
        return always(parseInt(join(x)));
    }));
    var decimalIntegerLiteral = bind(decimalDigits, (function(f, g) {
        return (function(x) {
            return f(g(x));
        });
    })(always, parseInt));
    var reChar = (function(f, g) {
        return (function(x) {
            return f(g(x));
        });
    })(always, character);
    var classChar = (function(c) {
        return bind(c, (function(f, g) {
            return (function(x) {
                return f(g(x));
            });
        })(always, match.character));
    });
    var hexDigit = characters("0123456789abcdefABCDEF");
    var hexEscapeSequence = next(character("x"), bind(times(2, hexDigit), fromCharCodeParser));
    var unicodeEscapeSequence = next(character("u"), bind(times(4, hexDigit), fromCharCodeParser));
    var decimalEscape = decimalIntegerLiteral;
    var characterClassEscape = characters("dDsSwW");
    var identityEscape = parse.anyToken;
    var controlLetter = bind(characters("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"), (function(x) {
        return (function() {
            {
                var i = x.charCodeAt(0),
                    j = (i % 32);
                return always(character(String.fromCharCode(j)));
            }
        })();
    }));
    var controlEscape = (function() {
        {
            var map = (function(from, to) {
                return bind(character(from), constant(reChar(to)));
            });
            return choice(map("t", "\t"), map("n", "\n"), map("v", "\u000b"), map("f", "\f"), map("r", "\r"));
        }
    })();
    var characterEscape = choice(controlEscape, next(character("c"), controlLetter), hexEscapeSequence, unicodeEscapeSequence, identityEscape);
    var classEscape = choice(decimalEscape, character("b"), characterEscape, characterClassEscape);
    var classAtomNoDash = choice(token((function(f, g) {
        return (function(x) {
            return f(g(x));
        });
    })((function(x) {
        return !x;
    }), test.bind(null, characters("\\-]")))), next(character("\\"), classEscape));
    var classAtom = choice(character("-"), classAtomNoDash);
    var nonEmptyClassRangesNoDash = rec((function(nonEmptyClassRangesNoDash) {
        return choice(attempt(enumeration(then(classAtomNoDash, character("-")), classAtom, classRanges)), attempt(binds(enumeration(classChar(classAtomNoDash), nonEmptyClassRangesNoDash), (function(f, g) {
            return (function() {
                return f(g.apply(null, arguments));
            });
        })(always, match.choicea))), classChar(classAtom));
    }));
    var nonEmptyClassRanges = (function() {
        {
            var classRange = binds(enumeration(then(classAtom, character("-")), classAtom), (function(f, g) {
                return (function() {
                    return f(g.apply(null, arguments));
                });
            })(always, match.characterRange));
            return choice(attempt(binds(enumeration(classRange, classRanges), (function(f, g) {
                return (function(x) {
                    return f(g(x));
                });
            })(always, match.choicea))), attempt(binds(enumeration(classChar(classAtom), nonEmptyClassRangesNoDash), (function(f, g) {
                return (function() {
                    return f(g.apply(null, arguments));
                });
            })(always, match.choicea))), classChar(classAtom));
        }
    })();
    (classRanges = choice(nonEmptyClassRanges, always("")));
    var characterClass = between(character("["), character("]"), choice(bind(next(character("^"), classRanges), (function(range) {
        return always(token((function(f, g) {
            return (function(x) {
                return f(g(x));
            });
        })((function(x) {
            return !x;
        }), test.bind(null, range))));
    })), bind(classRanges, (function(range) {
        return always(token(test.bind(null, range)));
    }))));
    var atomEscape = choice(decimalEscape, characterEscape, characterClassEscape);
    var patternCharacter = token((function(tok) {
        switch (tok) {
            case "^":
            case "$":
            case "\\":
            case ".":
            case "*":
            case "+":
            case "?":
            case "(":
            case ")":
            case "[":
            case "]":
            case "{":
            case "}":
            case "|":
                return false;
            default:
                return true;
        }
    }));
    var atom = choice(bind(patternCharacter, (function(f, g) {
        return (function(x) {
            return f(g(x));
        });
    })(always, match.character)), next(character("."), always(match.anyCharacter)), bind(next(character("\\"), atomEscape), (function(x) {
        return always(match.character(x));
    })), characterClass, between(character("("), character(")"), choice(next(parse.optional(null, string("?:")), disjunction), disjunction)));
    var quantifierPrefix = choice(next(character("*"), always([0, Infinity, true])), next(character("+"), always([1, Infinity, true])), next(character("?"), always(0, 1, true)), between(character("{"), character("}"), binds(enumeration(next(decimalDigits, optional(null, character(","))), optional(Infinity, decimalDigits)), (function(lower, upper) {
        return always([lower, upper, true]);
    }))));
    var quantifier = binds(enumeration(quantifierPrefix, optional(false, character("?"))), (function(__a, lazy) {
        var min = __a[0],
            max = __a[1];
        return always((lazy ? match.atLeast.bind(null, min) : match.between.bind(null, min, max)));
    }));
    var assertion = choice(next(character("^"), always(match.eof)), next(character("$"), always(match.bof)), attempt(string("\\b")), string("\\B"), between(character("("), character(")"), bind(either(next(attempt(string("?=")), always(match.assert)), next(attempt(string("?!")), always(match.assertNot))), (function(x) {
        return bind(disjunction, (function(f, g) {
            return (function(x) {
                return f(g(x));
            });
        })(always, x));
    }))));
    var term = choice(assertion, binds(enumeration(atom, optional(identity, quantifier)), (function(atom, quantifier) {
        return always(quantifier(atom));
    })));
    var alternative = bind(many(term), (function(f, g) {
        return (function(x) {
            return f(g(x));
        });
    })(always, match.sequence));
    (disjunction = bind(sepBy(character("|"), alternative), (function(f, g) {
        return (function(x) {
            return f(g(x));
        });
    })(always, match.choice)));
    (pattern = disjunction);
    (evaluate = parse.run.bind(null, pattern));
    (exports.pattern = pattern);
    (exports.evaluate = evaluate);
}))