import { useEffect, useState } from "react"

import ReactDOM from "react-dom"
import { getArticleBySlug } from "../utils"
const Backdrop = (props) => {
   return (
      <div className="BlogModel">
         <div className="backdrop"></div>
         <div className="BlogModel-wrap">
            <div className="BlogModel-close" onClick={props.modelCloseHandler}>
               X
            </div>
            <div className="BlogModel-body">
               <img width="100%" src={`https:${props.data.thumb}`} alt="blog img" />
               <div>
                  <h3 className="BlogModel-head">{props.data.title}</h3>
                  <p className="BlogModel-description" dangerouslySetInnerHTML={{ __html: props.data.body }}></p>
               </div>
            </div>
         </div>
      </div>
   )
}

const BlogModel = (props) => {
   const [blogDetail, setblogDetail] = useState({})

   useEffect(() => {
      const getBlogDetailHandler = async () => {
         try {
            const j = await getArticleBySlug(props.slug)
            setblogDetail(j.data.blog)
            //  setallArticle(j.data.data)
            //  setbaseArticle(j.data.data)
         } catch (error) {
            console.log(error)
         }
      }
      getBlogDetailHandler()

      return () => {}
   }, [props.slug])

   console.log(props)
   return (
      <>{ReactDOM.createPortal(<Backdrop modelCloseHandler={props.modelCloseHandler} data={blogDetail} />, document.getElementById("model-root"))}</>
   )
}
export default BlogModel
