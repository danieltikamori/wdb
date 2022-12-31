// Why use const on arrays?
// Using const with arrays is a SAFE way
// Each variable point to a reference, that can be reassigned to a different reference if we use let for example
// const avoids to change the reference(the arrays "shell"), NOT the values inside the array
// So we can freely change the array content without the risk of reference reassignment