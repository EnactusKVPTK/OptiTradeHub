import React, {useContext, useEffect} from 'react';
import {Container, Navbar} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchBrands, fetchDevices, fetchTypes} from "../http/deviceAPI";
import Pages from "../components/Pages";
import WarningBeta from '../components/WarningBeta';
import Nav from '../components/Nav';

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
            fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, 18).then(data => {
                device.setDevices(data.rows)
                device.setTotalCount(data.count)
            })
        } catch (e) {
            console.error(e)
        }
    }, [device.page, device.selectedType, device.selectedBrand,])

    return (
    <Container style={{margin:'0 auto'}}>
            <Nav/>
            <Row className="mt-2">
                <Col md={2}>
                    <TypeBar/>
                </Col>
                <Col md={10}>
                    <BrandBar/>
                    <WarningBeta/>
                    {/* <Announcement/>  */}
                    <DeviceList/>
                    <Pages/>
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;
