import { Card } from 'react-bootstrap';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './../resources/css/card.css';

function NewsCard(item, index) {
  // console.log(`newsCard index is ${index} title is ${item.title}`);
  return <Card
    // key={item.title}
    key={index}
    href={item.url}
    arget={'_blank'}
    rel={'noopener noreferrer'}
    className="text-center"
    bg={'Dark'}
    border="primary"
    style={{ width: '58rem' }}
  >
    <Card.Header as="h5">{`Featured by ${item.source.name}`}</Card.Header>
    <Card.Img
      className={styles.cardImg}
      variant="top"
      src={item.urlToImage} />
    <Card.ImgOverlay>
      <Card.Body>
        <Card.Title>
          <strong>{item.title}</strong>
        </Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <Card.Link
          href={item.url}
          target={'_blank'}
          rel={'noopener noreferrer'}
        >
          Read More
        </Card.Link>
      </Card.Body>
    </Card.ImgOverlay>
    <br />
  </Card>;
}

export default NewsCard ;
