function insert(num){
    document.form.textview.value = document.form.textview.value+num
}

function jumlah(){
    var total = document.form.textview.value;
    if(total){
    document.form.textview.value = eval(total)
    }
}

function clean(){
    document.form.textview.value = "";
}

function back(){
    var total =  document.form.textview.value;
    document.form.textview.value = total.substring(0,total.length-1);

}