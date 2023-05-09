import Comment from "@/components/Comment";
import React, {FC} from "react";
import Carousel from "@/components/home/Carousel";
import {Comment as CommentType} from '@prisma/client'
import {dictionaryType} from "@/types";

interface CommentSectionProps {
    comments: CommentType[]
    dict: dictionaryType
}
const CommentSection:FC<CommentSectionProps> = ({comments= [], dict}) => {
    return <div>
        <div className='absolute w-full bottom-0 left-0 -z-30'>
            <svg width="100%" height="1491" preserveAspectRatio='none' viewBox="0 0 1728 1491" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M501.729 0.555837C1510.54 -12.7818 2406.75 215.367 2707.11 528.356C2996.91 830.344 2568.54 1146.57 1779.55 1332.09C994.603 1516.67 -81.9892 1557.02 -848.407 1364.41C-1560.25 1185.52 -1487.91 858.431 -1212.46 580.177C-933.36 298.241 -409.57 12.6043 501.729 0.555837Z" fill="#DEF3FF"/>
            </svg>
        </div>
        <div className='pt-10 sm:pt-20 container'>
            <h2 className='font-bold text-4xl mb-12'><span className='text-custom-blue'>{dict['comments.title.1']}</span>{dict['comments.title.2']}</h2>

            <div className='my-16'>
                <Carousel>
                    {comments.map((comment, index) => <Comment key={index} date={comment.date} comment={comment.text} author={comment.client} />)}
                </Carousel>
            </div>
        </div>
    </div>
}

export default CommentSection