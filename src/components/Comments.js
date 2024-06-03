import React, { useEffect, useState } from 'react'

const getCommentObj = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(
            [
                {
                    profile: '@janmejaya',
                    thumnail: 'https://yt3.ggpht.com/yti/ANjgQV_Ziuk9BiLlSzuYHWXqQCCOhO1kwpUf13EPl9UcRw=s88-c-k-c0x00ffffff-no-rj',
                    comment: 'verry Good',
                    replies: [
                        {
                            profile: '@janmejaya',
                            thumnail: 'https://yt3.ggpht.com/yti/ANjgQV_Ziuk9BiLlSzuYHWXqQCCOhO1kwpUf13EPl9UcRw=s88-c-k-c0x00ffffff-no-rj',
                            comment: 'Inner replies',
                            replies: [
                            
                            ]
                        },
                        {
                            profile: '@janmejaya',
                            thumnail: 'https://yt3.ggpht.com/yti/ANjgQV_Ziuk9BiLlSzuYHWXqQCCOhO1kwpUf13EPl9UcRw=s88-c-k-c0x00ffffff-no-rj',
                            comment: 'Inner replies',
                            replies: [
                            
                            ]
                        }
                    
                    ]
                },
                {
                    profile: '@janmejaya',
                    thumnail: 'https://yt3.ggpht.com/yti/ANjgQV_Ziuk9BiLlSzuYHWXqQCCOhO1kwpUf13EPl9UcRw=s88-c-k-c0x00ffffff-no-rj',
                    comment: 'verry Good',
                    replies: [
                        {
                            profile: '@janmejaya',
                            thumnail: 'https://yt3.ggpht.com/yti/ANjgQV_Ziuk9BiLlSzuYHWXqQCCOhO1kwpUf13EPl9UcRw=s88-c-k-c0x00ffffff-no-rj',
                            comment: 'Inner replies',
                            replies: [
                                {
                                    profile: '@janmejaya',
                                    thumnail: 'https://yt3.ggpht.com/yti/ANjgQV_Ziuk9BiLlSzuYHWXqQCCOhO1kwpUf13EPl9UcRw=s88-c-k-c0x00ffffff-no-rj',
                                    comment: 'Inner Inner replies',
                                    replies: [
                                        {
                                            profile: '@janmejaya',
                                            thumnail: 'https://yt3.ggpht.com/yti/ANjgQV_Ziuk9BiLlSzuYHWXqQCCOhO1kwpUf13EPl9UcRw=s88-c-k-c0x00ffffff-no-rj',
                                            comment: 'Inner Inner Inner replies',
                                            replies: [
                                            
                                            ]
                                        }
                                    
                                    ]
                                }
                            
                            ]
                        }
                    
                    ]
                },
                {
                    profile: '@janmejaya',
                    thumnail: 'https://yt3.ggpht.com/yti/ANjgQV_Ziuk9BiLlSzuYHWXqQCCOhO1kwpUf13EPl9UcRw=s88-c-k-c0x00ffffff-no-rj',
                    comment: 'verry Good',
                    replies: [
                        {
                            profile: '@janmejaya',
                            thumnail: 'https://yt3.ggpht.com/yti/ANjgQV_Ziuk9BiLlSzuYHWXqQCCOhO1kwpUf13EPl9UcRw=s88-c-k-c0x00ffffff-no-rj',
                            comment: 'verry Good',
                            replies: [
                                {
                                    profile: '@janmejaya',
                                    thumnail: 'https://yt3.ggpht.com/yti/ANjgQV_Ziuk9BiLlSzuYHWXqQCCOhO1kwpUf13EPl9UcRw=s88-c-k-c0x00ffffff-no-rj',
                                    comment: 'Inenr Replies',
                                    replies: [
                                    
                                    ]
                                },
                                {
                                    profile: '@janmejaya',
                                    thumnail: 'https://yt3.ggpht.com/yti/ANjgQV_Ziuk9BiLlSzuYHWXqQCCOhO1kwpUf13EPl9UcRw=s88-c-k-c0x00ffffff-no-rj',
                                    comment: 'Inenr Replies',
                                    replies: [
                                    
                                    ]
                                },
                                {
                                    profile: '@janmejaya',
                                    thumnail: 'https://yt3.ggpht.com/yti/ANjgQV_Ziuk9BiLlSzuYHWXqQCCOhO1kwpUf13EPl9UcRw=s88-c-k-c0x00ffffff-no-rj',
                                    comment: 'Inenr Replies',
                                    replies: [
                                    
                                    ]
                                }
                            
                            ]
                        }
                    
                    ]
                },
                {
                    profile: '@janmejaya',
                    thumnail: 'https://yt3.ggpht.com/yti/ANjgQV_Ziuk9BiLlSzuYHWXqQCCOhO1kwpUf13EPl9UcRw=s88-c-k-c0x00ffffff-no-rj',
                    comment: 'verry Good',
                    replies: [
                    
                    ]
                },
                {
                    profile: '@janmejaya',
                    thumnail: 'https://yt3.ggpht.com/yti/ANjgQV_Ziuk9BiLlSzuYHWXqQCCOhO1kwpUf13EPl9UcRw=s88-c-k-c0x00ffffff-no-rj',
                    comment: 'verry Good',
                    replies: [
                    
                    ]
                }
            ]
        ), 5000)
    })
}

const CommentBox = ({comment}) => {
    
    return (
        <div className='flex gap-2 my-2 border-l'>
            <img className='rounded-full w-9 h-9' alt='oops' src={comment.thumnail}></img>
            <div>
                <h2>{comment.profile}</h2>
                <p>{comment.comment}</p>
                {comment.replies.map((data)=><CommentBox comment={data}/>)}
            </div>
        </div>
    )
}
const Comments = () => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        getComments()
    } , []);
    async function getComments() {
        const data = await getCommentObj();
        console.log(data)
        setComments(data)
    }
  return (
      <div className='mx-5 my-3'>
          <h2 className='text-xl font-bold my-3'>{10} Comments</h2>
          {comments.map((data, index) => <CommentBox comment={data} /> )}
      </div>
  )
}

export default Comments