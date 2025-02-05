// 기본적으로 node_modules 에서 찾는다.
import React from 'react'

// 컴포넌트는 첫글자를 대문자로 시작!
const Board = () => {
    // use 로 시작하는 것은 Hook!
    const [writer, setWriter] = React.useState("")
    const [title, setTitle] = React.useState("")
    const [content, setContent] = React.useState("")

    const [isActive, setIsActive] = React.useState(false)

    // handleChangeWriter 함수명으로도 사용할 수 있음.
    function onChangeWriter(event) {
        // event.target => 이벤트가 발생한 태그
        // event.target.value => 이벤트가 발생한 태그에서 입력받은 값
        const value = event.target.value
        setWriter(value)
        
        // useState의 set 함수로 변하는 값이 비동기적이기 때문에 들어오는 value 값과 비교한다..! 와우
        if(value && title && content) {
            // early-exit 패턴 
            return setIsActive(true)    
        }
            
        setIsActive(false)
    }

    function onChangeTitle(event) {
        const value = event.target.value
        setTitle(value)

        // return 1줄인 경우 아래와 같이 축약해서 사용할 수 있다.
        if(writer && value && content) return setIsActive(true) 
        setIsActive(false)
    }

    // 함수를 onChange에 바인딩한다고 표현한다.
    function onChangeContent(event) {
        const value = event.target.value
        setContent(value)

        if(writer !== "" && title !== "" && value !== "") {
            setIsActive(true)    
        } else {
            setIsActive(false)
        }
    }

    function onClickSubmit(event) {
        console.log(writer);
        console.log(title);
        console.log(content);
        alert("게시글 등록에 성공하였습니다.")
    }
    
    const buttonStyle = {
        backgroundColor: "red",
        color: "white",
        border: "1px solid white",
        borderRadius: "8px"
    }

    // 하나의 태그만 반환할 수 있기 때문에 <div> 또는 <> 프레그먼트로 감싸줘야한다.
    return (
        <div>
            {/* JSX에서 함수나 변수를 사용하고 싶을 때, {} 안에 넣어서 사용한다. */}
            작성자: <input type="text" onChange={onChangeWriter} />
            <br />
            제목: <input type="text" onChange={onChangeTitle} />
            <br />
            내용: <input type="text" onChange={onChangeContent} />
            <br />
            <button onClick={onClickSubmit} style={{backgroundColor: isActive === true ? "blue" : "lightGray"}}>등록하기</button>
        </div>
    );
}

// 컴포넌트는 일반적으로 하나의 파일 당 한개만 만들기 때문에 디폴트로 내보낸다.
export default Board;