let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function() {
    netImage();
},5000)

function netImage() {
    count++
    if(count>3) {
        count = 1;
    }

    document.getElementById("radio"+count).checked = true; 

}