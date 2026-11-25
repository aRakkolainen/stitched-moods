import Form from 'react-bootstrap/Form';

function MoodSelector(){
    return(
        <>
        <h1>Select mood for a new palette</h1>
        <Form>
            <div key="inline-radio" className='mb-3'>
                <Form.Check 
                inline
                label="Peaceful"
                type="radio"
                name="group1"
                />
                 <Form.Check
                 inline
                 label="Romantic"
                 type="radio"
                 name="group1"
                />
                 <Form.Check // prettier-ignore
                 inline
                 label="Mystery"
                 type="radio"
                 name="group1"
                />
            </div>
           
        </Form>
        </>
    )

}

export default MoodSelector;