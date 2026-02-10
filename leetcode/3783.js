var mirrorDistance = function (n) {
    let newN =Number( n.toString().split("").reverse().join(""))
let diff=Math.abs(n-newN)
    return diff
};
console.log(mirrorDistance(25))
