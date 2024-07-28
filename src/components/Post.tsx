

interface PostData {
  date: string;
  title: string;
  image: string;
  content: string;
}

interface PostProps{
post: PostData;

}

export function Post ({ post }:PostProps){
const {date,title,image,content} = post

return (
<section className="post-section">
<div className="date">{date}</div>
<div className = "post-title">{title}</div>
<div><img src={image} alt="" /></div>
<div className="content">{content}</div>

</section>


)


}