import "./App.css"
import { AppIcon, SearchIcon, getAllArticle } from "./utils"
import SmallImageCard from "./components/SmallImageCard"
import { useEffect, useState } from "react"
import BlogModel from "./components/BlogModel"

function App() {
   const [allArticle, setallArticle] = useState([])
   const [baseArticle, setbaseArticle] = useState([])
   const [title, settitle] = useState("All Articles")
   const [isModelOpen, setisModelOpen] = useState(false)
   const [slug, setslug] = useState("")
   const getAllArticleHandler = async () => {
      try {
         const j = await getAllArticle()

         setallArticle(j.data.data)
         setbaseArticle(j.data.data)
      } catch (error) {
         console.log(error)
      }
   }
   const modelCloseHandler = () => {
      setisModelOpen(false)
   }
   const searchHandler = (event) => {
      // console.log(baseArticle)
      if (event.target.value.length > 0) {
         settitle(`Search reasults for: ${event.target.value}`)
         setallArticle(baseArticle.filter((data) => data.primary_category.name.toLowerCase().includes(event.target.value.toLowerCase())))
      } else {
         settitle("All Articles")
         setallArticle(baseArticle)
      }
   }
   useEffect(() => {
      getAllArticleHandler()
   }, [])
   console.log(allArticle)
   return (
      <div className="App">
         {isModelOpen && <BlogModel slug={slug} modelCloseHandler={modelCloseHandler} />}
         <header className="App-header">
            <AppIcon />
         </header>
         <div className="App-subheader">
            <h1>{title}</h1>
            <div className="App-search-input">
               <input type="text" placeholder="search articles" onChange={searchHandler} />
               <SearchIcon />
            </div>
         </div>
         <div className="App-body">
            {allArticle.length > 0 &&
               allArticle.map((data, index) => {
                  return <SmallImageCard key={index} data={data} setslug={setslug} setisModelOpen={setisModelOpen} />
               })}
         </div>
      </div>
   )
}

export default App
