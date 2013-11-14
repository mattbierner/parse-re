/*
 * THIS FILE IS AUTO GENERATED from 'lib/match.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "parse/parse", "parse/lang", "parse/text", "nu/stream", "nu/gen"], (function(require, exports, parse, lang, text, stream, gen) {
    "use strict";
    var bof, bol, eof, eol, character, characteri, characterRange, characterRangei, anyCharacter, assert, assertNot, wordBoundary, notWordBoundary, choice, choicea, sequence, times, between, betweenNonGreedy, atMost, atLeast, exec;
    var parse = parse,
        always = parse["always"],
        attempt = parse["attempt"],
        bind = parse["bind"],
        binds = parse["binds"],
        eager = parse["eager"],
        either = parse["either"],
        enumeration = parse["enumeration"],
        fail = parse["fail"],
        lookahead = parse["lookahead"],
        many = parse["many"],
        many1 = parse["many1"],
        next = parse["next"],
        test = parse["test"],
        token = parse["token"],
        lang = lang,
        sepBy = lang["sepBy"],
        sepEndBy = lang["sepEndBy"],
        then = lang["then"],
        text = text,
        characters = text["characters"],
        match = text["match"],
        string = text["string"],
        stream = stream,
        first = stream["first"],
        rest = stream["rest"],
        foldl = stream["foldl"],
        map = stream["map"],
        toArray = stream["toArray"],
        gen = gen;
    var args = (function() {
        var args = arguments;
        return args;
    });
    var join = foldl.bind(null, (function(x, y) {
        return (x + y);
    }), "");
    var contains = (function(a, x) {
        return (Array.prototype.indexOf.call(a, x) !== -1);
    });
    var joinP = (function(p) {
        return bind(p, (function(f, g) {
            return (function(x) {
                return f(g(x));
            });
        })(always, join));
    });
    var toLowerCase = Function.prototype.call.bind(String.prototype.toLowerCase);
    var toUpperCase = Function.prototype.call.bind(String.prototype.toUpperCase);
    var isLineTerminator = (function(x) {
        switch (x) {
            case "\n":
            case "\r":
            case "\u2028":
            case "\u2029":
                return true;
            default:
                return false;
        }
    });
    var isWordChar = (function() {
        {
            var wordChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_";
            return contains.bind(null, wordChars);
        }
    })();
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
    var not = (function(m) {
        return either(next(attempt(m), fail()), always());
    });
    var previous = parse.extract((function(x) {
        return x.previous;
    }));
    var State = (function(input, position, userState, previous) {
        parse.ParserState.call(this, input, position, userState);
        (this.previous = previous);
    });
    (State.prototype = new(parse.ParserState)());
    (State.prototype.next = (function(x) {
        if (!this._next) {
            var s = new(State)(rest(this.input), this.position.increment(x), this.userState, x);
            (this._next = (function(_, m, cok) {
                return cok(x, s, m);
            }));
        }

        return this._next;
    }));
    (State.prototype.setInput = (function(input) {
        return new(State)(input, this.position, this.userState, this.previous);
    }));
    (State.prototype.setPosition = (function(position) {
        return new(State)(this.input, position, this.userState, this.previous);
    }));
    (State.prototype.setUserState = (function(userState) {
        return new(State)(this.input, this.position, userState, this.previous);
    }));
    var Data = (function(group, endIndex, captures) {
        (this.group = group);
        (this.endIndex = endIndex);
        (this.captures = captures);
    });
    (Data.setGroup = (function(s, x) {
        return new(Data)(x, s.endIndex, s.captures);
    }));
    (Data.setEndIndex = (function(s, x) {
        return new(Data)(s.group, x, s.captures);
    }));
    (Data.setCaptures = (function(s, x) {
        return new(Data)(s.group, s.endIndex, x);
    }));
    (bof = bind(parse.getPosition, (function(pos) {
        return ((pos.index === 0) ? always("") : fail());
    })));
    (bol = either(bof, bind(previous, (function(prev) {
        return (isLineTerminator(prev) ? always("") : fail());
    }))));
    (eof = next(parse.eof, always("")));
    (eol = either(eof, next(lookahead(token(isLineTerminator)), always(""))));
    (assert = lookahead);
    (assertNot = (function(f, g) {
        return (function(x) {
            return f(g(x));
        });
    })(assert, not));
    (wordBoundary = bind(previous, (function(p) {
        return assert(token((function(c) {
            return ((isWordChar(c) && !isWordChar(p)) ? always() : fail());
        })));
    })));
    (notWordBoundary = not(wordBoundary));
    (character = text.character);
    (characteri = (function(__a) {
        var c = __a[0];
        return text.characters((toLowerCase(c) + toUpperCase(c)));
    }));
    (characterRange = (function(start, end) {
        return text.characters(join(map.bind(null, String.fromCharCode)(gen.range(start.charCodeAt(0), (end.charCodeAt(0) + 1), 1))));
    }));
    (characterRangei = (function(__a, __a0) {
        var b = __a[0],
            c = __a0[0];
        return either(characterRange(toLowerCase(b), toLowerCase(c)), characterRange(toUpperCase(b), toUpperCase(c)));
    }));
    (anyCharacter = token((function(f, g) {
        return (function(x) {
            return f(g(x));
        });
    })((function(x) {
        return !x;
    }), isLineTerminator)));
    (choice = (function(f, g) {
        return (function(x) {
            return f(g(x));
        });
    })(parse.choicea, (function(f, g) {
        return (function(x) {
            return f(g(x));
        });
    })(toArray, map.bind(null, attempt))));
    (choicea = (function(f, g) {
        return (function() {
            return f(g.apply(null, arguments));
        });
    })(parse.choicea, args));
    (sequence = (function(f, g) {
        return (function(x) {
            return f(g(x));
        });
    })(joinP, (function(f, g) {
        return (function(x) {
            return f(g(x));
        });
    })(parse.enumerationa, toArray)));
    (between = (function(f, g) {
        return (function() {
            return f(g.apply(null, arguments));
        });
    })(joinP, lang.betweenTimes));
    (atMost = (function(max, p) {
        return ((max === 0) ? always(stream.end) : (function(state, m, cok, cerr, eok, eerr) {
            return (function() {
                {
                    var r = parse.trampoline(eok(stream.end, state, m));
                    return (r ? eok(stream.end, state, m) : parse.cons(p, atMost(max, p))(state, m, cok, cerr, eok, eerr));
                }
            })();
        }));
    }));
    (atLeast = (function(f, g) {
        return (function() {
            return f(g.apply(null, arguments));
        });
    })(joinP, lang.times));
    (betweenNonGreedy = (function(f, g) {
        return (function() {
            return f(g.apply(null, arguments));
        });
    })(joinP, (function(min, max, p) {
        return parse.append(lang.times(min, p), atMost((max - min), p));
    })));
    (exec = (function(pattern, input) {
        return parse.parseState(pattern, new(State)(stream.from(input), parse.Position.initial, new(Data)(0, null, []), null), (function(x) {
            return [x];
        }), (function() {
            return null;
        }));
    }));
    (exports.bof = bof);
    (exports.bol = bol);
    (exports.eof = eof);
    (exports.eol = eol);
    (exports.character = character);
    (exports.characteri = characteri);
    (exports.characterRange = characterRange);
    (exports.characterRangei = characterRangei);
    (exports.anyCharacter = anyCharacter);
    (exports.assert = assert);
    (exports.assertNot = assertNot);
    (exports.wordBoundary = wordBoundary);
    (exports.notWordBoundary = notWordBoundary);
    (exports.choice = choice);
    (exports.choicea = choicea);
    (exports.sequence = sequence);
    (exports.times = times);
    (exports.between = between);
    (exports.betweenNonGreedy = betweenNonGreedy);
    (exports.atMost = atMost);
    (exports.atLeast = atLeast);
    (exports.exec = exec);
}))