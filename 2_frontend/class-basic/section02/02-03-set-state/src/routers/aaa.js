import{ Link } from 'react-router-dom'

const Aaa = () => { 

    return(
        <>
            <div>Aaa 페이지 입니다.</div>

            {/* 
                1. 리액트를 사용한 페이지 전환: 현재 페이지에서 JS로 태그를 바꿔서 보여주는 형태 
                하나의 페이지에서 태그만 바꿔서 보여주기 때문에 SPA(Single Page Application)
            */}
            <Link to="/bbb">Bbb 페이지로 갈래요.</Link>

            {/* 2. HTML 방식: 새로운 문서로 이동하기(느림): MPA(Multi Page Application) */}
            <a href="/bbb">Bbb 페이지로 이동하기</a>
        </>
    );
}

// 컴포넌트는 한 파일에 하나만 작성하는 것을 원칙으로 한다.
// 그래서 다른 컴포너는트가 없기 때문에 디폴트로 설정한다.
export default Aaa