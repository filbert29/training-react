import { Button, Form, Input, message } from "antd";
import Title from "antd/lib/skeleton/Title";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddTenant = () => {
    // const [formIntance] = Form.useForm()

    const navigate = useNavigate()

    const onFinish = (valueForm) => {
        // console.log(valueForm)
        axios.post("https://backend-kantin-umn.fly.dev/admin/tenant/register", valueForm, {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJlbWFpbCI6ImthbnRpbi51bW5AZ21haWwuY29tIiwiaWF0IjoxNjk2NDg2MjY0LCJleHAiOjE2OTcwOTEwNjR9.nt_7kdZ6BmcawsJa0wNkMNvQod9thG3J9c-Ybo7PHG8`,
            },
        })
        .then((response) => {
            if(response.data.status === 201) {
                message.success('Berhasil menambahkan')
                navigate('/')
            }
        }).catch((error) => {
            message.error(error.response.data.message)
        })
        
    }

    return ( 
        <>
            <Title>Add Tenant</Title>
            <Form onFinish={onFinish}>
                <Form.Item name="email" label='Email'>
                    <Input type="email"/>
                </Form.Item>
                <Form.Item name="full_name" label='Full Name'>
                    <Input type="text"/>
                </Form.Item>
                <Form.Item name="location" label="Location">
                    <Input type="text"/>
                </Form.Item>
                <Form.Item name="description" label="Dekripsi">
                    <Input type="text"/>
                </Form.Item>
                <Form.Item name="password" label="Password">
                    <Input type="password"/>
                </Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form>
        </>
     );
}
 
export default AddTenant;