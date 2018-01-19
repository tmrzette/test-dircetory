document.addEventListener ('DOMContentLoaded', function () {
    let button = document.createElement ('button') ;
    button.innerText = 'Sing!' ;
    document.body.appendChild (button);

    button.addEventListener ('click', function () {
        let h1 = document.createElement ('h1');
        h1.innerText = '' ;
        document.body.appendChild (h1);
    })
})




















let friends = ["Jerrod", "James", "Dante", "Mary", "Aaron"];

for (let u =0; u < friends.length; u++) {
    for (s = 99; s > 0; s--) {
        if (s > 1) {
            console.log(s + "lines of code in the file, " + s + "lines of code; " + friends[u] + "strikes one out, clears it all out, " + (s - 1)+ "lines of code in the file")
        } else {
            console.log(s + "line of code in te file, " + s + "line of code; " + friends[u] + "strikes one out, clears it all out, no more lines of code in the file")
        }
        
    }
    
}
