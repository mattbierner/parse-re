define(['parse_re/re',
        'parse_re/match'],
function(re,
        match){
    return {
        'module': "Atom",
        'tests': [
              ["Noop",
            function(){
                var p = re.evaluate("");
                
                var r = match.exec(p, '');
                assert.deepEqual(r, ['']);
            }],

            ["Simple Atom",
            function(){
                var p = re.evaluate("a");
                
                var r = match.exec(p, 'a');
                assert.deepEqual(r, ['a']);
                
                var r2 = match.exec(p, 'aX');
                assert.deepEqual(r2, ['a']);
            }],
            ["Exec Atom",
            function(){
                var p = re.evaluate("a");
                
                var r = match.exec(p, 'bba');
                assert.deepEqual(r, ['a']);
                
                var r2 = match.exec(p, 'aX');
                assert.deepEqual(r2, ['a']);
            }],
            ["Simple Atom I",
            function(){
                var p = re.evaluate("a", re.RE_I);
                
                assert.deepEqual(
                    match.exec(p, 'a'),
                    ['a']);
                
                assert.deepEqual(
                    match.exec(p, 'A'),
                    ['A']);
                
                var r2 = match.exec(p, 'aX');
                assert.deepEqual(r2, ['a']);
            }],
            ["Simple Multiple Atoms",
            function(){
                var p = re.evaluate("ab");
                
                assert.deepEqual(
                    match.exec(p, 'ab'),
                    ['ab']);
                
                assert.deepEqual(
                    match.exec(p, 'a'),
                    null);
            }],
            
            ["Any Atom",
            function(){
                var p = re.evaluate(".", re.RE_I);
                
                for (var i = 32 ; i < 127; ++i) {
                    var c = String.fromCharCode(i);
                    assert.deepEqual(
                        match.exec(p, c),
                        [c]);
                }
            }],
        ],
    };
});
