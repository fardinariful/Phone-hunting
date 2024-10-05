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
   
     const showdetailscontainer=document.getElementById("Show-details_container");
     showdetailscontainer.innerHTML=`

      <div class="bg-[#0D6EFD0D] w-full p-4">
            <img   src="${phoneno.image}" alt=""> 
        </div>
         <h3 class="text-[#403F3F] text-3xl font-bold mt-2">"${phoneno.name}"</h3>
         <p class="text-[#706F6F] mt-2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
         <p class="text-[#706F6F] mt-2"><span class="text-[#403F3F]">Storage :</span> "${phoneno.mainFeatures
            .storage}"</p>
         <p class="text-[#706F6F] mt-2"><span class="text-[#403F3F]"> Display Size :</span> "${phoneno.mainFeatures.displaySize}"</p>
         <p class="text-[#706F6F] mt-2"><span class="text-[#403F3F]">Chipset :</span> "${phoneno.mainFeatures.chipSet}"</p>
         <p class="text-[#706F6F] mt-2"><span class="text-[#403F3F]">Memory : </span> "${phoneno.mainFeatures.memory}"</p>
         <p class="text-[#706F6F] mt-2"><span class="text-[#403F3F]">Slug :</span> "${phoneno.slug}"</p>
         <p class="text-[#706F6F] mt-2"><span class="text-[#403F3F]">Release data :</span>  "${phoneno.releaseDate}"</p>
         <p class="text-[#706F6F] mt-2"><span class="text-[#403F3F]">Brand : </span> "${phoneno.brand}"</p>
         <p class="text-[#706F6F] mt-2"><span class="text-[#403F3F]">GPS :</span>  "${phoneno.others.GPS}"</p> 
     
     `
    

    
    
   
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
 
