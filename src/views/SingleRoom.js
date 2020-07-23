import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import StyledHero from "../components/StyledHero";

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id
    }
  }
  static contextType = RoomContext;
  render() {
    const { getRoom } = this.context;
    console.log(this.state.id);
    const room = getRoom(this.state.id);
    console.log(room);
    var [mainImg, ...defaultImgs] = [];
    if (room === 'undefined' || room == null) {
      return (
        <div className="error">
          <h3>No such room found...</h3>
          <Link to="/rooms" className="btn-primary">Back to rooms</Link>
        </div>
      )
    }
    else {
      [mainImg, ...defaultImgs] = room.images;
    }
    return (
      <>
        <StyledHero img={mainImg}>
          <Banner title={room.name}>
            <Link to="/rooms" className="btn-primary">Back to rooms</Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImgs.map((item, index) => {
              return <img key={index} src={item} alt={room.name} />;
            })}
          </div>
        </section>
        <div className="single-room-info">
          <div className="desc">
            <h3>Details</h3>
            <p>{room.description}</p>
          </div>
        </div>
      </>
    );
  }
}
