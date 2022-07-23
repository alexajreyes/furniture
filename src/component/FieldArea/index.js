import React from 'react'
import {
  FieldTextContainer,
  FieldTextLabel,
  FieldTextAreaInput,
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
function FieldTextArea({
  label = null,
  type = 'text',
  className = '',
  Placeholder = '',
  errorMessage = '',
  inputRef = null,
  rows,
  cols,
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
        <FieldTextAreaInput
          ref={inputRef}
          id={idFieldText}
          type={type}
          // cols={cols ? cols : '30'}
          // rows={rows ? rows : '10'}
          {...rest}
        />
        {errorMessage && (
          <FieldTextErrorMessage>{errorMessage}</FieldTextErrorMessage>
        )}
      </FieldTextContainer>
    </>
  )
}

export default React.memo(FieldTextArea)
