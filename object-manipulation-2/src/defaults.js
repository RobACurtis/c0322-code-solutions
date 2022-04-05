/* exported defaults */
// create a function to move the properties of the source object into the target object that aren't already in the target object
// assign the values of target to source to make them equal
// then assign all the properties in source back to target

function defaults(target, source) {
  Object.assign(source, target);
  Object.assign(target, source);
}
