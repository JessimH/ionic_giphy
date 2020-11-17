'use strict'
const searchBar = document.getElementById('searchbar')
const accueil = document.querySelector('.accueil')
const grid = document.getElementById('grid')
const gifs = document.querySelector('.grid-item')
//requette lorsque l'utilisateur écrit



const createItem = (arr) =>{
    grid.innerHTML="";
    for(let data of arr){
        // console.log(data.images.fixed_width.url)
        let div = document.createElement('div')
        div.innerHTML = `
                <div id="item" class="grid-item">
                    <img id="item" class="gif" src="${data.images.fixed_width.url}" />
                </div>
        `
        grid.append(div)
        searchBar.value = ''   
    }
    macy.runOnImageLoad(function () {
        macy.recalculate(true);
    }, true);
} 

accueil.addEventListener('click', ()=>{
    axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=${config.apiKey}&offset=${config.offset}&rating=${config.rating}&lang=${config.lang}`)
    .then(function (giphys) {
        const datas = giphys.data.data
        console.log(datas)
        createItem(datas)
    }
)
})

axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=${config.apiKey}&offset=${config.offset}&rating=${config.rating}&lang=${config.lang}`)
.then(function (giphys) {
    const datas = giphys.data.data
    console.log(datas)
    createItem(datas)
    }
)


searchBar.addEventListener("input", (e) =>{
    e.preventDefault
    document.addEventListener('keydown', function(e){
        if(e.key === 'Enter'){
            let search = searchBar.value
            console.log(search)
            axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${config.apiKey}&q=${search}&limit=${config.limit}&offset=${config.offset}&rating=${config.rating}&lang=${config.lang}`)
            .then(function (giphys) {
                // handle success
                const datas = giphys.data.data
                if(datas.length == 0){
                    grid.innerHTML="";
                    searchBar.value = ''
                    handleButtonClick(`Aucun résultats`)
                }else{
                    // console.log(datas)
                    createItem(datas)
                    // console.log(grid)
                }               
            }).catch((error) => {
                grid.innerHTML="";
                handleButtonClick(`L'Api ne repond pas : ${error}`)
                }
            )   
        }
    })
});

async function handleButtonClick(text) {
    const toast = await toastController.create({
      color: 'danger',
      duration: 4000,
      message: text,
      showCloseButton: true
    });

    await toast.present();
}
//gerer cas d'erreurs pas de résultats

//cas d'erreur input vide

//cas d'erreur pb avec API

