import React from 'react'
import marked from 'marked'


const Post = ({article}) => {
    console.log(article);
    const {names, featuredImage, description} = article.fields
    const postDescription = marked(description)
    return (
        <div className='post'>
            <h2 className='title'>{names}</h2>
            {featuredImage && <img className='featuredImage' src={featuredImage.fields.file.url} alt={names} title={names}/>}
            <section dangerouslySetInnerHTML={{ __html: postDescription }} />
        </div>
    )
}



export default Post
