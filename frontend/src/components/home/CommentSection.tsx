import Comment from "@/components/Comment";
import React, {FC} from "react";
import {Comment as CommentType} from "@/types";
import Carousel from "@/components/home/Carousel";
import i18nStore from "@/store/i18n.store";

interface CommentSectionProps {
    comments: CommentType[]
}
const CommentSection:FC<CommentSectionProps> = ({comments= []}) => {
    const dict = i18nStore.getState().dictionary;

    return <div className='pt-10 sm:pt-20 container'>
        <h2 className='font-bold text-4xl mb-12'><span className='text-custom-blue'>{dict['comments.title.1']}</span>{dict['comments.title.2']}</h2>
        <div className='my-16'>
            <Carousel>
                {comments.map((comment, index) => <Comment key={index} date={comment.attributes.date} comment={comment.attributes.comment} author={comment.attributes.author} />)}
            </Carousel>
        </div>
    </div>
}

export default CommentSection