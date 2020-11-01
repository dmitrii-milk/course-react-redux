import React from 'react';
import {connect} from 'react-redux'
import Post from './Post';



const Posts = ({syncPosts}) => {
    if(!syncPosts.length) {
        return <p className='text-center'>Постов пока нет</p>
    }
    return syncPosts.map(posts => <Post post={posts} key={posts.id}/>)
}

const mapStateToProps = state => {
    //эта функция преобразовует весь стейт в пропсы
    console.log(state);
    return {
        syncPosts: state.posts.posts
    }
}

export default connect(mapStateToProps, null)(Posts)