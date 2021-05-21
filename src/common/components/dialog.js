import React from 'react'
import ReactDOM from 'react-dom'
import { SelectMenu, Button } from 'evergreen-ui'

function SingleSelectedItemExample() {
    const [selected, setSelected] = React.useState(null)
    return (
        <SelectMenu
            title="Select name"
            options={['Apple', 'Apricot', 'Banana', 'Cherry', 'Cucumber'].map((label) => ({ label, value: label }))}
            selected={selected}
            onSelect={(item) => setSelected(item.value)}
        >
            <Button>{selected || 'Select name...'}</Button>
        </SelectMenu>
    )
}


ReactDOM.render(
    <SingleSelectedItemExample />,
    document.getElementById("root")
)