# <div align="center">untact-operation-command ( UOC )</div>

### <div align="center">군인들을 위한 화상 플랫폼💂 <b>비대면 작전 사령부</b></div>

<br />

코로나바이러스감염증-19(COVID-19)가 전 세계를 강타하면서 삶의 많은 부분이 변했습니다. 온라인으로 진행하는 행사와 강의, 무인 키오스크 등 모든 것을 비대면으로 행하는 사회가 되었습니다. 이에 따라 군 내에서도 비대면의 필요성이 대두 되었고, 현재 대부분의 컨텐츠는 온라인으로 진행하고 있습니다. 하지만 이것들은 실시간 영상 시청 방식을 사용하여 일방적인 정보 전달만 가능합니다. 효율적으로 상호작용 하기 위해서는 즉각적인 양방향 소통이 가능해야 합니다. 따라서 저희는 화상회의 시스템을 각 군 상황에 맞게 적용하고자 하였습니다. 웹에서 화상 통화가 가능하게 서비스할 것이고 현재 온라인으로 진행 중인 종교 활동이나 강의, 상담에 까지 이용할 수 있도록 기획하였습니다.

<br />


## 메뉴얼
깃북을 통해서 UOC프로젝트의 모든것을 확인해 보세요!
<p align="center">
  <a href="https://dpfprtus.gitbook.io/uoc/" target="_blank">
    <img src="https://img.shields.io/badge/GitBook-project_doc-blue?&style=for-the-badge&logo=github" />
  </a>
</p>

## UOC 기능

### webRTC & socket io

- 웹캠을 이용한 화상 통화 (1:N 통화 가능, 캠,마이크,스피커 설정 변경 가능)
- 컴퓨터 화면 공유 기능
- 채팅 기능
- 진행 중인 화상회의 목록 제공
- 회의 검색 기능
- 회의 생성 기능 (회의 이름, 썸네일, 설명, 비밀번호 설정 가능)
- 회의 참석자 목록 제공
- 회의 종료 (호스트가 회의 종료시 자동 회의 종료)

### jwt & OAuth2.0

- jwt를 이용해 안전하게 사용자 인증 (로그인, 회원가입)
- OAuth2.0을 이용해 간편하고 안전한 소셜 로그인 (google 계정으로 회원가입, 로그인)

### full Calander

- 화상 회의 일정 등록,수정,삭제 가능
- 회의 일정 주/월/일별 확인 가능

### user

- 친구 목록, 추가, 삭제 가능
- 친구와 1:1 화상채팅 원클릭 생성
- 개인 정보 수정 가능

<br />

## 프로젝트 시연

프로젝트 완성 후 공개 🤣

<br />

## DataBase

<div>
<img src="/docs/images/DataBase.png" align="left"  width="100%" />    
</div>

<br />

## API DOCS

<div>
<img src="/docs/images/userAPI.PNG" align="left"  width="100%" />      
<img src="/docs/images/meetAPI.PNG" align="left"  width="100%" />      
<img src="/docs/images/calendarAPI.PNG" align="left"  width="100%" />

</div>

<br />

<br />

## 기대효과

줄어들지 않는 코로나 바이러스 감염 상황에서 온라인을 통한 프로그램은 필수 불가결합니다. 하지만 군 내에서 진행하는 콘텐츠의 경우 오직 실시간 영상 시청 방식 만을 사용하고 있는 것이 현실입니다. 따라서 저희는 일방적인 정보 전달 방식이 아닌 실시간으로 상호작용 할 수 있게 만들어주는 웹 서비스를 구현하고자 합니다. 예를 들어 다수가 온라인 상에서 제한 없이 만날 수 있어 더 효율적인 교육과 종교에서의 행사, 공연, 면접, 상담 등 여러가지 방면에서 활용 가능합니다. 또한 이것이 오픈 소스로써 공개되어 더욱 발전할 수 있다면 정부나 민간 기업, 군 업무에서 까지 활용하는 모습을 기대하고 있습니다.

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

프로젝트 [설치 가이드 보러가기](docs/installation.md)

<br />

## 개발 기록

-

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
<td width="100" align="center"><img src="/image/PROFILE1.png" width="60" height="60"></td>
<td width="100" align="center">이재하</td>
<td width="250">Frontend</td>
<td width="150" align="center">	
	<a href="https://github.com/Leejha">
	<img src="https://img.shields.io/badge/JHL-655ced?style=social&logo=github"/>
	</a>
</td>
<td width="300" align="center">
<a href="mailto:mslee300@bu.edu"><img src="https://img.shields.io/static/v1?label=&message=jhl2619@naver.com&color=lightblue&style=flat-square&logo=naver"></a>
</tr>
	
 
<tr>
<td width="100" align="center"><img src="/image/PROFILE1.png" width="60" height="60"></td>
<td width="100" align="center">최수용</td>
<td width="250">Backend</td>
<td width="150" align="center">	
	<a href="https://github.com/dpfprtus">
	<img src="https://img.shields.io/badge/CSY-655ced?style=social&logo=github"/>
	</a>
</td>
<td width="300" align="center">
<a href="mailto:dpfprtus@gmail.com"><img src="https://img.shields.io/static/v1?label=&message=dpfprtus@gmail.com&color=lightblue&style=flat-square&logo=gmail"></a>
</tr>
