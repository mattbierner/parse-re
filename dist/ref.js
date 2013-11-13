/*
 * THIS FILE IS AUTO GENERATED from 'lib/ref.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "parse/parse", "parse/lang", "parse/text", "nu/stream"], (function(require, exports, parse, lang, text, __o) {
    "use strict";
    var pattern;
    var parse = parse,
        always = parse["always"],
        attempt = parse["attempt"],
        bind = parse["bind"],
        choice = parse["choice"],
        enumeration = parse["enumeration"],
        many = parse["many"],
        next = parse["next"],
        optional = parse["optional"],
        sequence = parse["sequence"],
        token = parse["token"],
        lang = lang,
        between = lang["between"],
        sepEndBy = lang["sepEndBy"],
        times = lang["times"],
        then = lang["then"],
        text = text,
        character = text["character"],
        characters = text["characters"],
        match = text["match"],
        string = text["string"],
        __o = __o,
        foldl = __o["foldl"];
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
    (pattern = (function() {
        var args = arguments;
        return pattern.apply(null, args);
    }));
    var classRanges = (function() {
        var args = arguments;
        return classRanges.apply(null, args);
    });
    var decimalDigits = characters("0123456789");
    var decimalIntegerLiteral = bind(decimalDigits, (function(f, g) {
        return (function(x) {
            return f(g(x));
        });
    })(always, parseInt));
    var hexDigit = match(/^[0-9a-f]$/i);
    var hexEscapeSequence = next(character("x"), bind(times(2, hexDigit), fromCharCodeParser));
    var unicodeEscapeSequence = next(character("u"), bind(times(4, hexDigit), fromCharCodeParser));
    var decimalEscape = decimalIntegerLiteral;
    var characterClassEscape = characters("dDsSwW");
    var identityEscape = parse.anyToken;
    var controlLetter = characters("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
    var controlEscape = characters("fnrtv");
    var characterEscape = choice(controlEscape, next(character("c"), controlLetter), hexEscapeSequence, unicodeEscapeSequence, identityEscape);
    var classEscape = choice(decimalEscape, character("b"), characterEscape, characterClassEscape);
    var classAtomNoDash = choice(token((function(tok) {
        switch (tok) {
            case "\\":
            case "-":
            case "]":
                return false;
            default:
                return true;
        }
    })), next(character("\\"), classEscape));
    var classAtom = choice(character("-"), classAtomNoDash);
    var nonEmptyClassRangesNoDash = choice(attempt(enumeration(then(classAtomNoDash, character("-")), classAtom, classRanges)), attempt(enumeration(classAtomNoDash, nonEmptyClassRangesNoDash)), classAtom);
    var nonEmptyClassRanges = choice(attempt(enumeration(then(classAtom, character("-")), classAtom, classRanges)), attempt(enumeration(classAtom, nonEmptyClassRangesNoDash)), classAtom);
    (classRanges = choice(nonEmptyClassRanges, always("")));
    var characterClass = between(character("["), character("]"), choice(next(character("^"), classRanges), classRanges));
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
    var atom = choice(patternCharacter, character("."), next(character("\\"), atomEscape), characterClass, between(character("("), character(")"), choice(next(string("?:"), pattern), pattern)));
    var quantifierPrefix = choice(character("*"), character("+"), character("?"), between(character("{"), character("}").sepEndBy(character(","), decimalDigits)));
    var quantifier = enumeration(quantifierPrefix, optional(null, character("?")));
    var assertion = choice(character("^"), character("$"), attempt(string("\\b")), string("\\B"), attempt(between(character("("), character(")"), sequence(string("?="), pattern))), between(character("("), character(")"), sequence(string("?!"), pattern)));
    var term = choice(assertion, enumeration(atom, optional(null, quantifier)));
    (pattern = parse.many(term));
    (exports.pattern = pattern);
}))