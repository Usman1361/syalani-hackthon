import Link from "next/link";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function MiniCards(Props: any) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={Props.src} height={200} width={60} />
      <Card.Body className="colorchange">
        <Card.Title>{Props.title}</Card.Title>
        <Card.Text>{Props.detail}</Card.Text>
        <Button variant="primary">
          <Link href={Props.hlink} className="linkstyle">
            {Props.buttoninfo}
          </Link>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default MiniCards;
