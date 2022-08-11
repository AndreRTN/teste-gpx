import React, { useState } from 'react'
import SelectText from '../../components/SelectText'
import './styles.css'
const Items: React.FC = () => {
    
    const [selected,setSelected] = useState<string>()
    const [input,setInput] = useState<string>("")
    const handleSelect = (value: string) => setSelected(value) 
    const [items,setItems] = useState<string[]>(["opção 1"])

    const addItemOption = () => {
        if(!input  || items.includes(input)) return
        const copy = Array.from(items)
        copy.push(input)
        setItems(copy)
    }

    const removeItemOption = () => {
        const copy = items.filter(item => item !== input)
        handleSelect(copy[copy.length - 1]  || "Selecione uma opção")
        setItems(copy)
    }

    const clearInput = () => setInput("")

    return (
        <div className='items-container'>
            <SelectText handleSelected={handleSelect} items={items} />
            <input value={input} onChange={(e) => setInput(e.target.value)} placeholder='Insira um item' type="text" />
            <div className='actions'>
                <button onClick={addItemOption}>Adicionar item</button>
                <button onClick={removeItemOption}>Remover item</button>
                <button onClick={clearInput}>Limpar seleção</button>
            </div>
            <p> {selected}</p>
        </div>
    )
}

export default Items