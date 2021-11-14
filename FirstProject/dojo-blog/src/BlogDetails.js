import { useParams } from "react-router";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const BlogDetails = () => {
    const { id } = useParams();
    const {data: blog, error, isPending} = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();
    const [Pending, setPending] = useState(false);


    const handleClick = e => {
        setPending(true);

        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(()=>{
            console.log('blog deleted!');
            setPending(false);
            history.push('/')
        })
    };

    return (
        <div className="blog-details">
            { isPending && <div>Loading...</div>}
            { error && <div>{ error }</div>}
            { blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by { blog.author } </p>
                    <div>{ blog.body }</div>

                    {!Pending && <button onClick={handleClick}>delete</button>}
                    {Pending && <button disabled>deleting...</button>}
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;