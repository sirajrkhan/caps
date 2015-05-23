# REMOVE DUPLICATES FROM JAVASCRIPT ARRAY

function removeDuplicate(array) {
    for( var i = 0, single = []; i < array.length; i++ ) {
        if( array.indexOf( array[i], array.indexOf( array[i] ) + 1 ) == -1 ) single.push( array[i] );    
    };
    return single;
};
