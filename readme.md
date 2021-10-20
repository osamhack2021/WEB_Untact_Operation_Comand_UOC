<img src="/docs/images/비작사-001.png" align="left"  width="100%" />
</div>

<p align="center">
  <a href="https://dpfprtus.gitbook.io/uoc/" target="_blank">
    <img src="https://img.shields.io/badge/GitBook-project_doc-blue?&style=for-the-badge&logo=github" />
  </a>
</p>

<br />

## 프로젝트 소개

코로나바이러스감염증-19(COVID-19)가 전 세계를 강타하면서 삶의 많은 부분이 변했습니다. 온라인으로 진행하는 행사와 강의, 무인 키오스크 등 모든 것을 <b>비대면</b>으로 행하는 사회가 되었습니다. 이에 따라 군 내에서도 비대면의 필요성이 대두 되었고, 현재 대부분의 컨텐츠는 <b>온라인으로 진행</b>하고 있습니다. 하지만 이것들은 실시간 영상 시청 방식을 사용하여 <b>일방적인 정보 전달만 가능</b>합니다. 게다가 군에서 사용하고 있는 화상회의 프로그램들은 상용 화상회의 프로그램들보다 훨씬 사용하기가 어렵습니다. 또한 효율적으로 상호작용 하기 위해서는 즉각적인 <b>양방향 소통이 가능</b>해야 합니다. 따라서 저희 비대면 작전사령부는 <b>화상회의 시스템</b>을 각 군 상황에 맞게 적용하고자 하였습니다. 웹에서 화상 통화가 가능하게 서비스할 것이고 현재 온라인으로 진행 중인 종교 활동이나 강의, 상담등 다양하게 이용할 수 있도록 기획하였습니다.

<br />

## 플랫폼 소개

### webRTC & socket io

<img src="/docs/images/화상회의리스트.png" align="left"/>
<img src="/docs/images/화상회의릿.png" align="left"/>

<br />

- 웹캠을 이용한 화상 통화 (1:N 통화 가능, 캠,마이크,스피커 설정 변경 가능)
- 컴퓨터 화면 공유 기능
- 채팅 기능
- 진행 중인 화상회의 목록 제공
- 회의 검색 기능
- 회의 생성 기능 (회의 이름, 썸네일, 설명, 비밀번호 설정 가능)
- 회의 참석자 목록 제공
- 회의 종료 (호스트가 회의 종료시 자동 회의 종료)

### Full Calander

<img src="/docs/images/일정관리.png" align="left"/><br/><br/><br/>

- 화상 회의 일정 등록,수정,삭제 가능
- 회의 일정 주/월/일별 확인 가능

### User

<img src="/docs/images/그룹관리.png" align="left"/>

<br />

- 친구 목록, 추가, 삭제 가능
- 친구와 1:1 화상채팅 원클릭 생성
- 개인 정보 수정 가능

### 모바일 지원

<img src="/docs/images/모바일지원.png" align="left"/>

<br/>

- 완벽한 모바일 호환
- 사용자 친화저인 UI/UX

### JWT & OAuth2.0

- jwt를 이용해 안전하게 사용자 인증 (로그인, 회원가입)
- OAuth2.0을 이용해 간편하고 안전한 소셜 로그인 (google 계정으로 회원가입, 로그인)

<br />

## 프로젝트 시연

<table>
	<tr>
		<td>
			<a href="https://www.youtube.com/watch?v=vU4OYSSgf1E"><img src="/docs/images/스크린샷, 2021-10-20 20-21-55.png"></a>
		</td>
		</tr>
	<td align="center">
			<b>소개 영상</b>
		</td>
	</table>

<h4 align="center">이미지 클릭 시연 영상으로 이동합니다.</h4><br><br><br>

## DataBase

<div>
<img src="/docs/images/DataBase.png" align="left"  width="100%" />    
</div>

<br />

## API DOCS

<div>

### calendar

<img src="/docs/images/userAPI.png" align="left"  width="100%" />      

### meet

<img src="/docs/images/meetAPI.png" align="left"  width="100%" />      

### user

<img src="/docs/images/calendarAPI.png" align="left"  width="100%" />

</div>

<br />

<br />

## 기대효과

<img src="/docs/images/기대효과.png" align="left"  width="100%" />

