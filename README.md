# 게시판 만들기1

기본적인 기능만 가진 게시판 만들기를 하였다. ajax 만을 이용한다는 조건을 가지고 최대한 만들려고 했다.
템플릿을 이용하여 만들 수 있지만 ajax 공부한다는 의미를 가지고 만들었다.

## 사용 기술
- Backend

  ○ Java
  
  ○ Spring Boot
  
  ○ Spring web
  
  ○ Lombok
  
  ○ Spring security
  
  ○ oauth kakao api

- Frontend

  ○ HTML
  
  ○ CSS
  
  ○ ajax

- DB

  ○ h2
  
  ○ mysql

1. 전체 게시글 목록 조회 페이지
- 제목, 작성자명, 작성 날짜
- 작성 날짜를 기준으로 내림차순
- 특정 게시글 클릭시 게시글 조회 페이지 이동

2. 게시글 작성 페이지
- 제목, 작성자명, 작성내용 입력

3. 게시글 조회 페이지
- 제목, 작성자명, 작성 날짜, 작성 내용 조회

그리고 XSS를 추가하였다.
