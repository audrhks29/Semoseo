# [React] 20230705 도서등록 홈페이지
**초기 로그인**

**ID : user**

**PW : 1234**
## 1. 사용기술
### 사용된 기술
<img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white"> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/context-6699CB?style=flat-square&logoColor=white"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"> <img src="https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=white"> <img src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=Redux&logoColor=white"> <img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=Axios&logoColor=white"> <img src="https://img.shields.io/badge/styled_components-DB7093?style=flat-square&logo=styledcomponents&logoColor=white">
### v1.1.3
1. <img src="https://img.shields.io/badge/styled_components-DB7093?style=flat-square&logo=styledcomponents&logoColor=white"> 라이브러리 사용
2. GlobalStyle적용
   ```js
   yarn add styled-components
   ```
   ```js
   yarn add styled-reset //리셋파일 적용
   ```

   ```js
   //App.jsx

   import Main from './components/Main'
   import GlobalStyles from './styled/GlobalStyle.js'

   const App = () => {
   return (
      <>
         <GlobalStyles /> //GlobalStyles적용
         <Main />
      </>
   );
   };

   export default App;
   ```
   ```js
   //GlobalStyle.js

   import { createGlobalStyle } from 'styled-components';
   import reset from 'styled-reset';
   const GlobalStyles = createGlobalStyle` 
   ${reset} //기본 스타일 초기화

      a{
         text-decoration: none;
         color: inherit;
      }
      *{
         box-sizing: border-box;
      }
      input, textarea { 
         -moz-user-select: auto;
         -webkit-user-select: auto;
         -ms-user-select: auto;
         user-select: auto;
      }
      input:focus {
         outline: none;
      }

      button {
         border: none;
         background: none;
         padding: 0;
         cursor: pointer;
      }
   `;
   export default GlobalStyles;
   ```
### v1.1.1
1. <img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=Axios&logoColor=white"> await axios.get 사용하여 책 데이터 불러오기
[책 데이터 주소](https://gist.githubusercontent.com/audrhks29/8820832dceac9aaab644ee7d8880e4db/raw/2919e690f730629168d69431c56c272c1de04ee7/bookData.json)
   ```
   yarn add axios
   ```
   ```js
   export const getBookData = createAsyncThunk(
      'book/getBookData',
      async () => {
         const res = await axios.get('https://gist.githubusercontent.com/audrhks29/8820832dceac9aaab644ee7d8880e4db/raw/2919e690f730629168d69431c56c272c1de04ee7/bookData.json')
         return res.data
      }
   )
   ```
### v1.1.0
   1. <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"> reset파일 추가
   2. <img src="https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=white"> 추가
   3. <img src="https://img.shields.io/badge/context-6699CB?style=flat-square&logoColor=white"> -> <img src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=Redux&logoColor=white"> 라이브러리로 수정
### v1.0.0
<img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white"> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/context-CC6699?style=flat-square&&logoColor=white">
## 2. Version Update

### v1.1.3
   1. <img src="https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=white"> 삭제
   2. <img src="https://img.shields.io/badge/styled_components-DB7093?style=flat-square&logo=styledcomponents&logoColor=white"> 추가
### v1.1.2
   1. context 폴더 삭제
   2. 검색기능 추가
### v1.1.1
   1. <img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=Axios&logoColor=white"> 사용
   2. localStorage에 데이터 저장
### v1.1.0
   1. 로그인, 로그아웃 기능 추가
   2. 데이터 수정 기능 추가
   3. 미로그인 시 로그인 페이지로 이동 추가
   4. <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"> reset파일 추가
   5. <img src="https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=white"> 추가
   6. <img src="https://img.shields.io/badge/context-6699CB?style=flat-square&logoColor=white"> -> <img src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=Redux&logoColor=white"> 라이브러리로 수정
### v1.0.0
   1. 도서관리 및 등록 페이지 제작
