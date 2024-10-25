import React from 'react'

export const Alert = (props) => {
  return (
    <div>
    <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
     <strong>{props.alert.type}</strong> :{props.alert.message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
</div>
  )
}
