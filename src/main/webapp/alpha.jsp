<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="jakarta.tags.core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
	<%--  type을 module로 주면 dom객체가 완성 된 후 스트립트가 실행되기 때문에 
			   window.onload를 할 필요가 없다--%>
<script type="module" src="/js/react/alpha.js"></script>
<title>alpha.jsp</title>
</head>
<body>
<h1>Alpha</h1>
<hr>

<section id="root"></section>
</body>
</html>