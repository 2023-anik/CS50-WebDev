const validateForm=()=>{
  let x=document.forms["myForm"]["fname"].value;
  if(x===''){
    alert("Name must be filled out");
    return false;// Optionally return true if validation passes
  }  
}