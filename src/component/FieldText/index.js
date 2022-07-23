import React from 'react'
import {
  FieldTextContainer,
  FieldTextLabel,
  FieldTextInput,
  FieldTextErrorMessage,
} from './style'
// import util
import randomKey from '../../utils/randomKey'

/**
 * Component with input+label reusability
 *
 * @param {String} label
 * @param {String} type
 * @param {String} className
 * @param {Object} rest
 * */
function FieldText({
  label = null,
  type = 'text',
  className = '',
  Placeholder = '',
  errorMessage = '',
  inputRef = null,
  ...rest
}) {
  // random id to assing to input field & make reference from label
  const idFieldText = randomKey()

  return (
    <>
      <FieldTextContainer>
        {
          // if label property is passed, render the label
          label ? (
            <FieldTextLabel htmlFor={idFieldText}>{label}</FieldTextLabel>
          ) : null
        }

        {/* ...rest assing other props passed into component invoke */}
        <FieldTextInput ref={inputRef} id={idFieldText} type={type} {...rest} />
        {errorMessage && (
          <FieldTextErrorMessage>{errorMessage}</FieldTextErrorMessage>
        )}
      </FieldTextContainer>
    </>
  )
}

export default React.memo(FieldText)
