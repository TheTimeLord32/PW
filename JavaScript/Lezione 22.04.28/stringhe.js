"use strict";
let names = ['mario', 'giovanna', 'pippo'];
a.map(item => item.toUpperCase());
a.map(item => "Dr. " + item);
a.map(item => `Dr. ${item}`);

a.reduce(
    function(acc, item) {
        if (item.length > acc[0]) {
            return [item.length, item];
        } else {
            return acc;
        }
    },
    [0, '']
)

a.reduce(
    (acc, item) => item.length > acc[0] ? 
        [item.length, item] : acc,
    [0, '']
)
