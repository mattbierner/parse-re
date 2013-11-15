define(['parse_re/re',
        'parse_re/match'],
function(re,
        match){
    return {
        'module': "Character Class",
        'tests': [
           ["Empty always fails",
            function(){
                var p = re.evaluate("[]");
                
                assert.deepEqual(
                    match.exec(p, ''),
                    null);
                
                assert.deepEqual(
                    match.exec(p, 'a'),
                    null);
                
                assert.deepEqual(
                    match.exec(p, '[]'),
                    null);
            }],
            ["Simple Single Class",
            function(){
                var p = re.evaluate("[a]");
                
                assert.deepEqual(
                    match.exec(p, 'a'),
                    ['a']);
                
                assert.deepEqual(
                    match.exec(p, 'A'),
                    null);
                
                assert.deepEqual(
                    match.exec(p, 'b'),
                    null);
            }],
            ["Space",
            function(){
                var p = re.evaluate("[ ]");
                
                assert.deepEqual(
                    match.exec(p, 'a'),
                    null);
                
                assert.deepEqual(
                    match.exec(p, ' '),
                    [' ']);
            }],
            ["Simple Single Class I",
            function(){
                var p = re.evaluate("[a]", re.RE_I);
                
                assert.deepEqual(
                    match.exec(p, 'a'),
                    ['a']);
                
                assert.deepEqual(
                    match.exec(p, 'A'),
                    ['A']);
            }],
            ["Leading Dash Class",
            function(){
                var p = re.evaluate("[-]");
                
                assert.deepEqual(
                    match.exec(p, 'a'),
                    null);
                
                assert.deepEqual(
                    match.exec(p, '-'),
                    ['-']);
            }],
            
            ["Leading Dash Class",
            function(){
                var p = re.evaluate("[-a]");
                
                assert.deepEqual(
                    match.exec(p, 'a'),
                    ['a']);
                
                assert.deepEqual(
                    match.exec(p, '-'),
                    ['-']);
            }],
            
            ["Simple Multi Char class Class",
            function(){
                var p = re.evaluate("[abc]");
                
                var r = match.exec(p, 'a');
                assert.deepEqual(r, ['a']);
                
                var r2 = match.exec(p, 'b');
                assert.deepEqual(r2, ['b']);
                
                var r3 = match.exec(p, 'c');
                assert.deepEqual(r3, ['c']);
                
                var rf = match.exec(p, 'd');
                assert.deepEqual(rf, null);
            }],
            
            ["Simple negated",
            function(){
                var p = re.evaluate("[^abc]");
                
                assert.deepEqual(
                    match.exec(p, 'a'),
                    null);
                
                assert.deepEqual(
                    match.exec(p, 'b'),
                    null);
                
                assert.deepEqual(
                    match.exec(p, 'c'),
                    null);
                
                assert.deepEqual(
                    match.exec(p, 'd'),
                    ['d']);
            }],
            
            ["Simple range",
            function(){
                var p = re.evaluate("[a-c]");
                
                assert.deepEqual(
                    match.exec(p, 'a'),
                    ['a']);
                
                assert.deepEqual(
                    match.exec(p, 'b'),
                    ['b']);
                
                assert.deepEqual(
                    match.exec(p, 'c'),
                    ['c']);
                
                assert.deepEqual(
                    match.exec(p, 'd'),
                    null);
                
                assert.deepEqual(
                    match.exec(p, 'e'),
                    null);
                
                assert.deepEqual(
                    match.exec(p, 'A'),
                    null);
            }],
             
            ["Simple range I",
            function(){
                var p = re.evaluate("[a-c]", re.RE_I);
                
                assert.deepEqual(
                    match.exec(p, 'a'),
                    ['a']);
                
                assert.deepEqual(
                    match.exec(p, 'b'),
                    ['b']);
                
                assert.deepEqual(
                    match.exec(p, 'c'),
                    ['c']);
                
                assert.deepEqual(
                    match.exec(p, 'd'),
                    null);
                
                assert.deepEqual(
                    match.exec(p, 'A'),
                    ['A']);
                
                assert.deepEqual(
                    match.exec(p, 'C'),
                    ['C']);
                
                assert.deepEqual(
                    match.exec(p, 'D'),
                    null);
            }],
            ["Range I Does not intro out of range chars",
            function(){
                var p = re.evaluate("[E-F]", re.RE_I);
                
                assert.deepEqual(
                    match.exec(p, 'E'),
                    ['E']);
                
                assert.deepEqual(
                    match.exec(p, 'F'),
                    ['F']);
                
                assert.deepEqual(
                    match.exec(p, '['),
                    null);
                
                assert.deepEqual(
                    match.exec(p, 'e'),
                    ['e']);
                
                assert.deepEqual(
                    match.exec(p, 'f'),
                    ['f']);
            }],
            ["Range I uses original range, not case insensitive one",
            function(){
                var p = re.evaluate("[E-f]", re.RE_I);
                
                assert.deepEqual(
                    match.exec(p, 'E'),
                    ['E']);
                
                assert.deepEqual(
                    match.exec(p, 'F'),
                    ['F']);
                
                assert.deepEqual(
                    match.exec(p, '['),
                    ['[']);
                
                assert.deepEqual(
                    match.exec(p, '`'),
                    ['`']);
                
                assert.deepEqual(
                    match.exec(p, 'e'),
                    ['e']);
                
                assert.deepEqual(
                    match.exec(p, 'f'),
                    ['f']);
            }],
            
            ["Being dash range",
            function(){
                var p = re.evaluate("[--/a]");
                
                assert.deepEqual(
                    match.exec(p, 'a'),
                    ['a']);
                
                assert.deepEqual(
                    match.exec(p, '-'),
                    ['-']);
                
                assert.deepEqual(
                    match.exec(p, '.'),
                    ['.']);
                
                assert.deepEqual(
                    match.exec(p, '/'),
                    ['/']);
                
                assert.deepEqual(
                    match.exec(p, 'A'),
                    null);
            }],
            ["False range",
            function(){
                var p = re.evaluate("[a-]");
                
                assert.deepEqual(
                    match.exec(p, 'a'),
                    ['a']);
                
                assert.deepEqual(
                    match.exec(p, '-'),
                    ['-']);
                
                assert.deepEqual(
                    match.exec(p, 'b'),
                    null);
            }],
            ["End Range Dash range",
            function(){
                var p = re.evaluate("[+--]");
                
                assert.deepEqual(
                    match.exec(p, '+'),
                    ['+']);
                
                assert.deepEqual(
                    match.exec(p, ','),
                    [',']);
                
                assert.deepEqual(
                    match.exec(p, '-'),
                    ['-']);
                
                assert.deepEqual(
                    match.exec(p, 'd'),
                    null);
                
                assert.deepEqual(
                    match.exec(p, 'A'),
                    null);
            }],
            ["Trailing Dash range Char class Class",
            function(){
                var p = re.evaluate("[a-b-]");
                
                assert.deepEqual(
                    match.exec(p, 'a'),
                    ['a']);
                
                assert.deepEqual(
                    match.exec(p, 'b'),
                    ['b']);
                
                assert.deepEqual(
                    match.exec(p, '-'),
                    ['-']);
                
                assert.deepEqual(
                    match.exec(p, 'd'),
                    null);
                
                assert.deepEqual(
                    match.exec(p, 'A'),
                    null);
            }],

            ["Escaped Character Class Range parses to choice",
            function(){
                var p = re.evaluate("[\\w- ]");
                
                assert.deepEqual(
                    match.exec(p, ' '),
                    [' ']);
                
                assert.deepEqual(
                    match.exec(p, '-'),
                    ['-']);
                
                assert.deepEqual(
                    match.exec(p, '\n'),
                    null);
            }],
            
            ["Literal \\",
            function(){
                var p = re.evaluate("[\\\\]");
                
                assert.deepEqual(
                    match.exec(p, '\\'),
                    ['\\']);
            }],
             ["Literal -",
            function(){
                var p = re.evaluate("[a\\-c]");
                
                assert.deepEqual(
                    match.exec(p, 'a'),
                    ['a']);
                
                assert.deepEqual(
                    match.exec(p, 'b'),
                    null);
                
                assert.deepEqual(
                    match.exec(p, 'c'),
                    ['c']);
                
                assert.deepEqual(
                    match.exec(p, '-'),
                    ['-']);
            }],
            
            ["Literal \\b is not word bounary",
            function(){
                var p = re.evaluate("[\\b]");
                
                assert.deepEqual(
                    match.exec(p, '\u0008'),
                    ['\u0008']);
            }],
            ["Escaped numbers are not backreferends but code points",
            function(){
                var p = re.evaluate("[\\1]");
                
                assert.deepEqual(
                    match.exec(p, '\u0001'),
                    ['\u0001']);
                
                assert.deepEqual(
                    match.exec(p, '1'),
                    null);
            }],
            
        ],
    };
});
