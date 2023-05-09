import React, { FC } from 'react';
import {formatDate} from "@/utils/date";

type CommentProps = {
    date: Date;
    comment: string;
    author: string
};

const Comment: FC<CommentProps> = ({ date, comment, author }) => {
    return (
        <div className='p-2 '>
            <div className='flex flex-col text-center bg-white items-center rounded-3xl shadow-lg shadow-custom-light-blue-shadow px-5 sm:px-8 py-8'>
                <p className='font-bold text-myDarkGrey'>{formatDate(date)}</p>
                <p className='font-bold my-3'>{comment}</p>
                <p className='font-bold text-custom-blue'>{author}</p>
            </div>
        </div>
    )
}

export default Comment