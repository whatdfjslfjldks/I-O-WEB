import ConsoleUi from "./ConsoleUi";

export default function OverviewComponent(){

  return(
    <div>
      <ConsoleUi
       SelectedTitleMenu="console"
       SelectedConsoleMenu="overview"
       ConsoleContent={
         <div>
           <h1 className="text-black">Overview</h1>
         </div>
       }

       />
    </div>
  )
}