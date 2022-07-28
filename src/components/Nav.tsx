import { NavLink } from "react-router-dom";
import styled from "styled-components"
import Icon from "./Icon";


const NavStyle = styled.nav`
  box-shadow: 0 0 3px rgba(0,0,0,0.5);
  line-height: 16px;
  background: #649173;
  margin-left: -50px;
  ul {     
    display: flex;
    li {
      width: 33.33%;
      text-align: center;
      a {
        padding: 1px;
        margin: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .icon {
          width: 26px;
          height: 26px;
        }
        &.selected {
          color: yellowgreen;
          .icon {fill:yellowgreen}
        }
      }

    }
  }
`;

const Nav = () => {
  return (
    <NavStyle>
          <ul>
            <li>
              <NavLink to="/tags" activeClassName="selected">
                <Icon name="tags" />
                标签页面
              </NavLink>
            </li>
            <li>
              <NavLink to="/money" activeClassName="selected">
                <Icon name="money" />
                记账页面
              </NavLink>
            </li>
            <li>
              <NavLink to="/statistics" activeClassName="selected">
                <Icon name="statistics" />
                统计页面
              </NavLink>
            </li>
          </ul>
    </NavStyle>
  )
}

export default Nav;
