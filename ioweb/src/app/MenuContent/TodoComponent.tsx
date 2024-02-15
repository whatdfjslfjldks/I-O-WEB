import ConsoleUi from "./ConsoleUi";

export default function TodoComponent(){

  return(
    <div>
      <ConsoleUi
       SelectedTitleMenu="console"
       SelectedConsoleMenu="todo"
       ConsoleContent={
         <div>
           <h1 className="text-black">Todo</h1>
         </div>
       }

       />
    </div>
  )
}