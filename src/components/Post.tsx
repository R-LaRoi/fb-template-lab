

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
<section>
<div>{date}</div>
<div>{title}</div>
<div><img src={image} alt="" /></div>
<div>{content}</div>



</section>


)


}