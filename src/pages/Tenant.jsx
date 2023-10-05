import { Card, Layout, Typography } from "antd";
import Title from "antd/lib/typography/Title";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Tenant = () => {
    const [detailTenant, setDetailTenant] = useState()

    const { id } = useParams();
    // console.log(id)

    useEffect(() => {
        axios.get(`https://backend-kantin-umn.fly.dev/tenant/${id}`).then((data) => setDetailTenant(data?.data?.data))
    }, [])

    return (
        <>
            <Layout style={{ minHeight: "100vh", display: "flex", alignItems: "center", gap: "20px" }}>
                <div style={{ textAlign: "center", border: "1px black solid", width: "fit-content", borderRadius: "10px", padding: "20px" }}>
                    <Typography>{detailTenant?.full_name}</Typography>
                    <Typography>{detailTenant?.description}</Typography>
                    <Typography>{detailTenant?.location}</Typography>
                </div>
                <div>
                    <Title level={2}>List Menu</Title>
                    <div style={{ display: "flex", gap: "15px" }}>
                        {detailTenant?.tenant_menu?.map((data) => {
                            return (
                                data?.menu?.map((data) =>
                                    <Card
                                        key={data?._id}
                                        hoverable
                                        style={{ width: 240 }}
                                        cover={<img alt="example" src={data?.image} />}
                                    >
                                        <Typography>{data?.title}</Typography>
                                        <Typography>{data?.description}</Typography>
                                    </Card>
                                )
                            )
                        })}
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default Tenant;