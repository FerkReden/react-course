import { FC, useEffect, useState } from "react";

import { IComment } from "../../interfaces";
import { commentService } from "../../services";
import { Comment } from "./Comment";

interface IProps {
    postId: number
}

const Comments: FC<IProps> = ({postId}) => {

    const [comments, setComments] = useState<IComment[]>([])

    useEffect(() => {
        commentService.getByPostId(postId).then(({data}) => setComments(data))
    }, [postId])

    return (
        <div>
            {comments.map((comment) => <Comment key={comment.id} comment={comment}/>)}
        </div>
    )
};

export { Comments };