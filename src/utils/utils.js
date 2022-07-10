export const numToHex =(num)=> {
    let hex= num.toString(16)
    return hex.length==1 ? "0" + hex : hex;
};

const rgbToHex =(r,g,b)=>{
    return "#" +numToHex(r) + numToHex(g) + numToHex(b)
}

export default rgbToHex;