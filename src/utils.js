import axios from "axios"

export const instance = () => {
   return axios.create({
      baseURL: `https://api.theinnerhour.com/v1`
   })
}

export const getAllArticle = async () => {
   const newInstance = instance()
   try {
      return await newInstance.get("/customers/resources/articles/list?page=1&limit=10")
   } catch (error) {
      console.log(error)
      //    handleApiError(error)
   }
}

export const getArticleBySlug = async (slug) => {
   const newInstance = instance()
   try {
      return await newInstance.get(`/blogdetail/${slug}`)
   } catch (error) {
      console.log(error)
      //    handleApiError(error)
   }
}

export const AppIcon = () => {
   return (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M33.2341 59.234H18.4868L14.9787 56.4061V44.507L33.2341 59.234Z" fill="#FFB41D" />
         <path d="M49.0871 34.5471V46.4434L33.2341 59.234H18.4868L49.0871 34.5471Z" fill="#061E5C" />
         <path d="M33.2341 44.3449H18.4868L14.9787 41.5141V29.6179L33.2341 44.3449Z" fill="#FFB41D" />
         <path d="M49.0871 19.6551V31.5542L33.2341 44.3449H18.4868L49.0871 19.6551Z" fill="#061E5C" />
         <path d="M33.2341 29.4558H18.4868L14.9787 26.625V14.7287L33.2341 29.4558Z" fill="#FFB41D" />
         <path d="M49.0871 4.76596V16.6622L33.2341 29.4558H18.4868L49.0871 4.76596Z" fill="#061E5C" />
      </svg>
   )
}
export const SearchIcon = () => {
   return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path
            d="M11 17C14.3137 17 17 14.3137 17 11C17 7.68629 14.3137 5 11 5C7.68629 5 5 7.68629 5 11C5 14.3137 7.68629 17 11 17Z"
            stroke="#4C4C4C"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
         />
         <path d="M19 19L15.5 15.5" stroke="#4C4C4C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
   )
}
