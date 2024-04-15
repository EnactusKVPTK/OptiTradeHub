import React, {useContext, useEffect} from 'react';
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchBrands, fetchDevices, fetchTypes} from "../http/deviceAPI";
import Pages from "../components/Pages";
import Announcement from '../components/Announcement';

const Shop = observer(() => {
    const {device} = useContext(Context)

    useEffect(() => {
        try {
            fetchTypes().then(data => device.setTypes(data))
            fetchBrands().then(data => device.setBrands(data))
            fetchDevices(null, null, 1, 2).then(data => {
                device.setDevices(data.rows)
                device.setTotalCount(data.count)
            })
        } catch (e) {
            console.error(e)
        }
    }, [])

    useEffect(() => {
        try {
            fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, 2).then(data => {
                device.setDevices(data.rows)
                device.setTotalCount(data.count)
            })
        } catch (e) {
            console.error(e)
        }
    }, [device.page, device.selectedType, device.selectedBrand,])

    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <BrandBar/>
                    <Announcement/> 
                    <DeviceList/>
                    <Pages/>
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;
