function attachEventsListeners() {

   let divElements = document.querySelectorAll('div');
   let days = 0;
   let hours = 0;
   let minutes = 0;
   let seconds = 0;

   divElements[0].children[2].addEventListener('click', convertFromDays);
   divElements[1].children[2].addEventListener('click', convertFromHours);
   divElements[2].children[2].addEventListener('click', convertFromMinutes);
   divElements[3].children[2].addEventListener('click', convertFromSeconds);

   function convertFromDays(e){
       let inputElement = e.currentTarget.previousElementSibling;
       days = inputElement.value;

       hours = days * 24;
       minutes = hours * 60;
       seconds = minutes * 60;

       divElements[1].children[1].value = hours;
       divElements[2].children[1].value = minutes;
       divElements[3].children[1].value = seconds;
   }

   function convertFromHours(e){
       let inputElement = e.currentTarget.previousElementSibling;
       hours = inputElement.value;

       days = hours / 24;
       minutes = hours * 60;
       seconds = minutes * 60;

       divElements[0].children[1].value = days;
       divElements[2].children[1].value = minutes;
       divElements[3].children[1].value = seconds;
   }

   function convertFromMinutes(e){
       let inputElement = e.currentTarget.previousElementSibling;
       minutes = inputElement.value;

       hours = minutes / 60;
       days = hours / 24;
       seconds = minutes * 60;

       divElements[0].children[1].value = days;
       divElements[1].children[1].value = hours;
       divElements[3].children[1].value = seconds;
   }

   function convertFromSeconds(e){
       let inputElement = e.currentTarget.previousElementSibling;
       seconds = inputElement.value;

       minutes = seconds / 60;
       hours = minutes / 60;
       days = hours / 24;

       divElements[0].children[1].value = days;
       divElements[1].children[1].value = hours;
       divElements[2].children[1].value = minutes;
   }
  
}