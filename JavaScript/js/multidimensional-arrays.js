// We can nest arrays inside arrays [[x,y,z,[x,y,z]]]
// multidimensionalArray = [
//[x,y,z,
//[x,y,z]],
//[x,y,z]  
//]
// Also arrays inside objects and objects inside arrays

const multidimensionalArray1 = [
  [1,2,3],
  [3,4,6],
  [5,7,9]
]

multidimensionalArray1[1].splice(2,1,5); //should replace 6 to 5
multidimensionalArray1[0].pop(); //should pop 3 from the 0 array