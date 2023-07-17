let pageNames = ['Home', 'About me', 'Services', 'Projects', 'Contact'];
let thisPage = 1;
let limit = 1;
let list = document.querySelectorAll('.main-container .container-item');

function loadItem(){
    let beginGet = limit * (thisPage - 1);
    let endGet = limit * thisPage - 1;
    list.forEach((item, key)=>{
        if(key >= beginGet && key <= endGet){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    })
    listPage();
}
loadItem();
function listPage(){
    let count = Math.ceil(list.length / limit);
    document.querySelector('.listPage').innerHTML = '';

    for(i = 1; i <= length.thisPage; i++){
        if(thisPage != 1){
            let prev = document.createElement('li');
            prev.setAttribute('onclick', "changePage(" + (thisPage - 1) + ")");
            document.querySelector('.listPage').appendChild(prev);
        }
    }
    

    for(i = 1; i <= count; i++){
        let newPage = document.createElement('li');
        newPage.innerText = pageNames[i - 1];
        if(i == thisPage){
            newPage.classList.add('active');
        }
        newPage.setAttribute('onclick', "changePage(" + i + ")");
        document.querySelector('.listPage').appendChild(newPage);
    }

}


function changePage(i){
    thisPage = i;
    loadItem();
}