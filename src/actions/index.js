/*
      redux
      react-redux
         => mapStateToProps
            => 변경된 state를 읽어 온다
         => mapDispatchToProps
            => Action을 전송하는 함수
               => dispatch(action함수)

         => connect
         => 모든 컴포넌트 => store
         <App store={store})
         createActions
         const increment=createAction(INCREMENT)
         const decrement=createAction(DECREMENT)

         const action=createActions({
            INCREMENT:()=>{구현}
         })
 */
//import {createAction} from 'react-redux'
import axios from "axios";
import {useState} from 'react'
export const MOVIE_REAL ='MOVIE_REAL';
export const MOVIE_SHC ='MOVIE_SHC';
export const MOVIE_BOX='MOVIE_BOX';

// 액션 생성
export function movieReal(data){

    return {
        type:MOVIE_REAL,
        movie:data
    }
}

export function movieShc(data){
    return {
        type:MOVIE_SHC,
        movie:data
    }
}

export function movieBox(data){
    return {
        type:MOVIE_BOX,
        movie:data
    }
}
