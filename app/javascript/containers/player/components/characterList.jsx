import React from 'react'
import {Button, ListGroup, Row, Col, Card,CardBody, CardText, CardTitle} from "reactstrap";


export default function CharacterList(playerId) {

  return (
      <Card>
        <CardBody>
          <CardTitle>
            <Row>
              <Col sm="2">
                Characters
                <Button outline color="success" size="sm">
                  <i className="fas fa-user-plus" />
                </Button>
              </Col>
            </Row>
          </CardTitle>
          <CardText>
            <ListGroup>
            </ListGroup>
          </CardText>
        </CardBody>
      </Card>

  )

}

