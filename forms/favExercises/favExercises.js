let exercises = ["pullups","pushups","situps","jogging","plank","curls"]
let coreExercises = ["situps","plank"]
let selections = []

favExercises.onshow=function(){
 selExercises.clear()
    for (i = 0; i < exercises.length; i++) 
        selExercises.addItem(exercises[i])
  for (i = 0; i < coreExercises.length; i++)
    selExercises.addItem(coreExercises[i])
}

selExercises.onchange=function(){
  selections.push(selExercises.value)
}

btnSubmit.onclick=function(){
  if (selections[0] == "situps" && selections[1] == "plank") {
    lblExercise.value = (`You chose ${selections[0]} and ${selections[1]} - those are the two core exercises.`)
  } else{
    lblExercise.value = ("You did not pick the two core exercises.")
}
}


btnNxt.onclick=function(){
  ChangeForm(mobileNav)
}
