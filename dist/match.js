/*
 * THIS FILE IS AUTO GENERATED from 'lib/match.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "parse/parse", "parse/lang", "parse/text", "nu/stream", "nu/gen"], (function(require, exports, parse, lang, text, stream, gen) {
    "use strict";
    var bof, eof, character, characteri, characterRange, characterRangei, anyCharacter, assert, assertNot, choice, choicea, sequence, times, between, atMost, atLeast, exec;
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
        return ((pos === 0) ? always() : fail());
    })));
    (eof = parse.eof);
    (assert = lookahead);
    (assertNot = (function(f, g) {
        return (function(x) {
            return f(g(x));
        });
    })(assert, not));
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
        return between(0, max, p);
    }));
    (atLeast = (function(f, g) {
        return (function() {
            return f(g.apply(null, arguments));
        });
    })(joinP, lang.times));
    (exec = (function(pattern, input) {
        return parse.parseState(pattern, new(State)(stream.from(input), parse.Position.initial, new(Data)(0, null, []), null), (function(x) {
            return [x];
        }), (function() {
            return null;
        }));
    }));
    (exports.bof = bof);
    (exports.eof = eof);
    (exports.character = character);
    (exports.characteri = characteri);
    (exports.characterRange = characterRange);
    (exports.characterRangei = characterRangei);
    (exports.anyCharacter = anyCharacter);
    (exports.assert = assert);
    (exports.assertNot = assertNot);
    (exports.choice = choice);
    (exports.choicea = choicea);
    (exports.sequence = sequence);
    (exports.times = times);
    (exports.between = between);
    (exports.atMost = atMost);
    (exports.atLeast = atLeast);
    (exports.exec = exec);
}))