import Comment from "@/components/Comment";
import React, {FC} from "react";
import {Comment as CommentType} from "@/types";
import Carousel from "@/components/home/Carousel";

interface CommentSectionProps {
    comments: CommentType[]
}
const CommentSection:FC<CommentSectionProps> = ({comments= []}) => {
    return <div className='pt-20 container'>
        <h2 className='font-bold text-4xl mb-12'><span className='text-custom-blue'>Mnenja</span> strank </h2>
        <div className='my-16'>
            <Carousel>
                {comments.map((comment, index) => <Comment key={index} date={comment.attributes.date} comment={comment.attributes.comment} author={comment.attributes.author} />)}
            </Carousel>
        </div>
    </div>
}

export default CommentSection