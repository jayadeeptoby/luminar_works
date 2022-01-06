var pattern = ["abacc"]
var op = []
for (let i of pattern) {
    if (op.includes(i)) {
        console.log(i, "is recurssive");
        break

    }


    else {
        op.push(i)
    }
}