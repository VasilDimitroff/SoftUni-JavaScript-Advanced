function solve(data, criteria){

    let criteriaData = criteria.split('-');
    let propCriteria = criteriaData[0];
    let valueCriteria = criteriaData[1];

    let arrayEmployees = JSON.parse(data);
    let filteredEmployees = [];

    for (let index = 0; index < arrayEmployees.length; index++) {
        const employee = arrayEmployees[index];

        let keys = Object.keys(employee);
        let targetKey = keys.find(x => x === propCriteria);
    
        let propValues = Object.values(employee);
        let targetValue = propValues.find(x => x === valueCriteria);
        
        if (targetKey && targetValue) {

           filteredEmployees.push(employee);
        }
    }

    if (criteria === 'all') {
        for (let index = 0; index < arrayEmployees.length; index++) {
            const employee = arrayEmployees[index];
            console.log(`${index}. ${employee.first_name} ${employee.last_name} - ${employee.email}`);  
        }
    } else{
        for (let index = 0; index < filteredEmployees.length; index++) {
            const employee = filteredEmployees[index];
            console.log(`${index}. ${employee.first_name} ${employee.last_name} - ${employee.email}`);
            
        }
    }
}

solve(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`, 
'gender-Female')