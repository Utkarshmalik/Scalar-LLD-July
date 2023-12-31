import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { memo } from 'react';


const Movie=memo(function Movie(props){

    const {movieDetails, onDelete, isLoggedIn} = props;
    const {posterUrl, name, language, description,director,releaseDate,casts, _id} = movieDetails;

    console.log("movie component re rendered");

    function onMovieDelete(){
      onDelete(_id);
    }

    return <div style={{height:"800px"}}>
         <Link to={`/movie/${_id}`}>
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={posterUrl} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Language {language}</ListGroup.Item>
        <ListGroup.Item>Director {director}</ListGroup.Item>
        <ListGroup.Item>Release Date {releaseDate}</ListGroup.Item>
      </ListGroup>
      <Card.Body>

        {
           isLoggedIn &&   <Button className='m-1' onClick={onMovieDelete} variant="danger">Delete Movie</Button>

        }

        {
            isLoggedIn &&   <Button className='m-1' onClick={onMovieDelete} variant="danger">Add  to Cart </Button>

        }
           

      </Card.Body>
    </Card>
    </Link>
    </div>
})

export default Movie;