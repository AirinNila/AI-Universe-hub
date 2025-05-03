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
        console.log(element)
        
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
                    <li>1.${element.features[0]}</li>
                    <li>2.${element.features[1]}</li>
                    <li>3.${element.features[2]}</li>
                </ul>
                <h3 class="text-xl font-semibold mt-4">${element.name}</h3>
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
    // console.log(value)
    const modelContainer = document.getElementById('model-container');
  
    modelContainer.innerHTML = `
    <div class="flex flex-col justify-center items-center gap-2 border-2 border-[#EB5757] bg-[#EB57570D] p-2">
              <h3 class="font-semibold text-md ">${value.data.description}</h3>
              <div class="flex justify-center gap-2 text-sm">
                <div class="p-2 flex flex-col gap-1 items-center justify-center bg-white">
                  <p>${value.data.pricing[0]?.plan}</p>
                  <p>${value.data.pricing[0]?.price}</p>
                </div>
                <div class="p-2 flex flex-col gap-1 items-center justify-center bg-white">
                  <p>${value.data.pricing[1]?.plan}</p>
                  <p>${value.data.pricing[1]?.price}</p>
                </div>
                <div class="p-2 flex flex-col gap-1 items-center justify-center bg-white">
                  <p>${value.data.pricing[2]?.plan}</p>
                  <p>${value.data.pricing[2]?.price}</p>
                </div>
              </div>
              <div class="flex justify-center">
                <div>
                <ul>
                  <h3 class="font-semibold text-md">Feature</h3>
                  <li>1.${value.data.features['1']?.feature_name}</li>
                  <li>2.${value.data.features['2']?.feature_name}</li>
                  <li>3.${value.data.features['3']?.feature_name}</li>
                </ul>
                </div>
                <div class="">
                <ul>
                  <h3 class="font-semibold text-md">Integration</h3>
                  <li>1.${value.data.integrations[0]}</li>
                  <li>2.${value.data.integrations[1]}</li>
                  <li>3.${value.data.integrations[2]}</li>
                </ul>
                </div>
              </div>
            </div>
            <!-- secoend image div -->
            <div class="flex flex-col justify-start items-center gap-2 border-2 border-[#585858] p-2">
                <div class="bg-[#EB5757] text-White">${value.data.accuracy?.score || 'No'}_Accuracy</div>
              <img src="${value.data.image_link[0]}" alt="image">
              <h3>${value.data.input_output_examples[0]?.input || 'Can you give any example'}</h3>
              <p>${value.data.input_output_examples[0]?.output || 'No! Not yet. Take a break'}</p>
            </div>
    `
    
    my_details_model.showModal()
}

showData()