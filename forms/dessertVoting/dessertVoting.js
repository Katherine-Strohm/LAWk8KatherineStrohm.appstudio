let dessertList = ['Chocolate Cake','Cream Brulee','Cheesecake',
                  'Keyline Pie','Cherry Cobbler','Chocolate Chip Cookies']

dessertVoting.onshow=function(){
    drpDesserts.clear()   
    
  for (i = 0; i < dessertList.length; i++) 
        drpDesserts.addItem(dessertList[i])
}


drpDesserts.onclick=function(s){
        if (typeof(s) == "object")   
      return                    
  else {  
      drpDesserts.value = s
    lblPrompt.value = (`You picked ${s}-that is a great choice.`)
    }
}