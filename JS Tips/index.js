
// consditionlly add properties to Object 

const isPermiumUser = true ;

const user = {
    name: 'Shreyas',
    ...(isPermiumUser && {discount: '10%'})
}

