/* 
Description:

Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.*/

// return masked string
function maskify(cc) {
    if (cc.length > 4 ) {
        cc = "#".repeat(cc.slice(0, cc.length - 4).length) + cc.slice(cc.length - 4)
    }
    return cc
}


console.log(maskify('4556364607935616'));
console.log(maskify('1'));
console.log(maskify('11111'));

