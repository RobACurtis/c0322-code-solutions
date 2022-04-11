/* exported defaults */
// create a function to move the properties of the source object into the target object that aren't already in the target object
// assign the values of target to source to make them equal
// then assign all the properties in source back to target

// function defaults(target, source) {
//   Object.assign(source, target);
//   Object.assign(target, source);
// }
// function defaults(target, source) {
//   var obj = target;
//   for (var x in source) {
//     for (var y in target) {
//       if (target[y] === undefined) {
//         obj = source[x];
//       }
//       if (source[x] !== target[y]) {
//         obj = source[y];
//       }
//     }
//     console.log(obj);
//   }
// }
