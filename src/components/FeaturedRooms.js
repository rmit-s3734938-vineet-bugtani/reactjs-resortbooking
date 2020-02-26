import React, { Component } from "react";
import { RoomContext } from "../context";
import Loading from "./Loading";
import Title from "./Title";
import Room from "./Room";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    let { loading, rooms: rooms, featuredRooms: featuredRooms } = this.context;
    featuredRooms = featuredRooms.map(room => {
      return <Room key={room.id} room={room} />;
    });
    return (
      <div className="featured-rooms">
        <Title title="Featured Rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : featuredRooms}
        </div>
      </div>
    );
  }
}
