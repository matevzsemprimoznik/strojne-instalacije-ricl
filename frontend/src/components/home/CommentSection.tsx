import Comment from "@/components/Comment";
import React, {FC} from "react";
import {Comment as CommentType} from "@/types";

interface CommentSectionProps {
    comments: CommentType[]
}
const CommentSection:FC<CommentSectionProps> = ({comments= []}) => {
    return <div className='pt-20'>
        <h2 className='font-bold text-4xl mb-12 mx-24'><span className='text-custom-blue'>Mnenja</span> strank </h2>
        <div className='flex max-w-full  flex-nowrap mx-24 my-16'>
            {comments.map((comment, index) => <Comment key={index} date={comment.attributes.date} comment={comment.attributes.comment} author={comment.attributes.author} />)}
        </div>
    </div>
}

export default CommentSection