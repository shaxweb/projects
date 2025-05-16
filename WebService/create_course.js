let db = localStorage;

let createCourse = (name, price) => {
  let courses = JSON.parse(db.getItem("courses")) || [];
  let global = JSON.parse(db.getItem("global"))
  
  let course = {
    id: global.id,
    name: name,
    price: price
  }
  courses.push(course)
  courses = JSON.stringify(courses)
  global = JSON.stringify({id: global.id + 1})
  db.setItem("courses", courses)
  db.setItem("global", global)
}