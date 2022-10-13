var student = {
    id: 1215,
    name: 'Rima Akter',
    age: 23,
    phone: 0140304
};
console.log(student);
console.log(student.name);

//object read
var studentId = student.id;
console.log(studentId);
//different way(3) to set a value of an object property

student.age = 22; 
student['id']=1206;

var phoneProperty = 'phone';
student[phoneProperty] = 2324;

console.log(student);