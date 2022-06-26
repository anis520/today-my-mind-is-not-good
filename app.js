

const form_data=document.getElementById('form_data')
const product_list=document.getElementById('product_list')
const  msg=document.querySelector('.msg')
const  model_veiw_div=document.querySelector('.model_veiw_div')





const getlldata=()=>{


     let data =getsldat('product')

    if(!data){

            product_list.innerHTML=`
            
             <tr>
               <td  class='text-center bg-success text-warning' colspan='7'>No data founds</td>
             </tr>
            
            
            `



    }
    if(data){
       let list=''
        let totalamount=0

      data.map((item,index)=>{
        totalamount +=(item.price*item.quantity)
list += `
    
 <tr>
    <td>${index+1}</td>
    <td><img style="width:60px ;height:60px;object-fit:cover;border-radius:6px" src="${item.photo}" alt=""></td>
    <td>${item.name}</td>
    <td>${item.price}</td>
    <td>${item.quantity} ${item.typei}</td>
    <td class='text-end'>${item.price*item.quantity} BDT</td>
    <td>
        <a href="#model_veiw" data-bs-toggle="modal" index='${index}' class="btn btn-sm btn-warning single_product"><i class="fas fa-eye"></i></a>
        <a href="" class="btn btn-sm btn-primary"><i class="fas fa-edit single_product"></i></a>
        <a href="" class="btn btn-sm btn-danger"><i class="fas fa-trash single_product"></i></a>
    
    </td>
</tr>
    
    
    
    `

      })


      list+=`
      <tr>
        
         <td class='text-end' colspan='6'>Total =${totalamount} BDT</td>
         <td></td>
      </tr>
      
      `
      // console.log(JSON.stringify(list)  );
product_list.innerHTML=list
       



    }

}

getlldata()

// get data from form

form_data.onsubmit=(e)=>{
 e.preventDefault()
    
 let  formdata = new FormData(e.target)
 let alldata = Object.fromEntries(formdata.entries());
 let {name,price,photo,quantity,typei} = Object.fromEntries(formdata.entries());
 
 
 
 
 if(!name || !price || !photo|| !quantity || !typei){
   
   
   msg.innerHTML=setAlert('All field are requard')
   
   
   
  }else{
    
    
    
     createLSData('product',alldata)
  
       

     msg.innerHTML=setAlert('Data Stable','success')
       e.target.reset()
       getlldata()
       


 }


}



product_list.onclick=(e)=>{

e.preventDefault();


let index = e.target.parentElement.getAttribute('index')
let data=getsldat('product')
const {name,price,photo,quantity,typei}=data[index]


model_veiw_div.innerHTML=`

<img class="shadow" src="${photo}" alt="">
      <h1>${name}</h1>
          <p>Price : ${price} BDT</p>



`
setTimeout(() => {
  model_veiw_div.innerHTML=`

<img class="shadow" src="${photo}" alt="">
      <h1>${name}</h1>
          <p>Price : ${price} BDT</p>
          <hr>
          <p>Available in our Stouck : ${quantity} ${typei}</p>



`
}, 2000);
// setTimeout(() => {
//   model_veiw_div.innerHTML=`

// <img class="shadow" src="${photo}" alt="">
//       <h1>${name}</h1>
//           <p>Price : ${price} BDT</p>
//           <hr>
//           <p>Available in our Stouck : ${quantity}</p>



// `
// },3400);
setTimeout(() => {
  model_veiw_div.innerHTML=`

<img class="shadow" src="${photo}" alt="">
      <h1>${name}</h1>
          <p>Price : ${price} BDT</p>
          <hr>
          <p>Available in our Stouck : ${quantity} ${typei}</p>
       <h5 class='text-info text-start'>Thank you Stay with us</h5>


`
},3000);
setTimeout(() => {
  model_veiw_div.innerHTML=`

<img class="shadow" src="${photo}" alt="">
      <h1>${name}</h1>
          <p>Price : ${price} BDT</p>
          <hr>
          <p>Available in our Stouck : ${quantity} ${typei}</p>
       <h5 class='text-danger text-end'>Thank you Stay with us</h5>


`
},3400);
setTimeout(() => {
  model_veiw_div.innerHTML=`

<img class="shadow" src="${photo}" alt="">
      <h1>${name}</h1>
          <p>Price : ${price} BDT</p>
          <hr>
          <p>Available in our Stouck : ${quantity} ${typei}</p>
       <h5 class='text-info text-center'>Thank you Stay with us</h5>


`
},3800);
setTimeout(() => {
  model_veiw_div.innerHTML=`

<img class="shadow" src="${photo}" alt="">
      <h1>${name}</h1>
          <p>Price : ${price} BDT</p>
          <hr>
          <p>Available in our Stouck : ${quantity} ${typei}</p>



`
},5200);


}
