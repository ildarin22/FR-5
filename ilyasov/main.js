function calc_1(op, a, b) {
    switch(op) {
        case 'add':
            return  a+b;
        case 'multi':
            return a*b;
        case 'sub':
            return a-b;
    }
    
}

function calc_2(op, a, b) {
    if (op=='add') return a+b;
    else if (op=='multu') return a*b;
    else if (op=='sub') return a-b;
}