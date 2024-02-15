import ConsoleUi from "./ConsoleUi";

export default function HistoryComponent(){

  return(
    <div>
      <ConsoleUi
       SelectedTitleMenu="console"
       SelectedConsoleMenu="log"
       ConsoleContent={
         <div>
           <h1 className="text-black">History</h1>
         </div>
       }

       />
    </div>
  )
}