- 줄어들지 않는 코로나 바이러스 감염 상황에서 온라인을 통한 프로그램은 필수 불가결합니다. 하지만 군 내에서 진행하는 콘텐츠의 경우 오직 실시간 영상 시청 방식 만을 사용하고 있는 것이 현실입니다. 
- 따라서 저희는 일방적인 정보 전달 방식이 아닌 실시간으로 상호작용 할 수 있게 만들어주는 웹 서비스를 구현하고자 합니다. 
- 예를 들어 다수가 온라인 상에서 제한 없이 만날 수 있어 더 효율적인 교육과 종교에서의 행사, 공연, 면접, 상담 등 여러가지 방면에서 활용 가능합니다. 
- 또한 이것이 오픈 소스로써 공개되어 더욱 발전할 수 있다면 정부나 민간 기업, 군 업무에서 까지 활용하는 모습을 기대하고 있습니다.

<br/>

## 개발 스택

### Front-End

- React
- React-Router
- Recoil
- Styled-components
- socket io
- typescript

<table><tbody>
 <tr>
  <td>
   <div align="center"><a href="https://reactjs.org/" target="_blank"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt=
"react" width="40" height="40" /> </a><br>React.js</div>
  </td>
  <td>
   <div align="center"><a href="https://www.typescriptlang.org/" target="_blank"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40" /> </a><br>Typescript</div>
  </td>
  <td>
   <div align="center"><a href="https://www.w3.org/html/" target="_blank"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40" /> </a><br>Html5</div>
  </td>
  <td>
   <div align="center"><a href="https://socket.io/" target="_blank"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" alt="socket.io" width="40" height="40"/> </a><br>Socket.io</div>
  </td>
  <td>
   <div align="center"><a href="https://recoiljs.org/ko/" target="_blank" >Recoil</a></div>
</td>
  <td width="60">
   <div align="center"><a href="https://styled-components.com/" target="_blank" width="40" height="40">Styled-Component</a></div>
  </td>	 
 </tr>
 </tbody></table>
 
 ### Back-End
 
- Nodejs
- Express
- MongoDB
- Mongoose
- socket io
- typescript
- wrtc
<table><tbody>
 <tr>
  <td width="60">
   <div align="center"><a href="https://nodejs.org" target="_blank"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="node.js" width="40" height="40" /> </a><br>Node.js</div>
  </td>
  <td width="60">
   <div align="center"><a href="https://expressjs.com" target="_blank"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </a><br>Express</div>
  </td>
  <td width="60">
   <div align="center"><a href="https://www.typescriptlang.org/" target="_blank"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"  /> </a><br>Typescript</div>
  </td>
  <td width="60">
   <div align="center"><a href="https://strapi.io/" target="_blank"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" alt="socket.io" width="40" height="40" /> </a><br>Socket.io</div>
  </td>
 </tr>
 </tbody></table>
 
 ### Database
 
 - MongoDB
 - Mongoose
 <table><tbody>
 <tr>
  <td>
   <div align="center"><a href="https://www.mongodb.com/" target="_blank"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" alt="mongoDB" width="40" height="40" /> </a><br>MongoDB</div>
  </td>
  <td>
   <div align="center"><a href="https://mongoosejs.com/" target="_blank">Mongoose</a></div>
  </td>	 
</tr>
 </tbody></table>

## 프로젝트 실행 방법
<details><summary><b>실행 방법 보기</b></summary>

# 설치 가이드
	
아래 지시사항을 통해 프로젝트를 실행하실 수 있습니다.

<br />

## 필수 구성 요소

- Node.js
- MongoDB

<br />

## 설치

1. 프로젝트 클론

```console
$ git clone https://github.com/osamhack2021/WEB_Untact_Operation_Comand_UOC
```

2. 패키지 설치

```console
$ cd WEB(FE)
$ npm install
$ cd ../WEB(BE)
$ npm install
```

3. 환경 변수 설정  
   WEB(BE) 폴더 안에 .env 파일 생성 후 아래 내용 기입

```
PORT=8080
DBURL=몽고디비주소
JWT_SECRET=untact-operation-command
```

## Backend 서버 실행

```console
$ cd WEB(BE)
$ npm run dev
```

## Frontend 서버 실행

```console
$ cd WEB(FE)
$ npm start
```
</details>
<br />

## 개발 기록
<details><summary><b>10월</b></summary>
<b>2021.10.17</b>
	
