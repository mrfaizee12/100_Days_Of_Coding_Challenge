// Question 47: Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.//

const laptops = [
    { make: 'Apple', model: 'MacBook Pro', year: 2022 },
    { make: 'Dell', model: 'XPS 13', year: 2023 },
    { make: 'HP', model: 'Spectre x360', year: 2024 }
  ];
  
  const [firstLaptop, secondLaptop] = laptops;
  
  console.log(firstLaptop);
  console.log(secondLaptop);
  
  
