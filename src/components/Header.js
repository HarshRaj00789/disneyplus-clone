import styled from "styled-components";
import { auth, provider } from "../firebase";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUserName,  selectUserEmail,  selectUserPhoto, setUserLoginDetails, setSignOutState  } from "../features/user/userSlice";
import { setUserId } from "firebase/analytics";

const Nav = styled.nav`
  top: 0;
  position: fixed;
  left: 0;
  right: 0;
  display: flex;
  height: 60px;
  background-color: #090b13;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`

    padding:0;
    width:80px;
    margin-top: 4px;
    max-height: 70px;
    font-size:0;
    display:inline-block;

    image{
        display: block;
        width: 100%;
    }
`;

const NavMenu = styled.div`
    align-items : center;
    display: flex;
    flex-flow:row nowrap;
    height:100%;
    justify-content: flex-end;
    padding: 0px;
    margin: 0px;
    position: relative;
    margin-right: auto;
    margin-left: 25px;

    a{
        display:flex;
        align-items: center;
        padding: 0 12px;

        img{
            height:20px;
            min-width: 20px;
            width:20px;
            z-index: auto;
        }
        span{
            color: rgb(249, 249, 249);
            font-size:13px;
            letter-spacing: 1.08px;
            padding: 2px 0px;
            white-space: nowrap;
            position: relative;
        

          &:before{
            background-color: rgb(249, 249, 249);
            border-radius: 0px 0px 4px 4px;
            bottom: -6px;
            content: "";
            height: 2px;
            left: 0px;
            opacity: 0;
            position: absolute;
            right: 0px;
            transform-origin: left center;
            transform: scaleX(0);
            transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
            visibility: hidden;
            width: auto;
          }
        }
        &:hover{
          span:before {
            transfrom: scaleX(1);
            visibility: visible;
            opacity: 1 !important;
          }
        }
      }

    @media (max-width: 768px){
        display: none;
    }
  }
`;

const Login = styled.a`

 background-color: rgb(0,0,0,0.6);
 padding: 8px 16px;
 text-transform: uppercase;
 letter-spacing: 1.5px;
 border: 1px solid #f9f9f9;
 border-radius: 4px;
 transition: all .2s ease 0s;
  &:hover{
    background-color : #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const UserImg = styled.img`
  height: 100%;

`;


const Header = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  const setUser = (user) => {
    dispatch(setUserLoginDetails({
      name : user.name,
      email: user.email,
      photo : user.photoURL,
    }),
    );
  };
   
  const handleAuth = () =>{
    auth.signInWithPopup(provider).then((result) =>{
      setUser(result.user);
    }).catch((error)=>{
      alert(error.message);
      console.log("wrong");
    });
  };
  return (
    <Nav>
      <Logo><img src="/images/logo.svg" alt="Disney+" /></Logo>
      {!userName ? (
         <Login onClick={handleAuth}>Login</Login>
      ) : (
        <>
          <NavMenu>
            <a href="/home">
              <img src="/images/home-icon.svg" alt="HOME" />
              <span>HOME</span>
            </a>
            <a>
              <img src="/images/search-icon.svg" alt="SEARCH" />
              <span>SEARCH</span>
            </a>
            <a >
              <img src="/images/watchlist-icon.svg" alt="HOME" />
              <span>WATCHLIST</span>
            </a>
            <a>
              <img src="/images/movie-icon.svg" alt="HOME" />
              <span>MOVIES</span>
            </a>
            <a>
              <img src="/images/series-icon.svg" alt="HOME" />
              <span>SERIES</span>
            </a>
          </NavMenu>
      <UserImg src ={userPhoto} alt= {userName}/>
      </>
      )}
    </Nav>
  );
};

export default Header;
