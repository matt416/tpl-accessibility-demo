import Layout from "../layouts/Layout"
import Pagination from "../components/Pagination"
import BookGridItem from "../components/BookGridItem"
import Aside from "../components/Aside"
import { BOOK_LIST } from "../const"

export default function Books() {
  return (
    <Layout>
      <div className="flex max-w-screen-lg mx-auto py-16">
        <main className="w-full flex-auto space-y-3 p-6" aria-labelledby="main-heading">
          <h1 id="main-heading" className="text-40">New in General Fiction</h1>

          <div data-name="filter" className="flex justify-start">
            <span>973 Results</span>
            <span className="ml-auto">View</span>
            <span className="ml-6">Sort by</span>
          </div>

          <section aria-labelledby="section-heading" className="flex flex-wrap -m-6">
            <h2 className="sr-only" id="section-heading">Books, Page 1</h2>
            {
              BOOK_LIST.map((book, index) => (
                <BookGridItem { ...book } key={ `book-item-${index}` } />
              ))
            }
          </section>

          <Pagination/>

        </main>

        <div className="hidden md:flex flex-col w-72 p-6 flex-none">
          <Aside/>
        </div>
      </div>
    </Layout>
  );
}