- google 회원가입 API
- google 로그인 API
- user model에 social 계정 관련 schema 추가
- 구글 로그인, 회원가입 (프론트 - 백 연동)
	
<b>2021.10.15</b>
	
- 마이페이지 반응형 구현
- 친구목록 페이지 반응형 구현
- 일정 페이지 반응형 구현
	
<b>2021.10.14</b>
	
- google-login-client 설정
	
<b>2021.10.13</b>
	
- 친구 추가, 삭제 후 새로고침 없이 친구목록 정보 업데이트 하게 설정
	

<b>2021.10.12</b>
	
- 친구 검색 기능 구현
- 친구 추가 기능 구현
	

<b>2021.10.11</b>
	
- 캠 설정 변경 기능 추가
- 화면 공유 기능 구현
- Mobile Header UI 구현
- Mobile SideBar UI 구현
- Mobile SearchBar UI 구현
	

<b>2021.10.10</b>
	
- 개인 정보 수정 기능 구현
- 개인 정보 수정 UI 구현
- 개인 정보 (프론트 - 백 연동)
	

<b>2021.10.09</b>
	
- 회의 비밀번호 모달 수정
	
<b>2021.10.08</b>
	
- 회의 검색 API
- 회의 검색 UI 구현
- 회의 검색(프론트 - 백 연동)
- searchForm hooks로 분리
	
<b>2021.10.07</b>
	
- 비밀 회의 입장시 비밀번호 modal 생성
- 회의 비밀번호 체크 API 구현
- 회의 비밀번호 체크 UI 구현
- 회의 비밀번호 체크 (프론트 - 백 연동)
- meet Model Schema에 menu추가
- Home Nav Menu 활성화 UI
- Home Nav Link 기능 구현
	
<b>2021.10.06</b>>
	
- 친구 삭제 기능 구현
	
<b>2021.10.05</b>
	
- 화상 회의속 채팅방 UI 수정
	
<b>2021.10.04</b>
	
- 회의 종료시 호스트가 회의를 종료했습니다 모달 창 띄우기
- AuthError 컴포넌트 생성
- socket 코드 리팩토링
	
<b>2021.10.03</b>
	
- MeetNotFound Image 추가
- 음소거 안했는데 말 안들리는 현상 해결
- 음소거하면 상대방 한테 내 음소거 상태 보여주기
- schedule 상세보기 구현
- 화상 회의 속 채팅방 기능 구현
	
<b>2021.10.02</b>
	
- 회의 video 더블클릭시 전체화면
- Image 공통 컴포넌트 반응형으로 구현
- 회의 Sidebar toggle시 animation 효과 적용
- 채팅 Sidebar UI 구현
	
<b>2021.10.01</b>
	
- 호스트가 회의 종료시 회의 삭제
- Auth localStorage -> sessionStorage
- logout 클릭시 userState를 useResetRecoil로 초기화
- 회의 참여시 사이드바에 보여지는 user.id를 user.name으로 변경
- 회의 방 제목 띄우기

</details>

<details><summary><b>9월</b></summary>
	<b>2021.09.30</b>

- Meet Thumbnial 이미지 업로드(백-프론트 연동)
- 화면 공유 Icon 변경
- 특정 회의 조회 API
- Meet validation
- Loading 공통 컴포넌트 구현
- 회의 목록 불러올때 loading 컴포넌트 추가

<b>2021.09.29</b>
	
- schedule 등록시 새로고침 없이 화면 출력
- 로그인 해야만 스케줄 등록가능하게 수정

<b>2021.09.28</b>

- 일정생성 client-server 연동
- read Meet List API 구현
- Meet Thumbnail Img Upload API 구현
- Meet 생성 (백-프론트 연동)
- Meet 리스트 조회(백-프론트 연동)

<b>2021.09.27</b>
	
- meet model 수정
- create Meet API 구현

<b>2021.09.26</b>
	
- userStorage(localStorage) 적용
- recoil initializeState 설정
- MembersPage
- Login API와 Client 연동
- Register API와 Client 연동
- Logout API와 Client 연동
- Members List 조회

<b>2021.09.25</b>

- LoginPage UI 구현
- RegisterPage UI 구현
- useInput 공통 hooks 생성
	
<b>2021.09.24</b>
	
