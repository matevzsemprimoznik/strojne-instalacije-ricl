import React, { FC } from 'react';

type CommentProps = {
    date: string;
    comment: string;
    author: string
};

const Comment: FC<CommentProps> = ({ date, comment, author }) => {
    return (
        <div className='sm:px-2'>
            <div className='flex flex-col text-center items-center rounded-3xl border-8 border-myLightBlue shadow-xl shadow-myLightBlue px-5 sm:px-8 py-8'>
                <p className='font-bold text-myDarkGrey'>{date}</p>
                <p className='font-bold my-3'>{comment}</p>
                <p className='font-bold text-custom-blue'>{author}</p>
            </div>
        </div>
    )
}

export default Comment