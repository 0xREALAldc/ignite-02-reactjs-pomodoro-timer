import styled from 'styled-components'

export const HistoryContainer = styled.main`
  flex: 1;
  padding: 5.6rem;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 2.4rem;
    color: ${(props) => props.theme['gray-100']};
  }
`
// we're using a div around the table because for mobile it's hard to do a table that is good
// then here is a trick because if the table doesn't fit in the screen on mobile, it will create
// the option to the user be able to use scrolling to see the whole table
export const HistoryList = styled.div`
  flex: 1;
  /* this property below helps us when the table it's bigger than the container (screen), it will create scrolling automatically */
  overflow: auto;
  margin-top: 3.2rem;

  table {
    width: 100%;
    /* this border collapse is because if we put a border in our 'td' will create border for each column and the 'side' that the columns divide 
       will have two borders, using collapse it creates only one for both */
    border-collapse: collapse;
    min-width: 600px;

    th {
      background-color: ${(props) => props.theme['gray-600']};
      padding: 1.6rem;
      text-align: left;
      color: ${(props) => props.theme['gray-100']};
      font-size: 1.4rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 2.4rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 2.4rem;
      }
    }

    td {
      background-color: ${(props) => props.theme['gray-700']};
      border-top: 4px solid ${(props) => props.theme['gray-800']};
      padding: 1.6rem;
      font-size: 1.4rem;
      line-height: 1.6;

      &:first-child {
        width: 50%;
        padding-left: 2.4rem;
      }

      &:last-child {
        padding-right: 2.4rem;
      }
    }
  }
`
const STATUS_COLORS = {
  yellow: 'yellow-500',
  green: 'green-500',
  red: 'red-500',
} as const // we use this 'as const' because when typescript reads this STATUS_COLORS variable, it understand that it's a object of strings, and gives error
// in our'props.theme[]' because typescript doesn't understand that this STATUS_COLORS will not change, it reads as a string. Using the 'as const' we tell
// typescript that the only possible values from this object will be these three defined

interface StatusProps {
  // using the 'keyof' and 'typeof' we tell that the 'statusColors' possible values will be the 'keys' of my type STATUS_COLORS
  statusColor: keyof typeof STATUS_COLORS
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  /* we're using these properties from 'flex' above because we will add a new element inside this span using 'before' and 'after' */
  &::before {
    content: '';
    width: 0.8rem;
    height: 0.8rem;
    /* we can use also 9999px to be fully circular */
    border-radius: 50%;
    background: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
  }
`
