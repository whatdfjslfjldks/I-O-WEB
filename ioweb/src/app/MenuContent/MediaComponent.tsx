import ConsoleUi from "./ConsoleUi";

export default function MediaComponent(){

  return(
    <div>
      <ConsoleUi
       SelectedTitleMenu="console"
       SelectedConsoleMenu="media"
       ConsoleContent={
         <div>
           <h1 className="text-black">Media</h1>
         </div>
       }

       />
    </div>
  )
}