import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3000' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).result.token}`;
    }
  
    return req;
  });

export const fetchPosts = () => axios.get(`/posts/`);
export const createPost = (newPost) => axios.post(`/posts/`, newPost);
export const likePost = (id) => axios.patch(`/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) => axios.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`/posts/${id}`);

export const signIn = (formData) => axios.post(`/users/signin`, formData);
export const signUp = (formData) => axios.post(`/users/signup`, formData);