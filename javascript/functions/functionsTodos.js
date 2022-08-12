//בנה לולאה שרצה על המערך הראשי
//בנה 2 מערכים ריקים נוספים משימות שהושלמו\משימות שלא הושלמו
// completed בנה פונקצייה שמקבלת אובייקט ומכניסה למערך בהתאמה לפי המשתנה
// הדפס את שני המערכים

var Completed = []
var NotCompleted = []

var Todos = [
  {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: 'quis ut nam facilis et officia qui',
    completed: true,
  },
  {
    userId: 1,
    id: 3,
    title: 'fugiat veniam minus',
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: 'et porro tempora',
    completed: true,
  },
  {
    userId: 1,
    id: 5,
    title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
    completed: false,
  }
]


for(var i=0;i<Todos.length;i++){
  if(Todos[i].completed == true){
    CompletedFn(Todos[i]);
  }else{
    NotCompletedFn(Todos[i]);
  }
}


function CompletedFn(ob){
  Completed.push(ob)
}


function NotCompletedFn(ob){
  NotCompleted.push(ob)
}

console.log(Completed,NotCompleted)