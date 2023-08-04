import React, { Fragment } from 'react'
import '../style/Modal.css'

import { createPortal } from 'react-dom'

export const Modal = (props) => {
  return createPortal(
    <Fragment>
      <div className="backdrop"></div>
      <div className="modal">
        <div>{props.children}</div>
      </div>
    </Fragment>,
    document.getElementById('modalbox'),
  )
}
