const addBtn=document.querySelector("#add-btn");
const newTaskInput=document.querySelector("#wrapper input");
const tasksContainer=document.querySelector("#tasks");
const error=document.querySelector("#error");
const countValue=document.querySelector(".count-value");
let taskCount=0;


const displayCount = (taskCount)=>{ 
countValue.innerText=taskCount;
};

const addTask=async()=>{ 
    const taskName=newTaskInput.value.trim();
//     let a=await JSON.parse(window.localStorage.getItem('todo'))
//       let aa={...a}
//       aa={...a,...taskName}
// console.log(aa)
    window.localStorage.setItem('todo',JSON.stringify({taskName}))
    error.computedStyleMap.display="none";
    if(!taskName){ 
        setTimeout(()=>{ 
            error.style.display="block";
        },2000);
         return;
    }
    else{ 
        error.style.display="none";
    }

    const task = `<div class="task">
    <input type="checkbox" class="task-check">
    <span class="taskname">${taskName}</span>
    <button class="edit">
    <i class="fa-solid fa-pen-to-square"></i>

    </button>
    <button class="delete">
    <i class="fa-sharp fa-solid fa-trash"></i>
    </button>
    </div>`;

    tasksContainer.insertAdjacentHTML("beforeend",task);

    const deleteButtons = document.querySelectorAll(".delete");
    deleteButtons.forEach((button) => {
        button.onclick=()=>{
        button.parentNode.remove();
        taskCount-=1;
        displayCount(taskCount);
        }

    });

    const  editButtons=document.querySelectorAll(".edit");
    editButtons.forEach((editBtn)=>{ 
        editBtn.onclick=(e)=>{ 
            let targetElemnet=e.target;
            if(!(e.target.className==="edit")){ 
                targetElemnet=e.target;
                parentNode;

            }
            newTaskInput.value=targetElemnet.previousElementSibling?.innerText;
            targetElemnet.parentNode.remove();
            taskCount-=1;
            displayCount(taskCount);
        }
    });
    const tasksCheck=document.querySelectorAll(".task-check");
    tasksCheck.forEach((checkBox)=>{ 
        checkBox.onchange=()=>{ 
            checkBox.nextElementSibling.classList.toggle("completed");
            if (checkBox.checked) {
                taskCount-=1;

                
            }
            else{ 
               taskCount+=1; 
            }
            displayCount(taskCount);

        };
    });
    taskCount+=1;
    displayCount(taskCount);
    newTaskInput.value="";



};

addBtn.addEventListener("click",addTask);

window.onload=()=>{ 
    taskCount=0;
    displayCount(taskCount);
    newTaskInput.value="";

}



