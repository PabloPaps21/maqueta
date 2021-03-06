import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {  faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <div className="containerProductos">
    <div className="cards">
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image="https://res.cloudinary.com/djgqc9rrx/image/upload/v1604541574/prueba/10_zye4wp.png"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            Martillo Trupper
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <p>
            $205.66
          </p>
          <Button size="small" color="primary">
          <FontAwesomeIcon icon={faShoppingCart} style={{backgroundColor: 'none', color: '#5349db', fontSize: '16' }}/>
          <p>Agregar al carrito</p>
          </Button>
        </CardActions>
      </Card>
    </div>
    <div className="cards">
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image="https://res.cloudinary.com/djgqc9rrx/image/upload/v1604541572/prueba/11_ngrotj.png"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            Martillo Trupper
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <p>
            $205.66
          </p>
          <Button size="small" color="primary">
          <FontAwesomeIcon icon={faShoppingCart} style={{backgroundColor: 'none', color: '#5349db', fontSize: '16' }}/>
          <p>Agregar al carrito</p>
          </Button>
        </CardActions>
      </Card>
    </div>
   <div className="cards">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image="https://res.cloudinary.com/djgqc9rrx/image/upload/v1604541573/prueba/12_zepfgf.png"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            Martillo Trupper
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <p>
            $205.66
          </p>
          <Button size="small" color="primary">
          <FontAwesomeIcon icon={faShoppingCart} style={{backgroundColor: 'none', color: '#5349db', fontSize: '16' }}/>
          <p>Agregar al carrito</p>
          </Button>
        </CardActions>
      </Card>
   </div>
    <style jsx>{`
      .containerProductos {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-item: center;
        flex-wrap: wrap;
        padding: 20px 30px;
      }
      .cards {
        margin: 10px 10px;
        background-color: blue;
      }
      .@media (max-width: 600px) {

      }
    `}</style>
    </div>
  );
}