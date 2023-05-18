const SmallImageCard = (props) => {
   const blogClickHandler = () => {
      console.log("run")
      props.setisModelOpen(true)
      props.setslug(props.data.slug)
   }

   return (
      <div className="SmallImageCard" onClick={blogClickHandler}>
         <img width="100%" src={`https:${props.data.thumb}`} alt="blog img" />
         <div>
            <h3 className="SmallImageCard-head">{props.data.title} </h3>
            <p className="SmallImageCard-description">{props.data.short_description}</p>
         </div>
      </div>
   )
}
export default SmallImageCard
