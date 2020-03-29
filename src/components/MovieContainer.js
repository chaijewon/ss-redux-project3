import React,{Component} from "react";
import {connect} from 'react-redux'
import {movieBox,movieReal,movieShc} from "../actions";
import axios from "axios";

class MovieContainer extends Component{
    constructor(props) {
        super(props);
        this.onMovieRealData=this.onMovieRealData.bind(this);
        this.onMovieShcData=this.onMovieShcData.bind(this);
        this.onMovieBoxData=this.onMovieBoxData.bind(this);
    }
    onMovieRealData(){
        this.props.onMovieReal();
    }
    onMovieShcData(){
        this.props.onMovieShc();
    }
    onMovieBoxData(){
        this.props.onMovieBox();
    }
    render() {
        const html=this.props.movie.map((m,key)=>
            <div className="col-md-4" key={key}>
                <div className="thumbnail">
                    <a href="#">
                        <img src={m.poster} alt="Fjords" style={{"width":"100%"}}/>
                            <div className="caption">
                                <p>{m.title}</p>
                            </div>
                    </a>
                </div>
            </div>
        )
        return (
            <React.Fragment>
            <div className={"row"}>
                <button className={"btn btn-sm btn-primary"} onClick={this.onMovieRealData}>현재 상영영화</button>
                <button className={"btn btn-sm btn-primary"} onClick={this.onMovieShcData}>개봉 예정영화</button>
                <button className={"btn btn-sm btn-primary"} onClick={this.onMovieBoxData}>박스오피스</button>
            </div>
            <div className="row">
                {html}
            </div>
            </React.Fragment>

        )
    }
}
/*
    <Counter number={number} onDecrement={decrementAsyc}
                 onIncrement={incrementAysc}/>
 */
// store => 가지고 있는 state를 해당 컴포넌트의 props로 변환
// this.props.movie
let mapStateToProps=(state)=>{
    console.log(state.movieData.movie)
    return {
        movie:state.movieData.movie
    }
}
// <Counter onClick={onIncrement}>
// action에 등록된 action을 props로 변환한 역할
// this.props.onMovieReal();
let mapDispatchToProps=(dispatch)=>{
   return {
       onMovieReal:()=>{
           axios.get('http://localhost:3355/real_data',{
               params:{
                   page:1,
                   type:1
               }
           }).then((res)=>{
              dispatch(movieReal(res.data))
           })
       },
       onMovieBox:()=>{
           axios.get('http://localhost:3355/real_data',{
               params:{
                   page:2,
                   type:1
               }
           }).then((res)=>{
               dispatch(movieBox(res.data))
           })
       },
       onMovieShc:()=>{
           axios.get('http://localhost:3355/real_data',{
               params:{
                   page:3,
                   type:2
               }
           }).then((res)=>{
               dispatch(movieShc(res.data))
           })
       }
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(MovieContainer)
