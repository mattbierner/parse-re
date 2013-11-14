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
                    match.exec(p, 'A'),
                    null);
                
                assert.deepEqual(
                    match.exec(p, 'b'),
                    null);
            }],


        ],
    };
});
