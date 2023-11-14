import { ChangeEvent, useState } from 'react'

export const useInputs = <T>(initalValue: T) => {
  const [value, setValue] = useState<T>(initalValue)
  const onChangeForm = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    setValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return [value, onChangeForm, setValue] as const
}
