import React, { Component } from "react";
import { RoomContext } from "../context";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    const { rooms: rooms, featuredRooms: featuredRooms } = this.context;
    console.log(rooms);
    console.log(featuredRooms);
    return <div></div>;
  }
}
