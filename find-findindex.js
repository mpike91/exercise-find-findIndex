// Done
function findUserByUsername(usersArray, username) {
  return usersArray.find(function(obj, i, arr){
    return obj.username === username;
  })
}

// Done
function removeUser(usersArray, username) {
  let objIdx = usersArray.findIndex(function(obj, i, arr) {
    return (obj.username === username)
  });
  if (objIdx === -1) return;
  return usersArray.splice(objIdx, 1)[0];
}