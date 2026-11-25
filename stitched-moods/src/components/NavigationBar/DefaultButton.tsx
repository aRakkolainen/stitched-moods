import Button from 'react-bootstrap/Button'

function handleClick(){
    alert('You clicked me!');
}
function DefaultButton({text = "Default"}){
    return (
        <Button onClick={handleClick}>{text}</Button>
    )
}

export default DefaultButton;