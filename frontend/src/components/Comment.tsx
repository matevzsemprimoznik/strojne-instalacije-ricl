import React, { FC } from 'react';

type CommentProps = {
    date: string;
    comment: string;
    author: string
};

const Comment: FC<CommentProps> = ({ date, comment, author }) => {
    return (
        <div className='flex flex-col text-center items-center rounded-3xl border-8 border-myLightBlue shadow-xl shadow-myLightBlue px-12 py-8 w-1/4 gap-y-4 mr-12'>
            <p className='font-bold text-myDarkGrey'>{date}</p>
            <p className='font-bold'>{comment}</p>
            <p className='font-bold text-custom-blue'>{author}</p>
        </div>
    )
}

export default Comment