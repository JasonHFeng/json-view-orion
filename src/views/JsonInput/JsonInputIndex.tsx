import React, { useState, useEffect, FC } from 'react'
import { Button } from 'antd'

const JsonInputIndex: FC = () => {
  const [inputValue, setInputValue] = useState('jsonInputIndex')
  const [count, setCount] = useState(1)

  // setInputValue('jsonInputIndex2')
  useEffect(() => {
    document.title = `You clicked ${count} times`
  })
  return (
    <div>
      <h3>{inputValue} + {count}</h3>
      <Button
        type="primary"
        onClick={() => setCount(count + 1)}>
        Change count
      </Button>
    </div>
  )
}

export default JsonInputIndex
