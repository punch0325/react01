

import $ from "jquery"
//react를 사용하기 위해서 아래 2개를 import
import React  from "react"; 
import ReactDOM from "react-dom/client";

$('h1').slideUp(0).slideDown(3000);

let lang = ['java','css','html','js']
// react 사용 문법
let root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
	<ol>
		{ // 이 브레스({ }) 안에서 HTML 문법을 사용할 수 있다.
			
			lang.map((v , i) => <li key={i}>{v}</li>)
				//map(): 배열의 해당 인덱스에 해당 값을 매치시켜주는 것

//			lang.map(function(v , i){
//				return <li key={i}>{v}</li>
//			})
		}
	</ol>
)



//root.render(
//	
//	
//	<ol>
//		<li>java</li>
//		<li>css</li>
//		<li>jquery</li>
//		<li>html</li>
//		<li>js</li>
//	</ol>
//)