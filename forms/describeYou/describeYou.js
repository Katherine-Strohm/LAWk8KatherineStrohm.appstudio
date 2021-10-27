rdoType.onchange=function(){
    if (rdoType.value == 0)   // picked the first choice
      lblMessage.value = (`I would agree that you are a optimistic person too!`)
    else if (rdoType.value == 1)
        lblMessage.value = (`I would agree that you are a pesimistic person too!`)
      else if (rdoType.value == 2)
        lblMessage.value = (`I would agree that you are a trusting person too!`)
    else if (rdoType.value == 3)
        lblMessage.value = (`I would agree that you are a envious person too!`)
}
btnNext.onclick=function(){
  ChangeForm(favExercises)
}
