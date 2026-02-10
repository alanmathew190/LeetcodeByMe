let arr = [2, 1, 2, 4, 3];
let stack=[]
let res = new Array(arr.length).fill(-1)

for (i = 0; i < arr.length; i++){
    while (stack.length && arr[i]>arr[stack[stack.length-1]]) {
        let indx = stack.pop()
        res[indx]=arr[i]
    }
    stack.push(i)
}
console.log(res)