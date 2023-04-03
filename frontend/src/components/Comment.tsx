import React, { FC } from 'react';
import {formatDate} from "@/utils/date";

type CommentProps = {
    date: string;
    comment: string;
    author: string
};

const Comment: FC<CommentProps> = ({ date, comment, author }) => {
    return (
        <div className='px-3'>
            <div className='flex flex-col text-center items-center rounded-3xl border-8 border-myLightBlue bg-white  shadow-myLightBlue px-12 py-8'>
                <p className='font-bold text-myDarkGrey mb-5'>{formatDate(date)}</p>
                <p className='font-bold'>{comment}</p>
                <p className='font-bold text-custom-blue mt-5'>{author}</p>
            </div>
        </div>
    )
}

export default Comment