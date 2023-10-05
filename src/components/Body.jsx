import { Button, Card, Col, Row, Typography } from "antd";
import { Content } from "antd/lib/layout/layout";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

const DifferentColorCol = styled(Col)`
    ${({ isGenap }) =>
        isGenap
            ? css`
            background-color: red;
        ` :
            css`
            background-color: green;
        `}
`

const Body = () => {

    const [value, setValue] = useState(0)
    const [array, setArray] = useState([{ color: 'red', id: '1' }, { color: 'green', id: '2' }, { color: 'blue', id: '3' }, { color: 'yellow', id: '4' }, { color: 'purple', id: '5' }, { color: 'black', id: '6' }])
    const [backgroundColor, setBackgroundColor] = useState('')
    const [dataTenant, setDataTenant] = useState([])

    useEffect(() => {
        document.body.style.backgroundColor = backgroundColor
    }, [backgroundColor])

    useEffect(() => {
        axios.get("https://backend-kantin-umn.fly.dev/tenant").then((data) => setDataTenant(data?.data?.data))
    }, [])

    const kurang = () => {
        if (value > 0) {
            setValue(value - 1)
        }
    }

    const tambah = () => {
        setValue(value + 1)
    }

    const isGenap = (value) => {
        return value % 2;
    }

    const navigate = useNavigate()

    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>

            {/* <div style={{display: 'flex', gap: '20px', alignItems: 'center'}}>
                <Button onClick={kurang}>-</Button>
                <Typography>{value}</Typography>
                <Button onClick={tambah}>+</Button>
            </div>

            <Row style={{display: "flex", gap: "10px"}}>
                {array.map((array) =>
                <DifferentColorCol isGenap={isGenap(array.id)} onClick={() => setBackgroundColor(array.color)} key={array.id} span={9}>{array.id}</DifferentColorCol>
                )}
            </Row> */}
            {dataTenant.map((data) =>
                <div key={data?._id}>
                    <Card
                        onClick={() => navigate(`/tenant/${data?._id}`)}
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src={data?.profile_image} />}
                    >
                        <Typography>{data?.full_name}</Typography>
                        <Typography>{data?.description}</Typography>
                    </Card>
                </div>
            )}
        </div>
    );
}

export default Body;