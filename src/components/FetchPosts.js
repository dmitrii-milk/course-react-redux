import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions';
import Post from './Post';
import { Loading } from "./Loading";



export default () => {

    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.fetchPosts);
    const loading = useSelector(state => state.app.loading)

    if(loading) {
        return <Loading/>
    }

    if(!posts.length) {
        return <button 
        className='btn btn-primary'
        onClick={() => dispatch(fetchPosts())}
        >Загрузить</button>
    }
    return (
         posts.map(posts => <Post post={posts} key={posts.id}/>)
    )
}