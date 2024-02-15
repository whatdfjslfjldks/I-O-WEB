import ConsoleUi from "./ConsoleUi";

export default function LogComponent(){

  return(
    <div>
      <ConsoleUi
       SelectedTitleMenu="console"
       SelectedConsoleMenu="log"
       ConsoleContent={
         <div>
           <h1 className="text-black">Log</h1>
         </div>
       }

       />
    </div>
  )
}