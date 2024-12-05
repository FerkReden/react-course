import { useForm } from 'react-hook-form';
import { postService } from '../../services/postService';

//@ts-ignore
const PostForm = ({setPosts}) => {

    const {reset, register, handleSubmit} = useForm();

    //@ts-ignore
    const save = (post) => {
        //@ts-ignore
        postService.create(post).then(({data}) => setPosts(prev => ([...prev, data])));
    }

    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type='text' placeholder={'title'} {...register('title')} />
                <input type='text' placeholder={'body'} {...register('body')} />
                <button>save</button>
            </form>
        </div>
    )
}

export { PostForm };