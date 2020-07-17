import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props.match.params.id);
    this.state = {
      id: this.props.match.params.id
    }
  }
  static contextType = RoomContext;
  render() {
    const {getRoom} = this.context;
    const room = getRoom(this.state.id);
    if(!room) {
      return (
        <div className="error">
          <h3>No such room found...</h3>
          <Link to="/rooms" className="btn-primary">Back to rooms</Link>
        </div>
      )
    }
    console.log(room);
    return (
      <Hero hero="roomsHero">
        <Banner title={room.name}>
          <Link to="/rooms" className="btn-primary">Back to rooms</Link>
        </Banner>
      </Hero>
    );
  }
}
