import { useState } from "react"
import { userState } from "react"

function App() {

  const [color, setColor] = useState("#8458B3")
  return (
    <>
      <div className="w-full h-screen duration-75"
        style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center
        inset-x-0 px-3 py-7">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg
       bg-white px-2 py-3 rounded-3xl">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-lg text-black shadow-lg
         transition ease-in-out  hover:-translate-y-2 hover:scale-11 duration-150"
              style={{ backgroundColor: "red" }}>Red</button>
            <button
              onClick={() => setColor("yellow")}
              className="outline-none px-4 py-1 rounded-lg text-black shadow-lg
         transition ease-in-out  hover:-translate-y-2 hover:scale-11 duration-150"
              style={{ backgroundColor: "yellow" }}>Yellow</button>
            <button
              onClick={() => setColor("pink")}
              className="outline-none px-4 py-1 rounded-lg text-black shadow-lg
        transition ease-in-out  hover:-translate-y-2 hover:scale-11 duration-150"
              style={{ backgroundColor: "pink" }}>Pink</button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 rounded-lg text-black shadow-lg
        transition ease-in-out  hover:-translate-y-2 hover:scale-11 duration-150"
              style={{ backgroundColor: "blue" }}>Blue</button>
            <button
              onClick={() => setColor("SkyBlue")}
              className="outline-none px-4 py-1 rounded-lg text-black shadow-lg
        transition ease-in-out  hover:-translate-y-2 hover:scale-11 duration-150"
              style={{ backgroundColor: "SkyBlue" }}>Sky Blue</button>
            <button
              onClick={() => setColor("Purple")}
              className="outline-none px-4 py-1 rounded-lg text-black shadow-lg
         transition ease-in-out  hover:-translate-y-2 hover:scale-11 duration-150"
              style={{ backgroundColor: "purple" }}>Purple</button>
            <button
              onClick={() => setColor("violet")}
              className="outline-none px-4 py-1 rounded-lg text-black shadow-lg
        transition ease-in-out  hover:-translate-y-2 hover:scale-11 duration-150"
              style={{ backgroundColor: "violet" }}>Violet</button>
            <button
              onClick={() => setColor("lavender")}
              className="outline-none px-4 py-1 rounded-lg text-black shadow-lg
        transition ease-in-out  hover:-translate-y-2 hover:scale-11 duration-150"
              style={{ backgroundColor: "lavender" }}>Lavender</button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-lg text-black shadow-lg
        transition ease-in-out  hover:-translate-y-2 hover:scale-11 duration-150"
              style={{ backgroundColor: "green" }}>Green</button>
            <button
              onClick={() => setColor("olive")}
              className="outline-none px-4 py-1 rounded-lg text-black shadow-lg
         transition ease-in-out  hover:-translate-y-2 hover:scale-11 duration-150"
              style={{ backgroundColor: "olive" }}>Olive</button>
            <button
              onClick={() => setColor("Tan")}
              className="outline-none px-4 py-1 rounded-lg text-black shadow-lg
        transition ease-in-out  hover:-translate-y-2 hover:scale-11 duration-150"
              style={{ backgroundColor: "Tan" }}>Tan</button>
            <button
              onClick={() => setColor("Cyan")}
              className="outline-none px-4 py-1 rounded-lg text-black shadow-lg
        transition ease-in-out  hover:-translate-y-2 hover:scale-11 duration-150
        "
              style={{ backgroundColor: "cyan" }}>Cyan</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
