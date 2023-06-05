function eqCheck(a, b) {
	return a.length === b.length && a.every((v, i) => v === b[i])
}

let a = [1,2]
let b = [2,3]
let c = [1,2]

console.log(eqCheck(a,b)); // false
console.log(eqCheck(a,c)); // true
