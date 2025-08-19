
  
  const updatedData = data.map((item, index) => ({
    id: index + 1,
    ...item,
  }));
  
  console.log(updatedData);


//   output 
// [

//         {id: 1 , value: 'English', code: 'en' },

//         {id: 2 , value: 'German', code: 'de' },

//         {id: 3 ,value: 'Spanish', code: 'es' },

//         {id: 4 , value: 'French', code: 'fr' },

//         {id: 5 , value: 'Italian', code: 'it' },

//         {id: 6 , value: 'Russian', code: 'ru' },

// ]