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
                    match.match(p, 'a'),
                    ['a', 'a']);
                
                assert.deepEqual(
                    match.match(p, 'b'),
                    null);
            }],
            ["Single group top level contains entire group",
            function(){
                var p = re.evaluate("a(b)");
                
                assert.deepEqual(
                    match.match(p, 'ab'),
                    ['ab', 'b']);
                
                assert.deepEqual(
                    match.match(p, 'a'),
                    null);
            }],
            
            ["Multiple Group Ordering",
            function(){
                var p = re.evaluate("(a)(b)(c)");
                
                assert.deepEqual(
                    match.match(p, 'abc'),
                    ['abc', 'a', 'b', 'c']);
            }],
            ["Nested Groups Ordering",
            function(){
                var p = re.evaluate("(a(b(c))d)");
                
                assert.deepEqual(
                    match.match(p, 'abcd'),
                    ['abcd', 'abcd', 'bc', 'c']);
            }],
            
            ["Non capturing group",
            function(){
                var p = re.evaluate("(a(?:b(c))d)");
                
                assert.deepEqual(
                    match.match(p, 'abcd'),
                    ['abcd', 'abcd', 'c']);
            }],
            
            ["Back Reference",
            function(){
                var p = re.evaluate("(.)\\1");
                
                assert.deepEqual(
                    match.match(p, 'aa'),
                    ['aa', 'a']);
                
                assert.deepEqual(
                    match.match(p, 'ab'),
                    null);
            }],
             
            ["Non existant Back Reference always fails",
            function(){
                var p = re.evaluate("(.)\\2");
                
                assert.deepEqual(
                    match.match(p, 'aa'),
                    null);
                
                assert.deepEqual(
                    match.match(p, 'ab'),
                    null);
            }],
            ["Forward Back Reference is empty",
            function(){
                var p = re.evaluate("(.)\\2(.)(.)");
                
                assert.deepEqual(
                    match.match(p, 'abc'),
                    ['abc', 'a', 'b', 'c']);
            }],
             ["Forward Back Reference makes self empty",
            function(){
                var p = re.evaluate("(.)(\\2)(.)");
                
                assert.deepEqual(
                    match.match(p, 'abc'),
                    ['ab', 'a', '', 'b']);
                
            }],
            ["Back Reference to self is nop",
            function(){
                var p = re.evaluate("(.\\1.)");
                
                assert.deepEqual(
                    match.match(p, 'ab'),
                    ['ab', 'ab']);
            }],
            
            ["Group Quantifier",
            function(){
                var p = re.evaluate("(.)+");
                
                assert.deepEqual(
                    match.match(p, 'ab'),
                    ['ab', 'b']);
            }],
        ],
    };
});
