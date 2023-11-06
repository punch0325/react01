import $ from 'jquery'
import React from 'react';
import ReactDOM from 'react-dom/client';

$('h1').fadeOut(0).fadeIn(5000);

let root = ReactDOM.createRoot(document.querySelector('#root'));

// fn형 컴포넌트
function Color(){
	let color = ['pink','purple','skyblue','yellow']
	return (
		<ol>
			{                   // v는 value, 배열의 값. i는 index 배열의 순서번호
				color.map((v , i) => <li key={i}>{v}</li>)
													 // 고유한 key값을 주지 않으면 웹브라우저 콘솔에 Warning이 뜬다 그래서 i값을 이용함
			}
		</ol>
	)
}

// class형 컴포넌트(반드시 React의 Component class를 상속 받아야 함)
class Name extends React.Component{
	constructor(){
		super();   // 상속을 받았으므로 부모 생성자를 반드시 호출
	}

	name = ['eunbi','junseok','punch','tenten']
	
	render(){
		return(
			<ul>
				{ this.name.map((v , m) => <li key={m}>{v}</li>)}
			</ul>
		)
	}
}

// 컴포넌트를 태그처럼 사용할 수 있다.
root.render(<Name/>)
//root.render(<Color/>)