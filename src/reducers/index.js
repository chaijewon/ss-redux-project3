import {MOVIE_BOX,MOVIE_SHC,MOVIE_REAL} from "../actions";

// reducer => 사용자 요청을 처리 부분
import {combineReducers} from "redux";
import axios from 'axios'
const initialState={
    movie:[

        {

            "mno" : 1,
            "title" : "인비저블맨 (2020)",
            "poster" : "//img1.daumcdn.net/thumb/C155x225/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F6f7e0d87352effe5822812efb79509bee64a68d3",
            "score" : 6.7,
            "genre" : "공포",
            "regdate" : "2020.02.26 개봉",
            "time" : "124분",
            "grade" : "15세이상관람가",
            "director" : "(감독) 리 워넬",
            "actor" : "(주연) 엘리자베스 모스",
            "story" : "모든 것을 통제하려는 소시오패스 남자에게서 도망친 세실리아 그의 자살 소식과 함께 상속받게 된 거액의 유산 하지만 그날 이후, 누구에게도 보이지 않는 존재가 느껴지기 시작했다!",
            "type" : 1
        },


        {

            "mno" : 2,
            "title" : "1917 (2019)",
            "poster" : "//img1.daumcdn.net/thumb/C155x225/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fmovie-private%2Ff9e87dc2c95d52f792bb2db809c62ac3f24dabf7",
            "score" : 7.3,
            "genre" : "전쟁/드라마",
            "regdate" : "2020.02.19 개봉",
            "time" : "119분",
            "grade" : "15세이상관람가",
            "director" : "(감독) 샘 멘데스",
            "actor" : "(주연) 조지 맥케이, 딘 찰스 채프먼",
            "story" : "두 명의 병사, 하나의 미션! 그들이 싸워야 할 것은 적이 아니라 시간이었다! 제1차 세계대전이 한창인 1917년. 독일군에 의해 모든 통신망이 파괴된 상황 속에서 영국군 병사 '스코필드'(조지 맥케이)와 '블레이크'(딘-찰스 채프먼)에게 하나의 미션이 주어졌다. 함정에 빠진 영국군 부대의 수장 '매켄지' 중령(베네딕트 컴버배치)에게 '에린무어' 장군(콜린 퍼스)의 공격 중지 명령을 전하는 것! 둘은 1600명의 아군과 '블레이크'의 형(리차드 매든)을 구하기 위해 전쟁터 한복판을 가로지르며 사투를 이어가는데...",
            "type" : 1
        },


        {

            "mno" : 3,
            "title" : "다크 워터스 (2019)",
            "poster" : "//img1.daumcdn.net/thumb/C155x225/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fmovie-private%2F8311f1e8e7c4838003ff704e436f1e588fb1f0fc",
            "score" : 9.3,
            "genre" : "드라마",
            "regdate" : "2020.03.11 개봉",
            "time" : "127분",
            "grade" : "12세이상관람가",
            "director" : "(감독) 토드 헤인즈",
            "actor" : "(주연) 마크 러팔로, 앤 해서웨이",
            "story" : "인류의 99%는 이미 중독되었다 제작진의 충격 고발 실화 젖소 190마리의 떼죽음 메스꺼움과 고열에 시달리는 사람들 기형아들의 출생 그리고, 한 마을에 퍼지기 시작한 중증 질병들... 대기업의 변호를 담당하는 대형 로펌의 변호사 ‘롭 빌럿’(마크 러팔로)은 세계 최대의 화학기업 듀폰의 독성 폐기물질(PFOA) 유출 사실을 폭로한다. 그는 사건을 파헤칠수록 독성 물질이 프라이팬부터 콘택트렌즈, 아기 매트까지 우리 일상 속에 침투해 있다는 끔찍한 사실을 알게 되고 자신의 커리어는 물론 아내 ‘사라’(앤 해서웨이)와 가족들, 모든 것을 건 용기 있는 싸움을 시작한다. 대한민국에서도 일어나고 있는 현재진행형 실화가 공개된다",
            "type" : 1
        },

        {

            "mno" : 4,
            "title" : "작은 아씨들 (2019)",
            "poster" : "//img1.daumcdn.net/thumb/C155x225/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F1d80cc8636c644aabd2597fc090183101579244282177",
            "score" : 7.5,
            "genre" : "드라마/로맨스/멜로",
            "regdate" : "2020.02.12 개봉",
            "time" : "135분",
            "grade" : "전체관람가",
            "director" : "(감독) 그레타 거윅",
            "actor" : "(주연) 시얼샤 로넌, 엠마 왓슨, 플로렌스 퓨, 엘리자 스캔런, 로라 던, 티모시 샬라메, 메릴 스트립",
            "story" : "Dear women 그해 겨울, 사랑스러운 자매들을 만났다 배우가 되고 싶은 첫째 메그(엠마 왓슨) 작가가 되고 싶은 둘째 조(시얼샤 로넌) 음악가가 되고 싶은 셋째 베스(엘리자 스캔런) 화가가 되고 싶은 막내 에이미(플로렌스 퓨) 이웃집 소년 로리(티모시 샬라메)는 네 자매를 우연히 알게되고 각기 다른 개성의 네 자매들과 인연을 쌓아간다. 7년 후, 어른이 된 그들에겐 각기 다른 숙제가 놓이게 되는데…",
            "type" : 1
        },

        {

            "mno" : 5,
            "title" : "지푸라기라도 잡고 싶은 짐승들 (2019)",
            "poster" : "//img1.daumcdn.net/thumb/C155x225/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fmovie-private%2F1eb1d9d691e8ff57dfe489610bf2ea5407f8a99a",
            "score" : 6.9,
            "genre" : "범죄/스릴러",
            "regdate" : "2020.02.19 개봉",
            "time" : "108분",
            "grade" : "청소년관람불가",
            "director" : "(감독) 김용훈",
            "actor" : "(주연) 전도연, 정우성, 배성우, 윤여정, 신현빈, 정만식, 진경, 정가람, 김준한",
            "story" : "[모든 것은 돈 가방과 함께 시작되었다.] 사라진 애인 때문에 사채 빚에 시달리며 한 탕을 꿈꾸는 태영. 아르바이트로 가족의 생계를 이어가는 가장 중만. 과거를 지우고 새 인생을 살기 위해 남의 것을 탐하는 연희. 벼랑 끝에 몰린 그들 앞에 거액의 돈 가방이 나타나고, 마지막 기회라 믿으며 돈 가방을 쫓는 그들에게 예기치 못한 사건들이 발생한다. [“큰돈 들어왔을 땐 아무도 믿음 안돼”] 고리대금업자 박사장, 빚 때문에 가정이 무너진 미란, 불법체류자 진태, 가족의 생계가 먼저인 영선, 기억을 잃은 순자까지... 절박한 상황 속 서로 속고 속이며 돈 가방을 쫓는 그들은 인생을 바꿀 수 있는 마지막 한탕을 계획한다.",
            "type" : 1
        }
    ]
}
// reducer
const movieData=(state=initialState,action)=>{
    switch(action.type)
    {
        case MOVIE_REAL:
            return {
                ...state,
                movie:action.movie
            }
        case MOVIE_SHC:
            return {
                ...state,
                movie:action.movie
            }
        case MOVIE_BOX:
            return {
                ...state,
                movie:action.movie
            }
        default:
            return state;
    }
}

const movieApp=combineReducers({
    movieData
})

export default movieApp;

