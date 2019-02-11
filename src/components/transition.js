import React from 'react'
import {
  TransitionGroup,
  Transition as ReactTransition,
} from 'react-transition-group'

const timeout = 250
const getTransitionStyles = {
  entering: {
    transform: `translateX(100vw)`,
  },
  entered: {
    transition: `transform ${timeout}ms ease-in-out`,
    transform: `translateX(0vw)`,
  },
  exiting: {
    transition: `transform ${timeout}ms ease-in-out`,
    transform: `translateX(100vw)`,
  },
}

class Transition extends React.PureComponent {
  reportLocation(location) {
    console.log(location)
  }
  render() {
    const { children, location } = this.props

    return (
      <TransitionGroup>
        <ReactTransition
          key={location.pathname}
          timeout={{
            enter: timeout,
            exit: timeout,
          }}
        >
          {status => (
            <div
              style={{
                ...getTransitionStyles[status],
              }}
            >
              {children}
            </div>
          )}
        </ReactTransition>
      </TransitionGroup>
    )
  }
}

export default Transition
