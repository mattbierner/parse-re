/*
 * THIS FILE IS AUTO GENERATED from 'lib/match.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "parse/parse", "parse/lang", "parse/text", "nu/stream", "nu/gen"], (function(require, exports, parse, lang, text, stream, gen) {
    "use strict";
    var bof, eof, character, characterRange, anyCharacter, assert, assertNot, choice, choicea, sequence, times, between, atMost, atLeast, exec;
    var parse = parse,
        always = parse["always"],
        attempt = parse["attempt"],
        bind = parse["bind"],
        binds = parse["binds"],
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
    var State = (function(group, endIndex, captures) {
        (this.group = group);
        (this.endIndex = endIndex);
        (this.captures = captures);
    });
    (State.setGroup = (function(s, x) {
        return new(State)(x, s.endIndex, s.captures);
    }));
    (State.setEndIndex = (function(s, x) {
        return new(State)(s.group, x, s.captures);
    }));
    (State.setCaptures = (function(s, x) {
        return new(State)(s.group, s.endIndex, x);
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
    (characterRange = (function(start, end) {
        return text.characters(foldl.bind(null, (function(x, y) {
            return (x + y);
        }), "")(map.bind(null, String.fromCharCode)(gen.range(start.charCodeAt(0), (end.charCodeAt(0) + 1), 1))));
    }));
    (anyCharacter = text.anyCharacter);
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
    })(parse.eager, (function(f, g) {
        return (function(x) {
            return f(g(x));
        });
    })(parse.enumerationa, toArray)));
    (times = lang.times);
    (between = lang.betweenTimes);
    (atMost = (function(max, p) {
        return between(0, max, p);
    }));
    (atLeast = (function(min, p) {
        return between(min, Infinity, p);
    }));
    (exec = (function(pattern, input) {
        return parse.parse(pattern, input, new(State)(0, null, []), (function(x) {
            return x;
        }), (function() {
            return null;
        }));
    }));
    (exports.bof = bof);
    (exports.eof = eof);
    (exports.character = character);
    (exports.characterRange = characterRange);
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