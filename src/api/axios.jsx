import axios from 'axios';

export const URL = 'http://localhost:8080';

// 기본 인스턴스
export const instance = axios.create({
    baseURL: URL,
    headers: { 'Content-Type': 'application/json' },
});

// 이미지 인스턴스
export const imgInstance = axios.create({
    baseURL: URL,
    headers: { 'Content-type': 'multipart/form-data' },
});
