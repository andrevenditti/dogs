import React from 'react'

const validationTypes = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Preencha um email valido',
  },
  password: {
    regex:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    message:
      'Minimo 8 caracteres, pelo menos uma letra maiuscula, uma letra minuscula, um numero e um carater especial[@$!%*?&]',
  },
}

const useForm = (type) => {
  const [value, setValue] = React.useState('')
  const [error, setError] = React.useState(null)

  const validate = (value) => {
    if (type === false) return true
    if (value.length === 0) {
      setError('Preencha um valor')
      return false
    } else if (
      validationTypes[type] &&
      !validationTypes[type].regex.test(value)
    ) {
      setError(validationTypes[type].message)
      console.log(!validationTypes[type].regex.test(value))
      return false
    } else {
      setError((prevError) => (prevError ? null : prevError))
      return true
    }
  }

  const onChange = ({ target }) => {
    setValue(target.value)
    if (error) validate(target.value)
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  }
}

export default useForm
