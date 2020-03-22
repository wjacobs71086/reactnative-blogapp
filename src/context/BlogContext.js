import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  switch(action.type){
    case 'edit_blogPost':
      return state.map(post => {
        return (post.id === action.payload.id) ? action.payload : post;
      })
    case 'delete_blogPost':
      return state.filter(post => post.id !== action.payload);
    case 'add_blogPost':
      return [...state, { 
        id: Math.floor(Math.random() * 99999),
        title: action.payload.title,
        content: action.payload.content,
      }]
    default:
      return state;
  }
};
 
const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({type: 'add_blogPost', payload: {title, content}});
    if( callback ) callback();
  }
}

const deleteBlogPost = ( dispatch ) => {
  return (id) => {
    dispatch({type: 'delete_blogPost', payload: id })
  }
}

const editBlogPost = ( dispatch ) => {
  return (id, title, content, callback) => {
    dispatch({type: 'edit_blogPost', payload: { id, title, content}})
    if( callback ) callback();
  }
}

export const { Context, Provider } = createDataContext(
  blogReducer, 
  { addBlogPost, deleteBlogPost, editBlogPost }, 
  [{title: 'TEST POST', content: 'TEST CONTENT', id: 1}])