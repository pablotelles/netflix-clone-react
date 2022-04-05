import React from "react";

const API_KAY = '2d3c8345a65eab1e9218b49de83a9dcd';
const API_BASE = 'https://api.themoviedb.org/3'

const basicFatch = async (endpoint) => {

    const req = await fetch(`${API_BASE}${endpoint}`)
    const json = await req.json();
    return json;
}
export default {    
    getHomeList: async () =>{
        return [
            {
                slug: 'originals',
                title: 'Originais Netflix',
                type: 'tv',
                items: await basicFatch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KAY}&append_to_response=videos,images`)
            },
            {
                slug: 'em-alta',
                title: 'Filmes em alta',
                type: 'movie',
                items: await basicFatch(`/discover/movie?sort_by=popularity.desc&api_key=${API_KAY}&append_to_response=images`)
            },     

            {
                slug: 'trending',
                title: 'Recomendados',
                type: 'movie',
                items: await basicFatch(`/trending/all/week?language=pt-BR&api_key=${API_KAY}&append_to_response=videos,images`)
            },
            {
                slug: 'kids',
                title: 'Kids',
                type: 'movie',
                items: await basicFatch(`/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&language=pt-BR&api_key=${API_KAY}&append_to_response=videos,images`)
            },

            {
                slug: 'comdey',
                title: 'Comédia',
                type: 'movie',
                items: await basicFatch(`/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc&language=pt-BR&api_key=${API_KAY}&append_to_response=videos,images`)
            },
            {
                slug: 'action',
                title: 'Ação',
                type: 'movie',
                items: await basicFatch(`/discover/movie?with_genres=28&video=true&language=pt-BR&api_key=${API_KAY}&append_to_response=videos,images`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                type: 'movie',
                items: await basicFatch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KAY}&append_to_response=videos,images`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                type: 'movie',
                items: await basicFatch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KAY}&append_to_response=videos,images`)
            },
            {
                slug: 'documentary',
                title: 'Documentário',
                type: 'movie',
                items: await basicFatch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KAY}&append_to_response=videos,images`)
            },
 
        ]        
    },    
    getMovieInfo: async (movieId) => {
        if (movieId) {      
                     let info = await basicFatch(`/tv/${movieId}?language=pt-BR&api_key=${API_KAY}&append_to_response=videos,images`)
                     
                    return info;                 
           }
    },
    getMovieById: async (movieId, type) => {
        if (movieId) {      
                     let info = await basicFatch(`/${type}/${movieId}?language=pt-BR&api_key=${API_KAY}&append_to_response=videos,images`)
                     
                    return info;                 
           }
    },
}