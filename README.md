# WEMALONE

<img src="https://i.ibb.co/725kkWj/2022-11-28-1-23-00.png"/>


## 프로젝트 소개

<p>
향수 판매 웹사이트(조말론)을 모델링 한 프로젝트. Smell is a word, perfume is literature. 다양한 향의 향수를 소개합니다. 소중한 사람들에게 선물하세요. 필터링을 통해 원하는 향을 찾아보세요. 내가 고른 향에 scent fairing을 추천받아보세요.<p>

## 개발인원 및 기간
- Front-end 4명, back-end 2명
- 2022/11/14 ~ 2022/11/25
  
## 기술 Stack

### Front-End
<div>
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white">
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white">
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/sass-CC6699?style=for-the-badge&logo=sass&logoColor=white">
  <img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
</div>

### Back-End
<div>
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white">
  <img src="https://img.shields.io/badge/nodejs-339933?style=for-the-badge&logo=git&logoColor=white">
  <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white">
  <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white">
  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
</div>

### Common
- common : Git, GItHub, AWS, Prettier, TabelPluse
- 협업툴 : Notion, Slack, Trello, PostMan


## 구현 기능
- Sign up : 정규 표현식을 사용한 회원가입 구현
- Sign in : Bcrypt, JWT를 활용한 로그인 구현
- Filter <br>
필터링 조건으로 scent(5가지)와 gender(3가지)를 다중 선택할 수 있게 구현<br>
필터링 조건(정렬방식(ORDER BY), 표시 개수 제한(LIMIT), 시작위치(OFFSET))의 값을 request에 맞게 동작하도록 구현 
- Category : Scent 별로 해당 페이지 이동
- Product Detail : 제품별 사이즈 조회 및 가격 조회 기능 구현
- Cart : 장바구니 기능 구현
- Order : 주문내역 조회기능 구현

## 담당 업무
<table>
  <th>기능</th>
  <th>설명</th>
  <th>담당 개발자</th>
  <tr>
    <td>Sign up</td>
    <td>정규 표현식을 사용한 회원가입 구현</td>
    <td>임창현, 송철진</td>    
  </tr>
    <tr>
    <td>Sign in</td>
    <td>Bcrypt, JWT를 활용한 로그인 구현</td>
    <td>임창현, 송철진</td>    
  </tr>
  </tr>
    <tr>
    <td>Filter</td>
    <td>queryString을 활용한 필터링 기능 구현</td>
    <td>main : 송철진 sub : 임창현</td>    
  </tr>
  </tr>
    <tr>
    <td>Category</td>
    <td>queryString을 활용한 필터링 기능 구현</td>
    <td>임창현, 송철진</td>    
  </tr>
  </tr>
    <tr>
    <td>Product Detail</td>
    <td>제품별 사이즈 조회 및 가격 조회 기능 구현</td>
    <td>임창현, 송철진</td>    
  </tr>
  </tr>
    <tr>
    <td>Cart</td>
    <td>장바구니 기능 구현</td>
    <td>임창현</td>    
  </tr>
  </tr>
    <tr>
    <td>Order</td>
    <td>주문내역 조회기능 구현</td>
    <td>임창현</td>    
  </tr>
</table>

## ERD

<img src="https://i.ibb.co/dMS17x2/2022-11-28-1-44-17.png" >

<h2>
#일정관리(Trello, Notion)</h2>
<hr>
<img src="https://i.ibb.co/92FWD0C/2022-11-28-1-28-42.png">
<img src="https://i.ibb.co/HxX3bnj/2022-11-28-1-31-24.png">

## Reference

- 이 프로젝트는 [조말론](https://www.jomalone.com) 사이트를 참조하여 학습목적으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
- 이 프로젝트에서 사용하고 있는 사진 대부분은 위코드에서 구매한 것이므로 해당 프로젝트 외부인이 사용할 수 없습니다.
