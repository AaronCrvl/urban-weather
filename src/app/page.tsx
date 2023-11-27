export default function Home() {
  return (
    <main className="min-h-screen w-full ml-auto mb-auto mt-auto mr-auto">
      <div className="w-fit h-fit py-24 ml-auto mr-auto">
        <span className="text-8xl font-bold">Urban Weather</span>
        <div className="flex mt-8 gap-x-2 text-2xl items-center justify-center">                
          <input type="text" placeholder="Search for a location" className="rounded-full p-10 w-auto h-12 bg-gray-700"></input>
          <button className="rounded-full p-6 w-fit bg-sky-700 font-bold hover:bg-sky-800">Go!</button>          
        </div>
      </div>
    </main>
  )
}