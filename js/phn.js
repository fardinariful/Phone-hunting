const loadfuntion = async(searchText)=>
{
    const res= await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones=data.data;
    
    displayphone(phones)
}


const displayphone = phone =>{
const phon = document.getElementById("phone_container");
const showallbtn=document.getElementById("show-all-container");
if(phone.length>12){
    showallbtn.classList.remove('hidden');
}
else{
    showallbtn.classList.add('hidden');
}
//display only 10 phones
phone=phone.slice(0,12);
phon.textContent="";

phone.forEach(ph =>{
    //console.log(ph);
    
    const phonecard=document.createElement('div');
    phonecard.classList=`w-1/3 p-2`;
    phonecard.innerHTML=`
    <div class="bg-[#0D6EFD0D] flex justify-center items-center p-4">
                    <img src="${ph.image}" alt="Iphone 13 Pro Max" class="max-w-72 h-auto">
                </div>
                <div class="text-center p-4">
                    <p class="font-bold">"${ph.brand}"</p>
                    <p class="font-bold">Name:"${ph.phone_name}"</p>
                    <p class="text-gray-600">There are many variations of passages of available, but the majority have suffered</p>
                    <p class="font-semibold">$999</p>
                    <button onclick="show_details('${ph.slug}') " class="bg-blue-500 text-white rounded py-2 px-4 mt-2 hover:bg-blue-600">Show Details</button>
                </div>
    
    `;
    phon.appendChild(phonecard);
})

toggleloading(false);
}

const show_details = async (id) => {
//console.log("click",id);
const res=await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
const data= await res.json();
const phone=data.data;
showphonedetails(phone);



}

const showphonedetails=(phoneno)=>{
    console.log(phoneno);
    const phone_name=document.getElementById('show-details-phone-name');
    phone_name.innerText=phoneno.name;

    // const showdetailscontainer=document.getElementById("Show-details_container");
    // showdetailscontainer.innerHTML=
        //  <img src="${phoneno.image}" alt="">
        //  <h3>Iphone 13 Pro Max</h3>
        //  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        //  <p>Storage : 128GB/256GB/1TB Storage, No card slot</p>
        //  <p>Display Size : 6.7 Inches, 109.8 cm</p>
        //  <p>Chipset : Apple A15 Bionic</p>
        //  <p>Memory : 128GB 6 GB RAM, 256GB RAM, 512GB RAM1 1TB 6GB RAM</p>
        //  <p>Slug : Applice_Iphone_13_Pro_Max</p>
        //  <p>Release data : Released 2021, September 24</p>
        //  <p>Brand : Apple</p>
        //  <p>GPS : AYes, with A-GPS, GLONASS, GALILEO, BDS, QZSS</p>

    
    
   
    show_phone_details.showModal();

}
const handler = () =>
{
    toggleloading(true);
    const searchfield=document.getElementById("search-field");
    const searchtext=searchfield.value;
    loadfuntion(searchtext);
}

const toggleloading = (isloading) =>{
 const loadingbtn=document.getElementById('loading-spinner');
 if(isloading)
 {
    loadingbtn.classList.remove('hidden');
}
 else{
    loadingbtn.classList.add('hidden');
}
 }
 
