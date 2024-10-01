const loadfuntion = async()=>
{
    const res= await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const data = await res.json();
    const phones=data.data;
    
    displayphone(phones)
}


const displayphone = phone =>{
const phon = document.getElementById("phone_container")
phone.forEach(ph =>{
    console.log(ph);
    const phonecard=document.createElement('div');
    phonecard.classList=`w-1/3 p-2`;
    phonecard.innerHTML=`
    <div class="bg-[#0D6EFD0D] flex justify-center items-center p-4">
                    <img src="${ph.image}" alt="Iphone 13 Pro Max" class="max-w-72 h-auto">
                </div>
                <div class="text-center p-4">
                    <p class="font-bold">"${ph.brand}"</p>
                    <p class="text-gray-600">There are many variations of passages of available, but the majority have suffered</p>
                    <p class="font-semibold">$999</p>
                    <button class="bg-blue-500 text-white rounded py-2 px-4 mt-2 hover:bg-blue-600">Show Details</button>
                </div>
    
    `;
    phon.appendChild(phonecard);
})




}

loadfuntion();  