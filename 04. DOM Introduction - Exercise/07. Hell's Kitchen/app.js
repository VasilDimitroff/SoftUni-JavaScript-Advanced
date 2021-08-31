function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let restaurantsArray = eval(document.querySelector('textarea').value);
      
      let restaurants = [];

      for (let index = 0; index < restaurantsArray.length; index++) {

         let restaurant = {};

         const currentRestaurantInfo = restaurantsArray[index];
         let restaurantInfo = currentRestaurantInfo.split(' - ');
         let restaurantName = restaurantInfo[0];
         let restaurantWorkersArray = restaurantInfo[1].split(', ');

         if (restaurants.some(r => r.name === restaurantName)) {
            restaurant = restaurants.find(r => r.name === restaurantName);
         }

         restaurant.name = restaurantName;
         restaurant.workers = [];

         for (let j = 0; j < restaurantWorkersArray.length; j++) {
            const workerInfo = restaurantWorkersArray[j].split(' ');

            let workerName = workerInfo[0];
            let workerSalary = workerInfo[1];   

            let worker = {};
            worker.name = workerName;
            worker.salary = Number(workerSalary);
            
            restaurant.workers.push(worker);
         }

         let sumSalary = 0;

         restaurant.bestSalary = Number.MIN_VALUE;

         for (let j = 0; j < restaurant.workers.length; j++) {
            const worker = restaurant.workers[j];
            sumSalary += worker.salary;

            if (worker.salary > restaurant.bestSalary) {
               restaurant.bestSalary = worker.salary;
            }
         }
         restaurant.averageSalary = Number(sumSalary / restaurant.workers.length);

         restaurants.push(restaurant);
      }

      let allAverageSalaries = [];

      for (let j = 0; j < restaurants.length; j++) {
         const salary = restaurants[j].averageSalary;
         allAverageSalaries.push(salary);       
      }

      let maxAverageSalary = Math.max(...allAverageSalaries);
     
      let bestRestaurant = restaurants.find(r => r.averageSalary === maxAverageSalary);
      bestRestaurant.workers.sort((a, b) => (b.salary - a.salary));

      let bestRestaurantOutput = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`;
      let bestWorkersOutput = '';

      for (let j = 0; j < bestRestaurant.workers.length; j++) {
         const worker = bestRestaurant.workers[j];
         let currentResult = '';
         if (j === bestRestaurant.workers.length - 1) {
            currentResult = `Name: ${worker.name} With Salary: ${worker.salary}`;
         } else {
            currentResult = `Name: ${worker.name} With Salary: ${worker.salary} `;
         }
         
         bestWorkersOutput += currentResult;     
      }
      
      let bestRestaurantElement = document.querySelectorAll('p')[0];
      let bestworkersElement = document.querySelectorAll('p')[1];
      bestRestaurantElement.textContent = bestRestaurantOutput;
      bestworkersElement.textContent = bestWorkersOutput;
   }
}