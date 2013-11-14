define(['parse_re/re',
        'parse_re/match'],
function(re,
        match){
    return {
        'module': "Group",
        'tests': [
            ["Simple Single group",
            function(){
                var p = re.evaluate("(a)");
                
                assert.deepEqual(
                    match.exec(p, 'a'),
                    ['a', 'a']);
                
                assert.deepEqual(
                    match.exec(p, 'b'),
                    null);
            }],
            ["Single group top level contains entire group",
            function(){
                var p = re.evaluate("a(b)");
                
                assert.deepEqual(
                    match.exec(p, 'ab'),
                    ['ab', 'b']);
                
                assert.deepEqual(
                    match.exec(p, 'a'),
                    null);
            }],
            
            ["Multiple Group Ordering",
            function(){
                var p = re.evaluate("(a)(b)(c)");
                
                assert.deepEqual(
                    match.exec(p, 'abc'),
                    ['abc', 'a', 'b', 'c']);
            }],
            ["Nested Groups Ordering",
            function(){
                var p = re.evaluate("(a(b(c))d)");
                
                assert.deepEqual(
                    match.exec(p, 'abcd'),
                    ['abcd', 'abcd', 'bc', 'c']);
            }],
            
            ["Non capturing group",
            function(){
                var p = re.evaluate("(a(?:b(c))d)");
                
                assert.deepEqual(
                    match.exec(p, 'abcd'),
                    ['abcd', 'abcd', 'c']);
            }],
            
            ["Back Reference",
            function(){
                var p = re.evaluate("(.)\\1");
                
                assert.deepEqual(
                    match.exec(p, 'aa'),
                    ['aa', 'a']);
                
                assert.deepEqual(
                    match.exec(p, 'ab'),
                    null);
            }],
             
            ["Non existant Back Reference always fails",
            function(){
                var p = re.evaluate("(.)\\2");
                
                assert.deepEqual(
                    match.exec(p, 'aa'),
                    null);
                
                assert.deepEqual(
                    match.exec(p, 'ab'),
                    null);
            }],
            ["Forward Back Reference",
            function(){
                var p = re.evaluate("(.)\\2(.)");
                
                assert.deepEqual(
                    match.exec(p, 'abb'),
                    ['ab', 'a', 'b']);
                
            }],
            ["Forward Back Reference Does not double consume",
            function(){
                var p = re.evaluate("(.)\\2(.)(.)");
                
                assert.deepEqual(
                    match.exec(p, 'abc'),
                    ['abc', 'a', 'b', 'c']);
                
            }],
        ],
    };
});
