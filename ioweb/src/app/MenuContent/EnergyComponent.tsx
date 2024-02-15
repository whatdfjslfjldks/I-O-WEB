import ConsoleUi from "./ConsoleUi";

export default function EnergyComponent(){

  return(
    <div>
      <ConsoleUi
       SelectedTitleMenu="console"
       SelectedConsoleMenu="energy"
       ConsoleContent={
         <div>
           <h1 className="text-black">Energy</h1>
         </div>
       }

       />
    </div>
  )
}