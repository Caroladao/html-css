var inputIsOpen = false, menuOpen = false;

function abreMenu(){
    var menu = document.getElementById('nav-menu');
    var btn = document.getElementById('img-header1');
    console.log("btn: " +btn);
    console.log("btn: " +menu);

    // Se tiver Aberto ele fecha, se tiver fechado ele abre
    if(menuOpen){
        menu.style.display = "none";
        menuOpen = false;
    }else{
        menu.style.display = "block";
        menuOpen = true;
    }
    //clicar fora fecha
    window.onclick = function(event) {
        if (event.target == menu) {
            menu.style.display = "none";
        }
    }
}
function abreBox(){
    // pega as info
    var ctt = document.getElementById('exibir-ctt');

    // Pega o box que abre as info
    var box = document.getElementById("boxx");

    // Pega o btn ou imagem que fecha as info
    var sair = document.getElementById("img-sair");

    // Quando clicar, abre as informações
    box.onclick = function() {
        ctt.style.display = "block";
    }

    // Quando clicar para fechar, ele fecha
    sair.onclick = function() {
        ctt.style.display = "none";
    }

    // Se clicar fora ele fecha as info
    window.onclick = function(event) {
        if (event.target == box) {
            ctt.style.display = "none";
        }
    }
}
function inputFoto(){
    // pega  input
    var inp = document.getElementById('avatar');
    var btn = document.getElementById('btn-foto');
    console.log(inputIsOpen);
    // Quando clicar, abre as informações
    if(inputIsOpen){
            inp.style.display = "none";
            inputIsOpen = false;
    }else{
            inp.style.display = "block";
            btn.style.margin = "4% 0 1% 1%";
            inputIsOpen = true;
    }
}

