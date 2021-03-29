// Add your code here

// let formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle"
//   };
  
//   // method: "POST" is missing from the object below
//   let configObj = {
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
//   };
  
//   fetch("http://localhost:3000/dogs", configObj)
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(object) {
//     //   console.log(object);
//         document.body.innerHTML = object ['id']
//     })
//     .catch(function(error) {
//       alert("Bad things! Ragnarők!");
//     //   console.log(error);
//       document.body.innerHTML = error.message;
//     });



// function submitData( name, email ) {

//     let configObj = {
//     // fetch("http://localhost:3000/users", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//             },
//         body: JSON.stringify({
//                 name,
//                 email
//             })
//           } 

//        return fetch("http://localhost:3000/users", configObj)

        
//             .then(function(response) {
//                 return response.json()
//                 // console.log(response)
                
//             })
//             .then(function(object) {
//                 document.body.innerHTML = object ['id']
//                 // console.log(object)
//             })
//             .catch(function(error) {
//                 document.body.innerHTML = error.message
//                 // console.log(error)
//             })
 
// }


function submitData(name, email) {
    // debugger
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({name, email})
      })

      .then(function(response) {
        return response.json()
        
      })
      .then(function(object) {
       console.log(object)
        // document.body.innerHTML = object[ "id" ]
   
      })
      .catch(function(error) {  
        // document.body.innerHTML = error.message
        console.log(error.message)
      })
  }
