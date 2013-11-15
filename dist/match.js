/*
 * THIS FILE IS AUTO GENERATED from 'lib/match.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "amulet/record", "parse/parse", "parse/lang", "parse/text", "nu/stream", "nu/gen"], (function(require, exports, record, parse, lang, text, stream, gen) {
    "use strict";
    var character, characteri, characterRange, characterRangei, anyCharacter, digit, nonDigit, space, nonSpace, word, nonWord, assert, assertNot, wordBoundary, notWordBoundary, bof, bol, eof, eol, choice, choicea, sequence, between, betweenNonGreedy, atMost, group, backReference, matchStream, match, execStream, exec;
    var record = record,
        parse = parse,
        always = parse["always"],
        attempt = parse["attempt"],
        bind = parse["bind"],
        binds = parse["binds"],
        eager = parse["eager"],
        either = parse["either"],
        enumeration = parse["enumeration"],
        getState = parse["getState"],
        modifyState = parse["modifyState"],
        fail = parse["fail"],
        lookahead = parse["lookahead"],
        many = parse["many"],
        many1 = parse["many1"],
        next = parse["next"],
        token = parse["token"],
        lang = lang,
        sepBy = lang["sepBy"],
        sepEndBy = lang["sepEndBy"],
        then = lang["then"],
        text = text,
        characters = text["characters"],
        string = text["string"],
        stream = stream,
        first = stream["first"],
        rest = stream["rest"],
        isEmpty = stream["isEmpty"],
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
    var copy = (function(arr) {
        var arr = arr,
            length = arr["length"];
        var out = [];
        for (var i = 0;
            (i < length);
            (i = (i + 1)))(out[i] = arr[i]);

        return out;
    });
    var contains = (function(a, x) {
        return (Array.prototype.indexOf.call(a, x) !== -1);
    });
    var has = (function(o, i) {
        return Object.hasOwnProperty.call(o, i);
    });
    var toLowerCase = Function.prototype.call.bind(String.prototype.toLowerCase);
    var toUpperCase = Function.prototype.call.bind(String.prototype.toUpperCase);
    var fromCharCode = (function(x) {
        return String.fromCharCode(x);
    });
    var isLineTerminator = (function() {
        {
            var lineTerminators = "\u2029\u2028\r\n";
            return contains.bind(null, lineTerminators);
        }
    })();
    var isWordChar = (function() {
        {
            var wordChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_";
            return contains.bind(null, wordChars);
        }
    })();
    var State = record.declare(new(parse.ParserState)(), ["input", "position", "userState", "previous"]);
    (State.prototype.next = (function(x) {
        if (!this._next) {
            var s = State.create(rest(this.input), this.position.increment(x), this.userState, x);
            (this._next = (function(_, m, cok) {
                return cok(x, s, m);
            }));
        }

        return this._next;
    }));
    var Data = record.declare(null, ["groups", "captures"]);
    (Data.setCapture = (function(s, i, x) {
        var s = s,
            captures = s["captures"];
        var c = copy(captures);
        (c[i] = x);
        return Data.setCaptures(s, c);
    }));
    var empty = always("");
    var fromCharCodeParser = (function(f, g) {
        return (function(x) {
            return f(g(x));
        });
    })(always, (function(f, g) {
        return (function(x) {
            return f(g(x));
        });
    })(fromCharCode, (function(f, g) {
        return (function(x) {
            return f(g(x));
        });
    })((function(x) {
        return parseInt(x, 16);
    }), join)));
    var joinP = (function(p) {
        return bind(p, (function(f, g) {
            return (function(x) {
                return f(g(x));
            });
        })(always, join));
    });
    var not = (function(m) {
        return either(next(attempt(m), fail()), always());
    });
    var previous = parse.extract((function(x) {
        return x.previous;
    }));
    var setCapture = (function(i, x) {
        return modifyState((function(s) {
            return Data.setCapture(s, i, x);
        }));
    });
    var test = (function(p, f) {
        return bind(p, (function(x) {
            return (f(x) ? empty : fail());
        }));
    });
    (assert = (function(p) {
        return next(lookahead(p), empty);
    }));
    (assertNot = (function(f, g) {
        return (function(x) {
            return f(g(x));
        });
    })(assert, not));
    (bof = test(parse.getPosition, (function(pos) {
        return (pos.index === 0);
    })));
    (bol = either(bof, test(previous, isLineTerminator)));
    (eof = assert(parse.eof));
    (eol = either(eof, assert(token(isLineTerminator))));
    (wordBoundary = either(eof, assert(bind(previous, (function(p) {
        return token((function(c) {
            return (isWordChar(c) && !isWordChar(p));
        }));
    })))));
    (notWordBoundary = not(wordBoundary));
    (group = (function(p, i) {
        return next(setCapture(i, ""), bind(p, (function(x) {
            return next(setCapture(i, x), always(x));
        })));
    }));
    (backReference = (function(i) {
        return bind(getState, (function(__o) {
            var __o = __o,
                captures = __o["captures"],
                groups = __o["groups"];
            return (has(captures, i) ? text.string(captures[i]) : next((groups[i] ? parse.lookahead(groups[i]) : fail()), empty));
        }));
    }));
    (character = text.character);
    (characteri = (function(c) {
        return either(character(toLowerCase(c)), character(toUpperCase(c)));
    }));
    (characterRange = (function() {
        {
            var range = (function(start, end) {
                return gen.range(start.charCodeAt(0), (end.charCodeAt(0) + 1), 1);
            });
            return (function(f, g) {
                return (function() {
                    return f(g.apply(null, arguments));
                });
            })(text.characters, (function(f, g) {
                return (function() {
                    return f(g.apply(null, arguments));
                });
            })(join, (function(f, g) {
                return (function() {
                    return f(g.apply(null, arguments));
                });
            })(map.bind(null, fromCharCode), range)));
        }
    })());
    (characterRangei = (function(b, c) {
        return either(characterRange(toLowerCase(b), toLowerCase(c)), characterRange(toUpperCase(b), toUpperCase(c)));
    }));
    (anyCharacter = token((function(f, g) {
        return (function(x) {
            return f(g(x));
        });
    })((function(x) {
        return !x;
    }), isLineTerminator)));
    (digit = characterRange("0", "9"));
    (nonDigit = not(digit));
    (space = text.characters("\t\u000b\f  ﻿\n\r\u2028\u2029"));
    (nonSpace = not(space));
    (word = text.characters("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_"));
    (nonWord = not(word));
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
    (atMost = (function(max, p) {
        return ((max === 0) ? always(stream.end) : (function(state, m, cok, cerr, eok, eerr) {
            return (function() {
                {
                    var r = parse.trampoline(eok(stream.end, state, m));
                    return (r ? r : parse.cons(p, atMost(max, p))(state, m, cok, cerr, eok, eerr));
                }
            })();
        }));
    }));
    (between = (function(f, g) {
        return (function() {
            return f(g.apply(null, arguments));
        });
    })(joinP, lang.betweenTimes));
    (betweenNonGreedy = (function(f, g) {
        return (function() {
            return f(g.apply(null, arguments));
        });
    })(joinP, (function(min, max, p) {
        return parse.append(lang.times(min, p), atMost((max - min), p));
    })));
    (matchStream = (function(pattern, input) {
        return parse.parseState(pattern.pattern, State.create(input, parse.Position.initial, Data.create(pattern.groups, []), null), (function(_, s) {
            return s.userState.captures;
        }), (function() {
            return null;
        }));
    }));
    (match = (function(pattern, input) {
        return matchStream(pattern, stream.from(input));
    }));
    (execStream = (function(pattern, input) {
        var result;
        var feed = input;
        do {
            (result = matchStream(pattern, feed));
            if (isEmpty(feed)) break;

            (feed = rest(feed));
        }
        while (!result);
        return result;
    }));
    (exec = (function(pattern, input) {
        return execStream(pattern, stream.from(input));
    }));
    (exports.character = character);
    (exports.characteri = characteri);
    (exports.characterRange = characterRange);
    (exports.characterRangei = characterRangei);
    (exports.anyCharacter = anyCharacter);
    (exports.digit = digit);
    (exports.nonDigit = nonDigit);
    (exports.space = space);
    (exports.nonSpace = nonSpace);
    (exports.word = word);
    (exports.nonWord = nonWord);
    (exports.assert = assert);
    (exports.assertNot = assertNot);
    (exports.wordBoundary = wordBoundary);
    (exports.notWordBoundary = notWordBoundary);
    (exports.bof = bof);
    (exports.bol = bol);
    (exports.eof = eof);
    (exports.eol = eol);
    (exports.choice = choice);
    (exports.choicea = choicea);
    (exports.sequence = sequence);
    (exports.between = between);
    (exports.betweenNonGreedy = betweenNonGreedy);
    (exports.atMost = atMost);
    (exports.group = group);
    (exports.backReference = backReference);
    (exports.matchStream = matchStream);
    (exports.match = match);
    (exports.execStream = execStream);
    (exports.exec = exec);
}))