import Comments from './Comments.js'
function Posts() {
    let post = 
    [
        {pic:'https://www.ikea.com/sa/en/images/products/phalaenopsis-potted-plant-orchid-2-stems__0900618_pe594594_s5.jpg?f=s',title:"flower1"},
        {pic:'https://www.ikea.com/sa/en/images/products/phalaenopsis-potted-plant-orchid-2-stems__0654051_pe708274_s5.jpg?f=s',title:"flower2"},
        {pic:'https://www.ikea.com/sa/en/images/products/phalaenopsis-potted-plant-orchid-2-stems__0900614_pe594526_s5.jpg?f=s',title:"flower3"}
    ]



    return(
        <div > 

            {post.map(x =><div>
             <img src = {x.pic}/> 
             <h1>{x.title}</h1>
             <div>
                <Comments/>
            </div>
            </div>)}
            
            
        </div>

    )
}

export default Posts 







