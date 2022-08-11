import React, { useEffect, useState } from 'react'
import './styles.css'
interface Props {
  items: string[],
  handleSelected: (e: string) => void
  
}

  const SelectText: React.FC<Props> = ({items, handleSelected}) => {
    const [selected, setSelected] = useState('')

    useEffect(() =>  {
      handleSelected("Selecione uma opção")
    }, [])
    const selectOption = (value: React.FormEvent<HTMLSelectElement>) => {
      handleSelected(value.currentTarget.value)
      setSelected(value.currentTarget.value)
    }

    const renderItems = () => items.map((item) => <option key={item} className='item-text' value={item}>{item}</option> )


  return (
    <select style={{textTransform: 'capitalize'}} placeholder='Selecione uma opção' onChange={selectOption} value={selected} name='items' id='items'>
      <option disabled={items.length > 0} value="">Selecione uma opção</option>
      {renderItems()}
    </select>
  )
}

export default SelectText