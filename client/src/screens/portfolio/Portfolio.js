import React, { useState } from 'react'
import './portfolio.css'
import portfolioData from '../../helpers/portfolioData'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function Portfolio() {
    const [modalShow, setModalShow] = useState(false);
    const [tempData, setTempData] = useState({})

    function createModal(data) {
        return (
            <Modal
                show={modalShow}
                onhide={() => setModalShow(false)}
                size="lg"
                arial-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header>
                    <Modal.Title id='contained-modal-title-vcenter'>
                        {data.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {data.summary}
                    <Image src={data.image} style={{ width: "200px" }} />
                </Modal.Body>
                <a id='portfolio-modal-link' href={data.link} target='blank' rel='noreferrer'>Go to site</a>
                <Modal.Footer>
                    <div>
                        Technologies used:
                        <p style={{ fontSize: '0.7rem', marginRight: 'auto' }}>{data.tech}</p>
                    </div>
                    <Button onClick={() => setModalShow(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }

    const mapped = portfolioData.map((e, idx) => {
        return (
            <Card key={idx} id='portfolio-card-container'>
                <Image className='portfolio-image'
                    onClick={() => {
                        setTempData({
                            image: e.image,
                            link: e.link,
                            title: e.title,
                            summary: e.summary,
                            tech: e.tech
                        })
                        setModalShow(true)
                    }}
                    src={e.image} />
                <div className='portfolio-click-info'>&#x1F50E;&#xFE0E;</div>
                {createModal(tempData)}
            </Card>
        )

    })



    return (
        <div className='portfolio-main-container' id='portfolio'>
            <h1>Featured Projects</h1>

            <Container fluid='lg' style={{ padding: '2rem 0' }}>
                <Row>
                    {mapped}
                </Row>

            </Container>
        </div>
    )
}

export default Portfolio


