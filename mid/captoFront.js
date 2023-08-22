function capToFornt(str){
    const upper =str.replace(/[^A-Z]/g,"");
    const lower =str.replace(/[A-Z]/g,"");
    return upper + lower;
}
console.log(capToFornt("nApPy"));
console.log(capToFornt("moveMENT"));
console.log(capToFornt("shOrtCAKE"));