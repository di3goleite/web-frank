const productsMale = [{
  name: 'darthvader',
  type: '',
  image_url: 'assets/images/male/darthvader.jpg'
}, {
  name: 'dragon',
  type: '',
  image_url: 'assets/images/male/dragon.jpg'
}, {
  name: 'pray_for_waves',
  type: '',
  image_url: 'assets/images/male/pray_for_waves.jpg'
}, {
  name: 'starwars',
  type: '',
  image_url: 'assets/images/male/starwars.jpg'
}, {
  name: 'darthvader',
  type: '',
  image_url: 'assets/images/male/darthvader.jpg'
}, {
  name: 'dragon',
  type: '',
  image_url: 'assets/images/male/dragon.jpg'
}]

const productsFemale = [{
  name: 'darthvader',
  type: '',
  image_url: 'assets/images/female/starwars_female.jpg'
}, {
  name: 'dragon',
  type: '',
  image_url: 'assets/images/female/starwars_female_2.jpg'
}, {
  name: 'pray_for_waves',
  type: '',
  image_url: 'assets/images/female/starwars_female_3.jpg'
}, {
  name: 'starwars',
  type: '',
  image_url: 'assets/images/female/starwars_female_4.jpg'
}, {
  name: 'darthvader',
  type: '',
  image_url: 'assets/images/female/starwars_female_5.jpg'
}, {
  name: 'dragon',
  type: '',
  image_url: 'assets/images/female/starwars_female_6.jpg'
}]

const getFacesApi = () => {

  axios.get('http://192.168.0.80:8080/webhooks?limit=1')
    .then(function (res) {

      console.log(res.data);

      let data = res.data[0]

      console.log(data.demographics.gender);

      mountCarousel(data.demographics.gender)

    })
    .catch(function (error) {
      console.log(error);
    });
}

const removeNodes = (node) => {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}

const mountCarousel = (gender) => {

  if (gender !== undefined){

    let frankCarousel = document.querySelector('[data-js="frank-carousel"]')
    
    removeNodes(frankCarousel)

    let products = ``

    let productsLoop = gender === 'MALE' ? productsMale : productsFemale 

    productsLoop.forEach((prod) => {
      products += ` <div class="frank-carousel-item">
                      <img src="${prod.image_url}" alt="" class="frank-carousel-img" />
                      <p>${prod.name}</p>
                    </div>`
    })

    
    frankCarousel.innerHTML = products

    $('[data-js="frank-carousel"]').owlCarousel()

  }

}

(() => {
  setInterval(() => {
    getFacesApi()
  }, 3000)
})()  