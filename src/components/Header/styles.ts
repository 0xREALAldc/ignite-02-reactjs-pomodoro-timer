import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex; //let the components be displayed side by side
  align-items: center; // align horizontaly the components in the center of the box
  justify-content: space-between; // puts the components in the opposite extremes of the box

  nav {
    display: flex; //as the default 'flex-direction' is 'row' we don't need to put it
    gap: 0.8rem;

    a {
      width: 4.8rem;
      height: 4.8rem;

      display: flex;
      justify-content: center; // center the tag in the vertical axis
      align-items: center; // center the tag in the horizontal axis;

      color: ${(props) => props.theme['gray-100']};

      /*
       the reason for this border in the 'top' and 'bottom' is because when we're hovering the tag, based in the UI available we need to display 
       a border below the icon. We needed to use in the 'top' and 'bottom' because if we put only in the 'hover' property, when we actually do 
       the 'hover' with the mouse, the icon will be moved in the page. Using the border 'transparent', we will not have this problem. Now the 
       reason to have the border in both 'top' and 'bottom' even that we will only show in the bottom is because we want the icon to stay in the
       center, with or withiout the border. This way, we need to have the same border in the 'bottom' and 'top'
      */
      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme['green-500']};
      }

      &.active {
        color: ${(props) => props.theme['green-500']};
      }
    }
  }
`
