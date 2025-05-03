// get data
const showData = async (isShowData) => {
    const res = await fetch('https://openapi.programming-hero.com/api/ai/tools')
    const data = await res.json();
    const dataTool = data.data.tools;

    showCard(dataTool, isShowData)
    // console.log(dataTool)
}

// handle show card
const showCard = (data, isShowData) => {
    // show some data
    const showButtonContainer = document.getElementById('show-all-button-container')
    
   isShowData = false
     if(data.length > 9 && isShowData === false){
        data = data.slice(0,9)
        showButtonContainer.classList.remove('hidden')
     }
     else{
        showButtonContainer.classList.add('hidden')
     }
    

    const cardContainer = document.getElementById('card-container')
    // get one by one data
    data.forEach(element => {
       // console.log(element)
        // get feature
        
        const feature = element.features;
        // console.log(feature)
    //   for(const value of feature){
        
 
        const newCard = document.createElement('div');
        newCard.classList = `card bg-base-100 w-80 border-2 border-[#11111133]`
        newCard.innerHTML = `
            <figure class="p-4 rounded-md">
                <img
                  src="${element.image}"
                  alt="Shoes" />
              </figure>
              <div class="card-body">
                <h2 class="card-title">Feature</h2>
                <ul id="feature-container" class="flex flex-col items-start gap-2">
                    ${feature}
                </ul>
                <h3 class="text-xl font-semibold">${element.name}</h3>
                <p>${element.published_in}</p>
                <div class="card-actions justify-end">
                  <button onclick="detailsHandler('${element.id}')" class="btn btn-primary">Buy Now</button>
                </div>
              </div>
        `

        cardContainer.appendChild(newCard)
            //   }
    });

}

// handle show all


// details handler
const detailsHandler = async(id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`)
    const data = await res.json()
    // const getData = data.data;
    showDetails(data)
    //console.log(data)
}

const showDetails = (value) => {
    console.log(value)
    my_details_model.showModal()
}

showData()