//class that store project object which contains the name of the project and the toDoItem list array. 
class project {
  constructor(){
      this.name = "ProjectName";
      this.toDoItemList = [];
  }
//return the item list after pushing
  getProjList() {
      return this.toDoItemList;
  }
//returns the project name
  getProjName() {
      return this.name;
  }
//creates html for adding project buttons, and displaying info
  projecthtml(){
    let todoside = document.getElementById("todo");
    let dombutton = document.createElement("button");
    let innertodo = document.getElementById("innertodo");
      dombutton.setAttribute("type", "button");
      dombutton.setAttribute("class", "dombutton");
      dombutton.innerHTML="Add to do items";
    
    todoside.appendChild(dombutton);
    let projectodocontainer = document.createElement("div");
      projectodocontainer.setAttribute("class","projecttodocontainer");
    innertodo.appendChild(projectodocontainer);
  }
}
//class for to do items
class itemcontainer{
  constructor(title,description,dueDate,priority){
      this.title=title;
      this.description=description;
      this.dueDate=dueDate;
      this.priority=priority;
  }
//append items to todoitem container
  displayitems(projectlist,index,counters){
      // let innertodo = document.getElementById("innertodo");
      let projecttodocontainer = document.querySelectorAll(".projecttodocontainer");
      let itembody = document.createElement("div");
      itembody.setAttribute("class", "itembody");
      itembody.innerHTML+="Title: "+this.title+"<br />";
      itembody.innerHTML += "Description: "+ this.description+"<br />";
      itembody.innerHTML += "Due Date: " + this.dueDate+"<br />";
      itembody.innerHTML += "Priority: "+this.priority+"<br />";
      projecttodocontainer[index].appendChild(itembody);
      let deleteitembutton = document.createElement("button");
      deleteitembutton.setAttribute("class","deletebutton");
      deleteitembutton.innerHTML="Delete item"
      itembody.appendChild(deleteitembutton);
      deleteitembutton.addEventListener("click",deleteitem.bind(null, projectlist, counters-1));
      console.log(counters-1);
      console.log(typeof(counters))
    console.log("This is counters-1 when the item is displayed"+ counters-1);
  }
}

//global variable that stores all projects
let listOfProjects = [];
let counter = 0;
//when project add is clicked run create hte project and input the rray of projects
let projectbutton = document.getElementById("projectadd");
projectbutton.addEventListener("click",createtheproject);



//function that creates a new project 
function createtheproject(){
      //create a project div
      let innerprojectside = document.getElementById("innerprojectside");
      let projectnamediv = document.createElement("div");
      projectnamediv.setAttribute("class", "projectnamediv");
      
      //create new project object and push object into list of projects
      var sunproject = new project();
      listOfProjects.push(sunproject);

      //creates div to store project name
      let name = sunproject.getProjName();
      projectnamediv.innerHTML=name;
      innerprojectside.appendChild(projectnamediv); 

      projectnamediv.addEventListener("click",hideanddisplay.bind(null,listOfProjects.length-1));
      listOfProjects[listOfProjects.length-1].projecthtml();//display all html for project on the right side
      let dombutton = document.querySelectorAll(".dombutton");
      for(let i = 0;i<listOfProjects.length-1;i++){
            dombutton[i].style.display="none";
      };//hide all add item buttons
      

     dombutton[listOfProjects.length-1].addEventListener("click",addform.bind(null,sunproject.toDoItemList,listOfProjects.length-1));//onclick pull up form
     dombutton[listOfProjects.length-1].style.display="block";

      let projecttodocontainer = document.querySelectorAll(".projecttodocontainer");
      for(let i=0;i<=listOfProjects.length-1;i++){
        projecttodocontainer[i].style.display="none";
        projecttodocontainer[listOfProjects.length-1].style.display="block"; //display one associated with project
      }//hide all project items
}

function hideanddisplay(index){
//onclick hides all other items and displays one associated with project and displays correct project block
    
    let projecttodocontainer = document.querySelectorAll(".projecttodocontainer");
    for(let i=0;i<=listOfProjects.length-1;i++){
      projecttodocontainer[i].style.display="none";
    }
     projecttodocontainer[index].style.display="block";
    let dombutton = document.querySelectorAll(".dombutton");
    for(let i = 0;i<listOfProjects.length;i++){
             dombutton[i].style.display="none";
          };
    dombutton[index].style.display="block";
    
}
function deleteitem(projectlist,indexofitem){
  // projectlist.splice(indexofitem-1,1);
  let itembody = document.querySelectorAll(".itembody");
  itembody[indexofitem].style.display="none";
  console.log("This is counters-1 once the delete is cllicked"+indexofitem);
} //check this indedx of item thing

function addform(projectlist,index){
  // todo remove debug

  let projectside = document.getElementById("projectside");
  var form = document.createElement("form");
  
  var title = document.createElement("input");
  title.setAttribute('id','title');
  title.setAttribute("type", "text");
  title.setAttribute("name", "title");
  title.setAttribute("placeholder", "title");

  var description = document.createElement("input");
  description.setAttribute('id','description');
  description.setAttribute("type", "text");
  description.setAttribute("name", "description");
  description.setAttribute("placeholder", "description");
  
  var dueDate = document.createElement("input");
  dueDate.setAttribute('id','dueDate');
  dueDate.setAttribute("type", "text");
  dueDate.setAttribute("name", "dueDate");
  dueDate.setAttribute("placeholder", "dueDate");
  
  var priority = document.createElement("input");
  priority.setAttribute('id','priority');
  priority.setAttribute("type", "text");
  priority.setAttribute("name", "priority");``
  priority.setAttribute("placeholder", "priority");
  let dombutton = document.querySelectorAll(".dombutton");
  dombutton[listOfProjects.length-1].disabled = true;
  var s = document.createElement("input");  
  s.setAttribute("type", "submit");
  s.setAttribute("value", "Submit");
  s.addEventListener("click",()=>{
        let titles = document.getElementById("title").value;
        let descriptions = document.getElementById("description").value;
        let dueDates = document.getElementById("dueDate").value;
        let priorities = document.getElementById("priority").value;
        
        if (titles ==""||descriptions==""||dueDates==""||priorities==""){
          alert("Input values!");
          return;
          }
        else {
          returnText(projectlist,index);
          }
        });
 
  function handleForm(event) { event.preventDefault(); form.remove(); } 
  form.addEventListener('submit', handleForm);
  
  form.appendChild(title);
  form.appendChild(description);
  form.appendChild(dueDate);
  form.appendChild(priority);
  form.appendChild(s);
  
  projectside.appendChild(form);
  
}

function returnText(projectlist,index){
  let titles = document.getElementById("title").value;
  let descriptions = document.getElementById("description").value;
  let dueDates = document.getElementById("dueDate").value;
  let priorities = document.getElementById("priority").value;
  let item = new itemcontainer(titles,descriptions,dueDates,priorities);
  projectlist.push(item);
  counter++;
  item.displayitems(projectlist,index,counter);
  let dombutton = document.querySelectorAll(".dombutton");
  dombutton[listOfProjects.length-1].disabled = false;
  // document.querySelectorAll(".dombutton").disabled = false;
}



