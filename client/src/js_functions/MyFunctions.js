const size = function(obj) {
  var size = 0,
    key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) size++;
  }
  return size;
};

const checkRegex = function(regex, string){
  let found = string.match(regex);
  return found; // Array
}

const checkVisitor = function(visitor){
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let nameRegex = /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i
  let errors = []
  if (visitor.lastName === "" || checkRegex(nameRegex,visitor.lastName) === null || checkRegex(nameRegex,visitor.lastName).length > 1){
    errors.push(<li key="lastName">"Last name"</li>) 
  }
  if (visitor.firstName === "" || checkRegex(nameRegex,visitor.firstName) === null || checkRegex(nameRegex,visitor.firstName).length > 1 ){
    errors.push(<li key="firstName">"First name"</li>) 
  }
  if (visitor.birthDate === null){
    errors.push(<li key="birthDate">"Birthdate"</li>) 
  }
  if (visitor.role === null){
    errors.push(<li key="role">"Role"</li>) 
  }
  if (visitor.email === "" || checkRegex(emailRegex,visitor.email) === null || checkRegex(emailRegex,visitor.email).length > 1 ){
    errors.push(<li key="email">"Email"</li>) 
  }
  if (errors.length > 0){
    return errors;
  }
  else {
    return false
  }
}

export default {size, checkVisitor}