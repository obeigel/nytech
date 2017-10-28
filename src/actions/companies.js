import axios from 'axios';

export const REQUEST_COMPANIES  = 'REQUEST_COMPANIES';
export const GET_COMPANIES  = 'GET_COMPANIES';
export const ADD_COMPANY = 'ADD_COMPANY';
export const DELETE_COMPANY = 'DELETE_COMPANY';
export const EDIT_COMPANY = 'EDIT_COMPANY';
export const GET_TAGS = 'GET_TAGS';
export const SET_FILTER = 'SET_FILTER';

const companies_url = 'http://localhost:8000/api/companies';
const company_url = 'http://localhost:8000/api/company';
const tags_url = 'http://localhost:8000/api/tags';

export function getCompanies() {
    return dispatch => {
        dispatch({
            type: REQUEST_COMPANIES
        });

        return axios.get(companies_url)
            .then(response => {
                return response.data;
            })
            .then(companies => {
                dispatch({
                    type: GET_COMPANIES,
                    companies
                })
            });
    };
}

export function getTags() {
    return dispatch => {
        return axios.get(tags_url)
            .then(response => response.data)
            .then(tags => {
                dispatch({
                    type: GET_TAGS,
                    tags
                })
            });
    };
}

export function addCompany(company) {
    console.log('add company api', company);
    return dispatch => {
        return axios.post(`${companies_url}/${company.slug}`, company)
            .then(response => response.data)
            .then(response => {
                dispatch({
                    type: ADD_COMPANY,
                    company
                })
            });
    };
}

export function editCompany(company) {
    console.log('edit company api', company);
    
    return axios.put(`${company_url}/${company.slug}`, company)
        .then(response => response.data)
        .then(response => {
            console.log('response', response, company); 
            return {
                type: EDIT_COMPANY,
                company
            }
        })
}

export function deleteCompany(slug) {
    console.log('delete company api', slug);
    
    return axios.delete(`${company_url}/${slug}`)
        .then(response => response.data)
        .then(response => ({
            type: DELETE_COMPANY,
            slug
        }));
    
}

export function setFilter(filter) {
    console.log('action filter', filter);
    return {
        type: SET_FILTER,
        filter
    };
}