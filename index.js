let text = "Happy Teddy Day, my qtypiee! ❤️ I hope we will be with each other just like the two teddies are 🤭";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById('walking-text').innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
    }
}
typeWriter();