- 일정 관리 TimeIssue 해결
	

<b>2021.09.23</b>
	
- 일정 생성, 일정 조회, 일정 삭제 API 구현

<b>2021.09.22</b>
	
- 스케줄 일정 생성 Modal UI 구현
	
<b>2021.09.21</b>
	
- 스케줄 일정 생성 Button 구현

<b>2021.09.20</b>
	
- 화상회의 목록 Grid UI 구현
- HomePage 반응형 UI 구현
- Calendar model 구현
- Calendar UI 구현 (fullcalendar library 사용)
- Modal 공통 컴포넌트 구현
- 회의 생성 Modal UI 구현
	
<b>2021.09.19</b>
	
- user model 구현
- user login, logout, register API, 라우터 구현
- user checkLoggedIn 미들웨어 구현

<b>2021.09.18</b>
	
- 메인 Page Title 설정
- chaanel-API-KEY config 파일로 이동
	
<b>2021.09.17</b>
	
- channel-plugin 구현
- Aside 반응형(테블릿) 구현
	
<b>2021.09.16</b>
	
- media, palette 추가
- 메인 Aside 템플릿 추가

<b>2021.09.15</b>
	
- app.ts에서 socket 함수 파일 분리
- meet 모델 생성

<b>2021.09.12</b>
	
- 화면 공유 기능(getDisplayMedia) 예제코드 추가
	
<b>2021.09.11</b>
	
- Eslint 에러 제거
- Video 화질 고화질로 설정
	
<b>2021.09.10</b>
	
- SFU 서버 타입스크립트로 변경
	
<b>2021.09.09</b>
	
- Meet 종료 기능, 버튼 추가
- 유저 목록 버튼 추가
- user SideBar에 유저 목록 표시
- user SideBar에 음소거 아이콘 추가
	
<b>2021.09.08</b>
	
- Meet Grid 비율 수정
- video Toggle, audio Toggle 추가
	
<b>2021.09.07</b>
	
- Meet User Side Bar 구현

<b>2021.09.06</b>
	
- my Stream 정보 추가
- 캠 비율 width, height 값 설정

<b>2021.09.05</b>
	
- socket room 설정
- Meet Grid UI 생성
	
<b>2021.09.04</b>
	
- client-SFU peer 연결 구현

<b>2021.09.02</b>
	
- SFU 서버 구축
</details>
<br />

## 팀원
<table width="900">
<thead>
<tr>
<th width="100" align="center">Profile</th>
<th width="100" align="center">Name</th>
<th width="250" align="center">Role</th>
<th width="150" align="center">Github</th>
<th width="300" align="center">E-mail</th>
</tr> 
</thead>
<tbody>

<tr>
<td width="100" align="center"><img src="/docs/images/이재하.jpg" width="60" height="60"></td>
<td width="100" align="center">이재하</td>
<td width="250">
	
- 유저 인터페이스 설계
- Frontend 핵심 기능 구현
- 프로젝트 기획 및 관리
- 웹 디자인 설계 및 구현
	
</td>
<td width="150" align="center">	
	<a href="https://github.com/Leejha">
	<img src="https://img.shields.io/badge/JHL-655ced?style=social&logo=github"/>
	</a>
</td>
<td width="300" align="center">
<a href="mailto:mslee300@bu.edu"><img src="https://img.shields.io/static/v1?label=&message=jhl2619@naver.com&color=lightblue&style=flat-square&logo=naver"></a>
</tr>
	
 
<tr>
<td width="100" align="center"><img src="/docs/images/최수용.jpg" width="60" height="60"></td>
<td width="100" align="center">최수용</td>
<td width="250">
	
- Backend 서버 환경 구축
- DB 설계 및 구축
- API 및 DB 설계
- 기타 부가 기능 구현
	
</td>
<td width="150" align="center">	
	<a href="https://github.com/dpfprtus">
	<img src="https://img.shields.io/badge/CSY-655ced?style=social&logo=github"/>
	</a>
</td>
<td width="300" align="center">
<a href="mailto:dpfprtus@gmail.com"><img src="https://img.shields.io/static/v1?label=&message=dpfprtus@gmail.com&color=lightblue&style=flat-square&logo=gmail"></a>
</tr>
	</tobdy></table>
<div>
<img src="/docs/images/비작사-001.png" align="center"  width="100%" />
	</div>
