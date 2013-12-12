/*
 * THIS FILE IS AUTO GENERATED from 'lib/match.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "amulet/record", "parse/parse", "parse/lang", "parse/text", "nu/stream", "nu/gen"], (
    function(require, exports, record, parse, __o, text, stream, __o0) {
        "use strict";
        var notToken, character, characteri, characterRange, characterRangei, anyCharacter, digit, nonDigit, space,
                nonSpace, word, nonWord, assert, assertNot, wordBoundary, notWordBoundary, bof, bol, eof, eol,
                nothing, anys, any, chains, between, betweenNonGreedy, atMost, group, backReference, matchStream,
                match, execStream, exec;
        var record = record,
            parse = parse,
            always = parse["always"],
            attempt = parse["attempt"],
            bind = parse["bind"],
            choice = parse["choice"],
            choices = parse["choices"],
            either = parse["either"],
            enumerations = parse["enumerations"],
            getState = parse["getState"],
            fail = parse["fail"],
            lookahead = parse["lookahead"],
            modifyState = parse["modifyState"],
            next = parse["next"],
            token = parse["token"],
            __o = __o,
            betweenTimes = __o["betweenTimes"],
            times = __o["times"],
            text = text,
            stream = stream,
            isEmpty = stream["isEmpty"],
            foldl = stream["foldl"],
            map = stream["map"],
            rest = stream["rest"],
            NIL = stream["end"],
            __o0 = __o0,
            range = __o0["range"];
        var toLowerCase = Function.prototype.call.bind(String.prototype.toLowerCase);
        var toUpperCase = Function.prototype.call.bind(String.prototype.toUpperCase);
        var indexOf = Function.prototype.call.bind(Array.prototype.indexOf);
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
        var contains = (function(f, g) {
            return (function() {
                return f(g.apply(null, arguments));
            });
        })((function(x, y) {
                return (x !== y);
            })
            .bind(null, -1), indexOf);
        var has = (function(o, i) {
            return (o[i] !== undefined);
        });
        var fromCharCode = (function(x) {
            return String.fromCharCode(x);
        });
        var isLineTerminator = (function() {
            {
                var lineTerminators = "\u2029\u2028\r\n";
                return contains.bind(null, lineTerminators);
            }
        })
            .call(this);
        var isWordChar = (function() {
            {
                var wordChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_";
                return contains.bind(null, wordChars);
            }
        })
            .call(this);
        var Position = (function(position, previous) {
            (this.position = position);
            (this.previous = previous);
        });
        (Position.prototype = new(parse.Position)());
        (Position.initial = new(Position)(parse.Position.initial, null));
        (Position.prototype.increment = (function(tok) {
            return new(Position)(this.position.increment(tok), tok);
        }));
        (Position.prototype.compare = (function(pos) {
            return this.position.compare(pos.position);
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
        })(String.fromCharCode, (function(f, g) {
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
        var getPosition = bind(parse.getPosition, (function(pos) {
            return always(pos.position);
        }));
        var previous = parse.extract((function(x) {
            return x.position.previous;
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
        var not = (function(m) {
            return either(next(m, fail()), always());
        });
        (assert = (function(p) {
            return next(lookahead(p), empty);
        }));
        (assertNot = (function(f, g) {
            return (function(x) {
                return f(g(x));
            });
        })(assert, not));
        (bof = test(getPosition, (function(pos) {
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
            return bind(getState, (function(__o1) {
                var __o1 = __o1,
                    captures = __o1["captures"],
                    groups = __o1["groups"];
                return (has(captures, i) ? text.string(captures[i]) : (has(groups, i) ? empty :
                    fail()));
            }));
        }));
        (character = text.character);
        (characteri = (function(c) {
            return either(character(toLowerCase(c)), character(toUpperCase(c)));
        }));
        (characterRange = (function(f, g) {
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
        })(map.bind(null, fromCharCode), (function(start, end) {
            return range(start.charCodeAt(0), (end.charCodeAt(0) + 1), 1);
        })))));
        (characterRangei = (function(b, c) {
            return choice(characterRange(b, c), characterRange(toLowerCase(b), toLowerCase(c)),
                characterRange(toUpperCase(b), toUpperCase(c)));
        }));
        (anyCharacter = token((function(f, g) {
            return (function(x) {
                return f(g(x));
            });
        })((function(x) {
            return !x;
        }), isLineTerminator)));
        (notToken = (function(p) {
            return token((function(f, g) {
                return (function(x) {
                    return f(g(x));
                });
            })((function(x) {
                return !x;
            }), parse.test.bind(null, p)));
        }));
        (digit = characterRange("0", "9"));
        (nonDigit = notToken(digit));
        (space = text.characters("\t\u000b\f  ﻿\n\r\u2028\u2029"));
        (nonSpace = notToken(space));
        (word = text.characters("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_"));
        (nonWord = notToken(word));
        (nothing = fail());
        (anys = (function(f, g) {
            return (function(x) {
                return f(g(x));
            });
        })(choices, map.bind(null, attempt)));
        (any = (function(f, g) {
            return (function() {
                return f(g.apply(null, arguments));
            });
        })(anys, (function(f, g) {
            return (function() {
                return f(g.apply(null, arguments));
            });
        })(stream.from, args)));
        (chains = (function(f, g) {
            return (function(x) {
                return f(g(x));
            });
        })(joinP, enumerations));
        (atMost = (function(max, p) {
            return ((max === 0) ? always(NIL) : (function(state, m, cok, cerr, eok, eerr) {
                return (function() {
                    {
                        var r = parse.trampoline(eok(NIL, state, m));
                        return (r ? r : parse.cons(p, atMost(max, p))(state, m, cok, cerr, eok,
                            eerr));
                    }
                })
                    .call(this);
            }));
        }));
        (between = (function(f, g) {
            return (function() {
                return f(g.apply(null, arguments));
            });
        })(joinP, betweenTimes));
        (betweenNonGreedy = (function(f, g) {
            return (function() {
                return f(g.apply(null, arguments));
            });
        })(joinP, (function(min, max, p) {
            return parse.append(times(min, p), atMost((max - min), p));
        })));
        (matchStream = (function(__o1, input) {
            var __o1 = __o1,
                pattern = __o1["pattern"],
                groups = __o1["groups"];
            return parse.parseState(pattern, new(parse.ParserState)(input, Position.initial, Data.create(
                groups, new(Array)(groups.length))), (function(_, s) {
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
        (exports.notToken = notToken);
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
        (exports.nothing = nothing);
        (exports.anys = anys);
        (exports.any = any);
        (exports.chains = chains);
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