export default function Aside(){
  return (
    <aside className="bg-gray-100 p-4 space-y-6" aria-labelledby="aside-heading">
        <h2 id="aside-heading" className="text-2xl">More new books</h2>
        <hr/>

        <ul className="space-y-2">
          <li><h3 className="text-xl">Nonfiction</h3></li>
          <li><a href="#" className="text-blue-600 hover:underline">All nonfiction</a></li>
        </ul>

        <ul className="space-y-2">
          <li><h3 className="text-xl">Fiction</h3></li>
          <li><a href="#" className="text-blue-600 hover:underline">General Fiction</a></li>
          <li><a href="#" className="text-blue-600 hover:underline">Graphic Books</a></li>
        </ul>

        <ul className="space-y-2">
          <li><h3 className="text-xl">Other Formats</h3></li>
          <li><a href="#" className="text-blue-600 hover:underline">eBooks</a></li>
          <li><a href="#" className="text-blue-600 hover:underline">eAudiobooks</a></li>
          <li><a href="#" className="text-blue-600 hover:underline">Audiobook CDs</a></li>
          <li><a href="#" className="text-blue-600 hover:underline">Large Print Books</a></li>
          <li><a href="#" className="text-blue-600 hover:underline">Talking Books</a></li>
        </ul>


        <ul className="space-y-2">
          <li><h3 className="text-xl">Children &amp; Teens</h3></li>
          <li><a href="#" className="text-blue-600 hover:underline">Children's Fiction</a></li>
          <li><a href="#" className="text-blue-600 hover:underline">Children's Nonfiction</a></li>
          <li><a href="#" className="text-blue-600 hover:underline">Teen Fiction</a></li>
          <li><a href="#" className="text-blue-600 hover:underline">Teen Graphic Books</a></li>
        </ul>

      </aside>
  )
}